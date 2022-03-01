<template>
  <div v-if="showItem('Descargar lista de pagos')">
    <vx-card title="Listado de pagos">
      <vs-button @click="print" class="btnx" type="filled">Imprimir</vs-button>
      <div id="printMe">
        <div class="row" v-for="i in 2" :key="i">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row p-2 table-active">
                  <div class="col-md-4">
                    <img src="/images/crediash.jpg" width="30%" />
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
                    <p class="font-weight-bold mb-1">Recibo de crédito</p>
                    <p class="font-weight-bold mb-1">No.{{ loan.id }}</p>
                    <p class="text-muted">
                      {{ convertDate(loan.paymentDate) }}
                    </p>
                  </div>
                </div>
                <div class="row pb-3 p-3">
                  <div class="col-md-9 text-left">
                    <p class="font-weight-bold">
                      EN LETRAS:
                      {{ loan.amountLetters }}
                    </p>
                    <p>CLIENTE: {{ customer }}</p>
                    <p>CONCEPTO: {{ loan.concept }}</p>
                  </div>
                  <div class="col-md-3 text-right">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p class="font-weight-bold">
                      MONTO:
                      {{ mymoney(loan.amount) }}
                    </p>
                  </div>
                </div>
                <div class="row pb-3 p-3">
                  <div class="col-md-6 text-center">
                    <p>
                      F.CLIENTE _______________________
                    </p>
                  </div>
                  <div class="col-md-6 text-center">
                    <p>
                      F.COBRADOR ________________________
                    </p>
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
import { getPermit } from '../../utils/getPermit';
import VueHtmlToPaper from 'vue-html-to-paper';
import VueMoment from 'vue-moment';
const moment = require('moment');

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
      return moment(date)
        .locale('es')
        .format('LL');
    },
    mymoney(value) {
      return eight.money(parseFloat(value));
    },
    async getLoanPayment() {
      let vm = this;
      vm.$vs.loading();
      axios
        .get(`/api/loan/${vm.$route.query.loan}`)
        .then(response => {
          vm.$vs.loading.close();
          vm.loan = response.data.loan;
          vm.customer = response.data.customer;
        })
        .catch(error => {
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
