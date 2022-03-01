<template>
  <div v-if="showItem('Hacer cobros')">
    <vx-card title="Cobrar" v-if="isHaveCashRegister === true">
      <form>
        <div class="vx-row">
          <div
            class="vx-col sm:w-full w-full mb-2"
            v-bind:style="messageStatus.color"
          >
            <h1>{{ messageStatus.text }}</h1>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Fecha</label>
                <datepicker
                  :language="language"
                  v-model="loanDate"
                  format="dd/MM/yyyy"
                  @closed="selectedCustomer"
                  :disabled="!showItem('Cambiar fecha')"
                ></datepicker>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Cliente</label>
                <vx-input-group class="mb-base">
                  <v-select
                    :options="loans"
                    @search="onSearch"
                    :filterable="false"
                    v-model="loan"
                    label="name"
                    placeholder="Seleccione un cliente"
                    @input="selectedCustomer"
                  />
                  <template slot="append">
                    <div class="append-text bg-primary">
                      <vs-button @click="active = true" icon="refresh">
                      </vs-button>
                    </div>
                  </template>
                </vx-input-group>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Monto a pagar</label>
                <masked-input
                  class="vs-inputx vs-input--input normal"
                  style="border: 1px solid rgba(0, 0, 0, 0.2);"
                  v-model="amountPayment"
                  :mask="mask_quetzal"
                  :guide="false"
                  :keep-char-positions="true"
                  :show-mask="true"
                  :disabled="!messageStatus.status"
                  @input="calculateChange"
                />
                <span class="text-danger" v-if="isValidAmountPaymet"
                  >El monto a pagar debe ser igual o mayor al total</span
                >
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <vs-button
                  type="filled"
                  @click.prevent="save()"
                  class="mt-5 block"
                  >Guardar
                </vs-button>
              </div>
            </div>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Capital pendiente</label>
                <h1>{{ mymoney(balance) }}</h1>
              </div>
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Pagos</label>
                <h1>{{ paymentsSelected }}</h1>
              </div>
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Total a pagar</label>
                <h1>
                  {{ mymoney(totalPayments) }}
                </h1>
              </div>
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Cambio</label>
                <h1>{{ mymoney(change) }}</h1>
              </div>
            </div>
          </div>
        </div>
      </form>
    </vx-card>
    <vx-card title="Error" v-else>
      <h1>
        No puedes realizar un cobro porque no tienes una caja asignada
      </h1>
    </vx-card>
    <vs-popup title="Pagos" :active.sync="active" fullscreen>
      <div id="data-list-list-view" class="data-list-container">
        <vs-table :data="payments">
          <template slot="thead">
            <vs-th sort-key="check"
              ><vs-checkbox v-model="allCheck" @input="selectedAll"
                >Todo</vs-checkbox
              ></vs-th
            >
            <vs-th sort-key="amount">Monto sugerido</vs-th>
            <vs-th sort-key="capital">Capital</vs-th>
            <vs-th sort-key="interest">Interés</vs-th>
            <vs-th sort-key="bankDefault">Mora</vs-th>
            <vs-th sort-key="total">Monto a cancelar</vs-th>
            <vs-th sort-key="dateText">Estado</vs-th>
          </template>
          <template slot-scope="{ data }">
            <vs-tr
              :key="payment.id"
              v-for="payment in data"
              :state="
                payment.status === 'IGUAL'
                  ? 'success'
                  : payment.status === 'MENOR'
                  ? 'danger'
                  : 'warning'
              "
            >
              <vs-td
                ><vs-checkbox
                  v-model="payment.check"
                  @input="findCheckBox"
                  :disabled="payment.disabled"
                  >¿Cobrar?</vs-checkbox
                ></vs-td
              >
              <vs-td>{{ mymoney(payment.amount) }}</vs-td>
              <vs-td>{{ mymoney(payment.capital) }}</vs-td>
              <vs-td>{{ mymoney(payment.interest) }}</vs-td>
              <vs-td>{{ mymoney(payment.bankDefault) }}</vs-td>
              <vs-td>{{ mymoney(payment.total) }}</vs-td>
              <vs-td>{{ payment.dateText }}</vs-td>
            </vs-tr>
            <vs-tr>
              <vs-td colspan="5" style="text-align:right"
                ><h4>Total:</h4></vs-td
              >
              <vs-td style="text-align:left"
                ><h4>{{ mymoney(totalPayments) }}</h4></vs-td
              >
              <vs-td></vs-td>
            </vs-tr>
          </template>
        </vs-table>
        <div class="vx-row">
          <div class="vx-col w-full mt-5">
            <vs-button type="filled" @click="active = false" class="mt-5 block"
              >Guardar
            </vs-button>
          </div>
        </div>
      </div>
    </vs-popup>
  </div>
