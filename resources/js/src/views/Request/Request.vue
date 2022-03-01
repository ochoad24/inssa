<template>
  <div v-if="showItem('Ver lista de solicitudes')">
    <vx-card title="Listado de solicitudes">
      <template slot="actions" v-if="showItem('Ver todas los créditos')">
        <label for="">Ver todos las solicitudes</label>
        <vs-switch v-model="showAllClients" @change="getRequest" />
      </template>
      <div class="flex -mx-2">
        <div class="w-full px-2">
          <vx-input-group class="mb-base">
            <vs-input
              v-model="searchRequest"
              placeholder="Ingrese búsqueda"
              @input="getRequest"
            />
            <template slot="append">
              <div class="append-text bg-primary">
                <vs-button
                  @click="newRequest"
                  class="btnx"
                  type="filled"
                  v-if="showItem('Crear solicitud')"
                  >Nuevo</vs-button
                >
              </div>
            </template>
          </vx-input-group>
        </div>
      </div>
      <div id="data-list-list-view" class="data-list-container">
        <vs-table :data="requests">
          <template slot="thead">
            <vs-th sort-key="id">ID</vs-th>
            <vs-th sort-key="customer">Cliente</vs-th>
            <vs-th sort-key="amountToFinance">Monto a financiar</vs-th>
            <vs-th sort-key="terms">Plazo solicitado(meses)</vs-th>
            <vs-th sort-key="percentage">Porcentaje Total</vs-th>
            <vs-th sort-key="percentage">Porcentaje Mensual</vs-th>
            <vs-th sort-key="loanRate">Tipo de taza</vs-th>
            <vs-th sort-key="feeType">Tipo de cuota</vs-th>
            <vs-th sort-key="guarantee">Garantía</vs-th>
            <vs-th sort-key="status">Estado</vs-th>
            <vs-th sort-key="created_at">Fecha de creación</vs-th>
            <vs-th sort-key="user_created.name">Usuario creador</vs-th>
            <vs-th sort-key="user_updated.name">Usuario actualizó</vs-th>
            <vs-th sort-key="in_charge.name">Encargado</vs-th>
            <vs-th sort-key="in_charge.name">Aprobador</vs-th>
            <vs-th>Acciones</vs-th>
          </template>
          <template slot-scope="{ data }">
            <vs-tr :key="request.id" v-for="request in data">
              <vs-td>{{ request.id }}</vs-td>
              <vs-td>{{ request.customer }}</vs-td>
              <vs-td>{{ mymoney(request.amountToFinance) }}</vs-td>
              <vs-td>{{ request.terms }}</vs-td>
              <vs-td>{{ mypercentage(request.percentage) }}</vs-td>
              <vs-td>{{
                mypercentage(request.percentage / request.terms)
              }}</vs-td>
              <vs-td>{{ request.loanRate }}</vs-td>
              <vs-td>{{ request.feeType }}</vs-td>
              <vs-td>{{ request.guarantee }}</vs-td>
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
                    >Aprobado</vs-chip
                  >
                  <vs-chip
                    :color="'danger'"
                    class="product-order-status"
                    v-if="request.status === 0"
                    >Rechazado</vs-chip
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
              <vs-td>
                {{
                  request.user_duty_approver === null
                    ? 'Pendiente'
                    : request.user_duty_approver.name
                }}
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <feather-icon
                  icon="DownloadIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  @click="getDocument(request.id)"
                  v-if="showItem('Descargar solicitud')"
                />
                <feather-icon
                  icon="EyeIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  @click="showRequest(request.id)"
                  v-if="showItem('Ver solicitud')"
                />
                <feather-icon
                  icon="CheckIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  @click="activateRequest(request.id)"
                  v-if="
                    request.status === 2 &&
                    showItem('Aprobar o rechazar solicitud')
                  "
                />
                <feather-icon
                  icon="XIcon"
                  svgClasses="w-5 h-5 hover:text-danger stroke-current"
                  @click="deactivateRequest(request.id)"
                  v-if="
                    request.status === 2 &&
                    showItem('Aprobar o rechazar solicitud')
                  "
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
        @change="getRequest"
      ></vs-pagination>
    </vx-card>
  </div>
