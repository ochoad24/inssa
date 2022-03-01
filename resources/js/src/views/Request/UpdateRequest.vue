<template>
  <div v-if="showItem('Aprobar o rechazar solicitud')">
    <vx-card title="Nueva solicitud">
      <form-wizard
        color="rgba(var(--vs-primary), 1)"
        errorColor="rgba(var(--vs-danger), 1)"
        :title="null"
        :subtitle="null"
        finishButtonText="Guardar"
        nextButtonText="Siguiente"
        backButtonText="Anterior"
        @on-complete="save"
        ref="customerWizard"
      >
        <!-- BEGIN STEP ONE -->
        <tab-content
          title="Crédito"
          class="mb-5"
          :before-change="validateStep1"
        >
          <form data-vv-scope="step-1">
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Fecha de desembolso</label>
                <datepicker
                  name="dateInit"
                  v-validate="'required'"
                  :language="language"
                  v-model="dateInit"
                  format="dd/MM/yyyy"
                ></datepicker>
                <span class="text-danger">{{
                  errors.first('step-1.dateInit')
                }}</span>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Monto a financiar</label>
                <masked-input
                  class="vs-inputx vs-input--input normal"
                  style="border: 1px solid rgba(0, 0, 0, 0.2)"
                  v-model="amountToFinance"
                  name="amountToFinance"
                  v-validate="'required'"
                  :mask="mask_quetzal"
                  :guide="false"
                  :keep-char-positions="true"
                  :show-mask="true"
                />
                <span class="text-danger">{{
                  errors.first('step-1.amountToFinance')
                }}</span>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <vs-input
                  type="number"
                  v-model="terms"
                  class="w-full"
                  name="terms"
                  v-validate="'required|decimal:2'"
                  label="Plazo soliticado(meses)"
                />
                <span class="text-danger">{{
                  errors.first('step-1.terms')
                }}</span>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Tipo de taza</label>
                <v-select
                  :options="loanRateList"
                  name="loanRate"
                  v-validate="'required'"
                  label="label"
                  v-model="loanRate"
                  @input="loanRateChange"
                />
                <span class="text-danger">{{
                  errors.first('step-1.loanRate')
                }}</span>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <vs-input
                  v-model="selectedloanRate.percentage"
                  class="w-full"
                  name="percentage"
                  v-validate="'required'"
                  label="Porcentaje"
                  icon="%"
                  type="number"
                />
                <span class="text-danger">{{
                  errors.first('step-1.percentage')
                }}</span>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Tipo de cuota</label>
                <v-select
                  :options="selectedloanRate.feeTypeList"
                  name="feeType"
                  v-validate="'required'"
                  label="label"
                  v-model="selectedloanRate.feeType"
                />
                <span class="text-danger">{{
                  errors.first('step-1.feeType')
                }}</span>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Cliente</label>
                <v-select
                  :options="customers"
                  name="customer"
                  v-validate="'required'"
                  @search="onSearch"
                  :filterable="false"
                  label="name"
                  v-model="customer"
                  :disabled="isHaveCustomer"
                />
                <span class="text-danger">{{
                  errors.first('step-1.customer')
                }}</span>
              </div>
            </div>
          </form>
        </tab-content>
        <!-- END STEP ONE -->
        <!-- BEGIN STEP TWO -->
        <tab-content
          title="Garantía"
          class="mb-5"
          :before-change="validateStep2"
        >
          <form data-vv-scope="step-2">
            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <vs-input
                  v-model="guarantee.name"
                  class="w-full"
                  name="guarantee"
                  v-validate="'required'"
                  label="Garantía"
                />
                <span class="text-danger">{{
                  errors.first('step-2.guarantee')
                }}</span>
              </div>
            </div>
            <vs-divider></vs-divider>
            <div class="images">
              <vs-images>
                <vs-image
                  v-for="image in images"
                  :key="image.id"
                  :src="`/uploads/images/${image.name}`"
                />
              </vs-images>
            </div>
            <vs-divider></vs-divider>
            <div class="vx-row">
              <UploadImages
                :max="10"
                maxError="Maximo de fotos 10"
                uploadMsg="Seleccione una foto de la garantía"
                fileError="Error :("
                @changed="handleImages"
              />
            </div>
          </form>
        </tab-content>
      </form-wizard>
    </vx-card>
  </div>
