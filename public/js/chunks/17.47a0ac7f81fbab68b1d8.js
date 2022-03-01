(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{IlxQ:function(e,t,r){"use strict";r.r(t);var n=r("e7F3"),i=r("XuX8"),a=r.n(i),o=r("Q5Zs"),s=r.n(o),u=r("lY5u"),l=r.n(u),c=r("Snq/"),d=r.n(c),f=r("vDqi"),p=r.n(f),v=r("LvDl"),h=r.n(v),m=(r("PI6J"),r("v8TL"));a.a.directive("VeeValidate",n.b),a.a.use(n.b,{inject:!0});n.a.localize("es",{custom:{name:{required:"El nombre es requerido"},amount:{required:"El monto inicial es requerido"},user:{required:"El cajero es requerido"}}});var g={components:{"v-select":d.a,"masked-input":s.a},data:function(){return{description:"",name:"",amount:"",mask_quetzal:l()({prefix:"Q ",suffix:"",includeThousandsSeparator:!0,thousandsSeparatorSymbol:",",allowDecimal:!0,decimalSymbol:".",decimalLimit:2,integerLimit:10,allowNegative:!1,allowLeadingZeroes:!1}),user:null,users:[]}},methods:{showItem:function(e){return m.a.showItem(e)},converMaskToNumber:function(e){for(var t="",r=0;r<e.length;r+=1)"Q"!==e.charAt(r)&&","!==e.charAt(r)&&" "!==e.charAt(r)&&(t+=e.charAt(r));return parseFloat(t).toFixed(2)},onSearch:function(e,t){t(!0),this.search(t,e,this)},search:h.a.debounce((function(e,t,r){p.a.get("/api/searchUser?filter=".concat(t)).then((function(t){r.users=t.data.data,e(!1)})).catch((function(e){console.log(e)}))}),350),saveAccount:function(){var e=this;this.$validator.validateAll().then((function(t){t&&(e.$vs.loading(),p.a.post("/api/cashregister",{description:e.description,name:e.name,amount:e.converMaskToNumber(e.amount),inCharge:e.user.id,user:JSON.parse(localStorage.getItem("userInfo")).uid}).then((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Listo",color:"success",position:"top-right",text:"".concat(t.data.message)}),e.$router.push({path:"/cajas"})})).catch((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Error",color:"danger",position:"top-right",text:"".concat(t.response.data.message)})})))}))}}},b=r("KHd+"),y=Object(b.a)(g,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.showItem("Crear caja")?r("div",[r("vx-card",{attrs:{title:"Nueva caja"}},[r("form",[r("div",{staticClass:"con-exemple-prompt"},[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col w-full mt-5"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Nombre",name:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("name")))])],1),e._v(" "),r("div",{staticClass:"vx-col w-full mt-5"},[r("label",{staticClass:"vs-input--label"},[e._v("Monto")]),e._v(" "),r("masked-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"vs-inputx vs-input--input normal",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{name:"amount",mask:e.mask_quetzal,guide:!1,"keep-char-positions":!0,"show-mask":!0},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}}),e._v(" "),r("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("amount")))])],1),e._v(" "),r("div",{staticClass:"vx-col w-full mt-5"},[r("label",{staticClass:"vs-input--label"},[e._v("Cajero")]),e._v(" "),r("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{options:e.users,filterable:!1,label:"name",name:"user"},on:{search:e.onSearch},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),e._v(" "),r("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("user")))])],1),e._v(" "),r("div",{staticClass:"vx-col w-full mt-5"},[r("vs-input",{staticClass:"w-full",attrs:{label:"Descripción",name:"description"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)]),e._v(" "),r("vs-button",{staticClass:"mt-5 block",attrs:{type:"filled"},on:{click:function(t){return t.preventDefault(),e.saveAccount.apply(null,arguments)}}},[e._v("Guardar")])],1)])])],1):e._e()}),[],!1,null,null,null);t.default=y.exports},PI6J:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={cuiIsValid:function(e){window.console;if(!e)return!0;if(!/^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/.test(e))return!1;e=e.replace(/\s/,"");var t=parseInt(e.substring(9,11),10),r=parseInt(e.substring(11,13)),n=e.substring(0,8),i=parseInt(e.substring(8,9)),a=[17,8,16,16,13,14,19,8,24,21,9,30,32,21,8,17,14,5,11,11,7,17];if(0===t||0===r)return!1;if(t>a.length)return!1;if(r>a[t-1])return!1;for(var o=0,s=0;s<n.length;s++)o+=n[s]*(s+2);return o%11===i},nitIsValid:function(e){var t=e.toString();if(!t)return!0;if(!new RegExp("^[0-9]+(-?[0-9kK])?$").test(t))return!1;for(var r=(t=t.replace(/-/,"")).length-1,n=t.substring(0,r),i=t.substring(r,r+1).toLowerCase(),a=n.length+1,o=0,s=0;s<n.length;s++){var u=n.substring(s,s+1);o+=parseInt(u,10)*a,a-=1}var l=(11-o%11)%11;return i===(10==l?"k":l.toString())},money:function(e){return"Q "+e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},percentage:function(e){return e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")+" %"},quantity:function(e){return e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},parseDecimal:function(e){return parseFloat(parseFloat(e).toFixed(2))},calculateCreditAmount:function(e,t,r){var n=this.parseDecimal(this.parseDecimal(e)/this.parseDecimal(r)),i=this.parseDecimal(this.parseDecimal(e)*(this.parseDecimal(t)/100));return this.parseDecimal(n+i)}}},Q5Zs:function(e,t,r){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(a).default}});var o=n(r(5));t.default={render:function(e){var t=this;return e("input",{ref:"input",domProps:{value:this.value},attrs:this.$attrs,on:Object.assign(i({},this.$listeners),{input:function(e){return t.updateValue(e.target.value)}})})},name:"masked-input",inheritAttrs:!1,props:{value:{type:String,required:!1,default:""},mask:{type:[Array,Function,Boolean,Object],required:!0},guide:{type:Boolean,required:!1},placeholderChar:{type:String,required:!1},keepCharPositions:{type:Boolean,required:!1},pipe:{type:Function,required:!1},showMask:{type:Boolean,required:!1}},mounted:function(){this.initMask()},methods:{createTextMaskInputElement:o.default,setTextMaskInputElement:function(){this.textMaskInputElement=this.createTextMaskInputElement(i({inputElement:this.$refs.input},this.$options.propsData))},initMask:function(){this.setTextMaskInputElement(),this.textMaskInputElement.update(this.value)},bind:function(){this.setTextMaskInputElement(),this.updateValue(this.value)},updateValue:function(e){this.textMaskInputElement.update(e),this.$emit("input",this.$refs.input.value)}},watch:{mask:function(e,t){this.mask!==t&&this.bind()},guide:function(){this.bind()},placeholderChar:function(){this.bind()},keepCharPositions:function(){this.bind()},pipe:function(){this.bind()},showMask:function(){this.bind()}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(t)){if((void 0===t?"undefined":n(t))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0,i.processCaretTraps)(t).maskWithoutCaretTraps}var u=r.guide,l=void 0===u||u,c=r.previousConformedValue,d=void 0===c?s:c,f=r.placeholderChar,p=void 0===f?a.placeholderChar:f,v=r.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(t,p):v,m=r.currentCaretPosition,g=r.keepCharPositions,b=!1===l&&void 0!==d,y=e.length,x=d.length,k=h.length,C=t.length,w=y-x,S=w>0,_=m+(S?-w:0),P=_+Math.abs(w);if(!0===g&&!S){for(var T=s,M=_;M<P;M++)h[M]===p&&(T+=p);e=e.slice(0,_)+T+e.slice(_,y)}for(var O=e.split(s).map((function(e,t){return{char:e,isNew:t>=_&&t<P}})),I=y-1;I>=0;I--){var q=O[I].char;if(q!==p){var j=I>=_&&x===C;q===h[j?I-w:I]&&O.splice(I,1)}}var E=s,N=!1;e:for(var V=0;V<k;V++){var A=h[V];if(A===p){if(O.length>0)for(;O.length>0;){var $=O.shift(),D=$.char,F=$.isNew;if(D===p&&!0!==b){E+=p;continue e}if(t[V].test(D)){if(!0===g&&!1!==F&&d!==s&&!1!==l&&S){for(var L=O.length,J=null,Q=0;Q<L;Q++){var R=O[Q];if(R.char!==p&&!1===R.isNew)break;if(R.char===p){J=Q;break}}null!==J?(E+=D,O.splice(J,1)):V--}else E+=D;continue e}N=!0}!1===b&&(E+=h.substr(V,k));break}E+=A}if(b&&!1===S){for(var B=null,K=0;K<E.length;K++)h[K]===p&&(B=K);E=null!==B?E.substr(0,B+1):s}return{conformedValue:E,meta:{someCharsRejected:N}}};var i=r(3),a=r(1),o=[],s=""},function(e,t,r){"use strict";function n(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.placeholderChar;if(!n(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(t)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map((function(e){return e instanceof RegExp?t:e})).join("")},t.isArray=n,t.isString=function(e){return"string"==typeof e||e instanceof String},t.isNumber=function(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)},t.isNil=function(e){return null==e},t.processCaretTraps=function(e){for(var t=[],r=void 0;-1!==(r=e.indexOf(o));)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}};var i=r(1),a=[],o="[]"},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.previousConformedValue,i=void 0===t?n:t,a=e.previousPlaceholder,o=void 0===a?n:a,s=e.currentCaretPosition,u=void 0===s?0:s,l=e.conformedValue,c=e.rawValue,d=e.placeholderChar,f=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?r:p,h=e.caretTrapIndexes,m=void 0===h?r:h;if(0===u||!c.length)return 0;var g=c.length,b=i.length,y=f.length,x=l.length,k=g-b,C=k>0;if(k>1&&!C&&0!==b)return u;var w=0,S=void 0,_=void 0;if(!C||i!==l&&l!==f){var P=l.toLowerCase(),T=c.toLowerCase().substr(0,u).split(n).filter((function(e){return-1!==P.indexOf(e)}));_=T[T.length-1];var M=o.substr(0,T.length).split(n).filter((function(e){return e!==d})).length,O=f.substr(0,T.length).split(n).filter((function(e){return e!==d})).length!==M,I=void 0!==o[T.length-1]&&void 0!==f[T.length-2]&&o[T.length-1]!==d&&o[T.length-1]!==f[T.length-1]&&o[T.length-1]===f[T.length-2];!C&&(O||I)&&M>0&&f.indexOf(_)>-1&&void 0!==c[u]&&(S=!0,_=c[u]);for(var q=v.map((function(e){return P[e]})).filter((function(e){return e===_})).length,j=T.filter((function(e){return e===_})).length,E=f.substr(0,f.indexOf(d)).split(n).filter((function(e,t){return e===_&&c[t]!==e})).length+j+q+(S?1:0),N=0,V=0;V<x&&(w=V+1,P[V]===_&&N++,!(N>=E));V++);}else w=u-k;if(C){for(var A=w,$=w;$<=y;$++)if(f[$]===d&&(A=$),f[$]===d||-1!==m.indexOf($)||$===y)return A}else if(S){for(var D=w-1;D>=0;D--)if(l[D]===_||-1!==m.indexOf(D)||0===D)return D}else for(var F=w;F>=0;F--)if(f[F-1]===d||-1!==m.indexOf(F)||0===F)return F};var r=[],n=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){document.activeElement===e&&(h?m((function(){return e.setSelectionRange(t,t,p)}),0):e.setSelectionRange(t,t,p))}function a(e){if((0,c.isString)(e))return e;if((0,c.isNumber)(e))return String(e);if(null==e)return f;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,p=n.inputElement,h=n.mask,m=n.guide,g=n.pipe,b=n.placeholderChar,y=void 0===b?d.placeholderChar:b,x=n.keepCharPositions,k=void 0!==x&&x,C=n.showMask,w=void 0!==C&&C;if(void 0===r&&(r=p.value),r!==t.previousConformedValue){(void 0===h?"undefined":s(h))===v&&void 0!==h.pipe&&void 0!==h.mask&&(g=h.pipe,h=h.mask);var S=void 0,_=void 0;if(h instanceof Array&&(S=(0,c.convertMaskToPlaceholder)(h,y)),!1!==h){var P=a(r),T=p.selectionEnd,M=t.previousConformedValue,O=t.previousPlaceholder,I=void 0;if((void 0===h?"undefined":s(h))===d.strFunction){if(!1===(_=h(P,{currentCaretPosition:T,previousConformedValue:M,placeholderChar:y})))return;var q=(0,c.processCaretTraps)(_),j=q.maskWithoutCaretTraps,E=q.indexes;_=j,I=E,S=(0,c.convertMaskToPlaceholder)(_,y)}else _=h;var N={previousConformedValue:M,guide:m,placeholderChar:y,pipe:g,placeholder:S,currentCaretPosition:T,keepCharPositions:k},V=(0,l.default)(P,_,N),A=V.conformedValue,$=(void 0===g?"undefined":s(g))===d.strFunction,D={};$&&(!1===(D=g(A,o({rawValue:P},N)))?D={value:M,rejected:!0}:(0,c.isString)(D)&&(D={value:D}));var F=$?D.value:A,L=(0,u.default)({previousConformedValue:M,previousPlaceholder:O,conformedValue:F,placeholder:S,rawValue:P,currentCaretPosition:T,placeholderChar:y,indexesOfPipedChars:D.indexesOfPipedChars,caretTrapIndexes:I}),J=F===S&&0===L,Q=w?S:f,R=J?Q:F;t.previousConformedValue=R,t.previousPlaceholder=S,p.value!==R&&(p.value=R,i(p,L))}}}}};var u=n(r(4)),l=n(r(2)),c=r(3),d=r(1),f="",p="none",v="object",h="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])},lY5u:function(e,t,r){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(2)},,function(e,t){"use strict";function r(e){return e.split(o).map((function(e){return p.test(e)?p:e}))}function n(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=e.length;if(e===o||e[0]===m[0]&&1===t)return m.split(o).concat([p]).concat(b.split(o));if(e===P&&S)return m.split(o).concat(["0",P,p]).concat(b.split(o));var a=e[0]===l&&j;a&&(e=e.toString().substr(1));var s=e.lastIndexOf(P),u=-1!==s,h=void 0,g=void 0,y=void 0;if(e.slice(-1*D)===b&&(e=e.slice(0,-1*D)),u&&(S||I)?(h=e.slice(e.slice(0,$)===m?$:0,s),g=r((g=e.slice(s+1,t)).replace(d,o))):h=e.slice(0,$)===m?e.slice($):e,A&&(void 0===A?"undefined":i(A))===f){var k="."===C?"[.]":""+C,w=(h.match(new RegExp(k,"g"))||[]).length;h=h.slice(0,A+w*F)}return h=h.replace(d,o),N||(h=h.replace(/^0+(0$|[^0])/,"$1")),y=r(h=x?n(h,C):h),(u&&S||!0===I)&&(e[s-1]!==P&&y.push(v),y.push(P,v),g&&((void 0===M?"undefined":i(M))===f&&(g=g.slice(0,M)),y=y.concat(g)),!0===I&&e[s-1]===P&&y.push(p)),$>0&&(y=m.split(o).concat(y)),a&&(y.length===$&&y.push(p),y=[c].concat(y)),b.length>0&&(y=y.concat(b.split(o))),y}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},h=t.prefix,m=void 0===h?a:h,g=t.suffix,b=void 0===g?o:g,y=t.includeThousandsSeparator,x=void 0===y||y,k=t.thousandsSeparatorSymbol,C=void 0===k?s:k,w=t.allowDecimal,S=void 0!==w&&w,_=t.decimalSymbol,P=void 0===_?u:_,T=t.decimalLimit,M=void 0===T?2:T,O=t.requireDecimal,I=void 0!==O&&O,q=t.allowNegative,j=void 0!==q&&q,E=t.allowLeadingZeroes,N=void 0!==E&&E,V=t.integerLimit,A=void 0===V?null:V,$=m&&m.length||0,D=b&&b.length||0,F=C&&C.length||0;return e.instanceOf="createNumberMask",e};var a="$",o="",s=",",u=".",l="-",c=/-/,d=/\D+/g,f="number",p=/\d/,v="[]"}])},v8TL:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={showItem:function(e){return void 0!==localStorage.getItem("permitKey")&&void 0!==JSON.parse(localStorage.getItem("permitKey")).find((function(t){return t.name===e&&1===t.status}))}}}}]);