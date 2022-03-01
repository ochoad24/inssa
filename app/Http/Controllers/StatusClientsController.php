<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Luecano\NumeroALetras\NumeroALetras;
use Carbon\Carbon;
use App\LoanPayment;
use App\Demand;
use App\Loan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;


class StatusClientsController extends Controller
{
    function getPayment($id, $date, $operator)
    {
        $loanPaymentsAll = LoanPayment::where('idLoan', $id)->get();
        $loanPayments = LoanPayment::where('idLoan', $id)->where('status', 2)->where('loan_payments.expectedPaymentDate', $operator, $date)->orderBy('id', 'asc')->get();
        $dateNow = $date;
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
        return $payments;
    }
    public function getDateText($value)
    {
        $formatter = new NumeroALetras();
        $formatter->apocope = true;
        return $formatter->toWords($value) . ' DÍAS';
    }
    public function getLatePayments($user)
    {
        $initDate = Carbon::today();
        $loansLate = LoanPayment::join('loans', 'loans.id', 'loan_payments.idLoan')
            ->join('customers', 'customers.id', 'loans.idCustomer')
            ->join('towns', 'towns.id', 'customers.idTown')
            ->join('departaments', 'departaments.id', 'towns.idDepartament')
            ->select(
                'idLoan as id',
                DB::raw('CONCAT(customers.firstName," ",COALESCE(customers.secondName,"")," ",customers.firstLastName," ",customers.secondLastName, " / " ,customers.dpi) as name'),
                DB::raw('count(*) as countPayment'),
                'customers.address',
                'customers.suburb',
                'customers.zone',
                'customers.mobile',
                'towns.name as town',
                'departaments.name as departament'
            )
            ->where('loan_payments.status', 2)
            ->where('loan_payments.expectedPaymentDate', '<', $initDate)
            ->where('loans.dutyManager', $user)
            ->groupBy('loan_payments.idLoan')
            ->get();
        $all = $loansLate->map(function ($item) use ($initDate) {
            $loanTemporary['title'] = $item;
            $loanTemporary['body'] = $this->getPayment($item->id, $initDate->toDateTimeString(), '<');
            return $loanTemporary;
        });
        return $all;
    }
    public function getAllLatePayments()
    {
        $initDate = Carbon::today();
        $loansLate = LoanPayment::join('loans', 'loans.id', 'loan_payments.idLoan')
            ->join('customers', 'customers.id', 'loans.idCustomer')
            ->join('towns', 'towns.id', 'customers.idTown')
            ->join('departaments', 'departaments.id', 'towns.idDepartament')
            ->select(
                'idLoan as id',
                DB::raw('CONCAT(customers.firstName," ",COALESCE(customers.secondName,"")," ",customers.firstLastName," ",customers.secondLastName, " / " ,customers.dpi) as name'),
                DB::raw('count(*) as countPayment'),
                'customers.address',
                'customers.suburb',
                'customers.zone',
                'customers.mobile',
                'towns.name as town',
                'departaments.name as departament'
            )
            ->where('loan_payments.status', 2)
            ->where('loan_payments.expectedPaymentDate', '<', $initDate)
            ->groupBy('loan_payments.idLoan')
            ->get();
        $all = $loansLate->map(function ($item) use ($initDate) {
            $loanTemporary['title'] = $item;
            $loanTemporary['body'] = $this->getPayment($item->id, $initDate->toDateTimeString(), '<');
            return $loanTemporary;
        });
        return $all;
    }
    public function getLikewisePayments($user)
    {
        $initDate = Carbon::today();
        $loansLate = LoanPayment::join('loans', 'loans.id', 'loan_payments.idLoan')
            ->join('customers', 'customers.id', 'loans.idCustomer')
            ->join('towns', 'towns.id', 'customers.idTown')
            ->join('departaments', 'departaments.id', 'towns.idDepartament')
            ->select(
                'idLoan as id',
                DB::raw('CONCAT(customers.firstName," ",COALESCE(customers.secondName,"")," ",customers.firstLastName," ",customers.secondLastName, " / " ,customers.dpi) as name'),
                DB::raw('count(*) as countPayment'),
                'customers.address',
                'customers.suburb',
                'customers.zone',
                'customers.mobile',
                'towns.name as town',
                'departaments.name as departament'
            )
            ->where('loan_payments.status', 2)
            ->where('loan_payments.expectedPaymentDate', '=', $initDate)
            ->where('loans.dutyManager', $user)
            ->groupBy('loan_payments.idLoan')
            ->get();
        $all = $loansLate->map(function ($item) use ($initDate) {
            $loanTemporary['title'] = $item;
            $loanTemporary['body'] = $this->getPayment($item->id, $initDate->toDateTimeString(), '=');
            return $loanTemporary;
        });
        return $all;
    }
    public function getAllLikewisePayments()
    {
        $initDate = Carbon::today();
        $loansLate = LoanPayment::join('loans', 'loans.id', 'loan_payments.idLoan')
            ->join('customers', 'customers.id', 'loans.idCustomer')
            ->join('towns', 'towns.id', 'customers.idTown')
            ->join('departaments', 'departaments.id', 'towns.idDepartament')
            ->select(
                'idLoan as id',
                DB::raw('CONCAT(customers.firstName," ",COALESCE(customers.secondName,"")," ",customers.firstLastName," ",customers.secondLastName, " / " ,customers.dpi) as name'),
                DB::raw('count(*) as countPayment'),
                'customers.address',
                'customers.suburb',
                'customers.zone',
                'customers.mobile',
                'towns.name as town',
                'departaments.name as departament'
            )
            ->where('loan_payments.status', 2)
            ->where('loan_payments.expectedPaymentDate', '<', $initDate)
            ->groupBy('loan_payments.idLoan')
            ->get();
        $all = $loansLate->map(function ($item) use ($initDate) {
            $loanTemporary['title'] = $item;
            $loanTemporary['body'] = $this->getPayment($item->id, $initDate->toDateTimeString(), '<');
            return $loanTemporary;
        });
        return $all;
    }
    public function getFuturePayments($user)
    {
        $initDate = Carbon::today()->addDays(3);
        $loansLate = LoanPayment::join('loans', 'loans.id', 'loan_payments.idLoan')
            ->join('customers', 'customers.id', 'loans.idCustomer')
            ->join('towns', 'towns.id', 'customers.idTown')
            ->join('departaments', 'departaments.id', 'towns.idDepartament')
            ->select(
                'idLoan as id',
                DB::raw('CONCAT(customers.firstName," ",COALESCE(customers.secondName,"")," ",customers.firstLastName," ",customers.secondLastName, " / " ,customers.dpi) as name'),
                DB::raw('count(*) as countPayment'),
                'customers.address',
                'customers.suburb',
                'customers.zone',
                'customers.mobile',
                'towns.name as town',
                'departaments.name as departament'
            )
            ->where('loan_payments.status', 2)
            ->where('loan_payments.expectedPaymentDate', '=', $initDate)
            ->where('loans.dutyManager', $user)
            ->groupBy('loan_payments.idLoan')
            ->get();
        $all = $loansLate->map(function ($item) use ($initDate) {
            $loanTemporary['title'] = $item;
            $loanTemporary['body'] = $this->getPayment($item->id, $initDate->toDateTimeString(), '=');
            return $loanTemporary;
        });
        return $all;
    }
    public function getAllFuturePayments()
    {
        $initDate = Carbon::today()->addDays(3);
        $loansLate = LoanPayment::join('loans', 'loans.id', 'loan_payments.idLoan')
            ->join('customers', 'customers.id', 'loans.idCustomer')
            ->join('towns', 'towns.id', 'customers.idTown')
            ->join('departaments', 'departaments.id', 'towns.idDepartament')
            ->select(
                'idLoan as id',
                DB::raw('CONCAT(customers.firstName," ",COALESCE(customers.secondName,"")," ",customers.firstLastName," ",customers.secondLastName, " / " ,customers.dpi) as name'),
                DB::raw('count(*) as countPayment'),
                'customers.address',
                'customers.suburb',
                'customers.zone',
                'customers.mobile',
                'towns.name as town',
                'departaments.name as departament'
            )
            ->where('loan_payments.status', 2)
            ->where('loan_payments.expectedPaymentDate', '=', $initDate)
            ->groupBy('loan_payments.idLoan')
            ->get();
        $all = $loansLate->map(function ($item) use ($initDate) {
            $loanTemporary['title'] = $item;
            $loanTemporary['body'] = $this->getPayment($item->id, $initDate->toDateTimeString(), '=');
            return $loanTemporary;
        });
        return $all;
    }
    private function toMoney($val, $symbol = '$', $r = 2)
    {
        return $symbol . ($val < 0 ? '-' : '') . number_format(abs($val), $r);
    }
    // BEGIN CHAGERS
    public function chargesOne(Request $request)
    {
        $document = public_path() . "/documents/ChargesOne.docx";
        $templateProcessor = new \PhpOffice\PhpWord\TemplateProcessor($document);
        if ($request->getAll == "true") {
            $list = $this->getAllLatePayments();
        } else {
            $list = $this->getLatePayments($request->user);
        }
        $templateProcessor->cloneBlock('items', count($list), true, true);
        foreach ($list as $key => $item) {
            $newKey = $key + 1;
            $templateProcessor->setValue("id#{$newKey}", $item['title']['id']);
            $templateProcessor->setValue("name#{$newKey}", $item['title']['name']);
            $templateProcessor->setValue("address#{$newKey}", $item['title']['address']);
            $templateProcessor->setValue("suburb#{$newKey}", $item['title']['suburb']);
            $templateProcessor->setValue("zone#{$newKey}", $item['title']['zone']);
            $templateProcessor->setValue("town#{$newKey}", $item['title']['town']);
            $templateProcessor->setValue("departament#{$newKey}", $item['title']['departament']);
            $templateProcessor->setValue("mobile#{$newKey}", $item['title']['mobile']);
            $templateProcessor->setValue("countPayment#{$newKey}", $item['title']['countPayment']);
            $templateProcessor->cloneBlock("payments#{$newKey}", count($item['body']), true, true);
            $formatter = new NumeroALetras();
            foreach ($item['body'] as $i => $body) {
                $newI = $i + 1;
                $templateProcessor->setValue("idPayment#{$newKey}#{$newI}", $body['id']);
                $templateProcessor->setValue("amount#{$newKey}#{$newI}", $this->toMoney($body['amount'], 'Q', 2));
                $templateProcessor->setValue("capital#{$newKey}#{$newI}", $this->toMoney($body['capital'], 'Q', 2));
                $templateProcessor->setValue("interest#{$newKey}#{$newI}", $this->toMoney($body['interest'], 'Q', 2));
                $templateProcessor->setValue("bankDefault#{$newKey}#{$newI}", $this->toMoney($body['bankDefault'], 'Q', 2));
                $templateProcessor->setValue("total#{$newKey}#{$newI}", $this->toMoney($body['total'], 'Q', 2));
                $templateProcessor->setValue("dateText#{$newKey}#{$newI}", $body['dateText']);
            }
        }
        $pathToSave =  public_path() . "/documents";
        $fileName = "COBROS_ATRASADOS_" . $request->user . ".docx";
        $templateProcessor->saveAs($pathToSave . "/" . $fileName);

        $headers = array(
            'Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        );

        return Response::download($pathToSave . "/" . $fileName, $fileName, $headers);
    }
    public function chargesTwo(Request $request)
    {
        $document = public_path() . "/documents/ChargesTwo.docx";
        $templateProcessor = new \PhpOffice\PhpWord\TemplateProcessor($document);
        if ($request->getAll == "true") {
            $list = $this->getAllLikewisePayments();
        } else {
            $list = $this->getLikewisePayments($request->user);
        }
        $templateProcessor->cloneBlock('items', count($list), true, true);
        foreach ($list as $key => $item) {
            $newKey = $key + 1;
            $templateProcessor->setValue("id#{$newKey}", $item['title']['id']);
            $templateProcessor->setValue("name#{$newKey}", $item['title']['name']);
            $templateProcessor->setValue("address#{$newKey}", $item['title']['address']);
            $templateProcessor->setValue("suburb#{$newKey}", $item['title']['suburb']);
            $templateProcessor->setValue("zone#{$newKey}", $item['title']['zone']);
            $templateProcessor->setValue("town#{$newKey}", $item['title']['town']);
            $templateProcessor->setValue("departament#{$newKey}", $item['title']['departament']);
            $templateProcessor->setValue("mobile#{$newKey}", $item['title']['mobile']);
            $templateProcessor->setValue("countPayment#{$newKey}", $item['title']['countPayment']);
            $templateProcessor->cloneBlock("payments#{$newKey}", count($item['body']), true, true);
            $formatter = new NumeroALetras();
            foreach ($item['body'] as $i => $body) {
                $newI = $i + 1;
                $templateProcessor->setValue("idPayment#{$newKey}#{$newI}", $body['id']);
                $templateProcessor->setValue("amount#{$newKey}#{$newI}", $this->toMoney($body['amount'], 'Q', 2));
                $templateProcessor->setValue("capital#{$newKey}#{$newI}", $this->toMoney($body['capital'], 'Q', 2));
                $templateProcessor->setValue("interest#{$newKey}#{$newI}", $this->toMoney($body['interest'], 'Q', 2));
                $templateProcessor->setValue("bankDefault#{$newKey}#{$newI}", $this->toMoney($body['bankDefault'], 'Q', 2));
                $templateProcessor->setValue("total#{$newKey}#{$newI}", $this->toMoney($body['total'], 'Q', 2));
                $templateProcessor->setValue("dateText#{$newKey}#{$newI}", $body['dateText']);
            }
        }
        $pathToSave =  public_path() . "/documents";
        $fileName = "COBROS_HOY_" . $request->user . ".docx";
        $templateProcessor->saveAs($pathToSave . "/" . $fileName);

        $headers = array(
            'Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        );

        return Response::download($pathToSave . "/" . $fileName, $fileName, $headers);
    }
    public function chargesThree(Request $request)
    {
        $document = public_path() . "/documents/ChargesThree.docx";
        $templateProcessor = new \PhpOffice\PhpWord\TemplateProcessor($document);
        if ($request->getAll == "true") {
            $list = $this->getAllFuturePayments();
        } else {
            $list = $this->getFuturePayments($request->user);
        }
        $templateProcessor->cloneBlock('items', count($list), true, true);
        foreach ($list as $key => $item) {
            $newKey = $key + 1;
            $templateProcessor->setValue("id#{$newKey}", $item['title']['id']);
            $templateProcessor->setValue("name#{$newKey}", $item['title']['name']);
            $templateProcessor->setValue("address#{$newKey}", $item['title']['address']);
            $templateProcessor->setValue("suburb#{$newKey}", $item['title']['suburb']);
            $templateProcessor->setValue("zone#{$newKey}", $item['title']['zone']);
            $templateProcessor->setValue("town#{$newKey}", $item['title']['town']);
            $templateProcessor->setValue("departament#{$newKey}", $item['title']['departament']);
            $templateProcessor->setValue("mobile#{$newKey}", $item['title']['mobile']);
            $templateProcessor->setValue("countPayment#{$newKey}", $item['title']['countPayment']);
            $templateProcessor->cloneBlock("payments#{$newKey}", count($item['body']), true, true);
            $formatter = new NumeroALetras();
            foreach ($item['body'] as $i => $body) {
                $newI = $i + 1;
                $templateProcessor->setValue("idPayment#{$newKey}#{$newI}", $body['id']);
                $templateProcessor->setValue("amount#{$newKey}#{$newI}", $this->toMoney($body['amount'], 'Q', 2));
                $templateProcessor->setValue("capital#{$newKey}#{$newI}", $this->toMoney($body['capital'], 'Q', 2));
                $templateProcessor->setValue("interest#{$newKey}#{$newI}", $this->toMoney($body['interest'], 'Q', 2));
                $templateProcessor->setValue("bankDefault#{$newKey}#{$newI}", $this->toMoney($body['bankDefault'], 'Q', 2));
                $templateProcessor->setValue("total#{$newKey}#{$newI}", $this->toMoney($body['total'], 'Q', 2));
                $templateProcessor->setValue("dateText#{$newKey}#{$newI}", $body['dateText']);
            }
        }
        $pathToSave =  public_path() . "/documents";
        $fileName = "COBROS_CERCANOS_" . $request->user . ".docx";
        $templateProcessor->saveAs($pathToSave . "/" . $fileName);

        $headers = array(
            'Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        );

        return Response::download($pathToSave . "/" . $fileName, $fileName, $headers);
    }
}
