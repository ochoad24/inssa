(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{PI6J:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={cuiIsValid:function(e){window.console;if(!e)return!0;if(!/^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/.test(e))return!1;e=e.replace(/\s/,"");var t=parseInt(e.substring(9,11),10),n=parseInt(e.substring(11,13)),r=e.substring(0,8),o=parseInt(e.substring(8,9)),i=[17,8,16,16,13,14,19,8,24,21,9,30,32,21,8,17,14,5,11,11,7,17];if(0===t||0===n)return!1;if(t>i.length)return!1;if(n>i[t-1])return!1;for(var a=0,s=0;s<r.length;s++)a+=r[s]*(s+2);return a%11===o},nitIsValid:function(e){var t=e.toString();if(!t)return!0;if(!new RegExp("^[0-9]+(-?[0-9kK])?$").test(t))return!1;for(var n=(t=t.replace(/-/,"")).length-1,r=t.substring(0,n),o=t.substring(n,n+1).toLowerCase(),i=r.length+1,a=0,s=0;s<r.length;s++){var u=r.substring(s,s+1);a+=parseInt(u,10)*i,i-=1}var l=(11-a%11)%11;return o===(10==l?"k":l.toString())},money:function(e){return"Q "+e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},percentage:function(e){return e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")+" %"},quantity:function(e){return e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},parseDecimal:function(e){return parseFloat(parseFloat(e).toFixed(2))},calculateCreditAmount:function(e,t,n){var r=this.parseDecimal(this.parseDecimal(e)/this.parseDecimal(n)),o=this.parseDecimal(this.parseDecimal(e)*(this.parseDecimal(t)/100));return this.parseDecimal(r+o)}}},Q5Zs:function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return r(i).default}});var a=r(n(5));t.default={render:function(e){var t=this;return e("input",{ref:"input",domProps:{value:this.value},attrs:this.$attrs,on:Object.assign(o({},this.$listeners),{input:function(e){return t.updateValue(e.target.value)}})})},name:"masked-input",inheritAttrs:!1,props:{value:{type:String,required:!1,default:""},mask:{type:[Array,Function,Boolean,Object],required:!0},guide:{type:Boolean,required:!1},placeholderChar:{type:String,required:!1},keepCharPositions:{type:Boolean,required:!1},pipe:{type:Function,required:!1},showMask:{type:Boolean,required:!1}},mounted:function(){this.initMask()},methods:{createTextMaskInputElement:a.default,setTextMaskInputElement:function(){this.textMaskInputElement=this.createTextMaskInputElement(o({inputElement:this.$refs.input},this.$options.propsData))},initMask:function(){this.setTextMaskInputElement(),this.textMaskInputElement.update(this.value)},bind:function(){this.setTextMaskInputElement(),this.updateValue(this.value)},updateValue:function(e){this.textMaskInputElement.update(e),this.$emit("input",this.$refs.input.value)}},watch:{mask:function(e,t){this.mask!==t&&this.bind()},guide:function(){this.bind()},placeholderChar:function(){this.bind()},keepCharPositions:function(){this.bind()},pipe:function(){this.bind()},showMask:function(){this.bind()}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,o.isArray)(t)){if((void 0===t?"undefined":r(t))!==i.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,n),t=(0,o.processCaretTraps)(t).maskWithoutCaretTraps}var u=n.guide,l=void 0===u||u,c=n.previousConformedValue,d=void 0===c?s:c,f=n.placeholderChar,p=void 0===f?i.placeholderChar:f,v=n.placeholder,h=void 0===v?(0,o.convertMaskToPlaceholder)(t,p):v,m=n.currentCaretPosition,g=n.keepCharPositions,b=!1===l&&void 0!==d,y=e.length,x=d.length,k=h.length,C=t.length,w=y-x,O=w>0,S=m+(O?-w:0),I=S+Math.abs(w);if(!0===g&&!O){for(var M=s,T=S;T<I;T++)h[T]===p&&(M+=p);e=e.slice(0,S)+M+e.slice(S,y)}for(var P=e.split(s).map((function(e,t){return{char:e,isNew:t>=S&&t<I}})),_=y-1;_>=0;_--){var E=P[_].char;if(E!==p){var $=_>=S&&x===C;E===h[$?_-w:_]&&P.splice(_,1)}}var A=s,V=!1;e:for(var j=0;j<k;j++){var N=h[j];if(N===p){if(P.length>0)for(;P.length>0;){var q=P.shift(),F=q.char,L=q.isNew;if(F===p&&!0!==b){A+=p;continue e}if(t[j].test(F)){if(!0===g&&!1!==L&&d!==s&&!1!==l&&O){for(var D=P.length,J=null,R=0;R<D;R++){var Q=P[R];if(Q.char!==p&&!1===Q.isNew)break;if(Q.char===p){J=R;break}}null!==J?(A+=F,P.splice(J,1)):j--}else A+=F;continue e}V=!0}!1===b&&(A+=h.substr(j,k));break}A+=N}if(b&&!1===O){for(var B=null,K=0;K<A.length;K++)h[K]===p&&(B=K);A=null!==B?A.substr(0,B+1):s}return{conformedValue:A,meta:{someCharsRejected:V}}};var o=n(3),i=n(1),a=[],s=""},function(e,t,n){"use strict";function r(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.placeholderChar;if(!r(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(t)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map((function(e){return e instanceof RegExp?t:e})).join("")},t.isArray=r,t.isString=function(e){return"string"==typeof e||e instanceof String},t.isNumber=function(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)},t.isNil=function(e){return null==e},t.processCaretTraps=function(e){for(var t=[],n=void 0;-1!==(n=e.indexOf(a));)t.push(n),e.splice(n,1);return{maskWithoutCaretTraps:e,indexes:t}};var o=n(1),i=[],a="[]"},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.previousConformedValue,o=void 0===t?r:t,i=e.previousPlaceholder,a=void 0===i?r:i,s=e.currentCaretPosition,u=void 0===s?0:s,l=e.conformedValue,c=e.rawValue,d=e.placeholderChar,f=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===u||!c.length)return 0;var g=c.length,b=o.length,y=f.length,x=l.length,k=g-b,C=k>0;if(k>1&&!C&&0!==b)return u;var w=0,O=void 0,S=void 0;if(!C||o!==l&&l!==f){var I=l.toLowerCase(),M=c.toLowerCase().substr(0,u).split(r).filter((function(e){return-1!==I.indexOf(e)}));S=M[M.length-1];var T=a.substr(0,M.length).split(r).filter((function(e){return e!==d})).length,P=f.substr(0,M.length).split(r).filter((function(e){return e!==d})).length!==T,_=void 0!==a[M.length-1]&&void 0!==f[M.length-2]&&a[M.length-1]!==d&&a[M.length-1]!==f[M.length-1]&&a[M.length-1]===f[M.length-2];!C&&(P||_)&&T>0&&f.indexOf(S)>-1&&void 0!==c[u]&&(O=!0,S=c[u]);for(var E=v.map((function(e){return I[e]})).filter((function(e){return e===S})).length,$=M.filter((function(e){return e===S})).length,A=f.substr(0,f.indexOf(d)).split(r).filter((function(e,t){return e===S&&c[t]!==e})).length+$+E+(O?1:0),V=0,j=0;j<x&&(w=j+1,I[j]===S&&V++,!(V>=A));j++);}else w=u-k;if(C){for(var N=w,q=w;q<=y;q++)if(f[q]===d&&(N=q),f[q]===d||-1!==m.indexOf(q)||q===y)return N}else if(O){for(var F=w-1;F>=0;F--)if(l[F]===S||-1!==m.indexOf(F)||0===F)return F}else for(var L=w;L>=0;L--)if(f[L-1]===d||-1!==m.indexOf(L)||0===L)return L};var n=[],r=""},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){document.activeElement===e&&(h?m((function(){return e.setSelectionRange(t,t,p)}),0):e.setSelectionRange(t,t,p))}function i(e){if((0,c.isString)(e))return e;if((0,c.isNumber)(e))return String(e);if(null==e)return f;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,p=r.inputElement,h=r.mask,m=r.guide,g=r.pipe,b=r.placeholderChar,y=void 0===b?d.placeholderChar:b,x=r.keepCharPositions,k=void 0!==x&&x,C=r.showMask,w=void 0!==C&&C;if(void 0===n&&(n=p.value),n!==t.previousConformedValue){(void 0===h?"undefined":s(h))===v&&void 0!==h.pipe&&void 0!==h.mask&&(g=h.pipe,h=h.mask);var O=void 0,S=void 0;if(h instanceof Array&&(O=(0,c.convertMaskToPlaceholder)(h,y)),!1!==h){var I=i(n),M=p.selectionEnd,T=t.previousConformedValue,P=t.previousPlaceholder,_=void 0;if((void 0===h?"undefined":s(h))===d.strFunction){if(!1===(S=h(I,{currentCaretPosition:M,previousConformedValue:T,placeholderChar:y})))return;var E=(0,c.processCaretTraps)(S),$=E.maskWithoutCaretTraps,A=E.indexes;S=$,_=A,O=(0,c.convertMaskToPlaceholder)(S,y)}else S=h;var V={previousConformedValue:T,guide:m,placeholderChar:y,pipe:g,placeholder:O,currentCaretPosition:M,keepCharPositions:k},j=(0,l.default)(I,S,V),N=j.conformedValue,q=(void 0===g?"undefined":s(g))===d.strFunction,F={};q&&(!1===(F=g(N,a({rawValue:I},V)))?F={value:T,rejected:!0}:(0,c.isString)(F)&&(F={value:F}));var L=q?F.value:N,D=(0,u.default)({previousConformedValue:T,previousPlaceholder:P,conformedValue:L,placeholder:O,rawValue:I,currentCaretPosition:M,placeholderChar:y,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:_}),J=L===O&&0===D,R=w?O:f,Q=J?R:L;t.previousConformedValue=Q,t.previousPlaceholder=O,p.value!==Q&&(p.value=Q,o(p,D))}}}}};var u=r(n(4)),l=r(n(2)),c=n(3),d=n(1),f="",p="none",v="object",h="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])},lY5u:function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(2)},,function(e,t){"use strict";function n(e){return e.split(a).map((function(e){return p.test(e)?p:e}))}function r(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=e.length;if(e===a||e[0]===m[0]&&1===t)return m.split(a).concat([p]).concat(b.split(a));if(e===I&&O)return m.split(a).concat(["0",I,p]).concat(b.split(a));var i=e[0]===l&&$;i&&(e=e.toString().substr(1));var s=e.lastIndexOf(I),u=-1!==s,h=void 0,g=void 0,y=void 0;if(e.slice(-1*F)===b&&(e=e.slice(0,-1*F)),u&&(O||_)?(h=e.slice(e.slice(0,q)===m?q:0,s),g=n((g=e.slice(s+1,t)).replace(d,a))):h=e.slice(0,q)===m?e.slice(q):e,N&&(void 0===N?"undefined":o(N))===f){var k="."===C?"[.]":""+C,w=(h.match(new RegExp(k,"g"))||[]).length;h=h.slice(0,N+w*L)}return h=h.replace(d,a),V||(h=h.replace(/^0+(0$|[^0])/,"$1")),y=n(h=x?r(h,C):h),(u&&O||!0===_)&&(e[s-1]!==I&&y.push(v),y.push(I,v),g&&((void 0===T?"undefined":o(T))===f&&(g=g.slice(0,T)),y=y.concat(g)),!0===_&&e[s-1]===I&&y.push(p)),q>0&&(y=m.split(a).concat(y)),i&&(y.length===q&&y.push(p),y=[c].concat(y)),b.length>0&&(y=y.concat(b.split(a))),y}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},h=t.prefix,m=void 0===h?i:h,g=t.suffix,b=void 0===g?a:g,y=t.includeThousandsSeparator,x=void 0===y||y,k=t.thousandsSeparatorSymbol,C=void 0===k?s:k,w=t.allowDecimal,O=void 0!==w&&w,S=t.decimalSymbol,I=void 0===S?u:S,M=t.decimalLimit,T=void 0===M?2:M,P=t.requireDecimal,_=void 0!==P&&P,E=t.allowNegative,$=void 0!==E&&E,A=t.allowLeadingZeroes,V=void 0!==A&&A,j=t.integerLimit,N=void 0===j?null:j,q=m&&m.length||0,F=b&&b.length||0,L=C&&C.length||0;return e.instanceOf="createNumberMask",e};var i="$",a="",s=",",u=".",l="-",c=/-/,d=/\D+/g,f="number",p=/\d/,v="[]"}])},v8TL:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={showItem:function(e){return void 0!==localStorage.getItem("permitKey")&&void 0!==JSON.parse(localStorage.getItem("permitKey")).find((function(t){return t.name===e&&1===t.status}))}}},xIXr:function(e,t,n){"use strict";n.r(t);var r=n("vDqi"),o=n.n(r),i=(n("PI6J"),n("LvDl")),a=n.n(i),s=n("Q5Zs"),u=n.n(s),l=n("lY5u"),c=n.n(l),d=n("Snq/"),f=n.n(d),p=n("v8TL"),v={components:{"v-select":f.a,"masked-input":u.a},data:function(){return{type:{value:"+",name:"Entrada"},types:[{value:"-",name:"Salida"},{value:"+",name:"Entrada"}],accountsIn:[],accountsOut:[],accountIn:null,accountOut:null,mask_quetzal:c()({prefix:"Q ",suffix:"",includeThousandsSeparator:!0,thousandsSeparatorSymbol:",",allowDecimal:!0,decimalSymbol:".",decimalLimit:2,integerLimit:10,allowNegative:!1,allowLeadingZeroes:!1}),reference:"",amount:""}},methods:{showItem:function(e){return p.a.showItem(e)},converMaskToNumber:function(e){for(var t="",n=0;n<e.length;n+=1)"Q"!==e.charAt(n)&&","!==e.charAt(n)&&" "!==e.charAt(n)&&(t+=e.charAt(n));return parseFloat(t).toFixed(2)},saveMoveAmountTransaction:function(){var e=this,t=this;null!=this.accountOut?null!=this.accountIn?this.accountOut.id!==this.accountIn.id?""!==this.amount&&"Q 0"!==this.amount?(t.$vs.loading(),o.a.post("/api/transaction",{idIn:t.accountIn.id,idOut:t.accountOut.id,nameIn:t.accountIn.name,nameOut:t.accountOut.name,reference:t.reference,amount:t.converMaskToNumber(t.amount),user:JSON.parse(localStorage.getItem("userInfo")).uid}).then((function(n){t.$vs.loading.close(),t.$vs.notify({title:"Listo",color:"success",position:"top-right",text:"".concat(n.data.message)}),e.$router.push({path:"/transacciones"})})).catch((function(e){t.$vs.loading.close(),console.log(e)}))):this.$vs.notify({title:"Error",color:"danger",position:"top-right",text:"El monto debe ser mayor a 0"}):this.$vs.notify({title:"Error",color:"danger",position:"top-right",text:"Las cuentas no pueden ser iguales"}):this.$vs.notify({title:"Error",color:"danger",position:"top-right",text:"La cuenta de entrada es requerida"}):this.$vs.notify({title:"Error",color:"danger",position:"top-right",text:"La cuenta de salida es requerida"})},onSearchIn:function(e,t){t(!0),this.search(t,e,this,!1)},onSearchOut:function(e,t){t(!0),this.search(t,e,this,!0)},search:a.a.debounce((function(e,t,n,r){o.a.get("/api/getAccount?filter=".concat(t)).then((function(t){!0===r?n.accountsOut=t.data.data:n.accountsIn=t.data.data,e(!1)})).catch((function(e){console.log(e)}))}),350)}},h=n("KHd+"),m=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showItem("Movimiento entre cuentas")?n("div",[n("vx-card",{attrs:{title:"Movimiento entre cuentas"}},[n("form",[n("div",{staticClass:"con-exemple-prompt"},[n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full mt-5"},[n("label",{staticClass:"vs-input--label"},[e._v("Cuenta salida")]),e._v(" "),n("v-select",{attrs:{options:e.accountsOut,filterable:!1,label:"name"},on:{search:e.onSearchOut},model:{value:e.accountOut,callback:function(t){e.accountOut=t},expression:"accountOut"}})],1)]),e._v(" "),n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full mt-5"},[n("label",{staticClass:"vs-input--label"},[e._v("Cuenta entrada")]),e._v(" "),n("v-select",{attrs:{options:e.accountsIn,filterable:!1,label:"name"},on:{search:e.onSearchIn},model:{value:e.accountIn,callback:function(t){e.accountIn=t},expression:"accountIn"}})],1)]),e._v(" "),n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full mt-5"},[n("label",{staticClass:"vs-input--label"},[e._v("Monto")]),e._v(" "),n("masked-input",{staticClass:"vs-inputx vs-input--input normal",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{mask:e.mask_quetzal,guide:!1,"keep-char-positions":!0,"show-mask":!0},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1)]),e._v(" "),n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full mt-5"},[n("vs-input",{staticClass:"w-full",attrs:{label:"Referencia"},model:{value:e.reference,callback:function(t){e.reference=t},expression:"reference"}})],1)]),e._v(" "),n("vs-button",{staticClass:"mt-5 block",attrs:{type:"filled"},on:{click:e.saveMoveAmountTransaction}},[e._v("Guardar")])],1)])])],1):e._e()}),[],!1,null,null,null);t.default=m.exports}}]);