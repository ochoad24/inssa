(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5J+5":function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),n=a.n(s),r=a("e7F3"),o=a("XuX8"),i=a.n(o),c=a("Snq/"),l=a.n(c),u=a("vDqi"),v=a.n(u),d=a("LvDl"),p=a.n(d),h=a("PI6J"),_=a("v8TL");function m(t,e,a,s,n,r,o){try{var i=t[r](o),c=i.value}catch(t){return void a(t)}i.done?e(c):Promise.resolve(c).then(s,n)}i.a.directive("VeeValidate",r.b),i.a.use(r.b,{inject:!0});r.a.localize("es",{custom:{admin:{required:"El administrador es requerido"},password:{required:"La contraseña es requerida"}}});var f,g,w={components:{"v-select":l.a},data:function(){return{showAllClients:!1,showPopupLoan:!1,admins:[],laons:[],admin:null,password:"",filterSearch:"",pagination:{total:1,current:1},idLoan:0}},methods:{printLoan:function(t){this.$router.push({path:"/creditos/imprimir?loan=".concat(t)})},printLoanControl:function(t){this.$router.push({path:"/creditos/control?loan=".concat(t)})},onSearch:function(t,e){e(!0),this.search(e,t,this)},search:p.a.debounce((function(t,e,a){v.a.get("/api/searchAdmins?filter=".concat(e)).then((function(e){a.admins=e.data.data,t(!1)})).catch((function(t){console.log(t)}))}),350),deleteLoan:function(t){this.idLoan=t,this.$vs.dialog({acceptText:"Si",cancelText:"No",type:"confirm",color:"danger",title:"Aprobar",text:"¿Desea anular el crédito?.",accept:this.acceptDeleteLoan})},acceptDeleteLoan:function(){this.resetForm(),this.showPopupLoan=!0},showItem:function(t){return _.a.showItem(t)},shoyPayments:function(t){this.$router.push({path:"/pagos?id=".concat(t)})},mymoney:function(t){return h.a.money(parseFloat(t))},myquantity:function(t){return xelacode.quantity(t)},getLoan:(f=n.a.mark((function t(){var e;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return""!=(e=this).filterSearch&&1!=e.pagination.current&&(e.pagination.current=1),t.next=4,v.a.get("/api/loan?page=".concat(e.pagination.current,"&search=").concat(e.filterSearch,"&permit=").concat(!e.showAllClients,"&user=").concat(JSON.parse(localStorage.getItem("userInfo")).uid)).then((function(t){e.laons=t.data.data,e.pagination.total=t.data.last_page,e.pagination.current=t.data.current_page})).catch((function(t){console.log(t)}));case 4:case"end":return t.stop()}}),t,this)})),g=function(){var t=this,e=arguments;return new Promise((function(a,s){var n=f.apply(t,e);function r(t){m(n,a,s,r,o,"next",t)}function o(t){m(n,a,s,r,o,"throw",t)}r(void 0)}))},function(){return g.apply(this,arguments)}),convertDate:function(t){var e=t.split("-");if(e[2].includes(":")){var a=e[2].split(" ");e[2]=a[1]+" "+a[0]}return e[2]+"/"+e[1]+"/"+e[0]},getIWillPay:function(t){window.open("/api/getDocument/".concat(t),"_blank")},getFactura:function(t){window.open("/api/getFactura/".concat(t),"_blank")},resetForm:function(){this.admin=null,this.password="",this.$validator.reset()},submitForm:function(){var t=this;this.$validator.validateAll().then((function(e){e&&(t.$vs.loading(),v.a.delete("/api/loan/".concat(t.idLoan,"?password=").concat(t.password,"&idUser=").concat(t.admin.id)).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Listo",color:"success",position:"top-right",text:"".concat(e.data.message)}),t.getLoan(),t.showPopupLoan=!1})).catch((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Error",color:"danger",position:"top-right",text:"".concat(e.response.data.message)})})))}))}},mounted:function(){this.$emit("input")}},y=(a("NqYe"),a("KHd+")),x=Object(y.a)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showItem("Ver lista de crédito")?a("div",[a("vx-card",{attrs:{title:"Listado de créditos"}},[t.showItem("Ver todas las solicitudes")?a("template",{slot:"actions"},[a("label",{attrs:{for:""}},[t._v("Ver todos los créditos")]),t._v(" "),a("vs-switch",{on:{change:t.getLoan},model:{value:t.showAllClients,callback:function(e){t.showAllClients=e},expression:"showAllClients"}})],1):t._e(),t._v(" "),a("div",{staticClass:"flex -mx-2"},[a("div",{staticClass:"w-full px-2"},[a("vx-input-group",{staticClass:"mb-base"},[a("vs-input",{attrs:{placeholder:"Ingrese búsqueda"},on:{input:t.getLoan},model:{value:t.filterSearch,callback:function(e){t.filterSearch=e},expression:"filterSearch"}})],1)],1)]),t._v(" "),a("div",{staticClass:"data-list-container",attrs:{id:"data-list-list-view"}},[a("vs-table",{attrs:{data:t.laons},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e){return a("vs-tr",{key:e.id},[a("vs-td",[t._v(t._s(e.id))]),t._v(" "),a("vs-td",[t._v(t._s(e.customer))]),t._v(" "),a("vs-td",[t._v(t._s(t.mymoney(e.amount)))]),t._v(" "),a("vs-td",[t._v(t._s(t.mymoney(e.balance)))]),t._v(" "),a("vs-td",[t._v(t._s(t.mymoney(e.capital)))]),t._v(" "),a("vs-td",[t._v(t._s(t.mymoney(e.interest)))]),t._v(" "),a("vs-td",[t._v(t._s(t.mymoney(e.bankDefault)))]),t._v(" "),a("vs-td",[a("div",{staticClass:"btn-group"},[2===e.status?a("vs-chip",{staticClass:"product-order-status",attrs:{color:"warning"}},[t._v("Pendiente")]):t._e(),t._v(" "),1===e.status?a("vs-chip",{staticClass:"product-order-status",attrs:{color:"success"}},[t._v("Pagado")]):t._e(),t._v(" "),0===e.status?a("vs-chip",{staticClass:"product-order-status",attrs:{color:"danger"}},[t._v("Anulado")]):t._e()],1)]),t._v(" "),a("vs-td",[t._v(t._s(t.convertDate(e.created_at)))]),t._v(" "),a("vs-td",[t._v("\n              "+t._s(e.user_created.name)+"\n            ")]),t._v(" "),a("vs-td",[t._v("\n              "+t._s(e.user_updated.name)+"\n            ")]),t._v(" "),a("vs-td",[t._v("\n              "+t._s(e.user_duty_manager.name)+"\n            ")]),t._v(" "),a("vs-td",{staticClass:"whitespace-no-wrap"},[t.showItem("Anular crédito")&&2==e.status?a("feather-icon",{attrs:{icon:"XIcon",svgClasses:"w-5 h-5 hover:text-success stroke-current"},on:{click:function(a){return t.deleteLoan(e.id)}}}):t._e(),t._v(" "),t.showItem("Ver lista de pagos")?a("feather-icon",{attrs:{icon:"ListIcon",svgClasses:"w-5 h-5 hover:text-success stroke-current"},on:{click:function(a){return t.shoyPayments(e.id)}}}):t._e(),t._v(" "),t.showItem("Descargar pagare")?a("feather-icon",{attrs:{icon:"DownloadIcon",svgClasses:"w-5 h-5 hover:text-success stroke-current"},on:{click:function(a){return t.getIWillPay(e.id)}}}):t._e(),t._v(" "),t.showItem("Descargar factura")?a("feather-icon",{attrs:{icon:"FileTextIcon",svgClasses:"w-5 h-5 hover:text-success stroke-current"},on:{click:function(a){return t.getFactura(e.id)}}}):t._e(),t._v(" "),t.showItem("Imprimir recibos")?a("feather-icon",{attrs:{icon:"PrinterIcon",svgClasses:"w-5 h-5 hover:text-success stroke-current"},on:{click:function(a){return t.printLoan(e.id)}}}):t._e(),t._v(" "),t.showItem("Descargar lista de pagos")?a("feather-icon",{attrs:{icon:"CheckSquareIcon",svgClasses:"w-5 h-5 hover:text-success stroke-current"},on:{click:function(a){return t.printLoanControl(e.id)}}}):t._e()],1)],1)}))}}],null,!1,4199318985)},[a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"id"}},[t._v("ID")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"customer"}},[t._v("Cliente")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"amount"}},[t._v("Monto")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"balance"}},[t._v("Saldo")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"capital"}},[t._v("Capital")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"interest"}},[t._v("Interes")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"bankDefault"}},[t._v("Mora")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"status"}},[t._v("Estado")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"created_at"}},[t._v("Fecha de creación")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"user_created.name"}},[t._v("Usuario creador")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"user_updated.name"}},[t._v("Usuario actualizó")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"in_charge.name"}},[t._v("Encargado")]),t._v(" "),a("vs-th",[t._v("Acciones")])],1)],2)],1),t._v(" "),a("br"),t._v(" "),a("vs-pagination",{attrs:{total:t.pagination.total},on:{change:t.getLoan},model:{value:t.pagination.current,callback:function(e){t.$set(t.pagination,"current",e)},expression:"pagination.current"}})],2),t._v(" "),a("vs-popup",{attrs:{title:"Desactivar crédito",active:t.showPopupLoan,fullscreen:""},on:{"update:active":function(e){t.showPopupLoan=e}}},[a("form",[a("div",{staticClass:"con-exemple-prompt"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mt-5"},[a("label",{staticClass:"vs-input--label"},[t._v("Administrador")]),t._v(" "),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{options:t.admins,name:"name",filterable:!1,label:"name"},on:{search:t.onSearch},model:{value:t.admin,callback:function(e){t.admin=e},expression:"admin"}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("admin")))])],1)]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mt-5"},[a("label",{staticClass:"vs-input--label"},[t._v("Contraseña del administrador")]),t._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{type:"password",name:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("password")))])],1)]),t._v(" "),a("vs-divider"),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mt-5"},[a("div",{staticClass:"btn-group"},[a("vs-button",{on:{click:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t._v("Guardar")]),t._v(" "),a("vs-button",{attrs:{color:"danger"},on:{click:function(e){t.showPopupLoan=!1}}},[t._v("Cancelar")])],1)])])],1)])])],1):t._e()}),[],!1,null,null,null);e.default=x.exports},LUX9:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".vs-component .vs-popup .vs-popup--header .vs-icon {\n  display: none;\n}",""])},NqYe:function(t,e,a){"use strict";a("gQWR")},PI6J:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var s={cuiIsValid:function(t){window.console;if(!t)return!0;if(!/^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/.test(t))return!1;t=t.replace(/\s/,"");var e=parseInt(t.substring(9,11),10),a=parseInt(t.substring(11,13)),s=t.substring(0,8),n=parseInt(t.substring(8,9)),r=[17,8,16,16,13,14,19,8,24,21,9,30,32,21,8,17,14,5,11,11,7,17];if(0===e||0===a)return!1;if(e>r.length)return!1;if(a>r[e-1])return!1;for(var o=0,i=0;i<s.length;i++)o+=s[i]*(i+2);return o%11===n},nitIsValid:function(t){var e=t.toString();if(!e)return!0;if(!new RegExp("^[0-9]+(-?[0-9kK])?$").test(e))return!1;for(var a=(e=e.replace(/-/,"")).length-1,s=e.substring(0,a),n=e.substring(a,a+1).toLowerCase(),r=s.length+1,o=0,i=0;i<s.length;i++){var c=s.substring(i,i+1);o+=parseInt(c,10)*r,r-=1}var l=(11-o%11)%11;return n===(10==l?"k":l.toString())},money:function(t){return"Q "+t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},percentage:function(t){return t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")+" %"},quantity:function(t){return t.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},parseDecimal:function(t){return parseFloat(parseFloat(t).toFixed(2))},calculateCreditAmount:function(t,e,a){var s=this.parseDecimal(this.parseDecimal(t)/this.parseDecimal(a)),n=this.parseDecimal(this.parseDecimal(t)*(this.parseDecimal(e)/100));return this.parseDecimal(s+n)}}},gQWR:function(t,e,a){var s=a("LUX9");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(t.exports=s.locals)},v8TL:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var s={showItem:function(t){return void 0!==localStorage.getItem("permitKey")&&void 0!==JSON.parse(localStorage.getItem("permitKey")).find((function(e){return e.name===t&&1===e.status}))}}}}]);