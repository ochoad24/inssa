<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PdfReport;
use App\Customer;
use App\Demand;
use App\Loan;
use App\LoanPayment;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Traits\LoanTrait;
use App\Account;
use App\Transaction;

class ReportController extends Controller
{
    use LoanTrait;

    public function clients(Request $request)
    {
        $beginDate = $request->beginDate;
        $endDate = $request->endDate;
        $title = "Reporte de clientes";
        $meta = [
            'Registros del ' => Carbon::parse($beginDate)->format('d/m/Y') . ' al ' . Carbon::parse($endDate)->format('d/m/Y'),
        ];
        $queryBuilder = Customer::select(DB::raw('CONCAT(firstName," ",COALESCE(secondName,"")," ",firstLastName," ",secondLastName) as name'), 'created_at', 'status') // Do some querying..
            ->whereDate('created_at', '>=', $beginDate)
            ->whereDate('created_at', '<=', $endDate)
            ->orderBy('id', 'DESC');
        $columns = [
            'Nombre' => 'name',
            'Fecha creación' => 'created_at',
            'Estado' => 'status'
        ];
        return PdfReport::of($title, $meta, $queryBuilder, $columns)
            ->editColumn('Fecha creación', [
                'displayAs' => function ($result) {
                    return Carbon::parse($result->created_at)->format('d/m/Y');
                },
                'class' => 'left'
            ])
            ->editColumn('Estado', [
                'displayAs' => function ($result) {
                    return ($result->status == 1) ? 'Activo' : 'Desactivado';
                },
                'class' => 'left'
            ])
            // ->limit(20)
            ->download('REPORTE_CLIENTES_' . Carbon::now()->format('d_m_Y_h:mm'));
    }
    public function demands(Request $request)
    {
        $beginDate = $request->beginDate;
        $endDate = $request->endDate;
        $title = "Reporte de solicitudes";
        $meta = [
            'Registros del ' => Carbon::parse($beginDate)->format('d/m/Y') . ' al ' . Carbon::parse($endDate)->format('d/m/Y'),
        ];
        $queryBuilder = Demand::join('customers', 'customers.id', '=', 'demands.idcustomer')
            ->select(
                DB::raw('CONCAT(firstName," ",COALESCE(secondName,"")," ",firstLastName," ",secondLastName) as name'),
                'demands.created_at',
                'demands.status',
                'demands.amountToFinance',
                'demands.terms',
                'demands.percentage'
            )
            ->whereDate('demands.created_at', '>=', $beginDate)
            ->whereDate('demands.created_at', '<=', $endDate)
            ->orderBy('demands.id', 'DESC');

        $columns = [
            'Cliente' => 'name',
            'Saldo a financiar' => 'amountToFinance',
            'Plazo solicitado(meses)' => 'terms',
            'Fecha creación' => 'created_at',
            'Estado' => 'status'
        ];
        return PdfReport::of($title, $meta, $queryBuilder, $columns)
            ->editColumn('Saldo a financiar', [
                'displayAs' => function ($result) {
                    return $this->money($result->amountToFinance);
                },
                'class' => 'right'
            ])
            ->editColumn('Plazo solicitado(meses)', [
                'displayAs' => function ($result) {
                    return $result->terms;
                },
                'class' => 'right'
            ])
            ->editColumn('Fecha creación', [
                'displayAs' => function ($result) {
                    return Carbon::parse($result->created_at)->format('d/m/Y');
                },
                'class' => 'right'
            ])
            ->editColumn('Estado', [
                'displayAs' => function ($result) {
                    return ($result->status == 1) ? 'Aprobado' : ($result->status == 2 ? 'Pendiente' : 'Rechazado');
                },
                'class' => 'right'
            ])
            ->groupBy('Estado')
            ->showTotal([
                'Saldo a financiar' => 'Q',
            ])
            // ->limit(20)
            ->download('REPORTE_SOLICITUDES_' . Carbon::now()->format('d_m_Y_h:mm'));
    }
    public function loans(Request $request)
    {
        $beginDate = $request->beginDate;
        $endDate = $request->endDate;
        $title = ($request->status == 2) ? "Reporte de créditos activos" : ($request->status == 1 ? "Reporte de créditos inactivos" : "Reporte de créditos anulados");
        $meta = [
            'Registros del ' => Carbon::parse($beginDate)->format('d/m/Y') . ' al ' . Carbon::parse($endDate)->format('d/m/Y'),
        ];
        $queryBuilder = Loan::join('customers', 'customers.id', '=', 'loans.idcustomer')
            ->join('demands', 'demands.id', 'loans.idDemand')
            ->select(
                DB::raw('CONCAT(firstName," ",COALESCE(secondName,"")," ",firstLastName," ",secondLastName) as name'),
                'loans.capital',
                'loans.interest',
                'loans.amountToFinance',
                'loans.balance',
                'loans.status',
                'demands.terms',
                'demands.percentage',
                'demands.loanRate',
                'demands.feeType'
            )
            ->whereDate('loans.created_at', '>=', $beginDate)
            ->whereDate('loans.created_at', '<=', $endDate)
            ->where('loans.status', $request->status)
            ->orderBy('loans.id', 'DESC');

        $columns = [
            'Cliente' => 'name',
            'Monto a financiar' => 'amountToFinance',
            'Saldo' => 'balance',
            'Capital' => 'capital',
            'Interes' => 'interest',
            'Plazo solicitado(meses)' => 'terms',
            'Porcentaje' => 'percentage',
            'Tipo de taza' => 'loanRate',
            'Tipo de cuota' => 'feeType',
            'Estado' => 'status'
        ];
        return PdfReport::of($title, $meta, $queryBuilder, $columns)
            ->editColumn('Monto a financiar', [
                'displayAs' => function ($result) {
                    return $this->money($result->amountToFinance);
                },
                'class' => 'right'
            ])
            ->editColumn('Saldo', [
                'displayAs' => function ($result) {
                    return $this->money($result->balance);
                },
                'class' => 'right'
            ])
            ->editColumn('Capital', [
                'displayAs' => function ($result) {
                    return $this->money($result->capital);
                },
                'class' => 'right'
            ])
            ->editColumn('Interes', [
                'displayAs' => function ($result) {
                    return $this->money($result->interest);
                },
                'class' => 'right'
            ])
            ->editColumn('Mora', [
                'displayAs' => function ($result) {
                    return $this->money($result->bankDefault);
                },
                'class' => 'right'
            ])
            ->editColumn('Plazo solicitado(meses)', [
                'displayAs' => function ($result) {
                    return $result->terms;
                },
                'class' => 'right'
            ])
            ->editColumn('Porcentaje', [
                'displayAs' => function ($result) {
                    return $result->percentage . " %";
                },
                'class' => 'right'
            ])
            ->editColumn('Tipo de taza', [
                'displayAs' => function ($result) {
                    return $result->loanRate;
                },
                'class' => 'right'
            ])
            ->editColumn('Tipo de cuota', [
                'displayAs' => function ($result) {
                    return $result->feeType;
                },
                'class' => 'right'
            ])
            ->editColumn('Estado', [
                'displayAs' => function ($result) {
                    return ($result->status == 2) ? 'Pendiente' : ($result->status == 1 ? 'Pagado' : 'Anulado');
                },
                'class' => 'right'
            ])
            ->showTotal([
                'Monto a financiar' => 'Q',
                'Saldo' => 'Q',
                'Capital' => 'Q',
                'Interes' => 'Q',
                'Mora' => 'Q'
            ])
            // ->limit(20)
            ->setOrientation('landscape')
            ->download(strtoupper($title) . "_" . Carbon::now()->format('d_m_Y_h:mm'));
    }
    public function loansPayments(Request $request)
    {
        $loan = Loan::find($request->loan);
        $title = "Reporte estado de cuenta del crédito: " . $loan->id;
        $meta = [
            'Cliente' => $this->getNameCustomer(Customer::find($loan->idCustomer)),
            'Monto' => $this->money($loan->amount),
            'Saldo' => $this->money($loan->balance),
            'Capital' => $this->money($loan->capital),
            'Interes' => $this->money($loan->interest),
            'Mora' => $this->money($loan->bankDefault),
            'Estado' => ($loan->status == 2) ? 'Pendiente' : ($loan->status == 1 ? 'Pagado' : 'Anulado'),
        ];
        $queryBuilder = LoanPayment::select('id', 'expectedAmount', 'expectedPaymentDate', 'amount', 'capital', 'interest', 'bankDefault', 'paymentDate', 'status')
            ->where('idLoan', $loan->id)
            ->orderBy('id', 'ASC');
        $columns = [
            'Monto sugerido' => 'expectedAmount',
            'Fecha sugerida' => 'expectedPaymentDate',
            'Monto' => 'amount',
            'Capital' => 'capital',
            'Interés' => 'interest',
            'Mora' => 'bankDefault',
            'Fecha donde pagó' => 'paymentDate',
            'Estado' => 'status',
        ];
        return PdfReport::of($title, $meta, $queryBuilder, $columns)
            ->editColumn('Monto sugerido', [
                'displayAs' => function ($result) {
                    return $this->money($result->expectedAmount);
                },
                'class' => 'right'
            ])
            ->editColumn('Fecha sugerida', [
                'displayAs' => function ($result) {
                    return Carbon::parse($result->expectedPaymentDate)->format('d/m/Y');
                },
                'class' => 'right'
            ])
            ->editColumn('Monto', [
                'displayAs' => function ($result) {
                    return $this->money($result->capital);
                },
                'class' => 'right'
            ])
            ->editColumn('Capital', [
                'displayAs' => function ($result) {
                    return $this->money($result->capital);
                },
                'class' => 'right'
            ])
            ->editColumn('Interés', [
                'displayAs' => function ($result) {
                    return $this->money($result->interest);
                },
                'class' => 'right'
            ])
            ->editColumn('Mora', [
                'displayAs' => function ($result) {
                    return $this->money($result->mora);
                },
                'class' => 'right'
            ])
            ->editColumn('Fecha donde pagó', [
                'displayAs' => function ($result) {
                    return is_null($result->paymentDate) ? 'No disponible' : Carbon::parse($result->paymentDate)->format('d/m/Y');
                },
                'class' => 'right'
            ])
            ->editColumn('Estado', [
                'displayAs' => function ($result) {
                    return ($result->status == 2) ? 'No cancelado' : ($result->status == 1 ? 'Activo' : 'Anulado');
                },
                'class' => 'right'
            ])
            ->showTotal([
                'Monto sugerido' => 'Q',
                'Monto' => 'Q',
                'Capital' => 'Q',
                'Interés' => 'Q',
                'Mora' => 'Q'
            ])
            // ->limit(20)
            ->download('ESTADO_DE_CUENTA_CREDITO_NO' . $loan->id . Carbon::now()->format('d_m_Y_h:mm:ss'));
    }
    public function accounts(Request $request)
    {
        $account = Account::find($request->account);
        $status = $request->status;
        $title = "Reporte de la cuenta: " . $account->name;
        $meta = [
            'Banco' => $account->bank,
            'Monto' => $this->money($account->amount),
        ];
        $queryBuilder = Transaction::select('id', 'description', 'amount', 'type', 'created_at')
            ->where(function ($query) use ($status) {
                if ($status != 2)
                    $query->where('type', $status);
            })
            ->where('idaccount', $account->id)
            ->orderBy('id', 'DESC');

        $columns = [
            'Descripción' => 'description',
            'Monto' => 'amount',
            'Estado' => 'type',
            'Fecha de creación' => 'created_at',
        ];
        return PdfReport::of($title, $meta, $queryBuilder, $columns)
            ->editColumn('Monto', [
                'displayAs' => function ($result) {
                    return $this->money($result->amount);
                },
                'class' => 'right'
            ])
            ->editColumn('Estado', [
                'displayAs' => function ($result) {
                    return ($result->type == 1) ? 'Salida' : 'Entrada';
                },
                'class' => 'right'
            ])
            ->editColumn('Fecha de creación', [
                'displayAs' => function ($result) {
                    return Carbon::parse($result->paymentDate)->format('d/m/Y');
                },
                'class' => 'right'
            ])
            ->showTotal([
                'Monto' => 'Q',
            ])
            // ->limit(20)
            ->download('ESTADO_DE_CUENTA_' . $account->name . "_" . Carbon::now()->format('d_m_Y_h:mm:ss'));
    }
    public function cashregister(Request $request)
    {
        $account = Account::find($request->account);
        $status = $request->status;
        $title = "Reporte de la caja: " . $account->name;
        $meta = [
            'Monto' => $this->money($account->amount),
        ];
        $queryBuilder = Transaction::select('id', 'description', 'amount', 'type', 'created_at')
            ->where(function ($query) use ($status) {
                if ($status != 2)
                    $query->where('type', $status);
            })
            ->where('idaccount', $account->id)
            ->orderBy('id', 'DESC');

        $columns = [
            'Descripción' => 'description',
            'Monto' => 'amount',
            'Estado' => 'status',
            'Fecha de creación' => 'created_at',
        ];
        return PdfReport::of($title, $meta, $queryBuilder, $columns)
            ->editColumn('Monto', [
                'displayAs' => function ($result) {
                    return $this->money($result->amount);
                },
                'class' => 'right'
            ])
            ->editColumn('Estado', [
                'displayAs' => function ($result) {
                    return ($result->type == 1) ? 'Salida' : 'Entrada';
                },
                'class' => 'right'
            ])
            ->editColumn('Fecha de creación', [
                'displayAs' => function ($result) {
                    return Carbon::parse($result->paymentDate)->format('d/m/Y');
                },
                'class' => 'right'
            ])
            ->showTotal([
                'Monto' => 'Q',
            ])
            // ->limit(20)
            ->download('ESTADO_DE_CAJA_' . $account->name . "_" . Carbon::now()->format('d_m_Y_h:mm:ss'));
    }
    private function getNameCustomer(Customer $customer)
    {
        if (empty($customer->secondName) && empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->firstLastName} {$customer->secondLastName}";
        } else if (!empty($customer->secondName) && empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->secondName} {$customer->firstLastName} {$customer->secondLastName}";
        } else if (empty($customer->secondName) && !empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->firstLastName} {$customer->secondLastName} de {$customer->marriedName}";
        } else if (!empty($customer->secondName) && !empty($customer->marriedName)) {
            return "{$customer->firstName} {$customer->secondName} {$customer->firstLastName} {$customer->secondLastName} de {$customer->marriedName}";
        }
    }
}
