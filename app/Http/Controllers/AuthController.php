<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\RolPermit;
use App\User;
use App\Rol;
use App\Permit;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT token via given credentials.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('user', 'password');

        if ($token = $this->guard()->attempt($credentials)) {
            return $this->respondWithToken($token);
        }

        return response()->json(['error' => 'No autorizado'], 401);
    }

    /**
     * Get the authenticated User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json($this->guard()->user());
    }

    /**
     * Log the user out (Invalidate the token)
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        if(Auth::user()->status===0)
            return response()->json(['error' => 'No autorizado'], 401);
        
        $user=[
            "displayName"=>Auth::user()->name,
            "email"=>Auth::user()->email,
            "userRole"=>Rol::find(Auth::user()->idRol)->name,
            "uid"=>Auth::user()->id
        ];
        $permits=Permit::select('permits.id','permits.name','rol_permits.status',DB::raw('COALESCE(permits.idParent,"Modulo") as idParent'))->join('rol_permits','rol_permits.idPermits','=','permits.id')
        ->where('rol_permits.idRol',Auth::user()->idRol)
        ->get();

        return response()->json([
            'userData'=> $user,
            'accessToken' => $token,
            'token_type' => 'bearer',
            'tokenExpiryKey'=>Carbon::now()->addHours(6),
            'permitKey'=>json_encode($permits)
        ]);
    } 
    // 'tokenExpiryKey' => $this->guard()->factory()->getTTL()
    // 'tokenExpiryKey'=>Carbon::now()->timestamp

    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    public function guard()
    {
        return Auth::guard();
    }
}
