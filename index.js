// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;function f(e,t,r){var n,o,u,i,a;for(n=e.length,o=r,u=r,a=0;a<n;a++){if(0===e[a])return[r,r];(i=t[a])>0?u+=i*(e[a]-1):i<0&&(o+=i*(e[a]-1))}return[o,u]}function c(e){return Math.abs(e)}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&u&&u.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e},e(f,"assign",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n){var o,u,i,a,l;for(o=e.length,u=r,i=r,l=0;l<o;l++){if(0===e[l])return n[0]=r,n[1]=r,n;(a=t[l])>0?i+=a*(e[l]-1):a<0&&(u+=a*(e[l]-1))}return n[0]=u,n[1]=i,n}}),function(e,t,r){return 0!==function(e){var t,r;for(t=0,r=0;r<e.length;r++)e[r]<0&&(t+=1);return 0===t?1:t===e.length?-1:0}(t)&&function(e){var t,r,n,o;if(0===(t=e.length))return!1;for(r=c(e[0]),o=1;o<t;o++){if((n=c(e[o]))>r)return!1;r=n}return!0}(t)&&function(e,t,r){var n,o;return n=function(e){var t,r,n;if(0===(t=e.length))return 0;for(r=1,n=0;n<t;n++)r*=e[n];return r}(e),0!==n&&n===(o=f(e,t,r))[1]-o[0]+1}(e,t,r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isRowMajorContiguous=t();
//# sourceMappingURL=index.js.map
