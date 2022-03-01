<template>
  <div v-if="showItem('Movimiento entre cuentas')">
    <vx-card title="Movimiento entre cuentas">
      <form>
        <div class="con-exemple-prompt">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Cuenta salida</label>
              <v-select
                :options="accountsOut"
                @search="onSearchOut"
                :filterable="false"
                label="name"
                v-model="accountOut"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Cuenta entrada</label>
              <v-select
                :options="accountsIn"
                @search="onSearchIn"
                :filterable="false"
                label="name"
                v-model="accountIn"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <label class="vs-input--label">Monto</label>
              <masked-input
                class="vs-inputx vs-input--input normal"
                style="border: 1px solid rgba(0, 0, 0, 0.2)"
                v-model="amount"
                :mask="mask_quetzal"
                :guide="false"
                :keep-char-positions="true"
                :show-mask="true"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
              <vs-input label="Referencia" v-model="reference" class="w-full" />
            </div>
          </div>
          <vs-button
            type="filled"
            @click="saveMoveAmountTransaction"
            class="mt-5 block"
            >Guardar</vs-button
          >
        </div>
      </form>
    </vx-card>
  </div>
</template>

<script>
import axios from 'axios';
import { eight } from '../../utils/eight';
import _ from 'lodash';
import MaskedInput from 'vue-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import vSelect from 'vue-select';
import { getPermit } from '../../utils/getPermit';
export default {
  components: {
    'v-select': vSelect,
    'masked-input': MaskedInput,
  },
  data() {
    return {
      type: {
        value: '+',
        name: 'Entrada',
      },
      types: [
        {
          value: '-',
          name: 'Salida',
        },
        {
          value: '+',
          name: 'Entrada',
        },
      ],
      accountsIn: [],
      accountsOut: [],
      accountIn: null,
      accountOut: null,
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
      reference: '',
      amount: '',
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
    saveMoveAmountTransaction() {
      let vm = this;
      if (this.accountOut == null) {
        this.$vs.notify({
          title: 'Error',
          color: 'danger',
          position: 'top-right',
          text: 'La cuenta de salida es requerida',
        });
        return;
      }
      if (this.accountIn == null) {
        this.$vs.notify({
          title: 'Error',
          color: 'danger',
          position: 'top-right',
          text: 'La cuenta de entrada es requerida',
        });
        return;
      }
      if (this.accountOut.id === this.accountIn.id) {
        this.$vs.notify({
          title: 'Error',
          color: 'danger',
          position: 'top-right',
          text: 'Las cuentas no pueden ser iguales',
        });
        return;
      }
      if (this.amount === '' || this.amount === 'Q 0') {
        this.$vs.notify({
          title: 'Error',
          color: 'danger',
          position: 'top-right',
          text: 'El monto debe ser mayor a 0',
        });
        return;
      }
      // POST
      vm.$vs.loading();
      axios
        .post('/api/transaction', {
          idIn: vm.accountIn.id,
          idOut: vm.accountOut.id,
          nameIn: vm.accountIn.name,
          nameOut: vm.accountOut.name,
          reference: vm.reference,
          amount: vm.converMaskToNumber(vm.amount),
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
          this.$router.push({ path: `/transacciones` });
        })
        .catch((error) => {
          vm.$vs.loading.close();
          console.log(error);
        });
    },
    onSearchIn(search, loading) {
      loading(true);
      this.search(loading, search, this, false);
    },
    onSearchOut(search, loading) {
      loading(true);
      this.search(loading, search, this, true);
    },
    search: _.debounce((loading, search, vm, status) => {
      axios
        .get(`/api/getAccount?filter=${search}`)
        .then((response) => {
          if (status === true) vm.accountsOut = response.data.data;
          else vm.accountsIn = response.data.data;
          loading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 350),
  },
};
</script>
