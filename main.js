(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>S});var o=t(81),r=t.n(o),a=t(645),c=t.n(a),i=t(667),s=t.n(i),d=new URL(t(987),t.b),l=new URL(t(243),t.b),u=new URL(t(345),t.b),p=new URL(t(532),t.b),f=new URL(t(359),t.b),m=new URL(t(342),t.b),b=new URL(t(554),t.b),g=c()(r()),h=s()(d),y=s()(l),v=s()(u),x=s()(p),w=s()(f),k=s()(m),E=s()(b);g.push([e.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nh1 {\n  font-size: 400%;\n}\n\n#app {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#grid {\n  display: grid;\n  grid-template-columns: 1fr 450px;\n  grid-template-rows: 1fr 300px;\n  height: 90%;\n  width: 90%;\n  border: 10px solid rgba(192, 192, 192, 0.2);\n  border-radius: 1%;\n}\n\n#topleft {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  color: white;\n  padding: 25px;\n}\n#topleft p {\n  font-size: 125%;\n}\n\n#right {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  align-items: center;\n  padding: 10px;\n  gap: 15px;\n}\n#right input {\n  opacity: .7;\n}\n.location {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n#forecast {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.forecast-card {\n  width: 100%;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.icon-box {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10%;\n}\n\n.date-condition-box {\n  display: flex;\n  flex-direction: column;\n}\n\n#bottom {\n  display: flex;\n}\n\n#hourlyWeather {\n  display: flex;\n  gap: 25px;\n}\n.hourlyBox {\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 15px;\n  align-items: center;\n  flex-grow: 1;\n  height: 100px;\n  justify-content: center;\n}\n\n.partlycloudyday {\n  background-image: url(${h});\n}\n.partlycloudynight {\n  background-image: url(${y});\n}\n.overcastDay {\n  background-image: url(${v});\n}\n.day1000 {\n  background-image: url(${x});\n}\n.night1000 {\n  background-image: url(${w});\n}\n.mistDay {\n  background-image: url(${k});\n}\n.mistNight {\n  background-image: url(${E});\n}\n`,""]);const S=g},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},532:(e,n,t)=>{e.exports=t.p+"5d81df30fb1a63da310e.jpg"},359:(e,n,t)=>{e.exports=t.p+"b0a18dbbf23553438bcb.jpg"},342:(e,n,t)=>{e.exports=t.p+"fbb444599457ac1152f3.jpg"},554:(e,n,t)=>{e.exports=t.p+"1cc38e3f25b04bcdd003.jpg"},345:(e,n,t)=>{e.exports=t.p+"1c8fb283c9fe7ad8025c.jpg"},243:(e,n,t)=>{e.exports=t.p+"245b5d3127b0a5b61c13.jpg"},987:(e,n,t)=>{e.exports=t.p+"eac5e80e657c6d634224.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"7c987dc0dbb259ecec3f.svg",n=t.p+"84576af1008f83024db2.svg",o=t.p+"fcbf51d8f6019fa5f661.svg",r=t.p+"67964b16666a06584a4a.svg",a=t.p+"9a01f79cb9ceaea4076b.svg",c=t.p+"cbca26685950520d08ed.svg",i="°";function s(t){function s(t){const s=t.day.condition.code,d=t.date,l=t.day.condition.text,u=Math.round(t.day.mintemp_f)+i,p=Math.round(t.day.maxtemp_f)+i,f=document.createElement("div");f.classList.add("forecast-card");const m=document.createElement("div");m.style.display="flex",m.style.alignItems="center",m.style.gap="10px";const b=document.createElement("div");b.classList.add("icon-box");const g=document.createElement("img");let h;switch(s){case 1e3:h=a;break;case 1003:h=e;break;case 1006:h=n;break;case 1009:h=o;break;case 1189:h=c;break;case 1030:h=r}g.src=h,b.append(g),m.append(b);const y=document.createElement("div");y.classList.add("date-condition-box");const v=document.createElement("p");v.textContent=d;const x=document.createElement("p");x.textContent=l,y.append(v,x),m.append(y),f.append(m);const w=document.createElement("div");w.classList.add("date-condition-box");const k=document.createElement("p");k.textContent=u;const E=document.createElement("p");return E.textContent=p,w.append(k,E),f.append(w),f}const d=document.querySelector("#forecast");for(let e=0;e<t.length;e++){const n=s(t[e]);d.append(n)}}function d(e){console.log(e);const n=document.querySelector("#app"),t=e.current.is_day;switch(e.current.condition.code){case 1e3:n.className=t?"day1000":"night1000";break;case 1003:case 1006:n.className=t?"partlycloudyday":"partlycloudynight";break;case 1009:n.className=t?"overcastDay":"partlycloudynight";break;case 1030:n.className=t?"mistDay":"mistNight"}}function l(e){const n=document.querySelector("#topleft p"),t=document.querySelector("#topleft h1"),o=new Date;n.textContent=o.toDateString()+" | "+o.getHours()+":"+o.getMinutes(),t.textContent=e.current.condition.text}function u(t){const c=document.querySelector("#hourlyWeather");for(let s=9;s<=18;s++){const d=t[s],l=d.time.split(" ")[1],u=document.createElement("p");u.textContent=l;const p=d.condition.code,f=Math.round(d.temp_f)+i;let m;switch(p){case 1e3:m=a;break;case 1003:m=e;break;case 1006:m=n;break;case 1009:m=o;break;case 1030:m=r}const b=document.createElement("div");b.classList.add("hourlyBox"),b.appendChild(u);const g=document.createElement("img");g.src=m;const h=document.createElement("p");h.textContent=f,b.appendChild(g),b.appendChild(h),c.appendChild(b)}}function p(){document.querySelector("#topleft p").textContent="",document.querySelector("#topleft h1").textContent="",document.querySelector("#forecast").innerHTML="",document.querySelector("#hourlyWeather").innerHTML=""}function f(e){const n=e.temp_f;document.querySelector("#right h1").textContent=n+i+"C"}var m=t(379),b=t.n(m),g=t(795),h=t.n(g),y=t(569),v=t.n(y),x=t(565),w=t.n(x),k=t(216),E=t.n(k),S=t(589),q=t.n(S),C=t(424),j={};async function L(e){const n=`http://api.weatherapi.com/v1/forecast.json?key=9c2ad25236a44696842231440232806&q=${e}&days=5`,t=await fetch(n,{mode:"cors",options:"GET"});if(t.ok)return await t.json();throw console.error("")}j.styleTagTransform=q(),j.setAttributes=w(),j.insert=v().bind(null,"head"),j.domAPI=h(),j.insertStyleElement=E(),b()(C.Z,j),C.Z&&C.Z.locals&&C.Z.locals,L("millbrae").then((e=>{console.log(e),document.querySelector("#location").value=e.location.name+", "+e.location.region,p(),d(e),l(e),f(e.current),s(e.forecast.forecastday),u(e.forecast.forecastday[0].hour)})),document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault(),L(document.getElementById("location").value).then((e=>{document.querySelector("#location").value=e.location.name+", "+e.location.region,p(),d(e),l(e),f(e.current),s(e.forecast.forecastday),u(e.forecast.forecastday[0].hour)}))}))})()})();