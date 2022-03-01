<template>
    <div>
        <vx-card title="Descargar solicitud">
            <div id="printMe">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row p-2 table-active">
                                    <div class="col-md-6">
                                        <img
                                            src="/images/crediprendas.png"
                                            width="50%"
                                        />
                                    </div>

                                    <div class="col-md-6 text-right">
                                        <p class="font-weight-bold mb-1">
                                            SOLICITUD DE CRÉDITO
                                        </p>
                                        <p class="text-muted">
                                            {{
                                                convertDate(request.created_at)
                                            }}
                                        </p>
                                    </div>
                                </div>
                                <div class="row pb-3 p-3">
                                    <p class="font-weight-bold mb-1">
                                        DATOS DEL SOLICITANTE
                                    </p>
                                </div>
                                <div class="row pb-3 p-3">
                                    <div class="col-md-4 text-left">
                                        <p>
                                            Primer nombre:
                                            {{ customer.firstName }}
                                        </p>
                                        <p>
                                            Primer apellido:
                                            {{ customer.firstLastName }}
                                        </p>
                                        <p>DPI: {{ customer.dpi }}</p>
                                        <p>Edad: {{ customer.age }} años</p>
                                        <p>
                                            Estado civil:
                                            {{ customer.civilStatus }}
                                        </p>
                                        <p>
                                            Colonia:
                                            {{ isNull(customer.suburb) }}
                                        </p>
                                        <p>Municipio: {{ townCustomer }}</p>
                                        <p>
                                            Tiempo de residir:
                                            {{ customer.timeHome }}
                                        </p>
                                        <p>
                                            Nombre del padre:
                                            {{ customer.fatherName }}
                                        </p>
                                        <p>Celular: {{ customer.mobile }}</p>
                                        <p>
                                            Actividad ecónomica a la que se
                                            dedica:
                                            {{ customer.economicActivity }}
                                        </p>
                                    </div>
                                    <div class="col-md-4 text-left">
                                        <p>
                                            Segundo nombre:
                                            {{ customer.secondName }}
                                        </p>
                                        <p>
                                            Segundo apellido:
                                            {{ customer.secondLastName }}
                                        </p>
                                        <p>NIT: {{ isNull(customer.nit) }}</p>
                                        <p>Sexo: {{ customer.gender }}</p>
                                        <p>
                                            Nacionalidad:
                                            {{ customer.nationality }}
                                        </p>
                                        <p>Zona: {{ isNull(customer.zone) }}</p>
                                        <p>
                                            Teléfono de residencia:
                                            {{ isNull(customer.telephone) }}
                                        </p>
                                        <p>
                                            Pago mensual:
                                            {{ customer.monthlyPayment }}
                                        </p>
                                        <p>
                                            Nombre de la madre:
                                            {{ customer.motherName }}
                                        </p>
                                        <p>
                                            Email: {{ isNull(customer.email) }}
                                        </p>
                                    </div>
                                    <div class="col-md-4 text-left">
                                        <p>
                                            Apellido de casada:
                                            {{ isNull(customer.marriedName) }}
                                        </p>
                                        <p>
                                            &nbsp;
                                        </p>
                                        <p>
                                            Fecha de nacimiento:
                                            {{
                                                convertDate(customer.birthDate)
                                            }}
                                        </p>
                                        <p>
                                            ¿Cuántas personas dependen de
                                            usted?: {{ customer.peopleDepend }}
                                        </p>
                                        <p>Dirección: {{ customer.address }}</p>
                                        <p>
                                            Departamento:
                                            {{ departamentCustomer }}
                                        </p>
                                        <p>Residencia: {{ customer.home }}</p>
                                        <p>
                                            &nbsp;
                                        </p>
                                        <p>
                                            &nbsp;
                                        </p>
                                        <p>
                                            Vehiculo:
                                            {{
                                                customer.carStatus == 1
                                                    ? "Si"
                                                    : "No"
                                            }}{{
                                                customer.carStatus == 1
                                                    ? ` Marca: ${customer.carBrand} Año: ${customer.carYear} Placas: ${customer.carLicencePlates}`
                                                    : ""
                                            }}
                                        </p>
                                    </div>
                                </div>
                                <div class="row pb-3 p-3">
                                    <p class="font-weight-bold mb-1" v-if="guarantor!=null">
                                        DATOS DEL FIADOR
                                    </p>
                                </div>
                                <div class="row pb-3 p-3" v-if="guarantor!==null">
                                    <div class="col-md-4 text-left">
                                        <p>
                                            Primer nombre:
                                            {{ guarantor.firstName }}
                                        </p>
                                        <p>
                                            Primer apellido:
                                            {{ guarantor.firstLastName }}
                                        </p>
                                        <p>DPI: {{ guarantor.dpi }}</p>
                                        <p>Edad: {{ guarantor.age }} años</p>
                                        <p>
                                            Estado civil:
                                            {{ guarantor.civilStatus }}
                                        </p>
                                        <p>
                                            Colonia:
                                            {{ isNull(guarantor.suburb) }}
                                        </p>
                                        <p>Municipio: {{ townGuarantor }}</p>
                                        <p>
                                            Tiempo de residir:
                                            {{ guarantor.timeHome }}
                                        </p>
                                        <p>
                                            Nombre del padre:
                                            {{ guarantor.fatherName }}
                                        </p>
                                        <p>Celular: {{ guarantor.mobile }}</p>
                                        <p>
                                            Actividad ecónomica a la que se
                                            dedica:
                                            {{ guarantor.economicActivity }}
                                        </p>
                                    </div>
                                    <div class="col-md-4 text-left">
                                        <p>
                                            Segundo nombre:
                                            {{ guarantor.secondName }}
                                        </p>
                                        <p>
                                            Segundo apellido:
                                            {{ guarantor.secondLastName }}
                                        </p>
                                        <p>NIT: {{ isNull(guarantor.nit) }}</p>
                                        <p>Sexo: {{ guarantor.gender }}</p>
                                        <p>
                                            Nacionalidad:
                                            {{ guarantor.nationality }}
                                        </p>
                                        <p>Zona: {{ isNull(guarantor.zone) }}</p>
                                        <p>
                                            Teléfono de residencia:
                                            {{ isNull(guarantor.telephone) }}
                                        </p>
                                        <p>
                                            Pago mensual:
                                            {{ guarantor.monthlyPayment }}
                                        </p>
                                        <p>
                                            Nombre de la madre:
                                            {{ guarantor.motherName }}
                                        </p>
                                        <p>
                                            Email: {{ isNull(guarantor.email) }}
                                        </p>
                                    </div>
                                    <div class="col-md-4 text-left">
                                        <p>
                                            Apellido de casada:
                                            {{ isNull(guarantor.marriedName) }}
                                        </p>
                                        <p>
                                            &nbsp;
                                        </p>
                                        <p>
                                            Fecha de nacimiento:
                                            {{
                                                convertDate(guarantor.birthDate)
                                            }}
                                        </p>
                                        <p>
                                            ¿Cuántas personas dependen de
                                            usted?: {{ guarantor.peopleDepend }}
                                        </p>
                                        <p>Dirección: {{ guarantor.address }}</p>
                                        <p>
                                            Departamento:
                                            {{ departamentGuarantor }}
                                        </p>
                                        <p>Residencia: {{ guarantor.home }}</p>
                                        <p>
                                            &nbsp;
                                        </p>
                                        <p>
                                            &nbsp;
                                        </p>
                                        <p>
                                            Vehiculo:
                                            {{
                                                guarantor.carStatus == 1
                                                    ? "Si"
                                                    : "No"
                                            }}{{
                                                guarantor.carStatus == 1
                                                    ? ` Marca: ${guarantor.carBrand} Año: ${guarantor.carYear} Placas: ${guarantor.carLicencePlates}`
                                                    : ""
                                            }}
                                        </p>
                                    </div>
                                </div>
                                <div class="row pb-3 p-3">
                                    <p class="font-weight-bold mb-1">
                                        DETALLES DEL CRÉDITO
                                    </p>
                                </div>
                                <div class="row pb-3 p-3">
                                    <div class="col-md-4 text-left">
                                        <p>Saldo a financiar: {{mymoney(request.balanceFinance)}}</p>
                                    </div>
                                    <div class="col-md-4 text-left">
                                        <p>Plazo solicitado: {{request.terms}}</p>
                                    </div>
                                    <div class="col-md-4 text-left">
                                        <p>Primera cuota: {{mymoney(request.creditsInstallments)}}</p>
                                    </div>
                                </div>
                                <div class="row pb-3 p-3" v-if="guarantor!=null">
                                    <div class="col-md-4 text-center">
                                        <p>
                                            F.Cliente _______________________
                                        </p>
                                    </div>
                                    <div class="col-md-4 text-center">
                                        <p>
                                            F.Fiador _______________________
                                        </p>
                                    </div>
                                    <div class="col-md-4 text-center">
                                        <p>
                                            Receptor ________________________
                                        </p>
                                    </div>
                                </div>
                                <div class="row pb-3 p-3" v-else>
                                    <div class="col-md-6 text-center">
                                        <p>
                                            F.Cliente _______________________
                                        </p>
                                    </div>
                                    <div class="col-md-6 text-center">
                                        <p>
                                            Receptor ________________________
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <vs-button @click="print" class="btnx" type="filled"
                >Imprimir</vs-button
            >
        </vx-card>
    </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import { eight } from "../../utils/eight";
