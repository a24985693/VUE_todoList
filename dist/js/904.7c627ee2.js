(self["webpackChunkto_do_list"]=self["webpackChunkto_do_list"]||[]).push([[904],{9011:function(e,t,n){
/*!
  * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,o){e.exports=o(n(7269),n(7956),n(2105),n(4035))})(0,(function(e,t,n,o){"use strict";const s="5.3.3";class r extends n{constructor(t,n){super(),t=o.getElement(t),t&&(this._element=t,this._config=this._getConfig(n),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),t.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){o.executeAfterTransition(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(t){return e.get(o.getElement(t),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return s}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}return r}))},7269:function(e){
/*!
  * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=new Map,t={set(t,n,o){e.has(t)||e.set(t,new Map);const s=e.get(t);s.has(n)||0===s.size?s.set(n,o):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get(t,n){return e.has(t)&&e.get(t).get(n)||null},remove(t,n){if(!e.has(t))return;const o=e.get(t);o.delete(n),0===o.size&&e.delete(t)}};return t}))},7956:function(e,t,n){
/*!
  * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,o){e.exports=o(n(4035))})(0,(function(e){"use strict";const t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,o=/::\d+$/,s={};let r=1;const i={mouseenter:"mouseover",mouseleave:"mouseout"},a=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function u(e,t){return t&&`${t}::${r++}`||e.uidEvent||r++}function c(e){const t=u(e);return e.uidEvent=t,s[t]=s[t]||{},s[t]}function l(e,t){return function n(o){return _(o,{delegateTarget:e}),n.oneOff&&y.off(e,o.type,t),t.apply(e,[o])}}function f(e,t,n){return function o(s){const r=e.querySelectorAll(t);for(let{target:i}=s;i&&i!==this;i=i.parentNode)for(const a of r)if(a===i)return _(s,{delegateTarget:i}),o.oneOff&&y.off(e,s.type,t,n),n.apply(i,[s])}}function d(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function h(e,t,n){const o="string"===typeof t,s=o?n:t||n;let r=b(e);return a.has(r)||(r=e),[o,s,r]}function m(e,n,o,s,r){if("string"!==typeof n||!e)return;let[a,m,g]=h(n,o,s);if(n in i){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};m=e(m)}const p=c(e),b=p[g]||(p[g]={}),y=d(b,m,a?o:null);if(y)return void(y.oneOff=y.oneOff&&r);const _=u(m,n.replace(t,"")),E=a?f(e,o,m):l(e,m);E.delegationSelector=a?o:null,E.callable=m,E.oneOff=r,E.uidEvent=_,b[_]=E,e.addEventListener(g,E,a)}function g(e,t,n,o,s){const r=d(t[n],o,s);r&&(e.removeEventListener(n,r,Boolean(s)),delete t[n][r.uidEvent])}function p(e,t,n,o){const s=t[n]||{};for(const[r,i]of Object.entries(s))r.includes(o)&&g(e,t,n,i.callable,i.delegationSelector)}function b(e){return e=e.replace(n,""),i[e]||e}const y={on(e,t,n,o){m(e,t,n,o,!1)},one(e,t,n,o){m(e,t,n,o,!0)},off(e,t,n,s){if("string"!==typeof t||!e)return;const[r,i,a]=h(t,n,s),u=a!==t,l=c(e),f=l[a]||{},d=t.startsWith(".");if("undefined"===typeof i){if(d)for(const n of Object.keys(l))p(e,l,n,t.slice(1));for(const[n,s]of Object.entries(f)){const r=n.replace(o,"");u&&!t.includes(r)||g(e,l,a,s.callable,s.delegationSelector)}}else{if(!Object.keys(f).length)return;g(e,l,a,i,r?n:null)}},trigger(t,n,o){if("string"!==typeof n||!t)return null;const s=e.getjQuery(),r=b(n),i=n!==r;let a=null,u=!0,c=!0,l=!1;i&&s&&(a=s.Event(n,o),s(t).trigger(a),u=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),l=a.isDefaultPrevented());const f=_(new Event(n,{bubbles:u,cancelable:!0}),o);return l&&f.preventDefault(),c&&t.dispatchEvent(f),f.defaultPrevented&&a&&a.preventDefault(),f}};function _(e,t={}){for(const[o,s]of Object.entries(t))try{e[o]=s}catch(n){Object.defineProperty(e,o,{configurable:!0,get(){return s}})}return e}return y}))},2333:function(e){
/*!
  * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!==typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const n={setDataAttribute(e,n,o){e.setAttribute(`data-bs-${t(n)}`,o)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};const n={},o=Object.keys(t.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const s of o){let o=s.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=e(t.dataset[s])}return n},getDataAttribute(n,o){return e(n.getAttribute(`data-bs-${t(o)}`))}};return n}))},5411:function(e,t,n){
/*!
  * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,o){e.exports=o(n(4035))})(0,(function(e){"use strict";const t=t=>{let n=t.getAttribute("data-bs-target");if(!n||"#"===n){let e=t.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),n=e&&"#"!==e?e.trim():null}return n?n.split(",").map((t=>e.parseSelector(t))).join(","):null},n={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let o=e.parentNode.closest(t);while(o)n.push(o),o=o.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(n,t).filter((t=>!e.isDisabled(t)&&e.isVisible(t)))},getSelectorFromElement(e){const o=t(e);return o&&n.findOne(o)?o:null},getElementFromSelector(e){const o=t(e);return o?n.findOne(o):null},getMultipleElementsFromSelector(e){const o=t(e);return o?n.find(o):[]}};return n}))},653:function(e,t,n){
/*!
  * Bootstrap toast.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,o){e.exports=o(n(9011),n(7956),n(8248),n(4035))})(0,(function(e,t,n,o){"use strict";const s="toast",r="bs.toast",i=`.${r}`,a=`mouseover${i}`,u=`mouseout${i}`,c=`focusin${i}`,l=`focusout${i}`,f=`hide${i}`,d=`hidden${i}`,h=`show${i}`,m=`shown${i}`,g="fade",p="hide",b="show",y="showing",_={animation:"boolean",autohide:"boolean",delay:"number"},E={animation:!0,autohide:!0,delay:5e3};class v extends e{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return E}static get DefaultType(){return _}static get NAME(){return s}show(){const e=t.trigger(this._element,h);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(g);const n=()=>{this._element.classList.remove(y),t.trigger(this._element,m),this._maybeScheduleHide()};this._element.classList.remove(p),o.reflow(this._element),this._element.classList.add(b,y),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=t.trigger(this._element,f);if(e.defaultPrevented)return;const n=()=>{this._element.classList.add(p),this._element.classList.remove(y,b),t.trigger(this._element,d)};this._element.classList.add(y),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(b),super.dispose()}isShown(){return this._element.classList.contains(b)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){t.on(this._element,a,(e=>this._onInteraction(e,!0))),t.on(this._element,u,(e=>this._onInteraction(e,!1))),t.on(this._element,c,(e=>this._onInteraction(e,!0))),t.on(this._element,l,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=v.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return n.enableDismissTrigger(v),o.defineJQueryPlugin(v),v}))},8248:function(e,t,n){
/*!
  * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,o){o(t,n(7956),n(5411),n(4035))})(0,(function(e,t,n,o){"use strict";const s=(e,s="hide")=>{const r=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;t.on(document,r,`[data-bs-dismiss="${i}"]`,(function(t){if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),o.isDisabled(this))return;const r=n.getElementFromSelector(this)||this.closest(`.${i}`),a=e.getOrCreateInstance(r);a[s]()}))};e.enableDismissTrigger=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}))},2105:function(e,t,n){
/*!
  * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,o){e.exports=o(n(2333),n(4035))})(0,(function(e,t){"use strict";class n{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(n,o){const s=t.isElement(o)?e.getDataAttribute(o,"config"):{};return{...this.constructor.Default,..."object"===typeof s?s:{},...t.isElement(o)?e.getDataAttributes(o):{},..."object"===typeof n?n:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[o,s]of Object.entries(n)){const n=e[o],r=t.isElement(n)?"element":t.toType(n);if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${r}" but expected type "${s}".`)}}}return n}))},4035:function(e,t){
/*!
  * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){n(t)})(0,(function(e){"use strict";const t=1e6,n=1e3,o="transitionend",s=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),r=e=>null===e||void 0===e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),i=e=>{do{e+=Math.floor(Math.random()*t)}while(document.getElementById(e));return e},a=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:o}=window.getComputedStyle(e);const s=Number.parseFloat(t),r=Number.parseFloat(o);return s||r?(t=t.split(",")[0],o=o.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(o))*n):0},u=e=>{e.dispatchEvent(new Event(o))},c=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),l=e=>c(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(s(e)):null,f=e=>{if(!c(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},d=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),h=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?h(e.parentNode):null},m=()=>{},g=e=>{e.offsetHeight},p=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,b=[],y=e=>{"loading"===document.readyState?(b.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of b)e()})),b.push(e)):e()},_=()=>"rtl"===document.documentElement.dir,E=e=>{y((()=>{const t=p();if(t){const n=e.NAME,o=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=o,e.jQueryInterface)}}))},v=(e,t=[],n=e)=>"function"===typeof e?e(...t):n,w=(e,t,n=!0)=>{if(!n)return void v(e);const s=5,r=a(t)+s;let i=!1;const c=({target:n})=>{n===t&&(i=!0,t.removeEventListener(o,c),v(e))};t.addEventListener(o,c),setTimeout((()=>{i||u(t)}),r)},S=(e,t,n,o)=>{const s=e.length;let r=e.indexOf(t);return-1===r?!n&&o?e[s-1]:e[0]:(r+=n?1:-1,o&&(r=(r+s)%s),e[Math.max(0,Math.min(r,s-1))])};e.defineJQueryPlugin=E,e.execute=v,e.executeAfterTransition=w,e.findShadowRoot=h,e.getElement=l,e.getNextActiveElement=S,e.getTransitionDurationFromElement=a,e.getUID=i,e.getjQuery=p,e.isDisabled=d,e.isElement=c,e.isRTL=_,e.isVisible=f,e.noop=m,e.onDOMContentLoaded=y,e.parseSelector=s,e.reflow=g,e.toType=r,e.triggerTransitionEnd=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}))},1904:function(e,t,n){"use strict";n.d(t,{A:function(){return w}});var o=n(641);const s={class:"toast-container position-fixed end-0 pe-3",style:{top:"75px"}};function r(e,t,n,r,i,a){const u=(0,o.g2)("Toast");return(0,o.uX)(),(0,o.CE)("div",s,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.messages,((e,t)=>((0,o.uX)(),(0,o.Wv)(u,{key:t,msg:e},null,8,["msg"])))),128))])}var i=n(33);const a={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},u={class:"toast-header"},c={class:"me-auto"},l=(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),f={class:"toast-body"};function d(e,t,n,s,r,d){return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.Lk)("div",u,[(0,o.Lk)("span",{class:(0,i.C4)([`bg-${n.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,o.Lk)("strong",c,(0,i.v_)(n.msg.title),1),l]),(0,o.Lk)("div",f,(0,i.v_)(n.msg.content),1)],512)}var h=n(653),m=n.n(h),g={name:"Toast",props:["msg"],mounted(){const e=this.$refs.toast,t=new(m())(e,{delay:4e3});t.show()}},p=n(6262);const b=(0,p.A)(g,[["render",d]]);var y=b,_=n(6278),E={components:{Toast:y},computed:{...(0,_.aH)({messages:e=>e.status.messages})}};const v=(0,p.A)(E,[["render",r]]);var w=v}}]);
//# sourceMappingURL=904.7c627ee2.js.map