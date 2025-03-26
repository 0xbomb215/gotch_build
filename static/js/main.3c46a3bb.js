/*! For license information please see main.3c46a3bb.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),a=n(43),i=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}var s=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),g=Symbol.for("react.consumer"),m=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var k=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var S=Symbol.for("react.memo_cache_sentinel"),E=Symbol.iterator;function C(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=E&&e[E]||e["@@iterator"])?e:null}var _=Symbol.for("react.client.reference");function P(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===_?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case d:return"Fragment";case c:return"Portal";case p:return"Profiler";case f:return"StrictMode";case y:return"Suspense";case v:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case m:return(e.displayName||"Context")+".Provider";case g:return(e._context.displayName||"Context")+".Consumer";case b:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case x:return null!==(t=e.displayName||null)?t:P(e.type)||"Memo";case w:t=e._payload,e=e._init;try{return P(e(t))}catch(n){}}return null}var z,T,N=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=Object.assign;function L(e){if(void 0===z)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);z=t&&t[1]||"",T=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+z+e+T}var j=!1;function R(e,t){if(!e||j)return"";j=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(l){if(l&&r&&"string"===typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),o=i[0],l=i[1];if(o&&l){var s=o.split("\n"),u=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===u.length)for(r=s.length-1,a=u.length-1;1<=r&&0<=a&&s[r]!==u[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==u[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==u[a]){var c="\n"+s[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=a);break}}}finally{j=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?L(n):""}function A(e){switch(e.tag){case 26:case 27:case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 15:return e=R(e.type,!1);case 11:return e=R(e.type.render,!1);case 1:return e=R(e.type,!0);default:return""}}function D(e){try{var t="";do{t+=A(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function F(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function I(e){if(F(e)!==e)throw Error(o(188))}function M(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=M(e)))return t;e=e.sibling}return null}var U=Array.isArray,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},B=[],V=-1;function Y(e){return{current:e}}function q(e){0>V||(e.current=B[V],B[V]=null,V--)}function K(e,t){V++,B[V]=e.current,e.current=t}var Q=Y(null),G=Y(null),X=Y(null),Z=Y(null);function J(e,t){switch(K(X,t),K(G,e),K(Q,null),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Gc(t):0;break;default:if(t=(e=8===e?t.parentNode:t).tagName,e=e.namespaceURI)t=Xc(e=Gc(e),t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(Q),K(Q,t)}function ee(){q(Q),q(G),q(X)}function te(e){null!==e.memoizedState&&K(Z,e);var t=Q.current,n=Xc(t,e.type);t!==n&&(K(G,e),K(Q,n))}function ne(e){G.current===e&&(q(Q),q(G)),Z.current===e&&(q(Z),Dd._currentValue=W)}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,oe=r.unstable_shouldYield,le=r.unstable_requestPaint,se=r.unstable_now,ue=r.unstable_getCurrentPriorityLevel,ce=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,pe=r.unstable_LowPriority,he=r.unstable_IdlePriority,ge=r.log,me=r.unstable_setDisableYieldValue,be=null,ye=null;function ve(e){if("function"===typeof ge&&me(e),ye&&"function"===typeof ye.setStrictMode)try{ye.setStrictMode(be,e)}catch(t){}}var xe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(we(e)/ke|0)|0},we=Math.log,ke=Math.LN2;var Se=128,Ee=4194304;function Ce(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _e(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=e.warmLanes;e=0!==e.finishedLanes;var l=134217727&n;return 0!==l?0!==(n=l&~a)?r=Ce(n):0!==(i&=l)?r=Ce(i):e||0!==(o=l&~o)&&(r=Ce(o)):0!==(l=n&~a)?r=Ce(l):0!==i?r=Ce(i):e||0!==(o=n&~o)&&(r=Ce(o)),0===r?0:0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||32===a&&0!==(4194176&o))?t:r}function Pe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function ze(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Te(){var e=Se;return 0===(4194176&(Se<<=1))&&(Se=128),e}function Ne(){var e=Ee;return 0===(62914560&(Ee<<=1))&&(Ee=4194304),e}function Oe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Le(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function je(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-xe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194218&n}function Re(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Ae(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function De(){var e=H.p;return 0!==e?e:void 0===(e=window.event)?32:Xd(e.type)}var Fe=Math.random().toString(36).slice(2),$e="__reactFiber$"+Fe,Ie="__reactProps$"+Fe,Me="__reactContainer$"+Fe,Ue="__reactEvents$"+Fe,He="__reactListeners$"+Fe,We="__reactHandles$"+Fe,Be="__reactResources$"+Fe,Ve="__reactMarker$"+Fe;function Ye(e){delete e[$e],delete e[Ie],delete e[Ue],delete e[He],delete e[We]}function qe(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Me]||n[$e]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=sd(e);null!==e;){if(n=e[$e])return n;e=sd(e)}return t}n=(e=n).parentNode}return null}function Ke(e){if(e=e[$e]||e[Me]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Qe(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Ge(e){var t=e[Be];return t||(t=e[Be]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Ve]=!0}var Ze=new Set,Je={};function et(e,t){tt(e,t),tt(e+"Capture",t)}function tt(e,t){for(Je[e]=t,e=0;e<t.length;e++)Ze.add(t[e])}var nt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},it={};function ot(e,t,n){if(a=t,re.call(it,a)||!re.call(at,a)&&(rt.test(a)?it[a]=!0:(at[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function lt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function st(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ct(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ct(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ct(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function gt(e){return e.replace(ht,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function mt(e,t,n,r,a,i,o,l){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?yt(e,o,ut(t)):null!=n?yt(e,o,ut(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=i&&(e.defaultChecked=!!i),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ut(l):e.removeAttribute("name")}function bt(e,t,n,r,a,i,o,l){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return;n=null!=n?""+ut(n):"",t=null!=t?""+ut(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function yt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ut(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ut(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(U(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ut(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Et(e,a,r)}else for(var i in t)t.hasOwnProperty(i)&&Et(e,i,t[i])}function _t(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tt(e){return zt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Nt=null;function Ot(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Lt=null,jt=null;function Rt(e){var t=Ke(e);if(t&&(e=t.stateNode)){var n=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(mt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Ie]||null;if(!a)throw Error(o(90));mt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&vt(e,!!n.multiple,t,!1)}}}var At=!1;function Dt(e,t,n){if(At)return e(t,n);At=!0;try{return e(t)}finally{if(At=!1,(null!==Lt||null!==jt)&&($u(),Lt&&(t=Lt,e=jt,jt=Lt=null,Rt(t),e)))for(t=0;t<e.length;t++)Rt(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Ie]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var $t=!1;if(nt)try{var It={};Object.defineProperty(It,"passive",{get:function(){$t=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch(kf){$t=!1}var Mt=null,Ut=null,Ht=null;function Wt(){if(Ht)return Ht;var e,t,n=Ut,r=n.length,a="value"in Mt?Mt.value:Mt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Ht=a.slice(e,1<t?1-t:void 0)}function Bt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Vt(){return!0}function Yt(){return!1}function qt(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Vt:Yt,this.isPropagationStopped=Yt,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Vt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Vt)},persist:function(){},isPersistent:Vt}),t}var Kt,Qt,Gt,Xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=qt(Xt),Jt=O({},Xt,{view:0,detail:0}),en=qt(Jt),tn=O({},Jt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gt&&(Gt&&"mousemove"===e.type?(Kt=e.screenX-Gt.screenX,Qt=e.screenY-Gt.screenY):Qt=Kt=0,Gt=e),Kt)},movementY:function(e){return"movementY"in e?e.movementY:Qt}}),nn=qt(tn),rn=qt(O({},tn,{dataTransfer:0})),an=qt(O({},Jt,{relatedTarget:0})),on=qt(O({},Xt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=qt(O({},Xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),sn=qt(O({},Xt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=dn[e])&&!!t[e]}function pn(){return fn}var hn=qt(O({},Jt,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Bt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?cn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pn,charCode:function(e){return"keypress"===e.type?Bt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Bt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=qt(O({},tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),mn=qt(O({},Jt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pn})),bn=qt(O({},Xt,{propertyName:0,elapsedTime:0,pseudoElement:0})),yn=qt(O({},tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),vn=qt(O({},Xt,{newState:0,oldState:0})),xn=[9,13,27,32],wn=nt&&"CompositionEvent"in window,kn=null;nt&&"documentMode"in document&&(kn=document.documentMode);var Sn=nt&&"TextEvent"in window&&!kn,En=nt&&(!wn||kn&&8<kn&&11>=kn),Cn=String.fromCharCode(32),_n=!1;function Pn(e,t){switch(e){case"keyup":return-1!==xn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Tn=!1;var Nn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function On(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Nn[e.type]:"textarea"===t}function Ln(e,t,n,r){Lt?jt?jt.push(r):jt=[r]:Lt=r,0<(t=Dc(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jn=null,Rn=null;function An(e){zc(e,0)}function Dn(e){if(ft(Qe(e)))return e}function Fn(e,t){if("change"===e)return t}var $n=!1;if(nt){var In;if(nt){var Mn="oninput"in document;if(!Mn){var Un=document.createElement("div");Un.setAttribute("oninput","return;"),Mn="function"===typeof Un.oninput}In=Mn}else In=!1;$n=In&&(!document.documentMode||9<document.documentMode)}function Hn(){jn&&(jn.detachEvent("onpropertychange",Wn),Rn=jn=null)}function Wn(e){if("value"===e.propertyName&&Dn(Rn)){var t=[];Ln(t,Rn,e,Ot(e)),Dt(An,t)}}function Bn(e,t,n){"focusin"===e?(Hn(),Rn=n,(jn=t).attachEvent("onpropertychange",Wn)):"focusout"===e&&Hn()}function Vn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Dn(Rn)}function Yn(e,t){if("click"===e)return Dn(t)}function qn(e,t){if("input"===e||"change"===e)return Dn(t)}var Kn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Qn(e,t){if(Kn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!re.call(t,a)||!Kn(e[a],t[a]))return!1}return!0}function Gn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xn(e,t){var n,r=Gn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Gn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Jn(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function tr(e,t){var n=Jn(t);t=e.focusedElem;var r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Zn(t.ownerDocument.documentElement,t)){if(null!==r&&er(t))if(e=r.start,void 0===(n=r.end)&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if((n=(e=t.ownerDocument||document)&&e.defaultView||window).getSelection){n=n.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!n.extend&&i>r&&(a=r,r=i,i=a),a=Xn(t,i);var o=Xn(t,r);a&&o&&(1!==n.rangeCount||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&((e=e.createRange()).setStart(a.node,a.offset),n.removeAllRanges(),i>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}for(e=[],n=t;n=n.parentNode;)1===n.nodeType&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for("function"===typeof t.focus&&t.focus(),t=0;t<e.length;t++)(n=e[t]).element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nr=nt&&"documentMode"in document&&11>=document.documentMode,rr=null,ar=null,ir=null,or=!1;function lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==pt(r)||("selectionStart"in(r=rr)&&er(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ir&&Qn(ir,r)||(ir=r,0<(r=Dc(ar,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},cr={},dr={};function fr(e){if(cr[e])return cr[e];if(!ur[e])return e;var t,n=ur[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return cr[e]=n[t];return e}nt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);var pr=fr("animationend"),hr=fr("animationiteration"),gr=fr("animationstart"),mr=fr("transitionrun"),br=fr("transitionstart"),yr=fr("transitioncancel"),vr=fr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function kr(e,t){xr.set(e,t),et(t,[e])}var Sr=[],Er=0,Cr=0;function _r(){for(var e=Er,t=Cr=Er=0;t<e;){var n=Sr[t];Sr[t++]=null;var r=Sr[t];Sr[t++]=null;var a=Sr[t];Sr[t++]=null;var i=Sr[t];if(Sr[t++]=null,null!==r&&null!==a){var o=r.pending;null===o?a.next=a:(a.next=o.next,o.next=a),r.pending=a}0!==i&&Nr(n,a,i)}}function Pr(e,t,n,r){Sr[Er++]=e,Sr[Er++]=t,Sr[Er++]=n,Sr[Er++]=r,Cr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function zr(e,t,n,r){return Pr(e,t,n,r),Or(e)}function Tr(e,t){return Pr(e,null,null,t),Or(e)}function Nr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(a=!0)),e=i,i=i.return;a&&null!==t&&3===e.tag&&(i=e.stateNode,a=31-xe(n),null===(e=(i=i.hiddenUpdates)[a])?i[a]=[t]:e.push(t),t.lane=536870912|n)}function Or(e){if(50<zu)throw zu=0,Tu=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Lr={},jr=new WeakMap;function Rr(e,t){if("object"===typeof e&&null!==e){var n=jr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:D(t)},jr.set(e,t),t)}return{value:e,source:t,stack:D(t)}}var Ar=[],Dr=0,Fr=null,$r=0,Ir=[],Mr=0,Ur=null,Hr=1,Wr="";function Br(e,t){Ar[Dr++]=$r,Ar[Dr++]=Fr,Fr=e,$r=t}function Vr(e,t,n){Ir[Mr++]=Hr,Ir[Mr++]=Wr,Ir[Mr++]=Ur,Ur=e;var r=Hr;e=Wr;var a=32-xe(r)-1;r&=~(1<<a),n+=1;var i=32-xe(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Hr=1<<32-xe(t)+a|n<<a|r,Wr=i+e}else Hr=1<<i|n<<a|r,Wr=e}function Yr(e){null!==e.return&&(Br(e,1),Vr(e,1,0))}function qr(e){for(;e===Fr;)Fr=Ar[--Dr],Ar[Dr]=null,$r=Ar[--Dr],Ar[Dr]=null;for(;e===Ur;)Ur=Ir[--Mr],Ir[Mr]=null,Wr=Ir[--Mr],Ir[Mr]=null,Hr=Ir[--Mr],Ir[Mr]=null}var Kr=null,Qr=null,Gr=!1,Xr=null,Zr=!1,Jr=Error(o(519));function ea(e){throw ia(Rr(Error(o(418,"")),e)),Jr}function ta(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[$e]=e,t[Ie]=r,n){case"dialog":Tc("cancel",t),Tc("close",t);break;case"iframe":case"object":case"embed":Tc("load",t);break;case"video":case"audio":for(n=0;n<_c.length;n++)Tc(_c[n],t);break;case"source":Tc("error",t);break;case"img":case"image":case"link":Tc("error",t),Tc("load",t);break;case"details":Tc("toggle",t);break;case"input":Tc("invalid",t),bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Tc("invalid",t);break;case"textarea":Tc("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Hc(t.textContent,n)?(null!=r.popover&&(Tc("beforetoggle",t),Tc("toggle",t)),null!=r.onScroll&&Tc("scroll",t),null!=r.onScrollEnd&&Tc("scrollend",t),null!=r.onClick&&(t.onclick=Wc),t=!0):t=!1,t||ea(e)}function na(e){for(Kr=e.return;Kr;)switch(Kr.tag){case 3:case 27:return void(Zr=!0);case 5:case 13:return void(Zr=!1);default:Kr=Kr.return}}function ra(e){if(e!==Kr)return!1;if(!Gr)return na(e),Gr=!0,!1;var t,n=!1;if((t=3!==e.tag&&27!==e.tag)&&((t=5===e.tag)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Zc(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&Qr&&ea(e),na(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){Qr=ld(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}Qr=null}}else Qr=Kr?ld(e.stateNode.nextSibling):null;return!0}function aa(){Qr=Kr=null,Gr=!1}function ia(e){null===Xr?Xr=[e]:Xr.push(e)}var oa=Error(o(460)),la=Error(o(474)),sa={then:function(){}};function ua(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ca(){}function da(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(ca,ca),t=n),t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oa)throw Error(o(483));throw e;default:if("string"===typeof t.status)t.then(ca,ca);else{if(null!==(e=tu)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oa)throw Error(o(483));throw e}throw fa=t,oa}}var fa=null;function pa(){if(null===fa)throw Error(o(459));var e=fa;return fa=null,e}var ha=null,ga=0;function ma(e){var t=ga;return ga+=1,null===ha&&(ha=[]),da(ha,e,t)}function ba(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function ya(e,t){if(t.$$typeof===s)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){return(0,e._init)(e._payload)}function xa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Fs(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=33554434,n):r:(t.flags|=33554434,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=33554434),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Hs(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n,r){var i=n.type;return i===d?h(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===w&&va(i)===t.type)?(ba(t=a(t,n.props),n),t.return=e,t):(ba(t=Is(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function p(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ws(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function h(e,t,n,r,i){return null===t||7!==t.tag?((t=Ms(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function g(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Hs(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case u:return ba(n=Is(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case c:return(t=Ws(t,e.mode,n)).return=e,t;case w:return g(e,t=(0,t._init)(t._payload),n)}if(U(t)||C(t))return(t=Ms(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return g(e,ma(t),n);if(t.$$typeof===m)return g(e,_l(e,t),n);ya(e,t)}return null}function b(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case u:return n.key===a?f(e,t,n,r):null;case c:return n.key===a?p(e,t,n,r):null;case w:return b(e,t,n=(a=n._init)(n._payload),r)}if(U(n)||C(n))return null!==a?null:h(e,t,n,r,null);if("function"===typeof n.then)return b(e,t,ma(n),r);if(n.$$typeof===m)return b(e,t,_l(e,n),r);ya(e,n)}return null}function y(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case u:return f(t,e=e.get(null===r.key?n:r.key)||null,r,a);case c:return p(t,e=e.get(null===r.key?n:r.key)||null,r,a);case w:return y(e,t,n,r=(0,r._init)(r._payload),a)}if(U(r)||C(r))return h(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return y(e,t,n,ma(r),a);if(r.$$typeof===m)return y(e,t,n,_l(t,r),a);ya(t,r)}return null}function v(s,f,p,h){if("object"===typeof p&&null!==p&&p.type===d&&null===p.key&&(p=p.props.children),"object"===typeof p&&null!==p){switch(p.$$typeof){case u:e:{for(var x=p.key;null!==f;){if(f.key===x){if((x=p.type)===d){if(7===f.tag){n(s,f.sibling),(h=a(f,p.props.children)).return=s,s=h;break e}}else if(f.elementType===x||"object"===typeof x&&null!==x&&x.$$typeof===w&&va(x)===f.type){n(s,f.sibling),ba(h=a(f,p.props),p),h.return=s,s=h;break e}n(s,f);break}t(s,f),f=f.sibling}p.type===d?((h=Ms(p.props.children,s.mode,h,p.key)).return=s,s=h):(ba(h=Is(p.type,p.key,p.props,null,s.mode,h),p),h.return=s,s=h)}return l(s);case c:e:{for(x=p.key;null!==f;){if(f.key===x){if(4===f.tag&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(s,f.sibling),(h=a(f,p.children||[])).return=s,s=h;break e}n(s,f);break}t(s,f),f=f.sibling}(h=Ws(p,s.mode,h)).return=s,s=h}return l(s);case w:return v(s,f,p=(x=p._init)(p._payload),h)}if(U(p))return function(a,o,l,s){for(var u=null,c=null,d=o,f=o=0,p=null;null!==d&&f<l.length;f++){d.index>f?(p=d,d=null):p=d.sibling;var h=b(a,d,l[f],s);if(null===h){null===d&&(d=p);break}e&&d&&null===h.alternate&&t(a,d),o=i(h,o,f),null===c?u=h:c.sibling=h,c=h,d=p}if(f===l.length)return n(a,d),Gr&&Br(a,f),u;if(null===d){for(;f<l.length;f++)null!==(d=g(a,l[f],s))&&(o=i(d,o,f),null===c?u=d:c.sibling=d,c=d);return Gr&&Br(a,f),u}for(d=r(d);f<l.length;f++)null!==(p=y(d,a,f,l[f],s))&&(e&&null!==p.alternate&&d.delete(null===p.key?f:p.key),o=i(p,o,f),null===c?u=p:c.sibling=p,c=p);return e&&d.forEach((function(e){return t(a,e)})),Gr&&Br(a,f),u}(s,f,p,h);if(C(p)){if("function"!==typeof(x=C(p)))throw Error(o(150));return function(a,l,s,u){if(null==s)throw Error(o(151));for(var c=null,d=null,f=l,p=l=0,h=null,m=s.next();null!==f&&!m.done;p++,m=s.next()){f.index>p?(h=f,f=null):h=f.sibling;var v=b(a,f,m.value,u);if(null===v){null===f&&(f=h);break}e&&f&&null===v.alternate&&t(a,f),l=i(v,l,p),null===d?c=v:d.sibling=v,d=v,f=h}if(m.done)return n(a,f),Gr&&Br(a,p),c;if(null===f){for(;!m.done;p++,m=s.next())null!==(m=g(a,m.value,u))&&(l=i(m,l,p),null===d?c=m:d.sibling=m,d=m);return Gr&&Br(a,p),c}for(f=r(f);!m.done;p++,m=s.next())null!==(m=y(f,a,p,m.value,u))&&(e&&null!==m.alternate&&f.delete(null===m.key?p:m.key),l=i(m,l,p),null===d?c=m:d.sibling=m,d=m);return e&&f.forEach((function(e){return t(a,e)})),Gr&&Br(a,p),c}(s,f,p=x.call(p),h)}if("function"===typeof p.then)return v(s,f,ma(p),h);if(p.$$typeof===m)return v(s,f,_l(s,p),h);ya(s,p)}return"string"===typeof p&&""!==p||"number"===typeof p||"bigint"===typeof p?(p=""+p,null!==f&&6===f.tag?(n(s,f.sibling),(h=a(f,p)).return=s,s=h):(n(s,f),(h=Hs(p,s.mode,h)).return=s,s=h),l(s)):n(s,f)}return function(e,t,n,r){try{ga=0;var a=v(e,t,n,r);return ha=null,a}catch(o){if(o===oa)throw o;var i=As(29,o,null,e.mode);return i.lanes=r,i.return=e,i}}}var wa=xa(!0),ka=xa(!1),Sa=Y(null),Ea=Y(0);function Ca(e,t){K(Ea,e=uu),K(Sa,t),uu=e|t.baseLanes}function _a(){K(Ea,uu),K(Sa,Sa.current)}function Pa(){uu=Ea.current,q(Sa),q(Ea)}var za=Y(null),Ta=null;function Na(e){var t=e.alternate;K(Ra,1&Ra.current),K(za,e),null===Ta&&(null===t||null!==Sa.current||null!==t.memoizedState)&&(Ta=e)}function Oa(e){if(22===e.tag){if(K(Ra,Ra.current),K(za,e),null===Ta){var t=e.alternate;null!==t&&null!==t.memoizedState&&(Ta=e)}}else La()}function La(){K(Ra,Ra.current),K(za,za.current)}function ja(e){q(za),Ta===e&&(Ta=null),q(Ra)}var Ra=Y(0);function Aa(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Da="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Fa=r.unstable_scheduleCallback,$a=r.unstable_NormalPriority,Ia={$$typeof:m,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ma(){return{controller:new Da,data:new Map,refCount:0}}function Ua(e){e.refCount--,0===e.refCount&&Fa($a,(function(){e.controller.abort()}))}var Ha=null,Wa=0,Ba=0,Va=null;function Ya(){if(0===--Wa&&null!==Ha){null!==Va&&(Va.status="fulfilled");var e=Ha;Ha=null,Ba=0,Va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var qa=N.S;N.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ha){var n=Ha=[];Wa=0,Ba=wc(),Va={status:"pending",value:void 0,then:function(e){n.push(e)}}}Wa++,t.then(Ya,Ya)}(0,t),null!==qa&&qa(e,t)};var Ka=Y(null);function Qa(){var e=Ka.current;return null!==e?e:tu.pooledCache}function Ga(e,t){K(Ka,null===t?Ka.current:t.pool)}function Xa(){var e=Qa();return null===e?null:{parent:Ia._currentValue,pool:e}}var Za=0,Ja=null,ei=null,ti=null,ni=!1,ri=!1,ai=!1,ii=0,oi=0,li=null,si=0;function ui(){throw Error(o(321))}function ci(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kn(e[n],t[n]))return!1;return!0}function di(e,t,n,r,a,i){return Za=i,Ja=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=null===e||null===e.memoizedState?_o:Po,ai=!1,i=n(r,a),ai=!1,ri&&(i=pi(t,n,r,a)),fi(e),i}function fi(e){N.H=Co;var t=null!==ei&&null!==ei.next;if(Za=0,ti=ei=Ja=null,ni=!1,oi=0,li=null,t)throw Error(o(300));null===e||Bo||null!==(e=e.dependencies)&&Sl(e)&&(Bo=!0)}function pi(e,t,n,r){Ja=e;var a=0;do{if(ri&&(li=null),oi=0,ri=!1,25<=a)throw Error(o(301));if(a+=1,ti=ei=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}N.H=zo,i=t(n,r)}while(ri);return i}function hi(){var e=N.H,t=e.useState()[0];return t="function"===typeof t.then?xi(t):t,e=e.useState()[0],(null!==ei?ei.memoizedState:null)!==e&&(Ja.flags|=1024),t}function gi(){var e=0!==ii;return ii=0,e}function mi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bi(e){if(ni){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ni=!1}Za=0,ti=ei=Ja=null,ri=!1,oi=ii=0,li=null}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ti?Ja.memoizedState=ti=e:ti=ti.next=e,ti}function vi(){if(null===ei){var e=Ja.alternate;e=null!==e?e.memoizedState:null}else e=ei.next;var t=null===ti?Ja.memoizedState:ti.next;if(null!==t)ti=t,ei=e;else{if(null===e){if(null===Ja.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(ei=e).memoizedState,baseState:ei.baseState,baseQueue:ei.baseQueue,queue:ei.queue,next:null},null===ti?Ja.memoizedState=ti=e:ti=ti.next=e}return ti}function xi(e){var t=oi;return oi+=1,null===li&&(li=[]),e=da(li,e,t),t=Ja,null===(null===ti?t.memoizedState:ti.next)&&(t=t.alternate,N.H=null===t||null===t.memoizedState?_o:Po),e}function wi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return xi(e);if(e.$$typeof===m)return Cl(e)}throw Error(o(438,String(e)))}function ki(e){var t=null,n=Ja.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Ja.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Ja.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=S;return t.index++,n}function Si(e,t){return"function"===typeof t?t(e):t}function Ei(e){return Ci(vi(),ei,e)}function Ci(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var a=e.baseQueue,i=r.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}t.baseQueue=a=i,r.pending=null}if(i=e.baseState,null===a)e.memoizedState=i;else{var s=l=null,u=null,c=t=a.next,d=!1;do{var f=-536870913&c.lane;if(f!==c.lane?(ru&f)===f:(Za&f)===f){var p=c.revertLane;if(0===p)null!==u&&(u=u.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Ba&&(d=!0);else{if((Za&p)===p){c=c.next,p===Ba&&(d=!0);continue}f={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=f,l=i):u=u.next=f,Ja.lanes|=p,du|=p}f=c.action,ai&&n(i,f),i=c.hasEagerState?c.eagerState:n(i,f)}else p={lane:f,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=p,l=i):u=u.next=p,Ja.lanes|=f,du|=f;c=c.next}while(null!==c&&c!==t);if(null===u?l=i:u.next=s,!Kn(i,e.memoizedState)&&(Bo=!0,d&&null!==(n=Va)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=u,r.lastRenderedState=i}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function _i(e){var t=vi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);Kn(i,t.memoizedState)||(Bo=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Pi(e,t,n){var r=Ja,a=vi(),i=Gr;if(i){if(void 0===n)throw Error(o(407));n=n()}else n=t();var l=!Kn((ei||a).memoizedState,n);if(l&&(a.memoizedState=n,Bo=!0),a=a.queue,Zi(Ni.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==ti&&1&ti.memoizedState.tag){if(r.flags|=2048,qi(9,Ti.bind(null,r,a,n,t),{destroy:void 0},null),null===tu)throw Error(o(349));i||0!==(60&Za)||zi(r,t,n)}return n}function zi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Ja.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Ja.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ti(e,t,n,r){t.value=n,t.getSnapshot=r,Oi(t)&&Li(e)}function Ni(e,t,n){return n((function(){Oi(t)&&Li(e)}))}function Oi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kn(e,n)}catch(r){return!0}}function Li(e){var t=Tr(e,2);null!==t&&Lu(t,e,2)}function ji(e){var t=yi();if("function"===typeof e){var n=e;if(e=n(),ai){ve(!0);try{n()}finally{ve(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},t}function Ri(e,t,n,r){return e.baseState=n,Ci(e,ei,"function"===typeof r?r:Si)}function Ai(e,t,n,r,a){if(ko(e))throw Error(o(485));if(null!==(e=t.action)){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==N.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,Di(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Di(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var i=N.T,o={};N.T=o;try{var l=n(a,r),s=N.S;null!==s&&s(o,l),Fi(e,t,l)}catch(u){Ii(e,t,u)}finally{N.T=i}}else try{Fi(e,t,i=n(a,r))}catch(c){Ii(e,t,c)}}function Fi(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){$i(e,t,n)}),(function(n){return Ii(e,t,n)})):$i(e,t,n)}function $i(e,t,n){t.status="fulfilled",t.value=n,Mi(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Di(e,n)))}function Ii(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Mi(t),t=t.next}while(t!==r)}e.action=null}function Mi(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ui(e,t){return t}function Hi(e,t){if(Gr){var n=tu.formState;if(null!==n){e:{var r=Ja;if(Gr){if(Qr){t:{for(var a=Qr,i=Zr;8!==a.nodeType;){if(!i){a=null;break t}if(null===(a=ld(a.nextSibling))){a=null;break t}}a="F!"===(i=a.data)||"F"===i?a:null}if(a){Qr=ld(a.nextSibling),r="F!"===a.data;break e}}ea(r)}r=!1}r&&(t=n[0])}}return(n=yi()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:t},n.queue=r,n=vo.bind(null,Ja,r),r.dispatch=n,r=ji(!1),i=wo.bind(null,Ja,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=yi()).queue=a,n=Ai.bind(null,Ja,a,i,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Wi(e){return Bi(vi(),ei,e)}function Bi(e,t,n){t=Ci(e,t,Ui)[0],e=Ei(Si)[0],t="object"===typeof t&&null!==t&&"function"===typeof t.then?xi(t):t;var r=vi(),a=r.queue,i=a.dispatch;return n!==r.memoizedState&&(Ja.flags|=2048,qi(9,Vi.bind(null,a,n),{destroy:void 0},null)),[t,i,e]}function Vi(e,t){e.action=t}function Yi(e){var t=vi(),n=ei;if(null!==n)return Bi(t,n,e);vi(),t=t.memoizedState;var r=(n=vi()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function qi(e,t,n,r){return e={tag:e,create:t,inst:n,deps:r,next:null},null===(t=Ja.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Ja.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ki(){return vi().memoizedState}function Qi(e,t,n,r){var a=yi();Ja.flags|=e,a.memoizedState=qi(1|t,n,{destroy:void 0},void 0===r?null:r)}function Gi(e,t,n,r){var a=vi();r=void 0===r?null:r;var i=a.memoizedState.inst;null!==ei&&null!==r&&ci(r,ei.memoizedState.deps)?a.memoizedState=qi(t,n,i,r):(Ja.flags|=e,a.memoizedState=qi(1|t,n,i,r))}function Xi(e,t){Qi(8390656,8,e,t)}function Zi(e,t){Gi(2048,8,e,t)}function Ji(e,t){return Gi(4,2,e,t)}function eo(e,t){return Gi(4,4,e,t)}function to(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function no(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Gi(4,4,to.bind(null,t,e),n)}function ro(){}function ao(e,t){var n=vi();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&ci(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function io(e,t){var n=vi();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&ci(t,r[1]))return r[0];if(r=e(),ai){ve(!0);try{e()}finally{ve(!1)}}return n.memoizedState=[r,t],r}function oo(e,t,n){return void 0===n||0!==(1073741824&Za)?e.memoizedState=t:(e.memoizedState=n,e=Ou(),Ja.lanes|=e,du|=e,n)}function lo(e,t,n,r){return Kn(n,t)?n:null!==Sa.current?(e=oo(e,n,r),Kn(e,t)||(Bo=!0),e):0===(42&Za)?(Bo=!0,e.memoizedState=n):(e=Ou(),Ja.lanes|=e,du|=e,t)}function so(e,t,n,r,a){var i=H.p;H.p=0!==i&&8>i?i:8;var o=N.T,l={};N.T=l,wo(e,!1,t,n);try{var s=a(),u=N.S;if(null!==u&&u(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)xo(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(s,r),Nu());else xo(e,t,r,Nu())}catch(c){xo(e,t,{then:function(){},status:"rejected",reason:c},Nu())}finally{H.p=i,N.T=o}}function uo(){}function co(e,t,n,r){if(5!==e.tag)throw Error(o(476));var a=fo(e).queue;so(e,a,t,W,null===n?uo:function(){return po(e),n(r)})}function fo(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:W},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function po(e){xo(e,fo(e).next.queue,{},Nu())}function ho(){return Cl(Dd)}function go(){return vi().memoizedState}function mo(){return vi().memoizedState}function bo(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Nu(),r=Ll(t,e=Ol(n),n);return null!==r&&(Lu(r,t,n),jl(r,t,n)),t={cache:Ma()},void(e.payload=t)}t=t.return}}function yo(e,t,n){var r=Nu();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ko(e)?So(t,n):null!==(n=zr(e,t,n,r))&&(Lu(n,e,r),Eo(n,t,r))}function vo(e,t,n){xo(e,t,n,Nu())}function xo(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ko(e))So(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Kn(l,o))return Pr(e,t,a,0),null===tu&&_r(),!1}catch(s){}if(null!==(n=zr(e,t,a,r)))return Lu(n,e,r),Eo(n,t,r),!0}return!1}function wo(e,t,n,r){if(r={lane:2,revertLane:wc(),action:r,hasEagerState:!1,eagerState:null,next:null},ko(e)){if(t)throw Error(o(479))}else null!==(t=zr(e,n,r,2))&&Lu(t,e,2)}function ko(e){var t=e.alternate;return e===Ja||null!==t&&t===Ja}function So(e,t){ri=ni=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eo(e,t,n){if(0!==(4194176&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}var Co={readContext:Cl,use:wi,useCallback:ui,useContext:ui,useEffect:ui,useImperativeHandle:ui,useLayoutEffect:ui,useInsertionEffect:ui,useMemo:ui,useReducer:ui,useRef:ui,useState:ui,useDebugValue:ui,useDeferredValue:ui,useTransition:ui,useSyncExternalStore:ui,useId:ui};Co.useCacheRefresh=ui,Co.useMemoCache=ui,Co.useHostTransitionStatus=ui,Co.useFormState=ui,Co.useActionState=ui,Co.useOptimistic=ui;var _o={readContext:Cl,use:wi,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:Cl,useEffect:Xi,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Qi(4194308,4,to.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qi(4194308,4,e,t)},useInsertionEffect:function(e,t){Qi(4,2,e,t)},useMemo:function(e,t){var n=yi();t=void 0===t?null:t;var r=e();if(ai){ve(!0);try{e()}finally{ve(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=yi();if(void 0!==n){var a=n(t);if(ai){ve(!0);try{n(t)}finally{ve(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=yo.bind(null,Ja,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:function(e){var t=(e=ji(e)).queue,n=vo.bind(null,Ja,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ro,useDeferredValue:function(e,t){return oo(yi(),e,t)},useTransition:function(){var e=ji(!1);return e=so.bind(null,Ja,e.queue,!0,!1),yi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Ja,a=yi();if(Gr){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===tu)throw Error(o(349));0!==(60&ru)||zi(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Xi(Ni.bind(null,r,i,e),[e]),r.flags|=2048,qi(9,Ti.bind(null,r,i,n,t),{destroy:void 0},null),n},useId:function(){var e=yi(),t=tu.identifierPrefix;if(Gr){var n=Wr;t=":"+t+"R"+(n=(Hr&~(1<<32-xe(Hr)-1)).toString(32)+n),0<(n=ii++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=si++).toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return yi().memoizedState=bo.bind(null,Ja)}};_o.useMemoCache=ki,_o.useHostTransitionStatus=ho,_o.useFormState=Hi,_o.useActionState=Hi,_o.useOptimistic=function(e){var t=yi();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wo.bind(null,Ja,!0,n),n.dispatch=t,[e,t]};var Po={readContext:Cl,use:wi,useCallback:ao,useContext:Cl,useEffect:Zi,useImperativeHandle:no,useInsertionEffect:Ji,useLayoutEffect:eo,useMemo:io,useReducer:Ei,useRef:Ki,useState:function(){return Ei(Si)},useDebugValue:ro,useDeferredValue:function(e,t){return lo(vi(),ei.memoizedState,e,t)},useTransition:function(){var e=Ei(Si)[0],t=vi().memoizedState;return["boolean"===typeof e?e:xi(e),t]},useSyncExternalStore:Pi,useId:go};Po.useCacheRefresh=mo,Po.useMemoCache=ki,Po.useHostTransitionStatus=ho,Po.useFormState=Wi,Po.useActionState=Wi,Po.useOptimistic=function(e,t){return Ri(vi(),0,e,t)};var zo={readContext:Cl,use:wi,useCallback:ao,useContext:Cl,useEffect:Zi,useImperativeHandle:no,useInsertionEffect:Ji,useLayoutEffect:eo,useMemo:io,useReducer:_i,useRef:Ki,useState:function(){return _i(Si)},useDebugValue:ro,useDeferredValue:function(e,t){var n=vi();return null===ei?oo(n,e,t):lo(n,ei.memoizedState,e,t)},useTransition:function(){var e=_i(Si)[0],t=vi().memoizedState;return["boolean"===typeof e?e:xi(e),t]},useSyncExternalStore:Pi,useId:go};function To(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:O({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}zo.useCacheRefresh=mo,zo.useMemoCache=ki,zo.useHostTransitionStatus=ho,zo.useFormState=Yi,zo.useActionState=Yi,zo.useOptimistic=function(e,t){var n=vi();return null!==ei?Ri(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])};var No={isMounted:function(e){return!!(e=e._reactInternals)&&F(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Nu(),a=Ol(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ll(e,a,r))&&(Lu(t,e,r),jl(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Nu(),a=Ol(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ll(e,a,r))&&(Lu(t,e,r),jl(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nu(),r=Ol(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=Ll(e,r,n))&&(Lu(t,e,n),jl(t,e,n))}};function Oo(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!Qn(n,r)||!Qn(a,i))}function Lo(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&No.enqueueReplaceState(t,t.state,null)}function jo(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=O({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}var Ro="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function Ao(e){Ro(e)}function Do(e){console.error(e)}function Fo(e){Ro(e)}function $o(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Io(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function Mo(e,t,n){return(n=Ol(n)).tag=3,n.payload={element:null},n.callback=function(){$o(e,t)},n}function Uo(e){return(e=Ol(e)).tag=3,e}function Ho(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var i=r.value;e.payload=function(){return a(i)},e.callback=function(){Io(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Io(t,n,r),"function"!==typeof a&&(null===ku?ku=new Set([this]):ku.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Wo=Error(o(461)),Bo=!1;function Vo(e,t,n,r){t.child=null===e?ka(t,null,n,r):wa(t,e.child,n,r)}function Yo(e,t,n,r,a){n=n.render;var i=t.ref;if("ref"in r){var o={};for(var l in r)"ref"!==l&&(o[l]=r[l])}else o=r;return El(t),r=di(e,t,n,o,i,a),l=gi(),null===e||Bo?(Gr&&l&&Yr(t),t.flags|=1,Vo(e,t,r,a),t.child):(mi(e,t,a),fl(e,t,a))}function qo(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Ds(i)||void 0!==i.defaultProps||null!==n.compare?((e=Is(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ko(e,t,i,r,a))}if(i=e.child,!pl(e,a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:Qn)(o,r)&&e.ref===t.ref)return fl(e,t,a)}return t.flags|=1,(e=Fs(i,r)).ref=t.ref,e.return=t,t.child=e}function Ko(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(Qn(i,r)&&e.ref===t.ref){if(Bo=!1,t.pendingProps=r=i,!pl(e,a))return t.lanes=e.lanes,fl(e,t,a);0!==(131072&e.flags)&&(Bo=!0)}}return Zo(e,t,n,r,a)}function Qo(e,t,n){var r=t.pendingProps,a=r.children,i=0!==(2&t.stateNode._pendingVisibility),o=null!==e?e.memoizedState:null;if(Xo(e,t),"hidden"===r.mode||i){if(0!==(128&t.flags)){if(r=null!==o?o.baseLanes|n:n,null!==e){for(a=t.child=e.child,i=0;null!==a;)i=i|a.lanes|a.childLanes,a=a.sibling;t.childLanes=i&~r}else t.childLanes=0,t.child=null;return Go(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Go(e,t,null!==o?o.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ga(0,null!==o?o.cachePool:null),null!==o?Ca(t,o):_a(),Oa(t)}else null!==o?(Ga(0,o.cachePool),Ca(t,o),La(),t.memoizedState=null):(null!==e&&Ga(0,null),_a(),La());return Vo(e,t,a,n),t.child}function Go(e,t,n,r){var a=Qa();return a=null===a?null:{parent:Ia._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Ga(0,null),_a(),Oa(t),null!==e&&kl(e,t,r,!0),null}function Xo(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=2097664);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=2097664)}}function Zo(e,t,n,r,a){return El(t),n=di(e,t,n,r,void 0,a),r=gi(),null===e||Bo?(Gr&&r&&Yr(t),t.flags|=1,Vo(e,t,n,a),t.child):(mi(e,t,a),fl(e,t,a))}function Jo(e,t,n,r,a,i){return El(t),t.updateQueue=null,n=pi(t,r,n,a),fi(e),r=gi(),null===e||Bo?(Gr&&r&&Yr(t),t.flags|=1,Vo(e,t,n,i),t.child):(mi(e,t,i),fl(e,t,i))}function el(e,t,n,r,a){if(El(t),null===t.stateNode){var i=Lr,o=n.contextType;"object"===typeof o&&null!==o&&(i=Cl(o)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=No,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},Tl(t),o=n.contextType,i.context="object"===typeof o&&null!==o?Cl(o):Lr,i.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(To(t,n,o,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(o=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),o!==i.state&&No.enqueueReplaceState(i,i.state,null),Fl(t,r,i,a),Dl(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var l=t.memoizedProps,s=jo(n,l);i.props=s;var u=i.context,c=n.contextType;o=Lr,"object"===typeof c&&null!==c&&(o=Cl(c));var d=n.getDerivedStateFromProps;c="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,l=t.pendingProps!==l,c||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l||u!==o)&&Lo(t,i,r,o),zl=!1;var f=t.memoizedState;i.state=f,Fl(t,r,i,a),Dl(),u=t.memoizedState,l||f!==u||zl?("function"===typeof d&&(To(t,n,d,r),u=t.memoizedState),(s=zl||Oo(t,n,s,r,f,u,o))?(c||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=o,r=s):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Nl(e,t),c=jo(n,o=t.memoizedProps),i.props=c,d=t.pendingProps,f=i.context,u=n.contextType,s=Lr,"object"===typeof u&&null!==u&&(s=Cl(u)),(u="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(o!==d||f!==s)&&Lo(t,i,r,s),zl=!1,f=t.memoizedState,i.state=f,Fl(t,r,i,a),Dl();var p=t.memoizedState;o!==d||f!==p||zl||null!==e&&null!==e.dependencies&&Sl(e.dependencies)?("function"===typeof l&&(To(t,n,l,r),p=t.memoizedState),(c=zl||Oo(t,n,c,r,f,p,s)||null!==e&&null!==e.dependencies&&Sl(e.dependencies))?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,p,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=s,r=c):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Xo(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,n,a)):Vo(e,t,n,a),t.memoizedState=i.state,e=t.child):e=fl(e,t,a),e}function tl(e,t,n,r){return aa(),t.flags|=256,Vo(e,t,n,r),t.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:Xa()}}function al(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=hu),e}function il(e,t,n){var r,a=t.pendingProps,i=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Ra.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(Gr){if(i?Na(t):La(),Gr){var s,u=Qr;if(s=u){e:{for(s=u,u=Zr;8!==s.nodeType;){if(!u){u=null;break e}if(null===(s=ld(s.nextSibling))){u=null;break e}}u=s}null!==u?(t.memoizedState={dehydrated:u,treeContext:null!==Ur?{id:Hr,overflow:Wr}:null,retryLane:536870912},(s=As(18,null,null,0)).stateNode=u,s.return=t,t.child=s,Kr=t,Qr=null,s=!0):s=!1}s||ea(t)}if(null!==(u=t.memoizedState)&&null!==(u=u.dehydrated))return"$!"===u.data?t.lanes=16:t.lanes=536870912,null;ja(t)}return u=a.children,a=a.fallback,i?(La(),u=ll({mode:"hidden",children:u},i=t.mode),a=Ms(a,i,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,(i=t.child).memoizedState=rl(n),i.childLanes=al(e,r,n),t.memoizedState=nl,a):(Na(t),ol(t,u))}if(null!==(s=e.memoizedState)&&null!==(u=s.dehydrated)){if(l)256&t.flags?(Na(t),t.flags&=-257,t=sl(e,t,n)):null!==t.memoizedState?(La(),t.child=e.child,t.flags|=128,t=null):(La(),i=a.fallback,u=t.mode,a=ll({mode:"visible",children:a.children},u),(i=Ms(i,u,n,null)).flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,wa(t,e.child,null,n),(a=t.child).memoizedState=rl(n),a.childLanes=al(e,r,n),t.memoizedState=nl,t=i);else if(Na(t),"$!"===u.data){if(r=u.nextSibling&&u.nextSibling.dataset)var c=r.dgst;r=c,(a=Error(o(419))).stack="",a.digest=r,ia({value:a,source:null,stack:null}),t=sl(e,t,n)}else if(Bo||kl(e,t,n,!1),r=0!==(n&e.childLanes),Bo||r){if(null!==(r=tu)){if(0!==(42&(a=n&-n)))a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(0!==(a=0!==(a&(r.suspendedLanes|n))?0:a)&&a!==s.retryLane)throw s.retryLane=a,Tr(e,a),Lu(r,e,a),Wo}"$?"===u.data||Bu(),t=sl(e,t,n)}else"$?"===u.data?(t.flags|=128,t.child=e.child,t=lc.bind(null,e),u._reactRetry=t,t=null):(e=s.treeContext,Qr=ld(u.nextSibling),Kr=t,Gr=!0,Xr=null,Zr=!1,null!==e&&(Ir[Mr++]=Hr,Ir[Mr++]=Wr,Ir[Mr++]=Ur,Hr=e.id,Wr=e.overflow,Ur=t),(t=ol(t,a.children)).flags|=4096);return t}return i?(La(),i=a.fallback,u=t.mode,c=(s=e.child).sibling,(a=Fs(s,{mode:"hidden",children:a.children})).subtreeFlags=31457280&s.subtreeFlags,null!==c?i=Fs(c,i):(i=Ms(i,u,n,null)).flags|=2,i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,null===(u=e.child.memoizedState)?u=rl(n):(null!==(s=u.cachePool)?(c=Ia._currentValue,s=s.parent!==c?{parent:c,pool:c}:s):s=Xa(),u={baseLanes:u.baseLanes|n,cachePool:s}),i.memoizedState=u,i.childLanes=al(e,r,n),t.memoizedState=nl,a):(Na(t),e=(n=e.child).sibling,(n=Fs(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function ol(e,t){return(t=ll({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ll(e,t){return Us(e,t,0,null)}function sl(e,t,n){return wa(t,e.child,null,n),(e=ol(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ul(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),xl(e.return,t,n)}function cl(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function dl(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Vo(e,t,r.children,n),0!==(2&(r=Ra.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ul(e,n,t);else if(19===e.tag)ul(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(K(Ra,r),a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Aa(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),cl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Aa(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}cl(t,!0,n,null,i);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),du|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(kl(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Fs(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Fs(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function pl(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Sl(e))}function hl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Bo=!0;else{if(!pl(e,n)&&0===(128&t.flags))return Bo=!1,function(e,t,n){switch(t.tag){case 3:J(t,t.stateNode.containerInfo),yl(t,Ia,e.memoizedState.cache),aa();break;case 27:case 5:te(t);break;case 4:J(t,t.stateNode.containerInfo);break;case 10:yl(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Na(t),t.flags|=128,null):0!==(n&t.child.childLanes)?il(e,t,n):(Na(t),null!==(e=fl(e,t,n))?e.sibling:null);Na(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(kl(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return dl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),K(Ra,Ra.current),r)break;return null;case 22:case 23:return t.lanes=0,Qo(e,t,n);case 24:yl(t,Ia,e.memoizedState.cache)}return fl(e,t,n)}(e,t,n);Bo=0!==(131072&e.flags)}else Bo=!1,Gr&&0!==(1048576&t.flags)&&Vr(t,$r,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((a=r.$$typeof)===b){t.tag=11,t=Yo(null,t,r,e,n);break e}if(a===x){t.tag=14,t=qo(null,t,r,e,n);break e}}throw t=P(r)||r,Error(o(306,t,""))}Ds(r)?(e=jo(r,e),t.tag=1,t=el(null,t,r,e,n)):(t.tag=0,t=Zo(null,t,r,e,n))}return t;case 0:return Zo(e,t,t.type,t.pendingProps,n);case 1:return el(e,t,r=t.type,a=jo(r,t.pendingProps),n);case 3:e:{if(J(t,t.stateNode.containerInfo),null===e)throw Error(o(387));var i=t.pendingProps;r=(a=t.memoizedState).element,Nl(e,t),Fl(t,i,null,n);var l=t.memoizedState;if(i=l.cache,yl(t,Ia,i),i!==a.cache&&wl(t,[Ia],n,!0),Dl(),i=l.element,a.isDehydrated){if(a={element:i,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=tl(e,t,i,n);break e}if(i!==r){ia(r=Rr(Error(o(424)),t)),t=tl(e,t,i,n);break e}for(Qr=ld(t.stateNode.containerInfo.firstChild),Kr=t,Gr=!0,Xr=null,Zr=!0,n=ka(t,null,i,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(aa(),i===r){t=fl(e,t,n);break e}Vo(e,t,i,n)}t=t.child}return t;case 26:return Xo(e,t),null===e?(n=md(t.type,null,t.pendingProps,null))?t.memoizedState=n:Gr||(n=t.type,e=t.pendingProps,(r=Qc(X.current).createElement(n))[$e]=t,r[Ie]=e,Yc(r,n,e),Xe(r),t.stateNode=r):t.memoizedState=md(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return te(t),null===e&&Gr&&(r=t.stateNode=ud(t.type,t.pendingProps,X.current),Kr=t,Zr=!0,Qr=ld(r.firstChild)),r=t.pendingProps.children,null!==e||Gr?Vo(e,t,r,n):t.child=wa(t,null,r,n),Xo(e,t),t.child;case 5:return null===e&&Gr&&((a=r=Qr)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ve])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(null==a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===i)return e}if(null===(e=ld(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,Zr))?(t.stateNode=r,Kr=t,Qr=ld(r.firstChild),Zr=!1,a=!0):a=!1),a||ea(t)),te(t),a=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,r=i.children,Zc(a,i)?r=null:null!==l&&Zc(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=di(e,t,hi,null,null,n),Dd._currentValue=a),Xo(e,t),Vo(e,t,r,n),t.child;case 6:return null===e&&Gr&&((e=n=Qr)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=ld(e.nextSibling)))return null}return e}(n,t.pendingProps,Zr))?(t.stateNode=n,Kr=t,Qr=null,e=!0):e=!1),e||ea(t)),null;case 13:return il(e,t,n);case 4:return J(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wa(t,null,r,n):Vo(e,t,r,n),t.child;case 11:return Yo(e,t,t.type,t.pendingProps,n);case 7:return Vo(e,t,t.pendingProps,n),t.child;case 8:case 12:return Vo(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,yl(t,t.type,r.value),Vo(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,El(t),r=r(a=Cl(a)),t.flags|=1,Vo(e,t,r,n),t.child;case 14:return qo(e,t,t.type,t.pendingProps,n);case 15:return Ko(e,t,t.type,t.pendingProps,n);case 19:return dl(e,t,n);case 22:return Qo(e,t,n);case 24:return El(t),r=Cl(Ia),null===e?(null===(a=Qa())&&(a=tu,i=Ma(),a.pooledCache=i,i.refCount++,null!==i&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:r,cache:a},Tl(t),yl(t,Ia,a)):(0!==(e.lanes&n)&&(Nl(e,t),Fl(t,null,null,n),Dl()),a=e.memoizedState,i=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),yl(t,Ia,r)):(r=i.cache,yl(t,Ia,r),r!==a.cache&&wl(t,[Ia],n,!0))),Vo(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}var gl=Y(null),ml=null,bl=null;function yl(e,t,n){K(gl,t._currentValue),t._currentValue=n}function vl(e){e._currentValue=gl.current,q(gl)}function xl(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wl(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var i=a.dependencies;if(null!==i){var l=a.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=a;for(var u=0;u<t.length;u++)if(s.context===t[u]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),xl(i.return,n,e),r||(l=null);break e}i=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(o(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),xl(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function kl(e,t,n,r){e=null;for(var a=t,i=!1;null!==a;){if(!i)if(0!==(524288&a.flags))i=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(o(387));if(null!==(l=l.memoizedProps)){var s=a.type;Kn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===Z.current){if(null===(l=a.alternate))throw Error(o(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Dd):e=[Dd])}a=a.return}null!==e&&wl(t,e,n,r),t.flags|=262144}function Sl(e){for(e=e.firstContext;null!==e;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function El(e){ml=e,bl=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Cl(e){return Pl(ml,e)}function _l(e,t){return null===ml&&El(e),Pl(e,t)}function Pl(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===bl){if(null===e)throw Error(o(308));bl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bl=bl.next=t;return n}var zl=!1;function Tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ol(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ll(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&eu)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Or(e),Nr(e,null,n),t}return Pr(e,r,t,n),Or(e)}function jl(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194176&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}function Rl(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Al=!1;function Dl(){if(Al){if(null!==Va)throw Va}}function Fl(e,t,n,r){Al=!1;var a=e.updateQueue;zl=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===o?i=u:o.next=u,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,c=u=s=null,l=i;;){var f=-536870913&l.lane,p=f!==l.lane;if(p?(ru&f)===f:(r&f)===f){0!==f&&f===Ba&&(Al=!0),null!==c&&(c=c.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,g=l;f=t;var m=n;switch(g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(m,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=g.payload)?h.call(m,d,f):h)||void 0===f)break e;d=O({},d,f);break e;case 2:zl=!0}}null!==(f=l.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=a.callbacks)?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,o|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(p=l).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null===i&&(a.shared.lanes=0),du|=o,e.lanes=o,e.memoizedState=d}}function $l(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function Il(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)$l(n[e],t)}function Ml(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var i=n.create,o=n.inst;r=i(),o.destroy=r}n=n.next}while(n!==a)}}catch(l){rc(t,t.return,l)}}function Ul(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var i=a.next;r=i;do{if((r.tag&e)===e){var o=r.inst,l=o.destroy;if(void 0!==l){o.destroy=void 0,a=t;var s=n;try{l()}catch(u){rc(a,s,u)}}}r=r.next}while(r!==i)}}catch(u){rc(t,t.return,u)}}function Hl(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Il(t,n)}catch(r){rc(e,e.return,r)}}}function Wl(e,t,n){n.props=jo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){rc(e,t,r)}}function Bl(e,t){try{var n=e.ref;if(null!==n){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var a=r;break;default:a=r}"function"===typeof n?e.refCleanup=n(a):n.current=a}}catch(i){rc(e,t,i)}}function Vl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){rc(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){rc(e,t,i)}else n.current=null}function Yl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){rc(e,e.return,a)}}function ql(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,l=null,s=null,u=null,c=null,d=null;for(h in n){var f=n[h];if(n.hasOwnProperty(h)&&null!=f)switch(h){case"checked":case"value":break;case"defaultValue":u=f;default:r.hasOwnProperty(h)||Bc(e,t,h,null,r,f)}}for(var p in r){var h=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=h||null!=f))switch(p){case"type":i=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":l=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:h!==f&&Bc(e,t,p,h,r,f)}}return void mt(e,l,s,u,c,d,i,a);case"select":for(i in h=l=s=p=null,n)if(u=n[i],n.hasOwnProperty(i)&&null!=u)switch(i){case"value":break;case"multiple":h=u;default:r.hasOwnProperty(i)||Bc(e,t,i,null,r,u)}for(a in r)if(i=r[a],u=n[a],r.hasOwnProperty(a)&&(null!=i||null!=u))switch(a){case"value":p=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==u&&Bc(e,t,a,i,r,u)}return t=s,n=l,r=h,void(null!=p?vt(e,!!n,p,!1):!!r!==!!n&&(null!=t?vt(e,!!n,t,!0):vt(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=p=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Bc(e,t,s,null,r,a)}for(l in r)if(a=r[l],i=n[l],r.hasOwnProperty(l)&&(null!=a||null!=i))switch(l){case"value":p=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(o(91));break;default:a!==i&&Bc(e,t,l,a,r,i)}return void xt(e,p,h);case"option":for(var g in n)if(p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g))if("selected"===g)e.selected=!1;else Bc(e,t,g,null,r,p);for(u in r)if(p=r[u],h=n[u],r.hasOwnProperty(u)&&p!==h&&(null!=p||null!=h))if("selected"===u)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Bc(e,t,u,p,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var m in n)p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m)&&Bc(e,t,m,null,r,p);for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:Bc(e,t,c,p,r,h)}return;default:if(_t(t)){for(var b in n)p=n[b],n.hasOwnProperty(b)&&void 0!==p&&!r.hasOwnProperty(b)&&Vc(e,t,b,void 0,r,p);for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||Vc(e,t,d,p,r,h);return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&null!=p&&!r.hasOwnProperty(y)&&Bc(e,t,y,null,r,p);for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||null==p&&null==h||Bc(e,t,f,p,r,h)}(r,e.type,n,t),r[Ie]=t}catch(a){rc(e,e.return,a)}}function Kl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function Ql(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Kl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Wc));else if(4!==r&&27!==r&&null!==(e=e.child))for(Gl(e,t,n),e=e.sibling;null!==e;)Gl(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&27!==r&&null!==(e=e.child))for(Xl(e,t,n),e=e.sibling;null!==e;)Xl(e,t,n),e=e.sibling}var Zl=!1,Jl=!1,es=!1,ts="function"===typeof WeakSet?WeakSet:Set,ns=null,rs=!1;function as(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bs(e,n),4&r&&Ml(5,n);break;case 1:if(bs(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(l){rc(n,n.return,l)}else{var a=jo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){rc(n,n.return,s)}}64&r&&Hl(n),512&r&&Bl(n,n.return);break;case 3:if(bs(e,n),64&r&&null!==(r=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:e=n.child.stateNode}try{Il(r,e)}catch(l){rc(n,n.return,l)}}break;case 26:bs(e,n),512&r&&Bl(n,n.return);break;case 27:case 5:bs(e,n),null===t&&4&r&&Yl(n),512&r&&Bl(n,n.return);break;case 12:default:bs(e,n);break;case 13:bs(e,n),4&r&&cs(e,n);break;case 22:if(!(a=null!==n.memoizedState||Zl)){t=null!==t&&null!==t.memoizedState||Jl;var i=Zl,o=Jl;Zl=a,(Jl=t)&&!o?vs(e,n,0!==(8772&n.subtreeFlags)):bs(e,n),Zl=i,Jl=o}512&r&&("manual"===n.memoizedProps.mode?Bl(n,n.return):Vl(n,n.return))}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ye(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var os=null,ls=!1;function ss(e,t,n){for(n=n.child;null!==n;)us(e,t,n),n=n.sibling}function us(e,t,n){if(ye&&"function"===typeof ye.onCommitFiberUnmount)try{ye.onCommitFiberUnmount(be,n)}catch(o){}switch(n.tag){case 26:Jl||Vl(n,t),ss(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Jl||Vl(n,t);var r=os,a=ls;for(os=n.stateNode,ss(e,t,n),t=(n=n.stateNode).attributes;t.length;)n.removeAttributeNode(t[0]);Ye(n),os=r,ls=a;break;case 5:Jl||Vl(n,t);case 6:a=os;var i=ls;if(os=null,ss(e,t,n),ls=i,null!==(os=a))if(ls)try{e=os,r=n.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)}catch(l){rc(n,t,l)}else try{os.removeChild(n.stateNode)}catch(l){rc(n,t,l)}break;case 18:null!==os&&(ls?(t=os,n=n.stateNode,8===t.nodeType?id(t.parentNode,n):1===t.nodeType&&id(t,n),mf(t)):id(os,n.stateNode));break;case 4:r=os,a=ls,os=n.stateNode.containerInfo,ls=!0,ss(e,t,n),os=r,ls=a;break;case 0:case 11:case 14:case 15:Jl||Ul(2,n,t),Jl||Ul(4,n,t),ss(e,t,n);break;case 1:Jl||(Vl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&Wl(n,t,r)),ss(e,t,n);break;case 21:ss(e,t,n);break;case 22:Jl||Vl(n,t),Jl=(r=Jl)||null!==n.memoizedState,ss(e,t,n),Jl=r;break;default:ss(e,t,n)}}function cs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{mf(e)}catch(n){rc(t,t.return,n)}}function ds(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new ts),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new ts),t;default:throw Error(o(435,e.tag))}}(e);t.forEach((function(t){var r=sc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function fs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:case 5:os=s.stateNode,ls=!1;break e;case 3:case 4:os=s.stateNode.containerInfo,ls=!0;break e}s=s.return}if(null===os)throw Error(o(160));us(i,l,a),os=null,ls=!1,null!==(i=a.alternate)&&(i.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)hs(t,e),t=t.sibling}var ps=null;function hs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fs(t,e),gs(e),4&r&&(Ul(3,e,e.return),Ml(3,e),Ul(5,e,e.return));break;case 1:fs(t,e),gs(e),512&r&&(Jl||null===n||Vl(n,n.return)),64&r&&Zl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=ps;if(fs(t,e),gs(e),512&r&&(Jl||null===n||Vl(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(i=a.getElementsByTagName("title")[0])||i[Ve]||i[$e]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=a.createElement(r),a.head.insertBefore(i,a.querySelector("head > title"))),Yc(i,r,n),i[$e]=e,Xe(i),r=i;break e;case"link":var l=Pd("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((i=l[s]).getAttribute("href")===(null==n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}Yc(i=a.createElement(r),r,n),a.head.appendChild(i);break;case"meta":if(l=Pd("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((i=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}Yc(i=a.createElement(r),r,n),a.head.appendChild(i);break;default:throw Error(o(468,r))}i[$e]=e,Xe(i),r=i}e.stateNode=r}else zd(a,e.type,e.stateNode);else e.stateNode=kd(a,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?zd(a,e.type,e.stateNode):kd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&ql(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(4&r&&null===e.alternate){a=e.stateNode,i=e.memoizedProps;try{for(var u=a.firstChild;u;){var c=u.nextSibling,d=u.nodeName;u[Ve]||"HEAD"===d||"BODY"===d||"SCRIPT"===d||"STYLE"===d||"LINK"===d&&"stylesheet"===u.rel.toLowerCase()||a.removeChild(u),u=c}for(var f=e.type,p=a.attributes;p.length;)a.removeAttributeNode(p[0]);Yc(a,f,i),a[$e]=e,a[Ie]=i}catch(g){rc(e,e.return,g)}}case 5:if(fs(t,e),gs(e),512&r&&(Jl||null===n||Vl(n,n.return)),32&e.flags){a=e.stateNode;try{kt(a,"")}catch(g){rc(e,e.return,g)}}4&r&&null!=e.stateNode&&ql(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(es=!0);break;case 6:if(fs(t,e),gs(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(g){rc(e,e.return,g)}}break;case 3:if(_d=null,a=ps,ps=fd(t.containerInfo),fs(t,e),ps=a,gs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{mf(t.containerInfo)}catch(g){rc(e,e.return,g)}es&&(es=!1,ms(e));break;case 4:r=ps,ps=fd(e.stateNode.containerInfo),fs(t,e),gs(e),ps=r;break;case 12:fs(t,e),gs(e);break;case 13:fs(t,e),gs(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(vu=se()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,ds(e,r)));break;case 22:if(512&r&&(Jl||null===n||Vl(n,n.return)),u=null!==e.memoizedState,c=null!==n&&null!==n.memoizedState,Zl=(d=Zl)||u,Jl=(f=Jl)||c,fs(t,e),Jl=f,Zl=d,gs(e),(t=e.stateNode)._current=e,t._visibility&=-3,t._visibility|=2&t._pendingVisibility,8192&r&&(t._visibility=u?-2&t._visibility:1|t._visibility,u&&(t=Zl||Jl,null===n||c||t||ys(e)),null===e.memoizedProps||"manual"!==e.memoizedProps.mode))e:for(n=null,t=e;;){if(5===t.tag||26===t.tag||27===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,u)"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none";else{l=c.stateNode;var h=void 0!==(s=c.memoizedProps.style)&&null!==s&&s.hasOwnProperty("display")?s.display:null;l.style.display=null==h||"boolean"===typeof h?"":(""+h).trim()}}catch(g){rc(c,c.return,g)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(g){rc(c,c.return,g)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,ds(e,n))));break;case 19:fs(t,e),gs(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,ds(e,r)));break;case 21:break;default:fs(t,e),gs(e)}}function gs(e){var t=e.flags;if(2&t){try{if(27!==e.tag){e:{for(var n=e.return;null!==n;){if(Kl(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 27:var a=r.stateNode;Xl(e,Ql(e),a);break;case 5:var i=r.stateNode;32&r.flags&&(kt(i,""),r.flags&=-33),Xl(e,Ql(e),i);break;case 3:case 4:var l=r.stateNode.containerInfo;Gl(e,Ql(e),l);break;default:throw Error(o(161))}}}catch(s){rc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ms(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;ms(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function bs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)as(e,t.alternate,t),t=t.sibling}function ys(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ul(4,t,t.return),ys(t);break;case 1:Vl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&Wl(t,t.return,n),ys(t);break;case 26:case 27:case 5:Vl(t,t.return),ys(t);break;case 22:Vl(t,t.return),null===t.memoizedState&&ys(t);break;default:ys(t)}e=e.sibling}}function vs(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:vs(a,i,n),Ml(4,i);break;case 1:if(vs(a,i,n),"function"===typeof(a=(r=i).stateNode).componentDidMount)try{a.componentDidMount()}catch(u){rc(r,r.return,u)}if(null!==(a=(r=i).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)$l(s[a],l)}catch(u){rc(r,r.return,u)}}n&&64&o&&Hl(i),Bl(i,i.return);break;case 26:case 27:case 5:vs(a,i,n),n&&null===r&&4&o&&Yl(i),Bl(i,i.return);break;case 12:default:vs(a,i,n);break;case 13:vs(a,i,n),n&&4&o&&cs(a,i);break;case 22:null===i.memoizedState&&vs(a,i,n),Bl(i,i.return)}t=t.sibling}}function xs(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ua(n))}function ws(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ua(e))}function ks(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Ss(e,t,n,r),t=t.sibling}function Ss(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ks(e,t,n,r),2048&a&&Ml(9,t);break;case 3:ks(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ua(e)));break;case 12:if(2048&a){ks(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,l=i.onPostCommit;"function"===typeof l&&l(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){rc(t,t.return,s)}}else ks(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,null!==t.memoizedState?4&i._visibility?ks(e,t,n,r):Cs(e,t):4&i._visibility?ks(e,t,n,r):(i._visibility|=4,Es(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&a&&xs(t.alternate,t);break;case 24:ks(e,t,n,r),2048&a&&ws(t.alternate,t);break;default:ks(e,t,n,r)}}function Es(e,t,n,r,a){for(a=a&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var i=e,o=t,l=n,s=r,u=o.flags;switch(o.tag){case 0:case 11:case 15:Es(i,o,l,s,a),Ml(8,o);break;case 23:break;case 22:var c=o.stateNode;null!==o.memoizedState?4&c._visibility?Es(i,o,l,s,a):Cs(i,o):(c._visibility|=4,Es(i,o,l,s,a)),a&&2048&u&&xs(o.alternate,o);break;case 24:Es(i,o,l,s,a),a&&2048&u&&ws(o.alternate,o);break;default:Es(i,o,l,s,a)}t=t.sibling}}function Cs(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Cs(n,r),2048&a&&xs(r.alternate,r);break;case 24:Cs(n,r),2048&a&&ws(r.alternate,r);break;default:Cs(n,r)}t=t.sibling}}var _s=8192;function Ps(e){if(e.subtreeFlags&_s)for(e=e.child;null!==e;)zs(e),e=e.sibling}function zs(e){switch(e.tag){case 26:Ps(e),e.flags&_s&&null!==e.memoizedState&&function(e,t,n){if(null===Nd)throw Error(o(475));var r=Nd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var a=bd(n.href),i=e.querySelector(yd(a));if(i)return null!==(e=i._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Ld.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=i,void Xe(i);i=e.ownerDocument||e,n=vd(n),(a=cd.get(a))&&Ed(n,a),Xe(i=i.createElement("link"));var l=i;l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),Yc(i,"link",n),t.instance=i}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Ld.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(ps,e.memoizedState,e.memoizedProps);break;case 5:default:Ps(e);break;case 3:case 4:var t=ps;ps=fd(e.stateNode.containerInfo),Ps(e),ps=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=_s,_s=16777216,Ps(e),_s=t):Ps(e))}}function Ts(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ns(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ns=r,js(r,e)}Ts(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Os(e),e=e.sibling}function Os(e){switch(e.tag){case 0:case 11:case 15:Ns(e),2048&e.flags&&Ul(9,e,e.return);break;case 3:case 12:default:Ns(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&4&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-5,Ls(e)):Ns(e)}}function Ls(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ns=r,js(r,e)}Ts(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Ul(8,t,t.return),Ls(t);break;case 22:4&(n=t.stateNode)._visibility&&(n._visibility&=-5,Ls(t));break;default:Ls(t)}e=e.sibling}}function js(e,t){for(;null!==ns;){var n=ns;switch(n.tag){case 0:case 11:case 15:Ul(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ua(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,ns=r;else e:for(n=e;null!==ns;){var a=(r=ns).sibling,i=r.return;if(is(r),r===n){ns=null;break e}if(null!==a){a.return=i,ns=a;break e}ns=i}}}function Rs(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function As(e,t,n,r){return new Rs(e,t,n,r)}function Ds(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Fs(e,t){var n=e.alternate;return null===n?((n=As(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=31457280&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function $s(e,t){e.flags&=31457282;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Is(e,t,n,r,a,i){var l=0;if(r=e,"function"===typeof e)Ds(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,Q.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case d:return Ms(n.children,a,i,t);case f:l=8,a|=24;break;case p:return(e=As(12,n,t,2|a)).elementType=p,e.lanes=i,e;case y:return(e=As(13,n,t,a)).elementType=y,e.lanes=i,e;case v:return(e=As(19,n,t,a)).elementType=v,e.lanes=i,e;case k:return Us(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case h:case m:l=10;break e;case g:l=9;break e;case b:l=11;break e;case x:l=14;break e;case w:l=16,r=null;break e}l=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=As(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Ms(e,t,n,r){return(e=As(7,e,r,t)).lanes=n,e}function Us(e,t,n,r){(e=As(22,e,r,t)).elementType=k,e.lanes=n;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=a._current;if(null===e)throw Error(o(456));if(0===(2&a._pendingVisibility)){var t=Tr(e,2);null!==t&&(a._pendingVisibility|=2,Lu(t,e,2))}},attach:function(){var e=a._current;if(null===e)throw Error(o(456));if(0!==(2&a._pendingVisibility)){var t=Tr(e,2);null!==t&&(a._pendingVisibility&=-3,Lu(t,e,2))}}};return e.stateNode=a,e}function Hs(e,t,n){return(e=As(6,e,null,t)).lanes=n,e}function Ws(e,t,n){return(t=As(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bs(e){e.flags|=4}function Vs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Td(t)){if(null!==(t=za.current)&&((4194176&ru)===ru?null!==Ta:(62914560&ru)!==ru&&0===(536870912&ru)||t!==Ta))throw fa=sa,la;e.flags|=8192}}function Ys(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ne():536870912,e.lanes|=t,gu|=t)}function qs(e,t){if(!Gr)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ks(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=31457280&a.subtreeFlags,r|=31457280&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qs(e,t,n){var r=t.pendingProps;switch(qr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Ks(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),vl(Ia),ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ra(t)?Bs(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==Xr&&(Ru(Xr),Xr=null))),Ks(t),null;case 26:return n=t.memoizedState,null===e?(Bs(t),null!==n?(Ks(t),Vs(t,n)):(Ks(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Bs(t),Ks(t),Vs(t,n)):(Ks(t),t.flags&=-16777217):(e.memoizedProps!==r&&Bs(t),Ks(t),t.flags&=-16777217),null;case 27:ne(t),n=X.current;var a=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Bs(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ks(t),null}e=Q.current,ra(t)?ta(t):(e=ud(a,r,n),t.stateNode=e,Bs(t))}return Ks(t),null;case 5:if(ne(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Bs(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ks(t),null}if(e=Q.current,ra(t))ta(t);else{switch(a=Qc(X.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?a.createElement(n,{is:r.is}):a.createElement(n)}}e[$e]=t,e[Ie]=r;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(Yc(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Bs(t)}}return Ks(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Bs(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=X.current,ra(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=Kr))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[$e]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Hc(e.nodeValue,n)))||ea(t)}else(e=Qc(e).createTextNode(r))[$e]=t,t.stateNode=e}return Ks(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ra(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[$e]=t}else aa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ks(t),a=!1}else null!==Xr&&(Ru(Xr),Xr=null),a=!0;if(!a)return 256&t.flags?(ja(t),t):(ja(t),null)}if(ja(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool);var i=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ys(t,t.updateQueue),Ks(t),null;case 4:return ee(),null===e&&Lc(t.stateNode.containerInfo),Ks(t),null;case 10:return vl(t.type),Ks(t),null;case 19:if(q(Ra),null===(a=t.memoizedState))return Ks(t),null;if(r=0!==(128&t.flags),null===(i=a.rendering))if(r)qs(a,!1);else{if(0!==cu||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=Aa(e))){for(t.flags|=128,qs(a,!1),e=i.updateQueue,t.updateQueue=e,Ys(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)$s(n,e),n=n.sibling;return K(Ra,1&Ra.current|2),t.child}e=e.sibling}null!==a.tail&&se()>xu&&(t.flags|=128,r=!0,qs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Aa(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Ys(t,e),qs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!i.alternate&&!Gr)return Ks(t),null}else 2*se()-a.renderingStartTime>xu&&536870912!==n&&(t.flags|=128,r=!0,qs(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=a.last)?e.sibling=i:t.child=i,a.last=i)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,e=Ra.current,K(Ra,r?1&e|2:1&e),t):(Ks(t),null);case 22:case 23:return ja(t),Pa(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(Ks(t),6&t.subtreeFlags&&(t.flags|=8192)):Ks(t),null!==(n=t.updateQueue)&&Ys(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&q(Ka),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vl(Ia),Ks(t),null;case 25:return null}throw Error(o(156,t.tag))}function Gs(e,t){switch(qr(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return vl(Ia),ee(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return ne(t),null;case 13:if(ja(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));aa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return q(Ra),null;case 4:return ee(),null;case 10:return vl(t.type),null;case 22:case 23:return ja(t),Pa(),null!==e&&q(Ka),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return vl(Ia),null;default:return null}}function Xs(e,t){switch(qr(t),t.tag){case 3:vl(Ia),ee();break;case 26:case 27:case 5:ne(t);break;case 4:ee();break;case 13:ja(t);break;case 19:q(Ra);break;case 10:vl(t.type);break;case 22:case 23:ja(t),Pa(),null!==e&&q(Ka);break;case 24:vl(Ia)}}var Zs={getCacheForType:function(e){var t=Cl(Ia),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},Js="function"===typeof WeakMap?WeakMap:Map,eu=0,tu=null,nu=null,ru=0,au=0,iu=null,ou=!1,lu=!1,su=!1,uu=0,cu=0,du=0,fu=0,pu=0,hu=0,gu=0,mu=null,bu=null,yu=!1,vu=0,xu=1/0,wu=null,ku=null,Su=!1,Eu=null,Cu=0,_u=0,Pu=null,zu=0,Tu=null;function Nu(){if(0!==(2&eu)&&0!==ru)return ru&-ru;if(null!==N.T){return 0!==Ba?Ba:wc()}return De()}function Ou(){0===hu&&(hu=0===(536870912&ru)||Gr?Te():536870912);var e=za.current;return null!==e&&(e.flags|=32),hu}function Lu(e,t,n){(e===tu&&2===au||null!==e.cancelPendingCommit)&&(Mu(e,0),Fu(e,ru,hu,!1)),Le(e,n),0!==(2&eu)&&e===tu||(e===tu&&(0===(2&eu)&&(fu|=n),4===cu&&Fu(e,ru,hu,!1)),gc(e))}function ju(e,t,n){if(0!==(6&eu))throw Error(o(327));for(var r=!n&&0===(60&t)&&0===(t&e.expiredLanes)||Pe(e,t),a=r?function(e,t){var n=eu;eu|=2;var r=Hu(),a=Wu();tu!==e||ru!==t?(wu=null,xu=se()+500,Mu(e,t)):lu=Pe(e,t);e:for(;;)try{if(0!==au&&null!==nu){t=nu;var i=iu;t:switch(au){case 1:au=0,iu=null,Gu(e,t,i,1);break;case 2:if(ua(i)){au=0,iu=null,Qu(t);break}t=function(){2===au&&tu===e&&(au=7),gc(e)},i.then(t,t);break e;case 3:au=7;break e;case 4:au=5;break e;case 7:ua(i)?(au=0,iu=null,Qu(t)):(au=0,iu=null,Gu(e,t,i,7));break;case 5:var l=null;switch(nu.tag){case 26:l=nu.memoizedState;case 5:case 27:var s=nu;if(!l||Td(l)){au=0,iu=null;var u=s.sibling;if(null!==u)nu=u;else{var c=s.return;null!==c?(nu=c,Xu(c)):nu=null}break t}}au=0,iu=null,Gu(e,t,i,5);break;case 6:au=0,iu=null,Gu(e,t,i,6);break;case 8:Iu(),cu=6;break e;default:throw Error(o(462))}}qu();break}catch(d){Uu(e,d)}return bl=ml=null,N.H=r,N.A=a,eu=n,null!==nu?0:(tu=null,ru=0,_r(),cu)}(e,t):Vu(e,t,!0),i=r;;){if(0===a){lu&&!r&&Fu(e,t,0,!1);break}if(6===a)Fu(e,t,0,!ou);else{if(n=e.current.alternate,i&&!Du(n)){a=Vu(e,t,!1),i=!1;continue}if(2===a){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=mu;var u=s.current.memoizedState.isDehydrated;if(u&&(Mu(s,l).flags|=256),2!==(l=Vu(s,l,!1))){if(su&&!u){s.errorRecoveryDisabledLanes|=i,fu|=i,a=4;break e}i=bu,bu=a,null!==i&&Ru(i)}a=l}if(i=!1,2!==a)continue}}if(1===a){Mu(e,0),Fu(e,t,0,!0);break}e:{switch(r=e,a){case 0:case 1:throw Error(o(345));case 4:if((4194176&t)===t){Fu(r,t,hu,!ou);break e}break;case 2:bu=null;break;case 3:case 5:break;default:throw Error(o(329))}if(r.finishedWork=n,r.finishedLanes=t,(62914560&t)===t&&10<(i=vu+300-se())){if(Fu(r,t,hu,!ou),0!==_e(r,0))break e;r.timeoutHandle=ed(Au.bind(null,r,n,bu,wu,yu,t,hu,fu,gu,ou,2,-0,0),i)}else Au(r,n,bu,wu,yu,t,hu,fu,gu,ou,0,-0,0)}}break}gc(e)}function Ru(e){null===bu?bu=e:bu.push.apply(bu,e)}function Au(e,t,n,r,a,i,l,s,u,c,d,f,p){var h=t.subtreeFlags;if((8192&h||16785408===(16785408&h))&&(Nd={stylesheets:null,count:0,unsuspend:Od},zs(t),null!==(t=function(){if(null===Nd)throw Error(o(475));var e=Nd;return e.stylesheets&&0===e.count&&Rd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Rd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=t(Ju.bind(null,e,n,r,a,l,s,u,1,f,p)),void Fu(e,i,l,!c);Ju(e,n,r,a,l,s,u,d,f,p)}function Du(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Kn(i(),a))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fu(e,t,n,r){t&=~pu,t&=~fu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var i=31-xe(a),o=1<<i;r[i]=-1,a&=~o}0!==n&&je(e,n,t)}function $u(){return 0!==(6&eu)||(mc(0,!1),!1)}function Iu(){if(null!==nu){if(0===au)var e=nu.return;else bl=ml=null,bi(e=nu),ha=null,ga=0,e=nu;for(;null!==e;)Xs(e.alternate,e),e=e.return;nu=null}}function Mu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,td(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Iu(),tu=e,nu=n=Fs(e.current,null),ru=t,au=0,iu=null,ou=!1,lu=Pe(e,t),su=!1,gu=hu=pu=fu=du=cu=0,bu=mu=null,yu=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-xe(r),i=1<<a;t|=e[a],r&=~i}return uu=t,_r(),n}function Uu(e,t){Ja=null,N.H=Co,t===oa?(t=pa(),au=3):t===la?(t=pa(),au=4):au=t===Wo?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,iu=t,null===nu&&(cu=1,$o(e,Rr(t,e.current)))}function Hu(){var e=N.H;return N.H=Co,null===e?Co:e}function Wu(){var e=N.A;return N.A=Zs,e}function Bu(){cu=4,ou||(4194176&ru)!==ru&&null!==za.current||(lu=!0),0===(134217727&du)&&0===(134217727&fu)||null===tu||Fu(tu,ru,hu,!1)}function Vu(e,t,n){var r=eu;eu|=2;var a=Hu(),i=Wu();tu===e&&ru===t||(wu=null,Mu(e,t)),t=!1;var o=cu;e:for(;;)try{if(0!==au&&null!==nu){var l=nu,s=iu;switch(au){case 8:Iu(),o=6;break e;case 3:case 2:case 6:null===za.current&&(t=!0);var u=au;if(au=0,iu=null,Gu(e,l,s,u),n&&lu){o=0;break e}break;default:u=au,au=0,iu=null,Gu(e,l,s,u)}}Yu(),o=cu;break}catch(c){Uu(e,c)}return t&&e.shellSuspendCounter++,bl=ml=null,eu=r,N.H=a,N.A=i,null===nu&&(tu=null,ru=0,_r()),o}function Yu(){for(;null!==nu;)Ku(nu)}function qu(){for(;null!==nu&&!oe();)Ku(nu)}function Ku(e){var t=hl(e.alternate,e,uu);e.memoizedProps=e.pendingProps,null===t?Xu(e):nu=t}function Qu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jo(n,t,t.pendingProps,t.type,void 0,ru);break;case 11:t=Jo(n,t,t.pendingProps,t.type.render,t.ref,ru);break;case 5:bi(t);default:Xs(n,t),t=hl(n,t=nu=$s(t,uu),uu)}e.memoizedProps=e.pendingProps,null===t?Xu(e):nu=t}function Gu(e,t,n,r){bl=ml=null,bi(t),ha=null,ga=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&kl(t,n,a,!0),null!==(n=za.current)){switch(n.tag){case 13:return null===Ta?Bu():null===n.alternate&&0===cu&&(cu=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===sa?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),ac(e,r,a)),!1;case 22:return n.flags|=65536,r===sa?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),ac(e,r,a)),!1}throw Error(o(435,n.tag))}return ac(e,r,a),Bu(),!1}if(Gr)return null!==(t=za.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Jr&&ia(Rr(e=Error(o(422),{cause:r}),n))):(r!==Jr&&ia(Rr(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Rr(r,n),Rl(e,a=Mo(e.stateNode,r,a)),4!==cu&&(cu=2)),!1;var i=Error(o(520),{cause:r});if(i=Rr(i,n),null===mu?mu=[i]:mu.push(i),4!==cu&&(cu=2),null===t)return!0;r=Rr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,Rl(n,e=Mo(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===ku||!ku.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,Ho(a=Uo(a),e,n,r),Rl(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,ru))return cu=1,$o(e,Rr(n,e.current)),void(nu=null)}catch(i){if(null!==a)throw nu=a,i;return cu=1,$o(e,Rr(n,e.current)),void(nu=null)}32768&t.flags?(Gr||1===r?e=!0:lu||0!==(536870912&ru)?e=!1:(ou=e=!0,(2===r||3===r||6===r)&&(null!==(r=za.current)&&13===r.tag&&(r.flags|=16384))),Zu(t,e)):Xu(t)}function Xu(e){var t=e;do{if(0!==(32768&t.flags))return void Zu(t,ou);e=t.return;var n=Qs(t.alternate,t,uu);if(null!==n)return void(nu=n);if(null!==(t=t.sibling))return void(nu=t);nu=t=e}while(null!==t);0===cu&&(cu=5)}function Zu(e,t){do{var n=Gs(e.alternate,e);if(null!==n)return n.flags&=32767,void(nu=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(nu=e);nu=e=n}while(null!==e);cu=6,nu=null}function Ju(e,t,n,r,a,i,l,s,u,c){var d=N.T,f=H.p;try{H.p=2,N.T=null,function(e,t,n,r,a,i,l,s){do{tc()}while(null!==Eu);if(0!==(6&eu))throw Error(o(327));var u=e.finishedWork;if(r=e.finishedLanes,null===u)return null;if(e.finishedWork=null,e.finishedLanes=0,u===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var c=u.lanes|u.childLanes;if(function(e,t,n,r,a,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(n=o&~n;0<n;){var c=31-xe(n),d=1<<c;l[c]=0,s[c]=-1;var f=u[c];if(null!==f)for(u[c]=null,c=0;c<f.length;c++){var p=f[c];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&je(e,r,0),0!==i&&0===a&&0!==e.tag&&(e.suspendedLanes|=i&~(o&~t))}(e,r,c|=Cr,i,l,s),e===tu&&(nu=tu=null,ru=0),0===(10256&u.subtreeFlags)&&0===(10256&u.flags)||Su||(Su=!0,_u=c,Pu=n,function(e,t){ae(e,t)}(fe,(function(){return tc(),null}))),n=0!==(15990&u.flags),0!==(15990&u.subtreeFlags)||n?(n=N.T,N.T=null,i=H.p,H.p=2,l=eu,eu|=4,function(e,t){if(e=e.containerInfo,qc=Bd,er(e=Jn(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(m){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kc={focusedElem:e,selectionRange:n},Bd=!1,ns=t;null!==ns;)if(e=(t=ns).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,ns=e;else for(;null!==ns;){switch(i=(t=ns).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var g=jo(n.type,a,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(g,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(b){rc(n,n.return,b)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))od(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":od(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,ns=e;break}ns=t.return}g=rs,rs=!1}(e,u),hs(u,e),tr(Kc,e.containerInfo),Bd=!!qc,Kc=qc=null,e.current=u,as(e,u.alternate,u),le(),eu=l,H.p=i,N.T=n):e.current=u,Su?(Su=!1,Eu=e,Cu=r):ec(e,c),c=e.pendingLanes,0===c&&(ku=null),function(e){if(ye&&"function"===typeof ye.onCommitFiberRoot)try{ye.onCommitFiberRoot(be,e,void 0,128===(128&e.current.flags))}catch(t){}}(u.stateNode),gc(e),null!==t)for(a=e.onRecoverableError,u=0;u<t.length;u++)c=t[u],a(c.value,{componentStack:c.stack});0!==(3&Cu)&&tc(),c=e.pendingLanes,0!==(4194218&r)&&0!==(42&c)?e===Tu?zu++:(zu=0,Tu=e):zu=0,mc(0,!1)}(e,t,n,r,f,a,i,l)}finally{N.T=d,H.p=f}}function ec(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ua(t)))}function tc(){if(null!==Eu){var e=Eu,t=_u;_u=0;var n=Ae(Cu),r=N.T,a=H.p;try{if(H.p=32>n?32:n,N.T=null,null===Eu)var i=!1;else{n=Pu,Pu=null;var l=Eu,s=Cu;if(Eu=null,Cu=0,0!==(6&eu))throw Error(o(331));var u=eu;if(eu|=4,Os(l.current),Ss(l,l.current,s,n),eu=u,mc(0,!1),ye&&"function"===typeof ye.onPostCommitFiberRoot)try{ye.onPostCommitFiberRoot(be,l)}catch(c){}i=!0}return i}finally{H.p=a,N.T=r,ec(e,t)}}return!1}function nc(e,t,n){t=Rr(n,t),null!==(e=Ll(e,t=Mo(e.stateNode,t,2),2))&&(Le(e,2),gc(e))}function rc(e,t,n){if(3===e.tag)nc(e,e,n);else for(;null!==t;){if(3===t.tag){nc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===ku||!ku.has(r))){e=Rr(n,e),null!==(r=Ll(t,n=Uo(2),2))&&(Ho(n,r,t,e),Le(r,2),gc(r));break}}t=t.return}}function ac(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Js;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(su=!0,a.add(n),e=ic.bind(null,e,t,n),t.then(e,e))}function ic(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tu===e&&(ru&n)===n&&(4===cu||3===cu&&(62914560&ru)===ru&&300>se()-vu?0===(2&eu)&&Mu(e,0):pu|=n,gu===ru&&(gu=0)),gc(e)}function oc(e,t){0===t&&(t=Ne()),null!==(e=Tr(e,t))&&(Le(e,t),gc(e))}function lc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),oc(e,n)}function sc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),oc(e,n)}var uc=null,cc=null,dc=!1,fc=!1,pc=!1,hc=0;function gc(e){var t;e!==cc&&null===e.next&&(null===cc?uc=cc=e:cc=cc.next=e),fc=!0,dc||(dc=!0,t=bc,rd((function(){0!==(6&eu)?ae(ce,t):t()})))}function mc(e,t){if(!pc&&fc){pc=!0;do{for(var n=!1,r=uc;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var i=0;else{var o=r.suspendedLanes,l=r.pingedLanes;i=(1<<31-xe(42|e)+1)-1,i=201326677&(i&=a&~(o&~l))?201326677&i|1:i?2|i:0}0!==i&&(n=!0,xc(r,i))}else i=ru,0===(3&(i=_e(r,r===tu?i:0)))||Pe(r,i)||(n=!0,xc(r,i));r=r.next}}while(n);pc=!1}}function bc(){fc=dc=!1;var e=0;0!==hc&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Jc&&(Jc=e,!0);return Jc=null,!1}()&&(e=hc),hc=0);for(var t=se(),n=null,r=uc;null!==r;){var a=r.next,i=yc(r,t);0===i?(r.next=null,null===n?uc=a:n.next=a,null===a&&(cc=n)):(n=r,(0!==e||0!==(3&i))&&(fc=!0)),r=a}mc(e,!1)}function yc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var o=31-xe(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=ze(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}if(n=ru,n=_e(e,e===(t=tu)?n:0),r=e.callbackNode,0===n||e===t&&2===au||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ie(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Pe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ie(r),Ae(n)){case 2:case 8:n=de;break;case 32:default:n=fe;break;case 268435456:n=he}return r=vc.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ie(r),e.callbackPriority=2,e.callbackNode=null,2}function vc(e,t){var n=e.callbackNode;if(tc()&&e.callbackNode!==n)return null;var r=ru;return 0===(r=_e(e,e===tu?r:0))?null:(ju(e,r,t),yc(e,se()),null!=e.callbackNode&&e.callbackNode===n?vc.bind(null,e):null)}function xc(e,t){if(tc())return null;ju(e,t,!0)}function wc(){return 0===hc&&(hc=Te()),hc}function kc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Tt(""+e)}function Sc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Ec=0;Ec<wr.length;Ec++){var Cc=wr[Ec];kr(Cc.toLowerCase(),"on"+(Cc[0].toUpperCase()+Cc.slice(1)))}kr(pr,"onAnimationEnd"),kr(hr,"onAnimationIteration"),kr(gr,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(mr,"onTransitionRun"),kr(br,"onTransitionStart"),kr(yr,"onTransitionCancel"),kr(vr,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _c="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pc=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_c));function zc(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=u;try{i(a)}catch(c){Ro(c)}a.currentTarget=null,i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=u;try{i(a)}catch(c){Ro(c)}a.currentTarget=null,i=s}}}}function Tc(e,t){var n=t[Ue];void 0===n&&(n=t[Ue]=new Set);var r=e+"__bubble";n.has(r)||(jc(t,e,2,!1),n.add(r))}function Nc(e,t,n){var r=0;t&&(r|=4),jc(n,e,r,t)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Lc(e){if(!e[Oc]){e[Oc]=!0,Ze.forEach((function(t){"selectionchange"!==t&&(Pc.has(t)||Nc(t,!1,e),Nc(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Oc]||(t[Oc]=!0,Nc("selectionchange",!1,t))}}function jc(e,t,n,r){switch(Xd(t)){case 2:var a=Vd;break;case 8:a=Yd;break;default:a=qd}n=a.bind(null,t,n,e),a=void 0,!$t||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Rc(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=qe(l)))return;if(5===(s=o.tag)||6===s||26===s||27===s){r=i=o;continue e}l=l.parentNode}}r=r.return}Dt((function(){var r=i,a=Ot(n),o=[];e:{var l=xr.get(e);if(void 0!==l){var s=Zt,u=e;switch(e){case"keypress":if(0===Bt(n))break e;case"keydown":case"keyup":s=hn;break;case"focusin":u="focus",s=an;break;case"focusout":u="blur",s=an;break;case"beforeblur":case"afterblur":s=an;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=rn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=mn;break;case pr:case hr:case gr:s=on;break;case vr:s=bn;break;case"scroll":case"scrollend":s=en;break;case"wheel":s=yn;break;case"copy":case"cut":case"paste":s=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=gn;break;case"toggle":case"beforetoggle":s=vn}var c=0!==(4&t),d=!c&&("scroll"===e||"scrollend"===e),f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var g=h;if(p=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===p||null===f||null!=(g=Ft(h,f))&&c.push(Ac(h,g,p)),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Nt||!(u=n.relatedTarget||n.fromElement)||!qe(u)&&!u[Me])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?qe(u):null)&&(d=F(u),c=u.tag,u!==d||5!==c&&27!==c&&6!==c)&&(u=null)):(s=null,u=r),s!==u)){if(c=nn,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=gn,g="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:Qe(s),p=null==u?l:Qe(u),(l=new c(g,h+"leave",s,n,a)).target=d,l.relatedTarget=p,g=null,qe(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,g=c),d=g,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Fc(p))h++;for(p=0,g=f;g;g=Fc(g))p++;for(;0<h-p;)c=Fc(c),h--;for(;0<p-h;)f=Fc(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Fc(c),f=Fc(f)}c=null}else c=null;null!==s&&$c(o,l,s,c,!1),null!==u&&null!==d&&$c(o,d,u,c,!0)}if("select"===(s=(l=r?Qe(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var m=Fn;else if(On(l))if($n)m=qn;else{m=Vn;var b=Bn}else!(s=l.nodeName)||"input"!==s.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&_t(r.elementType)&&(m=Fn):m=Yn;switch(m&&(m=m(e,r))?Ln(o,m,n,a):(b&&b(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&yt(l,"number",l.value)),b=r?Qe(r):window,e){case"focusin":(On(b)||"true"===b.contentEditable)&&(rr=b,ar=r,ir=null);break;case"focusout":ir=ar=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,lr(o,n,a);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":lr(o,n,a)}var y;if(wn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Tn?Pn(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(En&&"ko"!==n.locale&&(Tn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Tn&&(y=Wt()):(Ut="value"in(Mt=a)?Mt.value:Mt.textContent,Tn=!0)),0<(b=Dc(r,v)).length&&(v=new sn(v,e,null,n,a),o.push({event:v,listeners:b}),y?v.data=y:null!==(y=zn(n))&&(v.data=y))),(y=Sn?function(e,t){switch(e){case"compositionend":return zn(t);case"keypress":return 32!==t.which?null:(_n=!0,Cn);case"textInput":return(e=t.data)===Cn&&_n?null:e;default:return null}}(e,n):function(e,t){if(Tn)return"compositionend"===e||!wn&&Pn(e,t)?(e=Wt(),Ht=Ut=Mt=null,Tn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return En&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(v=Dc(r,"onBeforeInput")).length&&(b=new sn("onBeforeInput","beforeinput",null,n,a),o.push({event:b,listeners:v}),b.data=y)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var i=kc((a[Ie]||null).action),o=r.submitter;o&&null!==(t=(t=o[Ie]||null)?kc(t.formAction):o.getAttribute("formAction"))&&(i=t,o=null);var l=new Zt("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==hc){var e=o?Sc(a,o):new FormData(a);co(n,{pending:!0,data:e,method:a.method,action:i},null,e)}}else"function"===typeof i&&(l.preventDefault(),e=o?Sc(a,o):new FormData(a),co(n,{pending:!0,data:e,method:a.method,action:i},i,e))},currentTarget:a}]})}}(o,e,r,n,a)}zc(o,t)}))}function Ac(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dc(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5!==(a=a.tag)&&26!==a&&27!==a||null===i||(null!=(a=Ft(e,n))&&r.unshift(Ac(e,a,i)),null!=(a=Ft(e,t))&&r.push(Ac(e,a,i))),e=e.return}return r}function Fc(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function $c(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===u||(s=u,a?null!=(u=Ft(n,i))&&o.unshift(Ac(n,u,s)):a||null!=(u=Ft(n,i))&&o.push(Ac(n,u,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Ic=/\r\n?/g,Mc=/\u0000|\uFFFD/g;function Uc(e){return("string"===typeof e?e:""+e).replace(Ic,"\n").replace(Mc,"")}function Hc(e,t){return t=Uc(t),Uc(e)===t}function Wc(){}function Bc(e,t,n,r,a,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||kt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&kt(e,""+r);break;case"className":lt(e,"class",r);break;case"tabIndex":lt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":lt(e,n,r);break;case"style":Ct(e,r,i);break;case"data":if("object"!==t){lt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Tt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&Bc(e,t,"name",a.name,a,null),Bc(e,t,"formEncType",a.formEncType,a,null),Bc(e,t,"formMethod",a.formMethod,a,null),Bc(e,t,"formTarget",a.formTarget,a,null)):(Bc(e,t,"encType",a.encType,a,null),Bc(e,t,"method",a.method,a,null),Bc(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Tt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Wc);break;case"onScroll":null!=r&&Tc("scroll",e);break;case"onScrollEnd":null!=r&&Tc("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Tt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Tc("beforetoggle",e),Tc("toggle",e),ot(e,"popover",r);break;case"xlinkActuate":st(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":st(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":st(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":st(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":st(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":st(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":st(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":st(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":st(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ot(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&ot(e,n=Pt.get(n)||n,r)}}function Vc(e,t,n,r,a,i){switch(n){case"style":Ct(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?kt(e,r):("number"===typeof r||"bigint"===typeof r)&&kt(e,""+r);break;case"onScroll":null!=r&&Tc("scroll",e);break;case"onScrollEnd":null!=r&&Tc("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Wc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Je.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(i=null!=(i=e[Ie]||null)?i[n]:null)&&e.removeEventListener(t,i,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):ot(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function Yc(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tc("error",e),Tc("load",e);var r,a=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Bc(e,t,r,l,n,null)}}return i&&Bc(e,t,"srcSet",n.srcSet,n,null),void(a&&Bc(e,t,"src",n.src,n,null));case"input":Tc("invalid",e);var s=r=l=i=null,u=null,c=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":i=d;break;case"type":l=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Bc(e,t,a,d,n,null)}}return bt(e,r,s,u,c,l,i,!1),void dt(e);case"select":for(i in Tc("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:Bc(e,t,i,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?vt(e,!!a,t,!1):null!=n&&vt(e,!!a,n,!0));case"textarea":for(l in Tc("invalid",e),r=i=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(o(91));break;default:Bc(e,t,l,s,n,null)}return wt(e,a,i,r),void dt(e);case"option":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))if("selected"===u)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else Bc(e,t,u,a,n,null);return;case"dialog":Tc("cancel",e),Tc("close",e);break;case"iframe":case"object":Tc("load",e);break;case"video":case"audio":for(a=0;a<_c.length;a++)Tc(_c[a],e);break;case"image":Tc("error",e),Tc("load",e);break;case"details":Tc("toggle",e);break;case"embed":case"source":case"link":Tc("error",e),Tc("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Bc(e,t,c,a,n,null)}return;default:if(_t(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&Vc(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&Bc(e,t,s,a,n,null))}var qc=null,Kc=null;function Qc(e){return 9===e.nodeType?e:e.ownerDocument}function Gc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xc(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Zc(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Jc=null;var ed="function"===typeof setTimeout?setTimeout:void 0,td="function"===typeof clearTimeout?clearTimeout:void 0,nd="function"===typeof Promise?Promise:void 0,rd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof nd?function(e){return nd.resolve(null).then(e).catch(ad)}:ed;function ad(e){setTimeout((function(){throw e}))}function id(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void mf(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);mf(t)}function od(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":od(n),Ye(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function ld(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function ud(e,t,n){switch(t=Qc(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}var cd=new Map,dd=new Set;function fd(e){return"function"===typeof e.getRootNode?e.getRootNode():e.ownerDocument}var pd=H.d;H.d={f:function(){var e=pd.f(),t=$u();return e||t},r:function(e){var t=Ke(e);null!==t&&5===t.tag&&"form"===t.type?po(t):pd.r(e)},D:function(e){pd.D(e),gd("dns-prefetch",e,null)},C:function(e,t){pd.C(e,t),gd("preconnect",e,t)},L:function(e,t,n){pd.L(e,t,n);var r=hd;if(r&&e&&t){var a='link[rel="preload"][as="'+gt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+gt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+gt(n.imageSizes)+'"]')):a+='[href="'+gt(e)+'"]';var i=a;switch(t){case"style":i=bd(e);break;case"script":i=xd(e)}cd.has(i)||(e=O({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),cd.set(i,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(yd(i))||"script"===t&&r.querySelector(wd(i))||(Yc(t=r.createElement("link"),"link",e),Xe(t),r.head.appendChild(t)))}},m:function(e,t){pd.m(e,t);var n=hd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+gt(r)+'"][href="'+gt(e)+'"]',i=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=xd(e)}if(!cd.has(i)&&(e=O({rel:"modulepreload",href:e},t),cd.set(i,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wd(i)))return}Yc(r=n.createElement("link"),"link",e),Xe(r),n.head.appendChild(r)}}},X:function(e,t){pd.X(e,t);var n=hd;if(n&&e){var r=Ge(n).hoistableScripts,a=xd(e),i=r.get(a);i||((i=n.querySelector(wd(a)))||(e=O({src:e,async:!0},t),(t=cd.get(a))&&Cd(e,t),Xe(i=n.createElement("script")),Yc(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}},S:function(e,t,n){pd.S(e,t,n);var r=hd;if(r&&e){var a=Ge(r).hoistableStyles,i=bd(e);t=t||"default";var o=a.get(i);if(!o){var l={loading:0,preload:null};if(o=r.querySelector(yd(i)))l.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},n),(n=cd.get(i))&&Ed(e,n);var s=o=r.createElement("link");Xe(s),Yc(s,"link",e),s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),s.addEventListener("load",(function(){l.loading|=1})),s.addEventListener("error",(function(){l.loading|=2})),l.loading|=4,Sd(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:l},a.set(i,o)}}},M:function(e,t){pd.M(e,t);var n=hd;if(n&&e){var r=Ge(n).hoistableScripts,a=xd(e),i=r.get(a);i||((i=n.querySelector(wd(a)))||(e=O({src:e,async:!0,type:"module"},t),(t=cd.get(a))&&Cd(e,t),Xe(i=n.createElement("script")),Yc(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}};var hd="undefined"===typeof document?null:document;function gd(e,t,n){var r=hd;if(r&&"string"===typeof t&&t){var a=gt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),dd.has(a)||(dd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(Yc(t=r.createElement("link"),"link",e),Xe(t),r.head.appendChild(t)))}}function md(e,t,n,r){var a,i,l,s,u=(u=X.current)?fd(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=bd(n.href),(r=(n=Ge(u).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=bd(n.href);var c=Ge(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(yd(e)))&&!c._p&&(d.instance=c,d.state.loading=5),cd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},cd.set(e,n),c||(a=u,i=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+i+"]")?s.loading=1:(i=a.createElement("link"),s.preload=i,i.addEventListener("load",(function(){return s.loading|=1})),i.addEventListener("error",(function(){return s.loading|=2})),Yc(i,"link",l),Xe(i),a.head.appendChild(i))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=xd(n),(r=(n=Ge(u).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function bd(e){return'href="'+gt(e)+'"'}function yd(e){return'link[rel="stylesheet"]['+e+"]"}function vd(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function xd(e){return'[src="'+gt(e)+'"]'}function wd(e){return"script[async]"+e}function kd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+gt(n.href)+'"]');if(r)return t.instance=r,Xe(r),r;var a=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Xe(r=(e.ownerDocument||e).createElement("style")),Yc(r,"style",a),Sd(r,n.precedence,e),t.instance=r;case"stylesheet":a=bd(n.href);var i=e.querySelector(yd(a));if(i)return t.state.loading|=4,t.instance=i,Xe(i),i;r=vd(n),(a=cd.get(a))&&Ed(r,a),Xe(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),Yc(i,"link",r),t.state.loading|=4,Sd(i,n.precedence,e),t.instance=i;case"script":return i=xd(n.src),(a=e.querySelector(wd(i)))?(t.instance=a,Xe(a),a):(r=n,(a=cd.get(i))&&Cd(r=O({},n),a),Xe(a=(e=e.ownerDocument||e).createElement("script")),Yc(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Sd(r,n.precedence,e));return t.instance}function Sd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,o=0;o<r.length;o++){var l=r[o];if(l.dataset.precedence===t)i=l;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Ed(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Cd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var _d=null;function Pd(e,t,n){if(null===_d){var r=new Map,a=_d=new Map;a.set(n,r)}else(r=(a=_d).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Ve]||i[$e]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var o=i.getAttribute(t)||"";o=e+o;var l=r.get(o);l?l.push(i):r.set(o,[i])}}return r}function zd(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Td(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Nd=null;function Od(){}function Ld(){if(this.count--,0===this.count)if(this.stylesheets)Rd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var jd=null;function Rd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,jd=new Map,t.forEach(Ad,e),jd=null,Ld.call(e))}function Ad(e,t){if(!(4&t.state.loading)){var n=jd.get(e);if(n)var r=n.get(null);else{n=new Map,jd.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(a=t.instance).getAttribute("data-precedence"),(i=n.get(o)||r)===r&&n.set(null,a),n.set(o,a),this.count++,r=Ld.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var Dd={$$typeof:m,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Fd(e,t,n,r,a,i,o,l){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oe(0),this.hiddenUpdates=Oe(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function $d(e,t,n,r,a,i,o,l,s,u,c,d){return e=new Fd(e,t,n,o,l,s,u,d),t=1,!0===i&&(t|=24),i=As(3,null,null,t),e.current=i,i.stateNode=e,(t=Ma()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},Tl(i),e}function Id(e){return e?e=Lr:Lr}function Md(e,t,n,r,a,i){a=Id(a),null===r.context?r.context=a:r.pendingContext=a,(r=Ol(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=Ll(e,r,t))&&(Lu(n,0,t),jl(n,e,t))}function Ud(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Hd(e,t){Ud(e,t),(e=e.alternate)&&Ud(e,t)}function Wd(e){if(13===e.tag){var t=Tr(e,67108864);null!==t&&Lu(t,0,67108864),Hd(e,67108864)}}var Bd=!0;function Vd(e,t,n,r){var a=N.T;N.T=null;var i=H.p;try{H.p=2,qd(e,t,n,r)}finally{H.p=i,N.T=a}}function Yd(e,t,n,r){var a=N.T;N.T=null;var i=H.p;try{H.p=8,qd(e,t,n,r)}finally{H.p=i,N.T=a}}function qd(e,t,n,r){if(Bd){var a=Kd(r);if(null===a)Rc(e,t,r,Qd,n),lf(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Jd=sf(Jd,e,t,n,r,a),!0;case"dragenter":return ef=sf(ef,e,t,n,r,a),!0;case"mouseover":return tf=sf(tf,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return nf.set(i,sf(nf.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,rf.set(i,sf(rf.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(lf(e,r),4&t&&-1<of.indexOf(e)){for(;null!==a;){var i=Ke(a);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var o=Ce(i.pendingLanes);if(0!==o){var l=i;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var s=1<<31-xe(o);l.entanglements[1]|=s,o&=~s}gc(i),0===(6&eu)&&(xu=se()+500,mc(0,!1))}}break;case 13:null!==(l=Tr(i,2))&&Lu(l,0,2),$u(),Hd(i,2)}if(null===(i=Kd(r))&&Rc(e,t,r,Qd,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Rc(e,t,r,null,n)}}function Kd(e){return Gd(e=Ot(e))}var Qd=null;function Gd(e){if(Qd=null,null!==(e=qe(e))){var t=F(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=$(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qd=e,null}function Xd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ue()){case ce:return 2;case de:return 8;case fe:case pe:return 32;case he:return 268435456;default:return 32}default:return 32}}var Zd=!1,Jd=null,ef=null,tf=null,nf=new Map,rf=new Map,af=[],of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lf(e,t){switch(e){case"focusin":case"focusout":Jd=null;break;case"dragenter":case"dragleave":ef=null;break;case"mouseover":case"mouseout":tf=null;break;case"pointerover":case"pointerout":nf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rf.delete(t.pointerId)}}function sf(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=Ke(t))&&Wd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function uf(e){var t=qe(e.target);if(null!==t){var n=F(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$(n)))return e.blockedOn=t,void function(e,t){var n=H.p;try{return H.p=e,t()}finally{H.p=n}}(e.priority,(function(){if(13===n.tag){var e=Nu(),t=Tr(n,e);null!==t&&Lu(t,0,e),Hd(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function cf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kd(e.nativeEvent);if(null!==n)return null!==(t=Ke(n))&&Wd(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Nt=r,n.target.dispatchEvent(r),Nt=null,t.shift()}return!0}function df(e,t,n){cf(e)&&n.delete(t)}function ff(){Zd=!1,null!==Jd&&cf(Jd)&&(Jd=null),null!==ef&&cf(ef)&&(ef=null),null!==tf&&cf(tf)&&(tf=null),nf.forEach(df),rf.forEach(df)}function pf(e,t){e.blockedOn===t&&(e.blockedOn=null,Zd||(Zd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ff)))}var hf=null;function gf(e){hf!==e&&(hf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){hf===e&&(hf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===Gd(r||n))continue;break}var i=Ke(n);null!==i&&(e.splice(t,3),t-=3,co(i,{pending:!0,data:a,method:n.method,action:r},r,a))}})))}function mf(e){function t(t){return pf(t,e)}null!==Jd&&pf(Jd,e),null!==ef&&pf(ef,e),null!==tf&&pf(tf,e),nf.forEach(t),rf.forEach(t);for(var n=0;n<af.length;n++){var r=af[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<af.length&&null===(n=af[0]).blockedOn;)uf(n),null===n.blockedOn&&af.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],i=n[r+1],o=a[Ie]||null;if("function"===typeof i)o||gf(n);else if(o){var l=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[Ie]||null)l=o.formAction;else if(null!==Gd(a))continue}else l=o.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),gf(n)}}}function bf(e){this._internalRoot=e}function yf(e){this._internalRoot=e}yf.prototype.render=bf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Md(t.current,Nu(),e,t,null,null)},yf.prototype.unmount=bf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;0===e.tag&&tc(),Md(e.current,2,null,e,null,null),$u(),t[Me]=null}},yf.prototype.unstable_scheduleHydration=function(e){if(e){var t=De();e={blockedOn:null,target:e,priority:t};for(var n=0;n<af.length&&0!==t&&t<af[n].priority;n++);af.splice(n,0,e),0===n&&uf(e)}};var vf=a.version;if("19.0.0"!==vf)throw Error(o(527,vf,"19.0.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=F(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return I(a),e;if(i===r)return I(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?M(e):null)?null:e.stateNode};var xf={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:N,findFiberByHostInstance:qe,reconcilerVersion:"19.0.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wf.isDisabled&&wf.supportsFiber)try{be=wf.inject(xf),ye=wf}catch(Sf){}}t.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,r="",a=Ao,i=Do,s=Fo;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=$d(e,1,!1,null,0,n,r,a,i,s,0,null),e[Me]=t.current,Lc(8===e.nodeType?e.parentNode:e),new bf(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var r=!1,a="",i=Ao,s=Do,u=Fo,c=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(c=n.formState)),(t=$d(e,1,!0,t,0,r,a,i,s,u,0,c)).context=Id(null),n=t.current,(a=Ol(r=Nu())).callback=null,Ll(n,a,r),t.current.lanes=r,Le(t,r),gc(t),e[Me]=t.current,Lc(e),new yf(t)},t.version="19.0.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var x=v.prototype=new y;x.constructor=v,g(x,b.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function E(e,t,r,a,i,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function z(){}function T(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,u,c=!1;if(null===e)c=!0;else switch(l){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0;break;case f:return T((c=e._init)(e._payload),t,a,i,o)}}if(c)return o=o(e),c=""===i?"."+P(e,0):i,w(o)?(a="",null!=c&&(a=c.replace(_,"$&/")+"/"),T(o,t,a,"",(function(e){return e}))):null!=o&&(C(o)&&(s=o,u=a+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+c,o=E(s.type,u,void 0,0,0,s.props)),t.push(o)),1;c=0;var d,h=""===i?".":i+":";if(w(e))for(var g=0;g<e.length;g++)c+=T(i=e[g],t,a,l=h+P(i,g),o);else if("function"===typeof(g=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=g.call(e),g=0;!(i=e.next()).done;)c+=T(i=i.value,t,a,l=h+P(i,g++),o);else if("object"===l){if("function"===typeof e.then)return T(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(z,z):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,i,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function N(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function j(){}t.Children={map:N,forEach:function(e,t,n){N(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return N(e,(function(){t++})),t},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=o,t.PureComponent=v,t.StrictMode=i,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),a=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(a=""+t.key),t)!S.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var o=Array(i),l=0;l<i;l++)o[l]=arguments[l+2];r.children=o}return E(e.type,a,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var o=arguments.length-2;if(1===o)a.children=n;else if(1<o){for(var l=Array(o),s=0;s<o;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return E(e,i,void 0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,n={};k.T=n;try{var r=e(),a=k.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(j,L)}catch(i){L(i)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,n){return k.H.useActionState(e,t,n)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return k.H.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,n){return k.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return k.H.useReducer(e,t,n)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return k.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return k.H.useTransition()},t.version="19.0.0"},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=o.p;try{if(s.T=null,o.p=2,e)return e()}finally{s.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:i}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=u(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.0.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<a&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,g=!1,m=!1,b="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(m=!1,x(e),!g)if(null!==r(u))g=!0,O();else{var t=r(c);null!==t&&L(w,t.startTime-e)}}var k,S=!1,E=-1,C=5,_=-1;function P(){return!(t.unstable_now()-_<C)}function z(){if(S){var e=t.unstable_now();_=e;var n=!0;try{e:{g=!1,m&&(m=!1,y(E),E=-1),h=!0;var i=p;try{t:{for(x(e),f=r(u);null!==f&&!(f.expirationTime>e&&P());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var l=o(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){f.callback=l,x(e),n=!0;break t}f===r(u)&&a(u),x(e)}else a(u);f=r(u)}if(null!==f)n=!0;else{var s=r(c);null!==s&&L(w,s.startTime-e),n=!1}}break e}finally{f=null,p=i,h=!1}n=void 0}}finally{n?k():S=!1}}}if("function"===typeof v)k=function(){v(z)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,N=T.port2;T.port1.onmessage=z,k=function(){N.postMessage(null)}}else k=function(){b(z,0)};function O(){S||(S=!0,k())}function L(e,n){E=b((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,O())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(m?(y(E),E=-1):m=!0,L(w,i-o))):(e.sortIndex=l,n(u,e),g||h||(g=!0,O())),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".5a5d6a02.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="nft-parallax-website:";n.l=(r,a,i,o)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=i);var o=n.p+n.u(t),l=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,i,o=r[0],l=r[1],s=r[2],u=0;if(o.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);u<o.length;u++)i=o[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunknft_parallax_website=self.webpackChunknft_parallax_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);n.p;const r=n.p+"static/media/1.f678125ae1bb0788be7a.png",a=n.p+"static/media/2.3d41f735f443d3f5f4e0.png",i=n.p+"static/media/3.fce9cf701e140de64298.png",o=n.p+"static/media/4.fd8fa9b03c61f03a265d.png",l=n.p+"static/media/5.7197427f70b404f0dc12.png",s=n.p+"static/media/6.bac2a7e3bf3901e5865f.png",u=n.p+"static/media/7.7602132c6f4863a4fa81.png",c=n.p+"static/media/8.5f1c53c4bfbf6e90cb22.png",d=n.p+"static/media/9.d9757d9c55dd386c83ec.png";var f=n(579);const p=()=>{const[t,n]=(0,e.useState)({layer4:{x:0,y:0},layer5:{x:0,y:0},layer6:{x:0,y:0},layer7:{x:0,y:0}}),[p,h]=(0,e.useState)(window.innerWidth),g=(0,e.useRef)(null),m=(0,e.useRef)(0),b=(0,e.useRef)(null),[y,v]=(0,e.useState)(!0);(0,e.useEffect)((()=>{const e=new IntersectionObserver((e=>{let[t]=e;v(t.isIntersecting)}),{threshold:.1});return b.current&&e.observe(b.current),()=>{b.current&&e.unobserve(b.current)}}),[]),(0,e.useEffect)((()=>{const e=()=>{h(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,e.useEffect)((()=>{if(!y)return;const e=()=>{const t=p<=768;m.current+=t?.025:.01;const r={layer4:{x:0,y:Math.sin(m.current*(t?.7:.5))*(t?8:15)},layer5:{x:t?0:20*Math.cos(.4*m.current),y:Math.sin(m.current*(t?.3:.2))*(t?6:15)},layer6:{x:0,y:Math.cos(m.current*(t?.6:.4))*(t?10:20)},layer7:{x:t?0:10*Math.cos(.3*m.current),y:Math.sin(m.current*(t?.8:.5))*(t?4:8)}};n(r),g.current=requestAnimationFrame(e)};return g.current=requestAnimationFrame(e),()=>{g.current&&cancelAnimationFrame(g.current)}}),[p,y]);const x=e=>{const n=`layer${e}`,r=p<=768;return t[n]?r?`translateX(-50%) translateY(${t[n].y}px)`:`translate3d(${t[n].x}px, ${t[n].y}px, 0)`:r?"translateX(-50%)":"translate3d(0, 0, 0)"},w=e=>`parallax-layer layer-${e}`;return(0,f.jsxs)("div",{ref:b,className:"parallax-container",children:[(0,f.jsx)("img",{src:r,alt:"Layer 1",className:w(1),style:{zIndex:1}}),(0,f.jsx)("img",{src:a,alt:"Layer 2",className:w(2),style:{zIndex:2}}),(0,f.jsx)("img",{src:i,alt:"Layer 3",className:w(3),style:{zIndex:3}}),(0,f.jsx)("img",{src:o,alt:"Layer 4",className:w(4),style:{zIndex:4,transform:x(4)}}),(0,f.jsx)("img",{src:l,alt:"Layer 5",className:w(5),style:{zIndex:5,transform:x(5)}}),(0,f.jsx)("img",{src:s,alt:"Layer 6",className:w(6),style:{zIndex:6,transform:x(6)}}),(0,f.jsx)("img",{src:u,alt:"Layer 7",className:w(7),style:{zIndex:7,transform:x(7)}}),(0,f.jsx)("img",{src:c,alt:"Layer 8",className:w(8),style:{zIndex:8}}),(0,f.jsx)("img",{src:d,alt:"Layer 9",className:w(9),style:{zIndex:9}}),(0,f.jsx)("div",{className:"scroll-down-container",children:(0,f.jsxs)("button",{className:"scroll-down-button",onClick:()=>{const e=document.getElementById("next-section");e?e.scrollIntoView({behavior:"smooth"}):window.scrollBy({top:window.innerHeight,behavior:"smooth"})},children:[(0,f.jsx)("span",{children:"Scroll Down"}),(0,f.jsx)("div",{className:"scroll-down-arrow",children:(0,f.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M7 10L12 15L17 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})})]})};var h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},h.apply(this,arguments)};Object.create;function g(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var m=n(324),b=n.n(m),y="-ms-",v="-moz-",x="-webkit-",w="comm",k="rule",S="decl",E="@keyframes",C=Math.abs,_=String.fromCharCode,P=Object.assign;function z(e){return e.trim()}function T(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function O(e,t,n){return e.indexOf(t,n)}function L(e,t){return 0|e.charCodeAt(t)}function j(e,t,n){return e.slice(t,n)}function R(e){return e.length}function A(e){return e.length}function D(e,t){return t.push(e),e}function F(e,t){return e.filter((function(e){return!T(e,t)}))}var $=1,I=1,M=0,U=0,H=0,W="";function B(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:$,column:I,length:o,return:"",siblings:l}}function V(e,t){return P(B("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Y(e){for(;e.root;)e=V(e.root,{children:[e]});D(e,e.siblings)}function q(){return H=U>0?L(W,--U):0,I--,10===H&&(I=1,$--),H}function K(){return H=U<M?L(W,U++):0,I++,10===H&&(I=1,$++),H}function Q(){return L(W,U)}function G(){return U}function X(e,t){return j(W,e,t)}function Z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function J(e){return $=I=1,M=R(W=e),U=0,[]}function ee(e){return W="",e}function te(e){return z(X(U-1,ae(91===e?e+2:40===e?e+1:e)))}function ne(e){for(;(H=Q())&&H<33;)K();return Z(e)>2||Z(H)>3?"":" "}function re(e,t){for(;--t&&K()&&!(H<48||H>102||H>57&&H<65||H>70&&H<97););return X(e,G()+(t<6&&32==Q()&&32==K()))}function ae(e){for(;K();)switch(H){case e:return U;case 34:case 39:34!==e&&39!==e&&ae(H);break;case 40:41===e&&ae(e);break;case 92:K()}return U}function ie(e,t){for(;K()&&e+H!==57&&(e+H!==84||47!==Q()););return"/*"+X(t,U-1)+"*"+_(47===e?e:K())}function oe(e){for(;!Z(Q());)K();return X(e,U)}function le(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function se(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case S:return e.return=e.return||e.value;case w:return"";case E:return e.return=e.value+"{"+le(e.children,r)+"}";case k:if(!R(e.value=e.props.join(",")))return""}return R(n=le(e.children,r))?e.return=e.value+"{"+n+"}":""}function ue(e,t,n){switch(function(e,t){return 45^L(e,0)?(((t<<2^L(e,0))<<2^L(e,1))<<2^L(e,2))<<2^L(e,3):0}(e,t)){case 5103:return x+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return x+e+e;case 4789:return v+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+v+e+y+e+e;case 5936:switch(L(e,t+11)){case 114:return x+e+y+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return x+e+y+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return x+e+y+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return x+e+y+e+e;case 6165:return x+e+y+"flex-"+e+e;case 5187:return x+e+N(e,/(\w+).+(:[^]+)/,x+"box-$1$2"+y+"flex-$1$2")+e;case 5443:return x+e+y+"flex-item-"+N(e,/flex-|-self/g,"")+(T(e,/flex-|baseline/)?"":y+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return x+e+y+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return x+e+y+N(e,"shrink","negative")+e;case 5292:return x+e+y+N(e,"basis","preferred-size")+e;case 6060:return x+"box-"+N(e,"-grow","")+x+e+y+N(e,"grow","positive")+e;case 4554:return x+N(e,/([^-])(transform)/g,"$1"+x+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,x+"$1"),/(image-set)/,x+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,x+"box-pack:$3"+y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+x+e+e;case 4200:if(!T(e,/flex-|baseline/))return y+"grid-column-align"+j(e,t)+e;break;case 2592:case 3360:return y+N(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,T(e.props,/grid-\w+-end/)}))?~O(e+(n=n[t].value),"span",0)?e:y+N(e,"-start","")+e+y+"grid-row-span:"+(~O(n,"span",0)?T(n,/\d+/):+T(n,/\d+/)-+T(e,/\d+/))+";":y+N(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return T(e.props,/grid-\w+-start/)}))?e:y+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,x+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-t>6)switch(L(e,t+1)){case 109:if(45!==L(e,t+4))break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+x+"$2-$3$1"+v+(108==L(e,t+3)?"$3":"$2-$3"))+e;case 115:return~O(e,"stretch",0)?ue(N(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,i,o,l){return y+n+":"+r+l+(a?y+n+"-span:"+(i?o:+o-+r)+l:"")+e}));case 4949:if(121===L(e,t+6))return N(e,":",":"+x)+e;break;case 6444:switch(L(e,45===L(e,14)?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+x+(45===L(e,14)?"inline-":"")+"box$3$1"+x+"$2$3$1"+y+"$2box$3")+e;case 100:return N(e,":",":"+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function ce(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case S:return void(e.return=ue(e.value,e.length,n));case E:return le([V(e,{value:N(e.value,"@","@"+x)})],r);case k:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(T(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Y(V(e,{props:[N(t,/:(read-\w+)/,":-moz-$1")]})),Y(V(e,{props:[t]})),P(e,{props:F(n,r)});break;case"::placeholder":Y(V(e,{props:[N(t,/:(plac\w+)/,":"+x+"input-$1")]})),Y(V(e,{props:[N(t,/:(plac\w+)/,":-moz-$1")]})),Y(V(e,{props:[N(t,/:(plac\w+)/,y+"input-$1")]})),Y(V(e,{props:[t]})),P(e,{props:F(n,r)})}return""}))}}function de(e){return ee(fe("",null,null,null,[""],e=J(e),0,[0],e))}function fe(e,t,n,r,a,i,o,l,s){for(var u=0,c=0,d=o,f=0,p=0,h=0,g=1,m=1,b=1,y=0,v="",x=a,w=i,k=r,S=v;m;)switch(h=y,y=K()){case 40:if(108!=h&&58==L(S,d-1)){-1!=O(S+=N(te(y),"&","&\f"),"&\f",C(u?l[u-1]:0))&&(b=-1);break}case 34:case 39:case 91:S+=te(y);break;case 9:case 10:case 13:case 32:S+=ne(h);break;case 92:S+=re(G()-1,7);continue;case 47:switch(Q()){case 42:case 47:D(he(ie(K(),G()),t,n,s),s);break;default:S+="/"}break;case 123*g:l[u++]=R(S)*b;case 125*g:case 59:case 0:switch(y){case 0:case 125:m=0;case 59+c:-1==b&&(S=N(S,/\f/g,"")),p>0&&R(S)-d&&D(p>32?ge(S+";",r,n,d-1,s):ge(N(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(D(k=pe(S,t,n,u,c,a,l,v,x=[],w=[],d,i),i),123===y)if(0===c)fe(S,t,k,k,x,i,d,l,w);else switch(99===f&&110===L(S,3)?100:f){case 100:case 108:case 109:case 115:fe(e,k,k,r&&D(pe(e,k,k,0,0,a,l,v,a,x=[],d,w),w),a,w,d,l,r?x:w);break;default:fe(S,k,k,k,[""],w,0,l,w)}}u=c=p=0,g=b=1,v=S="",d=o;break;case 58:d=1+R(S),p=h;default:if(g<1)if(123==y)--g;else if(125==y&&0==g++&&125==q())continue;switch(S+=_(y),y*g){case 38:b=c>0?1:(S+="\f",-1);break;case 44:l[u++]=(R(S)-1)*b,b=1;break;case 64:45===Q()&&(S+=te(K())),f=Q(),c=d=R(v=S+=oe(G())),y++;break;case 45:45===h&&2==R(S)&&(g=0)}}return i}function pe(e,t,n,r,a,i,o,l,s,u,c,d){for(var f=a-1,p=0===a?i:[""],h=A(p),g=0,m=0,b=0;g<r;++g)for(var y=0,v=j(e,f+1,f=C(m=o[g])),x=e;y<h;++y)(x=z(m>0?p[y]+" "+v:N(v,/&\f/g,p[y])))&&(s[b++]=x);return B(e,t,n,0===a?k:l,s,u,c,d)}function he(e,t,n,r){return B(e,t,n,w,_(H),j(e,2,-2),0,r)}function ge(e,t,n,r,a){return B(e,t,n,S,j(e,0,r),j(e,r+1,-1),r,a)}var me={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},be="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",ye="active",ve="data-styled-version",xe="6.1.15",we="/*!sc*/\n",ke="undefined"!=typeof window&&"HTMLElement"in window,Se=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Ee=(new Set,Object.freeze([])),Ce=Object.freeze({});function _e(e,t,n){return void 0===n&&(n=Ce),e.theme!==n.theme&&e.theme||t||n.theme}var Pe=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ze=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Te=/(^-|-$)/g;function Ne(e){return e.replace(ze,"-").replace(Te,"")}var Oe=/(a)(d)/gi,Le=function(e){return String.fromCharCode(e+(e>25?39:97))};function je(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Le(t%52)+n;return(Le(t%52)+n).replace(Oe,"$1-$2")}var Re,Ae=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},De=function(e){return Ae(5381,e)};function Fe(e){return je(De(e)>>>0)}function $e(e){return e.displayName||e.name||"Component"}function Ie(e){return"string"==typeof e&&!0}var Me="function"==typeof Symbol&&Symbol.for,Ue=Me?Symbol.for("react.memo"):60115,He=Me?Symbol.for("react.forward_ref"):60112,We={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Be={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ve={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ye=((Re={})[He]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Re[Ue]=Ve,Re);function qe(e){return("type"in(t=e)&&t.type.$$typeof)===Ue?Ve:"$$typeof"in e?Ye[e.$$typeof]:We;var t}var Ke=Object.defineProperty,Qe=Object.getOwnPropertyNames,Ge=Object.getOwnPropertySymbols,Xe=Object.getOwnPropertyDescriptor,Ze=Object.getPrototypeOf,Je=Object.prototype;function et(e,t,n){if("string"!=typeof t){if(Je){var r=Ze(t);r&&r!==Je&&et(e,r,n)}var a=Qe(t);Ge&&(a=a.concat(Ge(t)));for(var i=qe(e),o=qe(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Be||n&&n[s]||o&&s in o||i&&s in i)){var u=Xe(t,s);try{Ke(e,s,u)}catch(e){}}}}return e}function tt(e){return"function"==typeof e}function nt(e){return"object"==typeof e&&"styledComponentId"in e}function rt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function at(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function it(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ot(e,t,n){if(void 0===n&&(n=!1),!n&&!it(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ot(e[r],t[r]);else if(it(t))for(var r in t)e[r]=ot(e[r],t[r]);return e}function lt(e,t){Object.defineProperty(e,"toString",{value:t})}function st(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ut=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw st(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(we);return t},e}(),ct=new Map,dt=new Map,ft=1,pt=function(e){if(ct.has(e))return ct.get(e);for(;dt.has(ft);)ft++;var t=ft++;return ct.set(e,t),dt.set(t,e),t},ht=function(e,t){ft=t+1,ct.set(e,t),dt.set(t,e)},gt="style[".concat(be,"][").concat(ve,'="').concat(xe,'"]'),mt=new RegExp("^".concat(be,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bt=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},yt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(we),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(mt);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(ht(c,u),bt(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},vt=function(e){for(var t=document.querySelectorAll(gt),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(be)!==ye&&(yt(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function xt(){return n.nc}var wt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(be,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(be,ye),r.setAttribute(ve,xe);var o=xt();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},kt=function(){function e(e){this.element=wt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw st(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),St=function(){function e(e){this.element=wt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Et=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Ct=ke,_t={isServer:!ke,useCSSOMInjection:!Se},Pt=function(){function e(e,t,n){void 0===e&&(e=Ce),void 0===t&&(t={});var r=this;this.options=h(h({},_t),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ke&&Ct&&(Ct=!1,vt(this)),lt(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return dt.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(be,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(we)},i=0;i<n;i++)a(i);return r}(r)}))}return e.registerId=function(e){return pt(e)},e.prototype.rehydrate=function(){!this.server&&ke&&vt(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(h(h({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Et(n):t?new kt(n):new St(n)}(this.options),new ut(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(pt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(pt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(pt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),zt=/&/g,Tt=/^\s*\/\/.*$/gm;function Nt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Nt(e.children,t)),e}))}function Ot(e){var t,n,r,a=void 0===e?Ce:e,i=a.options,o=void 0===i?Ce:i,l=a.plugins,s=void 0===l?Ee:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===k&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(zt,n).replace(r,u))})),o.prefix&&c.push(ce),c.push(se);var d=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Tt,""),u=de(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(u=Nt(u,o.namespace));var d,f=[];return le(u,function(e){var t=A(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||st(15),Ae(e,t.name)}),5381).toString():"",d}var Lt=new Pt,jt=Ot(),Rt=e.createContext({shouldForwardProp:void 0,styleSheet:Lt,stylis:jt}),At=(Rt.Consumer,e.createContext(void 0));function Dt(){return(0,e.useContext)(Rt)}function Ft(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],i=Dt().styleSheet,o=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,i]),l=(0,e.useMemo)((function(){return Ot({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){b()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var s=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:l}}),[t.shouldForwardProp,o,l]);return e.createElement(Rt.Provider,{value:s},e.createElement(At.Provider,{value:l},t.children))}var $t=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=jt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,lt(this,(function(){throw st(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=jt),this.name+e.hash},e}(),It=function(e){return e>="A"&&e<="Z"};function Mt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;It(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ut=function(e){return null==e||!1===e||""===e},Ht=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!Ut(i)&&(Array.isArray(i)&&i.isCss||tt(i)?r.push("".concat(Mt(a),":"),i,";"):it(i)?r.push.apply(r,g(g(["".concat(a," {")],Ht(i),!1),["}"],!1)):r.push("".concat(Mt(a),": ").concat((t=a,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in me||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wt(e,t,n,r){return Ut(e)?[]:nt(e)?[".".concat(e.styledComponentId)]:tt(e)?!tt(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Wt(e(t),t,n,r):e instanceof $t?n?(e.inject(n,r),[e.getName(r)]):[e]:it(e)?Ht(e):Array.isArray(e)?Array.prototype.concat.apply(Ee,e.map((function(e){return Wt(e,t,n,r)}))):[e.toString()];var a}function Bt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(tt(n)&&!nt(n))return!1}return!0}var Vt=De(xe),Yt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Bt(e),this.componentId=t,this.baseHash=Ae(Vt,t),this.baseStyle=n,Pt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=rt(r,this.staticRulesId);else{var a=at(Wt(this.rules,e,t,n)),i=je(Ae(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=rt(r,i),this.staticRulesId=i}else{for(var l=Ae(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=at(Wt(c,e,t,n));l=Ae(l,d+u),s+=d}}if(s){var f=je(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=rt(r,f)}}return r},e}(),qt=e.createContext(void 0);qt.Consumer;var Kt={};new Set;function Qt(t,n,r){var a=nt(t),i=t,o=!Ie(t),l=n.attrs,s=void 0===l?Ee:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Ne(e);Kt[n]=(Kt[n]||0)+1;var r="".concat(n,"-").concat(Fe(xe+n+Kt[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return Ie(e)?"styled.".concat(e):"Styled(".concat($e(e),")")}(t):d,p=n.displayName&&n.componentId?"".concat(Ne(n.displayName),"-").concat(n.componentId):n.componentId||c,g=a&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&i.shouldForwardProp){var b=i.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;m=function(e,t){return b(e,t)&&y(e,t)}}else m=b}var v=new Yt(r,p,a?i.componentStyle:void 0);function x(t,n){return function(t,n,r){var a=t.attrs,i=t.componentStyle,o=t.defaultProps,l=t.foldedComponentIds,s=t.styledComponentId,u=t.target,c=e.useContext(qt),d=Dt(),f=t.shouldForwardProp||d.shouldForwardProp,p=_e(n,c,o)||Ce,g=function(e,t,n){for(var r,a=h(h({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=tt(r=e[i])?r(a):r;for(var l in o)a[l]="className"===l?rt(a[l],o[l]):"style"===l?h(h({},a[l]),o[l]):o[l]}return t.className&&(a.className=rt(a.className,t.className)),a}(a,n,p),m=g.as||u,b={};for(var y in g)void 0===g[y]||"$"===y[0]||"as"===y||"theme"===y&&g.theme===p||("forwardedAs"===y?b.as=g.forwardedAs:f&&!f(y,m)||(b[y]=g[y]));var v=function(e,t){var n=Dt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,g),x=rt(l,s);return v&&(x+=" "+v),g.className&&(x+=" "+g.className),b[Ie(m)&&!Pe.has(m)?"class":"className"]=x,r&&(b.ref=r),(0,e.createElement)(m,b)}(w,t,n)}x.displayName=f;var w=e.forwardRef(x);return w.attrs=g,w.componentStyle=v,w.displayName=f,w.shouldForwardProp=m,w.foldedComponentIds=a?rt(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=p,w.target=a?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)ot(e,a[r],!0);return e}({},i.defaultProps,e):e}}),lt(w,(function(){return".".concat(w.styledComponentId)})),o&&et(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Gt(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Xt=function(e){return Object.assign(e,{isCss:!0})};function Zt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(tt(e)||it(e))return Xt(Wt(Gt(Ee,g([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Wt(r):Xt(Wt(Gt(r,t)))}function Jt(e,t,n){if(void 0===n&&(n=Ce),!t)throw st(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,Zt.apply(void 0,g([r],a,!1)))};return r.attrs=function(r){return Jt(e,t,h(h({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Jt(e,t,h(h({},n),r))},r}var en=function(e){return Jt(Qt,e)},tn=en;Pe.forEach((function(e){tn[e]=en(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Bt(e),Pt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(at(Wt(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Pt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function nn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=at(Zt.apply(void 0,g([e],t,!1))),a=Fe(r);return new $t(a,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=xt(),r=at([n&&'nonce="'.concat(n,'"'),"".concat(be,'="true"'),"".concat(ve,'="').concat(xe,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw st(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw st(2);var r=t.instance.toString();if(!r)return[];var a=((n={})[be]="",n[ve]=xe,n.dangerouslySetInnerHTML={__html:r},n),i=xt();return i&&(a.nonce=i),[e.createElement("style",h({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Pt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw st(2);return e.createElement(Ft,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw st(3)}})(),"__sc-".concat(be,"__");const rn=n.p+"static/media/bossicon.5e3e3ba039304066de2e.png",an=n.p+"static/media/earthicon.edf527a48c7fd19d0519.png",on=n.p+"static/media/fireicon.9447f6502495fd1c2de5.png",ln=n.p+"static/media/watericon.69da035d264fd48f9f71.png",sn=n.p+"static/media/windicon.ba703c21553b8775513b.png",un=n.p+"static/media/fox3 (1).28ef4ed5b19195ae03cc.png",cn=n.p+"static/media/lion3 (1).eda6ea76a0bec400230c.png",dn=tn.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background-image: 
    radial-gradient(1.5px 1.5px at 13% 17%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2px 2px at 26% 9%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 32% 23%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1px 1px at 41% 3%, rgba(255, 255, 255, 0.6) 50%, transparent 100%),
    radial-gradient(2px 2px at 56% 29%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(3px 3px at 63% 11%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 77% 36%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 83% 17%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    
    radial-gradient(2px 2px at 7% 41%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(1px 1px at 18% 57%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 23% 43%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 37% 52%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 49% 61%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(3px 3px at 52% 49%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 67% 58%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 71% 44%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 89% 54%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    
    radial-gradient(2px 2px at 11% 73%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 27% 69%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 33% 81%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(1px 1px at 39% 72%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(3px 3px at 58% 88%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 64% 76%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 79% 92%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 86% 73%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    
    /* A few brighter stars */
    radial-gradient(3px 3px at 21% 31%, rgba(255, 255, 255, 0.95) 50%, transparent 100%),
    radial-gradient(3.5px 3.5px at 46% 37%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(3px 3px at 73% 63%, rgba(255, 255, 255, 0.95) 50%, transparent 100%),
    radial-gradient(4px 4px at 62% 24%, rgba(255, 255, 255, 0.9) 50%, transparent 100%);
  background-color: rgba(4,16,48,255);
`,fn=tn.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,pn=(tn.span`
  position: relative;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    color: transparent;
    filter: blur(8px);
  }
`,tn.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  text-align: center;
  background: linear-gradient(to right, #64748b, #94a3b8, #cbd5e1); /* Silver-blue gradient from 8.png */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: ${e=>e.isVisible?1:0};
  transform: translateY(${e=>e.isVisible?0:"30px"});
  transition: opacity 0.8s ease, transform 0.8s ease;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`,tn.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  margin-bottom: 60px;
  text-align: center;
  opacity: ${e=>e.isVisible?1:0};
  transform: translateY(${e=>e.isVisible?0:"30px"});
  transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
`,tn.div`
  width: 100%;
  max-width: 800px;
  height: 800px;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;
  
  ${e=>e.isVisible&&"\n    opacity: 1;\n    transform: translateY(0);\n  "}
  
  @media (max-width: 900px) {
    height: 700px;
  }
  
  @media (max-width: 768px) {
    height: 600px;
  }
  
  @media (max-width: 480px) {
    height: 500px;
    max-width: 400px;
  }
`),hn=tn.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 480px) {
    transform: scale(1.1);
  }
`,gn=tn.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(76, 29, 149, 0.1));
  filter: blur(20px);
  z-index: 1;
  animation: coreGlowPulse 6s infinite ease-in-out;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0.5;
  }
  
  &::before {
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%);
    animation: rotateClockwise 20s linear infinite;
  }
  
  &::after {
    width: 160px;
    height: 160px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%);
    animation: rotateCounterClockwise 25s linear infinite;
  }
  
  @keyframes coreGlowPulse {
    0%, 100% {
      opacity: 0.7;
      width: 80px;
      height: 80px;
    }
    50% {
      opacity: 1;
      width: 100px;
      height: 100px;
    }
  }
  
  @keyframes rotateClockwise {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
  
  @keyframes rotateCounterClockwise {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(-360deg); }
  }
`,mn=tn.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 2px solid rgba(139, 92, 246, 0.5);
  z-index: 2;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(139, 92, 246, 0.3);
  }
  
  &::before {
    width: 180px;
    height: 180px;
    animation: rotateClockwise 20s linear infinite;
  }
  
  &::after {
    width: 200px;
    height: 200px;
    animation: rotateCounterClockwise 25s linear infinite;
  }
`,bn=tn.div`
  position: absolute;
  width: 200px;
  transition: all 0.5s ease;
  z-index: 3; /* Ensure icons are above connection lines */
  
  &.position-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    animation: pulseCenter 4s infinite ease-in-out;
  }
  
  &.position-top {
    top: -5%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.position-right {
    top: 50%;
    right: -5%;
    transform: translateY(-50%);
  }
  
  &.position-bottom {
    bottom: -5%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.position-left {
    top: 50%;
    left: -5%;
    transform: translateY(-50%);
  }
  
  @keyframes pulseCenter {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.05);
    }
  }
  
  @media (max-width: 768px) {
    width: 150px;
    
    &.position-top {
      top: 10%;
    }
    
    &.position-right {
      right: 10%;
    }
    
    &.position-bottom {
      bottom: 10%;
    }
    
    &.position-left {
      left: 10%;
    }
  }
  
  @media (max-width: 480px) {
    width: 100px;
    
    &.position-top {
      top: 15%;
    }
    
    &.position-right {
      right: 15%;
    }
    
    &.position-bottom {
      bottom: 15%;
    }
    
    &.position-left {
      left: 15%;
    }
  }
`,yn=tn.div`
  position: absolute;
  z-index: 1; /* Ensure lines are below icons */
  overflow: hidden;
  background-color: ${e=>e.color||"rgba(255, 255, 255, 0.1)"};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      ${e=>e.glowColor||"rgba(255, 255, 255, 0.7)"}, 
      transparent
    );
    animation: flowEffect 6s infinite ease-in-out;
  }
  
  &.top-center {
    width: 4px;
    height: 45%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    
    &::before {
      animation: flowDownEffect 6s infinite ease-in-out;
    }
  }
  
  &.right-center {
    width: 45%;
    height: 4px;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border-radius: 4px;
    
    &::before {
      animation: flowLeftEffect 6s infinite ease-in-out;
    }
  }
  
  &.bottom-center {
    width: 4px;
    height: 45%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    
    &::before {
      animation: flowUpEffect 6s infinite ease-in-out;
    }
  }
  
  &.left-center {
    width: 45%;
    height: 4px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 4px;
    
    &::before {
      animation: flowRightEffect 6s infinite ease-in-out;
    }
  }
  
  @keyframes flowEffect {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  @keyframes flowDownEffect {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  
  @keyframes flowUpEffect {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
  
  @keyframes flowRightEffect {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  @keyframes flowLeftEffect {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  @media (max-width: 768px) {
    &.top-center {
      height: calc(40% - 20px);
      top: 10%;
    }
    
    &.right-center {
      width: calc(40% - 20px);
      right: 10%;
    }
    
    &.bottom-center {
      height: calc(40% - 20px);
      bottom: 10%;
    }
    
    &.left-center {
      width: calc(40% - 20px);
      left: 10%;
    }
  }
  
  @media (max-width: 480px) {
    &.top-center {
      height: calc(35% - 20px);
      top: 15%;
    }
    
    &.right-center {
      width: calc(35% - 20px);
      right: 15%;
    }
    
    &.bottom-center {
      height: calc(35% - 20px);
      bottom: 15%;
    }
    
    &.left-center {
      width: calc(35% - 20px);
      left: 15%;
    }
  }
`,vn=tn.div`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 2;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${e=>e.color||"white"};
    opacity: 0;
    filter: blur(2px);
    box-shadow: 0 0 10px ${e=>e.color||"white"};
  }
  
  &::before {
    animation: particleFlowToCenter 6s infinite ease-in-out;
  }
  
  &::after {
    width: 5px;
    height: 5px;
    animation: particleFlowToCenter 6s infinite ease-in-out;
    animation-delay: -3s;
  }
  
  &.particles-top {
    top: calc(25% - 20px);
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.particles-right {
    top: 50%;
    right: calc(25% - 20px);
    transform: translateY(-50%);
  }
  
  &.particles-bottom {
    bottom: calc(25% - 20px);
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.particles-left {
    top: 50%;
    left: calc(25% - 20px);
    transform: translateY(-50%);
  }
  
  @keyframes particleFlowToCenter {
    0% {
      opacity: 0.8;
      transform: translate(0, 0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(0, 50px) scale(0.5);
    }
  }
  
  /* Direction-specific particle animations */
  &.particles-top::before, &.particles-top::after {
    animation-name: particleFlowDown;
  }
  
  &.particles-right::before, &.particles-right::after {
    animation-name: particleFlowLeft;
  }
  
  &.particles-bottom::before, &.particles-bottom::after {
    animation-name: particleFlowUp;
  }
  
  &.particles-left::before, &.particles-left::after {
    animation-name: particleFlowRight;
  }
  
  @keyframes particleFlowDown {
    0% {
      opacity: 0.8;
      transform: translate(0, 0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(0, 100px) scale(0.5);
    }
  }
  
  @keyframes particleFlowUp {
    0% {
      opacity: 0.8;
      transform: translate(0, 0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(0, -100px) scale(0.5);
    }
  }
  
  @keyframes particleFlowRight {
    0% {
      opacity: 0.8;
      transform: translate(0, 0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(100px, 0) scale(0.5);
    }
  }
  
  @keyframes particleFlowLeft {
    0% {
      opacity: 0.8;
      transform: translate(0, 0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-100px, 0) scale(0.5);
    }
  }
`,xn=tn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`,wn=tn.div`
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
  
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`,kn=tn.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  z-index: 0;
  animation: glowPulse 5s infinite alternate ease-in-out;
  
  @keyframes glowPulse {
    0% {
      opacity: 0.7;
      filter: blur(15px);
    }
    100% {
      opacity: 1;
      filter: blur(25px);
    }
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`,Sn=tn.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  position: relative;
  z-index: 3; /* Increased z-index to ensure it's above connection lines */
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.4));
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.4));
      opacity: 1; /* Maintain full opacity */
    }
    50% {
      filter: drop-shadow(0 5px 25px rgba(255, 255, 255, 0.6));
      opacity: 1; /* Maintain full opacity */
    }
    100% {
      filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.4));
      opacity: 1; /* Maintain full opacity */
    }
  }
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
  
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`,En=tn.img`
  position: absolute;
  height: 80%;
  max-height: 600px;
  z-index: 0;
  opacity: 0.6;
  pointer-events: none;
  
  ${e=>"left"===e.position?"\n    left: -15%;\n    bottom: 0;\n  ":"\n    right: -15%;\n    bottom: 0;\n  "}
  
  @media (max-width: 1200px) {
    height: 60%;
    ${e=>"left"===e.position?"\n      left: -10%;\n    ":"\n      right: -10%;\n    "}
  }
  
  @media (max-width: 768px) {
    height: 40%;
    ${e=>"left"===e.position?"\n      left: -15%;\n    ":"\n      right: -15%;\n    "}
  }
  
  @media (max-width: 480px) {
    height: 30%;
    ${e=>"left"===e.position?"\n      left: -20%;\n    ":"\n      display: none;\n    "}
  }
