<?php

namespace App\Http\Controllers;

use App\Demand;
use App\Customer;
use App\Town;
use App\Departament;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Carbon\Carbon;
use App\Loan;
use App\LoanPayment;
use Intervention\Image\Facades\Image;
use \Illuminate\Support\Facades\File;
use \Exception;
use App\Notifications\TelegramNotification;
use App\User;
use Illuminate\Support\Facades\Config;
use App\Guarantee;
use App\GuaranteeDemand;
use App\ImageGuarantee;

class DemandController extends Controller
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
            $demand = Demand::join('customers', 'customers.id', '=', 'demands.idcustomer')
                ->join('guarantee_demands', 'guarantee_demands.idDemand', 'demands.id')
                ->join('guarantees', 'guarantees.id', 'guarantee_demands.idGuarantee')
                ->select(
                    'demands.id',
                    'amountToFinance',
                    'terms',
                    'percentage',
                    'loanRate',
                    'feeType',
                    'idCustomer',
                    'guarantees.name as guarantee',
                    'demands.status',
                    'demands.created_at',
                    'demands.dutyApprover',
                    'demands.dutyManager',
                    'demands.userCreated',
                    'demands.userUpdated',
                    DB::raw('CONCAT(firstName," ",COALESCE(secondName,"")," ",firstLastName," ",secondLastName) as customer')
                );
        } else {
            $search = explode(" ", $request->search);
            $demand = Demand::join('customers', 'customers.id', '=', 'demands.idcustomer')
                ->join('guarantee_demands', 'guarantee_demands.idDemand', 'demands.id')
                ->join('guarantees', 'guarantees.id', 'guarantee_demands.idGuarantee')
                ->select(
                    'demands.id',
                    'amountToFinance',
                    'terms',
                    'percentage',
                    'loanRate',
                    'feeType',
                    'idCustomer',
                    'guarantees.name as guarantee',
                    'demands.status',
                    'demands.created_at',
                    'demands.dutyApprover',
                    'demands.dutyManager',
                    'demands.userCreated',
                    'demands.userUpdated',
                    DB::raw('CONCAT(firstName," ",COALESCE(secondName,"")," ",firstLastName," ",secondLastName) as customer')
                )
                ->where(function ($query) use ($search) {
                    foreach ($search as $item) {
                        $query->where('demands.id', 'like', '%' . $item . '%')
                            ->orWhere('amountToFinance', 'like', '%' . $item . '%')
                            ->orWhere('percentage', 'like', '%' . $item . '%')
                            ->orWhere('terms', 'like', '%' . $item . '%')
                            ->orWhere('loanRate', 'like', '%' . $item . '%')
                            ->orWhere('feeType', 'like', '%' . $item . '%')
                            ->orWhere('idCustomer', 'like', '%' . $item . '%')
                            ->orWhere('guarantees.name', 'like', '%' . $item . '%')
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
            $demand->where('demands.dutyManager', $request->user);
        return $demand->with('userCreated:id,name', 'userUpdated:id,name', 'userDutyManager:id,name', 'userDutyApprover:id,name')
            ->orderBy('demands.status', 'desc')
            ->orderBy('demands.id', 'desc')
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
            $demand = new Demand;
            $demand->amountToFinance = $request->amountToFinance;
            $demand->terms = $request->terms;
            $demand->percentage = $request->percentage;
            $demand->loanRate = $request->loanRate;
            $demand->feeType = $request->feeType;
            $demand->idCustomer = $request->idCustomer;
            $demand->dutyManager = Customer::find($demand->idCustomer)->dutyManager;
            $demand->userCreated = $request->user;
            $demand->userUpdated = $request->user;
            $demand->save();

            if ($request->isRegistred == "true") {
                $guarantee = new Guarantee;
                $guarantee->name = $request->guarantee;
                $guarantee->save();
            } else {
                $guarantee = Guarantee::find($request->idGuarantee);
            }

            $guaranteeDemand = new GuaranteeDemand;
            $guaranteeDemand->idDemand = $demand->id;
            $guaranteeDemand->idGuarantee = $guarantee->id;
            $guaranteeDemand->save();

            $oldImages = ImageGuarantee::where('idGuarantee', $guarantee->id)->get();
            // BEGIN IMAGE
            if ($request->hasFile('files')) {
                for ($key = 0; $key < $request->numberImages; $key++) {
                    $image = Image::make($request->file('files')[$key]);
                    $extension = $request->file('files')[$key]->getClientOriginalExtension();
                    $name =  uniqid() . '.' . $extension;
                    $image->save($pathImages . $name);
                    $image->resize(150, 150);
                    $image->save($pathThumbnail . $name);
                    $imageGuarantee = new ImageGuarantee;
                    $imageGuarantee->name = $name;
                    $imageGuarantee->idGuarantee = $guarantee->id;
                    $imageGuarantee->save();
                }
                if ($request->isRegistred == "false") {
                    foreach ($oldImages as $oldImage) {
                        if (File::exists($pathImages . $oldImage->name)) {
                            File::delete($pathImages . $oldImage->name);
                            File::delete($pathThumbnail . $oldImage->name);
                        }
                        $oldImage->delete();
                    }
                }
            }
            DB::commit();
            return Response::json(['message' => 'Solicitud guardada exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Demand  $demand
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $demand = Demand::find($id);
        $customer = Customer::find($demand->idCustomer);
        $guarantee = Guarantee::find(GuaranteeDemand::where('idDemand', $demand->id)->get()->first()->idGuarantee);
        $images = ImageGuarantee::where('idGuarantee', $guarantee->id)->get();
        return Response::json(['demand' => $demand, 'guarantee' => $guarantee, 'customer' => $customer, 'images' => $images], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Demand  $demand
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Demand $demand)
    {
        $pathImages = public_path() . '/uploads/images/';
        $pathThumbnail = public_path() . '/uploads/thumbnail/';
        DB::beginTransaction();
        try {
            $demand->amountToFinance = $request->amountToFinance;
            $demand->terms = $request->terms;
            $demand->percentage = $request->percentage * $request->terms;
            $demand->loanRate = $request->loanRate;
            $demand->feeType = $request->feeType;
            $demand->idCustomer = $request->idCustomer;
            $demand->userUpdated = $request->user;
            $demand->dutyApprover = $request->user;
            $demand->save();

            $guarantee = Guarantee::find($request->idGuarantee);
            $guarantee->name = $request->guarantee;
            $guarantee->save();

            $oldImages = ImageGuarantee::where('idGuarantee', $guarantee->id)->get();
            // BEGIN IMAGE
            if ($request->hasFile('files')) {
                for ($key = 0; $key < $request->numberImages; $key++) {
                    $image = Image::make($request->file('files')[$key]);
                    $extension = $request->file('files')[$key]->getClientOriginalExtension();
                    $name =  uniqid() . '.' . $extension;
                    $image->save($pathImages . $name);
                    $image->resize(150, 150);
                    $image->save($pathThumbnail . $name);
                    $imageGuarantee = new ImageGuarantee;
                    $imageGuarantee->name = $name;
                    $imageGuarantee->idGuarantee = $guarantee->id;
                    $imageGuarantee->save();
                }
                foreach ($oldImages as $oldImage) {
                    if (File::exists($pathImages . $oldImage->name)) {
                        File::delete($pathImages . $oldImage->name);
                        File::delete($pathThumbnail . $oldImage->name);
                    }
                    $oldImage->delete();
                }
            }
            // END IMAGE
            $demand->save();
            DB::commit();
            return $this->accept($demand->id, $request->initDate, $request->user);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Demand  $demand
     * @return \Illuminate\Http\Response
     */
    public function destroy(Demand $demand)
    {
        //
    }
    public function accept($id, $date, $user)
    {
        DB::beginTransaction();
        try {
            $demand = Demand::find($id);
            if ($demand->status == 1)
                throw new Exception('Ya se resolvio la solicitud');
            $demand->status = 1;
            $demand->save();
            $initDate = Carbon::createFromDate($date);
            // BEGIN ALGORITM
            $terms = $demand->terms;
            $partTerms = explode('.', (string) $terms);

            if (count($partTerms) > 1) {
                // DAYS AND MONTH
                $monthsInit = Carbon::createFromDate($initDate->toDateTimeString())->addWeeks($partTerms[0] * 4);
                $monthsEnd = Carbon::createFromDate($initDate->toDateTimeString())->addWeeks($partTerms[0] * 4)->addWeeks(4);
                $diffDays = Carbon::createFromDate($monthsInit->toDateString())->diffInDays(Carbon::createFromDate($monthsEnd->toDateString()));

                $monthsAdd = $partTerms[0];
                $daysAdd = round($partTerms[1] / 100 * $diffDays);
                // END ALGORITM
                $endDate = Carbon::createFromDate($initDate->toDateTimeString())->addWeeks($monthsAdd * 4)->addDays($daysAdd);
            } else {
                // ONLY MONTHS
                $endDate = Carbon::createFromDate($initDate->toDateTimeString())->addWeeks($partTerms[0] * 4);
            }
            $capital = $demand->amountToFinance;
            $capitalWithInterest = $capital * (($demand->percentage / 100) + 1);
            $customer = Customer::find($demand->idCustomer)->dutyManager;
            // ADD LOAN
            $loan = new Loan;
            $loan->amountToFinance = $demand->amountToFinance;
            $loan->amount = $capitalWithInterest;
            $loan->balance = $capitalWithInterest;
            $loan->capital = 0;
            $loan->dateApprove = $date;
            $loan->interest = 0;
            $loan->bankDefault = 0;
            $loan->idCustomer = $demand->idCustomer;
            $loan->idDemand = $id;
            $loan->dutyManager = $customer;
            $loan->userCreated = $user;
            $loan->userUpdated = $user;

            $loan->save();
            // ADD LOANS
            if ($demand->loanRate == 'Flat') {
                if ($demand->feeType == "Semanal") {
                    $weeks = $initDate->diffInWeeks($endDate);
                    $cuota = round($capitalWithInterest / $weeks);
                    for ($i = 0; $i < $weeks; $i++) {
                        $expectedPaymentDate = Carbon::createFromDate($date)->addWeeks($i + 1);
                        $loanPayment = new LoanPayment;
                        $loanPayment->dutyManager = $customer;
                        $loanPayment->userCreated = $user;
                        $loanPayment->userUpdated = $user;
                        $loanPayment->expectedAmount = $cuota;
                        $loanPayment->expectedPaymentDate = $expectedPaymentDate;
                        $loanPayment->idLoan = $loan->id;
                        $loanPayment->save();
                    }
                } else if ($demand->feeType == "Catorcenal") {
                    $weeks = $initDate->diffInWeeks($endDate);
                    $weeks = $weeks / 2;
                    $cuota = round($capitalWithInterest / $weeks);
                    for ($i = 1; $i <= $weeks; $i++) {
                        $expectedPaymentDate = Carbon::createFromDate($date)->addWeeks($i * 2);
                        $loanPayment = new LoanPayment;
                        $loanPayment->dutyManager = $customer;
                        $loanPayment->userCreated = $user;
                        $loanPayment->userUpdated = $user;
                        $loanPayment->expectedAmount = $cuota;
                        $loanPayment->expectedPaymentDate = $expectedPaymentDate;
                        $loanPayment->idLoan = $loan->id;
                        $loanPayment->save();
                    }
                } else {
                    $months = $initDate->diffInMonths($endDate);
                    $cuota = round($capitalWithInterest / $months);
                    for ($i = 0; $i < $months; $i++) {
                        $expectedPaymentDate = Carbon::createFromDate($date)->addMonths($i + 1);
                        $loanPayment = new LoanPayment;
                        $loanPayment->dutyManager = $customer;
                        $loanPayment->userCreated = $user;
                        $loanPayment->userUpdated = $user;
                        $loanPayment->expectedAmount = $cuota;
                        $loanPayment->expectedPaymentDate = $expectedPaymentDate;
                        $loanPayment->idLoan = $loan->id;
                        $loanPayment->save();
                    }
                }
            } else {
                $count = 1;
                $verify = 1;
                $days = round(24 * $demand->terms);
                $cuota = round($capitalWithInterest / $days);

                while ($verify <= $days) :
                    if (!(Carbon::createFromDate($date)->addDays($count)->dayOfWeek == 0)) {
                        $expectedPaymentDate = Carbon::createFromDate($date)->addDays($count);
                        $loanPayment = new LoanPayment;
                        $loanPayment->dutyManager = $customer;
                        $loanPayment->userCreated = $user;
                        $loanPayment->userUpdated = $user;
                        $loanPayment->expectedAmount = $cuota;
                        $loanPayment->expectedPaymentDate = $expectedPaymentDate;
                        $loanPayment->idLoan = $loan->id;
                        $loanPayment->save();
                        $verify++;
                    }
                    $count++;
                endwhile;
            }
            $total = LoanPayment::where('idLoan', $loan->id)->get()->sum('expectedAmount');
            // DIFFERENCE
            if ($capitalWithInterest > $total) {
                $difference = $capitalWithInterest - $total;
                $idLastPayment = LoanPayment::where('idLoan', $loan->id)->orderBy('id', 'DESC')->get()->first()->id;
                $lastPayment = LoanPayment::find($idLastPayment);
                $lastPayment->expectedAmount = $lastPayment->expectedAmount + $difference;
                $lastPayment->save();
            } else if ($capitalWithInterest < $total) {
                $difference = $total - $capitalWithInterest;
                $idLastPayment = LoanPayment::where('idLoan', $loan->id)->orderBy('id', 'DESC')->get()->first()->id;
                $lastPayment = LoanPayment::find($idLastPayment);
                $lastPayment->expectedAmount = $lastPayment->expectedAmount - $difference;
                $lastPayment->save();
            }
            // Notificate to User dutyManager
            $user = User::find(Customer::find($demand->idCustomer)->dutyManager);

            $body['message'] = "LA SOLICITUD DEL CLIENTE " . strtoupper($this->getNameCustomer(Customer::find($demand->idCustomer))) . " HA SIDO APROVADA";
            $user->notify(new TelegramNotification($body));
            DB::commit();
            return Response::json(['message' => 'Solicitud aceptada exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }
    public function deny($id)
    {
        DB::beginTransaction();
        try {
            $demand = Demand::find($id);
            $demand->status = 0;
            $demand->save();
            DB::commit();
            return Response::json(['message' => 'Solicitud rechazada exitosamente'], 200);
        } catch (Exception $e) {
            DB::rollback();
            return Response::json(['message' => $e->getMessage()], 400);
        }
    }
    public function getDocument($id)
    {
        $demand = Demand::find($id);
        $customer = Customer::find($demand->idCustomer);
        $guarantee = Guarantee::find(GuaranteeDemand::where('idDemand', $demand->id)->get()->first()->idGuarantee);
        $images = ImageGuarantee::where('idGuarantee', $guarantee->id)->get();

        $document = public_path() . "/documents/Request.docx";
        $templateProcessor = new \PhpOffice\PhpWord\TemplateProcessor($document);

        $templateProcessor->setValue('id', $id);
        $templateProcessor->setValue('date', Carbon::createFromDate($demand->created_at->format('d M Y'))->format('d/m/Y'));
        $templateProcessor->setValue('firstName', $customer->firstName);
        $templateProcessor->setValue('secondName', $customer->secondName);
        $templateProcessor->setValue('firstLastName', $customer->firstLastName);
        $templateProcessor->setValue('secondLastName', $customer->secondLastName);
        $templateProcessor->setValue('marriedName', $customer->marriedName);
        $templateProcessor->setValue('dpi', $customer->dpi);
        $templateProcessor->setValue('nit', $customer->nit);
        $templateProcessor->setValue('birthDate', Carbon::createFromDate($customer->birthDate)->format('d/m/Y'));
        $templateProcessor->setValue('age', $customer->age);
        $templateProcessor->setValue('gender', $customer->gender);
        $templateProcessor->setValue('peopleDepend', $customer->peopleDepend);
        $templateProcessor->setValue('civilStatus', $customer->civilStatus);
        $templateProcessor->setValue('nationality', $customer->nationality);
        $templateProcessor->setValue('address', $customer->address);
        $templateProcessor->setValue('suburb', $customer->suburb);
        $templateProcessor->setValue('zone', $customer->zone);
        $templateProcessor->setValue('town', Town::find($customer->idTown)->name);
        $templateProcessor->setValue('departament', Departament::find(Town::find($customer->idTown)->idDepartament)->name);
        $templateProcessor->setValue('telephone', $customer->telephone);
        $templateProcessor->setValue('home', $customer->home);
        $templateProcessor->setValue('timeHome', $customer->timeHome);
        $templateProcessor->setValue('monthlyPayment', $customer->monthlyPayment);
        $templateProcessor->setValue('mobile', $customer->mobile);
        $templateProcessor->setValue('email', $customer->email);
        $templateProcessor->setValue('economicActivity', $customer->economicActivity);
        $templateProcessor->setValue('referenceOneName', $customer->referenceOneName);
        $templateProcessor->setValue('referenceOneRelationship', $customer->referenceOneRelationship);
        $templateProcessor->setValue('referenceOneAddress', $customer->referenceOneAddress);
        $templateProcessor->setValue('referenceOneTelephone', $customer->referenceOneTelephone);
        $templateProcessor->setValue('referenceTwoName', $customer->referenceTwoName);
        $templateProcessor->setValue('referenceTwoRelationship', $customer->referenceTwoRelationship);
        $templateProcessor->setValue('referenceTwoAddress', $customer->referenceTwoAddress);
        $templateProcessor->setValue('referenceTwoTelephone', $customer->referenceTwoTelephone);
        $templateProcessor->setValue('amountToFinance', $demand->amountToFinance);
        $templateProcessor->setValue('terms', $demand->terms);
        $templateProcessor->setValue('percentage', $demand->percentage);
        $templateProcessor->setValue('loanRate', $demand->loanRate);
        $templateProcessor->setValue('feeType', $demand->feeType);
        $templateProcessor->setValue('guarantee', $guarantee->name);
        $templateProcessor->setValue('customer', strtoupper($this->getNameCustomer($customer)));
        $templateProcessor->setValue('user', strtoupper(User::find($demand->dutyManager)->name));
        $templateProcessor->setImageValue('avatar', public_path() . "/uploads/thumbnail/" . $customer->img);
        $listImages = $images->map(function ($img) {
            $newImg['path'] = public_path() . "/uploads/images/" . $img->name;
            return  $newImg;
        });
        $templateProcessor->cloneBlock('images', count($listImages), true, true);
        foreach ($listImages as $key => $image) {
            $newKey = $key + 1;
            $templateProcessor->setImageValue("img#{$newKey}", array('path' => $image['path'], 'width' => '100%', 'height' => '100%', 'ratio' => false));
        }
        // header("Content-Disposition: attachment;" . "filename=SOLICITUD " . strtoupper($this->getNameCustomer($customer)) . ".docx");
        // $templateProcessor->saveAs('php://output');
        $pathToSave =  public_path() . "/documents";
        $fileName = "SOLICITUD_" . $customer->dpi . "_" . str_replace(' ', '_', mb_strtoupper($this->getNameCustomer($customer))) . ".docx";
        $templateProcessor->saveAs($pathToSave . "/" . $fileName);

        $headers = array(
            'Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        );

        return Response::download($pathToSave . "/" . $fileName, $fileName, $headers);
    }
    private function getNameCustomer(Customer $customer)
    {
        if (empty($customer->secondName) && empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->firstLastName} {$customer->secondLastName}";
        } else if (!empty($customer->secondName) && empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->secondName} {$customer->firstLastName} {$customer->secondLastName}";
        } else if (empty($customer->secondName) && !empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->firstLastName} {$customer->secondLastName} de {$customer->marriedName}";
        } else if (!empty($customer->secondName) && !empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->secondName} {$customer->firstLastName} {$customer->secondLastName} de {$customer->marriedName}";
        }
    }
    public function getGuarantee($id)
    {
        $guarantees = Guarantee::join('guarantee_demands', 'guarantee_demands.idGuarantee', 'guarantees.id')
            ->join('demands', 'guarantee_demands.idDemand', 'demands.id')
            ->select('guarantees.id', 'guarantees.name', 'guarantees.updated_at')
            ->groupBy('guarantees.id', 'guarantees.name')
            ->where('demands.idCustomer', $id)
            ->orderBy('guarantees.id', 'desc')
            ->get();
        $newGuarante = $guarantees->map(function ($guarantee) {
            $tempGuarantee['id'] = $guarantee->id;
            $tempGuarantee['name'] = $guarantee->name;
            $tempGuarantee['updated_at'] = $guarantee->updated_at;
            $tempGuarantee['images'] = ImageGuarantee::where('idGuarantee', $guarantee->id)->get();
            return $tempGuarantee;
        });
        return $newGuarante;
    }
}
