(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Permits/Permits.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Permits/Permits.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_getPermit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/getPermit */ "./resources/js/src/utils/getPermit.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







vue__WEBPACK_IMPORTED_MODULE_5___default.a.directive("VeeValidate", vee_validate__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_5___default.a.use(vee_validate__WEBPACK_IMPORTED_MODULE_4__["default"], {
  inject: true
});
var dict = {
  custom: {
    name: {
      required: "El nombre del rol es requerido"
    }
  }
};
vee_validate__WEBPACK_IMPORTED_MODULE_4__["Validator"].localize("es", dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "v-select": vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
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
    showItem: function showItem(namePermit) {
      return _utils_getPermit__WEBPACK_IMPORTED_MODULE_6__["getPermit"].showItem(namePermit);
    },
    getIndex: function getIndex(list, id) {
      return list.findIndex(function (e) {
        return e.id == id;
      });
    },
    onSearch: function onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.debounce(function (loading, search, vm) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/searchRol?filter=".concat(search)).then(function (response) {
        vm.rols = response.data.data;
        loading(false);
      }).catch(function (error) {
        console.log(error);
      });
    }, 350),
    newRol: function newRol() {
      this.name = "";
      this.popupRol.title = "Nuevo rol";
      this.popupRol.active = true;
    },
    editRol: function editRol() {
      if (this.rol === null || this.rol === "" || this.rol === {} || _typeof(this.rol) === undefined) {
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
    submitForm: function submitForm() {
      if (this.popupRol.title === "Nuevo rol") this.saveRol();else this.updateRol();
    },
    saveRol: function saveRol() {
      var vm = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          vm.$vs.loading();
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/rol", {
            name: vm.name
          }).then(function (response) {
            vm.$vs.loading.close();
            vm.$vs.notify({
              title: "Listo",
              color: "success",
              position: "top-right",
              text: "".concat(response.data.message)
            });
            vm.popupRol.active = false;
            vm.rol = {
              id: response.data.idRol,
              name: vm.name
            };
            vm.roles = [];
            vm.changeRol();
          }).catch(function (error) {
            vm.$vs.loading.close();
            vm.$vs.notify({
              title: "Error",
              color: "danger",
              position: "top-right",
              text: "".concat(error.response.data.message)
            });
          });
        }
      });
    },
    updateRol: function updateRol() {
      var vm = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          vm.$vs.loading();
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/rol/".concat(vm.rol.id), {
            name: vm.name
          }).then(function (response) {
            vm.$vs.loading.close();
            vm.$vs.notify({
              title: "Listo",
              color: "success",
              position: "top-right",
              text: "".concat(response.data.message)
            });
            vm.popupRol.active = false;
            vm.rol = {
              id: response.data.idRol,
              name: vm.name
            };
            vm.rols = [];
            vm.changeRol();
          }).catch(function (error) {
            vm.$vs.loading.close();
            vm.$vs.notify({
              title: "Error",
              color: "danger",
              position: "top-right",
              text: "".concat(error.response.data.message)
            });
          });
        }
      });
    },
    showAlert: function showAlert(title, message) {
      this.$vs.dialog({
        color: "primary",
        title: title,
        text: message,
        acceptText: "Aceptar"
      });
    },
    dialogDeleteUser: function dialogDeleteUser() {
      if (this.rol === null || this.rol === "" || this.rol === {} || _typeof(this.rol) === undefined) {
        this.showAlert("Error", "Seleccione un rol");
        return;
      }

      if (this.rol.id === 1) {
        this.showAlert("Error", "El administrador no puede eliminarse");
        return;
      }

      var vm = this;
      this.$vs.dialog({
        acceptText: "Si",
        cancelText: "No",
        type: "confirm",
        color: "danger",
        title: "Eliminar",
        text: "¿Desea eliminar este rol?.",
        accept: vm.deleteRol
      });
    },
    deleteRol: function deleteRol() {
      var vm = this;
      vm.$vs.loading();
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete("/api/rol/".concat(vm.rol.id)).then(function (response) {
        vm.$vs.loading.close();
        vm.$vs.notify({
          title: "Listo",
          color: "success",
          position: "top-right",
          text: "".concat(response.data.message)
        });
        vm.rol = null;
        vm.rols = [];
      }).catch(function (error) {
        vm.$vs.loading.close();
        vm.$vs.notify({
          title: "Error",
          color: "danger",
          position: "top-right",
          text: "".concat(error.response.data.message)
        });
      });
    },
    getPermits: function () {
      var _getPermits = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var vm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                vm = this;
                vm.$vs.loading();
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/getPermits").then(function (response) {
                  vm.$vs.loading.close();
                  vm.permits = response.data;
                }).catch(function (error) {
                  vm.$vs.loading.close();
                  console.log(error);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPermits() {
        return _getPermits.apply(this, arguments);
      }

      return getPermits;
    }(),
    changeRol: function () {
      var _changeRol = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var vm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.rol === null || this.rol === "" || this.rol === {} || _typeof(this.rol) === undefined)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                if (!(this.permit === null || this.permit === "" || this.permit === {} || _typeof(this.permit) === undefined)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                vm = this;
                vm.$vs.loading();
                _context2.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/getPermit/".concat(vm.rol.id, "/").concat(vm.permit.id)).then(function (response) {
                  vm.$vs.loading.close();
                  vm.myPermits = response.data;
                }).catch(function (error) {
                  vm.$vs.loading.close();
                  console.log(error);
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function changeRol() {
        return _changeRol.apply(this, arguments);
      }

      return changeRol;
    }(),
    onUpdatePermit: function onUpdatePermit(id) {
      this.updatePermit(id, this);
    },
    updatePermit: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.debounce(function (id, vm) {
      if (vm.rol.id === 1) {
        vm.showAlert("Error", "Los permisos del administrador no pueden editarse");
        vm.changeRol();
        return;
      }

      vm.$vs.loading();
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/updatePermit/".concat(id), {
        status: vm.myPermits[vm.getIndex(vm.myPermits, id)].status
      }).then(function (response) {
        vm.$vs.loading.close();
        vm.$vs.notify({
          title: "Listo",
          color: "success",
          position: "top-right",
          text: "".concat(response.data.message)
        });
        vm.changeRol();
      }).catch(function (error) {
        vm.$vs.loading.close();
        vm.$vs.notify({
          title: "Error",
          color: "danger",
          position: "top-right",
          text: "".concat(error.response.data.message)
        });
      });
    }, 350)
  },
  mounted: function mounted() {
    this.getPermits();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Permits/Permits.vue?vue&type=template&id=957ca4f2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Permits/Permits.vue?vue&type=template&id=957ca4f2& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.showItem("Ver lista de roles")
        ? _c("vx-card", { attrs: { title: "Roles" } }, [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full mt-5" },
                [
                  _c("label", { staticClass: "vs-input--label" }, [
                    _vm._v("Rol"),
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      options: _vm.rols,
                      filterable: false,
                      label: "name",
                    },
                    on: { search: _vm.onSearch, input: _vm.changeRol },
                    model: {
                      value: _vm.rol,
                      callback: function ($$v) {
                        _vm.rol = $$v
                      },
                      expression: "rol",
                    },
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "btn-group" },
                    [
                      _vm.showItem("Crear rol")
                        ? _c(
                            "vs-button",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.newRol()
                                },
                              },
                            },
                            [_vm._v("Nuevo rol")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.showItem("Editar rol")
                        ? _c(
                            "vs-button",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.editRol()
                                },
                              },
                            },
                            [_vm._v("Editar rol")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.showItem("Eliminar rol")
                        ? _c(
                            "vs-button",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.dialogDeleteUser()
                                },
                              },
                            },
                            [_vm._v("Eliminar rol")]
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm.showItem("Ver permisos")
        ? _c("vx-card", { attrs: { title: "Permisos" } }, [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full mt-5" },
                [
                  _c("label", { staticClass: "vs-input--label" }, [
                    _vm._v("Módulos"),
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      options: _vm.permits,
                      filterable: true,
                      label: "name",
                    },
                    on: { input: _vm.changeRol },
                    model: {
                      value: _vm.permit,
                      callback: function ($$v) {
                        _vm.permit = $$v
                      },
                      expression: "permit",
                    },
                  }),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "ul",
                { staticClass: "vx-col w-full mt-5" },
                _vm._l(_vm.myPermits, function (item) {
                  return _c(
                    "li",
                    { key: item.id },
                    [
                      _c("label", [_vm._v(_vm._s(item.name))]),
                      _vm._v(" "),
                      _c("vs-switch", {
                        attrs: {
                          disabled: !_vm.showItem(
                            "Activar o desactivar Permiso"
                          ),
                        },
                        on: {
                          change: function ($event) {
                            return _vm.onUpdatePermit(item.id)
                          },
                        },
                        model: {
                          value:
                            _vm.myPermits[_vm.getIndex(_vm.myPermits, item.id)]
                              .status,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.myPermits[
                                _vm.getIndex(_vm.myPermits, item.id)
                              ],
                              "status",
                              $$v
                            )
                          },
                          expression:
                            "\n                            myPermits[getIndex(myPermits, item.id)].status\n                        ",
                        },
                      }),
                    ],
                    1
                  )
                }),
                0
              ),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: { title: _vm.popupRol.title, active: _vm.popupRol.active },
          on: {
            "update:active": function ($event) {
              return _vm.$set(_vm.popupRol, "active", $event)
            },
          },
        },
        [
          _c("form", [
            _c(
              "div",
              { staticClass: "con-exemple-prompt" },
              [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mt-5" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'",
                          },
                        ],
                        staticClass: "w-full",
                        attrs: { label: "Nombre", name: "name" },
                        on: { input: _vm.changeRol },
                        model: {
                          value: _vm.name,
                          callback: function ($$v) {
                            _vm.name = $$v
                          },
                          expression: "name",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.errors.first("name"))),
                      ]),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    staticClass: "mt-5 block",
                    attrs: { type: "filled" },
                    on: {
                      click: function ($event) {
                        return _vm.submitForm()
                      },
                    },
                  },
                  [_vm._v("Guardar")]
                ),
              ],
              1
            ),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/utils/getPermit.js":
