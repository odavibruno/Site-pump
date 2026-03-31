(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Gf={exports:{}},va={},Wf={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function wM(){if(u0)return gt;u0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function x(U,Y,Ae){this.props=U,this.context=Y,this.refs=A,this.updater=Ae||S}x.prototype.isReactComponent={},x.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=x.prototype;function R(U,Y,Ae){this.props=U,this.context=Y,this.refs=A,this.updater=Ae||S}var b=R.prototype=new y;b.constructor=R,M(b,x.prototype),b.isPureReactComponent=!0;var P=Array.isArray,N=Object.prototype.hasOwnProperty,F={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function T(U,Y,Ae){var Xe,Ze={},re=null,pe=null;if(Y!=null)for(Xe in Y.ref!==void 0&&(pe=Y.ref),Y.key!==void 0&&(re=""+Y.key),Y)N.call(Y,Xe)&&!B.hasOwnProperty(Xe)&&(Ze[Xe]=Y[Xe]);var he=arguments.length-2;if(he===1)Ze.children=Ae;else if(1<he){for(var Ue=Array(he),He=0;He<he;He++)Ue[He]=arguments[He+2];Ze.children=Ue}if(U&&U.defaultProps)for(Xe in he=U.defaultProps,he)Ze[Xe]===void 0&&(Ze[Xe]=he[Xe]);return{$$typeof:n,type:U,key:re,ref:pe,props:Ze,_owner:F.current}}function D(U,Y){return{$$typeof:n,type:U.type,key:Y,ref:U.ref,props:U.props,_owner:U._owner}}function q(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function O(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ae){return Y[Ae]})}var K=/\/+/g;function J(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):Y.toString(36)}function oe(U,Y,Ae,Xe,Ze){var re=typeof U;(re==="undefined"||re==="boolean")&&(U=null);var pe=!1;if(U===null)pe=!0;else switch(re){case"string":case"number":pe=!0;break;case"object":switch(U.$$typeof){case n:case e:pe=!0}}if(pe)return pe=U,Ze=Ze(pe),U=Xe===""?"."+J(pe,0):Xe,P(Ze)?(Ae="",U!=null&&(Ae=U.replace(K,"$&/")+"/"),oe(Ze,Y,Ae,"",function(He){return He})):Ze!=null&&(q(Ze)&&(Ze=D(Ze,Ae+(!Ze.key||pe&&pe.key===Ze.key?"":(""+Ze.key).replace(K,"$&/")+"/")+U)),Y.push(Ze)),1;if(pe=0,Xe=Xe===""?".":Xe+":",P(U))for(var he=0;he<U.length;he++){re=U[he];var Ue=Xe+J(re,he);pe+=oe(re,Y,Ae,Ue,Ze)}else if(Ue=g(U),typeof Ue=="function")for(U=Ue.call(U),he=0;!(re=U.next()).done;)re=re.value,Ue=Xe+J(re,he++),pe+=oe(re,Y,Ae,Ue,Ze);else if(re==="object")throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return pe}function $(U,Y,Ae){if(U==null)return U;var Xe=[],Ze=0;return oe(U,Xe,"","",function(re){return Y.call(Ae,re,Ze++)}),Xe}function Q(U){if(U._status===-1){var Y=U._result;Y=Y(),Y.then(function(Ae){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ae)},function(Ae){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ae)}),U._status===-1&&(U._status=0,U._result=Y)}if(U._status===1)return U._result.default;throw U._result}var W={current:null},j={transition:null},te={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:j,ReactCurrentOwner:F};function ue(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:$,forEach:function(U,Y,Ae){$(U,function(){Y.apply(this,arguments)},Ae)},count:function(U){var Y=0;return $(U,function(){Y++}),Y},toArray:function(U){return $(U,function(Y){return Y})||[]},only:function(U){if(!q(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=x,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=R,gt.StrictMode=r,gt.Suspense=d,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,gt.act=ue,gt.cloneElement=function(U,Y,Ae){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Xe=M({},U.props),Ze=U.key,re=U.ref,pe=U._owner;if(Y!=null){if(Y.ref!==void 0&&(re=Y.ref,pe=F.current),Y.key!==void 0&&(Ze=""+Y.key),U.type&&U.type.defaultProps)var he=U.type.defaultProps;for(Ue in Y)N.call(Y,Ue)&&!B.hasOwnProperty(Ue)&&(Xe[Ue]=Y[Ue]===void 0&&he!==void 0?he[Ue]:Y[Ue])}var Ue=arguments.length-2;if(Ue===1)Xe.children=Ae;else if(1<Ue){he=Array(Ue);for(var He=0;He<Ue;He++)he[He]=arguments[He+2];Xe.children=he}return{$$typeof:n,type:U.type,key:Ze,ref:re,props:Xe,_owner:pe}},gt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},gt.createElement=T,gt.createFactory=function(U){var Y=T.bind(null,U);return Y.type=U,Y},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:f,render:U}},gt.isValidElement=q,gt.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:Q}},gt.memo=function(U,Y){return{$$typeof:h,type:U,compare:Y===void 0?null:Y}},gt.startTransition=function(U){var Y=j.transition;j.transition={};try{U()}finally{j.transition=Y}},gt.unstable_act=ue,gt.useCallback=function(U,Y){return W.current.useCallback(U,Y)},gt.useContext=function(U){return W.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return W.current.useDeferredValue(U)},gt.useEffect=function(U,Y){return W.current.useEffect(U,Y)},gt.useId=function(){return W.current.useId()},gt.useImperativeHandle=function(U,Y,Ae){return W.current.useImperativeHandle(U,Y,Ae)},gt.useInsertionEffect=function(U,Y){return W.current.useInsertionEffect(U,Y)},gt.useLayoutEffect=function(U,Y){return W.current.useLayoutEffect(U,Y)},gt.useMemo=function(U,Y){return W.current.useMemo(U,Y)},gt.useReducer=function(U,Y,Ae){return W.current.useReducer(U,Y,Ae)},gt.useRef=function(U){return W.current.useRef(U)},gt.useState=function(U){return W.current.useState(U)},gt.useSyncExternalStore=function(U,Y,Ae){return W.current.useSyncExternalStore(U,Y,Ae)},gt.useTransition=function(){return W.current.useTransition()},gt.version="18.3.1",gt}var c0;function sp(){return c0||(c0=1,Wf.exports=wM()),Wf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function AM(){if(f0)return va;f0=1;var n=sp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var m,v={},g=null,S=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:g,ref:S,props:v,_owner:o.current}}return va.Fragment=t,va.jsx=u,va.jsxs=u,va}var d0;function CM(){return d0||(d0=1,Gf.exports=AM()),Gf.exports}var Je=CM(),tu={},Xf={exports:{}},zn={},jf={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function RM(){return h0||(h0=1,(function(n){function e(j,te){var ue=j.length;j.push(te);e:for(;0<ue;){var U=ue-1>>>1,Y=j[U];if(0<o(Y,te))j[U]=te,j[ue]=Y,ue=U;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var te=j[0],ue=j.pop();if(ue!==te){j[0]=ue;e:for(var U=0,Y=j.length,Ae=Y>>>1;U<Ae;){var Xe=2*(U+1)-1,Ze=j[Xe],re=Xe+1,pe=j[re];if(0>o(Ze,ue))re<Y&&0>o(pe,Ze)?(j[U]=pe,j[re]=ue,U=re):(j[U]=Ze,j[Xe]=ue,U=Xe);else if(re<Y&&0>o(pe,ue))j[U]=pe,j[re]=ue,U=re;else break e}}return te}function o(j,te){var ue=j.sortIndex-te.sortIndex;return ue!==0?ue:j.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,v=null,g=3,S=!1,M=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(j){for(var te=t(h);te!==null;){if(te.callback===null)r(h);else if(te.startTime<=j)r(h),te.sortIndex=te.expirationTime,e(d,te);else break;te=t(h)}}function P(j){if(A=!1,b(j),!M)if(t(d)!==null)M=!0,Q(N);else{var te=t(h);te!==null&&W(P,te.startTime-j)}}function N(j,te){M=!1,A&&(A=!1,y(T),T=-1),S=!0;var ue=g;try{for(b(te),v=t(d);v!==null&&(!(v.expirationTime>te)||j&&!O());){var U=v.callback;if(typeof U=="function"){v.callback=null,g=v.priorityLevel;var Y=U(v.expirationTime<=te);te=n.unstable_now(),typeof Y=="function"?v.callback=Y:v===t(d)&&r(d),b(te)}else r(d);v=t(d)}if(v!==null)var Ae=!0;else{var Xe=t(h);Xe!==null&&W(P,Xe.startTime-te),Ae=!1}return Ae}finally{v=null,g=ue,S=!1}}var F=!1,B=null,T=-1,D=5,q=-1;function O(){return!(n.unstable_now()-q<D)}function K(){if(B!==null){var j=n.unstable_now();q=j;var te=!0;try{te=B(!0,j)}finally{te?J():(F=!1,B=null)}}else F=!1}var J;if(typeof R=="function")J=function(){R(K)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,$=oe.port2;oe.port1.onmessage=K,J=function(){$.postMessage(null)}}else J=function(){x(K,0)};function Q(j){B=j,F||(F=!0,J())}function W(j,te){T=x(function(){j(n.unstable_now())},te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){M||S||(M=!0,Q(N))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(j){switch(g){case 1:case 2:case 3:var te=3;break;default:te=g}var ue=g;g=te;try{return j()}finally{g=ue}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,te){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ue=g;g=j;try{return te()}finally{g=ue}},n.unstable_scheduleCallback=function(j,te,ue){var U=n.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?U+ue:U):ue=U,j){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=ue+Y,j={id:m++,callback:te,priorityLevel:j,startTime:ue,expirationTime:Y,sortIndex:-1},ue>U?(j.sortIndex=ue,e(h,j),t(d)===null&&j===t(h)&&(A?(y(T),T=-1):A=!0,W(P,ue-U))):(j.sortIndex=Y,e(d,j),M||S||(M=!0,Q(N))),j},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(j){var te=g;return function(){var ue=g;g=te;try{return j.apply(this,arguments)}finally{g=ue}}}})(Yf)),Yf}var p0;function PM(){return p0||(p0=1,jf.exports=RM()),jf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function bM(){if(m0)return zn;m0=1;var n=sp(),e=PM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function g(i){return d.call(v,i)?!0:d.call(m,i)?!1:h.test(i)?v[i]=!0:(m[i]=!0,!1)}function S(i,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,c){if(s===null||typeof s>"u"||S(i,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(i,s,a,c,p,_,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new A(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,R);x[s]=new A(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,R);x[s]=new A(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,R);x[s]=new A(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,a,c){var p=x.hasOwnProperty(s)?x[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,c)&&(a=null),c||p===null?g(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,c=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?i.setAttributeNS(c,s,a):i.setAttribute(s,a))))}var P=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),F=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),O=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),j=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=j&&i[j]||i["@@iterator"],typeof i=="function"?i:null)}var ue=Object.assign,U;function Y(i){if(U===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+i}var Ae=!1;function Xe(i,s){if(!i||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(se){var c=se}Reflect.construct(i,[],s)}else{try{s.call()}catch(se){c=se}i.call(s.prototype)}else{try{throw Error()}catch(se){c=se}i()}}catch(se){if(se&&c&&typeof se.stack=="string"){for(var p=se.stack.split(`
`),_=c.stack.split(`
`),w=p.length-1,I=_.length-1;1<=w&&0<=I&&p[w]!==_[I];)I--;for(;1<=w&&0<=I;w--,I--)if(p[w]!==_[I]){if(w!==1||I!==1)do if(w--,I--,0>I||p[w]!==_[I]){var k=`
`+p[w].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=w&&0<=I);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?Y(i):""}function Ze(i){switch(i.tag){case 5:return Y(i.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return i=Xe(i.type,!1),i;case 11:return i=Xe(i.type.render,!1),i;case 1:return i=Xe(i.type,!0),i;default:return""}}function re(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case B:return"Fragment";case F:return"Portal";case D:return"Profiler";case T:return"StrictMode";case J:return"Suspense";case oe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case q:return(i._context.displayName||"Context")+".Provider";case K:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case $:return s=i.displayName||null,s!==null?s:re(i.type)||"Memo";case Q:s=i._payload,i=i._init;try{return re(i(s))}catch{}}return null}function pe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function he(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function He(i){var s=Ue(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){c=""+w,_.call(this,w)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function it(i){i._valueTracker||(i._valueTracker=He(i))}function Kt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return i&&(c=Ue(i)?i.checked?"true":"false":i.value),i=c,i!==a?(s.setValue(i),!0):!1}function mt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function St(i,s){var a=s.checked;return ue({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function bt(i,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=he(s.value!=null?s.value:a),i._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ft(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function kt(i,s){ft(i,s);var a=he(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Gt(i,s.type,a):s.hasOwnProperty("defaultValue")&&Gt(i,s.type,he(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function V(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Gt(i,s,a){(s!=="number"||mt(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var vt=Array.isArray;function Mt(i,s,a,c){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&c&&(i[a].defaultSelected=!0)}else{for(a=""+he(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Ge(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function L(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(vt(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:he(a)}}function E(i,s){var a=he(s.value),c=he(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),c!=null&&(i.defaultValue=""+c)}function G(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function de(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?de(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ce,Oe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,c,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Te(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(qe).forEach(function(i){rt.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),qe[s]=qe[i]})});function xe(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||qe.hasOwnProperty(i)&&qe[i]?(""+s).trim():s+"px"}function Ee(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=xe(a,s[a],c);a==="float"&&(a="cssFloat"),c?i.setProperty(a,p):i[a]=p}}var We=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(i,s){if(s){if(We[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function be(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function z(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var we=null,Se=null,De=null;function ye(i){if(i=na(i)){if(typeof we!="function")throw Error(t(280));var s=i.stateNode;s&&(s=gl(s),we(i.stateNode,i.type,s))}}function fe(i){Se?De?De.push(i):De=[i]:Se=i}function ke(){if(Se){var i=Se,s=De;if(De=Se=null,ye(i),s)for(i=0;i<s.length;i++)ye(s[i])}}function ot(i,s){return i(s)}function Lt(){}var Et=!1;function Jn(i,s,a){if(Et)return i(s,a);Et=!0;try{return ot(i,s,a)}finally{Et=!1,(Se!==null||De!==null)&&(Lt(),ke())}}function An(i,s){var a=i.stateNode;if(a===null)return null;var c=gl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ns=!1;if(f)try{var $i={};Object.defineProperty($i,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{Ns=!1}function cc(i,s,a,c,p,_,w,I,k){var se=Array.prototype.slice.call(arguments,3);try{s.apply(a,se)}catch(ve){this.onError(ve)}}var yr=!1,ts=null,ei=!1,ns=null,qa={onError:function(i){yr=!0,ts=i}};function Ka(i,s,a,c,p,_,w,I,k){yr=!1,ts=null,cc.apply(qa,arguments)}function Us(i,s,a,c,p,_,w,I,k){if(Ka.apply(this,arguments),yr){if(yr){var se=ts;yr=!1,ts=null}else throw Error(t(198));ei||(ei=!0,ns=se)}}function Di(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function is(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Bo(i){if(Di(i)!==i)throw Error(t(188))}function $a(i){var s=i.alternate;if(!s){if(s=Di(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,c=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return Bo(p),i;if(_===c)return Bo(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=_;else{for(var w=!1,I=p.child;I;){if(I===a){w=!0,a=p,c=_;break}if(I===c){w=!0,c=p,a=_;break}I=I.sibling}if(!w){for(I=_.child;I;){if(I===a){w=!0,a=_,c=p;break}if(I===c){w=!0,c=_,a=p;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function Za(i){return i=$a(i),i!==null?Qa(i):null}function Qa(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Qa(i);if(s!==null)return s;i=i.sibling}return null}var Ja=e.unstable_scheduleCallback,el=e.unstable_cancelCallback,fc=e.unstable_shouldYield,dc=e.unstable_requestPaint,C=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,le=e.unstable_ImmediatePriority,ie=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,Re=e.unstable_LowPriority,Ne=e.unstable_IdlePriority,Ce=null,Le=null;function $e(i){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(Ce,i,void 0,(i.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Dt,dt=Math.log,Qe=Math.LN2;function Dt(i){return i>>>=0,i===0?32:31-(dt(i)/Qe|0)|0}var Ot=64,Ut=4194304;function yt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function $t(i,s){var a=i.pendingLanes;if(a===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,w=a&268435455;if(w!==0){var I=w&~p;I!==0?c=yt(I):(_&=w,_!==0&&(c=yt(_)))}else w=a&~p,w!==0?c=yt(w):_!==0&&(c=yt(_));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=c;0<s;)a=31-et(s),p=1<<a,c|=i[a],s&=~p;return c}function Ye(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cn(i,s){for(var a=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-et(_),I=1<<w,k=p[w];k===-1?((I&a)===0||(I&c)!==0)&&(p[w]=Ye(I,s)):k<=s&&(i.expiredLanes|=I),_&=~I}}function _t(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Nn(){var i=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),i}function Un(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function Wn(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-et(s),i[s]=a}function Sr(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-et(a),_=1<<p;s[p]=0,c[p]=-1,i[p]=-1,a&=~_}}function Rt(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var c=31-et(a),p=1<<c;p&s|i[c]&s&&(i[c]|=s),a&=~p}}var at=0;function hi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Zt,ti,Zi,ko,Xp,hc=!1,tl=[],Mr=null,Er=null,Tr=null,Vo=new Map,zo=new Map,wr=[],Yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(i,s){switch(i){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Vo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(s.pointerId)}}function Ho(i,s,a,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},s!==null&&(s=na(s),s!==null&&ti(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function qy(i,s,a,c,p){switch(s){case"focusin":return Mr=Ho(Mr,i,s,a,c,p),!0;case"dragenter":return Er=Ho(Er,i,s,a,c,p),!0;case"mouseover":return Tr=Ho(Tr,i,s,a,c,p),!0;case"pointerover":var _=p.pointerId;return Vo.set(_,Ho(Vo.get(_)||null,i,s,a,c,p)),!0;case"gotpointercapture":return _=p.pointerId,zo.set(_,Ho(zo.get(_)||null,i,s,a,c,p)),!0}return!1}function Yp(i){var s=rs(i.target);if(s!==null){var a=Di(s);if(a!==null){if(s=a.tag,s===13){if(s=is(a),s!==null){i.blockedOn=s,Xp(i.priority,function(){Zi(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function nl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=mc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var c=new a.constructor(a.type,a);ct=c,a.target.dispatchEvent(c),ct=null}else return s=na(a),s!==null&&ti(s),i.blockedOn=a,!1;s.shift()}return!0}function qp(i,s,a){nl(i)&&a.delete(s)}function Ky(){hc=!1,Mr!==null&&nl(Mr)&&(Mr=null),Er!==null&&nl(Er)&&(Er=null),Tr!==null&&nl(Tr)&&(Tr=null),Vo.forEach(qp),zo.forEach(qp)}function Go(i,s){i.blockedOn===s&&(i.blockedOn=null,hc||(hc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ky)))}function Wo(i){function s(p){return Go(p,i)}if(0<tl.length){Go(tl[0],i);for(var a=1;a<tl.length;a++){var c=tl[a];c.blockedOn===i&&(c.blockedOn=null)}}for(Mr!==null&&Go(Mr,i),Er!==null&&Go(Er,i),Tr!==null&&Go(Tr,i),Vo.forEach(s),zo.forEach(s),a=0;a<wr.length;a++)c=wr[a],c.blockedOn===i&&(c.blockedOn=null);for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)Yp(a),a.blockedOn===null&&wr.shift()}var Fs=P.ReactCurrentBatchConfig,il=!0;function $y(i,s,a,c){var p=at,_=Fs.transition;Fs.transition=null;try{at=1,pc(i,s,a,c)}finally{at=p,Fs.transition=_}}function Zy(i,s,a,c){var p=at,_=Fs.transition;Fs.transition=null;try{at=4,pc(i,s,a,c)}finally{at=p,Fs.transition=_}}function pc(i,s,a,c){if(il){var p=mc(i,s,a,c);if(p===null)Lc(i,s,c,rl,a),jp(i,c);else if(qy(p,i,s,a,c))c.stopPropagation();else if(jp(i,c),s&4&&-1<Yy.indexOf(i)){for(;p!==null;){var _=na(p);if(_!==null&&Zt(_),_=mc(i,s,a,c),_===null&&Lc(i,s,c,rl,a),_===p)break;p=_}p!==null&&c.stopPropagation()}else Lc(i,s,c,null,a)}}var rl=null;function mc(i,s,a,c){if(rl=null,i=z(c),i=rs(i),i!==null)if(s=Di(i),s===null)i=null;else if(a=s.tag,a===13){if(i=is(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return rl=i,null}function Kp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case le:return 1;case ie:return 4;case ee:case Re:return 16;case Ne:return 536870912;default:return 16}default:return 16}}var Ar=null,gc=null,sl=null;function $p(){if(sl)return sl;var i,s=gc,a=s.length,c,p="value"in Ar?Ar.value:Ar.textContent,_=p.length;for(i=0;i<a&&s[i]===p[i];i++);var w=a-i;for(c=1;c<=w&&s[a-c]===p[_-c];c++);return sl=p.slice(i,1<c?1-c:void 0)}function ol(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function al(){return!0}function Zp(){return!1}function Xn(i){function s(a,c,p,_,w){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(a=i[I],this[I]=a?a(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?al:Zp,this.isPropagationStopped=Zp,this}return ue(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),s}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=Xn(Os),Xo=ue({},Os,{view:0,detail:0}),Qy=Xn(Xo),_c,xc,jo,ll=ue({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==jo&&(jo&&i.type==="mousemove"?(_c=i.screenX-jo.screenX,xc=i.screenY-jo.screenY):xc=_c=0,jo=i),_c)},movementY:function(i){return"movementY"in i?i.movementY:xc}}),Qp=Xn(ll),Jy=ue({},ll,{dataTransfer:0}),eS=Xn(Jy),tS=ue({},Xo,{relatedTarget:0}),yc=Xn(tS),nS=ue({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=Xn(nS),rS=ue({},Os,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),sS=Xn(rS),oS=ue({},Os,{data:0}),Jp=Xn(oS),aS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=uS[i])?!!s[i]:!1}function Sc(){return cS}var fS=ue({},Xo,{key:function(i){if(i.key){var s=aS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ol(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?lS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(i){return i.type==="keypress"?ol(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ol(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),dS=Xn(fS),hS=ue({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=Xn(hS),pS=ue({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),mS=Xn(pS),gS=ue({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=Xn(gS),_S=ue({},ll,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=Xn(_S),yS=[9,13,27,32],Mc=f&&"CompositionEvent"in window,Yo=null;f&&"documentMode"in document&&(Yo=document.documentMode);var SS=f&&"TextEvent"in window&&!Yo,tm=f&&(!Mc||Yo&&8<Yo&&11>=Yo),nm=" ",im=!1;function rm(i,s){switch(i){case"keyup":return yS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Bs=!1;function MS(i,s){switch(i){case"compositionend":return sm(s);case"keypress":return s.which!==32?null:(im=!0,nm);case"textInput":return i=s.data,i===nm&&im?null:i;default:return null}}function ES(i,s){if(Bs)return i==="compositionend"||!Mc&&rm(i,s)?(i=$p(),sl=gc=Ar=null,Bs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return tm&&s.locale!=="ko"?null:s.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!TS[i.type]:s==="textarea"}function am(i,s,a,c){fe(c),s=hl(s,"onChange"),0<s.length&&(a=new vc("onChange","change",null,a,c),i.push({event:a,listeners:s}))}var qo=null,Ko=null;function wS(i){wm(i,0)}function ul(i){var s=Gs(i);if(Kt(s))return i}function AS(i,s){if(i==="change")return s}var lm=!1;if(f){var Ec;if(f){var Tc="oninput"in document;if(!Tc){var um=document.createElement("div");um.setAttribute("oninput","return;"),Tc=typeof um.oninput=="function"}Ec=Tc}else Ec=!1;lm=Ec&&(!document.documentMode||9<document.documentMode)}function cm(){qo&&(qo.detachEvent("onpropertychange",fm),Ko=qo=null)}function fm(i){if(i.propertyName==="value"&&ul(Ko)){var s=[];am(s,Ko,i,z(i)),Jn(wS,s)}}function CS(i,s,a){i==="focusin"?(cm(),qo=s,Ko=a,qo.attachEvent("onpropertychange",fm)):i==="focusout"&&cm()}function RS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ul(Ko)}function PS(i,s){if(i==="click")return ul(s)}function bS(i,s){if(i==="input"||i==="change")return ul(s)}function DS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var pi=typeof Object.is=="function"?Object.is:DS;function $o(i,s){if(pi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!d.call(s,p)||!pi(i[p],s[p]))return!1}return!0}function dm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function hm(i,s){var a=dm(i);i=0;for(var c;a;){if(a.nodeType===3){if(c=i+a.textContent.length,i<=s&&c>=s)return{node:a,offset:s-i};i=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dm(a)}}function pm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?pm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function mm(){for(var i=window,s=mt();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=mt(i.document)}return s}function wc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function LS(i){var s=mm(),a=i.focusedElem,c=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&pm(a.ownerDocument.documentElement,a)){if(c!==null&&wc(a)){if(s=c.start,i=c.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=hm(a,_);var w=hm(a,c);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var IS=f&&"documentMode"in document&&11>=document.documentMode,ks=null,Ac=null,Zo=null,Cc=!1;function gm(i,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cc||ks==null||ks!==mt(c)||(c=ks,"selectionStart"in c&&wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Zo&&$o(Zo,c)||(Zo=c,c=hl(Ac,"onSelect"),0<c.length&&(s=new vc("onSelect","select",null,s,a),i.push({event:s,listeners:c}),s.target=ks)))}function cl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Vs={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Rc={},vm={};f&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function fl(i){if(Rc[i])return Rc[i];if(!Vs[i])return i;var s=Vs[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in vm)return Rc[i]=s[a];return i}var _m=fl("animationend"),xm=fl("animationiteration"),ym=fl("animationstart"),Sm=fl("transitionend"),Mm=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(i,s){Mm.set(i,s),l(s,[i])}for(var Pc=0;Pc<Em.length;Pc++){var bc=Em[Pc],NS=bc.toLowerCase(),US=bc[0].toUpperCase()+bc.slice(1);Cr(NS,"on"+US)}Cr(_m,"onAnimationEnd"),Cr(xm,"onAnimationIteration"),Cr(ym,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(Sm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Tm(i,s,a){var c=i.type||"unknown-event";i.currentTarget=a,Us(c,s,void 0,i),i.currentTarget=null}function wm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var c=i[a],p=c.event;c=c.listeners;e:{var _=void 0;if(s)for(var w=c.length-1;0<=w;w--){var I=c[w],k=I.instance,se=I.currentTarget;if(I=I.listener,k!==_&&p.isPropagationStopped())break e;Tm(p,I,se),_=k}else for(w=0;w<c.length;w++){if(I=c[w],k=I.instance,se=I.currentTarget,I=I.listener,k!==_&&p.isPropagationStopped())break e;Tm(p,I,se),_=k}}}if(ei)throw i=ns,ei=!1,ns=null,i}function Vt(i,s){var a=s[Bc];a===void 0&&(a=s[Bc]=new Set);var c=i+"__bubble";a.has(c)||(Am(s,i,2,!1),a.add(c))}function Dc(i,s,a){var c=0;s&&(c|=4),Am(a,i,c,s)}var dl="_reactListening"+Math.random().toString(36).slice(2);function Jo(i){if(!i[dl]){i[dl]=!0,r.forEach(function(a){a!=="selectionchange"&&(FS.has(a)||Dc(a,!1,i),Dc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[dl]||(s[dl]=!0,Dc("selectionchange",!1,s))}}function Am(i,s,a,c){switch(Kp(s)){case 1:var p=$y;break;case 4:p=Zy;break;default:p=pc}a=p.bind(null,s,a,i),p=void 0,!Ns||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function Lc(i,s,a,c,p){var _=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var I=c.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(w===4)for(w=c.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===p||k.nodeType===8&&k.parentNode===p))return;w=w.return}for(;I!==null;){if(w=rs(I),w===null)return;if(k=w.tag,k===5||k===6){c=_=w;continue e}I=I.parentNode}}c=c.return}Jn(function(){var se=_,ve=z(a),_e=[];e:{var ge=Mm.get(i);if(ge!==void 0){var Ie=vc,Ve=i;switch(i){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":Ie=dS;break;case"focusin":Ve="focus",Ie=yc;break;case"focusout":Ve="blur",Ie=yc;break;case"beforeblur":case"afterblur":Ie=yc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=eS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=mS;break;case _m:case xm:case ym:Ie=iS;break;case Sm:Ie=vS;break;case"scroll":Ie=Qy;break;case"wheel":Ie=xS;break;case"copy":case"cut":case"paste":Ie=sS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=em}var je=(s&4)!==0,Qt=!je&&i==="scroll",Z=je?ge!==null?ge+"Capture":null:ge;je=[];for(var H=se,ne;H!==null;){ne=H;var Me=ne.stateNode;if(ne.tag===5&&Me!==null&&(ne=Me,Z!==null&&(Me=An(H,Z),Me!=null&&je.push(ea(H,Me,ne)))),Qt)break;H=H.return}0<je.length&&(ge=new Ie(ge,Ve,null,a,ve),_e.push({event:ge,listeners:je}))}}if((s&7)===0){e:{if(ge=i==="mouseover"||i==="pointerover",Ie=i==="mouseout"||i==="pointerout",ge&&a!==ct&&(Ve=a.relatedTarget||a.fromElement)&&(rs(Ve)||Ve[Qi]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(Ve=a.relatedTarget||a.toElement,Ie=se,Ve=Ve?rs(Ve):null,Ve!==null&&(Qt=Di(Ve),Ve!==Qt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ie=null,Ve=se),Ie!==Ve)){if(je=Qp,Me="onMouseLeave",Z="onMouseEnter",H="mouse",(i==="pointerout"||i==="pointerover")&&(je=em,Me="onPointerLeave",Z="onPointerEnter",H="pointer"),Qt=Ie==null?ge:Gs(Ie),ne=Ve==null?ge:Gs(Ve),ge=new je(Me,H+"leave",Ie,a,ve),ge.target=Qt,ge.relatedTarget=ne,Me=null,rs(ve)===se&&(je=new je(Z,H+"enter",Ve,a,ve),je.target=ne,je.relatedTarget=Qt,Me=je),Qt=Me,Ie&&Ve)t:{for(je=Ie,Z=Ve,H=0,ne=je;ne;ne=zs(ne))H++;for(ne=0,Me=Z;Me;Me=zs(Me))ne++;for(;0<H-ne;)je=zs(je),H--;for(;0<ne-H;)Z=zs(Z),ne--;for(;H--;){if(je===Z||Z!==null&&je===Z.alternate)break t;je=zs(je),Z=zs(Z)}je=null}else je=null;Ie!==null&&Cm(_e,ge,Ie,je,!1),Ve!==null&&Qt!==null&&Cm(_e,Qt,Ve,je,!0)}}e:{if(ge=se?Gs(se):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var Ke=AS;else if(om(ge))if(lm)Ke=bS;else{Ke=RS;var tt=CS}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=PS);if(Ke&&(Ke=Ke(i,se))){am(_e,Ke,a,ve);break e}tt&&tt(i,ge,se),i==="focusout"&&(tt=ge._wrapperState)&&tt.controlled&&ge.type==="number"&&Gt(ge,"number",ge.value)}switch(tt=se?Gs(se):window,i){case"focusin":(om(tt)||tt.contentEditable==="true")&&(ks=tt,Ac=se,Zo=null);break;case"focusout":Zo=Ac=ks=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,gm(_e,a,ve);break;case"selectionchange":if(IS)break;case"keydown":case"keyup":gm(_e,a,ve)}var nt;if(Mc)e:{switch(i){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Bs?rm(i,a)&&(lt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(tm&&a.locale!=="ko"&&(Bs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Bs&&(nt=$p()):(Ar=ve,gc="value"in Ar?Ar.value:Ar.textContent,Bs=!0)),tt=hl(se,lt),0<tt.length&&(lt=new Jp(lt,i,null,a,ve),_e.push({event:lt,listeners:tt}),nt?lt.data=nt:(nt=sm(a),nt!==null&&(lt.data=nt)))),(nt=SS?MS(i,a):ES(i,a))&&(se=hl(se,"onBeforeInput"),0<se.length&&(ve=new Jp("onBeforeInput","beforeinput",null,a,ve),_e.push({event:ve,listeners:se}),ve.data=nt))}wm(_e,s)})}function ea(i,s,a){return{instance:i,listener:s,currentTarget:a}}function hl(i,s){for(var a=s+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=An(i,a),_!=null&&c.unshift(ea(i,_,p)),_=An(i,s),_!=null&&c.push(ea(i,_,p))),i=i.return}return c}function zs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Cm(i,s,a,c,p){for(var _=s._reactName,w=[];a!==null&&a!==c;){var I=a,k=I.alternate,se=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&se!==null&&(I=se,p?(k=An(a,_),k!=null&&w.unshift(ea(a,k,I))):p||(k=An(a,_),k!=null&&w.push(ea(a,k,I)))),a=a.return}w.length!==0&&i.push({event:s,listeners:w})}var OS=/\r\n?/g,BS=/\u0000|\uFFFD/g;function Rm(i){return(typeof i=="string"?i:""+i).replace(OS,`
`).replace(BS,"")}function pl(i,s,a){if(s=Rm(s),Rm(i)!==s&&a)throw Error(t(425))}function ml(){}var Ic=null,Nc=null;function Uc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,Pm=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof Pm<"u"?function(i){return Pm.resolve(null).then(i).catch(zS)}:Fc;function zS(i){setTimeout(function(){throw i})}function Oc(i,s){var a=s,c=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){i.removeChild(p),Wo(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);Wo(s)}function Rr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function bm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Li="__reactFiber$"+Hs,ta="__reactProps$"+Hs,Qi="__reactContainer$"+Hs,Bc="__reactEvents$"+Hs,HS="__reactListeners$"+Hs,GS="__reactHandles$"+Hs;function rs(i){var s=i[Li];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Qi]||a[Li]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=bm(i);i!==null;){if(a=i[Li])return a;i=bm(i)}return s}i=a,a=i.parentNode}return null}function na(i){return i=i[Li]||i[Qi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Gs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function gl(i){return i[ta]||null}var kc=[],Ws=-1;function Pr(i){return{current:i}}function zt(i){0>Ws||(i.current=kc[Ws],kc[Ws]=null,Ws--)}function Bt(i,s){Ws++,kc[Ws]=i.current,i.current=s}var br={},xn=Pr(br),Fn=Pr(!1),ss=br;function Xs(i,s){var a=i.type.contextTypes;if(!a)return br;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function On(i){return i=i.childContextTypes,i!=null}function vl(){zt(Fn),zt(xn)}function Dm(i,s,a){if(xn.current!==br)throw Error(t(168));Bt(xn,s),Bt(Fn,a)}function Lm(i,s,a){var c=i.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,pe(i)||"Unknown",p));return ue({},a,c)}function _l(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||br,ss=xn.current,Bt(xn,i),Bt(Fn,Fn.current),!0}function Im(i,s,a){var c=i.stateNode;if(!c)throw Error(t(169));a?(i=Lm(i,s,ss),c.__reactInternalMemoizedMergedChildContext=i,zt(Fn),zt(xn),Bt(xn,i)):zt(Fn),Bt(Fn,a)}var Ji=null,xl=!1,Vc=!1;function Nm(i){Ji===null?Ji=[i]:Ji.push(i)}function WS(i){xl=!0,Nm(i)}function Dr(){if(!Vc&&Ji!==null){Vc=!0;var i=0,s=at;try{var a=Ji;for(at=1;i<a.length;i++){var c=a[i];do c=c(!0);while(c!==null)}Ji=null,xl=!1}catch(p){throw Ji!==null&&(Ji=Ji.slice(i+1)),Ja(le,Dr),p}finally{at=s,Vc=!1}}return null}var js=[],Ys=0,yl=null,Sl=0,ni=[],ii=0,os=null,er=1,tr="";function as(i,s){js[Ys++]=Sl,js[Ys++]=yl,yl=i,Sl=s}function Um(i,s,a){ni[ii++]=er,ni[ii++]=tr,ni[ii++]=os,os=i;var c=er;i=tr;var p=32-et(c)-1;c&=~(1<<p),a+=1;var _=32-et(s)+p;if(30<_){var w=p-p%5;_=(c&(1<<w)-1).toString(32),c>>=w,p-=w,er=1<<32-et(s)+p|a<<p|c,tr=_+i}else er=1<<_|a<<p|c,tr=i}function zc(i){i.return!==null&&(as(i,1),Um(i,1,0))}function Hc(i){for(;i===yl;)yl=js[--Ys],js[Ys]=null,Sl=js[--Ys],js[Ys]=null;for(;i===os;)os=ni[--ii],ni[ii]=null,tr=ni[--ii],ni[ii]=null,er=ni[--ii],ni[ii]=null}var jn=null,Yn=null,Wt=!1,mi=null;function Fm(i,s){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Om(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,jn=i,Yn=Rr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,jn=i,Yn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=os!==null?{id:er,overflow:tr}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,jn=i,Yn=null,!0):!1;default:return!1}}function Gc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Wc(i){if(Wt){var s=Yn;if(s){var a=s;if(!Om(i,s)){if(Gc(i))throw Error(t(418));s=Rr(a.nextSibling);var c=jn;s&&Om(i,s)?Fm(c,a):(i.flags=i.flags&-4097|2,Wt=!1,jn=i)}}else{if(Gc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Wt=!1,jn=i}}}function Bm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;jn=i}function Ml(i){if(i!==jn)return!1;if(!Wt)return Bm(i),Wt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Uc(i.type,i.memoizedProps)),s&&(s=Yn)){if(Gc(i))throw km(),Error(t(418));for(;s;)Fm(i,s),s=Rr(s.nextSibling)}if(Bm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Yn=Rr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Yn=null}}else Yn=jn?Rr(i.stateNode.nextSibling):null;return!0}function km(){for(var i=Yn;i;)i=Rr(i.nextSibling)}function qs(){Yn=jn=null,Wt=!1}function Xc(i){mi===null?mi=[i]:mi.push(i)}var XS=P.ReactCurrentBatchConfig;function ia(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(w){var I=p.refs;w===null?delete I[_]:I[_]=w},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function El(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Vm(i){var s=i._init;return s(i._payload)}function zm(i){function s(Z,H){if(i){var ne=Z.deletions;ne===null?(Z.deletions=[H],Z.flags|=16):ne.push(H)}}function a(Z,H){if(!i)return null;for(;H!==null;)s(Z,H),H=H.sibling;return null}function c(Z,H){for(Z=new Map;H!==null;)H.key!==null?Z.set(H.key,H):Z.set(H.index,H),H=H.sibling;return Z}function p(Z,H){return Z=kr(Z,H),Z.index=0,Z.sibling=null,Z}function _(Z,H,ne){return Z.index=ne,i?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<H?(Z.flags|=2,H):ne):(Z.flags|=2,H)):(Z.flags|=1048576,H)}function w(Z){return i&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,H,ne,Me){return H===null||H.tag!==6?(H=Of(ne,Z.mode,Me),H.return=Z,H):(H=p(H,ne),H.return=Z,H)}function k(Z,H,ne,Me){var Ke=ne.type;return Ke===B?ve(Z,H,ne.props.children,Me,ne.key):H!==null&&(H.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&Vm(Ke)===H.type)?(Me=p(H,ne.props),Me.ref=ia(Z,H,ne),Me.return=Z,Me):(Me=Yl(ne.type,ne.key,ne.props,null,Z.mode,Me),Me.ref=ia(Z,H,ne),Me.return=Z,Me)}function se(Z,H,ne,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==ne.containerInfo||H.stateNode.implementation!==ne.implementation?(H=Bf(ne,Z.mode,Me),H.return=Z,H):(H=p(H,ne.children||[]),H.return=Z,H)}function ve(Z,H,ne,Me,Ke){return H===null||H.tag!==7?(H=ms(ne,Z.mode,Me,Ke),H.return=Z,H):(H=p(H,ne),H.return=Z,H)}function _e(Z,H,ne){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Of(""+H,Z.mode,ne),H.return=Z,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case N:return ne=Yl(H.type,H.key,H.props,null,Z.mode,ne),ne.ref=ia(Z,null,H),ne.return=Z,ne;case F:return H=Bf(H,Z.mode,ne),H.return=Z,H;case Q:var Me=H._init;return _e(Z,Me(H._payload),ne)}if(vt(H)||te(H))return H=ms(H,Z.mode,ne,null),H.return=Z,H;El(Z,H)}return null}function ge(Z,H,ne,Me){var Ke=H!==null?H.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ke!==null?null:I(Z,H,""+ne,Me);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case N:return ne.key===Ke?k(Z,H,ne,Me):null;case F:return ne.key===Ke?se(Z,H,ne,Me):null;case Q:return Ke=ne._init,ge(Z,H,Ke(ne._payload),Me)}if(vt(ne)||te(ne))return Ke!==null?null:ve(Z,H,ne,Me,null);El(Z,ne)}return null}function Ie(Z,H,ne,Me,Ke){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return Z=Z.get(ne)||null,I(H,Z,""+Me,Ke);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case N:return Z=Z.get(Me.key===null?ne:Me.key)||null,k(H,Z,Me,Ke);case F:return Z=Z.get(Me.key===null?ne:Me.key)||null,se(H,Z,Me,Ke);case Q:var tt=Me._init;return Ie(Z,H,ne,tt(Me._payload),Ke)}if(vt(Me)||te(Me))return Z=Z.get(ne)||null,ve(H,Z,Me,Ke,null);El(H,Me)}return null}function Ve(Z,H,ne,Me){for(var Ke=null,tt=null,nt=H,lt=H=0,dn=null;nt!==null&&lt<ne.length;lt++){nt.index>lt?(dn=nt,nt=null):dn=nt.sibling;var At=ge(Z,nt,ne[lt],Me);if(At===null){nt===null&&(nt=dn);break}i&&nt&&At.alternate===null&&s(Z,nt),H=_(At,H,lt),tt===null?Ke=At:tt.sibling=At,tt=At,nt=dn}if(lt===ne.length)return a(Z,nt),Wt&&as(Z,lt),Ke;if(nt===null){for(;lt<ne.length;lt++)nt=_e(Z,ne[lt],Me),nt!==null&&(H=_(nt,H,lt),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return Wt&&as(Z,lt),Ke}for(nt=c(Z,nt);lt<ne.length;lt++)dn=Ie(nt,Z,lt,ne[lt],Me),dn!==null&&(i&&dn.alternate!==null&&nt.delete(dn.key===null?lt:dn.key),H=_(dn,H,lt),tt===null?Ke=dn:tt.sibling=dn,tt=dn);return i&&nt.forEach(function(Vr){return s(Z,Vr)}),Wt&&as(Z,lt),Ke}function je(Z,H,ne,Me){var Ke=te(ne);if(typeof Ke!="function")throw Error(t(150));if(ne=Ke.call(ne),ne==null)throw Error(t(151));for(var tt=Ke=null,nt=H,lt=H=0,dn=null,At=ne.next();nt!==null&&!At.done;lt++,At=ne.next()){nt.index>lt?(dn=nt,nt=null):dn=nt.sibling;var Vr=ge(Z,nt,At.value,Me);if(Vr===null){nt===null&&(nt=dn);break}i&&nt&&Vr.alternate===null&&s(Z,nt),H=_(Vr,H,lt),tt===null?Ke=Vr:tt.sibling=Vr,tt=Vr,nt=dn}if(At.done)return a(Z,nt),Wt&&as(Z,lt),Ke;if(nt===null){for(;!At.done;lt++,At=ne.next())At=_e(Z,At.value,Me),At!==null&&(H=_(At,H,lt),tt===null?Ke=At:tt.sibling=At,tt=At);return Wt&&as(Z,lt),Ke}for(nt=c(Z,nt);!At.done;lt++,At=ne.next())At=Ie(nt,Z,lt,At.value,Me),At!==null&&(i&&At.alternate!==null&&nt.delete(At.key===null?lt:At.key),H=_(At,H,lt),tt===null?Ke=At:tt.sibling=At,tt=At);return i&&nt.forEach(function(TM){return s(Z,TM)}),Wt&&as(Z,lt),Ke}function Qt(Z,H,ne,Me){if(typeof ne=="object"&&ne!==null&&ne.type===B&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case N:e:{for(var Ke=ne.key,tt=H;tt!==null;){if(tt.key===Ke){if(Ke=ne.type,Ke===B){if(tt.tag===7){a(Z,tt.sibling),H=p(tt,ne.props.children),H.return=Z,Z=H;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&Vm(Ke)===tt.type){a(Z,tt.sibling),H=p(tt,ne.props),H.ref=ia(Z,tt,ne),H.return=Z,Z=H;break e}a(Z,tt);break}else s(Z,tt);tt=tt.sibling}ne.type===B?(H=ms(ne.props.children,Z.mode,Me,ne.key),H.return=Z,Z=H):(Me=Yl(ne.type,ne.key,ne.props,null,Z.mode,Me),Me.ref=ia(Z,H,ne),Me.return=Z,Z=Me)}return w(Z);case F:e:{for(tt=ne.key;H!==null;){if(H.key===tt)if(H.tag===4&&H.stateNode.containerInfo===ne.containerInfo&&H.stateNode.implementation===ne.implementation){a(Z,H.sibling),H=p(H,ne.children||[]),H.return=Z,Z=H;break e}else{a(Z,H);break}else s(Z,H);H=H.sibling}H=Bf(ne,Z.mode,Me),H.return=Z,Z=H}return w(Z);case Q:return tt=ne._init,Qt(Z,H,tt(ne._payload),Me)}if(vt(ne))return Ve(Z,H,ne,Me);if(te(ne))return je(Z,H,ne,Me);El(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,H!==null&&H.tag===6?(a(Z,H.sibling),H=p(H,ne),H.return=Z,Z=H):(a(Z,H),H=Of(ne,Z.mode,Me),H.return=Z,Z=H),w(Z)):a(Z,H)}return Qt}var Ks=zm(!0),Hm=zm(!1),Tl=Pr(null),wl=null,$s=null,jc=null;function Yc(){jc=$s=wl=null}function qc(i){var s=Tl.current;zt(Tl),i._currentValue=s}function Kc(i,s,a){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===a)break;i=i.return}}function Zs(i,s){wl=i,jc=$s=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Bn=!0),i.firstContext=null)}function ri(i){var s=i._currentValue;if(jc!==i)if(i={context:i,memoizedValue:s,next:null},$s===null){if(wl===null)throw Error(t(308));$s=i,wl.dependencies={lanes:0,firstContext:i}}else $s=$s.next=i;return s}var ls=null;function $c(i){ls===null?ls=[i]:ls.push(i)}function Gm(i,s,a,c){var p=s.interleaved;return p===null?(a.next=a,$c(s)):(a.next=p.next,p.next=a),s.interleaved=a,nr(i,c)}function nr(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Lr=!1;function Zc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ir(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ir(i,s,a){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,nr(i,a)}return p=c.interleaved,p===null?(s.next=s,$c(c)):(s.next=p.next,p.next=s),c.interleaved=s,nr(i,a)}function Al(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Rt(i,a)}}function Xm(i,s){var a=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=w:_=_.next=w,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Cl(i,s,a,c){var p=i.updateQueue;Lr=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var k=I,se=k.next;k.next=null,w===null?_=se:w.next=se,w=k;var ve=i.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==w&&(I===null?ve.firstBaseUpdate=se:I.next=se,ve.lastBaseUpdate=k))}if(_!==null){var _e=p.baseState;w=0,ve=se=k=null,I=_;do{var ge=I.lane,Ie=I.eventTime;if((c&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ve=i,je=I;switch(ge=s,Ie=a,je.tag){case 1:if(Ve=je.payload,typeof Ve=="function"){_e=Ve.call(Ie,_e,ge);break e}_e=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=je.payload,ge=typeof Ve=="function"?Ve.call(Ie,_e,ge):Ve,ge==null)break e;_e=ue({},_e,ge);break e;case 2:Lr=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,ge=p.effects,ge===null?p.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(se=ve=Ie,k=_e):ve=ve.next=Ie,w|=ge;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);if(ve===null&&(k=_e),p.baseState=k,p.firstBaseUpdate=se,p.lastBaseUpdate=ve,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);fs|=w,i.lanes=w,i.memoizedState=_e}}function jm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var c=i[s],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var ra={},Ii=Pr(ra),sa=Pr(ra),oa=Pr(ra);function us(i){if(i===ra)throw Error(t(174));return i}function Qc(i,s){switch(Bt(oa,s),Bt(sa,i),Bt(Ii,ra),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:me(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=me(s,i)}zt(Ii),Bt(Ii,s)}function Qs(){zt(Ii),zt(sa),zt(oa)}function Ym(i){us(oa.current);var s=us(Ii.current),a=me(s,i.type);s!==a&&(Bt(sa,i),Bt(Ii,a))}function Jc(i){sa.current===i&&(zt(Ii),zt(sa))}var Xt=Pr(0);function Rl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ef=[];function tf(){for(var i=0;i<ef.length;i++)ef[i]._workInProgressVersionPrimary=null;ef.length=0}var Pl=P.ReactCurrentDispatcher,nf=P.ReactCurrentBatchConfig,cs=0,jt=null,sn=null,cn=null,bl=!1,aa=!1,la=0,jS=0;function yn(){throw Error(t(321))}function rf(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!pi(i[a],s[a]))return!1;return!0}function sf(i,s,a,c,p,_){if(cs=_,jt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Pl.current=i===null||i.memoizedState===null?$S:ZS,i=a(c,p),aa){_=0;do{if(aa=!1,la=0,25<=_)throw Error(t(301));_+=1,cn=sn=null,s.updateQueue=null,Pl.current=QS,i=a(c,p)}while(aa)}if(Pl.current=Il,s=sn!==null&&sn.next!==null,cs=0,cn=sn=jt=null,bl=!1,s)throw Error(t(300));return i}function of(){var i=la!==0;return la=0,i}function Ni(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?jt.memoizedState=cn=i:cn=cn.next=i,cn}function si(){if(sn===null){var i=jt.alternate;i=i!==null?i.memoizedState:null}else i=sn.next;var s=cn===null?jt.memoizedState:cn.next;if(s!==null)cn=s,sn=i;else{if(i===null)throw Error(t(310));sn=i,i={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},cn===null?jt.memoizedState=cn=i:cn=cn.next=i}return cn}function ua(i,s){return typeof s=="function"?s(i):s}function af(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=sn,p=c.baseQueue,_=a.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}c.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,c=c.baseState;var I=w=null,k=null,se=_;do{var ve=se.lane;if((cs&ve)===ve)k!==null&&(k=k.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),c=se.hasEagerState?se.eagerState:i(c,se.action);else{var _e={lane:ve,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};k===null?(I=k=_e,w=c):k=k.next=_e,jt.lanes|=ve,fs|=ve}se=se.next}while(se!==null&&se!==_);k===null?w=c:k.next=I,pi(c,s.memoizedState)||(Bn=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=k,a.lastRenderedState=c}if(i=a.interleaved,i!==null){p=i;do _=p.lane,jt.lanes|=_,fs|=_,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function lf(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);pi(_,s.memoizedState)||(Bn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,c]}function qm(){}function Km(i,s){var a=jt,c=si(),p=s(),_=!pi(c.memoizedState,p);if(_&&(c.memoizedState=p,Bn=!0),c=c.queue,uf(Qm.bind(null,a,c,i),[i]),c.getSnapshot!==s||_||cn!==null&&cn.memoizedState.tag&1){if(a.flags|=2048,ca(9,Zm.bind(null,a,c,p,s),void 0,null),fn===null)throw Error(t(349));(cs&30)!==0||$m(a,s,p)}return p}function $m(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=jt.updateQueue,s===null?(s={lastEffect:null,stores:null},jt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Zm(i,s,a,c){s.value=a,s.getSnapshot=c,Jm(s)&&eg(i)}function Qm(i,s,a){return a(function(){Jm(s)&&eg(i)})}function Jm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!pi(i,a)}catch{return!0}}function eg(i){var s=nr(i,1);s!==null&&xi(s,i,1,-1)}function tg(i){var s=Ni();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:i},s.queue=i,i=i.dispatch=KS.bind(null,jt,i),[s.memoizedState,i]}function ca(i,s,a,c){return i={tag:i,create:s,destroy:a,deps:c,next:null},s=jt.updateQueue,s===null?(s={lastEffect:null,stores:null},jt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(c=a.next,a.next=i,i.next=c,s.lastEffect=i)),i}function ng(){return si().memoizedState}function Dl(i,s,a,c){var p=Ni();jt.flags|=i,p.memoizedState=ca(1|s,a,void 0,c===void 0?null:c)}function Ll(i,s,a,c){var p=si();c=c===void 0?null:c;var _=void 0;if(sn!==null){var w=sn.memoizedState;if(_=w.destroy,c!==null&&rf(c,w.deps)){p.memoizedState=ca(s,a,_,c);return}}jt.flags|=i,p.memoizedState=ca(1|s,a,_,c)}function ig(i,s){return Dl(8390656,8,i,s)}function uf(i,s){return Ll(2048,8,i,s)}function rg(i,s){return Ll(4,2,i,s)}function sg(i,s){return Ll(4,4,i,s)}function og(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function ag(i,s,a){return a=a!=null?a.concat([i]):null,Ll(4,4,og.bind(null,s,i),a)}function cf(){}function lg(i,s){var a=si();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&rf(s,c[1])?c[0]:(a.memoizedState=[i,s],i)}function ug(i,s){var a=si();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&rf(s,c[1])?c[0]:(i=i(),a.memoizedState=[i,s],i)}function cg(i,s,a){return(cs&21)===0?(i.baseState&&(i.baseState=!1,Bn=!0),i.memoizedState=a):(pi(a,s)||(a=Nn(),jt.lanes|=a,fs|=a,i.baseState=!0),s)}function YS(i,s){var a=at;at=a!==0&&4>a?a:4,i(!0);var c=nf.transition;nf.transition={};try{i(!1),s()}finally{at=a,nf.transition=c}}function fg(){return si().memoizedState}function qS(i,s,a){var c=Or(i);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},dg(i))hg(s,a);else if(a=Gm(i,s,a,c),a!==null){var p=Pn();xi(a,i,c,p),pg(a,s,c)}}function KS(i,s,a){var c=Or(i),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(dg(i))hg(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var w=s.lastRenderedState,I=_(w,a);if(p.hasEagerState=!0,p.eagerState=I,pi(I,w)){var k=s.interleaved;k===null?(p.next=p,$c(s)):(p.next=k.next,k.next=p),s.interleaved=p;return}}catch{}finally{}a=Gm(i,s,p,c),a!==null&&(p=Pn(),xi(a,i,c,p),pg(a,s,c))}}function dg(i){var s=i.alternate;return i===jt||s!==null&&s===jt}function hg(i,s){aa=bl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function pg(i,s,a){if((a&4194240)!==0){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Rt(i,a)}}var Il={readContext:ri,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},$S={readContext:ri,useCallback:function(i,s){return Ni().memoizedState=[i,s===void 0?null:s],i},useContext:ri,useEffect:ig,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Dl(4194308,4,og.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Dl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Dl(4,2,i,s)},useMemo:function(i,s){var a=Ni();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var c=Ni();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},c.queue=i,i=i.dispatch=qS.bind(null,jt,i),[c.memoizedState,i]},useRef:function(i){var s=Ni();return i={current:i},s.memoizedState=i},useState:tg,useDebugValue:cf,useDeferredValue:function(i){return Ni().memoizedState=i},useTransition:function(){var i=tg(!1),s=i[0];return i=YS.bind(null,i[1]),Ni().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var c=jt,p=Ni();if(Wt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),fn===null)throw Error(t(349));(cs&30)!==0||$m(c,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,ig(Qm.bind(null,c,_,i),[i]),c.flags|=2048,ca(9,Zm.bind(null,c,_,a,s),void 0,null),a},useId:function(){var i=Ni(),s=fn.identifierPrefix;if(Wt){var a=tr,c=er;a=(c&~(1<<32-et(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=la++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=jS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},ZS={readContext:ri,useCallback:lg,useContext:ri,useEffect:uf,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:af,useRef:ng,useState:function(){return af(ua)},useDebugValue:cf,useDeferredValue:function(i){var s=si();return cg(s,sn.memoizedState,i)},useTransition:function(){var i=af(ua)[0],s=si().memoizedState;return[i,s]},useMutableSource:qm,useSyncExternalStore:Km,useId:fg,unstable_isNewReconciler:!1},QS={readContext:ri,useCallback:lg,useContext:ri,useEffect:uf,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:lf,useRef:ng,useState:function(){return lf(ua)},useDebugValue:cf,useDeferredValue:function(i){var s=si();return sn===null?s.memoizedState=i:cg(s,sn.memoizedState,i)},useTransition:function(){var i=lf(ua)[0],s=si().memoizedState;return[i,s]},useMutableSource:qm,useSyncExternalStore:Km,useId:fg,unstable_isNewReconciler:!1};function gi(i,s){if(i&&i.defaultProps){s=ue({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function ff(i,s,a,c){s=i.memoizedState,a=a(c,s),a=a==null?s:ue({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Nl={isMounted:function(i){return(i=i._reactInternals)?Di(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var c=Pn(),p=Or(i),_=ir(c,p);_.payload=s,a!=null&&(_.callback=a),s=Ir(i,_,p),s!==null&&(xi(s,i,p,c),Al(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var c=Pn(),p=Or(i),_=ir(c,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=Ir(i,_,p),s!==null&&(xi(s,i,p,c),Al(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Pn(),c=Or(i),p=ir(a,c);p.tag=2,s!=null&&(p.callback=s),s=Ir(i,p,c),s!==null&&(xi(s,i,c,a),Al(s,i,c))}};function mg(i,s,a,c,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,w):s.prototype&&s.prototype.isPureReactComponent?!$o(a,c)||!$o(p,_):!0}function gg(i,s,a){var c=!1,p=br,_=s.contextType;return typeof _=="object"&&_!==null?_=ri(_):(p=On(s)?ss:xn.current,c=s.contextTypes,_=(c=c!=null)?Xs(i,p):br),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Nl,i.stateNode=s,s._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function vg(i,s,a,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==i&&Nl.enqueueReplaceState(s,s.state,null)}function df(i,s,a,c){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},Zc(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=ri(_):(_=On(s)?ss:xn.current,p.context=Xs(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(ff(i,s,_,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Nl.enqueueReplaceState(p,p.state,null),Cl(i,a,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Js(i,s){try{var a="",c=s;do a+=Ze(c),c=c.return;while(c);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function hf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function pf(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var JS=typeof WeakMap=="function"?WeakMap:Map;function _g(i,s,a){a=ir(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){zl||(zl=!0,Pf=c),pf(i,s)},a}function xg(i,s,a){a=ir(-1,a),a.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;a.payload=function(){return c(p)},a.callback=function(){pf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){pf(i,s),typeof c!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function yg(i,s,a){var c=i.pingCache;if(c===null){c=i.pingCache=new JS;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(a)||(p.add(a),i=hM.bind(null,i,s,a),s.then(i,i))}function Sg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Mg(i,s,a,c,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=ir(-1,1),s.tag=2,Ir(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var eM=P.ReactCurrentOwner,Bn=!1;function Rn(i,s,a,c){s.child=i===null?Hm(s,null,a,c):Ks(s,i.child,a,c)}function Eg(i,s,a,c,p){a=a.render;var _=s.ref;return Zs(s,p),c=sf(i,s,a,c,_,p),a=of(),i!==null&&!Bn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,rr(i,s,p)):(Wt&&a&&zc(s),s.flags|=1,Rn(i,s,c,p),s.child)}function Tg(i,s,a,c,p){if(i===null){var _=a.type;return typeof _=="function"&&!Ff(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,wg(i,s,_,c,p)):(i=Yl(a.type,null,c,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(w,c)&&i.ref===s.ref)return rr(i,s,p)}return s.flags|=1,i=kr(_,c),i.ref=s.ref,i.return=s,s.child=i}function wg(i,s,a,c,p){if(i!==null){var _=i.memoizedProps;if($o(_,c)&&i.ref===s.ref)if(Bn=!1,s.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Bn=!0);else return s.lanes=i.lanes,rr(i,s,p)}return mf(i,s,a,c,p)}function Ag(i,s,a){var c=s.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(to,qn),qn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Bt(to,qn),qn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:a,Bt(to,qn),qn|=c}else _!==null?(c=_.baseLanes|a,s.memoizedState=null):c=a,Bt(to,qn),qn|=c;return Rn(i,s,p,a),s.child}function Cg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function mf(i,s,a,c,p){var _=On(a)?ss:xn.current;return _=Xs(s,_),Zs(s,p),a=sf(i,s,a,c,_,p),c=of(),i!==null&&!Bn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,rr(i,s,p)):(Wt&&c&&zc(s),s.flags|=1,Rn(i,s,a,p),s.child)}function Rg(i,s,a,c,p){if(On(a)){var _=!0;_l(s)}else _=!1;if(Zs(s,p),s.stateNode===null)Fl(i,s),gg(s,a,c),df(s,a,c,p),c=!0;else if(i===null){var w=s.stateNode,I=s.memoizedProps;w.props=I;var k=w.context,se=a.contextType;typeof se=="object"&&se!==null?se=ri(se):(se=On(a)?ss:xn.current,se=Xs(s,se));var ve=a.getDerivedStateFromProps,_e=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function";_e||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==c||k!==se)&&vg(s,w,c,se),Lr=!1;var ge=s.memoizedState;w.state=ge,Cl(s,c,w,p),k=s.memoizedState,I!==c||ge!==k||Fn.current||Lr?(typeof ve=="function"&&(ff(s,a,ve,c),k=s.memoizedState),(I=Lr||mg(s,a,I,c,ge,k,se))?(_e||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=k),w.props=c,w.state=k,w.context=se,c=I):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,Wm(i,s),I=s.memoizedProps,se=s.type===s.elementType?I:gi(s.type,I),w.props=se,_e=s.pendingProps,ge=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=ri(k):(k=On(a)?ss:xn.current,k=Xs(s,k));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==_e||ge!==k)&&vg(s,w,c,k),Lr=!1,ge=s.memoizedState,w.state=ge,Cl(s,c,w,p);var Ve=s.memoizedState;I!==_e||ge!==Ve||Fn.current||Lr?(typeof Ie=="function"&&(ff(s,a,Ie,c),Ve=s.memoizedState),(se=Lr||mg(s,a,se,c,ge,Ve,k)||!1)?(ve||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Ve,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Ve,k)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Ve),w.props=c,w.state=Ve,w.context=k,c=se):(typeof w.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),c=!1)}return gf(i,s,a,c,_,p)}function gf(i,s,a,c,p,_){Cg(i,s);var w=(s.flags&128)!==0;if(!c&&!w)return p&&Im(s,a,!1),rr(i,s,_);c=s.stateNode,eM.current=s;var I=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,i!==null&&w?(s.child=Ks(s,i.child,null,_),s.child=Ks(s,null,I,_)):Rn(i,s,I,_),s.memoizedState=c.state,p&&Im(s,a,!0),s.child}function Pg(i){var s=i.stateNode;s.pendingContext?Dm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Dm(i,s.context,!1),Qc(i,s.containerInfo)}function bg(i,s,a,c,p){return qs(),Xc(p),s.flags|=256,Rn(i,s,a,c),s.child}var vf={dehydrated:null,treeContext:null,retryLane:0};function _f(i){return{baseLanes:i,cachePool:null,transitions:null}}function Dg(i,s,a){var c=s.pendingProps,p=Xt.current,_=!1,w=(s.flags&128)!==0,I;if((I=w)||(I=i!==null&&i.memoizedState===null?!1:(p&2)!==0),I?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Bt(Xt,p&1),i===null)return Wc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,i=c.fallback,_?(c=s.mode,_=s.child,w={mode:"hidden",children:w},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=ql(w,c,0,null),i=ms(i,c,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=_f(a),s.memoizedState=vf,i):xf(s,w));if(p=i.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return tM(i,s,w,c,I,p,a);if(_){_=c.fallback,w=s.mode,p=i.child,I=p.sibling;var k={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=kr(p,k),c.subtreeFlags=p.subtreeFlags&14680064),I!==null?_=kr(I,_):(_=ms(_,w,a,null),_.flags|=2),_.return=s,c.return=s,c.sibling=_,s.child=c,c=_,_=s.child,w=i.child.memoizedState,w=w===null?_f(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~a,s.memoizedState=vf,c}return _=i.child,i=_.sibling,c=kr(_,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=c,s.memoizedState=null,c}function xf(i,s){return s=ql({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Ul(i,s,a,c){return c!==null&&Xc(c),Ks(s,i.child,null,a),i=xf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function tM(i,s,a,c,p,_,w){if(a)return s.flags&256?(s.flags&=-257,c=hf(Error(t(422))),Ul(i,s,w,c)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=c.fallback,p=s.mode,c=ql({mode:"visible",children:c.children},p,0,null),_=ms(_,p,w,null),_.flags|=2,c.return=s,_.return=s,c.sibling=_,s.child=c,(s.mode&1)!==0&&Ks(s,i.child,null,w),s.child.memoizedState=_f(w),s.memoizedState=vf,_);if((s.mode&1)===0)return Ul(i,s,w,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var I=c.dgst;return c=I,_=Error(t(419)),c=hf(_,c,void 0),Ul(i,s,w,c)}if(I=(w&i.childLanes)!==0,Bn||I){if(c=fn,c!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,nr(i,p),xi(c,i,p,-1))}return Uf(),c=hf(Error(t(421))),Ul(i,s,w,c)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=pM.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,Yn=Rr(p.nextSibling),jn=s,Wt=!0,mi=null,i!==null&&(ni[ii++]=er,ni[ii++]=tr,ni[ii++]=os,er=i.id,tr=i.overflow,os=s),s=xf(s,c.children),s.flags|=4096,s)}function Lg(i,s,a){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),Kc(i.return,s,a)}function yf(i,s,a,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=a,_.tailMode=p)}function Ig(i,s,a){var c=s.pendingProps,p=c.revealOrder,_=c.tail;if(Rn(i,s,c.children,a),c=Xt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Lg(i,a,s);else if(i.tag===19)Lg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Bt(Xt,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Rl(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),yf(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Rl(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}yf(s,!0,a,null,_);break;case"together":yf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Fl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function rr(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),fs|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=kr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=kr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function nM(i,s,a){switch(s.tag){case 3:Pg(s),qs();break;case 5:Ym(s);break;case 1:On(s.type)&&_l(s);break;case 4:Qc(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;Bt(Tl,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Bt(Xt,Xt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Dg(i,s,a):(Bt(Xt,Xt.current&1),i=rr(i,s,a),i!==null?i.sibling:null);Bt(Xt,Xt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(i.flags&128)!==0){if(c)return Ig(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Bt(Xt,Xt.current),c)break;return null;case 22:case 23:return s.lanes=0,Ag(i,s,a)}return rr(i,s,a)}var Ng,Sf,Ug,Fg;Ng=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Sf=function(){},Ug=function(i,s,a,c){var p=i.memoizedProps;if(p!==c){i=s.stateNode,us(Ii.current);var _=null;switch(a){case"input":p=St(i,p),c=St(i,c),_=[];break;case"select":p=ue({},p,{value:void 0}),c=ue({},c,{value:void 0}),_=[];break;case"textarea":p=Ge(i,p),c=Ge(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=ml)}Be(a,c);var w;a=null;for(se in p)if(!c.hasOwnProperty(se)&&p.hasOwnProperty(se)&&p[se]!=null)if(se==="style"){var I=p[se];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?_||(_=[]):(_=_||[]).push(se,null));for(se in c){var k=c[se];if(I=p?.[se],c.hasOwnProperty(se)&&k!==I&&(k!=null||I!=null))if(se==="style")if(I){for(w in I)!I.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&I[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(_||(_=[]),_.push(se,a)),a=k;else se==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(_=_||[]).push(se,k)):se==="children"?typeof k!="string"&&typeof k!="number"||(_=_||[]).push(se,""+k):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(k!=null&&se==="onScroll"&&Vt("scroll",i),_||I===k||(_=[])):(_=_||[]).push(se,k))}a&&(_=_||[]).push("style",a);var se=_;(s.updateQueue=se)&&(s.flags|=4)}},Fg=function(i,s,a,c){a!==c&&(s.flags|=4)};function fa(i,s){if(!Wt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Sn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,c=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=a,s}function iM(i,s,a){var c=s.pendingProps;switch(Hc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(s),null;case 1:return On(s.type)&&vl(),Sn(s),null;case 3:return c=s.stateNode,Qs(),zt(Fn),zt(xn),tf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(Ml(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,mi!==null&&(Lf(mi),mi=null))),Sf(i,s),Sn(s),null;case 5:Jc(s);var p=us(oa.current);if(a=s.type,i!==null&&s.stateNode!=null)Ug(i,s,a,c,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Sn(s),null}if(i=us(Ii.current),Ml(s)){c=s.stateNode,a=s.type;var _=s.memoizedProps;switch(c[Li]=s,c[ta]=_,i=(s.mode&1)!==0,a){case"dialog":Vt("cancel",c),Vt("close",c);break;case"iframe":case"object":case"embed":Vt("load",c);break;case"video":case"audio":for(p=0;p<Qo.length;p++)Vt(Qo[p],c);break;case"source":Vt("error",c);break;case"img":case"image":case"link":Vt("error",c),Vt("load",c);break;case"details":Vt("toggle",c);break;case"input":bt(c,_),Vt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Vt("invalid",c);break;case"textarea":L(c,_),Vt("invalid",c)}Be(a,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var I=_[w];w==="children"?typeof I=="string"?c.textContent!==I&&(_.suppressHydrationWarning!==!0&&pl(c.textContent,I,i),p=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&pl(c.textContent,I,i),p=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Vt("scroll",c)}switch(a){case"input":it(c),V(c,_,!0);break;case"textarea":it(c),G(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=ml)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=de(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=w.createElement(a,{is:c.is}):(i=w.createElement(a),a==="select"&&(w=i,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):i=w.createElementNS(i,a),i[Li]=s,i[ta]=c,Ng(i,s,!1,!1),s.stateNode=i;e:{switch(w=be(a,c),a){case"dialog":Vt("cancel",i),Vt("close",i),p=c;break;case"iframe":case"object":case"embed":Vt("load",i),p=c;break;case"video":case"audio":for(p=0;p<Qo.length;p++)Vt(Qo[p],i);p=c;break;case"source":Vt("error",i),p=c;break;case"img":case"image":case"link":Vt("error",i),Vt("load",i),p=c;break;case"details":Vt("toggle",i),p=c;break;case"input":bt(i,c),p=St(i,c),Vt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=ue({},c,{value:void 0}),Vt("invalid",i);break;case"textarea":L(i,c),p=Ge(i,c),Vt("invalid",i);break;default:p=c}Be(a,p),I=p;for(_ in I)if(I.hasOwnProperty(_)){var k=I[_];_==="style"?Ee(i,k):_==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Oe(i,k)):_==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Te(i,k):typeof k=="number"&&Te(i,""+k):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?k!=null&&_==="onScroll"&&Vt("scroll",i):k!=null&&b(i,_,k,w))}switch(a){case"input":it(i),V(i,c,!1);break;case"textarea":it(i),G(i);break;case"option":c.value!=null&&i.setAttribute("value",""+he(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?Mt(i,!!c.multiple,_,!1):c.defaultValue!=null&&Mt(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=ml)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Sn(s),null;case 6:if(i&&s.stateNode!=null)Fg(i,s,i.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=us(oa.current),us(Ii.current),Ml(s)){if(c=s.stateNode,a=s.memoizedProps,c[Li]=s,(_=c.nodeValue!==a)&&(i=jn,i!==null))switch(i.tag){case 3:pl(c.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&pl(c.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Li]=s,s.stateNode=c}return Sn(s),null;case 13:if(zt(Xt),c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Wt&&Yn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)km(),qs(),s.flags|=98560,_=!1;else if(_=Ml(s),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Li]=s}else qs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Sn(s),_=!1}else mi!==null&&(Lf(mi),mi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Xt.current&1)!==0?on===0&&(on=3):Uf())),s.updateQueue!==null&&(s.flags|=4),Sn(s),null);case 4:return Qs(),Sf(i,s),i===null&&Jo(s.stateNode.containerInfo),Sn(s),null;case 10:return qc(s.type._context),Sn(s),null;case 17:return On(s.type)&&vl(),Sn(s),null;case 19:if(zt(Xt),_=s.memoizedState,_===null)return Sn(s),null;if(c=(s.flags&128)!==0,w=_.rendering,w===null)if(c)fa(_,!1);else{if(on!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Rl(i),w!==null){for(s.flags|=128,fa(_,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)_=a,i=c,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Bt(Xt,Xt.current&1|2),s.child}i=i.sibling}_.tail!==null&&C()>no&&(s.flags|=128,c=!0,fa(_,!1),s.lanes=4194304)}else{if(!c)if(i=Rl(w),i!==null){if(s.flags|=128,c=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),fa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!Wt)return Sn(s),null}else 2*C()-_.renderingStartTime>no&&a!==1073741824&&(s.flags|=128,c=!0,fa(_,!1),s.lanes=4194304);_.isBackwards?(w.sibling=s.child,s.child=w):(a=_.last,a!==null?a.sibling=w:s.child=w,_.last=w)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=C(),s.sibling=null,a=Xt.current,Bt(Xt,c?a&1|2:a&1),s):(Sn(s),null);case 22:case 23:return Nf(),c=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(qn&1073741824)!==0&&(Sn(s),s.subtreeFlags&6&&(s.flags|=8192)):Sn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function rM(i,s){switch(Hc(s),s.tag){case 1:return On(s.type)&&vl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Qs(),zt(Fn),zt(xn),tf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Jc(s),null;case 13:if(zt(Xt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));qs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return zt(Xt),null;case 4:return Qs(),null;case 10:return qc(s.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var Ol=!1,Mn=!1,sM=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function eo(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Yt(i,s,c)}else a.current=null}function Mf(i,s,a){try{a()}catch(c){Yt(i,s,c)}}var Og=!1;function oM(i,s){if(Ic=il,i=mm(),wc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var w=0,I=-1,k=-1,se=0,ve=0,_e=i,ge=null;t:for(;;){for(var Ie;_e!==a||p!==0&&_e.nodeType!==3||(I=w+p),_e!==_||c!==0&&_e.nodeType!==3||(k=w+c),_e.nodeType===3&&(w+=_e.nodeValue.length),(Ie=_e.firstChild)!==null;)ge=_e,_e=Ie;for(;;){if(_e===i)break t;if(ge===a&&++se===p&&(I=w),ge===_&&++ve===c&&(k=w),(Ie=_e.nextSibling)!==null)break;_e=ge,ge=_e.parentNode}_e=Ie}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nc={focusedElem:i,selectionRange:a},il=!1,Fe=s;Fe!==null;)if(s=Fe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Fe=i;else for(;Fe!==null;){s=Fe;try{var Ve=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var je=Ve.memoizedProps,Qt=Ve.memoizedState,Z=s.stateNode,H=Z.getSnapshotBeforeUpdate(s.elementType===s.type?je:gi(s.type,je),Qt);Z.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ne=s.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){Yt(s,s.return,Me)}if(i=s.sibling,i!==null){i.return=s.return,Fe=i;break}Fe=s.return}return Ve=Og,Og=!1,Ve}function da(i,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Mf(s,a,_)}p=p.next}while(p!==c)}}function Bl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Ef(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Bg(i){var s=i.alternate;s!==null&&(i.alternate=null,Bg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Li],delete s[ta],delete s[Bc],delete s[HS],delete s[GS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function kg(i){return i.tag===5||i.tag===3||i.tag===4}function Vg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||kg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Tf(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ml));else if(c!==4&&(i=i.child,i!==null))for(Tf(i,s,a),i=i.sibling;i!==null;)Tf(i,s,a),i=i.sibling}function wf(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(wf(i,s,a),i=i.sibling;i!==null;)wf(i,s,a),i=i.sibling}var pn=null,vi=!1;function Nr(i,s,a){for(a=a.child;a!==null;)zg(i,s,a),a=a.sibling}function zg(i,s,a){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(Ce,a)}catch{}switch(a.tag){case 5:Mn||eo(a,s);case 6:var c=pn,p=vi;pn=null,Nr(i,s,a),pn=c,vi=p,pn!==null&&(vi?(i=pn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):pn.removeChild(a.stateNode));break;case 18:pn!==null&&(vi?(i=pn,a=a.stateNode,i.nodeType===8?Oc(i.parentNode,a):i.nodeType===1&&Oc(i,a),Wo(i)):Oc(pn,a.stateNode));break;case 4:c=pn,p=vi,pn=a.stateNode.containerInfo,vi=!0,Nr(i,s,a),pn=c,vi=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&Mf(a,s,w),p=p.next}while(p!==c)}Nr(i,s,a);break;case 1:if(!Mn&&(eo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Yt(a,s,I)}Nr(i,s,a);break;case 21:Nr(i,s,a);break;case 22:a.mode&1?(Mn=(c=Mn)||a.memoizedState!==null,Nr(i,s,a),Mn=c):Nr(i,s,a);break;default:Nr(i,s,a)}}function Hg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new sM),s.forEach(function(c){var p=mM.bind(null,i,c);a.has(c)||(a.add(c),c.then(p,p))})}}function _i(i,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var _=i,w=s,I=w;e:for(;I!==null;){switch(I.tag){case 5:pn=I.stateNode,vi=!1;break e;case 3:pn=I.stateNode.containerInfo,vi=!0;break e;case 4:pn=I.stateNode.containerInfo,vi=!0;break e}I=I.return}if(pn===null)throw Error(t(160));zg(_,w,p),pn=null,vi=!1;var k=p.alternate;k!==null&&(k.return=null),p.return=null}catch(se){Yt(p,s,se)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Gg(s,i),s=s.sibling}function Gg(i,s){var a=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(_i(s,i),Ui(i),c&4){try{da(3,i,i.return),Bl(3,i)}catch(je){Yt(i,i.return,je)}try{da(5,i,i.return)}catch(je){Yt(i,i.return,je)}}break;case 1:_i(s,i),Ui(i),c&512&&a!==null&&eo(a,a.return);break;case 5:if(_i(s,i),Ui(i),c&512&&a!==null&&eo(a,a.return),i.flags&32){var p=i.stateNode;try{Te(p,"")}catch(je){Yt(i,i.return,je)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=a!==null?a.memoizedProps:_,I=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&ft(p,_),be(I,w);var se=be(I,_);for(w=0;w<k.length;w+=2){var ve=k[w],_e=k[w+1];ve==="style"?Ee(p,_e):ve==="dangerouslySetInnerHTML"?Oe(p,_e):ve==="children"?Te(p,_e):b(p,ve,_e,se)}switch(I){case"input":kt(p,_);break;case"textarea":E(p,_);break;case"select":var ge=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ie=_.value;Ie!=null?Mt(p,!!_.multiple,Ie,!1):ge!==!!_.multiple&&(_.defaultValue!=null?Mt(p,!!_.multiple,_.defaultValue,!0):Mt(p,!!_.multiple,_.multiple?[]:"",!1))}p[ta]=_}catch(je){Yt(i,i.return,je)}}break;case 6:if(_i(s,i),Ui(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(je){Yt(i,i.return,je)}}break;case 3:if(_i(s,i),Ui(i),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Wo(s.containerInfo)}catch(je){Yt(i,i.return,je)}break;case 4:_i(s,i),Ui(i);break;case 13:_i(s,i),Ui(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Rf=C())),c&4&&Hg(i);break;case 22:if(ve=a!==null&&a.memoizedState!==null,i.mode&1?(Mn=(se=Mn)||ve,_i(s,i),Mn=se):_i(s,i),Ui(i),c&8192){if(se=i.memoizedState!==null,(i.stateNode.isHidden=se)&&!ve&&(i.mode&1)!==0)for(Fe=i,ve=i.child;ve!==null;){for(_e=Fe=ve;Fe!==null;){switch(ge=Fe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:da(4,ge,ge.return);break;case 1:eo(ge,ge.return);var Ve=ge.stateNode;if(typeof Ve.componentWillUnmount=="function"){c=ge,a=ge.return;try{s=c,Ve.props=s.memoizedProps,Ve.state=s.memoizedState,Ve.componentWillUnmount()}catch(je){Yt(c,a,je)}}break;case 5:eo(ge,ge.return);break;case 22:if(ge.memoizedState!==null){jg(_e);continue}}Ie!==null?(Ie.return=ge,Fe=Ie):jg(_e)}ve=ve.sibling}e:for(ve=null,_e=i;;){if(_e.tag===5){if(ve===null){ve=_e;try{p=_e.stateNode,se?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=_e.stateNode,k=_e.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=xe("display",w))}catch(je){Yt(i,i.return,je)}}}else if(_e.tag===6){if(ve===null)try{_e.stateNode.nodeValue=se?"":_e.memoizedProps}catch(je){Yt(i,i.return,je)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===i)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===i)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===i)break e;ve===_e&&(ve=null),_e=_e.return}ve===_e&&(ve=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:_i(s,i),Ui(i),c&4&&Hg(i);break;case 21:break;default:_i(s,i),Ui(i)}}function Ui(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(kg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(Te(p,""),c.flags&=-33);var _=Vg(i);wf(i,_,p);break;case 3:case 4:var w=c.stateNode.containerInfo,I=Vg(i);Tf(i,I,w);break;default:throw Error(t(161))}}catch(k){Yt(i,i.return,k)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function aM(i,s,a){Fe=i,Wg(i)}function Wg(i,s,a){for(var c=(i.mode&1)!==0;Fe!==null;){var p=Fe,_=p.child;if(p.tag===22&&c){var w=p.memoizedState!==null||Ol;if(!w){var I=p.alternate,k=I!==null&&I.memoizedState!==null||Mn;I=Ol;var se=Mn;if(Ol=w,(Mn=k)&&!se)for(Fe=p;Fe!==null;)w=Fe,k=w.child,w.tag===22&&w.memoizedState!==null?Yg(p):k!==null?(k.return=w,Fe=k):Yg(p);for(;_!==null;)Fe=_,Wg(_),_=_.sibling;Fe=p,Ol=I,Mn=se}Xg(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Fe=_):Xg(i)}}function Xg(i){for(;Fe!==null;){var s=Fe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Mn||Bl(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mn)if(a===null)c.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:gi(s.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&jm(s,_,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}jm(s,w,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var se=s.alternate;if(se!==null){var ve=se.memoizedState;if(ve!==null){var _e=ve.dehydrated;_e!==null&&Wo(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||s.flags&512&&Ef(s)}catch(ge){Yt(s,s.return,ge)}}if(s===i){Fe=null;break}if(a=s.sibling,a!==null){a.return=s.return,Fe=a;break}Fe=s.return}}function jg(i){for(;Fe!==null;){var s=Fe;if(s===i){Fe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Fe=a;break}Fe=s.return}}function Yg(i){for(;Fe!==null;){var s=Fe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Bl(4,s)}catch(k){Yt(s,a,k)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(k){Yt(s,p,k)}}var _=s.return;try{Ef(s)}catch(k){Yt(s,_,k)}break;case 5:var w=s.return;try{Ef(s)}catch(k){Yt(s,w,k)}}}catch(k){Yt(s,s.return,k)}if(s===i){Fe=null;break}var I=s.sibling;if(I!==null){I.return=s.return,Fe=I;break}Fe=s.return}}var lM=Math.ceil,kl=P.ReactCurrentDispatcher,Af=P.ReactCurrentOwner,oi=P.ReactCurrentBatchConfig,Tt=0,fn=null,en=null,mn=0,qn=0,to=Pr(0),on=0,ha=null,fs=0,Vl=0,Cf=0,pa=null,kn=null,Rf=0,no=1/0,sr=null,zl=!1,Pf=null,Ur=null,Hl=!1,Fr=null,Gl=0,ma=0,bf=null,Wl=-1,Xl=0;function Pn(){return(Tt&6)!==0?C():Wl!==-1?Wl:Wl=C()}function Or(i){return(i.mode&1)===0?1:(Tt&2)!==0&&mn!==0?mn&-mn:XS.transition!==null?(Xl===0&&(Xl=Nn()),Xl):(i=at,i!==0||(i=window.event,i=i===void 0?16:Kp(i.type)),i)}function xi(i,s,a,c){if(50<ma)throw ma=0,bf=null,Error(t(185));Wn(i,a,c),((Tt&2)===0||i!==fn)&&(i===fn&&((Tt&2)===0&&(Vl|=a),on===4&&Br(i,mn)),Vn(i,c),a===1&&Tt===0&&(s.mode&1)===0&&(no=C()+500,xl&&Dr()))}function Vn(i,s){var a=i.callbackNode;Cn(i,s);var c=$t(i,i===fn?mn:0);if(c===0)a!==null&&el(a),i.callbackNode=null,i.callbackPriority=0;else if(s=c&-c,i.callbackPriority!==s){if(a!=null&&el(a),s===1)i.tag===0?WS(Kg.bind(null,i)):Nm(Kg.bind(null,i)),VS(function(){(Tt&6)===0&&Dr()}),a=null;else{switch(hi(c)){case 1:a=le;break;case 4:a=ie;break;case 16:a=ee;break;case 536870912:a=Ne;break;default:a=ee}a=i0(a,qg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function qg(i,s){if(Wl=-1,Xl=0,(Tt&6)!==0)throw Error(t(327));var a=i.callbackNode;if(io()&&i.callbackNode!==a)return null;var c=$t(i,i===fn?mn:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||s)s=jl(i,c);else{s=c;var p=Tt;Tt|=2;var _=Zg();(fn!==i||mn!==s)&&(sr=null,no=C()+500,hs(i,s));do try{fM();break}catch(I){$g(i,I)}while(!0);Yc(),kl.current=_,Tt=p,en!==null?s=0:(fn=null,mn=0,s=on)}if(s!==0){if(s===2&&(p=_t(i),p!==0&&(c=p,s=Df(i,p))),s===1)throw a=ha,hs(i,0),Br(i,c),Vn(i,C()),a;if(s===6)Br(i,c);else{if(p=i.current.alternate,(c&30)===0&&!uM(p)&&(s=jl(i,c),s===2&&(_=_t(i),_!==0&&(c=_,s=Df(i,_))),s===1))throw a=ha,hs(i,0),Br(i,c),Vn(i,C()),a;switch(i.finishedWork=p,i.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ps(i,kn,sr);break;case 3:if(Br(i,c),(c&130023424)===c&&(s=Rf+500-C(),10<s)){if($t(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){Pn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Fc(ps.bind(null,i,kn,sr),s);break}ps(i,kn,sr);break;case 4:if(Br(i,c),(c&4194240)===c)break;for(s=i.eventTimes,p=-1;0<c;){var w=31-et(c);_=1<<w,w=s[w],w>p&&(p=w),c&=~_}if(c=p,c=C()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*lM(c/1960))-c,10<c){i.timeoutHandle=Fc(ps.bind(null,i,kn,sr),c);break}ps(i,kn,sr);break;case 5:ps(i,kn,sr);break;default:throw Error(t(329))}}}return Vn(i,C()),i.callbackNode===a?qg.bind(null,i):null}function Df(i,s){var a=pa;return i.current.memoizedState.isDehydrated&&(hs(i,s).flags|=256),i=jl(i,s),i!==2&&(s=kn,kn=a,s!==null&&Lf(s)),i}function Lf(i){kn===null?kn=i:kn.push.apply(kn,i)}function uM(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],_=p.getSnapshot;p=p.value;try{if(!pi(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Br(i,s){for(s&=~Cf,s&=~Vl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-et(s),c=1<<a;i[a]=-1,s&=~c}}function Kg(i){if((Tt&6)!==0)throw Error(t(327));io();var s=$t(i,0);if((s&1)===0)return Vn(i,C()),null;var a=jl(i,s);if(i.tag!==0&&a===2){var c=_t(i);c!==0&&(s=c,a=Df(i,c))}if(a===1)throw a=ha,hs(i,0),Br(i,s),Vn(i,C()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ps(i,kn,sr),Vn(i,C()),null}function If(i,s){var a=Tt;Tt|=1;try{return i(s)}finally{Tt=a,Tt===0&&(no=C()+500,xl&&Dr())}}function ds(i){Fr!==null&&Fr.tag===0&&(Tt&6)===0&&io();var s=Tt;Tt|=1;var a=oi.transition,c=at;try{if(oi.transition=null,at=1,i)return i()}finally{at=c,oi.transition=a,Tt=s,(Tt&6)===0&&Dr()}}function Nf(){qn=to.current,zt(to)}function hs(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,kS(a)),en!==null)for(a=en.return;a!==null;){var c=a;switch(Hc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&vl();break;case 3:Qs(),zt(Fn),zt(xn),tf();break;case 5:Jc(c);break;case 4:Qs();break;case 13:zt(Xt);break;case 19:zt(Xt);break;case 10:qc(c.type._context);break;case 22:case 23:Nf()}a=a.return}if(fn=i,en=i=kr(i.current,null),mn=qn=s,on=0,ha=null,Cf=Vl=fs=0,kn=pa=null,ls!==null){for(s=0;s<ls.length;s++)if(a=ls[s],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,_=a.pending;if(_!==null){var w=_.next;_.next=p,c.next=w}a.pending=c}ls=null}return i}function $g(i,s){do{var a=en;try{if(Yc(),Pl.current=Il,bl){for(var c=jt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}bl=!1}if(cs=0,cn=sn=jt=null,aa=!1,la=0,Af.current=null,a===null||a.return===null){on=1,ha=s,en=null;break}e:{var _=i,w=a.return,I=a,k=s;if(s=mn,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var se=k,ve=I,_e=ve.tag;if((ve.mode&1)===0&&(_e===0||_e===11||_e===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Sg(w);if(Ie!==null){Ie.flags&=-257,Mg(Ie,w,I,_,s),Ie.mode&1&&yg(_,se,s),s=Ie,k=se;var Ve=s.updateQueue;if(Ve===null){var je=new Set;je.add(k),s.updateQueue=je}else Ve.add(k);break e}else{if((s&1)===0){yg(_,se,s),Uf();break e}k=Error(t(426))}}else if(Wt&&I.mode&1){var Qt=Sg(w);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),Mg(Qt,w,I,_,s),Xc(Js(k,I));break e}}_=k=Js(k,I),on!==4&&(on=2),pa===null?pa=[_]:pa.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Z=_g(_,k,s);Xm(_,Z);break e;case 1:I=k;var H=_.type,ne=_.stateNode;if((_.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Ur===null||!Ur.has(ne)))){_.flags|=65536,s&=-s,_.lanes|=s;var Me=xg(_,I,s);Xm(_,Me);break e}}_=_.return}while(_!==null)}Jg(a)}catch(Ke){s=Ke,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function Zg(){var i=kl.current;return kl.current=Il,i===null?Il:i}function Uf(){(on===0||on===3||on===2)&&(on=4),fn===null||(fs&268435455)===0&&(Vl&268435455)===0||Br(fn,mn)}function jl(i,s){var a=Tt;Tt|=2;var c=Zg();(fn!==i||mn!==s)&&(sr=null,hs(i,s));do try{cM();break}catch(p){$g(i,p)}while(!0);if(Yc(),Tt=a,kl.current=c,en!==null)throw Error(t(261));return fn=null,mn=0,on}function cM(){for(;en!==null;)Qg(en)}function fM(){for(;en!==null&&!fc();)Qg(en)}function Qg(i){var s=n0(i.alternate,i,qn);i.memoizedProps=i.pendingProps,s===null?Jg(i):en=s,Af.current=null}function Jg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=iM(a,s,qn),a!==null){en=a;return}}else{if(a=rM(a,s),a!==null){a.flags&=32767,en=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{on=6,en=null;return}}if(s=s.sibling,s!==null){en=s;return}en=s=i}while(s!==null);on===0&&(on=5)}function ps(i,s,a){var c=at,p=oi.transition;try{oi.transition=null,at=1,dM(i,s,a,c)}finally{oi.transition=p,at=c}return null}function dM(i,s,a,c){do io();while(Fr!==null);if((Tt&6)!==0)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(Sr(i,_),i===fn&&(en=fn=null,mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Hl||(Hl=!0,i0(ee,function(){return io(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=oi.transition,oi.transition=null;var w=at;at=1;var I=Tt;Tt|=4,Af.current=null,oM(i,a),Gg(a,i),LS(Nc),il=!!Ic,Nc=Ic=null,i.current=a,aM(a),dc(),Tt=I,at=w,oi.transition=_}else i.current=a;if(Hl&&(Hl=!1,Fr=i,Gl=p),_=i.pendingLanes,_===0&&(Ur=null),$e(a.stateNode),Vn(i,C()),s!==null)for(c=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(zl)throw zl=!1,i=Pf,Pf=null,i;return(Gl&1)!==0&&i.tag!==0&&io(),_=i.pendingLanes,(_&1)!==0?i===bf?ma++:(ma=0,bf=i):ma=0,Dr(),null}function io(){if(Fr!==null){var i=hi(Gl),s=oi.transition,a=at;try{if(oi.transition=null,at=16>i?16:i,Fr===null)var c=!1;else{if(i=Fr,Fr=null,Gl=0,(Tt&6)!==0)throw Error(t(331));var p=Tt;for(Tt|=4,Fe=i.current;Fe!==null;){var _=Fe,w=_.child;if((Fe.flags&16)!==0){var I=_.deletions;if(I!==null){for(var k=0;k<I.length;k++){var se=I[k];for(Fe=se;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:da(8,ve,_)}var _e=ve.child;if(_e!==null)_e.return=ve,Fe=_e;else for(;Fe!==null;){ve=Fe;var ge=ve.sibling,Ie=ve.return;if(Bg(ve),ve===se){Fe=null;break}if(ge!==null){ge.return=Ie,Fe=ge;break}Fe=Ie}}}var Ve=_.alternate;if(Ve!==null){var je=Ve.child;if(je!==null){Ve.child=null;do{var Qt=je.sibling;je.sibling=null,je=Qt}while(je!==null)}}Fe=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,Fe=w;else e:for(;Fe!==null;){if(_=Fe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:da(9,_,_.return)}var Z=_.sibling;if(Z!==null){Z.return=_.return,Fe=Z;break e}Fe=_.return}}var H=i.current;for(Fe=H;Fe!==null;){w=Fe;var ne=w.child;if((w.subtreeFlags&2064)!==0&&ne!==null)ne.return=w,Fe=ne;else e:for(w=H;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Bl(9,I)}}catch(Ke){Yt(I,I.return,Ke)}if(I===w){Fe=null;break e}var Me=I.sibling;if(Me!==null){Me.return=I.return,Fe=Me;break e}Fe=I.return}}if(Tt=p,Dr(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(Ce,i)}catch{}c=!0}return c}finally{at=a,oi.transition=s}}return!1}function e0(i,s,a){s=Js(a,s),s=_g(i,s,1),i=Ir(i,s,1),s=Pn(),i!==null&&(Wn(i,1,s),Vn(i,s))}function Yt(i,s,a){if(i.tag===3)e0(i,i,a);else for(;s!==null;){if(s.tag===3){e0(s,i,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ur===null||!Ur.has(c))){i=Js(a,i),i=xg(s,i,1),s=Ir(s,i,1),i=Pn(),s!==null&&(Wn(s,1,i),Vn(s,i));break}}s=s.return}}function hM(i,s,a){var c=i.pingCache;c!==null&&c.delete(s),s=Pn(),i.pingedLanes|=i.suspendedLanes&a,fn===i&&(mn&a)===a&&(on===4||on===3&&(mn&130023424)===mn&&500>C()-Rf?hs(i,0):Cf|=a),Vn(i,s)}function t0(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ut,Ut<<=1,(Ut&130023424)===0&&(Ut=4194304)));var a=Pn();i=nr(i,s),i!==null&&(Wn(i,s,a),Vn(i,a))}function pM(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),t0(i,a)}function mM(i,s){var a=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),t0(i,a)}var n0;n0=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||Fn.current)Bn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Bn=!1,nM(i,s,a);Bn=(i.flags&131072)!==0}else Bn=!1,Wt&&(s.flags&1048576)!==0&&Um(s,Sl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Fl(i,s),i=s.pendingProps;var p=Xs(s,xn.current);Zs(s,a),p=sf(null,s,c,i,p,a);var _=of();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,On(c)?(_=!0,_l(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Zc(s),p.updater=Nl,s.stateNode=p,p._reactInternals=s,df(s,c,i,a),s=gf(null,s,c,!0,_,a)):(s.tag=0,Wt&&_&&zc(s),Rn(null,s,p,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Fl(i,s),i=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=vM(c),i=gi(c,i),p){case 0:s=mf(null,s,c,i,a);break e;case 1:s=Rg(null,s,c,i,a);break e;case 11:s=Eg(null,s,c,i,a);break e;case 14:s=Tg(null,s,c,gi(c.type,i),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:gi(c,p),mf(i,s,c,p,a);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:gi(c,p),Rg(i,s,c,p,a);case 3:e:{if(Pg(s),i===null)throw Error(t(387));c=s.pendingProps,_=s.memoizedState,p=_.element,Wm(i,s),Cl(s,c,null,a);var w=s.memoizedState;if(c=w.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Js(Error(t(423)),s),s=bg(i,s,c,a,p);break e}else if(c!==p){p=Js(Error(t(424)),s),s=bg(i,s,c,a,p);break e}else for(Yn=Rr(s.stateNode.containerInfo.firstChild),jn=s,Wt=!0,mi=null,a=Hm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qs(),c===p){s=rr(i,s,a);break e}Rn(i,s,c,a)}s=s.child}return s;case 5:return Ym(s),i===null&&Wc(s),c=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,Uc(c,p)?w=null:_!==null&&Uc(c,_)&&(s.flags|=32),Cg(i,s),Rn(i,s,w,a),s.child;case 6:return i===null&&Wc(s),null;case 13:return Dg(i,s,a);case 4:return Qc(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=Ks(s,null,c,a):Rn(i,s,c,a),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:gi(c,p),Eg(i,s,c,p,a);case 7:return Rn(i,s,s.pendingProps,a),s.child;case 8:return Rn(i,s,s.pendingProps.children,a),s.child;case 12:return Rn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,_=s.memoizedProps,w=p.value,Bt(Tl,c._currentValue),c._currentValue=w,_!==null)if(pi(_.value,w)){if(_.children===p.children&&!Fn.current){s=rr(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var I=_.dependencies;if(I!==null){w=_.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(_.tag===1){k=ir(-1,a&-a),k.tag=2;var se=_.updateQueue;if(se!==null){se=se.shared;var ve=se.pending;ve===null?k.next=k:(k.next=ve.next,ve.next=k),se.pending=k}}_.lanes|=a,k=_.alternate,k!==null&&(k.lanes|=a),Kc(_.return,a,s),I.lanes|=a;break}k=k.next}}else if(_.tag===10)w=_.type===s.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),Kc(w,a,s),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===s){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}Rn(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,Zs(s,a),p=ri(p),c=c(p),s.flags|=1,Rn(i,s,c,a),s.child;case 14:return c=s.type,p=gi(c,s.pendingProps),p=gi(c.type,p),Tg(i,s,c,p,a);case 15:return wg(i,s,s.type,s.pendingProps,a);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:gi(c,p),Fl(i,s),s.tag=1,On(c)?(i=!0,_l(s)):i=!1,Zs(s,a),gg(s,c,p),df(s,c,p,a),gf(null,s,c,!0,i,a);case 19:return Ig(i,s,a);case 22:return Ag(i,s,a)}throw Error(t(156,s.tag))};function i0(i,s){return Ja(i,s)}function gM(i,s,a,c){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(i,s,a,c){return new gM(i,s,a,c)}function Ff(i){return i=i.prototype,!(!i||!i.isReactComponent)}function vM(i){if(typeof i=="function")return Ff(i)?1:0;if(i!=null){if(i=i.$$typeof,i===K)return 11;if(i===$)return 14}return 2}function kr(i,s){var a=i.alternate;return a===null?(a=ai(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Yl(i,s,a,c,p,_){var w=2;if(c=i,typeof i=="function")Ff(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case B:return ms(a.children,p,_,s);case T:w=8,p|=8;break;case D:return i=ai(12,a,s,p|2),i.elementType=D,i.lanes=_,i;case J:return i=ai(13,a,s,p),i.elementType=J,i.lanes=_,i;case oe:return i=ai(19,a,s,p),i.elementType=oe,i.lanes=_,i;case W:return ql(a,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case q:w=10;break e;case O:w=9;break e;case K:w=11;break e;case $:w=14;break e;case Q:w=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ai(w,a,s,p),s.elementType=i,s.type=c,s.lanes=_,s}function ms(i,s,a,c){return i=ai(7,i,c,s),i.lanes=a,i}function ql(i,s,a,c){return i=ai(22,i,c,s),i.elementType=W,i.lanes=a,i.stateNode={isHidden:!1},i}function Of(i,s,a){return i=ai(6,i,null,s),i.lanes=a,i}function Bf(i,s,a){return s=ai(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function _M(i,s,a,c,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Un(0),this.expirationTimes=Un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Un(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function kf(i,s,a,c,p,_,w,I,k){return i=new _M(i,s,a,I,k),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ai(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(_),i}function xM(i,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:i,containerInfo:s,implementation:a}}function r0(i){if(!i)return br;i=i._reactInternals;e:{if(Di(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(On(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(On(a))return Lm(i,a,s)}return s}function s0(i,s,a,c,p,_,w,I,k){return i=kf(a,c,!0,i,p,_,w,I,k),i.context=r0(null),a=i.current,c=Pn(),p=Or(a),_=ir(c,p),_.callback=s??null,Ir(a,_,p),i.current.lanes=p,Wn(i,p,c),Vn(i,c),i}function Kl(i,s,a,c){var p=s.current,_=Pn(),w=Or(p);return a=r0(a),s.context===null?s.context=a:s.pendingContext=a,s=ir(_,w),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=Ir(p,s,w),i!==null&&(xi(i,p,w,_),Al(i,p,w)),w}function $l(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function o0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Vf(i,s){o0(i,s),(i=i.alternate)&&o0(i,s)}function yM(){return null}var a0=typeof reportError=="function"?reportError:function(i){console.error(i)};function zf(i){this._internalRoot=i}Zl.prototype.render=zf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Kl(i,s,null,null)},Zl.prototype.unmount=zf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ds(function(){Kl(null,i,null,null)}),s[Qi]=null}};function Zl(i){this._internalRoot=i}Zl.prototype.unstable_scheduleHydration=function(i){if(i){var s=ko();i={blockedOn:null,target:i,priority:s};for(var a=0;a<wr.length&&s!==0&&s<wr[a].priority;a++);wr.splice(a,0,i),a===0&&Yp(i)}};function Hf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Ql(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function l0(){}function SM(i,s,a,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var se=$l(w);_.call(se)}}var w=s0(s,c,i,0,null,!1,!1,"",l0);return i._reactRootContainer=w,i[Qi]=w.current,Jo(i.nodeType===8?i.parentNode:i),ds(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var I=c;c=function(){var se=$l(k);I.call(se)}}var k=kf(i,0,!1,null,null,!1,!1,"",l0);return i._reactRootContainer=k,i[Qi]=k.current,Jo(i.nodeType===8?i.parentNode:i),ds(function(){Kl(s,k,a,c)}),k}function Jl(i,s,a,c,p){var _=a._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var I=p;p=function(){var k=$l(w);I.call(k)}}Kl(s,w,i,p)}else w=SM(a,s,i,p,c);return $l(w)}Zt=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=yt(s.pendingLanes);a!==0&&(Rt(s,a|1),Vn(s,C()),(Tt&6)===0&&(no=C()+500,Dr()))}break;case 13:ds(function(){var c=nr(i,1);if(c!==null){var p=Pn();xi(c,i,1,p)}}),Vf(i,1)}},ti=function(i){if(i.tag===13){var s=nr(i,134217728);if(s!==null){var a=Pn();xi(s,i,134217728,a)}Vf(i,134217728)}},Zi=function(i){if(i.tag===13){var s=Or(i),a=nr(i,s);if(a!==null){var c=Pn();xi(a,i,s,c)}Vf(i,s)}},ko=function(){return at},Xp=function(i,s){var a=at;try{return at=i,s()}finally{at=a}},we=function(i,s,a){switch(s){case"input":if(kt(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==i&&c.form===i.form){var p=gl(c);if(!p)throw Error(t(90));Kt(c),kt(c,p)}}}break;case"textarea":E(i,a);break;case"select":s=a.value,s!=null&&Mt(i,!!a.multiple,s,!1)}},ot=If,Lt=ds;var MM={usingClientEntryPoint:!1,Events:[na,Gs,gl,fe,ke,If]},ga={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EM={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Za(i),i===null?null:i.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||yM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{Ce=eu.inject(EM),Le=eu}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MM,zn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(s))throw Error(t(200));return xM(i,s,null,a)},zn.createRoot=function(i,s){if(!Hf(i))throw Error(t(299));var a=!1,c="",p=a0;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=kf(i,1,!1,null,null,a,!1,c,p),i[Qi]=s.current,Jo(i.nodeType===8?i.parentNode:i),new zf(s)},zn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Za(s),i=i===null?null:i.stateNode,i},zn.flushSync=function(i){return ds(i)},zn.hydrate=function(i,s,a){if(!Ql(s))throw Error(t(200));return Jl(null,i,s,!0,a)},zn.hydrateRoot=function(i,s,a){if(!Hf(i))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,_="",w=a0;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=s0(s,null,i,1,a??null,p,!1,_,w),i[Qi]=s.current,Jo(i),c)for(i=0;i<c.length;i++)a=c[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new Zl(s)},zn.render=function(i,s,a){if(!Ql(s))throw Error(t(200));return Jl(null,i,s,!1,a)},zn.unmountComponentAtNode=function(i){if(!Ql(i))throw Error(t(40));return i._reactRootContainer?(ds(function(){Jl(null,null,i,!1,function(){i._reactRootContainer=null,i[Qi]=null})}),!0):!1},zn.unstable_batchedUpdates=If,zn.unstable_renderSubtreeIntoContainer=function(i,s,a,c){if(!Ql(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Jl(i,s,a,!1,c)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var g0;function DM(){if(g0)return Xf.exports;g0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Xf.exports=bM(),Xf.exports}var v0;function LM(){if(v0)return tu;v0=1;var n=DM();return tu.createRoot=n.createRoot,tu.hydrateRoot=n.hydrateRoot,tu}var IM=LM(),st=sp();const C_=st.createContext({});function NM(n){const e=st.useRef(null);return e.current===null&&(e.current=n()),e.current}const UM=typeof window<"u",FM=UM?st.useLayoutEffect:st.useEffect,op=st.createContext(null);function ap(n,e){n.indexOf(e)===-1&&n.push(e)}function Gu(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Yi=(n,e,t)=>t>e?e:t<n?n:t;let lp=()=>{};const Zr={},R_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function P_(n){return typeof n=="object"&&n!==null}const b_=n=>/^0[^.\s]+$/u.test(n);function D_(n){let e;return()=>(e===void 0&&(e=n()),e)}const di=n=>n,OM=(n,e)=>t=>e(n(t)),Va=(...n)=>n.reduce(OM),Ia=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class up{constructor(){this.subscriptions=[]}add(e){return ap(this.subscriptions,e),()=>Gu(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Zn=n=>n*1e3,fi=n=>n/1e3;function L_(n,e){return e?n*(1e3/e):0}const I_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,BM=1e-7,kM=12;function VM(n,e,t,r,o){let l,u,f=0;do u=e+(t-e)/2,l=I_(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>BM&&++f<kM);return u}function za(n,e,t,r){if(n===e&&t===r)return di;const o=l=>VM(l,0,1,n,t);return l=>l===0||l===1?l:I_(o(l),e,r)}const N_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,U_=n=>e=>1-n(1-e),F_=za(.33,1.53,.69,.99),cp=U_(F_),O_=N_(cp),B_=n=>n>=1?1:(n*=2)<1?.5*cp(n):.5*(2-Math.pow(2,-10*(n-1))),fp=n=>1-Math.sin(Math.acos(n)),k_=U_(fp),V_=N_(fp),zM=za(.42,0,1,1),HM=za(0,0,.58,1),z_=za(.42,0,.58,1),GM=n=>Array.isArray(n)&&typeof n[0]!="number",H_=n=>Array.isArray(n)&&typeof n[0]=="number",WM={linear:di,easeIn:zM,easeInOut:z_,easeOut:HM,circIn:fp,circInOut:V_,circOut:k_,backIn:cp,backInOut:O_,backOut:F_,anticipate:B_},XM=n=>typeof n=="string",_0=n=>{if(H_(n)){lp(n.length===4);const[e,t,r,o]=n;return za(e,t,r,o)}else if(XM(n))return WM[n];return n},nu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function jM(n,e){let t=new Set,r=new Set,o=!1,l=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function d(m){u.has(m)&&(h.schedule(m),n()),m(f)}const h={schedule:(m,v=!1,g=!1)=>{const M=g&&o?t:r;return v&&u.add(m),M.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(f=m,o){l=!0;return}o=!0;const v=t;t=r,r=v,t.forEach(d),t.clear(),o=!1,l&&(l=!1,h.process(m))}};return h}const YM=40;function G_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=nu.reduce((b,P)=>(b[P]=jM(l),b),{}),{setup:f,read:d,resolveKeyframes:h,preUpdate:m,update:v,preRender:g,render:S,postRender:M}=u,A=()=>{const b=Zr.useManualTiming,P=b?o.timestamp:performance.now();t=!1,b||(o.delta=r?1e3/60:Math.max(Math.min(P-o.timestamp,YM),1)),o.timestamp=P,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),m.process(o),v.process(o),g.process(o),S.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(A))},x=()=>{t=!0,r=!0,o.isProcessing||n(A)};return{schedule:nu.reduce((b,P)=>{const N=u[P];return b[P]=(F,B=!1,T=!1)=>(t||x(),N.schedule(F,B,T)),b},{}),cancel:b=>{for(let P=0;P<nu.length;P++)u[nu[P]].cancel(b)},state:o,steps:u}}const{schedule:Ft,cancel:Qr,state:gn,steps:qf}=G_(typeof requestAnimationFrame<"u"?requestAnimationFrame:di,!0);let Pu;function qM(){Pu=void 0}const Dn={now:()=>(Pu===void 0&&Dn.set(gn.isProcessing||Zr.useManualTiming?gn.timestamp:performance.now()),Pu),set:n=>{Pu=n,queueMicrotask(qM)}},W_=n=>e=>typeof e=="string"&&e.startsWith(n),X_=W_("--"),KM=W_("var(--"),dp=n=>KM(n)?$M.test(n.split("/*")[0].trim()):!1,$M=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function x0(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Lo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Na={...Lo,transform:n=>Yi(0,1,n)},iu={...Lo,default:1},Pa=n=>Math.round(n*1e5)/1e5,hp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ZM(n){return n==null}const QM=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pp=(n,e)=>t=>!!(typeof t=="string"&&QM.test(t)&&t.startsWith(n)||e&&!ZM(t)&&Object.prototype.hasOwnProperty.call(t,e)),j_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,f]=r.match(hp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},JM=n=>Yi(0,255,n),Kf={...Lo,transform:n=>Math.round(JM(n))},Cs={test:pp("rgb","red"),parse:j_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Kf.transform(n)+", "+Kf.transform(e)+", "+Kf.transform(t)+", "+Pa(Na.transform(r))+")"};function eE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Gd={test:pp("#"),parse:eE,transform:Cs.transform},Ha=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Yr=Ha("deg"),Gi=Ha("%"),ze=Ha("px"),tE=Ha("vh"),nE=Ha("vw"),y0={...Gi,parse:n=>Gi.parse(n)/100,transform:n=>Gi.transform(n*100)},yo={test:pp("hsl","hue"),parse:j_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Gi.transform(Pa(e))+", "+Gi.transform(Pa(t))+", "+Pa(Na.transform(r))+")"},nn={test:n=>Cs.test(n)||Gd.test(n)||yo.test(n),parse:n=>Cs.test(n)?Cs.parse(n):yo.test(n)?yo.parse(n):Gd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Cs.transform(n):yo.transform(n),getAnimatableNone:n=>{const e=nn.parse(n);return e.alpha=0,nn.transform(e)}},iE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function rE(n){return isNaN(n)&&typeof n=="string"&&(n.match(hp)?.length||0)+(n.match(iE)?.length||0)>0}const Y_="number",q_="color",sE="var",oE="var(",S0="${}",aE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wo(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const f=e.replace(aE,d=>(nn.test(d)?(r.color.push(l),o.push(q_),t.push(nn.parse(d))):d.startsWith(oE)?(r.var.push(l),o.push(sE),t.push(d)):(r.number.push(l),o.push(Y_),t.push(parseFloat(d))),++l,S0)).split(S0);return{values:t,split:f,indexes:r,types:o}}function lE(n){return wo(n).values}function K_({split:n,types:e}){const t=n.length;return r=>{let o="";for(let l=0;l<t;l++)if(o+=n[l],r[l]!==void 0){const u=e[l];u===Y_?o+=Pa(r[l]):u===q_?o+=nn.transform(r[l]):o+=r[l]}return o}}function uE(n){return K_(wo(n))}const cE=n=>typeof n=="number"?0:nn.test(n)?nn.getAnimatableNone(n):n,fE=(n,e)=>typeof n=="number"?e?.trim().endsWith("/")?n:0:cE(n);function dE(n){const e=wo(n);return K_(e)(e.values.map((r,o)=>fE(r,e.split[o])))}const Pi={test:rE,parse:lE,createTransformer:uE,getAnimatableNone:dE};function $f(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function hE({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=$f(d,f,n+1/3),l=$f(d,f,n),u=$f(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Wu(n,e){return t=>t>0?e:n}const Ht=(n,e,t)=>n+(e-n)*t,Zf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},pE=[Gd,Cs,yo],mE=n=>pE.find(e=>e.test(n));function M0(n){const e=mE(n);if(!e)return!1;let t=e.parse(n);return e===yo&&(t=hE(t)),t}const E0=(n,e)=>{const t=M0(n),r=M0(e);if(!t||!r)return Wu(n,e);const o={...t};return l=>(o.red=Zf(t.red,r.red,l),o.green=Zf(t.green,r.green,l),o.blue=Zf(t.blue,r.blue,l),o.alpha=Ht(t.alpha,r.alpha,l),Cs.transform(o))},Wd=new Set(["none","hidden"]);function gE(n,e){return Wd.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function vE(n,e){return t=>Ht(n,e,t)}function mp(n){return typeof n=="number"?vE:typeof n=="string"?dp(n)?Wu:nn.test(n)?E0:yE:Array.isArray(n)?$_:typeof n=="object"?nn.test(n)?E0:_E:Wu}function $_(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>mp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function _E(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=mp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function xE(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],u=n.indexes[l][r[l]],f=n.values[u]??0;t[o]=f,r[l]++}return t}const yE=(n,e)=>{const t=Pi.createTransformer(e),r=wo(n),o=wo(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Wd.has(n)&&!o.values.length||Wd.has(e)&&!r.values.length?gE(n,e):Va($_(xE(r,o),o.values),t):Wu(n,e)};function Z_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Ht(n,e,t):mp(n)(n,e)}const SE=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Ft.update(e,t),stop:()=>Qr(e),now:()=>gn.isProcessing?gn.timestamp:Dn.now()}},Q_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=Math.round(n(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Xu=2e4;function gp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Xu;)e+=t,r=n.next(e);return e>=Xu?1/0:e}function ME(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(gp(r),Xu);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:fi(o)}}const qt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Xd(n,e){return n*Math.sqrt(1-e*e)}const EE=12;function TE(n,e,t){let r=t;for(let o=1;o<EE;o++)r=r-n(r)/e(r);return r}const Qf=.001;function wE({duration:n=qt.duration,bounce:e=qt.bounce,velocity:t=qt.velocity,mass:r=qt.mass}){let o,l,u=1-e;u=Yi(qt.minDamping,qt.maxDamping,u),n=Yi(qt.minDuration,qt.maxDuration,fi(n)),u<1?(o=h=>{const m=h*u,v=m*n,g=m-t,S=Xd(h,u),M=Math.exp(-v);return Qf-g/S*M},l=h=>{const v=h*u*n,g=v*t+t,S=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=Xd(Math.pow(h,2),u);return(-o(h)+Qf>0?-1:1)*((g-S)*M)/A}):(o=h=>{const m=Math.exp(-h*n),v=(h-t)*n+1;return-Qf+m*v},l=h=>{const m=Math.exp(-h*n),v=(t-h)*(n*n);return m*v});const f=5/n,d=TE(o,l,f);if(n=Zn(n),isNaN(d))return{stiffness:qt.stiffness,damping:qt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const AE=["duration","bounce"],CE=["stiffness","damping","mass"];function T0(n,e){return e.some(t=>n[t]!==void 0)}function RE(n){let e={velocity:qt.velocity,stiffness:qt.stiffness,damping:qt.damping,mass:qt.mass,isResolvedFromDuration:!1,...n};if(!T0(n,CE)&&T0(n,AE))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*Yi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:qt.mass,stiffness:o,damping:l}}else{const t=wE({...n,velocity:0});e={...e,...t,mass:qt.mass},e.isResolvedFromDuration=!0}return e}function ju(n=qt.visualDuration,e=qt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],f={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:v,velocity:g,isResolvedFromDuration:S}=RE({...t,velocity:-fi(t.velocity||0)}),M=g||0,A=h/(2*Math.sqrt(d*m)),x=u-l,y=fi(Math.sqrt(d/m)),R=Math.abs(x)<5;r||(r=R?qt.restSpeed.granular:qt.restSpeed.default),o||(o=R?qt.restDelta.granular:qt.restDelta.default);let b,P,N,F,B,T;if(A<1)N=Xd(y,A),F=(M+A*y*x)/N,b=q=>{const O=Math.exp(-A*y*q);return u-O*(F*Math.sin(N*q)+x*Math.cos(N*q))},B=A*y*F+x*N,T=A*y*x-F*N,P=q=>Math.exp(-A*y*q)*(B*Math.sin(N*q)+T*Math.cos(N*q));else if(A===1){b=O=>u-Math.exp(-y*O)*(x+(M+y*x)*O);const q=M+y*x;P=O=>Math.exp(-y*O)*(y*q*O-M)}else{const q=y*Math.sqrt(A*A-1);b=oe=>{const $=Math.exp(-A*y*oe),Q=Math.min(q*oe,300);return u-$*((M+A*y*x)*Math.sinh(Q)+q*x*Math.cosh(Q))/q};const O=(M+A*y*x)/q,K=A*y*O-x*q,J=A*y*x-O*q;P=oe=>{const $=Math.exp(-A*y*oe),Q=Math.min(q*oe,300);return $*(K*Math.sinh(Q)+J*Math.cosh(Q))}}const D={calculatedDuration:S&&v||null,velocity:q=>Zn(P(q)),next:q=>{if(!S&&A<1){const K=Math.exp(-A*y*q),J=Math.sin(N*q),oe=Math.cos(N*q),$=u-K*(F*J+x*oe),Q=Zn(K*(B*J+T*oe));return f.done=Math.abs(Q)<=r&&Math.abs(u-$)<=o,f.value=f.done?u:$,f}const O=b(q);if(S)f.done=q>=v;else{const K=Zn(P(q));f.done=Math.abs(K)<=r&&Math.abs(u-O)<=o}return f.value=f.done?u:O,f},toString:()=>{const q=Math.min(gp(D),Xu),O=Q_(K=>D.next(q*K).value,q,30);return q+"ms "+O},toTransition:()=>{}};return D}ju.applyToOptions=n=>{const e=ME(n,100,ju);return n.ease=e.ease,n.duration=Zn(e.duration),n.type="keyframes",n};const PE=5;function J_(n,e,t){const r=Math.max(e-PE,0);return L_(t-n(r),e-r)}function jd({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:d,restDelta:h=.5,restSpeed:m}){const v=n[0],g={done:!1,value:v},S=T=>f!==void 0&&T<f||d!==void 0&&T>d,M=T=>f===void 0?d:d===void 0||Math.abs(f-T)<Math.abs(d-T)?f:d;let A=t*e;const x=v+A,y=u===void 0?x:u(x);y!==x&&(A=y-v);const R=T=>-A*Math.exp(-T/r),b=T=>y+R(T),P=T=>{const D=R(T),q=b(T);g.done=Math.abs(D)<=h,g.value=g.done?y:q};let N,F;const B=T=>{S(g.value)&&(N=T,F=ju({keyframes:[g.value,M(g.value)],velocity:J_(b,T,g.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return B(0),{calculatedDuration:null,next:T=>{let D=!1;return!F&&N===void 0&&(D=!0,P(T),B(T)),N!==void 0&&T>=N?F.next(T-N):(!D&&P(T),g)}}}function bE(n,e,t){const r=[],o=t||Zr.mix||Z_,l=n.length-1;for(let u=0;u<l;u++){let f=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||di:e;f=Va(d,f)}r.push(f)}return r}function DE(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(lp(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=bE(e,r,o),d=f.length,h=m=>{if(u&&m<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(m<n[v+1]);v++);const g=Ia(n[v],n[v+1],m);return f[v](g)};return t?m=>h(Yi(n[0],n[l-1],m)):h}function LE(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Ia(0,e,r);n.push(Ht(t,1,o))}}function IE(n){const e=[0];return LE(e,n.length-1),e}function NE(n,e){return n.map(t=>t*e)}function UE(n,e){return n.map(()=>e||z_).splice(0,n.length-1)}function ba({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=GM(r)?r.map(_0):_0(r),l={done:!1,value:e[0]},u=NE(t&&t.length===e.length?t:IE(e),n),f=DE(u,e,{ease:Array.isArray(o)?o:UE(e,o)});return{calculatedDuration:n,next:d=>(l.value=f(d),l.done=d>=n,l)}}const FE=n=>n!==null;function nc(n,{repeat:e,repeatType:t="loop"},r,o=1){const l=n.filter(FE),f=o<0||e&&t!=="loop"&&e%2===1?0:l.length-1;return!f||r===void 0?l[f]:r}const OE={decay:jd,inertia:jd,tween:ba,keyframes:ba,spring:ju};function ex(n){typeof n.type=="string"&&(n.type=OE[n.type])}class vp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const BE=n=>n/100;class Yu extends vp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==Dn.now()&&this.tick(Dn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;ex(e);const{type:t=ba,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=e;let{keyframes:f}=e;const d=t||ba;d!==ba&&typeof f[0]!="number"&&(this.mixKeyframes=Va(BE,Z_(f[0],f[1])),f=[0,100]);const h=d({...e,keyframes:f});l==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...f].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=gp(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:v,repeatType:g,repeatDelay:S,type:M,onUpdate:A,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-h*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let b=this.currentTime,P=r;if(v){const T=Math.min(this.currentTime,o)/f;let D=Math.floor(T),q=T%1;!q&&T>=1&&(q=1),q===1&&D--,D=Math.min(D,v+1),!!(D%2)&&(g==="reverse"?(q=1-q,S&&(q-=S/f)):g==="mirror"&&(P=u)),b=Yi(0,1,q)*f}let N;R?(this.delayState.value=m[0],N=this.delayState):N=P.next(b),l&&!R&&(N.value=l(N.value));let{done:F}=N;!R&&d!==null&&(F=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const B=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return B&&M!==jd&&(N.value=nc(m,this.options,x,this.speed)),A&&A(N.value),B&&this.finish(),N}then(e,t){return this.finished.then(e,t)}get duration(){return fi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+fi(e)}get time(){return fi(this.currentTime)}set time(e){e=Zn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return J_(r=>this.generator.next(r).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Dn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=fi(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=SE,startTime:t}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Dn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function kE(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Rs=n=>n*180/Math.PI,Yd=n=>{const e=Rs(Math.atan2(n[1],n[0]));return qd(e)},VE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Yd,rotateZ:Yd,skewX:n=>Rs(Math.atan(n[1])),skewY:n=>Rs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},qd=n=>(n=n%360,n<0&&(n+=360),n),w0=Yd,A0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),C0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),zE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:A0,scaleY:C0,scale:n=>(A0(n)+C0(n))/2,rotateX:n=>qd(Rs(Math.atan2(n[6],n[5]))),rotateY:n=>qd(Rs(Math.atan2(-n[2],n[0]))),rotateZ:w0,rotate:w0,skewX:n=>Rs(Math.atan(n[4])),skewY:n=>Rs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Kd(n){return n.includes("scale")?1:0}function $d(n,e){if(!n||n==="none")return Kd(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=zE,o=t;else{const f=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=VE,o=f}if(!o)return Kd(e);const l=r[e],u=o[1].split(",").map(GE);return typeof l=="function"?l(u):u[l]}const HE=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return $d(t,e)};function GE(n){return parseFloat(n.trim())}const Io=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],No=new Set(Io),R0=n=>n===Lo||n===ze,WE=new Set(["x","y","z"]),XE=Io.filter(n=>!WE.has(n));function jE(n){const e=[];return XE.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Kr={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>$d(e,"x"),y:(n,{transform:e})=>$d(e,"y")};Kr.translateX=Kr.x;Kr.translateY=Kr.y;const Ds=new Set;let Zd=!1,Qd=!1,Jd=!1;function tx(){if(Qd){const n=Array.from(Ds).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=jE(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{r.getValue(l)?.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Qd=!1,Zd=!1,Ds.forEach(n=>n.complete(Jd)),Ds.clear()}function nx(){Ds.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Qd=!0)})}function YE(){Jd=!0,nx(),tx(),Jd=!1}class _p{constructor(e,t,r,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(Ds.add(this),Zd||(Zd=!0,Ft.read(nx),Ft.resolveKeyframes(tx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const l=o?.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&t){const f=r.readValue(t,u);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=u),o&&l===void 0&&o.set(e[0])}kE(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ds.delete(this)}cancel(){this.state==="scheduled"&&(Ds.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const qE=n=>n.startsWith("--");function ix(n,e,t){qE(e)?n.style.setProperty(e,t):n.style[e]=t}const KE={};function rx(n,e){const t=D_(n);return()=>KE[e]??t()}const $E=rx(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),sx=rx(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Aa=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,P0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Aa([0,.65,.55,1]),circOut:Aa([.55,0,1,.45]),backIn:Aa([.31,.01,.66,-.59]),backOut:Aa([.33,1.53,.69,.99])};function ox(n,e){if(n)return typeof n=="function"?sx()?Q_(n,e):"ease-out":H_(n)?Aa(n):Array.isArray(n)?n.map(t=>ox(t,e)||P0.easeOut):P0[n]}function ZE(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:f="easeOut",times:d}={},h=void 0){const m={[e]:t};d&&(m.offset=d);const v=ox(f,o);Array.isArray(v)&&(m.easing=v);const g={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(g.pseudoElement=h),n.animate(m,g)}function ax(n){return typeof n=="function"&&"applyToOptions"in n}function QE({type:n,...e}){return ax(n)&&sx()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class lx extends vp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:f,onComplete:d}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,lp(typeof e.type!="string");const h=QE(e);this.animation=ZE(t,r,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=nc(o,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(m),ix(t,r,m),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return fi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+fi(e)}get time(){return fi(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Zn(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&$E()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),di):o(this)}}const ux={anticipate:B_,backInOut:O_,circInOut:V_};function JE(n){return n in ux}function eT(n){typeof n.ease=="string"&&JE(n.ease)&&(n.ease=ux[n.ease])}const Jf=10;class tT extends lx{constructor(e){eT(e),ex(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:l,...u}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const f=new Yu({...u,autoplay:!1}),d=Math.max(Jf,Dn.now()-this.startTime),h=Yi(0,Jf,d-Jf),m=f.sample(d).value,{name:v}=this.options;l&&v&&ix(l,v,m),t.setWithVelocity(f.sample(Math.max(0,d-h)).value,m,h),f.stop()}}const b0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Pi.test(n)||n==="0")&&!n.startsWith("url("));function nT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function iT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=b0(o,e),f=b0(l,e);return!u||!f?!1:nT(n)||(t==="spring"||ax(t))&&r}function eh(n){n.duration=0,n.type="keyframes"}const cx=new Set(["opacity","clipPath","filter","transform"]),rT=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function sT(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&rT.test(n[e]))return!0;return!1}const oT=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),aT=D_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function lT(n){const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:l,type:u,keyframes:f}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=e.owner.getProps();return aT()&&t&&(cx.has(t)||oT.has(t)&&sT(f))&&(t!=="transform"||!m)&&!h&&!r&&o!=="mirror"&&l!==0&&u!=="inertia"}const uT=40;class cT extends vp{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:f,name:d,motionValue:h,element:m,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Dn.now();const g={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,name:d,motionValue:h,element:m,...v},S=m?.KeyframeResolver||_p;this.keyframeResolver=new S(f,(M,A,x)=>this.onKeyframesResolved(M,A,g,!x),d,h,m),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,r,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:f,delay:d,isHandoff:h,onUpdate:m}=r;this.resolvedAt=Dn.now();let v=!0;iT(e,l,u,f)||(v=!1,(Zr.instantAnimations||!d)&&m?.(nc(e,r,t)),e[0]=e[e.length-1],eh(r),r.repeat=0);const S={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>uT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},M=v&&!h&&lT(S),A=S.motionValue?.owner?.current;let x;if(M)try{x=new tT({...S,element:A})}catch{x=new Yu(S)}else x=new Yu(S);x.finished.then(()=>{this.notifyFinished()}).catch(di),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),YE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function fx(n,e,t,r=0,o=1){const l=Array.from(n).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),u=n.size,f=(u-1)*r;return typeof t=="function"?t(l,u):o===1?l*r:f-l*r}const fT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function dT(n){const e=fT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function dx(n,e,t=1){const[r,o]=dT(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return R_(u)?parseFloat(u):u}return dp(o)?dx(o,e,t+1):o}const hT={type:"spring",stiffness:500,damping:25,restSpeed:10},pT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),mT={type:"keyframes",duration:.8},gT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},vT=(n,{keyframes:e})=>e.length>2?mT:No.has(n)?n.startsWith("scale")?pT(e[1]):hT:gT;function hx(n,e){if(n?.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function xp(n,e){const t=n?.[e]??n?.default??n;return t!==n?hx(t,n):t}const _T=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function xT(n){for(const e in n)if(!_T.has(e))return!0;return!1}const yp=(n,e,t,r={},o,l)=>u=>{const f=xp(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-Zn(d);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:g=>{e.set(g),f.onUpdate&&f.onUpdate(g)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:l?void 0:o};xT(f)||Object.assign(m,vT(n,m)),m.duration&&(m.duration=Zn(m.duration)),m.repeatDelay&&(m.repeatDelay=Zn(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(eh(m),m.delay===0&&(v=!0)),(Zr.instantAnimations||Zr.skipAnimations||o?.shouldSkipAnimations)&&(v=!0,eh(m),m.delay=0),m.allowFlatten=!f.type&&!f.ease,v&&!l&&e.get()!==void 0){const g=nc(m.keyframes,f);if(g!==void 0){Ft.update(()=>{m.onUpdate(g),m.onComplete()});return}}return f.isSync?new Yu(m):new cT(m)};function D0(n){const e=[{},{}];return n?.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Sp(n,e,t,r){if(typeof e=="function"){const[o,l]=D0(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=D0(r);e=e(t!==void 0?t:n.custom,o,l)}return e}function Ls(n,e,t){const r=n.getProps();return Sp(r,e,t!==void 0?t:r.custom,n)}const px=new Set(["width","height","top","left","right","bottom",...Io]),L0=30,yT=n=>!isNaN(parseFloat(n));class ST{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const o=Dn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Dn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=yT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new up);const r=this.events[e].add(t);return e==="change"?()=>{r(),Ft.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Dn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>L0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,L0);return L_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ao(n,e){return new ST(n,e)}const th=n=>Array.isArray(n);function MT(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Ao(t))}function ET(n){return th(n)?n[n.length-1]||0:n}function TT(n,e){const t=Ls(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const f=ET(l[u]);MT(n,u,f)}}const vn=n=>!!(n&&n.getVelocity);function wT(n){return!!(vn(n)&&n.add)}function nh(n,e){const t=n.getValue("willChange");if(wT(t))return t.add(e);if(!t&&Zr.WillChange){const r=new Zr.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function Mp(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const AT="framerAppearId",mx="data-"+Mp(AT);function gx(n){return n.props[mx]}function CT({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function vx(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:l,transitionEnd:u,...f}=e;const d=n.getDefaultTransition();l=l?hx(l,d):d;const h=l?.reduceMotion;r&&(l=r);const m=[],v=o&&n.animationState&&n.animationState.getState()[o];for(const g in f){const S=n.getValue(g,n.latestValues[g]??null),M=f[g];if(M===void 0||v&&CT(v,g))continue;const A={delay:t,...xp(l||{},g)},x=S.get();if(x!==void 0&&!S.isAnimating()&&!Array.isArray(M)&&M===x&&!A.velocity){Ft.update(()=>S.set(M));continue}let y=!1;if(window.MotionHandoffAnimation){const P=gx(n);if(P){const N=window.MotionHandoffAnimation(P,g,Ft);N!==null&&(A.startTime=N,y=!0)}}nh(n,g);const R=h??n.shouldReduceMotion;S.start(yp(g,S,M,R&&px.has(g)?{type:!1}:A,n,y));const b=S.animation;b&&m.push(b)}if(u){const g=()=>Ft.update(()=>{u&&TT(n,u)});m.length?Promise.all(m).then(g):g()}return m}function ih(n,e,t={}){const r=Ls(n,e,t.type==="exit"?n.presenceContext?.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const l=r?()=>Promise.all(vx(n,r,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:m,staggerDirection:v}=o;return RT(n,e,d,h,m,v,t)}:()=>Promise.resolve(),{when:f}=o;if(f){const[d,h]=f==="beforeChildren"?[l,u]:[u,l];return d().then(()=>h())}else return Promise.all([l(),u(t.delay)])}function RT(n,e,t=0,r=0,o=0,l=1,u){const f=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),f.push(ih(d,e,{...u,delay:t+(typeof r=="function"?0:r)+fx(n.variantChildren,d,r,o,l)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(f)}function PT(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>ih(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=ih(n,e,t);else{const o=typeof e=="function"?Ls(n,e,t.custom):e;r=Promise.all(vx(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const bT={test:n=>n==="auto",parse:n=>n},_x=n=>e=>e.test(n),xx=[Lo,ze,Gi,Yr,nE,tE,bT],I0=n=>xx.find(_x(n));function DT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||b_(n):!0}const LT=new Set(["brightness","contrast","saturate","opacity"]);function IT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(hp)||[];if(!r)return n;const o=t.replace(r,"");let l=LT.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const NT=/\b([a-z-]*)\(.*?\)/gu,rh={...Pi,getAnimatableNone:n=>{const e=n.match(NT);return e?e.map(IT).join(" "):n}},sh={...Pi,getAnimatableNone:n=>{const e=Pi.parse(n);return Pi.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},N0={...Lo,transform:Math.round},UT={rotate:Yr,rotateX:Yr,rotateY:Yr,rotateZ:Yr,scale:iu,scaleX:iu,scaleY:iu,scaleZ:iu,skew:Yr,skewX:Yr,skewY:Yr,distance:ze,translateX:ze,translateY:ze,translateZ:ze,x:ze,y:ze,z:ze,perspective:ze,transformPerspective:ze,opacity:Na,originX:y0,originY:y0,originZ:ze},Ep={borderWidth:ze,borderTopWidth:ze,borderRightWidth:ze,borderBottomWidth:ze,borderLeftWidth:ze,borderRadius:ze,borderTopLeftRadius:ze,borderTopRightRadius:ze,borderBottomRightRadius:ze,borderBottomLeftRadius:ze,width:ze,maxWidth:ze,height:ze,maxHeight:ze,top:ze,right:ze,bottom:ze,left:ze,inset:ze,insetBlock:ze,insetBlockStart:ze,insetBlockEnd:ze,insetInline:ze,insetInlineStart:ze,insetInlineEnd:ze,padding:ze,paddingTop:ze,paddingRight:ze,paddingBottom:ze,paddingLeft:ze,paddingBlock:ze,paddingBlockStart:ze,paddingBlockEnd:ze,paddingInline:ze,paddingInlineStart:ze,paddingInlineEnd:ze,margin:ze,marginTop:ze,marginRight:ze,marginBottom:ze,marginLeft:ze,marginBlock:ze,marginBlockStart:ze,marginBlockEnd:ze,marginInline:ze,marginInlineStart:ze,marginInlineEnd:ze,fontSize:ze,backgroundPositionX:ze,backgroundPositionY:ze,...UT,zIndex:N0,fillOpacity:Na,strokeOpacity:Na,numOctaves:N0},FT={...Ep,color:nn,backgroundColor:nn,outlineColor:nn,fill:nn,stroke:nn,borderColor:nn,borderTopColor:nn,borderRightColor:nn,borderBottomColor:nn,borderLeftColor:nn,filter:rh,WebkitFilter:rh,mask:sh,WebkitMask:sh},yx=n=>FT[n],OT=new Set([rh,sh]);function Sx(n,e){let t=yx(n);return OT.has(t)||(t=Pi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const BT=new Set(["auto","none","0"]);function kT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!BT.has(l)&&wo(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=Sx(t,o)}class VT extends _p{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let v=e[m];if(typeof v=="string"&&(v=v.trim(),dp(v))){const g=dx(v,t.current);g!==void 0&&(e[m]=g),m===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!px.has(r)||e.length!==2)return;const[o,l]=e,u=I0(o),f=I0(l),d=x0(o),h=x0(l);if(d!==h&&Kr[r]){this.needsMeasurement=!0;return}if(u!==f)if(R0(u)&&R0(f))for(let m=0;m<e.length;m++){const v=e[m];typeof v=="string"&&(e[m]=parseFloat(v))}else Kr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||DT(e[o]))&&r.push(o);r.length&&kT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Kr[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,u=r[l];r[l]=Kr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,d])=>{e.getValue(f).set(d)}),this.resolveNoneKeyframes()}}function Mx(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const o=t?.[n]??r.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const Ex=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function zT(n){return P_(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:Tp}=G_(queueMicrotask,!1),Ti={x:!1,y:!1};function Tx(){return Ti.x||Ti.y}function HT(n){return n==="x"||n==="y"?Ti[n]?null:(Ti[n]=!0,()=>{Ti[n]=!1}):Ti.x||Ti.y?null:(Ti.x=Ti.y=!0,()=>{Ti.x=Ti.y=!1})}function wx(n,e){const t=Mx(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function GT(n){return!(n.pointerType==="touch"||Tx())}function WT(n,e,t={}){const[r,o,l]=wx(n,t);return r.forEach(u=>{let f=!1,d=!1,h;const m=()=>{u.removeEventListener("pointerleave",M)},v=x=>{h&&(h(x),h=void 0),m()},g=x=>{f=!1,window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),d&&(d=!1,v(x))},S=()=>{f=!0,window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",g,o)},M=x=>{if(x.pointerType!=="touch"){if(f){d=!0;return}v(x)}},A=x=>{if(!GT(x))return;d=!1;const y=e(u,x);typeof y=="function"&&(h=y,u.addEventListener("pointerleave",M,o))};u.addEventListener("pointerenter",A,o),u.addEventListener("pointerdown",S,o)}),l}const Ax=(n,e)=>e?n===e?!0:Ax(n,e.parentElement):!1,wp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,XT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jT(n){return XT.has(n.tagName)||n.isContentEditable===!0}const YT=new Set(["INPUT","SELECT","TEXTAREA"]);function qT(n){return YT.has(n.tagName)||n.isContentEditable===!0}const bu=new WeakSet;function U0(n){return e=>{e.key==="Enter"&&n(e)}}function ed(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const KT=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=U0(()=>{if(bu.has(t))return;ed(t,"down");const o=U0(()=>{ed(t,"up")}),l=()=>ed(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function F0(n){return wp(n)&&!Tx()}const O0=new WeakSet;function $T(n,e,t={}){const[r,o,l]=wx(n,t),u=f=>{const d=f.currentTarget;if(!F0(f)||O0.has(f))return;bu.add(d),t.stopPropagation&&O0.add(f);const h=e(d,f),m=(S,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",g),bu.has(d)&&bu.delete(d),F0(S)&&typeof h=="function"&&h(S,{success:M})},v=S=>{m(S,d===window||d===document||t.useGlobalTarget||Ax(d,S.target))},g=S=>{m(S,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",g,o)};return r.forEach(f=>{(t.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),zT(f)&&(f.addEventListener("focus",h=>KT(h,o)),!jT(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),l}function Ap(n){return P_(n)&&"ownerSVGElement"in n}const Du=new WeakMap;let Lu;const Cx=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:Ap(r)&&"getBBox"in r?r.getBBox()[e]:r[t],ZT=Cx("inline","width","offsetWidth"),QT=Cx("block","height","offsetHeight");function JT({target:n,borderBoxSize:e}){Du.get(n)?.forEach(t=>{t(n,{get width(){return ZT(n,e)},get height(){return QT(n,e)}})})}function ew(n){n.forEach(JT)}function tw(){typeof ResizeObserver>"u"||(Lu=new ResizeObserver(ew))}function nw(n,e){Lu||tw();const t=Mx(n);return t.forEach(r=>{let o=Du.get(r);o||(o=new Set,Du.set(r,o)),o.add(e),Lu?.observe(r)}),()=>{t.forEach(r=>{const o=Du.get(r);o?.delete(e),o?.size||Lu?.unobserve(r)})}}const Iu=new Set;let So;function iw(){So=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};Iu.forEach(e=>e(n))},window.addEventListener("resize",So)}function rw(n){return Iu.add(n),So||iw(),()=>{Iu.delete(n),!Iu.size&&typeof So=="function"&&(window.removeEventListener("resize",So),So=void 0)}}function B0(n,e){return typeof n=="function"?rw(n):nw(n,e)}function sw(n){return Ap(n)&&n.tagName==="svg"}const ow=[...xx,nn,Pi],aw=n=>ow.find(_x(n)),k0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Mo=()=>({x:k0(),y:k0()}),V0=()=>({min:0,max:0}),an=()=>({x:V0(),y:V0()}),lw=new WeakMap;function ic(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Ua(n){return typeof n=="string"||Array.isArray(n)}const Cp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rp=["initial",...Cp];function rc(n){return ic(n.animate)||Rp.some(e=>Ua(n[e]))}function Rx(n){return!!(rc(n)||n.variants)}function uw(n,e,t){for(const r in e){const o=e[r],l=t[r];if(vn(o))n.addValue(r,o);else if(vn(l))n.addValue(r,Ao(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Ao(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const oh={current:null},Px={current:!1},cw=typeof window<"u";function fw(){if(Px.current=!0,!!cw)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>oh.current=n.matches;n.addEventListener("change",e),e()}else oh.current=!1}const z0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let qu={};function bx(n){qu=n}function dw(){return qu}class hw{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:l,blockInitialAnimation:u,visualState:f},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=_p,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Dn.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Ft.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=m,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=l,this.options=d,this.blockInitialAnimation=!!u,this.isControllingVariants=rc(t),this.isVariantNode=Rx(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const S in g){const M=g[S];h[S]!==void 0&&vn(M)&&M.set(h[S])}}mount(e){if(this.hasBeenMounted)for(const t in this.initialValues)this.values.get(t)?.jump(this.initialValues[t]),this.latestValues[t]=this.initialValues[t];this.current=e,lw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Px.current||fw(),this.shouldReduceMotion=oh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Qr(this.notifyUpdate),Qr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&cx.has(e)&&this.current instanceof HTMLElement){const{factory:u,keyframes:f,times:d,ease:h,duration:m}=t.accelerate,v=new lx({element:this.current,name:e,keyframes:f,times:d,ease:h,duration:Zn(m)}),g=u(v);this.valueSubscriptions.set(e,()=>{g(),v.cancel()});return}const r=No.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Ft.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;typeof window<"u"&&window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in qu){const t=qu[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):an()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<z0.length;r++){const o=z0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=uw(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Ao(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(R_(r)||b_(r))?r=parseFloat(r):!aw(r)&&Pi.test(t)&&(r=Sx(e,t)),this.setBaseTarget(e,vn(r)?r.get():r)),vn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const l=Sp(this.props,t,this.presenceContext?.custom);l&&(r=l[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!vn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new up),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Tp.render(this.render)}}class Dx extends hw{constructor(){super(...arguments),this.KeyframeResolver=VT}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;vn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class es{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Lx({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function pw({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function mw(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function td(n){return n===void 0||n===1}function ah({scale:n,scaleX:e,scaleY:t}){return!td(n)||!td(e)||!td(t)}function Es(n){return ah(n)||Ix(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Ix(n){return H0(n.x)||H0(n.y)}function H0(n){return n&&n!=="0%"}function Ku(n,e,t){const r=n-t,o=e*r;return t+o}function G0(n,e,t,r,o){return o!==void 0&&(n=Ku(n,o,r)),Ku(n,t,r)+e}function lh(n,e=0,t=1,r,o){n.min=G0(n.min,e,t,r,o),n.max=G0(n.max,e,t,r,o)}function Nx(n,{x:e,y:t}){lh(n.x,e.translate,e.scale,e.originPoint),lh(n.y,t.translate,t.scale,t.originPoint)}const W0=.999999999999,X0=1.0000000000001;function gw(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let f=0;f<o;f++){l=t[f],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&(ki(n.x,-l.scroll.offset.x),ki(n.y,-l.scroll.offset.y)),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Nx(n,u)),r&&Es(l.latestValues)&&Nu(n,l.latestValues,l.layout?.layoutBox))}e.x<X0&&e.x>W0&&(e.x=1),e.y<X0&&e.y>W0&&(e.y=1)}function ki(n,e){n.min+=e,n.max+=e}function j0(n,e,t,r,o=.5){const l=Ht(n.min,n.max,o);lh(n,e,t,l,r)}function Y0(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function Nu(n,e,t){const r=t??n;j0(n.x,Y0(e.x,r.x),e.scaleX,e.scale,e.originX),j0(n.y,Y0(e.y,r.y),e.scaleY,e.scale,e.originY)}function Ux(n,e){return Lx(mw(n.getBoundingClientRect(),e))}function vw(n,e,t){const r=Ux(n,t),{scroll:o}=e;return o&&(ki(r.x,o.offset.x),ki(r.y,o.offset.y)),r}const _w={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xw=Io.length;function yw(n,e,t){let r="",o=!0;for(let l=0;l<xw;l++){const u=Io[l],f=n[u];if(f===void 0)continue;let d=!0;if(typeof f=="number")d=f===(u.startsWith("scale")?1:0);else{const h=parseFloat(f);d=u.startsWith("scale")?h===1:h===0}if(!d||t){const h=Ex(f,Ep[u]);if(!d){o=!1;const m=_w[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function Pp(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,f=!1;for(const d in e){const h=e[d];if(No.has(d)){u=!0;continue}else if(X_(d)){o[d]=h;continue}else{const m=Ex(h,Ep[d]);d.startsWith("origin")?(f=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=yw(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}function Fx(n,{style:e,vars:t},r,o){const l=n.style;let u;for(u in e)l[u]=e[u];o?.applyProjectionStyles(l,r);for(u in t)l.setProperty(u,t[u])}function q0(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const _a={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(ze.test(n))n=parseFloat(n);else return n;const t=q0(n,e.target.x),r=q0(n,e.target.y);return`${t}% ${r}%`}},Sw={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Pi.parse(n);if(o.length>5)return r;const l=Pi.createTransformer(n),u=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=f,o[1+u]/=d;const h=Ht(f,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}},uh={borderRadius:{..._a,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_a,borderTopRightRadius:_a,borderBottomLeftRadius:_a,borderBottomRightRadius:_a,boxShadow:Sw};function Ox(n,{layout:e,layoutId:t}){return No.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!uh[n]||n==="opacity")}function bp(n,e,t){const r=n.style,o=e?.style,l={};if(!r)return l;for(const u in r)(vn(r[u])||o&&vn(o[u])||Ox(u,n)||t?.getValue(u)?.liveStyle!==void 0)&&(l[u]=r[u]);return l}function Mw(n){return window.getComputedStyle(n)}class Ew extends Dx{constructor(){super(...arguments),this.type="html",this.renderInstance=Fx}readValueFromInstance(e,t){if(No.has(t))return this.projection?.isProjecting?Kd(t):HE(e,t);{const r=Mw(e),o=(X_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ux(e,t)}build(e,t,r){Pp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return bp(e,t,r)}}const Tw={offset:"stroke-dashoffset",array:"stroke-dasharray"},ww={offset:"strokeDashoffset",array:"strokeDasharray"};function Aw(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?Tw:ww;n[l.offset]=`${-r}`,n[l.array]=`${e} ${t}`}const Cw=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Bx(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...f},d,h,m){if(Pp(n,f,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:g}=n;v.transform&&(g.transform=v.transform,delete v.transform),(g.transform||v.transformOrigin)&&(g.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),g.transform&&(g.transformBox=m?.transformBox??"fill-box",delete v.transformBox);for(const S of Cw)v[S]!==void 0&&(g[S]=v[S],delete v[S]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&Aw(v,o,l,u,!1)}const kx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Vx=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Rw(n,e,t,r){Fx(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(kx.has(o)?o:Mp(o),e.attrs[o])}function zx(n,e,t){const r=bp(n,e,t);for(const o in n)if(vn(n[o])||vn(e[o])){const l=Io.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}class Pw extends Dx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=an}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(No.has(t)){const r=yx(t);return r&&r.default||0}return t=kx.has(t)?t:Mp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return zx(e,t,r)}build(e,t,r){Bx(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){Rw(e,t,r,o)}mount(e){this.isSVGTag=Vx(e.tagName),super.mount(e)}}const bw=Rp.length;function Hx(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Hx(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<bw;t++){const r=Rp[t],o=n.props[r];(Ua(o)||o===!1)&&(e[r]=o)}return e}function Gx(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const Dw=[...Cp].reverse(),Lw=Cp.length;function Iw(n){return e=>Promise.all(e.map(({animation:t,options:r})=>PT(n,t,r)))}function Nw(n){let e=Iw(n),t=K0(),r=!0,o=!1;const l=h=>(m,v)=>{const g=Ls(n,v,h==="exit"?n.presenceContext?.custom:void 0);if(g){const{transition:S,transitionEnd:M,...A}=g;m={...m,...A,...M}}return m};function u(h){e=h(n)}function f(h){const{props:m}=n,v=Hx(n.parent)||{},g=[],S=new Set;let M={},A=1/0;for(let y=0;y<Lw;y++){const R=Dw[y],b=t[R],P=m[R]!==void 0?m[R]:v[R],N=Ua(P),F=R===h?b.isActive:null;F===!1&&(A=y);let B=P===v[R]&&P!==m[R]&&N;if(B&&(r||o)&&n.manuallyAnimateOnMount&&(B=!1),b.protectedKeys={...M},!b.isActive&&F===null||!P&&!b.prevProp||ic(P)||typeof P=="boolean")continue;if(R==="exit"&&b.isActive&&F!==!0){b.prevResolvedValues&&(M={...M,...b.prevResolvedValues});continue}const T=Uw(b.prevProp,P);let D=T||R===h&&b.isActive&&!B&&N||y>A&&N,q=!1;const O=Array.isArray(P)?P:[P];let K=O.reduce(l(R),{});F===!1&&(K={});const{prevResolvedValues:J={}}=b,oe={...J,...K},$=j=>{D=!0,S.has(j)&&(q=!0,S.delete(j)),b.needsAnimating[j]=!0;const te=n.getValue(j);te&&(te.liveStyle=!1)};for(const j in oe){const te=K[j],ue=J[j];if(M.hasOwnProperty(j))continue;let U=!1;th(te)&&th(ue)?U=!Gx(te,ue):U=te!==ue,U?te!=null?$(j):S.add(j):te!==void 0&&S.has(j)?$(j):b.protectedKeys[j]=!0}b.prevProp=P,b.prevResolvedValues=K,b.isActive&&(M={...M,...K}),(r||o)&&n.blockInitialAnimation&&(D=!1);const Q=B&&T;D&&(!Q||q)&&g.push(...O.map(j=>{const te={type:R};if(typeof j=="string"&&(r||o)&&!Q&&n.manuallyAnimateOnMount&&n.parent){const{parent:ue}=n,U=Ls(ue,j);if(ue.enteringChildren&&U){const{delayChildren:Y}=U.transition||{};te.delay=fx(ue.enteringChildren,n,Y)}}return{animation:j,options:te}}))}if(S.size){const y={};if(typeof m.initial!="boolean"){const R=Ls(n,Array.isArray(m.initial)?m.initial[0]:m.initial);R&&R.transition&&(y.transition=R.transition)}S.forEach(R=>{const b=n.getBaseTarget(R),P=n.getValue(R);P&&(P.liveStyle=!0),y[R]=b??null}),g.push({animation:y})}let x=!!g.length;return r&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(x=!1),r=!1,o=!1,x?e(g):Promise.resolve()}function d(h,m){if(t[h].isActive===m)return Promise.resolve();n.variantChildren?.forEach(g=>g.animationState?.setActive(h,m)),t[h].isActive=m;const v=f(h);for(const g in t)t[g].protectedKeys={};return v}return{animateChanges:f,setActive:d,setAnimateFunction:u,getState:()=>t,reset:()=>{t=K0(),o=!0}}}function Uw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Gx(e,n):!1}function gs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function K0(){return{animate:gs(!0),whileInView:gs(),whileHover:gs(),whileTap:gs(),whileDrag:gs(),whileFocus:gs(),exit:gs()}}function ch(n,e){n.min=e.min,n.max=e.max}function yi(n,e){ch(n.x,e.x),ch(n.y,e.y)}function $0(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const Wx=1e-4,Fw=1-Wx,Ow=1+Wx,Xx=.01,Bw=0-Xx,kw=0+Xx;function Ln(n){return n.max-n.min}function Vw(n,e,t){return Math.abs(n-e)<=t}function Z0(n,e,t,r=.5){n.origin=r,n.originPoint=Ht(e.min,e.max,n.origin),n.scale=Ln(t)/Ln(e),n.translate=Ht(t.min,t.max,n.origin)-n.originPoint,(n.scale>=Fw&&n.scale<=Ow||isNaN(n.scale))&&(n.scale=1),(n.translate>=Bw&&n.translate<=kw||isNaN(n.translate))&&(n.translate=0)}function Da(n,e,t,r){Z0(n.x,e.x,t.x,r?r.originX:void 0),Z0(n.y,e.y,t.y,r?r.originY:void 0)}function Q0(n,e,t,r=0){const o=r?Ht(t.min,t.max,r):t.min;n.min=o+e.min,n.max=n.min+Ln(e)}function zw(n,e,t,r){Q0(n.x,e.x,t.x,r?.x),Q0(n.y,e.y,t.y,r?.y)}function J0(n,e,t,r=0){const o=r?Ht(t.min,t.max,r):t.min;n.min=e.min-o,n.max=n.min+Ln(e)}function $u(n,e,t,r){J0(n.x,e.x,t.x,r?.x),J0(n.y,e.y,t.y,r?.y)}function ev(n,e,t,r,o){return n-=e,n=Ku(n,1/t,r),o!==void 0&&(n=Ku(n,1/o,r)),n}function Hw(n,e=0,t=1,r=.5,o,l=n,u=n){if(Gi.test(e)&&(e=parseFloat(e),e=Ht(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=Ht(l.min,l.max,r);n===l&&(f-=e),n.min=ev(n.min,e,t,f,o),n.max=ev(n.max,e,t,f,o)}function tv(n,e,[t,r,o],l,u){Hw(n,e[t],e[r],e[o],e.scale,l,u)}const Gw=["x","scaleX","originX"],Ww=["y","scaleY","originY"];function nv(n,e,t,r){tv(n.x,e,Gw,t?t.x:void 0,r?r.x:void 0),tv(n.y,e,Ww,t?t.y:void 0,r?r.y:void 0)}function iv(n){return n.translate===0&&n.scale===1}function jx(n){return iv(n.x)&&iv(n.y)}function rv(n,e){return n.min===e.min&&n.max===e.max}function Xw(n,e){return rv(n.x,e.x)&&rv(n.y,e.y)}function sv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Yx(n,e){return sv(n.x,e.x)&&sv(n.y,e.y)}function ov(n){return Ln(n.x)/Ln(n.y)}function av(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Bi(n){return[n("x"),n("y")]}function jw(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=t?.z||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:v,rotateY:g,skewX:S,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),v&&(r+=`rotateX(${v}deg) `),g&&(r+=`rotateY(${g}deg) `),S&&(r+=`skewX(${S}deg) `),M&&(r+=`skewY(${M}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const qx=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Yw=qx.length,lv=n=>typeof n=="string"?parseFloat(n):n,uv=n=>typeof n=="number"||ze.test(n);function qw(n,e,t,r,o,l){o?(n.opacity=Ht(0,t.opacity??1,Kw(r)),n.opacityExit=Ht(e.opacity??1,0,$w(r))):l&&(n.opacity=Ht(e.opacity??1,t.opacity??1,r));for(let u=0;u<Yw;u++){const f=qx[u];let d=cv(e,f),h=cv(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||uv(d)===uv(h)?(n[f]=Math.max(Ht(lv(d),lv(h),r),0),(Gi.test(h)||Gi.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=Ht(e.rotate||0,t.rotate||0,r))}function cv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Kw=Kx(0,.5,k_),$w=Kx(.5,.95,di);function Kx(n,e,t){return r=>r<n?0:r>e?1:t(Ia(n,e,r))}function Zw(n,e,t){const r=vn(n)?n:Ao(n);return r.start(yp("",r,e,t)),r.animation}function Fa(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}const Qw=(n,e)=>n.depth-e.depth;class Jw{constructor(){this.children=[],this.isDirty=!1}add(e){ap(this.children,e),this.isDirty=!0}remove(e){Gu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Qw),this.isDirty=!1,this.children.forEach(e)}}function e1(n,e){const t=Dn.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Qr(r),n(l-e))};return Ft.setup(r,!0),()=>Qr(r)}function Uu(n){return vn(n)?n.get():n}class t1{constructor(){this.members=[]}add(e){ap(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(Gu(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(Gu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){const r=this.members[t];if(r.isPresent!==!1&&r.instance?.isConnected!==!1)return this.promote(r),!0}return!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:o}=r.options,{layoutDependency:l}=e.options;(o===void 0||o!==l)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const Fu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},nd=["","X","Y","Z"],n1=1e3;let i1=0;function id(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function $x(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=gx(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ft,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&$x(r)}function Zx({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},f=e?.()){this.id=i1++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(o1),this.nodes.forEach(d1),this.nodes.forEach(h1),this.nodes.forEach(a1)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new Jw)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new up),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const d=this.eventHandlers.get(u);d&&d.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Ap(u)&&!sw(u),this.instance=u;const{layoutId:f,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||f)&&(this.isLayoutDirty=!0),n){let m,v=0;const g=()=>this.root.updateBlockedByResize=!1;Ft.read(()=>{v=window.innerWidth}),n(u,()=>{const S=window.innerWidth;S!==v&&(v=S,this.root.updateBlockedByResize=!0,m&&m(),m=e1(g,250),Fu.hasAnimatedSinceResize&&(Fu.hasAnimatedSinceResize=!1,this.nodes.forEach(hv)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&h&&(f||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:v,hasRelativeLayoutChanged:g,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||_1,{onLayoutAnimationStart:A,onLayoutAnimationComplete:x}=h.getProps(),y=!this.targetLayout||!Yx(this.targetLayout,S),R=!v&&g;if(this.options.layoutRoot||this.resumeFrom||R||v&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const b={...xp(M,"layout"),onPlay:A,onComplete:x};(h.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b),this.setAnimationOrigin(m,R)}else v||hv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Qr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(p1),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&$x(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const d=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),d&&this.nodes.forEach(u1),this.nodes.forEach(fv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(dv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(c1),this.nodes.forEach(f1),this.nodes.forEach(r1),this.nodes.forEach(s1)):this.nodes.forEach(dv),this.clearAllSnapshots();const f=Dn.now();gn.delta=Yi(0,1e3/60,f-gn.timestamp),gn.timestamp=f,gn.isProcessing=!0,qf.update.process(gn),qf.preRender.process(gn),qf.render.process(gn),gn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Tp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(l1),this.sharedNodes.forEach(m1)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ft.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ft.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ln(this.snapshot.measuredBox.x)&&!Ln(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=an()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!jx(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&this.instance&&(f||Es(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return u&&(d=this.removeTransform(d)),x1(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return an();const f=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(y1))){const{scroll:h}=this.root;h&&(ki(f.x,h.offset.x),ki(f.y,h.offset.y))}return f}removeElementScroll(u){const f=an();if(yi(f,u),this.scroll?.wasRoot)return f;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:m,options:v}=h;h!==this.root&&m&&v.layoutScroll&&(m.wasRoot&&yi(f,u),ki(f.x,m.offset.x),ki(f.y,m.offset.y))}return f}applyTransform(u,f=!1,d){const h=d||an();yi(h,u);for(let m=0;m<this.path.length;m++){const v=this.path[m];!f&&v.options.layoutScroll&&v.scroll&&v!==v.root&&(ki(h.x,-v.scroll.offset.x),ki(h.y,-v.scroll.offset.y)),Es(v.latestValues)&&Nu(h,v.latestValues,v.layout?.layoutBox)}return Es(this.latestValues)&&Nu(h,this.latestValues,this.layout?.layoutBox),h}removeTransform(u){const f=an();yi(f,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!Es(h.latestValues))continue;let m;h.instance&&(ah(h.latestValues)&&h.updateSnapshot(),m=an(),yi(m,h.measurePageBox())),nv(f,h.latestValues,h.snapshot?.layoutBox,m)}return Es(this.latestValues)&&nv(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==f;if(!(u||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:v}=this.options;if(!this.layout||!(m||v))return;this.resolvedRelativeTargetAt=gn.timestamp;const g=this.getClosestProjectingParent();g&&this.linkedParentVersion!==g.layoutVersion&&!g.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&g&&g.layout?this.createRelativeTarget(g,this.layout.layoutBox,g.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=an(),this.targetWithTransforms=an()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),zw(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):yi(this.target,this.layout.layoutBox),Nx(this.target,this.targetDelta)):yi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?this.createRelativeTarget(g,this.target,g.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ah(this.parent.latestValues)||Ix(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,f,d){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),$u(this.relativeTargetOrigin,f,d,this.options.layoutAnchor||void 0),yi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const u=this.getLead(),f=!!this.resumingFrom||this!==u;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===gn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;yi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,g=this.treeScale.y;gw(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=an());const{target:S}=u;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($0(this.prevProjectionDelta.x,this.projectionDelta.x),$0(this.prevProjectionDelta.y,this.projectionDelta.y)),Da(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==g||!av(this.projectionDelta.x,this.prevProjectionDelta.x)||!av(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Mo(),this.projectionDelta=Mo(),this.projectionDeltaWithTransform=Mo()}setAnimationOrigin(u,f=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},v=Mo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const g=an(),S=d?d.source:void 0,M=this.layout?this.layout.source:void 0,A=S!==M,x=this.getStack(),y=!x||x.members.length<=1,R=!!(A&&!y&&this.options.crossfade===!0&&!this.path.some(v1));this.animationProgress=0;let b;this.mixTargetDelta=P=>{const N=P/1e3;pv(v.x,u.x,N),pv(v.y,u.y,N),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&($u(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),g1(this.relativeTarget,this.relativeTargetOrigin,g,N),b&&Xw(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=an()),yi(b,this.relativeTarget)),A&&(this.animationValues=m,qw(m,h,this.latestValues,N,R,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Qr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ft.update(()=>{Fu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ao(0)),this.motionValue.jump(0,!1),this.currentAnimation=Zw(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(n1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:m}=u;if(!(!f||!d||!h)){if(this!==u&&this.layout&&h&&Qx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||an();const v=Ln(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+v;const g=Ln(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+g}yi(f,d),Nu(f,m),Da(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new t1),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&id("z",u,h,this.animationValues);for(let m=0;m<nd.length;m++)id(`rotate${nd[m]}`,u,h,this.animationValues),id(`skew${nd[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Uu(f?.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Uu(f?.pointerEvents)||""),this.hasProjected&&!Es(this.latestValues)&&(u.transform=d?d({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=jw(this.projectionDeltaWithTransform,this.treeScale,m);d&&(v=d(m,v)),u.transform=v;const{x:g,y:S}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${S.origin*100}% 0`,h.animationValues?u.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const M in uh){if(m[M]===void 0)continue;const{correct:A,applyTo:x,isCSSVariable:y}=uh[M],R=v==="none"?m[M]:A(m[M],h);if(x){const b=x.length;for(let P=0;P<b;P++)u[x[P]]=R}else y?this.options.visualElement.renderState.vars[M]=R:u[M]=R}this.options.layoutId&&(u.pointerEvents=h===this?Uu(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(fv),this.root.sharedNodes.clear()}}}function r1(n){n.updateLayout()}function s1(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=n.layout,{animationType:o}=n.options,l=e.source!==n.layout.source;if(o==="size")Bi(m=>{const v=l?e.measuredBox[m]:e.layoutBox[m],g=Ln(v);v.min=t[m].min,v.max=v.min+g});else if(o==="x"||o==="y"){const m=o==="x"?"y":"x";ch(l?e.measuredBox[m]:e.layoutBox[m],t[m])}else Qx(o,e.layoutBox,t)&&Bi(m=>{const v=l?e.measuredBox[m]:e.layoutBox[m],g=Ln(t[m]);v.max=v.min+g,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+g)});const u=Mo();Da(u,t,e.layoutBox);const f=Mo();l?Da(f,n.applyTransform(r,!0),e.measuredBox):Da(f,t,e.layoutBox);const d=!jx(u);let h=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:v,layout:g}=m;if(v&&g){const S=n.options.layoutAnchor||void 0,M=an();$u(M,e.layoutBox,v.layoutBox,S);const A=an();$u(A,t,g.layoutBox,S),Yx(M,A)||(h=!0),m.options.layoutRoot&&(n.relativeTarget=A,n.relativeTargetOrigin=M,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:f,layoutDelta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(n.isLead()){const{onExitComplete:t}=n.options;t&&t()}n.options.transition=void 0}function o1(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function a1(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function l1(n){n.clearSnapshot()}function fv(n){n.clearMeasurements()}function u1(n){n.isLayoutDirty=!0,n.updateLayout()}function dv(n){n.isLayoutDirty=!1}function c1(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function f1(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function hv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function d1(n){n.resolveTargetDelta()}function h1(n){n.calcProjection()}function p1(n){n.resetSkewAndRotation()}function m1(n){n.removeLeadSnapshot()}function pv(n,e,t){n.translate=Ht(e.translate,0,t),n.scale=Ht(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function mv(n,e,t,r){n.min=Ht(e.min,t.min,r),n.max=Ht(e.max,t.max,r)}function g1(n,e,t,r){mv(n.x,e.x,t.x,r),mv(n.y,e.y,t.y,r)}function v1(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const _1={duration:.45,ease:[.4,0,.1,1]},gv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),vv=gv("applewebkit/")&&!gv("chrome/")?Math.round:di;function _v(n){n.min=vv(n.min),n.max=vv(n.max)}function x1(n){_v(n.x),_v(n.y)}function Qx(n,e,t){return n==="position"||n==="preserve-aspect"&&!Vw(ov(e),ov(t),.2)}function y1(n){return n!==n.root&&n.scroll?.wasRoot}const S1=Zx({attachResizeListener:(n,e)=>Fa(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),rd={current:void 0},Jx=Zx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!rd.current){const n=new S1({});n.mount(window),n.setOptions({layoutScroll:!0}),rd.current=n}return rd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),ey=st.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function M1(n=!0){const e=st.useContext(op);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=st.useId();st.useEffect(()=>{if(n)return o(l)},[n]);const u=st.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const ty=st.createContext({strict:!1}),xv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let yv=!1;function E1(){if(yv)return;const n={};for(const e in xv)n[e]={isEnabled:t=>xv[e].some(r=>!!t[r])};bx(n),yv=!0}function ny(){return E1(),dw()}function T1(n){const e=ny();for(const t in n)e[t]={...e[t],...n[t]};bx(e)}const w1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Zu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||w1.has(n)}let iy=n=>!Zu(n);function A1(n){typeof n=="function"&&(iy=e=>e.startsWith("on")?!Zu(e):n(e))}try{A1(require("@emotion/is-prop-valid").default)}catch{}function C1(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||vn(n[o])||(iy(o)||t===!0&&Zu(o)||!e&&!Zu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const sc=st.createContext({});function R1(n,e){if(rc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Ua(t)?t:void 0,animate:Ua(r)?r:void 0}}return n.inherit!==!1?e:{}}function P1(n){const{initial:e,animate:t}=R1(n,st.useContext(sc));return st.useMemo(()=>({initial:e,animate:t}),[Sv(e),Sv(t)])}function Sv(n){return Array.isArray(n)?n.join(" "):n}const Dp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ry(n,e,t){for(const r in e)!vn(e[r])&&!Ox(r,t)&&(n[r]=e[r])}function b1({transformTemplate:n},e){return st.useMemo(()=>{const t=Dp();return Pp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function D1(n,e){const t=n.style||{},r={};return ry(r,t,n),Object.assign(r,b1(n,e)),r}function L1(n,e){const t={},r=D1(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const sy=()=>({...Dp(),attrs:{}});function I1(n,e,t,r){const o=st.useMemo(()=>{const l=sy();return Bx(l,e,Vx(r),n.transformTemplate,n.style),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};ry(l,n.style,n),o.style={...l,...o.style}}return o}const N1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Lp(n){return typeof n!="string"||n.includes("-")?!1:!!(N1.indexOf(n)>-1||/[A-Z]/u.test(n))}function U1(n,e,t,{latestValues:r},o,l=!1,u){const d=(u??Lp(n)?I1:L1)(e,r,o,n),h=C1(e,typeof n=="string",l),m=n!==st.Fragment?{...h,...d,ref:t}:{},{children:v}=e,g=st.useMemo(()=>vn(v)?v.get():v,[v]);return st.createElement(n,{...m,children:g})}function F1({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:O1(t,r,o,n),renderState:e()}}function O1(n,e,t,r){const o={},l=r(n,{});for(const g in l)o[g]=Uu(l[g]);let{initial:u,animate:f}=n;const d=rc(n),h=Rx(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const v=m?f:u;if(v&&typeof v!="boolean"&&!ic(v)){const g=Array.isArray(v)?v:[v];for(let S=0;S<g.length;S++){const M=Sp(n,g[S]);if(M){const{transitionEnd:A,transition:x,...y}=M;for(const R in y){let b=y[R];if(Array.isArray(b)){const P=m?b.length-1:0;b=b[P]}b!==null&&(o[R]=b)}for(const R in A)o[R]=A[R]}}}return o}const oy=n=>(e,t)=>{const r=st.useContext(sc),o=st.useContext(op),l=()=>F1(n,e,r,o);return t?l():NM(l)},B1=oy({scrapeMotionValuesFromProps:bp,createRenderState:Dp}),k1=oy({scrapeMotionValuesFromProps:zx,createRenderState:sy}),V1=Symbol.for("motionComponentSymbol");function z1(n,e,t){const r=st.useRef(t);st.useInsertionEffect(()=>{r.current=t});const o=st.useRef(null);return st.useCallback(l=>{l&&n.onMount?.(l);const u=r.current;if(typeof u=="function")if(l){const f=u(l);typeof f=="function"&&(o.current=f)}else o.current?(o.current(),o.current=null):u(l);else u&&(u.current=l);e&&(l?e.mount(l):e.unmount())},[e])}const ay=st.createContext({});function xo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function H1(n,e,t,r,o,l){const{visualElement:u}=st.useContext(sc),f=st.useContext(ty),d=st.useContext(op),h=st.useContext(ey),m=h.reducedMotion,v=h.skipAnimations,g=st.useRef(null),S=st.useRef(!1);r=r||f.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:u,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:m,skipAnimations:v,isSVG:l}),S.current&&g.current&&(g.current.manuallyAnimateOnMount=!0));const M=g.current,A=st.useContext(ay);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&G1(g.current,t,o,A);const x=st.useRef(!1);st.useInsertionEffect(()=>{M&&x.current&&M.update(t,d)});const y=t[mx],R=st.useRef(!!y&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(y)&&window.MotionHasOptimisedAnimation?.(y));return FM(()=>{S.current=!0,M&&(x.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),R.current&&M.animationState&&M.animationState.animateChanges())}),st.useEffect(()=>{M&&(!R.current&&M.animationState&&M.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(y)}),R.current=!1),M.enteringChildren=void 0)}),M}function G1(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:h,layoutAnchor:m,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:ly(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||f&&xo(f),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:d,layoutRoot:h,layoutAnchor:m})}function ly(n){if(n)return n.options.allowProjection!==!1?n.projection:ly(n.parent)}function sd(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&T1(r);const l=t?t==="svg":Lp(n),u=l?k1:B1;function f(h,m){let v;const g={...st.useContext(ey),...h,layoutId:W1(h)},{isStatic:S}=g,M=P1(h),A=u(h,S);if(!S&&typeof window<"u"){X1();const x=j1(g);v=x.MeasureLayout,M.visualElement=H1(n,A,g,o,x.ProjectionNode,l)}return Je.jsxs(sc.Provider,{value:M,children:[v&&M.visualElement?Je.jsx(v,{visualElement:M.visualElement,...g}):null,U1(n,h,z1(A,M.visualElement,m),A,S,e,l)]})}f.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=st.forwardRef(f);return d[V1]=n,d}function W1({layoutId:n}){const e=st.useContext(C_).id;return e&&n!==void 0?e+"-"+n:n}function X1(n,e){st.useContext(ty).strict}function j1(n){const e=ny(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t?.isEnabled(n)||r?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function Y1(n,e){if(typeof Proxy>"u")return sd;const t=new Map,r=(l,u)=>sd(l,u,n,e),o=(l,u)=>r(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?r:(t.has(u)||t.set(u,sd(u,void 0,n,e)),t.get(u))})}const q1=(n,e)=>e.isSVG??Lp(n)?new Pw(e):new Ew(e,{allowProjection:n!==st.Fragment});class K1 extends es{constructor(e){super(e),e.animationState||(e.animationState=Nw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();ic(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let $1=0;class Z1 extends es{constructor(){super(...arguments),this.id=$1++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:l,custom:u}=this.node.getProps();if(typeof l=="string"){const f=Ls(this.node,l,u);if(f){const{transition:d,transitionEnd:h,...m}=f;for(const v in m)this.node.getValue(v)?.jump(m[v])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const Q1={animation:{Feature:K1},exit:{Feature:Z1}};function Ga(n){return{point:{x:n.pageX,y:n.pageY}}}const J1=n=>e=>wp(e)&&n(e,Ga(e));function La(n,e,t,r){return Fa(n,e,J1(t),r)}const uy=({current:n})=>n?n.ownerDocument.defaultView:null,Mv=(n,e)=>Math.abs(n-e);function eA(n,e){const t=Mv(n.x,e.x),r=Mv(n.y,e.y);return Math.sqrt(t**2+r**2)}const Ev=new Set(["auto","scroll"]);class cy{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ru(this.lastRawMoveEventInfo,this.transformPagePoint));const S=od(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,A=eA(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!A)return;const{point:x}=S,{timestamp:y}=gn;this.history.push({...x,timestamp:y});const{onStart:R,onMove:b}=this.handlers;M||(R&&R(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,S)},this.handlePointerMove=(S,M)=>{this.lastMoveEvent=S,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=ru(M,this.transformPagePoint),Ft.update(this.updatePoint,!0)},this.handlePointerUp=(S,M)=>{this.end();const{onEnd:A,onSessionEnd:x,resumeAnimation:y}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=od(S.type==="pointercancel"?this.lastMoveEventInfo:ru(M,this.transformPagePoint),this.history);this.startEvent&&A&&A(S,R),x&&x(S,R)},!wp(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const d=Ga(e),h=ru(d,this.transformPagePoint),{point:m}=h,{timestamp:v}=gn;this.history=[{...m,timestamp:v}];const{onSessionStart:g}=t;g&&g(e,od(h,this.history)),this.removeListeners=Va(La(this.contextWindow,"pointermove",this.handlePointerMove),La(this.contextWindow,"pointerup",this.handlePointerUp),La(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(Ev.has(r.overflowX)||Ev.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},l={x:o.x-t.x,y:o.y-t.y};l.x===0&&l.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=l.x,this.lastMoveEventInfo.point.y+=l.y):this.history.length>0&&(this.history[0].x-=l.x,this.history[0].y-=l.y),this.scrollPositions.set(e,o),Ft.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Qr(this.updatePoint)}}function ru(n,e){return e?{point:e(n.point)}:n}function Tv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function od({point:n},e){return{point:n,delta:Tv(n,fy(e)),offset:Tv(n,tA(e)),velocity:nA(e,.1)}}function tA(n){return n[0]}function fy(n){return n[n.length-1]}function nA(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=fy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>Zn(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>Zn(e)*2&&(r=n[1]);const l=fi(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function iA(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Ht(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Ht(t,n,r.max):Math.min(n,t)),n}function wv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function rA(n,{top:e,left:t,bottom:r,right:o}){return{x:wv(n.x,t,o),y:wv(n.y,e,r)}}function Av(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function sA(n,e){return{x:Av(n.x,e.x),y:Av(n.y,e.y)}}function oA(n,e){let t=.5;const r=Ln(n),o=Ln(e);return o>r?t=Ia(e.min,e.max-r,n.min):r>o&&(t=Ia(n.min,n.max-o,e.min)),Yi(0,1,t)}function aA(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const fh=.35;function lA(n=fh){return n===!1?n=0:n===!0&&(n=fh),{x:Cv(n,"left","right"),y:Cv(n,"top","bottom")}}function Cv(n,e,t){return{min:Rv(n,e),max:Rv(n,t)}}function Rv(n,e){return typeof n=="number"?n:n[e]||0}const uA=new WeakMap;class cA{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=an(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=v=>{t&&this.snapToCursor(Ga(v).point),this.stopAnimation()},u=(v,g)=>{const{drag:S,dragPropagation:M,onDragStart:A}=this.getProps();if(S&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=HT(S),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=g,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Bi(y=>{let R=this.getAxisMotionValue(y).get()||0;if(Gi.test(R)){const{projection:b}=this.visualElement;if(b&&b.layout){const P=b.layout.layoutBox[y];P&&(R=Ln(P)*(parseFloat(R)/100))}}this.originPoint[y]=R}),A&&Ft.update(()=>A(v,g),!1,!0),nh(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},f=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g;const{dragPropagation:S,dragDirectionLock:M,onDirectionLock:A,onDrag:x}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:y}=g;if(M&&this.currentDirection===null){this.currentDirection=dA(y),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",g.point,y),this.updateAxis("y",g.point,y),this.visualElement.render(),x&&Ft.update(()=>x(v,g),!1,!0)},d=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g,this.stop(v,g),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new cy(e,{onSessionStart:l,onStart:u,onMove:f,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:uy(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Ft.postRender(()=>f(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!su(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=iA(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;e&&xo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=rA(r.layoutBox,e):this.constraints=!1,this.elastic=lA(t),o!==this.constraints&&!xo(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Bi(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=aA(r.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!xo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=vw(r,o.root,this.visualElement.getTransformPagePoint());let u=sA(o.layout.layoutBox,l);if(t){const f=t(pw(u));this.hasMutatedConstraints=!!f,f&&(u=Lx(f))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=Bi(m=>{if(!su(m,t,this.currentDirection))return;let v=d&&d[m]||{};(u===!0||u===m)&&(v={min:0,max:0});const g=o?200:1e6,S=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:g,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return nh(this.visualElement,e),r.start(yp(e,r,0,t,this.visualElement,!1))}stopAnimation(){Bi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Bi(t=>{const{drag:r}=this.getProps();if(!su(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[t],d=l.get()||0;l.set(e[t]-Ht(u,f,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!xo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Bi(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const d=f.get();o[u]=oA({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Bi(u=>{if(!su(u,e,null))return;const f=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];f.set(Ht(d,h,o[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;uA.set(this.visualElement,this);const e=this.visualElement.current,t=La(e,"pointerdown",h=>{const{drag:m,dragListener:v=!0}=this.getProps(),g=h.target,S=g!==e&&qT(g);m&&v&&!S&&this.start(h)});let r;const o=()=>{const{dragConstraints:h}=this.getProps();xo(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),r||(r=fA(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:l}=this.visualElement,u=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Ft.read(o);const f=Fa(window,"resize",()=>this.scalePositionWithinConstraints()),d=l.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(Bi(v=>{const g=this.getAxisMotionValue(v);g&&(this.originPoint[v]+=h[v].translate,g.set(g.get()+h[v].translate))}),this.visualElement.render())}));return()=>{f(),t(),u(),d&&d(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=fh,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function Pv(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function fA(n,e,t){const r=B0(n,Pv(t)),o=B0(e,Pv(t));return()=>{r(),o()}}function su(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function dA(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class hA extends es{constructor(e){super(e),this.removeGroupControls=di,this.removeListeners=di,this.controls=new cA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||di}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ad=n=>(e,t)=>{n&&Ft.update(()=>n(e,t),!1,!0)};class pA extends es{constructor(){super(...arguments),this.removePointerDownListener=di}onPointerDown(e){this.session=new cy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:uy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:ad(e),onStart:ad(t),onMove:ad(r),onEnd:(l,u)=>{delete this.session,o&&Ft.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=La(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ld=!1;class mA extends st.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),ld&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Fu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,{projection:u}=r;return u&&(u.isPresent=l,e.layoutDependency!==t&&u.setOptions({...u.options,layoutDependency:t}),ld=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Ft.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=t,r.root.didUpdate(),Tp.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;ld=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function dy(n){const[e,t]=M1(),r=st.useContext(C_);return Je.jsx(mA,{...n,layoutGroup:r,switchLayoutGroup:st.useContext(ay),isPresent:e,safeToRemove:t})}const gA={pan:{Feature:pA},drag:{Feature:hA,ProjectionNode:Jx,MeasureLayout:dy}};function bv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&Ft.postRender(()=>l(e,Ga(e)))}class vA extends es{mount(){const{current:e}=this.node;e&&(this.unmount=WT(e,(t,r)=>(bv(this.node,r,"Start"),o=>bv(this.node,o,"End"))))}unmount(){}}class _A extends es{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Va(Fa(this.node.current,"focus",()=>this.onFocus()),Fa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Dv(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&Ft.postRender(()=>l(e,Ga(e)))}class xA extends es{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=$T(e,(o,l)=>(Dv(this.node,l,"Start"),(u,{success:f})=>Dv(this.node,u,f?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:r?.tap===!1})}unmount(){}}const dh=new WeakMap,ud=new WeakMap,yA=n=>{const e=dh.get(n.target);e&&e(n)},SA=n=>{n.forEach(yA)};function MA({root:n,...e}){const t=n||document;ud.has(t)||ud.set(t,{});const r=ud.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(SA,{root:n,...e})),r[o]}function EA(n,e,t){const r=MA(e);return dh.set(n,t),r.observe(n),()=>{dh.delete(n),r.unobserve(n)}}const TA={some:0,all:1};class wA extends es{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:TA[o]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:v}=this.node.getProps(),g=h?m:v;g&&g(d)};this.stopObserver=EA(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(AA(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function AA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const CA={inView:{Feature:wA},tap:{Feature:xA},focus:{Feature:_A},hover:{Feature:vA}},RA={layout:{ProjectionNode:Jx,MeasureLayout:dy}},PA={...Q1,...CA,...gA,...RA},wi=Y1(PA,q1);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="183",bA=0,Lv=1,DA=2,Ou=1,LA=2,Ca=3,Jr=0,Gn=1,fr=2,hr=0,Eo=1,Iv=2,Nv=3,Uv=4,IA=5,ws=100,NA=101,UA=102,FA=103,OA=104,BA=200,kA=201,VA=202,zA=203,hh=204,ph=205,HA=206,GA=207,WA=208,XA=209,jA=210,YA=211,qA=212,KA=213,$A=214,mh=0,gh=1,vh=2,Co=3,_h=4,xh=5,yh=6,Sh=7,hy=0,ZA=1,QA=2,Wi=0,py=1,my=2,gy=3,vy=4,_y=5,xy=6,yy=7,Sy=300,Is=301,Ro=302,cd=303,fd=304,oc=306,Mh=1e3,dr=1001,Eh=1002,_n=1003,JA=1004,ou=1005,wn=1006,dd=1007,Ps=1008,ci=1009,My=1010,Ey=1011,Oa=1012,Np=1013,qi=1014,zi=1015,gr=1016,Up=1017,Fp=1018,Ba=1020,Ty=35902,wy=35899,Ay=1021,Cy=1022,Ri=1023,vr=1026,bs=1027,Ry=1028,Op=1029,Po=1030,Bp=1031,kp=1033,Bu=33776,ku=33777,Vu=33778,zu=33779,Th=35840,wh=35841,Ah=35842,Ch=35843,Rh=36196,Ph=37492,bh=37496,Dh=37488,Lh=37489,Ih=37490,Nh=37491,Uh=37808,Fh=37809,Oh=37810,Bh=37811,kh=37812,Vh=37813,zh=37814,Hh=37815,Gh=37816,Wh=37817,Xh=37818,jh=37819,Yh=37820,qh=37821,Kh=36492,$h=36494,Zh=36495,Qh=36283,Jh=36284,ep=36285,tp=36286,eC=3200,tC=0,nC=1,qr="",ui="srgb",bo="srgb-linear",Qu="linear",It="srgb",ro=7680,Fv=519,iC=512,rC=513,sC=514,Vp=515,oC=516,aC=517,zp=518,lC=519,Ov=35044,Bv="300 es",Hi=2e3,Ju=2001;function uC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ec(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cC(){const n=ec("canvas");return n.style.display="block",n}const kv={};function Vv(...n){const e="THREE."+n.shift();console.log(e,...n)}function Py(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ut(...n){n=Py(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ct(...n){n=Py(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function tc(...n){const e=n.join(" ");e in kv||(kv[e]=!0,ut(...n))}function fC(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const dC={[mh]:gh,[vh]:yh,[_h]:Sh,[Co]:xh,[gh]:mh,[yh]:vh,[Sh]:_h,[xh]:Co};class Uo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=Math.PI/180,np=180/Math.PI;function Wa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function hC(n,e){return(n%e+e)%e}function pd(n,e,t){return(1-t)*n+t*e}function xa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,t=0){Pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let d=r[o+0],h=r[o+1],m=r[o+2],v=r[o+3],g=l[u+0],S=l[u+1],M=l[u+2],A=l[u+3];if(v!==A||d!==g||h!==S||m!==M){let x=d*g+h*S+m*M+v*A;x<0&&(g=-g,S=-S,M=-M,A=-A,x=-x);let y=1-f;if(x<.9995){const R=Math.acos(x),b=Math.sin(R);y=Math.sin(y*R)/b,f=Math.sin(f*R)/b,d=d*y+g*f,h=h*y+S*f,m=m*y+M*f,v=v*y+A*f}else{d=d*y+g*f,h=h*y+S*f,m=m*y+M*f,v=v*y+A*f;const R=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=R,h*=R,m*=R,v*=R}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],d=r[o+1],h=r[o+2],m=r[o+3],v=l[u],g=l[u+1],S=l[u+2],M=l[u+3];return e[t]=f*M+m*v+d*S-h*g,e[t+1]=d*M+m*g+h*v-f*S,e[t+2]=h*M+m*S+f*g-d*v,e[t+3]=m*M-f*v-d*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(o/2),v=f(l/2),g=d(r/2),S=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=g*m*v+h*S*M,this._y=h*S*v-g*m*M,this._z=h*m*M+g*S*v,this._w=h*m*v-g*S*M;break;case"YXZ":this._x=g*m*v+h*S*M,this._y=h*S*v-g*m*M,this._z=h*m*M-g*S*v,this._w=h*m*v+g*S*M;break;case"ZXY":this._x=g*m*v-h*S*M,this._y=h*S*v+g*m*M,this._z=h*m*M+g*S*v,this._w=h*m*v-g*S*M;break;case"ZYX":this._x=g*m*v-h*S*M,this._y=h*S*v+g*m*M,this._z=h*m*M-g*S*v,this._w=h*m*v+g*S*M;break;case"YZX":this._x=g*m*v+h*S*M,this._y=h*S*v+g*m*M,this._z=h*m*M-g*S*v,this._w=h*m*v-g*S*M;break;case"XZY":this._x=g*m*v-h*S*M,this._y=h*S*v-g*m*M,this._z=h*m*M+g*S*v,this._w=h*m*v+g*S*M;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],m=t[6],v=t[10],g=r+f+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-h)*S,this._z=(u-o)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(m-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+h)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(u-o)/S,this._x=(l+h)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*f+o*h-l*d,this._y=o*m+u*d+l*f-r*h,this._z=l*m+u*h+r*d-o*f,this._w=u*m-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,r=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*o-f*r),m=2*(f*t-l*o),v=2*(l*r-u*t);return this.x=t+d*h+u*v-f*m,this.y=r+d*m+f*h-l*v,this.z=o+d*v+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new ae,zv=new Fo;class ht{constructor(e,t,r,o,l,u,f,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h)}set(e,t,r,o,l,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],h=r[1],m=r[4],v=r[7],g=r[2],S=r[5],M=r[8],A=o[0],x=o[3],y=o[6],R=o[1],b=o[4],P=o[7],N=o[2],F=o[5],B=o[8];return l[0]=u*A+f*R+d*N,l[3]=u*x+f*b+d*F,l[6]=u*y+f*P+d*B,l[1]=h*A+m*R+v*N,l[4]=h*x+m*b+v*F,l[7]=h*y+m*P+v*B,l[2]=g*A+S*R+M*N,l[5]=g*x+S*b+M*F,l[8]=g*y+S*P+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-r*l*m+r*f*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=m*u-f*h,g=f*d-m*l,S=h*l-u*d,M=t*v+r*g+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*h-m*r)*A,e[2]=(f*r-o*u)*A,e[3]=g*A,e[4]=(m*t-o*d)*A,e[5]=(o*l-f*t)*A,e[6]=S*A,e[7]=(r*d-h*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*f)+u+e,-o*h,o*d,-o*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(gd.makeScale(e,t)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,t){return this.premultiply(gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new ht,Hv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gv=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pC(){const n={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(o.r=pr(o.r),o.g=pr(o.g),o.b=pr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=To(o.r),o.g=To(o.g),o.b=To(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===qr?Qu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return tc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return tc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[bo]:{primaries:e,whitePoint:r,transfer:Qu,toXYZ:Hv,fromXYZ:Gv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:It,toXYZ:Hv,fromXYZ:Gv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),n}const wt=pC();function pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function To(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let so;class mC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{so===void 0&&(so=ec("canvas")),so.width=e.width,so.height=e.height;const o=so.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=so}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ec("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=pr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(pr(t[r]/255)*255):t[r]=pr(t[r]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gC=0;class Hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gC++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(vd(o[u].image)):l.push(vd(o[u]))}else l=vd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function vd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let vC=0;const _d=new ae;class In extends Uo{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,r=dr,o=dr,l=wn,u=Ps,f=Ri,d=ci,h=In.DEFAULT_ANISOTROPY,m=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vC++}),this.uuid=Wa(),this.name="",this.source=new Hp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mh:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case Eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mh:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case Eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Sy;In.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,t=0,r=0,o=1){Jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],v=d[8],g=d[1],S=d[5],M=d[9],A=d[2],x=d[6],y=d[10];if(Math.abs(m-g)<.01&&Math.abs(v-A)<.01&&Math.abs(M-x)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+A)<.1&&Math.abs(M+x)<.1&&Math.abs(h+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,P=(S+1)/2,N=(y+1)/2,F=(m+g)/4,B=(v+A)/4,T=(M+x)/4;return b>P&&b>N?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=F/r,l=B/r):P>N?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=F/o,l=T/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=B/l,o=T/l),this.set(r,o,l,t),this}let R=Math.sqrt((x-M)*(x-M)+(v-A)*(v-A)+(g-m)*(g-m));return Math.abs(R)<.001&&(R=1),this.x=(x-M)/R,this.y=(v-A)/R,this.z=(g-m)/R,this.w=Math.acos((h+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _C extends Uo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new In(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Hp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends _C{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class by extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xC extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(e,t,r,o,l,u,f,d,h,m,v,g,S,M,A,x){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h,m,v,g,S,M,A,x)}set(e,t,r,o,l,u,f,d,h,m,v,g,S,M,A,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=h,y[6]=m,y[10]=v,y[14]=g,y[3]=S,y[7]=M,y[11]=A,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/oo.setFromMatrixColumn(e,0).length(),l=1/oo.setFromMatrixColumn(e,1).length(),u=1/oo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=u*m,S=u*v,M=f*m,A=f*v;t[0]=d*m,t[4]=-d*v,t[8]=h,t[1]=S+M*h,t[5]=g-A*h,t[9]=-f*d,t[2]=A-g*h,t[6]=M+S*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*m,S=d*v,M=h*m,A=h*v;t[0]=g+A*f,t[4]=M*f-S,t[8]=u*h,t[1]=u*v,t[5]=u*m,t[9]=-f,t[2]=S*f-M,t[6]=A+g*f,t[10]=u*d}else if(e.order==="ZXY"){const g=d*m,S=d*v,M=h*m,A=h*v;t[0]=g-A*f,t[4]=-u*v,t[8]=M+S*f,t[1]=S+M*f,t[5]=u*m,t[9]=A-g*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const g=u*m,S=u*v,M=f*m,A=f*v;t[0]=d*m,t[4]=M*h-S,t[8]=g*h+A,t[1]=d*v,t[5]=A*h+g,t[9]=S*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,S=u*h,M=f*d,A=f*h;t[0]=d*m,t[4]=A-g*v,t[8]=M*v+S,t[1]=v,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=S*v+M,t[10]=g-A*v}else if(e.order==="XZY"){const g=u*d,S=u*h,M=f*d,A=f*h;t[0]=d*m,t[4]=-v,t[8]=h*m,t[1]=g*v+A,t[5]=u*m,t[9]=S*v-M,t[2]=M*v-S,t[6]=f*m,t[10]=A*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yC,e,SC)}lookAt(e,t,r){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),zr.crossVectors(r,Kn),zr.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),zr.crossVectors(r,Kn)),zr.normalize(),au.crossVectors(Kn,zr),o[0]=zr.x,o[4]=au.x,o[8]=Kn.x,o[1]=zr.y,o[5]=au.y,o[9]=Kn.y,o[2]=zr.z,o[6]=au.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],h=r[12],m=r[1],v=r[5],g=r[9],S=r[13],M=r[2],A=r[6],x=r[10],y=r[14],R=r[3],b=r[7],P=r[11],N=r[15],F=o[0],B=o[4],T=o[8],D=o[12],q=o[1],O=o[5],K=o[9],J=o[13],oe=o[2],$=o[6],Q=o[10],W=o[14],j=o[3],te=o[7],ue=o[11],U=o[15];return l[0]=u*F+f*q+d*oe+h*j,l[4]=u*B+f*O+d*$+h*te,l[8]=u*T+f*K+d*Q+h*ue,l[12]=u*D+f*J+d*W+h*U,l[1]=m*F+v*q+g*oe+S*j,l[5]=m*B+v*O+g*$+S*te,l[9]=m*T+v*K+g*Q+S*ue,l[13]=m*D+v*J+g*W+S*U,l[2]=M*F+A*q+x*oe+y*j,l[6]=M*B+A*O+x*$+y*te,l[10]=M*T+A*K+x*Q+y*ue,l[14]=M*D+A*J+x*W+y*U,l[3]=R*F+b*q+P*oe+N*j,l[7]=R*B+b*O+P*$+N*te,l[11]=R*T+b*K+P*Q+N*ue,l[15]=R*D+b*J+P*W+N*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],v=e[6],g=e[10],S=e[14],M=e[3],A=e[7],x=e[11],y=e[15],R=d*S-h*g,b=f*S-h*v,P=f*g-d*v,N=u*S-h*m,F=u*g-d*m,B=u*v-f*m;return t*(A*R-x*b+y*P)-r*(M*R-x*N+y*F)+o*(M*b-A*N+y*B)-l*(M*P-A*F+x*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=e[9],g=e[10],S=e[11],M=e[12],A=e[13],x=e[14],y=e[15],R=t*f-r*u,b=t*d-o*u,P=t*h-l*u,N=r*d-o*f,F=r*h-l*f,B=o*h-l*d,T=m*A-v*M,D=m*x-g*M,q=m*y-S*M,O=v*x-g*A,K=v*y-S*A,J=g*y-S*x,oe=R*J-b*K+P*O+N*q-F*D+B*T;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/oe;return e[0]=(f*J-d*K+h*O)*$,e[1]=(o*K-r*J-l*O)*$,e[2]=(A*B-x*F+y*N)*$,e[3]=(g*F-v*B-S*N)*$,e[4]=(d*q-u*J-h*D)*$,e[5]=(t*J-o*q+l*D)*$,e[6]=(x*P-M*B-y*b)*$,e[7]=(m*B-g*P+S*b)*$,e[8]=(u*K-f*q+h*T)*$,e[9]=(r*q-t*K-l*T)*$,e[10]=(M*F-A*P+y*R)*$,e[11]=(v*P-m*F-S*R)*$,e[12]=(f*D-u*O-d*T)*$,e[13]=(t*O-r*D+o*T)*$,e[14]=(A*b-M*N-x*R)*$,e[15]=(m*N-v*b+g*R)*$,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,h=l*u,m=l*f;return this.set(h*u+r,h*f-o*d,h*d+o*f,0,h*f+o*d,m*f+r,m*d-o*u,0,h*d-o*f,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,m=u+u,v=f+f,g=l*h,S=l*m,M=l*v,A=u*m,x=u*v,y=f*v,R=d*h,b=d*m,P=d*v,N=r.x,F=r.y,B=r.z;return o[0]=(1-(A+y))*N,o[1]=(S+P)*N,o[2]=(M-b)*N,o[3]=0,o[4]=(S-P)*F,o[5]=(1-(g+y))*F,o[6]=(x+R)*F,o[7]=0,o[8]=(M+b)*B,o[9]=(x-R)*B,o[10]=(1-(g+A))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=oo.set(o[0],o[1],o[2]).length();const f=oo.set(o[4],o[5],o[6]).length(),d=oo.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Si.copy(this);const h=1/u,m=1/f,v=1/d;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=m,Si.elements[5]*=m,Si.elements[6]*=m,Si.elements[8]*=v,Si.elements[9]*=v,Si.elements[10]*=v,t.setFromRotationMatrix(Si),r.x=u,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,u,f=Hi,d=!1){const h=this.elements,m=2*l/(t-e),v=2*l/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let M,A;if(d)M=l/(u-l),A=u*l/(u-l);else if(f===Hi)M=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(f===Ju)M=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Hi,d=!1){const h=this.elements,m=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let M,A;if(d)M=1/(u-l),A=u/(u-l);else if(f===Hi)M=-2/(u-l),A=-(u+l)/(u-l);else if(f===Ju)M=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const oo=new ae,Si=new rn,yC=new ae(0,0,0),SC=new ae(1,1,1),zr=new ae,au=new ae,Kn=new ae,Wv=new rn,Xv=new Fo;class _r{constructor(e=0,t=0,r=0,o=_r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],d=o[1],h=o[5],m=o[9],v=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xv.setFromEuler(this),this.setFromQuaternion(Xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_r.DEFAULT_ORDER="XYZ";class Dy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MC=0;const jv=new ae,ao=new Fo,or=new rn,lu=new ae,ya=new ae,EC=new ae,TC=new Fo,Yv=new ae(1,0,0),qv=new ae(0,1,0),Kv=new ae(0,0,1),$v={type:"added"},wC={type:"removed"},lo={type:"childadded",child:null},xd={type:"childremoved",child:null};class Qn extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MC++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new ae,t=new _r,r=new Fo,o=new ae(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new rn},normalMatrix:{value:new ht}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(Yv,e)}rotateY(e){return this.rotateOnAxis(qv,e)}rotateZ(e){return this.rotateOnAxis(Kv,e)}translateOnAxis(e,t){return jv.copy(e).applyQuaternion(this.quaternion),this.position.add(jv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yv,e)}translateY(e){return this.translateOnAxis(qv,e)}translateZ(e){return this.translateOnAxis(Kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?lu.copy(e):lu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(ya,lu,this.up):or.lookAt(lu,ya,this.up),this.quaternion.setFromRotationMatrix(or),o&&(or.extractRotation(o.matrixWorld),ao.setFromRotationMatrix(or),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($v),lo.child=e,this.dispatchEvent(lo),lo.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wC),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($v),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,EC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,TC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Qn.DEFAULT_UP=new ae(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class uu extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AC={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,r),y=this._getHandJoint(h,A);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=m.position.distanceTo(v.position),S=.02,M=.005;h.inputState.pinching&&g>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(AC)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new uu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Ly={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},cu={h:0,s:0,l:0};function Sd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=hC(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Sd(u,l,e+1/3),this.g=Sd(u,l,e),this.b=Sd(u,l,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,t=ui){function r(l){l!==void 0&&parseFloat(l)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const r=Ly[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return wt.workingToColorSpace(Tn.copy(this),e),Math.round(xt(Tn.r*255,0,255))*65536+Math.round(xt(Tn.g*255,0,255))*256+Math.round(xt(Tn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Tn.copy(this),t);const r=Tn.r,o=Tn.g,l=Tn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=m<=.5?v/(u+f):v/(2-u-f),u){case r:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-r)/v+2;break;case l:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ui){wt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,r=Tn.g,o=Tn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(cu);const r=pd(Hr.h,cu.h,t),o=pd(Hr.s,cu.s,t),l=pd(Hr.l,cu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Nt;Nt.NAMES=Ly;class CC extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new ae,ar=new ae,Md=new ae,lr=new ae,uo=new ae,co=new ae,Zv=new ae,Ed=new ae,Td=new ae,wd=new ae,Ad=new Jt,Cd=new Jt,Rd=new Jt;class Ci{constructor(e=new ae,t=new ae,r=new ae){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),ar.subVectors(r,t),Md.subVectors(e,t);const u=Mi.dot(Mi),f=Mi.dot(ar),d=Mi.dot(Md),h=ar.dot(ar),m=ar.dot(Md),v=u*h-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,S=(h*d-f*m)*g,M=(u*m-f*d)*g;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,r,o,l,u,f,d){return this.getBarycoord(e,t,r,o,lr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,lr.x),d.addScaledVector(u,lr.y),d.addScaledVector(f,lr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return Ad.setScalar(0),Cd.setScalar(0),Rd.setScalar(0),Ad.fromBufferAttribute(e,t),Cd.fromBufferAttribute(e,r),Rd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ad,l.x),u.addScaledVector(Cd,l.y),u.addScaledVector(Rd,l.z),u}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),ar.subVectors(e,t),Mi.cross(ar).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Mi.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ci.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;uo.subVectors(o,r),co.subVectors(l,r),Ed.subVectors(e,r);const d=uo.dot(Ed),h=co.dot(Ed);if(d<=0&&h<=0)return t.copy(r);Td.subVectors(e,o);const m=uo.dot(Td),v=co.dot(Td);if(m>=0&&v<=m)return t.copy(o);const g=d*v-m*h;if(g<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(uo,u);wd.subVectors(e,l);const S=uo.dot(wd),M=co.dot(wd);if(M>=0&&S<=M)return t.copy(l);const A=S*h-d*M;if(A<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(co,f);const x=m*M-S*v;if(x<=0&&v-m>=0&&S-M>=0)return Zv.subVectors(l,o),f=(v-m)/(v-m+(S-M)),t.copy(o).addScaledVector(Zv,f);const y=1/(x+A+g);return u=A*y,f=g*y,t.copy(r).addScaledVector(uo,u).addScaledVector(co,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xa{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(l,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fu.copy(r.boundingBox)),fu.applyMatrix4(e.matrixWorld),this.union(fu)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),du.subVectors(this.max,Sa),fo.subVectors(e.a,Sa),ho.subVectors(e.b,Sa),po.subVectors(e.c,Sa),Gr.subVectors(ho,fo),Wr.subVectors(po,ho),vs.subVectors(fo,po);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-vs.z,vs.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,vs.z,0,-vs.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-vs.y,vs.x,0];return!Pd(t,fo,ho,po,du)||(t=[1,0,0,0,1,0,0,0,1],!Pd(t,fo,ho,po,du))?!1:(hu.crossVectors(Gr,Wr),t=[hu.x,hu.y,hu.z],Pd(t,fo,ho,po,du))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ur=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Ei=new ae,fu=new Xa,fo=new ae,ho=new ae,po=new ae,Gr=new ae,Wr=new ae,vs=new ae,Sa=new ae,du=new ae,hu=new ae,_s=new ae;function Pd(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){_s.fromArray(n,l);const f=o.x*Math.abs(_s.x)+o.y*Math.abs(_s.y)+o.z*Math.abs(_s.z),d=e.dot(_s),h=t.dot(_s),m=r.dot(_s);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const tn=new ae,pu=new Pt;let RC=0;class ji{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ov,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)pu.fromBufferAttribute(this,t),pu.applyMatrix3(e),this.setXY(t,pu.x,pu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=xa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array),l=Hn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ov&&(e.usage=this.usage),e}}class Iy extends ji{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ny extends ji{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class mr extends ji{constructor(e,t,r){super(new Float32Array(e),t,r)}}const PC=new Xa,Ma=new ae,bd=new ae;class Gp{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):PC.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const t=Ma.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ma,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(bd)),this.expandByPoint(Ma.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bC=0;const li=new rn,Dd=new Qn,mo=new ae,$n=new Xa,Ea=new Xa,hn=new ae;class xr extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bC++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uC(e)?Ny:Iy)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,r){return li.makeTranslation(e,t,r),this.applyMatrix4(li),this}scale(e,t,r){return li.makeScale(e,t,r),this.applyMatrix4(li),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new mr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Ea.setFromBufferAttribute(f),this.morphTargetsRelative?(hn.addVectors($n.min,Ea.min),$n.expandByPoint(hn),hn.addVectors($n.max,Ea.max),$n.expandByPoint(hn)):($n.expandByPoint(Ea.min),$n.expandByPoint(Ea.max))}$n.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)hn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(hn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)hn.fromBufferAttribute(f,h),d&&(mo.fromBufferAttribute(e,h),hn.add(mo)),o=Math.max(o,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let T=0;T<r.count;T++)f[T]=new ae,d[T]=new ae;const h=new ae,m=new ae,v=new ae,g=new Pt,S=new Pt,M=new Pt,A=new ae,x=new ae;function y(T,D,q){h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,D),v.fromBufferAttribute(r,q),g.fromBufferAttribute(l,T),S.fromBufferAttribute(l,D),M.fromBufferAttribute(l,q),m.sub(h),v.sub(h),S.sub(g),M.sub(g);const O=1/(S.x*M.y-M.x*S.y);isFinite(O)&&(A.copy(m).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(O),x.copy(v).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(O),f[T].add(A),f[D].add(A),f[q].add(A),d[T].add(x),d[D].add(x),d[q].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,D=R.length;T<D;++T){const q=R[T],O=q.start,K=q.count;for(let J=O,oe=O+K;J<oe;J+=3)y(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const b=new ae,P=new ae,N=new ae,F=new ae;function B(T){N.fromBufferAttribute(o,T),F.copy(N);const D=f[T];b.copy(D),b.sub(N.multiplyScalar(N.dot(D))).normalize(),P.crossVectors(F,D);const O=P.dot(d[T])<0?-1:1;u.setXYZW(T,b.x,b.y,b.z,O)}for(let T=0,D=R.length;T<D;++T){const q=R[T],O=q.start,K=q.count;for(let J=O,oe=O+K;J<oe;J+=3)B(e.getX(J+0)),B(e.getX(J+1)),B(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ji(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new ae,l=new ae,u=new ae,f=new ae,d=new ae,h=new ae,m=new ae,v=new ae;if(e)for(let g=0,S=e.count;g<S;g+=3){const M=e.getX(g+0),A=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,x),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,x),f.add(m),d.add(m),h.add(m),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),r.setXYZ(g+0,m.x,m.y,m.z),r.setXYZ(g+1,m.x,m.y,m.z),r.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,v=f.normalized,g=new h.constructor(d.length*m);let S=0,M=0;for(let A=0,x=d.length;A<x;A++){f.isInterleavedBufferAttribute?S=d[A]*f.data.stride+f.offset:S=d[A]*m;for(let y=0;y<m;y++)g[M++]=h[S++]}return new ji(g,m,v)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xr,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,v=h.length;m<v;m++){const g=h[m],S=e(g,r);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,g=h.length;v<g;v++){const S=h[v];m.push(S.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],v=l[h];for(let g=0,S=v.length;g<S;g++)m.push(v[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let DC=0;class ac extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DC++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=Eo,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=ph,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(r.blending=this.blending),this.side!==Jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hh&&(r.blendSrc=this.blendSrc),this.blendDst!==ph&&(r.blendDst=this.blendDst),this.blendEquation!==ws&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ro&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ro&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ro&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const cr=new ae,Ld=new ae,mu=new ae,Xr=new ae,Id=new ae,gu=new ae,Nd=new ae;class LC{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ld.copy(e).add(t).multiplyScalar(.5),mu.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Ld);const l=e.distanceTo(t)*.5,u=-this.direction.dot(mu),f=Xr.dot(this.direction),d=-Xr.dot(mu),h=Xr.lengthSq(),m=Math.abs(1-u*u);let v,g,S,M;if(m>0)if(v=u*d-f,g=u*f-d,M=l*m,v>=0)if(g>=-M)if(g<=M){const A=1/m;v*=A,g*=A,S=v*(v+u*g+2*f)+g*(u*v+g+2*d)+h}else g=l,v=Math.max(0,-(u*g+f)),S=-v*v+g*(g+2*d)+h;else g=-l,v=Math.max(0,-(u*g+f)),S=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-u*l+f)),g=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-l,-d),l),S=g*(g+2*d)+h):(v=Math.max(0,-(u*l+f)),g=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+g*(g+2*d)+h);else g=u>0?-l:l,v=Math.max(0,-(u*g+f)),S=-v*v+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Ld).addScaledVector(mu,g),S}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const r=cr.dot(this.direction),o=cr.dot(cr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),m>=0?(l=(e.min.y-g.y)*m,u=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,u=(e.min.y-g.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(f=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,r,o,l){Id.subVectors(t,e),gu.subVectors(r,e),Nd.crossVectors(Id,gu);let u=this.direction.dot(Nd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Xr.subVectors(this.origin,e);const d=f*this.direction.dot(gu.crossVectors(Xr,gu));if(d<0)return null;const h=f*this.direction.dot(Id.cross(Xr));if(h<0||d+h>u)return null;const m=-f*Xr.dot(Nd);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Uy extends ac{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=hy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qv=new rn,xs=new LC,vu=new Gp,Jv=new ae,_u=new ae,xu=new ae,yu=new ae,Ud=new ae,Su=new ae,e_=new ae,Mu=new ae;class Ki extends Qn{constructor(e=new xr,t=new Uy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Su.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],v=l[d];m!==0&&(Ud.fromBufferAttribute(v,e),u?Su.addScaledVector(Ud,m):Su.addScaledVector(Ud.sub(t),m))}t.add(Su)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vu.copy(r.boundingSphere),vu.applyMatrix4(l),xs.copy(e.ray).recast(e.near),!(vu.containsPoint(xs.origin)===!1&&(xs.intersectSphere(vu,Jv)===null||xs.origin.distanceToSquared(Jv)>(e.far-e.near)**2))&&(Qv.copy(l).invert(),xs.copy(e.ray).applyMatrix4(Qv),!(r.boundingBox!==null&&xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,A=g.length;M<A;M++){const x=g[M],y=u[x.materialIndex],R=Math.max(x.start,S.start),b=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let P=R,N=b;P<N;P+=3){const F=f.getX(P),B=f.getX(P+1),T=f.getX(P+2);o=Eu(this,y,e,r,h,m,v,F,B,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let x=M,y=A;x<y;x+=3){const R=f.getX(x),b=f.getX(x+1),P=f.getX(x+2);o=Eu(this,u,e,r,h,m,v,R,b,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,A=g.length;M<A;M++){const x=g[M],y=u[x.materialIndex],R=Math.max(x.start,S.start),b=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let P=R,N=b;P<N;P+=3){const F=P,B=P+1,T=P+2;o=Eu(this,y,e,r,h,m,v,F,B,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let x=M,y=A;x<y;x+=3){const R=x,b=x+1,P=x+2;o=Eu(this,u,e,r,h,m,v,R,b,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function IC(n,e,t,r,o,l,u,f){let d;if(e.side===Gn?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,e.side===Jr,f),d===null)return null;Mu.copy(f),Mu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Mu);return h<t.near||h>t.far?null:{distance:h,point:Mu.clone(),object:n}}function Eu(n,e,t,r,o,l,u,f,d,h){n.getVertexPosition(f,_u),n.getVertexPosition(d,xu),n.getVertexPosition(h,yu);const m=IC(n,e,t,r,_u,xu,yu,e_);if(m){const v=new ae;Ci.getBarycoord(e_,_u,xu,yu,v),o&&(m.uv=Ci.getInterpolatedAttribute(o,f,d,h,v,new Pt)),l&&(m.uv1=Ci.getInterpolatedAttribute(l,f,d,h,v,new Pt)),u&&(m.normal=Ci.getInterpolatedAttribute(u,f,d,h,v,new ae),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:d,c:h,normal:new ae,materialIndex:0};Ci.getNormal(_u,xu,yu,g.normal),m.face=g,m.barycoord=v}return m}class NC extends In{constructor(e=null,t=1,r=1,o,l,u,f,d,h=_n,m=_n,v,g){super(null,u,f,d,h,m,o,l,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fd=new ae,UC=new ae,FC=new ht;class Ts{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Fd.subVectors(r,t).cross(UC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Fd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||FC.getNormalMatrix(e),o=this.coplanarPoint(Fd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Gp,OC=new Pt(.5,.5),Tu=new ae;class Fy{constructor(e=new Ts,t=new Ts,r=new Ts,o=new Ts,l=new Ts,u=new Ts){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Hi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],h=l[3],m=l[4],v=l[5],g=l[6],S=l[7],M=l[8],A=l[9],x=l[10],y=l[11],R=l[12],b=l[13],P=l[14],N=l[15];if(o[0].setComponents(h-u,S-m,y-M,N-R).normalize(),o[1].setComponents(h+u,S+m,y+M,N+R).normalize(),o[2].setComponents(h+f,S+v,y+A,N+b).normalize(),o[3].setComponents(h-f,S-v,y-A,N-b).normalize(),r)o[4].setComponents(d,g,x,P).normalize(),o[5].setComponents(h-d,S-g,y-x,N-P).normalize();else if(o[4].setComponents(h-d,S-g,y-x,N-P).normalize(),t===Hi)o[5].setComponents(h+d,S+g,y+x,N+P).normalize();else if(t===Ju)o[5].setComponents(d,g,x,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const t=OC.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Tu.x=o.normal.x>0?e.max.x:e.min.x,Tu.y=o.normal.y>0?e.max.y:e.min.y,Tu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Tu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Oy extends In{constructor(e=[],t=Is,r,o,l,u,f,d,h,m){super(e,t,r,o,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ka extends In{constructor(e,t,r=qi,o,l,u,f=_n,d=_n,h,m=vr,v=1){if(m!==vr&&m!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,l,u,f,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class BC extends ka{constructor(e,t=qi,r=Is,o,l,u=_n,f=_n,d,h=vr){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,t,r,o,l,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class By extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ja extends xr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],v=[];let g=0,S=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new mr(h,3)),this.setAttribute("normal",new mr(m,3)),this.setAttribute("uv",new mr(v,2));function M(A,x,y,R,b,P,N,F,B,T,D){const q=P/B,O=N/T,K=P/2,J=N/2,oe=F/2,$=B+1,Q=T+1;let W=0,j=0;const te=new ae;for(let ue=0;ue<Q;ue++){const U=ue*O-J;for(let Y=0;Y<$;Y++){const Ae=Y*q-K;te[A]=Ae*R,te[x]=U*b,te[y]=oe,h.push(te.x,te.y,te.z),te[A]=0,te[x]=0,te[y]=F>0?1:-1,m.push(te.x,te.y,te.z),v.push(Y/B),v.push(1-ue/T),W+=1}}for(let ue=0;ue<T;ue++)for(let U=0;U<B;U++){const Y=g+U+$*ue,Ae=g+U+$*(ue+1),Xe=g+(U+1)+$*(ue+1),Ze=g+(U+1)+$*ue;d.push(Y,Ae,Ze),d.push(Ae,Xe,Ze),j+=6}f.addGroup(S,j,D),S+=j,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ya extends xr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,m=d+1,v=e/f,g=t/d,S=[],M=[],A=[],x=[];for(let y=0;y<m;y++){const R=y*g-u;for(let b=0;b<h;b++){const P=b*v-l;M.push(P,-R,0),A.push(0,0,1),x.push(b/f),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let R=0;R<f;R++){const b=R+h*y,P=R+h*(y+1),N=R+1+h*(y+1),F=R+1+h*y;S.push(b,P,F),S.push(P,N,F)}this.setIndex(S),this.setAttribute("position",new mr(M,3)),this.setAttribute("normal",new mr(A,3)),this.setAttribute("uv",new mr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.widthSegments,e.heightSegments)}}function Do(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function bn(n){const e={};for(let t=0;t<n.length;t++){const r=Do(n[t]);for(const o in r)e[o]=r[o]}return e}function kC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ky(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const VC={clone:Do,merge:bn};var zC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends ac{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zC,this.fragmentShader=HC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=kC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class GC extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class WC extends ac{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XC extends ac{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wu=new ae,Au=new Fo,Fi=new ae;class Vy extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wu,Au,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Au,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(wu,Au,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Au,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jr=new ae,t_=new Pt,n_=new Pt;class Ai extends Vy{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,t){return this.getViewBounds(e,t_,n_),t.subVectors(n_,t_)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wp extends Vy{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const go=-90,vo=1;class jC extends Qn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ai(go,vo,e,t);o.layers=this.layers,this.add(o);const l=new Ai(go,vo,e,t);l.layers=this.layers,this.add(l);const u=new Ai(go,vo,e,t);u.layers=this.layers,this.add(u);const f=new Ai(go,vo,e,t);f.layers=this.layers,this.add(f);const d=new Ai(go,vo,e,t);d.layers=this.layers,this.add(d);const h=new Ai(go,vo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ju)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(v,g,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class YC extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ut("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function i_(n,e,t,r){const o=KC(r);switch(t){case Ay:return n*e;case Ry:return n*e/o.components*o.byteLength;case Op:return n*e/o.components*o.byteLength;case Po:return n*e*2/o.components*o.byteLength;case Bp:return n*e*2/o.components*o.byteLength;case Cy:return n*e*3/o.components*o.byteLength;case Ri:return n*e*4/o.components*o.byteLength;case kp:return n*e*4/o.components*o.byteLength;case Bu:case ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vu:case zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wh:case Ch:return Math.max(n,16)*Math.max(e,8)/4;case Th:case Ah:return Math.max(n,8)*Math.max(e,8)/2;case Rh:case Ph:case Dh:case Lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bh:case Ih:case Nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kh:case $h:case Zh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qh:case Jh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KC(n){switch(n){case ci:case My:return{byteLength:1,components:1};case Oa:case Ey:case gr:return{byteLength:2,components:1};case Up:case Fp:return{byteLength:2,components:4};case qi:case Np:case zi:return{byteLength:4,components:1};case Ty:case wy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zy(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function $C(n){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,m),f.onUploadCallback();let S;if(h instanceof Float32Array)S=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=n.HALF_FLOAT:S=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=n.SHORT;else if(h instanceof Uint32Array)S=n.UNSIGNED_INT;else if(h instanceof Int32Array)S=n.INT;else if(h instanceof Int8Array)S=n.BYTE;else if(h instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,d,h){const m=d.array,v=d.updateRanges;if(n.bindBuffer(h,f),v.length===0)n.bufferSubData(h,0,m);else{v.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<v.length;S++){const M=v[g],A=v[S];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,v[g]=A)}v.length=g+1;for(let S=0,M=v.length;S<M;S++){const A=v[S];n.bufferSubData(h,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:u}}var ZC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,oR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_R=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ER=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CR="gl_FragColor = linearToOutputTexel( gl_FragColor );",RR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$R=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_P=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,AP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,IP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $P=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ib=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_b=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:ZC,alphahash_pars_fragment:QC,alphamap_fragment:JC,alphamap_pars_fragment:eR,alphatest_fragment:tR,alphatest_pars_fragment:nR,aomap_fragment:iR,aomap_pars_fragment:rR,batching_pars_vertex:sR,batching_vertex:oR,begin_vertex:aR,beginnormal_vertex:lR,bsdfs:uR,iridescence_fragment:cR,bumpmap_pars_fragment:fR,clipping_planes_fragment:dR,clipping_planes_pars_fragment:hR,clipping_planes_pars_vertex:pR,clipping_planes_vertex:mR,color_fragment:gR,color_pars_fragment:vR,color_pars_vertex:_R,color_vertex:xR,common:yR,cube_uv_reflection_fragment:SR,defaultnormal_vertex:MR,displacementmap_pars_vertex:ER,displacementmap_vertex:TR,emissivemap_fragment:wR,emissivemap_pars_fragment:AR,colorspace_fragment:CR,colorspace_pars_fragment:RR,envmap_fragment:PR,envmap_common_pars_fragment:bR,envmap_pars_fragment:DR,envmap_pars_vertex:LR,envmap_physical_pars_fragment:GR,envmap_vertex:IR,fog_vertex:NR,fog_pars_vertex:UR,fog_fragment:FR,fog_pars_fragment:OR,gradientmap_pars_fragment:BR,lightmap_pars_fragment:kR,lights_lambert_fragment:VR,lights_lambert_pars_fragment:zR,lights_pars_begin:HR,lights_toon_fragment:WR,lights_toon_pars_fragment:XR,lights_phong_fragment:jR,lights_phong_pars_fragment:YR,lights_physical_fragment:qR,lights_physical_pars_fragment:KR,lights_fragment_begin:$R,lights_fragment_maps:ZR,lights_fragment_end:QR,logdepthbuf_fragment:JR,logdepthbuf_pars_fragment:eP,logdepthbuf_pars_vertex:tP,logdepthbuf_vertex:nP,map_fragment:iP,map_pars_fragment:rP,map_particle_fragment:sP,map_particle_pars_fragment:oP,metalnessmap_fragment:aP,metalnessmap_pars_fragment:lP,morphinstance_vertex:uP,morphcolor_vertex:cP,morphnormal_vertex:fP,morphtarget_pars_vertex:dP,morphtarget_vertex:hP,normal_fragment_begin:pP,normal_fragment_maps:mP,normal_pars_fragment:gP,normal_pars_vertex:vP,normal_vertex:_P,normalmap_pars_fragment:xP,clearcoat_normal_fragment_begin:yP,clearcoat_normal_fragment_maps:SP,clearcoat_pars_fragment:MP,iridescence_pars_fragment:EP,opaque_fragment:TP,packing:wP,premultiplied_alpha_fragment:AP,project_vertex:CP,dithering_fragment:RP,dithering_pars_fragment:PP,roughnessmap_fragment:bP,roughnessmap_pars_fragment:DP,shadowmap_pars_fragment:LP,shadowmap_pars_vertex:IP,shadowmap_vertex:NP,shadowmask_pars_fragment:UP,skinbase_vertex:FP,skinning_pars_vertex:OP,skinning_vertex:BP,skinnormal_vertex:kP,specularmap_fragment:VP,specularmap_pars_fragment:zP,tonemapping_fragment:HP,tonemapping_pars_fragment:GP,transmission_fragment:WP,transmission_pars_fragment:XP,uv_pars_fragment:jP,uv_pars_vertex:YP,uv_vertex:qP,worldpos_vertex:KP,background_vert:$P,background_frag:ZP,backgroundCube_vert:QP,backgroundCube_frag:JP,cube_vert:eb,cube_frag:tb,depth_vert:nb,depth_frag:ib,distance_vert:rb,distance_frag:sb,equirect_vert:ob,equirect_frag:ab,linedashed_vert:lb,linedashed_frag:ub,meshbasic_vert:cb,meshbasic_frag:fb,meshlambert_vert:db,meshlambert_frag:hb,meshmatcap_vert:pb,meshmatcap_frag:mb,meshnormal_vert:gb,meshnormal_frag:vb,meshphong_vert:_b,meshphong_frag:xb,meshphysical_vert:yb,meshphysical_frag:Sb,meshtoon_vert:Mb,meshtoon_frag:Eb,points_vert:Tb,points_frag:wb,shadow_vert:Ab,shadow_frag:Cb,sprite_vert:Rb,sprite_frag:Pb},Pe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Vi={basic:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:bn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:bn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:bn([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:bn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:bn([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:bn([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:bn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:bn([Pe.lights,Pe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Vi.physical={uniforms:bn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Cu={r:0,b:0,g:0},Ss=new _r,bb=new rn;function Db(n,e,t,r,o,l){const u=new Nt(0);let f=o===!0?0:1,d,h,m=null,v=0,g=null;function S(R){let b=R.isScene===!0?R.background:null;if(b&&b.isTexture){const P=R.backgroundBlurriness>0;b=e.get(b,P)}return b}function M(R){let b=!1;const P=S(R);P===null?x(u,f):P&&P.isColor&&(x(P,1),b=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(R,b){const P=S(b);P&&(P.isCubeTexture||P.mapping===oc)?(h===void 0&&(h=new Ki(new ja(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Do(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,F,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ss.copy(b.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bb.makeRotationFromEuler(Ss)),h.material.toneMapped=wt.getTransfer(P.colorSpace)!==It,(m!==P||v!==P.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,m=P,v=P.version,g=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new Ki(new Ya(2,2),new bi({name:"BackgroundMaterial",uniforms:Do(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=wt.getTransfer(P.colorSpace)!==It,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||v!==P.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,m=P,v=P.version,g=n.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function x(R,b){R.getRGB(Cu,ky(n)),t.buffers.color.setClear(Cu.r,Cu.g,Cu.b,b,l)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,b=1){u.set(R),f=b,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,x(u,f)},render:M,addToRenderList:A,dispose:y}}function Lb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(O,K,J,oe,$){let Q=!1;const W=v(O,oe,J,K);l!==W&&(l=W,h(l.object)),Q=S(O,oe,J,$),Q&&M(O,oe,J,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,P(O,K,J,oe),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function d(){return n.createVertexArray()}function h(O){return n.bindVertexArray(O)}function m(O){return n.deleteVertexArray(O)}function v(O,K,J,oe){const $=oe.wireframe===!0;let Q=r[K.id];Q===void 0&&(Q={},r[K.id]=Q);const W=O.isInstancedMesh===!0?O.id:0;let j=Q[W];j===void 0&&(j={},Q[W]=j);let te=j[J.id];te===void 0&&(te={},j[J.id]=te);let ue=te[$];return ue===void 0&&(ue=g(d()),te[$]=ue),ue}function g(O){const K=[],J=[],oe=[];for(let $=0;$<t;$++)K[$]=0,J[$]=0,oe[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:J,attributeDivisors:oe,object:O,attributes:{},index:null}}function S(O,K,J,oe){const $=l.attributes,Q=K.attributes;let W=0;const j=J.getAttributes();for(const te in j)if(j[te].location>=0){const U=$[te];let Y=Q[te];if(Y===void 0&&(te==="instanceMatrix"&&O.instanceMatrix&&(Y=O.instanceMatrix),te==="instanceColor"&&O.instanceColor&&(Y=O.instanceColor)),U===void 0||U.attribute!==Y||Y&&U.data!==Y.data)return!0;W++}return l.attributesNum!==W||l.index!==oe}function M(O,K,J,oe){const $={},Q=K.attributes;let W=0;const j=J.getAttributes();for(const te in j)if(j[te].location>=0){let U=Q[te];U===void 0&&(te==="instanceMatrix"&&O.instanceMatrix&&(U=O.instanceMatrix),te==="instanceColor"&&O.instanceColor&&(U=O.instanceColor));const Y={};Y.attribute=U,U&&U.data&&(Y.data=U.data),$[te]=Y,W++}l.attributes=$,l.attributesNum=W,l.index=oe}function A(){const O=l.newAttributes;for(let K=0,J=O.length;K<J;K++)O[K]=0}function x(O){y(O,0)}function y(O,K){const J=l.newAttributes,oe=l.enabledAttributes,$=l.attributeDivisors;J[O]=1,oe[O]===0&&(n.enableVertexAttribArray(O),oe[O]=1),$[O]!==K&&(n.vertexAttribDivisor(O,K),$[O]=K)}function R(){const O=l.newAttributes,K=l.enabledAttributes;for(let J=0,oe=K.length;J<oe;J++)K[J]!==O[J]&&(n.disableVertexAttribArray(J),K[J]=0)}function b(O,K,J,oe,$,Q,W){W===!0?n.vertexAttribIPointer(O,K,J,$,Q):n.vertexAttribPointer(O,K,J,oe,$,Q)}function P(O,K,J,oe){A();const $=oe.attributes,Q=J.getAttributes(),W=K.defaultAttributeValues;for(const j in Q){const te=Q[j];if(te.location>=0){let ue=$[j];if(ue===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ue!==void 0){const U=ue.normalized,Y=ue.itemSize,Ae=e.get(ue);if(Ae===void 0)continue;const Xe=Ae.buffer,Ze=Ae.type,re=Ae.bytesPerElement,pe=Ze===n.INT||Ze===n.UNSIGNED_INT||ue.gpuType===Np;if(ue.isInterleavedBufferAttribute){const he=ue.data,Ue=he.stride,He=ue.offset;if(he.isInstancedInterleavedBuffer){for(let it=0;it<te.locationSize;it++)y(te.location+it,he.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let it=0;it<te.locationSize;it++)x(te.location+it);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let it=0;it<te.locationSize;it++)b(te.location+it,Y/te.locationSize,Ze,U,Ue*re,(He+Y/te.locationSize*it)*re,pe)}else{if(ue.isInstancedBufferAttribute){for(let he=0;he<te.locationSize;he++)y(te.location+he,ue.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let he=0;he<te.locationSize;he++)x(te.location+he);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let he=0;he<te.locationSize;he++)b(te.location+he,Y/te.locationSize,Ze,U,Y*re,Y/te.locationSize*he*re,pe)}}else if(W!==void 0){const U=W[j];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(te.location,U);break;case 3:n.vertexAttrib3fv(te.location,U);break;case 4:n.vertexAttrib4fv(te.location,U);break;default:n.vertexAttrib1fv(te.location,U)}}}}R()}function N(){D();for(const O in r){const K=r[O];for(const J in K){const oe=K[J];for(const $ in oe){const Q=oe[$];for(const W in Q)m(Q[W].object),delete Q[W];delete oe[$]}}delete r[O]}}function F(O){if(r[O.id]===void 0)return;const K=r[O.id];for(const J in K){const oe=K[J];for(const $ in oe){const Q=oe[$];for(const W in Q)m(Q[W].object),delete Q[W];delete oe[$]}}delete r[O.id]}function B(O){for(const K in r){const J=r[K];for(const oe in J){const $=J[oe];if($[O.id]===void 0)continue;const Q=$[O.id];for(const W in Q)m(Q[W].object),delete Q[W];delete $[O.id]}}}function T(O){for(const K in r){const J=r[K],oe=O.isInstancedMesh===!0?O.id:0,$=J[oe];if($!==void 0){for(const Q in $){const W=$[Q];for(const j in W)m(W[j].object),delete W[j];delete $[Q]}delete J[oe],Object.keys(J).length===0&&delete r[K]}}}function D(){q(),u=!0,l!==o&&(l=o,h(l.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:D,resetDefaultState:q,dispose:N,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:x,disableUnusedAttributes:R}}function Ib(n,e,t){let r;function o(h){r=h}function l(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,v){v!==0&&(n.drawArraysInstanced(r,h,m,v),t.update(m,r,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,v);let S=0;for(let M=0;M<v;M++)S+=m[M];t.update(S,r,1)}function d(h,m,v,g){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)u(h[M],m[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,m,0,g,0,v);let M=0;for(let A=0;A<v;A++)M+=m[A]*g[A];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Nb(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Ri&&r.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const T=B===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ci&&r.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==zi&&!T)}function d(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(ut("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),F=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:P,maxSamples:N,samples:F}}function Ub(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Ts,f=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||o;return o=g,r=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){t=m(v,g,0)},this.setState=function(v,g,S){const M=v.clippingPlanes,A=v.clipIntersection,x=v.clipShadows,y=n.get(v);if(!o||M===null||M.length===0||l&&!x)l?m(null):h();else{const R=l?0:r,b=R*4;let P=y.clippingState||null;d.value=P,P=m(M,g,b,S);for(let N=0;N!==b;++N)P[N]=t[N];y.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(v,g,S,M){const A=v!==null?v.length:0;let x=null;if(A!==0){if(x=d.value,M!==!0||x===null){const y=S+A*4,R=g.matrixWorldInverse;f.getNormalMatrix(R),(x===null||x.length<y)&&(x=new Float32Array(y));for(let b=0,P=S;b!==A;++b,P+=4)u.copy(v[b]).applyMatrix4(R,f),u.normal.toArray(x,P),x[P+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}const $r=4,r_=[.125,.215,.35,.446,.526,.582],As=20,Fb=256,Ta=new Wp,s_=new Nt;let Od=null,Bd=0,kd=0,Vd=!1;const Ob=new ae;class o_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=Ob}=l;Od=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,Bd,kd),this._renderer.xr.enabled=Vd,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:gr,format:Ri,colorSpace:bo,depthBuffer:!1},o=a_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bb(l)),this._blurMaterial=Vb(l,e,t),this._ggxMaterial=kb(l,e,t)}return o}_compileMaterial(e){const t=new Ki(new xr,e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,r,o,l){const d=new Ai(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(s_),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ki(new ja,new Uy({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,x=A.material;let y=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,y=!0):(x.color.copy(s_),y=!0);for(let b=0;b<6;b++){const P=b%3;P===0?(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[b],l.y,l.z)):P===1?(d.up.set(0,0,h[b]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[b],l.z)):(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[b]));const N=this._cubeSize;_o(o,P*N,b>2?N:0,N,N),v.setRenderTarget(o),y&&v.render(A,d),v.render(e,d)}v.toneMapping=S,v.autoClear=g,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Is||e.mapping===Ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=u_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;_o(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Ta)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),g=0+h*1.25,S=v*g,{_lodMax:M}=this,A=this._sizeLods[r],x=3*A*(r>M-$r?r-M+$r:0),y=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=S,d.mipInt.value=M-t,_o(l,x,y,3*A,2*A),o.setRenderTarget(l),o.render(f,Ta),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=M-r,_o(e,x,y,3*A,2*A),o.setRenderTarget(e),o.render(f,Ta)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const m=3,v=this._lodMeshes[o];v.material=h;const g=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*As-1),A=l/M,x=isFinite(l)?1+Math.floor(m*A):As;x>As&&ut(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${As}`);const y=[];let R=0;for(let B=0;B<As;++B){const T=B/A,D=Math.exp(-T*T/2);y.push(D),B===0?R+=D:B<x&&(R+=2*D)}for(let B=0;B<y.length;B++)y[B]=y[B]/R;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:b}=this;g.dTheta.value=M,g.mipInt.value=b-r;const P=this._sizeLods[o],N=3*P*(o>b-$r?o-b+$r:0),F=4*(this._cubeSize-P);_o(t,N,F,3*P,2*P),d.setRenderTarget(t),d.render(v,Ta)}}function Bb(n){const e=[],t=[],r=[];let o=n;const l=n-$r+1+r_.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let d=1/f;u>n-$r?d=r_[u-n+$r-1]:u===0&&(d=0),t.push(d);const h=1/(f-2),m=-h,v=1+h,g=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,M=6,A=3,x=2,y=1,R=new Float32Array(A*M*S),b=new Float32Array(x*M*S),P=new Float32Array(y*M*S);for(let F=0;F<S;F++){const B=F%3*2/3-1,T=F>2?0:-1,D=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];R.set(D,A*M*F),b.set(g,x*M*F);const q=[F,F,F,F,F,F];P.set(q,y*M*F)}const N=new xr;N.setAttribute("position",new ji(R,A)),N.setAttribute("uv",new ji(b,x)),N.setAttribute("faceIndex",new ji(P,y)),r.push(new Ki(N,null)),o>$r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function a_(n,e,t){const r=new Xi(n,e,t);return r.texture.mapping=oc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _o(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function kb(n,e,t){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Vb(n,e,t){const r=new Float32Array(As),o=new ae(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function l_(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function u_(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Hy extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Oy(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ja(5,5,5),l=new bi({name:"CubemapFromEquirect",uniforms:Do(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:hr});l.uniforms.tEquirect.value=t;const u=new Ki(o,l),f=t.minFilter;return t.minFilter===Ps&&(t.minFilter=wn),new jC(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function zb(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===cd||S===fd)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const A=new Hy(M.height);return A.fromEquirectangularTexture(n,g),e.set(g,A),g.addEventListener("dispose",h),f(A.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,M=S===cd||S===fd,A=S===Is||S===Ro;if(M||A){let x=t.get(g);const y=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new o_(n)),x=M?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const R=g.image;return M&&R&&R.height>0||A&&R&&d(R)?(r===null&&(r=new o_(n)),x=M?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",m),x.texture):null}}}return g}function f(g,S){return S===cd?g.mapping=Is:S===fd&&(g.mapping=Ro),g}function d(g){let S=0;const M=6;for(let A=0;A<M;A++)g[A]!==void 0&&S++;return S===M}function h(g){const S=g.target;S.removeEventListener("dispose",h);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function m(g){const S=g.target;S.removeEventListener("dispose",m);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function Hb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&tc("WebGLRenderer: "+r+" extension not supported."),o}}}function Gb(n,e,t,r){const o={},l=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const S in g)e.update(g[S],n.ARRAY_BUFFER)}function h(v){const g=[],S=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(S!==null){const R=S.array;A=S.version;for(let b=0,P=R.length;b<P;b+=3){const N=R[b+0],F=R[b+1],B=R[b+2];g.push(N,F,F,B,B,N)}}else{const R=M.array;A=M.version;for(let b=0,P=R.length/3-1;b<P;b+=3){const N=b+0,F=b+1,B=b+2;g.push(N,F,F,B,B,N)}}const x=new(M.count>=65535?Ny:Iy)(g,1);x.version=A;const y=l.get(v);y&&e.remove(y),l.set(v,x)}function m(v){const g=l.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function Wb(n,e,t){let r;function o(g){r=g}let l,u;function f(g){l=g.type,u=g.bytesPerElement}function d(g,S){n.drawElements(r,S,l,g*u),t.update(S,r,1)}function h(g,S,M){M!==0&&(n.drawElementsInstanced(r,S,l,g*u,M),t.update(S,r,M))}function m(g,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,g,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];t.update(x,r,1)}function v(g,S,M,A){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<g.length;y++)h(g[y]/u,S[y],A[y]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,g,0,A,0,M);let y=0;for(let R=0;R<M;R++)y+=S[R]*A[R];t.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function Xb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=f*(l/3);break;case n.LINES:t.lines+=f*(l/2);break;case n.LINE_STRIP:t.lines+=f*(l-1);break;case n.LINE_LOOP:t.lines+=f*l;break;case n.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function jb(n,e,t){const r=new WeakMap,o=new Jt;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let g=r.get(f);if(g===void 0||g.count!==v){let q=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",q)};var S=q;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let P=0;M===!0&&(P=1),A===!0&&(P=2),x===!0&&(P=3);let N=f.attributes.position.count*P,F=1;N>e.maxTextureSize&&(F=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const B=new Float32Array(N*F*4*v),T=new by(B,N,F,v);T.type=zi,T.needsUpdate=!0;const D=P*4;for(let O=0;O<v;O++){const K=y[O],J=R[O],oe=b[O],$=N*F*4*O;for(let Q=0;Q<K.count;Q++){const W=Q*D;M===!0&&(o.fromBufferAttribute(K,Q),B[$+W+0]=o.x,B[$+W+1]=o.y,B[$+W+2]=o.z,B[$+W+3]=0),A===!0&&(o.fromBufferAttribute(J,Q),B[$+W+4]=o.x,B[$+W+5]=o.y,B[$+W+6]=o.z,B[$+W+7]=0),x===!0&&(o.fromBufferAttribute(oe,Q),B[$+W+8]=o.x,B[$+W+9]=o.y,B[$+W+10]=o.z,B[$+W+11]=oe.itemSize===4?o.w:1)}}g={count:v,texture:T,size:new Pt(N,F)},r.set(f,g),f.addEventListener("dispose",q)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const A=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:l}}function Yb(n,e,t,r,o){let l=new WeakMap;function u(h){const m=o.render.frame,v=h.geometry,g=e.get(h,v);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==m&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return g}function f(){l=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:u,dispose:f}}const qb={[py]:"LINEAR_TONE_MAPPING",[my]:"REINHARD_TONE_MAPPING",[gy]:"CINEON_TONE_MAPPING",[vy]:"ACES_FILMIC_TONE_MAPPING",[xy]:"AGX_TONE_MAPPING",[yy]:"NEUTRAL_TONE_MAPPING",[_y]:"CUSTOM_TONE_MAPPING"};function Kb(n,e,t,r,o){const l=new Xi(e,t,{type:n,depthBuffer:r,stencilBuffer:o}),u=new Xi(e,t,{type:gr,depthBuffer:!1,stencilBuffer:!1}),f=new xr;f.setAttribute("position",new mr([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new mr([0,2,0,0,2,0],2));const d=new GC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ki(f,d),m=new Wp(-1,1,1,-1,0,1);let v=null,g=null,S=!1,M,A=null,x=[],y=!1;this.setSize=function(R,b){l.setSize(R,b),u.setSize(R,b);for(let P=0;P<x.length;P++){const N=x[P];N.setSize&&N.setSize(R,b)}},this.setEffects=function(R){x=R,y=x.length>0&&x[0].isRenderPass===!0;const b=l.width,P=l.height;for(let N=0;N<x.length;N++){const F=x[N];F.setSize&&F.setSize(b,P)}},this.begin=function(R,b){if(S||R.toneMapping===Wi&&x.length===0)return!1;if(A=b,b!==null){const P=b.width,N=b.height;(l.width!==P||l.height!==N)&&this.setSize(P,N)}return y===!1&&R.setRenderTarget(l),M=R.toneMapping,R.toneMapping=Wi,!0},this.hasRenderPass=function(){return y},this.end=function(R,b){R.toneMapping=M,S=!0;let P=l,N=u;for(let F=0;F<x.length;F++){const B=x[F];if(B.enabled!==!1&&(B.render(R,N,P,b),B.needsSwap!==!1)){const T=P;P=N,N=T}}if(v!==R.outputColorSpace||g!==R.toneMapping){v=R.outputColorSpace,g=R.toneMapping,d.defines={},wt.getTransfer(v)===It&&(d.defines.SRGB_TRANSFER="");const F=qb[g];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(A),R.render(h,m),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),d.dispose()}}const Gy=new In,ip=new ka(1,1),Wy=new by,Xy=new xC,jy=new Oy,c_=[],f_=[],d_=new Float32Array(16),h_=new Float32Array(9),p_=new Float32Array(4);function Oo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=c_[o];if(l===void 0&&(l=new Float32Array(o),c_[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,n[u].toArray(l,f)}return l}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function uc(n,e){let t=f_[e];t===void 0&&(t=new Int32Array(e),f_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function $b(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function Qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function Jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function e3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,r))return;p_.set(r),n.uniformMatrix2fv(this.addr,!1,p_),un(t,r)}}function t3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,r))return;h_.set(r),n.uniformMatrix3fv(this.addr,!1,h_),un(t,r)}}function n3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,r))return;d_.set(r),n.uniformMatrix4fv(this.addr,!1,d_),un(t,r)}}function i3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function r3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function s3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function o3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function a3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function l3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function u3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function c3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function f3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(ip.compareFunction=t.isReversedDepthBuffer()?zp:Vp,l=ip):l=Gy,t.setTexture2D(e||l,o)}function d3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Xy,o)}function h3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||jy,o)}function p3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Wy,o)}function m3(n){switch(n){case 5126:return $b;case 35664:return Zb;case 35665:return Qb;case 35666:return Jb;case 35674:return e3;case 35675:return t3;case 35676:return n3;case 5124:case 35670:return i3;case 35667:case 35671:return r3;case 35668:case 35672:return s3;case 35669:case 35673:return o3;case 5125:return a3;case 36294:return l3;case 36295:return u3;case 36296:return c3;case 35678:case 36198:case 36298:case 36306:case 35682:return f3;case 35679:case 36299:case 36307:return d3;case 35680:case 36300:case 36308:case 36293:return h3;case 36289:case 36303:case 36311:case 36292:return p3}}function g3(n,e){n.uniform1fv(this.addr,e)}function v3(n,e){const t=Oo(e,this.size,2);n.uniform2fv(this.addr,t)}function _3(n,e){const t=Oo(e,this.size,3);n.uniform3fv(this.addr,t)}function x3(n,e){const t=Oo(e,this.size,4);n.uniform4fv(this.addr,t)}function y3(n,e){const t=Oo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function S3(n,e){const t=Oo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function M3(n,e){const t=Oo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function E3(n,e){n.uniform1iv(this.addr,e)}function T3(n,e){n.uniform2iv(this.addr,e)}function w3(n,e){n.uniform3iv(this.addr,e)}function A3(n,e){n.uniform4iv(this.addr,e)}function C3(n,e){n.uniform1uiv(this.addr,e)}function R3(n,e){n.uniform2uiv(this.addr,e)}function P3(n,e){n.uniform3uiv(this.addr,e)}function b3(n,e){n.uniform4uiv(this.addr,e)}function D3(n,e,t){const r=this.cache,o=e.length,l=uc(t,o);ln(r,l)||(n.uniform1iv(this.addr,l),un(r,l));let u;this.type===n.SAMPLER_2D_SHADOW?u=ip:u=Gy;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function L3(n,e,t){const r=this.cache,o=e.length,l=uc(t,o);ln(r,l)||(n.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Xy,l[u])}function I3(n,e,t){const r=this.cache,o=e.length,l=uc(t,o);ln(r,l)||(n.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||jy,l[u])}function N3(n,e,t){const r=this.cache,o=e.length,l=uc(t,o);ln(r,l)||(n.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Wy,l[u])}function U3(n){switch(n){case 5126:return g3;case 35664:return v3;case 35665:return _3;case 35666:return x3;case 35674:return y3;case 35675:return S3;case 35676:return M3;case 5124:case 35670:return E3;case 35667:case 35671:return T3;case 35668:case 35672:return w3;case 35669:case 35673:return A3;case 5125:return C3;case 36294:return R3;case 36295:return P3;case 36296:return b3;case 35678:case 36198:case 36298:case 36306:case 35682:return D3;case 35679:case 36299:case 36307:return L3;case 35680:case 36300:case 36308:case 36293:return I3;case 36289:case 36303:case 36311:case 36292:return N3}}class F3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=m3(t.type)}}class O3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U3(t.type)}}class B3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function m_(n,e){n.seq.push(e),n.map[e.id]=e}function k3(n,e,t){const r=n.name,o=r.length;for(zd.lastIndex=0;;){const l=zd.exec(r),u=zd.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===o){m_(t,h===void 0?new F3(f,n,e):new O3(f,n,e));break}else{let v=t.map[f];v===void 0&&(v=new B3(f),m_(t,v)),t=v}}}class Hu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);k3(f,d,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function g_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const V3=37297;let z3=0;function H3(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const v_=new ht;function G3(n){wt._getMatrix(v_,wt.workingColorSpace,n);const e=`mat3( ${v_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case Qu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function __(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+H3(n.getShaderSource(e),f)}else return l}function W3(n,e){const t=G3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const X3={[py]:"Linear",[my]:"Reinhard",[gy]:"Cineon",[vy]:"ACESFilmic",[xy]:"AgX",[yy]:"Neutral",[_y]:"Custom"};function j3(n,e){const t=X3[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ru=new ae;function Y3(){wt.getLuminanceCoefficients(Ru);const n=Ru.x.toFixed(4),e=Ru.y.toFixed(4),t=Ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function K3(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function $3(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let f=1;l.type===n.FLOAT_MAT2&&(f=2),l.type===n.FLOAT_MAT3&&(f=3),l.type===n.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:f}}return t}function Ra(n){return n!==""}function x_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z3=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(n){return n.replace(Z3,J3)}const Q3=new Map;function J3(n,e){let t=pt[e];if(t===void 0){const r=Q3.get(e);if(r!==void 0)t=pt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rp(t)}const eD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(n){return n.replace(eD,tD)}function tD(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function M_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nD={[Ou]:"SHADOWMAP_TYPE_PCF",[Ca]:"SHADOWMAP_TYPE_VSM"};function iD(n){return nD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rD={[Is]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[oc]:"ENVMAP_TYPE_CUBE_UV"};function sD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":rD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const oD={[Ro]:"ENVMAP_MODE_REFRACTION"};function aD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":oD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lD={[hy]:"ENVMAP_BLENDING_MULTIPLY",[ZA]:"ENVMAP_BLENDING_MIX",[QA]:"ENVMAP_BLENDING_ADD"};function uD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":lD[n.combine]||"ENVMAP_BLENDING_NONE"}function cD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function fD(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=iD(t),h=sD(t),m=aD(t),v=uD(t),g=cD(t),S=q3(t),M=K3(l),A=o.createProgram();let x,y,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ra).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ra).join(`
`),y.length>0&&(y+=`
`)):(x=[M_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),y=[M_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?pt.tonemapping_pars_fragment:"",t.toneMapping!==Wi?j3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,W3("linearToOutputTexel",t.outputColorSpace),Y3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),u=rp(u),u=x_(u,t),u=y_(u,t),f=rp(f),f=x_(f,t),f=y_(f,t),u=S_(u),f=S_(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=R+x+u,P=R+y+f,N=g_(o,o.VERTEX_SHADER,b),F=g_(o,o.FRAGMENT_SHADER,P);o.attachShader(A,N),o.attachShader(A,F),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function B(O){if(n.debug.checkShaderErrors){const K=o.getProgramInfoLog(A)||"",J=o.getShaderInfoLog(N)||"",oe=o.getShaderInfoLog(F)||"",$=K.trim(),Q=J.trim(),W=oe.trim();let j=!0,te=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,N,F);else{const ue=__(o,N,"vertex"),U=__(o,F,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+$+`
`+ue+`
`+U)}else $!==""?ut("WebGLProgram: Program Info Log:",$):(Q===""||W==="")&&(te=!1);te&&(O.diagnostics={runnable:j,programLog:$,vertexShader:{log:Q,prefix:x},fragmentShader:{log:W,prefix:y}})}o.deleteShader(N),o.deleteShader(F),T=new Hu(o,A),D=$3(o,A)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(A,V3)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z3++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=N,this.fragmentShader=F,this}let dD=0;class hD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new pD(e),t.set(e,r)),r}}class pD{constructor(e){this.id=dD++,this.code=e,this.usedTimes=0}}function mD(n,e,t,r,o,l){const u=new Dy,f=new hD,d=new Set,h=[],m=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return d.add(T),T===0?"uv":`uv${T}`}function A(T,D,q,O,K){const J=O.fog,oe=K.geometry,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,W=e.get(T.envMap||$,Q),j=W&&W.mapping===oc?W.image.height:null,te=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ut("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const ue=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,U=ue!==void 0?ue.length:0;let Y=0;oe.morphAttributes.position!==void 0&&(Y=1),oe.morphAttributes.normal!==void 0&&(Y=2),oe.morphAttributes.color!==void 0&&(Y=3);let Ae,Xe,Ze,re;if(te){const Et=Vi[te];Ae=Et.vertexShader,Xe=Et.fragmentShader}else Ae=T.vertexShader,Xe=T.fragmentShader,f.update(T),Ze=f.getVertexShaderID(T),re=f.getFragmentShaderID(T);const pe=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),Ue=K.isInstancedMesh===!0,He=K.isBatchedMesh===!0,it=!!T.map,Kt=!!T.matcap,mt=!!W,St=!!T.aoMap,bt=!!T.lightMap,ft=!!T.bumpMap,kt=!!T.normalMap,V=!!T.displacementMap,Gt=!!T.emissiveMap,vt=!!T.metalnessMap,Mt=!!T.roughnessMap,Ge=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,G=T.iridescence>0,de=T.sheen>0,me=T.transmission>0,ce=Ge&&!!T.anisotropyMap,Oe=L&&!!T.clearcoatMap,Te=L&&!!T.clearcoatNormalMap,qe=L&&!!T.clearcoatRoughnessMap,rt=G&&!!T.iridescenceMap,xe=G&&!!T.iridescenceThicknessMap,Ee=de&&!!T.sheenColorMap,We=de&&!!T.sheenRoughnessMap,Be=!!T.specularMap,be=!!T.specularColorMap,ct=!!T.specularIntensityMap,z=me&&!!T.transmissionMap,we=me&&!!T.thicknessMap,Se=!!T.gradientMap,De=!!T.alphaMap,ye=T.alphaTest>0,fe=!!T.alphaHash,ke=!!T.extensions;let ot=Wi;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ot=n.toneMapping);const Lt={shaderID:te,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:Xe,defines:T.defines,customVertexShaderID:Ze,customFragmentShaderID:re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:He,batchingColor:He&&K._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&K.instanceColor!==null,instancingMorph:Ue&&K.morphTexture!==null,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:bo,alphaToCoverage:!!T.alphaToCoverage,map:it,matcap:Kt,envMap:mt,envMapMode:mt&&W.mapping,envMapCubeUVHeight:j,aoMap:St,lightMap:bt,bumpMap:ft,normalMap:kt,displacementMap:V,emissiveMap:Gt,normalMapObjectSpace:kt&&T.normalMapType===nC,normalMapTangentSpace:kt&&T.normalMapType===tC,metalnessMap:vt,roughnessMap:Mt,anisotropy:Ge,anisotropyMap:ce,clearcoat:L,clearcoatMap:Oe,clearcoatNormalMap:Te,clearcoatRoughnessMap:qe,dispersion:E,iridescence:G,iridescenceMap:rt,iridescenceThicknessMap:xe,sheen:de,sheenColorMap:Ee,sheenRoughnessMap:We,specularMap:Be,specularColorMap:be,specularIntensityMap:ct,transmission:me,transmissionMap:z,thicknessMap:we,gradientMap:Se,opaque:T.transparent===!1&&T.blending===Eo&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:ye,alphaHash:fe,combine:T.combine,mapUv:it&&M(T.map.channel),aoMapUv:St&&M(T.aoMap.channel),lightMapUv:bt&&M(T.lightMap.channel),bumpMapUv:ft&&M(T.bumpMap.channel),normalMapUv:kt&&M(T.normalMap.channel),displacementMapUv:V&&M(T.displacementMap.channel),emissiveMapUv:Gt&&M(T.emissiveMap.channel),metalnessMapUv:vt&&M(T.metalnessMap.channel),roughnessMapUv:Mt&&M(T.roughnessMap.channel),anisotropyMapUv:ce&&M(T.anisotropyMap.channel),clearcoatMapUv:Oe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:We&&M(T.sheenRoughnessMap.channel),specularMapUv:Be&&M(T.specularMap.channel),specularColorMapUv:be&&M(T.specularColorMap.channel),specularIntensityMapUv:ct&&M(T.specularIntensityMap.channel),transmissionMapUv:z&&M(T.transmissionMap.channel),thicknessMapUv:we&&M(T.thicknessMap.channel),alphaMapUv:De&&M(T.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(kt||Ge),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!oe.attributes.uv&&(it||De),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||oe.attributes.normal===void 0&&kt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:he,skinning:K.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:it&&T.map.isVideoTexture===!0&&wt.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:Gt&&T.emissiveMap.isVideoTexture===!0&&wt.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fr,flipSided:T.side===Gn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ke&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&T.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Lt.vertexUv1s=d.has(1),Lt.vertexUv2s=d.has(2),Lt.vertexUv3s=d.has(3),d.clear(),Lt}function x(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)D.push(q),D.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(y(D,T),R(D,T),D.push(n.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function y(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function R(T,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),T.push(u.mask)}function b(T){const D=S[T.type];let q;if(D){const O=Vi[D];q=VC.clone(O.uniforms)}else q=T.uniforms;return q}function P(T,D){let q=m.get(D);return q!==void 0?++q.usedTimes:(q=new fD(n,D,T,o),h.push(q),m.set(D,q)),q}function N(T){if(--T.usedTimes===0){const D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),m.delete(T.cacheKey),T.destroy()}}function F(T){f.remove(T)}function B(){f.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:b,acquireProgram:P,releaseProgram:N,releaseShaderCache:F,programs:h,dispose:B}}function gD(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let f=n.get(u);return f===void 0&&(f={},n.set(u,f)),f}function r(u){n.delete(u)}function o(u,f,d){n.get(u)[f]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function vD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function E_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function T_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,M,A,x,y){let R=n[e];return R===void 0?(R={id:g.id,object:g,geometry:S,material:M,materialVariant:u(g),groupOrder:A,renderOrder:g.renderOrder,z:x,group:y},n[e]=R):(R.id=g.id,R.object=g,R.geometry=S,R.material=M,R.materialVariant=u(g),R.groupOrder=A,R.renderOrder=g.renderOrder,R.z=x,R.group=y),e++,R}function d(g,S,M,A,x,y){const R=f(g,S,M,A,x,y);M.transmission>0?r.push(R):M.transparent===!0?o.push(R):t.push(R)}function h(g,S,M,A,x,y){const R=f(g,S,M,A,x,y);M.transmission>0?r.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function m(g,S){t.length>1&&t.sort(g||vD),r.length>1&&r.sort(S||E_),o.length>1&&o.sort(S||E_)}function v(){for(let g=e,S=n.length;g<S;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:v,sort:m}}function _D(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new T_,n.set(r,[u])):o>=l.length?(u=new T_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function xD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new Nt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function yD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let SD=0;function MD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ED(n){const e=new xD,t=yD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ae);const o=new ae,l=new rn,u=new rn;function f(h){let m=0,v=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,M=0,A=0,x=0,y=0,R=0,b=0,P=0,N=0,F=0,B=0;h.sort(MD);for(let D=0,q=h.length;D<q;D++){const O=h[D],K=O.color,J=O.intensity,oe=O.distance;let $=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Po?$=O.shadow.map.texture:$=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)m+=K.r*J,v+=K.g*J,g+=K.b*J;else if(O.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(O.sh.coefficients[Q],J);B++}else if(O.isDirectionalLight){const Q=e.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const W=O.shadow,j=t.get(O);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=$,r.directionalShadowMatrix[S]=O.shadow.matrix,R++}r.directional[S]=Q,S++}else if(O.isSpotLight){const Q=e.get(O);Q.position.setFromMatrixPosition(O.matrixWorld),Q.color.copy(K).multiplyScalar(J),Q.distance=oe,Q.coneCos=Math.cos(O.angle),Q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Q.decay=O.decay,r.spot[A]=Q;const W=O.shadow;if(O.map&&(r.spotLightMap[N]=O.map,N++,W.updateMatrices(O),O.castShadow&&F++),r.spotLightMatrix[A]=W.matrix,O.castShadow){const j=t.get(O);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.spotShadow[A]=j,r.spotShadowMap[A]=$,P++}A++}else if(O.isRectAreaLight){const Q=e.get(O);Q.color.copy(K).multiplyScalar(J),Q.halfWidth.set(O.width*.5,0,0),Q.halfHeight.set(0,O.height*.5,0),r.rectArea[x]=Q,x++}else if(O.isPointLight){const Q=e.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity),Q.distance=O.distance,Q.decay=O.decay,O.castShadow){const W=O.shadow,j=t.get(O);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,r.pointShadow[M]=j,r.pointShadowMap[M]=$,r.pointShadowMatrix[M]=O.shadow.matrix,b++}r.point[M]=Q,M++}else if(O.isHemisphereLight){const Q=e.get(O);Q.skyColor.copy(O.color).multiplyScalar(J),Q.groundColor.copy(O.groundColor).multiplyScalar(J),r.hemi[y]=Q,y++}}x>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==S||T.pointLength!==M||T.spotLength!==A||T.rectAreaLength!==x||T.hemiLength!==y||T.numDirectionalShadows!==R||T.numPointShadows!==b||T.numSpotShadows!==P||T.numSpotMaps!==N||T.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=x,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=P+N-F,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=B,T.directionalLength=S,T.pointLength=M,T.spotLength=A,T.rectAreaLength=x,T.hemiLength=y,T.numDirectionalShadows=R,T.numPointShadows=b,T.numSpotShadows=P,T.numSpotMaps=N,T.numLightProbes=B,r.version=SD++)}function d(h,m){let v=0,g=0,S=0,M=0,A=0;const x=m.matrixWorldInverse;for(let y=0,R=h.length;y<R;y++){const b=h[y];if(b.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),v++}else if(b.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),S++}else if(b.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),u.identity(),l.copy(b.matrixWorld),l.premultiply(x),u.extractRotation(l),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),g++}else if(b.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(x),A++}}}return{setup:f,setupView:d,state:r}}function w_(n){const e=new ED(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function TD(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new w_(n),e.set(o,[f])):l>=u.length?(f=new w_(n),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const wD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,CD=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],RD=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],A_=new rn,wa=new ae,Hd=new ae;function PD(n,e,t){let r=new Fy;const o=new Pt,l=new Pt,u=new Jt,f=new WC,d=new XC,h={},m=t.maxTextureSize,v={[Jr]:Gn,[Gn]:Jr,[fr]:fr},g=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:wD,fragmentShader:AD}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new xr;M.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ki(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let y=this.type;this.render=function(F,B,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;this.type===LA&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ou);const D=n.getRenderTarget(),q=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),K=n.state;K.setBlending(hr),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const J=y!==this.type;J&&B.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach($=>$.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,$=F.length;oe<$;oe++){const Q=F[oe],W=Q.shadow;if(W===void 0){ut("WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const j=W.getFrameExtents();o.multiply(j),l.copy(W.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/j.x),o.x=l.x*j.x,W.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/j.y),o.y=l.y*j.y,W.mapSize.y=l.y));const te=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=te,W.map===null||J===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ca){if(Q.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Xi(o.x,o.y,{format:Po,type:gr,minFilter:wn,magFilter:wn,generateMipmaps:!1}),W.map.texture.name=Q.name+".shadowMap",W.map.depthTexture=new ka(o.x,o.y,zi),W.map.depthTexture.name=Q.name+".shadowMapDepth",W.map.depthTexture.format=vr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=_n,W.map.depthTexture.magFilter=_n}else Q.isPointLight?(W.map=new Hy(o.x),W.map.depthTexture=new BC(o.x,qi)):(W.map=new Xi(o.x,o.y),W.map.depthTexture=new ka(o.x,o.y,qi)),W.map.depthTexture.name=Q.name+".shadowMap",W.map.depthTexture.format=vr,this.type===Ou?(W.map.depthTexture.compareFunction=te?zp:Vp,W.map.depthTexture.minFilter=wn,W.map.depthTexture.magFilter=wn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=_n,W.map.depthTexture.magFilter=_n);W.camera.updateProjectionMatrix()}const ue=W.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ue;U++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,U),n.clear();else{U===0&&(n.setRenderTarget(W.map),n.clear());const Y=W.getViewport(U);u.set(l.x*Y.x,l.y*Y.y,l.x*Y.z,l.y*Y.w),K.viewport(u)}if(Q.isPointLight){const Y=W.camera,Ae=W.matrix,Xe=Q.distance||Y.far;Xe!==Y.far&&(Y.far=Xe,Y.updateProjectionMatrix()),wa.setFromMatrixPosition(Q.matrixWorld),Y.position.copy(wa),Hd.copy(Y.position),Hd.add(CD[U]),Y.up.copy(RD[U]),Y.lookAt(Hd),Y.updateMatrixWorld(),Ae.makeTranslation(-wa.x,-wa.y,-wa.z),A_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),W._frustum.setFromProjectionMatrix(A_,Y.coordinateSystem,Y.reversedDepth)}else W.updateMatrices(Q);r=W.getFrustum(),P(B,T,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===Ca&&R(W,T),W.needsUpdate=!1}y=this.type,x.needsUpdate=!1,n.setRenderTarget(D,q,O)};function R(F,B){const T=e.update(A);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Xi(o.x,o.y,{format:Po,type:gr})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(B,null,T,g,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(B,null,T,S,A,null)}function b(F,B,T,D){let q=null;const O=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(O!==void 0)q=O;else if(q=T.isPointLight===!0?d:f,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const K=q.uuid,J=B.uuid;let oe=h[K];oe===void 0&&(oe={},h[K]=oe);let $=oe[J];$===void 0&&($=q.clone(),oe[J]=$,B.addEventListener("dispose",N)),q=$}if(q.visible=B.visible,q.wireframe=B.wireframe,D===Ca?q.side=B.shadowSide!==null?B.shadowSide:B.side:q.side=B.shadowSide!==null?B.shadowSide:v[B.side],q.alphaMap=B.alphaMap,q.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,q.map=B.map,q.clipShadows=B.clipShadows,q.clippingPlanes=B.clippingPlanes,q.clipIntersection=B.clipIntersection,q.displacementMap=B.displacementMap,q.displacementScale=B.displacementScale,q.displacementBias=B.displacementBias,q.wireframeLinewidth=B.wireframeLinewidth,q.linewidth=B.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const K=n.properties.get(q);K.light=T}return q}function P(F,B,T,D,q){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&q===Ca)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const J=e.update(F),oe=F.material;if(Array.isArray(oe)){const $=J.groups;for(let Q=0,W=$.length;Q<W;Q++){const j=$[Q],te=oe[j.materialIndex];if(te&&te.visible){const ue=b(F,te,D,q);F.onBeforeShadow(n,F,B,T,J,ue,j),n.renderBufferDirect(T,null,J,ue,F,j),F.onAfterShadow(n,F,B,T,J,ue,j)}}}else if(oe.visible){const $=b(F,oe,D,q);F.onBeforeShadow(n,F,B,T,J,$,null),n.renderBufferDirect(T,null,J,$,F,null),F.onAfterShadow(n,F,B,T,J,$,null)}}const K=F.children;for(let J=0,oe=K.length;J<oe;J++)P(K[J],B,T,D,q)}function N(F){F.target.removeEventListener("dispose",N);for(const T in h){const D=h[T],q=F.target.uuid;q in D&&(D[q].dispose(),delete D[q])}}}function bD(n,e){function t(){let z=!1;const we=new Jt;let Se=null;const De=new Jt(0,0,0,0);return{setMask:function(ye){Se!==ye&&!z&&(n.colorMask(ye,ye,ye,ye),Se=ye)},setLocked:function(ye){z=ye},setClear:function(ye,fe,ke,ot,Lt){Lt===!0&&(ye*=ot,fe*=ot,ke*=ot),we.set(ye,fe,ke,ot),De.equals(we)===!1&&(n.clearColor(ye,fe,ke,ot),De.copy(we))},reset:function(){z=!1,Se=null,De.set(-1,0,0,0)}}}function r(){let z=!1,we=!1,Se=null,De=null,ye=null;return{setReversed:function(fe){if(we!==fe){const ke=e.get("EXT_clip_control");fe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),we=fe;const ot=ye;ye=null,this.setClear(ot)}},getReversed:function(){return we},setTest:function(fe){fe?pe(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(fe){Se!==fe&&!z&&(n.depthMask(fe),Se=fe)},setFunc:function(fe){if(we&&(fe=dC[fe]),De!==fe){switch(fe){case mh:n.depthFunc(n.NEVER);break;case gh:n.depthFunc(n.ALWAYS);break;case vh:n.depthFunc(n.LESS);break;case Co:n.depthFunc(n.LEQUAL);break;case _h:n.depthFunc(n.EQUAL);break;case xh:n.depthFunc(n.GEQUAL);break;case yh:n.depthFunc(n.GREATER);break;case Sh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=fe}},setLocked:function(fe){z=fe},setClear:function(fe){ye!==fe&&(ye=fe,we&&(fe=1-fe),n.clearDepth(fe))},reset:function(){z=!1,Se=null,De=null,ye=null,we=!1}}}function o(){let z=!1,we=null,Se=null,De=null,ye=null,fe=null,ke=null,ot=null,Lt=null;return{setTest:function(Et){z||(Et?pe(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Et){we!==Et&&!z&&(n.stencilMask(Et),we=Et)},setFunc:function(Et,Jn,An){(Se!==Et||De!==Jn||ye!==An)&&(n.stencilFunc(Et,Jn,An),Se=Et,De=Jn,ye=An)},setOp:function(Et,Jn,An){(fe!==Et||ke!==Jn||ot!==An)&&(n.stencilOp(Et,Jn,An),fe=Et,ke=Jn,ot=An)},setLocked:function(Et){z=Et},setClear:function(Et){Lt!==Et&&(n.clearStencil(Et),Lt=Et)},reset:function(){z=!1,we=null,Se=null,De=null,ye=null,fe=null,ke=null,ot=null,Lt=null}}}const l=new t,u=new r,f=new o,d=new WeakMap,h=new WeakMap;let m={},v={},g=new WeakMap,S=[],M=null,A=!1,x=null,y=null,R=null,b=null,P=null,N=null,F=null,B=new Nt(0,0,0),T=0,D=!1,q=null,O=null,K=null,J=null,oe=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,W=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),Q=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Q=W>=2);let te=null,ue={};const U=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),Ae=new Jt().fromArray(U),Xe=new Jt().fromArray(Y);function Ze(z,we,Se,De){const ye=new Uint8Array(4),fe=n.createTexture();n.bindTexture(z,fe),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<Se;ke++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(we+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return fe}const re={};re[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),pe(n.DEPTH_TEST),u.setFunc(Co),ft(!1),kt(Lv),pe(n.CULL_FACE),St(hr);function pe(z){m[z]!==!0&&(n.enable(z),m[z]=!0)}function he(z){m[z]!==!1&&(n.disable(z),m[z]=!1)}function Ue(z,we){return v[z]!==we?(n.bindFramebuffer(z,we),v[z]=we,z===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=we),z===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=we),!0):!1}function He(z,we){let Se=S,De=!1;if(z){Se=g.get(we),Se===void 0&&(Se=[],g.set(we,Se));const ye=z.textures;if(Se.length!==ye.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,ke=ye.length;fe<ke;fe++)Se[fe]=n.COLOR_ATTACHMENT0+fe;Se.length=ye.length,De=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,De=!0);De&&n.drawBuffers(Se)}function it(z){return M!==z?(n.useProgram(z),M=z,!0):!1}const Kt={[ws]:n.FUNC_ADD,[NA]:n.FUNC_SUBTRACT,[UA]:n.FUNC_REVERSE_SUBTRACT};Kt[FA]=n.MIN,Kt[OA]=n.MAX;const mt={[BA]:n.ZERO,[kA]:n.ONE,[VA]:n.SRC_COLOR,[hh]:n.SRC_ALPHA,[jA]:n.SRC_ALPHA_SATURATE,[WA]:n.DST_COLOR,[HA]:n.DST_ALPHA,[zA]:n.ONE_MINUS_SRC_COLOR,[ph]:n.ONE_MINUS_SRC_ALPHA,[XA]:n.ONE_MINUS_DST_COLOR,[GA]:n.ONE_MINUS_DST_ALPHA,[YA]:n.CONSTANT_COLOR,[qA]:n.ONE_MINUS_CONSTANT_COLOR,[KA]:n.CONSTANT_ALPHA,[$A]:n.ONE_MINUS_CONSTANT_ALPHA};function St(z,we,Se,De,ye,fe,ke,ot,Lt,Et){if(z===hr){A===!0&&(he(n.BLEND),A=!1);return}if(A===!1&&(pe(n.BLEND),A=!0),z!==IA){if(z!==x||Et!==D){if((y!==ws||P!==ws)&&(n.blendEquation(n.FUNC_ADD),y=ws,P=ws),Et)switch(z){case Eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iv:n.blendFunc(n.ONE,n.ONE);break;case Nv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ct("WebGLState: Invalid blending: ",z);break}else switch(z){case Eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iv:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nv:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uv:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",z);break}R=null,b=null,N=null,F=null,B.set(0,0,0),T=0,x=z,D=Et}return}ye=ye||we,fe=fe||Se,ke=ke||De,(we!==y||ye!==P)&&(n.blendEquationSeparate(Kt[we],Kt[ye]),y=we,P=ye),(Se!==R||De!==b||fe!==N||ke!==F)&&(n.blendFuncSeparate(mt[Se],mt[De],mt[fe],mt[ke]),R=Se,b=De,N=fe,F=ke),(ot.equals(B)===!1||Lt!==T)&&(n.blendColor(ot.r,ot.g,ot.b,Lt),B.copy(ot),T=Lt),x=z,D=!1}function bt(z,we){z.side===fr?he(n.CULL_FACE):pe(n.CULL_FACE);let Se=z.side===Gn;we&&(Se=!Se),ft(Se),z.blending===Eo&&z.transparent===!1?St(hr):St(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const De=z.stencilWrite;f.setTest(De),De&&(f.setMask(z.stencilWriteMask),f.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),f.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Gt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function ft(z){q!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),q=z)}function kt(z){z!==bA?(pe(n.CULL_FACE),z!==O&&(z===Lv?n.cullFace(n.BACK):z===DA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),O=z}function V(z){z!==K&&(Q&&n.lineWidth(z),K=z)}function Gt(z,we,Se){z?(pe(n.POLYGON_OFFSET_FILL),(J!==we||oe!==Se)&&(J=we,oe=Se,u.getReversed()&&(we=-we),n.polygonOffset(we,Se))):he(n.POLYGON_OFFSET_FILL)}function vt(z){z?pe(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function Mt(z){z===void 0&&(z=n.TEXTURE0+$-1),te!==z&&(n.activeTexture(z),te=z)}function Ge(z,we,Se){Se===void 0&&(te===null?Se=n.TEXTURE0+$-1:Se=te);let De=ue[Se];De===void 0&&(De={type:void 0,texture:void 0},ue[Se]=De),(De.type!==z||De.texture!==we)&&(te!==Se&&(n.activeTexture(Se),te=Se),n.bindTexture(z,we||re[z]),De.type=z,De.texture=we)}function L(){const z=ue[te];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function de(){try{n.texSubImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function me(){try{n.texSubImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Oe(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Te(){try{n.texStorage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function qe(){try{n.texStorage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function rt(){try{n.texImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function xe(){try{n.texImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Ee(z){Ae.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ae.copy(z))}function We(z){Xe.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Xe.copy(z))}function Be(z,we){let Se=h.get(we);Se===void 0&&(Se=new WeakMap,h.set(we,Se));let De=Se.get(z);De===void 0&&(De=n.getUniformBlockIndex(we,z.name),Se.set(z,De))}function be(z,we){const De=h.get(we).get(z);d.get(we)!==De&&(n.uniformBlockBinding(we,De,z.__bindingPointIndex),d.set(we,De))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},te=null,ue={},v={},g=new WeakMap,S=[],M=null,A=!1,x=null,y=null,R=null,b=null,P=null,N=null,F=null,B=new Nt(0,0,0),T=0,D=!1,q=null,O=null,K=null,J=null,oe=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:pe,disable:he,bindFramebuffer:Ue,drawBuffers:He,useProgram:it,setBlending:St,setMaterial:bt,setFlipSided:ft,setCullFace:kt,setLineWidth:V,setPolygonOffset:Gt,setScissorTest:vt,activeTexture:Mt,bindTexture:Ge,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:rt,texImage3D:xe,updateUBOMapping:Be,uniformBlockBinding:be,texStorage2D:Te,texStorage3D:qe,texSubImage2D:de,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:Oe,scissor:Ee,viewport:We,reset:ct}}function DD(n,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pt,m=new WeakMap;let v;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,E){return S?new OffscreenCanvas(L,E):ec("canvas")}function A(L,E,G){let de=1;const me=Ge(L);if((me.width>G||me.height>G)&&(de=G/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor(de*me.width),Oe=Math.floor(de*me.height);v===void 0&&(v=M(ce,Oe));const Te=E?M(ce,Oe):v;return Te.width=ce,Te.height=Oe,Te.getContext("2d").drawImage(L,0,0,ce,Oe),ut("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ce+"x"+Oe+")."),Te}else return"data"in L&&ut("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function x(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function R(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,E,G,de,me=!1){if(L!==null){if(n[L]!==void 0)return n[L];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=E;if(E===n.RED&&(G===n.FLOAT&&(ce=n.R32F),G===n.HALF_FLOAT&&(ce=n.R16F),G===n.UNSIGNED_BYTE&&(ce=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ce=n.R8UI),G===n.UNSIGNED_SHORT&&(ce=n.R16UI),G===n.UNSIGNED_INT&&(ce=n.R32UI),G===n.BYTE&&(ce=n.R8I),G===n.SHORT&&(ce=n.R16I),G===n.INT&&(ce=n.R32I)),E===n.RG&&(G===n.FLOAT&&(ce=n.RG32F),G===n.HALF_FLOAT&&(ce=n.RG16F),G===n.UNSIGNED_BYTE&&(ce=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ce=n.RG8UI),G===n.UNSIGNED_SHORT&&(ce=n.RG16UI),G===n.UNSIGNED_INT&&(ce=n.RG32UI),G===n.BYTE&&(ce=n.RG8I),G===n.SHORT&&(ce=n.RG16I),G===n.INT&&(ce=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),G===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),G===n.UNSIGNED_INT&&(ce=n.RGB32UI),G===n.BYTE&&(ce=n.RGB8I),G===n.SHORT&&(ce=n.RGB16I),G===n.INT&&(ce=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),G===n.UNSIGNED_INT&&(ce=n.RGBA32UI),G===n.BYTE&&(ce=n.RGBA8I),G===n.SHORT&&(ce=n.RGBA16I),G===n.INT&&(ce=n.RGBA32I)),E===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),E===n.RGBA){const Oe=me?Qu:wt.getTransfer(de);G===n.FLOAT&&(ce=n.RGBA32F),G===n.HALF_FLOAT&&(ce=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ce=Oe===It?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(L,E){let G;return L?E===null||E===qi||E===Ba?G=n.DEPTH24_STENCIL8:E===zi?G=n.DEPTH32F_STENCIL8:E===Oa&&(G=n.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===Ba?G=n.DEPTH_COMPONENT24:E===zi?G=n.DEPTH_COMPONENT32F:E===Oa&&(G=n.DEPTH_COMPONENT16),G}function N(L,E){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==_n&&L.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),T(E),E.isVideoTexture&&m.delete(E)}function B(L){const E=L.target;E.removeEventListener("dispose",B),q(E)}function T(L){const E=r.get(L);if(E.__webglInit===void 0)return;const G=L.source,de=g.get(G);if(de){const me=de[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&D(L),Object.keys(de).length===0&&g.delete(G)}r.remove(L)}function D(L){const E=r.get(L);n.deleteTexture(E.__webglTexture);const G=L.source,de=g.get(G);delete de[E.__cacheKey],u.memory.textures--}function q(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(E.__webglFramebuffer[de]))for(let me=0;me<E.__webglFramebuffer[de].length;me++)n.deleteFramebuffer(E.__webglFramebuffer[de][me]);else n.deleteFramebuffer(E.__webglFramebuffer[de]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[de])}else{if(Array.isArray(E.__webglFramebuffer))for(let de=0;de<E.__webglFramebuffer.length;de++)n.deleteFramebuffer(E.__webglFramebuffer[de]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let de=0;de<E.__webglColorRenderbuffer.length;de++)E.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[de]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=L.textures;for(let de=0,me=G.length;de<me;de++){const ce=r.get(G[de]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),u.memory.textures--),r.remove(G[de])}r.remove(L)}let O=0;function K(){O=0}function J(){const L=O;return L>=o.maxTextures&&ut("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),O+=1,L}function oe(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function $(L,E){const G=r.get(L);if(L.isVideoTexture&&vt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const de=L.image;if(de===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{re(G,L,E);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function Q(L,E){const G=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){re(G,L,E);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function W(L,E){const G=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){re(G,L,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function j(L,E){const G=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){pe(G,L,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const te={[Mh]:n.REPEAT,[dr]:n.CLAMP_TO_EDGE,[Eh]:n.MIRRORED_REPEAT},ue={[_n]:n.NEAREST,[JA]:n.NEAREST_MIPMAP_NEAREST,[ou]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[dd]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},U={[iC]:n.NEVER,[lC]:n.ALWAYS,[rC]:n.LESS,[Vp]:n.LEQUAL,[sC]:n.EQUAL,[zp]:n.GEQUAL,[oC]:n.GREATER,[aC]:n.NOTEQUAL};function Y(L,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===dd||E.magFilter===ou||E.magFilter===Ps||E.minFilter===wn||E.minFilter===dd||E.minFilter===ou||E.minFilter===Ps)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,te[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,te[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,te[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ue[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ue[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_n||E.minFilter!==ou&&E.minFilter!==Ps||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(L,E){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const de=E.source;let me=g.get(de);me===void 0&&(me={},g.set(de,me));const ce=oe(E);if(ce!==L.__cacheKey){me[ce]===void 0&&(me[ce]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,G=!0),me[ce].usedTimes++;const Oe=me[L.__cacheKey];Oe!==void 0&&(me[L.__cacheKey].usedTimes--,Oe.usedTimes===0&&D(E)),L.__cacheKey=ce,L.__webglTexture=me[ce].texture}return G}function Xe(L,E,G){return Math.floor(Math.floor(L/G)/E)}function Ze(L,E,G,de){const ce=L.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,G,de,E.data);else{ce.sort((xe,Ee)=>xe.start-Ee.start);let Oe=0;for(let xe=1;xe<ce.length;xe++){const Ee=ce[Oe],We=ce[xe],Be=Ee.start+Ee.count,be=Xe(We.start,E.width,4),ct=Xe(Ee.start,E.width,4);We.start<=Be+1&&be===ct&&Xe(We.start+We.count-1,E.width,4)===be?Ee.count=Math.max(Ee.count,We.start+We.count-Ee.start):(++Oe,ce[Oe]=We)}ce.length=Oe+1;const Te=n.getParameter(n.UNPACK_ROW_LENGTH),qe=n.getParameter(n.UNPACK_SKIP_PIXELS),rt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let xe=0,Ee=ce.length;xe<Ee;xe++){const We=ce[xe],Be=Math.floor(We.start/4),be=Math.ceil(We.count/4),ct=Be%E.width,z=Math.floor(Be/E.width),we=be,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,ct,z,we,Se,G,de,E.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Te),n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,rt)}}function re(L,E,G){let de=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=n.TEXTURE_3D);const me=Ae(L,E),ce=E.source;t.bindTexture(de,L.__webglTexture,n.TEXTURE0+G);const Oe=r.get(ce);if(ce.version!==Oe.__version||me===!0){t.activeTexture(n.TEXTURE0+G);const Te=wt.getPrimaries(wt.workingColorSpace),qe=E.colorSpace===qr?null:wt.getPrimaries(E.colorSpace),rt=E.colorSpace===qr||Te===qe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let xe=A(E.image,!1,o.maxTextureSize);xe=Mt(E,xe);const Ee=l.convert(E.format,E.colorSpace),We=l.convert(E.type);let Be=b(E.internalFormat,Ee,We,E.colorSpace,E.isVideoTexture);Y(de,E);let be;const ct=E.mipmaps,z=E.isVideoTexture!==!0,we=Oe.__version===void 0||me===!0,Se=ce.dataReady,De=N(E,xe);if(E.isDepthTexture)Be=P(E.format===bs,E.type),we&&(z?t.texStorage2D(n.TEXTURE_2D,1,Be,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Be,xe.width,xe.height,0,Ee,We,null));else if(E.isDataTexture)if(ct.length>0){z&&we&&t.texStorage2D(n.TEXTURE_2D,De,Be,ct[0].width,ct[0].height);for(let ye=0,fe=ct.length;ye<fe;ye++)be=ct[ye],z?Se&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,be.width,be.height,Ee,We,be.data):t.texImage2D(n.TEXTURE_2D,ye,Be,be.width,be.height,0,Ee,We,be.data);E.generateMipmaps=!1}else z?(we&&t.texStorage2D(n.TEXTURE_2D,De,Be,xe.width,xe.height),Se&&Ze(E,xe,Ee,We)):t.texImage2D(n.TEXTURE_2D,0,Be,xe.width,xe.height,0,Ee,We,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Be,ct[0].width,ct[0].height,xe.depth);for(let ye=0,fe=ct.length;ye<fe;ye++)if(be=ct[ye],E.format!==Ri)if(Ee!==null)if(z){if(Se)if(E.layerUpdates.size>0){const ke=i_(be.width,be.height,E.format,E.type);for(const ot of E.layerUpdates){const Lt=be.data.subarray(ot*ke/be.data.BYTES_PER_ELEMENT,(ot+1)*ke/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,ot,be.width,be.height,1,Ee,Lt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,be.width,be.height,xe.depth,Ee,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,Be,be.width,be.height,xe.depth,0,be.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,be.width,be.height,xe.depth,Ee,We,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,Be,be.width,be.height,xe.depth,0,Ee,We,be.data)}else{z&&we&&t.texStorage2D(n.TEXTURE_2D,De,Be,ct[0].width,ct[0].height);for(let ye=0,fe=ct.length;ye<fe;ye++)be=ct[ye],E.format!==Ri?Ee!==null?z?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,Be,be.width,be.height,0,be.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Se&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,be.width,be.height,Ee,We,be.data):t.texImage2D(n.TEXTURE_2D,ye,Be,be.width,be.height,0,Ee,We,be.data)}else if(E.isDataArrayTexture)if(z){if(we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Be,xe.width,xe.height,xe.depth),Se)if(E.layerUpdates.size>0){const ye=i_(xe.width,xe.height,E.format,E.type);for(const fe of E.layerUpdates){const ke=xe.data.subarray(fe*ye/xe.data.BYTES_PER_ELEMENT,(fe+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,xe.width,xe.height,1,Ee,We,ke)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ee,We,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,xe.width,xe.height,xe.depth,0,Ee,We,xe.data);else if(E.isData3DTexture)z?(we&&t.texStorage3D(n.TEXTURE_3D,De,Be,xe.width,xe.height,xe.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ee,We,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Be,xe.width,xe.height,xe.depth,0,Ee,We,xe.data);else if(E.isFramebufferTexture){if(we)if(z)t.texStorage2D(n.TEXTURE_2D,De,Be,xe.width,xe.height);else{let ye=xe.width,fe=xe.height;for(let ke=0;ke<De;ke++)t.texImage2D(n.TEXTURE_2D,ke,Be,ye,fe,0,Ee,We,null),ye>>=1,fe>>=1}}else if(ct.length>0){if(z&&we){const ye=Ge(ct[0]);t.texStorage2D(n.TEXTURE_2D,De,Be,ye.width,ye.height)}for(let ye=0,fe=ct.length;ye<fe;ye++)be=ct[ye],z?Se&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ee,We,be):t.texImage2D(n.TEXTURE_2D,ye,Be,Ee,We,be);E.generateMipmaps=!1}else if(z){if(we){const ye=Ge(xe);t.texStorage2D(n.TEXTURE_2D,De,Be,ye.width,ye.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,We,xe)}else t.texImage2D(n.TEXTURE_2D,0,Be,Ee,We,xe);x(E)&&y(de),Oe.__version=ce.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function pe(L,E,G){if(E.image.length!==6)return;const de=Ae(L,E),me=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+G);const ce=r.get(me);if(me.version!==ce.__version||de===!0){t.activeTexture(n.TEXTURE0+G);const Oe=wt.getPrimaries(wt.workingColorSpace),Te=E.colorSpace===qr?null:wt.getPrimaries(E.colorSpace),qe=E.colorSpace===qr||Oe===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const rt=E.isCompressedTexture||E.image[0].isCompressedTexture,xe=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let fe=0;fe<6;fe++)!rt&&!xe?Ee[fe]=A(E.image[fe],!0,o.maxCubemapSize):Ee[fe]=xe?E.image[fe].image:E.image[fe],Ee[fe]=Mt(E,Ee[fe]);const We=Ee[0],Be=l.convert(E.format,E.colorSpace),be=l.convert(E.type),ct=b(E.internalFormat,Be,be,E.colorSpace),z=E.isVideoTexture!==!0,we=ce.__version===void 0||de===!0,Se=me.dataReady;let De=N(E,We);Y(n.TEXTURE_CUBE_MAP,E);let ye;if(rt){z&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ct,We.width,We.height);for(let fe=0;fe<6;fe++){ye=Ee[fe].mipmaps;for(let ke=0;ke<ye.length;ke++){const ot=ye[ke];E.format!==Ri?Be!==null?z?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,0,0,ot.width,ot.height,Be,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,ct,ot.width,ot.height,0,ot.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,0,0,ot.width,ot.height,Be,be,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,ct,ot.width,ot.height,0,Be,be,ot.data)}}}else{if(ye=E.mipmaps,z&&we){ye.length>0&&De++;const fe=Ge(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ct,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(xe){z?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ee[fe].width,Ee[fe].height,Be,be,Ee[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,Ee[fe].width,Ee[fe].height,0,Be,be,Ee[fe].data);for(let ke=0;ke<ye.length;ke++){const Lt=ye[ke].image[fe].image;z?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,0,0,Lt.width,Lt.height,Be,be,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,ct,Lt.width,Lt.height,0,Be,be,Lt.data)}}else{z?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be,be,Ee[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,Be,be,Ee[fe]);for(let ke=0;ke<ye.length;ke++){const ot=ye[ke];z?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,0,0,Be,be,ot.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,ct,Be,be,ot.image[fe])}}}x(E)&&y(n.TEXTURE_CUBE_MAP),ce.__version=me.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function he(L,E,G,de,me,ce){const Oe=l.convert(G.format,G.colorSpace),Te=l.convert(G.type),qe=b(G.internalFormat,Oe,Te,G.colorSpace),rt=r.get(E),xe=r.get(G);if(xe.__renderTarget=E,!rt.__hasExternalTextures){const Ee=Math.max(1,E.width>>ce),We=Math.max(1,E.height>>ce);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,ce,qe,Ee,We,E.depth,0,Oe,Te,null):t.texImage2D(me,ce,qe,Ee,We,0,Oe,Te,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Gt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,me,xe.__webglTexture,0,V(E)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,me,xe.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(L,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){const de=E.depthTexture,me=de&&de.isDepthTexture?de.type:null,ce=P(E.stencilBuffer,me),Oe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Gt(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V(E),ce,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,V(E),ce,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ce,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,L)}else{const de=E.textures;for(let me=0;me<de.length;me++){const ce=de[me],Oe=l.convert(ce.format,ce.colorSpace),Te=l.convert(ce.type),qe=b(ce.internalFormat,Oe,Te,ce.colorSpace);Gt(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V(E),qe,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,V(E),qe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,qe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(L,E,G){const de=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),Y(n.TEXTURE_CUBE_MAP,E.depthTexture);const rt=l.convert(E.depthTexture.format),xe=l.convert(E.depthTexture.type);let Ee;E.depthTexture.format===vr?Ee=n.DEPTH_COMPONENT24:E.depthTexture.format===bs&&(Ee=n.DEPTH24_STENCIL8);for(let We=0;We<6;We++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Ee,E.width,E.height,0,rt,xe,null)}}else $(E.depthTexture,0);const ce=me.__webglTexture,Oe=V(E),Te=de?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,qe=E.depthTexture.format===bs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===vr)Gt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,qe,Te,ce,0,Oe):n.framebufferTexture2D(n.FRAMEBUFFER,qe,Te,ce,0);else if(E.depthTexture.format===bs)Gt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,qe,Te,ce,0,Oe):n.framebufferTexture2D(n.FRAMEBUFFER,qe,Te,ce,0);else throw new Error("Unknown depthTexture format")}function it(L){const E=r.get(L),G=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",me)};de.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=de}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let de=0;de<6;de++)He(E.__webglFramebuffer[de],L,de);else{const de=L.texture.mipmaps;de&&de.length>0?He(E.__webglFramebuffer[0],L,0):He(E.__webglFramebuffer,L,0)}else if(G){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=n.createRenderbuffer(),Ue(E.__webglDepthbuffer[de],L,!1);else{const me=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[de];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ce)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ue(E.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(L,E,G){const de=r.get(L);E!==void 0&&he(de.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&it(L)}function mt(L){const E=L.texture,G=r.get(L),de=r.get(E);L.addEventListener("dispose",B);const me=L.textures,ce=L.isWebGLCubeRenderTarget===!0,Oe=me.length>1;if(Oe||(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=E.version,u.memory.textures++),ce){G.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Te]=[];for(let qe=0;qe<E.mipmaps.length;qe++)G.__webglFramebuffer[Te][qe]=n.createFramebuffer()}else G.__webglFramebuffer[Te]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)G.__webglFramebuffer[Te]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let Te=0,qe=me.length;Te<qe;Te++){const rt=r.get(me[Te]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),u.memory.textures++)}if(L.samples>0&&Gt(L)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const qe=me[Te];G.__webglColorRenderbuffer[Te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Te]);const rt=l.convert(qe.format,qe.colorSpace),xe=l.convert(qe.type),Ee=b(qe.internalFormat,rt,xe,qe.colorSpace,L.isXRRenderTarget===!0),We=V(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Ee,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,G.__webglColorRenderbuffer[Te])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),Y(n.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)he(G.__webglFramebuffer[Te][qe],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe);else he(G.__webglFramebuffer[Te],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);x(E)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Te=0,qe=me.length;Te<qe;Te++){const rt=me[Te],xe=r.get(rt);let Ee=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,xe.__webglTexture),Y(Ee,rt),he(G.__webglFramebuffer,L,rt,n.COLOR_ATTACHMENT0+Te,Ee,0),x(rt)&&y(Ee)}t.unbindTexture()}else{let Te=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,de.__webglTexture),Y(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)he(G.__webglFramebuffer[qe],L,E,n.COLOR_ATTACHMENT0,Te,qe);else he(G.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,Te,0);x(E)&&y(Te),t.unbindTexture()}L.depthBuffer&&it(L)}function St(L){const E=L.textures;for(let G=0,de=E.length;G<de;G++){const me=E[G];if(x(me)){const ce=R(L),Oe=r.get(me).__webglTexture;t.bindTexture(ce,Oe),y(ce),t.unbindTexture()}}}const bt=[],ft=[];function kt(L){if(L.samples>0){if(Gt(L)===!1){const E=L.textures,G=L.width,de=L.height;let me=n.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=r.get(L),Te=E.length>1;if(Te)for(let rt=0;rt<E.length;rt++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const qe=L.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let rt=0;rt<E.length;rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),Te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[rt]);const xe=r.get(E[rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,G,de,0,0,G,de,me,n.NEAREST),d===!0&&(bt.length=0,ft.length=0,bt.push(n.COLOR_ATTACHMENT0+rt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(bt.push(ce),ft.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let rt=0;rt<E.length;rt++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[rt]);const xe=r.get(E[rt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function V(L){return Math.min(o.maxSamples,L.samples)}function Gt(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(L){const E=u.render.frame;m.get(L)!==E&&(m.set(L,E),L.update())}function Mt(L,E){const G=L.colorSpace,de=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==bo&&G!==qr&&(wt.getTransfer(G)===It?(de!==Ri||me!==ci)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",G)),E}function Ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=K,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=Kt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function LD(n,e){function t(r,o=qr){let l;const u=wt.getTransfer(o);if(r===ci)return n.UNSIGNED_BYTE;if(r===Up)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Fp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Ty)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===wy)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===My)return n.BYTE;if(r===Ey)return n.SHORT;if(r===Oa)return n.UNSIGNED_SHORT;if(r===Np)return n.INT;if(r===qi)return n.UNSIGNED_INT;if(r===zi)return n.FLOAT;if(r===gr)return n.HALF_FLOAT;if(r===Ay)return n.ALPHA;if(r===Cy)return n.RGB;if(r===Ri)return n.RGBA;if(r===vr)return n.DEPTH_COMPONENT;if(r===bs)return n.DEPTH_STENCIL;if(r===Ry)return n.RED;if(r===Op)return n.RED_INTEGER;if(r===Po)return n.RG;if(r===Bp)return n.RG_INTEGER;if(r===kp)return n.RGBA_INTEGER;if(r===Bu||r===ku||r===Vu||r===zu)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Bu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ku)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Bu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ku)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Th||r===wh||r===Ah||r===Ch)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Th)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ah)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ch)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rh||r===Ph||r===bh||r===Dh||r===Lh||r===Ih||r===Nh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Rh||r===Ph)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===bh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Dh)return l.COMPRESSED_R11_EAC;if(r===Lh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ih)return l.COMPRESSED_RG11_EAC;if(r===Nh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Uh||r===Fh||r===Oh||r===Bh||r===kh||r===Vh||r===zh||r===Hh||r===Gh||r===Wh||r===Xh||r===jh||r===Yh||r===qh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Uh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Oh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Kh||r===$h||r===Zh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Kh)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qh||r===Jh||r===ep||r===tp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Qh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Jh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ep)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ba?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const ID=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ND=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new By(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new bi({vertexShader:ID,fragmentShader:ND,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ki(new Ya(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FD extends Uo{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,v=null,g=null,S=null,M=null;const A=typeof XRWebGLBinding<"u",x=new UD,y={},R=t.getContextAttributes();let b=null,P=null;const N=[],F=[],B=new Pt;let T=null;const D=new Ai;D.viewport=new Jt;const q=new Ai;q.viewport=new Jt;const O=[D,q],K=new YC;let J=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let pe=N[re];return pe===void 0&&(pe=new yd,N[re]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(re){let pe=N[re];return pe===void 0&&(pe=new yd,N[re]=pe),pe.getGripSpace()},this.getHand=function(re){let pe=N[re];return pe===void 0&&(pe=new yd,N[re]=pe),pe.getHandSpace()};function $(re){const pe=F.indexOf(re.inputSource);if(pe===-1)return;const he=N[pe];he!==void 0&&(he.update(re.inputSource,re.frame,h||u),he.dispatchEvent({type:re.type,data:re.inputSource}))}function Q(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",W);for(let re=0;re<N.length;re++){const pe=F[re];pe!==null&&(F[re]=null,N[re].disconnect(pe))}J=null,oe=null,x.reset();for(const re in y)delete y[re];e.setRenderTarget(b),S=null,g=null,v=null,o=null,P=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ue=null,He=null;R.depth&&(He=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=R.stencil?bs:vr,Ue=R.stencil?Ba:qi);const it={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(it),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Xi(g.textureWidth,g.textureHeight,{format:Ri,type:ci,depthTexture:new ka(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const he={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Xi(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(f),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(re){for(let pe=0;pe<re.removed.length;pe++){const he=re.removed[pe],Ue=F.indexOf(he);Ue>=0&&(F[Ue]=null,N[Ue].disconnect(he))}for(let pe=0;pe<re.added.length;pe++){const he=re.added[pe];let Ue=F.indexOf(he);if(Ue===-1){for(let it=0;it<N.length;it++)if(it>=F.length){F.push(he),Ue=it;break}else if(F[it]===null){F[it]=he,Ue=it;break}if(Ue===-1)break}const He=N[Ue];He&&He.connect(he)}}const j=new ae,te=new ae;function ue(re,pe,he){j.setFromMatrixPosition(pe.matrixWorld),te.setFromMatrixPosition(he.matrixWorld);const Ue=j.distanceTo(te),He=pe.projectionMatrix.elements,it=he.projectionMatrix.elements,Kt=He[14]/(He[10]-1),mt=He[14]/(He[10]+1),St=(He[9]+1)/He[5],bt=(He[9]-1)/He[5],ft=(He[8]-1)/He[0],kt=(it[8]+1)/it[0],V=Kt*ft,Gt=Kt*kt,vt=Ue/(-ft+kt),Mt=vt*-ft;if(pe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Mt),re.translateZ(vt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),He[10]===-1)re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ge=Kt+vt,L=mt+vt,E=V-Mt,G=Gt+(Ue-Mt),de=St*mt/L*Ge,me=bt*mt/L*Ge;re.projectionMatrix.makePerspective(E,G,de,me,Ge,L),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function U(re,pe){pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let pe=re.near,he=re.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(he=x.depthFar)),K.near=q.near=D.near=pe,K.far=q.far=D.far=he,(J!==K.near||oe!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),J=K.near,oe=K.far),K.layers.mask=re.layers.mask|6,D.layers.mask=K.layers.mask&-5,q.layers.mask=K.layers.mask&-3;const Ue=re.parent,He=K.cameras;U(K,Ue);for(let it=0;it<He.length;it++)U(He[it],Ue);He.length===2?ue(K,D,q):K.projectionMatrix.copy(D.projectionMatrix),Y(re,K,Ue)};function Y(re,pe,he){he===null?re.matrix.copy(pe.matrixWorld):(re.matrix.copy(he.matrixWorld),re.matrix.invert(),re.matrix.multiply(pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=np*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(re){d=re,g!==null&&(g.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(K)},this.getCameraTexture=function(re){return y[re]};let Ae=null;function Xe(re,pe){if(m=pe.getViewerPose(h||u),M=pe,m!==null){const he=m.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Ue=!1;he.length!==K.cameras.length&&(K.cameras.length=0,Ue=!0);for(let mt=0;mt<he.length;mt++){const St=he[mt];let bt=null;if(S!==null)bt=S.getViewport(St);else{const kt=v.getViewSubImage(g,St);bt=kt.viewport,mt===0&&(e.setRenderTargetTextures(P,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(P))}let ft=O[mt];ft===void 0&&(ft=new Ai,ft.layers.enable(mt),ft.viewport=new Jt,O[mt]=ft),ft.matrix.fromArray(St.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(St.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(bt.x,bt.y,bt.width,bt.height),mt===0&&(K.matrix.copy(ft.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ue===!0&&K.cameras.push(ft)}const He=o.enabledFeatures;if(He&&He.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const mt=v.getDepthInformation(he[0]);mt&&mt.isValid&&mt.texture&&x.init(mt,o.renderState)}if(He&&He.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let mt=0;mt<he.length;mt++){const St=he[mt].camera;if(St){let bt=y[St];bt||(bt=new By,y[St]=bt);const ft=v.getCameraImage(St);bt.sourceTexture=ft}}}}for(let he=0;he<N.length;he++){const Ue=F[he],He=N[he];Ue!==null&&He!==void 0&&He.update(Ue,pe,h||u)}Ae&&Ae(re,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),M=null}const Ze=new zy;Ze.setAnimationLoop(Xe),this.setAnimationLoop=function(re){Ae=re},this.dispose=function(){}}}const Ms=new _r,OD=new rn;function BD(n,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,ky(n)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,R,b,P){y.isMeshBasicMaterial?l(x,y):y.isMeshLambertMaterial?(l(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(x,y),v(x,y)):y.isMeshPhongMaterial?(l(x,y),m(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(x,y),g(x,y),y.isMeshPhysicalMaterial&&S(x,y,P)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),A(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?d(x,y,R,b):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Gn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Gn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const R=e.get(y),b=R.envMap,P=R.envMapRotation;b&&(x.envMap.value=b,Ms.copy(P),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),x.envMapRotation.value.setFromMatrix4(OD.makeRotationFromEuler(Ms)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,R,b){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*R,x.scale.value=b*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function v(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,R){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Gn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function A(x,y){const R=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function kD(n,e,t,r){let o={},l={},u=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,b){const P=b.program;r.uniformBlockBinding(R,P)}function h(R,b){let P=o[R.id];P===void 0&&(M(R),P=m(R),o[R.id]=P,R.addEventListener("dispose",x));const N=b.program;r.updateUBOMapping(R,N);const F=e.render.frame;l[R.id]!==F&&(g(R),l[R.id]=F)}function m(R){const b=v();R.__bindingPointIndex=b;const P=n.createBuffer(),N=R.__size,F=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,N,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,P),P}function v(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const b=o[R.id],P=R.uniforms,N=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let F=0,B=P.length;F<B;F++){const T=Array.isArray(P[F])?P[F]:[P[F]];for(let D=0,q=T.length;D<q;D++){const O=T[D];if(S(O,F,D,N)===!0){const K=O.__offset,J=Array.isArray(O.value)?O.value:[O.value];let oe=0;for(let $=0;$<J.length;$++){const Q=J[$],W=A(Q);typeof Q=="number"||typeof Q=="boolean"?(O.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,K+oe,O.__data)):Q.isMatrix3?(O.__data[0]=Q.elements[0],O.__data[1]=Q.elements[1],O.__data[2]=Q.elements[2],O.__data[3]=0,O.__data[4]=Q.elements[3],O.__data[5]=Q.elements[4],O.__data[6]=Q.elements[5],O.__data[7]=0,O.__data[8]=Q.elements[6],O.__data[9]=Q.elements[7],O.__data[10]=Q.elements[8],O.__data[11]=0):(Q.toArray(O.__data,oe),oe+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(R,b,P,N){const F=R.value,B=b+"_"+P;if(N[B]===void 0)return typeof F=="number"||typeof F=="boolean"?N[B]=F:N[B]=F.clone(),!0;{const T=N[B];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return N[B]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function M(R){const b=R.uniforms;let P=0;const N=16;for(let B=0,T=b.length;B<T;B++){const D=Array.isArray(b[B])?b[B]:[b[B]];for(let q=0,O=D.length;q<O;q++){const K=D[q],J=Array.isArray(K.value)?K.value:[K.value];for(let oe=0,$=J.length;oe<$;oe++){const Q=J[oe],W=A(Q),j=P%N,te=j%W.boundary,ue=j+te;P+=te,ue!==0&&N-ue<W.storage&&(P+=N-ue),K.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=P,P+=W.storage}}}const F=P%N;return F>0&&(P+=N-F),R.__size=P,R.__cache={},this}function A(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",R),b}function x(R){const b=R.target;b.removeEventListener("dispose",x);const P=u.indexOf(b.__bindingPointIndex);u.splice(P,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function y(){for(const R in o)n.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}const VD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function zD(){return Oi===null&&(Oi=new NC(VD,16,16,Po,gr),Oi.name="DFG_LUT",Oi.minFilter=wn,Oi.magFilter=wn,Oi.wrapS=dr,Oi.wrapT=dr,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class HD{constructor(e={}){const{canvas:t=cC(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ci}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=S,x=new Set([kp,Bp,Op]),y=new Set([ci,qi,Oa,Ba,Up,Fp]),R=new Uint32Array(4),b=new Int32Array(4);let P=null,N=null;const F=[],B=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let q=!1;this._outputColorSpace=ui;let O=0,K=0,J=null,oe=-1,$=null;const Q=new Jt,W=new Jt;let j=null;const te=new Nt(0);let ue=0,U=t.width,Y=t.height,Ae=1,Xe=null,Ze=null;const re=new Jt(0,0,U,Y),pe=new Jt(0,0,U,Y);let he=!1;const Ue=new Fy;let He=!1,it=!1;const Kt=new rn,mt=new ae,St=new Jt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function kt(){return J===null?Ae:1}let V=r;function Gt(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ip}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),V===null){const X="webgl2";if(V=Gt(X,C),V===null)throw Gt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ct("WebGLRenderer: "+C.message),C}let vt,Mt,Ge,L,E,G,de,me,ce,Oe,Te,qe,rt,xe,Ee,We,Be,be,ct,z,we,Se,De;function ye(){vt=new Hb(V),vt.init(),we=new LD(V,vt),Mt=new Nb(V,vt,e,we),Ge=new bD(V,vt),Mt.reversedDepthBuffer&&g&&Ge.buffers.depth.setReversed(!0),L=new Xb(V),E=new gD,G=new DD(V,vt,Ge,E,Mt,we,L),de=new zb(D),me=new $C(V),Se=new Lb(V,me),ce=new Gb(V,me,L,Se),Oe=new Yb(V,ce,me,Se,L),be=new jb(V,Mt,G),Ee=new Ub(E),Te=new mD(D,de,vt,Mt,Se,Ee),qe=new BD(D,E),rt=new _D,xe=new TD(vt),Be=new Db(D,de,Ge,Oe,M,d),We=new PD(D,Oe,Mt),De=new kD(V,L,Mt,Ge),ct=new Ib(V,vt,L),z=new Wb(V,vt,L),L.programs=Te.programs,D.capabilities=Mt,D.extensions=vt,D.properties=E,D.renderLists=rt,D.shadowMap=We,D.state=Ge,D.info=L}ye(),A!==ci&&(T=new Kb(A,t.width,t.height,o,l));const fe=new FD(D,V);this.xr=fe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=vt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=vt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(C){C!==void 0&&(Ae=C,this.setSize(U,Y,!1))},this.getSize=function(C){return C.set(U,Y)},this.setSize=function(C,X,le=!0){if(fe.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,Y=X,t.width=Math.floor(C*Ae),t.height=Math.floor(X*Ae),le===!0&&(t.style.width=C+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(U*Ae,Y*Ae).floor()},this.setDrawingBufferSize=function(C,X,le){U=C,Y=X,Ae=le,t.width=Math.floor(C*le),t.height=Math.floor(X*le),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(A===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Q)},this.getViewport=function(C){return C.copy(re)},this.setViewport=function(C,X,le,ie){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,X,le,ie),Ge.viewport(Q.copy(re).multiplyScalar(Ae).round())},this.getScissor=function(C){return C.copy(pe)},this.setScissor=function(C,X,le,ie){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,X,le,ie),Ge.scissor(W.copy(pe).multiplyScalar(Ae).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(C){Ge.setScissorTest(he=C)},this.setOpaqueSort=function(C){Xe=C},this.setTransparentSort=function(C){Ze=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,le=!0){let ie=0;if(C){let ee=!1;if(J!==null){const Re=J.texture.format;ee=x.has(Re)}if(ee){const Re=J.texture.type,Ne=y.has(Re),Ce=Be.getClearColor(),Le=Be.getClearAlpha(),$e=Ce.r,et=Ce.g,dt=Ce.b;Ne?(R[0]=$e,R[1]=et,R[2]=dt,R[3]=Le,V.clearBufferuiv(V.COLOR,0,R)):(b[0]=$e,b[1]=et,b[2]=dt,b[3]=Le,V.clearBufferiv(V.COLOR,0,b))}else ie|=V.COLOR_BUFFER_BIT}X&&(ie|=V.DEPTH_BUFFER_BIT),le&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),Be.dispose(),rt.dispose(),xe.dispose(),E.dispose(),de.dispose(),Oe.dispose(),Se.dispose(),De.dispose(),Te.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",yr),fe.removeEventListener("sessionend",ts),ei.stop()};function ke(C){C.preventDefault(),Vv("WebGLRenderer: Context Lost."),q=!0}function ot(){Vv("WebGLRenderer: Context Restored."),q=!1;const C=L.autoReset,X=We.enabled,le=We.autoUpdate,ie=We.needsUpdate,ee=We.type;ye(),L.autoReset=C,We.enabled=X,We.autoUpdate=le,We.needsUpdate=ie,We.type=ee}function Lt(C){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Et(C){const X=C.target;X.removeEventListener("dispose",Et),Jn(X)}function Jn(C){An(C),E.remove(C)}function An(C){const X=E.get(C).programs;X!==void 0&&(X.forEach(function(le){Te.releaseProgram(le)}),C.isShaderMaterial&&Te.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,le,ie,ee,Re){X===null&&(X=bt);const Ne=ee.isMesh&&ee.matrixWorld.determinant()<0,Ce=Za(C,X,le,ie,ee);Ge.setMaterial(ie,Ne);let Le=le.index,$e=1;if(ie.wireframe===!0){if(Le=ce.getWireframeAttribute(le),Le===void 0)return;$e=2}const et=le.drawRange,dt=le.attributes.position;let Qe=et.start*$e,Dt=(et.start+et.count)*$e;Re!==null&&(Qe=Math.max(Qe,Re.start*$e),Dt=Math.min(Dt,(Re.start+Re.count)*$e)),Le!==null?(Qe=Math.max(Qe,0),Dt=Math.min(Dt,Le.count)):dt!=null&&(Qe=Math.max(Qe,0),Dt=Math.min(Dt,dt.count));const Ot=Dt-Qe;if(Ot<0||Ot===1/0)return;Se.setup(ee,ie,Ce,le,Le);let Ut,yt=ct;if(Le!==null&&(Ut=me.get(Le),yt=z,yt.setIndex(Ut)),ee.isMesh)ie.wireframe===!0?(Ge.setLineWidth(ie.wireframeLinewidth*kt()),yt.setMode(V.LINES)):yt.setMode(V.TRIANGLES);else if(ee.isLine){let $t=ie.linewidth;$t===void 0&&($t=1),Ge.setLineWidth($t*kt()),ee.isLineSegments?yt.setMode(V.LINES):ee.isLineLoop?yt.setMode(V.LINE_LOOP):yt.setMode(V.LINE_STRIP)}else ee.isPoints?yt.setMode(V.POINTS):ee.isSprite&&yt.setMode(V.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)tc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))yt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const $t=ee._multiDrawStarts,Ye=ee._multiDrawCounts,Cn=ee._multiDrawCount,_t=Le?me.get(Le).bytesPerElement:1,Nn=E.get(ie).currentProgram.getUniforms();for(let Un=0;Un<Cn;Un++)Nn.setValue(V,"_gl_DrawID",Un),yt.render($t[Un]/_t,Ye[Un])}else if(ee.isInstancedMesh)yt.renderInstances(Qe,Ot,ee.count);else if(le.isInstancedBufferGeometry){const $t=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ye=Math.min(le.instanceCount,$t);yt.renderInstances(Qe,Ot,Ye)}else yt.render(Qe,Ot)};function Ns(C,X,le){C.transparent===!0&&C.side===fr&&C.forceSinglePass===!1?(C.side=Gn,C.needsUpdate=!0,is(C,X,le),C.side=Jr,C.needsUpdate=!0,is(C,X,le),C.side=fr):is(C,X,le)}this.compile=function(C,X,le=null){le===null&&(le=C),N=xe.get(le),N.init(X),B.push(N),le.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),C!==le&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),N.setupLights();const ie=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Re=ee.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){const Ce=Re[Ne];Ns(Ce,le,ee),ie.add(Ce)}else Ns(Re,le,ee),ie.add(Re)}),N=B.pop(),ie},this.compileAsync=function(C,X,le=null){const ie=this.compile(C,X,le);return new Promise(ee=>{function Re(){if(ie.forEach(function(Ne){E.get(Ne).currentProgram.isReady()&&ie.delete(Ne)}),ie.size===0){ee(C);return}setTimeout(Re,10)}vt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let $i=null;function cc(C){$i&&$i(C)}function yr(){ei.stop()}function ts(){ei.start()}const ei=new zy;ei.setAnimationLoop(cc),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(C){$i=C,fe.setAnimationLoop(C),C===null?ei.stop():ei.start()},fe.addEventListener("sessionstart",yr),fe.addEventListener("sessionend",ts),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;const le=fe.enabled===!0&&fe.isPresenting===!0,ie=T!==null&&(J===null||le)&&T.begin(D,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(X),X=fe.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,X,J),N=xe.get(C,B.length),N.init(X),B.push(N),Kt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ue.setFromProjectionMatrix(Kt,Hi,X.reversedDepth),it=this.localClippingEnabled,He=Ee.init(this.clippingPlanes,it),P=rt.get(C,F.length),P.init(),F.push(P),fe.enabled===!0&&fe.isPresenting===!0){const Ne=D.xr.getDepthSensingMesh();Ne!==null&&ns(Ne,X,-1/0,D.sortObjects)}ns(C,X,0,D.sortObjects),P.finish(),D.sortObjects===!0&&P.sort(Xe,Ze),ft=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ft&&Be.addToRenderList(P,C),this.info.render.frame++,He===!0&&Ee.beginShadows();const ee=N.state.shadowsArray;if(We.render(ee,C,X),He===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&T.hasRenderPass())===!1){const Ne=P.opaque,Ce=P.transmissive;if(N.setupLights(),X.isArrayCamera){const Le=X.cameras;if(Ce.length>0)for(let $e=0,et=Le.length;$e<et;$e++){const dt=Le[$e];Ka(Ne,Ce,C,dt)}ft&&Be.render(C);for(let $e=0,et=Le.length;$e<et;$e++){const dt=Le[$e];qa(P,C,dt,dt.viewport)}}else Ce.length>0&&Ka(Ne,Ce,C,X),ft&&Be.render(C),qa(P,C,X)}J!==null&&K===0&&(G.updateMultisampleRenderTarget(J),G.updateRenderTargetMipmap(J)),ie&&T.end(D),C.isScene===!0&&C.onAfterRender(D,C,X),Se.resetDefaultState(),oe=-1,$=null,B.pop(),B.length>0?(N=B[B.length-1],He===!0&&Ee.setGlobalState(D.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function ns(C,X,le,ie){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ue.intersectsSprite(C)){ie&&St.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Kt);const Ne=Oe.update(C),Ce=C.material;Ce.visible&&P.push(C,Ne,Ce,le,St.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ue.intersectsObject(C))){const Ne=Oe.update(C),Ce=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),St.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),St.copy(Ne.boundingSphere.center)),St.applyMatrix4(C.matrixWorld).applyMatrix4(Kt)),Array.isArray(Ce)){const Le=Ne.groups;for(let $e=0,et=Le.length;$e<et;$e++){const dt=Le[$e],Qe=Ce[dt.materialIndex];Qe&&Qe.visible&&P.push(C,Ne,Qe,le,St.z,dt)}}else Ce.visible&&P.push(C,Ne,Ce,le,St.z,null)}}const Re=C.children;for(let Ne=0,Ce=Re.length;Ne<Ce;Ne++)ns(Re[Ne],X,le,ie)}function qa(C,X,le,ie){const{opaque:ee,transmissive:Re,transparent:Ne}=C;N.setupLightsView(le),He===!0&&Ee.setGlobalState(D.clippingPlanes,le),ie&&Ge.viewport(Q.copy(ie)),ee.length>0&&Us(ee,X,le),Re.length>0&&Us(Re,X,le),Ne.length>0&&Us(Ne,X,le),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Ka(C,X,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ie.id]===void 0){const Qe=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ie.id]=new Xi(1,1,{generateMipmaps:!0,type:Qe?gr:ci,minFilter:Ps,samples:Math.max(4,Mt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Re=N.state.transmissionRenderTarget[ie.id],Ne=ie.viewport||Q;Re.setSize(Ne.z*D.transmissionResolutionScale,Ne.w*D.transmissionResolutionScale);const Ce=D.getRenderTarget(),Le=D.getActiveCubeFace(),$e=D.getActiveMipmapLevel();D.setRenderTarget(Re),D.getClearColor(te),ue=D.getClearAlpha(),ue<1&&D.setClearColor(16777215,.5),D.clear(),ft&&Be.render(le);const et=D.toneMapping;D.toneMapping=Wi;const dt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),N.setupLightsView(ie),He===!0&&Ee.setGlobalState(D.clippingPlanes,ie),Us(C,le,ie),G.updateMultisampleRenderTarget(Re),G.updateRenderTargetMipmap(Re),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Dt=0,Ot=X.length;Dt<Ot;Dt++){const Ut=X[Dt],{object:yt,geometry:$t,material:Ye,group:Cn}=Ut;if(Ye.side===fr&&yt.layers.test(ie.layers)){const _t=Ye.side;Ye.side=Gn,Ye.needsUpdate=!0,Di(yt,le,ie,$t,Ye,Cn),Ye.side=_t,Ye.needsUpdate=!0,Qe=!0}}Qe===!0&&(G.updateMultisampleRenderTarget(Re),G.updateRenderTargetMipmap(Re))}D.setRenderTarget(Ce,Le,$e),D.setClearColor(te,ue),dt!==void 0&&(ie.viewport=dt),D.toneMapping=et}function Us(C,X,le){const ie=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,Re=C.length;ee<Re;ee++){const Ne=C[ee],{object:Ce,geometry:Le,group:$e}=Ne;let et=Ne.material;et.allowOverride===!0&&ie!==null&&(et=ie),Ce.layers.test(le.layers)&&Di(Ce,X,le,Le,et,$e)}}function Di(C,X,le,ie,ee,Re){C.onBeforeRender(D,X,le,ie,ee,Re),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(D,X,le,ie,C,Re),ee.transparent===!0&&ee.side===fr&&ee.forceSinglePass===!1?(ee.side=Gn,ee.needsUpdate=!0,D.renderBufferDirect(le,X,ie,ee,C,Re),ee.side=Jr,ee.needsUpdate=!0,D.renderBufferDirect(le,X,ie,ee,C,Re),ee.side=fr):D.renderBufferDirect(le,X,ie,ee,C,Re),C.onAfterRender(D,X,le,ie,ee,Re)}function is(C,X,le){X.isScene!==!0&&(X=bt);const ie=E.get(C),ee=N.state.lights,Re=N.state.shadowsArray,Ne=ee.state.version,Ce=Te.getParameters(C,ee.state,Re,X,le),Le=Te.getProgramCacheKey(Ce);let $e=ie.programs;ie.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,ie.fog=X.fog;const et=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ie.envMap=de.get(C.envMap||ie.environment,et),ie.envMapRotation=ie.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",Et),$e=new Map,ie.programs=$e);let dt=$e.get(Le);if(dt!==void 0){if(ie.currentProgram===dt&&ie.lightsStateVersion===Ne)return $a(C,Ce),dt}else Ce.uniforms=Te.getUniforms(C),C.onBeforeCompile(Ce,D),dt=Te.acquireProgram(Ce,Le),$e.set(Le,dt),ie.uniforms=Ce.uniforms;const Qe=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Ee.uniform),$a(C,Ce),ie.needsLights=Ja(C),ie.lightsStateVersion=Ne,ie.needsLights&&(Qe.ambientLightColor.value=ee.state.ambient,Qe.lightProbe.value=ee.state.probe,Qe.directionalLights.value=ee.state.directional,Qe.directionalLightShadows.value=ee.state.directionalShadow,Qe.spotLights.value=ee.state.spot,Qe.spotLightShadows.value=ee.state.spotShadow,Qe.rectAreaLights.value=ee.state.rectArea,Qe.ltc_1.value=ee.state.rectAreaLTC1,Qe.ltc_2.value=ee.state.rectAreaLTC2,Qe.pointLights.value=ee.state.point,Qe.pointLightShadows.value=ee.state.pointShadow,Qe.hemisphereLights.value=ee.state.hemi,Qe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ee.state.spotLightMatrix,Qe.spotLightMap.value=ee.state.spotLightMap,Qe.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.currentProgram=dt,ie.uniformsList=null,dt}function Bo(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Hu.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function $a(C,X){const le=E.get(C);le.outputColorSpace=X.outputColorSpace,le.batching=X.batching,le.batchingColor=X.batchingColor,le.instancing=X.instancing,le.instancingColor=X.instancingColor,le.instancingMorph=X.instancingMorph,le.skinning=X.skinning,le.morphTargets=X.morphTargets,le.morphNormals=X.morphNormals,le.morphColors=X.morphColors,le.morphTargetsCount=X.morphTargetsCount,le.numClippingPlanes=X.numClippingPlanes,le.numIntersection=X.numClipIntersection,le.vertexAlphas=X.vertexAlphas,le.vertexTangents=X.vertexTangents,le.toneMapping=X.toneMapping}function Za(C,X,le,ie,ee){X.isScene!==!0&&(X=bt),G.resetTextureUnits();const Re=X.fog,Ne=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?X.environment:null,Ce=J===null?D.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:bo,Le=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,$e=de.get(ie.envMap||Ne,Le),et=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,dt=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Qe=!!le.morphAttributes.position,Dt=!!le.morphAttributes.normal,Ot=!!le.morphAttributes.color;let Ut=Wi;ie.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ut=D.toneMapping);const yt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,$t=yt!==void 0?yt.length:0,Ye=E.get(ie),Cn=N.state.lights;if(He===!0&&(it===!0||C!==$)){const Zt=C===$&&ie.id===oe;Ee.setState(ie,C,Zt)}let _t=!1;ie.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Cn.state.version||Ye.outputColorSpace!==Ce||ee.isBatchedMesh&&Ye.batching===!1||!ee.isBatchedMesh&&Ye.batching===!0||ee.isBatchedMesh&&Ye.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ye.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ye.instancing===!1||!ee.isInstancedMesh&&Ye.instancing===!0||ee.isSkinnedMesh&&Ye.skinning===!1||!ee.isSkinnedMesh&&Ye.skinning===!0||ee.isInstancedMesh&&Ye.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ye.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ye.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ye.instancingMorph===!1&&ee.morphTexture!==null||Ye.envMap!==$e||ie.fog===!0&&Ye.fog!==Re||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ee.numPlanes||Ye.numIntersection!==Ee.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==dt||Ye.morphTargets!==Qe||Ye.morphNormals!==Dt||Ye.morphColors!==Ot||Ye.toneMapping!==Ut||Ye.morphTargetsCount!==$t)&&(_t=!0):(_t=!0,Ye.__version=ie.version);let Nn=Ye.currentProgram;_t===!0&&(Nn=is(ie,X,ee));let Un=!1,Wn=!1,Sr=!1;const Rt=Nn.getUniforms(),at=Ye.uniforms;if(Ge.useProgram(Nn.program)&&(Un=!0,Wn=!0,Sr=!0),ie.id!==oe&&(oe=ie.id,Wn=!0),Un||$!==C){Ge.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(V,"projectionMatrix",C.projectionMatrix),Rt.setValue(V,"viewMatrix",C.matrixWorldInverse);const ti=Rt.map.cameraPosition;ti!==void 0&&ti.setValue(V,mt.setFromMatrixPosition(C.matrixWorld)),Mt.logarithmicDepthBuffer&&Rt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Rt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),$!==C&&($=C,Wn=!0,Sr=!0)}if(Ye.needsLights&&(Cn.state.directionalShadowMap.length>0&&Rt.setValue(V,"directionalShadowMap",Cn.state.directionalShadowMap,G),Cn.state.spotShadowMap.length>0&&Rt.setValue(V,"spotShadowMap",Cn.state.spotShadowMap,G),Cn.state.pointShadowMap.length>0&&Rt.setValue(V,"pointShadowMap",Cn.state.pointShadowMap,G)),ee.isSkinnedMesh){Rt.setOptional(V,ee,"bindMatrix"),Rt.setOptional(V,ee,"bindMatrixInverse");const Zt=ee.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Rt.setValue(V,"boneTexture",Zt.boneTexture,G))}ee.isBatchedMesh&&(Rt.setOptional(V,ee,"batchingTexture"),Rt.setValue(V,"batchingTexture",ee._matricesTexture,G),Rt.setOptional(V,ee,"batchingIdTexture"),Rt.setValue(V,"batchingIdTexture",ee._indirectTexture,G),Rt.setOptional(V,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Rt.setValue(V,"batchingColorTexture",ee._colorsTexture,G));const hi=le.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&be.update(ee,le,Nn),(Wn||Ye.receiveShadow!==ee.receiveShadow)&&(Ye.receiveShadow=ee.receiveShadow,Rt.setValue(V,"receiveShadow",ee.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&X.environment!==null&&(at.envMapIntensity.value=X.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=zD()),Wn&&(Rt.setValue(V,"toneMappingExposure",D.toneMappingExposure),Ye.needsLights&&Qa(at,Sr),Re&&ie.fog===!0&&qe.refreshFogUniforms(at,Re),qe.refreshMaterialUniforms(at,ie,Ae,Y,N.state.transmissionRenderTarget[C.id]),Hu.upload(V,Bo(Ye),at,G)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Hu.upload(V,Bo(Ye),at,G),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Rt.setValue(V,"center",ee.center),Rt.setValue(V,"modelViewMatrix",ee.modelViewMatrix),Rt.setValue(V,"normalMatrix",ee.normalMatrix),Rt.setValue(V,"modelMatrix",ee.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Zt=ie.uniformsGroups;for(let ti=0,Zi=Zt.length;ti<Zi;ti++){const ko=Zt[ti];De.update(ko,Nn),De.bind(ko,Nn)}}return Nn}function Qa(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Ja(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,X,le){const ie=E.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=X,E.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const le=E.get(C);le.__webglFramebuffer=X,le.__useDefaultFramebuffer=X===void 0};const el=V.createFramebuffer();this.setRenderTarget=function(C,X=0,le=0){J=C,O=X,K=le;let ie=null,ee=!1,Re=!1;if(C){const Ce=E.get(C);if(Ce.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(V.FRAMEBUFFER,Ce.__webglFramebuffer),Q.copy(C.viewport),W.copy(C.scissor),j=C.scissorTest,Ge.viewport(Q),Ge.scissor(W),Ge.setScissorTest(j),oe=-1;return}else if(Ce.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(Ce.__hasExternalTextures)G.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Ce.__boundDepthTexture!==et){if(et!==null&&E.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const Le=C.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Re=!0);const $e=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[X])?ie=$e[X][le]:ie=$e[X],ee=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?ie=E.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?ie=$e[le]:ie=$e,Q.copy(C.viewport),W.copy(C.scissor),j=C.scissorTest}else Q.copy(re).multiplyScalar(Ae).floor(),W.copy(pe).multiplyScalar(Ae).floor(),j=he;if(le!==0&&(ie=el),Ge.bindFramebuffer(V.FRAMEBUFFER,ie)&&Ge.drawBuffers(C,ie),Ge.viewport(Q),Ge.scissor(W),Ge.setScissorTest(j),ee){const Ce=E.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,le)}else if(Re){const Ce=X;for(let Le=0;Le<C.textures.length;Le++){const $e=E.get(C.textures[Le]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Le,$e.__webglTexture,le,Ce)}}else if(C!==null&&le!==0){const Ce=E.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ce.__webglTexture,le)}oe=-1},this.readRenderTargetPixels=function(C,X,le,ie,ee,Re,Ne,Ce=0){if(!(C&&C.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Le=Le[Ne]),Le){Ge.bindFramebuffer(V.FRAMEBUFFER,Le);try{const $e=C.textures[Ce],et=$e.format,dt=$e.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),!Mt.textureFormatReadable(et)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(dt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ie&&le>=0&&le<=C.height-ee&&V.readPixels(X,le,ie,ee,we.convert(et),we.convert(dt),Re)}finally{const $e=J!==null?E.get(J).__webglFramebuffer:null;Ge.bindFramebuffer(V.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,X,le,ie,ee,Re,Ne,Ce=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Le=Le[Ne]),Le)if(X>=0&&X<=C.width-ie&&le>=0&&le<=C.height-ee){Ge.bindFramebuffer(V.FRAMEBUFFER,Le);const $e=C.textures[Ce],et=$e.format,dt=$e.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),!Mt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.bufferData(V.PIXEL_PACK_BUFFER,Re.byteLength,V.STREAM_READ),V.readPixels(X,le,ie,ee,we.convert(et),we.convert(dt),0);const Dt=J!==null?E.get(J).__webglFramebuffer:null;Ge.bindFramebuffer(V.FRAMEBUFFER,Dt);const Ot=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await fC(V,Ot,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Re),V.deleteBuffer(Qe),V.deleteSync(Ot),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,le=0){const ie=Math.pow(2,-le),ee=Math.floor(C.image.width*ie),Re=Math.floor(C.image.height*ie),Ne=X!==null?X.x:0,Ce=X!==null?X.y:0;G.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Ne,Ce,ee,Re),Ge.unbindTexture()};const fc=V.createFramebuffer(),dc=V.createFramebuffer();this.copyTextureToTexture=function(C,X,le=null,ie=null,ee=0,Re=0){let Ne,Ce,Le,$e,et,dt,Qe,Dt,Ot;const Ut=C.isCompressedTexture?C.mipmaps[Re]:C.image;if(le!==null)Ne=le.max.x-le.min.x,Ce=le.max.y-le.min.y,Le=le.isBox3?le.max.z-le.min.z:1,$e=le.min.x,et=le.min.y,dt=le.isBox3?le.min.z:0;else{const at=Math.pow(2,-ee);Ne=Math.floor(Ut.width*at),Ce=Math.floor(Ut.height*at),C.isDataArrayTexture?Le=Ut.depth:C.isData3DTexture?Le=Math.floor(Ut.depth*at):Le=1,$e=0,et=0,dt=0}ie!==null?(Qe=ie.x,Dt=ie.y,Ot=ie.z):(Qe=0,Dt=0,Ot=0);const yt=we.convert(X.format),$t=we.convert(X.type);let Ye;X.isData3DTexture?(G.setTexture3D(X,0),Ye=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(G.setTexture2DArray(X,0),Ye=V.TEXTURE_2D_ARRAY):(G.setTexture2D(X,0),Ye=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Cn=V.getParameter(V.UNPACK_ROW_LENGTH),_t=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Nn=V.getParameter(V.UNPACK_SKIP_PIXELS),Un=V.getParameter(V.UNPACK_SKIP_ROWS),Wn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ut.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ut.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,$e),V.pixelStorei(V.UNPACK_SKIP_ROWS,et),V.pixelStorei(V.UNPACK_SKIP_IMAGES,dt);const Sr=C.isDataArrayTexture||C.isData3DTexture,Rt=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const at=E.get(C),hi=E.get(X),Zt=E.get(at.__renderTarget),ti=E.get(hi.__renderTarget);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Zi=0;Zi<Le;Zi++)Sr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(C).__webglTexture,ee,dt+Zi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Re,Ot+Zi)),V.blitFramebuffer($e,et,Ne,Ce,Qe,Dt,Ne,Ce,V.DEPTH_BUFFER_BIT,V.NEAREST);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||E.has(C)){const at=E.get(C),hi=E.get(X);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,fc),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,dc);for(let Zt=0;Zt<Le;Zt++)Sr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,at.__webglTexture,ee,dt+Zt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,at.__webglTexture,ee),Rt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hi.__webglTexture,Re,Ot+Zt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hi.__webglTexture,Re),ee!==0?V.blitFramebuffer($e,et,Ne,Ce,Qe,Dt,Ne,Ce,V.COLOR_BUFFER_BIT,V.NEAREST):Rt?V.copyTexSubImage3D(Ye,Re,Qe,Dt,Ot+Zt,$e,et,Ne,Ce):V.copyTexSubImage2D(Ye,Re,Qe,Dt,$e,et,Ne,Ce);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Ye,Re,Qe,Dt,Ot,Ne,Ce,Le,yt,$t,Ut.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Ye,Re,Qe,Dt,Ot,Ne,Ce,Le,yt,Ut.data):V.texSubImage3D(Ye,Re,Qe,Dt,Ot,Ne,Ce,Le,yt,$t,Ut):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Re,Qe,Dt,Ne,Ce,yt,$t,Ut.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Re,Qe,Dt,Ut.width,Ut.height,yt,Ut.data):V.texSubImage2D(V.TEXTURE_2D,Re,Qe,Dt,Ne,Ce,yt,$t,Ut);V.pixelStorei(V.UNPACK_ROW_LENGTH,Cn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Nn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Un),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wn),Re===0&&X.generateMipmaps&&V.generateMipmap(Ye),Ge.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){O=0,K=0,J=null,Ge.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const GD=`
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = vec4(position, 1.0);
}
`,WD=`
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_uv;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

float snoise(vec2 v) {
  const vec4 C = vec4(
    0.211324865405187,
    0.366025403784439,
   -0.577350269189626,
    0.024390243902439
  );

  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i);
  vec3 p = permute(
    permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
    0.5 - vec3(
      dot(x0, x0),
      dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)
    ),
    0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float grain(vec2 uv) {
  return fract(sin(dot(uv, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec2 uv = v_uv;
  vec2 aspect = vec2(u_resolution.x / max(u_resolution.y, 1.0), 1.0);
  vec2 centered = (uv - 0.5) * aspect;
  vec2 mouse = (u_mouse - 0.5) * aspect;

  float t = u_time * 0.08;
  float n1 = snoise(centered * 1.8 + vec2(t, -t * 0.6));
  float n2 = snoise(centered * 3.2 - vec2(t * 0.7, t * 0.9));
  float flow = n1 * 0.65 + n2 * 0.35;

  vec3 deepBlue = vec3(0.043, 0.059, 0.141);
  vec3 darkPurple = vec3(0.192, 0.082, 0.278);
  vec3 magenta = vec3(0.659, 0.157, 0.761);

  float baseMix = smoothstep(-0.85, 0.8, flow);
  vec3 color = mix(deepBlue, darkPurple, baseMix);

  vec2 hotspotPos = mouse * 0.9 + vec2(
    snoise(centered * 1.0 + vec2(t * 0.8, -t * 0.3)) * 0.16,
    snoise(centered * 1.0 + vec2(-t * 0.4, t * 0.5)) * 0.16
  );
  float hotspot = exp(-length(centered - hotspotPos) * 3.2);
  hotspot += exp(-length(centered + hotspotPos * 0.7 + vec2(0.22, -0.14)) * 4.5) * 0.5;

  color = mix(color, magenta, clamp(hotspot, 0.0, 1.0) * 0.75);

  float vignette = smoothstep(1.3, 0.15, length(centered));
  color *= vignette * 0.92 + 0.08;

  float filmGrain = grain(gl_FragCoord.xy);
  float grainAmount = (filmGrain - 0.5) * 0.16;
  color += grainAmount;

  gl_FragColor = vec4(color, 1.0);
}
`;function XD(){const n=st.useRef(null);return st.useEffect(()=>{const e=n.current;if(!e)return;const t=document.body.style.overflow,r=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden";const o=new HD({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"});o.setPixelRatio(Math.min(window.devicePixelRatio,2));const l=new CC,u=new Wp(-1,1,1,-1,.1,10);u.position.z=1;const f={u_time:{value:0},u_resolution:{value:new Pt(window.innerWidth,window.innerHeight)},u_mouse:{value:new Pt(.5,.5)}},d=new bi({uniforms:f,vertexShader:GD,fragmentShader:WD}),h=new Ki(new Ya(2,2),d);l.add(h);const m=()=>{const x=window.innerWidth,y=window.innerHeight;o.setSize(x,y,!1),f.u_resolution.value.set(x,y)},v=new Pt(.5,.5),g=x=>{v.set(x.clientX/window.innerWidth,1-x.clientY/window.innerHeight)};window.addEventListener("resize",m),window.addEventListener("mousemove",g,{passive:!0}),m();let S=0;const M=new qC,A=()=>{f.u_time.value=M.getElapsedTime(),f.u_mouse.value.lerp(v,.06),o.render(l,u),S=window.requestAnimationFrame(A)};return A(),()=>{window.cancelAnimationFrame(S),window.removeEventListener("resize",m),window.removeEventListener("mousemove",g),document.body.style.overflow=t,document.documentElement.style.overflow=r,h.geometry.dispose(),d.dispose(),o.dispose()}},[]),Je.jsx("canvas",{ref:n,className:"fixed inset-0 h-screen w-screen pointer-events-none","aria-hidden":"true"})}const jD="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function YD(n){const[e,t]=st.useState(!1),r=()=>{t(!0)},{src:o,alt:l,style:u,className:f,...d}=n;return e?Je.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:u,children:Je.jsx("div",{className:"flex items-center justify-center w-full h-full",children:Je.jsx("img",{src:jD,alt:"Error loading image",...d,"data-original-url":o})})}):Je.jsx("img",{src:o,alt:l,className:f,style:u,...d,onError:r})}function qD({logos:n=[]}){return n.length?Je.jsx("div",{className:"marquee",children:Je.jsx("div",{className:"marquee-track gap-16 items-center",children:[...n,...n].map((e,t)=>{const r=/virtua|vita/i.test(e.alt),o={height:r?"56px":"48px",width:"auto",maxWidth:r?"180px":"160px"};return Je.jsx(wi.div,{className:"px-4 flex items-center justify-center",children:Je.jsx(YD,{src:e.src,alt:e.alt,className:"block object-contain",style:o,loading:"lazy"})},`${e.alt}-${t}`)})})}):null}function KD(){return Je.jsxs("section",{className:"relative h-screen w-screen flex items-center justify-center overflow-hidden",children:[Je.jsx("div",{className:"absolute inset-0",children:Je.jsx(XD,{})}),Je.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[Je.jsx(wi.div,{className:"absolute top-1/4 right-1/4 w-64 h-64 border border-accent-yellow/10 rounded-full",animate:{rotate:360},transition:{duration:60,repeat:1/0,ease:"linear"}}),Je.jsx(wi.div,{className:"absolute bottom-1/3 left-1/4 w-48 h-48 border border-accent-yellow/10",style:{borderRadius:"30%"},animate:{rotate:-360},transition:{duration:50,repeat:1/0,ease:"linear"}})]}),Je.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 text-center",style:{paddingTop:150},children:[Je.jsx(wi.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.3,ease:[.22,1,.36,1]},className:"mb-8 max-w-5xl mx-auto text-center font-poppins font-weight-400 text-gradient-light",children:"Tecnologia, estética e evolução digital."}),Je.jsx(wi.p,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.4,ease:[.22,1,.36,1]},className:"max-w-4xl mx-auto mb-12 text-xl text-center font-montserrat text-gray-7d",children:"Criamos aplicações modernas e inteligentes que unem tecnologia, fluidez e estética."}),Je.jsx(wi.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.5,ease:[.22,1,.36,1]},className:"flex justify-center items-center",style:{marginBottom:150},children:Je.jsxs(wi.a,{href:"#contact","aria-label":"Iniciar projeto",className:"group relative px-10 py-5 bg-accent-yellow text-dark-bg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl",children:[Je.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-accent-yellow-bright to-accent-yellow opacity-0 group-hover:opacity-100 transition-opacity"}),Je.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:["Iniciar projeto",Je.jsx(wi.span,{animate:{x:[0,5,0]},transition:{duration:1.5,repeat:1/0},children:"→"})]})]})}),Je.jsxs(wi.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.6,ease:[.22,1,.36,1]},className:"mt-36 md:mt-44 opacity-90 pt-8",children:[Je.jsxs("div",{className:"inline-flex items-center gap-3 px-5 py-2 glass-tech rounded-full mb-10",children:[Je.jsx("img",{src:"/icons/leaf.svg",className:"h-4 w-auto flex-shrink-0",alt:""}),Je.jsx("span",{className:"text-sm text-text-secondary whitespace-nowrap",children:"Marcas que confiam"})]}),Je.jsx("div",{style:{paddingBottom:150},children:Je.jsx(qD,{logos:[{src:"/logos/pleno.png",alt:"Pleno"},{src:"/logos/virtua.png",alt:"Virtua"},{src:"/logos/vita.png",alt:"Vita"},{src:"/logos/ypet%20l.png",alt:"Ypet"}]})}),Je.jsx("div",{className:"mt-0",children:Je.jsxs("div",{className:"font-poppins font-weight-400 text-center leading-110",children:[Je.jsx("span",{className:"block text-46 text-gray-cc",children:"Sabemos como o digital funciona."}),Je.jsx("span",{className:"block text-46 text-gray-4d",children:"Seu negócio precisa de presença,"}),Je.jsx("span",{className:"block text-46 text-gray-4d",children:"velocidade e experiência — e criar isso"}),Je.jsx("span",{className:"block text-46 text-gray-4d",children:"internamente pode ser caro, demorado"}),Je.jsx("span",{className:"block text-46 text-gray-4d",children:"e improdutivo."}),Je.jsx("span",{className:"block text-46 text-gray-cc",children:"É aqui que a Pump entra em cena."})]})})]}),Je.jsxs(wi.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.6,ease:[.22,1,.36,1]},className:"mt-24 grid grid-cols-3 gap-8 max-w-3xl mx-auto",children:[Je.jsxs("div",{className:"glass-tech p-6 rounded-2xl",children:[Je.jsx("h3",{className:"text-accent-yellow mb-2",children:"200K+"}),Je.jsx("p",{className:"text-sm text-text-secondary",children:"Usuários diários"})]}),Je.jsxs("div",{className:"glass-tech p-6 rounded-2xl",children:[Je.jsx("h3",{className:"text-accent-yellow mb-2",children:"100+"}),Je.jsx("p",{className:"text-sm text-text-secondary",children:"Projetos"})]}),Je.jsxs("div",{className:"glass-tech p-6 rounded-2xl",children:[Je.jsx("h3",{className:"text-accent-yellow mb-2",children:"99.9%"}),Je.jsx("p",{className:"text-sm text-text-secondary",children:"Uptime"})]})]})]})]})}function $D(){return Je.jsx("div",{className:"fixed inset-0 z-[9999] h-screen w-screen bg-[#0B001A] flex items-center justify-center overflow-hidden",children:Je.jsx("svg",{viewBox:"0 0 200 200",className:"w-32 h-32",style:{filter:"drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))"},children:Je.jsx(wi.path,{d:"M40 100C40 60 80 60 100 100C120 140 160 140 160 100C160 60 120 60 100 100C80 140 40 140 40 100Z",fill:"none",stroke:"#D4AF37",strokeWidth:1.5,strokeLinecap:"round",initial:{pathLength:.15,pathOffset:0,opacity:0},animate:{pathOffset:1,opacity:1},transition:{duration:2,repeat:1/0,ease:"linear"}})})})}function ZD(){const[n,e]=st.useState(!0);return st.useEffect(()=>{const t=window.setTimeout(()=>{e(!1)},4e3);return()=>window.clearTimeout(t)},[]),n?Je.jsx($D,{}):Je.jsx("div",{className:"smooth-scroll",children:Je.jsx(KD,{})})}IM.createRoot(document.getElementById("root")).render(Je.jsx(ZD,{}));
