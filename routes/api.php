<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// TESTING NOTIFICATIONS
Route::get('sendNotification', 'NotificationController@notify');
Route::get('getNotifications', 'TestingController@getNotifications');
Route::get('getLatePayments', 'TestingController@getLatePayments');
Route::get('getLikewisePayments', 'TestingController@getLikewisePayments');
Route::get('getFuturePayments', 'TestingController@getFuturePayments');


// getLikewisePayments

Route::post('login', 'AuthController@login');
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::resource('/customer', 'CustomerController');
Route::resource('/departament', 'DepartamentController');
Route::resource('/town', 'TownController');
Route::resource('/demand', 'DemandController');
Route::resource('/account', 'AccountController');
Route::resource('/cashregister', 'CashRegisterController');
Route::resource('/loan', 'LoanController');
Route::resource('/loanPayment', 'LoanPaymentController');
Route::resource('/transaction', 'TransactionController');
Route::resource('/user', 'UserController');
Route::resource('/rol', 'RolController');

Route::get('/searchCustomer', 'CustomerController@getCustomer');
Route::get('/searchUser', 'UserController@getUser');
Route::get('/searchAdmins', 'UserController@getAdmins');
Route::get('/searchRol', 'RolController@getRol');
Route::get('/getPermits', 'RolController@getPermits');
Route::get('/getPermit/{idRol}/{idPermiso}', 'RolController@getPermit');
Route::get('/haveCashRegister/{id}', 'CashRegisterController@haveCashRegister');

Route::get('/getLoan', 'LoanController@getLoan');
Route::get('/getAllLoans', 'LoanController@getAllLoans');
Route::get('/getDocument/{id}', 'LoanController@getDocument');
Route::get('/getFactura/{id}', 'LoanController@getFactura');
Route::get('/getControl/{id}', 'LoanController@getControl');

Route::get('/getCashRegister', 'CashRegisterController@selectCashRegister');
Route::get('/getLoanPayment/{id}', 'LoanController@getLoanPayment');

Route::post('/demand/accept/{id}', 'DemandController@accept');
Route::get('/demand/getGuarantee/{id}', 'DemandController@getGuarantee');
Route::post('/demand/deny/{id}', 'DemandController@deny');
Route::get('/demand/getDocument/{id}', 'DemandController@getDocument');

Route::put('/updatePermit/{idPermiso}', 'RolController@updatePermit');
//  SERACH ACCOUNTS;
// searchAccount
Route::get('/searchAccount', 'AccountController@searchAccount');
// get ALl accounts
Route::get('/getAccount', 'AccountController@getAccount');
// REPORTS ROUTES
Route::group(['prefix' => 'report'], function () {
    Route::get('/clients', 'ReportController@clients');
    // demands
    Route::get('/demands', 'ReportController@demands');
    // loans
    Route::get('/loans', 'ReportController@loans');
    // loansPayments
    Route::get('/loansPayments', 'ReportController@loansPayments');
    // accounts
    Route::get('/accounts', 'ReportController@accounts');
    // cashregister
    Route::get('/cashregister', 'ReportController@cashregister');
});
// NOTIFICATIONS CONTROLLER
Route::get('/getNotification/{user}', 'NotificationController@getNotification');
Route::post('/showNotification/{id}', 'NotificationController@showNotification');
Route::get('/getAllNotifications/{user}', 'NotificationController@getAllNotifications');
// REPORTS
Route::get('/chargesOne','StatusClientsController@chargesOne');
Route::get('/chargesTwo','StatusClientsController@chargesTwo');
Route::get('/chargesThree','StatusClientsController@chargesThree');


