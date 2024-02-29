<?php

use App\Http\Controllers\Form;
use App\Http\Controllers\Websocket;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ExternalServer;
use App\Events\Hello;
use App\Events\PrivateTest;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('coba', function () {
    return Inertia::render('Coba', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('form', function () {
    return Inertia::render('Form');
});

Route::get('external', function () {
    return Inertia::render('External');
});

Route::get('external-server', [ExternalServer::class, 'index']);

Route::get('siswa/{id}', [Form::class, 'siswa'])->name('siswa.get');

// WS
Route::get('/status', [Websocket::class, 'status']);

Route::post('form', [Form::class,'store'])->name('form.create');

Route::get('/broadcast',function(){

    broadcast(new Hello());
    return "Event has been sent!";
});

Route::get('/broadcastPrivate',function(){
    $user = App\Models\User::find(5);
    broadcast(new PrivateTest($user));
    return "Event has been sent!";
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/post', [PostController::class, 'index'])->middleware([])->name('post');

require __DIR__.'/auth.php';
