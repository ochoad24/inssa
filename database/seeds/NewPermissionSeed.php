<?php

use Illuminate\Database\Seeder;
use App\Rol;
use App\Permit;
use App\RolPermit;

class NewPermissionSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permit=new Permit;
        $permit->id=69;
        $permit->name="Anular Solicitudes";
        $permit->idParent=15;
        $permit->save();

        $permitsRol=new RolPermit;
        $permitsRol->idRol=1;
        $permitsRol->idPermits=69;
        $permitsRol->status=1;
        $permitsRol->save();

        $permitsRol=new RolPermit;
        $permitsRol->idRol=2;
        $permitsRol->idPermits=69;
        $permitsRol->status=0;
        $permitsRol->save();
    }
}
