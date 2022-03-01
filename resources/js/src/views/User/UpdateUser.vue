<template>
  <div v-if="showItem('Editar usuario')">
    <vx-card title="Actualizar usuario">
      <form>
        <div class="con-exemple-prompt">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <vs-input
                label="Nombre"
                v-model="name"
                class="w-full"
                name="name"
                v-validate="'required'"
              />
              <span class="text-danger">{{ errors.first('name') }}</span>
            </div>
            <div class="vx-col w-full mt-5">
              <vs-input
                label="Usuario"
                v-model="user"
                class="w-full"
                name="user"
                v-validate="'required'"
              />
              <span class="text-danger">{{ errors.first('user') }}</span>
            </div>
            <div class="vx-col w-full mt-5">
              <vs-input
                label="Email"
                v-model="email"
                class="w-full"
                name="email"
                v-validate="'required|email'"
              />
              <span class="text-danger">{{ errors.first('email') }}</span>
            </div>
            <div class="vx-col w-full mt-5">
              <vs-input
                label="Contraseña"
                v-model="password"
                class="w-full"
                name="password"
                v-validate="'alpha_num|min:6'"
              />
              <span class="text-danger">{{ errors.first('password') }}</span>
            </div>
            <div class="vx-col w-full mt-5">
              <vs-input
                label="Código telegram"
                v-model="telegram"
                class="w-full"
                name="telegram"
                v-validate="'required|numeric|length:10'"
              />
              <span class="text-danger">{{ errors.first('telegram') }}</span>
            </div>
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Rol</label>
              <v-select
                :options="rols"
                name="rol"
                v-validate="'required'"
                @search="onSearch"
                :filterable="false"
                label="name"
                v-model="rol"
              />
              <span class="text-danger">{{ errors.first('rol') }}</span>
            </div>
          </div>

          <vs-button
            type="filled"
            @click.prevent="updateUser"
            class="mt-5 block"
            >Guardar</vs-button
          >
        </div>
      </form>
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
    telegram: {
      required: 'El código de telegram es requerido',
      numeric: 'Solo números',
      length: 'Son 10 dígitos del código',
    },
    password: {
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
      telegram: '',
      email: '',
      rols: [],
      password: '',
      rol: null,
    };
  },
  mounted() {
    this.idUser = this.$route.params.id;
    this.findUser(this.$route.params.id);
  },
  methods: {
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    findUser(id) {
      let vm = this;
      vm.$vs.loading();
      axios
        .get(`/api/user/${id}`)
        .then((response) => {
          vm.$vs.loading.close();
          vm.user = response.data.user.user;
          vm.email = response.data.user.email;
          vm.name = response.data.user.name;
          vm.telegram = response.data.user.telegramId;
          vm.rol = {
            id: response.data.rol.id,
            name: response.data.rol.name,
          };
        })
        .catch((error) => {
          vm.$vs.notify({
            title: 'Error',
            color: 'danger',
            position: 'top-right',
            text: `${error.response.data.message}`,
          });
        });
    },
    onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce((loading, search, vm) => {
      axios
        .get(`/api/searchRol?filter=${search}`)
        .then((response) => {
          vm.rols = response.data.data;
          loading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 350),
    updateUser() {
      let vm = this;
      this.$validator.validateAll().then((result) => {
        if (result) {
          vm.$vs.loading();
          axios
            .put(`/api/user/${vm.idUser}`, {
              user: vm.user,
              email: vm.email,
              name: vm.name,
              password: vm.password,
              telegram: vm.telegram,
              idRol: vm.rol.id,
            })
            .then((response) => {
              vm.$vs.loading.close();
              vm.$vs.notify({
                title: 'Listo',
                color: 'success',
                position: 'top-right',
                text: `${response.data.message}`,
              });
              this.$router.push({
                path: `/usuarios`,
              });
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
};
</script>
