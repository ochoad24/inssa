<?php

namespace App\Http\Controllers;

use App\Departament;
use App\Town;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class DepartamentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Departament::get(); 
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
     * @param  \App\Departament  $departament
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $town=Town::find($id);
        $departament=Departament::find($town->idDepartament);
        return Response::json(['name' => $departament->name], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Departament  $departament
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Departament $departament)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Departament  $departament
     * @return \Illuminate\Http\Response
     */
    public function destroy(Departament $departament)
    {
        //
    }
}
