(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/NewRequest.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Request/NewRequest.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_text_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-text-mask */ "./node_modules/vue-text-mask/dist/vueTextMask.js");
/* harmony import */ var vue_text_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_text_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vue_upload_drop_images__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-upload-drop-images */ "./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue");
/* harmony import */ var _utils_getPermit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/getPermit */ "./resources/js/src/utils/getPermit.js");
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













vue__WEBPACK_IMPORTED_MODULE_5___default.a.directive('VeeValidate', vee_validate__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_5___default.a.use(vee_validate__WEBPACK_IMPORTED_MODULE_4__["default"], {
  inject: true
});
var dict = {
  custom: {
    amountToFinance: {
      required: 'El saldo a financiar es requerido'
    },
    terms: {
      required: 'El plazo solicitado es requerido',
      decimal: 'Verifique el plazo solicitado ej: 2.5 o 2 o 2.25'
    },
    percentage: {
      required: 'El campo porcentaje requerido'
    },
    loanRate: {
      required: 'La taza es requerida'
    },
    feeType: {
      required: 'El tipo de cuota es requerido'
    },
    customer: {
      required: 'El cliente es requerido'
    },
    guarantee: {
      required: 'La garantía es requerida'
    }
  }
};
vee_validate__WEBPACK_IMPORTED_MODULE_4__["Validator"].localize('es', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__["TabContent"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_9__["default"],
    'masked-input': vue_text_mask__WEBPACK_IMPORTED_MODULE_6___default.a,
    UploadImages: vue_upload_drop_images__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      customer: '',
      customers: [],
      loanRate: {
        id: 1,
        label: 'Flat'
      },
      loanRateList: [{
        id: 1,
        label: 'Flat'
      }, {
        id: 2,
        label: 'Diaria'
      }],
      isHaveCustomer: false,
      selectedloanRate: {
        percentage: '10',
        feeType: '',
        feeTypeList: [{
          id: 1,
          label: 'Semanal'
        }, {
          id: 2,
          label: 'Catorcenal'
        }, {
          id: 3,
          label: 'Mensual'
        }]
      },
      loanRateFlat: {
        percentage: '10',
        feeType: '',
        feeTypeList: [{
          id: 1,
          label: 'Semanal'
        }, {
          id: 2,
          label: 'Catorcenal'
        }, {
          id: 3,
          label: 'Mensual'
        }]
      },
      loanRateDaily: {
        percentage: '20',
        feeType: {
          id: 1,
          label: 'Diaria'
        },
        feeTypeList: [{
          id: 1,
          label: 'Diaria'
        }]
      },
      mask_quetzal: text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_7___default()({
        prefix: 'Q ',
        suffix: '',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: ',',
        allowDecimal: true,
        decimalSymbol: '.',
        decimalLimit: 2,
        // how many digits allowed after the decimal
        integerLimit: 10,
        // limit length of integer numbers
        allowNegative: false,
        allowLeadingZeroes: false
      }),
      amountToFinance: '',
      terms: '',
      guarantee: {
        name: '',
        photo: [],
        error: ''
      },
      guarantees: [],
      selectedGuarantee: {},
      showSelectGuarantee: false,
      addGuarantee: true
    };
  },
  mounted: function mounted() {
    if (typeof this.$route.params.id !== 'undefined') {
      this.isHaveCustomer = true;
      this.onSearch(this.$route.params.id);
    }
  },
  methods: {
    showItem: function showItem(namePermit) {
      return _utils_getPermit__WEBPACK_IMPORTED_MODULE_11__["getPermit"].showItem(namePermit);
    },
    converMaskToNumber: function converMaskToNumber(value) {
      var myNumber = '';

      for (var i = 0; i < value.length; i += 1) {
        if (value.charAt(i) === 'Q' || value.charAt(i) === ',' || value.charAt(i) === ' ' || value.charAt(i) === '%') {
          continue;
        } else {
          myNumber += value.charAt(i);
        }
      }

      return parseFloat(myNumber).toFixed(2);
    },
    onSearch: function onSearch(search) {
      this.$vs.loading();
      this.search(search, this);
    },
    search: lodash__WEBPACK_IMPORTED_MODULE_8___default.a.debounce(function (search, vm) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/searchCustomer?filter=".concat(search)).then(function (response) {
        if (vm.isHaveCustomer == true) {
          vm.customer = response.data;
          vm.$vs.loading.close();
        } else {
          vm.customers = response.data.data;
          vm.$vs.loading.close();
        }
      }).catch(function (error) {
        console.log(error);
      });
    }, 350),
    handleImages: function handleImages(files) {
      var _this = this;

      this.guarantee.photo = [];
      files.forEach(function (photo) {
        _this.guarantee.photo.push(photo);
      });
    },
    loanRateChange: function loanRateChange() {
      if (this.loanRate.id === 1) {
        this.selectedloanRate = this.loanRateFlat;
      } else {
        this.selectedloanRate = this.loanRateDaily;
      }
    },
    validateStep1: function validateStep1() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.$validator.validateAll('step-1').then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject(true);

            _this2.$vs.notify({
              title: 'Error',
              color: 'danger',
              position: 'top-center',
              text: 'Revise el formulario'
            });
          }
        });
      });
    },
    validateStep2: function validateStep2() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.$validator.validateAll('step-2').then(function (result) {
          if (result) {
            if (_this3.guarantee.photo.length < 1 && _this3.addGuarantee === true) {
              reject(true);
              _this3.guarantee.error = 'La foto es requerida';

              _this3.$vs.notify({
                title: 'Error',
                color: 'danger',
                position: 'top-center',
                text: 'Revise el formulario'
              });
            } else {
              _this3.guarantee.error = '';
            }

            resolve(true);
          } else {
            if (_this3.guarantee.photo.length < 1 && _this3.addGuarantee === true) {
              _this3.guarantee.error = 'La foto es requerida';

              _this3.$vs.notify({
                title: 'Error',
                color: 'danger',
                position: 'top-center',
                text: 'Revise el formulario'
              });
            } else {
              _this3.guarantee.error = '';
            }

            reject(true);

            _this3.$vs.notify({
              title: 'Error',
              color: 'danger',
              position: 'top-center',
              text: 'Revise el formulario'
            });
          }
        });
      });
    },
    getGuarantee: function getGuarantee(value) {
      var vm = this;
      vm.$vs.loading();
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/demand/getGuarantee/".concat(value.id)).then(function (response) {
        var guarantee = response.data;

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
      }).catch(function (error) {
        console.log(error);
      });
    },
    convertDate: function convertDate(date) {
      return new Date(date).toLocaleString('es-GT', {
        timeZone: 'America/Guatemala'
      });
    },
    save: function save() {
      var vm = this;
      vm.$vs.loading();
      var formData = new FormData();
      formData.append('amountToFinance', this.converMaskToNumber(this.amountToFinance));
      formData.append('terms', this.terms);
      formData.append('percentage', this.selectedloanRate.percentage);
      formData.append('loanRate', this.loanRate.label);
      formData.append('feeType', this.selectedloanRate.feeType.label);
      formData.append('idCustomer', this.customer.id);
      formData.append('guarantee', this.guarantee.name);
      formData.append('isRegistred', this.addGuarantee);

      if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(this.selectedGuarantee) || this.selectedGuarantee === null) {
        formData.append('idGuarantee', 0);
      }

      formData.append('idGuarantee', this.selectedGuarantee.id);
      formData.append('numberImages', this.guarantee.photo.length);
      formData.append('user', JSON.parse(localStorage.getItem('userInfo')).uid);

      if (this.guarantee.photo.length > 0) {
        this.guarantee.photo.forEach(function (photo, index) {
          formData.append("files[".concat(index, "]"), photo);
        });
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/demand", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        vm.$vs.loading.close();
        vm.$vs.notify({
          title: 'Listo',
          color: 'success',
          position: 'top-right',
          text: "".concat(response.data.message)
        });
        vm.$router.push({
          path: "/solicitudes"
        });
      }).catch(function (error) {
        vm.$vs.loading.close();
        vm.$vs.notify({
          title: 'Error',
          color: 'danger',
          position: 'top-right',
          text: "".concat(error.response.data.message)
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/NewRequest.vue?vue&type=template&id=5ffdad99&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Request/NewRequest.vue?vue&type=template&id=5ffdad99& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _vm.showItem("Ver solicitud")
    ? _c(
        "div",
        [
          _c(
            "vx-card",
            { attrs: { title: "Nueva solicitud" } },
            [
              _c(
                "form-wizard",
                {
                  ref: "customerWizard",
                  attrs: {
                    color: "rgba(var(--vs-primary), 1)",
                    errorColor: "rgba(var(--vs-danger), 1)",
                    title: null,
                    subtitle: null,
                    finishButtonText: "Guardar",
                    nextButtonText: "Siguiente",
                    backButtonText: "Anterior",
                  },
                  on: { "on-complete": _vm.save },
                },
                [
                  _c(
                    "tab-content",
                    {
                      staticClass: "mb-5",
                      attrs: {
                        title: "Crédito",
                        "before-change": _vm.validateStep1,
                      },
                    },
                    [
                      _c("form", { attrs: { "data-vv-scope": "step-1" } }, [
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col w-full mt-5" },
                            [
                              _c("label", { staticClass: "vs-input--label" }, [
                                _vm._v("Monto a financiar"),
                              ]),
                              _vm._v(" "),
                              _c("masked-input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'",
                                  },
                                ],
                                staticClass: "vs-inputx vs-input--input normal",
                                staticStyle: {
                                  border: "1px solid rgba(0, 0, 0, 0.2)",
                                },
                                attrs: {
                                  name: "amountToFinance",
                                  mask: _vm.mask_quetzal,
                                  guide: false,
                                  "keep-char-positions": true,
                                  "show-mask": true,
                                },
                                model: {
                                  value: _vm.amountToFinance,
                                  callback: function ($$v) {
                                    _vm.amountToFinance = $$v
                                  },
                                  expression: "amountToFinance",
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-danger" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.first("step-1.amountToFinance")
                                  )
                                ),
                              ]),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
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
                                    value: "required|decimal:2",
                                    expression: "'required|decimal:2'",
                                  },
                                ],
                                staticClass: "w-full",
                                attrs: {
                                  type: "number",
                                  name: "terms",
                                  label: "Plazo soliticado(meses)",
                                },
                                model: {
                                  value: _vm.terms,
                                  callback: function ($$v) {
                                    _vm.terms = $$v
                                  },
                                  expression: "terms",
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-danger" }, [
                                _vm._v(
                                  _vm._s(_vm.errors.first("step-1.terms"))
                                ),
                              ]),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col w-full mt-5" },
                            [
                              _c("label", { staticClass: "vs-input--label" }, [
                                _vm._v("Tipo de taza"),
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'",
                                  },
                                ],
                                attrs: {
                                  options: _vm.loanRateList,
                                  name: "loanRate",
                                  label: "label",
                                },
                                on: { input: _vm.loanRateChange },
                                model: {
                                  value: _vm.loanRate,
                                  callback: function ($$v) {
                                    _vm.loanRate = $$v
                                  },
                                  expression: "loanRate",
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-danger" }, [
                                _vm._v(
                                  _vm._s(_vm.errors.first("step-1.loanRate"))
                                ),
                              ]),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
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
                                attrs: {
                                  name: "percentage",
                                  label: "Porcentaje",
                                  icon: "%",
                                  type: "number",
                                },
                                model: {
                                  value: _vm.selectedloanRate.percentage,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.selectedloanRate,
                                      "percentage",
                                      $$v
                                    )
                                  },
                                  expression: "selectedloanRate.percentage",
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-danger" }, [
                                _vm._v(
                                  _vm._s(_vm.errors.first("step-1.percentage"))
                                ),
                              ]),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col w-full mt-5" },
                            [
                              _c("label", { staticClass: "vs-input--label" }, [
                                _vm._v("Tipo de cuota"),
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'",
                                  },
                                ],
                                attrs: {
                                  options: _vm.selectedloanRate.feeTypeList,
                                  name: "feeType",
                                  label: "label",
                                },
                                model: {
                                  value: _vm.selectedloanRate.feeType,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.selectedloanRate,
                                      "feeType",
                                      $$v
                                    )
                                  },
                                  expression: "selectedloanRate.feeType",
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-danger" }, [
                                _vm._v(
                                  _vm._s(_vm.errors.first("step-1.feeType"))
                                ),
                              ]),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col w-full mt-5" },
                            [
                              _c("label", { staticClass: "vs-input--label" }, [
                                _vm._v("Cliente"),
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'",
                                  },
                                ],
                                attrs: {
                                  options: _vm.customers,
                                  name: "customer",
                                  filterable: false,
                                  label: "name",
                                  disabled: _vm.isHaveCustomer,
                                },
                                on: {
                                  search: _vm.onSearch,
                                  input: _vm.getGuarantee,
                                },
                                model: {
                                  value: _vm.customer,
                                  callback: function ($$v) {
                                    _vm.customer = $$v
                                  },
                                  expression: "customer",
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-danger" }, [
                                _vm._v(
                                  _vm._s(_vm.errors.first("step-1.customer"))
                                ),
                              ]),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    {
                      staticClass: "mb-5",
                      attrs: {
                        title: "Garantía",
                        "before-change": _vm.validateStep2,
                      },
                    },
                    [
                      _c(
                        "form",
                        { attrs: { "data-vv-scope": "step-2" } },
                        [
                          _vm.showSelectGuarantee && !_vm.addGuarantee
                            ? _c("div", { staticClass: "vx-row" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "vx-col sm:w-full w-full mb-2",
                                    staticStyle: {
                                      "background-color": "#1aec76",
                                    },
                                  },
                                  [
                                    _c("h2", [
                                      _vm._v(
                                        "\n                Ultima actualización:\n                " +
                                          _vm._s(
                                            _vm.convertDate(
                                              _vm.selectedGuarantee.updated_at
                                            )
                                          ) +
                                          "\n              "
                                      ),
                                    ]),
                                  ]
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showSelectGuarantee && !_vm.addGuarantee
                            ? _c("div", { staticClass: "vx-row" }, [
                                _c(
                                  "div",
                                  { staticClass: "vx-col w-full mt-5" },
                                  [
                                    _c(
                                      "label",
                                      { staticClass: "vs-input--label" },
                                      [_vm._v("Seleccione Garantía")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-select", {
                                      attrs: {
                                        options: _vm.guarantees,
                                        label: "name",
                                      },
                                      model: {
                                        value: _vm.selectedGuarantee,
                                        callback: function ($$v) {
                                          _vm.selectedGuarantee = $$v
                                        },
                                        expression: "selectedGuarantee",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("vs-divider"),
                          _vm._v(" "),
                          _vm.showSelectGuarantee && !_vm.addGuarantee
                            ? _c(
                                "div",
                                { staticClass: "images" },
                                [
                                  _c(
                                    "vs-images",
                                    _vm._l(
                                      _vm.selectedGuarantee.images,
                                      function (image) {
                                        return _c("vs-image", {
                                          key: image.id,
                                          attrs: {
                                            src:
                                              "/uploads/images/" + image.name,
                                          },
                                        })
                                      }
                                    ),
                                    1
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showSelectGuarantee
                            ? _c("div", { staticClass: "vx-row" }, [
                                _c(
                                  "div",
                                  { staticClass: "vx-col w-full mt-5" },
                                  [
                                    _c("label", [_vm._v("Agregar garantía")]),
                                    _vm._v(" "),
                                    _c("vs-switch", {
                                      model: {
                                        value: _vm.addGuarantee,
                                        callback: function ($$v) {
                                          _vm.addGuarantee = $$v
                                        },
                                        expression: "addGuarantee",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.addGuarantee
                            ? _c("div", { staticClass: "vx-row" }, [
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
                                      attrs: {
                                        name: "guarantee",
                                        label: "Garantía",
                                      },
                                      model: {
                                        value: _vm.guarantee.name,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.guarantee, "name", $$v)
                                        },
                                        expression: "guarantee.name",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("step-2.guarantee")
                                        )
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("vs-divider"),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row" },
                            [
                              _c("UploadImages", {
                                attrs: {
                                  max: 10,
                                  maxError: "Maximo de fotos 10",
                                  uploadMsg:
                                    "Seleccione una foto de la garantía",
                                  fileError: "Error :(",
                                },
                                on: { changed: _vm.handleImages },
                              }),
                              _vm._v(" "),
                              _vm.guarantee.error
                                ? _c(
                                    "vs-divider",
                                    { attrs: { color: "danger" } },
                                    [_vm._v(_vm._s(_vm.guarantee.error))]
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
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

/***/ "./resources/js/src/views/Request/NewRequest.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/Request/NewRequest.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewRequest_vue_vue_type_template_id_5ffdad99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewRequest.vue?vue&type=template&id=5ffdad99& */ "./resources/js/src/views/Request/NewRequest.vue?vue&type=template&id=5ffdad99&");
/* harmony import */ var _NewRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewRequest.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Request/NewRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewRequest_vue_vue_type_template_id_5ffdad99___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewRequest_vue_vue_type_template_id_5ffdad99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Request/NewRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Request/NewRequest.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/Request/NewRequest.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/NewRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Request/NewRequest.vue?vue&type=template&id=5ffdad99&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/Request/NewRequest.vue?vue&type=template&id=5ffdad99& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewRequest_vue_vue_type_template_id_5ffdad99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewRequest.vue?vue&type=template&id=5ffdad99& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/NewRequest.vue?vue&type=template&id=5ffdad99&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewRequest_vue_vue_type_template_id_5ffdad99___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewRequest_vue_vue_type_template_id_5ffdad99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);