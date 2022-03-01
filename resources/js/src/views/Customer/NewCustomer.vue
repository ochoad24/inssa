<template>
  <div v-if="showItem('Crear cliente')">
    <vx-card title="Nuevo cliente">
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
          title="Datos personales"
          class="mb-5"
          :before-change="validateStep1"
        >
          <!-- tab 1 content -->
          <form data-vv-scope="step-1">
            <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Primer nombre"
                  v-model="FirstName"
                  class="w-full"
                  name="first_name"
                  v-validate="'required|alpha'"
                />
                <span class="text-danger">{{
                  errors.first('step-1.first_name')
                }}</span>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Segundo nombre"
                  v-model="SecondName"
                  class="w-full"
                />
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Primer apellido"
                  v-model="FirstLastName"
                  class="w-full"
                  name="first_lastname"
                  v-validate="'required|alpha'"
                />
                <span class="text-danger">{{
                  errors.first('step-1.first_lastname')
                }}</span>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Segundo apellido"
                  v-model="SecondLastName"
                  class="w-full"
                  name="second_lastname"
                  v-validate="'required|alpha'"
                />
                <span class="text-danger">{{
                  errors.first('step-1.second_lastname')
                }}</span>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Apellido de casada"
                  v-model="MarriedName"
                  class="w-full"
                  name="married_name"
                  v-validate="'alpha'"
                />
                <span class="text-danger">{{
                  errors.first('step-1.married_name')
                }}</span>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="NIT"
                  v-model="Nit"
                  class="w-full"
                  name="nit_valid"
                  v-validate="'nitvalid'"
                />
                <span class="text-danger">{{
                  errors.first('step-1.nit_valid')
                }}</span>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="DPI"
                  v-model="Dpi"
                  class="w-full"
                  name="cui_valid"
                  v-validate="'required|cuivalid'"
                />
                <span class="text-danger">{{
                  errors.first('step-1.cui_valid')
                }}</span>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col md:w-1/3 w-full mt-5">
                <label class="vs-input--label">Fecha de nacimiento</label>
                <datepicker
                  :language="language"
                  v-model="BirthDate"
                  format="dd/MM/yyyy"
                  name="date_birthday"
                  v-validate="'required'"
                  @selected="calculateYear"
                ></datepicker>
                <span class="text-danger">{{
                  errors.first('step-1.date_birthday')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input
                  v-model="Age"
                  class="w-full"
                  name="age_valid"
                  v-validate="'required|numeric|min_value:18'"
                  label="Edad"
                  readonly="true"
                />
                <span class="text-danger">{{
                  errors.first('step-1.age_valid')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <label class="vs-input--label">Sexo</label>
                <v-select
                  :options="['Masculino', 'Femenino']"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  name="gender"
                  v-validate="'required'"
                  v-model="Gender"
                  @input="changeGender"
                />
                <span class="text-danger">{{
                  errors.first('step-1.gender')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input
                  v-model="PeopleDepend"
                  class="w-full"
                  name="pepoble_depend"
                  v-validate="'required|numeric'"
                  label="¿Cuántas personas dependen de usted?"
                />
                <span class="text-danger">{{
                  errors.first('step-1.pepoble_depend')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <label class="vs-input--label">Estado civil</label>
                <v-select
                  :options="civil_status_select"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  name="civil_satus"
                  v-validate="'required'"
                  v-model="CivilStatus"
                />
                <span class="text-danger">{{
                  errors.first('step-1.civil_satus')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input
                  v-model="Nationality"
                  class="w-full"
                  name="nationality_valid"
                  v-validate="'required|alpha'"
                  label="Nacionalidad"
                />
                <span class="text-danger">{{
                  errors.first('step-1.nationality_valid')
                }}</span>
              </div>
            </div>
          </form>
        </tab-content>
        <!-- END STEP ONE -->
        <!-- BEGIN STEP TWO -->
        <tab-content
          title="Datos básicos"
          class="mb-5"
          :before-change="validateStep2"
        >
          <!-- tab 1 content -->
          <form data-vv-scope="step-2">
            <div class="vx-row">
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input
                  label="Dirección"
                  v-model="Address"
                  class="w-full"
                  name="address"
                  v-validate="'required'"
                />
                <span class="text-danger">{{
                  errors.first('step-2.address')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input label="Colonia" v-model="Suburb" class="w-full" />
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input label="Zona" v-model="Zone" class="w-full" />
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <label class="vs-input--label">Departamento</label>
                <v-select
                  :options="Departaments"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  name="departament"
                  v-validate="'required'"
                  :value="Departament"
                  label="name"
                  :loading="LoadingDepartaments"
                  @input="setSelect"
                  :clearable="false"
                />
                <span class="text-danger">{{
                  errors.first('step-2.departament')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <label class="vs-input--label">Municipios</label>
                <v-select
                  :options="Towns"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  name="town"
                  v-validate="'required'"
                  v-model="Town"
                  label="name"
                  :loading="LoadingTwons"
                >
                </v-select>
                <span class="text-danger">{{
                  errors.first('step-2.town')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <label class="vs-input--label">Teléfono de residencia</label>
                <masked-input
                  class="vs-inputx vs-input--input normal"
                  style="border: 1px solid rgba(0, 0, 0, 0.2)"
                  v-model="Telephone"
                  name="telephone"
                  v-validate="'length:9'"
                  :mask="[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
                  :guide="false"
                  :keep-char-positions="true"
                  :show-mask="true"
                />
                <span class="text-danger">{{
                  errors.first('step-2.telephone')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <label class="vs-input--label">Residencia</label>
                <v-select
                  :options="[
                    'Casa propia',
                    'Familiar',
                    'Alquilada',
                    'Pagándola',
                    'Hipotecada',
                    'Del trabajo',
                  ]"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  name="home"
                  v-validate="'required'"
                  v-model="Home"
                />
                <span class="text-danger">{{
                  errors.first('step-2.home')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input
                  label="Tiempo de residir"
                  v-model="TimeHome"
                  class="w-full"
                  name="time_home"
                  v-validate="'required'"
                />
                <span class="text-danger">{{
                  errors.first('step-2.time_home')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <label class="vs-input--label">Ingreso Mensual</label>
                <masked-input
                  class="vs-inputx vs-input--input normal"
                  style="border: 1px solid rgba(0, 0, 0, 0.2)"
                  v-model="MonthlyPayment"
                  name="monthly_payment"
                  v-validate="'required'"
                  :mask="mask_quetzal"
                  :guide="false"
                  :keep-char-positions="true"
                  :show-mask="true"
                />
                <span class="text-danger">{{
                  errors.first('step-2.monthly_payment')
                }}</span>
              </div>
            </div>
          </form>
        </tab-content>
        <!-- END STEP TWO -->
        <!-- BEGIN STEP THEREE -->
        <tab-content
          title="Datos adicionales"
          class="mb-5"
          :before-change="validateStep3"
        >
          <!-- tab 3 content -->
          <form data-vv-scope="step-3">
            <p>Referencia 1</p>
            <div class="vx-row">
              <div class="vx-col md:w-1/4 w-full mt-5">
                <vs-input
                  label="Nombre"
                  v-model="ReferenceOne.name"
                  class="w-full"
                  name="reference_one_name"
                  v-validate="'required'"
                />
                <span class="text-danger">{{
                  errors.first('step-3.reference_one_name')
                }}</span>
              </div>
              <div class="vx-col md:w-1/4 w-full mt-5">
                <vs-input
                  label="Parentesco"
                  v-model="ReferenceOne.relationship"
                  class="w-full"
                  name="reference_one_relationship"
                  v-validate="'required'"
                />
                <span class="text-danger">{{
                  errors.first('step-3.reference_one_relationship')
                }}</span>
              </div>
              <div class="vx-col md:w-1/4 w-full mt-5">
                <vs-input
                  label="Dirección"
                  v-model="ReferenceOne.address"
                  class="w-full"
                  name="reference_one_address"
                  v-validate="'required'"
                />
                <span class="text-danger">{{
                  errors.first('step-3.reference_one_address')
                }}</span>
              </div>
              <div class="vx-col md:w-1/4 w-full mt-5">
                <label class="vs-input--label">Teléfono</label>
                <masked-input
                  class="vs-inputx vs-input--input normal"
                  style="border: 1px solid rgba(0, 0, 0, 0.2)"
                  v-model="ReferenceOne.telephone"
                  name="reference_one_telephone"
                  v-validate="'required|length:9'"
                  :mask="[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
                  :guide="false"
                  :keep-char-positions="true"
                  :show-mask="true"
                />
                <span class="text-danger">{{
                  errors.first('step-3.reference_one_telephone')
                }}</span>
              </div>
            </div>
            <vs-divider />
            <p>Referencia 2</p>
            <div class="vx-row">
              <div class="vx-col md:w-1/4 w-full mt-5">
                <vs-input
                  label="Nombre"
                  v-model="ReferenceTwo.name"
                  class="w-full"
                  name="reference_two_name"
                  v-validate="'required'"
                />
                <span class="text-danger">{{
                  errors.first('step-3.reference_two_name')
                }}</span>
              </div>
              <div class="vx-col md:w-1/4 w-full mt-5">
                <vs-input
                  label="Parentesco"
                  v-model="ReferenceTwo.relationship"
                  class="w-full"
                  name="reference_two_relationship"
                  v-validate="'required'"
                />
                <span class="text-danger">{{
                  errors.first('step-3.reference_two_relationship')
                }}</span>
              </div>
              <div class="vx-col md:w-1/4 w-full mt-5">
                <vs-input
                  label="Dirección"
                  v-model="ReferenceTwo.address"
                  class="w-full"
                  name="reference_two_address"
                  v-validate="'required'"
                />
                <span class="text-danger">{{
                  errors.first('step-3.reference_two_address')
                }}</span>
              </div>
              <div class="vx-col md:w-1/4 w-full mt-5">
                <label class="vs-input--label">Teléfono</label>
                <masked-input
                  class="vs-inputx vs-input--input normal"
                  style="border: 1px solid rgba(0, 0, 0, 0.2)"
                  v-model="ReferenceTwo.telephone"
                  name="reference_two_telephone"
                  v-validate="'required|length:9'"
                  :mask="[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
                  :guide="false"
                  :keep-char-positions="true"
                  :show-mask="true"
                />
                <span class="text-danger">{{
                  errors.first('step-3.reference_two_telephone')
                }}</span>
              </div>
            </div>
            <vs-divider />
            <div class="vx-row">
              <div class="vx-col md:w-1/3 w-full mt-5">
                <label class="vs-input--label">Celular</label>
                <masked-input
                  class="vs-inputx vs-input--input normal"
                  style="border: 1px solid rgba(0, 0, 0, 0.2)"
                  v-model="Mobile"
                  name="mobile"
                  v-validate="'required|length:9'"
                  :mask="[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
                  :guide="false"
                  :keep-char-positions="true"
                  :show-mask="true"
                />
                <span class="text-danger">{{
                  errors.first('step-3.mobile')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input
                  label="Email"
                  v-model="Email"
                  class="w-full"
                  name="email"
                  v-validate="'email'"
                />
                <span class="text-danger">{{
                  errors.first('step-3.email')
                }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <label class="vs-input--label"
                  >Actividad ecónomica a la que se dedica</label
                >
                <v-select
                  :options="[
                    'Asalariado',
                    'Comerciante individual',
                    'Comerciante informal',
                  ]"
                  :dir="$vs.rtl ? 'rtl' : 'ltr'"
                  name="economic_activity"
                  v-validate="'required'"
                  v-model="EconomicActivity"
                />
                <span class="text-danger">{{
                  errors.first('step-3.economic_activity')
                }}</span>
              </div>
            </div>
            <div class="vx-row" v-if="showItem('Cambiar usuario encargado')">
              <div class="vx-col w-full mt-5">
                <label class="vs-input--label">Usuario encargado</label>
                <v-select
                  :options="users"
                  @search="onSearch"
                  :filterable="false"
                  label="name"
                  v-model="user"
                  name="user"
                  v-validate="'required'"
                />
                <span class="text-danger">{{
                  errors.first('step-3.user')
                }}</span>
              </div>
            </div>
          </form>
        </tab-content>
        <!-- END STEP THREE -->
        <!-- BEGIN STEP FOUR -->
        <tab-content
          title="Fotografía"
          class="mb-5"
          :before-change="validateStep4"
        >
          <form data-vv-scope="step-4">
            <div class="row">
              <UploadImages
                :max="1"
                maxError="Solo una foto"
                uploadMsg="Seleccione una foto del cliente"
                fileError="Error :("
                @changed="handleImages"
              />
              <vs-divider color="danger" v-if="customer.error">{{
                customer.error
              }}</vs-divider>
            </div>
          </form>
        </tab-content>
        <!-- END STEP FOUR -->
        <!-- BEGIN STEP FIVE -->
        <tab-content title="Casa" class="mb-5" :before-change="validateStep5">
          <form data-vv-scope="step-5">
            <div class="row">
              <UploadImages
                :max="1"
                maxError="Solo una foto"
                uploadMsg="Seleccione la foto de la casa del cliente"
                fileError="Error :("
                @changed="handleImagesHouse"
              />
              <vs-divider color="danger" v-if="customer.error">{{
                customer.error
              }}</vs-divider>
            </div>
          </form>
        </tab-content>
        <!-- END STEP FIVE -->
        <!-- BEGIN STEP SIX -->
        <tab-content :title="endPopupCustomer.tittle" class="mb-5">
          <div class="vx-row">
            <div class="vx-col md:w-1/2 w-full mt-5">
              <h1>{{ endPopupCustomer.text }}</h1>
            </div>
          </div>
        </tab-content>
        <!-- END STEP SIX-->
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
import { eight } from '../../utils/eight';
import { getPermit } from '../../utils/getPermit';
import Datepicker from 'vuejs-datepicker';
import es from 'vuejs-datepicker/src/locale/translations/es';
import MaskedInput from 'vue-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import VueMoment from 'vue-moment';
import UploadImages from 'vue-upload-drop-images';
import _ from 'lodash';

const moment = require('moment');

Vue.use(VueMoment, {
  moment,
});
// BEGIN VALIDATIONES
Vue.directive('VeeValidate', VeeValidate);
Vue.use(VeeValidate, {
  inject: true,
});

Validator.extend('cuivalid', {
  getMessage: (field) => 'DPI no válido',
  validate: (value) => eight.cuiIsValid(value),
});

Validator.extend('nitvalid', {
  getMessage: (field) => 'NIT no válido',
  validate: (value) => eight.nitIsValid(value),
});
const dict = {
  custom: {
    first_name: {
      required: 'El primer nombre es requerido',
      alpha: 'El primer nombre solo puede contener caracteres alfabéticos',
    },
    first_lastname: {
      required: 'El primer apellido es requerido',
      alpha: 'El primer apellido solo puede contener caracteres alfabéticos',
    },
    second_lastname: {
      required: 'El segundo apellido es requerido',
      alpha: 'El segundo apellido solo puede contener caracteres alfabéticos',
    },
    married_name: {
      required: 'El apellido de casada es requerido',
      alpha: 'El apellido de casada solo puede contener caracteres alfabéticos',
    },
    cui_valid: {
      required: 'El DPI es requerido',
      cuivalid: 'DPI no válido',
    },
    nit_valid: {
      nitvalid: 'NIT no válido',
    },
    date_birthday: {
      required: 'La fecha de nacimiento es requerida',
    },
    age_valid: {
      required: 'La edad es requerida',
      numeric: 'La edad solo puede contener caracteres numéricos',
      min_value: 'La persona debe ser mayor de edad',
    },
    gender: {
      required: 'El sexo es requerido',
    },
    pepoble_depend: {
      required: 'La campo es requerido',
      numeric: 'El campo solo puede contener caracteres numéricos',
    },
    civil_satus: {
      required: 'El estado civil es requerido',
    },
    nationality_valid: {
      required: 'La nacionalidad es requerida',
      alpha: 'La nacionalidad solo puede contener caracteres alfabéticos',
    },
    // VALIDATIONS STEP 2
    address: {
      required: 'La dirección es requerida',
    },
    departament: {
      required: 'El departamento es requerido',
    },
    town: {
      required: 'El municipio es requerido',
    },
    telephone: {
      length: 'El número de teléfono no es válido',
    },
    home: {
      required: 'La residencia es requerida',
    },
    time_home: {
      required: 'El tiempo de residencia es requerida',
    },
    monthly_payment: {
      required: 'El pago mensual es requerido',
    },
    mobile: {
      required: 'El número de celular es requerido',
      length: 'El número de celular no es válido',
    },
    email: {
      email: 'El email no es válido',
    },
    economic_activity: {
      required: 'Este campo es requerido',
    },
    car_brend: {
      required_if: 'La marca de vehículo es requerida',
    },
    car_year: {
      required_if: 'El año del vehículo es requerido',
    },
    car_licence_plates: {
      required_if: 'Las placas del vehículo son requeridas',
    },

    reference_one_name: {
      required: 'Este campo es requerido',
    },
    reference_one_relationship: {
      required: 'Este campo es requerido',
    },
    reference_one_address: {
      required: 'Este campo es requerido',
    },
    reference_one_telephone: {
      required: 'Este campo es requerido',
      length: 'El número de teléfono no es válido',
    },
    reference_two_name: {
      required: 'Este campo es requerido',
    },
    reference_two_relationship: {
      required: 'Este campo es requerido',
    },
    reference_two_address: {
      required: 'Este campo es requerido',
    },
    reference_two_telephone: {
      required: 'Este campo es requerido',
      length: 'El número de teléfono no es válido',
    },
    user: {
      required: 'El encargado es requerido',
    },
  },
};
Validator.localize('es', dict);
// END VALIDATIONES
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
      civil_satus_male: [
        'Soltero',
        'Comprometido',
        'En Relación',
        'Casado',
        'Unión libre',
        'Separado',
        'Divorciado',
        'Viudo',
        'Noviazgo',
      ],
      civil_satus_female: [
        'Soltera',
        'Comprometida',
        'En Relación',
        'Casada',
        'Unión libre',
        'Separada',
        'Divorciada',
        'Viuda',
        'Noviazgo',
      ],
      civil_status_select: [],
      customer: {
        photo: '',
        error: '',
        house: '',
      },
      idCustomer: 0,
      endPopupCustomer: {
        tittle: 'Guardar cliente',
        text: 'Listo, ya puede guardar al cliente',
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
      // Datepicker leguaje
      language: es,
      showNewClient: false,
      // Data formlario
      FirstName: '',
      SecondName: '',
      FirstLastName: '',
      SecondLastName: '',
      MarriedName: '',
      Dpi: '',
      Nit: '',
      BirthDate: '',
      Age: '',
      Gender: '',
      PeopleDepend: '',
      CivilStatus: '',
      Nationality: 'guatemalteco',
      // END
      // Data Formulario Step 2
      Address: '',
      Suburb: '',
      Zone: '',
      Departament: '',
      Town: '',
      Telephone: '',
      Home: '',
      TimeHome: '',
      MonthlyPayment: '',
      // END
      // Data Formulario Step 3
      Mobile: '',
      Email: '',
      EconomicActivity: '',
      // STEP FOUR
      ReferenceOne: {
        name: '',
        relationship: '',
        address: '',
        telephone: '',
      },
      ReferenceTwo: {
        name: '',
        relationship: '',
        address: '',
        telephone: '',
      },
      user: '',
      users: [],
      // DATA LIST
      Departaments: [],
      Towns: [],
      LoadingDepartaments: false,
      LoadingTwons: false,
    };
  },
  methods: {
    getDate18YearsAgo() {
      const dateInit = moment();
      const getYear = dateInit.year();
      const year = getYear - 18;
      return moment(`01-01-${year} 00:00:00`, 'MM-DD-YYYY').toDate();
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
    changeGender(gender) {
      if (gender === 'Masculino') {
        this.civil_status_select = this.civil_satus_male;
        this.CivilStatus = '';
      } else {
        this.civil_status_select = this.civil_satus_female;
        this.CivilStatus = '';
      }
    },
    showItem(namePermit) {
      return getPermit.showItem(namePermit);
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
    getDepartaments(value) {
      let vm = this;
      vm.LoadingDepartaments = true;
      axios
        .get('/api/departament')
        .then((response) => {
          vm.Departaments = response.data;
          vm.Departament = vm.Departaments.find((x) => x.name === 'Sololá');
          vm.getTowns(value);
          vm.LoadingDepartaments = false;
        })
        .catch((error) => {
          console.log(error);
          vm.LoadingDepartaments = false;
        });
    },
    getTowns(value) {
      let vm = this;
      vm.LoadingTwons = true;
      if (value === true) vm.Town = '';
      axios
        .get(`/api/town?id=${vm.Departament.id}`)
        .then((response) => {
          vm.Towns = response.data;
          vm.LoadingTwons = false;
        })
        .catch((error) => {
          console.log(error);
          vm.LoadingTwons = false;
        });
    },
    validateStep1() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step-1').then((result) => {
          if (result) {
            resolve(true);
          } else {
            reject('Revise los datos ingresados');
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
            reject('Revise los datos ingresados');
          }
        });
      });
    },
    validateStep3() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step-3').then((result) => {
          if (result) {
            resolve(true);
          } else {
            reject('Revise los datos ingresados');
          }
        });
      });
    },
    validateStep4() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step-4').then((result) => {
          if (result) {
            if (this.customer.photo === '') {
              reject(true);
              this.customer.error = 'La foto es requerida';
              this.$vs.notify({
                title: 'Error',
                color: 'danger',
                position: 'top-right',
                text: 'Revise el formulario',
              });
            } else {
              this.customer.error = '';
            }
            resolve(true);
          } else {
            reject(true);
            this.$vs.notify({
              title: 'Error',
              color: 'danger',
              position: 'top-right',
              text: 'Revise el formulario',
            });
          }
        });
      });
    },
    validateStep5() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step-5').then((result) => {
          if (result) {
            if (this.customer.house === '') {
              reject(true);
              this.customer.error = 'La foto de la casa del cliente requerida';
              this.$vs.notify({
                title: 'Error',
                color: 'danger',
                position: 'top-right',
                text: 'Revise el formulario',
              });
            } else {
              this.customer.error = '';
            }
            resolve(true);
          } else {
            reject(true);
            this.$vs.notify({
              title: 'Error',
              color: 'danger',
              position: 'top-right',
              text: 'Revise el formulario',
            });
          }
        });
      });
    },
    save() {
      let vm = this;
      vm.$vs.loading();
      const formData = new FormData();
      formData.append('firstName', this.FirstName);
      formData.append('secondName', this.SecondName);
      formData.append('firstLastName', this.FirstLastName);
      formData.append('secondLastName', this.SecondLastName);
      formData.append('marriedName', this.MarriedName);
      formData.append('dpi', this.Dpi);
      formData.append('nit', this.Nit);
      formData.append('birthDate', this.convertDate(this.BirthDate));
      formData.append('age', this.Age);
      formData.append('gender', this.Gender);
      formData.append('peopleDepend', this.PeopleDepend);
      formData.append('civilStatus', this.CivilStatus);
      formData.append('nationality', this.Nationality);
      formData.append('address', this.Address);
      formData.append('suburb', this.Suburb);
      formData.append('zone', this.Zone);
      formData.append('idTown', this.Town.id);
      formData.append('telephone', this.Telephone);
      formData.append('home', this.Home);
      formData.append('timeHome', this.TimeHome);
      formData.append('monthlyPayment', this.MonthlyPayment);
      formData.append('mobile', this.Mobile);
      formData.append('email', this.Email);
      formData.append('economicActivity', this.EconomicActivity);
      formData.append('referenceOneName', this.ReferenceOne.name);
      formData.append(
        'referenceOneRelationship',
        this.ReferenceOne.relationship
      );
      formData.append('referenceOneAddress', this.ReferenceOne.address);
      formData.append('referenceOneTelephone', this.ReferenceOne.telephone);
      formData.append('referenceTwoName', this.ReferenceTwo.name);
      formData.append(
        'referenceTwoRelationship',
        this.ReferenceTwo.relationship
      );
      formData.append('referenceTwoAddress', this.ReferenceTwo.address);
      formData.append('referenceTwoTelephone', this.ReferenceTwo.telephone);
      formData.append('dutyManager', this.user.id);
      formData.append('file', this.customer.photo);
      formData.append('house', this.customer.house);
      axios
        .post(`/api/customer`, formData, {
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
            path: `/solicitudes/nuevo/${response.data.id}`,
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
    setSelect(value) {
      this.Departament = value;
      this.getTowns(true);
    },
    calculateYear(BirthDate) {
      this.Age = moment().diff(BirthDate, 'years');
    },
    resetForm() {
      let vm = this;
      this.$validator.reset();
      this.$refs.customerWizard.reset();
      vm.idCustomer = 0;
      vm.FirstName = '';
      vm.SecondName = '';
      vm.FirstLastName = '';
      vm.SecondLastName = '';
      vm.MarriedName = '';
      vm.Dpi = '';
      vm.Nit = '';
      vm.BirthDate = '';
      vm.Age = '';
      vm.Gender = '';
      vm.PeopleDepend = '';
      vm.CivilStatus = '';
      vm.Nationality = '';

      vm.Address = '';
      vm.Suburb = '';
      vm.Zone = '';
      vm.Departament = '';
      vm.Town = '';
      vm.Telephone = '';
      vm.Home = '';
      vm.TimeHome = '';
      vm.MonthlyPayment = '';

      vm.FatherName = '';
      vm.MotherName = '';
      vm.Mobile = '';
      vm.Email = '';
      vm.Car = {
        Status: false,
        Brand: '',
        Year: '',
        LicencePlates: '',
      };
      vm.EconomicActivity = '';
    },
    handleImages(files) {
      this.customer.photo = files[0];
    },
    handleImagesHouse(files) {
      this.customer.house = files[0];
    },
  },
  mounted() {
    this.$emit('input');
    this.getDepartaments(true);
    this.user = {
      id: JSON.parse(localStorage.getItem('userInfo')).uid,
      name: JSON.parse(localStorage.getItem('userInfo')).displayName,
    };
    this.BirthDate = this.getDate18YearsAgo();
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
