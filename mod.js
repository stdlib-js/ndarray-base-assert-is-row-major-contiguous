// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,a=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;function c(r,e,t){var n,o,u,a,i;for(n=r.length,o=t,u=t,i=0;i<n;i++){if(0===r[i])return[t,t];(a=e[i])>0?u+=a*(r[i]-1):a<0&&(o+=a*(r[i]-1))}return[o,u]}function f(r){return Math.abs(r)}function _(r,e,t){return 0!==function(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return 0===e?1:e===r.length?-1:0}(e)&&function(r){var e,t,n,o;if(0===(e=r.length))return!1;for(t=f(r[0]),o=1;o<e;o++){if((n=f(r[o]))>t)return!1;t=n}return!0}(e)&&function(r,e,t){var n,o;return n=function(r){var e,t,n;if(0===(e=r.length))return 0;for(t=1,n=0;n<e;n++)t*=r[n];return t}(r),0!==n&&n===(o=c(r,e,t))[1]-o[0]+1}(r,e,t)}e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&u&&u.call(r,e,t.get),p&&a&&a.call(r,e,t.set),r},e(c,"assign",{configurable:!1,enumerable:!1,writable:!1,value:function(r,e,t,n){var o,u,a,i,l;for(o=r.length,u=t,a=t,l=0;l<o;l++){if(0===r[l])return n[0]=t,n[1]=t,n;(i=e[l])>0?a+=i*(r[l]-1):i<0&&(u+=i*(r[l]-1))}return n[0]=u,n[1]=a,n}});export{_ as default};
//# sourceMappingURL=mod.js.map