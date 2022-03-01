(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{PI6J:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={cuiIsValid:function(e){window.console;if(!e)return!0;if(!/^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/.test(e))return!1;e=e.replace(/\s/,"");var t=parseInt(e.substring(9,11),10),r=parseInt(e.substring(11,13)),n=e.substring(0,8),a=parseInt(e.substring(8,9)),i=[17,8,16,16,13,14,19,8,24,21,9,30,32,21,8,17,14,5,11,11,7,17];if(0===t||0===r)return!1;if(t>i.length)return!1;if(r>i[t-1])return!1;for(var o=0,s=0;s<n.length;s++)o+=n[s]*(s+2);return o%11===a},nitIsValid:function(e){var t=e.toString();if(!t)return!0;if(!new RegExp("^[0-9]+(-?[0-9kK])?$").test(t))return!1;for(var r=(t=t.replace(/-/,"")).length-1,n=t.substring(0,r),a=t.substring(r,r+1).toLowerCase(),i=n.length+1,o=0,s=0;s<n.length;s++){var c=n.substring(s,s+1);o+=parseInt(c,10)*i,i-=1}var u=(11-o%11)%11;return a===(10==u?"k":u.toString())},money:function(e){return"Q "+e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},percentage:function(e){return e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")+" %"},quantity:function(e){return e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},parseDecimal:function(e){return parseFloat(parseFloat(e).toFixed(2))},calculateCreditAmount:function(e,t,r){var n=this.parseDecimal(this.parseDecimal(e)/this.parseDecimal(r)),a=this.parseDecimal(this.parseDecimal(e)*(this.parseDecimal(t)/100));return this.parseDecimal(n+a)}}},Q5Zs:function(e,t,r){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(i).default}});var o=n(r(5));t.default={render:function(e){var t=this;return e("input",{ref:"input",domProps:{value:this.value},attrs:this.$attrs,on:Object.assign(a({},this.$listeners),{input:function(e){return t.updateValue(e.target.value)}})})},name:"masked-input",inheritAttrs:!1,props:{value:{type:String,required:!1,default:""},mask:{type:[Array,Function,Boolean,Object],required:!0},guide:{type:Boolean,required:!1},placeholderChar:{type:String,required:!1},keepCharPositions:{type:Boolean,required:!1},pipe:{type:Function,required:!1},showMask:{type:Boolean,required:!1}},mounted:function(){this.initMask()},methods:{createTextMaskInputElement:o.default,setTextMaskInputElement:function(){this.textMaskInputElement=this.createTextMaskInputElement(a({inputElement:this.$refs.input},this.$options.propsData))},initMask:function(){this.setTextMaskInputElement(),this.textMaskInputElement.update(this.value)},bind:function(){this.setTextMaskInputElement(),this.updateValue(this.value)},updateValue:function(e){this.textMaskInputElement.update(e),this.$emit("input",this.$refs.input.value)}},watch:{mask:function(e,t){this.mask!==t&&this.bind()},guide:function(){this.bind()},placeholderChar:function(){this.bind()},keepCharPositions:function(){this.bind()},pipe:function(){this.bind()},showMask:function(){this.bind()}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,a.isArray)(t)){if((void 0===t?"undefined":n(t))!==i.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0,a.processCaretTraps)(t).maskWithoutCaretTraps}var c=r.guide,u=void 0===c||c,l=r.previousConformedValue,d=void 0===l?s:l,p=r.placeholderChar,v=void 0===p?i.placeholderChar:p,f=r.placeholder,h=void 0===f?(0,a.convertMaskToPlaceholder)(t,v):f,m=r.currentCaretPosition,g=r.keepCharPositions,b=!1===u&&void 0!==d,y=e.length,_=d.length,x=h.length,k=t.length,C=y-_,w=C>0,S=m+(w?-C:0),P=S+Math.abs(C);if(!0===g&&!w){for(var A=s,T=S;T<P;T++)h[T]===v&&(A+=v);e=e.slice(0,S)+A+e.slice(S,y)}for(var M=e.split(s).map((function(e,t){return{char:e,isNew:t>=S&&t<P}})),I=y-1;I>=0;I--){var $=M[I].char;if($!==v){var O=I>=S&&_===k;$===h[O?I-C:I]&&M.splice(I,1)}}var N=s,E=!1;e:for(var j=0;j<x;j++){var q=h[j];if(q===v){if(M.length>0)for(;M.length>0;){var D=M.shift(),F=D.char,V=D.isNew;if(F===v&&!0!==b){N+=v;continue e}if(t[j].test(F)){if(!0===g&&!1!==V&&d!==s&&!1!==u&&w){for(var L=M.length,J=null,R=0;R<L;R++){var B=M[R];if(B.char!==v&&!1===B.isNew)break;if(B.char===v){J=R;break}}null!==J?(N+=F,M.splice(J,1)):j--}else N+=F;continue e}E=!0}!1===b&&(N+=h.substr(j,x));break}N+=q}if(b&&!1===w){for(var Q=null,Z=0;Z<N.length;Z++)h[Z]===v&&(Q=Z);N=null!==Q?N.substr(0,Q+1):s}return{conformedValue:N,meta:{someCharsRejected:E}}};var a=r(3),i=r(1),o=[],s=""},function(e,t,r){"use strict";function n(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.placeholderChar;if(!n(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(t)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map((function(e){return e instanceof RegExp?t:e})).join("")},t.isArray=n,t.isString=function(e){return"string"==typeof e||e instanceof String},t.isNumber=function(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)},t.isNil=function(e){return null==e},t.processCaretTraps=function(e){for(var t=[],r=void 0;-1!==(r=e.indexOf(o));)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}};var a=r(1),i=[],o="[]"},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.previousConformedValue,a=void 0===t?n:t,i=e.previousPlaceholder,o=void 0===i?n:i,s=e.currentCaretPosition,c=void 0===s?0:s,u=e.conformedValue,l=e.rawValue,d=e.placeholderChar,p=e.placeholder,v=e.indexesOfPipedChars,f=void 0===v?r:v,h=e.caretTrapIndexes,m=void 0===h?r:h;if(0===c||!l.length)return 0;var g=l.length,b=a.length,y=p.length,_=u.length,x=g-b,k=x>0;if(x>1&&!k&&0!==b)return c;var C=0,w=void 0,S=void 0;if(!k||a!==u&&u!==p){var P=u.toLowerCase(),A=l.toLowerCase().substr(0,c).split(n).filter((function(e){return-1!==P.indexOf(e)}));S=A[A.length-1];var T=o.substr(0,A.length).split(n).filter((function(e){return e!==d})).length,M=p.substr(0,A.length).split(n).filter((function(e){return e!==d})).length!==T,I=void 0!==o[A.length-1]&&void 0!==p[A.length-2]&&o[A.length-1]!==d&&o[A.length-1]!==p[A.length-1]&&o[A.length-1]===p[A.length-2];!k&&(M||I)&&T>0&&p.indexOf(S)>-1&&void 0!==l[c]&&(w=!0,S=l[c]);for(var $=f.map((function(e){return P[e]})).filter((function(e){return e===S})).length,O=A.filter((function(e){return e===S})).length,N=p.substr(0,p.indexOf(d)).split(n).filter((function(e,t){return e===S&&l[t]!==e})).length+O+$+(w?1:0),E=0,j=0;j<_&&(C=j+1,P[j]===S&&E++,!(E>=N));j++);}else C=c-x;if(k){for(var q=C,D=C;D<=y;D++)if(p[D]===d&&(q=D),p[D]===d||-1!==m.indexOf(D)||D===y)return q}else if(w){for(var F=C-1;F>=0;F--)if(u[F]===S||-1!==m.indexOf(F)||0===F)return F}else for(var V=C;V>=0;V--)if(p[V-1]===d||-1!==m.indexOf(V)||0===V)return V};var r=[],n=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){document.activeElement===e&&(h?m((function(){return e.setSelectionRange(t,t,v)}),0):e.setSelectionRange(t,t,v))}function i(e){if((0,l.isString)(e))return e;if((0,l.isNumber)(e))return String(e);if(null==e)return p;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,v=n.inputElement,h=n.mask,m=n.guide,g=n.pipe,b=n.placeholderChar,y=void 0===b?d.placeholderChar:b,_=n.keepCharPositions,x=void 0!==_&&_,k=n.showMask,C=void 0!==k&&k;if(void 0===r&&(r=v.value),r!==t.previousConformedValue){(void 0===h?"undefined":s(h))===f&&void 0!==h.pipe&&void 0!==h.mask&&(g=h.pipe,h=h.mask);var w=void 0,S=void 0;if(h instanceof Array&&(w=(0,l.convertMaskToPlaceholder)(h,y)),!1!==h){var P=i(r),A=v.selectionEnd,T=t.previousConformedValue,M=t.previousPlaceholder,I=void 0;if((void 0===h?"undefined":s(h))===d.strFunction){if(!1===(S=h(P,{currentCaretPosition:A,previousConformedValue:T,placeholderChar:y})))return;var $=(0,l.processCaretTraps)(S),O=$.maskWithoutCaretTraps,N=$.indexes;S=O,I=N,w=(0,l.convertMaskToPlaceholder)(S,y)}else S=h;var E={previousConformedValue:T,guide:m,placeholderChar:y,pipe:g,placeholder:w,currentCaretPosition:A,keepCharPositions:x},j=(0,u.default)(P,S,E),q=j.conformedValue,D=(void 0===g?"undefined":s(g))===d.strFunction,F={};D&&(!1===(F=g(q,o({rawValue:P},E)))?F={value:T,rejected:!0}:(0,l.isString)(F)&&(F={value:F}));var V=D?F.value:q,L=(0,c.default)({previousConformedValue:T,previousPlaceholder:M,conformedValue:V,placeholder:w,rawValue:P,currentCaretPosition:A,placeholderChar:y,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:I}),J=V===w&&0===L,R=C?w:p,B=J?R:V;t.previousConformedValue=B,t.previousPlaceholder=w,v.value!==B&&(v.value=B,a(v,L))}}}}};var c=n(r(4)),u=n(r(2)),l=r(3),d=r(1),p="",v="none",f="object",h="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])},VnSu:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n),i=r("e7F3"),o=r("XuX8"),s=r.n(o),c=r("Q5Zs"),u=r.n(c),l=r("lY5u"),d=r.n(l),p=r("Snq/"),v=r.n(p),f=r("vDqi"),h=r.n(f),m=r("LvDl"),g=r.n(m),b=r("PI6J"),y=r("v8TL");function _(e,t,r,n,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}s.a.directive("VeeValidate",i.b),s.a.use(i.b,{inject:!0});i.a.localize("es",{custom:{name:{required:"El nombre es requerido"},amount:{required:"El monto inicial es requerido"},user:{required:"El cajero es requerido"}}});var x={components:{"v-select":v.a,"masked-input":u.a},data:function(){return{idAccount:0,description:"",name:"",amount:"",mask_quetzal:d()({prefix:"Q ",suffix:"",includeThousandsSeparator:!0,thousandsSeparatorSymbol:",",allowDecimal:!0,decimalSymbol:".",decimalLimit:2,integerLimit:10,allowNegative:!1,allowLeadingZeroes:!1}),field:{label:"Nombre",value:"name"},typeFields:[{label:"Nombre",value:"name"}],filterSearch:"",pagination:{total:1,current:1},accounts:[],popup:{active:!1,title:"Nueva cuenta"},user:null,users:[]}},methods:{showItem:function(e){return y.a.showItem(e)},mymoney:function(e){return b.a.money(parseFloat(e))},onSearch:function(e,t){t(!0),this.search(t,e,this)},search:g.a.debounce((function(e,t,r){h.a.get("/api/searchUser?filter=".concat(t)).then((function(t){r.users=t.data.data,e(!1)})).catch((function(e){console.log(e)}))}),350),dialogDeleteAccount:function(e){this.idAccount=e,this.$vs.dialog({acceptText:"Si",cancelText:"No",type:"confirm",color:"danger",title:"Eliminar",text:"¿Desea eliminar esta caja?.",accept:this.deleteAccount})},deleteAccount:function(){var e=this;e.$vs.loading(),h.a.delete("/api/account/".concat(e.idAccount)).then((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Listo",color:"success",position:"top-right",text:"".concat(t.data.message)}),e.getAccounts()})).catch((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Error",color:"danger",position:"top-right",text:"".concat(t.response.data.message)})}))},convertDate:function(e){return new Date(e).toLocaleString("es-GT",{timeZone:"America/Guatemala"})},getAccounts:function(){var e,t=this;return(e=a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!=(r=t).filterSearch&&1!=r.pagination.current&&(r.pagination.current=1),e.next=4,h.a.get("/api/cashregister?page=".concat(r.pagination.current,"&search=").concat(r.filterSearch,"&critery=").concat(r.field.value)).then((function(e){r.accounts=e.data.data,r.pagination.total=e.data.last_page,r.pagination.current=e.data.current_page})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){_(i,n,a,o,s,"next",e)}function s(e){_(i,n,a,o,s,"throw",e)}o(void 0)}))})()},converMaskToNumber:function(e){for(var t="",r=0;r<e.length;r+=1)"Q"!==e.charAt(r)&&","!==e.charAt(r)&&" "!==e.charAt(r)&&(t+=e.charAt(r));return parseFloat(t).toFixed(2)},editPopup:function(e){this.$validator.reset(),this.popup={active:!0,title:"Editar cuenta"},this.idAccount=e.id,this.description=e.description,this.name=e.name,this.amount=e.amount,this.user={id:e.in_charge.id,name:e.in_charge.name}},openPopup:function(){this.$validator.reset(),this.popup={active:!0,title:"Nueva cuenta"},this.resetForm()},resetForm:function(){this.id=0,this.description="",this.name="",this.amount="",this.user=[]},submitForm:function(){"Nueva cuenta"===this.popup.title?this.saveAccount():this.updateAccount()},saveAccount:function(){var e=this;this.$validator.validateAll().then((function(t){t&&(e.$vs.loading(),h.a.post("/api/cashregister",{description:e.description,name:e.name,amount:e.converMaskToNumber(e.amount),inCharge:e.user.id,user:JSON.parse(localStorage.getItem("userInfo")).uid}).then((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Listo",color:"success",position:"top-right",text:"".concat(t.data.message)}),e.popup.active=!1,e.getAccounts()})).catch((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Error",color:"danger",position:"top-right",text:"".concat(t.response.data.message)})})))}))},updateAccount:function(){var e=this;this.$validator.validateAll().then((function(t){t&&(e.$vs.loading(),h.a.put("/api/cashregister/".concat(e.idAccount),{description:e.description,name:e.name,amount:e.converMaskToNumber(e.amount),inCharge:e.user.id,user:JSON.parse(localStorage.getItem("userInfo")).uid}).then((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Listo",color:"success",position:"top-right",text:"".concat(t.data.message)}),e.popup.active=!1,e.getAccounts()})).catch((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Error",color:"danger",position:"top-right",text:"".concat(t.response.data.message)})})))}))}}},k=r("KHd+"),C=Object(k.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.showItem("Ver lista de cajas")?r("div",[r("vx-card",{attrs:{title:"Listado de cajas"}},[r("div",{staticClass:"flex -mx-2"},[r("div",{staticClass:"w-3/4 px-2"},[r("vx-input-group",{staticClass:"mb-base"},[r("template",{slot:"prepend"},[r("div",{staticClass:"prepend-text bg-primary"},[r("vs-button",{staticClass:"btnx",attrs:{type:"filled"}},[e._v(e._s(e.field.label))]),e._v(" "),r("vs-dropdown",[r("vs-button",{staticClass:"btn-drop",attrs:{type:"filled",icon:"expand_more"}}),e._v(" "),r("vs-dropdown-menu",e._l(e.typeFields,(function(t){return r("vs-dropdown-item",{key:t.label,on:{click:function(r){e.field=t}}},[e._v(" "+e._s(t.label)+"\n                                    ")])})),1)],1)],1)]),e._v(" "),r("vs-input",{attrs:{placeholder:"Ingrese búsqueda"},on:{input:e.getAccounts},model:{value:e.filterSearch,callback:function(t){e.filterSearch=t},expression:"filterSearch"}})],2)],1),e._v(" "),r("div",{staticClass:"w-1/4"},[e.showItem("Crear caja")?r("vs-button",{staticClass:"btnx",attrs:{type:"filled"},on:{click:e.openPopup}},[e._v("Nuevo")]):e._e()],1)]),e._v(" "),r("div",{staticClass:"data-list-container",attrs:{id:"data-list-list-view"}},[r("vs-table",{attrs:{data:e.accounts},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data;return e._l(n,(function(t){return r("vs-tr",{key:t.id},[r("vs-td",[e._v(e._s(t.id))]),e._v(" "),r("vs-td",[e._v(e._s(t.name))]),e._v(" "),r("vs-td",[e._v(e._s(e.mymoney(t.amount)))]),e._v(" "),r("vs-td",[r("vs-chip",{staticClass:"product-order-status",attrs:{color:"primary"}},[e._v("\n                                    "+e._s(t.user_created.name))])],1),e._v(" "),r("vs-td",[r("vs-chip",{staticClass:"product-order-status",attrs:{color:"primary"}},[e._v("\n                                    "+e._s(t.user_updated.name))])],1),e._v(" "),r("vs-td",[r("vs-chip",{staticClass:"product-order-status",attrs:{color:"primary"}},[e._v("\n                                    "+e._s(t.in_charge.name))])],1),e._v(" "),r("vs-td",[r("div",{staticClass:"btn-group"},[1===t.status?r("vs-chip",{staticClass:"product-order-status",attrs:{color:"success"}},[e._v("\n                                    Activo")]):e._e(),e._v(" "),0===t.status?r("vs-chip",{staticClass:"product-order-status",attrs:{color:"danger"}},[e._v("\n                                    Inactivo")]):e._e()],1)]),e._v(" "),r("vs-td",[e._v(e._s(t.description))]),e._v(" "),r("vs-td",[e._v(e._s(e.convertDate(t.created_at)))]),e._v(" "),r("vs-td",{staticClass:"whitespace-no-wrap"},[e.showItem("Editar caja")?r("feather-icon",{attrs:{icon:"EditIcon",svgClasses:"w-5 h-5 hover:text-warning stroke-current"},on:{click:function(r){return e.editPopup(t)}}}):e._e(),e._v(" "),e.showItem("Eliminar caja")?r("feather-icon",{attrs:{icon:"TrashIcon",svgClasses:"w-5 h-5 hover:text-danger stroke-current"},on:{click:function(r){return e.dialogDeleteAccount(t.id)}}}):e._e()],1)],1)}))}}],null,!1,854821424)},[r("template",{slot:"thead"},[r("vs-th",{attrs:{"sort-key":"id"}},[e._v("ID")]),e._v(" "),r("vs-th",{attrs:{"sort-key":"name"}},[e._v("Nombre")]),e._v(" "),r("vs-th",{attrs:{"sort-key":"amount"}},[e._v("Monto")]),e._v(" "),r("vs-th",{attrs:{"sort-key":"user_created.name"}},[e._v("Usuario creador")]),e._v(" "),r("vs-th",{attrs:{"sort-key":"user_updated.name"}},[e._v("Usuario actualizó")]),e._v(" "),r("vs-th",{attrs:{"sort-key":"in_charge.name"}},[e._v("Cajero")]),e._v(" "),r("vs-th",{attrs:{"sort-key":"status"}},[e._v("Estado")]),e._v(" "),r("vs-th",{attrs:{"sort-key":"description"}},[e._v("Descripción")]),e._v(" "),r("vs-th",{attrs:{"sort-key":"created_at"}},[e._v("Fecha de creación")]),e._v(" "),r("vs-th",[e._v("Acciones")])],1)],2)],1),e._v(" "),r("br"),e._v(" "),r("vs-pagination",{attrs:{total:e.pagination.total},on:{change:e.getAccounts},model:{value:e.pagination.current,callback:function(t){e.$set(e.pagination,"current",t)},expression:"pagination.current"}})],1),e._v(" "),r("vs-popup",{attrs:{title:e.popup.title,active:e.popup.active},on:{"update:active":function(t){return e.$set(e.popup,"active",t)}}},[r("form",[r("div",{staticClass:"con-exemple-prompt"},[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col w-full mt-5"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Nombre",name:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("name")))])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"Nueva cuenta"===e.popup.title,expression:"popup.title==='Nueva cuenta'"}],staticClass:"vx-col w-full mt-5"},[r("label",{staticClass:"vs-input--label"},[e._v("Monto")]),e._v(" "),r("masked-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"vs-inputx vs-input--input normal",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{name:"amount",mask:e.mask_quetzal,guide:!1,"keep-char-positions":!0,"show-mask":!0},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}}),e._v(" "),r("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("amount")))])],1),e._v(" "),r("div",{staticClass:"vx-col w-full mt-5"},[r("label",{staticClass:"vs-input--label"},[e._v("Cajero")]),e._v(" "),r("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{options:e.users,filterable:!1,label:"name",name:"user"},on:{search:e.onSearch},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),e._v(" "),r("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("user")))])],1),e._v(" "),r("div",{staticClass:"vx-col w-full mt-5"},[r("vs-input",{staticClass:"w-full",attrs:{label:"Descripción",name:"description"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)]),e._v(" "),r("vs-button",{staticClass:"mt-5 block",attrs:{type:"filled"},on:{click:function(t){return t.preventDefault(),e.submitForm(t)}}},[e._v("Guardar")])],1)])])],1):e._e()}),[],!1,null,null,null);t.default=C.exports},lY5u:function(e,t,r){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(2)},,function(e,t){"use strict";function r(e){return e.split(o).map((function(e){return v.test(e)?v:e}))}function n(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=e.length;if(e===o||e[0]===m[0]&&1===t)return m.split(o).concat([v]).concat(b.split(o));if(e===P&&w)return m.split(o).concat(["0",P,v]).concat(b.split(o));var i=e[0]===u&&O;i&&(e=e.toString().substr(1));var s=e.lastIndexOf(P),c=-1!==s,h=void 0,g=void 0,y=void 0;if(e.slice(-1*F)===b&&(e=e.slice(0,-1*F)),c&&(w||I)?(h=e.slice(e.slice(0,D)===m?D:0,s),g=r((g=e.slice(s+1,t)).replace(d,o))):h=e.slice(0,D)===m?e.slice(D):e,q&&(void 0===q?"undefined":a(q))===p){var x="."===k?"[.]":""+k,C=(h.match(new RegExp(x,"g"))||[]).length;h=h.slice(0,q+C*V)}return h=h.replace(d,o),E||(h=h.replace(/^0+(0$|[^0])/,"$1")),y=r(h=_?n(h,k):h),(c&&w||!0===I)&&(e[s-1]!==P&&y.push(f),y.push(P,f),g&&((void 0===T?"undefined":a(T))===p&&(g=g.slice(0,T)),y=y.concat(g)),!0===I&&e[s-1]===P&&y.push(v)),D>0&&(y=m.split(o).concat(y)),i&&(y.length===D&&y.push(v),y=[l].concat(y)),b.length>0&&(y=y.concat(b.split(o))),y}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},h=t.prefix,m=void 0===h?i:h,g=t.suffix,b=void 0===g?o:g,y=t.includeThousandsSeparator,_=void 0===y||y,x=t.thousandsSeparatorSymbol,k=void 0===x?s:x,C=t.allowDecimal,w=void 0!==C&&C,S=t.decimalSymbol,P=void 0===S?c:S,A=t.decimalLimit,T=void 0===A?2:A,M=t.requireDecimal,I=void 0!==M&&M,$=t.allowNegative,O=void 0!==$&&$,N=t.allowLeadingZeroes,E=void 0!==N&&N,j=t.integerLimit,q=void 0===j?null:j,D=m&&m.length||0,F=b&&b.length||0,V=k&&k.length||0;return e.instanceOf="createNumberMask",e};var i="$",o="",s=",",c=".",u="-",l=/-/,d=/\D+/g,p="number",v=/\d/,f="[]"}])},v8TL:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={showItem:function(e){return void 0!==localStorage.getItem("permitKey")&&void 0!==JSON.parse(localStorage.getItem("permitKey")).find((function(t){return t.name===e&&1===t.status}))}}}}]);