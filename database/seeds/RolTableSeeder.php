<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Rol;
use App\Permit;
use App\RolPermit;
use Illuminate\Support\Facades\Hash;

class RolTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $rol = new Rol;
        $rol->name = 'Administrador';
        $rol->save();

        $rol = new Rol;
        $rol->name = 'Cobrador';
        $rol->save();

        // END ROLES
        $user = new User;
        $user->user = 'admin';
        $user->password = Hash::make('123456');
        $user->name = 'Daniel Ochoa';
        $user->email = 'admin@admin.com';
        $user->telegramId = '1081840153';
        $user->idRol = 1;
        $user->save();

        $user = new User;
        $user->user = 'carlos';
        $user->password = Hash::make('Carlitos1012');
        $user->name = 'Carlos Chavez';
        $user->email = 'carlos@admin.com';
        $user->telegramId = '2097417709';
        $user->idRol = 1;
        $user->save();

        $user = new User;
        $user->user = 'juan';
        $user->password = Hash::make('JJSalpor');
        $user->name = 'Juan Salpor';
        $user->email = 'juan@admin.com';
        $user->telegramId = '2092345560';
        $user->idRol = 2;
        $user->save();

        $user = new User;
        $user->user = 'carloscoj';
        $user->password = Hash::make('14demarzo1993');
        $user->name = 'Carlos Coj';
        $user->email = 'carloscoj@admin.com';
        $user->telegramId = '2001338855';
        $user->idRol = 2;
        $user->save();

        $user = new User;
        $user->user = 'edgar';
        $user->password = Hash::make('Filipenses4/13');
        $user->name = 'Edgar Puac';
        $user->email = 'edgar@admin.com';
        $user->telegramId = '2133964456';
        $user->idRol = 2;
        $user->save();
        // END USER
        // ============================
        // PERMITS FOR CLIENT
        // ============================
        $permitParent = new Permit;
        $permitParent->name = "Cliente";
        $permitParent->save();

        $permit = new Permit;
        $permit->name = "Crear cliente";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Ver todos los clientes";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Ver cliente";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Editar cliente";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Eliminar cliente";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Cambiar usuario encargado";
        $permit->idParent = $permitParent->id;
        $permit->save();
        // ============================
        // PERMITS FOR DEMAND
        // ============================
        $permitParent = new Permit;
        $permitParent->name = "Solicitudes";
        $permitParent->save();

        $permit = new Permit;
        $permit->name = "Ver lista de solicitudes";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Crear solicitud";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Ver solicitud";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Aprobar o rechazar solicitud";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Descargar solicitud";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Ver todas las solicitudes";
        $permit->idParent = $permitParent->id;
        $permit->save();
        // ============================
        // PERMITS FOR LOAN
        // ============================
        $permitParent = new Permit;
        $permitParent->name = "Créditos";
        $permitParent->save();

        $permit = new Permit;
        $permit->name = "Ver lista de crédito";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Anular crédito";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Ver lista de pagos";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Anular pago";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Descargar pagare";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Descargar factura";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Imprimir recibos";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Descargar lista de pagos";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Ver todas los créditos";
        $permit->idParent = $permitParent->id;
        $permit->save();

        // ============================
        // PERMITS FOR Accounts
        // ============================
        $permitParent = new Permit;
        $permitParent->name = "Cuentas";
        $permitParent->save();

        $permit = new Permit;
        $permit->name = "Ver lista de cuentas";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Crear cuenta";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Editar cuenta";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Eliminar cuenta";
        $permit->idParent = $permitParent->id;
        $permit->save();
        // ============================
        // PERMITS FOR Accounts
        // ============================
        $permitParent = new Permit;
        $permitParent->name = "Cajas";
        $permitParent->save();

        $permit = new Permit;
        $permit->name = "Ver lista de cajas";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Crear caja";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Editar caja";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Eliminar caja";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Ver solo mi caja";
        $permit->idParent = $permitParent->id;
        $permit->save();
        // ============================
        // PERMITS FOR transactions
        // ============================
        $permitParent = new Permit;
        $permitParent->name = "Transacciones";
        $permitParent->save();

        $permit = new Permit;
        $permit->name = "Ver lista de transacciones";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Movimiento entre cuentas";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Ingreso/Salida de cuentas";
        $permit->idParent = $permitParent->id;
        $permit->save();
        // ============================
        // PERMITS FOR ChargeLoan
        // ============================
        $permitParent = new Permit;
        $permitParent->name = "Cobrar";
        $permitParent->save();

        $permit = new Permit;
        $permit->name = "Hacer cobros";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Cambiar fecha";
        $permit->idParent = $permitParent->id;
        $permit->save();
        // ============================
        // PERMITS FOR Users
        // ============================
        $permitParent = new Permit;
        $permitParent->name = "Usuarios";
        $permitParent->save();

        $permit = new Permit;
        $permit->name = "Ver lista de usuarios";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Crear usuario";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Editar usuario";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Eliminar usuario";
        $permit->idParent = $permitParent->id;
        $permit->save();
        // ============================
        // PERMITS FOR Users
        // ============================
        $permitParent = new Permit;
        $permitParent->name = "Rol";
        $permitParent->save();

        $permit = new Permit;
        $permit->name = "Ver lista de roles";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Crear rol";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Editar rol";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Eliminar rol";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Permisos";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Ver permisos";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Activar o desactivar Permiso";
        $permit->idParent = $permitParent->id;
        $permit->save();
        // ============================
        // PERMITS FOR reports
        // ============================
        $permitParent = new Permit;
        $permitParent->name = "Reportes";
        $permitParent->save();

        $permit = new Permit;
        $permit->name = "Ver reportes";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Cobros";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Todos los cobros";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Clientes";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Solicitudes";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Créditos Activos";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Créditos Inactivos";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Créditos Anulados";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Estado de créditos";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Estado de cuentas";
        $permit->idParent = $permitParent->id;
        $permit->save();

        $permit = new Permit;
        $permit->name = "Estado de cajas";
        $permit->idParent = $permitParent->id;
        $permit->save();
        // PERMITS ROL
        $permit = Permit::get();
        for ($i = 1; $i <= count($permit); $i++) {
            $permitsRol = new RolPermit;
            $permitsRol->idRol = 1;
            $permitsRol->idPermits = $i;
            if ($permit[$i - 1]->name == "Ver solo mi caja")
                $permitsRol->status = 0;
            else
                $permitsRol->status = 1;
            $permitsRol->save();

            $permitsRol = new RolPermit;
            $permitsRol->idRol = 2;
            $permitsRol->idPermits = $i;
            $permitsRol->status = 0;
            $permitsRol->save();
        }
    }
}
