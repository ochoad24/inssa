<template>
  <div v-if="showItem('Ver cliente')">
    <vx-card title="Listado de clientes">
      <template slot="actions" v-if="showItem('Ver cliente')">
        <label for="">Ver todos los clientes</label>
        <vs-switch v-model="showAllClients" @change="getCustomers" />
      </template>
      <div class="flex -mx-2">
        <div class="w-full px-2">
          <vx-input-group class="mb-base">
            <vs-input
              v-model="search"
              placeholder="Ingrese búsqueda"
              @input="getCustomers"
            />
            <template slot="append">
              <div class="append-text bg-primary">
                <vs-button
                  @click="newClient"
                  class="btnx"
                  type="filled"
                  v-if="showItem('Crear cliente')"
                  >Nuevo</vs-button
                >
              </div>
            </template>
          </vx-input-group>
        </div>
      </div>
      <div id="data-list-list-view" class="data-list-container">
        <vs-table :data="customers">
          <template slot="thead">
            <vs-th sort-key="id">ID</vs-th>
            <vs-th sort-key="firstName">Primer nombre</vs-th>
            <vs-th sort-key="secondName">Segundo nombre</vs-th>
            <vs-th sort-key="firstLastName">Primer apellido</vs-th>
            <vs-th sort-key="secondLastName">Segundo apellido</vs-th>
            <vs-th sort-key="dpi">DPI</vs-th>
            <vs-th sort-key="nit">NIT</vs-th>
            <vs-th sort-key="user_created.name">Usuario creador</vs-th>
            <vs-th sort-key="user_updated.name">Usuario actualizó</vs-th>
            <vs-th sort-key="in_charge.name">Encargado</vs-th>
            <vs-th>Acciones</vs-th>
          </template>
          <template slot-scope="{ data }">
            <vs-tr :key="customer.id" v-for="customer in data">
              <vs-td>{{ customer.id }}</vs-td>
              <vs-td>{{ customer.firstName }}</vs-td>
              <vs-td>{{ customer.secondName }}</vs-td>
              <vs-td>{{ customer.firstLastName }}</vs-td>
              <vs-td>{{ customer.secondLastName }}</vs-td>
              <vs-td>{{ customer.dpi }}</vs-td>
              <vs-td>{{ customer.nit }}</vs-td>
              <vs-td>
                {{ customer.user_created.name }}
              </vs-td>
              <vs-td>
                {{ customer.user_updated.name }}
              </vs-td>
              <vs-td>
                {{ customer.user_duty_manager.name }}
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <feather-icon
                  icon="EyeIcon"
                  svgClasses="w-5 h-5 hover:text-success stroke-current"
                  @click="showClient(customer.id)"
                  v-if="showItem('Ver cliente')"
                />
                <feather-icon
                  icon="EditIcon"
                  svgClasses="w-5 h-5 hover:text-warning stroke-current"
                  @click="updateClient(customer.id)"
                  v-if="showItem('Editar cliente')"
                />
                <feather-icon
                  icon="TrashIcon"
                  svgClasses="w-5 h-5 hover:text-danger stroke-current"
                  @click="dialogDeleteCustomer(customer.id)"
                  v-if="showItem('Eliminar cliente')"
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
        @change="getCustomers"
      ></vs-pagination>
    </vx-card>
  </div>
</template>
<script>
import axios from 'axios';
import vSelect from 'vue-select';
import { FormWizard, TabContent } from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import { getPermit } from '../../utils/getPermit';
import Datepicker from 'vuejs-datepicker';
import es from 'vuejs-datepicker/src/locale/translations/es';
import MaskedInput from 'vue-text-mask';

export default {
  components: {
    'v-select': vSelect,
    FormWizard,
    TabContent,
    Datepicker,
    'masked-input': MaskedInput,
  },
  data() {
    return {
      showAllClients: false,
      idCustomer: 0,
      language: es,
      customers: [],
      search: '',
      pagination: {
        total: 1,
        current: 1,
      },
    };
  },
  methods: {
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    updateClient(id) {
      this.$router.push({ path: `/clientes/editar/${id}` });
    },
    showClient(id) {
      this.$router.push({ path: `/clientes/ver?id=${id}` });
    },
    newClient() {
      this.$router.push({ path: `/clientes/nuevo` });
    },
    dialogDeleteCustomer(id) {
      let vm = this;
      vm.idCustomer = id;
      this.$vs.dialog({
        acceptText: 'Si',
        cancelText: 'No',
        type: 'confirm',
        color: 'danger',
        title: `Eliminar`,
        text: '¿Desea eliminar este cliente?.',
        accept: vm.deleteCustomer,
      });
    },
    deleteCustomer() {
      let vm = this;
      vm.$vs.loading();
      axios
        .delete(`/api/customer/${vm.idCustomer}`)
        .then((response) => {
          vm.$vs.loading.close();
          vm.$vs.notify({
            title: 'Listo',
            color: 'success',
            position: 'top-right',
            text: `${response.data.message}`,
          });
          vm.getCustomers();
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
    convertDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [year, month, day].join('-');
    },
    async getCustomers() {
      let vm = this;
      if (vm.search != '' && vm.pagination.current != 1)
        vm.pagination.current = 1;
      let url = '';
      url = `/api/customer?page=${vm.pagination.current}&search=${
        vm.search
      }&permit=${!vm.showAllClients}&user=${
        JSON.parse(localStorage.getItem('userInfo')).uid
      }`;
      await axios
        .get(url)
        .then((response) => {
          vm.customers = response.data.data;
          vm.pagination.total = response.data.last_page;
          vm.pagination.current = response.data.current_page;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.$emit('input');
  },
};
</script>
<style lang="scss">
#data-list-list-view {
  .vs-con-table {
    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;

      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search {
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          & + i {
            left: 1rem;
          }

          &:focus + i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);

        td {
          padding: 20px;

          &:first-child {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
          }

          &:last-child {
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          }
        }

        td.td-check {
          padding: 20px !important;
        }
      }
    }

    .vs-table--thead {
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text {
          text-transform: uppercase;
          font-weight: 600;
        }
      }

      th.td-check {
        padding: 0 15px !important;
      }

      tr {
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
