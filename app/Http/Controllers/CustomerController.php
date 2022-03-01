<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Town;
use App\Demand;
use App\Loan;
use App\Departament;
use App\LoanPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use \Exception;
use Intervention\Image\Facades\Image;
use \Illuminate\Support\Facades\File;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->search;
        $permit = $request->permit;
        if ($search == '') {
            $customer = Customer::with('userCreated:id,name', 'userUpdated:id,name', 'userDutyManager:id,name');
        } else {
            $search = explode(" ", $request->search);
            $customer = Customer::with('userCreated:id,name', 'userUpdated:id,name', 'userDutyManager:id,name')
                ->where(function ($query) use ($search) {
                    foreach ($search as $item) {
                        $query->where('id', 'like', '%' . $item . '%')
                            ->orWhere('firstName', 'like', '%' . $item . '%')
                            ->orWhere('secondName', 'like', '%' . $item . '%')
                            ->orWhere('firstLastName', 'like', '%' . $item . '%')
                            ->orWhere('secondLastName', 'like', '%' . $item . '%')
                            ->orWhere('dpi', 'like', '%' . $item . '%')
                            ->orWhere('nit', 'like', '%' . $item . '%');
                    }
                });
        }
        if ($permit == "true")
            $customer->where('dutyManager', $request->user);
        return $customer->orderBy('created_at', 'desc')
            ->where('status', 1)
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
        $pathImages = public_path() . '/uploads/images/';
        $pathThumbnail = public_path() . '/uploads/thumbnail/';

        DB::beginTransaction();
        try {
            $customer = new Customer;
            $customer->firstName = $request->firstName;
            if (!empty($request->secondName))
                $customer->secondName = $request->secondName;
            $customer->firstLastName = $request->firstLastName;
            $customer->secondLastName = $request->secondLastName;
            if (!empty($request->marriedName))
                $customer->marriedName = $request->marriedName;
            $customer->dpi = $request->dpi;
            $customer->nit = $request->nit;
            $customer->birthDate = $request->birthDate;
            $customer->age = $request->age;
            $customer->gender = $request->gender;
            $customer->peopleDepend = $request->peopleDepend;
            $customer->civilStatus = $request->civilStatus;
            $customer->nationality = $request->nationality;
            $customer->address = $request->address;
            if (!empty($request->suburb))
                $customer->suburb = $request->suburb;
            if (!empty($request->zone))
                $customer->zone = $request->zone;
            $customer->idTown = $request->idTown;
            if (!empty($request->telephone))
                $customer->telephone = $request->telephone;
            $customer->home = $request->home;
            $customer->timeHome = $request->timeHome;
            $customer->monthlyPayment = $request->monthlyPayment;
            $customer->mobile = $request->mobile;
            if (!empty($request->email))
                $customer->email = $request->email;
            $customer->economicActivity = $request->economicActivity;

            $customer->referenceOneName = $request->referenceOneName;
            $customer->referenceOneRelationship = $request->referenceOneRelationship;
            $customer->referenceOneAddress = $request->referenceOneAddress;
            $customer->referenceOneTelephone = $request->referenceOneTelephone;

            $customer->referenceTwoName = $request->referenceTwoName;
            $customer->referenceTwoRelationship = $request->referenceTwoRelationship;
            $customer->referenceTwoAddress = $request->referenceTwoAddress;
            $customer->referenceTwoTelephone = $request->referenceTwoTelephone;
            $customer->dutyManager = $request->dutyManager;
            $customer->userCreated = $request->dutyManager;
            $customer->userUpdated = $request->dutyManager;

            // BEGIN IMAGE
            if ($request->hasFile('file')) {
                $image = Image::make($request->file('file'));
                $extension = $request->file('file')->getClientOriginalExtension();
                $name =  $request->dpi . '.' . $extension;
                $image->save($pathImages . $name);
                $image->resize(150, 150);
                $image->save($pathThumbnail . $name);
                $customer->img = $name;
            }
            // END IMAGE
            // BEGIN IMAGE HOUSE
            if ($request->hasFile('house')) {
                $image = Image::make($request->file('house'));
                $extension = $request->file('house')->getClientOriginalExtension();
                $name =  'house-' . $request->dpi . '.' . $extension;
                $image->save($pathImages . $name);
                $image->resize(150, 150);
                $image->save($pathThumbnail . $name);
                $customer->imgHouse = $name;
            }
            // END IMAGE HOUSE
            $customer->save();
            DB::commit();
            return Response::json(['message' => 'Cliente guardado exitosamente', 'id' => $customer->id], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = Customer::with('userDutyManager')->with('userCreated')->with('userUpdated')->where('id', $id)->get()->first();
        $town = Town::find($customer->idTown);
        $departament = Departament::find($town->idDepartament);
        return Response::json([
            'customer' => $customer,
            'town' => $town,
            'departament' => $departament
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        $pathImages = public_path() . '/uploads/images/';
        $pathThumbnail = public_path() . '/uploads/thumbnail/';

        DB::beginTransaction();
        try {
            $customer->firstName = $request->firstName;
            if (!empty($request->secondName))
                $customer->secondName = $request->secondName;
            $customer->firstLastName = $request->firstLastName;
            $customer->secondLastName = $request->secondLastName;
            if (!empty($request->marriedName))
                $customer->marriedName = $request->marriedName;
            $customer->dpi = $request->dpi;
            $customer->nit = $request->nit;
            $customer->birthDate = $request->birthDate;
            $customer->age = $request->age;
            $customer->gender = $request->gender;
            $customer->peopleDepend = $request->peopleDepend;
            $customer->civilStatus = $request->civilStatus;
            $customer->nationality = $request->nationality;
            $customer->address = $request->address;
            if (!empty($request->suburb))
                $customer->suburb = $request->suburb;
            if (!empty($request->zone))
                $customer->zone = $request->zone;
            $customer->idTown = $request->idTown;
            if (!empty($request->telephone))
                $customer->telephone = $request->telephone;
            $customer->home = $request->home;
            $customer->timeHome = $request->timeHome;
            $customer->monthlyPayment = $request->monthlyPayment;
            $customer->mobile = $request->mobile;
            if (!empty($request->email))
                $customer->email = $request->email;
            $customer->economicActivity = $request->economicActivity;

            $customer->referenceOneName = $request->referenceOneName;
            $customer->referenceOneRelationship = $request->referenceOneRelationship;
            $customer->referenceOneAddress = $request->referenceOneAddress;
            $customer->referenceOneTelephone = $request->referenceOneTelephone;

            $customer->referenceTwoName = $request->referenceTwoName;
            $customer->referenceTwoRelationship = $request->referenceTwoRelationship;
            $customer->referenceTwoAddress = $request->referenceTwoAddress;
            $customer->referenceTwoTelephone = $request->referenceTwoTelephone;
            $oldDutyManager = $customer->dutyManager;
            if ($oldDutyManager != $request->dutyManager) {
                // SOLICITUDES
                $demands = Demand::where('idCustomer', $customer->id)->get();
                foreach ($demands as $demand) {
                    $demand->userUpdated = $request->user;
                    $demand->dutyManager = $request->dutyManager;
                    $demand->save();
                }
                // LOAN
                $loans = Loan::where('idCustomer', $customer->id)->get();
                foreach ($loans as $loan) {
                    $loan->userUpdated = $request->user;
                    $loan->dutyManager = $request->dutyManager;
                    $loan->save();
                    // LOAN PAYMENTS
                    $loanPayments = LoanPayment::where('idLoan', $loan->id)->get();
                    foreach ($loanPayments as $loanPayment) {
                        $loanPayment->userUpdated = $request->user;
                        $loanPayment->dutyManager = $request->dutyManager;
                        $loanPayment->save();
                    }
                }
                $customer->dutyManager = $request->dutyManager;
            }
            $customer->userUpdated = $request->user;
            // BEGIN IMAGE
            if ($request->hasFile('file')) {
                if (File::exists($pathImages . $customer->img)) {
                    File::delete($pathImages . $customer->img);
                    File::delete($pathThumbnail . $customer->img);
                }
                $image = Image::make($request->file('file'));
                $extension = $request->file('file')->getClientOriginalExtension();
                $name =  $request->dpi . '.' . $extension;
                $image->save($pathImages . $name);
                $image->resize(150, 150);
                $image->save($pathThumbnail . $name);
                $customer->img = $name;
            }
            // END IMAGE
            // BEGIN IMAGE
            if ($request->hasFile('house')) {
                if (File::exists($pathImages . $customer->img)) {
                    File::delete($pathImages . $customer->img);
                    File::delete($pathThumbnail . $customer->imgHouse);
                }
                $image = Image::make($request->file('house'));
                $extension = $request->file('house')->getClientOriginalExtension();
                $name =  'house-' . $request->dpi . '.' . $extension;
                $image->save($pathImages . $name);
                $image->resize(150, 150);
                $image->save($pathThumbnail . $name);
                $customer->imgHouse = $name;
            }
            // END IMAGE
            $customer->save();
            DB::commit();
            return Response::json(['message' => 'Cliente guardado exitosamente', 'id' => $customer->id], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        $demand = Demand::where('status', 2)->where('idcustomer', $customer->id)->get();
        if (count($demand) > 0)
            return Response::json(['message' => 'El cliente tiene una solicitud pendiente'], 400);
        $demand = Loan::where('status', 2)->where('idcustomer', $customer->id)->get();
        if (count($demand) > 0)
            return Response::json(['message' => 'El cliente tiene una crédito pendiente'], 400);
        DB::beginTransaction();
        try {
            $customer->delete();
            DB::commit();
            return Response::json(['message' => 'Cliente eliminado exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }
    public function getCustomer(Request $request)
    {
        $search = explode(" ", $request->filter);
        $customer = Customer::select(DB::raw('CONCAT(id,". ",firstName," ",COALESCE(secondName,"")," ",firstLastName," ",secondLastName, " / " ,dpi) as name'), 'id', 'nit', 'dpi')
            ->where('id', $request->filter)
            ->where('status', 1)
            ->get();
        if (count($customer) == 1) {
            return $customer->first();
        }
        return Customer::select(DB::raw('CONCAT(id,". ",firstName," ",COALESCE(secondName,"")," ",firstLastName," ",secondLastName, " / " ,dpi) as name'), 'id', 'nit', 'dpi')
            ->where(function ($query) use ($search) {
                foreach ($search as $item) {
                    $query->where('id', 'like', '%' . $item . '%')
                        ->orWhere('firstName', 'like', '%' . $item . '%')
                        ->orWhere('secondName', 'like', '%' . $item . '%')
                        ->orWhere('firstLastName', 'like', '%' . $item . '%')
                        ->orWhere('secondLastName', 'like', '%' . $item . '%')
                        ->orWhere('dpi', 'like', '%' . $item . '%')
                        ->orWhere('nit', 'like', '%' . $item . '%');
                }
            })
            ->where('status', 1)
            ->orderBy('created_at', 'desc')->paginate(5);
    }
}
