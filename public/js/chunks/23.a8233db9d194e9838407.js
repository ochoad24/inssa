(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{KsDi:function(t,e,s){"use strict";s.r(e);var n=s("o0o1"),a=s.n(n),r=s("vDqi"),i=s.n(r),o=s("XuX8"),c=s.n(o),l=s("PI6J"),u=s("eJge"),d=s.n(u),v=s("Lq01"),p=s.n(v),m=s("v8TL");function f(t,e,s,n,a,r,i){try{var o=t[r](i),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(n,a)}var h=s("wy2R");c.a.use(p.a,{moment:h});c.a.use(d.a,{name:"_blank",specs:["fullscreen=yes","titlebar=no","scrollbars=no"],styles:["/css/bootstrap.min.css","/js/bootstrap.min.js","/js/jquery.min.js","/css/voucher.css"]});var _,g,y={data:function(){return{customer:"",loan:{},payments:[]}},methods:{showItem:function(t){return m.a.showItem(t)},parseDecimal:function(t){return parseFloat(this.parseDecimalFixed(t))},parseDecimalFixed:function(t){return parseFloat(t).toFixed(2)},convertDate:function(t){return h(t).locale("es").format("LL")},mymoney:function(t){return l.a.money(parseFloat(t))},getLoanPayment:(_=a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=this).$vs.loading(),i.a.get("/api/getControl/".concat(e.$route.query.loan)).then((function(t){e.$vs.loading.close(),e.loan=t.data.loan,e.customer=t.data.customer,e.payments=t.data.payments})).catch((function(t){console.log(t),e.$vs.loading.close()}));case 3:case"end":return t.stop()}}),t,this)})),g=function(){var t=this,e=arguments;return new Promise((function(s,n){var a=_.apply(t,e);function r(t){f(a,s,n,r,i,"next",t)}function i(t){f(a,s,n,r,i,"throw",t)}r(void 0)}))},function(){return g.apply(this,arguments)}),print:function(){this.$htmlToPaper("printMe")}},mounted:function(){this.getLoanPayment()}},b=s("KHd+"),C=Object(b.a)(y,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showItem("Imprimir recibos")?s("div",[s("vx-card",{attrs:{title:"Listado de pagos"}},[s("vs-button",{staticClass:"btnx",attrs:{type:"filled"},on:{click:t.print}},[t._v("Imprimir")]),t._v(" "),s("div",{attrs:{id:"printMe"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row p-2 table-active"},[s("div",{staticClass:"col-md-4"},[s("img",{attrs:{src:"/images/crediash.jpg",width:"20%"}})]),t._v(" "),s("div",{staticClass:"col-md-5 text-center"},[s("p",{staticClass:"font-weight-bold mb-1"},[t._v("\n                    Multiservicios Chavez Romanos\n                  ")]),t._v(" "),s("p",{staticClass:"text-muted mb-1"},[t._v("\n                    CARLOS ENRIQUE CHÁVEZ AVENDAÑO\n                  ")]),t._v(" "),s("p",{staticClass:"text-muted mb-1"},[t._v("\n                    8 AVENIDA ZONA 2 13 CALLE SOLOLA,SOLOLA\n                  ")])]),t._v(" "),s("div",{staticClass:"col-md-3 text-right"},[s("p",{staticClass:"font-weight-bold mb-1"},[t._v("\n                    Crédito No."+t._s(t.loan.id)+"\n                  ")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 text-left"},[s("p",[t._v("NOMBRE: "+t._s(t.customer))])]),t._v(" "),s("div",{staticClass:"col-md-4 text-left"},[s("p",[t._v("TOTAL A PAGAR: "+t._s(t.mymoney(t.loan.amount)))])]),t._v(" "),s("div",{staticClass:"col-md-4 text-left"},[s("p",[t._v("FORMA DE PAGO: "+t._s(t.loan.feeType))])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 text-left"},[s("p",[t._v("TIPO DE CUOTA: "+t._s(t.loan.loanRate))])]),t._v(" "),s("div",{staticClass:"col-md-4 text-left"},[s("p",[t._v("FECHA DE DESEMBOLSO: "+t._s(t.convertDate(t.loan.date)))])]),t._v(" "),s("div",{staticClass:"col-md-4 text-left"},[s("p",[t._v("CANTIDAD DE PAGOS: "+t._s(t.loan.totalPayment))])])]),t._v(" "),s("div",{staticClass:"row"},[s("table",{staticClass:"table table-bordered"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Fecha de pago")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Cantidad a pagar")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Cantidad pagada")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Firma de cobrador")])])]),t._v(" "),s("tbody",t._l(t.payments,(function(e,n){return s("tr",{key:e.id},[s("th",{attrs:{scope:"row"}},[t._v(t._s(n+1))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v("\n                        "+t._s(t.convertDate(e.expectedPaymentDate))+"\n                      ")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v("\n                        "+t._s(t.mymoney(e.expectedAmount))+"\n                      ")]),t._v(" "),s("td"),t._v(" "),s("td")])})),0)])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 text-center"},[s("h6",[t._v("TELÉFONO: 4005-0828")])])])])])])])])],1)],1):t._e()}),[],!1,null,null,null);e.default=C.exports},PI6J:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var n={cuiIsValid:function(t){window.console;if(!t)return!0;if(!/^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/.test(t))return!1;t=t.replace(/\s/,"");var e=parseInt(t.substring(9,11),10),s=parseInt(t.substring(11,13)),n=t.substring(0,8),a=parseInt(t.substring(8,9)),r=[17,8,16,16,13,14,19,8,24,21,9,30,32,21,8,17,14,5,11,11,7,17];if(0===e||0===s)return!1;if(e>r.length)return!1;if(s>r[e-1])return!1;for(var i=0,o=0;o<n.length;o++)i+=n[o]*(o+2);return i%11===a},nitIsValid:function(t){var e=t.toString();if(!e)return!0;if(!new RegExp("^[0-9]+(-?[0-9kK])?$").test(e))return!1;for(var s=(e=e.replace(/-/,"")).length-1,n=e.substring(0,s),a=e.substring(s,s+1).toLowerCase(),r=n.length+1,i=0,o=0;o<n.length;o++){var c=n.substring(o,o+1);i+=parseInt(c,10)*r,r-=1}var l=(11-i%11)%11;return a===(10==l?"k":l.toString())},money:function(t){return"Q "+t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},percentage:function(t){return t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")+" %"},quantity:function(t){return t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},parseDecimal:function(t){return parseFloat(parseFloat(t).toFixed(2))},calculateCreditAmount:function(t,e,s){var n=this.parseDecimal(this.parseDecimal(t)/this.parseDecimal(s)),a=this.parseDecimal(this.parseDecimal(t)*(this.parseDecimal(e)/100));return this.parseDecimal(n+a)}}},eJge:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n={install(t,e={}){t.prototype.$htmlToPaper=(t,s,n=(()=>!0))=>{let a="_blank",r=["fullscreen=yes","titlebar=yes","scrollbars=yes"],i=!0,o=[],{name:c=a,specs:l=r,replace:u=i,styles:d=o}=e;s&&(s.name&&(c=s.name),s.specs&&(l=s.specs),s.replace&&(u=s.replace),s.styles&&(d=s.styles)),l=l.length?l.join(","):"";const v=window.document.getElementById(t);if(!v)return void alert(`Element to print #${t} not found!`);const p=function(t,e,s){let n=null;return n=window.open(t,e,s),n.opener||(n.opener=self),n.focus(),n}("",c,l);return p.document.write(`\n        <html>\n          <head>\n            <title>${window.document.title}</title>\n          </head>\n          <body>\n            ${v.innerHTML}\n          </body>\n        </html>\n      `),function(t,e){e.forEach(e=>{let s=t.document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",e),t.document.getElementsByTagName("head")[0].appendChild(s)})}(p,d),setTimeout(()=>{p.document.close(),p.focus(),p.print(),setTimeout((function(){window.close()}),1),n()},1e3),!0}}};e.default=n},v8TL:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var n={showItem:function(t){return void 0!==localStorage.getItem("permitKey")&&void 0!==JSON.parse(localStorage.getItem("permitKey")).find((function(e){return e.name===t&&1===e.status}))}}}}]);