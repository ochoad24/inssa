<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rol;
use App\Permit;
use App\RolPermit;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use \Exception;

class RolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (count(Rol::where('name', $request->name)->get()) > 0)
            return Response::json(['message' => 'Nombre ya registrado'], 400);

        DB::beginTransaction();
        try {
            $rol = new Rol;
            $rol->name = $request->name;
            $rol->save();

            $permits = Permit::get();
            foreach ($permits as $permit) {
                $myPermit = new RolPermit;
                $myPermit->idRol = $rol->id;
                $myPermit->idPermits = $permit->id;
                if ($permit->name == "Ver solo mi caja")
                    $myPermit->status = 1;
                $myPermit->save();
            }
            DB::commit();
            return Response::json([
                'message' => 'Rol guardado exitosamente',
                'idRol' => $rol->id,
            ], 200);
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
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
        if (count(Rol::where('name', $request->name)->where('id', '!=', $id)->get()) > 0)
            return Response::json(['message' => 'Nombre ya registrado'], 400);

        DB::beginTransaction();
        try {
            $rol = new Rol;
            $rol->name = $request->name;
            $rol->save();

            $permits = Permit::get();
            foreach ($permits as $permit) {
                $myPermit = new RolPermit;
                $myPermit->idRol = $rol->id;
                $myPermit->idPermits = $permit->id;
                $myPermit->save();
            }
            DB::commit();
            return Response::json([
                'message' => 'Rol guardado exitosamente',
                'idRol' => $rol->id,
            ], 200);
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
            $permits = RolPermit::where('idRol', $id)->get();
            foreach ($permits as $permit) {
                $permit->delete();
            }

            $rol = Rol::find($id);
            $rol->delete();

            DB::commit();
            return Response::json([
                'message' => 'Rol eliminado exitosamente'
            ], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }
    public function getRol(Request $request)
    {
        $search = explode(" ", $request->filter);
        return Rol::select('id', 'name')
            ->where(function ($query) use ($search) {
                foreach ($search as $item) {
                    $query->where('name', 'like', '%' . $item . '%');
                }
            })
            ->paginate(5);
    }
    public function getPermits(Request $request)
    {
        return Permit::select('id', 'name')->whereNull('idParent')->get();
    }
    public function getPermit($idRol, $idPermiso)
    {
        return RolPermit::select('rol_permits.id', 'permits.name', 'rol_permits.status')->join('permits', 'permits.id', '=', 'rol_permits.idPermits')
            ->where('rol_permits.idRol', $idRol)
            ->where('permits.idParent', $idPermiso)
            ->get();
    }
    public function updatePermit(Request $request, $idPermiso)
    {
        DB::beginTransaction();
        try {
            $rolpermit = RolPermit::find($idPermiso);
            $rolpermit->status = $request->status;
            $rolpermit->save();
            DB::commit();
            return Response::json([
                'message' => 'Permiso actualizado  exitosamente'
            ], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }
}