/*!*********************************************!*\
  !*** ./resources/js/src/utils/getPermit.js ***!
  \*********************************************/
/*! exports provided: getPermit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPermit", function() { return getPermit; });
var getPermit = {
  showItem: function showItem(namePermit) {
    // IF UNDEFINED PERMITS RETURN FALSE FOREVER
    if (typeof localStorage.getItem("permitKey") === "undefined") {
      return false;
    } else {
      var permits = JSON.parse(localStorage.getItem("permitKey"));

      var _getPermit = permits.find(function (x) {
        return x.name === namePermit && x.status === 1;
      });

      if (typeof _getPermit === "undefined") {
        return false;
      } else {
        return true;
      }
    }
  }
};

/***/ }),

/***/ "./resources/js/src/views/Permits/Permits.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/Permits/Permits.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Permits_vue_vue_type_template_id_957ca4f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Permits.vue?vue&type=template&id=957ca4f2& */ "./resources/js/src/views/Permits/Permits.vue?vue&type=template&id=957ca4f2&");
/* harmony import */ var _Permits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Permits.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Permits/Permits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Permits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Permits_vue_vue_type_template_id_957ca4f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Permits_vue_vue_type_template_id_957ca4f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Permits/Permits.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Permits/Permits.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/Permits/Permits.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Permits.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Permits/Permits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Permits/Permits.vue?vue&type=template&id=957ca4f2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Permits/Permits.vue?vue&type=template&id=957ca4f2& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permits_vue_vue_type_template_id_957ca4f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Permits.vue?vue&type=template&id=957ca4f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Permits/Permits.vue?vue&type=template&id=957ca4f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permits_vue_vue_type_template_id_957ca4f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permits_vue_vue_type_template_id_957ca4f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);