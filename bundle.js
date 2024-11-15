!function(){"use strict";var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};function e(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}var r=function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};function n(t,e,r,n){return new(r||(r=Promise))((function(o,i){function u(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(u,s)}c((n=n.apply(t,e||[])).next())}))}function o(t,e){var r,n,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},u=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return u.next=s(0),u.throw=s(1),u.return=s(2),"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;u&&(u=0,s[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}Object.create;function i(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function s(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}function c(t){return this instanceof c?(this.v=t,this):new c(t)}function a(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),i=[];return n=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",(function(t){return function(e){return Promise.resolve(e).then(t,l)}})),n[Symbol.asyncIterator]=function(){return this},n;function u(t,e){o[t]&&(n[t]=function(e){return new Promise((function(r,n){i.push([t,e,r,n])>1||s(t,e)}))},e&&(n[t]=e(n[t])))}function s(t,e){try{(r=o[t](e)).value instanceof c?Promise.resolve(r.value.v).then(a,l):f(i[0][2],r)}catch(t){f(i[0][3],t)}var r}function a(t){s("next",t)}function l(t){s("throw",t)}function f(t,e){t(e),i.shift(),i.length&&s(i[0][0],i[0][1])}}function l(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t=i(t),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise((function(n,o){(function(t,e,r,n){Promise.resolve(n).then((function(e){t({value:e,done:r})}),e)})(n,o,(e=t[r](e)).done,e.value)}))}}}Object.create;"function"==typeof SuppressedError&&SuppressedError;function f(t){return"function"==typeof t}function d(t){var e=t((function(t){Error.call(t),t.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var h=d((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function p(t,e){if(t){var r=t.indexOf(e);0<=r&&t.splice(r,1)}}var v=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return t.prototype.unsubscribe=function(){var t,e,r,n,o;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var a=i(c),l=a.next();!l.done;l=a.next()){l.value.remove(this)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}else c.remove(this);var d=this.initialTeardown;if(f(d))try{d()}catch(t){o=t instanceof h?t.errors:[t]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var v=i(p),y=v.next();!y.done;y=v.next()){var m=y.value;try{b(m)}catch(t){o=null!=o?o:[],t instanceof h?o=s(s([],u(o)),u(t.errors)):o.push(t)}}}catch(t){r={error:t}}finally{try{y&&!y.done&&(n=v.return)&&n.call(v)}finally{if(r)throw r.error}}}if(o)throw new h(o)}},t.prototype.add=function(e){var r;if(e&&e!==this)if(this.closed)b(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&p(e,t)},t.prototype.remove=function(e){var r=this._finalizers;r&&p(r,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}();v.EMPTY;function y(t){return t instanceof v||t&&"closed"in t&&f(t.remove)&&f(t.add)&&f(t.unsubscribe)}function b(t){f(t)?t():t.unsubscribe()}var m=function(t){function r(e,r){return t.call(this)||this}return e(r,t),r.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},r}(v),w={setInterval:function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=w.delegate;return(null==o?void 0:o.setInterval)?o.setInterval.apply(o,s([t,e],u(r))):setInterval.apply(void 0,s([t,e],u(r)))},clearInterval:function(t){var e=w.delegate;return((null==e?void 0:e.clearInterval)||clearInterval)(t)},delegate:void 0},g=function(t){function r(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return e(r,t),r.prototype.schedule=function(t,e){var r;if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,o=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(o,n,e)),this.pending=!0,this.delay=e,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(o,this.id,e),this},r.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),w.setInterval(t.flush.bind(t,this),r)},r.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!=r&&this.delay===r&&!1===this.pending)return e;null!=e&&w.clearInterval(e)},r.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,e){var r,n=!1;try{this.work(t)}catch(t){n=!0,r=t||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r},r.prototype.unsubscribe=function(){if(!this.closed){var e=this.id,r=this.scheduler,n=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,p(n,this),null!=e&&(this.id=this.recycleAsyncId(r,e,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},r}(m),x={now:function(){return(x.delegate||Date).now()},delegate:void 0},S=function(){function t(e,r){void 0===r&&(r=t.now),this.schedulerActionCtor=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.schedulerActionCtor(this,t).schedule(r,e)},t.now=x.now,t}(),E=new(function(t){function r(e,r){void 0===r&&(r=S.now);var n=t.call(this,e,r)||this;return n.actions=[],n._active=!1,n}return e(r,t),r.prototype.flush=function(t){var e=this.actions;if(this._active)e.push(t);else{var r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},r}(S))(g),_=E,T={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},P={setTimeout:function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=P.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,s([t,e],u(r))):setTimeout.apply(void 0,s([t,e],u(r)))},clearTimeout:function(t){var e=P.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function O(t){P.setTimeout((function(){var e=T.onUnhandledError;if(!e)throw t;e(t)}))}function j(){}var I=A("C",void 0,void 0);function A(t,e,r){return{kind:t,value:e,error:r}}var L=null;var C=function(t){function r(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,y(e)&&e.add(r)):r.destination=q,r}return e(r,t),r.create=function(t,e,r){return new U(t,e,r)},r.prototype.next=function(t){this.isStopped?N(function(t){return A("N",t,void 0)}(t),this):this._next(t)},r.prototype.error=function(t){this.isStopped?N(A("E",void 0,t),this):(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped?N(I,this):(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(v),R=Function.prototype.bind;function k(t,e){return R.call(t,e)}var D=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){H(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){H(t)}else H(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){H(t)}},t}(),U=function(t){function r(e,r,n){var o,i,u=t.call(this)||this;f(e)||!e?o={next:null!=e?e:void 0,error:null!=r?r:void 0,complete:null!=n?n:void 0}:u&&T.useDeprecatedNextContext?((i=Object.create(e)).unsubscribe=function(){return u.unsubscribe()},o={next:e.next&&k(e.next,i),error:e.error&&k(e.error,i),complete:e.complete&&k(e.complete,i)}):o=e;return u.destination=new D(o),u}return e(r,t),r}(C);function H(t){var e;T.useDeprecatedSynchronousErrorHandling?(e=t,T.useDeprecatedSynchronousErrorHandling&&L&&(L.errorThrown=!0,L.error=e)):O(t)}function N(t,e){var r=T.onStoppedNotification;r&&P.setTimeout((function(){return r(t,e)}))}var q={closed:!0,next:j,error:function(t){throw t},complete:j},z="function"==typeof Symbol&&Symbol.observable||"@@observable";function F(t){return t}function M(t){return 0===t.length?F:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var B=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n,o=this,i=(n=t)&&n instanceof C||function(t){return t&&f(t.next)&&f(t.error)&&f(t.complete)}(n)&&y(n)?t:new U(t,e,r);return function(t){if(T.useDeprecatedSynchronousErrorHandling){var e=!L;if(e&&(L={errorThrown:!1,error:null}),t(),e){var r=L,n=r.errorThrown,o=r.error;if(L=null,n)throw o}}else t()}((function(){var t=o,e=t.operator,r=t.source;i.add(e?e.call(i,r):r?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=X(e))((function(e,n){var o=new U({next:function(e){try{t(e)}catch(t){n(t),o.unsubscribe()}},error:n,complete:e});r.subscribe(o)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[z]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return M(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=X(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}();function X(t){var e;return null!==(e=null!=t?t:T.Promise)&&void 0!==e?e:Promise}function Y(t,e,r){void 0===t&&(t=0),void 0===r&&(r=_);var n,o=-1;return null!=e&&((n=e)&&f(n.schedule)?r=e:o=e),new B((function(e){var n=function(t){return t instanceof Date&&!isNaN(t)}(t)?+t-r.now():t;n<0&&(n=0);var i=0;return r.schedule((function(){e.closed||(e.next(i++),0<=o?this.schedule(void 0,o):e.complete())}),n)}))}function $(t){return function(e){if(function(t){return f(null==t?void 0:t.lift)}(e))return e.lift((function(e){try{return t(e,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}function G(t,e,r,n,o){return new J(t,e,r,n,o)}var J=function(t){function r(e,r,n,o,i,u){var s=t.call(this,e)||this;return s.onFinalize=i,s.shouldUnsubscribe=u,s._next=r?function(t){try{r(t)}catch(t){e.error(t)}}:t.prototype._next,s._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,s._complete=n?function(){try{n()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,s}return e(r,t),r.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}},r}(C);function V(t,e){return $((function(r,n){var o=0;r.subscribe(G(n,(function(r){n.next(t.call(e,r,o++))})))}))}function K(t){switch(t.responseType){case"json":if("response"in t)return t.response;var e=t;return JSON.parse(e.responseText);case"document":return t.responseXML;default:return"response"in t?t.response:(e=t).responseText}}var Q=function(t,e,r,n){void 0===n&&(n="download_load"),this.originalEvent=t,this.xhr=e,this.request=r,this.type=n;var o=e.status,i=e.responseType;this.status=null!=o?o:0,this.responseType=null!=i?i:"";var u=e.getAllResponseHeaders();this.responseHeaders=u?u.split("\n").reduce((function(t,e){var r=e.indexOf(": ");return t[e.slice(0,r)]=e.slice(r+2),t}),{}):{},this.response=K(e);var s=t.loaded,c=t.total;this.loaded=s,this.total=c},W=d((function(t){return function(t,e,r){var n;this.message=t,this.name="AjaxError",this.xhr=e,this.request=r,this.status=e.status,this.responseType=e.responseType;try{n=K(e)}catch(t){n=e.responseText}this.response=n}})),Z=function(){function t(t,e){return W.call(this,"ajax timeout",t,e),this.name="AjaxTimeoutError",this}return t.prototype=Object.create(W.prototype),t}();function tt(t,e){return ct({method:"GET",url:t,headers:e})}function et(t,e,r){return ct({method:"POST",url:t,body:e,headers:r})}function rt(t,e){return ct({method:"DELETE",url:t,headers:e})}function nt(t,e,r){return ct({method:"PUT",url:t,body:e,headers:r})}function ot(t,e,r){return ct({method:"PATCH",url:t,body:e,headers:r})}var it=V((function(t){return t.response}));function ut(t,e){return it(ct({method:"GET",url:t,headers:e}))}var st,ct=(st=function(t){var e;return e="string"==typeof t?{url:t}:t,new B((function(t){var n,o,i,u=r({async:!0,crossDomain:!1,withCredentials:!1,method:"GET",timeout:0,responseType:"json"},e),s=u.queryParams,c=u.body,a=u.headers,l=u.url;if(!l)throw new TypeError("url is required");if(s)if(l.includes("?")){var f=l.split("?");if(2<f.length)throw new TypeError("invalid url");i=new URLSearchParams(f[1]),new URLSearchParams(s).forEach((function(t,e){return i.set(e,t)})),l=f[0]+"?"+i}else l=l+"?"+(i=new URLSearchParams(s));var d={};if(a)for(var h in a)a.hasOwnProperty(h)&&(d[h.toLowerCase()]=a[h]);var p=u.crossDomain;p||"x-requested-with"in d||(d["x-requested-with"]="XMLHttpRequest");var v=u.withCredentials,y=u.xsrfCookieName,b=u.xsrfHeaderName;if((v||!p)&&y&&b){var m=null!==(o=null===(n=null===document||void 0===document?void 0:document.cookie.match(new RegExp("(^|;\\s*)("+y+")=([^;]*)")))||void 0===n?void 0:n.pop())&&void 0!==o?o:"";m&&(d[b]=m)}var w,g=function(t,e){var r;if(!t||"string"==typeof t||function(t){return"undefined"!=typeof FormData&&t instanceof FormData}(t)||function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}(t)||function(t){return vt(t,"ArrayBuffer")}(t)||function(t){return vt(t,"File")}(t)||function(t){return vt(t,"Blob")}(t)||function(t){return"undefined"!=typeof ReadableStream&&t instanceof ReadableStream}(t))return t;if(function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView(t)}(t))return t.buffer;if("object"==typeof t)return e["content-type"]=null!==(r=e["content-type"])&&void 0!==r?r:"application/json;charset=utf-8",JSON.stringify(t);throw new TypeError("Unknown body type")}(c,d),x=r(r({},u),{url:l,headers:d,body:g});w=e.createXHR?e.createXHR():new XMLHttpRequest;var S=e.progressSubscriber,E=e.includeDownloadProgress,_=void 0!==E&&E,T=e.includeUploadProgress,P=void 0!==T&&T,O=function(e,r){w.addEventListener(e,(function(){var e,n=r();null===(e=null==S?void 0:S.error)||void 0===e||e.call(S,n),t.error(n)}))};O("timeout",(function(){return new Z(w,x)})),O("abort",(function(){return new W("aborted",w,x)}));var j=function(t,e){return new Q(e,w,x,t+"_"+e.type)},I=function(e,r,n){e.addEventListener(r,(function(e){t.next(j(n,e))}))};P&&[ft,dt,ht].forEach((function(t){return I(w.upload,t,at)})),S&&[ft,dt].forEach((function(t){return w.upload.addEventListener(t,(function(t){var e;return null===(e=null==S?void 0:S.next)||void 0===e?void 0:e.call(S,t)}))})),_&&[ft,dt].forEach((function(t){return I(w,t,lt)}));var A=function(e){var r="ajax error"+(e?" "+e:"");t.error(new W(r,w,x))};w.addEventListener("error",(function(t){var e;null===(e=null==S?void 0:S.error)||void 0===e||e.call(S,t),A()})),w.addEventListener(ht,(function(e){var r,n,o=w.status;if(o<400){null===(r=null==S?void 0:S.complete)||void 0===r||r.call(S);var i=void 0;try{i=j(lt,e)}catch(e){return void t.error(e)}t.next(i),t.complete()}else null===(n=null==S?void 0:S.error)||void 0===n||n.call(S,e),A(o)}));var L=x.user,C=x.method,R=x.async;for(var h in L?w.open(C,l,R,L,x.password):w.open(C,l,R),R&&(w.timeout=x.timeout,w.responseType=x.responseType),"withCredentials"in w&&(w.withCredentials=x.withCredentials),d)d.hasOwnProperty(h)&&w.setRequestHeader(h,d[h]);return g?w.send(g):w.send(),function(){w&&4!==w.readyState&&w.abort()}}))},st.get=tt,st.post=et,st.delete=rt,st.put=nt,st.patch=ot,st.getJSON=ut,st),at="upload",lt="download",ft="loadstart",dt="progress",ht="load";var pt=Object.prototype.toString;function vt(t,e){return pt.call(t)==="[object "+e+"]"}var yt="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function bt(t){if(t instanceof B)return t;if(null!=t){if(function(t){return f(t[z])}(t))return l=t,new B((function(t){var e=l[z]();if(f(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if((s=t)&&"number"==typeof s.length&&"function"!=typeof s)return u=t,new B((function(t){for(var e=0;e<u.length&&!t.closed;e++)t.next(u[e]);t.complete()}));if(f(null==(n=t)?void 0:n.then))return r=t,new B((function(t){r.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,O)}));if(function(t){return Symbol.asyncIterator&&f(null==t?void 0:t[Symbol.asyncIterator])}(t))return mt(t);if(function(t){return f(null==t?void 0:t[yt])}(t))return e=t,new B((function(t){var r,n;try{for(var o=i(e),u=o.next();!u.done;u=o.next()){var s=u.value;if(t.next(s),t.closed)return}}catch(t){r={error:t}}finally{try{u&&!u.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}t.complete()}));if(function(t){return f(null==t?void 0:t.getReader)}(t))return mt(function(t){return a(this,arguments,(function(){var e,r,n;return o(this,(function(o){switch(o.label){case 0:e=t.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,c(e.read())];case 3:return r=o.sent(),n=r.value,r.done?[4,c(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,c(n)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}(t))}var e,r,n,u,s,l;throw function(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}(t)}function mt(t){return new B((function(e){(function(t,e){var r,i,u,s;return n(this,void 0,void 0,(function(){var n,c;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,5,6,11]),r=l(t),o.label=1;case 1:return[4,r.next()];case 2:if((i=o.sent()).done)return[3,4];if(n=i.value,e.next(n),e.closed)return[2];o.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=o.sent(),u={error:c},[3,11];case 6:return o.trys.push([6,,9,10]),i&&!i.done&&(s=r.return)?[4,s.call(r)]:[3,8];case 7:o.sent(),o.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))}))})(t,e).catch((function(t){return e.error(t)}))}))}const wt=document.getElementById("messages-container");let gt=!1;function xt(t){const e=document.createElement("div");e.classList.add("message");const r=document.createElement("div");r.classList.add("from"),r.textContent=t.from.length>15?t.from.slice(0,15)+"...":t.from,e.append(r);const n=document.createElement("div");n.classList.add("subject"),n.textContent=t.subject.length>15?t.subject.slice(0,15)+"...":t.subject,e.append(n);const o=document.createElement("div");o.classList.add("date");const i=new Date(t.received);o.textContent=`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")} ${String(i.getDate()).padStart(2,"0")}.${String(i.getMonth()+1).padStart(2,"0")}.${i.getFullYear()}`,e.append(o),wt.prepend(e)}var St,Et,_t,Tt;(_t=2e3,void 0===_t&&(_t=0),void 0===Tt&&(Tt=E),_t<0&&(_t=0),Y(_t,_t,Tt)).pipe((St=()=>ct.getJSON("http://localhost:3000/messages/unread"),$((function(t,e){var r=null,n=0,o=!1,i=function(){return o&&!r&&e.complete()};t.subscribe(G(e,(function(t){null==r||r.unsubscribe();var o=0,u=n++;bt(St(t,u)).subscribe(r=G(e,(function(r){return e.next(Et?Et(t,r,u,o++):r)}),(function(){r=null,i()})))}),(function(){o=!0,i()})))}))),V((t=>t.messages)),function t(e){return $((function(r,n){var o,i=null,u=!1;i=r.subscribe(G(n,void 0,void 0,(function(s){o=bt(e(s,t(e)(r))),i?(i.unsubscribe(),i=null,o.subscribe(n)):u=!0}))),u&&(i.unsubscribe(),i=null,o.subscribe(n))}))}((t=>(function(){if(!gt){const t=document.createElement("div");t.classList.add("error-notification"),t.textContent="Ошибка при получении сообщений. Сервер недоступен.",wt.prepend(t),gt=!0}}(),[])))).subscribe((t=>{t.length>0&&(!function(){const t=document.querySelector(".error-notification");t&&(t.remove(),gt=!1)}(),t.forEach(xt))}))}();
//# sourceMappingURL=bundle.js.map