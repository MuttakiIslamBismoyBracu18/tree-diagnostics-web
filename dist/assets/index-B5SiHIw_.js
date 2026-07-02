var Jb=Object.defineProperty;var e3=(e,t,n)=>t in e?Jb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var eh=(e,t,n)=>e3(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function t3(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vy={exports:{}},go={},Fy={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),n3=Symbol.for("react.portal"),r3=Symbol.for("react.fragment"),i3=Symbol.for("react.strict_mode"),a3=Symbol.for("react.profiler"),s3=Symbol.for("react.provider"),o3=Symbol.for("react.context"),l3=Symbol.for("react.forward_ref"),u3=Symbol.for("react.suspense"),d3=Symbol.for("react.memo"),c3=Symbol.for("react.lazy"),th=Symbol.iterator;function p3(e){return e===null||typeof e!="object"?null:(e=th&&e[th]||e["@@iterator"],typeof e=="function"?e:null)}var qy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hy=Object.assign,Gy={};function mi(e,t,n){this.props=e,this.context=t,this.refs=Gy,this.updater=n||qy}mi.prototype.isReactComponent={};mi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ky(){}Ky.prototype=mi.prototype;function Bd(e,t,n){this.props=e,this.context=t,this.refs=Gy,this.updater=n||qy}var Dd=Bd.prototype=new Ky;Dd.constructor=Bd;Hy(Dd,mi.prototype);Dd.isPureReactComponent=!0;var nh=Array.isArray,Qy=Object.prototype.hasOwnProperty,Pd={current:null},Zy={key:!0,ref:!0,__self:!0,__source:!0};function Xy(e,t,n){var r,i={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Qy.call(t,r)&&!Zy.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),d=0;d<o;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Ea,type:e,key:a,ref:s,props:i,_owner:Pd.current}}function f3(e,t){return{$$typeof:Ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ld(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ea}function h3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rh=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?h3(""+e.key):t.toString(36)}function $s(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ea:case n3:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+nl(s,0):r,nh(i)?(n="",e!=null&&(n=e.replace(rh,"$&/")+"/"),$s(i,t,n,"",function(d){return d})):i!=null&&(Ld(i)&&(i=f3(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(rh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",nh(e))for(var o=0;o<e.length;o++){a=e[o];var l=r+nl(a,o);s+=$s(a,t,n,l,i)}else if(l=p3(e),typeof l=="function")for(e=l.call(e),o=0;!(a=e.next()).done;)a=a.value,l=r+nl(a,o++),s+=$s(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Fa(e,t,n){if(e==null)return e;var r=[],i=0;return $s(e,r,"","",function(a){return t.call(n,a,i++)}),r}function m3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},xs={transition:null},g3={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:xs,ReactCurrentOwner:Pd};function Yy(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:Fa,forEach:function(e,t,n){Fa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fa(e,function(){t++}),t},toArray:function(e){return Fa(e,function(t){return t})||[]},only:function(e){if(!Ld(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=mi;ye.Fragment=r3;ye.Profiler=a3;ye.PureComponent=Bd;ye.StrictMode=i3;ye.Suspense=u3;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g3;ye.act=Yy;ye.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hy({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Pd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)Qy.call(t,l)&&!Zy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var d=0;d<l;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:Ea,type:e.type,key:i,ref:a,props:r,_owner:s}};ye.createContext=function(e){return e={$$typeof:o3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s3,_context:e},e.Consumer=e};ye.createElement=Xy;ye.createFactory=function(e){var t=Xy.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:l3,render:e}};ye.isValidElement=Ld;ye.lazy=function(e){return{$$typeof:c3,_payload:{_status:-1,_result:e},_init:m3}};ye.memo=function(e,t){return{$$typeof:d3,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=xs.transition;xs.transition={};try{e()}finally{xs.transition=t}};ye.unstable_act=Yy;ye.useCallback=function(e,t){return pt.current.useCallback(e,t)};ye.useContext=function(e){return pt.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};ye.useEffect=function(e,t){return pt.current.useEffect(e,t)};ye.useId=function(){return pt.current.useId()};ye.useImperativeHandle=function(e,t,n){return pt.current.useImperativeHandle(e,t,n)};ye.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return pt.current.useMemo(e,t)};ye.useReducer=function(e,t,n){return pt.current.useReducer(e,t,n)};ye.useRef=function(e){return pt.current.useRef(e)};ye.useState=function(e){return pt.current.useState(e)};ye.useSyncExternalStore=function(e,t,n){return pt.current.useSyncExternalStore(e,t,n)};ye.useTransition=function(){return pt.current.useTransition()};ye.version="18.3.1";Fy.exports=ye;var me=Fy.exports;const y3=t3(me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v3=me,w3=Symbol.for("react.element"),_3=Symbol.for("react.fragment"),$3=Object.prototype.hasOwnProperty,x3=v3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b3={key:!0,ref:!0,__self:!0,__source:!0};function Jy(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)$3.call(t,r)&&!b3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:w3,type:e,key:a,ref:s,props:i,_owner:x3.current}}go.Fragment=_3;go.jsx=Jy;go.jsxs=Jy;Vy.exports=go;var O=Vy.exports,e1={exports:{}},zt={},t1={exports:{}},n1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,L){var K=j.length;j.push(L);e:for(;0<K;){var D=K-1>>>1,W=j[D];if(0<i(W,L))j[D]=L,j[K]=W,K=D;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var L=j[0],K=j.pop();if(K!==L){j[0]=K;e:for(var D=0,W=j.length,X=W>>>1;D<X;){var V=2*(D+1)-1,fe=j[V],Me=V+1,Se=j[Me];if(0>i(fe,K))Me<W&&0>i(Se,fe)?(j[D]=Se,j[Me]=K,D=Me):(j[D]=fe,j[V]=K,D=V);else if(Me<W&&0>i(Se,K))j[D]=Se,j[Me]=K,D=Me;else break e}}return L}function i(j,L){var K=j.sortIndex-L.sortIndex;return K!==0?K:j.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],d=[],f=1,p=null,h=3,v=!1,$=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(j){for(var L=n(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=j)r(d),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(d)}}function k(j){if(w=!1,x(j),!$)if(n(l)!==null)$=!0,ee(T);else{var L=n(d);L!==null&&te(k,L.startTime-j)}}function T(j,L){$=!1,w&&(w=!1,g(b),b=-1),v=!0;var K=h;try{for(x(L),p=n(l);p!==null&&(!(p.expirationTime>L)||j&&!H());){var D=p.callback;if(typeof D=="function"){p.callback=null,h=p.priorityLevel;var W=D(p.expirationTime<=L);L=e.unstable_now(),typeof W=="function"?p.callback=W:p===n(l)&&r(l),x(L)}else r(l);p=n(l)}if(p!==null)var X=!0;else{var V=n(d);V!==null&&te(k,V.startTime-L),X=!1}return X}finally{p=null,h=K,v=!1}}var C=!1,I=null,b=-1,N=5,A=-1;function H(){return!(e.unstable_now()-A<N)}function Q(){if(I!==null){var j=e.unstable_now();A=j;var L=!0;try{L=I(!0,j)}finally{L?Z():(C=!1,I=null)}}else C=!1}var Z;if(typeof m=="function")Z=function(){m(Q)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,J=M.port2;M.port1.onmessage=Q,Z=function(){J.postMessage(null)}}else Z=function(){S(Q,0)};function ee(j){I=j,C||(C=!0,Z())}function te(j,L){b=S(function(){j(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){$||v||($=!0,ee(T))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var K=h;h=L;try{return j()}finally{h=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,L){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=h;h=j;try{return L()}finally{h=K}},e.unstable_scheduleCallback=function(j,L,K){var D=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?D+K:D):K=D,j){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=K+W,j={id:f++,callback:L,priorityLevel:j,startTime:K,expirationTime:W,sortIndex:-1},K>D?(j.sortIndex=K,t(d,j),n(l)===null&&j===n(d)&&(w?(g(b),b=-1):w=!0,te(k,K-D))):(j.sortIndex=W,t(l,j),$||v||($=!0,ee(T))),j},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(j){var L=h;return function(){var K=h;h=L;try{return j.apply(this,arguments)}finally{h=K}}}})(n1);t1.exports=n1;var k3=t1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S3=me,Ct=k3;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r1=new Set,sa={};function Or(e,t){si(e,t),si(e+"Capture",t)}function si(e,t){for(sa[e]=t,e=0;e<t.length;e++)r1.add(t[e])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=Object.prototype.hasOwnProperty,E3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},ah={};function T3(e){return Tu.call(ah,e)?!0:Tu.call(ih,e)?!1:E3.test(e)?ah[e]=!0:(ih[e]=!0,!1)}function C3(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z3(e,t,n,r){if(t===null||typeof t>"u"||C3(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ft(e,t,n,r,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new ft(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new ft(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new ft(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new ft(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new ft(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new ft(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new ft(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new ft(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new ft(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ud=/[\-:]([a-z])/g;function jd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ud,jd);et[t]=new ft(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ud,jd);et[t]=new ft(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ud,jd);et[t]=new ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new ft(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new ft(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wd(e,t,n,r){var i=et.hasOwnProperty(t)?et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z3(t,n,i,r)&&(n=null),r||i===null?T3(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Sn=S3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),Cu=Symbol.for("react.profiler"),i1=Symbol.for("react.provider"),a1=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),zu=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),qd=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),s1=Symbol.for("react.offscreen"),sh=Symbol.iterator;function ki(e){return e===null||typeof e!="object"?null:(e=sh&&e[sh]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,rl;function Wi(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var il=!1;function al(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==a[o]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=o);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wi(e):""}function I3(e){switch(e.tag){case 5:return Wi(e.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Ru(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jr:return"Fragment";case Ur:return"Portal";case Cu:return"Profiler";case Vd:return"StrictMode";case zu:return"Suspense";case Iu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case a1:return(e.displayName||"Context")+".Consumer";case i1:return(e._context.displayName||"Context")+".Provider";case Fd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qd:return t=e.displayName||null,t!==null?t:Ru(e.type)||"Memo";case Dn:t=e._payload,e=e._init;try{return Ru(e(t))}catch{}}return null}function R3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ru(t);case 8:return t===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function o1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O3(e){var t=o1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ha(e){e._valueTracker||(e._valueTracker=O3(e))}function l1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=o1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ou(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function oh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function u1(e,t){t=t.checked,t!=null&&Wd(e,"checked",t,!1)}function Nu(e,t){u1(e,t);var n=Xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Au(e,t.type,n):t.hasOwnProperty("defaultValue")&&Au(e,t.type,Xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Au(e,t,n){(t!=="number"||Bs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vi=Array.isArray;function ei(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(q(92));if(Vi(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xn(n)}}function d1(e,t){var n=Xn(t.value),r=Xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function c1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?c1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ga,p1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N3=["Webkit","ms","Moz","O"];Object.keys(Zi).forEach(function(e){N3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zi[t]=Zi[e]})});function f1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zi.hasOwnProperty(e)&&Zi[e]?(""+t).trim():t+"px"}function h1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=f1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var A3=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Du(e,t){if(t){if(A3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function Pu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=null;function Hd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Uu=null,ti=null,ni=null;function ch(e){if(e=za(e)){if(typeof Uu!="function")throw Error(q(280));var t=e.stateNode;t&&(t=$o(t),Uu(e.stateNode,e.type,t))}}function m1(e){ti?ni?ni.push(e):ni=[e]:ti=e}function g1(){if(ti){var e=ti,t=ni;if(ni=ti=null,ch(e),t)for(e=0;e<t.length;e++)ch(t[e])}}function y1(e,t){return e(t)}function v1(){}var sl=!1;function w1(e,t,n){if(sl)return e(t,n);sl=!0;try{return y1(e,t,n)}finally{sl=!1,(ti!==null||ni!==null)&&(v1(),g1())}}function la(e,t){var n=e.stateNode;if(n===null)return null;var r=$o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var ju=!1;if($n)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){ju=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{ju=!1}function M3(e,t,n,r,i,a,s,o,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var Xi=!1,Ds=null,Ps=!1,Wu=null,B3={onError:function(e){Xi=!0,Ds=e}};function D3(e,t,n,r,i,a,s,o,l){Xi=!1,Ds=null,M3.apply(B3,arguments)}function P3(e,t,n,r,i,a,s,o,l){if(D3.apply(this,arguments),Xi){if(Xi){var d=Ds;Xi=!1,Ds=null}else throw Error(q(198));Ps||(Ps=!0,Wu=d)}}function Nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ph(e){if(Nr(e)!==e)throw Error(q(188))}function L3(e){var t=e.alternate;if(!t){if(t=Nr(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return ph(i),e;if(a===r)return ph(i),t;a=a.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=a;break}if(o===r){s=!0,r=i,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,r=i;break}if(o===r){s=!0,r=a,n=i;break}o=o.sibling}if(!s)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function $1(e){return e=L3(e),e!==null?x1(e):null}function x1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=x1(e);if(t!==null)return t;e=e.sibling}return null}var b1=Ct.unstable_scheduleCallback,fh=Ct.unstable_cancelCallback,U3=Ct.unstable_shouldYield,j3=Ct.unstable_requestPaint,Ve=Ct.unstable_now,W3=Ct.unstable_getCurrentPriorityLevel,Gd=Ct.unstable_ImmediatePriority,k1=Ct.unstable_UserBlockingPriority,Ls=Ct.unstable_NormalPriority,V3=Ct.unstable_LowPriority,S1=Ct.unstable_IdlePriority,yo=null,un=null;function F3(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:G3,q3=Math.log,H3=Math.LN2;function G3(e){return e>>>=0,e===0?32:31-(q3(e)/H3|0)|0}var Ka=64,Qa=4194304;function Fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Us(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~i;o!==0?r=Fi(o):(a&=s,a!==0&&(r=Fi(a)))}else s=n&~i,s!==0?r=Fi(s):a!==0&&(r=Fi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xt(t),i=1<<n,r|=e[n],t&=~i;return r}function K3(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q3(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-Xt(a),o=1<<s,l=i[s];l===-1?(!(o&n)||o&r)&&(i[s]=K3(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}}function Vu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function E1(){var e=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xt(t),e[t]=n}function Z3(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Kd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ke=0;function T1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var C1,Qd,z1,I1,R1,Fu=!1,Za=[],Vn=null,Fn=null,qn=null,ua=new Map,da=new Map,Ln=[],X3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hh(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":ua.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(t.pointerId)}}function Ei(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=za(t),t!==null&&Qd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Y3(e,t,n,r,i){switch(t){case"focusin":return Vn=Ei(Vn,e,t,n,r,i),!0;case"dragenter":return Fn=Ei(Fn,e,t,n,r,i),!0;case"mouseover":return qn=Ei(qn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ua.set(a,Ei(ua.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,da.set(a,Ei(da.get(a)||null,e,t,n,r,i)),!0}return!1}function O1(e){var t=yr(e.target);if(t!==null){var n=Nr(t);if(n!==null){if(t=n.tag,t===13){if(t=_1(n),t!==null){e.blockedOn=t,R1(e.priority,function(){z1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Lu=r,n.target.dispatchEvent(r),Lu=null}else return t=za(n),t!==null&&Qd(t),e.blockedOn=n,!1;t.shift()}return!0}function mh(e,t,n){bs(e)&&n.delete(t)}function J3(){Fu=!1,Vn!==null&&bs(Vn)&&(Vn=null),Fn!==null&&bs(Fn)&&(Fn=null),qn!==null&&bs(qn)&&(qn=null),ua.forEach(mh),da.forEach(mh)}function Ti(e,t){e.blockedOn===t&&(e.blockedOn=null,Fu||(Fu=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,J3)))}function ca(e){function t(i){return Ti(i,e)}if(0<Za.length){Ti(Za[0],e);for(var n=1;n<Za.length;n++){var r=Za[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&Ti(Vn,e),Fn!==null&&Ti(Fn,e),qn!==null&&Ti(qn,e),ua.forEach(t),da.forEach(t),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)O1(n),n.blockedOn===null&&Ln.shift()}var ri=Sn.ReactCurrentBatchConfig,js=!0;function ek(e,t,n,r){var i=ke,a=ri.transition;ri.transition=null;try{ke=1,Zd(e,t,n,r)}finally{ke=i,ri.transition=a}}function tk(e,t,n,r){var i=ke,a=ri.transition;ri.transition=null;try{ke=4,Zd(e,t,n,r)}finally{ke=i,ri.transition=a}}function Zd(e,t,n,r){if(js){var i=qu(e,t,n,r);if(i===null)yl(e,t,r,Ws,n),hh(e,r);else if(Y3(i,e,t,n,r))r.stopPropagation();else if(hh(e,r),t&4&&-1<X3.indexOf(e)){for(;i!==null;){var a=za(i);if(a!==null&&C1(a),a=qu(e,t,n,r),a===null&&yl(e,t,r,Ws,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var Ws=null;function qu(e,t,n,r){if(Ws=null,e=Hd(r),e=yr(e),e!==null)if(t=Nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ws=e,null}function N1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W3()){case Gd:return 1;case k1:return 4;case Ls:case V3:return 16;case S1:return 536870912;default:return 16}default:return 16}}var jn=null,Xd=null,ks=null;function A1(){if(ks)return ks;var e,t=Xd,n=t.length,r,i="value"in jn?jn.value:jn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return ks=i.slice(e,1<r?1-r:void 0)}function Ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xa(){return!0}function gh(){return!1}function It(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Xa:gh,this.isPropagationStopped=gh,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),t}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=It(gi),Ca=Pe({},gi,{view:0,detail:0}),nk=It(Ca),ll,ul,Ci,vo=Pe({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ci&&(Ci&&e.type==="mousemove"?(ll=e.screenX-Ci.screenX,ul=e.screenY-Ci.screenY):ul=ll=0,Ci=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),yh=It(vo),rk=Pe({},vo,{dataTransfer:0}),ik=It(rk),ak=Pe({},Ca,{relatedTarget:0}),dl=It(ak),sk=Pe({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),ok=It(sk),lk=Pe({},gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uk=It(lk),dk=Pe({},gi,{data:0}),vh=It(dk),ck={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fk[e])?!!t[e]:!1}function Jd(){return hk}var mk=Pe({},Ca,{key:function(e){if(e.key){var t=ck[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jd,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gk=It(mk),yk=Pe({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=It(yk),vk=Pe({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jd}),wk=It(vk),_k=Pe({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),$k=It(_k),xk=Pe({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bk=It(xk),kk=[9,13,27,32],ec=$n&&"CompositionEvent"in window,Yi=null;$n&&"documentMode"in document&&(Yi=document.documentMode);var Sk=$n&&"TextEvent"in window&&!Yi,M1=$n&&(!ec||Yi&&8<Yi&&11>=Yi),_h=" ",$h=!1;function B1(e,t){switch(e){case"keyup":return kk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function Ek(e,t){switch(e){case"compositionend":return D1(t);case"keypress":return t.which!==32?null:($h=!0,_h);case"textInput":return e=t.data,e===_h&&$h?null:e;default:return null}}function Tk(e,t){if(Wr)return e==="compositionend"||!ec&&B1(e,t)?(e=A1(),ks=Xd=jn=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return M1&&t.locale!=="ko"?null:t.data;default:return null}}var Ck={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ck[e.type]:t==="textarea"}function P1(e,t,n,r){m1(r),t=Vs(t,"onChange"),0<t.length&&(n=new Yd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ji=null,pa=null;function zk(e){Q1(e,0)}function wo(e){var t=qr(e);if(l1(t))return e}function Ik(e,t){if(e==="change")return t}var L1=!1;if($n){var cl;if($n){var pl="oninput"in document;if(!pl){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),pl=typeof bh.oninput=="function"}cl=pl}else cl=!1;L1=cl&&(!document.documentMode||9<document.documentMode)}function kh(){Ji&&(Ji.detachEvent("onpropertychange",U1),pa=Ji=null)}function U1(e){if(e.propertyName==="value"&&wo(pa)){var t=[];P1(t,pa,e,Hd(e)),w1(zk,t)}}function Rk(e,t,n){e==="focusin"?(kh(),Ji=t,pa=n,Ji.attachEvent("onpropertychange",U1)):e==="focusout"&&kh()}function Ok(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(pa)}function Nk(e,t){if(e==="click")return wo(t)}function Ak(e,t){if(e==="input"||e==="change")return wo(t)}function Mk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:Mk;function fa(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tu.call(t,i)||!en(e[i],t[i]))return!1}return!0}function Sh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eh(e,t){var n=Sh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sh(n)}}function j1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?j1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function W1(){for(var e=window,t=Bs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bs(e.document)}return t}function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bk(e){var t=W1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&j1(n.ownerDocument.documentElement,n)){if(r!==null&&tc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Eh(n,a);var s=Eh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dk=$n&&"documentMode"in document&&11>=document.documentMode,Vr=null,Hu=null,ea=null,Gu=!1;function Th(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gu||Vr==null||Vr!==Bs(r)||(r=Vr,"selectionStart"in r&&tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ea&&fa(ea,r)||(ea=r,r=Vs(Hu,"onSelect"),0<r.length&&(t=new Yd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vr)))}function Ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},fl={},V1={};$n&&(V1=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function _o(e){if(fl[e])return fl[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in V1)return fl[e]=t[n];return e}var F1=_o("animationend"),q1=_o("animationiteration"),H1=_o("animationstart"),G1=_o("transitionend"),K1=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,t){K1.set(e,t),Or(t,[e])}for(var hl=0;hl<Ch.length;hl++){var ml=Ch[hl],Pk=ml.toLowerCase(),Lk=ml[0].toUpperCase()+ml.slice(1);er(Pk,"on"+Lk)}er(F1,"onAnimationEnd");er(q1,"onAnimationIteration");er(H1,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(G1,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uk=new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));function zh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,P3(r,t,void 0,e),e.currentTarget=null}function Q1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,d=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;zh(i,o,d),a=l}else for(s=0;s<r.length;s++){if(o=r[s],l=o.instance,d=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;zh(i,o,d),a=l}}}if(Ps)throw e=Wu,Ps=!1,Wu=null,e}function Re(e,t){var n=t[Yu];n===void 0&&(n=t[Yu]=new Set);var r=e+"__bubble";n.has(r)||(Z1(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),Z1(n,e,r,t)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function ha(e){if(!e[Ja]){e[Ja]=!0,r1.forEach(function(n){n!=="selectionchange"&&(Uk.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ja]||(t[Ja]=!0,gl("selectionchange",!1,t))}}function Z1(e,t,n,r){switch(N1(t)){case 1:var i=ek;break;case 4:i=tk;break;default:i=Zd}n=i.bind(null,t,n,e),i=void 0,!ju||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;o!==null;){if(s=yr(o),s===null)return;if(l=s.tag,l===5||l===6){r=a=s;continue e}o=o.parentNode}}r=r.return}w1(function(){var d=a,f=Hd(n),p=[];e:{var h=K1.get(e);if(h!==void 0){var v=Yd,$=e;switch(e){case"keypress":if(Ss(n)===0)break e;case"keydown":case"keyup":v=gk;break;case"focusin":$="focus",v=dl;break;case"focusout":$="blur",v=dl;break;case"beforeblur":case"afterblur":v=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ik;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wk;break;case F1:case q1:case H1:v=ok;break;case G1:v=$k;break;case"scroll":v=nk;break;case"wheel":v=bk;break;case"copy":case"cut":case"paste":v=uk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=wh}var w=(t&4)!==0,S=!w&&e==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var m=d,x;m!==null;){x=m;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,g!==null&&(k=la(m,g),k!=null&&w.push(ma(m,k,x)))),S)break;m=m.return}0<w.length&&(h=new v(h,$,null,n,f),p.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Lu&&($=n.relatedTarget||n.fromElement)&&(yr($)||$[xn]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?($=n.relatedTarget||n.toElement,v=d,$=$?yr($):null,$!==null&&(S=Nr($),$!==S||$.tag!==5&&$.tag!==6)&&($=null)):(v=null,$=d),v!==$)){if(w=yh,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=wh,k="onPointerLeave",g="onPointerEnter",m="pointer"),S=v==null?h:qr(v),x=$==null?h:qr($),h=new w(k,m+"leave",v,n,f),h.target=S,h.relatedTarget=x,k=null,yr(f)===d&&(w=new w(g,m+"enter",$,n,f),w.target=x,w.relatedTarget=S,k=w),S=k,v&&$)t:{for(w=v,g=$,m=0,x=w;x;x=Pr(x))m++;for(x=0,k=g;k;k=Pr(k))x++;for(;0<m-x;)w=Pr(w),m--;for(;0<x-m;)g=Pr(g),x--;for(;m--;){if(w===g||g!==null&&w===g.alternate)break t;w=Pr(w),g=Pr(g)}w=null}else w=null;v!==null&&Ih(p,h,v,w,!1),$!==null&&S!==null&&Ih(p,S,$,w,!0)}}e:{if(h=d?qr(d):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var T=Ik;else if(xh(h))if(L1)T=Ak;else{T=Ok;var C=Rk}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Nk);if(T&&(T=T(e,d))){P1(p,T,n,f);break e}C&&C(e,h,d),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Au(h,"number",h.value)}switch(C=d?qr(d):window,e){case"focusin":(xh(C)||C.contentEditable==="true")&&(Vr=C,Hu=d,ea=null);break;case"focusout":ea=Hu=Vr=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,Th(p,n,f);break;case"selectionchange":if(Dk)break;case"keydown":case"keyup":Th(p,n,f)}var I;if(ec)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Wr?B1(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(M1&&n.locale!=="ko"&&(Wr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Wr&&(I=A1()):(jn=f,Xd="value"in jn?jn.value:jn.textContent,Wr=!0)),C=Vs(d,b),0<C.length&&(b=new vh(b,e,null,n,f),p.push({event:b,listeners:C}),I?b.data=I:(I=D1(n),I!==null&&(b.data=I)))),(I=Sk?Ek(e,n):Tk(e,n))&&(d=Vs(d,"onBeforeInput"),0<d.length&&(f=new vh("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:d}),f.data=I))}Q1(p,t)})}function ma(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=la(e,n),a!=null&&r.unshift(ma(e,a,i)),a=la(e,t),a!=null&&r.push(ma(e,a,i))),e=e.return}return r}function Pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ih(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var o=n,l=o.alternate,d=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&d!==null&&(o=d,i?(l=la(n,a),l!=null&&s.unshift(ma(n,l,o))):i||(l=la(n,a),l!=null&&s.push(ma(n,l,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var jk=/\r\n?/g,Wk=/\u0000|\uFFFD/g;function Rh(e){return(typeof e=="string"?e:""+e).replace(jk,`
`).replace(Wk,"")}function es(e,t,n){if(t=Rh(t),Rh(e)!==t&&n)throw Error(q(425))}function Fs(){}var Ku=null,Qu=null;function Zu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xu=typeof setTimeout=="function"?setTimeout:void 0,Vk=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,Fk=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(e){return Oh.resolve(null).then(e).catch(qk)}:Xu;function qk(e){setTimeout(function(){throw e})}function vl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ca(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ca(t)}function Hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yi=Math.random().toString(36).slice(2),ln="__reactFiber$"+yi,ga="__reactProps$"+yi,xn="__reactContainer$"+yi,Yu="__reactEvents$"+yi,Hk="__reactListeners$"+yi,Gk="__reactHandles$"+yi;function yr(e){var t=e[ln];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xn]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nh(e);e!==null;){if(n=e[ln])return n;e=Nh(e)}return t}e=n,n=e.parentNode}return null}function za(e){return e=e[ln]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function $o(e){return e[ga]||null}var Ju=[],Hr=-1;function tr(e){return{current:e}}function Oe(e){0>Hr||(e.current=Ju[Hr],Ju[Hr]=null,Hr--)}function Ie(e,t){Hr++,Ju[Hr]=e.current,e.current=t}var Yn={},ot=tr(Yn),vt=tr(!1),kr=Yn;function oi(e,t){var n=e.type.contextTypes;if(!n)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function wt(e){return e=e.childContextTypes,e!=null}function qs(){Oe(vt),Oe(ot)}function Ah(e,t,n){if(ot.current!==Yn)throw Error(q(168));Ie(ot,t),Ie(vt,n)}function X1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(q(108,R3(e)||"Unknown",i));return Pe({},n,r)}function Hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,kr=ot.current,Ie(ot,e),Ie(vt,vt.current),!0}function Mh(e,t,n){var r=e.stateNode;if(!r)throw Error(q(169));n?(e=X1(e,t,kr),r.__reactInternalMemoizedMergedChildContext=e,Oe(vt),Oe(ot),Ie(ot,e)):Oe(vt),Ie(vt,n)}var gn=null,xo=!1,wl=!1;function Y1(e){gn===null?gn=[e]:gn.push(e)}function Kk(e){xo=!0,Y1(e)}function nr(){if(!wl&&gn!==null){wl=!0;var e=0,t=ke;try{var n=gn;for(ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gn=null,xo=!1}catch(i){throw gn!==null&&(gn=gn.slice(e+1)),b1(Gd,nr),i}finally{ke=t,wl=!1}}return null}var Gr=[],Kr=0,Gs=null,Ks=0,Ot=[],Nt=0,Sr=null,vn=1,wn="";function pr(e,t){Gr[Kr++]=Ks,Gr[Kr++]=Gs,Gs=e,Ks=t}function J1(e,t,n){Ot[Nt++]=vn,Ot[Nt++]=wn,Ot[Nt++]=Sr,Sr=e;var r=vn;e=wn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var a=32-Xt(t)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,vn=1<<32-Xt(t)+i|n<<i|r,wn=a+e}else vn=1<<a|n<<i|r,wn=e}function nc(e){e.return!==null&&(pr(e,1),J1(e,1,0))}function rc(e){for(;e===Gs;)Gs=Gr[--Kr],Gr[Kr]=null,Ks=Gr[--Kr],Gr[Kr]=null;for(;e===Sr;)Sr=Ot[--Nt],Ot[Nt]=null,wn=Ot[--Nt],Ot[Nt]=null,vn=Ot[--Nt],Ot[Nt]=null}var Et=null,St=null,Ne=!1,Qt=null;function ev(e,t){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Et=e,St=Hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Et=e,St=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sr!==null?{id:vn,overflow:wn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Et=e,St=null,!0):!1;default:return!1}}function ed(e){return(e.mode&1)!==0&&(e.flags&128)===0}function td(e){if(Ne){var t=St;if(t){var n=t;if(!Bh(e,t)){if(ed(e))throw Error(q(418));t=Hn(n.nextSibling);var r=Et;t&&Bh(e,t)?ev(r,n):(e.flags=e.flags&-4097|2,Ne=!1,Et=e)}}else{if(ed(e))throw Error(q(418));e.flags=e.flags&-4097|2,Ne=!1,Et=e}}}function Dh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function ts(e){if(e!==Et)return!1;if(!Ne)return Dh(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zu(e.type,e.memoizedProps)),t&&(t=St)){if(ed(e))throw tv(),Error(q(418));for(;t;)ev(e,t),t=Hn(t.nextSibling)}if(Dh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){St=Hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}St=null}}else St=Et?Hn(e.stateNode.nextSibling):null;return!0}function tv(){for(var e=St;e;)e=Hn(e.nextSibling)}function li(){St=Et=null,Ne=!1}function ic(e){Qt===null?Qt=[e]:Qt.push(e)}var Qk=Sn.ReactCurrentBatchConfig;function zi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var o=i.refs;s===null?delete o[a]:o[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ph(e){var t=e._init;return t(e._payload)}function nv(e){function t(g,m){if(e){var x=g.deletions;x===null?(g.deletions=[m],g.flags|=16):x.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Zn(g,m),g.index=0,g.sibling=null,g}function a(g,m,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<m?(g.flags|=2,m):x):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,m,x,k){return m===null||m.tag!==6?(m=El(x,g.mode,k),m.return=g,m):(m=i(m,x),m.return=g,m)}function l(g,m,x,k){var T=x.type;return T===jr?f(g,m,x.props.children,k,x.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Dn&&Ph(T)===m.type)?(k=i(m,x.props),k.ref=zi(g,m,x),k.return=g,k):(k=Os(x.type,x.key,x.props,null,g.mode,k),k.ref=zi(g,m,x),k.return=g,k)}function d(g,m,x,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Tl(x,g.mode,k),m.return=g,m):(m=i(m,x.children||[]),m.return=g,m)}function f(g,m,x,k,T){return m===null||m.tag!==7?(m=$r(x,g.mode,k,T),m.return=g,m):(m=i(m,x),m.return=g,m)}function p(g,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=El(""+m,g.mode,x),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case qa:return x=Os(m.type,m.key,m.props,null,g.mode,x),x.ref=zi(g,null,m),x.return=g,x;case Ur:return m=Tl(m,g.mode,x),m.return=g,m;case Dn:var k=m._init;return p(g,k(m._payload),x)}if(Vi(m)||ki(m))return m=$r(m,g.mode,x,null),m.return=g,m;ns(g,m)}return null}function h(g,m,x,k){var T=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:o(g,m,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qa:return x.key===T?l(g,m,x,k):null;case Ur:return x.key===T?d(g,m,x,k):null;case Dn:return T=x._init,h(g,m,T(x._payload),k)}if(Vi(x)||ki(x))return T!==null?null:f(g,m,x,k,null);ns(g,x)}return null}function v(g,m,x,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(x)||null,o(m,g,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case qa:return g=g.get(k.key===null?x:k.key)||null,l(m,g,k,T);case Ur:return g=g.get(k.key===null?x:k.key)||null,d(m,g,k,T);case Dn:var C=k._init;return v(g,m,x,C(k._payload),T)}if(Vi(k)||ki(k))return g=g.get(x)||null,f(m,g,k,T,null);ns(m,k)}return null}function $(g,m,x,k){for(var T=null,C=null,I=m,b=m=0,N=null;I!==null&&b<x.length;b++){I.index>b?(N=I,I=null):N=I.sibling;var A=h(g,I,x[b],k);if(A===null){I===null&&(I=N);break}e&&I&&A.alternate===null&&t(g,I),m=a(A,m,b),C===null?T=A:C.sibling=A,C=A,I=N}if(b===x.length)return n(g,I),Ne&&pr(g,b),T;if(I===null){for(;b<x.length;b++)I=p(g,x[b],k),I!==null&&(m=a(I,m,b),C===null?T=I:C.sibling=I,C=I);return Ne&&pr(g,b),T}for(I=r(g,I);b<x.length;b++)N=v(I,g,b,x[b],k),N!==null&&(e&&N.alternate!==null&&I.delete(N.key===null?b:N.key),m=a(N,m,b),C===null?T=N:C.sibling=N,C=N);return e&&I.forEach(function(H){return t(g,H)}),Ne&&pr(g,b),T}function w(g,m,x,k){var T=ki(x);if(typeof T!="function")throw Error(q(150));if(x=T.call(x),x==null)throw Error(q(151));for(var C=T=null,I=m,b=m=0,N=null,A=x.next();I!==null&&!A.done;b++,A=x.next()){I.index>b?(N=I,I=null):N=I.sibling;var H=h(g,I,A.value,k);if(H===null){I===null&&(I=N);break}e&&I&&H.alternate===null&&t(g,I),m=a(H,m,b),C===null?T=H:C.sibling=H,C=H,I=N}if(A.done)return n(g,I),Ne&&pr(g,b),T;if(I===null){for(;!A.done;b++,A=x.next())A=p(g,A.value,k),A!==null&&(m=a(A,m,b),C===null?T=A:C.sibling=A,C=A);return Ne&&pr(g,b),T}for(I=r(g,I);!A.done;b++,A=x.next())A=v(I,g,b,A.value,k),A!==null&&(e&&A.alternate!==null&&I.delete(A.key===null?b:A.key),m=a(A,m,b),C===null?T=A:C.sibling=A,C=A);return e&&I.forEach(function(Q){return t(g,Q)}),Ne&&pr(g,b),T}function S(g,m,x,k){if(typeof x=="object"&&x!==null&&x.type===jr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case qa:e:{for(var T=x.key,C=m;C!==null;){if(C.key===T){if(T=x.type,T===jr){if(C.tag===7){n(g,C.sibling),m=i(C,x.props.children),m.return=g,g=m;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Dn&&Ph(T)===C.type){n(g,C.sibling),m=i(C,x.props),m.ref=zi(g,C,x),m.return=g,g=m;break e}n(g,C);break}else t(g,C);C=C.sibling}x.type===jr?(m=$r(x.props.children,g.mode,k,x.key),m.return=g,g=m):(k=Os(x.type,x.key,x.props,null,g.mode,k),k.ref=zi(g,m,x),k.return=g,g=k)}return s(g);case Ur:e:{for(C=x.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(g,m.sibling),m=i(m,x.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Tl(x,g.mode,k),m.return=g,g=m}return s(g);case Dn:return C=x._init,S(g,m,C(x._payload),k)}if(Vi(x))return $(g,m,x,k);if(ki(x))return w(g,m,x,k);ns(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,x),m.return=g,g=m):(n(g,m),m=El(x,g.mode,k),m.return=g,g=m),s(g)):n(g,m)}return S}var ui=nv(!0),rv=nv(!1),Qs=tr(null),Zs=null,Qr=null,ac=null;function sc(){ac=Qr=Zs=null}function oc(e){var t=Qs.current;Oe(Qs),e._currentValue=t}function nd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ii(e,t){Zs=e,ac=Qr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(ac!==e)if(e={context:e,memoizedValue:t,next:null},Qr===null){if(Zs===null)throw Error(q(308));Qr=e,Zs.dependencies={lanes:0,firstContext:e}}else Qr=Qr.next=e;return t}var vr=null;function lc(e){vr===null?vr=[e]:vr.push(e)}function iv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,lc(t)):(n.next=i.next,i.next=n),t.interleaved=n,bn(e,r)}function bn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pn=!1;function uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function av(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _n(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bn(e,n)}return i=r.interleaved,i===null?(t.next=t,lc(r)):(t.next=i.next,i.next=t),r.interleaved=t,bn(e,n)}function Es(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kd(e,n)}}function Lh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xs(e,t,n,r){var i=e.updateQueue;Pn=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,d=l.next;l.next=null,s===null?a=d:s.next=d,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==s&&(o===null?f.firstBaseUpdate=d:o.next=d,f.lastBaseUpdate=l))}if(a!==null){var p=i.baseState;s=0,f=d=l=null,o=a;do{var h=o.lane,v=o.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var $=e,w=o;switch(h=t,v=n,w.tag){case 1:if($=w.payload,typeof $=="function"){p=$.call(v,p,h);break e}p=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=w.payload,h=typeof $=="function"?$.call(v,p,h):$,h==null)break e;p=Pe({},p,h);break e;case 2:Pn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[o]:h.push(o))}else v={eventTime:v,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(d=f=v,l=p):f=f.next=v,s|=h;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Tr|=s,e.lanes=s,e.memoizedState=p}}function Uh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var Ia={},dn=tr(Ia),ya=tr(Ia),va=tr(Ia);function wr(e){if(e===Ia)throw Error(q(174));return e}function dc(e,t){switch(Ie(va,t),Ie(ya,e),Ie(dn,Ia),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bu(t,e)}Oe(dn),Ie(dn,t)}function di(){Oe(dn),Oe(ya),Oe(va)}function sv(e){wr(va.current);var t=wr(dn.current),n=Bu(t,e.type);t!==n&&(Ie(ya,e),Ie(dn,n))}function cc(e){ya.current===e&&(Oe(dn),Oe(ya))}var Be=tr(0);function Ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function pc(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var Ts=Sn.ReactCurrentDispatcher,$l=Sn.ReactCurrentBatchConfig,Er=0,De=null,qe=null,Ze=null,Js=!1,ta=!1,wa=0,Zk=0;function rt(){throw Error(q(321))}function fc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!en(e[n],t[n]))return!1;return!0}function hc(e,t,n,r,i,a){if(Er=a,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ts.current=e===null||e.memoizedState===null?eS:tS,e=n(r,i),ta){a=0;do{if(ta=!1,wa=0,25<=a)throw Error(q(301));a+=1,Ze=qe=null,t.updateQueue=null,Ts.current=nS,e=n(r,i)}while(ta)}if(Ts.current=eo,t=qe!==null&&qe.next!==null,Er=0,Ze=qe=De=null,Js=!1,t)throw Error(q(300));return e}function mc(){var e=wa!==0;return wa=0,e}function on(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?De.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Pt(){if(qe===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=Ze===null?De.memoizedState:Ze.next;if(t!==null)Ze=t,qe=e;else{if(e===null)throw Error(q(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Ze===null?De.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function _a(e,t){return typeof t=="function"?t(e):t}function xl(e){var t=Pt(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=qe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var o=s=null,l=null,d=a;do{var f=d.lane;if((Er&f)===f)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(o=l=p,s=r):l=l.next=p,De.lanes|=f,Tr|=f}d=d.next}while(d!==null&&d!==a);l===null?s=r:l.next=o,en(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,De.lanes|=a,Tr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bl(e){var t=Pt(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);en(a,t.memoizedState)||(yt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ov(){}function lv(e,t){var n=De,r=Pt(),i=t(),a=!en(r.memoizedState,i);if(a&&(r.memoizedState=i,yt=!0),r=r.queue,gc(cv.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,$a(9,dv.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(q(349));Er&30||uv(n,t,i)}return i}function uv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dv(e,t,n,r){t.value=n,t.getSnapshot=r,pv(t)&&fv(e)}function cv(e,t,n){return n(function(){pv(t)&&fv(e)})}function pv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!en(e,n)}catch{return!0}}function fv(e){var t=bn(e,1);t!==null&&Yt(t,e,1,-1)}function jh(e){var t=on();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},t.queue=e,e=e.dispatch=Jk.bind(null,De,e),[t.memoizedState,e]}function $a(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hv(){return Pt().memoizedState}function Cs(e,t,n,r){var i=on();De.flags|=e,i.memoizedState=$a(1|t,n,void 0,r===void 0?null:r)}function bo(e,t,n,r){var i=Pt();r=r===void 0?null:r;var a=void 0;if(qe!==null){var s=qe.memoizedState;if(a=s.destroy,r!==null&&fc(r,s.deps)){i.memoizedState=$a(t,n,a,r);return}}De.flags|=e,i.memoizedState=$a(1|t,n,a,r)}function Wh(e,t){return Cs(8390656,8,e,t)}function gc(e,t){return bo(2048,8,e,t)}function mv(e,t){return bo(4,2,e,t)}function gv(e,t){return bo(4,4,e,t)}function yv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vv(e,t,n){return n=n!=null?n.concat([e]):null,bo(4,4,yv.bind(null,t,e),n)}function yc(){}function wv(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _v(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $v(e,t,n){return Er&21?(en(n,t)||(n=E1(),De.lanes|=n,Tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=n)}function Xk(e,t){var n=ke;ke=n!==0&&4>n?n:4,e(!0);var r=$l.transition;$l.transition={};try{e(!1),t()}finally{ke=n,$l.transition=r}}function xv(){return Pt().memoizedState}function Yk(e,t,n){var r=Qn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bv(e))kv(t,n);else if(n=iv(e,t,n,r),n!==null){var i=ct();Yt(n,e,r,i),Sv(n,t,r)}}function Jk(e,t,n){var r=Qn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bv(e))kv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,n);if(i.hasEagerState=!0,i.eagerState=o,en(o,s)){var l=t.interleaved;l===null?(i.next=i,lc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=iv(e,t,i,r),n!==null&&(i=ct(),Yt(n,e,r,i),Sv(n,t,r))}}function bv(e){var t=e.alternate;return e===De||t!==null&&t===De}function kv(e,t){ta=Js=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kd(e,n)}}var eo={readContext:Dt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},eS={readContext:Dt,useCallback:function(e,t){return on().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:Wh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cs(4194308,4,yv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cs(4,2,e,t)},useMemo:function(e,t){var n=on();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=on();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yk.bind(null,De,e),[r.memoizedState,e]},useRef:function(e){var t=on();return e={current:e},t.memoizedState=e},useState:jh,useDebugValue:yc,useDeferredValue:function(e){return on().memoizedState=e},useTransition:function(){var e=jh(!1),t=e[0];return e=Xk.bind(null,e[1]),on().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=De,i=on();if(Ne){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),Xe===null)throw Error(q(349));Er&30||uv(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Wh(cv.bind(null,r,a,e),[e]),r.flags|=2048,$a(9,dv.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=on(),t=Xe.identifierPrefix;if(Ne){var n=wn,r=vn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zk++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tS={readContext:Dt,useCallback:wv,useContext:Dt,useEffect:gc,useImperativeHandle:vv,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:_v,useReducer:xl,useRef:hv,useState:function(){return xl(_a)},useDebugValue:yc,useDeferredValue:function(e){var t=Pt();return $v(t,qe.memoizedState,e)},useTransition:function(){var e=xl(_a)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:ov,useSyncExternalStore:lv,useId:xv,unstable_isNewReconciler:!1},nS={readContext:Dt,useCallback:wv,useContext:Dt,useEffect:gc,useImperativeHandle:vv,useInsertionEffect:mv,useLayoutEffect:gv,useMemo:_v,useReducer:bl,useRef:hv,useState:function(){return bl(_a)},useDebugValue:yc,useDeferredValue:function(e){var t=Pt();return qe===null?t.memoizedState=e:$v(t,qe.memoizedState,e)},useTransition:function(){var e=bl(_a)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:ov,useSyncExternalStore:lv,useId:xv,unstable_isNewReconciler:!1};function Gt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ko={isMounted:function(e){return(e=e._reactInternals)?Nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ct(),i=Qn(e),a=_n(r,i);a.payload=t,n!=null&&(a.callback=n),t=Gn(e,a,i),t!==null&&(Yt(t,e,i,r),Es(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ct(),i=Qn(e),a=_n(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Gn(e,a,i),t!==null&&(Yt(t,e,i,r),Es(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ct(),r=Qn(e),i=_n(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gn(e,i,r),t!==null&&(Yt(t,e,r,n),Es(t,e,r))}};function Vh(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!fa(n,r)||!fa(i,a):!0}function Ev(e,t,n){var r=!1,i=Yn,a=t.contextType;return typeof a=="object"&&a!==null?a=Dt(a):(i=wt(t)?kr:ot.current,r=t.contextTypes,a=(r=r!=null)?oi(e,i):Yn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Fh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function id(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},uc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Dt(a):(a=wt(t)?kr:ot.current,i.context=oi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(rd(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ko.enqueueReplaceState(i,i.state,null),Xs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ci(e,t){try{var n="",r=t;do n+=I3(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ad(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rS=typeof WeakMap=="function"?WeakMap:Map;function Tv(e,t,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){no||(no=!0,md=r),ad(e,t)},n}function Cv(e,t,n){n=_n(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ad(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ad(e,t),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function qh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yS.bind(null,e,t,n),t.then(e,e))}function Hh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_n(-1,1),t.tag=2,Gn(n,t,1))),n.lanes|=1),e)}var iS=Sn.ReactCurrentOwner,yt=!1;function dt(e,t,n,r){t.child=e===null?rv(t,null,n,r):ui(t,e.child,n,r)}function Kh(e,t,n,r,i){n=n.render;var a=t.ref;return ii(t,i),r=hc(e,t,n,r,a,i),n=mc(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kn(e,t,i)):(Ne&&n&&nc(t),t.flags|=1,dt(e,t,r,i),t.child)}function Qh(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Sc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,zv(e,t,a,r,i)):(e=Os(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(s,r)&&e.ref===t.ref)return kn(e,t,i)}return t.flags|=1,e=Zn(a,r),e.ref=t.ref,e.return=t,t.child=e}function zv(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(fa(a,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,kn(e,t,i)}return sd(e,t,n,r,i)}function Iv(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Xr,bt),bt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(Xr,bt),bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ie(Xr,bt),bt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ie(Xr,bt),bt|=r;return dt(e,t,i,n),t.child}function Rv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sd(e,t,n,r,i){var a=wt(n)?kr:ot.current;return a=oi(t,a),ii(t,i),n=hc(e,t,n,r,a,i),r=mc(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kn(e,t,i)):(Ne&&r&&nc(t),t.flags|=1,dt(e,t,n,i),t.child)}function Zh(e,t,n,r,i){if(wt(n)){var a=!0;Hs(t)}else a=!1;if(ii(t,i),t.stateNode===null)zs(e,t),Ev(t,n,r),id(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Dt(d):(d=wt(n)?kr:ot.current,d=oi(t,d));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||l!==d)&&Fh(t,s,r,d),Pn=!1;var h=t.memoizedState;s.state=h,Xs(t,r,s,i),l=t.memoizedState,o!==r||h!==l||vt.current||Pn?(typeof f=="function"&&(rd(t,n,f,r),l=t.memoizedState),(o=Pn||Vh(t,n,o,r,h,l,d))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=d,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,av(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Gt(t.type,o),s.props=d,p=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dt(l):(l=wt(n)?kr:ot.current,l=oi(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||h!==l)&&Fh(t,s,r,l),Pn=!1,h=t.memoizedState,s.state=h,Xs(t,r,s,i);var $=t.memoizedState;o!==p||h!==$||vt.current||Pn?(typeof v=="function"&&(rd(t,n,v,r),$=t.memoizedState),(d=Pn||Vh(t,n,d,r,h,$,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,$,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,$,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=$),s.props=r,s.state=$,s.context=l,r=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return od(e,t,n,r,a,i)}function od(e,t,n,r,i,a){Rv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Mh(t,n,!1),kn(e,t,a);r=t.stateNode,iS.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ui(t,e.child,null,a),t.child=ui(t,null,o,a)):dt(e,t,o,a),t.memoizedState=r.state,i&&Mh(t,n,!0),t.child}function Ov(e){var t=e.stateNode;t.pendingContext?Ah(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ah(e,t.context,!1),dc(e,t.containerInfo)}function Xh(e,t,n,r,i){return li(),ic(i),t.flags|=256,dt(e,t,n,r),t.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function ud(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nv(e,t,n){var r=t.pendingProps,i=Be.current,a=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ie(Be,i&1),e===null)return td(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=To(s,r,0,null),e=$r(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ud(n),t.memoizedState=ld,e):vc(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return aS(e,t,s,r,o,i,n);if(a){a=r.fallback,s=t.mode,i=e.child,o=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Zn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=Zn(o,a):(a=$r(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?ud(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=ld,r}return a=e.child,e=a.sibling,r=Zn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vc(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rs(e,t,n,r){return r!==null&&ic(r),ui(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function aS(e,t,n,r,i,a,s){if(n)return t.flags&256?(t.flags&=-257,r=kl(Error(q(422))),rs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=To({mode:"visible",children:r.children},i,0,null),a=$r(a,i,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&ui(t,e.child,null,s),t.child.memoizedState=ud(s),t.memoizedState=ld,a);if(!(t.mode&1))return rs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,a=Error(q(419)),r=kl(a,r,void 0),rs(e,t,s,r)}if(o=(s&e.childLanes)!==0,yt||o){if(r=Xe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,bn(e,i),Yt(r,e,i,-1))}return kc(),r=kl(Error(q(421))),rs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vS.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,St=Hn(i.nextSibling),Et=t,Ne=!0,Qt=null,e!==null&&(Ot[Nt++]=vn,Ot[Nt++]=wn,Ot[Nt++]=Sr,vn=e.id,wn=e.overflow,Sr=t),t=vc(t,r.children),t.flags|=4096,t)}function Yh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),nd(e.return,t,n)}function Sl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Av(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(dt(e,t,r.children,n),r=Be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yh(e,n,t);else if(e.tag===19)Yh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ie(Be,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ys(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ys(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sl(t,!0,n,null,a);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=Zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sS(e,t,n){switch(t.tag){case 3:Ov(t),li();break;case 5:sv(t);break;case 1:wt(t.type)&&Hs(t);break;case 4:dc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ie(Qs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Be,Be.current&1),t.flags|=128,null):n&t.child.childLanes?Nv(e,t,n):(Ie(Be,Be.current&1),e=kn(e,t,n),e!==null?e.sibling:null);Ie(Be,Be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Av(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Be,Be.current),r)break;return null;case 22:case 23:return t.lanes=0,Iv(e,t,n)}return kn(e,t,n)}var Mv,dd,Bv,Dv;Mv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dd=function(){};Bv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wr(dn.current);var a=null;switch(n){case"input":i=Ou(e,i),r=Ou(e,r),a=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),a=[];break;case"textarea":i=Mu(e,i),r=Mu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fs)}Du(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(sa.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var l=r[d];if(o=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==o&&(l!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(sa.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&Re("scroll",e),a||o===l||(a=[])):(a=a||[]).push(d,l))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Dv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ii(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function oS(e,t,n){var r=t.pendingProps;switch(rc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return wt(t.type)&&qs(),it(t),null;case 3:return r=t.stateNode,di(),Oe(vt),Oe(ot),pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qt!==null&&(vd(Qt),Qt=null))),dd(e,t),it(t),null;case 5:cc(t);var i=wr(va.current);if(n=t.type,e!==null&&t.stateNode!=null)Bv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(q(166));return it(t),null}if(e=wr(dn.current),ts(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[ln]=t,r[ga]=a,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<qi.length;i++)Re(qi[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":oh(r,a),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Re("invalid",r);break;case"textarea":uh(r,a),Re("invalid",r)}Du(n,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?r.textContent!==o&&(a.suppressHydrationWarning!==!0&&es(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&es(r.textContent,o,e),i=["children",""+o]):sa.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&Re("scroll",r)}switch(n){case"input":Ha(r),lh(r,a,!0);break;case"textarea":Ha(r),dh(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Fs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=c1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ln]=t,e[ga]=r,Mv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Pu(n,r),n){case"dialog":Re("cancel",e),Re("close",e),i=r;break;case"iframe":case"object":case"embed":Re("load",e),i=r;break;case"video":case"audio":for(i=0;i<qi.length;i++)Re(qi[i],e);i=r;break;case"source":Re("error",e),i=r;break;case"img":case"image":case"link":Re("error",e),Re("load",e),i=r;break;case"details":Re("toggle",e),i=r;break;case"input":oh(e,r),i=Ou(e,r),Re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),Re("invalid",e);break;case"textarea":uh(e,r),i=Mu(e,r),Re("invalid",e);break;default:i=r}Du(n,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?h1(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p1(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(e,l):typeof l=="number"&&oa(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(sa.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Re("scroll",e):l!=null&&Wd(e,a,l,s))}switch(n){case"input":Ha(e),lh(e,r,!1);break;case"textarea":Ha(e),dh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ei(e,!!r.multiple,a,!1):r.defaultValue!=null&&ei(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)Dv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(q(166));if(n=wr(va.current),wr(dn.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[ln]=t,(a=r.nodeValue!==n)&&(e=Et,e!==null))switch(e.tag){case 3:es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&es(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=t,t.stateNode=r}return it(t),null;case 13:if(Oe(Be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&St!==null&&t.mode&1&&!(t.flags&128))tv(),li(),t.flags|=98560,a=!1;else if(a=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(q(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(q(317));a[ln]=t}else li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),a=!1}else Qt!==null&&(vd(Qt),Qt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Be.current&1?He===0&&(He=3):kc())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return di(),dd(e,t),e===null&&ha(t.stateNode.containerInfo),it(t),null;case 10:return oc(t.type._context),it(t),null;case 17:return wt(t.type)&&qs(),it(t),null;case 19:if(Oe(Be),a=t.memoizedState,a===null)return it(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)Ii(a,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ys(e),s!==null){for(t.flags|=128,Ii(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(Be,Be.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ve()>pi&&(t.flags|=128,r=!0,Ii(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ys(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ii(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Ne)return it(t),null}else 2*Ve()-a.renderingStartTime>pi&&n!==1073741824&&(t.flags|=128,r=!0,Ii(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ve(),t.sibling=null,n=Be.current,Ie(Be,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return bc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?bt&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function lS(e,t){switch(rc(t),t.tag){case 1:return wt(t.type)&&qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return di(),Oe(vt),Oe(ot),pc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cc(t),null;case 13:if(Oe(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Be),null;case 4:return di(),null;case 10:return oc(t.type._context),null;case 22:case 23:return bc(),null;case 24:return null;default:return null}}var is=!1,st=!1,uS=typeof WeakSet=="function"?WeakSet:Set,re=null;function Zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(e,t,r)}else n.current=null}function cd(e,t,n){try{n()}catch(r){Ue(e,t,r)}}var Jh=!1;function dS(e,t){if(Ku=js,e=W1(),tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,d=0,f=0,p=e,h=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(o=s+i),p!==a||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===e)break t;if(h===n&&++d===i&&(o=s),h===a&&++f===r&&(l=s),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qu={focusedElem:e,selectionRange:n},js=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var $=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var w=$.memoizedProps,S=$.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Gt(t.type,w),S);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(k){Ue(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return $=Jh,Jh=!1,$}function na(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&cd(t,n,a)}i=i.next}while(i!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pv(e){var t=e.alternate;t!==null&&(e.alternate=null,Pv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ln],delete t[ga],delete t[Yu],delete t[Hk],delete t[Gk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lv(e){return e.tag===5||e.tag===3||e.tag===4}function em(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fs));else if(r!==4&&(e=e.child,e!==null))for(fd(e,t,n),e=e.sibling;e!==null;)fd(e,t,n),e=e.sibling}function hd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hd(e,t,n),e=e.sibling;e!==null;)hd(e,t,n),e=e.sibling}var Ye=null,Kt=!1;function Nn(e,t,n){for(n=n.child;n!==null;)Uv(e,t,n),n=n.sibling}function Uv(e,t,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:st||Zr(n,t);case 6:var r=Ye,i=Kt;Ye=null,Nn(e,t,n),Ye=r,Kt=i,Ye!==null&&(Kt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Kt?(e=Ye,n=n.stateNode,e.nodeType===8?vl(e.parentNode,n):e.nodeType===1&&vl(e,n),ca(e)):vl(Ye,n.stateNode));break;case 4:r=Ye,i=Kt,Ye=n.stateNode.containerInfo,Kt=!0,Nn(e,t,n),Ye=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&cd(n,t,s),i=i.next}while(i!==r)}Nn(e,t,n);break;case 1:if(!st&&(Zr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Ue(n,t,o)}Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Nn(e,t,n),st=r):Nn(e,t,n);break;default:Nn(e,t,n)}}function tm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uS),t.forEach(function(r){var i=wS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:Ye=o.stateNode,Kt=!1;break e;case 3:Ye=o.stateNode.containerInfo,Kt=!0;break e;case 4:Ye=o.stateNode.containerInfo,Kt=!0;break e}o=o.return}if(Ye===null)throw Error(q(160));Uv(a,s,i),Ye=null,Kt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){Ue(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jv(t,e),t=t.sibling}function jv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),an(e),r&4){try{na(3,e,e.return),So(3,e)}catch(w){Ue(e,e.return,w)}try{na(5,e,e.return)}catch(w){Ue(e,e.return,w)}}break;case 1:jt(t,e),an(e),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(jt(t,e),an(e),r&512&&n!==null&&Zr(n,n.return),e.flags&32){var i=e.stateNode;try{oa(i,"")}catch(w){Ue(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&u1(i,a),Pu(o,s);var d=Pu(o,a);for(s=0;s<l.length;s+=2){var f=l[s],p=l[s+1];f==="style"?h1(i,p):f==="dangerouslySetInnerHTML"?p1(i,p):f==="children"?oa(i,p):Wd(i,f,p,d)}switch(o){case"input":Nu(i,a);break;case"textarea":d1(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?ei(i,!!a.multiple,v,!1):h!==!!a.multiple&&(a.defaultValue!=null?ei(i,!!a.multiple,a.defaultValue,!0):ei(i,!!a.multiple,a.multiple?[]:"",!1))}i[ga]=a}catch(w){Ue(e,e.return,w)}}break;case 6:if(jt(t,e),an(e),r&4){if(e.stateNode===null)throw Error(q(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){Ue(e,e.return,w)}}break;case 3:if(jt(t,e),an(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(t.containerInfo)}catch(w){Ue(e,e.return,w)}break;case 4:jt(t,e),an(e);break;case 13:jt(t,e),an(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||($c=Ve())),r&4&&tm(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(st=(d=st)||f,jt(t,e),st=d):jt(t,e),an(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(re=e,f=e.child;f!==null;){for(p=re=f;re!==null;){switch(h=re,v=h.child,h.tag){case 0:case 11:case 14:case 15:na(4,h,h.return);break;case 1:Zr(h,h.return);var $=h.stateNode;if(typeof $.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(w){Ue(r,n,w)}}break;case 5:Zr(h,h.return);break;case 22:if(h.memoizedState!==null){rm(p);continue}}v!==null?(v.return=h,re=v):rm(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=f1("display",s))}catch(w){Ue(e,e.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(w){Ue(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:jt(t,e),an(e),r&4&&tm(e);break;case 21:break;default:jt(t,e),an(e)}}function an(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lv(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oa(i,""),r.flags&=-33);var a=em(e);hd(e,a,i);break;case 3:case 4:var s=r.stateNode.containerInfo,o=em(e);fd(e,o,s);break;default:throw Error(q(161))}}catch(l){Ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cS(e,t,n){re=e,Wv(e)}function Wv(e,t,n){for(var r=(e.mode&1)!==0;re!==null;){var i=re,a=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||is;if(!s){var o=i.alternate,l=o!==null&&o.memoizedState!==null||st;o=is;var d=st;if(is=s,(st=l)&&!d)for(re=i;re!==null;)s=re,l=s.child,s.tag===22&&s.memoizedState!==null?im(i):l!==null?(l.return=s,re=l):im(i);for(;a!==null;)re=a,Wv(a),a=a.sibling;re=i,is=o,st=d}nm(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,re=a):nm(e)}}function nm(e){for(;re!==null;){var t=re;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Gt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Uh(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uh(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ca(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}st||t.flags&512&&pd(t)}catch(h){Ue(t,t.return,h)}}if(t===e){re=null;break}if(n=t.sibling,n!==null){n.return=t.return,re=n;break}re=t.return}}function rm(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var n=t.sibling;if(n!==null){n.return=t.return,re=n;break}re=t.return}}function im(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{So(4,t)}catch(l){Ue(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ue(t,i,l)}}var a=t.return;try{pd(t)}catch(l){Ue(t,a,l)}break;case 5:var s=t.return;try{pd(t)}catch(l){Ue(t,s,l)}}}catch(l){Ue(t,t.return,l)}if(t===e){re=null;break}var o=t.sibling;if(o!==null){o.return=t.return,re=o;break}re=t.return}}var pS=Math.ceil,to=Sn.ReactCurrentDispatcher,wc=Sn.ReactCurrentOwner,Bt=Sn.ReactCurrentBatchConfig,_e=0,Xe=null,Fe=null,Je=0,bt=0,Xr=tr(0),He=0,xa=null,Tr=0,Eo=0,_c=0,ra=null,gt=null,$c=0,pi=1/0,mn=null,no=!1,md=null,Kn=null,as=!1,Wn=null,ro=0,ia=0,gd=null,Is=-1,Rs=0;function ct(){return _e&6?Ve():Is!==-1?Is:Is=Ve()}function Qn(e){return e.mode&1?_e&2&&Je!==0?Je&-Je:Qk.transition!==null?(Rs===0&&(Rs=E1()),Rs):(e=ke,e!==0||(e=window.event,e=e===void 0?16:N1(e.type)),e):1}function Yt(e,t,n,r){if(50<ia)throw ia=0,gd=null,Error(q(185));Ta(e,n,r),(!(_e&2)||e!==Xe)&&(e===Xe&&(!(_e&2)&&(Eo|=n),He===4&&Un(e,Je)),_t(e,r),n===1&&_e===0&&!(t.mode&1)&&(pi=Ve()+500,xo&&nr()))}function _t(e,t){var n=e.callbackNode;Q3(e,t);var r=Us(e,e===Xe?Je:0);if(r===0)n!==null&&fh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fh(n),t===1)e.tag===0?Kk(am.bind(null,e)):Y1(am.bind(null,e)),Fk(function(){!(_e&6)&&nr()}),n=null;else{switch(T1(r)){case 1:n=Gd;break;case 4:n=k1;break;case 16:n=Ls;break;case 536870912:n=S1;break;default:n=Ls}n=Zv(n,Vv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vv(e,t){if(Is=-1,Rs=0,_e&6)throw Error(q(327));var n=e.callbackNode;if(ai()&&e.callbackNode!==n)return null;var r=Us(e,e===Xe?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=io(e,r);else{t=r;var i=_e;_e|=2;var a=qv();(Xe!==e||Je!==t)&&(mn=null,pi=Ve()+500,_r(e,t));do try{mS();break}catch(o){Fv(e,o)}while(!0);sc(),to.current=a,_e=i,Fe!==null?t=0:(Xe=null,Je=0,t=He)}if(t!==0){if(t===2&&(i=Vu(e),i!==0&&(r=i,t=yd(e,i))),t===1)throw n=xa,_r(e,0),Un(e,r),_t(e,Ve()),n;if(t===6)Un(e,r);else{if(i=e.current.alternate,!(r&30)&&!fS(i)&&(t=io(e,r),t===2&&(a=Vu(e),a!==0&&(r=a,t=yd(e,a))),t===1))throw n=xa,_r(e,0),Un(e,r),_t(e,Ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(q(345));case 2:fr(e,gt,mn);break;case 3:if(Un(e,r),(r&130023424)===r&&(t=$c+500-Ve(),10<t)){if(Us(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ct(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xu(fr.bind(null,e,gt,mn),t);break}fr(e,gt,mn);break;case 4:if(Un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Xt(r);a=1<<s,s=t[s],s>i&&(i=s),r&=~a}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pS(r/1960))-r,10<r){e.timeoutHandle=Xu(fr.bind(null,e,gt,mn),r);break}fr(e,gt,mn);break;case 5:fr(e,gt,mn);break;default:throw Error(q(329))}}}return _t(e,Ve()),e.callbackNode===n?Vv.bind(null,e):null}function yd(e,t){var n=ra;return e.current.memoizedState.isDehydrated&&(_r(e,t).flags|=256),e=io(e,t),e!==2&&(t=gt,gt=n,t!==null&&vd(t)),e}function vd(e){gt===null?gt=e:gt.push.apply(gt,e)}function fS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!en(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t){for(t&=~_c,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xt(t),r=1<<n;e[n]=-1,t&=~r}}function am(e){if(_e&6)throw Error(q(327));ai();var t=Us(e,0);if(!(t&1))return _t(e,Ve()),null;var n=io(e,t);if(e.tag!==0&&n===2){var r=Vu(e);r!==0&&(t=r,n=yd(e,r))}if(n===1)throw n=xa,_r(e,0),Un(e,t),_t(e,Ve()),n;if(n===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fr(e,gt,mn),_t(e,Ve()),null}function xc(e,t){var n=_e;_e|=1;try{return e(t)}finally{_e=n,_e===0&&(pi=Ve()+500,xo&&nr())}}function Cr(e){Wn!==null&&Wn.tag===0&&!(_e&6)&&ai();var t=_e;_e|=1;var n=Bt.transition,r=ke;try{if(Bt.transition=null,ke=1,e)return e()}finally{ke=r,Bt.transition=n,_e=t,!(_e&6)&&nr()}}function bc(){bt=Xr.current,Oe(Xr)}function _r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vk(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(rc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qs();break;case 3:di(),Oe(vt),Oe(ot),pc();break;case 5:cc(r);break;case 4:di();break;case 13:Oe(Be);break;case 19:Oe(Be);break;case 10:oc(r.type._context);break;case 22:case 23:bc()}n=n.return}if(Xe=e,Fe=e=Zn(e.current,null),Je=bt=t,He=0,xa=null,_c=Eo=Tr=0,gt=ra=null,vr!==null){for(t=0;t<vr.length;t++)if(n=vr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=i,r.next=s}n.pending=r}vr=null}return e}function Fv(e,t){do{var n=Fe;try{if(sc(),Ts.current=eo,Js){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Js=!1}if(Er=0,Ze=qe=De=null,ta=!1,wa=0,wc.current=null,n===null||n.return===null){He=1,xa=t,Fe=null;break}e:{var a=e,s=n.return,o=n,l=t;if(t=Je,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Hh(s);if(v!==null){v.flags&=-257,Gh(v,s,o,a,t),v.mode&1&&qh(a,d,t),t=v,l=d;var $=t.updateQueue;if($===null){var w=new Set;w.add(l),t.updateQueue=w}else $.add(l);break e}else{if(!(t&1)){qh(a,d,t),kc();break e}l=Error(q(426))}}else if(Ne&&o.mode&1){var S=Hh(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Gh(S,s,o,a,t),ic(ci(l,o));break e}}a=l=ci(l,o),He!==4&&(He=2),ra===null?ra=[a]:ra.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Tv(a,l,t);Lh(a,g);break e;case 1:o=l;var m=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Kn===null||!Kn.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=Cv(a,o,t);Lh(a,k);break e}}a=a.return}while(a!==null)}Gv(n)}catch(T){t=T,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function qv(){var e=to.current;return to.current=eo,e===null?eo:e}function kc(){(He===0||He===3||He===2)&&(He=4),Xe===null||!(Tr&268435455)&&!(Eo&268435455)||Un(Xe,Je)}function io(e,t){var n=_e;_e|=2;var r=qv();(Xe!==e||Je!==t)&&(mn=null,_r(e,t));do try{hS();break}catch(i){Fv(e,i)}while(!0);if(sc(),_e=n,to.current=r,Fe!==null)throw Error(q(261));return Xe=null,Je=0,He}function hS(){for(;Fe!==null;)Hv(Fe)}function mS(){for(;Fe!==null&&!U3();)Hv(Fe)}function Hv(e){var t=Qv(e.alternate,e,bt);e.memoizedProps=e.pendingProps,t===null?Gv(e):Fe=t,wc.current=null}function Gv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lS(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Fe=null;return}}else if(n=oS(n,t,bt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);He===0&&(He=5)}function fr(e,t,n){var r=ke,i=Bt.transition;try{Bt.transition=null,ke=1,gS(e,t,n,r)}finally{Bt.transition=i,ke=r}return null}function gS(e,t,n,r){do ai();while(Wn!==null);if(_e&6)throw Error(q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Z3(e,a),e===Xe&&(Fe=Xe=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||as||(as=!0,Zv(Ls,function(){return ai(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Bt.transition,Bt.transition=null;var s=ke;ke=1;var o=_e;_e|=4,wc.current=null,dS(e,n),jv(n,e),Bk(Qu),js=!!Ku,Qu=Ku=null,e.current=n,cS(n),j3(),_e=o,ke=s,Bt.transition=a}else e.current=n;if(as&&(as=!1,Wn=e,ro=i),a=e.pendingLanes,a===0&&(Kn=null),F3(n.stateNode),_t(e,Ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(no)throw no=!1,e=md,md=null,e;return ro&1&&e.tag!==0&&ai(),a=e.pendingLanes,a&1?e===gd?ia++:(ia=0,gd=e):ia=0,nr(),null}function ai(){if(Wn!==null){var e=T1(ro),t=Bt.transition,n=ke;try{if(Bt.transition=null,ke=16>e?16:e,Wn===null)var r=!1;else{if(e=Wn,Wn=null,ro=0,_e&6)throw Error(q(331));var i=_e;for(_e|=4,re=e.current;re!==null;){var a=re,s=a.child;if(re.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var d=o[l];for(re=d;re!==null;){var f=re;switch(f.tag){case 0:case 11:case 15:na(8,f,a)}var p=f.child;if(p!==null)p.return=f,re=p;else for(;re!==null;){f=re;var h=f.sibling,v=f.return;if(Pv(f),f===d){re=null;break}if(h!==null){h.return=v,re=h;break}re=v}}}var $=a.alternate;if($!==null){var w=$.child;if(w!==null){$.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}re=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,re=s;else e:for(;re!==null;){if(a=re,a.flags&2048)switch(a.tag){case 0:case 11:case 15:na(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,re=g;break e}re=a.return}}var m=e.current;for(re=m;re!==null;){s=re;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,re=x;else e:for(s=m;re!==null;){if(o=re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:So(9,o)}}catch(T){Ue(o,o.return,T)}if(o===s){re=null;break e}var k=o.sibling;if(k!==null){k.return=o.return,re=k;break e}re=o.return}}if(_e=i,nr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{ke=n,Bt.transition=t}}return!1}function sm(e,t,n){t=ci(n,t),t=Tv(e,t,1),e=Gn(e,t,1),t=ct(),e!==null&&(Ta(e,1,t),_t(e,t))}function Ue(e,t,n){if(e.tag===3)sm(e,e,n);else for(;t!==null;){if(t.tag===3){sm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){e=ci(n,e),e=Cv(t,e,1),t=Gn(t,e,1),e=ct(),t!==null&&(Ta(t,1,e),_t(t,e));break}}t=t.return}}function yS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(Je&n)===n&&(He===4||He===3&&(Je&130023424)===Je&&500>Ve()-$c?_r(e,0):_c|=n),_t(e,t)}function Kv(e,t){t===0&&(e.mode&1?(t=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):t=1);var n=ct();e=bn(e,t),e!==null&&(Ta(e,t,n),_t(e,n))}function vS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kv(e,n)}function wS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(t),Kv(e,n)}var Qv;Qv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)yt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return yt=!1,sS(e,t,n);yt=!!(e.flags&131072)}else yt=!1,Ne&&t.flags&1048576&&J1(t,Ks,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zs(e,t),e=t.pendingProps;var i=oi(t,ot.current);ii(t,n),i=hc(null,t,r,e,i,n);var a=mc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(r)?(a=!0,Hs(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uc(t),i.updater=ko,t.stateNode=i,i._reactInternals=t,id(t,r,e,n),t=od(null,t,r,!0,a,n)):(t.tag=0,Ne&&a&&nc(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$S(r),e=Gt(r,e),i){case 0:t=sd(null,t,r,e,n);break e;case 1:t=Zh(null,t,r,e,n);break e;case 11:t=Kh(null,t,r,e,n);break e;case 14:t=Qh(null,t,r,Gt(r.type,e),n);break e}throw Error(q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),sd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),Zh(e,t,r,i,n);case 3:e:{if(Ov(t),e===null)throw Error(q(387));r=t.pendingProps,a=t.memoizedState,i=a.element,av(e,t),Xs(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ci(Error(q(423)),t),t=Xh(e,t,r,n,i);break e}else if(r!==i){i=ci(Error(q(424)),t),t=Xh(e,t,r,n,i);break e}else for(St=Hn(t.stateNode.containerInfo.firstChild),Et=t,Ne=!0,Qt=null,n=rv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(li(),r===i){t=kn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return sv(t),e===null&&td(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,Zu(r,i)?s=null:a!==null&&Zu(r,a)&&(t.flags|=32),Rv(e,t),dt(e,t,s,n),t.child;case 6:return e===null&&td(t),null;case 13:return Nv(e,t,n);case 4:return dc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ui(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),Kh(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Ie(Qs,r._currentValue),r._currentValue=s,a!==null)if(en(a.value,s)){if(a.children===i.children&&!vt.current){t=kn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=_n(-1,n&-n),l.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?l.next=l:(l.next=f.next,f.next=l),d.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),nd(a.return,n,t),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(q(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),nd(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ii(t,n),i=Dt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=Gt(r,t.pendingProps),i=Gt(r.type,i),Qh(e,t,r,i,n);case 15:return zv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),zs(e,t),t.tag=1,wt(r)?(e=!0,Hs(t)):e=!1,ii(t,n),Ev(t,r,i),id(t,r,i,n),od(null,t,r,!0,e,n);case 19:return Av(e,t,n);case 22:return Iv(e,t,n)}throw Error(q(156,t.tag))};function Zv(e,t){return b1(e,t)}function _S(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,r){return new _S(e,t,n,r)}function Sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $S(e){if(typeof e=="function")return Sc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fd)return 11;if(e===qd)return 14}return 2}function Zn(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Os(e,t,n,r,i,a){var s=2;if(r=e,typeof e=="function")Sc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case jr:return $r(n.children,i,a,t);case Vd:s=8,i|=8;break;case Cu:return e=Mt(12,n,t,i|2),e.elementType=Cu,e.lanes=a,e;case zu:return e=Mt(13,n,t,i),e.elementType=zu,e.lanes=a,e;case Iu:return e=Mt(19,n,t,i),e.elementType=Iu,e.lanes=a,e;case s1:return To(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case i1:s=10;break e;case a1:s=9;break e;case Fd:s=11;break e;case qd:s=14;break e;case Dn:s=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=Mt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function $r(e,t,n,r){return e=Mt(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=Mt(22,e,r,t),e.elementType=s1,e.lanes=n,e.stateNode={isHidden:!1},e}function El(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ec(e,t,n,r,i,a,s,o,l){return e=new xS(e,t,n,o,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Mt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uc(a),e}function bS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xv(e){if(!e)return Yn;e=e._reactInternals;e:{if(Nr(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var n=e.type;if(wt(n))return X1(e,n,t)}return t}function Yv(e,t,n,r,i,a,s,o,l){return e=Ec(n,r,!0,e,i,a,s,o,l),e.context=Xv(null),n=e.current,r=ct(),i=Qn(n),a=_n(r,i),a.callback=t??null,Gn(n,a,i),e.current.lanes=i,Ta(e,i,r),_t(e,r),e}function Co(e,t,n,r){var i=t.current,a=ct(),s=Qn(i);return n=Xv(n),t.context===null?t.context=n:t.pendingContext=n,t=_n(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gn(i,t,s),e!==null&&(Yt(e,i,s,a),Es(e,i,s)),s}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function om(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tc(e,t){om(e,t),(e=e.alternate)&&om(e,t)}function kS(){return null}var Jv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cc(e){this._internalRoot=e}zo.prototype.render=Cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));Co(e,t,null,null)};zo.prototype.unmount=Cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cr(function(){Co(null,e,null,null)}),t[xn]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=I1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ln.length&&t!==0&&t<Ln[n].priority;n++);Ln.splice(n,0,e),n===0&&O1(e)}};function zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lm(){}function SS(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=ao(s);a.call(d)}}var s=Yv(t,r,e,0,null,!1,!1,"",lm);return e._reactRootContainer=s,e[xn]=s.current,ha(e.nodeType===8?e.parentNode:e),Cr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var d=ao(l);o.call(d)}}var l=Ec(e,0,!1,null,null,!1,!1,"",lm);return e._reactRootContainer=l,e[xn]=l.current,ha(e.nodeType===8?e.parentNode:e),Cr(function(){Co(t,l,n,r)}),l}function Ro(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var o=i;i=function(){var l=ao(s);o.call(l)}}Co(t,s,e,i)}else s=SS(n,t,e,i,r);return ao(s)}C1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fi(t.pendingLanes);n!==0&&(Kd(t,n|1),_t(t,Ve()),!(_e&6)&&(pi=Ve()+500,nr()))}break;case 13:Cr(function(){var r=bn(e,1);if(r!==null){var i=ct();Yt(r,e,1,i)}}),Tc(e,1)}};Qd=function(e){if(e.tag===13){var t=bn(e,134217728);if(t!==null){var n=ct();Yt(t,e,134217728,n)}Tc(e,134217728)}};z1=function(e){if(e.tag===13){var t=Qn(e),n=bn(e,t);if(n!==null){var r=ct();Yt(n,e,t,r)}Tc(e,t)}};I1=function(){return ke};R1=function(e,t){var n=ke;try{return ke=e,t()}finally{ke=n}};Uu=function(e,t,n){switch(t){case"input":if(Nu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$o(r);if(!i)throw Error(q(90));l1(r),Nu(r,i)}}}break;case"textarea":d1(e,n);break;case"select":t=n.value,t!=null&&ei(e,!!n.multiple,t,!1)}};y1=xc;v1=Cr;var ES={usingClientEntryPoint:!1,Events:[za,qr,$o,m1,g1,xc]},Ri={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TS={bundleType:Ri.bundleType,version:Ri.version,rendererPackageName:Ri.rendererPackageName,rendererConfig:Ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$1(e),e===null?null:e.stateNode},findFiberByHostInstance:Ri.findFiberByHostInstance||kS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{yo=ss.inject(TS),un=ss}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zc(t))throw Error(q(200));return bS(e,t,null,n)};zt.createRoot=function(e,t){if(!zc(e))throw Error(q(299));var n=!1,r="",i=Jv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ec(e,1,!1,null,null,n,!1,r,i),e[xn]=t.current,ha(e.nodeType===8?e.parentNode:e),new Cc(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=$1(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return Cr(e)};zt.hydrate=function(e,t,n){if(!Io(t))throw Error(q(200));return Ro(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!zc(e))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",s=Jv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Yv(t,null,e,1,n??null,i,!1,a,s),e[xn]=t.current,ha(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zo(t)};zt.render=function(e,t,n){if(!Io(t))throw Error(q(200));return Ro(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!Io(e))throw Error(q(40));return e._reactRootContainer?(Cr(function(){Ro(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};zt.unstable_batchedUpdates=xc;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Io(n))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Ro(e,t,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function ew(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ew)}catch(e){console.error(e)}}ew(),e1.exports=zt;var CS=e1.exports,tw,um=CS;tw=um.createRoot,um.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nw=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=me.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:s,...o},l)=>me.createElement("svg",{ref:l,...IS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:nw("lucide",i),...o},[...s.map(([d,f])=>me.createElement(d,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=(e,t)=>{const n=me.forwardRef(({className:r,...i},a)=>me.createElement(RS,{ref:a,iconNode:t,className:nw(`lucide-${zS(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=je("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=je("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=je("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=je("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=je("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=je("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=je("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=je("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=je("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=je("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=je("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=je("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=je("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=je("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=je("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=je("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=je("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=je("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=je("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=je("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=je("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=je("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Rc=Object.defineProperty,HS=Object.getOwnPropertyDescriptor,GS=Object.getOwnPropertyNames,KS=Object.prototype.hasOwnProperty,QS=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),F=(e,t)=>()=>(e&&(t=e(e=0)),t),vi=(e,t)=>{for(var n in t)Rc(e,n,{get:t[n],enumerable:!0})},ZS=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of GS(t))!KS.call(e,i)&&i!==n&&Rc(e,i,{get:()=>t[i],enumerable:!(r=HS(t,i))||r.enumerable});return e},ka=e=>ZS(Rc({},"__esModule",{value:!0}),e),Oi,An,Yr,dm,ow,lw=F(()=>{Oi=new Map,An=[],Yr=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Oi.get(e);if(r===void 0)Oi.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=An.indexOf(e);i!==-1&&An.splice(i,1);for(let a=0;a<An.length;a++)if(Oi.get(An[a]).priority<=n){An.splice(a,0,e);return}An.push(e)}return}throw new TypeError("not a valid backend")},dm=async e=>{let t=Oi.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ow=async e=>{let t=e.executionProviders||[],n=t.map(l=>typeof l=="string"?l:l.name),r=n.length===0?An:n,i,a=[],s=new Set;for(let l of r){let d=await dm(l);typeof d=="string"?a.push({name:l,err:d}):(i||(i=d),i===d&&s.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of a)n.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),XS=F(()=>{lw()}),uw,YS=F(()=>{uw="1.27.0"}),Cl,Ke,dw=F(()=>{YS(),Cl="warning",Ke={wasm:{},webgl:{},webgpu:{},versions:{common:uw},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Cl=e}},get logLevel(){return Cl}},Object.defineProperty(Ke,"logLevel",{enumerable:!0})}),Ee,JS=F(()=>{dw(),Ee=Ke}),cw,pw,eE=F(()=>{cw=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let f=a*i,p=0,h=f,v=f*2,$=-1;s==="RGBA"?(p=0,h=f,v=f*2,$=f*3):s==="RGB"?(p=0,h=f,v=f*2):s==="RBG"&&(p=0,v=f,h=f*2);for(let w=0;w<a;w++)for(let S=0;S<i;S++){let g=(e.data[p++]-d[0])*l[0],m=(e.data[h++]-d[1])*l[1],x=(e.data[v++]-d[2])*l[2],k=$===-1?255:(e.data[$++]-d[3])*l[3];r.fillStyle="rgba("+g+","+m+","+x+","+k+")",r.fillRect(S,w,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},pw=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,f;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?f=[0,0,0,0]:typeof l.bias=="number"?f=[l.bias,l.bias,l.bias,l.bias]:(f=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(f[3]=l.bias[3]));let p=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,v=0,$=1,w=2,S=3,g=0,m=p,x=p*2,k=-1;o==="RGBA"?(g=0,m=p,x=p*2,k=p*3):o==="RGB"?(g=0,m=p,x=p*2):o==="RBG"&&(g=0,x=p,m=p*2),r=n.createImageData(i,a);for(let T=0;T<a*i;v+=h,$+=h,w+=h,S+=h,T++)r.data[v]=(e.data[g++]-f[0])*d[0],r.data[$]=(e.data[m++]-f[1])*d[1],r.data[w]=(e.data[x++]-f[2])*d[2],r.data[S]=k===-1?255:(e.data[k++]-f[3])*d[3]}else throw new Error("Can not access image data");return r}}),os,fw,hw,mw,gw,yw,tE=F(()=>{Oc(),os=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=n*r,f=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,h=0,v=1,$=2,w=3,S=0,g=d,m=d*2,x=-1;o==="RGB"&&(p=3,h=0,v=1,$=2,w=-1),l==="RGBA"?x=d*3:l==="RBG"?(S=0,m=d,g=d*2):l==="BGR"&&(m=0,g=d,S=d*2);for(let k=0;k<d;k++,h+=p,$+=p,v+=p,w+=p)f[S++]=(e[h]+s[0])/a[0],f[g++]=(e[v]+s[1])/a[1],f[m++]=(e[$]+s[2])/a[2],x!==-1&&w!==-1&&(f[x++]=(e[w]+s[3])/a[3]);return l==="RGBA"?new kt("float32",f,[1,4,n,r]):new kt("float32",f,[1,3,n,r])},fw=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(n){let f=l();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let h=e.height,v=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,v=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=v}else o.tensorFormat="RGBA",o.height=h,o.width=v;p.drawImage(e,0,0),s=p.getImageData(0,0,v,h).data}else throw new Error("Can not access image data")}else if(r){let f,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,p=t.resizedWidth):(f=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=f,o.width=p,t!==void 0){let h=l();h.width=p,h.height=f;let v=d(h);if(v!=null)v.putImageData(e,0,0),s=v.getImageData(0,0,p,f).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=l();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let h=e.height,v=e.width;return p.drawImage(e,0,0,v,h),s=p.getImageData(0,0,v,h).data,o.height=h,o.width=v,os(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((f,p)=>{let h=l(),v=d(h);if(!e||!v)return p();let $=new Image;$.crossOrigin="Anonymous",$.src=e,$.onload=()=>{h.width=$.width,h.height=$.height,v.drawImage($,0,0,h.width,h.height);let w=v.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,f(os(w.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return os(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},hw=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,s=[1,r,n,4];return new kt({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},mw=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new kt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},gw=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new kt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},yw=(e,t,n)=>new kt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),hr,Hi,zl,vw,nE=F(()=>{hr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Hi=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),zl=!1,vw=()=>{if(!zl){zl=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(hr.set("int64",BigInt64Array),Hi.set(BigInt64Array,"int64")),t&&(hr.set("uint64",BigUint64Array),Hi.set(BigUint64Array,"uint64")),r?(hr.set("float16",n),Hi.set(n,"float16")):hr.set("float16",Uint16Array)}}}),ww,_w,rE=F(()=>{Oc(),ww=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},_w=(e,t)=>{switch(e.location){case"cpu":return new kt(e.type,e.data,t);case"cpu-pinned":return new kt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new kt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new kt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new kt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),kt,Oc=F(()=>{eE(),tE(),nE(),rE(),kt=class{constructor(e,t,n){vw();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=hr.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=hr.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")r="string",s=e;else if(l==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let l=Hi.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=l,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=ww(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return fw(e,t)}static fromTexture(e,t){return hw(e,t)}static fromGpuBuffer(e,t){return mw(e,t)}static fromMLTensor(e,t){return gw(e,t)}static fromPinnedBuffer(e,t,n){return yw(e,t,n)}toDataURL(e){return cw(this,e)}toImageData(e){return pw(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return _w(this,e)}}}),At,$w=F(()=>{Oc(),At=kt}),so,Il,cn,Jt,xr,br,xw=F(()=>{dw(),so=(e,t)=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||console.timeStamp(`${e}::ORT::${t}`)},Il=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),so("CPU",s);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},cn=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||Il("BEGIN",e)},Jt=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||Il("END",e)},xr=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||console.time(`ORT::${e}`)},br=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||console.timeEnd(`ORT::${e}`)}}),bw,iE=F(()=>{lw(),$w(),xw(),bw=class kw{constructor(t){this.handler=t}async run(t,n,r){cn(),xr("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof At||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof At)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of n){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,f=Object.getOwnPropertyNames(n);for(let p of this.outputNames)if(f.indexOf(p)!==-1){let h=n[p];(h===null||h instanceof At)&&(d=!0,s=!1,i[p]=h)}if(d){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,a),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let f=o[d];f instanceof At?l[d]=f:l[d]=new At(f.type,f.data,f.dims)}return br("InferenceSession.run"),Jt(),l}async release(){return this.handler.dispose()}static async create(t,n,r,i){cn(),xr("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,p=0,h=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(p=n,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(h=t.byteLength-p,typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||p+h>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-p}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(f,p,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await ow(s),d=await o.createInferenceSessionHandler(a,l);return br("InferenceSession.create"),Jt(),new kw(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Nc,aE=F(()=>{iE(),Nc=bw}),sE=F(()=>{}),oE=F(()=>{}),lE=F(()=>{}),uE=F(()=>{}),dE={};vi(dE,{InferenceSession:()=>Nc,TRACE:()=>so,TRACE_EVENT_BEGIN:()=>xr,TRACE_EVENT_END:()=>br,TRACE_FUNC_BEGIN:()=>cn,TRACE_FUNC_END:()=>Jt,Tensor:()=>At,env:()=>Ee,registerBackend:()=>Yr});var Lt=F(()=>{XS(),JS(),aE(),$w(),sE(),oE(),xw(),lE(),uE()}),Ac=F(()=>{}),Sw={};vi(Sw,{default:()=>Ew});var Rl,Ol,Ew,cE=F(()=>{var e;R$(),Ar(),Mc(),Rl="ort-wasm-proxy-worker",Ol=((e=globalThis.self)==null?void 0:e.name)===Rl,Ol&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Bc(r.wasm).then(()=>{Jc(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;ep(a,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,a=ho(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;tp(i,a).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":np(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:l}=r;rp(i,a,s,o,new Array(o.length).fill(null),l).then(d=>{d.some(f=>f[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:d},ap([...s,...d]))},d=>{postMessage({type:n,err:d})});break}case"end-profiling":ip(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Ew=Ol?null:t=>new Worker(t??xt,{type:"module",name:Rl})}),Tw={};vi(Tw,{default:()=>Cw});async function cm(e={}){var Yf,Jf;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((Yf=self.name)==null?void 0:Yf.startsWith("em-pthread"));t.mountExternalData=(u,c)=>{u.startsWith("./")&&(u=u.substring(2)),(t.Xc||(t.Xc=new Map)).set(u,c)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=u=>async(...c)=>{var _;try{if(t.Yc)throw Error("Session already started");let y=t.Yc={Kd:c[0],errors:[]},E=await u(...c);if(t.Yc!==y)throw Error("Session mismatch");(_=t.dd)==null||_.flush();let z=y.errors;if(0<z.length){let R=await Promise.all(z);if(R=R.filter(P=>P),0<R.length)throw Error(R.join(`
`))}return E}finally{t.Yc=null}};t.jsepInit=(u,c)=>{if(u==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=c;let _=t.dd;t.jsepRegisterBuffer=(y,E,z,R)=>_.registerBuffer(y,E,z,R),t.jsepGetBuffer=y=>_.getBuffer(y),t.jsepCreateDownloader=(y,E,z)=>_.createDownloader(y,E,z),t.jsepOnCreateSession=y=>{_.onCreateSession(y)},t.jsepOnReleaseSession=y=>{_.onReleaseSession(y)},t.jsepOnRunStart=y=>_.onRunStart(y),t.Id=(y,E)=>{_.upload(y,E)}}else if(u==="webnn"){let _=c[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=c.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=y=>_.onRunStart(y),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=y=>{_.onReleaseSession(y)},t.webnnCreateMLTensorDownloader=(y,E)=>_.createMLTensorDownloader(y,E),t.webnnRegisterMLTensor=(y,E,z,R)=>_.registerMLTensor(y,E,z,R),t.webnnCreateMLContext=y=>_.createMLContext(y),t.webnnRegisterMLConstant=(y,E,z,R,P,G)=>_.registerMLConstant(y,E,z,R,P,t.Xc,G),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let s=()=>{let u=c=>(..._)=>{let y=nn;return _=c(..._),nn!=y?new Promise((E,z)=>{Vo={resolve:E,reject:z}}):_};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[c]=u(t[c])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,l,d=(u,c)=>{throw c},f=import.meta.url,p="";if(n||r){try{p=new URL(".",f).href}catch{}r&&(l=u=>{var c=new XMLHttpRequest;return c.open("GET",u,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),o=async u=>{if(I(u))return new Promise((_,y)=>{var E=new XMLHttpRequest;E.open("GET",u,!0),E.responseType="arraybuffer",E.onload=()=>{E.status==200||E.status==0&&E.response?_(E.response):y(E.status)},E.onerror=y,E.send(null)});var c=await fetch(u,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var h,v,$,w,S,g,m=console.log.bind(console),x=console.error.bind(console),k=m,T=x,C=!1,I=u=>u.startsWith("file://");function b(){zn.buffer!=A.buffer&&W()}if(i){let u=function(c){try{var _=c.data,y=_.Sc;if(y==="load"){let E=[];self.onmessage=z=>E.push(z),g=()=>{postMessage({Sc:"loaded"});for(let z of E)u(z);self.onmessage=u};for(let z of _.xd)t[z]&&!t[z].proxy||(t[z]=(...R)=>{postMessage({Sc:"callHandler",wd:z,args:R})},z=="print"&&(k=t[z]),z=="printErr"&&(T=t[z]));zn=_.Od,W(),v=_.Pd,Me(),Va()}else if(y==="run"){(function(E){var z=(b(),J)[E+52>>>2>>>0];E=(b(),J)[E+56>>>2>>>0],lf(z,z-E),ce(z)})(_.Rc),Ko(_.Rc,0,0,1,0,0),lp(),Uo(_.Rc),N||(tf(),N=!0);try{q$(_.Md,_.bd)}catch(E){if(E!="unwind")throw E}}else _.target!=="setimmediate"&&(y==="checkMailbox"?N&&Ba():y&&(T(`worker: received unknown command ${y}`),T(_)))}catch(E){throw nf(),E}};var N=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=u}var A,H,Q,Z,M,J,ee,te,j,L,K,D=!1;function W(){var u=zn.buffer;t.HEAP8=A=new Int8Array(u),Q=new Int16Array(u),t.HEAPU8=H=new Uint8Array(u),Z=new Uint16Array(u),t.HEAP32=M=new Int32Array(u),t.HEAPU32=J=new Uint32Array(u),ee=new Float32Array(u),te=new Float64Array(u),j=new BigInt64Array(u),L=new BigUint64Array(u)}function X(){D=!0,i?g():fn.sb()}function V(u){throw T(u="Aborted("+u+")"),C=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),S==null||S(u),u}function fe(){return{a:{ma:hb,gb:fb,g:H$,J:G$,f:K$,o:Q$,h:Z$,ha:X$,b:Y$,T:J$,Ha:hp,n:ex,$:vp,Xa:wp,Da:_p,Fa:$p,Ya:xp,Va:bp,Oa:kp,Ua:Sp,ka:Ep,Ea:Tp,Ba:Cp,Wa:zp,Ca:Ip,bb:tx,ea:nx,wa:rx,ua:ax,da:ox,O:lx,H:ux,va:dx,_:yx,xa:vx,Ra:wx,za:$x,Ia:xx,sa:bx,fa:kx,Qa:Uo,_a:Sx,R:zx,r:Ax,c:Po,hb:Mx,y:Bx,M:Dx,D:Px,l:Lx,s:Pp,ib:Ux,I:jx,S:Wx,j:Vx,u:Fx,q:qx,k:Hx,La:Gx,Ma:Kx,Na:Qx,Ja:Wp,Ka:Vp,ta:Fp,db:Xx,ab:Jx,v:eb,aa:tb,ga:nb,$a:Yx,W:rb,Za:ib,Aa:ab,F:Zx,U:sb,la:ja,ya:lb,fb:ob,eb:ub,Sa:Kp,Ta:Qp,Ga:wi,V:Zp,ja:Xp,Pa:Yp,ia:Jp,kb:Zb,na:qb,lb:Qb,oa:Fb,G:Mb,e:vb,t:gb,w:mb,B:Cb,mb:jb,K:Ob,x:$b,pa:Wb,Y:Hb,ba:Ub,nb:Lb,ob:Pb,P:zb,qa:Db,pb:Bb,N:Nb,Z:Vb,d:yb,A:_b,m:wb,jb:Xb,p:bb,z:kb,C:xb,E:Sb,L:Ib,qb:Ab,Q:Gb,ca:Rb,X:Kb,rb:Tb,ra:Eb,i:cb,a:zn,cb:$t}}}async function Me(){function u(y,E){var z=fn=y.exports;y={};for(let[R,P]of Object.entries(z))typeof P=="function"?(z=Ex(P),y[R]=z):y[R]=P;return fn=y,fn=function(){var R=fn,P=Y=>de=>Y(de)>>>0,G=Y=>()=>Y()>>>0;return(R=Object.assign({},R)).tb=P(R.tb),R.Xb=G(R.Xb),R.Zb=P(R.Zb),R.lc=P(R.lc),R.mc=G(R.mc),R.qc=P(R.qc),R}(),sp.push(fn._b),ef=(y=fn).tb,tf=y.ub,t._OrtInit=y.vb,t._OrtGetLastError=y.wb,t._OrtCreateSessionOptions=y.xb,t._OrtAppendExecutionProvider=y.yb,t._OrtAddFreeDimensionOverride=y.zb,t._OrtAddSessionConfigEntry=y.Ab,t._OrtReleaseSessionOptions=y.Bb,t._OrtCreateSession=y.Cb,t._OrtReleaseSession=y.Db,t._OrtGetInputOutputCount=y.Eb,t._OrtGetInputOutputMetadata=y.Fb,t._OrtFree=y.Gb,t._OrtCreateTensor=y.Hb,t._OrtGetTensorData=y.Ib,t._OrtReleaseTensor=y.Jb,t._OrtCreateRunOptions=y.Kb,t._OrtAddRunConfigEntry=y.Lb,t._OrtReleaseRunOptions=y.Mb,t._OrtCreateBinding=y.Nb,t._OrtBindInput=y.Ob,t._OrtBindOutput=y.Pb,t._OrtClearBoundOutputs=y.Qb,t._OrtReleaseBinding=y.Rb,t._OrtRunWithBinding=y.Sb,t._OrtRun=y.Tb,t._OrtEndProfiling=y.Ub,t._JsepOutput=y.Vb,t._JsepGetNodeName=y.Wb,Wa=y.Xb,rn=t._free=y.Yb,xi=t._malloc=y.Zb,Ko=y.ac,nf=y.bc,rf=y.cc,af=y.dc,Qo=y.ec,sf=y.fc,of=y.gc,he=y.hc,bi=y.ic,lf=y.jc,ce=y.kc,Zo=y.lc,pe=y.mc,uf=y.nc,Xo=y.oc,df=y.pc,cf=y.qc,pf=y.rc,Yo=y.sc,ff=y.tc,hf=y.uc,mf=y.vc,gf=y.wc,yf=y.xc,vf=y.yc,wf=y.zc,_f=y.Ac,$f=y.Bc,xf=y.Cc,bf=y.Dc,kf=y.Ec,Sf=y.Fc,Ef=y.Gc,Tf=y.Hc,Cf=y.Ic,zf=y.Jc,If=y.Kc,Rf=y.Lc,Of=y.Mc,Nf=y.Nc,Af=y.Pc,Mf=y.Qc,Bf=y.$c,Df=y.ad,Pf=y.fd,Lf=y.jd,Uf=y.kd,jf=y.ld,Wf=y.md,Vf=y.nd,Ff=y.od,qf=y.pd,Hf=y.qd,Gf=y.vd,Kf=y.Td,Qf=y.Ud,Zf=y.Vd,Xf=y.Wd,v=E,fn}var c,_=fe();return t.instantiateWasm?new Promise(y=>{t.instantiateWasm(_,(E,z)=>{y(u(E,z))})}):i?u(new WebAssembly.Instance(v,fe()),v):(K??(K=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href,import.meta.url).href),c=await async function(y){var E=K;if(!h&&!I(E))try{var z=fetch(E,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(z,y)}catch(R){T(`wasm streaming compile failed: ${R}`),T("falling back to ArrayBuffer instantiation")}return async function(R,P){try{var G=await async function(Y){if(!h)try{var de=await o(Y);return new Uint8Array(de)}catch{}if(Y==K&&h)Y=new Uint8Array(h);else{if(!l)throw"both async and sync fetching of the wasm failed";Y=l(Y)}return Y}(R);return await WebAssembly.instantiate(G,P)}catch(Y){T(`failed to asynchronously prepare wasm: ${Y}`),V(Y)}}(E,y)}(_),u(c.instance,c.module))}class Se{constructor(c){eh(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var tt=u=>{u.terminate(),u.onmessage=()=>{}},nt=[],lt=0,ht=null,Tn=u=>{Cn.length==0&&(dp(),up(Cn[0]));var c=Cn.pop();if(!c)return 6;_i.push(c),ir[u.Rc]=c,c.Rc=u.Rc;var _={Sc:"run",Md:u.Ld,bd:u.bd,Rc:u.Rc};return c.postMessage(_,u.rd),0},Ce=0,oe=(u,c,..._)=>{var y,E=16*_.length,z=pe(),R=Zo(E),P=R>>>3;for(y of _)typeof y=="bigint"?((b(),j)[P++>>>0]=1n,(b(),j)[P++>>>0]=y):((b(),j)[P++>>>0]=0n,(b(),te)[P++>>>0]=y);return u=rf(u,0,E,R,c),ce(z),u};function $t(u){if(i)return oe(0,1,u);if($=u,!(0<Ce)){for(var c of _i)tt(c);for(c of Cn)tt(c);Cn=[],_i=[],ir={},C=!0}d(0,new Se(u))}function Ra(u){if(i)return oe(1,0,u);wi(u)}var wi=u=>{if($=u,i)throw Ra(u),"unwind";$t(u)},Cn=[],_i=[],sp=[],ir={},op=u=>{var c=u.Rc;delete ir[c],Cn.push(u),_i.splice(_i.indexOf(u),1),u.Rc=0,af(c)};function lp(){sp.forEach(u=>u())}var up=u=>new Promise(c=>{u.onmessage=E=>{var z=E.data;if(E=z.Sc,z.Zc&&z.Zc!=Wa()){var R=ir[z.Zc];R?R.postMessage(z,z.rd):T(`Internal error! Worker sent a message "${E}" to target pthread ${z.Zc}, but that thread no longer exists!`)}else E==="checkMailbox"?Ba():E==="spawnThread"?Tn(z):E==="cleanupThread"?Ma(()=>{op(ir[z.Nd])}):E==="loaded"?(u.loaded=!0,c(u)):z.target==="setimmediate"?u.postMessage(z):E==="uncaughtException"?u.onerror(z.error):E==="callHandler"?t[z.wd](...z.args):E&&T(`worker sent an unknown command ${E}`)},u.onerror=E=>{throw T(`worker sent an error! ${E.filename}:${E.lineno}: ${E.message}`),E};var _,y=[];for(_ of[])t.propertyIsEnumerable(_)&&y.push(_);u.postMessage({Sc:"load",xd:y,Od:zn,Pd:v})});function dp(){var u=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Cn.push(u)}var zn,q$=(u,c)=>{Ce=0,u=Yo(u,c),0<Ce?$=u:Qo(u)},Oa=[],Na=0;function H$(u){var c=new Ao(u>>>=0);return(b(),A)[c.Tc+12>>>0]==0&&(cp(c,!0),Na--),pp(c,!1),Oa.push(c),cf(u)}var Br=0,G$=()=>{he(0,0);var u=Oa.pop();uf(u.cd),Br=0};function cp(u,c){c=c?1:0,(b(),A)[u.Tc+12>>>0]=c}function pp(u,c){c=c?1:0,(b(),A)[u.Tc+13>>>0]=c}class Ao{constructor(c){this.cd=c,this.Tc=c-24}}var Mo=u=>{var c=Br;if(!c)return bi(0),0;var _=new Ao(c);(b(),J)[_.Tc+16>>>2>>>0]=c;var y=(b(),J)[_.Tc+4>>>2>>>0];if(!y)return bi(0),c;for(var E of u){if(E===0||E===y)break;if(df(E,y,_.Tc+16))return bi(E),c}return bi(y),c};function K$(){return Mo([])}function Q$(u){return Mo([u>>>0])}function Z$(u,c,_,y){return Mo([u>>>0,c>>>0,_>>>0,y>>>0])}var X$=()=>{var u=Oa.pop();u||V("no exception to throw");var c=u.cd;throw(b(),A)[u.Tc+13>>>0]==0&&(Oa.push(u),pp(u,!0),cp(u,!1),Na++),Xo(c),Br=c};function Y$(u,c,_){var y=new Ao(u>>>=0);throw c>>>=0,_>>>=0,(b(),J)[y.Tc+16>>>2>>>0]=0,(b(),J)[y.Tc+4>>>2>>>0]=c,(b(),J)[y.Tc+8>>>2>>>0]=_,Xo(u),Na++,Br=u}var J$=()=>Na;function fp(u,c,_,y){return i?oe(2,1,u,c,_,y):hp(u,c,_,y)}function hp(u,c,_,y){if(u>>>=0,c>>>=0,_>>>=0,y>>>=0,!globalThis.SharedArrayBuffer)return 6;var E=[];return i&&E.length===0?fp(u,c,_,y):(u={Ld:_,Rc:u,bd:y,rd:E},i?(u.Sc="spawnThread",postMessage(u,E),0):Tn(u))}function ex(u){throw Br||(Br=u>>>0),Br}var mp=globalThis.TextDecoder&&new TextDecoder,gp=(u,c,_,y)=>{if(_=c+_,y)return _;for(;u[c]&&!(c>=_);)++c;return c},yp=(u,c=0,_,y)=>{if(16<(_=gp(u,c>>>=0,_,y))-c&&u.buffer&&mp)return mp.decode(u.buffer instanceof ArrayBuffer?u.subarray(c,_):u.slice(c,_));for(y="";c<_;){var E=u[c++];if(128&E){var z=63&u[c++];if((224&E)==192)y+=String.fromCharCode((31&E)<<6|z);else{var R=63&u[c++];65536>(E=(240&E)==224?(15&E)<<12|z<<6|R:(7&E)<<18|z<<12|R<<6|63&u[c++])?y+=String.fromCharCode(E):(E-=65536,y+=String.fromCharCode(55296|E>>10,56320|1023&E))}}else y+=String.fromCharCode(E)}return y},We=(u,c,_)=>(u>>>=0)?yp((b(),H),u,c,_):"";function vp(u,c,_){return i?oe(3,1,u,c,_):0}function wp(u,c){if(i)return oe(4,1,u,c)}function _p(u,c){if(i)return oe(5,1,u,c)}function $p(u,c,_){if(i)return oe(6,1,u,c,_)}function xp(u,c,_){return i?oe(7,1,u,c,_):0}function bp(u,c){if(i)return oe(8,1,u,c)}function kp(u,c,_){if(i)return oe(9,1,u,c,_)}function Sp(u,c,_,y){if(i)return oe(10,1,u,c,_,y)}function Ep(u,c,_,y){if(i)return oe(11,1,u,c,_,y)}function Tp(u,c,_,y){if(i)return oe(12,1,u,c,_,y)}function Cp(u){if(i)return oe(13,1,u)}function zp(u,c){if(i)return oe(14,1,u,c)}function Ip(u,c,_){if(i)return oe(15,1,u,c,_)}var tx=()=>V(""),tn=u=>{u>>>=0;for(var c="";;){var _=(b(),H)[u++>>>0];if(!_)return c;c+=String.fromCharCode(_)}},Bo={},Do={},Dr=class extends Error{constructor(u){super(u),this.name="BindingError"}};function pn(u,c,_={}){return function(y,E,z={}){var R=E.name;if(!y)throw new Dr(`type "${R}" must have a positive integer typeid pointer`);if(Do.hasOwnProperty(y)){if(z.yd)return;throw new Dr(`Cannot register type '${R}' twice`)}Do[y]=E,Bo.hasOwnProperty(y)&&(E=Bo[y],delete Bo[y],E.forEach(P=>P()))}(u,c,_)}var Rp=(u,c,_)=>{switch(c){case 1:return _?y=>(b(),A)[y>>>0]:y=>(b(),H)[y>>>0];case 2:return _?y=>(b(),Q)[y>>>1>>>0]:y=>(b(),Z)[y>>>1>>>0];case 4:return _?y=>(b(),M)[y>>>2>>>0]:y=>(b(),J)[y>>>2>>>0];case 8:return _?y=>(b(),j)[y>>>3>>>0]:y=>(b(),L)[y>>>3>>>0];default:throw new TypeError(`invalid integer width (${c}): ${u}`)}};function nx(u,c,_,y,E){u>>>=0,_>>>=0,c=tn(c>>>0);let z=R=>R;if(y=y===0n){let R=8*_;z=P=>BigInt.asUintN(R,P),E=z(E)}pn(u,{name:c,Oc:z,Vc:(R,P)=>(typeof P=="number"&&(P=BigInt(P)),P),Uc:Rp(c,_,!y),Wc:null})}function rx(u,c,_,y){pn(u>>>=0,{name:c=tn(c>>>0),Oc:function(E){return!!E},Vc:function(E,z){return z?_:y},Uc:function(E){return this.Oc((b(),H)[E>>>0])},Wc:null})}var Op=[],ar=[0,1,,1,null,1,!0,1,!1,1];function Po(u){9<(u>>>=0)&&--ar[u+1]===0&&(ar[u]=void 0,Op.push(u))}var Rt=u=>{if(!u)throw new Dr(`Cannot use deleted val. handle = ${u}`);return ar[u]},Ut=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Op.pop()||ar.length;return ar[c]=u,ar[c+1]=1,c}};function Lo(u){return this.Oc((b(),J)[u>>>2>>>0])}var ix={name:"emscripten::val",Oc:u=>{var c=Rt(u);return Po(u),c},Vc:(u,c)=>Ut(c),Uc:Lo,Wc:null};function ax(u){return pn(u>>>0,ix)}var sx=(u,c)=>{switch(c){case 4:return function(_){return this.Oc((b(),ee)[_>>>2>>>0])};case 8:return function(_){return this.Oc((b(),te)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${u}`)}};function ox(u,c,_){_>>>=0,pn(u>>>=0,{name:c=tn(c>>>0),Oc:y=>y,Vc:(y,E)=>E,Uc:sx(c,_),Wc:null})}function lx(u,c,_,y,E){u>>>=0,_>>>=0,c=tn(c>>>0);let z=P=>P;if(y===0){var R=32-8*_;z=P=>P<<R>>>R,E=z(E)}pn(u,{name:c,Oc:z,Vc:(P,G)=>G,Uc:Rp(c,_,y!==0),Wc:null})}function ux(u,c,_){function y(z){var R=(b(),J)[z>>>2>>>0];return z=(b(),J)[z+4>>>2>>>0],new E((b(),A).buffer,z,R)}var E=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];pn(u>>>=0,{name:_=tn(_>>>0),Oc:y,Uc:y},{yd:!0})}var In=(u,c,_)=>{var y=(b(),H);if(c>>>=0,0<_){var E=c;_=c+_-1;for(var z=0;z<u.length;++z){var R=u.codePointAt(z);if(127>=R){if(c>=_)break;y[c++>>>0]=R}else if(2047>=R){if(c+1>=_)break;y[c++>>>0]=192|R>>6,y[c++>>>0]=128|63&R}else if(65535>=R){if(c+2>=_)break;y[c++>>>0]=224|R>>12,y[c++>>>0]=128|R>>6&63,y[c++>>>0]=128|63&R}else{if(c+3>=_)break;y[c++>>>0]=240|R>>18,y[c++>>>0]=128|R>>12&63,y[c++>>>0]=128|R>>6&63,y[c++>>>0]=128|63&R,z++}}y[c>>>0]=0,u=c-E}else u=0;return u},Aa=u=>{for(var c=0,_=0;_<u.length;++_){var y=u.charCodeAt(_);127>=y?c++:2047>=y?c+=2:55296<=y&&57343>=y?(c+=4,++_):c+=3}return c};function dx(u,c){pn(u>>>=0,{name:c=tn(c>>>0),Oc(_){var y=(b(),J)[_>>>2>>>0];return y=We(_+4,y,!0),rn(_),y},Vc(_,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var E=typeof y=="string";if(!(E||ArrayBuffer.isView(y)&&y.BYTES_PER_ELEMENT==1))throw new Dr("Cannot pass non-string to std::string");var z=E?Aa(y):y.length,R=xi(4+z+1),P=R+4;return(b(),J)[R>>>2>>>0]=z,E?In(y,P,z+1):(b(),H).set(y,P>>>0),_!==null&&_.push(rn,R),R},Uc:Lo,Wc(_){rn(_)}})}var Np=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,cx=(u,c,_)=>{if(u>>>=1,16<(c=gp((b(),Z),u,c/2,_))-u&&Np)return Np.decode((b(),Z).slice(u,c));for(_="";u<c;++u){var y=(b(),Z)[u>>>0];_+=String.fromCharCode(y)}return _},px=(u,c,_)=>{if(_??(_=2147483647),2>_)return 0;var y=c;_=(_-=2)<2*u.length?_/2:u.length;for(var E=0;E<_;++E){var z=u.charCodeAt(E);(b(),Q)[c>>>1>>>0]=z,c+=2}return(b(),Q)[c>>>1>>>0]=0,c-y},fx=u=>2*u.length,hx=(u,c,_)=>{var y="";u>>>=2;for(var E=0;!(E>=c/4);E++){var z=(b(),J)[u+E>>>0];if(!z&&!_)break;y+=String.fromCodePoint(z)}return y},mx=(u,c,_)=>{if(c>>>=0,_??(_=2147483647),4>_)return 0;var y=c;_=y+_-4;for(var E=0;E<u.length;++E){var z=u.codePointAt(E);if(65535<z&&E++,(b(),M)[c>>>2>>>0]=z,(c+=4)+4>_)break}return(b(),M)[c>>>2>>>0]=0,c-y},gx=u=>{for(var c=0,_=0;_<u.length;++_)65535<u.codePointAt(_)&&_++,c+=4;return c};function yx(u,c,_){if(u>>>=0,c>>>=0,_=tn(_>>>=0),c===2)var y=cx,E=px,z=fx;else y=hx,E=mx,z=gx;pn(u,{name:_,Oc:R=>{var P=(b(),J)[R>>>2>>>0];return P=y(R+4,P*c,!0),rn(R),P},Vc:(R,P)=>{if(typeof P!="string")throw new Dr(`Cannot pass non-string to C++ string type ${_}`);var G=z(P),Y=xi(4+G+c);return(b(),J)[Y>>>2>>>0]=G/c,E(P,Y+4,G+c),R!==null&&R.push(rn,Y),Y},Uc:Lo,Wc(R){rn(R)}})}function vx(u,c){pn(u>>>=0,{zd:!0,name:c=tn(c>>>0),Oc:()=>{},Vc:()=>{}})}function wx(u){Ko(u>>>0,!r,1,!n,131072,!1),lp()}var Ma=u=>{if(!C)try{if(u(),!(0<Ce))try{i?Wa()&&Qo($):wi($)}catch(c){c instanceof Se||c=="unwind"||d(0,c)}}catch(c){c instanceof Se||c=="unwind"||d(0,c)}},_x=!Atomics.waitAsync||((Jf=globalThis.navigator)==null?void 0:Jf.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Uo(u){u>>>=0,_x||(Atomics.waitAsync((b(),M),u>>>2,u).value.then(Ba),u+=128,Atomics.store((b(),M),u>>>2,1))}var Ba=()=>Ma(()=>{var u=Wa();u&&(Uo(u),of())});function $x(u,c){(u>>>=0)==c>>>0?setTimeout(Ba):i?postMessage({Zc:u,Sc:"checkMailbox"}):(u=ir[u])&&u.postMessage({Sc:"checkMailbox"})}var jo=[];function xx(u,c,_,y,E){for(c>>>=0,E>>>=0,jo.length=0,_=E>>>3,y=E+y>>>3;_<y;){var z;z=(b(),j)[_++>>>0]?(b(),j)[_++>>>0]:(b(),te)[_++>>>0],jo.push(z)}return(c?Jo[c]:pb[u])(...jo)}var bx=()=>{Ce=0};function kx(u){u>>>=0,i?postMessage({Sc:"cleanupThread",Nd:u}):op(ir[u])}function Sx(u){}var Da=u=>{try{u()}catch(c){V(c)}};function Ex(u){var c=(..._)=>{Pa.push(u);try{return u(..._)}finally{C||(Pa.pop(),nn&&Rn===1&&Pa.length===0&&(Rn=0,Ce+=1,Da(Qf),typeof Fibers<"u"&&Fibers.Zd()))}};return Bp.set(u,c),c}var Rn=0,nn=null,Ap=0,Pa=[],Wo=new Map,Mp=new Map,Bp=new Map,Tx=0,Vo=null,Cx=[],Dp=u=>function(c){if(!C){if(Rn===0){var _=!1,y=!1;c((E=0)=>{if(!C&&(Ap=E,_=!0,y)){Rn=2,Da(()=>Zf(nn)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),E=!1;try{var z=function(){var G=(b(),M)[nn+8>>>2>>>0];return G=Mp.get(G),G=Bp.get(G),--Ce,G()}()}catch(G){z=G,E=!0}var R=!1;if(!nn){var P=Vo;P&&(Vo=null,(E?P.reject:P.resolve)(z),R=!0)}if(E&&!R)throw z}}),y=!0,_||(Rn=1,nn=function(){var E=xi(65548),z=E+12;if((b(),J)[E>>>2>>>0]=z,(b(),J)[E+4>>>2>>>0]=z+65536,z=Pa[0],!Wo.has(z)){var R=Tx++;Wo.set(z,R),Mp.set(R,z)}return z=Wo.get(z),(b(),M)[E+8>>>2>>>0]=z,E}(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Da(()=>Kf(nn)))}else Rn===2?(Rn=0,Da(Xf),rn(nn),nn=null,Cx.forEach(Ma)):V(`invalid state: ${Rn}`);return Ap}}(c=>{u().then(c)});function zx(u){return u>>>=0,Dp(async()=>{var c=await Rt(u);return Ut(c)})}var Fo=[],Ix=u=>{var c=Fo.length;return Fo.push(u),c},Rx=(u,c)=>{for(var _=Array(u),y=0;y<u;++y){var E=y,z=(b(),J)[c+4*y>>>2>>>0],R=Do[z];if(R===void 0)throw u=`parameter ${y}`,z=ef(z),c=tn(z),rn(z),new Dr(`${u} has unknown type ${c}`);_[E]=R}return _},Ox=(u,c,_)=>{var y=[];return u=u(y,_),y.length&&((b(),J)[c>>>2>>>0]=Ut(y)),u},Nx={},La=u=>{var c=Nx[u];return c===void 0?tn(u):c};function Ax(u,c,_){var[y,...E]=Rx(u,c>>>0);c=y.Vc.bind(y);var z=E.map(G=>G.Uc.bind(G));u--;var R={toValue:Rt};switch(u=z.map((G,Y)=>{var de=`argFromPtr${Y}`;return R[de]=G,`${de}(args${Y?"+"+8*Y:""})`}),_){case 0:var P="toValue(handle)";break;case 2:P="new (toValue(handle))";break;case 3:P="";break;case 1:R.getStringOrSymbol=La,P="toValue(handle)[getStringOrSymbol(methodName)]"}return P+=`(${u})`,y.zd||(R.toReturnWire=c,R.emval_returnValue=Ox,P=`return emval_returnValue(toReturnWire, destructorsRef, ${P})`),P=`return function (handle, methodName, destructorsRef, args) {
  ${P}
  }`,_=new Function(Object.keys(R),P)(...Object.values(R)),P=`methodCaller<(${E.map(G=>G.name)}) => ${y.name}>`,Ix(Object.defineProperty(_,"name",{value:P}))}function Mx(u,c){return c>>>=0,(u=Rt(u>>>0))==Rt(c)}function Bx(u){return(u>>>=0)?(u=La(u),Ut(globalThis[u])):Ut(globalThis)}function Dx(u){return u=La(u>>>0),Ut(t[u])}function Px(u,c){return c>>>=0,u=Rt(u>>>0),c=Rt(c),Ut(u[c])}function Lx(u){9<(u>>>=0)&&(ar[u+1]+=1)}function Pp(u,c,_,y,E){return Fo[u>>>0](c>>>0,_>>>0,y>>>0,E>>>0)}function Ux(u,c,_,y,E){return Pp(u>>>0,c>>>0,_>>>0,y>>>0,E>>>0)}function jx(){return Ut([])}function Wx(u){u=Rt(u>>>0);for(var c=Array(u.length),_=0;_<u.length;_++)c[_]=u[_];return Ut(c)}function Vx(u){return Ut(La(u>>>0))}function Fx(){return Ut({})}function qx(u){for(var c=Rt(u>>>=0);c.length;){var _=c.pop();c.pop()(_)}Po(u)}function Hx(u,c,_){c>>>=0,_>>>=0,u=Rt(u>>>0),c=Rt(c),_=Rt(_),u[c]=_}function Gx(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),(b(),M)[c>>>2>>>0]=u.getUTCSeconds(),(b(),M)[c+4>>>2>>>0]=u.getUTCMinutes(),(b(),M)[c+8>>>2>>>0]=u.getUTCHours(),(b(),M)[c+12>>>2>>>0]=u.getUTCDate(),(b(),M)[c+16>>>2>>>0]=u.getUTCMonth(),(b(),M)[c+20>>>2>>>0]=u.getUTCFullYear()-1900,(b(),M)[c+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(b(),M)[c+28>>>2>>>0]=u}var Lp=u=>u%4==0&&(u%100!=0||u%400==0),Up=[0,31,60,91,121,152,182,213,244,274,305,335],jp=[0,31,59,90,120,151,181,212,243,273,304,334];function Kx(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),(b(),M)[c>>>2>>>0]=u.getSeconds(),(b(),M)[c+4>>>2>>>0]=u.getMinutes(),(b(),M)[c+8>>>2>>>0]=u.getHours(),(b(),M)[c+12>>>2>>>0]=u.getDate(),(b(),M)[c+16>>>2>>>0]=u.getMonth(),(b(),M)[c+20>>>2>>>0]=u.getFullYear()-1900,(b(),M)[c+24>>>2>>>0]=u.getDay();var _=(Lp(u.getFullYear())?Up:jp)[u.getMonth()]+u.getDate()-1|0;(b(),M)[c+28>>>2>>>0]=_,(b(),M)[c+36>>>2>>>0]=-60*u.getTimezoneOffset(),_=new Date(u.getFullYear(),6,1).getTimezoneOffset();var y=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(_!=y&&u.getTimezoneOffset()==Math.min(y,_)),(b(),M)[c+32>>>2>>>0]=u}function Qx(u){u>>>=0;var c=new Date((b(),M)[u+20>>>2>>>0]+1900,(b(),M)[u+16>>>2>>>0],(b(),M)[u+12>>>2>>>0],(b(),M)[u+8>>>2>>>0],(b(),M)[u+4>>>2>>>0],(b(),M)[u>>>2>>>0],0),_=(b(),M)[u+32>>>2>>>0],y=c.getTimezoneOffset(),E=new Date(c.getFullYear(),6,1).getTimezoneOffset(),z=new Date(c.getFullYear(),0,1).getTimezoneOffset(),R=Math.min(z,E);return 0>_?(b(),M)[u+32>>>2>>>0]=+(E!=z&&R==y):0<_!=(R==y)&&(E=Math.max(z,E),c.setTime(c.getTime()+6e4*((0<_?R:E)-y))),(b(),M)[u+24>>>2>>>0]=c.getDay(),_=(Lp(c.getFullYear())?Up:jp)[c.getMonth()]+c.getDate()-1|0,(b(),M)[u+28>>>2>>>0]=_,(b(),M)[u>>>2>>>0]=c.getSeconds(),(b(),M)[u+4>>>2>>>0]=c.getMinutes(),(b(),M)[u+8>>>2>>>0]=c.getHours(),(b(),M)[u+12>>>2>>>0]=c.getDate(),(b(),M)[u+16>>>2>>>0]=c.getMonth(),(b(),M)[u+20>>>2>>>0]=c.getYear(),u=c.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function Wp(u,c,_,y,E,z,R){return i?oe(16,1,u,c,_,y,E,z,R):-52}function Vp(u,c,_,y,E,z){if(i)return oe(17,1,u,c,_,y,E,z)}var $i={},Zx=()=>performance.timeOrigin+performance.now();function Fp(u,c){if(i)return oe(18,1,u,c);if($i[u]&&(clearTimeout($i[u].id),delete $i[u]),!c)return 0;var _=setTimeout(()=>{delete $i[u],Ma(()=>sf(u,performance.timeOrigin+performance.now()))},c);return $i[u]={id:_,Yd:c},0}function Xx(u,c,_,y){u>>>=0,c>>>=0,_>>>=0,y>>>=0;var E=new Date().getFullYear(),z=new Date(E,0,1).getTimezoneOffset();E=new Date(E,6,1).getTimezoneOffset();var R=Math.max(z,E);(b(),J)[u>>>2>>>0]=60*R,(b(),M)[c>>>2>>>0]=+(z!=E),u=(c=P=>{var G=Math.abs(P);return`UTC${0<=P?"-":"+"}${String(Math.floor(G/60)).padStart(2,"0")}${String(G%60).padStart(2,"0")}`})(z),c=c(E),E<z?(In(u,_,17),In(c,y,17)):(In(u,y,17),In(c,_,17))}var Yx=()=>Date.now();function Jx(u,c,_){return _>>>=0,0<=u&&3>=u?(u===0?u=Date.now():u=performance.timeOrigin+performance.now(),u=Math.round(1e6*u),(b(),j)[_>>>3>>>0]=BigInt(u),0):28}var qo=[],qp=(u,c)=>{qo.length=0;for(var _;_=(b(),H)[u++>>>0];){var y=_!=105;c+=(y&=_!=112)&&c%8?4:0,qo.push(_==112?(b(),J)[c>>>2>>>0]:_==106?(b(),j)[c>>>3>>>0]:_==105?(b(),M)[c>>>2>>>0]:(b(),te)[c>>>3>>>0]),c+=y?8:4}return qo};function eb(u,c,_){return u>>>=0,c=qp(c>>>0,_>>>0),Jo[u](...c)}function tb(u,c,_){return u>>>=0,c=qp(c>>>0,_>>>0),Jo[u](...c)}var nb=()=>{};function rb(u,c){return T(We(u>>>0,c>>>0))}var ib=()=>{throw Ce+=1,"unwind"};function ab(){return 4294901760}var sb=()=>navigator.hardwareConcurrency,sr={},Ua=u=>{var c;return(c=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))?+c[1]:(c=/:(\d+):\d+(?:\)|$)/.exec(u))?2147483648|+c[1]:0},Hp=u=>{for(var c of u)(u=Ua(c))&&(sr[u]=c)};function ob(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),Hp(u),sr.gd=Ua(u[3]),sr.Jd=u,sr.gd}function ja(u){if(!(u=sr[u>>>0]))return 0;var c;if(c=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(u))u=c[1];else if(c=/^\s+at (.*) \(.*\)$/.exec(u))u=c[1];else{if(!(c=/^(.+?)@/.exec(u)))return 0;u=c[1]}rn(ja.hd??0),c=Aa(u)+1;var _=xi(c);return _&&In(u,_,c),ja.hd=_,ja.hd}function lb(u){u>>>=0;var c=(b(),H).length;if(u<=c||4294901760<u)return!1;for(var _=1;4>=_;_*=2){var y=c*(1+.2/_);y=Math.min(y,u+100663296);e:{y=(Math.min(4294901760,65536*Math.ceil(Math.max(u,y)/65536))-zn.buffer.byteLength+65535)/65536|0;try{zn.grow(y),W();var E=1;break e}catch{}E=void 0}if(E)return!0}return!1}function ub(u,c,_){if(u>>>=0,c>>>=0,sr.gd==u)var y=sr.Jd;else(y=Error().stack.toString().split(`
`))[0]=="Error"&&y.shift(),Hp(y);for(var E=3;y[E]&&Ua(y[E])!=u;)++E;for(u=0;u<_&&y[u+E];++u)(b(),M)[c+4*u>>>2>>>0]=Ua(y[u+E]);return u}var Ho,Go={},Gp=()=>{var y;if(!Ho){var u,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((y=globalThis.navigator)==null?void 0:y.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in Go)Go[u]===void 0?delete c[u]:c[u]=Go[u];var _=[];for(u in c)_.push(`${u}=${c[u]}`);Ho=_}return Ho};function Kp(u,c){if(i)return oe(19,1,u,c);u>>>=0,c>>>=0;var _,y=0,E=0;for(_ of Gp()){var z=c+y;(b(),J)[u+E>>>2>>>0]=z,y+=In(_,z,1/0)+1,E+=4}return 0}function Qp(u,c){if(i)return oe(20,1,u,c);u>>>=0,c>>>=0;var _=Gp();for(var y of((b(),J)[u>>>2>>>0]=_.length,u=0,_))u+=Aa(y)+1;return(b(),J)[c>>>2>>>0]=u,0}function Zp(u){return i?oe(21,1,u):52}function Xp(u,c,_,y){return i?oe(22,1,u,c,_,y):52}function Yp(u,c,_,y){return i?oe(23,1,u,c,_,y):70}var db=[null,[],[]];function Jp(u,c,_,y){if(i)return oe(24,1,u,c,_,y);c>>>=0,_>>>=0,y>>>=0;for(var E=0,z=0;z<_;z++){var R=(b(),J)[c>>>2>>>0],P=(b(),J)[c+4>>>2>>>0];c+=8;for(var G=0;G<P;G++){var Y=u,de=(b(),H)[R+G>>>0],ve=db[Y];de===0||de===10?((Y===1?k:T)(yp(ve)),ve.length=0):ve.push(de)}E+=P}return(b(),J)[y>>>2>>>0]=E,0}function cb(u){return u>>>0}i||function(){for(var u=t.numThreads-1;u--;)dp();nt.push(async()=>{var c=async function(){if(!i)return Promise.all(Cn.map(up))}();lt++,await c,--lt==0&&ht&&(c=ht,ht=null,c())})}(),i||(zn=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),W()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>pe(),t.stackRestore=u=>ce(u),t.stackAlloc=u=>Zo(u),t.setValue=function(u,c,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(b(),A)[u>>>0]=c;break;case"i16":(b(),Q)[u>>>1>>>0]=c;break;case"i32":(b(),M)[u>>>2>>>0]=c;break;case"i64":(b(),j)[u>>>3>>>0]=BigInt(c);break;case"float":(b(),ee)[u>>>2>>>0]=c;break;case"double":(b(),te)[u>>>3>>>0]=c;break;case"*":(b(),J)[u>>>2>>>0]=c;break;default:V(`invalid type for setValue: ${_}`)}},t.getValue=function(u,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return(b(),A)[u>>>0];case"i16":return(b(),Q)[u>>>1>>>0];case"i32":return(b(),M)[u>>>2>>>0];case"i64":return(b(),j)[u>>>3>>>0];case"float":return(b(),ee)[u>>>2>>>0];case"double":return(b(),te)[u>>>3>>>0];case"*":return(b(),J)[u>>>2>>>0];default:V(`invalid type for getValue: ${c}`)}},t.UTF8ToString=We,t.stringToUTF8=In,t.lengthBytesUTF8=Aa;var ef,tf,Wa,rn,xi,Ko,nf,rf,af,Qo,sf,of,he,bi,lf,ce,Zo,pe,uf,Xo,df,cf,pf,Yo,ff,hf,mf,gf,yf,vf,wf,_f,$f,xf,bf,kf,Sf,Ef,Tf,Cf,zf,If,Rf,Of,Nf,Af,Mf,Bf,Df,Pf,Lf,Uf,jf,Wf,Vf,Ff,qf,Hf,Gf,Kf,Qf,Zf,Xf,fn,pb=[$t,Ra,fp,vp,wp,_p,$p,xp,bp,kp,Sp,Ep,Tp,Cp,zp,Ip,Wp,Vp,Fp,Kp,Qp,Zp,Xp,Yp,Jp],Jo={1003524:(u,c,_,y,E)=>{if(t===void 0||!t.Xc)return 1;if((u=We(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=t.Xc.get(u)))return 2;if(c=Number(c>>>0),_=Number(_>>>0),y=Number(y>>>0),c+_>u.byteLength)return 3;try{let z=u.subarray(c,c+_);switch(E){case 0:(b(),H).set(z,y>>>0);break;case 1:t.Qd?t.Qd(y,z):t.Id(y,z);break;default:return 4}return 0}catch{return 4}},1004348:(u,c,_)=>{t.td(u,(b(),H).subarray(c>>>0,c+_>>>0))},1004412:()=>t.Sd(),1004454:u=>{t.sd(u)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:u=>t.Ad(u),1004609:u=>t.Ed(u),1004641:(u,c,_)=>{t.ed(Number(u),Number(c),Number(_),!0)},1004704:(u,c,_)=>{t.ed(Number(u),Number(c),Number(_))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:u=>{t.$b("Abs",u,void 0)},1004869:u=>{t.$b("Neg",u,void 0)},1004920:u=>{t.$b("Floor",u,void 0)},1004973:u=>{t.$b("Ceil",u,void 0)},1005025:u=>{t.$b("Reciprocal",u,void 0)},1005083:u=>{t.$b("Sqrt",u,void 0)},1005135:u=>{t.$b("Exp",u,void 0)},1005186:u=>{t.$b("Erf",u,void 0)},1005237:u=>{t.$b("Sigmoid",u,void 0)},1005292:(u,c,_)=>{t.$b("HardSigmoid",u,{alpha:c,beta:_})},1005371:u=>{t.$b("Log",u,void 0)},1005422:u=>{t.$b("Sin",u,void 0)},1005473:u=>{t.$b("Cos",u,void 0)},1005524:u=>{t.$b("Tan",u,void 0)},1005575:u=>{t.$b("Asin",u,void 0)},1005627:u=>{t.$b("Acos",u,void 0)},1005679:u=>{t.$b("Atan",u,void 0)},1005731:u=>{t.$b("Sinh",u,void 0)},1005783:u=>{t.$b("Cosh",u,void 0)},1005835:u=>{t.$b("Asinh",u,void 0)},1005888:u=>{t.$b("Acosh",u,void 0)},1005941:u=>{t.$b("Atanh",u,void 0)},1005994:u=>{t.$b("Tanh",u,void 0)},1006046:u=>{t.$b("Not",u,void 0)},1006097:(u,c,_)=>{t.$b("Clip",u,{min:c,max:_})},1006166:u=>{t.$b("Clip",u,void 0)},1006218:(u,c)=>{t.$b("Elu",u,{alpha:c})},1006276:u=>{t.$b("Gelu",u,void 0)},1006328:u=>{t.$b("Relu",u,void 0)},1006380:(u,c)=>{t.$b("LeakyRelu",u,{alpha:c})},1006444:(u,c)=>{t.$b("ThresholdedRelu",u,{alpha:c})},1006514:(u,c)=>{t.$b("Cast",u,{to:c})},1006572:u=>{t.$b("Add",u,void 0)},1006623:u=>{t.$b("Sub",u,void 0)},1006674:u=>{t.$b("Mul",u,void 0)},1006725:u=>{t.$b("Div",u,void 0)},1006776:u=>{t.$b("Pow",u,void 0)},1006827:u=>{t.$b("Equal",u,void 0)},1006880:u=>{t.$b("Greater",u,void 0)},1006935:u=>{t.$b("GreaterOrEqual",u,void 0)},1006997:u=>{t.$b("Less",u,void 0)},1007049:u=>{t.$b("LessOrEqual",u,void 0)},1007108:(u,c,_,y,E)=>{t.$b("ReduceMean",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1007283:(u,c,_,y,E)=>{t.$b("ReduceMax",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1007457:(u,c,_,y,E)=>{t.$b("ReduceMin",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1007631:(u,c,_,y,E)=>{t.$b("ReduceProd",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1007806:(u,c,_,y,E)=>{t.$b("ReduceSum",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1007980:(u,c,_,y,E)=>{t.$b("ReduceL1",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1008153:(u,c,_,y,E)=>{t.$b("ReduceL2",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1008326:(u,c,_,y,E)=>{t.$b("ReduceLogSum",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1008503:(u,c,_,y,E)=>{t.$b("ReduceSumSquare",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1008683:(u,c,_,y,E)=>{t.$b("ReduceLogSumExp",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1008863:u=>{t.$b("Where",u,void 0)},1008916:(u,c,_)=>{t.$b("Transpose",u,{perm:c?Array.from((b(),M).subarray(Number(c)>>>0,Number(_)>>>0)):[]})},1009040:(u,c,_,y)=>{t.$b("DepthToSpace",u,{blocksize:c,mode:We(_),format:y?"NHWC":"NCHW"})},1009173:(u,c,_,y)=>{t.$b("DepthToSpace",u,{blocksize:c,mode:We(_),format:y?"NHWC":"NCHW"})},1009306:(u,c,_,y,E,z,R,P,G,Y,de,ve,be,ze,On)=>{t.$b("ConvTranspose",u,{format:G?"NHWC":"NCHW",autoPad:c,dilations:[_],group:y,kernelShape:[E],pads:[z,R],strides:[P],wIsConst:()=>!!(b(),A)[Y>>>0],outputPadding:de?Array.from((b(),M).subarray(Number(de)>>>0,Number(ve)>>>0)):[],outputShape:be?Array.from((b(),M).subarray(Number(be)>>>0,Number(ze)>>>0)):[],activation:We(On)})},1009739:(u,c,_,y,E,z,R,P,G,Y,de,ve,be,ze)=>{t.$b("ConvTranspose",u,{format:P?"NHWC":"NCHW",autoPad:c,dilations:Array.from((b(),M).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:y,kernelShape:Array.from((b(),M).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((b(),M).subarray(Number(z)>>>0,(Number(z)>>>0)+4>>>0)),strides:Array.from((b(),M).subarray(Number(R)>>>0,(Number(R)>>>0)+2>>>0)),wIsConst:()=>!!(b(),A)[G>>>0],outputPadding:Y?Array.from((b(),M).subarray(Number(Y)>>>0,Number(de)>>>0)):[],outputShape:ve?Array.from((b(),M).subarray(Number(ve)>>>0,Number(be)>>>0)):[],activation:We(ze)})},1010400:(u,c,_,y,E,z,R,P,G,Y,de,ve,be,ze,On)=>{t.$b("ConvTranspose",u,{format:G?"NHWC":"NCHW",autoPad:c,dilations:[_],group:y,kernelShape:[E],pads:[z,R],strides:[P],wIsConst:()=>!!(b(),A)[Y>>>0],outputPadding:de?Array.from((b(),M).subarray(Number(de)>>>0,Number(ve)>>>0)):[],outputShape:be?Array.from((b(),M).subarray(Number(be)>>>0,Number(ze)>>>0)):[],activation:We(On)})},1010833:(u,c,_,y,E,z,R,P,G,Y,de,ve,be,ze)=>{t.$b("ConvTranspose",u,{format:P?"NHWC":"NCHW",autoPad:c,dilations:Array.from((b(),M).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:y,kernelShape:Array.from((b(),M).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((b(),M).subarray(Number(z)>>>0,(Number(z)>>>0)+4>>>0)),strides:Array.from((b(),M).subarray(Number(R)>>>0,(Number(R)>>>0)+2>>>0)),wIsConst:()=>!!(b(),A)[G>>>0],outputPadding:Y?Array.from((b(),M).subarray(Number(Y)>>>0,Number(de)>>>0)):[],outputShape:ve?Array.from((b(),M).subarray(Number(ve)>>>0,Number(be)>>>0)):[],activation:We(ze)})},1011494:(u,c)=>{t.$b("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},1011585:(u,c,_,y,E,z,R,P,G,Y,de,ve,be,ze)=>{t.$b("AveragePool",u,{format:ze?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:y,storage_order:E,dilations:z?Array.from((b(),M).subarray(Number(z)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((b(),M).subarray(Number(P)>>>0,Number(G)>>>0)):[],pads:Y?Array.from((b(),M).subarray(Number(Y)>>>0,Number(de)>>>0)):[],strides:ve?Array.from((b(),M).subarray(Number(ve)>>>0,Number(be)>>>0)):[]})},1012064:(u,c)=>{t.$b("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},1012155:(u,c,_,y,E,z,R,P,G,Y,de,ve,be,ze)=>{t.$b("AveragePool",u,{format:ze?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:y,storage_order:E,dilations:z?Array.from((b(),M).subarray(Number(z)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((b(),M).subarray(Number(P)>>>0,Number(G)>>>0)):[],pads:Y?Array.from((b(),M).subarray(Number(Y)>>>0,Number(de)>>>0)):[],strides:ve?Array.from((b(),M).subarray(Number(ve)>>>0,Number(be)>>>0)):[]})},1012634:(u,c)=>{t.$b("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},1012721:(u,c,_,y,E,z,R,P,G,Y,de,ve,be,ze)=>{t.$b("MaxPool",u,{format:ze?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:y,storage_order:E,dilations:z?Array.from((b(),M).subarray(Number(z)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((b(),M).subarray(Number(P)>>>0,Number(G)>>>0)):[],pads:Y?Array.from((b(),M).subarray(Number(Y)>>>0,Number(de)>>>0)):[],strides:ve?Array.from((b(),M).subarray(Number(ve)>>>0,Number(be)>>>0)):[]})},1013196:(u,c)=>{t.$b("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},1013283:(u,c,_,y,E,z,R,P,G,Y,de,ve,be,ze)=>{t.$b("MaxPool",u,{format:ze?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:y,storage_order:E,dilations:z?Array.from((b(),M).subarray(Number(z)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((b(),M).subarray(Number(P)>>>0,Number(G)>>>0)):[],pads:Y?Array.from((b(),M).subarray(Number(Y)>>>0,Number(de)>>>0)):[],strides:ve?Array.from((b(),M).subarray(Number(ve)>>>0,Number(be)>>>0)):[]})},1013758:(u,c,_,y,E)=>{t.$b("Gemm",u,{alpha:c,beta:_,transA:y,transB:E})},1013862:u=>{t.$b("MatMul",u,void 0)},1013916:(u,c,_,y)=>{t.$b("ArgMax",u,{keepDims:!!c,selectLastIndex:!!_,axis:y})},1014024:(u,c,_,y)=>{t.$b("ArgMin",u,{keepDims:!!c,selectLastIndex:!!_,axis:y})},1014132:(u,c)=>{t.$b("Softmax",u,{axis:c})},1014195:(u,c)=>{t.$b("Concat",u,{axis:c})},1014255:(u,c,_,y,E)=>{t.$b("Split",u,{axis:c,numOutputs:_,splitSizes:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1014411:u=>{t.$b("Expand",u,void 0)},1014465:(u,c)=>{t.$b("Gather",u,{axis:Number(c)})},1014536:(u,c)=>{t.$b("GatherElements",u,{axis:Number(c)})},1014615:(u,c)=>{t.$b("GatherND",u,{batch_dims:Number(c)})},1014694:(u,c,_,y,E,z,R,P,G,Y,de)=>{t.$b("Resize",u,{antialias:c,axes:_?Array.from((b(),M).subarray(Number(_)>>>0,Number(y)>>>0)):[],coordinateTransformMode:We(E),cubicCoeffA:z,excludeOutside:R,extrapolationValue:P,keepAspectRatioPolicy:We(G),mode:We(Y),nearestMode:We(de)})},1015056:(u,c,_,y,E,z,R)=>{t.$b("Slice",u,{starts:c?Array.from((b(),M).subarray(Number(c)>>>0,Number(_)>>>0)):[],ends:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[],axes:z?Array.from((b(),M).subarray(Number(z)>>>0,Number(R)>>>0)):[]})},1015320:u=>{t.$b("Tile",u,void 0)},1015372:(u,c,_)=>{t.$b("InstanceNormalization",u,{epsilon:c,format:_?"NHWC":"NCHW"})},1015486:(u,c,_)=>{t.$b("InstanceNormalization",u,{epsilon:c,format:_?"NHWC":"NCHW"})},1015600:u=>{t.$b("Range",u,void 0)},1015653:(u,c)=>{t.$b("Einsum",u,{equation:We(c)})},1015734:(u,c,_,y,E)=>{t.$b("Pad",u,{mode:c,value:_,pads:y?Array.from((b(),M).subarray(Number(y)>>>0,Number(E)>>>0)):[]})},1015877:(u,c,_,y,E,z)=>{t.$b("BatchNormalization",u,{epsilon:c,momentum:_,spatial:!!E,trainingMode:!!y,format:z?"NHWC":"NCHW"})},1016046:(u,c,_,y,E,z)=>{t.$b("BatchNormalization",u,{epsilon:c,momentum:_,spatial:!!E,trainingMode:!!y,format:z?"NHWC":"NCHW"})},1016215:(u,c,_)=>{t.$b("CumSum",u,{exclusive:Number(c),reverse:Number(_)})},1016312:(u,c,_)=>{t.$b("DequantizeLinear",u,{axis:c,blockSize:_})},1016402:(u,c,_,y,E)=>{t.$b("GridSample",u,{align_corners:c,mode:We(_),padding_mode:We(y),format:E?"NHWC":"NCHW"})},1016572:(u,c,_,y,E)=>{t.$b("GridSample",u,{align_corners:c,mode:We(_),padding_mode:We(y),format:E?"NHWC":"NCHW"})},1016742:(u,c)=>{t.$b("ScatterND",u,{reduction:We(c)})},1016827:(u,c,_,y,E,z,R,P,G)=>{t.$b("Attention",u,{numHeads:c,isUnidirectional:_,maskFilterValue:y,scale:E,doRotary:z,qkvHiddenSizes:R?Array.from((b(),M).subarray(Number(P)>>>0,Number(P)+R>>>0)):[],pastPresentShareBuffer:!!G})},1017099:u=>{t.$b("BiasAdd",u,void 0)},1017154:u=>{t.$b("BiasSplitGelu",u,void 0)},1017215:u=>{t.$b("FastGelu",u,void 0)},1017271:(u,c,_,y,E,z,R,P,G,Y,de,ve,be,ze,On,el)=>{t.$b("Conv",u,{format:ve?"NHWC":"NCHW",auto_pad:c,dilations:_?Array.from((b(),M).subarray(Number(_)>>>0,Number(y)>>>0)):[],group:E,kernel_shape:z?Array.from((b(),M).subarray(Number(z)>>>0,Number(R)>>>0)):[],pads:P?Array.from((b(),M).subarray(Number(P)>>>0,Number(G)>>>0)):[],strides:Y?Array.from((b(),M).subarray(Number(Y)>>>0,Number(de)>>>0)):[],w_is_const:()=>!!(b(),A)[Number(be)>>>0],activation:We(ze),activation_params:On?Array.from((b(),ee).subarray(Number(On)>>>0,Number(el)>>>0)):[]})},1017855:u=>{t.$b("Gelu",u,void 0)},1017907:(u,c,_,y,E,z,R,P,G)=>{t.$b("GroupQueryAttention",u,{numHeads:c,kvNumHeads:_,scale:y,softcap:E,doRotary:z,rotaryInterleaved:R,smoothSoftmax:P,localWindowSize:G})},1018124:(u,c,_,y)=>{t.$b("LayerNormalization",u,{axis:c,epsilon:_,simplified:!!y})},1018235:(u,c,_,y)=>{t.$b("LayerNormalization",u,{axis:c,epsilon:_,simplified:!!y})},1018346:(u,c,_,y,E,z)=>{t.$b("MatMulNBits",u,{k:c,n:_,accuracyLevel:y,bits:E,blockSize:z})},1018473:(u,c,_,y,E,z)=>{t.$b("MultiHeadAttention",u,{numHeads:c,isUnidirectional:_,maskFilterValue:y,scale:E,doRotary:z})},1018632:(u,c)=>{t.$b("QuickGelu",u,{alpha:c})},1018696:(u,c,_,y,E)=>{t.$b("RotaryEmbedding",u,{interleaved:!!c,numHeads:_,rotaryEmbeddingDim:y,scale:E})},1018835:(u,c,_)=>{t.$b("SkipLayerNormalization",u,{epsilon:c,simplified:!!_})},1018937:(u,c,_)=>{t.$b("SkipLayerNormalization",u,{epsilon:c,simplified:!!_})},1019039:(u,c,_,y)=>{t.$b("GatherBlockQuantized",u,{gatherAxis:c,quantizeAxis:_,blockSize:y})},1019160:u=>{t.Fd(u)},1019194:(u,c)=>t.Hd(Number(u),Number(c),t.Yc.Kd,t.Yc.errors)};function fb(u,c,_){return Dp(async()=>{await t.Dd(Number(u),Number(c),Number(_))})}function hb(){return typeof wasmOffsetConverter<"u"}function mb(u,c,_,y){var E=pe();try{return _f(u,c,_,y)}catch(z){if(ce(E),z!==z+0)throw z;he(1,0)}}function gb(u,c,_){var y=pe();try{return gf(u,c,_)}catch(E){if(ce(y),E!==E+0)throw E;he(1,0)}}function yb(u){var c=pe();try{ff(u)}catch(_){if(ce(c),_!==_+0)throw _;he(1,0)}}function vb(u,c){var _=pe();try{return Yo(u,c)}catch(y){if(ce(_),y!==y+0)throw y;he(1,0)}}function wb(u,c,_){var y=pe();try{pf(u,c,_)}catch(E){if(ce(y),E!==E+0)throw E;he(1,0)}}function _b(u,c){var _=pe();try{$f(u,c)}catch(y){if(ce(_),y!==y+0)throw y;he(1,0)}}function $b(u,c,_,y,E,z,R){var P=pe();try{return vf(u,c,_,y,E,z,R)}catch(G){if(ce(P),G!==G+0)throw G;he(1,0)}}function xb(u,c,_,y,E,z){var R=pe();try{hf(u,c,_,y,E,z)}catch(P){if(ce(R),P!==P+0)throw P;he(1,0)}}function bb(u,c,_,y){var E=pe();try{wf(u,c,_,y)}catch(z){if(ce(E),z!==z+0)throw z;he(1,0)}}function kb(u,c,_,y,E){var z=pe();try{mf(u,c,_,y,E)}catch(R){if(ce(z),R!==R+0)throw R;he(1,0)}}function Sb(u,c,_,y,E,z,R){var P=pe();try{bf(u,c,_,y,E,z,R)}catch(G){if(ce(P),G!==G+0)throw G;he(1,0)}}function Eb(u,c,_,y,E,z,R){var P=pe();try{kf(u,c,_,y,E,z,R)}catch(G){if(ce(P),G!==G+0)throw G;he(1,0)}}function Tb(u,c,_,y,E,z,R,P){var G=pe();try{Cf(u,c,_,y,E,z,R,P)}catch(Y){if(ce(G),Y!==Y+0)throw Y;he(1,0)}}function Cb(u,c,_,y,E){var z=pe();try{return xf(u,c,_,y,E)}catch(R){if(ce(z),R!==R+0)throw R;he(1,0)}}function zb(u,c,_){var y=pe();try{return zf(u,c,_)}catch(E){if(ce(y),E!==E+0)throw E;he(1,0)}}function Ib(u,c,_,y,E,z,R,P){var G=pe();try{If(u,c,_,y,E,z,R,P)}catch(Y){if(ce(G),Y!==Y+0)throw Y;he(1,0)}}function Rb(u,c,_,y,E,z,R,P,G,Y,de,ve){var be=pe();try{Sf(u,c,_,y,E,z,R,P,G,Y,de,ve)}catch(ze){if(ce(be),ze!==ze+0)throw ze;he(1,0)}}function Ob(u,c,_,y,E,z){var R=pe();try{return Ef(u,c,_,y,E,z)}catch(P){if(ce(R),P!==P+0)throw P;he(1,0)}}function Nb(u,c,_){var y=pe();try{return Rf(u,c,_)}catch(E){if(ce(y),E!==E+0)throw E;return he(1,0),0n}}function Ab(u,c,_,y,E,z,R,P,G){var Y=pe();try{yf(u,c,_,y,E,z,R,P,G)}catch(de){if(ce(Y),de!==de+0)throw de;he(1,0)}}function Mb(u){var c=pe();try{return Of(u)}catch(_){if(ce(c),_!==_+0)throw _;he(1,0)}}function Bb(u,c){var _=pe();try{return Gf(u,c)}catch(y){if(ce(_),y!==y+0)throw y;return he(1,0),0n}}function Db(u){var c=pe();try{return Nf(u)}catch(_){if(ce(c),_!==_+0)throw _;return he(1,0),0n}}function Pb(u,c,_,y){var E=pe();try{return Lf(u,c,_,y)}catch(z){if(ce(E),z!==z+0)throw z;he(1,0)}}function Lb(u,c,_,y,E){var z=pe();try{return Uf(u,c,_,y,E)}catch(R){if(ce(z),R!==R+0)throw R;he(1,0)}}function Ub(u,c,_,y,E,z){var R=pe();try{return jf(u,c,_,y,E,z)}catch(P){if(ce(R),P!==P+0)throw P;he(1,0)}}function jb(u,c,_,y,E,z){var R=pe();try{return Wf(u,c,_,y,E,z)}catch(P){if(ce(R),P!==P+0)throw P;he(1,0)}}function Wb(u,c,_,y,E,z,R,P){var G=pe();try{return Tf(u,c,_,y,E,z,R,P)}catch(Y){if(ce(G),Y!==Y+0)throw Y;he(1,0)}}function Vb(u,c,_,y,E){var z=pe();try{return Vf(u,c,_,y,E)}catch(R){if(ce(z),R!==R+0)throw R;return he(1,0),0n}}function Fb(u,c,_,y){var E=pe();try{return Ff(u,c,_,y)}catch(z){if(ce(E),z!==z+0)throw z;he(1,0)}}function qb(u,c,_,y){var E=pe();try{return qf(u,c,_,y)}catch(z){if(ce(E),z!==z+0)throw z;he(1,0)}}function Hb(u,c,_,y,E,z,R,P,G,Y,de,ve){var be=pe();try{return Hf(u,c,_,y,E,z,R,P,G,Y,de,ve)}catch(ze){if(ce(be),ze!==ze+0)throw ze;he(1,0)}}function Gb(u,c,_,y,E,z,R,P,G,Y,de){var ve=pe();try{Df(u,c,_,y,E,z,R,P,G,Y,de)}catch(be){if(ce(ve),be!==be+0)throw be;he(1,0)}}function Kb(u,c,_,y,E,z,R,P,G,Y,de,ve,be,ze,On,el){var Yb=pe();try{Pf(u,c,_,y,E,z,R,P,G,Y,de,ve,be,ze,On,el)}catch(tl){if(ce(Yb),tl!==tl+0)throw tl;he(1,0)}}function Qb(u,c,_){var y=pe();try{return Af(u,c,_)}catch(E){if(ce(y),E!==E+0)throw E;he(1,0)}}function Zb(u,c,_){var y=pe();try{return Mf(u,c,_)}catch(E){if(ce(y),E!==E+0)throw E;he(1,0)}}function Xb(u,c,_,y){var E=pe();try{Bf(u,c,_,y)}catch(z){if(ce(E),z!==z+0)throw z;he(1,0)}}function Va(){if(0<lt)ht=Va;else if(i)w==null||w(t),X();else{for(var u=nt;0<u.length;)u.shift()(t);0<lt?ht=Va:(t.calledRun=!0,C||(X(),w==null||w(t)))}}return i||(fn=await Me(),Va()),t.PTR_SIZE=4,D?t:new Promise((u,c)=>{w=u,S=c})}var Cw,pm,pE=F(()=>{var e,t;Cw=cm,pm=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),pm&&cm()}),Nl,_d,fm,xt,zw,ls,hm,mm,Al,gm,Ml,Iw,Bl,Rw,Mc=F(()=>{Ac(),Nl=typeof location>"u"?void 0:location.origin,_d=import.meta.url>"file:"&&import.meta.url<"file;",fm=()=>{{if(_d){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Nl).href}return import.meta.url}},xt=fm(),zw=()=>{if(xt&&!xt.startsWith("blob:"))return xt.substring(0,xt.lastIndexOf("/")+1)},ls=(e,t)=>{try{let n=t??xt;return(n?new URL(e,n):new URL(e)).origin===Nl}catch{return!1}},hm=(e,t)=>{let n=t??xt;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},mm=(e,t)=>`${t??"./"}${e}`,Al=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},gm=async e=>(await import(e)).default,Ml=(cE(),ka(Sw)).default,Iw=async()=>{if(!xt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ls(xt))return[void 0,Ml()];let e=await Al(xt);return[e,Ml(e)]},Bl=(pE(),ka(Tw)).default,Rw=async(e,t,n,r)=>{let i=Bl&&!(e||t);if(i)if(xt)i=ls(xt)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Bl];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??hm(a,t),o=n&&s&&!ls(s,t),l=o?await Al(s):s??mm(a,t);return[o?l:void 0,await gm(l)]}}}),Dl,us,Ni,Pl,ym,vm,wm,Bc,Te,Ar=F(()=>{Mc(),us=!1,Ni=!1,Pl=!1,ym=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},vm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},wm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Bc=async e=>{if(us)return Promise.resolve();if(Ni)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Pl)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ni=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!wm())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!vm())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=ym();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,l=i==null?void 0:i.wasm,d=(l==null?void 0:l.href)??l,f=e.wasmBinary,[p,h]=await Rw(o,a,n>1,!!f||!!d),v=!1,$=[];if(t>0&&$.push(new Promise(w=>{setTimeout(()=>{v=!0,w()},t)})),$.push(new Promise((w,S)=>{let g={numThreads:n};if(f)g.wasmBinary=f,g.locateFile=m=>m;else if(d||a)g.locateFile=m=>d??a+m;else if(o&&o.indexOf("blob:")!==0)g.locateFile=m=>new URL(m,o).href;else if(p){let m=zw();m&&(g.locateFile=x=>m+x)}h(g).then(m=>{Ni=!1,us=!0,Dl=m,w(),p&&URL.revokeObjectURL(p)},m=>{Ni=!1,Pl=!0,S(m)})})),await Promise.race($),v)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Te=()=>{if(us&&Dl)return Dl;throw new Error("WebAssembly is not initialized yet.")}}),Zt,oo,xe,Dc=F(()=>{Ar(),Zt=(e,t)=>{let n=Te(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},oo=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")oo(a,s+".",n,r);else if(typeof a=="string"||typeof a=="number")r(s,a.toString());else if(typeof a=="boolean")r(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},xe=e=>{let t=Te(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),Ow,fE=F(()=>{Ar(),Dc(),Ow=e=>{let t=Te(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=Zt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&xe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&oo(e.extra,"",new WeakSet,(s,o)=>{let l=Zt(s,r),d=Zt(o,r);t._OrtAddRunConfigEntry(n,l,d)!==0&&xe(`Can't set a run config entry: ${s} - ${o}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),a}}}),_m,$m,xm,or,bm,Nw,hE=F(()=>{Ar(),Dc(),_m=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},$m=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},xm=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},or=(e,t,n,r)=>{let i=Zt(t,r),a=Zt(n,r);Te()._OrtAddSessionConfigEntry(e,i,a)!==0&&xe(`Can't set a session config entry: ${t} - ${n}.`)},bm=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",or(e,"session.disable_quant_qdq","1",n),or(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&or(e,"deviceType",p,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);or(e,"preferredLayout",p.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=Zt(a,n),l=s.length,d=0,f=0;if(l>0){d=Te()._malloc(l*Te().PTR_SIZE),n.push(d),f=Te()._malloc(l*Te().PTR_SIZE),n.push(f);for(let p=0;p<l;p++)Te().setValue(d+p*Te().PTR_SIZE,s[p][0],"*"),Te().setValue(f+p*Te().PTR_SIZE,s[p][1],"*")}await Te()._OrtAppendExecutionProvider(e,o,d,f,l)!==0&&xe(`Can't append execution provider: ${a}.`)}},Nw=async e=>{let t=Te(),n=0,r=[],i=e||{};xm(i);try{let a=_m(i.graphOptimizationLevel??"all"),s=$m(i.executionMode??"sequential"),o=typeof i.logId=="string"?Zt(i.logId,r):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let f=typeof i.optimizedModelFilePath=="string"?Zt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,l,d,f),n===0&&xe("Can't create session options."),i.executionProviders&&await bm(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);or(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[p,h]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let v=Zt(p,r);t._OrtAddFreeDimensionOverride(n,v,h)!==0&&xe(`Can't set a free dimension override: ${p} - ${h}.`)}return i.extra!==void 0&&oo(i.extra,"",new WeakSet,(p,h)=>{or(n,p,h,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&xe("Can't release session options."),r.forEach(s=>t._free(s)),a}}}),mr,yn,gr,Oo,lo,Pc,Lc,$d,se=F(()=>{mr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},yn=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},gr=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Oo=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},lo=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Pc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Lc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",$d=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Uc,Aw=F(()=>{Ac(),Uc=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let l=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let s=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(a,s,d).set(l),s+=d}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),km,Sm,Em,Tm,jc,Cm,ge,En=F(()=>{se(),km=["V","I","W","E","F"],Sm=(e,t)=>{console.log(`[${km[e]},${new Date().toISOString()}]${t}`)},jc=(e,t)=>{Em=e,Tm=t},Cm=(e,t)=>{let n=lo(e),r=lo(Em);n>=r&&Sm(n,typeof t=="function"?t():t)},ge=(...e)=>{Tm&&Cm(...e)}}),zm,fi,B,uo,Mw,Bw,Dw,le=F(()=>{zm=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},fi=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(r<2||i<2)return;let o=zm.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=n?3:1;o<=a;o++){let l=r-o<0?1:e[r-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let f=Math.max(l,d);if(l&&d)s[a-o]=Math.max(l,d);else{if(f>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},B=class As{static size(t){return As.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return As.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return As.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},uo=class Gi{static adjustPoolAttributes(t,n,r,i,a,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=r[o]||s[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Gi.adjustPadAndReturnShape(t[l+(s?1:2)],n[l],r[l],i[l],a,l,l+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,s,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let l=[n[0],n[1]];return Gi.computeShapeHelper(t,n,l,r,i,a,s,o),l}static computeConvOutputShape(t,n,r,i,a,s,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],n[0]];return Gi.computeShapeHelper(!1,t,l,r,i,a,s,o),l}static computeShapeHelper(t,n,r,i,a,s,o,l){if(t)for(let d=0;d<n.length-2;d++)r.push(1);else for(let d=0;d<n.length-2;d++)r.push(Gi.adjustPadAndReturnShape(n[d+2],i[d],a[d],s[d],o,d,d+n.length-2,l))}static adjustPadAndReturnShape(t,n,r,i,a,s,o,l){let d=r*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-d)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+n-1)/n-1)*n+i-t;return a[s]=Math.floor(l==="SAME_LOWER"?(f+1)/2:f/2),a[o]=f-a[s],Math.floor((t+f-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-d)/n+1)}},Mw=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(r?(o=n[0],l=1):(o=n[1],l=0),n[l]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!fi.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Bw=-34028234663852886e22,Dw=34028234663852886e22}),Wc,Pw=F(()=>{se(),Wc=(e,t)=>new(Oo(t))(e)}),Ll,xd,Ul,Im,jl,Rm,Wl,Vl,Fl,Om,Lw,mE=F(()=>{se(),En(),Ll=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),xd=(e,t)=>{if(t==="int32")return e;let n=Ll.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Oo(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let l=a[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ul=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Im=1,jl=()=>Im++,Rm=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Wl=(e,t)=>{let n=Ll.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Vl=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Wl(this.dataType,this.tensorShape)}destroy(){ge("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Ul(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Fl=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Rm.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);ge("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Wl(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=xd(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ge("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Ul(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Om=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=jl();return this.tensorTrackersById.set(e,new Fl(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){ge("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){ge("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=jl(),s=new Vl({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new Fl(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,r,i,a,s){let o=this.getMLContext(e);for(let[d,f]of this.freeTensors.entries())if(f.canReuseTensor(o,t,n)){ge("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}ge("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let l=await o.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Vl({sessionId:e,context:o,tensor:l,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Lw=(...e)=>new Om(...e)}),Ai,Nm,Uw,gE=F(()=>{se(),Ar(),Pw(),mE(),En(),Ai=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Nm=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Uw=class{constructor(e){this.tensorManager=Lw(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,jc(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ge("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ge("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)ge("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Nm(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ge("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Ai.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){ge("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Ai.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Te().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ge("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Wc(n,t)}}registerMLTensor(e,t,n,r){let i=Ai.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return ge("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=a.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+n).buffer,f;switch(i.dataType){case"float32":f=new Float32Array(d);break;case"float16":f=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":f=new Int32Array(d);break;case"uint32":f=new Uint32Array(d);break;case"int64":if(s){let p=xd(new Uint8Array(d),"int64");f=new Int32Array(p.buffer),i.dataType="int32"}else f=new BigInt64Array(d);break;case"uint64":f=new BigUint64Array(d);break;case"int8":f=new Int8Array(d);break;case"int4":case"uint4":case"uint8":f=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ge("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,f)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Ai.get(mr(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Vc=F(()=>{}),ql,ds,cs,Am,Mm,Hl,bd,Bm,jw,yE=F(()=>{En(),Vc(),ql=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),ds=[],cs=e=>Math.ceil(Number(e)/16)*16,Am=e=>{for(let t=0;t<ds.length;t++){let n=ds[t];if(e<=n)return n}return Math.ceil(e/16)*16},Mm=1,Hl=()=>Mm++,bd=async(e,t,n,r)=>{let i=cs(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(r){let l=r();return l.set(new Uint8Array(o,0,n)),l}else return new Uint8Array(o.slice(0,n))}finally{a.destroy()}},Bm=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ql)ds.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=cs(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(n,r,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),o.destroy(),ge("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=cs(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Hl();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ge("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Am(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:Hl(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ge("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ge("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await bd(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ql.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ge("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},jw=(...e)=>new Bm(...e)}),Dm,$e,Le=F(()=>{Dm=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},$e=e=>new Dm(e)}),hi,ps,Ge,at,ae,Ae,kd,Jr,Jn,ie,Mi,U,ne,Ww,Fc,Pm,Vw,ue=F(()=>{se(),le(),hi=64,ps=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ge=(e,t=1)=>{let n=ps(e,t);return typeof n=="string"?n:n[0]},at=(e,t=1)=>{let n=ps(e,t);return typeof n=="string"?n:n[1]},ae=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:B.computeStrides(n)})}),t},Ae=e=>e%4===0?4:e%2===0?2:1,kd=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Jr=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Jn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ie=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Mi=(e,t,n,r,i)=>{let a=typeof n=="number",s=a?n:n.length,o=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=ps(t,i),f=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],h={indices:l,value:f,storage:p,tensor:t},v=D=>typeof D=="string"?D:`${D}u`,$={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=a?"uniforms.":"",S=`${w}${e}_shape`,g=`${w}${e}_strides`,m="";for(let D=0;D<s-1;D++)m+=`
    let dim${D} = current / ${ie(g,D,s)};
    let rest${D} = current % ${ie(g,D,s)};
    indices[${D}] = dim${D};
    current = rest${D};
    `;m+=`indices[${s-1}] = current;`;let x=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${m}
    return indices;
  }`,k=D=>($.offsetToIndices=!0,s<2?D:`o2i_${e}(${D})`),T=[];if(s>=2)for(let D=s-1;D>=0;D--)T.push(`${ie(g,D,s)} * (indices[${D}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${T.join("+")};
  }`,I=D=>($.indicesToOffset=!0,s<2?D:`i2o_${e}(${D})`),b=(...D)=>s===0?"0u":`${h.indices}(${D.map(v).join(",")})`,N=(D,W)=>s<2?`${D}`:`${ie(D,W,s)}`,A=(D,W,X)=>s<2?`${D}=${X};`:`${ie(D,W,s)}=${X};`,H={},Q=(D,W)=>{$.broadcastedIndicesToOffset=!0;let X=`${W.name}broadcastedIndicesTo${e}Offset`;if(X in H)return`${X}(${D})`;let V=[];for(let fe=s-1;fe>=0;fe--){let Me=W.indicesGet("outputIndices",fe+W.rank-s);V.push(`${N(g,fe)} * (${Me} % ${N(S,fe)})`)}return H[X]=`fn ${X}(outputIndices: ${W.type.indices}) -> u32 {
             return ${V.length>0?V.join("+"):"0u"};
           }`,`${X}(${D})`},Z=(D,W)=>(()=>{if(h.storage===h.value)return`${e}[${D}]=${W};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${D}]=vec2<u32>(u32(${W}), select(0u, 0xFFFFFFFFu, ${W} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${D}]=vec2<u32>(u32(${W}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${D}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${W}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),M=D=>(()=>{if(h.storage===h.value)return`${e}[${D}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${D}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${D}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${D}] & 0xFFu), bool(${e}[${D}] & 0xFF00u), bool(${e}[${D}] & 0xFF0000u), bool(${e}[${D}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),J=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${f} {
    return ${M(`i2o_${e}(indices)`)};
  }`,ee=s<2?"":(()=>{let D=o.map(X=>`d${X}: u32`).join(", "),W=o.map(X=>`d${X}`).join(", ");return`
  fn get_${e}(${D}) -> ${f} {
    return get_${e}ByIndices(${b(W)});
  }`})(),te=(...D)=>{if(D.length!==s)throw new Error(`indices length must be ${s}`);let W=D.map(v).join(",");return s===0?M("0u"):s===1?M(W[0]):($.get=!0,$.getByIndices=!0,$.indicesToOffset=!0,`get_${e}(${W})`)},j=D=>s<2?M(D):($.getByIndices=!0,$.indicesToOffset=!0,`get_${e}ByIndices(${D})`),L=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${f}) {
    ${Z(`i2o_${e}(indices)`,"value")}
  }`,K=s<2?"":(()=>{let D=o.map(X=>`d${X}: u32`).join(", "),W=o.map(X=>`d${X}`).join(", ");return`
  fn set_${e}(${D}, value: ${f}) {
    set_${e}ByIndices(${b(W)}, value);
  }`})();return{impl:()=>{let D=[],W=!1;return $.offsetToIndices&&(D.push(x),W=!0),$.indicesToOffset&&(D.push(C),W=!0),$.broadcastedIndicesToOffset&&(Object.values(H).forEach(X=>D.push(X)),W=!0),$.set&&(D.push(K),W=!0),$.setByIndices&&(D.push(L),W=!0),$.get&&(D.push(ee),W=!0),$.getByIndices&&(D.push(J),W=!0),!a&&W&&D.unshift(`const ${S} = ${h.indices}(${n.join(",")});`,`const ${g} = ${h.indices}(${B.computeStrides(n).join(",")});`),D.join(`
`)},type:h,offsetToIndices:k,indicesToOffset:I,broadcastedIndicesToOffset:Q,indices:b,indicesGet:N,indicesSet:A,set:(...D)=>{if(D.length!==s+1)throw new Error(`indices length must be ${s}`);let W=D[s];if(typeof W!="string")throw new Error("value must be string");let X=D.slice(0,s).map(v).join(",");return s===0?Z("0u",W):s===1?Z(X[0],W):($.set=!0,$.setByIndices=!0,$.indicesToOffset=!0,`set_${e}(${X}, ${W})`)},setByOffset:Z,setByIndices:(D,W)=>s<2?Z(D,W):($.setByIndices=!0,$.indicesToOffset=!0,`set_${e}ByIndices(${D}, ${W});`),get:te,getByOffset:M,getByIndices:j,usage:r,name:e,strides:g,shape:S,rank:s}},U=(e,t,n,r=1)=>Mi(e,t,n,"input",r),ne=(e,t,n,r=1)=>Mi(e,t,n,"output",r),Ww=(e,t,n)=>Mi(e,t,n,"atomicOutput",1),Fc=(e,t,n,r=1)=>Mi(e,t,n,"internal",r),Pm=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=hi){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Vw=(e,t)=>new Pm(e,t)}),Lm,Gl,Um,jm,Wm,Vm,Tt,Fw,qw,rr=F(()=>{se(),le(),Le(),ue(),Lm=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Gl=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Um=(e,t)=>B.sortBasedOnPerm(e,Gl(e.length,t)),jm=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Wm=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Vm=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Tt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=Gl(r,t),a=Um(e.dims,i),s=e.dims,o=a,l=r<2||Vm(i,e.dims),d;if(l)return d=$=>{let w=U("input",n,s,4),S=ne("output",n,o,4);return`
  ${$.registerUniform("output_size","u32").declareVariables(w,S)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil($/64/4)},programUniforms:[{type:12,data:Math.ceil($/4)}]}},getShaderSource:d};let{newShape:f,newPerm:p}=Wm(e.dims,i),h=B.areEqual(p,[2,3,1]),v=B.areEqual(p,[3,1,2]);if(f.length===2||h||v){s=h?[f[0],f[1]*f[2]]:v?[f[0]*f[1],f[2]]:f,o=[s[1],s[0]];let $=16;return d=w=>{let S=U("a",n,s.length),g=ne("output",n,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(S,g)}
  var<workgroup> tile : array<array<${g.type.value}, ${$+1}>, ${$}>;
  ${w.mainStart([$,$,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${$} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${$}u + local_id.x;
    let input_row = workgroup_id_x * ${$}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${$}u + local_id.x;
    let output_row = workgroup_id_y * ${$}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${g.setByIndices(`${g.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/$),y:Math.ceil(o[0]/$)},programUniforms:[{type:12,data:w},...ae(s,o)]}},getShaderSource:d}}return d=$=>{let w=U("a",n,s.length),S=ne("output",n,o.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(w,S)}

  ${jm(i,r,w,S)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let $=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...ae(s,o)]}},getShaderSource:d}},Fw=(e,t)=>{Lm(e.inputs,t.perm),e.compute(Tt(e.inputs[0],t.perm))},qw=e=>$e({perm:e.perm})}),Fm,qm,Hm,Gm,Km,Qm,Zm,Xm,Ym,Jm,Wt,Hw,Gw,Kw,Qw,Zw,Xw,Yw,Jw,e_,t_,vE=F(()=>{se(),le(),ue(),qc(),rr(),Fm={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},qm={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Hm={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Gm={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Km=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Qm=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Zm=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Xm=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Ym=(e,t)=>{let n=[];if(!Xm(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},Jm=(e,t,n,r,i,a,s)=>{let o=n[0].dims,l=B.size(a),d=B.size(s),f=U("_A",n[0].dataType,o),p=ne("output",i,a),h=64;l===1&&(h=256);let v=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,$=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(f,p)}
        ${v}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Hm[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Fm[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${qm[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${r==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Gm[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Wt=(e,t,n,r)=>{let i=e.inputs.length===1?n:Sd(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((v,$)=>$));let s=B.normalizeAxes(a,e.inputs[0].dims.length),o=s,l=e.inputs[0],d=Ym(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Tt(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Km(o.length,l.dims.length));let[f,p]=Qm(l.dims,o),h=f;i.keepDims&&(h=Zm(f,s)),e.compute(Jm(t,i.cacheKey,[l],r,e.inputs[0].dataType,h,p),{inputs:[l]})},Hw=(e,t)=>{Wt(e,"ReduceMeanShared",t,"mean")},Gw=(e,t)=>{Wt(e,"ReduceL1Shared",t,"l1")},Kw=(e,t)=>{Wt(e,"ReduceL2Shared",t,"l2")},Qw=(e,t)=>{Wt(e,"ReduceLogSumExpShared",t,"logSumExp")},Zw=(e,t)=>{Wt(e,"ReduceMaxShared",t,"max")},Xw=(e,t)=>{Wt(e,"ReduceMinShared",t,"min")},Yw=(e,t)=>{Wt(e,"ReduceProdShared",t,"prod")},Jw=(e,t)=>{Wt(e,"ReduceSumShared",t,"sum")},e_=(e,t)=>{Wt(e,"ReduceSumSquareShared",t,"sumSquare")},t_=(e,t)=>{Wt(e,"ReduceLogSumShared",t,"logSum")}}),Vt,eg,co,Sd,Ft,tg,ng,rg,ig,ag,sg,og,lg,ug,dg,qt,n_,r_,i_,a_,s_,o_,l_,u_,d_,c_,qc=F(()=>{se(),le(),Le(),ue(),vE(),Vt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},eg=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],co=(e,t,n,r,i,a,s=!1,o=!1)=>{let l=[],d=n[0].dims,f=d.length,p=B.normalizeAxes(i,f),h=!o&&p.length===0;d.forEach((w,S)=>{h||p.indexOf(S)>=0?s&&l.push(1):l.push(w)});let v=l.length,$=B.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let S=[],g=U("_A",n[0].dataType,f),m=ne("output",a,v),x=r(g,m,p),k=x[2];for(let T=0,C=0;T<f;T++)h||p.indexOf(T)>=0?(s&&C++,k=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
                  ${x[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${g.indicesSet("input_indices",T,`j${T}`)}
                  ${k}
                }`):(S.push(`${g.indicesSet("input_indices",T,m.indicesGet("output_indices",C))};`),C++);return`

        ${w.registerUniform("output_size","u32").declareVariables(g,m)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${g.type.indices};
          let output_indices = ${m.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${x[0]}       // init ops for reduce max/min
          ${x[1]}
          ${k}
          ${x[3]}
          ${x.length===4?m.setByOffset("global_idx","value"):x.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...ae(d,l)]})}},Sd=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),$e({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ft=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:Sd(i,n);e.compute(co(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?eg:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},tg=(e,t)=>{Vt(e.inputs),Ft(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},ng=(e,t)=>{Vt(e.inputs),Ft(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},rg=(e,t)=>{Vt(e.inputs),Ft(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ig=(e,t)=>{Vt(e.inputs),Ft(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},ag=(e,t)=>{Vt(e.inputs),Ft(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},sg=(e,t)=>{Vt(e.inputs),Ft(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},og=(e,t)=>{Vt(e.inputs),Ft(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},lg=(e,t)=>{Vt(e.inputs),Ft(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},ug=(e,t)=>{Vt(e.inputs),Ft(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},dg=(e,t)=>{Vt(e.inputs),Ft(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},qt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},n_=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sg(e,t):Hw(e,t)},r_=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ng(e,t):Gw(e,t)},i_=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rg(e,t):Kw(e,t)},a_=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ig(e,t):Qw(e,t)},s_=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ag(e,t):Zw(e,t)},o_=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?og(e,t):Xw(e,t)},l_=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lg(e,t):Yw(e,t)},u_=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ug(e,t):Jw(e,t)},d_=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dg(e,t):e_(e,t)},c_=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tg(e,t):t_(e,t)}}),Kl,p_,f_,Ed,wE=F(()=>{se(),Le(),qc(),Kl=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},p_=(e,t)=>{Kl(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(co("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},f_=(e,t)=>{Kl(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(co("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Ed=e=>$e(e)}),cg,fs,pg,fg,hg,Sa,mg,h_,Hc=F(()=>{se(),le(),Vc(),ue(),cg=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=n.dims[0],d=n.dims[1],f=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,h=p,v=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let x of t.qkvHiddenSizes)if(x%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],v=t.qkvHiddenSizes[2]}let $=d;if(p!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+h+v)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(h!==v)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let S=$+w,g=-1,m=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:$,totalSequenceLength:S,maxSequenceLength:g,inputHiddenSize:f,hiddenSize:p,vHiddenSize:v,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(v/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:m,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},fs=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,pg=(e,t,n,r,i,a,s,o)=>{let l=Ae(s?1:a),d=64,f=a/l;f<d&&(d=32);let p=Math.ceil(a/l/d),h=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:f},{type:12,data:p}],v=Ge(e.dataType,l),$=at(1,l),w=["type"];s&&w.push("type"),o&&w.push("type");let S=g=>{let m=ne("x",e.dataType,e.dims,l),x=[m],k=s?U("seq_lens",s.dataType,s.dims):void 0;k&&x.push(k);let T=o?U("total_sequence_length_input",o.dataType,o.dims):void 0;T&&x.push(T);let C=at(e.dataType),I=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${g.registerUniforms(I).declareVariables(...x)}
  ${g.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${fs(k,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${$}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${$}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${$}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${$}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${m.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${$}(x[offset + i]);
        x[offset + i] = ${m.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${m.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${v};${l}`,inputDependencies:w},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:h})}},fg=(e,t,n,r,i,a,s,o,l)=>{let d=s+a.kvSequenceLength,f=[a.batchSize,a.numHeads,a.sequenceLength,d],p=e>1&&r,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,v=p?[a.batchSize,h,d,a.headSize]:void 0,$=a.nReps?a.nReps:1,w=a.scale===0?1/Math.sqrt(a.headSize):a.scale,S=Ae(a.headSize),g=a.headSize/S,m=12,x={x:Math.ceil(d/m),y:Math.ceil(a.sequenceLength/m),z:a.batchSize*a.numHeads},k=[{type:12,data:a.sequenceLength},{type:12,data:g},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:$}],T=p&&r&&B.size(r.dims)>0,C=["type","type"];T&&C.push("type"),i&&C.push("type"),o&&C.push("type"),l&&C.push("type");let I=[{dims:f,dataType:t.dataType,gpuDataType:0}];p&&I.push({dims:v,dataType:t.dataType,gpuDataType:0});let b=N=>{let A=U("q",t.dataType,t.dims,S),H=U("key",n.dataType,n.dims,S),Q=[A,H];if(T){let L=U("past_key",r.dataType,r.dims,S);Q.push(L)}i&&Q.push(U("attention_bias",i.dataType,i.dims));let Z=o?U("seq_lens",o.dataType,o.dims):void 0;Z&&Q.push(Z);let M=l?U("total_sequence_length_input",l.dataType,l.dims):void 0;M&&Q.push(M);let J=ne("output",t.dataType,f),ee=[J];p&&ee.push(ne("present_key",t.dataType,v,S));let te=at(1,S),j=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${m}u;

  var<workgroup> tileQ: array<${A.type.storage}, ${m*m}>;
  var<workgroup> tileK: array<${A.type.storage}, ${m*m}>;
  ${N.registerUniforms(j).declareVariables(...Q,...ee)}
  ${N.mainStart([m,m,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${$===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${$===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${fs(Z,M,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${te}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${te}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${J.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${i!==void 0};${r!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:I,dispatchGroup:x,programUniforms:k}),getShaderSource:b}},hg=(e,t,n,r,i,a,s=void 0,o=void 0)=>{let l=a+i.kvSequenceLength,d=i.nReps?i.nReps:1,f=i.vHiddenSize*d,p=e>1&&r,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,v=p?[i.batchSize,h,l,i.headSize]:void 0,$=[i.batchSize,i.sequenceLength,f],w=12,S={x:Math.ceil(i.vHeadSize/w),y:Math.ceil(i.sequenceLength/w),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:f},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:d}],m=p&&r&&B.size(r.dims)>0,x=["type","type"];m&&x.push("type"),s&&x.push("type"),o&&x.push("type");let k=[{dims:$,dataType:t.dataType,gpuDataType:0}];p&&k.push({dims:v,dataType:t.dataType,gpuDataType:0});let T=C=>{let I=U("probs",t.dataType,t.dims),b=U("v",n.dataType,n.dims),N=[I,b];m&&N.push(U("past_value",r.dataType,r.dims));let A=s?U("seq_lens",s.dataType,s.dims):void 0;s&&N.push(A);let H=o?U("total_sequence_length_input",o.dataType,o.dims):void 0;o&&N.push(H);let Q=[ne("output",t.dataType,$)];p&&Q.push(ne("present_value",t.dataType,v));let Z=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${I.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${I.type.value}, ${w*w}>;
  ${C.registerUniforms(Z).declareVariables(...N,...Q)}
  ${C.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${fs(A,H,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${m&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${I.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${m&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:g}),getShaderSource:T}},Sa=(e,t,n,r,i,a,s,o,l,d,f=void 0,p=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),v=h>1?s:void 0,$=h>1?o:void 0,w=h>1?d.pastSequenceLength:0,S=w+d.kvSequenceLength,g=l&&B.size(l.dims)>0?l:void 0,m=[t,n];v&&B.size(v.dims)>0&&m.push(v),g&&m.push(g),f&&m.push(f),p&&m.push(p);let x=e.compute(fg(h,t,n,v,g,d,w,f,p),{inputs:m,outputs:h>1?[-1,1]:[-1]})[0];e.compute(pg(x,d.batchSize,d.numHeads,w,d.sequenceLength,S,f,p),{inputs:f&&p?[x,f,p]:[x],outputs:[]});let k=[x,r];$&&B.size($.dims)>0&&k.push($),f&&k.push(f),p&&k.push(p),e.compute(hg(h,x,r,$,d,w,f,p),{inputs:k,outputs:h>1?[0,2]:[0]})},mg=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=p=>{let h=ne("output_q",l[0].dataType,n),v=ne("output_k",l[0].dataType,n),$=ne("output_v",l[0].dataType,n),w=U("input",l[0].dataType,l[0].dims),S=U("weight",l[1].dataType,l[1].dims),g=U("bias",l[2].dataType,l[2].dims),m=w.type.storage,x=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${m}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${m}, ${s*s}>;
  var<workgroup> tileWeightK: array<${m}, ${s*s}>;
  var<workgroup> tileWeightV: array<${m}, ${s*s}>;
  ${p.registerUniforms(x).declareVariables(w,S,g,h,v,$)}
  ${p.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${m}(0);
    var valueK = ${m}(0);
    var valueV = ${m}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:f},{inputs:l,outputs:[-1,-1,-1]})},h_=(e,t)=>{let n=cg(e.inputs,t),[r,i,a]=mg(e,n);return Sa(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),gg,yg,vg,m_,_E=F(()=>{Lt(),se(),le(),Le(),ue(),gg=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let s=i.length;if(s!==r.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,l)=>{if(o!==r[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},yg=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,s=r?Ae(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,l=B.size(a)/s,d=r,f=d?a.length:a,p=U("x",e[0].dataType,e[0].dims,s),h=U("scale",e[1].dataType,e[1].dims,o),v=U("bias",e[2].dataType,e[2].dims,o),$=U("inputMean",e[3].dataType,e[3].dims,o),w=U("inputVar",e[4].dataType,e[4].dims,o),S=ne("y",e[0].dataType,f,s),g=()=>{let x="";if(r)x=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")x=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{x=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let k=1;k<h.rank;k++)x+=`cIndices[${k}] = outputIndices[${k}];`;x+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return x},m=x=>`
  const epsilon = ${n};
  ${x.registerUniform("outputSize","u32").declareVariables(p,h,v,$,w,S)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${g()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${v.getByOffset("cOffset")};
    let inputMean = ${$.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:m,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...ae(a)]:[{type:12,data:l}]})}},vg=e=>$e(e),m_=(e,t)=>{let{inputs:n,outputCount:r}=e,i=vg({...t,outputCount:r});if(Ee.webgpu.validateInputContent&&gg(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(yg(n,i))}}),wg,_g,g_,$E=F(()=>{le(),ue(),wg=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},_g=e=>{let t=e[0].dims,n=e[0].dims[2],r=B.size(t)/4,i=e[0].dataType,a=U("input",i,t,4),s=U("bias",i,[n],4),o=U("residual",i,t,4),l=ne("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:d=>`
  const channels = ${n}u / 4;
  ${d.declareVariables(a,s,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},g_=e=>{wg(e.inputs),e.compute(_g(e.inputs))}}),$g,we,y_,v_,w_,__,$_,x_,b_,k_,S_,xg,E_,T_,C_,z_,Ki,I_,Ms,R_,O_,N_,A_,M_,B_,D_,P_,L_,U_,j_,W_,V_,F_,q_,H_,Ql,G_,Td,Cd,K_,Q_,Z_,bg,kg,X_,Gc=F(()=>{se(),le(),Le(),ue(),$g=(e,t,n,r,i,a,s)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=U("inputData",n,[o],4),f=ne("outputData",r,[o],4),p=[{name:"vec_size",type:"u32"}];return s&&p.push(...s),`
      ${e.registerUniforms(p).declareVariables(d,f)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",l)}
  }`},we=(e,t,n,r,i,a=e.dataType,s,o)=>{let l=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>$g(d,B.size(e.dims),e.dataType,a,n,r,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(B.size(d[0].dims)/64/4)},programUniforms:l})}},y_=e=>{e.compute(we(e.inputs[0],"Abs","abs"))},v_=e=>{e.compute(we(e.inputs[0],"Acos","acos"))},w_=e=>{e.compute(we(e.inputs[0],"Acosh","acosh"))},__=e=>{e.compute(we(e.inputs[0],"Asin","asin"))},$_=e=>{e.compute(we(e.inputs[0],"Asinh","asinh"))},x_=e=>{e.compute(we(e.inputs[0],"Atan","atan"))},b_=e=>{e.compute(we(e.inputs[0],"Atanh","atanh"))},k_=e=>$e(e),S_=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(we(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},xg=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return $e({min:t,max:n})},E_=(e,t)=>{let n=t||xg(e.inputs),r=at(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},T_=e=>{e.compute(we(e.inputs[0],"Ceil","ceil"))},C_=e=>{e.compute(we(e.inputs[0],"Cos","cos"))},z_=e=>{e.compute(we(e.inputs[0],"Cosh","cosh"))},Ki=e=>$e(e),I_=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ms=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,R_=e=>{let t=at(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Ms(t)))},O_=e=>{e.compute(we(e.inputs[0],"Exp","exp"))},N_=e=>{e.compute(we(e.inputs[0],"Floor","floor"))},A_=e=>{let t=at(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Ms(t)))},M_=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(we(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},B_=e=>{e.compute(we(e.inputs[0],"Not",t=>`!${t}`))},D_=e=>{e.compute(we(e.inputs[0],"Neg",t=>`-${t}`))},P_=e=>{e.compute(we(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},L_=e=>{let t=at(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},U_=e=>{e.compute(we(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},j_=e=>$e(e),W_=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(we(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},V_=e=>{e.compute(we(e.inputs[0],"Sin","sin"))},F_=e=>{e.compute(we(e.inputs[0],"Sinh","sinh"))},q_=e=>{e.compute(we(e.inputs[0],"Sqrt","sqrt"))},H_=e=>{e.compute(we(e.inputs[0],"Tan","tan"))},Ql=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,G_=e=>{e.compute(we(e.inputs[0],"Tanh",Ql))},Td=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ql("v")};
}
`,Cd=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,K_=e=>{let t=at(e.inputs[0].dataType);e.compute(we(e.inputs[0],"FastGelu",Cd,Td(t),void 0,e.inputs[0].dataType))},Q_=(e,t)=>{let n=at(e.inputs[0].dataType);return e.compute(we(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Z_=e=>{e.compute(we(e.inputs[0],"Log","log"))},bg=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,kg=e=>`quick_gelu_impl(${e})`,X_=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(we(e.inputs[0],"QuickGelu",kg,bg(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Sg,Eg,Y_,xE=F(()=>{le(),ue(),Gc(),Sg=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Eg=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=U("input",e[0].dataType,e[0].dims,4),r=U("bias",e[0].dataType,[e[0].dims[2]],4),i=ne("output",e[0].dataType,t,4),a=B.size(t)/4,s=Ge(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${Ms(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Y_=e=>{Sg(e.inputs),e.compute(Eg(e.inputs))}}),Tg,Cg,Ht,J_,e2,t2,n2,r2,i2,a2,s2,o2,l2,bE=F(()=>{se(),le(),ue(),Tg=(e,t,n,r,i,a,s,o,l,d,f,p)=>{let h,v;typeof o=="string"?h=v=(m,x)=>`${o}((${m}),(${x}))`:typeof o=="function"?h=v=o:(h=o.scalar,v=o.vector);let $=ne("outputData",f,r.length,4),w=U("aData",l,t.length,4),S=U("bData",d,n.length,4),g;if(i)if(a){let m=B.size(t)===1,x=B.size(n)===1,k=t.length>0&&t[t.length-1]%4===0,T=n.length>0&&n[n.length-1]%4===0;m||x?g=$.setByOffset("global_idx",v(m?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),x?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):g=`
            let outputIndices = ${$.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",$)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",$)};
            ${$.setByOffset("global_idx",v(s||k?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||T?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else g=$.setByOffset("global_idx",v(w.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let m=(x,k,T="")=>{let C=`aData[indexA${k}][componentA${k}]`,I=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${$.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${w.broadcastedIndicesToOffset(`outputIndices${k}`,$)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,$)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${x}[${k}] = ${T}(${h(C,I)});
          `};f===9?g=`
            var data = vec4<u32>(0);
            ${m("data",0,"u32")}
            ${m("data",1,"u32")}
            ${m("data",2,"u32")}
            ${m("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:g=`
            ${m("outputData[global_idx]",0)}
            ${m("outputData[global_idx]",1)}
            ${m("outputData[global_idx]",2)}
            ${m("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,S,$)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${g}
      }`},Cg=(e,t,n,r,i,a,s=n.dataType)=>{let o=n.dims.map(Number),l=r.dims.map(Number),d=!B.areEqual(o,l),f=o,p=B.size(o),h=!1,v=!1,$=[d];if(d){let w=fi.calcShape(o,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");f=w.slice(),p=B.size(f);let S=B.size(o)===1,g=B.size(l)===1,m=o.length>0&&o[o.length-1]%4===0,x=l.length>0&&l[l.length-1]%4===0;$.push(S),$.push(g),$.push(m),$.push(x);let k=1;for(let T=1;T<f.length;T++){let C=o[o.length-T],I=l[l.length-T];if(C===I)k*=C;else break}k%4===0?(v=!0,h=!0):(S||g||m||x)&&(h=!0)}else h=!0;return $.push(h),{name:e,shaderCache:{hint:t+$.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Tg(w,o,l,f,h,d,v,i,n.dataType,r.dataType,s,a),getRunData:()=>({outputs:[{dims:f,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(f)/4)},...ae(o,l,f)]})}},Ht=(e,t,n,r,i,a)=>{e.compute(Cg(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},J_=e=>{Ht(e,"Add",(t,n)=>`${t}+${n}`)},e2=e=>{Ht(e,"Div",(t,n)=>`${t}/${n}`)},t2=e=>{Ht(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},n2=e=>{Ht(e,"Mul",(t,n)=>`${t}*${n}`)},r2=e=>{let t=U("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ht(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},i2=e=>{Ht(e,"Sub",(t,n)=>`${t}-${n}`)},a2=e=>{Ht(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},s2=e=>{Ht(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},o2=e=>{Ht(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},l2=e=>{Ht(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),zg,Ig,Rg,Og,u2,d2,kE=F(()=>{se(),le(),Le(),ue(),zg=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((s,o)=>{if(o!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==r.dims[d])throw new Error("non concat dimensions must match")})}})},Ig=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Rg=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Og=(e,t,n,r)=>{let i=B.size(n),a=new Array(e.length),s=new Array(e.length),o=0,l=[],d=[],f=[{type:12,data:i}];for(let w=0;w<e.length;++w)o+=e[w].dims[t],a[w]=o,d.push(e[w].dims.length),s[w]=U(`input${w}`,r,d[w]),l.push("rank"),f.push({type:12,data:a[w]});for(let w=0;w<e.length;++w)f.push(...ae(e[w].dims));f.push(...ae(n));let p=ne("output",r,n.length),h=p.indicesGet("indices",t),v=Array.from(Array(a.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),$=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)w.registerUniform(`sizeInConcatAxis${S}`,"u32");return w.declareVariables(...s,p)})()}

  ${Ig(a.length,v)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${v});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Rg(s,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}),getShaderSource:$}},u2=(e,t)=>{let n=e.inputs,r=n[0].dims,i=B.normalizeAxis(t.axis,r.length);zg(n,i);let a=r.slice();a[i]=n.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let s=n.filter(o=>B.size(o.dims)>0);e.compute(Og(s,i,a,n[0].dataType),{inputs:s})},d2=e=>$e({axis:e.axis})}),zr,Ir,Rr,Kc,Mr=F(()=>{se(),le(),zr=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ir=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Rr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Kc=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Bw,Dw];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Qe,c2,Qc=F(()=>{Qe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},c2=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),p2,SE=F(()=>{p2=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),aa,Zc,Xc=F(()=>{se(),le(),ue(),Mr(),aa=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((s,o)=>`
      if (${ie(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ie(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Zc=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s[s.length-2],d=o[o.length-1],f=s[s.length-1],p=Ae(d),h=Ae(f),v=Ae(l),$=B.size(n)/p/v,w=e.length>2,S=r?r.slice(0,-2):n.slice(0,-2),g=[B.size(S),l,d],m=[{type:12,data:$},{type:12,data:l},{type:12,data:d},{type:12,data:f}];Ir(t,m),m.push(...ae(S,s,o)),w&&m.push(...ae(e[2].dims)),m.push(...ae(g));let x=k=>{let T=Fc("batch_dims",e[0].dataType,S.length),C=U("a",e[0].dataType,s.length,h),I=U("b",e[1].dataType,o.length,p),b=ne("output",e[0].dataType,g.length,p),N=Ge(b.type.tensor),A=zr(t,b.type.value,N),H=[C,I],Q="";if(w){let J=i?p:1;H.push(U("bias",e[2].dataType,e[2].dims.length,J)),Q=`${i?`value += bias[col / ${J}];`:`value += ${b.type.value}(bias[row + i]);`}`}let Z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Rr(t,Z);let M=()=>{let J=`var a_data: ${C.type.value};`;for(let ee=0;ee<h;ee++)J+=`
              let b_data${ee} = b[(b_offset + (k + ${ee}) * uniforms.N + col) / ${p}];`;for(let ee=0;ee<v;ee++){J+=`a_data = a[(a_offset + (row + ${ee}) * uniforms.K + k) / ${h}];`;for(let te=0;te<h;te++)J+=`
            values[${ee}] = fma(${I.type.value}(a_data${h===1?"":`[${te}]`}), b_data${te}, values[${ee}]);
`}return J};return`
  ${k.registerUniforms(Z).registerInternalVariables(T).declareVariables(...H,b)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${v};
    let row = (index1 % stride1) * ${v};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${aa("a_indices",C,C.rank-2,T.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${I.type.indices};
    ${aa("b_indices",I,I.rank-2,T.rank,"batch_indices")}
    ${I.indicesSet("b_indices",I.rank-2,0)}
    ${I.indicesSet("b_indices",I.rank-1,0)}
    let b_offset = ${I.indicesToOffset("b_indices")};
    var values: array<${b.type.value}, ${v}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${M()}
    }
    for (var i = 0u; i < ${v}u; i++) {
      var value = values[i];
      ${Q}
      ${A}
      let cur_indices = ${b.type.indices}(batch, row + i, col);
      let offset = ${b.indicesToOffset("cur_indices")};
      ${b.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${h};${v};${i}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:m}),getShaderSource:x}}}),Ng,Ag,zd,Zl,Mg,Id,Bg,po,Yc=F(()=>{se(),le(),ue(),Mr(),Xc(),Qc(),Ng=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ag=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,zd=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],f=i?l:a,p=i?a:l,h=f/t[0],v=a/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&f%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${n}>, ${f/h}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${v};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ng(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${v}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Ag(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Zl=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Mg=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Id=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32,l=!1)=>{let d=e[1]*t[1],f=e[0]*t[0],p=i?d:a,h=i?a:d;if(!(h%t[1]===0&&p%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let v=h/t[1],$=p/t[0],w=a/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${Zl(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${v};
let tileColA = i32(localId.x) * ${$};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${v}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${$}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Zl(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Mg(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${p}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${f}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Bg=(e,t,n,r,i=!1)=>{let[a,s,o,l]=r,d=Ge(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Qe(e,d)} {
      var value = ${Qe(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${aa("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Qe(e,d)} {
      var value = ${Qe(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${aa("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Qe(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Qe(e,d)}(bias[row])`};`:""}
        ${n}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},po=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s.slice(0,-2),d=o.slice(0,-2),f=r?r.slice(0,-2):n.slice(0,-2),p=B.size(f),h=s[s.length-2],v=s[s.length-1],$=o[o.length-1],w=v%4===0&&$%4===0,S=h<=8?[4,1,1]:[4,4,1],g=[8,8,1],m=[Math.ceil($/g[0]/S[0]),Math.ceil(h/g[1]/S[1]),Math.ceil(p/g[2]/S[2])],x=w?4:1,k=[...l,h,v/x],T=k.length,C=[...d,v,$/x],I=C.length,b=[p,h,$/x],N=[{type:6,data:h},{type:6,data:$},{type:6,data:v}];Ir(t,N),N.push(...ae(f,k,C));let A=["rank","rank"],H=e.length>2;H&&(N.push(...ae(e[2].dims)),A.push("rank")),N.push(...ae(b));let Q=Z=>{let M=f.length,J=Fc("batchDims",e[0].dataType,M,1),ee=Ge(e[0].dataType),te=U("a",e[0].dataType,T,x),j=U("b",e[1].dataType,I,x),L=ne("result",e[0].dataType,b.length,x),K=[te,j];if(H){let fe=i?x:1;K.push(U("bias",e[2].dataType,e[2].dims.length,fe))}let D=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Rr(t,D);let W=Ge(L.type.tensor),X=zr(t,L.type.value,W),V=Bg(x,H,X,[J,te,j,L],i);return`
  ${Z.registerUniforms(D).registerInternalVariables(J).declareVariables(...K,L)}
  ${V}
  ${w?zd(S,g,ee,J):Id(S,g,ee,J)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${w};${i}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:m[0],y:m[1],z:m[2]},programUniforms:N}),getShaderSource:Q}}}),Dg,f2,EE=F(()=>{se(),En(),ue(),Mr(),Qc(),SE(),Yc(),Dg=(e,t,n,r,i=!1,a,s=4,o=4,l=4,d="f32")=>{let f=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},p=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,v=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,$=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",g=e?"col":"row",m=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${g} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${g} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${g} % inChannels;
    var resData = ${Qe(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${$} && xCol >= 0 && xCol < ${w}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(s)}
    }
    return resData;`,x=e?t&&r?`
    let col = colIn * ${s};
    ${m}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${m}
    }
    return ${Qe(s,d)}(0.0);`:r&&n?`
    let col = colIn * ${s};
    ${m}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${m}
    }
    return ${Qe(s,d)}(0.0);`,k=e?r&&n?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Qe(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Qe(o,d)}(0.0);`,T=Qe(l,d),C=Qe(e?s:o,d),I=Qe(e?o:s,d),b=zr(a,T,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?x:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?k:x}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${v}
      ${c2(i)}
      ${b}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},f2=(e,t,n,r,i,a,s,o,l)=>{let d=t.format==="NHWC",f=d?e[0].dims[3]:e[0].dims[1],p=n[0],h=d?n[2]:n[3],v=d?n[1]:n[2],$=d?n[3]:n[1],w=d&&(f%4===0||f%3===0)&&$%4===0,S=d?$:h*v,g=d?h*v:$,m=[8,8,1],x=r<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/m[0]/x[0]),Math.ceil(g/m[1]/x[1]),Math.ceil(p/m[2]/x[2])];ge("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let T=w?d&&f%4!==0?3:4:1,C=m[1]*x[1],I=m[0]*x[0],b=Math.max(m[0]*T,m[1]),N=r%C===0,A=i%I===0,H=a%b===0,Q=w?[T,4,4]:[1,1,1],Z=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ir(t,Z),Z.push(...ae(e[0].dims,e[1].dims));let M=["rank","rank"];s&&(Z.push(...ae(e[2].dims)),M.push("rank")),Z.push(...ae(n));let J=ee=>{let te=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Rr(t,te);let j=w?4:1,L=Ge(e[0].dataType),K=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${L}>`:L}) {
        result[flatIndex] = ${w?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,D=U("x",e[0].dataType,e[0].dims.length,T===3?1:T),W=U("w",e[1].dataType,e[1].dims.length,j),X=[D,W],V=ne("result",e[0].dataType,n.length,j);if(s){let fe=U("bias",e[2].dataType,e[2].dims.length,j);X.push(fe),K+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${L}>`:L} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${p2("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ee.registerUniforms(te).declareVariables(...X,V)}
        ${K}
        ${Dg(d,N,A,H,s,t,Q[0],Q[1],Q[2],L)}
        ${w?zd(x,m,L,void 0,!d,b):Id(x,m,L,void 0,!d,b,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${w};${N};${A};${H};${C};${I};${b}`,inputDependencies:M},getRunData:()=>({outputs:[{dims:l?l(n):n,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:Z}),getShaderSource:J}}}),Pg,Xl,Bi,Lg,Yl,Ug,h2,m2,TE=F(()=>{se(),En(),le(),ue(),Mr(),Qc(),Pg=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Xl=e=>typeof e=="number"?[e,e,e]:e,Bi=(e,t)=>t<=1?e:e+(e-1)*(t-1),Lg=(e,t,n,r=1)=>{let i=Bi(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Yl=(e,t,n,r,i)=>{i==null&&(i=Lg(e,t[0],r[0]));let a=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return a},Ug=(e,t,n,r,i,a,s,o,l,d)=>{let f,p,h,v;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let $=Yl([t,n,r,1],[o,l,d],1,[i,a,s],e);p=$[0],h=$[1],v=$[2]}else if(Array.isArray(e)){if(!e.every((w,S,g)=>w===g[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let $=Yl([t,n,r,1],[o,l,d],1,[i,a,s],e[0]);p=$[0],h=$[1],v=$[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),h=Math.ceil(n/a),v=Math.ceil(r/s);let $=(p-1)*i+o-t,w=(h-1)*a+l-n,S=(v-1)*s+d-r,g=Math.floor($/2),m=$-g,x=Math.floor(w/2),k=w-x,T=Math.floor(S/2),C=S-T;f={top:x,bottom:k,left:T,right:C,front:g,back:m}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:p,outHeight:h,outWidth:v}},h2=(e,t,n,r,i,a=!1,s="channelsLast")=>{let o,l,d,f,p;if(s==="channelsLast")[o,l,d,f,p]=e;else if(s==="channelsFirst")[o,p,l,d,f]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,v,$,w]=t,[S,g,m]=Xl(n),[x,k,T]=Xl(r),C=Bi(v,x),I=Bi($,k),b=Bi(w,T),{padInfo:N,outDepth:A,outHeight:H,outWidth:Q}=Ug(i,l,d,f,S,g,m,C,I,b),Z=a?h*p:h,M=[0,0,0,0,0];return s==="channelsFirst"?M=[o,Z,A,H,Q]:s==="channelsLast"&&(M=[o,A,H,Q,Z]),{batchSize:o,dataFormat:s,inDepth:l,inHeight:d,inWidth:f,inChannels:p,outDepth:A,outHeight:H,outWidth:Q,outChannels:Z,padInfo:N,strideDepth:S,strideHeight:g,strideWidth:m,filterDepth:v,filterHeight:$,filterWidth:w,effectiveFilterDepth:C,effectiveFilterHeight:I,effectiveFilterWidth:b,dilationDepth:x,dilationHeight:k,dilationWidth:T,inShape:e,outShape:M,filterShape:t}},m2=(e,t,n,r,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:n.map((S,g)=>g)},d=[Math.ceil(Pg(l.x.map(S=>n[S]))/o[0]),1,1];ge("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let f=1,p=B.size(n),h=[{type:12,data:p},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Ir(t,h),h.push(...ae(e[0].dims,e[1].dims));let v=["rank","rank"],$=e.length===3;$&&(h.push(...ae(e[2].dims)),v.push("rank")),h.push(...ae(n));let w=S=>{let g=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Rr(t,g);let m=1,x=Ge(e[0].dataType),k=U("x",e[0].dataType,e[0].dims.length,f),T=U("W",e[1].dataType,e[1].dims.length,m),C=[k,T],I=ne("result",e[0].dataType,n.length,m),b="";if($){let H=U("bias",e[2].dataType,e[2].dims.length,m);C.push(H),b+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${x} {
          return bias[${s?ie("coords",4,5):ie("coords",1,5)}];
        }`}let N=Qe(f,x),A=zr(t,N,x);return`
            ${b}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${S.registerUniforms(g).declareVariables(...C,I)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${I.offsetToIndices("global_idx")};
              let batch = ${ie("coords",0,k.rank)};
              let d2 = ${s?ie("coords",k.rank-1,k.rank):ie("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?ie("coords",1,k.rank):ie("coords",2,k.rank)},
              ${s?ie("coords",2,k.rank):ie("coords",3,k.rank)},
              ${s?ie("coords",3,k.rank):ie("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ie("uniforms.x_shape",1,k.rank):ie("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?ie("uniforms.x_shape",2,k.rank):ie("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?ie("uniforms.x_shape",3,k.rank):ie("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?ie("uniforms.x_shape",4,k.rank):ie("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${$?"value = value + getBiasByOutputCoords(coords)":""};
              ${A}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${f};${$}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:h}),getShaderSource:w}}}),g2,y2,CE=F(()=>{se(),le(),ue(),Mr(),g2=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?n[3]:n[1],f=d/t.group,p=l&&f>=4?Ae(d):1,h=B.size(n)/p,v=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];Ir(t,v),v.push(...ae(s,[o[0],o[1],o[2],o[3]/p]));let $=i?["rank","rank","rank"]:["rank","rank"];v.push(...ae([n[0],n[1],n[2],n[3]/p]));let w=S=>{let g=ne("output",e[0].dataType,n.length,p),m=Ge(g.type.tensor),x=zr(t,g.type.value,m),k=U("x",e[0].dataType,s.length),T=U("w",e[1].dataType,o.length,p),C=[k,T];i&&C.push(U("b",e[2].dataType,e[2].dims,p));let I=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Rr(t,I);let b=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(I).declareVariables(...C,g)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${g.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${g.type.value} = ${g.type.value}(0);
    ${b}
    ${a}
    ${x}
    ${g.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:v}),getShaderSource:w}},y2=(e,t,n,r)=>{let i=e.length>2,a=Ae(n[3]),s=Ae(n[2]),o=B.size(n)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],f=[n[0],n[1],n[2],n[3]/a],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ir(t,p),p.push(...ae(l,d,f));let h=(s-1)*t.strides[1]+d[1],v=$=>{let w=ne("output",e[0].dataType,f.length,a),S=Ge(w.type.tensor),g=zr(t,w.type.value,S),m=U("x",e[0].dataType,l.length,a),x=U("w",e[1].dataType,d.length,a),k=[m,x];i&&k.push(U("b",e[2].dataType,e[2].dims,a));let T=i?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Rr(t,C),`
  ${$.registerUniforms(C).declareVariables(...k,w)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${m.type.value}, ${h}>;
    var values: array<${w.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${m.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${m.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${x.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${T}
      ${g}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${h};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:v}}}),jg,hs,Wg,ms,Rd,Jl,Vg,Fg,Od,zE=F(()=>{le(),EE(),TE(),Yc(),CE(),Mr(),Xc(),rr(),jg=(e,t,n,r,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),l=o.length,d=t[0],f=t.slice(2).map((h,v)=>h+(h-1)*(n[v]-1)),p=o.map((h,v)=>h+r[v]+r[v+l]).map((h,v)=>Math.floor((h-f[v]+i[v])/i[v]));return p.splice(0,0,s),p.splice(a?3:1,0,d),p},hs=[2,3,1,0],Wg=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},ms=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();uo.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Rd=e=>{let t=Kc(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Jl=(e,t,n,r)=>{let i=n.format==="NHWC",a=jg(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let C=[t[0]];if(i){let I=e.kernelCustomData.wT??e.compute(Tt(t[1],hs),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I),C.push(I)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(y2(C,n,a,r),{inputs:C}):e.compute(g2(C,n,a,r),{inputs:C});return}let s=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],f=t[1].dims[2],p=t[1].dims[3],h=a[i?1:2],v=a[i?2:3],$=a[i?3:1],w=i&&f===o&&p===l&&n.pads[0]===0&&n.pads[1]===0;if(w||f===1&&p===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let C=a[0],I,b,N,A=[];if(i){let Z=e.kernelCustomData.wT??e.compute(Tt(t[1],hs),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Z),w){let M=o*l*d;I=t[0].reshape([1,C,M]),b=Z.reshape([1,M,$]),N=[1,C,$]}else I=t[0].reshape([C,o*l,d]),b=Z.reshape([1,d,$]),N=[C,h*v,$];A.push(I),A.push(b)}else I=t[0].reshape([C,d,o*l]),b=t[1].reshape([1,$,d]),N=[C,$,h*v],A.push(b),A.push(I);s&&A.push(t[2]);let H=N[2],Q=A[0].dims[A[0].dims.length-1];H<8&&Q<8?e.compute(Zc(A,n,a,N,i,r),{inputs:A}):e.compute(po(A,n,a,N,i,r),{inputs:A});return}let S=!0,g=e.kernelCustomData.wT??e.compute(Tt(t[1],hs),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let m=[t[0],g];s&&m.push(t[2]);let x=i?h*v:$,k=i?$:h*v,T=f*p*d;e.compute(f2(m,n,a,x,k,T,s,S,r),{inputs:m})},Vg=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=ms({...t,pads:i,strides:a,dilations:s,kernelShape:o},r);Jl(e,r,l,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Fg=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=ms(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=h2(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(m2(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},Od=(e,t)=>{if(Wg(e.inputs,t),e.inputs[0].dims.length===3)Vg(e,t);else if(e.inputs[0].dims.length===5)Fg(e,e.inputs,t);else{let n=ms(t,e.inputs);Jl(e,e.inputs,n)}}}),v2,IE=F(()=>{se(),En(),le(),ue(),v2=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,l=o[2]/s,d=o[3],f=a?Ae(l):1,p=a&&d===1&&l>=4,h=p?Math.floor(l/4)*4:Math.floor(l/f)*f,v=l-h,$=a?Ae(d):1,w=a?d===1?f:$:1,S=B.size(i)/$,g=[Math.ceil(S/64),1,1];ge("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${g}`);let m=["rank","rank"],x=[t.strides[0],t.strides[1]],k=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],C=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],I=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],b=[{type:12,data:S},{type:12,data:x},{type:12,data:k},{type:12,data:T},{type:12,data:C},{type:6,data:I},{type:12,data:h},{type:12,data:l},{type:12,data:d},...ae(e[0].dims,e[1].dims)];r&&(b.push(...ae(e[2].dims)),m.push("rank")),b.push(...ae(i));let N=A=>{let H=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:x.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:I.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Q=Ge(e[0].dataType),Z=a?1:2,M=a?2:3,J=a?3:1,ee=U("W",e[1].dataType,e[1].dims.length,w),te=U("Dy",e[0].dataType,e[0].dims.length,f),j=[te,ee];r&&j.push(U("bias",e[2].dataType,[i[J]].length,$));let L=ne("result",e[0].dataType,i.length,$),K=()=>{let X="";if(p)f===4?X+=`
        let xValue = ${te.getByOffset("x_offset")};
        let wValue = ${ee.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:f===2?X+=`
          dotProd = dotProd + dot(vec4<${Q}>(${te.getByOffset("x_offset")}, ${te.getByOffset("x_offset + 1u")}), vec4<${Q}>(${ee.getByOffset("w_offset")}, ${ee.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:f===1&&(X+=`
          dotProd = dotProd + dot(vec4<${Q}>(${te.getByOffset("x_offset")}, ${te.getByOffset("x_offset + 1u")}, ${te.getByOffset("x_offset + 2u")}, ${te.getByOffset("x_offset + 3u")}), vec4<${Q}>(${ee.getByOffset("w_offset")}, ${ee.getByOffset("w_offset + 1u")}, ${ee.getByOffset("w_offset + 2u")}, ${ee.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(X+=`
                  let xValue = ${a?te.getByOffset(`${te.indicesToOffset(`${te.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):te.get("batch","inputChannel","idyR","idyC")};
        `,f===1)X+=`
          let w_offset = ${ee.indicesToOffset(`${ee.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ee.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let V=0;V<f;V++)X+=`
            let wValue${V} = ${ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${V}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${V}] * wValue${V};`;return X},D=()=>{if(v===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let X="";if(f===1){X+="dotProd = dotProd";for(let V=0;V<v;V++)X+=`
            + ${te.getByOffset(`x_offset + ${V}`)} * ${ee.getByOffset(`w_offset + ${V}`)}`;X+=";"}else if(f===2){if(v!==2)throw new Error(`Invalid inputChannelsRemainder ${v}.`);X+=`
          let xValue = ${te.getByOffset("x_offset")};
          let wValue = ${ee.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return X},W=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${$}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",J)};
            let r = ${L.indicesGet("outputIndices",Z)};
            let c = ${L.indicesGet("outputIndices",M)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${L.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${Q}(dyRCorner) + ${Q}(wR)) / ${Q}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Q}(uniforms.Dy_shape[${Z}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${Q}(dyCCorner) + ${Q}(wC)) / ${Q}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Q}(uniforms.Dy_shape[${M}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${te.indicesToOffset(`${te.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f};
                var w_offset = ${ee.indicesToOffset(`${ee.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:f}) {
                  ${K()}
                  inputChannel = inputChannel + ${p?4:f};
                }
                ${D()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${$}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${A.registerUniforms(H).declareVariables(...j,L)}
      ${A.mainStart()}
      ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${W}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${w}${$}${p}${v}`,inputDependencies:m},getRunData:()=>({dispatchGroup:{x:g[0],y:g[1],z:g[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:b}),getShaderSource:N}}}),qg,Hg,Gg,eu,w2,Kg,tu,Qg,_2,RE=F(()=>{IE(),Mr(),rr(),qg=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,Hg=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},Gg=(e,t,n,r,i,a,s,o,l,d)=>{let f=e.length-2,p=d.length===0;l.length<f&&l.push(...Array(f-l.length).fill(0));let h=e[0],v=t[o?3:1]*i;for(let $=0,w=e.length-f-(o?1:0);$<f;++$,++w){let S=e[w],g=p?S*s[$]:d[$],m=qg(S,s[$],a[$],t[w],n[$],g);Hg(m,r,a,$,$+f),p&&d.push(s[$]*(S-1)+l[$]+(t[w]-1)*n[$]+1-a[$]-a[$+f])}d.splice(0,0,h),d.splice(o?3:1,0,v)},eu=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,h)=>p*h,1)===0){n.length=0;for(let p=2;p<t[1].dims.length;++p)n.push(t[1].dims[p])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}Gg(o,n,l,e.autoPad,e.group,i,d,r,s,a);let f=Object.assign({},e);return Object.assign(f,{kernelShape:n,pads:i,outputPadding:s,outputShape:a,dilations:l,strides:d}),f},w2=e=>{let t=Kc(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),f=e.outputPadding,p=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,outputPadding:f,outputShape:p,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Kg=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},tu=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Tt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(v2(a,n,r),{inputs:a})},Qg=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=eu({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:l},r);tu(e,r,d,f=>n?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},_2=(e,t)=>{if(Kg(e.inputs,t),e.inputs[0].dims.length===3)Qg(e,t);else{let n=eu(t,e.inputs);tu(e,e.inputs,n)}}}),Zg,$2,x2,OE=F(()=>{se(),le(),Le(),ue(),Zg=(e,t,n,r)=>{let i=B.size(t),a=t.length,s=U("input",e,a),o=ne("output",e,a),l=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),d=B.normalizeAxis(l,a),f=p=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,v=ie("uniforms.input_shape","uniforms.axis",a),$=r.reverse?h+(r.exclusive?" + 1":""):"0",w=r.reverse?v:h+(r.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${$};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ae(t,t)]}),getShaderSource:f}},$2=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Zg(r,n,i,t),{inputs:[0]})},x2=e=>{let t=e.exclusive===1,n=e.reverse===1;return $e({exclusive:t,reverse:n})}}),Xg,Yg,Jg,b2,k2,NE=F(()=>{se(),le(),Le(),ue(),Xg=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Yg=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Jg=(e,t)=>{let n,r,i,a,s,o,l=t.format==="NHWC",d=t.blocksize,f=t.mode==="DCR";l?([n,r,i,a]=e.dims,s=f?[n,r,i,d,d,a/d**2]:[n,r,i,a/d**2,d,d],o=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=f?[n,d,d,a/d**2,r,i]:[n,a/d**2,d,d,r,i],o=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(s),h=p.dims.length,v=e.dataType,$=U("a",v,h),w=ne("output",v,h),S=g=>`
  ${g.registerUniform("output_size","u32").declareVariables($,w)}

  ${Yg(o,h,$,w)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:g=>{let m=l?[n,r*d,i*d,a/d**2]:[n,a/d**2,r*d,i*d],x=B.size(m),k=p.dims,T=B.sortBasedOnPerm(k,o);return{outputs:[{dims:m,dataType:g[0].dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...ae(k,T)]}},getShaderSource:S}},b2=(e,t)=>{Xg(e.inputs),e.compute(Jg(e.inputs[0],t))},k2=e=>$e({blocksize:e.blocksize,mode:e.mode,format:e.format})}),gs,Di,nu,e0,t0,n0,r0,ru,i0,S2,E2,AE=F(()=>{se(),le(),Le(),ue(),gs="[a-zA-Z]|\\.\\.\\.",Di="("+gs+")+",nu="^"+Di+"$",e0="("+Di+",)*"+Di,t0="^"+e0+"$",n0=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},r0=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(t0)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(nu)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,o,s);this.lhs.push(l)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(Di)))throw new Error("Invalid RHS");(i=r.match(RegExp(gs,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,s=[],o=0;if(!e.match(RegExp(nu))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(gs,"g")),d=new n0(r);return l==null||l.forEach((f,p)=>{if(f==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=i-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let v=0;v<s.length;v++){let $=String.fromCharCode(48+v);d.addSymbol($,p+v),this.addSymbol($,n[o++],r)}}else d.addSymbol(f,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,n[o++],r)}),d}},ru=e=>e+"_max",i0=(e,t,n,r)=>{let i=e.map(d=>d.length).map((d,f)=>U(`input${f}`,t,d)),a=B.size(r),s=ne("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(d=>!n.rhs.symbolToIndices.has(d)),l=d=>{let f=[],p="var prod = 1.0;",h="var sum = 0.0;",v="sum += prod;",$=[],w=[],S=[],g=[],m=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((k,T)=>{var C;if(n.rhs.symbolToIndices.has(T)){let I=(C=n.rhs.symbolToIndices.get(T))==null?void 0:C[0];I!==void 0&&n.lhs.forEach((b,N)=>{if(k.inputIndices.includes(N)){let A=b.symbolToIndices.get(T);if(A===void 0)throw new Error("Invalid symbol error");A.forEach(H=>{f.push(`${i[N].indicesSet(`input${N}Indices`,H,s.indicesGet("outputIndices",I))}`)})}})}else n.lhs.forEach((I,b)=>{if(k.inputIndices.includes(b)){let N=I.symbolToIndices.get(T);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(A=>{$.push(`${i[b].indicesSet(`input${b}Indices`,A,`${T}`)}`)}),g.push(`prod *= ${i[b].getByIndices(`input${b}Indices`)};`)}}),w.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${ru(T)}; ${T}++) {`),S.push("}")});let x=m?[...f,`let sum = ${i.map((k,T)=>k.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...f,h,...w,...$,p,...g,v,...S];return`
            ${d.registerUniforms(o.map(k=>({name:`${ru(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((k,T)=>`var input${T}Indices: ${i[T].type.indices};`).join(`
`)}
            ${x.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>n.symbolToInfo.has(p)).map(p=>{var h;return{type:12,data:((h=n.symbolToInfo.get(p))==null?void 0:h.dimValue)||0}});d.push({type:12,data:a});let f=e.map((p,h)=>[...ae(p)]).reduce((p,h)=>p.concat(h),d);return f.push(...ae(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}},getShaderSource:l}},S2=(e,t)=>{let n=new r0(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(i0(i,e.inputs[0].dataType,n,r))},E2=e=>{let t=e.equation.replace(/\s+/g,"");return $e({equation:t})}}),a0,iu,s0,o0,T2,ME=F(()=>{se(),le(),ue(),a0=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},iu=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},s0=(e,t)=>e.length>t.length?iu(e,t):iu(t,e),o0=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=s0(t,n),i=e[0].dataType,a=i===9||B.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||r.length>0&&r[r.length-1]%4===0?4:1,l=Math.ceil(B.size(r)/o),d=p=>{let h=U("input",i,t.length,s),v=ne("output",i,r.length,o),$;if(i===9){let w=(S,g,m="")=>`
          let outputIndices${g} = ${v.offsetToIndices(`outputOffset + ${g}u`)};
          let offset${g} = ${h.broadcastedIndicesToOffset(`outputIndices${g}`,v)};
          let index${g} = offset${g} / 4u;
          let component${g} = offset${g} % 4u;
          ${S}[${g}] = ${m}(${h.getByOffset(`index${g}`)}[component${g}]);
        `;$=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${v.setByOffset("global_idx","data")}
      }`}else $=`
        let outputIndices = ${v.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",v)};
        let data = ${v.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${v.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(h,v)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${$}`},f=[{type:12,data:l},...ae(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f})}},T2=e=>{a0(e.inputs),e.compute(o0(e.inputs),{inputs:[0]})}}),l0,C2,BE=F(()=>{se(),le(),ue(),Gc(),l0=e=>{let t=e[0].dataType,n=B.size(e[0].dims),r=B.size(e[1].dims),i=r%4===0,a=s=>{let o=U("x",t,[1],4),l=U("bias",t,[1],4),d=ne("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=v=>`
      let bias${v}_offset: u32 = (global_idx * 4 + ${v}) % uniforms.bias_size;
      let bias${v} = ${l.getByOffset(`bias${v}_offset / 4`)}[bias${v}_offset % 4];`,h=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(f).declareVariables(o,l,d)}

    ${Td(at(t))}

    ${s.mainStart(hi)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Cd("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/hi/4)}})}},C2=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?K_(e):e.compute(l0(e.inputs))}}),u0,d0,z2,I2,DE=F(()=>{se(),le(),Le(),ue(),u0=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},d0=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=B.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(a,1,...r);let o=n[a],l=e[0].dataType===9?4:1,d=Math.ceil(B.size(s)/l),f=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...ae(e[0].dims,e[1].dims,s)],p=h=>{let v=U("data",e[0].dataType,e[0].dims.length,l),$=U("inputIndices",e[1].dataType,e[1].dims.length),w=ne("output",e[0].dataType,s.length,l),S=m=>{let x=r.length,k=`var indicesIndices${m}  = ${$.type.indices}(0);`;for(let T=0;T<x;T++)k+=`${x>1?`indicesIndices${m}[${T}]`:`indicesIndices${m}`} = ${s.length>1?`outputIndices${m}[uniforms.axis + ${T}]`:`outputIndices${m}`};`;k+=`
          var idx${m} = ${$.getByIndices(`indicesIndices${m}`)};
          if (idx${m} < 0) {
            idx${m} = idx${m} + uniforms.axisDimLimit;
          }
          var dataIndices${m} : ${v.type.indices};
        `;for(let T=0,C=0;T<i;T++)T===a?(k+=`${i>1?`dataIndices${m}[${T}]`:`dataIndices${m}`} = u32(idx${m});`,C+=x):(k+=`${i>1?`dataIndices${m}[${T}]`:`dataIndices${m}`} = ${s.length>1?`outputIndices${m}[${C}]`:`outputIndices${m}`};`,C++);return k},g;if(e[0].dataType===9){let m=(x,k,T="")=>`
          let outputIndices${k} = ${w.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${v.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${x}[${k}] = ${T}(${v.getByOffset(`index${k}`)}[component${k}]);
        `;g=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${m("value",0,"u32")}
        ${m("value",1,"u32")}
        ${m("value",2,"u32")}
        ${m("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else g=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${v.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(v,$,w)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${g}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:p}},z2=e=>$e({axis:e.axis}),I2=(e,t)=>{let n=e.inputs;u0(n),e.compute(d0(e.inputs,t))}}),c0,R2,O2,PE=F(()=>{se(),le(),ue(),c0=(e,t,n,r,i,a,s,o,l)=>{let d=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:12,data:l}],f=[a];d.push(...ae(t.dims,f));let p=h=>{let v=U("indices_data",t.dataType,t.dims.length),$=ne("input_slice_offsets_data",12,1,1),w=[v,$],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(S).declareVariables(...w)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${n.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},R2=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,s=a[a.length-1],o=B.sizeToDimension(a,a.length-1),l=B.sizeFromDimension(r,t.batchDims+s),d=B.sizeToDimension(r,t.batchDims),f=B.sizeFromDimension(r,t.batchDims),p=o/d,h=new Array(s),v=l;for(let k=0;k<s;++k)h[s-1-k]=v,v*=r[t.batchDims+s-1-k];let $=c0(e,n[1],h,t.batchDims,r,o,p,f,s),w=t.batchDims+s;if(w>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=a.slice(0,-1).concat(r.slice(w)),g=B.size(S),m=[{type:12,data:g},{type:12,data:l},...ae(n[0].dims,$.dims,S)],x=k=>{let T=U("data",n[0].dataType,n[0].dims.length),C=U("slice_offsets",12,$.dims.length),I=ne("output",n[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,C,I)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:i}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:m}),getShaderSource:x},{inputs:[n[0],$]})},O2=e=>({batchDims:e.batch_dims,cacheKey:""})}),p0,f0,N2,A2,LE=F(()=>{se(),le(),Le(),ue(),p0=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===n?Math.ceil(o/r)===a.dims[l]:o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,l)=>o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},f0=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=B.normalizeAxis(t.gatherAxis,i),s=B.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(a,1,...r);let l=B.size(o),d=e[2].dataType,f=e[0].dataType===22,p=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ae(...e.map((v,$)=>v.dims),o)],h=v=>{let $=U("data",e[0].dataType,e[0].dims.length),w=U("inputIndices",e[1].dataType,e[1].dims.length),S=U("scales",e[2].dataType,e[2].dims.length),g=e.length>3?U("zeroPoint",e[3].dataType,e[3].dims.length):void 0,m=ne("output",d,o.length),x=[$,w,S];g&&x.push(g);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${v.registerUniforms(k).declareVariables(...x,m)}
        ${v.mainStart()}
        let output_indices = ${m.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${m.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${m.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${$.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${m.indicesGet("output_indices","i")};
          ${$.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${$.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${m.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${$.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${$.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${$.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${g?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${g.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${g.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${at(d)}(quantized_data - zero_point) * scale;
        ${m.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((v,$)=>$!==1).map(v=>v.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(v,$)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:h}},N2=(e,t)=>{let n=e.inputs;p0(n,t),e.compute(f0(e.inputs,t))},A2=e=>$e({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),h0,m0,M2,B2,UE=F(()=>{se(),le(),Le(),ue(),h0=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},m0=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,s=e[1].dataType,o=B.normalizeAxis(t.axis,i),l=n[o],d=a.slice(0),f=B.size(d),p=U("input",r,i),h=U("indicesInput",s,a.length),v=ne("output",r,d.length),$=[{type:12,data:f},{type:6,data:l},{type:12,data:o}];return $.push(...ae(n,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:$}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,h,v)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${v.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${v.setByOffset("global_idx","value")};
  }`}},M2=e=>$e({axis:e.axis}),B2=(e,t)=>{let n=e.inputs;h0(n),e.compute(m0(e.inputs,t))}}),g0,y0,D2,P2,jE=F(()=>{se(),le(),ue(),g0=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},y0=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,s]=Mw.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(a/l),f=Math.ceil(i/l),p=!0,h=B.size(o),v=[{type:12,data:p?d:h},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],$=["type","type"];e.length===3&&(v.push(...ae(e[2].dims)),$.push("rank")),v.push(...ae(o));let w=g=>{let m="";t.transA&&t.transB?m="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?m="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?m="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(m="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let x=t.alpha===1?"":"value *= uniforms.alpha;",k=U("a",e[0].dataType,e[0].dims),T=U("b",e[1].dataType,e[1].dims),C=k.type.value,I=null,b=[k,T];e.length===3&&(I=U("c",e[2].dataType,e[2].dims.length),b.push(I));let N=ne("output",e[0].dataType,o.length);b.push(N);let A=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${g.registerUniforms(A).declareVariables(...b)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${m}
    }

    ${x}
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${C}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=g=>{let m=U("a",e[0].dataType,e[0].dims),x=U("b",e[1].dataType,e[1].dims),k=null,T=[m,x];e.length===3&&(k=U("c",e[2].dataType,e[2].dims.length),T.push(k));let C=ne("output",e[0].dataType,o.length);T.push(C);let I=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],b="",N="";t.transA&&t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,b="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,b="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,b="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,b="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let A=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${g.registerUniforms(I).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${m.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${x.type.storage}, ${l}>, ${l}>;
  ${g.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${N}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${b}
      }
      workgroupBarrier();
    }

    ${A}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*f},programUniforms:v}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:v}),getShaderSource:w}},D2=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},P2=(e,t)=>{g0(e.inputs),e.compute(y0(e.inputs,t))}}),sn,hn,lr,ur,v0,w0,_0,$0,x0,b0,k0,S0,L2,U2,WE=F(()=>{se(),le(),Le(),ue(),[sn,hn,lr,ur]=[0,1,2,3],v0=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},w0=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,_0=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,$0=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,x0=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,b0=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${sn}] = batch;
     indices[${hn}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${lr}] = u32(r);
            indices[${ur}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${lr}] = u32(clamp(r, 0, H - 1));
          indices[${ur}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${lr}] = gs_reflect(r, border[1], border[3]);
          indices[${ur}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,k0=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${sn}], indices[${hn}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${sn}], indices[${hn}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${sn}], indices[${hn}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${sn}], indices[${hn}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${sn}], indices[${hn}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${sn}], indices[${hn}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,S0=(e,t)=>{let n=U("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=U("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[sn,hn,lr,ur]=[0,3,1,2]);let s=ne("output",e[0].dataType,a.length),o=n.type.value,l=B.size(a),d=[{type:12,data:l},...ae(e[0].dims,r,a)],f=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${w0}
  ${_0(o)}
  ${$0(t)}
  ${x0(t)}
  ${b0(n,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${lr}]);
      let W_in = i32(uniforms.x_shape[${ur}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${sn}], indices[${lr}], indices[${ur}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${k0(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let h=B.size(a);return{outputs:[{dims:a,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:f}},L2=(e,t)=>{v0(e.inputs),e.compute(S0(e.inputs,t))},U2=e=>$e({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ut,E0,j2,au,T0,Qi,W2,V2=F(()=>{se(),le(),Le(),Vc(),Hc(),ue(),rr(),ut=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,E0=(e,t)=>{let n=e[0],r=ut(e,1),i=ut(e,2),a=ut(e,3),s=ut(e,4),o=ut(e,5),l=ut(e,6),d=ut(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=n.dims[0],p=n.dims[1],h=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],v=p,$=0,w=0,S=Math.floor(h/t.numHeads);if(l&&d&&B.size(l.dims)&&B.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=l.dims[2],w=l.dims[2]}else if(l&&B.size(l.dims)||d&&B.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let g;if(r&&B.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');g=2,v=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');g=5,v=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=0,v=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');g=3}if(a&&B.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let m=$+v,x=0;if(s&&B.size(s.dims)>0){x=8;let I=s.dims;throw I.length===1?I[0]===f?x=1:I[0]===3*f+2&&(x=3):I.length===2&&I[0]===f&&I[1]===m&&(x=5),x===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,T=h;if(i&&B.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(v!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(v!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],k=!0}}let C=!1;if(s&&B.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&B.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==f||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==m)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:p,pastSequenceLength:$,kvSequenceLength:v,totalSequenceLength:m,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:S,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:C,passPastInKv:k,qkvFormat:g}},j2=e=>$e({...e}),au=$e({perm:[0,2,1,3]}),T0=(e,t,n,r,i,a,s)=>{let o=[r,i,a],l=B.size(o),d=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],f=p=>{let h=ne("qkv_with_bias",t.dataType,o),v=U("qkv",t.dataType,o),$=U("bias",n.dataType,o),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(w).declareVariables(v,$,h)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:f},{inputs:[t,n],outputs:[-1]})[0]},Qi=(e,t,n,r,i,a,s,o)=>{let l=a;if(s&&B.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=T0(e,a,s,t,r,n*i,o),l=l.reshape([t,r,n,i]),n===1||r===1?l:e.compute(Tt(l,au.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,r,n,i])),n===1||r===1?l:e.compute(Tt(l,au.perm),{inputs:[l],outputs:[-1]})[0]},W2=(e,t)=>{let n=E0(e.inputs,t),r=e.inputs[0],i=ut(e.inputs,1),a=ut(e.inputs,2),s=ut(e.inputs,3),o=ut(e.inputs,4),l=ut(e.inputs,5),d=ut(e.inputs,6),f=ut(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&a&&i.dims.length===4&&a.dims.length===4,h=Qi(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(p)return Sa(e,h,i,a,o,void 0,d,f,l,n);if(!i||!a)throw new Error("key and value must be provided");let v=Qi(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),$=Qi(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);Sa(e,h,v,$,o,void 0,d,f,l,n)}}),C0,z0,I0,R0,Nd,F2,q2,H2=F(()=>{se(),le(),Le(),ue(),C0=e=>{if(!e||e.length<1)throw new Error("too few inputs")},z0=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),$e({numOutputs:r,axis:t.axis,splitSizes:n})},I0=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ie("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,R0=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Nd=(e,t)=>{let n=e[0].dims,r=B.size(n),i=e[0].dataType,a=B.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),o=U("input",i,n.length),l=new Array(t.numOutputs),d=[],f=[],p=0,h=[{type:12,data:r}];for(let $=0;$<t.numOutputs;$++){p+=t.splitSizes[$],l[$]=p;let w=n.slice();w[a]=t.splitSizes[$],f.push(w),s[$]=ne(`output${$}`,i,w.length),d.push({dims:f[$],dataType:e[0].dataType})}h.push({type:12,data:l},...ae(n,...f));let v=$=>`
  ${$.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...s)}
  ${I0(l.length)}
  ${R0(s)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ie("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},F2=(e,t)=>{C0(e.inputs);let n=e.inputs.length===1?t:z0(e.inputs,t);e.compute(Nd(e.inputs,n),{inputs:[0]})},q2=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return $e({axis:t,numOutputs:r,splitSizes:n})}}),O0,fo,G2,K2=F(()=>{se(),le(),Le(),ue(),O0=(e,t)=>{let[n,r,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!B.areEqual(r.dims,[])&&!B.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!B.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=n.dims[0],d=n.dims[n.dims.length-2],f=i.dims[0],p=B.sizeFromDimension(n.dims,1)/d,h=o===0?i.dims[1]*2:p/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(l!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(d!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(d>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},fo=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=B.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,f=e[2].dims[1],p=i===0?f*2:d/r,h=new Array(s,l,d/p,p-f),v=B.computeStrides(h),$=[{type:1,data:a},{type:12,data:h},{type:12,data:v},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,l*p,1]}):[],...ae(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=S=>{let g=U("input",e[0].dataType,e[0].dims.length),m=U("position_ids",e[1].dataType,e[1].dims.length),x=U("cos_cache",e[2].dataType,e[2].dims.length),k=U("sin_cache",e[3].dataType,e[3].dims.length),T=ne("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:v.length},{name:"input_output_strides",type:"u32",length:v.length}]),`
        ${S.declareVariables(g,m,x,k,T)}

        ${S.mainStart(hi)}
          let half_rotary_emb_dim = uniforms.${x.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${m.broadcastedIndicesToOffset("bsnh.xy",ne("",m.type.tensor,2))};
            let position_id =
                u32(${m.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${g.getByOffset("i")} * ${x.get("position_id","bsnh[3]")} -
                ${g.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${g.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${g.getByOffset("j")} * ${x.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",g.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:$e({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(h)/hi)},programUniforms:$})}},G2=(e,t)=>{O0(e.inputs,t),e.compute(fo(e.inputs,t))}}),N0,A0,su,M0,Q2,VE=F(()=>{Le(),se(),Hc(),V2(),H2(),rr(),K2(),ue(),N0=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=n.dims[0],d=n.dims[1],f=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],p=d,h=0,v=!r||r.dims.length===0,$=Math.floor(v?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);v&&(f=$*t.numHeads);let w=a&&a.dims.length!==0,S=s&&s.dims.length!==0;if(w&&a.dims.length===4&&a.dims[0]===l&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===$)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&S){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if(w||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');g=3}let m=0,x=!1,k=t.kvNumHeads?$*t.kvNumHeads:f;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=i.dims[1]*i.dims[3],x=!0}}let T=e.length>4?e[5]:void 0;if(T){if(T.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=T.dims.reduce((I,b)=>I*b,1);if(C!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${C}.`);for(let I=0;I<T.dims.length;I++)if(T.dims[I]!==1&&T.dims[I]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${I}] = ${T.dims[I]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:$,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:m,scale:t.scale,broadcastResPosBias:!1,passPastInKv:x,qkvFormat:g}},A0=$e({perm:[0,2,1,3]}),su=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Tt(r,A0.perm),{inputs:[r],outputs:[-1]})[0]),r},M0=(e,t,n,r)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=f=>{let p=U("seq_lens",n.dataType,n.dims),h=U("total_seq_lens",r.dataType,r.dims),v=ne("pos_ids",i,s),$=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${f.registerUniforms($).declareVariables(p,h,v)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${v.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${v.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${v.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Q2=(e,t)=>{var k;let n=N0(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,f=n.kvNumHeads?n.kvNumHeads:n.numHeads,p=$e({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,f*n.headSize,f*n.headSize]}),[h,v,$]=!i&&!a?e.compute(Nd([r],p),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],w,S;if(t.doRotary){let T=e.compute(M0(n.batchSize,n.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],C=e.inputs[7],I=e.inputs[8],b=$e({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),N=[h,T,C,I],A=[-1];w=e.compute(fo(N,b),{inputs:N,outputs:A})[0],N.splice(0,1,v);let H=$e({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(fo(N,H),{inputs:N,outputs:A})[0]}let g=Qi(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?w:h,void 0,0),m=su(e,t.doRotary?S:v,n),x=su(e,$,n);Sa(e,g,m,x,void 0,void 0,s,o,void 0,n,l,d)}}),ou,B0,D0,Z2,FE=F(()=>{se(),le(),rr(),ue(),ou=(e,t,n,r,i,a,s,o)=>{let l=Ae(a),d=l===1?"f32":`vec${l}f`,f=l===1?"vec2f":`mat2x${l}f`,p=i*s,h=64;p===1&&(h=256);let v=[i,s,a/l],$=[i,s,2],w=["rank","type","type"],S=[];S.push(...ae(v,$));let g=m=>{let x=U("x",t.dataType,3,l),k=U("scale",n.dataType,n.dims),T=U("bias",r.dataType,r.dims),C=ne("output",1,3,2),I=[x,k,T,C];return`
  var<workgroup> workgroup_shared : array<${f}, ${h}>;
  const workgroup_size = ${h}u;
  ${m.declareVariables(...I)}
  ${m.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${x.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Jn("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${Jn("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${h}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:$,dataType:1}],dispatchGroup:{x:p},programUniforms:S}),getShaderSource:g},{inputs:[t,n,r],outputs:[-1]})[0]},B0=(e,t,n)=>{let r=t[0].dims,i=r,a=2,s=r[0],o=r[1],l=B.sizeFromDimension(r,a),d=Ae(l),f=B.size(i)/d,p=ou(e,t[0],t[1],t[2],s,l,o,n.epsilon),h=[s,o,l/d],v=[s,o],$=["type","none"],w=S=>{let g=U("x",t[0].dataType,h.length,d),m=U("scale_shift",1,v.length,2),x=ne("output",t[0].dataType,h.length,d),k=[g,m,x];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${x.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${m.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${g.getByOffset("global_idx")} * ${x.type.value}(scale_shift.x) + ${x.type.value}(scale_shift.y);
      ${x.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...ae(h,v,h)]}),getShaderSource:w},{inputs:[t[0],p]})},D0=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],s=r[r.length-1],o=B.sizeFromDimension(r,1)/s,l=Ae(s),d=B.size(i)/l,f=[{type:12,data:o},{type:12,data:Math.floor(s/l)}],p=["type","type"],h=!1,v=[0,r.length-1];for(let g=0;g<r.length-2;g++)h=h||r[g+1]!==1,v.push(g+1);h=h&&r[r.length-1]!==1;let $=h?e.compute(Tt(e.inputs[0],v),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(g,m)=>r[v[m]])),w=ou(e,$,t[1],t[2],a,o,s,n.epsilon),S=g=>{let m=Ge(t[0].dataType),x=l===1?"vec2f":`mat${l}x2f`,k=I=>{let b=I===0?"x":"y",N=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${m}(${N}(scale.${b}))`;case 2:return`vec2<${m}>(${N}(scale[0].${b}, scale[1].${b}))`;case 4:return`vec4<${m}>(${N}(scale[0].${b}, scale[1].${b}, scale[2].${b}, scale[3].${b}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=U("input",t[0].dataType,t[0].dims,l),C=ne("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${x}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${g.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:S},{inputs:[t[0],w]})},Z2=(e,t)=>{t.format==="NHWC"?D0(e,e.inputs,t):B0(e,e.inputs,t)}}),P0,L0,X2,qE=F(()=>{se(),le(),ue(),P0=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},L0=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],s=!r&&e[2],o=i,l=B.normalizeAxis(t.axis,i.length),d=B.sizeToDimension(i,l),f=B.sizeFromDimension(i,l),p=B.size(a.dims),h=s?B.size(s.dims):0;if(p!==f||s&&h!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${h}`);let v=[];for(let T=0;T<i.length;++T)T<l?v.push(i[T]):v.push(1);let $=Ae(f),w=["type","type"],S=[{type:12,data:d},{type:1,data:f},{type:12,data:Math.floor(f/$)},{type:1,data:t.epsilon}];s&&w.push("type");let g=n>1,m=n>2,x=T=>{let C=Ge(e[0].dataType),I=[U("x",e[0].dataType,e[0].dims,$),U("scale",a.dataType,a.dims,$)];s&&I.push(U("bias",s.dataType,s.dims,$)),I.push(ne("output",e[0].dataType,o,$)),g&&I.push(ne("mean_data_output",1,v)),m&&I.push(ne("inv_std_output",1,v));let b=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(b).declareVariables(...I)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${kd("f32",$)};
    var mean_square_vector = ${kd("f32",$)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Jr(C,$,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Jn("mean_vector",$)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Jn("mean_square_vector",$)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Jr(C,$,"x[j + offset]")};
      let f32scale = ${Jr(C,$,"scale[j]")};
      output[j + offset] = ${I[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Jr(C,$,"bias[j]")}`:""}
      );
    }

    ${g?"mean_data_output[global_idx] = mean":""};
    ${m?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:o,dataType:e[0].dataType}];return g&&k.push({dims:v,dataType:1}),m&&k.push({dims:v,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${$};${n};${r}`,inputDependencies:w},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:x}},X2=(e,t)=>{P0(e.inputs),e.compute(L0(e.inputs,t,e.outputCount))}}),U0,Y2,HE=F(()=>{le(),Xc(),Yc(),U0=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Y2=e=>{U0(e.inputs);let t=fi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Zc(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=B.size(e.inputs[0].dims.slice(0,-2)),s=B.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,r]),l=e.inputs[1].reshape([1,r,n]),d=[1,a,n],f=[o,l];e.compute(po(f,{activation:""},t,d),{inputs:f})}else e.compute(po(e.inputs,{activation:""},t))}}}),j0,W0,V0,J2,e$,GE=F(()=>{se(),le(),Le(),ue(),j0=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!B.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(B.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(B.size(l)!==d)throw new Error("zeroPoints input size error.")}},W0=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),l=B.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=Ae(t.k),h=Ae(d),v=Ae(s),$=o.concat([i,s]),w=i>1&&s/v%2===0?2:1,S=B.size($)/v/w,g=64,m=[],x=[l,i,a/p],k=B.convertShape(e[1].dims).slice();k.splice(-1,1,d/h),m.push(...ae(x)),m.push(...ae(k)),m.push(...ae(e[2].dims)),e.length===4&&m.push(...ae(B.convertShape(e[3].dims)));let T=[l,i,s/v];m.push(...ae(T));let C=I=>{let b=x.length,N=U("a",e[0].dataType,b,p),A=U("b",12,k.length,h),H=U("scales",e[2].dataType,e[2].dims.length),Q=[N,A,H],Z=e.length===4?U("zero_points",12,e[3].dims.length):void 0;Z&&Q.push(Z);let M=T.length,J=ne("output",e[0].dataType,M,v),ee=Ge(e[0].dataType),te=(()=>{switch(p){case 1:return`array<${ee}, 8>`;case 2:return`mat4x2<${ee}>`;case 4:return`mat2x4<${ee}>`;default:throw new Error(`${p}-component is not supported.`)}})(),j=Math.floor(32/t.bits),L=Math.floor(j/8),K=()=>{let X="";for(let V=0;V<L;V++){let fe=V*t.bits*4,Me=fe+t.bits;X+=`
          // reuse a data (pass ${V})
            var input_offset${V>0?V:""} = ${V===0?N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${V>0?V:""}: ${te};
            for (var j${V>0?V:""}: u32 = 0; j${V>0?V:""} < ${8/p}; j${V>0?V:""}++) {
              a_data${V>0?V:""}[j${V>0?V:""}] = ${N.getByOffset(`input_offset${V>0?V:""}`)};
              input_offset${V>0?V:""}++;
            }
          `;for(let Se=0;Se<v*w;Se++)X+=`
            b_value = ${h===1?`b${Se}_data`:`b${Se}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${V*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${fe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Me}u) & b_mask);`}
            b_quantized_values = ${te}(${Array.from({length:4},(tt,nt)=>`${ee}(b_value_lower[${nt}]), ${ee}(b_value_upper[${nt}])`).join(", ")});
            b_dequantized_values = ${p===1?`${te}(${Array.from({length:8},(tt,nt)=>`(b_quantized_values[${nt}] - ${Z?`zero_point${Se}`:"zero_point"}) * scale${Se}`).join(", ")});`:`(b_quantized_values - ${te}(${Array(8).fill(`${Z?`zero_point${Se}`:"zero_point"}`).join(",")})) * scale${Se};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(Se/v)}]${v>1?`[${Se%v}]`:""} += ${Array.from({length:8/p},(tt,nt)=>`${p===1?`a_data${V>0?V:""}[${nt}] * b_dequantized_values[${nt}]`:`dot(a_data${V>0?V:""}[${nt}], b_dequantized_values[${nt}])`}`).join(" + ")};
          `}return X},D=()=>{let X=`
            var col_index = col * ${v};
            ${Z?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ee}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let V=0;V<v*w;V++)X+=`
            let scale${V} = ${H.getByOffset("col_index * nBlocksPerCol + block")};
            ${Z?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${Z.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${V} = ${ee}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return X},W=()=>{let X=`col_index = col * ${v};`;for(let V=0;V<v*w;V++)X+=`
            let b${V}_data = ${A.getByIndices(`${A.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return X+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${te};
            var b_dequantized_values: ${te};`,X};return`
        var<workgroup> workgroup_shared: array<${J.type.value}, ${w*g}>;
        ${I.declareVariables(...Q,J)}
        ${I.mainStart([g,1,1])}
          let output_indices = ${J.offsetToIndices(`(global_idx / ${g}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${g}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${D()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${W()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${K()}
                word_offset += ${j/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${J.type.value} = ${J.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${g}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${J.setByIndices(`${J.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${h};${v};${w};${g}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:f}],dispatchGroup:{x:S},programUniforms:m}),getShaderSource:C}},V0=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),l=B.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=Ae(t.k),h=Ae(d),v=o.concat([i,s]),$=128,w=s%8===0?8:s%4===0?4:1,S=$/w,g=Math.floor(32/t.bits),m=S*h*g,x=m/p,k=m/t.blockSize,T=B.size(v)/w,C=[],I=[l,i,a/p],b=B.convertShape(e[1].dims).slice();b.splice(-1,1,d/h),C.push(...ae(I)),C.push(...ae(b)),C.push(...ae(e[2].dims)),e.length===4&&C.push(...ae(B.convertShape(e[3].dims)));let N=[l,i,s];C.push(...ae(N));let A=H=>{let Q=I.length,Z=U("a",e[0].dataType,Q,p),M=U("b",12,b.length,h),J=U("scales",e[2].dataType,e[2].dims.length),ee=[Z,M,J],te=e.length===4?U("zero_points",12,e[3].dims.length):void 0;te&&ee.push(te);let j=N.length,L=ne("output",e[0].dataType,j),K=Ge(e[0].dataType),D=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${K}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${K}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${K}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${K}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Z.type.value}, ${x}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${S}>, ${w}>;
        ${H.declareVariables(...ee,L)}
        ${H.mainStart([S,w,1])}
          let output_indices = ${L.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${x};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${x}; a_offset += ${$})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Z.getByIndices(`${Z.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Z.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${te?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${te.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${K}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${K}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${J.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${M.getByIndices(`${M.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let W=Math.floor(g/8),X="";for(let V=0;V<W;V++){let fe=V*t.bits*4,Me=fe+t.bits;X+=`
              ${D()}
              {${t.bits===2?`
                let half_word = b_value >> ${V*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${fe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Me}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${K}>(${Array.from({length:4},(Se,tt)=>`${K}(b_value_lower[${tt}]), ${K}(b_value_upper[${tt}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${K}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Se,tt)=>`${`dot(a_data${tt}, b_dequantized_values[${tt}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return X})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${L.type.value} = ${L.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${L.setByIndices(`${L.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${h};${S};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:v,dataType:f}],dispatchGroup:{x:T},programUniforms:C}),getShaderSource:A}},J2=(e,t)=>{j0(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(V0(e.inputs,t)):e.compute(W0(e.inputs,t))},e$=e=>$e(e)}),F0,q0,H0,G0,K0,Q0,Z0,X0,t$,KE=F(()=>{se(),le(),ue(),F0=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},q0=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ie("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ie("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},H0=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ie("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ie("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},G0=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ie("uniforms.x_shape",i,t)})) {
                  k = i32(${ie("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},K0=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${ie("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ie("uniforms.x_shape",i,t)})) {
                  k -= i32(${ie("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Q0=(e,t,n)=>{switch(n.mode){case 0:return q0(e,t,n.pads.length);case 1:return H0(e,t,n.pads.length);case 2:return G0(e,t,n.pads.length);case 3:return K0(e,t,n.pads.length);default:throw new Error("Invalid mode")}},Z0=(e,t)=>{let n=B.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=B.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ae(e[0].dims,n));let o=["rank"],l=d=>{let f=ne("output",e[0].dataType,n.length),p=U("x",e[0].dataType,r.length),h=p.type.value,v=Q0(f,r.length,t),$=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&$.push({name:"constant_value",type:s?h:"f32"}),`
            ${d.registerUniforms($).declareVariables(p,f)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${v}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(n)/64)},programUniforms:a}),getShaderSource:l}},X0=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)a[Number(o[l])]=Number(n[l]),a[Number(o[l])+i]=Number(n[l+o.length])}else n.forEach((o,l)=>a[Number(l)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:r,pads:s}}else return t},t$=(e,t)=>{F0(e.inputs);let n=X0(e.inputs,t);e.compute(Z0(e.inputs,n),{inputs:[0]})}}),Pi,lu,uu,du,cu,Y0,J0,pu,fu,n$,r$,hu,i$,a$,mu,s$,o$,l$,u$,QE=F(()=>{Lt(),se(),le(),ue(),Pi=e=>{if(Ee.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},lu=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),l=a?t.dilations.slice():[],d=t.pads.slice();uo.adjustPoolAttributes(n,i,s,o,l,d);let f=uo.computePoolOutputShape(n,i,o,l,s,d,t.autoPad),p=Object.assign({},t);a?Object.assign(p,{kernelShape:s,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let h=f.slice();return h.push(h.splice(1,1)[0]),[p,r?h:f]},uu=(e,t)=>{let n=t.format==="NHWC",r=B.size(e),i=B.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],p=!!(d+f);a.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:f}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let v=t.kernelShape[t.kernelShape.length-2],$=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];h=!!(w+S),a.push({type:12,data:v},{type:12,data:$},{type:12,data:w},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,p,h]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=B.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,f)=>d+f);return[a,s,!!l,!1,!1]}},du=(e,t,n,r,i,a,s,o,l,d,f,p)=>{let h=i.format==="NHWC",v=t.type.value,$=ne("output",t.type.tensor,r);if(i.kernelShape.length<=2){let w="",S="",g="",m=n-(h?2:1);if(f?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${m}] < 0 || xIndices[${m}]
                      >= uniforms.x_shape[${m}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,i.kernelShape.length===2){let x=n-(h?3:2);p?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${x}] < 0 || xIndices[${x}] >= uniforms.x_shape[${x}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sh - uniforms.phStart + j;
                `,g=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var value = ${v}(${o});
              var pad = 0;
              ${S}
              ${w}
              ${g}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=i.kernelShape.length,S=i.pads.length,g="";return d?g=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:g=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${v}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${ie("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${ie("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${n-w}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${ie("uniforms.strides",`j - ${n-w}u`,w)}
                    + offsets[j - ${n-w}u] - ${ie("uniforms.pads","j - 2u",S)};
                  ${g}
              }
              ${s}

              output[global_idx] = value;
            }`}},cu=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Y0=e=>`${cu(e)};${e.countIncludePad}`,J0=e=>`${cu(e)};${e.storageOrder};${e.dilations}`,pu=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),fu=(e,t,n,r)=>{let[i,a]=lu(t,r,n),s=U("x",t.dataType,t.dims.length),o=s.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[f,p,h,v,$]=uu(a,i);f.push(...ae(t.dims,a));let w=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${h};${v};${$}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:f}),getShaderSource:S=>du(S,s,t.dims.length,a.length,i,l,d,0,p,h,v,$)}},n$=e=>{let t=e.count_include_pad!==0,n=pu(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:Y0(r)}},r$=(e,t)=>{Pi(e.inputs),e.compute(fu("AveragePool",e.inputs[0],!1,t))},hu={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},i$=e=>{let t=e.format;return{format:t,...hu,cacheKey:t}},a$=(e,t)=>{Pi(e.inputs),e.compute(fu("GlobalAveragePool",e.inputs[0],!0,t))},mu=(e,t,n,r)=>{let[i,a]=lu(t,r,n),s=`
      value = max(x_val, value);
    `,o="",l=U("x",t.dataType,t.dims.length),d=["rank"],[f,p,h,v,$]=uu(a,i);return f.push(...ae(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${h};${v};${$}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:f}),getShaderSource:w=>du(w,l,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,p,h,v,$)}},s$=(e,t)=>{Pi(e.inputs),e.compute(mu("MaxPool",e.inputs[0],!1,t))},o$=e=>{let t=e.storage_order,n=e.dilations,r=pu(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:J0(i)}},l$=e=>{let t=e.format;return{format:t,...hu,cacheKey:t}},u$=(e,t)=>{Pi(e.inputs),e.compute(mu("GlobalMaxPool",e.inputs[0],!0,t))}}),ey,ty,d$,c$,ZE=F(()=>{se(),le(),Le(),ue(),ey=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},ty=(e,t)=>{let n=B.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,s=e[1].dataType,o=B.size(a),l=r===3||r===2,d=l?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,p=e.length>2?e[2]:void 0,h=p?l?[Math.ceil(B.size(p.dims)/4)]:p.dims:void 0,v=f.length===0||f.length===1&&f[0]===1,$=v===!1&&f.length===1,w=Ae(o),S=v&&(!l||w===4),g=S?w:1,m=S&&!l?w:1,x=U("input",l?12:r,d.length,m),k=U("scale",s,f.length),T=p?U("zero_point",l?12:r,h.length):void 0,C=ne("output",s,a.length,g),I=[x,k];T&&I.push(T);let b=[d,f];p&&b.push(h);let N=[{type:12,data:o/g},{type:12,data:n},{type:12,data:t.blockSize},...ae(...b,a)],A=H=>{let Q=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${H.registerUniforms(Q).declareVariables(...I,C)}
      ${H.mainStart()}
          ${H.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${x.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${g===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${x.getByOffset("global_idx")};`};

          // Set scale input
          ${v?`let scale_value= ${k.getByOffset("0")}`:$?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?v?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:$?l?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":x.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:A,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/g/64),y:1,z:1},programUniforms:N})}},d$=(e,t)=>{ey(e.inputs,t),e.compute(ty(e.inputs,t))},c$=e=>$e({axis:e.axis,blockSize:e.blockSize})}),ny,ry,p$,XE=F(()=>{Lt(),se(),ue(),ny=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},ry=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],s=i,o=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...ae(a)],l=d=>{let f=ne("output",r,a.length),p=f.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(h).declareVariables(f)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},p$=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ee.webgpu.validateInputContent&&ny(t,n,r),e.compute(ry(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),iy,ay,f$,h$,YE=F(()=>{se(),le(),Le(),ue(),iy=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${n};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},ay=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,s=Math.ceil(B.sizeToDimension(r,r.length-1)/a),o=r[r.length-1],l=B.sizeFromDimension(n,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:l},...ae(e[1].dims,e[2].dims,i)],f=p=>{let h=U("indices",e[1].dataType,e[1].dims.length),v=U("updates",e[2].dataType,e[2].dims.length,a),$=t.reduction!=="none"&&t.reduction!==""?Ww("output",e[0].dataType,i.length):ne("output",e[0].dataType,i.length,a);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,v,$)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${iy(t.reduction,"output[data_offset + i]","value",$.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f}},f$=e=>$e({reduction:e.reduction}),h$=(e,t)=>{e.compute(ay(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),sy,oy,ly,gu,uy,dy,cy,py,fy,hy,my,gy,yu,yy,vy,wy,_y,$y,m$,g$,JE=F(()=>{se(),le(),Le(),ue(),sy=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},oy=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},ly=(e,t,n,r,i,a)=>{let[s,o,l]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(f=>a.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(f=>r.push(f)),r.length!==0&&r.length!==d&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");sy(r,t),t.axes.length>0&&oy(r,t.axes,d).forEach((f,p)=>r[p]=f)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(f=>i.push(Number(f))),i.length!==0&&i.length!==d&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},gu=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,uy=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${gu("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${gu("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",dy=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",cy=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,s)=>{r[a]=i[s],r[s+n]=i[t.length+s]}),r):i},py=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,s)=>i[a]=n[s])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},fy=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},hy=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ie("uniforms.scales","i",r)};
        var roi_low = ${ie("uniforms.roi","i",i)};
        var roi_hi = ${ie("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ie("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ie("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,my=(e,t,n,r,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ie("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ie("uniforms.roi","i",a)};
          var roi_hi = ${ie("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${ie("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${ie("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,gy=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ie("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,yu=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",yy=(e,t,n,r,i)=>{let[a,s,o,l]=n.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${yu(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${r?`if (row < 0 || row > (${n[s]} - 1) || col < 0 || col > (${n[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${n[s]} - 1));
      col = max(0, min(col, ${n[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},vy=(e,t,n,r,i,a,s,o,l,d)=>{let f=n.length===2,[p,h]=f?[0,1]:[2,3],v=e.type.value,$=w=>{let S=w===p?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${v} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${v} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[w]},
        ${r[w]}, ${n[w]}, ${a[w]}, ${a[w]} + ${n.length});
        var fractOriginalIdx: ${v} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${n[w]} - 1))) {
          return ${l};
        }
        var data: array<${v}, 4> = array<${v}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${v} = originalIdx + ${v}(i);
          if (${S} < 0 || ${S} >= ${n[w]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${S} = max(0, min(${S}, ${n[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${S})`)};
          data[i + 1] = ${w===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(p)};
    ${$(h)};
  fn getCubicInterpolationCoefs(s: ${v}) -> array<${v}, 4> {
    var absS = abs(s);
    var coeffs: array<${v}, 4> = array<${v}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${v} = 1.0 - absS;
    var twoMinusAbsS: ${v} = 2.0 - absS;
    var onePlusAbsS: ${v} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${v}, 4>, coefs: array<${v}, 4>) -> ${v} {
    var coefsSum: ${v} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${v} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},wy=(e,t,n,r,i)=>{let[a,s,o,l,d]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${n[l]} - 1))`)};
      ${yu(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${s}];
      var height:${f} = originalIndices[${o}];
      var width:${f} = originalIndices[${l}];
      ${r?`if (depth < 0 || depth > (${n[s]} - 1) || height < 0 || height > (${n[o]} - 1) || width < 0 || (width > ${n[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${n[s]} - 1));
      height = max(0, min(height, ${n[o]} - 1));
      width = max(0, min(width, ${n[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},_y=(e,t,n,r,i,a)=>{let s=e.dims,o=cy(a,t.axes,s.length),l=py(s,r,i,t.axes),d=r.slice();r.length===0&&(d=s.map((m,x)=>m===0?1:l[x]/m),t.keepAspectRatioPolicy!=="stretch"&&(l=fy(s,d,t)));let f=ne("output",e.dataType,l.length),p=U("input",e.dataType,s.length),h=B.size(l),v=s.length===l.length&&s.every((m,x)=>m===l[x]),$=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,S=p.type.value,g=m=>`
      ${v?"":`
      ${uy(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${gy(p,s)};
              ${dy(t.nearestMode,n,S)};
              ${my(p,f,s,l,d.length,o.length,$)};
              `;case"linear":return`
              ${hy(f,s,l,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${yy(p,f,s,$,w)}`;if(s.length===3||s.length===5)return`${wy(p,f,s,$,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${vy(p,f,s,l,d,o,t.cubicCoeffA,$,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${m.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(p,f)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${v?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${v}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:o},...ae(s,l)]})}},$y=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},m$=(e,t)=>{let n=[],r=[],i=[],a=$y(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");ly(e.inputs,t,a,n,r,i),e.compute(_y(e.inputs[0],t,a,n,r,i),{inputs:[0]})},g$=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return $e({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),xy,by,y$,e4=F(()=>{se(),le(),ue(),xy=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},by=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,s=B.size(a),o=a,l=s,d=a.slice(-1)[0],f=r?a.slice(0,-1).concat(1):[],p=!i&&e.length>3,h=e.length>4,v=r&&n>1,$=r&&n>2,w=n>3,S=64,g=Ae(d),m=[{type:12,data:l},{type:12,data:g},{type:12,data:d},{type:1,data:t.epsilon}],x=T=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],I=[U("x",e[0].dataType,e[0].dims,g),U("skip",e[1].dataType,e[1].dims,g),U("gamma",e[2].dataType,e[2].dims,g)];p&&I.push(U("beta",e[3].dataType,e[3].dims,g)),h&&I.push(U("bias",e[4].dataType,e[4].dims,g)),I.push(ne("output",e[0].dataType,o,g)),v&&I.push(ne("mean_output",1,f)),$&&I.push(ne("inv_std_output",1,f)),w&&I.push(ne("input_skip_bias_sum",e[0].dataType,o,g));let b=Ge(e[0].dataType),N=Ge(1,g);return`

      ${T.registerUniforms(C).declareVariables(...I)}
      var<workgroup> sum_shared : array<${N}, ${S}>;
      var<workgroup> sum_squared_shared : array<${N}, ${S}>;

      ${T.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":b+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Jr(b,g,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Jn("sum",g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Jn("square_sum",g)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${v?"mean_output[global_idx] = mean;":""}
        ${$?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${b}(mean)`}) *
            ${b}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:o,dataType:e[0].dataType}];return n>1&&k.push({dims:f,dataType:1}),n>2&&k.push({dims:f,dataType:1}),n>3&&k.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${g};${v};${$};${w}`,inputDependencies:e.map((T,C)=>"type")},getShaderSource:x,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:m})}},y$=(e,t)=>{xy(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(by(e.inputs,t,e.outputCount,!1),{outputs:n})}}),ky,Li,Sy,vu,Ey,Ty,v$,w$,t4=F(()=>{se(),le(),Le(),ue(),ky=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Li=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Sy=(e,t)=>{if(e.length>1){let n=Li(e,1),r=Li(e,2),i=Li(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),$e({starts:n,ends:r,axes:i})}else return t},vu=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Ey=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${ie("uniforms.input_shape","i",n.length)};
            let steps_i = ${ie("uniforms.steps","i",n.length)};
            let signs_i = ${ie("uniforms.signs","i",n.length)};
            let starts_i = ${ie("uniforms.starts","i",n.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Ty=(e,t)=>{let n=e[0].dims,r=B.size(n),i=t.axes.length>0?B.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Li(e,4);a.forEach(g=>g!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map((g,m)=>vu(g,m,n,i,a)),o=t.ends.map((g,m)=>vu(g,m,n,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let g=0;g<n.length;++g)i.includes(g)||(s.splice(g,0,0),o.splice(g,0,n[g]),a.splice(g,0,1));let l=a.map(g=>Math.sign(g));a.forEach((g,m,x)=>{if(g<0){let k=(o[m]-s[m])/g,T=s[m],C=T+k*a[m];s[m]=C,o[m]=T,x[m]=-g}});let d=n.slice(0);i.forEach((g,m)=>{d[g]=Math.ceil((o[g]-s[g])/a[g])});let f={dims:d,dataType:e[0].dataType},p=ne("output",e[0].dataType,d.length),h=U("input",e[0].dataType,e[0].dims.length),v=B.size(d),$=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],w=[{type:12,data:v},{type:12,data:s},{type:6,data:l},{type:12,data:a},...ae(e[0].dims,d)],S=g=>`
      ${g.registerUniforms($).declareVariables(h,p)}
        ${Ey(h,p,n)}
        ${g.mainStart()}
          ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:w})}},v$=(e,t)=>{ky(e.inputs,t);let n=Sy(e.inputs,t);e.compute(Ty(e.inputs,n),{inputs:[0]})},w$=e=>{let t=e.starts,n=e.ends,r=e.axes;return $e({starts:t,ends:n,axes:r})}}),Cy,zy,_$,$$,n4=F(()=>{se(),le(),Le(),rr(),ue(),Cy=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},zy=(e,t)=>{let n=e.inputs[0],r=n.dims,i=B.size(r),a=r.length,s=B.normalizeAxis(t.axis,a),o=s<r.length-1,l,d=[];o?(d=Array.from({length:a},(I,b)=>b),d[s]=a-1,d[a-1]=s,l=e.compute(Tt(n,d),{inputs:[n],outputs:[-1]})[0]):l=n;let f=l.dims,p=f[a-1],h=i/p,v=Ae(p),$=p/v,w=64;h===1&&(w=256);let S=(I,b)=>b===4?`max(max(${I}.x, ${I}.y), max(${I}.z, ${I}.w))`:b===2?`max(${I}.x, ${I}.y)`:b===3?`max(max(${I}.x, ${I}.y), ${I}.z)`:I,g=U("x",l.dataType,l.dims,v),m=ne("result",l.dataType,l.dims,v),x=g.type.value,k=Ge(l.dataType)==="f32"?`var threadMax = ${x}(-3.4028234663852886e+38f);`:`var threadMax = ${x}(-65504.0h);`,T=I=>`
      var<workgroup> rowMaxShared : ${x};
      var<workgroup> rowSumShared : ${x};
      var<workgroup> threadShared : array<${x}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${x} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${x}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${I.registerUniform("packedCols","i32").declareVariables(g,m)}
      ${I.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${x}(${S("threadShared[0]",v)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${x}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${x}(${Jn("threadShared[0]",v)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${x}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${v};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:$}]}),getShaderSource:T},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Tt(C,d),{inputs:[C]})},_$=(e,t)=>{Cy(e.inputs),zy(e,t)},$$=e=>$e({axis:e.axis})}),wu,Iy,Ry,Oy,x$,r4=F(()=>{se(),le(),ue(),wu=e=>Array.from(e.getBigInt64Array(),Number),Iy=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(wu(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Ry=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Oy=(e,t)=>{let n=e[0].dims,r=t??wu(e[1]),i=Ry(n,r),a=B.size(i),s=e[0].dataType,o=U("input",s,n.length),l=ne("output",s,i.length),d=f=>`
      const inputShape = ${o.indices(...n)};
      ${f.registerUniform("output_size","u32").declareVariables(o,l)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ae(e[0].dims,i)]}),getShaderSource:d}},x$=e=>{Iy(e.inputs),e.compute(Oy(e.inputs),{inputs:[0]})}}),Ny,Ay,b$,i4=F(()=>{se(),le(),ue(),Ny=(e,t,n,r,i)=>{let a=ne("output_data",i,n.length,4),s=U("a_data",t[1].dataType,t[1].dims.length,4),o=U("b_data",t[2].dataType,t[2].dims.length,4),l=U("c_data",t[0].dataType,t[0].dims.length,4),d,f=(p,h,v)=>`select(${h}, ${p}, ${v})`;if(!r)d=a.setByOffset("global_idx",f(s.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let p=(h,v,$="")=>{let w=`a_data[index_a${v}][component_a${v}]`,S=`b_data[index_b${v}][component_b${v}]`,g=`bool(c_data[index_c${v}] & (0xffu << (component_c${v} * 8)))`;return`
            let output_indices${v} = ${a.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offset_a${v} = ${s.broadcastedIndicesToOffset(`output_indices${v}`,a)};
            let offset_b${v} = ${o.broadcastedIndicesToOffset(`output_indices${v}`,a)};
            let offset_c${v} = ${l.broadcastedIndicesToOffset(`output_indices${v}`,a)};
            let index_a${v} = offset_a${v} / 4u;
            let index_b${v} = offset_b${v} / 4u;
            let index_c${v} = offset_c${v} / 4u;
            let component_a${v} = offset_a${v} % 4u;
            let component_b${v} = offset_b${v} % 4u;
            let component_c${v} = offset_c${v} % 4u;
            ${h}[${v}] = ${$}(${f(w,S,g)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Ay=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(B.areEqual(t,n)&&B.areEqual(n,r)),s=t,o=B.size(t);if(a){let d=fi.calcShape(fi.calcShape(t,n,!1),r,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=B.size(s)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Ny(d,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...ae(r,t,n,s)]})}},b$=e=>{e.compute(Ay(e.inputs))}}),k$,a4=F(()=>{wE(),Hc(),_E(),$E(),xE(),bE(),kE(),zE(),RE(),OE(),NE(),AE(),ME(),BE(),DE(),PE(),LE(),UE(),jE(),WE(),VE(),FE(),qE(),HE(),GE(),V2(),KE(),QE(),ZE(),XE(),YE(),qc(),JE(),K2(),e4(),t4(),n4(),H2(),r4(),rr(),Gc(),i4(),k$=new Map([["Abs",[y_]],["Acos",[v_]],["Acosh",[w_]],["Add",[J_]],["ArgMax",[f_,Ed]],["ArgMin",[p_,Ed]],["Asin",[__]],["Asinh",[$_]],["Atan",[x_]],["Atanh",[b_]],["Attention",[h_]],["AveragePool",[r$,n$]],["BatchNormalization",[m_]],["BiasAdd",[g_]],["BiasSplitGelu",[Y_]],["Cast",[S_,k_]],["Ceil",[T_]],["Clip",[E_]],["Concat",[u2,d2]],["Conv",[Od,Rd]],["ConvTranspose",[_2,w2]],["Cos",[C_]],["Cosh",[z_]],["CumSum",[$2,x2]],["DepthToSpace",[b2,k2]],["DequantizeLinear",[d$,c$]],["Div",[e2]],["Einsum",[S2,E2]],["Elu",[I_,Ki]],["Equal",[t2]],["Erf",[R_]],["Exp",[O_]],["Expand",[T2]],["FastGelu",[C2]],["Floor",[N_]],["FusedConv",[Od,Rd]],["Gather",[I2,z2]],["GatherElements",[B2,M2]],["GatherBlockQuantized",[N2,A2]],["GatherND",[R2,O2]],["Gelu",[A_]],["Gemm",[P2,D2]],["GlobalAveragePool",[a$,i$]],["GlobalMaxPool",[u$,l$]],["Greater",[a2]],["GreaterOrEqual",[o2]],["GridSample",[L2,U2]],["GroupQueryAttention",[Q2]],["HardSigmoid",[W_,j_]],["InstanceNormalization",[Z2]],["LayerNormalization",[X2]],["LeakyRelu",[M_,Ki]],["Less",[s2]],["LessOrEqual",[l2]],["Log",[Z_]],["MatMul",[Y2]],["MatMulNBits",[J2,e$]],["MaxPool",[s$,o$]],["Mul",[n2]],["MultiHeadAttention",[W2,j2]],["Neg",[D_]],["Not",[B_]],["Pad",[t$]],["Pow",[r2]],["QuickGelu",[X_,Ki]],["Range",[p$]],["Reciprocal",[P_]],["ReduceMin",[o_]],["ReduceMean",[n_]],["ReduceMax",[s_]],["ReduceSum",[u_]],["ReduceProd",[l_]],["ReduceL1",[r_]],["ReduceL2",[i_]],["ReduceLogSum",[c_]],["ReduceLogSumExp",[a_]],["ReduceSumSquare",[d_]],["Relu",[L_]],["Resize",[m$,g$]],["RotaryEmbedding",[G2]],["ScatterND",[h$,f$]],["Sigmoid",[U_]],["Sin",[V_]],["Sinh",[F_]],["Slice",[v$,w$]],["SkipLayerNormalization",[y$]],["Split",[F2,q2]],["Sqrt",[q_]],["Softmax",[_$,$$]],["Sub",[i2]],["Tan",[H_]],["Tanh",[G_]],["ThresholdedRelu",[Q_,Ki]],["Tile",[x$]],["Transpose",[Fw,qw]],["Where",[b$]]])}),S$,s4=F(()=>{Lt(),En(),ue(),S$=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){cn(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of n)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Jt(e.programInfo.name)}dispose(){}build(e,t){cn(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{n.features.has(d.feature)&&r.push(`enable ${d.extension};`)});let i=Vw(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,o=n.createShaderModule({code:s,label:e.name});ge("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Jt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),E$={};vi(E$,{WebGpuBackend:()=>T$});var My,By,Dy,T$,o4=F(()=>{Lt(),se(),En(),Pw(),yE(),a4(),s4(),My=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},By=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${My(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Dy=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},T$=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new Dy(s),this.gpuDataManager=jw(this),this.programManager=new S$(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,jc(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;cn(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],s=a.kernelId,o=this.kernels.get(s),l=o.kernelType,d=o.kernelName,f=a.programName,p=a.inputTensorViews,h=a.outputTensorViews,v=t[i*2],$=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=v);let w=Number(v-this.queryTimeBase),S=Number($-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(g=>({dims:g.dims,dataType:yn(g.dataType)})),outputsMetadata:h.map(g=>({dims:g.dims,dataType:yn(g.dataType)})),kernelId:s,kernelType:l,kernelName:d,programName:f,startTime:w,endTime:S});else{let g="";p.forEach((x,k)=>{g+=`input[${k}]: [${x.dims}] | ${yn(x.dataType)}, `});let m="";h.forEach((x,k)=>{m+=`output[${k}]: [${x.dims}] | ${yn(x.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${d}|${f}" ${g}${m}start time: ${w} ns, execution time: ${S-w} ns`)}so("GPU",`${f}::${v}::${$}`)}e.unmap(),this.pendingQueries.delete(e)}),Jt()}run(e,t,n,r,i,a){cn(e.name);let s=[];for(let m=0;m<t.length;++m){let x=t[m].data;if(x===0)continue;let k=this.gpuDataManager.get(x);if(!k)throw new Error(`no GPU data for input: ${x}`);s.push(k)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),f=n.length===0?o.map((m,x)=>x):n;if(f.length!==o.length)throw new Error(`Output size ${f.length} must be equal to ${o.length}.`);let p=[],h=[];for(let m=0;m<o.length;++m){if(!Number.isInteger(f[m])||f[m]<-3||f[m]>=a)throw new Error(`Invalid output index: ${f[m]}`);if(f[m]===-3)continue;let x=f[m]===-1,k=f[m]===-2,T=x||k?i(o[m].dataType,o[m].dims):r(f[m],o[m].dataType,o[m].dims);if(p.push(T),T.data===0)continue;let C=this.gpuDataManager.get(T.data);if(!C)throw new Error(`no GPU data for output: ${T.data}`);if(x&&this.temporaryData.push(C),k){let I=this.kernelPersistentData.get(this.currentKernelId);I||(I=[],this.kernelPersistentData.set(this.currentKernelId,I)),I.push(C)}h.push(C)}if(s.length!==t.length||h.length!==p.length){if(h.length===0)return Jt(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let v;if(d){let m=0,x=[];d.forEach(I=>{let b=typeof I.data=="number"?[I.data]:I.data;if(b.length===0)return;let N=I.type===10?2:4,A,H;I.type===10?(H=b.length>4?16:b.length>2?8:b.length*N,A=b.length>4?16:N*b.length):(H=b.length<=2?b.length*N:16,A=16),m=Math.ceil(m/H)*H,x.push(m);let Q=I.type===10?8:4;m+=b.length>4?Math.ceil(b.length/Q)*A:b.length*N});let k=16;m=Math.ceil(m/k)*k;let T=new ArrayBuffer(m);d.forEach((I,b)=>{let N=x[b],A=typeof I.data=="number"?[I.data]:I.data;if(I.type===6)new Int32Array(T,N,A.length).set(A);else if(I.type===12)new Uint32Array(T,N,A.length).set(A);else if(I.type===10)new Uint16Array(T,N,A.length).set(A);else if(I.type===1)new Float32Array(T,N,A.length).set(A);else throw new Error(`Unsupported uniform type: ${yn(I.type)}`)});let C=this.gpuDataManager.create(m,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,T,0,m),this.gpuDataManager.release(C.id),v={offset:0,size:m,buffer:C.buffer}}let $=this.programManager.normalizeDispatchGroupSize(l),w=$[1]===1&&$[2]===1,S=By(e,t,w),g=this.programManager.getArtifact(S);if(g||(g=this.programManager.build(e,$),this.programManager.setArtifact(S,g),ge("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&g.uniformVariablesInfo){if(d.length!==g.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${g.uniformVariablesInfo.length}, got ${d.length} in program "${g.programInfo.name}".`);for(let m=0;m<d.length;m++){let x=d[m],k=x.type,T=typeof x.data=="number"?1:x.data.length,[C,I]=g.uniformVariablesInfo[m];if(k!==C||T!==I)throw new Error(`Uniform variable ${m} mismatch: expect type ${C} with size ${I}, got type ${k} with size ${T} in program "${g.programInfo.name}".`)}}if(ge("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${$[0]}x${$[1]}x${$[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let m={kernelId:this.currentKernelId,programName:g.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(m),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(m)}return this.programManager.run(g,s,h,$,v),Jt(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=k$.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,s=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ge("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${d}`)),1}finally{l&&n.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await bd(this,e,t);return Wc(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ge("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ge("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ge("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),C$={};vi(C$,{init:()=>z$});var ys,Py,z$,l4=F(()=>{se(),En(),le(),gE(),ys=class I${constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(B.size(t)!==B.size(this.dims))throw new Error("Invalid new shape");return new I$(this.module,this.dataType,this.data,t)}},Py=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let s=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let o=[];for(let l=0;l<s;l++){let d=Number(e.getValue(r*i++,a)),f=Number(e.getValue(r*i++,"*")),p=Number(e.getValue(r*i++,a)),h=[];for(let v=0;v<p;v++)h.push(Number(e.getValue(r*i++,a)));o.push(new ys(e,d,f,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,l,d)=>new ys(this.module,l,this.output(o,d),d),a=(o,l)=>{let d=gr(o,l);if(!d)throw new Error(`Unsupported data type: ${o}`);let f=d>0?this.backend.gpuDataManager.create(d).id:0;return new ys(this.module,o,f,l)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},z$=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(o4(),ka(E$)).WebGpuBackend,s=new a;await s.initialize(n,r),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,l,d,f=!1)=>{if(f)ge("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(o),Number(l));else{ge("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(l),p)}},async(o,l,d)=>{ge("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>s.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>s.releaseKernel(o),(o,l,d,f)=>{ge("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let p=new Py(t,s,Number(l));return s.computeKernel(Number(o),p,f)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Uw(n);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,l,d,f)=>a.ensureTensor(s,o,l,d,f),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!n.trace])}}}),Ly,Jc,ep,Mn,Uy,_u,ho,tp,np,$u,rp,ip,ap,R$=F(()=>{Lt(),fE(),hE(),se(),Ar(),Dc(),Aw(),Ly=(e,t)=>{Te()._OrtInit(e,t)!==0&&xe("Can't initialize onnxruntime.")},Jc=async e=>{Ly(e.wasm.numThreads,lo(e.logLevel))},ep=async(e,t)=>{var r,i;(i=(r=Te()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(l4(),ka(C$)).init;t==="webgpu"&&await a("webgpu",Te(),e,n),t==="webnn"&&await a("webnn",Te(),e)}},Mn=new Map,Uy=e=>{let t=Te(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&xe("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},_u=(e,t)=>{let n=Te(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,s=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&xe("Can't get session input/output metadata.");let o=Number(n.getValue(s,"*"));i=Number(n.getValue(s+a,"*"));let l=n.HEAP32[i/4];if(l===0)return[o,0];let d=n.HEAPU32[i/4+1],f=[];for(let p=0;p<d;p++){let h=Number(n.getValue(i+8+p*a,"*"));f.push(h!==0?n.UTF8ToString(h):Number(n.getValue(i+8+(p+d)*a,"*")))}return[o,l,f]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},ho=e=>{let t=Te(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},tp=async(e,t)=>{var p,h,v,$;let n,r,i=Te();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=ho(e);let a=0,s=0,o=0,l=[],d=[],f=[];try{if([s,l]=await Nw(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let b=[];for(let N of t.externalData){let A=typeof N=="string"?N:N.path;b.push(Uc(typeof N=="string"?N:N.data).then(H=>{i.mountExternalData(A,H)}))}await Promise.all(b)}for(let b of(t==null?void 0:t.executionProviders)??[])if((typeof b=="string"?b:b.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof b!="string"){let N=b,A=N==null?void 0:N.context,H=N==null?void 0:N.gpuDevice,Q=N==null?void 0:N.deviceType,Z=N==null?void 0:N.powerPreference;A?i.currentContext=A:H?i.currentContext=await i.webnnCreateMLContext(H):i.currentContext=await i.webnnCreateMLContext({deviceType:Q,powerPreference:Z})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,s),(p=i.webgpuOnCreateSession)==null||p.call(i,a),a===0&&xe("Can't create a session."),(h=i.jsepOnCreateSession)==null||h.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[w,S]=Uy(a),g=!!(t!=null&&t.enableGraphCapture),m=[],x=[],k=[],T=[],C=[];for(let b=0;b<w;b++){let[N,A,H]=_u(a,b);N===0&&xe("Can't get an input name."),d.push(N);let Q=i.UTF8ToString(N);m.push(Q),k.push(A===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:yn(A),shape:H})}for(let b=0;b<S;b++){let[N,A,H]=_u(a,b+w);N===0&&xe("Can't get an output name."),f.push(N);let Q=i.UTF8ToString(N);x.push(Q),T.push(A===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:yn(A),shape:H});{if(g&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let Z=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((v=t==null?void 0:t.preferredOutputLocation)==null?void 0:v[Q])??"cpu",M=i.webnnIsGraphOutput;if(Z==="cpu"&&M&&M(a,Q)){C.push("ml-tensor-cpu-output");continue}if(Z!=="cpu"&&Z!=="cpu-pinned"&&Z!=="gpu-buffer"&&Z!=="ml-tensor")throw new Error(`Not supported preferred output location: ${Z}.`);if(g&&Z!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${Z}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(Z)}}let I=null;return C.some(b=>b==="gpu-buffer"||b==="ml-tensor"||b==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&xe("Can't create IO binding."),I={handle:o,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(b=>b==="ml-tensor-cpu-output"?"ml-tensor":b).map(b=>$d(b))}),Mn.set(a,[a,d,f,I,g,!1]),[a,m,x,k,T]}catch(w){throw d.forEach(S=>i._OrtFree(S)),f.forEach(S=>i._OrtFree(S)),o!==0&&i._OrtReleaseBinding(o)!==0&&xe("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&xe("Can't release session."),w}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&xe("Can't release session options."),l.forEach(w=>i._free(w)),($=i.unmountExternalData)==null||$.call(i)}},np=e=>{var l,d,f;let t=Te(),n=Mn.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,s,o]=n;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&xe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&xe("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(f=t.webgpuOnReleaseSession)==null||f.call(t,e),i.forEach(p=>t._OrtFree(p)),a.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(r)!==0&&xe("Can't release session."),Mn.delete(e)},$u=async(e,t,n,r,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Te(),l=o.PTR_SIZE,d=e[0],f=e[1],p=e[3],h=p,v,$;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let g=e[2].gpuBuffer;$=gr(mr(d),f);{let m=o.jsepRegisterBuffer;if(!m)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');v=m(r,a,g,$)}}else if(p==="ml-tensor"){let g=e[2].mlTensor;$=gr(mr(d),f);let m=o.webnnRegisterMLTensor;if(!m)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');v=m(r,g,mr(d),f)}else{let g=e[2];if(Array.isArray(g)){$=l*g.length,v=o._malloc($),n.push(v);for(let m=0;m<g.length;m++){if(typeof g[m]!="string")throw new TypeError(`tensor data at index ${m} is not a string`);o.setValue(v+m*l,Zt(g[m],n),"*")}}else{let m=o.webnnIsGraphInput,x=o.webnnIsGraphOutput;if(d!=="string"&&m&&x){let k=o.UTF8ToString(i);if(m(r,k)||x(r,k)){let T=mr(d);$=gr(T,f),h="ml-tensor";let C=o.webnnCreateTemporaryTensor,I=o.webnnUploadTensor;if(!C||!I)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let b=await C(r,T,f);I(b,new Uint8Array(g.buffer,g.byteOffset,g.byteLength)),v=b}else $=g.byteLength,v=o._malloc($),n.push(v),o.HEAPU8.set(new Uint8Array(g.buffer,g.byteOffset,$),v)}else $=g.byteLength,v=o._malloc($),n.push(v),o.HEAPU8.set(new Uint8Array(g.buffer,g.byteOffset,$),v)}}let w=o.stackSave(),S=o.stackAlloc(4*f.length);try{f.forEach((m,x)=>o.setValue(S+x*l,m,l===4?"i32":"i64"));let g=o._OrtCreateTensor(mr(d),v,$,S,f.length,$d(h));g===0&&xe(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(g)}finally{o.stackRestore(w)}},rp=async(e,t,n,r,i,a)=>{var Q,Z,M,J;let s=Te(),o=s.PTR_SIZE,l=Mn.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],f=l[1],p=l[2],h=l[3],v=l[4],$=l[5],w=t.length,S=r.length,g=0,m=[],x=[],k=[],T=[],C=[],I=s.stackSave(),b=s.stackAlloc(w*o),N=s.stackAlloc(w*o),A=s.stackAlloc(S*o),H=s.stackAlloc(S*o);try{[g,m]=Ow(a),xr("wasm prepareInputOutputTensor");for(let L=0;L<w;L++)await $u(n[L],x,T,e,f[t[L]],t[L],v);for(let L=0;L<S;L++)await $u(i[L],k,T,e,p[r[L]],w+r[L],v);br("wasm prepareInputOutputTensor");for(let L=0;L<w;L++)s.setValue(b+L*o,x[L],"*"),s.setValue(N+L*o,f[t[L]],"*");for(let L=0;L<S;L++)s.setValue(A+L*o,k[L],"*"),s.setValue(H+L*o,p[r[L]],"*");if(h&&!$){let{handle:L,outputPreferredLocations:K,outputPreferredLocationsEncoded:D}=h;if(f.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${f.length}).`);xr("wasm bindInputsOutputs");for(let W=0;W<w;W++){let X=t[W];await s._OrtBindInput(L,f[X],x[W])!==0&&xe(`Can't bind input[${W}] for session=${e}.`)}for(let W=0;W<S;W++){let X=r[W];(Q=i[W])!=null&&Q[3]?(C.push(k[W]),s._OrtBindOutput(L,p[X],k[W],0)!==0&&xe(`Can't bind pre-allocated output[${W}] for session=${e}.`)):s._OrtBindOutput(L,p[X],0,D[X])!==0&&xe(`Can't bind output[${W}] to ${K[W]} for session=${e}.`)}br("wasm bindInputsOutputs"),Mn.set(e,[d,f,p,h,v,!0])}(Z=s.jsepOnRunStart)==null||Z.call(s,d),(M=s.webnnOnRunStart)==null||M.call(s,d);let ee;h?ee=await s._OrtRunWithBinding(d,h.handle,S,A,g):ee=await s._OrtRun(d,N,b,w,H,S,A,g),ee!==0&&xe("failed to call OrtRun().");let te=[],j=[];xr("wasm ProcessOutputTensor");for(let L=0;L<S;L++){let K=Number(s.getValue(A+L*o,"*"));if(K===k[L]||C.includes(k[L])){te.push(i[L]),K!==k[L]&&s._OrtReleaseTensor(K)!==0&&xe("Can't release tensor.");continue}let D=s.stackSave(),W=s.stackAlloc(4*o),X=!1,V,fe=0;try{s._OrtGetTensorData(K,W,W+o,W+2*o,W+3*o)!==0&&xe(`Can't access output tensor data on index ${L}.`);let Me=o===4?"i32":"i64",Se=Number(s.getValue(W,Me));fe=s.getValue(W+o,"*");let tt=s.getValue(W+o*2,"*"),nt=Number(s.getValue(W+o*3,Me)),lt=[];for(let Ce=0;Ce<nt;Ce++)lt.push(Number(s.getValue(tt+Ce*o,Me)));s._OrtFree(tt)!==0&&xe("Can't free memory for tensor dims.");let ht=lt.reduce((Ce,oe)=>Ce*oe,1);V=yn(Se);let Tn=h==null?void 0:h.outputPreferredLocations[r[L]];if(V==="string"){if(Tn==="gpu-buffer"||Tn==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ce=[];for(let oe=0;oe<ht;oe++){let $t=s.getValue(fe+oe*o,"*"),Ra=s.getValue(fe+(oe+1)*o,"*"),wi=oe===ht-1?void 0:Ra-$t;Ce.push(s.UTF8ToString($t,wi))}te.push([V,lt,Ce,"cpu"])}else if(Tn==="gpu-buffer"&&ht>0){let Ce=s.jsepGetBuffer;if(!Ce)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let oe=Ce(fe),$t=gr(Se,ht);if($t===void 0||!Pc(V))throw new Error(`Unsupported data type: ${V}`);X=!0,te.push([V,lt,{gpuBuffer:oe,download:s.jsepCreateDownloader(oe,$t,V),dispose:()=>{s._OrtReleaseTensor(K)!==0&&xe("Can't release tensor.")}},"gpu-buffer"])}else if(Tn==="ml-tensor"&&ht>0){let Ce=s.webnnEnsureTensor,oe=s.webnnIsGraphInputOutputTypeSupported;if(!Ce||!oe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(gr(Se,ht)===void 0||!Lc(V))throw new Error(`Unsupported data type: ${V}`);if(!oe(e,V,!1))throw new Error(`preferredLocation "ml-tensor" for ${V} output is not supported by current WebNN Context.`);let $t=await Ce(e,fe,Se,lt,!1);X=!0,te.push([V,lt,{mlTensor:$t,download:s.webnnCreateMLTensorDownloader(fe,V),dispose:()=>{s.webnnReleaseTensorId(fe),s._OrtReleaseTensor(K)}},"ml-tensor"])}else if(Tn==="ml-tensor-cpu-output"&&ht>0){let Ce=s.webnnCreateMLTensorDownloader(fe,V)(),oe=te.length;X=!0,j.push((async()=>{let $t=[oe,await Ce];return s.webnnReleaseTensorId(fe),s._OrtReleaseTensor(K),$t})()),te.push([V,lt,[],"cpu"])}else{let Ce=Oo(V),oe=new Ce(ht);new Uint8Array(oe.buffer,oe.byteOffset,oe.byteLength).set(s.HEAPU8.subarray(fe,fe+oe.byteLength)),te.push([V,lt,oe,"cpu"])}}finally{s.stackRestore(D),V==="string"&&fe&&s._free(fe),X||s._OrtReleaseTensor(K)}}h&&!v&&(s._OrtClearBoundOutputs(h.handle)!==0&&xe("Can't clear bound outputs."),Mn.set(e,[d,f,p,h,v,!1]));for(let[L,K]of await Promise.all(j))te[L][2]=K;return br("wasm ProcessOutputTensor"),te}finally{(J=s.webnnOnRunEnd)==null||J.call(s,d),s.stackRestore(I),x.forEach(ee=>s._OrtReleaseTensor(ee)),k.forEach(ee=>s._OrtReleaseTensor(ee)),T.forEach(ee=>s._free(ee)),g!==0&&s._OrtReleaseRunOptions(g),m.forEach(ee=>s._free(ee))}},ip=e=>{let t=Te(),n=Mn.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&xe("Can't get an profile file name."),t._OrtFree(i)},ap=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),Bn,mt,Lr,Ui,ji,vs,xu,ws,dr,cr,jy,O$,N$,A$,M$,B$,D$,P$,L$=F(()=>{Lt(),R$(),Ar(),Mc(),Bn=()=>!!Ee.wasm.proxy&&typeof document<"u",Lr=!1,Ui=!1,ji=!1,ws=new Map,dr=(e,t)=>{let n=ws.get(e);n?n.push(t):ws.set(e,[t])},cr=()=>{if(Lr||!Ui||ji||!mt)throw new Error("worker not ready")},jy=e=>{switch(e.data.type){case"init-wasm":Lr=!1,e.data.err?(ji=!0,xu[1](e.data.err)):(Ui=!0,xu[0]()),vs&&(URL.revokeObjectURL(vs),vs=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ws.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},O$=async()=>{if(!Ui){if(Lr)throw new Error("multiple calls to 'initWasm()' detected.");if(ji)throw new Error("previous call to 'initWasm()' failed.");if(Lr=!0,Bn())return new Promise((e,t)=>{mt==null||mt.terminate(),Iw().then(([n,r])=>{try{mt=r,mt.onerror=a=>t(a),mt.onmessage=jy,xu=[e,t];let i={type:"init-wasm",in:Ee};!i.in.wasm.wasmPaths&&(n||_d)&&(i.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href,import.meta.url).href}),mt.postMessage(i),vs=n}catch(i){t(i)}},t)});try{await Bc(Ee.wasm),await Jc(Ee),Ui=!0}catch(e){throw ji=!0,e}finally{Lr=!1}}},N$=async e=>{if(Bn())return cr(),new Promise((t,n)=>{dr("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Ee}};mt.postMessage(r)});await ep(Ee,e)},A$=async e=>Bn()?(cr(),new Promise((t,n)=>{dr("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};mt.postMessage(r,[e.buffer])})):ho(e),M$=async(e,t)=>{if(Bn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return cr(),new Promise((n,r)=>{dr("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),mt.postMessage(i,a)})}else return tp(e,t)},B$=async e=>{if(Bn())return cr(),new Promise((t,n)=>{dr("release",[t,n]);let r={type:"release",in:e};mt.postMessage(r)});np(e)},D$=async(e,t,n,r,i,a)=>{if(Bn()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return cr(),new Promise((s,o)=>{dr("run",[s,o]);let l=n,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:r,options:a}};mt.postMessage(d,ap(l))})}else return rp(e,t,n,r,i,a)},P$=async e=>{if(Bn())return cr(),new Promise((t,n)=>{dr("end-profiling",[t,n]);let r={type:"end-profiling",in:e};mt.postMessage(r)});ip(e)}}),bu,Wy,U$,u4=F(()=>{Lt(),L$(),se(),Ac(),Aw(),bu=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Wy=e=>{switch(e[3]){case"cpu":return new At(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Pc(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return At.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Lc(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return At.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},U$=class{async fetchModelAndCopyToWasmMemory(e){return A$(await Uc(e))}async loadModel(e,t){cn();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await M$(n,t),Jt()}async dispose(){return B$(this.sessionId)}async run(e,t,n){cn();let r=[],i=[];Object.entries(e).forEach(p=>{let h=p[0],v=p[1],$=this.inputNames.indexOf(h);if($===-1)throw new Error(`invalid input '${h}'`);r.push(v),i.push($)});let a=[],s=[];Object.entries(t).forEach(p=>{let h=p[0],v=p[1],$=this.outputNames.indexOf(h);if($===-1)throw new Error(`invalid output '${h}'`);a.push(v),s.push($)});let o=r.map((p,h)=>bu(p,()=>`input "${this.inputNames[i[h]]}"`)),l=a.map((p,h)=>p?bu(p,()=>`output "${this.outputNames[s[h]]}"`):null),d=await D$(this.sessionId,i,o,s,l,n),f={};for(let p=0;p<d.length;p++)f[this.outputNames[s[p]]]=a[p]??Wy(d[p]);return Jt(),f}startProfiling(){}endProfiling(){P$(this.sessionId)}}}),j$={};vi(j$,{OnnxruntimeWebAssemblyBackend:()=>Md,initializeFlags:()=>Ad,wasmBackend:()=>W$});var Ad,Md,W$,d4=F(()=>{Lt(),L$(),u4(),Ad=()=>{(typeof Ee.wasm.initTimeout!="number"||Ee.wasm.initTimeout<0)&&(Ee.wasm.initTimeout=0);let e=Ee.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ee.wasm.simd=!1),typeof Ee.wasm.proxy!="boolean"&&(Ee.wasm.proxy=!1),typeof Ee.wasm.trace!="boolean"&&(Ee.wasm.trace=!1),typeof Ee.wasm.numThreads!="number"||!Number.isInteger(Ee.wasm.numThreads)||Ee.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ee.wasm.numThreads=1;else{let t=typeof navigator>"u"?QS("node:os").cpus().length:navigator.hardwareConcurrency;Ee.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Md=class{async init(e){Ad(),await O$(),await N$(e)}async createInferenceSessionHandler(e,t){let n=new U$;return await n.loadModel(e,t),n}},W$=new Md});Lt();Lt();Lt();var c4="1.27.0";{let e=(d4(),ka(j$)).wasmBackend;Yr("webgpu",e,5),Yr("webnn",e,5),Yr("cpu",e,10),Yr("wasm",e,10)}Object.defineProperty(Ee.versions,"web",{value:c4,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Ee.wasm.numThreads=Math.min(4,navigator.hardwareConcurrency||2);Ee.wasm.simd=!0;const ku=[.485,.456,.406],Su=[.229,.224,.225];let Eu={},_s=null;async function No(){return _s||(_s=await(await fetch("./models/config.json")).json(),_s)}async function mo(e,t){if(Eu[e])return Eu[e];const i=await fetch(`./models/${e==="acorn_type"?"acorn_type.onnx":"acorn_count.onnx"}`),a=Number(i.headers.get("content-length"))||0,s=i.body.getReader(),o=[];let l=0;for(;;){const{done:h,value:v}=await s.read();if(h)break;o.push(v),l+=v.length,a&&t&&t(l/a)}const d=new Uint8Array(l);let f=0;for(const h of o)d.set(h,f),f+=h.length;const p=await Nc.create(d.buffer,{executionProviders:["wasm"],graphOptimizationLevel:"all"});return Eu[e]=p,p}async function p4(e){await No(),await mo("acorn_count",t=>e==null?void 0:e("acorn_count",t)),await mo("acorn_type",t=>e==null?void 0:e("acorn_type",t))}function V$(e,t,n,r,i,a,s){const o=document.createElement("canvas");o.width=a,o.height=s;const l=o.getContext("2d",{willReadFrequently:!0});return l.drawImage(e,t,n,r,i,0,0,a,s),l.getImageData(0,0,a,s)}async function f4(e){const t=(await No()).acorn_type,n=t.input_size||224,r=await mo("acorn_type"),{data:i}=V$(e,0,0,e.width,e.height,n,n),a=new Float32Array(3*n*n),s=n*n;for(let g=0;g<s;g++){const m=i[g*4]/255,x=i[g*4+1]/255,k=i[g*4+2]/255;a[g]=(m-ku[0])/Su[0],a[s+g]=(x-ku[1])/Su[1],a[2*s+g]=(k-ku[2])/Su[2]}const o=new At("float32",a,[1,3,n,n]),l=await r.run({input:o}),d=Array.from(l.logits.data),f=Math.max(...d),p=d.map(g=>Math.exp(g-f)),h=p.reduce((g,m)=>g+m,0),v=p.map(g=>g/h),w=(t.classes||["Heavy","Medium","Light"]).map((g,m)=>({label:g,probability:+(v[m]*100).toFixed(2)})).sort((g,m)=>m.probability-g.probability),S=w[0];return{kind:"classifier",topClass:S.label,confidence:S.probability,allProbabilities:w}}async function h4(e,t){var x,k;const n=(await No()).acorn_count,r=n.tile_size||640,i=n.tile_stride||576,a=n.conf_threshold??.17,s=n.nms_iou??.4,o=await mo("acorn_count"),l=e.width,d=e.height,f=[];for(let T=0;T<=Math.max(d-r,0);T+=i)f.push(T);(f.length===0||f[f.length-1]+r<d)&&f.push(Math.max(0,d-r));const p=[];for(let T=0;T<=Math.max(l-r,0);T+=i)p.push(T);(p.length===0||p[p.length-1]+r<l)&&p.push(Math.max(0,l-r));const h=f.length*p.length;let v=0;const $=[];for(const T of f)for(const C of p){const I=Math.min(r,l-C),b=Math.min(r,d-T),{data:N}=V$(e,C,T,I,b,r,r),A=new Float32Array(3*r*r),H=r*r;for(let D=0;D<H;D++)A[D]=N[D*4]/255,A[H+D]=N[D*4+1]/255,A[2*H+D]=N[D*4+2]/255;const Q=new At("float32",A,[1,3,r,r]),Z=await o.run({images:Q}),M=Object.keys(Z)[0],J=Z[M],[,ee,te]=J.dims,j=J.data,L=I/r,K=b/r;for(let D=0;D<te;D++){const W=j[4*te+D];if(W<a)continue;const X=j[D],V=j[te+D],fe=j[2*te+D],Me=j[3*te+D],Se=(X-fe/2)*L+C,tt=(V-Me/2)*K+T,nt=(X+fe/2)*L+C,lt=(V+Me/2)*K+T;$.push([Se,tt,nt,lt,W])}v++,t==null||t(v/h),await new Promise(D=>setTimeout(D,0))}const w=m4($,s);let S=w.length;if(n.use_calibration){const T=((x=n.calibration)==null?void 0:x.a)??1,C=((k=n.calibration)==null?void 0:k.b)??0;S=Math.max(0,Math.round(T*S+C))}const g=S>=150?"Heavy":S>=40?"Medium":"Light/None",m=w.map(T=>T.map(C=>+C.toFixed(1)));return{kind:"detector",count:S,category:g,boxes:m,imageSize:[l,d]}}function m4(e,t){const n=e.map((a,s)=>s).sort((a,s)=>e[s][4]-e[a][4]),r=[],i=new Uint8Array(e.length);for(const a of n)if(!i[a]){r.push(e[a]);for(const s of n)s===a||i[s]||g4(e[a],e[s])>t&&(i[s]=1)}return r}function g4(e,t){const n=Math.max(e[0],t[0]),r=Math.max(e[1],t[1]),i=Math.min(e[2],t[2]),a=Math.min(e[3],t[3]),s=Math.max(0,i-n),o=Math.max(0,a-r),l=s*o,d=(e[2]-e[0])*(e[3]-e[1]),f=(t[2]-t[0])*(t[3]-t[1]);return l/(d+f-l+1e-9)}function y4(e){const n=document.createElement("canvas");n.width=200,n.height=200;const r=n.getContext("2d",{willReadFrequently:!0});r.drawImage(e,0,0,200,200);const{data:i}=r.getImageData(0,0,200,200);let a=0;for(let s=0;s<200*200;s++){const o=i[s*4],l=i[s*4+1],d=i[s*4+2];l>o*1.05&&l>d*1.05&&l>40&&a++}return a/(200*200)}function v4(e){return new Promise((t,n)=>{const r=URL.createObjectURL(e),i=new Image;i.onload=()=>{t(i)},i.onerror=()=>{URL.revokeObjectURL(r),n(new Error("Could not decode image"))},i.src=r,i._objectUrl=r})}function w4(e){const t=e.match(/Tree[_-]?(\d{1,4})/i);return t?t[1]:null}async function _4(e){try{const t=new DataView(await e.slice(0,262144).arrayBuffer());if(t.getUint16(0)!==65496)return null;let n=2;const r=t.byteLength;for(;n<r-4;){const i=t.getUint16(n);if(i===65505)return $4(t,n+4);if((i&65280)!==65280)break;n+=2+t.getUint16(n+2)}}catch{}return null}function $4(e,t){if(e.getUint32(t)!==1165519206)return null;const n=t+6,r=e.getUint16(n)===18761,i=w=>e.getUint16(w,r),a=w=>e.getUint32(w,r),s=n+a(n+4),o=i(s);let l=0;for(let w=0;w<o;w++){const S=s+2+w*12;if(i(S)===34853){l=n+a(S+8);break}}if(!l)return null;const d=i(l);let f="N",p="E",h=null,v=null;const $=w=>{const S=[];for(let g=0;g<3;g++){const m=a(w+g*8),x=a(w+g*8+4);S.push(x?m/x:0)}return S[0]+S[1]/60+S[2]/3600};for(let w=0;w<d;w++){const S=l+2+w*12,g=i(S),m=n+a(S+8);g===1?f=String.fromCharCode(e.getUint8(S+8)):g===3?p=String.fromCharCode(e.getUint8(S+8)):g===2?h=$(m):g===4&&(v=$(m))}return h==null||v==null?null:(f==="S"&&(h=-h),p==="W"&&(v=-v),{lat:h,lng:v})}function x4(e){const t=["image_name","tree_number","result","acorn_count","category","confidence_pct","latitude","longitude","valid","processed_at"],n=e.map(a=>{var o,l;const s=a.kind==="detector";return{image_name:a.imageName,tree_number:a.treeNumber??"",result:s?`${a.count} acorns`:a.topClass,acorn_count:s?a.count:"",category:a.category??"",confidence_pct:s?"":a.confidence??"",latitude:((o=a.gps)==null?void 0:o.lat)??"",longitude:((l=a.gps)==null?void 0:l.lng)??"",valid:a.valid,processed_at:a.processedAt}}),r=a=>`"${String(a).replace(/"/g,'""')}"`,i=[t.join(","),...n.map(a=>t.map(s=>r(a[s])).join(","))].join(`
`);F$("\uFEFF"+i,"tree_diagnostics.csv","text/csv;charset=utf-8")}function b4(e){const t=["Image","Tree #","Result","Acorn Count","Category","Confidence %","Latitude","Longitude","Valid","Processed At"],n=e.map(i=>{var o,l;const a=i.kind==="detector";return"<tr>"+[i.imageName,i.treeNumber??"",a?`${i.count} acorns`:i.topClass,a?i.count:"",i.category??"",a?"":i.confidence??"",((o=i.gps)==null?void 0:o.lat)??"",((l=i.gps)==null?void 0:l.lng)??"",i.valid,i.processedAt].map(d=>`<td>${String(d).replace(/</g,"&lt;")}</td>`).join("")+"</tr>"}).join(""),r=`<html xmlns:x="urn:schemas-microsoft-com:office:excel"><head><meta charset="utf-8"></head>
    <body><table border="1"><tr>${t.map(i=>`<th>${i}</th>`).join("")}</tr>${n}</table></body></html>`;F$(r,"tree_diagnostics.xls","application/vnd.ms-excel")}function F$(e,t,n){const r=new Blob([e],{type:n}),i=URL.createObjectURL(r),a=document.createElement("a");a.href=i,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)}function k4({result:e,onClose:t}){const n=me.useRef(null),r=me.useRef(null),i=me.useRef(null),[a,s]=me.useState(!0),o=me.useRef({scale:1,ox:0,oy:0}),l=me.useRef({active:!1,sx:0,sy:0,ox:0,oy:0}),[,d]=me.useState(0),f=e.boxes||[];me.useEffect(()=>{if(!e.file){s(!1);return}const w=URL.createObjectURL(e.file),S=new Image;return S.onload=()=>{i.current=S,p(),h(),s(!1)},S.onerror=()=>s(!1),S.src=w,()=>URL.revokeObjectURL(w)},[e]);const p=me.useCallback(()=>{const w=i.current,S=r.current;if(!w||!S)return;const g=Math.min(S.clientWidth/w.width,S.clientHeight/w.height)*.96;o.current={scale:g,ox:(S.clientWidth-w.width*g)/2,oy:(S.clientHeight-w.height*g)/2}},[]),h=me.useCallback(()=>{const w=n.current,S=r.current,g=i.current;if(!w||!S||!g)return;w.width=S.clientWidth,w.height=S.clientHeight;const m=w.getContext("2d");m.clearRect(0,0,w.width,w.height);const{scale:x,ox:k,oy:T}=o.current;m.save(),m.translate(k,T),m.scale(x,x),m.drawImage(g,0,0),m.restore(),m.strokeStyle="rgba(255,60,60,.95)",m.fillStyle="rgba(255,60,60,.12)",m.lineWidth=1.5;for(const C of f){const I=C[0]*x+k,b=C[1]*x+T,N=(C[2]-C[0])*x,A=(C[3]-C[1])*x;m.fillRect(I,b,N,A),m.strokeRect(I,b,N,A)}},[f]);me.useEffect(()=>{const w=new ResizeObserver(()=>{p(),h()});return r.current&&w.observe(r.current),()=>w.disconnect()},[p,h]);const v=(w,S,g)=>{const m=o.current,x=(w-m.ox)/m.scale,k=(S-m.oy)/m.scale;m.scale=Math.max(.05,Math.min(30,m.scale*g)),m.ox=w-x*m.scale,m.oy=S-k*m.scale,h(),d(T=>T+1)},$=()=>{const w=i.current;if(!w)return;const S=document.createElement("canvas");S.width=w.width,S.height=w.height;const g=S.getContext("2d");g.drawImage(w,0,0),g.strokeStyle="rgba(255,40,40,.95)",g.lineWidth=Math.max(2,w.width/900);for(const k of f)g.strokeRect(k[0],k[1],k[2]-k[0],k[3]-k[1]);const m=Math.max(10,w.width/120);g.font=`bold ${Math.max(20,w.width/45)}px sans-serif`;const x=`${e.count} acorns`;g.fillStyle="rgba(27,67,50,.85)",g.fillRect(m,m,g.measureText(x).width+m*2,Math.max(30,w.width/32)),g.fillStyle="#fff",g.fillText(x,m*2,m+Math.max(24,w.width/40)),S.toBlob(k=>{const T=URL.createObjectURL(k),C=document.createElement("a");C.href=T,C.download=e.imageName.replace(/\.[^.]+$/,"")+"_detections.jpg",C.click(),URL.revokeObjectURL(T)},"image/jpeg",.92)};return O.jsx("div",{onClick:t,style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(13,40,24,.75)",backdropFilter:"blur(3px)"},children:O.jsxs("div",{onClick:w=>w.stopPropagation(),className:"card",style:{width:"min(92vw,1100px)",height:"min(88vh,800px)",background:"#fff",overflow:"hidden",display:"flex",flexDirection:"column"},children:[O.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderBottom:"1px solid var(--color-border)"},children:[O.jsxs("div",{style:{minWidth:0},children:[O.jsx("div",{style:{fontWeight:600,fontSize:14,color:"#0d2818",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:500},children:e.imageName}),O.jsxs("div",{style:{fontSize:12,color:"#6b8f77",marginTop:2},children:[O.jsxs("span",{style:{color:"#1b4332",fontWeight:700},children:[e.count," acorns detected"]}),e.category?` · ${e.category} production`:"",e.treeNumber?` · Tree ${e.treeNumber}`:""]})]}),O.jsxs("div",{style:{display:"flex",gap:2},children:[[[FS,()=>v(r.current.clientWidth/2,r.current.clientHeight/2,1.25)],[qS,()=>v(r.current.clientWidth/2,r.current.clientHeight/2,1/1.25)],[PS,()=>{p(),h(),d(w=>w+1)}],[wd,$]].map(([w,S],g)=>O.jsx("button",{onClick:S,style:{padding:8,borderRadius:8,background:"none",border:"none",cursor:"pointer"},children:O.jsx(w,{size:16,color:"#4a7c5e"})},g)),O.jsx("button",{onClick:t,style:{padding:8,borderRadius:8,background:"none",border:"none",cursor:"pointer",marginLeft:4},children:O.jsx(sw,{size:18,color:"#6b8f77"})})]})]}),O.jsxs("div",{ref:r,style:{flex:1,position:"relative",overflow:"hidden",background:"#0e1810",cursor:"grab"},onWheel:w=>{w.preventDefault();const S=n.current.getBoundingClientRect();v(w.clientX-S.left,w.clientY-S.top,w.deltaY<0?1.12:1/1.12)},onMouseDown:w=>{const S=n.current.getBoundingClientRect();l.current={active:!0,sx:w.clientX-S.left,sy:w.clientY-S.top,ox:o.current.ox,oy:o.current.oy}},onMouseMove:w=>{if(!l.current.active)return;const S=n.current.getBoundingClientRect();o.current.ox=l.current.ox+(w.clientX-S.left-l.current.sx),o.current.oy=l.current.oy+(w.clientY-S.top-l.current.sy),h()},onMouseUp:()=>l.current.active=!1,onMouseLeave:()=>l.current.active=!1,children:[a&&O.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#86d8ac"},children:O.jsx(iw,{size:28,className:"spin"})}),O.jsx("canvas",{ref:n,style:{display:"block"}})]}),O.jsxs("div",{style:{padding:"8px 20px",borderTop:"1px solid var(--color-border)",fontSize:12,color:"#9ca3af",display:"flex",justifyContent:"space-between"},children:[O.jsx("span",{children:"Scroll to zoom · drag to pan · each red box is one detected acorn"}),O.jsxs("span",{style:{color:"#6b8f77"},children:[f.length," boxes"]})]})]})})}const S4=[{type:"acorn_count",label:"Acorn Count",Icon:rw,desc:"Detects and counts every visible acorn on the canopy, returning a precise integer estimate per tree.",chips:["Integer count","Detection boxes","Density band"]},{type:"acorn_type",label:"Acorn Type",Icon:VS,desc:"Classifies each canopy into a production category — Heavy, Medium, or Low/None acorn density.",chips:["Heavy","Medium","Light"]}];function E4(){const[e,t]=me.useState("home"),[n,r]=me.useState("acorn_count"),[i,a]=me.useState([]),[s,o]=me.useState([]),[l,d]=me.useState({done:0,total:0,tile:0,current:""}),[f,p]=me.useState(null),h=me.useRef(!1);if(e==="home")return O.jsx(T4,{onStart:()=>t("model")});return O.jsxs("div",{className:"fade",style:{height:"100%",display:"flex",flexDirection:"column"},children:[O.jsx(C4,{step:e,onHome:()=>t("home")}),O.jsxs("div",{style:{flex:1,overflow:"auto"},children:[e==="model"&&O.jsx(z4,{model:n,setModel:r,onNext:()=>t("upload")}),e==="upload"&&O.jsx(I4,{files:i,setFiles:a,onBack:()=>t("model"),onRun:()=>{v()}}),e==="processing"&&O.jsx(R4,{progress:l,dlProgress:f,model:n}),e==="results"&&O.jsx(O4,{results:s,model:n,onNew:()=>{a([]),o([]),t("model")}})]})]});async function v(){h.current=!1,o([]),d({done:0,total:i.length,tile:0,current:""}),t("processing");try{await p4((w,S)=>p({type:w,pct:S})),p(null)}catch(w){p(null),o([{imageId:"err",imageName:"Model load",kind:"invalid",topClass:"Error",valid:!1,invalidReason:"Could not load models: "+w.message,processedAt:new Date().toISOString()}]),t("results");return}await No();const $=[];for(let w=0;w<i.length&&!h.current;w++){const S=i[w];d(g=>({...g,current:S.name,tile:0}));try{const g=await v4(S.file),m=w4(S.name),x=await _4(S.file);let k;if(n==="acorn_type"){const T=y4(g);T<.1?k={kind:"invalid",topClass:"Invalid",valid:!1,invalidReason:`Insufficient green content (${(T*100).toFixed(1)}%). Not a tree canopy.`}:k={...await f4(g),valid:!0}}else k={...await h4(g,C=>d(I=>({...I,tile:C}))),valid:!0};$.push({imageId:S.id,imageName:S.name,file:S.file,treeNumber:m,gps:x,processedAt:new Date().toISOString(),...k})}catch(g){$.push({imageId:S.id,imageName:S.name,kind:"invalid",topClass:"Error",valid:!1,invalidReason:g.message,processedAt:new Date().toISOString()})}d(g=>({...g,done:w+1})),o([...$])}t("results")}}function T4({onStart:e}){const[t,n]=me.useState(!1);me.useEffect(()=>{const i=setTimeout(()=>n(!0),60);return()=>clearTimeout(i)},[]);const r=[{Icon:Ic,title:"Acorn Intelligence",desc:"Count individual acorns or classify canopy production density from drone imagery."},{Icon:OS,title:"Verifiable Results",desc:"Inspect every detected acorn with an interactive box overlay you can zoom into."},{Icon:aw,title:"Works Offline",desc:"Runs entirely in your browser. No internet, no install, no data ever leaves your device."},{Icon:Ns,title:"Export Reports",desc:"Download results as CSV or Excel for seasonal and year-over-year analysis."}];return O.jsxs("div",{style:{height:"100%",overflow:"auto",background:"linear-gradient(160deg,#f0fdf4,#f8fdf9 60%,#ecfdf5)"},children:[O.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"64px 24px 40px"},children:[O.jsx("div",{style:{width:72,height:72,borderRadius:20,background:"linear-gradient(135deg,#1b4332,#2d6a4f)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 40px rgba(27,67,50,.25)",opacity:t?1:0,transform:t?"scale(1)":"scale(.85)",transition:"all .6s"},children:O.jsx(Ns,{size:32,color:"#fff"})}),O.jsxs("h1",{className:"serif",style:{fontSize:"clamp(30px,4vw,48px)",color:"#0d2818",margin:"24px 0 12px",lineHeight:1.15,opacity:t?1:0,transform:t?"none":"translateY(16px)",transition:"all .6s .1s"},children:["Diagnose tree health,",O.jsx("br",{}),O.jsx("span",{style:{color:"#1b4332"},children:"intelligently."})]}),O.jsx("p",{style:{maxWidth:520,color:"#4a7c5e",lineHeight:1.65,marginBottom:32,opacity:t?1:0,transition:"all .6s .2s"},children:"Upload drone imagery and get AI-powered acorn counts and canopy classifications — entirely in your browser, fully offline, with nothing to install."}),O.jsxs("button",{className:"btn-primary",style:{fontSize:15,padding:"12px 28px",opacity:t?1:0,transition:"all .6s .3s"},onClick:e,children:[O.jsx(Ns,{size:16})," Start Diagnosis"]})]}),O.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16,padding:"0 40px 48px",maxWidth:760,margin:"0 auto",width:"100%",opacity:t?1:0,transition:"all .6s .5s"},children:r.map(({Icon:i,title:a,desc:s})=>O.jsxs("div",{className:"card",style:{padding:20},children:[O.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"linear-gradient(135deg,#dcf5e6,#baeacf)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12},children:O.jsx(i,{size:18,color:"#1b4332"})}),O.jsx("h3",{style:{fontSize:14,color:"#0d2818",marginBottom:4},children:a}),O.jsx("p",{style:{fontSize:12,color:"#6b8f77",lineHeight:1.5},children:s})]},a))})]})}function C4({step:e,onHome:t}){const n=[["model","Select"],["upload","Upload"],["processing","Analyze"],["results","Results"]];return n.findIndex(r=>r[0]===e),O.jsxs("nav",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",height:52,background:"var(--color-primary)",flexShrink:0},children:[O.jsxs("button",{onClick:t,style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"none",color:"#fff",cursor:"pointer"},children:[O.jsx(Ns,{size:18}),O.jsx("span",{className:"serif",style:{fontSize:15,fontWeight:600},children:"Tree Diagnostics"})]}),O.jsx("div",{style:{display:"flex",alignItems:"center",gap:4},children:n.map(([r,i],a)=>O.jsxs(y3.Fragment,{children:[a>0&&O.jsx(ba,{size:13,style:{color:"rgba(255,255,255,.3)"}}),O.jsx("span",{style:{padding:"4px 8px",borderRadius:6,fontSize:12,color:r===e?"#fff":"rgba(255,255,255,.45)",background:r===e?"rgba(255,255,255,.15)":"transparent",fontWeight:r===e?600:400},children:i})]},r))}),O.jsx("div",{style:{width:150}})]})}function z4({model:e,setModel:t,onNext:n}){return O.jsxs("div",{className:"fade",style:{maxWidth:900,margin:"0 auto",padding:"32px 40px",display:"flex",flexDirection:"column",gap:24},children:[O.jsxs("div",{children:[O.jsx("h2",{className:"serif",style:{fontSize:26,color:"#0d2818"},children:"Choose an Analysis"}),O.jsx("p",{style:{fontSize:14,color:"#6b8f77",marginTop:4},children:"Both models are built in and run offline — just pick one."})]}),O.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20},children:S4.map(({type:r,label:i,Icon:a,desc:s,chips:o})=>{const l=e===r;return O.jsxs("button",{onClick:()=>t(r),className:"card",style:{padding:24,textAlign:"left",cursor:"pointer",border:l?"2px solid #1b4332":"1px solid var(--color-border)",background:l?"#f0fdf4":"#fff"},children:[O.jsx("div",{style:{width:52,height:52,borderRadius:14,marginBottom:16,background:l?"linear-gradient(135deg,#1b4332,#2d6a4f)":"linear-gradient(135deg,#dcf5e6,#baeacf)",display:"flex",alignItems:"center",justifyContent:"center"},children:O.jsx(a,{size:24,color:l?"#fff":"#1b4332"})}),O.jsx("div",{style:{fontWeight:600,fontSize:16,color:"#0d2818",marginBottom:4},children:i}),O.jsx("div",{style:{fontSize:12,color:"#6b8f77",lineHeight:1.6,marginBottom:12},children:s}),O.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:o.map(d=>O.jsx("span",{style:{fontSize:12,padding:"2px 8px",borderRadius:100,background:"#dcf5e6",color:"#155432"},children:d},d))}),l&&O.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,marginTop:12,fontSize:12,color:"#1b4332",fontWeight:500},children:[O.jsx(MS,{size:13})," Selected"]})]},r)})}),O.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:O.jsxs("button",{className:"btn-primary",onClick:n,children:["Continue ",O.jsx(ba,{size:16})]})})]})}function I4({files:e,setFiles:t,onBack:n,onRun:r}){const[i,a]=me.useState(!1),s=me.useRef(),o=me.useCallback(l=>{const d=Array.from(l).filter(f=>f.type.startsWith("image/"));t(f=>{const p=new Set(f.map(v=>v.name+v.file.size)),h=d.filter(v=>!p.has(v.name+v.size)).map(v=>({id:Math.random().toString(36).slice(2),file:v,name:v.name}));return[...f,...h]})},[t]);return O.jsxs("div",{className:"fade",style:{maxWidth:760,margin:"0 auto",padding:"32px 40px",display:"flex",flexDirection:"column",gap:20,height:"100%"},children:[O.jsxs("div",{children:[O.jsx("h2",{className:"serif",style:{fontSize:26,color:"#0d2818"},children:"Upload Images"}),O.jsx("p",{style:{fontSize:14,color:"#6b8f77",marginTop:4},children:"Drag & drop drone images, or browse. JPG, PNG, TIFF."})]}),O.jsxs("div",{onClick:()=>s.current.click(),onDragOver:l=>{l.preventDefault(),a(!0)},onDragLeave:()=>a(!1),onDrop:l=>{l.preventDefault(),a(!1),o(l.dataTransfer.files)},style:{border:`2px dashed ${i?"#1b4332":"#a8d5b5"}`,borderRadius:16,padding:"40px 24px",textAlign:"center",cursor:"pointer",background:i?"rgba(27,67,50,.04)":"rgba(240,250,244,.5)",display:"flex",flexDirection:"column",alignItems:"center"},children:[O.jsx("div",{style:{width:52,height:52,borderRadius:14,background:i?"#1b4332":"#dcf5e6",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12},children:O.jsx(WS,{size:22,color:i?"#fff":"#1b4332"})}),O.jsx("div",{style:{fontWeight:600,fontSize:14,color:"#0d2818"},children:i?"Drop images here":"Drag & drop images"}),O.jsx("div",{style:{fontSize:12,color:"#6b8f77",margin:"4px 0 8px"},children:"or"}),O.jsxs("button",{className:"btn-secondary",style:{fontSize:12},onClick:l=>{l.stopPropagation(),s.current.click()},children:[O.jsx(DS,{size:13})," Browse Files"]}),O.jsx("input",{ref:s,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:l=>{o(l.target.files),l.target.value=""}})]}),e.length>0&&O.jsxs("div",{style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",gap:8,minHeight:0},children:[O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[O.jsxs("span",{style:{fontSize:14,fontWeight:500,color:"#1b4332"},children:[e.length," image",e.length!==1?"s":""," queued"]}),O.jsx("button",{onClick:()=>t([]),style:{fontSize:12,color:"#991b1b",background:"#fef2f2",border:"none",padding:"4px 8px",borderRadius:8,cursor:"pointer"},children:"Clear all"})]}),O.jsx("div",{style:{overflow:"auto",flex:1,display:"flex",flexDirection:"column",gap:6},children:e.map(l=>O.jsxs("div",{className:"card",style:{display:"flex",alignItems:"center",gap:12,padding:"10px 12px",borderRadius:10},children:[O.jsx("div",{style:{width:36,height:36,borderRadius:8,background:"#dcf5e6",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:O.jsx(Ic,{size:15,color:"#1b4332"})}),O.jsxs("div",{style:{flex:1,minWidth:0},children:[O.jsx("div",{style:{fontSize:14,fontWeight:500,color:"#0d2818",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l.name}),O.jsxs("div",{style:{fontSize:12,color:"#6b8f77"},children:[(l.file.size/1048576).toFixed(1)," MB"]})]}),O.jsx("button",{onClick:()=>t(e.filter(d=>d.id!==l.id)),style:{background:"none",border:"none",cursor:"pointer",padding:4},children:O.jsx(sw,{size:14,color:"#9ca3af"})})]},l.id))})]}),O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingTop:8,borderTop:"1px solid var(--color-border)"},children:[O.jsxs("button",{className:"btn-secondary",onClick:n,children:[O.jsx(NS,{size:14})," Back"]}),O.jsxs("button",{className:"btn-primary",disabled:e.length===0,onClick:r,children:["Run Analysis ",O.jsx(ba,{size:16})]})]})]})}function R4({progress:e,dlProgress:t,model:n}){const r=e.total?Math.round(e.done/e.total*100):0;return O.jsxs("div",{className:"fade",style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:28,padding:40},children:[O.jsx("div",{style:{width:72,height:72,borderRadius:20,background:"linear-gradient(135deg,#1b4332,#2d6a4f)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 40px rgba(27,67,50,.25)"},children:O.jsx(iw,{size:32,color:"#fff",className:"spin"})}),O.jsx("div",{style:{textAlign:"center",width:"100%",maxWidth:420},children:t?O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"serif",style:{fontSize:20,color:"#0d2818",marginBottom:4},children:"Preparing models…"}),O.jsxs("div",{style:{fontSize:13,color:"#6b8f77",marginBottom:16},children:["First run only — caching ",t.type==="acorn_count"?"Acorn Count":"Acorn Type"," model for offline use (",Math.round(t.pct*100),"%)"]}),O.jsx("div",{className:"progress-bar",children:O.jsx("div",{className:"progress-fill",style:{width:`${Math.round(t.pct*100)}%`}})})]}):O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"serif",style:{fontSize:20,color:"#0d2818",marginBottom:4},children:"Analysing images…"}),O.jsxs("div",{style:{fontSize:13,color:"#6b8f77",marginBottom:4},children:[e.done," / ",e.total," images"]}),e.current&&O.jsxs("div",{style:{fontSize:12,color:"#4a7c5e",marginBottom:16,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[e.current,n==="acorn_count"&&e.tile>0?` — scanning ${Math.round(e.tile*100)}%`:""]}),O.jsx("div",{className:"progress-bar",children:O.jsx("div",{className:"progress-fill",style:{width:`${r}%`}})}),O.jsxs("div",{style:{fontSize:12,color:"#4a7c5e",marginTop:8,fontFamily:"monospace"},children:[r,"%"]}),n==="acorn_count"&&O.jsx("div",{style:{fontSize:11,color:"#9ca3af",marginTop:12},children:"Large drone images are scanned in tiles — this can take 1–3 minutes each. Accuracy first."})]})})]})}function O4({results:e,model:t,onNew:n}){const[r,i]=me.useState(null),[a,s]=me.useState(!navigator.onLine);me.useEffect(()=>{const p=()=>s(!1),h=()=>s(!0);return window.addEventListener("online",p),window.addEventListener("offline",h),()=>{window.removeEventListener("online",p),window.removeEventListener("offline",h)}},[]);const o=e.filter(p=>p.valid),l=o.some(p=>p.kind==="detector"),d=o.reduce((p,h)=>p+(h.count||0),0),f=o.length?Math.round(d/o.length):0;return O.jsxs("div",{className:"fade",style:{height:"100%",display:"flex",flexDirection:"column"},children:[O.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 24px",borderBottom:"1px solid var(--color-border)",background:"#fff",flexWrap:"wrap",gap:8},children:[O.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[O.jsxs("span",{style:{fontSize:14,fontWeight:600,color:"#0d2818"},children:[e.length," images · ",o.length," valid"]}),l&&O.jsxs(O.Fragment,{children:[O.jsxs("span",{style:{fontSize:12,padding:"2px 10px",borderRadius:100,background:"#1b4332",color:"#fff",fontWeight:600},children:[d.toLocaleString()," acorns total"]}),O.jsxs("span",{style:{fontSize:12,padding:"2px 10px",borderRadius:100,background:"#dcf5e6",color:"#155432"},children:["avg ",f,"/tree"]})]})]}),O.jsxs("div",{style:{display:"flex",gap:8},children:[O.jsxs("button",{className:"btn-secondary",style:{fontSize:12,padding:"6px 12px"},onClick:()=>x4(e),children:[O.jsx(wd,{size:13})," CSV"]}),O.jsxs("button",{className:"btn-secondary",style:{fontSize:12,padding:"6px 12px"},onClick:()=>b4(e),children:[O.jsx(wd,{size:13})," Excel"]}),O.jsxs("button",{className:"btn-primary",style:{fontSize:12,padding:"6px 12px"},onClick:n,children:[O.jsx(LS,{size:13})," New"]})]})]}),O.jsx("div",{style:{flex:1,overflow:"auto",padding:24,display:"flex",flexDirection:"column",gap:12},children:e.map(p=>O.jsx(N4,{r:p,onView:()=>i(p)},p.imageId))}),r&&O.jsx(k4,{result:r,onClose:()=>i(null)})]})}function N4({r:e,onView:t}){var l,d,f;const[n,r]=me.useState(!1),i=e.kind==="detector",a=i?e.category==="Heavy"?"badge-heavy":e.category==="Medium"?"badge-medium":"badge-light":e.topClass==="Heavy"?"badge-heavy":e.topClass==="Medium"?"badge-medium":e.topClass==="Light"?"badge-light":"badge-wilt",[s,o]=me.useState(null);return me.useEffect(()=>{if(!e.file)return;const p=URL.createObjectURL(e.file);return o(p),()=>URL.revokeObjectURL(p)},[e.file]),O.jsxs("div",{className:"card",style:{overflow:"hidden"},children:[O.jsxs("div",{style:{display:"flex",alignItems:"stretch"},children:[O.jsx("div",{style:{width:96,background:"#f0f9f4",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:s?O.jsx("img",{src:s,alt:"",style:{width:96,height:72,objectFit:"cover"}}):O.jsx(Ic,{size:24,color:"#a8d5b5"})}),O.jsxs("div",{style:{flex:1,padding:"12px 16px",display:"flex",flexDirection:"column",justifyContent:"center",gap:4,minWidth:0},children:[O.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[O.jsx("span",{style:{fontWeight:600,fontSize:14,color:"#0d2818",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:260},children:e.imageName}),e.treeNumber&&O.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4,fontSize:12,padding:"2px 8px",borderRadius:100,background:"#f0fdf4",color:"#1b4332",border:"1px solid #bbf7d0"},children:[O.jsx(US,{size:10})," Tree ",e.treeNumber]}),!e.valid&&O.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4,fontSize:12,padding:"2px 8px",borderRadius:100},className:"badge-wilt",children:[O.jsx(jS,{size:10})," ",e.topClass==="Error"?"Error":"Invalid"]})]}),O.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},children:[i?O.jsxs(O.Fragment,{children:[O.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6,fontWeight:700,fontSize:20,color:"#1b4332",fontVariantNumeric:"tabular-nums"},children:[O.jsx(rw,{size:15}),e.count,O.jsx("span",{style:{fontWeight:500,fontSize:12,color:"#6b8f77"},children:"acorns"})]}),e.category&&O.jsx("span",{className:a,style:{fontSize:11,padding:"2px 10px",borderRadius:100,fontWeight:600},children:e.category})]}):e.valid?O.jsxs(O.Fragment,{children:[O.jsx("span",{className:a,style:{fontSize:12,padding:"2px 10px",borderRadius:100,fontWeight:600},children:e.topClass}),O.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4,fontSize:12,fontFamily:"monospace",color:e.confidence>=80?"#16a34a":e.confidence>=60?"#ca8a04":"#dc2626"},children:[O.jsx(AS,{size:11})," ",(l=e.confidence)==null?void 0:l.toFixed(1),"%"]})]}):null,e.gps&&O.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4,fontSize:12,color:"#6b8f77"},children:[O.jsx(aw,{size:11})," ",e.gps.lat.toFixed(5),", ",e.gps.lng.toFixed(5)]})]}),!e.valid&&e.invalidReason&&O.jsx("div",{style:{fontSize:12,color:"#b45309"},children:e.invalidReason})]}),O.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,paddingRight:12},children:[i&&e.valid&&((d=e.boxes)==null?void 0:d.length)>0&&O.jsxs("button",{onClick:t,style:{display:"flex",alignItems:"center",gap:4,fontSize:12,padding:"6px 10px",borderRadius:8,color:"#1b4332",background:"#f0fdf4",border:"1px solid #bbf7d0",cursor:"pointer"},children:[O.jsx(BS,{size:13})," View"]}),!i&&e.valid&&((f=e.allProbabilities)==null?void 0:f.length)>0&&O.jsx("button",{onClick:()=>r(!n),style:{background:"none",border:"none",cursor:"pointer",padding:6},children:n?O.jsx(ba,{size:16,color:"#6b8f77",style:{transform:"rotate(90deg)"}}):O.jsx(ba,{size:16,color:"#6b8f77"})})]})]}),n&&!i&&e.allProbabilities&&O.jsx("div",{style:{padding:"4px 16px 12px",borderTop:"1px solid var(--color-border)"},children:e.allProbabilities.map(p=>O.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6},children:[O.jsx("span",{style:{fontSize:12,width:70,color:"#4a7c5e"},children:p.label}),O.jsx("div",{className:"progress-bar",style:{flex:1},children:O.jsx("div",{className:"progress-fill",style:{width:`${p.probability}%`}})}),O.jsxs("span",{style:{fontSize:12,fontFamily:"monospace",width:48,textAlign:"right",color:"#6b8f77"},children:[p.probability.toFixed(1),"%"]})]},p.label))})]})}tw(document.getElementById("root")).render(O.jsx(E4,{}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
