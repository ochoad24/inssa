(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{Dvtk:function(t,e,n){"use strict";n.r(e);var a=n("o0o1"),s=n.n(a),r=n("vDqi"),o=n.n(r),i=n("XuX8"),_=n.n(i),c=n("PI6J"),l=n("eJge"),u=n.n(l),v=n("Lq01"),d=n.n(v);function p(t,e,n,a,s,r,o){try{var i=t[r](o),_=i.value}catch(t){return void n(t)}i.done?e(_):Promise.resolve(_).then(a,s)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(a,s){var r=t.apply(e,n);function o(t){p(r,a,s,o,i,"next",t)}function i(t){p(r,a,s,o,i,"throw",t)}o(void 0)}))}}var g=n("wy2R");_.a.use(d.a,{moment:g});_.a.use(u.a,{name:"_blank",specs:["fullscreen=yes","titlebar=no","scrollbars=no"],styles:["/css/bootstrap.min.css","/js/bootstrap.min.js","/js/jquery.min.js","/css/voucher.css"]});var f,h,b,C={data:function(){return{request:{},customer:{},guarantor:null,departamentCustomer:"",townCustomer:"",departamentGuarantor:"",townGuarantor:""}},methods:{mymoney:function(t){return c.a.money(parseFloat(t))},isNull:function(t){return null===t?"----":t},convertDate:function(t){return g(t).locale("es").format("LL")},getRequest:(b=m(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=this).$vs.loading(),o.a.get("/api/demand/".concat(e.$route.query.id)).then((function(t){e.$vs.loading.close(),e.request=t.data.demand,e.customer=t.data.customer,e.getDepartament(e.customer.idTown,"C"),e.getTown(e.customer.idTown,"C"),null!==t.data.guarantor&&(e.guarantor=t.data.guarantor,e.getDepartament(e.guarantor.idTown,"G"),e.getTown(e.guarantor.idTown,"G"))})).catch((function(t){console.log(t),e.$vs.loading.close()}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)}),getDepartament:(h=m(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==e){t.next=2;break}return t.abrupt("return");case 2:(a=this).$vs.loading(),o.a.get("/api/departament/".concat(e)).then((function(t){a.$vs.loading.close(),"C"===n?a.departamentCustomer=t.data.name:a.departamentGuarantor=t.data.name})).catch((function(t){console.log(t),a.$vs.loading.close()}));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return h.apply(this,arguments)}),getTown:(f=m(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==e){t.next=2;break}return t.abrupt("return");case 2:(a=this).$vs.loading(),o.a.get("/api/town/".concat(e)).then((function(t){a.$vs.loading.close(),"C"===n?a.townCustomer=t.data.name:a.townGuarantor=t.data.name})).catch((function(t){console.log(t),a.$vs.loading.close()}));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return f.apply(this,arguments)}),print:function(){this.$htmlToPaper("printMe")}},mounted:function(){this.getRequest()}},w=n("KHd+"),y=Object(w.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vx-card",{attrs:{title:"Descargar solicitud"}},[n("div",{attrs:{id:"printMe"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row p-2 table-active"},[n("div",{staticClass:"col-md-6"},[n("img",{attrs:{src:"/images/crediprendas.png",width:"50%"}})]),t._v(" "),n("div",{staticClass:"col-md-6 text-right"},[n("p",{staticClass:"font-weight-bold mb-1"},[t._v("\n                                        SOLICITUD DE CRÉDITO\n                                    ")]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v("\n                                        "+t._s(t.convertDate(t.request.created_at))+"\n                                    ")])])]),t._v(" "),n("div",{staticClass:"row pb-3 p-3"},[n("p",{staticClass:"font-weight-bold mb-1"},[t._v("\n                                    DATOS DEL SOLICITANTE\n                                ")])]),t._v(" "),n("div",{staticClass:"row pb-3 p-3"},[n("div",{staticClass:"col-md-4 text-left"},[n("p",[t._v("\n                                        Primer nombre:\n                                        "+t._s(t.customer.firstName)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Primer apellido:\n                                        "+t._s(t.customer.firstLastName)+"\n                                    ")]),t._v(" "),n("p",[t._v("DPI: "+t._s(t.customer.dpi))]),t._v(" "),n("p",[t._v("Edad: "+t._s(t.customer.age)+" años")]),t._v(" "),n("p",[t._v("\n                                        Estado civil:\n                                        "+t._s(t.customer.civilStatus)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Colonia:\n                                        "+t._s(t.isNull(t.customer.suburb))+"\n                                    ")]),t._v(" "),n("p",[t._v("Municipio: "+t._s(t.townCustomer))]),t._v(" "),n("p",[t._v("\n                                        Tiempo de residir:\n                                        "+t._s(t.customer.timeHome)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Nombre del padre:\n                                        "+t._s(t.customer.fatherName)+"\n                                    ")]),t._v(" "),n("p",[t._v("Celular: "+t._s(t.customer.mobile))]),t._v(" "),n("p",[t._v("\n                                        Actividad ecónomica a la que se\n                                        dedica:\n                                        "+t._s(t.customer.economicActivity)+"\n                                    ")])]),t._v(" "),n("div",{staticClass:"col-md-4 text-left"},[n("p",[t._v("\n                                        Segundo nombre:\n                                        "+t._s(t.customer.secondName)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Segundo apellido:\n                                        "+t._s(t.customer.secondLastName)+"\n                                    ")]),t._v(" "),n("p",[t._v("NIT: "+t._s(t.isNull(t.customer.nit)))]),t._v(" "),n("p",[t._v("Sexo: "+t._s(t.customer.gender))]),t._v(" "),n("p",[t._v("\n                                        Nacionalidad:\n                                        "+t._s(t.customer.nationality)+"\n                                    ")]),t._v(" "),n("p",[t._v("Zona: "+t._s(t.isNull(t.customer.zone)))]),t._v(" "),n("p",[t._v("\n                                        Teléfono de residencia:\n                                        "+t._s(t.isNull(t.customer.telephone))+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Pago mensual:\n                                        "+t._s(t.customer.monthlyPayment)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Nombre de la madre:\n                                        "+t._s(t.customer.motherName)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Email: "+t._s(t.isNull(t.customer.email))+"\n                                    ")])]),t._v(" "),n("div",{staticClass:"col-md-4 text-left"},[n("p",[t._v("\n                                        Apellido de casada:\n                                        "+t._s(t.isNull(t.customer.marriedName))+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                         \n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Fecha de nacimiento:\n                                        "+t._s(t.convertDate(t.customer.birthDate))+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        ¿Cuántas personas dependen de\n                                        usted?: "+t._s(t.customer.peopleDepend)+"\n                                    ")]),t._v(" "),n("p",[t._v("Dirección: "+t._s(t.customer.address))]),t._v(" "),n("p",[t._v("\n                                        Departamento:\n                                        "+t._s(t.departamentCustomer)+"\n                                    ")]),t._v(" "),n("p",[t._v("Residencia: "+t._s(t.customer.home))]),t._v(" "),n("p",[t._v("\n                                         \n                                    ")]),t._v(" "),n("p",[t._v("\n                                         \n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Vehiculo:\n                                        "+t._s(1==t.customer.carStatus?"Si":"No")+t._s(1==t.customer.carStatus?" Marca: "+t.customer.carBrand+" Año: "+t.customer.carYear+" Placas: "+t.customer.carLicencePlates:"")+"\n                                    ")])])]),t._v(" "),n("div",{staticClass:"row pb-3 p-3"},[null!=t.guarantor?n("p",{staticClass:"font-weight-bold mb-1"},[t._v("\n                                    DATOS DEL FIADOR\n                                ")]):t._e()]),t._v(" "),null!==t.guarantor?n("div",{staticClass:"row pb-3 p-3"},[n("div",{staticClass:"col-md-4 text-left"},[n("p",[t._v("\n                                        Primer nombre:\n                                        "+t._s(t.guarantor.firstName)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Primer apellido:\n                                        "+t._s(t.guarantor.firstLastName)+"\n                                    ")]),t._v(" "),n("p",[t._v("DPI: "+t._s(t.guarantor.dpi))]),t._v(" "),n("p",[t._v("Edad: "+t._s(t.guarantor.age)+" años")]),t._v(" "),n("p",[t._v("\n                                        Estado civil:\n                                        "+t._s(t.guarantor.civilStatus)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Colonia:\n                                        "+t._s(t.isNull(t.guarantor.suburb))+"\n                                    ")]),t._v(" "),n("p",[t._v("Municipio: "+t._s(t.townGuarantor))]),t._v(" "),n("p",[t._v("\n                                        Tiempo de residir:\n                                        "+t._s(t.guarantor.timeHome)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Nombre del padre:\n                                        "+t._s(t.guarantor.fatherName)+"\n                                    ")]),t._v(" "),n("p",[t._v("Celular: "+t._s(t.guarantor.mobile))]),t._v(" "),n("p",[t._v("\n                                        Actividad ecónomica a la que se\n                                        dedica:\n                                        "+t._s(t.guarantor.economicActivity)+"\n                                    ")])]),t._v(" "),n("div",{staticClass:"col-md-4 text-left"},[n("p",[t._v("\n                                        Segundo nombre:\n                                        "+t._s(t.guarantor.secondName)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Segundo apellido:\n                                        "+t._s(t.guarantor.secondLastName)+"\n                                    ")]),t._v(" "),n("p",[t._v("NIT: "+t._s(t.isNull(t.guarantor.nit)))]),t._v(" "),n("p",[t._v("Sexo: "+t._s(t.guarantor.gender))]),t._v(" "),n("p",[t._v("\n                                        Nacionalidad:\n                                        "+t._s(t.guarantor.nationality)+"\n                                    ")]),t._v(" "),n("p",[t._v("Zona: "+t._s(t.isNull(t.guarantor.zone)))]),t._v(" "),n("p",[t._v("\n                                        Teléfono de residencia:\n                                        "+t._s(t.isNull(t.guarantor.telephone))+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Pago mensual:\n                                        "+t._s(t.guarantor.monthlyPayment)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Nombre de la madre:\n                                        "+t._s(t.guarantor.motherName)+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Email: "+t._s(t.isNull(t.guarantor.email))+"\n                                    ")])]),t._v(" "),n("div",{staticClass:"col-md-4 text-left"},[n("p",[t._v("\n                                        Apellido de casada:\n                                        "+t._s(t.isNull(t.guarantor.marriedName))+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                         \n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Fecha de nacimiento:\n                                        "+t._s(t.convertDate(t.guarantor.birthDate))+"\n                                    ")]),t._v(" "),n("p",[t._v("\n                                        ¿Cuántas personas dependen de\n                                        usted?: "+t._s(t.guarantor.peopleDepend)+"\n                                    ")]),t._v(" "),n("p",[t._v("Dirección: "+t._s(t.guarantor.address))]),t._v(" "),n("p",[t._v("\n                                        Departamento:\n                                        "+t._s(t.departamentGuarantor)+"\n                                    ")]),t._v(" "),n("p",[t._v("Residencia: "+t._s(t.guarantor.home))]),t._v(" "),n("p",[t._v("\n                                         \n                                    ")]),t._v(" "),n("p",[t._v("\n                                         \n                                    ")]),t._v(" "),n("p",[t._v("\n                                        Vehiculo:\n                                        "+t._s(1==t.guarantor.carStatus?"Si":"No")+t._s(1==t.guarantor.carStatus?" Marca: "+t.guarantor.carBrand+" Año: "+t.guarantor.carYear+" Placas: "+t.guarantor.carLicencePlates:"")+"\n                                    ")])])]):t._e(),t._v(" "),n("div",{staticClass:"row pb-3 p-3"},[n("p",{staticClass:"font-weight-bold mb-1"},[t._v("\n                                    DETALLES DEL CRÉDITO\n                                ")])]),t._v(" "),n("div",{staticClass:"row pb-3 p-3"},[n("div",{staticClass:"col-md-4 text-left"},[n("p",[t._v("Saldo a financiar: "+t._s(t.mymoney(t.request.balanceFinance)))])]),t._v(" "),n("div",{staticClass:"col-md-4 text-left"},[n("p",[t._v("Plazo solicitado: "+t._s(t.request.terms))])]),t._v(" "),n("div",{staticClass:"col-md-4 text-left"},[n("p",[t._v("Primera cuota: "+t._s(t.mymoney(t.request.creditsInstallments)))])])]),t._v(" "),null!=t.guarantor?n("div",{staticClass:"row pb-3 p-3"},[n("div",{staticClass:"col-md-4 text-center"},[n("p",[t._v("\n                                        F.Cliente _______________________\n                                    ")])]),t._v(" "),n("div",{staticClass:"col-md-4 text-center"},[n("p",[t._v("\n                                        F.Fiador _______________________\n                                    ")])]),t._v(" "),n("div",{staticClass:"col-md-4 text-center"},[n("p",[t._v("\n                                        Receptor ________________________\n                                    ")])])]):n("div",{staticClass:"row pb-3 p-3"},[n("div",{staticClass:"col-md-6 text-center"},[n("p",[t._v("\n                                        F.Cliente _______________________\n                                    ")])]),t._v(" "),n("div",{staticClass:"col-md-6 text-center"},[n("p",[t._v("\n                                        Receptor ________________________\n                                    ")])])])])])])])]),t._v(" "),n("vs-button",{staticClass:"btnx",attrs:{type:"filled"},on:{click:t.print}},[t._v("Imprimir")])],1)],1)}),[],!1,null,null,null);e.default=y.exports},PI6J:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={cuiIsValid:function(t){window.console;if(!t)return!0;if(!/^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/.test(t))return!1;t=t.replace(/\s/,"");var e=parseInt(t.substring(9,11),10),n=parseInt(t.substring(11,13)),a=t.substring(0,8),s=parseInt(t.substring(8,9)),r=[17,8,16,16,13,14,19,8,24,21,9,30,32,21,8,17,14,5,11,11,7,17];if(0===e||0===n)return!1;if(e>r.length)return!1;if(n>r[e-1])return!1;for(var o=0,i=0;i<a.length;i++)o+=a[i]*(i+2);return o%11===s},nitIsValid:function(t){var e=t.toString();if(!e)return!0;if(!new RegExp("^[0-9]+(-?[0-9kK])?$").test(e))return!1;for(var n=(e=e.replace(/-/,"")).length-1,a=e.substring(0,n),s=e.substring(n,n+1).toLowerCase(),r=a.length+1,o=0,i=0;i<a.length;i++){var _=a.substring(i,i+1);o+=parseInt(_,10)*r,r-=1}var c=(11-o%11)%11;return s===(10==c?"k":c.toString())},money:function(t){return"Q "+t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},percentage:function(t){return t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")+" %"},quantity:function(t){return t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},parseDecimal:function(t){return parseFloat(parseFloat(t).toFixed(2))},calculateCreditAmount:function(t,e,n){var a=this.parseDecimal(this.parseDecimal(t)/this.parseDecimal(n)),s=this.parseDecimal(this.parseDecimal(t)*(this.parseDecimal(e)/100));return this.parseDecimal(a+s)}}},eJge:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a={install(t,e={}){t.prototype.$htmlToPaper=(t,n,a=(()=>!0))=>{let s="_blank",r=["fullscreen=yes","titlebar=yes","scrollbars=yes"],o=!0,i=[],{name:_=s,specs:c=r,replace:l=o,styles:u=i}=e;n&&(n.name&&(_=n.name),n.specs&&(c=n.specs),n.replace&&(l=n.replace),n.styles&&(u=n.styles)),c=c.length?c.join(","):"";const v=window.document.getElementById(t);if(!v)return void alert(`Element to print #${t} not found!`);const d=function(t,e,n){let a=null;return a=window.open(t,e,n),a.opener||(a.opener=self),a.focus(),a}("",_,c);return d.document.write(`\n        <html>\n          <head>\n            <title>${window.document.title}</title>\n          </head>\n          <body>\n            ${v.innerHTML}\n          </body>\n        </html>\n      `),function(t,e){e.forEach(e=>{let n=t.document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),t.document.getElementsByTagName("head")[0].appendChild(n)})}(d,u),setTimeout(()=>{d.document.close(),d.focus(),d.print(),setTimeout((function(){window.close()}),1),a()},1e3),!0}}};e.default=a}}]);