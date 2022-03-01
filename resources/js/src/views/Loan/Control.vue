<template>
  <div v-if="showItem('Imprimir recibos')">
    <vx-card title="Listado de pagos">
      <vs-button @click="print" class="btnx" type="filled">Imprimir</vs-button>
      <div id="printMe">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row p-2 table-active">
                  <div class="col-md-4">
                    <img src="/images/crediash.jpg" width="20%" />
                  </div>
                  <div class="col-md-5 text-center">
                    <p class="font-weight-bold mb-1">
                      Multiservicios Chavez Romanos
                    </p>
                    <p class="text-muted mb-1">
                      CARLOS ENRIQUE CHÁVEZ AVENDAÑO
                    </p>
                    <p class="text-muted mb-1">
                      8 AVENIDA ZONA 2 13 CALLE SOLOLA,SOLOLA
                    </p>
                  </div>
                  <div class="col-md-3 text-right">
                    <p class="font-weight-bold mb-1">
                      Crédito No.{{ loan.id }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 text-left">
                    <p>NOMBRE: {{ customer }}</p>
                  </div>
                  <div class="col-md-4 text-left">
                    <p>TOTAL A PAGAR: {{ mymoney(loan.amount) }}</p>
                  </div>
                  <div class="col-md-4 text-left">
                    <p>FORMA DE PAGO: {{ loan.feeType }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 text-left">
                    <p>TIPO DE CUOTA: {{ loan.loanRate }}</p>
                  </div>
                  <div class="col-md-4 text-left">
                    <p>FECHA DE DESEMBOLSO: {{ convertDate(loan.date) }}</p>
                  </div>
                  <div class="col-md-4 text-left">
                    <p>CANTIDAD DE PAGOS: {{ loan.totalPayment }}</p>
                  </div>
                </div>
                <div class="row">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha de pago</th>
                        <th scope="col">Cantidad a pagar</th>
                        <th scope="col">Cantidad pagada</th>
                        <th scope="col">Firma de cobrador</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(payment, index) in payments"
                        :key="payment.id"
                      >
                        <th scope="row">{{ index + 1 }}</th>
                        <td class="text-right">
                          {{ convertDate(payment.expectedPaymentDate) }}
                        </td>
                        <td class="text-right">
                          {{ mymoney(payment.expectedAmount) }}
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <h6>TELÉFONO: 4005-0828</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </vx-card>
  </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import { eight } from '../../utils/eight';
import VueHtmlToPaper from 'vue-html-to-paper';
import VueMoment from 'vue-moment';
const moment = require('moment');
import { getPermit } from '../../utils/getPermit';

Vue.use(VueMoment, {
  moment,
});
const options = {
  name: '_blank',
  specs: ['fullscreen=yes', 'titlebar=no', 'scrollbars=no'],
  styles: [
    '/css/bootstrap.min.css',
    '/js/bootstrap.min.js',
    '/js/jquery.min.js',
    '/css/voucher.css',
  ],
};

Vue.use(VueHtmlToPaper, options);
export default {
  data() {
    return {
      customer: '',
      loan: {},
      payments: [],
    };
  },
  methods: {
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    parseDecimal(value) {
      return parseFloat(this.parseDecimalFixed(value));
    },
    parseDecimalFixed(value) {
      return parseFloat(value).toFixed(2);
    },
    convertDate(date) {
      return moment(date).locale('es').format('LL');
    },
    mymoney(value) {
      return eight.money(parseFloat(value));
    },
    async getLoanPayment() {
      let vm = this;
      vm.$vs.loading();
      axios
        .get(`/api/getControl/${vm.$route.query.loan}`)
        .then((response) => {
          vm.$vs.loading.close();
          vm.loan = response.data.loan;
          vm.customer = response.data.customer;
          vm.payments = response.data.payments;
        })
        .catch((error) => {
          console.log(error);
          vm.$vs.loading.close();
        });
    },
    print() {
      this.$htmlToPaper('printMe');
    },
  },
  mounted() {
    this.getLoanPayment();
  },
};
</script>