</template>
<script>
import axios from 'axios';
import vSelect from 'vue-select';
import { FormWizard, TabContent } from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import { Validator } from 'vee-validate';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import MaskedInput from 'vue-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import _ from 'lodash';
import { eight } from '../../utils/eight';
import Datepicker from 'vuejs-datepicker';
import es from 'vuejs-datepicker/src/locale/translations/es';
import UploadImages from 'vue-upload-drop-images';
import VueMoment from 'vue-moment';
import { getPermit } from '../../utils/getPermit';

const moment = require('moment');

Vue.use(VueMoment, {
  moment,
});
Vue.directive('VeeValidate', VeeValidate);
Vue.use(VeeValidate, {
  inject: true,
});

const dict = {
  custom: {
    language: es,
    dateInit: {
      required: 'La fecha de desembolso es requerida',
    },
    amountToFinance: {
      required: 'El saldo a financiar es requerido',
    },
    terms: {
      required: 'El plazo solicitado es requerido',
      decimal: 'Verifique el plazo solicitado ej: 2.5 o 2 o 2.25',
    },
    percentage: {
      required: 'El campo porcentaje requerido',
    },
    loanRate: {
      required: 'La taza es requerida',
    },
    feeType: {
      required: 'El tipo de cuota es requerido',
    },
    customer: {
      required: 'El cliente es requerido',
    },
    guarantee: {
      required: 'La garantía es requerida',
    },
  },
};
Validator.localize('es', dict);
export default {
  components: {
    'v-select': vSelect,
    FormWizard,
    TabContent,
    Datepicker,
    'masked-input': MaskedInput,
    UploadImages,
  },
  data() {
    return {
      dateInit: new Date(),
      language: es,
      images: [],
      customer: '',
      customers: [],
      loanRate: {
        id: 1,
        label: 'Flat',
      },
      loanRateList: [
        {
          id: 1,
          label: 'Flat',
        },
        {
          id: 2,
          label: 'Diaria',
        },
      ],
      isHaveCustomer: false,
      selectedloanRate: {
        percentage: '10',
        feeType: '',
        feeTypeList: [
          {
            id: 1,
            label: 'Semanal',
          },
          {
            id: 2,
            label: 'Catorcenal',
          },
          {
            id: 3,
            label: 'Mensual',
          },
        ],
      },
      loanRateFlat: {
        percentage: '10',
        feeType: '',
        feeTypeList: [
          {
            id: 1,
            label: 'Semanal',
          },
          {
            id: 2,
            label: 'Catorcenal',
          },
          {
            id: 3,
            label: 'Mensual',
          },
        ],
      },
      loanRateDaily: {
        percentage: '20',
        feeType: {
          id: 1,
          label: 'Diaria',
        },
        feeTypeList: [
          {
            id: 1,
            label: 'Diaria',
          },
        ],
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
      amountToFinance: '',
      terms: '',
      guarantee: {
        name: '',
        photo: [],
      },
    };
  },
  mounted() {
    // if (typeof this.$route.params.id !== 'undefined') {
    //   this.isHaveCustomer = true;
    //   this.onSearch(this.$route.params.id);
    // }
    this.getRequest();
  },
  methods: {
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
    },
    mymoney(value) {
      return eight.money(parseFloat(value));
    },
    getRequest() {
      let vm = this;
      vm.$vs.loading();
      axios
        .get(`/api/demand/${vm.$route.params.id}`)
        .then((response) => {
          vm.$vs.loading.close();
          const demand = response.data.demand;
          vm.amountToFinance = vm.mymoney(demand.amountToFinance);
          vm.terms = demand.terms;
          vm.loanRate = vm.loanRateList.find(
            (x) => x.label === demand.loanRate
          );
          let guarantee = response.data.guarantee;

          if (demand.loanRate === 'Flat') {
            vm.selectedloanRate.feeType = vm.loanRateFlat.feeTypeList.find(
              (x) => x.label === demand.feeType
            );
            vm.selectedloanRate.feeTypeList = vm.loanRateFlat.feeTypeList;
          } else {
            vm.selectedloanRate.feeType = vm.loanRateDaily.feeTypeList.find(
              (x) => x.label === demand.feeType
            );
            vm.selectedloanRate.feeTypeList = vm.loanRateDaily.feeTypeList;
          }
          vm.selectedloanRate.percentage = demand.percentage;

          const customer = response.data.customer;
          this.isHaveCustomer = true;
          this.onSearch(customer.id);
          vm.guarantee = {
            id: guarantee.id,
            name: guarantee.name,
            photo: [],
          };
          vm.images = response.data.images;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    converMaskToNumber(value) {
      var myNumber = '';
      for (var i = 0; i < value.length; i += 1) {
        if (
          value.charAt(i) === 'Q' ||
          value.charAt(i) === ',' ||
          value.charAt(i) === ' ' ||
          value.charAt(i) === '%'
        ) {
          continue;
        } else {
          myNumber += value.charAt(i);
        }
      }
      return parseFloat(myNumber).toFixed(2);
    },
    onSearch(search) {
      this.$vs.loading();
      this.search(search, this);
    },
    search: _.debounce((search, vm) => {
      axios
        .get(`/api/searchCustomer?filter=${search}`)
        .then((response) => {
          if (vm.isHaveCustomer == true) {
            vm.customer = response.data;
            vm.$vs.loading.close();
          } else {
            vm.customers = response.data.data;
            vm.$vs.loading.close();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 350),
    handleImages(files) {
      this.guarantee.photo = [];
      files.forEach((photo) => {
        this.guarantee.photo.push(photo);
      });
    },
    loanRateChange() {
      if (this.loanRate.id === 1) {
        this.selectedloanRate = this.loanRateFlat;
      } else {
        this.selectedloanRate = this.loanRateDaily;
      }
    },
    validateStep1() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step-1').then((result) => {
          if (result) {
            resolve(true);
          } else {
            reject(true);
            this.$vs.notify({
              title: 'Error',
              color: 'danger',
              position: 'top-center',
              text: 'Revise el formulario',
            });
          }
        });
      });
    },
    validateStep2() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step-2').then((result) => {
          if (result) {
            resolve(true);
          } else {
            reject(true);
          }
        });
      });
    },
    save() {
      let vm = this;
      vm.$vs.loading();
      const formData = new FormData();
      formData.append('initDate', moment(this.dateInit).format('YYYY-MM-DD'));
      formData.append(
        'amountToFinance',
        this.converMaskToNumber(this.amountToFinance)
      );
      formData.append('terms', this.terms);
      formData.append('percentage', this.selectedloanRate.percentage);
      formData.append('loanRate', this.loanRate.label);
      formData.append('feeType', this.selectedloanRate.feeType.label);
      formData.append('idCustomer', this.customer.id);
      formData.append('guarantee', this.guarantee.name);
      formData.append('idGuarantee', this.guarantee.id);
      formData.append('numberImages', this.guarantee.photo.length);
      formData.append('user', JSON.parse(localStorage.getItem('userInfo')).uid);
      if (this.guarantee.photo.length > 0) {
        this.guarantee.photo.forEach((photo, index) => {
          formData.append(`files[${index}]`, photo);
        });
      }
      formData.append('_method', 'put');
      axios
        .post(`/api/demand/${vm.$route.params.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
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
          vm.$router.push({
            path: `/creditos`,
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
    },
  },
};
</script>
<style lang="stylus">
.images {
  max-height: 500px;
  overflow: auto;
}
</style>
