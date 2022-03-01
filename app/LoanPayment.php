<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LoanPayment extends Model
{
    public function userDutyManager()
    {
        return $this->belongsTo('App\User', 'dutyManager', 'id');
    }
    public function userCreated()
    {
        return $this->belongsTo('App\User', 'userCreated', 'id');
    }
    public function userUpdated()
    {
        return $this->belongsTo('App\User', 'userUpdated', 'id');
    }
}
