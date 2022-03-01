<?php

namespace App\Http\Controllers;

use App\Rol;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
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
            return User::join('rols', 'rols.id', '=', 'users.idRol')
                ->select('users.id', 'users.user', 'users.email', 'users.name', 'users.idRol', 'rols.name as nameRol', 'users.created_at')
                ->where('status', 1)
                ->orderBy('users.created_at', 'desc')
                ->paginate(10);
        } else {
            return User::join('rols', 'rols.id', '=', 'users.idRol')
                ->select('users.id', 'users.user', 'users.email', 'users.name', 'users.idRol', 'rols.name as nameRol', 'users.created_at')
                ->where($critery, 'like', '%' . $search . '%')
                ->where('status', 1)
                ->orderBy('users.created_at', 'desc')
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

        if (count(User::where('user', $request->user)->get()) > 0)
            return Response::json(['message' => 'Usuario ya registrado'], 400);
        if (count(User::where('name', $request->email)->get()) > 0)
            return Response::json(['message' => 'Email ya registrado'], 400);

        DB::beginTransaction();
        try {
            $user = new User;
            $user->user = $request->user;
            $user->email = $request->email;
            $user->name = $request->name;
            if (!empty($request->password))
                $user->password = Hash::make($request->password);
            $user->telegramId = $request->telegram;
            $user->idRol = $request->idRol;
            $user->save();
            DB::commit();
            return Response::json(['message' => 'Usuario guardado exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        $rol = Rol::find($user->idRol);
        return Response::json(['user' => $user, 'rol' => $rol], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (count(User::where('user', $request->user)->where('id', '!=', $id)->get()) > 0)
            return Response::json(['message' => 'Usuario ya registrado'], 400);
        if (count(User::where('name', $request->email)->where('id', '!=', $id)->get()) > 0)
            return Response::json(['message' => 'Email ya registrado'], 400);

        DB::beginTransaction();
        try {
            $user = User::find($id);
            $user->user = $request->user;
            $user->email = $request->email;
            $user->name = $request->name;
            if (!empty($request->password))
                $user->password = Hash::make($request->password);
            $user->telegramId = $request->telegram;
            $user->idRol = $request->idRol;
            $user->save();
            DB::commit();
            return Response::json(['message' => 'Usuario actualizado exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::beginTransaction();
        try {
            $user = User::find($id);
            $user->status = 0;
            $user->save();
            DB::commit();
            return Response::json(['message' => 'Usuario eliminado exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }
    public function getUser(Request $request)
    {
        $search = explode(" ", $request->filter);
        return User::select('id', 'name')
            ->where(function ($query) use ($search) {
                foreach ($search as $item) {
                    $query->where('id', 'like', '%' . $item . '%')
                        ->orWhere('name', 'like', '%' . $item . '%')
                        ->orWhere('user', 'like', '%' . $item . '%');
                }
            })
            ->where('status', 1)
            ->orderBy('created_at', 'desc')->paginate(5);
    }
    public function getAdmins(Request $request)
    {
        $search = explode(" ", $request->filter);
        return User::select('id', 'name')
            ->where(function ($query) use ($search) {
                foreach ($search as $item) {
                    $query->where('id', 'like', '%' . $item . '%')
                        ->orWhere('name', 'like', '%' . $item . '%')
                        ->orWhere('user', 'like', '%' . $item . '%');
                }
            })
            ->where('status', 1)
            ->where('idRol', 1)
            ->orderBy('created_at', 'desc')->paginate(5);
    }
}
