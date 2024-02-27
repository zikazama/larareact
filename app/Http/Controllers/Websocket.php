<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\PublicMessageEvent;
use App\Events\NewMessage;

class Websocket extends Controller
{
    public function status () {
        event(new NewMessage('Hello'));
   }
}
