(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"7Wez":function(e,a,t){"use strict";t.r(a);var r=t("vDqi"),s=t.n(r),i=t("XuX8"),c=t.n(i),l=t("PI6J"),n=t("eJge"),p=t.n(n),m=t("Lq01"),D=t.n(m),o=t("wy2R");c.a.use(D.a,{moment:o});c.a.use(p.a,{name:"_blank",specs:["fullscreen=yes","titlebar=no","scrollbars=no"],styles:["/css/bootstrap.min.css","/js/bootstrap.min.js","/js/jquery.min.js","/css/voucher.css"]});var u={data:function(){return{loans:[]}},methods:{mymoney:function(e){return l.a.money(parseFloat(e))},isNull:function(e){return null===e?"----":e},getLoans:function(){var e=this;s.a.get("/api/getNotifications").then((function(a){var t=a.data;e.loans=t.sort((function(e,a){return e.description>a.description?1:-1}))})).catch((function(e){console.log(e)}))},getDateNow:function(){return o().locale("es").format("LL")},convertDate:function(e){return o(e).locale("es").format("LL")},print:function(){this.$htmlToPaper("printMe")},parseDecimalFixed:function(e){return parseFloat(e).toFixed(2)},parseDecimal:function(e){return parseFloat(this.parseDecimalFixed(e))},getPayment:function(e,a,t,r,s,i,c,l,n,p,m,D){var o=this,u=0,d=0;if(a.length>0){if("IGUAL"!==l&&n<=2&&1==D){var f=0;f="MENOR"===l?s+n:s-n,u=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*f)),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i)),l="IGUAL"}else if("IGUAL"!==l&&n<=2&&0==D)u=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i)),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i)),l="IGUAL";else if("IGUAL"===l&&1==D)u=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*s)),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i));else if("IGUAL"===l&&0==D)u=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i)),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i));else if("MENOR"===l)u=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*s)),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i));else if("MAYOR"===l){var v=0;parseInt(e.amount)>=parseInt(0)&&parseInt(e.amount)<=parseInt(5e3)?v=o.parseDecimal(o.parseDecimal(10)*o.parseDecimal(n)):parseInt(e.amount)>parseInt(5e3)&&parseInt(e.amount)<=parseInt(1e4)?v=o.parseDecimal(o.parseDecimal(15)*o.parseDecimal(n)):parseInt(e.amount)>parseInt(1e4)&&(v=o.parseDecimal(o.parseDecimal(20)*o.parseDecimal(n))),u=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i)+v),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i))}}else if(e.monthlyAmount,"IGUAL"!==l&&n<=2&&1==D){var _=0;_="MENOR"===l?s+n:s-n,u=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*_)),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i)),l="IGUAL"}else if("IGUAL"!==l&&n<=2&&0==D)u=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i)),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i)),l="IGUAL";else if("IGUAL"===l&&1==D)u=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*s)),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i));else if("IGUAL"===l&&0==D)o.interestday=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i)),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i));else if("MENOR"===l)u=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*s)),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i));else if("MAYOR"===l){var h=0;parseInt(e.amount)>=parseInt(0)&&parseInt(e.amount)<=parseInt(5e3)?h=o.parseDecimal(o.parseDecimal(10)*o.parseDecimal(n)):parseInt(e.amount)>parseInt(5e3)&&parseInt(e.amount)<=parseInt(1e4)?h=o.parseDecimal(o.parseDecimal(15)*o.parseDecimal(n)):parseInt(e.amount)>parseInt(1e4)&&(h=o.parseDecimal(o.parseDecimal(20)*o.parseDecimal(n))),u=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i)+h),d=Math.ceil(o.parseDecimal(o.parseDecimal(o.parseDecimal(o.parseDecimal(e.balance)*o.parseDecimal(o.parseDecimal(e.percentage)/100))/i)*i))}return{interest:d,interestday:u}}},mounted:function(){this.getLoans()}},d=t("KHd+"),f=Object(d.a)(u,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("vx-card",{attrs:{title:"CRÉDITOS PENDIENTES"}},[t("div",{attrs:{id:"printMe"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"row p-2 table-active"},[t("div",{staticClass:"col-md-6 text-right"},[t("p",{staticClass:"font-weight-bold mb-1"},[e._v("\n                                        CRÉDITOS PENDIENTES\n                                    ")]),e._v(" "),t("p",{staticClass:"text-muted"},[e._v("\n                                        "+e._s(e.getDateNow())+"\n                                    ")])])]),e._v(" "),e._l(e.loans,(function(a){return t("div",{key:a.id},[t("div",{staticClass:"row"},[t("p",{staticClass:"font-weight-bold col-md-6 text-left"},[e._v("\n                                        CRÉDITO NO."+e._s(a.loan)+" -\n                                        "+e._s(a.description)+"\n                                    ")]),e._v(" "),t("p",{staticClass:"col-md-3 text-left"},[e._v("\n                                        Balance:\n                                        "+e._s(e.mymoney(a.normal_credit.LOAN.balance))+"\n                                    ")])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-3 text-left"},[t("p",[e._v("\n                                            Cliente: "+e._s(a.client.name)+"\n                                        ")])]),e._v(" "),t("div",{staticClass:"col-md-3 text-left"},[t("p",[e._v("DPI: "+e._s(a.client.dpi))])]),e._v(" "),t("div",{staticClass:"col-md-3 text-left"},[t("p",[e._v("\n                                            Departamento:\n                                            "+e._s(a.client.nameDepartament)+"\n                                        ")])]),e._v(" "),t("div",{staticClass:"col-md-3 text-left"},[t("p",[e._v("\n                                            Municipio:\n                                            "+e._s(a.client.nameTown)+"\n                                        ")])])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-3 text-left"},[t("p",[e._v("\n                                            Dirección:\n                                            "+e._s(a.client.address)+"\n                                        ")])]),e._v(" "),t("div",{staticClass:"col-md-3 text-left"},[t("p",[e._v("\n                                            Colonia:\n                                            "+e._s(e.isNull(a.client.suburb))+"\n                                        ")])]),e._v(" "),t("div",{staticClass:"col-md-3 text-left"},[t("p",[e._v("\n                                            Zona:\n                                            "+e._s(e.isNull(a.client.zone))+"\n                                        ")])]),e._v(" "),t("div",{staticClass:"col-md-3 text-left"},[t("p",[e._v("\n                                            Teléfono:\n                                            "+e._s(e.isNull(a.client.mobile))+"/"+e._s(e.isNull(a.client.telephone))+"\n                                        ")])])]),e._v(" "),t("div",{staticClass:"row"},[t("p",{staticClass:"font-weight-bold col-md-3 text-left"},[e._v("\n                                        Interés normal\n                                    ")]),e._v(" "),t("p",{staticClass:"col-md-3 text-left"},[e._v("\n                                        Fecha:\n                                        "+e._s(e.convertDate(a.paymentDate))+"\n                                    ")]),e._v(" "),t("p",{staticClass:"col-md-3 text-left"},[e._v("\n                                        Interés:\n                                        "+e._s(e.mymoney(e.getPayment(a.normal_credit.LOAN,a.normal_credit.LOANS,a.normal_credit.DAYINIT,a.normal_credit.DAYEND,a.normal_credit.DAYS,a.normal_credit.DAYSMONTH,a.normal_credit.DAYSONE,a.normal_credit.DAYSTATUS,a.normal_credit.DAYSDIFF,a.normal_credit.CAPITAL,a.normal_credit.DATEBEGIN,a.normal_credit.SAMEMONTH).interest))+"\n                                    ")])]),e._v(" "),t("div",{staticClass:"row"},[t("p",{staticClass:"font-weight-bold col-md-3 text-left"},[e._v("\n                                        Interés hasta hoy\n                                    ")]),e._v(" "),t("p",{staticClass:"col-md-3 text-left"},[e._v("\n                                        Fecha:\n                                        "+e._s(e.convertDate(a.paymentNow))+"\n                                    ")]),e._v(" "),t("p",{staticClass:"col-md-3 text-left"},[e._v("\n                                        Interés:\n                                        "+e._s(e.mymoney(e.getPayment(a.current_credit.LOAN,a.current_credit.LOANS,a.current_credit.DAYINIT,a.current_credit.DAYEND,a.current_credit.DAYS,a.current_credit.DAYSMONTH,a.current_credit.DAYSONE,a.current_credit.DAYSTATUS,a.current_credit.DAYSDIFF,a.current_credit.CAPITAL,a.current_credit.DATEBEGIN,a.current_credit.SAMEMONTH).interestday))+"\n                                    ")])]),e._v(" "),t("hr")])}))],2)])])])]),e._v(" "),t("vs-button",{staticClass:"btnx",attrs:{type:"filled"},on:{click:e.print}},[e._v("Imprimir")])],1)],1)}),[],!1,null,null,null);a.default=f.exports},PI6J:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var r={cuiIsValid:function(e){window.console;if(!e)return!0;if(!/^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/.test(e))return!1;e=e.replace(/\s/,"");var a=parseInt(e.substring(9,11),10),t=parseInt(e.substring(11,13)),r=e.substring(0,8),s=parseInt(e.substring(8,9)),i=[17,8,16,16,13,14,19,8,24,21,9,30,32,21,8,17,14,5,11,11,7,17];if(0===a||0===t)return!1;if(a>i.length)return!1;if(t>i[a-1])return!1;for(var c=0,l=0;l<r.length;l++)c+=r[l]*(l+2);return c%11===s},nitIsValid:function(e){var a=e.toString();if(!a)return!0;if(!new RegExp("^[0-9]+(-?[0-9kK])?$").test(a))return!1;for(var t=(a=a.replace(/-/,"")).length-1,r=a.substring(0,t),s=a.substring(t,t+1).toLowerCase(),i=r.length+1,c=0,l=0;l<r.length;l++){var n=r.substring(l,l+1);c+=parseInt(n,10)*i,i-=1}var p=(11-c%11)%11;return s===(10==p?"k":p.toString())},money:function(e){return"Q "+e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},percentage:function(e){return e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")+" %"},quantity:function(e){return e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")},parseDecimal:function(e){return parseFloat(parseFloat(e).toFixed(2))},calculateCreditAmount:function(e,a,t){var r=this.parseDecimal(this.parseDecimal(e)/this.parseDecimal(t)),s=this.parseDecimal(this.parseDecimal(e)*(this.parseDecimal(a)/100));return this.parseDecimal(r+s)}}},eJge:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});const r={install(e,a={}){e.prototype.$htmlToPaper=(e,t,r=(()=>!0))=>{let s="_blank",i=["fullscreen=yes","titlebar=yes","scrollbars=yes"],c=!0,l=[],{name:n=s,specs:p=i,replace:m=c,styles:D=l}=a;t&&(t.name&&(n=t.name),t.specs&&(p=t.specs),t.replace&&(m=t.replace),t.styles&&(D=t.styles)),p=p.length?p.join(","):"";const o=window.document.getElementById(e);if(!o)return void alert(`Element to print #${e} not found!`);const u=function(e,a,t){let r=null;return r=window.open(e,a,t),r.opener||(r.opener=self),r.focus(),r}("",n,p);return u.document.write(`\n        <html>\n          <head>\n            <title>${window.document.title}</title>\n          </head>\n          <body>\n            ${o.innerHTML}\n          </body>\n        </html>\n      `),function(e,a){a.forEach(a=>{let t=e.document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",a),e.document.getElementsByTagName("head")[0].appendChild(t)})}(u,D),setTimeout(()=>{u.document.close(),u.focus(),u.print(),setTimeout((function(){window.close()}),1),r()},1e3),!0}}};a.default=r}}]);