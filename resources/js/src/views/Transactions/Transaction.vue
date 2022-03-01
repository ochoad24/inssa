<template>
  <div v-if="showItem('Ver lista de transacciones')">
    <vx-card title="Listado de transacciones">
      <div class="flex -mx-2">
        <div class="w-full px-2">
          <div class="btn-group">
            <vs-button
              v-if="showItem('Movimiento entre cuentas')"
              @click="one"
              class="btnx"
              type="filled"
              >Movimiento entre cuentas</vs-button
            >
            <vs-button
              v-if="showItem('Ingreso/Salida de cuentas')"
              @click="two"
              class="btnx"
              type="filled"
              >Ingreso/Salida de cuenta</vs-button
            >
          </div>
        </div>
      </div>
      <br />
      <div id="data-list-list-view" class="data-list-container">
        <vs-table :data="transactions">
          <template slot="thead">
            <vs-th sort-key="id">ID</vs-th>
            <vs-th sort-key="name">Cuenta</vs-th>
            <vs-th sort-key="description">Descripción</vs-th>
            <vs-th sort-key="amount">Monto</vs-th>
            <vs-th sort-key="type">Tipo</vs-th>
            <vs-th sort-key="reference">Referencia</vs-th>
            <vs-th sort-key="user_created">Usuario</vs-th>
            <vs-th sort-key="status">Estado</vs-th>
            <vs-th sort-key="created_at">Fecha de creación</vs-th>
          </template>
          <template slot-scope="{ data }">
            <vs-tr :key="transaction.id" v-for="transaction in data">
              <vs-td>{{ transaction.id }}</vs-td>
              <vs-td>{{ transaction.name }}</vs-td>
              <vs-td>{{ transaction.description }}</vs-td>
              <vs-td>{{ mymoney(transaction.amount) }}</vs-td>
              <vs-td>
                <div class="btn-group">
                  <vs-chip
                    :color="'success'"
                    class="product-order-status"
                    v-if="transaction.type === 0"
                  >
                    Entrada</vs-chip
                  >
                  <vs-chip
                    :color="'danger'"
                    class="product-order-status"
                    v-if="transaction.type === 1"
                  >
                    Salida</vs-chip
                  >
                </div>
              </vs-td>
              <vs-td>{{ transaction.reference }}</vs-td>
              <vs-td>
                <vs-chip :color="'primary'" class="product-order-status">
                  {{ transaction.user_created }}</vs-chip
                >
              </vs-td>
              <vs-td>
                <div class="btn-group">
                  <vs-chip
                    :color="'danger'"
                    class="product-order-status"
                    v-if="transaction.status === 0"
                  >
                    Inactivo</vs-chip
                  >
                  <vs-chip
                    :color="'success'"
                    class="product-order-status"
                    v-if="transaction.status === 1 || transaction.status === 2"
                  >
                    Activo</vs-chip
                  >
                </div>
              </vs-td>

              <vs-td>
                {{ convertDate(transaction.created_at) }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
      <br />
      <vs-pagination
        :total="pagination.total"
        v-model="pagination.current"
        @change="getTransactions"
      ></vs-pagination>
    </vx-card>
  </div>
</template>
<script>
import axios from 'axios';
import { eight } from '../../utils/eight';
import _ from 'lodash';
import { getPermit } from '../../utils/getPermit';

export default {
  data() {
    return {
      transactions: [],
      pagination: {
        total: 1,
        current: 1,
      },
    };
  },
  methods: {
    one() {
      this.$router.push({ path: `/transacciones/entre-cuentas` });
    },
    two() {
      this.$router.push({ path: `/transacciones/ingreso-salida` });
    },

    mymoney(value) {
      return eight.money(parseFloat(value));
    },
    convertDate(date) {
      return new Date(date).toLocaleString('es-GT', {
        timeZone: 'America/Guatemala',
      });
    },
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    async getTransactions() {
      let vm = this;
      await axios
        .get(`/api/transaction?page=${vm.pagination.current}`)
        .then((response) => {
          vm.transactions = response.data.data;
          vm.pagination.total = response.data.last_page;
          vm.pagination.current = response.data.current_page;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
