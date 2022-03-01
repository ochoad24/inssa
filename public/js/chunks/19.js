(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Notification/Print.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Notification/Print.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_eight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/eight */ "./resources/js/src/utils/eight.js");
/* harmony import */ var vue_html_to_paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-html-to-paper */ "./node_modules/vue-html-to-paper/dist/index.js");
/* harmony import */ var vue_html_to_paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_html_to_paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js");
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_moment__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_moment__WEBPACK_IMPORTED_MODULE_4___default.a, {
  moment: moment
});
var options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=no", "scrollbars=no"],
  styles: ["/css/bootstrap.min.css", "/js/bootstrap.min.js", "/js/jquery.min.js", "/css/voucher.css"]
};
vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_html_to_paper__WEBPACK_IMPORTED_MODULE_3___default.a, options);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loans: []
    };
  },
  methods: {
    mymoney: function mymoney(value) {
      return _utils_eight__WEBPACK_IMPORTED_MODULE_2__["eight"].money(parseFloat(value));
    },
    isNull: function isNull(value) {
      if (value === null) return "----";
      return value;
    },
    getLoans: function getLoans() {
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/getNotifications").then(function (response) {
        var loans = response.data;
        vm.loans = loans.sort(function (a, b) {
          return a.description > b.description ? 1 : -1;
        });
      }).catch(function (error) {
        console.log(error);
      });
    },
    getDateNow: function getDateNow() {
      return moment().locale("es").format("LL");
    },
    convertDate: function convertDate(date) {
      return moment(date).locale("es").format("LL");
    },
    print: function print() {
      this.$htmlToPaper("printMe");
    },
    parseDecimalFixed: function parseDecimalFixed(value) {
      return parseFloat(value).toFixed(2);
    },
    parseDecimal: function parseDecimal(value) {
      return parseFloat(this.parseDecimalFixed(value));
    },
    getPayment: function getPayment(loan, loans, dayinit, dayend, days, daysmonth, daysone, daystatus, daysdiff, capital, datebegin, samemonth) {
      var vm = this;
      var interestday = 0;
      var interest = 0;

      if (loans.length > 0) {
        // MENOR O IGUAL QUE DOS
        if (daystatus !== "IGUAL" && daysdiff <= 2 && samemonth == true) {
          var newDays = 0;
          if (daystatus === "MENOR") newDays = days + daysdiff;else newDays = days - daysdiff;
          interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * newDays));
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
          daystatus = "IGUAL";
        } else if (daystatus !== "IGUAL" && daysdiff <= 2 && samemonth == false) {
          interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
          daystatus = "IGUAL";
        } // EXACTAMENTE IGUAL SAME MONTH TRUE
        else if (daystatus === "IGUAL" && samemonth == true) {
          interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * days));
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
        } // EXACTAMENTE IGUAL SAME MONTH FALSE
        else if (daystatus === "IGUAL" && samemonth == false) {
          interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
        } // MENOR
        else if (daystatus === "MENOR") {
          interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * days));
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
        } // MAYOR
        else if (daystatus === "MAYOR") {
          var amountinfringment = 0;

          if (parseInt(loan.amount) >= parseInt(0) && parseInt(loan.amount) <= parseInt(5000)) {
            amountinfringment = vm.parseDecimal(vm.parseDecimal(10) * vm.parseDecimal(daysdiff));
          } else if (parseInt(loan.amount) > parseInt(5000) && parseInt(loan.amount) <= parseInt(10000)) {
            amountinfringment = vm.parseDecimal(vm.parseDecimal(15) * vm.parseDecimal(daysdiff));
          } else if (parseInt(loan.amount) > parseInt(10000)) {
            amountinfringment = vm.parseDecimal(vm.parseDecimal(20) * vm.parseDecimal(daysdiff));
          } // BEGIN CALCULATE INTEREST / INTERESTDAY


          interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth) + amountinfringment);
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth)); // END CALCULATE INTEREST / INTERESTDAY
        }
      } else {
        capital = loan.monthlyAmount; // ES IGUAL O DOS DIAS ANTES O DOS DIAS DESPUES

        if (daystatus !== "IGUAL" && daysdiff <= 2 && samemonth == true) {
          var _newDays = 0;
          if (daystatus === "MENOR") _newDays = days + daysdiff;else _newDays = days - daysdiff;
          interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * _newDays));
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
          daystatus = "IGUAL";
        } // ES IGUAL O DOS DIAS ANTES O DOS DIAS DESPUES
        else if (daystatus !== "IGUAL" && daysdiff <= 2 && samemonth == false) {
          interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
          daystatus = "IGUAL";
        } // EXACTAMENTE IGUAL SAME MONTHE TRUE
        else if (daystatus === "IGUAL" && samemonth == true) {
          interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * days));
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
        } // EXACTAMENTE IGUAL SAME MONT FALSE
        else if (daystatus === "IGUAL" && samemonth == false) {
          vm.interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
        } // MENOR
        else if (daystatus === "MENOR") {
          interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * days));
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth));
        } // MAYOR
        else if (daystatus === "MAYOR") {
          var _amountinfringment = 0;

          if (parseInt(loan.amount) >= parseInt(0) && parseInt(loan.amount) <= parseInt(5000)) {
            _amountinfringment = vm.parseDecimal(vm.parseDecimal(10) * vm.parseDecimal(daysdiff));
          } else if (parseInt(loan.amount) > parseInt(5000) && parseInt(loan.amount) <= parseInt(10000)) {
            _amountinfringment = vm.parseDecimal(vm.parseDecimal(15) * vm.parseDecimal(daysdiff));
          } else if (parseInt(loan.amount) > parseInt(10000)) {
            _amountinfringment = vm.parseDecimal(vm.parseDecimal(20) * vm.parseDecimal(daysdiff));
          } // BEGIN CALCULATE INTEREST / INTERESTDAY


          interestday = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth) + _amountinfringment);
          interest = Math.ceil(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(vm.parseDecimal(loan.balance) * vm.parseDecimal(vm.parseDecimal(loan.percentage) / 100)) / daysmonth) * daysmonth)); // END CALCULATE INTEREST / INTERESTDAY
        }
      }

      return {
        interest: interest,
        interestday: interestday
      };
    }
  },
  mounted: function mounted() {
    this.getLoans();
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

/***/ "./node_modules/vue-html-to-paper/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-html-to-paper/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function addStyles (win, styles) {
  styles.forEach(style => {
    let link = win.document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', style);
    win.document.getElementsByTagName('head')[0].appendChild(link);
  });
}

