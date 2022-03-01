<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use App\Traits\LoanTrait;
use Illuminate\Support\Facades\Config;
use App\User;
use App\Customer;
use App\Account;
use \Exception;
use App\Notifications\TelegramNotification;


class TransactionController extends Controller
{
    use LoanTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Transaction::join('accounts', 'accounts.id', '=', 'transactions.idaccount')
            ->join('users', 'users.id', '=', 'transactions.userCreated')
            ->select(
                'transactions.id',
                'accounts.name',
                'transactions.description',
                'transactions.amount',
                'transactions.status',
                'transactions.type',
                'users.name as user_created',
                'transactions.created_at',
                'transactions.reference'
            )
            ->orderBy('created_at', 'desc')->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // if(is_null($request->reference))
        //     return 'NULO';
        // else
        //     return 'NO NULO';
        DB::beginTransaction();
        try {
            // ACCOUNT OUT
            $this->storeTransaction($request->amount, 'Se realizo un retiro de la cuenta: ' . $request->nameOut, '-', $request->idOut, $request->user, null, $request->reference);
            // ACCOUT IN
            $this->storeTransaction($request->amount, 'Se realizo un ingreso a la cuenta: ' . $request->nameIn, '+', $request->idIn, $request->user, null, $request->reference);
            // NOTIFICATE ALL USERS
            // Notificate to User dutyManager
            $In = Account::find($request->idIn);
            $Out = Account::find($request->idOut);
            $domain = Config::get('app.domain');

            if (isset($In->dutyManager)) {
                $user = User::find($In->dutyManager);
                $body['message'] = "SE REALIZO UN INGRESO A SU CAJA DE LA CUENTA: " . strtoupper($request->nameOut)  . " POR: " . strtoupper($request->reference);
                $user->notify(new TelegramNotification($body));
            }
            if (isset($Out->dutyManager)) {
                $user = User::find($In->dutyManager);
                $body['message'] = "SE REALIZO UN RETIRO DE SU CAJA A LA CUENTA: " . strtoupper($request->nameOut)  . " POR: " . strtoupper($request->reference);
                $user->notify(new TelegramNotification($body));
            }

            // END NOTIFICATE ALL USERS

            DB::commit();
            return Response::json(['message' => 'Movimiento realizado'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        DB::beginTransaction();
        try {
            $description = "";
            if ($request->type == "-")
                $description = "Se realizo un retiro de la cuenta: " . $request->name;
            else
                $description = "Se realizo un ingreso a la cuenta: " . $request->name;

            $this->storeTransaction($request->amount, $description, $request->type, $request->id, $request->user, null, $request->reference);

            DB::commit();
            return Response::json(['message' => 'Movimiento realizado'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
