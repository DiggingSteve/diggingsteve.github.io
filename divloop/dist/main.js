!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Div=t()}}(function(){return function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return i(n?n:t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=(t("assert"),function(){function t(e){r(this,t),this.direction=null,this.isEditing=!1,this.hasChild=this.hasChild||!1,this.initDiv(),this.initBtn(),this.organizeDom(e),this.horizontalEvent(),this.verticalEvent(),this.divConfirm()}return t.prototype.organizeDom=function(t){this.div.appendChild(this.div1),this.div1.appendChild(this.border),this.div.appendChild(this.div2),this.div.appendChild(this.btnHorizontal),this.div.appendChild(this.btnVertical),this.div.appendChild(this.btnCancel),t||document.body.appendChild(this.div)},t.prototype.initDiv=function(){this.div=document.createElement("div"),this.div1=document.createElement("div"),this.div2=document.createElement("div"),this.border=document.createElement("div"),this.div.classList.add("father"),this.div1.className="child",this.div2.className="child"},t.prototype.initBtn=function(){this.btnVertical=document.createElement("i"),this.btnHorizontal=document.createElement("i"),this.btnHorizontal.classList.add("iconfont"),this.btnHorizontal.classList.add("icon-hengxian"),this.btnVertical.classList.add("iconfont"),this.btnVertical.classList.add("icon-shu"),this.btnHorizontal.classList.add("btnHorizontal"),this.btnVertical.classList.add("btnVertical"),this.btnCancel=document.createElement("i"),this.btnCancel.classList.add("btnCancel"),this.btnCancel.classList.add("btnCancel"),this.btnCancel.classList.add("iconfont"),this.btnCancel.classList.add("icon-cross")},t.prototype.getOffsetTop=function(t,e){var n=t.offsetParent.className.indexOf("father")!=-1||t.offsetParent.className.indexOf("child")>=0;return e+=t.offsetTop,n?this.getOffsetTop(t.offsetParent,e):e},t.prototype.getOffsetLeft=function(t,e){var n=t.offsetParent.className.indexOf("father")!=-1||t.offsetParent.className.indexOf("child")>=0;return e+=t.offsetLeft,n?this.getOffsetLeft(t.offsetParent,e):e},t.prototype.getRootChild=function(t,e){if(t)return t.div1.getAttribute("dir")==e?t:t.div1.getAttribute("dir")==e&&t.parent&&t.parent.div1.getAttribute("dir")!=e?this.getRootChild(t.parent,e):this.getRootChild(t.parent,e)},t.prototype.borderDrag=function(){var t=this;this.border.onmousedown=function(e){var n=t.div1.getAttribute("dir");if(console.log(n),"v"===n){var r=t.div.clientWidth,i=t.getOffsetLeft(t.div,0);t.verticalDragEvent(r,i)}if("h"==n){var o=t.div1.clientHeight+t.div2.clientHeight+t.border.clientHeight,s=t.getOffsetTop(t.div,0);t.horizontalDragEvent(o,s)}},this.div.onmouseup=function(){t.div.onmousemove=null}},t.prototype.verticalDragEvent=function(t,e){var n=this;this.div.onmousemove=function(r){var i=(r.clientX-e)/t,o=1-i;n.div1.style.width=100*i+"%",n.div2.style.width=100*o+"%",r.stopPropagation()}},t.prototype.horizontalDragEvent=function(t,e){var n=this;this.div.onmousemove=function(r){var i=(r.clientY-e)/t,o=1-i;n.div1.style.height=100*i+"%",n.div2.style.height=100*o+"%",r.stopPropagation()}},t.prototype.cancelEvent=function(){var t=this;this.btnCancel.onclick=function(e){console.log(t.div),t.parent&&t.parent.div.appendChild(t.parent.btnCancel),t.resetChild.apply(t),e.stopPropagation()}},t.prototype.getParentDivObj=function(){return this.hasChild?this.getParentDivObj.apply(this.child1):this},t.prototype.resetChild=function(){this.hasChild&&(this.child1.div.remove(),this.child2.div.remove(),this.div.appendChild(this.btnHorizontal),this.div.appendChild(this.btnVertical),this.border.classList.remove("border-v"),this.border.classList.remove("border-h"),this.div1.style.background="transparent",this.div2.style.background="transparent",this.div1.style.width="100%",this.div2.style.width="100%",this.div1.style.height="100%",this.div2.style.height="100%",this.hasChild=!1,this.btnCancel.style.opacity=0)},t.prototype.horizontalEvent=function(){var t=this;this.btnHorizontal.onclick=function(e){t.isEditing=!0,t.div1.setAttribute("dir","h"),t.border.classList.add("border-h"),t.div.classList.add("cross"),t.direction="horizontal";var n=t.getOffsetTop(t.div,0);t.div.onmousemove=function(e){var r=e.clientY-n,i=t.div.clientHeight,o=r/i,s=1-o;t.div1.style.height=100*o+"%",t.div2.style.height=100*s+"%"},e.stopPropagation()}},t.prototype.verticalEvent=function(){var t=this;this.btnVertical.onclick=function(e){t.isEditing=!0,t.div1.setAttribute("dir","v"),t.border.classList.add("border-v"),t.div.classList.add("cross"),t.direction="vertical";var n=t.getOffsetLeft(t.div,0);t.div.onmousemove=function(e){var r=e.clientX-n,i=t.div.clientWidth,o=r/i,s=1-o;t.div1.style.width=100*o+"%",t.div2.style.width=100*s+"%"},e.stopPropagation()}},t.prototype.divConfirm=function(){var e=this;this.div.onclick=function(n){if(e.div.classList.remove("cross"),e.div.onmousemove=null,e.isEditing){e.div.onmousemove=null;var r=e.randomColor();e.div1.style.background=r,e.div2.style.background=r,"vertical"==e.direction&&(e.div1.style.cssFloat="left",e.div2.style.cssFloat="left"),e.isEditing=!1;var i=new t((!0)),o=new t((!0));e.child1=i,e.child2=o,i.parent=e,o.parent=e,e.div1.appendChild(i.div),e.div2.appendChild(o.div),e.btnVertical.remove(),e.btnHorizontal.remove(),e.hasChild=!0,e.btnCancel.style.opacity="1",e.parent&&e.parent.btnCancel.remove(),e.cancelEvent()}e.borderDrag(),n.stopPropagation()}},t.prototype.randomColor=function(){return"#"+"0123456789abcdef".split("").map(function(t,e,n){return e>5?null:n[Math.floor(16*Math.random())]}).join("")},t}());n["default"]=i},{assert:3}],2:[function(t,e,n){"use strict";e.exports=t("./divloop.js")["default"]},{"./divloop.js":1}],3:[function(t,e,n){(function(n){"use strict";function r(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0}function i(t){return n.Buffer&&"function"==typeof n.Buffer.isBuffer?n.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}function o(t){return Object.prototype.toString.call(t)}function s(t){return!i(t)&&("function"==typeof n.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}function a(t){if(E.isFunction(t)){if(x)return t.name;var e=t.toString(),n=e.match(j);return n&&n[1]}}function c(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function u(t){if(x||!E.isFunction(t))return E.inspect(t);var e=a(t),n=e?": "+e:"";return"[Function"+n+"]"}function l(t){return c(u(t.actual),128)+" "+t.operator+" "+c(u(t.expected),128)}function f(t,e,n,r,i){throw new C.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:i})}function d(t,e){t||f(t,!0,e,"==",C.ok)}function p(t,e,n,a){if(t===e)return!0;if(i(t)&&i(e))return 0===r(t,e);if(E.isDate(t)&&E.isDate(e))return t.getTime()===e.getTime();if(E.isRegExp(t)&&E.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(s(t)&&s(e)&&o(t)===o(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===r(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(i(t)!==i(e))return!1;a=a||{actual:[],expected:[]};var c=a.actual.indexOf(t);return c!==-1&&c===a.expected.indexOf(e)||(a.actual.push(t),a.expected.push(e),v(t,e,n,a))}return n?t===e:t==e}function h(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function v(t,e,n,r){if(null===t||void 0===t||null===e||void 0===e)return!1;if(E.isPrimitive(t)||E.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var i=h(t),o=h(e);if(i&&!o||!i&&o)return!1;if(i)return t=O.call(t),e=O.call(e),p(t,e,n);var s,a,c=S(t),u=S(e);if(c.length!==u.length)return!1;for(c.sort(),u.sort(),a=c.length-1;a>=0;a--)if(c[a]!==u[a])return!1;for(a=c.length-1;a>=0;a--)if(s=c[a],!p(t[s],e[s],n,r))return!1;return!0}function g(t,e,n){p(t,e,!0)&&f(t,e,n,"notDeepStrictEqual",g)}function y(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(n){}return!Error.isPrototypeOf(e)&&e.call({},t)===!0}function b(t){var e;try{t()}catch(n){e=n}return e}function m(t,e,n,r){var i;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),i=b(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!i&&f(i,n,"Missing expected exception"+r);var o="string"==typeof r,s=!t&&E.isError(i),a=!t&&i&&!n;if((s&&o&&y(i,n)||a)&&f(i,n,"Got unwanted exception"+r),t&&i&&n&&!y(i,n)||!t&&i)throw i}var E=t("util/"),w=Object.prototype.hasOwnProperty,O=Array.prototype.slice,x=function(){return"foo"===function(){}.name}(),C=e.exports=d,j=/\s*function\s+([^\(\s]*)\s*/;C.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=l(this),this.generatedMessage=!0);var e=t.stackStartFunction||f;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var n=new Error;if(n.stack){var r=n.stack,i=a(e),o=r.indexOf("\n"+i);if(o>=0){var s=r.indexOf("\n",o+1);r=r.substring(s+1)}this.stack=r}}},E.inherits(C.AssertionError,Error),C.fail=f,C.ok=d,C.equal=function(t,e,n){t!=e&&f(t,e,n,"==",C.equal)},C.notEqual=function(t,e,n){t==e&&f(t,e,n,"!=",C.notEqual)},C.deepEqual=function(t,e,n){p(t,e,!1)||f(t,e,n,"deepEqual",C.deepEqual)},C.deepStrictEqual=function(t,e,n){p(t,e,!0)||f(t,e,n,"deepStrictEqual",C.deepStrictEqual)},C.notDeepEqual=function(t,e,n){p(t,e,!1)&&f(t,e,n,"notDeepEqual",C.notDeepEqual)},C.notDeepStrictEqual=g,C.strictEqual=function(t,e,n){t!==e&&f(t,e,n,"===",C.strictEqual)},C.notStrictEqual=function(t,e,n){t===e&&f(t,e,n,"!==",C.notStrictEqual)},C["throws"]=function(t,e,n){m(!0,t,e,n)},C.doesNotThrow=function(t,e,n){m(!1,t,e,n)},C.ifError=function(t){if(t)throw t};var S=Object.keys||function(t){var e=[];for(var n in t)w.call(t,n)&&e.push(n);return e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"util/":7}],4:[function(t,e,n){"function"==typeof Object.create?e.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},{}],5:[function(t,e,n){function r(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function s(t){if(d===clearTimeout)return clearTimeout(t);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){g&&h&&(g=!1,h.length?v=h.concat(v):y=-1,v.length&&c())}function c(){if(!g){var t=o(a);g=!0;for(var e=v.length;e;){for(h=v,v=[];++y<e;)h&&h[y].run();y=-1,e=v.length}h=null,g=!1,s(t)}}function u(t,e){this.fun=t,this.array=e}function l(){}var f,d,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(t){d=i}}();var h,v=[],g=!1,y=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];v.push(new u(t,e)),1!==v.length||g||o(c)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},{}],6:[function(t,e,n){e.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},{}],7:[function(t,e,n){(function(e,r){function i(t,e){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),v(e)?r.showHidden=e:e&&n._extend(r,e),w(r.showHidden)&&(r.showHidden=!1),w(r.depth)&&(r.depth=2),w(r.colors)&&(r.colors=!1),w(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),c(r,t,r.depth)}function o(t,e){var n=i.styles[e];return n?"["+i.colors[n][0]+"m"+t+"["+i.colors[n][1]+"m":t}function s(t,e){return t}function a(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}function c(t,e,r){if(t.customInspect&&e&&S(e.inspect)&&e.inspect!==n.inspect&&(!e.constructor||e.constructor.prototype!==e)){var i=e.inspect(r,t);return m(i)||(i=c(t,i,r)),i}var o=u(t,e);if(o)return o;var s=Object.keys(e),v=a(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(e)),j(e)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return l(e);if(0===s.length){if(S(e)){var g=e.name?": "+e.name:"";return t.stylize("[Function"+g+"]","special")}if(O(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp");if(C(e))return t.stylize(Date.prototype.toString.call(e),"date");if(j(e))return l(e)}var y="",b=!1,E=["{","}"];if(h(e)&&(b=!0,E=["[","]"]),S(e)){var w=e.name?": "+e.name:"";y=" [Function"+w+"]"}if(O(e)&&(y=" "+RegExp.prototype.toString.call(e)),C(e)&&(y=" "+Date.prototype.toUTCString.call(e)),j(e)&&(y=" "+l(e)),0===s.length&&(!b||0==e.length))return E[0]+y+E[1];if(r<0)return O(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special");t.seen.push(e);var x;return x=b?f(t,e,r,v,s):s.map(function(n){return d(t,e,r,v,n,b)}),t.seen.pop(),p(x,y,E)}function u(t,e){if(w(e))return t.stylize("undefined","undefined");if(m(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return b(e)?t.stylize(""+e,"number"):v(e)?t.stylize(""+e,"boolean"):g(e)?t.stylize("null","null"):void 0}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,n,r,i){for(var o=[],s=0,a=e.length;s<a;++s)L(e,String(s))?o.push(d(t,e,n,r,String(s),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(d(t,e,n,r,i,!0))}),o}function d(t,e,n,r,i,o){var s,a,u;if(u=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},u.get?a=u.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):u.set&&(a=t.stylize("[Setter]","special")),L(r,i)||(s="["+i+"]"),a||(t.seen.indexOf(u.value)<0?(a=g(n)?c(t,u.value,null):c(t,u.value,n-1),a.indexOf("\n")>-1&&(a=o?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n"))):a=t.stylize("[Circular]","special")),w(s)){if(o&&i.match(/^\d+$/))return a;s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function p(t,e,n){var r=0,i=t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function h(t){return Array.isArray(t)}function v(t){return"boolean"==typeof t}function g(t){return null===t}function y(t){return null==t}function b(t){return"number"==typeof t}function m(t){return"string"==typeof t}function E(t){return"symbol"==typeof t}function w(t){return void 0===t}function O(t){return x(t)&&"[object RegExp]"===D(t)}function x(t){return"object"==typeof t&&null!==t}function C(t){return x(t)&&"[object Date]"===D(t)}function j(t){return x(t)&&("[object Error]"===D(t)||t instanceof Error)}function S(t){return"function"==typeof t}function z(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function D(t){return Object.prototype.toString.call(t)}function T(t){return t<10?"0"+t.toString(10):t.toString(10)}function A(){var t=new Date,e=[T(t.getHours()),T(t.getMinutes()),T(t.getSeconds())].join(":");return[t.getDate(),N[t.getMonth()],e].join(" ")}function L(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var k=/%[sdj%]/g;n.format=function(t){if(!m(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(i(arguments[n]));return e.join(" ")}for(var n=1,r=arguments,o=r.length,s=String(t).replace(k,function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}}),a=r[n];n<o;a=r[++n])s+=g(a)||!x(a)?" "+a:" "+i(a);return s},n.deprecate=function(t,i){function o(){if(!s){if(e.throwDeprecation)throw new Error(i);e.traceDeprecation?console.trace(i):console.error(i),s=!0}return t.apply(this,arguments)}if(w(r.process))return function(){return n.deprecate(t,i).apply(this,arguments)};if(e.noDeprecation===!0)return t;var s=!1;return o};var P,q={};n.debuglog=function(t){if(w(P)&&(P=e.env.NODE_DEBUG||""),t=t.toUpperCase(),!q[t])if(new RegExp("\\b"+t+"\\b","i").test(P)){var r=e.pid;q[t]=function(){var e=n.format.apply(n,arguments);console.error("%s %d: %s",t,r,e)}}else q[t]=function(){};return q[t]},n.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=h,n.isBoolean=v,n.isNull=g,n.isNullOrUndefined=y,n.isNumber=b,n.isString=m,n.isSymbol=E,n.isUndefined=w,n.isRegExp=O,n.isObject=x,n.isDate=C,n.isError=j,n.isFunction=S,n.isPrimitive=z,n.isBuffer=t("./support/isBuffer");var N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];n.log=function(){console.log("%s - %s",A(),n.format.apply(n,arguments))},n.inherits=t("inherits"),n._extend=function(t,e){if(!e||!x(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":6,_process:5,inherits:4}]},{},[2])(2)});
//# sourceMappingURL=maps/main.js.map
