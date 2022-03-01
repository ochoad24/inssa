<template>
  <div v-if="showItem('Ver lista de usuarios')">
    <vx-card title="Listado de cuentas">
      <div class="flex -mx-2">
        <div class="w-3/4 px-2">
          <vx-input-group class="mb-base">
            <template slot="prepend">
              <div class="prepend-text bg-primary">
                <vs-button class="btnx" type="filled">{{
                  field.label
                }}</vs-button>
                <vs-dropdown>
                  <vs-button
                    class="btn-drop"
                    type="filled"
                    icon="expand_more"
                  ></vs-button>
                  <vs-dropdown-menu>
                    <vs-dropdown-item
                      v-for="item in typeFields"
                      :key="item.label"
                      @click="field = item"
                    >
                      {{ item.label }}
                    </vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </div>
            </template>
            <vs-input
              v-model="filterSearch"
              placeholder="Ingrese búsqueda"
              @input="getUsers"
            />
          </vx-input-group>
        </div>
        <div class="w-1/4">
          <vs-button
            @click="newUser"
            class="btnx"
            type="filled"
            v-if="showItem('Crear usuario')"
            >Nuevo</vs-button
          >
        </div>
      </div>
      <div id="data-list-list-view" class="data-list-container">
        <vs-table :data="users">
          <template slot="thead">
            <vs-th sort-key="id">ID</vs-th>
            <vs-th sort-key="name">Nombre</vs-th>
            <vs-th sort-key="user">Usuario</vs-th>
            <vs-th sort-key="email">Email</vs-th>
            <vs-th sort-key="nameRol">Rol</vs-th>
            <vs-th sort-key="created_at">Fecha de creación</vs-th>
            <vs-th>Acciones</vs-th>
          </template>
          <template slot-scope="{ data }">
            <vs-tr :key="user.id" v-for="user in data">
              <vs-td>{{ user.id }}</vs-td>
              <vs-td>{{ user.name }}</vs-td>
              <vs-td>{{ user.user }}</vs-td>
              <vs-td>{{ user.email }}</vs-td>
              <vs-td>{{ user.nameRol }}</vs-td>
              <vs-td>{{ convertDate(user.created_at) }}</vs-td>
              <vs-td class="whitespace-no-wrap">
                <feather-icon
                  icon="EditIcon"
                  svgClasses="w-5 h-5 hover:text-warning stroke-current"
                  v-if="showItem('Editar usuario')"
                  @click="updateUser(user.id)"
                />
                <feather-icon
                  icon="TrashIcon"
                  svgClasses="w-5 h-5 hover:text-danger stroke-current"
                  v-if="showItem('Eliminar usuario')"
                  @click="dialogDeleteUser(user.id)"
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
        @change="getUsers"
      ></vs-pagination>
    </vx-card>
  </div>
</template>
<script>
import { Validator } from 'vee-validate';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import vSelect from 'vue-select';
import axios from 'axios';
import _ from 'lodash';
import { getPermit } from '../../utils/getPermit';

Vue.directive('VeeValidate', VeeValidate);
Vue.use(VeeValidate, {
  inject: true,
});
const dict = {
  custom: {
    user: {
      required: 'El nombre de usuario es requerido',
    },
    email: {
      required: 'El email es requerido',
      email: 'El email no es válido',
    },
    name: {
      required: 'El nombre es requerido',
    },
    rol: {
      required: 'El rol es requerido',
    },
    password: {
      required: 'La contraseña es requerida',
      alpha_num: 'Los caracteres no son válidos',
      min: 'El mínimo de caracteres es de 6',
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
      idUser: 0,
      name: '',
      user: '',
      email: '',
      rols: [],
      password: '',
      rol: null,
      field: {
        label: 'Nombre',
        value: 'users.name',
      },
      typeFields: [
        {
          label: 'Nombre',
          value: 'users.name',
        },
        {
          label: 'Usuario',
          value: 'users.user',
        },
        {
          label: 'Email',
          value: 'users.email',
        },
        {
          label: 'Rol',
          value: 'rols.name',
        },
      ],
      filterSearch: '',
      pagination: {
        total: 1,
        current: 1,
      },
      // showPopupAccount: false,
      users: [],
      popup: {
        active: false,
        title: 'Nueva usuario',
      },
    };
  },
  methods: {
    newUser() {
      this.$router.push({
        path: `/usuarios/nuevo`,
      });
    },
    updateUser(id) {
      this.$router.push({
        path: `/usuarios/editar/${id}`,
      });
    },
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    async getUsers() {
      let vm = this;
      if (vm.filterSearch != '' && vm.pagination.current != 1)
        vm.pagination.current = 1;
      await axios
        .get(
          `/api/user?page=${vm.pagination.current}&search=${vm.filterSearch}&critery=${vm.field.value}`
        )
        .then((response) => {
          vm.users = response.data.data;
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
    dialogDeleteUser(id) {
      let vm = this;
      vm.idUser = id;
      this.$vs.dialog({
        acceptText: 'Si',
        cancelText: 'No',
        type: 'confirm',
        color: 'danger',
        title: `Eliminar`,
        text: '¿Desea eliminar este usuario?.',
        accept: vm.deleteUser,
      });
    },
    deleteUser() {
      let vm = this;
      vm.$vs.loading();
      axios
        .delete(`/api/user/${vm.idUser}`)
        .then((response) => {
          vm.$vs.loading.close();
          vm.$vs.notify({
            title: 'Listo',
            color: 'success',
            position: 'top-right',
            text: `${response.data.message}`,
          });
          vm.getUsers();
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
  },
  mounted() {},
};
</script>
