<template>
  <div v-if="showItem('Ver reportes')">
    <vx-card title="Fechas">
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Fecha Inicio</label>
              <datepicker
                :language="language"
                v-model="beginDate"
                format="dd/MM/yyyy"
              ></datepicker>
            </div>
          </div>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Fecha Final</label>
              <datepicker
                :language="language"
                v-model="endDate"
                format="dd/MM/yyyy"
              ></datepicker>
            </div>
          </div>
        </div>
      </div>
    </vx-card>
    <br />
    <vx-card title="Cobros" v-if="showItem('Cobros')">
      <div class="vx-row">
        <div class="vx-col w-full mb-2">
          <div class="btn-group">
            <vs-button color="primary" type="border" @click="chargesOne"
              >Cobros atrasados</vs-button
            >
            <vs-button color="primary" type="border" @click="chargesTwo"
              >Cobros de hoy</vs-button
            >
            <vs-button color="primary" type="border" @click="chargesThree"
              >Cobros cercanos</vs-button
            >
          </div>
        </div>
      </div>
    </vx-card>
    <hr />
    <vx-card title="Todos los cobros" v-if="showItem('Todos los cobros')">
      <div class="vx-row">
        <div class="vx-col w-full mb-2">
          <div class="btn-group">
            <vs-button color="primary" type="border" @click="chargesOneAll"
              >Todos los cobros atrasados</vs-button
            >
            <vs-button color="primary" type="border" @click="chargesTwoAll"
              >Todos los cobros de hoy</vs-button
            >
            <vs-button color="primary" type="border" @click="chargesThreeAll"
              >Todos los cobros cercanos</vs-button
            >
          </div>
        </div>
      </div>
    </vx-card>
    <hr />
    <!-- BEGIN -->
    <vx-card title="Clientes" v-if="showItem('Clientes')">
      <vs-button color="primary" type="border" icon="get_app" @click="clients"
        >Descargar</vs-button
      >
    </vx-card>
    <hr />
    <vx-card title="Solicitudes" v-if="showItem('Solicitudes')">
      <vs-button color="primary" type="border" icon="get_app" @click="request"
        >Descargar</vs-button
      >
    </vx-card>
    <hr />
    <vx-card title="Créditos Activos" v-if="showItem('Créditos Activos')">
      <vs-button color="primary" type="border" icon="get_app" @click="loans(2)"
        >Descargar</vs-button
      >
    </vx-card>
    <hr />
    <vx-card title="Créditos Inactivos" v-if="showItem('Créditos Inactivos')">
      <vs-button color="primary" type="border" icon="get_app" @click="loans(1)"
        >Descargar</vs-button
      >
    </vx-card>
    <hr />
    <vx-card title="Créditos Anulados" v-if="showItem('Créditos Anulados')">
      <vs-button color="primary" type="border" icon="get_app" @click="loans(0)"
        >Descargar</vs-button
      >
    </vx-card>
    <hr />
    <vx-card title="Estado de créditos" v-if="showItem('Estado de créditos')">
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Cliente</label>
              <v-select
                :options="Loans"
                @search="onSearch"
                :filterable="false"
                v-model="idLoan"
                label="name"
                placeholder="Seleccione un cliente"
                @input="selectedCustomer"
              />
            </div>
          </div>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Reportes</label>
              <div class="btn-group">
                <vs-button
                  color="primary"
                  type="border"
                  :disabled="enableButtonsStausAccount"
                  @click="loansPayment(2)"
                  >Todos</vs-button
                >
                <vs-button
                  color="primary"
                  type="border"
                  :disabled="enableButtonsStausAccount"
                  @click="loansPayment(1)"
                  >Activos</vs-button
                >
                <vs-button
                  color="primary"
                  type="border"
                  :disabled="enableButtonsStausAccount"
                  @click="loansPayment(0)"
                  >Anulados</vs-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </vx-card>
    <hr />
    <vx-card title="Estado de cuentas" v-if="showItem('Estado de cuentas')">
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Cuentas</label>
              <v-select
                :options="Accounts"
                @search="onSearchAccounts"
                :filterable="false"
                v-model="idAccount"
                label="name"
                placeholder="Seleccione una cuenta"
                @input="selectedAccount"
              />
            </div>
          </div>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Reportes</label>
              <div class="btn-group">
                <vs-button
                  color="primary"
                  type="border"
                  :disabled="enableButtonsStausNotCashRegister"
                  @click="accounts(2)"
                  >Todos</vs-button
                >
                <vs-button
                  color="primary"
                  type="border"
                  :disabled="enableButtonsStausNotCashRegister"
                  @click="accounts(0)"
                  >Entradas</vs-button
                >
                <vs-button
                  color="primary"
                  type="border"
                  :disabled="enableButtonsStausNotCashRegister"
                  @click="accounts(1)"
                  >Salidas</vs-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </vx-card>
    <hr />
    <vx-card title="Estado de cajas" v-if="showItem('Estado de cajas')">
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Cajas</label>
              <v-select
                :options="CashRegister"
                @search="onSearchCashRegister"
                :filterable="false"
                v-model="idCashRegister"
                label="name"
                placeholder="Seleccione una caja"
                @input="selectedCashRegister"
              />
            </div>
          </div>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Reportes</label>
              <div class="btn-group">
                <vs-button
                  color="primary"
                  type="border"
                  :disabled="enableButtonsStausCashRegister"
                  @click="cashregister(2)"
                  >Todos</vs-button
                >
                <vs-button
                  color="primary"
                  type="border"
                  :disabled="enableButtonsStausCashRegister"
                  @click="cashregister(0)"
                  >Entradas</vs-button
                >
                <vs-button
                  color="primary"
                  type="border"
                  :disabled="enableButtonsStausCashRegister"
                  @click="cashregister(1)"
                  >Salidas</vs-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </vx-card>
  </div>
