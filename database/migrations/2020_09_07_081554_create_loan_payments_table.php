<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoanPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loan_payments', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->decimal('amount', 10, 2)->default(0);
            $table->decimal('expectedAmount', 10, 2);

            $table->decimal('capital', 10, 2)->default(0);
            $table->decimal('interest', 10, 2)->default(0);
            $table->decimal('bankDefault', 10, 2)->default(0);

            $table->date('paymentDate')->nullable();
            $table->date('expectedPaymentDate');
            $table->bigInteger('idLoan')->unsigned();
            $table->foreign('idLoan')->references('id')->on('loans');

            $table->tinyInteger('status')->default(2);

            $table->bigInteger('dutyManager')->unsigned()->nullable();
            $table->foreign('dutyManager')->references('id')->on('users');

            $table->bigInteger('userCreated')->unsigned();
            $table->foreign('userCreated')->references('id')->on('users');

            $table->bigInteger('userUpdated')->unsigned();
            $table->foreign('userUpdated')->references('id')->on('users');

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
        Schema::dropIfExists('loan_payments');
    }
}
