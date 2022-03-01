<?php

namespace App\Http\Controllers;

use App\Town;
use App\Departament;
use App\Loan;
use App\Customer;
use App\Demand;
use App\User;
use App\LoanPayment;
use App\Guarantee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use \Exception;
use Luecano\NumeroALetras\NumeroALetras;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->search;
        $permit = $request->permit;

        if ($search == '') {
            $loans = Loan::join('customers', 'customers.id', '=', 'loans.idCustomer')
                ->select(
                    'loans.id',
                    'amount',
                    'balance',
                    'capital',
                    'interest',
                    'bankDefault',
                    'loans.status',
                    'loans.created_at',
                    'loans.dutyManager',
                    'loans.userCreated',
                    'loans.userUpdated',
                    DB::raw('CONCAT(firstName," ",COALESCE(secondName,"")," ",firstLastName," ",secondLastName) as customer')
                );
        } else {
            $search = explode(" ", $request->search);
            $loans = Loan::join('customers', 'customers.id', '=', 'loans.idCustomer')
                ->select(
                    'loans.id',
                    'amount',
                    'balance',
                    'capital',
                    'interest',
                    'bankDefault',
                    'loans.status',
                    'loans.created_at',
                    'loans.dutyManager',
                    'loans.userCreated',
                    'loans.userUpdated',
                    DB::raw('CONCAT(firstName," ",COALESCE(secondName,"")," ",firstLastName," ",secondLastName) as customer')
                )
                ->where(function ($query) use ($search) {
                    foreach ($search as $item) {
                        $query->where('loans.id', 'like', '%' . $item . '%')
                            ->orWhere('amount', 'like', '%' . $item . '%')
                            ->orWhere('balance', 'like', '%' . $item . '%')
                            ->orWhere('capital', 'like', '%' . $item . '%')
                            ->orWhere('interest', 'like', '%' . $item . '%')
                            ->orWhere('bankDefault', 'like', '%' . $item . '%')
                            ->orWhere('firstName', 'like', '%' . $item . '%')
                            ->orWhere('secondName', 'like', '%' . $item . '%')
                            ->orWhere('firstLastName', 'like', '%' . $item . '%')
                            ->orWhere('secondLastName', 'like', '%' . $item . '%')
                            ->orWhere('dpi', 'like', '%' . $item . '%')
                            ->orWhere('nit', 'like', '%' . $item . '%');
                    }
                });
        }
        if ($permit == "true")
            $loans->where('loans.dutyManager', $request->user);
        return $loans->with('userCreated:id,name', 'userUpdated:id,name', 'userDutyManager:id,name')
            ->orderBy('loans.created_at', 'desc')
            ->paginate(10);
    }
    public function getLoan(Request $request)
    {
        $search = explode(" ", $request->filter);
        return Customer::join('loans', 'loans.idcustomer', '=', 'customers.id')
            ->select(
                DB::raw('CONCAT(loans.id,". ",firstName," ",COALESCE(secondName,"")," ",firstLastName," ",secondLastName, " / " ,dpi) as name'),
                'loans.id'
            )
            ->where(function ($query) use ($search) {
                foreach ($search as $item) {
                    $query->where('customers.id', 'like', '%' . $item . '%')
                        ->orWhere('firstName', 'like', '%' . $item . '%')
                        ->orWhere('secondName', 'like', '%' . $item . '%')
                        ->orWhere('firstLastName', 'like', '%' . $item . '%')
                        ->orWhere('secondLastName', 'like', '%' . $item . '%')
                        ->orWhere('dpi', 'like', '%' . $item . '%')
                        ->orWhere('nit', 'like', '%' . $item . '%');
                }
            })
            ->where('loans.status', 2)
            ->orderBy('loans.created_at', 'desc')->paginate(5);
    }
    public function getLoanPayment($id, Request $request)
    {
        $loanPaymentsAll = LoanPayment::where('idLoan', $id)->get();
        $loanPayments = LoanPayment::where('idLoan', $id)->where('status', 2)->orderBy('id', 'asc')->get();
        $dateNow = $request->date_payment;
        $loan = Loan::find($id);
        $demand = Demand::find($loan->idDemand);
        $amount = $demand->amountToFinance / count($loanPaymentsAll);
        $percentage = $demand->percentage;
        $payments = $loanPayments->map(function ($payment) use ($dateNow, $amount, $percentage) {
            $paymentTemporary['id'] = $payment->id;
            $paymentTemporary['amount'] = $payment->expectedAmount;
            $dateInit = Carbon::createFromDate($dateNow);
            $dateEnd = Carbon::createFromDate($payment->expectedPaymentDate);
            $days = $dateInit->diffInDays($dateEnd);
            $status = '';
            $bankDefault = 0;

            if ($dateEnd->equalTo($dateInit)) {
                $status = 'IGUAL';
                $bankDefault = 0;
                $dateText = 'PAGO PUNTUAL';
            } else if ($dateEnd->greaterThan($dateInit)) {
                $status = 'MAYOR';
                $bankDefault = 0;
                $dateText = 'FALTAN ' . $this->getDateText($days) . ' PARA SU PAGO';
            } else if ($dateEnd->lessThan($dateInit)) {
                $status = 'MENOR';
                $bankDefault = ($payment->expectedAmount * ($percentage / 100)) * $days;
                $dateText = 'SE ATRASO ' . $this->getDateText($days) . ' DE SU PAGO';
            }

            $paymentTemporary['capital'] = $amount;
            $paymentTemporary['interest'] = $payment->expectedAmount - $amount;
            $paymentTemporary['bankDefault'] = $bankDefault;
            $paymentTemporary['total'] = $paymentTemporary['capital'] + $paymentTemporary['interest'] + $paymentTemporary['bankDefault'];
            $paymentTemporary['status'] = $status;
            $paymentTemporary['dateText'] = $dateText;
            $paymentTemporary['check'] = false;
            $paymentTemporary['disabled'] = false;
            return $paymentTemporary;
        });
        return Response::json([
            'payments' => $payments,
            'balance' => $loan->balance,
        ], 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function show(Loan $loan)
    {
        $item['id'] = $loan->id;
        $item['paymentDate'] = Carbon::now();
        $formatter = new NumeroALetras();
        $item['amountLetters'] = $formatter->toMoney(($loan->amount), 2, 'QUETZALES', 'CENTAVOS');
        $item['concept'] = 'INTERÉS POR PRÉSTAMO';
        $item['amount'] = $loan->amount;

        return Response::json(['loan' => $item, 'customer' => mb_strtoupper($this->getNameCustomer(Customer::find($loan->idCustomer)))], 200);
    }
    public function getControl($id)
    {
        $loan = Loan::find($id);
        $payments = LoanPayment::select('id', 'expectedAmount', 'expectedPaymentDate')->where('idLoan', $loan->id)->get();

        $item['id'] = $loan->id;
        $item['amount'] = $loan->amount;
        $item['date'] = $loan->dateApprove;
        $item['totalPayment'] = count($payments);
        $item['loanRate'] = mb_strtoupper(Demand::find($loan->idDemand)->loanRate);
        $item['feeType'] = mb_strtoupper(Demand::find($loan->idDemand)->feeType);

        return Response::json(['loan' => $item, 'payments' => $payments, 'customer' => mb_strtoupper($this->getNameCustomer(Customer::find($loan->idCustomer)))], 200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Loan $loan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        $loan = Loan::find($id);
        $user = User::find($request->idUser);
        if (Hash::check($request->password, $user->password)) {
            DB::beginTransaction();
            try {
                $loan->status = 0;
                $loan->save();
                $payments = LoanPayment::where('idLoan', $loan->id)->get();
                foreach ($payments as $payment) {
                    $payment->status = 0;
                    $payment->save();
                }
                DB::commit();
                return Response::json(['message' => 'El crédito ha sido anulado correctamente'], 200);
            } catch (Exception $e) {
                DB::rollback();
                return Response::json(['message' => $e->getMessage()], 400);
            }
        } else {
            return Response::json(['message' => 'Error al anular crédito'], 400);
        }
    }
    public function getDateText($value)
    {
        $formatter = new NumeroALetras();
        $formatter->apocope = true;
        return $formatter->toWords($value) . ' DÍAS';
    }
    public function getDocument($id)
    {
        $loan = Loan::find($id);
        $demand = Demand::find($loan->idDemand);
        $customer = Customer::find($loan->idCustomer);
        $formatter = new NumeroALetras();
        $dateApprove = Carbon::createFromDate($loan->dateApprove);
        $firstPayment = Carbon::createFromDate(LoanPayment::orderBy('id', 'ASC')->where('idLoan', $id)->get()->first()->expectedPaymentDate);

        $day = $dateApprove->format('d');
        $month = $dateApprove->monthName;
        $year = $dateApprove->format('Y');
        $document = public_path() . "/documents/Loan.docx";
        $templateProcessor = new \PhpOffice\PhpWord\TemplateProcessor($document);

        if ($day == 1) {
            $templateProcessor->setValue('day', 'Al primer dia del mes');
        } else {
            $templateProcessor->setValue('day', "A los " . mb_strtolower($formatter->toWords($day)) . " días del mes");
        }
        $templateProcessor->setValue('month', $month);
        $templateProcessor->setValue('year', mb_strtolower($formatter->toWords($year)));
        $templateProcessor->setValue('customer', mb_strtoupper($this->getNameCustomer($customer)));
        $formatter->apocope = true;
        $templateProcessor->setValue('age', mb_strtolower($formatter->toWords($customer->age)));
        $templateProcessor->setValue('civilStatus', $customer->civilStatus);
        $templateProcessor->setValue('economicActivity', $customer->economicActivity);
        $templateProcessor->setValue('nationality', $customer->nationality);
        $templateProcessor->setValue('address', $this->getAddress($customer));
        $templateProcessor->setValue('town', Town::find($customer->idTown)->name);
        $templateProcessor->setValue('departament', Departament::find(Town::find($customer->idTown)->idDepartament)->name);
        $templateProcessor->setValue('dpi', $this->getDPI($customer->dpi));
        $templateProcessor->setValue('money', $formatter->toMoney($demand->amountToFinance, 2, 'QUETZALES', 'CENTAVOS') . " EXACTOS (" . $this->toMoney(floatval($demand->amountToFinance), 'Q', 2) . ")");
        $templateProcessor->setValue('amortization', count(LoanPayment::where('idLoan', $loan->id)->get()));
        $templateProcessor->setValue('feeType', mb_strtoupper($demand->feeType));
        $templateProcessor->setValue('payment', $formatter->toMoney(LoanPayment::where('idLoan', $loan->id)->get()->first()->expectedAmount, 2, 'QUETZALES', 'CENTAVOS') . " EXACTOS (" . $this->toMoney(floatval(LoanPayment::where('idLoan', $loan->id)->get()->first()->expectedAmount), 'Q', 2) . ")");
        $templateProcessor->setValue('feeType', mb_strtoupper($demand->feeType));
        $templateProcessor->setValue('fullDay', 'EMPEZANDO EL DÍA ' . $this->nameDay($firstPayment->format('l')) . " " . $firstPayment->format('d'));
        $templateProcessor->setValue('fullMonth', mb_strtoupper($firstPayment->monthName));
        $templateProcessor->setValue('fullYear', mb_strtoupper($firstPayment->format('Y')));

        $templateProcessor->setValue('terms', mb_strtoupper($demand->terms));
        $templateProcessor->setValue('percentageString', $formatter->toWords($demand->percentage));
        $templateProcessor->setValue('percentage', $demand->percentage);
        $guarante = Guarantee::join('guarantee_demands', 'guarantees.id', 'guarantee_demands.idGuarantee')
            ->where('guarantee_demands.idDemand', $demand->id)
            ->get()
            ->first();
        $templateProcessor->setValue('guarantee', mb_strtoupper($guarante->name));
        $templateProcessor->setValue('dpiTwo', $this->getDPITwo($customer->dpi));

        $pathToSave =  public_path() . "/documents";
        $fileName = "PAGARE_" . $customer->dpi . "_" . str_replace(' ', '_', mb_strtoupper($this->getNameCustomer($customer))) . ".docx";
        $templateProcessor->saveAs($pathToSave . "/" . $fileName);

        $headers = array(
            'Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        );

        return Response::download($pathToSave . "/" . $fileName, $fileName, $headers);
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
    private function getAddress(Customer $customer)
    {
        if (empty($customer->suburb) && empty($customer->zone)) {
            return "con dirección {$customer->address}";
        } else if (!empty($customer->suburb) && empty($customer->zone)) {
            return "en colonia {$customer->suburb},{$customer->address}";
        } else if (empty($customer->suburb) && !empty($customer->zone)) {
            return "en zona {$customer->zone},{$customer->address}";
        } else if (!empty($customer->suburb) && !empty($customer->zone)) {
            return "en colonia {$customer->suburb} zona {$customer->zone},{$customer->address}";
        }
    }
    private function getAddressFactura(Customer $customer)
    {
        if (empty($customer->suburb) && empty($customer->zone)) {
            return "{$customer->address}";
        } else if (!empty($customer->suburb) && empty($customer->zone)) {
            return "Colonia {$customer->suburb},{$customer->address}";
        } else if (empty($customer->suburb) && !empty($customer->zone)) {
            return "Zona {$customer->zone},{$customer->address}";
        } else if (!empty($customer->suburb) && !empty($customer->zone)) {
            return "Colonia {$customer->suburb} Zona {$customer->zone}, {$customer->address}";
        }
    }
    private function getDPI($dpi)
    {
        $formatter = new NumeroALetras();
        $one = $dpi[0] . $dpi[1] . $dpi[2] . $dpi[3];
        $two = $dpi[4] . $dpi[5] . $dpi[6] . $dpi[7] . $dpi[8];
        $three = $dpi[9];
        $four = $dpi[10] . $dpi[11];
        $five = $dpi[12];
        return mb_strtolower($formatter->toWords($one)) . ", " . mb_strtolower($formatter->toWords($two)) . " " . mb_strtolower($formatter->toWords($three)) . " " . mb_strtolower($formatter->toWords($four)) . " " . mb_strtolower($formatter->toWords($five)) . " ({$one} {$two}{$three}{$four}{$five})";
    }
    private function toMoney($val, $symbol = '$', $r = 2)
    {
        return $symbol . ($val < 0 ? '-' : '') . number_format(abs($val), $r);
    }
    private function nameDay($day)
    {
        if ($day == "Monday")
            return "LUNES";
        else if ($day == "Tuesday")
            return "MARTES";
        else if ($day == "Wednesday")
            return "MIÉRCOLES";
        else if ($day == "Thursday")
            return "JUEVES";
        else if ($day == "Friday")
            return "VIERNES";
        else if ($day == "Saturday")
            return "SÁBADO";
        else if ($day == "Sunday")
            return "DOMINGO";
    }
    private function getDPITwo($dpi)
    {
        $one = $dpi[0] . $dpi[1] . $dpi[2] . $dpi[3];
        $two = $dpi[4] . $dpi[5] . $dpi[6] . $dpi[7] . $dpi[8];
        $three = $dpi[9] . $dpi[10] . $dpi[11] . $dpi[12];
        return $one . " " . $two . " " . $three;
    }
    public function getFactura($id)
    {
        $loan = Loan::find($id);
        $customer = Customer::find($loan->idCustomer);
        $formatter = new NumeroALetras();

        $document = public_path() . "/documents/Factura.docx";
        $templateProcessor = new \PhpOffice\PhpWord\TemplateProcessor($document);


        $templateProcessor->setValue('customer', mb_strtoupper($this->getNameCustomer($customer)));
        $templateProcessor->setValue('address', $this->getAddressFactura($customer));
        $templateProcessor->setValue('date', Carbon::now()->format('d/m/Y'));
        if (!empty($customer->nit))
            $templateProcessor->setValue('nit', $customer->nit);
        else
            $templateProcessor->setValue('nit', 'C/F');
        $templateProcessor->setValue('code', '1');
        $templateProcessor->setValue('description', 'Interés por préstamo');
        $templateProcessor->setValue('total', $this->toMoney(floatval($loan->amount - $loan->amountToFinance), 'Q', 2));
        $templateProcessor->setValue('payment', $formatter->toMoney(($loan->amount - $loan->amountToFinance), 2, 'QUETZALES', 'CENTAVOS'));

        // header("Content-Disposition: attachment;" . "filename=FACTURA " . mb_strtoupper($this->getNameCustomer($customer)) . ".docx");
        $pathToSave =  public_path() . "/documents";
        $fileName = "FACTURA_" . $customer->dpi . "_" . str_replace(' ', '_', mb_strtoupper($this->getNameCustomer($customer))) . ".docx";
        $templateProcessor->saveAs($pathToSave . "/" . $fileName);

        $headers = array(
            'Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        );

        return Response::download($pathToSave . "/" . $fileName, $fileName, $headers);
    }
    public function getAllLoans(Request $request)
    {
        $search = explode(" ", $request->filter);
        return Customer::join('loans', 'loans.idcustomer', '=', 'customers.id')
            ->select(
                DB::raw('CONCAT("Crédito No.",loans.id," / ",firstName," ",firstLastName," ",secondLastName, " / " ,dpi) as name'),
                'loans.id'
            )
            ->where(function ($query) use ($search) {
                foreach ($search as $item) {
                    $query->where('customers.id', 'like', '%' . $item . '%')
                        ->orWhere('firstName', 'like', '%' . $item . '%')
                        ->orWhere('secondName', 'like', '%' . $item . '%')
                        ->orWhere('firstLastName', 'like', '%' . $item . '%')
                        ->orWhere('secondLastName', 'like', '%' . $item . '%')
                        ->orWhere('dpi', 'like', '%' . $item . '%')
                        ->orWhere('nit', 'like', '%' . $item . '%');
                }
            })
            ->orderBy('loans.created_at', 'desc')->paginate(5);
    }
}