</template>
<script>
import vSelect from 'vue-select';
import Datepicker from 'vuejs-datepicker';
import es from 'vuejs-datepicker/src/locale/translations/es';
import Vue from 'vue';
import VueMoment from 'vue-moment';
const moment = require('moment');

Vue.use(VueMoment, {
  moment,
});
import _ from 'lodash';
import axios from 'axios';
import { getPermit } from '../../utils/getPermit';

export default {
  data() {
    return {
      // REPORTES GENERALES
      beginDate: new Date(),
      endDate: new Date(),
      // REPORTES LOANS
      language: es,
      idLoan: null,
      Loans: [],
      enableButtonsStausAccount: true,
      // REPORTES FOR ACCOUNTS
      Accounts: [],
      idAccount: null,
      enableButtonsStausNotCashRegister: true,
      // VARIABLES FOR CASHREGISTER
      CashRegister: [],
      idCashRegister: null,
      enableButtonsStausCashRegister: true,
    };
  },
  components: {
    'v-select': vSelect,
    Datepicker,
  },
  methods: {
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce((loading, search, vm) => {
      axios
        .get(`/api/getAllLoans?filter=${search}`)
        .then((response) => {
          vm.Loans = response.data.data;
          loading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 350),
    onSearchAccounts(search, loading) {
      loading(true);
      this.searchAccount(loading, search, this);
    },
    searchAccount: _.debounce((loading, search, vm) => {
      axios
        .get(`/api/searchAccount?filter=${search}&type=0`)
        .then((response) => {
          vm.Accounts = response.data.data;
          loading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 350),
    onSearchCashRegister(search, loading) {
      loading(true);
      this.searchCashRegister(loading, search, this);
    },
    searchCashRegister: _.debounce((loading, search, vm) => {
      axios
        .get(`/api/searchAccount?filter=${search}&type=1`)
        .then((response) => {
          vm.CashRegister = response.data.data;
          loading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 350),
    selectedCustomer() {
      if (this.idLoan === null) this.enableButtonsStausAccount = true;
      else this.enableButtonsStausAccount = false;
    },
    selectedAccount() {
      if (this.idAccount === null)
        this.enableButtonsStausNotCashRegister = true;
      else this.enableButtonsStausNotCashRegister = false;
    },
    selectedCashRegister() {
      if (this.idCashRegister === null)
        this.enableButtonsStausCashRegister = true;
      else this.enableButtonsStausCashRegister = false;
    },
    clients() {
      window.open(
        `/api/report/clients?beginDate=${moment(this.beginDate).format(
          'YYYY-MM-DD'
        )}&endDate=${moment(this.endDate).format('YYYY-MM-DD')}`,
        '_blank'
      );
    },
    request() {
      window.open(
        `/api/report/demands?beginDate=${moment(this.beginDate).format(
          'YYYY-MM-DD'
        )}&endDate=${moment(this.endDate).format('YYYY-MM-DD')}`,
        '_blank'
      );
    },
    loans(status) {
      window.open(
        `/api/report/loans?beginDate=${moment(this.beginDate).format(
          'YYYY-MM-DD'
        )}&endDate=${moment(this.endDate).format(
          'YYYY-MM-DD'
        )}&status=${status}`,
        '_blank'
      );
    },
    loansPayment(status) {
      window.open(
        `/api/report/loansPayments?loan=${this.idLoan.id}&status=${status}`,
        '_blank'
      );
    },
    accounts(status) {
      window.open(
        `/api/report/accounts?account=${this.idAccount.id}&status=${status}`,
        '_blank'
      );
    },
    cashregister(status) {
      window.open(
        `/api/report/cashregister?account=${this.idCashRegister.id}&status=${status}`,
        '_blank'
      );
    },
    chargesOne() {
      window.open(
        `/api/chargesOne?user=${
          JSON.parse(localStorage.getItem('userInfo')).uid
        }&getAll=false`,
        '_blank'
      );
    },
    chargesTwo() {
      window.open(
        `/api/chargesTwo?user=${
          JSON.parse(localStorage.getItem('userInfo')).uid
        }&getAll=false`,
        '_blank'
      );
    },
    chargesThree() {
      window.open(
        `/api/chargesThree?user=${
          JSON.parse(localStorage.getItem('userInfo')).uid
        }&getAll=false`,
        '_blank'
      );
    },
    chargesOneAll() {
      window.open(
        `/api/chargesOne?user=${
          JSON.parse(localStorage.getItem('userInfo')).uid
        }&getAll=true`,
        '_blank'
      );
    },
    chargesTwoAll() {
      window.open(
        `/api/chargesTwo?user=${
          JSON.parse(localStorage.getItem('userInfo')).uid
        }&getAll=true`,
        '_blank'
      );
    },
    chargesThreeAll() {
      window.open(
        `/api/chargesThree?user=${
          JSON.parse(localStorage.getItem('userInfo')).uid
        }&getAll=true`,
        '_blank'
      );
    },
  },
};
</script>
