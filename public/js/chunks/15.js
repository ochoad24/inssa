(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Loan/Loan.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Loan/Loan.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_eight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/eight */ "./resources/js/src/utils/eight.js");
/* harmony import */ var _utils_getPermit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/getPermit */ "./resources/js/src/utils/getPermit.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








vue__WEBPACK_IMPORTED_MODULE_2___default.a.directive('VeeValidate', vee_validate__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(vee_validate__WEBPACK_IMPORTED_MODULE_1__["default"], {
  inject: true
});
var dict = {
  custom: {
    admin: {
      required: 'El administrador es requerido'
    },
    password: {
      required: 'La contraseña es requerida'
    }
  }
};
vee_validate__WEBPACK_IMPORTED_MODULE_1__["Validator"].localize('es', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      showAllClients: false,
      showPopupLoan: false,
      admins: [],
      laons: [],
      admin: null,
      password: '',
      filterSearch: '',
      pagination: {
        total: 1,
        current: 1
      },
      idLoan: 0
    };
  },
  methods: {
    printLoan: function printLoan(id) {
      this.$router.push({
        path: "/creditos/imprimir?loan=".concat(id)
      });
    },
    printLoanControl: function printLoanControl(id) {
      this.$router.push({
        path: "/creditos/control?loan=".concat(id)
      });
    },
    onSearch: function onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: lodash__WEBPACK_IMPORTED_MODULE_5___default.a.debounce(function (loading, search, vm) {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/searchAdmins?filter=".concat(search)).then(function (response) {
        vm.admins = response.data.data;
        loading(false);
      }).catch(function (error) {
        console.log(error);
      });
    }, 350),
    deleteLoan: function deleteLoan(id) {
      var vm = this;
      vm.idLoan = id;
      this.$vs.dialog({
        acceptText: 'Si',
        cancelText: 'No',
        type: 'confirm',
        color: 'danger',
        title: "Aprobar",
        text: '¿Desea anular el crédito?.',
        accept: vm.acceptDeleteLoan
      });
    },
    acceptDeleteLoan: function acceptDeleteLoan() {
      this.resetForm();
      this.showPopupLoan = true;
    },
    showItem: function showItem(namePermit) {
      return _utils_getPermit__WEBPACK_IMPORTED_MODULE_7__["getPermit"].showItem(namePermit);
    },
    shoyPayments: function shoyPayments(id) {
      this.$router.push({
        path: "/pagos?id=".concat(id)
      });
    },
    mymoney: function mymoney(value) {
      return _utils_eight__WEBPACK_IMPORTED_MODULE_6__["eight"].money(parseFloat(value));
    },
    myquantity: function myquantity(value) {
      return xelacode.quantity(value);
    },
    getLoan: function () {
      var _getLoan = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var vm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                vm = this;
                if (vm.filterSearch != '' && vm.pagination.current != 1) vm.pagination.current = 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/loan?page=".concat(vm.pagination.current, "&search=").concat(vm.filterSearch, "&permit=").concat(!vm.showAllClients, "&user=").concat(JSON.parse(localStorage.getItem('userInfo')).uid)).then(function (response) {
                  vm.laons = response.data.data;
                  vm.pagination.total = response.data.last_page;
                  vm.pagination.current = response.data.current_page;
                }).catch(function (error) {
                  console.log(error);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLoan() {
        return _getLoan.apply(this, arguments);
      }

      return getLoan;
    }(),
    convertDate: function convertDate(date) {
      var newDate = date.split('-');

      if (newDate[2].includes(':')) {
        var day = newDate[2].split(' ');
        newDate[2] = day[1] + ' ' + day[0];
      }

      return newDate[2] + '/' + newDate[1] + '/' + newDate[0];
    },
    getIWillPay: function getIWillPay(id) {
      window.open("/api/getDocument/".concat(id), '_blank');
    },
    getFactura: function getFactura(id) {
      window.open("/api/getFactura/".concat(id), '_blank');
    },
    resetForm: function resetForm() {
      this.admin = null;
      this.password = '';
      this.$validator.reset();
    },
    submitForm: function submitForm() {
      var vm = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          vm.$vs.loading();
          axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete("/api/loan/".concat(vm.idLoan, "?password=").concat(vm.password, "&idUser=").concat(vm.admin.id)).then(function (response) {
            vm.$vs.loading.close();
            vm.$vs.notify({
              title: 'Listo',
              color: 'success',
              position: 'top-right',
              text: "".concat(response.data.message)
            });
            vm.getLoan();
            vm.showPopupLoan = false;
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
      });
    }
  },
  mounted: function mounted() {
    this.$emit('input');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Loan/Loan.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Loan/Loan.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs-component .vs-popup .vs-popup--header .vs-icon {\n  display: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Loan/Loan.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Loan/Loan.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loan.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Loan/Loan.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Loan/Loan.vue?vue&type=template&id=819220d6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Loan/Loan.vue?vue&type=template&id=819220d6& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _vm.showItem("Ver lista de crédito")
    ? _c(
        "div",
        [
          _c(
            "vx-card",
            { attrs: { title: "Listado de créditos" } },
            [
              _vm.showItem("Ver todas las solicitudes")
                ? _c(
                    "template",
                    { slot: "actions" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Ver todos los créditos"),
                      ]),
                      _vm._v(" "),
                      _c("vs-switch", {
                        on: { change: _vm.getLoan },
                        model: {
                          value: _vm.showAllClients,
                          callback: function ($$v) {
                            _vm.showAllClients = $$v
                          },
                          expression: "showAllClients",
                        },
                      }),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "flex -mx-2" }, [
                _c(
                  "div",
                  { staticClass: "w-full px-2" },
                  [
                    _c(
                      "vx-input-group",
                      { staticClass: "mb-base" },
                      [
                        _c("vs-input", {
                          attrs: { placeholder: "Ingrese búsqueda" },
                          on: { input: _vm.getLoan },
                          model: {
                            value: _vm.filterSearch,
                            callback: function ($$v) {
                              _vm.filterSearch = $$v
                            },
                            expression: "filterSearch",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "data-list-container",
                  attrs: { id: "data-list-list-view" },
                },
                [
                  _c(
                    "vs-table",
                    {
                      attrs: { data: _vm.laons },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function (ref) {
                              var data = ref.data
                              return _vm._l(data, function (request) {
                                return _c(
                                  "vs-tr",
                                  { key: request.id },
                                  [
                                    _c("vs-td", [_vm._v(_vm._s(request.id))]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(_vm._s(request.customer)),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        _vm._s(_vm.mymoney(request.amount))
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        _vm._s(_vm.mymoney(request.balance))
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        _vm._s(_vm.mymoney(request.capital))
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        _vm._s(_vm.mymoney(request.interest))
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        _vm._s(_vm.mymoney(request.bankDefault))
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _c(
                                        "div",
                                        { staticClass: "btn-group" },
                                        [
                                          request.status === 2
                                            ? _c(
                                                "vs-chip",
                                                {
                                                  staticClass:
                                                    "product-order-status",
                                                  attrs: { color: "warning" },
                                                },
                                                [_vm._v("Pendiente")]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          request.status === 1
                                            ? _c(
                                                "vs-chip",
                                                {
                                                  staticClass:
                                                    "product-order-status",
                                                  attrs: { color: "success" },
                                                },
                                                [_vm._v("Pagado")]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          request.status === 0
                                            ? _c(
                                                "vs-chip",
                                                {
                                                  staticClass:
                                                    "product-order-status",
                                                  attrs: { color: "danger" },
                                                },
                                                [_vm._v("Anulado")]
                                              )
                                            : _vm._e(),
                                        ],
                                        1
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.convertDate(request.created_at)
                                        )
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(request.user_created.name) +
                                          "\n            "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(request.user_updated.name) +
                                          "\n            "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            request.user_duty_manager.name
                                          ) +
                                          "\n            "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "vs-td",
                                      { staticClass: "whitespace-no-wrap" },
                                      [
                                        _vm.showItem("Anular crédito") &&
                                        request.status == 2
                                          ? _c("feather-icon", {
                                              attrs: {
                                                icon: "XIcon",
                                                svgClasses:
                                                  "w-5 h-5 hover:text-success stroke-current",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.deleteLoan(
                                                    request.id
                                                  )
                                                },
                                              },
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.showItem("Ver lista de pagos")
                                          ? _c("feather-icon", {
                                              attrs: {
                                                icon: "ListIcon",
                                                svgClasses:
                                                  "w-5 h-5 hover:text-success stroke-current",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.shoyPayments(
                                                    request.id
                                                  )
                                                },
                                              },
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.showItem("Descargar pagare")
                                          ? _c("feather-icon", {
                                              attrs: {
                                                icon: "DownloadIcon",
                                                svgClasses:
                                                  "w-5 h-5 hover:text-success stroke-current",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.getIWillPay(
                                                    request.id
                                                  )
                                                },
                                              },
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.showItem("Descargar factura")
                                          ? _c("feather-icon", {
                                              attrs: {
                                                icon: "FileTextIcon",
                                                svgClasses:
                                                  "w-5 h-5 hover:text-success stroke-current",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.getFactura(
                                                    request.id
                                                  )
                                                },
                                              },
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.showItem("Imprimir recibos")
                                          ? _c("feather-icon", {
                                              attrs: {
                                                icon: "PrinterIcon",
                                                svgClasses:
                                                  "w-5 h-5 hover:text-success stroke-current",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.printLoan(
                                                    request.id
                                                  )
                                                },
                                              },
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.showItem("Descargar lista de pagos")
                                          ? _c("feather-icon", {
                                              attrs: {
                                                icon: "CheckSquareIcon",
                                                svgClasses:
                                                  "w-5 h-5 hover:text-success stroke-current",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.printLoanControl(
                                                    request.id
                                                  )
                                                },
                                              },
                                            })
                                          : _vm._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              })
                            },
                          },
                        ],
                        null,
                        false,
                        4199318985
                      ),
                    },
                    [
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", { attrs: { "sort-key": "id" } }, [
                            _vm._v("ID"),
                          ]),
                          _vm._v(" "),
                          _c("vs-th", { attrs: { "sort-key": "customer" } }, [
                            _vm._v("Cliente"),
                          ]),
                          _vm._v(" "),
                          _c("vs-th", { attrs: { "sort-key": "amount" } }, [
                            _vm._v("Monto"),
                          ]),
                          _vm._v(" "),
                          _c("vs-th", { attrs: { "sort-key": "balance" } }, [
                            _vm._v("Saldo"),
                          ]),
                          _vm._v(" "),
                          _c("vs-th", { attrs: { "sort-key": "capital" } }, [
                            _vm._v("Capital"),
                          ]),
                          _vm._v(" "),
                          _c("vs-th", { attrs: { "sort-key": "interest" } }, [
                            _vm._v("Interes"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-th",
                            { attrs: { "sort-key": "bankDefault" } },
                            [_vm._v("Mora")]
                          ),
                          _vm._v(" "),
                          _c("vs-th", { attrs: { "sort-key": "status" } }, [
                            _vm._v("Estado"),
                          ]),
                          _vm._v(" "),
                          _c("vs-th", { attrs: { "sort-key": "created_at" } }, [
                            _vm._v("Fecha de creación"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-th",
                            { attrs: { "sort-key": "user_created.name" } },
                            [_vm._v("Usuario creador")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-th",
                            { attrs: { "sort-key": "user_updated.name" } },
                            [_vm._v("Usuario actualizó")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-th",
                            { attrs: { "sort-key": "in_charge.name" } },
                            [_vm._v("Encargado")]
                          ),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Acciones")]),
                        ],
                        1
                      ),
                    ],
                    2
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("vs-pagination", {
                attrs: { total: _vm.pagination.total },
                on: { change: _vm.getLoan },
                model: {
                  value: _vm.pagination.current,
                  callback: function ($$v) {
                    _vm.$set(_vm.pagination, "current", $$v)
                  },
                  expression: "pagination.current",
                },
              }),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "vs-popup",
            {
              attrs: {
                title: "Desactivar crédito",
                active: _vm.showPopupLoan,
                fullscreen: "",
              },
              on: {
                "update:active": function ($event) {
                  _vm.showPopupLoan = $event
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
                          _c("label", { staticClass: "vs-input--label" }, [
                            _vm._v("Administrador"),
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
                              options: _vm.admins,
                              name: "name",
                              filterable: false,
                              label: "name",
                            },
                            on: { search: _vm.onSearch },
                            model: {
                              value: _vm.admin,
                              callback: function ($$v) {
                                _vm.admin = $$v
                              },
                              expression: "admin",
                            },
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.first("admin"))),
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
                            _vm._v("Contraseña del administrador"),
                          ]),
                          _vm._v(" "),
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
                            attrs: { type: "password", name: "password" },
                            model: {
                              value: _vm.password,
                              callback: function ($$v) {
                                _vm.password = $$v
                              },
                              expression: "password",
                            },
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.first("password"))),
                          ]),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("vs-divider"),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row" }, [
                      _c("div", { staticClass: "vx-col w-full mt-5" }, [
                        _c(
                          "div",
                          { staticClass: "btn-group" },
                          [
                            _c(
                              "vs-button",
                              {
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.submitForm.apply(null, arguments)
                                  },
                                },
                              },
                              [_vm._v("Guardar")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                attrs: { color: "danger" },
                                on: {
                                  click: function ($event) {
                                    _vm.showPopupLoan = false
                                  },
                                },
                              },
                              [_vm._v("Cancelar")]
                            ),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]),
            ]
          ),
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

/***/ "./resources/js/src/views/Loan/Loan.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/views/Loan/Loan.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loan_vue_vue_type_template_id_819220d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loan.vue?vue&type=template&id=819220d6& */ "./resources/js/src/views/Loan/Loan.vue?vue&type=template&id=819220d6&");
/* harmony import */ var _Loan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loan.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Loan/Loan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Loan_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loan.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Loan/Loan.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Loan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loan_vue_vue_type_template_id_819220d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loan_vue_vue_type_template_id_819220d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Loan/Loan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Loan/Loan.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/Loan/Loan.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Loan/Loan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Loan/Loan.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/Loan/Loan.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loan.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Loan/Loan.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Loan/Loan.vue?vue&type=template&id=819220d6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/Loan/Loan.vue?vue&type=template&id=819220d6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_template_id_819220d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loan.vue?vue&type=template&id=819220d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Loan/Loan.vue?vue&type=template&id=819220d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_template_id_819220d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_template_id_819220d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);