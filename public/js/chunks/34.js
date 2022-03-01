(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_eight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/eight */ "./resources/js/src/utils/eight.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_text_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-text-mask */ "./node_modules/vue-text-mask/dist/vueTextMask.js");
/* harmony import */ var vue_text_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_text_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_getPermit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/getPermit */ "./resources/js/src/utils/getPermit.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_5___default.a,
    'masked-input': vue_text_mask__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      type: {
        value: '+',
        name: 'Entrada'
      },
      types: [{
        value: '-',
        name: 'Salida'
      }, {
        value: '+',
        name: 'Entrada'
      }],
      accountsIn: [],
      accountsOut: [],
      accountIn: null,
      accountOut: null,
      mask_quetzal: text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4___default()({
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
      reference: '',
      amount: ''
    };
  },
  methods: {
    showItem: function showItem(namePermit) {
      return _utils_getPermit__WEBPACK_IMPORTED_MODULE_6__["getPermit"].showItem(namePermit);
    },
    onSearchOut: function onSearchOut(search, loading) {
      loading(true);
      this.search(loading, search, this, true);
    },
    saveMoveAmountTransactionAccount: function saveMoveAmountTransactionAccount() {
      var _this = this;

      var vm = this;

      if (this.accountOut == null) {
        this.$vs.notify({
          title: 'Error',
          color: 'danger',
          position: 'top-right',
          text: 'La cuenta es requerida'
        });
        return;
      }

      if (this.type == null) {
        this.$vs.notify({
          title: 'Error',
          color: 'danger',
          position: 'top-right',
          text: 'El tipo de transaccion es requerida'
        });
        return;
      }

      if (this.amount === '' || this.amount === 'Q 0') {
        this.$vs.notify({
          title: 'Error',
          color: 'danger',
          position: 'top-right',
          text: 'El monto debe ser mayor a 0'
        });
        return;
      } // POST


      vm.$vs.loading();
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put('/api/transaction/0', {
        id: vm.accountOut.id,
        name: vm.accountOut.name,
        reference: vm.reference,
        amount: vm.converMaskToNumber(vm.amount),
        user: JSON.parse(localStorage.getItem('userInfo')).uid,
        type: vm.type.value
      }).then(function (response) {
        vm.$vs.loading.close();
        vm.$vs.notify({
          title: 'Listo',
          color: 'success',
          position: 'top-right',
          text: "".concat(response.data.message)
        });

        _this.$router.push({
          path: "/transacciones"
        });
      }).catch(function (error) {
        vm.$vs.loading.close();
        console.log(error);
      });
    },
    converMaskToNumber: function converMaskToNumber(value) {
      var myNumber = '';

      for (var i = 0; i < value.length; i += 1) {
        if (value.charAt(i) === 'Q' || value.charAt(i) === ',' || value.charAt(i) === ' ') {
          continue;
        } else {
          myNumber += value.charAt(i);
        }
      }

      return parseFloat(myNumber).toFixed(2);
    },
    search: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.debounce(function (loading, search, vm, status) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/getAccount?filter=".concat(search)).then(function (response) {
        if (status === true) vm.accountsOut = response.data.data;else vm.accountsIn = response.data.data;
        loading(false);
      }).catch(function (error) {
        console.log(error);
      });
    }, 350)
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=template&id=220f9605&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=template&id=220f9605& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _vm.showItem("Ingreso/Salida de cuentas")
    ? _c(
        "div",
        [
          _c("vx-card", { attrs: { title: "Salida/Entrada de cuentas" } }, [
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
                        _c("label", { staticClass: "vs-input--label" }, [
                          _vm._v("Cuenta"),
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            options: _vm.accountsOut,
                            filterable: false,
                            label: "name",
                          },
                          on: { search: _vm.onSearchOut },
                          model: {
                            value: _vm.accountOut,
                            callback: function ($$v) {
                              _vm.accountOut = $$v
                            },
                            expression: "accountOut",
                          },
                        }),
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
                          _vm._v("Tipo"),
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: { options: _vm.types, label: "name" },
                          model: {
                            value: _vm.type,
                            callback: function ($$v) {
                              _vm.type = $$v
                            },
                            expression: "type",
                          },
                        }),
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
                          _vm._v("Monto"),
                        ]),
                        _vm._v(" "),
                        _c("masked-input", {
                          staticClass: "vs-inputx vs-input--input normal",
                          staticStyle: {
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                          },
                          attrs: {
                            mask: _vm.mask_quetzal,
                            guide: false,
                            "keep-char-positions": true,
                            "show-mask": true,
                          },
                          model: {
                            value: _vm.amount,
                            callback: function ($$v) {
                              _vm.amount = $$v
                            },
                            expression: "amount",
                          },
                        }),
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
                          staticClass: "w-full",
                          attrs: { label: "Referencia" },
                          model: {
                            value: _vm.reference,
                            callback: function ($$v) {
                              _vm.reference = $$v
                            },
                            expression: "reference",
                          },
                        }),
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
                      on: { click: _vm.saveMoveAmountTransactionAccount },
                    },
                    [_vm._v("Guardar")]
                  ),
                ],
                1
              ),
            ]),
          ]),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/utils/eight.js":
/*!*****************************************!*\
  !*** ./resources/js/src/utils/eight.js ***!
  \*****************************************/
