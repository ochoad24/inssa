<template>
  <div v-if="showItem('Ver solicitud')">
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
                  @input="getGuarantee"
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
            <div class="vx-row" v-if="showSelectGuarantee && !addGuarantee">
              <div
                class="vx-col sm:w-full w-full mb-2"
                style="background-color: #1aec76"
              >
                <h2>
                  Ultima actualización:
                  {{ convertDate(selectedGuarantee.updated_at) }}
                </h2>
              </div>
            </div>

            <div class="vx-row" v-if="showSelectGuarantee && !addGuarantee">
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Seleccione Garantía</label>
                <v-select
                  :options="guarantees"
                  label="name"
                  v-model="selectedGuarantee"
                />
              </div>
            </div>
            <vs-divider></vs-divider>
            <div class="images" v-if="showSelectGuarantee && !addGuarantee">
              <vs-images>
                <vs-image
                  v-for="image in selectedGuarantee.images"
                  :key="image.id"
                  :src="`/uploads/images/${image.name}`"
                />
              </vs-images>
            </div>
            <div class="vx-row" v-if="showSelectGuarantee">
              <div class="vx-col w-full mt-5">
                <label>Agregar garantía</label>
                <vs-switch v-model="addGuarantee" />
              </div>
            </div>
            <div class="vx-row" v-if="addGuarantee">
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
            <div class="row">
              <UploadImages
                :max="10"
                maxError="Maximo de fotos 10"
                uploadMsg="Seleccione una foto de la garantía"
                fileError="Error :("
                @changed="handleImages"
              />
              <vs-divider color="danger" v-if="guarantee.error">{{
                guarantee.error
              }}</vs-divider>
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
import Datepicker from 'vuejs-datepicker';
import UploadImages from 'vue-upload-drop-images';
import { getPermit } from '../../utils/getPermit';

Vue.directive('VeeValidate', VeeValidate);
Vue.use(VeeValidate, {
  inject: true,
});

const dict = {
  custom: {
    amountToFinance: {
      required: 'El saldo a financiar es requerido',
    },
    terms: {
      required: 'El plazo solicitado es requerido',
      decimal:'Verifique el plazo solicitado ej: 2.5 o 2 o 2.25'
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
        error: '',
      },
      guarantees: [],
      selectedGuarantee: {},
      showSelectGuarantee: false,
      addGuarantee: true,
    };
  },
  mounted() {
    if (typeof this.$route.params.id !== 'undefined') {
      this.isHaveCustomer = true;
      this.onSearch(this.$route.params.id);
    }
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
            if (this.guarantee.photo.length < 1 && this.addGuarantee === true) {
              reject(true);
              this.guarantee.error = 'La foto es requerida';
              this.$vs.notify({
                title: 'Error',
                color: 'danger',
                position: 'top-center',
                text: 'Revise el formulario',
              });
            } else {
              this.guarantee.error = '';
            }
            resolve(true);
          } else {
            if (this.guarantee.photo.length < 1 && this.addGuarantee === true) {
              this.guarantee.error = 'La foto es requerida';
              this.$vs.notify({
                title: 'Error',
                color: 'danger',
                position: 'top-center',
                text: 'Revise el formulario',
              });
            } else {
              this.guarantee.error = '';
            }
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
    getGuarantee(value) {
      let vm = this;
      vm.$vs.loading();
      axios
        .get(`/api/demand/getGuarantee/${value.id}`)
        .then((response) => {
          let guarantee = response.data;
          if (guarantee.length > 0) {
            // console.log(guarantee);
            vm.selectedGuarantee = guarantee[0];
            vm.guarantees = guarantee;
            vm.showSelectGuarantee = true;
            vm.addGuarantee = false;
          } else {
            vm.showSelectGuarantee = false;
          }
          vm.$vs.loading.close();
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
    save() {
      let vm = this;
      vm.$vs.loading();
      const formData = new FormData();
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
      formData.append('isRegistred', this.addGuarantee);
      if (
        _.isEmpty(this.selectedGuarantee) ||
        this.selectedGuarantee === null
      ) {
        formData.append('idGuarantee', 0);
      }
      formData.append('idGuarantee', this.selectedGuarantee.id);
      formData.append('numberImages', this.guarantee.photo.length);
      formData.append('user', JSON.parse(localStorage.getItem('userInfo')).uid);
      if (this.guarantee.photo.length > 0) {
        this.guarantee.photo.forEach((photo, index) => {
          formData.append(`files[${index}]`, photo);
        });
      }
      axios
        .post(`/api/demand`, formData, {
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
            path: `/solicitudes`,
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