function openWindow (url, name, props) {
  let windowRef = null;
  windowRef = window.open(url, name, props);
  if (!windowRef.opener) {
    windowRef.opener = self;
  }
  windowRef.focus();
  return windowRef;
}
  
const VueHtmlToPaper = {
  install (Vue, options = {}) {
    Vue.prototype.$htmlToPaper = (el, localOptions, cb = () => true) => {
      let defaultName = '_blank', 
        defaultSpecs = ['fullscreen=yes','titlebar=yes', 'scrollbars=yes'],
        defaultReplace = true,
        defaultStyles = [];
      let {
        name = defaultName,
        specs = defaultSpecs,
        replace = defaultReplace,
        styles = defaultStyles,
      } = options;

      // If has localOptions
      // TODO: improve logic
      if (!!localOptions) {
        if (localOptions.name) name = localOptions.name;
        if (localOptions.specs) specs = localOptions.specs;
        if (localOptions.replace) replace = localOptions.replace;
        if (localOptions.styles) styles = localOptions.styles;
      }

      specs = !!specs.length ? specs.join(',') : '';

      const element = window.document.getElementById(el);

      if (!element) {
        alert(`Element to print #${el} not found!`);
        return;
      }
      
      const url = '';
      const win = openWindow(url, name, specs);

      win.document.write(`
        <html>
          <head>
            <title>${window.document.title}</title>
          </head>
          <body>
            ${element.innerHTML}
          </body>
        </html>
      `);

      addStyles(win, styles);
      
      setTimeout(() => {
        win.document.close();
        win.focus();
        win.print();
        setTimeout(function () {window.close();}, 1);
        cb();
      }, 1000);
        
      return true;
    };
  },
};

