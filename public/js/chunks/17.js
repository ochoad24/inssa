(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/PrintRequest.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Request/PrintRequest.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_eight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/eight */ "./resources/js/src/utils/eight.js");
/* harmony import */ var _utils_NumeroALetras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/NumeroALetras */ "./resources/js/src/utils/NumeroALetras.js");
/* harmony import */ var vue_html_to_paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-html-to-paper */ "./node_modules/vue-html-to-paper/dist/index.js");
/* harmony import */ var vue_html_to_paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_html_to_paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js");
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_moment__WEBPACK_IMPORTED_MODULE_6__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(vue_moment__WEBPACK_IMPORTED_MODULE_6___default.a, {
  moment: moment
});
var options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=no", "scrollbars=no"],
  styles: ["/css/bootstrap.min.css", "/js/bootstrap.min.js", "/js/jquery.min.js", "/css/voucher.css"]
};
vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(vue_html_to_paper__WEBPACK_IMPORTED_MODULE_5___default.a, options);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
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
    mymoney: function mymoney(value) {
      return _utils_eight__WEBPACK_IMPORTED_MODULE_3__["eight"].money(parseFloat(value));
    },
    isNull: function isNull(value) {
      if (value === null) return "----";
      return value;
    },
    convertDate: function convertDate(date) {
      return moment(date).locale("es").format("LL");
    },
    getRequest: function () {
      var _getRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var vm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                vm = this;
                vm.$vs.loading();
                axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/demand/".concat(vm.$route.query.id)).then(function (response) {
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
                }).catch(function (error) {
                  console.log(error);
                  vm.$vs.loading.close();
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getRequest() {
        return _getRequest.apply(this, arguments);
      }

      return getRequest;
    }(),
    getDepartament: function () {
      var _getDepartament = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id, type) {
        var vm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof id === "undefined")) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                vm = this;
                vm.$vs.loading();
                axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/departament/".concat(id)).then(function (response) {
                  vm.$vs.loading.close();
                  if (type === "C") vm.departamentCustomer = response.data.name;else vm.departamentGuarantor = response.data.name;
                }).catch(function (error) {
                  console.log(error);
                  vm.$vs.loading.close();
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getDepartament(_x, _x2) {
        return _getDepartament.apply(this, arguments);
      }

      return getDepartament;
    }(),
    getTown: function () {
      var _getTown = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id, type) {
        var vm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(typeof id === "undefined")) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                vm = this;
                vm.$vs.loading();
                axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/town/".concat(id)).then(function (response) {
                  vm.$vs.loading.close();
                  if (type === "C") vm.townCustomer = response.data.name;else vm.townGuarantor = response.data.name;
                }).catch(function (error) {
                  console.log(error);
                  vm.$vs.loading.close();
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getTown(_x3, _x4) {
        return _getTown.apply(this, arguments);
      }

      return getTown;
    }(),
    print: function print() {
      this.$htmlToPaper("printMe");
    }
  },
  mounted: function mounted() {
    this.getRequest();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/PrintRequest.vue?vue&type=template&id=a63e7428&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Request/PrintRequest.vue?vue&type=template&id=a63e7428& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        { attrs: { title: "Descargar solicitud" } },
        [
          _c("div", { attrs: { id: "printMe" } }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row p-2 table-active" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("img", {
                          attrs: {
                            src: "/images/crediprendas.png",
                            width: "50%",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6 text-right" }, [
                        _c("p", { staticClass: "font-weight-bold mb-1" }, [
                          _vm._v(
                            "\n                                        SOLICITUD DE CR??DITO\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-muted" }, [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(_vm.convertDate(_vm.request.created_at)) +
                              "\n                                    "
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row pb-3 p-3" }, [
                      _c("p", { staticClass: "font-weight-bold mb-1" }, [
                        _vm._v(
                          "\n                                    DATOS DEL SOLICITANTE\n                                "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row pb-3 p-3" }, [
                      _c("div", { staticClass: "col-md-4 text-left" }, [
                        _c("p", [
                          _vm._v(
                            "\n                                        Primer nombre:\n                                        " +
                              _vm._s(_vm.customer.firstName) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Primer apellido:\n                                        " +
                              _vm._s(_vm.customer.firstLastName) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("DPI: " + _vm._s(_vm.customer.dpi))]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Edad: " + _vm._s(_vm.customer.age) + " a??os"),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Estado civil:\n                                        " +
                              _vm._s(_vm.customer.civilStatus) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Colonia:\n                                        " +
                              _vm._s(_vm.isNull(_vm.customer.suburb)) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Municipio: " + _vm._s(_vm.townCustomer)),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Tiempo de residir:\n                                        " +
                              _vm._s(_vm.customer.timeHome) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Nombre del padre:\n                                        " +
                              _vm._s(_vm.customer.fatherName) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Celular: " + _vm._s(_vm.customer.mobile)),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Actividad ec??nomica a la que se\n                                        dedica:\n                                        " +
                              _vm._s(_vm.customer.economicActivity) +
                              "\n                                    "
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 text-left" }, [
                        _c("p", [
                          _vm._v(
                            "\n                                        Segundo nombre:\n                                        " +
                              _vm._s(_vm.customer.secondName) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Segundo apellido:\n                                        " +
                              _vm._s(_vm.customer.secondLastName) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "NIT: " + _vm._s(_vm.isNull(_vm.customer.nit))
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Sexo: " + _vm._s(_vm.customer.gender)),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Nacionalidad:\n                                        " +
                              _vm._s(_vm.customer.nationality) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Zona: " + _vm._s(_vm.isNull(_vm.customer.zone))
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Tel??fono de residencia:\n                                        " +
                              _vm._s(_vm.isNull(_vm.customer.telephone)) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Pago mensual:\n                                        " +
                              _vm._s(_vm.customer.monthlyPayment) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Nombre de la madre:\n                                        " +
                              _vm._s(_vm.customer.motherName) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Email: " +
                              _vm._s(_vm.isNull(_vm.customer.email)) +
                              "\n                                    "
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 text-left" }, [
                        _c("p", [
                          _vm._v(
                            "\n                                        Apellido de casada:\n                                        " +
                              _vm._s(_vm.isNull(_vm.customer.marriedName)) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        ??\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Fecha de nacimiento:\n                                        " +
                              _vm._s(_vm.convertDate(_vm.customer.birthDate)) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        ??Cu??ntas personas dependen de\n                                        usted?: " +
                              _vm._s(_vm.customer.peopleDepend) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Direcci??n: " + _vm._s(_vm.customer.address)),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Departamento:\n                                        " +
                              _vm._s(_vm.departamentCustomer) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Residencia: " + _vm._s(_vm.customer.home)),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        ??\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        ??\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                        Vehiculo:\n                                        " +
                              _vm._s(
                                _vm.customer.carStatus == 1 ? "Si" : "No"
                              ) +
                              _vm._s(
                                _vm.customer.carStatus == 1
                                  ? " Marca: " +
                                      _vm.customer.carBrand +
                                      " A??o: " +
                                      _vm.customer.carYear +
                                      " Placas: " +
                                      _vm.customer.carLicencePlates
                                  : ""
                              ) +
                              "\n                                    "
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row pb-3 p-3" }, [
                      _vm.guarantor != null
                        ? _c("p", { staticClass: "font-weight-bold mb-1" }, [
                            _vm._v(
                              "\n                                    DATOS DEL FIADOR\n                                "
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _vm.guarantor !== null
                      ? _c("div", { staticClass: "row pb-3 p-3" }, [
                          _c("div", { staticClass: "col-md-4 text-left" }, [
                            _c("p", [
                              _vm._v(
                                "\n                                        Primer nombre:\n                                        " +
                                  _vm._s(_vm.guarantor.firstName) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Primer apellido:\n                                        " +
                                  _vm._s(_vm.guarantor.firstLastName) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v("DPI: " + _vm._s(_vm.guarantor.dpi)),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Edad: " + _vm._s(_vm.guarantor.age) + " a??os"
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Estado civil:\n                                        " +
                                  _vm._s(_vm.guarantor.civilStatus) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Colonia:\n                                        " +
                                  _vm._s(_vm.isNull(_vm.guarantor.suburb)) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v("Municipio: " + _vm._s(_vm.townGuarantor)),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Tiempo de residir:\n                                        " +
                                  _vm._s(_vm.guarantor.timeHome) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Nombre del padre:\n                                        " +
                                  _vm._s(_vm.guarantor.fatherName) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Celular: " + _vm._s(_vm.guarantor.mobile)
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Actividad ec??nomica a la que se\n                                        dedica:\n                                        " +
                                  _vm._s(_vm.guarantor.economicActivity) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4 text-left" }, [
                            _c("p", [
                              _vm._v(
                                "\n                                        Segundo nombre:\n                                        " +
                                  _vm._s(_vm.guarantor.secondName) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Segundo apellido:\n                                        " +
                                  _vm._s(_vm.guarantor.secondLastName) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "NIT: " + _vm._s(_vm.isNull(_vm.guarantor.nit))
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v("Sexo: " + _vm._s(_vm.guarantor.gender)),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Nacionalidad:\n                                        " +
                                  _vm._s(_vm.guarantor.nationality) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Zona: " +
                                  _vm._s(_vm.isNull(_vm.guarantor.zone))
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Tel??fono de residencia:\n                                        " +
                                  _vm._s(_vm.isNull(_vm.guarantor.telephone)) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Pago mensual:\n                                        " +
                                  _vm._s(_vm.guarantor.monthlyPayment) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Nombre de la madre:\n                                        " +
                                  _vm._s(_vm.guarantor.motherName) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Email: " +
                                  _vm._s(_vm.isNull(_vm.guarantor.email)) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4 text-left" }, [
                            _c("p", [
                              _vm._v(
                                "\n                                        Apellido de casada:\n                                        " +
                                  _vm._s(
                                    _vm.isNull(_vm.guarantor.marriedName)
                                  ) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        ??\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Fecha de nacimiento:\n                                        " +
                                  _vm._s(
                                    _vm.convertDate(_vm.guarantor.birthDate)
                                  ) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        ??Cu??ntas personas dependen de\n                                        usted?: " +
                                  _vm._s(_vm.guarantor.peopleDepend) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Direcci??n: " + _vm._s(_vm.guarantor.address)
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Departamento:\n                                        " +
                                  _vm._s(_vm.departamentGuarantor) +
                                  "\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Residencia: " + _vm._s(_vm.guarantor.home)
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        ??\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        ??\n                                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                        Vehiculo:\n                                        " +
                                  _vm._s(
                                    _vm.guarantor.carStatus == 1 ? "Si" : "No"
                                  ) +
                                  _vm._s(
                                    _vm.guarantor.carStatus == 1
                                      ? " Marca: " +
                                          _vm.guarantor.carBrand +
                                          " A??o: " +
                                          _vm.guarantor.carYear +
                                          " Placas: " +
                                          _vm.guarantor.carLicencePlates
                                      : ""
                                  ) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row pb-3 p-3" }, [
                      _c("p", { staticClass: "font-weight-bold mb-1" }, [
                        _vm._v(
                          "\n                                    DETALLES DEL CR??DITO\n                                "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row pb-3 p-3" }, [
                      _c("div", { staticClass: "col-md-4 text-left" }, [
                        _c("p", [
                          _vm._v(
                            "Saldo a financiar: " +
                              _vm._s(_vm.mymoney(_vm.request.balanceFinance))
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 text-left" }, [
                        _c("p", [
                          _vm._v(
                            "Plazo solicitado: " + _vm._s(_vm.request.terms)
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 text-left" }, [
                        _c("p", [
                          _vm._v(
                            "Primera cuota: " +
                              _vm._s(
                                _vm.mymoney(_vm.request.creditsInstallments)
                              )
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm.guarantor != null
                      ? _c("div", { staticClass: "row pb-3 p-3" }, [
                          _c("div", { staticClass: "col-md-4 text-center" }, [
                            _c("p", [
                              _vm._v(
                                "\n                                        F.Cliente _______________________\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4 text-center" }, [
                            _c("p", [
                              _vm._v(
                                "\n                                        F.Fiador _______________________\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4 text-center" }, [
                            _c("p", [
                              _vm._v(
                                "\n                                        Receptor ________________________\n                                    "
                              ),
                            ]),
                          ]),
                        ])
                      : _c("div", { staticClass: "row pb-3 p-3" }, [
                          _c("div", { staticClass: "col-md-6 text-center" }, [
                            _c("p", [
                              _vm._v(
                                "\n                                        F.Cliente _______________________\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6 text-center" }, [
                            _c("p", [
                              _vm._v(
                                "\n                                        Receptor ________________________\n                                    "
                              ),
                            ]),
                          ]),
                        ]),
                  ]),
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

/***/ "./resources/js/src/utils/NumeroALetras.js":
/*!*************************************************!*\
  !*** ./resources/js/src/utils/NumeroALetras.js ***!
  \*************************************************/
/*! exports provided: numeroaletras */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numeroaletras", function() { return numeroaletras; });
/*************************************************************/
// NumeroALetras
// The MIT License (MIT)
// 
// Copyright (c) 2015 Luis Alfredo Chee 
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// 
// @author Rodolfo Carmona
// @contributor Jean (jpbadoino@gmail.com)

/*************************************************************/
var numeroaletras = {
  Unidades: function Unidades(num) {
    switch (num) {
      case 1:
        return "UN";

      case 2:
        return "DOS";

      case 3:
        return "TRES";

      case 4:
        return "CUATRO";

      case 5:
        return "CINCO";

      case 6:
        return "SEIS";

      case 7:
        return "SIETE";

      case 8:
        return "OCHO";

      case 9:
        return "NUEVE";
    }

    return "";
  },
  //Unidades()
  Decenas: function Decenas(num) {
    var decena = Math.floor(num / 10);
    var unidad = num - decena * 10;

    switch (decena) {
      case 1:
        switch (unidad) {
          case 0:
            return "DIEZ";

          case 1:
            return "ONCE";

          case 2:
            return "DOCE";

          case 3:
            return "TRECE";

          case 4:
            return "CATORCE";

          case 5:
            return "QUINCE";

          default:
            return "DIECI" + this.Unidades(unidad);
        }

      case 2:
        switch (unidad) {
          case 0:
            return "VEINTE";

          default:
            return "VEINTI" + this.Unidades(unidad);
        }

      case 3:
        return this.DecenasY("TREINTA", unidad);

      case 4:
        return this.DecenasY("CUARENTA", unidad);

      case 5:
        return this.DecenasY("CINCUENTA", unidad);

      case 6:
        return this.DecenasY("SESENTA", unidad);

      case 7:
        return this.DecenasY("SETENTA", unidad);

      case 8:
        return this.DecenasY("OCHENTA", unidad);

      case 9:
        return this.DecenasY("NOVENTA", unidad);

      case 0:
        return this.Unidades(unidad);
    }
  },
  //Unidades()
  DecenasY: function DecenasY(strSin, numUnidades) {
    if (numUnidades > 0) return strSin + " Y " + this.Unidades(numUnidades);
    return strSin;
  },
  //DecenasY()
  Centenas: function Centenas(num) {
    var centenas = Math.floor(num / 100);
    var decenas = num - centenas * 100;

    switch (centenas) {
      case 1:
        if (decenas > 0) return "CIENTO " + this.Decenas(decenas);
        return "CIEN";

      case 2:
        return "DOSCIENTOS " + this.Decenas(decenas);

      case 3:
        return "TRESCIENTOS " + this.Decenas(decenas);

      case 4:
        return "CUATROCIENTOS " + this.Decenas(decenas);

      case 5:
        return "QUINIENTOS " + this.Decenas(decenas);

      case 6:
        return "SEISCIENTOS " + this.Decenas(decenas);

      case 7:
        return "SETECIENTOS " + this.Decenas(decenas);

      case 8:
        return "OCHOCIENTOS " + this.Decenas(decenas);

      case 9:
        return "NOVECIENTOS " + this.Decenas(decenas);
    }

    return this.Decenas(decenas);
  },
  //Centenas()
  Seccion: function Seccion(num, divisor, strSingular, strPlural) {
    var cientos = Math.floor(num / divisor);
    var resto = num - cientos * divisor;
    var letras = "";
    if (cientos > 0) if (cientos > 1) letras = this.Centenas(cientos) + " " + strPlural;else letras = strSingular;
    if (resto > 0) letras += "";
    return letras;
  },
  //Seccion()
  Miles: function Miles(num) {
    var divisor = 1000;
    var cientos = Math.floor(num / divisor);
    var resto = num - cientos * divisor;
    var strMiles = this.Seccion(num, divisor, "UN MIL", "MIL");
    var strCentenas = this.Centenas(resto);
    if (strMiles == "") return strCentenas;
    return strMiles + " " + strCentenas;
  },
  //Miles()
  Millones: function Millones(num) {
    var divisor = 1000000;
    var cientos = Math.floor(num / divisor);
    var resto = num - cientos * divisor;
    var strMillones = this.Seccion(num, divisor, "UN MILLON DE", "MILLONES DE");
    var strMiles = this.Miles(resto);
    if (strMillones == "") return strMiles;
    return strMillones + " " + strMiles;
  },
  //Millones()
  NumeroALetras: function NumeroALetras(num) {
    var data = {
      numero: num,
      enteros: Math.floor(num),
      centavos: Math.round(num * 100) - Math.floor(num) * 100,
      letrasCentavos: "",
      letrasMonedaPlural: "QUETZALES",
      //"PESOS", 'D??lares', 'Bol??vares', 'etcs'
      letrasMonedaSingular: "QUETZAL",
      //"PESO", 'D??lar', 'Bolivar', 'etc'
      letrasMonedaCentavoPlural: "CENTAVOS",
      letrasMonedaCentavoSingular: "CENTAVO"
    };

    if (data.centavos > 0) {
      // data.letrasCentavos = "CON " + (function (){
      //     if (data.centavos == 1)
      //         return this.Millones(data.centavos) + " " + data.letrasMonedaCentavoSingular;
      //     else
      //         return this.Millones(data.centavos) + " " + data.letrasMonedaCentavoPlural;
      //     })();
      if (data.centavos == 1) data.letrasCentavos = "CON " + this.Millones(data.centavos) + " " + data.letrasMonedaCentavoSingular;else data.letrasCentavos = "CON " + this.Millones(data.centavos) + " " + data.letrasMonedaCentavoPlural;
    }

    ;
    if (data.enteros == 0) return "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
    if (data.enteros == 1) return this.Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;else return this.Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
  } //NumeroALetras()

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
      // console.log("CUI vac??o");
      return true;
    }

    var cuiRegExp = /^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/;

    if (!cuiRegExp.test(cui)) {
      // console.log("CUI con formato inv??lido");
      return false;
    }

    cui = cui.replace(/\s/, '');
    var depto = parseInt(cui.substring(9, 11), 10);
    var muni = parseInt(cui.substring(11, 13));
    var numero = cui.substring(0, 8);
    var verificador = parseInt(cui.substring(8, 9)); // Se asume que la codificaci??n de Municipios y
    // departamentos es la misma que esta publicada en
    // http://goo.gl/EsxN1a
    // Listado de municipios actualizado segun:
    // http://goo.gl/QLNglm
    // Este listado contiene la cantidad de municipios
    // existentes en cada departamento para poder
    // determinar el c??digo m??ximo aceptado por cada
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
    /* 03 - Sacatep??quez tiene:   */
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
    /* 07 - Solol?? tiene:         */
    19
    /* municipios. */
    ,
    /* 08 - Totonicap??n tiene:    */
    8
    /* municipios. */
    ,
    /* 09 - Quetzaltenango tiene: */
    24
    /* municipios. */
    ,
    /* 10 - Suchitep??quez tiene:  */
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
    /* 14 - Quich?? tiene:         */
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
    /* 17 - Pet??n tiene:          */
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
      // console.log("CUI con c??digo de municipio o departamento inv??lido.");
      return false;
    }

    if (depto > munisPorDepto.length) {
      // console.log("CUI con c??digo de departamento inv??lido.");
      return false;
    }

    if (muni > munisPorDepto[depto - 1]) {
      // console.log("CUI con c??digo de municipio inv??lido.");
      return false;
    }

    var total = 0;

    for (var i = 0; i < numero.length; i++) {
      total += numero[i] * (i + 2);
    }

    var modulo = total % 11; // console.log("CUI con m??dulo: " + modulo);

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

/***/ "./resources/js/src/views/Request/PrintRequest.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/Request/PrintRequest.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrintRequest_vue_vue_type_template_id_a63e7428___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintRequest.vue?vue&type=template&id=a63e7428& */ "./resources/js/src/views/Request/PrintRequest.vue?vue&type=template&id=a63e7428&");
/* harmony import */ var _PrintRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintRequest.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Request/PrintRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrintRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrintRequest_vue_vue_type_template_id_a63e7428___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrintRequest_vue_vue_type_template_id_a63e7428___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Request/PrintRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Request/PrintRequest.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/Request/PrintRequest.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/PrintRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Request/PrintRequest.vue?vue&type=template&id=a63e7428&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/Request/PrintRequest.vue?vue&type=template&id=a63e7428& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintRequest_vue_vue_type_template_id_a63e7428___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintRequest.vue?vue&type=template&id=a63e7428& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Request/PrintRequest.vue?vue&type=template&id=a63e7428&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintRequest_vue_vue_type_template_id_a63e7428___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintRequest_vue_vue_type_template_id_a63e7428___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);