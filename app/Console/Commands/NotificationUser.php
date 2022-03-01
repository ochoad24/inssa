<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Traits\NotificationTrait;
class NotificationUser extends Command
{
    use NotificationTrait;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Este comando notifica a los usuarios sobre los pagos proximos a cobrar';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->getNotifications();
    }
}
