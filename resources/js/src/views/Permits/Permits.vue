<template>
    <div>
        <vx-card title="Roles" v-if="showItem('Ver lista de roles')">
            <div class="vx-row">
                <div class="vx-col w-full mt-5">
                    <label class="vs-input--label">Rol</label>
                    <v-select
                        :options="rols"
                        @search="onSearch"
                        :filterable="false"
                        label="name"
                        v-model="rol"
                        @input="changeRol"
                    />
                    <br />
                    <div class="btn-group">
                        <vs-button
                            @click="newRol()"
                            v-if="showItem('Crear rol')"
                            >Nuevo rol</vs-button
                        >
                        <vs-button
                            @click="editRol()"
                            v-if="showItem('Editar rol')"
                            >Editar rol</vs-button
                        >
                        <vs-button
                            @click="dialogDeleteUser()"
                            v-if="showItem('Eliminar rol')"
                            >Eliminar rol</vs-button
                        >
                    </div>
                </div>
            </div>
        </vx-card>
        <br />
        <vx-card title="Permisos" v-if="showItem('Ver permisos')">
            <div class="vx-row">
                <div class="vx-col w-full mt-5">
                    <label class="vs-input--label">Módulos</label>
                    <v-select
                        :options="permits"
                        :filterable="true"
                        label="name"
                        v-model="permit"
                        @input="changeRol"
                    />
                </div>
            </div>
            <div class="vx-row">
                <ul class="vx-col w-full mt-5">
                    <li v-for="item in myPermits" :key="item.id">
                        <label>{{ item.name }}</label>
                        <vs-switch
                            v-model="
                                myPermits[getIndex(myPermits, item.id)].status
                            "
                            :disabled="!showItem('Activar o desactivar Permiso')"
                            @change="onUpdatePermit(item.id)"
                        />
                    </li>
                </ul>
            </div>
        </vx-card>
        <vs-popup :title="popupRol.title" :active.sync="popupRol.active">
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
                                @input="changeRol"
                            />
                            <span class="text-danger">{{
                                errors.first("name")
                            }}</span>
                        </div>
                    </div>
                    <vs-button
                        type="filled"
                        @click="submitForm()"
                        class="mt-5 block"
                        >Guardar</vs-button
                    >
                </div>
            </form>
        </vs-popup>
    </div>
</template>
<script>
import vSelect from "vue-select";
import axios from "axios";
import _ from "lodash";
import { Validator } from "vee-validate";
import Vue from "vue";
import VeeValidate from "vee-validate";
import { getPermit } from "../../utils/getPermit";