</template>
<script>
import MaskedInput from 'vue-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import vSelect from 'vue-select';
import axios from 'axios';
import _ from 'lodash';
import { eight } from '../../utils/eight';
import Datepicker from 'vuejs-datepicker';
import es from 'vuejs-datepicker/src/locale/translations/es';
import { getPermit } from '../../utils/getPermit';
import Vue from 'vue';
import VueMoment from 'vue-moment';
const moment = require('moment');

Vue.use(VueMoment, {
  moment,
});
export default {
  components: {
    'v-select': vSelect,
    'masked-input': MaskedInput,
    Datepicker,
  },
  computed: {
    paymentsSelected() {
      let selecteds = this.payments.filter(x => x.check === true).length;
      if (selecteds > 0) {
        this.messageStatus = {
          text: 'Listo, puede cobrar',
          color: 'background-color:#1AEC76;',
          status: true,
        };
      } else {
        if (this.payments.length > 0) {
          this.messageStatus = {
            text: 'Seleccione un pago para cobrar',
            color: 'background-color:red;',
            status: false,
          };
        } else {
          this.messageStatus = {
            text: 'Seleccione un cliente',
            color: 'background-color:red;',
            status: false,
          };
        }
      }
      return `${selecteds} seleccionados`;
    },
  },
  data() {
    return {
      allCheck: false,
      active: false,
      payments: [],
      loanDate: new Date(),
      language: es,
      balance: 0,
      amountPayment: '',
      loan: null,
      loans: [],
      change: 0,
      amount: '',
      mask_quetzal: createNumberMask({
        prefix: 'Q ',
        suffix: '',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: ',',
        allowDecimal: true,
        decimalSymbol: '.',
        decimalLimit: 2, // how many digits allowed after the decimal
        integerLimit: 10, // limit length of integer numbers
        allowNegative: false,
        allowLeadingZeroes: false,
      }),
      isValidAmountPaymet: false,
      isHaveCashRegister: false,
      idCashRegister: 0,
      messageStatus: {
        text: 'Seleccione un cliente',
        color: 'background-color:red;',
        status: false,
      },
      // NEW VARIABLES
      totalPayments: 0,
      // END NEW VARIABLES
    };
  },
  methods: {
    // SELECTS FUNCTIONS
    selectedAll() {
      this.payments.forEach(payment => {
        if (this.allCheck === true) {
          payment.disabled = true;
        } else {
          payment.disabled = false;
        }
        payment.check = this.allCheck;
      });
      this.calculateTotalPayment();
      if (this.allCheck === false) {
        this.findCheckBox();
      }
    },
    findCheckBox() {
      let index = -1;
      for (let i = 0; i < this.payments.length; i++) {
        if (this.payments[i].check === false) {
          this.payments[i].disabled = false;
          index = i;
          break;
        }
      }
      if (index !== -1) {
        for (let i = index + 1; i < this.payments.length; i++) {
          this.payments[i].check = false;
          this.payments[i].disabled = true;
        }
      }
      this.calculateTotalPayment();
    },
    calculateTotalPayment() {
      this.totalPayments = 0;
      this.payments.forEach(payment => {
        if (payment.check === true) {
          this.totalPayments += this.parseDecimal(payment.total);
        }
      });
    },
    calculateChange() {
      if (
        this.amountPayment === '' ||
        this.amountPayment === 'Q 0' ||
        this.amountPayment === 'Q' ||
        this.amountPayment === 'Q 0.0' ||
        this.amountPayment === 'Q 0.00' ||
        this.amountPayment === null
      ) {
        this.change = 0;
        this.isValidAmountPaymet = true;
        return;
      }
      this.isValidAmountPaymet = false;
      let change = this.parseDecimal(
        this.parseDecimal(this.converMaskToNumber(this.amountPayment)) -
          this.parseDecimal(this.totalPayments)
      );
      if (change < 0) {
        this.isValidAmountPaymet = true;
        this.change = 0;
      } else {
        this.change = change;
      }
    },
    // SELECT FUNCTIONS
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce((loading, search, vm) => {
      axios
        .get(`/api/getLoan?filter=${search}`)
        .then(response => {
          vm.loans = response.data.data;
          loading(false);
        })
        .catch(error => {
          console.log(error);
        });
    }, 350),
    mymoney(value) {
      return eight.money(parseFloat(value));
    },
    converMaskToNumber(value) {
      var myNumber = '';
      for (var i = 0; i < value.length; i += 1) {
        if (
          value.charAt(i) === 'Q' ||
          value.charAt(i) === ',' ||
          value.charAt(i) === ' '
        ) {
          continue;
        } else {
          myNumber += value.charAt(i);
        }
      }
      return parseFloat(myNumber).toFixed(2);
    },
    parseDecimal(value) {
      return parseFloat(this.parseDecimalFixed(value));
    },
    getPayment(id, date) {
      let vm = this;
      vm.$vs.loading();
      axios
        .get(
          `/api/getLoanPayment/${id}?date_payment=${moment(date).format(
            'YYYY-MM-DD'
          )}`
        )
        .then(response => {
          vm.payments = response.data.payments;
          vm.balance = response.data.balance;
          vm.active = true;
          vm.findCheckBox();
          vm.$vs.loading.close();
        })
        .catch(error => {
          vm.$vs.loading.close();
          vm.$vs.notify({
            title: 'Error',
            color: 'danger',
            position: 'top-right',
            text: `${error.response.data.message}`,
          });
        });
    },
    parseDecimalFixed(value) {
      return parseFloat(value).toFixed(2);
    },
    selectedCustomer() {
      this.messageStatus = {
        text: 'Seleccione un cliente',
        color: 'background-color:red;',
        status: false,
      };
      if (this.loan === null) {
        this.allCheck = false;
        this.active = false;
        this.payments = [];
        this.balance = 0;
        this.amountPayment = '';
        this.change = 0;
        this.isValidAmountPaymet = false;
        this.totalPayments = 0;
        return;
      }

      this.getPayment(this.loan.id, this.loanDate);
    },
    save() {
      if (this.isValidAmountPaymet === true) {
        this.$vs.notify({
          title: 'Error',
          color: 'danger',
          position: 'top-right',
          text: `El monto a pagar no es correcto`,
        });
      }
      if (this.messageStatus.status === false) {
        this.$vs.notify({
          title: 'Error',
          color: 'danger',
          position: 'top-right',
          text: `${this.messageStatus.text}`,
        });
      }
      this.$vs.loading();
      axios
        .post(`/api/loanPayment`, {
          payments: JSON.stringify(this.payments.filter(x => x.check === true)),
          loan: this.loan.id,
          loanDate: moment(this.loanDate).format('YYYY-MM-DD'),
          idaccount: this.idCashRegister,
          user: JSON.parse(localStorage.getItem('userInfo')).uid,
        })
        .then(response => {
          this.$vs.loading.close();
          this.$vs.notify({
            title: 'Listo',
            color: 'success',
            position: 'top-right',
            text: `${response.data.message}`,
          });
          this.$router.push({
            path: `/imprimir?payments=${response.data.payments.join(',')}`,
          });
        })
        .catch(error => {
          this.$vs.loading.close();
          this.$vs.notify({
            title: 'Error',
            color: 'danger',
            position: 'top-right',
            text: `${error.response.data.message}`,
          });
        });
    },
    async haveCashRegister() {
      let vm = this;
      await axios
        .get(
          `/api/haveCashRegister/${
            JSON.parse(localStorage.getItem('userInfo')).uid
          }`
        )
        .then(response => {
          (vm.isHaveCashRegister = response.data.isHaveCashRegister),
            (vm.idCashRegister = response.data.idCashRegister);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.haveCashRegister();
  },
};
</script>
<style lang="scss">
.vs-component {
  .vs-popup {
    .vs-popup--header {
      .vs-icon {
        display: none;
      }
    }
  }
}
.vs-con-table {
  .vs-con-tbody {
    .con-vs-checkbox {
      justify-content: left !important;
    }
  }
}
</style>