</template>
<script>
import MaskedInput from 'vue-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import vSelect from 'vue-select';
import axios from 'axios';
import _ from 'lodash';
import { eight } from '../../utils/eight';
import { getPermit } from '../../utils/getPermit';

export default {
  components: {
    'v-select': vSelect,
    'masked-input': MaskedInput,
  },
  data() {
    return {
      showAllClients: false,
      field: {
        label: 'Primer nombre',
        value: 'firstName',
      },
      searchRequest: '',
      requests: [],
      pagination: {
        total: 1,
        current: 1,
      },
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
      mask_percent: createNumberMask({
        prefix: '% ',
        suffix: '',
        includeThousandsSeparator: true,
        allowDecimal: false,
        decimalSymbol: '.',
        integerLimit: 3, // limit length of integer numbers
        allowNegative: false,
        allowLeadingZeroes: false,
      }),
      idRequest: 0,
    };
  },
  methods: {
    newRequest() {
      this.$router.push({ path: `/solicitudes/nuevo` });
    },
    print(id) {
      this.$router.push({ path: `/solicitudes/imprimir?id=${id}` });
    },
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    mymoney(value) {
      return eight.money(parseFloat(value));
    },
    mypercentage(value) {
      return eight.percentage(parseFloat(value));
    },
    myquantity(value) {
      return xelacode.quantity(value);
    },
    activateRequest(id) {
      let vm = this;
      vm.idRequest = id;
      this.$vs.dialog({
        acceptText: 'Si',
        cancelText: 'No',
        type: 'confirm',
        color: 'success',
        title: `Aprobar`,
        text: '¿Desea aprobar esta solicitud?.',
        accept: vm.acceptRequest,
      });
    },
    acceptRequest() {
      let vm = this;
      this.$router.push({ path: `/solicitudes/editar/${vm.idRequest}` });
    },
    deactivateRequest(id) {
      let vm = this;
      vm.idRequest = id;
      this.$vs.dialog({
        acceptText: 'Si',
        cancelText: 'No',
        type: 'confirm',
        color: 'danger',
        title: `Rechazar`,
        text: '¿Desea rechazar esta solicitud?.',
        accept: vm.denyRequest,
      });
    },
    denyRequest() {
      let vm = this;
      vm.$vs.loading();
      axios
        .post(`/api/demand/deny/${vm.idRequest}`)
        .then((response) => {
          vm.$vs.loading.close();
          vm.$vs.notify({
            title: 'Listo',
            color: 'success',
            position: 'top-right',
            text: `${response.data.message}`,
          });
          vm.getRequest();
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
    async getRequest() {
      let vm = this;
      if (vm.searchRequest != '' && vm.pagination.current != 1)
        vm.pagination.current = 1;
      await axios
        .get(
          `/api/demand?page=${vm.pagination.current}&search=${
            vm.searchRequest
          }&permit=${!vm.showAllClients}&user=${
            JSON.parse(localStorage.getItem('userInfo')).uid
          }`
        )
        .then((response) => {
          vm.requests = response.data.data;
          vm.pagination.total = response.data.last_page;
          vm.pagination.current = response.data.current_page;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    convertDate(date) {
      return new Date(date).toLocaleString('es-GT', {
        timeZone: 'America/Guatemala',
      });
    },
    converMaskToNumber(value) {
      var myNumber = '';
      for (var i = 0; i < value.length; i += 1) {
        if (
          value.charAt(i) === 'Q' ||
          value.charAt(i) === '%' ||
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
    showRequest(id) {
      this.$router.push({ path: `/solicitudes/ver/${id}` });
    },
    getDocument($id) {
      window.open(`/api/demand/getDocument/${$id}`, '_blank');
    },
  },
  mounted() {
    this.$emit('input');
  },
};
</script>