Vue.directive("VeeValidate", VeeValidate);
Vue.use(VeeValidate, {
    inject: true
});
const dict = {
    custom: {
        name: {
            required: "El nombre del rol es requerido"
        }
    }
};
Validator.localize("es", dict);
export default {
    components: {
        "v-select": vSelect
    },
    data() {
        return {
            rol: null,
            rols: [],
            popupRol: {
                title: "Nuevo rol",
                active: false
            },
            name: "",
            idRol: 0,
            permits: [],
            permit: null,
            myPermits: []
        };
    },
    methods: {
        showItem(namePermit) {
            return getPermit.showItem(namePermit);
        },
        getIndex(list, id) {
            return list.findIndex(e => e.id == id);
        },
        onSearch(search, loading) {
            loading(true);
            this.search(loading, search, this);
        },
        search: _.debounce((loading, search, vm) => {
            axios
                .get(`/api/searchRol?filter=${search}`)
                .then(response => {
                    vm.rols = response.data.data;
                    loading(false);
                })
                .catch(error => {
                    console.log(error);
                });
        }, 350),
        newRol() {
            this.name = "";
            this.popupRol.title = "Nuevo rol";
            this.popupRol.active = true;
        },
        editRol() {
            if (
                this.rol === null ||
                this.rol === "" ||
                this.rol === {} ||
                typeof this.rol === undefined
            ) {
                this.showAlert("Error", "Seleccione un rol");
                return;
            }
            if (this.rol.id === 1) {
                this.showAlert("Error", "El administrador no puede editarse");
                return;
            }
            this.name = this.rol.name;
            this.idRol = this.rol.id;
            this.popupRol.title = "Editar rol";
            this.popupRol.active = true;
        },
        submitForm() {
            if (this.popupRol.title === "Nuevo rol") this.saveRol();
            else this.updateRol();
        },
        saveRol() {
            let vm = this;
            this.$validator.validateAll().then(result => {
                if (result) {
                    vm.$vs.loading();
                    axios
                        .post(`/api/rol`, {
                            name: vm.name
                        })
                        .then(response => {
                            vm.$vs.loading.close();
                            vm.$vs.notify({
                                title: "Listo",
                                color: "success",
                                position: "top-right",
                                text: `${response.data.message}`
                            });
                            vm.popupRol.active = false;
                            vm.rol = {
                                id: response.data.idRol,
                                name: vm.name
                            };
                            vm.roles = [];
                            vm.changeRol();
                        })
                        .catch(error => {
                            vm.$vs.loading.close();
                            vm.$vs.notify({
                                title: "Error",
                                color: "danger",
                                position: "top-right",
                                text: `${error.response.data.message}`
                            });
                        });
                }
            });
        },
        updateRol() {
            let vm = this;
            this.$validator.validateAll().then(result => {
                if (result) {
                    vm.$vs.loading();
                    axios
                        .put(`/api/rol/${vm.rol.id}`, {
                            name: vm.name
                        })
                        .then(response => {
                            vm.$vs.loading.close();
                            vm.$vs.notify({
                                title: "Listo",
                                color: "success",
                                position: "top-right",
                                text: `${response.data.message}`
                            });
                            vm.popupRol.active = false;
                            vm.rol = {
                                id: response.data.idRol,
                                name: vm.name
                            };
                            vm.rols = [];
                            vm.changeRol();
                        })
                        .catch(error => {
                            vm.$vs.loading.close();
                            vm.$vs.notify({
                                title: "Error",
                                color: "danger",
                                position: "top-right",
                                text: `${error.response.data.message}`
                            });
                        });
                }
            });
        },
        showAlert(title, message) {
            this.$vs.dialog({
                color: "primary",
                title: title,
                text: message,
                acceptText: "Aceptar"
            });
        },
        dialogDeleteUser() {
            if (
                this.rol === null ||
                this.rol === "" ||
                this.rol === {} ||
                typeof this.rol === undefined
            ) {
                this.showAlert("Error", "Seleccione un rol");
                return;
            }
            if (this.rol.id === 1) {
                this.showAlert("Error", "El administrador no puede eliminarse");
                return;
            }
            let vm = this;
            this.$vs.dialog({
                acceptText: "Si",
                cancelText: "No",
                type: "confirm",
                color: "danger",
                title: `Eliminar`,
                text: "¿Desea eliminar este rol?.",
                accept: vm.deleteRol
            });
        },
        deleteRol() {
            let vm = this;
            vm.$vs.loading();
            axios
                .delete(`/api/rol/${vm.rol.id}`)
                .then(response => {
                    vm.$vs.loading.close();
                    vm.$vs.notify({
                        title: "Listo",
                        color: "success",
                        position: "top-right",
                        text: `${response.data.message}`
                    });
                    vm.rol = null;
                    vm.rols = [];
                })
                .catch(error => {
                    vm.$vs.loading.close();
                    vm.$vs.notify({
                        title: "Error",
                        color: "danger",
                        position: "top-right",
                        text: `${error.response.data.message}`
                    });
                });
        },
        async getPermits() {
            let vm = this;
            vm.$vs.loading();
            await axios
                .get("/api/getPermits")
                .then(response => {
                    vm.$vs.loading.close();
                    vm.permits = response.data;
                })
                .catch(error => {
                    vm.$vs.loading.close();
                    console.log(error);
                });
        },
        async changeRol() {
            if (
                this.rol === null ||
                this.rol === "" ||
                this.rol === {} ||
                typeof this.rol === undefined
            ) {
                return;
            }
            if (
                this.permit === null ||
                this.permit === "" ||
                this.permit === {} ||
                typeof this.permit === undefined
            ) {
                // this.showAlert('Error', 'Seleccione un permiso');
                return;
            }
            let vm = this;
            vm.$vs.loading();
            await axios
                .get(`/api/getPermit/${vm.rol.id}/${vm.permit.id}`)
                .then(response => {
                    vm.$vs.loading.close();
                    vm.myPermits = response.data;
                })
                .catch(error => {
                    vm.$vs.loading.close();
                    console.log(error);
                });
        },
        onUpdatePermit(id) {
            this.updatePermit(id, this);
        },
        updatePermit: _.debounce((id, vm) => {
            if (vm.rol.id === 1) {
                vm.showAlert(
                    "Error",
                    "Los permisos del administrador no pueden editarse"
                );
                vm.changeRol();
                return;
            }
            vm.$vs.loading();
            axios
                .put(`/api/updatePermit/${id}`, {
                    status: vm.myPermits[vm.getIndex(vm.myPermits, id)].status
                })
                .then(response => {
                    vm.$vs.loading.close();
                    vm.$vs.notify({
                        title: "Listo",
                        color: "success",
                        position: "top-right",
                        text: `${response.data.message}`
                    });
                    vm.changeRol();
                })
                .catch(error => {
                    vm.$vs.loading.close();
                    vm.$vs.notify({
                        title: "Error",
                        color: "danger",
                        position: "top-right",
                        text: `${error.response.data.message}`
                    });
                });
        }, 350)
    },
    mounted() {
        this.getPermits();
    }
};
</script>
