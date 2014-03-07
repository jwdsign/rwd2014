(function(){var e,t,n=Function.prototype.call,r=Array.prototype,i=Object.prototype,s=r.slice;if(Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=s.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,u=t.apply(o,n.concat(s.call(arguments)));return null!==u&&Object(u)===u?u:o}return t.apply(e,n.concat(s.call(arguments)))};return r}),t=n.bind(i.toString),e=n.bind(i.hasOwnProperty),Array.isArray||(Array.isArray=function(e){return"[object Array]"==t(e)}),Array.prototype.forEach||(Array.prototype.forEach=function(e){var n=y(this),r=arguments[1],i=0,s=n.length>>>0;if("[object Function]"!=t(e))throw new TypeError;for(;s>i;)i in n&&e.call(r,n[i],i,n),i++}),Array.prototype.map||(Array.prototype.map=function(e){var n=y(this),r=n.length>>>0,i=Array(r),s=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var o=0;r>o;o++)o in n&&(i[o]=e.call(s,n[o],o,n));return i}),Array.prototype.filter||(Array.prototype.filter=function(e){var n=y(this),r=n.length>>>0,i=[],s=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var o=0;r>o;o++)o in n&&e.call(s,n[o],o,n)&&i.push(n[o]);return i}),Array.prototype.every||(Array.prototype.every=function(e){var n=y(this),r=n.length>>>0,i=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var s=0;r>s;s++)if(s in n&&!e.call(i,n[s],s,n))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(e){var n=y(this),r=n.length>>>0,i=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var s=0;r>s;s++)if(s in n&&e.call(i,n[s],s,n))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var n=y(this),r=n.length>>>0;if("[object Function]"!=t(e))throw new TypeError;if(!r&&1==arguments.length)throw new TypeError;var i,s=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(s in n){i=n[s++];break}if(++s>=r)throw new TypeError}for(;r>s;s++)s in n&&(i=e.call(void 0,i,n[s],s,n));return i}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(e){var n=y(this),r=n.length>>>0;if("[object Function]"!=t(e))throw new TypeError;if(!r&&1==arguments.length)throw new TypeError;var i,s=r-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(s in n){i=n[s--];break}if(0>--s)throw new TypeError}do s in this&&(i=e.call(void 0,i,n[s],s,n));while(s--);return i}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=y(this),n=t.length>>>0;if(!n)return-1;var r=0;for(arguments.length>1&&(r=m(arguments[1])),r=r>=0?r:n-Math.abs(r);n>r;r++)if(r in t&&t[r]===e)return r;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(e){var t=y(this),n=t.length>>>0;if(!n)return-1;var r=n-1;for(arguments.length>1&&(r=m(arguments[1])),r=r>=0?r:n-Math.abs(r);r>=0;r--)if(r in t&&e===t[r])return r;return-1}),2!=[1,2].splice(0).length){var o=Array.prototype.splice;Array.prototype.splice=function(e,t){return arguments.length?o.apply(this,[e===void 0?0:e,t===void 0?this.length-e:t].concat(s.call(arguments,2))):[]}}if(!Object.keys){var u=!0,a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=a.length;for(var l in{toString:null})u=!1;Object.keys=function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");var n=[];for(var r in t)e(t,r)&&n.push(r);if(u)for(var i=0,s=f;s>i;i++){var o=a[i];e(t,o)&&n.push(o)}return n}}Date.prototype.toISOString||(Date.prototype.toISOString=function(){var e,t,n;if(!isFinite(this))throw new RangeError;for(e=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],t=e.length;t--;)n=e[t],10>n&&(e[t]="0"+n);return e.slice(0,3).join("-")+"T"+e.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}),Date.now||(Date.now=function(){return(new Date).getTime()}),Date.prototype.toJSON||(Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()});var c="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||c.trim()){c="["+c+"]";var h=RegExp("^"+c+c+"*"),p=RegExp(c+c+"*$");String.prototype.trim=function(){return(this+"").replace(h,"").replace(p,"")}}if("0".split(void 0,0).length){var d=String.prototype.split;String.prototype.split=function(e,t){return e===void 0&&0===t?[]:d.apply(this,arguments)}}if("".substr&&"b"!=="0b".substr(-1)){var v=String.prototype.substr;String.prototype.substr=function(e,t){return v.call(this,0>e?0>(e=this.length+e)?0:e:e,t)}}var m=function(e){return e=+e,e!==e?e=-1:0!==e&&e!==1/0&&e!==-1/0&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},g="a"!="a"[0],y=function(e){if(null==e)throw new TypeError;return g&&"string"==typeof e&&e?e.split(""):Object(e)}})(),function(e,t){var n="defineProperty",r=!!(Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor);if(r&&Object[n]&&Object.prototype.__defineGetter__&&function(){try{var e=document.createElement("foo");Object[n](e,"bar",{get:function(){return!0}}),r=!!e.bar}catch(t){r=!1}e=null}(),Modernizr.objectAccessor=!!(r||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__),Modernizr.advancedObjectProperties=r,!(r&&Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor&&Object.defineProperty)){var i=Function.prototype.call,s=Object.prototype,o=i.bind(s.hasOwnProperty);t.objectCreate=function(n,r,i,s){var o,u=function(){};return u.prototype=n,o=new u,s||"__proto__"in o||Modernizr.objectAccessor||(o.__proto__=n),r&&t.defineProperties(o,r),i&&(o.options=e.extend(!0,{},o.options||{},i),i=o.options),o._create&&e.isFunction(o._create)&&o._create(i),o},t.defineProperties=function(e,n){for(var r in n)o(n,r)&&t.defineProperty(e,r,n[r]);return e},t.defineProperty=function(e,t,n){return"object"!=typeof n||null===n?e:o(n,"value")?(e[t]=n.value,e):(e.__defineGetter__&&("function"==typeof n.get&&e.__defineGetter__(t,n.get),"function"==typeof n.set&&e.__defineSetter__(t,n.set)),e)},t.getPrototypeOf=function(e){return Object.getPrototypeOf&&Object.getPrototypeOf(e)||e.__proto__||e.constructor&&e.constructor.prototype},t.getOwnPropertyDescriptor=function(e,t){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var n;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return n=Object.getOwnPropertyDescriptor(e,t)}catch(r){}n={configurable:!0,enumerable:!0,writable:!0,value:void 0};var i=e.__lookupGetter__&&e.__lookupGetter__(t),s=e.__lookupSetter__&&e.__lookupSetter__(t);if(!i&&!s){if(!o(e,t))return;return n.value=e[t],n}return delete n.writable,delete n.value,n.get=n.set=void 0,i&&(n.get=i),s&&(n.set=s),n}}}(webshims.$,webshims),webshims.register("dom-extend",function(e,t,n,r,i){"use strict";var s=!("hrefNormalized"in e.support)||e.support.hrefNormalized,o=!("getSetAttribute"in e.support)||e.support.getSetAttribute;if(t.assumeARIA=o||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!t.cfg.no$Switch){var u=function(){if(!n.jQuery||n.$&&n.jQuery!=n.$||n.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),n.$&&(n.$=t.$),n.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};u(),setTimeout(u,90),t.ready("DOM",u),e(u),t.ready("WINDOWLOAD",u)}var a=t.modules,f=/\s*,\s*/,l={},c={},h={},p={},d={},v=e.fn.val,m=function(t,n,r,i,s){return s?v.call(e(t)):v.call(e(t),r)};e.widget||function(){var t=e.cleanData;e.cleanData=function(n){if(!e.widget)for(var r,i=0;null!=(r=n[i]);i++)try{e(r).triggerHandler("remove")}catch(s){}t(n)}}(),e.fn.val=function(t){var n=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return n&&1===n.nodeType?e.prop(n,"value",t,"val",!0):v.call(this);if(e.isArray(t))return v.apply(this,arguments);var r=e.isFunction(t);return this.each(function(s){if(n=this,1===n.nodeType)if(r){var o=t.call(n,s,e.prop(n,"value",i,"val",!0));null==o&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,n,i,s){return s||(s=r),e(s)[i?"onTrigger":"on"](t,n),this.on("remove",function(r){r.originalEvent||e(s).off(t,n)}),this};var g="_webshimsLib"+Math.round(1e3*Math.random()),y=function(t,n,r){if(t=t.jquery?t[0]:t,!t)return r||{};var s=e.data(t,g);return r!==i&&(s||(s=e.data(t,g,{})),n&&(s[n]=r)),n?s&&s[n]:s};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var n=[];return this.each(function(){var r=y(this,"shadowData"),i=r&&r[t.prop]||this;-1==e.inArray(i,n)&&n.push(i)}),this.pushStack(n)}}),["removeAttr","prop","attr"].forEach(function(n){l[n]=e[n],e[n]=function(t,r,s,o,u){var a="val"==o,f=a?m:l[n];if(!t||!c[r]||1!==t.nodeType||!a&&o&&"attr"==n&&e.attrFn[r])return f(t,r,s,o,u);var p,v,g,y=(t.nodeName||"").toLowerCase(),b=h[y],w="attr"!=n||s!==!1&&null!==s?n:"removeAttr";if(b||(b=h["*"]),b&&(b=b[r]),b&&(p=b[w]),p){if("value"==r&&(v=p.isVal,p.isVal=a),"removeAttr"===w)return p.value.call(t);if(s===i)return p.get?p.get.call(t):p.value;p.set&&("attr"==n&&s===!0&&(s=r),g=p.set.call(t,s)),"value"==r&&(p.isVal=v)}else g=f(t,r,s,o,u);if((s!==i||"removeAttr"===w)&&d[y]&&d[y][r]){var E;E="removeAttr"==w?!1:"prop"==w?!!s:!0,d[y][r].forEach(function(e){(!e.only||(e.only="prop"==n)||"attr"==e.only&&"prop"!=n)&&e.call(t,s,E,a?"val":w,n)})}return g},p[n]=function(e,r,s){h[e]||(h[e]={}),h[e][r]||(h[e][r]={});var o=h[e][r][n],u=function(e,t,i){return t&&t[e]?t[e]:i&&i[e]?i[e]:"prop"==n&&"value"==r?function(e){var t=this;return s.isVal?m(t,r,e,!1,0===arguments.length):l[n](t,r,e)}:"prop"==n&&"value"==e&&s.value.apply?function(){var e=l[n](this,r);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[n](this,r,e)}};h[e][r][n]=s,s.value===i&&(s.set||(s.set=s.writeable?u("set",s,o):t.cfg.useStrict&&"prop"==r?function(){throw r+" is readonly on "+e}:function(){t.info(r+" is readonly on "+e)}),s.get||(s.get=u("get",s,o))),["value","get","set"].forEach(function(e){s[e]&&(s["_sup"+e]=u(e,o))})}});var b=function(){var e=t.getPrototypeOf(r.createElement("foobar")),n=Object.prototype.hasOwnProperty,i=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(s,o,u){var a,f;if(!(i&&(a=r.createElement(s))&&(f=t.getPrototypeOf(a))&&e!==f)||a[o]&&n.call(a,o))u._supvalue=function(){var e=y(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},w.extendValue(s,o,u.value);else{var l=a[o];u._supvalue=function(){return l&&l.apply?l.apply(this,arguments):l},f[o]=u.value}u.value._supvalue=u._supvalue}}(),w=function(){var n={};t.addReady(function(r,s){var o={},u=function(t){o[t]||(o[t]=e(r.getElementsByTagName(t)),s[0]&&e.nodeName(s[0],t)&&(o[t]=o[t].add(s)))};e.each(n,function(e,n){return u(e),n&&n.forEach?(n.forEach(function(t){o[e].each(t)}),i):(t.warn("Error: with "+e+"-property. methods: "+n),i)}),o=null});var s,o=e([]),u=function(t,i){n[t]?n[t].push(i):n[t]=[i],e.isDOMReady&&(s||e(r.getElementsByTagName(t))).each(i)};return{createTmpCache:function(t){return e.isDOMReady&&(s=s||e(r.getElementsByTagName(t))),s||o},flushTmpCache:function(){s=null},content:function(t,n){u(t,function(){var t=e.attr(this,n);null!=t&&e.attr(this,n,t)})},createElement:function(e,t){u(e,t)},extendValue:function(t,n,r){u(t,function(){e(this).each(function(){var e=y(this,"propValue",{});e[n]=this[n],this[n]=r})})}}}(),E=function(e,t){e.defaultValue===i&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var r=n.prop("id");return r||(t++,r="ID-"+t,n.eq(0).prop("id",r)),r}}(),implement:function(e,n){var r=y(e,"implemented")||y(e,"implemented",{});return r[n]?(t.warn(n+" already implemented for element #"+e.id),!1):(r[n]=!0,!0)},extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:E,data:y,moveToFirstEvent:function(t,n,r){var i,s=(e._data(t,"events")||{})[n];s&&s.length>1&&(i=s.pop(),r||(r="bind"),"bind"==r&&s.delegateCount?s.splice(s.delegateCount,0,i):s.unshift(i)),t=null},addShadowDom:function(){var i,s,o,u={init:!1,runs:0,test:function(){var e=u.getHeight(),t=u.getWidth();e!=u.height||t!=u.width?(u.height=e,u.width=t,u.handler({type:"docresize"}),u.runs++,9>u.runs&&setTimeout(u.test,90)):u.runs=0},handler:function(t){clearTimeout(i),i=setTimeout(function(){if("resize"==t.type){var i=e(n).width(),a=e(n).width();if(a==s&&i==o)return;s=a,o=i,u.height=u.getHeight(),u.width=u.getWidth()}e(r).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=r.body,i=r.documentElement;u[t]=function(){return Math.max(n["scroll"+e],i["scroll"+e],n["offset"+e],i["offset"+e],i["client"+e])}})},start:function(){!this.init&&r.body&&(this.init=!0,this._create(),this.height=u.getHeight(),this.width=u.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(r).on("updatelayout",this.handler),e(n).bind("resize",this.handler),function(){var t,n=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){u.test()},99),n.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){u.start()})},function(n,r,i){if(n&&r){i=i||{},n.jquery&&(n=n[0]),r.jquery&&(r=r[0]);var s=e.data(n,g)||e.data(n,g,{}),o=e.data(r,g)||e.data(r,g,{}),u={};i.shadowFocusElement?i.shadowFocusElement&&(i.shadowFocusElement.jquery&&(i.shadowFocusElement=i.shadowFocusElement[0]),u=e.data(i.shadowFocusElement,g)||e.data(i.shadowFocusElement,g,u)):i.shadowFocusElement=r,e(n).on("remove",function(t){t.originalEvent||setTimeout(function(){e(r).remove()},4)}),s.hasShadow=r,u.nativeElement=o.nativeElement=n,u.shadowData=o.shadowData=s.shadowData={nativeElement:n,shadowElement:r,shadowFocusElement:i.shadowFocusElement},i.shadowChilds&&i.shadowChilds.each(function(){y(this,"shadowData",o.shadowData)}),i.data&&(u.shadowData.data=o.shadowData.data=s.shadowData.data=i.data),i=null}t.docObserve()}}(),propTypes:{standard:function(e){E(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){E(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=r.createElement("a");return t.style.display="none",function(n,r){E(n),n.prop||(n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n,i=this.getAttribute(r);if(null==i)return"";if(t.setAttribute("href",i+""),!s){try{e(t).insertAfter(this),n=t.getAttribute("href",4)}catch(o){n=t.getAttribute("href",4)}e(t).detach()}return n||t.href}})}}(),enumarated:function(e){E(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(n,r){"string"==typeof r&&(r=r.split(f)),r.forEach(function(r){t.defineNodeNamesProperty(n,r,{prop:{set:function(t){e.attr(this,r,t)},get:function(){return e.attr(this,r)||""}}})})},defineNodeNameProperty:function(n,r,i){return c[r]=!0,i.reflect&&t.propTypes[i.propType||"standard"](i,r),["prop","attr","removeAttr"].forEach(function(s){var o=i[s];o&&(o="prop"===s?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),p[s](n,r,o),"*"!=n&&t.cfg.extendNative&&"prop"==s&&o.value&&e.isFunction(o.value)&&b(n,r,o),i[s]=o)}),i.initAttr&&w.content(n,r),i},defineNodeNameProperties:function(e,n,r,i){for(var s in n)!i&&n[s].initAttr&&w.createTmpCache(e),r&&(n[s][r]||(n[s][r]={},["value","set","get"].forEach(function(e){e in n[s]&&(n[s][r][e]=n[s][e],delete n[s][e])}))),n[s]=t.defineNodeNameProperty(e,s,n[s]);return i||w.flushTmpCache(),n},createElement:function(n,r,i){var s;return e.isFunction(r)&&(r={after:r}),w.createTmpCache(n),r.before&&w.createElement(n,r.before),i&&(s=t.defineNodeNameProperties(n,i,!1,!0)),r.after&&w.createElement(n,r.after),w.flushTmpCache(),s},onNodeNamesPropertyModify:function(t,n,r,i){"string"==typeof t&&(t=t.split(f)),e.isFunction(r)&&(r={set:r}),t.forEach(function(e){d[e]||(d[e]={}),"string"==typeof n&&(n=n.split(f)),r.initAttr&&w.createTmpCache(e),n.forEach(function(t){d[e][t]||(d[e][t]=[],c[t]=!0),r.set&&(i&&(r.set.only=i),d[e][t].push(r.set)),r.initAttr&&w.content(e,t)}),w.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,r,s){s||(s={}),e.isFunction(s)&&(s.set=s),t.defineNodeNamesProperty(n,r,{attr:{set:function(e){this.setAttribute(r,e),s.set&&s.set.call(this,!0)},get:function(){var e=this.getAttribute(r);return null==e?i:r}},removeAttr:{value:function(){this.removeAttribute(r),s.set&&s.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:s.initAttr||!1})},contentAttr:function(e,t,n){if(e.nodeName){var r;return n===i?(r=e.attributes[t]||{},n=r.specified?r.value:null,null==n?i:n):("boolean"==typeof n?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n),i)}},activeLang:function(){var n,r,i=[],s={},o=/:\/\/|^\.*\//,u=function(n,r,i){var s;return r&&i&&-1!==e.inArray(r,i.availabeLangs||[])?(n.loading=!0,s=i.langSrc,o.test(s)||(s=t.cfg.basePath+s),t.loader.loadScript(s+r+".js",function(){n.langObj[r]?(n.loading=!1,l(n,!0)):e(function(){n.langObj[r]&&l(n,!0),n.loading=!1})}),!0):!1},f=function(e){s[e]&&s[e].forEach(function(e){e.callback(n,r,"")})},l=function(e,t){if(e.activeLang!=n&&e.activeLang!==r){var i=a[e.module].options;e.langObj[n]||r&&e.langObj[r]?(e.activeLang=n,e.callback(e.langObj[n]||e.langObj[r],n),f(e.module)):t||u(e,n,i)||u(e,r,i)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],n),f(e.module))}},c=function(t){return"string"==typeof t&&t!==n?(n=t,r=n.split("-")[0],n==r&&(r=!1),e.each(i,function(e,t){l(t)})):"object"==typeof t&&(t.register?(s[t.register]||(s[t.register]=[]),s[t.register].push(t),t.callback(n,r,"")):(t.activeLang||(t.activeLang=""),i.push(t),l(t))),n};return c}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,r,i,s){"string"==typeof e&&(e=e.split(f));var o={};return e.forEach(function(e){o[e]=t[n](e,r,i,s)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(s,o){if(e.each(n,function(t,n){for(var i=e(t,s).add(o.filter(t)),u=0,a=i.length;a>u;u++)r(i[u],n)}),s===t){var u=t.getElementsByTagName("header")[0],a=t.getElementsByTagName("footer"),f=a.length;if(u&&!e(u).closest("section, article")[0]&&r(u,"banner"),!f)return;var l=a[f-1];e(l).closest("section, article")[0]||r(l,"contentinfo")}})}}(webshims.$,document),function(){"JSON"in window&&JSON.stringify&&JSON.parse||(this.JSON||(this.JSON={}),function(){function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o,u=gap,a=t[e];switch(a&&"object"==typeof a&&"function"==typeof a.toJSON&&(a=a.toJSON(e)),"function"==typeof rep&&(a=rep.call(t,e,a)),typeof a){case"string":return quote(a);case"number":return isFinite(a)?a+"":"null";case"boolean":case"null":return a+"";case"object":if(!a)return"null";if(gap+=indent,o=[],"[object Array]"===Object.prototype.toString.apply(a)){for(s=a.length,n=0;s>n;n+=1)o[n]=str(n,a)||"null";return i=0===o.length?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+u+"]":"["+o.join(",")+"]",gap=u,i}if(rep&&"object"==typeof rep)for(s=rep.length,n=0;s>n;n+=1)r=rep[n],"string"==typeof r&&(i=str(r,a),i&&o.push(quote(r)+(gap?": ":":")+i));else for(r in a)Object.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&o.push(quote(r)+(gap?": ":":")+i));return i=0===o.length?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+u+"}":"{"+o.join(",")+"}",gap=u,i}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,!t||"function"==typeof t||"object"==typeof t&&"number"==typeof t.length)return str("",{"":e});throw Error("JSON.stringify")}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&"object"==typeof i)for(n in i)Object.hasOwnProperty.call(i,n)&&(r=walk(i,n),void 0!==r?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}())}(),function(){var e=jQuery;if("localStorage"in window&&"sessionStorage"in window)return e.webshims.isReady("json-storage",!0),void 0;var t,n=function(t){t&&t.indexOf&&-1!=t.indexOf(";")&&setTimeout(function(){e.webshims.warn("Bad key for localStorage: ; in localStorage. name was: "+t)},0)},r=!1;e.each(["opener","top","parent"],function(e,n){try{if(t=window[n],t&&"name"in t)return t.name,!1;t=!1}catch(r){t=!1}}),t||(t=window,r=!0);var i=function(e){if(!r)try{window.name=e}catch(n){}try{t.name=e}catch(n){t=window,r=!0}},s=function(){var e;if(!r)try{e=window.name}catch(n){}if(!e)try{e=t.name}catch(n){t=window,r=!0}return e},o=function(e){function t(e,t,n){var r,i;n?(r=new Date,r.setTime(r.getTime()+864e5*n),i="; expires="+r.toGMTString()):i="",document.cookie=e+"="+t+i+"; path=/"}function r(e){var t,n,r=e+"=",i=document.cookie.split(";");for(t=0;i.length>t;t++){for(n=i[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(r))return n.substring(r.length,n.length)}return null}function o(n){n=JSON.stringify(n),"session"==e?i(n):t("localStorage",n,365)}function u(){"session"==e?i(""):t("localStorage","",365)}function f(){var t;if(t="session"==e?s():r("localStorage"))try{t=JSON.parse(t)}catch(n){t={}}return t||{}}var l=f();return{clear:function(){l={},u()},getItem:function(e){return e in l?l[e]:null},key:function(e){var t=0;for(var n in l){if(t==e)return n;t++}return null},removeItem:function(e){delete l[e],o(l)},setItem:function(e,t){n(e),l[e]=t+"",o(l)}}};"sessionStorage"in window||(window.sessionStorage=new o("session")),function(){var t,r,i,s="(empty string)+1287520303738",u=function(r){clearTimeout(t);var u;return window.localStorage&&("swf"!=r||i&&i.key)?(e.webshims.isReady("json-storage",!0),void 0):("swf"===r&&(i=document.getElementById("swflocalstorageshim"),u=i?typeof i.GetVariable:"undefined","undefined"==u&&(i=document.swflocalstorageshim,u=i?typeof i.GetVariable:"undefined","undefined"==u&&(i=window.localstorageshim,u=i?typeof i.GetVariable:"undefined")),"undefined"!=u&&(window.localStorage={},window.localStorage.clear=function(){i.clear&&i.clear()},window.localStorage.key=function(e){i.key&&i.key(e)},window.localStorage.removeItem=function(e){i.removeItem&&i.removeItem(e)},window.localStorage.setItem=function(e,t){n(e),t+="",t||(t=s),i.setItem&&i.setItem(e,t)},window.localStorage.getItem=function(e){if(!i.getItem)return null;var t=i.getItem(e,t);return t==s&&(t=""),t},e.webshims.log("flash-localStorage was implemented"))),"localStorage"in window||(window.localStorage=new o("local"),e.webshims.warn("implement cookie-localStorage")),e.webshims.isReady("json-storage",!0),void 0)},a=e.webshims.cfg["json-storage"];webshims.swfLocalStorage={show:function(){a.exceededMessage&&e("#swflocalstorageshim-wrapper").prepend('<div class="polyfill-exceeded-message">'+a.exceededMessage+"</div>"),e("#swflocalstorageshim-wrapper").css({top:e(window).scrollTop()+20,left:e(window).width()/2-e("#swflocalstorageshim-wrapper").outerWidth()/2})},hide:function(t){if(e("#swflocalstorageshim-wrapper").css({top:"",left:""}).find("div.polyfill-exceeded-message").remove(),!t){var n=Error("DOMException: QUOTA_EXCEEDED_ERR");throw n.code=22,n.name="DOMException",n}},isReady:u},webshims.ready("DOM swfmini",function(){var n=window.swfmini;r||"localStorage"in window&&document.getElementById("swflocalstorageshim")||(r=!0,n&&n.hasFlashPlayerVersion("8.0.0")?(e("body").append('<div id="swflocalstorageshim-wrapper"><div id="swflocalstorageshim" /></div>'),n.embedSWF(webshims.cfg.basePath+"swf/localStorage.swf"+(webshims.cfg.addCacheBuster||""),"swflocalstorageshim","295","198","8.0.0",null,{allowscriptaccess:"always"},{name:"swflocalstorageshim"},function(e){e.success||window.localStorage||u()}),clearTimeout(t),t=setTimeout(function(){"localStorage"in window||webshims.warn("Add your development-directory to the local-trusted security sandbox: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"),u()},0===location.protocol.indexOf("file")?500:9999)):u())})}()}();