<?php
    
namespace App\Http\Controllers;
    
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
    
class PostController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function index()
    {
        $posts = Post::latest()->paginate(1);
        return Inertia::render('Posts/Index', ['posts' => $posts]);
    }
}