exports.default = VueHtmlToPaper;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Notification/Print.vue?vue&type=template&id=426eec93&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Notification/Print.vue?vue&type=template&id=426eec93& ***!
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
  return _c(
    "div",
    [
      _c(
        "vx-card",
        { attrs: { title: "CRÉDITOS PENDIENTES" } },
        [
          _c("div", { attrs: { id: "printMe" } }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("div", { staticClass: "row p-2 table-active" }, [
                        _c("div", { staticClass: "col-md-6 text-right" }, [
                          _c("p", { staticClass: "font-weight-bold mb-1" }, [
                            _vm._v(
                              "\n                                        CRÉDITOS PENDIENTES\n                                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-muted" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.getDateNow()) +
                                "\n                                    "
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.loans, function (loan) {
                        return _c("div", { key: loan.id }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-weight-bold col-md-6 text-left",
                              },
                              [
                                _vm._v(
                                  "\n                                        CRÉDITO NO." +
                                    _vm._s(loan.loan) +
                                    " -\n                                        " +
                                    _vm._s(loan.description) +
                                    "\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "col-md-3 text-left" }, [
                              _vm._v(
                                "\n                                        Balance:\n                                        " +
                                  _vm._s(
                                    _vm.mymoney(loan.normal_credit.LOAN.balance)
                                  ) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-3 text-left" }, [
                              _c("p", [
                                _vm._v(
                                  "\n                                            Cliente: " +
                                    _vm._s(loan.client.name) +
                                    "\n                                        "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 text-left" }, [
                              _c("p", [
                                _vm._v("DPI: " + _vm._s(loan.client.dpi)),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 text-left" }, [
                              _c("p", [
                                _vm._v(
                                  "\n                                            Departamento:\n                                            " +
                                    _vm._s(loan.client.nameDepartament) +
                                    "\n                                        "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 text-left" }, [
                              _c("p", [
                                _vm._v(
                                  "\n                                            Municipio:\n                                            " +
                                    _vm._s(loan.client.nameTown) +
                                    "\n                                        "
                                ),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-3 text-left" }, [
                              _c("p", [
                                _vm._v(
                                  "\n                                            Dirección:\n                                            " +
                                    _vm._s(loan.client.address) +
                                    "\n                                        "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 text-left" }, [
                              _c("p", [
                                _vm._v(
                                  "\n                                            Colonia:\n                                            " +
                                    _vm._s(_vm.isNull(loan.client.suburb)) +
                                    "\n                                        "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 text-left" }, [
                              _c("p", [
                                _vm._v(
                                  "\n                                            Zona:\n                                            " +
                                    _vm._s(_vm.isNull(loan.client.zone)) +
                                    "\n                                        "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 text-left" }, [
                              _c("p", [
                                _vm._v(
                                  "\n                                            Teléfono:\n                                            " +
                                    _vm._s(_vm.isNull(loan.client.mobile)) +
                                    "/" +
                                    _vm._s(_vm.isNull(loan.client.telephone)) +
                                    "\n                                        "
                                ),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-weight-bold col-md-3 text-left",
                              },
                              [
                                _vm._v(
                                  "\n                                        Interés normal\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "col-md-3 text-left" }, [
                              _vm._v(
                                "\n                                        Fecha:\n                                        " +
                                  _vm._s(_vm.convertDate(loan.paymentDate)) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "col-md-3 text-left" }, [
                              _vm._v(
                                "\n                                        Interés:\n                                        " +
                                  _vm._s(
                                    _vm.mymoney(
                                      _vm.getPayment(
                                        loan.normal_credit.LOAN,
                                        loan.normal_credit.LOANS,
                                        loan.normal_credit.DAYINIT,
                                        loan.normal_credit.DAYEND,
                                        loan.normal_credit.DAYS,
                                        loan.normal_credit.DAYSMONTH,
                                        loan.normal_credit.DAYSONE,
                                        loan.normal_credit.DAYSTATUS,
                                        loan.normal_credit.DAYSDIFF,
                                        loan.normal_credit.CAPITAL,
                                        loan.normal_credit.DATEBEGIN,
                                        loan.normal_credit.SAMEMONTH
                                      ).interest
                                    )
                                  ) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-weight-bold col-md-3 text-left",
                              },
                              [
                                _vm._v(
                                  "\n                                        Interés hasta hoy\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "col-md-3 text-left" }, [
                              _vm._v(
                                "\n                                        Fecha:\n                                        " +
                                  _vm._s(_vm.convertDate(loan.paymentNow)) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "col-md-3 text-left" }, [
                              _vm._v(
                                "\n                                        Interés:\n                                        " +
                                  _vm._s(
                                    _vm.mymoney(
                                      _vm.getPayment(
                                        loan.current_credit.LOAN,
                                        loan.current_credit.LOANS,
                                        loan.current_credit.DAYINIT,
                                        loan.current_credit.DAYEND,
                                        loan.current_credit.DAYS,
                                        loan.current_credit.DAYSMONTH,
                                        loan.current_credit.DAYSONE,
                                        loan.current_credit.DAYSTATUS,
                                        loan.current_credit.DAYSDIFF,
                                        loan.current_credit.CAPITAL,
                                        loan.current_credit.DATEBEGIN,
                                        loan.current_credit.SAMEMONTH
                                      ).interestday
                                    )
                                  ) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                        ])
                      }),
                    ],
                    2
                  ),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "btnx",
              attrs: { type: "filled" },
              on: { click: _vm.print },
            },
            [_vm._v("Imprimir")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


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

/***/ "./resources/js/src/views/Notification/Print.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/Notification/Print.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Print_vue_vue_type_template_id_426eec93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Print.vue?vue&type=template&id=426eec93& */ "./resources/js/src/views/Notification/Print.vue?vue&type=template&id=426eec93&");
/* harmony import */ var _Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Print.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Notification/Print.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Print_vue_vue_type_template_id_426eec93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Print_vue_vue_type_template_id_426eec93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Notification/Print.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Notification/Print.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/Notification/Print.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Print.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Notification/Print.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Notification/Print.vue?vue&type=template&id=426eec93&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/Notification/Print.vue?vue&type=template&id=426eec93& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_template_id_426eec93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Print.vue?vue&type=template&id=426eec93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Notification/Print.vue?vue&type=template&id=426eec93&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_template_id_426eec93___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_template_id_426eec93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);