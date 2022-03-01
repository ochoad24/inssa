<?php

namespace App\Http\Controllers;

use App\LoanPayment;
use App\Loan;
use App\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use App\Traits\LoanTrait;
use Exception;
use Luecano\NumeroALetras\NumeroALetras;
use App\User;
use Illuminate\Notifications\Notifiable;
use App\Notifications\TelegramNotification;
use Illuminate\Support\Facades\Config;

class LoanPaymentController extends Controller
{
    use LoanTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $max = LoanPayment::where('loan_payments.idloan', $request->loan)
            ->where('loan_payments.status', 1)
            ->orderBy('loan_payments.id', 'DESC')
            ->get();

        if (count($max) < 1)
            $max = 0;
        else
            $max = $max->first()->id;

        $loanPayments =  LoanPayment::select(
            'id',
            'amount',
            'expectedAmount',
            'capital',
            'interest',
            'bankDefault',
            'paymentDate',
            'expectedPaymentDate',
            'status',
            'created_at',
            DB::raw('COALESCE(paymentDate,"No diponible") as paymentDate'),
            'dutyManager',
            'userCreated',
            'userUpdated'
        )
            ->with('userCreated:id,name', 'userUpdated:id,name', 'userDutyManager:id,name')
            ->where('idLoan', $request->loan)
            ->orderBy('loan_payments.id', 'ASC')->paginate(10);
        return Response::json(['loanspayments' => $loanPayments, 'max' => $max], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $payments = json_decode($request->payments, true);
            $loan = Loan::find($request->loan);
            $capital = 0;
            $interest = 0;
            $bankDefault = 0;
            $listPayment = array();
            foreach ($payments as $payment) {
                $findPayment = LoanPayment::find($payment['id']);
                $findPayment->capital = $payment['capital'];
                $findPayment->interest = $payment['interest'];
                $findPayment->bankDefault = $payment['bankDefault'];
                $findPayment->amount = $payment['total'];
                $findPayment->paymentDate = $request->loanDate;
                $findPayment->status = 1;
                $this->storeTransaction($payment['total'], 'Se realizo el pago del crédito No.' . $request->loan, '+', $request->idaccount, $request->user, $payment['id']);
                $capital += $payment['capital'];
                $interest += $payment['interest'];
                $bankDefault += $payment['bankDefault'];
                $findPayment->save();
                array_push($listPayment, $payment['id']);
            }
            $loan->capital += $capital;
            $loan->interest += $interest;
            $loan->bankDefault += $bankDefault;
            $loan->balance -= ($capital + $interest);
            $isPaymnetAll = LoanPayment::where('idLoan', $loan->id)->where('status', 2)->get();
            if (count($isPaymnetAll) == 0) {
                $loan->status = 1;
                // Notificate to User dutyManager
                $user = User::where('idRol', 1)->get();
                foreach ($user as $user) {
                    $domain = Config::get('app.domain');
                    $body['message'] = "EL CLIENTE " . strtoupper($this->getNameCustomer(Customer::find($loan->idCustomer))) . " HA COMPLETADO SUS PAGOS, YA PUEDE IMPRIMIR LA FACTURA O EL RECIBO CORRESPONDIENTE";
                    $body['file'] = $domain . "/demand/getDocument/{$loan->id}";
                    $body['url'] = $domain . "/solicitudes/ver/{$loan->id}";
                    $user->notify(new TelegramNotification($body));
                }
            }
            $loan->save();
            DB::commit();
            return Response::json(['message' => 'Pago guardado exitosamente', 'payments' => $listPayment], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\LoanPayment  $loanPayment
     * @return \Illuminate\Http\Response
     */
    public function show($Listpayment)
    {
        $Listpayments = explode(',', $Listpayment);
        $loansPayments = array();
        $idCustomer = 0;
        foreach ($Listpayments as $payment) {
            $dbPayment = LoanPayment::find($payment);
            $idCustomer = $dbPayment->idLoan;
            $idLoan = Loan::find($idCustomer);
            $item['id'] = $dbPayment->id;
            $item['paymentDate'] = $dbPayment->paymentDate;
            $item['amount'] = $dbPayment->amount;

            $formatter = new NumeroALetras();
            $item['amountLetters'] = $formatter->toMoney($dbPayment->amount, 2, 'QUETZALES', 'CENTAVOS');

            $item['concept'] = $dbPayment->bankDefault == 0 ? 'PAGO DE CUOTA' : 'PAGO DE CUOTA MÁS MORA';
            $total = LoanPayment::where('idLoan', $dbPayment->idLoan)->where('id', '!=', $dbPayment->id)->where('id', '<', $dbPayment->id)->sum('amount');
            $item['previousBalance'] = $idLoan->amount - $total;
            $item['currentBalance'] = $idLoan->amount - ($total + $dbPayment->expectedAmount);

            array_push($loansPayments, $item);
        }
        $idCustomer = Customer::find(Loan::find($idCustomer)->idCustomer);
        return Response::json(['payments' => $loansPayments, 'customer' => strtoupper($this->getNameCustomer($idCustomer)), 'loan' => $idLoan], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\LoanPayment  $loanPayment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LoanPayment $loanPayment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\LoanPayment  $loanPayment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        DB::beginTransaction();
        try {

            $loanPayment = LoanPayment::find($id);

            $capital = $loanPayment->capital;
            $interest = $loanPayment->interest;
            $bankDefault = $loanPayment->bankDefault;

            $loanPayment->capital = 0;
            $loanPayment->interest = 0;
            $loanPayment->bankDefault = 0;
            $loanPayment->paymentDate = null;
            $loanPayment->amount = 0;
            $loanPayment->status = 2;
            $loanPayment->save();

            $loan = Loan::find($loanPayment->idLoan);
            $loan->interest = $loan->interest - $interest;
            $loan->bankDefault = $loan->bankDefault - $bankDefault;
            $loan->capital = $loan->capital - $capital;
            $loan->balance = $loan->balance + $capital + $interest;
            if ($loan->status == 1)
                $loan->status = 2;
            else if ($loan->status == 2)
                $loan->status = 2;
            else
                $loan->status = 0;
            $loan->save();
            $account = $this->searchTransactionByLoanPayment($id);
            $this->storeTransaction($capital + $interest + $bankDefault, 'Se anuló el pago del crédito No.' . $loan->id . ' con recibo No.' . $loanPayment->id, '-', $account, $request->user);
            DB::commit();
            return Response::json(['message' => 'Pago anulado exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }
    private function getNameCustomer(Customer $customer)
    {
        if (empty($customer->secondName) && empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->firstLastName} {$customer->secondLastName}";
        } else if (!empty($customer->secondName) && empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->secondName} {$customer->firstLastName} {$customer->secondLastName}";
        } else if (empty($customer->secondName) && !empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->firstLastName} {$customer->secondLastName} de {$customer->marriedName}";
        } else if (!empty($customer->secondName) && !empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->secondName} {$customer->firstLastName} {$customer->secondLastName} de {$customer->marriedName}";
        }
    }
}
