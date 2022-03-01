(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony import */ var _utils_eight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/eight */ "./resources/js/src/utils/eight.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuejs_datepicker_src_locale_translations_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuejs-datepicker/src/locale/translations/es */ "./node_modules/vuejs-datepicker/src/locale/translations/es.js");
/* harmony import */ var vue_upload_drop_images__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-upload-drop-images */ "./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue");
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js");
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_getPermit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/getPermit */ "./resources/js/src/utils/getPermit.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

















var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

vue__WEBPACK_IMPORTED_MODULE_5___default.a.use(vue_moment__WEBPACK_IMPORTED_MODULE_13___default.a, {
  moment: moment
});
vue__WEBPACK_IMPORTED_MODULE_5___default.a.directive('VeeValidate', vee_validate__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_5___default.a.use(vee_validate__WEBPACK_IMPORTED_MODULE_4__["default"], {
  inject: true
});
var dict = {
  custom: {
    language: vuejs_datepicker_src_locale_translations_es__WEBPACK_IMPORTED_MODULE_11__["default"],
    dateInit: {
      required: 'La fecha de desembolso es requerida'
    },
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
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"],
    'masked-input': vue_text_mask__WEBPACK_IMPORTED_MODULE_6___default.a,
    UploadImages: vue_upload_drop_images__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      dateInit: new Date(),
      language: vuejs_datepicker_src_locale_translations_es__WEBPACK_IMPORTED_MODULE_11__["default"],
      images: [],
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
        photo: []
      }
    };
  },
  mounted: function mounted() {
    // if (typeof this.$route.params.id !== 'undefined') {
    //   this.isHaveCustomer = true;
    //   this.onSearch(this.$route.params.id);
    // }
    this.getRequest();
  },
  methods: {
    showItem: function showItem(namePermit) {
      return _utils_getPermit__WEBPACK_IMPORTED_MODULE_14__["getPermit"].showItem(namePermit);
    },
    mymoney: function mymoney(value) {
      return _utils_eight__WEBPACK_IMPORTED_MODULE_9__["eight"].money(parseFloat(value));
    },
    getRequest: function getRequest() {
      var _this = this;

      var vm = this;
      vm.$vs.loading();
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/demand/".concat(vm.$route.params.id)).then(function (response) {
        vm.$vs.loading.close();
        var demand = response.data.demand;
        vm.amountToFinance = vm.mymoney(demand.amountToFinance);
        vm.terms = demand.terms;
        vm.loanRate = vm.loanRateList.find(function (x) {
          return x.label === demand.loanRate;
        });
        var guarantee = response.data.guarantee;

        if (demand.loanRate === 'Flat') {
          vm.selectedloanRate.feeType = vm.loanRateFlat.feeTypeList.find(function (x) {
            return x.label === demand.feeType;
          });
          vm.selectedloanRate.feeTypeList = vm.loanRateFlat.feeTypeList;
        } else {
          vm.selectedloanRate.feeType = vm.loanRateDaily.feeTypeList.find(function (x) {
            return x.label === demand.feeType;
          });
          vm.selectedloanRate.feeTypeList = vm.loanRateDaily.feeTypeList;
        }

        vm.selectedloanRate.percentage = demand.percentage;
        var customer = response.data.customer;
        _this.isHaveCustomer = true;

        _this.onSearch(customer.id);

        vm.guarantee = {
          id: guarantee.id,
          name: guarantee.name,
          photo: []
        };
        vm.images = response.data.images;
      }).catch(function (error) {
        console.log(error);
      });
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
      var _this2 = this;

      this.guarantee.photo = [];
      files.forEach(function (photo) {
        _this2.guarantee.photo.push(photo);
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
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.$validator.validateAll('step-1').then(function (result) {
          if (result) {
            resolve(true);
          } else {
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
    validateStep2: function validateStep2() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.$validator.validateAll('step-2').then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject(true);
          }
        });
      });
    },
    save: function save() {
      var vm = this;
      vm.$vs.loading();
      var formData = new FormData();
      formData.append('initDate', moment(this.dateInit).format('YYYY-MM-DD'));
      formData.append('amountToFinance', this.converMaskToNumber(this.amountToFinance));
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
        this.guarantee.photo.forEach(function (photo, index) {
          formData.append("files[".concat(index, "]"), photo);
        });
      }

      formData.append('_method', 'put');
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/demand/".concat(vm.$route.params.id), formData, {
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
          path: "/creditos"
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=style&index=0&lang=stylus&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=style&index=0&lang=stylus& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".images {\n  max-height: 500px;\n  overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=style&index=0&lang=stylus&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=style&index=0&lang=stylus& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--11-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateRequest.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=style&index=0&lang=stylus&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=template&id=3be6aba8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=template&id=3be6aba8& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _vm.showItem("Aprobar o rechazar solicitud")
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
                                _vm._v("Fecha de desembolso"),
                              ]),
                              _vm._v(" "),
                              _c("datepicker", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'",
                                  },
                                ],
                                attrs: {
                                  name: "dateInit",
                                  language: _vm.language,
                                  format: "dd/MM/yyyy",
                                },
                                model: {
                                  value: _vm.dateInit,
                                  callback: function ($$v) {
                                    _vm.dateInit = $$v
                                  },
                                  expression: "dateInit",
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-danger" }, [
                                _vm._v(
                                  _vm._s(_vm.errors.first("step-1.dateInit"))
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
                                on: { search: _vm.onSearch },
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
                                    _vm._s(_vm.errors.first("step-2.guarantee"))
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("vs-divider"),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "images" },
                            [
                              _c(
                                "vs-images",
                                _vm._l(_vm.images, function (image) {
                                  return _c("vs-image", {
                                    key: image.id,
                                    attrs: {
                                      src: "/uploads/images/" + image.name,
                                    },
                                  })
                                }),
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("vs-divider"),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-row" },
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

/***/ "./node_modules/vuejs-datepicker/src/locale/Language.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuejs-datepicker/src/locale/Language.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Language; });
class Language {
  constructor (language, months, monthsAbbr, days) {
    this.language = language
    this.months = months
    this.monthsAbbr = monthsAbbr
    this.days = days
    this.rtl = false
    this.ymd = false
    this.yearSuffix = ''
  }

  get language () {
    return this._language
  }

  set language (language) {
    if (typeof language !== 'string') {
      throw new TypeError('Language must be a string')
    }
    this._language = language
  }

  get months () {
    return this._months
  }

  set months (months) {
    if (months.length !== 12) {
      throw new RangeError(`There must be 12 months for ${this.language} language`)
    }
    this._months = months
  }

  get monthsAbbr () {
    return this._monthsAbbr
  }

  set monthsAbbr (monthsAbbr) {
    if (monthsAbbr.length !== 12) {
      throw new RangeError(`There must be 12 abbreviated months for ${this.language} language`)
    }
    this._monthsAbbr = monthsAbbr
  }

  get days () {
    return this._days
  }

  set days (days) {
    if (days.length !== 7) {
      throw new RangeError(`There must be 7 days for ${this.language} language`)
    }
    this._days = days
  }
}
// eslint-disable-next-line
;


/***/ }),

/***/ "./node_modules/vuejs-datepicker/src/locale/translations/es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vuejs-datepicker/src/locale/translations/es.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Language */ "./node_modules/vuejs-datepicker/src/locale/Language.js");


/* harmony default export */ __webpack_exports__["default"] = (new _Language__WEBPACK_IMPORTED_MODULE_0__["default"](
  'Spanish',
  ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
));


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

/***/ "./resources/js/src/views/Request/UpdateRequest.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/Request/UpdateRequest.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateRequest_vue_vue_type_template_id_3be6aba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateRequest.vue?vue&type=template&id=3be6aba8& */ "./resources/js/src/views/Request/UpdateRequest.vue?vue&type=template&id=3be6aba8&");
/* harmony import */ var _UpdateRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateRequest.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Request/UpdateRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpdateRequest_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateRequest.vue?vue&type=style&index=0&lang=stylus& */ "./resources/js/src/views/Request/UpdateRequest.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpdateRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateRequest_vue_vue_type_template_id_3be6aba8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateRequest_vue_vue_type_template_id_3be6aba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Request/UpdateRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Request/UpdateRequest.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Request/UpdateRequest.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Request/UpdateRequest.vue?vue&type=style&index=0&lang=stylus&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/Request/UpdateRequest.vue?vue&type=style&index=0&lang=stylus& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRequest_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--11-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateRequest.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRequest_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRequest_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRequest_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRequest_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Request/UpdateRequest.vue?vue&type=template&id=3be6aba8&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Request/UpdateRequest.vue?vue&type=template&id=3be6aba8& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRequest_vue_vue_type_template_id_3be6aba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateRequest.vue?vue&type=template&id=3be6aba8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/UpdateRequest.vue?vue&type=template&id=3be6aba8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRequest_vue_vue_type_template_id_3be6aba8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateRequest_vue_vue_type_template_id_3be6aba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);