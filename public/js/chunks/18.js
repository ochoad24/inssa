(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/Customer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Customer/Customer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_getPermit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/getPermit */ "./resources/js/src/utils/getPermit.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuejs_datepicker_src_locale_translations_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuejs-datepicker/src/locale/translations/es */ "./node_modules/vuejs-datepicker/src/locale/translations/es.js");
/* harmony import */ var vue_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-text-mask */ "./node_modules/vue-text-mask/dist/vueTextMask.js");
/* harmony import */ var vue_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_text_mask__WEBPACK_IMPORTED_MODULE_8__);


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








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_3__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_3__["TabContent"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_6__["default"],
    'masked-input': vue_text_mask__WEBPACK_IMPORTED_MODULE_8___default.a
  },
  data: function data() {
    return {
      showAllClients: false,
      idCustomer: 0,
      language: vuejs_datepicker_src_locale_translations_es__WEBPACK_IMPORTED_MODULE_7__["default"],
      customers: [],
      search: '',
      pagination: {
        total: 1,
        current: 1
      }
    };
  },
  methods: {
    showItem: function showItem(namePermit) {
      return _utils_getPermit__WEBPACK_IMPORTED_MODULE_5__["getPermit"].showItem(namePermit);
    },
    updateClient: function updateClient(id) {
      this.$router.push({
        path: "/clientes/editar/".concat(id)
      });
    },
    showClient: function showClient(id) {
      this.$router.push({
        path: "/clientes/ver?id=".concat(id)
      });
    },
    newClient: function newClient() {
      this.$router.push({
        path: "/clientes/nuevo"
      });
    },
    dialogDeleteCustomer: function dialogDeleteCustomer(id) {
      var vm = this;
      vm.idCustomer = id;
      this.$vs.dialog({
        acceptText: 'Si',
        cancelText: 'No',
        type: 'confirm',
        color: 'danger',
        title: "Eliminar",
        text: '¿Desea eliminar este cliente?.',
        accept: vm.deleteCustomer
      });
    },
    deleteCustomer: function deleteCustomer() {
      var vm = this;
      vm.$vs.loading();
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/customer/".concat(vm.idCustomer)).then(function (response) {
        vm.$vs.loading.close();
        vm.$vs.notify({
          title: 'Listo',
          color: 'success',
          position: 'top-right',
          text: "".concat(response.data.message)
        });
        vm.getCustomers();
      }).catch(function (error) {
        vm.$vs.loading.close();
        vm.$vs.notify({
          title: 'Error',
          color: 'danger',
          position: 'top-right',
          text: "".concat(error.response.data.message)
        });
      });
    },
    convertDate: function convertDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [year, month, day].join('-');
    },
    getCustomers: function () {
      var _getCustomers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var vm, url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                vm = this;
                if (vm.search != '' && vm.pagination.current != 1) vm.pagination.current = 1;
                url = '';
                url = "/api/customer?page=".concat(vm.pagination.current, "&search=").concat(vm.search, "&permit=").concat(!vm.showAllClients, "&user=").concat(JSON.parse(localStorage.getItem('userInfo')).uid);
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url).then(function (response) {
                  vm.customers = response.data.data;
                  vm.pagination.total = response.data.last_page;
                  vm.pagination.current = response.data.current_page;
                }).catch(function (error) {
                  console.log(error);
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCustomers() {
        return _getCustomers.apply(this, arguments);
      }

      return getCustomers;
    }()
  },
  mounted: function mounted() {
    this.$emit('input');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/Customer.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Customer/Customer.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#data-list-list-view .vs-con-table {\n  /*\n    Below media-queries is fix for responsiveness of action buttons\n    Note: If you change action buttons or layout of this page, Please remove below style\n  */\n}\n@media (max-width: 689px) {\n#data-list-list-view .vs-con-table .vs-table--search {\n    max-width: unset;\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-left: 0;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-right: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--search .vs-table--search-input {\n    width: 100%;\n}\n}\n@media (max-width: 461px) {\n#data-list-list-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-list-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-list-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header {\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header > span {\n  display: flex;\n  flex-grow: 1;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td {\n  padding: 20px;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-list-view .vs-con-table .vs-table--pagination {\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/Customer.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Customer/Customer.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customer.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/Customer.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/Customer.vue?vue&type=template&id=f1acb456&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Customer/Customer.vue?vue&type=template&id=f1acb456& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _vm.showItem("Ver cliente")
    ? _c(
        "div",
        [
          _c(
            "vx-card",
            { attrs: { title: "Listado de clientes" } },
            [
              _vm.showItem("Ver cliente")
                ? _c(
                    "template",
                    { slot: "actions" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Ver todos los clientes"),
                      ]),
                      _vm._v(" "),
                      _c("vs-switch", {
                        on: { change: _vm.getCustomers },
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
                          on: { input: _vm.getCustomers },
                          model: {
                            value: _vm.search,
                            callback: function ($$v) {
                              _vm.search = $$v
                            },
                            expression: "search",
                          },
                        }),
                        _vm._v(" "),
                        _c("template", { slot: "append" }, [
                          _c(
                            "div",
                            { staticClass: "append-text bg-primary" },
                            [
                              _vm.showItem("Crear cliente")
                                ? _c(
                                    "vs-button",
                                    {
                                      staticClass: "btnx",
                                      attrs: { type: "filled" },
                                      on: { click: _vm.newClient },
                                    },
                                    [_vm._v("Nuevo")]
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ]),
                      ],
                      2
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
                      attrs: { data: _vm.customers },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function (ref) {
                              var data = ref.data
                              return _vm._l(data, function (customer) {
                                return _c(
                                  "vs-tr",
                                  { key: customer.id },
                                  [
                                    _c("vs-td", [_vm._v(_vm._s(customer.id))]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(_vm._s(customer.firstName)),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(_vm._s(customer.secondName)),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(_vm._s(customer.firstLastName)),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(_vm._s(customer.secondLastName)),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [_vm._v(_vm._s(customer.dpi))]),
                                    _vm._v(" "),
                                    _c("vs-td", [_vm._v(_vm._s(customer.nit))]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(customer.user_created.name) +
                                          "\n            "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(customer.user_updated.name) +
                                          "\n            "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            customer.user_duty_manager.name
                                          ) +
                                          "\n            "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "vs-td",
                                      { staticClass: "whitespace-no-wrap" },
                                      [
                                        _vm.showItem("Ver cliente")
                                          ? _c("feather-icon", {
                                              attrs: {
                                                icon: "EyeIcon",
                                                svgClasses:
                                                  "w-5 h-5 hover:text-success stroke-current",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.showClient(
                                                    customer.id
                                                  )
                                                },
                                              },
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.showItem("Editar cliente")
                                          ? _c("feather-icon", {
                                              attrs: {
                                                icon: "EditIcon",
                                                svgClasses:
                                                  "w-5 h-5 hover:text-warning stroke-current",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.updateClient(
                                                    customer.id
                                                  )
                                                },
                                              },
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.showItem("Eliminar cliente")
                                          ? _c("feather-icon", {
                                              attrs: {
                                                icon: "TrashIcon",
                                                svgClasses:
                                                  "w-5 h-5 hover:text-danger stroke-current",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.dialogDeleteCustomer(
                                                    customer.id
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
                        2654075835
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
                          _c("vs-th", { attrs: { "sort-key": "firstName" } }, [
                            _vm._v("Primer nombre"),
                          ]),
                          _vm._v(" "),
                          _c("vs-th", { attrs: { "sort-key": "secondName" } }, [
                            _vm._v("Segundo nombre"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-th",
                            { attrs: { "sort-key": "firstLastName" } },
                            [_vm._v("Primer apellido")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-th",
                            { attrs: { "sort-key": "secondLastName" } },
                            [_vm._v("Segundo apellido")]
                          ),
                          _vm._v(" "),
                          _c("vs-th", { attrs: { "sort-key": "dpi" } }, [
                            _vm._v("DPI"),
                          ]),
                          _vm._v(" "),
                          _c("vs-th", { attrs: { "sort-key": "nit" } }, [
                            _vm._v("NIT"),
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
                on: { change: _vm.getCustomers },
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

/***/ "./resources/js/src/views/Customer/Customer.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/Customer/Customer.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Customer_vue_vue_type_template_id_f1acb456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customer.vue?vue&type=template&id=f1acb456& */ "./resources/js/src/views/Customer/Customer.vue?vue&type=template&id=f1acb456&");
/* harmony import */ var _Customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customer.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Customer/Customer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Customer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customer.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Customer/Customer.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customer_vue_vue_type_template_id_f1acb456___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Customer_vue_vue_type_template_id_f1acb456___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Customer/Customer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Customer/Customer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/Customer/Customer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/Customer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Customer/Customer.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/Customer/Customer.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customer.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/Customer.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Customer/Customer.vue?vue&type=template&id=f1acb456&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/Customer/Customer.vue?vue&type=template&id=f1acb456& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_template_id_f1acb456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customer.vue?vue&type=template&id=f1acb456& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/Customer.vue?vue&type=template&id=f1acb456&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_template_id_f1acb456___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_template_id_f1acb456___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);