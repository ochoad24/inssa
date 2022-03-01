<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loans', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->decimal('amountToFinance', 10, 2);
            $table->decimal('amount', 10, 2);
            $table->decimal('balance', 10, 2);
            $table->decimal('capital', 10, 2);
            $table->decimal('interest', 10, 2);
            $table->decimal('bankDefault', 10, 2);
            $table->date('dateApprove');
            $table->bigInteger('idCustomer')->unsigned();
            $table->foreign('idCustomer')->references('id')->on('customers');
            $table->bigInteger('idDemand')->unsigned();
            $table->foreign('idDemand')->references('id')->on('demands');

            $table->bigInteger('dutyManager')->unsigned()->nullable();
            $table->foreign('dutyManager')->references('id')->on('users');

            $table->bigInteger('userCreated')->unsigned();
            $table->foreign('userCreated')->references('id')->on('users');

            $table->bigInteger('userUpdated')->unsigned();
            $table->foreign('userUpdated')->references('id')->on('users');

            $table->tinyInteger('status')->default(2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('loans');
    }
}
