<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGuaranteeDemandsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guarantee_demands', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('idGuarantee')->unsigned();
            $table->foreign('idGuarantee')->references('id')->on('guarantees');
            $table->bigInteger('idDemand')->unsigned();
            $table->foreign('idDemand')->references('id')->on('demands');
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
        Schema::dropIfExists('guarantee_demands');
    }
}