import { numeroaletras } from "../../utils/NumeroALetras";
import VueHtmlToPaper from "vue-html-to-paper";
import VueMoment from 'vue-moment'
    const moment = require('moment')

    Vue.use(VueMoment, {
        moment,
    })
const options = {
    name: "_blank",
    specs: ["fullscreen=yes", "titlebar=no", "scrollbars=no"],
    styles: [
        "/css/bootstrap.min.css",
        "/js/bootstrap.min.js",
        "/js/jquery.min.js",
        "/css/voucher.css"
    ]
};

Vue.use(VueHtmlToPaper, options);
export default {
    data() {
        return {
            request: {},
            customer: {},
            guarantor: null,
            departamentCustomer: "",
            townCustomer: "",
            departamentGuarantor: "",
            townGuarantor: ""
        };
    },
    methods: {
        mymoney(value) {
            return eight.money(parseFloat(value));
        },
        isNull(value) {
            if (value === null) return "----";
            return value;
        },
        convertDate(date) {
            return moment(date)
                .locale("es")
                .format("LL");
        },
        async getRequest() {
            let vm = this;
            vm.$vs.loading();
            axios
                .get(`/api/demand/${vm.$route.query.id}`)
                .then(response => {
                    vm.$vs.loading.close();
                    vm.request = response.data.demand;
                    vm.customer = response.data.customer;
                    vm.getDepartament(vm.customer.idTown, "C");
                    vm.getTown(vm.customer.idTown, "C");
                    if (response.data.guarantor !== null) {
                        vm.guarantor = response.data.guarantor;
                        vm.getDepartament(vm.guarantor.idTown, "G");
                        vm.getTown(vm.guarantor.idTown, "G");
                    }
                })
                .catch(error => {
                    console.log(error);
                    vm.$vs.loading.close();
                });
        },
        async getDepartament(id, type) {
            if (typeof id === "undefined") return;
            let vm = this;
            vm.$vs.loading();
            axios
                .get(`/api/departament/${id}`)
                .then(response => {
                    vm.$vs.loading.close();
                    if (type === "C")
                        vm.departamentCustomer = response.data.name;
                    else vm.departamentGuarantor = response.data.name;
                })
                .catch(error => {
                    console.log(error);
                    vm.$vs.loading.close();
                });
        },
        async getTown(id, type) {
            if (typeof id === "undefined") return;
            let vm = this;
            vm.$vs.loading();
            axios
                .get(`/api/town/${id}`)
                .then(response => {
                    vm.$vs.loading.close();
                    if (type === "C") vm.townCustomer = response.data.name;
                    else vm.townGuarantor = response.data.name;
                })
                .catch(error => {
                    console.log(error);
                    vm.$vs.loading.close();
                });
        },
        print() {
            this.$htmlToPaper("printMe");
        }
    },
    mounted() {
        this.getRequest();
    }
};
</script>
