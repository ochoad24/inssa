(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getPermit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/getPermit */ "./resources/js/src/utils/getPermit.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js");
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_moment__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(vue_moment__WEBPACK_IMPORTED_MODULE_3___default.a, {
  moment: moment
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customer: {},
      town: {},
      departament: {},
      loading: true
    };
  },
  methods: {
    showItem: function showItem(namePermit) {
      return _utils_getPermit__WEBPACK_IMPORTED_MODULE_1__["getPermit"].showItem(namePermit);
    },
    getClient: function getClient() {
      var vm = this;
      vm.$vs.loading();
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/customer/".concat(vm.$route.query.id)).then(function (response) {
        vm.$vs.loading.close();
        vm.customer = response.data.customer;
        vm.town = response.data.town;
        vm.departament = response.data.departament;
        vm.loading = false;
      }).catch(function (error) {
        console.log(error);
      });
    },
    convertDate: function convertDate(date) {
      return moment(date).locale('es').format('LL');
    }
  },
  mounted: function mounted() {
    this.getClient();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=template&id=095a0c1c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=template&id=095a0c1c& ***!
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
  return _vm.showItem("Ver cliente")
    ? _c(
        "div",
        [
          _vm.loading === false
            ? _c(
                "vx-card",
                { attrs: { title: "Información cliente" } },
                [
                  _c(
                    "vs-table",
                    { attrs: { stripe: "", data: _vm.customer } },
                    [
                      [
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", { attrs: { colspan: 2 } }, [
                              _c("h5", { staticClass: "text-center" }, [
                                _vm._v("Datos personales"),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Fotografía")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _c("img", {
                                attrs: {
                                  src: "/uploads/thumbnail/" + _vm.customer.img,
                                },
                              }),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Casa del cliente")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _c("img", {
                                attrs: {
                                  src:
                                    "/uploads/thumbnail/" +
                                    _vm.customer.imgHouse,
                                },
                              }),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Primer nombre")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.firstName)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Segundo nombre")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.secondName)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Primer apellido")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.firstLastName)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Segundo apellido")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.secondLastName)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Apellido de casada")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.marriedName)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("DPI")]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(_vm.customer.dpi))]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("NIT")]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(_vm.customer.nit))]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Fecha de nacimiento")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(
                                _vm._s(_vm.convertDate(_vm.customer.birthDate))
                              ),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Edad")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.age) + " años"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Sexo")]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(_vm.customer.gender))]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [
                              _vm._v("¿Cuántas personas dependen de usted?"),
                            ]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.peopleDepend)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Estado civil")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.civilStatus)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Nacionalidad")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.nationality)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", { attrs: { colspan: 2 } }, [
                              _c("h5", { staticClass: "text-center" }, [
                                _vm._v("Datos básicos"),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Dirección")]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(_vm.customer.address))]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Colonia")]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(_vm.customer.suburb))]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Zona")]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(_vm.customer.zone))]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Departamento")]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(_vm.departament.name))]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Municipio")]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(_vm.town.name))]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Teléfono de residencia")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.telephone)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Residencia")]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(_vm.customer.home))]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Tiempo de residir")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.timeHome)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Ingreso mensual")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.monthlyPayment)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", { attrs: { colspan: 2 } }, [
                              _c("h5", { staticClass: "text-center" }, [
                                _vm._v("Referencias"),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Referencia 1")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(
                                _vm._s(_vm.customer.referenceOneName) +
                                  " |\n            " +
                                  _vm._s(
                                    _vm.customer.referenceOneRelationship
                                  ) +
                                  " |\n            " +
                                  _vm._s(_vm.customer.referenceOneAddress) +
                                  " |\n            " +
                                  _vm._s(_vm.customer.referenceOneTelephone)
                              ),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Referencia 2")]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(
                                _vm._s(_vm.customer.referenceTwoName) +
                                  " |\n            " +
                                  _vm._s(
                                    _vm.customer.referenceTwoRelationship
                                  ) +
                                  " |\n            " +
                                  _vm._s(_vm.customer.referenceTwoAddress) +
                                  " |\n            " +
                                  _vm._s(_vm.customer.referenceTwoTelephone)
                              ),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", { attrs: { colspan: 2 } }, [
                              _c("h5", { staticClass: "text-center" }, [
                                _vm._v("Datos adicionales"),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Celular")]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(_vm.customer.mobile))]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [_vm._v("Email")]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(_vm.customer.email))]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", [
                              _vm._v("Actividad ecónomica a la que se dedica"),
                            ]),
                            _vm._v(" "),
                            _c("vs-td", [
                              _vm._v(_vm._s(_vm.customer.economicActivity)),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", { attrs: { colspan: 2 } }, [
                              _c("h5", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n              Encargado: " +
                                    _vm._s(
                                      _vm.customer.user_duty_manager.name
                                    ) +
                                    "\n            "
                                ),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", { attrs: { colspan: 2 } }, [
                              _c("h5", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n              Usuario creador: " +
                                    _vm._s(_vm.customer.user_created.name) +
                                    "\n            "
                                ),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-tr",
                          [
                            _c("vs-td", { attrs: { colspan: 2 } }, [
                              _c("h5", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n              Usuario actualizó: " +
                                    _vm._s(_vm.customer.user_updated.name) +
                                    "\n            "
                                ),
                              ]),
                            ]),
                          ],
                          1
                        ),
                      ],
                    ],
                    2
                  ),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      )
    : _vm._e()
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

/***/ "./resources/js/src/views/Customer/ShowCustomer.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/Customer/ShowCustomer.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowCustomer_vue_vue_type_template_id_095a0c1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowCustomer.vue?vue&type=template&id=095a0c1c& */ "./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=template&id=095a0c1c&");
/* harmony import */ var _ShowCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowCustomer.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowCustomer_vue_vue_type_template_id_095a0c1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowCustomer_vue_vue_type_template_id_095a0c1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Customer/ShowCustomer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=template&id=095a0c1c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=template&id=095a0c1c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCustomer_vue_vue_type_template_id_095a0c1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowCustomer.vue?vue&type=template&id=095a0c1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Customer/ShowCustomer.vue?vue&type=template&id=095a0c1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCustomer_vue_vue_type_template_id_095a0c1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowCustomer_vue_vue_type_template_id_095a0c1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);