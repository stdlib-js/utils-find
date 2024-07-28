// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var d=["values","indices","*"];function m(m,h,l){var j,f,v,u,a,c,g,w,b,x;if(f=0,!i(m)&&!e(m))throw new TypeError(p("1Tp2u",m));if(u=m.length,arguments.length<3?(v={},g=h):(v=h,g=l),!s(g))throw new TypeError(p("1Tp2b",g));if(!t(v))throw new TypeError(p("1Tp2V",v));if(n(v,"k")){if(b=v.k,!r(b))throw new TypeError(p("1Tp8M","k",b))}else b=u;if(n(v,"returns")){if(c=v.returns,!e(c)||-1===o(d,c))throw new TypeError(p("1Tp4S","returns",d.join('", "'),c));"values"===c?f=1:"*"===c&&(f=2)}if(a=[],j=0,0===b)return a;if(b>0){for(w=0;w<u&&(!g(x=m[w],w,m)||(2===f?a.push([w,x]):1===f?a.push(x):a.push(w),(j+=1)!==b));w++);return a}for(b=-b,w=u-1;w>=0&&(!g(x=m[w],w,m)||(2===f?a.push([w,x]):1===f?a.push(x):a.push(w),(j+=1)!==b));w--);return a}export{m as default};
//# sourceMappingURL=index.mjs.map
