<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    public function userCreated()
    {
        return $this->belongsTo('App\User', 'userCreated', 'id');
    }
    public function userUpdated()
    {
        return $this->belongsTo('App\User', 'userUpdated', 'id');
    }
    public function inCharge()
    {
        return $this->belongsTo('App\User', 'inCharge', 'id');
    }
}
