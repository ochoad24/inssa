<template>
  <div v-if="showItem('Crear caja')">
    <vx-card title="Nueva caja">
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
              <label class="vs-input--label">Monto</label>
              <masked-input
                class="vs-inputx vs-input--input normal"
                style="border: 1px solid rgba(0, 0, 0, 0.2)"
                v-model="amount"
                name="amount"
                v-validate="'required'"
                :mask="mask_quetzal"
                :guide="false"
                :keep-char-positions="true"
                :show-mask="true"
              />
              <span class="text-danger">{{ errors.first('amount') }}</span>
            </div>
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Cajero</label>
              <v-select
                :options="users"
                @search="onSearch"
                :filterable="false"
                label="name"
                v-model="user"
                name="user"
                v-validate="'required'"
              />
              <span class="text-danger">{{ errors.first('user') }}</span>
            </div>
            <div class="vx-col w-full mt-5">
              <vs-input
                label="Descripción"
                v-model="description"
                class="w-full"
                name="description"
              />
            </div>
          </div>

          <vs-button
            type="filled"
            @click.prevent="saveAccount"
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
import MaskedInput from 'vue-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
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
    name: {
      required: 'El nombre es requerido',
    },
    amount: {
      required: 'El monto inicial es requerido',
    },
    user: {
      required: 'El cajero es requerido',
    },
  },
};
Validator.localize('es', dict);
export default {
  components: {
    'v-select': vSelect,
    'masked-input': MaskedInput,
  },
  data() {
    return {
      description: '',
      name: '',
      amount: '',
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
      user: null,
      users: [],
    };
  },
  methods: {
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
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
    onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce((loading, search, vm) => {
      axios
        .get(`/api/searchUser?filter=${search}`)
        .then((response) => {
          vm.users = response.data.data;
          loading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 350),
    saveAccount() {
      let vm = this;
      this.$validator.validateAll().then((result) => {
        if (result) {
          vm.$vs.loading();
          axios
            .post(`/api/cashregister`, {
              description: vm.description,
              name: vm.name,
              amount: vm.converMaskToNumber(vm.amount),
              inCharge: vm.user.id,
              user: JSON.parse(localStorage.getItem('userInfo')).uid,
            })
            .then((response) => {
              vm.$vs.loading.close();
              vm.$vs.notify({
                title: 'Listo',
                color: 'success',
                position: 'top-right',
                text: `${response.data.message}`,
              });
              vm.$router.push({
                path: `/cajas`,
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
