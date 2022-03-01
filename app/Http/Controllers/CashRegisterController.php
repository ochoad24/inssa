<?php

namespace App\Http\Controllers;

use App\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use App\Traits\LoanTrait;
use \Exception;

class CashRegisterController extends Controller
{
    use LoanTrait;

    public function index(Request $request)
    {
        $search = $request->search;
        $critery = $request->critery;
        $admin = $request->admin;
        $user = $request->user;

        if ($search == '') {
            $accounts = Account::with('userCreated:id,name', 'userUpdated:id,name', 'inCharge:id,name');
        } else {
            $accounts = Account::with('userCreated:id,name', 'userUpdated:id,name', 'inCharge:id,name')
                ->where($critery, 'like', '%' . $search . '%');
        }
        if ($admin == "true")
            $accounts->where('inCharge', $user);
        return $accounts->where('isCashRegister', 1)
            ->where('status', 1)
            ->orderBy('created_at', 'desc')
            ->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (count(Account::where('name', $request->name)->where('isCashRegister', true)->where('status', true)->get()) > 0)
            return Response::json(['message' => 'Nombre de caja ya registrado'], 400);

        if (count(Account::where('inCharge', $request->inCharge)->where('isCashRegister', true)->where('status', true)->get()) > 0)
            return Response::json(['message' => 'Este usuario ya tiene una caja asignada'], 400);

        DB::beginTransaction();
        try {
            $account = new Account;
            $account->name = $request->name;
            $account->description = $request->description;
            $account->amount = 0;

            $account->isCashRegister = true;

            $account->inCharge = $request->inCharge;
            $account->userCreated = $request->user;
            $account->userUpdated = $request->user;
            $account->save();

            $this->storeTransaction($request->amount, 'Se aperturo la caja: ' . $request->name, '+', $account->id, $request->user);

            DB::commit();
            return Response::json(['message' => 'Caja guardada exitosamente'], 200);
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
    public function show($id)
    {
        return Account::where('id', $id)->with('inCharge:id,name')->get()->first();
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
        if (count(Account::where('inCharge', $request->inCharge)->where('id', '!=', $account->id)->where('isCashRegister', true)->where('status', true)->get()) > 0)
            return Response::json(['message' => 'Este usuario ya tiene una caja asignada'], 400);

        DB::beginTransaction();
        try {
            $account->name = $request->name;
            $account->description = $request->description;
            $account->inCharge = $request->inCharge;
            $account->userUpdated = $request->user;
            $account->save();
            DB::commit();
            return Response::json(['message' => 'Caja actualizada exitosamente'], 200);
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
            return Response::json(['message' => 'La caja debe estar en 0 para poder ser eliminada'], 400);
        DB::beginTransaction();
        try {
            $account->status = 0;
            $account->save();
            DB::commit();
            return Response::json(['message' => 'Caja eliminada exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }
    public function selectCashRegister(Request $request)
    {
        $search = $request->filter;
        return Account::select('id', 'name')->where('name', 'like', '%' . $search . '%')->where('isCashRegister', 1)->where('status', 1)->orderBy('created_at', 'desc')->paginate(10);
    }
    public function haveCashRegister($id)
    {
        $account = Account::where('inCharge', $id)->where('isCashRegister', true)->where('status', true)->get();
        if (count($account) > 0)
            return Response::json([
                'isHaveCashRegister' => true,
                'idCashRegister' => $account->first()->id
            ], 200);
        else
            return Response::json([
                'isHaveCashRegister' => false,
                'idCashRegister' => 0
            ], 200);
    }
}
