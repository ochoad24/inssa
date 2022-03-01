<template>
  <div v-if="showItem('Ver lista de pagos')">
    <vx-card title="Listado de pagos">
      <div id="data-list-list-view" class="data-list-container">
        <vs-table :data="loanPayments">
          <template slot="thead">
            <vs-th sort-key="id">ID</vs-th>
            <vs-th sort-key="expectedAmount">Monto sugerido</vs-th>
            <vs-th sort-key="expectedPaymentDate">Fecha sugerida</vs-th>
            <vs-th sort-key="amount">Monto</vs-th>
            <vs-th sort-key="capital">Capital</vs-th>
            <vs-th sort-key="interest">Interés</vs-th>
            <vs-th sort-key="bankDefault">Mora</vs-th>
            <vs-th sort-key="paymentDate">Fecha donde pagó</vs-th>
            <vs-th sort-key="status">Estado</vs-th>
            <vs-th sort-key="created_at">Fecha de creación</vs-th>
            <vs-th sort-key="user_created.name">Usuario creador</vs-th>
            <vs-th sort-key="user_updated.name">Usuario actualizó</vs-th>
            <vs-th sort-key="in_charge.name">Encargado</vs-th>
            <vs-th>Acciones</vs-th>
          </template>
          <template slot-scope="{ data }">
            <vs-tr :key="loanPayment.id" v-for="loanPayment in data">
              <vs-td>{{ loanPayment.id }}</vs-td>
              <vs-td>{{ mymoney(loanPayment.expectedAmount) }}</vs-td>
              <vs-td>{{ convertDate(loanPayment.expectedPaymentDate) }}</vs-td>
              <vs-td>{{ mymoney(loanPayment.amount) }}</vs-td>
              <vs-td>{{ mymoney(loanPayment.capital) }}</vs-td>
              <vs-td>{{ mymoney(loanPayment.interest) }}</vs-td>
              <vs-td>{{ mymoney(loanPayment.bankDefault) }}</vs-td>
              <vs-td>{{
                loanPayment.paymentDate === 'No diponible'
                  ? 'No disponible'
                  : convertDate(loanPayment.paymentDate)
              }}</vs-td>
              <vs-td>
                <div class="btn-group">
                  <vs-chip
                    :color="'danger'"
                    class="product-order-status"
                    v-if="loanPayment.status === 0"
                  >
                    Anulado</vs-chip
                  >
                  <vs-chip
                    :color="'success'"
                    class="product-order-status"
                    v-if="loanPayment.status === 1"
                  >
                    Pagado</vs-chip
                  >
                  <vs-chip
                    :color="'warning'"
                    class="product-order-status"
                    v-if="loanPayment.status === 2"
                  >
                    No cancelado</vs-chip
                  >
                </div>
              </vs-td>
              <vs-td>{{ convertDate(loanPayment.created_at) }}</vs-td>
              <vs-td>
                {{ loanPayment.user_created.name }}
              </vs-td>
              <vs-td>
                {{ loanPayment.user_updated.name }}
              </vs-td>
              <vs-td>
                {{ loanPayment.user_duty_manager.name }}
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <!-- showItem('Anular crédito') &&  -->
                <feather-icon
                  icon="XIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  @click="cancelPayment(loanPayment.id)"
                  v-if="showItem('Anular Solicitudes') && loanPayment.status === 1 && loanPayment.id === max"
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
        @change="getListLoans"
      ></vs-pagination>
    </vx-card>
  </div>
</template>
<script>
import axios from 'axios';
import { eight } from '../../utils/eight';
import { getPermit } from '../../utils/getPermit';

export default {
  data() {
    return {
      loanPaymentId: 0,
      loanPayments: [],
      pagination: {
        total: 1,
        current: 1,
      },
      max: 0,
    };
  },
  methods: {
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    // ANULAR PAGO
    cancelPayment(id) {
      let vm = this;
      vm.loanPaymentId = id;
      this.$vs.dialog({
        acceptText: 'Si',
        cancelText: 'No',
        type: 'confirm',
        color: 'success',
        title: `Aprobar`,
        text: '¿Desea anular este pago?.',
        accept: vm.acceptCancelPayment,
      });
    },
    acceptCancelPayment() {
      let vm = this;
      vm.$vs.loading();
      axios
        .delete(`/api/loanPayment/${vm.loanPaymentId}`, {
          data: {
            user: JSON.parse(localStorage.getItem('userInfo')).uid,
          },
        })
        .then((response) => {
          vm.$vs.loading.close();
          vm.$vs.notify({
            title: 'Listo',
            color: 'success',
            position: 'top-right',
            text: `${response.data.message}`,
          });
          vm.getListLoans();
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
    },
    print(id) {
      this.$router.push({ path: `/imprimir?id=${id}` });
    },
    convertDate(date) {
      var newDate = date.split('-');
      if (newDate[2].includes(':')) {
        let day = newDate[2].split(' ');
        newDate[2] = day[1] + ' ' + day[0];
      }
      return newDate[2] + '/' + newDate[1] + '/' + newDate[0];
    },
    mymoney(value) {
      return eight.money(parseFloat(value));
    },
    async getListLoans() {
      let vm = this;
      vm.$vs.loading();
      axios
        .get(
          `/api/loanPayment?loan=${vm.$route.query.id}&page=${vm.pagination.current}`
        )
        .then((response) => {
          vm.loanPayments = response.data.loanspayments.data;
          vm.pagination.total = response.data.loanspayments.last_page;
          vm.pagination.current = response.data.loanspayments.current_page;
          vm.max = response.data.max;
          vm.$vs.loading.close();
        })
        .catch((error) => {
          console.log(error);
          vm.$vs.loading.close();
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
        .then((response) => {
          (vm.isHaveCashRegister = response.data.isHaveCashRegister),
            (vm.idCashRegister = response.data.idCashRegister);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getListLoans();
  },
};
</script>
