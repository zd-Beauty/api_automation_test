webpackJsonp([17],{43:function(e,t,n){"use strict";function r(e){n(899)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(485),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);var u=n(901),s=n(1),c=r,f=s(i.a,u.a,!1,c,"data-v-13ac3426",null);t.default=f.exports},45:function(e,t,n){"use strict";function r(e){return"[object Array]"===_.call(e)}function o(e){return"[object ArrayBuffer]"===_.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function s(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===_.call(e)}function p(e){return"[object File]"===_.call(e)}function l(e){return"[object Blob]"===_.call(e)}function h(e){return"[object Function]"===_.call(e)}function m(e){return f(e)&&h(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function x(e,t,n){return w(t,function(t,r){e[r]=n&&"function"==typeof t?j(t,n):t}),e}var j=n(49),T=n(60),_=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:T,isFormData:i,isArrayBufferView:a,isString:u,isNumber:s,isObject:f,isUndefined:c,isDate:d,isFile:p,isBlob:l,isFunction:h,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:v,forEach:w,merge:b,extend:x,trim:y}},47:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(45),i=n(63),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(50):void 0!==t&&(e=n(50)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){u.headers[e]={}}),o.forEach(["post","put","patch"],function(e){u.headers[e]=o.merge(a)}),e.exports=u}).call(t,n(62))},485:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(88),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=n(57);t.default={name:"Register",methods:{DingDingLogin:function(){var e=this,t={code:this.$route.query.code};(0,i.dingLogin)(t).then(function(t){var n=e,r=t.msg,i=t.code,a=t.data;"999999"===i?(sessionStorage.setItem("username",(0,o.default)(a.first_name)),sessionStorage.setItem("token",(0,o.default)(a.key)),n.$route.query.url?n.$router.push(n.$route.query.url):n.$router.push("/projectList")):(n.$router.push("/login"),n.$message.error({message:r,center:!0}))})}},mounted:function(){this.DingDingLogin()}}},49:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},50:function(e,t,n){"use strict";var r=n(45),o=n(64),i=n(66),a=n(67),u=n(68),s=n(51),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(69);e.exports=function(e){return new Promise(function(t,f){var d=e.data,p=e.headers;r.isFormData(d)&&delete p["Content-Type"];var l=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||u(e.url)||(l=new window.XDomainRequest,h="onload",m=!0,l.onprogress=function(){},l.ontimeout=function(){}),e.auth){var g=e.auth.username||"",y=e.auth.password||"";p.Authorization="Basic "+c(g+":"+y)}if(l.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l[h]=function(){if(l&&(4===l.readyState||m)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:r,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:n,config:e,request:l};o(t,f,i),l=null}},l.onerror=function(){f(s("Network Error",e,null,l)),l=null},l.ontimeout=function(){f(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var v=n(70),w=(e.withCredentials||u(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;w&&(p[e.xsrfHeaderName]=w)}if("setRequestHeader"in l&&r.forEach(p,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete p[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===d&&(d=null),l.send(d)})}},51:function(e,t,n){"use strict";var r=n(65);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},52:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},53:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},55:function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delApiGroup=t.updateApiGroup=t.addApiGroup=t.getApiGroupList=t.addApiDetail=t.getTestTenResult=t.getTestTenTime=t.getTestResultList=t.addEmailConfig=t.delEmailConfig=t.getEmailConfigDetail=t.getProjectMemberList=t.getProjectDynamicList=t.addHost=t.updateHost=t.enableHost=t.disableHost=t.delHost=t.getHost=t.getProjectDetail=t.addProject=t.updateProject=t.enableProject=t.disableProject=t.delProject=t.getProject=t.recordVisitor=t.requestLogin=t.dingLogin=t.dingConfig=t.abc=t.test=void 0;var r=n(58),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=t.test="http://120.79.232.23:8000";t.abc=function(e){return o.default.get(e).then(function(e){return e.data})},t.dingConfig=function(e){return o.default.get(i+"/api/user/dingConfig",e).then(function(e){return e.data})},t.dingLogin=function(e){return o.default.post(i+"/api/user/dingConfig",e).then(function(e){return e.data})},t.requestLogin=function(e){return o.default.post(i+"/api/user/login",e).then(function(e){return e.data})},t.recordVisitor=function(e){return o.default.post(i+"/api/user/VisitorRecord",e).then(function(e){return e.data})},t.getProject=function(e,t){return o.default.get(i+"/api/project/project_list",{params:t,headers:e}).then(function(e){return e.data})},t.delProject=function(e,t){return o.default.post(i+"/api/project/del_project",t,{headers:e}).then(function(e){return e.data})},t.disableProject=function(e,t){return o.default.post(i+"/api/project/disable_project",t,{headers:e}).then(function(e){return e.data})},t.enableProject=function(e,t){return o.default.post(i+"/api/project/enable_project",t,{headers:e}).then(function(e){return e.data})},t.updateProject=function(e,t){return o.default.post(i+"/api/project/update_project",t,{headers:e}).then(function(e){return e.data})},t.addProject=function(e,t){return o.default.post(i+"/api/project/add_project",t,{headers:e}).then(function(e){return e.data})},t.getProjectDetail=function(e,t){return o.default.get(i+"/api/title/project_info",{params:t,headers:e}).then(function(e){return e.data})},t.getHost=function(e,t){return o.default.get(i+"/api/global/host_total",{params:t,headers:e}).then(function(e){return e.data})},t.delHost=function(e,t){return o.default.post(i+"/api/global/del_host",t,{headers:e}).then(function(e){return e.data})},t.disableHost=function(e,t){return o.default.post(i+"/api/global/disable_host",t,{headers:e}).then(function(e){return e.data})},t.enableHost=function(e,t){return o.default.post(i+"/api/global/enable_host",t,{headers:e}).then(function(e){return e.data})},t.updateHost=function(e,t){return o.default.post(i+"/api/global/update_host",t,{headers:e}).then(function(e){return e.data})},t.addHost=function(e,t){return o.default.post(i+"/api/global/add_host",t,{headers:e}).then(function(e){return e.data})},t.getProjectDynamicList=function(e,t){return o.default.get(i+"/api/dynamic/dynamic",{params:t,headers:e}).then(function(e){return e.data})},t.getProjectMemberList=function(e,t){return o.default.get(i+"/api/member/project_member",{params:t,headers:e}).then(function(e){return e.data})},t.getEmailConfigDetail=function(e,t){return o.default.get(i+"/api/member/get_email",{params:t,headers:e}).then(function(e){return e.data})},t.delEmailConfig=function(e,t){return o.default.post(i+"/api/member/del_email",t,{headers:e}).then(function(e){return e.data})},t.addEmailConfig=function(e,t){return o.default.post(i+"/api/member/email_config",t,{headers:e}).then(function(e){return e.data})},t.getTestResultList=function(e,t){return o.default.get(i+"/api/report/auto_test_report",{params:t,headers:e}).then(function(e){return e.data})},t.getTestTenTime=function(e,t){return o.default.get(i+"/api/report/test_time",{params:t,headers:e}).then(function(e){return e.data})},t.getTestTenResult=function(e,t){return o.default.get(i+"/api/report/lately_ten",{params:t,headers:e}).then(function(e){return e.data})},t.addApiDetail=function(e,t){return o.default.post(i+"/api/api/add_api",t,{headers:e}).then(function(e){return e.data})},t.getApiGroupList=function(e,t){return o.default.get(i+"/api/api/group",{params:t,headers:e}).then(function(e){return e.data})},t.addApiGroup=function(e,t){return o.default.post(i+"/api/api/add_group",t,{headers:e}).then(function(e){return e.data})},t.updateApiGroup=function(e,t){return o.default.post(i+"/api/api/update_name_group",t,{headers:e}).then(function(e){return e.data})},t.delApiGroup=function(e,t){return o.default.post(i+"/api/api/del_group",t,{headers:e}).then(function(e){return e.data})}},58:function(e,t,n){e.exports=n(59)},59:function(e,t,n){"use strict";function r(e){var t=new a(e),n=i(a.prototype.request,t);return o.extend(n,a.prototype,t),o.extend(n,t),n}var o=n(45),i=n(49),a=n(61),u=n(47),s=r(u);s.Axios=a,s.create=function(e){return r(o.merge(u,e))},s.Cancel=n(53),s.CancelToken=n(76),s.isCancel=n(52),s.all=function(e){return Promise.all(e)},s.spread=n(77),e.exports=s,e.exports.default=s},60:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},61:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new a,response:new a}}var o=n(47),i=n(45),a=n(71),u=n(72);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},62:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){m&&l&&(m=!1,l.length?h=l.concat(h):g=-1,h.length&&u())}function u(){if(!m){var e=o(a);m=!0;for(var t=h.length;t;){for(l=h,h=[];++g<t;)l&&l[g].run();g=-1,t=h.length}l=null,m=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var f,d,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var l,h=[],m=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||m||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},63:function(e,t,n){"use strict";var r=n(45);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},64:function(e,t,n){"use strict";var r=n(51);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},65:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},66:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(45);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},67:function(e,t,n){"use strict";var r=n(45),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},68:function(e,t,n){"use strict";var r=n(45);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},69:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),a="",u=0,s=i;o.charAt(0|u)||(s="=",u%1);a+=s.charAt(63&t>>8-u%1*8)){if((n=o.charCodeAt(u+=.75))>255)throw new r;t=t<<8|n}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},70:function(e,t,n){"use strict";var r=n(45);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,a){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===a&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},71:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(45);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},72:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(45),i=n(73),a=n(52),u=n(47),s=n(74),c=n(75);e.exports=function(e){return r(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||u.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},73:function(e,t,n){"use strict";var r=n(45);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},74:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},75:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},76:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(53);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},77:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},88:function(e,t,n){e.exports={default:n(89),__esModule:!0}},89:function(e,t,n){var r=n(55),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},899:function(e,t,n){var r=n(900);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(14)("f4924324",r,!0,{})},900:function(e,t,n){t=e.exports=n(13)(!1),t.push([e.i,"",""])},901:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],i={render:r,staticRenderFns:o};t.a=i}});