<template>
  <div v-if="showItem('Ver lista de crédito')">
    <vx-card title="Listado de créditos">
      <template slot="actions" v-if="showItem('Ver todas las solicitudes')">
        <label for="">Ver todos los créditos</label>
        <vs-switch v-model="showAllClients" @change="getLoan" />
      </template>
      <div class="flex -mx-2">
        <div class="w-full px-2">
          <vx-input-group class="mb-base">
            <vs-input
              v-model="filterSearch"
              placeholder="Ingrese búsqueda"
              @input="getLoan"
            />
          </vx-input-group>
        </div>
      </div>
      <div id="data-list-list-view" class="data-list-container">
        <vs-table :data="laons">
          <template slot="thead">
            <vs-th sort-key="id">ID</vs-th>
            <vs-th sort-key="customer">Cliente</vs-th>
            <vs-th sort-key="amount">Monto</vs-th>
            <vs-th sort-key="balance">Saldo</vs-th>
            <vs-th sort-key="capital">Capital</vs-th>
            <vs-th sort-key="interest">Interes</vs-th>
            <vs-th sort-key="bankDefault">Mora</vs-th>
            <vs-th sort-key="status">Estado</vs-th>
            <vs-th sort-key="created_at">Fecha de creación</vs-th>
            <vs-th sort-key="user_created.name">Usuario creador</vs-th>
            <vs-th sort-key="user_updated.name">Usuario actualizó</vs-th>
            <vs-th sort-key="in_charge.name">Encargado</vs-th>
            <vs-th>Acciones</vs-th>
          </template>
          <template slot-scope="{ data }">
            <vs-tr :key="request.id" v-for="request in data">
              <vs-td>{{ request.id }}</vs-td>
              <vs-td>{{ request.customer }}</vs-td>
              <vs-td>{{ mymoney(request.amount) }}</vs-td>
              <vs-td>{{ mymoney(request.balance) }}</vs-td>
              <vs-td>{{ mymoney(request.capital) }}</vs-td>
              <vs-td>{{ mymoney(request.interest) }}</vs-td>
              <vs-td>{{ mymoney(request.bankDefault) }}</vs-td>
              <vs-td>
                <div class="btn-group">
                  <vs-chip
                    :color="'warning'"
                    class="product-order-status"
                    v-if="request.status === 2"
                    >Pendiente</vs-chip
                  >
                  <vs-chip
                    :color="'success'"
                    class="product-order-status"
                    v-if="request.status === 1"
                    >Pagado</vs-chip
                  >
                  <vs-chip
                    :color="'danger'"
                    class="product-order-status"
                    v-if="request.status === 0"
                    >Anulado</vs-chip
                  >
                </div>
              </vs-td>
              <vs-td>{{ convertDate(request.created_at) }}</vs-td>
              <vs-td>
                {{ request.user_created.name }}
              </vs-td>
              <vs-td>
                {{ request.user_updated.name }}
              </vs-td>
              <vs-td>
                {{ request.user_duty_manager.name }}
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <feather-icon
                  icon="XIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  @click="deleteLoan(request.id)"
                  v-if="showItem('Anular crédito') && request.status == 2"
                />
                <feather-icon
                  icon="ListIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  @click="shoyPayments(request.id)"
                  v-if="showItem('Ver lista de pagos')"
                />
                <feather-icon
                  icon="DownloadIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  @click="getIWillPay(request.id)"
                  v-if="showItem('Descargar pagare')"
                />
                <feather-icon
                  icon="FileTextIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  @click="getFactura(request.id)"
                  v-if="showItem('Descargar factura')"
                />
                <feather-icon
                  icon="PrinterIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  @click="printLoan(request.id)"
                  v-if="showItem('Imprimir recibos')"
                />
                <feather-icon
                  icon="CheckSquareIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  @click="printLoanControl(request.id)"
                  v-if="showItem('Descargar lista de pagos')"
                />
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
      <br />
      <vs-pagination
        :total="pagination.total"
        v-model="pagination.current"
        @change="getLoan"
      ></vs-pagination>
    </vx-card>
    <vs-popup
      title="Desactivar crédito"
      :active.sync="showPopupLoan"
      fullscreen
    >
      <form>
        <div class="con-exemple-prompt">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Administrador</label>
              <v-select
                :options="admins"
                name="name"
                v-validate="'required'"
                @search="onSearch"
                :filterable="false"
                label="name"
                v-model="admin"
              />
              <span class="text-danger">{{ errors.first('admin') }}</span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label"
                >Contraseña del administrador</label
              >
              <vs-input
                class="w-full"
                type="password"
                v-model="password"
                name="password"
                v-validate="'required'"
              />
              <span class="text-danger">{{ errors.first('password') }}</span>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <div class="btn-group">
                <vs-button @click.prevent="submitForm">Guardar</vs-button>
                <vs-button color="danger" @click="showPopupLoan = false"
                  >Cancelar</vs-button
                >
              </div>
            </div>
          </div>
        </div>
      </form>
    </vs-popup>
  </div>
