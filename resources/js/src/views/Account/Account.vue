<template>
  <div v-if="showItem('Ver lista de cuentas')">
    <vx-card title="Listado de cuentas">
      <div class="flex -mx-2">
        <div class="w-full px-2">
          <vx-input-group class="mb-base">
            <vs-input
              v-model="filterSearch"
              placeholder="Ingrese búsqueda"
              @input="getAccounts"
            />
            <template slot="append">
              <div class="append-text bg-primary">
                <vs-button
                  @click="newAccount"
                  class="btnx"
                  type="filled"
                  v-if="showItem('Crear cuenta')"
                  >Nuevo</vs-button
                >
              </div>
            </template>
          </vx-input-group>
        </div>
      </div>
      <div id="data-list-list-view" class="data-list-container">
        <vs-table :data="accounts">
          <template slot="thead">
            <vs-th sort-key="id">ID</vs-th>
            <vs-th sort-key="name">Nombre</vs-th>
            <vs-th sort-key="bank">Banco</vs-th>
            <vs-th sort-key="amount">Monto</vs-th>
            <vs-th sort-key="user_created.name">Usuario creador</vs-th>
            <vs-th sort-key="user_updated.name">Usuario actualizó</vs-th>
            <vs-th sort-key="status">Estado</vs-th>
            <vs-th sort-key="description">Descripción</vs-th>
            <vs-th sort-key="created_at">Fecha de creación</vs-th>
            <vs-th>Acciones</vs-th>
          </template>
          <template slot-scope="{ data }">
            <vs-tr :key="account.id" v-for="account in data">
              <vs-td>{{ account.id }}</vs-td>
              <vs-td>{{ account.name }}</vs-td>
              <vs-td>{{ account.bank }}</vs-td>
              <vs-td>{{ mymoney(account.amount) }}</vs-td>
              <vs-td>
                <vs-chip :color="'primary'" class="product-order-status">
                  {{ account.user_created.name }}</vs-chip
                >
              </vs-td>
              <vs-td>
                <vs-chip :color="'primary'" class="product-order-status">
                  {{ account.user_updated.name }}</vs-chip
                >
              </vs-td>
              <vs-td>
                <div class="btn-group">
                  <vs-chip
                    :color="'success'"
                    class="product-order-status"
                    v-if="account.status === 1"
                  >
                    Activo</vs-chip
                  >
                  <vs-chip
                    :color="'danger'"
                    class="product-order-status"
                    v-if="account.status === 0"
                  >
                    Inactivo</vs-chip
                  >
                </div>
              </vs-td>
              <vs-td>{{ account.description }}</vs-td>
              <vs-td>{{ convertDate(account.created_at) }}</vs-td>
              <vs-td class="whitespace-no-wrap">
                <!-- <feather-icon icon="EyeIcon" svgClasses="w-5 h-5 hover:text-success stroke-current"/> -->
                <feather-icon
                  icon="EditIcon"
                  svgClasses="w-5 h-5 hover:text-warning stroke-current"
                  v-if="showItem('Editar cuenta')"
                  @click="updateAccount(account.id)"
                />
                <feather-icon
                  icon="TrashIcon"
                  svgClasses="w-5 h-5 hover:text-danger stroke-current"
                  v-if="showItem('Eliminar cuenta')"
                  @click="dialogDeleteAccount(account.id)"
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
        @change="getAccounts"
      ></vs-pagination>
    </vx-card>
  </div>
</template>
<script>
import vSelect from 'vue-select';
import axios from 'axios';
import _ from 'lodash';
import { eight } from '../../utils/eight';
import { getPermit } from '../../utils/getPermit';
export default {
  components: {
    'v-select': vSelect,
  },
  data() {
    return {
      filterSearch: '',
      pagination: {
        total: 1,
        current: 1,
      },
      accounts: [],
    };
  },
  methods: {
    newAccount() {
      this.$router.push({ path: `/cuentas/nuevo` });
    },
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    mymoney(value) {
      return eight.money(parseFloat(value));
    },
    dialogDeleteAccount(id) {
      let vm = this;
      vm.idAccount = id;
      this.$vs.dialog({
        acceptText: 'Si',
        cancelText: 'No',
        type: 'confirm',
        color: 'danger',
        title: `Eliminar`,
        text: '¿Desea eliminar esta cuenta?.',
        accept: vm.deleteAccount,
      });
    },
    deleteAccount() {
      let vm = this;
      vm.$vs.loading();
      axios
        .delete(`/api/account/${vm.idAccount}`)
        .then(response => {
          vm.$vs.loading.close();
          vm.$vs.notify({
            title: 'Listo',
            color: 'success',
            position: 'top-right',
            text: `${response.data.message}`,
          });
          vm.getAccounts();
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
    convertDate(date) {
      return new Date(date).toLocaleString('es-GT', {
        timeZone: 'America/Guatemala',
      });
    },
    async getAccounts() {
      let vm = this;
      if (vm.filterSearch != '' && vm.pagination.current != 1)
        vm.pagination.current = 1;
      await axios
        .get(
          `/api/account?page=${vm.pagination.current}&search=${vm.filterSearch}`
        )
        .then(response => {
          vm.accounts = response.data.data;
          vm.pagination.total = response.data.last_page;
          vm.pagination.current = response.data.current_page;
        })
        .catch(error => {
          console.log(error);
        });
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
    updateAccount(id) {
      this.$router.push({
        path: `/cuentas/editar/${id}`,
      });
    },
  },
};
</script>
