// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),s&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function j(t,r){return null!=t&&g.call(t,r)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var d=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[h],r=j(t,h);try{t[h]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[h]=e:delete t[h],n}:function(t){return v.call(t)},m=Boolean.prototype.toString;var w=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===d(t)))}function O(t){return s(t)||_(t)}function T(){return new Function("return this;")()}p(O,"isPrimitive",s),p(O,"isObject",_);var E="object"==typeof self?self:null,S="object"==typeof window?window:null,P="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof P?P:null;var A=function(t){if(arguments.length){if(!s(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(E)return E;if(S)return S;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),F=A.document&&A.document.childNodes,N=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;p(V,"REGEXP",G);var k=Array.isArray?Array.isArray:function(t){return"[object Array]"===d(t)};function B(t){return null!==t&&"object"==typeof t}function x(t){var r,e,n,o;if(("Object"===(e=d(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=G.exec(n.toString()))return r[1]}return B(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(B,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!k(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(B));var C="function"==typeof t||"object"==typeof N||"function"==typeof F?function(t){return x(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?x(t).toLowerCase():r};function M(t){return"function"===C(t)}function J(t){return"number"==typeof t}var L=Number,D=L.prototype.toString;var R=b();function U(t){return"object"==typeof t&&(t instanceof L||(R?function(t){try{return D.call(t),!0}catch(t){return!1}}(t):"[object Number]"===d(t)))}function X(t){return J(t)||U(t)}p(X,"isPrimitive",J),p(X,"isObject",U);var Y=Number.POSITIVE_INFINITY,q=L.NEGATIVE_INFINITY,z=Math.floor;function H(t){return z(t)===t}function K(t){return t<Y&&t>q&&H(t)}function Q(t){return J(t)&&K(t)}function W(t){return U(t)&&K(t.valueOf())}function Z(t){return Q(t)||W(t)}p(Z,"isPrimitive",Q),p(Z,"isObject",W);var $,tt=Object.getPrototypeOf;$=M(Object.getPrototypeOf)?tt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===d(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var rt=$;var et=Object.prototype;function nt(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!k(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),rt(t))}(t),!r||!j(t,"constructor")&&j(r,"constructor")&&M(r.constructor)&&"[object Function]"===d(r.constructor)&&j(r,"isPrototypeOf")&&M(r.isPrototypeOf)&&(r===et||function(t){var r;for(r in t)if(!j(t,r))return!1;return!0}(t)))}function ot(t){return"string"==typeof t}var ut=String.prototype.valueOf;var it=b();function ct(t){return"object"==typeof t&&(t instanceof String||(it?function(t){try{return ut.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function ft(t){return ot(t)||ct(t)}p(ft,"isPrimitive",ot),p(ft,"isObject",ct);function lt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&H(t.length)&&t.length>=0&&t.length<=9007199254740991}function at(t){return t!=t}function pt(t){return J(t)&&at(t)}function st(t){return U(t)&&at(t.valueOf())}function yt(t){return pt(t)||st(t)}function bt(t,r,e){var n,o;if(!lt(t)&&!ot(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Q(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(yt(r)){for(;o<n;o++)if(yt(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}function vt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}p(yt,"isPrimitive",pt),p(yt,"isObject",st);var gt=["values","indices","*"];function jt(t,r,e){var n,o,u,i,c,f,l,a,p,s;if(o=0,!lt(t)&&!ot(t))throw new TypeError(vt("1Tp2u,F5",t));if(i=t.length,arguments.length<3?(u={},l=r):(u=r,l=e),!M(l))throw new TypeError(vt("1Tp2b,GJ",l));if(!nt(u))throw new TypeError(vt("1Tp2V,FD",u));if(j(u,"k")){if(!Q(p=u.k))throw new TypeError(vt("1Tp8M,JG","k",p))}else p=i;if(j(u,"returns")){if(!ot(f=u.returns)||-1===bt(gt,f))throw new TypeError(vt("1Tp2X,3g,4S,GD,Gg,Jm","returns",gt.join('", "'),f));"values"===f?o=1:"*"===f&&(o=2)}if(c=[],n=0,0===p)return c;if(p>0){for(a=0;a<i&&(!l(s=t[a],a,t)||(2===o?c.push([a,s]):1===o?c.push(s):c.push(a),(n+=1)!==p));a++);return c}for(p=-p,a=i-1;a>=0&&(!l(s=t[a],a,t)||(2===o?c.push([a,s]):1===o?c.push(s):c.push(a),(n+=1)!==p));a--);return c}export{jt as default};
//# sourceMappingURL=mod.js.map
