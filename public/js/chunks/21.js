(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Reports/Report.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Reports/Report.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuejs_datepicker_src_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/src/locale/translations/es */ "./node_modules/vuejs-datepicker/src/locale/translations/es.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js");
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_getPermit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/getPermit */ "./resources/js/src/utils/getPermit.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

vue__WEBPACK_IMPORTED_MODULE_3___default.a.use(vue_moment__WEBPACK_IMPORTED_MODULE_4___default.a, {
  moment: moment
});



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // REPORTES GENERALES
      beginDate: new Date(),
      endDate: new Date(),
      // REPORTES LOANS
      language: vuejs_datepicker_src_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__["default"],
      idLoan: null,
      Loans: [],
      enableButtonsStausAccount: true,
      // REPORTES FOR ACCOUNTS
      Accounts: [],
      idAccount: null,
      enableButtonsStausNotCashRegister: true,
      // VARIABLES FOR CASHREGISTER
      CashRegister: [],
      idCashRegister: null,
      enableButtonsStausCashRegister: true
    };
  },
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_0___default.a,
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    showItem: function showItem(namePermit) {
      return _utils_getPermit__WEBPACK_IMPORTED_MODULE_7__["getPermit"].showItem(namePermit);
    },
    onSearch: function onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: lodash__WEBPACK_IMPORTED_MODULE_5___default.a.debounce(function (loading, search, vm) {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/getAllLoans?filter=".concat(search)).then(function (response) {
        vm.Loans = response.data.data;
        loading(false);
      }).catch(function (error) {
        console.log(error);
      });
    }, 350),
    onSearchAccounts: function onSearchAccounts(search, loading) {
      loading(true);
      this.searchAccount(loading, search, this);
    },
    searchAccount: lodash__WEBPACK_IMPORTED_MODULE_5___default.a.debounce(function (loading, search, vm) {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/searchAccount?filter=".concat(search, "&type=0")).then(function (response) {
        vm.Accounts = response.data.data;
        loading(false);
      }).catch(function (error) {
        console.log(error);
      });
    }, 350),
    onSearchCashRegister: function onSearchCashRegister(search, loading) {
      loading(true);
      this.searchCashRegister(loading, search, this);
    },
    searchCashRegister: lodash__WEBPACK_IMPORTED_MODULE_5___default.a.debounce(function (loading, search, vm) {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/searchAccount?filter=".concat(search, "&type=1")).then(function (response) {
        vm.CashRegister = response.data.data;
        loading(false);
      }).catch(function (error) {
        console.log(error);
      });
    }, 350),
    selectedCustomer: function selectedCustomer() {
      if (this.idLoan === null) this.enableButtonsStausAccount = true;else this.enableButtonsStausAccount = false;
    },
    selectedAccount: function selectedAccount() {
      if (this.idAccount === null) this.enableButtonsStausNotCashRegister = true;else this.enableButtonsStausNotCashRegister = false;
    },
    selectedCashRegister: function selectedCashRegister() {
      if (this.idCashRegister === null) this.enableButtonsStausCashRegister = true;else this.enableButtonsStausCashRegister = false;
    },
    clients: function clients() {
      window.open("/api/report/clients?beginDate=".concat(moment(this.beginDate).format('YYYY-MM-DD'), "&endDate=").concat(moment(this.endDate).format('YYYY-MM-DD')), '_blank');
    },
    request: function request() {
      window.open("/api/report/demands?beginDate=".concat(moment(this.beginDate).format('YYYY-MM-DD'), "&endDate=").concat(moment(this.endDate).format('YYYY-MM-DD')), '_blank');
    },
    loans: function loans(status) {
      window.open("/api/report/loans?beginDate=".concat(moment(this.beginDate).format('YYYY-MM-DD'), "&endDate=").concat(moment(this.endDate).format('YYYY-MM-DD'), "&status=").concat(status), '_blank');
    },
    loansPayment: function loansPayment(status) {
      window.open("/api/report/loansPayments?loan=".concat(this.idLoan.id, "&status=").concat(status), '_blank');
    },
    accounts: function accounts(status) {
      window.open("/api/report/accounts?account=".concat(this.idAccount.id, "&status=").concat(status), '_blank');
    },
    cashregister: function cashregister(status) {
      window.open("/api/report/cashregister?account=".concat(this.idCashRegister.id, "&status=").concat(status), '_blank');
    },
    chargesOne: function chargesOne() {
      window.open("/api/chargesOne?user=".concat(JSON.parse(localStorage.getItem('userInfo')).uid, "&getAll=false"), '_blank');
    },
    chargesTwo: function chargesTwo() {
      window.open("/api/chargesTwo?user=".concat(JSON.parse(localStorage.getItem('userInfo')).uid, "&getAll=false"), '_blank');
    },
    chargesThree: function chargesThree() {
      window.open("/api/chargesThree?user=".concat(JSON.parse(localStorage.getItem('userInfo')).uid, "&getAll=false"), '_blank');
    },
    chargesOneAll: function chargesOneAll() {
      window.open("/api/chargesOne?user=".concat(JSON.parse(localStorage.getItem('userInfo')).uid, "&getAll=true"), '_blank');
    },
    chargesTwoAll: function chargesTwoAll() {
      window.open("/api/chargesTwo?user=".concat(JSON.parse(localStorage.getItem('userInfo')).uid, "&getAll=true"), '_blank');
    },
    chargesThreeAll: function chargesThreeAll() {
      window.open("/api/chargesThree?user=".concat(JSON.parse(localStorage.getItem('userInfo')).uid, "&getAll=true"), '_blank');
    }
  }
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Reports/Report.vue?vue&type=template&id=2b80674e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Reports/Report.vue?vue&type=template&id=2b80674e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _vm.showItem("Ver reportes")
    ? _c(
        "div",
        [
          _c("vx-card", { attrs: { title: "Fechas" } }, [
            _c("div", { staticClass: "vx-row" }, [
              _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mt-5" },
                    [
                      _c("label", { staticClass: "vs-input--label" }, [
                        _vm._v("Fecha Inicio"),
                      ]),
                      _vm._v(" "),
                      _c("datepicker", {
                        attrs: { language: _vm.language, format: "dd/MM/yyyy" },
                        model: {
                          value: _vm.beginDate,
                          callback: function ($$v) {
                            _vm.beginDate = $$v
                          },
                          expression: "beginDate",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mt-5" },
                    [
                      _c("label", { staticClass: "vs-input--label" }, [
                        _vm._v("Fecha Final"),
                      ]),
                      _vm._v(" "),
                      _c("datepicker", {
                        attrs: { language: _vm.language, format: "dd/MM/yyyy" },
                        model: {
                          value: _vm.endDate,
                          callback: function ($$v) {
                            _vm.endDate = $$v
                          },
                          expression: "endDate",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm.showItem("Cobros")
            ? _c("vx-card", { attrs: { title: "Cobros" } }, [
                _c("div", { staticClass: "vx-row" }, [
                  _c("div", { staticClass: "vx-col w-full mb-2" }, [
                    _c(
                      "div",
                      { staticClass: "btn-group" },
                      [
                        _c(
                          "vs-button",
                          {
                            attrs: { color: "primary", type: "border" },
                            on: { click: _vm.chargesOne },
                          },
                          [_vm._v("Cobros atrasados")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            attrs: { color: "primary", type: "border" },
                            on: { click: _vm.chargesTwo },
                          },
                          [_vm._v("Cobros de hoy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            attrs: { color: "primary", type: "border" },
                            on: { click: _vm.chargesThree },
                          },
                          [_vm._v("Cobros cercanos")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.showItem("Todos los cobros")
            ? _c("vx-card", { attrs: { title: "Todos los cobros" } }, [
                _c("div", { staticClass: "vx-row" }, [
                  _c("div", { staticClass: "vx-col w-full mb-2" }, [
                    _c(
                      "div",
                      { staticClass: "btn-group" },
                      [
                        _c(
                          "vs-button",
                          {
                            attrs: { color: "primary", type: "border" },
                            on: { click: _vm.chargesOneAll },
                          },
                          [_vm._v("Todos los cobros atrasados")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            attrs: { color: "primary", type: "border" },
                            on: { click: _vm.chargesTwoAll },
                          },
                          [_vm._v("Todos los cobros de hoy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            attrs: { color: "primary", type: "border" },
                            on: { click: _vm.chargesThreeAll },
                          },
                          [_vm._v("Todos los cobros cercanos")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.showItem("Clientes")
            ? _c(
                "vx-card",
                { attrs: { title: "Clientes" } },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: {
                        color: "primary",
                        type: "border",
                        icon: "get_app",
                      },
                      on: { click: _vm.clients },
                    },
                    [_vm._v("Descargar")]
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.showItem("Solicitudes")
            ? _c(
                "vx-card",
                { attrs: { title: "Solicitudes" } },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: {
                        color: "primary",
                        type: "border",
                        icon: "get_app",
                      },
                      on: { click: _vm.request },
                    },
                    [_vm._v("Descargar")]
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.showItem("Créditos Activos")
            ? _c(
                "vx-card",
                { attrs: { title: "Créditos Activos" } },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: {
                        color: "primary",
                        type: "border",
                        icon: "get_app",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.loans(2)
                        },
                      },
                    },
                    [_vm._v("Descargar")]
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.showItem("Créditos Inactivos")
            ? _c(
                "vx-card",
                { attrs: { title: "Créditos Inactivos" } },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: {
                        color: "primary",
                        type: "border",
                        icon: "get_app",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.loans(1)
                        },
                      },
                    },
                    [_vm._v("Descargar")]
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.showItem("Créditos Anulados")
            ? _c(
                "vx-card",
                { attrs: { title: "Créditos Anulados" } },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: {
                        color: "primary",
                        type: "border",
                        icon: "get_app",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.loans(0)
                        },
                      },
                    },
                    [_vm._v("Descargar")]
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.showItem("Estado de créditos")
            ? _c("vx-card", { attrs: { title: "Estado de créditos" } }, [
                _c("div", { staticClass: "vx-row" }, [
                  _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
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
                            attrs: {
                              options: _vm.Loans,
                              filterable: false,
                              label: "name",
                              placeholder: "Seleccione un cliente",
                            },
                            on: {
                              search: _vm.onSearch,
                              input: _vm.selectedCustomer,
                            },
                            model: {
                              value: _vm.idLoan,
                              callback: function ($$v) {
                                _vm.idLoan = $$v
                              },
                              expression: "idLoan",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c("div", { staticClass: "vx-col w-full mt-5" }, [
                        _c("label", { staticClass: "vs-input--label" }, [
                          _vm._v("Reportes"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "btn-group" },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  color: "primary",
                                  type: "border",
                                  disabled: _vm.enableButtonsStausAccount,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.loansPayment(2)
                                  },
                                },
                              },
                              [_vm._v("Todos")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  color: "primary",
                                  type: "border",
                                  disabled: _vm.enableButtonsStausAccount,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.loansPayment(1)
                                  },
                                },
                              },
                              [_vm._v("Activos")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  color: "primary",
                                  type: "border",
                                  disabled: _vm.enableButtonsStausAccount,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.loansPayment(0)
                                  },
                                },
                              },
                              [_vm._v("Anulados")]
                            ),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.showItem("Estado de cuentas")
            ? _c("vx-card", { attrs: { title: "Estado de cuentas" } }, [
                _c("div", { staticClass: "vx-row" }, [
                  _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c(
                        "div",
                        { staticClass: "vx-col w-full mt-5" },
                        [
                          _c("label", { staticClass: "vs-input--label" }, [
                            _vm._v("Cuentas"),
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options: _vm.Accounts,
                              filterable: false,
                              label: "name",
                              placeholder: "Seleccione una cuenta",
                            },
                            on: {
                              search: _vm.onSearchAccounts,
                              input: _vm.selectedAccount,
                            },
                            model: {
                              value: _vm.idAccount,
                              callback: function ($$v) {
                                _vm.idAccount = $$v
                              },
                              expression: "idAccount",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c("div", { staticClass: "vx-col w-full mt-5" }, [
                        _c("label", { staticClass: "vs-input--label" }, [
                          _vm._v("Reportes"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "btn-group" },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  color: "primary",
                                  type: "border",
                                  disabled:
                                    _vm.enableButtonsStausNotCashRegister,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.accounts(2)
                                  },
                                },
                              },
                              [_vm._v("Todos")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  color: "primary",
                                  type: "border",
                                  disabled:
                                    _vm.enableButtonsStausNotCashRegister,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.accounts(0)
                                  },
                                },
                              },
                              [_vm._v("Entradas")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  color: "primary",
                                  type: "border",
                                  disabled:
                                    _vm.enableButtonsStausNotCashRegister,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.accounts(1)
                                  },
                                },
                              },
                              [_vm._v("Salidas")]
                            ),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.showItem("Estado de cajas")
            ? _c("vx-card", { attrs: { title: "Estado de cajas" } }, [
                _c("div", { staticClass: "vx-row" }, [
                  _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c(
                        "div",
                        { staticClass: "vx-col w-full mt-5" },
                        [
                          _c("label", { staticClass: "vs-input--label" }, [
                            _vm._v("Cajas"),
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              options: _vm.CashRegister,
                              filterable: false,
                              label: "name",
                              placeholder: "Seleccione una caja",
                            },
                            on: {
                              search: _vm.onSearchCashRegister,
                              input: _vm.selectedCashRegister,
                            },
                            model: {
                              value: _vm.idCashRegister,
                              callback: function ($$v) {
                                _vm.idCashRegister = $$v
                              },
                              expression: "idCashRegister",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c("div", { staticClass: "vx-col w-full mt-5" }, [
                        _c("label", { staticClass: "vs-input--label" }, [
                          _vm._v("Reportes"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "btn-group" },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  color: "primary",
                                  type: "border",
                                  disabled: _vm.enableButtonsStausCashRegister,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.cashregister(2)
                                  },
                                },
                              },
                              [_vm._v("Todos")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  color: "primary",
                                  type: "border",
                                  disabled: _vm.enableButtonsStausCashRegister,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.cashregister(0)
                                  },
                                },
                              },
                              [_vm._v("Entradas")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  color: "primary",
                                  type: "border",
                                  disabled: _vm.enableButtonsStausCashRegister,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.cashregister(1)
                                  },
                                },
                              },
                              [_vm._v("Salidas")]
                            ),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ])
            : _vm._e(),
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

/***/ "./resources/js/src/views/Reports/Report.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/Reports/Report.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Report_vue_vue_type_template_id_2b80674e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=2b80674e& */ "./resources/js/src/views/Reports/Report.vue?vue&type=template&id=2b80674e&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Reports/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Report_vue_vue_type_template_id_2b80674e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Report_vue_vue_type_template_id_2b80674e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Reports/Report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Reports/Report.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/Reports/Report.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Reports/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Reports/Report.vue?vue&type=template&id=2b80674e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/Reports/Report.vue?vue&type=template&id=2b80674e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2b80674e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=template&id=2b80674e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Reports/Report.vue?vue&type=template&id=2b80674e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2b80674e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_2b80674e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);