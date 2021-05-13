(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ca=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},r=ca(this),da=function(a,b){if(b)a:{var c=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}},ea=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
da("Promise",function(a){function b(){this.g=null}function c(f){return f instanceof e?f:new e(function(h){h(f)})}if(a)return a;b.prototype.h=function(f){if(null==this.g){this.g=[];var h=this;this.i(function(){h.l()})}this.g.push(f)};var d=r.setTimeout;b.prototype.i=function(f){d(f,0)};b.prototype.l=function(){for(;this.g&&this.g.length;){var f=this.g;this.g=[];for(var h=0;h<f.length;++h){var k=f[h];f[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};b.prototype.j=function(f){this.i(function(){throw f;
})};var e=function(f){this.h=0;this.i=void 0;this.g=[];this.u=!1;var h=this.j();try{f(h.resolve,h.reject)}catch(k){h.reject(k)}};e.prototype.j=function(){function f(l){return function(p){k||(k=!0,l.call(h,p))}}var h=this,k=!1;return{resolve:f(this.F),reject:f(this.l)}};e.prototype.F=function(f){if(f===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof e)this.H(f);else{a:switch(typeof f){case "object":var h=null!=f;break a;case "function":h=!0;break a;default:h=!1}h?
this.D(f):this.m(f)}};e.prototype.D=function(f){var h=void 0;try{h=f.then}catch(k){this.l(k);return}"function"==typeof h?this.K(h,f):this.m(f)};e.prototype.l=function(f){this.v(2,f)};e.prototype.m=function(f){this.v(1,f)};e.prototype.v=function(f,h){if(0!=this.h)throw Error("Cannot settle("+f+", "+h+"): Promise already settled in state"+this.h);this.h=f;this.i=h;2===this.h&&this.G();this.B()};e.prototype.G=function(){var f=this;d(function(){if(f.C()){var h=r.console;"undefined"!==typeof h&&h.error(f.i)}},
1)};e.prototype.C=function(){if(this.u)return!1;var f=r.CustomEvent,h=r.Event,k=r.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof f?f=new f("unhandledrejection",{cancelable:!0}):"function"===typeof h?f=new h("unhandledrejection",{cancelable:!0}):(f=r.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.i;return k(f)};e.prototype.B=function(){if(null!=this.g){for(var f=0;f<this.g.length;++f)g.h(this.g[f]);this.g=null}};
var g=new b;e.prototype.H=function(f){var h=this.j();f.M(h.resolve,h.reject)};e.prototype.K=function(f,h){var k=this.j();try{f.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};e.prototype.then=function(f,h){function k(t,q){return"function"==typeof t?function(m){try{l(t(m))}catch(w){p(w)}}:q}var l,p,n=new e(function(t,q){l=t;p=q});this.M(k(f,l),k(h,p));return n};e.prototype.catch=function(f){return this.then(void 0,f)};e.prototype.M=function(f,h){function k(){switch(l.h){case 1:f(l.i);break;case 2:h(l.i);
break;default:throw Error("Unexpected state: "+l.h);}}var l=this;null==this.g?g.h(k):this.g.push(k);this.u=!0};e.resolve=c;e.reject=function(f){return new e(function(h,k){k(f)})};e.race=function(f){return new e(function(h,k){for(var l=ea(f),p=l.next();!p.done;p=l.next())c(p.value).M(h,k)})};e.all=function(f){var h=ea(f),k=h.next();return k.done?c([]):new e(function(l,p){function n(m){return function(w){t[m]=w;q--;0==q&&l(t)}}var t=[],q=0;do t.push(void 0),q++,c(k.value).M(n(t.length-1),p),k=h.next();
while(!k.done)})};return e});
var u=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,na=null,oa=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ma.test(a)?a:""},pa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},qa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}},ra=function(a,b){function c(){}c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=
a;a.Ha=function(d,e,g){for(var f=Array(arguments.length-2),h=2;h<arguments.length;h++)f[h-2]=arguments[h];return b.prototype[e].apply(d,f)}},sa=function(a){return a};function x(a){if(Error.captureStackTrace)Error.captureStackTrace(this,x);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ra(x,Error);x.prototype.name="CustomError";var ta=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");x.call(this,c+a[d])};ra(ta,x);ta.prototype.name="AssertionError";var z=function(a,b){this.h=a===y&&b||"";this.j=ua};z.prototype.I=!0;z.prototype.g=function(){return this.h};var A=function(a){return a instanceof z&&a.constructor===z&&a.j===ua?a.h:"type_error:Const"},ua={},y={};var B=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},C=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,g=0;g<c;g++)g in e&&(d[g]=b.call(void 0,e[g],g,a));return d},va=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,
b,c)}:function(a,b,c){var d=c;B(a,function(e,g){d=b.call(void 0,d,e,g,a)});return d},wa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function xa(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};var ya=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}},za=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Aa={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var D,Ba=function(){if(void 0===D){var a=null,b=u.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:sa,createScript:sa,createScriptURL:sa})}catch(c){u.console&&u.console.error(c.message)}D=a}else D=a}return D};var F=function(a,b){this.j=b===Ca?a:""};F.prototype.I=!0;F.prototype.g=function(){return this.j.toString()};F.prototype.i=!0;F.prototype.h=function(){return 1};F.prototype.toString=function(){return this.j+""};
var G=function(a){return a instanceof F&&a.constructor===F?a.j:"type_error:TrustedResourceUrl"},Fa=function(a){var b=A(new z(y,"https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"));if(!Da.test(b))throw Error("Invalid TrustedResourceUrl format: "+b);var c=b.replace(Ea,function(d,e){if(!Object.prototype.hasOwnProperty.call(a,e))throw Error('Found marker, "'+e+'", in format string, "'+b+'", but no valid label mapping found in args: '+JSON.stringify(a));d=a[e];return d instanceof z?A(d):
encodeURIComponent(String(d))});return H(c)},Ea=/%{(\w+)}/g,Da=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,Ca={},H=function(a){var b=Ba();a=b?b.createScriptURL(a):a;return new F(a,Ca)},Ga=function(a,b,c){if(null==c)return b;if("string"===typeof c)return c?a+encodeURIComponent(c):"";for(var d in c)if(Object.prototype.hasOwnProperty.call(c,d)){var e=c[d];e=Array.isArray(e)?e:[e];for(var g=0;g<e.length;g++){var f=e[g];null!=f&&(b||(b=a),b+=(b.length>a.length?
"&":"")+encodeURIComponent(d)+"="+encodeURIComponent(String(f)))}}return b};var Oa=function(a){if(!Ha.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ia,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ja,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ka,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(La,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ma,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Na,"&#0;"));return a},Ia=/&/g,Ja=/</g,Ka=/>/g,La=/"/g,Ma=/'/g,Na=/\x00/g,Ha=/[\x00&<>"']/;var J=function(a,b){this.j=b===I?a:""};J.prototype.I=!0;J.prototype.g=function(){return this.j.toString()};J.prototype.i=!0;J.prototype.h=function(){return 1};J.prototype.toString=function(){return this.j.toString()};
var Pa=function(a){return a instanceof J&&a.constructor===J?a.j:"type_error:SafeUrl"},Qa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Ra=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Sa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ta=function(a){if(a instanceof J)return a;a="object"==typeof a&&a.I?a.g():String(a);
if(Sa.test(a))a=new J(a,I);else{a=String(a);a=a.replace(/(%0A|%0D)/g,"");var b=a.match(Ra);a=b&&Qa.test(b[1])?new J(a,I):null}return a},I={},Ua=new J("about:invalid#zClosurez",I);var K=function(a,b){this.h=b===Va?a:""};K.prototype.I=!0;K.prototype.g=function(){return this.h};K.prototype.toString=function(){return this.h.toString()};
var Va={},Wa=new K("",Va),cb=function(a){if(a instanceof J)return'url("'+Pa(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof z)a=A(a);else{a=String(a);var b=a.replace(Xa,"$1").replace(Xa,"$1").replace(Ya,"url");if(Za.test(b)){if(b=!$a.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&ab(a)}a=b?bb(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new ta("Value does not allow [{;}], got: %s.",[a]);return a},ab=function(a){for(var b=
!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b},Za=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Ya=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,Xa=/\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,$a=/\/\*/,bb=function(a){return a.replace(Ya,function(b,
c,d,e){var g="";d=d.replace(/^(['"])(.*)\1$/,function(f,h,k){g=h;return k});b=(Ta(d)||Ua).g();return c+g+b+g+e})};var L;a:{var db=u.navigator;if(db){var eb=db.userAgent;if(eb){L=eb;break a}}L=""};var M=function(a,b,c){this.j=c===fb?a:"";this.l=b};M.prototype.i=!0;M.prototype.h=function(){return this.l};M.prototype.I=!0;M.prototype.g=function(){return this.j.toString()};M.prototype.toString=function(){return this.j.toString()};
var N=function(a){return a instanceof M&&a.constructor===M?a.j:"type_error:SafeHtml"},gb=function(a){if(a instanceof M)return a;var b="object"==typeof a,c=null;b&&a.i&&(c=a.h());return O(Oa(b&&a.I?a.g():String(a)),c)},hb=/^[a-zA-Z0-9-]+$/,ib={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},jb={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},lb=function(a){var b=gb(kb),c=b.h(),d=[],e=function(g){Array.isArray(g)?
B(g,e):(g=gb(g),d.push(N(g).toString()),g=g.h(),0==c?c=g:0!=g&&c!=g&&(c=null))};B(a,e);return O(d.join(N(b).toString()),c)},mb=function(a){return lb(Array.prototype.slice.call(arguments))},fb={},O=function(a,b){var c=Ba();a=c?c.createHTML(a):a;return new M(a,b,fb)},kb=new M(u.trustedTypes&&u.trustedTypes.emptyHTML||"",0,fb);var nb=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var ob=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};var P=function(a){P[" "](a);return a};P[" "]=function(){};var pb=-1!=L.toLowerCase().indexOf("webkit")&&-1==L.indexOf("Edge");var qb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Q=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{P(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},sb=function(a,b){b=b||u;for(var c=0;b&&40>c++&&!a(b);)b=rb(b)},rb=function(a){try{var b=a.parent;if(b&&b!=a)return b}catch(c){}return null},tb=function(a,b){var c=a.createElement("script");c.src=G(b);(b=c.ownerDocument&&c.ownerDocument.defaultView)&&b!=u?b=oa(b.document):(null===na&&(na=oa(u.document)),b=na);b&&c.setAttribute("nonce",b);(a=a.getElementsByTagName("script")[0])&&
a.parentNode&&a.parentNode.insertBefore(c,a)},ub=function(){if(!u.crypto)return Math.random();try{var a=new Uint32Array(1);u.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},vb=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},xb=ya(function(){return wa(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],wb)||1E-4>Math.random()}),yb=ya(function(){return wb("MSIE")}),wb=function(a){return-1!=
L.indexOf(a)},zb=/https?:\/\/[^\/]+/,Ab=function(a){return(a=zb.exec(a))&&a[0]||""},Bb=/^([0-9.]+)px$/,Cb=function(a){return(a=Bb.exec(a))?+a[1]:null},Db=function(a){var b=u;a=void 0===a?!0:a;try{for(var c=null;c!=b;c=b,b=b.parent)switch(b.location.protocol){case "https:":return!0;case "file:":return a;case "http:":return!1}}catch(d){}return!0},Eb=function(a,b){try{return!(!a.frames||!a.frames[b])}catch(c){return!1}};var Fb=function(a,b){var c=void 0===c?!1:c;var d=a.ampInaboxIframes=a.ampInaboxIframes||[],e=function(){};b&&d.push(b);if(!a.ampInaboxInitialized){a.ampInaboxPendingMessages=a.ampInaboxPendingMessages||[];var g=function(f){if(a.ampInaboxInitialized)f=!0;else{var h,k="amp-ini-load"===f.data;a.ampInaboxPendingMessages&&!k&&(h=/^amp-(\d{15,20})?/.exec(f.data))&&(a.ampInaboxPendingMessages.push(f),f=h[1],a.ampInaboxInitialized||f&&!/^\d{15,20}$/.test(f)||a.document.querySelector('script[src$="amp4ads-host-v0.js"]')||
tb(a.document,f?Fa({ampVersion:f}):H(A(new z(y,"https://cdn.ampproject.org/amp4ads-host-v0.js")))));f=!1}f&&e()};c||d.google_amp_listener_added||(d.google_amp_listener_added=!0,ob(a,"message",g),e=function(){a.removeEventListener&&a.removeEventListener("message",g,!1)})}};var Gb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,Kb=function(a){a=a||Hb();for(var b=new Ib(u.location.href,!1),c=null,d=a.length-1,e=d;0<=e;--e){var g=a[e];!c&&Gb.test(g.url)&&(c=g);if(g.url&&!g.R){b=g;break}}e=null;g=a.length&&a[d].url;0!=b.depth&&g&&(e=a[d]);return new Jb(b,e,c)},Hb=function(){var a=u,b=[],c=null;do{var d=a;if(Q(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new Ib(e||""));try{a=d.parent}catch(g){a=null}}while(a&&d!=a);
d=0;for(a=b.length-1;d<=a;++d)b[d].depth=a-d;d=u;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.R=!0);return b},Jb=function(a,b,c){this.g=a;this.h=b;this.i=c},Ib=function(a,b){this.url=a;this.R=!!b;this.depth=null};var Lb=function(a){var b;if(b=u.navigator)b=u.navigator.userAgent,b=/Chrome/.test(b)&&!/Edge/.test(b)?!0:!1;b&&u.navigator.sendBeacon?u.navigator.sendBeacon(a):(u.google_image_requests||(u.google_image_requests=[]),b=u.document.createElement("img"),b.src=a,u.google_image_requests.push(b))};var Mb=function(a,b,c){this.l=c||4E3;this.i=a||"&";this.j=b||",$";this.h={};this.m=0;this.g=[]},Nb=function(a,b){var c={};c[a]=b;return[c]},Pb=function(a,b,c,d,e){var g=[];vb(a,function(f,h){(f=Ob(f,b,c,d,e))&&g.push(h+"="+f)});return g.join(b)},Ob=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var g=[],f=0;f<a.length;f++)g.push(Ob(a[f],b,c,d+1,e));return g.join(c[d])}}else if("object"==typeof a)return e=
e||0,2>e?encodeURIComponent(Pb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},R=function(a,b,c){a.g.push(b);a.h[b]=c},S=function(a,b,c,d){a.g.push(b);a.h[b]=Nb(c,d)},Rb=function(a,b,c,d){b=b+"//"+c+d;var e=Qb(a)-d.length;if(0>e)return"";a.g.sort(function(p,n){return p-n});d=null;c="";for(var g=0;g<a.g.length;g++)for(var f=a.g[g],h=a.h[f],k=0;k<h.length;k++){if(!e){d=null==d?f:d;break}var l=Pb(h[k],a.i,a.j);if(l){l=c+l;if(e>=l.length){e-=l.length;b+=l;c=a.i;break}d=null==d?f:d}}a="";null!=
d&&(a=c+"trn="+d);return b+a},Qb=function(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return a.l-3-b-a.i.length-1};var Sb=function(a,b,c,d){if(Math.random()<(d||.01))try{if(c instanceof Mb)var e=c;else e=new Mb,vb(c,function(f,h){var k=e,l=k.m++;R(k,l,Nb(h,f))});var g=Rb(e,a.g,"pagead2.googlesyndication.com","/pagead/gen_204?id="+b+"&");g&&Lb(g)}catch(f){}};var Tb=!1,Ub=null,Vb=function(){this.h={};this.g={};for(var a=[],b=0,c=a.length;b<c;++b)this.g[a[b]]=""},Wb=function(a,b,c){""!=b&&(c?a.g.hasOwnProperty(c)&&(a.g[c]=b):a.h[b]=!0)},Xb=function(a,b){return a.g.hasOwnProperty(b)?a.g[b]:""},Yb=function(a){var b=[];vb(a.h,function(c,d){b.push(d)});vb(a.g,function(c){""!=c&&b.push(c)});return b};var $b=function(){this.i=Zb;this.h=!0;this.j=this.g},cc=function(a,b){var c=ac;try{var d=a()}catch(f){a=c.h;try{a=c.j(529,new nb(f,{message:bc(f)}),void 0,b)}catch(h){c.g(217,h)}if(a){var e,g;null==(e=window.console)||null==(g=e.error)||g.call(e,f)}else throw f;}return d};
$b.prototype.g=function(a,b,c,d,e){e=e||"dcmads-err";try{var g=new Mb;S(g,1,"context",a);b.error&&b.meta&&b.id||(b=new nb(b,{message:bc(b)}));b.msg&&S(g,2,"msg",b.msg.substring(0,512));var f=b.meta||{};if(d)try{d(f)}catch(m){}R(g,3,[f]);var h=Kb();h.h&&S(g,4,"top",h.h.url||"");var k={url:h.g.url||""};if(h.g.url){var l=h.g.url.match(qb),p=l[1],n=l[3],t=l[4];b="";p&&(b+=p+":");n&&(b+="//",b+=n,t&&(b+=":"+t));var q=b}else q="";R(g,5,[k,{url:q}]);Sb(this.i,e,g,c)}catch(m){try{Sb(this.i,e,{context:"ecmserr",
rctx:a,msg:bc(m),url:h&&h.g.url},c)}catch(w){}}return this.h};var bc=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var dc=function(a,b,c){this.g=[];this.g[0]=c;this.g[1]=a;this.g[2]=b;this.h=this.g[3]=!1};var fc=function(){var a=H((Db()?"https:":"http:")+ec);u.google_osd_loaded||(tb(u.document,a),u.google_osd_loaded=!0)},gc=function(a,b){a&&ob(a,"load",b)},hc=function(){var a=u.google_osd_amcb;return"function"===typeof a?a:null},ic=H(A(new z(y,"https://www.googletagservices.com/activeview/js/current/osd.js")));var T=function(){this.h=0;this.g=[]};T.prototype.numBlocks=function(){return this.g.length};T.prototype.getOseId=function(){return this.h};T.prototype.getNewBlocks=function(a,b){jc(this,a);b&&(u.google_osd_amcb=a)};T.prototype.setup=function(a){this.h=a};T.prototype.registerAdBlock=function(a,b,c){var d=new dc(a,b,c);hc()?d.g[3]=!0:gc(c,function(){d.g[3]=!0});this.g.push(d);jc(this);fc()};
var jc=function(a,b){if(b=b||hc())for(var c=0;c<a.g.length;++c){var d=a.g[c];d.h||(b.apply(void 0,d.g),d.h=!0)}},kc,lc=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/.exec(G(ic).toString()),mc=lc[3]||"";kc=H(lc[1]+Ga("?",lc[2]||"",{cb:"/r20100101"})+Ga("#",mc,void 0));var ec=G(kc).toString().slice(6);H(A(new z(y,"https://pagead2.googlesyndication.com/pagead/osd.js")));var nc=function(a,b){this.g=a;this.depth=b},pc=function(a){a=a||Hb();var b=Math.max(a.length-1,0),c=Kb(a);a=c.g;var d=c.h,e=c.i,g=[];c=function(h,k){return null==h?k:h};e&&g.push(new nc([e.url,e.R?2:0],c(e.depth,1)));d&&d!=e&&g.push(new nc([d.url,2],0));a.url&&a!=e&&g.push(new nc([a.url,0],c(a.depth,b)));var f=C(g,function(h,k){return g.slice(0,g.length-k)});!a.url||(e||d)&&a!=e||(d=Ab(a.url))&&f.push([new nc([d,1],c(a.depth,b))]);f.push([]);return C(f,function(h){return oc(b,h)})},qc=function(a,
b){b=b||pc();return C(b,function(c){var d={};d[a]=c;return d})};function oc(a,b){var c=va(b,function(e,g){return Math.max(e,g.depth)},-1),d=xa(c+2);d[0]=a;B(b,function(e){return d[e.depth+1]=e.g});return d}var rc=function(a){a=a||pc();return C(a,function(b){return Ob(b)})};var sc=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},U=function(a,b){this.h=a;this.g=null;this.j={};this.m=0;this.l=void 0===b?500:b;this.i=null},V=function(){};U.prototype=fa(V.prototype);U.prototype.constructor=U;
if(la)la(U,V);else for(var W in V)if("prototype"!=W)if(Object.defineProperties){var tc=Object.getOwnPropertyDescriptor(V,W);tc&&Object.defineProperty(U,W,tc)}else U[W]=V[W];U.Aa=V.prototype;
var vc=function(a,b){var c={internalErrorState:0},d=za(function(){return b(c)}),e=0;-1!==a.l&&(e=setTimeout(function(){c.tcString="tcunavailable";c.internalErrorState=1;d()},a.l));uc(a,"addEventListener",function(g,f){e&&(clearTimeout(e),e=0);f&&(c=g);c.internalErrorState=sc(c);0!=c.internalErrorState&&(c.tcString="tcunavailable");(g=0!=c.internalErrorState)||(g=c,!1===g.gdprApplies?g=!0:(void 0===g.internalErrorState&&(g.internalErrorState=sc(g)),g="error"===g.cmpStatus||0!==g.internalErrorState||
"loaded"===g.cmpStatus&&("tcloaded"===g.eventStatus||"useractioncomplete"===g.eventStatus)?!0:!1));g&&(uc(a,"removeEventListener",null,c.listenerId),d())})},wc=function(a){return new Promise(function(b){vc(a,b)})},uc=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.h.__tcfapi)a=a.h.__tcfapi,a(b,2,c,d);else if(xc(a)){yc(a);var e=++a.m;a.j[e]=c;a.g&&(c={},a.g.postMessage((c.__tcfapiCall={command:b,version:2,callId:e,parameter:d},c),"*"))}else c({},!1)},xc=function(a){if(a.g)return a.g;
a:{var b=a.h;for(var c=0;50>c;++c){if(Eb(b,"__tcfapiLocator"))break a;if(!(b=rb(b)))break}b=null}a.g=b;return a.g},yc=function(a){a.i||(a.i=function(b){try{var c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.j[c.callId](c.returnValue,c.success)}catch(d){}},ob(a.h,"message",a.i))};var zc;if(zc=pb){var X="IFRAME",Ac=document;X=String(X);"application/xhtml+xml"===Ac.contentType&&(X=X.toLowerCase());zc="srcdoc"in Ac.createElement(X)}var Bc=zc;var Cc=Db(!1)?"https:":"http:",Zb,ac;Zb=new function(){this.g=Cc};ac=new $b;var Dc=function(a){ac.h=!1;throw Error(a);};var Y={1:{J:"40004000",A:"40004001"}},Ec={J:"40004006",A:"40004007"};Y[4]=Ec;var Fc={J:"40004008",A:"40004009"};Y[5]=Fc;Y[7]={J:"44724682",A:"44724683"};Y[9]={J:"44728098",A:"44728099"};Y[10]={J:"44730447",A:"44730448"};var Gc={J:"40004014",A:"40004015"};Y[11]=Gc;var Hc={Ga:1,Ca:4,Ba:6,Da:8,Ea:9,Fa:10},Ic={1:1,4:4,5:4,7:6,9:8,10:9,11:10};var Jc=function(a,b,c){if(a=a.dcmads&&a.dcmads.expts&&a.dcmads.expts[c]){var d=Y[c],e=[],g=0;for(h in d)e[g++]=d[h];if((c=Ic[c])?b.g.hasOwnProperty(c)&&""==b.g[c]:1){var f;if(null===Ub){Ub="";try{var h="";try{h=u.top.location.hash}catch(k){h=u.location.hash}h&&(Ub=(f=h.match(/\bdeid=([\d,]+)/))?f[1]:"")}catch(k){}}f=(f=Ub)?(f=f.match(new RegExp("\\b("+e.join("|")+")\\b")))?f[0]:null:null;if(f)a=f;else if(Tb)a=null;else b:{if(!yb()&&!xb()&&(f=Math.random(),f<a)){f=ub();a=e[Math.floor(f*e.length)];
break b}a=null}a&&Wb(b,a,c)}}};function Kc(a,b){if(b&&b.split){b=b.split(",");for(var c=0;c<b.length;++c){var d=b[c].split("|");1<d.length?Wb(a,d[1],d[0]):Wb(a,d[0])}}};var Lc=function(a){var b=this,c=3===a?"":"dc_";this.i={};var d=function(e){b.i[e]=!0;return e};this.l=d("addtl_consent");this.C=d(c+"adk");this.D=d("amp");this.appId=d(c+"msid");this.F=d(2===a?"chd":"tfcd");this.h=d("click");this.G=d("cesc");this.H=d("uach");this.K=d("cmpl");this.m=d("gcsr");this.L=d("crlt");this.O=d("xdt");this.P=d("mtfIFPath");this.U=d("dsmd");this.g=d("dcopt");this.V=d("deal_id");this.u=d("u_sd");this.W=d("mtfIFrameRequest");this.X=d("dv3_deal");this.Y=d(c+"eid");this.Z=d(c+"xid");
this.v=d("gdpr_consent");this.gdprApplies=d("gdpr");this.height=d("h");this.$=d("pc");this.aa=d("dcapp");this.ba=d("kw");this.ca=d("mtfLeft");this.da=d(1===a?c+"lat":"lat");this.ea=d("ltd");this.fa=d("msdk");this.ga=d("mtfBottomFloat");this.ha=d("mtfLeftFloat");this.ia=d("mtfRightFloat");this.T=d("mtfTopFloat");d("npa");this.B=d("nel");this.ja=d(c+"omid_p");this.ka=d("ord");d("osdl");this.la=d("osda");this.ma=d("output");this.na=d("pdid");this.oa=d("pdidtype");this.pa=d("prcl");this.qa=d(c+"ref");
this.ra=d(c+"rxp");this.sa=d(c+"rdid");this.ta=d("sttr");this.ua=d(c+"sdk_apis");this.size=d("sz");this.va=d(3===a?"insv":"dc_ver");this.wa=d("mtfTop");this.xa=d("url");this.j=d(c+"rfl");this.ya=d("tfua");this.za=d("u");this.width=d("w")};Lc.prototype.has=function(a){return!!this.i[a]};var Mc=/^data-d([bc]m|v3)-.+/i,Nc=/^https?%3A.+/i,Oc=/^N\d+\.[A-Za-z0-9._-]*[A-Za-z0-9_-]\.?\/B\d+\.\d+/,Pc=function(a,b){var c=b.attributes;a.g={};for(var d=0;d<c.length;d++){var e=c[d].name;if(Mc.test(e)){var g=e.toLowerCase();e=0==g.indexOf("data-dcm-param-")?"data-dcm-param-"+e.substring(15):g}else e=null;e&&(g=c[d].value,g=null!=g?g:"","data-dcm-click-tracker"==e&&(g=Nc.test(g)?decodeURIComponent(g):g),a.g[e]=g)}c=a.g["data-dcm-placement"];e=a.g["data-dbm-deal"];g=a.g["data-dv3-deal"];c||e||
g||Dc("No placement or deal attribute set on ins tag");d=a.g["data-dcm-rendering-mode"];c?(a.h=1,(e=Oc.exec(c))||Dc("Invalid placement: "+c),a.C=e[0]):g?(a.h=3,a.l=g):(a.h=2,a.l=e);a.i=new Lc(a.h);switch(d){case "iframe":a.v="iframe";break;case "script":a.v="script";break;default:a.v=2===a.h?"script":"iframe"}a.O=b;c=b.style;d={};try{d=(u.getComputedStyle?u.getComputedStyle(b,null):b.currentStyle)||{}}catch(f){}if(b=Cb(c.width)||Cb(d.width))a.width=Math.round(b);if(b=Cb(c.height)||Cb(d.height))a.height=
Math.round(b)};function Qc(a,b,c,d,e){try{for(var g=[],f,h=0;(f=c(a))&&a!=b&&100>++h;){for(var k=null,l=d(f),p=0,n=0;n<l.length;++n){if(l[n]==a){k=n-p;break}e(l[n])&&++p}if(null===k)return null;g.unshift(k);a=f}return g}catch(t){return null}}function Rc(a){return Qc(a,a.top,function(b){try{return b.parent}catch(c){return null}},function(b){return b.frames},function(){return!1})}
function Sc(a){return Qc(a,document.documentElement,function(b){return b.parentElement},function(b){return b.children},function(b){return 8==b.nodeType})};var Tc=/https?:\/\/d-\d+\.ampproject\.net/;function Uc(a){return"data-dcm-http-only"in a?"http:":"https:"}function Vc(a,b,c){for(var d=0;d<c.length;d++){var e=c[d];R(a,e.priority,Wc(b,e))}}function Wc(a,b){a=a[b.o];var c=b.N;if(null==a||!c&&0==a.length||null!=b.S&&a===b.S)return[];var d={};d[b.s]=null!=c?c:a;return[d]}function Xc(a,b,c){a=a[b];if(!a)return[];a=String(a).toLowerCase();b={};if("1"==a||"true"==a)b[c]="1";return b[c]?[b]:[]}
function Yc(a,b,c,d){var e,g=!1,f=0,h=a.__cmp?1:0;h|=a.__tcfapi?2:0;sb(function(t){Eb(t,"google_osd_static_frame")&&(f=t==a.top?2:1);Eb(t,"__cmpLocator")&&(h|=4);Eb(t,"__tcfapiLocator")&&(h|=8);if(!Q(t))return!1;if(t.mraid)try{e=t.mraid.getVersion()}catch(q){}t.MRAID_ENV&&(e=t.MRAID_ENV.version||void 0,c.F=t.MRAID_ENV.sdk||void 0);t.omid_v1_present&&(g=!0);return!1},a);var k=[];if(e){var l=e.split(".")[0];"2"==l?k.push(5):"3"==l&&k.push(6);c.F&&S(b,43,d.fa,c.F)}g&&k.push(7);if(l=c.g["data-dcm-api-frameworks"]){l=
l.split?l.split(","):[l];for(var p=0;p<l.length;++p){var n=+l[p];0<n&&-1===k.indexOf(n)&&k.push(n)}}0<k.length&&S(b,41,d.ua,k);f&&S(b,48,d.la,f);h&&S(b,45,d.K,h)};var Zc=/^(?:https?:)?\/\/ad\.doubleclick\.net(?:\/ddm)?\/ad[ij]\/(N[^;]+)/,$c=/(^| )dcmads( |$)/;P(function(){var a=(a=u.goog_osd_adp)&&"function"===typeof a.getOseId?a:null;return null==a?u.goog_osd_adp=new T:a});
function ad(a,b){var c=a.document;Tb=!1;var d=new Vb;for(g in Hc)d.g[Hc[g]]="";try{Kc(d,a.dcmads&&a.dcmads.eids);var e=/.*#.*eids=([0-9,|]+)/.exec(a.location.href);e&&Kc(d,e[1])}catch(q){}Jc(a,d,1);Jc(a,d,5);Jc(a,d,9);b.u=d;b.L=!!a.dcmads.version.experiment;b.P=a.dcmads.startTime||0;b.version="71."+(a.dcmads.version.loader||"?");b.m=a.goog_ddm_ps;if(!bd(b.m)){b.m={};var g=[u.top];d=[];e=0;for(var f;f=g[e++];){!Q(f)||d.push(f);try{if(f.frames)for(var h=f.frames.length,k=0;k<h&&1024>g.length;++k)g.push(f.frames[k])}catch(q){}}for(h=
0;h<d.length;++h)if(g=d[h].goog_ddm_ps,bd(g)){b.m.corr=g.corr;break}if(!bd(b.m)){h="";for(d=0;10>d;++d)h+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_.!*'()"[Math.floor(70*Math.random())];b.m.corr=h}a.goog_ddm_ps=b.m}if(!c.body){if(!hb.test("b"))throw Error("");if("B"in jb)throw Error("");h={style:{display:"none"}};d=null;g="";if(h)for(n in h)if(Object.prototype.hasOwnProperty.call(h,n)){if(!hb.test(n))throw Error("");f=h[n];if(null!=f){e=n;k=f;if(k instanceof z)k=A(k);else if("style"==
e.toLowerCase()){f=void 0;if(!pa(k))throw Error("");if(!(k instanceof K)){var l="";for(f in k)if(Object.prototype.hasOwnProperty.call(k,f)){if(!/^[-_a-zA-Z0-9]+$/.test(f))throw Error("Name allows only [-_a-zA-Z0-9], got: "+f);var p=k[f];null!=p&&(p=Array.isArray(p)?C(p,cb).join(" "):cb(p),l+=f+":"+p+";")}k=l?new K(l,Va):Wa}k=k instanceof K&&k.constructor===K?k.h:"type_error:SafeStyle"}else{if(/^on/i.test(e))throw Error("");if(e.toLowerCase()in ib)if(k instanceof F)k=G(k).toString();else if(k instanceof
J)k=Pa(k);else if("string"===typeof k)k=(Ta(k)||Ua).g();else throw Error("");}k.I&&(k=k.g());e=e+'="'+Oa(String(k))+'"';g+=" "+e}}var n="<b"+g;g="_";null==g?g=[]:Array.isArray(g)||(g=[g]);!0===Aa.b?n+=">":(d=mb(g),n+=">"+N(d).toString()+"</b>",d=d.h());(h=h&&h.dir)&&(/^(ltr|rtl|auto)$/i.test(h)?d=0:d=null);n=O(n,d);c.write(N(n));c.body||Dc("Body element does not exist")}c=c.getElementsByClassName?c.getElementsByClassName("dcmads"):c.getElementsByTagName("ins");for(n=0;n<c.length;n++)if(h=c[n],(h.getAttribute("data-dcm-placement")||
h.getAttribute("data-dbm-deal")||h.getAttribute("data-dv3-deal"))&&$c.test(h.className)&&!h.getAttribute("data-dcm-processed")){var t=h;t.setAttribute("data-dcm-processed","y");break}t?cd(a,t,b):Dc("No ad ins element found")}function bd(a){return pa(a)&&!!a.corr}function dd(a,b,c){b.version?(c.rm=b.v||"",c.mode=b.h?b.h+"":"0",b.C?c.plcmt=b.C||"":b.l&&(c.deal=b.l||""),ed(c,b)):(c.ver="71."+(a.dcmads.version.loader||"?"),c.rm="",c.mode="0")}
function ed(a,b){a.ver=b.version;b.L&&(a.rxp=1);(b=b.u&&Yb(b.u))&&b.length&&(a.eids=b)}function fd(a,b){if(!a)return null;a=a.split(b+"=");a=a[1]||a[0];return(new RegExp("\\${"+b+"(_[0-9]+)?}","i")).test(a)?null:a}
function gd(a,b){var c=fd(b.g["data-dcm-gdpr-consent"],"gdpr_consent");c&&(b.j=c,b.B="m");c=fd(b.g["data-dcm-gdpr-applies"],"gdpr");/[01]/.test(c)&&(b.gdprApplies=c,b.B="m");if(c=fd(b.g["data-dcm-additional-consent"],"addtl_consent"))b.D=c;if(b.j||null!=b.gdprApplies)return null;a=new U(a);return"function"===typeof a.h.__tcfapi||null!=xc(a)?a:null}
function cd(a,b,c){Pc(c,b);hd(a,c);var d=gd(a,c);d?wc(d).then(function(e){null!=e.gdprApplies&&(c.gdprApplies=e.gdprApplies?"1":"0");c.j=e.tcString||null;"1"!==c.gdprApplies||c.j||(c.j="tcunavailable");c.D=e.addtlConsent||null;c.B="a";id(a,b,c,!0)}).catch(function(e){ac.g(672,e,void 0,qa(dd,a,c))}):id(a,b,c)}
function id(a,b,c,d){d=void 0===d?!1:d;c.G=a.dcmads.uach||null;var e=new Mb(1===c.h?";":void 0,void 0,15360);var g=c.i;var f=c.g;var h=c.i,k=f["data-dcm-click-tracker"];if(null==k)f=[];else{var l=f["data-dcm-landing-page-escapes"]||"";"0"!==l&&"1"!==l&&"2"!==l&&(l="");var p={};3===c.h?(p[h.h]=k,p[h.G]=l):p[h.h+l]=k;null!=f["data-dcm-reverse-click-tracker"]&&(p[h.g]="rcl");f=[p]}R(e,33,f);S(e,44,g.L,c.m.corr);f=c.g;h=[];for(var n in f)0==n.indexOf("data-dcm-param-")&&h.push(n);if(0==h.length)f=[];
else{n=[];h.sort();for(k=0;k<h.length;k++){if(0<n.length){l=void 0;p=n[0];var t={};for(l in p)t[l]=p[l];l=t}else l={};p=h[k];(t=encodeURIComponent(p.substring(15)))&&!c.i.has(t)&&(l[t]=f[p],n.unshift(l))}f=n}R(e,26,f);b:{c:{var q=void 0===q?u:q;f=q.context||q.AMP_CONTEXT_DATA;if(!f)try{f=q.parent.context||q.parent.AMP_CONTEXT_DATA}catch(md){}try{if(f&&f.pageViewId&&f.canonicalUrl){var m=f;break c}}catch(md){}m=null}if(m)m=!0;else{m=c.H;for(q=0;q<m.length;q++)if(Tc.test(m[q].url)){m=!0;break b}m=!1}}m&&
S(e,47,g.D,"1");m=Q(a.top)?0:1;S(e,39,g.O,m);m=Yb(c.u);m.length&&S(e,4,g.Y,m);c.L&&S(e,3,g.ra,"1");S(e,2,g.va,c.version);(m=c.P)?(m=(new Date).getTime()-m,99999<m&&(m="M")):m="";S(e,49,g.ta,m);Yc(a,e,c,g);m=u.devicePixelRatio;(m="number"===typeof m?+m.toFixed(3):null)&&S(e,13,g.u,m);(m=c.g["data-dcm-ssaid"])?(q={},q[c.i.na]=m,q[c.i.oa]="ssaid",m=[q]):m=[];R(e,30,m);c.G&&S(e,35,g.H,c.G);1===c.h?S(e,5,"sz",c.width&&c.height?c.width+"x"+c.height:""):(S(e,1,g.ma,"iframe"==c.v?"html":"js"),m={},m[g.width]=
c.width,m[g.height]=c.height,R(e,5,[m]));m=g.C;f=c.O;q=Rc(a)||["?"];f=Sc(f)||["?"];q=q.join(",")+":"+f.join(",");f=q.length;if(0==f)q=0;else{h=305419896;for(n=0;n<f;n++)h^=(h<<5)+(h>>2)+q.charCodeAt(n)&4294967295;q=0<h?h:4294967296+h}S(e,31,m,q);m=u.navigator;m.connection&&m.connection.saveData&&S(e,42,g.U,"1");Vc(e,c.g,[{priority:38,o:"data-dcm-app-id",s:g.appId},{priority:37,o:"data-dcm-publisher-url",s:g.qa},{priority:25,o:"data-dcm-keywords",s:g.ba},{priority:29,o:"data-dcm-impression-exchange-id",
s:g.$},{priority:40,o:"data-dcm-omid-partner",s:g.ja,S:"[OMIDPARTNER]"}]);R(e,14,Xc(c.g,"data-dcm-underage",g.ya));R(e,15,Xc(c.g,"data-dcm-child-directed",g.F));R(e,23,Xc(c.g,"data-dcm-limited-ads",g.ea));if(2===c.h||"https:"==Uc(c.g))R(e,22,Xc(c.g,"data-dcm-limit-ad-tracking",g.da)),R(e,21,Wc(c.g,{o:"data-dcm-resettable-device-id",s:g.sa}));c.j&&S(e,16,g.v,c.j);null!=c.gdprApplies&&S(e,17,g.gdprApplies,c.gdprApplies);c.B&&S(e,46,g.m,c.B);c.D&&S(e,18,g.l,c.D);c.K&&S(e,20,g.B,"1");if(2===c.h){var w=
c.i;S(e,0,w.V,c.l);var v=Kb(c.H);S(e,36,w.xa,v.h?v.h.url:v.g.url)}else g=c.i,m=pc(c.H),1===c.h?R(e,36,qc(g.j,m)):(S(e,0,g.X,c.l),R(e,36,qc(g.j,rc(m)))),m=c.g,q="","data-dcm-http-only"in m&&(q+="h"),"data-dcm-https-only"in m&&(q+="s"),""==q&&(q="n"),S(e,50,g.pa,q),S(e,32,g.ka,("00000"+Math.floor(Math.random()*Math.pow(36,6)).toString(36)).slice(-6)),m=c.g,"data-dcm-multi-bottom-float"in m?(w=c.i.ga,v=m["data-dcm-multi-bottom-float"]):"data-dcm-multi-left-float"in m?(w=c.i.ha,v=m["data-dcm-multi-left-float"]):
"data-dcm-multi-right-float"in m?(w=c.i.ia,v=m["data-dcm-multi-right-float"]):"data-dcm-multi-top-float"in m&&(w=c.i.T,v=m["data-dcm-multi-top-float"]),w&&v&&(v=v.split?v.split(","):v,S(e,11,w,v)),Vc(e,c.g,[{priority:27,o:"data-dcm-anonymous-inventory",s:g.g,N:"anid"},{priority:8,o:"data-dcm-disable-iframe-breakout",s:g.W,N:"false"},{priority:7,o:"data-dcm-dart-iframe-path",s:g.P},{priority:24,o:"data-dcm-external-id",s:g.Z},{priority:34,o:"data-dcm-in-app",s:g.aa,N:"1"},{priority:6,o:"data-dcm-interstitial",
s:g.g,N:"1_ist"},{priority:9,o:"data-dcm-left-float",s:g.ca},{priority:10,o:"data-dcm-top-float",s:g.wa},{priority:28,o:"data-dcm-user-defined",s:g.za}]);2===c.h?e=Rb(e,"https:","bid.g.doubleclick.net","/xbbe/bid/xpub?"):(w=Uc(c.g),e=3===c.h?Rb(e,w,"ad.doubleclick.net","/dv3/ad?"):Rb(e,w,"ad.doubleclick.net","/ddm/"+("script"==c.v?"adj":"adi")+"/"+c.C+";"));v=e;if(1===c.h&&!Zc.test(v))throw Error("Invalid tag URL: "+v);e=a.document;if("script"==c.v)if(w=Xb(c.u,4),v='<script src="'+v+'">\x3c/script>',
jd(a,c),w===Ec.A||w===Fc.A||d){var E=kd(e);b.appendChild(E);e=E;d="<body>"+v+"</body>";if(Bc)e.srcdoc=d;else if(e=e.contentWindow)e=e.document,e.open("text/html","replace"),d=O(d,null),e.write(N(d)),e.close()}else 1<b.children.length||1==b.children.length&&"b"==b.children[0].tagName.toLowerCase()||(b.style.display="none"),d=O(v,null),e.write(N(d));else E=kd(e),E.src=v,jd(a,c,E),b.appendChild(E);E&&Fb(a,E);b.style.textDecoration="none";"iP"===(a.navigator&&a.navigator.platform||"").substr(0,2)&&"Google Mobile Ads"===
c.F&&(b.style.display="block",Q(a.top)&&a.top.document&&a.top.document.body&&(a.top.document.body.style.margin="0"))}
function jd(a,b,c){Q(a.top)&&/Chrome/.test(a.navigator.userAgent)&&(Jc(a,b.u,11),Xb(b.u,10)===Gc.A&&(b.K=!0,a=a.top.document,a=void 0===a?window.document:a,a.head&&(b=document.createElement("meta"),b.httpEquiv="origin-trial",b.content="AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",a.head.appendChild(b)),
c&&(c.allow="conversion-measurement 'src'")))}function kd(a){a=a.createElement("iframe");var b=a.style;b.width="100%";b.height="100%";b.border="0";b.margin="0";b.padding="0";a.marginWidth="0";a.marginHeight="0";a.scrolling="no";a.frameBorder="0";a.title="advertisement";return a}
function hd(a,b){if(a.ReportingObserver){var c=function(e){e=ea(e);for(var g=e.next();!g.done;g=e.next()){var f=g.value;g=f.type;(f=f.body)&&"intervention"===g&&(g={t:g,rid:f.id,tm:b.h,inv:1===b.h?b.C:b.l,ln:f.lineNumber,cn:f.columnNumber,src:f.sourceFile,msg:f.message},ed(g,b),Sb(Zb,"dcmror",g,.1))}},d=new a.ReportingObserver(c,{buffered:!0});d.observe();a.addEventListener("unload",function(){c(d.takeRecords());d.disconnect()})}};var Z=window;Z.dcmads=Z.dcmads||{};Z.dcmads.version=Z.dcmads.version||{};var ld=new function(){this.l=this.C=null;this.H=Hb();this.G=this.F=this.D=this.B=this.j=this.gdprApplies=null;this.K=!1};(function(a){return function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return cc(function(){return ad.apply(void 0,c)},a)}})(qa(dd,Z,ld))(Z,ld);}).call(this);