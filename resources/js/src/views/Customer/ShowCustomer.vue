<template>
  <div v-if="showItem('Ver cliente')">
    <vx-card title="Información cliente" v-if="loading === false">
      <vs-table stripe :data="customer">
        <template>
          <vs-tr>
            <vs-td :colspan="2">
              <h5 class="text-center">Datos personales</h5>
            </vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Fotografía</vs-td>
            <vs-td><img :src="`/uploads/thumbnail/${customer.img}`"/></vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Casa del cliente</vs-td>
            <vs-td
              ><img :src="`/uploads/thumbnail/${customer.imgHouse}`"
            /></vs-td>
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
            <vs-td>Apellido de casada</vs-td>
            <vs-td>{{ customer.marriedName }}</vs-td>
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
            <vs-td>Fecha de nacimiento</vs-td>
            <vs-td>{{ convertDate(customer.birthDate) }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Edad</vs-td>
            <vs-td>{{ customer.age }} años</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Sexo</vs-td>
            <vs-td>{{ customer.gender }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>¿Cuántas personas dependen de usted?</vs-td>
            <vs-td>{{ customer.peopleDepend }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Estado civil</vs-td>
            <vs-td>{{ customer.civilStatus }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Nacionalidad</vs-td>
            <vs-td>{{ customer.nationality }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td :colspan="2">
              <h5 class="text-center">Datos básicos</h5>
            </vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Dirección</vs-td>
            <vs-td>{{ customer.address }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Colonia</vs-td>
            <vs-td>{{ customer.suburb }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Zona</vs-td>
            <vs-td>{{ customer.zone }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Departamento</vs-td>
            <vs-td>{{ departament.name }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Municipio</vs-td>
            <vs-td>{{ town.name }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Teléfono de residencia</vs-td>
            <vs-td>{{ customer.telephone }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Residencia</vs-td>
            <vs-td>{{ customer.home }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Tiempo de residir</vs-td>
            <vs-td>{{ customer.timeHome }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Ingreso mensual</vs-td>
            <vs-td>{{ customer.monthlyPayment }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td :colspan="2">
              <h5 class="text-center">Referencias</h5>
            </vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Referencia 1</vs-td>
            <vs-td
              >{{ customer.referenceOneName }} |
              {{ customer.referenceOneRelationship }} |
              {{ customer.referenceOneAddress }} |
              {{ customer.referenceOneTelephone }}</vs-td
            >
          </vs-tr>
          <vs-tr>
            <vs-td>Referencia 2</vs-td>
            <vs-td
              >{{ customer.referenceTwoName }} |
              {{ customer.referenceTwoRelationship }} |
              {{ customer.referenceTwoAddress }} |
              {{ customer.referenceTwoTelephone }}</vs-td
            >
          </vs-tr>
          <vs-tr>
            <vs-td :colspan="2">
              <h5 class="text-center">Datos adicionales</h5>
            </vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Celular</vs-td>
            <vs-td>{{ customer.mobile }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Email</vs-td>
            <vs-td>{{ customer.email }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>Actividad ecónomica a la que se dedica</vs-td>
            <vs-td>{{ customer.economicActivity }}</vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td :colspan="2">
              <h5 class="text-right">
                Encargado: {{ customer.user_duty_manager.name }}
              </h5>
            </vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td :colspan="2">
              <h5 class="text-right">
                Usuario creador: {{ customer.user_created.name }}
              </h5>
            </vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td :colspan="2">
              <h5 class="text-right">
                Usuario actualizó: {{ customer.user_updated.name }}
              </h5>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>
  </div>
</template>
<script>
import axios from 'axios';
import { getPermit } from '../../utils/getPermit';
import Vue from 'vue';
import VueMoment from 'vue-moment';
const moment = require('moment');

Vue.use(VueMoment, {
  moment,
});
export default {
  data() {
    return {
      customer: {},
      town: {},
      departament: {},
      loading: true,
    };
  },
  methods: {
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    getClient() {
      let vm = this;
      vm.$vs.loading();
      axios
        .get(`/api/customer/${vm.$route.query.id}`)
        .then(response => {
          vm.$vs.loading.close();
          vm.customer = response.data.customer;
          vm.town = response.data.town;
          vm.departament = response.data.departament;
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
  mounted() {
    this.getClient();
  },
};
</script>
