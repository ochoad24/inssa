(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0bhO":function(t,e,a){"use strict";a("YfHF")},HhLO:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"#data-list-list-view .vs-con-table {\n  /*\n    Below media-queries is fix for responsiveness of action buttons\n    Note: If you change action buttons or layout of this page, Please remove below style\n  */\n}\n@media (max-width: 689px) {\n#data-list-list-view .vs-con-table .vs-table--search {\n    max-width: unset;\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-left: 0;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-right: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--search .vs-table--search-input {\n    width: 100%;\n}\n}\n@media (max-width: 461px) {\n#data-list-list-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-list-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-list-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header {\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header > span {\n  display: flex;\n  flex-grow: 1;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td {\n  padding: 20px;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-list-view .vs-con-table .vs-table--pagination {\n  justify-content: center;\n}",""])},IcBs:function(t,e,a){"use strict";e.a=new class{constructor(t,e,a,n){this.language=t,this.months=e,this.monthsAbbr=a,this.days=n,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}get language(){return this._language}set language(t){if("string"!=typeof t)throw new TypeError("Language must be a string");this._language=t}get months(){return this._months}set months(t){if(12!==t.length)throw new RangeError(`There must be 12 months for ${this.language} language`);this._months=t}get monthsAbbr(){return this._monthsAbbr}set monthsAbbr(t){if(12!==t.length)throw new RangeError(`There must be 12 abbreviated months for ${this.language} language`);this._monthsAbbr=t}get days(){return this._days}set days(t){if(7!==t.length)throw new RangeError(`There must be 7 days for ${this.language} language`);this._days=t}}("Spanish",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"])},PCwd:function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),s=a.n(n),i=a("vDqi"),r=a.n(i),o=a("Snq/"),l=a.n(o),c=a("LuQd"),d=(a("2pMc"),a("v8TL")),v=a("+jP+"),u=a("IcBs"),h=a("Q5Zs"),b=a.n(h);function m(t,e,a,n,s,i,r){try{var o=t[i](r),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,s)}var p,g,w={components:{"v-select":l.a,FormWizard:c.FormWizard,TabContent:c.TabContent,Datepicker:v.a,"masked-input":b.a},data:function(){return{showAllClients:!1,idCustomer:0,language:u.a,customers:[],search:"",pagination:{total:1,current:1}}},methods:{showItem:function(t){return d.a.showItem(t)},updateClient:function(t){this.$router.push({path:"/clientes/editar/".concat(t)})},showClient:function(t){this.$router.push({path:"/clientes/ver?id=".concat(t)})},newClient:function(){this.$router.push({path:"/clientes/nuevo"})},dialogDeleteCustomer:function(t){this.idCustomer=t,this.$vs.dialog({acceptText:"Si",cancelText:"No",type:"confirm",color:"danger",title:"Eliminar",text:"¿Desea eliminar este cliente?.",accept:this.deleteCustomer})},deleteCustomer:function(){var t=this;t.$vs.loading(),r.a.delete("/api/customer/".concat(t.idCustomer)).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Listo",color:"success",position:"top-right",text:"".concat(e.data.message)}),t.getCustomers()})).catch((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Error",color:"danger",position:"top-right",text:"".concat(e.response.data.message)})}))},convertDate:function(t){var e=new Date(t),a=""+(e.getMonth()+1),n=""+e.getDate(),s=e.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[s,a,n].join("-")},getCustomers:(p=s.a.mark((function t(){var e,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return""!=(e=this).search&&1!=e.pagination.current&&(e.pagination.current=1),a="/api/customer?page=".concat(e.pagination.current,"&search=").concat(e.search,"&permit=").concat(!e.showAllClients,"&user=").concat(JSON.parse(localStorage.getItem("userInfo")).uid),t.next=6,r.a.get(a).then((function(t){e.customers=t.data.data,e.pagination.total=t.data.last_page,e.pagination.current=t.data.current_page})).catch((function(t){console.log(t)}));case 6:case"end":return t.stop()}}),t,this)})),g=function(){var t=this,e=arguments;return new Promise((function(a,n){var s=p.apply(t,e);function i(t){m(s,a,n,i,r,"next",t)}function r(t){m(s,a,n,i,r,"throw",t)}i(void 0)}))},function(){return g.apply(this,arguments)})},mounted:function(){this.$emit("input")}},f=(a("0bhO"),a("KHd+")),_=Object(f.a)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showItem("Ver cliente")?a("div",[a("vx-card",{attrs:{title:"Listado de clientes"}},[t.showItem("Ver cliente")?a("template",{slot:"actions"},[a("label",{attrs:{for:""}},[t._v("Ver todos los clientes")]),t._v(" "),a("vs-switch",{on:{change:t.getCustomers},model:{value:t.showAllClients,callback:function(e){t.showAllClients=e},expression:"showAllClients"}})],1):t._e(),t._v(" "),a("div",{staticClass:"flex -mx-2"},[a("div",{staticClass:"w-full px-2"},[a("vx-input-group",{staticClass:"mb-base"},[a("vs-input",{attrs:{placeholder:"Ingrese búsqueda"},on:{input:t.getCustomers},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),a("template",{slot:"append"},[a("div",{staticClass:"append-text bg-primary"},[t.showItem("Crear cliente")?a("vs-button",{staticClass:"btnx",attrs:{type:"filled"},on:{click:t.newClient}},[t._v("Nuevo")]):t._e()],1)])],2)],1)]),t._v(" "),a("div",{staticClass:"data-list-container",attrs:{id:"data-list-list-view"}},[a("vs-table",{attrs:{data:t.customers},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return t._l(n,(function(e){return a("vs-tr",{key:e.id},[a("vs-td",[t._v(t._s(e.id))]),t._v(" "),a("vs-td",[t._v(t._s(e.firstName))]),t._v(" "),a("vs-td",[t._v(t._s(e.secondName))]),t._v(" "),a("vs-td",[t._v(t._s(e.firstLastName))]),t._v(" "),a("vs-td",[t._v(t._s(e.secondLastName))]),t._v(" "),a("vs-td",[t._v(t._s(e.dpi))]),t._v(" "),a("vs-td",[t._v(t._s(e.nit))]),t._v(" "),a("vs-td",[t._v("\n              "+t._s(e.user_created.name)+"\n            ")]),t._v(" "),a("vs-td",[t._v("\n              "+t._s(e.user_updated.name)+"\n            ")]),t._v(" "),a("vs-td",[t._v("\n              "+t._s(e.user_duty_manager.name)+"\n            ")]),t._v(" "),a("vs-td",{staticClass:"whitespace-no-wrap"},[t.showItem("Ver cliente")?a("feather-icon",{attrs:{icon:"EyeIcon",svgClasses:"w-5 h-5 hover:text-success stroke-current"},on:{click:function(a){return t.showClient(e.id)}}}):t._e(),t._v(" "),t.showItem("Editar cliente")?a("feather-icon",{attrs:{icon:"EditIcon",svgClasses:"w-5 h-5 hover:text-warning stroke-current"},on:{click:function(a){return t.updateClient(e.id)}}}):t._e(),t._v(" "),t.showItem("Eliminar cliente")?a("feather-icon",{attrs:{icon:"TrashIcon",svgClasses:"w-5 h-5 hover:text-danger stroke-current"},on:{click:function(a){return t.dialogDeleteCustomer(e.id)}}}):t._e()],1)],1)}))}}],null,!1,2654075835)},[a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"id"}},[t._v("ID")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"firstName"}},[t._v("Primer nombre")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"secondName"}},[t._v("Segundo nombre")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"firstLastName"}},[t._v("Primer apellido")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"secondLastName"}},[t._v("Segundo apellido")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"dpi"}},[t._v("DPI")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"nit"}},[t._v("NIT")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"user_created.name"}},[t._v("Usuario creador")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"user_updated.name"}},[t._v("Usuario actualizó")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"in_charge.name"}},[t._v("Encargado")]),t._v(" "),a("vs-th",[t._v("Acciones")])],1)],2)],1),t._v(" "),a("br"),t._v(" "),a("vs-pagination",{attrs:{total:t.pagination.total},on:{change:t.getCustomers},model:{value:t.pagination.current,callback:function(e){t.$set(t.pagination,"current",e)},expression:"pagination.current"}})],2)],1):t._e()}),[],!1,null,null,null);e.default=_.exports},YfHF:function(t,e,a){var n=a("HhLO");"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,s);n.locals&&(t.exports=n.locals)},v8TL:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={showItem:function(t){return void 0!==localStorage.getItem("permitKey")&&void 0!==JSON.parse(localStorage.getItem("permitKey")).find((function(e){return e.name===t&&1===e.status}))}}}}]);