// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,v,"e"),t=p.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,h,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,b,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function T(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,i,a,u,f,s,l,p,g,h,d;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,T(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+j(d):j(d)+p)),u+=n.arg||"",f+=1}return u}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){var e,t;if("string"!=typeof r)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var P,A=Object.prototype,F=A.toString,C=A.__defineGetter__,$=A.__defineSetter__,N=A.__lookupGetter__,R=A.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var B=P;function G(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,W=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&W.call(r,e)}var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",q=Z()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[z],e=X(r,z);try{r[z]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[z]=t:delete r[z],n}:function(r){return U.call(r)},D=Boolean,H=Boolean.prototype.toString,J=Z();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return L(r)||K(r)}G(Q,"isPrimitive",L),G(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!L(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(tr)return tr;if(rr)return rr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=nr.document&&nr.document.childNodes,or=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;G(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function fr(r){return null!==r&&"object"==typeof r}function sr(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return fr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var lr="function"==typeof r||"object"==typeof or||"function"==typeof ir?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?sr(r).toLowerCase():e};function pr(r){return"function"===lr(r)}function gr(r){return"number"==typeof r}var hr=Number,dr=hr.prototype.toString,br=Z();function yr(r){return"object"==typeof r&&(r instanceof hr||(br?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function vr(r){return gr(r)||yr(r)}G(vr,"isPrimitive",gr),G(vr,"isObject",yr);var wr=Number.POSITIVE_INFINITY,mr=hr.NEGATIVE_INFINITY,jr=Math.floor;function _r(r){return jr(r)===r}function Er(r){return r<wr&&r>mr&&_r(r)}function Tr(r){return gr(r)&&Er(r)}function Or(r){return yr(r)&&Er(r.valueOf())}function Sr(r){return Tr(r)||Or(r)}G(Sr,"isPrimitive",Tr),G(Sr,"isObject",Or);var kr,xr=Object,Ir=Object.getPrototypeOf;kr=pr(Object.getPrototypeOf)?Ir:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Vr=kr,Pr=Object.prototype;function Ar(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(e=function(r){return null==r?null:(r=xr(r),Vr(r))}(r),!e||!X(r,"constructor")&&X(e,"constructor")&&pr(e.constructor)&&"[object Function]"===q(e.constructor)&&X(e,"isPrototypeOf")&&pr(e.isPrototypeOf)&&(e===Pr||function(r){var e;for(e in r)if(!X(r,e))return!1;return!0}(r)))}function Fr(r){return"string"==typeof r}var Cr=String.prototype.valueOf,$r=Z();function Nr(r){return"object"==typeof r&&(r instanceof String||($r?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function Rr(r){return Fr(r)||Nr(r)}G(Rr,"isPrimitive",Fr),G(Rr,"isObject",Nr);var Br=9007199254740991;function Gr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&_r(r.length)&&r.length>=0&&r.length<=Br}function Lr(r){return r!=r}function Mr(r){return gr(r)&&Lr(r)}function Zr(r){return yr(r)&&Lr(r.valueOf())}function Ur(r){return Mr(r)||Zr(r)}function Wr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}G(Ur,"isPrimitive",Mr),G(Ur,"isObject",Zr);var Xr=["values","indices","*"];return function(r,e,t){var n,i,o,a,u,c,f,s,l,p;if(i=0,!Gr(r)&&!Fr(r))throw new TypeError(Wr("1Tp2u",r));if(a=r.length,arguments.length<3?(o={},f=e):(o=e,f=t),!pr(f))throw new TypeError(Wr("1Tp2b",f));if(!Ar(o))throw new TypeError(Wr("1Tp2V",o));if(X(o,"k")){if(!Tr(l=o.k))throw new TypeError(Wr("1Tp8M","k",l))}else l=a;if(X(o,"returns")){if(!Fr(c=o.returns)||-1===function(r,e,t){var n,i;if(!Gr(r)&&!Fr(r))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Tr(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Ur(e)){for(;i<n;i++)if(Ur(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}(Xr,c))throw new TypeError(Wr("1Tp4S","returns",Xr.join('", "'),c));"values"===c?i=1:"*"===c&&(i=2)}if(u=[],n=0,0===l)return u;if(l>0){for(s=0;s<a&&(!f(p=r[s],s,r)||(2===i?u.push([s,p]):1===i?u.push(p):u.push(s),(n+=1)!==l));s++);return u}for(l=-l,s=a-1;s>=0&&(!f(p=r[s],s,r)||(2===i?u.push([s,p]):1===i?u.push(p):u.push(s),(n+=1)!==l));s--);return u}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).find=e();
//# sourceMappingURL=browser.js.map
