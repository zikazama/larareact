<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Validator;

class Form extends Controller
{
    public function store(Request $request)
    {
        // dd($request);
        $validate = Validator::make($request->all(), [
            'name' => 'required|min:5',
            'email' => 'required',
            'password' => 'required',
        ], [
            'name.required' => 'Name is must.',
            'name.min' => 'Name must have 5 char.',
        ]);
        if ($validate->fails()) {
            return back()->withErrors($validate->errors())->withInput();
        }
        return Inertia::render('Coba', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