`,Cn=()=>{const[t,n]=(0,e.useState)(!1),r=(0,e.useRef)(null),a=[{id:1,name:"Fire Element",icon:on,gradient:"linear-gradient(135deg, #ef4444, #b91c1c)",glow:"0 0 30px rgba(239, 68, 68, 0.5)",description:"Master the power of fire with this rare NFT element.",position:"top"},{id:2,name:"Water Element",icon:ln,gradient:"linear-gradient(135deg, #3b82f6, #1e40af)",glow:"0 0 30px rgba(59, 130, 246, 0.5)",description:"Control the flow of water with this epic NFT element.",position:"right"},{id:3,name:"Earth Element",icon:an,gradient:"linear-gradient(135deg, #65a30d, #365314)",glow:"0 0 30px rgba(101, 163, 13, 0.5)",description:"Harness the strength of earth with this uncommon NFT element.",position:"bottom"},{id:4,name:"Wind Element",icon:sn,gradient:"linear-gradient(135deg, #64748b, #1e293b)",glow:"0 0 30px rgba(100, 116, 139, 0.5)",description:"Command the winds with this legendary NFT element.",position:"left"},{id:5,name:"Boss Element",icon:rn,gradient:"linear-gradient(135deg, #8b5cf6, #4c1d95)",glow:"0 0 30px rgba(139, 92, 246, 0.5)",description:"The ultimate power - control all elements with this mythic NFT.",position:"center"}];return(0,e.useEffect)((()=>{const e=new IntersectionObserver((t=>{let[r]=t;r.isIntersecting&&(n(!0),e.unobserve(r.target))}),{threshold:.1});return r.current&&e.observe(r.current),()=>{r.current&&e.unobserve(r.current)}}),[]),(0,f.jsxs)(dn,{id:"next-section",ref:r,children:[(0,f.jsx)(En,{src:un,position:"right",alt:"Fox",style:{transform:"scaleX(-1)"}}),(0,f.jsx)(En,{src:cn,position:"left",alt:"Lion"}),(0,f.jsx)(fn,{children:(0,f.jsx)(pn,{isVisible:t,children:(0,f.jsxs)(hn,{children:[(0,f.jsx)(gn,{}),(0,f.jsx)(yn,{className:"top-center",color:"#ef4444",glowColor:"rgba(239, 68, 68, 0.7)"}),(0,f.jsx)(yn,{className:"right-center",color:"#3b82f6",glowColor:"rgba(59, 130, 246, 0.7)"}),(0,f.jsx)(yn,{className:"bottom-center",color:"#65a30d",glowColor:"rgba(101, 163, 13, 0.7)"}),(0,f.jsx)(yn,{className:"left-center",color:"#64748b",glowColor:"rgba(100, 116, 139, 0.7)"}),(0,f.jsx)(vn,{className:"particles-top",color:"#ef4444"}),(0,f.jsx)(vn,{className:"particles-right",color:"#3b82f6"}),(0,f.jsx)(vn,{className:"particles-bottom",color:"#65a30d"}),(0,f.jsx)(vn,{className:"particles-left",color:"#64748b"}),a.map((e=>(0,f.jsx)(bn,{className:`position-${e.position}`,children:(0,f.jsx)(xn,{children:(0,f.jsxs)(wn,{children:[(0,f.jsx)(kn,{style:{boxShadow:e.glow}}),(0,f.jsx)(Sn,{src:e.icon,alt:e.name}),"center"===e.position&&(0,f.jsx)(mn,{})]})})},e.id)))]})})})]})},_n=n.p+"static/media/snake1.dc1cccfa4124a0681024.png",Pn=n.p+"static/media/snake2.2513a27cf984c99d6a1e.png",zn=n.p+"static/media/snake3.eb684a736217c885b1d3.png",Tn=n.p+"static/media/deer3.25e09ea6e787bc9f628b.png",Nn=n.p+"static/media/eagle3.457fe9903d97692e6a48.png",On=nn`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ln=nn`
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 0.9; }
  100% { transform: scale(0.95); opacity: 0.7; }
`,jn=nn`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Rn=(nn`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,nn`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`,nn`
  0% {
    box-shadow: 0 0 10px var(--glow-color);
  }
  50% {
    box-shadow: 0 0 25px var(--glow-color), 0 0 40px var(--glow-color);
  }
  100% {
    box-shadow: 0 0 10px var(--glow-color);
  }
`),An=nn`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Dn=nn`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,Fn=tn.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  overflow: hidden;
  background-image: 
    radial-gradient(1.5px 1.5px at 13% 17%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2px 2px at 26% 9%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 32% 23%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1px 1px at 41% 3%, rgba(255, 255, 255, 0.6) 50%, transparent 100%),
    radial-gradient(2px 2px at 56% 29%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(3px 3px at 63% 11%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 77% 36%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 83% 17%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    
    radial-gradient(2px 2px at 7% 41%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(1px 1px at 18% 57%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 23% 43%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 37% 52%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 49% 61%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(3px 3px at 52% 49%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 67% 58%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 71% 44%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 89% 54%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    
    radial-gradient(2px 2px at 11% 73%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 27% 69%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 33% 81%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(1px 1px at 39% 72%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(3px 3px at 58% 88%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 64% 76%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 79% 92%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 86% 73%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    
    /* A few brighter stars */
    radial-gradient(3px 3px at 21% 31%, rgba(255, 255, 255, 0.95) 50%, transparent 100%),
    radial-gradient(3.5px 3.5px at 46% 37%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(3px 3px at 73% 63%, rgba(255, 255, 255, 0.95) 50%, transparent 100%),
    radial-gradient(4px 4px at 62% 24%, rgba(255, 255, 255, 0.9) 50%, transparent 100%);
  background-color: rgba(4,16,48,255);
`,$n=tn.h2`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  position: relative;
  animation: ${On} 0.8s ease forwards;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #5beffc, #ffe1ff);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
  }
`,In=tn.div`
  background: linear-gradient(90deg, #5beffc, #ffe1ff);
  color: #000510;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(91, 239, 252, 0.5);
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #000510;
    border-radius: 50%;
    margin-right: 8px;
    box-shadow: 0 0 0 2px rgba(0, 5, 16, 0.5);
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem 1.2rem;
    margin-bottom: 2rem;
  }
`,Mn=tn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    height: 100%
  }
`,Un=tn.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(91, 239, 252, 0.3), rgba(255, 225, 255, 0.3));
    animation: ${jn} 2s infinite;
  }
  
  &::after {
    content: '→';
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(91, 239, 252, 0.8);
  }
  
  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0;
  }
`,Hn=tn.div`
  position: relative;
  width: 320px;
  height: 600px;
  background: rgba(0, 5, 16, 0.7);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 2px solid ${e=>e.accentColor||"rgba(91, 239, 252, 0.3)"};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  --glow-color: ${e=>e.shadowColor||"rgba(91, 239, 252, 0.7)"};
  animation: ${Rn} 3s infinite, ${On} 0.8s forwards;
  animation-delay: ${e=>e.delay||"0s"}, ${e=>e.delay||"0s"};
  transform: perspective(1000px) rotateY(0deg);
  transform-style: preserve-3d;
  
  &:hover {
    transform: perspective(1000px) rotateY(5deg) translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    
    .card-image {
      transform: scale(1.1) translateY(-5px);
    }
    
    .fire-effect {
      opacity: 0.9;
      transform: scale(1.1);
    }
  }
  
  @media (max-width: 1024px) {
    width: 280px;
    height: 420px;
  }
  
  @media (max-width: 480px) {
    width: 260px;
    height: 100%;
  }
`,Wn=tn.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${e=>e.accentColor||"#5beffc"};
  color: #000510;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  z-index: 10;
  box-shadow: 0 0 10px ${e=>e.accentColor||"#5beffc"};
`,Bn=tn.div`
  position: relative;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,Vn=tn.img`
  width: 80%;
  height: auto;
  object-fit: contain;
  transition: transform 0.5s ease;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  transform-style: preserve-3d;
  z-index: 2;
`,Yn=tn.div`
  padding: 1.5rem;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, ${e=>e.accentColor||"#5beffc"}, white);
    border-radius: 4px;
  }
`,qn=tn.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.8rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, transparent, white, transparent);
  }
`,Kn=tn.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  line-height: 1.5;
`,Qn=tn.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`,Gn=tn.a`
  display: inline-block;
  background: linear-gradient(90deg, #5beffc, #ffe1ff);
  background-size: 200% auto;
  color: #000510;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(91, 239, 252, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(30deg);
    animation: ${Dn} 3s infinite linear;
  }
  
  &:hover {
    background-position: right center;
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(91, 239, 252, 0.4);
  }
  
  &:active {
    transform: translateY(-2px);
  }
`,Xn=tn.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: radial-gradient(ellipse at center bottom, ${e=>e.color||"rgba(91, 239, 252, 0.3)"}, transparent 70%);
  opacity: 0.7;
  transition: all 0.5s ease;
  animation: ${Ln} 3s infinite;
  z-index: 1;
`,Zn=tn.div`
  position: absolute;
  width: ${e=>e.size||"10px"};
  height: ${e=>e.size||"10px"};
  top: ${e=>e.top||"50%"};
  left: ${e=>e.left||"50%"};
  background: ${e=>e.color||"rgba(255, 255, 255, 0.8)"};
  border-radius: 50%;
  filter: blur(2px);
  opacity: 0;
  animation: float ${e=>e.duration||"2s"} infinite ease-in-out ${e=>e.delay||"0s"};
  z-index: 1;
  
  @keyframes float {
    0% {
      transform: translateY(100px) scale(0);
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(-100px) scale(1);
      opacity: 0;
    }
  }
`,Jn=tn.div`
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(to bottom, transparent, ${e=>e.color||"rgba(91, 239, 252, 0.3)"});
  z-index: 0;
`,er=tn.img`
  position: absolute;
  height: 80%;
  max-height: 600px;
  z-index: 0;
  opacity: 0.6;
  pointer-events: none;
  
  ${e=>"left"===e.position?"\n    left: -10%;\n    bottom: 0;\n    transform: scaleX(-1);\n  ":"\n    right: -10%;\n    bottom: 0;\n  "}
  
  @media (max-width: 1200px) {
    height: 60%;
    ${e=>"left"===e.position?"\n      left: -10%;\n    ":"\n      right: -10%;\n    "}
  }
  
  @media (max-width: 768px) {
    height: 40%;
    ${e=>"left"===e.position?"\n      left: -15%;\n    ":"\n      right: -15%;\n    "}
  }
  
  @media (max-width: 480px) {
    height: 30%;
    ${e=>"left"===e.position?"\n      left: -20%;\n    ":"\n      display: none;\n    "}
  }
`,tr=(tn.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  z-index: 10;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.level||"30"}%;
    background: linear-gradient(90deg, ${e=>e.accentColor||"#5beffc"}, white);
    border-radius: 4px;
    box-shadow: 0 0 10px ${e=>e.accentColor||"#5beffc"};
  }
`,tn.div`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${e=>e.elementColor||"rgba(91, 239, 252, 0.8)"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #000510;
  font-size: 1rem;
  box-shadow: 0 0 10px ${e=>e.elementColor||"rgba(91, 239, 252, 0.8)"};
  z-index: 10;
`),nr=tn.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 20px;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    ${e=>e.accentColor||"#5beffc"} 10%,
    transparent 30%,
    transparent 40%,
    ${e=>e.accentColor||"#5beffc"} 50%,
    transparent 70%,
    transparent 80%,
    ${e=>e.accentColor||"#5beffc"} 90%,
    transparent 100%
  );
  animation: ${An} 4s linear infinite;
  opacity: 0.8;
  z-index: -1;
  filter: blur(2px);
`,rr=tn.div`
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border-radius: 25px;
  background: conic-gradient(
    from 90deg,
    transparent 0%,
    ${e=>e.accentColor||"#5beffc"} 10%,
    transparent 30%,
    transparent 40%,
    ${e=>e.accentColor||"#5beffc"} 50%,
    transparent 70%,
    transparent 80%,
    ${e=>e.accentColor||"#5beffc"} 90%,
    transparent 100%
  );
  animation: ${An} 4s linear infinite reverse;
  opacity: 0.5;
  z-index: -2;
  filter: blur(3px);
`,ar=tn.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,ir=tn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 0.5rem;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -5px;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
`,or=tn.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 0.3rem;
`,lr=tn.span`
  font-size: 1.2rem;
  color: ${e=>e.color||"white"};
  font-weight: bold;
  text-shadow: 0 0 5px ${e=>e.color||"rgba(255, 255, 255, 0.5)"};
  
  @media (max-width: 768px) {
    text-shadow: 0 0 2px ${e=>e.color||"rgba(255, 255, 255, 0.5)"};
  }
`,sr=()=>{const[t,n]=(0,e.useState)(!1),r=(0,e.useRef)(null),a=[{id:1,title:"Baby GotchA",image:_n,description:"Feed it to grow stronger and unlock its elemental potential.Earn Rewards.",glowColor:"rgba(239, 68, 68, 0.7)",accentColor:"#ef4444",fireColor:"rgba(239, 68, 68, 0.2)",particleColor:"rgba(239, 68, 68, 0.8)",element:"B",elementColor:"#ef4444",powerLevel:30,stats:{attack:15,hp:10,heal:25}},{id:2,title:"Guardian GotchA",image:Pn,description:"Battle with your evolved guardian to gain experience and enhance its mystical abilities.",glowColor:"rgba(59, 130, 246, 0.7)",accentColor:"#3b82f6",fireColor:"rgba(59, 130, 246, 0.2)",particleColor:"rgba(59, 130, 246, 0.8)",element:"G",elementColor:"#3b82f6",powerLevel:60,stats:{attack:35,hp:30,heal:40}},{id:3,title:"Legendary GotchA",image:zn,description:"Master the final evolution and earn more rewards with your legendary's devastating powers.",glowColor:"rgba(139, 92, 246, 0.7)",accentColor:"#8B5CF6",fireColor:"rgba(139, 92, 246, 0.2)",particleColor:"rgba(139, 92, 246, 0.8)",element:"L",elementColor:"#8B5CF6",powerLevel:100,stats:{attack:75,hp:65,heal:60}}],i=(e,t)=>{const n=[];for(let r=0;r<e;r++){const e=20*Math.random()+5+"px",a=100*Math.random()+"%",i=100*Math.random()+"%",o=3*Math.random()+1+"s",l=2*Math.random()+"s";n.push((0,f.jsx)(Zn,{size:e,top:a,left:i,duration:o,delay:l,color:t},r))}return n};return(0,e.useEffect)((()=>{const e=new IntersectionObserver((t=>{let[r]=t;r.isIntersecting&&(n(!0),e.unobserve(r.target))}),{threshold:.1});return r.current&&e.observe(r.current),()=>{r.current&&e.unobserve(r.current)}}),[]),(0,f.jsxs)(Fn,{id:"evolution-section",ref:r,children:[(0,f.jsx)(er,{src:Tn,position:"left",alt:"Deer"}),(0,f.jsx)(er,{src:Nn,position:"right",alt:"Eagle"}),(0,f.jsx)($n,{children:"Feed.Battle.Earn."}),(0,f.jsx)(In,{children:"Live on Sonic Testnet"}),(0,f.jsx)(Mn,{children:a.map(((t,n)=>(0,f.jsxs)(e.Fragment,{children:[(0,f.jsxs)(Hn,{delay:.2*n+"s",accentColor:t.accentColor,shadowColor:t.glowColor,children:[(0,f.jsx)(nr,{accentColor:t.accentColor}),(0,f.jsx)(rr,{accentColor:t.accentColor}),(0,f.jsx)(tr,{elementColor:t.elementColor,children:t.element}),(0,f.jsxs)(Wn,{accentColor:t.accentColor,children:["Level ",t.id]}),(0,f.jsx)(Jn,{color:t.fireColor}),(0,f.jsxs)(Bn,{children:[(0,f.jsx)(Xn,{className:"fire-effect",color:t.fireColor}),i(15,t.particleColor),(0,f.jsx)(Vn,{src:t.image,alt:t.title,className:"card-image"})]}),(0,f.jsxs)(Yn,{accentColor:t.accentColor,children:[(0,f.jsx)(qn,{children:t.title}),(0,f.jsx)(Kn,{children:t.description}),(0,f.jsxs)(ar,{children:[(0,f.jsxs)(ir,{children:[(0,f.jsx)(or,{children:"ATK"}),(0,f.jsx)(lr,{color:t.accentColor,children:t.stats.attack})]}),(0,f.jsxs)(ir,{children:[(0,f.jsx)(or,{children:"HP"}),(0,f.jsx)(lr,{color:t.accentColor,children:t.stats.hp})]}),(0,f.jsxs)(ir,{children:[(0,f.jsx)(or,{children:"HEAL"}),(0,f.jsx)(lr,{color:t.accentColor,children:t.stats.heal})]})]})]})]}),n<a.length-1&&(0,f.jsx)(Un,{})]},t.id)))}),(0,f.jsx)(Qn,{children:(0,f.jsx)(Gn,{href:"https://x.com/GotchA_P2E",target:"_blank",rel:"noopener noreferrer",children:"Go Test Feeding"})})]})},ur=nn`
  0% {
    text-shadow: 0 0 10px rgba(91, 239, 252, 0.7), 0 0 20px rgba(91, 239, 252, 0.5), 0 0 30px rgba(91, 239, 252, 0.3);
  }
  50% {
    text-shadow: 0 0 15px rgba(91, 239, 252, 0.9), 0 0 25px rgba(91, 239, 252, 0.7), 0 0 35px rgba(91, 239, 252, 0.5);
  }
  100% {
    text-shadow: 0 0 10px rgba(91, 239, 252, 0.7), 0 0 20px rgba(91, 239, 252, 0.5), 0 0 30px rgba(91, 239, 252, 0.3);
  }
`,cr=(tn.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background-image: 
    radial-gradient(1.5px 1.5px at 13% 17%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2px 2px at 26% 9%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 32% 23%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1px 1px at 41% 3%, rgba(255, 255, 255, 0.6) 50%, transparent 100%),
    radial-gradient(2px 2px at 56% 29%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(3px 3px at 63% 11%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 77% 36%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 83% 17%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    
    radial-gradient(2px 2px at 7% 41%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(1px 1px at 18% 57%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 23% 43%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 37% 52%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 49% 61%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(3px 3px at 52% 49%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 67% 58%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 71% 44%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 89% 54%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    
    radial-gradient(2px 2px at 11% 73%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 27% 69%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 33% 81%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(1px 1px at 39% 72%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(3px 3px at 58% 88%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 64% 76%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 79% 92%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 86% 73%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    
    /* A few brighter stars */
    radial-gradient(3px 3px at 21% 31%, rgba(255, 255, 255, 0.95) 50%, transparent 100%),
    radial-gradient(3.5px 3.5px at 46% 37%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(3px 3px at 73% 63%, rgba(255, 255, 255, 0.95) 50%, transparent 100%),
    radial-gradient(4px 4px at 62% 24%, rgba(255, 255, 255, 0.9) 50%, transparent 100%);
  background-color: rgba(4,16,48,255);
`,tn.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${c});
  background-size: cover;
  background-position: center;
  transform: scaleX(-1) rotate(180deg);
  opacity: 1;
  z-index: 2;
