<?php

namespace App\Traits;

use App\Loan;
use App\Account;
use App\Transaction;
use Illuminate\Support\Facades\DB;
use \Exception;

trait LoanTrait
{
    public function storeLoan($terms, $percentage, $amount, $paymentLimitDate, $paymentDate, $idcustomer)
    {
        DB::beginTransaction();
        try {
            $loan = new Loan;
            $loan->terms = $terms;
            $loan->percentage = $percentage;
            $loan->amount = $amount;
            $loan->balance = $amount;
            $loan->paymentLimitDate = $paymentLimitDate;
            $loan->paymentDate = $paymentDate;
            $loan->idcustomer = $idcustomer;
            $loan->capital = 0;
            $loan->interest = 0;
            $loan->monthlyAmount = $loan->amount / $loan->terms;
            $loan->save();
            DB::commit();
            return true;
        } catch (Exception $e) {
            DB::rollback();
            return false;
        }
    }
    public function storeTransaction($amount, $description, $sign, $idaccount, $iduser, $idLoanPayment = null, $reference = null)
    {
        DB::beginTransaction();
        try {
            $transaction = new Transaction;
            $transaction->description = $description;
            $transaction->amount = $amount;
            if ($sign === '+')
                $transaction->type = 0;
            else
                $transaction->type = 1;
            $transaction->idaccount = $idaccount;
            $transaction->userCreated = $iduser;
            if (!is_null($idLoanPayment)) {
                $transaction->idLoanPayment = $idLoanPayment;
            }
            if (!is_null($reference)) {
                $transaction->reference = $reference;
            }
            $transaction->save();

            $account = Account::find($idaccount);
            if ($sign === '+')
                $account->amount = $account->amount + $amount;
            else
                $account->amount = $account->amount - $amount;
            $account->save();

            DB::commit();
            return true;
        } catch (Exception $e) {
            DB::rollback();
            return false;
        }
    }
    public function searchTransactionByLoanPayment($idLoanPayment)
    {
        return Transaction::where('idLoanPayment', $idLoanPayment)->get()->first()->idaccount;
    }
    public function money($amount)
    {
        return 'Q ' . number_format($amount, 2);
    }
}
