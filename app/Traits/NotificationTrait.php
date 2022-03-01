<?php
  
namespace App\Traits;
use App\Notification;
use App\Loan;
use App\LoanPayment;
use Carbon\Carbon;
use App\User;
use App\Customer;

trait NotificationTrait
{
    public function getNotifications(){
        $dateNow=Carbon::today();
        $loans=Loan::select('id','paymentDate','idcustomer')->where('status',2)->get();
        foreach($loans as $loan){
            $lastPayment=LoanPayment::where('status','!=',0)->where('idloan',$loan->id)->orderBy('id','DESC')->get();
            $customer=Customer::find($loan->idcustomer);
            $nameCustomer=$customer->firstName." ".$customer->secondName." ".$customer->firstLastName." ".$customer->secondLastName;
            if(count($lastPayment)<1){
                $datePayment=Carbon::createFromDate($loan->paymentDate)->addMonth(1);
                
                if($dateNow->equalTo($datePayment))
                    $this->insertNotifications('El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' HOY ES SU PAGO');
                    // return 'Hoy es el dia de pago';
                else if($dateNow->greaterThan($datePayment)){
                    $diffDays=$dateNow->diffInDays($datePayment);
                    $this->insertNotifications('El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' EL PAGO ERA HACE '.$diffDays. ' DÍAS');
                    // return 'El pago era hace'.$diffDays.'dias';
                }
                else if($dateNow->lessThan($datePayment)){
                    $diffDays=$dateNow->diffInDays($datePayment);
                    if($diffDays<6)
                    $this->insertNotifications('El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' FALTAN '.$diffDays. ' DÍAS PARA SU PAGO');
                        // return 'Faltan'.$diffDays.'dias';
                    else
                        continue;
                        // return 'No notificar aun';
                }
            }
            else{
                $datePayment=Carbon::createFromDate($lastPayment->first()->paymentDateFinished);
                $datePaymentPluMonth=Carbon::createFromDate($lastPayment->first()->paymentDateFinished)->addMonth(1);

                if($dateNow->equalTo($datePayment))
                    continue;
                    // return 'No notificar';
                if($dateNow->equalTo($datePaymentPluMonth))
                    $this->insertNotifications('El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' HOY ES SU PAGO');
                    // return 'Hoy es el dia de pago';

                else if($dateNow->greaterThan($datePaymentPluMonth)){
                    $diffDays=$dateNow->diffInDays($datePaymentPluMonth);
                    if($diffDays<6)
                        $this->insertNotifications('El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' FALTAN '.$diffDays. ' DÍAS PARA SU PAGO');
                        // return 'Faltan'.$diffDays.'dias';
                    else
                        continue;
                        // return 'No notificar aun';
                }
                else if($dateNow->lessThan($datePaymentPluMonth)){
                    $diffDays=$dateNow->diffInDays($datePaymentPluMonth);
                    $this->insertNotifications('El cliente: '.$nameCustomer.' / '.$customer->dpi.' con crédito No.'.$loan->id.' EL PAGO ERA HACE '.$diffDays. ' DÍAS');
                    // return 'El pago era hace'.$diffDays.'dias';
                }
            }
            
        }
    }  
    public function insertNotifications($message){
        $users=User::where('status',1)->get();
        foreach($users as $user){
            $notification=new Notification;
            $notification->message=$message;
            $notification->status=false;
            $notification->iduser=$user->id;
            $notification->save();
        }
    } 
}