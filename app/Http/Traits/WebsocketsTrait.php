<?php

namespace App\Http\Traits;

use App\Models\User;

trait WebSocketsTrait
{
    public function status()
    {

        return User::all();
    }


}