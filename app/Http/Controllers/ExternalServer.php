<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Inertia\Inertia;

class ExternalServer extends Controller
{
    public function index()
    {
        $client = new Client();
        $response = $client->get('https://jsonplaceholder.typicode.com/users');
        $users = json_decode($response->getBody(), true);

        return Inertia::render('ExternalServer', [
            'users' => $users,
        ]);
    }
}
