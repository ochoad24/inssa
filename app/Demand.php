<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Demand extends Model
{
    public function userDutyApprover()
    {
        return $this->belongsTo('App\User', 'dutyApprover', 'id');
    }
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
