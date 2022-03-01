<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Demand;
use App\Notification;
use App\Loan;
use App\LoanPayment;
use Carbon\Carbon;
use App\User;
use App\Customer;
use Illuminate\Support\Facades\Response;
use \DB;
use Luecano\NumeroALetras\NumeroALetras;


class TestingController extends Controller
{
    public function getNotifications()
    {
        $dateNow = Carbon::today();
        $loans = Loan::select('id', 'paymentDate', 'idcustomer')->where('status', 2)->get();
        $overdueCredits = array();
        foreach ($loans as $loan) {
            $lastPayment = LoanPayment::where('status', '!=', 0)->where('idloan', $loan->id)->orderBy('id', 'DESC')->get();
            $customer = Customer::where('customers.id', $loan->idcustomer)
                ->join('towns', 'towns.id', 'customers.idTown')
                ->join('departaments', 'departaments.id', 'towns.idDepartament')
                ->select(
                    'customers.id',
                    DB::raw('CONCAT(customers.firstName," ",customers.secondName," ",customers.firstLastName," ",customers.secondLastName) as name'),
                    'customers.dpi',
                    'customers.address',
                    'customers.suburb',
                    'customers.zone',
                    'customers.mobile',
                    'customers.telephone',
                    'towns.name as nameTown',
                    'departaments.name as nameDepartament'
                )
                ->get()
                ->first();
            // return $customer;
            //
            $overdueCredit['client'] = $customer;
            $overdueCredit['loan'] = $loan->id;
            $overdueCredit['paymentNow'] = '';
            $overdueCredit['paymentDate'] = '';
            $overdueCredit['description'] = '';
            $overdueCredit['normal_credit'] = [];
            $overdueCredit['current_credit'] = [];
            //
            $nameCustomer = $customer->firstName . " " . $customer->secondName . " " . $customer->firstLastName . " " . $customer->secondLastName;
            if (count($lastPayment) < 1) {
                $datePayment = Carbon::createFromDate($loan->paymentDate)->addMonth(1);
                if ($dateNow->equalTo($datePayment)) {
                    $overdueCredit['normal_credit'] = $this->getLoanPayment($loan->id, $datePayment->toDateTimeString());
                    $overdueCredit['current_credit'] = $this->getLoanPayment($loan->id, $dateNow->toDateTimeString());
                    $overdueCredit['paymentNow'] = $dateNow->toDateTimeString();
                    $overdueCredit['paymentDate'] = $datePayment->toDateTimeString();
                    $overdueCredit['description'] = 'HOY ES SU PAGO';
                    array_push($overdueCredits, $overdueCredit);
                    // array_push($overdueCredits,'El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' HOY ES SU PAGO');
                } else if ($dateNow->greaterThan($datePayment)) {
                    $diffDays = $dateNow->diffInDays($datePayment);
                    $overdueCredit['normal_credit'] = $this->getLoanPayment($loan->id, $datePayment->toDateTimeString());
                    $overdueCredit['current_credit'] = $this->getLoanPayment($loan->id, $dateNow->toDateTimeString());
                    $overdueCredit['paymentNow'] = $dateNow->toDateTimeString();
                    $overdueCredit['paymentDate'] = $datePayment->toDateTimeString();
                    $overdueCredit['description'] = 'EL PAGO ERA HACE ' . $diffDays . ' DÍAS';
                    array_push($overdueCredits, $overdueCredit);
                    // array_push($overdueCredits,'El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' EL PAGO ERA HACE '.$diffDays. ' DÍAS');
                } else if ($dateNow->lessThan($datePayment)) {
                    $diffDays = $dateNow->diffInDays($datePayment);
                    if ($diffDays < 6) {
                        $overdueCredit['normal_credit'] = $this->getLoanPayment($loan->id, $datePayment->toDateTimeString());
                        $overdueCredit['current_credit'] = $this->getLoanPayment($loan->id, $dateNow->toDateTimeString());
                        $overdueCredit['paymentNow'] = $dateNow->toDateTimeString();
                        $overdueCredit['paymentDate'] = $datePayment->toDateTimeString();
                        $overdueCredit['description'] = 'FALTAN ' . $diffDays . ' DÍAS PARA SU PAGO';
                        array_push($overdueCredits, $overdueCredit);
                        // array_push($overdueCredits,'El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' FALTAN '.$diffDays. ' DÍAS PARA SU PAGO');
                    } else {
                        continue;
                    }
                }
            } else {
                $datePayment = Carbon::createFromDate($lastPayment->first()->paymentDateFinished);
                $datePaymentPlusMonth = Carbon::createFromDate($lastPayment->first()->paymentDateFinished)->addMonth(1);

                if ($dateNow->equalTo($datePayment)) {
                    continue;
                } else {
                    if ($dateNow->equalTo($datePaymentPlusMonth)) {
                        $overdueCredit['normal_credit'] = $this->getLoanPayment($loan->id, $datePaymentPlusMonth->toDateTimeString());
                        $overdueCredit['current_credit'] = $this->getLoanPayment($loan->id, $dateNow->toDateTimeString());
                        $overdueCredit['paymentNow'] = $dateNow->toDateTimeString();
                        $overdueCredit['paymentDate'] = $datePaymentPlusMonth->toDateTimeString();
                        $overdueCredit['description'] = 'HOY ES SU PAGO';
                        array_push($overdueCredits, $overdueCredit);
                        // array_push($overdueCredits,'El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' HOY ES SU PAGO');

                    } else if ($dateNow->greaterThan($datePaymentPlusMonth)) {
                        $diffDays = $dateNow->diffInDays($datePaymentPlusMonth);
                        $overdueCredit['normal_credit'] = $this->getLoanPayment($loan->id, $datePaymentPlusMonth->toDateTimeString());
                        $overdueCredit['current_credit'] = $this->getLoanPayment($loan->id, $dateNow->toDateTimeString());
                        $overdueCredit['paymentNow'] = $dateNow->toDateTimeString();
                        $overdueCredit['paymentDate'] = $datePaymentPlusMonth->toDateTimeString();
                        $overdueCredit['description'] = 'EL PAGO ERA HACE ' . $diffDays . ' DÍAS';
                        array_push($overdueCredits, $overdueCredit);
                        // array_push($overdueCredits,'El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' EL PAGO ERA HACE '.$diffDays. ' DÍAS');
                    } else if ($dateNow->lessThan($datePaymentPlusMonth)) {
                        $diffDays = $dateNow->diffInDays($datePaymentPlusMonth);
                        if ($diffDays < 6) {
                            $overdueCredit['normal_credit'] = $this->getLoanPayment($loan->id, $datePaymentPlusMonth->toDateTimeString());
                            $overdueCredit['current_credit'] = $this->getLoanPayment($loan->id, $dateNow->toDateTimeString());
                            $overdueCredit['paymentNow'] = $dateNow->toDateTimeString();
                            $overdueCredit['paymentDate'] = $datePaymentPlusMonth->toDateTimeString();
                            $overdueCredit['description'] = 'FALTAN ' . $diffDays . ' DÍAS PARA SU PAGO';
                            array_push($overdueCredits, $overdueCredit);
                            // array_push($overdueCredits,'El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' FALTAN '.$diffDays. ' DÍAS PARA SU PAGO');
                        } else {
                            continue;
                        }
                    }
                }
            }
        }
        // sort($overdueCredits);
        return $overdueCredits;
    }
    public function insertNotifications($message)
    {
        $users = User::where('status', 1)->get();
        foreach ($users as $user) {
            $notification = new Notification;
            $notification->message = $message;
            $notification->status = false;
            $notification->iduser = $user->id;
            $notification->save();
        }
    }
    public function getLoanPayment($id, $date_payment)
    {
        $LOAN = Loan::find($id);
        $LOANS = LoanPayment::where('idloan', $id)->where('status', 1)->orderBy('id', 'DESC')->get();
        $DAYINIT = null;
        $DAYEND = null;
        $DAYS = null;
        $DAYSONE = null;
        $DAYSMONTH = null;
        $DAYSTATUS = null;
        $DAYSDIFF = null;
        $CAPITAL = 0;
        $MONTHS = 0;
        $DATEBEGIN = null;
        $SAMEMONTH = false;
        // FIRST PAYMNET
        if (count($LOANS) < 1) {
            $DAYINIT = Carbon::createFromDate($LOAN->paymentDate);
            $DAYEND = Carbon::createFromDate($date_payment);
            $DAYS = $DAYINIT->diffInDays($DAYEND);
            $DAYSONE = Carbon::createFromDate($DAYINIT->toDateTimeString())->addMonth(1);
            $DAYSMONTH = $DAYINIT->diffInDays($DAYSONE);
            $DATEBEGIN = Carbon::createFromDate($LOAN->paymentDate);
        } else {
            if ($LOANS->first()->isPayment == 1 || $LOANS->first()->isPayment == 2)
                $SAMEMONTH = false;
            else
                $SAMEMONTH = true;

            // PAYMENTS MULTIPLE PAYMENTS SAME MONTH
            if ($SAMEMONTH == true) {
                $DAYINIT = Carbon::createFromDate($LOANS->first()->paymentDate);
                $DAYEND = Carbon::createFromDate($date_payment);
                $DAYS = Carbon::createFromDate($LOANS->first()->paymentDate)->diffInDays(Carbon::createFromDate($date_payment));
                $DAYSONE = Carbon::createFromDate($LOANS->first()->paymentDateFinished);
                $DAYSMONTH = Carbon::createFromDate($LOANS->first()->paymentDateInit)->diffInDays(Carbon::createFromDate($LOANS->first()->paymentDateFinished));
                $DATEBEGIN = $LOANS->first()->paymentDateInit;
            } else {
                // MULTIPLE PAYMENTS UNIQUE PAYMENT
                $DAYINIT = Carbon::createFromDate($LOANS->first()->paymentDateFinished);
                $DAYEND = Carbon::createFromDate($date_payment);
                $DAYS = Carbon::createFromDate($LOANS->first()->paymentDateFinished)->diffInDays(Carbon::createFromDate($date_payment));
                $DAYSONE = Carbon::createFromDate($LOANS->first()->paymentDateFinished)->addMonth(1);
                $DAYSMONTH = Carbon::createFromDate($LOANS->first()->paymentDateFinished)->diffInDays(Carbon::createFromDate($DAYINIT->toDateTimeString())->addMonth(1));
                $DATEBEGIN = $LOANS->first()->paymentDateFinished;
            }
            // BEGIN VALIDATION TOTAL
            foreach ($LOANS as $PAYMENT) {
                if ($PAYMENT->isPayment == 1 || $PAYMENT->isPayment == 2)
                    $MONTHS++;
            }

            $MONTHS++;

            if ($MONTHS > $LOAN->terms)
                $MONTHS = $LOAN->$terms;

            $CAPITAL = (($MONTHS * $LOAN->monthlyAmount) - $LOAN->capital);
            if ($CAPITAL < 0)
                $CAPITAL = 0;
        }

        if ($DAYEND->equalTo($DAYSONE))
            $DAYSTATUS = 'IGUAL';

        else if ($DAYEND->greaterThan($DAYSONE))
            $DAYSTATUS = 'MAYOR';

        else if ($DAYEND->lessThan($DAYSONE))
            $DAYSTATUS = 'MENOR';

        $DAYSDIFF = $DAYEND->diffInDays($DAYSONE);

        return array(
            'LOAN' => $LOAN,
            'LOANS' => $LOANS,
            'DAYINIT' => $DAYINIT,
            'DAYEND' => $DAYEND,
            'DAYS' => $DAYS,
            'DAYSMONTH' => $DAYSMONTH,
            'DAYSONE' => $DAYSONE,
            'DAYSTATUS' => $DAYSTATUS,
            'DAYSDIFF' => $DAYSDIFF,
            'MONTHS' => $MONTHS,
            'CAPITAL' => $CAPITAL,
            'DATEBEGIN' => $DATEBEGIN,
            'SAMEMONTH' => $SAMEMONTH
        );
    }
    public function getLatePayments()
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
            $loanTemporary['body'] = $this->getPayment($item->id, $initDate->toDateTimeString(),'<');
            return $loanTemporary;
        });
        return $all;
    }
    public function getLikewisePayments()
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
            ->groupBy('loan_payments.idLoan')
            ->get();
        $all = $loansLate->map(function ($item) use ($initDate) {
            $loanTemporary['title'] = $item;
            $loanTemporary['body'] = $this->getPayment($item->id, $initDate->toDateTimeString(),'=');
            return $loanTemporary;
        });
        return $all;
    }
    public function getFuturePayments()
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
            $loanTemporary['body'] = $this->getPayment($item->id, $initDate->toDateTimeString(),'=');
            return $loanTemporary;
        });
        return $all;
    }
    function getPayment($id, $date,$operator)
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
}
