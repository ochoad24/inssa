<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use NotificationChannels\Telegram\TelegramMessage;

class TelegramNotification extends Notification
{
    use Queueable;
    protected $message;

    public function __construct($demand)
    {
        $this->message = $demand['message'];
    }
    public function via($notifiable)
    {
        return ["telegram"];
    }
    public function toTelegram($notifiable)
    {
        return TelegramMessage::create()
            ->to($notifiable->telegramId)
            ->content($this->message);
    }
}
