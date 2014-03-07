webshims.register("dom-extend",function(e,t,n,r,i){"use strict";var s=!("hrefNormalized"in e.support)||e.support.hrefNormalized,o=!("getSetAttribute"in e.support)||e.support.getSetAttribute;if(t.assumeARIA=o||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!t.cfg.no$Switch){var u=function(){if(!n.jQuery||n.$&&n.jQuery!=n.$||n.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),n.$&&(n.$=t.$),n.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};u(),setTimeout(u,90),t.ready("DOM",u),e(u),t.ready("WINDOWLOAD",u)}var a=t.modules,f=/\s*,\s*/,l={},c={},h={},p={},d={},v=e.fn.val,m=function(t,n,r,i,s){return s?v.call(e(t)):v.call(e(t),r)};e.widget||function(){var t=e.cleanData;e.cleanData=function(n){if(!e.widget)for(var r,i=0;null!=(r=n[i]);i++)try{e(r).triggerHandler("remove")}catch(s){}t(n)}}(),e.fn.val=function(t){var n=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return n&&1===n.nodeType?e.prop(n,"value",t,"val",!0):v.call(this);if(e.isArray(t))return v.apply(this,arguments);var r=e.isFunction(t);return this.each(function(s){if(n=this,1===n.nodeType)if(r){var o=t.call(n,s,e.prop(n,"value",i,"val",!0));null==o&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,n,i,s){return s||(s=r),e(s)[i?"onTrigger":"on"](t,n),this.on("remove",function(r){r.originalEvent||e(s).off(t,n)}),this};var g="_webshimsLib"+Math.round(1e3*Math.random()),y=function(t,n,r){if(t=t.jquery?t[0]:t,!t)return r||{};var s=e.data(t,g);return r!==i&&(s||(s=e.data(t,g,{})),n&&(s[n]=r)),n?s&&s[n]:s};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var n=[];return this.each(function(){var r=y(this,"shadowData"),i=r&&r[t.prop]||this;-1==e.inArray(i,n)&&n.push(i)}),this.pushStack(n)}}),["removeAttr","prop","attr"].forEach(function(n){l[n]=e[n],e[n]=function(t,r,s,o,u){var a="val"==o,f=a?m:l[n];if(!t||!c[r]||1!==t.nodeType||!a&&o&&"attr"==n&&e.attrFn[r])return f(t,r,s,o,u);var p,v,g,y=(t.nodeName||"").toLowerCase(),b=h[y],w="attr"!=n||s!==!1&&null!==s?n:"removeAttr";if(b||(b=h["*"]),b&&(b=b[r]),b&&(p=b[w]),p){if("value"==r&&(v=p.isVal,p.isVal=a),"removeAttr"===w)return p.value.call(t);if(s===i)return p.get?p.get.call(t):p.value;p.set&&("attr"==n&&s===!0&&(s=r),g=p.set.call(t,s)),"value"==r&&(p.isVal=v)}else g=f(t,r,s,o,u);if((s!==i||"removeAttr"===w)&&d[y]&&d[y][r]){var E;E="removeAttr"==w?!1:"prop"==w?!!s:!0,d[y][r].forEach(function(e){(!e.only||(e.only="prop"==n)||"attr"==e.only&&"prop"!=n)&&e.call(t,s,E,a?"val":w,n)})}return g},p[n]=function(e,r,s){h[e]||(h[e]={}),h[e][r]||(h[e][r]={});var o=h[e][r][n],u=function(e,t,i){return t&&t[e]?t[e]:i&&i[e]?i[e]:"prop"==n&&"value"==r?function(e){var t=this;return s.isVal?m(t,r,e,!1,0===arguments.length):l[n](t,r,e)}:"prop"==n&&"value"==e&&s.value.apply?function(){var e=l[n](this,r);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[n](this,r,e)}};h[e][r][n]=s,s.value===i&&(s.set||(s.set=s.writeable?u("set",s,o):t.cfg.useStrict&&"prop"==r?function(){throw r+" is readonly on "+e}:function(){t.info(r+" is readonly on "+e)}),s.get||(s.get=u("get",s,o))),["value","get","set"].forEach(function(e){s[e]&&(s["_sup"+e]=u(e,o))})}});var b=function(){var e=t.getPrototypeOf(r.createElement("foobar")),n=Object.prototype.hasOwnProperty,i=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(s,o,u){var a,f;if(!(i&&(a=r.createElement(s))&&(f=t.getPrototypeOf(a))&&e!==f)||a[o]&&n.call(a,o))u._supvalue=function(){var e=y(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},w.extendValue(s,o,u.value);else{var l=a[o];u._supvalue=function(){return l&&l.apply?l.apply(this,arguments):l},f[o]=u.value}u.value._supvalue=u._supvalue}}(),w=function(){var n={};t.addReady(function(r,s){var o={},u=function(t){o[t]||(o[t]=e(r.getElementsByTagName(t)),s[0]&&e.nodeName(s[0],t)&&(o[t]=o[t].add(s)))};e.each(n,function(e,n){return u(e),n&&n.forEach?(n.forEach(function(t){o[e].each(t)}),i):(t.warn("Error: with "+e+"-property. methods: "+n),i)}),o=null});var s,o=e([]),u=function(t,i){n[t]?n[t].push(i):n[t]=[i],e.isDOMReady&&(s||e(r.getElementsByTagName(t))).each(i)};return{createTmpCache:function(t){return e.isDOMReady&&(s=s||e(r.getElementsByTagName(t))),s||o},flushTmpCache:function(){s=null},content:function(t,n){u(t,function(){var t=e.attr(this,n);null!=t&&e.attr(this,n,t)})},createElement:function(e,t){u(e,t)},extendValue:function(t,n,r){u(t,function(){e(this).each(function(){var e=y(this,"propValue",{});e[n]=this[n],this[n]=r})})}}}(),E=function(e,t){e.defaultValue===i&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var r=n.prop("id");return r||(t++,r="ID-"+t,n.eq(0).prop("id",r)),r}}(),implement:function(e,n){var r=y(e,"implemented")||y(e,"implemented",{});return r[n]?(t.warn(n+" already implemented for element #"+e.id),!1):(r[n]=!0,!0)},extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:E,data:y,moveToFirstEvent:function(t,n,r){var i,s=(e._data(t,"events")||{})[n];s&&s.length>1&&(i=s.pop(),r||(r="bind"),"bind"==r&&s.delegateCount?s.splice(s.delegateCount,0,i):s.unshift(i)),t=null},addShadowDom:function(){var i,s,o,u={init:!1,runs:0,test:function(){var e=u.getHeight(),t=u.getWidth();e!=u.height||t!=u.width?(u.height=e,u.width=t,u.handler({type:"docresize"}),u.runs++,9>u.runs&&setTimeout(u.test,90)):u.runs=0},handler:function(t){clearTimeout(i),i=setTimeout(function(){if("resize"==t.type){var i=e(n).width(),a=e(n).width();if(a==s&&i==o)return;s=a,o=i,u.height=u.getHeight(),u.width=u.getWidth()}e(r).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=r.body,i=r.documentElement;u[t]=function(){return Math.max(n["scroll"+e],i["scroll"+e],n["offset"+e],i["offset"+e],i["client"+e])}})},start:function(){!this.init&&r.body&&(this.init=!0,this._create(),this.height=u.getHeight(),this.width=u.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(r).on("updatelayout",this.handler),e(n).bind("resize",this.handler),function(){var t,n=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){u.test()},99),n.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){u.start()})},function(n,r,i){if(n&&r){i=i||{},n.jquery&&(n=n[0]),r.jquery&&(r=r[0]);var s=e.data(n,g)||e.data(n,g,{}),o=e.data(r,g)||e.data(r,g,{}),u={};i.shadowFocusElement?i.shadowFocusElement&&(i.shadowFocusElement.jquery&&(i.shadowFocusElement=i.shadowFocusElement[0]),u=e.data(i.shadowFocusElement,g)||e.data(i.shadowFocusElement,g,u)):i.shadowFocusElement=r,e(n).on("remove",function(t){t.originalEvent||setTimeout(function(){e(r).remove()},4)}),s.hasShadow=r,u.nativeElement=o.nativeElement=n,u.shadowData=o.shadowData=s.shadowData={nativeElement:n,shadowElement:r,shadowFocusElement:i.shadowFocusElement},i.shadowChilds&&i.shadowChilds.each(function(){y(this,"shadowData",o.shadowData)}),i.data&&(u.shadowData.data=o.shadowData.data=s.shadowData.data=i.data),i=null}t.docObserve()}}(),propTypes:{standard:function(e){E(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){E(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=r.createElement("a");return t.style.display="none",function(n,r){E(n),n.prop||(n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n,i=this.getAttribute(r);if(null==i)return"";if(t.setAttribute("href",i+""),!s){try{e(t).insertAfter(this),n=t.getAttribute("href",4)}catch(o){n=t.getAttribute("href",4)}e(t).detach()}return n||t.href}})}}(),enumarated:function(e){E(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(n,r){"string"==typeof r&&(r=r.split(f)),r.forEach(function(r){t.defineNodeNamesProperty(n,r,{prop:{set:function(t){e.attr(this,r,t)},get:function(){return e.attr(this,r)||""}}})})},defineNodeNameProperty:function(n,r,i){return c[r]=!0,i.reflect&&t.propTypes[i.propType||"standard"](i,r),["prop","attr","removeAttr"].forEach(function(s){var o=i[s];o&&(o="prop"===s?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),p[s](n,r,o),"*"!=n&&t.cfg.extendNative&&"prop"==s&&o.value&&e.isFunction(o.value)&&b(n,r,o),i[s]=o)}),i.initAttr&&w.content(n,r),i},defineNodeNameProperties:function(e,n,r,i){for(var s in n)!i&&n[s].initAttr&&w.createTmpCache(e),r&&(n[s][r]||(n[s][r]={},["value","set","get"].forEach(function(e){e in n[s]&&(n[s][r][e]=n[s][e],delete n[s][e])}))),n[s]=t.defineNodeNameProperty(e,s,n[s]);return i||w.flushTmpCache(),n},createElement:function(n,r,i){var s;return e.isFunction(r)&&(r={after:r}),w.createTmpCache(n),r.before&&w.createElement(n,r.before),i&&(s=t.defineNodeNameProperties(n,i,!1,!0)),r.after&&w.createElement(n,r.after),w.flushTmpCache(),s},onNodeNamesPropertyModify:function(t,n,r,i){"string"==typeof t&&(t=t.split(f)),e.isFunction(r)&&(r={set:r}),t.forEach(function(e){d[e]||(d[e]={}),"string"==typeof n&&(n=n.split(f)),r.initAttr&&w.createTmpCache(e),n.forEach(function(t){d[e][t]||(d[e][t]=[],c[t]=!0),r.set&&(i&&(r.set.only=i),d[e][t].push(r.set)),r.initAttr&&w.content(e,t)}),w.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,r,s){s||(s={}),e.isFunction(s)&&(s.set=s),t.defineNodeNamesProperty(n,r,{attr:{set:function(e){this.setAttribute(r,e),s.set&&s.set.call(this,!0)},get:function(){var e=this.getAttribute(r);return null==e?i:r}},removeAttr:{value:function(){this.removeAttribute(r),s.set&&s.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:s.initAttr||!1})},contentAttr:function(e,t,n){if(e.nodeName){var r;return n===i?(r=e.attributes[t]||{},n=r.specified?r.value:null,null==n?i:n):("boolean"==typeof n?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n),i)}},activeLang:function(){var n,r,i=[],s={},o=/:\/\/|^\.*\//,u=function(n,r,i){var s;return r&&i&&-1!==e.inArray(r,i.availabeLangs||[])?(n.loading=!0,s=i.langSrc,o.test(s)||(s=t.cfg.basePath+s),t.loader.loadScript(s+r+".js",function(){n.langObj[r]?(n.loading=!1,l(n,!0)):e(function(){n.langObj[r]&&l(n,!0),n.loading=!1})}),!0):!1},f=function(e){s[e]&&s[e].forEach(function(e){e.callback(n,r,"")})},l=function(e,t){if(e.activeLang!=n&&e.activeLang!==r){var i=a[e.module].options;e.langObj[n]||r&&e.langObj[r]?(e.activeLang=n,e.callback(e.langObj[n]||e.langObj[r],n),f(e.module)):t||u(e,n,i)||u(e,r,i)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],n),f(e.module))}},c=function(t){return"string"==typeof t&&t!==n?(n=t,r=n.split("-")[0],n==r&&(r=!1),e.each(i,function(e,t){l(t)})):"object"==typeof t&&(t.register?(s[t.register]||(s[t.register]=[]),s[t.register].push(t),t.callback(n,r,"")):(t.activeLang||(t.activeLang=""),i.push(t),l(t))),n};return c}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,r,i,s){"string"==typeof e&&(e=e.split(f));var o={};return e.forEach(function(e){o[e]=t[n](e,r,i,s)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(s,o){if(e.each(n,function(t,n){for(var u=e(t,s).add(o.filter(t)),a=0,f=u.length;f>a;a++)r(u[a],n)}),s===t){var u=t.getElementsByTagName("header")[0],a=t.getElementsByTagName("footer"),f=a.length;if(u&&!e(u).closest("section, article")[0]&&r(u,"banner"),!f)return;var l=a[f-1];e(l).closest("section, article")[0]||r(l,"contentinfo")}})}}(webshims.$,document);