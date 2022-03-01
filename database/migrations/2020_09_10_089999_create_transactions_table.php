<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('description');
            $table->decimal('amount', 10, 2);
            $table->tinyInteger('status')->default(2);
            $table->boolean('type');
            $table->bigInteger('idaccount')->unsigned();
            $table->foreign('idaccount')->references('id')->on('accounts');
            $table->bigInteger('idLoanPayment')->unsigned()->nullable();
            $table->foreign('idLoanPayment')->references('id')->on('loan_payments');
            $table->bigInteger('userCreated')->unsigned();
            $table->foreign('userCreated')->references('id')->on('users');
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
        Schema::dropIfExists('transactions');
    }
}
