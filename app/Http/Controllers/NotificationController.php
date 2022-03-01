<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notification;
use Illuminate\Support\Facades\Response;
use App\Notifications\TelegramNotification;
use App\User;
use Illuminate\Notifications\Notifiable;

class NotificationController extends Controller
{
    use Notifiable;

    public function getNotification($user)
    {
        return Notification::where('status', 0)->where('iduser', $user)->orderBy('id', 'DESC')->paginate(10);
    }
    public function getAllNotifications($user)
    {
        return Notification::where('iduser', $user)->orderBy('id', 'DESC')->paginate(10);
    }
    public function showNotification($id)
    {
        $notification = Notification::find($id);
        $notification->status = 1;
        $notification->save();
        return Response::json(['message' => 'Listo'], 200);
    }
    public function notify(Request $request)
    {
        // $domain = parse_url($request->root())['host'];
        // echo $domain;
        // $user=User::find(2);
        // $user->notify(new TelegramNotification());
    }
}