</template>
<script>
import { Validator } from 'vee-validate';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import vSelect from 'vue-select';
import axios from 'axios';
import _ from 'lodash';
import { eight } from '../../utils/eight';
import { getPermit } from '../../utils/getPermit';

Vue.directive('VeeValidate', VeeValidate);
Vue.use(VeeValidate, {
  inject: true,
});
const dict = {
  custom: {
    admin: {
      required: 'El administrador es requerido',
    },
    password: {
      required: 'La contraseña es requerida',
    },
  },
};
Validator.localize('es', dict);
export default {
  components: {
    'v-select': vSelect,
  },
  data() {
    return {
      showAllClients: false,
      showPopupLoan: false,
      admins: [],
      laons: [],
      admin: null,
      password: '',
      filterSearch: '',
      pagination: {
        total: 1,
        current: 1,
      },
      idLoan: 0,
    };
  },
  methods: {
    printLoan(id) {
      this.$router.push({
        path: `/creditos/imprimir?loan=${id}`,
      });
    },
    printLoanControl(id) {
      this.$router.push({
        path: `/creditos/control?loan=${id}`,
      });
    },
    onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce((loading, search, vm) => {
      axios
        .get(`/api/searchAdmins?filter=${search}`)
        .then((response) => {
          vm.admins = response.data.data;
          loading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 350),
    deleteLoan(id) {
      let vm = this;
      vm.idLoan = id;
      this.$vs.dialog({
        acceptText: 'Si',
        cancelText: 'No',
        type: 'confirm',
        color: 'danger',
        title: `Aprobar`,
        text: '¿Desea anular el crédito?.',
        accept: vm.acceptDeleteLoan,
      });
    },
    acceptDeleteLoan() {
      this.resetForm();
      this.showPopupLoan = true;
    },
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    shoyPayments(id) {
      this.$router.push({ path: `/pagos?id=${id}` });
    },
    mymoney(value) {
      return eight.money(parseFloat(value));
    },
    myquantity(value) {
      return xelacode.quantity(value);
    },
    async getLoan() {
      let vm = this;
      if (vm.filterSearch != '' && vm.pagination.current != 1)
        vm.pagination.current = 1;
      await axios
        .get(
          `/api/loan?page=${vm.pagination.current}&search=${
            vm.filterSearch
          }&permit=${!vm.showAllClients}&user=${
            JSON.parse(localStorage.getItem('userInfo')).uid
          }`
        )
        .then((response) => {
          vm.laons = response.data.data;
          vm.pagination.total = response.data.last_page;
          vm.pagination.current = response.data.current_page;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    convertDate(date) {
      var newDate = date.split('-');
      if (newDate[2].includes(':')) {
        let day = newDate[2].split(' ');
        newDate[2] = day[1] + ' ' + day[0];
      }
      return newDate[2] + '/' + newDate[1] + '/' + newDate[0];
    },
    getIWillPay(id) {
      window.open(`/api/getDocument/${id}`, '_blank');
    },
    getFactura(id) {
      window.open(`/api/getFactura/${id}`, '_blank');
    },
    resetForm() {
      this.admin = null;
      this.password = '';
      this.$validator.reset();
    },
    submitForm() {
      let vm = this;
      this.$validator.validateAll().then((result) => {
        if (result) {
          vm.$vs.loading();
          axios
            .delete(
              `/api/loan/${vm.idLoan}?password=${vm.password}&idUser=${vm.admin.id}`
            )
            .then((response) => {
              vm.$vs.loading.close();
              vm.$vs.notify({
                title: 'Listo',
                color: 'success',
                position: 'top-right',
                text: `${response.data.message}`,
              });
              vm.getLoan();
              vm.showPopupLoan = false;
            })
            .catch((error) => {
              vm.$vs.loading.close();
              vm.$vs.notify({
                title: 'Error',
                color: 'danger',
                position: 'top-right',
                text: `${error.response.data.message}`,
              });
            });
        }
      });
    },
  },
  mounted() {
    this.$emit('input');
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
</style>
