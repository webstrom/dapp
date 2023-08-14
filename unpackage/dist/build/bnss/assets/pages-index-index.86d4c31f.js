import{s as e,g as t,a as n,b as r,h as o,n as s,c as a,d as i,o as l,e as c,w as u,i as d,f,j as p,k as h,t as m,l as g,m as b,p as w,v as y,r as v,q as x,u as C}from"./index-ec5cfb06.js";import{w as T}from"./wyb-noticeBar.8f1326a0.js";import{r as k}from"./uni-app.es.e9a932bd.js";import{_}from"./uni-popup.4ffa7133.js";import{u as N}from"./uqrcode.5e915e83.js";import{S as A,a as S,b as j,c as E,d as B,e as O,f as R,g as U}from"./server.c89461b6.js";import{_ as P}from"./_plugin-vue_export-helper.1b428a4d.js";var q={},L={get exports(){return q},set exports(e){q=e}},D={},H={get exports(){return D},set exports(e){D=e}},W=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},I=W,F=Object.prototype.toString;function J(e){return Array.isArray(e)}function M(e){return void 0===e}function z(e){return"[object ArrayBuffer]"===F.call(e)}function G(e){return null!==e&&"object"==typeof e}function V(e){if("[object Object]"!==F.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function $(e){return"[object Function]"===F.call(e)}function X(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),J(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var K={isArray:J,isArrayBuffer:z,isBuffer:function(e){return null!==e&&!M(e)&&null!==e.constructor&&!M(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===F.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&z(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:G,isPlainObject:V,isUndefined:M,isDate:function(e){return"[object Date]"===F.call(e)},isFile:function(e){return"[object File]"===F.call(e)},isBlob:function(e){return"[object Blob]"===F.call(e)},isFunction:$,isStream:function(e){return G(e)&&$(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===F.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:X,merge:function e(){var t={};function n(n,r){V(t[r])&&V(n)?t[r]=e(t[r],n):V(n)?t[r]=e({},n):J(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)X(arguments[r],n);return t},extend:function(e,t,n){return X(t,(function(t,r){e[r]=n&&"function"==typeof t?I(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},Q=K;function Y(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Z=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(Q.isURLSearchParams(t))r=t.toString();else{var o=[];Q.forEach(t,(function(e,t){null!=e&&(Q.isArray(e)?t+="[]":e=[e],Q.forEach(e,(function(e){Q.isDate(e)?e=e.toISOString():Q.isObject(e)&&(e=JSON.stringify(e)),o.push(Y(t)+"="+Y(e))})))})),r=o.join("&")}if(r){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},ee=K;function te(){this.handlers=[]}te.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},te.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},te.prototype.forEach=function(e){ee.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var ne,re,oe,se,ae,ie,le,ce,ue,de,fe,pe,he,me,ge,be,we,ye,ve,xe,Ce=te,Te=K,ke=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},_e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};function Ne(){if(re)return ne;re=1;var e=ke;return ne=function(t,n,r,o,s){var a=new Error(t);return e(a,n,r,o,s)}}function Ae(){if(pe)return fe;pe=1;var e=ce?le:(ce=1,le=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}),t=de?ue:(de=1,ue=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e});return fe=function(n,r){return n&&!e(r)?t(n,r):r}}function Se(){if(ye)return we;function e(e){this.message=e}return ye=1,e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,we=e}function je(){if(xe)return ve;xe=1;var e=K,t=function(){if(se)return oe;se=1;var e=Ne();return oe=function(t,n,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?n(e("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}}(),n=function(){if(ie)return ae;ie=1;var e=K;return ae=e.isStandardBrowserEnv()?{write:function(t,n,r,o,s,a){var i=[];i.push(t+"="+encodeURIComponent(n)),e.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),e.isString(o)&&i.push("path="+o),e.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}(),r=Z,o=Ae(),s=function(){if(me)return he;me=1;var e=K,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return he=function(n){var r,o,s,a={};return n?(e.forEach(n.split("\n"),(function(n){if(s=n.indexOf(":"),r=e.trim(n.substr(0,s)).toLowerCase(),o=e.trim(n.substr(s+1)),r){if(a[r]&&t.indexOf(r)>=0)return;a[r]="set-cookie"===r?(a[r]?a[r]:[]).concat([o]):a[r]?a[r]+", "+o:o}})),a):a}}(),a=function(){if(be)return ge;be=1;var e=K;return ge=e.isStandardBrowserEnv()?function(){var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var t=e;return n&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(n){var r=e.isString(n)?o(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}}(),i=Ne(),l=_e,c=Se();return ve=function(u){return new Promise((function(d,f){var p,h=u.data,m=u.headers,g=u.responseType;function b(){u.cancelToken&&u.cancelToken.unsubscribe(p),u.signal&&u.signal.removeEventListener("abort",p)}e.isFormData(h)&&delete m["Content-Type"];var w=new XMLHttpRequest;if(u.auth){var y=u.auth.username||"",v=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";m.Authorization="Basic "+btoa(y+":"+v)}var x=o(u.baseURL,u.url);function C(){if(w){var e="getAllResponseHeaders"in w?s(w.getAllResponseHeaders()):null,n={data:g&&"text"!==g&&"json"!==g?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:e,config:u,request:w};t((function(e){d(e),b()}),(function(e){f(e),b()}),n),w=null}}if(w.open(u.method.toUpperCase(),r(x,u.params,u.paramsSerializer),!0),w.timeout=u.timeout,"onloadend"in w?w.onloadend=C:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(C)},w.onabort=function(){w&&(f(i("Request aborted",u,"ECONNABORTED",w)),w=null)},w.onerror=function(){f(i("Network Error",u,null,w)),w=null},w.ontimeout=function(){var e=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",t=u.transitional||l;u.timeoutErrorMessage&&(e=u.timeoutErrorMessage),f(i(e,u,t.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",w)),w=null},e.isStandardBrowserEnv()){var T=(u.withCredentials||a(x))&&u.xsrfCookieName?n.read(u.xsrfCookieName):void 0;T&&(m[u.xsrfHeaderName]=T)}"setRequestHeader"in w&&e.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:w.setRequestHeader(t,e)})),e.isUndefined(u.withCredentials)||(w.withCredentials=!!u.withCredentials),g&&"json"!==g&&(w.responseType=u.responseType),"function"==typeof u.onDownloadProgress&&w.addEventListener("progress",u.onDownloadProgress),"function"==typeof u.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(p=function(e){w&&(f(!e||e&&e.type?new c("canceled"):e),w.abort(),w=null)},u.cancelToken&&u.cancelToken.subscribe(p),u.signal&&(u.signal.aborted?p():u.signal.addEventListener("abort",p))),h||(h=null),w.send(h)}))}}var Ee=K,Be=function(e,t){Te.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},Oe=ke,Re={"Content-Type":"application/x-www-form-urlencoded"};function Ue(e,t){!Ee.isUndefined(e)&&Ee.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Pe,qe={transitional:_e,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Pe=je()),Pe),transformRequest:[function(e,t){return Be(t,"Accept"),Be(t,"Content-Type"),Ee.isFormData(e)||Ee.isArrayBuffer(e)||Ee.isBuffer(e)||Ee.isStream(e)||Ee.isFile(e)||Ee.isBlob(e)?e:Ee.isArrayBufferView(e)?e.buffer:Ee.isURLSearchParams(e)?(Ue(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Ee.isObject(e)||t&&"application/json"===t["Content-Type"]?(Ue(t,"application/json"),function(e,t,n){if(Ee.isString(e))try{return(t||JSON.parse)(e),Ee.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||qe.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&Ee.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(o){if("SyntaxError"===s.name)throw Oe(s,this,"E_JSON_PARSE");throw s}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Ee.forEach(["delete","get","head"],(function(e){qe.headers[e]={}})),Ee.forEach(["post","put","patch"],(function(e){qe.headers[e]=Ee.merge(Re)}));var Le,De,He=qe,We=K,Ie=He;function Fe(){return De?Le:(De=1,Le=function(e){return!(!e||!e.__CANCEL__)})}var Je=K,Me=function(e,t,n){var r=this||Ie;return We.forEach(n,(function(n){e=n.call(r,e,t)})),e},ze=Fe(),Ge=He,Ve=Se();function $e(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ve("canceled")}var Xe,Ke,Qe=K,Ye=function(e,t){t=t||{};var n={};function r(e,t){return Qe.isPlainObject(e)&&Qe.isPlainObject(t)?Qe.merge(e,t):Qe.isPlainObject(t)?Qe.merge({},t):Qe.isArray(t)?t.slice():t}function o(n){return Qe.isUndefined(t[n])?Qe.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function s(e){if(!Qe.isUndefined(t[e]))return r(void 0,t[e])}function a(n){return Qe.isUndefined(t[n])?Qe.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function i(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:i};return Qe.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||o,r=t(e);Qe.isUndefined(r)&&t!==i||(n[e]=r)})),n};function Ze(){return Ke?Xe:(Ke=1,Xe={version:"0.26.1"})}var et=Ze().version,tt={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){tt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var nt={};tt.transitional=function(e,t,n){function r(e,t){return"[Axios v"+et+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,s){if(!1===e)throw new Error(r(o," has been removed"+(t?" in "+t:"")));return t&&!nt[o]&&(nt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var rt,ot,st,at,it,lt,ct=K,ut=Z,dt=Ce,ft=function(e){return $e(e),e.headers=e.headers||{},e.data=Me.call(e,e.data,e.headers,e.transformRequest),e.headers=Je.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Je.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Ge.adapter)(e).then((function(t){return $e(e),t.data=Me.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return ze(t)||($e(e),t&&t.response&&(t.response.data=Me.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},pt=Ye,ht={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var s=r[o],a=t[s];if(a){var i=e[s],l=void 0===i||a(i,s,e);if(!0!==l)throw new TypeError("option "+s+" must be "+l)}else if(!0!==n)throw Error("Unknown option "+s)}},validators:tt},mt=ht.validators;function gt(e){this.defaults=e,this.interceptors={request:new dt,response:new dt}}gt.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=pt(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&ht.assertOptions(n,{silentJSONParsing:mt.transitional(mt.boolean),forcedJSONParsing:mt.transitional(mt.boolean),clarifyTimeoutError:mt.transitional(mt.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var s,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!o){var i=[ft,void 0];for(Array.prototype.unshift.apply(i,r),i=i.concat(a),s=Promise.resolve(t);i.length;)s=s.then(i.shift(),i.shift());return s}for(var l=t;r.length;){var c=r.shift(),u=r.shift();try{l=c(l)}catch(d){u(d);break}}try{s=ft(l)}catch(d){return Promise.reject(d)}for(;a.length;)s=s.then(a.shift(),a.shift());return s},gt.prototype.getUri=function(e){return e=pt(this.defaults,e),ut(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},ct.forEach(["delete","get","head","options"],(function(e){gt.prototype[e]=function(t,n){return this.request(pt(n||{},{method:e,url:t,data:(n||{}).data}))}})),ct.forEach(["post","put","patch"],(function(e){gt.prototype[e]=function(t,n,r){return this.request(pt(r||{},{method:e,url:t,data:n}))}}));var bt=K,wt=W,yt=gt,vt=Ye;var xt=function e(t){var n=new yt(t),r=wt(yt.prototype.request,n);return bt.extend(r,yt.prototype,n),bt.extend(r,n),r.create=function(n){return e(vt(t,n))},r}(He);xt.Axios=yt,xt.Cancel=Se(),xt.CancelToken=function(){if(ot)return rt;ot=1;var e=Se();function t(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},t((function(t){r.reason||(r.reason=new e(t),n(r.reason))}))}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},t.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},t.source=function(){var e;return{token:new t((function(t){e=t})),cancel:e}},rt=t}(),xt.isCancel=Fe(),xt.VERSION=Ze().version,xt.all=function(e){return Promise.all(e)},xt.spread=at?st:(at=1,st=function(e){return function(t){return e.apply(null,t)}}),xt.isAxiosError=function(){if(lt)return it;lt=1;var e=K;return it=function(t){return e.isObject(t)&&!0===t.isAxiosError}}(),H.exports=xt,D.default=xt,L.exports=D;const Ct=P({components:{wybNoticeBar:T},data:()=>({progress:0,qrShow:!1,text1:"http://192.168.3.27:8088/pages/my/Invite/index",nowTime:"",balenc:{},type:1,showBelencAdhide:!0,usdtNumber:0,usdtNum:0,tronWeb:null,walletAddress:null,username:"",orderNum:0,notice:[]}),onLoad(){if(window.okxwallet){if(window.okxwallet.tronLink.request({method:"tron_requestAccounts"}),window.okxwallet.tronLink.ready)return this.tronWeb=window.okxwallet.tronLink.tronWeb,this.walletAddress=tronWeb.defaultAddress.base58,this.logins(),!1}else{if(window.tronWeb)return this.tronWeb=window.tronWeb,this.walletAddress=this.tronWeb.defaultAddress.base58,this.logins(),!1;window.imToken.callAPI("user.showAccountSwitch",{chainType:"TRON"},((e,t)=>{e?console.log(11111):(location.reload(),this.walletAddress=t),this.walletAddress=t}))}},onShow(){},mounted(){},methods:{logins(){A({usdtAddress:this.walletAddress}).then((n=>{n.data.flag?S({usdtAddress:this.walletAddress}).then((()=>{this.logins()})):(e("useer_date",n.data),setTimeout((()=>{this.selectBalance(this.type),this.GetBalanceHoled();const e=t("useer_date");this.username=e.username,e&&e.isForceUpdates&&1==e.isForceUpdates&&this.getVerification(),this.GetBalanceHoled();const n=t("orderNum");n&&Number(n)>2?(4==this.type&&(this.type,this.selectBalance(this.type)),this.orderNum=Number(n)):this.GetNumByAmount()}),1e3))}))},GetNumByAmount(){j().then((e=>{this.orderNum=e.data.orderNum}))},RefreshHolde(){this.GetBalanceHoled()},showBelenc(){this.showBelencAdhide?this.showBelencAdhide=!1:this.showBelencAdhide=!0},async selectBalance(e){this.type=e,await E({type:this.type}).then((e=>{this.usdtNumber=e.data.usdtNumber})).catch((()=>!1))},random_No(e){let t="";for(var n=0;n<e;n++)t+=Math.floor(10*Math.random());return t=(new Date).getTime()-t,t},async GetBalanceHoled(){await B().then((e=>{this.balenc=e.data})).catch((()=>!1)),await O().then((e=>{this.notice=[],this.notice.push(e.data.noticeMessage)}))},ClosePop(){this.$refs.pop.close()},ClosePopup(){this.$refs.popup.close()},SuccessHoled(){this.$refs.pop.open("center")},qrFun:function(e){this.qrShow=!0,N.make({canvasId:"qrcode",componentInstance:this,text:e,size:300,margin:0,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",errorCorrectLevel:N.errorCorrectLevel.H,success:e=>{}})},async TransformUSDT(t,s,a){const i=[{type:"address",value:t},{type:"uint256",value:this.tronWeb.toHex(Number(s)*Math.pow(10,6))}],l=await this.tronWeb.transactionBuilder.triggerSmartContract("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t","transfer(address,uint256)",{},i,this.walletAddress),c=await this.tronWeb.transactionBuilder.addUpdateData(l.transaction,a,"utf8"),u=await this.tronWeb.trx.sign(c),d=await this.tronWeb.trx.sendRawTransaction(u),{code:f,message:p}=d;if(p)return n({title:f,content:tronWeb.toUtf8(p),showCancel:!1,confirmText:"Close"}),!1;{r({title:"Trading Broadcast",mask:!0}),setTimeout((()=>{o()}),3e3);const t=setInterval((()=>{this.tronWeb.trx.getTransaction(d.txid).then((r=>{o(),clearInterval(t),"SUCCESS"==r.ret[0].contractRet?(this.GetBalanceHoled(),n({title:r.ret[0].contractRet,content:"Payment successful",showCancel:!1,confirmText:"Close"}),4==this.type&&(this.orderNum+=1,this.orderNum>2&&(this.type=1),e("orderNum",this.orderNum))):n({title:r.ret[0].contractRet,content:"Insufficient  Energy！",showCancel:!1,confirmText:"Close"})})).catch((e=>{"Transaction not found"!=e&&(clearInterval(t),o(),n({title:"Payment failed",content:"Account resource insufficient error.",showCancel:!1,confirmText:"Close"}))}))}),2e3)}},async RechargeHoled(){const e="u"+this.random_No(10);R({type:this.type,usdtAddress:this.walletAddress,orderCode:e}).then((t=>{this.TransformUSDT(t.data.address.trim(),t.data.usdtNum,e).catch((e=>{console.log(e)}))}))},withdrawNavigateToClick(e){s({url:e})},getVerification(){plus.runtime.getProperty(plus.runtime.appid,(e=>{U().then((s=>{let l=s.data.versions.split(".").join(""),c=e.version.split(".").join("");var u="";let d=t("useer_date"),f=a().platform;"ios"===f?u=2==s.data.isWgt?d.iosWgtUrl:d.iosApkUrl:"android"===f&&(u=2==s.data.isWgt?d.adWgtUrl:d.adApkUrl),l>c&&n({title:"Discovering a new version",content:"A new version has been detected, please update to the new version for use！",showCancel:!1,confirmText:"Update Now",success:()=>{r({title:"Downloading... \n"+JSON.stringify(this.progress)+"%",mask:!0});i({url:u,success:e=>{200===e.statusCode&&plus.runtime.install(e.tempFilePath,{force:!0},(()=>{r({icon:"none",title:"update success"}),setTimeout((()=>{o(),plus.runtime.restart()}),3e3)}),(e=>{n({title:"install fail.",content:"install fail. Please Try Again...",showCancel:!1,confirmText:"close"})}))},fail:e=>{n({title:"install fail.",content:"Download failed! Please Try Again...",showCancel:!1,confirmText:"close"})}}).onProgressUpdate((e=>{this.progress=e.progress}))}})}))}))}}},[["render",function(e,t,n,r,o,s){const a=k(v("wyb-noticeBar"),T),i=d,N=x,A=C,S=k(v("uni-popup"),_);return l(),c(i,{class:"p-3 home-background"},{default:u((()=>[f(i,{style:{overflow:"hidden",width:"100%"}},{default:u((()=>[f(a,{showMore:!1,text:o.notice},null,8,["text"])])),_:1}),f(i,{class:"border-radius-1 balens p-3 border-radius-2 mt-3",style:{"border-bottom-left-radius":"0","border-bottom-right-radius":"0"}},{default:u((()=>[f(i,{class:"color-3 font-lg flex justify-between"},{default:u((()=>[f(N,null,{default:u((()=>[p("Balance")])),_:1}),h("i",{class:"iconfont font-lg font-weight-bolder color-icon color-3",onClick:t[0]||(t[0]=(...e)=>s.showBelenc&&s.showBelenc(...e))},"")])),_:1}),f(i,{class:"color-3 font-lg font-weight-bold mt-3"},{default:u((()=>[f(N,null,{default:u((()=>[p("₹")])),_:1}),p(" "+m(o.showBelencAdhide?o.balenc.balance:"***")+" ",1),h("i",{class:"iconfont font-lg font-weight-bolder color-icon color-3 ml-3",onClick:t[1]||(t[1]=(...e)=>s.RefreshHolde&&s.RefreshHolde(...e))},"")])),_:1}),f(i,{class:"text-align-r mt-1"},{default:u((()=>[f(N,{class:"color-3",onClick:t[2]||(t[2]=e=>s.withdrawNavigateToClick("/pages/my/withdraw/index?type=1"))},{default:u((()=>[p("withdraw")])),_:1})])),_:1})])),_:1}),f(i,{class:"border-radius-1 balens p-3 border-radius-2 flex justify-between",style:{"border-top-left-radius":"0","border-top-right-radius":"0"}},{default:u((()=>[f(i,{class:"color-3 font-lg"},{default:u((()=>[p(" Bonus")])),_:1}),f(i,{class:"color-3 font-lg"},{default:u((()=>[f(N,{onClick:t[3]||(t[3]=e=>s.withdrawNavigateToClick("/pages/index/kickback/index"))},{default:u((()=>[f(N,null,{default:u((()=>[p("₹")])),_:1}),p(" "+m(o.showBelencAdhide?o.balenc.kickback:"***"),1)])),_:1})])),_:1})])),_:1}),f(i,{class:"background-white border-radius-1 p-3 mt-3"},{default:u((()=>[f(i,{class:"flex mt-3"},{default:u((()=>[f(i,null,{default:u((()=>[p("Please select the "),f(N,{class:"color-1"},{default:u((()=>[p("selling")])),_:1}),p(" amount")])),_:1})])),_:1}),f(i,{class:"flex justify-content mt-2"},{default:u((()=>[o.orderNum<3?(l(),c(N,{key:0,class:g(4===o.type?"font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 balens color-3 font-lg":"font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 font-lg"),onClick:t[4]||(t[4]=e=>s.selectBalance(4))},{default:u((()=>[p("5000")])),_:1},8,["class"])):b("",!0),f(N,{class:g(1===o.type?"font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 balens color-3 font-lg":"font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 font-lg"),onClick:t[5]||(t[5]=e=>s.selectBalance(1))},{default:u((()=>[p("100000")])),_:1},8,["class"]),f(N,{class:g(2===o.type?"font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 balens color-3 font-lg":"font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 font-lg"),onClick:t[6]||(t[6]=e=>s.selectBalance(2))},{default:u((()=>[p("200000")])),_:1},8,["class"])])),_:1}),f(i,{class:"flex justify-between mt-5"},{default:u((()=>[f(N,null,{default:u((()=>[p("USDT(TRC20)")])),_:1}),f(N,{class:"color-1"},{default:u((()=>[p(m(o.usdtNumber),1)])),_:1})])),_:1}),f(i,{class:"balens btn-login p-3 mt-5 border-radius-2 font-lg",onClick:s.RechargeHoled},{default:u((()=>[p("sell")])),_:1},8,["onClick"]),f(i,{class:"mt-4"},{default:u((()=>[p("Tips: "),f(N,{style:{color:"red"}},{default:u((()=>[p("Do not copy any wallet address and use at another platform. Exchange processed only on UUBB chanel will be acknowledged")])),_:1})])),_:1})])),_:1}),f(S,{ref:"popup",type:"center"},{default:u((()=>[f(i,{class:"background-white width-100 border-radius-1"},{default:u((()=>[f(i,{class:"pt-3 pb-3 p-3",style:{width:"540upx",margin:"auto"}},{default:u((()=>[f(i,{class:"text-align-center font-lg text-align-center color-1 mb-2"},{default:u((()=>[p("USDT(TRC20) "+m(o.usdtNum),1)])),_:1}),f(i,{class:"mb-3 text-align-center"},{default:u((()=>[p("Please scan the code for payment")])),_:1}),f(i,{class:"qr-box"},{default:u((()=>[w(f(A,{"canvas-id":"qrcode",style:{width:"500rpx",height:"500upx",margin:"auto"}},null,512),[[y,o.qrShow]])])),_:1}),f(i,{class:"font mt-2",style:{color:"red"}},{default:u((()=>[p("Tips:Please do not take screenshots to save this QR code for transfer, in order to avoid unnecessary financial losses for you. Our company will not bear any financial losses caused by saving this QR code for transfer")])),_:1}),f(i,{class:"balens btn-login pt-3 pb-3 mt-5 border-radius-2 font-lg",onClick:s.SuccessHoled},{default:u((()=>[p("I have paid")])),_:1},8,["onClick"]),f(i,{class:"text-align-center p-3 border-top",onClick:s.ClosePopup},{default:u((()=>[p("Close")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},512),f(S,{ref:"pop",type:"center"},{default:u((()=>[f(i,{class:"background-white width-100 border-radius-1"},{default:u((()=>[f(i,{class:"font-lg border-bottom pb-3 pt-3 text-align-center"},{default:u((()=>[p("Tips")])),_:1}),f(i,{class:"p-3 text-align-center"},{default:u((()=>[p("The system is currently undergoing review and may take a few minutes. Please be patient and wait!")])),_:1}),f(i,{class:"text-align-center p-3 border-top",onClick:s.ClosePop},{default:u((()=>[p("Close")])),_:1},8,["onClick"])])),_:1})])),_:1},512)])),_:1})}],["__scopeId","data-v-1b3456f0"]]);export{Ct as default};