/*! exports provided: eight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eight", function() { return eight; });
var eight = {
  cuiIsValid: function cuiIsValid(cui) {
    var console = window.console;

    if (!cui) {
      // console.log("CUI vacío");
      return true;
    }

    var cuiRegExp = /^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/;

    if (!cuiRegExp.test(cui)) {
      // console.log("CUI con formato inválido");
      return false;
    }

    cui = cui.replace(/\s/, '');
    var depto = parseInt(cui.substring(9, 11), 10);
    var muni = parseInt(cui.substring(11, 13));
    var numero = cui.substring(0, 8);
    var verificador = parseInt(cui.substring(8, 9)); // Se asume que la codificación de Municipios y
    // departamentos es la misma que esta publicada en
    // http://goo.gl/EsxN1a
    // Listado de municipios actualizado segun:
    // http://goo.gl/QLNglm
    // Este listado contiene la cantidad de municipios
    // existentes en cada departamento para poder
    // determinar el código máximo aceptado por cada
    // uno de los departamentos.

    var munisPorDepto = [
    /* 01 - Guatemala tiene:      */
    17
    /* municipios. */
    ,
    /* 02 - El Progreso tiene:    */
    8
    /* municipios. */
    ,
    /* 03 - Sacatepéquez tiene:   */
    16
    /* municipios. */
    ,
    /* 04 - Chimaltenango tiene:  */
    16
    /* municipios. */
    ,
    /* 05 - Escuintla tiene:      */
    13
    /* municipios. */
    ,
    /* 06 - Santa Rosa tiene:     */
    14
    /* municipios. */
    ,
    /* 07 - Sololá tiene:         */
    19
    /* municipios. */
    ,
    /* 08 - Totonicapán tiene:    */
    8
    /* municipios. */
    ,
    /* 09 - Quetzaltenango tiene: */
    24
    /* municipios. */
    ,
    /* 10 - Suchitepéquez tiene:  */
    21
    /* municipios. */
    ,
    /* 11 - Retalhuleu tiene:     */
    9
    /* municipios. */
    ,
    /* 12 - San Marcos tiene:     */
    30
    /* municipios. */
    ,
    /* 13 - Huehuetenango tiene:  */
    32
    /* municipios. */
    ,
    /* 14 - Quiché tiene:         */
    21
    /* municipios. */
    ,
    /* 15 - Baja Verapaz tiene:   */
    8
    /* municipios. */
    ,
    /* 16 - Alta Verapaz tiene:   */
    17
    /* municipios. */
    ,
    /* 17 - Petén tiene:          */
    14
    /* municipios. */
    ,
    /* 18 - Izabal tiene:         */
    5
    /* municipios. */
    ,
    /* 19 - Zacapa tiene:         */
    11
    /* municipios. */
    ,
    /* 20 - Chiquimula tiene:     */
    11
    /* municipios. */
    ,
    /* 21 - Jalapa tiene:         */
    7
    /* municipios. */
    ,
    /* 22 - Jutiapa tiene:        */
    17
    /* municipios. */
    ];

    if (depto === 0 || muni === 0) {
      // console.log("CUI con código de municipio o departamento inválido.");
      return false;
    }

    if (depto > munisPorDepto.length) {
      // console.log("CUI con código de departamento inválido.");
      return false;
    }

    if (muni > munisPorDepto[depto - 1]) {
      // console.log("CUI con código de municipio inválido.");
      return false;
    }

    var total = 0;

    for (var i = 0; i < numero.length; i++) {
      total += numero[i] * (i + 2);
    }

    var modulo = total % 11; // console.log("CUI con módulo: " + modulo);

    return modulo === verificador;
  },
  nitIsValid: function nitIsValid(value) {
    var nit = value.toString();

    if (!nit) {
      return true;
    }

    var nitRegExp = new RegExp('^[0-9]+(-?[0-9kK])?$');

    if (!nitRegExp.test(nit)) {
      return false;
    }

    nit = nit.replace(/-/, '');
    var lastChar = nit.length - 1;
    var number = nit.substring(0, lastChar);
    var expectedCheker = nit.substring(lastChar, lastChar + 1).toLowerCase();
    var factor = number.length + 1;
    var total = 0;

    for (var i = 0; i < number.length; i++) {
      var character = number.substring(i, i + 1);
      var digit = parseInt(character, 10);
      total += digit * factor;
      factor = factor - 1;
    }

    var modulus = (11 - total % 11) % 11;
    var computedChecker = modulus == 10 ? 'k' : modulus.toString();
    return expectedCheker === computedChecker;
  },
  money: function money(number) {
    return 'Q ' + number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  },
  percentage: function percentage(number) {
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' %';
  },
  quantity: function quantity(number) {
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  },
  parseDecimal: function parseDecimal(value) {
    return parseFloat(parseFloat(value).toFixed(2));
  },
  calculateCreditAmount: function calculateCreditAmount(amount, percentage, term) {
    var capital = this.parseDecimal(this.parseDecimal(amount) / this.parseDecimal(term));
    var interest = this.parseDecimal(this.parseDecimal(amount) * (this.parseDecimal(percentage) / 100));
    return this.parseDecimal(capital + interest);
  }
};

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

/***/ "./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionBeetweenTwo_vue_vue_type_template_id_220f9605___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionBeetweenTwo.vue?vue&type=template&id=220f9605& */ "./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=template&id=220f9605&");
/* harmony import */ var _TransactionBeetweenTwo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionBeetweenTwo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionBeetweenTwo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionBeetweenTwo_vue_vue_type_template_id_220f9605___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransactionBeetweenTwo_vue_vue_type_template_id_220f9605___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Transactions/TransactionBeetweenTwo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionBeetweenTwo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionBeetweenTwo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionBeetweenTwo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=template&id=220f9605&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=template&id=220f9605& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionBeetweenTwo_vue_vue_type_template_id_220f9605___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionBeetweenTwo.vue?vue&type=template&id=220f9605& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transactions/TransactionBeetweenTwo.vue?vue&type=template&id=220f9605&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionBeetweenTwo_vue_vue_type_template_id_220f9605___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionBeetweenTwo_vue_vue_type_template_id_220f9605___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);