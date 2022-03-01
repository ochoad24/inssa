<template>
  <div>
    <vx-card title="Información cliente">
      <vs-table stripe :data="demand">
        <template>
          <vs-tr>
            <vs-td :colspan="2">
              <h5 class="text-center">Datos del cliente</h5>
            </vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Primer nombre</vs-td>
            <vs-td>{{ customer.firstName }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Segundo nombre</vs-td>
            <vs-td>{{ customer.secondName }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Primer apellido</vs-td>
            <vs-td>{{ customer.firstLastName }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Segundo apellido</vs-td>
            <vs-td>{{ customer.secondLastName }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>DPI</vs-td>
            <vs-td>{{ customer.dpi }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>NIT</vs-td>
            <vs-td>{{ customer.nit }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Fotografía</vs-td>
            <vs-td><img :src="`/uploads/thumbnail/${customer.img}`"/></vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td :colspan="2">
              <h5 class="text-center">Datos del cliente</h5>
            </vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Monto a financiar</vs-td>
            <vs-td>{{ mymoney(demand.amountToFinance) }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Plazo solicitado(meses)</vs-td>
            <vs-td>{{ demand.terms }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Porcentaje</vs-td>
            <vs-td>{{ demand.percentage }}%</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Tipo de taza</vs-td>
            <vs-td>{{ demand.loanRate }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Tipo de cuota</vs-td>
            <vs-td>{{ demand.feeType }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Garantía</vs-td>
            <vs-td>{{ guarantee.name }}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <vs-divider />
      <div class="images">
        <vs-images>
          <vs-image
            v-for="image in images"
            :key="image.id"
            :src="`/uploads/images/${image.name}`"
          />
        </vs-images>
      </div>
    </vx-card>
  </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import VueMoment from 'vue-moment';
import { eight } from '../../utils/eight';
const moment = require('moment');
Vue.use(VueMoment, {
  moment,
});
export default {
  data() {
    return {
      demand: {},
      guarantee: {},
      customer: {},
      images: [],
      loading: true,
    };
  },
  mounted() {
    this.getRequest();
  },
  methods: {
    mymoney(value) {
      return eight.money(parseFloat(value));
    },
    getRequest() {
      let vm = this;
      vm.$vs.loading();
      axios
        .get(`/api/demand/${vm.$route.params.id}`)
        .then(response => {
          vm.$vs.loading.close();
          vm.demand = response.data.demand;
          vm.guarantee = response.data.guarantee;
          vm.customer = response.data.customer;
          vm.images = response.data.images;
          vm.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    convertDate(date) {
      return moment(date)
        .locale('es')
        .format('LL');
    },
  },
};
</script>
<style lang="stylus">
.images
  max-height 500px
  overflow auto
</style>
