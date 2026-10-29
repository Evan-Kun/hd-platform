var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function M(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function N(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function P(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,P(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+M(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),P(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+M(a,u),c+=P(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+M(a,u++),c+=P(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return P(N(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function F(e,t,n){if(e==null)return e;var r=[],i=0;return P(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function I(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var L=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function R(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,L)}catch(e){L(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function ee(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else R(ee.bind(null,e))}var te={map:F,forEach:function(e,t,n){F(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return F(e,function(){t++}),t},toArray:function(e){return F(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=te,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=ee,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=R,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),A=Symbol.for(`react.portal`),j=Symbol.for(`react.fragment`),M=Symbol.for(`react.strict_mode`),N=Symbol.for(`react.profiler`),P=Symbol.for(`react.consumer`),F=Symbol.for(`react.context`),I=Symbol.for(`react.forward_ref`),L=Symbol.for(`react.suspense`),R=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),te=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.legacy_hidden`),ie=Symbol.for(`react.memo_cache_sentinel`),z=Symbol.for(`react.view_transition`),ae=Symbol.for(`react.recoverable`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case j:return`Fragment`;case N:return`Profiler`;case M:return`StrictMode`;case L:return`Suspense`;case R:return`SuspenseList`;case ne:return`Activity`;case z:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case A:return`Portal`;case F:return e.displayName||`Context`;case P:return(e._context.displayName||`Context`)+`.Consumer`;case I:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case te:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,B=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function ge(e,t){pe++,fe[pe]=e.current,e.current=t}var _e=me(null),ve=me(null),ye=me(null),be=me(null);function xe(e,t){switch(ge(ye,t),ge(ve,e),ge(_e,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?dp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=dp(t),e=fp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(_e),ge(_e,e)}function Se(){he(_e),he(ve),he(ye)}function Ce(e){var t=e.memoizedState;t!==null&&(ch._currentValue=t.memoizedState,ge(be,e)),t=_e.current;var n=fp(t,e.type);t!==n&&(ge(ve,e),ge(_e,n))}function we(e){ve.current===e&&(he(_e),he(ve)),be.current===e&&(he(be),ch._currentValue=de)}var Te,Ee;function De(e){if(Te===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Te=t&&t[1]||``,Ee=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Te+e+Ee}var Oe=!1;function ke(e,t){if(!e||Oe)return``;Oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Oe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?De(n):``}function Ae(e,t){switch(e.tag){case 26:case 27:case 5:return De(e.type);case 16:return De(`Lazy`);case 13:return e.child!==t&&t!==null?De(`Suspense Fallback`):De(`Suspense`);case 19:return De(`SuspenseList`);case 0:case 15:return ke(e.type,!1);case 11:return ke(e.type.render,!1);case 1:return ke(e.type,!0);case 31:return De(`Activity`);case 30:return De(`ViewTransition`);default:return``}}function je(e){try{var t=``,n=null;do t+=Ae(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Me=Object.prototype.hasOwnProperty,Ne=t.unstable_scheduleCallback,Pe=t.unstable_cancelCallback,Fe=t.unstable_shouldYield,Ie=t.unstable_requestPaint,Le=t.unstable_now,Re=t.unstable_getCurrentPriorityLevel,ze=t.unstable_ImmediatePriority,Be=t.unstable_UserBlockingPriority,Ve=t.unstable_NormalPriority,He=t.unstable_LowPriority,Ue=t.unstable_IdlePriority,We=t.log,Ge=t.unstable_setDisableYieldValue,Ke=null,qe=null;function Je(e){if(typeof We==`function`&&Ge(e),qe&&typeof qe.setStrictMode==`function`)try{qe.setStrictMode(Ke,e)}catch{}}var Ye=Math.clz32?Math.clz32:Qe,Xe=Math.log,Ze=Math.LN2;function Qe(e){return e>>>=0,e===0?32:31-(Xe(e)/Ze|0)|0}var $e=256,et=262144,tt=4194304;function nt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=nt(n))):i=nt(o):i=nt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=nt(n))):i=nt(o)):i=nt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function it(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function at(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Ye(n),i=1<<r;t|=e[r],n&=~i}return t}function ot(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function st(){var e=tt;return tt<<=1,!(tt&62914560)&&(tt=4194304),e}function ct(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ut(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ye(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&dt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function dt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ye(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ft(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function pt(e,t){var n=t&-t;return n=n&42?1:mt(n),(n&(e.suspendedLanes|t))===0?n:0}function mt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ht(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function gt(){var e=V.p;return e===0?(e=window.event,e===void 0?32:wh(e.type)):e}function _t(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var vt=Math.random().toString(36).slice(2),yt=`__reactFiber$`+vt,bt=`__reactProps$`+vt,xt=`__reactContainer$`+vt,St=`__reactEvents$`+vt,Ct=`__reactListeners$`+vt,wt=`__reactHandles$`+vt,Tt=`__reactResources$`+vt,Et=`__reactMarker$`+vt,Dt=`__reactLoad$`+vt;function Ot(e){delete e[yt],delete e[bt],delete e[Ct],delete e[wt]}function kt(e){var t;if(t=e[yt])return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pm(e);e!==null;){if(n=e[yt])return n;e=pm(e)}return t}e=n,n=e.parentNode}return null}function At(e){if(e=e[yt]||e[xt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function jt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Mt(e){var t=e[Tt];return t||=e[Tt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Nt(e){e[Et]=!0}function Pt(e){e[Dt]=void 0}var Ft=new Set,It={};function Lt(e,t){Rt(e,t),Rt(e+`Capture`,t)}function Rt(e,t){for(It[e]=t,e=0;e<t.length;e++)Ft.add(t[e])}var zt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Bt={},Vt={};function Ht(e){return Me.call(Vt,e)?!0:Me.call(Bt,e)?!1:zt.test(e)?Vt[e]=!0:(Bt[e]=!0,!1)}var Ut=!1;function Wt(){var e=Ut;return Ut=!1,e}function Gt(e,t,n){if(Ht(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function qt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Yt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Xt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zt(e){if(!e._valueTracker){var t=Yt(e)?`checked`:`value`;e._valueTracker=Xt(e,t,``+e[t])}}function Qt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Yt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var $t=/[\n"\\]/g;function en(e){return e.replace($t,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function tn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Jt(t)):e.value!==``+Jt(t)&&(e.value=``+Jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):rn(e,Jt(n)):o===`number`&&e.value==t?rn(e,Jt(e.value)):rn(e,Jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Jt(s):e.removeAttribute(`name`)}function nn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Zt(e);return}n=n==null?``:``+Jt(n),t=t==null?n:``+Jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Zt(e)}function rn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function an(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function on(e,t,n){if(t!=null&&(t=``+Jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Jt(n)}function sn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Zt(e)}function cn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ln=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function un(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||ln.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function dn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Ut=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(un(e,a,r),Ut=!0)}else for(var o in t)t.hasOwnProperty(o)&&un(e,o,t[o])}function fn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var pn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),mn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hn(e){return mn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function gn(){}var _n=null;function vn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yn=null,bn=null;function xn(e){var t=At(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(tn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+en(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[bt]||null;if(!a)throw Error(i(90));tn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Qt(r)}break a;case`textarea`:on(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}}}var Sn=!1;function Cn(e,t,n){if(Sn)return e(t,n);Sn=!0;try{return e(t)}finally{if(Sn=!1,(yn!==null||bn!==null)&&(Ld(),yn&&(t=yn,e=bn,bn=yn=null,xn(t),e)))for(t=0;t<e.length;t++)xn(e[t])}}function wn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[bt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Tn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,En=!1;if(Tn)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){En=!0}}),window.addEventListener(`test`,Dn,Dn),window.removeEventListener(`test`,Dn,Dn)}catch{En=!1}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Fn(In),Rn=D({},In,{view:0,detail:0}),zn=Fn(Rn),Bn,Vn,Hn,Un=D({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=Fn(Un),Gn=Fn(D({},Un,{dataTransfer:0})),Kn=Fn(D({},Rn,{relatedTarget:0})),qn=Fn(D({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=Fn(D({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=Fn(D({},In,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=Fn(D({},Rn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=Fn(D({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=Fn(D({},In,{submitter:0})),ir=Fn(D({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ar=Fn(D({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),or=Fn(D({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),sr=Fn(D({},In,{newState:0,oldState:0,source:0})),cr=[9,13,27,32],lr=Tn&&`CompositionEvent`in window,ur=null;Tn&&`documentMode`in document&&(ur=document.documentMode);var dr=Tn&&`TextEvent`in window&&!ur,fr=Tn&&(!lr||ur&&8<ur&&11>=ur),pr=` `,mr=!1;function hr(e,t){switch(e){case`keyup`:return cr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function gr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var _r=!1;function vr(e,t){switch(e){case`compositionend`:return gr(t);case`keypress`:return t.which===32?(mr=!0,pr):null;case`textInput`:return e=t.data,e===pr&&mr?null:e;default:return null}}function yr(e,t){if(_r)return e===`compositionend`||!lr&&hr(e,t)?(e=jn(),An=kn=On=null,_r=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return fr&&t.locale!==`ko`?null:t.data;default:return null}}var br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!br[e.type]:t===`textarea`}function Sr(e,t,n,r){yn?bn?bn.push(r):bn=[r]:yn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Cr=null,wr=null;function Tr(e){Bf(e,0)}function Er(e){if(Qt(jt(e)))return e}function Dr(e,t){if(e===`change`)return t}var Or=!1;if(Tn){var kr;if(Tn){var Ar=`oninput`in document;if(!Ar){var jr=document.createElement(`div`);jr.setAttribute(`oninput`,`return;`),Ar=typeof jr.oninput==`function`}kr=Ar}else kr=!1;Or=kr&&(!document.documentMode||9<document.documentMode)}function Mr(){Cr&&(Cr.detachEvent(`onpropertychange`,Nr),wr=Cr=null)}function Nr(e){if(e.propertyName===`value`&&Er(wr)){var t=[];Sr(t,wr,e,vn(e)),Cn(Tr,t)}}function Pr(e,t,n){e===`focusin`?(Mr(),Cr=t,wr=n,Cr.attachEvent(`onpropertychange`,Nr)):e===`focusout`&&Mr()}function Fr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Er(wr)}function Ir(e,t){if(e===`click`)return Er(t)}function Lr(e,t){if(e===`input`||e===`change`)return Er(t)}function Rr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var zr=typeof Object.is==`function`?Object.is:Rr;function Br(e,t){if(zr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Me.call(t,i)||!zr(e[i],t[i]))return!1}return!0}function Vr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Hr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ur(e,t){var n=Hr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Hr(n)}}function Wr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function Kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var qr=Tn&&`documentMode`in document&&11>=document.documentMode,Jr=null,Yr=null,Xr=null,Zr=!1;function Qr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zr||Jr==null||Jr!==Vr(r)||(r=Jr,`selectionStart`in r&&Kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&Br(Xr,r)||(Xr=r,r=Jf(Yr,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Jr)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ei={animationend:$r(`Animation`,`AnimationEnd`),animationiteration:$r(`Animation`,`AnimationIteration`),animationstart:$r(`Animation`,`AnimationStart`),transitionrun:$r(`Transition`,`TransitionRun`),transitionstart:$r(`Transition`,`TransitionStart`),transitioncancel:$r(`Transition`,`TransitionCancel`),transitionend:$r(`Transition`,`TransitionEnd`)},ti={},ni={};Tn&&(ni=document.createElement(`div`).style,`AnimationEvent`in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),`TransitionEvent`in window||delete ei.transitionend.transition);function ri(e){if(ti[e])return ti[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ni)return ti[e]=t[n];return e}var ii=ri(`animationend`),ai=ri(`animationiteration`),oi=ri(`animationstart`),si=ri(`transitionrun`),ci=ri(`transitionstart`),li=ri(`transitioncancel`),ui=ri(`transitionend`),di=new Map,fi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);fi.push(`scrollEnd`);function pi(e,t){di.set(e,t),Lt(t,[e])}var mi=0;function hi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=vd.identifierPrefix;var n=mi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function gi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ed;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function _i(e,t){return e=gi(e),t=gi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var vi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},yi=[],bi=0,xi=0;function Si(){for(var e=bi,t=xi=bi=0;t<e;){var n=yi[t];yi[t++]=null;var r=yi[t];yi[t++]=null;var i=yi[t];yi[t++]=null;var a=yi[t];if(yi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ei(n,i,a)}}function Ci(e,t,n,r){yi[bi++]=e,yi[bi++]=t,yi[bi++]=n,yi[bi++]=r,xi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function wi(e,t,n,r){return Ci(e,t,n,r),Di(e)}function Ti(e,t){return Ci(e,null,null,t),Di(e)}function Ei(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ye(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Di(e){if(50<Dd)throw Dd=0,Od=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Oi={};function ki(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(e,t,n,r){return new ki(e,t,n,r)}function ji(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mi(e,t){var n=e.alternate;return n===null?(n=Ai(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ni(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)ji(r)&&(s=1);else if(typeof r==`string`)s=Jm(e,n,_e.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ne:return e=Ai(31,n,t,a),e.elementType=ne,e.lanes=o,e;case j:return Fi(n.children,a,o,t);case M:s=8,a|=24;break;case N:return e=Ai(12,n,t,a|2),e.elementType=N,e.lanes=o,e;case L:return e=Ai(13,n,t,a),e.elementType=L,e.lanes=o,e;case R:return e=Ai(19,n,t,a),e.elementType=R,e.lanes=o,e;case re:case z:return e=a|32,e=Ai(30,n,t,e),e.elementType=z,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case F:s=10;break a;case P:s=9;break a;case I:s=11;break a;case ee:s=14;break a;case te:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ai(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Fi(e,t,n,r){return e=Ai(7,e,r,t),e.lanes=n,e}function Ii(e,t,n){return e=Ai(6,e,null,t),e.lanes=n,e}function Li(e){var t=Ai(18,null,null,0);return t.stateNode=e,t}function Ri(e,t,n){return t=Ai(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zi=new WeakMap;function Bi(e,t){if(typeof e==`object`&&e){var n=zi.get(e);return n===void 0?(t={value:e,source:t,stack:je(t)},zi.set(e,t),t):n}return{value:e,source:t,stack:je(t)}}var Vi=[],Hi=0,Ui=null,Wi=0,Gi=[],Ki=0,qi=null,Ji=1,Yi=``;function Xi(e,t){Vi[Hi++]=Wi,Vi[Hi++]=Ui,Ui=e,Wi=t}function Zi(e,t,n){Gi[Ki++]=Ji,Gi[Ki++]=Yi,Gi[Ki++]=qi,qi=e;var r=Ji;e=Yi;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var a=32-Ye(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ji=1<<32-Ye(t)+i|n<<i|r,Yi=a+e}else Ji=1<<a|n<<i|r,Yi=e}function Qi(e){e.return!==null&&(Xi(e,1),Zi(e,1,0))}function $i(e){for(;e===Ui;)Ui=Vi[--Hi],Vi[Hi]=null,Wi=Vi[--Hi],Vi[Hi]=null;for(;e===qi;)qi=Gi[--Ki],Gi[Ki]=null,Yi=Gi[--Ki],Gi[Ki]=null,Ji=Gi[--Ki],Gi[Ki]=null}function ea(e,t){Gi[Ki++]=Ji,Gi[Ki++]=Yi,Gi[Ki++]=qi,Ji=t.id,Yi=t.overflow,qi=e}var ta=null,na=null,ra=!1,ia=null,aa=!1,oa=Error(i(519));function sa(e){throw fa(Bi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),oa}function ca(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[yt]=e,t[bt]=r,n){case`dialog`:Vf(`cancel`,t),Vf(`close`,t);break;case`iframe`:case`object`:case`embed`:Vf(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)Vf(Rf[n],t);break;case`source`:Vf(`error`,t);break;case`img`:case`image`:case`link`:Vf(`error`,t),Vf(`load`,t);break;case`details`:Vf(`toggle`,t);break;case`input`:Vf(`invalid`,t),nn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Vf(`invalid`,t);break;case`textarea`:Vf(`invalid`,t),sn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Vf(`beforetoggle`,t),Vf(`toggle`,t)),r.onScroll!=null&&Vf(`scroll`,t),r.onScrollEnd!=null&&Vf(`scrollend`,t),r.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||sa(e,!0)}function la(e){for(ta=e.return;ta;)switch(ta.tag){case 5:case 31:case 13:aa=!1;return;case 27:case 3:aa=!0;return;default:ta=ta.return}}function ua(e){if(e!==ta)return!1;if(!ra)return la(e),ra=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||mp(e.type,e.memoizedProps)),n=!n),n&&na&&sa(e),la(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));na=fm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));na=fm(e)}else t===27?(t=na,Cp(e.type)?(e=dm,dm=null,na=e):na=t):na=ta?um(e.stateNode.nextSibling):null;return!0}function da(){na=ta=null,ra=!1}function H(){var e=ia;return e!==null&&(ud===null?ud=e:ud.push.apply(ud,e),ia=null),e}function fa(e){ia===null?ia=[e]:ia.push(e)}var pa=me(null),ma=null,ha=null;function ga(e,t,n){ge(pa,t._currentValue),t._currentValue=n}function _a(e){e._currentValue=pa.current,he(pa)}function va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ya(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),va(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),va(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),va(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ba(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;zr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===be.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[ch]:e.push(ch))}a=a.return}return e!==null&&ya(t,e,n,r),t.flags|=262144,e!==null}function xa(e){for(e=e.firstContext;e!==null;){if(!zr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Sa(e){ma=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ca(e){return U(ma,e)}function wa(e,t){return ma===null&&Sa(e),U(e,t)}function U(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ha===null){if(e===null)throw Error(i(308));ha=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ha=ha.next=t;return n}var W=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},G=t.unstable_scheduleCallback,Ta=t.unstable_NormalPriority,Ea={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Da(){return{controller:new W,data:new Map,refCount:0}}function Oa(e){e.refCount--,e.refCount===0&&G(Ta,function(){e.controller.abort()})}function ka(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Aa=null;function ja(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ma=null,Na=0,Pa=0,Fa=null;function Ia(e,t){if(Ma===null){var n=Ma=[];Na=0,Pa=Nf(),Fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Na++,t.then(La,La),t}function La(){if(--Na===0&&(Aa=null,Ma!==null)){Fa!==null&&(Fa.status=`fulfilled`);var e=Ma;Ma=null,Pa=0,Fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ra(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var za=B.S;B.S=function(e,t){if(pd=Le(),typeof t==`object`&&t&&typeof t.then==`function`&&Ia(e,t),Aa!==null)for(var n=yf;n!==null;)ka(n,Aa),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)ka(r,n),r=r.next;if(Pa!==0){r=Aa,r===null&&(r=Aa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}za!==null&&za(e,t)};var Ba=me(null);function Va(){var e=Ba.current;return e===null?Ju.pooledCache:e}function Ha(e,t){t===null?ge(Ba,Ba.current):ge(Ba,t.pool)}function Ua(){var e=Va();return e===null?null:{parent:Ea._currentValue,pool:e}}var Wa=Error(i(460)),Ga=Error(i(474)),Ka=Error(i(542)),qa={then:function(){}};function Ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ya(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,$a(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(gn,gn);else{if(e=Ju,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,$a(e),e}throw Za=t,Wa}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Za=e,Wa):e}}var Za=null;function Qa(){if(Za===null)throw Error(i(459));var e=Za;return Za=null,e}function $a(e){if(e===Wa||e===Ka)throw Error(i(483))}var eo=null,to=0;function no(e){var t=to;return to+=1,eo===null&&(eo=[]),Ya(eo,e,t)}function ro(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function io(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function ao(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Mi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ii(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===j?(e=d(e,t,n.props.children,r,n.key),ro(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===te&&Xa(i)===t.type)?(t=a(t,n.props),ro(t,n),t.return=e,t):(t=Pi(n.type,n.key,n.props,null,e.mode,r),ro(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ri(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Fi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ii(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=Pi(t.type,t.key,t.props,null,e.mode,n),ro(n,t),n.return=e,n;case A:return t=Ri(t,e.mode,n),t.return=e,t;case te:return t=Xa(t),f(e,t,n)}if(ue(t)||se(t))return t=Fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,no(t),n);if(t.$$typeof===F)return f(e,wa(e,t),n);io(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case A:return n.key===i?u(e,t,n,r):null;case te:return n=Xa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,no(n),r);if(n.$$typeof===F)return p(e,t,wa(e,n),r);io(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case A:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case te:return r=Xa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,no(r),i);if(r.$$typeof===F)return m(e,t,n,wa(t,r),i);io(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),ra&&Xi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return ra&&Xi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),ra&&Xi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),ra&&Xi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return ra&&Xi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),ra&&Xi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===j&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===j){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),ro(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===te&&Xa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ro(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===j?(c=Fi(o.props.children,e.mode,c,o.key),ro(c,o),c.return=e,e=c):(c=Pi(o.type,o.key,o.props,null,e.mode,c),ro(c,o),c.return=e,e=c)}return s(e);case A:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ri(o,e.mode,c),c.return=e,e=c}return s(e);case te:return o=Xa(o),_(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,no(o),c);if(o.$$typeof===F)return _(e,r,wa(e,o),c);io(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ii(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{to=0;var i=_(e,t,n,r);return eo=null,i}catch(t){if(t===Wa||t===Ka)throw t;var a=Ai(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var oo=ao(!0),so=ao(!1),co=!1;function lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function po(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,qu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Di(e),Ei(e,null,n),t}return Ci(e,r,t,n),Di(e)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ft(e,n)}}function ho(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var go=!1;function _o(){if(go){var e=Fa;if(e!==null)throw e}}function vo(e,t,n,r){go=!1;var i=e.updateQueue;co=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Xu&f)===f:(r&f)===f){f!==0&&f===Pa&&(go=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:co=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),id|=o,e.lanes=o,e.memoizedState=d}}function yo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function bo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)yo(n[e],t)}var xo=me(null),So=me(0);function Co(e,t){e=nd,ge(So,e),ge(xo,t),nd=e|t.baseLanes}function wo(){ge(So,nd),ge(xo,xo.current)}function To(){nd=So.current,he(xo),he(So)}var Eo=me(null),Do=null;function Oo(e){var t=e.alternate;ge(No,No.current&1),ge(Eo,e),Do===null&&(t===null||xo.current!==null||t.memoizedState!==null)&&(Do=e)}function ko(e){ge(No,No.current),ge(Eo,e),Do===null&&(Do=e)}function Ao(e){e.tag===22?(ge(No,No.current),ge(Eo,e),Do===null&&(Do=e)):jo()}function jo(){ge(No,No.current),ge(Eo,Eo.current)}function Mo(e){he(Eo),Do===e&&(Do=null),he(No)}var No=me(0);function Po(e,t){ge(Eo,Eo.current),ge(No,t)}function Fo(e){he(No),he(Eo),Do===e&&(Do=null)}function Io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sm(n)||cm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lo=0,Ro=null,zo=null,Bo=null,Vo=!1,Ho=!1,Uo=!1,Wo=0,Go=0,Ko=null,qo=0;function Jo(){throw Error(i(321))}function Yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zr(e[n],t[n]))return!1;return!0}function Xo(e,t,n,r,i,a){return Lo=a,Ro=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?fc:pc,Uo=!1,a=n(r,i),Uo=!1,Ho&&(a=Qo(t,n,r,i)),Zo(e),a}function Zo(e){B.H=dc;var t=zo!==null&&zo.next!==null;if(Lo=0,Bo=zo=Ro=null,Vo=!1,Go=0,Ko=null,t)throw Error(i(300));e===null||Ac||(e=e.dependencies,e!==null&&xa(e)&&(Ac=!0))}function Qo(e,t,n,r){Ro=e;var a=0;do{if(Ho&&(Ko=null),Go=0,Ho=!1,25<=a)throw Error(i(301));if(a+=1,Bo=zo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}B.H=mc,o=t(n,r)}while(Ho);return o}function $o(){var e=B.H,t=e.useState()[0];return t=typeof t.then==`function`?os(t):t,e=e.useState()[0],(zo===null?null:zo.memoizedState)!==e&&(Ro.flags|=1024),t}function es(){var e=Wo!==0;return Wo=0,e}function ts(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ns(e){if(Vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vo=!1}Lo=0,Bo=zo=Ro=null,Ho=!1,Go=Wo=0,Ko=null}function rs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bo===null?Ro.memoizedState=Bo=e:Bo=Bo.next=e,Bo}function is(){if(zo===null){var e=Ro.alternate;e=e===null?null:e.memoizedState}else e=zo.next;var t=Bo===null?Ro.memoizedState:Bo.next;if(t!==null)Bo=t,zo=e;else{if(e===null)throw Ro.alternate===null?Error(i(467)):Error(i(310));zo=e,e={memoizedState:zo.memoizedState,baseState:zo.baseState,baseQueue:zo.baseQueue,queue:zo.queue,next:null},Bo===null?Ro.memoizedState=Bo=e:Bo=Bo.next=e}return Bo}function as(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function os(e){var t=Go;return Go+=1,Ko===null&&(Ko=[]),e=Ya(Ko,e,t),t=Ro,(Bo===null?t.memoizedState:Bo.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?fc:pc),e}function ss(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return os(e);if(e.$$typeof===ae)return;if(e.$$typeof===F)return Ca(e)}throw Error(i(438,String(e)))}function cs(e){var t=null,n=Ro.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Ro.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=as(),Ro.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function ls(e,t){return typeof t==`function`?t(e):t}function us(e){return ds(is(),zo,e)}function ds(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Lo&f)===f:(Xu&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Pa&&(d=!0);else if((Lo&p)===p){u=u.next,p===Pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,Ro.lanes|=p,id|=p;f=u.action,Uo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,Ro.lanes|=f,id|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!zr(o,e.memoizedState)&&(Ac=!0,d&&(n=Fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function fs(e){var t=is(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);zr(o,t.memoizedState)||(Ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ps(e,t,n){var r=Ro,a=is(),o=ra;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!zr((zo||a).memoizedState,n);if(s&&(a.memoizedState=n,Ac=!0),a=a.queue,Ls(gs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Bo!==null&&!!(Bo.memoizedState.tag&1),K(e?9:8,{destroy:void 0},hs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Ju===null)throw Error(i(349));o||Lo&127||ms(r,t,n)}return n}function ms(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ro.updateQueue,t===null?(t=as(),Ro.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hs(e,t,n,r){t.value=n,t.getSnapshot=r,_s(t)&&vs(e)}function gs(e,t,n){return n(function(){_s(t)&&vs(e)})}function _s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zr(e,n)}catch{return!0}}function vs(e){var t=Ti(e,2);t!==null&&Md(t,e,2)}function ys(e){var t=rs();if(typeof e==`function`){var n=e;if(e=n(),Uo){Je(!0);try{n()}finally{Je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:e},t}function bs(e,t,n,r){return e.baseState=n,ds(e,zo,typeof r==`function`?r:ls)}function xs(e,t,n,r,a){if(cc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};B.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ss(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ss(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=B.T,o={};o.types=a===null?null:a.types,B.T=o;try{var s=n(i,r),c=B.S;c!==null&&c(o,s),Cs(e,t,s)}catch(n){Ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),B.T=a}}else try{a=n(i,r),Cs(e,t,a)}catch(n){Ts(e,t,n)}}function Cs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ws(e,t,n)},function(n){return Ts(e,t,n)}):ws(e,t,n)}function ws(e,t,n){t.status=`fulfilled`,t.value=n,Es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ss(e,n)))}function Ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Es(t),t=t.next;while(t!==r)}e.action=null}function Es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ds(e,t){return t}function Os(e,t){if(ra){var n=Ju.formState;if(n!==null){a:{var r=Ro;if(ra){if(na){b:{for(var i=na,a=aa;i.nodeType!==8;){if(!a){i=null;break b}if(i=um(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){na=um(i.nextSibling),r=i.data===`F!`;break a}}sa(r)}r=!1}r&&(t=n[0])}}return n=rs(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:t},n.queue=r,n=ac.bind(null,Ro,r),r.dispatch=n,r=ys(!1),a=sc.bind(null,Ro,!1,r.queue),r=rs(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=xs.bind(null,Ro,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ks(e){return As(is(),zo,e)}function As(e,t,n){if(t=ds(e,t,Ds)[0],e=us(ls)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=os(t)}catch(e){throw e===Wa?Ka:e}else r=t;t=is();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(Ro.flags|=2048,K(9,{destroy:void 0},js.bind(null,i,n),null)),[r,a,e]}function js(e,t){e.action=t}function Ms(e){var t=is(),n=zo;if(n!==null)return As(t,n,e);is(),t=t.memoizedState,n=is();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function K(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Ro.updateQueue,t===null&&(t=as(),Ro.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ns(){return is().memoizedState}function Ps(e,t,n,r){var i=rs();Ro.flags|=e,i.memoizedState=K(1|t,{destroy:void 0},n,r===void 0?null:r)}function Fs(e,t,n,r){var i=is();r=r===void 0?null:r;var a=i.memoizedState.inst;zo!==null&&r!==null&&Yo(r,zo.memoizedState.deps)?i.memoizedState=K(t,a,n,r):(Ro.flags|=e,i.memoizedState=K(1|t,a,n,r))}function Is(e,t){Ps(8390656,8,e,t)}function Ls(e,t){Fs(2048,8,e,t)}function Rs(e){Ro.flags|=4;var t=Ro.updateQueue;if(t===null)t=as(),Ro.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function zs(e){var t=is().memoizedState;return Rs({ref:t,nextImpl:e}),function(){if(qu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Bs(e,t){return Fs(4,2,e,t)}function Vs(e,t){return Fs(4,4,e,t)}function Hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Us(e,t,n){n=n==null?null:n.concat([e]),Fs(4,4,Hs.bind(null,t,e),n)}function Ws(){}function Gs(e,t){var n=is();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ks(e,t){var n=is();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Yo(t,r[1]))return r[0];if(r=e(),Uo){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r}function qs(e,t,n){return n===void 0||Lo&1073741824&&!(Xu&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ad(),Ro.lanes|=e,id|=e,n)}function Js(e,t,n,r){return zr(n,t)?n:xo.current===null?!(Lo&106)||Lo&1073741824&&!(Xu&261930)?(Ac=!0,e.memoizedState=n):(e=Ad(),Ro.lanes|=e,id|=e,t):(e=qs(e,n,r),zr(e,t)||(Ac=!0),e)}function Ys(e,t,n,r,i){var a=V.p;V.p=a!==0&&8>a?a:8;var o=B.T,s={};s.types=o===null?null:o.types,B.T=s,sc(e,!1,t,n);try{var c=i(),l=B.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?oc(e,t,Ra(c,r),kd(e)):oc(e,t,r,kd(e))}catch(n){oc(e,t,{then:function(){},status:`rejected`,reason:n},kd())}finally{V.p=a,o!==null&&s.types!==null&&(o.types=s.types),B.T=o}}function Xs(){}function Zs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Qs(e).queue;Ys(e,a,t,de,n===null?Xs:function(){return $s(e),n(r)})}function Qs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $s(e){var t=Qs(e);t.next===null&&(t=e.alternate.memoizedState),oc(e,t.next.queue,{},kd())}function ec(){return Ca(ch)}function tc(){return is().memoizedState}function nc(){return is().memoizedState}function rc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kd();e=fo(n);var r=po(t,e,n);r!==null&&(Md(r,t,n),mo(r,t,n)),t={cache:Da()},e.payload=t;return}t=t.return}}function ic(e,t,n){var r=kd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},cc(e)?lc(t,n):(n=wi(e,t,n,r),n!==null&&(Md(n,e,r),uc(n,t,r)))}function ac(e,t,n){oc(e,t,n,kd())}function oc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(cc(e))lc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,zr(s,o))return Ci(e,t,i,0),Ju===null&&Si(),!1}catch{}if(n=wi(e,t,i,r),n!==null)return Md(n,e,r),uc(n,t,r),!0}return!1}function sc(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cc(e)){if(t)throw Error(i(479))}else t=wi(e,n,r,2),t!==null&&Md(t,e,2)}function cc(e){var t=e.alternate;return e===Ro||t!==null&&t===Ro}function lc(e,t){Ho=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ft(e,n)}}var dc={readContext:Ca,use:ss,useCallback:Jo,useContext:Jo,useEffect:Jo,useImperativeHandle:Jo,useLayoutEffect:Jo,useInsertionEffect:Jo,useMemo:Jo,useReducer:Jo,useRef:Jo,useState:Jo,useDebugValue:Jo,useDeferredValue:Jo,useTransition:Jo,useSyncExternalStore:Jo,useId:Jo,useHostTransitionStatus:Jo,useFormState:Jo,useActionState:Jo,useOptimistic:Jo,useMemoCache:Jo,useCacheRefresh:Jo,useEffectEvent:Jo},fc={readContext:Ca,use:ss,useCallback:function(e,t){return rs().memoizedState=[e,t===void 0?null:t],e},useContext:Ca,useEffect:Is,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ps(4194308,4,Hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ps(4194308,4,e,t)},useInsertionEffect:function(e,t){Ps(4,2,e,t)},useMemo:function(e,t){var n=rs();t=t===void 0?null:t;var r=e();if(Uo){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=rs();if(n!==void 0){var i=n(t);if(Uo){Je(!0);try{n(t)}finally{Je(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ic.bind(null,Ro,e),[r.memoizedState,e]},useRef:function(e){var t=rs();return e={current:e},t.memoizedState=e},useState:function(e){e=ys(e);var t=e.queue,n=ac.bind(null,Ro,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ws,useDeferredValue:function(e,t){return qs(rs(),e,t)},useTransition:function(){var e=ys(!1);return e=Ys.bind(null,Ro,e.queue,!0,!1),rs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Ro,a=rs();if(ra){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ju===null)throw Error(i(349));Xu&127||ms(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Is(gs.bind(null,r,o,e),[e]),r.flags|=2048,K(9,{destroy:void 0},hs.bind(null,r,o,n,t),null),n},useId:function(){var e=rs(),t=Ju.identifierPrefix;if(ra){var n=Yi,r=Ji;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Wo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=qo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ec,useFormState:Os,useActionState:Os,useOptimistic:function(e){var t=rs();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=sc.bind(null,Ro,!0,n),n.dispatch=t,[e,t]},useMemoCache:cs,useCacheRefresh:function(){return rs().memoizedState=rc.bind(null,Ro)},useEffectEvent:function(e){var t=rs(),n={impl:e};return t.memoizedState=n,function(){if(qu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},pc={readContext:Ca,use:ss,useCallback:Gs,useContext:Ca,useEffect:Ls,useImperativeHandle:Us,useInsertionEffect:Bs,useLayoutEffect:Vs,useMemo:Ks,useReducer:us,useRef:Ns,useState:function(){return us(ls)},useDebugValue:Ws,useDeferredValue:function(e,t){return Js(is(),zo.memoizedState,e,t)},useTransition:function(){var e=us(ls)[0],t=is().memoizedState;return[typeof e==`boolean`?e:os(e),t]},useSyncExternalStore:ps,useId:tc,useHostTransitionStatus:ec,useFormState:ks,useActionState:ks,useOptimistic:function(e,t){return bs(is(),zo,e,t)},useMemoCache:cs,useCacheRefresh:nc,useEffectEvent:zs},mc={readContext:Ca,use:ss,useCallback:Gs,useContext:Ca,useEffect:Ls,useImperativeHandle:Us,useInsertionEffect:Bs,useLayoutEffect:Vs,useMemo:Ks,useReducer:fs,useRef:Ns,useState:function(){return fs(ls)},useDebugValue:Ws,useDeferredValue:function(e,t){var n=is();return zo===null?qs(n,e,t):Js(n,zo.memoizedState,e,t)},useTransition:function(){var e=fs(ls)[0],t=is().memoizedState;return[typeof e==`boolean`?e:os(e),t]},useSyncExternalStore:ps,useId:tc,useHostTransitionStatus:ec,useFormState:Ms,useActionState:Ms,useOptimistic:function(e,t){var n=is();return zo===null?(n.baseState=e,[e,n.queue.dispatch]):bs(n,zo,e,t)},useMemoCache:cs,useCacheRefresh:nc,useEffectEvent:zs};function hc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kd(),i=fo(r);i.payload=t,n!=null&&(i.callback=n),t=po(e,i,r),t!==null&&(Md(t,e,r),mo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kd(),i=fo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=po(e,i,r),t!==null&&(Md(t,e,r),mo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kd(),r=fo(n);r.tag=2,t!=null&&(r.callback=t),t=po(e,r,n),t!==null&&(Md(t,e,n),mo(t,e,n))}};function _c(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(i,a):!0}function vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gc.enqueueReplaceState(t,t.state,null)}function yc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function bc(e){vi(e)}function xc(e){console.error(e)}function Sc(e){vi(e)}function Cc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function wc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Tc(e,t,n){return n=fo(n),n.tag=3,n.payload={element:null},n.callback=function(){Cc(e,t)},n}function Ec(e){return e=fo(e),e.tag=3,e}function Dc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){wc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){wc(t,n,r),typeof i!=`function`&&(gd===null?gd=new Set([this]):gd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ba(t,n,a,!0),n=Eo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Do===null?Wd():n.alternate===null&&rd===0&&(rd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===qa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,a)),!1;case 22:return n.flags|=65536,r===qa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,a)),!1}throw Error(i(435,n.tag))}return pf(e,r,a),Wd(),!1}if(ra)return t=Eo.current,t===null?(r!==oa&&(t=Error(i(423),{cause:r}),fa(Bi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Bi(r,n),a=Tc(e.stateNode,r,a),ho(e,a),rd!==4&&(rd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==oa&&(e=Error(i(422),{cause:r}),fa(Bi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Bi(o,n),ld===null?ld=[o]:ld.push(o),rd!==4&&(rd=2),t===null)return!0;r=Bi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Tc(n.stateNode,r,e),ho(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gd===null||!gd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ec(a),Dc(a,e,n,r),ho(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var kc=Error(i(461)),Ac=!1;function jc(e,t,n,r){t.child=e===null?so(t,null,n,r):oo(t,e.child,n,r)}function Mc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Sa(t),r=Xo(e,t,n,o,a,i),s=es(),e!==null&&!Ac?(ts(e,t,i),ol(e,t,i)):(ra&&s&&Qi(t),t.flags|=1,jc(e,t,r,i),t.child)}function Nc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ji(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Pc(e,t,a,r,i)):(e=Pi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!sl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Br:n,n(o,r)&&e.ref===t.ref)return ol(e,t,i)}return t.flags|=1,e=Mi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Pc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Br(a,r)&&e.ref===t.ref){if(Ac=!1,t.pendingProps=r=a,sl(e,i))e.flags&131072&&(Ac=!0);else return t.lanes=e.lanes,ol(e,t,i)}}return Hc(e,t,n,r,i)}function Fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ha(t,a===null?null:a.cachePool),a===null?wo():Co(t,a),Ao(t);else return r=t.lanes=536870912,Lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ha(t,null),wo(),jo()):(Ha(t,a.cachePool),Co(t,a),jo(),t.memoizedState=null);return jc(e,t,i,n),t.child}function Ic(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Lc(e,t,n,r,i){var a=Va();return a=a===null?null:{parent:Ea._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ha(t,null),wo(),Ao(t),e!==null&&ba(e,t,r,!0),t.childLanes=i,null}function Rc(e,t){return t=Zc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zc(e,t,n){return oo(t,e.child,null,n),e=Rc(t,t.pendingProps),e.flags|=2,Mo(t),t.memoizedState=null,e}function Bc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(ra){if(r.mode===`hidden`)return e=Rc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ic(null,e);if(ko(t),(e=na)?(e=om(e,aa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qi===null?null:{id:Ji,overflow:Yi},retryLane:536870912,hydrationErrors:null},n=Li(e),n.return=t,t.child=n,ta=t,na=null)):e=null,e===null)throw sa(t);return t.lanes=536870912,null}return Rc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ko(t),a){if(t.flags&256)t.flags&=-257,t=zc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Ac||ba(e,t,n,!1),a=(n&e.childLanes)!==0,Ac||a){if(xo.current===null){if(r=Ju,r!==null&&(s=pt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ti(e,s),Md(r,e,s),kc;Wd()}t=zc(e,t,n)}else e=o.treeContext,na=um(s.nextSibling),ta=t,ra=!0,ia=null,aa=!1,e!==null&&ea(t,e),t=Rc(t,r),t.flags|=134221824;return t}return e=Mi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Hc(e,t,n,r,i){return Sa(t),n=Xo(e,t,n,r,void 0,i),r=es(),e!==null&&!Ac?(ts(e,t,i),ol(e,t,i)):(ra&&r&&Qi(t),t.flags|=1,jc(e,t,n,i),t.child)}function Uc(e,t,n,r,i,a){return Sa(t),t.updateQueue=null,n=Qo(t,r,n,i),Zo(e),r=es(),e!==null&&!Ac?(ts(e,t,a),ol(e,t,a)):(ra&&r&&Qi(t),t.flags|=1,jc(e,t,n,a),t.child)}function Wc(e,t,n,r,i){if(Sa(t),t.stateNode===null){var a=Oi,o=n.contextType;typeof o==`object`&&o&&(a=Ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=gc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},lo(t),o=n.contextType,a.context=typeof o==`object`&&o?Ca(o):Oi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(hc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&gc.enqueueReplaceState(a,a.state,null),vo(t,r,a,i),_o(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=yc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Oi,typeof u==`object`&&u&&(o=Ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&vc(t,a,r,o),co=!1;var f=t.memoizedState;a.state=f,vo(t,r,a,i),_o(),l=t.memoizedState,s||f!==l||co?(typeof d==`function`&&(hc(t,n,d,r),l=t.memoizedState),(c=co||_c(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,uo(e,t),o=t.memoizedProps,u=yc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Oi,typeof l==`object`&&l&&(c=Ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&vc(t,a,r,c),co=!1,f=t.memoizedState,a.state=f,vo(t,r,a,i),_o();var p=t.memoizedState;o!==d||f!==p||co||e!==null&&e.dependencies!==null&&xa(e.dependencies)?(typeof s==`function`&&(hc(t,n,s,r),p=t.memoizedState),(u=co||_c(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&xa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Vc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=oo(t,e.child,null,i),t.child=oo(t,null,n,i)):jc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ol(e,t,i),e}function Gc(e,t,n,r){return da(),t.flags|=256,jc(e,t,n,r),t.child}var Kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qc(e){return{baseLanes:e,cachePool:Ua()}}function Jc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=sd),e}function Yc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(No.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(ra){if(i?Oo(t):jo(),(e=na)?(e=om(e,aa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qi===null?null:{id:Ji,overflow:Yi},retryLane:536870912,hydrationErrors:null},n=Li(e),n.return=t,t.child=n,ta=t,na=null)):e=null,e===null)throw sa(t);return t.lanes=cm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(jo(),i=t.mode,a=Zc({mode:`hidden`,children:a},i),r=Fi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=qc(n),r.childLanes=Jc(e,o,n),t.memoizedState=Kc,Ic(null,r)):(Oo(t),Xc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return $c(e,t,a,o,r,c,s,n)}return i?(jo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Mi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Fi(i,a,n,null),i.flags|=2):i=Mi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Ic(null,r),r=t.child,i=e.child.memoizedState,i===null?i=qc(n):(a=i.cachePool,a===null?a=Ua():(s=Ea._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Jc(e,o,n),t.memoizedState=Kc,Ic(e.child,r)):(Oo(t),n=e.child,e=n.sibling,n=Mi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Xc(e,t){return t=Zc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Zc(e,t){return e=Ai(22,e,null,t),e.lanes=0,e}function Qc(e,t,n){return oo(t,e.child,null,n),e=Xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $c(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Oo(t),t.flags&=-257,Qc(e,t,c)):t.memoizedState===null?(jo(),o=a.fallback,s=t.mode,a=Zc({mode:`visible`,children:a.children},s),o=Fi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,oo(t,e.child,null,c),a=t.child,a.memoizedState=qc(c),a.childLanes=Jc(e,r,c),t.memoizedState=Kc,Ic(null,a)):(jo(),t.child=e.child,t.flags|=128,null);if(Oo(t),cm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,fa({value:a,source:null,stack:null})),Qc(e,t,c)}if(Ac||ba(e,t,c,!1),r=(c&e.childLanes)!==0,Ac||r){if(xo.current!==null)return Qc(e,t,c);if(r=Ju,r!==null&&(a=pt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ti(e,a),Md(r,e,a),kc;return sm(o)||Wd(),Qc(e,t,c)}return sm(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,na=um(o.nextSibling),ta=t,ra=!0,ia=null,aa=!1,e!==null&&ea(t,e),t=Xc(t,a.children),t.flags|=134221824,t)}function el(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),va(e.return,t,n)}function tl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Io(n)===null&&(t=e),e=e.sibling}return t}function nl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function rl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function il(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=No.current;if(t.flags&128)return Po(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Po(t,o),i===`backwards`&&e!==null?(rl(e),jc(e,t,r,n),rl(e)):jc(e,t,r,n),r=ra?Wi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&el(e,n,t);else if(e.tag===19)el(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=tl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,rl(t)),nl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,a,r);break;case`together`:nl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=tl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,a,r)}return t.child}function al(e,t,n){var r=t.pendingProps;return ga(t,t.type,r.value),jc(e,t,r.children,n),t.child}function ol(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),id|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ba(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&xa(e)))}function cl(e,t,n){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),ga(t,Ea,e.memoizedState.cache),da();break;case 27:case 5:Ce(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ko(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Oo(t),t.flags|=128,null;r=ba(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Yc(e,t,n):(Oo(t),e=ol(e,t,n),e===null?null:e.sibling)}Oo(t);break;case 19:if(t.flags&128)return il(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ba(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return il(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Po(t,No.current),r)break;return null;case 22:return t.lanes=0,Fc(e,t,n,t.pendingProps);case 24:ga(t,Ea,e.memoizedState.cache)}return ol(e,t,n)}function ll(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ac=!0;else{if(!sl(e,n)&&!(t.flags&128))return Ac=!1,cl(e,t,n);Ac=!!(e.flags&131072)}}else Ac=!1,ra&&t.flags&1048576&&Zi(t,Wi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e==`function`)ji(e)?(r=yc(e,r),t.tag=1,t=Wc(null,t,e,r,n)):(t.tag=0,t=Hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===I){t.tag=11,t=Mc(null,t,e,r,n);break a}if(a===ee){t.tag=14,t=Nc(null,t,e,r,n);break a}if(a===F){t.tag=10,t.type=e,t=al(null,t,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return Hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=yc(r,t.pendingProps),Wc(e,t,r,a,n);case 3:a:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,uo(e,t),vo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ga(t,Ea,r),r!==o.cache&&ya(t,[Ea],n,!0),_o(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Gc(e,t,r,n);break a}if(r!==a){a=Bi(Error(i(424)),t),fa(a),t=Gc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(na=um(e.firstChild),ta=t,ra=!0,ia=null,aa=!0,n=so(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(da(),r===a){t=ol(e,t,n);break a}jc(e,t,r,n)}t=t.child}return t;case 26:return Vc(e,t),e===null?(n=Pm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ra||(t.stateNode=pp(t.type,t.pendingProps,ye.current,t)):t.memoizedState=Pm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ce(t),e===null&&ra&&(r=t.stateNode=gm(t.type,t.pendingProps,ye.current),ta=t,aa=!0,a=na,Cp(t.type)?(dm=a,na=um(r.firstChild)):na=a),jc(e,t,t.pendingProps.children,n),Vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ra&&((a=r=na)&&(r=im(r,t.type,t.pendingProps,aa),r===null?a=!1:(t.stateNode=r,ta=t,na=um(r.firstChild),aa=!1,a=!0)),a||sa(t)),Ce(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,mp(a,o)?r=null:s!==null&&mp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Xo(e,t,$o,null,null,n),ch._currentValue=a),Vc(e,t),jc(e,t,r,n),t.child;case 6:return e===null&&ra&&((e=n=na)&&(n=am(n,t.pendingProps,aa),n===null?e=!1:(t.stateNode=n,ta=t,na=null,e=!0)),e||sa(t)),null;case 13:return Yc(e,t,n);case 4:return xe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=oo(t,null,r,n):jc(e,t,r,n),t.child;case 11:return Mc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Vc(e,t),jc(e,t,r,n),t.child;case 8:return jc(e,t,t.pendingProps.children,n),t.child;case 12:return jc(e,t,t.pendingProps.children,n),t.child;case 10:return al(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Sa(t),a=Ca(a),r=r(a),t.flags|=1,jc(e,t,r,n),t.child;case 14:return Nc(e,t,t.type,t.pendingProps,n);case 15:return Pc(e,t,t.type,t.pendingProps,n);case 19:return il(e,t,n);case 31:return Bc(e,t,n);case 22:return Fc(e,t,n,t.pendingProps);case 24:return Sa(t),r=Ca(Ea),e===null?(a=Va(),a===null&&(a=Ju,o=Da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},lo(t),ga(t,Ea,a)):((e.lanes&n)!==0&&(uo(e,t),vo(t,null,null,n),_o()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ga(t,Ea,r),r!==a.cache&&ya(t,[Ea],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ga(t,Ea,r))),jc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:ra&&Qi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Vc(e,t),jc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ul(e){e.flags|=4}function dl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Ym(t,r):Ym(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw Za=qa,Ga}}else e.flags&=-16777217}function fl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Xm(t)){if(Vd())e.flags|=8192;else throw Za=qa,Ga}}function pl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:st(),e.lanes|=t,cd|=t)}function ml(e,t){if(!ra)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function hl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gl(e,t,n){var r=t.pendingProps;switch($i(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hl(t),null;case 1:return hl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),_a(Ea),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ua(t)?ul(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,H())),hl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ul(t),o===null?(hl(t),dl(t,a,null,r,n)):(hl(t),fl(t,o))):o?o===e.memoizedState?(hl(t),t.flags&=-16777217):(ul(t),hl(t),fl(t,o)):(e=e.memoizedProps,e!==r&&ul(t),hl(t),dl(t,a,e,r,n)),null;case 27:if(we(t),n=ye.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ul(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return hl(t),t.subtreeFlags&=-33554433,null}e=_e.current,ua(t)?ca(t,e):(e=gm(a,r,n),t.stateNode=e,ul(t))}return hl(t),t.subtreeFlags&=-33554433,null;case 5:if(we(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ul(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return hl(t),t.subtreeFlags&=-33554433,null}if(o=_e.current,ua(t))ca(t,o);else{var s=up(ye.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[yt]=t,o[bt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(rp(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ul(t)}}return hl(t),t.subtreeFlags&=-33554433,dl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ul(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ye.current,ua(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ta,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[yt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||sa(t,!0)}else e=up(e).createTextNode(r),e[yt]=t,t.stateNode=e}return hl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ua(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[yt]=t}else da(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;hl(t),e=!1}else n=H(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Mo(t),t):(Mo(t),null);if(t.flags&128)throw Error(i(558))}return hl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ua(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[yt]=t}else da(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;hl(t),a=!1}else a=H(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Mo(t),t):(Mo(t),null)}return Mo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),pl(t,t.updateQueue),hl(t),null);case 4:return Se(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,hl(t),null;case 10:return _a(t.type),hl(t),null;case 19:if(Fo(t),r=t.memoizedState,r===null)return hl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)ml(r,!1);else{if(rd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Io(e),o!==null){for(t.flags|=128,ml(r,!1),e=o.updateQueue,t.updateQueue=e,pl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ni(n,e),n=n.sibling;return Po(t,No.current&1|2),ra&&Xi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Le()>md&&(t.flags|=128,a=!0,ml(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Io(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,pl(t,e),ml(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!ra)return hl(t),null}else 2*Le()-r.renderingStartTime>md&&n!==536870912&&(t.flags|=128,a=!0,ml(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Le(),e.sibling=null,o=No.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||ra?Po(t,o):(n=o,ge(Eo,t),ge(No,n),Do===null&&(Do=t)),ra&&Xi(t,r.treeForkCount),e}return hl(t),null;case 22:case 23:return Mo(t),To(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(hl(t),t.subtreeFlags&6&&(t.flags|=8192)):hl(t),n=t.updateQueue,n!==null&&pl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(Ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_a(Ea),hl(t),null;case 25:return null;case 30:return t.flags|=33554432,hl(t),null}throw Error(i(156,t.tag))}function _l(e,t){switch($i(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _a(Ea),Se(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return we(t),null;case 31:if(t.memoizedState!==null){if(Mo(t),t.alternate===null)throw Error(i(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Se(),null;case 10:return _a(t.type),null;case 22:case 23:return Mo(t),To(),e!==null&&he(Ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _a(Ea),null;case 25:return null;default:return null}}function vl(e,t){switch($i(t),t.tag){case 3:_a(Ea),Se();break;case 26:case 27:case 5:we(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&Mo(t);break;case 13:Mo(t);break;case 19:Fo(t);break;case 10:_a(t.type);break;case 22:case 23:Mo(t),To(),e!==null&&he(Ba);break;case 24:_a(Ea)}}function yl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){ff(t,t.return,e)}}function bl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){ff(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){ff(t,t.return,e)}}function xl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{bo(t,n)}catch(t){ff(e,e.return,t)}}}function Sl(e,t,n){n.props=yc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){ff(e,t,n)}}function Cl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=hi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Fp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Ip(e);h(e.child,!1,$p,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){ff(e,t,n)}}function wl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){ff(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){ff(e,t,n)}else n.current=null}}function Tl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)tm(e.stateNode,t[n])}function El(e){for(var t=e.return;t!==null&&(kl(t)&&tm(e.stateNode,t.stateNode),!Ol(t));)t=t.return}function Dl(e){for(var t=e.return;t!==null&&(kl(t)&&nm(e.stateNode,t.stateNode),!Ol(t));)t=t.return}function Ol(e){return e.tag===5||e.tag===3||e.tag===27}function kl(e){return e&&e.tag===7&&e.stateNode!==null}function Al(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ff(e,e.return,t)}}function jl(e,t,n){try{var r=e.stateNode;ap(r,e.type,n,t),r[bt]=t}catch(t){ff(e,e.return,t)}}function Ml(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cp(e.type)||e.tag===4}function Nl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ml(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn)),Tl(e,r),Ut=!0;else if(i!==4&&(i===27&&(Tl(e,r),r=null,Cp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Pl(e,t,n,r),e=e.sibling;e!==null;)Pl(e,t,n,r),e=e.sibling}function Fl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Tl(e,r),Ut=!0;else if(i!==4&&(i===27&&(Tl(e,r),r=null,Cp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Fl(e,t,n,r),e=e.sibling;e!==null;)Fl(e,t,n,r),e=e.sibling}function Il(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);rp(t,r,n),t[yt]=e,t[bt]=n}catch(t){ff(e,e.return,t)}}var Ll=!1,Rl=null;function zl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Ll=!0)}var Bl=null;function Vl(){var e=Bl;return Bl=null,e}var Hl=0;function Ul(e,t,n,r,i){return Hl=0,Wl(e.child,t,n,r,i)}function Wl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=kp(o);r.push(s),s.view&&(a=!0)}else a||kp(o).view&&(a=!0);Ll=!0,Ep(o,Hl===0?t:t+`_`+Hl,n),Hl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Wl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Gl(e,t){for(;e!==null;)e.tag===5?Dp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Gl(e.child,t)),e=e.sibling}function Kl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Kl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=_i(t.default,t.share),t!==`none`&&(Ul(e,n,t,null,!1)||Gl(e.child,!1))}e=e.sibling}}function ql(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=hi(r,n),a=_i(r.default,n.paired?r.share:r.enter);a===`none`?Kl(e):Ul(e,i,a,null,!1)?(Kl(e),n.paired||t||jd(e,r.onEnter)):Gl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ql(e,t),e=e.sibling;else Kl(e)}function Jl(e){if(Rl!==null&&Rl.size!==0){var t=Rl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=_i(n.default,n.share);if(a!==`none`&&(Ul(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,jd(e,n.onShare)):Gl(e.child,!1)),t.delete(r),t.size===0)break}}}Jl(e)}e=e.sibling}}}function Yl(e){if(e.tag===30){var t=e.memoizedProps,n=hi(t,e.stateNode),r=Rl===null?void 0:Rl.get(n),i=_i(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Ul(e,n,i,null,!1)?r===void 0?jd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Rl.delete(n),jd(e,t.onShare)):Gl(e.child,!1)),Rl!==null&&Jl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Yl(e),e=e.sibling;else Rl!==null&&Jl(e)}function Xl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=hi(t,e.stateNode);t=_i(t.default,t.update),e.flags&=-5,t!==`none`&&Ul(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Xl(e);e=e.sibling}}function Zl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Gl(e.child,!1))}Zl(e)}e=e.sibling}}function Ql(e){if(e.tag===30)e.stateNode.paired=null,Gl(e.child,!1),Zl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e),e=e.sibling;else Zl(e)}function $l(e){for(e=e.child;e!==null;)e.tag===30?Gl(e.child,!1):e.subtreeFlags&33554432&&$l(e),e=e.sibling}function eu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Hl<a.length){var l=a[Hl],u=kp(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Ep(c,Hl===0?n:n+`_`+Hl,i),s&&e.flags&4||(Bl===null&&(Bl=[]),Bl.push(c,Hl===0?r:r+`_`+Hl,t.memoizedProps)),Hl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:eu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function tu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=hi(n,r),a=_i(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(Ap)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Hl=0,i=eu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||jd(e,n.onUpdate))}else e.subtreeFlags&33554432&&tu(e,t);e=e.sibling}}var nu=!1,q=!1,ru=!1,iu=!1,au=typeof WeakSet==`function`?WeakSet:Set,ou=null,J=!1,su=!1,cu=!1,lu=!1;function Y(e,t,n){if(e=e.containerInfo,cp=_h,e=Gr(e),Kr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(lp={focusedElem:e,selectionRange:r},_h=!1,n=(n&335544064)===n,ou=t,t=n?9270:1024;ou!==null;){if(e=ou,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Yl(r[a]);if(e.alternate===null&&e.flags&2)n&&zl(e),X(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Yl(r),X(n);continue}if(r!==null&&r.memoizedState!==null){n&&zl(e),X(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ou=r):(n&&Xl(e),X(n))}}Rl=null}function X(e){for(;ou!==null;){var t=ou,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=yc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){ff(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)rm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:rm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=hi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=_i(a.default,a.update),a!==`none`&&Ul(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,ou=r;break}ou=t.return}}function uu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ou(e,n),r&4&&yl(5,n);break;case 1:if(Ou(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){ff(n,n.return,e)}else{var i=yc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ff(n,n.return,e)}}}r&64&&xl(n),r&512&&Cl(n,n.return);break;case 3:if(Ou(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{bo(e,t)}catch(e){ff(n,n.return,e)}}break;case 27:t===null&&r&4&&Il(n);case 26:case 5:Ou(e,n),t===null&&r&4&&Al(n),r&512&&Cl(n,n.return);break;case 12:Ou(e,n);break;case 31:Ou(e,n),r&4&&Q(e,n);break;case 13:Ou(e,n),r&4&&vu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),lm(e,n))));break;case 22:if(r=n.memoizedState!==null||nu,!r){var a=t!==null&&t.memoizedState!==null||q;t=nu,i=q,nu=r,(q=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Au(e,n,r)):Ou(e,n),nu=t,q=i}break;case 30:Ou(e,n),r&512&&Cl(n,n.return);break;case 7:r&512&&Cl(n,n.return);default:Ou(e,n)}}function du(e,t){for(e=e.child;e!==null;)Z(e,t),e=e.sibling}function Z(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){ff(e,e.return,t)}fu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Ut=!0}catch(t){ff(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Tp(s,!0):Tp(e.stateNode,!1)}catch(t){ff(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&du(e,t);break;default:du(e,t)}}function fu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:Z(n,r);break a;case 22:n.memoizedState===null&&fu(n,r);break a;default:fu(n,r)}}e=e.sibling}}function pu(e){var t=e.alternate;t!==null&&(e.alternate=null,pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ot(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var mu=null,hu=!1;function gu(e,t,n){for(n=n.child;n!==null;)_u(e,t,n),n=n.sibling}function _u(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount==`function`)try{qe.onCommitFiberUnmount(Ke,n)}catch{}switch(n.tag){case 26:q||wl(n,t),gu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!q&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:q||wl(n,t),Dl(n);var r=mu,i=hu;Cp(n.type)&&(mu=n.stateNode,hu=!1),gu(e,t,n),_m(n.stateNode,n.type,n.memoizedProps),mu=r,hu=i;break;case 5:q||wl(n,t),Dl(n);case 6:if(n.tag===6&&Dl(n),r=mu,i=hu,mu=null,gu(e,t,n),mu=r,hu=i,mu!==null){if(hu)try{(mu.nodeType===9?mu.body:mu.nodeName===`HTML`?mu.ownerDocument.body:mu).removeChild(n.stateNode),Ut=!0}catch(e){ff(n,t,e)}else try{mu.removeChild(n.stateNode),Ut=!0}catch(e){ff(n,t,e)}}break;case 18:mu!==null&&(hu?(e=mu,wp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Uh(e)):wp(mu,n.stateNode));break;case 4:r=mu,i=hu,mu=n.stateNode.containerInfo,hu=!0,gu(e,t,n),mu=r,hu=i;break;case 0:case 11:case 14:case 15:bl(2,n,t),q||bl(4,n,t),gu(e,t,n);break;case 1:q||(wl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Sl(n,t,r)),gu(e,t,n);break;case 21:gu(e,t,n);break;case 22:q=(r=q)||n.memoizedState!==null,gu(e,t,n),q=r;break;case 30:wl(n,t),gu(e,t,n);break;case 7:q||wl(n,t),gu(e,t,n);break;default:gu(e,t,n)}}function Q(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Uh(e)}catch(e){ff(t,t.return,e)}}}function vu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Uh(e)}catch(e){ff(t,t.return,e)}}function yu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new au),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new au),t;default:throw Error(i(435,e.tag))}}function bu(e,t){var n=yu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function xu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Cp(l.type)){mu=l.stateNode,hu=!1;break a}break;case 5:mu=l.stateNode,hu=!1;break a;case 3:case 4:mu=l.stateNode.containerInfo,hu=!0;break a}l=l.return}if(mu===null)throw Error(i(160));_u(s,c,o),mu=null,hu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Cu(t,e,n),t=t.sibling}var Su=null;function Cu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}xu(t,e,n),wu(e),a&4&&(bl(3,e,e.return),yl(3,e),bl(5,e,e.return));break;case 1:xu(t,e,n),wu(e),a&512&&(q||r===null||wl(r,r.return)),a&64&&nu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Su,xu(t,e,n),wu(e),a&512&&(q||r===null||wl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(nu)e.stateNode=pp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Et]||r[yt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),rp(r,t,n),r[yt]=e,Nt(r),t=r;break a;case`link`:if(o=Km(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),rp(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Km(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),rp(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[yt]=e,Nt(r),t=r}e.stateNode=t}}else nu||qm(o,e.type,e.stateNode)}else e.stateNode=Vm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&jl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||q||t.parentNode.removeChild(t)):a.count--,n===null?nu||qm(o,e.type,e.stateNode):Vm(o,n,e.memoizedProps))}break;case 27:xu(t,e,n),wu(e),a&512&&(q||r===null||wl(r,r.return)),r!==null&&a&4&&jl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=ru,ru=!1,xu(t,e,n),ru=o,wu(e),a&512&&(q||r===null||wl(r,r.return)),e.flags&32){t=e.stateNode;try{cn(t,``),Ut=!0}catch(t){ff(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,jl(e,t,r===null?t:r.memoizedProps)),a&1024&&(iu=!0);break;case 6:if(xu(t,e,n),wu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Ut=!0}catch(t){ff(e,e.return,t)}}break;case 3:if(Ut=!1,Gm=null,o=Su,Su=xm(t.containerInfo),xu(t,e,n),Su=o,wu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Uh(t.containerInfo)}catch(t){ff(e,e.return,t)}iu&&(iu=!1,Tu(e)),Ut=!1;break;case 4:a=ru,ru=nu,r=Wt(),o=Su,Su=xm(e.stateNode.containerInfo),xu(t,e,n),wu(e),Su=o,Ut&&su&&(cu=!0),Ut=r,ru=a;break;case 12:xu(t,e,n),wu(e);break;case 31:xu(t,e,n),wu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,bu(e,t)));break;case 13:xu(t,e,n),wu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fd=Le()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,bu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=nu,l=q,u=ru;nu=c||o,ru=u||o,q=l||s,xu(t,e,n),q=l,ru=u,nu=c,wu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||nu||q||(t=s||q,n=nu,r=q,nu=o||nu,q=t,ku(e,2),nu=n,q=r),!o&&ru||du(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,bu(e,n))));break;case 19:xu(t,e,n),wu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,bu(e,t)));break;case 30:a&512&&(q||r===null||wl(r,r.return)),a=Wt(),o=su,s=(n&335544064)===n,c=e.memoizedProps,su=s&&_i(c.default,c.update)!==`none`,xu(t,e,n),wu(e),s&&r!==null&&Ut&&(e.flags|=4),su=o,Ut=a;break;case 21:break;case 7:a&512&&(q||r===null||wl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:xu(t,e,n),wu(e)}}function wu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ml(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(kl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Ol(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Fl(e,Nl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(cn(l,``),n.flags&=-33),Fl(e,Nl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Pl(e,Nl(e),u,s);break;default:throw Error(i(161))}}catch(t){ff(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Tu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,_h=!0,t.reset(),_h=!1),e=e.sibling}}function Eu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Du(t,e),t=t.sibling;else tu(t,!1)}function Du(e,t){var n=e.alternate;if(n===null)ql(e,!1);else switch(e.tag){case 3:if(lu=J=!1,Vl(),Eu(t,e),!J&&!cu){if(e=Bl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Dp(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),lu=!0}Bl=null;break;case 5:Eu(t,e);break;case 4:r=J,J=!1,Eu(t,e),J&&(cu=!0),J=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Eu(t,e):ql(e,!1));break;case 30:r=J,i=Vl(),J=!1,Eu(t,e),J&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=hi(a,o),o=hi(n.memoizedProps,o);var s=_i(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Hl=0,t=eu(e,n,t,o,s,a,!0),Hl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(jd(e,e.memoizedProps.onUpdate),Bl=i):i!==null&&(i.push.apply(i,Bl),Bl=i),J=e.flags&32?!0:r;break;default:Eu(t,e)}}function Ou(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uu(e,t.alternate,t),t=t.sibling}function ku(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:bl(4,n,n.return),ku(n,r);break;case 1:wl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Sl(n,n.return,i),ku(n,r);break;case 27:r&2&&_m(n.stateNode,n.type,n.memoizedProps);case 5:wl(n,n.return),n.tag!==5&&n.tag!==27||Dl(n),ku(n,r);break;case 6:Dl(n);break;case 26:wl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||q||i.parentNode.removeChild(i),ku(n,r);break;case 22:n.memoizedState===null&&ku(n,r);break;case 30:wl(n,n.return),ku(n,r);break;case 7:wl(n,n.return);default:ku(n,r)}e=e.sibling}}function Au(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Au(i,a,n),yl(4,a);break;case 1:if(Au(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){ff(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)yo(l[i],c)}catch(e){ff(r,r.return,e)}}s&&o&64&&xl(a),Cl(a,a.return);break;case 27:n&2&&Il(a);case 5:a.tag!==5&&a.tag!==27||El(a),Au(i,a,n),s&&r===null&&o&4&&Al(a),Cl(a,a.return);break;case 6:El(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||nu||qm(xm(c.ownerDocument),a.type,c),Au(i,a,n),s&&r===null&&o&4&&Al(a),Cl(a,a.return);break;case 12:Au(i,a,n);break;case 31:Au(i,a,n),s&&o&4&&Q(i,a);break;case 13:Au(i,a,n),s&&o&4&&vu(i,a);break;case 22:a.memoizedState===null&&Au(i,a,n),Cl(a,a.return);break;case 30:Au(i,a,n),Cl(a,a.return);break;case 7:Cl(a,a.return);default:Au(i,a,n)}t=t.sibling}}function ju(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Oa(n))}function Mu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oa(e))}function Nu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Pu(e,t,n,r),t=t.sibling;else i&&$l(t)}function Pu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ql(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Nu(e,t,n,r),a&2048&&yl(9,t);break;case 1:Nu(e,t,n,r);break;case 3:Nu(e,t,n,r),i&&lu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Oa(a)));break;case 12:if(a&2048){Nu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){ff(t,t.return,e)}}else Nu(e,t,n,r);break;case 31:Nu(e,t,n,r);break;case 13:Nu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Ql(t),o._visibility&2?Nu(e,t,n,r):(o._visibility|=2,Fu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Ql(s),o._visibility&2?Nu(e,t,n,r):Iu(e,t)),a&2048&&ju(s,t);break;case 24:Nu(e,t,n,r),a&2048&&Mu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Gl(a.child,!0),Gl(t.child,!0))),Nu(e,t,n,r);break;default:Nu(e,t,n,r)}}function Fu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Fu(a,o,s,c,i),yl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Fu(a,o,s,c,i)):u._visibility&2?Fu(a,o,s,c,i):Iu(a,o),i&&l&2048&&ju(o.alternate,o);break;case 24:Fu(a,o,s,c,i),i&&l&2048&&Mu(o.alternate,o);break;default:Fu(a,o,s,c,i)}t=t.sibling}}function Iu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Iu(n,r),i&2048&&ju(r.alternate,r);break;case 24:Iu(n,r),i&2048&&Mu(r.alternate,r);break;default:Iu(n,r)}t=t.sibling}}var Lu=8192;function Ru(e,t,n){if(e.subtreeFlags&Lu)for(e=e.child;e!==null;)zu(e,t,n),e=e.sibling}function zu(e,t,n){switch(e.tag){case 26:Ru(e,t,n),e.flags&Lu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Qm(n,e)):$m(n,Su,e.memoizedState,e.memoizedProps));break;case 5:Ru(e,t,n),e.flags&Lu&&(e=e.stateNode,(t&335544128)===t&&Qm(n,e));break;case 3:case 4:var r=Su;Su=xm(e.stateNode.containerInfo),Ru(e,t,n),Su=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Lu,Lu=16777216,Ru(e,t,n),Lu=r):Ru(e,t,n));break;case 30:if((e.flags&Lu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Rl===null&&(Rl=new Map),Rl.set(r,i)}Ru(e,t,n);break;default:Ru(e,t,n)}}function Bu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Vu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Wu(r,e)}Bu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hu(e),e=e.sibling}function Hu(e){switch(e.tag){case 0:case 11:case 15:Vu(e),e.flags&2048&&bl(9,e,e.return);break;case 3:Vu(e);break;case 12:Vu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Uu(e)):Vu(e);break;default:Vu(e)}}function Uu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Wu(r,e)}Bu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:bl(8,t,t.return),Uu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Uu(t));break;default:Uu(t)}e=e.sibling}}function Wu(e,t){for(;ou!==null;){var n=ou;switch(n.tag){case 0:case 11:case 15:bl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Oa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ou=r;else a:for(n=e;ou!==null;){r=ou;var i=r.sibling,a=r.return;if(pu(r),r===n){ou=null;break a}if(i!==null){i.return=a,ou=i;break a}ou=a}}}var Gu={getCacheForType:function(e){var t=Ca(Ea),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ca(Ea).controller.signal}},Ku=typeof WeakMap==`function`?WeakMap:Map,qu=0,Ju=null,Yu=null,Xu=0,Zu=0,Qu=null,$u=!1,ed=!1,td=!1,nd=0,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=null,ud=null,dd=!1,fd=0,pd=0,md=1/0,hd=null,gd=null,_d=0,vd=null,yd=null,bd=0,xd=0,Sd=null,Cd=null,wd=null,Td=null,Ed=null,Dd=0,Od=null;function kd(){return qu&2&&Xu!==0?Xu&-Xu:B.T===null?gt():Nf()}function Ad(){if(sd===0){if(!(Xu&536870912)||ra){var e=et;et<<=1,!(et&3932160)&&(et=262144),sd=e}else sd=536870912}return e=Eo.current,e!==null&&(e.flags|=32),sd}function jd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Fp(hi(e.memoizedProps,n))),Td===null&&(Td=[]),Td.push(t.bind(null,r))}}function Md(e,t,n){(e===Ju&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)&&(zd(e,0),Id(e,Xu,sd,!1)),lt(e,n),(!(qu&2)||e!==Ju)&&(e===Ju&&(!(qu&2)&&(ad|=n),rd===4&&Id(e,Xu,sd,!1)),Tf(e))}function Nd(e,t,n){if(qu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||it(e,t),a=r?qd(e,t):Gd(e,t,!0),o=r;do{if(a===0){ed&&!r&&Id(e,t,0,!1);break}if(n=e.current.alternate,o&&!Fd(n)){a=Gd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ld;var l=c.current.memoizedState.isDehydrated;if(l&&(zd(c,s).flags|=256),s=Gd(c,s,!1),s!==2&&s!==6){if(td&&!l){c.errorRecoveryDisabledLanes|=o,ad|=o,a=4;break a}o=ud,ud=a,o!==null&&(ud===null?ud=o:ud.push.apply(ud,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){zd(e,0),Id(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Id(r,t,sd,!$u);break a;case 2:ud=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fd+300-Le(),10<a)){if(Id(r,t,sd,!$u),rt(r,0,!0)!==0)break a;bd=t,r.timeoutHandle=_p(Pd.bind(null,r,n,ud,hd,dd,t,sd,ad,cd,$u,o,`Throttled`,-0,0),a);break a}Pd(r,n,ud,hd,dd,t,sd,ad,cd,$u,o,null,-0,0)}break}while(1);Tf(e)}function Pd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},Rl=null,zu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=rh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?fd-Le():(a&4194048)===a?pd-Le():0,m=th(d,m),m!==null)){bd=a,e.cancelPendingCommit=m(ef.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Id(e,a,o,!l);return}ef(e,t,a,n,r,i,o,s,c,l,u,d)}function Fd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!zr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Id(e,t,n,r){t=at(e,t),t&=~od,t&=~ad,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ye(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&dt(e,n,t)}function Ld(){return qu&6?!0:(Ef(0,!1),!1)}function Rd(){if(Yu!==null){if(Zu===0)var e=Yu.return;else e=Yu,ha=ma=null,ns(e),eo=null,to=0,e=Yu;for(;e!==null;)vl(e.alternate,e),e=e.return;Yu=null}}function zd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,vp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bd=0,Rd(),Ju=e,Yu=n=Mi(e.current,null),Xu=t,Zu=0,Qu=null,$u=!1,ed=it(e,t),td=!1,cd=sd=od=ad=id=rd=0,ud=ld=null,dd=!1,nd=at(e,t),Si(),n}function Bd(e,t){Ro=null,B.H=dc,t===Wa||t===Ka?(t=Qa(),Zu=3):t===Ga?(t=Qa(),Zu=4):Zu=t===kc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Qu=t,Yu===null&&(rd=1,Cc(e,Bi(t,e.current)))}function Vd(){var e=Eo.current;return e===null?!0:(Xu&4194048)===Xu?Do===null:(Xu&62914560)===Xu||Xu&536870912?e===Do:!1}function Hd(){var e=B.H;return B.H=dc,e===null?dc:e}function Ud(){var e=B.A;return B.A=Gu,e}function Wd(){rd=4,$u||(Xu&4194048)!==Xu&&Eo.current!==null||(ed=!0),!(id&134217727)&&!(ad&134217727)||Ju===null||Id(Ju,Xu,sd,!1)}function Gd(e,t,n){var r=qu;qu|=2;var i=Hd(),a=Ud();(Ju!==e||Xu!==t)&&(hd=null,zd(e,t)),t=!1;var o=rd;a:do try{if(Zu!==0&&Yu!==null){var s=Yu,c=Qu;switch(Zu){case 8:Rd(),o=6;break a;case 3:case 2:case 9:case 6:Eo.current===null&&(t=!0);var l=Zu;if(Zu=0,Qu=null,Zd(e,s,c,l),n&&ed){o=0;break a}break;default:l=Zu,Zu=0,Qu=null,Zd(e,s,c,l)}}Kd(),o=rd;break}catch(t){Bd(e,t)}while(1);return t&&e.shellSuspendCounter++,ha=ma=null,qu=r,B.H=i,B.A=a,Yu===null&&(Ju=null,Xu=0,Si()),o}function Kd(){for(;Yu!==null;)Yd(Yu)}function qd(e,t){var n=qu;qu|=2;var r=Hd(),a=Ud();Ju!==e||Xu!==t?(hd=null,md=Le()+500,zd(e,t)):ed=it(e,t);a:do try{if(Zu!==0&&Yu!==null){t=Yu;var o=Qu;b:switch(Zu){case 1:Zu=0,Qu=null,Zd(e,t,o,1);break;case 2:case 9:if(Ja(o)){Zu=0,Qu=null,Xd(t);break}t=function(){Zu!==2&&Zu!==9||Ju!==e||(Zu=7),Tf(e)},o.then(t,t);break a;case 3:Zu=7;break a;case 4:Zu=5;break a;case 7:Ja(o)?(Zu=0,Qu=null,Xd(t)):(Zu=0,Qu=null,Zd(e,t,o,7));break;case 5:var s=null;switch(Yu.tag){case 26:s=Yu.memoizedState;case 5:case 27:var c=Yu;if(s?Xm(s):c.stateNode.complete){Zu=0,Qu=null;var l=c.sibling;if(l!==null)Yu=l;else{var u=c.return;u===null?Yu=null:(Yu=u,Qd(u))}break b}}Zu=0,Qu=null,Zd(e,t,o,5);break;case 6:Zu=0,Qu=null,Zd(e,t,o,6);break;case 8:Rd(),rd=6;break a;default:throw Error(i(462))}}Jd();break}catch(t){Bd(e,t)}while(1);return ha=ma=null,B.H=r,B.A=a,qu=n,Yu===null?(Ju=null,Xu=0,Si(),rd):0}function Jd(){for(;Yu!==null&&!Fe();)Yd(Yu)}function Yd(e){var t=ll(e.alternate,e,nd);e.memoizedProps=e.pendingProps,t===null?Qd(e):Yu=t}function Xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Uc(n,t,t.pendingProps,t.type,void 0,Xu);break;case 11:t=Uc(n,t,t.pendingProps,t.type.render,t.ref,Xu);break;case 5:ns(t);var r=t;r===ta&&(ra?(la(r),r.tag===5&&r.stateNode!=null&&(na=r.stateNode)):(la(r),ra=!0));default:vl(n,t),t=Yu=Ni(t,nd),t=ll(n,t,nd)}e.memoizedProps=e.pendingProps,t===null?Qd(e):Yu=t}function Zd(e,t,n,r){ha=ma=null,ns(t),eo=null,to=0;var i=t.return;try{if(Oc(e,i,t,n,Xu)){rd=1,Cc(e,Bi(n,e.current)),Yu=null;return}}catch(t){if(i!==null)throw Yu=i,t;rd=1,Cc(e,Bi(n,e.current)),Yu=null;return}t.flags&32768?(ra||r===1?e=!0:ed||Xu&536870912?e=!1:($u=e=!0,(r===2||r===9||r===3||r===6)&&(r=Eo.current,r!==null&&r.tag===13&&(r.flags|=16384))),$d(t,e)):Qd(t)}function Qd(e){var t=e;do{if(t.flags&32768){$d(t,$u);return}e=t.return;var n=gl(t.alternate,t,nd);if(n!==null){Yu=n;return}if(t=t.sibling,t!==null){Yu=t;return}Yu=t=e}while(t!==null);rd===0&&(rd=5)}function $d(e,t){do{var n=_l(e.alternate,e);if(n!==null){n.flags&=32767,Yu=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Yu=e;return}Yu=e=n}while(e!==null);rd=6,Yu=null}function ef(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do lf();while(_d!==0);if(qu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Ju&&(Yu=Ju=null,Xu=0),yd=t,vd=e,bd=n,Sd=a,Cd=r,tf(e,t,n,s,c,l,f)}}function tf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(xd=s,s|=xi,ut(e,n,s,r,i,a),Td=null,(n&335544064)===n?(Ed=ja(e),r=10262):(Ed=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(Ve,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),Ll=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=B.T,B.T=null,i=V.p,V.p=2,a=qu,qu|=4;try{Y(e,t,n)}finally{qu=a,V.p=i,B.T=r}}_d=1,Ll?wd=Np(o,e.containerInfo,Ed,af,of,rf,sf,uf,nf,null,null):(af(),of(),sf())}function nf(e){if(_d!==0){var t=vd.onRecoverableError;t(e,{componentStack:null})}}function rf(){_d===3&&(_d=0,Du(yd,vd),_d=4)}function af(){if(_d===1){_d=0;var e=vd,t=yd,n=bd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=B.T,B.T=null;var i=V.p;V.p=2;var a=qu;qu|=4;try{su=cu=!1,Cu(t,e,n),n=lp;var o=Gr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Wr(s.ownerDocument.documentElement,s)){if(c!==null&&Kr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ur(s,h),v=Ur(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}_h=!!cp,lp=cp=null}finally{qu=a,V.p=i,B.T=r}}e.current=t,_d=2}}function of(){if(_d===2){_d=0;var e=vd,t=yd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=B.T,B.T=null;var r=V.p;V.p=2;var i=qu;qu|=4;try{uu(e,t.alternate,t)}finally{qu=i,V.p=r,B.T=n}}_d=3}}function sf(){if(_d===4||_d===3){_d=0;var e=wd;wd=null,Ie();var t=vd,n=yd,r=bd,i=Cd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?_d=5:(_d=0,yd=vd=null,cf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(gd=null),ht(r),n=n.stateNode,qe&&typeof qe.onCommitFiberRoot==`function`)try{qe.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=B.T,a=V.p,V.p=2,B.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{B.T=n,V.p=a}}if(i=Td,o=Ed,Ed=null,i!==null&&(Td=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);bd&3&&lf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===Od?Dd++:(Dd=0,Od=t):(Dd=0,Od=null),Ef(0,!1)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Oa(t)))}function lf(){return wd!==null&&(wd.skipTransition(),wd=null),af(),of(),sf(),uf()}function uf(){if(_d!==5)return!1;var e=vd,t=xd;xd=0;var n=ht(bd),r=B.T,a=V.p;try{V.p=32>n?32:n,B.T=null,n=Sd,Sd=null;var o=vd,s=bd;if(_d=0,yd=vd=null,bd=0,qu&6)throw Error(i(331));var c=qu;if(qu|=4,Hu(o.current),Pu(o,o.current,s,n),qu=c,Ef(0,!1),qe&&typeof qe.onPostCommitFiberRoot==`function`)try{qe.onPostCommitFiberRoot(Ke,o)}catch{}return!0}finally{V.p=a,B.T=r,cf(e,t)}}function df(e,t,n){t=Bi(n,t),t=Tc(e.stateNode,t,2),e=po(e,t,2),e!==null&&(lt(e,2),Tf(e))}function ff(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gd===null||!gd.has(r))){e=Bi(n,e),n=Ec(2),r=po(t,n,2),r!==null&&(Dc(n,r,t,e),lt(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ku;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(td=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ju===e&&(Xu&n)===n&&(rd===4||rd===3&&(Xu&62914560)===Xu&&300>Le()-fd?qu&2?od|=n:zd(e,0):od|=n,cd===Xu&&(cd=0)),Tf(e)}function hf(e,t){t===0&&(t=st()),e=Ti(e,t),e!==null&&(lt(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return Ne(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ye(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=Xu,a=rt(r,r===Ju?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||it(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&gp()&&(e=wf);for(var t=Le(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}_d!==0&&_d!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ye(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ot(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ju,n=Xu,n=rt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Pe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||it(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Pe(r),ht(n)){case 2:case 8:n=Be;break;case 32:n=Ve;break;case 268435456:n=Ue;break;default:n=Ve}return r=Af.bind(null,e),n=Ne(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Pe(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(_d!==0&&_d!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var r=Xu;return r=rt(e,e===Ju?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Nd(e,r,t),kf(e,Le()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(lf())return null;Nd(e,t,!0)}function Mf(){xp(function(){qu&6?Ne(ze,Df):Of()})}function Nf(){if(wf===0){var e=Pa;e===0&&(e=$e,$e<<=1,!($e&261888)&&($e=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:hn(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[bt]||null).action),o=r.submitter;o&&(t=(t=o[bt]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Ln(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);Zs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Zs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<fi.length;If++){var Lf=fi[If];pi(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}pi(ii,`onAnimationEnd`),pi(ai,`onAnimationIteration`),pi(oi,`onAnimationStart`),pi(`dblclick`,`onDoubleClick`),pi(`focusin`,`onFocus`),pi(`focusout`,`onBlur`),pi(si,`onTransitionRun`),pi(ci,`onTransitionStart`),pi(li,`onTransitionCancel`),pi(ui,`onTransitionEnd`),Rt(`onMouseEnter`,[`mouseout`,`mouseover`]),Rt(`onMouseLeave`,[`mouseout`,`mouseover`]),Rt(`onPointerEnter`,[`pointerout`,`pointerover`]),Rt(`onPointerLeave`,[`pointerout`,`pointerover`]),Lt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Lt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Lt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Lt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Lt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Lt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){vi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){vi(e)}i.currentTarget=null,a=c}}}}function Vf(e,t){var n=t[St];n===void 0&&(n=t[St]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Ft.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(wh(t)){case 2:var i=vh;break;case 8:i=yh;break;default:i=bh}n=i.bind(null,t,n,e),i=void 0,!En||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=kt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Cn(function(){var r=a,i=vn(n),s=[];a:{var c=di.get(e);if(c!==void 0){var l=Ln,u=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:l=tr;break;case`focusin`:u=`focus`,l=Kn;break;case`focusout`:u=`blur`,l=Kn;break;case`beforeblur`:case`afterblur`:l=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=ir;break;case ii:case ai:case oi:l=qn;break;case ui:l=ar;break;case`scroll`:case`scrollend`:l=zn;break;case`wheel`:l=or;break;case`copy`:case`cut`:case`paste`:l=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=nr;break;case`submit`:l=rr;break;case`toggle`:case`beforetoggle`:l=sr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=wn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==_n&&(u=n.relatedTarget||n.fromElement)&&(kt(u)||u[xt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?kt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Wn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=nr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:jt(c),h=l==null?u:jt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,kt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?jt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Dr;else if(xr(c)){if(Or)_=Lr;else{_=Fr;var v=Pr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&fn(r.elementType)&&(_=Dr):_=Ir;if(_&&=_(e,r)){Sr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?jt(r):window,e){case`focusin`:(xr(v)||v.contentEditable===`true`)&&(Jr=v,Yr=r,Xr=null);break;case`focusout`:Xr=Yr=Jr=null;break;case`mousedown`:Zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Zr=!1,Qr(s,n,i);break;case`selectionchange`:if(qr)break;case`keydown`:case`keyup`:Qr(s,n,i)}var y;if(lr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else _r?hr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(fr&&n.locale!==`ko`&&(_r||b!==`onCompositionStart`?b===`onCompositionEnd`&&_r&&(y=jn()):(On=i,kn=`value`in On?On.value:On.textContent,_r=!0)),v=Jf(r,b),0<v.length&&(b=new Yn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=gr(n),y!==null&&(b.data=y)))),(y=dr?vr(e,n):yr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Ff(s,e,r,n,i)}Bf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=wn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=wn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=wn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=wn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function tp(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||cn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&cn(e,``+r);else return;break;case`className`:Kt(e,`class`,r);break;case`tabIndex`:Kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Kt(e,n,r);break;case`style`:dn(e,r,o);return;case`data`:if(t!==`object`){Kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=hn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&tp(e,t,`name`,a.name,a,null),tp(e,t,`formEncType`,a.formEncType,a,null),tp(e,t,`formMethod`,a.formMethod,a,null),tp(e,t,`formTarget`,a.formTarget,a,null)):(tp(e,t,`encType`,a.encType,a,null),tp(e,t,`method`,a.method,a,null),tp(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=hn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=gn);return;case`onScroll`:r!=null&&Vf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Vf(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=hn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Vf(`beforetoggle`,e),Vf(`toggle`,e),Gt(e,`popover`,r);break;case`xlinkActuate`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Gt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=pn.get(n)||n,Gt(e,n,r);else return}Ut=!0}function np(e,t,n,r,a,o){switch(n){case`style`:dn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)cn(e,r);else if(typeof r==`number`||typeof r==`bigint`)cn(e,``+r);else return;break;case`onScroll`:r!=null&&Vf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Vf(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=gn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!It.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[bt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Ut=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Gt(e,n,r)}return}Ut=!0}function rp(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Vf(`error`,e),Vf(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:tp(e,t,o,s,n,null)}}a&&tp(e,t,`srcSet`,n.srcSet,n,null),r&&tp(e,t,`src`,n.src,n,null);return;case`input`:Vf(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:tp(e,t,r,d,n,null)}}nn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Vf(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:tp(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&an(e,!!r,n,!0):an(e,!!r,t,!1);return;case`textarea`:for(s in Vf(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:tp(e,t,s,c,n,null)}sn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:tp(e,t,l,r,n,null)}return;case`dialog`:Vf(`beforetoggle`,e),Vf(`toggle`,e),Vf(`cancel`,e),Vf(`close`,e);break;case`iframe`:case`object`:Vf(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)Vf(Rf[r],e);break;case`image`:Vf(`error`,e),Vf(`load`,e);break;case`details`:Vf(`toggle`,e);break;case`embed`:case`source`:case`link`:Vf(`error`,e),Vf(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:tp(e,t,u,r,n,null)}return;default:if(fn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&np(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&tp(e,t,c,r,n,null))}var ip={};function ap(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||tp(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Ut=!0),o=m;break;case`name`:m!==f&&(Ut=!0),a=m;break;case`checked`:m!==f&&(Ut=!0),u=m;break;case`defaultChecked`:m!==f&&(Ut=!0),d=m;break;case`value`:m!==f&&(Ut=!0),s=m;break;case`defaultValue`:m!==f&&(Ut=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&tp(e,t,p,m,r,f)}}tn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||tp(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Ut=!0),p=o;break;case`defaultValue`:o!==l&&(Ut=!0),c=o;break;case`multiple`:o!==l&&(Ut=!0),s=o;default:o!==l&&tp(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?an(e,!!n,n?[]:``,!1):an(e,!!n,t,!0)):an(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:tp(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Ut=!0),p=a;break;case`defaultValue`:a!==o&&(Ut=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&tp(e,t,s,a,r,o)}on(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:tp(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Ut=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:tp(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&tp(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:tp(e,t,u,p,r,m)}return;default:if(fn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&np(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||np(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&tp(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||tp(e,t,f,p,r,m)}function op(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function sp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&op(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&op(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var cp=null,lp=null;function up(e){return e.nodeType===9?e:e.ownerDocument}function dp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function fp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function pp(e,t,n,r){return n=up(n).createElement(e),n[yt]=r,n[bt]=t,rp(n,e,t),Nt(n),n}function mp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hp=null;function gp(){var e=window.event;return e&&e.type===`popstate`?e!==hp&&(hp=e,!0):(hp=null,!1)}var _p=typeof setTimeout==`function`?setTimeout:void 0,vp=typeof clearTimeout==`function`?clearTimeout:void 0,yp=typeof Promise==`function`?Promise:void 0,bp=typeof requestAnimationFrame==`function`?requestAnimationFrame:_p,xp=typeof queueMicrotask==`function`?queueMicrotask:yp===void 0?_p:function(e){return yp.resolve(null).then(e).catch(Sp)};function Sp(e){setTimeout(function(){throw e})}function Cp(e){return e===`head`}function wp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Uh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)vm(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,vm(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Et]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&vm(e.ownerDocument.body)}n=i}while(n);Uh(t)}function Tp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Ep(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Dp(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Op(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function kp(e){return Op(e.getBoundingClientRect(),getComputedStyle(e),e)}function Ap(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Op(t,n,e)}function jp(e){return e.documentElement.clientHeight}function Mp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Np(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(jp(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Zm(f),u>eh){s.length=o;break}f=new Promise(Mp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Pp(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Pp.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Pp.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Pp.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Fp(e){return{name:e,group:new Pp(`group`,e),imagePair:new Pp(`image-pair`,e),old:new Pp(`old`,e),new:new Pp(`new`,e)}}function Ip(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ip.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Vp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=zp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Lp,e,s,r)}this._eventListeners=a}};function Lp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Ip.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Vp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=zp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Rp,e,n,i),r.splice(t,1),a!==null&&a()}};function Rp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function zp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Bp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Vp(e,t,n,r){if(e.length===0)return-1;r=Bp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Bp(a.optionsOrUseCapture)===r)return i}return-1}Ip.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,zp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,zp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Ip.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Hp,e,void 0,void 0)};function Hp(e,t){return e.tag!==6&&(e=b(e),mm(e,t))}Ip.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Up,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Hp(t[n],e);n--);};function Up(e,t){return t.push(e),!1}Ip.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=up(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0))};function Wp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Ip.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0)};function Gp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Ip.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Kp,e,void 0,void 0);for(var n=t=0;n<qp.length;n++){var r=qp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):qp[t++]=r}qp.length=t}};function Kp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var qp=[],Jp=!1;function Yp(e,t,n){qp.push({fragmentInstance:e,observer:t,instance:n}),Jp||(Jp=!0,hm(function(){Jp=!1;var e=qp;qp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Ip.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Xp,e,void 0,void 0),e};function Xp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Ip.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Ip.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Up,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Zp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Zp(e,t,n,r,i){var a=kt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Qp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ip.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Up,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Qp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Qp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function $p(e,t){return e=b(e),em(e,t),!1}function em(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,zp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<qp.length;i++){var a=qp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(qp[r++]=a)}qp.length=r,n.observe(e)}),em(e,t))}function nm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,zp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Yp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function rm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:rm(n),Ot(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function im(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Et])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=um(e.nextSibling),e===null)break}return null}function am(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=um(e.nextSibling),e===null))return null;return e}function om(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=um(e.nextSibling),e===null))return null;return e}function sm(e){return e.data===`$?`||e.data===`$~`}function cm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function lm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function um(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var dm=null;function fm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return um(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function pm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function mm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function hm(e){bp(function(){bp(function(t){return e(t)})})}function gm(e,t,n){switch(t=up(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function _m(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&tp(e,t,r,null,ip,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===gn&&(e.onclick=null),Ot(e)}function vm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ot(e)}var ym=new Map,bm=new Set;function xm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Sm=V.d;V.d={f:Cm,r:wm,D:Dm,C:Om,L:km,m:Am,X:Mm,S:jm,M:Nm};function Cm(){var e=Sm.f(),t=Ld();return e||t}function wm(e){var t=At(e);t!==null&&t.tag===5&&t.type===`form`?$s(t):Sm.r(e)}var Tm=typeof document>`u`?null:document;function Em(e,t,n){var r=Tm;if(r&&typeof t==`string`&&t){var i=en(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),bm.has(i)||(bm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),rp(t,`link`,e),Nt(t),r.head.appendChild(t)))}}function Dm(e){Sm.D(e),Em(`dns-prefetch`,e,null)}function Om(e,t){Sm.C(e,t),Em(`preconnect`,e,t)}function km(e,t,n){Sm.L(e,t,n);var r=Tm;if(r&&e&&t){var i=`link[rel="preload"][as="`+en(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+en(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+en(n.imageSizes)+`"]`)):i+=`[href="`+en(e)+`"]`;var a=i;switch(t){case`style`:a=Fm(e);break;case`script`:a=zm(e)}if(!(ym.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),ym.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Im(a))||t===`script`&&r.querySelector(Bm(a))))){var o=r.createElement(`link`);rp(o,`link`,e),t===`style`&&(o[Dt]=!0,o.onload=o.onerror=function(){Pt(o)}),Nt(o),r.head.appendChild(o)}}}function Am(e,t){Sm.m(e,t);var n=Tm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+en(r)+`"][href="`+en(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=zm(e)}if(!ym.has(a)&&(e=D({rel:`modulepreload`,href:e},t),ym.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Bm(a)))return}r=n.createElement(`link`),rp(r,`link`,e),Nt(r),n.head.appendChild(r)}}}function jm(e,t,n){Sm.S(e,t,n);var r=Tm;if(r&&e){var i=Mt(r).hoistableStyles,a=Fm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Im(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=ym.get(a))&&Um(e,n);var c=o=r.createElement(`link`);Nt(c),rp(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Hm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Mm(e,t){Sm.X(e,t);var n=Tm;if(n&&e){var r=Mt(n).hoistableScripts,i=zm(e),a=r.get(i);a||(a=n.querySelector(Bm(i)),a||(e=D({src:e,async:!0},t),(t=ym.get(i))&&Wm(e,t),a=n.createElement(`script`),Nt(a),rp(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t){Sm.M(e,t);var n=Tm;if(n&&e){var r=Mt(n).hoistableScripts,i=zm(e),a=r.get(i);a||(a=n.querySelector(Bm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=ym.get(i))&&Wm(e,t),a=n.createElement(`script`),Nt(a),rp(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pm(e,t,n,r){var a=(a=ye.current)?xm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Fm(n.href),t=Mt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Fm(n.href);var o=Mt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Im(e)))?o._p||(s.instance=o,s.state.loading=5):(o=ym.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ym.set(e,o)),Rm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=zm(n),t=Mt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Fm(e){return`href="`+en(e)+`"`}function Im(e){return`link[rel="stylesheet"][`+e+`]`}function Lm(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Rm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Dt]){r.loading=1;return}}else t=e.createElement(`link`),t[Dt]=!0,t.onload=t.onerror=Pt.bind(null,t),rp(t,`link`,n),Nt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function zm(e){return`[src="`+en(e)+`"]`}function Bm(e){return`script[async]`+e}function Vm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+en(n.href)+`"]`);if(r)return t.instance=r,Nt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Nt(r),rp(r,`style`,a),Hm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Fm(n.href);var o=e.querySelector(Im(a));if(o)return t.state.loading|=4,t.instance=o,Nt(o),o;r=Lm(n),(a=ym.get(a))&&Um(r,a),o=(e.ownerDocument||e).createElement(`link`),Nt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),rp(o,`link`,r),t.state.loading|=4,Hm(o,n.precedence,e),t.instance=o;case`script`:return o=zm(n.src),(a=e.querySelector(Bm(o)))?(t.instance=a,Nt(a),a):(r=n,(a=ym.get(o))&&(r=D({},n),Wm(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Nt(a),rp(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Hm(r,n.precedence,e));return t.instance}function Hm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Wm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Gm=null;function Km(e,t,n){if(Gm===null){var r=new Map,i=Gm=new Map;i.set(n,r)}else i=Gm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Et]||a[yt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function qm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Jm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Ym(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Xm(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Zm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Qm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Zm(t),e.suspenseyImages.push(t)),e=ih.bind(e),t.decode().then(e,e))}function $m(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Fm(r.href),a=t.querySelector(Im(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=rh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Nt(a);return}a=t.ownerDocument||t,r=Lm(r),(i=ym.get(i))&&Um(r,i),a=a.createElement(`link`),Nt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),rp(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=rh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var eh=0;function th(e,t){return e.stylesheets&&e.count===0&&oh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&eh===0&&(eh=62500*sp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>eh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function nh(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)oh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function rh(){this.count--,nh(this)}function ih(){this.imgCount--,nh(this)}var ah=null;function oh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ah=new Map,t.forEach(sh,e),ah=null,rh.call(e))}function sh(e,t){if(!(t.state.loading&4)){var n=ah.get(e);if(n)var r=n.get(null);else{n=new Map,ah.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=rh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ch={$$typeof:F,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function lh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function uh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new lh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ai(3,null,null,t),e.current=a,a.stateNode=e,t=Da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},lo(a),e}function dh(e){return e?(e=Oi,e):Oi}function fh(e,t,n,r,i,a){i=dh(i),r.context===null?r.context=i:r.pendingContext=i,r=fo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=po(e,r,t),n!==null&&(Md(n,e,t),mo(n,e,t))}function ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mh(e,t){ph(e,t),(e=e.alternate)&&ph(e,t)}function hh(e){if(e.tag===13||e.tag===31){var t=Ti(e,67108864);t!==null&&Md(t,e,67108864),mh(e,67108864)}}function gh(e){if(e.tag===13||e.tag===31){var t=kd();t=mt(t);var n=Ti(e,t);n!==null&&Md(n,e,t),mh(e,t)}}var _h=!0;function vh(e,t,n,r){var i=B.T;B.T=null;var a=V.p;try{V.p=2,bh(e,t,n,r)}finally{V.p=a,B.T=i}}function yh(e,t,n,r){var i=B.T;B.T=null;var a=V.p;try{V.p=8,bh(e,t,n,r)}finally{V.p=a,B.T=i}}function bh(e,t,n,r){if(_h){var i=xh(r);if(i===null)Kf(e,t,r,Sh,n),Nh(e,r);else if(Fh(i,e,t,n,r))r.stopPropagation();else if(Nh(e,r),t&4&&-1<Mh.indexOf(e)){for(;i!==null;){var a=At(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=nt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ye(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(qu&6)&&(md=Le()+500,Ef(0,!1))}}break;case 31:case 13:s=Ti(a,2),s!==null&&Md(s,a,2),Ld(),mh(a,2)}if(a=xh(r),a===null&&Kf(e,t,r,Sh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function xh(e){return e=vn(e),Ch(e)}var Sh=null;function Ch(e){if(Sh=null,e=kt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sh=e,null}function wh(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Re()){case ze:return 2;case Be:return 8;case Ve:case He:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Th=!1,Eh=null,Dh=null,Oh=null,kh=new Map,Ah=new Map,jh=[],Mh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Nh(e,t){switch(e){case`focusin`:case`focusout`:Eh=null;break;case`dragenter`:case`dragleave`:Dh=null;break;case`mouseover`:case`mouseout`:Oh=null;break;case`pointerover`:case`pointerout`:kh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Ah.delete(t.pointerId)}}function Ph(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=At(t),t!==null&&hh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fh(e,t,n,r,i){switch(t){case`focusin`:return Eh=Ph(Eh,e,t,n,r,i),!0;case`dragenter`:return Dh=Ph(Dh,e,t,n,r,i),!0;case`mouseover`:return Oh=Ph(Oh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return kh.set(a,Ph(kh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Ah.set(a,Ph(Ah.get(a)||null,e,t,n,r,i)),!0}return!1}function Ih(e){var t=kt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,_t(e.priority,function(){gh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,_t(e.priority,function(){gh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_n=r,n.target.dispatchEvent(r),_n=null}else return t=At(n),t!==null&&hh(t),e.blockedOn=n,!1;t.shift()}return!0}function Rh(e,t,n){Lh(e)&&n.delete(t)}function zh(){Th=!1,Eh!==null&&Lh(Eh)&&(Eh=null),Dh!==null&&Lh(Dh)&&(Dh=null),Oh!==null&&Lh(Oh)&&(Oh=null),kh.forEach(Rh),Ah.forEach(Rh)}function Bh(e,n){e.blockedOn===n&&(e.blockedOn=null,Th||(Th=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,zh)))}var Vh=null;function Hh(e){Vh!==e&&(Vh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Vh===e&&(Vh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Ch(r||n)===null)continue;break}var a=At(n);a!==null&&(e.splice(t,3),t-=3,Zs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Uh(e){function t(t){return Bh(t,e)}Eh!==null&&Bh(Eh,e),Dh!==null&&Bh(Dh,e),Oh!==null&&Bh(Oh,e),kh.forEach(t),Ah.forEach(t);for(var n=0;n<jh.length;n++){var r=jh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<jh.length&&(n=jh[0],n.blockedOn===null);)Ih(n),n.blockedOn===null&&jh.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[bt]||null;if(typeof a==`function`)o||Hh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[bt]||null)s=o.formAction;else if(Ch(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Hh(n)}}}function Wh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Gh(e){this._internalRoot=e}Kh.prototype.render=Gh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;fh(n,kd(),e,t,null,null)},Kh.prototype.unmount=Gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fh(e.current,2,null,e,null,null),Ld(),t[xt]=null}};function Kh(e){this._internalRoot=e}Kh.prototype.unstable_scheduleHydration=function(e){if(e){var t=gt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jh.length&&t!==0&&t<jh[n].priority;n++);jh.splice(n,0,e),n===0&&Ih(e)}};var qh=n.version;if(qh!==`19.3.0`)throw Error(i(527,qh,`19.3.0`));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Jh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:B,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Yh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yh.isDisabled&&Yh.supportsFiber)try{Ke=Yh.inject(Jh),qe=Yh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=bc,s=xc,c=Sc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=uh(e,1,!1,null,null,n,r,null,o,s,c,Wh),e[xt]=t.current,Wf(e),new Gh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,b=/^[\\/]{2}/;function x(e,t){return t+e.replace(/\\/g,`/`)}var S=`popstate`;function C(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function w(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return A(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:j(t)}return N(t,n,null,e)}function T(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=M(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),A(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:j(t))}function r(e,t){D(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return N(t,n,r,e)}function E(e,t){if(e===!1||e==null)throw Error(t)}function D(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function O(){return Math.random().toString(36).substring(2,10)}function k(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function A(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?M(t):t,state:n,key:t&&t.key||r||O(),mask:i}}function j({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function M(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function N(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=C(e)?e:A(h.location,e,t);n&&n(r,e),l=u()+1;let d=k(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=C(e)?e:A(h.location,e,t);n&&n(r,e),l=u();let i=k(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return P(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function P(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),E(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:j(t);return i=i.replace(/ $/,`%20`),!n&&b.test(i)&&(i=r+i),new URL(i,r)}var F=class{#e=new Map;constructor(e){if(e)for(let[t,n]of e)this.set(t,n)}get(e){if(this.#e.has(e))return this.#e.get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw Error(`No value found for context`)}set(e,t){this.#e.set(e,t)}},I=new Set([`lazy`,`caseSensitive`,`path`,`id`,`index`,`children`,`unstable_validateParams`]);function L(e){return I.has(e)}var R=new Set([`lazy`,`caseSensitive`,`path`,`id`,`index`,`middleware`,`children`,`unstable_validateParams`]);function ee(e){return R.has(e)}function te(e){return e.index===!0}function ne(e){let t={};return e.Component&&Object.assign(t,{element:_.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:_.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:_.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function re(e,t=ne,n=[],r={},i=!1){return e.map((e,a)=>{let o=[...n,String(a)],s=typeof e.id==`string`?e.id:o.join(`-`);if(E(e.index!==!0||!e.children,`Cannot specify children on an index route`),E(i||!r[s],`Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`),te(e)){let n={...e,id:s};return r[s]=ie(n,t(n)),n}{let n={...e,id:s,children:void 0};return r[s]=ie(n,t(n)),e.children&&(n.children=re(e.children,t,o,r,i)),n}})}function ie(e,t){return Object.assign(e,{...t,...typeof t.lazy==`object`&&t.lazy!=null?{lazy:{...e.lazy,...t.lazy}}:{}})}function z(e,t,n=`/`){return ae(e,t,n,!1)}function ae(e,t,n,r,i){let a=Te((typeof t==`string`?M(t):t).pathname||`/`,n);if(a==null)return null;let o=i??se(e),s=null,c=we(a);for(let e=0;s==null&&e<o.length;++e)s=be(o[e],c,r);return s}function oe(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,loaderData:t[n.id],handle:n.handle}}function se(e){let t=ce(e);return ue(t),t}function ce(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;E(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Fe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(E(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ce(e.children,t,u,l,o)),(e.path!=null||e.index)&&t.push({path:l,score:ve(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Ce(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of le(e.path))a(e,t,!0,n)}),t}function le(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=le(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ue(e){e.sort((e,t)=>e.score===t.score?ye(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var B=/^:[\w-]+$/,V=/^:[\w-]+/,de=3.5,fe=3,pe=2,me=1,he=10,ge=-2,_e=e=>e===`*`;function ve(e,t){let n=e.split(`/`),r=n.length;return n.some(_e)&&(r+=ge),t&&(r+=pe),n.filter(e=>!_e(e)).reduce((e,t)=>e+(B.test(t)?fe:V.test(t)?de:t===``?me:he),r)}function ye(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function be(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Se(u,l,s.matcher,s.compiledParams):xe(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Fe([a,d.pathname]),pathnameBase:Le(Fe([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Fe([a,d.pathnameBase]))}return o}function xe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ce(e.path,e.caseSensitive,e.end);return Se(e,t,n,r)}function Se(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=Ie(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=Ie(a.slice(0,a.length-e.length),1)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ce(e,t=!1,n=!0){D(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(?=\/|$|\()/g,`(?:/$1)?`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function we(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return D(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Te(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ee({basename:e,pathname:t}){return t===`/`?e:Fe([e,t])}var De=e=>y.test(e);function Oe(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?M(e):e,a;return n?(n=Pe(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?ke(n.substring(1),`/`):ke(n,t)):a=t,{pathname:a,search:Re(r),hash:ze(i)}}function ke(e,t){let n=Ie(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ae(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function je(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Me(e){let t=je(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ne(e,t,n,r=!1){let i;typeof e==`string`?i=M(e):(i={...e},E(!i.pathname||!i.pathname.includes(`?`),Ae(`?`,`pathname`,`search`,i)),E(!i.pathname||!i.pathname.includes(`#`),Ae(`#`,`pathname`,`hash`,i)),E(!i.search||!i.search.includes(`#`),Ae(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Oe(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Pe=e=>e.replace(/[\\/]{2,}/g,`/`),Fe=e=>Pe(e.join(`/`));function Ie(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var Le=e=>Ie(e).replace(/^\/*/,`/`),Re=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,ze=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Be=[`EvalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`,`URIError`],Ve=class{status;statusText;data;error;internal;constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function He(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ue(e){return Fe(e.map(e=>e.route.path).filter(Boolean))||`/`}function We(e,t){let n=new URL(typeof e==`string`||e instanceof URL?e:e.url),r=typeof t==`string`?M(t):t;if(n.pathname=r.pathname||`/`,r.search){let e=new URLSearchParams(r.search),t=e.getAll(`index`);e.delete(`index`);for(let n of t.filter(Boolean))e.append(`index`,n);let i=e.toString();n.search=i?`?${i}`:``}else n.search=``;return n.hash=r.hash||``,n}var Ge=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ke(e,t){let n=e;if(typeof n!=`string`||!y.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ge)try{let e=new URL(window.location.href),r=b.test(n)?new URL(x(n,e.protocol)):new URL(n),a=Te(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{D(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}var qe=Symbol(`Uninstrumented`),Je=new WeakMap;function Ye(e,t){let n={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};e.forEach(e=>e({id:t.id,index:t.index,path:t.path,instrument(e){e.lazy!=null&&n.lazy.push(e.lazy),e[`lazy.loader`]!=null&&n[`lazy.loader`].push(e[`lazy.loader`]),e[`lazy.action`]!=null&&n[`lazy.action`].push(e[`lazy.action`]),e[`lazy.middleware`]!=null&&n[`lazy.middleware`].push(e[`lazy.middleware`]),e.middleware!=null&&n.middleware.push(e.middleware),e.loader!=null&&n.loader.push(e.loader),e.action!=null&&n.action.push(e.action)}}));let r={};if(typeof t.lazy==`function`&&n.lazy.length>0){let e=t.lazy;r.lazy=async(...t)=>tt(await nt(n.lazy,void 0,()=>e(...t),rt))}if(typeof t.lazy==`object`){let e=t.lazy;if(typeof e.middleware==`function`&&n[`lazy.middleware`].length>0){let t=e.middleware;r.lazy=Object.assign(r.lazy||{},{middleware:async(...e)=>tt(await nt(n[`lazy.middleware`],void 0,()=>t(...e),rt))})}if(typeof e.loader==`function`&&n[`lazy.loader`].length>0){let t=e.loader;r.lazy=Object.assign(r.lazy||{},{loader:async(...e)=>tt(await nt(n[`lazy.loader`],void 0,()=>t(...e),rt))})}if(typeof e.action==`function`&&n[`lazy.action`].length>0){let t=e.action;r.lazy=Object.assign(r.lazy||{},{action:async(...e)=>tt(await nt(n[`lazy.action`],void 0,()=>t(...e),rt))})}}if(typeof t.loader==`function`&&n.loader.length>0){let e=Ze(t.loader),i=async(...t)=>tt(await nt(n.loader,it(t[0]),()=>e(...t),rt));e.hydrate===!0&&(i.hydrate=!0),Qe(i,e),r.loader=i}if(typeof t.action==`function`&&n.action.length>0){let e=Ze(t.action),i=async(...t)=>tt(await nt(n.action,it(t[0]),()=>e(...t),rt));Qe(i,e),r.action=i}return t.middleware&&t.middleware.length>0&&n.middleware.length>0&&(r.middleware=t.middleware.map(e=>{let t=Ze(e),r=async(...e)=>tt(await nt(n.middleware,it(e[0]),()=>t(...e),rt));return Qe(r,t),r})),r}function Xe(e,t){let n={navigate:[],fetch:[]};if(t.forEach(e=>e({instrument(e){e.navigate!=null&&n.navigate.push(e.navigate),e.fetch!=null&&n.fetch.push(e.fetch)}})),n.navigate.length>0){let t=Ze(e.navigate),r=async(...r)=>{let[i,a]=r,o,s={to:typeof i==`number`||typeof i==`string`?i:i?j(i):`.`,...at(e,a??{})};return tt(await nt(n.navigate,s,async()=>{if(typeof i==`number`)return await t(...r);let n=$e(e,e=>{o=e});try{return await t(...r)}finally{n()}},e=>({...rt(e),meta:o})))};Qe(r,t),e.navigate=r}if(n.fetch.length>0){let t=Ze(e.fetch),r=async(...r)=>{let[i,a,o,s]=r,c;return tt(await nt(n.fetch,{href:o??`.`,fetcherKey:i,...at(e,s??{})},async()=>{let n=$e(e,e=>{c=e});try{return await t(...r)}finally{n()}},e=>({...rt(e),meta:c})))};Qe(r,t),e.fetch=r}return e}function Ze(e){return e[qe]??e}function Qe(e,t){e[qe]=t}function $e(e,t){return Je.set(e,t),()=>{Je.get(e)===t&&Je.delete(e)}}function et(e){let t=Je.get(e);return Je.delete(e),t}function tt(e){if(e.type===`error`)throw e.value;return e.value}async function nt(e,t,n,r,i={result:null,innerResult:null},a=e.length-1){let o=e[a];if(o){let s,c=async()=>(s?console.error(`You cannot call instrumented handlers more than once`):s=nt(e,t,n,r,i,a-1),await s,E(i.innerResult,`Expected an inner result`),i.innerResult);try{await o(c,t)}catch(e){console.error(`An instrumentation function threw an error:`,e)}s||await c(),await s}else{try{i.result={type:`success`,value:await n()}}catch(e){i.result={type:`error`,value:e}}i.innerResult=r(i.result,t)}return i.result?i.result:(i.result={type:`error`,value:Error(`No result assigned in instrumentation chain.`)},i.innerResult=r(i.result,t),i.result)}function rt(e){return e.type===`error`&&e.value instanceof Error?{status:`error`,error:e.value}:{status:`success`,error:void 0}}function it(e){let{request:t,context:n,params:r}=e;return{...e,request:ot(t),params:{...r},context:st(n)}}function at(e,t){return{currentUrl:j(e.state.location),...`formMethod`in t?{formMethod:t.formMethod}:{},...`formEncType`in t?{formEncType:t.formEncType}:{},...`formData`in t?{formData:t.formData}:{},...`body`in t?{body:t.body}:{}}}function ot(e){return{method:e.method,url:e.url,headers:{get:(...t)=>e.headers.get(...t)}}}function st(e){return{get:t=>e.get(t)}}var ct=class{#e=[];#t=[];#n;constructor(e){this.#n=e}update(e){this.#e=e,this.#t=se(e)}match(e,t=!1){return ae(this.#e,e,this.#n,t,this.#t)}},lt=new URL(`http://localhost`);function ut(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),lt)}catch{return lt}}function dt(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function ft(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function pt(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!dt(i,n),s=!dt(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!ft(e,i)||!dt(i,a)))throw Error(`External navigation is not allowed`)}var mt=[`POST`,`PUT`,`PATCH`,`DELETE`],ht=new Set(mt),gt=[`GET`,...mt],_t=new Set(gt),vt=new Set([301,302,303,307,308]),yt=new Set([307,308]),bt={state:`idle`,location:void 0,matches:void 0,historyAction:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},xt={state:`idle`,data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},St={state:`unblocked`,proceed:void 0,reset:void 0,location:void 0},Ct=`remix-router-transitions`,wt=Symbol(`ResetLoaderData`);function Tt(e,t){return e.unstable_routePatternMatching?(E(void 0,`You must call unstable_preloadRoutePattern() from "react-router/route-pattern" before enabling future.unstable_routePatternMatching.`),new(void 0)(t)):new ct(t)}var Et=class{#e;#t;#n;constructor(e,t){this.#e=e,this.#n=t,this.#n.update(e)}get stableRoutes(){return this.#e}get activeRoutes(){return this.#t??this.#e}get hasHMRRoutes(){return this.#t!=null}setRoutes(e){this.#e=e,this.#t||this.#n.update(e)}setHmrRoutes(e){this.#t=e,this.#n.update(e)}commitHmrRoutes(){this.#t&&(this.#e=this.#t,this.#t=void 0,this.#n.update(this.#e))}};function Dt(e){let t=e.window?e.window:typeof window<`u`?window:void 0,n=t!==void 0&&t.document!==void 0&&t.document.createElement!==void 0;E(e.routes.length>0,`You must provide a non-empty routes array to createRouter`);let r=e.hydrationRouteProperties||[],i=e.mapRouteProperties,a=i||(()=>({}));if(e.instrumentations){let t=e.instrumentations;a=e=>({...i?.(e),...Ye(t.map(e=>e.route).filter(Boolean),e)})}let o={...e.future},s=e.basename||`/`;s.startsWith(`/`)||(s=`/${s}`);let c=Tt(o,s),l={},u=new Et(re(e.routes,a,void 0,l),c),d=e.dataStrategy||Wt,f=null,p=new Set,m=null,h=null,g=null,_=null,v=e.hydrationData!=null,y=c.match(e.history.location),x=!1,S=null,C,w;if(y==null&&!e.patchRoutesOnNavigation){let t=hn(404,{pathname:e.history.location.pathname}),{matches:n,route:r}=mn(u.activeRoutes);C=!0,w=!C,y=n,S={[r.id]:t}}else if(y&&!e.hydrationData&&at(y,e.history.location.pathname).active&&(y=null),!y){C=!1,w=!C,y=[];let t=at(null,e.history.location.pathname);t.active&&t.matches&&(x=!0,y=t.matches)}else if(y.some(e=>e.route.lazy))C=!1,w=!C;else if(!y.some(e=>Mt(e.route)))C=!0,w=!C;else{let t=e.hydrationData?e.hydrationData.loaderData:null,n=e.hydrationData?e.hydrationData.errors:null,r=y;if(n){let e=y.findIndex(e=>n[e.route.id]!==void 0);r=r.slice(0,e+1)}w=!1,C=!0,r.forEach(e=>{let r=Nt(e.route,t,n);w||=r.renderFallback,C&&=!r.shouldLoad})}let T,O={historyAction:e.history.action,location:e.history.location,matches:y,initialized:C,renderFallback:w,navigation:bt,restoreScrollPosition:e.hydrationData==null&&null,preventScrollReset:!1,revalidation:`idle`,loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},k=`POP`,N=null,I=!1,L,R=!1,ee=new Map,te=null,ne=!1,ie=!1,z=new Set,ae=new Map,se=0,ce=-1,le=new Map,ue=new Set,B=new Map,V=new Map,de=new Set,fe=new Map,pe,me=null;function he(){if(f=e.history.listen(({action:t,location:n,delta:r})=>{if(pe){pe(),pe=void 0;return}D(fe.size===0||r!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let i=Qe({currentLocation:O.location,nextLocation:n,historyAction:t});if(i&&r!=null){let t=new Promise(e=>{pe=e});e.history.go(r*-1),Ze(i,{state:`blocked`,location:n,proceed(){Ze(i,{state:`proceeding`,proceed:void 0,reset:void 0,location:n}),t.then(()=>e.history.go(r))},reset(){let e=new Map(O.blockers);e.set(i,St),ve({blockers:e})}}),N?.resolve(),N=null;return}return Se(t,n)}),n){Bn(t,ee);let e=()=>Vn(t,ee);t.addEventListener(`pagehide`,e),te=()=>t.removeEventListener(`pagehide`,e)}return O.initialized||Se(`POP`,O.location,{initialHydration:!0}),T}function ge(){f&&f(),te&&te(),p.clear(),L&&L.abort(),O.fetchers.forEach((e,t)=>Be(O.fetchers,t)),O.blockers.forEach((e,t)=>Je(t))}function _e(e){if(p.add(e),m){let{newErrors:t}=m;m=null,e(O,{deletedFetchers:[],newErrors:t,viewTransitionOpts:void 0,flushSync:!1})}return()=>p.delete(e)}function ve(e,t={}){e.matches&&=e.matches.map(e=>{let t=l[e.route.id],n=e.route;return n.element!==t.element||n.errorElement!==t.errorElement||n.hydrateFallbackElement!==t.hydrateFallbackElement?{...e,route:t}:e}),O={...O,...e};let n=[],r=[];O.fetchers.forEach((e,t)=>{e.state===`idle`&&(de.has(t)?n.push(t):r.push(t))}),de.forEach(e=>{!O.fetchers.has(e)&&!ae.has(e)&&n.push(e)}),p.size===0&&(m={newErrors:e.errors??null}),[...p].forEach(r=>r(O,{deletedFetchers:n,newErrors:e.errors??null,viewTransitionOpts:t.viewTransitionOpts,flushSync:t.flushSync===!0})),n.forEach(e=>Be(O.fetchers,e)),r.forEach(e=>O.fetchers.delete(e))}function ye(t,n,{flushSync:r}={}){let i=O.actionData!=null&&O.navigation.formMethod!=null&&An(O.navigation.formMethod)&&O.navigation.state===`loading`&&t.state?._isRedirect!==!0,a;a=n.actionData?Object.keys(n.actionData).length>0?n.actionData:null:i?O.actionData:null;let o=n.loaderData?dn(O.loaderData,n.loaderData,n.matches||[],n.errors):O.loaderData,s=O.blockers;s.size>0&&!ne&&(s=new Map(s),s.forEach((e,t)=>s.set(t,St)));let c=!ne&&it(t,n.matches||O.matches),l=I===!0||O.navigation.formMethod!=null&&An(O.navigation.formMethod)&&t.state?._isRedirect!==!0;u.commitHmrRoutes(),ne||k===`POP`||(k===`PUSH`?e.history.push(t,t.state):k===`REPLACE`&&e.history.replace(t,t.state));let d;if(k===`POP`&&!ne&&t!==O.location){let e=ee.get(O.location.pathname);e&&e.has(t.pathname)?d={currentLocation:O.location,nextLocation:t}:ee.has(t.pathname)&&(d={currentLocation:t,nextLocation:O.location})}else if(R){let e=ee.get(O.location.pathname);e?e.add(t.pathname):(e=new Set([t.pathname]),ee.set(O.location.pathname,e)),d={currentLocation:O.location,nextLocation:t}}ve({...n,actionData:a,loaderData:o,historyAction:k,location:t,initialized:!0,renderFallback:!1,navigation:bt,revalidation:`idle`,restoreScrollPosition:c,preventScrollReset:l,blockers:s},{viewTransitionOpts:d,flushSync:r===!0}),k=`POP`,I=!1,R=!1,ne=!1,ie=!1,N?.resolve(),N=null,me?.resolve(),me=null}async function be(t,n){if(N?.resolve(),N=null,typeof t==`number`){N||=Hn();let n=N.promise;return e.history.go(t),n}let r=et(T),{path:i,submission:a,error:o}=At(!1,kt(O.location,O.matches,s,t,n?.fromRouteId,n?.relative),n),c;if(n?.mask){let t=typeof n.mask==`string`?M(n.mask):{...O.location.mask,...n.mask};if(c={pathname:t.pathname??``,search:t.search??``,hash:t.hash??``},b.test(c.pathname))throw Error(`External navigation is not allowed`);c.pathname.startsWith(`\\`)&&(c.pathname=c.pathname.replace(/^\\+/,`/`)),pt(typeof n.mask==`string`?n.mask:j(n.mask),j(c),e.history.createURL(`/`),`reject`)}let l=O.location,u=A(l,i,n&&n.state,void 0,c);u={...u,...e.history.encodeLocation(u)},pt(t==null?e.history.createHref(O.location):typeof t==`string`?t:j(t),e.history.createHref(u.mask||u),e.history.createURL(`/`),`reject`);let d=n&&n.replace!=null?n.replace:void 0,f=`PUSH`;d===!0?f=`REPLACE`:d===!1||a!=null&&An(a.formMethod)&&a.formAction===O.location.pathname+O.location.search&&(f=`REPLACE`);let p=n&&`preventScrollReset`in n?n.preventScrollReset===!0:void 0,m=(n&&n.flushSync)===!0,h=Qe({currentLocation:l,nextLocation:u,historyAction:f});if(h){Ze(h,{state:`blocked`,location:u,proceed(){Ze(h,{state:`proceeding`,proceed:void 0,reset:void 0,location:u}),be(t,n)},reset(){let e=new Map(O.blockers);e.set(h,St),ve({blockers:e})}});return}await Se(f,u,{submission:a,pendingError:o,preventScrollReset:p,replace:n&&n.replace,enableViewTransition:n&&n.viewTransition,flushSync:m,callSiteDefaultShouldRevalidate:n&&n.defaultShouldRevalidate,instrumentationNavigateMetaReceiver:r})}function xe(){me||=Hn(),Fe(),ve({revalidation:`loading`});let e=me.promise;return O.navigation.state===`submitting`?e:O.navigation.state===`idle`?(Se(O.historyAction,O.location,{startUninterruptedRevalidation:!0}),e):(Se(k||O.historyAction,O.navigation.location,{overrideNavigation:O.navigation,enableViewTransition:R===!0}),e)}async function Se(t,n,r){L&&L.abort(),L=null,k=t,ne=(r&&r.startUninterruptedRevalidation)===!0,rt(O.location,O.matches),I=(r&&r.preventScrollReset)===!0,R=(r&&r.enableViewTransition)===!0;let i=r?.initialHydration&&O.matches&&O.matches.length>0&&!x?O.matches:c.match(n),a=(r&&r.flushSync)===!0;if(i&&O.initialized&&!ie&&vn(O.location,n)&&!(r&&r.submission&&An(r.submission.formMethod))){ye(n,{matches:i},{flushSync:a});return}let o=at(i,n.pathname);if(o.active&&o.matches&&(i=o.matches),r?.instrumentationNavigateMetaReceiver){let t=Nn(e.history,n,i);r.instrumentationNavigateMetaReceiver(t)}if(!i){let{error:e,notFoundMatches:t,route:r}=$e(n.pathname);ye(n,{matches:t,loaderData:{},errors:{[r.id]:e}},{flushSync:a});return}let s=r&&r.overrideNavigation?{...r.overrideNavigation,matches:i,historyAction:t}:void 0;L=new AbortController;let l=on(e.history,n,L.signal,r&&r.submission),u=e.getContext?await e.getContext():new F,d;if(r&&r.pendingError)d=[pn(i).route.id,{type:`error`,error:r.pendingError}];else if(r&&r.submission&&An(r.submission.formMethod)){let c=await Ce(l,n,r.submission,i,t,u,o.active,r&&r.initialHydration===!0,{replace:r.replace,flushSync:a});if(c.shortCircuited)return;if(c.pendingActionResult){let[e,t]=c.pendingActionResult;if(Cn(t)&&He(t.error)&&t.error.status===404){L=null,ye(n,{matches:c.matches,loaderData:{},errors:{[e]:t.error}});return}}i=c.matches||i,d=c.pendingActionResult,s=Fn(n,i,t,r.submission),a=!1,o.active=!1,l=on(e.history,l.url,l.signal)}let{shortCircuited:f,matches:p,loaderData:m,errors:h,workingFetchers:g}=await we(l,n,i,t,u,o.active,s,r&&r.submission,r&&r.fetcherSubmission,r&&r.replace,r&&r.initialHydration===!0,a,d,r&&r.callSiteDefaultShouldRevalidate);f||(L=null,ye(n,{matches:p||i,...fn(d),loaderData:m,errors:h,...g?{fetchers:g}:{}}))}async function Ce(t,n,i,o,c,d,f,p,m={}){if(Fe(),ve({navigation:In(n,o,c,i)},{flushSync:m.flushSync===!0}),f){let e=await ot(o,n.pathname,t.signal);if(e.type===`aborted`)return{shortCircuited:!0};if(e.type===`error`){if(e.partialMatches.length===0){let{matches:t,route:n}=mn(u.activeRoutes);return{matches:t,pendingActionResult:[n.id,{type:`error`,error:e.error}]}}let t=pn(e.partialMatches).route.id;return{matches:e.partialMatches,pendingActionResult:[t,{type:`error`,error:e.error}]}}if(e.matches)o=e.matches;else{let{notFoundMatches:e,error:t,route:r}=$e(n.pathname);return{matches:e,pendingActionResult:[r.id,{type:`error`,error:t}]}}}let h,g=Mn(o,n);if(!g.route.action&&!g.route.lazy)h={type:`error`,error:hn(405,{method:t.method,pathname:n.pathname,routeId:g.route.id})};else{let e=await Ne(t,n,Xt(a,l,t,n,o,g,p?[]:r,d),d,null);if(h=e[g.route.id],!h){for(let t of o)if(e[t.route.id]){h=e[t.route.id];break}}if(t.signal.aborted)return{shortCircuited:!0}}if(wn(h)){let n;return n=m&&m.replace!=null?m.replace:an(h.response.headers.get(`Location`),new URL(t.url),s,e.history)===O.location.pathname+O.location.search,await Me(t,h,!0,{submission:i,replace:n}),{shortCircuited:!0}}if(Cn(h)){let e=pn(o,g.route.id);return(m&&m.replace)!==!0&&(k=`PUSH`),{matches:o,pendingActionResult:[e.route.id,h,g.route.id]}}return{matches:o,pendingActionResult:[g.route.id,h]}}async function we(t,n,i,o,s,d,f,p,m,h,g,_,v,y){let b=f||Fn(n,i,o,p),x=p||m||Pn(b),S=!ne&&!g;if(d){if(S){let e=Ee(v);ve({navigation:b,...e===void 0?{}:{actionData:e}},{flushSync:_})}let e=await ot(i,n.pathname,t.signal);if(e.type===`aborted`)return{shortCircuited:!0};if(e.type===`error`){if(e.partialMatches.length===0){let{matches:t,route:n}=mn(u.activeRoutes);return{matches:t,loaderData:{},errors:{[n.id]:e.error}}}let t=pn(e.partialMatches).route.id;return{matches:e.partialMatches,loaderData:{},errors:{[t]:e.error}}}if(e.matches)i=e.matches;else{let{error:e,notFoundMatches:t,route:r}=$e(n.pathname);return{matches:t,loaderData:{},errors:{[r.id]:e}}}}let{dsMatches:C,revalidatingFetchers:w}=jt(t,s,a,l,e.history,O,i,x,n,g?[]:r,g===!0,ie,z,de,B,ue,c,v,y);if(ce=++se,!e.dataStrategy&&!C.some(e=>e.shouldLoad)&&!C.some(e=>e.route.middleware&&e.route.middleware.length>0)&&w.length===0){let e=new Map(O.fetchers),t=Ge(e);return ye(n,{matches:i,loaderData:{},errors:v&&Cn(v[1])?{[v[0]]:v[1].error}:null,...fn(v),...t?{fetchers:e}:{}},{flushSync:_}),{shortCircuited:!0}}if(S){let e={};if(!d){e.navigation=b;let t=Ee(v);t!==void 0&&(e.actionData=t)}w.length>0&&(e.fetchers=Oe(w)),ve(e,{flushSync:_})}w.forEach(e=>{Ue(e.key),e.controller&&ae.set(e.key,e.controller)});let T=()=>w.forEach(e=>Ue(e.key));L&&L.signal.addEventListener(`abort`,T);let{loaderResults:E,fetcherResults:D}=await Pe(C,w,t,n,s);if(t.signal.aborted)return{shortCircuited:!0};L&&L.signal.removeEventListener(`abort`,T),w.forEach(e=>ae.delete(e.key));let k=gn(E);if(k)return await Me(t,k.result,!0,{replace:h}),{shortCircuited:!0};if(k=gn(D),k)return ue.add(k.key),await Me(t,k.result,!0,{replace:h}),{shortCircuited:!0};let A=new Map(O.fetchers),{loaderData:j,errors:M}=un(O,i,E,v,w,D,A);g&&O.errors&&(M={...O.errors,...M});let N=Ge(A),P=Ke(ce,A),F=N||P||w.length>0;return{matches:i,loaderData:j,errors:M,...F?{workingFetchers:A}:{}}}function Ee(e){if(e&&!Cn(e[1]))return{[e[0]]:e[1].data};if(O.actionData)return Object.keys(O.actionData).length===0?null:O.actionData}function Oe(e){let t=new Map(O.fetchers);return e.forEach(e=>{let n=t.get(e.key),r=Ln(void 0,n?n.data:void 0);t.set(e.key,r)}),t}async function ke(t,n,r,i){Ue(t);let a=(i&&i.flushSync)===!0,o=et(T),l=kt(O.location,O.matches,s,r,n,i?.relative),u=c.match(l),d=at(u,l);if(d.active&&d.matches&&(u=d.matches),o&&o(Nn(e.history,l,u)),!u){Le(t,n,hn(404,{pathname:l}),{flushSync:a});return}let{path:f,submission:p,error:m}=At(!0,l,i);if(m){Le(t,n,m,{flushSync:a});return}let h=e.getContext?await e.getContext():new F,g=(i&&i.preventScrollReset)===!0;if(p&&An(p.formMethod)){await Ae(t,n,f,u,h,d.active,a,g,p,i&&i.defaultShouldRevalidate);return}let _={routeId:n,path:f,isDiscovering:d.active};B.set(t,_),await je(t,_,u,h,a,g,p)}async function Ae(t,n,i,o,s,u,d,f,p,m){Fe(),B.delete(t),Ie(t,Rn(p,O.fetchers.get(t)),{flushSync:d});let h=new AbortController,g=on(e.history,i,h.signal,p);if(u){let e=await ot(o,new URL(g.url).pathname,g.signal,t);if(e.type===`aborted`)return;if(e.type===`error`){Le(t,n,e.error,{flushSync:d});return}if(e.matches)o=e.matches;else{Le(t,n,hn(404,{pathname:i}),{flushSync:d});return}}let _=Mn(o,i);if(!_.route.action&&!_.route.lazy){Le(t,n,hn(405,{method:p.formMethod,pathname:i,routeId:n}),{flushSync:d});return}ae.set(t,h);let v=se,y=Xt(a,l,g,i,o,_,r,s),b=await Ne(g,i,y,s,t),x=b[_.route.id];if(!x){for(let e of y)if(b[e.route.id]){x=b[e.route.id];break}}if(g.signal.aborted){ae.get(t)===h&&ae.delete(t);return}if(de.has(t)){if(wn(x)||Cn(x)){Ie(t,zn(void 0));return}}else{if(wn(x)){if(ae.delete(t),ce>v){Ie(t,zn(void 0));return}return ue.add(t),Ie(t,Ln(p)),Me(g,x,!1,{fetcherSubmission:p,preventScrollReset:f})}if(Cn(x)){Le(t,n,x.error);return}}let S=O.navigation.location||O.location,C=on(e.history,S,h.signal),w=O.navigation.state===`idle`?O.matches:c.match(O.navigation.location);E(w,`Didn't find any matches after fetcher action`);let T=++se;le.set(t,T);let{dsMatches:D,revalidatingFetchers:A}=jt(C,s,a,l,e.history,O,w,p,S,r,!1,ie,z,de,B,ue,c,[_.route.id,x],m),j=Ln(p,x.data),M=new Map(O.fetchers);M.set(t,j),A.filter(e=>e.key!==t).forEach(e=>{let t=e.key,n=M.get(t),r=Ln(void 0,n?n.data:void 0);M.set(t,r),Ue(t),e.controller&&ae.set(t,e.controller)}),ve({fetchers:M});let N=()=>A.forEach(e=>Ue(e.key));h.signal.addEventListener(`abort`,N);let{loaderResults:P,fetcherResults:F}=await Pe(D,A,C,S,s);if(h.signal.aborted){le.get(t)===T&&le.delete(t);return}h.signal.removeEventListener(`abort`,N),le.delete(t),ae.delete(t),A.forEach(e=>ae.delete(e.key));let I=O.fetchers.has(t),R=e=>{if(!I)return e;let n=new Map(e.fetchers);return n.set(t,zn(x.data)),{...e,fetchers:n}},ee=gn(P);if(ee)return O=R(O),Me(C,ee.result,!1,{preventScrollReset:f});if(ee=gn(F),ee)return ue.add(ee.key),O=R(O),Me(C,ee.result,!1,{preventScrollReset:f});let te=new Map(O.fetchers);I&&te.set(t,zn(x.data));let{loaderData:ne,errors:re}=un(O,w,P,void 0,A,F,te);Ke(T,te),O.navigation.state===`loading`&&T>ce?(E(k,`Expected pending action`),L&&L.abort(),ye(O.navigation.location,{matches:w,loaderData:ne,errors:re,fetchers:te})):(ve({errors:re,loaderData:dn(O.loaderData,ne,w,re),fetchers:te}),ie=!1)}async function je(t,n,i,o,s,c,u){let{routeId:d,path:f}=n,p=O.fetchers.get(t);Ie(t,Ln(u,p?p.data:void 0),{flushSync:s});let m=new AbortController,h=on(e.history,f,m.signal);if(n.isDiscovering){let e=await ot(i,new URL(h.url).pathname,h.signal,t);if(e.type===`aborted`)return;if(e.type===`error`){Le(t,d,e.error,{flushSync:s});return}if(e.matches)i=e.matches,n.isDiscovering=!1;else{Le(t,d,hn(404,{pathname:f}),{flushSync:s});return}}let g=Mn(i,f);ae.set(t,m);let _=se,v=await Ne(h,f,Xt(a,l,h,f,i,g,r,o),o,t),y=v[g.route.id];if(!y){for(let e of i)if(v[e.route.id]){y=v[e.route.id];break}}if(ae.get(t)===m&&ae.delete(t),!h.signal.aborted){if(de.has(t)){Ie(t,zn(void 0));return}if(wn(y)){if(ce>_){Ie(t,zn(void 0));return}ue.add(t),await Me(h,y,!1,{preventScrollReset:c});return}if(Cn(y)){Le(t,d,y.error);return}Ie(t,zn(y.data))}}async function Me(r,i,a,{submission:o,fetcherSubmission:c,preventScrollReset:l,replace:u}={}){a||(N?.resolve(),N=null),i.response.headers.has(`X-Remix-Revalidate`)&&(ie=!0);let d=i.response.headers.get(`Location`);E(d,`Expected a Location header on the redirect Response`);let f=d,p=new URL(r.url);d=an(d,p,s,e.history),pt(f,d,p,`allow-explicit`);let m=A(O.location,d,{_isRedirect:!0});if(n){let e=!1;if(i.response.headers.has(`X-Remix-Reload-Document`))e=!0;else if(De(d)){let n=P(t,d,!0);e=n.origin!==t.location.origin||Te(n.pathname,s)==null}if(e){u?t.location.replace(d):t.location.assign(d);return}}L=null;let h=u===!0||i.response.headers.has(`X-Remix-Replace`)?`REPLACE`:`PUSH`,{formMethod:g,formAction:_,formEncType:v}=O.navigation;!o&&!c&&g&&_&&v&&(o=Pn(O.navigation));let y=o||c;yt.has(i.response.status)&&y&&An(y.formMethod)?await Se(h,m,{submission:{...y,formAction:d},preventScrollReset:l||I,enableViewTransition:a?R:void 0}):await Se(h,m,{overrideNavigation:Fn(m,[],h,o),fetcherSubmission:c,preventScrollReset:l||I,enableViewTransition:a?R:void 0})}async function Ne(e,t,n,r,i){let a,o={};try{a=await Zt(d,e,t,n,i,r,!1)}catch(e){return n.filter(e=>e.shouldLoad).forEach(t=>{o[t.route.id]={type:`error`,error:e}}),o}if(e.signal.aborted)return o;if(!An(e.method))for(let e of n){if(a[e.route.id]?.type===`error`)break;!a.hasOwnProperty(e.route.id)&&!O.loaderData.hasOwnProperty(e.route.id)&&(!O.errors||!O.errors.hasOwnProperty(e.route.id))&&e.shouldCallHandler()&&(a[e.route.id]={type:`error`,result:Error(`No result returned from dataStrategy for route ${e.route.id}`)})}for(let[t,r]of Object.entries(a))if(Sn(r)){let i=r.result;o[t]={type:`redirect`,response:tn(i,e,t,n,s)}}else o[t]=await en(r);return o}async function Pe(e,t,n,r,i){let a=Ne(n,r,e,i,null),o=Promise.all(t.map(async e=>{if(e.matches&&e.match&&e.request&&e.controller){let t=(await Ne(e.request,e.path,e.matches,i,e.key))[e.match.route.id];return{[e.key]:t}}return Promise.resolve({[e.key]:{type:`error`,error:hn(404,{pathname:e.path})}})}));return{loaderResults:await a,fetcherResults:(await o).reduce((e,t)=>Object.assign(e,t),{})}}function Fe(){ie=!0,B.forEach((e,t)=>{ae.has(t)&&z.add(t),Ue(t)})}function Ie(e,t,n={}){let r=new Map(O.fetchers);r.set(e,t),ve({fetchers:r},{flushSync:(n&&n.flushSync)===!0})}function Le(e,t,n,r={}){let i=pn(O.matches,t),a=new Map(O.fetchers);Be(a,e),ve({errors:{[i.route.id]:n},fetchers:a},{flushSync:(r&&r.flushSync)===!0})}function Re(e){return V.set(e,(V.get(e)||0)+1),de.has(e)&&de.delete(e),O.fetchers.get(e)||xt}function ze(e,t){Ue(e,t?.reason),Ie(e,zn(null))}function Be(e,t){let n=O.fetchers.get(t);ae.has(t)&&!(n&&n.state===`loading`&&le.has(t))&&Ue(t),B.delete(t),le.delete(t),ue.delete(t),de.delete(t),z.delete(t),e.delete(t)}function Ve(e){let t=(V.get(e)||0)-1;t<=0?(V.delete(e),de.add(e)):V.set(e,t),ve({fetchers:new Map(O.fetchers)})}function Ue(e,t){let n=ae.get(e);n&&(n.abort(t),ae.delete(e))}function We(e,t){for(let n of e){let e=t.get(n);E(e,`Expected fetcher: ${n}`);let r=zn(e.data);t.set(n,r)}}function Ge(e){let t=[],n=!1;for(let r of ue){let i=e.get(r);E(i,`Expected fetcher: ${r}`),i.state===`loading`&&(ue.delete(r),t.push(r),n=!0)}return We(t,e),n}function Ke(e,t){let n=[];for(let[r,i]of le)if(i<e){let e=t.get(r);E(e,`Expected fetcher: ${r}`),e.state===`loading`&&(Ue(r),le.delete(r),n.push(r))}return We(n,t),n.length>0}function qe(e,t){let n=O.blockers.get(e)||St;return fe.get(e)!==t&&fe.set(e,t),n}function Je(e){O.blockers.delete(e),fe.delete(e)}function Ze(e,t){let n=O.blockers.get(e)||St;E(n.state===`unblocked`&&t.state===`blocked`||n.state===`blocked`&&t.state===`blocked`||n.state===`blocked`&&t.state===`proceeding`||n.state===`blocked`&&t.state===`unblocked`||n.state===`proceeding`&&t.state===`unblocked`,`Invalid blocker state transition: ${n.state} -> ${t.state}`);let r=new Map(O.blockers);r.set(e,t),ve({blockers:r})}function Qe({currentLocation:e,nextLocation:t,historyAction:n}){if(fe.size===0)return;fe.size>1&&D(!1,`A router only supports one blocker at a time`);let r=Array.from(fe.entries()),[i,a]=r[r.length-1],o=O.blockers.get(i);if(!(o&&o.state===`proceeding`)&&a({currentLocation:e,nextLocation:t,historyAction:n}))return i}function $e(e){let t=hn(404,{pathname:e}),n=u.activeRoutes,{matches:r,route:i}=mn(n);return{notFoundMatches:r,route:i,error:t}}function tt(e,t,n){if(h=e,_=t,g=n||null,!v&&O.navigation===bt){v=!0;let e=it(O.location,O.matches);e!=null&&ve({restoreScrollPosition:e})}return()=>{h=null,_=null,g=null}}function nt(e,t){return g&&g(e,t.map(e=>oe(e,O.loaderData)))||e.key}function rt(e,t){if(h&&_){let n=nt(e,t);h[n]=_()}}function it(e,t){if(h){let n=nt(e,t),r=h[n];if(typeof r==`number`)return r}return null}function at(t,n){if(e.patchRoutesOnNavigation){if(!t)return{active:!0,matches:c.match(n,!0)||[]};if(Object.keys(t[0].params).length>0)return{active:!0,matches:c.match(n,!0)}}return{active:!1,matches:null}}async function ot(t,n,r,i){if(!e.patchRoutesOnNavigation)return{type:`success`,matches:t};let o=t;for(;;){let t=l;try{await e.patchRoutesOnNavigation({signal:r,path:n,matches:o,fetcherKey:i,patch:(e,n)=>{r.aborted||Lt(e,n,u,t,a,!1)}})}catch(e){return{type:`error`,error:e,partialMatches:o}}if(r.aborted)return{type:`aborted`};let s=c.match(n),d=null;if(s&&(Object.keys(s[0].params).length===0||(d=c.match(n,!0),!(d&&o.length<d.length&&st(o,d.slice(0,o.length))))))return{type:`success`,matches:s};if(d||=c.match(n,!0),!d||st(o,d))return{type:`success`,matches:null};o=d}}function st(e,t){return e.length===t.length&&e.every((e,n)=>e.route.id===t[n].route.id)}function ct(e){l={},u.setHmrRoutes(re(e,a,void 0,l))}function lt(e,t,n=!1){Lt(e,t,u,l,a,n),u.hasHMRRoutes||ve({})}return T={get basename(){return s},get future(){return o},get state(){return O},get routes(){return u.stableRoutes},match(e){return c.match(e)},get manifest(){return l},get window(){return t},initialize:he,subscribe:_e,enableScrollRestoration:tt,navigate:be,fetch:ke,revalidate:xe,createHref:t=>e.history.createHref(t),createURL:t=>e.history.createURL(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:Re,resetFetcher:ze,deleteFetcher:Ve,dispose:ge,getBlocker:qe,deleteBlocker:Je,patchRoutes:lt,_internalFetchControllers:ae,_internalSetRoutes:ct,_internalSetStateDoNotUseOrYouWillBreakYourApp(e){ve(e)}},e.instrumentations&&(T=Xe(T,e.instrumentations.map(e=>e.router).filter(Boolean))),T}function Ot(e){return e!=null&&(`formData`in e&&e.formData!=null||`body`in e&&e.body!==void 0)}function kt(e,t,n,r,i,a){let o,s;if(i){o=[];for(let e of t)if(o.push(e),e.route.id===i){s=e;break}}else o=t,s=t[t.length-1];let c=Ne(r||`.`,Me(o),Te(e.pathname,n)||e.pathname,a===`path`);if(r??(c.search=e.search,c.hash=e.hash),(r==null||r===``||r===`.`)&&s){let e=jn(c.search);if(s.route.index&&!e)c.search=c.search?c.search.replace(/^\?/,`?index&`):`?index`;else if(!s.route.index&&e){let e=new URLSearchParams(c.search),t=e.getAll(`index`);e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();c.search=n?`?${n}`:``}}return n!==`/`&&(c.pathname=Ee({basename:n,pathname:c.pathname})),j(c)}function At(e,t,n){if(!n||!Ot(n))return{path:t};if(n.formMethod&&!kn(n.formMethod))return{path:t,error:hn(405,{method:n.formMethod})};let r=()=>({path:t,error:hn(400,{type:`invalid-body`})}),i=(n.formMethod||`get`).toUpperCase(),a=_n(t);if(n.body!==void 0){if(n.formEncType===`text/plain`){if(!An(i))return r();let e=typeof n.body==`string`?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((e,[t,n])=>`${e}${t}=${n}\n`,``):String(n.body);return{path:t,submission:{formMethod:i,formAction:a,formEncType:n.formEncType,formData:void 0,json:void 0,text:e}}}if(n.formEncType===`application/json`){if(!An(i))return r();try{let e=typeof n.body==`string`?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:i,formAction:a,formEncType:n.formEncType,formData:void 0,json:e,text:void 0}}}catch{return r()}}}E(typeof FormData==`function`,`FormData is not available in this environment`);let o,s;if(n.formData)o=sn(n.formData),s=n.formData;else if(n.body instanceof FormData)o=sn(n.body),s=n.body;else if(n.body instanceof URLSearchParams)o=n.body,s=cn(o);else if(n.body==null)o=new URLSearchParams,s=new FormData;else try{o=new URLSearchParams(n.body),s=cn(o)}catch{return r()}let c={formMethod:i,formAction:a,formEncType:n&&n.formEncType||`application/x-www-form-urlencoded`,formData:s,json:void 0,text:void 0};if(An(c.formMethod))return{path:t,submission:c};let l=M(t);return e&&l.search&&jn(l.search)&&o.append(`index`,``),l.search=`?${o}`,{path:j(l),submission:c}}function jt(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){let y=_?Cn(_[1])?_[1].error:_[1].data:void 0,b=i.createURL(a.location),x=i.createURL(c),S;if(u&&a.errors){let e=Object.keys(a.errors)[0];S=o.findIndex(t=>t.route.id===e)}else if(_&&Cn(_[1])){let e=_[0];S=o.findIndex(t=>t.route.id===e)-1}let C=_?_[1].statusCode:void 0,w=C&&C>=400,T={currentUrl:b,currentParams:a.matches[0]?.params||{},nextUrl:x,nextParams:o[0].params,...s,actionResult:y,actionStatus:C},E=Ue(o),D=o.map((i,o)=>{let{route:s}=i,f=null;if(S!=null&&o>S)f=!1;else if(s.lazy)f=!0;else if(!Mt(s))f=!1;else if(u){let{shouldLoad:e}=Nt(s,a.loaderData,a.errors);f=e}else Pt(a.loaderData,a.matches[o],i)&&(f=!0);if(f!==null)return Yt(n,r,e,c,E,i,l,t,f);let p=!1;typeof v==`boolean`?p=v:w?p=!1:d||b.pathname+b.search===x.pathname+x.search?p=!0:b.search===x.search?Ft(a.matches[o],i)&&(p=!0):p=!0;let m={...T,defaultShouldRevalidate:p};return Yt(n,r,e,c,E,i,l,t,It(i,m),m,v)}),O=[];return m.forEach((e,s)=>{if(u||!o.some(t=>t.route.id===e.routeId)||p.has(s)||e.isDiscovering)return;let c=a.fetchers.get(s),m=c&&c.state!==`idle`&&c.data===void 0,_=g.match(e.path);if(!_){O.push({key:s,routeId:e.routeId,path:e.path,matches:null,match:null,request:null,controller:null});return}if(h.has(s))return;let y=Mn(_,e.path),b=new AbortController,x=on(i,e.path,b.signal),S=null;if(f.has(s))f.delete(s),S=Xt(n,r,x,e.path,_,y,l,t);else if(m)d&&(S=Xt(n,r,x,e.path,_,y,l,t));else{let i;i=typeof v==`boolean`?v:!w&&d;let a={...T,defaultShouldRevalidate:i};It(y,a)&&(S=Xt(n,r,x,e.path,_,y,l,t,a))}S&&O.push({key:s,routeId:e.routeId,path:e.path,matches:S,match:y,request:x,controller:b})}),{dsMatches:D,revalidatingFetchers:O}}function Mt(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}function Nt(e,t,n){if(e.lazy)return{shouldLoad:!0,renderFallback:!0};if(!Mt(e))return{shouldLoad:!1,renderFallback:!1};let r=t!=null&&e.id in t,i=n!=null&&n[e.id]!==void 0;if(!r&&i)return{shouldLoad:!1,renderFallback:!1};if(typeof e.loader==`function`&&e.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!r};let a=!r&&!i;return{shouldLoad:a,renderFallback:a}}function Pt(e,t,n){let r=!t||n.route.id!==t.route.id,i=!e.hasOwnProperty(n.route.id);return r||i}function Ft(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith(`*`)&&e.params[`*`]!==t.params[`*`]}function It(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n==`boolean`)return n}return t.defaultShouldRevalidate}function Lt(e,t,n,r,i,a){let o;if(e){let t=r[e];E(t,`No route found to patch children into: routeId = ${e}`),t.children||=[],o=t.children}else o=n.activeRoutes;let s=[],c=[];if(t.forEach(e=>{let t=o.find(t=>Rt(e,t));t?c.push({existingRoute:t,newRoute:e}):s.push(e)}),s.length>0){let t=re(s,i,[e||`_`,`patch`,String(o?.length||`0`)],r);o.push(...t)}if(a&&c.length>0)for(let e=0;e<c.length;e++){let{existingRoute:t,newRoute:n}=c[e],r=t,[a]=re([n],i,[],{},!0);Object.assign(r,{element:a.element?a.element:r.element,errorElement:a.errorElement?a.errorElement:r.errorElement,hydrateFallbackElement:a.hydrateFallbackElement?a.hydrateFallbackElement:r.hydrateFallbackElement})}n.hasHMRRoutes||n.setRoutes([...n.activeRoutes])}function Rt(e,t){return`id`in e&&`id`in t&&e.id===t.id?!0:e.index!==t.index||e.path!==t.path||e.caseSensitive!==t.caseSensitive?!1:(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children?.every((e,n)=>t.children?.some(t=>Rt(e,t)))??!1}var zt=new WeakMap,Bt=({key:e,route:t,manifest:n,mapRouteProperties:r})=>{let i=n[t.id];if(E(i,`No route found in manifest`),!i.lazy||typeof i.lazy!=`object`)return;let a=i.lazy[e];if(!a)return;let o=zt.get(i);o||(o={},zt.set(i,o));let s=o[e];if(s)return s;let c=(async()=>{let t=L(e),n=i[e]!==void 0;if(t)D(!t,`Route property `+e+` is not a supported lazy route property. This property will be ignored.`),o[e]=Promise.resolve();else if(n)D(!1,`Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let t=await a();t!=null&&(Object.assign(i,{[e]:t}),Object.assign(i,r(i)))}typeof i.lazy==`object`&&(i.lazy[e]=void 0,Object.values(i.lazy).every(e=>e===void 0)&&(i.lazy=void 0))})();return o[e]=c,c},Vt=new WeakMap;function Ht(e,t,n,r,i){let a=n[e.id];if(E(a,`No route found in manifest`),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy==`function`){let t=Vt.get(a);if(t)return{lazyRoutePromise:t,lazyHandlerPromise:t};let n=(async()=>{E(typeof e.lazy==`function`,`No lazy route function found`);let t=await e.lazy(),n={};for(let e in t){let r=t[e];if(r===void 0)continue;let i=ee(e),o=a[e]!==void 0;i?D(!i,`Route property `+e+` is not a supported property to be returned from a lazy route function. This property will be ignored.`):o?D(!o,`Route "${a.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`):n[e]=r}Object.assign(a,n),Object.assign(a,{...r(a),lazy:void 0})})();return Vt.set(a,n),n.catch(()=>{}),{lazyRoutePromise:n,lazyHandlerPromise:n}}let o=Object.keys(e.lazy),s=[],c;for(let a of o){if(i&&i.includes(a))continue;let o=Bt({key:a,route:e,manifest:n,mapRouteProperties:r});o&&(s.push(o),a===t&&(c=o))}let l=s.length>0?Promise.all(s).then(()=>{}):void 0;return l?.catch(()=>{}),c?.catch(()=>{}),{lazyRoutePromise:l,lazyHandlerPromise:c}}async function Ut(e){let t=e.matches.filter(e=>e.shouldLoad),n={};return(await Promise.all(t.map(e=>e.resolve()))).forEach((e,r)=>{n[t[r].route.id]=e}),n}async function Wt(e){return e.matches.some(e=>e.route.middleware)?Gt(e,()=>Ut(e)):Ut(e)}function Gt(e,t){return Kt(e,t,e=>{if(On(e))throw e;return e},bn,n);async function n(t,n,r){if(r)return Object.assign(r.value,{[n]:{type:`error`,result:t}});{let{matches:r}=e,i=Math.min(Math.max(r.findIndex(e=>e.route.id===n),0),Math.max(r.findIndex(e=>e.shouldCallHandler()),0)),a=r[i].route.id;for(let e of r.slice(0,i+1))try{await e._lazyPromises?.route}catch{a=e.route.id;break}return{[pn(r,a).route.id]:{type:`error`,result:t}}}}}async function Kt(e,t,n,r,i){let{matches:a,...o}=e;return await qt(o,a.flatMap(e=>e.route.middleware?e.route.middleware.map(t=>[e.route.id,t]):[]),t,n,r,i)}async function qt(e,t,n,r,i,a,o=0){let{request:s}=e;if(s.signal.aborted)throw s.signal.reason??Error(`Request aborted: ${s.method} ${s.url}`);let c=t[o];if(!c)return await n();let[l,u]=c,d,f=async()=>{if(d)throw Error("You may only call `next()` once per middleware");try{return d={value:await qt(e,t,n,r,i,a,o+1)},d.value}catch(e){return d={value:await a(e,l,d)},d.value}};try{let t=await u(e,f),n=t==null?void 0:r(t);return i(n)?n:d?n??d.value:(d={value:await f()},d.value)}catch(e){return await a(e,l,d)}}function Jt(e,t,n,r,i){let a=Bt({key:`middleware`,route:r.route,manifest:t,mapRouteProperties:e}),o=Ht(r.route,An(n.method)?`action`:`loader`,t,e,i);return{middleware:a,route:o.lazyRoutePromise,handler:o.lazyHandlerPromise}}function Yt(e,t,n,r,i,a,o,s,c,l=null,u){let d=!1,f=Jt(e,t,n,a,o);return{...a,_lazyPromises:f,shouldLoad:c,shouldRevalidateArgs:l,shouldCallHandler(e){return d=!0,l?typeof u==`boolean`?It(a,{...l,defaultShouldRevalidate:u}):typeof e==`boolean`?It(a,{...l,defaultShouldRevalidate:e}):It(a,l):c},resolve(e){let{lazy:t,loader:o,middleware:l}=a.route,u=d||c||e&&!An(n.method)&&(t||o),p=l&&l.length>0&&!o&&!t;return u&&(An(n.method)||!p)?Qt({request:n,path:r,pattern:i,match:a,lazyHandlerPromise:f?.handler,lazyRoutePromise:f?.route,handlerOverride:e,scopedContext:s}):Promise.resolve({type:`data`,result:void 0})}}}function Xt(e,t,n,r,i,a,o,s,c=null){return i.map(l=>l.route.id===a.route.id?Yt(e,t,n,r,Ue(i),l,o,s,!0,c):{...l,shouldLoad:!1,shouldRevalidateArgs:c,shouldCallHandler:()=>!1,_lazyPromises:Jt(e,t,n,l,o),resolve:()=>Promise.resolve({type:`data`,result:void 0})})}async function Zt(e,t,n,r,i,a,o){r.some(e=>e._lazyPromises?.middleware)&&await Promise.all(r.map(e=>e._lazyPromises?.middleware));let s={request:t,url:We(t,n),pattern:Ue(r),params:r[0].params,context:a,matches:r},c=o?()=>{throw Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`")}:e=>{let t=s;return Gt(t,()=>e({...t,fetcherKey:i,runClientMiddleware:()=>{throw Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))},l=await e({...s,fetcherKey:i,runClientMiddleware:c});try{await Promise.all(r.flatMap(e=>[e._lazyPromises?.handler,e._lazyPromises?.route]))}catch{}return l}async function Qt({request:e,path:t,pattern:n,match:r,lazyHandlerPromise:i,lazyRoutePromise:a,handlerOverride:o,scopedContext:s}){let c,l,u=An(e.method),d=u?`action`:`loader`,f=i=>{let a,c=new Promise((e,t)=>a=t);l=()=>a(),e.signal.addEventListener(`abort`,l);let u=a=>typeof i==`function`?i({request:e,url:We(e,t),pattern:n,params:r.params,context:s},...a===void 0?[]:[a]):Promise.reject(Error(`You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${r.route.id}]`)),f=(async()=>{try{return{type:`data`,result:await(o?o(e=>u(e)):u())}}catch(e){return{type:`error`,result:e}}})();return Promise.race([f,c])};try{let t=u?r.route.action:r.route.loader;if(i||a){if(t){let e,[n]=await Promise.all([f(t).catch(t=>{e=t}),i,a]);if(e!==void 0)throw e;c=n}else{await i;let t=u?r.route.action:r.route.loader;if(t)[c]=await Promise.all([f(t),a]);else if(d===`action`){let t=new URL(e.url),n=t.pathname+t.search;throw hn(405,{method:e.method,pathname:n,routeId:r.route.id})}else return{type:`data`,result:void 0}}}else if(t)c=await f(t);else{let t=new URL(e.url);throw hn(404,{pathname:t.pathname+t.search})}}catch(e){return{type:`error`,result:e}}finally{l&&e.signal.removeEventListener(`abort`,l)}return c}async function $t(e){let t=e.headers.get(`Content-Type`);return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function en(e){let{result:t,type:n}=e;if(En(t)){let e;try{e=await $t(t)}catch(e){return{type:`error`,error:e}}return n===`error`?{type:`error`,error:new Ve(t.status,t.statusText,e),statusCode:t.status,headers:t.headers}:{type:`data`,data:e,statusCode:t.status,headers:t.headers}}return n===`error`?Tn(t)?t.data instanceof Error?{type:`error`,error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:`error`,error:yn(t),statusCode:He(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:`error`,error:t,statusCode:He(t)?t.status:void 0}:Tn(t)?{type:`data`,data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:`data`,data:t}}function tn(e,t,n,r,i){let a=e.headers.get(`Location`);if(E(a,`Redirects returned/thrown from loaders/actions must have a Location header`),!De(a)){let o=r.slice(0,r.findIndex(e=>e.route.id===n)+1);a=kt(new URL(t.url),o,i,a),e.headers.set(`Location`,a)}return e}var nn=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function rn(e){try{return nn.includes(new URL(e).protocol)}catch{return!1}}function an(e,t,n,r){if(De(e)){let r=e,i=b.test(r)?new URL(x(r,t.protocol)):new URL(r);if(rn(i.toString()))throw Error(`Invalid redirect location`);let a=Te(i.pathname,n)!=null;if(i.origin===t.origin&&a)return Pe(i.pathname)+i.search+i.hash}try{if(rn(r.createURL(e).toString()))throw Error(`Invalid redirect location`)}catch{}return e}function on(e,t,n,r){let i=e.createURL(_n(t)).toString(),a={signal:n};if(r&&An(r.formMethod)){let{formMethod:e,formEncType:t}=r;a.method=e.toUpperCase(),t===`application/json`?(a.headers=new Headers({"Content-Type":t}),a.body=JSON.stringify(r.json)):a.body=t===`text/plain`?r.text:t===`application/x-www-form-urlencoded`&&r.formData?sn(r.formData):r.formData}return new Request(i,a)}function sn(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r==`string`?r:r.name);return t}function cn(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function ln(e,t,n,r=!1,i=!1){let a={},o=null,s,c=!1,l={},u=n&&Cn(n[1])?n[1].error:void 0;return e.forEach(n=>{if(!(n.route.id in t))return;let d=n.route.id,f=t[d];if(E(!wn(f),`Cannot handle redirect results in processLoaderData`),Cn(f)){let t=f.error;if(u!==void 0&&(t=u,u=void 0),o||={},i)o[d]=t;else{let n=pn(e,d);o[n.route.id]??(o[n.route.id]=t)}r||(a[d]=wt),c||(c=!0,s=He(f.error)?f.error.status:500),f.headers&&(l[d]=f.headers)}else a[d]=f.data,f.statusCode&&f.statusCode!==200&&!c&&(s=f.statusCode),f.headers&&(l[d]=f.headers)}),u!==void 0&&n&&(o={[n[0]]:u},n[2]&&(a[n[2]]=void 0)),{loaderData:a,errors:o,statusCode:s||200,loaderHeaders:l}}function un(e,t,n,r,i,a,o){let{loaderData:s,errors:c}=ln(t,n,r);return i.filter(e=>!e.matches||e.matches.some(e=>e.shouldLoad)).forEach(t=>{let{key:n,match:r,controller:i}=t;if(i&&i.signal.aborted)return;let s=a[n];if(E(s,`Did not find corresponding fetcher result`),Cn(s)){let t=pn(e.matches,r?.route.id);c&&c[t.route.id]||(c={...c,[t.route.id]:s.error}),o.delete(n)}else if(wn(s))E(!1,`Unhandled fetcher revalidation redirect`);else{let e=zn(s.data);o.set(n,e)}}),{loaderData:s,errors:c}}function dn(e,t,n,r){let i=Object.entries(t).filter(([,e])=>e!==wt).reduce((e,[t,n])=>(e[t]=n,e),{}),a=0;for(let o of n){let n=o.route.id;if(!t.hasOwnProperty(n)&&e.hasOwnProperty(n)&&o.route.loader&&(i[n]=e[n],a++),r&&r.hasOwnProperty(n))break}return Object.keys(t).length===0&&a===Object.keys(e).length?e:i}function fn(e){return e?Cn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function pn(e,t){return(t?e.slice(0,e.findIndex(e=>e.route.id===t)+1):[...e]).reverse().find(e=>e.route.ErrorBoundary!=null||e.route.errorElement!=null)||e[0]}function mn(e){let t=e.length===1?e[0]:e.find(e=>e.index||!e.path||e.path===`/`)||{id:`__shim-error-route__`};return{matches:[{params:{},pathname:``,pathnameBase:``,route:t}],route:t}}function hn(e,{pathname:t,routeId:n,method:r,type:i,message:a}={}){let o=`Unknown Server Error`,s=`Unknown @remix-run/router error`;return e===400?(o=`Bad Request`,r&&t&&n?s=`You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:i===`invalid-body`&&(s=`Unable to encode submission body`)):e===403?(o=`Forbidden`,s=`Route "${n}" does not match URL "${t}"`):e===404?(o=`Not Found`,s=`No route matches URL "${t}"`):e===405&&(o=`Method Not Allowed`,r&&t&&n?s=`You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:r&&(s=`Invalid request method "${r.toUpperCase()}"`)),new Ve(e||500,o,Error(s),!0)}function gn(e){let t=Object.entries(e);for(let e=t.length-1;e>=0;e--){let[n,r]=t[e];if(wn(r))return{key:n,result:r}}}function _n(e){return j({...typeof e==`string`?M(e):e,hash:``})}function vn(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===``?t.hash!==``:e.hash===t.hash||t.hash!==``}function yn(e){return new Ve(e.init?.status??500,e.init?.statusText??`Internal Server Error`,e.data)}function bn(e){return typeof e==`object`&&!!e&&Object.entries(e).every(([e,t])=>typeof e==`string`&&xn(t))}function xn(e){return typeof e==`object`&&!!e&&`type`in e&&`result`in e&&(e.type===`data`||e.type===`error`)}function Sn(e){return En(e.result)&&vt.has(e.result.status)}function Cn(e){return e.type===`error`}function wn(e){return(e&&e.type)===`redirect`}function Tn(e){return typeof e==`object`&&!!e&&`type`in e&&`data`in e&&`init`in e&&e.type===`DataWithResponseInit`}function En(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.headers==`object`&&e.body!==void 0}function Dn(e){return vt.has(e)}function On(e){return En(e)&&Dn(e.status)&&e.headers.has(`Location`)}function kn(e){return _t.has(e.toUpperCase())}function An(e){return ht.has(e.toUpperCase())}function jn(e){return new URLSearchParams(e).getAll(`index`).some(e=>e===``)}function Mn(e,t){let n=typeof t==`string`?M(t).search:t.search;if(e[e.length-1].route.index&&jn(n||``))return e[e.length-1];let r=je(e);return r[r.length-1]}function Nn(e,t,n){return{url:We(e.createURL(t),t),pattern:n?Ue(n):``,params:n?.[0]?.params?{...n[0].params}:{}}}function Pn(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:a,json:o}=e;if(t&&n&&r){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Fn(e,t,n,r){return r?{state:`loading`,location:e,matches:t,historyAction:n,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:`loading`,location:e,matches:t,historyAction:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function In(e,t,n,r){return{state:`submitting`,location:e,matches:t,historyAction:n,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function Ln(e,t){return e?{state:`loading`,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:`loading`,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Rn(e,t){return{state:`submitting`,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function zn(e){return{state:`idle`,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Bn(e,t){try{let n=e.sessionStorage.getItem(Ct);if(n){let e=JSON.parse(n);for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch{}}function Vn(e,t){if(t.size>0){let n={};for(let[e,r]of t)n[e]=[...r];try{e.sessionStorage.setItem(Ct,JSON.stringify(n))}catch(e){D(!1,`Failed to save applied view transitions in sessionStorage (${e}).`)}}}function Hn(){let e,t,n=new Promise((r,i)=>{e=async e=>{r(e);try{await n}catch{}},t=async e=>{i(e);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var Un=_.createContext(null);Un.displayName=`DataRouter`;var Wn=_.createContext(null);Wn.displayName=`DataRouterState`;var Gn=_.createContext(null);Gn.displayName=`DataRouterData`;var Kn=_.createContext(null);Kn.displayName=`DataRouterNavigation`;var qn=_.createContext(!1);function Jn(){return _.useContext(qn)}var Yn=_.createContext({isTransitioning:!1});Yn.displayName=`ViewTransition`;var Xn=_.createContext(null);Xn.displayName=`Fetchers`;var Zn=_.createContext(null);Zn.displayName=`Await`;var Qn=_.createContext(null);Qn.displayName=`Navigation`;var $n=_.createContext(null);$n.displayName=`Location`;var er=_.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName=`Route`;var tr=_.createContext(!1);tr.displayName=`IsDataRoute`;var nr=_.createContext(void 0);nr.displayName=`RouteId`;var rr=_.createContext(null);rr.displayName=`RouteError`;var ir=`REACT_ROUTER_ERROR`,ar=`REDIRECT`,or=`ROUTE_ERROR_RESPONSE`;function sr(e){if(e.startsWith(`${ir}:${ar}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function cr(e){if(e.startsWith(`${ir}:${or}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ve(t.status,t.statusText,t.data)}catch{}}function lr(e,{relative:t}={}){E(ur(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(Qn),{hash:i,pathname:a,search:o}=_r(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Fe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ur(){return _.useContext($n)!=null}function dr(){return E(ur(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext($n).location}var fr=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function pr(){return _.useContext(tr)?Fr():mr()}function mr(){E(ur(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(Un),{basename:t,navigator:n}=_.useContext(Qn),{matches:r}=_.useContext(er),{pathname:i}=dr(),a=JSON.stringify(Me(r)),o=_.useRef(!1);return _.useLayoutEffect(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(D(o.current,fr),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ne(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Fe([t,c.pathname])),pt(typeof r==`string`?r:j(r),n.createHref(c),ut(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var hr=_.createContext(null);function gr(e){let t=_.useContext(er).outlet;return _.useMemo(()=>t&&_.createElement(hr.Provider,{value:e},t),[t,e])}function _r(e,{relative:t}={}){let{matches:n}=_.useContext(er),{pathname:r}=dr(),i=JSON.stringify(Me(n));return _.useMemo(()=>Ne(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function vr(e,t,n){E(ur(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(Qn),{matches:i}=_.useContext(er),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:`/`;a&&a.route;let c=dr(),l;if(t){let e=typeof t==`string`?M(t):t;E(s===`/`||e.pathname?.startsWith(s),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${e.pathname}" was given in the \`location\` prop.`),l=e}else l=c;let u=l.pathname||`/`,d=u;if(s!==`/`){let e=s.replace(/^\//,``).split(`/`);d=`/`+u.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let f;f=n?n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):n.router.match(n.state.location):z(e,{pathname:d});let p=Tr(f&&f.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Fe([s,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?s:Fe([s,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&p?_.createElement($n.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...l},navigationType:`POP`}},p):p}function yr(){let e=Pr(),t=He(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return _.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var br=_.createElement(yr,null),xr=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static contextType=qn;static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=cr(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement(er.Provider,{value:this.props.routeContext},_.createElement(tr.Provider,{value:this.props.routeContext.isDataRoute},_.createElement(nr.Provider,{value:this.props.routeContext.matches[this.props.routeContext.matches.length-1]?.route.id},_.createElement(rr.Provider,{value:e,children:this.props.component}))));return this.context?_.createElement(Cr,{error:e},t):t}},Sr=new WeakMap;function Cr({children:e,error:t}){let{basename:n,navigator:r}=_.useContext(Qn);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=sr(t.digest);if(e){let i=Sr.get(t);if(i)throw i;let a=Ke(e.location,n),o=a.absoluteURL||a.to;if(pt(e.location,o,ut(r),`allow-explicit`),rn(o))throw Error(`Invalid redirect location`);if(Ge&&!Sr.get(t)){if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw Sr.set(t,n),n}}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function wr({routeContext:e,match:t,children:n}){let r=_.useContext(Un);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(er.Provider,{value:e},_.createElement(tr.Provider,{value:e.isDataRoute},_.createElement(nr.Provider,{value:t.route.id},n)))}function Tr(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);E(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ue(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||br,o&&(s<0&&c===0?(Lr(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(wr,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(xr,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Er(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dr(e){let t=_.useContext(Un);return E(t,Er(e)),t}function Or(e){let t=_.useContext(Wn);return E(t,Er(e)),t}function kr(e){let t=_.useContext(Gn);return E(t,Er(e)),t}function Ar(e){let t=_.useContext(Kn);return E(t,Er(e)),t}function jr(e){let t=_.useContext(nr);return E(t,`${e} can only be used on routes that contain a unique "id"`),t}function Mr(){let{navigation:e}=Ar(`useNavigation`);return _.useMemo(()=>{let{matches:t,historyAction:n,...r}=e;return r},[e])}function Nr(){let{matches:e}=Or(`useMatches`),{loaderData:t}=kr(`useMatches`);return _.useMemo(()=>e.map(e=>oe(e,t)),[e,t])}function Pr(){let e=_.useContext(rr),t=kr(`useRouteError`),n=jr(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Fr(){let{router:e}=Dr(`useNavigate`),t=jr(`useNavigate`),n=_.useRef(!1);return _.useLayoutEffect(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{D(n.current,fr),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ir={};function Lr(e,t,n){!t&&!Ir[e]&&(Ir[e]=!0,D(!1,n))}var Rr={};function zr(e,t){!e&&!Rr[t]&&(Rr[t]=!0,console.warn(t))}var Br=[`HydrateFallback`,`hydrateFallbackElement`],Vr=class{status=`pending`;promise;resolve;reject;constructor(){this.promise=new Promise((e,t)=>{this.resolve=t=>{this.status===`pending`&&(this.status=`resolved`,e(t))},this.reject=e=>{this.status===`pending`&&(this.status=`rejected`,t(e))}})}};function Hr({router:e,flushSync:t,onError:n,useTransitions:r}){r=Jn()||r;let[i,a]=_.useState(e.state),[o,s]=(0,_.useOptimistic)(i),[c,l]=_.useState(),[u,d]=_.useState({isTransitioning:!1}),[f,p]=_.useState(),[m,h]=_.useState(),[g,v]=_.useState(),y=_.useRef(new Map),b=_.useCallback((i,{deletedFetchers:o,newErrors:c,flushSync:u,viewTransitionOpts:g})=>{c&&n&&Object.values(c).forEach(e=>n(e,{location:i.location,params:i.matches[0]?.params??{},pattern:Ue(i.matches)})),i.fetchers.forEach((e,t)=>{e.data!==void 0&&y.current.set(t,e.data)}),o.forEach(e=>y.current.delete(e)),zr(u===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let b=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition==`function`;if(zr(g==null||b,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!g||!b){t&&u?t(()=>a(i)):r===!1?a(i):_.startTransition(()=>{r===!0&&s(e=>Ur(e,i)),a(i)});return}if(t&&u){t(()=>{m&&(f?.resolve(),m.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:g.currentLocation,nextLocation:g.nextLocation})});let n=e.window.document.startViewTransition(()=>{t(()=>a(i))});n.finished.finally(()=>{t(()=>{p(void 0),h(void 0),l(void 0),d({isTransitioning:!1})})}),t(()=>h(n));return}m?(f?.resolve(),m.skipTransition(),v({state:i,currentLocation:g.currentLocation,nextLocation:g.nextLocation})):(l(i),d({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}))},[e.window,t,m,f,r,s,n]);_.useLayoutEffect(()=>e.subscribe(b),[e,b]),_.useEffect(()=>{u.isTransitioning&&!u.flushSync&&p(new Vr)},[u]),_.useEffect(()=>{if(f&&c&&e.window){let t=c,n=f.promise,i=e.window.document.startViewTransition(async()=>{r===!1?a(t):_.startTransition(()=>{r===!0&&s(e=>Ur(e,t)),a(t)}),await n});i.finished.finally(()=>{p(void 0),h(void 0),l(void 0),d({isTransitioning:!1})}),h(i)}},[c,f,e.window,r,s]),_.useEffect(()=>{f&&c&&o.location.key===c.location.key&&f.resolve()},[f,m,o.location,c]),_.useEffect(()=>{!u.isTransitioning&&g&&(l(g.state),d({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),v(void 0))},[u.isTransitioning,g]);let x=_.useMemo(()=>({createHref:e.createHref,createURL:e.createURL,encodeLocation:e.encodeLocation,go:t=>e.navigate(t),push:(t,n,r)=>e.navigate(t,{state:n,preventScrollReset:r?.preventScrollReset}),replace:(t,n,r)=>e.navigate(t,{replace:!0,state:n,preventScrollReset:r?.preventScrollReset})}),[e]),S=e.basename||`/`,C=_.useMemo(()=>({router:e,navigator:x,static:!1,basename:S,onError:n}),[e,x,S,n]),w=_.useMemo(()=>({historyAction:o.historyAction,location:o.location,matches:o.matches,initialized:o.initialized,renderFallback:o.renderFallback,restoreScrollPosition:o.restoreScrollPosition,preventScrollReset:o.preventScrollReset,blockers:o.blockers}),[o.historyAction,o.location,o.matches,o.initialized,o.renderFallback,o.restoreScrollPosition,o.preventScrollReset,o.blockers]),T=_.useMemo(()=>({navigation:o.navigation,revalidation:o.revalidation}),[o.navigation,o.revalidation]),E=_.useMemo(()=>({loaderData:o.loaderData,actionData:o.actionData,errors:o.errors}),[o.loaderData,o.actionData,o.errors]),D=_.useMemo(()=>({fetchers:o.fetchers,fetcherData:y.current}),[o.fetchers]);return _.createElement(_.Fragment,null,_.createElement(Un.Provider,{value:C},_.createElement(Wn.Provider,{value:w},_.createElement(Kn.Provider,{value:T},_.createElement(Gn.Provider,{value:E},_.createElement(Xn.Provider,{value:D},_.createElement(Yn.Provider,{value:u},_.createElement(qr,{basename:S,location:o.location,navigationType:o.historyAction,navigator:x,useTransitions:r},_.createElement(Wr,{routes:e.routes,manifest:e.manifest,state:o,isStatic:!1,onError:n})))))))),null)}function Ur(e,t){return{...e,navigation:t.navigation.state===`idle`?e.navigation:t.navigation,revalidation:t.revalidation===`idle`?e.revalidation:t.revalidation,actionData:t.navigation.state===`submitting`?e.actionData:t.actionData,fetchers:t.fetchers}}var Wr=_.memo(Gr);function Gr({routes:e,manifest:t,state:n,isStatic:r,onError:i}){let a=_.useContext(Un);return E(a,`You must render this element inside a <DataRouterContext.Provider> element`),vr(e,void 0,{router:a.router,manifest:t,state:n,isStatic:r,onError:i})}function Kr(e){return gr(e.context)}function qr({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){E(!ur(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=M(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=_.useMemo(()=>{let e=Te(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return D(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(Qn.Provider,{value:c},_.createElement($n.Provider,{children:t,value:h}))}_.Component;var Jr=`application/x-www-form-urlencoded`;function Yr(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Xr(e){return Yr(e)&&e.tagName.toLowerCase()===`button`}function Zr(e){return Yr(e)&&e.tagName.toLowerCase()===`form`}function Qr(e){return Yr(e)&&e.tagName.toLowerCase()===`input`}function $r(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ei(e,t){return e.button===0&&(!t||t===`_self`)&&!$r(e)}var ti=null;function ni(){if(ti===null)try{new FormData(document.createElement(`form`),0),ti=!1}catch{ti=!0}return ti}var ri=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function ii(e){return e!=null&&!ri.has(e)?(D(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jr}"`),null):e}function ai(e,t){let n,r,i,a,o;if(Zr(e)){let o=e.getAttribute(`action`);r=o?Te(o,t):null,n=e.getAttribute(`method`)||`get`,i=ii(e.getAttribute(`enctype`))||Jr,a=new FormData(e)}else if(Xr(e)||Qr(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Te(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||`get`,i=ii(e.getAttribute(`formenctype`))||ii(o.getAttribute(`enctype`))||Jr,a=new FormData(o,e),!ni()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Yr(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=`get`,r=null,i=Jr,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function oi(e,t){if(e===!1||e==null)throw Error(t)}var si={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},ci=/[&><\u2028\u2029]/g;function li(e){return e.replace(ci,e=>si[e])}function ui(e,t){let n=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n.pathname=n.pathname.endsWith(`/`)?`${n.pathname}_.${t}`:`${n.pathname}.${t}`,n}var di=`modulepreload`,fi=function(e){return`/hd-platform/`+e},pi={},mi=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=fi(t,n),t=s(t),t in pi)return;pi[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:di,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};async function hi(e,t){if(e.id in t)return t[e.id];try{let n=await mi(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gi(e){return e!=null&&typeof e.page==`string`}function _i(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function vi(e,t,n){return Ci((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await hi(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(_i).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function yi(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function bi(e,t,{includeHydrateFallback:n}={}){return xi(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function xi(e){return[...new Set(e)]}function Si(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Ci(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!gi(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Si(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}var wi=_.createContext(void 0);wi.displayName=`FrameworkContext`;function Ti(){let e=_.useContext(wi);return oi(e,`You must render this element inside a <HydratedRouter> element`),e}function Ei(e,t){let n=_.useContext(wi),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Di(s,p),onBlur:Di(c,m),onMouseEnter:Di(l,p),onMouseLeave:Di(u,m),onTouchStart:Di(d,p)}]:[a,f,{}]:[!1,f,{}]}function Di(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Oi({page:e,...t}){let n=Jn(),{nonce:r}=Ti(),{router:i}=Dr(`PrefetchPageLinks`),a=_.useMemo(()=>i.match(e),[i,i.routes,e]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?_.createElement(Ai,{page:e,matches:a,...t}):_.createElement(ji,{page:e,matches:a,...t})):null}function ki(e){let{manifest:t,routeModules:n}=Ti(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return vi(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Ai({page:e,matches:t,...n}){let r=dr(),i=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=ui(e,`rsc`),i=!1,a=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?i=!0:a.push(e.route.id);return i&&a.length>0&&n.searchParams.set(`_routes`,a.join(`,`)),[n.pathname+n.search]},[e,r,t]);return _.createElement(_.Fragment,null,i.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function ji({page:e,matches:t,...n}){let r=dr(),{manifest:i,routeModules:a}=Ti(),{matches:o}=Or(`PrefetchPageLinks`),{loaderData:s}=kr(`PrefetchPageLinks`),c=_.useMemo(()=>yi(e,t,o,i,r,`data`),[e,t,o,i,r]),l=_.useMemo(()=>yi(e,t,o,i,r,`assets`),[e,t,o,i,r]),u=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,o=!1;if(t.forEach(e=>{let t=i.routes[e.route.id];t&&t.hasLoader&&(!c.some(t=>t.route.id===e.route.id)&&e.route.id in s&&a[e.route.id]?.shouldRevalidate||t.hasClientLoader?o=!0:n.add(e.route.id))}),n.size===0)return[];let l=ui(e,`data`);return o&&n.size>0&&l.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[l.pathname+l.search]},[s,r,i,c,t,e,a]),d=_.useMemo(()=>bi(l,i),[l,i]),f=ki(l);return _.createElement(_.Fragment,null,u.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),d.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),f.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Mi(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var Ni=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Ni&&(window.__reactRouterVersion=`8`)}catch{}function Pi(e,t){return Dt({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:w({window:t?.window}),hydrationData:t?.hydrationData||Ii(),routes:e,mapRouteProperties:ne,hydrationRouteProperties:Br,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window,instrumentations:t?.instrumentations}).initialize()}function Fi(e,t){return Dt({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:T({window:t?.window}),hydrationData:t?.hydrationData||Ii(),routes:e,mapRouteProperties:ne,hydrationRouteProperties:Br,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window,instrumentations:t?.instrumentations}).initialize()}function Ii(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:Li(e.errors)}),e}function Li(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)if(r&&r.__type===`RouteErrorResponse`)n[e]=new Ve(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type===`Error`){if(typeof r.__subType==`string`&&Be.includes(r.__subType)){let t=window[r.__subType];if(typeof t==`function`)try{let i=new t(r.message);i.stack=``,n[e]=i}catch{}}if(n[e]==null){let t=Error(r.message);t.stack=``,n[e]=t}}else n[e]=r;return n}var Ri=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:v}=_.useContext(Qn),b=typeof l==`string`&&y.test(l),x=Ke(l,h);l=x.to;let S=lr(l,{relative:r}),C=dr(),w=null;if(o){let e=Ne(o,[],C.mask?C.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Fe([h,e.pathname])),w=g.createHref(e)}let[T,E,D]=Ei(n,p),O=Hi(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function k(t){e&&e(t),t.defaultPrevented||O(t)}let A=!(x.isExternal||i),j=_.createElement(`a`,{...p,...D,href:(A?w:void 0)||x.absoluteURL||S,onClick:A?k:e,ref:Mi(m,E),target:c,"data-discover":!b&&t===`render`?`true`:void 0});return T&&!b?_.createElement(_.Fragment,null,j,_.createElement(Oi,{page:S})):j});Ri.displayName=`Link`;var zi=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=_r(a,{relative:c.relative}),d=dr(),f=_.useContext(Kn),{navigator:p,basename:m}=_.useContext(Qn),h=f!=null&&$i(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f?.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Te(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(b)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return _.createElement(Ri,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});zi.displayName=`NavLink`;var Bi=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=`get`,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=_.useContext(Qn),g=Gi(),v=Ki(s,{relative:l}),b=o.toLowerCase()===`get`?`get`:`post`,x=typeof s==`string`&&y.test(s);return _.createElement(`form`,{ref:m,method:b,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!x&&e===`render`?`true`:void 0})});Bi.displayName=`Form`;function Vi({getKey:e,storageKey:t,...n}){let r=_.useContext(wi),{basename:i}=_.useContext(Qn),a=dr(),o=Nr();Xi({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=Yi(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),_.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${li(JSON.stringify(t||qi))}, ${li(JSON.stringify(s))})`}})}Vi.displayName=`ScrollRestoration`;function Hi(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=pr(),d=dr(),f=_r(e,{relative:o});return _.useCallback(p=>{if(ei(p,t)){p.preventDefault();let t=n===void 0?j(d)===j(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Ui=0,Wi=()=>`__${String(++Ui)}__`;function Gi(){let{router:e}=Dr(`useSubmit`),{basename:t}=_.useContext(Qn),n=jr(`useSubmit`),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=ai(e,t);a.navigate===!1?await r(a.fetcherKey||Wi(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Ki(e,{relative:t}={}){let{basename:n}=_.useContext(Qn),r=_.useContext(er);E(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={..._r(e||`.`,{relative:t})},o=dr();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Fe([n,a.pathname])),j(a)}var qi=`react-router-scroll-positions`,Ji={};function Yi(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Te(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Xi({getKey:e,storageKey:t}={}){let{router:n}=Dr(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Or(`useScrollRestoration`),{basename:a}=_.useContext(Qn),o=dr(),s=Nr(),c=Mr();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Qi(_.useCallback(e=>{e.persisted&&(window.history.scrollRestoration=`manual`)},[])),Zi(_.useCallback(()=>{if(c.state===`idle`){let t=Yi(o,s,a,e);Ji[t]=window.scrollY}try{sessionStorage.setItem(t||qi,JSON.stringify(Ji))}catch(e){D(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||qi);e&&(Ji=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Ji,()=>window.scrollY,e?(t,n)=>Yi(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{D(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Zi(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Qi(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pageshow`,e,t),()=>{window.removeEventListener(`pageshow`,e,t)}},[e,n])}function $i(e,{relative:t}={}){let n=_.useContext(Yn);E(n!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Dr(`useViewTransitionState`),i=_r(e,{relative:t});if(!n.isTransitioning)return!1;let a=Te(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Te(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xe(i.pathname,o)!=null||xe(i.pathname,a)!=null}function ea(e){return ta(e,!1)}function ta(e,t){let n={},r=null,i=[],a=()=>{if(r!==null){if(t&&Object.hasOwn(n,r))throw Error(`duplicate copy key: ${r}`);n[r]=i.join(`
`).trim()}};for(let t of e.split(/\r?\n/)){let e=/^## (\S+)\s*$/.exec(t);e?(a(),r=e[1],i=[]):r!==null&&i.push(t)}return a(),n}var na={chrome:`## skip.link
Skip to content

## header.brand
HD Progression Modelling

## header.brand.sub
Turner Institute for Brain and Mental Health

## nav.intro
HD basics

## nav.staging
Staging

## nav.prognostic
Prognostic enrichment

## nav.shape
Subcortical shape

## nav.brainage
Regional brain age

## nav.about
About

## footer.lab
[Nellie Georgiou-Karistianis Lab](https://www.monash.edu/turner-institute/nellie-georgiou-karistianis-lab), Turner Institute for Brain and Mental Health, Monash University

## footer.ack
Made possible by the Turner Institute's Strategic Project Grants Scheme 2026.

## footer.github
GitHub repository

## notyet.body
This page is on the way. Until then, the [prognostic enrichment](/prognostic) model is ready to try.

## notfound.title
Page not found

## notfound.body
There is no page at this address. Try the [HD basics](/) page, or use the links above.

## error.title
Something went wrong

## error.body
This page hit an error. Reload it, or go back to [HD basics](/).

## notfound.doctitle
Page not found

## anim.play
Play

## anim.pause
Pause

## anim.replay
Play again

## anim.step
Step {n} of {m}: {title}
`,about:`## about.title
About this platform

## about.purpose
The HD Model Platform runs the [Nellie Georgiou-Karistianis Lab](https://www.monash.edu/turner-institute/nellie-georgiou-karistianis-lab)'s published Huntington's disease models in your browser, so a visitor can see how each model works and try it on a synthetic subject. Nothing you enter is sent anywhere, and no participant from the research cohorts is on this site.

## about.papers.title
Papers

## about.affiliations.title
Affiliations

## about.cohorts.title
Data

## about.cohorts.lede
The models were trained on four longitudinal Huntington's disease studies that followed participants with repeated MRI scans and clinical assessments, with four open brain-imaging datasets added for the brain-age model.

## about.cohorts.prognostic.label
Prognostic enrichment

## about.cohorts.prognostic.text
**451 gene-expansion carriers** from TRACK-HD, TrackOn-HD, PREDICT-HD and IMAGE-HD, 297 premanifest and 154 diagnosed, each with repeated 3T MRI and genetic, cognitive and motor assessments. The target was each person's rate of lateral ventricular enlargement over about three years.

## about.cohorts.shape.label
Subcortical shape

## about.cohorts.shape.text
**2,932 scans from 615 people with HD** across the same four studies, repeat scans a mean of 13 months apart.

## about.cohorts.brainage.label
Regional brain age

## about.cohorts.brainage.text
**3,562 scans from 1,936 people without the HD gene expansion**, from the four studies' control groups and the open AOMIC, SALD, IXI and NARPS datasets, trained the brain-age model. It was then applied to 2,429 scans from 531 people with HD.

## about.cohorts.access
The HD study data are available on request through the CHDI Foundation. AOMIC, SALD and NARPS are open datasets on OpenNeuro, and IXI is public at brain-development.org.

## about.cohorts.none
No participant data is present on this site.

## about.doctitle
About
`,intro:`## intro.doctitle
HD basics

## intro.hero.title
Huntington's disease in six questions

## intro.hero.lede
A schematic brain atlas showing the caudate and putamen, two deep brain regions affected early in Huntington’s disease.

## intro.hero.years
Years

## intro.hero.years.valuetext
{n} years from the first change

## intro.hero.age
Age

## intro.hero.age.valuetext
Age {n}

## intro.rail.label
A real brain from an MRI atlas, in three views

## intro.rail.orbit
Turn the brain

## intro.rail.coronal
Coronal view: A cut through the brain, viewed from the front.

## intro.rail.axial
Axial view: A cut through the brain, viewed from above, with the front of the brain at the top.

## intro.rail.orbit.hint
The brain shapes are based on an MRI atlas. The changes shown are schematic and exaggerated.

## intro.rail.coronal.hint
Coronal view: A cut through the brain, viewed from the front.

## intro.rail.axial.hint
Horizontal view: A cut through the brain, viewed from above, with the front of the brain at the top.

## intro.rail.key.caudate
Caudate

## intro.rail.key.putamen
Putamen

## intro.rail.key.ventricle
Lateral ventricles

## intro.rail.tag.caudate
Caudate

## intro.rail.tag.putamen
Putamen

## intro.rail.tag.ventricle
Lateral ventricle

## intro.rail.failed
The 3D model could not be loaded. The static images are still available.

## intro.cap.default
Drag the year slider to explore the changes. Over time, the caudate and putamen lose volume, while the nearby lateral ventricles enlarge. The dotted line indicates their reference size.

## intro.cap.q1
Before clear clinical symptoms appear, the caudate and putamen may already show measurable volume loss. The dotted line is their healthy size.

## intro.cap.q2
The reference shape. HD is caused by an expanded CAG repeat in the HTT gene.

## intro.cap.q3
HD is inherited in an autosomal dominant pattern: inheriting an expanded HTT allele can lead to the disease, depending on the repeat length.

## intro.cap.q4
Drag the years. The caudate and putamen shrink; the fluid-filled ventricles beside them widen into the space. The dotted line is the healthy size.

## intro.cap.q5
Drag the age to explore the four research stages, defined by genetic, biological, clinical and functional criteria.

## intro.cap.q6
People with similar-looking brain scans can experience different rates of disease-related change. These research models explore whether MRI measurements can help predict aspects of that change.

## intro.q.next
Next: {title}

## intro.q.list
Six questions

## intro.q1.title
What is Huntington's disease?

## intro.q1.summary
Huntington’s disease (HD) is an inherited, progressive neurodegenerative disorder that can affect movement, thinking, mood and behaviour.

## intro.q1.body
Symptoms most commonly begin between the ages of 30 and 50, although they can appear earlier or later. The course of the disease varies between individuals, and people may live for many years after symptoms begin.

HD can affect three broad areas of everyday life. Select each area to explore how symptoms may present.

## intro.q1.notice
Treatments can help manage symptoms and support quality of life. Researchers are also investigating treatments that may slow disease progression.

## intro.q2.title
What causes it?

## intro.q2.summary
HD is caused by an expansion of CAG repeats in the HTT gene, which provides instructions for making the huntingtin protein. The number of repeats helps determine whether a person is at risk of developing HD, but the implications differ across repeat ranges.

## intro.q2.body
Everyone has a stretch of DNA in the HTT gene where three DNA letters—CAG—repeat. Drag the slider to change the number of repeats.

## intro.q2.notice
The number of CAG repeats is reported by a genetic test. Repeat lengths of 26 or fewer are in the typical range. Lengths of 27–35 are called intermediate alleles: they are not associated with HD in the carrier, but the repeat can expand when passed to the next generation. Lengths of 36–39 have reduced penetrance, while 40 or more are associated with full penetrance.

## intro.q3.title
How is it passed on?

## intro.q3.summary
Each child of a parent who carries an expanded HTT allele has a 50% chance of inheriting that allele.

## intro.q3.body
The chance is the same for every child, regardless of the outcomes for previous children. Press the button a few times to explore possible outcomes.

## intro.q3.notice
A genetic test can show whether someone carries an expanded HTT allele before symptoms appear. Predictive testing is a personal decision, generally made with genetic counselling. If this is part of your life: [Huntington's Australia](https://huntingtonsaustralia.au), [HDSA](https://hdsa.org), [HDA](https://www.hda.org.uk).

## intro.q4.title
What changes in the brain?

## intro.q4.summary
The caudate and putamen can lose volume, while the lateral ventricles enlarge, before clear clinical symptoms appear.

## intro.q4.body
The two blue structures are the caudate and putamen, which together form the main components of the striatum. They are involved in movement and other cognitive functions and are among the brain regions affected early in HD. MRI can detect volume loss before clear clinical symptoms appear. Enlargement of the lateral ventricles is a useful imaging marker of disease-related brain change, but it does not capture every aspect of disease progression.

## intro.pair.label
Schematic brain views before the first modelled change and 30 years later

## intro.pair.before
Reference state

## intro.pair.after
30 years later in the illustration

## intro.pair.alt.before
Before: Schematic brain views showing the caudate, putamen and lateral ventricles at their reference sizes.

## intro.pair.alt.after
After: Schematic brain views showing smaller caudate and putamen structures and enlarged lateral ventricles.

## intro.pair.note
Schematic and exaggerated. The dotted line shows the reference size, the red rim represents tissue lost, and the teal band represents the enlarged ventricular space.

## intro.q4.notice
For visibility, the volume loss is exaggerated. For a uniformly scaled three-dimensional shape, a 30% volume reduction corresponds to approximately an 11% reduction in each linear dimension.

## intro.q5.title
What are the stages?

## intro.q5.summary
The HD-ISS defines four research stages, from the genetic expansion to measurable biological changes, clinical signs and functional decline.

## intro.q5.body
The Huntington’s Disease Integrated Staging System (HD-ISS) uses defined genetic, biological, clinical and functional criteria to classify disease stages. This is Alex, an imagined person with 42 CAG repeats. Drag the Age slider beside the brain to explore how the illustrative stages and brain changes unfold over time.

## intro.q5.notice
The HD-ISS uses defined measurement thresholds, including thresholds derived from healthy-control data. A stage is a research classification, not a judgement about a person or a precise forecast of their future. Alex’s ages are illustrative, not a prediction: people with the same CAG repeat length can experience different courses of disease. On the Staging page, you can [follow Alex's illustrative timeline](/staging#life), or [classify a research visit](/staging#calculator) using the same staging rules.

## intro.q6.title
Why predict how fast it progresses?

## intro.q6.summary
Clinical trials can benefit from selecting participants likely to show measurable disease-related change during the study.

## intro.q6.body
A trial testing a treatment intended to slow HD compares outcomes between participants receiving the treatment and those in a control group. Here are 100 people in an illustrative early-stage trial. Guess how many will show measurable change over two years, then reveal the example.

## intro.q6.notice
Selecting participants who are more likely to show measurable change is called prognostic enrichment. The first model uses data from one visit, including an MRI scan and selected clinical scores, to estimate the rate of lateral ventricular enlargement. [Explore how the model works](/prognostic), then try it on a synthetic individual.

## intro.signs.label
Three kinds of sign

## intro.signs.move.title
Movement

## intro.signs.move.when
the most visible

## intro.signs.move.body
**Involuntary movements**, known as *chorea*, may affect the fingers, toes, face and other parts of the body. They can sometimes be mistaken for restlessness or fidgeting. As HD progresses, coordination and balance may worsen, making walking less steady. Speech may become less clear, and swallowing may become more difficult.

## intro.signs.think.title
Thinking

## intro.signs.think.when
changes in everyday tasks

## intro.signs.think.body
Difficulties with planning, organising, switching between tasks and adapting to changes can emerge early in HD, sometimes before noticeable movement symptoms. Thinking and information processing may also become slower. The pattern and timing of these changes vary between individuals.

## intro.signs.mood.title
Mood and behaviour

## intro.signs.mood.when
sometimes subtle at first

## intro.signs.mood.body
Changes in mood, motivation or behaviour can occur before, alongside or after movement symptoms. They may be subtle at first and can sometimes be recognised more clearly in hindsight. These changes vary from person to person.

## intro.cag.slider
Repeats

## intro.cag.slider.valuetext
{n} repeats

## intro.cag.strip.label
A schematic strip of CAG repeats highlighting the reduced-penetrance range (36–39) and full-penetrance range (40 or more), with an illustrative age-at-onset display.

## intro.cag.axis
Illustrative age at symptom onset; actual onset varies between individuals.

## intro.cag.marker
about {age}

## intro.cag.legend.typical
**26 or fewer**: Normal range; not associated with developing HD. 
**27–35**: Intermediate range; These repeat lengths are not typically associated with HD in the carrier, but the repeat may expand when passed to the next generation.

## intro.cag.legend.reduced
**36–39**: Reduced-penetrance range; A person may or may not develop HD during their lifetime.

## intro.cag.legend.full
**40 or more**: Full-penetrance range. These repeat lengths are associated with developing HD during a typical lifespan.

## intro.cag.reading.typical
**Typical range.** Repeat lengths of 26 or fewer are not associated with HD.

## intro.cag.reading.intermediate
**Intermediate range.** Repeat lengths of 27–35 are not associated with HD in the carrier, but the repeat can expand when passed to a child.

## intro.cag.reading.reduced
**Reduced penetrance.** With 36–39 repeats, some people develop HD while others may not develop symptoms during their lifetime.

## intro.cag.reading.full
**Full penetrance.** With 40 or more repeats, HD is expected to develop during a typical lifespan, but the exact age of onset cannot be predicted from repeat length alone. Longer repeats are generally associated with earlier onset, although individual variation remains substantial.

## intro.pedigree.label
A family: two parents and their children

## intro.pedigree.carrier
carries an expanded HTT allele

## intro.pedigree.other
does not carry the expanded allele

## intro.pedigree.child.carrier
inherited the expanded allele

## intro.pedigree.child.other
did not inherit the expanded allele

## intro.pedigree.add
Another child

## intro.pedigree.reset
Start again

## intro.pedigree.none
No children yet. Each child has an independent 50% chance of inheriting the expanded allele.

## intro.pedigree.tally
**{k}** of **{n}** inherited the expanded gene.

## intro.pedigree.fresh
Each child has an independent 50% chance.

## intro.pedigree.runs
Previous outcomes do not change the next child’s 50% chance.

## intro.pedigree.note
The dot marks the expanded allele. The parent’s sex does not change the 50% inheritance probability, although repeat expansion during transmission can depend on which parent carries it.

## intro.lanes.label
Four research stages in the HD-ISS, illustrated using Alex’s timeline

## intro.lanes.birth
from birth

## intro.lanes.from
from {age}

## intro.lanes.reach
at {age}

## intro.lanes.quoted
"{name}"

## intro.lanes.l1
A biological change detected by MRI

## intro.lanes.l2
A clinical change measured by motor or cognitive assessment

## intro.lanes.l3
A measurable change in everyday function

## intro.lanes.gene
Carries an expanded HTT allele

## intro.lanes.at
At {age}:

## intro.lanes.stage0
Stage 0, genetic expansion

## intro.lanes.stage1
Stage 1, biological change

## intro.lanes.stage2
Stage 2, clinical signs

## intro.lanes.stage3
Stage 3, functional decline

## intro.lanes.formal
the staging paper's "{name}"

## intro.lanes.stage0.note
A research stage defined by the expanded gene, before the HD-ISS biological and clinical staging thresholds are met.

## intro.lanes.measured
Measured using the relevant HD-ISS landmarks: {putamen} or {caudate} on MRI; the {tms} or {sdmt}; and {tfc} or {is}. For each paired set of landmarks, meeting either threshold is sufficient for that criterion.

## intro.trial.label
One hundred people in a two-year trial

## intro.trial.guess
Your guess

## intro.trial.guess.valuetext
{n} of 100

## intro.trial.reveal
Reveal

## intro.trial.everyone
Everyone joins

## intro.trial.model
A model chooses

## intro.trial.tile.people
people in the trial

## intro.trial.tile.change
of them change

## intro.trial.tile.share
of the trial shows change

## intro.trial.read.reveal
**You guessed {guess}; in this illustration, the number is {n}.** Some participants show little measurable change over two years. Selecting participants more likely to change can make it easier to detect a treatment effect, depending on the trial design and outcome.

## intro.trial.read.model
**A greater chance of measurable change.** A prognostic model can select a smaller group expected to show more measurable change during the trial. This is one way to enrich a trial population, not a guarantee that a treatment effect will be detected.

## intro.trial.illustrative
Illustrative numbers, not trial data.

## intro.platform.title
What this site lets you do

## intro.models.prognostic.title
Prognostic enrichment

## intro.models.prognostic.body
Estimates the rate of lateral ventricular enlargement and the likelihood of fast progression from a single visit.

## intro.models.shape.title
Subcortical shape

## intro.models.shape.body
Explores detailed caudate and putamen shape features that may provide additional information about disease-related brain changes beyond overall volume.

## intro.models.brainage.title
Regional brain biological age

## intro.models.brainage.body
Estimates the difference between each brain region’s MRI-derived age estimate and chronological age.

## intro.platform.privacy
**The models are designed to run in your browser.** No individual research participant data are displayed. Example subjects are synthetic, and cohort summaries represent groups rather than individual participants.

## intro.support.title
If Huntington's disease is part of your life

## intro.support.body
Huntington's Australia, [huntingtonsaustralia.au](https://huntingtonsaustralia.au). Huntington's Disease Society of America, [hdsa.org](https://hdsa.org). Huntington's Disease Association, England and Wales, [hda.org.uk](https://www.hda.org.uk). Plain-language research news at [HDBuzz](https://en.hdbuzz.net).

## intro.glossary.title
Glossary

## intro.glossary.01.term
CAG repeat

## intro.glossary.01.def
A sequence of three DNA building blocks—cytosine, adenine and guanine—repeated in the HTT gene. The repeat length is reported by a genetic test.

## intro.glossary.02.term
Striatum

## intro.glossary.02.def
A group of deep brain structures that includes the caudate nucleus and putamen. These structures are particularly affected early in Huntington’s disease.

## intro.glossary.03.term
Lateral ventricles

## intro.glossary.03.def
Fluid-filled spaces within the brain that can enlarge as surrounding brain tissue loses volume.

## intro.glossary.04.term
CAP score

## intro.glossary.04.def
A research index combining age and CAG repeat length to estimate cumulative exposure associated with Huntington’s disease. The general form is: **CAP = β₁ × Age × (CAG − β₂)** where *Age* is age at assessment, *CAG* is the number of CAG repeats, and β₁ and β₂ are model-specific coefficients.

## intro.glossary.05.term
HD-ISS

## intro.glossary.05.def
The Huntington’s Disease Integrated Staging System, a research framework with four stages (0–3) defined by genetic, biological, clinical and functional criteria.

## intro.glossary.06.term
Landmark

## intro.glossary.06.def
A defined measurement used to determine whether a staging criterion has been met. Some HD-ISS stages use paired landmarks, for which meeting either threshold can satisfy the relevant criterion.

## intro.glossary.07.term
Cut-off

## intro.glossary.07.def
A threshold used to classify a measurement for staging. HD-ISS thresholds are defined by the staging framework and may be based on healthy-control data.

## intro.glossary.08.term
Total Motor Score

## intro.glossary.08.def
A clinician-rated assessment of motor signs in the Unified Huntington’s Disease Rating Scale. Higher scores generally indicate greater motor impairment.

## intro.glossary.09.term
Symbol Digit Modalities Test

## intro.glossary.09.def
A timed test in which participants match symbols with numbers. It measures aspects of processing speed and attention; lower scores generally indicate poorer performance.

## intro.glossary.10.term
Total Functional Capacity

## intro.glossary.10.def
A Unified Huntington’s Disease Rating Scale measure ranging from 0 to 13 that assesses work, finances, domestic activities, daily living and care needs. Higher scores indicate greater functional independence.

## intro.glossary.11.term
Fast progressor

## intro.glossary.11.def
A participant classified as a fast progressor according to the prognostic model’s definition. On this site, the threshold is ventricular enlargement exceeding 750 mm³ per year.

## intro.glossary.12.term
Enrichment

## intro.glossary.12.def
Selecting clinical-trial participants who are more likely to show measurable disease-related change, potentially improving the ability to detect a treatment effect.

## intro.sources
Sources. Prevalence: AIHW, Huntington's disease in Australia (2024); Rawlins et al. 2016; McColgan & Tabrizi 2018. Onset, signs and inheritance: Roos 2010, Orphanet J Rare Dis; Bates et al. 2015, Nat Rev Dis Primers; HDSA genetic testing protocol 2016. Testing uptake: Baig et al. 2016. Brain change before signs: Tabrizi et al. 2009; Scahill et al. 2020. Stages: Tabrizi et al. 2022, Lancet Neurol (HD-ISS). The brain's shapes come from an MRI atlas of one adult ("Brain for Blender", Anderson Winkler, CC BY-SA 3.0); every change shown is schematic and exaggerated. The onset ages on the repeat strip and the trial's numbers are illustrative, not data.
`,staging:`## staging.doctitle
Staging

## staging.credits
Staging content built from Tabrizi, Schobel et al., for the HD Regulatory Science Consortium, ‘A biological classification of Huntington’s disease: the Integrated Staging System’, Lancet Neurology 2022; values transcribed from the 2021 medRxiv preprint (CC BY-ND 4.0). Meshes: "Brain for Blender", Anderson Winkler, CC BY-SA 3.0. Icons: Health Icons, CC0. For research and teaching only; not medical advice.

## staging.sections.label
Sections

## staging.sections.source
**Staging** · Tabrizi, Schobel et al., Lancet Neurology 2022

## staging.sections.stages
Stages

## staging.sections.calculator
Calculator

## staging.hero.title
Huntington’s Disease Integrated Staging System

## staging.hero.lede
HD begins at birth with the gene. HD-ISS tracks what becomes detectable: a measurable brain change, then a clinical sign or symptom, then a change in function.

## staging.hero.timeline.label
Stage timeline

## staging.stage.label
Stage {n}

## staging.detail.detected
Detected by either landmark

## staging.detail.notices
What the person notices

## staging.stage0.name
Huntington’s disease

## staging.stage0.title
Huntington’s disease, no detectable change

## staging.stage0.condition
CAG ≥ 40

## staging.stage0.axis
CAG ≥ 40

## staging.stage0.criterion
Carries a fully penetrant HTT CAG expansion. No detectable biomarker, sign, symptom or functional change.

## staging.stage0.notices
Nothing. Only the test result is different.

## staging.stage1.name
Biomarker of pathogenesis

## staging.stage1.title
Biomarker of pathogenesis

## staging.stage1.condition
+ striatal atrophy

## staging.stage1.criterion
Putamen or caudate volume (head-size adjusted) below the control-based cut-off.

## staging.stage1.notices
Usually nothing.

## staging.stage2.name
Clinical sign or symptom

## staging.stage2.title
Clinical sign or symptom

## staging.stage2.condition
+ motor or cognitive sign

## staging.stage2.criterion
Total Motor Score above, or Symbol Digit Modalities Test below, the cut-off.

## staging.stage2.notices
A definite motor or cognitive sign or symptom, with no change in function yet.

## staging.stage3.name
Functional change

## staging.stage3.title
Functional change

## staging.stage3.condition
+ loss of function

## staging.stage3.criterion
Total Functional Capacity or Independence Scale below the cut-off.

## staging.stage3.notices
A change in functional ability, such as a change in job status or difficulty with activities of daily living.

## staging.severity.mild.label
Mild

## staging.severity.mild.text
Does not require assistance with routine activities, though they may be difficult and/or take a long time.

## staging.severity.mild.option
Mild – no assistance needed, activities may be slow or difficult

## staging.severity.moderate.label
Moderate

## staging.severity.moderate.text
Requires assistance with some routine activities.

## staging.severity.moderate.option
Moderate – assistance with some routine activities

## staging.severity.severe.label
Severe

## staging.severity.severe.text
Cannot perform any routine activities independently.

## staging.severity.severe.option
Severe – cannot perform any routine activity independently

## staging.severity.line
**{label}:** {text}

## staging.landmark.putamen.label
Putamen volume

## staging.landmark.putamen.short
Putamen

## staging.landmark.putamen.field
Putamen volume / ICV × 1000

## staging.landmark.caudate.label
Caudate volume

## staging.landmark.caudate.short
Caudate

## staging.landmark.caudate.field
Caudate volume / ICV × 1000

## staging.landmark.tms.label
Total Motor Score

## staging.landmark.tms.short
TMS

## staging.landmark.tms.field
Total Motor Score (0–124)

## staging.landmark.sdmt.label
Symbol Digit Modalities Test

## staging.landmark.sdmt.short
SDMT

## staging.landmark.sdmt.field
SDMT (correct in 90 s)

## staging.landmark.tfc.label
Total Functional Capacity

## staging.landmark.tfc.short
TFC

## staging.landmark.tfc.field
Total Functional Capacity (0–13)

## staging.landmark.is.label
Independence Scale

## staging.landmark.is.short
IS

## staging.landmark.is.field
Independence Scale (10–100)

## staging.calc.title
Classify a research visit

## staging.calc.lede
Enter an age, the CAG repeat length and any landmark values. Crossing either of a Stage’s two cut-offs meets that Stage; the Stage is the number met.

## staging.calc.citation
Cut-offs from Table 2 of Tabrizi, Schobel et al., HD-ISS preprint (medRxiv, 2021); published as *A biological classification of Huntington’s disease: the Integrated Staging System* (Lancet Neurology, 2022). Two rules are offered: the paper’s counting rule, where the Stage is the number of Stage conditions met, here allowing missing values; and the rule of the [Enroll-HD calculator](https://enroll-hd.org/calc/html_basic.htm), which needs a CAG of 40 or more and all six landmarks and classifies only Stages entered in order. Following that calculator, a Total Motor Score equal to the printed cut-off counts; the paper itself says a cut-off must be exceeded.

## staging.calc.presets.label
Load an example

## staging.calc.preset.s0
Stage 0 example

## staging.calc.preset.s1
Stage 1 example

## staging.calc.preset.s2
Stage 2 example

## staging.calc.preset.s3
Stage 3 example

## staging.calc.preset.nonseq
Non-sequential pattern

## staging.calc.preset.noimg
No imaging available

## staging.calc.preset.reduced
Reduced penetrance

## staging.calc.person
Person

## staging.calc.age
Age (years)

## staging.calc.cag
CAG repeat length

## staging.calc.education
Education, sets the SDMT cut-off

## staging.calc.education.high
More than high school

## staging.calc.education.low
High school or less

## staging.calc.group1
Stage 1 landmarks, volumetric MRI

## staging.calc.group2
Stage 2 landmarks, clinical

## staging.calc.group3
Stage 3 landmarks, function

## staging.calc.severity.label
Stage 3 descriptive grouping (optional)

## staging.calc.severity.none
Not specified

## staging.calc.submit
Classify

## staging.calc.clear
Clear landmark values

## staging.calc.rule.label
Staging rule

## staging.calc.rule.strict
Enroll-HD rule

## staging.calc.rule.count
Allow missing values

## staging.calc.rule.strict.note
A CAG of 40 or more and all six landmarks are needed. Only the patterns 000, 100, 110 and 111 have a Stage, as in the Enroll-HD calculator.

## staging.calc.rule.count.note
Missing landmarks are allowed, and a missing CAG is taken as 40 or more. The Stage is the number of Stage conditions met, as in the paper’s Methods; an out-of-order pattern is flagged. (The paper imputed missing values instead.)

## staging.calc.steps.toggle
Show me step by step

## staging.calc.empty.title
No result yet.

## staging.calc.empty.body
Load an example above, or enter an age, the CAG repeat length and any landmark values, then press **Classify**. The Stage, the conditions met and every landmark against its cut-off will appear here.

## staging.calc.nothing.title
Nothing to classify.

## staging.calc.nothing.body
No landmark has a value. Enter at least one, or load an example.

## staging.calc.error.age
Enter an age in whole years, from 1 to 120, to evaluate the landmarks.

## staging.calc.error.whole
{label} must be {min} to {max} in whole numbers.

## staging.calc.error.step
{label} must be {min} to {max} in steps of {step}.

## staging.calc.error.correct
Correct it to classify.

## staging.calc.error.missing
The Enroll-HD rule needs a CAG of 40 or more and all six landmarks. Missing: {fields}. Enter them, or switch to “Allow missing values”.

## staging.calc.verdict.kicker
HD-ISS

## staging.calc.verdict.nc
Not classifiable

## staging.calc.verdict.nc.name
Landmarks met out of order

## staging.calc.verdict.nc.body
Pattern {pattern}: stage 1 {s1}, stage 2 {s2}, stage 3 {s3}. The HD-ISS expects Stages to be entered in order; the Enroll-HD calculator reports this pattern as an error.

## staging.calc.verdict.reduced
No Stage

## staging.calc.verdict.reduced.name
Reduced-penetrance expansion

## staging.calc.verdict.reduced.body
The HD-ISS is defined for fully penetrant expansions of 40 or more CAG repeats. At {cag} repeats penetrance is reduced: some carriers never reach a clinical motor diagnosis (Figure 1B, dashed curves), and the Stage cut-offs were not fitted for them. The landmark values are kept but not staged.

## staging.calc.verdict.reduced.zero
Stage 0 is defined as “CAG ≥ 40 with no landmark beyond its cut-off”, so it cannot be assigned here either.

## staging.calc.word.met
met

## staging.calc.word.notmet
not met

## staging.calc.verdict.zero
CAG ≥ 40 with no landmark beyond its cut-off.

## staging.calc.verdict.count
Number of Stage conditions met: {n} of 3.

## staging.calc.verdict.bycount
Named by the number of conditions met, not by which were crossed

## staging.calc.verdict.severity
**{label} functional deficit.** {text}

## staging.calc.verdict.choose
Choose a descriptive grouping (mild / moderate / severe) in the form to annotate Stage 3.

## staging.calc.flag.incomplete
Incomplete: a Stage has no data, so a higher Stage cannot be ruled out

## staging.calc.flag.partial
Incomplete: a Stage is judged on one landmark because the other has no value, so that Stage could still be met

## staging.calc.flag.nonsequential
Non-sequential: a later Stage is met without an earlier one (13% of fully measured visits in the paper)

## staging.calc.flag.complete
Sequential, all landmarks evaluated

## staging.calc.flag.age
Age outside 20–90; nearest row used

## staging.calc.flag.nocag
No CAG entered: the result assumes a fully penetrant expansion, 40 or more

## staging.calc.cond.label
Stage {n} condition

## staging.calc.cond.unknown
Not evaluable (no data)

## staging.calc.cond.met
Met

## staging.calc.cond.notmet
Not met

## staging.calc.cond.partial
Not met on one landmark; the other has no value

## staging.calc.table.landmark
Landmark

## staging.calc.table.value
Value

## staging.calc.table.cutoff
Cut-off at {age}

## staging.calc.table.status
Status

## staging.calc.table.stage
Stage {n}, {name}

## staging.calc.table.sdmt.low
(≤ HS)

## staging.calc.table.sdmt.high
(> HS)

## staging.calc.status.met
Met

## staging.calc.status.notmet
Not met

## staging.calc.status.nodata
no value

## staging.calc.dir.below
below

## staging.calc.dir.above
above

## staging.calc.dir.atorabove
at or above

## staging.calc.step.age
We start from the **age**. At {age} the cut-offs are read from Table 2{interp}. SDMT uses the {column} column.

## staging.calc.step.age.interp
(interpolated between the nearest five-year rows)

## staging.calc.step.column.low
“high school or less”

## staging.calc.step.column.high
“more than high school”

## staging.calc.step.novalue
**{label}**: no value entered, so this landmark cannot count either way.

## staging.calc.step.met
**{label}** is {value}. The cut-off at {age} is {cutoff}, and the landmark counts when the value is *{dir}* it. **{value} is {dir} {cutoff}, so the Stage {stage} condition is met.**

## staging.calc.step.notmet
**{label}** is {value}. The cut-off at {age} is {cutoff}, and the landmark counts when the value is *{dir}* it. {value} is not {dir} {cutoff}, so this landmark does not count.

## staging.calc.step.cond.unknown
**Stage {stage} condition:** not evaluable, because neither landmark has a value.

## staging.calc.step.cond.met
**Stage {stage} condition:** met, because at least one of its two landmarks crossed the line (either is enough).

## staging.calc.step.cond.notmet
**Stage {stage} condition:** not met, because neither landmark crossed the line.

## staging.calc.step.cond.partial
**Stage {stage} condition:** not met on the landmark that has a value. The other landmark has no value, so this condition could still be met.

## staging.calc.step.final
Count the conditions met: {n}. That is **HD-ISS Stage {n}**{nonsequential}{incomplete}{partial}.

## staging.calc.step.final.nonsequential
, but the pattern is non-sequential, which the authors treat with caution

## staging.calc.step.final.incomplete
, with at least one condition unknown

## staging.calc.step.final.partial
, with at least one condition judged on a single landmark

## staging.calc.step.strict
Under the Enroll-HD rule, all six landmarks are evaluated and the pattern of conditions met is {pattern}, one of the four ordered patterns, so the stage is **HD-ISS Stage {n}**.

## staging.calc.step.next
Next step

## staging.calc.step.back
Back

## staging.calc.step.all
Show all

## staging.calc.paper.summary
How this follows the paper

## staging.calc.paper.body
A Stage is met when either of its two landmarks is beyond its cut-off; the Stage is the number met (Methods). Cut-offs between the five-year rows of Table 2 are interpolated here, an approximation of the paper’s yearly table in its supplement. “Beyond” is strict, as the paper says, except that a Total Motor Score equal to the printed cut-off counts, as in the Enroll-HD calculator. Missing landmarks are allowed under the counting rule, where the paper imputed them. Ages outside 20–90 use the nearest row. Not a diagnosis.

## staging.picto.putamen.alt
Putamen, left and right, rendered from a FreeSurfer segmentation

## staging.picto.caudate.alt
Caudate, left and right, rendered from a FreeSurfer segmentation

## staging.picto.or
or

## staging.sections.life
One life

## staging.sections.nh
Natural history

## staging.sections.figures
Figures

## staging.chart.tip.age
Age {age}

## staging.chart.axis.age
Age (years)

## staging.chart.axis.age.short
Age

## staging.life.title
Watch the stages unfold: {name}, {cag} CAG repeats

## staging.life.lede
Three fictional carriers. Scroll the steps to follow one life, or drag the age. Every value goes through the same calculator as below, against the paper’s cut-offs.

## staging.life.carriers.label
Choose a carrier

## staging.life.carrier.heading
{name}, {cag}

## staging.life.carrier.cag
CAG {cag}

## staging.life.carrier.c40.name
Sam

## staging.life.carrier.c40.note
Shorter repeat: transitions at {t1}, {t2} and {t3}.

## staging.life.carrier.c42.name
Alex

## staging.life.carrier.c42.note
The reference carrier: transitions at {t1}, {t2} and {t3}.

## staging.life.carrier.c45.name
Jo

## staging.life.carrier.c45.note
Longer repeat: transitions at {t1}, {t2} and {t3}, and closer together.

## staging.life.age.label
Age

## staging.life.slider.label
Move through the years

## staging.life.slider.valuetext
Age {age}

## staging.life.tick
Stage {n} at {age}

## staging.life.play
Play

## staging.life.pause
Pause

## staging.life.steps.label
Steps through one life

## staging.life.strip.label
Current Stage: Stage {n}

## staging.life.step.age
Age {age}

## staging.life.step.first.title
{name} at {age}

## staging.life.step.first.text
{name} carries {cag} CAG repeats, so by definition has HD. Every measurement is inside the healthy range. Scroll to move through the years.

## staging.life.step.opens.title
Stage {n} begins: {label} crosses its cut-off

## staging.life.step.second.title
{label} crosses its cut-off

## staging.life.step.second.text
The second landmark of Stage {n} also crosses. The Stage was already met; the paper needs only one of the two.

## staging.life.step.last.title
{name} at {age}

## staging.life.step.last.text
Stage 3 can last decades. Drag the age or choose another carrier to see how CAG length moves every transition.

## staging.life.story.s0.title
Stage 0: carrying the expansion

## staging.life.story.s0.text
{name} has {cag} CAG repeats, so by the HD-ISS definition {name} has Huntington’s disease from birth. Nothing is detectable yet: striatal volumes, motor score, processing speed and daily function all sit inside the healthy range for this age.

## staging.life.story.s1.title
Stage 1: a biomarker changes

## staging.life.story.s1.text
The putamen has shrunk past the 5% tail of same-age controls. {name} feels nothing different and would not be diagnosed in clinic, but the underlying process is now measurable. In research terms the prognosis has changed.

## staging.life.story.s2.title
Stage 2: a clinical sign appears

## staging.life.story.s2.text
The Total Motor Score has crossed its cut-off: a definite motor sign is now detectable on examination, while function is unchanged. The cognitive landmark, SDMT, follows some years later.

## staging.life.story.s3.title
Stage 3: function changes

## staging.life.story.s3.text
Total Functional Capacity falls below its cut-off and, two years later, the Independence Scale follows. Functional ability has changed, such as job status or activities of daily living. Stage 3 can last decades and is described as mild, moderate or severe.

## staging.life.just.none
No landmark has crossed its cut-off yet.

## staging.life.just.first
The first to cross will be the putamen, at {age}.

## staging.life.just.crossed
Crossed so far: {list}.

## staging.life.just.next
Next transition at {age}.

## staging.life.just.last
No further transitions before {age}.

## staging.life.spark.vs
vs cut-off

## staging.life.spark.cutoff
Cut-off

## staging.life.spark.aria
{label} of a fictional carrier against the cut-off

## staging.life.log.title
Transition log

## staging.life.log.item
**Age {age}**: {label} crosses its cut-off

## staging.life.log.item.opens
**Age {age}**: {label} crosses its cut-off, entering **Stage {n}**

## staging.life.typical.title
How typical is this age for this Stage?

## staging.life.typical.note
Schematic model: about {p}% of CAG {cag} carriers are in Stage {n} at {age}.

## staging.life.table.landmark
Landmark

## staging.life.table.value
Value vs cut-off

## staging.life.table.status
Status

## staging.life.table.stage.met
Stage {n}: met

## staging.life.table.stage.notmet
Stage {n}: not met

## staging.life.table.crossed
crossed

## staging.life.table.inside
inside range

## staging.life.send
Send {name} at age {age} to the calculator

## staging.life.badge
Fictional

## staging.life.note
Not patients, not predictions. Real people cross each landmark at widely varying ages, even at the same CAG length.

## staging.nh.title
Longer repeats: earlier transitions, and faster ones

## staging.nh.lede
Probability of being in each Stage by age, for one CAG length at a time.

## staging.nh.slider.label
CAG repeat length (40–50, the range the paper models)

## staging.nh.slider.valuetext
{cag} CAG repeats

## staging.nh.play
Sweep 40 → 50

## staging.nh.pause
Pause

## staging.nh.cag.label
CAG

## staging.nh.strip
CAG = {cag}

## staging.nh.chart.aria
Schematic probability of being in each HD-ISS Stage by age for CAG {cag}

## staging.nh.chart.title
In-Stage probability by age, CAG {cag} (schematic)

## staging.nh.chart.y
In-Stage probability

## staging.nh.fixed.label
Fixed comparison panels for CAG 40, 42 and 50

## staging.nh.fixed.cag
CAG {cag}

## staging.nh.fixed.by
Stage 3 by {age}

## staging.nh.fixed.aria
Schematic in-Stage probability by age for CAG {cag}

## staging.nh.fixed.series
S{n}

## staging.nh.fixed.legend
S{n} Stage {n}

## staging.nh.read.left
Half have left Stage 0

## staging.nh.read.s2
Half have reached Stage 2

## staging.nh.read.s3
Half have reached Stage 3

## staging.nh.read.years
years

## staging.nh.read.years.after
years · {d} y after leaving Stage 0

## staging.nh.badge
Schematic

## staging.nh.note
A three-transition logistic model fitted by eye to the paper’s panels, not the authors’ estimates.

## staging.fig.eyebrow
Traced from Figures 1, 3 and 5

## staging.fig.title
Penetrance, landmark crossing, and the CAG 42 overview

## staging.fig.lede
These figures were published as images only. They are traced here so you can hover and read them; crossing ages are within about two years.

## staging.fig.badge
Traced

## staging.fig.note
Approximate; quote the paper’s figures for numbers. Confidence ribbons are omitted.

## staging.fig.f1b.title
Figure 1B. Probability of clinical motor diagnosis by age and CAG

## staging.fig.f1b.cap
Modelled probability of clinical motor diagnosis by age, one curve per CAG. Solid curves reach 1 by about the 82-year reference (full penetrance); dashed curves for 38 and 39 do not (reduced penetrance).

## staging.fig.f1b.aria
Traced Figure 1B: probability of DCL 4 by age for CAG 38 to 43

## staging.fig.f1b.svgtitle
Figure 1B (traced)

## staging.fig.f1b.y
Probability of DCL = 4

## staging.fig.f1b.series
CAG {cag}

## staging.fig.f1b.series.reduced
CAG {cag} (reduced)

## staging.fig.f1b.reference
Life expectancy {age}

## staging.fig.f3.title
Figure 3. Assessment and Stage progression curves, CAG = 42

## staging.fig.f3.cap
Probability of crossing each landmark cut-off (lines) and of meeting each Stage condition (symbols), by age. Each symbol curve sits left of its two lines because either landmark is enough.

## staging.fig.f3.aria
Traced Figure 3: probability of crossing each landmark cut-off and each Stage condition by age, CAG 42

## staging.fig.f3.svgtitle
Figure 3 (traced)

## staging.fig.f3.y
Probability

## staging.fig.f3.putamen
Putamen

## staging.fig.f3.caudate
Caudate

## staging.fig.f3.tms
TMS

## staging.fig.f3.sdmt
SDMT (avg)

## staging.fig.f3.sdmtlow
SDMT ≤ HS

## staging.fig.f3.sdmthigh
SDMT > HS

## staging.fig.f3.tfc
TFC

## staging.fig.f3.is
IS

## staging.fig.f3.cond1
Stage 1: Putamen or Caudate

## staging.fig.f3.cond2
Stage 2: TMS or SDMT

## staging.fig.f3.cond3
Stage 3: TFC or IS

## staging.fig.f5.title
Figure 5. Overview of the HD-ISS for CAG = 42

## staging.fig.f5.cap
Stage probabilities, then the predicted mean of each landmark by age. Dashed lines mark the ages at which the paper’s figure shows each Stage’s probability at 0.50: {a0}, {a1}, {a2} and {a3} years. Panel A is drawn from the schematic model, so its curves need not reach 0.50 at those ages.

## staging.fig.f5.a.strip
A. In-Stage probability (schematic model, see Natural history)

## staging.fig.f5.b.strip
B. Striatal volume ÷ intracranial volume (× 1000)

## staging.fig.f5.c.strip
C. Clinical score: Total Motor Score and SDMT

## staging.fig.f5.d.strip
D. Functioning: Total Functional Capacity and Independence Scale ÷ 10

## staging.fig.f5.a.aria
Figure 5A: in-Stage probability by age, CAG 42, from the schematic model

## staging.fig.f5.b.aria
Traced Figure 5B: putamen and caudate volume by age, CAG 42

## staging.fig.f5.c.aria
Traced Figure 5C: TMS and SDMT by age, CAG 42

## staging.fig.f5.d.aria
Traced Figure 5D: TFC and IS by age, CAG 42

## staging.fig.f5.a.svgtitle
Figure 5A (schematic)

## staging.fig.f5.b.svgtitle
Figure 5B (traced)

## staging.fig.f5.c.svgtitle
Figure 5C (traced)

## staging.fig.f5.d.svgtitle
Figure 5D (traced)

## staging.fig.f5.a.y
Probability

## staging.fig.f5.b.y
Volume / ICV ×1000

## staging.fig.f5.c.y
Clinical score

## staging.fig.f5.d.y
Functioning

## staging.fig.f5.putamen
Putamen

## staging.fig.f5.caudate
Caudate

## staging.fig.f5.tms
TMS

## staging.fig.f5.sdmthigh
SDMT, > HS

## staging.fig.f5.sdmtlow
SDMT, ≤ HS

## staging.fig.f5.tfc
TFC

## staging.fig.f5.is
IS ÷ 10

## staging.fig.f5.legend.sdmthigh
SDMT > HS

## staging.fig.f5.legend.sdmtlow
SDMT ≤ HS

## staging.fig.f5.legend.half
Paper: Stage {n} P = 0.50 at {age}

## staging.striatum.title.default
The striatum at each Stage

## staging.striatum.title.life
The striatum in Stage {n}: {name} at {age}

## staging.striatum.modes.label
View mode

## staging.striatum.mode.3d
3D

## staging.striatum.mode.coronal
Coronal

## staging.striatum.mode.axial
Axial

## staging.striatum.mode.sagittal
Sagittal

## staging.striatum.mode.compare
Compare with age 20

## staging.striatum.stage.aria
Three-dimensional model of the subcortical structures; the caudate and putamen shrink with the carrier’s volumes and the ventricles enlarge. Modes: rotatable 3D, coronal, axial and sagittal cuts, and a side-by-side comparison with age 20.

## staging.striatum.canvas.aria
Rotatable model of the subcortical structures; arrow keys rotate, plus and minus zoom

## staging.striatum.canvas.aria.cut
Cut through the model of the subcortical structures

## staging.striatum.webgl.note
The 3D view needs WebGL, which this browser has turned off. Showing a still image instead.

## staging.striatum.still.alt
Still rendering of the brain model at the default view

## staging.striatum.load
Load the 3D model (about 2 MB)

## staging.striatum.loading
Loading the 3D model…

## staging.striatum.tag.before
Age 20

## staging.striatum.tag.after
Now

## staging.striatum.tag.life
{name} at {age}

## staging.striatum.badge.base
Age-20 size

## staging.striatum.badge.changed
Caudate {c}% · Putamen {p}%

## staging.striatum.caption.still
Still image of the model at the default view. The live model loads on wide screens, or when you press the button.

## staging.striatum.caption.3d
Drag to rotate. Move the age to see what is lost after 20.

## staging.striatum.caption.3d.lost
Drag to rotate. The red rim is the volume lost since age 20.

## staging.striatum.caption.compare.default
Left: age 20. Right: now. Drag either half to rotate both.

## staging.striatum.caption.compare
Left: age 20. Right: {name} now. The red rim is the volume lost since age 20. Drag either half to rotate both.

## staging.striatum.caption.compare.same
Left: age 20. Right: {name} now. {name} is {age}, the same as the left. Move the age to see the change.

## staging.striatum.caption.coronal
Coronal cut, y = {mm} mm; viewed from the front, patient’s right on the left.

## staging.striatum.caption.axial
Axial cut, z = {mm} mm; viewed from above, anterior up.

## staging.striatum.caption.sagittal
Sagittal cut through the left striatum, x = {mm} mm; viewed from the left.

## staging.striatum.more.summary
Model controls and volumes

## staging.striatum.presets.label
Camera presets

## staging.striatum.preset.front
Front

## staging.striatum.preset.left
Left side

## staging.striatum.preset.top
Top

## staging.striatum.preset.oblique
Oblique

## staging.striatum.groups.label
Structures shown

## staging.striatum.group.caudate
Caudate

## staging.striatum.group.putamen
Putamen

## staging.striatum.group.pallidum
Globus pallidus

## staging.striatum.group.thalamus
Thalamus

## staging.striatum.group.ventricle
Lateral ventricles

## staging.striatum.group.hippocampus
Hippocampus

## staging.striatum.group.amygdala
Amygdala

## staging.striatum.group.accumbens
Accumbens

## staging.striatum.group.brainstem
Brainstem

## staging.striatum.group.cortex
Cortex

## staging.striatum.reset
Reset view

## staging.striatum.readout.caudate
Caudate (L+R)

## staging.striatum.readout.putamen
Putamen (L+R)

## staging.striatum.readout.ventricle
Lateral ventricles

## staging.striatum.readout.unit
cm³

## staging.striatum.readout.from
from {v0} ({pct}%)

## staging.striatum.readout.base
(age-20 size)

## staging.striatum.figcaption
FreeSurfer segmentation of one adult brain (Anderson Winkler, CC BY-SA 3.0). The caudate and putamen scale with the fictional carrier’s recorded volumes and the ventricles widen as they shrink; the cm³ figures are this model brain’s volumes, scaled by the same change.
`,prognostic:`## prognostic.doctitle
Prognostic enrichment

## prognostic.title
How fast will the ventricles enlarge?

## prognostic.lede
Two random forests read one baseline visit and say how fast an individual’s lateral ventricles will enlarge.

## prognostic.bar.source
**Prognostic enrichment** · Ghofrani-Jahromi et al., NeuroImage: Clinical 2024

## prognostic.contents.label
On this page

## prognostic.contents.watch
Watch the study

## prognostic.contents.watch.note
· 1 min

## prognostic.contents.how
How the forests decide

## prognostic.contents.how.note
· {total} chapters

## prognostic.contents.try
Try it on an individual

## prognostic.contents.try.note
· the tool

## prognostic.paper.title
The paper in one minute

## prognostic.paper.summary
Read the six steps as text

## prognostic.paper.poster
Play the study

## prognostic.paper.poster.sub
Six steps · about a minute

## prognostic.paper.citeshort
Ghofrani-Jahromi et al., NeuroImage: Clinical 2024

## prognostic.paper.cite
Ghofrani-Jahromi M, Poudel GR, Razi A, Abeyasinghe PM, Paulsen JS, Tabrizi SJ, Saha S, Georgiou-Karistianis N. Prognostic enrichment for early-stage Huntington’s disease: an explainable machine learning approach for clinical trial. NeuroImage: Clinical 2024;43:103650.

## prognostic.paper.source
Source: {cite}

## prognostic.paper.credits
The study logos identify the TRACK-HD, TrackOn-HD and PREDICT-HD studies, whose participants the paper drew on.

## prognostic.paper.broken
The animation could not be drawn ({detail}). Its six steps are in the text below, and the rest of the page works without it.

## prognostic.paper.table.caption
Mean absolute error of the predicted enlargement rate, mm³ per year, as feature groups are added (this site’s reproduction of the paper’s Fig. 2)

## prognostic.paper.table.model
Model

## prognostic.paper.table.adds
Adds

## prognostic.paper.table.train
Training

## prognostic.paper.table.cv
Cross-validation

## prognostic.paper.table.test
Unseen test

## prognostic.paper.1.label
Aim

## prognostic.paper.1.head
The same gene, very different speeds

## prognostic.paper.1.sub
A trial of a slowing treatment needs individuals whose brains will change during the trial. Can we tell in advance who they are?

## prognostic.paper.1.note
Schematic.

## prognostic.paper.2.label
Data

## prognostic.paper.2.head
451 gene carriers from four studies

## prognostic.paper.2.sub
TRACK-HD, TrackOn-HD, PREDICT-HD and IMAGE-HD followed participants with repeated MRI scans and clinical assessments.

## prognostic.paper.3.label
Target

## prognostic.paper.3.head
A series of scans becomes one number

## prognostic.paper.3.sub
As brain tissue is lost, the fluid-filled lateral ventricles widen. The slope of their volume over about three years is one individual’s enlargement rate.

## prognostic.paper.3.note
Schematic: the enlargement is exaggerated and the volumes are illustrative.

## prognostic.paper.4.label
Spread

## prognostic.paper.4.head
That rate differs widely between individuals

## prognostic.paper.4.sub
Even at the same prognostic index used in trials today, rates run from about 100 to 3,000 mm³ per year.

## prognostic.paper.4.note
Dots are this site’s synthetic individuals. A, B and C are illustrative.

## prognostic.paper.4.nocast
The synthetic individuals could not be loaded. A, B and C are illustrative.

## prognostic.paper.5.label
Model

## prognostic.paper.5.head
Predicting that rate from one visit

## prognostic.paper.5.sub
A random forest gets one more group of features at each step. Its cross-validated error falls by {drop}% from the first model to the last, most of it once MRI measures are in.

## prognostic.paper.5.note
Error values are this site’s reproduction of Fig. 2.

## prognostic.paper.6.label
Result

## prognostic.paper.6.head
Sorting moderate from fast progressors

## prognostic.paper.6.sub
A second forest separates the two groups at 750 mm³ per year with 81% cross-validated accuracy, so trials can recruit the individuals most likely to change.

## prognostic.paper.6.note
Schematic.

## prognostic.paper.l.carriers
Individuals carrying the HD gene expansion

## prognostic.paper.l.change
Brain change over the next 3 years

## prognostic.paper.l.baseline
Baseline

## prognostic.paper.l.years3
3 years

## prognostic.paper.l.fastest
fastest

## prognostic.paper.l.slowest
slowest

## prognostic.paper.l.studies
Four observational studies

## prognostic.paper.l.study.track
TRACK-HD

## prognostic.paper.l.study.trackon
TrackOn-HD

## prognostic.paper.l.study.predict
PREDICT-HD

## prognostic.paper.l.study.image
IMAGE-HD

## prognostic.paper.l.expansion
HD gene-expansion carriers

## prognostic.paper.l.followed
followed for about 3 years

## prognostic.paper.l.premanifest
premanifest

## prognostic.paper.l.diagnosed
diagnosed

## prognostic.paper.l.scans
Repeated MRI scans,

## prognostic.paper.l.measures
plus genetic, cognitive and motor measures

## prognostic.paper.l.onescans
One individual’s MRI scans

## prognostic.paper.l.volume
Lateral ventricle volume, mm³

## prognostic.paper.l.ventricles
Lateral ventricles

## prognostic.paper.l.year1
Year 1

## prognostic.paper.l.year2
Year 2

## prognostic.paper.l.year3
Year 3

## prognostic.paper.l.oneyear
1 year

## prognostic.paper.l.mm3
mm³

## prognostic.paper.l.slope
Slope of the fitted line

## prognostic.paper.l.peryear
mm³ per year

## prognostic.paper.l.three
Three individuals, same prognostic index

## prognostic.paper.l.ratelog
Enlargement rate, mm³ per year (log scale)

## prognostic.paper.l.pin
Prognostic index at baseline (PIN)

## prognostic.paper.l.stage
HD-ISS stage

## prognostic.paper.l.range
100 to 3,000

## prognostic.paper.l.features
Baseline features, added in turn

## prognostic.paper.l.f1
CAP score

## prognostic.paper.l.f2
Cognitive scores

## prognostic.paper.l.f3
Total motor score

## prognostic.paper.l.f4
WM hypointensities

## prognostic.paper.l.f5
Subcortical volumes

## prognostic.paper.l.f6
Ventricular volumes

## prognostic.paper.l.f7
Cortical morphometry

## prognostic.paper.l.trials
used in trials today

## prognostic.paper.l.mri
from MRI

## prognostic.paper.l.forest
Random forest

## prognostic.paper.l.trees
300 trees

## prognostic.paper.l.error
Prediction error (mean absolute), mm³ per year

## prognostic.paper.l.test
Unseen test

## prognostic.paper.l.cv
Cross-validation

## prognostic.paper.l.train
Training

## prognostic.paper.l.base
genetic, cognitive, motor

## prognostic.paper.l.plusmri
plus MRI measures

## prognostic.paper.l.visit
One baseline visit per individual

## prognostic.paper.l.classifier
Random forest classifier

## prognostic.paper.l.accuracy
cross-validated accuracy

## prognostic.paper.l.fast
Fast progressors

## prognostic.paper.l.above
above 750 mm³ per year

## prognostic.paper.l.moderate
Moderate progressors

## prognostic.paper.l.below
below 750 mm³ per year

## prognostic.paper.l.prioritise
Prioritise for trials

## prognostic.story.eyebrow
How the forests decide · {total} chapters

## prognostic.story.title
Inside a random forest

## prognostic.story.lede
Scroll, and the figure marks the individual chosen in the tool above.

## prognostic.story.title.1
The ventricles enlarge as Huntington’s disease progresses

## prognostic.story.text.1
Each dot is one synthetic individual, drawn from population statistics of the PREDICT, TRACK and IMAGE cohorts and coloured by HD-ISS stage. Deep in the brain, the lateral ventricles are fluid-filled spaces; as tissue is lost they grow. Keep scrolling and every dot rises by three years of enlargement, faster at later stages. That rate is what the model predicts from one baseline visit.

## prognostic.story.cap.1
Each dot is a synthetic individual generated from population statistics; none is a real participant. Colour is HD-ISS stage. Trails show three years of enlargement.

## prognostic.story.title.2
Rates spread widely within every stage

## prognostic.story.text.2
Line the same individuals up by their rate and the stages overlap almost completely. Some ventricles barely change; others enlarge by thousands of cubic millimetres a year. The paper draws the line at 750 mm³ per year. Above it, a fast progressor, shown in red throughout this page. Below it, moderate, shown in blue.

## prognostic.story.cap.2
The same individuals lined up by their 3-year enlargement rate, one row per stage, log scale. The dashed line is 750 mm³ per year; ringed dots are fast progressors.

## prognostic.story.title.3
One tree learns one question at a time

## prognostic.story.text.3
A decision tree begins by trying every possible cut through the population and keeping the one that best separates moderate from fast enlargement. Watch the candidate line sweep the map and the error curve find its lowest point at CAG {cut}. Then the tree repeats the search on each side, cutting by ventricle volume, until every region has a rate. This tree is grown here, on the synthetic individuals, to show the rule; it is not one of the model’s trees. The highlighted path is the one the current individual takes.

## prognostic.story.cap.3
The tree searches for the cut with the lowest error, then repeats on each side. Then everyone streams down the tree into its leaves. Hover a dot to trace its path, or hover any node or leaf to see the route to it and everyone who takes it; click or tap to keep it.

## prognostic.story.title.4
Three hundred trees vote

## prognostic.story.text.4
Each tree was trained on a different random subset of participants and features, so each gives a slightly different answer. The prediction is their average. For the highlighted individual the votes appear one by one. Across the cohort that average is out by about 530 mm³ per year, and it is pulled toward the middle: the slowest progressors are predicted faster than they turn out to be, the fastest slower. How far the trees disagree is the model’s own uncertainty.

## prognostic.story.cap.4
Every synthetic individual: the forest’s prediction against a simulated outcome, the prediction scattered by the spread the model showed on held-out real participants; no dot is a real person’s measured rate. The ticks under the axis are the marked dot’s tree votes, each at its own prediction. Points lie above the diagonal at the low end and below it at the high end, which is the pull toward the middle.

## prognostic.story.title.5
Two forests, two questions

## prognostic.story.text.5
One tree would memorise the participants it saw. So each tree is grown on a random resample of the cohort, some participants drawn twice, others left out, and at every split it may only look at a random handful of feature groups. Three hundred such trees answer “how fast?” and their average is the rate. Two hundred more answer “faster than 750?” and the share saying yes is the probability.

## prognostic.story.cap.5
How one tree is built, shown on 150 invented individuals so every step is visible: the draw with replacement, the features that tree may use, and the tree those two produce. Red dots are above 750 mm³ per year. The forest counts at the bottom are the real model answering about the current individual.

## prognostic.story.title.6
A probability says more than a stage

## prognostic.story.text.6
Sort the same individuals by stage and look at the model’s probability of fast progression: within each stage it spreads widely. Keep scrolling and the axis switches to the standard prognostic index, PIN, which follows the stage far more closely: two thirds of its variation lies between stages, against half for the probability. That is the point. The probability carries information the stage does not, which is what a trial needs when choosing who to enrol.

## prognostic.story.cap.6
The same individuals by HD-ISS stage. Boxes are the cohort’s quartiles; the dots are the synthetic individuals. The vertical axis is the model’s probability, then PIN. The marked dot is the current individual, in its own stage when one is known and between the columns when it is not, because stage is not a model input.

## prognostic.story.cta
Try it with this individual

## prognostic.story.cut.pending
…

## prognostic.story.failed
The story’s figure could not be loaded ({detail}). The chapters read on without it.

## prognostic.story.broken
The story could not be drawn ({detail}). The tool above works without it.

## prognostic.story.progress
Chapter {n} of {total}

## prognostic.story.after3y
after 3 years

## prognostic.story.axis.1
Lateral ventricle volume at baseline, ‰ of intracranial volume, against age

## prognostic.story.axis.1.short
Ventricle volume (‰) against age

## prognostic.story.axis.1.x
Age at scan, years

## prognostic.story.axis.2
3-year enlargement rate, mm³ per year, log scale, one row per stage

## prognostic.story.axis.2.short
Enlargement rate, mm³ per year, log scale

## prognostic.story.axis.3.x
CAG repeat length

## prognostic.story.axis.3.y
Ventricles, ‰

## prognostic.story.axis.4
Simulated enlargement rate (up) against the forest’s prediction (across), mm³ per year

## prognostic.story.axis.4.short
Simulated rate (up) against prediction (across)

## prognostic.story.label.above
{threshold}: {pct} % are above it

## prognostic.story.label.search
Searching for the best cut

## prognostic.story.label.teaching
A teaching tree grown on these individuals, and its cuts on the map

## prognostic.story.label.error
Error of the cut, sweeping {feature}

## prognostic.story.label.mean
mean {v}

## prognostic.story.label.lowest
lowest at {t}

## prognostic.story.label.cut
{feature} ≤ {t}

## prognostic.story.label.leaf
leaf: {v} mm³ per year

## prognostic.story.label.yes
yes

## prognostic.story.label.no
no

## prognostic.story.label.route
{n} of {total} individuals reach this point; {fast} of them were fast progressors

## prognostic.story.label.says
CAG {cag}, ventricles {lv} ‰: this tree says {v} mm³ per year

## prognostic.story.label.says.short
this tree says {v} mm³ per year

## prognostic.story.label.sorted
All {n} sorted: the leaves match what happened for {pct} % of them

## prognostic.story.label.votes
{n} of {total} votes

## prognostic.story.label.votes.open
{n} of {total} votes, outcome unknown

## prognostic.story.label.corners
{threshold} on both axes: the corners are the model’s mistakes

## prognostic.story.label.corners.short
{threshold}: the corners are the mistakes

## prognostic.story.label.illus
{total} invented individuals

## prognostic.story.label.draw
Tree {n}’s draw from {total} invented individuals

## prognostic.story.label.drawn
{in} of {total} drawn, {rep} more than once, {out} left out

## prognostic.story.label.drawnote
each tree draws its own {total}, with replacement

## prognostic.story.label.features
Features this tree may split on

## prognostic.story.label.tree
The tree it grows from them

## prognostic.story.label.leafnote
leaves hold the mean rate of the individuals that reach them

## prognostic.story.label.forest
Now the real forest: {n} of {total} rate trees

## prognostic.story.label.share
Faster than {threshold}? {n} of {total} votes counted

## prognostic.story.label.share.done
Faster than {threshold}? {yes} of {total} say yes, {pct} %

## prognostic.story.label.prob
Probability of fast progression by HD-ISS stage

## prognostic.story.label.pin
Prognostic index, PIN, by HD-ISS stage

## prognostic.story.label.nostage
stage unknown

## prognostic.story.feat.vent
Ventricles

## prognostic.story.feat.motor
Motor score

## prognostic.story.feat.caud
Caudate

## prognostic.story.feat.age
Age

## prognostic.story.feat.cap
CAP

## prognostic.story.feat.sdmt
SDMT

## prognostic.story.feat.cag
CAG

## prognostic.story.feat.lv
Ventricles ‰

## prognostic.input.age
Age at scan

## prognostic.input.cag
CAG repeat length

## prognostic.input.tms
Total motor score

## prognostic.input.sdmt
Symbol digit modalities

## prognostic.input.lv
Lateral ventricles

## prognostic.input.caudate
Caudate

## prognostic.input.putamen
Putamen

## prognostic.input.wm
White-matter hypointensities

## prognostic.verdict.fast
More likely a fast progressor

## prognostic.verdict.moderate
More likely a moderate progressor

## prognostic.verdict.mid
Too close to call

## prognostic.ladder.cfg
Feature configuration

## prognostic.ladder.note
Running configuration {name}: {features} features, cross-validated error {mae} mm³ per year. The served default is {served}; its cortical block and leaf setting are still to be confirmed with the authors.

## prognostic.ladder.loading
Loading configuration {name}…

## prognostic.ladder.failed
Configuration {name} did not load: {detail}

## prognostic.models.title
About these models

## prognostic.models.lede
Two random forests share one feature vector. The first predicts the rate; the second decides fast or moderate at 750. Both were trained once per feature configuration, each adding feature groups along the paper's ladder.

## prognostic.models.reg
Rate model

## prognostic.models.reg.text
{trees} trees. Cross-validated error ± {mae} mm³ per year, R² {r2}, on {rows} training rows.

## prognostic.models.clf
Stratification model

## prognostic.models.clf.text
{trees} trees, at least 10 people per leaf. Cross-validated accuracy {acc} %, precision {prec} %, recall {rec} % at 750 mm³ per year.

## prognostic.ladder.label
Cross-validated error for every feature configuration

## prognostic.ladder.ytitle
Mean absolute error, mm³ per year

## prognostic.ladder.paper
The paper’s ladder

## prognostic.ladder.site
Added by this site

## prognostic.ladder.legend.test
Held-out test

## prognostic.ladder.legend.cv
Cross-validation

## prognostic.ladder.legend.train
Training

## prognostic.prov.model
Model

## prognostic.prov.model.value
prognostic {version}, provisional

## prognostic.prov.trained
Trained

## prognostic.prov.trained.value
{date}, scikit-learn {sklearn}, ONNX {onnx}

## prognostic.prov.groups
Feature groups

## prognostic.prov.groups.value
{enabled} of {total} enabled, pending confirmation

## prognostic.prov.imputation
Imputation

## prognostic.prov.imputation.value
Nearest neighbours in training, cohort medians here

## prognostic.prov.validation
Validation

## prognostic.prov.validation.value
Held-out test fold and 9-fold cross-validation grouped by participant

## prognostic.prov.paper
Paper

## prognostic.prov.paper.value
Ghofrani-Jahromi et al., NeuroImage: Clinical 2024

## prognostic.prov.engine
Running

## prognostic.prov.engine.ort
in your browser, ONNX Runtime

## prognostic.prov.engine.js
in your browser, JavaScript

## prognostic.closing.title
Where these numbers come from

## prognostic.closing.forest
The forest running in this page is the one the lab trained for the paper, exported unchanged. Its answers were checked against scikit-learn before release and agree to seven decimal places, so the browser gives what the published model gives.

## prognostic.closing.privacy
Everything runs on your machine. Nothing you type is uploaded, and no measurement from the cohort is in this site or in its repository: the individuals you can select are synthetic, and the cohort summaries are aggregates: no arrow or stage count rests on fewer than twenty participants and no grid cell on fewer than five.

## prognostic.cohort.title
Where this individual sits in the cohort

## prognostic.cohort.density.label
Predicted rate against PIN, the training cohort as a density, with this individual marked

## prognostic.cohort.density.ytitle
Predicted rate, mm³ per year

## prognostic.cohort.density.xlabel
Baseline PIN (prognostic index)

## prognostic.cohort.pin.unavailable
PIN needs the motor and cognitive scores. With either group left out on the canvas above, the point sits at the cohort’s median PIN.

## prognostic.cohort.stages.label
Fast-progressor probability by HD-ISS stage, with this individual marked

## prognostic.cohort.stages.xtitle
HD-ISS stage, training cohort

## prognostic.cohort.stages.stage
Stage {n}

## prognostic.cohort.stages.you
this individual {p}

## prognostic.explainer.cohort.grey
grey: training cohort

## prognostic.explainer.cohort.rate
{rate} mm³/yr

## prognostic.cohort.missing
The export did not ship this aggregate.

## prognostic.ageing.title
Against healthy ageing

## prognostic.ageing.label
Ventricle volume against age, with stage medians and the healthy-ageing curve

## prognostic.ageing.xtitle
Age at baseline scan, years

## prognostic.ageing.ytitle
Lateral ventricles, ‰ of head size

## prognostic.ageing.legend.patients
with HD, cohort fit

## prognostic.ageing.legend.controls
healthy controls

## prognostic.ageing.legend.you
this individual, three years

## prognostic.ageing.legend.stages
stage medians

## prognostic.explore.title
Explore two features

## prognostic.explore.lede
The forest is run over a 40 by 40 grid of the two chosen features, with everything else held at this individual’s values. Colour is the predicted rate and the dashed line is the 750 boundary. Drag the point to move the individual.

## prognostic.explore.label
Prediction surface over the two chosen features

## prognostic.explore.x
Horizontal

## prognostic.explore.y
Vertical

## prognostic.explore.legend.moderate
Moderate, below 750

## prognostic.explore.legend.fast
Fast, above 750

## prognostic.explore.legend.boundary
The 750 boundary

## prognostic.explore.legend.dark
Darker is further from the line

## prognostic.explore.axis.cap
CAP score

## prognostic.explore.failed
The surface could not be drawn: {detail}

## prognostic.explainer.title
Try it on an individual

## prognostic.explainer.sub
Follow one baseline visit through the study’s two forests, from up to 101 measurements to a predicted rate and the paper’s enrichment rule. Pick an individual, change any of its measurements, leave out groups you do not have, or use fewer trees, and every step updates.

## prognostic.explainer.loading
Loading the model

## prognostic.explainer.error
The model could not be loaded: {detail}

## prognostic.explainer.retry
Try again

## prognostic.explainer.wf.rest.one
1 other measurement

## prognostic.tour.label
Guided tour

## prognostic.tour.open
Guided tour

## prognostic.tour.close
Close the tour

## prognostic.tour.prev
Back

## prognostic.tour.next
Next

## prognostic.tour.count
{n} / {total}

## prognostic.tour.1.h
One baseline visit

## prognostic.tour.1.p
Everything the forests know comes from two places: a **clinic visit** (sex, age, CAG and three scores) and one **MRI scan** measured by FreeSurfer. That makes 101 measurements, one stripe each, grouped in the order the paper added them. Pick another individual above, click any dotted value to change it, or open ⊕ beside **101 measurements** for all of them.

## prognostic.tour.2.h
CAP: age and gene together

## prognostic.tour.2.p
The forests never see the CAG repeat count on its own. They see **CAP = age × (CAG − 35.5)**, the prognostic index trials use today. Click **CAG** under Clinic visit to change it and watch CAP follow.

## prognostic.tour.3.h
Two forests

## prognostic.tour.3.p
The **rate forest** predicts mm³ per year; the **fast-or-moderate forest** gives a chance that the rate is over 750, as the mean of each tree’s leaf share of fast. Each card shows tree 1, with this individual’s path in black and its answer beside it. Click the deck to follow every question on that path, and step through the other trees with ‹ ›.

## prognostic.tour.4.h
Averaging the trees

## prognostic.tour.4.p
Each tree answers on its own; the forest takes the **mean**. The spread of the bars shows how much the trees agree. Try **Trees in each forest** at 1, then back to all.

## prognostic.tour.5.h
The answer, and why

## prognostic.tour.5.p
The chance of fast decides the verdict and the enrichment rule. Under it, the **waterfall** shows why: from the forest’s starting point, each measurement pushes towards fast or moderate, and the pushes add up exactly to the answer. Click a row to change that measurement.

## prognostic.tour.6.h
Against the cohort

## prognostic.tour.6.p
The top chart puts this individual’s predicted rate against **PIN**, the prognostic index trials use today, over the training cohort in grey. Below, the chance of fast across the cohort at each HD-ISS stage; the dashed line is this individual.

## prognostic.tour.7.h
Against healthy ageing

## prognostic.tour.7.p
What the forests predict, in the brain: lateral ventricle size against age. Each arrow is three years of growth for one stage, and the dashed curve is healthy controls. This individual’s arrow starts at their scan and grows at the predicted rate.

## prognostic.tour.8.h
Only what you have

## prognostic.tour.8.p
Click a group you do not have, say **Motor score**, to leave it out. The forests drop to the richest configuration your groups support (here, up to **Cognition**), and the groups after the gap wait, greyed. No group is ever filled in with guesses.

## prognostic.explainer.up.title
Run the forests on your own scan

## prognostic.explainer.up.lede
Drop the FreeSurfer v6.0 output for one scan:

## prognostic.explainer.up.drop
Drop files here, or choose them

## prognostic.explainer.up.drop.note
Read in your browser; nothing is uploaded.

## prognostic.explainer.up.close
Close

## prognostic.explainer.up.slot.read
read

## prognostic.explainer.up.slot.none
not loaded

## prognostic.explainer.up.example
Try it with an example scan

## prognostic.explainer.up.note
Sex, age, CAG and the clinic scores are not in the stats files: they stay as the chosen individual’s until you change them under Clinic visit. Anything the files do not cover is held at the cohort median.

## prognostic.explainer.up.read.all
All {n} MRI measurements read.

## prognostic.explainer.up.read.some
{read} of {total} MRI measurements read; {missing} held at the cohort median ({names}).

## prognostic.explainer.up.noetiv
aseg.stats has no EstimatedTotalIntraCranialVol line, so volumes cannot be scaled to head size.

## prognostic.explainer.up.waiting
Waiting for aseg.stats: volumes are scaled by the head size it holds.

## prognostic.explainer.up.ignored
Not a FreeSurfer stats file, so not read: {names}.

## prognostic.explainer.up.large
Over 4 MB, so not read: {names}.

## prognostic.explainer.up.fetch
The example scan could not be fetched.

## prognostic.explainer.up.clear
Clear the scan

## prognostic.explainer.who
Individual

## prognostic.explainer.person.title
{label} (synthetic)

## prognostic.explainer.you
You

## prognostic.explainer.you.title
Your scan · clinic values from {from}

## prognostic.explainer.upload
Use my own scan

## prognostic.explainer.facts.age
Age

## prognostic.explainer.facts.cag
CAG

## prognostic.explainer.facts.cap
CAP

## prognostic.explainer.yrs
yrs

## prognostic.explainer.edited
edited

## prognostic.explainer.cfg.label
The forests use

## prognostic.explainer.cfg.all
All groups

## prognostic.explainer.cfg.upto
Up to {name}

## prognostic.explainer.cfg.inputs
· {n} inputs

## prognostic.explainer.cfg.title
Configuration {name} in the paper

## prognostic.explainer.cfg.switching
switching…

## prognostic.explainer.cfg.failed
could not switch: {detail}

## prognostic.explainer.trees.label
Trees in each forest

## prognostic.explainer.trees.all
All

## prognostic.explainer.trees.counts
· {reg} + {clf}

## prognostic.explainer.trees.reset
All trees

## prognostic.explainer.band.who
Sex, age, CAP

## prognostic.explainer.band.cog
Cognition

## prognostic.explainer.band.motor
Motor score

## prognostic.explainer.band.wm
White-matter hypointensities

## prognostic.explainer.band.deep
Deep structures + head size

## prognostic.explainer.band.vent
Ventricles

## prognostic.explainer.band.ctx
Cortical thickness

## prognostic.explainer.visit.title
The visit

## prognostic.explainer.visit.clinic
Clinic visit

## prognostic.explainer.visit.scan
MRI scan

## prognostic.explainer.visit.person
{sex}, {age} years

## prognostic.explainer.visit.male
Male

## prognostic.explainer.visit.female
Female

## prognostic.explainer.visit.dna
CAG {cag} → CAP {cap}

## prognostic.explainer.visit.scores
SDMT {sdmt} · Stroop {swr}

## prognostic.explainer.visit.motor
Motor score {tms}

## prognostic.explainer.visit.change
Change {what}

## prognostic.explainer.visit.fs
FreeSurfer v6.0

## prognostic.explainer.visit.fs.1
volumes as ‰ of head size,

## prognostic.explainer.visit.fs.2
cortical thickness in mm

## prognostic.explainer.visit.fs.3
Regions coloured by

## prognostic.explainer.visit.fs.4
their group’s push

## prognostic.explainer.inputs.title
101 measurements

## prognostic.explainer.inputs.title.n
{n} measurements

## prognostic.explainer.col.details
Look inside: {title}

## prognostic.explainer.band.have
I have {name} (configuration {num})

## prognostic.explainer.band.off
not given

## prognostic.explainer.band.waiting
given · waits for {name}

## prognostic.explainer.band.above
the groups above

## prognostic.explainer.band.who.title
Every configuration needs sex, age and CAP

## prognostic.explainer.band.on.title
Click if you do not have this group

## prognostic.explainer.band.off.title
Click to give this group

## prognostic.explainer.stripe.tip
{name}: {value}{edited}

## prognostic.explainer.stripe.edited
(edited)

## prognostic.explainer.stripe.push
Push {push} {unit}

## prognostic.explainer.names.left
Left

## prognostic.explainer.names.right
Right

## prognostic.explainer.names.yes
yes

## prognostic.explainer.names.no
no

## prognostic.explainer.names.permille
‰ of head size

## prognostic.explainer.names.cm3
cm³

## prognostic.explainer.names.mm
mm

## prognostic.explainer.forests.title
Two random forests

## prognostic.explainer.forest.reg
Rate forest

## prognostic.explainer.forest.clf
Fast-or-moderate forest

## prognostic.explainer.forest.sub.reg
{k} trees · predict mm³ per year

## prognostic.explainer.forest.sub.clf
{k} trees · predict the chance of fast

## prognostic.explainer.forest.kofn
{k} of {n}

## prognostic.explainer.forest.tree1
Tree 1 says

## prognostic.explainer.forest.unit.reg
mm³ per year

## prognostic.explainer.forest.unit.clf
chance of fast

## prognostic.explainer.forest.averages
the forest averages {which} {k} →

## prognostic.explainer.forest.all
all

## prognostic.explainer.forest.these
these

## prognostic.explainer.forest.deck.title
Tree 1, with this individual’s path in black. Click to see every question and step through the other trees.

## prognostic.explainer.forest.deck.aria
Look inside tree 1 of the {forest} forest

## prognostic.explainer.forest.name.reg
rate

## prognostic.explainer.forest.name.clf
fast-or-moderate

## prognostic.explainer.tree.leaf.reg
{rate} mm³/yr

## prognostic.explainer.tree.split
{name} ≤ {value}

## prognostic.explainer.tree.leaves
{n} leaves; dots show each leaf’s answer. Hover a dot for its question.

## prognostic.explainer.avg.title
Averaging the trees

## prognostic.explainer.avg.mean.reg
mean {rate} mm³/yr

## prognostic.explainer.avg.mean.clf
mean {pct}

## prognostic.explainer.avg.axis.reg
mm³ per year, one bar per group of trees

## prognostic.explainer.avg.axis.clf
each tree’s chance of fast, one bar per group of trees

## prognostic.explainer.avg.line.reg
750

## prognostic.explainer.avg.line.clf
50 %

## prognostic.explainer.end.title
The answer, and why

## prognostic.explainer.end.rate
{rate} mm³/yr

## prognostic.explainer.end.rate.rest
predicted (fast line: {threshold})

## prognostic.explainer.end.prob.rest
chance of fast

## prognostic.explainer.end.rule
The paper’s enrichment rule:

## prognostic.explainer.end.rule.fast
would select

## prognostic.explainer.end.rule.mid
on its boundary

## prognostic.explainer.end.rule.moderate
would not select

## prognostic.explainer.end.rule.long.fast
The paper’s enrichment rule would select this individual for a trial.

## prognostic.explainer.end.rule.long.mid
On the boundary of the paper’s enrichment rule.

## prognostic.explainer.end.rule.long.moderate
The paper’s enrichment rule would not select this individual.

## prognostic.explainer.wf.title
What moved this answer

## prognostic.explainer.wf.tab.clf
Chance of fast

## prognostic.explainer.wf.tab.reg
Rate

## prognostic.explainer.wf.unit.clf
points of chance

## prognostic.explainer.wf.unit.reg
mm³ per year

## prognostic.explainer.wf.start
Starting point

## prognostic.explainer.wf.rest
{n} other measurements

## prognostic.explainer.wf.answer
The forest’s answer

## prognostic.explainer.wf.row.aria
{name}: pushes {push} {unit}. Change it

## prognostic.explainer.wf.legend.fast
towards fast

## prognostic.explainer.wf.legend.moderate
towards moderate

## prognostic.explainer.wf.legend.note
TreeSHAP over the trees in use

## prognostic.explainer.wf.tip
{name}: {value} (median {median}). Pushes {push} {unit} {direction}

## prognostic.explainer.wf.towards.fast
towards fast

## prognostic.explainer.wf.towards.moderate
towards moderate

## prognostic.explainer.range.one
{name} is outside the training range.

## prognostic.explainer.range.many
{n} measurements are outside the training range: {names}.

## prognostic.explainer.ed.close
Close

## prognostic.explainer.ed.reset
Reset

## prognostic.explainer.ed.tick
dashed tick: their own value

## prognostic.explainer.ed.cap
· CAP follows

## prognostic.explainer.ed.own
This individual: {value}

## prognostic.explainer.ed.sex
Sex

## prognostic.explainer.ed.female
Female

## prognostic.explainer.ed.male
Male

## prognostic.explainer.ed.cag
CAG repeats

## prognostic.explainer.ed.age
Age at scan

## prognostic.explainer.zoom.close
Close

## prognostic.explainer.drawer.title
The baseline visit

## prognostic.explainer.drawer.sub
every measurement can be changed · the forests use {n} of them

## prognostic.explainer.drawer.h
Change any measurement

## prognostic.explainer.drawer.state.used
{n} · used

## prognostic.explainer.drawer.state.waiting
{n} · given, waiting

## prognostic.explainer.drawer.state.off
{n} · not given

## prognostic.explainer.drawer.ctx.all
All 68 thicknesses together

## prognostic.explainer.drawer.cap
CAP is worked out, not entered: age × (CAG − {offset}) = {age} × ({cag} − {offset}) = {cap}.

## prognostic.explainer.drawer.reset
Reset to the example

## prognostic.explainer.drawer.ranges
Ranges run from the training cohort’s 1st to 99th percentile; ● marks a changed value.

## prognostic.explainer.tree.title
Tree {i} of {n}

## prognostic.explainer.tree.sub.reg
rate forest · predicts mm³ per year

## prognostic.explainer.tree.sub.clf
fast-or-moderate forest · each leaf holds a share of fast

## prognostic.explainer.tree.whole
The whole tree, with this individual’s path

## prognostic.explainer.tree.questions
The questions on the path, and the estimate after each

## prognostic.explainer.tree.q0
Before any question: the average of this tree’s training sample

## prognostic.explainer.tree.q
Is {name} ≤ {value}?

## prognostic.explainer.tree.yes
yes

## prognostic.explainer.tree.no
no

## prognostic.explainer.tree.gives.reg
This tree gives **{value}**.

## prognostic.explainer.tree.gives.clf
This tree gives **{value} fast**: the share of fast individuals in its training sample that reached this leaf.

## prognostic.explainer.tree.forest
The forest’s answer is the mean of {k} trees like it: **{value}**.

## prognostic.explainer.tree.prev
‹ Tree

## prognostic.explainer.tree.next
Tree ›

## prognostic.explainer.tree.flip
Find a tree that disagrees

## prognostic.explainer.tree.note
Each tree was trained on its own random sample of the training individuals, so each asks slightly different questions.

## prognostic.explainer.note.forests.sub
both read the same inputs

## prognostic.explainer.note.forests.reg
{n} trees, each predicts mm³ per year

## prognostic.explainer.note.forests.and
and

## prognostic.explainer.note.forests.clf
{n} trees, each gives the share of fast (over {threshold}) individuals in its leaf

## prognostic.explainer.note.forests.1
Each tree is grown on a random sample of the training individuals and asks a handful of yes-or-no questions about the measurements. Each card shows tree 1 with this individual’s path; click it to look inside, then step through the others. The histograms next to the cards show every tree’s answer, **fast** or **moderate**.

## prognostic.explainer.note.forests.2
Click a card’s title to colour the measurements on the left by that forest’s pushes.

## prognostic.explainer.note.avg.sub
a random forest takes the mean

## prognostic.explainer.note.avg.1
Every tree gives a full answer; the forest’s answer is their **mean**. For the fast-or-moderate forest each tree’s answer is a share, not a yes or no: the fraction of fast individuals in the leaf this individual reaches. A leaf at 55 % and a leaf at 100 % both lean fast, but they add different amounts to the mean. There is no vote count.

## prognostic.explainer.note.avg.2
Move **Trees in each forest** down to 1 and the answer jumps with whichever tree comes first; with all trees it settles. Boosting, on the brain-age page, works differently: each tree adds a small correction to the ones before it.

## prognostic.explainer.note.avg.foot
* Over {threshold} mm³/yr, or a leaf more than half fast. A measure of spread only: it can differ from the mean near the boundary.

## prognostic.explainer.note.avg.table.forest
Forest

## prognostic.explainer.note.avg.table.trees
Trees used

## prognostic.explainer.note.avg.table.mean
Mean (the answer)

## prognostic.explainer.note.avg.table.sd
Spread (SD)

## prognostic.explainer.note.avg.table.past
Trees past the line*

## prognostic.explainer.note.avg.row.reg
Rate

## prognostic.explainer.note.avg.row.clf
Fast-or-moderate

## prognostic.explainer.note.end.sub
the verdict as the live page states it, and its SHAP explanation

## prognostic.explainer.note.end.1
The page reads the fast-or-moderate forest’s chance in three bands: under 35 % **more likely moderate**, 35–65 % **too close to call**, over 65 % **more likely fast**. The enrichment rule selects likely fast progressors for a trial.

## prognostic.explainer.note.end.2
Under the verdict, the waterfall explains it. Each forest starts from the same point for everyone, the mean of its trees’ training samples. Each measurement then pushes this individual’s answer **towards fast** or **towards moderate** (SHAP values, computed with TreeSHAP from the trees themselves). The pushes add up exactly to the answer. Switch between the two forests above the waterfall; click a row to change that measurement.

## prognostic.explainer.note.end.h
How well each configuration does (this site’s reproduction)

## prognostic.explainer.note.end.table.cfg
Config

## prognostic.explainer.note.end.table.adds
Adds

## prognostic.explainer.note.end.table.error
Rate error

## prognostic.explainer.note.end.table.acc
Accuracy

## prognostic.explainer.mini.fast
Fast

## prognostic.explainer.mini.mid
Close call

## prognostic.explainer.mini.moderate
Moderate

## prognostic.explainer.mini.back
Back to the answer

## prognostic.explainer.mini.aria
{verdict}: {rate} mm³ per year, {pct} chance of fast. {rule} Back to the answer.

## prognostic.explainer.mini.pct
{pct} fast
`,brainage:`## brainage.doctitle
Regional brain age

## brainage.title
Mapping regional brain aging in Huntington’s disease

## brainage.lede
How the study estimated how old each part of the brain looks from one MRI scan, and found where aging speeds up in HD.

## brainage.bar.source
**Regional brain age** · Ghofrani-Jahromi et al., Mov Disord 2026

## brainage.paper.title
The paper in one minute

## brainage.paper.summary
Read the seven steps as text

## brainage.paper.poster
Play the study

## brainage.paper.poster.sub
Seven steps · about a minute and a quarter

## brainage.paper.citeshort
Ghofrani-Jahromi et al., Movement Disorders 2026

## brainage.paper.cite
Ghofrani-Jahromi M, Amirmoezzi Y, Abeyasinghe PM, Poudel GR, Razi A, Paulsen JS, Hobbs NZ, Scahill RI, Tabrizi SJ, Georgiou-Karistianis N, Saha S. Mapping regional brain aging in Huntington’s disease using structural magnetic resonance imaging and machine learning. Movement Disorders 2026;41(4):881–888. doi:10.1002/mds.70160.

## brainage.paper.source
Source: {cite}

## brainage.paper.credits
Brain drawings are schematic, the training scatter uses synthetic dots, and the box plots and distributions are group summaries; no participant data appear here. The study logos identify the TRACK-HD, TrackOn-HD and PREDICT-HD studies, whose participants the paper drew on, and the LightGBM logo names the model.

## brainage.paper.broken
The animation could not be drawn ({detail}). Its seven steps are in the text below, and the rest of the page works without it.

## brainage.paper.table.models.caption
Brain age models: accuracy in people without the gene expansion, and link between age gap and HD-ISS stage in people with HD

## brainage.paper.table.region
Region

## brainage.paper.table.features
Features

## brainage.paper.table.r
r

## brainage.paper.table.mae
Mean error, years

## brainage.paper.table.rho
ρ with stage

## brainage.paper.table.p
P

## brainage.paper.table.ns
not significant

## brainage.paper.table.clinical.caption
Significant correlations between clinical scores and regional brain age gaps at baseline (Table 2)

## brainage.paper.table.score
Clinical score

## brainage.paper.1.label
Aim

## brainage.paper.1.head
How old does the brain look?

## brainage.paper.1.sub
A brain-age model estimates age from an MRI scan. In Huntington’s disease the brain can look older than the person is. This study asked which brain regions drive that gap.

## brainage.paper.1.text
A brain-age model estimates age from a scan, and this study asks which regions make the HD brain look older. See chapter 1.

## brainage.paper.1.note
Schematic: the ages are illustrative.

## brainage.paper.2.label
Data

## brainage.paper.2.head
Learn normal aging, then test in HD

## brainage.paper.2.sub
The models learned from 1,936 people without the HD gene expansion, from seven studies. They were then applied to 531 people with HD.

## brainage.paper.2.text
The models learned from 1,936 people without the HD gene expansion and were tested on 531 people with HD. See chapter 2.

## brainage.paper.2.note
Numbers from Table 1 of the paper.

## brainage.paper.3.label
Features

## brainage.paper.3.head
354 measurements from each scan

## brainage.paper.3.sub
FreeSurfer measured the volume, thickness, surface area and curvature of brain structures. The measurements were grouped into six regions.

## brainage.paper.3.text
FreeSurfer gave 354 measurements per scan, grouped into six regions. See chapter 1.

## brainage.paper.3.note
Feature counts from Supplementary Table S2.

## brainage.paper.4.label
Model

## brainage.paper.4.head
A model learns what normal aging looks like

## brainage.paper.4.sub
LightGBM learned to predict age from the measurements of people without the gene expansion. In cross-validation its estimates were off by 5.3 years on average.

## brainage.paper.4.text
LightGBM learned normal aging and was off by 5.3 years on average in cross-validation. See chapter 3.

## brainage.paper.4.note
Dots are synthetic, simulated to match the correlation and error in Fig. 1A of the paper.

## brainage.paper.5.label
Age gap

## brainage.paper.5.head
In HD, the brain looks older than its years

## brainage.paper.5.sub
Applied to people with HD, the model saw older-looking brains than in matched controls at every stage, and the gap grew at stages 2 and 3.

## brainage.paper.5.text
In HD the brain looked older than in matched controls at every stage, and the gap grew at stages 2 and 3. See chapter 4.

## brainage.paper.5.note
Box plots redrawn from Fig. 1B; labels are medians.

## brainage.paper.5.note2
The single person is illustrative.

## brainage.paper.6.label
Regions

## brainage.paper.6.head
Deep brain structures age fastest

## brainage.paper.6.sub
Region-by-region models showed subcortical, temporal and parietal gaps rising with HD-ISS stage, led by the subcortex. Frontal, insular and occipital gaps did not.

## brainage.paper.6.text
Subcortical, temporal and parietal gaps rose with HD-ISS stage, led by the subcortex; frontal, insular and occipital gaps did not. See chapter 5.

## brainage.paper.6.note
Distributions redrawn from Fig. 2 of the paper.

## brainage.paper.6.note2
ρ: Spearman correlation between age gap and HD-ISS stage.

## brainage.paper.7.label
Clinical

## brainage.paper.7.head
Older-looking regions go with worse symptoms

## brainage.paper.7.sub
A larger subcortical age gap went with slower processing and reading, more motor signs and lower daily function.

## brainage.paper.7.text
A larger subcortical age gap went with worse scores on the clinical measures. See chapter 6 and the result below.

## brainage.paper.7.note
Pearson correlations at baseline from Table 2, FDR-adjusted, all P < 0.01.

## brainage.paper.7.note2
The occipital region was not tested.

## brainage.paper.l.region.whole
Whole brain

## brainage.paper.l.region.wholeshort
Whole

## brainage.paper.l.region.subcortical
Subcortical

## brainage.paper.l.region.frontal
Frontal

## brainage.paper.l.region.parietal
Parietal

## brainage.paper.l.region.temporal
Temporal

## brainage.paper.l.region.occipital
Occipital

## brainage.paper.l.region.insula
Insula

## brainage.paper.l.oneperson
One person, two ages

## brainage.paper.l.actual
Actual age

## brainage.paper.l.brainmri
Brain age, from MRI

## brainage.paper.l.gapyears
Brain age gap +{n} years

## brainage.paper.l.ageunit
age, years

## brainage.paper.l.which
Which regions look older?

## brainage.paper.l.wholeyears
Whole brain +{n} years

## brainage.paper.l.sixages
One brain age for each of six regions

## brainage.paper.l.learning
Learning normal aging

## brainage.paper.l.without
people without the gene expansion

## brainage.paper.l.sevenstudies
from seven studies

## brainage.paper.l.study.aomic
AOMIC

## brainage.paper.l.study.sald
SALD

## brainage.paper.l.study.ixi
IXI

## brainage.paper.l.study.track
TRACK-HD

## brainage.paper.l.study.narps
NARPS

## brainage.paper.l.study.predict
PREDICT-HD

## brainage.paper.l.study.image
IMAGE-HD

## brainage.paper.l.study.trackon
TrackOn-HD

## brainage.paper.l.agesscans
Ages 18 to 82 · 3,562 scans

## brainage.paper.l.testing
Testing in Huntington’s disease

## brainage.paper.l.withhd
people with HD

## brainage.paper.l.stages
at HD-ISS stages 0 to 3

## brainage.paper.l.stage
Stage {n}

## brainage.paper.l.people
people

## brainage.paper.l.meanage
Mean age 43 · 2,429 scans

## brainage.paper.l.freesurfer
FreeSurfer v6.0

## brainage.paper.l.m.volume
Volume

## brainage.paper.l.m.volume.unit
mm³

## brainage.paper.l.m.thickness
Cortical thickness

## brainage.paper.l.m.thickness.unit
mm

## brainage.paper.l.m.area
Surface area

## brainage.paper.l.m.area.unit
mm²

## brainage.paper.l.m.curvature
Mean curvature

## brainage.paper.l.m.curvature.unit
mm⁻¹

## brainage.paper.l.m.wm
White-matter volume

## brainage.paper.l.m.wm.unit
mm³

## brainage.paper.l.perscan
measurements per scan

## brainage.paper.l.grouped
Grouped into six regions

## brainage.paper.l.gbdt
Gradient-boosted decision trees

## brainage.paper.l.trees
100 trees, added in turn

## brainage.paper.l.defaults
default settings

## brainage.paper.l.tree
Tree {n}

## brainage.paper.l.predicted
Predicted

## brainage.paper.l.age
age

## brainage.paper.l.corrects
Each tree corrects the errors left by the trees before it.

## brainage.paper.l.inputs
Inputs: 354 measurements and sex

## brainage.paper.l.target
Target: the person’s actual age

## brainage.paper.l.trainedon
Trained on people without the gene expansion only

## brainage.paper.l.predvsactual
Predicted against actual age

## brainage.paper.l.xage
Actual age, years

## brainage.paper.l.yage
Predicted age, years

## brainage.paper.l.identity
predicted = actual

## brainage.paper.l.corr
correlation, r

## brainage.paper.l.years
years

## brainage.paper.l.mae
mean absolute error

## brainage.paper.l.cv
10-fold cross-validation

## brainage.paper.l.applied
The trained model, applied to a person with HD

## brainage.paper.l.aged
Aged {n}

## brainage.paper.l.mri
MRI scan

## brainage.paper.l.measurements
measurements

## brainage.paper.l.unchanged
trained model, unchanged

## brainage.paper.l.brainage
Brain age

## brainage.paper.l.gap
Brain age gap

## brainage.paper.l.plusyears
+{n} years

## brainage.paper.l.bystage
Brain age gap by HD-ISS stage, years

## brainage.paper.l.controls
Matched controls without the gene expansion

## brainage.paper.l.hd
People with HD

## brainage.paper.l.ridges
Brain age gap by stage, region by region

## brainage.paper.l.stageword
Stage

## brainage.paper.l.rho
ρ

## brainage.paper.l.ns
ns

## brainage.paper.l.span
Curves span age gaps of −30 to +45 years; the dashed line marks zero.

## brainage.paper.l.rise
Rise with HD-ISS stage, Spearman’s ρ

## brainage.paper.l.falls
falls with stage

## brainage.paper.l.rises
rises with stage

## brainage.paper.l.four
Four clinical scores

## brainage.paper.l.sdmt
SDMT

## brainage.paper.l.sdmt.full
Symbol Digit Modalities

## brainage.paper.l.sdmt.what
Processing speed

## brainage.paper.l.sdmt.worse
Lower score is worse

## brainage.paper.l.swrt
SWRT

## brainage.paper.l.swrt.full
Stroop Word Reading

## brainage.paper.l.swrt.what
Reading speed

## brainage.paper.l.swrt.worse
Lower score is worse

## brainage.paper.l.swrt.word
RED

## brainage.paper.l.tms
TMS

## brainage.paper.l.tms.full
Total Motor Score

## brainage.paper.l.tms.what
Motor signs

## brainage.paper.l.tms.worse
Higher score is worse

## brainage.paper.l.tfc
TFC

## brainage.paper.l.tfc.full
Total Functional Capacity

## brainage.paper.l.tfc.what
Daily function

## brainage.paper.l.tfc.worse
Lower score is worse

## brainage.paper.l.corrtitle
Correlation with each region’s age gap, r

## brainage.paper.l.everycell
In every cell, an older-looking region went with a worse score.

## brainage.bar.watch
The paper in one minute

## brainage.bar.explainer
Try the model

## brainage.bar.how
How it works

## brainage.bar.how.note
· {total} chapters

## brainage.bar.label
On this page

## brainage.explainer.title
Try the model

## brainage.explainer.sub
Follow one scan through the study’s seven brain age models, from 354 measurements to an age for each part of the brain. Pick an example person, change their age, or use fewer trees, and every step updates. The example people are made up; the models are our reproduction of the study’s, running in your browser.

## brainage.explainer.loading
Loading the seven models…

## brainage.explainer.error
The models did not load ({error}). Reload the page to try again.

## brainage.explainer.scan
Scan

## brainage.explainer.person.stage
Person {id} (stage {stage})

## brainage.explainer.person.nohd
Person {id} (no gene expansion)

## brainage.explainer.person.aria
{label}, scanned at {age}

## brainage.explainer.person.title
{label}, scanned at {age}. Made up.

## brainage.explainer.you
You

## brainage.explainer.you.label
Your scan

## brainage.explainer.upload
Use my FreeSurfer files

## brainage.explainer.facts.stage
HD-ISS stage

## brainage.explainer.facts.age
Age at scan

## brainage.explainer.nohd
No HD

## brainage.explainer.stage.unknown
Not known

## brainage.explainer.yrs
yrs

## brainage.explainer.age.label
Compared with age

## brainage.explainer.age.tick
Their age at the scan

## brainage.explainer.reset
Reset

## brainage.explainer.reset.title
Back to their age at the scan. The models never see age, so only the dashed line moved.

## brainage.explainer.trees.label
Trees in each model

## brainage.explainer.trees.of
of 100

## brainage.explainer.trees.all
Use all

## brainage.explainer.trees.all.title
Fewer trees pull every estimate back towards where boosting starts: the training average, {mean}, shifted by each model’s age correction, which for this person puts it between {lo} and {hi}

## brainage.explainer.svg.label
From an MRI scan to seven regional brain ages

## brainage.explainer.col.a
MRI scan

## brainage.explainer.col.b
{n} measurements

## brainage.explainer.col.c
Seven LightGBM models

## brainage.explainer.col.d
Brain age, each model

## brainage.explainer.col.details
Details: {title}

## brainage.explainer.a.scan
One T1-weighted scan

## brainage.explainer.a.fs
FreeSurfer v6.0

## brainage.explainer.a.kinds
volume · thickness · area · curvature

## brainage.explainer.a.sex
+ sex, as a model input

## brainage.explainer.b.note
each line: one measurement against people the same age

## brainage.explainer.c.inputs
{n} inputs · {k} trees

## brainage.explainer.c.inputs.one
{n} inputs · 1 tree

## brainage.explainer.c.card
Look inside the {name} model

## brainage.explainer.c.trained
Our models: trained on {rows} scans of people without the gene expansion (the paper: {paper} people)

## brainage.explainer.person.failed
The brain ages for {label} could not be worked out ({error}). Pick someone else, or try another scan.

## brainage.explainer.trees.failed
The brain ages after this many trees could not be worked out; the drawing shows the last ones that could.

## brainage.explainer.d.axis
age, years

## brainage.explainer.d.atscan
age at scan {age}

## brainage.explainer.d.compared
compared with {age}

## brainage.explainer.d.missing
No answer: missing {what}

## brainage.explainer.d.more
{first} and {n} more

## brainage.explainer.col.e
Where the brain looks older

## brainage.explainer.e.lobe
{name} {gap} years

## brainage.explainer.e.lo
−10 y

## brainage.explainer.e.zero
0

## brainage.explainer.e.hi
+20 y

## brainage.explainer.e.younger
← younger-looking

## brainage.explainer.e.older
older-looking →

## brainage.explainer.e.ridges
{name} gap among people with HD

## brainage.explainer.e.from
by HD-ISS stage, from the paper’s Fig. 2 · ρ = {rho}{ns}

## brainage.explainer.e.ns
(ns)

## brainage.explainer.e.stage
stage

## brainage.explainer.e.person
Person {id} {gap}

## brainage.explainer.e.nohd
Person {id} (no HD) {gap}

## brainage.explainer.e.you
You {gap}

## brainage.explainer.z.close
Close

## brainage.explainer.z.title
Inside the {name} model

## brainage.explainer.z.sub
{n} measurements + sex · {trees} trees · our typical error ±{mae} years

## brainage.explainer.z.inputs
Its inputs, against people of the same age

## brainage.explainer.z.axis
← younger-looking · older-looking →

## brainage.explainer.z.inputs.note
The eight furthest from the age trend in people without the gene expansion. This describes the scan, not why the model answered as it did.

## brainage.explainer.z.trees
Each tree adds a small correction

## brainage.explainer.z.tree
Tree {k} of {n}

## brainage.explainer.z.prev
Previous tree

## brainage.explainer.z.next
Next tree

## brainage.explainer.z.theirs
theirs: {value}

## brainage.explainer.z.leaf.first
Their leaf: {leaf} years. The first tree starts the estimate near the training average.

## brainage.explainer.z.leaf
Their leaf: {leaf} years, added to the estimate

## brainage.explainer.z.walking
Following this tree…

## brainage.explainer.z.failed
This tree’s path could not be worked out.

## brainage.explainer.z.sum.pending
Adding up the trees…

## brainage.explainer.z.sum.failed
The brain ages after each tree could not be worked out, so the sum is not drawn.

## brainage.explainer.z.missing
This model gave no answer: {n} of its measurements are missing.

## brainage.explainer.z.sum
Adding up the trees

## brainage.explainer.z.start
start: {age}

## brainage.explainer.z.start.why
training average {mean}, after the age correction

## brainage.explainer.z.added
trees added →

## brainage.explainer.m.name
{side} {structure} {kind}

## brainage.explainer.m.mid
{structure} {kind}

## brainage.explainer.m.left
L

## brainage.explainer.m.right
R

## brainage.explainer.m.sex
Sex

## brainage.explainer.m.male
male

## brainage.explainer.m.female
female

## brainage.explainer.m.volume
volume

## brainage.explainer.m.thickness
thickness

## brainage.explainer.m.area
area

## brainage.explainer.m.curvature
curvature

## brainage.explainer.m.wm
white-matter volume

## brainage.explainer.m.r.bankssts
banks of the superior temporal sulcus

## brainage.explainer.m.r.caudalanteriorcingulate
caudal anterior cingulate

## brainage.explainer.m.r.caudalmiddlefrontal
caudal middle frontal

## brainage.explainer.m.r.cuneus
cuneus

## brainage.explainer.m.r.entorhinal
entorhinal

## brainage.explainer.m.r.frontalpole
frontal pole

## brainage.explainer.m.r.fusiform
fusiform

## brainage.explainer.m.r.inferiorparietal
inferior parietal

## brainage.explainer.m.r.inferiortemporal
inferior temporal

## brainage.explainer.m.r.insula
insula

## brainage.explainer.m.r.isthmuscingulate
isthmus cingulate

## brainage.explainer.m.r.lateraloccipital
lateral occipital

## brainage.explainer.m.r.lateralorbitofrontal
lateral orbitofrontal

## brainage.explainer.m.r.lingual
lingual

## brainage.explainer.m.r.medialorbitofrontal
medial orbitofrontal

## brainage.explainer.m.r.middletemporal
middle temporal

## brainage.explainer.m.r.paracentral
paracentral

## brainage.explainer.m.r.parahippocampal
parahippocampal

## brainage.explainer.m.r.parsopercularis
pars opercularis

## brainage.explainer.m.r.parsorbitalis
pars orbitalis

## brainage.explainer.m.r.parstriangularis
pars triangularis

## brainage.explainer.m.r.pericalcarine
pericalcarine

## brainage.explainer.m.r.postcentral
postcentral

## brainage.explainer.m.r.posteriorcingulate
posterior cingulate

## brainage.explainer.m.r.precentral
precentral

## brainage.explainer.m.r.precuneus
precuneus

## brainage.explainer.m.r.rostralanteriorcingulate
rostral anterior cingulate

## brainage.explainer.m.r.rostralmiddlefrontal
rostral middle frontal

## brainage.explainer.m.r.superiorfrontal
superior frontal

## brainage.explainer.m.r.superiorparietal
superior parietal

## brainage.explainer.m.r.superiortemporal
superior temporal

## brainage.explainer.m.r.supramarginal
supramarginal

## brainage.explainer.m.r.temporalpole
temporal pole

## brainage.explainer.m.r.transversetemporal
transverse temporal

## brainage.explainer.da.title
From an MRI scan to numbers

## brainage.explainer.da.sub
what happens before any model runs

## brainage.explainer.da.mri
T1-weighted MRI

## brainage.explainer.da.mri.sub
one structural scan per visit

## brainage.explainer.da.fs
FreeSurfer v6.0

## brainage.explainer.da.fs.sub
outlines deep structures and the folded cortex

## brainage.explainer.da.files
Stats files

## brainage.explainer.da.files.sub
aseg.stats, lh/rh.aparc.stats, wmparc.stats

## brainage.explainer.da.n
{n} numbers

## brainage.explainer.da.n.sub
plus sex, the trees’ only inputs

## brainage.explainer.da.p1
FreeSurfer measures the **volume** of deep structures such as the caudate, putamen and ventricles and of the white matter under each part of the cortex, and the **thickness**, **surface area** and **curvature** of each part of the cortex.

## brainage.explainer.da.p2
The trees never see the image itself, and never see the person’s age. Age enters only in the bias correction, at the age at the scan. That is why the age you compare with can move without changing any brain age.

## brainage.explainer.db.title
The {n} measurements, region by region

## brainage.explainer.db.sub
each line coloured against people the same age

## brainage.explainer.db.count
measurements

## brainage.explainer.db.older
On average **older-looking**

## brainage.explainer.db.younger
On average **younger-looking**

## brainage.explainer.db.note
Region counts are our models’ inputs. Each line is coloured by how far the measurement sits from a straight-line age trend in the people without the gene expansion our models were trained on; the listed measurements are the most older-looking for this person.

## brainage.explainer.dd.title
Seven brain ages for one scan

## brainage.explainer.dd.sub
compared with age {age}, using {k} of {n} trees

## brainage.explainer.dd.model
Model

## brainage.explainer.dd.age
Brain age

## brainage.explainer.dd.gap
Gap

## brainage.explainer.dd.ours
Our cross-validated error

## brainage.explainer.dd.clear
Is the gap bigger than our error?

## brainage.explainer.dd.paper
Typical error in the paper

## brainage.explainer.dd.r
r in the paper

## brainage.explainer.dd.yes
Yes

## brainage.explainer.dd.no
No, within the error

## brainage.explainer.dd.none
No answer

## brainage.explainer.dd.p1
**Our cross-validated error** is each of our reproduced models’ mean error in 10-fold cross-validation on people without the gene expansion. The paper’s **typical error** and **r** (its correlation with actual age) are the study’s own, from the same kind of cross-validation. A gap inside the error says little about one person; the paper’s findings are about groups.

## brainage.explainer.dd.p2
Only the gap at the age at scan is the paper’s measure; comparing with another age moves the gap, not the brain age.

## brainage.explainer.dd.engine.ort
At 100 trees ONNX Runtime answered.

## brainage.explainer.dd.engine.js
At 100 trees the JavaScript trees answered (ONNX Runtime did not start).

## brainage.explainer.dd.below
Below 100 trees the brain ages come from the JavaScript trees.

## brainage.explainer.dd.exact
The trees drawn in the zoom are the exact LightGBM trees; on a value right at a split, ONNX Runtime can land one leaf apart.

## brainage.explainer.de.title
Which regions age faster in HD

## brainage.explainer.de.sub
Spearman’s ρ between each region’s gap and HD-ISS stage, the paper’s Fig. 2

## brainage.explainer.de.region
Region

## brainage.explainer.de.rise
Rise with stage

## brainage.explainer.de.person
This person

## brainage.explainer.de.show
Show {name} under the map

## brainage.explainer.de.ns
not significant

## brainage.explainer.de.reading
Reading this

## brainage.explainer.de.p1
Across {n} people with HD in the paper, the **subcortical** gap rose most with stage, then temporal and parietal. Frontal and insular gaps did not rise; the occipital gap fell slightly.

## brainage.explainer.de.p2
Click a region on the map or a row here to show its distributions by stage under the map. The ridges are the paper’s groups, from the paper’s models; this person’s line is from ours.

## brainage.explainer.de.sig
{s3} P < 0.001 · {s2} P < 0.01 · {s1} P < 0.05

## brainage.explainer.up.title
Run the models on your own scan

## brainage.explainer.up.lede
Choose the FreeSurfer v6.0 output for one scan:

## brainage.explainer.up.drop
Drop files here, or choose them

## brainage.explainer.up.private
Read in your browser; nothing is uploaded.

## brainage.explainer.up.read
read

## brainage.explainer.up.empty
not yet

## brainage.explainer.up.ignored
Not used: {names}

## brainage.explainer.up.dup
More than one file for {slot}: the first one is used. To use another, start again.

## brainage.explainer.up.reset
Start again

## brainage.explainer.up.age
Age at scan

## brainage.explainer.up.sex
Sex

## brainage.explainer.up.sex.note
The models saw only male or female.

## brainage.explainer.up.go
Show my brain ages

## brainage.explainer.up.need.files
Choose at least one of the four files.

## brainage.explainer.up.need.age
Enter the age at the scan, from {lo} to {hi}.

## brainage.explainer.up.need.sex
Choose male or female.

## brainage.explainer.up.clear
Clear my scan

## brainage.explainer.up.close
Close

## brainage.explainer.you.title
About your scan

## brainage.explainer.you.harmonised
Your files were not harmonised to the scanners the models were trained on, so part of each gap may come from your scanner rather than your brain.

## brainage.explainer.you.age
Age at scan {age} is outside the ages the models were trained on ({lo} to {hi}), where the age correction is least certain.

## brainage.explainer.you.range
{model}: {n} of its measurements are outside the training range (1st to 99th percentile).

## brainage.explainer.you.missing
{model}: no brain age, {n} measurements missing from {files}.

## brainage.explainer.you.names
Which ones

## brainage.tour.label
Guided tour

## brainage.tour.1.h
What is brain age?

## brainage.tour.1.p
A model reads one MRI scan and estimates how old the brain looks. The **brain age gap** is that estimate minus the person’s real age. This tour follows **one made-up person** through the study’s seven models.

## brainage.tour.2.h
From scan to 354 measurements

## brainage.tour.2.p
FreeSurfer measures volume, thickness, area and curvature across the brain. Each line in the bar is one measurement, coloured by how it compares with people of the same age: {older} or {younger}.

## brainage.tour.older
older-looking

## brainage.tour.younger
younger-looking

## brainage.tour.3.h
Six regions, seven models

## brainage.tour.3.p
The measurements are grouped into six regions. Each region feeds **its own model**; the whole-brain model takes all 354. Hover a region to follow it.

## brainage.tour.4.h
Inside one model

## brainage.tour.4.p
Each model is **LightGBM**: 100 small trees. Every tree asks a few yes-or-no questions and nudges the estimate. Step through the trees with ‹ ›.

## brainage.tour.5.h
Fewer trees, flatter guesses

## brainage.tour.5.p
Drag **Trees in each model** to 1. Every region’s estimate falls back towards the training average, shifted by that model’s age correction; the trees after it are what tell brains apart.

## brainage.tour.6.h
Seven brain ages

## brainage.tour.6.p
Each dot is a region’s brain age; the dashed line is the age it is compared with, at first their age at the scan. The models never see age, so **Compared with age** moves only that line; the dark tick on the slider marks their real age. The pale band is the model’s **typical error**, so a small gap is within the noise.

## brainage.tour.7.h
Where it looks older

## brainage.tour.7.p
The map colours each region by its gap. In the paper, the **subcortex** aged fastest in HD; frontal, insular and occipital gaps did not rise with stage.

## brainage.tour.8.h
Against the study

## brainage.tour.8.p
The ridges are the paper’s distributions of the gap for people with HD at each stage (Fig. 2). The black line is this person. Now try another person, or compare the same scan with a different age.

## brainage.tour.count
{n} / {total}

## brainage.tour.prev
Back

## brainage.tour.next
Next

## brainage.tour.close
Close the tour

## brainage.tour.open
Guided tour

## brainage.story.eyebrow
How it works · {total} chapters

## brainage.story.title
From one scan to the paper’s findings

## brainage.story.lede
The animation above gave the paper’s claims. Here they are as the paper’s own figures, with the person from the tool marked on each. Scroll, and the figure follows.

## brainage.story.progress
Chapter {n} of {total}

## brainage.story.broken
The story could not be drawn ({detail}). The tool above works without it.

## brainage.story.failed
The synthetic cast could not be loaded ({detail}). The chapters read on without its dots.

## brainage.story.marked
Marked: **{who}** · {stage} · aged {age}

## brainage.story.marked.from
from the tool above

## brainage.story.marked.change
change

## brainage.story.marked.loading
the models are still loading

## brainage.story.marked.unavailable
the models could not answer for this person

## brainage.story.title.1
One scan, one estimate, one gap

## brainage.story.text.1
A brain-age model looks at the 354 FreeSurfer measurements from an MRI scan and estimates how old the brain looks. The difference between that estimate and the person’s real age is the **brain age gap**.

## brainage.story.note.1
The pale band is the whole-brain model’s typical error in people without the gene expansion: 5.3 years either way. A gap inside the band says little about one person.

## brainage.story.title.2
Learned from 1,936 people without the expansion, tested in 531 with HD

## brainage.story.text.2
The models learned what typical aging looks like from seven studies’ scans of people without the HD gene expansion. They were then applied, unchanged, to 531 people with HD at every HD-ISS stage.

## brainage.story.title.3
How well the whole-brain model knows age

## brainage.story.text.3
Held out in ten-fold cross-validation, the model’s estimate tracked real age with r = 0.89. Each dot is one synthetic person simulated to match that scatter; none is a participant.

## brainage.story.note.3
The model pulls toward the middle: young brains look a little old, old brains a little young. That is why every regional model carries its own age correction.

## brainage.story.title.4
In HD, the brain looks older than its years

## brainage.story.text.4
At every stage, people with HD had larger gaps than matched people without the expansion, and the gap grew at stages 2 and 3. Boxes are the paper’s quartiles; whiskers its range.

## brainage.story.title.5
Region by region, the subcortex ages fastest

## brainage.story.text.5
Six regional models, each seeing only its own region’s measurements. Each curve is the spread of gaps at one stage. Subcortical, temporal and parietal gaps rose with stage, led by the subcortex; frontal, insular and occipital gaps did not.

## brainage.story.title.6
Older-looking regions go with worse symptoms

## brainage.story.text.6
Across people with HD, a larger subcortical gap went with slower processing and reading, more motor signs and lower daily function. These are correlations across the group.

## brainage.story.note.6
Nothing here predicts one person’s scores, and the page does not try to.

## brainage.story.who.1
{who} is {age}. As you scroll, the whole-brain model’s estimate moves out to {brain}: a gap of {gap} years.

## brainage.story.who.1.none
{who} is {age} and has no gene expansion. As you scroll, the whole-brain model’s estimate moves out to {brain}: a gap of {gap} years.

## brainage.story.who.1.unknown
{who}: aged {age}. As you scroll, the whole-brain model’s estimate moves out to {brain}: a gap of {gap} years. The scan is not harmonised, so part of the gap may be the scanner.

## brainage.story.who.2
{who} is at HD-ISS stage {stage}, one of the {n} people at that stage.

## brainage.story.who.2.none
{who} has no gene expansion, so they belong with the training side, not the tested side.

## brainage.story.who.2.unknown
{who} has no stage on record, so it is ringed on neither side.

## brainage.story.who.3
{who} is marked where their real age, {age}, meets the model’s estimate, {brain}.

## brainage.story.who.3.none
{who} is marked where their real age, {age}, meets the model’s estimate, {brain}.

## brainage.story.who.3.unknown
{who} is marked where its real age, {age}, meets the model’s estimate, {brain}.

## brainage.story.who.4
{who}’s whole-brain gap of {gap} years is marked in the stage {stage} column.

## brainage.story.who.4.none
{who} has no stage, so their whole-brain gap of {gap} years is marked in a lane beside the boxes.

## brainage.story.who.4.unknown
{who} has no stage on record, so its whole-brain gap of {gap} years is marked in a lane beside the boxes.

## brainage.story.who.5
As each row is drawn, a tick marks {who}’s gap for that region in the colour of stage {stage}; the subcortical gap is {sub} years.

## brainage.story.who.5.none
As each row is drawn, a tick marks {who}’s gap for that region in the grey of no expansion; the subcortical gap is {sub} years.

## brainage.story.who.5.unknown
As each row is drawn, a tick marks {who}’s gap for that region in plain ink, since the stage is unknown; the subcortical gap is {sub} years.

## brainage.story.who.6
{who}’s subcortical gap of {sub} years is shown beside the table only for scale.

## brainage.story.who.6.none
{who}’s subcortical gap of {sub} years is shown beside the table only for scale.

## brainage.story.who.6.unknown
{who}’s subcortical gap of {sub} years is shown beside the table only for scale.

## brainage.story.who.name
Person {id}

## brainage.story.who.loading
The person from the tool is marked here once the models have answered.

## brainage.story.who.unavailable
The models could not answer for this person, so the chapter reads on without the mark.

## brainage.story.cap.1
One person, aged at the scan, and the whole-brain model’s estimate. The band is the model’s mean error from cross-validation.

## brainage.story.cap.2
Table 1: seven training studies without the expansion, four tested stages with HD. The ring is the marked person’s side.

## brainage.story.cap.3
Fig. 1A. Synthetic dots simulated to match the paper’s r and mean error; none is a participant. The ringed dot is the marked person.

## brainage.story.cap.4
Fig. 1B. Boxes, medians and whiskers are the paper’s. The dots inside them are the synthetic cast, not the paper’s data; hover one. The ringed dot is the marked person.

## brainage.story.cap.5
Fig. 2. Ridges redrawn from the paper, one per stage; no individual is drawn. ρ is Spearman’s correlation of the gap with stage. The ticks are the marked person.

## brainage.story.cap.6
Table 2. Correlations across the HD group; no individual is drawn. The bars beside show the marked person’s gaps for scale; they predict nothing.

## brainage.story.pill.reproduced
{n} reproduced

## brainage.story.pill.close
{n} close

## brainage.story.pill.differ
{n} differ

## brainage.story.pill.explained
explained

## brainage.story.pill.title
Checks of this figure against our reproduction of the paper’s models.

## brainage.story.cta
Back to the model

## brainage.story.tip
Synthetic person {id} · {stage} · {sex}, {age} · whole-brain gap {gap}

## brainage.story.label.stage
Stage {n}

## brainage.story.label.nostage
No expansion

## brainage.story.label.unknown
Stage unknown

## brainage.story.label.age
Age, years

## brainage.story.label.brainage
brain age {brain}

## brainage.story.label.realage
real age {age}

## brainage.story.label.gap
gap {gap} years

## brainage.story.label.error
± {e} years, the typical error

## brainage.story.label.trained
Trained on {n} people without the expansion

## brainage.story.label.tested
Tested on {n} people with HD

## brainage.story.label.studies
seven studies

## brainage.story.label.stages
four HD-ISS stages

## brainage.story.label.oneof
{who} is one of {n} at stage {stage}

## brainage.story.label.belongs
{who} belongs with the training side

## brainage.story.label.r
r = {r}

## brainage.story.label.cv
ten-fold cross-validation

## brainage.story.label.xage
Real age, years

## brainage.story.label.yage
Brain age, years

## brainage.story.label.ygap
Brain age gap, years

## brainage.story.label.ctrl
Controls

## brainage.story.label.hd
HD

## brainage.story.label.rho
ρ {v} {sig}

## brainage.story.label.ns
ns

## brainage.story.label.corr
r = {r}

## brainage.story.label.notsig
not significant

## brainage.story.label.forscale
Gaps, for scale only

## brainage.story.label.noscore
No score is predicted here.

## brainage.story.label.lower
lower is worse

## brainage.story.label.higher
higher is worse

## brainage.story.label.score.sdmt
SDMT

## brainage.story.label.score.swrt
SWRT

## brainage.story.label.score.tms
TMS

## brainage.story.label.score.tfc
TFC

## brainage.story.label.score.full.sdmt
Symbol Digit Modalities

## brainage.story.label.score.full.swrt
Stroop Word Reading

## brainage.story.label.score.full.tms
Total Motor Score

## brainage.story.label.score.full.tfc
Total Functional Capacity

## brainage.result.title
The result in one picture

## brainage.result.intro
The paper’s Fig. 3, redrawn from our models, with the seven models beside it. For each region, the figure shows the brain age gap the paper’s mixed model estimates at each HD-ISS stage for a person of median age and CAG; it is a model estimate, not a mean of the people at that stage. The subcortical line starts highest and climbs fastest, while the frontal, insular and occipital lines stay low and show no clear trend with stage. The table shows each model’s size, fit and link with stage.

## brainage.result.cap
Fig. 3 · the paper’s mixed-model estimate per stage (at the median age and CAG), from our models, the ones running on this page; aggregates only. Checked against the paper’s plot (read off at ± 0.2 years).

## brainage.result.label.check
Checked against the paper’s Fig. 3: {ok} values reproduced, {close} close

## brainage.result.label.ygap
Brain age gap, years

## brainage.result.table.caption
The seven models

## brainage.how.table.region
Region

## brainage.how.table.features
Measurements

## brainage.how.table.r
r

## brainage.how.table.mae
Mean error, years

## brainage.how.table.rho
ρ with stage

## brainage.how.table.ns
ns

## brainage.how.table.note
The table shows the paper’s printed numbers, not our reproduction’s. Mean error from 10-fold cross-validation in people without the gene expansion; ρ is Spearman’s correlation between the age gap and HD-ISS stage (Fig. 2). Measurement counts from Supplementary Table S2.

## brainage.how.h.repro
What we reproduced

## brainage.how.repro.1
Our models are a reproduction of the study’s, trained from the published recipe on the training set that reproduces the paper’s figures. Each chapter’s caption says how many of that figure’s numbers our models reproduce, are close to, or miss. One Table 1 value is close rather than exact: the spread of ages in the IXI training study comes out slightly different from the paper’s. The full comparison is a lab report drawn on real participants, so it stays inside the lab.

## brainage.how.h.not
What this page does not do

## brainage.how.not.1
It does not diagnose anything or tell one person how their disease will progress.

## brainage.how.not.2
The example people are made up. Their measurements are synthetic, and their brain ages come from our reproduced models, not from any real participant.

## brainage.how.not.3
Your own FreeSurfer files stay in your browser; nothing is uploaded. Their brain ages are not harmonised to the training scanners, so part of a gap may be the scanner.
`},ra=`hd:copy-focus`,ia=`copy-focus`,aa=2e3,oa=`hd:copy-ready`,sa=6,ca=50,la=500;function ua(e){(0,_.useEffect)(()=>{if(!e)return;let t=null,n,r=()=>{clearTimeout(n),t?.classList.remove(ia),t=null},i,a,o=(e,i)=>{r();let o=typeof window.matchMedia==`function`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,s=()=>e.scrollIntoView({block:`center`,behavior:o?`auto`:`smooth`});s(),e.classList.add(ia),t=e,i&&(a=setTimeout(s,la)),n=setTimeout(r,aa)},s=e=>{let t=[...document.querySelectorAll(`[data-copy="${CSS.escape(e)}"]`)],n=t.find(e=>e.getClientRects().length>0);return n?{el:n,laidOut:!0}:{el:t[0]??null,laidOut:!1}},c=e=>{if(e.source!==window.parent||e.origin!==window.location.origin)return;let n=e.data;if(!n||n.type!==ra||typeof n.key!=`string`)return;let c=n.key;clearTimeout(i),clearTimeout(a),r();let l=s(c);if(l.el&&o(l.el,!1),l.el&&l.laidOut)return;let u=0,d=()=>{let{el:e,laidOut:n}=s(c);if(e&&n){o(e,!0);return}++u<sa?i=setTimeout(d,ca):e&&e!==t&&o(e,!0)};i=setTimeout(d,ca)};return window.addEventListener(`message`,c),window.parent.postMessage({type:oa},window.location.origin),()=>{window.removeEventListener(`message`,c),clearTimeout(i),clearTimeout(a),r()}},[e])}var da=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),H=o(((e,t)=>{t.exports=da()}))(),fa=(0,_.createContext)({}),pa=`hd:copy-draft`;function ma({page:e,children:t,acceptDrafts:n,extraCopy:r}){let[i,a]=(0,_.useState)({}),o=n??(typeof window<`u`&&window.parent!==window);(0,_.useEffect)(()=>{if(!o)return;let e=e=>{if(e.source!==window.parent||e.origin!==window.location.origin)return;let t=e.data;if(t&&t.type===pa&&t.copy&&typeof t.copy==`object`){let e=Object.entries(t.copy).filter(e=>typeof e[1]==`string`);a(Object.fromEntries(e))}};return window.addEventListener(`message`,e),()=>window.removeEventListener(`message`,e)},[o]),ua(o&&!1);let s=(r??[]).join(`,`),c=(0,_.useMemo)(()=>{let t=ea(na.chrome),n=Object.assign({},...(r??[]).map(e=>ea(na[e]))),a=e&&e!==`chrome`?ea(na[e]):{};return{...t,...n,...a,...i}},[e,i,s]);return(0,H.jsx)(fa.Provider,{value:c,children:t})}var ha=/\[([^\]]+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)|\*\*((?:[^*]|\*(?!\*))+)\*\*|\*([^*]+)\*|\{(\w+)\}/g,ga=/^\/(?![/\\])/,_a=/^(https?:|mailto:|#[\w-]+$)/i;function va(e,t={}){let n=[],r=0,i=0,a=new RegExp(ha.source,`g`),o;for(;o=a.exec(e);)o.index>r&&n.push(e.slice(r,o.index)),o[1]===void 0?o[3]===void 0?o[4]===void 0?o[5]!==void 0&&n.push(Object.hasOwn(t,o[5])?(0,H.jsx)(`span`,{children:t[o[5]]},i++):`{${o[5]}}`):n.push((0,H.jsx)(`em`,{children:va(o[4],t)},i++)):n.push((0,H.jsx)(`strong`,{children:va(o[3],t)},i++)):ga.test(o[2])?n.push((0,H.jsx)(Ri,{to:o[2],children:va(o[1],t)},i++)):_a.test(o[2])?n.push((0,H.jsx)(`a`,{href:o[2],children:va(o[1],t)},i++)):n.push(o[1]),r=o.index+o[0].length;return r<e.length&&n.push(e.slice(r)),n}function ya(e){return e.split(/\n\s*\n/)}function ba(e,t){let n=ya(e);return n.length===1?va(e,t):n.map((e,n)=>(0,H.jsx)(`p`,{children:va(e,t)},n))}function xa(e,t={}){return e.replace(/\{(\w+)\}/g,(e,n)=>Object.hasOwn(t,n)?String(t[n]):e)}function Sa(e){return(0,_.useContext)(fa)[e]}function Ca(e,t){let n=Sa(e);return n===void 0?null:ba(n,t)}function wa(e,t){let n=Sa(e);return n===void 0?``:xa(n,t)}function U(){let e=(0,_.useContext)(fa);return(0,_.useCallback)((t,n)=>{let r=e[t];return r===void 0?``:xa(r,n)},[e])}function W({k:e,as:t,vars:n,className:r,id:i,htmlFor:a,"aria-live":o}){let s=Ca(e,n),c=Sa(e);if(!t)return(0,H.jsx)(H.Fragment,{children:s});if(t===`p`&&c!==void 0){let t=ya(c);if(t.length>1)return(0,H.jsx)(H.Fragment,{children:t.map((t,a)=>(0,H.jsx)(`p`,{className:r,id:a===0?i:void 0,"data-copy":e,"aria-live":o,children:va(t,n)},a))})}return(0,_.createElement)(t,{className:r,id:i,htmlFor:a,"data-copy":e,"aria-live":o},s)}function G(e){return{"data-copy":e}}function Ta(){let e=Nr();return e[e.length-1]?.handle??{page:null}}function Ea(e){return e.page?`${e.page}.doctitle`:e.titleKey??`notfound.doctitle`}function Da({handle:e}){let t=(0,_.useContext)(fa),n=t[`header.brand`]??``,r=t[Ea(e)];return(0,_.useEffect)(()=>{document.title=r?`${r}, ${n}`:n},[r,n]),null}function Oa(){return(0,H.jsx)(Da,{handle:Ta()})}var ka=`hd-theme`,Aa=[`system`,`light`,`dark`],ja={system:`Theme follows your system. Switch to light`,light:`Light theme. Switch to dark`,dark:`Dark theme. Switch to system`};function Ma(){try{let e=localStorage.getItem(ka);return e===`light`||e===`dark`?e:`system`}catch{return`system`}}function Na(e){try{localStorage.setItem(ka,e)}catch{}}function Pa(e){let t=document.documentElement;e===`system`?t.removeAttribute(`data-theme`):t.setAttribute(`data-theme`,e),document.dispatchEvent(new CustomEvent(`hd:themechange`,{detail:{theme:e}}))}function Fa(){let[e,t]=(0,_.useState)(Ma);return(0,_.useEffect)(()=>{Pa(e)},[e]),[e,(0,_.useCallback)(()=>{t(e=>{let t=Aa[(Aa.indexOf(e)+1)%Aa.length];return Na(t),t})},[])]}function Ia(){let[e,t]=Fa(),n=ja[e];return(0,H.jsxs)(`button`,{className:`theme`,type:`button`,"data-theme":e,"aria-label":n,title:n,onClick:t,children:[(0,H.jsxs)(`svg`,{className:`t-system`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,H.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`}),(0,H.jsx)(`path`,{d:`M12 4a8 8 0 0 1 0 16z`,fill:`currentColor`})]}),(0,H.jsxs)(`svg`,{className:`t-light`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,H.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4.5`,fill:`currentColor`}),(0,H.jsx)(`g`,{stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,children:(0,H.jsx)(`path`,{d:`M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1`})})]}),(0,H.jsx)(`svg`,{className:`t-dark`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,H.jsx)(`path`,{d:`M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z`,fill:`currentColor`})})]})}function La(){return(0,H.jsx)(`header`,{className:`top`,children:(0,H.jsxs)(`div`,{className:`wrap`,children:[(0,H.jsxs)(`div`,{className:`brand`,...G(`header.brand`),children:[(0,H.jsx)(W,{k:`header.brand`}),(0,H.jsx)(W,{k:`header.brand.sub`,as:`span`})]}),(0,H.jsxs)(`nav`,{className:`nav`,"aria-label":`Site`,children:[(0,H.jsx)(zi,{to:`/`,end:!0,...G(`nav.intro`),children:(0,H.jsx)(W,{k:`nav.intro`})}),(0,H.jsx)(zi,{to:`/staging`,...G(`nav.staging`),children:(0,H.jsx)(W,{k:`nav.staging`})}),(0,H.jsx)(zi,{to:`/prognostic`,...G(`nav.prognostic`),children:(0,H.jsx)(W,{k:`nav.prognostic`})}),(0,H.jsx)(zi,{to:`/brain-age`,...G(`nav.brainage`),children:(0,H.jsx)(W,{k:`nav.brainage`})}),(0,H.jsx)(zi,{to:`/about`,...G(`nav.about`),children:(0,H.jsx)(W,{k:`nav.about`})})]}),(0,H.jsx)(`div`,{className:`caps`,children:(0,H.jsx)(Ia,{})})]})})}function Ra({to:e,share:t=!1,onClick:n,...r}){return(0,H.jsx)(`a`,{href:`#${e}`,onClick:r=>{if(n?.(r),!t||r.defaultPrevented)return;let i=document.getElementById(e);i&&(r.preventDefault(),i.scrollIntoView(),i.focus({preventScroll:!0}))},...r})}var za=`https://github.com/Evan-Kun/hd-platform`;function Ba(){return(0,H.jsx)(`footer`,{children:(0,H.jsxs)(`div`,{className:`wrap`,children:[(0,H.jsx)(W,{k:`footer.lab`,as:`p`,className:`who`}),(0,H.jsx)(`a`,{className:`repo`,href:za,...G(`footer.github`),children:(0,H.jsx)(W,{k:`footer.github`})}),(0,H.jsx)(W,{k:`footer.ack`,as:`p`,className:`ack`})]})})}function Va(e){let{pathname:t}=dr(),n=(0,_.useRef)(t);(0,_.useEffect)(()=>{n.current!==t&&(n.current=t,e.current?.focus({preventScroll:!0}))},[t,e])}function Ha(){let{page:e,extraCopy:t}=Ta(),n=(0,_.useRef)(null);return Va(n),(0,H.jsxs)(ma,{page:e,extraCopy:t,children:[(0,H.jsx)(Oa,{}),(0,H.jsx)(Ra,{className:`skip`,to:`content`,...G(`skip.link`),children:(0,H.jsx)(W,{k:`skip.link`})}),(0,H.jsx)(La,{}),(0,H.jsx)(`main`,{ref:n,id:`content`,tabIndex:-1,children:(0,H.jsx)(Kr,{})}),(0,H.jsx)(Ba,{}),(0,H.jsx)(Vi,{})]})}function Ua({titleKey:e,ledeKey:t,titleId:n}){return(0,H.jsxs)(`header`,{className:`page-head`,children:[(0,H.jsx)(W,{k:e,as:`h1`,id:n,className:`page-title`}),(0,H.jsx)(W,{k:t,as:`p`,className:`page-lede`})]})}var Wa={"Lateral-Ventricle":`Lateral ventricles`,"Inf-Lat-Vent":`Inferior lateral ventricles`,"3rd-Ventricle":`Third ventricle`,"4th-Ventricle":`Fourth ventricle`,CSF:`Cerebrospinal fluid`,"choroid-plexus":`Choroid plexus`,"WM-hypointensities":`White-matter hypointensities`,"Cerebellum-White-Matter":`Cerebellar white matter`,"Cerebellum-Cortex":`Cerebellar cortex`,Thalamus:`Thalamus`,Caudate:`Caudate`,Putamen:`Putamen`,Pallidum:`Pallidum`,"Brain-Stem":`Brain stem`,Hippocampus:`Hippocampus`,Amygdala:`Amygdala`,"Accumbens-area":`Nucleus accumbens`,VentralDC:`Ventral diencephalon`,vessel:`Vessels`,"Optic-Chiasm":`Optic chiasm`};function Ga(e){return Wa[e.name]??e.label}function Ka(e){return new Map(e.features.map(e=>[e.name,{...e,label:Ga(e)}]))}function qa(e,t,n,r={}){if(r.raw&&!(r.etiv&&r.etiv>0))throw Error(`a raw record needs eTIV to normalise volumes`);let i=Ka(t),a=new Float32Array(n.length),o=[];return n.forEach((t,n)=>{let s=i.get(t);if(!s)throw Error(`configuration column ${t} is not in the spec`);let c=e[t],l=`ok`;c==null||Number.isNaN(c)?(c=s.median,l=`imputed`):r.raw&&s.normalise===`etiv_fraction`&&(c/=r.etiv),l===`ok`&&(c<s.p1||c>s.p99)&&(l=`out_of_range`),a[n]=c,o.push({feature:t,value:c,status:l})}),{x:a,status:o}}var Ja=[`whole`,`subcortical`,`temporal`,`parietal`,`frontal`,`insula`,`occipital`],Ya={prognostic:{id:`prognostic`,backend:`wasm`,files:{spec:`spec.json`,metadata:`metadata.json`,examples:`examples.json`,story:`story.json`}},brainage:{id:`brainage`,backend:`wasm`,files:{spec:`spec.json`}}};function Xa(e){let t=Ya[e];if(t.id!==`prognostic`)throw Error(`${e} is not a forest model`);return t}var Za=null;function Qa(){return Za??`/hd-platform/`}function $a(){return typeof document>`u`?void 0:new URL(`/hd-platform/`,document.baseURI).href}function eo(e,t){return`${Qa()}models/${e}/${t}`}async function to(e){let t=await fetch(e);if(!t.ok)throw Error(`could not load ${e.split(`/`).slice(-3).join(`/`)} (${t.status})`);return await t.json()}async function no(e){let t=await fetch(e);if(!t.ok)throw Error(`could not load ${e.split(`/`).slice(-3).join(`/`)} (${t.status})`);return new Uint8Array(await t.arrayBuffer())}var ro=new Map,io=new Map,ao=[`ageAtscan`,`cag`,`Lateral-Ventricle`],oo=[`slope`,`prob`,`pin`,`observed`,`normal_rate`],so=new Set([0,1,2,3,null]),co=e=>typeof e==`number`&&Number.isFinite(e),lo=e=>Array.isArray(e)&&e.every(co);function uo(e){let t=e.cast;if(!Array.isArray(t)||t.length===0)return Error(`the story’s cast is empty`);let n=t.findIndex(e=>{if(typeof e!=`object`||!e)return!0;let t=e,n=t.features;return typeof n!=`object`||!n||!ao.every(e=>co(n[e]))||!so.has(t.stage)||!oo.every(e=>co(t[e]))});if(n>=0)return Error(`the story’s cast row ${n+1} is malformed`);let r=e.rate_density_by_stage;if(typeof r!=`object`||!r)return Error(`the story’s rate densities are missing`);for(let e of[`0`,`1`,`2`,`3`]){let t=r[e];if(!t||!lo(t.x)||!lo(t.y)||t.x.length!==t.y.length)return Error(`the story’s rate density for stage ${e} is malformed`)}return{rows:t,rateDensity:r}}function fo(e){let t=ro.get(e);if(!t){let n=Xa(e);t=Promise.all([to(eo(e,n.files.spec)),to(eo(e,n.files.metadata)),to(eo(e,n.files.examples)),to(eo(e,n.files.story))]).then(([t,n,r,i])=>(io.set(e,uo(i)),{spec:t,metadata:n,examples:r,story:{density_grid:i.density_grid,stage_boxes:i.stage_boxes,ageing:i.ageing,shap_summary:i.shap_summary,tree_indices:i.tree_indices,fraction_above_750:i.fraction_above_750,ladder:i.ladder,castLength:i.cast?.length??0}})),t.catch(()=>ro.delete(e)),ro.set(e,t)}return t}async function po(e){await fo(e);let t=io.get(e);if(!t)throw Error(`the story’s cast is empty`);if(t instanceof Error)throw t;return t}var mo=null;function ho(){if(!mo){let e=(async()=>{let e=await to(eo(`brainage`,Ya.brainage.files.spec)),t=Object.keys(e.models),[n,r]=await Promise.all([Promise.all(t.map(t=>to(eo(`brainage`,e.models[t].trees)))),Promise.all(t.map(t=>no(eo(`brainage`,e.models[t].onnx))))]);return{spec:e,trees:Object.fromEntries(t.map((e,t)=>[e,n[t]])),onnx:Object.fromEntries(t.map((e,t)=>[e,r[t]]))}})();e.catch(()=>{mo=null}),mo=e}return mo}var go=null;function _o(){if(!go){let e=to(eo(`brainage`,`examples.json`));e.catch(()=>{go=null}),go=e}return go}var vo=null;function yo(){if(!vo){let e=to(eo(`brainage`,`metadata.json`));e.catch(()=>{vo=null}),vo=e}return vo}var bo=[`0`,`1`,`2`,`3`];function xo(e){if(!Array.isArray(e))throw Error(`the brain-age cast is not a list`);let t=[];for(let n of e){if(`x`in n)throw Error(`cast row carries measurements`);let e=n.gaps;(n.stage===null||typeof n.stage==`string`&&bo.includes(n.stage))&&e&&Ja.every(t=>typeof e[t]==`number`)&&t.push(n)}return t}var So=null;function Co(){if(!So){let e=(async()=>{let e=await fetch(eo(`brainage`,`cast.json`));if(e.status===404)return[];if(!e.ok)throw Error(`could not load brainage/cast.json (${e.status})`);return xo(await e.json())})();e.catch(()=>{So=null}),So=e}return So}function wo(){return new Worker(new URL(`/hd-platform/assets/worker-D64enBoP.js`,``+import.meta.url),{type:`module`})}var To=class{port;next=0;pending=new Map;ready=null;latestId=-1;constructor(e=wo()){this.port=e,this.port.addEventListener(`message`,e=>{let t=this.pending.get(e.data.id);t&&(this.pending.delete(e.data.id),e.data.type===`error`?t.reject(Error(e.data.message)):t.resolve(e.data))}),this.port.addEventListener(`error`,e=>this.failAll(Error(e.message||`the model worker failed`))),this.port.addEventListener(`messageerror`,()=>this.failAll(Error(`the model worker failed`)))}failAll(e){let t=[...this.pending.values()];this.pending.clear();for(let n of t)n.reject(e)}get state(){return this.ready}send(e,t,n=[]){let r=this.next++;return this.latestId=r,new Promise((i,a)=>{this.pending.set(r,{resolve:e=>e.type===t?i(e):a(Error(`unexpected ${e.type} reply`)),reject:a}),this.port.postMessage({...e,id:r},n)})}async load(e,t){let n=await this.send({type:`load`,model:e,configuration:t,base:$a()},`ready`);return this.ready={configuration:n.configuration,columns:n.columns,treeCounts:n.treeCounts,engine:n.engine},this.ready}assertLoaded(){if(!this.ready)throw Error(`no model is loaded yet`)}async predict(e,t){this.assertLoaded();let n=await this.send({type:`predict`,x:e,k:t},`prediction`,[e.buffer]);return{rate:n.rate,prob:n.prob,votes:n.votes,engine:n.engine,used:n.used}}async explain(e,t){this.assertLoaded();let n=await this.send({type:`explain`,x:e,k:t},`explanation`,[e.buffer]);return{reg:n.reg,clf:n.clf,base:n.base,used:n.used}}async batch(e,t){return this.assertLoaded(),(await this.send({type:`batch`,X:e,rows:t},`batch`,[e.buffer])).rates}async gallery(e,t,n,r){return this.assertLoaded(),(await this.send({type:`gallery`,x:e,which:t,indices:n,...r===void 0?{}:{depth:r}},`gallery`,[e.buffer])).trees}async loadBrainAge(){let e=await this.send({type:`brainage-load`,base:$a()},`brainage-ready`);return{models:e.models,engine:e.engine}}async predictBrainAge(e,t){let n=await this.send({type:`brainage-predict`,x:e,age:t},`brainage`,[e.buffer]);return{answers:n.answers,harmonised:n.harmonised,ageOutOfRange:n.ageOutOfRange,engine:n.engine}}async brainAgesAt(e,t,n){return(await this.send({type:`brainage-trees`,x:e,age:t,k:n},`brainage-trees`)).ages}async treePath(e,t,n){let r=await this.send({type:`brainage-path`,model:e,x:t,k:n},`brainage-path`);return{steps:r.steps,leaf:r.leaf}}terminate(){this.port.terminate(),this.failAll(Error(`the model worker was terminated`)),this.ready=null}};function Eo(e,t={}){let[n,r]=(0,_.useState)(`loading`),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(0),[f,p]=(0,_.useState)(null),m=(0,_.useRef)(0),h=(0,_.useRef)(null),{configuration:g,files:v=fo,host:y=()=>new To}=t;(0,_.useEffect)(()=>{let t=!1;r(`loading`),a(null),l(null);let n=y();return p(n),(async()=>{try{let i=await v(e);if(t)return;s(i);let a=await n.load(e,g??i.metadata.served_configuration);if(t)return;l(a),r(`ready`)}catch(e){if(t)return;a(e instanceof Error?e.message:String(e)),r(`error`)}})(),()=>{t=!0,n.terminate()}},[e,g,u]);let b=(0,_.useCallback)(()=>d(e=>e+1),[]),x=(0,_.useCallback)(async t=>{if(!f||!c||t===(h.current??c.configuration))return;let n=++m.current;h.current=t,r(`loading`),a(null);try{let i=await f.load(e,t);if(l(i),n!==m.current)return;h.current=null,r(`ready`)}catch(e){if(n!==m.current)return;h.current=null,a(e instanceof Error?e.message:String(e)),r(`ready`)}},[f,c,e]);return{status:n,error:i,files:o,ready:c,worker:c&&n!==`error`?f:null,retry:b,switchConfiguration:x}}var Do=[{key:`who`,configuration:`I`,groups:[`Sex`,`Age`,`CAP`],src:`clinic`},{key:`cog`,configuration:`II`,groups:[`SDMT`,`SWR`],src:`clinic`},{key:`motor`,configuration:`III`,groups:[`TMS`],src:`clinic`},{key:`wm`,configuration:`IV`,groups:[`WM-hypointensities`],src:`mri`},{key:`deep`,configuration:`V`,groups:[`Subcortical`,`head size`],src:`mri`},{key:`vent`,configuration:`VI`,groups:[`Ventricular`],src:`mri`},{key:`ctx`,configuration:`VII`,groups:[`Cortical Thickness`],src:`mri`}],Oo=new Set(Do.map(e=>e.key)),ko=`cag`;function Ao(e,t){if(t===ko)return`who`;let n=e.features.find(e=>e.name===t)?.group;return n===void 0?null:Do.find(e=>e.groups.includes(n))?.key??null}function jo(e,t){return e.features.filter(n=>Ao(e,n.name)===t).map(e=>e.name)}function Mo(e){let t=Do.findIndex(t=>t.configuration===e);return t<0?Oo:new Set(Do.slice(0,t+1).map(e=>e.key))}function No(e,t,n){let r=new Set(t);for(let t of Do)for(let i of jo(e,t.key))n.has(t.key)?r.add(i):r.delete(i);r.add(`isMale`),r.add(`isFemale`),r.add(`CAP`);let i=new Set(e.features.map(e=>e.name));return new Set([...r].filter(e=>i.has(e)))}function Po(e,t,n){let r=new Map(e.features.map(e=>[e.name,e.group])),i={},a=null,o=-1;for(let[s,c]of Object.entries(e.configurations)){let e=[...new Set(c.filter(e=>!n.has(e)).map(e=>r.get(e)??e))];if(e.length){i[s]=e;continue}(c.length>o||c.length===o&&s===t)&&(o=c.length,a=s)}return{fits:a,needs:i}}var Fo=1e3,Io=[{id:`sex`,feature:null,group:`genetic`,scale:1,step:1,decimals:0},{id:`age`,feature:`ageAtscan`,group:`genetic`,scale:1,step:1,decimals:0},{id:`cag`,feature:`cag`,group:`genetic`,scale:1,step:1,decimals:0},{id:`tms`,feature:`TMS`,group:`clinical`,scale:1,step:1,decimals:0},{id:`sdmt`,feature:`SDMT`,group:`clinical`,scale:1,step:1,decimals:0},{id:`swr`,feature:`SWR`,group:`clinical`,scale:1,step:1,decimals:0},{id:`lv`,feature:`Lateral-Ventricle`,group:`imaging`,scale:Fo,step:.1,decimals:1},{id:`caudate`,feature:`Caudate`,group:`imaging`,scale:Fo,step:.01,decimals:2},{id:`putamen`,feature:`Putamen`,group:`imaging`,scale:Fo,step:.01,decimals:2},{id:`wm`,feature:`WM-hypointensities`,group:`imaging`,scale:Fo,step:.01,decimals:2}];function Lo(e,t){let n=Ka(t),r=t=>{let r=e[t];return typeof r==`number`&&!Number.isNaN(r)?r:n.get(t)?.median??NaN},i={sex:+(r(`isMale`)>=.5)};for(let e of Io)e.feature&&(i[e.id]=r(e.feature)*e.scale);return i}function Ro(e){return(51*e.tms-34*e.sdmt+7*e.age*(e.cag-34)-883)/1044}function zo(e,t){let n=t.map(e=>e.reduce((e,t)=>e+(t??0),0)),r=n.reduce((e,t)=>e+t,0)/2,i=0,a=n[0]??0;for(;a<r&&i<n.length-1;)a+=n[++i];return(e[i]+e[i+1])/2}function Bo(e){return e<.35?`moderate`:e>.65?`fast`:`mid`}var Vo=e=>`${e.reg}/${e.clf}`;function Ho(e,t){let n=e.state;return!!n&&n.configuration!==t}function Uo(e,t,n){let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(null),d=(0,_.useRef)(0),f=t.ready?.configuration??null,{reg:p,clf:m}=n;(0,_.useEffect)(()=>{let n=t.worker,r=++d.current;if(!e||!n||f===null){c(!1);return}c(!0);let a={reg:p,clf:m},s={configuration:f,width:e.length,k:Vo(a)},l=()=>r!==d.current||Ho(n,f),h=setTimeout(async()=>{try{let t=await n.predict(Float32Array.from(e),a);if(l())return;i({value:t,...s});let r=await n.explain(Float32Array.from(e),a);if(l())return;o({value:r,...s}),u(null)}catch(e){l()||u(e instanceof Error?e.message:String(e))}finally{r===d.current&&c(!1)}},100);return()=>clearTimeout(h)},[e,t.worker,f,p,m]);let h=t.ready?.columns.length??-1,g=e=>e&&e.configuration===f&&e.width===h&&e.k===Vo(n)?e.value:null;return{prediction:g(r),explanation:g(a),pending:s,error:l}}var Wo=(0,_.createContext)(null),Go=2,Ko={},qo=[],Jo={fits:null,needs:{}},Yo={kind:`example`,id:``},Xo=[`isMale`,`isFemale`,`ageAtscan`,`cag`,`CAP`,`TMS`,`SDMT`,`SWR`];function Zo(e,t,n){let r=e.base,i=r.kind===`upload`?r.record:t.find(e=>e.id===r.id)?.features??{};if(Object.keys(e.edits).length===0)return i;let a={...i,...e.edits},o=a.ageAtscan,s=a.cag;return n&&typeof o==`number`&&typeof s==`number`&&(a.CAP=o*(s-n.cap_offset)),a}function Qo({children:e,loaders:t}){let n=Eo(`prognostic`,t),r=(0,_.useMemo)(()=>n.files?.examples??[],[n.files]),i=n.files?.spec,[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(`reg`),[l,u]=(0,_.useState)(Oo),[d,f]=(0,_.useState)(100),p=(0,_.useMemo)(()=>r.length===0?null:{base:{kind:`example`,id:r[Math.min(Go,r.length-1)].id},edits:Ko},[r]),m=a??p,h=m?.base??null,g=m?.edits??Ko,v=Object.keys(g).length>0,y=(0,_.useMemo)(()=>h?h.kind===`upload`?{kind:`upload`}:{kind:`example`,id:h.id}:Yo,[h]),b=(0,_.useMemo)(()=>m?Zo(m,r,i):{},[m,r,i]),x=(0,_.useCallback)(e=>{r.some(t=>t.id===e)&&o({base:{kind:`example`,id:e},edits:Ko})},[r]),S=(0,_.useCallback)((e,t)=>{if(e===`CAP`)throw Error(`CAP is derived`);let n=e===`isMale`?{isMale:t,isFemale:1-t}:e===`isFemale`?{isFemale:t,isMale:1-t}:{[e]:t};o(e=>{let t=e??p;return t?{base:t.base,edits:{...t.edits,...n}}:e})},[p]),C=(0,_.useCallback)(e=>{let t=new Set(e.flatMap(e=>e===`isMale`||e===`isFemale`?[`isMale`,`isFemale`]:[e]));o(e=>{let n=e??p;if(!n)return e;let r=Object.fromEntries(Object.entries(n.edits).filter(([e])=>!t.has(e)));return{base:n.base,edits:Object.keys(r).length?r:Ko}})},[p]),w=(0,_.useCallback)(()=>{o(e=>{let t=e??p;return t?{base:t.base,edits:Ko}:e})},[p]),T=(0,_.useCallback)((e,t)=>{let n=Io.find(t=>t.id===e);n.feature?S(n.feature,t/n.scale):S(`isMale`,t)},[S]),E=(0,_.useCallback)(e=>{o(t=>{let n=t??p;if(!n)return t;if(!e)return n.base.kind===`upload`?{base:{kind:`example`,id:n.base.from},edits:Ko}:t;let a=Zo(n,r,i),o=Object.fromEntries(Xo.map(e=>[e,a[e]])),s=n.base.kind===`upload`?n.base.from:n.base.id;return{base:{kind:`upload`,record:{...e.record,...o},report:e,from:s},edits:Ko}})},[p,r,i]),D=(0,_.useMemo)(()=>!m||!i||!n.ready?null:qa(b,i,n.ready.columns),[m,b,i,n.ready]),O=D?.x??null,k=n.ready?.treeCounts,A=(0,_.useMemo)(()=>({reg:k?Math.max(1,Math.round(k.regressor*d/100)):0,clf:k?Math.max(1,Math.round(k.classifier*d/100)):0}),[k,d]),j=(0,_.useCallback)(e=>f(Math.min(100,Math.max(1,Math.round(e)))),[]),M=Uo(O,n,A),N=(0,_.useMemo)(()=>i?h?.kind===`upload`?new Set([...h.report.read,...Xo]):h?.kind===`example`?new Set(i.features.map(e=>e.name)):new Set:new Set,[i,h]),P=n.files?.metadata.served_configuration,F=(0,_.useMemo)(()=>i?No(i,N,l):new Set,[i,N,l]),I=(0,_.useMemo)(()=>i&&P?Po(i,P,F):Jo,[i,P,F]),L=n.ready?.configuration,R=n.switchConfiguration,ee=(0,_.useRef)(!1),te=(0,_.useCallback)(e=>{let t=e.has(`who`)?e:new Set([...e,`who`]);if(u(t),L||(ee.current=!0),!i||!P)return;let n=Po(i,P,No(i,N,t)).fits;n&&R(n)},[i,P,N,R,L]),ne=I.fits;(0,_.useEffect)(()=>{L&&ee.current&&(ee.current=!1,ne&&ne!==L&&R(ne))},[L===void 0]);let re=(0,_.useMemo)(()=>i&&m?Lo(b,i):Object.fromEntries(Io.map(e=>[e.id,0])),[i,m,b]),ie=(0,_.useMemo)(()=>({model:n,prognosis:M,x:O,record:b,edits:g,edited:v,setEdit:S,resetEdit:C,resetEdits:w,inputs:re,setInput:T,pin:Ro(re),source:y,pickExample:x,explain:s,setExplain:c,base:h,setUpload:E,have:l,setHave:te,supplied:F,proposal:I,status:D?.status??qo,configuration:L??``,switchConfiguration:R,trees:d,setTrees:j,k:A}),[n,M,O,b,g,v,S,C,w,re,T,y,x,s,h,E,l,te,F,I,D,L,R,d,j,A]);return(0,H.jsx)(Wo.Provider,{value:ie,children:e})}function $o(){let e=(0,_.useContext)(Wo);if(!e)throw Error(`usePrognostic outside PrognosticProvider`);return e}var es=[`watch`,`tool`,`story`];function ts({chapters:e}){let t=wa(`prognostic.contents.label`),[n,r]=(0,_.useState)(null);(0,_.useEffect)(()=>{if(typeof IntersectionObserver>`u`)return;let e=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&r(t.target.id)},{rootMargin:`-40% 0px -55% 0px`});for(let t of es){let n=document.getElementById(t);n&&e.observe(n)}return()=>e.disconnect()},[]);let i=e=>n===e?`true`:void 0;return(0,H.jsx)(`div`,{className:`page-bar`,children:(0,H.jsxs)(`div`,{className:`wrap`,children:[(0,H.jsx)(W,{k:`prognostic.bar.source`,as:`p`,className:`source`}),(0,H.jsxs)(`nav`,{"aria-label":t,children:[(0,H.jsxs)(Ra,{to:`watch`,"aria-current":i(`watch`),...G(`prognostic.contents.watch`),children:[(0,H.jsx)(W,{k:`prognostic.contents.watch`}),` `,(0,H.jsx)(W,{k:`prognostic.contents.watch.note`,as:`small`})]}),(0,H.jsx)(`span`,{className:`arrow`,"aria-hidden":`true`,children:`→`}),(0,H.jsxs)(Ra,{to:`tool`,"aria-current":i(`tool`),...G(`prognostic.contents.try`),children:[(0,H.jsx)(W,{k:`prognostic.contents.try`}),` `,(0,H.jsx)(W,{k:`prognostic.contents.try.note`,as:`small`})]}),(0,H.jsx)(`span`,{className:`arrow`,"aria-hidden":`true`,children:`→`}),(0,H.jsxs)(Ra,{to:`story`,"aria-current":i(`story`),...G(`prognostic.contents.how`),children:[(0,H.jsx)(W,{k:`prognostic.contents.how`}),` `,(0,H.jsx)(W,{k:`prognostic.contents.how.note`,as:`small`,vars:{total:e}})]})]})]})})}var ns={T0:14,PH:150,PW:290},rs=ns.T0+ns.PH;function is(e,t,n){let r=Math.log(e[0]),i=Math.log(e[e.length-1])-r;return e=>n-(Math.log(e)-r)/i*(n-t)}function as(e,t,n,r){return i=>n+(i-e)/(t-e)*(r-n)}var os=(e,t,n)=>Math.max(t,Math.min(n,e));function ss(e,t,n,r){let i=e.pin_edges,a=e.rate_edges,o=Math.min(t-12,64+ns.PW),s=as(i[0],i[i.length-1],64,o),c=is(a,ns.T0,rs),l=Math.max(...e.counts.flat().filter(e=>e!=null)),u=[];e.counts.forEach((e,t)=>e.forEach((e,n)=>{e!=null&&u.push({x:s(i[t]),y:c(a[n+1]),w:s(i[t+1])-s(i[t])+.4,h:c(a[n])-c(a[n+1])+.4,opacity:.08+.62*Math.sqrt(e/l)})}));let d=s(os(n,i[0],i[i.length-1]));return{xp:s,yr:c,L0:64,R0:o,CB:rs,cells:u,point:{x:d,y:c(os(r,a[0],a[a.length-1])),left:d>o-120}}}function cs(e,t,n){let r=Math.min(e-8,64+ns.PW),i=e=>rs-e*(rs-ns.T0);return{bl:64,br:r,cw:(r-64)/4,yp:i,line:{y:i(t),labelLeft:t>n[4]+.06}}}var ls=(e,t,n)=>e+3*t/n;function us(e,t,n){let r=Math.min(t-10,340),i=rs,{patients:a,controls:o}=e.curves,s=e.cells.filter(e=>e.stage!==`all`).map(e=>ls(e.lv0,e.obs_rate,e.etiv)),c=Math.max(...a,...o,...s,n)*1.08;return{al:50,ar:r,AB:i,xa:as(18,78,50,r),ya:e=>i-e/c*(i-ns.T0),ymax:c,step:c*1e3>30?10:5,legendY:i+62,height:i+48+70}}function ds(e,t,n,r,i){let a=Math.atan2(r-t,n-e),o=4+i*1.6;return{line:{x1:e,y1:t,x2:n-Math.cos(a)*o*.6,y2:r-Math.sin(a)*o*.6},head:`M${n} ${r}L${n-o*Math.cos(a-.45)} ${r-o*Math.sin(a-.45)}L${n-o*Math.cos(a+.45)} ${r-o*Math.sin(a+.45)}Z`}}function fs(e,t,n,r){return e.top+r*(e.width/e.viewW)<n&&t>n+60}var ps=e=>parseFloat(getComputedStyle(document.documentElement).getPropertyValue(e))||0;function ms(e){let t=e?.querySelector(`svg.flow`);if(!t)return 1;let n=t.getBoundingClientRect().width,r=Number(t.getAttribute(`viewBox`)?.split(/[\s,]+/)[2]);return n>0&&r>0?n/r:1}function hs(e){let t=getComputedStyle(e);return e.clientWidth-(parseFloat(t.paddingLeft)||0)-(parseFloat(t.paddingRight)||0)}function gs(e,t){let[n,r]=(0,_.useState)(1);return(0,_.useEffect)(()=>{let t=()=>r(ms(e.current));t();let n=e.current;if(typeof ResizeObserver>`u`)return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t);let i=new ResizeObserver(t),a=n?.querySelector(`svg.flow`);return n&&i.observe(n),a&&i.observe(a),window.addEventListener(`resize`,t),()=>{i.disconnect(),window.removeEventListener(`resize`,t)}},[e,t]),n}var _s=3,vs=[`0`,`1`,`2`,`3`],ys=[20,30,40,50,60,70];function bs({x:e,y:t,anchor:n=`end`,children:r,...i}){return(0,H.jsx)(`text`,{className:`axis`,x:e,y:t,textAnchor:n,fontSize:11,style:{fill:`var(--ink-3)`},...i,children:r})}function xs({x1:e,y1:t,x2:n,y2:r,w:i,colour:a,className:o}){let s=ds(e,t,n,r,i);return(0,H.jsxs)(`g`,{className:o,children:[(0,H.jsx)(`line`,{...s.line,strokeWidth:i,style:{stroke:a}}),(0,H.jsx)(`path`,{d:s.head,style:{fill:a}})]})}function Ss(e){let t=U(),n=(0,_.useRef)(null),r=e.rootRef??n,[i,a]=(0,_.useState)(280);(0,_.useEffect)(()=>{let e=r.current;if(!e)return;let t=()=>a(Math.max(280,Math.round(hs(e))));if(t(),typeof ResizeObserver>`u`)return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t);let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[r]);let o=`ctxcard${e.pending?` is-loading`:``}`,s=(0,H.jsx)(`h3`,{...G(`prognostic.ageing.title`),children:t(`prognostic.ageing.title`)});if(!e.ageing)return(0,H.jsxs)(`div`,{ref:r,className:o,id:`cxAgeingCard`,"data-state":e.state??void 0,children:[s,(0,H.jsx)(`p`,{className:`quiet`,...G(`prognostic.cohort.missing`),children:t(`prognostic.cohort.missing`)})]});let c=Math.round(i/e.scale),l=ls(e.lv,Math.max(0,e.rate),e.etiv),u=us(e.ageing,c,l),{age:d,patients:f,controls:p}=e.ageing.curves,m=e=>d.map((t,n)=>`${n?`L`:`M`}${u.xa(t)} ${u.ya(e[n])}`).join(``),h=e.ageing.cells.filter(e=>e.stage!==`all`),g=[];for(let e=0;e<=u.ymax*1e3;e+=u.step)g.push(e);let v=u.al,y=[[`line`,t(`prognostic.ageing.legend.patients`)],[`dash`,t(`prognostic.ageing.legend.controls`)],[`arrow`,t(`prognostic.ageing.legend.you`)]],b=u.legendY+16*y.length,x=(ns.T0+u.AB)/2;return(0,H.jsxs)(`div`,{ref:r,className:o,id:`cxAgeingCard`,"data-state":e.state??void 0,children:[s,(0,H.jsxs)(`svg`,{className:`cx-ageing`,viewBox:`0 0 ${c} ${u.height}`,role:`img`,"aria-label":t(`prognostic.ageing.label`),...G(`prognostic.ageing.label`),children:[g.map(e=>(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`line`,{x1:u.al,x2:u.ar,y1:u.ya(e/1e3),y2:u.ya(e/1e3),style:{stroke:`var(--line-2)`}}),(0,H.jsx)(bs,{x:u.al-6,y:u.ya(e/1e3)+4,children:String(e)})]},e)),ys.map(e=>(0,H.jsx)(bs,{x:u.xa(e),y:u.AB+16,anchor:`middle`,children:String(e)},e)),(0,H.jsx)(bs,{x:(u.al+u.ar)/2,y:u.AB+36,anchor:`middle`,children:(0,H.jsx)(`tspan`,{...G(`prognostic.ageing.xtitle`),children:t(`prognostic.ageing.xtitle`)})}),(0,H.jsx)(bs,{x:12,y:x,anchor:`middle`,transform:`rotate(-90 12 ${x})`,children:(0,H.jsx)(`tspan`,{...G(`prognostic.ageing.ytitle`),children:t(`prognostic.ageing.ytitle`)})}),(0,H.jsx)(`path`,{className:`controls`,d:m(p),fill:`none`,strokeWidth:1.8,strokeDasharray:`5 4`,style:{stroke:`var(--ink-3)`}}),(0,H.jsx)(`path`,{className:`patients`,d:m(f),fill:`none`,strokeWidth:1.8,style:{stroke:`var(--ink)`}}),h.map((e,t)=>(0,H.jsx)(xs,{className:`cell`,x1:u.xa(e.age),y1:u.ya(e.lv0),x2:u.xa(e.age+_s),y2:u.ya(ls(e.lv0,e.obs_rate,e.etiv)),w:2.4,colour:`var(--s${e.stage})`},t)),(0,H.jsxs)(`g`,{className:`you`,children:[(0,H.jsx)(xs,{x1:u.xa(e.age),y1:u.ya(e.lv),x2:u.xa(e.age+_s),y2:u.ya(l),w:3.2,colour:`var(--ink)`}),(0,H.jsx)(`circle`,{cx:u.xa(e.age),cy:u.ya(e.lv),r:5.5,strokeWidth:2,style:{fill:`var(--ink)`,stroke:`var(--bg)`}})]}),(0,H.jsxs)(`g`,{className:`legend`,children:[y.map(([e,t],n)=>{let r=u.legendY+16*n;return(0,H.jsxs)(`g`,{children:[e===`arrow`?(0,H.jsx)(xs,{x1:v,y1:r-4,x2:v+22,y2:r-4,w:3,colour:`var(--ink)`}):(0,H.jsx)(`line`,{x1:v,x2:v+22,y1:r-4,y2:r-4,strokeWidth:1.8,strokeDasharray:e===`dash`?`5 4`:void 0,style:{stroke:e===`dash`?`var(--ink-3)`:`var(--ink)`}}),(0,H.jsx)(`text`,{x:v+30,y:r,fontSize:11.5,style:{fill:`var(--ink-2)`},children:t})]},e)}),vs.map((e,t)=>(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`rect`,{x:v+30*t,y:b-9,width:10,height:10,rx:2,style:{fill:`var(--s${e})`}}),(0,H.jsx)(`text`,{x:v+30*t+13,y:b,fontSize:11.5,style:{fill:`var(--ink-2)`},children:e})]},e)),(0,H.jsx)(`text`,{x:v+122,y:b,fontSize:11.5,style:{fill:`var(--ink-2)`},...G(`prognostic.ageing.legend.stages`),children:t(`prognostic.ageing.legend.stages`)})]})]})]})}var Cs=e=>t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e())};function ws({x:e,y:t}){return(0,H.jsxs)(`g`,{className:`zoomi`,transform:`translate(${e},${t})`,"aria-hidden":`true`,children:[(0,H.jsx)(`circle`,{cx:0,cy:0,r:7}),(0,H.jsx)(`line`,{x1:-3.5,y1:0,x2:3.5,y2:0}),(0,H.jsx)(`line`,{x1:0,y1:-3.5,x2:0,y2:3.5}),(0,H.jsx)(`line`,{x1:5,y1:5,x2:9,y2:9})]})}var Ts={tissue:[167,179,191],hd:[200,85,61],accent:[0,109,174]};function Es(e){let t=e.trim(),n=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(t)?.[1];if(n){let e=n.length===3?[...n].map(e=>e+e).join(``):n;return[0,2,4].map(t=>parseInt(e.slice(t,t+2),16))}let r=/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i.exec(t);return r?[Number(r[1]),Number(r[2]),Number(r[3])]:null}function Ds(){if(typeof document>`u`)return Ts;let e=getComputedStyle(document.documentElement),t=(t,n)=>Es(e.getPropertyValue(t))??n;return{tissue:t(`--tissue`,Ts.tissue),hd:t(`--hd`,Ts.hd),accent:t(`--accent`,Ts.accent)}}function Os(e,t,n){let r=Number.isFinite(e)?Math.min(Math.abs(e)/t,1):0,i=e>=0?n.hd:n.accent,a=r**.7;return`rgb(`+n.tissue.map((e,t)=>Math.round(e+(i[t]-e)*a)).join(`,`)+`)`}function ks(e){return e===`fast`?`var(--hd)`:e===`mid`?`var(--mid)`:`var(--accent)`}var As={clf:.04,reg:120},js={clf:.08,reg:250},Ms={w:1760,h:660},K={top:96,h:500,bandGap:8,labX:286,barX:250,barW:26,srcX:40,cardX:560,cardW:300,regY:92,clfY:360,cardH:230,stripX0:960,stripX1:1250,endX:1340,endW:390},Ns={inputs:{x:250},forests:{x:K.cardX},avg:{x:K.stripX0-20},end:{x:K.endX}},Ps=30;function Fs(e){let t=new Set(e.configurations.VII),n=Do.map(n=>jo(e,n.key).filter(e=>t.has(e))),r=n.reduce((e,t)=>e+t.length,0),i=(K.h-K.bandGap*(Do.length-1)-Ps*Do.length)/r,a=K.top,o={};return Do.forEach((e,t)=>{let r=Ps+n[t].length*i;o[e.key]={y0:a,y1:a+r,cols:n[t]},a+=r+K.bandGap}),o}function Is(e,t,n,r,i,a){let o=(e+r)/2;return`M${e} ${t}C${o} ${t} ${o} ${i} ${r} ${i}L${r} ${a}C${o} ${a} ${o} ${n} ${e} ${n}Z`}var Ls=100,Rs=6e3,zs=e=>K.stripX0+(Math.log(Math.max(e,Ls))-Math.log(Ls))/(Math.log(Rs)-Math.log(Ls))*(K.stripX1-K.stripX0),Bs=e=>K.stripX0+e*(K.stripX1-K.stripX0);function Vs(e,t){return Ga(t).replace(/^lh /,()=>e(`prognostic.explainer.names.left`)+` `).replace(/^rh /,()=>e(`prognostic.explainer.names.right`)+` `)}function Hs(e,t,n){return t.name===`isMale`||t.name===`isFemale`?e(n>=.5?`prognostic.explainer.names.yes`:`prognostic.explainer.names.no`):t.normalise===`etiv_fraction`?(n*1e3).toFixed(2)+` `+e(`prognostic.explainer.names.permille`):t.name===`EstimatedTotalIntraCranialVol`?Math.round(n/1e3).toLocaleString(`en-AU`)+` `+e(`prognostic.explainer.names.cm3`):t.unit===`mm`?n.toFixed(2)+` `+e(`prognostic.explainer.names.mm`):(t.integer?Math.round(n):Math.round(n*10)/10).toLocaleString(`en-AU`)+(t.unit&&t.unit!==`points`?` `+t.unit:``)}function Us(e,t,n,r){return e(`prognostic.explainer.stripe.tip`,{name:Vs(e,t),value:Hs(e,t,n),edited:r?` `+e(`prognostic.explainer.stripe.edited`):``})}var Ws=e=>(Math.round(e/10)*10).toLocaleString(`en-AU`),Gs=e=>Math.round(e*100)+` %`;function Ks(e,t,n,r){let i=new Map(t.features.map(e=>[e.name,e]));return n.filter(t=>{let n=i.get(t),a=e[t];return(r.upload||r.edited.has(t))&&n!==void 0&&typeof a==`number`&&(a<n.p1||a>n.p99)})}var qs=142,Js=23,Ys=[`clf`,`reg`],Xs={fast:`tick`,mid:`dash`,moderate:`cross`};function Zs({svgRef:e,...t}){let n=U(),r=(0,_.useMemo)(()=>new Map(t.spec.features.map(e=>[e.name,e])),[t.spec]),i=K.endX,a=K.endW,o=ks(t.band),s=t.focus===`clf`,c=n(`prognostic.explainer.end.title`),l=Ns.end.x,u=Math.ceil(268+(t.steps.length+2)*Js+40),d=(0,_.useMemo)(()=>{let e=new Set(Object.keys(t.edits));return(e.has(`ageAtscan`)||e.has(`cag`))&&e.add(`CAP`),Ks(t.record,t.spec,t.columns,{edited:e,upload:t.upload})},[t.record,t.spec,t.columns,t.edits,t.upload]),f=d.length===1?n(`prognostic.explainer.range.one`,{name:Vs(n,r.get(d[0]))}):n(`prognostic.explainer.range.many`,{n:d.length,names:d.slice(0,3).map(e=>Vs(n,r.get(e))).join(`, `)+(d.length>3?`, …`:``)}),p=Ws(t.rate),m=n(`prognostic.explainer.end.rate`,{rate:p}),h=Math.max(m.indexOf(p),0),g=Gs(t.prob),v=String(Math.round(t.prob*100)),y=n(`prognostic.explainer.end.rule`),b=n(`prognostic.explainer.end.rule.${t.band}`),x=i+22,S=(y.length+1+b.length)*7.1+40,C=x+15,w=Xs[t.band],T=w===`tick`?`M${C-5} 179l3.5 3.5 6.5 -7`:w===`cross`?`M${C-4} 175l8 8M${C+4} 175l-8 8`:`M${C-5} 179h10`,E=[t.base,...t.steps.map(e=>e.to)],D=Math.min(...E),O=Math.max(...E),k=(O-D)*.08||.05;D-=k,O+=k,s&&(D=Math.max(0,D),O=Math.min(1,O));let A=i+158,j=i+a-44,M=e=>A+(e-D)/(O-D)*(j-A),N=e=>s?Gs(e):Ws(e),P=e=>(e>=0?`+`:`−`)+(s?Math.abs(e*100).toFixed(1):Math.round(Math.abs(e)).toLocaleString(`en-AU`)),F=n(`prognostic.explainer.wf.unit.${t.focus}`),I=s?t.prob:t.rate,L=268+(t.steps.length+1)*Js,R=M(I)>j-40,ee=Ys.map(e=>n(`prognostic.explainer.wf.tab.${e}`)),te=Ys.map((e,n)=>{let r=t.focus===e,a=ee[n],o=i+ee.slice(0,n).reduce((e,t)=>e+t.length*7.2+16,0),s=()=>t.onFocus(e);return(0,H.jsx)(`text`,{className:`wftab`,role:`tab`,tabIndex:0,"aria-selected":r,x:o,y:254,fontSize:13,fontWeight:r?700:400,textDecoration:r?`underline`:`none`,style:{fill:r?`var(--accent-ink)`:`var(--ink-3)`},onClick:s,onKeyDown:Cs(s),children:a},e)}),ne=(e,a)=>{let o=268+(a+1)*Js,s=M(Math.min(e.from,e.to)),c=Math.max(Math.abs(M(e.to)-M(e.from)),1.5),l=e.feature?r.get(e.feature):void 0,u=e.feature?l?Vs(n,l):e.feature:e.rest===1?n(`prognostic.explainer.wf.rest.one`):n(`prognostic.explainer.wf.rest`,{n:e.rest??0}),d=u.length>26?u.slice(0,25)+`…`:u,f=i+2+d.length*6.8,p=P(e.value).length*7,m=e.value>=0||Math.min(M(e.from),M(e.to))-4-p<f+6,h=m?Math.max(M(e.from),M(e.to))+4:Math.min(M(e.from),M(e.to))-4,g=(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`text`,{x:i+2,y:o+14,fontSize:13,className:e.feature?void 0:`ink-3`,children:d+(e.feature&&t.edits[e.feature]!==void 0?` ●`:``)}),(0,H.jsx)(`rect`,{x:s,y:o+4,width:c,height:14,rx:2,fill:e.value>=0?`var(--hd)`:`var(--accent)`,opacity:e.feature?1:.55,"data-from":e.from,"data-to":e.to}),(0,H.jsx)(`line`,{x1:M(e.to),x2:M(e.to),y1:o+4,y2:o+Js+4,stroke:`var(--ink-3)`,strokeWidth:.8}),(0,H.jsx)(`text`,{x:h,y:o+14,className:`small mono`,textAnchor:m?`start`:`end`,children:P(e.value)})]});if(!e.feature)return(0,H.jsx)(`g`,{className:`wfrow rest`,children:g},`rest`);let _=e.feature,v=P(e.value),y=l?Hs(n,l,Number(t.record[_]??l.median)):``,b=l?Hs(n,l,l.median):``,x=n(`prognostic.explainer.wf.tip`,{name:u,value:y,median:b,push:v,unit:F,direction:n(`prognostic.explainer.wf.towards.${e.value>=0?`fast`:`moderate`}`)});return(0,H.jsxs)(`g`,{className:`wfrow editable`,role:`button`,tabIndex:0,"data-feature":_,"aria-label":n(`prognostic.explainer.wf.row.aria`,{name:u,push:v,unit:F}),onClick:e=>t.onEdit([_],e.currentTarget),onKeyDown:e=>{let n=e.currentTarget;Cs(()=>t.onEdit([_],n))(e)},onPointerEnter:()=>t.onHover(_),onPointerLeave:()=>t.onHover(null),children:[(0,H.jsx)(`title`,{children:x}),g]},_)};return(0,H.jsxs)(`div`,{id:`reading`,tabIndex:-1,className:`answer`+(t.pending?` is-loading`:``),"aria-busy":t.pending,children:[(0,H.jsxs)(`svg`,{ref:e,id:`flowEnd`,className:`flow-end`,role:`group`,"aria-label":c,viewBox:`${K.endX-14} 0 ${K.endW+28} ${u}`,children:[(0,H.jsxs)(`g`,{className:`coltitle-g`+(t.opened===`end`?` on`:``),role:`button`,tabIndex:0,"aria-label":n(`prognostic.explainer.col.details`,{title:c}),onClick:t.onOpen,onKeyDown:Cs(t.onOpen),children:[(0,H.jsx)(`text`,{x:l,y:40,className:`coltitle`,...G(`prognostic.explainer.end.title`),children:c}),(0,H.jsx)(ws,{x:l+c.length*9.3+14,y:34})]}),(0,H.jsx)(`rect`,{className:`vframe`,x:i,y:70,width:a,height:qs,rx:10,fill:`var(--bg)`,stroke:o,strokeWidth:2}),(0,H.jsx)(`rect`,{className:`vbar`,x:i,y:70,width:6,height:qs,fill:o}),(0,H.jsx)(`text`,{"data-testid":`reading-verdict`,x:i+22,y:102,fontSize:21,fontWeight:800,style:{fill:o},children:n(`prognostic.verdict.${t.band}`)}),(0,H.jsxs)(`text`,{x:i+22,y:130,fontSize:15,children:[(0,H.jsxs)(`tspan`,{fontWeight:700,children:[m.slice(0,h),(0,H.jsx)(`tspan`,{"data-testid":`reading-rate`,"data-exact":String(t.rate),children:p}),m.slice(h+p.length)]}),(0,H.jsx)(`tspan`,{className:`ink-2`,children:` `+n(`prognostic.explainer.end.rate.rest`,{threshold:t.threshold})})]}),(0,H.jsxs)(`text`,{x:i+22,y:152,fontSize:15,children:[(0,H.jsxs)(`tspan`,{fontWeight:700,children:[(0,H.jsx)(`tspan`,{"data-testid":`reading-prob`,children:v}),g.slice(v.length)]}),(0,H.jsx)(`tspan`,{className:`ink-2`,...G(`prognostic.explainer.end.prob.rest`),children:` `+n(`prognostic.explainer.end.prob.rest`)})]}),(0,H.jsxs)(`g`,{className:`ruletag`,children:[(0,H.jsx)(`title`,{children:n(`prognostic.explainer.end.rule.long.${t.band}`)}),(0,H.jsx)(`rect`,{x,y:166,width:S,height:26,rx:13,fill:`var(--bg-2)`,stroke:`var(--line)`}),(0,H.jsx)(`path`,{"data-icon":w,d:T,fill:`none`,stroke:`var(--ink)`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsxs)(`text`,{x:x+28,y:183.5,fontSize:13.5,children:[(0,H.jsx)(`tspan`,{className:`ink-2`,...G(`prognostic.explainer.end.rule`),children:y+` `}),(0,H.jsx)(`tspan`,{fontWeight:700,children:b})]})]}),(0,H.jsx)(`text`,{x:i,y:234,fontSize:15,fontWeight:700,...G(`prognostic.explainer.wf.title`),children:n(`prognostic.explainer.wf.title`)}),(0,H.jsx)(`g`,{role:`tablist`,children:te}),(0,H.jsx)(`text`,{x:i+a,y:254,className:`small`,textAnchor:`end`,children:F}),(0,H.jsx)(`line`,{x1:M(t.base),x2:M(t.base),y1:268,y2:268+(t.steps.length+2)*Js-6,stroke:`var(--ink-3)`,strokeDasharray:`2 3`}),(0,H.jsx)(`text`,{x:i+2,y:283,fontSize:13,className:`ink-2`,...G(`prognostic.explainer.wf.start`),children:n(`prognostic.explainer.wf.start`)}),(0,H.jsx)(`text`,{x:M(t.base)+5,y:283,className:`small mono`,children:N(t.base)}),t.steps.map(ne),(0,H.jsx)(`text`,{x:i+2,y:L+15,fontSize:13,fontWeight:700,...G(`prognostic.explainer.wf.answer`),children:n(`prognostic.explainer.wf.answer`)}),(0,H.jsx)(`path`,{d:`M${M(I)} ${L+4}l-6 -8h12z`,fill:`var(--ink)`}),(0,H.jsx)(`text`,{x:M(I)+(R?-8:8),y:L+15,fontSize:13,fontWeight:700,className:`mono`,textAnchor:R?`end`:`start`,children:N(I)}),(0,H.jsxs)(`text`,{x:i+2,y:L+36,className:`small`,"data-wf-end":`1`,children:[(0,H.jsx)(`tspan`,{style:{fill:`var(--hd)`},children:`■`}),(0,H.jsx)(`tspan`,{...G(`prognostic.explainer.wf.legend.fast`),children:` `+n(`prognostic.explainer.wf.legend.fast`)+`  `}),(0,H.jsx)(`tspan`,{style:{fill:`var(--accent)`},children:`■`}),(0,H.jsx)(`tspan`,{...G(`prognostic.explainer.wf.legend.moderate`),children:` `+n(`prognostic.explainer.wf.legend.moderate`)+` · `}),(0,H.jsx)(`tspan`,{...G(`prognostic.explainer.wf.legend.note`),children:n(`prognostic.explainer.wf.legend.note`)})]})]}),d.length>0&&(0,H.jsx)(`p`,{className:`caution`,role:`note`,children:f})]})}var Qs=30,$s=150,ec=K.stripX0,tc=K.stripX1,nc=100,rc=6e3,ic={reg:[100,300,1e3,3e3],clf:[0,.25,.5,.75,1]};function ac(e){let t=U(),n=e.tokens??Ds(),r=t(`prognostic.explainer.avg.title`),i=Ns.avg.x,a=r=>{let i=r===`reg`,a=i?K.regY:K.clfY,o=a+30,s=o+$s,c=i?zs:Bs,l=e.k[r],u=(i?e.votes.rate:e.votes.prob).subarray(0,l),d=Array(Qs).fill(0);for(let e of u)d[Math.min(29,Math.max(0,Math.floor((c(e)-ec)/(tc-ec)*Qs)))]++;let f=Math.max(...d,1),p=(tc-ec)/Qs,m=e=>i?Math.exp(Math.log(nc)+(e+.5)/Qs*(Math.log(rc)-Math.log(nc))):(e+.5)/Qs,h=t=>i?Os(Math.log(m(t)/e.threshold),1.1,n):Os(m(t)-.5,.5,n),g=c(i?e.threshold:.5),_=i?e.rate:e.prob,v=Math.min(Math.max(c(_),ec),tc),y=v>tc-120;return(0,H.jsxs)(`g`,{className:`strip`,"data-forest":r,children:[(0,H.jsx)(`path`,{d:Is(K.cardX+K.cardW+8,a+60,a+K.cardH-40,ec-6,o+20,s),fill:`var(--line-2)`,opacity:.7}),!i&&(0,H.jsx)(`rect`,{className:`midband`,x:c(.35),y:o,width:c(.65)-c(.35),height:$s,fill:`var(--mid-soft)`}),d.map((e,t)=>e>0&&(0,H.jsx)(`rect`,{className:`bin`,"data-count":e,x:ec+t*p+1,y:s-e/f*124,width:p-2,height:e/f*124,rx:1,fill:h(t)},t)),(0,H.jsx)(`line`,{x1:ec,x2:tc,y1:s,y2:s,stroke:`var(--line)`}),(0,H.jsx)(`line`,{className:`thr`,x1:g,x2:g,y1:o+6,y2:s,stroke:`var(--ink-3)`,strokeDasharray:`3 3`}),(0,H.jsx)(`text`,{x:g+4,y:o+14,className:`small`,children:t(i?`prognostic.explainer.avg.line.reg`:`prognostic.explainer.avg.line.clf`)}),ic[r].map(e=>(0,H.jsx)(`text`,{x:c(e),y:s+15,className:`small mono`,textAnchor:`middle`,children:i?e.toLocaleString(`en-AU`):Gs(e)},e)),(0,H.jsx)(`text`,{x:ec,y:s+32,className:`small`,children:t(i?`prognostic.explainer.avg.axis.reg`:`prognostic.explainer.avg.axis.clf`)}),(0,H.jsx)(`path`,{className:`mean`,d:`M${v} ${o-2}l-7 -11h14z`,fill:`var(--ink)`}),(0,H.jsx)(`line`,{className:`mean`,x1:v,x2:v,y1:o-2,y2:s,stroke:`var(--ink)`,strokeWidth:2}),(0,H.jsx)(`text`,{x:Math.min(v,tc-120),y:o-18,fontSize:15,fontWeight:700,className:`mono`,textAnchor:y?`start`:`middle`,children:i?t(`prognostic.explainer.avg.mean.reg`,{rate:Ws(_)}):t(`prognostic.explainer.avg.mean.clf`,{pct:Gs(_)})})]},r)};return(0,H.jsxs)(`g`,{className:`p-avg`,children:[(0,H.jsxs)(`g`,{className:`coltitle-g`+(e.opened===`avg`?` on`:``),role:`button`,tabIndex:0,"aria-label":t(`prognostic.explainer.col.details`,{title:r}),onClick:e.onOpen,onKeyDown:Cs(e.onOpen),children:[(0,H.jsx)(`text`,{x:i,y:40,className:`coltitle`,...G(`prognostic.explainer.avg.title`),children:r}),(0,H.jsx)(ws,{x:i+r.length*9.3+14,y:34})]}),a(`reg`),a(`clf`)]})}var oc=ns.T0+ns.PH,sc=[300,500,1e3,2e3,4e3],cc=[-2,-1,0,1,2,3,4],lc=[0,.25,.5,.75,1];function uc({x:e,y:t,anchor:n=`end`,children:r,...i}){let{fill:a,...o}=i;return(0,H.jsx)(`text`,{className:`axis`,x:e,y:t,textAnchor:n,fontSize:11,style:{fill:a??`var(--ink-3)`},...o,children:r})}function dc(e){let t=U(),n=(0,_.useRef)(null),r=e.rootRef??n,[i,a]=(0,_.useState)(280);(0,_.useEffect)(()=>{let e=r.current;if(!e)return;let t=()=>a(Math.max(280,Math.round(hs(e))));if(t(),typeof ResizeObserver>`u`)return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t);let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[r]);let o=Math.round(i/e.scale),s=`0 0 ${o} ${oc+48}`,c=e.grid.pin_edges,l=e.pin??zo(c,e.grid.counts),u=ss(e.grid,o,l,e.rate),d=cs(o,e.prob,e.boxes[0]),f=t(`prognostic.cohort.stages.you`,{p:Gs(e.prob)});return(0,H.jsxs)(`div`,{ref:r,className:`ctxcard${e.pending?` is-loading`:``}`,id:`cxCohort`,"data-state":e.state??void 0,children:[(0,H.jsx)(`h3`,{...G(`prognostic.cohort.title`),children:t(`prognostic.cohort.title`)}),(0,H.jsxs)(`svg`,{className:`cx-density`,viewBox:s,role:`img`,"aria-label":t(`prognostic.cohort.density.label`),...G(`prognostic.cohort.density.label`),children:[u.cells.map((e,t)=>(0,H.jsx)(`rect`,{className:`cell`,x:e.x,y:e.y,width:e.w,height:e.h,style:{fill:`var(--ink-3)`},opacity:e.opacity},t)),(0,H.jsx)(`rect`,{className:`frame`,x:u.L0,y:ns.T0,width:u.R0-u.L0,height:ns.PH,fill:`none`,style:{stroke:`var(--line)`}}),sc.map(e=>(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`line`,{x1:u.L0-4,x2:u.L0,y1:u.yr(e),y2:u.yr(e),style:{stroke:`var(--ink-3)`}}),(0,H.jsx)(uc,{x:u.L0-7,y:u.yr(e)+4,children:e.toLocaleString(`en-AU`)})]},e)),(0,H.jsx)(`line`,{className:`thresh`,x1:u.L0,x2:u.R0,y1:u.yr(e.threshold),y2:u.yr(e.threshold),strokeDasharray:`4 3`,style:{stroke:`var(--ink)`}}),(0,H.jsx)(uc,{x:u.R0-4,y:u.yr(e.threshold)-5,fill:`var(--ink-2)`,children:e.threshold}),cc.map(e=>(0,H.jsx)(uc,{x:u.xp(e),y:oc+16,anchor:`middle`,children:e<0?`−`+-e:String(e)},e)),(0,H.jsx)(uc,{x:(u.L0+u.R0)/2,y:oc+36,anchor:`middle`,children:(0,H.jsx)(`tspan`,{...G(`prognostic.cohort.density.xlabel`),children:t(`prognostic.cohort.density.xlabel`)})}),(0,H.jsx)(uc,{x:u.L0+6,y:ns.T0+13,anchor:`start`,children:(0,H.jsx)(`tspan`,{...G(`prognostic.explainer.cohort.grey`),children:t(`prognostic.explainer.cohort.grey`)})}),(0,H.jsx)(uc,{x:14,y:(ns.T0+oc)/2,anchor:`middle`,transform:`rotate(-90 14 ${(ns.T0+oc)/2})`,children:(0,H.jsx)(`tspan`,{...G(`prognostic.cohort.density.ytitle`),children:t(`prognostic.cohort.density.ytitle`)})}),(0,H.jsx)(`circle`,{className:`you`,cx:u.point.x,cy:u.point.y,r:6.5,strokeWidth:2.5,style:{fill:`var(--ink)`,stroke:`var(--bg)`}}),(0,H.jsx)(`text`,{className:`halo`,x:u.point.x+(u.point.left?-11:11),y:u.point.y+4,textAnchor:u.point.left?`end`:`start`,fontSize:12.5,fontWeight:700,...G(`prognostic.explainer.cohort.rate`),children:t(`prognostic.explainer.cohort.rate`,{rate:Ws(e.rate)})})]}),(0,H.jsxs)(`svg`,{className:`cx-stages`,viewBox:s,role:`img`,"aria-label":t(`prognostic.cohort.stages.label`),...G(`prognostic.cohort.stages.label`),children:[lc.map(e=>(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`line`,{x1:d.bl,x2:d.br,y1:d.yp(e),y2:d.yp(e),style:{stroke:`var(--line-2)`}}),(0,H.jsx)(uc,{x:d.bl-6,y:d.yp(e)+4,children:Math.round(e*100)+` %`})]},e)),[`0`,`1`,`2`,`3`].map((n,r)=>{let i=e.boxes[n];if(!i)return null;let a=d.bl+(r+.5)*d.cw,o=d.cw*.46,s=`var(--s${n})`;return(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`line`,{className:`whisker`,x1:a,x2:a,y1:d.yp(i[0]),y2:d.yp(i[4]),strokeWidth:1.5,style:{stroke:s}}),(0,H.jsx)(`rect`,{className:`box`,x:a-o/2,y:d.yp(i[3]),width:o,height:d.yp(i[1])-d.yp(i[3]),rx:2,fillOpacity:.35,strokeWidth:1.5,style:{fill:s,stroke:s}}),(0,H.jsx)(`line`,{className:`med`,x1:a-o/2,x2:a+o/2,y1:d.yp(i[2]),y2:d.yp(i[2]),strokeWidth:2.5,style:{stroke:s}}),(0,H.jsx)(uc,{x:a,y:oc+16,anchor:`middle`,children:(0,H.jsx)(`tspan`,{...G(`prognostic.cohort.stages.stage`),children:t(`prognostic.cohort.stages.stage`,{n})})})]},n)}),(0,H.jsx)(uc,{x:(d.bl+d.br)/2,y:oc+36,anchor:`middle`,children:(0,H.jsx)(`tspan`,{...G(`prognostic.cohort.stages.xtitle`),children:t(`prognostic.cohort.stages.xtitle`)})}),(0,H.jsx)(`line`,{className:`you`,x1:d.bl,x2:d.br,y1:d.line.y,y2:d.line.y,strokeWidth:2,strokeDasharray:`5 3`,style:{stroke:`var(--ink)`}}),(0,H.jsx)(`text`,{className:`halo`,x:d.line.labelLeft?d.bl+4:d.br,y:d.line.y-6,textAnchor:d.line.labelLeft?`start`:`end`,fontSize:12.5,fontWeight:700,...G(`prognostic.cohort.stages.you`),children:f})]}),(0,H.jsx)(`p`,{className:`note`,...e.pin===null?G(`prognostic.cohort.pin.unavailable`):{},children:e.pin===null?t(`prognostic.cohort.pin.unavailable`):``})]})}var fc=[`prognostic.explainer.band.who`,`prognostic.explainer.band.cog`,`prognostic.explainer.band.motor`,`prognostic.explainer.band.wm`,`prognostic.explainer.band.deep`,`prognostic.explainer.band.vent`,`prognostic.explainer.band.ctx`],pc=(e,t)=>e(`prognostic.explainer.band.${t}`);function mc({at:e,title:t,sub:n,onClose:r,children:i,titleKey:a,subKey:o,takeFocus:s=!0,closeLabel:c,keepOpenWithin:l,className:u}){let d=(0,_.useRef)(null),f=(0,_.useId)(),p=(0,_.useRef)(r);(0,_.useEffect)(()=>{p.current=r});let m=(0,_.useRef)(l);(0,_.useEffect)(()=>{m.current=l});let h=(0,_.useRef)(s);return(0,_.useEffect)(()=>{let e=document.activeElement;h.current&&d.current?.focus();let t=e=>{e.key===`Escape`&&!e.target?.closest?.(`.pop`)&&p.current()},n=e=>{let t=e.target;!t||d.current?.contains(t)||t.closest?.(m.current)||p.current()};return document.addEventListener(`keydown`,t),document.addEventListener(`pointerdown`,n),()=>{document.removeEventListener(`keydown`,t),document.removeEventListener(`pointerdown`,n);let r=document.activeElement;e&&e.isConnected&&(r===null||r===document.body)&&e.focus()}},[]),(0,H.jsxs)(`div`,{className:u?`zoom ${u}`:`zoom`,"data-at":e,role:`dialog`,"aria-labelledby":f,tabIndex:-1,ref:d,children:[(0,H.jsxs)(`header`,{children:[(0,H.jsx)(`h3`,{id:f,...G(a),children:t}),(0,H.jsx)(`span`,{className:`small`,...o?G(o):{},children:n}),(0,H.jsx)(`button`,{type:`button`,onClick:r,"aria-label":c,title:c,children:`✕`})]}),i]})}function hc(e){let t=U();return(0,H.jsx)(mc,{...e,closeLabel:t(`prognostic.explainer.zoom.close`),keepOpenWithin:`svg.flow, svg.flow-end, .controls, .pop, .pe, .tour`})}var gc=(e,t,n)=>{let r=0;for(let i=0;i<t;i++)r+=(e[i]-n)**2;return Math.sqrt(r/Math.max(t,1))},_c=(e,t,n)=>{let r=0;for(let i=0;i<t;i++)e[i]>n&&r++;return r/Math.max(t,1)};function vc(e){let t=U(),n=e=>t(`prognostic.explainer.tree.leaf.reg`,{rate:Ws(e)});if(e.column===`forests`)return(0,H.jsx)(hc,{at:`forests`,title:t(`prognostic.explainer.forests.title`),titleKey:`prognostic.explainer.forests.title`,sub:t(`prognostic.explainer.note.forests.sub`),subKey:`prognostic.explainer.note.forests.sub`,onClose:e.onClose,children:(0,H.jsxs)(`div`,{className:`z-body`,children:[(0,H.jsxs)(`div`,{className:`steps`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`b`,{...G(`prognostic.explainer.forest.reg`),children:t(`prognostic.explainer.forest.reg`)}),(0,H.jsx)(`span`,{...G(`prognostic.explainer.note.forests.reg`),children:t(`prognostic.explainer.note.forests.reg`,{n:e.counts.reg})})]}),(0,H.jsx)(`i`,{...G(`prognostic.explainer.note.forests.and`),children:t(`prognostic.explainer.note.forests.and`)}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`b`,{...G(`prognostic.explainer.forest.clf`),children:t(`prognostic.explainer.forest.clf`)}),(0,H.jsx)(`span`,{...G(`prognostic.explainer.note.forests.clf`),children:t(`prognostic.explainer.note.forests.clf`,{n:e.counts.clf,threshold:e.threshold})})]})]}),(0,H.jsx)(W,{k:`prognostic.explainer.note.forests.1`,as:`p`}),(0,H.jsx)(W,{k:`prognostic.explainer.note.forests.2`,as:`p`})]})});if(e.column===`avg`){let r=[{key:`reg`,name:t(`prognostic.explainer.note.avg.row.reg`),k:e.k.reg,mean:n(e.rate),sd:Ws(gc(e.votes.rate,e.k.reg,e.rate)),past:Gs(_c(e.votes.rate,e.k.reg,e.threshold))},{key:`clf`,name:t(`prognostic.explainer.note.avg.row.clf`),k:e.k.clf,mean:Gs(e.prob),sd:Gs(gc(e.votes.prob,e.k.clf,e.prob)),past:Gs(_c(e.votes.prob,e.k.clf,.5))}];return(0,H.jsx)(hc,{at:`avg`,title:t(`prognostic.explainer.avg.title`),titleKey:`prognostic.explainer.avg.title`,sub:t(`prognostic.explainer.note.avg.sub`),subKey:`prognostic.explainer.note.avg.sub`,onClose:e.onClose,children:(0,H.jsxs)(`div`,{className:`z-body`,children:[(0,H.jsx)(W,{k:`prognostic.explainer.note.avg.1`,as:`p`}),(0,H.jsxs)(`table`,{children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{...G(`prognostic.explainer.note.avg.table.forest`),children:t(`prognostic.explainer.note.avg.table.forest`)}),(0,H.jsx)(`th`,{className:`num`,...G(`prognostic.explainer.note.avg.table.trees`),children:t(`prognostic.explainer.note.avg.table.trees`)}),(0,H.jsx)(`th`,{className:`num`,...G(`prognostic.explainer.note.avg.table.mean`),children:t(`prognostic.explainer.note.avg.table.mean`)}),(0,H.jsx)(`th`,{className:`num`,...G(`prognostic.explainer.note.avg.table.sd`),children:t(`prognostic.explainer.note.avg.table.sd`)}),(0,H.jsx)(`th`,{className:`num`,...G(`prognostic.explainer.note.avg.table.past`),children:t(`prognostic.explainer.note.avg.table.past`)})]})}),(0,H.jsx)(`tbody`,{children:r.map(e=>(0,H.jsxs)(`tr`,{"data-forest":e.key,children:[(0,H.jsx)(`td`,{children:e.name}),(0,H.jsx)(`td`,{className:`num`,children:e.k}),(0,H.jsx)(`td`,{className:`num`,children:e.mean}),(0,H.jsx)(`td`,{className:`num`,children:e.sd}),(0,H.jsx)(`td`,{className:`num`,children:e.past})]},e.key))})]}),(0,H.jsx)(W,{k:`prognostic.explainer.note.avg.2`,as:`p`}),(0,H.jsx)(`p`,{className:`small`,...G(`prognostic.explainer.note.avg.foot`),children:t(`prognostic.explainer.note.avg.foot`,{threshold:e.threshold})})]})})}let r=e=>{let n=Do.find(t=>t.configuration===e);return n?pc(t,n.key):``};return(0,H.jsx)(hc,{at:`end`,title:t(`prognostic.explainer.end.title`),titleKey:`prognostic.explainer.end.title`,sub:t(`prognostic.explainer.note.end.sub`),subKey:`prognostic.explainer.note.end.sub`,onClose:e.onClose,children:(0,H.jsx)(`div`,{className:`z-body`,children:(0,H.jsxs)(`div`,{className:`cols end-cols`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(W,{k:`prognostic.explainer.note.end.1`,as:`p`}),(0,H.jsx)(W,{k:`prognostic.explainer.note.end.2`,as:`p`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h5`,{...G(`prognostic.explainer.note.end.h`),children:t(`prognostic.explainer.note.end.h`)}),(0,H.jsxs)(`table`,{children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{...G(`prognostic.explainer.note.end.table.cfg`),children:t(`prognostic.explainer.note.end.table.cfg`)}),(0,H.jsx)(`th`,{...G(`prognostic.explainer.note.end.table.adds`),children:t(`prognostic.explainer.note.end.table.adds`)}),(0,H.jsx)(`th`,{className:`num`,...G(`prognostic.explainer.note.end.table.error`),children:t(`prognostic.explainer.note.end.table.error`)}),(0,H.jsx)(`th`,{className:`num`,...G(`prognostic.explainer.note.end.table.acc`),children:t(`prognostic.explainer.note.end.table.acc`)})]})}),(0,H.jsx)(`tbody`,{children:Object.entries(e.metrics).map(([t,n])=>(0,H.jsxs)(`tr`,{className:t===e.configuration?`cur`:void 0,children:[(0,H.jsx)(`td`,{children:t}),(0,H.jsx)(`td`,{children:r(t)}),(0,H.jsx)(`td`,{className:`num`,children:Math.round(n.reg_mae_cv)}),(0,H.jsx)(`td`,{className:`num`,children:Gs(n.clf_accuracy_cv)})]},t))})]})]})]})})})}[...fc];var yc={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1};function bc({people:e,person:t,onPick:n,facts:r,configuration:i,onAllGroups:a,trees:o,onTrees:s,k:c,popoverOpen:l,onUpload:u}){let d=U(),f=(0,_.useRef)(null),p=(0,_.useRef)(null),m=t=>{let r=e[(t+e.length)%e.length];n(r.id),f.current?.querySelector(`[data-id="${r.id}"]`)?.focus()},h=e=>t=>{let n=yc[t.key];n&&(t.preventDefault(),m(e+n))},g=Do.find(e=>e.configuration===i.name),v=d(`prognostic.explainer.trees.counts`,{reg:c.reg,clf:c.clf});return(0,H.jsxs)(`div`,{className:`controls`,children:[(0,H.jsxs)(`div`,{role:`group`,"aria-labelledby":`px-who`,children:[(0,H.jsx)(`span`,{className:`lab`,id:`px-who`,...G(`prognostic.explainer.who`),children:d(`prognostic.explainer.who`)}),(0,H.jsx)(`div`,{className:`people`,role:`radiogroup`,"aria-labelledby":`px-who`,ref:f,children:e.map((e,r)=>{let i=e.id===t.id;return(0,H.jsxs)(`button`,{type:`button`,role:`radio`,className:`person`+(e.uploaded?` you`:``),"data-id":e.id,"aria-checked":i,tabIndex:i?0:-1,onClick:()=>n(e.id),onKeyDown:h(r),title:e.uploaded?d(`prognostic.explainer.you.title`,{from:e.from??``}):d(`prognostic.explainer.person.title`,{label:e.label}),children:[(0,H.jsx)(`span`,{children:e.uploaded?d(`prognostic.explainer.you`):e.letter}),(0,H.jsx)(`i`,{className:`v-${e.band??`none`}`,"aria-hidden":`true`})]},e.id)})}),(0,H.jsx)(`button`,{type:`button`,className:`upbtn`,"aria-haspopup":`dialog`,"aria-expanded":l,onClick:u,"aria-label":d(`prognostic.explainer.upload`),title:d(`prognostic.explainer.upload`),children:(0,H.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,"aria-hidden":`true`,children:(0,H.jsx)(`path`,{d:`M8 11V2M4.5 5.5 8 2l3.5 3.5M2.5 10.5v3h11v-3`})})}),(0,H.jsxs)(`div`,{className:`facts`,"aria-live":`polite`,title:r.title,children:[(0,H.jsxs)(`dl`,{children:[(0,H.jsx)(`dt`,{...G(`prognostic.explainer.facts.age`),children:d(`prognostic.explainer.facts.age`)}),(0,H.jsxs)(`dd`,{children:[r.age,` `,(0,H.jsx)(`small`,{children:d(`prognostic.explainer.yrs`)})]})]}),(0,H.jsxs)(`dl`,{children:[(0,H.jsx)(`dt`,{...G(`prognostic.explainer.facts.cag`),children:d(`prognostic.explainer.facts.cag`)}),(0,H.jsx)(`dd`,{children:r.cag})]}),(0,H.jsxs)(`dl`,{children:[(0,H.jsx)(`dt`,{...G(`prognostic.explainer.facts.cap`),children:d(`prognostic.explainer.facts.cap`)}),(0,H.jsx)(`dd`,{children:r.cap})]}),r.edited&&(0,H.jsx)(`span`,{className:`edited`,...G(`prognostic.explainer.edited`),children:d(`prognostic.explainer.edited`)})]})]}),(0,H.jsxs)(`div`,{className:`sl cfg`,children:[(0,H.jsx)(`span`,{className:`lab`,...G(`prognostic.explainer.cfg.label`),children:d(`prognostic.explainer.cfg.label`)}),(0,H.jsxs)(`div`,{className:`sl-row`,children:[(0,H.jsxs)(`span`,{className:`cfg-now`,title:d(`prognostic.explainer.cfg.title`,{name:i.name}),children:[i.full?d(`prognostic.explainer.cfg.all`):d(`prognostic.explainer.cfg.upto`,{name:g?pc(d,g.key):i.name}),` `,i.switching?d(`prognostic.explainer.cfg.switching`):i.failed===void 0?d(`prognostic.explainer.cfg.inputs`,{n:i.inputs}):d(`prognostic.explainer.cfg.failed`,{detail:i.failed})]}),(0,H.jsx)(`span`,{className:`reset`,children:!i.full&&(0,H.jsx)(`button`,{type:`button`,className:`linkbtn`,onClick:a,children:d(`prognostic.explainer.cfg.all`)})})]})]}),(0,H.jsxs)(`div`,{className:`sl`,children:[(0,H.jsx)(`label`,{className:`lab`,htmlFor:`px-trees`,...G(`prognostic.explainer.trees.label`),children:d(`prognostic.explainer.trees.label`)}),(0,H.jsxs)(`div`,{className:`sl-row`,children:[(0,H.jsx)(`span`,{className:`track`,children:(0,H.jsx)(`input`,{id:`px-trees`,name:`trees`,type:`range`,min:1,max:100,step:1,value:o,ref:p,onChange:e=>s(Number(e.target.value))})}),(0,H.jsxs)(`output`,{htmlFor:`px-trees`,children:[o>=100?(0,H.jsxs)(H.Fragment,{children:[d(`prognostic.explainer.trees.all`),` `]}):null,(0,H.jsx)(`small`,{children:v})]}),(0,H.jsx)(`span`,{className:`reset`,children:o<100&&(0,H.jsx)(`button`,{type:`button`,className:`linkbtn`,onClick:()=>{s(100),p.current?.focus()},children:d(`prognostic.explainer.trees.reset`)})})]})]})]})}var xc=8,Sc=236,Cc=190,wc=150;function Tc(e){let t=e.barLeft??e.flowLeft+Sc+xc,n=t-e.flowLeft-xc;if(n>=Cc)return{x:e.flowLeft,width:Math.min(Sc,n)};let r=e.labelLeft??t+36;return{x:xc,width:Math.max(wc,Math.min(Sc,r-16))}}function Ec(e,t,n){let r=e.rect,{viewport:i}=n,a=r.top+r.height/2-t.h/2,o,s;if(e.kind===`waterfall`){let e=n.answerCol;o=e?e.left+(e.width-t.w)/2:r.left,s=n.waterfallEnd?n.waterfallEnd.bottom+8:r.bottom+6,e&&s+t.h>i.h-xc&&(o=e.left-t.w-12,s=a)}else o=Tc(n).x,s=e.kind===`clinic`&&n.clinicBottom!==null?n.clinicBottom+8:a;let c=e.kind===`waterfall`?t.w:Tc(n).width;return o=Math.max(xc,Math.min(i.w-c-xc,o)),s=Math.max(n.top0,Math.min(i.h-t.h-xc,s)),e.kind===`waterfall`?{x:o,y:s,narrow:!1}:{x:o,y:s,narrow:!0,width:Tc(n).width}}function Dc({value:e,onChange:t,labels:n}){let r=(0,_.useRef)([]);return(0,H.jsx)(`div`,{className:`seg`,role:`radiogroup`,"aria-label":n.group,onKeyDown:n=>{if(![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(n.key))return;n.preventDefault();let i=e===1?0:1;t(i),r.current[i]?.focus()},children:[0,1].map(i=>(0,H.jsx)(`button`,{ref:e=>{r.current[i]=e},type:`button`,role:`radio`,"aria-checked":e===i,tabIndex:e===i?0:-1,onClick:()=>{e!==i&&t(i)},children:i===1?n.male:n.female},i))})}var Oc=e=>e.normalise===`etiv_fraction`?1e3:e.name===`EstimatedTotalIntraCranialVol`?.001:1,kc=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t.median;function Ac(e,t,n){let r=e.name,i=r===`cag`,a=Oc(e),o=Math.min(i?36:e.p1,t,n),s=Math.max(i?60:e.p99*(r===`WM-hypointensities`?2:1),t,n);return{lo:o,hi:s,step:e.integer||i?1:((s-o)*a/200).toPrecision(2),sc:a}}var jc=(e,t)=>t.name===`cag`?e(`prognostic.explainer.ed.cag`):t.name===`ageAtscan`?e(`prognostic.explainer.ed.age`):Vs(e,t),Mc=(e,t,n)=>t.name===`cag`?String(Math.round(n)):Hs(e,t,n);function Nc({f:e,v:t,v0:n,t:r,onEdit:i}){let a=e.name,{lo:o,hi:s,step:c,sc:l}=Ac(e,t,n),u=s>o?(n-o)/(s-o):0,d=jc(r,e),f=t=>Mc(r,e,t);return(0,H.jsxs)(`div`,{className:`pe-row`,"data-c":a,children:[(0,H.jsxs)(`div`,{className:`pe-top`,children:[(0,H.jsx)(`span`,{children:d}),(0,H.jsx)(`output`,{children:f(t)})]}),(0,H.jsxs)(`div`,{className:`pe-track`,children:[(0,H.jsx)(`input`,{type:`range`,min:o*l,max:s*l,step:c,value:t*l,"aria-label":d,onChange:e=>i(a,Number(e.target.value)/l)}),(0,H.jsx)(`i`,{style:{left:`calc(8px + (100% - 16px) * ${u})`},title:r(`prognostic.explainer.ed.own`,{value:f(n)})})]}),(0,H.jsxs)(`div`,{className:`pe-ends`,children:[(0,H.jsx)(`span`,{children:f(o)}),(0,H.jsx)(`span`,{children:f(s)})]})]})}var Pc=e=>e?.querySelector(`input, [role=radio][aria-checked=true]`)?.focus({preventScroll:!0});function Fc(e){return e.closest(`#flowEnd`)?`waterfall`:e.classList.contains(`stripe`)?`stripe`:`clinic`}function Ic(e){let t=[];for(let n of e)for(let e of n===`CAP`?[`ageAtscan`,`cag`]:n===`isFemale`?[`isMale`]:[n])t.includes(e)||t.push(e);return t}function Lc({features:e,anchor:t,spec:n,record:r,own:i,edits:a,onEdit:o,onReset:s,onClose:c}){let l=Ic(e),u=U(),d=(0,_.useRef)(null),f=(0,_.useMemo)(()=>Ka(n),[n]),[p,m]=(0,_.useState)(null),h=(0,_.useRef)(()=>{});(0,_.useEffect)(()=>{h.current=e=>{e&&t.isConnected&&t.focus({preventScroll:!0}),c()}});let g=l.join(`,`);(0,_.useLayoutEffect)(()=>{let e=d.current;if(!e)return;let n=Fc(t),r=()=>{e.classList.toggle(`narrow`,n!==`waterfall`);let r=document.getElementById(`flowEnd`),i=t.closest(`.explainer`)?.querySelector(`svg.flow`)??document.querySelector(`svg.flow`),a=i?i.getBoundingClientRect().left:t.getBoundingClientRect().left,o=i?.querySelector(`rect.stripe`),s=o?o.getBoundingClientRect().left:a+236,c=i?.querySelector(`g.bandbox .lbg`)??i?.querySelector(`g.bandbox`),l=c?c.getBoundingClientRect().left:s+36;e.style.width=n===`waterfall`?``:`${Tc({flowLeft:a,barLeft:s,labelLeft:l}).width}px`;let u=n===`clinic`&&t.classList.contains(`editable`)?t.parentElement:null,d=getComputedStyle(document.documentElement),f=e=>parseFloat(d.getPropertyValue(e))||0,p=Ec({rect:t.getBoundingClientRect(),kind:n},{w:e.offsetWidth,h:e.offsetHeight},{answerCol:r?.getBoundingClientRect()??null,waterfallEnd:r?.querySelector(`[data-wf-end]`)?.getBoundingClientRect()??null,flowLeft:a,barLeft:s,labelLeft:l,clinicBottom:u?u.getBoundingClientRect().bottom:null,viewport:{w:window.innerWidth,h:window.innerHeight},top0:f(`--pagebar-h`)+f(`--ctl-h`)+8});m(p)};return r(),window.addEventListener(`resize`,r),()=>window.removeEventListener(`resize`,r)},[t,g]);let v=p!==null;(0,_.useEffect)(()=>{v&&Pc(d.current)},[v,t,g]),(0,_.useEffect)(()=>{let e=e=>{e.key===`Escape`&&h.current(!0)},t=e=>{let t=e.target;!t||d.current?.contains(t)||t.closest?.(`.editable, rect.stripe`)||h.current(!1)},n=()=>h.current(!1);return document.addEventListener(`keydown`,e),document.addEventListener(`pointerdown`,t),window.addEventListener(`scroll`,n,{passive:!0}),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`pointerdown`,t),window.removeEventListener(`scroll`,n)}},[]);let y=l.some(e=>a[e]!==void 0),b=l.includes(`cag`)||l.includes(`ageAtscan`),x=f.get(l[0]),S=l[0]===`isMale`?u(`prognostic.explainer.ed.sex`):l[0]===`cag`?u(`prognostic.explainer.ed.cag`):l[0]===`ageAtscan`?u(`prognostic.explainer.ed.age`):x?Vs(u,x):l[0],C=()=>{s(l),Pc(d.current)};return(0,H.jsxs)(`div`,{ref:d,className:`pe`+(p?.narrow?` narrow`:``),role:`dialog`,"aria-label":S,style:p?{left:p.x,top:p.y,width:p.width}:{left:0,top:0,visibility:`hidden`},children:[(0,H.jsx)(`button`,{type:`button`,className:`pe-x`,onClick:()=>h.current(!0),"aria-label":u(`prognostic.explainer.ed.close`),title:u(`prognostic.explainer.ed.close`),children:`✕`}),l.map(e=>{if(e===`isMale`)return(0,H.jsxs)(`div`,{className:`pe-row`,"data-c":e,children:[(0,H.jsx)(`div`,{className:`pe-top`,children:(0,H.jsx)(`span`,{...G(`prognostic.explainer.ed.sex`),children:u(`prognostic.explainer.ed.sex`)})}),(0,H.jsx)(`div`,{className:`pe-sex`,children:(0,H.jsx)(Dc,{value:+(Number(r.isMale)>=.5),onChange:e=>o(`isMale`,e),labels:{group:u(`prognostic.explainer.ed.sex`),female:u(`prognostic.explainer.ed.female`),male:u(`prognostic.explainer.ed.male`)}})})]},e);let t=f.get(e);return t?(0,H.jsx)(Nc,{f:t,v:kc(r[e],t),v0:kc(i[e],t),t:u,onEdit:o},e):null}),(0,H.jsxs)(`div`,{className:`pe-foot`,children:[(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`span`,{...G(`prognostic.explainer.ed.tick`),children:u(`prognostic.explainer.ed.tick`)}),b&&(0,H.jsxs)(H.Fragment,{children:[` `,(0,H.jsx)(`span`,{...G(`prognostic.explainer.ed.cap`),children:u(`prognostic.explainer.ed.cap`)})]})]}),(0,H.jsx)(`button`,{type:`button`,className:`linkbtn`,disabled:!y,onClick:C,...G(`prognostic.explainer.ed.reset`),children:u(`prognostic.explainer.ed.reset`)})]})]})}var Rc=new Set([`isFemale`,`CAP`]);function zc(e,t,n,r){let i={},a=new Set(t);for(let t of jo(e,`ctx`)){let e=n[t];a.has(t)&&typeof e==`number`&&Number.isFinite(e)&&(i[t]=e*r)}return i}var Bc=e=>{let t=(e-1)*100;return(t<0?`−`:`+`)+Math.abs(t).toFixed(1)+` %`};function Vc({f:e,v:t,v0:n,edited:r,hit:i,off:a,t:o,onEdit:s}){let{lo:c,hi:l,step:u,sc:d}=Ac(e,t,n),f=jc(o,e);return(0,H.jsxs)(`div`,{className:`er`+(r?` ed`:``)+(i?` hit`:``)+(a?` off`:``),"data-c":e.name,children:[(0,H.jsx)(`span`,{children:f}),(0,H.jsx)(`input`,{type:`range`,min:c*d,max:l*d,step:u,value:t*d,"aria-label":f,onChange:t=>s(e.name,Number(t.target.value)/d)}),(0,H.jsx)(`output`,{children:Mc(o,e,t)})]})}function Hc(e){let t=U(),n=(0,_.useMemo)(()=>Ka(e.spec),[e.spec]),r=(0,_.useMemo)(()=>new Set(e.columns),[e.columns]),i=(0,_.useMemo)(()=>new Set(e.used),[e.used]),a=(0,_.useRef)(null),o=(0,_.useRef)(e.hit);(0,_.useEffect)(()=>{let e=o.current;e&&a.current?.querySelector(`.er[data-c="${CSS.escape(e)}"]`)?.scrollIntoView?.({block:`nearest`})},[]);let s=e.hit?Ao(e.spec,e.hit):null,c=r=>{let a=n.get(r);return r===`isMale`?(0,H.jsxs)(`div`,{className:`er`+(e.edits.isMale===void 0?``:` ed`)+(e.hit===r?` hit`:``),"data-c":r,children:[(0,H.jsx)(`span`,{...G(`prognostic.explainer.ed.sex`),children:t(`prognostic.explainer.ed.sex`)}),(0,H.jsx)(Dc,{value:+(Number(e.record.isMale)>=.5),onChange:e.onEditSex,labels:{group:t(`prognostic.explainer.ed.sex`),female:t(`prognostic.explainer.ed.female`),male:t(`prognostic.explainer.ed.male`)}}),(0,H.jsx)(`output`,{})]},r):a?(0,H.jsx)(Vc,{f:a,v:kc(e.record[r],a),v0:kc(e.own[r],a),edited:e.edits[r]!==void 0,hit:e.hit===r,off:r!==`cag`&&!i.has(r),t,onEdit:e.onEdit},r):null},l=(e,n)=>t(e===`used`?`prognostic.explainer.drawer.state.used`:e===`waiting`?`prognostic.explainer.drawer.state.waiting`:`prognostic.explainer.drawer.state.off`,{n}),u=kc(e.record.ageAtscan,n.get(`ageAtscan`)),d=kc(e.record.cag,n.get(`cag`)),f=kc(e.record.CAP,n.get(`CAP`));return(0,H.jsx)(hc,{at:`inputs`,className:`drawer`,title:t(`prognostic.explainer.drawer.title`),titleKey:`prognostic.explainer.drawer.title`,sub:t(`prognostic.explainer.drawer.sub`,{n:e.used.length}),subKey:`prognostic.explainer.drawer.sub`,onClose:e.onClose,children:(0,H.jsxs)(`div`,{className:`z-body`,ref:a,children:[(0,H.jsx)(`h5`,{...G(`prognostic.explainer.drawer.h`),children:t(`prognostic.explainer.drawer.h`)}),(0,H.jsx)(`div`,{className:`editor`,children:Do.map(n=>{let a=jo(e.spec,n.key).filter(e=>e!==`cag`),o=a.filter(e=>r.has(e)&&!Rc.has(e)),u=n.key===`ctx`&&o.some(e=>i.has(e));return(0,H.jsxs)(`details`,{"data-band":n.key,open:n.src===`clinic`||s===n.key,children:[(0,H.jsxs)(`summary`,{children:[pc(t,n.key),(0,H.jsx)(`small`,{children:l(e.states[n.key],a.length)})]}),n.key===`who`&&c(`cag`),u&&(0,H.jsxs)(`div`,{className:`er all`,children:[(0,H.jsx)(`span`,{...G(`prognostic.explainer.drawer.ctx.all`),children:t(`prognostic.explainer.drawer.ctx.all`)}),(0,H.jsx)(`input`,{type:`range`,min:.8,max:1.2,step:.005,value:e.scale,"aria-label":t(`prognostic.explainer.drawer.ctx.all`),onChange:t=>e.onScaleCortex(Number(t.target.value))}),(0,H.jsx)(`output`,{children:Bc(e.scale)})]}),o.map(c)]},n.key)})}),(0,H.jsx)(`p`,{className:`cap`,...G(`prognostic.explainer.drawer.cap`),children:t(`prognostic.explainer.drawer.cap`,{offset:e.spec.cap_offset,age:u.toFixed(1),cag:Math.round(d),cap:Math.round(f)})}),(0,H.jsxs)(`div`,{className:`nav`,children:[(0,H.jsx)(`button`,{type:`button`,onClick:e.onReset,...G(`prognostic.explainer.drawer.reset`),children:t(`prognostic.explainer.drawer.reset`)}),(0,H.jsx)(`span`,{...G(`prognostic.explainer.drawer.ranges`),children:t(`prognostic.explainer.drawer.ranges`)})]})]})})}var Uc=420,Wc=270;function Gc({tree:e,which:t,columns:n,threshold:r,x:i,y:a,width:o,height:s,mini:c,tokens:l,t:u}){let d=l??Ds(),f=e.children_left,p=e.children_right,m=[],h=0,g=0,_=(e,t)=>{if(g=Math.max(g,t),f[e]<0){m[e]={x:h++,d:t};return}_(f[e],t+1),_(p[e],t+1),m[e]={x:(m[f[e]].x+m[p[e]].x)/2,d:t}};_(0,0);let v=e=>14+m[e].x/Math.max(h-1,1)*392,y=e=>14+m[e].d/Math.max(g,1)*240,b=new Set(e.path),x=Math.min(o/Uc,s/Wc),S=m.map((e,t)=>t).filter(e=>m[e]!==void 0),C=e=>t===`reg`?Os(Math.log(e/r),1.1,d):Os(e-.5,.5,d),w=r=>{if(f[r]<0)return t===`reg`?u(`prognostic.explainer.tree.leaf.reg`,{rate:Ws(e.value[r])}):Gs(e.value[r]);let i=n[e.feature[r]];return i?u(`prognostic.explainer.tree.split`,{name:Vs(u,i),value:Hs(u,i,e.threshold[r])}):``};return(0,H.jsxs)(`g`,{className:`minitree`,transform:`translate(${i+(o-Uc*x)/2},${a+(s-Wc*x)/2}) scale(${x})`,children:[S.filter(e=>f[e]>=0).flatMap(e=>[f[e],p[e]].map(t=>{let n=b.has(e)&&b.has(t);return(0,H.jsx)(`line`,{className:`edge`+(n?` on`:``),x1:v(e),y1:y(e),x2:v(t),y2:y(t),stroke:n?`var(--ink)`:`var(--line)`,strokeWidth:n?2.5:1},`${e}-${t}`)})),S.map(t=>{let n=f[t]<0,r=b.has(t);return(0,H.jsx)(`circle`,{className:`node`+(r?` on`:``),"data-node":t,cx:v(t),cy:y(t),r:n?5:3.5,fill:n?C(e.value[t]):`var(--bg)`,stroke:r?`var(--ink)`:`var(--ink-3)`,strokeWidth:r?2:1,children:(0,H.jsx)(`title`,{children:w(t)})},t)}),!c&&(0,H.jsx)(`text`,{className:`small`,x:14,y:268,children:u(`prognostic.explainer.tree.leaves`,{n:h})})]})}var Kc=[`reg`,`clf`];function qc(e){let t=U(),n=t(`prognostic.explainer.forests.title`),r=Ns.forests.x;return(0,H.jsxs)(`g`,{className:`p-forests`,children:[(0,H.jsxs)(`g`,{className:`coltitle-g`+(e.opened===`forests`?` on`:``),role:`button`,tabIndex:0,"aria-label":t(`prognostic.explainer.col.details`,{title:n}),onClick:e.onOpen,onKeyDown:Cs(e.onOpen),children:[(0,H.jsx)(`text`,{x:r,y:40,className:`coltitle`,...G(`prognostic.explainer.forests.title`),children:n}),(0,H.jsx)(ws,{x:r+n.length*9.3+14,y:34})]}),Kc.map(n=>{let r=n===`reg`?K.regY:K.clfY,i=e.k[n],a=e.counts[n],o=e.front[n],s=i===a?a:t(`prognostic.explainer.forest.kofn`,{k:i,n:a}),c=()=>e.onFocus(n),l=()=>e.onOpenTree(n,0),u=K.cardX+16,d=r+84,f=u+160;return(0,H.jsxs)(`g`,{className:`card`+(e.focus===n?` on`:``),"data-forest":n,children:[(0,H.jsx)(`rect`,{className:`shadow`,x:K.cardX+8,y:r+8,width:K.cardW,height:K.cardH,rx:10}),(0,H.jsx)(`rect`,{className:`face`,x:K.cardX,y:r,width:K.cardW,height:K.cardH,rx:10}),(0,H.jsxs)(`g`,{className:`head`,role:`button`,tabIndex:0,"aria-pressed":e.focus===n,onClick:c,onKeyDown:Cs(c),children:[(0,H.jsx)(`text`,{x:K.cardX+16,y:r+26,fontSize:16,fontWeight:700,children:t(n===`reg`?`prognostic.explainer.forest.reg`:`prognostic.explainer.forest.clf`)}),(0,H.jsx)(`text`,{x:K.cardX+16,y:r+44,className:`small`,children:t(n===`reg`?`prognostic.explainer.forest.sub.reg`:`prognostic.explainer.forest.sub.clf`,{k:s})})]}),(0,H.jsxs)(`g`,{className:`treehit`,role:`button`,tabIndex:0,onClick:l,onKeyDown:Cs(l),"aria-label":t(`prognostic.explainer.forest.deck.aria`,{forest:t(n===`reg`?`prognostic.explainer.forest.name.reg`:`prognostic.explainer.forest.name.clf`)}),children:[(0,H.jsx)(`title`,{children:t(`prognostic.explainer.forest.deck.title`)}),[12,6].map(e=>(0,H.jsx)(`rect`,{x:u+e,y:d-e,width:244,height:112,rx:7,fill:`var(--bg)`,stroke:`var(--line)`},e)),(0,H.jsx)(`rect`,{className:`panel`,x:u,y:d,width:244,height:112,rx:7,fill:`var(--bg)`,stroke:`var(--ink-3)`}),o&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Gc,{tree:o,which:n,columns:e.columns,threshold:e.threshold,x:u+4,y:d+4,width:150,height:104,mini:!0,tokens:e.tokens,t}),(0,H.jsx)(`text`,{x:f,y:d+44,fontSize:12,className:`ink-3`,...G(`prognostic.explainer.forest.tree1`),children:t(`prognostic.explainer.forest.tree1`)}),(0,H.jsx)(`text`,{x:f,y:d+66,fontSize:17,fontWeight:700,className:`mono`,children:n===`reg`?Ws(o.leaf):Gs(o.leaf)}),(0,H.jsx)(`text`,{x:f,y:d+82,fontSize:12,className:`ink-2`,children:t(n===`reg`?`prognostic.explainer.forest.unit.reg`:`prognostic.explainer.forest.unit.clf`)})]})]}),(0,H.jsx)(`text`,{x:K.cardX+K.cardW-16,y:d+112+26,textAnchor:`end`,fontSize:12,className:`ink-3`,children:t(`prognostic.explainer.forest.averages`,{which:t(i===a?`prognostic.explainer.forest.all`:`prognostic.explainer.forest.these`),k:i})})]},n)})]})}function Jc(e){let t=U(),n=e.tokens??Ds(),r=(0,_.useMemo)(()=>new Map(e.columns.map((e,t)=>[e,t])),[e.columns]),i=As[e.focus],a=e.columns.length===e.spec.configurations.VII.length?t(`prognostic.explainer.inputs.title`):t(`prognostic.explainer.inputs.title.n`,{n:e.columns.length}),o=Ns.inputs.x,s=(n,r)=>{let i=e.states[n];if(i===`off`)return t(`prognostic.explainer.band.off`);if(i!==`waiting`)return``;let a=Do.slice(1,r).find(t=>!e.have.has(t.key));return t(`prognostic.explainer.band.waiting`,{name:a?pc(t,a.key).toLowerCase():t(`prognostic.explainer.band.above`)})};return(0,H.jsxs)(`g`,{className:`p-inputs`,children:[(0,H.jsxs)(`g`,{className:`coltitle-g`+(e.opened===`inputs`?` on`:``),role:`button`,tabIndex:0,"aria-label":t(`prognostic.explainer.col.details`,{title:a}),onClick:e.onOpen,onKeyDown:Cs(e.onOpen),children:[(0,H.jsx)(`text`,{x:o,y:40,className:`coltitle`,children:a}),(0,H.jsx)(ws,{x:o+a.length*9.3+14,y:34})]}),Do.map((a,o)=>{let c=e.geom[a.key],l=e.states[a.key],u=e.have.has(a.key),d=a.key===`who`,f=(c.y1-c.y0)/c.cols.length,p=pc(t,a.key),m=String(c.cols.length),h=s(a.key,o),g=(c.y0+c.y1)/2,_=K.labX,v=()=>e.onToggleBand(a.key);return(0,H.jsxs)(`g`,{opacity:l===`used`?1:.55,children:[c.cols.map((t,a)=>{let o=r.get(t),s=e.edits[t]!==void 0,u=o===void 0?l===`waiting`?`var(--line)`:`var(--bg)`:Os(e.shap[o],i,n);return(0,H.jsx)(`rect`,{className:`stripe`+(s?` edited`:``),"data-feature":t,"data-edited":s||void 0,x:K.barX,y:c.y0+a*f,width:K.barW,height:Math.max(f-+(f>4),.8),fill:u,stroke:l===`off`?`var(--line-2)`:void 0,onClick:n=>e.onEdit([t],n.currentTarget),onPointerEnter:()=>e.onHover(t),onPointerLeave:()=>e.onHover(null)},t)}),(0,H.jsxs)(`g`,{className:`bandbox`,role:`checkbox`,tabIndex:d?-1:0,"aria-checked":u,"aria-disabled":d||void 0,"aria-label":t(`prognostic.explainer.band.have`,{name:p,num:a.configuration}),onClick:d?void 0:v,onKeyDown:d?void 0:Cs(v),children:[(0,H.jsx)(`title`,{children:t(d?`prognostic.explainer.band.who.title`:u?`prognostic.explainer.band.on.title`:`prognostic.explainer.band.off.title`)}),(0,H.jsx)(`rect`,{className:`lbg`,x:_-4,y:g-17,width:Math.max((p.length+m.length+1)*7.3,h.length*6.1)+12,height:34,rx:5,fill:`var(--bg)`,opacity:.88}),(0,H.jsxs)(`text`,{className:`bname halo`+(l===`used`?``:` ink-3`),x:_+2,y:h?g-2:g+5,fontSize:14.5,fontWeight:600,children:[p,` `,(0,H.jsx)(`tspan`,{fontWeight:400,fill:`var(--ink-3)`,children:m})]}),h&&(0,H.jsx)(`text`,{className:`small mono halo`,x:_+2,y:g+13,children:h})]})]},a.key)})]})}var Yc={fast:`✓`,mid:`–`,moderate:`✕`};function Xc(e){let t=U(),[n,r]=(0,_.useState)(!1),{flowEnd:i,lastCard:a,verdictEnd:o}=e;(0,_.useEffect)(()=>{let e=()=>{let e=i.current,t=a.current;if(!e||!t){r(!1);return}let n=e.getBoundingClientRect(),s=e.viewBox?.baseVal?.width||parseFloat(e.getAttribute(`viewBox`)?.split(/\s+/)[2]??``)||n.width||1,c=ps(`--pagebar-h`)+ps(`--ctl-h`)+10;r(fs({top:n.top,width:n.width,viewW:s},t.getBoundingClientRect().bottom,c,o))},t=requestAnimationFrame(e);return window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e),()=>{cancelAnimationFrame(t),window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[i,a,o,e.rate,e.prob]);let s={fast:t(`prognostic.explainer.mini.fast`),mid:t(`prognostic.explainer.mini.mid`),moderate:t(`prognostic.explainer.mini.moderate`)}[e.band],c={fast:t(`prognostic.verdict.fast`),mid:t(`prognostic.verdict.mid`),moderate:t(`prognostic.verdict.moderate`)}[e.band],l={fast:t(`prognostic.explainer.end.rule.long.fast`),mid:t(`prognostic.explainer.end.rule.long.mid`),moderate:t(`prognostic.explainer.end.rule.long.moderate`)}[e.band],u=Ws(e.rate),d=Gs(e.prob),f=t(`prognostic.explainer.mini.back`);return(0,H.jsx)(`div`,{className:`minihost`,children:(0,H.jsxs)(`button`,{type:`button`,className:`mini`+(n?` on`:``),style:{"--vc":ks(e.band)},tabIndex:n?0:-1,"aria-hidden":!n,title:f,onClick:()=>{let e=typeof window.matchMedia==`function`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,t=i.current;if(!t)return;let n=t.getBoundingClientRect().top+window.scrollY-(ps(`--pagebar-h`)+ps(`--ctl-h`)+10);window.scrollTo({top:n,behavior:e?`auto`:`smooth`})},"aria-label":t(`prognostic.explainer.mini.aria`,{verdict:c,rate:u,pct:d,rule:l}),children:[(0,H.jsx)(`b`,{children:s}),(0,H.jsx)(`span`,{children:t(`prognostic.explainer.cohort.rate`,{rate:u})}),(0,H.jsx)(`span`,{children:t(`prognostic.explainer.mini.pct`,{pct:d})}),(0,H.jsx)(`span`,{className:`rule`,title:l,children:Yc[e.band]})]})})}function Zc({geom:e,shares:t,focus:n,tokens:r}){let i=[];for(let a of[`reg`,`clf`]){let o=(a===`reg`?K.regY:K.clfY)+40,s=K.cardH-70,c=0;for(let{key:l}of Do){let u=t[a][l],d=Math.max(u.share*s,u.abs>0?1.2:0);if(!d)continue;let f=e[l],p=(f.y0+f.y1)/2+(a===`reg`?-d/2-1:1);i.push((0,H.jsx)(`path`,{className:`ribbon`,"data-forest":a,"data-band":l,d:Is(K.barX+K.barW+2,p,p+d,K.cardX,o+c,o+c+d),fill:Os(u.net,js[a],r),opacity:n===a?.55:.18},`${a}-${l}`)),c+=d}}return(0,H.jsx)(`g`,{className:`ribbons`,"aria-hidden":`true`,children:i})}function Qc({lines:e}){let[t,n]=(0,_.useState)(null);if((0,_.useEffect)(()=>{let e=e=>n({x:e.clientX,y:e.clientY});return window.addEventListener(`pointermove`,e,{passive:!0}),()=>window.removeEventListener(`pointermove`,e)},[]),!t)return null;let r=Math.min(t.x+14,(typeof window>`u`?1e4:window.innerWidth)-310);return(0,H.jsx)(`div`,{className:`tip`,"aria-hidden":`true`,style:{left:r,top:t.y+14},children:e.map((e,t)=>t===0?(0,H.jsx)(`b`,{children:e},t):(0,H.jsx)(`span`,{children:e},t))})}function $c({n:e,total:t,heading:n,body:r,labels:i,countAttrs:a,onPrev:o,onNext:s,onClose:c}){return(0,H.jsxs)(`section`,{className:`tour`,"aria-label":i.label,tabIndex:-1,children:[(0,H.jsx)(`button`,{type:`button`,className:`x`,onClick:c,"aria-label":i.close,title:i.close,children:`✕`}),(0,H.jsxs)(`div`,{"aria-live":`polite`,children:[n,r]}),(0,H.jsxs)(`div`,{className:`foot`,children:[(0,H.jsx)(`button`,{type:`button`,onClick:o,"aria-label":i.prev,title:i.prev,children:`‹`}),(0,H.jsx)(`div`,{className:`bar`,"aria-hidden":`true`,children:(0,H.jsx)(`i`,{style:{width:`${e/t*100}%`}})}),(0,H.jsx)(`span`,{className:`count`,...a,children:i.count}),(0,H.jsx)(`button`,{type:`button`,onClick:s,"aria-label":i.next,title:i.next,children:`›`})]})]})}var el=[{cols:[`visit`,`inputs`]},{cols:[`visit`,`inputs`]},{cols:[`visit`,`inputs`,`forests`]},{cols:[`forests`,`avg`]},{cols:[`avg`,`end`]},{cols:[],card:`cohort`},{cols:[],card:`ageing`},{cols:[`visit`,`inputs`,`forests`,`avg`,`end`]}];function tl({step:e,onStep:t,onClose:n}){let r=U(),i=e+1,a=n=>t((e+n+el.length)%el.length);return(0,H.jsx)($c,{n:i,total:el.length,heading:(0,H.jsx)(W,{k:`prognostic.tour.${i}.h`,as:`h4`}),body:(0,H.jsx)(W,{k:`prognostic.tour.${i}.p`,as:`p`}),labels:{close:r(`prognostic.tour.close`),prev:r(`prognostic.tour.prev`),next:r(`prognostic.tour.next`),count:r(`prognostic.tour.count`,{n:i,total:el.length}),label:r(`prognostic.tour.label`)},countAttrs:G(`prognostic.tour.count`),onPrev:()=>a(-1),onNext:()=>a(1),onClose:n})}function nl(e,t,n,r,i){let a=r(i??e[t]);for(let i=1;i<n;i++){let o=(t+i)%n;if(r(e[o])!==a)return o}return null}function rl(e){let t=U(),n=e.which===`reg`,r=e=>n?t(`prognostic.explainer.tree.leaf.reg`,{rate:Ws(e)}):Gs(e),i=e.tree,a=t=>e.onIndex((e.index+t+e.count)%e.count),o=t(`prognostic.explainer.tree.title`,{i:e.index+1,n:e.count});return(0,H.jsx)(hc,{at:`tree`,title:o,titleKey:`prognostic.explainer.tree.title`,sub:t(n?`prognostic.explainer.tree.sub.reg`:`prognostic.explainer.tree.sub.clf`),subKey:n?`prognostic.explainer.tree.sub.reg`:`prognostic.explainer.tree.sub.clf`,onClose:e.onClose,children:(0,H.jsxs)(`div`,{className:`z-body`,children:[i&&(0,H.jsxs)(`div`,{className:`cols tree-cols`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h5`,{...G(`prognostic.explainer.tree.whole`),children:t(`prognostic.explainer.tree.whole`)}),(0,H.jsx)(`svg`,{viewBox:`0 0 420 270`,width:`100%`,role:`img`,"aria-label":o,children:(0,H.jsx)(Gc,{tree:i,which:e.which,columns:e.columns,threshold:e.threshold,x:0,y:0,width:420,height:270,tokens:e.tokens,t})})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h5`,{...G(`prognostic.explainer.tree.questions`),children:t(`prognostic.explainer.tree.questions`)}),(0,H.jsxs)(`div`,{className:`q q0`,children:[(0,H.jsx)(`i`,{children:`0`}),(0,H.jsx)(`span`,{...G(`prognostic.explainer.tree.q0`),children:t(`prognostic.explainer.tree.q0`)}),(0,H.jsx)(`span`,{className:`mono`,children:r(i.value[0])})]}),(0,H.jsx)(`div`,{className:`qlist`,children:i.path.slice(0,-1).map((n,a)=>{let o=e.columns[i.feature[n]],s=i.path[a+1],c=s===i.children_left[n],l=e.x[i.feature[n]];return(0,H.jsxs)(`div`,{className:`q`,children:[(0,H.jsx)(`i`,{children:a+1}),(0,H.jsxs)(`span`,{children:[o?t(`prognostic.explainer.tree.q`,{name:Vs(t,o),value:Hs(t,o,i.threshold[n])}):``,(0,H.jsx)(`br`,{}),(0,H.jsxs)(`small`,{children:[o&&typeof l==`number`&&(0,H.jsxs)(H.Fragment,{children:[t(`prognostic.explainer.ed.own`,{value:Hs(t,o,l)}),` · `]}),(0,H.jsx)(`span`,{className:`ans `+(c?`yes`:`no`),children:t(c?`prognostic.explainer.tree.yes`:`prognostic.explainer.tree.no`)})]})]}),(0,H.jsx)(`span`,{className:`mono`,children:r(i.value[s])})]},n)})}),(0,H.jsxs)(`p`,{className:`gives`,children:[n?(0,H.jsx)(W,{k:`prognostic.explainer.tree.gives.reg`,vars:{value:r(i.leaf)}}):(0,H.jsx)(W,{k:`prognostic.explainer.tree.gives.clf`,vars:{value:r(i.leaf)}}),` `,(0,H.jsx)(W,{k:`prognostic.explainer.tree.forest`,vars:{k:e.count,value:r(n?e.rate:e.prob)}})]})]})]}),(0,H.jsxs)(`div`,{className:`nav`,children:[(0,H.jsx)(`button`,{type:`button`,onClick:()=>a(-1),...G(`prognostic.explainer.tree.prev`),children:t(`prognostic.explainer.tree.prev`)}),(0,H.jsx)(`button`,{type:`button`,onClick:()=>a(1),...G(`prognostic.explainer.tree.next`),children:t(`prognostic.explainer.tree.next`)}),(0,H.jsx)(`button`,{type:`button`,onClick:e.onFlip,...G(`prognostic.explainer.tree.flip`),children:t(`prognostic.explainer.tree.flip`)}),(0,H.jsx)(`span`,{...G(`prognostic.explainer.tree.note`),children:t(`prognostic.explainer.tree.note`)})]})]})})}var il=[`aseg.stats`,`lh.aparc.stats`,`rh.aparc.stats`];async function al(){let e=await Promise.all(il.map(async e=>{let t=await fetch(eo(`prognostic`,`example-scan/${e}`));if(!t.ok)throw Error(`example scan unavailable`);return t.text()}));return Object.fromEntries(il.map((t,n)=>[t,e[n]]))}function ol({scan:e,left:t,onClose:n}){let r=U(),{model:i}=$o(),a=i.files?.spec,{files:o,take:s,example:c,clear:l,skipped:u,problem:d,result:f}=e,p=(0,_.useRef)(null),m=(0,_.useRef)(null),h=(0,_.useId)(),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)(n);(0,_.useEffect)(()=>{y.current=n}),(0,_.useEffect)(()=>{p.current?.focus();let e=e=>{e.key===`Escape`&&y.current()},t=e=>{let t=e.target;!t||p.current?.contains(t)||t.closest?.(`.upbtn`)||y.current()};return document.addEventListener(`keydown`,e),document.addEventListener(`pointerdown`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`pointerdown`,t)}},[]);let b=e=>{e.preventDefault(),v(!1),s(Array.from(e.dataTransfer.files))},x=e=>{e.preventDefault(),v(!0)},S=(0,_.useMemo)(()=>a?Ka(a):null,[a]),C=a?a.features.filter(e=>!e.sources.some(e=>e.file===`clinical`)).length:0,w=!d&&f&&f.missing.length>0?f:null,T=w?w.missing.slice(0,3).map(e=>S?.get(e.feature)?.label??e.feature).join(`, `):``,E=!a&&Object.keys(o).length>0;return(0,H.jsxs)(`div`,{className:`pop`,role:`dialog`,"aria-labelledby":h,tabIndex:-1,ref:p,style:{left:t},children:[(0,H.jsxs)(`header`,{children:[(0,H.jsx)(`h4`,{id:h,children:r(`prognostic.explainer.up.title`)}),(0,H.jsx)(`button`,{type:`button`,className:`x`,onClick:n,"aria-label":r(`prognostic.explainer.up.close`),title:r(`prognostic.explainer.up.close`),children:`✕`})]}),(0,H.jsx)(W,{k:`prognostic.explainer.up.lede`,as:`p`,className:`quiet`}),(0,H.jsx)(`ul`,{className:`up-slots`,children:il.map(e=>(0,H.jsxs)(`li`,{"data-slot":e,className:o[e]?`ok`:`miss`,children:[(0,H.jsx)(`code`,{children:e}),` `,(0,H.jsx)(`span`,{children:o[e]?r(`prognostic.explainer.up.slot.read`):r(`prognostic.explainer.up.slot.none`)})]},e))}),(0,H.jsxs)(`div`,{className:`drop`+(g?` over`:``),onDragEnter:x,onDragOver:x,onDragLeave:()=>v(!1),onDrop:b,children:[(0,H.jsx)(`input`,{ref:m,className:`up-input`,type:`file`,multiple:!0,accept:`.stats,.txt,text/plain`,tabIndex:-1,"aria-hidden":`true`,onChange:e=>{s(Array.from(e.target.files??[])),e.target.value=``}}),(0,H.jsx)(`button`,{type:`button`,className:`linkbtn`,onClick:()=>m.current?.click(),children:r(`prognostic.explainer.up.drop`)}),(0,H.jsx)(W,{k:`prognostic.explainer.up.drop.note`,as:`small`})]}),(0,H.jsxs)(`div`,{className:`up-status`,"aria-live":`polite`,children:[d===`noetiv`&&(0,H.jsx)(W,{k:`prognostic.explainer.up.noetiv`,as:`p`,className:`up-err`}),d===`fetch`&&(0,H.jsx)(W,{k:`prognostic.explainer.up.fetch`,as:`p`,className:`up-err`}),E&&!d&&(0,H.jsx)(W,{k:`prognostic.explainer.up.waiting`,as:`p`}),w&&(0,H.jsx)(W,{k:`prognostic.explainer.up.read.some`,as:`p`,vars:{read:w.read.length,total:C,missing:w.missing.length,names:T}}),f&&!w&&!d&&(0,H.jsx)(W,{k:`prognostic.explainer.up.read.all`,as:`p`,vars:{n:f.read.length}}),u.large.length>0&&(0,H.jsx)(W,{k:`prognostic.explainer.up.large`,as:`p`,className:`up-err`,vars:{names:u.large.join(`, `)}}),u.ignored.length>0&&(0,H.jsx)(W,{k:`prognostic.explainer.up.ignored`,as:`p`,className:`up-note`,vars:{names:u.ignored.join(`, `)}})]}),(0,H.jsxs)(`p`,{className:`up-links`,children:[(0,H.jsx)(`button`,{type:`button`,className:`linkbtn`,onClick:()=>void c(),children:r(`prognostic.explainer.up.example`)}),(f||d===`noetiv`)&&(0,H.jsx)(`button`,{type:`button`,className:`linkbtn`,onClick:l,children:r(`prognostic.explainer.up.clear`)})]}),(0,H.jsx)(W,{k:`prognostic.explainer.up.note`,as:`p`,className:`quiet small`})]})}function sl(e,t,n,r,i,a){let[o,s]=(0,_.useState)(null),c=(0,_.useRef)(0),l=(0,_.useRef)(e);(0,_.useEffect)(()=>{l.current=e});let u=n.join(`,`),d=r.ready?.configuration??null;return(0,_.useEffect)(()=>{let e=r.worker,o=l.current,f=++c.current;if(!e||!o||!i||n.length===0||d===null)return;let p=()=>f!==c.current||Ho(e,d);(async()=>{try{let r=await e.gallery(Float32Array.from(o),t,n,a);p()||s({trees:r,which:t,indices:u,configuration:d,depth:a})}catch{p()||s(null)}})()},[i,t,u,r.worker,d,a]),o&&o.which===t&&o.indices===u&&o.configuration===d&&o.depth===a?o.trees:null}function cl(e,t,n){let r=new Map(t.map((e,t)=>[e,t])),i={},a=0;for(let{key:t}of Do){let o=0,s=0;for(let i of n[t].cols){let t=r.get(i);t!==void 0&&(o+=Math.abs(e[t]),s+=e[t])}i[t]={abs:o,net:s,share:0},a+=o}if(a>0)for(let{key:e}of Do)i[e].share=i[e].abs/a;return i}function ll(e,t,n){let r=new Set(t),i={};for(let{key:t}of Do)i[t]=jo(n,t).some(e=>r.has(e))?`used`:e.has(t)?`waiting`:`off`;return i}function ul(e,t,n,r=9){let i=t.map((t,n)=>({c:t,v:e[n]})).sort((e,t)=>Math.abs(t.v)-Math.abs(e.v)),a=i.slice(0,r).map(({c:e,v:t})=>({feature:e,value:t,from:0,to:0})),o=i.slice(r);o.length&&a.push({feature:null,value:o.reduce((e,t)=>e+t.v,0),from:0,to:0,rest:o.length});let s=n;for(let e of a)e.from=s,s+=e.value,e.to=s;return a}var dl=[0],fl=[];function pl(e,t,n,r){let i=$o(),{model:a,prognosis:o,x:s,base:c,have:l,k:u}=i,d=a.files,f=d?.spec,p=a.ready,{prediction:m,explanation:h}=o,g=(0,_.useMemo)(()=>!m||!h||!s||!p||h.reg.length!==p.columns.length?null:{prediction:m,explanation:h,x:s,columns:p.columns,k:u},[m,h,s,p,u]),[v,y]=(0,_.useState)(null);g&&g!==v&&y(g);let b=g??v,x=a.status===`loading`&&p!==null,S=b!==null&&b!==g,C=(0,_.useMemo)(()=>f?Fs(f):null,[f]),w=(0,_.useMemo)(()=>new Map((f?.features??[]).map(e=>[e.name,e])),[f]),T=(0,_.useMemo)(()=>b&&C?{reg:cl(b.explanation.reg,b.columns,C),clf:cl(b.explanation.clf,b.columns,C)}:null,[b,C]),E=(0,_.useMemo)(()=>f&&b?ll(l,b.columns,f):null,[f,l,b]),D=b?b.explanation[e]:null,O=(0,_.useMemo)(()=>b&&D?ul(D,b.columns,b.explanation.base[e]):[],[b,D,e]),k=b?Bo(b.prediction.prob):null,A=(0,_.useMemo)(()=>p?p.columns.map(e=>w.get(e)):[],[p,w]),j=f?.configurations.VII??ml,M=(0,_.useMemo)(()=>{if(!f||!c)return{};let e={...c.kind===`upload`?c.record:d?.examples.find(e=>e.id===c.id)?.features??{}};return typeof e.ageAtscan==`number`&&typeof e.cag==`number`&&(e.CAP=e.ageAtscan*(e.cag-f.cap_offset)),e},[f,c,d]),[N,P]=(0,_.useState)(null);c?.kind===`upload`&&(N?.report!==c.report||N.from!==c.from)?P({report:c.report,from:c.from,band:null}):c?.kind===`upload`&&N&&k&&!S&&k!==N.band&&P({...N,band:k});let F=N&&N.report===r?N:null,I=F?.from??(c?.kind===`example`?c.id:null),L=(0,_.useMemo)(()=>{let e=(d?.examples??[]).map(e=>({id:e.id,letter:e.label.slice(-1),label:e.label,band:Bo(e.prediction.prob)}));if(r){let t=d?.examples.find(e=>e.id===I)?.label??I??``;e.push({id:`you`,letter:``,label:n(`prognostic.explainer.you`),band:F?.band??null,uploaded:!0,from:t})}return e},[d,r,I,F?.band,n]),R=L.find(e=>c?.kind===`upload`?e.id===`you`:c?.kind===`example`&&e.id===c.id)??null,ee={reg:sl(s,`reg`,dl,a,m,1/0)?.[0]??null,clf:sl(s,`clf`,dl,a,m,1/0)?.[0]??null},te=t?u[t.which]:0,ne=t?Math.max(0,Math.min(t.index,te-1)):0;return{ctx:i,spec:f,ready:p,files:d,answer:b,live:g,stale:S,switching:x,geom:C,shares:T,states:E,shap:D,steps:O,verdict:k,features:A,vii:j,own:M,people:L,person:R,youFrom:I,front:ee,treeView:{count:te,index:ne,tree:sl(s,t?.which??`reg`,t&&te>0?[ne]:fl,a,m,1/0)?.[0]??null},full:l.size===Do.length}}var ml=[],hl=[`aseg.stats`,`lh.aparc.stats`,`rh.aparc.stats`,`wmparc.stats`],gl=e=>e.trim()!==``&&Number.isFinite(Number(e)),_l=()=>Object.create(null),vl=new Map([[`Left-Thalamus-Proper`,`Left-Thalamus`],[`Right-Thalamus-Proper`,`Right-Thalamus`]]);function yl(e){let t={measures:_l(),rows:_l()},n=[];for(let r of e.split(/\r?\n/)){let e=r.trim();if(!e)continue;if(e.startsWith(`#`)){let r=e.replace(/^#+/,``).trim();if(r.startsWith(`Measure`)){let e=r.slice(7).split(`,`).map(e=>e.trim());e.length>=4&&gl(e[3])&&(t.measures[e[0]]=Number(e[3]),t.measures[e[1]]=Number(e[3]))}else r.startsWith(`ColHeaders`)&&(n=r.split(/\s+/).slice(1));continue}if(n.length===0)continue;let i=e.split(/\s+/);if(i.length!==n.length)continue;let a=i[n.indexOf(`StructName`)];if(a===void 0)continue;let o=vl.get(a)??a,s=_l();n.forEach((e,t)=>{e!==`StructName`&&gl(i[t])&&(s[e]=Number(i[t]))}),t.rows[o]=s}return t}function bl(e){let t=(e.split(/[\\/]/).pop()??e).toLowerCase();for(let e of hl)if(t===e||t.endsWith(e)&&`-_.`.includes(t[t.length-e.length-1]))return e;return null}function xl(e){return e.endsWith(`_thickness`)?`ThickAvg`:e.endsWith(`_area`)?`SurfArea`:e.endsWith(`_volume`)?`GrayVol`:`Volume_mm3`}function Sl(e,t){let n=[];for(let r of e.sources){let i=t[r.file];if(!i)return{values:n,reason:`file`};if(r.section===`measure`){let e=i.measures[r.name];if(e===void 0)return{values:n,reason:`structure`};n.push(e)}else{let t=i.rows[r.name]?.[xl(e.name)];if(t===void 0)return{values:n,reason:`structure`};n.push(t)}}return{values:n,reason:n.length?null:`structure`}}function Cl(e,t){let n=e[`aseg.stats`]?.measures.EstimatedTotalIntraCranialVol??e[`aseg.stats`]?.measures.eTIV??null,r={},i=[],a=[];for(let o of t.features){if(o.sources.some(e=>e.file===`clinical`))continue;let{values:t,reason:s}=Sl(o,e);if(s){a.push({feature:o.name,reason:s});continue}let c=o.merge===`sum`?t.reduce((e,t)=>e+t,0):t[0];if(o.normalise===`etiv_fraction`){if(!n){a.push({feature:o.name,reason:`etiv`});continue}c/=n}r[o.name]=c,i.push(o.name)}return n?{record:r,read:i,missing:a,etiv:n}:{record:{},read:[],missing:t.features.filter(e=>!e.sources.some(e=>e.file===`clinical`)).map(e=>({feature:e.name,reason:`etiv`})),etiv:null}}var wl=e=>typeof e.text==`function`?e.text():new Response(e).text(),Tl={ignored:[],large:[]};function El(e){let[t,n]=(0,_.useState)({}),r=(0,_.useRef)({}),[i,a]=(0,_.useState)(Tl),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),u=(0,_.useRef)(!1),d=t=>{if(r.current=t,n(t),Object.keys(t).length===0){l(null);return}if(!e){u.current=!0;return}u.current=!1;let i=Cl(t,e);if(i.etiv===null){l(null),s(`noetiv`);return}s(null),l(i)},f=(0,_.useRef)(d);return(0,_.useEffect)(()=>{f.current=d,e&&u.current&&d(r.current)}),{files:t,take:async e=>{let t={},n={ignored:[],large:[]};for(let r of e){let e=bl(r.name);if(!e||!il.includes(e)){n.ignored.push(r.name);continue}if(r.size>4194304){n.large.push(r.name);continue}let i=yl(await wl(r));if(Object.keys(i.rows).length===0&&Object.keys(i.measures).length===0){n.ignored.push(r.name);continue}t[e]=i}let i={...r.current,...t};if(a(n),Object.keys(t).length===0){s(n.large.length>0&&n.ignored.length===0?null:`nothing`),Object.keys(i).length===0&&l(null);return}f.current(i)},example:async()=>{try{let e=await al();s(null),a(Tl),f.current(Object.fromEntries(il.map(t=>[t,yl(e[t])])))}catch{s(`fetch`)}},clear:()=>{u.current=!1,r.current={},n({}),a(Tl),s(null),l(null)},skipped:i,problem:o,result:c}}function Dl(e){(0,_.useEffect)(()=>{let t=document.querySelector(`.page-bar`),n=e.current,r=document.documentElement,i=e=>!!e&&getComputedStyle(e).position===`sticky`,a=()=>{let n=e.current?.querySelector(`.ctl-wrap`);r.style.setProperty(`--pagebar-h`,(i(t)?t.offsetHeight:0)+`px`),r.style.setProperty(`--ctl-h`,(i(n)?n.offsetHeight:0)+`px`)};a(),window.addEventListener(`resize`,a);let o=typeof ResizeObserver>`u`?null:new ResizeObserver(a);return t&&o?.observe(t),n&&o?.observe(n),()=>{window.removeEventListener(`resize`,a),o?.disconnect(),r.style.removeProperty(`--pagebar-h`),r.style.removeProperty(`--ctl-h`)}},[e])}var Ol=(e,t)=>[`tissue`,`hd`,`accent`].every(n=>e[n].every((e,r)=>e===t[n][r]));function kl(){let[e,t]=(0,_.useState)(Ds);return(0,_.useEffect)(()=>{let e=0,n=()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{let e=Ds();t(t=>Ol(t,e)?t:e)})},r=typeof MutationObserver>`u`?null:new MutationObserver(n);r?.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]});let i=typeof window.matchMedia==`function`?window.matchMedia(`(prefers-color-scheme: dark)`):null;return i?.addEventListener?.(`change`,n),()=>{cancelAnimationFrame(e),r?.disconnect(),i?.removeEventListener?.(`change`,n)}},[]),e}function Al(e,t){return e?e.card===t?`lit`:e.cols===null?null:`dim`:null}function jl(e){(0,_.useEffect)(()=>{if(!e)return;let t=requestAnimationFrame(()=>{let t=e.current;if(!t)return;let n=t.getBoundingClientRect();if(n.height===0)return;let r=ps(`--pagebar-h`)+ps(`--ctl-h`)+44;if(n.top>=r&&n.bottom<=window.innerHeight-8)return;let i=typeof window.matchMedia==`function`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;window.scrollBy({top:n.top-r,behavior:i?`auto`:`smooth`})});return()=>cancelAnimationFrame(t)},[e])}function Ml({kind:e,x:t,y:n}){return(0,H.jsxs)(`g`,{transform:`translate(${t},${n})`,fill:`none`,stroke:`var(--ink-2)`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[e===`person`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`circle`,{cx:8,cy:4.5,r:3}),(0,H.jsx)(`path`,{d:`M2.5 15c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6`})]}),e===`dna`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`M4 1c0 4 8 4 8 7s-8 3-8 7`}),(0,H.jsx)(`path`,{d:`M12 1c0 4-8 4-8 7s8 3 8 7`}),(0,H.jsx)(`path`,{d:`M5.5 4h5M5.5 12h5`})]}),e===`clip`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`rect`,{x:2.5,y:2.5,width:11,height:13,rx:1.5}),(0,H.jsx)(`path`,{d:`M5.5 2.5V1h5v1.5`}),(0,H.jsx)(`path`,{d:`M5 7h6M5 10h6M5 13h3.5`})]}),e===`clinic`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`rect`,{x:1,y:1,width:14,height:14,rx:3}),(0,H.jsx)(`path`,{d:`M8 4.5v7M4.5 8h7`})]}),e===`motor`&&(0,H.jsx)(`path`,{d:`M2 12c2-6 3-6 4 0s2 6 4 0 2-6 4 0`}),e===`scan`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`circle`,{cx:8,cy:8,r:7}),(0,H.jsx)(`circle`,{cx:8,cy:8,r:3.5})]})]})}var Nl={person:[`isMale`,`ageAtscan`],dna:[`cag`],clip:[`SDMT`,`SWR`],motor:[`TMS`]},Pl=.44,Fl=K.srcX,Il=e=>typeof e==`number`&&Number.isFinite(e)?Math.round(e):`–`;function Ll({y0:e,y1:t,name:n}){let r=K.barX-7,i=(e+t)/2;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`M${r+5} ${e+1}H${r}V${t-1}H${r+5}`,fill:`none`,stroke:`var(--ink-3)`,strokeWidth:1.5}),(0,H.jsx)(`text`,{className:`halo ink-3`,x:r-4,y:i,transform:`rotate(-90 ${r-4} ${i})`,textAnchor:`middle`,fontSize:11,fontWeight:600,children:n})]})}function Rl({record:e,geom:t,states:n,shares:r,art:i,focus:a,tokens:o,onEdit:s}){let c=U(),l=o??Ds(),u=e=>n[e]===`used`?Os(r[e].net,js[a],l):`var(--line-2)`,d=e=>{let n=Do.filter(t=>t.src===e),r=t[n[0].key].y0,i=t[n[n.length-1].key].y1;return{bands:n,y0:r,y1:i,m:(r+i)/2}},f=(e,r,i,a)=>a.map(({key:a})=>(0,H.jsx)(`path`,{d:Is(e,r,i,K.barX-13,t[a].y0,t[a].y1),fill:`var(--line-2)`,opacity:n[a]===`off`?.25:.7},a)),p=d(`clinic`),m=d(`mri`),h=[[`person`,c(`prognostic.explainer.visit.person`,{sex:Number(e.isMale)>=.5?c(`prognostic.explainer.visit.male`):c(`prognostic.explainer.visit.female`),age:Il(e.ageAtscan)})],[`dna`,c(`prognostic.explainer.visit.dna`,{cag:Il(e.cag),cap:Il(e.CAP)})],[`clip`,c(`prognostic.explainer.visit.scores`,{sdmt:Il(e.SDMT),swr:Il(e.SWR)})],[`motor`,c(`prognostic.explainer.visit.motor`,{tms:Il(e.TMS)})]],g=i?.coronal,_=m.m-120,v=Fl+4,y=g?_+(g.bbox[3]-g.bbox[1])*Pl+22:_+160;return(0,H.jsxs)(`g`,{className:`p-visit`,children:[(0,H.jsx)(`text`,{x:Fl,y:40,className:`coltitle`,...G(`prognostic.explainer.visit.title`),children:c(`prognostic.explainer.visit.title`)}),f(Fl+178,p.m-30,p.m+40,p.bands),(0,H.jsxs)(`g`,{children:[(0,H.jsx)(Ml,{kind:`clinic`,x:Fl,y:p.m-58}),(0,H.jsx)(`text`,{x:Fl+22,y:p.m-45,fontSize:15,fontWeight:600,...G(`prognostic.explainer.visit.clinic`),children:c(`prognostic.explainer.visit.clinic`)}),h.map(([e,t],n)=>{let r=p.m-30+n*22;return(0,H.jsxs)(`g`,{className:`editable`,role:`button`,tabIndex:0,"aria-label":c(`prognostic.explainer.visit.change`,{what:t}),"data-edits":Nl[e].join(`,`),onClick:t=>s(Nl[e],t.currentTarget),onKeyDown:t=>Cs(()=>s(Nl[e],t.currentTarget))(t),children:[(0,H.jsx)(Ml,{kind:e,x:Fl,y:r}),(0,H.jsx)(`text`,{x:Fl+22,y:r+12,fontSize:13,className:`ink-2`,children:t})]},e)})]}),(0,H.jsx)(Ll,{y0:p.y0,y1:p.y1,name:c(`prognostic.explainer.visit.clinic`)}),f(Fl+182,m.m-60,m.m+40,m.bands),g&&(0,H.jsxs)(`g`,{transform:`translate(${v-g.bbox[0]*Pl},${_-g.bbox[1]*Pl}) scale(${Pl})`,children:[g.comps.map((e,t)=>(0,H.jsx)(`path`,{className:`region`,"data-band":e.deep?`deep`:`ctx`,d:e.d,fill:u(e.deep?`deep`:`ctx`),opacity:e.deep?1:.55,stroke:`var(--bg)`,strokeWidth:e.deep?3:0},t)),g.vents.map((e,t)=>(0,H.jsx)(`path`,{className:`region`,"data-band":`vent`,d:e,fill:n.vent===`used`?u(`vent`):`var(--bg-2)`,stroke:`var(--bg)`,strokeWidth:3},`v${t}`))]}),(0,H.jsx)(Ml,{kind:`scan`,x:Fl,y:_-30}),(0,H.jsx)(`text`,{x:Fl+22,y:_-17,fontSize:15,fontWeight:600,...G(`prognostic.explainer.visit.scan`),children:c(`prognostic.explainer.visit.scan`)}),(0,H.jsx)(`text`,{x:Fl,y,fontSize:13.5,fontWeight:600,...G(`prognostic.explainer.visit.fs`),children:c(`prognostic.explainer.visit.fs`)}),(0,H.jsx)(`text`,{x:Fl,y:y+17,className:`small`,...G(`prognostic.explainer.visit.fs.1`),children:c(`prognostic.explainer.visit.fs.1`)}),(0,H.jsx)(`text`,{x:Fl,y:y+32,className:`small`,...G(`prognostic.explainer.visit.fs.2`),children:c(`prognostic.explainer.visit.fs.2`)}),(0,H.jsx)(`text`,{x:Fl,y:y+52,className:`small`,...G(`prognostic.explainer.visit.fs.3`),children:c(`prognostic.explainer.visit.fs.3`)}),(0,H.jsx)(`text`,{x:Fl,y:y+67,className:`small`,...G(`prognostic.explainer.visit.fs.4`),children:c(`prognostic.explainer.visit.fs.4`)}),(0,H.jsx)(Ll,{y0:m.y0,y1:m.y1,name:c(`prognostic.explainer.visit.scan`)})]})}var zl=15e5,Bl=()=>mi(()=>import(`./art-B5xoLx12.js`).then(e=>e.ART.regions??null),[]);function Vl(){let e=U(),[t,n]=(0,_.useState)(`clf`),[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)({which:`clf`,index:0}),[l,u]=(0,_.useState)(!0),[d,f]=(0,_.useState)(0),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),[v,y]=(0,_.useState)(null),b=(0,_.useRef)(null),x=El($o().model.files?.spec),S=pl(t,r===`tree`?s:null,e,x.result),{ctx:C,spec:w,ready:T,files:E,answer:D,geom:O,shares:k,states:A,shap:j,verdict:M,own:N,people:P,person:F}=S,{record:I,edits:L,setEdit:R,resetEdit:ee,resetEdits:te,setHave:ne,setUpload:re,pickExample:ie,model:z,prognosis:ae,base:oe,x:se}=C,[ce,le]=(0,_.useState)({base:oe,v:1}),ue=ce.base===oe?ce.v:1,B=e=>le({base:oe,v:e}),V=kl();Dl(b),(0,_.useEffect)(()=>{let e=!0;return Bl().then(t=>{e&&y(t)},()=>{}),()=>{e=!1}},[]);let de=(0,_.useRef)(x.result);(0,_.useEffect)(()=>{x.result!==de.current&&(de.current=x.result,re(x.result))},[x.result,re]);let fe=e=>{n(e),C.setExplain(e===`clf`?`cls`:`reg`)},pe=e=>{o(null),i(t=>t===e?null:e)},me=(e,t)=>{i(null),o({features:e,anchor:t})},he=e=>{let t=new Set(C.have);t.has(e)?t.delete(e):t.add(e),ne(t)},ge=()=>{te(),B(1)},_e=e=>{if(e===`you`){x.result&&oe?.kind!==`upload`&&(S.youFrom&&ie(S.youFrom),re(x.result));return}ie(e)},ve=()=>b.current?.querySelector(`.upbtn`)??null,ye=()=>{if(p){m(null);return}let e=ve(),t=e?.closest(`.ctl-wrap`),n=e&&t?e.getBoundingClientRect().left-t.getBoundingClientRect().left:0;m({left:t?Math.max(0,Math.min(n,t.clientWidth-360)):0})},be=()=>{m(null),ve()?.focus()},xe=(0,_.useRef)(null),Se=()=>{xe.current=`button`,u(!1)},Ce=()=>{xe.current=`card`,u(!0)};(0,_.useEffect)(()=>{let e=xe.current;xe.current=null,e&&b.current?.querySelector(e===`card`?`.tour`:`.tour-reopen`)?.focus()},[l]);let we=l?el[d]:null,Te=we?we.cols:null,Ee=e=>`col`+(Te&&!Te.includes(e)?` dim`:``),De=(0,_.useCallback)(()=>i(null),[]),Oe=w?.threshold??750,ke=z.status===`error`?z.error??``:ae.error,Ae=z.status!==`error`&&z.error!==null&&T&&C.proposal.fits!==T.configuration?z.error:void 0,je=(0,_.useRef)(null),Me=(0,_.useRef)(null),Ne=(0,_.useRef)(null),Pe=gs(b,ke===null&&[w,T,E,D,O,k,A,j,M,F,se].every(Boolean));if(jl(we?.card===`cohort`?je:we?.card===`ageing`?Me:null),ke!==null)return(0,H.jsxs)(`div`,{className:`px`,ref:b,children:[(0,H.jsx)(W,{k:`prognostic.explainer.sub`,as:`p`,className:`sub`}),(0,H.jsxs)(`div`,{id:`reading`,tabIndex:-1,className:`reading error`,role:`alert`,children:[(0,H.jsx)(W,{k:`prognostic.explainer.error`,as:`p`,vars:{detail:ke}}),(0,H.jsx)(`button`,{type:`button`,onClick:z.retry,children:e(`prognostic.explainer.retry`)})]})]});if(!w||!T||!E||!D||!O||!k||!A||!j||!M||!F||!se)return(0,H.jsxs)(`div`,{className:`px`,ref:b,children:[(0,H.jsx)(W,{k:`prognostic.explainer.sub`,as:`p`,className:`sub`}),(0,H.jsx)(`p`,{id:`reading`,tabIndex:-1,className:`reading is-loading ex-status`,"aria-busy":`true`,...G(`prognostic.explainer.loading`),children:e(`prognostic.explainer.loading`)})]});let Fe=D.prediction,Ie=D.columns,Le={reg:T.treeCounts.regressor,clf:T.treeCounts.classifier},Re=new Map(w.features.map(e=>[e.name,e])),ze=h?Re.get(h):void 0,Be=h?Ie.indexOf(h):-1,Ve=ze&&h?[Us(e,ze,Number(I[h]??ze.median),L[h]!==void 0),...Be>=0?[e(`prognostic.explainer.stripe.push`,{push:(j[Be]>=0?`+`:`−`)+(t===`clf`?Math.abs(j[Be]*100).toFixed(1):Math.round(Math.abs(j[Be])).toLocaleString(`en-AU`)),unit:e(`prognostic.explainer.wf.unit.${t}`)})]:[]]:null,He=e=>t=>e===`reg`?t>Oe:t>.5,Ue=s.which===`reg`?Fe.votes.rate:Fe.votes.prob,We=E.story,Ge=S.stale||S.switching,Ke=Re.get(`EstimatedTotalIntraCranialVol`)?.median??zl,qe=oe?.kind===`upload`?oe.report.etiv??Ke:Ke;return(0,H.jsxs)(`div`,{className:`px`+(S.switching?` is-switching`:``),ref:b,"data-zoom":r??void 0,children:[(0,H.jsx)(W,{k:`prognostic.explainer.sub`,as:`p`,className:`sub`}),(0,H.jsxs)(`div`,{className:`ctl-wrap`,children:[(0,H.jsx)(bc,{people:P,person:F,onPick:_e,facts:{age:Math.round(Number(I.ageAtscan)),cag:Math.round(Number(I.cag)),cap:Math.round(Number(I.CAP)),edited:C.edited,title:F.uploaded?e(`prognostic.explainer.you.title`,{from:F.from??``}):e(`prognostic.explainer.person.title`,{label:F.label})},configuration:{name:T.configuration,inputs:T.columns.length,full:S.full,switching:S.switching,failed:Ae},onAllGroups:()=>ne(Oo),trees:C.trees,onTrees:C.setTrees,k:C.k,popoverOpen:p!==null,onUpload:ye}),p&&(0,H.jsx)(ol,{scan:x,left:p.left,onClose:be})]}),(0,H.jsxs)(`div`,{className:`px-stage`,children:[(0,H.jsxs)(`div`,{className:`px-grid`,children:[(0,H.jsxs)(`div`,{className:`px-left`,children:[(0,H.jsx)(`div`,{className:`canvas-scroll`,children:(0,H.jsxs)(`svg`,{id:`flow`,className:`flow`,viewBox:`0 0 ${K.endX-30} ${Ms.h}`,role:`group`,"aria-label":e(`prognostic.explainer.title`),children:[(0,H.jsx)(`g`,{className:Ee(`forests`),children:(0,H.jsx)(Zc,{geom:O,shares:k,focus:t,tokens:V})}),(0,H.jsx)(`g`,{className:Ee(`visit`),"data-col":`visit`,children:(0,H.jsx)(Rl,{record:I,geom:O,states:A,shares:k[t],art:v,focus:t,tokens:V,onEdit:me})}),(0,H.jsx)(`g`,{className:Ee(`inputs`),"data-col":`inputs`,children:(0,H.jsx)(Jc,{spec:w,geom:O,columns:Ie,shap:j,edits:L,have:C.have,states:A,focus:t,tokens:V,opened:r===`inputs`?`inputs`:null,onToggleBand:he,onEdit:me,onHover:g,onOpen:()=>pe(`inputs`)})}),(0,H.jsx)(`g`,{className:Ee(`forests`),"data-col":`forests`,children:(0,H.jsx)(qc,{focus:t,onFocus:fe,k:D.k,counts:Le,front:S.front,columns:S.features,threshold:Oe,opened:r===`forests`?`forests`:null,tokens:V,onOpenTree:(e,t)=>{fe(e),c({which:e,index:t}),pe(`tree`)},onOpen:()=>pe(`forests`)})}),(0,H.jsx)(`g`,{className:Ee(`avg`),"data-col":`avg`,children:(0,H.jsx)(ac,{votes:Fe.votes,k:D.k,rate:Fe.rate,prob:Fe.prob,threshold:Oe,tokens:V,opened:r===`avg`?`avg`:null,onOpen:()=>pe(`avg`)})})]})}),l?(0,H.jsx)(tl,{step:d,onStep:f,onClose:Se}):(0,H.jsx)(`button`,{type:`button`,className:`tour-reopen`,onClick:Ce,...G(`prognostic.tour.open`),children:e(`prognostic.tour.open`)})]}),(0,H.jsxs)(`div`,{className:Ee(`end`),"data-col":`end`,children:[(0,H.jsx)(Xc,{band:M,rate:Fe.rate,prob:Fe.prob,flowEnd:Ne,lastCard:We.ageing?Me:je,verdictEnd:212}),(0,H.jsx)(Zs,{svgRef:Ne,rate:Fe.rate,prob:Fe.prob,band:M,threshold:Oe,focus:t,onFocus:fe,steps:S.steps,base:D.explanation.base[t],columns:Ie,record:I,spec:w,edits:L,upload:oe?.kind===`upload`,pending:Ge,opened:r===`end`?`end`:null,onOpen:()=>pe(`end`),onEdit:me,onHover:()=>{}}),(0,H.jsxs)(`div`,{className:`ctxgrid`,children:[(0,H.jsx)(dc,{rootRef:je,grid:We.density_grid,boxes:We.stage_boxes.prob,rate:Fe.rate,prob:Fe.prob,pin:C.have.has(`motor`)&&C.have.has(`cog`)?C.pin:null,threshold:Oe,scale:Pe,state:Al(we,`cohort`),pending:Ge}),(0,H.jsx)(Ss,{rootRef:Me,ageing:We.ageing,age:Number(I.ageAtscan),lv:C.inputs.lv/Fo,rate:Fe.rate,etiv:qe,scale:Pe,state:Al(we,`ageing`),pending:Ge})]})]})]}),(r===`forests`||r===`avg`||r===`end`)&&(0,H.jsx)(vc,{column:r,metrics:E.metadata.metrics,configuration:T.configuration,k:D.k,counts:Le,votes:Fe.votes,rate:Fe.rate,prob:Fe.prob,threshold:Oe,onClose:De}),r===`tree`&&S.treeView.count>0&&(0,H.jsx)(rl,{which:s.which,index:S.treeView.index,tree:S.treeView.tree,count:S.treeView.count,columns:S.features,x:se,threshold:Oe,rate:Fe.rate,prob:Fe.prob,tokens:V,onIndex:e=>c({which:s.which,index:e}),onFlip:()=>{let e=nl(Ue,S.treeView.index,S.treeView.count,He(s.which),s.which===`reg`?Fe.rate:Fe.prob);e!==null&&c({which:s.which,index:e})},onClose:De}),r===`inputs`&&(0,H.jsx)(Hc,{spec:w,columns:S.vii,used:Ie,scale:ue,record:I,own:N,edits:L,states:A,hit:null,onEdit:R,onEditSex:e=>R(`isMale`,e),onScaleCortex:e=>{B(e);for(let[t,n]of Object.entries(zc(w,Ie,N,e)))R(t,n)},onReset:ge,onClose:De})]}),a&&(0,H.jsx)(Lc,{features:a.features,anchor:a.anchor,spec:w,record:I,own:N,edits:L,onEdit:R,onReset:ee,onClose:()=>o(null)}),Ve&&(0,H.jsx)(Qc,{lines:Ve})]})}function Hl(e,t,n,r){return i=>n+(i-e)/(t-e)*(r-n)}var Ul=(e,t,n)=>Math.max(t,Math.min(n,e));function Wl(e){return e.filter(e=>e[1]!==null&&!Number.isNaN(e[1]))}function Gl(e,t){let n=Wl(e);if(!n.length)return null;if(t<=n[0][0])return n[0][1];let r=n[n.length-1];if(t>=r[0])return r[1];for(let e=0;e<n.length-1;e++){let r=n[e],i=n[e+1];if(t>=r[0]&&t<=i[0])return i[0]===r[0]?r[1]:r[1]+(i[1]-r[1])*(t-r[0])/(i[0]-r[0])}return null}function Kl(e,t,n,r,i){return Wl(e).map((e,a)=>`${a?`L`:`M`}${t(e[0]).toFixed(1)},${n(Ul(e[1],r,i)).toFixed(1)}`).join(``)}function ql(e,t,n,r,i,a){let o=Wl(e);if(!o.length)return``;let s=n(a===`above`?i:r).toFixed(1);return`${Kl(e,t,n,r,i)}L${t(o[o.length-1][0]).toFixed(1)},${s}L${t(o[0][0]).toFixed(1)},${s}Z`}function Jl(e,t=12){let n=e.map(e=>({...e})),r=n.filter(e=>e.anchor===`start`).sort((e,t)=>e.y-t.y);for(let e=1;e<r.length;e++)r[e].y-r[e-1].y<t&&(r[e].y=r[e-1].y+t);return n}function Yl(e,t,n,r,i,a){let o=t-n.left-n.right,s=r+(e-n.left)/o*(i-r);return a&&(s=Math.round(s/a)*a),Ul(s,r,i)}function Xl({rungs:e,current:t,ytitle:n,label:r,groupLabels:i,cfgLabel:a,onSelect:o}){let s=(0,_.useRef)(null),[c,l]=(0,_.useState)(800);(0,_.useLayoutEffect)(()=>{let e=s.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>l(Math.max(280,Math.round(e.getBoundingClientRect().width))));return t.observe(e),()=>t.disconnect()},[]);let u=c<560?220:260,d=e.flatMap(e=>[e.train,e.cv-e.cvSd,e.cv+e.cvSd,e.test]),f=Math.floor(Math.min(...d)/100)*100,p=Math.ceil(Math.max(...d)/100)*100,m=Hl(f,p,u-44,24),h=e.filter(e=>e.group===`paper`),g=e.filter(e=>e.group===`site`),v=h.length+(g.length?g.length+1:0),y=e=>60+(e+.5)/v*(c-60-16),b=(c-60-16)/v,x=new Map;h.forEach((e,t)=>x.set(e.name,y(t))),g.forEach((e,t)=>x.set(e.name,y(h.length+1+t)));let S=(e,t)=>t.map((t,n)=>`${n?`L`:`M`}${x.get(t.name)},${m(t[e])}`).join(` `),C=Array.from({length:(p-f)/100+1},(e,t)=>f+t*100).filter(e=>e%200==0||p-f<=400);return(0,H.jsxs)(`div`,{ref:s,className:`ladder`,children:[(0,H.jsxs)(`svg`,{viewBox:`0 0 ${c} ${u}`,width:c,height:u,role:`img`,"aria-label":r,children:[C.map(e=>(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`line`,{className:`grid`,x1:60,x2:c-16,y1:m(e),y2:m(e)}),(0,H.jsx)(`text`,{x:52,y:m(e)+4,textAnchor:`end`,children:e.toLocaleString(`en-AU`)})]},e)),(0,H.jsx)(`text`,{x:60,y:12,className:`quiet`,children:n}),e.map(e=>e.name===t&&(0,H.jsx)(`rect`,{className:`current`,x:x.get(e.name)-(c-60-16)/v/2,y:18,width:(c-60-16)/v,height:u-44-24+6},e.name)),[h,g].map((e,n)=>e.length>0&&(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`path`,{className:`train`,d:S(`train`,e)}),(0,H.jsx)(`path`,{className:`cv`,d:S(`cv`,e)}),(0,H.jsx)(`path`,{className:`test`,d:S(`test`,e)}),e.map(e=>(0,H.jsxs)(`g`,{"data-config":e.name,onClick:o?()=>o(e.name):void 0,className:o?`pick`:void 0,children:[(0,H.jsx)(`line`,{className:`cv-sd`,x1:x.get(e.name),x2:x.get(e.name),y1:m(e.cv-e.cvSd),y2:m(e.cv+e.cvSd)}),(0,H.jsx)(`circle`,{className:`cv`,cx:x.get(e.name),cy:m(e.cv),r:4}),(0,H.jsx)(`circle`,{className:`test`,cx:x.get(e.name),cy:m(e.test),r:3.5}),!o&&(0,H.jsx)(`text`,{x:x.get(e.name),y:u-24,textAnchor:`middle`,className:e.name===t?`lbl`:``,children:e.name})]},e.name))]},n)),g.length>0&&(0,H.jsx)(`text`,{x:x.get(g[0].name),y:u-8,textAnchor:`start`,className:`quiet`,children:i.site}),(0,H.jsx)(`text`,{x:x.get(h[0]?.name??``)??60,y:u-8,textAnchor:`start`,className:`quiet`,children:i.paper})]}),o&&(0,H.jsx)(`div`,{className:`ladder-cfg`,role:`group`,"aria-label":a,style:{top:u-40},children:e.map(e=>(0,H.jsx)(`button`,{type:`button`,"data-config":e.name,"aria-pressed":e.name===t,onClick:()=>o(e.name),style:{left:x.get(e.name)-b/2,width:b},children:e.name},e.name))})]})}var Zl=new Set([`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`]),Ql=e=>Math.round(e*100);function $l(){let{model:e,setHave:t}=$o(),n=U(),[r,i]=(0,_.useState)(null),a=wa(`prognostic.models.title`),o=e.files,s=e.ready;if(!o||!s)return null;let c=o.metadata.metrics[s.configuration],l=Object.entries(o.story.ladder).map(([e,t])=>({name:e,train:t.fig2.train_mae,cv:t.fig2.val_mae,cvSd:t.fig2.val_sd,test:t.fig2.test_mae,group:Zl.has(e)?`paper`:`site`})),u=e.status===`loading`?r:null,d=r,f=u?(0,H.jsx)(W,{k:`prognostic.ladder.loading`,vars:{name:u}}):e.error&&d?(0,H.jsx)(W,{k:`prognostic.ladder.failed`,vars:{name:d,detail:e.error}}):(0,H.jsx)(W,{k:`prognostic.ladder.note`,vars:{name:s.configuration,features:s.columns.length,mae:Math.round(c.reg_mae_cv),served:o.metadata.served_configuration}}),p=Object.values(o.metadata.enabled_groups);return(0,H.jsxs)(`section`,{className:`wrap models`,id:`models`,"aria-label":a,children:[(0,H.jsx)(W,{k:`prognostic.models.title`,as:`h2`}),(0,H.jsx)(W,{k:`prognostic.models.lede`,as:`p`}),(0,H.jsxs)(`div`,{className:`model-cards`,children:[(0,H.jsxs)(`div`,{className:`model`,children:[(0,H.jsx)(W,{k:`prognostic.models.reg`,as:`b`}),(0,H.jsx)(W,{k:`prognostic.models.reg.text`,as:`span`,vars:{trees:s.treeCounts.regressor,mae:Math.round(c.reg_mae_cv),r2:c.reg_r2_cv.toFixed(2),rows:Math.round(c.fig2_n_train??c.n_rows_reg)}})]}),(0,H.jsxs)(`div`,{className:`model`,children:[(0,H.jsx)(W,{k:`prognostic.models.clf`,as:`b`}),(0,H.jsx)(W,{k:`prognostic.models.clf.text`,as:`span`,vars:{trees:s.treeCounts.classifier,acc:Ql(c.clf_accuracy_cv),prec:Ql(c.clf_precision_cv),rec:Ql(c.clf_recall_cv)}})]})]}),(0,H.jsx)(Xl,{rungs:l,current:s.configuration,cfgLabel:n(`prognostic.ladder.cfg`),onSelect:e=>{i(e),t(Mo(e))},ytitle:n(`prognostic.ladder.ytitle`),label:n(`prognostic.ladder.label`),groupLabels:{paper:n(`prognostic.ladder.paper`),site:n(`prognostic.ladder.site`)}}),(0,H.jsx)(`p`,{className:`quiet cfg-note`,role:`status`,"data-testid":`ladder-note`,children:f}),(0,H.jsxs)(`div`,{className:`legend`,children:[(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`i`,{className:`sw fast`}),(0,H.jsx)(W,{k:`prognostic.ladder.legend.test`})]}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`i`,{className:`sw moderate`}),(0,H.jsx)(W,{k:`prognostic.ladder.legend.cv`})]}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`i`,{className:`sw train`}),(0,H.jsx)(W,{k:`prognostic.ladder.legend.train`})]})]}),(0,H.jsxs)(`dl`,{className:`prov`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:(0,H.jsx)(W,{k:`prognostic.prov.model`})}),(0,H.jsx)(`dd`,{children:(0,H.jsx)(W,{k:`prognostic.prov.model.value`,vars:{version:o.spec.version}})})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:(0,H.jsx)(W,{k:`prognostic.prov.trained`})}),(0,H.jsx)(`dd`,{children:(0,H.jsx)(W,{k:`prognostic.prov.trained.value`,vars:{date:o.metadata.exported_at,sklearn:o.metadata.sklearn,onnx:o.metadata.onnx}})})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:(0,H.jsx)(W,{k:`prognostic.prov.groups`})}),(0,H.jsx)(`dd`,{children:(0,H.jsx)(W,{k:`prognostic.prov.groups.value`,vars:{enabled:p.filter(Boolean).length,total:p.length}})})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:(0,H.jsx)(W,{k:`prognostic.prov.imputation`})}),(0,H.jsx)(`dd`,{children:(0,H.jsx)(W,{k:`prognostic.prov.imputation.value`})})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:(0,H.jsx)(W,{k:`prognostic.prov.validation`})}),(0,H.jsx)(`dd`,{children:(0,H.jsx)(W,{k:`prognostic.prov.validation.value`})})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:(0,H.jsx)(W,{k:`prognostic.prov.paper`})}),(0,H.jsx)(`dd`,{children:(0,H.jsx)(`a`,{href:`https://doi.org/${o.metadata.paper_doi}`,children:(0,H.jsx)(W,{k:`prognostic.prov.paper.value`})})})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:(0,H.jsx)(W,{k:`prognostic.prov.engine`})}),(0,H.jsx)(`dd`,{children:n(`prognostic.prov.engine.${s.engine}`)})]})]})]})}var eu=`http://www.w3.org/2000/svg`,tu=(e,t=0,n=1)=>e<t?t:e>n?n:e,nu=(e,t,n)=>e+(t-e)*n,q=(e,t,n)=>tu((e-t)/(n-t)),ru=e=>1-(1-e)**3,iu=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,au=e=>1+2.6*(e-1)**3+1.6*(e-1)**2,ou=e=>Math.sin(Math.PI*tu(e)),J=e=>Math.round(e*10)/10,su=e=>Math.round(e*1e3)/1e3,cu=e=>Math.round(e).toLocaleString(`en-US`),lu=(e,t)=>(e<0?`−`:`+`)+Math.abs(e).toFixed(t);function Y(e,t,n){let r=document.createElementNS(eu,e);if(t)for(let e of Object.keys(t)){let n=t[e];n!=null&&(e===`text`?r.textContent=String(n):r.setAttribute(e,String(n)))}return n&&n.appendChild(r),r}function X(e,t,n,r,i,a,o=`start`){let s=Y(`text`,{x:t,y:n,class:r,"text-anchor":o===`start`?null:o,text:a},e);return s.style.fontSize=i+`px`,s}function uu(e,t,n,r){let i=document.createElement(e);return t&&(i.className=t),r!=null&&(i.textContent=r),n&&n.appendChild(i),i}function du(e,t,n){let r=e.__c??={};r[t]!==n&&(r[t]=n,e.setAttribute(t,String(n)))}function Z(e,t){du(e,`opacity`,t<=.003?0:t>=.997?1:Math.round(t*400)/400)}function fu(e,t,n,r){du(e,`transform`,`translate(${J(t)} ${J(n)})${r===void 0||r===1?``:` scale(${su(r)})`}`)}function pu(e,t){let n=e;n.__t!==t&&(n.__t=t,e.textContent=t)}function mu(e,t){let n=e;n.__f!==t&&(n.__f=t,n.style.fill=t)}function hu(e,t,n){let r=Math.round(tu(n)*100);return r>=100?e:r<=0?t:`color-mix(in oklab, ${e} ${r}%, ${t})`}function gu(e,t){let n=0;try{n=e.getComputedTextLength()}catch{}return n>1?n:t}function _u(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Q(e,t,n={}){return{draw:n=>e(n,t),where:n}}var vu={landscape:{name:`landscape`,W:1280,H:720,A:[64,228],B:[656,228],cite:[64,698,`start`],note:[1216,698,`end`],cap:[64,40,1152],crop:[64,26,64,8],below:200},portrait:{name:`portrait`,W:640,H:1220,A:[40,304],B:[40,724],cite:[40,1154,`start`],note:[40,1178,`start`],cap:[40,28,560],crop:[16,14,16,6],below:272}},yu={play:`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 3.5v13l11-6.5z"/></svg>`,pause:`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 3.5h4v13h-4zM11.5 3.5h4v13h-4z"/></svg>`,replay:`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3.5a6.5 6.5 0 1 1-6.1 4.3l1.9.7A4.5 4.5 0 1 0 10 5.5V8L6 4.5 10 1z"/></svg>`},bu=.5,xu=.45,Su=.6,Cu=700,wu=0,Tu=e=>e+(/[.?!]$/.test(e)?` `:`. `),Eu=(e,t)=>{t&&e.setAttribute(`data-copy`,t)},Du=e=>e.table===void 0?[]:[].concat(e.table);function Ou(e,t,n){let r=t,i=n.labels,a=0,o=!1,s=!1,c=0,l=0,u=-1,d=!1,f=!1,p=!1,m=!1,h=[],g=0,_=null,v=`pa`+ ++wu,y=n.captions===`above`,b=[],x=[],S=()=>{h=[],g=0;for(let e of r.scenes)h.push(g),g+=e.dur},C=e=>h[e]+r.scenes[e].dur-Su;function w(e,t,n,r){e.addEventListener(t,n),r.push(()=>e.removeEventListener(t,n,void 0))}let T=uu(`div`,`pa`,e);T.classList.toggle(`pa-above`,y),n.start===`scroll`&&T.classList.add(`pa-scroll`);let E=uu(`div`,`pa-wrap`,T),D=uu(`div`,`pa-stage`,E),O=Y(`svg`,{class:`pa-svg`,"aria-hidden":`true`,focusable:`false`},D),k=null,A=null,j=null;if(n.poster){k=uu(`button`,`pa-poster`,D),k.type=`button`,k.setAttribute(`data-corner`,n.poster),uu(`span`,`pa-poster-i`,k).innerHTML=yu.play;let e=uu(`span`,`pa-poster-w`,k);A=uu(`span`,`pa-poster-t`,e),j=uu(`span`,`pa-poster-s`,e),w(k,`click`,()=>{d=!0,V()},b)}let M=n.startLine===void 0,N=null,P=[],F=null,I=null,L=uu(`button`),R=[],ee=[],te=[],ne=[],re=``,ie=[],z=vu.landscape;function ae(){D.querySelectorAll(`.pa-msg`).forEach(e=>e.remove()),_&&uu(`p`,`pa-msg`,D,_).setAttribute(`role`,`status`),k&&(k.hidden=_!==null)}function oe(){for(x.splice(0).forEach(e=>e()),N?.remove(),P.forEach(e=>e.remove()),F?.remove(),I?.remove();O.firstChild;)O.removeChild(O.firstChild);let e=r.scenes,t=e.length,s=r.art===null;y&&(N=uu(`div`,`pa-caps`),E.insertBefore(N,D)),P=e.map((e,t)=>{let r=uu(`div`,`pa-cap`),i=uu(n.captionLevel===2?`h2`:`h3`,`pa-h`,r);return uu(`span`,`pa-n`,i,String(t+1)).setAttribute(`aria-hidden`,`true`),Eu(uu(`span`,``,i,e.head),e.keys?.head),Eu(uu(`p`,`pa-s`,r,e.sub),e.keys?.sub),N?N.appendChild(r):D.insertBefore(r,O),r}),F=uu(`div`,`pa-bar`,T),L=uu(`button`,`pa-play`,F),L.type=`button`,re=``,w(L,`click`,()=>{d=!0,o?de():V()},x);let c=uu(`ol`,`pa-steps`,F);ee=[],te=e.map(()=>-1),ne=e.map(()=>-1),u=-1,R=e.map((e,n)=>{let r=uu(`button`,`pa-step`,uu(`li`,``,c));r.type=`button`,r.setAttribute(`aria-label`,i.step(n+1,t,e.head)),ee.push(uu(`span`,`pa-fill`,uu(`span`,`pa-track`,r)));let a=uu(`span`,`pa-step-l`,r);return uu(`span`,`pa-step-n`,a,String(n+1)),uu(`span`,`pa-step-t`,a,e.label),w(r,`click`,()=>pe(n,!0),x),r}),w(c,`keydown`,e=>{let n=e,r=n.key===`ArrowRight`?1:n.key===`ArrowLeft`?-1:0;if(!r)return;let i=tu(ce()+r,0,t-1);n.preventDefault(),pe(i,!0),R[i].focus()},x),I=uu(`details`,`pa-text`,T),Eu(uu(`summary`,``,I,r.summary),r.keys?.summary);let l=uu(`ol`,``,I);for(let t of e){let e=uu(`li`,``,l);Eu(e,t.keys?.text),uu(`strong`,``,e,Tu(t.head)),e.appendChild(document.createTextNode(t.text??t.sub))}for(let e of Du(r)){let t=uu(`table`,``,uu(`div`,`pa-tablewrap`,I));Eu(uu(`caption`,``,t,e.caption),e.keys?.caption);let n=uu(`tr`,``,uu(`thead`,``,t));e.head.forEach((t,r)=>Eu(uu(`th`,``,n,t),e.keys?.head[r]));let r=uu(`tbody`,``,t);e.rows.forEach(e=>{let t=uu(`tr`,``,r);e.forEach(e=>uu(`td`,``,t,e))})}r.cite&&uu(`p`,`pa-src`,I,r.cite),r.credits&&Eu(uu(`p`,`pa-src`,I,r.credits),r.keys?.credits),ae(),T.classList.toggle(`pa-waiting`,s),L.disabled=s,R.forEach(e=>{e.disabled=s}),k&&(k.disabled=s,A&&(A.textContent=i.poster?.title??``),j&&(j.textContent=i.poster?.sub??``)),se(z.name),le(a),ue()}function se(e){z=vu[e],T.setAttribute(`data-layout`,e);let t=z.crop.slice();y&&(t[1]=z.below);let n=z.W-t[0]-t[2],i=z.H-t[1]-t[3];for(D.style.aspectRatio=n+` / `+i,T.style.setProperty(`--pa-u`,`calc(100cqw / `+n+`)`),T.style.setProperty(`--pa-cl`,su((z.cap[0]-t[0])/n*100)+`%`),T.style.setProperty(`--pa-ct`,su((z.cap[1]-t[1])/i*100)+`%`),T.style.setProperty(`--pa-cw`,su(z.cap[2]/n*100)+`%`);O.firstChild;)O.removeChild(O.firstChild);O.setAttribute(`viewBox`,t[0]+` `+t[1]+` `+n+` `+i);let a=Y(`defs`,null,O),o=r.art,s=e===`portrait`;ie=r.scenes.map(e=>{let t=Y(`g`,{opacity:0},O),n=Y(`g`,{transform:`translate(`+z.A[0]+` `+z.A[1]+`)`},t),r=Y(`g`,{transform:`translate(`+z.B[0]+` `+z.B[1]+`)`},t),i=Y(`g`,null,t),c=e.note===void 0?[]:[].concat(e.note);if(c.length&&s)c.forEach((e,n)=>Y(`text`,{x:z.note[0],y:z.note[1]+n*22,"text-anchor":z.note[2],class:`pa-note`,text:e},t));else if(c.length){let e=Y(`text`,{x:z.note[0],y:z.note[1],"text-anchor":z.note[2],class:`pa-note`,text:c.join(` `)},t);c.length>1&&gu(e,701)>Cu&&(e.remove(),c.forEach((e,n)=>Y(`text`,{x:z.note[0],y:z.note[1]-21*(c.length-1-n),"text-anchor":z.note[2],class:`pa-note`,text:e},t)))}let l=o===null?[]:e.blocks.map(t=>{let c=t.where.panel??`A`,l={A:n,B:r,X:i,defs:a,g:c===`B`?r:c===`X`?i:n,portrait:s,uid:v+e.key,art:o,P:(e,t,n)=>{let r=e===`A`?z.A:z.B;return[J(r[0]+t),J(r[1]+n)]},stageCentre:s?[z.W/2,(z.A[1]+z.B[1]+400)/2+10]:[(z.A[0]+z.B[0]+560)/2,z.A[1]+200+18]},u=t.draw(l),d=t.where.at??0;return e=>{u&&u(e-d)}});return t.setAttribute(`display`,`none`),{g:t,ups:l,vis:0}}),r.citeShort&&Y(`text`,{x:z.cite[0],y:z.cite[1],"text-anchor":z.cite[2],class:`pa-note`,text:r.citeShort},O),te=te.map(()=>-1)}function ce(){for(let e=h.length-1;e>=0;e--)if(a>=h[e]-1e-6)return e;return 0}function le(e){a=tu(e,0,g);let t=r.scenes;for(let e=0;e<t.length;e++){let n=t[e],r=ie[e],i=a-h[e],o=e===t.length-1,s=0;if(i>=0&&(i<n.dur||o&&i<=n.dur+1e-6)&&(s=Math.min(e===0?1:ru(q(i,0,bu)),o?1:1-q(i,n.dur-xu,n.dur))),s>0){r.vis<=0&&r.g.removeAttribute(`display`);let e=tu(i,0,n.dur);r.ups.forEach(t=>t(e)),Z(r.g,s)}else r.vis!==0&&r.g.setAttribute(`display`,`none`);r.vis=s;let c=P[e],l=Math.round(s*200)/200;te[e]!==l&&(te[e]=l,c.style.opacity=String(l),c.style.visibility=l>0?`visible`:`hidden`,c.style.transform=l<1&&i<n.dur/2?`translateY(calc(var(--pa-u) * `+J((1-l)*14)+`))`:`none`,l>0?c.removeAttribute(`aria-hidden`):c.setAttribute(`aria-hidden`,`true`));let u=Math.round(tu(i/n.dur)*1e3)/10;ne[e]!==u&&(ne[e]=u,ee[e].style.width=u+`%`)}let n=ce();n!==u&&(u=n,R.forEach((e,t)=>{t===n?e.setAttribute(`aria-current`,`step`):e.removeAttribute(`aria-current`)}))}function ue(){let e=o?`pause`:s?`replay`:`play`;re!==e&&(re=e,L.innerHTML=yu[e],L.setAttribute(`aria-label`,i[e]))}function B(e){if(!o)return;let t=Math.min((e-l)/1e3,.1);l=e;try{if(a+t>=g){le(g),o=!1,s=!0,ue();return}le(a+t)}catch(e){de(),console.error(`paper animation`,e),n.onError?.(e);return}c=requestAnimationFrame(B)}function V(){o||r.art===null||(k&&(k.remove(),k=null,A=null,j=null),M=!0,(s||a>=g-.001)&&(s=!1,le(0)),o=!0,l=performance.now(),ue(),c=requestAnimationFrame(B))}function de(){o=!1,cancelAnimationFrame(c),ue()}function fe(e){s=!1,le(e),a>=g-.001&&(s=!0),ue()}function pe(e,t){if(e=tu(e,0,r.scenes.length-1),d||=t,n.reduce||n.start===`scroll`){de(),fe(C(e));return}fe(h[e]+(e===0?0:.001)),V()}function me(){let t=e.parentElement,n=0;if(t){let e=getComputedStyle(t);n=t.clientWidth-((parseFloat(e.paddingLeft)||0)+(parseFloat(e.paddingRight)||0))}return n>0?n:T.getBoundingClientRect().width||1280}let he=()=>me()<620?`portrait`:`landscape`;function ge(){let e=he();e!==z.name&&(se(e),le(a))}S(),n.t===void 0?(n.reduce||n.poster)&&(a=C(0)):a=tu(n.t,0,g),z=vu[he()],oe();let _e=null,ve=null;if(typeof ResizeObserver<`u`&&(_e=new ResizeObserver(ge),e.parentElement&&_e.observe(e.parentElement),_e.observe(E)),document.fonts!==void 0&&document.fonts.ready&&document.fonts.ready.then(()=>{m||(se(z.name),le(a))}),n.start===`view`&&!n.reduce&&n.t===void 0&&typeof IntersectionObserver<`u`&&(ve=new IntersectionObserver(e=>{p=e[0].isIntersecting&&e[0].intersectionRatio>=.35,p&&M&&!o&&!s&&(!d||f)?(f=!1,V()):!p&&o&&(f=!0,de())},{threshold:[0,.35,.6]}),ve.observe(D),n.startLine!==void 0)){let e=new IntersectionObserver(t=>{t[0].isIntersecting&&!M&&(M=!0,e.disconnect(),!o&&!s&&!d&&r.art!==null&&(f=!1,V()))},{rootMargin:`0px 0px -`+Math.round((1-tu(n.startLine,0,1))*100)+`% 0px`,threshold:0});e.observe(D),b.push(()=>e.disconnect())}w(document,`visibilitychange`,()=>{document.hidden&&o?(f=!0,de()):!document.hidden&&f&&!s&&(ve===null||p)&&(f=!1,V())},b);let ye=()=>r.scenes.map((e,t)=>({key:e.key,label:e.label,start:h[t],duration:e.dur,title:e.head}));return{play:V,pause:de,seek:fe,goTo:e=>pe(e,!0),relabel(e,t){let u=o;r=e,i=t??i,S(),a=tu(a,0,g),oe(),u&&e.art===null?de():u?(cancelAnimationFrame(c),l=performance.now(),c=requestAnimationFrame(B),o=!0):e.art&&n.start===`view`&&p&&M&&!d&&!n.reduce&&!s&&V()},message(e){_=e,ae()},destroy(){de(),m=!0,x.splice(0).forEach(e=>e()),b.splice(0).forEach(e=>e()),_e?.disconnect(),ve?.disconnect(),T.remove()},get duration(){return g},get time(){return a},get playing(){return o},get steps(){return ye()}}}function ku(){return typeof window.matchMedia!=`function`||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Au({script:e,failed:t,start:n,captions:r,captionLevel:i,startLine:a,poster:o,onError:s}){let c=U(),l=o?.title,u=o?.sub,d=o?.corner??`top-right`,f=o!==void 0,p=(0,_.useMemo)(()=>({play:c(`anim.play`),pause:c(`anim.pause`),replay:c(`anim.replay`),step:(e,t,n)=>c(`anim.step`,{n:e,m:t,title:n}),...l===void 0?{}:{poster:{title:l,sub:u??``}}}),[c,l,u]),m=(0,_.useRef)(null),h=(0,_.useRef)(null),g=(0,_.useRef)({script:e,labels:p,failed:t}),v=(0,_.useRef)(s);return(0,_.useEffect)(()=>{v.current=s},[s]),(0,_.useLayoutEffect)(()=>{let e=Ou(m.current,g.current.script,{start:n,captions:r,captionLevel:i,startLine:a,poster:f?d:void 0,reduce:ku(),labels:g.current.labels,onError:e=>v.current?.(e instanceof Error?e.message:String(e))});return e.message(g.current.failed),h.current=e,()=>{e.destroy(),h.current=null}},[n,r,i,a,f,d]),(0,_.useEffect)(()=>{(g.current.script!==e||g.current.labels!==p)&&(g.current={...g.current,script:e,labels:p},h.current?.relabel(e,p))},[e,p]),(0,_.useEffect)(()=>{g.current={...g.current,failed:t},h.current?.message(t)},[t]),(0,H.jsx)(`div`,{className:`pa-host`,ref:m})}var ju=class extends _.Component{state={detail:null};static getDerivedStateFromError(e){return{detail:e instanceof Error?e.message:String(e)}}componentDidCatch(e,t){console.error(`the paper animation failed to draw`,e,t.componentStack)}render(){return this.state.detail===null?this.props.children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`p`,{className:`quiet pa-broken`,children:(0,H.jsx)(W,{k:this.props.messageKey,vars:{detail:this.state.detail}})}),this.props.text]})}};function Mu({script:e}){return(0,H.jsxs)(`details`,{className:`pa-text`,children:[(0,H.jsx)(`summary`,{"data-copy":e.keys?.summary,children:e.summary}),(0,H.jsx)(`ol`,{children:e.scenes.map(e=>(0,H.jsxs)(`li`,{"data-copy":e.keys?.text,children:[(0,H.jsx)(`strong`,{children:Tu(e.head)}),e.text??e.sub]},e.key))}),Du(e).map((e,t)=>(0,H.jsx)(`div`,{className:`pa-tablewrap`,children:(0,H.jsxs)(`table`,{children:[(0,H.jsx)(`caption`,{"data-copy":e.keys?.caption,children:e.caption}),(0,H.jsx)(`thead`,{children:(0,H.jsx)(`tr`,{children:e.head.map((t,n)=>(0,H.jsx)(`th`,{"data-copy":e.keys?.head[n],children:t},n))})}),(0,H.jsx)(`tbody`,{children:e.rows.map((e,t)=>(0,H.jsx)(`tr`,{children:e.map((e,t)=>(0,H.jsx)(`td`,{children:e},t))},t))})]})},t)),e.cite&&(0,H.jsx)(`p`,{className:`pa-src`,children:e.cite}),e.credits&&(0,H.jsx)(`p`,{className:`pa-src`,"data-copy":e.keys?.credits,children:e.credits})]})}var Nu=(e,t)=>{Y(`text`,{x:0,y:16,class:`pa-hd`,text:t.text},e.g)},Pu=(e,t)=>{let n=t.items.map(t=>{let n=Y(`text`,{x:t.x,y:t.y,class:(t.note?`pa-note`:t.quiet?`pa-lb2`:`pa-lb`)+(t.strong?` pa-b`:``),"text-anchor":t.anchor||`start`,text:t.text},e.g);return t.size&&(n.style.fontSize=t.size+`px`),{e:n,at:t.at||0}});return e=>{n.forEach(t=>{Z(t.e,q(e,t.at,t.at+.4))})}},Fu=(e,t)=>{let n=Y(`g`,null,e.g),r=t.size||112,i=t.align===`end`?`end`:t.align===`middle`?`middle`:`start`,a=Y(`text`,{x:t.x,y:t.y,class:`pa-xb`,"font-size":r,"text-anchor":i,text:cu(t.value)+(t.suffix||``)},n),o=[];if(t.lines){let e=t.below?t.x:t.x+Math.round(gu(a,r*1.8))+14;t.lines.forEach((r,a)=>{let s=t.below?t.y+28+a*26:t.y-42+a*30,c=Y(`text`,{x:e,y:s,"text-anchor":t.below?i:`start`,class:a===0&&!t.below?`pa-lb pa-b`:`pa-lb2`,"font-size":t.below?17.5:a===0?23:21,text:r},n);o.push(c)})}let s=t.count||[0,1];return e=>{pu(a,cu(t.value*ru(q(e,s[0],s[1])))+(t.suffix||``)),Z(a,q(e,s[0]-.1,s[0]+.2)),o.forEach((t,n)=>{Z(t,q(e,s[0]+.3+n*.2,s[0]+.7+n*.2))})}},Iu=(e,t)=>{let n=t.parts.reduce((e,t)=>e+t.n,0),r=0,i=Y(`rect`,{x:0,y:t.y,width:0,height:16},Y(`clipPath`,{id:e.uid+`sb`},e.g)),a=Y(`g`,{"clip-path":`url(#`+e.uid+`sb)`},e.g),o=Y(`g`,null,e.g);return t.parts.forEach((e,i)=>{let s=560*e.n/n-(i<t.parts.length-1);Y(`rect`,{x:J(r),y:t.y,width:J(s),height:16,rx:4,class:`pa-`+(e.tone||`accent`)+`f`},a);let c=Y(`text`,{x:J(r),y:t.y+44,class:`pa-lb`},o);Y(`tspan`,{class:`pa-b`,text:cu(e.n)},c),Y(`tspan`,{text:` `+e.label},c),r+=s+2}),e=>{du(i,`width`,J(560*iu(q(e,0,.9)))),Z(o,q(e,.6,1))}},Lu=(e,t)=>{let n=Y(`g`,null,e.g),r=X(n,t.x,t.y,`pa-xb`+(t.tone===`hd`?` pa-hdf`:``),t.size,t.value),i=Math.round(gu(r,t.value.length*t.size*.56));(t.side||[]).forEach(e=>{X(n,t.x+i+12,t.y+e.dy,e.strong?`pa-lb pa-b`:`pa-lb2`,e.strong?19:18,e.text)}),t.unit&&X(n,t.x+i+8,t.y,`pa-lb pa-b`,19,t.unit),t.above&&X(n,t.x+3,t.y-54,`pa-lb2`,18,t.above),t.below&&X(n,t.x+2,t.y+26,`pa-lb2`,16,t.below);let a=t.fade??.5;return e=>{Z(n,q(e,0,a))}},Ru=(e,t)=>{let n=Y(`g`,null,e.g),r=t.h??40;Y(`rect`,{x:t.x,y:t.y,width:t.w,height:r,rx:r/2,class:`pa-card`},n),X(n,t.x+t.w/2,t.y+r/2+7,`pa-lb pa-b`,t.size??18,t.text,`middle`);let i=t.fade||[0,.5];return e=>{Z(n,Math.min(q(e,i[0],i[1]),t.out?1-q(e,t.out[0],t.out[1]):1))}},zu=(e,t)=>{let n=t.items.map((n,r)=>{let i=Y(`g`,null,e.g),a=t.y+r*(t.h+t.gap);return Y(`rect`,{x:t.x,y:a,width:t.w,height:t.h,rx:10,class:`pa-card`},i),X(i,t.x+16,a+27,`pa-lb`,17,n.label),n.unit&&X(i,t.x+t.w-14,a+27,`pa-lb2`,16,n.unit,`end`),i}),r=t.start??0,i=t.step??.32;return e=>{n.forEach((t,n)=>{Z(t,q(e,r+n*i,r+n*i+.3))})}},Bu=(e,t)=>{let n=t.tiles.map((n,r)=>{let i=Y(`g`,null,e.g),a=r*144;return Y(`rect`,{x:a,y:t.y,width:128,height:140,rx:12,class:`pa-card`},i),n.stage!==void 0&&Y(`circle`,{cx:a+22,cy:t.y+28,r:7,class:`pa-s`+n.stage},i),X(i,a+(n.stage===void 0?18:36),t.y+34,`pa-lb2`,17,n.label),X(i,a+18,t.y+94,`pa-xb`,42,n.value),X(i,a+18,t.y+122,`pa-lb2`,16,n.unit),i}),r=t.start??0,i=t.step??.25;return e=>{n.forEach((t,n)=>{Z(t,q(e,r+n*i,r+n*i+.4))})}};function Vu(e,t,n,r){let i=Y(`g`,{transform:`translate(`+t+` `+n+`) scale(`+r+`)`,class:`pa-ghost`},e);return Y(`circle`,{cx:0,cy:-17,r:10},i),Y(`path`,{d:`M-20 27C-20 7-11-3 0-3S20 7 20 27Z`},i),i}var Hu=(e,t)=>{let n=t.cols||5,r=t.values.map((t,r)=>({g:Vu(e.g,76+r%n*102,100+Math.floor(r/n)*84,1.1),col:hu(`var(--fast)`,`var(--accent)`,t)})),i=t.grow||[.8,3.7];return e=>{let t=iu(q(e,i[0],i[1]));r.forEach(e=>{mu(e.g,hu(e.col,`var(--ghost)`,q(t,.05,.75)))})}},Uu=(e,t)=>{let n=e.g;Y(`path`,{d:`M48 40V352H548`,class:`pa-axis`},n),Y(`text`,{x:48,y:380,class:`pa-tk`,text:t.from},n),Y(`text`,{x:462,y:380,class:`pa-tk`,"text-anchor":`middle`,text:t.to},n);let r=Y(`g`,null,n),i=Y(`g`,null,n),a=t.values.map(e=>{let t=hu(`var(--fast)`,`var(--accent)`,e),n=Y(`line`,{x1:48,y1:352,x2:48,y2:352,class:`pa-ln`},r);n.style.stroke=t;let a=Y(`circle`,{cx:48,cy:352,r:5,class:`pa-ring`},i);return a.style.fill=t,{ln:n,tip:a,h:12+e*288}}),o=Math.min(...t.values),s=Y(`g`,null,n);Y(`text`,{x:476,y:58,class:`pa-lb2`,"font-size":17,text:t.top},s),Y(`text`,{x:476,y:340-o*288+2,class:`pa-lb2`,"font-size":17,text:t.bottom},s);let c=t.grow||[.8,3.7];return e=>{let t=iu(q(e,c[0],c[1]));a.forEach(n=>{let r=nu(48,462,t),i=352-n.h*t;du(n.ln,`x2`,J(r)),du(n.ln,`y2`,J(i)),du(n.tip,`cx`,J(r)),du(n.tip,`cy`,J(i)),Z(n.tip,q(e,c[0],c[0]+.2))}),Z(s,q(e,c[1]-.2,c[1]+.3))}},Wu=(e,t)=>{let n=t.row,r=n?128:268,i=n?58:152,a=n?[0,1,2,3].map(e=>[e*144,n.y]):[[0,34],[292,34],[0,214],[292,214]],o=t.studies.map((t,o)=>{let s=Y(`g`,null,Y(`g`,{transform:`translate(`+(a[o][0]+r/2)+` `+(a[o][1]+i/2)+`)`},e.g));Y(`rect`,{x:-r/2,y:-i/2,width:r,height:i,rx:n?10:14,class:`pa-plate`},s);let c=t.logo?e.art.logos[t.key]:void 0;if(c){let e=n?Math.min((r-22)/c.w,(i-16)/c.h):Math.min(212/c.w,100/c.h),t=c.w*e,a=c.h*e;Y(`image`,{href:c.uri,x:J(-t/2),y:J(-a/2),width:J(t),height:J(a),preserveAspectRatio:`xMidYMid meet`},s)}else n?X(s,0,8,`pa-plate-t`,Math.round(i*.36),t.name,`middle`):(Y(`text`,{x:0,y:t.sub?2:15,"text-anchor":`middle`,class:`pa-plate-t`,text:t.name},s),t.sub&&Y(`text`,{x:0,y:34,"text-anchor":`middle`,class:`pa-plate-s`,text:t.sub},s));return Y(`title`,{text:t.name},s),s});return e=>{o.forEach((t,n)=>{let r=q(e,.35+n*.22,.85+n*.22);Z(t,r),du(t,`transform`,`scale(`+su(nu(.9,1,au(r)))+`)`)})}},Gu=(e,t)=>{let n=e.B,r=_u(t.seed||11),i=0,a=[],o=[10,214],s=null;t.bins.forEach((e,t)=>{Y(`rect`,{x:0,y:o[t],width:560,height:176,rx:14,class:`pa-none pa-line-st`,"stroke-width":1.5},n),t===0&&(s=Y(`rect`,{x:0,y:o[t],width:560,height:176,rx:14,class:`pa-none pa-`+e.tone+`-st`,"stroke-width":2.5},n)),i=Math.max(i,gu(Y(`text`,{x:22,y:o[t]+42,class:`pa-lb pa-b`,"font-size":21.5,text:e.title},n),250)),i=Math.max(i,gu(Y(`text`,{x:22,y:o[t]+68,class:`pa-lb2`,"font-size":18,text:e.sub},n),230))});let c=tu(Math.round(22+i+34),300,336),l=(536-c)/5,u=Y(`g`,null,n);if(t.tag){let e=Y(`rect`,{x:22,y:104,width:208,height:38,rx:19,class:`pa-soft-fast`},u),n=Y(`text`,{x:40,y:129.5,class:`pa-lb pa-b`,"font-size":18,text:t.tag},u);e.setAttribute(`width`,String(Math.round(gu(n,172)+36)))}let d=t.n||24,f=[];for(let e=0;e<d;e++)f.push(e);for(let e=d-1;e>0;e--){let t=Math.floor(r()*(e+1)),n=f[e];f[e]=f[t],f[t]=n}let p=e.P(`A`,t.hub[0],t.hub[1]),m=Y(`g`,{opacity:.16},e.A);for(let n=0;n<d;n++){let i=22+n%6*40,o=96+Math.floor(n/6)*64;Vu(m,i,o,.62);let s=f[n],u=s<d/2,h=s%(d/2),g=e.P(`B`,c+h%6*l,(u?10:214)+(h<6?58:122));a.push({el:Vu(e.X,0,0,.62),a:e.P(`A`,i,o),h:[p[0]+(r()-.5)*24,p[1]+(r()-.5)*24],b:g,col:`var(--`+t.bins[+!u].tone+`)`,s:.9+r()*2.3})}return e=>{a.forEach(t=>{let n=q(e,t.s,t.s+1.1),r,i,a;if(n<.46){let e=iu(n/.46);r=nu(t.a[0],t.h[0],e),i=nu(t.a[1],t.h[1],e),a=nu(.62,.3,e)}else{let e=ru((n-.46)/.54);r=nu(t.h[0],t.b[0],e),i=nu(t.h[1],t.b[1],e),a=nu(.3,.62,e)}fu(t.el,r,i,a),mu(t.el,hu(t.col,`var(--ghost)`,q(n,.4,.6)))}),s&&Z(s,q(e,6,6.6)),Z(u,q(e,6.3,6.9))}},Ku=`M0 0L-14 18M0 0L14 18M-14 18L-21 36M-14 18L-7 36M14 18L7 36M14 18L21 36`,qu=[[0,0],[-14,18],[14,18],[-21,36],[-7,36],[7,36],[21,36]],Ju=[[-58,-84],[8,-104],[70,-66],[-30,-12],[44,-2]];function Yu(e,t,n,r,i){return Y(`path`,{d:`M-9 -5L0 0L-9 5`,transform:`translate(`+t+` `+n+`) rotate(`+r+`)`,class:`pa-ln `+i},e)}var Xu=(e,t)=>{let n=Y(`g`,{transform:`translate(`+t.cx+` `+t.cy+`)`},e.g),r=e=>{let t=Y(`g`,{class:e},n);return Ju.forEach(e=>{let n=Y(`g`,{transform:`translate(`+e[0]+` `+e[1]+`) scale(1.5)`},t);Y(`path`,{d:Ku,class:`pa-tree-e`},n),qu.forEach((e,t)=>{Y(`circle`,{cx:e[0],cy:e[1],r:t<3?4.2:3.6,class:`pa-tree-n`},n)})}),t};r(`pa-tree-base`);let i=r(`pa-tree-hot`);Z(i,0),Y(`text`,{x:t.cx,y:t.cy+116,"text-anchor":`middle`,class:`pa-lb pa-b`,"font-size":21,text:t.label},e.g),t.sub&&Y(`text`,{x:t.cx,y:t.cy+141,"text-anchor":`middle`,class:`pa-lb2`,"font-size":18,text:t.sub},e.g);let a=t.pulses||[];return e=>{let n=0;a.forEach(t=>{n=Math.max(n,ou(q(e,t,t+.55)))}),t.lit?Z(i,e<t.lit[0]?0:nu(1,.45,q(e,t.lit[1],t.lit[1]+.6))):Z(i,a.length&&e>=a[0]?nu(.4,1,n):0)}},Zu=(e,t)=>{let n=e.g,r=t.hub||[334,148],i=t.items.map((e,i)=>{let a=34+i*47,o=`M266 `+(a+20)+`C304 `+(a+20)+` `+(r[0]-34)+` `+r[1]+` `+r[0]+` `+r[1];t.wires!==!1&&Y(`path`,{d:o,class:`pa-ln pa-line-st`,"stroke-width":1},n);let s=Y(`path`,{d:t.wires===!1?`M0 0`:o,class:`pa-ln pa-accent-st`,"stroke-width":2,pathLength:1,"stroke-dasharray":`1 1`,"stroke-dashoffset":1},n);Y(`rect`,{x:0,y:a,width:266,height:40,rx:9,class:`pa-chip`},n);let c=Y(`rect`,{x:0,y:a,width:266,height:40,rx:9,class:`pa-chip-on`},n),l=Y(`rect`,{x:7,y:a+7,width:36,height:26,rx:7,class:e.group===`b`?`pa-bdg-b`:`pa-bdg-a`},n);return{on:c,hot:s,num:Y(`text`,{x:25,y:a+25.5,"text-anchor":`middle`,class:`pa-lb pa-b`,"font-size":15.5,text:e.num},n),lab:Y(`text`,{x:54,y:a+26.5,class:`pa-lb`,"font-size":19,text:e.label},n),dot:l}}),a=0;i.forEach(e=>{a=Math.max(a,gu(e.lab,190))}),a>198&&i.forEach(e=>{e.lab.setAttribute(`font-size`,String(J(3762/a)))});let o=34+t.items.length*47+22;Y(`rect`,{x:0,y:o-14,width:16,height:16,rx:5,class:`pa-bdg-a`},n);let s=Y(`text`,{x:24,y:o,class:`pa-lb2`,"font-size":17,text:t.groups.a},n),c=Math.round(24+gu(s,160)+22);t.groups.b&&(Y(`rect`,{x:c,y:o-14,width:16,height:16,rx:5,class:`pa-bdg-b`},n),Y(`text`,{x:c+24,y:o,class:`pa-lb2`,"font-size":17,text:t.groups.b},n));let l=t.start||1,u=t.step||.95;return e=>{i.forEach((t,n)=>{let r=l+n*u,i=q(e,r,r+.28);Z(t.on,i),Z(t.dot,nu(.4,1,i)),Z(t.lab,nu(.6,1,i)),Z(t.num,nu(.6,1,i)),du(t.hot,`stroke-dashoffset`,su(1-ru(q(e,r+.1,r+.45)))),Z(t.hot,nu(1,.4,q(e,r+.7,r+1.3))*+(i>0))})}},Qu=(e,t)=>{let n=e.portrait&&t.fromP?t.fromP:t.from,r=e.portrait&&t.toP?t.toP:t.to,i=e.P(n[0],n[1],n[2]),a=e.P(r[0],r[1],r[2]),o=Y(`g`,null,e.X);return Y(`path`,{d:`M`+i[0]+` `+i[1]+`L`+a[0]+` `+a[1],class:`pa-ln pa-ink3-st`,"stroke-width":1.5},o),Yu(o,a[0],a[1],Math.atan2(a[1]-i[1],a[0]-i[0])*180/Math.PI,`pa-ink3-st`),e=>{Z(o,q(e,0,.5))}},$u=(e,t)=>{let n=t.trees.map(t=>{let n=Y(`g`,null,e.g),r=Y(`g`,{transform:`translate(`+t.x+` 150) scale(1.15)`,class:`pa-tree-hot`},n);return Y(`path`,{d:Ku,class:`pa-tree-e`},r),qu.forEach((e,t)=>{Y(`circle`,{cx:e[0],cy:e[1],r:t<3?4.2:3.6,class:`pa-tree-n`},r)}),X(n,t.x,228,`pa-lb2`,15,t.label,`middle`),{g:n,x:t.x}}),r=t.ops.map(t=>X(e.g,t.x,183,`pa-lb pa-b`,24,t.text,`middle`)),i=Y(`g`,null,e.g);t.out.forEach((e,t)=>{X(i,470,172+t*24,`pa-lb pa-b`,19,e)});let a=t.step??.5;return e=>{n.forEach((t,n)=>{let r=q(e,n*a,n*a+.4),i=su(Math.max(nu(.7,1,au(r)),.001));Z(t.g,r),du(t.g,`transform`,`translate(`+t.x+` 180) scale(`+i+`) translate(`+-t.x+` -180)`)}),r.forEach((t,n)=>{Z(t,q(e,.3+n*a,.6+n*a))});let o=(t.trees.length-1)*a;Z(i,q(e,o+.7,o+1.1))}};function ed(e){let t=e.art.brain;if(!t)throw Error(`this paper has no brain drawing`);let n=t,r=n.bbox,i=(r[0]+r[2])/2,a=(r[1]+r[3])/2,o=r[2]-r[0],s=e.uid+`tissue`;e.defs.querySelector(`#`+s)||Y(`path`,{id:s,d:n.tissue,"fill-rule":`evenodd`},e.defs);function c(e,t){let r=n.vents[e],i=e===0?r.bbox[2]-2:r.bbox[0]+2,a=r.cy;return`translate(`+i+` `+a+`) scale(`+su(t)+`) translate(`+-i+` `+-a+`)`}function l(e){let t=Y(`g`,null,e);Y(`use`,{href:`#`+s,class:`pa-tissue`},t);let r=n.vents.map(e=>Y(`path`,{d:e.d,class:`pa-vent`},t)),l;return{g:t,v:r,vent(e){e=su(e),l!==e&&(l=e,n.vents.forEach((t,n)=>{r[n].setAttribute(`transform`,c(n,e))}))},place(e,n,r){let s=r/o;du(t,`transform`,`translate(`+J(e-i*s)+` `+J(n-a*s)+`) scale(`+Math.round(s*1e4)/1e4+`)`)}}}function u(e,t,n,r,i){let a=Y(`g`,{transform:`translate(`+t+` `+n+`)`},e);Y(`rect`,{x:0,y:0,width:r,height:r,rx:Math.round(r*.1),class:`pa-tile`},a);let o=l(a);return o.place(r/2,r/2+r*.012,r*.86),o.vent(i),{g:a,b:o}}return{brain:l,tile:u,ventTf:c,BB:r,BCX:i,BCY:a,BWID:o,D:n}}var td=(e,t)=>{let n=ed(e),r=t.size||84,i=t.gap||104,a=[];return t.scales.forEach((o,s)=>{a.push(n.tile(e.g,s*i,t.y,r,o).g),s<t.scales.length-1&&a.push(Y(`path`,{d:`M`+(s*i+r+6)+` `+(t.y+r*.43)+`l8 6l-8 6`,class:`pa-ln pa-ink3-st`},e.g))}),e=>{a.forEach((t,n)=>{Z(t,q(e,n*.16,.3+n*.16))})}},nd=(e,t)=>{let n=ed(e),r=e.g;Y(`text`,{x:98,y:40,"text-anchor":`middle`,class:`pa-lb2`,"font-size":16.5,text:t.cols[0]},r),Y(`text`,{x:214,y:40,"text-anchor":`middle`,class:`pa-lb2`,"font-size":16.5,text:t.cols[1]},r);let i=t.rows.map((e,i)=>{let a=48+i*118,o=Y(`g`,null,r),s=e.value/t.max*58;return Y(`circle`,{cx:17,cy:a+52,r:15,class:`pa-bg2 pa-line-st`},o),Y(`text`,{x:17,y:a+58.5,"text-anchor":`middle`,class:`pa-lb2 pa-b`,text:e.tag},o),n.tile(o,46,a,104,e.scales[0]),n.tile(o,162,a,104,e.scales[1]),Y(`path`,{d:`M296 `+(a+18)+`V`+(a+84)+`H388`,class:`pa-axis`},o),Y(`path`,{d:`M296 `+(a+84)+`L384 `+J(a+84-s),class:`pa-ln pa-ink-st`,"stroke-width":2.5},o),Y(`text`,{x:560,y:a+58,"text-anchor":`end`,class:`pa-xb`,"font-size":46,text:cu(e.value)},o),Y(`text`,{x:560,y:a+84,"text-anchor":`end`,class:`pa-lb2`,"font-size":17,text:t.unit},o),o});return e=>{i.forEach((t,n)=>{Z(t,n===1?1:q(e,.7+(n?.4:0),1.2+(n?.4:0)))})}},rd=(e,t)=>{let n=ed(e),r=e.A,i=e.B,a=e.X,o=t.volumes,s=o.length,c=(s-1)/2,l=o.reduce((e,t)=>e+t,0)/s,u=0,d=0;o.forEach((e,t)=>{u+=(t-c)*(e-l),d+=(t-c)*(t-c)});let f=u/d,p=l-f*c,m=t.scales,h=t.times,g=[[92,28],[288,28],[92,220],[288,220]],_=Y(`g`,null,r);Y(`text`,{x:0,y:16,class:`pa-hd`,text:t.titleA},_);let v=[],y=[],b=[],x=[];for(let e=0;e<4;e++)v.push(Y(`rect`,{x:g[e][0],y:g[e][1],width:180,height:180,rx:16,class:`pa-tile`},_)),y.push(Y(`text`,{x:g[e][0]+14,y:g[e][1]+27,class:`pa-tk`,text:h[e]},_));for(let e=1;e<4;e++){let t=n.brain(_);t.place(g[e][0]+90,g[e][1]+105,138),t.vent(m[e]),b.push(t)}let S=e.stageCentre,C=e.portrait?400:356,w=C/n.BWID,T=S[1]-(n.BCY-n.BB[1])*w,E=S[1]+(134-n.BCY)*w,D=n.brain(a),O=n.D.vents.map(e=>Y(`path`,{d:e.d,class:`pa-none pa-fluid-st pa-thin`},D.g)),k=[S[0],S[1],C],A=e.P(`A`,g[0][0]+90,g[0][1]+105).concat([138]),j=Y(`g`,null,a);Y(`text`,{x:S[0],y:J(T-24),"text-anchor":`middle`,class:`pa-lb pa-b`,"font-size":23,text:t.hero},j),Y(`path`,{d:`M`+S[0]+` `+J(T-14)+`V`+J(E-8),class:`pa-ln pa-ink2-st`,"stroke-width":1.5},j),Y(`circle`,{cx:S[0],cy:J(E-6),r:4,class:`pa-fluid pa-ring`},j);let M=t.yMin,N=t.yMax,P=e=>132+e*124,F=e=>336-(e-M)/(N-M)*288,I=Y(`g`,null,i),L=Y(`g`,null,I);Y(`text`,{x:0,y:16,class:`pa-hd`,text:t.titleB},L),t.yTicks.forEach(e=>{Y(`path`,{d:`M88 `+J(F(e))+`H548`,class:`pa-grid`},L),Y(`text`,{x:78,y:J(F(e)+6),"text-anchor":`end`,class:`pa-tk-n`,text:cu(e)},L)}),Y(`path`,{d:`M88 336H548`,class:`pa-axis`},L),h.forEach((e,t)=>{Y(`text`,{x:P(t),y:366,"text-anchor":`middle`,class:`pa-tk`,text:e},L)});let R=e=>F(p+f*(e-132)/124),ee=Y(`line`,{x1:104,y1:J(R(104)),x2:104,y2:J(R(104)),class:`pa-ln pa-ink-st`,"stroke-width":2.5},I),te=Y(`g`,null,I),ne=R(P(1)),re=R(P(2));Y(`path`,{d:`M`+P(1)+` `+J(ne)+`H`+P(2)+`V`+J(re),class:`pa-ln pa-accent-st`,"stroke-width":2},te),Y(`text`,{x:(P(1)+P(2))/2,y:J(ne+24),"text-anchor":`middle`,class:`pa-lb2 pa-halo`,text:t.run},te),Y(`text`,{x:P(2)+12,y:J((ne+re)/2+7),class:`pa-lb2 pa-halo`,text:`+`+cu(f)+` `+t.riseUnit},te);for(let e=0;e<4;e++)x.push(Y(`circle`,{cx:P(e),cy:J(F(o[e])),r:6.5,class:`pa-fluid pa-ring`},I));let ie=Y(`g`,null,i);Y(`text`,{x:104,y:86,class:`pa-lb2 pa-halo`,text:t.readout},ie);let z=Y(`text`,{x:102,y:144,class:`pa-xb pa-halo`,"font-size":62,text:`0`},ie);Y(`text`,{x:104,y:173,class:`pa-lb2 pa-halo`,"font-size":22,text:t.unit},ie);let ae=[0,1,2,3].map(t=>({a:e.P(`A`,g[t][0]+90,g[t][1]+94),b:e.P(`B`,P(t),F(o[t])),el:Y(`circle`,{r:6.5,class:`pa-fluid pa-ring`},a)}));return t=>{let r=[3.5,4.45,5.4,6.35],i=iu(q(t,2.6,3.5)),a=nu(1,.5,q(t,10.4,11));D.place(nu(k[0],A[0],i),nu(k[1],A[1],i),nu(k[2],A[2],i)),D.vent(m[0]);let o=(t-.95)/.8,s=o-Math.floor(o),c=o>=0&&o<2;O.forEach((e,t)=>{Z(e,c?.8*(1-s):0),c&&du(e,`transform`,n.ventTf(t,nu(1.25,1.8,ru(s))))}),Z(D.g,a),Z(_,a),Z(I,a),Z(j,Math.min(q(t,.45,.85),1-q(t,2.3,2.6))),Z(v[0],q(t,3,3.5)),Z(y[0],q(t,3.2,3.6));for(let e=1;e<4;e++){let n=q(t,r[e]-.42,r[e]-.02);Z(v[e],n),Z(b[e-1].g,n),Z(y[e],n)}Z(L,q(t,2.7,3.3));for(let n=0;n<4;n++){let i=q(t,r[n],r[n]+.62),a=ae[n],o=iu(i),s=nu(a.a[0],a.b[0],o),c=nu(a.a[1],a.b[1],o),l=Math.sin(Math.PI*o)*46,u=c;e.portrait?s+=l:u-=l,du(a.el,`cx`,J(s)),du(a.el,`cy`,J(u)),Z(a.el,+(i>0&&i<1)),Z(x[n],+(i>=1))}let l=iu(q(t,7.15,8.1)),u=nu(104,536,l);du(ee,`x2`,J(u)),du(ee,`y2`,J(R(u))),Z(ee,+(l>0)),Z(te,q(t,8.2,8.7)),Z(ie,q(t,8.9,9.3)),pu(z,cu(f*ru(q(t,9,10))))}},id=(e,t)=>{let n=e.g,r=!!t.y.log,i=r?Math.log10(t.y.min):t.y.min,a=r?Math.log10(t.y.max):t.y.max,o=e=>78+(e-t.x.min)/(t.x.max-t.x.min)*470,s=e=>{let t=334-((r?Math.log10(e):e)-i)/(a-i)*300;return Number.isFinite(t)?tu(t,34,334):334},c=t.y.ticks[t.y.ticks.length-1],l=t.y.ticks[0],u=Y(`g`,null,n);t.y.ticks.forEach(e=>{Y(`path`,{d:`M78 `+J(s(e))+`H548`,class:`pa-grid`},u),Y(`text`,{x:68,y:J(s(e)+6),"text-anchor":`end`,class:`pa-tk-n`,text:cu(e)},u)}),Y(`path`,{d:`M78 34V334H548`,class:`pa-axis`},u),t.x.ticks.forEach(e=>{Y(`text`,{x:J(o(e)),y:360,"text-anchor":`middle`,class:`pa-tk-n`,text:(e<0?`−`:``)+Math.abs(e)},u)}),Y(`text`,{x:313,y:388,"text-anchor":`middle`,class:`pa-tk`,text:t.x.label},u);let d=t.band?Y(`rect`,{x:J(o(t.band[0])),y:J(s(c)),width:J(o(t.band[1])-o(t.band[0])),height:J(s(l)-s(c)),rx:6,class:`pa-soft-accent`},n):null,f=Y(`g`,null,n),p=t.dotsAt||[1.9,3.4],m=t.dots.map((e,n)=>({el:Y(`circle`,{cx:J(o(e[0])),cy:J(s(e[1])),r:0,class:`pa-s`+e[2]+` pa-ring1`},f),inb:!t.band||e[0]>=t.band[0]&&e[0]<=t.band[1],d:p[0]+n/t.dots.length*(p[1]-p[0])})),h=Y(`g`,null,n);t.legend&&(Y(`text`,{x:404,y:322,"text-anchor":`end`,class:`pa-lb2 pa-halo`,"font-size":17,text:t.legend.title},h),t.legend.stages.forEach((e,t)=>{Y(`circle`,{cx:420+t*35,cy:316,r:5,class:`pa-s`+e},h),Y(`text`,{x:430+t*35,y:322,class:`pa-lb2 pa-halo`,"font-size":17,text:String(e)},h)}));let g=(t.marks||[]).map(e=>{let r=Y(`g`,null,n),i=o(e.x),a=s(e.y);return Y(`circle`,{cx:J(i),cy:J(a),r:8,class:`pa-s`+e.stage+` pa-ln pa-ink-st`},r),Y(`text`,{x:J((t.band?o(t.band[0]):i)-9),y:J(a+7),"text-anchor":`end`,class:`pa-lb pa-b pa-halo`,text:e.tag},r),r}),_=Y(`g`,null,n);if(t.bracket&&t.band){let e=J(o(t.band[1])+12),n=J(s(c)),r=J(s(l));Y(`path`,{d:`M`+(e-6)+` `+n+`H`+e+`V`+r+`H`+(e-6),class:`pa-ln pa-ink-st`,"stroke-width":1.5},_),Y(`text`,{x:e+12,y:258,class:`pa-lb pa-b pa-halo`,"font-size":24,text:t.bracket.text},_),Y(`text`,{x:e+12,y:282,class:`pa-lb2 pa-halo`,"font-size":18,text:t.bracket.sub},_)}let v=p[1]+.3;return e=>{Z(u,q(e,p[0]-.4,p[0]+.1)),Z(h,q(e,p[0]+.5,p[0]+1));let n=t.band?q(e,v+1.9,v+2.7):0;m.forEach(t=>{let r=q(e,t.d,t.d+.28);du(t.el,`r`,J(4.6*au(r))),Z(t.el,r<=0?0:t.inb?.92:nu(.82,.2,n))}),g.forEach((t,n)=>{Z(t,q(e,v+.5+n*.3,v+.9+n*.3))}),d&&Z(d,q(e,v+1.8,v+2.5)),Z(_,q(e,v+2.8,v+3.4))}},ad={warn:{line:`pa-warn-st`,w:1.5,mark:`sq`,mc:`pa-warnf`},accent:{line:`pa-accent-st`,w:2.5,mark:`dot`,mc:`pa-accent`,r:5},train:{line:`pa-ink3-st`,w:2,dash:`5 4`,mark:`dot`,mc:`pa-ink3f`,r:3.6}},od=(e,t)=>{let n=e.g,r=t.rungs.length,i=r>1?438/(r-1):0,a=e=>98+e*i,o=e=>tu(314-(e-t.y.min)/(t.y.max-t.y.min)*244,70,314),s=Y(`g`,null,n);if(t.region){let e=(a(t.region.from-1)+a(t.region.from))/2;Y(`rect`,{x:J(e),y:70,width:J(552-e),height:244,class:`pa-soft-fluid`,"fill-opacity":.42},s),Y(`path`,{d:`M`+J(e+19)+` 346v6H552v-6`,class:`pa-ln pa-line-st`,"stroke-width":1.5},s),Y(`text`,{x:J((e+552)/2),y:377,"text-anchor":`middle`,class:`pa-lb2`,"font-size":17,text:t.region.label},s),t.base&&(Y(`path`,{d:`M80 346v6H`+J(e-19)+`v-6`,class:`pa-ln pa-line-st`,"stroke-width":1.5},n),Y(`text`,{x:J((80+e-19)/2),y:377,"text-anchor":`middle`,class:`pa-lb2`,"font-size":17,text:t.base.label},n))}t.y.ticks.forEach(e=>{Y(`path`,{d:`M64 `+J(o(e))+`H552`,class:e===t.y.min?`pa-axis`:`pa-grid`},n),Y(`text`,{x:54,y:J(o(e)+6),"text-anchor":`end`,class:`pa-tk-n`,text:String(e)},n)}),t.rungs.forEach((e,t)=>{Y(`text`,{x:J(a(t)),y:339,"text-anchor":`middle`,class:`pa-tk pa-b`,text:e},n)});let c=1,l=t.series.map(e=>{let t=ad[e.style];t.mark===`sq`?Y(`rect`,{x:c,y:36,width:10,height:10,class:t.mc},n):(Y(`path`,{d:`M`+c+` 41h26`,class:`pa-ln `+t.line,"stroke-width":t.w,"stroke-dasharray":t.dash},n),Y(`circle`,{cx:c+13,cy:41,r:t.r,class:t.mc},n));let r=Y(`text`,{x:c+(t.mark===`sq`?18:35),y:47,class:`pa-lb2`,"font-size":17.5,text:e.name},n);c+=(t.mark===`sq`?18:35)+gu(r,120)+30;let i=Y(`path`,{class:`pa-ln `+t.line,"stroke-width":t.w},n);t.dash&&i.setAttribute(`stroke-dasharray`,t.dash);let s=e.values.map((e,r)=>t.mark===`sq`?Y(`rect`,{x:J(a(r)-5.5),y:J(o(e)-5.5),width:11,height:11,class:t.mc+` pa-ring`},n):Y(`circle`,{cx:J(a(r)),cy:J(o(e)),r:t.r,class:t.mc+` pa-ring`},n));return{v:e.values,path:i,m:s}}),u=Y(`g`,null,n);if(t.drop){let e=t.series[t.drop.series].values,n=J(o(e[t.drop.from])),r=J(o(e[t.drop.to])),i=J(a(t.drop.to));Y(`path`,{d:`M`+J(a(t.drop.from)+10)+` `+n+`H`+i,class:`pa-ln pa-ink2-st`,"stroke-width":1.25,"stroke-dasharray":`2 5`},u),Y(`path`,{d:`M`+i+` `+n+`V`+(r-14),class:`pa-ln pa-ink-st`,"stroke-width":1.75},u),Yu(u,i,r-12,90,`pa-ink-st`);let s=i>470;Y(`text`,{x:s?i-12:i+10,y:J((n+r)/2+9),"text-anchor":s?`end`:`start`,class:`pa-lb pa-xb pa-halo`,"font-size":25,text:t.drop.text},u)}let d=t.start??1,f=t.step??.95;return e=>{l.forEach(t=>{let n=``;for(let i=0;i<r;i++){let r=d+i*f+.42;if(Z(t.m[i],q(e,r+.2,r+.42)),i===0){n=`M`+J(a(0))+` `+J(o(t.v[0]));continue}let s=iu(q(e,r-.05,r+.3));s>0&&(n+=`L`+J(nu(a(i-1),a(i),s))+` `+J(nu(o(t.v[i-1]),o(t.v[i]),s)))}du(t.path,`d`,n),Z(t.path,+(e>d+.5))}),t.region&&Z(s,q(e,d+t.region.from*f-.1,d+t.region.from*f+.5)),Z(u,q(e,d+r*f+.6,d+r*f+1.3))}},sd=(e,t)=>{let n=e=>J(56+(e-t.min)/(t.max-t.min)*316),r=e=>J(350-(e-t.min)/(t.max-t.min)*316),i=Y(`g`,null,e.g);t.ticks.forEach(e=>{Y(`path`,{d:`M56 `+r(e)+`H372`,class:`pa-grid`},i),Y(`path`,{d:`M`+n(e)+` 34V350`,class:`pa-grid`},i),X(i,46,J(r(e)+6),`pa-tk-n`,16,String(e),`end`),X(i,n(e),372,`pa-tk-n`,16,String(e),`middle`)}),Y(`path`,{d:`M56 34V350H372`,class:`pa-axis`},i),X(i,214,396,`pa-tk`,16,t.xLabel,`middle`),X(i,0,0,`pa-tk`,16,t.yLabel,`middle`).setAttribute(`transform`,`translate(12 192) rotate(-90)`);let a=Y(`g`,null,e.g),o=t.dots.slice().sort((e,t)=>e[0]-t[0]),s=o.map((e,t)=>({el:Y(`circle`,{cx:n(e[0]),cy:r(e[1]),r:2.7,class:`pa-accent`},a),k:t/o.length})),c=Y(`g`,null,e.g);Y(`path`,{d:`M`+n(t.min)+` `+r(t.min)+`L`+n(t.max)+` `+r(t.max),class:`pa-ln pa-ink-st pa-dash`,"stroke-width":1.75},c);let l=t.min+(t.max-t.min)*.786;X(c,0,0,`pa-lb2 pa-halo`,15,t.identity,`middle`).setAttribute(`transform`,`translate(`+n(l)+` `+J(r(l)-10)+`) rotate(-45)`);let u=t.sweep||[1.2,5.8],d=t.identityAt??u[1]+.2;return e=>{Z(i,q(e,0,.5));let t=q(e,u[0],u[1]);s.forEach(e=>{Z(e.el,.62*q(t,e.k-.02,e.k+.02))}),Z(c,q(e,d,d+.5))}},cd=(e,t)=>{let n=t.rows.map((n,r)=>{let i=134+r*32,a=Y(`g`,null,e.g),o=n.n/t.max*330;return X(a,0,i+6,`pa-lb2`,17,n.label),{g:a,bar:Y(`rect`,{x:128,y:i-7,width:J(o),height:14,rx:3,class:`pa-ctrlf`},a),num:X(a,J(136+o),i+6,`pa-lb`,17,cu(n.n))}}),r=t.step??.22;return e=>{n.forEach((t,n)=>{let i=n*r;Z(t.g,q(e,i,i+.2)),du(t.bar,`transform`,`translate(128 0) scale(`+su(Math.max(ru(q(e,i,i+.6)),.001))+` 1) translate(-128 0)`),Z(t.num,q(e,i+.4,i+.7))})}},ld={track:!0,trackon:!0,predict:!0},ud=[`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`];function dd(e){return{train:ud.map(t=>e[t].fig2.train_mae),cv:ud.map(t=>e[t].fig2.val_mae),test:ud.map(t=>e[t].fig2.test_mae)}}function fd(e){return Math.round((1-e.cv[6]/e.cv[0])*100)}function pd(e){if(!e)return[];let t=[];for(let n of e.rows)n.stage!==null&&t.push([n.pin,n.observed,n.stage]);return t}function md(e){let{t,ladder:n}=e,r=[t(`prognostic.paper.l.f1`),t(`prognostic.paper.l.f2`),t(`prognostic.paper.l.f3`),t(`prognostic.paper.l.f4`),t(`prognostic.paper.l.f5`),t(`prognostic.paper.l.f6`),t(`prognostic.paper.l.f7`)],i=n?dd(n):{train:[],cv:[],test:[]},a=n?fd(i):`…`,o=[7,15,2,11,18,4,0,13,9,16,19,6,12,1,8,3,17,10,14,5].map(e=>((e+.6)/20)**1.55),s=.95,c=[...ud];return{id:`prognostic`,summary:t(`prognostic.paper.summary`),citeShort:t(`prognostic.paper.citeshort`),cite:t(`prognostic.paper.source`,{cite:t(`prognostic.paper.cite`)}),credits:t(`prognostic.paper.credits`),art:n?e.art:null,table:n?{caption:t(`prognostic.paper.table.caption`),head:[t(`prognostic.paper.table.model`),t(`prognostic.paper.table.adds`),t(`prognostic.paper.table.train`),t(`prognostic.paper.table.cv`),t(`prognostic.paper.table.test`)],rows:ud.map((e,t)=>[e,r[t],i.train[t].toFixed(0),i.cv[t].toFixed(0),i.test[t].toFixed(0)])}:void 0,scenes:[{key:`aim`,label:t(`prognostic.paper.1.label`),dur:8,note:t(`prognostic.paper.1.note`),head:t(`prognostic.paper.1.head`),sub:t(`prognostic.paper.1.sub`),blocks:[Q(Nu,{text:t(`prognostic.paper.l.carriers`)}),Q(Hu,{values:o,grow:[.8,3.7]}),Q(Nu,{text:t(`prognostic.paper.l.change`)},{panel:`B`}),Q(Uu,{values:o,from:t(`prognostic.paper.l.baseline`),to:t(`prognostic.paper.l.years3`),top:t(`prognostic.paper.l.fastest`),bottom:t(`prognostic.paper.l.slowest`),grow:[.8,3.7]},{panel:`B`})]},{key:`data`,label:t(`prognostic.paper.2.label`),dur:7,head:t(`prognostic.paper.2.head`),sub:t(`prognostic.paper.2.sub`),blocks:[Q(Nu,{text:t(`prognostic.paper.l.studies`)}),Q(Wu,{studies:[{key:`track`,name:t(`prognostic.paper.l.study.track`),logo:ld.track},{key:`trackon`,name:t(`prognostic.paper.l.study.trackon`),logo:ld.trackon},{key:`predict`,name:t(`prognostic.paper.l.study.predict`),logo:ld.predict},{key:`image`,name:t(`prognostic.paper.l.study.image`),logo:!1}]}),Q(Fu,{x:-5,y:120,value:451,size:112,lines:[t(`prognostic.paper.l.expansion`),t(`prognostic.paper.l.followed`)],count:[.9,2.1]},{panel:`B`}),Q(Iu,{y:150,parts:[{n:297,label:t(`prognostic.paper.l.premanifest`),tone:`accent`},{n:154,label:t(`prognostic.paper.l.diagnosed`),tone:`ink3`}]},{panel:`B`,at:1.9}),Q(td,{y:232,scales:[1.05,1.18,1.31,1.44]},{panel:`B`,at:3}),Q(Pu,{items:[{x:0,y:350,text:t(`prognostic.paper.l.scans`),at:3.9},{x:0,y:378,text:t(`prognostic.paper.l.measures`),quiet:!0,at:4.1}]},{panel:`B`})]},{key:`target`,label:t(`prognostic.paper.3.label`),dur:12.4,note:t(`prognostic.paper.3.note`),head:t(`prognostic.paper.3.head`),sub:t(`prognostic.paper.3.sub`),blocks:[Q(rd,{titleA:t(`prognostic.paper.l.onescans`),titleB:t(`prognostic.paper.l.volume`),hero:t(`prognostic.paper.l.ventricles`),times:[t(`prognostic.paper.l.baseline`),t(`prognostic.paper.l.year1`),t(`prognostic.paper.l.year2`),t(`prognostic.paper.l.year3`)],scales:[1.25,1.47,1.68,1.9],volumes:[14e3,15300,16150,17450],yMin:13500,yMax:18e3,yTicks:[14e3,15e3,16e3,17e3,18e3],run:t(`prognostic.paper.l.oneyear`),riseUnit:t(`prognostic.paper.l.mm3`),readout:t(`prognostic.paper.l.slope`),unit:t(`prognostic.paper.l.peryear`)},{panel:`AB`})]},{key:`spread`,label:t(`prognostic.paper.4.label`),dur:10.4,note:e.castFailed?t(`prognostic.paper.4.nocast`):t(`prognostic.paper.4.note`),head:t(`prognostic.paper.4.head`),sub:t(`prognostic.paper.4.sub`),blocks:[Q(Nu,{text:t(`prognostic.paper.l.three`)}),Q(nd,{cols:[t(`prognostic.paper.l.baseline`),t(`prognostic.paper.l.year3`)],max:2900,unit:t(`prognostic.paper.l.peryear`),rows:[{tag:`A`,scales:[1.25,1.31],value:180},{tag:`B`,scales:[1.25,1.9],value:1120},{tag:`C`,scales:[1.25,2.38],value:2900}]}),Q(Nu,{text:t(`prognostic.paper.l.ratelog`)},{panel:`B`}),Q(id,{dots:pd(e.cast),x:{min:-2,max:4.5,ticks:[-2,0,2,4],label:t(`prognostic.paper.l.pin`)},y:{min:80,max:6e3,ticks:[100,300,1e3,3e3],log:!0},band:[-.3,.3],marks:[{tag:`A`,x:-.12,y:180,stage:1},{tag:`B`,x:.05,y:1120,stage:1},{tag:`C`,x:.14,y:2900,stage:2}],legend:{title:t(`prognostic.paper.l.stage`),stages:[0,1,2,3]},bracket:{text:t(`prognostic.paper.l.range`),sub:t(`prognostic.paper.l.peryear`)},dotsAt:[1.9,3.4]},{panel:`B`})]},{key:`model`,label:t(`prognostic.paper.5.label`),dur:12.4,note:t(`prognostic.paper.5.note`),head:t(`prognostic.paper.5.head`),sub:t(`prognostic.paper.5.sub`,{drop:a}),blocks:[Q(Nu,{text:t(`prognostic.paper.l.features`)}),Q(Zu,{items:r.map((e,t)=>({num:ud[t],label:e,group:t>=3?`b`:`a`})),groups:{a:t(`prognostic.paper.l.trials`),b:t(`prognostic.paper.l.mri`)},start:1,step:s}),Q(Xu,{cx:424,cy:170,label:t(`prognostic.paper.l.forest`),sub:t(`prognostic.paper.l.trees`),pulses:r.map((e,t)=>1+t*s+.3)}),Q(Qu,{from:[`A`,536,148],to:[`B`,-6,148],fromP:[`A`,474,326],toP:[`B`,474,-8]},{panel:`X`,at:.4}),Q(Nu,{text:t(`prognostic.paper.l.error`)},{panel:`B`}),Q(od,{rungs:c,y:{min:400,max:800,ticks:[400,500,600,700,800]},start:1,step:s,series:[{name:t(`prognostic.paper.l.test`),values:i.test,style:`warn`},{name:t(`prognostic.paper.l.cv`),values:i.cv,style:`accent`},{name:t(`prognostic.paper.l.train`),values:i.train,style:`train`}],region:{from:3,label:t(`prognostic.paper.l.plusmri`)},base:{label:t(`prognostic.paper.l.base`)},drop:{from:0,to:6,series:1,text:`−`+a+`%`}},{panel:`B`})]},{key:`result`,label:t(`prognostic.paper.6.label`),dur:9.6,note:t(`prognostic.paper.6.note`),head:t(`prognostic.paper.6.head`),sub:t(`prognostic.paper.6.sub`),blocks:[Q(Nu,{text:t(`prognostic.paper.l.visit`)}),Q(Xu,{cx:424,cy:170,label:t(`prognostic.paper.l.classifier`),lit:[1,4.5]}),Q(Fu,{x:424,y:340,value:81,suffix:`%`,size:46,align:`middle`,below:!0,lines:[t(`prognostic.paper.l.accuracy`)],count:[4.7,5.6]}),Q(Gu,{hub:[424,148],tag:t(`prognostic.paper.l.prioritise`),bins:[{title:t(`prognostic.paper.l.fast`),sub:t(`prognostic.paper.l.above`),tone:`fast`},{title:t(`prognostic.paper.l.moderate`),sub:t(`prognostic.paper.l.below`),tone:`accent`}]},{panel:`AB`})]}]}}function hd(e,t=po,n=null){let[r,i]=(0,_.useState)(null),a=(0,_.useRef)(0);(0,_.useEffect)(()=>{if(!e)return;let n=++a.current;t(e).then(t=>{n===a.current&&i({model:e,cast:t,error:null})},t=>{n===a.current&&i({model:e,cast:null,error:t instanceof Error?t.message:String(t)})})},[e,t,n]);let o=r&&r.model===e?r:null;return{cast:o?.cast??null,error:o?.error??null}}function gd({loadCast:e=po}){let{model:t}=$o(),n=U(),{cast:r,error:i}=hd(`prognostic`,e,t.files),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(null);(0,_.useEffect)(()=>{let e=!0;return mi(()=>import(`./art-CsW8iL7N.js`).then(t=>{e&&o(t.ART)},t=>{e&&c(t instanceof Error?t.message:String(t))}),[]),()=>{e=!1}},[]);let d=t.files?.story.ladder??null,f=(0,_.useMemo)(()=>md({t:n,ladder:d,cast:r,castFailed:i!==null,art:a}),[n,d,r,i,a]),p=(0,_.useMemo)(()=>({title:n(`prognostic.paper.poster`),sub:n(`prognostic.paper.poster.sub`),corner:`top-right`}),[n]),m=s??(t.status===`error`&&!t.files?t.error:null)??l,h=m===null?null:n(`prognostic.paper.broken`,{detail:m});return(0,H.jsx)(`section`,{className:`wrap paper`,id:`watch`,"aria-label":n(`prognostic.paper.title`),tabIndex:-1,children:(0,H.jsx)(ju,{messageKey:`prognostic.paper.broken`,text:(0,H.jsx)(Mu,{script:f}),children:(0,H.jsx)(Au,{script:f,failed:h,start:`view`,startLine:.3,captions:`above`,captionLevel:2,poster:p,onError:u})})})}var _d=class extends _.Component{state={detail:null};static getDerivedStateFromError(e){return{detail:e instanceof Error?e.message:String(e)}}componentDidCatch(e,t){console.error(`the story failed to draw`,e,t.componentStack)}render(){return this.state.detail===null?this.props.children:(0,H.jsx)(`section`,{className:`story story-broken`,id:this.props.id??`story`,children:(0,H.jsx)(W,{k:this.props.brokenKey,as:`p`,className:`quiet story-failed`,vars:{detail:this.state.detail}})})}};function vd(){return typeof window.matchMedia!=`function`||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}var yd=7.4,bd=15,xd={lbl:{desk:15,phone:12},fast:{desk:15,phone:12},moderate:{desk:15,phone:12},small:{desk:12,phone:10},quiet:{desk:13,phone:10},count:{desk:10,phone:10}};function Sd(e,t){return yd*xd[e][t?`phone`:`desk`]/bd}function Cd(e,t,n){let r=Math.max(280,Math.round(e)),i=Math.max(240,Math.round(t)),a=r<560;return{W:r,H:i,narrow:a,mobile:n,L:a?76:80,R:a?20:120,T:44,B:50}}var wd=e=>Math.min(1,Math.max(0,e)),Td=(e,t,n)=>wd((e-t)/n),Ed=e=>e<.5?2*e*e:1-(-2*e+2)**2/2,Dd=-1;function Od(e){return e.startsWith(`stage-`)?`var(--s${e.slice(6)})`:`var(${e})`}var kd=4;function Ad(e,t,n){if(!e.cls||e.rotate||e.anchor===`end`&&e.maxW===void 0)return e.text;let r=e.anchor===`middle`?2*Math.min(e.x,t-e.x):e.anchor===`end`?e.x:t-e.x,i=Math.min(r,e.maxW??1/0)-kd,a=Sd(e.cls,n);if(e.text.length*a<=i)return e.text;let o=Math.floor(i/a)-1;return o>0?`${e.text.slice(0,o).trimEnd()}…`:`…`}var jd=()=>typeof window.requestAnimationFrame==`function`&&!vd();function Md(e,t,n){let r=new Map,i=(t,i,a)=>{let o=e?.get(t);r.set(t,o?{x:o.x+(i-o.x)*n,y:o.y+(a-o.y)*n}:{x:i,y:a})};for(let e of t.dots)i(e.id,e.x,e.y);return t.you&&i(Dd,t.you.x,t.you.y),r}function Nd(e){let t=e instanceof Element?e:null,n=t?.getAttribute(`data-i`);return{dot:n==null?-1:Number(n),node:t?.getAttribute(`data-node`)??null}}function Pd({layout:e,width:t,height:n,transitionKey:r,phone:i=!1,title:a,className:o,onHover:s,onPick:c}){let[l,u]=(0,_.useState)({key:r,layout:e,from:null,k:1});if(l.key!==r){let t=jd();u({key:r,layout:e,from:t?Md(l.from,l.layout,Ed(l.k)):null,k:+!t})}else l.layout!==e&&u({...l,layout:e});let d=l.from!==null,f=l.key;(0,_.useEffect)(()=>{if(!d)return;let e=0,t=-1,n=r=>{t<0&&(t=r);let i=Math.min(1,(r-t)/600);u(e=>e.key===f?i>=1?{...e,from:null,k:1}:{...e,k:i}:e),i<1&&(e=window.requestAnimationFrame(n))};return e=window.requestAnimationFrame(n),()=>window.cancelAnimationFrame(e)},[d,f]);let p=l.from?Md(l.from,e,Ed(l.k)):null,m=l.from?.25+.75*Ed(l.k):1,h=e.you?p?.get(Dd)??e.you:null;return(0,H.jsxs)(`svg`,{className:o?`story-svg ${o}`:`story-svg`,viewBox:`0 0 ${t} ${n}`,width:t,height:n,"aria-hidden":`true`,"data-tweening":l.from?`true`:`false`,onPointerMove:e=>{let t=Nd(e.target);s?.(t.dot,t.node)},onPointerLeave:()=>s?.(-1,null),onClick:e=>{let t=Nd(e.target);t.node&&c?.(t.node)},children:[a&&(0,H.jsx)(`title`,{children:a}),(0,H.jsxs)(`g`,{opacity:m,children:[(e.rects??[]).map((e,t)=>(0,H.jsx)(`rect`,{className:e.cls,x:e.x,y:e.y,width:Math.max(0,e.w),height:Math.max(0,e.h),rx:2,fill:Od(e.tone),fillOpacity:e.alpha??1,stroke:e.stroke?Od(e.stroke):void 0},`r${t}`)),(e.paths??[]).map((e,t)=>(0,H.jsx)(`path`,{className:e.cls,d:e.d,fill:e.fill?Od(e.tone):`none`,fillOpacity:e.fill?.18:void 0,stroke:Od(e.tone),strokeWidth:e.width??1.6},`p${t}`)),e.lines.map((e,t)=>(0,H.jsx)(`line`,{className:e.cls,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:Od(e.tone),strokeWidth:e.width??1,strokeOpacity:e.alpha??1,strokeDasharray:e.dash?`5 4`:void 0},`l${t}`))]}),e.dots.map(e=>{let t=p?.get(e.id)??e;return(0,H.jsx)(`circle`,{"data-i":e.id,cx:t.x,cy:t.y,r:e.r,fill:Od(e.tone),fillOpacity:e.dim?.18:.8,stroke:e.ring?`var(--ink)`:`var(--bg)`,strokeWidth:e.ring?1.5:1},e.id)}),(0,H.jsx)(`g`,{opacity:m,children:e.texts.map((e,n)=>(0,H.jsx)(`text`,{className:e.cls,x:e.x,y:e.y,textAnchor:e.anchor,transform:e.rotate?`rotate(-90 ${e.x} ${e.y})`:void 0,children:Ad(e,t,i)},`t${n}`))}),h&&(0,H.jsxs)(`g`,{className:`you`,children:[e.you?.trail&&(0,H.jsx)(`line`,{x1:e.you.trail.x2,y1:e.you.trail.y2,x2:h.x,y2:h.y,stroke:`var(--ink)`,strokeWidth:2}),(0,H.jsx)(`circle`,{cx:h.x,cy:h.y,r:7,fill:`var(--ink)`,stroke:`var(--bg)`,strokeWidth:2})]}),e.overlay&&(0,H.jsxs)(`g`,{className:`overlay`,pointerEvents:`none`,children:[e.overlay.rects.map((e,t)=>(0,H.jsx)(`rect`,{className:e.cls,x:e.x,y:e.y,width:Math.max(0,e.w),height:Math.max(0,e.h),rx:2,fill:Od(e.tone),fillOpacity:e.alpha??1,stroke:e.stroke?Od(e.stroke):void 0},`or${t}`)),e.overlay.texts.map((e,n)=>(0,H.jsx)(`text`,{className:e.cls,x:e.x,y:e.y,textAnchor:e.anchor,children:Ad(e,t,i)},`ot${n}`))]}),(e.hit??[]).map(e=>(0,H.jsx)(`rect`,{className:`hit`,"data-node":e.id,x:e.x,y:e.y,width:e.w,height:e.h,fill:`none`,pointerEvents:`all`},e.id))]})}var Fd=e=>e.length?e.reduce((e,t)=>e+t,0)/e.length:0,Id=e=>Math.round(e*10)/10;function Ld(e,t,n){let r=[],i=[];for(let a of e)(a.values[t]<=n?r:i).push(a.target);let a=e=>{if(e.length<2)return 0;let t=Fd(e);return e.reduce((e,n)=>e+(n-t)*(n-t),0)};return{e:a(r)+a(i),mL:Fd(r),mR:Fd(i),nL:r.length,nR:i.length}}function Rd(e,t,n,r){let i=null;for(let a=0;a<=40;a++){let o=n+(r-n)*a/40,s=Ld(e,t,o);s.nL>=12&&s.nR>=12&&(!i||s.e<i.e)&&(i={t:o,e:s.e})}return i}function zd(e,t){return{kind:`leaf`,id:t,value:Math.round(Fd(e.map(e=>e.target))),n:e.length}}function Bd(e,t,n,r,i,a){let o=e.filter(e=>e.values[t.key]<=n),s=e.filter(e=>e.values[t.key]>n),c=e=>r.map(r=>r.key===t.key?e===`l`?{...r,hi:n}:{...r,lo:n}:r);return{kind:`split`,id:a,key:t.key,threshold:n,n:e.length,left:Vd(o,c(`l`),i-1,`${a}l`),right:Vd(s,c(`r`),i-1,`${a}r`)}}function Vd(e,t,n,r){if(n<=0||e.length<24)return zd(e,r);let i=null;for(let n of t){let t=Rd(e,n.key,n.lo,n.hi);t&&(!i||t.e<i.e)&&(i={f:n,...t})}return i?Bd(e,i.f,Id(i.t),t,n,r):zd(e,r)}function Hd(e,t,n){return Vd(e,t,n,`n`)}var Ud={key:`cag`,lo:38.5,hi:49.5},Wd={key:`lv`,lo:4,hi:28};function Gd(e){let t=Id(Rd(e,Ud.key,Ud.lo,Ud.hi)?.t??(Ud.lo+Ud.hi)/2),n=e.filter(e=>e.values.cag<=t),r=e.filter(e=>e.values.cag>t);return{kind:`split`,id:`n`,key:`cag`,threshold:t,n:e.length,left:Vd(n,[Wd],1,`nl`),right:Vd(r,[Wd],2,`nr`)}}function Kd(e,t){let n=[e],r=e;for(;r.kind===`split`;)r=t[r.key]<=r.threshold?r.left:r.right,n.push(r);return n}function qd(e){return e.kind===`leaf`?[e]:[...qd(e.left),...qd(e.right)]}function Jd(e){return e.kind===`leaf`?0:1+Math.max(Jd(e.left),Jd(e.right))}var Yd=[`vent`,`motor`,`caud`,`age`,`cap`,`sdmt`],Xd=20260921;function Zd(e){let t=e;return()=>(t=(t*1103515245+12345)%2147483648,t/2147483648)}function Qd(){let e=Zd(Xd),t=[];for(let n=0;n<150;n++){let r=6+e()*22,i=Math.round(e()*34),a=5.6-r*.06+(e()-.5)*1.2,o=Math.round(30+e()*30),s=Math.round(o*(4+e()*6)),c=Math.round(62-i*.5+(e()-.5)*18),l=180+r*44+i*21+(e()-.5)*420;t.push({i:n,vent:r,motor:i,caud:a,age:o,cap:s,sdmt:c,rate:Math.max(60,Math.round(l))})}return t}var $d=Qd();function ef(e){let t=Array($d.length).fill(0),n=Zd(7919*(e+1)+13);for(let e=0;e<$d.length;e++)t[Math.floor(n()*$d.length)]++;return t}function tf(e){let t=Zd(104729*(e+1)),n=[...Yd],r=Math.max(2,Math.round(Math.sqrt(Yd.length))),i=new Set;for(let e=0;e<r&&n.length;e++)i.add(n.splice(Math.floor(t()*n.length),1)[0]);return Yd.filter(e=>i.has(e))}function nf(e){let t=ef(e),n=tf(e),r=[];return $d.forEach((e,n)=>{for(let i=0;i<t[n];i++)r.push({values:{...e},target:e.rate})}),{counts:t,features:n,tree:Hd(r,n.map(e=>{let t=r.map(t=>t.values[e]);return{key:e,lo:Math.min(...t),hi:Math.max(...t)}}),2)}}var rf=1e4,af=146e4,of=e=>e*2654435761%1e3/1e3-.5;function sf(e){return e.map((e,t)=>({id:t,age:e.features.ageAtscan,cag:e.features.cag,lv:e.features[`Lateral-Ventricle`]*Fo,etiv:e.features.EstimatedTotalIntraCranialVol||af,stage:e.stage,slope:e.slope,prob:e.prob,pin:e.pin,observed:e.observed,j:of(t)}))}function cf(e){return e.map(e=>({values:{cag:e.cag,lv:e.lv},target:e.observed}))}function lf(e){let t=e.prediction;return{age:e.inputs.age,cag:e.inputs.cag,lv:e.inputs.lv,etiv:e.etiv,rate:t?.rate??null,prob:t?.prob??null,pin:e.pin,observed:null,stage:e.stage,votes:t?{configuration:e.configuration,rate:t.votes.rate,prob:t.votes.prob}:null}}var uf={hover:-1,selected:null},df=[`0`,`1`,`2`,`3`],ff=(e,t,n)=>e+(t-e)*n,pf=(e,t=0)=>e.toLocaleString(`en-AU`,{maximumFractionDigits:t,minimumFractionDigits:t}),mf=e=>e===null?`--ink-3`:`stage-${e}`,hf=e=>e.narrow?2.6:3.4,gf=(e,t,n)=>{let r=hf(e)+2;return{x:Math.min(e.W-r,Math.max(r,t)),y:Math.min(e.H-r,Math.max(36+r,n))}},_f=()=>({dots:[],lines:[],texts:[],paths:[],rects:[],hit:[]});function vf(e,t,n,r){let i=_f(),{W:a,H:o,L:s,R:c,T:l,B:u,narrow:d}=n,f=e=>s+(e-20)/55*(a-s-c),p=e=>o-u-(e-2)/42*(o-l-u),m=Ed(Td(t,.15,.7));for(let e of[5,15,25,35])i.lines.push({x1:s,x2:a-c,y1:p(e),y2:p(e),tone:`--line`,cls:`grid`}),i.texts.push({x:s-8,y:p(e)+4,text:String(e),anchor:`end`});for(let e of[25,35,45,55,65,75])i.texts.push({x:f(e),y:o-u+22,text:String(e),anchor:`middle`});i.texts.push({x:16,y:24,text:r(d?`axis.1.short`:`axis.1`)}),i.texts.push({x:a-c,y:o-u+40,text:r(`axis.1.x`),anchor:`end`});for(let t of e.cast){let e=Fo/t.etiv,r=e=>({x:e.x,y:Math.max(e.y,l+4+t.id*7%5*3)}),a=r(gf(n,f(t.age),p(t.lv))),o=r(gf(n,f(t.age+3),p(t.lv+Math.max(0,t.observed)*3*e))),s={x:ff(a.x,o.x,m),y:ff(a.y,o.y,m)};i.dots.push({id:t.id,...s,r:hf(n),tone:mf(t.stage)}),m>0&&i.lines.push({x1:a.x,y1:a.y,x2:s.x,y2:s.y,tone:mf(t.stage),width:1.5,alpha:.45,cls:`trail`})}let h=e.individual;if(h){let e=gf(n,f(h.age),p(h.lv));if(h.rate===null)i.you={...e,trail:void 0};else{let t=Math.max(0,h.rate)*3*Fo/h.etiv,r=gf(n,f(h.age+3),p(h.lv+t));i.you={x:ff(e.x,r.x,m),y:ff(e.y,r.y,m),trail:m>0?{x2:e.x,y2:e.y}:void 0}}}return m>=1&&i.texts.push({x:a-c,y:l-8,text:r(`after3y`),cls:`lbl`,anchor:`end`}),i}function yf(e,t,n,r){let i=_f(),{W:a,H:o,L:s,R:c,T:l,B:u,narrow:d}=n,f=a-s-c,p=(o-l-u)/4,m=e=>s+Math.min(1,(Math.log10(Math.max(30,e))-1.4)/2.8)*f,h=e=>s+(e-1.4)/2.8*f;for(let e of[100,1e3,1e4])i.texts.push({x:m(e),y:o-u+22,text:pf(e),anchor:`middle`});i.texts.push({x:16,y:24,text:r(d?`axis.2.short`:`axis.2`)});let g=df.reduce((t,n)=>Math.max(t,...e.rateDensity[n]?.y??[0]),0);df.forEach((t,n)=>{let o=l+p*(n+.55),u=e.rateDensity[t];if(u&&u.x.length>1&&g>0){let e=p*.46,t=u.x.map((t,n)=>`${n?` L`:`M`}${h(t).toFixed(1)} ${(o-u.y[n]/g*e).toFixed(1)}`).join(``);t+=` L${h(u.x[u.x.length-1]).toFixed(1)} ${o} L${h(u.x[0]).toFixed(1)} ${o} Z`,i.paths.push({d:t,tone:mf(n),width:1.6,fill:!0,cls:`ridge`})}i.lines.push({x1:s,x2:a-c,y1:o,y2:o,tone:`--line`,cls:`grid`}),i.rects.push({x:s-74,y:o-5,w:10,h:10,tone:mf(n),stroke:`--ink`,cls:`swatch`}),i.texts.push({x:s-8,y:o+4,text:r(`stage`,{n}),anchor:`end`})});let _=Ed(Td(t,.45,.35));for(let t of e.cast){let r=t.stage===null?l+p*1.55+10:l+p*(t.stage+.55)+6+Math.abs(t.j)*p*.34;i.dots.push({id:t.id,...gf(n,m(t.observed),r),r:hf(n),tone:mf(t.stage),dim:t.stage===null,ring:_>=1&&t.observed>e.threshold})}if(e.individual&&e.individual.rate!==null&&(i.you=gf(n,m(e.individual.rate),l+p*1.55+10)),_>0&&i.lines.push({x1:m(e.threshold),x2:m(e.threshold),y1:o-u-_*(o-u-l+10),y2:o-u,tone:`--fast`,dash:!0,width:1.5,cls:`thr`}),_>=1&&e.cast.length>0){let t=Math.round(100*e.cast.filter(t=>t.observed>e.threshold).length/e.cast.length);i.texts.push({x:m(e.threshold)+6,y:42,text:r(`label.above`,{threshold:e.threshold,pct:t}),cls:`fast`})}return i}function bf(e,t){let n=qd(e),r=t.w/Math.max(1,n.length),i=(t.h-44)/Math.max(1,Jd(e)),a=new Map(n.map((e,n)=>[e.id,t.x+r*(n+.5)])),o=[],s=(e,n)=>{let r=e.kind===`leaf`?a.get(e.id):(s(e.left,n+1)+s(e.right,n+1))/2;return o.push({node:e,x:r,y:t.y+22+n*i,depth:n}),r};return s(e,0),o}function xf(e,t,n,r){let i=bf(t,n),a=new Map(i.map(e=>[e.node.id,e])),o=r.depthShown??1/0,s=r.lit??0,c=r.path??[],l=r.narrow?84:120,u=r.narrow?48:64;for(let t of i){if(t.depth>o)continue;let n=t.node;if(n.kind===`split`)for(let r of[n.left,n.right]){let n=a.get(r.id);if(n.depth>o)continue;let i=c.indexOf(r),l=i>0&&i<=s;e.lines.push({x1:t.x,y1:t.y+11,x2:n.x,y2:n.y-11,tone:l?`--ink`:`--line`,width:l?2.5:1.5,cls:l?`path`:`edge`})}let i=n.kind===`leaf`?u:l,d=n.kind===`leaf`&&n.value>r.threshold;e.rects.push({x:t.x-i/2,y:t.y-11,w:i,h:22,tone:n.kind===`leaf`?d?`--fast`:`--accent`:`--bg`,alpha:n.kind===`leaf`?.15:1,stroke:r.selected===n.id?`--ink`:`--line`,cls:`node`}),e.texts.push({x:t.x,y:t.y+4,anchor:`middle`,cls:`small`,text:n.kind===`leaf`?pf(n.value):r.label(`label.cut`,{feature:r.feature(n.key),t:pf(n.threshold,1)})}),r.hits&&e.hit.push({id:n.id,x:t.x-i/2,y:t.y-11,w:i,h:22})}return i}var Sf={c0:37.5,c1:50.5,l0:2,l1:32},Cf=[{key:`cag`,lo:38.5,hi:49.5,q0:0,q1:.36},{key:`lv`,lo:4,hi:28,q0:.4,q1:.66}];function wf(e,t,n,r,i){let a=_f(),{W:o,H:s,T:c,narrow:l}=n,u=l,d=u?o:o*.44,f=u?0:o*.48,p=u?o:o*.52,m=u?s*.5+10:0,h=u?s*.5-10:s,g=e=>f+50+(e-Sf.c0)/13*(p-50-20),_=e=>m+h-46-(e-Sf.l0)/30*(h-c-46+(u?20:0)),v=(e,t)=>({x:g(Math.min(Sf.c1,Math.max(Sf.c0,e))),y:_(Math.min(Sf.l1,Math.max(Sf.l0,t)))}),y=e.tree,b=e.threshold,x=y.kind===`split`?y.threshold:44,S=y.kind===`split`&&y.left.kind===`split`?y.left.threshold:11,C=t>=.4,w=t<.4?-1:t<.66?1:t<.7?2:t<.74?2.5:3.5,T=Math.floor(Td(t,.7,.08)*4.99),E=Td(t,.78,.22),D=i.hover>=0?e.cast[i.hover]:void 0,O=D??e.individual,k=Cf.find(e=>t>=e.q0&&t<e.q1),A=e=>!k||k.key===`cag`||e.cag<=x,j=e=>r(e===`cag`?`feat.cag`:`feat.lv`),M=Math.min(240,d-40),N=u?64:90,P=u?50:s-N-60;if(k){let n=k.key===`cag`?x:S,i=e.cast.filter(A).map(e=>({values:{cag:e.cag,lv:e.lv},target:e.observed})),o=(t-k.q0)/(k.q1-k.q0),s=o<.8?o/.8:1,c=o<.8?ff(k.lo,k.hi,s):ff(k.hi,n,(o-.8)/.2),l=Ld(i,k.key,c);k.key===`cag`?a.lines.push({x1:g(c),x2:g(c),y1:_(Sf.l1),y2:_(Sf.l0),tone:`--accent`,dash:!0,width:2.5,cls:`sweep`}):a.lines.push({x1:g(Sf.c0),x2:g(x),y1:_(c),y2:_(c),tone:`--accent`,dash:!0,width:2.5,cls:`sweep`});let u=k.key===`cag`?g((Sf.c0+c)/2):g((Sf.c0+x)/2),d=k.key===`cag`?g((c+Sf.c1)/2):u,f=k.key===`cag`?_(Sf.l1)-8:_((Sf.l0+c)/2),p=k.key===`cag`?_(Sf.l1)-8:_((c+Sf.l1)/2);a.texts.push({x:u,y:f,anchor:`middle`,cls:l.mL>b?`fast`:`moderate`,text:r(`label.mean`,{v:pf(l.mL)})});let m=k.key===`cag`;a.texts.push({x:m?g(Sf.c1):d,y:p,anchor:m?`end`:`middle`,cls:l.mR>b?`fast`:`moderate`,text:r(`label.mean`,{v:pf(l.mR)})});let h=Array.from({length:41},(e,t)=>Ld(i,k.key,ff(k.lo,k.hi,t/40)).e),v=Math.min(...h),y=Math.max(...h),C=Math.floor(s*40),w=e=>P+N-12-(e-v)/(y-v||1)*(N-24);a.rects.push({x:12,y:P-16,w:M+16,h:N+16,tone:`--bg`,alpha:.92,stroke:`--line`,cls:`inset`}),a.texts.push({x:20,y:P-2,cls:`small`,text:r(`label.error`,{feature:j(k.key)}),maxW:M}),a.paths.push({d:h.slice(0,C+1).map((e,t)=>`${t?` L`:`M`}${20+t/40*M} ${w(e)}`).join(``),tone:`--accent`,width:2,cls:`error`});let T=h.indexOf(v);s>=T/40&&(a.rects.push({x:20+T/40*M-4,y:P+N-16,w:8,h:8,tone:`--ink`,cls:`marker`}),a.texts.push({x:20+T/40*M+6,y:P+N-16,cls:`lbl`,text:r(`label.lowest`,{t:pf(n,1)})}))}let F=(e,t,n,r,i,o)=>{if(e.kind===`leaf`){w>=3.1&&a.rects.push({x:g(n),y:_(o),w:g(r)-g(n),h:_(i)-_(o),tone:e.value>b?`--fast`:`--accent`,alpha:.08+Math.min(1,Math.abs(e.value-b)/1500)*.28,cls:`region`});return}t+1>w||(e.key===`cag`?(a.lines.push({x1:g(e.threshold),x2:g(e.threshold),y1:_(o),y2:_(i),tone:`--ink`,width:2,cls:`cut`}),F(e.left,t+1,n,e.threshold,i,o),F(e.right,t+1,e.threshold,r,i,o)):(a.lines.push({x1:g(n),x2:g(r),y1:_(e.threshold),y2:_(e.threshold),tone:`--ink`,width:2,cls:`cut`}),F(e.left,t+1,n,r,i,e.threshold),F(e.right,t+1,n,r,e.threshold,o)))};F(y,0,Sf.c0,Sf.c1,Sf.l0,Sf.l1),a.rects.push({x:g(Sf.c0),y:_(Sf.l1),w:g(Sf.c1)-g(Sf.c0),h:_(Sf.l0)-_(Sf.l1),tone:`--bg`,alpha:0,stroke:`--line`,cls:`map`});for(let e of[40,44,48])a.texts.push({x:g(e),y:_(Sf.l0)+18,text:String(e),anchor:`middle`});for(let e of[10,20,30])a.texts.push({x:g(Sf.c0)-8,y:_(e)+4,text:String(e),anchor:`end`});a.texts.push({x:g(44),y:_(Sf.l0)+36,text:r(`axis.3.x`),anchor:`middle`}),a.texts.push({x:f+14,y:_(17),text:r(`axis.3.y`),anchor:`middle`,rotate:!0}),a.texts.push({x:16,y:24,text:r(k?`label.search`:`label.teaching`)});let I=u?s*.5-40:(s-70)*.66,L=u?k?P+N-4:30:40,R=O?Kd(y,{cag:O.cag,lv:O.lv}):[],ee=C&&i.selected&&i.selected.length-1<=w?i.selected:null,te=xf(a,y,{x:0,y:L,w:d,h:I},{label:r,threshold:b,feature:j,narrow:l,depthShown:w,path:R,lit:T,selected:ee,hits:C}),ne=new Map(te.map(e=>[e.node.id,e])),re=null,ie=ee?ne.get(ee)?.node:void 0;if(ee&&ie){re=e.cast.map(e=>Kd(y,{cag:e.cag,lv:e.lv}).some(e=>e.id===ee));let t=re.filter(Boolean).length,n=e.cast.filter((e,t)=>re[t]&&e.observed>b).length,i=[];for(let e=1;e<=ee.length-1;e++){let t=ne.get(ee.slice(0,e)).node;t.kind===`split`&&i.push(`${r(`label.cut`,{feature:j(t.key),t:pf(t.threshold,1)})}: ${r(ee[e]===`l`?`label.yes`:`label.no`)}`)}i.push(ie.kind===`leaf`?r(`label.leaf`,{v:pf(ie.value)}):r(`label.cut`,{feature:j(ie.key),t:pf(ie.threshold,1)})),a.overlay={rects:[{x:8,y:2,w:o-16,h:44,tone:`--bg`,cls:`veil`}],texts:[{x:16,y:24,cls:`lbl`,text:i.join(`  →  `),maxW:o-32},{x:16,y:42,text:r(`label.route`,{n:t,total:e.cast.length,fast:n})}]}}if(D&&T>=4&&!ee){let e=Kd(y,{cag:D.cag,lv:D.lv}),t=e[e.length-1],i=Sd(`lbl`,n.mobile),o=r(`label.says`,{cag:pf(D.cag),lv:pf(D.lv,1),v:pf(t.value)}),s=d-12,c=o.length*i<=s-4?o:r(`label.says.short`,{v:pf(t.value)}),l=Math.min(s,c.length*i)+12,u=L+I+16;a.overlay={rects:[{x:d/2-l/2,y:u-16,w:l,h:22,tone:`--bg`,alpha:.94,stroke:`--line`,cls:`veil`}],texts:[{x:d/2,y:u,anchor:`middle`,cls:`lbl`,text:c,maxW:s}]}}let z=null;if(E>0&&!u&&e.cast.length>0){let t=qd(y),n=L+I+34,i=d/t.length,o=e.cast.map(e=>Kd(y,{cag:e.cag,lv:e.lv})),c=new Map(t.map(e=>[e.id,0]));for(let e of o)c.set(e[e.length-1].id,c.get(e[e.length-1].id)+1);let u=Math.max(...c.values()),f=s-40-n,p=e=>Math.max(1,Math.floor((i-4)/e)),m=Array.from({length:13},(e,t)=>(l?7:9)-t*.5).filter(e=>e>=3),h=m.find(e=>Math.ceil(u/p(e))*e<=f)??m[m.length-1],g=p(h),_=h*g,x=new Map(t.map(e=>[e.id,0])),S=new Map(t.map(e=>[e.id,0])),C=0,w=0;z=e.cast.map((t,r)=>{let i=o[r],a=i[i.length-1],s=x.get(a.id),c=ne.get(a.id);x.set(a.id,s+1);let l=wd(E*1.6-r/e.cast.length*.6),u=[v(t.cag,t.lv),...i.map(e=>({x:ne.get(e.id).x,y:ne.get(e.id).y})),{x:c.x-_/2+s%g*h+h/2,y:n+Math.floor(s/g)*h}],d=u.length-1,f=l*d,p=Math.min(d-1,Math.floor(f)),m=f-p;return l>=1&&(w++,S.set(a.id,S.get(a.id)+1),a.value>b==t.observed>b&&C++),{x:ff(u[p].x,u[p+1].x,m),y:ff(u[p].y,u[p+1].y,m)}});for(let e of t){let t=ne.get(e.id),r=S.get(e.id);r&&(a.lines.push({x1:t.x,y1:t.y+8,x2:t.x,y2:n-6,tone:`--line`,dash:!0,cls:`bin`}),a.texts.push({x:t.x,y:Math.min(s-28,n+Math.ceil(x.get(e.id)/g)*h+8),text:String(r),anchor:`middle`,cls:`count`}))}w===e.cast.length&&a.texts.push({x:16,y:s-8,cls:`lbl`,text:r(`label.sorted`,{n:w,pct:Math.round(100*C/w)})})}return e.cast.forEach((e,t)=>{let r=hf(n)+2,o=v(e.cag,e.lv),s=z?z[t]:{x:Math.min(g(Sf.c1)-r,Math.max(g(Sf.c0)+r,o.x)),y:Math.min(_(Sf.l0)-r,Math.max(_(Sf.l1)+r,o.y))},c=(re?!re[t]:!1)||(k?!A(e):!1),l=re?re[t]:t===i.hover;a.dots.push({id:e.id,...gf(n,s.x,s.y),r:hf(n),tone:mf(e.stage),dim:c,ring:l})}),e.individual&&(a.you=v(e.individual.cag,e.individual.lv)),a}var Tf=e=>e.individual?.votes&&e.individual.votes.configuration===e.configuration?e.individual.votes:null;function Ef(e,t,n,r){let i=_f(),{W:a,H:o,R:s,T:c,narrow:l}=n,u=4e3,d=e.threshold,f=n.B+34,p=l?44:64,m=e=>p+Math.min(u,Math.max(0,e))/u*(a-p-s+(l?0:90)),h=e=>o-f-Math.min(u,Math.max(0,e))/u*(o-c-f);for(let e of[0,1e3,2e3,3e3,4e3])i.texts.push({x:m(e),y:o-f+38,text:pf(e),anchor:e===u?`end`:`middle`}),i.lines.push({x1:p,x2:m(u),y1:h(e),y2:h(e),tone:`--line`,cls:`grid`}),i.texts.push({x:p-8,y:h(e)+4,text:pf(e),anchor:`end`});i.lines.push({x1:m(0),y1:h(0),x2:m(u),y2:h(u),tone:`--ink-3`,dash:!0,cls:`diagonal`}),i.texts.push({x:16,y:24,text:r(l?`axis.4.short`:`axis.4`)});let g=Td(t,.7,.3);for(let t of e.cast)i.dots.push({id:t.id,...gf(n,m(t.slope),h(t.observed)),r:hf(n),tone:mf(t.stage)});let _=e.individual;if(_&&_.rate!==null){let s=gf(n,m(_.rate),h(_.observed??_.rate));i.you=s;let c=Tf(e);if(c){let e=Math.round(t*c.rate.length),n=o-f+6;for(let t=0;t<e;t++)i.lines.push({x1:m(c.rate[t]),x2:m(c.rate[t]),y1:n,y2:n+14,tone:`--ink`,alpha:.35,cls:`vote`});e>0&&(i.lines.push({x1:s.x,x2:s.x,y1:s.y+8,y2:n,tone:`--ink-3`,dash:!0,cls:`guide`}),i.texts.push({x:p,y:o-f+60,cls:`lbl`,maxW:a-p-8,text:r(_.observed===null?`label.votes.open`:`label.votes`,{n:e,total:c.rate.length})}))}}return g>0&&(i.lines.push({x1:m(d),x2:m(d),y1:h(0),y2:h(u),tone:`--fast`,dash:!0,width:1.5,alpha:g,cls:`thr`}),i.lines.push({x1:m(0),x2:m(u),y1:h(d),y2:h(d),tone:`--fast`,dash:!0,width:1.5,alpha:g,cls:`thr`})),g>=1&&i.texts.push({x:m(d)+6,y:42,cls:`fast`,text:r(l?`label.corners.short`:`label.corners`,{threshold:d})}),i}function Df(e,t,n,r){let i=_f(),{W:a,H:o,narrow:s}=n,c=e.threshold,l=s,u=l?a:a*.42,d=l?0:a*.46,f=l?a:a*.54,p=t>=.04,m=Math.min(2,Math.floor(Td(t,.04,.29)*3)),h=t>=.33,g=Td(t,.66,.1),_=Td(t,.7,.3),v=nf(m),y=e=>r(`feat.${e}`);for(let t of e.cast)i.dots.push({id:t.id,x:-50,y:-50,r:hf(n),tone:mf(t.stage),dim:!0});let b=Math.ceil(Math.sqrt($d.length*1.5)),x=Math.ceil($d.length/b),S=l?16:34,C=l?36:56,w=l?o*.38:o,T=Math.max(0,Math.min((u-S-36)/b,(w-C-(l?24:114))/x,26));if(i.texts.push({x:16,y:24,text:p?r(`label.draw`,{n:m+1,total:$d.length}):r(`label.illus`,{total:$d.length})}),$d.forEach((e,t)=>{let n=S+t%b*T+T/2,r=C+Math.floor(t/b)*T+T/2,a=p?v.counts[t]:1;i.dots.push({id:rf+t,x:n,y:r,r:T*.3,tone:e.rate>c?`--fast`:`--accent`,dim:a===0,ring:a>=2}),a>2&&T>=16&&i.texts.push({x:n,y:r+4,text:String(a),anchor:`middle`,cls:`count`})}),p){let e=v.counts.filter(e=>e>0).length,t=v.counts.filter(e=>e>1).length,n=C+x*T,a=r(`label.drawn`,{in:e,total:$d.length,rep:t,out:$d.length-e});l?i.texts.push({x:16,y:n+14,cls:`small`,text:a}):(i.texts.push({x:16,y:n+34,text:a}),i.texts.push({x:16,y:n+54,cls:`quiet`,text:r(`label.drawnote`,{total:$d.length}),maxW:d-16}))}let E=l?o*.38+4:0,D=l?18:24,O=Math.min(112,(f-40)/3-6),k=!l&&a<640,A=E+(l?18:k?54:36);i.texts.push({x:d+20,y:E+(l?12:k?42:24),text:r(`label.features`)}),Yd.forEach((e,t)=>{let n=d+20+t%3*(O+6),r=A+Math.floor(t/3)*(D+6),a=h&&v.features.includes(e);i.rects.push({x:n,y:r,w:O,h:D,tone:a?`--accent`:`--bg`,alpha:a?.15:1,stroke:a?`--accent`:`--line`,cls:a?`chip on`:`chip`}),i.texts.push({x:n+O/2,y:r+D*.68,text:y(e),anchor:`middle`,cls:a?`lbl`:`small`})});let j=A+2*(D+6)+(l?22:40),M=l?o-46-j:Math.min(190,o-j-230);g>0&&M>40&&(i.texts.push({x:d+20,y:j-8,text:r(`label.tree`)}),xf(i,v.tree,{x:d+20,y:j,w:f-40,h:M},{label:r,threshold:c,feature:y,narrow:s}),l||i.texts.push({x:d+20,y:j+M+14,cls:`quiet`,text:r(`label.leafnote`)}));let N=e.individual,P=Tf(e);if(_>0&&N&&N.prob!==null&&P&&P.rate.length>0&&P.prob.length>0){let e=P.rate.length,t=Math.max(1,Math.round(_*e)),n=P.prob.length,a=Math.round(_*n),s=Math.round(N.prob*n),u=0;for(let e=0;e<t;e++)u+=P.rate[e];let p=u/t,m=a===n?r(`label.share.done`,{threshold:c,yes:s,total:n,pct:Math.round(100*s/n)}):r(`label.share`,{threshold:c,n:a,total:n});if(l)i.texts.push({x:16,y:o-26,cls:`small`,text:`${r(`label.forest`,{n:t,total:e})}, ${r(`label.mean`,{v:pf(p)})}`}),i.texts.push({x:16,y:o-8,cls:`small`,text:m});else{let l=j+M+54,u=Math.min(60,(o-l)*.3),h=e=>d+20+Math.min(4e3,Math.max(0,e))/4e3*(f-40);i.texts.push({x:d+20,y:l-10,cls:`lbl`,text:r(`label.forest`,{n:t,total:e})});for(let e=0;e<t;e++)i.lines.push({x1:h(P.rate[e]),x2:h(P.rate[e]),y1:l,y2:l+u,tone:`--ink`,alpha:.35,cls:`vote`});i.lines.push({x1:h(c),x2:h(c),y1:l-4,y2:l+u+4,tone:`--fast`,dash:!0,width:1.5,cls:`thr`}),i.lines.push({x1:h(p),x2:h(p),y1:l-4,y2:l+u+4,tone:`--ink`,width:3,cls:`mean`}),i.texts.push({x:h(p)+6,y:l+u+14,cls:`small`,text:r(`label.mean`,{v:pf(p)})});let g=l+u+40,_=Math.min(9,(f-40)/40-2);i.texts.push({x:d+20,y:g-8,cls:`lbl`,text:m});for(let e=0;e<a;e++){let t=e*37%n<s;i.rects.push({x:d+20+e%40*(_+2),y:g+Math.floor(e/40)*(_+2),w:_,h:_,tone:t?`--fast`:`--accent`,cls:t?`clf fast`:`clf`})}}}return i}function Of(e,t,n,r){let i=_f(),{W:a,H:o,L:s,R:c,T:l,B:u,narrow:d}=n,f=Ed(Td(t,.35,.3)),p=a-c+(d?0:100),m=(p-s)/4,h=e=>s+m*(e+.5),g=e=>o-u-wd(e)*(o-l-u),_=e=>o-u-(Math.min(4.5,Math.max(-2,e))+2)/6.5*(o-l-u),v=(e,t)=>ff(g(e),_(t),f),y=f>=.5;for(let e of y?[-2,-1,0,1,2,3,4]:[0,.2,.4,.6,.8,1]){let t=y?_(e):g(e);i.lines.push({x1:s,x2:p,y1:t,y2:t,tone:`--line`,cls:`grid`}),i.texts.push({x:s-8,y:t+4,text:y?String(e):e.toFixed(1),anchor:`end`})}i.texts.push({x:16,y:24,text:r(y?`label.pin`:`label.prob`)});for(let e=0;e<4;e++){let t=d&&e%2==1?16:0;i.rects.push({x:h(e)-34,y:o-u+13+t,w:10,h:10,tone:mf(e),stroke:`--ink`,cls:`swatch`}),i.texts.push({x:h(e)+6,y:o-u+22+t,text:r(`stage`,{n:e}),anchor:`middle`})}df.forEach((t,n)=>{let r=e.stageBoxes?.prob?.[t],a=e.stageBoxes?.pin?.[t];if(!r||!a||r.length<5||a.length<5)return;let o=e=>v(r[e],a[e]);i.lines.push({x1:h(n),x2:h(n),y1:o(0),y2:o(4),tone:`--ink-3`,cls:`whisker`}),i.rects.push({x:h(n)-30,y:o(3),w:60,h:Math.max(0,o(1)-o(3)),tone:mf(n),alpha:.25,stroke:`--ink`,cls:`box`}),i.lines.push({x1:h(n)-30,x2:h(n)+30,y1:o(2),y2:o(2),tone:`--ink`,width:2,cls:`med`})});let b=(h(1)+h(2))/2;for(let t of e.cast){let e=t.stage===null?b+t.j*20:h(t.stage)+t.j*44;i.dots.push({id:t.id,...gf(n,e,v(t.prob,t.pin)),r:hf(n),tone:mf(t.stage),dim:t.stage===null})}let x=e.individual;if(x&&x.prob!==null&&(x.pin!==null||!y)){let e=gf(n,x.stage===void 0?b:h(x.stage)+8,x.pin===null?g(x.prob):v(x.prob,x.pin));i.you=e,x.stage===void 0&&(i.texts.push({x:b,y:l-5,text:r(`label.nostage`),anchor:`middle`,cls:`quiet`}),e.y-9>l&&i.lines.push({x1:b,x2:b,y1:l,y2:e.y-9,tone:`--ink-3`,dash:!0,cls:`leader`}))}return i}var kf=[vf,yf,wf,Ef,Df,Of];function Af(e,t,n,r,i,a=uf){return kf[Math.min(kf.length-1,Math.max(0,Math.floor(t)))](e,wd(n),r,i,a)}function jf(e,t){let n=0;return e.forEach((e,r)=>{e<=t&&(n=r)}),n}function Mf(e,t,n){if(e.length===0||n<e[0])return{chapter:0,p:0};let r=jf(e,n),i=r+1<e.length?e[r+1]:t;return{chapter:r,p:Math.min(1,Math.max(0,(n-e[r])/Math.max(1,i-e[r])))}}function Nf(){let e=typeof window.matchMedia==`function`&&window.matchMedia(`(max-width: 880px)`).matches;return window.innerHeight*(e?.76:.5)}function Pf(e,t){let n=(0,_.useRef)(t);(0,_.useEffect)(()=>{n.current=t},[t]),(0,_.useEffect)(()=>{let t=typeof window.requestAnimationFrame!=`function`||vd(),r=0,i=``,a=()=>{r=0;let a=e.current;if(!a)return;let o=[...a.querySelectorAll(`[data-step]`)].map(e=>e.getBoundingClientRect().top),s=Nf(),c=Mf(o,a.getBoundingClientRect().bottom,s),l=t?o.length>0&&s<o[0]?0:1:Math.round(c.p*100)/100,u=`${c.chapter}:${l}`;u!==i&&(i=u,n.current({chapter:c.chapter,p:l}))},o=()=>{if(t){a();return}r||=window.requestAnimationFrame(a)};a(),window.addEventListener(`scroll`,o,{passive:!0}),window.addEventListener(`resize`,o);let s=typeof ResizeObserver==`function`?new ResizeObserver(o):null;return s?.observe(document.documentElement),()=>{window.removeEventListener(`scroll`,o),window.removeEventListener(`resize`,o),s?.disconnect(),r&&window.cancelAnimationFrame(r)}},[e])}var Ff=`prognostic`,If=146e4,Lf=[],Rf=Gd([]),zf=e=>e.toLocaleString(`en-AU`,{minimumFractionDigits:1,maximumFractionDigits:1}),Bf=[1,2,3,4,5,6];function Vf({loadCast:e=po,chapters:t=Bf}){let{model:n,prognosis:r,inputs:i,pin:a,base:o,source:s,configuration:c}=$o(),l=U(),{cast:u,error:d}=hd(Ff,e,n.files),f=(0,_.useRef)(null),[p,m]=(0,_.useState)({chapter:0,p:0});Pf(f,m);let h=t[p.chapter]-1,g=(0,_.useRef)(null),[v,y]=(0,_.useState)({w:900,h:563,mobile:!1});(0,_.useLayoutEffect)(()=>{let e=g.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>{let t=e.getBoundingClientRect();y({w:t.width,h:t.height,mobile:typeof window.matchMedia==`function`&&window.matchMedia(`(max-width: 880px)`).matches})});return t.observe(e),()=>t.disconnect()},[]);let b=(0,_.useMemo)(()=>Cd(v.w,v.h,v.mobile),[v]),[x,S]=(0,_.useState)({dot:-1,node:null}),[C,w]=(0,_.useState)(null);C&&C.chapter!==p.chapter&&w(null);let T=C&&C.chapter===p.chapter?C.node:null,E=(0,_.useCallback)((e,t)=>S(n=>n.dot===e&&n.node===t?n:{dot:e,node:t}),[]),D=p.chapter,O=(0,_.useCallback)(e=>w(t=>t?.node===e&&t.chapter===D?null:{chapter:D,node:e}),[D]),k=n.files,A=(0,_.useMemo)(()=>u?sf(u.rows):Lf,[u]),j=(0,_.useMemo)(()=>u?Gd(cf(A)):Rf,[u,A]),M=(0,_.useMemo)(()=>k?(o?.kind===`upload`?o.record:o?.kind===`example`?k.examples.find(e=>e.id===o.id)?.features:void 0)?.EstimatedTotalIntraCranialVol??Ka(k.spec).get(`EstimatedTotalIntraCranialVol`)?.median??If:If,[k,o]),N=s.kind===`example`?k?.examples.find(e=>e.id===s.id)?.stage:void 0,P=(0,_.useMemo)(()=>k?lf({inputs:i,prediction:r.prediction,pin:a,etiv:M,stage:N,configuration:c}):null,[k,i,r.prediction,a,M,N,c]),F=(0,_.useMemo)(()=>k?{cast:A,rateDensity:u?.rateDensity??{},stageBoxes:k.story.stage_boxes??null,threshold:k.spec.threshold,tree:j,individual:P,configuration:c}:null,[k,A,u,j,P,c]),I=(0,_.useCallback)((e,t)=>l(e===`stage`?`prognostic.cohort.stages.stage`:`prognostic.story.${e}`,t),[l]),L=(0,_.useMemo)(()=>h===2?{hover:x.dot,selected:x.node??T}:uf,[h,x,T]),R=(0,_.useMemo)(()=>F?Af(F,h,p.p,b,I,L):null,[F,h,p.p,b,I,L]),ee=(0,_.useCallback)(()=>{document.getElementById(`tool`)?.scrollIntoView?.({behavior:vd()?`auto`:`smooth`,block:`start`}),document.getElementById(`reading`)?.focus({preventScroll:!0})},[]),te=u&&u.rows.length>0?zf(j.threshold):l(`prognostic.story.cut.pending`),ne=p.chapter===0&&p.p===0;return(0,H.jsxs)(`section`,{className:`story`,id:`story`,"aria-labelledby":`h-story`,tabIndex:-1,children:[(0,H.jsxs)(`div`,{className:`story-head`,children:[(0,H.jsx)(W,{k:`prognostic.story.eyebrow`,as:`p`,className:`eyebrow`,vars:{total:t.length}}),(0,H.jsx)(W,{k:`prognostic.story.title`,as:`h2`,id:`h-story`}),(0,H.jsx)(W,{k:`prognostic.story.lede`,as:`p`,className:`lede`})]}),(0,H.jsxs)(`div`,{className:`story-figure${ne?` is-before`:``}`,children:[(0,H.jsx)(`div`,{ref:g,className:`story-box${u||d!==null?``:` is-loading`}`,children:R&&(0,H.jsx)(Pd,{layout:R,width:b.W,height:b.H,transitionKey:h,phone:v.mobile,onHover:E,onPick:O})}),d!==null&&(0,H.jsx)(W,{k:`prognostic.story.failed`,as:`p`,className:`quiet story-failed`,vars:{detail:d}}),(0,H.jsx)(`div`,{className:`story-progress`,"aria-hidden":`true`,children:(0,H.jsx)(`i`,{style:{width:`${(p.chapter+p.p)/t.length*100}%`}})}),(0,H.jsx)(W,{k:`prognostic.story.progress`,as:`p`,className:`story-count`,vars:{n:p.chapter+1,total:t.length}}),(0,H.jsx)(W,{k:`prognostic.story.cap.${t[p.chapter]}`,as:`p`,className:`story-cap`,"aria-live":`polite`})]}),(0,H.jsx)(`ol`,{className:`story-steps`,ref:f,children:t.map((e,n)=>(0,H.jsxs)(`li`,{"data-step":n,className:`story-step${n===p.chapter?` active`:``}`,children:[(0,H.jsx)(`span`,{className:`n`,"aria-hidden":`true`,children:n+1}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(W,{k:`prognostic.story.title.${e}`,as:`h2`,id:`story-title-${e}`}),(0,H.jsx)(W,{k:`prognostic.story.text.${e}`,as:`p`,vars:e===3?{cut:te}:void 0}),(0,H.jsx)(W,{k:`prognostic.story.cap.${e}`,as:`p`,className:`story-cap-fold`}),n===t.length-1&&(0,H.jsx)(`button`,{type:`button`,className:`cta`,onClick:ee,...G(`prognostic.story.cta`),children:(0,H.jsx)(W,{k:`prognostic.story.cta`})})]})]},e))})]})}function Hf({loaders:e,storyCast:t,chapters:n=Bf}={}){return(0,H.jsx)(Qo,{loaders:e,children:(0,H.jsxs)(`div`,{className:`prognostic`,children:[(0,H.jsx)(`div`,{className:`wrap`,children:(0,H.jsx)(Ua,{titleKey:`prognostic.title`,ledeKey:`prognostic.lede`,titleId:`h-prognostic`})}),(0,H.jsx)(ts,{chapters:n.length}),(0,H.jsx)(gd,{loadCast:t}),(0,H.jsx)(`section`,{className:`tool explainer`,id:`tool`,"aria-labelledby":`h-explainer`,tabIndex:-1,children:(0,H.jsxs)(`div`,{className:`wrap`,children:[(0,H.jsx)(W,{k:`prognostic.explainer.title`,as:`h2`,id:`h-explainer`}),(0,H.jsx)(Vl,{})]})}),(0,H.jsx)(_d,{brokenKey:`prognostic.story.broken`,children:(0,H.jsx)(Vf,{loadCast:t,chapters:n})}),(0,H.jsx)($l,{}),(0,H.jsxs)(`section`,{className:`wrap closing`,"aria-labelledby":`h-closing`,children:[(0,H.jsx)(W,{k:`prognostic.closing.title`,as:`h2`,id:`h-closing`}),(0,H.jsx)(W,{k:`prognostic.closing.forest`,as:`p`}),(0,H.jsx)(W,{k:`prognostic.closing.privacy`,as:`p`})]})]})})}function Uf(e){let t=(0,_.useCallback)(t=>{if(typeof window.matchMedia!=`function`)return()=>{};let n=window.matchMedia(e);return n.addEventListener(`change`,t),()=>n.removeEventListener(`change`,t)},[e]);return(0,_.useSyncExternalStore)(t,()=>typeof window.matchMedia==`function`&&window.matchMedia(e).matches,()=>!1)}var Wf=`/hd-platform/assets/subcortical-DgCIfF_6.bin`,Gf=`/hd-platform/assets/cortex-DB_nHPfd.bin`;function Kf(e){let t=new DataView(e).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(e,4,t))),r=4+t,i=n.structures.map(t=>{if(t.vbytes!==t.nv*12||t.fbytes!==t.nf*6)throw Error(`mesh: ${t.id} has inconsistent sizes`);let n=r+t.offset;if(n+t.vbytes+t.fbytes>e.byteLength)throw Error(`mesh: ${t.id} runs past the file`);let i=new Float32Array(e.slice(n,n+t.vbytes)),a=new Uint16Array(e.slice(n+t.vbytes,n+t.vbytes+t.fbytes));return{id:t.id,group:t.group,side:t.side,positions:i,indices:a,centroid:t.centroid,volumeMm3:t.volume_mm3}});return{source:n.source,units:n.units,structures:i}}function qf(e,t){return e.structures.filter(e=>e.group===t).reduce((e,t)=>e+t.volumeMm3,0)}async function Jf(e){let t=await fetch(e);if(!t.ok)throw Error(`mesh ${t.status}`);return Kf(await t.arrayBuffer())}function Yf(e,t){return{source:e.source,units:e.units,structures:[...e.structures,...t.structures]}}async function Xf(){let[{createBrainScene:e},t,n]=await Promise.all([mi(()=>import(`./scene-i9ZIO-K2.js`),[]),Jf(Wf),Jf(Gf)]);return{createBrainScene:e,mesh:Yf(t,n)}}var Zf=[`3d`,`coronal`,`axial`,`sagittal`,`compare`],Qf=[`front`,`left`,`top`,`oblique`],$f={"3d":!0,compare:!0,coronal:!1,axial:!1,sagittal:!1,trio:!0};function ep(e,t){let n=Math.cbrt(e.caudate/t.caudate);return{caudate:n,putamen:Math.cbrt(e.putamen/t.putamen),ventricle:1+.35*(1-n)}}function tp(e){let t=Math.max(0,Math.min(1,e));return{caudate:1-.38*t,putamen:(100-34*t)/100,ventricle:(1e3+342*t)/1e3}}var np=e=>(e*e*e-1)*100,rp=e=>Math.round(np(e))===0,ip=e=>!rp(e);function ap(e,t){return[`caudate`,`putamen`,`ventricle`].map(n=>{let r=t[n],i=qf(e,n);return{group:n,nowCm3:i*r*r*r/1e3,baseCm3:i/1e3,percent:np(r),atBase:rp(r)}})}function op(e){let t=e.structures.find(e=>e.group===`putamen`&&e.side===`L`),n=e.structures.find(e=>e.group===`caudate`&&e.side===`L`);return!t||!n?null:{coronal:t.centroid[1],axial:n.centroid[2]-2,sagittal:(t.centroid[0]+n.centroid[0])/2}}function sp(e){let t=e.structures.find(e=>e.group===`putamen`&&e.side===`L`),n=e.structures.find(e=>e.group===`caudate`&&e.side===`L`);return!t||!n?null:{coronal:t.centroid[1]+4,axial:t.centroid[2]+2,sagittal:(t.centroid[0]+n.centroid[0])/2}}function cp(e){return Math.max(330,90/(Math.tan(Math.PI/180*16)*e))}var lp={"3d":{yaw:-.5,pitch:.45,dist:200},compare:{yaw:-.5,pitch:.45,dist:200},trio:{yaw:Math.PI-.55,pitch:.32,dist:330},reset:{yaw:-.9,pitch:.35,dist:260}},up={front:{yaw:0,pitch:.05},left:{yaw:-Math.PI/2,pitch:.05},top:{yaw:0,pitch:1.35},oblique:{yaw:-.9,pitch:.35}},dp=1.4,fp={min:120,max:600},pp=e=>Math.max(-1.4,Math.min(dp,e)),mp=e=>Math.max(fp.min,Math.min(fp.max,e)),hp={caudate:{color:10869842,opacity:1,on:!0},putamen:{color:8171008,opacity:1,on:!0},pallidum:{color:12172747,opacity:1,on:!0},thalamus:{color:14273443,opacity:1,on:!0},ventricle:{color:2795165,opacity:.6,on:!0},ventricle3:{color:2795165,opacity:.6,on:!0},hippocampus:{color:13214330,opacity:1,on:!1},amygdala:{color:13204090,opacity:1,on:!1},accumbens:{color:10263769,opacity:1,on:!1},brainstem:{color:14014430,opacity:.35,on:!1},cortex:{color:8030873,opacity:.13,on:!0}},gp={orbit:hp.cortex.opacity,cut:.5,compare:.08},_p=.34,vp=[`caudate`,`putamen`,`pallidum`,`thalamus`,`ventricle`,`hippocampus`,`amygdala`,`accumbens`,`brainstem`,`cortex`],yp=e=>e===`ventricle`?[`ventricle`,`ventricle3`]:[e],bp=e=>e===`caudate`||e===`putamen`?e:e===`ventricle`||e===`ventricle3`?`ventricle`:null,xp={coronal:{half:72,minHalfWidth:78},axial:{half:95,minHalfWidth:78},sagittal:{half:78,minHalfWidth:95}};function Sp(e,t,n,r){let i=e/t;if(!r)return{halfWidth:48*i,halfHeight:48};let a=xp[n],o=Math.max(a.half*i,a.minHalfWidth);return{halfWidth:o,halfHeight:o/i}}var Cp={caudate:hp.caudate.color,putamen:hp.putamen.color,ghost:1776934,cortex:8030873,lost:11740702,fluid:hp.ventricle.color,fluidSoft:14086638},wp;function Tp(e,t,n){try{let r=e.getPropertyValue(t).trim();if(!r)return n;if(wp===void 0){let e=document.createElement(`canvas`);e.width=e.height=1,wp=e.getContext(`2d`,{willReadFrequently:!0})}if(!wp)return n;wp.clearRect(0,0,1,1),wp.fillStyle=`#000000`,wp.fillStyle=r,wp.fillRect(0,0,1,1);let[i,a,o]=wp.getImageData(0,0,1,1).data,s=(i<<16)+(a<<8)+o;return s===0&&!/^(#000(000)?|black|rgba?\(\s*0[,\s]+0[,\s]+0\b)/i.test(r)?n:s}catch{return n}}function Ep(e){let t=document.querySelector(e);if(!t)return Cp;let n=getComputedStyle(t);return{caudate:Tp(n,`--caudate`,Cp.caudate),putamen:Tp(n,`--putamen`,Cp.putamen),ghost:Tp(n,`--ghost`,Cp.ghost),cortex:Tp(n,`--cortex`,Cp.cortex),lost:Tp(n,`--fast`,Cp.lost),fluid:Tp(n,`--fluid`,Cp.fluid),fluidSoft:Tp(n,`--fluid-soft`,Cp.fluidSoft)}}var Dp=(e,t)=>e.caudate===t.caudate&&e.putamen===t.putamen&&e.ghost===t.ghost&&e.cortex===t.cortex&&e.lost===t.lost&&e.fluid===t.fluid&&e.fluidSoft===t.fluidSoft;function Op(e){let[t,n]=(0,_.useState)(Cp);return(0,_.useEffect)(()=>{let t=0,r=()=>{let t=Ep(e);n(e=>Dp(e,t)?e:t)},i=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(r)};r(),document.addEventListener(`hd:themechange`,i);let a=typeof window.matchMedia==`function`?window.matchMedia(`(prefers-color-scheme: dark)`):null;return a?.addEventListener(`change`,i),()=>{cancelAnimationFrame(t),document.removeEventListener(`hd:themechange`,i),a?.removeEventListener(`change`,i)}},[e]),t}var kp=[`orbit`,`coronal`,`axial`];function Ap(e,t){let n={};for(let r of kp){let i=t[r];!i||i.width<1||i.height<1||(n[r]={x:i.left-e.left,y:i.top-e.top,w:i.width,h:i.height})}return n}function jp(e,t){let n=e[0],r=e[e.length-1];if(t<=n[0])return n[1];if(t>=r[0])return r[1];for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1];if(t>=r[0]&&t<=i[0])return r[1]+(i[1]-r[1])*(t-r[0])/(i[0]-r[0])}return r[1]}function Mp(e,t,n,r=0){let i=1/(1+Math.exp(-(e-t)/n));return r?r+(1-r)*i:i}function Np(e){let t=Math.exp(-.05*(e-40));return[-5.1+42.1*t,-11+63*t,-17+84*t]}function Pp(e){let[t,n,r]=Np(e);return[Math.round(t),Math.round(n),Math.round(r)]}function Fp(e,t){let n=Np(e),r=8*Math.exp(-.077*(e-40)),[i,a,o]=n.map(e=>1/(1+Math.exp(-(t-e)/r))),s=e=>Math.max(0,Math.min(1,e));return[s(1-i),s(i-a),s(a-o),s(o)]}function Ip(e,t,n){let r=[],i=Math.round((t-e)/n);for(let t=0;t<=i;t++)r.push(Number((e+t*n).toFixed(6)));return r}var Lp=()=>Pp(42),Rp=(e,t)=>t.filter(t=>e>=t).length,zp=e=>Math.max(0,Math.min(1,e)),Bp=e=>zp(e/30),Vp=e=>zp((e-26)/40),Hp={1:.6,2:0,3:0,6:.45};function Up(e,t,n){return e===4?{control:`years`,t:Bp(t),captionKey:`intro.cap.q4`}:e===5?{control:`age`,t:Vp(n),captionKey:`intro.cap.q5`}:e!==null&&e in Hp?{control:null,t:Hp[e],captionKey:`intro.cap.q${e}`}:{control:`years`,t:Bp(t),captionKey:`intro.cap.default`}}var Wp={orbit:`/hd-platform/assets/basics-orbit-C3TjZrgL.png`,coronal:`/hd-platform/assets/basics-coronal-BuTivkME.png`,axial:`/hd-platform/assets/basics-axial-BsBOzJJ5.png`},Gp=[{group:`caudate`,side:`L`,key:`intro.rail.tag.caudate`,dx:-1.3,dy:-.9},{group:`putamen`,side:`L`,key:`intro.rail.tag.putamen`,dx:-.9,dy:1.2},{group:`ventricle`,side:`R`,key:`intro.rail.tag.ventricle`,dx:1.6,dy:-1.5}];function Kp({control:e,progress:t,years:n,age:r,onYears:i,onAge:a,captionKey:o,liveCaptionKey:s,phone:c,loader:l=Xf}){let u=U(),d=(0,_.useId)(),f=Op(`.intro`),p=(0,_.useRef)(null),m=(0,_.useRef)(null),h=(0,_.useRef)({orbit:null,coronal:null,axial:null}),g=(0,_.useRef)(null),v=(0,_.useRef)(null),[y,b]=(0,_.useState)(`idle`),[x,S]=(0,_.useState)({}),C=(0,_.useRef)(!1),w=(0,_.useRef)(!0),T=(0,_.useRef)(!0),E=(0,_.useRef)({colors:f,phone:c,progress:t});(0,_.useEffect)(()=>{E.current={colors:f,phone:c,progress:t}});let D=(0,_.useCallback)(()=>E.current.phone?[`orbit`]:[`orbit`,`coronal`,`axial`],[]),O=(0,_.useCallback)(()=>{let e=g.current,t=p.current,n=v.current;if(!e||!t||!n)return;let r={orbit:null,coronal:null,axial:null};for(let e of D())r[e]=h.current[e]?.getBoundingClientRect()??null;e.setLayout(Ap(t.getBoundingClientRect(),r)),e.resize();let i={};for(let r of[`coronal`,`axial`]){let a=h.current[r];if(!a||E.current.phone)continue;let o=a.clientWidth,s=a.clientHeight,c=a.getBoundingClientRect(),l=t.getBoundingClientRect();for(let t of Gp){let a=n.structures.find(e=>e.group===t.group&&e.side===t.side),u=a&&e.projectRas(a.centroid,r);if(!u){i[`${r}.${t.key}`]=null;continue}let d=Math.max(40,Math.min(o-40,u.x-(c.left-l.left)+t.dx*34)),f=Math.max(14,Math.min(s-14,u.y-(c.top-l.top)+t.dy*30));i[`${r}.${t.key}`]={x:d,y:f}}}S(i)},[D]),k=(0,_.useCallback)(()=>{let e=g.current;e&&(T.current&&!document.hidden?e.start():e.stop())},[]),A=(0,_.useCallback)(async()=>{if(C.current)return;C.current=!0,b(`loading`);let e;try{e=await l()}catch{w.current&&b(`failed`);return}let t=m.current;if(!w.current||!t)return;let n;try{n=e.createBrainScene(t,e.mesh,{reducedMotion:vd(),colors:E.current.colors})}catch{for(let e of t.querySelectorAll(`canvas`))e.remove();w.current&&b(`failed`);return}if(!n){b(`failed`);return}g.current=n,v.current=e.mesh;let r=t.querySelector(`canvas`);r&&(r.setAttribute(`role`,`img`),r.setAttribute(`aria-label`,u(`intro.rail.label`))),n.setMode(`trio`),n.setVisible(`cortex`,!0),n.setVisible(`thalamus`,!1),n.setVisible(`pallidum`,!1),n.setScales(tp(E.current.progress)),b(`ready`),O(),k()},[l,O,k,u]);(0,_.useEffect)(()=>{let e=p.current;if(!e)return;let t=()=>k();document.addEventListener(`visibilitychange`,t);let n=null;return typeof IntersectionObserver>`u`?queueMicrotask(()=>void A()):(n=new IntersectionObserver(e=>{let t=e[e.length-1];t&&(T.current=t.isIntersecting,t.isIntersecting&&A(),k())}),n.observe(e)),()=>{n?.disconnect(),document.removeEventListener(`visibilitychange`,t)}},[A,k]),(0,_.useEffect)(()=>{let e=p.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>O());t.observe(e);for(let e of[`orbit`,`coronal`,`axial`]){let n=h.current[e];n&&t.observe(n)}return()=>t.disconnect()},[O,y]),(0,_.useEffect)(()=>{O()},[c,O]),(0,_.useEffect)(()=>{g.current?.setScales(tp(t))},[t]),(0,_.useEffect)(()=>{g.current?.setColors(f)},[f]),(0,_.useEffect)(()=>(w.current=!0,()=>{w.current=!1;let e=g.current;g.current=null,e?.stop(),e?.dispose()}),[]);let j=c?[`orbit`]:[`orbit`,`coronal`,`axial`];return(0,H.jsxs)(`div`,{className:`rail`,"data-status":y,children:[(0,H.jsxs)(`div`,{className:`brain-block`,ref:p,role:`group`,"aria-label":u(`intro.rail.label`),children:[j.map(e=>(0,H.jsxs)(`div`,{className:`panel panel-${e}`,"data-panel":e,ref:t=>{h.current[e]=t},children:[(0,H.jsx)(`img`,{src:Wp[e],alt:u(`intro.rail.${e}`),className:`still`,hidden:y===`ready`}),e===`orbit`&&(0,H.jsxs)(`div`,{className:`key`,"aria-hidden":`true`,children:[(0,H.jsx)(W,{k:`intro.rail.key.caudate`,as:`span`,className:`k-caudate`}),(0,H.jsx)(W,{k:`intro.rail.key.putamen`,as:`span`,className:`k-putamen`}),(0,H.jsx)(W,{k:`intro.rail.key.ventricle`,as:`span`,className:`k-ventricle`})]}),e!==`orbit`&&y===`ready`&&Gp.map(t=>{let n=x[`${e}.${t.key}`];return n?(0,H.jsx)(`span`,{className:`tag`,style:{left:n.x,top:n.y},...G(t.key),children:u(t.key)},t.key):null}),(0,H.jsx)(`span`,{className:`hint`,...G(`intro.rail.${e}.hint`),children:u(`intro.rail.${e}.hint`)})]},e)),(0,H.jsx)(`div`,{className:`canvas-host`,ref:m})]}),(0,H.jsxs)(`div`,{className:`dockctl`,children:[e===`years`&&(0,H.jsxs)(`div`,{className:`ctl`,children:[(0,H.jsx)(W,{k:`intro.hero.years`,as:`label`,htmlFor:`${d}-years`}),(0,H.jsx)(`input`,{type:`range`,id:`${d}-years`,min:0,max:30,step:1,value:n,"aria-valuetext":u(`intro.hero.years.valuetext`,{n}),onChange:e=>i(Number(e.target.value))}),(0,H.jsx)(`b`,{children:n})]}),e===`age`&&(0,H.jsxs)(`div`,{className:`ctl`,children:[(0,H.jsx)(W,{k:`intro.hero.age`,as:`label`,htmlFor:`${d}-age`}),(0,H.jsx)(`input`,{type:`range`,id:`${d}-age`,min:20,max:70,step:1,value:r,"aria-valuetext":u(`intro.hero.age.valuetext`,{n:r}),onChange:e=>a(Number(e.target.value))}),(0,H.jsx)(`b`,{children:r})]})]}),(0,H.jsx)(W,{k:o,as:`p`,className:`cap`}),(0,H.jsx)(W,{k:s,as:`p`,className:`visually-hidden`,"aria-live":`polite`}),y===`failed`&&(0,H.jsx)(W,{k:`intro.rail.failed`,as:`p`,className:`quiet`})]})}var qp=m(),Jp=`M17 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM6 54V30a11 11 0 0 1 22 0v24z`;function Yp({marked:e,label:t,className:n}){return(0,H.jsxs)(`svg`,{className:n,viewBox:`0 0 34 56`,...t?{role:`img`,"aria-label":t}:{"aria-hidden":!0},"data-marked":e||void 0,children:[(0,H.jsx)(`path`,{d:Jp}),e&&(0,H.jsx)(`circle`,{cx:17,cy:40,r:3.5})]})}var Xp={move:`M13 4a2 2 0 1 0 0 .01M8 22l3-7 3 2 3-5M6 12l5-2 4 3 4-1`,think:`M13 3a7 7 0 0 1 7 7c0 3-2 4-2 6H8c0-2-2-3-2-6a7 7 0 0 1 7-7zM9 20h8M10 23h6`,mood:`M13 3a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM9 10h.01M17 10h.01M9 16c1 1 2 1.5 4 1.5s3-.5 4-1.5`};function Zp({kind:e}){return(0,H.jsx)(`svg`,{className:`ico`,viewBox:`0 0 26 26`,"aria-hidden":`true`,children:(0,H.jsx)(`path`,{d:Xp[e]})})}var Qp=[`move`,`think`,`mood`];function $p(){let e=U(),[t,n]=(0,_.useState)({move:!1,think:!1,mood:!1});return(0,H.jsx)(`div`,{className:`signs`,role:`group`,"aria-label":e(`intro.signs.label`),children:Qp.map(e=>(0,H.jsxs)(`div`,{className:`lane`,"data-open":t[e]||void 0,children:[(0,H.jsxs)(`button`,{type:`button`,"aria-expanded":t[e],"aria-controls":`signs-${e}`,onClick:()=>n(t=>({...t,[e]:!t[e]})),children:[(0,H.jsx)(Zp,{kind:e}),(0,H.jsx)(W,{k:`intro.signs.${e}.title`,as:`span`}),(0,H.jsx)(W,{k:`intro.signs.${e}.when`,as:`small`})]}),(0,H.jsx)(`div`,{className:`body`,id:`signs-${e}`,hidden:!t[e],children:(0,H.jsx)(W,{k:`intro.signs.${e}.body`,as:`p`})})]},e))})}var em=30,tm=20,nm=2,rm=10,im=10,am=15,om=80,sm=[20,30,40,50,60,70,80];function cm(e){return 21.54+Math.exp(9.556-.146*e)}function lm(e){return e>=39?`full`:e>=35?`reduced`:`typical`}function um(e){return e<=26?`typical`:e<=35?`intermediate`:e<=39?`reduced`:`full`}function dm(e){return e!==null&&e<480?10:20}function fm(e,t){let n=[];for(let r=0;r<e;r++)n.push({index:r,x:rm+r%t*32,y:im+Math.floor(r/t)*24,band:lm(r)});let r=im+Math.ceil(e/t)*24+26,i=t*32-nm,a=e=>rm+(e-am)/65*i,o=null;if(e>=40){let t=Math.max(am,Math.min(om,cm(e)));o={x:a(t),age:t}}return{cells:n,cell:{w:em,h:tm},axis:{y:r,x0:a(am),x1:a(om),ticks:sm.map(e=>({age:e,x:a(e)}))},marker:o,captionY:r+50,viewBox:{w:t*32+20,h:r+60}}}function pm(){let e=(0,_.useRef)(null),[t,n]=(0,_.useState)(null);return(0,_.useLayoutEffect)(()=>{let t=e.current?.getBoundingClientRect().width;t&&t>0&&n(t)},[]),(0,_.useEffect)(()=>{let t=e.current;if(!t||typeof ResizeObserver>`u`)return;let r=new ResizeObserver(e=>{let t=e[0]?.contentRect.width;typeof t==`number`&&n(t)});return r.observe(t),()=>r.disconnect()},[]),[e,t]}var mm={typical:`var(--bg-2)`,reduced:`var(--s0)`,full:`var(--s3)`},hm={typical:`var(--ink)`,reduced:`var(--s0-on)`,full:`var(--s3-on)`};function gm({x:e,y:t,w:n,h:r,ink:i}){let a=t+4,o=t+r-4,s=e+n/2;return(0,H.jsxs)(`g`,{fill:`none`,stroke:i,strokeWidth:1.6,strokeLinecap:`round`,children:[(0,H.jsx)(`path`,{d:`M${e} ${a} C${s} ${a} ${s} ${o} ${e+n} ${o}`}),(0,H.jsx)(`path`,{d:`M${e} ${o} C${s} ${o} ${s} ${a} ${e+n} ${a}`,opacity:.55}),(0,H.jsx)(`line`,{x1:e+n*.22,x2:e+n*.22,y1:a+2,y2:o-2,strokeWidth:1,opacity:.5}),(0,H.jsx)(`line`,{x1:e+n*.78,x2:e+n*.78,y1:a+2,y2:o-2,strokeWidth:1,opacity:.5})]})}function _m({n:e,cols:t,label:n,axisCaption:r,markerText:i}){let[a,o]=pm(),s=fm(e,t??dm(o));return(0,H.jsx)(`div`,{ref:a,className:`strip`,children:(0,H.jsxs)(`svg`,{viewBox:`0 0 ${s.viewBox.w} ${s.viewBox.h}`,role:`img`,"aria-label":n,children:[s.cells.map(e=>(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`rect`,{"data-band":e.band,x:e.x,y:e.y,width:s.cell.w,height:s.cell.h,rx:3,fill:mm[e.band],stroke:`var(--line)`}),(0,H.jsx)(gm,{x:e.x,y:e.y,w:s.cell.w,h:s.cell.h,ink:hm[e.band]})]},e.index)),(0,H.jsx)(`line`,{x1:s.axis.x0,x2:s.axis.x1,y1:s.axis.y,y2:s.axis.y,stroke:`var(--line)`}),s.axis.ticks.map(e=>(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`line`,{x1:e.x,x2:e.x,y1:s.axis.y,y2:s.axis.y+5,stroke:`var(--line)`}),(0,H.jsx)(`text`,{x:e.x,y:s.axis.y+18,textAnchor:`middle`,children:e.age})]},e.age)),s.marker&&(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`line`,{x1:s.marker.x,x2:s.marker.x,y1:s.axis.y-14,y2:s.axis.y,stroke:`var(--ink)`,strokeWidth:2}),(0,H.jsx)(`text`,{"data-marker":!0,className:`lbl`,x:s.marker.x,y:s.axis.y+34,textAnchor:`middle`,children:i(s.marker.age)})]}),(0,H.jsx)(`text`,{x:10,y:s.captionY,children:r})]})})}function vm(){let[e,t]=(0,_.useState)(17),n=(0,_.useId)(),r=wa(`intro.cag.strip.label`),i=wa(`intro.cag.axis`),a=wa(`intro.cag.marker`),o=wa(`intro.cag.slider.valuetext`,{n:e});return(0,H.jsxs)(`div`,{className:`repeat`,children:[(0,H.jsxs)(`div`,{className:`ctl`,children:[(0,H.jsx)(W,{k:`intro.cag.slider`,as:`label`,htmlFor:`${n}-n`}),(0,H.jsx)(`input`,{type:`range`,id:`${n}-n`,min:10,max:60,step:1,value:e,"aria-valuetext":o,onChange:e=>t(Number(e.target.value))}),(0,H.jsx)(`b`,{className:`count`,children:e})]}),(0,H.jsxs)(`div`,{className:`legend`,"aria-hidden":`true`,children:[(0,H.jsx)(W,{k:`intro.cag.legend.typical`,as:`span`,className:`l-typical`}),(0,H.jsx)(W,{k:`intro.cag.legend.reduced`,as:`span`,className:`l-reduced`}),(0,H.jsx)(W,{k:`intro.cag.legend.full`,as:`span`,className:`l-full`})]}),(0,H.jsx)(_m,{n:e,label:r,axisCaption:i,markerText:e=>xa(a,{age:Math.round(e)})}),(0,H.jsx)(W,{k:`intro.cag.reading.${um(e)}`,as:`p`,className:`read`,"aria-live":`polite`})]})}function ym(e,t){return e.children.length>=12?e:{children:[...e.children,t()<.5]}}var bm=e=>e.children.filter(Boolean).length;function xm({draw:e=Math.random}){let t=U(),[n,r]=(0,_.useState)({children:[]}),i=(0,_.useRef)(null),a=(0,_.useRef)(null),o=(0,_.useRef)(null),s=n.children.length,c=bm(n);return(0,_.useLayoutEffect)(()=>{let e=o.current,t=i.current,n=a.current;if(!e||!t||!n)return;let r=[...t.children];if(r.length===0){e.style.display=`none`;return}let s=t.getBoundingClientRect(),c=n.getBoundingClientRect(),l=c.left+c.width/2-s.left,u=r[0].getBoundingClientRect(),d=r[r.length-1].getBoundingClientRect(),f=Math.min(l,u.left-s.left+u.width/2),p=Math.max(l,d.left-s.left+d.width/2);e.style.display=``,e.style.left=`${f}px`,e.style.width=`${Math.max(2,p-f)}px`},[s]),(0,H.jsxs)(`div`,{className:`pedigree`,role:`group`,"aria-label":t(`intro.pedigree.label`),children:[(0,H.jsxs)(`div`,{className:`tree`,children:[(0,H.jsxs)(`div`,{className:`parents`,ref:a,children:[(0,H.jsxs)(`div`,{className:`parent`,children:[(0,H.jsx)(Yp,{marked:!0,label:t(`intro.pedigree.carrier`)}),(0,H.jsx)(W,{k:`intro.pedigree.carrier`,as:`small`})]}),(0,H.jsx)(`div`,{className:`pline`,"aria-hidden":`true`}),(0,H.jsxs)(`div`,{className:`parent`,children:[(0,H.jsx)(Yp,{marked:!1,label:t(`intro.pedigree.other`)}),(0,H.jsx)(W,{k:`intro.pedigree.other`,as:`small`})]})]}),(0,H.jsxs)(`div`,{className:`row`,children:[(0,H.jsx)(`div`,{className:`sib`,"aria-hidden":`true`,ref:o}),(0,H.jsx)(`div`,{className:`kids`,ref:i,children:n.children.map((e,n)=>(0,H.jsx)(`div`,{className:`kid`,children:(0,H.jsx)(Yp,{marked:e,label:t(e?`intro.pedigree.child.carrier`:`intro.pedigree.child.other`)})},n))})]})]}),(0,H.jsxs)(`div`,{className:`btnrow`,children:[(0,H.jsx)(`button`,{type:`button`,className:`btn`,disabled:s>=12,onClick:()=>r(t=>ym(t,e)),children:(0,H.jsx)(W,{k:`intro.pedigree.add`,as:`span`})}),(0,H.jsx)(`button`,{type:`button`,className:`btn ghost`,onClick:()=>r({children:[]}),children:(0,H.jsx)(W,{k:`intro.pedigree.reset`,as:`span`})})]}),(0,H.jsx)(`p`,{className:`tally`,"aria-live":`polite`,children:s===0?(0,H.jsx)(W,{k:`intro.pedigree.none`,as:`span`}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(W,{k:`intro.pedigree.tally`,vars:{k:c,n:s},as:`span`}),` `,(0,H.jsx)(W,{k:s>=6?`intro.pedigree.runs`:`intro.pedigree.fresh`,as:`span`})]})}),(0,H.jsx)(W,{k:`intro.pedigree.note`,as:`p`,className:`quiet`})]})}var Sm=[{key:`before`,label:`intro.pair.before`,alt:`intro.pair.alt.before`,orbit:`/hd-platform/assets/pair-orbit-0-Q6USGaBN.png`,coronal:`/hd-platform/assets/pair-coronal-0-ahE9v28a.png`,axial:`/hd-platform/assets/pair-axial-0-BtTXwYR6.png`},{key:`after`,label:`intro.pair.after`,alt:`intro.pair.alt.after`,orbit:`/hd-platform/assets/pair-orbit-30-B3TedEMl.png`,coronal:`/hd-platform/assets/pair-coronal-30-C6Rsd0RW.png`,axial:`/hd-platform/assets/pair-axial-30-Cph9SpRj.png`}];function Cm(){let e=U();return(0,H.jsxs)(`div`,{className:`pair`,role:`group`,"aria-label":e(`intro.pair.label`),children:[(0,H.jsx)(`div`,{className:`cols`,children:Sm.map(t=>(0,H.jsxs)(`div`,{className:`col`,children:[(0,H.jsx)(W,{k:t.label,as:`b`}),(0,H.jsx)(`img`,{src:t.orbit,alt:e(t.alt),width:318,height:281,className:`orbit`}),(0,H.jsxs)(`div`,{className:`cuts`,children:[(0,H.jsx)(`img`,{src:t.coronal,alt:``,width:228,height:184,loading:`lazy`}),(0,H.jsx)(`img`,{src:t.axial,alt:``,width:184,height:216,loading:`lazy`})]})]},t.key))}),(0,H.jsx)(W,{k:`intro.pair.note`,as:`p`,className:`quiet`})]})}function wm({bands:e,step:t=`quarter`,onPick:n}){return(0,H.jsx)(`div`,{className:`stairs step-${t}`,children:e.map(e=>{let t={"--from":String(e.n+1)},r=(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{className:`n`,...e.labelAttrs,children:e.label}),e.lead,(0,H.jsx)(`span`,{className:`nm`,...e.nameAttrs,children:e.name}),e.trail!==void 0&&(0,H.jsx)(`span`,{className:`at`,children:e.trail}),e.sub!==void 0&&(0,H.jsx)(`span`,{className:`sub`,children:e.sub})]});return(0,H.jsx)(`div`,{className:`tl-band stage-${e.n}`,"data-lit":e.lit===!1?void 0:``,children:n?(0,H.jsx)(`button`,{type:`button`,style:t,"aria-pressed":e.pressed,onClick:()=>n(e.n),children:r}):(0,H.jsx)(`div`,{style:t,children:r})},e.n)})})}var Tm=[`intro.lanes.gene`,`intro.lanes.l1`,`intro.lanes.l2`,`intro.lanes.l3`],Em=[`putamen`,`caudate`,`tms`,`sdmt`,`tfc`,`is`],Dm=[0,1,2,3];function Om({age:e}){let t=U(),n=Lp(),r=Rp(e,n),i=Object.fromEntries(Em.map(e=>[e,t(`staging.landmark.${e}.label`)])),a=Dm.map(r=>{let i=r===0?null:n[r-1],a=i===null||e>=i;return{n:r,label:t(`staging.stage.label`,{n:r}),labelAttrs:G(`staging.stage.label`),name:(0,H.jsx)(W,{k:Tm[r]}),nameAttrs:G(Tm[r]),trail:i===null?t(`intro.lanes.birth`):t(a?`intro.lanes.from`:`intro.lanes.reach`,{age:i}),sub:r===0?(0,H.jsxs)(H.Fragment,{children:[t(`intro.lanes.formal`,{name:t(`staging.stage0.name`)}),` — `,t(`intro.lanes.stage0.note`)]}):t(`intro.lanes.quoted`,{name:t(`staging.stage${r}.name`)}),lit:a}});return(0,H.jsxs)(`div`,{className:`lanes`,role:`group`,"aria-label":t(`intro.lanes.label`),children:[(0,H.jsx)(wm,{bands:a,step:`shallow`}),(0,H.jsxs)(`p`,{className:`stage`,"aria-live":`polite`,children:[(0,H.jsx)(W,{k:`intro.lanes.at`,vars:{age:e},as:`span`}),` `,(0,H.jsx)(W,{k:`intro.lanes.stage${r}`,as:`b`,className:`stage-${r}`}),` `,(0,H.jsxs)(`span`,{className:`quiet`,children:[(0,H.jsx)(W,{k:`intro.lanes.formal`,vars:{name:t(`staging.stage${r}.name`)},as:`span`}),r===0&&(0,H.jsxs)(H.Fragment,{children:[` — `,(0,H.jsx)(W,{k:`intro.lanes.stage0.note`,as:`span`})]})]})]}),(0,H.jsx)(W,{k:`intro.lanes.measured`,as:`p`,className:`quiet measured`,vars:i})]})}var km={people:100,change:30,picked:40,hit:24,seed:42};function Am(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function jm(e){let t=Am(e.seed),n=Array.from({length:e.people},(e,t)=>t);for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}let r=Array.from({length:e.people},()=>({changes:!1,picked:!1})),i=n.slice(0,e.change),a=n.slice(e.change);for(let e of i)r[e].changes=!0;for(let t of i.slice(0,e.hit))r[t].picked=!0;for(let t of a.slice(0,e.picked-e.hit))r[t].picked=!0;return r}var Mm=(e,t)=>`${Math.round(100*e/t)}%`;function Nm(){let e=U(),t=(0,_.useId)(),n=km,r=(0,_.useMemo)(()=>jm(n),[n]),[i,a]=(0,_.useState)(50),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(!1),u=c?n.picked:n.people,d=c?n.hit:n.change;return(0,H.jsxs)(`div`,{className:`trial`,role:`group`,"aria-label":e(`intro.trial.label`),children:[(0,H.jsxs)(`div`,{className:`ctl`,children:[(0,H.jsx)(W,{k:`intro.trial.guess`,as:`label`,htmlFor:`${t}-guess`}),(0,H.jsx)(`input`,{type:`range`,id:`${t}-guess`,min:0,max:100,step:5,value:i,disabled:o,"aria-valuetext":e(`intro.trial.guess.valuetext`,{n:i}),onChange:e=>a(Number(e.target.value))}),(0,H.jsx)(`b`,{children:i})]}),(0,H.jsx)(`div`,{className:`crowd`,role:`img`,"aria-label":e(`intro.trial.label`),children:r.map((e,t)=>(0,H.jsx)(`span`,{"data-changes":o&&e.changes||void 0,"data-picked":c&&e.picked||void 0,"data-out":c&&!e.picked||void 0,children:(0,H.jsx)(Yp,{marked:!1,className:`dot`})},t))}),(0,H.jsxs)(`div`,{className:`btnrow`,children:[!o&&(0,H.jsx)(`button`,{type:`button`,className:`btn`,onClick:()=>s(!0),children:(0,H.jsx)(W,{k:`intro.trial.reveal`,as:`span`})}),o&&(0,H.jsxs)(`div`,{className:`toggle`,role:`group`,children:[(0,H.jsx)(`button`,{type:`button`,"aria-pressed":!c,onClick:()=>l(!1),children:(0,H.jsx)(W,{k:`intro.trial.everyone`,as:`span`})}),(0,H.jsx)(`button`,{type:`button`,"aria-pressed":c,onClick:()=>l(!0),children:(0,H.jsx)(W,{k:`intro.trial.model`,as:`span`})})]})]}),o&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`div`,{className:`stat`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`b`,{children:u}),(0,H.jsx)(W,{k:`intro.trial.tile.people`,as:`span`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`b`,{children:d}),(0,H.jsx)(W,{k:`intro.trial.tile.change`,as:`span`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`b`,{children:Mm(d,u)}),(0,H.jsx)(W,{k:`intro.trial.tile.share`,as:`span`})]})]}),(0,H.jsx)(`p`,{className:`read`,"aria-live":`polite`,children:c?(0,H.jsx)(W,{k:`intro.trial.read.model`,as:`span`}):(0,H.jsx)(W,{k:`intro.trial.read.reveal`,vars:{guess:i,n:n.change},as:`span`})})]}),(0,H.jsx)(W,{k:`intro.trial.illustrative`,as:`p`,className:`quiet`})]})}var Pm=[1,2,3,4,5,6];function Fm(e,t){switch(e){case 1:return(0,H.jsx)($p,{});case 2:return(0,H.jsx)(vm,{});case 3:return(0,H.jsx)(xm,{});case 4:return(0,H.jsx)(Cm,{});case 5:return(0,H.jsx)(Om,{age:t});case 6:return(0,H.jsx)(Nm,{});default:return null}}function Im({open:e,onOpen:t,age:n}){let r=U(),[i,a]=(0,_.useState)(()=>new Set(e===null?[]:[e]));e!==null&&!i.has(e)&&a(new Set(i).add(e));let o=(0,_.useRef)({}),s=(0,_.useRef)({}),c=e=>t(e),l=e=>{(0,qp.flushSync)(()=>c(e+1)),s.current[e+1]?.focus({preventScroll:!0}),o.current[e+1]?.scrollIntoView?.({block:`start`})};return(0,H.jsx)(`ol`,{className:`qs`,"aria-label":r(`intro.q.list`),children:Pm.map(t=>{let a=e===t,u=`q${t}-panel`;return(0,H.jsxs)(`li`,{className:`q`,"data-open":a||void 0,ref:e=>{o.current[t]=e},children:[(0,H.jsx)(`h2`,{children:(0,H.jsxs)(`button`,{type:`button`,ref:e=>{s.current[t]=e},"aria-expanded":a,"aria-controls":u,onClick:()=>c(a?null:t),children:[(0,H.jsx)(W,{k:`intro.q${t}.title`,as:`span`}),(0,H.jsx)(`span`,{className:`pm`,"aria-hidden":`true`})]})}),(0,H.jsx)(W,{k:`intro.q${t}.summary`,as:`p`,className:`sum`}),(0,H.jsx)(`div`,{className:`qpanel`,id:u,hidden:!a,children:i.has(t)&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(W,{k:`intro.q${t}.body`,as:`p`,className:`lead`}),Fm(t,n),(0,H.jsx)(W,{k:`intro.q${t}.notice`,as:`p`,className:`notice`}),t<6&&(0,H.jsx)(`p`,{className:`next`,children:(0,H.jsx)(`button`,{type:`button`,className:`linklike`,onClick:()=>l(t),children:(0,H.jsx)(W,{k:`intro.q.next`,vars:{title:r(`intro.q${t+1}.title`)},as:`span`})})})]})})]},t)})})}var Lm=.26,Rm=e=>Math.round(e*Lm)+8;function zm(e,t,n=96){return t?e<=n+144:e<=n}function Bm(e,t=!1){let[n,r]=(0,_.useState)(!1);return(0,_.useLayoutEffect)(()=>{let n=0,i=()=>{n=0;let i=e.current;if(!i)return;let a=i.getBoundingClientRect().top,o=t?Rm(window.innerHeight):96;r(e=>zm(a,e,o))},a=()=>{n||=window.requestAnimationFrame(i)};return window.addEventListener(`scroll`,a,{passive:!0}),window.addEventListener(`resize`,a),i(),()=>{window.removeEventListener(`scroll`,a),window.removeEventListener(`resize`,a),n&&window.cancelAnimationFrame(n)}},[e,t]),n}var Vm={signs:1,cag:2,pedigree:3,pair:4,lanes:5,trial:6},Hm={years:4,age:5};function Um(e){let t=e.split(`.`);if(t[0]!==`intro`)return;let n=t[1]??``,r=/^q([1-6])$/.exec(n);if(r)return Number(r[1]);if(n in Vm)return Vm[n];if(n===`cap`){if(t[2]==="default")return null;let e=/^q([1-6])$/.exec(t[2]??``);return e?Number(e[1]):void 0}if(n===`hero`&&t[2]!==void 0&&t[2]in Hm)return Hm[t[2]]}var Wm=`hd:copy-focus`;function Gm(e,t){(0,_.useEffect)(()=>{if(!e)return;let n=e=>{if(e.source!==window.parent||e.origin!==window.location.origin)return;let n=e.data;if(!n||n.type!==Wm||typeof n.key!=`string`)return;let r=Um(n.key);r!==void 0&&t(r)};return window.addEventListener(`message`,n),()=>window.removeEventListener(`message`,n)},[e,t])}function Km(){return(0,H.jsxs)(`div`,{className:`three`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(Ri,{to:`/prognostic`,children:(0,H.jsx)(W,{k:`intro.models.prognostic.title`,as:`b`})}),(0,H.jsx)(W,{k:`intro.models.prognostic.body`,as:`p`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(Ri,{to:`/shape`,children:(0,H.jsx)(W,{k:`intro.models.shape.title`,as:`b`})}),(0,H.jsx)(W,{k:`intro.models.shape.body`,as:`p`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(Ri,{to:`/brain-age`,children:(0,H.jsx)(W,{k:`intro.models.brainage.title`,as:`b`})}),(0,H.jsx)(W,{k:`intro.models.brainage.body`,as:`p`})]})]})}function qm(e){let t=(0,_.useContext)(fa);return(0,_.useMemo)(()=>{let n=new Set;for(let r of Object.keys(t)){if(!r.startsWith(e))continue;let t=r.slice(e.length),i=/^([a-z0-9]+)\.(term|def)$/.exec(t);i&&n.add(i[1])}return[...n].sort((e,t)=>e.localeCompare(t,void 0,{numeric:!0})).filter(n=>t[`${e}${n}.term`]!==void 0&&t[`${e}${n}.def`]!==void 0).map(n=>({id:n,term:t[`${e}${n}.term`],def:t[`${e}${n}.def`]}))},[t,e])}function Jm(){let e=qm(`intro.glossary.`);return(0,H.jsx)(`dl`,{className:`glossary`,children:e.map(e=>(0,H.jsxs)(_.Fragment,{children:[(0,H.jsx)(`dt`,{...G(`intro.glossary.${e.id}.term`),children:va(e.term)}),(0,H.jsx)(`dd`,{...G(`intro.glossary.${e.id}.def`),children:ba(e.def)})]},e.id))})}function Ym(){return(0,H.jsxs)(`div`,{className:`support`,children:[(0,H.jsx)(W,{k:`intro.support.title`,as:`h3`}),(0,H.jsx)(W,{k:`intro.support.body`,as:`p`})]})}var Xm=`hd.basics`;function Zm(e,t){try{let n=e?.getItem(Xm);if(!n)return t;let r=JSON.parse(n),i=r.open===null||typeof r.open==`number`&&r.open>=1&&r.open<=6?r.open:t.open,a=typeof r.years==`number`&&r.years>=0&&r.years<=30?r.years:t.years,o=typeof r.age==`number`&&r.age>=20&&r.age<=70?r.age:t.age;return{open:i??null,years:a,age:o}}catch{return t}}function Qm(e,t){try{e?.setItem(Xm,JSON.stringify(t))}catch{}}var $m=`(max-width: 900px)`;function eh({loader:e,editorFocus:t}={}){let[n]=(0,_.useState)(()=>Zm(typeof sessionStorage>`u`?null:sessionStorage,{open:1,years:0,age:20})),[r,i]=(0,_.useState)(n.open);Gm(t??!1,i);let[a,o]=(0,_.useState)(n.years),[s,c]=(0,_.useState)(n.age);(0,_.useEffect)(()=>{Qm(typeof sessionStorage>`u`?null:sessionStorage,{open:r,years:a,age:s})},[r,a,s]);let l=(0,_.useRef)(null);(0,_.useLayoutEffect)(()=>{let e=document.querySelector(`header.top`),t=l.current;if(!e||!t||typeof ResizeObserver>`u`)return;let n=()=>t.style.setProperty(`--head`,`${e.getBoundingClientRect().height}px`);n();let r=new ResizeObserver(n);return r.observe(e),()=>r.disconnect()},[]);let u=(0,_.useRef)(null),d=Uf($m),f=Bm(u,d),p=Up(f?r:null,a,s),m=Up(r,a,s).captionKey;return(0,H.jsxs)(`div`,{className:`wrap page intro`,children:[(0,H.jsxs)(`div`,{className:`spine${f?` docked`:``}`,ref:l,children:[(0,H.jsx)(`div`,{className:`dock`,children:(0,H.jsxs)(`div`,{className:`dock-in`,children:[(0,H.jsx)(`section`,{className:`hero-text`,"aria-labelledby":`intro-h1`,children:(0,H.jsx)(Ua,{titleKey:`intro.hero.title`,ledeKey:`intro.hero.lede`,titleId:`intro-h1`})}),(0,H.jsx)(Kp,{control:p.control,progress:p.t,years:a,age:s,onYears:o,onAge:c,captionKey:p.captionKey,liveCaptionKey:m,phone:d,loader:e})]})}),(0,H.jsx)(`div`,{className:`eqs`,ref:u,children:(0,H.jsx)(Im,{open:r,onOpen:i,age:s})})]}),(0,H.jsx)(th,{})]})}function th(){return(0,H.jsxs)(`section`,{className:`closing`,"aria-labelledby":`intro-platform`,children:[(0,H.jsx)(W,{k:`intro.platform.title`,as:`h2`,id:`intro-platform`}),(0,H.jsx)(Km,{}),(0,H.jsx)(W,{k:`intro.platform.privacy`,as:`p`,className:`callout`}),(0,H.jsx)(Ym,{}),(0,H.jsx)(W,{k:`intro.glossary.title`,as:`h2`}),(0,H.jsx)(Jm,{}),(0,H.jsx)(W,{k:`intro.sources`,as:`p`,className:`sources`})]})}var nh=[`putamen`,`caudate`,`tms`,`sdmt`,`tfc`,`is`],rh={putamen:{stage:1,direction:`below`,min:0,max:12,step:.01,icon:`i-putamen`},caudate:{stage:1,direction:`below`,min:0,max:10,step:.01,icon:`i-caudate`},tms:{stage:2,direction:`above`,min:0,max:124,step:1,icon:`i-tms`},sdmt:{stage:2,direction:`below`,min:0,max:110,step:1,icon:`i-sdmt`},tfc:{stage:3,direction:`below`,min:0,max:13,step:1,icon:`i-tfc`},is:{stage:3,direction:`below`,min:10,max:100,step:5,icon:`i-is`}},ih={min:1,max:120},ah=[[20,6.01,4.3,6,32,45,13,100],[25,5.92,4.23,6,32,44,13,100],[30,5.84,4.17,6,32,44,13,100],[35,5.75,4.1,6,32,44,13,100],[40,5.66,4.04,6,31,43,13,100],[45,5.57,3.97,6,30,42,13,100],[50,5.48,3.9,6,29,41,13,100],[55,5.39,3.84,6,27,39,13,100],[60,5.31,3.77,7,24,36,12,99],[65,5.22,3.71,9,21,33,12,98],[70,5.13,3.64,10,18,30,11,96],[75,5.04,3.58,12,14,26,11,92],[80,4.95,3.51,14,10,22,10,89],[85,4.87,3.45,17,6,18,9,85],[90,4.78,3.38,20,2,14,8,81]].map(e=>({age:e[0],putamen:e[1],caudate:e[2],tms:e[3],sdmtLow:e[4],sdmtHigh:e[5],tfc:e[6],is:e[7]})),oh={min:36,max:60},sh=[`putamen`,`caudate`,`tms`,`sdmtLow`,`sdmtHigh`,`tfc`,`is`];function ch(e){let t=ah[0],n=ah[ah.length-1],r=Math.min(Math.max(e,t.age),n.age),i=t,a=n;for(let e=0;e<ah.length-1;e++)if(r>=ah[e].age&&r<=ah[e+1].age){i=ah[e],a=ah[e+1];break}let o=a.age===i.age?0:(r-i.age)/(a.age-i.age),s={};for(let e of sh)s[e]=o===0?i[e]:o===1?a[e]:i[e]+(a[e]-i[e])*o;return s}function lh(e){return e==null||typeof e==`string`&&e.trim()===``}function uh(e){if(lh(e))return null;let t=typeof e==`number`?e:Number(String(e).trim());return Number.isFinite(t)?t:null}function dh(e){let t=uh(e.cag);return t===null?{kind:`missing`,cag:null}:{kind:t>=40?`full`:`reduced`,cag:t}}function fh(e){return Math.floor(e-.1)+1}function ph(e){let t=ch(Number(e.age)),n=e.education===`low`?`low`:`high`,r={};for(let i of nh){let a=rh[i],o=i===`sdmt`?n===`low`?t.sdmtLow:t.sdmtHigh:t[i],s=uh(e[i]),c=null;s!==null&&(c=i===`tms`?s>o-.1:a.direction===`below`?s<o:s>o),r[i]={value:s,cutoff:o,met:c,direction:a.direction,stage:a.stage}}let i=e=>{let t=nh.filter(t=>rh[t].stage===e).map(e=>r[e].met).filter(e=>e!==null);return t.length===0?null:t.some(Boolean)};return{cutoffs:t,education:n,landmarks:r,eligibility:{stage1:i(1),stage2:i(2),stage3:i(3)}}}function mh(e){let t=[e.stage1,e.stage2,e.stage3],n=t.every(e=>e===null)?null:t.filter(e=>e===!0).length,r=t.some(e=>e===null),i=!0;for(let e=0;e<3;e++)if(t[e]===!0)for(let n=0;n<e;n++)t[n]===!1&&(i=!1);return{stage:n,sequential:i,incomplete:r}}var hh={"000":0,100:1,110:2,111:3};function gh(e){let t=[e.stage1,e.stage2,e.stage3];if(t.some(e=>e==null))return{stage:null,pattern:null,classifiable:!1,missing:!0};let n=t.map(e=>e?`1`:`0`).join(``),r=Object.hasOwn(hh,n)?hh[n]:null;return{stage:r,pattern:n,classifiable:r!==null,missing:!1}}function _h(e){let t=nh.filter(t=>e.landmarks[t].value===null);return t.length?{stage:null,pattern:null,classifiable:!1,missing:!0,missingKeys:t}:{...gh(e.eligibility),missingKeys:t}}function vh(e){return[1,2,3].filter(t=>e.eligibility[`stage${t}`]===!1&&nh.some(n=>rh[n].stage===t&&e.landmarks[n].value===null))}function yh(e,t,n){let r=(e-t)/n;return Math.abs(r-Math.round(r))<1e-6}function bh(e){let t=[],n=uh(e.age);if((n===null||!Number.isInteger(n)||n<ih.min||n>ih.max)&&t.push({key:`age`,min:ih.min,max:ih.max,step:1}),!lh(e.cag)){let n=uh(e.cag);(n===null||!Number.isInteger(n)||n<oh.min||n>oh.max)&&t.push({key:`cag`,min:oh.min,max:oh.max,step:1})}for(let n of nh){let r=e[n];if(lh(r))continue;let{min:i,max:a,step:o}=rh[n],s=uh(r);(s===null||s<i||s>a||!yh(s,i,o))&&t.push({key:n,min:i,max:a,step:o})}return t}var xh=e=>Number.isInteger(e)&&e%5==0&&e>=20&&e<=90;function Sh(e,t){return e===`tms`?String(fh(t)):e===`putamen`||e===`caudate`?t.toFixed(3).replace(/0$/,``):t.toFixed(1).replace(/\.0$/,``)}function Ch(e){return e===`tms`?`staging.calc.dir.atorabove`:rh[e].direction===`below`?`staging.calc.dir.below`:`staging.calc.dir.above`}function wh({ev:e,count:t,strict:n,age:r}){let i=[],a=vh(e);i.push({key:`staging.calc.step.age`,stage:null,final:!1,vars:{age:{value:r},interp:xh(r)?``:{join:[` `,{key:`staging.calc.step.age.interp`}]},column:{key:e.education===`low`?`staging.calc.step.column.low`:`staging.calc.step.column.high`}}});for(let t of[1,2,3]){for(let n of nh.filter(e=>rh[e].stage===t)){let a=e.landmarks[n],o={key:`staging.landmark.${n}.label`};if(a.value===null){i.push({key:`staging.calc.step.novalue`,stage:t,final:!1,vars:{label:o}});continue}i.push({key:a.met?`staging.calc.step.met`:`staging.calc.step.notmet`,stage:t,final:!1,vars:{label:o,value:{value:a.value},cutoff:{value:n===`tms`?fh(a.cutoff):Sh(n,a.cutoff)},dir:{key:Ch(n)},stage:t,age:r}})}let n=e.eligibility[`stage${t}`];i.push({key:n===null?`staging.calc.step.cond.unknown`:n?`staging.calc.step.cond.met`:a.includes(t)?`staging.calc.step.cond.partial`:`staging.calc.step.cond.notmet`,stage:t,final:!1,vars:{stage:t}})}let o=t.stage??0;return i.push({key:`staging.calc.step.final`,stage:o,final:!0,vars:{n:o,nonsequential:t.sequential?``:{key:`staging.calc.step.final.nonsequential`},incomplete:t.incomplete?{key:`staging.calc.step.final.incomplete`}:``,partial:a.length?{key:`staging.calc.step.final.partial`}:``}}),n&&n.pattern!==null&&i.push({key:`staging.calc.step.strict`,stage:o,final:!0,vars:{pattern:{value:n.pattern},n:o}}),i}function Th(e,t){return e===`putamen`||e===`caudate`?t.toFixed(2):t.toFixed(0)}function Eh(e,t){return`${e===`tms`?`≥`:rh[e].direction===`below`?`<`:`>`} ${Sh(e,t)}`}function Dh(){return(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,style:{display:`none`},"aria-hidden":`true`,children:[(0,H.jsx)(`symbol`,{id:`i-cag`,viewBox:`0 0 48 48`,children:(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M35 9.22967V6H33V9H15V6H13V9.22967C13 14.6524 15.5895 19.6466 19.8037 22.7875C20.4275 22.3933 21.0782 22.0334 21.7536 21.7107C19.8831 20.4891 18.329 18.8727 17.1851 17H30.8149C29.2395 19.5789 26.8863 21.6719 24 22.9172C23.9947 22.9194 23.9894 22.9217 23.9841 22.924C23.8665 22.9746 23.748 23.0238 23.6286 23.0715C22.9531 23.3417 22.302 23.6524 21.6777 24C16.8813 26.6708 13.6672 31.5245 13.0925 37H13V38.7703V39V42H15V39H33V42H35V39V38.7703V37H34.9075C34.4113 32.2723 31.9474 28.0082 28.1963 25.2125C27.5725 25.6067 26.9218 25.9666 26.2464 26.2893C28.1169 27.5109 29.671 29.1273 30.8149 31H17.1851C18.7605 28.4211 21.1137 26.3281 24 25.0828C24.0053 25.0806 24.0106 25.0783 24.0159 25.076C24.1335 25.0254 24.252 24.9762 24.3714 24.9285C25.0469 24.6583 25.698 24.3476 26.3223 24C31.63 21.0445 35 15.4159 35 9.22967ZM31.8385 33H16.1615C15.6308 34.2636 15.2711 35.608 15.1051 37H32.8949C32.7289 35.608 32.3692 34.2636 31.8385 33ZM16.1615 15H31.8385C32.3692 13.7364 32.7289 12.392 32.8949 11H15.1051C15.2711 12.392 15.6308 13.7364 16.1615 15Z`})}),(0,H.jsx)(`symbol`,{id:`i-age`,viewBox:`0 0 24 24`,children:(0,H.jsx)(`path`,{fill:`currentColor`,d:`M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2.2a7.8 7.8 0 1 1 0 15.6 7.8 7.8 0 0 1 0-15.6zM11 6h2v6.4l3.8 2.2-1 1.7L11 13.6V6z`})}),(0,H.jsx)(`symbol`,{id:`i-putamen`,viewBox:`0 0 24 24`,children:(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M12 1.6c4.8 2.6 7.6 6.8 7.6 10.4s-2.8 7.8-7.6 10.4C7.2 19.8 4.4 15.6 4.4 12S7.2 4.2 12 1.6zm-.9 4.6h1.8v11.6h-1.8V6.2z`})}),(0,H.jsx)(`symbol`,{id:`i-caudate`,viewBox:`0 0 24 24`,children:(0,H.jsx)(`path`,{fill:`currentColor`,d:`M9 2.5c4.4 0 7.5 3 7.5 6.9 0 2.6-1.4 4.7-3.6 5.8 3.4 1.2 6 3.9 7.3 7.6l-2.2.8c-1.3-3.6-4.3-6-8.2-6.4-.9-.1-1.7 0-2.5.2C4.1 16.9 2 14.2 2 10.8 2 6 5 2.5 9 2.5z`})}),(0,H.jsxs)(`symbol`,{id:`i-tms`,viewBox:`0 0 48 48`,children:[(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M18.5739 31.4528C18.9111 31.3634 19.2705 31.4562 19.5223 31.6977L22.7709 34.8136C23.0409 35.0726 23.1437 35.4607 23.0374 35.8194L22.3281 38.2129C22.1511 38.8104 21.7924 39.3379 21.3018 39.7222L16.6587 43.3594C15.3544 44.3811 13.4688 44.1521 12.4471 42.8478C11.4253 41.5435 11.6544 39.6578 12.9587 38.6361L16.8476 35.5896L17.8713 32.1353C17.9704 31.8008 18.2367 31.5422 18.5739 31.4528ZM19.3225 34.2773L18.6745 36.464C18.6154 36.6632 18.4959 36.839 18.3323 36.9671L14.192 40.2105C13.7573 40.5511 13.6809 41.1796 14.0215 41.6144C14.3621 42.0492 14.9906 42.1255 15.4254 41.785L20.0685 38.1477C20.232 38.0196 20.3516 37.8438 20.4106 37.6446L20.9468 35.8353L19.3225 34.2773Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M28 12C29.6569 12 31 10.6569 31 9C31 7.34315 29.6569 6 28 6C26.3432 6 25 7.34315 25 9C25 10.6569 26.3432 12 28 12ZM28 14C30.7614 14 33 11.7614 33 9C33 6.23858 30.7614 4 28 4C25.2386 4 23 6.23858 23 9C23 11.7614 25.2386 14 28 14Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M21.7368 14.3643C23.1647 13.8336 24.6987 13.8648 26.0759 14.5769C27.3861 15.2543 28.2734 16.3996 28.8315 17.5982C29.0404 18.0466 29.2334 18.4654 29.4139 18.8569C29.8536 19.8107 30.2147 20.5936 30.5591 21.2779C31.0455 22.2445 31.4012 22.8107 31.7152 23.1766C31.9844 23.4902 32.2164 23.6493 32.5136 23.7654C32.8648 23.9026 33.4375 24.0281 34.4562 24.0586C35.9987 24.1049 37.2116 25.3928 37.1654 26.9353C37.1191 28.4778 35.8312 29.6908 34.2887 29.6445C32.9318 29.6038 31.6546 29.4295 30.4805 28.9709C29.252 28.491 28.283 27.7581 27.4747 26.8164C27.3788 26.7047 27.2856 26.5905 27.1948 26.4741L26.7923 28.5778L31.1594 32.8869C31.4375 33.1614 31.6551 33.4912 31.7978 33.855L34.2821 40.1846C34.8459 41.6211 34.1385 43.2426 32.702 43.8065C31.2654 44.3703 29.6439 43.6628 29.0801 42.2263L26.8123 36.4485L18.9534 28.6939C18.3431 28.0917 18.043 27.2426 18.1394 26.3907L18.4643 23.5202C17.5722 24.6741 16.8217 26.0607 16.2982 27.7011C15.829 29.1713 14.2568 29.9827 12.7867 29.5135C11.3166 29.0443 10.5051 27.4721 10.9743 26.002C12.7419 20.4639 16.7405 16.2932 21.7037 14.3768L21.7096 14.3745L21.7368 14.3643ZM22.4363 16.2379L22.4212 16.2437C18.0385 17.9369 14.4674 21.6354 12.8797 26.6101C12.7463 27.028 12.9769 27.4748 13.3948 27.6082C13.8126 27.7415 14.2595 27.5109 14.3929 27.093C15.3866 23.9795 17.1179 21.6246 19.1531 19.9623C19.4681 19.7051 19.9075 19.6642 20.2645 19.8589C20.6215 20.0536 20.8251 20.4452 20.7793 20.8493L20.1268 26.6156C20.0993 26.8577 20.1846 27.0991 20.3581 27.2702L28.3681 35.1738C28.4676 35.2721 28.5455 35.3901 28.5966 35.5203L30.9418 41.4956C31.102 41.9039 31.563 42.105 31.9712 41.9447C32.3796 41.7845 32.5806 41.3236 32.4204 40.9153L29.9361 34.5857C29.8955 34.4823 29.8337 34.3885 29.7546 34.3105L25.0074 29.6263C24.7698 29.3919 24.6649 29.0544 24.7276 28.7266L25.7083 23.6007C25.7882 23.1831 26.1233 22.8618 26.5438 22.7994C26.9643 22.737 27.3782 22.9473 27.5759 23.3237C28.0259 24.1807 28.4769 24.9133 28.9923 25.5138C29.6078 26.2309 30.3131 26.7584 31.2081 27.1079C32.0879 27.4516 33.113 27.6084 34.3486 27.6454C34.787 27.6586 35.1531 27.3138 35.1663 26.8754C35.1794 26.437 34.8347 26.0709 34.3962 26.0577C33.2568 26.0236 32.4319 25.8807 31.786 25.6284C31.1558 25.3822 30.66 25.0179 30.1976 24.4793C29.7224 23.9257 29.2798 23.1849 28.7725 22.1769C28.4111 21.4588 28.0366 20.6465 27.6035 19.7069L27.5979 19.6948C27.4172 19.3028 27.2256 18.8871 27.0185 18.4425C26.5887 17.5196 25.9671 16.7721 25.1573 16.3534C24.3296 15.9255 23.388 15.885 22.4363 16.2379Z`})]}),(0,H.jsxs)(`symbol`,{id:`i-sdmt`,viewBox:`0 0 48 48`,children:[(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M20 15C20 14.4477 20.4477 14 21 14H29C29.5523 14 30 14.4477 30 15C30 15.5523 29.5523 16 29 16H21C20.4477 16 20 15.5523 20 15Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M21 18C20.4477 18 20 18.4477 20 19C20 19.5523 20.4477 20 21 20H29C29.5523 20 30 19.5523 30 19C30 18.4477 29.5523 18 29 18H21Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M20 28C20 27.4477 20.4477 27 21 27H29C29.5523 27 30 27.4477 30 28C30 28.5523 29.5523 29 29 29H21C20.4477 29 20 28.5523 20 28Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M21 31C20.4477 31 20 31.4477 20 32C20 32.5523 20.4477 33 21 33H29C29.5523 33 30 32.5523 30 32C30 31.4477 29.5523 31 29 31H21Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 27C10 26.4477 10.4477 26 11 26H16C16.5523 26 17 26.4477 17 27V32C17 32.5523 16.5523 33 16 33H11C10.4477 33 10 32.5523 10 32V27ZM12 28V31H15V28H12Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M17.7071 15.7071C18.0976 15.3166 18.0976 14.6834 17.7071 14.2929C17.3166 13.9024 16.6834 13.9024 16.2929 14.2929L13 17.5858L11.7071 16.2929C11.3166 15.9024 10.6834 15.9024 10.2929 16.2929C9.90237 16.6834 9.90237 17.3166 10.2929 17.7071L13 20.4142L17.7071 15.7071Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 6C7.79086 6 6 7.79086 6 10V37.9992C6 40.2084 7.79086 41.9992 10 41.9992H30C32.2091 41.9992 34 40.2084 34 37.9992V10C34 7.79086 32.2091 6 30 6H10ZM8 10C8 8.89543 8.89543 8 10 8H30C31.1046 8 32 8.89543 32 10V37.9992C32 39.1038 31.1046 39.9992 30 39.9992H10C8.89543 39.9992 8 39.1038 8 37.9992V10Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M36 16C36 14.3431 37.3431 13 39 13C40.6569 13 42 14.3431 42 16V36.3028L39 40.8028L36 36.3028V16ZM39 15C38.4477 15 38 15.4477 38 16V18H40V16C40 15.4477 39.5523 15 39 15ZM39 37.1972L38 35.6972V20H40V35.6972L39 37.1972Z`})]}),(0,H.jsxs)(`symbol`,{id:`i-tfc`,viewBox:`0 0 48 48`,children:[(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M24.507 10.1381C24.1941 9.95398 23.8059 9.95398 23.493 10.1381L5.63105 20.6451L6.64509 22.369L24 12.1602L41.3549 22.369L42.369 20.6451L36 16.8986V12C36 11.4477 35.5523 11 35 11H32C31.4477 11 31 11.4477 31 12V13.9575L24.507 10.1381Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M14 25H25V31H14V25Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M24 14L10 22V36H5C4.44772 36 4 36.4477 4 37C4 37.5523 4.44772 38 5 38H41C41.5523 38 42 37.5523 42 37C42 36.4477 41.5523 36 41 36H38V22L24 14ZM24 16.3035L12 23.1606V36H28V25H34V36H36V23.1606L24 16.3035Z`})]}),(0,H.jsxs)(`symbol`,{id:`i-is`,viewBox:`0 0 48 48`,children:[(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M26.3427 14.9744C28.8209 14.9744 30.8299 12.9654 30.8299 10.4872C30.8299 8.00898 28.8209 6 26.3427 6C23.8645 6 21.8555 8.00898 21.8555 10.4872C21.8555 12.9654 23.8645 14.9744 26.3427 14.9744ZM26.3427 12.9744C27.7164 12.9744 28.8299 11.8608 28.8299 10.4872C28.8299 9.11355 27.7164 8 26.3427 8C24.9691 8 23.8555 9.11355 23.8555 10.4872C23.8555 11.8608 24.9691 12.9744 26.3427 12.9744Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 28C8.89543 28 8 28.8954 8 30V42H6V30C6 27.7909 7.79086 26 10 26H16.9113C16.4171 20.9691 17.4713 16.9171 20.5425 15.2686C20.5808 15.248 20.6205 15.23 20.6611 15.2146L20.6861 15.2051C21.992 14.7198 23.399 14.7474 24.6631 15.401C25.8646 16.0222 26.6745 17.0704 27.1819 18.1602C27.3695 18.563 27.543 18.9392 27.705 19.2907C28.0998 20.1471 28.4228 20.8475 28.7309 21.4597C29.1664 22.325 29.4811 22.8243 29.7547 23.143C29.9864 23.4129 30.181 23.5452 30.4307 23.6427C30.7308 23.7599 31.2318 23.8716 32.1398 23.8988C33.3799 23.936 34.392 24.8324 34.6224 26H38C40.2091 26 42 27.7909 42 30V42H40V30C40 28.8954 39.1046 28 38 28H34.2035C33.7163 28.698 32.8977 29.1443 31.9833 29.1168C30.7594 29.0801 29.6003 28.9228 28.5315 28.5053C28.163 28.3614 27.8201 28.1924 27.4997 28H25.3743L25.37 28.0225L29.2501 31.8511C29.51 32.1075 29.7132 32.4156 29.8465 32.7555L32.076 38.4359C32.6027 39.7778 31.9418 41.2925 30.5999 41.8192C29.258 42.3459 27.7432 41.685 27.2165 40.3431L25.1894 35.1782L18.1519 28.2342C18.0767 28.16 18.0066 28.0818 17.9416 28H10ZM20.7621 28L26.7451 33.9035C26.8447 34.0018 26.9225 34.1198 26.9736 34.25L29.0783 39.6124C29.2014 39.9261 29.5555 40.0806 29.8692 39.9575C30.1829 39.8344 30.3374 39.4803 30.2143 39.1666L27.9848 33.4862C27.9536 33.4067 27.9061 33.3347 27.8454 33.2748L23.5851 29.071C23.3475 28.8366 23.2425 28.4991 23.3052 28.1713L23.338 28H20.7621ZM23.7207 26L24.1854 23.5711C24.2652 23.1536 24.6003 22.8322 25.0208 22.7699C25.4413 22.7075 25.8553 22.9178 26.0529 23.2941C26.4552 24.0602 26.8558 24.71 27.3111 25.2405C27.8536 25.8725 28.473 26.3353 29.2591 26.6424C30.0336 26.9448 30.9406 27.0847 32.0433 27.1177C32.3801 27.1278 32.6614 26.863 32.6715 26.5261C32.6816 26.1893 32.4167 25.908 32.0798 25.8979C31.0511 25.8671 30.2979 25.7379 29.7031 25.5056C29.1205 25.2781 28.6619 24.9406 28.2371 24.4456C27.8024 23.9392 27.4007 23.2655 26.9444 22.3587C26.6193 21.7127 26.2825 20.9823 25.8942 20.14L25.8887 20.128C25.7265 19.7762 25.5546 19.4033 25.3689 19.0045C24.9898 18.1904 24.4455 17.54 23.7445 17.1775C23.0428 16.8147 22.2447 16.7727 21.4307 17.0624C19.5303 18.1277 18.4096 21.021 18.913 25.916C18.9157 25.942 18.921 25.9701 18.9293 26H23.7207Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M18.557 30.8997C18.3052 30.6582 17.9458 30.5654 17.6086 30.6548C17.2714 30.7442 17.0051 31.0028 16.906 31.3373L15.9229 34.6548L14.005 37.5439C13.0887 38.9243 13.4649 40.7861 14.8453 41.7025C16.2257 42.6188 18.0875 42.2426 19.0039 40.8622L21.1707 37.5981C21.3358 37.3494 21.4629 37.0774 21.5477 36.7912L22.0722 35.0214C22.1785 34.6627 22.0756 34.2746 21.8056 34.0156L18.557 30.8997ZM17.7978 35.3669L18.3572 33.4793L19.9815 35.0373L19.6301 36.223C19.6018 36.3184 19.5595 36.409 19.5045 36.4919L17.3376 39.7561C17.0321 40.2162 16.4115 40.3416 15.9514 40.0362C15.4913 39.7307 15.3659 39.1101 15.6713 38.65L17.6722 35.6359C17.7272 35.553 17.7695 35.4623 17.7978 35.3669Z`})]}),(0,H.jsxs)(`symbol`,{id:`i-brain`,viewBox:`0 0 48 48`,children:[(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M29.5844 22.8731C30.7438 22.8731 31.8763 22.5579 32.8338 21.9687C33.806 22.5568 34.9534 22.8651 36.1242 22.8529L39.8433 21.6331C40.8913 20.8544 41.6107 19.7749 41.8813 18.5754C42.1518 17.3758 41.9569 16.1289 41.3293 15.0433C40.7017 13.9577 39.6794 13.0993 38.4336 12.6118C38.1491 11.4505 37.4326 10.4117 36.4029 9.66789L32.7725 8.5228H32.3638C31.5563 7.46088 30.344 6.70341 28.9574 6.39438L21.1741 6C19.8803 6.09689 18.6603 6.58325 17.7105 7.38081C17.2617 7.28544 16.8023 7.23601 16.3412 7.23346C15.2247 7.23553 14.1327 7.52881 13.1971 8.0779C12.2615 8.62699 11.5222 9.40843 11.0685 10.3279L8.11115 12.216C7.37528 13.1146 6.97913 14.2026 6.98108 15.3194C6.9738 15.7865 7.04266 16.2519 7.18545 16.7009C6.40957 17.6083 5.99236 18.7234 6.00011 19.869C5.99826 21.1976 6.56142 22.4764 7.57375 23.4423C7.65545 24.3935 8.02424 25.3065 8.64022 26.0824C9.2562 26.8583 10.0959 27.4677 11.0685 27.8444C12.1891 28.4776 13.138 29.3292 13.8453 30.3364C14.5527 31.3437 15.0005 32.4811 15.1559 33.6649H22.7915V28.1391C22.7901 27.158 23.0938 26.1962 23.6682 25.3627C24.2425 24.5293 25.0645 23.8576 26.041 23.4238C26.5901 23.2345 26.7252 22.9796 26.8907 22.6673C27.001 22.4592 27.1249 22.2255 27.3937 21.9687C27.6273 22.1124 27.8083 22.2399 27.9652 22.3504C28.4518 22.6929 28.7077 22.8731 29.5844 22.8731ZM34.032 20.3449C34.5652 20.6333 35.18 20.807 35.8225 20.8411L38.8778 19.839C39.4357 19.3535 39.79 18.7515 39.9302 18.1296C40.0877 17.4314 39.9791 16.6979 39.5978 16.0384C39.2129 15.3726 38.5587 14.8026 37.7048 14.4685L36.738 14.0902L36.491 13.0818C36.3463 12.4911 35.9991 11.9204 35.4592 11.4615L32.4646 10.5169H31.3721L30.7718 9.72751C30.296 9.10182 29.5621 8.60824 28.6714 8.3766L21.21 7.99854C20.3583 8.08446 19.584 8.41337 18.9966 8.90662L18.2493 9.5341L17.2948 9.33129C16.9821 9.26484 16.6609 9.22992 16.3376 9.22763C15.5675 9.23033 14.828 9.43391 14.2094 9.79695C13.59 10.1604 13.1326 10.6586 12.862 11.207L12.6151 11.7075L9.48953 13.703C9.14804 14.2036 8.98012 14.7602 8.98108 15.3101L8.98111 15.3274L8.98084 15.3448C8.97696 15.5937 9.01352 15.844 9.09138 16.0889L9.42858 17.1491L8.70555 17.9948C8.22801 18.5533 7.99572 19.2069 8.00006 19.8496L8.00011 19.8577L8.0001 19.8659C7.99906 20.6151 8.31472 21.3791 8.95437 21.9894L9.50169 22.5116L9.56642 23.2653C9.61317 23.8096 9.82528 24.3527 10.2066 24.833C10.5897 25.3156 11.1317 25.7182 11.791 25.9736L11.9261 26.026L12.0524 26.0973C12.1986 26.1799 12.3426 26.2657 12.4843 26.3546L12.4781 26.3592C15.1968 28.0179 16.3504 30.4319 16.742 31.6663H17.354V24.3727L15.1507 22.4142L13.6552 23.9098C13.2647 24.3003 12.6315 24.3003 12.241 23.9098C11.8505 23.5193 11.8505 22.8861 12.241 22.4956L14.0328 20.7037L13.4952 17.7468L11.0593 16.5289C10.5653 16.2819 10.3651 15.6812 10.6121 15.1872C10.8591 14.6933 11.4598 14.493 11.9538 14.74L14.3306 15.9285L17.242 14.0758L16.3365 11.6609C16.1425 11.1438 16.4046 10.5674 16.9217 10.3734C17.4388 10.1795 18.0152 10.4415 18.2091 10.9586L19.1822 13.5535H20.2587L20.7729 12.525L19.9576 10.6225C19.74 10.1149 19.9752 9.527 20.4828 9.30944C20.9904 9.09189 21.5783 9.32704 21.7959 9.83467L22.498 11.4729L25.286 11.9798L25.2975 11.9705L27.0994 10.5289C27.5307 10.1839 28.16 10.2538 28.505 10.6851C28.85 11.1163 28.7801 11.7456 28.3488 12.0906L27.1443 13.0543L28.4794 14.7709L28.9921 13.7457C29.1614 13.4069 29.5077 13.1929 29.8865 13.1929H32.0488C32.6011 13.1929 33.0488 13.6406 33.0488 14.1929C33.0488 14.7452 32.6011 15.1929 32.0488 15.1929H30.5045L30.2364 15.7291L31.9054 16.1C31.9852 16.1178 32.0625 16.1452 32.1357 16.1818L33.5772 16.9026C34.0712 17.1495 34.2714 17.7502 34.0245 18.2442C33.7775 18.7382 33.1768 18.9384 32.6828 18.6914L31.3514 18.0257L28.228 17.3316C28.0009 17.2811 27.7984 17.153 27.6556 16.9694L25.3674 14.0274L22.5941 13.5232C22.5539 13.5563 22.5107 13.5865 22.4648 13.6135L21.8767 14.7895V15.3552H23.0391C23.1943 15.3552 23.3474 15.3914 23.4863 15.4608L26.3694 16.9024C26.8634 17.1494 27.0636 17.75 26.8166 18.244C26.5696 18.738 25.9689 18.9382 25.475 18.6912L22.803 17.3552H21.8767V18.8782C21.8767 19.4304 21.429 19.8782 20.8767 19.8782C20.3244 19.8782 19.8767 19.4304 19.8767 18.8782V16.3629L19.8767 16.3552L19.8767 16.3476V15.5535H18.6452L15.4938 17.5589L16.0326 20.5223L19.0184 23.1762C19.2318 23.366 19.354 23.638 19.354 23.9236V31.6663H20.7916V28.1003C20.7916 25.3985 22.3008 23.7402 23.1251 22.9551C23.7844 22.327 24.7748 21.7975 25.1876 21.6113C25.2696 21.4277 25.5493 20.9512 26.0118 20.5137C26.4743 20.0762 26.9545 19.6205 27.1368 19.4473C28.3747 20.1548 29.336 20.8652 29.336 20.8652C29.336 20.8652 30.6172 20.7949 31.1993 20.5606C31.6649 20.3731 32.4766 19.8522 32.8243 19.6152L34.032 20.3449Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M15 38H23V36H15V38Z`}),(0,H.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M23 42H15V40H23V42Z`})]})]})}function Oh({id:e,className:t}){return(0,H.jsx)(`svg`,{className:t?`ico ${t}`:`ico`,"aria-hidden":`true`,children:(0,H.jsx)(`use`,{href:`#${e}`})})}function kh(e){return typeof e==`string`||typeof e==`number`?e:`key`in e?(0,H.jsx)(W,{k:e.key}):`value`in e?(0,H.jsx)(`span`,{className:`val`,children:e.value}):(0,H.jsx)(H.Fragment,{children:e.join.map((e,t)=>(0,H.jsx)(`span`,{children:kh(e)},t))})}var Ah=e=>Object.fromEntries(Object.entries(e).map(([e,t])=>[e,kh(t)])),jh=`—`;function Mh(e){return e===`cag`?`staging.calc.cag`:e===`age`?`staging.calc.age`:`staging.landmark.${e}.label`}function Nh({stage:e,count:t,ev:n,severity:r,age:i,cagAssumed:a}){let o=vh(n).length>0,s=nh.every(e=>n.landmarks[e].value!==null);return(0,H.jsxs)(`div`,{className:`verdict stage-${e}`,children:[(0,H.jsxs)(`div`,{className:`stage-num`,...G(`staging.stage.label`),children:[(0,H.jsx)(W,{k:`staging.calc.verdict.kicker`,as:`small`}),(0,H.jsx)(W,{k:`staging.stage.label`,vars:{n:e}})]}),(0,H.jsxs)(`div`,{children:[t.sequential?(0,H.jsx)(W,{k:`staging.stage${e}.title`,as:`div`,className:`stage-name`}):(0,H.jsx)(W,{k:`staging.calc.verdict.bycount`,as:`div`,className:`stage-name`}),e===0?(0,H.jsx)(W,{k:`staging.calc.verdict.zero`,as:`div`,className:`stage-sub`}):(0,H.jsx)(W,{k:`staging.calc.verdict.count`,as:`div`,className:`stage-sub`,vars:{n:e}}),e===3&&(0,H.jsx)(`div`,{className:`stage-sub`,...G(r?`staging.calc.verdict.severity`:`staging.calc.verdict.choose`),children:r?(0,H.jsx)(W,{k:`staging.calc.verdict.severity`,vars:{label:(0,H.jsx)(W,{k:`staging.severity.${r}.label`}),text:(0,H.jsx)(W,{k:`staging.severity.${r}.text`})}}):(0,H.jsx)(W,{k:`staging.calc.verdict.choose`})}),(0,H.jsxs)(`div`,{className:`flags`,children:[a&&(0,H.jsx)(W,{k:`staging.calc.flag.nocag`,as:`span`,className:`flag warn`}),t.incomplete&&(0,H.jsx)(W,{k:`staging.calc.flag.incomplete`,as:`span`,className:`flag warn`}),o&&(0,H.jsx)(W,{k:`staging.calc.flag.partial`,as:`span`,className:`flag warn`}),!t.sequential&&(0,H.jsx)(W,{k:`staging.calc.flag.nonsequential`,as:`span`,className:`flag bad`}),t.sequential&&s&&(0,H.jsx)(W,{k:`staging.calc.flag.complete`,as:`span`,className:`flag ok`}),(i<20||i>90)&&(0,H.jsx)(W,{k:`staging.calc.flag.age`,as:`span`,className:`flag warn`})]})]})]})}function Ph({ev:e}){let t=vh(e);return(0,H.jsx)(`div`,{className:`eligibility`,children:[1,2,3].map(n=>{let r=e.eligibility[`stage${n}`],i=t.includes(n),a=r===null?`unknown`:r?`yes`:i?`no partial`:`no`,o=r===null?`staging.calc.cond.unknown`:r?`staging.calc.cond.met`:i?`staging.calc.cond.partial`:`staging.calc.cond.notmet`;return(0,H.jsxs)(`div`,{className:`stage-${n} ${a}`,...G(o),children:[(0,H.jsx)(W,{k:`staging.calc.cond.label`,as:`span`,className:`k`,vars:{n}}),(0,H.jsx)(W,{k:o})]},n)})})}function Fh({ev:e,age:t}){return(0,H.jsxs)(`table`,{className:`landmarks`,children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(W,{k:`staging.calc.table.landmark`,as:`th`}),(0,H.jsx)(W,{k:`staging.calc.table.value`,as:`th`,className:`num`}),(0,H.jsx)(W,{k:`staging.calc.table.cutoff`,as:`th`,className:`num`,vars:{age:t}}),(0,H.jsx)(W,{k:`staging.calc.table.status`,as:`th`})]})}),(0,H.jsx)(`tbody`,{children:[1,2,3].map(t=>(0,H.jsxs)(_.Fragment,{children:[(0,H.jsx)(`tr`,{className:`stage-row stage-${t}`,children:(0,H.jsx)(`td`,{colSpan:4,...G(`staging.calc.table.stage`),children:(0,H.jsx)(W,{k:`staging.calc.table.stage`,vars:{n:t,name:(0,H.jsx)(W,{k:`staging.stage${t}.name`})}})})}),nh.filter(e=>rh[e].stage===t).map(t=>{let n=e.landmarks[t],r=Eh(t,n.cutoff),i=n.met===null?`nodata`:n.met?`met`:`notmet`;return(0,H.jsxs)(`tr`,{children:[(0,H.jsxs)(`td`,{...G(`staging.landmark.${t}.label`),children:[(0,H.jsx)(Oh,{id:rh[t].icon}),(0,H.jsx)(W,{k:`staging.landmark.${t}.label`}),t===`sdmt`&&(0,H.jsxs)(H.Fragment,{children:[` `,(0,H.jsx)(W,{k:e.education===`low`?`staging.calc.table.sdmt.low`:`staging.calc.table.sdmt.high`,as:`span`,className:`muted small`})]})]}),(0,H.jsx)(`td`,{className:`num`,children:n.value===null?jh:Th(t,n.value)}),(0,H.jsx)(`td`,{className:`num`,children:r}),(0,H.jsx)(`td`,{children:(0,H.jsx)(W,{k:`staging.calc.status.${i}`,as:`span`,className:i})})]},t)})]},t))})]})}function Ih({state:e,stepIndex:t,onNext:n,onBack:r,onAll:i,nextRef:a,allRef:o}){switch(e.kind){case`empty`:return(0,H.jsxs)(`div`,{className:`invite`,children:[(0,H.jsx)(W,{k:`staging.calc.empty.title`,as:`p`,className:`invite-t`}),(0,H.jsx)(W,{k:`staging.calc.empty.body`,as:`p`})]});case`age`:return(0,H.jsx)(W,{k:`staging.calc.error.age`,as:`p`,className:`note warn`});case`invalid`:return(0,H.jsxs)(`p`,{className:`note warn`,...G(`staging.calc.error.correct`),children:[e.invalid.map(e=>(0,H.jsxs)(`span`,{...G(e.step===1?`staging.calc.error.whole`:`staging.calc.error.step`),children:[(0,H.jsx)(W,{k:e.step===1?`staging.calc.error.whole`:`staging.calc.error.step`,vars:{label:(0,H.jsx)(W,{k:Mh(e.key)}),min:e.min,max:e.max,step:e.step}}),` `]},e.key)),(0,H.jsx)(W,{k:`staging.calc.error.correct`})]});case`missing`:return(0,H.jsx)(W,{k:`staging.calc.error.missing`,as:`p`,className:`note warn`,vars:{fields:e.keys.map((e,t)=>(0,H.jsxs)(`span`,{...G(Mh(e)),children:[t>0&&`, `,(0,H.jsx)(W,{k:Mh(e)})]},e))}});case`reduced`:return(0,H.jsx)(`div`,{className:`result`,children:(0,H.jsxs)(`div`,{className:`verdict nc`,children:[(0,H.jsxs)(`div`,{className:`stage-num`,...G(`staging.calc.verdict.reduced`),children:[(0,H.jsx)(W,{k:`staging.calc.verdict.kicker`,as:`small`}),(0,H.jsx)(W,{k:`staging.calc.verdict.reduced`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(W,{k:`staging.calc.verdict.reduced.name`,as:`div`,className:`stage-name`}),(0,H.jsx)(W,{k:`staging.calc.verdict.reduced.body`,as:`div`,className:`stage-sub`,vars:{cag:e.cag}}),(0,H.jsx)(W,{k:`staging.calc.verdict.reduced.zero`,as:`div`,className:`stage-sub small`})]})]})});case`nothing`:return(0,H.jsxs)(`div`,{className:`invite`,children:[(0,H.jsx)(W,{k:`staging.calc.nothing.title`,as:`p`,className:`invite-t`}),(0,H.jsx)(W,{k:`staging.calc.nothing.body`,as:`p`})]});case`unclassifiable`:{let t=t=>(0,H.jsx)(W,{k:e.pattern[t]===`1`?`staging.calc.word.met`:`staging.calc.word.notmet`});return(0,H.jsxs)(`div`,{className:`result`,children:[(0,H.jsxs)(`div`,{className:`verdict nc`,children:[(0,H.jsxs)(`div`,{className:`stage-num`,...G(`staging.calc.verdict.nc`),children:[(0,H.jsx)(W,{k:`staging.calc.verdict.kicker`,as:`small`}),(0,H.jsx)(W,{k:`staging.calc.verdict.nc`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(W,{k:`staging.calc.verdict.nc.name`,as:`div`,className:`stage-name`}),(0,H.jsx)(W,{k:`staging.calc.verdict.nc.body`,as:`div`,className:`stage-sub`,vars:{pattern:e.pattern,s1:t(0),s2:t(1),s3:t(2)}})]})]}),(0,H.jsx)(Ph,{ev:e.ev}),(0,H.jsx)(Fh,{ev:e.ev,age:e.age})]})}case`stage`:{let s=(0,H.jsx)(Nh,{stage:e.stage,count:e.count,ev:e.ev,severity:e.severity,age:e.age,cagAssumed:e.cagAssumed});if(!e.steps)return(0,H.jsxs)(`div`,{className:`result`,children:[s,(0,H.jsx)(Ph,{ev:e.ev}),(0,H.jsx)(Fh,{ev:e.ev,age:e.age})]});let{steps:c}=e,l=t>=c.length;return(0,H.jsxs)(`div`,{className:`result`,children:[(0,H.jsx)(`div`,{className:`steps`,children:c.slice(0,t).map((e,t)=>(0,H.jsxs)(`div`,{className:`step ${e.final?`final `:``}${e.stage===null?``:`stage-${e.stage}`}`.trim(),children:[(0,H.jsx)(`span`,{className:`n`,children:t+1}),(0,H.jsx)(W,{k:e.key,as:`span`,vars:Ah(e.vars)})]},t))}),(0,H.jsxs)(`div`,{className:`step-nav`,children:[!l&&(0,H.jsx)(`button`,{type:`button`,className:`btn primary`,ref:a,onClick:n,...G(`staging.calc.step.next`),children:(0,H.jsx)(W,{k:`staging.calc.step.next`})}),t>1&&(0,H.jsx)(`button`,{type:`button`,className:`btn ghost`,onClick:r,...G(`staging.calc.step.back`),children:(0,H.jsx)(W,{k:`staging.calc.step.back`})}),(0,H.jsx)(`button`,{type:`button`,className:`btn ghost`,ref:o,onClick:i,...G(`staging.calc.step.all`),children:(0,H.jsx)(W,{k:`staging.calc.step.all`})})]}),l&&s]})}}}var Lh=(0,_.createContext)(null);function Rh({children:e}){let[t,n]=(0,_.useState)(0),[r,i]=(0,_.useState)(`timeline`),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(null),d=(0,_.useRef)(1),f=(0,_.useRef)(1),p=(0,_.useCallback)(e=>c({id:d.current++,values:e}),[]),m=(0,_.useRef)(0),h=(0,_.useCallback)(e=>{m.current=e,n(e),i(`timeline`),o({id:f.current++,stage:e})},[]),g=(0,_.useCallback)(e=>{m.current!==e&&(m.current=e,n(e),i(`life`))},[]),v=(0,_.useCallback)(()=>i(`timeline`),[]),y=(0,_.useCallback)(e=>u(e),[]),b=(0,_.useMemo)(()=>({stage:t,source:r,pick:a,pickStage:h,followStage:g,attend:v,request:s,loadVisit:p,striatum:l,reportStriatum:y}),[t,r,a,h,g,v,s,p,l,y]);return(0,H.jsx)(Lh.Provider,{value:b,children:e})}function zh(){let e=(0,_.useContext)(Lh);if(!e)throw Error(`useStaging must be used inside StagingProvider`);return e}var Bh=[`s0`,`s1`,`s2`,`s3`,`nonseq`,`noimg`,`reduced`],Vh={s0:{cag:41,age:30,education:`high`,putamen:6.4,caudate:4.6,tms:2,sdmt:58,tfc:13,is:100},s1:{cag:42,age:38,education:`high`,putamen:5.3,caudate:4.2,tms:3,sdmt:52,tfc:13,is:100},s2:{cag:42,age:46,education:`high`,putamen:5.1,caudate:3.6,tms:9,sdmt:40,tfc:13,is:100},s3:{cag:44,age:55,education:`low`,putamen:4.4,caudate:3,tms:28,sdmt:20,tfc:9,is:80},nonseq:{cag:43,age:44,education:`high`,putamen:5.9,caudate:4.3,tms:12,sdmt:30,tfc:13,is:100},noimg:{cag:42,age:50,education:`high`,putamen:``,caudate:``,tms:4,sdmt:50,tfc:12,is:100},reduced:{cag:38,age:58,education:`high`,putamen:5.3,caudate:3.9,tms:7,sdmt:44,tfc:13,is:100}};function Hh({k:e,values:t,reset:n,onChange:r,children:i}){let{min:a,max:o,step:s,icon:c}=rh[e];return(0,H.jsxs)(`div`,{className:`field`,children:[(0,H.jsxs)(`label`,{htmlFor:e,...G(`staging.landmark.${e}.field`),children:[(0,H.jsx)(Oh,{id:c}),(0,H.jsx)(W,{k:`staging.landmark.${e}.field`})]}),(0,H.jsx)(`input`,{type:`number`,id:e,name:e,min:a,max:o,step:s,inputMode:s<1?`decimal`:`numeric`,value:t[e],onChange:t=>r(e,t.currentTarget.value,t.currentTarget.validity.badInput)},`${e}-${n}`),i]})}function Uh({values:e,landmarkReset:t,ageReset:n,onChange:r,onSubmit:i,onClear:a}){let{loadVisit:o}=zh(),s=wa(`staging.calc.severity.none`),c=wa(`staging.severity.mild.option`),l=wa(`staging.severity.moderate.option`),u=wa(`staging.severity.severe.option`),d=[1,2,3].map(e=>({s:e,keys:nh.filter(t=>rh[t].stage===e)})),f=(0,H.jsxs)(`div`,{className:`sub`,children:[(0,H.jsx)(W,{k:`staging.calc.education`,as:`span`,className:`field-label`,id:`education-label`}),(0,H.jsx)(`div`,{className:`radio-row`,role:`radiogroup`,"aria-labelledby":`education-label`,children:[`high`,`low`].map(t=>(0,H.jsxs)(`label`,{...G(`staging.calc.education.${t}`),children:[(0,H.jsx)(`input`,{type:`radio`,name:`education`,value:t,id:`edu-${t}`,checked:e.education===t,onChange:()=>r(`education`,t,!1)}),` `,(0,H.jsx)(W,{k:`staging.calc.education.${t}`})]},t))})]});return(0,H.jsxs)(`form`,{id:`calc-form`,className:`panel raised`,noValidate:!0,onSubmit:e=>{e.preventDefault(),i()},children:[(0,H.jsxs)(`div`,{className:`presets`,children:[(0,H.jsx)(W,{k:`staging.calc.presets.label`,as:`span`,className:`eyebrow`}),Bh.map(e=>(0,H.jsx)(`button`,{type:`button`,className:`chip`,onClick:()=>o(Vh[e]),...G(`staging.calc.preset.${e}`),children:(0,H.jsx)(W,{k:`staging.calc.preset.${e}`})},e))]}),(0,H.jsxs)(`fieldset`,{children:[(0,H.jsx)(W,{k:`staging.calc.person`,as:`legend`}),(0,H.jsxs)(`div`,{className:`field-grid`,children:[(0,H.jsxs)(`div`,{className:`field`,children:[(0,H.jsxs)(`label`,{htmlFor:`age`,...G(`staging.calc.age`),children:[(0,H.jsx)(Oh,{id:`i-age`}),(0,H.jsx)(W,{k:`staging.calc.age`})]}),(0,H.jsx)(`input`,{type:`number`,id:`age`,name:`age`,min:ih.min,max:ih.max,step:1,inputMode:`numeric`,value:e.age,onChange:e=>r(`age`,e.currentTarget.value,e.currentTarget.validity.badInput)},`age-${n}`)]}),(0,H.jsxs)(`div`,{className:`field`,children:[(0,H.jsxs)(`label`,{htmlFor:`cag`,...G(`staging.calc.cag`),children:[(0,H.jsx)(Oh,{id:`i-cag`}),(0,H.jsx)(W,{k:`staging.calc.cag`})]}),(0,H.jsx)(`input`,{type:`number`,id:`cag`,name:`cag`,min:oh.min,max:oh.max,step:1,inputMode:`numeric`,value:e.cag,onChange:e=>r(`cag`,e.currentTarget.value,e.currentTarget.validity.badInput)},`cag-${n}`)]})]})]}),d.map(({s:n,keys:i})=>(0,H.jsxs)(`fieldset`,{className:`stage-${n}`,children:[(0,H.jsxs)(`legend`,{...G(`staging.calc.group${n}`),children:[(0,H.jsx)(`span`,{className:`swatch`}),(0,H.jsx)(W,{k:`staging.calc.group${n}`})]}),(0,H.jsxs)(`div`,{className:`field-grid`,children:[i.map(n=>(0,H.jsx)(Hh,{k:n,values:e,reset:t,onChange:r,children:n===`sdmt`&&f},n)),n===3&&(0,H.jsxs)(`div`,{className:`field span2`,children:[(0,H.jsx)(W,{k:`staging.calc.severity.label`,as:`label`,htmlFor:`severity`}),(0,H.jsxs)(`select`,{id:`severity`,name:`severity`,value:e.severity,onChange:e=>r(`severity`,e.currentTarget.value,!1),children:[(0,H.jsx)(`option`,{value:``,children:s}),(0,H.jsx)(`option`,{value:`mild`,children:c}),(0,H.jsx)(`option`,{value:`moderate`,children:l}),(0,H.jsx)(`option`,{value:`severe`,children:u})]})]})]})]},n)),(0,H.jsxs)(`div`,{className:`form-actions`,children:[(0,H.jsx)(`button`,{type:`submit`,className:`btn primary`,...G(`staging.calc.submit`),children:(0,H.jsx)(W,{k:`staging.calc.submit`})}),(0,H.jsx)(`button`,{type:`button`,className:`btn ghost`,id:`calc-clear`,onClick:a,...G(`staging.calc.clear`),children:(0,H.jsx)(W,{k:`staging.calc.clear`})})]})]})}var Wh={putamen:``,caudate:``,tms:``,sdmt:``,tfc:``,is:``},Gh={age:``,cag:``,education:`high`,severity:``,...Wh},Kh=e=>e==null?``:String(e);function qh(e,t){let n={...Gh,age:Kh(e.age),cag:Kh(e.cag),education:e.education,severity:t};for(let t of nh)n[t]=Kh(e[t]);return n}function Jh(){let{request:e}=zh(),t=wa(`staging.calc.rule.label`),[n,r]=(0,_.useState)(Gh),[i,a]=(0,_.useState)(new Set),[o,s]=(0,_.useState)(`strict`),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(1),[m,h]=(0,_.useState)(0),[g,v]=(0,_.useState)(0),y=(0,_.useRef)(null),b=(0,_.useRef)(null),x=(0,_.useRef)(null),[S,C]=(0,_.useState)(0);e&&e.id!==S&&(C(e.id),r(t=>qh(e.values,t.severity)),a(new Set),l(!0),p(1),h(e=>e+1),v(e=>e+1)),(0,_.useEffect)(()=>{let e=x.current;x.current=null,e===`next`&&(y.current??b.current)?.focus(),e===`back`&&f===1&&y.current?.focus()},[f]);let w=(0,_.useMemo)(()=>{if(!c)return{kind:`empty`};let e=bh(n);if(i.has(`age`)||e.some(e=>e.key===`age`))return{kind:`age`};let t=[`cag`,...nh].flatMap(t=>{let n=e.find(e=>e.key===t);return n?[n]:i.has(t)?[t===`cag`?{key:t,min:oh.min,max:oh.max,step:1}:{key:t,min:rh[t].min,max:rh[t].max,step:rh[t].step}]:[]});if(t.length)return{kind:`invalid`,invalid:t};let r=dh(n);if(r.kind===`reduced`)return{kind:`reduced`,cag:r.cag};let a=r.kind===`missing`,s=Number(n.age),l=ph(n),d=n.severity;if(o===`strict`){let e=_h(l),t=[...a?[`cag`]:[],...e.missingKeys];if(t.length)return{kind:`missing`,keys:t};if(e.stage===null||e.pattern===null)return{kind:`unclassifiable`,pattern:e.pattern??``,ev:l,age:s};let n={stage:e.stage,sequential:!0,incomplete:!1};return{kind:`stage`,stage:e.stage,count:n,strict:e,ev:l,age:s,severity:d,cagAssumed:a,steps:u?wh({ev:l,count:n,strict:e,age:s}):null}}let f=mh(l.eligibility);return f.stage===null?{kind:`nothing`}:{kind:`stage`,stage:f.stage,count:f,strict:null,ev:l,age:s,severity:d,cagAssumed:a,steps:u?wh({ev:l,count:f,strict:null,age:s}):null}},[c,n,i,o,u]),T=(e,t)=>a(n=>{if(n.has(e)===t)return n;let r=new Set(n);return t?r.add(e):r.delete(e),r}),E=(e,t,n)=>{r(n=>({...n,[e]:t})),e!==`education`&&e!==`severity`&&T(e,n)},D=()=>{r(e=>({...e,...Wh})),a(e=>new Set([...e].filter(e=>e===`age`||e===`cag`))),l(!1),p(1),h(e=>e+1)},O=()=>{l(!0),p(1)},k=e=>{s(e),p(1)},A=w.kind===`stage`&&w.steps?w.steps.length:0;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Uh,{values:n,landmarkReset:m,ageReset:g,onChange:E,onSubmit:O,onClear:D}),(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`div`,{className:`calc-modes`,children:[(0,H.jsxs)(`div`,{className:`toggle`,role:`group`,"aria-label":t,children:[(0,H.jsx)(`button`,{type:`button`,id:`rule-strict`,"aria-pressed":o===`strict`,onClick:()=>k(`strict`),...G(`staging.calc.rule.strict`),children:(0,H.jsx)(W,{k:`staging.calc.rule.strict`})}),(0,H.jsx)(`button`,{type:`button`,id:`rule-count`,"aria-pressed":o===`count`,onClick:()=>k(`count`),...G(`staging.calc.rule.count`),children:(0,H.jsx)(W,{k:`staging.calc.rule.count`})})]}),(0,H.jsx)(`button`,{type:`button`,className:`chip`,id:`calc-steps`,"aria-pressed":u,onClick:()=>{d(!u),p(1)},...G(`staging.calc.steps.toggle`),children:(0,H.jsx)(W,{k:`staging.calc.steps.toggle`})})]}),(0,H.jsx)(W,{k:o===`strict`?`staging.calc.rule.strict.note`:`staging.calc.rule.count.note`,as:`p`,className:`small muted`,id:`rule-note`}),(0,H.jsx)(`div`,{className:`panel`,id:`calc-result`,"aria-live":`polite`,children:(0,H.jsx)(Ih,{state:w,stepIndex:f,nextRef:y,allRef:b,onNext:()=>{x.current=`next`,p(e=>Math.min(e+1,A))},onBack:()=>{x.current=`back`,p(e=>Math.max(e-1,1))},onAll:()=>p(A)})}),(0,H.jsxs)(`details`,{className:`paper-note`,children:[(0,H.jsx)(W,{k:`staging.calc.paper.summary`,as:`summary`}),(0,H.jsx)(`div`,{className:`prose small muted`,children:(0,H.jsx)(W,{k:`staging.calc.paper.body`,as:`p`})})]})]})]})}var Yh=e=>{let t={};for(let n of Object.keys(e))e[n]!==void 0&&(t[n]=e[n]);return t};function Xh(e){let{id:t,className:n,ariaLabel:r,title:i,x:a,y:o,series:s,vlines:c,marker:l,snap:u,frame:d,directLabels:f}=e,p=e.width??640,m=e.height??300,h={top:18,right:16,bottom:40,left:46,...e.margin},g=p-h.left-h.right,v=m-h.top-h.bottom,y=Hl(a.min,a.max,h.left,p-h.right),b=Hl(o.min,o.max,m-h.bottom,h.top),[x,S]=(0,_.useState)(null),C=(0,_.useRef)(null),w=(0,_.useRef)(null);(0,_.useLayoutEffect)(()=>{let e=w.current,t=C.current;if(!x||!e||!t)return;e.style.left=`0px`;let n=t.getBoundingClientRect().width,r=e.offsetWidth,i=x.px+14;i+r>n&&(i=x.px-14-r),n>r&&(i=Math.min(i,n-r)),e.style.left=`${Math.max(0,i)}px`,e.style.top=`${Math.max(0,x.py-10)}px`,e.style.visibility=`visible`},[x,s]);let T=[],E=s.map(e=>{let t=Wl(e.points);if(!t.length)return null;if(f!==!1){if(e.labelAt===`peak`){let n=t.reduce((e,t)=>t[1]>e[1]?t:e);T.push({key:e.key,x:y(n[0]),y:b(n[1])-8,text:e.label,color:e.color,anchor:`middle`})}else if(e.labelAt===`start`)T.push({key:e.key,x:y(t[0][0])+6,y:b(t[0][1])-6,text:e.label,color:e.color,anchor:`start`});else{let n=t[t.length-1];T.push({key:e.key,x:y(n[0])+6,y:b(n[1])+4,text:e.label,color:e.color,anchor:`start`})}}return{s:e,pts:t}}),D=Jl(T);function O(e){let t=e.currentTarget.ownerSVGElement;if(!t)return;let n=t.getBoundingClientRect();if(!n.width)return;let r=Yl((e.clientX-n.left)/n.width*p,p,h,a.min,a.max,u),i=C.current?.getBoundingClientRect()??n;S({x:r,px:e.clientX-i.left,py:e.clientY-i.top})}let k=[];if(x)for(let e of s){let t=Gl(e.points,x.x);if(t===null||Number.isNaN(t))continue;let n=e.tipFormat??o.tipFormat??(e=>e.toFixed(2));k.push({key:e.key,label:e.label,copyKey:e.copyKey,color:e.color,value:t,text:n(t)})}let A=l&&l.x>=a.min&&l.x<=a.max?l:null,j=A?A.x>(a.min+a.max)/2:!1;return(0,H.jsxs)(`div`,{ref:C,id:t,className:n?`chart ${n}`:`chart`,children:[(0,H.jsxs)(`svg`,{viewBox:`0 0 ${p} ${m}`,role:`img`,"aria-label":r,children:[i&&(0,H.jsx)(`title`,{children:i}),(0,H.jsx)(`g`,{className:`grid`,children:o.ticks.map(e=>(0,H.jsx)(`line`,{x1:h.left,x2:h.left+g,y1:b(e),y2:b(e)},e))}),d&&(0,H.jsx)(`rect`,{className:`panel-frame`,x:h.left,y:h.top,width:g,height:v}),(0,H.jsxs)(`g`,{className:`axis`,children:[(0,H.jsx)(`path`,{d:`M${h.left},${h.top+v}H${h.left+g}`}),a.ticks.map(e=>(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`line`,{x1:y(e),x2:y(e),y1:h.top+v,y2:h.top+v+4}),(0,H.jsx)(`text`,{x:y(e),y:h.top+v+16,textAnchor:`middle`,children:a.format?a.format(e):String(e)})]},e)),o.ticks.map(e=>(0,H.jsx)(`text`,{x:h.left-8,y:b(e)+3.5,textAnchor:`end`,children:o.format?o.format(e):String(e)},e)),a.title&&(0,H.jsx)(`text`,{className:`axis-title`,x:h.left+g/2,y:m-6,textAnchor:`middle`,children:a.title}),o.title&&(0,H.jsx)(`text`,{className:`axis-title`,x:0,y:0,textAnchor:`middle`,transform:`translate(12,${h.top+v/2}) rotate(-90)`,children:o.title})]}),(0,H.jsxs)(`g`,{className:`series`,children:[E.map(e=>{if(!e)return null;let{s:t,pts:n}=e,r=t.every||1;return(0,H.jsxs)(`g`,{children:[t.area&&(0,H.jsx)(`path`,{className:`area`,d:ql(t.points,y,b,o.min,o.max,t.area),style:Yh({"--c":t.color,opacity:t.areaOpacity})}),t.markers?n.map((e,t)=>[e,t]).filter(([,e])=>e%r===0).map(([e,n])=>{let r=y(e[0]),i=b(e[1]);return t.markers===`circle`?(0,H.jsx)(`circle`,{className:`symbol circle`,cx:r,cy:i,r:3,style:Yh({"--c":t.color})},n):t.markers===`triangle`?(0,H.jsx)(`path`,{className:`symbol triangle`,d:`M${r},${i-3.5}L${r+3.2},${i+2.5}L${r-3.2},${i+2.5}Z`,style:Yh({"--c":t.color})},n):(0,H.jsx)(`path`,{className:`symbol plus`,d:`M${r-3.2},${i}H${r+3.2}M${r},${i-3.2}V${i+3.2}`,style:Yh({"--c":t.color,strokeWidth:1.3})},n)}):(0,H.jsx)(`path`,{className:t.dashed?`line dashed`:t.dotted?`line dotted`:`line`,d:Kl(t.points,y,b,o.min,o.max),style:Yh({"--c":t.color,"--w":t.width,opacity:t.opacity})})]},t.key)}),D.map((e,t)=>(0,H.jsx)(`text`,{className:`direct-label`,x:e.x,y:e.y,textAnchor:e.anchor,style:Yh({"--c":e.color}),children:e.text},T[t].key))]}),(0,H.jsxs)(`g`,{className:`marker`,children:[A&&(0,H.jsx)(`line`,{x1:y(A.x),x2:y(A.x),y1:h.top,y2:h.top+v}),A?.label&&(0,H.jsx)(`text`,{x:y(A.x)+4,y:h.top+10,textAnchor:j?`end`:`start`,dx:j?-8:0,children:A.label})]}),(c??[]).filter(e=>e.x>=a.min&&e.x<=a.max).map((e,t)=>(0,H.jsxs)(`g`,{className:`vline`,children:[(0,H.jsx)(`line`,{x1:y(e.x),x2:y(e.x),y1:h.top,y2:h.top+v,style:Yh({"--c":e.color})}),e.label&&(0,H.jsx)(`text`,{className:`lbl`,x:y(e.x),y:h.top-4,textAnchor:`middle`,children:e.label})]},`${e.x}-${t}`)),x&&(0,H.jsxs)(`g`,{className:`hover`,children:[(0,H.jsx)(`line`,{className:`crosshair`,x1:y(x.x),x2:y(x.x),y1:h.top,y2:h.top+v}),k.map(e=>(0,H.jsx)(`circle`,{className:`hover-dot`,r:4,cx:y(x.x),cy:b(Math.max(o.min,Math.min(o.max,e.value))),style:Yh({"--c":e.color})},e.key))]}),(0,H.jsx)(`rect`,{className:`hit`,x:h.left,y:h.top,width:g,height:v,onPointerMove:O,onPointerLeave:()=>S(null),onPointerCancel:()=>S(null)})]}),x&&(0,H.jsxs)(`div`,{ref:w,className:`tooltip`,"aria-hidden":`true`,children:[(0,H.jsx)(`div`,{className:`t`,...a.tipKey?G(a.tipKey):{},children:a.tipLabel(x.x)}),k.map(e=>(0,H.jsxs)(`div`,{className:`row`,children:[(0,H.jsxs)(`span`,{...e.copyKey?G(e.copyKey):{},children:[(0,H.jsx)(`i`,{style:Yh({"--c":e.color})}),e.label]}),(0,H.jsx)(`span`,{children:e.text})]},e.key))]})]})}var Zh=[{cag:38,mid:78,scale:14,floor:.02,reduced:!0},{cag:39,mid:66,scale:9,floor:0,reduced:!0},{cag:40,mid:59,scale:6,floor:0,reduced:!1},{cag:41,mid:54,scale:5.5,floor:0,reduced:!1},{cag:42,mid:49,scale:5,floor:0,reduced:!1},{cag:43,mid:45,scale:4.5,floor:0,reduced:!1}],Qh={landmarks:[{key:`putamen`,mid:44,scale:6.5},{key:`caudate`,mid:46,scale:7},{key:`tms`,mid:50,scale:7},{key:`sdmt`,mid:64,scale:10},{key:`sdmtlow`,mid:70,scale:11,dash:`dotted`},{key:`sdmthigh`,mid:60,scale:9,dash:`dashed`},{key:`tfc`,mid:56,scale:6},{key:`is`,mid:57,scale:6}],conditions:[{stage:1,mid:40,scale:6.5,marker:`circle`},{stage:2,mid:47,scale:7,marker:`triangle`},{stage:3,mid:55,scale:6,marker:`plus`}]},$h={ages:[19,25,30,35,40,45,50,53,55,60,65,69],putamen:[7.5,7,6.6,6.2,5.7,5.3,4.9,4.65,4.5,4.1,3.7,3.3],caudate:[5.8,5.4,5,4.7,4.3,3.9,3.6,3.4,3.25,2.9,2.5,2.1],tms:[1,1.5,2,3,4,6,9,13,16,25,37,50],sdmthigh:[56,57,57,57,57,55,51,48,46,40,34,29],sdmtlow:[54,54,53,52,51,49,46,44,42,37,32,27],tfc:[13,13,13,13,13,12.8,12.5,12.3,12,10.8,8,5],is:[100,100,100,100,100,100,99,97,96,90,80,68],stageHalf:[33,40,53,59]};function eg({k:e}){return(0,H.jsx)(W,{k:e,as:`span`,className:`badge schematic`})}var tg=e=>`color-mix(in srgb, var(--s3) ${e*20}%, var(--s0))`,ng={putamen:`var(--putamen)`,caudate:`var(--caudate)`,tms:`var(--tms)`,sdmt:`var(--sdmt)`,sdmtlow:`var(--sdmt)`,sdmthigh:`var(--sdmt)`,tfc:`var(--tfc)`,is:`var(--is)`},rg=[0,1,2,3].map(e=>`var(--s${e})`),ig=Ip(18,100,1),ag=Ip(20,80,1),og=Ip(19,69,.5),sg=[20,25,30,35,40,45,50,55,60,65],cg={top:14,right:16,bottom:36,left:48},lg=$h.stageHalf.map((e,t)=>({x:e,color:rg[t]})),ug=(e,t=1)=>$h.ages.map((n,r)=>[n,$h[e][r]/t]),dg=e=>`${(e*100).toFixed(0)}%`,fg=e=>({"--sc":e});function pg(){let e=U(),t=t=>e(`staging.chart.tip.age`,{age:t.toFixed(0)}),n=(0,_.useMemo)(()=>Zh.map((t,n)=>({key:`c${t.cag}`,label:e(t.reduced?`staging.fig.f1b.series.reduced`:`staging.fig.f1b.series`,{cag:t.cag}),copyKey:t.reduced?`staging.fig.f1b.series.reduced`:`staging.fig.f1b.series`,color:tg(n),dashed:t.reduced,width:3,points:ig.map(e=>[e,Mp(e,t.mid,t.scale,t.floor)])})),[e]),r=(0,_.useMemo)(()=>[...Qh.landmarks.map(t=>({key:t.key,label:e(`staging.fig.f3.${t.key}`),copyKey:`staging.fig.f3.${t.key}`,color:ng[t.key],dashed:t.dash===`dashed`,dotted:t.dash===`dotted`,width:t.dash?2:3,points:ag.map(e=>[e,Mp(e,t.mid,t.scale)])})),...Qh.conditions.map(t=>({key:`cond${t.stage}`,label:e(`staging.fig.f3.cond${t.stage}`),copyKey:`staging.fig.f3.cond${t.stage}`,color:`var(--ink)`,markers:t.marker,every:2,points:ag.map(e=>[e,Mp(e,t.mid,t.scale)])}))],[e]),i=(0,_.useMemo)(()=>{let t=og.map(e=>Fp(42,e));return[0,1,2,3].map(n=>({key:`s${n}`,label:e(`staging.stage.label`,{n}),copyKey:`staging.stage.label`,color:rg[n],area:`below`,areaOpacity:.3,points:og.map((e,r)=>[e,t[r][n]])}))},[e]),a=(0,_.useMemo)(()=>[{key:`putamen`,label:e(`staging.fig.f5.putamen`),copyKey:`staging.fig.f5.putamen`,color:ng.putamen,width:3,points:ug(`putamen`)},{key:`caudate`,label:e(`staging.fig.f5.caudate`),copyKey:`staging.fig.f5.caudate`,color:ng.caudate,width:3,points:ug(`caudate`)}],[e]),o=(0,_.useMemo)(()=>[{key:`tms`,label:e(`staging.fig.f5.tms`),copyKey:`staging.fig.f5.tms`,color:ng.tms,width:3,points:ug(`tms`)},{key:`sdmthigh`,label:e(`staging.fig.f5.sdmthigh`),copyKey:`staging.fig.f5.sdmthigh`,color:ng.sdmt,width:2.5,dashed:!0,points:ug(`sdmthigh`)},{key:`sdmtlow`,label:e(`staging.fig.f5.sdmtlow`),copyKey:`staging.fig.f5.sdmtlow`,color:ng.sdmt,width:2.5,dotted:!0,points:ug(`sdmtlow`)}],[e]),s=(0,_.useMemo)(()=>[{key:`tfc`,label:e(`staging.fig.f5.tfc`),copyKey:`staging.fig.f5.tfc`,color:ng.tfc,width:3,points:ug(`tfc`)},{key:`is`,label:e(`staging.fig.f5.is`),copyKey:`staging.fig.f5.is`,color:ng.is,width:3,points:ug(`is`,10)}],[e]),c=(n=>({title:e(`staging.chart.axis.age.short`),tipLabel:t,tipKey:`staging.chart.tip.age`,...n}))({min:19,max:69,ticks:sg}),l=$h.stageHalf,u=[{id:`a`,h:200,y:{min:0,max:1,ticks:[0,.5,1],format:e=>e.toFixed(2),tipFormat:dg},series:i},{id:`b`,h:200,y:{min:2,max:8,ticks:[2,4,6,8],tipFormat:e=>e.toFixed(2)},series:a},{id:`c`,h:220,y:{min:0,max:70,ticks:[0,10,20,30,40,50,60,70],tipFormat:e=>e.toFixed(0)},series:o},{id:`d`,h:200,y:{min:4,max:13,ticks:[4,6,8,10,12],tipFormat:e=>e.toFixed(1)},series:s}];return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`div`,{className:`section-head`,children:[(0,H.jsx)(`span`,{className:`eyebrow`,...G(`staging.fig.eyebrow`),children:e(`staging.fig.eyebrow`)}),(0,H.jsx)(`h2`,{id:`h-fig`,...G(`staging.fig.title`),children:e(`staging.fig.title`)}),(0,H.jsx)(`p`,{className:`lede`,...G(`staging.fig.lede`),children:e(`staging.fig.lede`)})]}),(0,H.jsxs)(`p`,{className:`note warn lead`,...G(`staging.fig.note`),children:[(0,H.jsx)(eg,{k:`staging.fig.badge`}),`\xA0 `,e(`staging.fig.note`)]}),(0,H.jsxs)(`div`,{className:`figure-grid`,children:[(0,H.jsxs)(`div`,{className:`panel`,children:[(0,H.jsx)(`h3`,{...G(`staging.fig.f1b.title`),children:e(`staging.fig.f1b.title`)}),(0,H.jsx)(`p`,{className:`cap`,...G(`staging.fig.f1b.cap`),children:e(`staging.fig.f1b.cap`)}),(0,H.jsx)(Xh,{id:`fig1b`,className:`framed`,width:520,height:300,margin:{top:16,right:16,bottom:40,left:48},ariaLabel:e(`staging.fig.f1b.aria`),title:e(`staging.fig.f1b.svgtitle`),x:{min:18,max:100,ticks:[20,30,40,50,60,70,80,90,100],title:e(`staging.chart.axis.age.short`),tipLabel:t,tipKey:`staging.chart.tip.age`},y:{min:0,max:1,ticks:[0,.2,.4,.6,.8,1],title:e(`staging.fig.f1b.y`),format:e=>e.toFixed(1),tipFormat:dg},series:n,vlines:[{x:82,color:`var(--ink)`,label:e(`staging.fig.f1b.reference`,{age:82})}],snap:1,directLabels:!1}),(0,H.jsx)(`div`,{className:`legend`,id:`fig1b-legend`,children:n.map((e,t)=>(0,H.jsx)(`span`,{className:e.dashed?`thick dash`:`thick`,style:fg(tg(t)),...e.copyKey?G(e.copyKey):{},children:e.label},e.key))})]}),(0,H.jsxs)(`div`,{className:`panel`,children:[(0,H.jsx)(`h3`,{...G(`staging.fig.f3.title`),children:e(`staging.fig.f3.title`)}),(0,H.jsx)(`p`,{className:`cap`,...G(`staging.fig.f3.cap`),children:e(`staging.fig.f3.cap`)}),(0,H.jsx)(Xh,{id:`fig3`,className:`framed`,width:520,height:300,margin:{top:16,right:16,bottom:40,left:48},ariaLabel:e(`staging.fig.f3.aria`),title:e(`staging.fig.f3.svgtitle`),x:{min:20,max:80,ticks:[20,30,40,50,60,70,80],title:e(`staging.chart.axis.age.short`),tipLabel:t,tipKey:`staging.chart.tip.age`},y:{min:0,max:1,ticks:[0,.25,.5,.75,1],title:e(`staging.fig.f3.y`),format:e=>e.toFixed(2),tipFormat:dg},series:r,snap:1,directLabels:!1}),(0,H.jsxs)(`div`,{className:`legend`,id:`fig3-legend`,children:[Qh.landmarks.map(t=>(0,H.jsx)(`span`,{className:t.dash===`dashed`?`thick dash`:t.dash===`dotted`?`thick dotted`:`thick`,style:fg(ng[t.key]),...G(`staging.fig.f3.${t.key}`),children:e(`staging.fig.f3.${t.key}`)},t.key)),Qh.conditions.map(t=>(0,H.jsx)(`span`,{className:t.marker===`circle`?`dot`:t.marker===`triangle`?`tri`:`plus`,...G(`staging.fig.f3.cond${t.stage}`),children:e(`staging.fig.f3.cond${t.stage}`)},t.stage))]})]})]}),(0,H.jsxs)(`div`,{className:`panel spaced`,children:[(0,H.jsx)(`h3`,{...G(`staging.fig.f5.title`),children:e(`staging.fig.f5.title`)}),(0,H.jsx)(`p`,{className:`cap fig5-cap`,...G(`staging.fig.f5.cap`),children:e(`staging.fig.f5.cap`,{a0:l[0],a1:l[1],a2:l[2],a3:l[3]})}),(0,H.jsx)(`div`,{className:`fig5-stack`,children:u.map(t=>(0,H.jsxs)(`div`,{className:`fig5-panel`,children:[(0,H.jsx)(`div`,{className:`strip`,...G(`staging.fig.f5.${t.id}.strip`),children:e(`staging.fig.f5.${t.id}.strip`)}),(0,H.jsx)(Xh,{id:`fig5${t.id}`,className:`framed`,width:760,height:t.h,margin:cg,ariaLabel:e(`staging.fig.f5.${t.id}.aria`),title:e(`staging.fig.f5.${t.id}.svgtitle`),x:c,y:{...t.y,ticks:[...t.y.ticks],title:e(`staging.fig.f5.${t.id}.y`)},series:[...t.series],snap:1,directLabels:!1,vlines:lg})]},t.id))}),(0,H.jsxs)(`div`,{className:`legend spaced`,id:`fig5-legend`,children:[(0,H.jsx)(`span`,{className:`thick`,style:fg(`var(--putamen)`),...G(`staging.fig.f5.putamen`),children:e(`staging.fig.f5.putamen`)}),(0,H.jsx)(`span`,{className:`thick`,style:fg(`var(--caudate)`),...G(`staging.fig.f5.caudate`),children:e(`staging.fig.f5.caudate`)}),(0,H.jsx)(`span`,{className:`thick`,style:fg(`var(--tms)`),...G(`staging.fig.f5.tms`),children:e(`staging.fig.f5.tms`)}),(0,H.jsx)(`span`,{className:`thick dash`,style:fg(`var(--sdmt)`),...G(`staging.fig.f5.legend.sdmthigh`),children:e(`staging.fig.f5.legend.sdmthigh`)}),(0,H.jsx)(`span`,{className:`thick dotted`,style:fg(`var(--sdmt)`),...G(`staging.fig.f5.legend.sdmtlow`),children:e(`staging.fig.f5.legend.sdmtlow`)}),(0,H.jsx)(`span`,{className:`thick`,style:fg(`var(--tfc)`),...G(`staging.fig.f5.tfc`),children:e(`staging.fig.f5.tfc`)}),(0,H.jsx)(`span`,{className:`thick`,style:fg(`var(--is)`),...G(`staging.fig.f5.is`),children:e(`staging.fig.f5.is`)}),l.map((t,n)=>(0,H.jsx)(`span`,{className:`dash`,style:fg(rg[n]),...G(`staging.fig.f5.legend.half`),children:e(`staging.fig.f5.legend.half`,{n,age:t})},n))]})]})]})}var mg=[40,42,45],hg={min:20,max:69};function gg(e,t){let n=ch(t);return e===`sdmt`?n.sdmtHigh:n[e]}function _g(e){return rh[e].step<1?2:0}function vg(e,t){let{min:n,max:r,step:i}=rh[e];return Math.min(r,Math.max(n,Number((n+t*i).toFixed(_g(e)))))}function yg(e,t){return(t-rh[e].min)/rh[e].step}function bg(e,t){return vg(e,Math.round(yg(e,t)))}function xg(e,t){return e===`tms`?fh(t):vg(e,Math.ceil(yg(e,t)-1e-9)-1)}function Sg(e,t){return e===`tms`?fh(t)-1:vg(e,Math.ceil(yg(e,t)-1e-9))}function Cg(e){let[t,n,r]=Pp(e);return{putamen:t,caudate:t+4,tms:n,sdmt:n+12,tfc:r,is:r+2}}var wg=new Map;function Tg(e){let t=wg.get(e);if(t)return t;let[n,r,i]=Pp(e),a=ch,o={putamen:[[20,6.4],[n-1,a(n-1).putamen+.02],[n,a(n).putamen-.01],[90,a(n).putamen-.01-.05*(90-n)]],caudate:[[20,4.7],[n+3,a(n+3).caudate+.02],[n+4,a(n+4).caudate-.01],[90,a(n+4).caudate-.01-.035*(86-n)]],tms:[[20,1],[r-10,2.5],[r-1,a(r-1).tms-.2],[r,a(r).tms+.5],[r+8,a(r).tms+7],[90,Math.min(124,a(r).tms+7+1.6*(82-r))]],sdmt:[[20,56],[r-4,55],[r+11,a(r+11).sdmtHigh+.5],[r+12,a(r+12).sdmtHigh-.5],[90,Math.max(0,a(r+12).sdmtHigh-.5-1.2*(78-r))]],tfc:[[20,13],[i-1,13],[i,a(i).tfc-.5],[i+6,a(i).tfc-2.5],[90,Math.max(0,a(i).tfc-2.5-.6*(84-i))]],is:[[20,100],[i+1,100],[i+2,a(i+2).is-1],[i+8,a(i+2).is-8],[90,Math.max(10,a(i+2).is-8-1.5*(82-i))]]};return wg.set(e,o),o}function Eg(e,t,n){let r=bg(t,jp(Tg(e)[t],n)),i=gg(t,n),a=n>=Cg(e)[t],o=a?xg(t,i):Sg(t,i),s=rh[t].direction===`below`;return a?s?Math.min(r,o):Math.max(r,o):s?Math.max(r,o):Math.min(r,o)}function Dg(e,t){let n={cag:e,age:t,education:`high`};for(let r of nh)n[r]=Eg(e,r,t);return n}var Og=(e,t)=>mh(ph(Dg(e,t)).eligibility).stage??0;function kg(e){let t=[],n=Og(e,hg.min);for(let r=hg.min+1;r<=hg.max;r++){let i=Og(e,r);i!==n&&(t.push({age:r,stage:i}),n=i)}return t}function Ag(e){let t=kg(e),n=[];for(let r=hg.min+1;r<=hg.max;r++){let i=ph(Dg(e,r-1)).landmarks,a=ph(Dg(e,r)).landmarks;for(let e of nh){if(i[e].met||!a[e].met)continue;let o=rh[e].stage;n.push({age:r,key:e,stage:o,opens:t.some(e=>e.age===r&&e.stage===o)})}}return n}function jg(e){let t={key:`staging.life.carrier.c${e}.name`},n=[{age:hg.min,stage:0,kind:`first`,titleKey:`staging.life.step.first.title`,textKey:`staging.life.step.first.text`,vars:{name:t,cag:e,age:hg.min}}];for(let r of Ag(e)){let i={key:`staging.landmark.${r.key}.label`};n.push(r.opens?{age:r.age,stage:r.stage,kind:`opens`,titleKey:`staging.life.step.opens.title`,textKey:`staging.life.story.s${r.stage}.text`,vars:{name:t,cag:e,label:i,n:r.stage}}:{age:r.age,stage:r.stage,kind:`second`,titleKey:`staging.life.step.second.title`,textKey:`staging.life.step.second.text`,vars:{name:t,cag:e,label:i,n:r.stage}})}return n.push({age:hg.max,stage:Og(e,hg.max),kind:`last`,titleKey:`staging.life.step.last.title`,textKey:`staging.life.step.last.text`,vars:{name:t,cag:e,age:hg.max}}),n}function Mg(e,t,n=kg(e)){let r=Dg(e,t),i=ph(r);return{age:t,values:r,ev:i,stage:mh(i.eligibility).stage??0,crossed:nh.filter(e=>i.landmarks[e].met===!0),next:n.find(e=>e.age>t)??null,probabilities:Fp(e,t)}}function Ng(e,t){return t===0?hg.min:kg(e).find(e=>e.stage===t)?.age??null}function Pg(e,t){let n=0;return e.forEach((e,r)=>{e.age<=t&&(n=r)}),n}var Fg=[0,1,2,3];function Ig({cag:e,view:t}){let n=(0,_.useMemo)(()=>Ag(e),[e]),{age:r,ev:i,stage:a,probabilities:o}=t,{loadVisit:s}=zh();function c(){s(Dg(e,r)),document.getElementById(`h-calc`)?.focus({preventScroll:!0});let t=document.getElementById(`calculator`);t&&typeof t.scrollIntoView==`function`&&t.scrollIntoView({behavior:vd()?`auto`:`smooth`,block:`start`})}let l=e=>(e*100).toFixed(0);return(0,H.jsxs)(`div`,{className:`life-after`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(W,{k:`staging.life.log.title`,as:`div`,className:`eyebrow`}),(0,H.jsx)(`ol`,{className:`log`,id:`life-log`,children:n.map(e=>(0,H.jsx)(W,{as:`li`,className:e.age>r?`future`:`stage-${e.stage}`,k:e.opens?`staging.life.log.item.opens`:`staging.life.log.item`,vars:{age:e.age,label:(0,H.jsx)(W,{k:`staging.landmark.${e.key}.label`}),n:e.stage}},e.key))})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(W,{k:`staging.life.typical.title`,as:`div`,className:`eyebrow`}),(0,H.jsxs)(`div`,{className:`typical`,id:`life-typical`,children:[(0,H.jsx)(`div`,{className:`bars4`,children:Fg.map(e=>(0,H.jsxs)(`div`,{className:`stage-${e}${e===a?` now`:``}`,children:[(0,H.jsx)(`span`,{className:`bar`,children:(0,H.jsx)(`i`,{style:{height:`${l(o[e])}%`}})}),(0,H.jsx)(W,{k:`staging.stage.label`,as:`span`,vars:{n:e}}),(0,H.jsxs)(`span`,{children:[l(o[e]),`%`]})]},e))}),(0,H.jsx)(W,{k:`staging.life.typical.note`,className:`small muted`,as:`span`,vars:{p:l(o[a]),cag:e,n:a,age:r}})]})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`table`,{className:`landmarks compact`,id:`life-landmarks`,children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(W,{k:`staging.life.table.landmark`,as:`th`}),(0,H.jsx)(W,{k:`staging.life.table.value`,as:`th`,className:`num`}),(0,H.jsx)(W,{k:`staging.life.table.status`,as:`th`})]})}),(0,H.jsx)(`tbody`,{children:[1,2,3].map(e=>(0,H.jsxs)(_.Fragment,{children:[(0,H.jsx)(`tr`,{className:`stage-row stage-${e}`,children:(0,H.jsx)(`td`,{colSpan:3,...G(i.eligibility[`stage${e}`]?`staging.life.table.stage.met`:`staging.life.table.stage.notmet`),children:(0,H.jsx)(W,{k:i.eligibility[`stage${e}`]?`staging.life.table.stage.met`:`staging.life.table.stage.notmet`,vars:{n:e}})})}),nh.filter(t=>rh[t].stage===e).map(e=>{let n=i.landmarks[e];return(0,H.jsxs)(`tr`,{children:[(0,H.jsxs)(`td`,{...G(`staging.landmark.${e}.short`),children:[(0,H.jsx)(Oh,{id:rh[e].icon}),(0,H.jsx)(W,{k:`staging.landmark.${e}.short`}),e===`sdmt`&&(0,H.jsxs)(H.Fragment,{children:[` `,(0,H.jsx)(W,{k:`staging.calc.table.sdmt.high`,as:`span`,className:`muted small`})]})]}),(0,H.jsxs)(`td`,{className:`num`,children:[Th(e,t.values[e]),` `,(0,H.jsx)(`span`,{className:`muted`,children:Eh(e,n.cutoff)})]}),(0,H.jsx)(`td`,{children:(0,H.jsx)(W,{k:n.met?`staging.life.table.crossed`:`staging.life.table.inside`,as:`span`,className:n.met?`met`:`notmet`})})]},e)})]},e))})]}),(0,H.jsx)(`div`,{className:`life-actions`,children:(0,H.jsx)(`button`,{type:`button`,className:`btn ghost`,id:`life-send`,onClick:c,...G(`staging.life.send`),children:(0,H.jsx)(W,{k:`staging.life.send`,vars:{name:(0,H.jsx)(W,{k:`staging.life.carrier.c${e}.name`}),age:r}})})})]})]})}var Lg={putamen:[3.4,6.6],caudate:[2.4,4.9],tms:[0,60],sdmt:[0,60],tfc:[0,13],is:[10,100]},Rg=Ip(hg.min,hg.max,1),zg=e=>e===`putamen`||e===`caudate`;function Bg({cag:e,view:t}){let n=U(),r=(0,_.useMemo)(()=>{let t=Rg.map(t=>Dg(e,t)),r={};for(let i of nh)r[i]=[{key:`cut`,label:n(`staging.life.spark.cutoff`),copyKey:`staging.life.spark.cutoff`,color:`var(--s${rh[i].stage})`,dashed:!0,width:1.5,tipFormat:e=>Eh(i,e),points:Rg.map(e=>[e,gg(i,e)])},{key:`val`,label:n(`staging.life.carrier.c${e}.name`),copyKey:`staging.life.carrier.c${e}.name`,color:`var(--ink)`,width:2,tipFormat:e=>Th(i,e),points:Rg.map((e,n)=>[e,t[n][i]])}];return r},[e,n]);return(0,H.jsx)(`div`,{className:`sparks`,id:`life-sparks`,children:nh.map(e=>{let i=t.ev.landmarks[e],a=n(`staging.landmark.${e}.label`),o=n(`staging.life.spark.aria`,{label:a}),[s,c]=Lg[e];return(0,H.jsxs)(`div`,{className:`spark stage-${rh[e].stage}`,children:[(0,H.jsxs)(`div`,{className:`t`,children:[(0,H.jsxs)(`span`,{children:[(0,H.jsx)(W,{k:`staging.landmark.${e}.short`,as:`b`}),` `,(0,H.jsx)(W,{k:`staging.life.spark.vs`,as:`span`,className:`muted`})]}),(0,H.jsxs)(`span`,{className:i.met?`v met`:`v`,children:[Th(e,t.values[e]),` `,Eh(e,i.cutoff)]})]}),(0,H.jsx)(Xh,{width:220,height:96,margin:{top:6,right:8,bottom:16,left:30},snap:1,directLabels:!1,ariaLabel:o,title:o,x:{min:hg.min,max:hg.max,ticks:[20,40,60],tipLabel:e=>n(`staging.chart.tip.age`,{age:e.toFixed(0)}),tipKey:`staging.chart.tip.age`},y:{min:s,max:c,ticks:[s,c],format:t=>t.toFixed(+!!zg(e))},series:r[e],marker:{x:t.age}})]},e)})})}var Vg=[0,1,2,3];function Hg({cag:e,view:t,playing:n,steps:r,activeStep:i,listRef:a,storySlotRef:o,storySectionRef:s}){let c=U(),{stage:l,next:u,crossed:d}=t,f=(0,H.jsx)(W,{k:`staging.life.carrier.c${e}.name`}),p=d.map((e,t)=>(0,H.jsxs)(`span`,{...G(`staging.landmark.${e}.label`),children:[t>0&&`, `,(0,H.jsx)(W,{k:`staging.landmark.${e}.label`})]},e)),m=d.length===0&&u,h=m?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(W,{k:`staging.life.just.none`}),` `,(0,H.jsx)(W,{k:`staging.life.just.first`,vars:{age:u.age}})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(W,{k:`staging.life.just.crossed`,vars:{list:p}}),` `,u?(0,H.jsx)(W,{k:`staging.life.just.next`,vars:{age:u.age}}):(0,H.jsx)(W,{k:`staging.life.just.last`,vars:{age:hg.max}})]});return(0,H.jsxs)(`div`,{className:`story-grid`,id:`story`,ref:s,children:[(0,H.jsx)(`ol`,{className:`steps`,id:`life-steps`,ref:a,"aria-label":c(`staging.life.steps.label`),children:r.map((e,t)=>(0,H.jsx)(`li`,{className:`stage-${e.stage}${t===i?` active`:``}`,"data-age":e.age,children:(0,H.jsxs)(`div`,{className:`step-card`,children:[(0,H.jsx)(W,{k:`staging.life.step.age`,as:`div`,className:`age`,vars:{age:e.age}}),(0,H.jsx)(W,{k:e.titleKey,as:`div`,className:`t`,vars:Ah(e.vars)}),(0,H.jsx)(W,{k:e.textKey,as:`p`,vars:Ah(e.vars)})]})},t))}),(0,H.jsxs)(`div`,{className:`story-pin`,id:`story-pin`,children:[(0,H.jsx)(`div`,{id:`story-visual`,className:`story-visual`,ref:o}),(0,H.jsx)(`div`,{className:`mini-timeline`,id:`life-timeline`,role:`img`,"aria-label":c(`staging.life.strip.label`,{n:l}),children:Vg.map(e=>(0,H.jsxs)(`div`,{className:`stage-${e}${e<l?` past`:e===l?` now`:``}`,children:[(0,H.jsx)(W,{k:`staging.stage.label`,as:`b`,vars:{n:e}}),(0,H.jsx)(W,{k:`staging.stage${e}.name`,as:`span`})]},e))}),(0,H.jsxs)(`div`,{className:`story stage-${l}`,id:`life-story`,children:[(0,H.jsx)(W,{k:`staging.life.story.s${l}.title`,as:`h3`}),(0,H.jsx)(W,{k:`staging.life.story.s${l}.text`,as:`p`,vars:{name:f,cag:e}}),(0,H.jsx)(`p`,{className:`just`,...G(m?`staging.life.just.none`:`staging.life.just.crossed`),children:h})]}),(0,H.jsxs)(`p`,{id:`life-status`,className:`visually-hidden`,"aria-live":n?`off`:`polite`,children:[(0,H.jsx)(W,{k:`staging.life.story.s${l}.title`}),` `,h]}),(0,H.jsx)(Bg,{cag:e,view:t})]})]})}var Ug=550;function Wg(e,t){let n=(0,_.useRef)(0),r=(0,_.useCallback)(()=>{typeof window.cancelAnimationFrame==`function`&&(n.current&&window.cancelAnimationFrame(n.current),n.current=0)},[]);(0,_.useEffect)(()=>r,[r]);let i=(0,_.useCallback)(i=>{if(typeof window.requestAnimationFrame!=`function`){t(i);return}r();let a=e();if(vd()||Math.abs(i-a)<2){t(i);return}let o=-1,s=e=>{o<0&&(o=e);let r=Math.min(1,(e-o)/Ug),c=1-(1-r)**3;t(r>=1?i:Math.round(a+(i-a)*c)),n.current=r<1?window.requestAnimationFrame(s):0};n.current=window.requestAnimationFrame(s)},[e,t,r]);return(0,_.useMemo)(()=>({glide:i,cancel:r}),[i,r])}function Gg(e,t,n){return e<=n/2&&t>=n/2}function Kg(e,t){let n=(0,_.useRef)(t);(0,_.useEffect)(()=>{n.current=t},[t]),(0,_.useEffect)(()=>{if(typeof window.requestAnimationFrame!=`function`)return;let t=0,r=0,i=()=>{t=0;let i=e.current;if(!i)return;let a=i.getBoundingClientRect(),o=window.innerHeight;if(!Gg(a.top,a.bottom,o))return;let s=jf([...i.querySelectorAll(`li`)].map(e=>e.getBoundingClientRect().top),o/2);s!==r&&(r=s,n.current(s))},a=()=>{t||=window.requestAnimationFrame(i)};return window.addEventListener(`scroll`,a,{passive:!0}),window.addEventListener(`resize`,a),()=>{window.removeEventListener(`scroll`,a),window.removeEventListener(`resize`,a),t&&window.cancelAnimationFrame(t)}},[e])}function qg(e,t,n){let r=(0,_.useRef)(n);(0,_.useEffect)(()=>{r.current=n},[n]),(0,_.useEffect)(()=>{if(!e)return;let n=setInterval(()=>r.current(),t);return()=>clearInterval(n)},[e,t])}var Jg=300,Yg=hg.max-hg.min;function Xg({storySlotRef:e,storySectionRef:t}={}){let n=U(),[r,i]=(0,_.useState)(42),[a,o]=(0,_.useState)(hg.min),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(0),{pick:d,followStage:f,reportStriatum:p}=zh(),m=(0,_.useRef)(null),h=(0,_.useRef)(hg.min),g=(0,_.useCallback)(e=>{h.current=e,o(e)},[]),{glide:v,cancel:y}=Wg((0,_.useCallback)(()=>h.current,[]),g),b=(0,_.useMemo)(()=>jg(r),[r]),x=(0,_.useMemo)(()=>kg(r),[r]),S=(0,_.useMemo)(()=>Mg(r,a,x),[r,a,x]),C=e=>{g(e),u(Pg(b,e))};qg(s,Jg,()=>{h.current>=hg.max?c(!1):C(h.current+1)});function w(){if(y(),s){c(!1);return}h.current>=hg.max&&C(hg.min),c(!0)}function T(e){y(),c(!1),i(e),u(Pg(jg(e),h.current))}Kg(m,e=>{u(e),c(!1),v(b[e].age)});let E=S.stage;(0,_.useEffect)(()=>{f(E)},[E,f]);let D=(0,_.useMemo)(()=>Dg(r,hg.min),[r]);(0,_.useEffect)(()=>{p({cag:r,age:a,stage:S.stage,scales:ep(S.values,D)})},[r,a,S,D,p]);let O=(0,_.useEffectEvent)(e=>{y(),c(!1);let t=Ng(r,e);t!==null&&C(t)}),k=(0,_.useRef)(d?d.id:null);(0,_.useEffect)(()=>{d&&d.id!==k.current&&(k.current=d.id,O(d.stage))},[d]);let A=(0,H.jsx)(W,{k:`staging.life.carrier.c${r}.name`});return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`div`,{className:`section-head`,children:[(0,H.jsx)(W,{k:`staging.life.title`,as:`h2`,id:`h-life`,vars:{name:A,cag:r}}),(0,H.jsx)(W,{k:`staging.life.lede`,as:`p`,className:`lede`})]}),(0,H.jsxs)(`div`,{className:`panel raised life`,children:[(0,H.jsx)(`div`,{className:`carrier-row`,id:`carrier-row`,role:`group`,"aria-label":n(`staging.life.carriers.label`),children:mg.map(e=>{let[t,n,i]=Pp(e);return(0,H.jsxs)(`button`,{type:`button`,"aria-pressed":e===r,onClick:()=>T(e),children:[(0,H.jsx)(W,{k:`staging.life.carrier.heading`,as:`b`,vars:{name:(0,H.jsx)(W,{k:`staging.life.carrier.c${e}.name`}),cag:(0,H.jsx)(W,{k:`staging.life.carrier.cag`,as:`span`,className:`cagn`,vars:{cag:e}})}}),(0,H.jsx)(W,{k:`staging.life.carrier.c${e}.note`,as:`span`,vars:{t1:t,t2:n,t3:i}})]},e)})}),(0,H.jsxs)(`div`,{className:`life-controls`,children:[(0,H.jsxs)(`div`,{className:`life-age`,children:[(0,H.jsx)(W,{k:`staging.life.age.label`,as:`span`,className:`eyebrow`}),(0,H.jsx)(`span`,{className:`big`,id:`life-age-big`,children:a})]}),(0,H.jsxs)(`div`,{className:`life-slider`,children:[(0,H.jsx)(W,{k:`staging.life.slider.label`,as:`label`,htmlFor:`life-age`}),(0,H.jsx)(`input`,{type:`range`,id:`life-age`,min:hg.min,max:hg.max,step:1,value:a,"aria-valuetext":n(`staging.life.slider.valuetext`,{age:a}),onChange:e=>{y(),c(!1),C(Number(e.target.value))}}),(0,H.jsx)(`div`,{className:`life-ticks`,id:`life-ticks`,"aria-hidden":`true`,children:x.map(e=>(0,H.jsx)(`span`,{className:`stage-${e.stage}`,...G(`staging.life.tick`),style:{left:`${((e.age-hg.min)/Yg*100).toFixed(2)}%`},children:n(`staging.life.tick`,{n:e.stage,age:e.age})},e.stage))})]}),(0,H.jsxs)(`button`,{type:`button`,className:`btn primary`,id:`life-play`,"data-playing":s,onClick:w,...G(s?`staging.life.pause`:`staging.life.play`),children:[(0,H.jsx)(`span`,{"aria-hidden":`true`,children:s?`⏸ `:`▶ `}),s?(0,H.jsx)(W,{k:`staging.life.pause`}):(0,H.jsx)(W,{k:`staging.life.play`})]})]})]}),(0,H.jsx)(Hg,{cag:r,view:S,playing:s,steps:b,activeStep:l,listRef:m,storySlotRef:e,storySectionRef:t}),(0,H.jsx)(Ig,{cag:r,view:S}),(0,H.jsxs)(`p`,{className:`note warn spaced`,...G(`staging.life.note`),children:[(0,H.jsx)(eg,{k:`staging.life.badge`}),`\xA0 `,(0,H.jsx)(W,{k:`staging.life.note`})]})]})}var Zg=Ip(18,90,.5),Qg=[0,1,2,3],$g=[40,42,50],e_=40,t_=50,n_=650,r_=e=>e===0?`start`:e===3?`end`:`peak`;function i_(e,t,n,r){let i=Zg.map(t=>Fp(e,t));return Qg.map(e=>({key:`s${e}`,label:t(e),copyKey:n,color:`var(--s${e})`,area:`below`,areaOpacity:r,labelAt:r_(e),points:Zg.map((t,n)=>[t,i[n][e]])}))}function a_(){let e=U(),[t,n]=(0,_.useState)(42),[r,i]=(0,_.useState)(!1),a=(0,_.useRef)(t),o=e=>{a.current=e,n(e)};qg(r,n_,()=>{a.current>=t_?i(!1):o(a.current+1)});function s(){if(r){i(!1);return}t>=t_&&o(e_),i(!0)}let c=(0,_.useMemo)(()=>i_(t,t=>e(`staging.stage.label`,{n:t}),`staging.stage.label`),[t,e]),l=(0,_.useMemo)(()=>$g.map(t=>({cag:t,by:Pp(t)[2],series:i_(t,t=>e(`staging.nh.fixed.series`,{n:t}),`staging.nh.fixed.series`,.25)})),[e]),[u,d,f]=Np(t).map(e=>Number(e.toFixed(0)));return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`div`,{className:`section-head`,children:[(0,H.jsx)(W,{k:`staging.nh.title`,as:`h2`,id:`h-nh`}),(0,H.jsx)(W,{k:`staging.nh.lede`,as:`p`,className:`lede`})]}),(0,H.jsxs)(`div`,{className:`panel raised`,children:[(0,H.jsxs)(`div`,{className:`nh-controls`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`label`,{htmlFor:`nh-cag`,...G(`staging.nh.slider.label`),children:[(0,H.jsx)(Oh,{id:`i-cag`}),(0,H.jsx)(W,{k:`staging.nh.slider.label`})]}),(0,H.jsx)(`input`,{type:`range`,id:`nh-cag`,min:e_,max:t_,step:1,value:t,"aria-valuetext":e(`staging.nh.slider.valuetext`,{cag:t}),onChange:e=>{i(!1),o(Number(e.target.value))}})]}),(0,H.jsxs)(`div`,{className:`nh-right`,children:[(0,H.jsxs)(`button`,{type:`button`,className:`btn primary`,id:`nh-play`,"data-playing":r,onClick:s,...G(r?`staging.nh.pause`:`staging.nh.play`),children:[(0,H.jsx)(`span`,{"aria-hidden":`true`,children:r?`⏸ `:`▶ `}),r?(0,H.jsx)(W,{k:`staging.nh.pause`}):(0,H.jsx)(W,{k:`staging.nh.play`})]}),(0,H.jsxs)(`div`,{className:`nh-cag-big`,children:[(0,H.jsx)(W,{k:`staging.nh.cag.label`,as:`span`,className:`eyebrow`}),(0,H.jsx)(`br`,{}),(0,H.jsx)(`span`,{className:`cag-big`,id:`nh-cag-big`,children:t})]})]})]}),(0,H.jsx)(`div`,{className:`strip`,id:`nh-strip`,...G(`staging.nh.strip`),children:e(`staging.nh.strip`,{cag:t})}),(0,H.jsxs)(`div`,{className:`nh-grid`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(Xh,{id:`nh-chart`,className:`framed`,width:720,height:320,margin:{top:18,right:62,bottom:40,left:48},frame:!0,snap:1,ariaLabel:e(`staging.nh.chart.aria`,{cag:t}),title:e(`staging.nh.chart.title`,{cag:t}),x:{min:18,max:90,ticks:[20,30,40,50,60,70,80,90],title:e(`staging.chart.axis.age`),tipLabel:t=>e(`staging.chart.tip.age`,{age:t.toFixed(0)}),tipKey:`staging.chart.tip.age`},y:{min:0,max:1,ticks:[0,.25,.5,.75,1],title:e(`staging.nh.chart.y`),format:e=>e.toFixed(2),tipFormat:e=>`${(e*100).toFixed(0)}%`},series:c}),(0,H.jsx)(`div`,{className:`legend`,children:Qg.map(t=>(0,H.jsx)(`span`,{className:`stage-${t}`,...G(`staging.stage.label`),children:e(`staging.stage.label`,{n:t})},t))})]}),(0,H.jsxs)(`div`,{className:`nh-fixed`,id:`nh-fixed`,"aria-label":e(`staging.nh.fixed.label`),children:[l.map(t=>(0,H.jsxs)(`div`,{className:`panel`,children:[(0,H.jsxs)(`div`,{className:`t`,children:[(0,H.jsx)(`span`,{...G(`staging.nh.fixed.cag`),children:e(`staging.nh.fixed.cag`,{cag:t.cag})}),(0,H.jsx)(`span`,{...G(`staging.nh.fixed.by`),children:e(`staging.nh.fixed.by`,{age:t.by})})]}),(0,H.jsx)(Xh,{width:260,height:110,margin:{top:6,right:26,bottom:16,left:26},snap:1,ariaLabel:e(`staging.nh.fixed.aria`,{cag:t.cag}),title:e(`staging.nh.fixed.aria`,{cag:t.cag}),x:{min:18,max:90,ticks:[20,40,60,80],tipLabel:t=>e(`staging.chart.tip.age`,{age:t.toFixed(0)}),tipKey:`staging.chart.tip.age`},y:{min:0,max:1,ticks:[0,1],format:e=>e.toFixed(0),tipFormat:e=>`${(e*100).toFixed(0)}%`},series:t.series})]},t.cag)),(0,H.jsx)(`div`,{className:`legend`,children:Qg.map(t=>(0,H.jsx)(`span`,{className:`stage-${t}`,...G(`staging.nh.fixed.legend`),children:e(`staging.nh.fixed.legend`,{n:t})},t))})]})]}),(0,H.jsxs)(`div`,{className:`nh-readouts`,id:`nh-readouts`,children:[(0,H.jsxs)(`div`,{className:`stage-1`,children:[(0,H.jsx)(W,{k:`staging.nh.read.left`,as:`span`,className:`k`}),` `,(0,H.jsxs)(`span`,{className:`v`,children:[u,` `,(0,H.jsx)(W,{k:`staging.nh.read.years`,as:`small`})]})]}),(0,H.jsxs)(`div`,{className:`stage-2`,children:[(0,H.jsx)(W,{k:`staging.nh.read.s2`,as:`span`,className:`k`}),` `,(0,H.jsxs)(`span`,{className:`v`,children:[d,` `,(0,H.jsx)(W,{k:`staging.nh.read.years`,as:`small`})]})]}),(0,H.jsxs)(`div`,{className:`stage-3`,children:[(0,H.jsx)(W,{k:`staging.nh.read.s3`,as:`span`,className:`k`}),` `,(0,H.jsxs)(`span`,{className:`v`,children:[f,` `,(0,H.jsx)(`small`,{...G(`staging.nh.read.years.after`),children:e(`staging.nh.read.years.after`,{d:f-u})})]})]})]}),(0,H.jsxs)(`p`,{className:`note warn spaced`,...G(`staging.nh.note`),children:[(0,H.jsx)(eg,{k:`staging.nh.badge`}),`\xA0 `,(0,H.jsx)(W,{k:`staging.nh.note`})]})]})]})}var o_=`/hd-platform/assets/caudate-Dy5Cly-M.png`,s_=`/hd-platform/assets/putamen-jiw6eOMq.png`,c_=[0,1,2,3],l_=[`mild`,`moderate`,`severe`],u_=e=>nh.filter(t=>rh[t].stage===e);function d_(){let{stage:e,pickStage:t,attend:n}=zh(),r=U(),i=wa(`staging.hero.timeline.label`),a=c_.map(t=>({n:t,label:r(`staging.stage.label`,{n:t}),labelAttrs:G(`staging.stage.label`),lead:t===0?(0,H.jsx)(Oh,{id:`i-cag`}):(0,H.jsx)(H.Fragment,{children:u_(t).map(e=>(0,H.jsx)(Oh,{id:rh[e].icon},e))}),name:(0,H.jsx)(W,{k:`staging.stage${t}.name`}),nameAttrs:G(`staging.stage${t}.name`),pressed:e===t}));return(0,H.jsxs)(`div`,{className:`timeline`,role:`group`,"aria-label":i,onFocus:n,children:[(0,H.jsx)(wm,{bands:a,step:`quarter`,onPick:t}),(0,H.jsx)(`div`,{className:`axis`,children:c_.map(e=>(0,H.jsxs)(`div`,{className:`tick stage-${e}`,children:[(0,H.jsx)(W,{k:`staging.stage.label`,as:`span`,className:`lbl`,vars:{n:e}}),(0,H.jsx)(`span`,{className:`lm`,...e===0?G(`staging.stage0.axis`):{},children:e===0?(0,H.jsx)(W,{k:`staging.stage0.axis`}):u_(e).map((e,t)=>(0,H.jsxs)(`span`,{...G(`staging.landmark.${e}.label`),children:[t>0&&(0,H.jsx)(`br`,{}),(0,H.jsx)(W,{k:`staging.landmark.${e}.label`})]},e))}),e===3&&(0,H.jsx)(`span`,{className:`sev`,children:l_.map(e=>(0,H.jsx)(W,{k:`staging.severity.${e}.label`,as:`span`},e))})]},e))})]})}function f_({k:e,className:t}){let n=wa(`staging.landmark.${e}.label`);return(0,H.jsxs)(`div`,{className:t||void 0,title:n,children:[(0,H.jsx)(Oh,{id:rh[e].icon}),(0,H.jsx)(W,{k:`staging.landmark.${e}.short`,as:`span`})]})}function p_({stage:e}){let t=wa(`staging.picto.putamen.alt`),n=wa(`staging.picto.caudate.alt`),r=(0,H.jsx)(W,{k:`staging.picto.or`,as:`span`,className:`plus`});if(e===0)return(0,H.jsx)(`div`,{className:`picto`,children:(0,H.jsx)(Oh,{id:`i-cag`})});if(e===1)return(0,H.jsxs)(`div`,{className:`picto`,children:[(0,H.jsx)(`img`,{src:s_,alt:t}),r,(0,H.jsx)(`img`,{src:o_,alt:n})]});let[i,a]=u_(e);return(0,H.jsxs)(`div`,{className:`picto`,children:[(0,H.jsx)(Oh,{id:rh[i].icon}),r,(0,H.jsx)(Oh,{id:rh[a].icon})]})}function m_(){let{stage:e,source:t}=zh();return(0,H.jsxs)(`div`,{className:`stage-detail stage-${e}`,"aria-live":t===`timeline`?`polite`:`off`,children:[(0,H.jsxs)(`div`,{className:`head`,children:[(0,H.jsx)(W,{k:`staging.stage${e}.condition`,as:`span`,className:`eyebrow`}),(0,H.jsx)(`span`,{className:`n`,children:e}),(0,H.jsx)(W,{k:`staging.stage${e}.name`,as:`h3`}),(0,H.jsx)(p_,{stage:e})]}),(0,H.jsxs)(`div`,{className:`body`,children:[(0,H.jsx)(W,{k:`staging.stage${e}.criterion`,as:`p`,className:`crit`}),e===3&&(0,H.jsx)(`p`,{className:`small muted`,children:l_.map(e=>(0,H.jsxs)(`span`,{...G(`staging.severity.line`),children:[(0,H.jsx)(W,{k:`staging.severity.line`,vars:{label:(0,H.jsx)(W,{k:`staging.severity.${e}.label`}),text:(0,H.jsx)(W,{k:`staging.severity.${e}.text`})}}),` `]},e))}),(0,H.jsx)(W,{k:`staging.detail.detected`,as:`div`,className:`eyebrow detected-label`}),(0,H.jsx)(`div`,{className:`detect`,children:nh.map(t=>{let n=rh[t].stage===e?`on`:rh[t].stage<e?``:`dim`;return(0,H.jsx)(f_,{k:t,className:n},t)})})]}),(0,H.jsx)(`div`,{className:`who`,children:(0,H.jsxs)(`div`,{children:[(0,H.jsx)(W,{k:`staging.detail.notices`,as:`span`,className:`k`}),(0,H.jsx)(W,{k:`staging.stage${e}.notices`,as:`span`})]})})]})}function h_({sections:e,sourceKey:t}){let n=wa(`staging.sections.label`),[r,i]=(0,_.useState)(null);return(0,_.useEffect)(()=>{if(typeof IntersectionObserver>`u`)return;let t=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&i(t.target.id)},{rootMargin:`-40% 0px -55% 0px`});for(let n of e){let e=document.getElementById(n.id);e&&t.observe(e)}return()=>t.disconnect()},[e]),(0,H.jsx)(`nav`,{className:`sections`,"aria-label":n,children:(0,H.jsxs)(`div`,{className:`wrap`,children:[t&&(0,H.jsx)(W,{k:t,as:`p`,className:`source`}),(0,H.jsx)(`ul`,{children:e.map(e=>(0,H.jsx)(`li`,{children:(0,H.jsx)(Ra,{to:e.id,"aria-current":r===e.id?`true`:void 0,...G(e.labelKey),children:(0,H.jsx)(W,{k:e.labelKey})})},e.id))})]})})}var g_=`/hd-platform/assets/striatum-still-CKqhRj06.png`,__={caudate:1,putamen:1,ventricle:1},v_=Object.fromEntries(vp.map(e=>[e,hp[e].on]));function y_(e){let t=Math.round(e);return t===0?`0`:(t>0?`+`:`−`)+Math.abs(t)}var b_=e=>{let t=Math.round(e);return t<0?`−${-t}`:String(t)},x_=e=>`#${e.toString(16).padStart(6,`0`)}`;function S_(){return navigator.connection?.saveData===!0}function C_({host:e,loader:t,wide:n}){let r=U(),{striatum:i}=zh(),a=Op(`.staging`),o=`striatum-${(0,_.useId)()}`,s=(0,_.useRef)(null),c=(0,_.useRef)(null),[l,u]=(0,_.useState)(`idle`),[d,f]=(0,_.useState)(`3d`),[p,m]=(0,_.useState)(v_),[h,g]=(0,_.useState)(null),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(0),w=n&&!S_()&&!b,T=(0,_.useRef)(null),E=(0,_.useRef)({colors:a,canvasId:o});(0,_.useEffect)(()=>{E.current={colors:a,canvasId:o}},[a,o]);let D=(0,_.useRef)(!0),O=(0,_.useRef)(!1),k=(0,_.useRef)(!0),A=(0,_.useCallback)(()=>{let e=c.current;e&&(k.current&&!document.hidden?e.start():e.stop())},[]),j=(0,_.useCallback)(async e=>{if(O.current)return;O.current=!0,u(`loading`);let n;try{n=await t()}catch{O.current=!1,D.current&&(x(!0),u(`idle`),e&&C(e=>e+1));return}let r=s.current;if(!D.current||!r)return;let i;try{i=n.createBrainScene(r,n.mesh,{reducedMotion:vd(),colors:E.current.colors})}catch{for(let e of r.querySelectorAll(`canvas`))e.remove();O.current=!1,D.current&&(x(!0),u(`failed`),e&&C(e=>e+1));return}if(!i){u(`failed`);return}c.current=i;let a=r.querySelector(`canvas`);a&&(a.setAttribute(`role`,`img`),a.setAttribute(`data-canvas-id`,E.current.canvasId),a.hasAttribute(`tabindex`)||(a.tabIndex=0)),i.setMode(`3d`),f(`3d`),g(n.mesh),y(i.cutPlanes()),u(`ready`),A(),e&&a?.focus({preventScroll:!0})},[t,A]);(0,_.useEffect)(()=>{let e=s.current;if(!e)return;let t=()=>A();document.addEventListener(`visibilitychange`,t);let n=null;return typeof IntersectionObserver>`u`?w&&queueMicrotask(()=>void j(!1)):(n=new IntersectionObserver(e=>{let t=e[e.length-1];t&&(k.current=t.isIntersecting,t.isIntersecting&&w&&j(!1),A())}),n.observe(e)),()=>{n?.disconnect(),document.removeEventListener(`visibilitychange`,t)}},[w,j,A]),(0,_.useEffect)(()=>(D.current=!0,()=>{D.current=!1;let e=c.current;c.current=null,e?.stop(),e?.dispose()}),[]),(0,_.useEffect)(()=>{c.current?.setColors(a)},[a]),(0,_.useEffect)(()=>{S&&T.current?.focus({preventScroll:!0})},[S]);let M=i?.scales??__;(0,_.useEffect)(()=>{l===`ready`&&i&&c.current?.setScales(i.scales)},[l,i]);let N=l===`ready`,P=r($f[d]?`staging.striatum.canvas.aria`:`staging.striatum.canvas.aria.cut`);(0,_.useEffect)(()=>{N&&s.current?.querySelector(`canvas`)?.setAttribute(`aria-label`,P)},[N,P]);let F=i?r(`staging.life.carrier.c${i.cag}.name`):null,I=rp(M.caudate)&&rp(M.putamen),L=r(`staging.striatum.readout.unit`),R=e=>{c.current?.setMode(e),f(e)},ee=(e,t)=>{for(let n of yp(e))c.current?.setVisible(n,t);m(n=>({...n,[e]:t}))},te=l===`failed`?null:N?d===`3d`?r(I?`staging.striatum.caption.3d`:`staging.striatum.caption.3d.lost`):d===`compare`?!i||!F?r(`staging.striatum.caption.compare.default`):I?r(`staging.striatum.caption.compare.same`,{name:F,age:i.age}):r(`staging.striatum.caption.compare`,{name:F}):r(`staging.striatum.caption.${d}`,{mm:v&&(d===`coronal`||d===`axial`||d===`sagittal`)?b_(v[d]):``}):r(`staging.striatum.caption.still`),ne=l===`failed`?null:N?d===`3d`?I?`staging.striatum.caption.3d`:`staging.striatum.caption.3d.lost`:d===`compare`?!i||!F?`staging.striatum.caption.compare.default`:I?`staging.striatum.caption.compare.same`:`staging.striatum.caption.compare`:`staging.striatum.caption.${d}`:`staging.striatum.caption.still`,re=i&&F?`staging.striatum.title.life`:`staging.striatum.title.default`,ie=i&&F?`staging.striatum.tag.life`:`staging.striatum.tag.after`,z=i&&!I?`staging.striatum.badge.changed`:`staging.striatum.badge.base`,ae=e=>({"--c":x_(e===`caudate`?a.caudate:e===`putamen`?a.putamen:e===`cortex`?a.cortex:e===`ventricle`?a.fluid:hp[e].color)});return(0,qp.createPortal)((0,H.jsxs)(`div`,{className:`striatum`,children:[(0,H.jsx)(`div`,{className:`eyebrow`,id:`b3d-title`,...G(re),children:i&&F?r(`staging.striatum.title.life`,{n:i.stage,name:F,age:i.age}):r(`staging.striatum.title.default`)}),(0,H.jsx)(`div`,{className:`slice-tabs`,id:`b3d-modes`,role:`group`,"aria-label":r(`staging.striatum.modes.label`),children:Zf.map(e=>(0,H.jsx)(`button`,{type:`button`,"aria-pressed":d===e,disabled:!N,onClick:()=>R(e),...G(`staging.striatum.mode.${e}`),children:r(`staging.striatum.mode.${e}`)},e))}),(0,H.jsxs)(`div`,{className:`brain3d`,id:`brain3d`,children:[(0,H.jsxs)(`div`,{className:`b3d-stage${l===`failed`?` failed`:``}`,id:`b3d-stage`,ref:s,"data-mode":d,"data-status":l,role:`group`,"aria-label":r(`staging.striatum.stage.aria`),children:[!N&&(0,H.jsx)(`img`,{className:`b3d-fallback`,src:g_,width:800,height:600,alt:r(`staging.striatum.still.alt`)}),l===`failed`&&(0,H.jsx)(`div`,{className:`b3d-fallback-note`,role:`status`,...G(`staging.striatum.webgl.note`),children:r(`staging.striatum.webgl.note`)}),!w&&(l===`idle`||l===`failed`&&b)&&(0,H.jsx)(`button`,{type:`button`,className:`btn ghost b3d-load`,ref:T,onClick:()=>void j(!0),...G(`staging.striatum.load`),children:r(`staging.striatum.load`)}),l===`loading`&&(0,H.jsx)(`div`,{className:`b3d-load small muted`,role:`status`,...G(`staging.striatum.loading`),children:r(`staging.striatum.loading`)}),(0,H.jsx)(`div`,{className:`b3d-tag b3d-tag-l`,id:`b3d-tag-l`,...G(`staging.striatum.tag.before`),children:r(`staging.striatum.tag.before`)}),(0,H.jsx)(`div`,{className:`b3d-tag b3d-tag-r`,id:`b3d-tag-r`,...G(ie),children:i&&F?r(`staging.striatum.tag.life`,{name:F,age:i.age}):r(`staging.striatum.tag.after`)}),N&&(0,H.jsx)(`div`,{className:`b3d-badge${i&&!I?` changed`:``}`,id:`b3d-badge`,...G(z),children:i&&!I?r(`staging.striatum.badge.changed`,{c:y_(np(M.caudate)),p:y_(np(M.putamen))}):r(`staging.striatum.badge.base`)})]}),(0,H.jsx)(`div`,{className:`small muted`,id:`b3d-caption`,children:(0,H.jsx)(`span`,{...ne?G(ne):{},children:te})}),(0,H.jsxs)(`details`,{className:`b3d-more`,children:[(0,H.jsx)(`summary`,{...G(`staging.striatum.more.summary`),children:r(`staging.striatum.more.summary`)}),(0,H.jsx)(`div`,{className:`b3d-presets`,role:`group`,"aria-label":r(`staging.striatum.presets.label`),children:Qf.map(e=>(0,H.jsx)(`button`,{type:`button`,disabled:!N,onClick:()=>c.current?.setView(e),...G(`staging.striatum.preset.${e}`),children:r(`staging.striatum.preset.${e}`)},e))}),(0,H.jsxs)(`div`,{className:`b3d-controls`,role:`group`,"aria-label":r(`staging.striatum.groups.label`),children:[vp.map(e=>(0,H.jsxs)(`label`,{...G(`staging.striatum.group.${e}`),children:[(0,H.jsx)(`input`,{type:`checkbox`,checked:p[e],disabled:!N,onChange:t=>ee(e,t.currentTarget.checked)}),(0,H.jsx)(`i`,{"aria-hidden":`true`,style:ae(e)}),r(`staging.striatum.group.${e}`)]},e)),(0,H.jsx)(`button`,{type:`button`,className:`btn`,disabled:!N,onClick:()=>c.current?.resetView(),...G(`staging.striatum.reset`),children:r(`staging.striatum.reset`)})]}),(0,H.jsx)(`div`,{className:`b3d-readout small`,children:h&&ap(h,M).flatMap(e=>[(0,H.jsx)(`span`,{...G(`staging.striatum.readout.${e.group}`),children:r(`staging.striatum.readout.${e.group}`)},`${e.group}-label`),(0,H.jsxs)(`span`,{children:[(0,H.jsxs)(`b`,{children:[e.nowCm3.toFixed(1),` `,L]}),` `,(0,H.jsx)(`span`,{className:`muted`,...G(e.atBase?`staging.striatum.readout.base`:`staging.striatum.readout.from`),children:e.atBase?r(`staging.striatum.readout.base`):r(`staging.striatum.readout.from`,{v0:e.baseCm3.toFixed(1),pct:y_(e.percent)})})]},`${e.group}-value`)])}),(0,H.jsx)(`p`,{className:`small muted b3d-source`,...G(`staging.striatum.figcaption`),children:r(`staging.striatum.figcaption`)})]})]})]}),e)}function w_(e,t,n,r,i){(0,_.useLayoutEffect)(()=>{let a=!0,o=r=>{let a=(r&&i?n.current:t.current)??t.current;a&&e.parentElement!==a&&a.appendChild(e)};o(!1);let s=r.current;if(!i||!s||typeof IntersectionObserver>`u`)return;let c=new IntersectionObserver(e=>{let t=e[e.length-1];a&&t&&o(t.isIntersecting)},{rootMargin:`-20% 0px -20% 0px`});return c.observe(s),()=>{a=!1,c.disconnect()}},[e,t,n,r,i])}var T_=[{id:`stages`,labelKey:`staging.sections.stages`},{id:`life`,labelKey:`staging.sections.life`},{id:`calculator`,labelKey:`staging.sections.calculator`},{id:`natural-history`,labelKey:`staging.sections.nh`},{id:`figures`,labelKey:`staging.sections.figures`}];function E_({loader:e=Xf}={}){let[t]=(0,_.useState)(()=>{let e=document.createElement(`div`);return e.className=`striatum-host`,e}),n=(0,_.useRef)(null),r=Uf(`(min-width: 1001px)`),i=(0,_.useRef)(null),a=(0,_.useRef)(null);return(0,_.useEffect)(()=>()=>t.remove(),[t]),w_(t,n,i,a,r),(0,H.jsx)(Rh,{children:(0,H.jsxs)(`div`,{className:`staging`,children:[(0,H.jsx)(Dh,{}),(0,H.jsx)(`div`,{className:`wrap`,children:(0,H.jsx)(Ua,{titleKey:`staging.hero.title`,ledeKey:`staging.hero.lede`,titleId:`h-stages`})}),(0,H.jsx)(h_,{sections:T_,sourceKey:`staging.sections.source`}),(0,H.jsx)(`section`,{className:`hero`,id:`stages`,"aria-labelledby":`h-stages`,children:(0,H.jsx)(`div`,{className:`wrap`,children:(0,H.jsxs)(`div`,{className:`hero-grid`,children:[(0,H.jsxs)(`div`,{className:`hero-left`,children:[(0,H.jsx)(d_,{}),(0,H.jsx)(m_,{})]}),(0,H.jsx)(`div`,{className:`hero-right`,ref:n})]})})}),(0,H.jsx)(`section`,{className:`block`,id:`life`,"aria-labelledby":`h-life`,children:(0,H.jsx)(`div`,{className:`wrap`,children:(0,H.jsx)(Xg,{storySlotRef:i,storySectionRef:a})})}),(0,H.jsx)(`section`,{className:`block`,id:`calculator`,"aria-labelledby":`h-calc`,children:(0,H.jsxs)(`div`,{className:`wrap`,children:[(0,H.jsxs)(`div`,{className:`section-head`,children:[(0,H.jsx)(`h2`,{id:`h-calc`,tabIndex:-1,...G(`staging.calc.title`),children:(0,H.jsx)(W,{k:`staging.calc.title`})}),(0,H.jsx)(W,{k:`staging.calc.lede`,as:`p`,className:`lede`}),(0,H.jsx)(W,{k:`staging.calc.citation`,as:`p`,className:`small muted`})]}),(0,H.jsx)(`div`,{className:`col-narrow`,children:(0,H.jsx)(Jh,{})})]})}),(0,H.jsx)(`section`,{className:`block`,id:`natural-history`,"aria-labelledby":`h-nh`,children:(0,H.jsx)(`div`,{className:`wrap`,children:(0,H.jsx)(a_,{})})}),(0,H.jsx)(`section`,{className:`block`,id:`figures`,"aria-labelledby":`h-fig`,children:(0,H.jsx)(`div`,{className:`wrap`,children:(0,H.jsx)(pg,{})})}),(0,H.jsx)(`div`,{className:`wrap`,children:(0,H.jsx)(W,{k:`staging.credits`,as:`p`,className:`credits`})}),(0,H.jsx)(C_,{host:t,loader:e,wide:r})]})})}function D_(e={}){let{host:t=()=>new To,files:n=ho,examples:r=_o,metadata:i=yo}=e,[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(`idle`),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)([]),[v,y]=(0,_.useState)(null),b=(0,_.useRef)(null),x=(0,_.useRef)(0),S=(0,_.useRef)(!1);return(0,_.useEffect)(()=>{if(!a)return;let e=!1;S.current=!1,c(`loading`),u(null);let o;try{o=t()}catch(e){u(e instanceof Error?e.message:String(e)),c(`error`);return}let s=(async()=>{let[t,a,s,l]=await Promise.all([n(),r(),i(),o.loadBrainAge()]);return e||(f(t.spec),g(a),m(s),y(l.engine),c(`ready`)),o})();return s.catch(t=>{e||(u(t instanceof Error?t.message:String(t)),c(`error`))}),b.current=s,()=>{e=!0,S.current=!0,b.current=null,o.terminate()}},[a]),{status:s,error:l,spec:d,metadata:p,examples:h,engine:v,start:(0,_.useCallback)(()=>o(!0),[]),answer:(0,_.useCallback)(async e=>{let t=b.current;if(!t)throw Error(`the brain-age models were not started`);let n=++x.current,r=()=>!S.current&&x.current===n,i=async(e,t)=>{try{let n=await e(t);return r()?n:null}catch(e){if(S.current)return null;throw e}},a;try{a=await t}catch(e){if(S.current)return null;throw e}let o=await i(t=>t.predictBrainAge(e.x.slice(),e.age),a);return o?{answer:o,at:t=>r()?i(n=>n.brainAgesAt(e.x.slice(),e.age,t),a):Promise.resolve(null),path:(t,n)=>r()?i(r=>r.treePath(t,e.x.slice(),n),a):Promise.resolve(null)}:null},[])}}function O_(e){let t=Object.fromEntries(Ja.map(e=>[e,null]));for(let n of e.answer.answers){let e=n.model.toLowerCase();e in t&&(t[e]=n.status===`ok`?n.gap:null)}return t}var k_=(0,_.createContext)(null);function A_({children:e,handle:t}){let[n,r]=(0,_.useState)(null),i=(0,_.useMemo)(()=>({handle:t,marked:n,setMarked:r}),[t,n]);return(0,H.jsx)(k_.Provider,{value:i,children:e})}function j_({children:e}){return(0,H.jsx)(A_,{handle:D_(),children:e})}function M_({children:e,handle:t}){return t?(0,H.jsx)(A_,{handle:t,children:e}):(0,H.jsx)(j_,{children:e})}function N_(){let e=(0,_.useContext)(k_);if(!e)throw Error(`BrainAgePersonProvider is missing`);return e}var P_=()=>N_().handle;function F_(){let{handle:e,marked:t,setMarked:n}=N_();return{marked:t,status:e.status,setMarked:n}}var I_=[`watch`,`explainer`,`how`];function L_(){let e=wa(`brainage.bar.label`),[t,n]=(0,_.useState)(null);(0,_.useEffect)(()=>{if(typeof IntersectionObserver>`u`)return;let e=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&n(t.target.id)},{rootMargin:`-40% 0px -55% 0px`});for(let t of I_){let n=document.getElementById(t);n&&e.observe(n)}return()=>e.disconnect()},[]);let r=e=>t===e?`true`:void 0;return(0,H.jsx)(`div`,{className:`page-bar`,children:(0,H.jsxs)(`div`,{className:`wrap`,children:[(0,H.jsx)(W,{k:`brainage.bar.source`,as:`p`,className:`source`}),(0,H.jsxs)(`nav`,{"aria-label":e,children:[(0,H.jsx)(Ra,{to:`watch`,"aria-current":r(`watch`),...G(`brainage.bar.watch`),children:(0,H.jsx)(W,{k:`brainage.bar.watch`})}),(0,H.jsx)(`span`,{className:`arrow`,"aria-hidden":`true`,children:`→`}),(0,H.jsx)(Ra,{to:`explainer`,"aria-current":r(`explainer`),...G(`brainage.bar.explainer`),children:(0,H.jsx)(W,{k:`brainage.bar.explainer`})}),(0,H.jsx)(`span`,{className:`arrow`,"aria-hidden":`true`,children:`→`}),(0,H.jsxs)(Ra,{to:`how`,"aria-current":r(`how`),...G(`brainage.bar.how`),children:[(0,H.jsx)(W,{k:`brainage.bar.how`}),` `,(0,H.jsx)(W,{k:`brainage.bar.how.note`,as:`small`,vars:{total:6}})]})]})]})})}var R_={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1},z_=e=>e.stage===null?`var(--ctrl)`:`var(--s${e.stage})`;function B_({people:e,person:t,onPick:n,comparedAge:r,onAge:i,trees:a,onTrees:o,start:s,popoverOpen:c,onUpload:l}){let u=U(),d=(0,_.useRef)(null),f=(0,_.useRef)(null),p=(0,_.useRef)(null),m=t=>{let r=e[(t+e.length)%e.length];n(r.id),d.current?.querySelector(`[data-id="${r.id}"]`)?.focus()},h=e=>t=>{let n=R_[t.key];n&&(t.preventDefault(),m(e+n))},g=Math.min(18,Math.floor(t.age)),v=Math.max(82,Math.ceil(t.age)),y=`calc(8px + (100% - 16px) * ${(t.age-g)/(v-g)})`;return(0,H.jsxs)(`div`,{className:`controls`,children:[(0,H.jsxs)(`div`,{role:`group`,"aria-labelledby":`bx-who`,children:[(0,H.jsx)(`span`,{className:`lab`,id:`bx-who`,...G(`brainage.explainer.scan`),children:u(`brainage.explainer.scan`)}),(0,H.jsx)(`div`,{className:`people`,role:`radiogroup`,"aria-labelledby":`bx-who`,ref:d,children:e.map((e,r)=>{let i=e.id===t.id,a=e.uploaded?u(`brainage.explainer.you.label`):e.label;return(0,H.jsxs)(`button`,{type:`button`,role:`radio`,className:`person`+(e.uploaded?` you`:``),"data-id":e.id,"aria-checked":i,tabIndex:i?0:-1,onClick:()=>n(e.id),onKeyDown:h(r),"aria-label":u(`brainage.explainer.person.aria`,{label:a,age:e.age}),title:e.uploaded?void 0:u(`brainage.explainer.person.title`,{label:a,age:e.age}),children:[e.uploaded?u(`brainage.explainer.you`):e.id,!e.uploaded&&(0,H.jsx)(`i`,{style:{background:z_(e)},"aria-hidden":`true`})]},e.id)})}),(0,H.jsx)(`button`,{type:`button`,className:`upbtn`,"aria-haspopup":`dialog`,"aria-expanded":c,onClick:l,"aria-label":u(`brainage.explainer.upload`),title:u(`brainage.explainer.upload`),children:(0,H.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,"aria-hidden":`true`,children:(0,H.jsx)(`path`,{d:`M8 11V2M4.5 5.5 8 2l3.5 3.5M2.5 10.5v3h11v-3`})})}),(0,H.jsxs)(`div`,{className:`facts`,"aria-live":`polite`,children:[(0,H.jsxs)(`dl`,{children:[(0,H.jsx)(`dt`,{...G(`brainage.explainer.facts.stage`),children:u(`brainage.explainer.facts.stage`)}),(0,H.jsx)(`dd`,{children:t.uploaded?u(`brainage.explainer.stage.unknown`):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{className:`sw-inline`,style:{background:z_(t)},"aria-hidden":`true`}),t.stage??u(`brainage.explainer.nohd`)]})})]}),(0,H.jsxs)(`dl`,{children:[(0,H.jsx)(`dt`,{...G(`brainage.explainer.facts.age`),children:u(`brainage.explainer.facts.age`)}),(0,H.jsxs)(`dd`,{children:[t.age,` `,(0,H.jsx)(`small`,{children:u(`brainage.explainer.yrs`)})]})]})]})]}),(0,H.jsxs)(`div`,{className:`sl`,children:[(0,H.jsx)(`label`,{className:`lab`,htmlFor:`bx-age`,...G(`brainage.explainer.age.label`),children:u(`brainage.explainer.age.label`)}),(0,H.jsxs)(`div`,{className:`sl-row`,children:[(0,H.jsxs)(`span`,{className:`track`,children:[(0,H.jsx)(`input`,{id:`bx-age`,name:`age`,type:`range`,min:g,max:v,step:1,value:r,ref:f,onChange:e=>i(Number(e.target.value))}),(0,H.jsx)(`span`,{className:`real`,style:{left:y},title:u(`brainage.explainer.age.tick`)})]}),(0,H.jsxs)(`output`,{htmlFor:`bx-age`,children:[r,` `,(0,H.jsx)(`small`,{children:u(`brainage.explainer.yrs`)})]}),(0,H.jsx)(`span`,{className:`reset`,children:r!==t.age&&(0,H.jsx)(`button`,{type:`button`,className:`linkbtn`,title:u(`brainage.explainer.reset.title`),onClick:()=>{i(t.age),f.current?.focus()},children:u(`brainage.explainer.reset`)})})]})]}),(0,H.jsxs)(`div`,{className:`sl`,children:[(0,H.jsx)(`label`,{className:`lab`,htmlFor:`bx-trees`,...G(`brainage.explainer.trees.label`),children:u(`brainage.explainer.trees.label`)}),(0,H.jsxs)(`div`,{className:`sl-row`,children:[(0,H.jsx)(`span`,{className:`track`,children:(0,H.jsx)(`input`,{id:`bx-trees`,name:`trees`,type:`range`,min:1,max:100,step:1,value:a,ref:p,onChange:e=>o(Number(e.target.value))})}),(0,H.jsxs)(`output`,{htmlFor:`bx-trees`,children:[a,` `,(0,H.jsx)(`small`,{children:u(`brainage.explainer.trees.of`)})]}),(0,H.jsx)(`span`,{className:`reset`,children:a!==100&&(0,H.jsx)(`button`,{type:`button`,className:`linkbtn`,title:u(`brainage.explainer.trees.all.title`,s),onClick:()=>{o(100),p.current?.focus()},children:u(`brainage.explainer.trees.all`)})})]})]})]})}var V_=[`frontal`,`parietal`,`temporal`,`occipital`,`insula`],H_=`var(--tissue)`,U_=`var(--ctrl-soft)`,W_={frontal:[126,142,`middle`],parietal:[290,152,`middle`],insula:[193,218,`middle`],temporal:[242,286,`middle`],occipital:[372,255,`middle`,-90],subcortical:[478,272,`middle`]};function G_(e){if(!e.art.regions)throw Error(`this paper has no region maps`);return e.art.regions}function K_(e){let t=e.defs.getAttribute(`data-regions`);if(t)return t;let n=G_(e),r=e.uid+`rm`;return Y(`path`,{id:r+`sil`,d:n.lateral.sil},e.defs),Y(`path`,{id:r+`sul`,d:n.lateral.sulci},e.defs),V_.forEach(t=>{Y(`path`,{id:r+t,d:n.lateral.lobes[t]},e.defs)}),n.coronal.comps.forEach((t,n)=>{Y(`path`,{id:r+`c`+n,d:t.d},e.defs)}),n.coronal.vents.forEach((t,n)=>{Y(`path`,{id:r+`v`+n,d:t},e.defs)}),e.defs.setAttribute(`data-regions`,r),r}var q_=(e,t,n,r)=>{let i=r/(e[2]-e[0]),a=(e[0]+e[2])/2,o=(e[1]+e[3])/2;return{s:i,tf:`translate(`+J(t-a*i)+` `+J(n-o*i)+`) scale(`+Math.round(i*1e4)/1e4+`)`}};function J_(e,t,n,r,i){let a=K_(e),o=q_(G_(e).lateral.bbox,n,r,i),s=Y(`g`,{transform:o.tf},t);s.style.strokeWidth=String(J(2.6/o.s)),Y(`use`,{href:`#`+a+`sil`,class:`pa-tissuef`},s);let c={};return V_.forEach(e=>{c[e]=Y(`use`,{href:`#`+a+e,class:`pa-lobe`},s),mu(c[e],H_)}),Y(`use`,{href:`#`+a+`sul`,class:`pa-sulc`},s),{g:s,lobes:c}}function Y_(e,t,n,r,i){let a=K_(e),o=G_(e).coronal,s=Y(`g`,{transform:q_(o.bbox,n,r,i).tf},t),c=[],l=[];return o.comps.forEach((e,t)=>{let n=Y(`use`,{href:`#`+a+`c`+t,class:e.deep?null:`pa-tissuef`},s);e.deep&&(mu(n,H_),c.push(n))}),o.vents.forEach((e,t)=>{let n=Y(`use`,{href:`#`+a+`v`+t},s);mu(n,U_),l.push(n)}),{g:s,deep:c,vents:l}}var X_=(e,t)=>{let n=J_(e,e.g,200,195,390),r=Y_(e,e.g,478,176,148),i=(e,t)=>{if(e!==`subcortical`){mu(n.lobes[e],t);return}r.deep.forEach(e=>{mu(e,t)}),r.vents.forEach(e=>{mu(e,t===H_?U_:hu(t,U_,.55))})},a=(t.regions||[]).map(t=>{let n=null;if(t.label!==void 0){let r=W_[t.region];n=X(e.g,r[0],r[1],(t.quiet?`pa-lb2`:`pa-lb pa-b`)+` pa-halo`,18,t.label,r[2]),r[3]&&(n.setAttribute(`transform`,`rotate(`+r[3]+` `+r[0]+` `+r[1]+`)`),n.setAttribute(`dy`,`6`))}return{...t,el:n}}),o=t.show||[0,.6],s=[...V_,`subcortical`];return e=>{if(Z(n.g,q(e,o[0],o[1])),Z(r.g,q(e,o[0],o[1])),t.wash){let n=t.wash,r=n.strength*Math.min(q(e,n.at[0],n.at[1]),1-q(e,n.at[2],n.at[3]));s.forEach(e=>{i(e,hu(`var(--`+n.tone+`)`,H_,r))})}a.forEach(t=>{if(t.tint){let n=t.tint,r=n.strength*q(e,n.at[0],n.at[1])*(n.settle?nu(1,n.settle.to,q(e,n.settle.at[0],n.settle.at[1])):1);i(t.region,hu(`var(--`+n.tone+`)`,H_,r))}t.el&&Z(t.el,t.labelAt?q(e,t.labelAt[0],t.labelAt[1]):1)})}},Z_=(e,t)=>{let n=Y(`g`,null,e.g),r=e.uid+`dv`,i=Y(`linearGradient`,{id:r,x1:0,x2:1,y1:0,y2:0},Y(`defs`,null,n));[[`0`,`var(--accent)`],[`0.5`,H_],[`1`,`var(--hd)`]].forEach(e=>{Y(`stop`,{offset:e[0]},i).style.stopColor=e[1]}),Y(`rect`,{x:100,y:356,width:360,height:12,rx:6,fill:`url(#`+r+`)`},n),[[100,`start`],[280,`middle`],[460,`end`]].forEach((e,r)=>{X(n,e[0],346,`pa-tk-n`,14,t.ticks[r],e[1])}),X(n,100,390,`pa-lb2`,15,t.left),X(n,460,390,`pa-lb2`,15,t.right,`end`);let a=t.at||[0,.5];return e=>{Z(n,q(e,a[0],a[1]))}},Q_=(e,t)=>{let n=Y(`g`,null,e.g);t.kind===`person`?Vu(n,t.x,104,1.55):J_(e,n,t.x,100,210),X(n,t.x,196,`pa-lb2`,18,t.label,`middle`),X(n,t.x,246,`pa-xb`+(t.tone===`hd`?` pa-hdf`:``),48,t.value,`middle`);let r=t.fade??.5;return e=>{Z(n,q(e,0,r))}},$_=(e,t)=>{let n=t.y,r=e=>J(30+(e-t.min)/(t.max-t.min)*500),i=Y(`g`,null,e.g);Y(`path`,{d:`M30 `+n+`H530`,class:`pa-axis`},i);for(let e=t.min;e<=t.max;e+=10)Y(`path`,{d:`M`+r(e)+` `+(n-5)+`V`+(n+5),class:`pa-axis`},i),X(i,r(e),n+28,`pa-tk-n`,16,String(e),`middle`);X(i,530,n+50,`pa-note`,16,t.unit,`end`);let a=Y(`circle`,{cx:r(t.actual),cy:n,r:7.5,class:`pa-inkf pa-ring`},e.g),o=Y(`circle`,{cx:r(t.brain),cy:n,r:7.5,class:`pa-hdf pa-ring`},e.g),s=Y(`g`,null,e.g),c=t.tone===`hd`;Y(`path`,{d:`M`+r(t.actual)+` `+(n-18)+`V`+(n-26)+`H`+r(t.brain)+`V`+(n-18),class:`pa-ln `+(c?`pa-hd-st`:`pa-ink-st`),"stroke-width":c?2:1.75},s),t.gap&&X(s,J((r(t.actual)+r(t.brain))/2),n-38,`pa-lb pa-b pa-halo`,19,t.gap,`middle`);let l=t.beats||[0,.4,.7,1.1];return e=>{Z(i,q(e,l[0],l[0]+.45)),Z(a,q(e,l[1],l[1]+.3)),Z(o,q(e,l[2],l[2]+.3)),Z(s,q(e,l[3],l[3]+.45))}};function ev(e,t,n,r,i){let a=Y(`g`,null,e);return Y(`path`,{d:`M`+t+` `+n+`L`+r+` `+i,class:`pa-ln pa-ink3-st`,"stroke-width":1.75},a),Yu(a,r,i,Math.atan2(i-n,r-t)*180/Math.PI,`pa-ink3-st`),a}var tv=(e,t)=>{let n=[],r=Y(`g`,null,e.g);mu(Vu(r,34,86,1.05),`var(--hd)`),X(r,66,82,`pa-lb pa-b`,18,t.who[0]),X(r,66,104,`pa-lb2`,16,t.who[1]),n.push(r,ev(e.g,152,88,186,88));let i=Y(`g`,null,e.g);Y(`rect`,{x:194,y:62,width:146,height:52,rx:10,class:`pa-card`},i),X(i,267,85,`pa-lb pa-b`,17,t.card[0],`middle`),X(i,267,105,`pa-lb2`,15,t.card[1],`middle`),n.push(i,ev(e.g,348,88,382,88));let a=Y(`g`,null,e.g),o=e.art.images?.[t.logo];if(!o)throw Error(`no picture named `+t.logo);let s=Math.min(150/o.w,32/o.h);Y(`rect`,{x:390,y:62,width:170,height:52,rx:10,class:`pa-plate`},a),Y(`image`,{href:o.uri,x:J(475-o.w*s/2),y:J(88-o.h*s/2),width:J(o.w*s),height:J(o.h*s)},a),X(a,475,136,`pa-lb2`,15,t.caption,`middle`),n.push(a);let c=t.step??.35;return e=>{n.forEach((t,n)=>{Z(t,q(e,n*c,n*c+.3))})}},nv=(e,t,n)=>du(e,`transform`,`translate(0 `+J(t)+`) scale(1 `+su(Math.max(n,.001))+`) translate(0 `+J(-t)+`)`),rv=(e,t)=>{let n=e=>J(350-(e+20)/55*262),r=e=>120+e*124,i=Y(`g`,null,e.g);Y(`rect`,{x:64,y:34,width:14,height:14,rx:3,class:`pa-ctrlf`},i),X(i,86,47,`pa-lb2`,16,t.legend[0]),Y(`rect`,{x:64,y:58,width:14,height:14,rx:3,class:`pa-hdf`},i),X(i,86,71,`pa-lb2`,16,t.legend[1]);let a=Y(`g`,null,e.g);[-20,-10,0,10,20,30].forEach(e=>{Y(`path`,{d:`M58 `+n(e)+`H556`,class:e===0?`pa-axis`:`pa-grid`},a),X(a,48,J(n(e)+6),`pa-tk-n`,16,e===0?`0`:lu(e,0),`end`)}),t.stages.forEach((e,t)=>{X(a,r(t),378,`pa-tk`,16,e,`middle`)});let o=[],s=[],c=[],l=[];t.boxes.forEach(t=>{let i=t.grp===`hd`,a=r(t.stage)+(i?21:-21),u=Y(`g`,null,e.g),d=i?`pa-hd-st`:`pa-ctrl-st`;Y(`path`,{d:`M`+a+` `+n(t.wlo)+`V`+n(t.q1)+`M`+a+` `+n(t.q3)+`V`+n(t.whi)+`M`+(a-7)+` `+n(t.wlo)+`H`+(a+7)+`M`+(a-7)+` `+n(t.whi)+`H`+(a+7),class:`pa-ln `+d,"stroke-width":1.5},u),Y(`rect`,{x:a-16,y:n(t.q3),width:32,height:J(n(t.q1)-n(t.q3)),rx:3,class:(i?`pa-hdsoft `:`pa-ctrlsoft `)+d,"stroke-width":1.75},u),Y(`path`,{d:`M`+(a-16)+` `+n(t.med)+`H`+(a+16),class:`pa-ln `+d,"stroke-width":3},u),i?(s.push(u),l.push((l.length?`L`:`M`)+a+` `+n(t.med)),c.push(X(e.g,a,J(n(t.whi)-10),`pa-lb pa-b pa-halo`,16,lu(t.med,1),`middle`))):o.push(u)});let u=Y(`path`,{d:l.join(``),class:`pa-ln pa-hd-st pa-dash`,"stroke-width":1.5},e.g),d=n(0);return e=>{Z(a,q(e,0,.5)),Z(i,q(e,.2,.7)),o.forEach((t,n)=>{let r=q(e,1+n*.15,1.6+n*.15);Z(t,r),nv(t,d,ru(r))}),s.forEach((t,n)=>{let r=q(e,2.6+n*.5,3.3+n*.5);Z(t,r),nv(t,d,ru(r))}),c.forEach((t,n)=>{Z(t,q(e,3.2+n*.5,3.5+n*.5))}),Z(u,q(e,5.4,6))}},iv=(e,t)=>{let n=520/t.cols.length,r=n-10,i=[104,156,208,260],a=t.grid,o=(e,t)=>J(40+e*n+3+(t+30)/75*r),s=e=>J(40+e*n+n/2),c=t.band===void 0?null:Y(`rect`,{x:J(40+t.band*n+1),y:30,width:J(n-2),height:330,rx:8,class:`pa-soft-accent`},e.g),l=Y(`g`,null,e.g);X(l,0,52,`pa-lb2`,14,t.stage),i.forEach((e,t)=>{Y(`circle`,{cx:7,cy:e-6,r:5.5,class:`pa-s`+t},l),X(l,18,e,`pa-lb2 pa-b`,15,String(t))});let u=[[],[],[],[]],d=[];t.cols.forEach((n,r)=>{Y(`path`,{d:`M`+o(r,0)+` 56V`+(i[3]+2),class:`pa-ln pa-ink3-st`,"stroke-width":1,"stroke-dasharray":`3 3`},l),X(l,s(r),300,`pa-lb pa-b`,n.name.length>9?13:14,n.name,`middle`),n.curves.forEach((t,n)=>{let s=``;for(let e=0;e<a.length;e++)a[e]<-30||a[e]>45||(s+=(s?`L`:`M`)+o(r,a[e])+` `+J(i[n]-t[e]*50));let c=Y(`g`,null,e.g);Y(`path`,{d:s+`L`+o(r,45)+` `+i[n]+`L`+o(r,-30)+` `+i[n]+`Z`,class:`pa-s`+n,"fill-opacity":.5},c),Y(`path`,{d:s,class:`pa-ln pa-s`+n+`-st`,"stroke-width":1.5},c),u[n].push(c)}),d.push(X(e.g,s(r),330,n.sig?`pa-lb pa-b`:`pa-lb2`,16,(n.rho<0?`−`:``)+Math.abs(n.rho).toFixed(2),`middle`)),n.sig||d.push(X(e.g,s(r),350,`pa-note`,14,t.ns,`middle`))});let f=Y(`g`,null,e.g);X(f,o(0,0),280,`pa-tk-n`,13,`0`,`middle`),X(f,o(0,25),280,`pa-tk-n`,13,`+25`,`middle`);let p=X(e.g,0,330,`pa-lb2`,15,t.rho),m=X(e.g,0,388,`pa-note`,15,t.caption);return e=>{Z(l,q(e,.5,1)),Z(f,q(e,.8,1.2)),u.forEach((t,n)=>{let r=q(e,1+n*.7,1.7+n*.7);t.forEach(e=>{Z(e,Math.min(1,r*1.6)),nv(e,i[n],ru(r))})}),Z(p,q(e,4.2,4.6)),d.forEach((t,n)=>{Z(t,q(e,4.3+n*.12,4.6+n*.12))}),c&&Z(c,.85*q(e,5.4,6)),Z(m,q(e,5,5.5))}};function av(e,t,n,r,i,a=``){let o=Y(`g`,{transform:`translate(`+n+` `+r+`) scale(`+su(i/40)+`)`},e);return t===`sdmt`?(Y(`rect`,{x:2,y:5,width:36,height:30,rx:4,class:`pa-ico`},o),Y(`path`,{d:`M2 20H38M14 5V35M26 5V35`,class:`pa-ico`,"stroke-width":1.5},o),Y(`circle`,{cx:8,cy:12.5,r:3,class:`pa-ico`,"stroke-width":1.6},o),Y(`path`,{d:`M16.6 15.5L20 9.5L23.4 15.5Z`,class:`pa-ico`,"stroke-width":1.6},o),Y(`path`,{d:`M32 9.2V15.8M28.7 12.5H35.3`,class:`pa-ico`,"stroke-width":1.6},o),[`1`,`2`,`3`].forEach((e,t)=>{X(o,8+t*12,31.4,`pa-ico-t`,10,e,`middle`)})):t===`swrt`?(Y(`rect`,{x:1,y:9,width:30,height:22,rx:4,class:`pa-ico`},o),X(o,16,24.4,`pa-ico-t`,10.5,a,`middle`),Y(`path`,{d:`M34.5 15.5Q37 20 34.5 24.5M38 12.5Q42 20 38 27.5`,class:`pa-ico`,"stroke-width":1.6},o)):t===`tms`?(Y(`circle`,{cx:23,cy:6.5,r:3.8,class:`pa-ico-f`},o),Y(`path`,{d:`M21.5 12.5L18.5 23.5L24.5 28.5L26.5 37.5M18.5 23.5L13.5 37.5M20.5 14.5L13.5 20.5M21.5 14.5L29 19.5`,class:`pa-ico`,"stroke-width":2.4},o)):(Y(`path`,{d:`M4 19L20 5.5L36 19M8.5 15.5V35.5H31.5V15.5`,class:`pa-ico`},o),Y(`path`,{d:`M16.5 35.5V25.5H23.5V35.5`,class:`pa-ico`},o)),o}var ov=(e,t)=>{let n=t.cards.map((t,n)=>{let r=n%2*290,i=36+Math.floor(n/2)*184,a=Y(`g`,null,e.g);return Y(`rect`,{x:r,y:i,width:270,height:168,rx:12,class:`pa-card`},a),av(a,t.icon,r+18,i+18,46,t.word),X(a,r+78,i+40,`pa-lb pa-b`,21,t.name),X(a,r+78,i+62,`pa-lb2`,14,t.full),X(a,r+18,i+112,`pa-lb`,18,t.what),X(a,r+18,i+140,`pa-note`,15,t.worse),a});return e=>{n.forEach((t,n)=>{Z(t,q(e,.4+n*.35,.8+n*.35))})}},sv=(e,t)=>{let n=Y(`g`,null,e.g),r=t.cols.map(()=>[]);return t.cols.forEach((e,t)=>{X(n,236+t*120,52,`pa-lb pa-b`,16,e,`middle`)}),t.rows.forEach((i,a)=>{let o=70+a*74;av(n,i.icon,0,o+13,34,i.word),X(n,44,o+37,`pa-lb pa-b`,18,i.name),i.values.forEach((n,i)=>{let a=178+i*120,s=Y(`g`,null,e.g),c=Y(`rect`,{x:a,y:o,width:116,height:62,rx:10,class:`pa-card`},s);if(n===null)X(s,a+58,o+38,`pa-note`,18,t.none,`middle`);else{let e=Math.abs(n)/t.max;mu(c,hu(`var(--hd)`,`var(--bg-2)`,.15+.8*e)),mu(X(s,a+58,o+39,`pa-b`,20,lu(n,2),`middle`),e>.85?`var(--bg)`:`var(--ink)`)}r[i].push(s)})}),e=>{Z(n,q(e,0,.5)),r.forEach((t,n)=>{t.forEach((t,r)=>{Z(t,q(e,.8+n*1.3+r*.18,1.1+n*1.3+r*.18))})})}};function cv(e,t){let n=e.art.images?.[t];if(!n)throw Error(`no picture named `+t);return n}var lv=(e,t)=>{let n=cv(e,t.key),r=J(n.h/n.w*t.w),i=J(t.x+t.w/2),a=J(t.y+r/2),o=Y(`image`,{href:n.uri,x:t.x,y:t.y,width:t.w,height:r,preserveAspectRatio:`xMidYMid meet`},e.g),s=t.fade||[0,.7],c=t.grow??1;return e=>{Z(o,q(e,s[0],s[1]));let t=su(nu(c,1,ru(q(e,s[0],s[1]+.2))));du(o,`transform`,`translate(`+i+` `+a+`) scale(`+t+`) translate(`+-i+` `+-a+`)`)}},uv=(e,t)=>{let n=cv(e,t.key),r=Math.min(t.fit[0]/n.w,t.fit[1]/n.h),i=Y(`g`,null,e.g);Y(`rect`,{x:t.x,y:t.y,width:t.w,height:t.h,rx:12,class:`pa-plate`},i),Y(`image`,{href:n.uri,x:J(t.x+(t.w-n.w*r)/2),y:J(t.y+(t.h-n.h*r)/2),width:J(n.w*r),height:J(n.h*r),preserveAspectRatio:`xMidYMid meet`},i);let a=t.fade||[0,.5];return e=>{Z(i,q(e,a[0],a[1]))}},dv=[{stage:0,grp:`ctrl`,wlo:-13.06,q1:-.19,med:5.59,q3:9.28,whi:20.96},{stage:0,grp:`hd`,wlo:-9.27,q1:3.32,med:7.86,q3:13.44,whi:28.34},{stage:1,grp:`ctrl`,wlo:-17.5,q1:-3.61,med:3.22,q3:7.79,whi:18.74},{stage:1,grp:`hd`,wlo:-10.46,q1:.83,med:7.09,q3:12.68,whi:28.68},{stage:2,grp:`ctrl`,wlo:-13.93,q1:-2.08,med:2.82,q3:7.12,whi:17.82},{stage:2,grp:`hd`,wlo:-10.64,q1:5.14,med:11.03,q3:16.78,whi:27.14},{stage:3,grp:`ctrl`,wlo:-17.5,q1:-4.79,med:1.85,q3:9.67,whi:23.48},{stage:3,grp:`hd`,wlo:-2.98,q1:9.87,med:14.24,q3:19.02,whi:31.68}],fv={grid:[-45,-44,-43,-42,-41,-40,-39,-38,-37,-36,-35,-34,-33,-32,-31,-30,-29,-28,-27,-26,-25,-24,-23,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],regions:{Whole:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.004,.014,.035,.054,.058,.063,.1,.172,.24,.265,.255,.266,.326,.403,.464,.498,.526,.599,.716,.774,.72,.635,.604,.616,.619,.572,.461,.341,.3,.328,.335,.275,.188,.124,.092,.08,.082,.084,.074,.056,.038,.021,.008,.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.003,.013,.031,.055,.084,.114,.138,.165,.205,.234,.239,.242,.254,.294,.412,.595,.741,.78,.717,.599,.504,.491,.543,.607,.654,.648,.547,.395,.301,.301,.34,.346,.283,.185,.113,.073,.044,.032,.041,.05,.04,.02,.006,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.005,.018,.048,.09,.129,.155,.173,.2,.247,.296,.304,.267,.232,.251,.365,.572,.754,.775,.666,.563,.528,.554,.6,.596,.541,.498,.473,.43,.366,.309,.285,.281,.263,.229,.184,.128,.07,.028,.008,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.005,.016,.028,.028,.017,.006,.001,0,0,0,0,0,0,0,0,0,0,0,0,.004,.02,.066,.139,.193,.189,.159,.169,.234,.32,.383,.395,.382,.422,.557,.754,.909,.948,.909,.839,.724,.595,.517,.492,.449,.347,.247,.211,.213,.192,.142,.09,.046,.017,.004,.002,.008,.02,.03,.026,.013,.004,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],Subcortical:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.003,.008,.016,.023,.025,.025,.031,.057,.107,.173,.23,.258,.261,.269,.317,.411,.513,.577,.583,.553,.519,.501,.513,.558,.61,.621,.571,.488,.419,.382,.363,.343,.319,.299,.292,.296,.303,.302,.282,.244,.201,.167,.15,.143,.135,.119,.095,.07,.047,.028,.014,.006,.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.006,.02,.048,.089,.126,.146,.152,.155,.163,.182,.217,.269,.339,.428,.52,.583,.594,.582,.594,.636,.668,.66,.622,.57,.509,.447,.398,.376,.386,.414,.436,.423,.368,.292,.229,.2,.194,.183,.153,.111,.074,.052,.041,.035,.028,.018,.011,.011,.017,.023,.022,.015,.007,.002,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.004,.014,.032,.052,.063,.057,.039,.024,.023,.04,.069,.101,.128,.153,.186,.225,.258,.282,.307,.334,.347,.332,.299,.282,.311,.385,.479,.572,.652,.7,.71,.683,.633,.586,.566,.562,.542,.503,.467,.435,.379,.295,.211,.153,.116,.082,.047,.022,.013,.016,.022,.023,.017,.008,.003,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.005,.016,.03,.034,.028,.028,.034,.03,.018,.017,.041,.093,.149,.188,.216,.241,.266,.296,.331,.371,.411,.462,.527,.573,.612,.712,.864,.95,.904,.784,.67,.599,.575,.571,.541,.461,.347,.226,.138,.104,.102,.09,.061,.041,.036,.031,.017,.006,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],Temporal:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.002,.009,.027,.06,.101,.131,.144,.147,.143,.135,.144,.194,.283,.374,.426,.437,.433,.45,.524,.662,.816,.908,.902,.843,.797,.786,.792,.782,.741,.678,.625,.611,.632,.658,.652,.593,.482,.351,.246,.193,.179,.173,.16,.142,.127,.123,.123,.11,.078,.041,.016,.005,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.003,.01,.024,.042,.056,.062,.064,.076,.103,.136,.16,.172,.188,.222,.267,.304,.316,.305,.295,.315,.37,.441,.503,.564,.653,.77,.861,.877,.83,.778,.768,.812,.885,.932,.914,.826,.704,.592,.506,.426,.334,.248,.194,.169,.161,.162,.162,.152,.128,.096,.063,.035,.018,.016,.023,.03,.029,.021,.011,.004,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.002,.006,.016,.032,.05,.075,.115,.168,.225,.277,.319,.359,.416,.492,.557,.595,.618,.641,.659,.652,.611,.552,.515,.527,.586,.662,.724,.762,.779,.78,.775,.777,.787,.789,.761,.688,.563,.41,.277,.195,.149,.112,.073,.039,.016,.005,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.002,.009,.03,.063,.086,.081,.067,.07,.086,.1,.109,.124,.159,.215,.281,.366,.497,.672,.829,.898,.857,.772,.729,.739,.775,.837,.907,.937,.912,.864,.852,.898,.949,.916,.75,.511,.309,.204,.18,.172,.128,.064,.021,.005,.003,.011,.027,.041,.04,.024,.009,.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],Parietal:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.004,.011,.023,.034,.036,.028,.016,.009,.013,.034,.081,.145,.205,.234,.234,.233,.258,.308,.361,.406,.456,.522,.597,.655,.683,.687,.689,.715,.772,.823,.822,.769,.71,.686,.704,.738,.751,.723,.663,.598,.551,.524,.503,.479,.445,.384,.288,.18,.091,.036,.011,.003,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.002,.007,.017,.03,.035,.03,.025,.031,.05,.072,.098,.148,.24,.354,.439,.476,.488,.497,.508,.542,.633,.774,.901,.951,.935,.897,.859,.812,.755,.714,.727,.77,.761,.654,.513,.442,.462,.506,.519,.498,.453,.381,.287,.192,.122,.085,.07,.061,.05,.033,.016,.006,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.003,.009,.024,.049,.078,.105,.127,.151,.184,.222,.255,.278,.296,.312,.32,.314,.3,.289,.293,.329,.408,.512,.601,.649,.665,.665,.659,.648,.643,.657,.702,.777,.864,.919,.912,.855,.782,.704,.614,.519,.434,.362,.296,.238,.193,.163,.142,.124,.103,.079,.052,.029,.013,.004,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.005,.015,.03,.05,.073,.099,.127,.149,.163,.177,.188,.194,.203,.234,.296,.383,.467,.526,.563,.587,.592,.569,.542,.555,.624,.709,.763,.788,.826,.889,.938,.95,.932,.892,.827,.734,.627,.525,.438,.356,.283,.234,.211,.194,.163,.118,.07,.033,.012,.003,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],Frontal:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.006,.016,.029,.037,.032,.024,.027,.049,.082,.112,.122,.114,.116,.168,.286,.446,.607,.733,.809,.831,.799,.739,.696,.691,.708,.734,.761,.765,.724,.662,.623,.613,.615,.618,.619,.601,.545,.454,.356,.276,.223,.198,.195,.185,.147,.09,.04,.013,.003,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.005,.015,.033,.054,.069,.079,.092,.11,.122,.123,.127,.146,.174,.199,.226,.276,.34,.379,.365,.314,.272,.275,.332,.446,.611,.791,.918,.951,.905,.828,.758,.724,.743,.791,.816,.787,.723,.652,.577,.492,.398,.313,.249,.197,.142,.086,.043,.026,.029,.04,.047,.047,.038,.025,.012,.004,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.007,.023,.055,.094,.115,.104,.073,.053,.066,.115,.183,.256,.312,.332,.33,.356,.439,.553,.659,.74,.805,.856,.888,.898,.881,.836,.801,.807,.8,.715,.579,.469,.413,.393,.403,.441,.478,.475,.415,.327,.257,.212,.163,.099,.044,.014,.003,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.005,.013,.026,.036,.035,.025,.02,.028,.048,.076,.104,.129,.145,.16,.195,.261,.351,.446,.54,.628,.693,.728,.745,.762,.779,.78,.747,.684,.62,.595,.618,.663,.716,.766,.773,.72,.64,.558,.472,.385,.315,.264,.227,.2,.176,.143,.102,.07,.052,.039,.024,.011,.003,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],Insula:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.003,.01,.025,.052,.084,.115,.139,.159,.173,.176,.165,.156,.178,.246,.346,.452,.547,.631,.715,.802,.876,.924,.947,.952,.942,.911,.854,.776,.699,.653,.639,.633,.621,.614,.629,.654,.649,.586,.481,.378,.31,.274,.247,.223,.218,.239,.266,.27,.239,.187,.13,.08,.042,.018,.007,.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.003,.007,.016,.027,.034,.034,.031,.035,.055,.089,.126,.158,.187,.231,.3,.382,.449,.485,.497,.508,.535,.58,.628,.657,.663,.657,.66,.685,.731,.78,.793,.748,.673,.629,.66,.746,.825,.848,.811,.748,.692,.647,.597,.529,.452,.381,.323,.272,.225,.179,.136,.094,.058,.03,.013,.004,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.002,.006,.017,.037,.066,.098,.124,.138,.14,.138,.144,.166,.199,.234,.263,.287,.319,.374,.456,.553,.637,.693,.725,.748,.773,.794,.8,.792,.788,.802,.823,.82,.778,.711,.652,.625,.629,.644,.646,.623,.58,.534,.495,.457,.406,.333,.245,.166,.118,.106,.114,.117,.106,.088,.07,.055,.041,.027,.014,.006,.002,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,.001,.003,.007,.015,.025,.033,.035,.029,.019,.011,.006,.007,.014,.029,.051,.079,.114,.156,.205,.256,.304,.34,.361,.368,.372,.385,.419,.472,.526,.557,.556,.537,.525,.537,.573,.627,.688,.742,.768,.758,.725,.696,.691,.708,.732,.743,.731,.701,.667,.639,.613,.577,.526,.46,.386,.315,.251,.192,.138,.091,.06,.044,.04,.037,.03,.02,.011,.005,.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],Occipital:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.006,.021,.046,.062,.052,.029,.015,.021,.04,.056,.066,.081,.117,.164,.208,.258,.328,.415,.501,.562,.613,.699,.782,.768,.69,.664,.736,.847,.908,.861,.716,.541,.393,.289,.219,.177,.172,.204,.228,.199,.13,.065,.027,.015,.021,.032,.037,.038,.037,.03,.017,.006,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.005,.016,.029,.03,.023,.026,.041,.062,.087,.097,.086,.101,.164,.25,.335,.413,.459,.485,.537,.608,.656,.677,.73,.812,.826,.775,.755,.783,.784,.689,.524,.393,.36,.384,.365,.269,.168,.126,.122,.097,.049,.014,.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.003,.012,.031,.054,.068,.068,.063,.069,.097,.143,.178,.174,.146,.132,.158,.214,.263,.289,.32,.38,.475,.596,.726,.851,.938,.941,.861,.76,.686,.634,.574,.489,.389,.316,.297,.308,.317,.309,.268,.196,.129,.098,.085,.062,.032,.011,.003,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.003,.014,.04,.087,.145,.189,.204,.203,.202,.205,.21,.221,.244,.276,.315,.364,.418,.462,.491,.517,.549,.573,.567,.54,.53,.554,.59,.597,.56,.514,.492,.486,.464,.418,.364,.309,.255,.205,.165,.139,.128,.122,.11,.084,.051,.025,.009,.003,.001,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}},pv=[[21.2,33],[56.4,53.6],[66,60.8],[38.4,32],[44.9,41.7],[44.7,47.1],[57.4,55.4],[25.6,35.9],[54.3,52],[20.3,23.8],[20.7,23],[64.5,48.9],[38.6,33.5],[38.2,43],[22.3,25.4],[23.6,27],[24,22],[20.7,28.3],[28.4,51],[24.7,24.5],[20.3,21],[37.2,42.6],[21.6,24.1],[18,24.6],[35,46.7],[23.3,30.8],[23.6,22.2],[39.5,40.5],[53.8,48.1],[62.2,57.6],[53.4,54.6],[21.2,19.3],[44.1,36.3],[64.5,49.6],[28.4,31.5],[61.8,52.3],[20.2,19],[44.4,50.3],[24,27.3],[21.2,21.1],[23.5,31.3],[42.7,34.1],[23.2,24.1],[59.4,55.4],[41,34.2],[52,30.9],[25.4,31.1],[25.8,31.7],[61,45.6],[49,50.1],[46.4,52.3],[38.7,39.6],[25,23.4],[58.9,45.5],[21.3,22],[48.7,61],[21.1,22.6],[23.9,20.4],[59.6,49.2],[63.6,46.2],[23.1,25.5],[67,63.7],[22.3,19.7],[64.9,51.3],[37.9,31.3],[43.4,47.6],[25.2,26.5],[24.1,22.4],[22.7,22.5],[60.2,56.2],[32.9,34.2],[20.1,16],[48.5,47.4],[29.4,30.1],[21.9,16],[23.2,30.5],[23.6,29],[45.4,40.1],[36.2,35.7],[32.6,42.9],[23.4,28.1],[22.2,21.5],[71.9,72],[18,21.3],[41.8,41.3],[64.6,73.2],[20.5,25.9],[48.7,52],[21.4,34.2],[61.8,63.7],[61.5,50.4],[20.2,26.5],[33.1,40.7],[40.9,44.5],[49.7,49.1],[64,50.8],[60,48.1],[21.6,22.1],[50.5,53.5],[27.6,25.9],[20.2,20.4],[23.8,31.4],[22.6,26],[60.7,44.9],[48.8,41.7],[38.5,47.4],[36.3,35.9],[40.1,50.6],[43.6,36.8],[20.6,20.8],[25.7,33.6],[56.2,41.2],[20.5,18.7],[31.4,35.6],[23.9,22.2],[20.9,19.6],[23.3,27.6],[20.3,22.3],[21.5,16.4],[19.2,27.1],[22.4,20],[58.2,34.1],[51.9,54.4],[26.1,36.3],[22.5,27.6],[20.8,25.5],[63.8,58.9],[43.9,51.6],[42.6,44.5],[21,20.6],[24.3,30.4],[30.5,27.8],[40.2,44.1],[53.6,48.8],[21,21.5],[20.8,27.8],[38.8,40.5],[23.8,26],[55.8,49.1],[23,29.6],[21.5,31.4],[51.2,48.4],[26.6,26.4],[23.4,21.8],[41.9,34],[20.1,17.2],[25.4,23.4],[42.5,53.6],[62.4,63],[41.6,35.9],[48.8,50.4],[22.2,31.4],[41.8,23.3],[40.4,48.6],[23.5,26.5],[20.1,16],[58.8,52.7],[61.6,58.9],[56.7,53.9],[31.2,32.3],[40,38.1],[62.9,54.2],[36.2,35.9],[57.6,51.4],[23.1,27],[56.8,57.8],[28.8,29.8],[26.4,32],[24.9,31],[55.2,38.8],[23.5,16.3],[20.8,23],[23.7,22.5],[24.4,19.8],[37.9,37.6],[51.1,49.3],[21.6,26.8],[22.7,27.5],[50,38.6],[43.4,38.5],[20.4,18.4],[40.4,34.7],[25.2,22.6],[34.3,29.3],[23.6,23.4],[22.2,31],[59,56.8],[20.6,26.3],[20.4,21],[25.7,36.2],[22.9,31],[28.7,28.2],[62.3,54.1],[37.5,34.5],[25.1,25.2],[21.6,22.7],[52.9,54.6],[20.8,16],[57.7,49.6],[20.8,20.3],[22.6,30.8],[41.7,36.5],[26.1,28.3],[23.2,29.4],[22,28.1],[52.7,40.6],[23,25.6],[22.9,29.2],[43.5,43.4],[21.7,27.3],[20.4,17.9],[46.3,41.1],[22,31.1],[20.9,26.4],[22.8,27.6],[21.3,20.6],[25.7,37.6],[25.3,34.7],[59.6,54.6],[20.6,16.8],[67.1,55.7],[49.5,51.7],[47.8,47.4],[45.2,51.2],[21.2,24.1],[22.1,24.7],[46.7,50.6],[23.6,27.8],[50.2,59],[68.9,78.9],[57.4,57.8],[46.2,47.5],[50.1,46.9],[22.3,23.1],[36,37.5],[23.3,28.6],[24.6,31.8],[42.6,26.8],[21.5,25.7],[59,55.9],[48.1,35.3],[51.5,56.8],[21.2,24.1],[47.8,44.8],[20.7,22.6],[21.9,31.8],[20.6,18.4],[59.1,53.1],[39.7,40.2],[51.5,47.8],[24.9,30.1],[45.5,45],[61,48.4],[63.3,69.2],[44.3,43.3],[20.9,20.8],[26.8,24.4],[52.1,34.5],[21,26],[33.5,43.3],[19.3,22.4],[22.6,17.7],[24,28.6],[25.1,26.1],[23.8,25.9],[24.1,27.5],[27.4,27.5],[59.2,51.7],[21.7,21.3],[27.9,26.1],[23.2,24.9],[22.1,20.6],[42,43.5],[20.5,21.3],[25.1,23.5],[61.8,52.8],[21.2,22.2],[46.5,44],[24.9,24.2],[20.5,19],[35.1,38.3],[59.5,54],[20,19.1],[20.1,23.6],[46.9,46.3],[44.9,52.6],[24.8,23.9],[25.3,24.7],[20.9,27.5],[61.6,53.9],[20.2,23.2],[36.4,32.7],[60.6,61.5],[46.6,56.1],[20.3,16],[23.4,32.6],[65.5,56.7],[35.1,36.8],[60.7,54.8],[21.9,26],[21.8,24],[24,30.2],[39,40.1],[21.2,20.4],[21.4,22],[51.3,56.3],[21.1,25.9],[25.8,25.6],[40.1,40.2],[56.4,74.5],[44,54],[24.7,28.6],[22.8,26.8],[53.4,68],[51.7,47.1],[21.9,21.4],[64.2,59.7],[37.9,39.2],[21.9,28.3],[51.9,52.1],[22.9,24],[57.9,61.3],[22.3,24.9],[22.4,23],[23.8,23.8],[23,27.9],[20.8,19],[23.1,30],[31.3,40.4],[18.9,16],[36.6,42.1],[45.1,41.8],[21.2,26.5],[57.7,34.1],[62.1,62.5],[27.3,25],[58.7,37.3],[21.7,26.3],[63.1,53],[23.6,34.4],[19.1,21.6],[23.4,21.9],[43.3,48.3],[61.6,56.5],[52.5,46.8],[36,44.2],[45.6,43.2],[23.8,31.1],[44.6,44.2],[61.8,50.4],[25,24.1],[25.8,29],[40.8,42.8],[22.6,29.5],[23.8,33.3],[59.1,60.4],[24,32.7],[20,27.4],[23.7,23.4],[23.9,22],[55.1,51.5],[66,55.9],[21.7,27.6],[40.4,34.4],[59.9,51.5],[24.6,24.9],[33.8,29.8],[48.3,38],[56.2,66.4],[21.7,17.3],[20.5,19.3],[46.6,42.8],[43.7,46.4],[23.3,23],[61.2,31.7],[31.7,43.1],[52.5,66.7],[49.8,40.9],[22,28.5],[20.7,27.4],[20.7,25.1],[23.7,27.8],[24.4,23.7],[23.5,29.9],[23.5,31.5],[23.6,24.4],[61.6,61.2],[67.9,59.2],[43.9,40.3],[19,21.3],[26,36.8],[57.1,67.1],[53,46.4],[51.1,51.3],[20.8,21.2],[64.8,58.4],[22.8,25.8],[25.8,37],[22.2,36],[70.6,53.6],[60.8,54.6],[51.8,41.6],[36.1,33.9],[20.8,25.4],[41.2,47.4],[30.1,30.3],[25.9,43.5],[47.3,44.5],[23.5,20.8],[24.8,27.8],[38.6,40.4],[23,24.3],[18.2,25.5],[72,57],[24.6,26.3],[20.4,19.7],[52.1,39.3],[22.9,20.3],[51.1,51.6],[61.7,66.2],[59.7,47.5],[60.8,39.7],[52.9,29.6],[37.9,36.1],[46.7,39.8],[24.1,28.8],[63,55.9],[22.1,21.9],[59.9,41.9],[22.4,20.7],[22.9,26],[56.3,53.3],[42.1,36.3],[38.8,59.6],[20.8,23],[38.7,44.7],[24.5,29.1],[23.1,33.5],[26.4,32.1],[25.7,30.6],[21,25.1],[21,19],[22.1,25],[52.7,53.6],[29,23.6],[20.2,23],[29.1,23.2],[59,52.6],[61.1,62.2],[59.1,53.6],[56.1,45.2],[38.3,38],[72.6,58.7],[62,48.7],[59.8,64.2],[28.1,28.5],[20.7,20.7],[18.8,22.5],[35.4,40.1],[46.2,43.4],[22.6,26.9],[55.1,51.9],[54.3,49.9],[21.4,26.4],[22.1,26],[52.4,36.6],[37.9,36.1],[60.8,39.6],[24,24.4],[25.8,30.1],[51.8,45.4],[23.2,31.9],[21.3,30.2],[66,51.6],[22.8,16.2],[20.4,24],[45.6,43.7],[23,33.1],[21,23.8],[22.9,22.1],[57.1,40.6],[34.4,28.4],[20.6,20.6],[54.7,49.5],[43,48],[66,48],[39,28.1],[24.1,27.4],[18.6,27],[51.5,45.9],[61.9,55.8],[51.6,55.9],[20.6,25.2],[21.2,21],[22.3,25.2],[23,25.8],[33.3,41.7],[21.9,23],[66.2,56.1],[61.2,49.9],[24.6,27.8],[21.7,30.8],[24.7,32],[22.9,25.1],[25,35.4],[23.4,23],[22.5,16],[56.5,53],[24.3,25.8],[20.1,16.8],[23.3,38.1],[24.6,31.1],[20.9,26.5],[25.6,25.4],[21.3,22],[23.9,21.3],[23.5,24.7],[19.6,21],[38.9,53.4],[41.8,48.6],[50.4,57.8],[21.6,16.5],[62.8,68.6],[61.3,51.4],[50.2,56.3],[33.1,33.3],[22.7,32.3],[56.1,48.5],[24.5,27.2],[23.7,28.4],[22.3,27.5],[29.1,28.8],[21.1,19.3],[47.2,47],[20.9,29.2],[20,27.7],[53.4,46.7],[23.1,24.9],[61.4,58.1],[23.9,32.2],[25.5,19.1],[50.7,55.9],[22,26.5],[22.6,20.7],[24.1,25.9],[24.2,18.8],[34,39.8],[23.7,22.2],[22.8,30.7],[22.3,24.5],[25.4,17.4],[59.7,54],[36.3,37.6],[36.7,33.1],[55.2,50.3],[37.1,27.1],[44.2,53.5],[36.2,30.3],[24.4,27.9],[33.8,41.1]],mv={whole:{paper:[8.95,9.4,9.8,11.3],era:[9.1,9.29,9.88,11.2]},subcortical:{paper:[10.1,11.9,13.2,14],era:[9.51,10.9,12,12.8]},temporal:{paper:[6.95,7.1,8.7,9.05],era:[6.96,7.2,8.7,9.32]},parietal:{paper:[6.45,6.7,7.2,8.3],era:[6.7,6.65,7.08,8.29]},frontal:{paper:[5.1,4.95,5.65,5.95],era:[5.13,4.93,5.65,6.04]},insula:{paper:[1.6,2,2,3.35],era:[1.78,1.77,1.81,3.29]},occipital:{paper:[2.1,1.8,2.15,1.6],era:[2.01,1.68,2.07,1.5]}},hv={table1:[87,1,0],fig1a:[4,0,0],fig1b:[4,0,3],fig2:[21,0,0],fig3:[26,3,0],table2:[9,0,0]},gv=[`table1`],_v={track:!0,trackon:!0,predict:!0,image:!1},vv=[[`aomic`,928],[`sald`,442],[`ixi`,177],[`track`,155],[`narps`,108],[`predict`,90],[`image`,36]],yv=1936,bv=[125,142,143,121],xv={subcortical:26,frontal:122,parietal:68,temporal:90,occipital:38,insula:10},Sv=[`subcortical`,`frontal`,`parietal`,`temporal`,`occipital`,`insula`],Cv={whole:[354,.89,5.3],subcortical:[26,.76,7.9],temporal:[90,.77,7.7],parietal:[68,.78,7.45],frontal:[122,.83,6.5],insula:[10,.75,7.6],occipital:[38,.64,9.6]},wv={whole:[.35,`***`],subcortical:[.54,`***`],temporal:[.24,`***`],parietal:[.14,`**`],frontal:[.04,`ns`],insula:[.01,`ns`],occipital:[-.11,`*`]},Tv={sdmt:{subcortical:-.51,temporal:-.2,parietal:-.13},swrt:{subcortical:-.36,temporal:-.13},tms:{subcortical:.46,temporal:.22},tfc:{subcortical:-.36,temporal:-.16}},Ev=45,Dv=53,Ov=56,kv=e=>(e<0?`−`:``)+Math.abs(e).toFixed(2),Av={"***":`< 0.001`,"**":`< 0.01`,"*":`< 0.05`};function jv(e){let{t}=e,n={whole:t(`brainage.paper.l.region.whole`),subcortical:t(`brainage.paper.l.region.subcortical`),frontal:t(`brainage.paper.l.region.frontal`),parietal:t(`brainage.paper.l.region.parietal`),temporal:t(`brainage.paper.l.region.temporal`),occipital:t(`brainage.paper.l.region.occipital`),insula:t(`brainage.paper.l.region.insula`)},r={aomic:t(`brainage.paper.l.study.aomic`),sald:t(`brainage.paper.l.study.sald`),ixi:t(`brainage.paper.l.study.ixi`),track:t(`brainage.paper.l.study.track`),trackon:t(`brainage.paper.l.study.trackon`),narps:t(`brainage.paper.l.study.narps`),predict:t(`brainage.paper.l.study.predict`),image:t(`brainage.paper.l.study.image`)},i={sdmt:{icon:`sdmt`,name:t(`brainage.paper.l.sdmt`),full:t(`brainage.paper.l.sdmt.full`),what:t(`brainage.paper.l.sdmt.what`),worse:t(`brainage.paper.l.sdmt.worse`)},swrt:{icon:`swrt`,word:t(`brainage.paper.l.swrt.word`),name:t(`brainage.paper.l.swrt`),full:t(`brainage.paper.l.swrt.full`),what:t(`brainage.paper.l.swrt.what`),worse:t(`brainage.paper.l.swrt.worse`)},tms:{icon:`tms`,name:t(`brainage.paper.l.tms`),full:t(`brainage.paper.l.tms.full`),what:t(`brainage.paper.l.tms.what`),worse:t(`brainage.paper.l.tms.worse`)},tfc:{icon:`tfc`,name:t(`brainage.paper.l.tfc`),full:t(`brainage.paper.l.tfc.full`),what:t(`brainage.paper.l.tfc.what`),worse:t(`brainage.paper.l.tfc.worse`)}},a=e=>t(`brainage.paper.l.stage`,{n:e}),o=[`sdmt`,`swrt`,`tms`,`tfc`],s=[`subcortical`,`temporal`,`parietal`],c=[[`whole`,`Whole`],[`subcortical`,`Subcortical`],[`temporal`,`Temporal`],[`parietal`,`Parietal`],[`frontal`,`Frontal`],[`insula`,`Insula`],[`occipital`,`Occipital`]],l=e=>e===`whole`?t(`brainage.paper.l.region.wholeshort`):n[e],u=[`subcortical`,`temporal`,`parietal`,`frontal`,`insula`,`occipital`],d=o.flatMap(e=>s.filter(t=>Tv[e][t]!==void 0).map(t=>({s:e,k:t,r:Tv[e][t]}))).sort((e,t)=>Math.abs(t.r)-Math.abs(e.r)),f=e=>({head:`brainage.paper.${e}.head`,sub:`brainage.paper.${e}.sub`,text:`brainage.paper.${e}.text`});return{id:`brainage`,keys:{summary:`brainage.paper.summary`,credits:`brainage.paper.credits`},summary:t(`brainage.paper.summary`),citeShort:t(`brainage.paper.citeshort`),cite:t(`brainage.paper.source`,{cite:t(`brainage.paper.cite`)}),credits:t(`brainage.paper.credits`),art:e.art,table:[{caption:t(`brainage.paper.table.models.caption`),head:[t(`brainage.paper.table.region`),t(`brainage.paper.table.features`),t(`brainage.paper.table.r`),t(`brainage.paper.table.mae`),t(`brainage.paper.table.rho`),t(`brainage.paper.table.p`)],rows:[`whole`,`subcortical`,`temporal`,`parietal`,`frontal`,`insula`,`occipital`].map(e=>{let r=Cv[e],i=wv[e];return[n[e],String(r[0]),r[1].toFixed(2),String(r[2]),kv(i[0]),i[1]===`ns`?t(`brainage.paper.table.ns`):Av[i[1]]]}),keys:{caption:`brainage.paper.table.models.caption`,head:[`brainage.paper.table.region`,`brainage.paper.table.features`,`brainage.paper.table.r`,`brainage.paper.table.mae`,`brainage.paper.table.rho`,`brainage.paper.table.p`]}},{caption:t(`brainage.paper.table.clinical.caption`),head:[t(`brainage.paper.table.score`),t(`brainage.paper.table.region`),t(`brainage.paper.table.r`)],rows:d.map(e=>[i[e.s].name,n[e.k],lu(e.r,2)]),keys:{caption:`brainage.paper.table.clinical.caption`,head:[`brainage.paper.table.score`,`brainage.paper.table.region`,`brainage.paper.table.r`]}}],scenes:[{key:`aim`,label:t(`brainage.paper.1.label`),dur:9,note:t(`brainage.paper.1.note`),head:t(`brainage.paper.1.head`),sub:t(`brainage.paper.1.sub`),text:t(`brainage.paper.1.text`),keys:f(1),blocks:[Q(Nu,{text:t(`brainage.paper.l.oneperson`)}),Q(Q_,{kind:`person`,x:100,label:t(`brainage.paper.l.actual`),value:String(Ev)},{at:.3}),Q(Q_,{kind:`brain`,x:404,label:t(`brainage.paper.l.brainmri`),value:String(Dv),tone:`hd`,fade:.6},{at:1}),Q($_,{y:330,min:30,max:70,unit:t(`brainage.paper.l.ageunit`),actual:Ev,brain:Dv,gap:t(`brainage.paper.l.gapyears`,{n:8})},{at:2}),Q(Nu,{text:t(`brainage.paper.l.which`)},{panel:`B`}),Q(X_,{show:[3.6,4.2],wash:{tone:`hd`,strength:.55,at:[4.2,4.8,5.8,6.4]},regions:[`frontal`,`parietal`,`insula`,`temporal`,`occipital`,`subcortical`].map((e,t)=>({region:e,label:n[e],labelAt:[6.2+t*.22,6.5+t*.22]}))},{panel:`B`}),Q(Ru,{x:92,y:172,w:216,text:t(`brainage.paper.l.wholeyears`,{n:8}),fade:[4.4,4.9],out:[5.8,6.2]},{panel:`B`}),Q(Pu,{items:[{x:0,y:388,text:t(`brainage.paper.l.sixages`),quiet:!0,size:18,at:7.6}]},{panel:`B`})]},{key:`data`,label:t(`brainage.paper.2.label`),dur:9,note:t(`brainage.paper.2.note`),head:t(`brainage.paper.2.head`),sub:t(`brainage.paper.2.sub`),text:t(`brainage.paper.2.text`),keys:f(2),blocks:[Q(Nu,{text:t(`brainage.paper.l.learning`)}),Q(Lu,{x:-3,y:92,value:cu(yv),size:54,side:[{text:t(`brainage.paper.l.without`),dy:-24,strong:!0},{text:t(`brainage.paper.l.sevenstudies`),dy:0}]},{at:.3}),Q(cd,{rows:vv.map(([e,t])=>({label:r[e],n:t})),max:vv[0][1]},{at:.9}),Q(Pu,{items:[{x:0,y:388,text:t(`brainage.paper.l.agesscans`),quiet:!0,size:18,at:3}]}),Q(Nu,{text:t(`brainage.paper.l.testing`)},{panel:`B`}),Q(Lu,{x:-3,y:92,value:cu(531),size:54,side:[{text:t(`brainage.paper.l.withhd`),dy:-24,strong:!0},{text:t(`brainage.paper.l.stages`),dy:0}]},{panel:`B`,at:3.6}),Q(Wu,{row:{y:116},studies:[{key:`track`,name:r.track,logo:_v.track},{key:`trackon`,name:r.trackon,logo:_v.trackon},{key:`predict`,name:r.predict,logo:_v.predict},{key:`image`,name:r.image,logo:_v.image}]},{panel:`B`,at:3.85}),Q(Bu,{y:196,tiles:bv.map((e,n)=>({label:a(n),value:String(e),unit:t(`brainage.paper.l.people`),stage:n}))},{panel:`B`,at:5.2}),Q(Pu,{items:[{x:0,y:388,text:t(`brainage.paper.l.meanage`),quiet:!0,size:18,at:6.6}]},{panel:`B`})]},{key:`features`,label:t(`brainage.paper.3.label`),dur:11,note:t(`brainage.paper.3.note`),head:t(`brainage.paper.3.head`),sub:t(`brainage.paper.3.sub`),text:t(`brainage.paper.3.text`),keys:f(3),blocks:[Q(Nu,{text:t(`brainage.paper.l.freesurfer`)}),Q(lv,{key:`mesh`,x:0,y:34,w:296,fade:[.3,1],grow:.94}),Q(zu,{x:314,y:40,w:246,h:42,gap:10,start:1.2,step:.32,items:[{label:t(`brainage.paper.l.m.volume`),unit:t(`brainage.paper.l.m.volume.unit`)},{label:t(`brainage.paper.l.m.thickness`),unit:t(`brainage.paper.l.m.thickness.unit`)},{label:t(`brainage.paper.l.m.area`),unit:t(`brainage.paper.l.m.area.unit`)},{label:t(`brainage.paper.l.m.curvature`),unit:t(`brainage.paper.l.m.curvature.unit`)},{label:t(`brainage.paper.l.m.wm`),unit:t(`brainage.paper.l.m.wm.unit`)}]}),Q(Lu,{x:-3,y:376,value:`354`,size:54,side:[{text:t(`brainage.paper.l.perscan`),dy:-8,strong:!0}]},{at:3.2}),Q(Nu,{text:t(`brainage.paper.l.grouped`)},{panel:`B`}),Q(X_,{show:[.6,1.2],regions:Sv.map((e,t)=>{let r=4+t*.75;return{region:e,label:n[e]+` `+xv[e],labelAt:[r,r+.25],tint:{tone:`accent`,strength:1,at:[r,r+.25],settle:{to:.4,at:[r+.75,r+1.1]}}}})},{panel:`B`}),Q(Pu,{items:[{x:0,y:388,text:Sv.map(e=>xv[e]).join(` + `)+` = 354`,quiet:!0,size:18,at:8.8}]},{panel:`B`})]},{key:`model`,label:t(`brainage.paper.4.label`),dur:11.5,note:t(`brainage.paper.4.note`),head:t(`brainage.paper.4.head`),sub:t(`brainage.paper.4.sub`),text:t(`brainage.paper.4.text`),keys:f(4),blocks:[Q(Nu,{text:t(`brainage.paper.l.gbdt`)}),Q(uv,{key:`lgbm`,x:0,y:36,w:250,h:74,fit:[214,50],fade:[.3,.8]}),Q(Pu,{items:[{x:270,y:68,text:t(`brainage.paper.l.trees`),strong:!0,size:19,at:.6},{x:270,y:94,text:t(`brainage.paper.l.defaults`),quiet:!0,size:17,at:.6}]}),Q($u,{trees:[1,2,3,100].map((e,n)=>({x:[42,142,242,392][n],label:t(`brainage.paper.l.tree`,{n:e})})),ops:[{x:92,text:`+`},{x:192,text:`+`},{x:317,text:`+ … +`},{x:446,text:`=`}],out:[t(`brainage.paper.l.predicted`),t(`brainage.paper.l.age`)]},{at:1.4}),Q(Pu,{items:[{x:0,y:272,text:t(`brainage.paper.l.corrects`),quiet:!0,size:17,at:4},{x:0,y:324,text:t(`brainage.paper.l.inputs`),size:18,at:4.8},{x:0,y:352,text:t(`brainage.paper.l.target`),size:18,at:4.8},{x:0,y:380,text:t(`brainage.paper.l.trainedon`),quiet:!0,size:17,at:4.8}]}),Q(Nu,{text:t(`brainage.paper.l.predvsactual`)},{panel:`B`}),Q(sd,{dots:pv,min:15,max:85,ticks:[20,40,60,80],xLabel:t(`brainage.paper.l.xage`),yLabel:t(`brainage.paper.l.yage`),identity:t(`brainage.paper.l.identity`),sweep:[1.2,5.8],identityAt:6},{panel:`B`,at:.8}),Q(Lu,{x:400,y:112,value:Cv.whole[1].toFixed(2),size:42,below:t(`brainage.paper.l.corr`)},{panel:`B`,at:7.4}),Q(Lu,{x:400,y:214,value:String(Cv.whole[2]),size:42,unit:t(`brainage.paper.l.years`),below:t(`brainage.paper.l.mae`)},{panel:`B`,at:7.9}),Q(Pu,{items:[{x:402,y:284,text:t(`brainage.paper.l.cv`),note:!0,size:15,at:8.3}]},{panel:`B`})]},{key:`gap`,label:t(`brainage.paper.5.label`),dur:11.5,note:[t(`brainage.paper.5.note`),t(`brainage.paper.5.note2`)],head:t(`brainage.paper.5.head`),sub:t(`brainage.paper.5.sub`),text:t(`brainage.paper.5.text`),keys:f(5),blocks:[Q(Nu,{text:t(`brainage.paper.l.applied`)}),Q(tv,{who:[t(`brainage.paper.l.aged`,{n:Ev}),t(`brainage.paper.l.mri`)],card:[`354`,t(`brainage.paper.l.measurements`)],logo:`lgbm`,caption:t(`brainage.paper.l.unchanged`)},{at:.3}),Q(Lu,{x:-3,y:244,value:String(Ov),size:52,above:t(`brainage.paper.l.brainage`),fade:.4},{at:2.2}),Q(Lu,{x:187,y:244,value:t(`brainage.paper.l.plusyears`,{n:11}),size:52,tone:`hd`,above:t(`brainage.paper.l.gap`),fade:.4},{at:2.9}),Q($_,{y:322,min:30,max:70,unit:t(`brainage.paper.l.ageunit`),actual:Ev,brain:Ov,tone:`hd`,beats:[0,.3,.6,.9]},{at:3.3}),Q(Nu,{text:t(`brainage.paper.l.bystage`)},{panel:`B`}),Q(rv,{boxes:dv,legend:[t(`brainage.paper.l.controls`),t(`brainage.paper.l.hd`)],stages:[a(0),a(1),a(2),a(3)]},{panel:`B`,at:1})]},{key:`regions`,label:t(`brainage.paper.6.label`),dur:14,note:[t(`brainage.paper.6.note`),t(`brainage.paper.6.note2`)],head:t(`brainage.paper.6.head`),sub:t(`brainage.paper.6.sub`),text:t(`brainage.paper.6.text`),keys:f(6),blocks:[Q(Nu,{text:t(`brainage.paper.l.ridges`)}),Q(iv,{grid:fv.grid,cols:c.map(([e,t])=>({name:l(e),curves:fv.regions[t],rho:wv[e][0],sig:wv[e][1]!==`ns`})),stage:t(`brainage.paper.l.stageword`),rho:t(`brainage.paper.l.rho`),ns:t(`brainage.paper.l.ns`),caption:t(`brainage.paper.l.span`),band:1}),Q(Nu,{text:t(`brainage.paper.l.rise`)},{panel:`B`}),Q(X_,{show:[6,6.5],regions:u.map((e,t)=>{let r=wv[e];return{region:e,label:n[e]+` `+kv(r[0]),quiet:r[1]===`ns`,labelAt:[7.2+t*.45,7.5+t*.45],tint:{tone:r[0]>=0?`hd`:`accent`,strength:Math.abs(r[0])/wv.subcortical[0],at:[7+t*.45,7.5+t*.45]}}})},{panel:`B`}),Q(Ru,{x:404,y:40,w:156,h:38,size:16,text:n.whole+` `+kv(wv.whole[0]),fade:[10,10.4]},{panel:`B`}),Q(Z_,{ticks:[lu(-wv.subcortical[0],2),`0`,lu(wv.subcortical[0],2)],left:t(`brainage.paper.l.falls`),right:t(`brainage.paper.l.rises`),at:[10.4,10.9]},{panel:`B`})]},{key:`clinical`,label:t(`brainage.paper.7.label`),dur:11,note:[t(`brainage.paper.7.note`),t(`brainage.paper.7.note2`)],head:t(`brainage.paper.7.head`),sub:t(`brainage.paper.7.sub`),text:t(`brainage.paper.7.text`),keys:f(7),blocks:[Q(Nu,{text:t(`brainage.paper.l.four`)}),Q(ov,{cards:o.map(e=>i[e])}),Q(Nu,{text:t(`brainage.paper.l.corrtitle`)},{panel:`B`}),Q(sv,{cols:s.map(e=>n[e]),max:Math.abs(Tv.sdmt.subcortical),none:`–`,rows:o.map(e=>({...i[e],values:s.map(t=>Tv[e][t]??null)}))},{panel:`B`,at:1.8}),Q(Pu,{items:[{x:0,y:388,text:t(`brainage.paper.l.everycell`),quiet:!0,size:16,at:6.8}]},{panel:`B`})]}]}}var Mv=[`whole`,`subcortical`,`frontal`,`parietal`,`temporal`,`occipital`,`insula`],Nv=Mv.filter(e=>e!==`whole`),Pv=e=>e[0].toUpperCase()+e.slice(1),Fv={w:1760,h:660},$={barX:268,barW:30,top:92,h:500,gap:5,cardX:590,cardW:210,cardH:58,rowX0:872,rowX1:1172,mapX:1350},Iv={A:40,B:$.barX-14,C:$.cardX,D:$.rowX0,E:$.mapX},Lv=e=>$.rowX0+(e-15)/77*($.rowX1-$.rowX0),Rv=e=>Lv(Math.min(Math.max(e,15),92)),zv=[20,30,40,50,60,70,80,90],Bv=e=>70+Mv.indexOf(e)*76,Vv=e=>Bv(e)+$.cardH/2;function Hv(e){let t=Nv.reduce((t,n)=>t+e[n],0),n=($.h-$.gap*(Nv.length-1))/t,r=$.top,i={};for(let t of Nv){let a=e[t]*n;i[t]={y0:r,y1:r+a,per:n},r+=a+$.gap}return i}function Uv(e,t,n,r,i,a){let o=(e+r)/2;return`M${e} ${t}C${o} ${t} ${o} ${i} ${r} ${i}L${r} ${a}C${o} ${a} ${o} ${n} ${e} ${n}Z`}function Wv(e){let t={},n=Vv(`whole`)-18;for(let r of Nv){let i=e[r],a=i.y1-i.y0,o=Math.max(a*.08,1.2);t[r]=Uv($.barX+$.barW,i.y0+a*.2,i.y0+a*.2+o*2,$.cardX,n,n+o),n+=o+2}return t}var Gv=[1,2,3,5,10,20,50,100],Kv={dx:146,w:46,dy:14,h:30};function qv(e,t,n,r,i){let a=[...n.values(),i],o=Math.min(...a)-1,s=Math.max(...a)+1,c=t=>e+(t-1)/99*Kv.w,l=e=>t+Kv.h-(e-o)/(s-o)*Kv.h,u=[...n.entries()].filter(([e])=>e<=r).sort((e,t)=>e[0]-t[0]),d=u.map(([e,t],n)=>`${n?`L`:`M`}${c(e).toFixed(1)} ${l(t).toFixed(1)}`).join(``),[f,p]=u[u.length-1]??[100,i];return{d,dot:[c(f),l(p)],finalY:l(i)}}var Jv=e=>(e>=0?`+`:`−`)+Math.abs(e).toFixed(1);function Yv(e,t,n){let r={};for(let[i,a]of Object.entries(e.features)){let o=t[e.columns.indexOf(i)];if(o===void 0||Number.isNaN(o))continue;let{intercept:s,slope:c,sd:l}=a.age_trend;l>0&&(r[i]=(o-(s+c*n))/l*(c<0?-1:1))}return r}function Xv(e){let t=e=>Math.round(Math.min(Math.max(e,0),1)*1e3)/10;if(e===0)return`var(--tissue)`;let[n,r]=e>0?[`--hd`,t(e/14)]:[`--accent`,t(-e/10)];return r>=100?`var(${n})`:`color-mix(in srgb, var(${n}) ${r}%, var(--tissue))`}function Zv(e){if(!(e>0||e<0))return`var(--line-2)`;let t=Math.round(Math.min(Math.abs(e)/2.2,1)*1e3)/10,n=e>0?`--hd`:`--accent`;return t>=100?`var(${n})`:`color-mix(in srgb, var(${n}) ${t}%, var(--line-2))`}function Qv(e,t,n){let{intercept:r,slope:i}=e.models[t].bias;return e.training_mean_age-(r+i*n)}var $v=[`frontal`,`parietal`,`temporal`,`occipital`,`insula`],ey={x:$.mapX,y:262,w:380,lo:-10,hi:20},ty=[-10,0,14,20],ny={x0:$.mapX+24,x1:1745,y0:350,row:54,h:46,lo:-30,hi:45},ry=e=>ny.x0+(e-ny.lo)/(ny.hi-ny.lo)*(ny.x1-ny.x0),iy=[-30,-15,0,15,30,45],ay=e=>(e<0?`−`:``)+Math.abs(e).toFixed(2);function oy({art:e,gaps:t,active:n,person:r,stale:i,dim:a,onFocus:o}){let s=U(),c=(0,_.useId)(),l=e=>s(`brainage.paper.l.region.${e}`),u=e=>{let n=t[e];return n===null?`var(--tissue)`:Xv(n)},d=fv.regions[Pv(n)]??[],f=t[n],[p,m]=wv[n],h=f===null?null:r.uploaded?s(`brainage.explainer.e.you`,{gap:Jv(f)}):r.stage===null?s(`brainage.explainer.e.nohd`,{id:r.id,gap:Jv(f)}):s(`brainage.explainer.e.person`,{id:r.id,gap:Jv(f)}),g=f===null?0:ry(Math.max(ny.lo,Math.min(ny.hi,f))),v=ny.y0+4*ny.row;return(0,H.jsxs)(`g`,{className:`col`+(a?` dim`:``)+(i?` stale`:``),id:`colE`,"aria-busy":i||void 0,children:[(0,H.jsx)(`defs`,{children:(0,H.jsx)(`linearGradient`,{id:c,children:ty.map(e=>(0,H.jsx)(`stop`,{offset:(e-ey.lo)/(ey.hi-ey.lo),style:{stopColor:Xv(e)}},e))})}),e&&(()=>{let r=e.lateral.bbox,i=.31,a=e.coronal.bbox,c=.3;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`g`,{transform:`translate(${$.mapX-r[0]*i},${70-r[1]*i}) scale(${i})`,children:[(0,H.jsx)(`path`,{d:e.lateral.sil,fill:`var(--tissue)`}),$v.map(r=>(0,H.jsx)(`path`,{className:`lobe`+(r===n?` on`:``),"data-r":r,d:e.lateral.lobes[r],fill:u(r),onClick:()=>o(r),children:(0,H.jsx)(`title`,{children:t[r]===null?l(r):s(`brainage.explainer.e.lobe`,{name:l(r),gap:Jv(t[r])})})},r)),(0,H.jsx)(`path`,{d:e.lateral.sulci,fill:`var(--sulc)`,opacity:.12,pointerEvents:`none`})]}),(0,H.jsxs)(`g`,{transform:`translate(${$.mapX+250-a[0]*c},${88-a[1]*c}) scale(${c})`,children:[e.coronal.comps.map((e,t)=>e.deep?(0,H.jsx)(`path`,{className:`lobe deep`+(n===`subcortical`?` on`:``),"data-r":`subcortical`,d:e.d,fill:u(`subcortical`),onClick:()=>o(`subcortical`)},t):(0,H.jsx)(`path`,{d:e.d,fill:`var(--tissue)`},t)),e.coronal.vents.map((e,t)=>(0,H.jsx)(`path`,{d:e,fill:`var(--bg-2)`},`v${t}`))]})]})})(),(0,H.jsx)(`rect`,{x:ey.x,y:ey.y,width:ey.w,height:8,rx:4,fill:`url(#${c})`}),[[-10,`start`,`brainage.explainer.e.lo`],[0,`middle`,`brainage.explainer.e.zero`],[20,`end`,`brainage.explainer.e.hi`]].map(([e,t,n])=>(0,H.jsx)(`text`,{x:ey.x+(e-ey.lo)/(ey.hi-ey.lo)*ey.w,y:ey.y+24,textAnchor:t,className:`small mono`,...G(n),children:s(n)},e)),(0,H.jsx)(`text`,{x:ey.x,y:ey.y-8,className:`small`,...G(`brainage.explainer.e.younger`),children:s(`brainage.explainer.e.younger`)}),(0,H.jsx)(`text`,{x:ey.x+ey.w,y:ey.y-8,textAnchor:`end`,className:`small`,...G(`brainage.explainer.e.older`),children:s(`brainage.explainer.e.older`)}),(0,H.jsx)(`text`,{x:$.mapX,y:322,className:`ridge-title`,...G(`brainage.explainer.e.ridges`),children:s(`brainage.explainer.e.ridges`,{name:l(n)})}),(0,H.jsx)(`text`,{x:$.mapX,y:340,className:`small`,...G(`brainage.explainer.e.from`),children:s(`brainage.explainer.e.from`,{rho:ay(p),ns:m===`ns`?` ${s(`brainage.explainer.e.ns`)}`:``})}),d.map((e,t)=>{let i=ny.y0+52+t*ny.row,a=r.stage===String(t),o=`M${ry(ny.lo)} ${i}`;return fv.grid.forEach((t,n)=>{t>=ny.lo&&t<=ny.hi&&(o+=`L${ry(t).toFixed(1)} ${(i-e[n]*ny.h).toFixed(1)}`)}),o+=`L${ry(ny.hi)} ${i}Z`,(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`path`,{className:`ridge`,"data-region":Pv(n),"data-stage":t,d:o,fill:`var(--s${t})`,fillOpacity:a?.75:.32,stroke:`var(--s${t})`,strokeWidth:a?2:1}),(0,H.jsx)(`text`,{x:ny.x0-6,y:i-4,textAnchor:`end`,className:`ridge-stage`+(a?` on`:``),children:t})]},t)}),(0,H.jsx)(`text`,{x:ny.x0-6,y:ny.y0+28,textAnchor:`end`,className:`small`,...G(`brainage.explainer.e.stage`),children:s(`brainage.explainer.e.stage`)}),(0,H.jsx)(`line`,{x1:ry(0),x2:ry(0),y1:ny.y0+2,y2:v+2,stroke:`var(--ink-3)`,strokeDasharray:`3 3`}),iy.map(e=>(0,H.jsx)(`text`,{x:ry(e),y:v+20,textAnchor:`middle`,className:`small mono`,children:e>0?`+${e}`:e<0?`−${-e}`:`0`},e)),h&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`line`,{x1:g,x2:g,y1:ny.y0+6,y2:v,stroke:`var(--ink)`,strokeWidth:2}),(0,H.jsx)(`circle`,{cx:g,cy:ny.y0+6,r:5,fill:`var(--ink)`}),(0,H.jsx)(`text`,{x:g>ny.x1-160?g-8:g+8,y:ny.y0+10,textAnchor:g>ny.x1-160?`end`:`start`,className:`ridge-me`,children:h})]})]})}var sy=new Set(`bankssts.caudalanteriorcingulate.caudalmiddlefrontal.cuneus.entorhinal.frontalpole.fusiform.inferiorparietal.inferiortemporal.insula.isthmuscingulate.lateraloccipital.lateralorbitofrontal.lingual.medialorbitofrontal.middletemporal.paracentral.parahippocampal.parsopercularis.parsorbitalis.parstriangularis.pericalcarine.postcentral.posteriorcingulate.precentral.precuneus.rostralanteriorcingulate.rostralmiddlefrontal.superiorfrontal.superiorparietal.superiortemporal.supramarginal.temporalpole.transversetemporal`.split(`.`)),cy={ThickAvg:`brainage.explainer.m.thickness`,SurfArea:`brainage.explainer.m.area`,GrayVol:`brainage.explainer.m.volume`,MeanCurv:`brainage.explainer.m.curvature`,Volume_mm3:`brainage.explainer.m.volume`};function ly(e,t,n){if(t===`sex`)return n(`brainage.explainer.m.sex`);let r=e.features[t];if(!r)return t;let i=r.file===`lh.aparc.stats`?`l`:r.file===`rh.aparc.stats`?`r`:null,a=r.structure,o=cy[r.column]??`brainage.explainer.m.volume`,s=/^wm-(lh|rh)-(.+)$/.exec(a),c=/^(Left|Right)-(.+)$/.exec(a),l=e=>sy.has(e)?n(`brainage.explainer.m.r.${e}`):e;s?(i=s[1]===`lh`?`l`:`r`,a=l(s[2]),o=`brainage.explainer.m.wm`):c?(i=c[1]===`Left`?`l`:`r`,a=Wa[c[2]]??c[2].replace(/-/g,` `)):a=r.file===`aseg.stats`?Wa[a]??a.replace(/-/g,` `):l(a);let u=n(o);return i?n(`brainage.explainer.m.name`,{side:n(i===`l`?`brainage.explainer.m.left`:`brainage.explainer.m.right`),structure:a,kind:u}):n(`brainage.explainer.m.mid`,{structure:a,kind:u})}var uy=e=>e===`mm`?2:e===`1/mm`?3:0,dy={mm:`mm`,"mm^2":`mm²`,"mm^3":`mm³`,"1/mm":`mm⁻¹`};function fy(e,t,n=uy(t)){return`${e.toLocaleString(`en-AU`,{minimumFractionDigits:n,maximumFractionDigits:n})} ${dy[t]??t}`}function py(e,t,n){let r=uy(n),i=fy(e,n,r)===fy(t,n,r);return[fy(e,n,i?r+1:r),fy(t,n,i?r+1:r)]}function my(e){let t=U(),{spec:n,person:r,comparedAge:i,trees:a,ages:o,missing:s,spark:c,art:l,active:u}=e,d=e=>t(`brainage.paper.l.region.${e}`),f=(0,_.useMemo)(()=>Object.fromEntries(Nv.map(e=>[e,n.models[Pv(e)].columns.filter(e=>e!==`sex`)])),[n]),p=(0,_.useMemo)(()=>Hv(Object.fromEntries(Nv.map(e=>[e,f[e].length]))),[f]),m=(0,_.useMemo)(()=>Yv(n,r.x,i),[n,r.x,i]),h=e=>n.models[Pv(e)].columns.filter(e=>e!==`sex`).length,g=t=>{let n=t.target.closest?.(`[data-r]`);e.onHover(n?n.getAttribute(`data-r`):null)},v=[[`A`,t(`brainage.explainer.col.a`)],[`B`,t(`brainage.explainer.col.b`,{n:n.columns.length-1})],[`C`,t(`brainage.explainer.col.c`)],[`D`,t(`brainage.explainer.col.d`)],[`E`,t(`brainage.explainer.col.e`)]],y=i===r.age?t(`brainage.explainer.d.atscan`,{age:i}):t(`brainage.explainer.d.compared`,{age:i}),b=e=>{let r=ly(n,e[0],t);return t(`brainage.explainer.d.missing`,{what:e.length>1?t(`brainage.explainer.d.more`,{first:r,n:e.length-1}):r})},x=t=>`col`+(e.lit&&!e.lit.includes(t)?` dim`:``),S=(0,_.useMemo)(()=>Wv(p),[p]),C=Object.fromEntries(Mv.map(e=>{let t=o?.[Pv(e)];return[e,t==null?null:t-i]}));return(0,H.jsxs)(`svg`,{className:`flow`,viewBox:`0 0 ${Fv.w} ${Fv.h}`,role:`group`,"aria-label":t(`brainage.explainer.svg.label`),onPointerMove:g,onPointerLeave:()=>e.onHover(null),children:[v.map(([n,r])=>(0,H.jsxs)(`g`,{className:`coltitle-g`+(e.opened===n?` on`:``),role:`button`,tabIndex:0,"aria-label":t(`brainage.explainer.col.details`,{title:r}),onClick:()=>e.onOpenColumn(n),onKeyDown:Cs(()=>e.onOpenColumn(n)),children:[(0,H.jsx)(`text`,{x:Iv[n],y:40,className:`coltitle`,children:r}),(0,H.jsx)(ws,{x:Iv[n]+r.length*9.6+18,y:34})]},n)),(0,H.jsxs)(`g`,{className:x(`A`),id:`colA`,children:[l&&(()=>{let e=l.coronal.bbox,t=.47;return(0,H.jsxs)(`g`,{className:`a-scan`,transform:`translate(${30-e[0]*t},${250-e[1]*t}) scale(${t})`,children:[l.coronal.comps.map((e,t)=>(0,H.jsx)(`path`,{d:e.d,fill:`var(--tissue)`,opacity:e.deep?1:.85},t)),l.coronal.vents.map((e,t)=>(0,H.jsx)(`path`,{d:e,fill:`var(--bg-2)`},`v${t}`))]})})(),(0,H.jsx)(`text`,{x:40,y:230,className:`small`,...G(`brainage.explainer.a.scan`),children:t(`brainage.explainer.a.scan`)}),(0,H.jsx)(`text`,{x:40,y:440,className:`a-fs`,...G(`brainage.explainer.a.fs`),children:t(`brainage.explainer.a.fs`)}),(0,H.jsx)(`text`,{x:40,y:460,className:`small`,...G(`brainage.explainer.a.kinds`),children:t(`brainage.explainer.a.kinds`)}),(0,H.jsx)(`text`,{x:40,y:500,className:`small`,...G(`brainage.explainer.a.sex`),children:t(`brainage.explainer.a.sex`)}),(0,H.jsx)(`path`,{d:Uv(222,300,330,$.barX,$.top,$.top+$.h),fill:`var(--line-2)`})]}),(0,H.jsxs)(`g`,{className:x(`B`),id:`colB`,children:[Nv.map(t=>{let n=p[t],r=t===u;return(0,H.jsxs)(`g`,{className:`row b-band`,"data-r":t,onClick:()=>e.onFocus(t),children:[(0,H.jsx)(`rect`,{x:$.barX-6,y:n.y0,width:4,height:n.y1-n.y0,fill:`var(--r-${t})`}),f[t].map((e,t)=>(0,H.jsx)(`rect`,{className:`b-line`,x:$.barX,y:n.y0+t*n.per,width:$.barW,height:Math.max(n.per-.35,.6),fill:Zv(m[e]??NaN)},e)),(0,H.jsx)(`rect`,{x:$.barX,y:n.y0,width:$.barW,height:n.y1-n.y0,fill:`none`,stroke:r?`var(--ink)`:`none`,strokeWidth:1.5}),(0,H.jsxs)(`text`,{x:$.barX+$.barW+10,y:(n.y0+n.y1)/2+4,className:`b-name`+(r?` on`:``),style:{fill:`var(--r-${t})`},children:[d(t),` `,f[t].length]})]},t)}),(0,H.jsx)(`text`,{x:$.barX-14,y:$.top+$.h+26,className:`small`,...G(`brainage.explainer.b.note`),children:t(`brainage.explainer.b.note`)})]}),(0,H.jsxs)(`g`,{className:x(`C`),id:`colC`,children:[Nv.map(e=>{let t=p[e],n=t.y1-t.y0,r=Vv(e),i=Math.min(Math.max(n*.18,4),16);return(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`path`,{className:`ribbon`,d:S[e],fill:`var(--r-whole)`,opacity:u===`whole`?.5:.13}),(0,H.jsx)(`path`,{className:`ribbon`,d:Uv($.barX+$.barW,t.y0+1,t.y1-1,$.cardX,r-i,r+i),fill:`var(--r-${e})`,opacity:u===e?.55:.16})]},e)}),Mv.map(n=>{let r=Bv(n),i=n===u,o=Pv(n),s=Vv(n),l=c[o],f=l?.get(100),p=l&&f!==void 0?qv($.cardX+Kv.dx,r+Kv.dy,l,a,f):null,m=()=>e.onOpenModel(n);return(0,H.jsxs)(`g`,{children:[(0,H.jsxs)(`g`,{className:`card`+(i?` on`:``),"data-r":n,role:`button`,tabIndex:0,"aria-label":t(`brainage.explainer.c.card`,{name:d(n)}),onClick:m,onKeyDown:Cs(m),children:[[8,4].map(e=>(0,H.jsx)(`rect`,{className:`shadow`,x:$.cardX+e,y:r+e,width:$.cardW,height:$.cardH,rx:8},e)),(0,H.jsx)(`rect`,{className:`face`,x:$.cardX,y:r,width:$.cardW,height:$.cardH,rx:8}),(0,H.jsx)(`rect`,{x:$.cardX,y:r+8,width:4,height:$.cardH-16,rx:2,fill:`var(--r-${n})`}),(0,H.jsx)(`text`,{x:$.cardX+14,y:r+24,className:`c-name`,children:d(n)}),(0,H.jsx)(`text`,{x:$.cardX+14,y:r+44,className:`small`,children:a===1?t(`brainage.explainer.c.inputs.one`,{n:h(n)}):t(`brainage.explainer.c.inputs`,{n:h(n),k:a})}),p&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`line`,{x1:$.cardX+Kv.dx,x2:$.cardX+Kv.dx+Kv.w,y1:p.finalY,y2:p.finalY,stroke:`var(--line)`,strokeDasharray:`2 2`}),(0,H.jsx)(`path`,{d:p.d,fill:`none`,stroke:`var(--r-${n})`,strokeWidth:1.6}),(0,H.jsx)(`circle`,{cx:p.dot[0],cy:p.dot[1],r:2.6,fill:`var(--r-${n})`})]}),(0,H.jsx)(ws,{x:$.cardX+$.cardW-12,y:r+12})]}),(0,H.jsx)(`path`,{className:`ribbon`,d:Uv($.cardX+$.cardW+8,s-7,s+7,$.rowX0-8,s-2,s+2),fill:`var(--r-${n})`,opacity:i?.5:.14})]},n)}),e.trainingRows!==null&&(0,H.jsx)(`text`,{x:$.cardX,y:640,className:`small`,...G(`brainage.explainer.c.trained`),children:t(`brainage.explainer.c.trained`,{rows:e.trainingRows.toLocaleString(`en-AU`),paper:1936 .toLocaleString(`en-AU`)})})]}),(0,H.jsxs)(`g`,{className:x(`D`)+(e.stale?` stale`:``),id:`colD`,"aria-busy":e.stale||void 0,children:[zv.map(e=>(0,H.jsxs)(`g`,{children:[(0,H.jsx)(`line`,{x1:Lv(e),x2:Lv(e),y1:66,y2:598,stroke:`var(--line-2)`}),(0,H.jsx)(`text`,{x:Lv(e),y:616,textAnchor:`middle`,className:`small mono`,children:e})]},e)),(0,H.jsx)(`text`,{x:$.rowX1,y:636,textAnchor:`end`,className:`small`,...G(`brainage.explainer.d.axis`),children:t(`brainage.explainer.d.axis`)}),(0,H.jsx)(`line`,{x1:Rv(i),x2:Rv(i),y1:60,y2:600,stroke:`var(--ink)`,strokeWidth:1.5,strokeDasharray:`4 3`}),(0,H.jsx)(`text`,{x:Rv(i),y:56,textAnchor:`middle`,className:`d-compared`,children:y}),Mv.map(r=>{let a=Pv(r),c=Vv(r),l=r===u,d=n.models[a].cv.mae,f=o?.[a]??null,p=f===null?null:f-i,m=f===null?0:f>92?1:f<15?-1:0;return(0,H.jsxs)(`g`,{className:`row d-row`,"data-r":r,onClick:()=>e.onFocus(r),children:[(0,H.jsx)(`rect`,{x:$.rowX0-8,y:c-22,width:$.rowX1-$.rowX0+120,height:44,rx:6,fill:l?`var(--bg-2)`:`transparent`}),(0,H.jsx)(`line`,{x1:$.rowX0,x2:$.rowX1,y1:c,y2:c,stroke:`var(--line)`}),s[a]&&(0,H.jsx)(`text`,{x:$.rowX0,y:c-8,className:`small d-missing`,children:b(s[a])}),f!==null&&p!==null&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`rect`,{className:`d-band`,x:Rv(f-d),y:c-7,width:Rv(f+d)-Rv(f-d),height:14,rx:7,fill:`var(--line-2)`,opacity:.9}),(0,H.jsx)(`line`,{className:`d-gapline`,x1:Rv(i),x2:Rv(f),y1:c,y2:c,stroke:Xv(p),strokeWidth:3}),(0,H.jsx)(`circle`,{className:`d-dot`,cx:Rv(f),cy:c,r:7,fill:Xv(p),stroke:`var(--bg)`,strokeWidth:2}),m!==0&&(0,H.jsx)(`path`,{className:`d-edge`,"aria-hidden":`true`,fill:Xv(p),d:`M${Rv(f)+m*9} ${c-5}L${Rv(f)+m*15} ${c}L${Rv(f)+m*9} ${c+5}Z`}),(0,H.jsx)(`text`,{x:Rv(f),y:c-12,textAnchor:`middle`,className:`small mono d-age`,children:f.toFixed(0)}),(0,H.jsx)(`text`,{x:$.rowX1+18,y:c+6,className:`mono d-gap`+(p>.5?` older`:p<-.5?` younger`:``),children:Jv(p)}),(0,H.jsx)(`text`,{x:$.rowX1+78,y:c+5,className:`small`,...G(`brainage.explainer.yrs`),children:t(`brainage.explainer.yrs`)})]})]},r)})]}),(0,H.jsx)(oy,{art:l,gaps:C,active:u,person:r,stale:e.stale,dim:e.lit!==null&&!e.lit.includes(`E`),onFocus:e.onFocus})]})}var hy=[1,2,3,10,50,100];function gy(e){let t=U();return(0,H.jsx)(mc,{...e,closeLabel:t(`brainage.explainer.z.close`),keepOpenWithin:`svg.flow, .controls, .tour, .pop`})}var _y=e=>(e>=0?`+`:`−`)+Math.abs(e).toFixed(2),vy=(e,t)=>e.length>t?e.slice(0,t-1)+`…`:e;function yy(e){let t=U(),{model:n,k:r,spec:i,person:a,comparedAge:o,pa:s}=e,c=hy.indexOf(r),l=t=>e.onTree(hy[(Math.max(c,0)+t+hy.length)%hy.length]),u=(0,_.useMemo)(()=>Yv(i,a.x,o),[i,a.x,o]),d=(0,_.useMemo)(()=>i.models[n].columns.filter(e=>e!==`sex`&&u[e]!==void 0).sort((e,t)=>Math.abs(u[t])-Math.abs(u[e])).slice(0,8),[i,n,u]),[f,p]=(0,_.useState)(null);(0,_.useEffect)(()=>{if(!s||e.missing)return;let t=!0;return s.path(n,r).then(e=>{t&&e&&p({pa:s,model:n,k:r,path:e})},()=>{t&&p({pa:s,model:n,k:r,path:`failed`})}),()=>{t=!1}},[s,n,r,e.missing]);let m=f&&f.pa===s&&f.model===n&&f.k===r?f.path:null,h=e.course,g=t(a.sex===`male`?`brainage.explainer.m.male`:`brainage.explainer.m.female`),v=t(`brainage.explainer.z.sub`,{n:i.models[n].columns.length-1,trees:100,mae:i.models[n].cv.mae.toFixed(1)});return(0,H.jsx)(gy,{at:`C`,takeFocus:e.takeFocus,title:t(`brainage.explainer.z.title`,{name:e.name.toLowerCase()}),titleKey:`brainage.explainer.z.title`,sub:v,subKey:`brainage.explainer.z.sub`,onClose:e.onClose,children:(0,H.jsxs)(`div`,{className:`grid`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h5`,{...G(`brainage.explainer.z.inputs`),children:t(`brainage.explainer.z.inputs`)}),(0,H.jsxs)(`svg`,{className:`z-inputs`,viewBox:`0 0 260 230`,width:`100%`,role:`img`,"aria-label":t(`brainage.explainer.z.inputs`),children:[(0,H.jsx)(`line`,{x1:130,x2:130,y1:4,y2:206,stroke:`var(--line)`}),d.map((e,n)=>{let r=u[e],a=4+n*25,o=Math.min(Math.abs(r),2.5)/2.5*120,s=ly(i,e,t);return(0,H.jsxs)(`g`,{className:`z-input`,"data-column":e,children:[(0,H.jsx)(`title`,{children:s}),(0,H.jsx)(`text`,{x:0,y:a+10,className:`z-in-name`,children:vy(s,40)}),(0,H.jsx)(`rect`,{x:r>=0?130:130-o,y:a+14,width:o,height:8,rx:2,fill:r>=0?`var(--hd)`:`var(--accent)`})]},e)}),(0,H.jsx)(`text`,{x:130,y:224,textAnchor:`middle`,className:`small`,...G(`brainage.explainer.z.axis`),children:t(`brainage.explainer.z.axis`)})]}),(0,H.jsx)(`p`,{className:`z-note`,...G(`brainage.explainer.z.inputs.note`),children:t(`brainage.explainer.z.inputs.note`)})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h5`,{...G(`brainage.explainer.z.trees`),children:t(`brainage.explainer.z.trees`)}),e.missing?(0,H.jsx)(`p`,{className:`z-note`,...G(`brainage.explainer.z.missing`),children:t(`brainage.explainer.z.missing`,{n:e.missing.length})}):m===`failed`?(0,H.jsx)(`p`,{className:`z-note`,role:`status`,...G(`brainage.explainer.z.failed`),children:t(`brainage.explainer.z.failed`)}):m?(0,H.jsxs)(`ol`,{className:`z-path`,children:[m.steps.map((e,n)=>(0,H.jsxs)(`li`,{className:`z-step`,children:[(0,H.jsx)(`b`,{children:ly(i,e.column,t)}),e.column===`sex`?(0,H.jsx)(`span`,{children:g}):(()=>{let[n,r]=py(e.threshold,e.value,i.features[e.column]?.unit??``);return(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`span`,{className:`op`,children:e.left?`≤`:`>`}),` `,n,(0,H.jsx)(`span`,{className:`theirs`,children:t(`brainage.explainer.z.theirs`,{value:r})})]})})()]},n)),(0,H.jsx)(`li`,{className:`z-leaf`,style:{borderColor:m.leaf>=0?`var(--hd)`:`var(--accent)`},children:r===1?t(`brainage.explainer.z.leaf.first`,{leaf:m.leaf.toFixed(2)}):t(`brainage.explainer.z.leaf`,{leaf:_y(m.leaf)})})]}):(0,H.jsx)(`p`,{className:`z-note`,...G(`brainage.explainer.z.walking`),children:t(`brainage.explainer.z.walking`)}),(0,H.jsxs)(`div`,{className:`nav`,children:[(0,H.jsx)(`button`,{type:`button`,onClick:()=>l(-1),"aria-label":t(`brainage.explainer.z.prev`),children:`‹`}),(0,H.jsx)(`span`,{className:`z-tree-lab`,"aria-live":`polite`,children:t(`brainage.explainer.z.tree`,{k:r,n:100})}),(0,H.jsx)(`button`,{type:`button`,onClick:()=>l(1),"aria-label":t(`brainage.explainer.z.next`),children:`›`})]})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h5`,{...G(`brainage.explainer.z.sum`),children:t(`brainage.explainer.z.sum`)}),e.missing?null:h===`pending`?(0,H.jsx)(`p`,{className:`z-note`,role:`status`,...G(`brainage.explainer.z.sum.pending`),children:t(`brainage.explainer.z.sum.pending`)}):h===`failed`?(0,H.jsx)(`p`,{className:`z-note`,role:`status`,...G(`brainage.explainer.z.sum.failed`),children:t(`brainage.explainer.z.sum.failed`)}):(0,H.jsx)(by,{course:h,tree:r,trees:e.trees,shown:e.shown,comparedAge:o,atScan:o===a.age,start:Qv(i,n,a.age),mean:i.training_mean_age,model:n})]})]})})}function by({course:e,tree:t,trees:n,shown:r,comparedAge:i,atScan:a,start:o,mean:s,model:c}){let l=U(),u=Math.min(...e,i,o)-6,d=Math.max(...e,i,o)+3,f=e=>30+e/100*215,p=e=>196-(e-u)/(d-u)*180,m=t=>e.slice(0,t).map((e,t)=>`${t?`L`:`M`}${f(t+1).toFixed(1)} ${p(e).toFixed(1)}`).join(``),h=r??e[n-1],g=c.toLowerCase(),_=e[e.length-1];return(0,H.jsxs)(`svg`,{className:`z-sum`,viewBox:`0 0 260 230`,width:`100%`,role:`img`,"aria-label":l(`brainage.explainer.z.sum`),children:[[u,d].map(e=>(0,H.jsx)(`text`,{x:26,y:p(e)+4,textAnchor:`end`,className:`small mono`,children:Math.round(e)},e)),(0,H.jsx)(`line`,{x1:30,x2:245,y1:p(i),y2:p(i),stroke:`var(--ink)`,strokeDasharray:`4 3`}),(0,H.jsx)(`text`,{x:245,y:p(i)+(_>i?14:-6),textAnchor:`end`,className:`z-lab`,children:l(a?`brainage.explainer.d.atscan`:`brainage.explainer.d.compared`,{age:i})}),(0,H.jsx)(`path`,{d:m(e.length),fill:`none`,stroke:`var(--line)`,strokeWidth:2}),(0,H.jsx)(`path`,{d:m(n),fill:`none`,stroke:`var(--r-${g})`,strokeWidth:2.5}),(0,H.jsx)(`circle`,{className:`z-sum-tree`,cx:f(t),cy:p(e[t-1]),r:4,fill:`var(--accent)`}),(0,H.jsx)(`circle`,{cx:f(n),cy:p(h),r:5,fill:Xv(h-i),stroke:`var(--bg)`,strokeWidth:2}),(0,H.jsx)(`text`,{x:f(n)-6,y:p(h)-10,textAnchor:`end`,className:`z-now mono`,children:h.toFixed(1)}),(0,H.jsx)(`line`,{className:`z-start-step`,x1:f(0),x2:f(1),y1:p(o),y2:p(e[0]),stroke:`var(--ink-3)`,strokeDasharray:`2 2`}),(0,H.jsx)(`circle`,{className:`z-start-dot`,cx:f(0),cy:p(o),r:3,fill:`var(--ink-3)`}),(0,H.jsxs)(`text`,{x:30,y:p(o)+(e[0]>o?16:-20),className:`z-lab dim z-start`,children:[(0,H.jsx)(`tspan`,{x:30,...G(`brainage.explainer.z.start`),children:l(`brainage.explainer.z.start`,{age:o.toFixed(1)})}),(0,H.jsx)(`tspan`,{x:30,dy:12,...G(`brainage.explainer.z.start.why`),children:l(`brainage.explainer.z.start.why`,{mean:s.toFixed(1)})})]}),(0,H.jsx)(`text`,{x:137,y:224,textAnchor:`middle`,className:`small`,...G(`brainage.explainer.z.added`),children:l(`brainage.explainer.z.added`)})]})}var xy=e=>(e<0?`−`:``)+Math.abs(e).toFixed(2),Sy=e=>e>.5?`older`:e<-.5?`younger`:``;function Cy(e){let t=U(),n=e=>t(`brainage.paper.l.region.${e}`),r=t=>{let n=e.ages?.[Pv(t)];return n==null?null:n-e.comparedAge};if(e.column===`A`)return(0,H.jsx)(gy,{at:`A`,title:t(`brainage.explainer.da.title`),titleKey:`brainage.explainer.da.title`,sub:t(`brainage.explainer.da.sub`),subKey:`brainage.explainer.da.sub`,onClose:e.onClose,children:(0,H.jsxs)(`div`,{className:`z-body`,children:[(0,H.jsx)(`div`,{className:`steps`,children:[[`mri`,`mri.sub`],[`fs`,`fs.sub`],[`files`,`files.sub`],[`n`,`n.sub`]].map(([n,r],i)=>(0,H.jsxs)(`div`,{className:`steps-item`,children:[i>0&&(0,H.jsx)(`i`,{"aria-hidden":`true`,children:`→`}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`b`,{...G(`brainage.explainer.da.${n}`),children:t(`brainage.explainer.da.${n}`,{n:e.spec.columns.length-1})}),(0,H.jsx)(`span`,{...G(`brainage.explainer.da.${r}`),children:t(`brainage.explainer.da.${r}`)})]})]},n))}),(0,H.jsx)(W,{k:`brainage.explainer.da.p1`,as:`p`}),(0,H.jsx)(W,{k:`brainage.explainer.da.p2`,as:`p`})]})});if(e.column===`B`){let r=Yv(e.spec,e.person.x,e.comparedAge);return(0,H.jsx)(gy,{at:`B`,title:t(`brainage.explainer.db.title`,{n:e.spec.columns.length-1}),titleKey:`brainage.explainer.db.title`,sub:t(`brainage.explainer.db.sub`),subKey:`brainage.explainer.db.sub`,onClose:e.onClose,children:(0,H.jsxs)(`div`,{className:`z-body`,children:[(0,H.jsx)(`div`,{className:`cols six`,children:Nv.map(i=>{let a=e.spec.models[Pv(i)].columns.filter(e=>e!==`sex`),o=a.filter(e=>r[e]!==void 0),s=o.reduce((e,t)=>e+r[t],0)/(o.length||1),c=[...o].sort((e,t)=>r[t]-r[e]).slice(0,4);return(0,H.jsxs)(`div`,{className:`region`,style:{borderColor:`var(--r-${i})`},children:[(0,H.jsx)(`h5`,{children:n(i)}),(0,H.jsx)(`div`,{className:`big`,children:a.length}),(0,H.jsx)(`div`,{className:`small`,...G(`brainage.explainer.db.count`),children:t(`brainage.explainer.db.count`)}),(0,H.jsx)(`div`,{className:`strip`,"aria-hidden":`true`,children:a.map(e=>(0,H.jsx)(`i`,{style:{background:Zv(r[e]??NaN)}},e))}),o.length>0&&(0,H.jsx)(W,{k:s>=0?`brainage.explainer.db.older`:`brainage.explainer.db.younger`,as:`div`,className:`mean`}),(0,H.jsx)(`ul`,{children:c.map(n=>(0,H.jsx)(`li`,{children:ly(e.spec,n,t)},n))})]},i)})}),(0,H.jsx)(W,{k:`brainage.explainer.db.note`,as:`p`,className:`z-note`})]})})}if(e.column===`D`){let i=e.engine===`ort`?`brainage.explainer.dd.engine.ort`:`brainage.explainer.dd.engine.js`;return(0,H.jsx)(gy,{at:`D`,title:t(`brainage.explainer.dd.title`),titleKey:`brainage.explainer.dd.title`,sub:t(`brainage.explainer.dd.sub`,{age:e.comparedAge,k:e.trees,n:100}),subKey:`brainage.explainer.dd.sub`,onClose:e.onClose,children:(0,H.jsxs)(`div`,{className:`z-body`,children:[(0,H.jsxs)(`table`,{children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{...G(`brainage.explainer.dd.model`),children:t(`brainage.explainer.dd.model`)}),(0,H.jsx)(`th`,{className:`num`,...G(`brainage.explainer.dd.age`),children:t(`brainage.explainer.dd.age`)}),(0,H.jsx)(`th`,{className:`num`,...G(`brainage.explainer.dd.gap`),children:t(`brainage.explainer.dd.gap`)}),(0,H.jsx)(`th`,{className:`num`,...G(`brainage.explainer.dd.ours`),children:t(`brainage.explainer.dd.ours`)}),(0,H.jsx)(`th`,{...G(`brainage.explainer.dd.clear`),children:t(`brainage.explainer.dd.clear`)}),(0,H.jsx)(`th`,{className:`num`,...G(`brainage.explainer.dd.paper`),children:t(`brainage.explainer.dd.paper`)}),(0,H.jsx)(`th`,{className:`num`,...G(`brainage.explainer.dd.r`),children:t(`brainage.explainer.dd.r`)})]})}),(0,H.jsx)(`tbody`,{children:Mv.map(i=>{let a=Pv(i),o=e.ages?.[a]??null,s=r(i),c=e.metadata?.cv[a]?.mae??e.spec.models[a].cv.mae;return(0,H.jsxs)(`tr`,{"data-r":i,children:[(0,H.jsxs)(`td`,{children:[(0,H.jsx)(`span`,{className:`sw`,style:{background:`var(--r-${i})`}}),n(i)]}),(0,H.jsx)(`td`,{className:`num`,children:o===null?`—`:o.toFixed(1)}),(0,H.jsx)(`td`,{className:`num gap `+(s===null?``:Sy(s)),children:s===null?`—`:Jv(s)}),(0,H.jsxs)(`td`,{className:`num`,children:[`±`,c.toFixed(1)]}),(0,H.jsx)(`td`,{children:s===null?t(`brainage.explainer.dd.none`):Math.abs(s)>c?(0,H.jsx)(`b`,{children:t(`brainage.explainer.dd.yes`)}):t(`brainage.explainer.dd.no`)}),(0,H.jsxs)(`td`,{className:`num`,children:[`±`,Cv[i][2]]}),(0,H.jsx)(`td`,{className:`num`,children:Cv[i][1].toFixed(2)})]},i)})})]}),(0,H.jsx)(W,{k:`brainage.explainer.dd.p1`,as:`p`}),(0,H.jsx)(W,{k:`brainage.explainer.dd.p2`,as:`p`}),(0,H.jsxs)(`p`,{className:`z-note`,children:[(0,H.jsx)(`span`,{...G(i),children:t(i)}),` `,(0,H.jsx)(`span`,{...G(`brainage.explainer.dd.below`),children:t(`brainage.explainer.dd.below`)}),` `,(0,H.jsx)(`span`,{...G(`brainage.explainer.dd.exact`),children:t(`brainage.explainer.dd.exact`)})]})]})})}return(0,H.jsx)(gy,{at:`E`,title:t(`brainage.explainer.de.title`),titleKey:`brainage.explainer.de.title`,sub:t(`brainage.explainer.de.sub`),subKey:`brainage.explainer.de.sub`,onClose:e.onClose,children:(0,H.jsx)(`div`,{className:`z-body`,children:(0,H.jsxs)(`div`,{className:`cols two`,children:[(0,H.jsxs)(`table`,{children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{...G(`brainage.explainer.de.region`),children:t(`brainage.explainer.de.region`)}),(0,H.jsx)(`th`,{className:`num`,children:`ρ`}),(0,H.jsx)(`th`,{...G(`brainage.explainer.de.rise`),children:t(`brainage.explainer.de.rise`)}),(0,H.jsx)(`th`,{className:`num`,...G(`brainage.explainer.de.person`),children:t(`brainage.explainer.de.person`)})]})}),(0,H.jsx)(`tbody`,{children:Mv.map(i=>{let[a,o]=wv[i],s=r(i),c=o===`ns`;return(0,H.jsxs)(`tr`,{"data-r":i,children:[(0,H.jsx)(`td`,{children:(0,H.jsxs)(`button`,{type:`button`,className:`linkbtn`,onClick:()=>e.onFocus(i),"aria-label":t(`brainage.explainer.de.show`,{name:n(i)}),children:[(0,H.jsx)(`span`,{className:`sw`,style:{background:`var(--r-${i})`}}),n(i)]})}),(0,H.jsxs)(`td`,{className:`num`,children:[xy(a),c?``:o]}),(0,H.jsxs)(`td`,{children:[(0,H.jsx)(`span`,{className:`meter`,style:{width:Math.abs(a)/.6*120,background:a>=0?`var(--hd)`:`var(--accent)`,opacity:c?.35:1}}),c&&(0,H.jsxs)(`span`,{className:`small`,...G(`brainage.explainer.de.ns`),children:[` `,t(`brainage.explainer.de.ns`)]})]}),(0,H.jsx)(`td`,{className:`num`,children:s===null?`—`:Jv(s)})]},i)})})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h5`,{...G(`brainage.explainer.de.reading`),children:t(`brainage.explainer.de.reading`)}),(0,H.jsx)(W,{k:`brainage.explainer.de.p1`,as:`p`,vars:{n:531}}),(0,H.jsx)(W,{k:`brainage.explainer.de.p2`,as:`p`}),(0,H.jsx)(`p`,{className:`z-note`,...G(`brainage.explainer.de.sig`),children:t(`brainage.explainer.de.sig`,{s3:`***`,s2:`**`,s1:`*`})})]})]})})})}var wy=[{cols:null},{cols:[`A`,`B`]},{cols:[`B`,`C`]},{cols:[`C`],open:`subcortical`},{cols:[`C`,`D`]},{cols:[`D`]},{cols:[`E`]},{cols:[`E`]}];function Ty({step:e,onStep:t,onClose:n}){let r=U(),i=e+1,a=n=>t((e+n+wy.length)%wy.length),o=(0,H.jsx)(`b`,{style:{color:`var(--hd)`},...G(`brainage.tour.older`),children:r(`brainage.tour.older`)}),s=(0,H.jsx)(`b`,{style:{color:`var(--accent)`},...G(`brainage.tour.younger`),children:r(`brainage.tour.younger`)});return(0,H.jsx)($c,{n:i,total:wy.length,heading:(0,H.jsx)(W,{k:`brainage.tour.${i}.h`,as:`h4`}),body:(0,H.jsx)(W,{k:`brainage.tour.${i}.p`,as:`p`,vars:i===2?{older:o,younger:s}:void 0}),labels:{close:r(`brainage.tour.close`),prev:r(`brainage.tour.prev`),next:r(`brainage.tour.next`),count:r(`brainage.tour.count`,{n:i,total:wy.length}),label:r(`brainage.tour.label`)},countAttrs:G(`brainage.tour.count`),onPrev:()=>a(-1),onNext:()=>a(1),onClose:n})}function Ey(e){let t={},n=[],r=null;for(let i of e){let e=bl(i.name);if(!e){n.push(i.name);continue}if(t[e]){r??=e;continue}t[e]=yl(i.text)}return{slots:t,ignored:n,duplicate:r}}function Dy(e,t,n){if(t!==`male`&&t!==`female`)throw Error(`sex must be 'male' or 'female', got ${String(t)}`);let r=new Float32Array(n.columns.length),i=[],a=[];return n.columns.forEach((o,s)=>{if(o===`sex`){r[s]=n.sex[t];return}let c=n.features[o],l=c?e[c.file]?.rows[c.structure]?.[c.column]:void 0;if(l===void 0){r[s]=NaN,i.push({column:o,file:c?.file??``});return}r[s]=l,(l<c.p1||l>c.p99)&&a.push(o)}),{x:r,missing:i,outOfRange:a}}var Oy=[`aseg.stats`,`lh.aparc.stats`,`rh.aparc.stats`,`wmparc.stats`],ky=e=>typeof e.text==`function`?e.text():new Response(e).text(),Ay={lo:18,hi:92},jy={slots:{},ignored:[],dups:[]};function My({spec:e,left:t,onUse:n,onClose:r}){let i=U(),a=(0,_.useRef)(null),o=(0,_.useRef)(null),s=(0,_.useId)(),c=(0,_.useId)(),[l,u]=(0,_.useState)(jy),d=(0,_.useRef)(jy),{slots:f,ignored:p,dups:m}=l,[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(!1),w=(0,_.useRef)(r);(0,_.useEffect)(()=>{w.current=r}),(0,_.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Escape`&&w.current()},t=e=>{let t=e.target;!t||a.current?.contains(t)||t.closest?.(`.upbtn`)||w.current()};return document.addEventListener(`keydown`,e),document.addEventListener(`pointerdown`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`pointerdown`,t)}},[]);let T=async e=>{let t=[],n=Ey((await Promise.all(e.map(async e=>{if(e.size>4194304)return t.push(e.name),null;try{return{name:e.name,text:await ky(e)}}catch{return t.push(e.name),null}}))).filter(e=>e!==null)),r=d.current,i={...r.slots},a=[...r.dups],o=e=>{a.includes(e)||a.push(e)};n.duplicate&&o(n.duplicate);for(let[e,t]of Object.entries(n.slots))i[e]?o(e):i[e]=t;d.current={slots:i,ignored:[...r.ignored,...n.ignored,...t],dups:a},u(d.current),x(null)},E=()=>{d.current=jy,u(jy),x(null)},D=e=>{e.preventDefault(),C(!1),T(Array.from(e.dataTransfer.files))},O=e=>{e.preventDefault(),C(!0)};return(0,H.jsx)(`div`,{className:`pop`,role:`dialog`,"aria-labelledby":s,tabIndex:-1,ref:a,style:{left:t},children:(0,H.jsxs)(`form`,{onSubmit:t=>{t.preventDefault();let r=Number(h);if(Object.keys(f).length===0){x(`files`);return}if(h.trim()===``||!Number.isFinite(r)||r<Ay.lo||r>Ay.hi){x(`age`);return}if(!v){x(`sex`);return}let{x:a}=Dy(f,v,e);n({id:`you`,label:i(`brainage.explainer.you.label`),stage:null,age:r,sex:v,x:a,uploaded:!0})},noValidate:!0,children:[(0,H.jsxs)(`header`,{children:[(0,H.jsx)(`h4`,{id:s,...G(`brainage.explainer.up.title`),children:i(`brainage.explainer.up.title`)}),(0,H.jsx)(`button`,{type:`button`,className:`x`,onClick:r,"aria-label":i(`brainage.explainer.up.close`),title:i(`brainage.explainer.up.close`),children:`✕`})]}),(0,H.jsx)(`p`,{className:`quiet`,...G(`brainage.explainer.up.lede`),children:i(`brainage.explainer.up.lede`)}),(0,H.jsx)(`ul`,{className:`up-files`,children:Oy.map(e=>(0,H.jsxs)(`li`,{"data-slot":e,className:f[e]?`ok`:`miss`,children:[(0,H.jsx)(`code`,{children:e}),` `,(0,H.jsx)(`span`,{children:f[e]?i(`brainage.explainer.up.read`):i(`brainage.explainer.up.empty`)})]},e))}),(0,H.jsxs)(`div`,{className:`drop`+(S?` over`:``),onDragEnter:O,onDragOver:O,onDragLeave:()=>C(!1),onDrop:D,children:[(0,H.jsx)(`input`,{ref:o,className:`up-input`,type:`file`,multiple:!0,accept:`.stats,text/plain`,tabIndex:-1,"aria-hidden":`true`,onChange:e=>{T(Array.from(e.target.files??[])),e.target.value=``}}),(0,H.jsx)(`button`,{type:`button`,className:`linkbtn`,onClick:()=>o.current?.click(),...G(`brainage.explainer.up.drop`),children:i(`brainage.explainer.up.drop`)}),(0,H.jsx)(`small`,{...G(`brainage.explainer.up.private`),children:i(`brainage.explainer.up.private`)})]}),p.length>0&&(0,H.jsx)(`p`,{className:`up-note`,...G(`brainage.explainer.up.ignored`),children:i(`brainage.explainer.up.ignored`,{names:p.join(`, `)})}),m.length>0&&(0,H.jsx)(`p`,{className:`up-note up-dup`,...G(`brainage.explainer.up.dup`),children:i(`brainage.explainer.up.dup`,{slot:m.join(`, `)})}),(Object.keys(f).length>0||p.length>0)&&(0,H.jsx)(`button`,{type:`button`,className:`linkbtn up-reset`,onClick:E,...G(`brainage.explainer.up.reset`),children:i(`brainage.explainer.up.reset`)}),(0,H.jsxs)(`div`,{className:`up-row`,children:[(0,H.jsx)(`label`,{htmlFor:c,...G(`brainage.explainer.up.age`),children:i(`brainage.explainer.up.age`)}),(0,H.jsx)(`input`,{id:c,type:`number`,min:Ay.lo,max:Ay.hi,step:.1,required:!0,value:h,onChange:e=>g(e.target.value)})]}),(0,H.jsxs)(`fieldset`,{className:`up-row`,children:[(0,H.jsx)(`legend`,{...G(`brainage.explainer.up.sex`),children:i(`brainage.explainer.up.sex`)}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`input`,{type:`radio`,name:`bx-sex`,value:`male`,checked:v===`male`,onChange:()=>y(`male`),required:!0}),` `,i(`brainage.explainer.m.male`)]}),(0,H.jsxs)(`label`,{children:[(0,H.jsx)(`input`,{type:`radio`,name:`bx-sex`,value:`female`,checked:v===`female`,onChange:()=>y(`female`)}),` `,i(`brainage.explainer.m.female`)]})]}),(0,H.jsx)(`p`,{className:`quiet small`,...G(`brainage.explainer.up.sex.note`),children:i(`brainage.explainer.up.sex.note`)}),b===`files`&&(0,H.jsx)(`p`,{className:`up-err`,role:`alert`,...G(`brainage.explainer.up.need.files`),children:i(`brainage.explainer.up.need.files`)}),b===`age`&&(0,H.jsx)(`p`,{className:`up-err`,role:`alert`,...G(`brainage.explainer.up.need.age`),children:i(`brainage.explainer.up.need.age`,{lo:Ay.lo,hi:Ay.hi})}),b===`sex`&&(0,H.jsx)(`p`,{className:`up-err`,role:`alert`,...G(`brainage.explainer.up.need.sex`),children:i(`brainage.explainer.up.need.sex`)}),(0,H.jsx)(`button`,{type:`submit`,className:`up-go`,children:i(`brainage.explainer.up.go`)})]})})}function Ny({spec:e,person:t,answer:n,onClear:r}){let i=U(),a=e=>i(`brainage.paper.l.region.${Mv.find(t=>Pv(t)===e)??`whole`}`),o=t=>t.map(t=>ly(e,t,i)).join(`, `),s=e=>(0,H.jsxs)(`details`,{children:[(0,H.jsx)(`summary`,{...G(`brainage.explainer.you.names`),children:i(`brainage.explainer.you.names`)}),(0,H.jsx)(`p`,{children:o(e)})]}),c=n.answers.flatMap(e=>e.status===`ok`&&e.outOfRange.length>0?[e]:[]),l=n.answers.flatMap(e=>e.status===`missing`?[e]:[]),u=t=>[...new Set(t.map(t=>e.features[t]?.file??t))].join(`, `);return(0,H.jsxs)(`div`,{className:`you-notes`,children:[(0,H.jsx)(`h3`,{...G(`brainage.explainer.you.title`),children:i(`brainage.explainer.you.title`)}),(0,H.jsx)(`p`,{...G(`brainage.explainer.you.harmonised`),children:i(`brainage.explainer.you.harmonised`)}),n.ageOutOfRange&&(0,H.jsx)(`p`,{className:`you-age`,...G(`brainage.explainer.you.age`),children:i(`brainage.explainer.you.age`,{age:t.age,lo:e.age.p1,hi:e.age.p99})}),l.length>0&&(0,H.jsx)(`ul`,{className:`you-missing`,children:l.map(e=>(0,H.jsxs)(`li`,{"data-model":e.model,children:[(0,H.jsx)(`span`,{...G(`brainage.explainer.you.missing`),children:i(`brainage.explainer.you.missing`,{model:a(e.model),n:e.missing.length,files:u(e.missing)})}),s(e.missing)]},e.model))}),c.length>0&&(0,H.jsx)(`ul`,{className:`you-range`,children:c.map(e=>(0,H.jsxs)(`li`,{"data-model":e.model,children:[(0,H.jsx)(`span`,{...G(`brainage.explainer.you.range`),children:i(`brainage.explainer.you.range`,{model:a(e.model),n:e.outOfRange.length})}),s(e.outOfRange)]},e.model))}),(0,H.jsx)(`button`,{type:`button`,className:`linkbtn`,onClick:r,children:i(`brainage.explainer.up.clear`)})]})}var Py={personId:null,comparedAge:null,trees:100,focus:`subcortical`,hover:null,zoom:null,touring:!0,tourStep:0},Fy=Gv.filter(e=>e<100),Iy=(e,t)=>{let n=Object.keys(e.models).map(n=>Qv(e,n,t));return{mean:e.training_mean_age.toFixed(1),lo:Math.min(...n).toFixed(1),hi:Math.max(...n).toFixed(1)}},Ly=()=>mi(()=>import(`./art-B5xoLx12.js`).then(e=>e.ART),[]),Ry=e=>e instanceof Error?e.message:String(e);function zy({loadArt:e}){let t=P_(),{setMarked:n}=F_();return(0,H.jsx)(By,{handle:t,onMarked:n,loadArt:e})}function By({handle:e,onMarked:t,loadArt:n=Ly}){let r=U(),{status:i,spec:a,examples:o,start:s,answer:c}=e,[l,u]=(0,_.useState)(Py),d=(0,_.useCallback)(e=>u(t=>({...t,...e})),[]),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(null),T=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=T.current;if(!e)return;if(typeof IntersectionObserver>`u`){s();return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(s(),t.disconnect())});return t.observe(e),()=>t.disconnect()},[s]),(0,_.useEffect)(()=>{let e=!0;return n().then(t=>{e&&t.regions&&w(t.regions)},()=>{}),()=>{e=!1}},[n]);let E=(0,_.useMemo)(()=>{let e=o.map(e=>({id:e.id,stage:e.stage,age:e.age,sex:e.sex,x:Float32Array.from(e.x),label:e.stage===null?r(`brainage.explainer.person.nohd`,{id:e.id}):r(`brainage.explainer.person.stage`,{id:e.id,stage:e.stage})}));return m?[...e,m]:e},[o,m,r]),D=E.find(e=>e.id===l.personId)??E.find(e=>e.stage===`2`)??E[0]??null,O=l.comparedAge??D?.age??0,[k,A]=(0,_.useState)(null);(0,_.useEffect)(()=>{if(i!==`ready`||!D)return;let e=!0;return c(D).then(t=>{e&&t&&A({person:D,pa:t})},t=>{e&&v({person:D,error:Ry(t)})}),()=>{e=!1}},[i,D,c]);let j=k&&k.person===D?k.pa:null,M=!!g&&g.person===D&&!j;(0,_.useEffect)(()=>{t&&t(D&&{id:D.id,who:D.uploaded?r(`brainage.explainer.you.label`):r(`brainage.story.who.name`,{id:D.id}),stage:D.stage,known:!D.uploaded,age:D.age,sex:D.sex,gaps:j?O_(j):null,failed:M})},[D,j,M,t,r]);let[N,P]=(0,_.useState)(null);(0,_.useEffect)(()=>{if(!j)return;let e=!0;return Promise.all(Fy.map(e=>j.at(e))).then(t=>{e&&!t.some(e=>e===null)&&P({pa:j,at:new Map(t.map((e,t)=>[Fy[t],e]))})},()=>{e&&b(j)}),()=>{e=!1}},[j]);let F=N&&N.pa===j?N.at:null,[I,L]=(0,_.useState)(null),R=l.trees;(0,_.useEffect)(()=>{if(!j||R===100||Fy.includes(R))return;let e=!0;return j.at(R).then(t=>{e&&t&&(L({pa:j,k:R,ages:t}),S(null))},()=>{e&&S(j)}),()=>{e=!1}},[j,R]);let[ee,te]=(0,_.useState)(null),ne=l.zoom?.kind===`model`,re=ee!==null&&ee.pa===j;(0,_.useEffect)(()=>{if(!j||!ne||re)return;let e=!0;return Promise.all(Array.from({length:99},(e,t)=>j.at(t+1))).then(t=>{e&&t.every(e=>e!==null)&&te({pa:j,at:t})},()=>{e&&te({pa:j,at:`failed`})}),()=>{e=!1}},[j,ne,re]);let ie=(0,_.useMemo)(()=>j?Object.fromEntries(j.answer.answers.map(e=>[e.model,e.status===`ok`?e.brainAge:null])):null,[j]),z=(0,_.useMemo)(()=>j?Object.fromEntries(j.answer.answers.flatMap(e=>e.status===`missing`?[[e.model,e.missing]]:[])):{},[j]),ae=I&&I.pa===j?I:null,oe=R===100?ie:Fy.includes(R)?F?.get(R)??null:ae&&ae.k===R?ae.ages:null,se=oe??ae?.ages??ie,ce=j!==null&&oe===null,le=ce&&j!==null&&(x===j||y===j),ue=g&&g.person===D&&!j?g.error:null,B=(0,_.useMemo)(()=>{let e={};if(!ie||!F)return e;for(let[t,n]of Object.entries(ie)){if(n===null)continue;let r=new Map;for(let[e,n]of F){let i=n[t];i!=null&&r.set(e,i)}let i=oe?.[t];R<100&&i!=null&&r.set(R,i),r.set(100,n),e[t]=r}return e},[ie,F,oe,R]),V=e=>{e!==D?.id&&v(null),d({personId:e,comparedAge:null})},de=()=>T.current?.querySelector(`.upbtn`)??null,fe=()=>{if(f){p(null);return}let e=de(),t=e?.closest(`.ctl-wrap`);p({left:e&&t?Math.max(0,Math.min(e.offsetLeft,t.clientWidth-360)):0})},pe=()=>{p(null),de()?.focus()},me=e=>{v(null),h(e),d({personId:e.id,comparedAge:null}),pe()},he=()=>{v(null),h(null),l.personId===`you`&&d({personId:null,comparedAge:null})},ge=e=>{let t=wy[e].open;d(t?{touring:!0,tourStep:e,zoom:{kind:`model`,model:Pv(t),k:1},focus:t}:{touring:!0,tourStep:e,zoom:null})},_e=wy[l.tourStep],ve=(0,_.useRef)(null),ye=()=>{ve.current=`button`,d({touring:!1})},be=()=>{ve.current=`card`,ge(l.tourStep)};(0,_.useEffect)(()=>{let e=ve.current;ve.current=null,e&&T.current?.querySelector(e===`card`?`.tour`:`.tour-reopen`)?.focus()},[l.touring]);let xe=(0,_.useRef)(null),[Se,Ce]=(0,_.useState)(0),we=l.zoom?l.zoom.kind===`model`?l.zoom.model:l.zoom.column:null;(0,_.useEffect)(()=>{let e=xe.current,t=e?.querySelector(`.zoom`),n=e?.querySelector(`.canvas-scroll`);if(!t||!n||typeof ResizeObserver>`u`)return;let r=new ResizeObserver(()=>Ce(Math.max(0,Math.ceil(t.offsetTop+t.offsetHeight+16-(n.offsetTop+n.offsetHeight)))));return r.observe(t),r.observe(n),()=>r.disconnect()},[we]);let Te=e=>d({zoom:{kind:`model`,model:Pv(e),k:1},focus:e}),Ee=e=>e===`C`?Te(l.focus??`whole`):d({zoom:{kind:`column`,column:e}}),De=l.hover??l.focus??`whole`,Oe=e.error,ke=e.metadata?.training_rows??null,Ae=l.zoom,je=()=>d({zoom:null}),Me=e=>{if(!re)return`pending`;if(ee.at===`failed`)return`failed`;let t=ee.at.map(t=>t[e]),n=ie?.[e];return n==null||t.some(e=>e==null)?`failed`:[...t,n]},Ne=e=>Mv.find(t=>Pv(t)===e)??`whole`;return(0,H.jsxs)(`div`,{className:`ex`,ref:T,"data-zoom":l.zoom?l.zoom.kind===`model`?l.zoom.model:l.zoom.column:void 0,children:[(0,H.jsx)(W,{k:`brainage.explainer.sub`,as:`p`,className:`sub`}),i===`error`||Oe?(0,H.jsx)(`p`,{className:`ex-status`,role:`alert`,...G(`brainage.explainer.error`),children:r(`brainage.explainer.error`,{error:Oe??``})}):i!==`ready`||!a||!D?(0,H.jsx)(`p`,{className:`ex-status`,...G(`brainage.explainer.loading`),children:r(`brainage.explainer.loading`)}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`div`,{className:`ctl-wrap`,children:[(0,H.jsx)(B_,{people:E,person:D,onPick:V,comparedAge:O,onAge:e=>d({comparedAge:e===D.age?null:e}),trees:R,onTrees:e=>d({trees:e}),start:Iy(a,D.age),popoverOpen:f!==null,onUpload:fe}),f&&(0,H.jsx)(My,{spec:a,left:f.left,onUse:me,onClose:pe})]}),ue!==null&&(0,H.jsxs)(`div`,{className:`ex-failed`,role:`alert`,children:[(0,H.jsx)(`p`,{...G(`brainage.explainer.person.failed`),children:r(`brainage.explainer.person.failed`,{label:D.uploaded?r(`brainage.explainer.you.label`):D.label,error:ue})}),D.uploaded&&(0,H.jsx)(`button`,{type:`button`,className:`linkbtn`,onClick:he,children:r(`brainage.explainer.up.clear`)})]}),(0,H.jsxs)(`div`,{className:`stage`,ref:xe,children:[(0,H.jsx)(`div`,{className:`canvas-scroll`,children:(0,H.jsx)(my,{spec:a,person:D,comparedAge:O,trees:R,ages:se,missing:z,spark:B,art:C,active:De,stale:ce,trainingRows:ke,opened:Ae?.kind===`column`?Ae.column:null,lit:l.touring?_e.cols:null,onFocus:e=>d({focus:e}),onHover:e=>{e!==l.hover&&d({hover:e})},onOpenModel:Te,onOpenColumn:Ee})}),Ae?.kind===`model`&&(0,H.jsx)(yy,{model:Ae.model,k:Ae.k,name:r(`brainage.paper.l.region.${Ne(Ae.model)}`),spec:a,person:D,comparedAge:O,trees:R,shown:se?.[Ae.model]??null,course:Me(Ae.model),missing:z[Ae.model]??null,pa:j,onTree:e=>d({zoom:{...Ae,k:e}}),onClose:je,takeFocus:!(l.touring&&_e.open)}),Ae?.kind===`column`&&(0,H.jsx)(Cy,{column:Ae.column,spec:a,metadata:e.metadata,engine:j?.answer.engine??e.engine,person:D,comparedAge:O,trees:R,ages:se,onFocus:e=>d({focus:e}),onClose:je}),we&&Se>0&&(0,H.jsx)(`div`,{className:`zoom-room`,style:{height:Se},"aria-hidden":`true`}),le&&(0,H.jsx)(`p`,{className:`ex-note`,role:`status`,...G(`brainage.explainer.trees.failed`),children:r(`brainage.explainer.trees.failed`)}),l.touring?(0,H.jsx)(Ty,{step:l.tourStep,onStep:ge,onClose:ye}):(0,H.jsx)(`button`,{type:`button`,className:`tour-reopen`,onClick:be,...G(`brainage.tour.open`),children:r(`brainage.tour.open`)})]}),D.uploaded&&j&&(0,H.jsx)(Ny,{spec:a,person:D,answer:j.answer,onClear:he})]})]})}var Vy=()=>mi(()=>import(`./art-B5xoLx12.js`).then(e=>e.ART),[]);function Hy({loadArt:e=Vy}){let t=U(),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(null);(0,_.useEffect)(()=>{let t=!0;return e().then(e=>{t&&r(e)},e=>{t&&a(e instanceof Error?e.message:String(e))}),()=>{t=!1}},[e]);let c=(0,_.useMemo)(()=>jv({t,art:n}),[t,n]),l=(0,_.useMemo)(()=>({title:t(`brainage.paper.poster`),sub:t(`brainage.paper.poster.sub`),corner:`top-right`}),[t]),u=i??o,d=u===null?null:t(`brainage.paper.broken`,{detail:u});return(0,H.jsx)(`section`,{className:`wrap paper`,id:`watch`,"aria-label":t(`brainage.paper.title`),tabIndex:-1,children:(0,H.jsx)(ju,{messageKey:`brainage.paper.broken`,text:(0,H.jsx)(Mu,{script:c}),children:(0,H.jsx)(Au,{script:c,failed:d,start:`view`,startLine:.3,captions:`above`,captionLevel:2,poster:l,onError:s})})})}var Uy=[`subcortical`,`whole`,`temporal`,`parietal`,`frontal`,`insula`,`occipital`],Wy=0,Gy=15,Ky=5,qy=22,Jy=9;function Yy(e,t){let n={dots:[],lines:[],texts:[],rects:[],paths:[]},r=Uy.map(e=>t(`region`,{id:e})),i=27+Math.max(...r.map(e=>e.length))*Sd(`lbl`,e.mobile),a=e.L,o=e.W-Math.max(e.R,Math.ceil(i)+6),s=e.T,c=e.H-e.B,l=(o-a)*.07,u=e=>a+l+e*(o-a-2*l)/3,d=e=>c-(e-Wy)/15*(c-s);for(let e=Wy;e<=Gy;e+=Ky)n.lines.push({x1:a,x2:o,y1:d(e),y2:d(e),tone:`--line`,alpha:e===Wy?1:.5,cls:e===Wy?`axis`:`grid`}),n.texts.push({x:a-10,y:d(e)+4,text:String(e),cls:`small`,anchor:`end`});for(let e=0;e<4;e++)n.texts.push({x:u(e),y:c+26,text:t(`stage`,{n:e}),cls:`lbl`,anchor:`middle`});n.texts.push({x:22,y:(s+c)/2,text:t(`ygap`),cls:`quiet`,anchor:`middle`,rotate:!0});let f=e.narrow?8:a;n.texts.push({x:f,y:s-16,text:t(`check`,{ok:hv.fig3[0],close:hv.fig3[1]}),cls:`small`,maxW:e.W-f-4}),Uy.forEach((e,t)=>{let r=mv[e].era;n.paths.push({d:r.map((e,t)=>`${t?`L`:`M`} ${u(t).toFixed(1)} ${d(e).toFixed(1)}`).join(` `),tone:`--r-${e}`,width:3,cls:`line`}),r.forEach((r,i)=>n.dots.push({id:t*4+i,x:u(i),y:d(r),r:4.5,tone:`--r-${e}`}))});let p=Uy.map((e,t)=>({r:e,name:r[t]})).sort((e,t)=>mv[t.r].era[3]-mv[e.r].era[3]),m=p.map(({r:e})=>d(mv[e].era[3]));for(let e=1;e<m.length;e++)m[e]=Math.max(m[e],m[e-1]+qy);m[m.length-1]=Math.min(m[m.length-1],c);for(let e=m.length-2;e>=0;e--)m[e]=Math.min(m[e],m[e+1]-qy);return p.forEach(({r:e,name:t},r)=>{n.rects.push({x:u(3)+12,y:m[r]-Jy/2,w:Jy,h:Jy,tone:`--r-${e}`,cls:`swatch`}),n.texts.push({x:u(3)+12+Jy+6,y:m[r]+5,text:t,cls:`lbl`})}),n}var Xy=[`whole`,`subcortical`,`frontal`,`parietal`,`temporal`,`occipital`,`insula`],Zy=e=>(e<0?`−`:``)+Math.abs(e).toFixed(2);function Qy(){let e=U(),t=(0,_.useRef)(null),[n,r]=(0,_.useState)({w:900,mobile:!1});(0,_.useLayoutEffect)(()=>{let e=t.current;if(!e||typeof ResizeObserver>`u`)return;let n=new ResizeObserver(()=>{let t=e.getBoundingClientRect();r({w:t.width,mobile:typeof window.matchMedia==`function`&&window.matchMedia(`(max-width: 880px)`).matches})});return n.observe(e),()=>n.disconnect()},[]);let i=(0,_.useMemo)(()=>Cd(n.w,n.w*9/16,n.mobile),[n]),a=(0,_.useCallback)((t,n)=>t===`region`?e(`brainage.paper.l.region.${n?.id}`):e(t===`stage`?`brainage.story.label.stage`:`brainage.result.label.${t}`,n),[e]),o=(0,_.useMemo)(()=>Yy(i,a),[i,a]);return(0,H.jsx)(`section`,{id:`result`,className:`result`,tabIndex:-1,"aria-labelledby":`h-result`,children:(0,H.jsxs)(`div`,{className:`wrap`,children:[(0,H.jsx)(W,{k:`brainage.result.title`,as:`h3`,id:`h-result`}),(0,H.jsx)(W,{k:`brainage.result.intro`,as:`p`}),(0,H.jsxs)(`div`,{className:`row`,children:[(0,H.jsxs)(`div`,{className:`fig3-col`,children:[(0,H.jsx)(`div`,{ref:t,className:`fig3-box`,style:{height:`${i.H}px`},children:(0,H.jsx)(Pd,{layout:o,width:i.W,height:i.H,transitionKey:0,phone:n.mobile,title:e(`brainage.result.title`),className:`fig3`})}),(0,H.jsx)(W,{k:`brainage.result.cap`,as:`p`,className:`small`})]}),(0,H.jsxs)(`div`,{className:`table-col`,children:[(0,H.jsx)(`div`,{className:`tscroll`,children:(0,H.jsxs)(`table`,{id:`modelTable`,children:[(0,H.jsx)(`caption`,{...G(`brainage.result.table.caption`),children:e(`brainage.result.table.caption`)}),(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{scope:`col`,...G(`brainage.how.table.region`),children:e(`brainage.how.table.region`)}),(0,H.jsx)(`th`,{scope:`col`,className:`num`,...G(`brainage.how.table.features`),children:e(`brainage.how.table.features`)}),(0,H.jsx)(`th`,{scope:`col`,className:`num`,...G(`brainage.how.table.r`),children:e(`brainage.how.table.r`)}),(0,H.jsx)(`th`,{scope:`col`,className:`num`,...G(`brainage.how.table.mae`),children:e(`brainage.how.table.mae`)}),(0,H.jsx)(`th`,{scope:`col`,className:`num`,...G(`brainage.how.table.rho`),children:e(`brainage.how.table.rho`)})]})}),(0,H.jsx)(`tbody`,{children:Xy.map(t=>(0,H.jsxs)(`tr`,{"data-region":t,children:[(0,H.jsxs)(`th`,{scope:`row`,...G(`brainage.paper.l.region.${t}`),children:[(0,H.jsx)(`span`,{className:`swatch`,style:{background:`var(--r-${t})`},"aria-hidden":`true`}),e(`brainage.paper.l.region.${t}`)]}),(0,H.jsx)(`td`,{className:`num`,children:Cv[t][0]}),(0,H.jsx)(`td`,{className:`num`,children:Cv[t][1].toFixed(2)}),(0,H.jsx)(`td`,{className:`num`,children:Cv[t][2]}),(0,H.jsxs)(`td`,{className:`num`,children:[Zy(wv[t][0]),wv[t][1]===`ns`?` (${e(`brainage.how.table.ns`)})`:``]})]},t))})]})}),(0,H.jsx)(W,{k:`brainage.how.table.note`,as:`p`,className:`small`})]})]}),(0,H.jsxs)(`div`,{className:`notes`,children:[(0,H.jsx)(`h3`,{id:`repro`,tabIndex:-1,...G(`brainage.how.h.repro`),children:e(`brainage.how.h.repro`)}),(0,H.jsx)(W,{k:`brainage.how.repro.1`,as:`p`}),(0,H.jsx)(W,{k:`brainage.how.h.not`,as:`h3`}),(0,H.jsxs)(`ul`,{children:[(0,H.jsx)(W,{k:`brainage.how.not.1`,as:`li`}),(0,H.jsx)(W,{k:`brainage.how.not.2`,as:`li`}),(0,H.jsx)(W,{k:`brainage.how.not.3`,as:`li`})]})]})]})})}var $y=2e4,eb=1e4,tb=18,nb=85,rb=Cv.whole[2],ib=()=>({dots:[],lines:[],texts:[],rects:[],paths:[]}),ab=e=>(e<0?`−`:`+`)+String(Math.round(Math.abs(e)*10)/10),ob=e=>e===0?`0`:ab(e),sb=(e,t,n)=>Math.min(n,Math.max(t,e));function cb(e,t,n,r){let i=ib(),a=n.L,o=n.W-n.R,s=n.T,c=n.H-n.B-s,l=s+.55*c,u=(o-a)/67,d=e=>a+(sb(e,tb,nb)-tb)*u;i.texts.push({x:a,y:s,text:r(`age`),cls:`lbl`}),i.lines.push({x1:a,x2:o,y1:l,y2:l,tone:`--line`,cls:`axis`});for(let e=20;e<=80;e+=10)i.lines.push({x1:d(e),x2:d(e),y1:l,y2:l+6,tone:`--line`}),i.texts.push({x:d(e),y:l+22,text:String(e),cls:`small`,anchor:`middle`});let f=e.marked;if(!f)return i;i.lines.push({x1:d(f.age),x2:d(f.age),y1:l-10,y2:l+2,tone:`--ink`,width:2}),i.texts.push({x:d(f.age),y:l+48,text:r(`realage`,{age:f.age}),cls:`lbl`,anchor:`middle`});let p=f.gaps?.whole??null;if(p===null)return i;let m=f.age+p,h=l-.11*c,g=Ed(Td(t,0,.5)),_=d(f.age+p*g),v=Ed(Td(t,.55,.35)),y=rb*u*v,b=Math.max(a,d(m)-y),x=Math.min(o,d(m)+y);return i.rects.push({x:b,y:l-.22*c,w:Math.max(0,x-b),h:.2*c,tone:`--accent-soft`,alpha:.9,cls:`band`}),v>.5&&i.texts.push({x:d(m),y:l-.235*c,text:r(`error`,{e:rb}),cls:`quiet`,anchor:`middle`}),i.lines.push({x1:d(f.age),x2:_,y1:h,y2:h,tone:`--ink`,dash:!0,width:2,cls:`link`}),i.you={x:_,y:h},i.texts.push({x:_,y:h-20,text:r(`brainage`,{brain:Math.round(f.age+p*g)}),cls:`lbl`,anchor:`middle`}),g>.98&&i.texts.push({x:(d(f.age)+_)/2,y:h+24,text:r(`gap`,{gap:ab(p)}),cls:`lbl`,anchor:`middle`}),i}function lb(e,t,n,r){let i=ib(),a=e.marked,o=n.L,s=n.W-n.R,c=n.T,l=n.H-n.B,u=(s-o)*.08,d=(s-o-u)/2,f=o,p=o+d+u,m=Math.min(70,d*.25),h=Ed(Td(t,0,.6)),g=Ed(Td(t,.35,.5)),_=c+.16*(l-c),v=.1*(l-c);i.texts.push({x:f,y:c,text:r(`trained`,{n:yv}),cls:`lbl`,maxW:d}),i.texts.push({x:f,y:c+22,text:r(`studies`),cls:`quiet`,maxW:d}),i.texts.push({x:p,y:c,text:r(`tested`,{n:531}),cls:`lbl`,maxW:d}),i.texts.push({x:p,y:c+22,text:r(`stages`),cls:`quiet`,maxW:d});let y=(l-_-v)/vv.length,b=Math.max(0,d-m-48),x=Math.max(...vv.map(([,e])=>e));vv.forEach(([e,t],n)=>{let a=_+n*y,o=t/x*b*h,s=y*.55;i.texts.push({x:f,y:a+y*.5,text:r(`study`,{id:e}),cls:`small`}),i.rects.push({x:f+m,y:a+y*.15,w:o,h:s,tone:`--ctrl`,alpha:.85,cls:`bar`}),i.texts.push({x:f+m+o+8,y:a+y*.5,text:t.toLocaleString(`en-US`),cls:`count`})});let S=(l-_-v)/bv.length,C=Math.max(0,d-m-48),w=Math.max(...bv);if(bv.forEach((e,t)=>{let n=_+t*S,a=e/w*C*g;i.texts.push({x:p,y:n+S*.5,text:r(`stage`,{n:t}),cls:`small`}),i.rects.push({x:p+m,y:n+S*.15,w:a,h:S*.55,tone:`stage-${t}`,cls:`bar`}),i.texts.push({x:p+m+a+8,y:n+S*.5,text:String(e),cls:`count`})}),a&&a.known){let e=(e,t)=>({x:e,y:l-v*.3,text:t,cls:`lbl`,maxW:d});if(a.stage===null)i.rects.push({x:f-8,y:_-4,w:d+8,h:y*vv.length+4,tone:`--ink`,stroke:`--ink`,alpha:0,cls:`ring`}),i.texts.push(e(f,r(`belongs`,{who:a.who})));else{let t=Number(a.stage),n=bv[t];i.rects.push({x:p-8,y:_+t*S-2,w:d+8,h:S,tone:`--ink`,stroke:`--ink`,alpha:0,cls:`ring`}),i.texts.push(e(p,r(`oneof`,{who:a.who,n,stage:t})))}}return i}var ub=e=>e*2654435761%1e3/1e3-.5,db=(e,t,n)=>e+(t-e)*n;function fb(e,t,n,r){let i=ib(),a=n.L,o=n.W-n.R,s=n.T,c=n.H-n.B,l=e=>a+(e-15)/70*(o-a),u=e=>c-(sb(e,15,85)-15)/70*(c-s);i.rects.push({x:a,y:s,w:o-a,h:c-s,tone:`--bg-2`,alpha:1,cls:`plot`});for(let e=20;e<=80;e+=10)i.lines.push({x1:l(e),x2:l(e),y1:s,y2:c,tone:`--line`,alpha:.5,cls:`grid`}),i.lines.push({x1:a,x2:o,y1:u(e),y2:u(e),tone:`--line`,alpha:.5,cls:`grid`}),i.texts.push({x:l(e),y:c+22,text:String(e),cls:`small`,anchor:`middle`}),i.texts.push({x:a-10,y:u(e)+4,text:String(e),cls:`small`,anchor:`end`});i.texts.push({x:(a+o)/2,y:c+44,text:r(`xage`),cls:`quiet`,anchor:`middle`,maxW:o-a}),i.texts.push({x:22,y:(s+c)/2,text:r(`yage`),cls:`quiet`,anchor:`middle`,rotate:!0});let d=rb;i.paths.push({d:`M ${l(15)} ${u(15+d)} L ${l(85-d)} ${u(85)} L ${l(85)} ${u(85)} L ${l(85)} ${u(85-d)} L ${l(15+d)} ${u(15)} L ${l(15)} ${u(15)} Z`,tone:`--accent`,width:.5,fill:!0,cls:`band`}),i.lines.push({x1:l(15),y1:u(15),x2:l(85),y2:u(85),tone:`--ink-3`,dash:!0,cls:`identity`});let f=Math.round(pv.length*Ed(Td(t,0,.7)));for(let e=0;e<f;e++)i.dots.push({id:eb+e,x:l(pv[e][0]),y:u(pv[e][1]),r:3,tone:`--ctrl`});i.texts.push({x:o-14,y:s+26,text:r(`r`,{r:Cv.whole[1]}),cls:`lbl`,anchor:`end`,maxW:o-a}),i.texts.push({x:o-14,y:s+46,text:r(`cv`),cls:`quiet`,anchor:`end`,maxW:o-a});let p=e.marked,m=p?.gaps?.whole??null;if(!p||m===null)return i;let h=p.age+m,g=l(p.age),_=u(h);return i.dots.push({id:$y,x:g,y:_,r:10,tone:`--ink`,ring:!0,dim:!0}),t>.7&&i.lines.push({x1:g,y1:u(p.age),x2:g,y2:_,tone:`--hd`,width:2,cls:`pull`}),i.you={x:g,y:_},i.texts.push({x:g,y:_-18,text:r(`brainage`,{who:p.who,age:p.age,brain:Math.round(h)}),cls:`lbl`,anchor:`middle`}),i}var pb=-20,mb=35;function hb(e,t,n,r){let i=ib();i.overlay={rects:[],texts:[]};let a=n.T+20,o=n.H-n.B,s=n.L,c=n.W-n.R-(n.narrow?40:0),l=e=>o-(sb(e,pb,mb)-pb)/55*(o-a),u=(c-s)/4,d=Math.min(72,u*.38),f=c+24,p=Ed(Td(t,0,.45)),m=Ed(Td(t,.3,.45));for(let e=pb;e<=30;e+=10)i.lines.push({x1:s,x2:c,y1:l(e),y2:l(e),tone:`--line`,alpha:e===0?1:.5,cls:e===0?`axis`:`grid`}),i.texts.push({x:s-10,y:l(e)+4,text:ob(e),cls:`small`,anchor:`end`});i.texts.push({x:22,y:(a+o)/2,text:r(`ygap`),cls:`quiet`,anchor:`middle`,rotate:!0}),i.texts.push({x:c-120,y:n.T,text:r(`ctrl`),cls:`small`,anchor:`end`}),i.texts.push({x:c,y:n.T,text:r(`hd`),cls:`small`,anchor:`end`});let h=(e,t)=>t?s+u*e+u/2+4:s+u*e+u/2-4-d,g=(e,t)=>t+d/2+ub(e)*(d-12);for(let t of e.cast){let e=t.gaps.whole;if(e!==null){if(t.stage!==null&&t.stage!==void 0){let n=Number(t.stage);i.dots.push({id:t.id,x:g(t.id,h(n,!0)),y:l(e),r:3,tone:`stage-${n}`})}else t.matched!==void 0&&t.matched!==null&&i.dots.push({id:t.id,x:g(t.id,h(Number(t.matched),!1)),y:l(e),r:3,tone:`--ctrl`})}}let _=(e,t,n,r)=>{let a=db(e.med,e.q1,r),o=db(e.med,e.q3,r),s=db(e.med,e.wlo,r),c=db(e.med,e.whi,r),u=t+d/2;i.lines.push({x1:u,x2:u,y1:l(c),y2:l(o),tone:n,width:1.5,cls:`whisker`}),i.lines.push({x1:u,x2:u,y1:l(a),y2:l(s),tone:n,width:1.5,cls:`whisker`}),i.rects.push({x:t,y:l(o),w:d,h:l(a)-l(o),tone:n,alpha:.12,cls:`tint`}),i.overlay.rects.push({x:t,y:l(o),w:d,h:l(a)-l(o),tone:n,alpha:0,stroke:n,cls:`box`}),i.overlay.rects.push({x:t,y:l(e.med)-1.5,w:d,h:3,tone:n,cls:`median`})};for(let e=0;e<4;e++){i.texts.push({x:s+u*e+u/2,y:o+26,text:r(`stage`,{n:e}),cls:`lbl`,anchor:`middle`});let t=dv.find(t=>t.stage===e&&t.grp===`ctrl`),n=dv.find(t=>t.stage===e&&t.grp===`hd`);t&&_(t,h(e,!1),`--ctrl`,p),n&&_(n,h(e,!0),`--hd`,m)}let v=e.marked,y=v?.gaps?.whole??null,b=v?v.known:!1;if(!v)return i;let x=v.stage===null||!b;if(x&&(i.lines.push({x1:c+6,x2:c+6,y1:a,y2:o,tone:`--line`,dash:!0,cls:`lane`}),i.texts.push({x:f,y:o+26,text:r(b?`nostage`:`unknown`),cls:`quiet`,anchor:`middle`})),y===null)return i;let S=x?f:h(Number(v.stage),!0)+d/2,C=l(y);return i.dots.push({id:$y,x:S,y:C,r:10,tone:`--ink`,ring:!0,dim:!0}),i.you={x:S,y:C},i.texts.push({x:S,y:C-16,text:r(`gap`,{who:v.who,gap:ab(y)}),cls:`lbl`,anchor:`middle`}),i}var gb=[`subcortical`,`temporal`,`parietal`,`whole`,`frontal`,`insula`,`occipital`],_b=-30,vb=45;function yb(e,t,n,r){let i=ib(),a=n.W-n.R,o=n.T,s=n.H-n.B,c=(s-o)/gb.length,l=n.narrow?72:118,u=n.narrow?54:78,d=n.L+l,f=a-u,p=e=>d+(sb(e,_b,vb)-_b)/75*(f-d),m=Math.min(gb.length,Math.floor(Ed(Td(t,0,.8))*gb.length+.999)),h=e.marked;for(let e=-20;e<=40;e+=20)i.lines.push({x1:p(e),x2:p(e),y1:o,y2:s,tone:`--line`,alpha:e===0?1:.5,cls:e===0?`axis`:`grid`}),i.texts.push({x:p(e),y:s+22,text:ob(e),cls:`small`,anchor:`middle`});return i.texts.push({x:d,y:o-14,text:r(`ygap`),cls:`quiet`,maxW:f-d}),gb.forEach((e,t)=>{let s=o+t*c+c-6,g=c-14,_=t<m;i.lines.push({x1:d,x2:f,y1:s,y2:s,tone:`--line`,alpha:.5,cls:`grid`}),i.rects.push({x:n.L,y:s-11,w:9,h:9,tone:`--r-${e}`,cls:`swatch`}),i.texts.push({x:n.L+15,y:s-2,text:r(`region`,{id:e}),cls:`small`,maxW:l-18});let[v,y]=wv[e];if(i.texts.push({x:a,y:s-2,text:y===`ns`?r(`ns`):r(`rho`,{v,sig:y}),cls:`count`,anchor:`end`,maxW:u+n.R}),!_)return;fv.regions[e[0].toUpperCase()+e.slice(1)].forEach((e,t)=>{let n=[],r=0,a=0;fv.grid.forEach((t,i)=>{t<_b||t>vb||(n.length||(r=t),a=t,n.push(`${n.length?`L`:`M`} ${p(t).toFixed(1)} ${(s-e[i]*g).toFixed(1)}`))});let o=n.join(` `),c=`stage-${t}`;i.paths.push({d:`${o} L ${p(a).toFixed(1)} ${s} L ${p(r).toFixed(1)} ${s} Z`,tone:c,fill:!0,cls:`ridge`}),i.paths.push({d:o,tone:c,width:1.6,cls:`ridge-line`})});let b=h?.gaps?.[e]??null;if(!h||b===null)return;let x=p(b),S=h.known?h.stage===null?`--ctrl`:`stage-${h.stage}`:`--ink-2`;i.lines.push({x1:x,x2:x,y1:s-g,y2:s+4,tone:`--ink`,width:1.5,cls:`mark`}),i.dots.push({id:$y+t,x,y:s,r:6,tone:S,ring:!0}),t===0&&i.texts.push({x,y:s-g-6,text:r(`gap`,{who:h.who,gap:ab(b)}),cls:`lbl`,anchor:`middle`})}),i}var bb=[[`sdmt`,`lower`],[`swrt`,`lower`],[`tms`,`higher`],[`tfc`,`lower`]],xb=[`subcortical`,`temporal`,`parietal`],Sb=25,Cb=.3;function wb(e,t,n,r){let i=ib(),a=n.L,o=n.W-n.R,s=n.T,c=n.H-n.B,l=Math.min(200,(o-a)*(n.narrow?.34:.26)),u=n.narrow?70:150,d=a+u,f=(o-l-16-d)/xb.length,p=(c-s-30-24)/bb.length,m=s+30,h=Ed(Td(t,0,.5));xb.forEach((e,t)=>{let n=d+t*f;i.rects.push({x:n,y:s+4,w:8,h:8,tone:`--r-${e}`,cls:`swatch`}),i.texts.push({x:n+13,y:s+13,text:r(`region`,{id:e}),cls:`small`,maxW:f-20})}),bb.forEach(([e,t],n)=>{let o=m+n*p;i.texts.push({x:a,y:o+p*.34,text:r(`score`,{id:e}),cls:`lbl`,maxW:u-6}),i.texts.push({x:a,y:o+p*.34+18,text:r(`score.full`,{id:e}),cls:`small`,maxW:u-6}),i.texts.push({x:a,y:o+p*.34+34,text:r(t),cls:`quiet`,maxW:u-6}),xb.forEach((t,n)=>{let a=Tv[e][t],s=d+n*f,c=f-8,l=p-8,u={x:s+c/2,y:o+l/2+5};if(a===void 0){i.rects.push({x:s,y:o,w:c,h:l,tone:`--bg-2`,alpha:1,cls:`cell`}),i.texts.push({...u,text:r(`notsig`),cls:`quiet`,anchor:`middle`,maxW:c-8});return}i.rects.push({x:s,y:o,w:c,h:l,tone:`--hd`,alpha:.08+Math.abs(a)*.8*h,cls:`cell`}),i.texts.push({...u,text:r(`corr`,{r:a}),cls:`lbl`,anchor:`middle`,maxW:c-8})})});let g=o-l,_=l-56,v=e.marked;i.rects.push({x:g-12,y:s,w:l+12,h:c-s,tone:`--line`,alpha:0,stroke:`--line`,cls:`panel`}),i.texts.push({x:g,y:s+22,text:r(`forscale`),cls:`quiet`,maxW:l-8});let y=g+_*Cb,b=_*.7/Sb;return xb.forEach((e,t)=>{let n=s+56+t*64;i.texts.push({x:g,y:n,text:r(`region`,{id:e}),cls:`small`,maxW:l-8});let a=v?.gaps?.[e]??null;if(!v||a===null)return;i.lines.push({x1:y,x2:y,y1:n+4,y2:n+28,tone:`--ink-3`,cls:`zero`});let o=a>=0?Math.min(a*b,_-(y-g)):Math.min(-a*b,y-g);i.rects.push({x:a>=0?y:y-o,y:n+8,w:o,h:16,tone:`--r-${e}`,cls:`bar`}),i.texts.push({x:a>=0?y+o+8:y+8,y:n+21,text:ab(a),cls:`count`,maxW:48})}),i.texts.push({x:g,y:c-8,text:r(`noscore`),cls:`quiet`,maxW:l-8}),i}function Tb(e,t,n,r,i){return t===0?cb(e,n,r,i):t===1?lb(e,n,r,i):t===2?fb(e,n,r,i):t===3?hb(e,n,r,i):t===4?yb(e,n,r,i):wb(e,n,r,i)}var Eb=[1,2,3,4,5,6],Db={1:null,2:`table1`,3:`fig1a`,4:`fig1b`,5:`fig2`,6:`table2`},Ob={1:`brainage.story.note.1`,3:`brainage.story.note.3`,6:`brainage.story.note.6`},kb=[],Ab=e=>e&&Object.fromEntries(Object.entries(e).map(([e,t])=>[e,typeof t==`number`&&Number.isInteger(t)&&Math.abs(t)>=1e3?t.toLocaleString(`en-US`):t])),jb=(e,t)=>t===`error`||!!e?.failed||!!e?.gaps&&e.gaps.whole===null;function Mb(e,t,n){let r=t?.gaps?.whole??null,i=t?.gaps?.subcortical??null,a=e>=5?i:r;if(jb(t,n)||t?.gaps&&a===null)return{key:`brainage.story.who.unavailable`};if(!t||!t.gaps||a===null)return{key:`brainage.story.who.loading`};let o={who:t.who,age:t.age,stage:t.stage??``,n:t.stage===null?``:bv[Number(t.stage)],brain:r===null?``:Math.round(t.age+r),gap:r===null?``:ab(r),sub:i===null?``:ab(i)};return t.known?t.stage===null?{key:`brainage.story.who.${e}.none`,vars:o}:{key:`brainage.story.who.${e}`,vars:o}:{key:`brainage.story.who.${e}.unknown`,vars:o}}function Nb(e){let[t,n]=(0,_.useState)({cast:null,error:null});return(0,_.useEffect)(()=>{let t=!0;return e().then(e=>{t&&n({cast:e,error:null})},e=>{t&&n({cast:null,error:e instanceof Error?e.message:String(e)})}),()=>{t=!1}},[e]),t}function Pb({item:e}){let t=U(),[n,r,i]=hv[e];return(0,H.jsxs)(`span`,{className:`repro`,title:t(`brainage.story.pill.title`),children:[n>0&&(0,H.jsxs)(`span`,{className:`ok`,...G(`brainage.story.pill.reproduced`),children:[(0,H.jsx)(`i`,{"aria-hidden":`true`}),(0,H.jsx)(W,{k:`brainage.story.pill.reproduced`,vars:{n}})]}),r>0&&(0,H.jsxs)(`span`,{className:`close`,...G(`brainage.story.pill.close`),children:[(0,H.jsx)(`i`,{"aria-hidden":`true`}),(0,H.jsx)(W,{k:`brainage.story.pill.close`,vars:{n:r}})]}),i>0&&(0,H.jsxs)(`span`,{className:`no`,...G(`brainage.story.pill.differ`),children:[(0,H.jsx)(`i`,{"aria-hidden":`true`}),(0,H.jsx)(W,{k:`brainage.story.pill.differ`,vars:{n:i}})]}),gv.includes(e)&&(0,H.jsx)(Ra,{to:`repro`,className:`explained`,...G(`brainage.story.pill.explained`),children:(0,H.jsx)(W,{k:`brainage.story.pill.explained`})})]})}function Fb({n:e,className:t,live:n}){let r=Db[e];return(0,H.jsxs)(`p`,{className:t,"aria-live":n?`polite`:void 0,children:[(0,H.jsx)(W,{k:`brainage.story.cap.${e}`,as:`span`}),r&&(0,H.jsx)(Pb,{item:r})]})}function Ib({loadCast:e=Co}){let t=U(),{marked:n,status:r}=F_(),{start:i}=P_(),{cast:a,error:o}=Nb(e),s=(0,_.useRef)(null),c=(0,_.useRef)(!1);(0,_.useEffect)(()=>{let e=()=>{c.current||(c.current=!0,i())},t=s.current;if(!t||typeof IntersectionObserver>`u`){e();return}let n=new IntersectionObserver(t=>{t.some(e=>e.isIntersecting)&&(e(),n.disconnect())});return n.observe(t),()=>n.disconnect()},[i]);let l=(0,_.useRef)(null),[u,d]=(0,_.useState)({chapter:0,p:0});Pf(l,d);let f=Math.min(5,Math.max(0,u.chapter)),p=f+1,m=(0,_.useRef)(null),[h,g]=(0,_.useState)({w:900,h:563,mobile:!1});(0,_.useLayoutEffect)(()=>{let e=m.current;if(!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>{let t=e.getBoundingClientRect();g({w:t.width,h:t.height,mobile:typeof window.matchMedia==`function`&&window.matchMedia(`(max-width: 880px)`).matches})});return t.observe(e),()=>t.disconnect()},[]);let v=(0,_.useMemo)(()=>Cd(h.w,h.h,h.mobile),[h]),y=(0,_.useCallback)((e,n)=>e===`region`?t(`brainage.paper.l.region.${n?.id}`):e===`study`?t(`brainage.paper.l.study.${n?.id}`):e===`score`||e===`score.full`?t(`brainage.story.label.${e}.${n?.id}`):t(`brainage.story.label.${e}`,Ab(n)),[t]),b=a??kb,x=(0,_.useMemo)(()=>({marked:n,cast:b}),[n,b]),S=(0,_.useMemo)(()=>Tb(x,f,u.p,v,y),[x,f,u.p,v,y]),[C,w]=(0,_.useState)(-1),T=(0,_.useCallback)(e=>w(e),[]),E=C>0&&C<1e4?b.find(e=>e.id===C):void 0,D=E?S.dots.find(e=>e.id===C):void 0,O=E&&D?{left:D.x*(h.w/v.W),top:D.y*(h.h/v.H),text:t(`brainage.story.tip`,{id:E.id,stage:E.stage===null?y(`nostage`):y(`stage`,{n:E.stage}),sex:E.sex===`male`?t(`brainage.explainer.m.male`):t(`brainage.explainer.m.female`),age:E.age,gap:ab(E.gaps.whole)})}:null,k=n?n.known?n.stage===null?y(`nostage`):y(`stage`,{n:n.stage}):y(`unknown`):``,A=jb(n,r),j=!A&&(!n||!n.gaps),M=u.chapter===0&&u.p===0;return(0,H.jsxs)(`section`,{className:`story`,id:`how`,"aria-labelledby":`h-how`,tabIndex:-1,ref:s,children:[(0,H.jsxs)(`div`,{className:`story-head`,children:[(0,H.jsx)(W,{k:`brainage.story.eyebrow`,as:`p`,className:`eyebrow`,vars:{total:Eb.length}}),(0,H.jsx)(W,{k:`brainage.story.title`,as:`h2`,id:`h-how`}),(0,H.jsx)(W,{k:`brainage.story.lede`,as:`p`,className:`lede`})]}),(0,H.jsxs)(`div`,{className:`story-figure${M?` is-before`:``}`,children:[(0,H.jsxs)(`div`,{className:`story-marked`,children:[n&&(0,H.jsx)(W,{k:`brainage.story.marked`,as:`span`,vars:{who:n.who,stage:k,age:n.age}}),A?(0,H.jsx)(W,{k:`brainage.story.marked.unavailable`,as:`span`,className:`quiet`}):j?(0,H.jsx)(W,{k:`brainage.story.marked.loading`,as:`span`,className:`quiet`}):(0,H.jsx)(W,{k:`brainage.story.marked.from`,as:`span`,className:`quiet`}),(0,H.jsx)(Ra,{to:`explainer`,className:`change`,...G(`brainage.story.marked.change`),children:(0,H.jsx)(W,{k:`brainage.story.marked.change`})})]}),(0,H.jsxs)(`div`,{ref:m,className:`story-box${a||o!==null?``:` is-loading`}`,children:[(0,H.jsx)(Pd,{layout:S,width:v.W,height:v.H,transitionKey:f,phone:h.mobile,title:t(`brainage.story.title.${p}`),onHover:T}),O&&(0,H.jsx)(`div`,{className:`story-tip`,style:{left:`${O.left}px`,top:`${O.top}px`},"aria-hidden":`true`,children:O.text})]}),o!==null&&(0,H.jsx)(W,{k:`brainage.story.failed`,as:`p`,className:`quiet story-failed`,vars:{detail:o}}),(0,H.jsx)(`div`,{className:`story-progress`,"aria-hidden":`true`,children:(0,H.jsx)(`i`,{style:{width:`${(u.chapter+u.p)/Eb.length*100}%`}})}),(0,H.jsx)(W,{k:`brainage.story.progress`,as:`p`,className:`story-count`,vars:{n:p,total:Eb.length}}),(0,H.jsx)(Fb,{n:p,className:`story-cap`,live:!0})]}),(0,H.jsx)(`ol`,{className:`story-steps`,ref:l,children:Eb.map((e,t)=>{let i=Mb(e,n,r),a=Ob[e];return(0,H.jsxs)(`li`,{"data-step":t,className:`story-step${t===f?` active`:``}`,children:[(0,H.jsx)(`span`,{className:`n`,"aria-hidden":`true`,children:e}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(W,{k:`brainage.story.title.${e}`,as:`h2`,id:`story-title-${e}`}),(0,H.jsxs)(`p`,{children:[(0,H.jsx)(W,{k:`brainage.story.text.${e}`,as:`span`}),` `,(0,H.jsx)(W,{k:i.key,as:`b`,className:`who`,vars:i.vars})]}),a&&(0,H.jsx)(W,{k:a,as:`p`}),(0,H.jsx)(Fb,{n:e,className:`story-cap-fold`}),e===6&&(0,H.jsx)(Ra,{to:`explainer`,className:`cta`,...G(`brainage.story.cta`),children:(0,H.jsx)(W,{k:`brainage.story.cta`})})]})]},e)})})]})}function Lb({loadArt:e}={}){return(0,H.jsxs)(`div`,{className:`brainage`,children:[(0,H.jsx)(`div`,{className:`wrap`,children:(0,H.jsx)(Ua,{titleKey:`brainage.title`,ledeKey:`brainage.lede`,titleId:`h-brainage`})}),(0,H.jsx)(L_,{}),(0,H.jsx)(Hy,{loadArt:e}),(0,H.jsxs)(M_,{children:[(0,H.jsx)(`section`,{id:`explainer`,className:`explainer`,tabIndex:-1,"aria-labelledby":`h-explainer`,children:(0,H.jsxs)(`div`,{className:`wrap`,children:[(0,H.jsx)(W,{k:`brainage.explainer.title`,as:`h2`,id:`h-explainer`}),(0,H.jsx)(zy,{loadArt:e})]})}),(0,H.jsx)(_d,{brokenKey:`brainage.story.broken`,id:`how`,children:(0,H.jsx)(Ib,{})})]}),(0,H.jsx)(Qy,{})]})}function Rb({titleKey:e}){return(0,H.jsxs)(`div`,{className:`wrap page`,children:[(0,H.jsx)(W,{k:e,as:`h1`}),(0,H.jsx)(W,{k:`notyet.body`,as:`p`,className:`muted`})]})}var zb=[`Monash University, Australia`,`Australian Catholic University, Australia`,`University of Wisconsin-Madison, USA`,`University College London, UK`,`The University of Melbourne, Australia`],Bb=(e,...t)=>({name:e,affiliations:t}),Vb=[{title:`Prognostic enrichment for early-stage Huntington's disease: an explainable machine learning approach for clinical trial`,journal:`NeuroImage: Clinical`,year:2024,doi:`10.1016/j.nicl.2024.103650`,authors:[Bb(`Mohsen Ghofrani-Jahromi`,1),Bb(`Govinda R. Poudel`,2),Bb(`Adeel Razi`,1),Bb(`Pubu M. Abeyasinghe`,1),Bb(`Jane S. Paulsen`,3),Bb(`Sarah J. Tabrizi`,4),Bb(`Susmita Saha`,1),Bb(`Nellie Georgiou-Karistianis`,1)],links:[{label:`Paper`,href:`https://doi.org/10.1016/j.nicl.2024.103650`}]},{title:`Shape matters: predicting Huntington's disease using progression modelling`,journal:`Computer Methods and Programs in Biomedicine`,year:2026,doi:`10.1016/j.cmpb.2026.109250`,authors:[Bb(`Mohsen Ghofrani-Jahromi`,1),Bb(`Susmita Saha`,1),Bb(`Adeel Razi`,1),Bb(`Pubu M. Abeyasinghe`,1),Bb(`Govinda R. Poudel`,2),Bb(`Jane S. Paulsen`,3),Bb(`Sarah J. Tabrizi`,4),Bb(`Nellie Georgiou-Karistianis`,1)],links:[{label:`Paper`,href:`https://doi.org/10.1016/j.cmpb.2026.109250`}]},{title:`Mapping regional brain aging in Huntington's disease using structural MRI and machine learning`,journal:`Movement Disorders`,year:2026,doi:`10.1002/mds.70160`,authors:[Bb(`Mohsen Ghofrani-Jahromi`,1),Bb(`Yalda Amirmoezzi`,5),Bb(`Pubu M. Abeyasinghe`,1),Bb(`Govinda R. Poudel`,2),Bb(`Adeel Razi`,1),Bb(`Jane S. Paulsen`,3),Bb(`Nicola Z. Hobbs`,4),Bb(`Rachael I. Scahill`,4),Bb(`Sarah J. Tabrizi`,4),Bb(`Nellie Georgiou-Karistianis`,1),Bb(`Susmita Saha`,1)],links:[{label:`Paper`,href:`https://doi.org/10.1002/mds.70160`}]}],Hb=[{key:`track`,name:`TRACK-HD`,logo:ld.track},{key:`trackon`,name:`TrackOn-HD`,logo:ld.trackon},{key:`predict`,name:`PREDICT-HD`,logo:ld.predict},{key:`image`,name:`IMAGE-HD`,logo:!1}];function Ub(){let[e,t]=(0,_.useState)({});return(0,_.useEffect)(()=>{let e=!0;return mi(()=>import(`./art-CsW8iL7N.js`).then(n=>{e&&t(n.ART.logos)},()=>{}),[]),()=>{e=!1}},[]),e}function Wb(){let e=Ub();return(0,H.jsx)(`ul`,{className:`studies`,role:`list`,"aria-label":`Studies`,children:Hb.map(t=>{let n=t.logo?e[t.key]:void 0;return(0,H.jsx)(`li`,{className:`plate`,children:n?(0,H.jsx)(`img`,{src:n.uri,alt:t.name,width:n.w,height:n.h}):(0,H.jsx)(`span`,{className:`name`,children:t.name})},t.key)})})}function Gb(){return(0,H.jsxs)(`div`,{className:`wrap page people`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(W,{k:`about.title`,as:`h1`}),(0,H.jsx)(W,{k:`about.purpose`,as:`p`,className:`lede`})]}),(0,H.jsx)(W,{k:`about.papers.title`,as:`h2`}),(0,H.jsx)(`div`,{className:`papers`,children:Vb.map(e=>(0,H.jsxs)(`div`,{className:`paper`,children:[(0,H.jsx)(`span`,{className:`j`,children:[e.journal,String(e.year)].filter(Boolean).join(`, `)}),(0,H.jsx)(`b`,{children:e.title}),(0,H.jsx)(`span`,{className:`a`,children:e.authors.map((t,n)=>(0,H.jsxs)(`span`,{children:[t.name,(0,H.jsx)(`sup`,{children:t.affiliations.join(`,`)}),n<e.authors.length-1?`, `:``]},t.name))}),e.links.map(t=>(0,H.jsx)(`a`,{href:t.href,"aria-label":`${t.label}: ${e.title}`,children:t.label},t.href))]},e.title))}),(0,H.jsx)(W,{k:`about.affiliations.title`,as:`h2`}),(0,H.jsx)(`p`,{className:`affil`,children:zb.map((e,t)=>(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`sup`,{children:t+1}),` `,e,`. `]},e))}),(0,H.jsx)(W,{k:`about.cohorts.title`,as:`h2`}),(0,H.jsx)(W,{k:`about.cohorts.lede`,as:`p`,className:`cohorts-lede`}),(0,H.jsx)(Wb,{}),(0,H.jsxs)(`dl`,{className:`datasets`,children:[(0,H.jsx)(W,{k:`about.cohorts.prognostic.label`,as:`dt`}),(0,H.jsx)(W,{k:`about.cohorts.prognostic.text`,as:`dd`}),(0,H.jsx)(W,{k:`about.cohorts.shape.label`,as:`dt`}),(0,H.jsx)(W,{k:`about.cohorts.shape.text`,as:`dd`}),(0,H.jsx)(W,{k:`about.cohorts.brainage.label`,as:`dt`}),(0,H.jsx)(W,{k:`about.cohorts.brainage.text`,as:`dd`})]}),(0,H.jsx)(W,{k:`about.cohorts.access`,as:`p`,className:`access`}),(0,H.jsx)(W,{k:`about.cohorts.none`,as:`p`,className:`cohorts`})]})}function Kb(){return(0,H.jsxs)(`div`,{className:`wrap page`,children:[(0,H.jsx)(W,{k:`notfound.title`,as:`h1`}),(0,H.jsx)(W,{k:`notfound.body`,as:`p`,className:`muted`})]})}function qb(){let e=Pr();return(0,_.useEffect)(()=>{},[e]),(0,H.jsxs)(ma,{page:null,children:[(0,H.jsx)(Da,{handle:{page:null,titleKey:`error.title`}}),(0,H.jsx)(Ra,{className:`skip`,to:`content`,...G(`skip.link`),children:(0,H.jsx)(W,{k:`skip.link`})}),(0,H.jsx)(La,{}),(0,H.jsx)(`main`,{id:`content`,tabIndex:-1,children:(0,H.jsxs)(`div`,{className:`wrap page`,children:[(0,H.jsx)(W,{k:`error.title`,as:`h1`}),(0,H.jsx)(W,{k:`error.body`,as:`p`,className:`muted`})]})}),(0,H.jsx)(Ba,{})]})}function Jb(e){return e.replace(/\/$/,``)||`/`}var Yb=(e,t,n)=>({page:e,titleKey:t,extraCopy:n}),Xb=[{path:`/`,element:(0,H.jsx)(Ha,{}),errorElement:(0,H.jsx)(qb,{}),children:[{index:!0,element:(0,H.jsx)(eh,{}),handle:Yb(`intro`,void 0,[`staging`])},{path:`staging`,element:(0,H.jsx)(E_,{}),handle:Yb(`staging`)},{path:`prognostic`,element:(0,H.jsx)(Hf,{}),handle:Yb(`prognostic`)},{path:`shape`,element:(0,H.jsx)(Rb,{titleKey:`nav.shape`}),handle:Yb(null,`nav.shape`)},{path:`brain-age`,element:(0,H.jsx)(Lb,{}),handle:Yb(`brainage`)},{path:`about`,element:(0,H.jsx)(Gb,{}),handle:Yb(`about`)},{path:`*`,element:(0,H.jsx)(Kb,{}),handle:Yb(null)}]}];function Zb(e,t){return e?Fi(Xb):Pi(Xb,{basename:Jb(t)})}var Qb=Zb(!1,`/hd-platform/`);function $b(){return(0,H.jsx)(Hr,{router:Qb})}var ex=`proposal`;document.documentElement.dataset.style=ex,(0,v.createRoot)(document.getElementById(`root`)).render((0,H.jsx)(_.StrictMode,{children:(0,H.jsx)($b,{})}));export{$f as a,pp as c,yp as d,bp as f,cp as h,_p as i,Sp as l,op as m,lp as n,up as o,ip as p,hp as r,mp as s,gp as t,sp as u};