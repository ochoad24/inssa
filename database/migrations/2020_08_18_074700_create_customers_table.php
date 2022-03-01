<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('firstName');
            $table->string('secondName')->nullable();
            $table->string('firstLastName');
            $table->string('secondLastName');
            $table->string('marriedName')->nullable();
            $table->string('dpi');
            $table->string('nit')->nullable();
            $table->date('birthDate');
            $table->integer('age');
            $table->string('gender');
            $table->integer('peopleDepend');
            $table->string('civilStatus');
            $table->string('nationality');
            $table->string('address');
            $table->string('suburb')->nullable();
            $table->string('zone')->nullable();

            $table->bigInteger('idTown')->unsigned();
            $table->foreign('idTown')->references('id')->on('towns');

            $table->string('telephone')->nullable();
            $table->string('home');
            $table->string('timeHome');
            $table->string('monthlyPayment');
            $table->string('mobile');
            $table->string('email')->nullable();
            $table->string('economicActivity');

            $table->string('referenceOneName');
            $table->string('referenceOneRelationship');
            $table->string('referenceOneAddress');
            $table->string('referenceOneTelephone');

            $table->string('referenceTwoName');
            $table->string('referenceTwoRelationship');
            $table->string('referenceTwoAddress');
            $table->string('referenceTwoTelephone');
            $table->string('img');
            $table->string('imgHouse');
            $table->boolean('status')->default(1);

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
        Schema::dropIfExists('customers');
    }
}
