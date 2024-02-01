// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).find=e()}(this,(function(){"use strict";var r=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,b=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,b,"e+0$1"),t=g.call(t,d,"e-0$1"),r.alternate&&(t=g.call(t,h,"$1."),t=g.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):l.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var O=String.fromCharCode,T=isNaN,S=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,u,s,l,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",s=1,l=0;l<r.length;l++)if(f(n=r[l]))u+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",s+=1}return u}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){return"string"==typeof r}function F(r){var e,t,n;if(!A(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var N,C=Object.prototype,$=C.toString,B=C.__defineGetter__,R=C.__defineSetter__,G=C.__lookupGetter__,L=C.__lookupSetter__;N=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var M=N;function Z(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"boolean"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&z.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=X()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[H],e=q(r,H);try{r[H]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[H]=t:delete r[H],n}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=X();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return W(r)||er(r)}function nr(){return new Function("return this;")()}Z(tr,"isPrimitive",W),Z(tr,"isObject",er);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!W(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(ir)return ir;if(or)return or;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,sr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;Z(lr,"REGEXP",pr);var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function br(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,i;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return br(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(br,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(br));var hr="function"==typeof r||"object"==typeof sr||"function"==typeof fr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e};function yr(r){return"function"===hr(r)}function vr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString;var jr=X();function _r(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Er(r){return vr(r)||_r(r)}Z(Er,"isPrimitive",vr),Z(Er,"isObject",_r);var Or=Number.POSITIVE_INFINITY,Tr=wr.NEGATIVE_INFINITY,Sr=Math.floor;function kr(r){return Sr(r)===r}function xr(r){return r<Or&&r>Tr&&kr(r)}function Vr(r){return vr(r)&&xr(r)}function Ir(r){return _r(r)&&xr(r.valueOf())}function Pr(r){return Vr(r)||Ir(r)}Z(Pr,"isPrimitive",Vr),Z(Pr,"isObject",Ir);var Ar,Fr=Object,Nr=Object.getPrototypeOf;Ar=yr(Object.getPrototypeOf)?Nr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Cr=Ar;var $r=Object.prototype;function Br(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!gr(r)}(r)&&(e=function(r){return null==r?null:(r=Fr(r),Cr(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&yr(e.constructor)&&"[object Function]"===J(e.constructor)&&q(e,"isPrototypeOf")&&yr(e.isPrototypeOf)&&(e===$r||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function Rr(r){return"string"==typeof r}var Gr=String.prototype.valueOf;var Lr=X();function Mr(r){return"object"==typeof r&&(r instanceof String||(Lr?function(r){try{return Gr.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function Zr(r){return Rr(r)||Mr(r)}Z(Zr,"isPrimitive",Rr),Z(Zr,"isObject",Mr);function Wr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&kr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Ur(r){return r!=r}function Xr(r){return vr(r)&&Ur(r)}function Yr(r){return _r(r)&&Ur(r.valueOf())}function zr(r){return Xr(r)||Yr(r)}function qr(r,e,t){var n,i;if(!Wr(r)&&!Rr(r))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Vr(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(zr(e)){for(;i<n;i++)if(zr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}Z(zr,"isPrimitive",Xr),Z(zr,"isObject",Yr);var Dr=["values","indices","*"];return function(r,e,t){var n,i,o,a,u,c,f,s,l,p;if(i=0,!Wr(r)&&!Rr(r))throw new TypeError(F("invalid argument. Must provide an array-like object. Value: `%s`.",r));if(a=r.length,arguments.length<3?(o={},f=e):(o=e,f=t),!yr(f))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",f));if(!Br(o))throw new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",o));if(q(o,"k")){if(!Vr(l=o.k))throw new TypeError(F("invalid option. `%s` option must be an integer. Option: `%s`.","k",l))}else l=a;if(q(o,"returns")){if(!Rr(c=o.returns)||-1===qr(Dr,c))throw new TypeError(F('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Dr.join('", "'),c));"values"===c?i=1:"*"===c&&(i=2)}if(u=[],n=0,0===l)return u;if(l>0){for(s=0;s<a&&(!f(p=r[s],s,r)||(2===i?u.push([s,p]):1===i?u.push(p):u.push(s),(n+=1)!==l));s++);return u}for(l=-l,s=a-1;s>=0&&(!f(p=r[s],s,r)||(2===i?u.push([s,p]):1===i?u.push(p):u.push(s),(n+=1)!==l));s--);return u}}));
//# sourceMappingURL=index.js.map
