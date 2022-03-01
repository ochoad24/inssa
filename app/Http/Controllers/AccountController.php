<?php

namespace App\Http\Controllers;

use App\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use App\Traits\LoanTrait;
use \Exception;

class AccountController extends Controller
{
    use LoanTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->search;
        $critery = $request->critery;

        if ($search == '') {
            return Account::with('userCreated:id,name', 'userUpdated:id,name')->where('isCashRegister', 0)->where('status', 1)->orderBy('created_at', 'desc')->paginate(10);
        } else {
            return Account::with('userCreated:id,name', 'userUpdated:id,name')->where('isCashRegister', 0)->where($critery, 'like', '%' . $search . '%')
                ->where('status', 1)
                ->orderBy('created_at', 'desc')
                ->paginate(10);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (count(Account::where('name', $request->name)->where('isCashRegister', false)->where('status', true)->get()) > 0)
            return Response::json(['message' => 'Nombre de cuenta ya registrado'], 400);
        DB::beginTransaction();
        try {
            $account = new Account;
            $account->name = $request->name;
            if (!empty($request->description))
                $account->description = $request->description;
            $account->amount = 0;
            if (!empty($request->bank))
                $account->bank = $request->bank;

            $account->isCashRegister = false;

            $account->userCreated = $request->user;
            $account->userUpdated = $request->user;
            $account->save();

            $this->storeTransaction($request->amount, 'Se aperturo la cuenta: ' . $request->name, '+', $account->id, $request->user);

            DB::commit();
            return Response::json(['message' => 'Cuenta guardada exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function show(Account $account)
    {
        return $account;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $account = Account::find($id);

        if (count(Account::where('name', $request->name)->where('id', '!=', $account->id)->where('isCashRegister', false)->where('status', true)->get()) > 0)
            return Response::json(['message' => 'Nombre de cuenta ya registrado'], 400);
        DB::beginTransaction();
        try {
            $account->name = $request->name;
            if (!empty($request->description))
                $account->description = $request->description;
            if (!empty($request->bank))
                $account->bank = $request->bank;

            $account->isCashRegister = false;

            $account->userUpdated = $request->user;
            $account->save();
            DB::commit();
            return Response::json(['message' => 'Cuenta actualizada exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function destroy(Account $account)
    {
        if ($account->amount > 0)
            return Response::json(['message' => 'La cuenta debe estar en 0 para poder ser eliminada'], 400);
        DB::beginTransaction();
        try {
            $account->status = 0;
            $account->save();
            DB::commit();
            return Response::json(['message' => 'Cuenta eliminada exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    // GET ACCOUNTS
    public function searchAccount(Request $request)
    {
        $search = $request->filter;
        $type = $request->type;
        return Account::select('id', 'name')->where('name', 'like', '%' . $search . '%')->where('status', 1)->where('isCashRegister', $type)->orderBy('created_at', 'desc')->paginate(10);
    }
    // GET ALL ACOUNTS
    public function getAccount(Request $request)
    {
        $search = $request->filter;
        return Account::select('id', 'name')->where('name', 'like', '%' . $search . '%')->where('status', 1)->orderBy('created_at', 'desc')->paginate(10);
    }
}
