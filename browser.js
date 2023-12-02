// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,h=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,h,"e+0$1"),t=g.call(t,d,"e-0$1"),r.alternate&&(t=g.call(t,y,"$1."),t=g.call(t,b,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):l.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var T=String.fromCharCode,O=isNaN,S=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,u,s,l,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",s=1,l=0;l<r.length;l++)if(f(n=r[l]))u+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,O(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",s+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){return"string"==typeof r}function A(r){var e,t,n;if(!P(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var N,C=Object.prototype,G=C.toString,$=C.__defineGetter__,R=C.__defineSetter__,B=C.__lookupGetter__,L=C.__lookupSetter__;N=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var M=N;function Z(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString,D=Object.prototype.hasOwnProperty;function Y(r,e){return null!=r&&D.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",H=X()?function(r){var e,t,n;if(null==r)return J.call(r);t=r[q],e=Y(r,q);try{r[q]=void 0}catch(e){return J.call(r)}return n=J.call(r),e?r[q]=t:delete r[q],n}:function(r){return J.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=X();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function tr(r){return U(r)||er(r)}function nr(){return new Function("return this;")()}Z(tr,"isPrimitive",U),Z(tr,"isObject",er);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!U(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var lr=/^\s*function\s*([^(]*)/i;Z(sr,"REGEXP",lr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};function gr(r){return null!==r&&"object"==typeof r}function hr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return gr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr));var dr="function"==typeof r||"object"==typeof fr||"function"==typeof cr?function(r){return hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?hr(r).toLowerCase():e};function yr(r){return"function"===dr(r)}function br(r){return"number"==typeof r}var vr=Number,wr=vr.prototype.toString,mr=X();function jr(r){return"object"==typeof r&&(r instanceof vr||(mr?function(r){try{return wr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function _r(r){return br(r)||jr(r)}Z(_r,"isPrimitive",br),Z(_r,"isObject",jr);var Er=Number.POSITIVE_INFINITY,Tr=vr.NEGATIVE_INFINITY,Or=Math.floor;function Sr(r){return Or(r)===r}function kr(r){return r<Er&&r>Tr&&Sr(r)}function xr(r){return br(r)&&kr(r)}function Ir(r){return jr(r)&&kr(r.valueOf())}function Vr(r){return xr(r)||Ir(r)}Z(Vr,"isPrimitive",xr),Z(Vr,"isObject",Ir);var Fr,Pr=Object,Ar=Object.getPrototypeOf;Fr=yr(Object.getPrototypeOf)?Ar:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Nr=Fr,Cr=Object.prototype;function Gr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(e=function(r){return null==r?null:(r=Pr(r),Nr(r))}(r),!e||!Y(r,"constructor")&&Y(e,"constructor")&&yr(e.constructor)&&"[object Function]"===H(e.constructor)&&Y(e,"isPrototypeOf")&&yr(e.isPrototypeOf)&&(e===Cr||function(r){var e;for(e in r)if(!Y(r,e))return!1;return!0}(r)))}function $r(r){return"string"==typeof r}var Rr=String.prototype.valueOf,Br=X();function Lr(r){return"object"==typeof r&&(r instanceof String||(Br?function(r){try{return Rr.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function Mr(r){return $r(r)||Lr(r)}function Zr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Sr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Ur(r){return r!=r}function Wr(r){return br(r)&&Ur(r)}function Xr(r){return jr(r)&&Ur(r.valueOf())}function Jr(r){return Wr(r)||Xr(r)}function Dr(r,e,t){var n,i;if(!Zr(r)&&!$r(r))throw new TypeError(A("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!xr(t))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Jr(e)){for(;i<n;i++)if(Jr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}function Yr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}Z(Mr,"isPrimitive",$r),Z(Mr,"isObject",Lr),Z(Jr,"isPrimitive",Wr),Z(Jr,"isObject",Xr);var zr=["values","indices","*"];return function(r,e,t){var n,i,o,a,u,c,f,s,l,p;if(i=0,!Zr(r)&&!$r(r))throw new TypeError(Yr("1Tp2u,F5",r));if(a=r.length,arguments.length<3?(o={},f=e):(o=e,f=t),!yr(f))throw new TypeError(Yr("1Tp2b,GJ",f));if(!Gr(o))throw new TypeError(Yr("1Tp2V,FD",o));if(Y(o,"k")){if(!xr(l=o.k))throw new TypeError(Yr("1Tp8M,JG","k",l))}else l=a;if(Y(o,"returns")){if(!$r(c=o.returns)||-1===Dr(zr,c))throw new TypeError(Yr("1Tp2X,3g,4S,GD,Gg,Jm","returns",zr.join('", "'),c));"values"===c?i=1:"*"===c&&(i=2)}if(u=[],n=0,0===l)return u;if(l>0){for(s=0;s<a&&(!f(p=r[s],s,r)||(2===i?u.push([s,p]):1===i?u.push(p):u.push(s),(n+=1)!==l));s++);return u}for(l=-l,s=a-1;s>=0&&(!f(p=r[s],s,r)||(2===i?u.push([s,p]):1===i?u.push(p):u.push(s),(n+=1)!==l));s--);return u}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).find=e();
//# sourceMappingURL=browser.js.map
