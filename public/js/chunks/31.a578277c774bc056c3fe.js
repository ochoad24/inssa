(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{PI6J:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var s={cuiIsValid:function(t){window.console;if(!t)return!0;if(!/^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/.test(t))return!1;t=t.replace(/\s/,"");var e=parseInt(t.substring(9,11),10),n=parseInt(t.substring(11,13)),s=t.substring(0,8),a=parseInt(t.substring(8,9)),r=[17,8,16,16,13,14,19,8,24,21,9,30,32,21,8,17,14,5,11,11,7,17];if(0===e||0===n)return!1;if(e>r.length)return!1;if(n>r[e-1])return!1;for(var i=0,o=0;o<s.length;o++)i+=s[o]*(o+2);return i%11===a},nitIsValid:function(t){var e=t.toString();if(!e)return!0;if(!new RegExp("^[0-9]+(-?[0-9kK])?$").test(e))return!1;for(var n=(e=e.replace(/-/,"")).length-1,s=e.substring(0,n),a=e.substring(n,n+1).toLowerCase(),r=s.length+1,i=0,o=0;o<s.length;o++){var c=s.substring(o,o+1);i+=parseInt(c,10)*r,r-=1}var l=(11-i%11)%11;return a===(10==l?"k":l.toString())},money:function(t){return"Q "+t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},percentage:function(t){return t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")+" %"},quantity:function(t){return t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},parseDecimal:function(t){return parseFloat(parseFloat(t).toFixed(2))},calculateCreditAmount:function(t,e,n){var s=this.parseDecimal(this.parseDecimal(t)/this.parseDecimal(n)),a=this.parseDecimal(this.parseDecimal(t)*(this.parseDecimal(e)/100));return this.parseDecimal(s+a)}}},eJge:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s={install(t,e={}){t.prototype.$htmlToPaper=(t,n,s=(()=>!0))=>{let a="_blank",r=["fullscreen=yes","titlebar=yes","scrollbars=yes"],i=!0,o=[],{name:c=a,specs:l=r,replace:u=i,styles:d=o}=e;n&&(n.name&&(c=n.name),n.specs&&(l=n.specs),n.replace&&(u=n.replace),n.styles&&(d=n.styles)),l=l.length?l.join(","):"";const p=window.document.getElementById(t);if(!p)return void alert(`Element to print #${t} not found!`);const _=function(t,e,n){let s=null;return s=window.open(t,e,n),s.opener||(s.opener=self),s.focus(),s}("",c,l);return _.document.write(`\n        <html>\n          <head>\n            <title>${window.document.title}</title>\n          </head>\n          <body>\n            ${p.innerHTML}\n          </body>\n        </html>\n      `),function(t,e){e.forEach(e=>{let n=t.document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),t.document.getElementsByTagName("head")[0].appendChild(n)})}(_,d),setTimeout(()=>{_.document.close(),_.focus(),_.print(),setTimeout((function(){window.close()}),1),s()},1e3),!0}}};e.default=s},"z+WT":function(t,e,n){"use strict";n.r(e);var s=n("o0o1"),a=n.n(s),r=n("vDqi"),i=n.n(r),o=n("XuX8"),c=n.n(o),l=n("PI6J"),u=n("eJge"),d=n.n(u),p=n("Lq01"),_=n.n(p);function m(t,e,n,s,a,r,i){try{var o=t[r](i),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(s,a)}var v=n("wy2R");c.a.use(_.a,{moment:v});c.a.use(d.a,{name:"_blank",specs:["fullscreen=yes","titlebar=no","scrollbars=no"],styles:["/css/bootstrap.min.css","/js/bootstrap.min.js","/js/jquery.min.js","/css/voucher.css"]});var f,h,y={data:function(){return{customer:"",payments:[]}},methods:{parseDecimal:function(t){return parseFloat(this.parseDecimalFixed(t))},parseDecimalFixed:function(t){return parseFloat(t).toFixed(2)},convertDate:function(t){return v(t).locale("es").format("LL")},mymoney:function(t){return l.a.money(parseFloat(t))},getLoanPayment:(f=a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=this).$vs.loading(),i.a.get("/api/loanPayment/".concat(e.$route.query.payments)).then((function(t){e.$vs.loading.close(),e.loan=t.data.loan,e.payments=t.data.payments,e.customer=t.data.customer})).catch((function(t){console.log(t),e.$vs.loading.close()}));case 3:case"end":return t.stop()}}),t,this)})),h=function(){var t=this,e=arguments;return new Promise((function(n,s){var a=f.apply(t,e);function r(t){m(a,n,s,r,i,"next",t)}function i(t){m(a,n,s,r,i,"throw",t)}r(void 0)}))},function(){return h.apply(this,arguments)}),print:function(){this.$htmlToPaper("printMe")}},mounted:function(){this.getLoanPayment()}},g=n("KHd+"),b=Object(g.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vx-card",{attrs:{title:"Listado de pagos"}},[n("div",{attrs:{id:"printMe"}},t._l(t.payments,(function(e){return n("div",{key:e.id,staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row p-2 table-active"},[n("div",{staticClass:"col-md-4"},[n("img",{attrs:{src:"/images/crediash.jpg",width:"30%"}})]),t._v(" "),n("div",{staticClass:"col-md-5 text-center"},[n("p",{staticClass:"font-weight-bold mb-1"},[t._v("\n                    Multiservicios Chavez Romanos\n                  ")]),t._v(" "),n("p",{staticClass:"text-muted mb-1"},[t._v("\n                    CARLOS ENRIQUE CHÁVEZ AVENDAÑO\n                  ")]),t._v(" "),n("p",{staticClass:"text-muted mb-1"},[t._v("\n                    8 AVENIDA ZONA 2 13 CALLE SOLOLA,SOLOLA\n                  ")])]),t._v(" "),n("div",{staticClass:"col-md-3 text-right"},[n("p",{staticClass:"font-weight-bold mb-1"},[t._v("Recibo de pago")]),t._v(" "),n("p",{staticClass:"font-weight-bold mb-1"},[t._v("No."+t._s(t.loan.id))]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v("\n                    "+t._s(t.convertDate(t.loan.paymentDate))+"\n                  ")])])]),t._v(" "),n("div",{staticClass:"row pb-3 p-3"},[n("div",{staticClass:"col-md-9 text-left"},[n("p",{staticClass:"font-weight-bold"},[t._v("\n                    EN LETRAS:\n                    "+t._s(e.amountLetters)+"\n                  ")]),t._v(" "),n("p",[t._v("CLIENTE: "+t._s(t.customer))]),t._v(" "),n("p",[t._v("CONCEPTO: "+t._s(e.concept))])]),t._v(" "),n("div",{staticClass:"col-md-3 text-right"},[n("p",{staticClass:"font-weight-bold"},[t._v("\n                    MONTO:\n                    "+t._s(t.mymoney(e.amount))+"\n                  ")]),t._v(" "),n("p",[t._v("\n                    SALDO ANTERIOR:\n                    "+t._s(t.mymoney(e.previousBalance))+"\n                  ")]),t._v(" "),n("p",[t._v("\n                    SALDO ACTUAL:\n                    "+t._s(t.mymoney(e.currentBalance))+"\n                  ")])])]),t._v(" "),n("div",{staticClass:"row pb-3 p-3"},[n("div",{staticClass:"col-md-6 text-center"},[n("p",[t._v("\n                    F.CLIENTE _______________________\n                  ")])]),t._v(" "),n("div",{staticClass:"col-md-6 text-center"},[n("p",[t._v("\n                    F.COBRADOR ________________________\n                  ")])])])])])])])})),0),t._v(" "),n("vs-button",{staticClass:"btnx",attrs:{type:"filled"},on:{click:t.print}},[t._v("Imprimir")])],1)],1)}),[],!1,null,null,null);e.default=b.exports}}]);