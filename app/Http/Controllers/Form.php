<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Spatie\LaravelImageOptimizer\Facades\ImageOptimizer;
use Spatie\Image\Image;

class Form extends Controller
{
     /**
    *    @OA\Get(
    *       path="/kategori-berita",
    *       tags={"Berita"},
    *       operationId="kategoriBerita",
    *       summary="Kategori Berita",
    *       description="Mengambil Data Kategori Berita",
    *       @OA\Response(
    *           response="200",
    *           description="Ok",
    *           @OA\JsonContent
    *           (example={
    *               "success": true,
    *               "message": "Berhasil mengambil Kategori Berita",
    *               "data": {
    *                   {
    *                   "id": "1",
    *                   "nama_kategori": "Pendidikan",
    *                  }
    *              }
    *          }),
    *      ),
    *  )
    */
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

    public function siswa(Request $request){
        // dd($request->route('id'));
        dd($request->query('page'));
    }

    public function lazy(){
        $users = User::take(3)->get();
        dd($users);
    }

    public function eager(){
        $users = User::with('role')->take(3)->get();
        dd($users);
    }

    public function image_compress(Request $request)
    {
        // dd($request);
        // $this->validate($request, [
        //     'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        // ]);
   
        if (!empty($request->image)) {
            $file =$request->file('image');
            $extension = $file->getClientOriginalExtension(); 
            $filename = time().'.' . $extension;
            $file->move(public_path('uploads/'), $filename);
            $data['image']= 'public/uploads/'.$filename;
        }
        Image::load(public_path('uploads/'). $filename)->optimize()->save();

     
        return back()
            ->with('success','Image Upload successful')
            ->with('imageName',$filename);
    }
}
