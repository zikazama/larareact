<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\PublicMessageEvent;

class Websocket extends Controller
{
    public function status () {
        broadcast(new PublicMessageEvent());
   }
}