`,tn.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background-size: cover;
  background-position: center;
  opacity: 0.7; 
  z-index: 1;
  filter: blur(8px);
  transform: scale(1.05); /* Prevents blur edges from showing */
`,tn.h1`
  font-size: 5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  z-index: 10;
  position: absolute;
  bottom: 5rem;
  left: 0;
  width: 100%;
  letter-spacing: 3px;
  animation: ${ur} 3s infinite ease-in-out;
  font-family: inherit; /* Use the site's existing font */
  background: linear-gradient(90deg, #5beffc, #ffe1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    bottom: 3rem;
  }
`,n.p+"static/media/arena.d6de6291854bfe00fed2.png"),dr=n.p+"static/media/phoenix3 (1).350aa6d90f750bf106e8.png",fr=n.p+"static/media/axolotl3 (1).991983752eb74ca4c07b.png",pr=nn`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
`,hr=nn`
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`,gr=nn`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,mr=nn`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,br=tn.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  background-image: 
    radial-gradient(1.5px 1.5px at 13% 17%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2px 2px at 26% 9%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 32% 23%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1px 1px at 41% 3%, rgba(255, 255, 255, 0.6) 50%, transparent 100%),
    radial-gradient(2px 2px at 56% 29%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(3px 3px at 63% 11%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 77% 36%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 83% 17%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    
    radial-gradient(2px 2px at 7% 41%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(1px 1px at 18% 57%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 23% 43%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 37% 52%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 49% 61%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(3px 3px at 52% 49%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 67% 58%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 71% 44%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 89% 54%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    
    radial-gradient(2px 2px at 11% 73%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 27% 69%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 33% 81%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(1px 1px at 39% 72%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(3px 3px at 58% 88%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 64% 76%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 79% 92%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 86% 73%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    
    /* A few brighter stars */
    radial-gradient(3px 3px at 21% 31%, rgba(255, 255, 255, 0.95) 50%, transparent 100%),
    radial-gradient(3.5px 3.5px at 46% 37%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(3px 3px at 73% 63%, rgba(255, 255, 255, 0.95) 50%, transparent 100%),
    radial-gradient(4px 4px at 62% 24%, rgba(255, 255, 255, 0.9) 50%, transparent 100%);
  background-color: rgba(4,16,48,255);
`,yr=tn.h2`
  font-size: 3rem;
  margin-bottom: 48rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  position: relative;
  z-index: 1;
 @media (max-width: 768px) {
    margin-bottom: 28rem;
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
  }
  
`,vr=(tn.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 1;
`,tn.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  background: rgba(10, 15, 30, 0.7);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 2rem;
`,tn.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,tn.div`
  text-align: center;
  margin-bottom: 1rem;
`,tn.h3`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #5beffc, #ffe1ff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${mr} 3s ease infinite;
  text-shadow: 0 2px 10px rgba(91, 239, 252, 0.3);
`,tn.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`,tn.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  flex-wrap: wrap;
  gap: 1rem;
`,tn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  min-width: 150px;
  animation: ${gr} 3s ease-in-out infinite;
  animation-delay: ${e=>e.delay||"0s"};
  
  &:nth-child(1) {
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`,tn.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #5beffc, #ffe1ff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${mr} 3s ease infinite;
`,tn.span`
  font-size: 1rem;
  color: #aaa;
`,tn.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`,tn.button`
  background: ${e=>e.primary?"linear-gradient(90deg, #5beffc, #ffe1ff)":"rgba(255, 255, 255, 0.1)"};
  background-size: 200% auto;
  color: ${e=>e.primary?"#1a1a2e":"#fff"};
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${e=>e.primary?"0 5px 15px rgba(91, 239, 252, 0.3)":"0 5px 15px rgba(0, 0, 0, 0.2)"};
  animation: ${e=>e.primary?Zt`${hr} 1.5s infinite, ${mr} 3s ease infinite`:"none"};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${e=>e.primary?"0 8px 20px rgba(91, 239, 252, 0.4)":"0 8px 20px rgba(0, 0, 0, 0.3)"};
  }
`,tn.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
  }
  
  &::before {
    top: 20%;
    left: 15%;
    animation: ${pr} 2s infinite ease-in-out;
  }
  
  &::after {
    top: 70%;
    left: 80%;
    animation: ${pr} 3s infinite ease-in-out;
  }
  
  /* Add more stars using pseudo-elements */
  &::before {
    box-shadow: 
      0 0 10px 2px rgba(255, 255, 255, 0.8),
      120px 40px 0 0 #fff,
      200px -50px 0 0 #fff,
      -80px 100px 0 0 #fff,
      250px 100px 0 0 #fff,
      -120px -60px 0 0 #fff;
  }
  
  &::after {
    box-shadow: 
      0 0 10px 2px rgba(255, 255, 255, 0.8),
      -150px -30px 0 0 #fff,
      -200px 80px 0 0 #fff,
      100px -100px 0 0 #fff,
      -180px 30px 0 0 #fff,
      180px -80px 0 0 #fff;
  }
`,tn.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  opacity: 0.7;
  pointer-events: none;
`),xr=tn.img`
  max-width: 100%;
  max-height: 90%;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(91, 239, 252, 0.3));
`,wr=tn.img`
  position: absolute;
  height: 80%;
  max-height: 600px;
  z-index: 0;
  opacity: 0.6;
  pointer-events: none;
  
  ${e=>"left"===e.position?"\n    left: -15%;\n    bottom: 0;\n    transform: scaleX(-1);\n  ":"\n    right: -5%;\n    bottom: 0;\n  "}
  
  @media (max-width: 1200px) {
    height: 60%;
    ${e=>"left"===e.position?"\n      left: -10%;\n    ":"\n      right: -10%;\n    "}
  }
  
  @media (max-width: 768px) {
    height: 40%;
    ${e=>"left"===e.position?"\n      left: -15%;\n    ":"\n      right: -15%;\n    "}
  }
  
  @media (max-width: 480px) {
    height: 30%;
    ${e=>"left"===e.position?"\n      left: -20%;\n    ":"\n      display: none;\n    "}
  }
`,kr=()=>(0,f.jsxs)(br,{children:[(0,f.jsx)(wr,{src:dr,position:"left",alt:"Phoenix"}),(0,f.jsx)(yr,{children:"Arena"}),(0,f.jsx)(vr,{children:(0,f.jsx)(xr,{src:cr,alt:"Arena"})})]}),Sr=n.p+"static/media/buffallo3 (1).3ef69304e93c9ac42bf8.png",Er=n.p+"static/media/squid3.4c67f53243fe615c8b82.png",Cr=n.p+"static/media/pageTop.e53720e4783dd4125a46.png",_r=Cr,Pr=(nn`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,nn`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`),zr=nn`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,Tr=nn`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,Nr=tn.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background-image: 
    radial-gradient(1.5px 1.5px at 13% 17%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2px 2px at 26% 9%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 32% 23%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1px 1px at 41% 3%, rgba(255, 255, 255, 0.6) 50%, transparent 100%),
    radial-gradient(2px 2px at 56% 29%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(3px 3px at 63% 11%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 77% 36%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 83% 17%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    
    radial-gradient(2px 2px at 7% 41%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(1px 1px at 18% 57%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 23% 43%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 37% 52%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 49% 61%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(3px 3px at 52% 49%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 67% 58%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 71% 44%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 89% 54%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    
    radial-gradient(2px 2px at 11% 73%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 27% 69%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 33% 81%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(1px 1px at 39% 72%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(3px 3px at 58% 88%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    radial-gradient(2px 2px at 64% 76%, rgba(255, 255, 255, 0.7) 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 79% 92%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(2.5px 2.5px at 86% 73%, rgba(255, 255, 255, 0.8) 50%, transparent 100%),
    
    /* A few brighter stars */
    radial-gradient(3px 3px at 21% 31%, rgba(255, 255, 255, 0.95) 50%, transparent 100%),
    radial-gradient(3.5px 3.5px at 46% 37%, rgba(255, 255, 255, 0.9) 50%, transparent 100%),
    radial-gradient(3px 3px at 73% 63%, rgba(255, 255, 255, 0.95) 50%, transparent 100%),
    radial-gradient(4px 4px at 62% 24%, rgba(255, 255, 255, 0.9) 50%, transparent 100%);
  background-color: rgba(4,16,48,255);
`,Or=tn.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(90deg, #5beffc, #ffe1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: ${Pr} 3s ease infinite;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Lr=tn.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`,jr=tn.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`,Rr=tn.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: ${e=>e.isVisible?1:0};
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(30px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: ${e=>e.delay}s;
  animation: ${Tr} 6s ease-in-out infinite;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(91, 239, 252, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,Ar=(tn.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5beffc, #ffe1ff);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 20px rgba(91, 239, 252, 0.5);
  overflow: hidden;
`,tn.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 15px;
`),Dr=tn.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
`,Fr=tn.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,$r=tn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(91, 239, 252, 0.1);
  border: 1px solid rgba(91, 239, 252, 1);
  
  @media (max-width: 768px) {
    background: rgba(4, 16, 48, 1); /* Darker background for mobile */
    border: 1px solid rgba(91, 239, 252, 0.7);
    padding: 1rem;
    margin: 1.5rem 0;
  }
`,Ir=tn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.5rem 1rem;
  position: relative;
  isolation: isolate;
  z-index: 1; /* Ensure content is above any background */
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`,Mr=tn.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`,Ur=tn.span`
  font-size: 1.8rem;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(135deg, #5beffc, #ffe1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(91, 239, 252, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Hr=tn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 4rem;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,Wr=tn.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.08);
  opacity: ${e=>e.isVisible?1:0};
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(30px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: ${e=>e.delay}s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`,Br=tn.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,Vr=tn.h4`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #fff;
  text-align: center;
`,Yr=tn.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  line-height: 1.5;
`,qr=(tn.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`,tn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,tn.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`),Kr=tn.a`
  background: ${e=>e.primary?"linear-gradient(90deg, #5beffc, #ffe1ff)":"rgba(255, 255, 255, 0.1)"};
  background-size: 200% auto;
  color: ${e=>e.primary?"#1a1a2e":"#fff"};
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${e=>e.primary?"0 5px 15px rgba(91, 239, 252, 0.3)":"0 5px 15px rgba(0, 0, 0, 0.2)"};
  animation: ${e=>e.primary?zr:"none"} 1.5s infinite;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${e=>e.primary?"0 8px 20px rgba(91, 239, 252, 0.4)":"0 8px 20px rgba(0, 0, 0, 0.3)"};
    background-position: right center;
  }
`,Qr=tn.img`
  position: absolute;
  height: 80%;
  max-height: 600px;
  z-index: 0;
  opacity: 0.6;
  pointer-events: none;
  
  ${e=>"left"===e.position?"\n    left: -10%;\n    bottom: 0;\n    transform: scaleX(-1);\n  ":"\n    right: -10%;\n    bottom: 0;\n  "}
  
  @media (max-width: 1200px) {
    height: 60%;
    ${e=>"left"===e.position?"\n      left: -10%;\n    ":"\n      right: -10%;\n    "}
  }
  
  @media (max-width: 768px) {
    height: 40%;
    ${e=>"left"===e.position?"\n      left: -15%;\n    ":"\n      right: -15%;\n    "}
  }
  
  @media (max-width: 480px) {
    height: 30%;
    ${e=>"left"===e.position?"\n      left: -20%;\n    ":"\n      display: none;\n    "}
  }
`,Gr=()=>{const[t,n]=(0,e.useState)(!1),r=(0,e.useRef)(null);return(0,e.useEffect)((()=>{const e=new IntersectionObserver((e=>{let[t]=e;t.isIntersecting&&n(!0)}),{threshold:.2});return r.current&&e.observe(r.current),()=>{r.current&&e.unobserve(r.current)}}),[]),(0,f.jsxs)(Nr,{id:"earn-section",ref:r,children:[(0,f.jsx)(Qr,{src:Sr,position:"left",alt:"Buffalo"}),(0,f.jsx)(Qr,{src:Er,position:"right",alt:"Squid"}),(0,f.jsx)(Or,{children:"Earn."}),(0,f.jsx)(Lr,{children:"Feed, Battle, and Earn Rewards"}),(0,f.jsxs)(jr,{children:[(0,f.jsxs)(Rr,{isVisible:t,delay:0,children:[(0,f.jsx)(Ar,{src:_r,alt:"Game Token"}),(0,f.jsx)(Dr,{children:"Gotch'A NFTs"}),(0,f.jsx)(Fr,{children:"The primary utility of NFTS are evolving , entering battles and earning Gotch'A Token."}),(0,f.jsx)($r,{children:(0,f.jsxs)(Ir,{children:[(0,f.jsx)(Mr,{children:"Supply"}),(0,f.jsx)(Ur,{children:"10000"})]})})]}),(0,f.jsxs)(Rr,{isVisible:t,delay:.2,children:[(0,f.jsx)(Ar,{src:_r,alt:"Reward Token"}),(0,f.jsx)(Dr,{children:"Gotch'A Token"}),(0,f.jsx)(Fr,{children:"The primary utility token used for entering Boss Arena , PvP Battle and unlocking new prizes."}),(0,f.jsx)($r,{children:(0,f.jsxs)(Ir,{children:[(0,f.jsx)(Mr,{children:"Total Supply"}),(0,f.jsx)(Ur,{children:"10,000,000,000"})]})})]})]}),(0,f.jsxs)(Hr,{children:[(0,f.jsxs)(Wr,{isVisible:t,delay:.8,children:[(0,f.jsx)(Br,{children:"\ud83c\udfc6"}),(0,f.jsx)(Vr,{children:"Battle Rewards"}),(0,f.jsx)(Yr,{children:"Win battles in the Arena to earn Gotch'A Token. Higher-level NFTs earn more rewards per victory."})]}),(0,f.jsxs)(Wr,{isVisible:t,delay:1,children:[(0,f.jsx)(Br,{children:"\ud83d\udc09"}),(0,f.jsx)(Vr,{children:"Weekly Bosses "}),(0,f.jsx)(Yr,{children:"Every evolution, a new boss appears in the Arena. Defeat it to earn Gotch'A Token."})]}),(0,f.jsxs)(Wr,{isVisible:t,delay:1.2,children:[(0,f.jsx)(Br,{children:"\ud83d\udd04"}),(0,f.jsx)(Vr,{children:"Evolution Bonuses"}),(0,f.jsx)(Yr,{children:"Evolve your NFTs to increase your earning potential."})]}),(0,f.jsxs)(Wr,{isVisible:t,delay:1.4,children:[(0,f.jsx)(Br,{children:"\ud83c\udfc5"}),(0,f.jsx)(Vr,{children:"Tournaments"}),(0,f.jsx)(Yr,{children:"Participate in PvP tournaments for a chance to win much Gotch'A Token."})]})]}),(0,f.jsxs)(qr,{children:[(0,f.jsx)(Kr,{primary:!0,href:"https://x.com/GotchA_P2E",target:"_blank",rel:"noopener noreferrer",children:"Feeding"}),(0,f.jsx)(Kr,{primary:!0,href:"https://x.com/GotchA_P2E",target:"_blank",rel:"noopener noreferrer",children:"Twitter"}),(0,f.jsx)(Kr,{primary:!0,href:"https://x.com/tax505050",target:"_blank",rel:"noopener noreferrer",children:"Reach Us"}),(0,f.jsx)(Kr,{primary:!0,href:"https://discord.com/invite/hHhTjUHrs7",target:"_blank",rel:"noopener noreferrer",children:"Discord"}),(0,f.jsx)(Kr,{primary:!0,href:"https://gotcha-1.gitbook.io/gotcha",target:"_blank",children:"Whitepaper"})]})]})},Xr=n.p+"static/media/boss.ddbad1220c041db155e2.png",Zr=n.p+"static/media/Background_Gameplay_01.25f8b6aa1757667632f7.Png",Jr=nn`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,ea=nn`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(2);
    opacity: 0;
  }
`,ta=nn`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,na=tn.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  z-index: 9999;
  animation: ${e=>e.isExiting?Jr:"none"} 1s ease-out forwards;
`,ra=tn.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  animation: ${e=>e.isExiting?ea:ta} ${e=>e.isExiting?"1s":"2s"} ease-in-out ${e=>e.isExiting?"forwards":"infinite"};
`,aa=tn.img`
  max-width: 250px;
  height: auto;
`,ia=tn.div`
  color: #5beffc;
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: 500;
  letter-spacing: 1px;
`,oa=tn.div`
  width: 300px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
`,la=tn.div`
  height: 100%;
  width: ${e=>e.width}%;
  background-color: #00c853;
  border-radius: 10px;
  transition: width 0.3s ease;
`,sa=tn.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
`,ua=t=>{let{isLoading:n,setIsLoading:p}=t;const[h,g]=(0,e.useState)(0),[m,b]=(0,e.useState)(!1),[y,v]=(0,e.useState)(0),[x,w]=(0,e.useState)(0),[k,S]=(0,e.useState)("Loading assets..."),E=[Cr,dr,fr,un,cn,Tn,Nn,Sr,Er,r,a,i,o,l,s,u,c,d,cr,Xr,Zr,rn,an,on,ln,sn,_n,Pn,zn];return(0,e.useEffect)((()=>{w(E.length);const e=E.map(((e,t)=>new Promise(((n,r)=>{const a=new Image;a.onload=()=>{v((e=>{const n=e+1;return S(t<9?"Loading animal images...":t<19?"Loading background layers...":t<22?"Loading battle assets...":"Almost ready..."),n})),n()},a.onerror=()=>{console.error(`Failed to load image: ${e}`),v((e=>e+1)),n()},a.src=e}))));Promise.all(e).then((()=>{S("Ready!")})).catch((e=>{console.error("Error loading images:",e)}))}),[]),(0,e.useEffect)((()=>{if(x>0){const e=y/x*100;g(e),e>=100&&setTimeout((()=>{b(!0),setTimeout((()=>p(!1)),1e3)}),500)}}),[y,x,p]),n?(0,f.jsxs)(na,{isExiting:m,children:[(0,f.jsx)(ra,{isExiting:m,children:(0,f.jsx)(aa,{src:Cr,alt:"Logo"})}),(0,f.jsx)(ia,{children:k}),(0,f.jsxs)(oa,{children:[(0,f.jsx)(la,{width:h}),(0,f.jsxs)(sa,{children:[Math.floor(h),"%"]})]})]}):null};const ca=function(){const[t,n]=(0,e.useState)(!0),[r,a]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{t||setTimeout((()=>{a(!0)}),100)}),[t]),(0,f.jsxs)("div",{className:"App",children:[(0,f.jsx)(ua,{isLoading:t,setIsLoading:n}),r&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{}),(0,f.jsx)(Cn,{}),(0,f.jsx)(sr,{}),(0,f.jsx)(kr,{}),(0,f.jsx)(Gr,{})]})]})},da=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:i,getTTFB:o}=t;n(e),r(e),a(e),i(e),o(e)}))};t.createRoot(document.getElementById("root")).render((0,f.jsx)(e.StrictMode,{children:(0,f.jsx)(ca,{})})),da()})()})();
//# sourceMappingURL=main.3c46a3bb.js.map