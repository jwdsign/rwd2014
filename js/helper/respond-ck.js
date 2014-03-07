/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,i=e.createElement("body"),s=e.createElement("div");return s.id="mq-test-1",s.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(s),function(e){return s.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,r),t=42===s.offsetWidth,n.removeChild(i),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict";function t(){E(!0)}var n={};e.respond=n,n.update=function(){};var r=[],i=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),s=function(e,t){var n=i();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},o=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=s,n.queue=r,n.unsupportedmq=o,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var u,a,f,l=e.document,c=l.documentElement,h=[],p=[],d=[],v={},m=30,g=l.getElementsByTagName("head")[0]||c,y=l.getElementsByTagName("base")[0],b=g.getElementsByTagName("link"),w=function(){var e,t=l.createElement("div"),n=l.body,r=c.style.fontSize,i=n&&n.style.fontSize,s=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=s=l.createElement("body"),n.style.background="none"),c.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),s&&c.insertBefore(n,c.firstChild),e=t.offsetWidth,s?c.removeChild(n):n.removeChild(t),c.style.fontSize=r,i&&(n.style.fontSize=i),e=f=parseFloat(e)},E=function(t){var n="clientWidth",r=c[n],i="CSS1Compat"===l.compatMode&&r||l.body[n]||r,s={},o=b[b.length-1],v=(new Date).getTime();if(t&&u&&m>v-u)return e.clearTimeout(a),a=e.setTimeout(E,m),void 0;u=v;for(var y in h)if(h.hasOwnProperty(y)){var S=h[y],x=S.minw,T=S.maxw,N=null===x,C=null===T,L="em";x&&(x=parseFloat(x)*(x.indexOf(L)>-1?f||w():1)),T&&(T=parseFloat(T)*(T.indexOf(L)>-1?f||w():1)),S.hasquery&&(N&&C||!(N||i>=x)||!(C||T>=i))||(s[S.media]||(s[S.media]=[]),s[S.media].push(p[S.rules]))}for(var A in d)d.hasOwnProperty(A)&&d[A]&&d[A].parentNode===g&&g.removeChild(d[A]);d.length=0;for(var O in s)if(s.hasOwnProperty(O)){var M=l.createElement("style"),_=s[O].join("\n");M.type="text/css",M.media=O,g.insertBefore(M,o.nextSibling),M.styleSheet?M.styleSheet.cssText=_:M.appendChild(l.createTextNode(_)),d.push(M)}},S=function(e,t,r){var i=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),s=i&&i.length||0;t=t.substring(0,t.lastIndexOf("/"));var u=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},a=!s&&r;t.length&&(t+="/"),a&&(s=1);for(var f=0;s>f;f++){var l,c,d,v;a?(l=r,p.push(u(e))):(l=i[f].match(n.regex.findStyles)&&RegExp.$1,p.push(RegExp.$2&&u(RegExp.$2))),d=l.split(","),v=d.length;for(var m=0;v>m;m++)c=d[m],o(c)||h.push({media:c.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:p.length-1,hasquery:c.indexOf("(")>-1,minw:c.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:c.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}E()},x=function(){if(r.length){var t=r.shift();s(t.href,function(n){S(n,t.href,t.media),v[t.href]=!0,e.setTimeout(function(){x()},0)})}},T=function(){for(var t=0;t<b.length;t++){var n=b[t],i=n.href,s=n.media,o=n.rel&&"stylesheet"===n.rel.toLowerCase();i&&o&&!v[i]&&(n.styleSheet&&n.styleSheet.rawCssText?(S(n.styleSheet.rawCssText,i,s),v[i]=!0):(!/^([a-zA-Z:]*\/\/)/.test(i)&&!y||i.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===i.substring(0,2)&&(i=e.location.protocol+i),r.push({href:i,media:s})))}x()};T(),n.update=T,n.getEmValue=w,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);