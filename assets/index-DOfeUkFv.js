var Zp=Object.defineProperty;var eg=(r,e,t)=>e in r?Zp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var au=(r,e,t)=>eg(r,typeof e!="symbol"?e+"":e,t);import{r as M,a as tg,N as ng,u as od,L as Xo,R as rg,b as ad,c as Ni,H as sg,d as ig,e as Ye,O as og}from"./react-CkCFmPma.js";import{_ as rl,c as ag}from"./supabase-R06Uq91X.js";import{S as lg,M as cg,L as ug,a as hg,D as dg,C as fg,b as mg,c as pg,P as gg,d as _g}from"./icons-oMI2XD79.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var ld={exports:{}},to={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg=M,vg=Symbol.for("react.element"),bg=Symbol.for("react.fragment"),xg=Object.prototype.hasOwnProperty,wg=yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ig={key:!0,ref:!0,__self:!0,__source:!0};function cd(r,e,t){var n,s={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)xg.call(e,n)&&!Ig.hasOwnProperty(n)&&(s[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:vg,type:r,key:i,ref:o,props:s,_owner:wg.current}}to.Fragment=bg;to.jsx=cd;to.jsxs=cd;ld.exports=to;var u=ld.exports,ud,lu=tg;ud=lu.createRoot,lu.hydrateRoot;var cu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Eg=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],l=r[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,l=o?r[s+1]:0,c=s+2<r.length,d=c?r[s+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,E=d&63;c||(E=64,o||(v=64)),n.push(t[m],t[p],t[v],t[E])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(hd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Eg(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],l=s<r.length?t[r.charAt(s)]:0;++s;const d=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||l==null||d==null||p==null)throw new Tg;const v=i<<2|l>>4;if(n.push(v),d!==64){const E=l<<4&240|d>>2;if(n.push(E),p!==64){const A=d<<6&192|p;n.push(A)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Tg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ag=function(r){const e=hd(r);return dd.encodeByteArray(e,!0)},Pi=function(r){return Ag(r).replace(/\./g,"")},fd=function(r){try{return dd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=()=>Sg().__FIREBASE_DEFAULTS__,Ng=()=>{if(typeof process>"u"||typeof cu>"u")return;const r=cu.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Pg=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&fd(r[1]);return e&&JSON.parse(e)},no=()=>{try{return Rg()||Ng()||Pg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},md=r=>{var e,t;return(t=(e=no())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Cg=r=>{const e=md(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},pd=()=>{var r;return(r=no())===null||r===void 0?void 0:r.config},gd=r=>{var e;return(e=no())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Pi(JSON.stringify(t)),Pi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function jg(){var r;const e=(r=no())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Og(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Lg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fg(){const r=Te();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function _d(){return!jg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yd(){try{return typeof indexedDB=="object"}catch{return!1}}function Ug(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="FirebaseError";class mt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Bg,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ws.prototype.create)}}class ws{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?qg(i,n):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new mt(s,l,n)}}function qg(r,e){return r.replace($g,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const $g=/\{\$([^}]+)}/g;function zg(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function is(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(uu(i)&&uu(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function uu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function $r(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zr(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Kg(r,e){const t=new Gg(r,e);return t.subscribe.bind(t)}class Gg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Wg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Zo),s.error===void 0&&(s.error=Zo),s.complete===void 0&&(s.complete=Zo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wg(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Zo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(r){return r&&r._delegate?r._delegate:r}class Wt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new kg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jg(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Qg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qg(r){return r===fn?void 0:r}function Jg(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(te||(te={}));const Xg={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Zg=te.INFO,e_={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},t_=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=e_[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=Zg,this._logHandler=t_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const n_=(r,e)=>e.some(t=>r instanceof t);let hu,du;function r_(){return hu||(hu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s_(){return du||(du=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vd=new WeakMap,wa=new WeakMap,bd=new WeakMap,ea=new WeakMap,il=new WeakMap;function i_(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(qt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&vd.set(t,r)}).catch(()=>{}),il.set(e,r),e}function o_(r){if(wa.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});wa.set(r,e)}let Ia={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return wa.get(r);if(e==="objectStoreNames")return r.objectStoreNames||bd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function a_(r){Ia=r(Ia)}function l_(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(ta(this),e,...t);return bd.set(n,e.sort?e.sort():[e]),qt(n)}:s_().includes(r)?function(...e){return r.apply(ta(this),e),qt(vd.get(this))}:function(...e){return qt(r.apply(ta(this),e))}}function c_(r){return typeof r=="function"?l_(r):(r instanceof IDBTransaction&&o_(r),n_(r,r_())?new Proxy(r,Ia):r)}function qt(r){if(r instanceof IDBRequest)return i_(r);if(ea.has(r))return ea.get(r);const e=c_(r);return e!==r&&(ea.set(r,e),il.set(e,r)),e}const ta=r=>il.get(r);function u_(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),l=qt(o);return n&&o.addEventListener("upgradeneeded",c=>{n(qt(o.result),c.oldVersion,c.newVersion,qt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const h_=["get","getKey","getAll","getAllKeys","count"],d_=["put","add","delete","clear"],na=new Map;function fu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(na.get(e))return na.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=d_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||h_.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let d=c.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&c.done]))[0]};return na.set(e,i),i}a_(r=>({...r,get:(e,t,n)=>fu(e,t)||r.get(e,t,n),has:(e,t)=>!!fu(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(m_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function m_(r){const e=r.getComponent();return e?.type==="VERSION"}const Ea="@firebase/app",mu="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new sl("@firebase/app"),p_="@firebase/app-compat",g_="@firebase/analytics-compat",__="@firebase/analytics",y_="@firebase/app-check-compat",v_="@firebase/app-check",b_="@firebase/auth",x_="@firebase/auth-compat",w_="@firebase/database",I_="@firebase/data-connect",E_="@firebase/database-compat",T_="@firebase/functions",A_="@firebase/functions-compat",S_="@firebase/installations",R_="@firebase/installations-compat",N_="@firebase/messaging",P_="@firebase/messaging-compat",C_="@firebase/performance",k_="@firebase/performance-compat",D_="@firebase/remote-config",V_="@firebase/remote-config-compat",j_="@firebase/storage",O_="@firebase/storage-compat",M_="@firebase/firestore",L_="@firebase/vertexai-preview",F_="@firebase/firestore-compat",U_="firebase",B_="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="[DEFAULT]",q_={[Ea]:"fire-core",[p_]:"fire-core-compat",[__]:"fire-analytics",[g_]:"fire-analytics-compat",[v_]:"fire-app-check",[y_]:"fire-app-check-compat",[b_]:"fire-auth",[x_]:"fire-auth-compat",[w_]:"fire-rtdb",[I_]:"fire-data-connect",[E_]:"fire-rtdb-compat",[T_]:"fire-fn",[A_]:"fire-fn-compat",[S_]:"fire-iid",[R_]:"fire-iid-compat",[N_]:"fire-fcm",[P_]:"fire-fcm-compat",[C_]:"fire-perf",[k_]:"fire-perf-compat",[D_]:"fire-rc",[V_]:"fire-rc-compat",[j_]:"fire-gcs",[O_]:"fire-gcs-compat",[M_]:"fire-fst",[F_]:"fire-fst-compat",[L_]:"fire-vertex","fire-js":"fire-js",[U_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Map,$_=new Map,Aa=new Map;function pu(r,e){try{r.container.addComponent(e)}catch(t){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function xn(r){const e=r.name;if(Aa.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;Aa.set(e,r);for(const t of Ci.values())pu(t,r);for(const t of $_.values())pu(t,r);return!0}function ro(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function yt(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new ws("app","Firebase",z_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=B_;function xd(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ta,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});if(t||(t=pd()),!t)throw $t.create("no-options");const i=Ci.get(s);if(i){if(is(t,i.options)&&is(n,i.config))return i;throw $t.create("duplicate-app",{appName:s})}const o=new Yg(s);for(const c of Aa.values())o.addComponent(c);const l=new K_(t,n,o);return Ci.set(s,l),l}function wd(r=Ta){const e=Ci.get(r);if(!e&&r===Ta&&pd())return xd();if(!e)throw $t.create("no-app",{appName:r});return e}function lt(r,e,t){var n;let s=(n=q_[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(l.join(" "));return}xn(new Wt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="firebase-heartbeat-database",W_=1,os="firebase-heartbeat-store";let ra=null;function Id(){return ra||(ra=u_(G_,W_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(os)}catch(t){console.warn(t)}}}}).catch(r=>{throw $t.create("idb-open",{originalErrorMessage:r.message})})),ra}async function H_(r){try{const t=(await Id()).transaction(os),n=await t.objectStore(os).get(Ed(r));return await t.done,n}catch(e){if(e instanceof mt)Et.warn(e.message);else{const t=$t.create("idb-get",{originalErrorMessage:e?.message});Et.warn(t.message)}}}async function gu(r,e){try{const n=(await Id()).transaction(os,"readwrite");await n.objectStore(os).put(e,Ed(r)),await n.done}catch(t){if(t instanceof mt)Et.warn(t.message);else{const n=$t.create("idb-set",{originalErrorMessage:t?.message});Et.warn(n.message)}}}function Ed(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=1024,J_=30*24*60*60*1e3;class Y_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Z_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_u();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=J_}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Et.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_u(),{heartbeatsToSend:n,unsentEntries:s}=X_(this._heartbeatsCache.heartbeats),i=Pi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Et.warn(t),""}}}function _u(){return new Date().toISOString().substring(0,10)}function X_(r,e=Q_){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),yu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Z_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yd()?Ug().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await H_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yu(r){return Pi(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(r){xn(new Wt("platform-logger",e=>new f_(e),"PRIVATE")),xn(new Wt("heartbeat",e=>new Y_(e),"PRIVATE")),lt(Ea,mu,r),lt(Ea,mu,"esm2017"),lt("fire-js","")}ey("");var ty="firebase",ny="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(ty,ny,"app");function Td(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ry=Td,Ad=new ws("auth","Firebase",Td());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new sl("@firebase/auth");function sy(r,...e){ki.logLevel<=te.WARN&&ki.warn(`Auth (${Pn}): ${r}`,...e)}function mi(r,...e){ki.logLevel<=te.ERROR&&ki.error(`Auth (${Pn}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(r,...e){throw ol(r,...e)}function ct(r,...e){return ol(r,...e)}function Sd(r,e,t){const n=Object.assign(Object.assign({},ry()),{[e]:t});return new ws("auth","Firebase",n).create(e,{appName:r.name})}function zt(r){return Sd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ol(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Ad.create(r,...e)}function J(r,e,...t){if(!r)throw ol(e,...t)}function vt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw mi(e),new Error(e)}function Tt(r,e){r||vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function iy(){return vu()==="http:"||vu()==="https:"}function vu(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iy()||Mg()||"connection"in navigator)?navigator.onLine:!0}function ay(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile=Vg()||Lg()}get(){return oy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(r,e){Tt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new Es(3e4,6e4);function Cn(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Yt(r,e,t,n,s={}){return Nd(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const l=Is(Object.assign({key:r.config.apiKey},o)).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const d=Object.assign({method:e,headers:c},i);return Og()||(d.referrerPolicy="no-referrer"),Rd.fetch()(Pd(r,r.config.apiHost,t,l),d)})}async function Nd(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},ly),e);try{const s=new hy(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ni(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ni(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ni(r,"email-already-in-use",o);if(c==="USER_DISABLED")throw ni(r,"user-disabled",o);const m=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Sd(r,m,d);rt(r,m)}}catch(s){if(s instanceof mt)throw s;rt(r,"network-request-failed",{message:String(s)})}}async function so(r,e,t,n,s={}){const i=await Yt(r,e,t,n,s);return"mfaPendingCredential"in i&&rt(r,"multi-factor-auth-required",{_serverResponse:i}),i}function Pd(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?al(r.config,s):`${r.config.apiScheme}://${s}`}function uy(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(ct(this.auth,"network-request-failed")),cy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ni(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=ct(r,e,n);return s.customData._tokenResponse=t,s}function bu(r){return r!==void 0&&r.enterprise!==void 0}class dy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return uy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fy(r,e){return Yt(r,"GET","/v2/recaptchaConfig",Cn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function my(r,e){return Yt(r,"POST","/v1/accounts:delete",e)}async function Cd(r,e){return Yt(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function py(r,e=!1){const t=Ie(r),n=await t.getIdToken(e),s=ll(n);J(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:n,authTime:Yr(sa(s.auth_time)),issuedAtTime:Yr(sa(s.iat)),expirationTime:Yr(sa(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function sa(r){return Number(r)*1e3}function ll(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return mi("JWT malformed, contained fewer than 3 sections"),null;try{const s=fd(t);return s?JSON.parse(s):(mi("Failed to decode base64 JWT payload"),null)}catch(s){return mi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function xu(r){const e=ll(r);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof mt&&gy(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function gy({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yr(this.lastLoginAt),this.creationTime=Yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(r){var e;const t=r.auth,n=await r.getIdToken(),s=await as(r,Cd(t,{idToken:n}));J(s?.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kd(i.providerUserInfo):[],l=vy(r.providerData,o),c=r.isAnonymous,d=!(r.email&&i.passwordHash)&&!l?.length,m=c?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ra(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(r,p)}async function yy(r){const e=Ie(r);await Di(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vy(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function kd(r){return r.map(e=>{var{providerId:t}=e,n=rl(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(r,e){const t=await Nd(r,{},async()=>{const n=Is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=Pd(r,s,"/v1/token",`key=${i}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Rd.fetch()(o,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xy(r,e){return Yt(r,"POST","/v2/accounts:revokeToken",Cn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=xu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await by(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Zn;return n&&(J(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(r,e){J(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ra(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await as(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return py(this,e)}reload(){return yy(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Di(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await as(this,my(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,l,c,d,m;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,E=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,F=(d=t.createdAt)!==null&&d!==void 0?d:void 0,O=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:L,emailVerified:$,isAnonymous:P,providerData:R,stsTokenManager:x}=t;J(L&&x,e,"internal-error");const _=Zn.fromJSON(this.name,x);J(typeof L=="string",e,"internal-error"),Dt(p,e.name),Dt(v,e.name),J(typeof $=="boolean",e,"internal-error"),J(typeof P=="boolean",e,"internal-error"),Dt(E,e.name),Dt(A,e.name),Dt(C,e.name),Dt(k,e.name),Dt(F,e.name),Dt(O,e.name);const w=new bt({uid:L,auth:e,email:v,emailVerified:$,displayName:p,isAnonymous:P,photoURL:A,phoneNumber:E,tenantId:C,stsTokenManager:_,createdAt:F,lastLoginAt:O});return R&&Array.isArray(R)&&(w.providerData=R.map(I=>Object.assign({},I))),k&&(w._redirectEventId=k),w}static async _fromIdTokenResponse(e,t,n=!1){const s=new Zn;s.updateFromServerResponse(t);const i=new bt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Di(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Zn;l.updateFromIdToken(n);const c=new bt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ra(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new Map;function xt(r){Tt(r instanceof Function,"Expected a class definition");let e=wu.get(r);return e?(Tt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,wu.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Dd.type="NONE";const Iu=Dd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(r,e,t){return`firebase:${r}:${e}:${t}`}class er{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=pi(this.userKey,s.apiKey,i),this.fullPersistenceKey=pi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new er(xt(Iu),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||xt(Iu);const o=pi(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(o);if(m){const p=bt._fromJSON(e,m);d!==i&&(l=p),i=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new er(i,e,n):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new er(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Md(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fd(e))return"Blackberry";if(Ud(e))return"Webos";if(jd(e))return"Safari";if((e.includes("chrome/")||Od(e))&&!e.includes("edge/"))return"Chrome";if(Ld(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function Vd(r=Te()){return/firefox\//i.test(r)}function jd(r=Te()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Od(r=Te()){return/crios\//i.test(r)}function Md(r=Te()){return/iemobile/i.test(r)}function Ld(r=Te()){return/android/i.test(r)}function Fd(r=Te()){return/blackberry/i.test(r)}function Ud(r=Te()){return/webos/i.test(r)}function cl(r=Te()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function wy(r=Te()){var e;return cl(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Iy(){return Fg()&&document.documentMode===10}function Bd(r=Te()){return cl(r)||Ld(r)||Ud(r)||Fd(r)||/windows phone/i.test(r)||Md(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(r,e=[]){let t;switch(r){case"Browser":t=Eu(Te());break;case"Worker":t=`${Eu(Te())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(r,e={}){return Yt(r,"GET","/v2/passwordPolicy",Cn(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=6;class Sy{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Ay,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tu(this),this.idTokenSubscription=new Tu(this),this.beforeStateQueue=new Ey(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ad,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xt(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await er.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Cd(this,{idToken:e}),n=await bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Di(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ay()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(zt(this));const t=e?Ie(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ty(this),t=new Sy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ws("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await xy(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xt(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&sy(`Error while retrieving App Check token: ${t.error}`),t?.token}}function _r(r){return Ie(r)}class Tu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kg(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ny(r){io=r}function $d(r){return io.loadJS(r)}function Py(){return io.recaptchaEnterpriseScript}function Cy(){return io.gapiScript}function ky(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const Dy="recaptcha-enterprise",Vy="NO_RECAPTCHA";class jy{constructor(e){this.type=Dy,this.auth=_r(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{fy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new dy(c);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;bu(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(Vy)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{n(this.auth).then(l=>{if(!t&&bu(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Py();c.length!==0&&(c+=l),$d(c).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Au(r,e,t,n=!1){const s=new jy(r);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Su(r,e,t,n){var s;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Au(r,e,t,t==="getOobCode");return n(r,i)}else return n(r,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Au(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(r,e){const t=ro(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(is(i,e??{}))return s;rt(s,"already-initialized")}return t.initialize({options:e})}function My(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(xt);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function Ly(r,e,t){const n=_r(r);J(n._canInitEmulator,n,"emulator-config-failed"),J(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=zd(e),{host:o,port:l}=Fy(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${i}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Uy()}function zd(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Fy(r){const e=zd(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Ru(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Ru(o)}}}function Ru(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Uy(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,t){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}}async function By(r,e){return Yt(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(r,e){return so(r,"POST","/v1/accounts:signInWithPassword",Cn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $y(r,e){return so(r,"POST","/v1/accounts:signInWithEmailLink",Cn(r,e))}async function zy(r,e){return so(r,"POST","/v1/accounts:signInWithEmailLink",Cn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends ul{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ls(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ls(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Su(e,t,"signInWithPassword",qy);case"emailLink":return $y(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Su(e,n,"signUpPassword",By);case"emailLink":return zy(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(r,e){return so(r,"POST","/v1/accounts:signInWithIdp",Cn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="http://localhost";class wn extends ul{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=rl(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new wn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return tr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,tr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tr(e,t)}buildRequest(){const e={requestUri:Ky,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Is(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Wy(r){const e=$r(zr(r)).link,t=e?$r(zr(e)).deep_link_id:null,n=$r(zr(r)).deep_link_id;return(n?$r(zr(n)).link:null)||n||t||e||r}class hl{constructor(e){var t,n,s,i,o,l;const c=$r(zr(e)),d=(t=c.apiKey)!==null&&t!==void 0?t:null,m=(n=c.oobCode)!==null&&n!==void 0?n:null,p=Gy((s=c.mode)!==null&&s!==void 0?s:null);J(d&&m&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=m,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Wy(e);try{return new hl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.providerId=yr.PROVIDER_ID}static credential(e,t){return ls._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=hl.parseLink(t);return J(n,"argument-error"),ls._fromEmailAndCode(e,n.code,n.tenantId)}}yr.PROVIDER_ID="password";yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Kd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Ts{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Mt.credential(t,n)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Ts{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Ts{constructor(){super("twitter.com")}static credential(e,t){return wn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ft.credential(t,n)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await bt._fromIdTokenResponse(e,n,s),o=Nu(n);return new rr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Nu(n);return new rr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Nu(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends mt{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Vi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Vi(e,t,n,s)}}function Gd(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vi._fromErrorAndOperation(r,i,e,n):i})}async function Hy(r,e,t=!1){const n=await as(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return rr._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(r,e,t=!1){const{auth:n}=r;if(yt(n.app))return Promise.reject(zt(n));const s="reauthenticate";try{const i=await as(r,Gd(n,s,e,r),t);J(i.idToken,n,"internal-error");const o=ll(i.idToken);J(o,n,"internal-error");const{sub:l}=o;return J(r.uid===l,n,"user-mismatch"),rr._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&rt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(r,e,t=!1){if(yt(r.app))return Promise.reject(zt(r));const n="signIn",s=await Gd(r,n,e),i=await rr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function Jy(r,e){return Wd(_r(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(r){const e=_r(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Xy(r,e,t){return yt(r.app)?Promise.reject(zt(r)):Jy(Ie(r),yr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Yy(r),n})}function Zy(r,e,t,n){return Ie(r).onIdTokenChanged(e,t,n)}function ev(r,e,t){return Ie(r).beforeAuthStateChanged(e,t)}function tv(r,e,t,n){return Ie(r).onAuthStateChanged(e,t,n)}function nv(r){return Ie(r).signOut()}const ji="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ji,"1"),this.storage.removeItem(ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=1e3,sv=10;class Qd extends Hd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);Iy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sv):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},rv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qd.type="LOCAL";const iv=Qd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Hd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jd.type="SESSION";const Yd=Jd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new oo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(o).map(async d=>d(t.origin,i)),c=await ov(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const d=dl("",20);s.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(m),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return window}function lv(r){ut().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function cv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uv(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function hv(){return Xd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="firebaseLocalStorageDb",dv=1,Oi="firebaseLocalStorage",ef="fbase_key";class As{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ao(r,e){return r.transaction([Oi],e?"readwrite":"readonly").objectStore(Oi)}function fv(){const r=indexedDB.deleteDatabase(Zd);return new As(r).toPromise()}function Na(){const r=indexedDB.open(Zd,dv);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Oi,{keyPath:ef})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Oi)?e(n):(n.close(),await fv(),e(await Na()))})})}async function Pu(r,e,t){const n=ao(r,!0).put({[ef]:e,value:t});return new As(n).toPromise()}async function mv(r,e){const t=ao(r,!1).get(e),n=await new As(t).toPromise();return n===void 0?null:n.value}function Cu(r,e){const t=ao(r,!0).delete(e);return new As(t).toPromise()}const pv=800,gv=3;class tf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Na(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>gv)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oo._getInstance(hv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await cv(),!this.activeServiceWorker)return;this.sender=new av(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Na();return await Pu(e,ji,"1"),await Cu(e,ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pu(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>mv(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ao(s,!1).getAll();return new As(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tf.type="LOCAL";const _v=tf;new Es(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(r,e){return e?xt(e):(J(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends ul{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vv(r){return Wd(r.auth,new fl(r),r.bypassAuthState)}function bv(r){const{auth:e,user:t}=r;return J(t,e,"internal-error"),Qy(t,new fl(r),r.bypassAuthState)}async function xv(r){const{auth:e,user:t}=r;return J(t,e,"internal-error"),Hy(t,new fl(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vv;case"linkViaPopup":case"linkViaRedirect":return xv;case"reauthViaPopup":case"reauthViaRedirect":return bv;default:rt(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=new Es(2e3,1e4);class Xn extends nf{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=dl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wv.get())};e()}}Xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="pendingRedirect",gi=new Map;class Ev extends nf{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=gi.get(this.auth._key());if(!e){try{const n=await Tv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}gi.set(this.auth._key(),e)}return this.bypassAuthState||gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tv(r,e){const t=Rv(e),n=Sv(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Av(r,e){gi.set(r._key(),e)}function Sv(r){return xt(r._redirectPersistence)}function Rv(r){return pi(Iv,r.config.apiKey,r.name)}async function Nv(r,e,t=!1){if(yt(r.app))return Promise.reject(zt(r));const n=_r(r),s=yv(n,e),o=await new Ev(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=10*60*1e3;class Cv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!rf(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(ct(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pv&&this.cachedEventUids.clear(),this.cachedEventUids.has(ku(e))}saveEventToCache(e){this.cachedEventUids.add(ku(e)),this.lastProcessedEventTime=Date.now()}}function ku(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function rf({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function kv(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rf(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(r,e={}){return Yt(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jv=/^https?/;async function Ov(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Dv(r);for(const t of e)try{if(Mv(t))return}catch{}rt(r,"unauthorized-domain")}function Mv(r){const e=Sa(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!jv.test(t))return!1;if(Vv.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=new Es(3e4,6e4);function Du(){const r=ut().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Fv(r){return new Promise((e,t)=>{var n,s,i;function o(){Du(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Du(),t(ct(r,"network-request-failed"))},timeout:Lv.get()})}if(!((s=(n=ut().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ut().gapi)===null||i===void 0)&&i.load)o();else{const l=ky("iframefcb");return ut()[l]=()=>{gapi.load?o():t(ct(r,"network-request-failed"))},$d(`${Cy()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw _i=null,e})}let _i=null;function Uv(r){return _i=_i||Fv(r),_i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=new Es(5e3,15e3),qv="__/auth/iframe",$v="emulator/auth/iframe",zv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gv(r){const e=r.config;J(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?al(e,$v):`https://${r.config.authDomain}/${qv}`,n={apiKey:e.apiKey,appName:r.name,v:Pn},s=Kv.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Is(n).slice(1)}`}async function Wv(r){const e=await Uv(r),t=ut().gapi;return J(t,r,"internal-error"),e.open({where:document.body,url:Gv(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zv,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=ct(r,"network-request-failed"),l=ut().setTimeout(()=>{i(o)},Bv.get());function c(){ut().clearTimeout(l),s(n)}n.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qv=500,Jv=600,Yv="_blank",Xv="http://localhost";class Vu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zv(r,e,t,n=Qv,s=Jv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Hv),{width:n.toString(),height:s.toString(),top:i,left:o}),d=Te().toLowerCase();t&&(l=Od(d)?Yv:t),Vd(d)&&(e=e||Xv,c.scrollbars="yes");const m=Object.entries(c).reduce((v,[E,A])=>`${v}${E}=${A},`,"");if(wy(d)&&l!=="_self")return eb(e||"",l),new Vu(null);const p=window.open(e||"",l,m);J(p,r,"popup-blocked");try{p.focus()}catch{}return new Vu(p)}function eb(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="__/auth/handler",nb="emulator/auth/handler",rb=encodeURIComponent("fac");async function ju(r,e,t,n,s,i){J(r.config.authDomain,r,"auth-domain-config-required"),J(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Pn,eventId:s};if(e instanceof Kd){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",zg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))o[m]=p}if(e instanceof Ts){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}r.tenantId&&(o.tid=r.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const c=await r._getAppCheckToken(),d=c?`#${rb}=${encodeURIComponent(c)}`:"";return`${sb(r)}?${Is(l).slice(1)}${d}`}function sb({config:r}){return r.emulator?al(r,nb):`https://${r.authDomain}/${tb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="webStorageSupport";class ib{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yd,this._completeRedirectFn=Nv,this._overrideRedirectResult=Av}async _openPopup(e,t,n,s){var i;Tt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ju(e,t,n,Sa(),s);return Zv(e,o,dl())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await ju(e,t,n,Sa(),s);return lv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Tt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Wv(e),n=new Cv(e);return t.register("authEvent",s=>(J(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ia,{type:ia},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[ia];o!==void 0&&t(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ov(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bd()||jd()||cl()}}const ob=ib;var Ou="@firebase/auth",Mu="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cb(r){xn(new Wt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qd(r)},d=new Ry(n,s,i,c);return My(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),xn(new Wt("auth-internal",e=>{const t=_r(e.getProvider("auth").getImmediate());return(n=>new ab(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(Ou,Mu,lb(r)),lt(Ou,Mu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=5*60,hb=gd("authIdTokenMaxAge")||ub;let Lu=null;const db=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>hb)return;const s=t?.token;Lu!==s&&(Lu=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fb(r=wd()){const e=ro(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Oy(r,{popupRedirectResolver:ob,persistence:[_v,iv,Yd]}),n=gd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=db(i.toString());ev(t,o,()=>o(t.currentUser)),Zy(t,l=>o(l))}}const s=md("auth");return s&&Ly(t,`http://${s}`),t}function mb(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Ny({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=ct("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",mb().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cb("Browser");var Fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vn,sf;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,_){function w(){}w.prototype=_.prototype,x.D=_.prototype,x.prototype=new w,x.prototype.constructor=x,x.C=function(I,b,T){for(var y=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)y[ee-2]=arguments[ee];return _.prototype[b].apply(I,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,_,w){w||(w=0);var I=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)I[b]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(b=0;16>b;++b)I[b]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=x.g[0],w=x.g[1],b=x.g[2];var T=x.g[3],y=_+(T^w&(b^T))+I[0]+3614090360&4294967295;_=w+(y<<7&4294967295|y>>>25),y=T+(b^_&(w^b))+I[1]+3905402710&4294967295,T=_+(y<<12&4294967295|y>>>20),y=b+(w^T&(_^w))+I[2]+606105819&4294967295,b=T+(y<<17&4294967295|y>>>15),y=w+(_^b&(T^_))+I[3]+3250441966&4294967295,w=b+(y<<22&4294967295|y>>>10),y=_+(T^w&(b^T))+I[4]+4118548399&4294967295,_=w+(y<<7&4294967295|y>>>25),y=T+(b^_&(w^b))+I[5]+1200080426&4294967295,T=_+(y<<12&4294967295|y>>>20),y=b+(w^T&(_^w))+I[6]+2821735955&4294967295,b=T+(y<<17&4294967295|y>>>15),y=w+(_^b&(T^_))+I[7]+4249261313&4294967295,w=b+(y<<22&4294967295|y>>>10),y=_+(T^w&(b^T))+I[8]+1770035416&4294967295,_=w+(y<<7&4294967295|y>>>25),y=T+(b^_&(w^b))+I[9]+2336552879&4294967295,T=_+(y<<12&4294967295|y>>>20),y=b+(w^T&(_^w))+I[10]+4294925233&4294967295,b=T+(y<<17&4294967295|y>>>15),y=w+(_^b&(T^_))+I[11]+2304563134&4294967295,w=b+(y<<22&4294967295|y>>>10),y=_+(T^w&(b^T))+I[12]+1804603682&4294967295,_=w+(y<<7&4294967295|y>>>25),y=T+(b^_&(w^b))+I[13]+4254626195&4294967295,T=_+(y<<12&4294967295|y>>>20),y=b+(w^T&(_^w))+I[14]+2792965006&4294967295,b=T+(y<<17&4294967295|y>>>15),y=w+(_^b&(T^_))+I[15]+1236535329&4294967295,w=b+(y<<22&4294967295|y>>>10),y=_+(b^T&(w^b))+I[1]+4129170786&4294967295,_=w+(y<<5&4294967295|y>>>27),y=T+(w^b&(_^w))+I[6]+3225465664&4294967295,T=_+(y<<9&4294967295|y>>>23),y=b+(_^w&(T^_))+I[11]+643717713&4294967295,b=T+(y<<14&4294967295|y>>>18),y=w+(T^_&(b^T))+I[0]+3921069994&4294967295,w=b+(y<<20&4294967295|y>>>12),y=_+(b^T&(w^b))+I[5]+3593408605&4294967295,_=w+(y<<5&4294967295|y>>>27),y=T+(w^b&(_^w))+I[10]+38016083&4294967295,T=_+(y<<9&4294967295|y>>>23),y=b+(_^w&(T^_))+I[15]+3634488961&4294967295,b=T+(y<<14&4294967295|y>>>18),y=w+(T^_&(b^T))+I[4]+3889429448&4294967295,w=b+(y<<20&4294967295|y>>>12),y=_+(b^T&(w^b))+I[9]+568446438&4294967295,_=w+(y<<5&4294967295|y>>>27),y=T+(w^b&(_^w))+I[14]+3275163606&4294967295,T=_+(y<<9&4294967295|y>>>23),y=b+(_^w&(T^_))+I[3]+4107603335&4294967295,b=T+(y<<14&4294967295|y>>>18),y=w+(T^_&(b^T))+I[8]+1163531501&4294967295,w=b+(y<<20&4294967295|y>>>12),y=_+(b^T&(w^b))+I[13]+2850285829&4294967295,_=w+(y<<5&4294967295|y>>>27),y=T+(w^b&(_^w))+I[2]+4243563512&4294967295,T=_+(y<<9&4294967295|y>>>23),y=b+(_^w&(T^_))+I[7]+1735328473&4294967295,b=T+(y<<14&4294967295|y>>>18),y=w+(T^_&(b^T))+I[12]+2368359562&4294967295,w=b+(y<<20&4294967295|y>>>12),y=_+(w^b^T)+I[5]+4294588738&4294967295,_=w+(y<<4&4294967295|y>>>28),y=T+(_^w^b)+I[8]+2272392833&4294967295,T=_+(y<<11&4294967295|y>>>21),y=b+(T^_^w)+I[11]+1839030562&4294967295,b=T+(y<<16&4294967295|y>>>16),y=w+(b^T^_)+I[14]+4259657740&4294967295,w=b+(y<<23&4294967295|y>>>9),y=_+(w^b^T)+I[1]+2763975236&4294967295,_=w+(y<<4&4294967295|y>>>28),y=T+(_^w^b)+I[4]+1272893353&4294967295,T=_+(y<<11&4294967295|y>>>21),y=b+(T^_^w)+I[7]+4139469664&4294967295,b=T+(y<<16&4294967295|y>>>16),y=w+(b^T^_)+I[10]+3200236656&4294967295,w=b+(y<<23&4294967295|y>>>9),y=_+(w^b^T)+I[13]+681279174&4294967295,_=w+(y<<4&4294967295|y>>>28),y=T+(_^w^b)+I[0]+3936430074&4294967295,T=_+(y<<11&4294967295|y>>>21),y=b+(T^_^w)+I[3]+3572445317&4294967295,b=T+(y<<16&4294967295|y>>>16),y=w+(b^T^_)+I[6]+76029189&4294967295,w=b+(y<<23&4294967295|y>>>9),y=_+(w^b^T)+I[9]+3654602809&4294967295,_=w+(y<<4&4294967295|y>>>28),y=T+(_^w^b)+I[12]+3873151461&4294967295,T=_+(y<<11&4294967295|y>>>21),y=b+(T^_^w)+I[15]+530742520&4294967295,b=T+(y<<16&4294967295|y>>>16),y=w+(b^T^_)+I[2]+3299628645&4294967295,w=b+(y<<23&4294967295|y>>>9),y=_+(b^(w|~T))+I[0]+4096336452&4294967295,_=w+(y<<6&4294967295|y>>>26),y=T+(w^(_|~b))+I[7]+1126891415&4294967295,T=_+(y<<10&4294967295|y>>>22),y=b+(_^(T|~w))+I[14]+2878612391&4294967295,b=T+(y<<15&4294967295|y>>>17),y=w+(T^(b|~_))+I[5]+4237533241&4294967295,w=b+(y<<21&4294967295|y>>>11),y=_+(b^(w|~T))+I[12]+1700485571&4294967295,_=w+(y<<6&4294967295|y>>>26),y=T+(w^(_|~b))+I[3]+2399980690&4294967295,T=_+(y<<10&4294967295|y>>>22),y=b+(_^(T|~w))+I[10]+4293915773&4294967295,b=T+(y<<15&4294967295|y>>>17),y=w+(T^(b|~_))+I[1]+2240044497&4294967295,w=b+(y<<21&4294967295|y>>>11),y=_+(b^(w|~T))+I[8]+1873313359&4294967295,_=w+(y<<6&4294967295|y>>>26),y=T+(w^(_|~b))+I[15]+4264355552&4294967295,T=_+(y<<10&4294967295|y>>>22),y=b+(_^(T|~w))+I[6]+2734768916&4294967295,b=T+(y<<15&4294967295|y>>>17),y=w+(T^(b|~_))+I[13]+1309151649&4294967295,w=b+(y<<21&4294967295|y>>>11),y=_+(b^(w|~T))+I[4]+4149444226&4294967295,_=w+(y<<6&4294967295|y>>>26),y=T+(w^(_|~b))+I[11]+3174756917&4294967295,T=_+(y<<10&4294967295|y>>>22),y=b+(_^(T|~w))+I[2]+718787259&4294967295,b=T+(y<<15&4294967295|y>>>17),y=w+(T^(b|~_))+I[9]+3951481745&4294967295,x.g[0]=x.g[0]+_&4294967295,x.g[1]=x.g[1]+(b+(y<<21&4294967295|y>>>11))&4294967295,x.g[2]=x.g[2]+b&4294967295,x.g[3]=x.g[3]+T&4294967295}n.prototype.u=function(x,_){_===void 0&&(_=x.length);for(var w=_-this.blockSize,I=this.B,b=this.h,T=0;T<_;){if(b==0)for(;T<=w;)s(this,x,T),T+=this.blockSize;if(typeof x=="string"){for(;T<_;)if(I[b++]=x.charCodeAt(T++),b==this.blockSize){s(this,I),b=0;break}}else for(;T<_;)if(I[b++]=x[T++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=_},n.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var _=1;_<x.length-8;++_)x[_]=0;var w=8*this.o;for(_=x.length-8;_<x.length;++_)x[_]=w&255,w/=256;for(this.u(x),x=Array(16),_=w=0;4>_;++_)for(var I=0;32>I;I+=8)x[w++]=this.g[_]>>>I&255;return x};function i(x,_){var w=l;return Object.prototype.hasOwnProperty.call(w,x)?w[x]:w[x]=_(x)}function o(x,_){this.h=_;for(var w=[],I=!0,b=x.length-1;0<=b;b--){var T=x[b]|0;I&&T==_||(w[b]=T,I=!1)}this.g=w}var l={};function c(x){return-128<=x&&128>x?i(x,function(_){return new o([_|0],0>_?-1:0)}):new o([x|0],0>x?-1:0)}function d(x){if(isNaN(x)||!isFinite(x))return p;if(0>x)return k(d(-x));for(var _=[],w=1,I=0;x>=w;I++)_[I]=x/w|0,w*=4294967296;return new o(_,0)}function m(x,_){if(x.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(x.charAt(0)=="-")return k(m(x.substring(1),_));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(_,8)),I=p,b=0;b<x.length;b+=8){var T=Math.min(8,x.length-b),y=parseInt(x.substring(b,b+T),_);8>T?(T=d(Math.pow(_,T)),I=I.j(T).add(d(y))):(I=I.j(w),I=I.add(d(y)))}return I}var p=c(0),v=c(1),E=c(16777216);r=o.prototype,r.m=function(){if(C(this))return-k(this).m();for(var x=0,_=1,w=0;w<this.g.length;w++){var I=this.i(w);x+=(0<=I?I:4294967296+I)*_,_*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(A(this))return"0";if(C(this))return"-"+k(this).toString(x);for(var _=d(Math.pow(x,6)),w=this,I="";;){var b=$(w,_).g;w=F(w,b.j(_));var T=((0<w.g.length?w.g[0]:w.h)>>>0).toString(x);if(w=b,A(w))return T+I;for(;6>T.length;)T="0"+T;I=T+I}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function A(x){if(x.h!=0)return!1;for(var _=0;_<x.g.length;_++)if(x.g[_]!=0)return!1;return!0}function C(x){return x.h==-1}r.l=function(x){return x=F(this,x),C(x)?-1:A(x)?0:1};function k(x){for(var _=x.g.length,w=[],I=0;I<_;I++)w[I]=~x.g[I];return new o(w,~x.h).add(v)}r.abs=function(){return C(this)?k(this):this},r.add=function(x){for(var _=Math.max(this.g.length,x.g.length),w=[],I=0,b=0;b<=_;b++){var T=I+(this.i(b)&65535)+(x.i(b)&65535),y=(T>>>16)+(this.i(b)>>>16)+(x.i(b)>>>16);I=y>>>16,T&=65535,y&=65535,w[b]=y<<16|T}return new o(w,w[w.length-1]&-2147483648?-1:0)};function F(x,_){return x.add(k(_))}r.j=function(x){if(A(this)||A(x))return p;if(C(this))return C(x)?k(this).j(k(x)):k(k(this).j(x));if(C(x))return k(this.j(k(x)));if(0>this.l(E)&&0>x.l(E))return d(this.m()*x.m());for(var _=this.g.length+x.g.length,w=[],I=0;I<2*_;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<x.g.length;b++){var T=this.i(I)>>>16,y=this.i(I)&65535,ee=x.i(b)>>>16,se=x.i(b)&65535;w[2*I+2*b]+=y*se,O(w,2*I+2*b),w[2*I+2*b+1]+=T*se,O(w,2*I+2*b+1),w[2*I+2*b+1]+=y*ee,O(w,2*I+2*b+1),w[2*I+2*b+2]+=T*ee,O(w,2*I+2*b+2)}for(I=0;I<_;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=_;I<2*_;I++)w[I]=0;return new o(w,0)};function O(x,_){for(;(x[_]&65535)!=x[_];)x[_+1]+=x[_]>>>16,x[_]&=65535,_++}function L(x,_){this.g=x,this.h=_}function $(x,_){if(A(_))throw Error("division by zero");if(A(x))return new L(p,p);if(C(x))return _=$(k(x),_),new L(k(_.g),k(_.h));if(C(_))return _=$(x,k(_)),new L(k(_.g),_.h);if(30<x.g.length){if(C(x)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var w=v,I=_;0>=I.l(x);)w=P(w),I=P(I);var b=R(w,1),T=R(I,1);for(I=R(I,2),w=R(w,2);!A(I);){var y=T.add(I);0>=y.l(x)&&(b=b.add(w),T=y),I=R(I,1),w=R(w,1)}return _=F(x,b.j(_)),new L(b,_)}for(b=p;0<=x.l(_);){for(w=Math.max(1,Math.floor(x.m()/_.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),T=d(w),y=T.j(_);C(y)||0<y.l(x);)w-=I,T=d(w),y=T.j(_);A(T)&&(T=v),b=b.add(T),x=F(x,y)}return new L(b,x)}r.A=function(x){return $(this,x).h},r.and=function(x){for(var _=Math.max(this.g.length,x.g.length),w=[],I=0;I<_;I++)w[I]=this.i(I)&x.i(I);return new o(w,this.h&x.h)},r.or=function(x){for(var _=Math.max(this.g.length,x.g.length),w=[],I=0;I<_;I++)w[I]=this.i(I)|x.i(I);return new o(w,this.h|x.h)},r.xor=function(x){for(var _=Math.max(this.g.length,x.g.length),w=[],I=0;I<_;I++)w[I]=this.i(I)^x.i(I);return new o(w,this.h^x.h)};function P(x){for(var _=x.g.length+1,w=[],I=0;I<_;I++)w[I]=x.i(I)<<1|x.i(I-1)>>>31;return new o(w,x.h)}function R(x,_){var w=_>>5;_%=32;for(var I=x.g.length-w,b=[],T=0;T<I;T++)b[T]=0<_?x.i(T+w)>>>_|x.i(T+w+1)<<32-_:x.i(T+w);return new o(b,x.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,sf=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,vn=o}).apply(typeof Fu<"u"?Fu:typeof self<"u"?self:typeof window<"u"?window:{});var ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var of,Kr,af,yi,Pa,lf,cf,uf;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ri=="object"&&ri];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(a,h){if(h)e:{var f=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,S={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function m(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(h,S)}}return function(){return a.apply(h,arguments)}}function v(a,h,f){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:p,v.apply(null,arguments)}function E(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,S,D){for(var U=Array(arguments.length-2),he=2;he<arguments.length;he++)U[he-2]=arguments[he];return h.prototype[S].apply(g,U)}}function C(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function k(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const S=a.length||0,D=g.length||0;a.length=S+D;for(let U=0;U<D;U++)a[S+U]=g[U]}else a.push(g)}}class F{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var P=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function R(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function x(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let D=0;D<w.length;D++)f=w[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function b(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function T(a){l.setTimeout(()=>{throw a},0)}function y(){var a=oe;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ee{constructor(){this.h=this.g=null}add(h,f){const g=se.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var se=new F(()=>new z,a=>a.reset());class z{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let H,X=!1,oe=new ee,Je=()=>{const a=l.Promise.resolve(void 0);H=()=>{a.then(On)}};var On=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(f){T(f)}var h=se;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}X=!1};function et(){this.s=this.s,this.C=this.C}et.prototype.s=!1,et.prototype.ma=function(){this.s||(this.s=!0,this.N())},et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Ms=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Nt(a,h){if(Ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(P){e:{try{$(h.nodeName);var S=!0;break e}catch{}S=!1}S||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ls[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Nt.aa.h.call(this)}}A(Nt,Ee);var Ls={2:"touch",3:"pen",4:"mouse"};Nt.prototype.h=function(){Nt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),ko=0;function Fs(a,h,f,g,S){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=S,this.key=++ko,this.da=this.fa=!1}function rn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function sn(a){this.src=a,this.g={},this.h=0}sn.prototype.add=function(a,h,f,g,S){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var U=ue(a,h,g,S);return-1<U?(h=a[U],f||(h.fa=!1)):(h=new Fs(h,this.src,D,!!g,S),h.fa=f,a.push(h)),h};function Mn(a,h){var f=h.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=S)&&Array.prototype.splice.call(g,S,1),D&&(rn(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ue(a,h,f,g){for(var S=0;S<a.length;++S){var D=a[S];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return S}return-1}var Ir="closure_lm_"+(1e6*Math.random()|0),Ln={};function lc(a,h,f,g,S){if(Array.isArray(h)){for(var D=0;D<h.length;D++)lc(a,h[D],f,g,S);return null}return f=hc(f),a&&a[nn]?a.K(h,f,d(g)?!!g.capture:!1,S):Ep(a,h,f,!1,g,S)}function Ep(a,h,f,g,S,D){if(!h)throw Error("Invalid event type");var U=d(S)?!!S.capture:!!S,he=Vo(a);if(he||(a[Ir]=he=new sn(a)),f=he.add(h,f,g,U,D),f.proxy)return f;if(g=Tp(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Ms||(S=U),S===void 0&&(S=!1),a.addEventListener(h.toString(),g,S);else if(a.attachEvent)a.attachEvent(uc(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Tp(){function a(f){return h.call(a.src,a.listener,f)}const h=Ap;return a}function cc(a,h,f,g,S){if(Array.isArray(h))for(var D=0;D<h.length;D++)cc(a,h[D],f,g,S);else g=d(g)?!!g.capture:!!g,f=hc(f),a&&a[nn]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=ue(D,f,g,S),-1<f&&(rn(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Vo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ue(h,f,g,S)),(f=-1<a?h[a]:null)&&Do(f))}function Do(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[nn])Mn(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(uc(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Vo(h))?(Mn(f,a),f.h==0&&(f.src=null,h[Ir]=null)):rn(a)}}}function uc(a){return a in Ln?Ln[a]:Ln[a]="on"+a}function Ap(a,h){if(a.da)a=!0;else{h=new Nt(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Do(a),a=f.call(g,h)}return a}function Vo(a){return a=a[Ir],a instanceof sn?a:null}var jo="__closure_events_fn_"+(1e9*Math.random()>>>0);function hc(a){return typeof a=="function"?a:(a[jo]||(a[jo]=function(h){return a.handleEvent(h)}),a[jo])}function Pe(){et.call(this),this.i=new sn(this),this.M=this,this.F=null}A(Pe,et),Pe.prototype[nn]=!0,Pe.prototype.removeEventListener=function(a,h,f,g){cc(this,a,h,f,g)};function Le(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ee(h,a);else if(h instanceof Ee)h.target=h.target||a;else{var S=h;h=new Ee(g,a),I(h,S)}if(S=!0,f)for(var D=f.length-1;0<=D;D--){var U=h.g=f[D];S=Us(U,g,!0,h)&&S}if(U=h.g=a,S=Us(U,g,!0,h)&&S,S=Us(U,g,!1,h)&&S,f)for(D=0;D<f.length;D++)U=h.g=f[D],S=Us(U,g,!1,h)&&S}Pe.prototype.N=function(){if(Pe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)rn(f[g]);delete a.g[h],a.h--}}this.F=null},Pe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Pe.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Us(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var S=!0,D=0;D<h.length;++D){var U=h[D];if(U&&!U.da&&U.capture==f){var he=U.listener,Re=U.ha||U.src;U.fa&&Mn(a.i,U),S=he.call(Re,g)!==!1&&S}}return S&&!g.defaultPrevented}function dc(a,h,f){if(typeof a=="function")f&&(a=v(a,f));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function fc(a){a.g=dc(()=>{a.g=null,a.i&&(a.i=!1,fc(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Sp extends et{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:fc(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Er(a){et.call(this),this.h=a,this.g={}}A(Er,et);var mc=[];function pc(a){R(a.g,function(h,f){this.g.hasOwnProperty(f)&&Do(h)},a),a.g={}}Er.prototype.N=function(){Er.aa.N.call(this),pc(this)},Er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oo=l.JSON.stringify,Rp=l.JSON.parse,Np=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Mo(){}Mo.prototype.h=null;function gc(a){return a.h||(a.h=a.i())}function _c(){}var Tr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lo(){Ee.call(this,"d")}A(Lo,Ee);function Fo(){Ee.call(this,"c")}A(Fo,Ee);var on={},yc=null;function Bs(){return yc=yc||new Pe}on.La="serverreachability";function vc(a){Ee.call(this,on.La,a)}A(vc,Ee);function Ar(a){const h=Bs();Le(h,new vc(h))}on.STAT_EVENT="statevent";function bc(a,h){Ee.call(this,on.STAT_EVENT,a),this.stat=h}A(bc,Ee);function Fe(a){const h=Bs();Le(h,new bc(h,a))}on.Ma="timingevent";function xc(a,h){Ee.call(this,on.Ma,a),this.size=h}A(xc,Ee);function Sr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Rr(){this.g=!0}Rr.prototype.xa=function(){this.g=!1};function Pp(a,h,f,g,S,D){a.info(function(){if(a.g)if(D)for(var U="",he=D.split("&"),Re=0;Re<he.length;Re++){var ie=he[Re].split("=");if(1<ie.length){var Ce=ie[0];ie=ie[1];var ke=Ce.split("_");U=2<=ke.length&&ke[1]=="type"?U+(Ce+"="+ie+"&"):U+(Ce+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+h+`
`+f+`
`+U})}function Cp(a,h,f,g,S,D,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+h+`
`+f+`
`+D+" "+U})}function Fn(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Dp(a,f)+(g?" "+g:"")})}function kp(a,h){a.info(function(){return"TIMEOUT: "+h})}Rr.prototype.info=function(){};function Dp(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var D=S[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<S.length;U++)S[U]=""}}}}return Oo(f)}catch{return h}}var qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Uo;function $s(){}A($s,Mo),$s.prototype.g=function(){return new XMLHttpRequest},$s.prototype.i=function(){return{}},Uo=new $s;function Pt(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new Er(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ic}function Ic(){this.i=null,this.g="",this.h=!1}var Ec={},Bo={};function qo(a,h,f){a.L=1,a.v=Ws(gt(h)),a.m=f,a.P=!0,Tc(a,null)}function Tc(a,h){a.F=Date.now(),zs(a),a.A=gt(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Fc(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Ic,a.g=ru(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Sp(v(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(mc[0]=S.toString()),S=mc);for(var D=0;D<S.length;D++){var U=lc(f,S[D],g||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ar(),Pp(a.i,a.u,a.A,a.l,a.R,a.m)}Pt.prototype.ca=function(a){a=a.target;const h=this.M;h&&_t(a)==3?h.j():this.Y(a)},Pt.prototype.Y=function(a){try{if(a==this.g)e:{const ke=_t(this.g);var h=this.g.Ba();const qn=this.g.Z();if(!(3>ke)&&(ke!=3||this.g&&(this.h.h||this.g.oa()||Gc(this.g)))){this.J||ke!=4||h==7||(h==8||0>=qn?Ar(3):Ar(2)),$o(this);var f=this.g.Z();this.X=f;t:if(Ac(this)){var g=Gc(this.g);a="";var S=g.length,D=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Nr(this);var U="";break t}this.h.i=new l.TextDecoder}for(h=0;h<S;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==S-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,Cp(this.i,this.u,this.A,this.l,this.R,ke,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Re=this.g;if((he=Re.g?Re.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(he)){var ie=he;break t}}ie=null}if(f=ie)Fn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zo(this,f);else{this.o=!1,this.s=3,Fe(12),an(this),Nr(this);break e}}if(this.P){f=!0;let tt;for(;!this.J&&this.C<U.length;)if(tt=Vp(this,U),tt==Bo){ke==4&&(this.s=4,Fe(14),f=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Ec){this.s=4,Fe(15),Fn(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else Fn(this.i,this.l,tt,null),zo(this,tt);if(Ac(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||U.length!=0||this.h.h||(this.s=1,Fe(16),f=!1),this.o=this.o&&f,!f)Fn(this.i,this.l,U,"[Invalid Chunked Response]"),an(this),Nr(this);else if(0<U.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Jo(Ce),Ce.M=!0,Fe(11))}}else Fn(this.i,this.l,U,null),zo(this,U);ke==4&&an(this),this.o&&!this.J&&(ke==4?Zc(this.j,this):(this.o=!1,zs(this)))}else Yp(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),an(this),Nr(this)}}}catch{}finally{}};function Ac(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Vp(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Bo:(f=Number(h.substring(f,g)),isNaN(f)?Ec:(g+=1,g+f>h.length?Bo:(h=h.slice(g,g+f),a.C=g+f,h)))}Pt.prototype.cancel=function(){this.J=!0,an(this)};function zs(a){a.S=Date.now()+a.I,Sc(a,a.I)}function Sc(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Sr(v(a.ba,a),h)}function $o(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Pt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(kp(this.i,this.A),this.L!=2&&(Ar(),Fe(17)),an(this),this.s=2,Nr(this)):Sc(this,this.S-a)};function Nr(a){a.j.G==0||a.J||Zc(a.j,a)}function an(a){$o(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,pc(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function zo(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ko(f.h,a))){if(!a.K&&Ko(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Zs(f),Ys(f);else break e;Qo(f),Fe(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Sr(v(f.Za,f),6e3));if(1>=Pc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else cn(f,11)}else if((a.K||f.g==a)&&Zs(f),!O(h))for(S=f.Da.g.parse(h),h=0;h<S.length;h++){let ie=S[h];if(f.T=ie[0],ie=ie[1],f.G==2)if(ie[0]=="c"){f.K=ie[1],f.ia=ie[2];const Ce=ie[3];Ce!=null&&(f.la=Ce,f.j.info("VER="+f.la));const ke=ie[4];ke!=null&&(f.Aa=ke,f.j.info("SVER="+f.Aa));const qn=ie[5];qn!=null&&typeof qn=="number"&&0<qn&&(g=1.5*qn,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const tt=a.g;if(tt){const ti=tt.g?tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ti){var D=g.h;D.g||ti.indexOf("spdy")==-1&&ti.indexOf("quic")==-1&&ti.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Go(D,D.h),D.h=null))}if(g.D){const Yo=tt.g?tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Yo&&(g.ya=Yo,fe(g.I,g.D,Yo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var U=a;if(g.qa=nu(g,g.J?g.ia:null,g.W),U.K){Cc(g.h,U);var he=U,Re=g.L;Re&&(he.I=Re),he.B&&($o(he),zs(he)),g.g=U}else Yc(g);0<f.i.length&&Xs(f)}else ie[0]!="stop"&&ie[0]!="close"||cn(f,7);else f.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?cn(f,7):Ho(f):ie[0]!="noop"&&f.l&&f.l.ta(ie),f.v=0)}}Ar(4)}catch{}}var jp=class{constructor(a,h){this.g=a,this.map=h}};function Rc(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Pc(a){return a.h?1:a.g?a.g.size:0}function Ko(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Go(a,h){a.g?a.g.add(h):a.h=h}function Cc(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Rc.prototype.cancel=function(){if(this.i=kc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return C(a.i)}function Op(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Mp(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Dc(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Mp(a),g=Op(a),S=g.length,D=0;D<S;D++)h.call(void 0,g[D],f&&f[D],a)}var Vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lp(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),S=null;if(0<=g){var D=a[f].substring(0,g);S=a[f].substring(g+1)}else D=a[f];h(D,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function ln(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ln){this.h=a.h,Ks(this,a.j),this.o=a.o,this.g=a.g,Gs(this,a.s),this.l=a.l;var h=a.i,f=new kr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),jc(this,f),this.m=a.m}else a&&(h=String(a).match(Vc))?(this.h=!1,Ks(this,h[1]||"",!0),this.o=Pr(h[2]||""),this.g=Pr(h[3]||"",!0),Gs(this,h[4]),this.l=Pr(h[5]||"",!0),jc(this,h[6]||"",!0),this.m=Pr(h[7]||"")):(this.h=!1,this.i=new kr(null,this.h))}ln.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Cr(h,Oc,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Cr(h,Oc,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Cr(f,f.charAt(0)=="/"?Bp:Up,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Cr(f,$p)),a.join("")};function gt(a){return new ln(a)}function Ks(a,h,f){a.j=f?Pr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Gs(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function jc(a,h,f){h instanceof kr?(a.i=h,zp(a.i,a.h)):(f||(h=Cr(h,qp)),a.i=new kr(h,a.h))}function fe(a,h,f){a.i.set(h,f)}function Ws(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Pr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Cr(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Fp),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Fp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Oc=/[#\/\?@]/g,Up=/[#\?:]/g,Bp=/[#\?]/g,qp=/[#\?@]/g,$p=/#/g;function kr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ct(a){a.g||(a.g=new Map,a.h=0,a.i&&Lp(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}r=kr.prototype,r.add=function(a,h){Ct(this),this.i=null,a=Un(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Mc(a,h){Ct(a),h=Un(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Lc(a,h){return Ct(a),h=Un(a,h),a.g.has(h)}r.forEach=function(a,h){Ct(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(h,S,g,this)},this)},this)},r.na=function(){Ct(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const S=a[g];for(let D=0;D<S.length;D++)f.push(h[g])}return f},r.V=function(a){Ct(this);let h=[];if(typeof a=="string")Lc(this,a)&&(h=h.concat(this.g.get(Un(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},r.set=function(a,h){return Ct(this),this.i=null,a=Un(this,a),Lc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},r.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Fc(a,h,f){Mc(a,h),0<f.length&&(a.i=null,a.g.set(Un(a,h),C(f)),a.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var S=D;U[g]!==""&&(S+="="+encodeURIComponent(String(U[g]))),a.push(S)}}return this.i=a.join("&")};function Un(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function zp(a,h){h&&!a.j&&(Ct(a),a.i=null,a.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(Mc(this,g),Fc(this,S,f))},a)),a.j=h}function Kp(a,h){const f=new Rr;if(l.Image){const g=new Image;g.onload=E(kt,f,"TestLoadImage: loaded",!0,h,g),g.onerror=E(kt,f,"TestLoadImage: error",!1,h,g),g.onabort=E(kt,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=E(kt,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Gp(a,h){const f=new Rr,g=new AbortController,S=setTimeout(()=>{g.abort(),kt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(S),D.ok?kt(f,"TestPingServer: ok",!0,h):kt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),kt(f,"TestPingServer: error",!1,h)})}function kt(a,h,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function Wp(){this.g=new Np}function Hp(a,h,f){const g=f||"";try{Dc(a,function(S,D){let U=S;d(S)&&(U=Oo(S)),h.push(g+D+"="+encodeURIComponent(U))})}catch(S){throw h.push(g+"type="+encodeURIComponent("_badmap")),S}}function Hs(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Hs,Mo),Hs.prototype.g=function(){return new Qs(this.l,this.j)},Hs.prototype.i=function(a){return function(){return a}}({});function Qs(a,h){Pe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Qs,Pe),r=Qs.prototype,r.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Vr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Uc(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Uc(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Dr(this):Vr(this),this.readyState==3&&Uc(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Dr(this))},r.Qa=function(a){this.g&&(this.response=a,Dr(this))},r.ga=function(){this.g&&Dr(this)};function Dr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Vr(a)}r.setRequestHeader=function(a,h){this.u.append(a,h)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Vr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Bc(a){let h="";return R(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Wo(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Bc(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):fe(a,h,f))}function _e(a){Pe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(_e,Pe);var Qp=/^https?$/i,Jp=["POST","PUT"];r=_e.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Uo.g(),this.v=this.o?gc(this.o):gc(Uo),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){qc(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Jp,h,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of f)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kc(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){qc(this,D)}};function qc(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,$c(a),Js(a)}function $c(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Le(this,"complete"),Le(this,"abort"),Js(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Js(this,!0)),_e.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?zc(this):this.bb())},r.bb=function(){zc(this)};function zc(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_t(a)!=4||a.Z()!=2)){if(a.u&&_t(a)==4)dc(a.Ea,0,a);else if(Le(a,"readystatechange"),_t(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=U===0){var S=String(a.D).match(Vc)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),g=!Qp.test(S?S.toLowerCase():"")}f=g}if(f)Le(a,"complete"),Le(a,"success");else{a.m=6;try{var D=2<_t(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",$c(a)}}finally{Js(a)}}}}function Js(a,h){if(a.g){Kc(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Le(a,"ready");try{f.onreadystatechange=g}catch{}}}function Kc(a){a.I&&(l.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function _t(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Rp(h)}};function Gc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Yp(a){const h={};a=(a.g&&2<=_t(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(O(a[g]))continue;var f=b(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[S]||[];h[S]=D,D.push(f)}x(h,function(g){return g.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jr(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Wc(a){this.Aa=0,this.i=[],this.j=new Rr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jr("baseRetryDelayMs",5e3,a),this.cb=jr("retryDelaySeedMs",1e4,a),this.Wa=jr("forwardChannelMaxRetries",2,a),this.wa=jr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Rc(a&&a.concurrentRequestLimit),this.Da=new Wp,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Wc.prototype,r.la=8,r.G=1,r.connect=function(a,h,f,g){Fe(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=nu(this,null,this.W),Xs(this)};function Ho(a){if(Hc(a),a.G==3){var h=a.U++,f=gt(a.I);if(fe(f,"SID",a.K),fe(f,"RID",h),fe(f,"TYPE","terminate"),Or(a,f),h=new Pt(a,a.j,h),h.L=2,h.v=Ws(gt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=ru(h.j,null),h.g.ea(h.v)),h.F=Date.now(),zs(h)}tu(a)}function Ys(a){a.g&&(Jo(a),a.g.cancel(),a.g=null)}function Hc(a){Ys(a),a.u&&(l.clearTimeout(a.u),a.u=null),Zs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Xs(a){if(!Nc(a.h)&&!a.s){a.s=!0;var h=a.Ga;H||Je(),X||(H(),X=!0),oe.add(h,a),a.B=0}}function Xp(a,h){return Pc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Sr(v(a.Ga,a,h),eu(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Pt(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(S.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Jc(this,S,h),f=gt(this.I),fe(f,"RID",a),fe(f,"CVER",22),this.D&&fe(f,"X-HTTP-Session-Id",this.D),Or(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Bc(D)))+"&"+h:this.m&&Wo(f,this.m,D)),Go(this.h,S),this.Ua&&fe(f,"TYPE","init"),this.P?(fe(f,"$req",h),fe(f,"SID","null"),S.T=!0,qo(S,f,null)):qo(S,f,h),this.G=2}}else this.G==3&&(a?Qc(this,a):this.i.length==0||Nc(this.h)||Qc(this))};function Qc(a,h){var f;h?f=h.l:f=a.U++;const g=gt(a.I);fe(g,"SID",a.K),fe(g,"RID",f),fe(g,"AID",a.T),Or(a,g),a.m&&a.o&&Wo(g,a.m,a.o),f=new Pt(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Jc(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Go(a.h,f),qo(f,g,h)}function Or(a,h){a.H&&R(a.H,function(f,g){fe(h,g,f)}),a.l&&Dc({},function(f,g){fe(h,g,f)})}function Jc(a,h,f){f=Math.min(a.i.length,f);var g=a.l?v(a.l.Na,a.l,a):null;e:{var S=a.i;let D=-1;for(;;){const U=["count="+f];D==-1?0<f?(D=S[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let he=!0;for(let Re=0;Re<f;Re++){let ie=S[Re].g;const Ce=S[Re].map;if(ie-=D,0>ie)D=Math.max(0,S[Re].g-100),he=!1;else try{Hp(Ce,U,"req"+ie+"_")}catch{g&&g(Ce)}}if(he){g=U.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Yc(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;H||Je(),X||(H(),X=!0),oe.add(h,a),a.v=0}}function Qo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Sr(v(a.Fa,a),eu(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Xc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Sr(v(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),Ys(this),Xc(this))};function Jo(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xc(a){a.g=new Pt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=gt(a.qa);fe(h,"RID","rpc"),fe(h,"SID",a.K),fe(h,"AID",a.T),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(h,"TO",a.ja),fe(h,"TYPE","xmlhttp"),Or(a,h),a.m&&a.o&&Wo(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ws(gt(h)),f.m=null,f.P=!0,Tc(f,a)}r.Za=function(){this.C!=null&&(this.C=null,Ys(this),Qo(this),Fe(19))};function Zs(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Zc(a,h){var f=null;if(a.g==h){Zs(a),Jo(a),a.g=null;var g=2}else if(Ko(a.h,h))f=h.D,Cc(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var S=a.B;g=Bs(),Le(g,new xc(g,f)),Xs(a)}else Yc(a);else if(S=h.s,S==3||S==0&&0<h.X||!(g==1&&Xp(a,h)||g==2&&Qo(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),S){case 1:cn(a,5);break;case 4:cn(a,10);break;case 3:cn(a,6);break;default:cn(a,2)}}}function eu(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function cn(a,h){if(a.j.info("Error code "+h),h==2){var f=v(a.fb,a),g=a.Xa;const S=!g;g=new ln(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ks(g,"https"),Ws(g),S?Kp(g.toString(),f):Gp(g.toString(),f)}else Fe(2);a.G=0,a.l&&a.l.sa(h),tu(a),Hc(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function tu(a){if(a.G=0,a.ka=[],a.l){const h=kc(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function nu(a,h,f){var g=f instanceof ln?gt(f):new ln(f);if(g.g!="")h&&(g.g=h+"."+g.g),Gs(g,g.s);else{var S=l.location;g=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;var D=new ln(null);g&&Ks(D,g),h&&(D.g=h),S&&Gs(D,S),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&fe(g,f,h),fe(g,"VER",a.la),Or(a,g),g}function ru(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new _e(new Hs({eb:f})):new _e(a.pa),h.Ha(a.J),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function su(){}r=su.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ei(){}ei.prototype.g=function(a,h){return new Ke(a,h)};function Ke(a,h){Pe.call(this),this.g=new Wc(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!O(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!O(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Bn(this)}A(Ke,Pe),Ke.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ke.prototype.close=function(){Ho(this.g)},Ke.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Oo(a),a=f);h.i.push(new jp(h.Ya++,a)),h.G==3&&Xs(h)},Ke.prototype.N=function(){this.g.l=null,delete this.j,Ho(this.g),delete this.g,Ke.aa.N.call(this)};function iu(a){Lo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(iu,Lo);function ou(){Fo.call(this),this.status=1}A(ou,Fo);function Bn(a){this.g=a}A(Bn,su),Bn.prototype.ua=function(){Le(this.g,"a")},Bn.prototype.ta=function(a){Le(this.g,new iu(a))},Bn.prototype.sa=function(a){Le(this.g,new ou)},Bn.prototype.ra=function(){Le(this.g,"b")},ei.prototype.createWebChannel=ei.prototype.g,Ke.prototype.send=Ke.prototype.o,Ke.prototype.open=Ke.prototype.m,Ke.prototype.close=Ke.prototype.close,uf=function(){return new ei},cf=function(){return Bs()},lf=on,Pa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,yi=qs,wc.COMPLETE="complete",af=wc,_c.EventType=Tr,Tr.OPEN="a",Tr.CLOSE="b",Tr.ERROR="c",Tr.MESSAGE="d",Pe.prototype.listen=Pe.prototype.K,Kr=_c,_e.prototype.listenOnce=_e.prototype.L,_e.prototype.getLastError=_e.prototype.Ka,_e.prototype.getLastErrorCode=_e.prototype.Ba,_e.prototype.getStatus=_e.prototype.Z,_e.prototype.getResponseJson=_e.prototype.Oa,_e.prototype.getResponseText=_e.prototype.oa,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Ha,of=_e}).apply(typeof ri<"u"?ri:typeof self<"u"?self:typeof window<"u"?window:{});const Uu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new sl("@firebase/firestore");function Wn(){return In.logLevel}function j(r,...e){if(In.logLevel<=te.DEBUG){const t=e.map(ml);In.debug(`Firestore (${vr}): ${r}`,...t)}}function ve(r,...e){if(In.logLevel<=te.ERROR){const t=e.map(ml);In.error(`Firestore (${vr}): ${r}`,...t)}}function cs(r,...e){if(In.logLevel<=te.WARN){const t=e.map(ml);In.warn(`Firestore (${vr}): ${r}`,...t)}}function ml(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(r="Unexpected state"){const e=`FIRESTORE (${vr}) INTERNAL ASSERTION FAILED: `+r;throw ve(e),new Error(e)}function W(r,e){r||K()}function G(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends mt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ve.UNAUTHENTICATED))}shutdown(){}}class _b{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0);let n=this.i;const s=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ht,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ht)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string"),new pb(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new Ve(e)}}class yb{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vb{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new yb(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){W(this.o===void 0);const n=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string"),this.R=t.token,new bb(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=wb(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function Y(r,e){return r<e?-1:r>e?1:0}function sr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function df(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ge(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ge(0,0))}static max(){return new Q(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t,n){t===void 0?t=0:t>e.length&&K(),n===void 0?n=e.length-t:n>e.length-t&&K(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return us.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof us?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ae extends us{construct(e,t,n){return new ae(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const Ib=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends us{construct(e,t,n){return new pe(e,t,n)}static isValidIdentifier(e){return Ib.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(n+=l,s++):(i(),s++)}if(i(),o)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ae.fromString(e))}static fromName(e){return new q(ae.fromString(e).popFirst(5))}static empty(){return new q(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ae(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function Ca(r){return r.fields.find(e=>e.kind===2)}function mn(r){return r.fields.filter(e=>e.kind!==2)}Mi.UNKNOWN_ID=-1;class vi{constructor(e,t){this.fieldPath=e,this.kind=t}}class hs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new hs(0,Qe.min())}}function ff(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(n===1e9?new ge(t+1,0):new ge(t,n));return new Qe(s,q.empty(),e)}function mf(r){return new Qe(r.readTime,r.key,-1)}class Qe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Qe(Q.min(),q.empty(),-1)}static max(){return new Qe(Q.max(),q.empty(),-1)}}function pl(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(r.documentKey,e.documentKey),t!==0?t:Y(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==pf)throw r;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,n)=>{t(e)})}static reject(e){return new N((t,n)=>{n(e)})}static waitFor(e){return new N((t,n)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>n(c))}),o=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const n of e)t=t.next(s=>s?N.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new N((n,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const d=c;t(e[d]).next(m=>{o[d]=m,++l,l===i&&n(o)},m=>s(m))}})}static doWhile(e,t){return new N((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ht,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Xr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=gl(n.target.error);this.V.reject(new Xr(e,s))}}static open(e,t,n,s){try{return new lo(t,e.transaction(s,n))}catch(i){throw new Xr(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(j("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Tb(t)}}class Kt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Kt.S(Te())===12.2&&ve("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return j("SimpleDb","Removing database:",e),pn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!yd())return!1;if(Kt.v())return!0;const e=Te(),t=Kt.S(e),n=0<t&&t<10,s=_f(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(j("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new Xr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new B(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new B(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Xr(e,o))},s.onupgradeneeded=i=>{j("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{j("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const l=lo.open(this.db,e,i?"readonly":"readwrite",n),c=s(l).next(d=>(l.g(),d)).catch(d=>(l.abort(d),N.reject(d))).toPromise();return c.catch(()=>{}),await l.m,c}catch(l){const c=l,d=c.name!=="FirebaseError"&&o<3;if(j("SimpleDb","Transaction failed with error:",c.message,"Retrying:",d),this.close(),!d)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function _f(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Eb{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return pn(this.B.delete())}}class Xr extends B{constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Zt(r){return r.name==="IndexedDbTransactionError"}class Tb{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(j("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(j("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),pn(n)}add(e){return j("SimpleDb","ADD",this.store.name,e,e),pn(this.store.add(e))}get(e){return pn(this.store.get(e)).next(t=>(t===void 0&&(t=null),j("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return j("SimpleDb","DELETE",this.store.name,e),pn(this.store.delete(e))}count(){return j("SimpleDb","COUNT",this.store.name),pn(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new N((o,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(n),o=[];return this.W(i,(l,c)=>{o.push(c)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new N((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}j(e,t){j("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(i,o,l)=>l.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new N((n,s)=>{t.onerror=i=>{const o=gl(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():n()}):n()}})}W(e,t){const n=[];return new N((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void s();const c=new Eb(l),d=t(l.primaryKey,l.value,c);if(d instanceof N){const m=d.catch(p=>(c.done(),N.reject(p)));n.push(m)}c.isDone?s():c.K===null?l.continue():l.continue(c.K)}}).next(()=>N.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function pn(r){return new N((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=gl(n.target.error);t(s)}})}let Bu=!1;function gl(r){const e=Kt.S(Te());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Bu||(Bu=!0,setTimeout(()=>{throw n},0)),n}}return r}class Ab{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){j("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{j("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Zt(t)?j("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Xt(t)}await this.X(6e4)})}}class Sb{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,i=!0;return N.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return j("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(l=>{s-=l,n.add(o)});i=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(l=>(j("IndexBackfiller",`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=mf(i);pl(o,n)>0&&(n=o)}),new Qe(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$e.oe=-1;function co(r){return r==null}function ds(r){return r===0&&1/r==-1/0}function yf(r){return typeof r=="number"&&Number.isInteger(r)&&!ds(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=qu(e)),e=Rb(r.get(t),e);return qu(e)}function Rb(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function qu(r){return r+""}function st(r){const e=r.length;if(W(e>=2),e===2)return W(r.charAt(0)===""&&r.charAt(1)===""),ae.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf("",i);switch((o<0||o>t)&&K(),r.charAt(o+1)){case"":const l=r.substring(i,o);let c;s.length===0?c=l:(s+=l,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:K()}i=o+2}return new ae(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(r,e){return[r,Ue(e)]}function vf(r,e,t){return[r,Ue(e),t]}const Nb={},Pb=["prefixPath","collectionGroup","readTime","documentId"],Cb=["prefixPath","collectionGroup","documentId"],kb=["collectionGroup","readTime","prefixPath","documentId"],Db=["canonicalId","targetId"],Vb=["targetId","path"],jb=["path","targetId"],Ob=["collectionId","parent"],Mb=["indexId","uid"],Lb=["uid","sequenceNumber"],Fb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ub=["indexId","uid","orderedDocumentKey"],Bb=["userId","collectionPath","documentId"],qb=["userId","collectionPath","largestBatchId"],$b=["userId","collectionGroup","largestBatchId"],bf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zb=[...bf,"documentOverlays"],xf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],wf=xf,_l=[...wf,"indexConfiguration","indexState","indexEntries"],Kb=_l,Gb=[..._l,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends gf{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Ae(r,e){const t=G(r);return Kt.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function kn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function If(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new si(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new si(this.root,e,this.comparator,!1)}getReverseIterator(){return new si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new si(this.root,e,this.comparator,!0)}}class si{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Ne.RED,this.left=s??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Ne(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,n,s,i){return this}insert(e,t,n){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ku(this.data.getIterator())}getIteratorFrom(e){return new Ku(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Ku{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function $n(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new ze([])}unionWith(e){let t=new ce(pe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ef("Invalid base64 string: "+i):i}}(e);return new xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const Wb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(r){if(W(!!r),typeof r=="string"){let e=0;const t=Wb.exec(r);if(W(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:me(r.seconds),nanos:me(r.nanos)}}function me(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ht(r){return typeof r=="string"?xe.fromBase64String(r):xe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function vl(r){const e=r.mapValue.fields.__previous_value__;return yl(e)?vl(e):e}function fs(r){const e=At(r.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,t,n,s,i,o,l,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}class En{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new En("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof En&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},xi={nullValue:"NULL_VALUE"};function Tn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?yl(r)?4:Tf(r)?9007199254740991:uo(r)?10:11:K()}function dt(r,e){if(r===e)return!0;const t=Tn(r);if(t!==Tn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return fs(r).isEqual(fs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=At(s.timestampValue),l=At(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Ht(s.bytesValue).isEqual(Ht(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),l=me(i.doubleValue);return o===l?ds(o)===ds(l):isNaN(o)&&isNaN(l)}return!1}(r,e);case 9:return sr(r.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(zu(o)!==zu(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!dt(o[c],l[c])))return!1;return!0}(r,e);default:return K()}}function ms(r,e){return(r.values||[]).find(t=>dt(t,e))!==void 0}function Qt(r,e){if(r===e)return 0;const t=Tn(r),n=Tn(e);if(t!==n)return Y(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(r.booleanValue,e.booleanValue);case 2:return function(i,o){const l=me(i.integerValue||i.doubleValue),c=me(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(r,e);case 3:return Gu(r.timestampValue,e.timestampValue);case 4:return Gu(fs(r),fs(e));case 5:return Y(r.stringValue,e.stringValue);case 6:return function(i,o){const l=Ht(i),c=Ht(o);return l.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let d=0;d<l.length&&d<c.length;d++){const m=Y(l[d],c[d]);if(m!==0)return m}return Y(l.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Y(me(i.latitude),me(o.latitude));return l!==0?l:Y(me(i.longitude),me(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Wu(r.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,d,m;const p=i.fields||{},v=o.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=(c=v.value)===null||c===void 0?void 0:c.arrayValue,C=Y(((d=E?.values)===null||d===void 0?void 0:d.length)||0,((m=A?.values)===null||m===void 0?void 0:m.length)||0);return C!==0?C:Wu(E,A)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Bt.mapValue&&o===Bt.mapValue)return 0;if(i===Bt.mapValue)return 1;if(o===Bt.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),d=o.fields||{},m=Object.keys(d);c.sort(),m.sort();for(let p=0;p<c.length&&p<m.length;++p){const v=Y(c[p],m[p]);if(v!==0)return v;const E=Qt(l[c[p]],d[m[p]]);if(E!==0)return E}return Y(c.length,m.length)}(r.mapValue,e.mapValue);default:throw K()}}function Gu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Y(r,e);const t=At(r),n=At(e),s=Y(t.seconds,n.seconds);return s!==0?s:Y(t.nanos,n.nanos)}function Wu(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Qt(t[s],n[s]);if(i)return i}return Y(t.length,n.length)}function ir(r){return Da(r)}function Da(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=At(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ht(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return q.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Da(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${Da(t.fields[o])}`;return s+"}"}(r.mapValue):K()}function ps(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Va(r){return!!r&&"integerValue"in r}function gs(r){return!!r&&"arrayValue"in r}function Hu(r){return!!r&&"nullValue"in r}function Qu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function wi(r){return!!r&&"mapValue"in r}function uo(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Zr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return kn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Zr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Zr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Tf(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Af={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Qb(r){return"nullValue"in r?xi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?ps(En.empty(),q.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?uo(r)?Af:{mapValue:{}}:K()}function Jb(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?ps(En.empty(),q.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Af:"mapValue"in r?uo(r)?{mapValue:{}}:Bt:K()}function Ju(r,e){const t=Qt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Yu(r,e){const t=Qt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!wi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zr(t)}setAll(e){let t=pe.emptyPath(),n={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=l.popLast()}o?n[l.lastSegment()]=Zr(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());wi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];wi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){kn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new je(Zr(this.value))}}function Sf(r){const e=[];return kn(r.fields,(t,n)=>{const s=new pe([t]);if(wi(n)){const i=Sf(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t,n,s,i,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ye(e,0,Q.min(),Q.min(),Q.min(),je.empty(),0)}static newFoundDocument(e,t,n,s){return new ye(e,1,t,Q.min(),n,s,0)}static newNoDocument(e,t){return new ye(e,2,t,Q.min(),Q.min(),je.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,Q.min(),Q.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this.position=e,this.inclusive=t}}function Xu(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=q.comparator(q.fromName(o.referenceValue),t.key):n=Qt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Zu(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!dt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yb(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{}class ne extends Rf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Xb(e,t,n):t==="array-contains"?new tx(e,n):t==="in"?new Vf(e,n):t==="not-in"?new nx(e,n):t==="array-contains-any"?new rx(e,n):new ne(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Zb(e,n):new ex(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qt(t,this.value)):t!==null&&Tn(this.value)===Tn(t)&&this.matchesComparison(Qt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class le extends Rf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new le(e,t)}matches(e){return ar(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ar(r){return r.op==="and"}function ja(r){return r.op==="or"}function bl(r){return Nf(r)&&ar(r)}function Nf(r){for(const e of r.filters)if(e instanceof le)return!1;return!0}function Oa(r){if(r instanceof ne)return r.field.canonicalString()+r.op.toString()+ir(r.value);if(bl(r))return r.filters.map(e=>Oa(e)).join(",");{const e=r.filters.map(t=>Oa(t)).join(",");return`${r.op}(${e})`}}function Pf(r,e){return r instanceof ne?function(n,s){return s instanceof ne&&n.op===s.op&&n.field.isEqual(s.field)&&dt(n.value,s.value)}(r,e):r instanceof le?function(n,s){return s instanceof le&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,l)=>i&&Pf(o,s.filters[l]),!0):!1}(r,e):void K()}function Cf(r,e){const t=r.filters.concat(e);return le.create(t,r.op)}function kf(r){return r instanceof ne?function(t){return`${t.field.canonicalString()} ${t.op} ${ir(t.value)}`}(r):r instanceof le?function(t){return t.op.toString()+" {"+t.getFilters().map(kf).join(" ,")+"}"}(r):"Filter"}class Xb extends ne{constructor(e,t,n){super(e,t,n),this.key=q.fromName(n.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Zb extends ne{constructor(e,t){super(e,"in",t),this.keys=Df("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ex extends ne{constructor(e,t){super(e,"not-in",t),this.keys=Df("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Df(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>q.fromName(n.referenceValue))}class tx extends ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return gs(t)&&ms(t.arrayValue,this.value)}}class Vf extends ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ms(this.value.arrayValue,t)}}class nx extends ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ms(this.value.arrayValue,t)}}class rx extends ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!gs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ms(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,t=null,n=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ma(r,e=null,t=[],n=[],s=null,i=null,o=null){return new sx(r,e,t,n,s,i,o)}function An(r){const e=G(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Oa(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),co(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ir(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ir(n)).join(",")),e.ue=t}return e.ue}function Ss(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Yb(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Pf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Zu(r.startAt,e.startAt)&&Zu(r.endAt,e.endAt)}function Fi(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ui(r,e){return r.filters.filter(t=>t instanceof ne&&t.field.isEqual(e))}function eh(r,e,t){let n=xi,s=!0;for(const i of Ui(r,e)){let o=xi,l=!0;switch(i.op){case"<":case"<=":o=Qb(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,l=!1;break;case"!=":case"not-in":o=xi}Ju({value:n,inclusive:s},{value:o,inclusive:l})<0&&(n=o,s=l)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Ju({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function th(r,e,t){let n=Bt,s=!0;for(const i of Ui(r,e)){let o=Bt,l=!0;switch(i.op){case">=":case">":o=Jb(i.value),l=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,l=!1;break;case"!=":case"not-in":o=Bt}Yu({value:n,inclusive:s},{value:o,inclusive:l})>0&&(n=o,s=l)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Yu({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t=null,n=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jf(r,e,t,n,s,i,o,l){return new Rs(r,e,t,n,s,i,o,l)}function Ns(r){return new Rs(r)}function nh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Of(r){return r.collectionGroup!==null}function es(r){const e=G(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ce(pe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Li(i,n))}),t.has(pe.keyField().canonicalString())||e.ce.push(new Li(pe.keyField(),n))}return e.ce}function We(r){const e=G(r);return e.le||(e.le=ix(e,es(r))),e.le}function ix(r,e){if(r.limitType==="F")return Ma(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Li(s.field,i)});const t=r.endAt?new or(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new or(r.startAt.position,r.startAt.inclusive):null;return Ma(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function La(r,e){const t=r.filters.concat([e]);return new Rs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Fa(r,e,t){return new Rs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ho(r,e){return Ss(We(r),We(e))&&r.limitType===e.limitType}function Mf(r){return`${An(We(r))}|lt:${r.limitType}`}function Hn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>kf(s)).join(", ")}]`),co(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ir(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ir(s)).join(",")),`Target(${n})`}(We(r))}; limitType=${r.limitType})`}function Ps(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of es(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,l,c){const d=Xu(o,l,c);return o.inclusive?d<=0:d<0}(n.startAt,es(n),s)||n.endAt&&!function(o,l,c){const d=Xu(o,l,c);return o.inclusive?d>=0:d>0}(n.endAt,es(n),s))}(r,e)}function Lf(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ff(r){return(e,t)=>{let n=!1;for(const s of es(r)){const i=ox(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function ox(r,e,t){const n=r.field.isKeyField()?q.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),d=l.data.field(i);return c!==null&&d!==null?Qt(c,d):K()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){kn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return If(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=new de(q.comparator);function Ge(){return ax}const Uf=new de(q.comparator);function Gr(...r){let e=Uf;for(const t of r)e=e.insert(t.key,t);return e}function Bf(r){let e=Uf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function it(){return ts()}function qf(){return ts()}function ts(){return new en(r=>r.toString(),(r,e)=>r.isEqual(e))}const lx=new de(q.comparator),cx=new ce(q.comparator);function Z(...r){let e=cx;for(const t of r)e=e.add(t);return e}const ux=new ce(Y);function xl(){return ux}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ds(e)?"-0":e}}function $f(r){return{integerValue:""+r}}function hx(r,e){return yf(e)?$f(e):wl(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this._=void 0}}function dx(r,e,t){return r instanceof lr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yl(i)&&(i=vl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof cr?Kf(r,e):r instanceof ur?Gf(r,e):function(s,i){const o=zf(s,i),l=rh(o)+rh(s.Pe);return Va(o)&&Va(s.Pe)?$f(l):wl(s.serializer,l)}(r,e)}function fx(r,e,t){return r instanceof cr?Kf(r,e):r instanceof ur?Gf(r,e):t}function zf(r,e){return r instanceof _s?function(n){return Va(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class lr extends fo{}class cr extends fo{constructor(e){super(),this.elements=e}}function Kf(r,e){const t=Wf(e);for(const n of r.elements)t.some(s=>dt(s,n))||t.push(n);return{arrayValue:{values:t}}}class ur extends fo{constructor(e){super(),this.elements=e}}function Gf(r,e){let t=Wf(e);for(const n of r.elements)t=t.filter(s=>!dt(s,n));return{arrayValue:{values:t}}}class _s extends fo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function rh(r){return me(r.integerValue||r.doubleValue)}function Wf(r){return gs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t){this.field=e,this.transform=t}}function mx(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof cr&&s instanceof cr||n instanceof ur&&s instanceof ur?sr(n.elements,s.elements,dt):n instanceof _s&&s instanceof _s?dt(n.Pe,s.Pe):n instanceof lr&&s instanceof lr}(r.transform,e.transform)}class px{constructor(e,t){this.version=e,this.transformResults=t}}class Oe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ii(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class mo{}function Qf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new po(r.key,Oe.none()):new br(r.key,r.data,Oe.none());{const t=r.data,n=je.empty();let s=new ce(pe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Rt(r.key,n,new ze(s.toArray()),Oe.none())}}function gx(r,e,t){r instanceof br?function(s,i,o){const l=s.value.clone(),c=ih(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):r instanceof Rt?function(s,i,o){if(!Ii(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ih(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Jf(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ns(r,e,t,n){return r instanceof br?function(i,o,l,c){if(!Ii(i.precondition,o))return l;const d=i.value.clone(),m=oh(i.fieldTransforms,c,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof Rt?function(i,o,l,c){if(!Ii(i.precondition,o))return l;const d=oh(i.fieldTransforms,c,o),m=o.data;return m.setAll(Jf(i)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,l){return Ii(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(r,e,t)}function _x(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=zf(n.transform,s||null);i!=null&&(t===null&&(t=je.empty()),t.set(n.field,i))}return t||null}function sh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&sr(n,s,(i,o)=>mx(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class br extends mo{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rt extends mo{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jf(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function ih(r,e,t){const n=new Map;W(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,l=e.data.field(i.field);n.set(i.field,fx(o,l,t[s]))}return n}function oh(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,dx(i,o,e))}return n}class po extends mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yf extends mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&gx(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ns(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ns(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=qf();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=Qf(o,l);c!==null&&n.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&sr(this.mutations,e.mutations,(t,n)=>sh(t,n))&&sr(this.baseMutations,e.baseMutations,(t,n)=>sh(t,n))}}class El{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){W(e.mutations.length===n.length);let s=function(){return lx}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new El(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,re;function vx(r){switch(r){default:return K();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Xf(r){if(r===void 0)return ve("GRPC error has no .code"),V.UNKNOWN;switch(r){case we.OK:return V.OK;case we.CANCELLED:return V.CANCELLED;case we.UNKNOWN:return V.UNKNOWN;case we.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case we.INTERNAL:return V.INTERNAL;case we.UNAVAILABLE:return V.UNAVAILABLE;case we.UNAUTHENTICATED:return V.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case we.NOT_FOUND:return V.NOT_FOUND;case we.ALREADY_EXISTS:return V.ALREADY_EXISTS;case we.PERMISSION_DENIED:return V.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case we.ABORTED:return V.ABORTED;case we.OUT_OF_RANGE:return V.OUT_OF_RANGE;case we.UNIMPLEMENTED:return V.UNIMPLEMENTED;case we.DATA_LOSS:return V.DATA_LOSS;default:return K()}}(re=we||(we={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=new vn([4294967295,4294967295],0);function ah(r){const e=bx().encode(r),t=new sf;return t.update(e),new Uint8Array(t.digest())}function lh(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vn([t,n],0),new vn([s,i],0)]}class Al{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Wr(`Invalid padding: ${t}`);if(n<0)throw new Wr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Wr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Wr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=vn.fromNumber(this.Ie)}Ee(e,t,n){let s=e.add(t.multiply(vn.fromNumber(n)));return s.compare(xx)===1&&(s=new vn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ah(e),[n,s]=lh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Al(i,s,t);return n.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=ah(e),[n,s]=lh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,ks.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Cs(Q.min(),s,new de(Y),Ge(),Z())}}class ks{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ks(n,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class Zf{constructor(e,t){this.targetId=e,this.me=t}}class em{constructor(e,t,n=xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class ch{constructor(){this.fe=0,this.ge=hh(),this.pe=xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),t=Z(),n=Z();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:K()}}),new ks(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=hh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wx{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ge(),this.qe=uh(),this.Qe=new de(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,n=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Fi(i))if(n===0){const o=new q(i.path);this.Ue(t,o,ye.newNoDocument(o,Q.min()))}else W(n===1);else{const o=this.Ye(t);if(o!==n){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Ht(n).toUint8Array()}catch(c){if(c instanceof Ef)return cs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Al(o,s,i)}catch(c){return cs(c instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Fi(l.target)){const c=new q(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,ye.newNoDocument(c,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=Z();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Cs(e,t,this.Qe,this.ke,n);return this.ke=Ge(),this.qe=uh(),this.Qe=new de(Y),s}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ch,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ce(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ch),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function uh(){return new de(q.comparator)}function hh(){return new de(q.comparator)}const Ix={asc:"ASCENDING",desc:"DESCENDING"},Ex={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tx={and:"AND",or:"OR"};class Ax{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ua(r,e){return r.useProto3Json||co(e)?e:{value:e}}function hr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tm(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Sx(r,e){return hr(r,e.toTimestamp())}function Be(r){return W(!!r),Q.fromTimestamp(function(t){const n=At(t);return new ge(n.seconds,n.nanos)}(r))}function Sl(r,e){return Ba(r,e).canonicalString()}function Ba(r,e){const t=function(s){return new ae(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function nm(r){const e=ae.fromString(r);return W(hm(e)),e}function Bi(r,e){return Sl(r.databaseId,e.path)}function bn(r,e){const t=nm(e);if(t.get(1)!==r.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new q(im(t))}function rm(r,e){return Sl(r.databaseId,e)}function sm(r){const e=nm(r);return e.length===4?ae.emptyPath():im(e)}function qa(r){return new ae(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function im(r){return W(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function dh(r,e,t){return{name:Bi(r,e),fields:t.value.mapValue.fields}}function Rx(r,e,t){const n=bn(r,e.name),s=Be(e.updateTime),i=e.createTime?Be(e.createTime):Q.min(),o=new je({mapValue:{fields:e.fields}}),l=ye.newFoundDocument(n,s,i,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function Nx(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(W(m===void 0||typeof m=="string"),xe.fromBase64String(m||"")):(W(m===void 0||m instanceof Buffer||m instanceof Uint8Array),xe.fromUint8Array(m||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const m=d.code===void 0?V.UNKNOWN:Xf(d.code);return new B(m,d.message||"")}(o);t=new em(n,s,i,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=bn(r,n.document.name),i=Be(n.document.updateTime),o=n.document.createTime?Be(n.document.createTime):Q.min(),l=new je({mapValue:{fields:n.document.fields}}),c=ye.newFoundDocument(s,i,o,l),d=n.targetIds||[],m=n.removedTargetIds||[];t=new Ei(d,m,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=bn(r,n.document),i=n.readTime?Be(n.readTime):Q.min(),o=ye.newNoDocument(s,i),l=n.removedTargetIds||[];t=new Ei([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=bn(r,n.document),i=n.removedTargetIds||[];t=new Ei([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new yx(s,i),l=n.targetId;t=new Zf(l,o)}}return t}function qi(r,e){let t;if(e instanceof br)t={update:dh(r,e.key,e.value)};else if(e instanceof po)t={delete:Bi(r,e.key)};else if(e instanceof Rt)t={update:dh(r,e.key,e.data),updateMask:jx(e.fieldMask)};else{if(!(e instanceof Yf))return K();t={verify:Bi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const l=o.transform;if(l instanceof lr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof cr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ur)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _s)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(r,e.precondition)),t}function $a(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Oe.updateTime(Be(i.updateTime)):i.exists!==void 0?Oe.exists(i.exists):Oe.none()}(e.currentDocument):Oe.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,l){let c=null;if("setToServerValue"in l)W(l.setToServerValue==="REQUEST_TIME"),c=new lr;else if("appendMissingElements"in l){const m=l.appendMissingElements.values||[];c=new cr(m)}else if("removeAllFromArray"in l){const m=l.removeAllFromArray.values||[];c=new ur(m)}else"increment"in l?c=new _s(o,l.increment):K();const d=pe.fromServerFormat(l.fieldPath);return new Hf(d,c)}(r,s)):[];if(e.update){e.update.name;const s=bn(r,e.update.name),i=new je({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const d=c.fieldPaths||[];return new ze(d.map(m=>pe.fromServerFormat(m)))}(e.updateMask);return new Rt(s,i,o,t,n)}return new br(s,i,t,n)}if(e.delete){const s=bn(r,e.delete);return new po(s,t)}if(e.verify){const s=bn(r,e.verify);return new Yf(s,t)}return K()}function Px(r,e){return r&&r.length>0?(W(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?Be(s.updateTime):Be(i);return o.isEqual(Q.min())&&(o=Be(i)),new px(o,s.transformResults||[])}(t,e))):[]}function om(r,e){return{documents:[rm(r,e.path)]}}function am(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=rm(r,s);const i=function(d){if(d.length!==0)return um(le.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:Qn(v.field),direction:kx(v.dir)}}(m))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Ua(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function lm(r){let e=sm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){W(n===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(p){const v=cm(p);return v instanceof le&&bl(v)?v.getFilters():[v]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(v=>function(A){return new Li(Jn(A.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,co(v)?null:v}(t.limit));let c=null;t.startAt&&(c=function(p){const v=!!p.before,E=p.values||[];return new or(E,v)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const v=!p.before,E=p.values||[];return new or(E,v)}(t.endAt)),jf(e,s,o,i,l,"F",c,d)}function Cx(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function cm(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Jn(t.unaryFilter.field);return ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Jn(t.unaryFilter.field);return ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jn(t.unaryFilter.field);return ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jn(t.unaryFilter.field);return ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(r):r.fieldFilter!==void 0?function(t){return ne.create(Jn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return le.create(t.compositeFilter.filters.map(n=>cm(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(r):K()}function kx(r){return Ix[r]}function Dx(r){return Ex[r]}function Vx(r){return Tx[r]}function Qn(r){return{fieldPath:r.canonicalString()}}function Jn(r){return pe.fromServerFormat(r.fieldPath)}function um(r){return r instanceof ne?function(t){if(t.op==="=="){if(Qu(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NAN"}};if(Hu(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qu(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NAN"}};if(Hu(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qn(t.field),op:Dx(t.op),value:t.value}}}(r):r instanceof le?function(t){const n=t.getFilters().map(s=>um(s));return n.length===1?n[0]:{compositeFilter:{op:Vx(t.op),filters:n}}}(r):K()}function jx(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function hm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t,n,s,i=Q.min(),o=Q.min(),l=xe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.ct=e}}function Ox(r,e){let t;if(e.document)t=Rx(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=q.fromSegments(e.noDocument.path),s=Rn(e.noDocument.readTime);t=ye.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const n=q.fromSegments(e.unknownDocument.path),s=Rn(e.unknownDocument.version);t=ye.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ge(s[0],s[1]);return Q.fromTimestamp(i)}(e.readTime)),t}function fh(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:$i(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:Bi(i,o.key),fields:o.data.value.mapValue.fields,updateTime:hr(i,o.version.toTimestamp()),createTime:hr(i,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Sn(e.version)};else{if(!e.isUnknownDocument())return K();n.unknownDocument={path:t.path.toArray(),version:Sn(e.version)}}return n}function $i(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Sn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Rn(r){const e=new ge(r.seconds,r.nanoseconds);return Q.fromTimestamp(e)}function gn(r,e){const t=(e.baseMutations||[]).map(i=>$a(r.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const l=e.mutations[i+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>$a(r.ct,i)),s=ge.fromMillis(e.localWriteTimeMs);return new Il(e.batchId,s,t,n)}function Hr(r){const e=Rn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Rn(r.lastLimboFreeSnapshotVersion):Q.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return W(i.documents.length===1),We(Ns(sm(i.documents[0])))}(r.query):function(i){return We(lm(i))}(r.query),new wt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,xe.fromBase64String(r.resumeToken))}function fm(r,e){const t=Sn(e.snapshotVersion),n=Sn(e.lastLimboFreeSnapshotVersion);let s;s=Fi(e.target)?om(r.ct,e.target):am(r.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:An(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function mm(r){const e=lm({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Fa(e,e.limit,"L"):e}function oa(r,e){return new Tl(e.largestBatchId,$a(r.ct,e.overlayMutation))}function mh(r,e){const t=e.path.lastSegment();return[r,Ue(e.path.popLast()),t]}function ph(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Sn(n.readTime),documentKey:Ue(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{getBundleMetadata(e,t){return gh(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Rn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return gh(e).put(function(s){return{bundleId:s.id,createTime:Sn(Be(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return _h(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:mm(i.bundledQuery),readTime:Rn(i.readTime)}}(n)})}saveNamedQuery(e,t){return _h(e).put(function(s){return{name:s.name,readTime:Sn(Be(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function gh(r){return Ae(r,"bundles")}function _h(r){return Ae(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new go(e,n)}getOverlay(e,t){return Mr(e).get(mh(this.userId,t)).next(n=>n?oa(this.serializer,n):null)}getOverlays(e,t){const n=it();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const l=new Tl(t,o);s.push(this.ht(e,l))}),N.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(Ue(o.getCollectionPath())));const i=[];return s.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Mr(e).j("collectionPathOverlayIndex",l))}),N.waitFor(i)}getOverlaysForCollection(e,t,n){const s=it(),i=Ue(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Mr(e).U("collectionPathOverlayIndex",o).next(l=>{for(const c of l){const d=oa(this.serializer,c);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=it();let o;const l=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Mr(e).J({index:"collectionGroupOverlayIndex",range:l},(c,d,m)=>{const p=oa(this.serializer,d);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):m.done()}).next(()=>i)}ht(e,t){return Mr(e).put(function(s,i,o){const[l,c,d]=mh(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:d,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:qi(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Mr(r){return Ae(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{Pt(e){return Ae(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t?.value;return n?xe.fromUint8Array(n):xe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(me(e.integerValue));else if("doubleValue"in e){const n=me(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ds(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=At(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Ht(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Tf(e)?this.dt(t,Number.MAX_SAFE_INTEGER):uo(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):K()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const s of Object.keys(n))this.Vt(s,t),this.Tt(n[s],t)}wt(e,t){var n,s;const i=e.fields||{};this.dt(t,53);const o="value",l=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(me(l)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const s of n)this.Tt(s,t)}yt(e,t){this.dt(t,37),q.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}_n.vt=new _n;function Fx(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function yh(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=Fx(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class Ux{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),n=yh(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),n=yh(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Bx{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class qx{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Lr{constructor(){this.jt=new Ux,this.Ht=new Bx(this.jt),this.Jt=new qx(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new yn(this.indexId,this.documentKey,this.arrayValue,n)}}function Vt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=vh(r.arrayValue,e.arrayValue),t!==0?t:(t=vh(r.directionalValue,e.directionalValue),t!==0?t:q.comparator(r.documentKey,e.documentKey)))}function vh(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.Xt=new ce((t,n)=>pe.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(W(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Ca(e);if(t!==void 0&&!this.sn(t))return!1;const n=mn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const l=this.Xt.getIterator().getNext();if(!s.has(l.field.canonicalString())){const c=n[i];if(!this.on(l,c)||!this._n(this.en[o++],c))return!1}++i}for(;i<n.length;++i){const l=n[i];if(o>=this.en.length||!this._n(this.en[o++],l))return!1}return!0}an(){if(this.nn)return null;let e=new ce(pe.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new vi(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new vi(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new vi(n.field,n.dir==="asc"?0:1)));return new Mi(Mi.UNKNOWN_ID,this.collectionId,t,hs.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(r){var e,t;if(W(r instanceof ne||r instanceof le),r instanceof ne){if(r instanceof Vf){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ne.create(r.field,"==",i)))||[];return le.create(s,"or")}return r}const n=r.filters.map(s=>pm(s));return le.create(n,r.op)}function $x(r){if(r.getFilters().length===0)return[];const e=Ga(pm(r));return W(gm(e)),za(e)||Ka(e)?[e]:e.getFilters()}function za(r){return r instanceof ne}function Ka(r){return r instanceof le&&bl(r)}function gm(r){return za(r)||Ka(r)||function(t){if(t instanceof le&&ja(t)){for(const n of t.getFilters())if(!za(n)&&!Ka(n))return!1;return!0}return!1}(r)}function Ga(r){if(W(r instanceof ne||r instanceof le),r instanceof ne)return r;if(r.filters.length===1)return Ga(r.filters[0]);const e=r.filters.map(n=>Ga(n));let t=le.create(e,r.op);return t=zi(t),gm(t)?t:(W(t instanceof le),W(ar(t)),W(t.filters.length>1),t.filters.reduce((n,s)=>Rl(n,s)))}function Rl(r,e){let t;return W(r instanceof ne||r instanceof le),W(e instanceof ne||e instanceof le),t=r instanceof ne?e instanceof ne?function(s,i){return le.create([s,i],"and")}(r,e):xh(r,e):e instanceof ne?xh(e,r):function(s,i){if(W(s.filters.length>0&&i.filters.length>0),ar(s)&&ar(i))return Cf(s,i.getFilters());const o=ja(s)?s:i,l=ja(s)?i:s,c=o.filters.map(d=>Rl(d,l));return le.create(c,"or")}(r,e),zi(t)}function xh(r,e){if(ar(e))return Cf(e,r.getFilters());{const t=e.filters.map(n=>Rl(r,n));return le.create(t,"or")}}function zi(r){if(W(r instanceof ne||r instanceof le),r instanceof ne)return r;const e=r.getFilters();if(e.length===1)return zi(e[0]);if(Nf(r))return r;const t=e.map(s=>zi(s)),n=[];return t.forEach(s=>{s instanceof ne?n.push(s):s instanceof le&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:le.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this.un=new Nl}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Qe.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Qe.min())}updateCollectionGroup(e,t,n){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Nl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ce(ae.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ce(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Uint8Array(0);class Kx{constructor(e,t){this.databaseId=t,this.cn=new Nl,this.ln=new en(n=>An(n),(n,s)=>Ss(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:n,parent:Ue(s)};return wh(e).put(i)}return N.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[df(t),""],!1,!0);return wh(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(st(o.parent))}return n})}addFieldIndex(e,t){const n=Fr(e),s=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Kn(e);return i.next(l=>{o.put(ph(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Fr(e),s=Kn(e),i=zn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Fr(e),n=zn(e),s=Kn(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return N.forEach(this.hn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new bh(n).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=zn(e);let s=!0;const i=new Map;return N.forEach(this.hn(t),o=>this.Pn(e,o).next(l=>{s&&(s=!!l),i.set(o,l)})).next(()=>{if(s){let o=Z();const l=[];return N.forEach(i,(c,d)=>{j("IndexedDbIndexManager",`Using index ${function(L){return`id=${L.indexId}|cg=${L.collectionGroup}|f=${L.fields.map($=>`${$.fieldPath}:${$.kind}`).join(",")}`}(c)} to execute ${An(t)}`);const m=function(L,$){const P=Ca($);if(P===void 0)return null;for(const R of Ui(L,P.fieldPath))switch(R.op){case"array-contains-any":return R.value.arrayValue.values||[];case"array-contains":return[R.value]}return null}(d,c),p=function(L,$){const P=new Map;for(const R of mn($))for(const x of Ui(L,R.fieldPath))switch(x.op){case"==":case"in":P.set(R.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return P.set(R.fieldPath.canonicalString(),x.value),Array.from(P.values())}return null}(d,c),v=function(L,$){const P=[];let R=!0;for(const x of mn($)){const _=x.kind===0?eh(L,x.fieldPath,L.startAt):th(L,x.fieldPath,L.startAt);P.push(_.value),R&&(R=_.inclusive)}return new or(P,R)}(d,c),E=function(L,$){const P=[];let R=!0;for(const x of mn($)){const _=x.kind===0?th(L,x.fieldPath,L.endAt):eh(L,x.fieldPath,L.endAt);P.push(_.value),R&&(R=_.inclusive)}return new or(P,R)}(d,c),A=this.In(c,d,v),C=this.In(c,d,E),k=this.Tn(c,d,p),F=this.En(c.indexId,m,A,v.inclusive,C,E.inclusive,k);return N.forEach(F,O=>n.G(O,t.limit).next(L=>{L.forEach($=>{const P=q.fromSegments($.documentKey);o.has(P)||(o=o.add(P),l.push(P))})}))}).next(()=>l)}return N.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=$x(le.create(e.filters,"and")).map(n=>Ma(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,s,i,o,l){const c=(t!=null?t.length:1)*Math.max(n.length,i.length),d=c/(t!=null?t.length:1),m=[];for(let p=0;p<c;++p){const v=t?this.dn(t[p/d]):ii,E=this.An(e,v,n[p%d],s),A=this.Rn(e,v,i[p%d],o),C=l.map(k=>this.An(e,v,k,!0));m.push(...this.createRange(E,A,C))}return m}An(e,t,n,s){const i=new yn(e,q.empty(),t,n);return s?i:i.Zt()}Rn(e,t,n,s){const i=new yn(e,q.empty(),t,n);return s?i.Zt():i}Pn(e,t){const n=new bh(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const l of i)n.rn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let n=2;const s=this.hn(t);return N.forEach(s,i=>this.Pn(e,i).next(o=>{o?n!==0&&o.fields.length<function(c){let d=new ce(pe.comparator),m=!1;for(const p of c.filters)for(const v of p.getFlattenedFilters())v.field.isKeyField()||(v.op==="array-contains"||v.op==="array-contains-any"?m=!0:d=d.add(v.field));for(const p of c.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(m?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Vn(e,t){const n=new Lr;for(const s of mn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Yt(s.kind);_n.vt.It(i,o)}return n.zt()}dn(e){const t=new Lr;return _n.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Lr;return _n.vt.It(ps(this.databaseId,t),n.Yt(function(i){const o=mn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let s=[];s.push(new Lr);let i=0;for(const o of mn(e)){const l=n[i++];for(const c of s)if(this.fn(t,o.fieldPath)&&gs(l))s=this.gn(s,o,l);else{const d=c.Yt(o.kind);_n.vt.It(l,d)}}return this.pn(s)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const l of s){const c=new Lr;c.seed(l.zt()),_n.vt.It(o,c.Yt(t.kind)),i.push(c)}return i}fn(e,t){return!!e.filters.find(n=>n instanceof ne&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Fr(e),s=Kn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(i=>{const o=[];return N.forEach(i,l=>s.get([l.indexId,this.uid]).next(c=>{o.push(function(m,p){const v=p?new hs(p.sequenceNumber,new Qe(Rn(p.readTime),new q(st(p.documentKey)),p.largestBatchId)):hs.empty(),E=m.fields.map(([A,C])=>new vi(pe.fromServerFormat(A),C));return new Mi(m.indexId,m.collectionGroup,E,v)}(l,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:Y(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Fr(e),i=Kn(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(l=>N.forEach(l,c=>i.put(ph(c.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return N.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?N.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(l=>(n.set(s.collectionGroup,l),N.forEach(l,c=>this.wn(e,s,c).next(d=>{const m=this.Sn(i,c);return d.isEqual(m)?N.resolve():this.bn(e,i,c,d,m)}))))})}Dn(e,t,n,s){return zn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,s){return zn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const s=zn(e);let i=new ce(Vt);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,l)=>{i=i.add(new yn(n.indexId,t,l.arrayValue,l.directionalValue))}).next(()=>i)}Sn(e,t){let n=new ce(Vt);const s=this.Vn(t,e);if(s==null)return n;const i=Ca(t);if(i!=null){const o=e.data.field(i.fieldPath);if(gs(o))for(const l of o.arrayValue.values||[])n=n.add(new yn(t.indexId,e.key,this.dn(l),s))}else n=n.add(new yn(t.indexId,e.key,ii,s));return n}bn(e,t,n,s,i){j("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,d,m,p,v){const E=c.getIterator(),A=d.getIterator();let C=$n(E),k=$n(A);for(;C||k;){let F=!1,O=!1;if(C&&k){const L=m(C,k);L<0?O=!0:L>0&&(F=!0)}else C!=null?O=!0:F=!0;F?(p(k),k=$n(A)):O?(v(C),C=$n(E)):(C=$n(E),k=$n(A))}}(s,i,Vt,l=>{o.push(this.Dn(e,t,n,l))},l=>{o.push(this.vn(e,t,n,l))}),N.waitFor(o)}yn(e){let t=1;return Kn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,l)=>Vt(o,l)).filter((o,l,c)=>!l||Vt(o,c[l-1])!==0);const s=[];s.push(e);for(const o of n){const l=Vt(o,e),c=Vt(o,t);if(l===0)s[0]=e.Zt();else if(l>0&&c<0)s.push(o),s.push(o.Zt());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const l=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,ii,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,ii,[]];i.push(IDBKeyRange.bound(l,c))}return i}Cn(e,t){return Vt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ih)}getMinOffset(e,t){return N.mapArray(this.hn(t),n=>this.Pn(e,n).next(s=>s||K())).next(Ih)}}function wh(r){return Ae(r,"collectionParents")}function zn(r){return Ae(r,"indexEntries")}function Fr(r){return Ae(r,"indexConfiguration")}function Kn(r){return Ae(r,"indexState")}function Ih(r){W(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;pl(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Qe(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class qe{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new qe(e,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=n.J({range:o},(m,p,v)=>(l++,v.delete()));i.push(c.next(()=>{W(l===1)}));const d=[];for(const m of t.mutations){const p=vf(e,m.key.path,t.batchId);i.push(s.delete(p)),d.push(m.key)}return N.waitFor(i).next(()=>d)}function Ki(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw K();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe.DEFAULT_COLLECTION_PERCENTILE=10,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qe.DEFAULT=new qe(41943040,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qe.DISABLED=new qe(-1,0,0);class _o{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(e,t,n,s){W(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new _o(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return jt(e).J({index:"userMutationsIndex",range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=Yn(e),o=jt(e);return o.add({}).next(l=>{W(typeof l=="number");const c=new Il(l,t,n,s),d=function(E,A,C){const k=C.baseMutations.map(O=>qi(E.ct,O)),F=C.mutations.map(O=>qi(E.ct,O));return{userId:A,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:k,mutations:F}}(this.serializer,this.userId,c),m=[];let p=new ce((v,E)=>Y(v.canonicalString(),E.canonicalString()));for(const v of s){const E=vf(this.userId,v.key.path,l);p=p.add(v.key.path.popLast()),m.push(o.put(d)),m.push(i.put(E,Nb))}return p.forEach(v=>{m.push(this.indexManager.addToCollectionParentIndex(e,v))}),e.addOnCommittedListener(()=>{this.Fn[l]=c.keys()}),N.waitFor(m).next(()=>c)})}lookupMutationBatch(e,t){return jt(e).get(t).next(n=>n?(W(n.userId===this.userId),gn(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?N.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return jt(e).J({index:"userMutationsIndex",range:s},(o,l,c)=>{l.userId===this.userId&&(W(l.batchId>=n),i=gn(this.serializer,l)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return jt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return jt(e).U("userMutationsIndex",t).next(n=>n.map(s=>gn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=bi(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Yn(e).J({range:s},(o,l,c)=>{const[d,m,p]=o,v=st(m);if(d===this.userId&&t.path.isEqual(v))return jt(e).get(p).next(E=>{if(!E)throw K();W(E.userId===this.userId),i.push(gn(this.serializer,E))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ce(Y);const s=[];return t.forEach(i=>{const o=bi(this.userId,i.path),l=IDBKeyRange.lowerBound(o),c=Yn(e).J({range:l},(d,m,p)=>{const[v,E,A]=d,C=st(E);v===this.userId&&i.path.isEqual(C)?n=n.add(A):p.done()});s.push(c)}),N.waitFor(s).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=bi(this.userId,n),o=IDBKeyRange.lowerBound(i);let l=new ce(Y);return Yn(e).J({range:o},(c,d,m)=>{const[p,v,E]=c,A=st(v);p===this.userId&&n.isPrefixOf(A)?A.length===s&&(l=l.add(E)):m.done()}).next(()=>this.xn(e,l))}xn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(jt(e).get(i).next(o=>{if(o===null)throw K();W(o.userId===this.userId),n.push(gn(this.serializer,o))}))}),N.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return _m(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),N.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return N.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Yn(e).J({range:n},(i,o,l)=>{if(i[0]===this.userId){const c=st(i[1]);s.push(c)}else l.done()}).next(()=>{W(s.length===0)})})}containsKey(e,t){return ym(e,this.userId,t)}Nn(e){return vm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ym(r,e,t){const n=bi(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Yn(r).J({range:i,H:!0},(l,c,d)=>{const[m,p,v]=l;m===e&&p===s&&(o=!0),d.done()}).next(()=>o)}function jt(r){return Ae(r,"mutations")}function Yn(r){return Ae(r,"documentMutations")}function vm(r){return Ae(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Nn(0)}static kn(){return new Nn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new Nn(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Q.fromTimestamp(new ge(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Gn(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(W(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return Gn(e).J((o,l)=>{const c=Hr(l);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>N.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Gn(e).J((n,s)=>{const i=Hr(s);t(i)})}qn(e){return Th(e).get("targetGlobalKey").next(t=>(W(t!==null),t))}Qn(e,t){return Th(e).put("targetGlobalKey",t)}Kn(e,t){return Gn(e).put(fm(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=An(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Gn(e).J({range:s,index:"queryTargetsIndex"},(o,l,c)=>{const d=Hr(l);Ss(t,d.target)&&(i=d,c.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=Ut(e);return t.forEach(o=>{const l=Ue(o.path);s.push(i.put({targetId:n,path:l})),s.push(this.referenceDelegate.addReference(e,n,o))}),N.waitFor(s)}removeMatchingKeys(e,t,n){const s=Ut(e);return N.forEach(t,i=>{const o=Ue(i.path);return N.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=Ut(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Ut(e);let i=Z();return s.J({range:n,H:!0},(o,l,c)=>{const d=st(o[1]),m=new q(d);i=i.add(m)}).next(()=>i)}containsKey(e,t){const n=Ue(t.path),s=IDBKeyRange.bound([n],[df(n)],!1,!0);let i=0;return Ut(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,l],c,d)=>{o!==0&&(i++,d.done())}).next(()=>i>0)}ot(e,t){return Gn(e).get(t).next(n=>n?Hr(n):null)}}function Gn(r){return Ae(r,"targets")}function Th(r){return Ae(r,"targetGlobal")}function Ut(r){return Ae(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah([r,e],[t,n]){const s=Y(r,t);return s===0?Y(e,n):s}class Wx{constructor(e){this.Un=e,this.buffer=new ce(Ah),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Ah(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Hx{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){j("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Zt(t)?j("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Xt(t)}await this.Hn(3e5)})}}class Qx{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return N.resolve($e.oe);const n=new Wx(t);return this.Jn.forEachTarget(e,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Eh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Eh):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,s,i,o,l,c,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,l=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(d=Date.now(),Wn()<=te.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(d-c)+`ms
Total Duration: ${d-m}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Jx(r,e){return new Qx(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e,t){this.db=e,this.garbageCollector=Jx(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,s)=>t(s))}addReference(e,t,n){return oi(e,n)}removeReference(e,t,n){return oi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return oi(e,t)}nr(e,t){return function(s,i){let o=!1;return vm(s).Y(l=>ym(s,l,i).next(c=>(c&&(o=!0),N.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,l)=>{if(l<=t){const c=this.nr(e,o).next(d=>{if(!d)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,Q.min()),Ut(e).delete(function(p){return[0,Ue(p.path)]}(o))))});s.push(c)}}).next(()=>N.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return oi(e,t)}tr(e,t){const n=Ut(e);let s,i=$e.oe;return n.J({index:"documentTargetsIndex"},([o,l],{path:c,sequenceNumber:d})=>{o===0?(i!==$e.oe&&t(new q(st(s)),i),i=d,s=c):i=$e.oe}).next(()=>{i!==$e.oe&&t(new q(st(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function oi(r,e){return Ut(r).put(function(n,s){return{targetId:0,path:Ue(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.changes=new en(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?N.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return un(e).put(n)}removeEntry(e,t,n){return un(e).delete(function(i,o){const l=i.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],$i(o),l[l.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=ye.newInvalidDocument(t);return un(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ur(t))},(s,i)=>{n=this.ir(t,i)}).next(()=>n)}sr(e,t){let n={size:0,document:ye.newInvalidDocument(t)};return un(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ur(t))},(s,i)=>{n={document:this.ir(t,i),size:Ki(i)}}).next(()=>n)}getEntries(e,t){let n=Ge();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);n=n.insert(s,o)}).next(()=>n)}ar(e,t){let n=Ge(),s=new de(q.comparator);return this._r(e,t,(i,o)=>{const l=this.ir(i,o);n=n.insert(i,l),s=s.insert(i,Ki(o))}).next(()=>({documents:n,ur:s}))}_r(e,t,n){if(t.isEmpty())return N.resolve();let s=new ce(Nh);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Ur(s.first()),Ur(s.last())),o=s.getIterator();let l=o.getNext();return un(e).J({index:"documentKeyIndex",range:i},(c,d,m)=>{const p=q.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;l&&Nh(l,p)<0;)n(l,null),l=o.getNext();l&&l.isEqual(p)&&(n(l,d),l=o.hasNext()?o.getNext():null),l?m.$(Ur(l)):m.done()}).next(()=>{for(;l;)n(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),$i(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return un(e).U(IDBKeyRange.bound(l,c,!0)).next(d=>{i?.incrementDocumentReadCount(d.length);let m=Ge();for(const p of d){const v=this.ir(q.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);v.isFoundDocument()&&(Ps(t,v)||s.has(v.key))&&(m=m.insert(v.key,v))}return m})}getAllFromCollectionGroup(e,t,n,s){let i=Ge();const o=Rh(t,n),l=Rh(t,Qe.max());return un(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,l,!0)},(c,d,m)=>{const p=this.ir(q.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(p.key,p),i.size===s&&m.done()}).next(()=>i)}newChangeBuffer(e){return new Zx(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Sh(e).get("remoteDocumentGlobalKey").next(t=>(W(!!t),t))}rr(e,t){return Sh(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=Ox(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(Q.min())))return n}return ye.newInvalidDocument(e)}}function xm(r){return new Xx(r)}class Zx extends bm{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new en(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new ce((i,o)=>Y(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const l=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,l.readTime)),o.isValidDocument()){const c=fh(this.cr.serializer,o);s=s.add(i.path.popLast());const d=Ki(c);n+=d-l.size,t.push(this.cr.addEntry(e,i,c))}else if(n-=l.size,this.trackRemovals){const c=fh(this.cr.serializer,o.convertToNoDocument(Q.min()));t.push(this.cr.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,n)),N.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function Sh(r){return Ae(r,"remoteDocumentGlobal")}function un(r){return Ae(r,"remoteDocumentsV14")}function Ur(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Rh(r,e){const t=e.documentKey.path.toArray();return[r,$i(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Nh(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=Y(t[i],n[i]),s)return s;return s=Y(t.length,n.length),s||(s=Y(t[t.length-2],n[n.length-2]),s||Y(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&ns(n.mutation,s,ze.empty(),ge.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Z()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Z()){const s=it();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Gr();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=it();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Z()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,n,s){let i=Ge();const o=ts(),l=function(){return ts()}();return t.forEach((c,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Rt)?i=i.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),ns(m.mutation,d,m.mutation.getFieldMask(),ge.now())):o.set(d.key,ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((d,m)=>o.set(d,m)),t.forEach((d,m)=>{var p;return l.set(d,new ew(m,(p=o.get(d))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const n=ts();let s=new de((o,l)=>o-l),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const d=t.get(c);if(d===null)return;let m=n.get(c)||ze.empty();m=l.applyToLocalView(d,m),n.set(c,m);const p=(s.get(l.batchId)||Z()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,m=c.value,p=qf();m.forEach(v=>{if(!i.has(v)){const E=Qf(t.get(v),n.get(v));E!==null&&p.set(v,E),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return N.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Of(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):N.resolve(it());let l=-1,c=i;return o.next(d=>N.forEach(d,(m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?N.resolve():this.remoteDocumentCache.getEntry(e,m).next(v=>{c=c.insert(m,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,c,d,Z())).next(m=>({batchId:l,changes:Bf(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(n=>{let s=Gr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Gr();return this.indexManager.getCollectionParents(e,i).next(l=>N.forEach(l,c=>{const d=function(p,v){return new Rs(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next(m=>{m.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((c,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,ye.newInvalidDocument(m)))});let l=Gr();return o.forEach((c,d)=>{const m=i.get(c);m!==void 0&&ns(m.mutation,d,ze.empty(),ge.now()),Ps(t,d)&&(l=l.insert(c,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Be(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:mm(s.bundledQuery),readTime:Be(s.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.overlays=new de(q.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const n=it();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.ht(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),N.resolve()}getOverlaysForCollection(e,t,n){const s=it(),i=t.length+1,o=new q(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new de((d,m)=>d-m);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=it(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=it(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return N.resolve(l)}ht(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Tl(t,n));let i=this.Ir.get(t);i===void 0&&(i=Z(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.Tr=new ce(Se.Er),this.dr=new ce(Se.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Se(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Se(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new q(new ae([])),n=new Se(t,e),s=new Se(t,e+1),i=[];return this.dr.forEachInRange([n,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new q(new ae([])),n=new Se(t,e),s=new Se(t,e+1);let i=Z();return this.dr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Se(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Se{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return q.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ce(Se.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Il(i,t,n,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Se(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.vr(n),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],o=>{const l=this.Dr(o.wr);i.push(l)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ce(Y);return t.forEach(s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{n=n.add(l.wr)})}),N.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;q.isDocumentKey(i)||(i=i.child(""));const o=new Se(new q(i),0);let l=new ce(Y);return this.br.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(l=l.add(c.wr)),!0)},o),N.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(n=>{const s=this.Dr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){W(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return N.forEach(t.mutations,s=>{const i=new Se(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Se(t,0),s=this.br.firstAfterOrEqual(n);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.Mr=e,this.docs=function(){return new de(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return N.resolve(n?n.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let n=Ge();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ye.newInvalidDocument(s))}),N.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ge();const o=t.path,l=new q(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:m}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||pl(mf(m),n)<=0||(s.has(m.key)||Ps(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,n,s){K()}Or(e,t){return N.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new ow(this)}getSize(e){return N.resolve(this.size)}}class ow extends bm{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(n)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.persistence=e,this.Nr=new en(t=>An(t),Ss),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Pl,this.targetCount=0,this.kr=Nn.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Nn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return N.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),N.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return N.resolve(n)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.qr={},this.overlays={},this.Qr=new $e(0),this.Kr=!1,this.Kr=!0,this.$r=new rw,this.referenceDelegate=e(this),this.Ur=new aw(this),this.indexManager=new zx,this.remoteDocumentCache=function(s){return new iw(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new dm(t),this.Gr=new tw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new sw(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){j("MemoryPersistence","Starting transaction:",e);const s=new lw(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return N.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class lw extends gf{constructor(e){super(),this.currentSequenceNumber=e}}class yo{constructor(e){this.persistence=e,this.Jr=new Pl,this.Yr=null}static Zr(e){return new yo(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),N.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,n=>{const s=q.fromPath(n);return this.ei(e,s).next(i=>{i||t.removeEntry(s,Q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.serializer=e}O(e,t,n,s){const i=new lo("createOrUpgrade",t);n<1&&s>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$u,{unique:!0}),c.createObjectStore("documentMutations")}(e),Ph(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=N.resolve();return n<3&&s>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),Ph(e)),o=o.next(()=>function(c){const d=c.store("targetGlobal"),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",m)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(c,d){return d.store("mutations").U().next(m=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$u,{unique:!0});const p=d.store("mutations"),v=m.map(E=>p.put(E));return N.waitFor(v)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.ni(i))),n<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),n<7&&s>=7&&(o=o.next(()=>this.ii(i))),n<8&&s>=8&&(o=o.next(()=>this.si(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.oi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(c){const d=c.createObjectStore("documentOverlays",{keyPath:Bb});d.createIndex("collectionPathOverlayIndex",qb,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",$b,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(c){const d=c.createObjectStore("remoteDocumentsV14",{keyPath:Pb});d.createIndex("documentKeyIndex",Cb),d.createIndex("collectionGroupIndex",kb)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),n<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:Mb}).createIndex("sequenceNumberIndex",Lb,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:Fb}).createIndex("documentKeyIndex",Ub,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=Ki(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>N.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(l=>N.forEach(l,c=>{W(c.userId===i.userId);const d=gn(this.serializer,c);return _m(e,i.userId,d).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((o,l)=>{const c=new ae(o),d=function(p){return[0,Ue(p)]}(c);i.push(t.get(d).next(m=>m?N.resolve():(p=>t.put({targetId:0,path:Ue(p),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>N.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:Ob});const n=t.store("collectionParents"),s=new Nl,i=o=>{if(s.add(o)){const l=o.lastSegment(),c=o.popLast();return n.put({collectionId:l,parent:Ue(c)})}};return t.store("remoteDocuments").J({H:!0},(o,l)=>{const c=new ae(o);return i(c.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,l,c],d)=>{const m=st(l);return i(m.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,s)=>{const i=Hr(s),o=fm(this.serializer,i);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((i,o)=>{const l=t.store("remoteDocumentsV14"),c=function(p){return p.document?new q(ae.fromString(p.document.name).popFirst(5)):p.noDocument?q.fromSegments(p.noDocument.path):p.unknownDocument?q.fromSegments(p.unknownDocument.path):K()}(o).path.toArray(),d={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(l.put(d))}).next(()=>N.waitFor(s))}ai(e,t){const n=t.store("mutations"),s=xm(this.serializer),i=new Im(yo.Zr,this.serializer.ct);return n.U().next(o=>{const l=new Map;return o.forEach(c=>{var d;let m=(d=l.get(c.userId))!==null&&d!==void 0?d:Z();gn(this.serializer,c).keys().forEach(p=>m=m.add(p)),l.set(c.userId,m)}),N.forEach(l,(c,d)=>{const m=new Ve(d),p=go.lt(this.serializer,m),v=i.getIndexManager(m),E=_o.lt(m,this.serializer,v,i.referenceDelegate);return new wm(s,E,p,v).recalculateAndSaveOverlaysForDocumentKeys(new ka(t,$e.oe),c).next()})})}}function Ph(r){r.createObjectStore("targetDocuments",{keyPath:Vb}).createIndex("documentTargetsIndex",jb,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Db,{unique:!0}),r.createObjectStore("targetGlobal")}const aa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Cl{constructor(e,t,n,s,i,o,l,c,d,m,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=o,this.document=l,this.ci=d,this.li=m,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=v=>Promise.resolve(),!Cl.D())throw new B(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Yx(this,s),this.Ai=t+"main",this.serializer=new dm(c),this.Ri=new Kt(this.Ai,this.hi,new cw(this.serializer)),this.$r=new Lx,this.Ur=new Gx(this.referenceDelegate,this.serializer),this.remoteDocumentCache=xm(this.serializer),this.Gr=new Mx,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,m===!1&&ve("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(V.FAILED_PRECONDITION,aa);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new $e(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ai(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Zt(e))return j("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return j("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Br(e).get("owner").next(t=>N.resolve(this.vi(t)))}Ci(e){return ai(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Ae(t,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(l=>i.indexOf(l)===-1);return N.forEach(o,l=>n.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?N.resolve(!0):Br(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new B(V.FAILED_PRECONDITION,aa);return!1}}return!(!this.networkEnabled||!this.inForeground)||ai(e).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,l=this.networkEnabled===s.networkEnabled;if(i||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&j("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ka(e,$e.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>ai(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return _o.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Kx(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return go.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){j("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===17?Gb:c===16?Kb:c===15?_l:c===14?wf:c===13?xf:c===12?zb:c===11?bf:void K()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,l=>(o=new ka(l,this.Qr?this.Qr.next():$e.oe),t==="readwrite-primary"?this.wi(o).next(c=>!!c||this.Si(o)).next(c=>{if(!c)throw ve(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new B(V.FAILED_PRECONDITION,pf);return n(o)}).next(c=>this.Di(o).next(()=>c)):this.Ki(o).next(()=>n(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Ki(e){return Br(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new B(V.FAILED_PRECONDITION,aa)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Br(e).put("owner",t)}static D(){return Kt.D()}bi(e){const t=Br(e);return t.get("owner").next(n=>this.vi(n)?(j("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):N.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ve(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;_d()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return j("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ve("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){ve("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Br(r){return Ae(r,"owner")}function ai(r){return Ae(r,"clientMetadata")}function Em(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=s}static Wi(e,t){let n=Z(),s=Z();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new kl(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return _d()?8:_f(Te())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new uw;return this.Xi(e,t,o).next(l=>{if(i.result=l,this.zi)return this.es(e,t,o,l.size)})}).next(()=>i.result)}es(e,t,n,s){return n.documentReadCount<this.ji?(Wn()<=te.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Hn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(Wn()<=te.DEBUG&&j("QueryEngine","Query:",Hn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(Wn()<=te.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Hn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,We(t))):N.resolve())}Yi(e,t){if(nh(t))return N.resolve(null);let n=We(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Fa(t,null,"F"),n=We(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=Z(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const d=this.ts(t,l);return this.ns(t,d,o,c.readTime)?this.Yi(e,Fa(t,null,"F")):this.rs(e,d,t,c)}))})))}Zi(e,t,n,s){return nh(t)||s.isEqual(Q.min())?N.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const o=this.ts(t,i);return this.ns(t,o,n,s)?N.resolve(null):(Wn()<=te.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hn(t)),this.rs(e,o,t,ff(s,-1)).next(l=>l))})}ts(e,t){let n=new ce(Ff(e));return t.forEach((s,i)=>{Ps(e,i)&&(n=n.add(i))}),n}ns(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,n){return Wn()<=te.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Hn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Qe.min(),n)}rs(e,t,n,s){return this.Ji.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t,n,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new de(Y),this._s=new en(i=>An(i),Ss),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wm(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Am(r,e,t,n){return new hw(r,e,t,n)}async function Sm(r,e){const t=G(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],l=[];let c=Z();for(const d of s){o.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}return t.localDocuments.getDocuments(n,c).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function dw(r,e){const t=G(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,d,m){const p=d.batch,v=p.keys();let E=N.resolve();return v.forEach(A=>{E=E.next(()=>m.getEntry(c,A)).next(C=>{const k=d.docVersions.get(A);W(k!==null),C.version.compareTo(k)<0&&(p.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),m.addEntry(C)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=Z();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Rm(r){const e=G(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function fw(r,e){const t=G(r),n=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((m,p)=>{const v=s.get(p);if(!v)return;l.push(t.Ur.removeMatchingKeys(i,m.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,m.addedDocuments,p)));let E=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(xe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):m.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(m.resumeToken,n)),s=s.insert(p,E),function(C,k,F){return C.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(v,E,m)&&l.push(t.Ur.updateTargetData(i,E))});let c=Ge(),d=Z();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(mw(i,o,e.documentUpdates).next(m=>{c=m.Ps,d=m.Is})),!n.isEqual(Q.min())){const m=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));l.push(m)}return N.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(t.os=s,i))}function mw(r,e,t){let n=Z(),s=Z();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=Ge();return t.forEach((l,c)=>{const d=i.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):j("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function pw(r,e){const t=G(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Gi(r,e){const t=G(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Ur.getTargetData(n,e).next(i=>i?(s=i,N.resolve(s)):t.Ur.allocateTargetId(n).next(o=>(s=new wt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function dr(r,e,t){const n=G(r),s=n.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zt(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(s.target)}function Wa(r,e,t){const n=G(r);let s=Q.min(),i=Z();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,d,m){const p=G(c),v=p._s.get(m);return v!==void 0?N.resolve(p.os.get(v)):p.Ur.getTargetData(d,m)}(n,o,We(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?s:Q.min(),t?i:Z())).next(l=>(Cm(n,Lf(e),l),{documents:l,Ts:i})))}function Nm(r,e){const t=G(r),n=G(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,e).next(o=>o?o.target:null))}function Pm(r,e){const t=G(r),n=t.us.get(e)||Q.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,ff(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Cm(t,e,s),s))}function Cm(r,e,t){let n=r.us.get(e)||Q.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(e,n)}function Ch(r,e){return`firestore_clients_${r}_${e}`}function kh(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function la(r,e){return`firestore_targets_${r}_${e}`}class Wi{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Rs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new B(s.error.code,s.error.message))),o?new Wi(e,t,s.state,i):(ve("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class rs{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new B(n.error.code,n.error.message))),i?new rs(e,n.state,s):(ve("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=xl();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=yf(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Hi(e,i):(ve("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Dl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Dl(t.clientId,t.onlineState):(ve("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ha{constructor(){this.activeTargetIds=xl()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ca{constructor(e,t,n,s,i){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new de(Y),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Ch(this.persistenceKey,this.ps),this.vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Ha),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Os=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const s=this.getItem(Ch(this.persistenceKey,n));if(s){const i=Hi.Rs(n,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(la(this.persistenceKey,e));if(s){const i=rs.Rs(e,s);i&&(n=i.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(la(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return j("SharedClientState","READ",e,t),t}setItem(e,t){j("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){j("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(j("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void ve("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(i){let o=$e.oe;if(i!=null)try{const l=JSON.parse(i);W(typeof l=="number"),o=l}catch(l){ve("SharedClientState","Failed to read sequence number from WebStorage",l)}return o}(t.newValue);n!==$e.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const s=new Wi(this.currentUser,e,t,n),i=kh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=kh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const s=la(this.persistenceKey,e),i=new rs(e,t,n);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return Hi.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Wi.Rs(new Ve(i),s,t)}Ys(e,t){const n=this.Ms.exec(e),s=Number(n[1]);return rs.Rs(s,t)}Ls(e){return Dl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);j("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(n),o=[],l=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||l.push(c)}),this.syncEngine.io(o,l).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=xl();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class km{constructor(){this.so=new Ha,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ha,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li=null;function ua(){return li===null?li=function(){return 268435456+Math.round(2147483648*Math.random())}():li++,"0x"+li.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="WebChannelConnection";class vw extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,n,s,i,o){const l=ua(),c=this.xo(t,n.toUriEncodedString());j("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(t,c,d,s).then(m=>(j("RestConnection",`Received RPC '${t}' ${l}: `,m),m),m=>{throw cs("RestConnection",`RPC '${t}' ${l} failed with error: `,m,"url: ",c,"request:",s),m})}Lo(t,n,s,i,o,l){return this.Mo(t,n,s,i,o)}Oo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,n){const s=_w[t];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,s){const i=ua();return new Promise((o,l)=>{const c=new of;c.setWithCredentials(!0),c.listenOnce(af.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case yi.NO_ERROR:const m=c.getResponseJson();j(De,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),o(m);break;case yi.TIMEOUT:j(De,`RPC '${e}' ${i} timed out`),l(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case yi.HTTP_ERROR:const p=c.getStatus();if(j(De,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const E=v?.error;if(E&&E.status&&E.message){const A=function(k){const F=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(F)>=0?F:V.UNKNOWN}(E.status);l(new B(A,E.message))}else l(new B(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new B(V.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{j(De,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);j(De,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",d,n,15)})}Bo(e,t,n){const s=ua(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uf(),l=cf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const m=i.join("");j(De,`Creating RPC '${e}' stream ${s}: ${m}`,c);const p=o.createWebChannel(m,c);let v=!1,E=!1;const A=new yw({Io:k=>{E?j(De,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(v||(j(De,`Opening RPC '${e}' stream ${s} transport.`),p.open(),v=!0),j(De,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),C=(k,F,O)=>{k.listen(F,L=>{try{O(L)}catch($){setTimeout(()=>{throw $},0)}})};return C(p,Kr.EventType.OPEN,()=>{E||(j(De,`RPC '${e}' stream ${s} transport opened.`),A.yo())}),C(p,Kr.EventType.CLOSE,()=>{E||(E=!0,j(De,`RPC '${e}' stream ${s} transport closed`),A.So())}),C(p,Kr.EventType.ERROR,k=>{E||(E=!0,cs(De,`RPC '${e}' stream ${s} transport errored:`,k),A.So(new B(V.UNAVAILABLE,"The operation could not be completed")))}),C(p,Kr.EventType.MESSAGE,k=>{var F;if(!E){const O=k.data[0];W(!!O);const L=O,$=L.error||((F=L[0])===null||F===void 0?void 0:F.error);if($){j(De,`RPC '${e}' stream ${s} received error:`,$);const P=$.status;let R=function(w){const I=we[w];if(I!==void 0)return Xf(I)}(P),x=$.message;R===void 0&&(R=V.INTERNAL,x="Unknown error status: "+P+" with message "+$.message),E=!0,A.So(new B(R,x)),p.close()}else j(De,`RPC '${e}' stream ${s} received:`,O),A.bo(O)}}),C(l,lf.STAT_EVENT,k=>{k.stat===Pa.PROXY?j(De,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Pa.NOPROXY&&j(De,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(){return typeof window<"u"?window:null}function Ti(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(r){return new Ax(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,t,n=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-n);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,n,s,i,o,l,c){this.ui=e,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Vm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(ve(t.toString()),ve("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===t&&this.P_(n,s)},n=>{e(()=>{const s=new B(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bw extends jm{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Nx(this.serializer,e),n=function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Be(o.readTime):Q.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=qa(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=Fi(c)?{documents:om(i,c)}:{query:am(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=tm(i,o.resumeToken);const d=Ua(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=hr(i,o.snapshotVersion.toTimestamp());const d=Ua(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const n=Cx(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=qa(this.serializer),t.removeTarget=e,this.a_(t)}}class xw extends jm{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return W(!!e.streamToken),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Px(e.writeResults,e.commitTime),n=Be(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=qa(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>qi(this.serializer,n))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Ba(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(V.UNKNOWN,i.toString())})}Lo(e,t,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ba(t,n),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Iw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ve(t),this.D_=!1):j("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{n.enqueueAndForget(async()=>{Dn(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=G(c);d.L_.add(4),await Ds(d),d.q_.set("Unknown"),d.L_.delete(4),await bo(d)}(this))})}),this.q_=new Iw(n,s)}}async function bo(r){if(Dn(r))for(const e of r.B_)await e(!0)}async function Ds(r){for(const e of r.B_)await e(!1)}function xo(r,e){const t=G(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Ol(t)?jl(t):wr(t).r_()&&Vl(t,e))}function fr(r,e){const t=G(r),n=wr(t);t.N_.delete(e),n.r_()&&Om(t,e),t.N_.size===0&&(n.r_()?n.o_():Dn(t)&&t.q_.set("Unknown"))}function Vl(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wr(r).A_(e)}function Om(r,e){r.Q_.xe(e),wr(r).R_(e)}function jl(r){r.Q_=new wx({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),wr(r).start(),r.q_.v_()}function Ol(r){return Dn(r)&&!wr(r).n_()&&r.N_.size>0}function Dn(r){return G(r).L_.size===0}function Mm(r){r.Q_=void 0}async function Tw(r){r.q_.set("Online")}async function Aw(r){r.N_.forEach((e,t)=>{Vl(r,e)})}async function Sw(r,e){Mm(r),Ol(r)?(r.q_.M_(e),jl(r)):r.q_.set("Unknown")}async function Rw(r,e,t){if(r.q_.set("Online"),e instanceof em&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(r,e)}catch(n){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Qi(r,n)}else if(e instanceof Ei?r.Q_.Ke(e):e instanceof Zf?r.Q_.He(e):r.Q_.We(e),!t.isEqual(Q.min()))try{const n=await Rm(r.localStore);t.compareTo(n)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const m=i.N_.get(d);m&&i.N_.set(d,m.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,d)=>{const m=i.N_.get(c);if(!m)return;i.N_.set(c,m.withResumeToken(xe.EMPTY_BYTE_STRING,m.snapshotVersion)),Om(i,c);const p=new wt(m.target,c,d,m.sequenceNumber);Vl(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){j("RemoteStore","Failed to raise snapshot:",n),await Qi(r,n)}}async function Qi(r,e,t){if(!Zt(e))throw e;r.L_.add(1),await Ds(r),r.q_.set("Offline"),t||(t=()=>Rm(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await bo(r)})}function Lm(r,e){return e().catch(t=>Qi(r,t,e))}async function xr(r){const e=G(r),t=Jt(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Nw(e);)try{const s=await pw(e.localStore,n);if(s===null){e.O_.length===0&&t.o_();break}n=s.batchId,Pw(e,s)}catch(s){await Qi(e,s)}Fm(e)&&Um(e)}function Nw(r){return Dn(r)&&r.O_.length<10}function Pw(r,e){r.O_.push(e);const t=Jt(r);t.r_()&&t.V_&&t.m_(e.mutations)}function Fm(r){return Dn(r)&&!Jt(r).n_()&&r.O_.length>0}function Um(r){Jt(r).start()}async function Cw(r){Jt(r).p_()}async function kw(r){const e=Jt(r);for(const t of r.O_)e.m_(t.mutations)}async function Dw(r,e,t){const n=r.O_.shift(),s=El.from(n,e,t);await Lm(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await xr(r)}async function Vw(r,e){e&&Jt(r).V_&&await async function(n,s){if(function(o){return vx(o)&&o!==V.ABORTED}(s.code)){const i=n.O_.shift();Jt(n).s_(),await Lm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xr(n)}}(r,e),Fm(r)&&Um(r)}async function Vh(r,e){const t=G(r);t.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const n=Dn(t);t.L_.add(3),await Ds(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await bo(t)}async function Qa(r,e){const t=G(r);e?(t.L_.delete(2),await bo(t)):e||(t.L_.add(2),await Ds(t),t.q_.set("Unknown"))}function wr(r){return r.K_||(r.K_=function(t,n,s){const i=G(t);return i.w_(),new bw(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:Tw.bind(null,r),Ro:Aw.bind(null,r),mo:Sw.bind(null,r),d_:Rw.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),Ol(r)?jl(r):r.q_.set("Unknown")):(await r.K_.stop(),Mm(r))})),r.K_}function Jt(r){return r.U_||(r.U_=function(t,n,s){const i=G(t);return i.w_(),new xw(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Cw.bind(null,r),mo:Vw.bind(null,r),f_:kw.bind(null,r),g_:Dw.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await xr(r)):(await r.U_.stop(),r.O_.length>0&&(j("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,l=new Ml(e,t,o,s,i);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ll(r,e){if(ve("AsyncQueue",`${e}: ${r}`),Zt(r))return new B(V.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.comparator=e?(t,n)=>e(t,n)||q.comparator(t.key,n.key):(t,n)=>q.comparator(t.key,n.key),this.keyedMap=Gr(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new nr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new nr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.W_=new de(q.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class mr{constructor(e,t,n,s,i,o,l,c,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new mr(e,t,nr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ho(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ow{constructor(){this.queries=Oh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const s=G(t),i=s.queries;s.queries=Oh(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(n)})})(this,new B(V.ABORTED,"Firestore shutting down"))}}function Oh(){return new en(r=>Mf(r),ho)}async function Fl(r,e){const t=G(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(n=2):(i=new jw,n=e.J_()?0:1);try{switch(n){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=Ll(o,`Initialization of query '${Hn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Bl(t)}async function Ul(r,e){const t=G(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Mw(r,e){const t=G(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(n=!0);o.z_=s}}n&&Bl(t)}function Lw(r,e,t){const n=G(r),s=n.queries.get(e);if(s)for(const i of s.j_)i.onError(t);n.queries.delete(e)}function Bl(r){r.Y_.forEach(e=>{e.next()})}var Ja,Mh;(Mh=Ja||(Ja={})).ea="default",Mh.Cache="cache";class ql{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new mr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=mr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ja.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.key=e}}class qm{constructor(e){this.key=e}}class Fw{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=Ff(e),this.Ra=new nr(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new jh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,p)=>{const v=s.get(m),E=Ps(this.query,p)?p:null,A=!!v&&this.mutatedKeys.has(v.key),C=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;v&&E?v.data.isEqual(E.data)?A!==C&&(n.track({type:3,doc:E}),k=!0):this.ga(v,E)||(n.track({type:2,doc:E}),k=!0,(c&&this.Aa(E,c)>0||d&&this.Aa(E,d)<0)&&(l=!0)):!v&&E?(n.track({type:0,doc:E}),k=!0):v&&!E&&(n.track({type:1,doc:v}),k=!0,(c||d)&&(l=!0)),k&&(E?(o=o.add(E),i=C?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{Ra:o,fa:n,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((m,p)=>function(E,A){const C=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return C(E)-C(A)}(m.type,p.type)||this.Aa(m.doc,p.doc)),this.pa(n),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,d=c!==this.Ea;return this.Ea=c,o.length!==0||d?{snapshot:new mr(this.query,e.Ra,i,o,e.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new jh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new qm(n))}),this.da.forEach(n=>{e.has(n)||t.push(new Bm(n))}),t}ba(e){this.Ta=e.Ts,this.da=Z();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return mr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Uw{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Bw{constructor(e){this.key=e,this.va=!1}}class qw{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new en(l=>Mf(l),ho),this.Ma=new Map,this.xa=new Set,this.Oa=new de(q.comparator),this.Na=new Map,this.La=new Pl,this.Ba={},this.ka=new Map,this.qa=Nn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $w(r,e,t=!0){const n=wo(r);let s;const i=n.Fa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await $m(n,e,t,!0),s}async function zw(r,e){const t=wo(r);await $m(t,e,!0,!1)}async function $m(r,e,t,n){const s=await Gi(r.localStore,We(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let l;return n&&(l=await $l(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&xo(r.remoteStore,s),l}async function $l(r,e,t,n,s){r.Ka=(p,v,E)=>async function(C,k,F,O){let L=k.view.ma(F);L.ns&&(L=await Wa(C.localStore,k.query,!1).then(({documents:x})=>k.view.ma(x,L)));const $=O&&O.targetChanges.get(k.targetId),P=O&&O.targetMismatches.get(k.targetId)!=null,R=k.view.applyChanges(L,C.isPrimaryClient,$,P);return Ya(C,k.targetId,R.wa),R.snapshot}(r,p,v,E);const i=await Wa(r.localStore,e,!0),o=new Fw(e,i.Ts),l=o.ma(i.documents),c=ks.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=o.applyChanges(l,r.isPrimaryClient,c);Ya(r,t,d.wa);const m=new Uw(e,t,o);return r.Fa.set(e,m),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),d.snapshot}async function Kw(r,e,t){const n=G(r),s=n.Fa.get(e),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(o=>!ho(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await dr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&fr(n.remoteStore,s.targetId),pr(n,s.targetId)}).catch(Xt)):(pr(n,s.targetId),await dr(n.localStore,s.targetId,!0))}async function Gw(r,e){const t=G(r),n=t.Fa.get(e),s=t.Ma.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),fr(t.remoteStore,n.targetId))}async function Ww(r,e,t){const n=Wl(r);try{const s=await function(o,l){const c=G(o),d=ge.now(),m=l.reduce((E,A)=>E.add(A.key),Z());let p,v;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=Ge(),C=Z();return c.cs.getEntries(E,m).next(k=>{A=k,A.forEach((F,O)=>{O.isValidDocument()||(C=C.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,A)).next(k=>{p=k;const F=[];for(const O of l){const L=_x(O,p.get(O.key).overlayedDocument);L!=null&&F.push(new Rt(O.key,L,Sf(L.value.mapValue),Oe.exists(!0)))}return c.mutationQueue.addMutationBatch(E,d,F,l)}).next(k=>{v=k;const F=k.applyToLocalDocumentSet(p,C);return c.documentOverlayCache.saveOverlays(E,k.batchId,F)})}).then(()=>({batchId:v.batchId,changes:Bf(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let d=o.Ba[o.currentUser.toKey()];d||(d=new de(Y)),d=d.insert(l,c),o.Ba[o.currentUser.toKey()]=d}(n,s.batchId,t),await tn(n,s.changes),await xr(n.remoteStore)}catch(s){const i=Ll(s,"Failed to persist write");t.reject(i)}}async function zm(r,e){const t=G(r);try{const n=await fw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?W(o.va):s.removedDocuments.size>0&&(W(o.va),o.va=!1))}),await tn(t,n,e)}catch(n){await Xt(n)}}function Lh(r,e,t){const n=G(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=G(o);c.onlineState=l;let d=!1;c.queries.forEach((m,p)=>{for(const v of p.j_)v.Z_(l)&&(d=!0)}),d&&Bl(c)}(n.eventManager,e),s.length&&n.Ca.d_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Hw(r,e,t){const n=G(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Na.get(e),i=s&&s.key;if(i){let o=new de(q.comparator);o=o.insert(i,ye.newNoDocument(i,Q.min()));const l=Z().add(i),c=new Cs(Q.min(),new Map,new de(Y),o,l);await zm(n,c),n.Oa=n.Oa.remove(i),n.Na.delete(e),Gl(n)}else await dr(n.localStore,e,!1).then(()=>pr(n,e,t)).catch(Xt)}async function Qw(r,e){const t=G(r),n=e.batch.batchId;try{const s=await dw(t.localStore,e);Kl(t,n,null),zl(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await tn(t,s)}catch(s){await Xt(s)}}async function Jw(r,e,t){const n=G(r);try{const s=await function(o,l){const c=G(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return c.mutationQueue.lookupMutationBatch(d,l).next(p=>(W(p!==null),m=p.keys(),c.mutationQueue.removeMutationBatch(d,p))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>c.localDocuments.getDocuments(d,m))})}(n.localStore,e);Kl(n,e,t),zl(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await tn(n,s)}catch(s){await Xt(s)}}function zl(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function Kl(r,e,t){const n=G(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ba[n.currentUser.toKey()]=s}}function pr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Km(r,n)})}function Km(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(fr(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),Gl(r))}function Ya(r,e,t){for(const n of t)n instanceof Bm?(r.La.addReference(n.key,e),Yw(r,n)):n instanceof qm?(j("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Km(r,n.key)):K()}function Yw(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(j("SyncEngine","New document in limbo: "+t),r.xa.add(n),Gl(r))}function Gl(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new q(ae.fromString(e)),n=r.qa.next();r.Na.set(n,new Bw(t)),r.Oa=r.Oa.insert(t,n),xo(r.remoteStore,new wt(We(Ns(t.path)),n,"TargetPurposeLimboResolution",$e.oe))}}async function tn(r,e,t){const n=G(r),s=[],i=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((l,c)=>{o.push(n.Ka(c,e,t).then(d=>{var m;if((d||t)&&n.isPrimaryClient){const p=d?!d.fromCache:(m=t?.targetChanges.get(c.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(d){s.push(d);const p=kl.Wi(c.targetId,d);i.push(p)}}))}),await Promise.all(o),n.Ca.d_(s),await async function(c,d){const m=G(c);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(d,v=>N.forEach(v.$i,E=>m.persistence.referenceDelegate.addReference(p,v.targetId,E)).next(()=>N.forEach(v.Ui,E=>m.persistence.referenceDelegate.removeReference(p,v.targetId,E)))))}catch(p){if(!Zt(p))throw p;j("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const v=p.targetId;if(!p.fromCache){const E=m.os.get(v),A=E.snapshotVersion,C=E.withLastLimboFreeSnapshotVersion(A);m.os=m.os.insert(v,C)}}}(n.localStore,i))}async function Xw(r,e){const t=G(r);if(!t.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const n=await Sm(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new B(V.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await tn(t,n.hs)}}function Zw(r,e){const t=G(r),n=t.Na.get(e);if(n&&n.va)return Z().add(n.key);{let s=Z();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const l=t.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}async function e0(r,e){const t=G(r),n=await Wa(t.localStore,e.query,!0),s=e.view.ba(n);return t.isPrimaryClient&&Ya(t,e.targetId,s.wa),s}async function t0(r,e){const t=G(r);return Pm(t.localStore,e).then(n=>tn(t,n))}async function n0(r,e,t,n){const s=G(r),i=await function(l,c){const d=G(l),m=G(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",p=>m.Mn(p,c).next(v=>v?d.localDocuments.getDocuments(p,v):N.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await xr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Kl(s,e,n||null),zl(s,e),function(l,c){G(G(l).mutationQueue).On(c)}(s.localStore,e)):K(),await tn(s,i)):j("SyncEngine","Cannot apply mutation batch with id: "+e)}async function r0(r,e){const t=G(r);if(wo(t),Wl(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await Fh(t,n.toArray());t.Qa=!0,await Qa(t.remoteStore,!0);for(const i of s)xo(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const n=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(pr(t,o),dr(t.localStore,o,!0))),fr(t.remoteStore,o)}),await s,await Fh(t,n),function(o){const l=G(o);l.Na.forEach((c,d)=>{fr(l.remoteStore,d)}),l.La.pr(),l.Na=new Map,l.Oa=new de(q.comparator)}(t),t.Qa=!1,await Qa(t.remoteStore,!1)}}async function Fh(r,e,t){const n=G(r),s=[],i=[];for(const o of e){let l;const c=n.Ma.get(o);if(c&&c.length!==0){l=await Gi(n.localStore,We(c[0]));for(const d of c){const m=n.Fa.get(d),p=await e0(n,m);p.snapshot&&i.push(p.snapshot)}}else{const d=await Nm(n.localStore,o);l=await Gi(n.localStore,d),await $l(n,Gm(d),o,!1,l.resumeToken)}s.push(l)}return n.Ca.d_(i),s}function Gm(r){return jf(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function s0(r){return function(t){return G(G(t).persistence).Qi()}(G(r).localStore)}async function i0(r,e,t,n){const s=G(r);if(s.Qa)return void j("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Pm(s.localStore,Lf(i[0])),l=Cs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",xe.EMPTY_BYTE_STRING);await tn(s,o,l);break}case"rejected":await dr(s.localStore,e,!0),pr(s,e,n);break;default:K()}}async function o0(r,e,t){const n=wo(r);if(n.Qa){for(const s of e){if(n.Ma.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){j("SyncEngine","Adding an already active target "+s);continue}const i=await Nm(n.localStore,s),o=await Gi(n.localStore,i);await $l(n,Gm(i),o.targetId,!1,o.resumeToken),xo(n.remoteStore,o)}for(const s of t)n.Ma.has(s)&&await dr(n.localStore,s,!1).then(()=>{fr(n.remoteStore,s),pr(n,s)}).catch(Xt)}}function wo(r){const e=G(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=zm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hw.bind(null,e),e.Ca.d_=Mw.bind(null,e.eventManager),e.Ca.$a=Lw.bind(null,e.eventManager),e}function Wl(r){const e=G(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jw.bind(null,e),e}class ys{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Am(this.persistence,new Tm,e.initialUser,this.serializer)}Ga(e){return new Im(yo.Zr,this.serializer)}Wa(e){return new km}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ys.provider={build:()=>new ys};class Wm extends ys{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Wl(this.Ja.syncEngine),await xr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Am(this.persistence,new Tm,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Hx(n,e.asyncQueue,t)}Ha(e,t){const n=new Sb(t,this.persistence);return new Ab(e.asyncQueue,n)}Ga(e){const t=Em(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?qe.withCacheSize(this.cacheSizeBytes):qe.DEFAULT;return new Cl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Dm(),Ti(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new km}}class a0 extends Wm{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof ca&&(this.sharedClientState.syncEngine={no:n0.bind(null,t),ro:i0.bind(null,t),io:o0.bind(null,t),Qi:s0.bind(null,t),eo:t0.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await r0(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=Dm();if(!ca.D(t))throw new B(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Em(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ca(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class vs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Lh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xw.bind(null,this.syncEngine),await Qa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ow}()}createDatastore(e){const t=vo(e.databaseInfo.databaseId),n=function(i){return new vw(i)}(e.databaseInfo);return function(i,o,l,c){return new ww(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,l){return new Ew(n,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Lh(this.syncEngine,t,0),function(){return Dh.D()?new Dh:new gw}())}createSyncEngine(e,t){return function(s,i,o,l,c,d,m){const p=new qw(s,i,o,l,c,d);return m&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);j("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ds(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vs.provider={build:()=>new vs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ve("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ve.UNAUTHENTICATED,this.clientId=hf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{j("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(j("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ll(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ha(r,e){r.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Sm(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Uh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await c0(r);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Vh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Vh(e.remoteStore,s)),r._onlineComponents=e}async function c0(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await ha(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;cs("Error using user provided cache. Falling back to memory cache: "+t),await ha(r,new ys)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await ha(r,new ys);return r._offlineComponents}async function Hm(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Uh(r,r._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Uh(r,new vs))),r._onlineComponents}function u0(r){return Hm(r).then(e=>e.syncEngine)}async function Ji(r){const e=await Hm(r),t=e.eventManager;return t.onListen=$w.bind(null,e.syncEngine),t.onUnlisten=Kw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Gw.bind(null,e.syncEngine),t}function h0(r,e,t={}){const n=new ht;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,d){const m=new Hl({next:v=>{m.Za(),o.enqueueAndForget(()=>Ul(i,p));const E=v.docs.has(l);!E&&v.fromCache?d.reject(new B(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&v.fromCache&&c&&c.source==="server"?d.reject(new B(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),p=new ql(Ns(l.path),m,{includeMetadataChanges:!0,_a:!0});return Fl(i,p)}(await Ji(r),r.asyncQueue,e,t,n)),n.promise}function d0(r,e,t={}){const n=new ht;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,d){const m=new Hl({next:v=>{m.Za(),o.enqueueAndForget(()=>Ul(i,p)),v.fromCache&&c.source==="server"?d.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),p=new ql(l,m,{includeMetadataChanges:!0,_a:!0});return Fl(i,p)}(await Ji(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(r,e,t){if(!t)throw new B(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function f0(r,e,t,n){if(e===!0&&n===!0)throw new B(V.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function qh(r){if(!q.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function $h(r){if(q.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Io(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":K()}function He(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Io(r);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}f0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ql{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gb;switch(n.type){case"firstParty":return new vb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Bh.get(t);n&&(j("ComponentProvider","Removing Datastore"),Bh.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Vn(this.firestore,e,this._query)}}class Me{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class Gt extends Vn{constructor(e,t,n){super(e,t,Ns(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new q(e))}withConverter(e){return new Gt(this.firestore,e,this._path)}}function Ze(r,e,...t){if(r=Ie(r),Jm("collection","path",e),r instanceof Ql){const n=ae.fromString(e,...t);return $h(n),new Gt(r,null,n)}{if(!(r instanceof Me||r instanceof Gt))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ae.fromString(e,...t));return $h(n),new Gt(r.firestore,null,n)}}function ot(r,e,...t){if(r=Ie(r),arguments.length===1&&(e=hf.newId()),Jm("doc","path",e),r instanceof Ql){const n=ae.fromString(e,...t);return qh(n),new Me(r,null,new q(n))}{if(!(r instanceof Me||r instanceof Gt))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ae.fromString(e,...t));return qh(n),new Me(r.firestore,r instanceof Gt?r.converter:null,new q(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Vm(this,"async_queue_retry"),this.Vu=()=>{const n=Ti();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=Ti();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ti();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ht;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Zt(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(n);throw ve("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Ml.createAndSchedule(this,e,t,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Gh(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class St extends Ql{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Kh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kh(e),this._firestoreClient=void 0,await e}}}function m0(r,e,t){t||(t="(default)");const n=ro(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(is(i,e))return s;throw new B(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new B(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function Eo(r){if(r._terminated)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||p0(r),r._firestoreClient}function p0(r){var e,t,n;const s=r._freezeSettings(),i=function(l,c,d,m){return new Hb(l,c,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Qm(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new l0(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gr(xe.fromBase64String(e))}catch(t){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gr(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=/^__.*__$/;class _0{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Rt(e,this.data,this.fieldMask,t,this.fieldTransforms):new br(e,this.data,t,this.fieldTransforms)}}class Ym{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Rt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Xl{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Xl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.Ou(e),s}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Yi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Xm(this.Cu)&&g0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class y0{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||vo(e)}Qu(e,t,n,s=!1){return new Xl({Cu:e,methodName:t,qu:n,path:pe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function So(r){const e=r._freezeSettings(),t=vo(r._databaseId);return new y0(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Zm(r,e,t,n,s,i={}){const o=r.Qu(i.merge||i.mergeFields?2:0,e,t,s);ec("Data must be an object, but it was:",o,n);const l=ep(n,o);let c,d;if(i.merge)c=new ze(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const v=Xa(e,p,t);if(!o.contains(v))throw new B(V.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);np(m,v)||m.push(v)}c=new ze(m),d=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,d=o.fieldTransforms;return new _0(new je(l),c,d)}class Ro extends Ao{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ro}}class Zl extends Ao{_toFieldTransform(e){return new Hf(e.path,new lr)}isEqual(e){return e instanceof Zl}}function v0(r,e,t,n){const s=r.Qu(1,e,t);ec("Data must be an object, but it was:",s,n);const i=[],o=je.empty();kn(n,(c,d)=>{const m=tc(e,c,t);d=Ie(d);const p=s.Nu(m);if(d instanceof Ro)i.push(m);else{const v=Vs(d,p);v!=null&&(i.push(m),o.set(m,v))}});const l=new ze(i);return new Ym(o,l,s.fieldTransforms)}function b0(r,e,t,n,s,i){const o=r.Qu(1,e,t),l=[Xa(e,n,t)],c=[s];if(i.length%2!=0)throw new B(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(Xa(e,i[v])),c.push(i[v+1]);const d=[],m=je.empty();for(let v=l.length-1;v>=0;--v)if(!np(d,l[v])){const E=l[v];let A=c[v];A=Ie(A);const C=o.Nu(E);if(A instanceof Ro)d.push(E);else{const k=Vs(A,C);k!=null&&(d.push(E),m.set(E,k))}}const p=new ze(d);return new Ym(m,p,o.fieldTransforms)}function x0(r,e,t,n=!1){return Vs(t,r.Qu(n?4:3,e))}function Vs(r,e){if(tp(r=Ie(r)))return ec("Unsupported field value:",e,r),ep(r,e);if(r instanceof Ao)return function(n,s){if(!Xm(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const l of n){let c=Vs(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hx(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ge.fromDate(n);return{timestampValue:hr(s.serializer,i)}}if(n instanceof ge){const i=new ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:hr(s.serializer,i)}}if(n instanceof Jl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof gr)return{bytesValue:tm(s.serializer,n._byteString)};if(n instanceof Me){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sl(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Yl)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return wl(l.serializer,c)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${Io(n)}`)}(r,e)}function ep(r,e){const t={};return If(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kn(r,(n,s)=>{const i=Vs(s,e.Mu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function tp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ge||r instanceof Jl||r instanceof gr||r instanceof Me||r instanceof Ao||r instanceof Yl)}function ec(r,e,t){if(!tp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=Io(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Xa(r,e,t){if((e=Ie(e))instanceof To)return e._internalPath;if(typeof e=="string")return tc(r,e);throw Yi("Field path arguments must be of type string or ",r,!1,void 0,t)}const w0=new RegExp("[~\\*/\\[\\]]");function tc(r,e,t){if(e.search(w0)>=0)throw Yi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new To(...e.split("."))._internalPath}catch{throw Yi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Yi(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${s}`),c+=")"),new B(V.INVALID_ARGUMENT,l+r+c)}function np(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new I0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(nc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class I0 extends rp{data(){return super.data()}}function nc(r,e){return typeof e=="string"?tc(r,e):e instanceof To?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rc{}class E0 extends rc{}function T0(r,e,...t){let n=[];e instanceof rc&&n.push(e),n=n.concat(t),function(i){const o=i.filter(c=>c instanceof sc).length,l=i.filter(c=>c instanceof No).length;if(o>1||o>0&&l>0)throw new B(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class No extends E0{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new No(e,t,n)}_apply(e){const t=this._parse(e);return ip(e._query,t),new Vn(e.firestore,e.converter,La(e._query,t))}_parse(e){const t=So(e.firestore);return function(i,o,l,c,d,m,p){let v;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new B(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Qh(p,m);const E=[];for(const A of p)E.push(Hh(c,i,A));v={arrayValue:{values:E}}}else v=Hh(c,i,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Qh(p,m),v=x0(l,o,p,m==="in"||m==="not-in");return ne.create(d,m,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Wh(r,e,t){const n=e,s=nc("where",r);return No._create(s,n,t)}class sc extends rc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sc(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:le.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)ip(o,c),o=La(o,c)}(e._query,t),new Vn(e.firestore,e.converter,La(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Hh(r,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new B(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Of(e)&&t.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ae.fromString(t));if(!q.isDocumentKey(n))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ps(r,new q(n))}if(t instanceof Me)return ps(r,t._key);throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Io(t)}.`)}function Qh(r,e){if(!Array.isArray(r)||r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ip(r,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class A0{convertValue(e,t="none"){switch(Tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return kn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>me(o.doubleValue));return new Yl(i)}convertGeoPoint(e){return new Jl(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=vl(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const t=At(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ae.fromString(e);W(hm(n));const s=new En(n.get(1),n.get(3)),i=new q(n.popFirst(5));return s.isEqual(t)||ve(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ap extends rp{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(nc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ai extends ap{data(e={}){return super.data(e)}}class lp{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Qr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Ai(this._firestore,this._userDataWriter,n.key,n,new Qr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ai(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ai(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),m=o.indexOf(l.doc.key)),{type:S0(l.type),doc:c,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function S0(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(r){r=He(r,Me);const e=He(r.firestore,St);return h0(Eo(e),r._key).then(t=>up(e,r,t))}class ic extends A0{constructor(e){super(),this.firestore=e}convertBytes(e){return new gr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}function It(r){r=He(r,Vn);const e=He(r.firestore,St),t=Eo(e),n=new ic(e);return sp(r._query),d0(t,r._query).then(s=>new lp(e,n,r,s))}function R0(r,e,t){r=He(r,Me);const n=He(r.firestore,St),s=op(r.converter,e,t);return Po(n,[Zm(So(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Oe.none())])}function N0(r,e,t,...n){r=He(r,Me);const s=He(r.firestore,St),i=So(s);let o;return o=typeof(e=Ie(e))=="string"||e instanceof To?b0(i,"updateDoc",r._key,e,t,n):v0(i,"updateDoc",r._key,e),Po(s,[o.toMutation(r._key,Oe.exists(!0))])}function cp(r){return Po(He(r.firestore,St),[new po(r._key,Oe.none())])}function oc(r,e){const t=He(r.firestore,St),n=ot(r),s=op(r.converter,e);return Po(t,[Zm(So(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Oe.exists(!1))]).then(()=>n)}function P0(r,...e){var t,n,s;r=Ie(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Gh(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Gh(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,d,m;if(r instanceof Me)d=He(r.firestore,St),m=Ns(r._key.path),c={next:p=>{e[o]&&e[o](up(d,r,p))},error:e[o+1],complete:e[o+2]};else{const p=He(r,Vn);d=He(p.firestore,St),m=p._query;const v=new ic(d);c={next:E=>{e[o]&&e[o](new lp(d,v,p,E))},error:e[o+1],complete:e[o+2]},sp(r._query)}return function(v,E,A,C){const k=new Hl(C),F=new ql(E,k,A);return v.asyncQueue.enqueueAndForget(async()=>Fl(await Ji(v),F)),()=>{k.Za(),v.asyncQueue.enqueueAndForget(async()=>Ul(await Ji(v),F))}}(Eo(d),m,l,c)}function Po(r,e){return function(n,s){const i=new ht;return n.asyncQueue.enqueueAndForget(async()=>Ww(await u0(n),s,i)),i.promise}(Eo(r),e)}function up(r,e,t){const n=t.docs.get(e._key),s=new ic(r);return new ap(r,s,e._key,n,new Qr(t.hasPendingWrites,t.fromCache),e.converter)}class C0{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=j0(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function k0(r){return new C0(r)}class D0{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=vs.provider,this._offlineComponentProvider={build:t=>new Wm(t,e?.cacheSizeBytes,this.forceOwnership)}}}class V0{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=vs.provider,this._offlineComponentProvider={build:t=>new a0(t,e?.cacheSizeBytes)}}}function j0(r){return new D0(void 0)}function O0(){return new V0}function Xi(){return new Zl("serverTimestamp")}(function(e,t=!0){(function(s){vr=s})(Pn),xn(new Wt("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),l=new St(new _b(n.getProvider("auth-internal")),new xb(n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new En(d.options.projectId,m)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),lt(Uu,"4.7.3",e),lt(Uu,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="firebasestorage.googleapis.com",M0="storageBucket",L0=2*60*1e3,F0=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends mt{constructor(e,t,n=0){super(da(e),`Firebase Storage: ${t} (${da(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return da(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ft;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ft||(ft={}));function da(r){return"storage/"+r}function U0(){const r="An unknown error occurred, please check the error payload for server response.";return new pt(ft.UNKNOWN,r)}function B0(){return new pt(ft.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function q0(){return new pt(ft.CANCELED,"User canceled the upload/download.")}function $0(r){return new pt(ft.INVALID_URL,"Invalid URL '"+r+"'.")}function z0(r){return new pt(ft.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Jh(r){return new pt(ft.INVALID_ARGUMENT,r)}function dp(){return new pt(ft.APP_DELETED,"The Firebase app was deleted.")}function K0(r){return new pt(ft.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=nt.makeFromUrl(e,t)}catch{return new nt(e,"")}if(n.path==="")return n;throw z0(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function d($){$.path_=decodeURIComponent($.path)}const m="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${m}/b/${s}/o${v}`,"i"),A={bucket:1,path:3},C=t===hp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",F=new RegExp(`^https?://${C}/${s}/${k}`,"i"),L=[{regex:l,indices:c,postModify:i},{regex:E,indices:A,postModify:d},{regex:F,indices:{bucket:1,path:2},postModify:d}];for(let $=0;$<L.length;$++){const P=L[$],R=P.regex.exec(e);if(R){const x=R[P.indices.bucket];let _=R[P.indices.path];_||(_=""),n=new nt(x,_),P.postModify(n);break}}if(n==null)throw $0(e);return n}}class G0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(r,e,t){let n=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let d=!1;function m(...k){d||(d=!0,e.apply(null,k))}function p(k){s=setTimeout(()=>{s=null,r(E,c())},k)}function v(){i&&clearTimeout(i)}function E(k,...F){if(d){v();return}if(k){v(),m.call(null,k,...F);return}if(c()||o){v(),m.call(null,k,...F);return}n<64&&(n*=2);let L;l===1?(l=2,L=0):L=(n+Math.random())*1e3,p(L)}let A=!1;function C(k){A||(A=!0,v(),!d&&(s!==null?(k||(l=2),clearTimeout(s),p(0)):k||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,C(!0)},t),C}function H0(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(r){return r!==void 0}function Yh(r,e,t,n){if(n<e)throw Jh(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw Jh(`Invalid value for '${r}'. Expected ${t} or less.`)}function J0(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var Zi;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Zi||(Zi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t,n,s,i,o,l,c,d,m,p,v=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=p,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,A)=>{this.resolve_=E,this.reject_=A,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new ui(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Zi.NO_ERROR,c=i.getStatus();if(!l||Y0(c,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===Zi.ABORT;n(!1,new ui(!1,null,m));return}const d=this.successCodes_.indexOf(c)!==-1;n(!0,new ui(d,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Q0(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=U0();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?dp():q0();o(c)}else{const c=B0();o(c)}};this.canceled_?t(!1,new ui(!1,null,!0)):this.backoffId_=W0(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&H0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ui{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Z0(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function eI(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tI(r,e){e&&(r["X-Firebase-GMPID"]=e)}function nI(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function rI(r,e,t,n,s,i,o=!0){const l=J0(r.urlParams),c=r.url+l,d=Object.assign({},r.headers);return tI(d,e),Z0(d,t),eI(d,i),nI(d,n),new X0(c,r.method,d,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function iI(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this._service=e,t instanceof nt?this._location=t:this._location=nt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new eo(e,t)}get root(){const e=new nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iI(this._location.path)}get storage(){return this._service}get parent(){const e=sI(this._location.path);if(e===null)return null;const t=new nt(this._location.bucket,e);return new eo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw K0(e)}}function Xh(r,e){const t=e?.[M0];return t==null?null:nt.makeFromBucketSpec(t,r)}function oI(r,e,t,n={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:Dg(s,r.app.options.projectId))}class aI{constructor(e,t,n,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=hp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=L0,this._maxUploadRetryTime=F0,this._requests=new Set,s!=null?this._bucket=nt.makeFromBucketSpec(s,this._host):this._bucket=Xh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nt.makeFromBucketSpec(this._url,e):this._bucket=Xh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new eo(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new G0(dp());{const o=rI(e,this._appId,n,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const Zh="@firebase/storage",ed="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="storage";function lI(r=wd(),e){r=Ie(r);const n=ro(r,fp).getImmediate({identifier:e}),s=Cg("storage");return s&&cI(n,...s),n}function cI(r,e,t,n={}){oI(r,e,t,n)}function uI(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new aI(t,n,s,e,Pn)}function hI(){xn(new Wt(fp,uI,"PUBLIC").setMultipleInstances(!0)),lt(Zh,ed,""),lt(Zh,ed,"esm2017")}hI();const dI={apiKey:"AIzaSyDP3-oVC5Q9mTG4Lj0Y10TXMQmf4BKXB18",authDomain:"issham-acadmy.firebaseapp.com",projectId:"issham-acadmy",storageBucket:"issham-acadmy.firebasestorage.app",messagingSenderId:"3012980900",appId:"1:3012980900:web:95dd7347dade35626c3631",measurementId:"G-9CFVEYM41T"},ac=xd(dI),fa=fb(ac);lI(ac);const be=m0(ac,{localCache:k0({tabManager:O0()})}),mp=M.createContext(null),hn={ADMIN:"admin",TEACHER:"teacher",STUDENT:"student"},ss="admin@isshaam.com",dn={uid:"demo-admin",email:ss,displayName:"Demo Administrator",isDemo:!0},ma=()=>{if(typeof window>"u")return!1;if(window.localStorage.getItem("isshaam_demo_auth")==="true"||window.localStorage.getItem("issham_auth")==="true")return!0;try{return JSON.parse(window.localStorage.getItem("user")||"null")?.email?.trim().toLowerCase()===ss}catch{return!1}},fI=({children:r})=>{const e=ma(),[t,n]=M.useState(e?dn:null),[s,i]=M.useState(e?hn.ADMIN:null),[o,l]=M.useState(e?dn:null),[c,d]=M.useState(!e),[m,p]=M.useState(null);M.useEffect(()=>{let C=!0;const k=tv(fa,async F=>{if(C){if(p(null),!F||ma()){if(ma()){n(dn),i(hn.ADMIN),l(dn),d(!1);return}C&&(n(null),i(null),l(null),d(!1));return}C&&(n(F),d(!0));try{const O=F.email?.trim().toLowerCase();let L=null,$=null;if(O){const P=ot(be,"admins",O),R=await ci(P);R.exists()&&(L=hn.ADMIN,$=R.data())}if(!L){const P=ot(be,"admins",F.uid),R=await ci(P);R.exists()&&(L=hn.ADMIN,$=R.data())}if(!L){const P=ot(be,"teachers",F.uid),R=await ci(P);R.exists()&&(L=hn.TEACHER,$=R.data())}if(!L){const P=ot(be,"students",F.uid),R=await ci(P);R.exists()&&(L=hn.STUDENT,$=R.data())}if(!L){if(console.warn("Authenticated user has no assigned role:",F.uid),!C)return;i(null),l(null),p("هذا الحساب مسجل ولكن لا توجد له صلاحية في النظام.");return}if(!C)return;i(L),l({...$,uid:F.uid,email:F.email||""}),p(null)}catch(O){if(console.error("خطأ في التحقق من صلاحيات المستخدم:",O),!C)return;i(null),l(null),p("تعذر التحقق من صلاحيات الحساب. يرجى المحاولة مرة أخرى.")}finally{C&&d(!1)}}});return()=>{C=!1,k()}},[]);const A={currentUser:t,userRole:s,userData:o,loading:c,authError:m,login:async(C,k)=>{const F=C?.trim().toLowerCase();if(!F)throw new Error("المرجو إدخال البريد الإلكتروني.");if(F===ss)return window.localStorage.setItem("user",JSON.stringify({authenticated:!0,user:ss,email:ss})),window.localStorage.setItem("isshaam_demo_auth","true"),window.localStorage.setItem("issham_auth","true"),n(dn),i(hn.ADMIN),l(dn),p(null),d(!1),dn;if(!k)throw new Error("المرجو إدخال كلمة السر.");return Xy(fa,F,k)},logout:async()=>{try{await nv(fa)}catch(C){throw console.error("خطأ أثناء تسجيل الخروج:",C),C}finally{window.localStorage.removeItem("isshaam_demo_auth"),window.localStorage.removeItem("issham_auth"),window.localStorage.removeItem("user"),n(null),i(null),l(null),p(null)}}};return u.jsx(mp.Provider,{value:A,children:r})},js=()=>{const r=M.useContext(mp);if(!r)throw new Error("useAuth must be used inside AuthProvider");return r},pp=M.createContext(null),mI="./logo.jpeg",at={branding:{academyName:"ISSHAAM ACADEMY",logoUrl:mI,bgColor:"bg-slate-100",primaryColor:"#f59e0b",language:"ar"},general:{phone:"",address:"Moulay Rachid, Casablanca",academicYear:"2025/2026",teacherPercentage:50,notes:"شكراً لثقتكم بأكاديمية إسهام."},adminEmails:[]},Si="isshaam_settings",hi=()=>{try{return Jr(at,JSON.parse(window.localStorage.getItem(Si)||"{}"))}catch{return at}},Jr=(r={},e={})=>({...at,...r,...e,branding:{...at.branding,...r?.branding||{},...e?.branding||{}},general:{...at.general,...r?.general||{},...e?.general||{}},adminEmails:Array.isArray(e?.adminEmails)?e.adminEmails:Array.isArray(r?.adminEmails)?r.adminEmails:at.adminEmails});function pI({children:r}){const[e,t]=M.useState(hi),[n,s]=M.useState(!0),[i,o]=M.useState(null);M.useEffect(()=>{const m=ot(be,"settings","global"),p=P0(m,v=>{try{if(v.exists()){const E=v.data();t(Jr(at,E)),window.localStorage.setItem(Si,JSON.stringify(Jr(at,E)))}else t(hi());o(null),s(!1)}catch(E){console.error("خطأ أثناء معالجة إعدادات الأكاديمية:",E),t(hi()),o("تعذر معالجة إعدادات الأكاديمية."),s(!1)}},v=>{console.error("خطأ في جلب إعدادات الأكاديمية:",v),o("تعذر تحميل إعدادات الأكاديمية."),t(hi()),s(!1)});return()=>{p()}},[]);const d={settings:e,updateSettings:async(m={})=>{try{const p=Jr(e,m);t(p),window.localStorage.setItem(Si,JSON.stringify(p));const v=ot(be,"settings","global");return await R0(v,p,{merge:!0}),o(null),p}catch(p){return console.error("خطأ أثناء تحديث إعدادات الأكاديمية:",p),o("تعذر حفظ إعدادات الأكاديمية."),Jr(e,m)}},resetLocalSettings:()=>{t(at),window.localStorage.setItem(Si,JSON.stringify(at)),o(null)},loading:n,settingsError:i};return u.jsx(pp.Provider,{value:d,children:r})}function Os(){const r=M.useContext(pp);if(!r)throw new Error("useSettings must be used inside SettingsProvider");return r}const td="./logo.jpeg";function gI({mobileOpen:r,setMobileOpen:e}){const{settings:t}=Os(),n=t?.branding?.academyName||"ISSHAAM ACADEMY",s=t?.branding?.logoUrl||td,i=t?.branding?.primaryColor||"#f59e0b",l=(t?.branding?.language||"ar")==="fr",c=[{title:l?"Tableau de bord":"لوحة التحكم",path:"/dashboard",icon:"▦"},{title:l?"Gestion Élèves":"إدارة التلاميذ",path:"/students",icon:"♙"},{title:l?"Présence & Absence":"الحضور والغياب",path:"/attendance",icon:"✓"},{title:l?"Gestion Professeurs":"إدارة الأساتذة",path:"/teachers",icon:"♟"},{title:l?"Finances & Reçus":"المالية والأداءات",path:"/payments",icon:"◆"},{title:l?"Rapports Financiers":"التقارير المالية",path:"/financials",icon:"◫"},{title:l?"Paramètres Système":"إعدادات النظام",path:"/settings",icon:"⚙"},{title:l?"Archives & Historique":"الأرشيف والسجلات",path:"/archive",icon:"▤"}],d=()=>{e?.(!1)},m=p=>{p.currentTarget.dataset.fallback!=="true"&&(p.currentTarget.dataset.fallback="true",p.currentTarget.src=td)};return u.jsxs(u.Fragment,{children:[r&&u.jsx("button",{type:"button","aria-label":l?"Fermer le menu":"إغلاق القائمة",onClick:()=>e?.(!1),className:"fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden cursor-default"}),u.jsxs("aside",{dir:l?"ltr":"rtl",style:{backgroundColor:"#0B192C",color:"#ffffff"},className:`
          fixed md:static
          top-0 right-0
          z-50
          h-screen
          w-64
          p-4
          flex flex-col
          justify-between
          shadow-xl
          shrink-0
          transition-transform duration-300 ease-in-out
          ${r?"translate-x-0":"translate-x-full md:translate-x-0"}
        `,children:[u.jsxs("div",{className:"min-h-0 flex flex-col",children:[u.jsxs("div",{style:{borderColor:"#1E3E62"},className:"relative flex items-center gap-3 p-3 border-b mb-5",children:[u.jsx("img",{src:s,onError:m,alt:n,className:"w-12 h-12 object-contain rounded-full bg-white p-1 shadow-md border-2 shrink-0",style:{borderColor:i}}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("h1",{className:"font-bold text-sm leading-tight text-white truncate",children:n}),u.jsx("span",{className:"block text-xs text-amber-300 mt-1",children:l?"Système de Gestion":"نظام إدارة الأكاديمية"})]}),u.jsx("button",{type:"button",onClick:()=>e?.(!1),"aria-label":l?"Fermer":"إغلاق",className:"md:hidden absolute top-2 left-2 w-8 h-8 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition",children:"×"})]}),u.jsx("nav",{"aria-label":l?"Navigation principale":"القائمة الرئيسية",className:"space-y-1.5 overflow-y-auto pr-1",children:c.map(p=>u.jsxs(ng,{to:p.path,onClick:d,className:"group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-bold",style:({isActive:v})=>({backgroundColor:v?i:"transparent",color:v?"#0f172a":"#e2e8f0",boxShadow:v?"0 4px 12px rgba(0,0,0,0.15)":"none"}),children:[u.jsx("span",{className:"w-7 h-7 flex items-center justify-center rounded-lg text-base shrink-0 transition-transform group-hover:scale-110",children:p.icon}),u.jsx("span",{className:"truncate",children:p.title})]},p.path))})]}),u.jsxs("div",{style:{backgroundColor:"#081426",borderColor:"#1E3E62"},className:"mt-4 p-3 rounded-xl border text-xs text-center space-y-1 shrink-0",children:[u.jsx("p",{className:"text-slate-200 font-medium truncate",children:n}),u.jsx("p",{className:"text-slate-500",children:l?"Version 1.0.0":"الإصدار 1.0.0"})]})]})]})}function _I({setMobileOpen:r}){const e=od(),{currentUser:t,userData:n,logout:s}=js(),{settings:i}=Os(),o=i?.branding?.language==="fr",l=async()=>{await s(),e("/login",{replace:!0})};return u.jsx("header",{dir:o?"ltr":"rtl",className:"sticky top-0 z-30 bg-white text-[#0B192C] border-b border-slate-200 px-4 sm:px-6 py-3 shadow-sm",children:u.jsxs("div",{className:"flex items-center justify-between gap-4",children:[u.jsx("button",{type:"button",onClick:()=>r(!0),"aria-label":o?"Ouvrir le menu":"فتح القائمة",className:"md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[#0B192C] hover:bg-slate-100 active:bg-slate-200 transition",children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})}),u.jsx("div",{className:"flex items-center gap-3 mr-auto",children:u.jsxs("div",{className:`hidden sm:block ${o?"text-left":"text-right"}`,children:[u.jsx("h1",{className:"text-lg font-bold text-[#0B192C] leading-tight",children:"ISSHAAM ACADEMY"}),u.jsx("p",{className:"text-xs text-slate-600 mt-0.5",children:o?"Système de gestion de l’académie":"نظام إدارة الأكاديمية"})]})}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("button",{type:"button","aria-label":o?"Notifications":"الإشعارات",className:"relative flex items-center justify-center w-10 h-10 rounded-xl text-[#0B192C] hover:bg-slate-100 transition",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 17h5l-1.5-1.5V11a6.5 6.5 0 10-13 0v4.5L4 17h5m6 0a3 3 0 01-6 0"})}),u.jsx("span",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"})]}),u.jsxs("div",{className:"hidden sm:flex items-center gap-3 pr-2",children:[u.jsxs("div",{className:"text-right",children:[u.jsx("p",{className:"text-sm font-semibold text-[#0B192C]",children:n?.name||n?.fullName||t?.email||(o?"Utilisateur":"المستخدم")}),u.jsx("p",{className:"text-xs text-slate-500",children:n?.email||t?.email||""})]}),u.jsx("button",{type:"button",onClick:l,title:o?"Se déconnecter":"تسجيل الخروج",className:"w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0B192C] font-bold hover:bg-amber-300 transition",children:(n?.name||t?.email||"U").charAt(0).toUpperCase()})]})]})]})})}const yI="./logo.jpeg",pa="admin@isshaam.com";function vI(){const[r,e]=M.useState(""),[t,n]=M.useState(""),[s,i]=M.useState(""),[o,l]=M.useState(!1),c=od(),{login:d}=js(),m=async p=>{p.preventDefault(),i(""),l(!0);const v=r.trim().toLowerCase();if(v===pa){window.localStorage.setItem("user",JSON.stringify({authenticated:!0,user:pa,email:pa})),window.localStorage.setItem("issham_auth","true"),window.localStorage.setItem("isshaam_demo_auth","true"),l(!1),c("/dashboard",{replace:!0});return}try{await d(v,t),c("/",{replace:!0})}catch(E){i(E?.code==="auth/invalid-credential"?"البريد الإلكتروني أو كلمة السر غير صحيحة.":"تعذر تسجيل الدخول. يرجى المحاولة مرة أخرى.")}finally{l(!1)}};return u.jsxs("main",{className:"relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0B192C] via-[#122d4b] to-[#1E3E62] px-4 py-8 text-right",dir:"rtl",children:[u.jsx("div",{className:"pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl"}),u.jsx("div",{className:"pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"}),u.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px]"}),u.jsx("div",{className:"relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-lg items-center justify-center",children:u.jsxs("section",{className:"w-full animate-[fade-in-up_0.6s_ease-out] rounded-[2rem] border-t-4 border-amber-500 bg-white/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10",children:[u.jsxs("div",{className:"mb-8 text-center",children:[u.jsxs("div",{className:"relative mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-3xl border border-amber-200 bg-gradient-to-br from-white to-amber-50 p-3 shadow-lg",children:[u.jsx("img",{src:yI,alt:"ISSHAM ACADEMY Logo",className:"h-full w-full rounded-2xl object-contain"}),u.jsx("span",{className:"absolute -bottom-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0B192C] text-amber-300 shadow-md",children:u.jsx(lg,{size:15})})]}),u.jsx("p",{className:"mb-2 text-xs font-black tracking-[0.3em] text-amber-600",children:"ISSHAM ACADEMY"}),u.jsx("h1",{className:"text-2xl font-black text-[#0B192C] sm:text-3xl",children:"أكاديمية إسهام التعليمية"}),u.jsx("p",{className:"mt-2 text-sm font-medium text-slate-600",children:"منصة المواكبة وإدارة الأكاديمية"})]}),s&&u.jsxs("div",{className:"mb-5 rounded-xl border border-rose-200 bg-rose-50 p-3 text-center text-sm font-bold text-rose-700",children:["⚠️ ",s]}),u.jsxs("form",{onSubmit:m,className:"space-y-5",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email",className:"mb-2 block text-sm font-black text-[#0B192C]",children:"البريد الإلكتروني"}),u.jsxs("div",{className:"relative",children:[u.jsx(cg,{className:"pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1E3E62]",size:19}),u.jsx("input",{id:"email",type:"email",value:r,onChange:p=>e(p.target.value),placeholder:"admin@isshaam.com",className:"w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 pl-11 text-left text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/15",dir:"ltr",required:!0})]})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"mb-2 block text-sm font-black text-[#0B192C]",children:"كلمة السر"}),u.jsxs("div",{className:"relative",children:[u.jsx(ug,{className:"pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1E3E62]",size:19}),u.jsx("input",{id:"password",type:"password",value:t,onChange:p=>n(p.target.value),placeholder:"••••••••",className:"w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 pl-11 text-left text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/15",dir:"ltr",required:!0})]})]}),u.jsx("button",{type:"submit",disabled:o,className:"flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-950 via-[#1E3E62] to-amber-600 py-3.5 font-black text-white shadow-lg shadow-blue-950/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-600/25 disabled:cursor-not-allowed disabled:opacity-70",children:o?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"})," جاري تسجيل الدخول..."]}):u.jsxs(u.Fragment,{children:[u.jsx(hg,{size:19})," تسجيل الدخول"]})})]}),u.jsx("p",{className:"mt-7 text-center text-xs font-medium text-slate-500",children:"دخول تجريبي: admin@isshaam.com"})]})})]})}function bI(){const[r,e]=M.useState({totalStudents:0,totalTeachers:0,todayAttendance:0,monthlyRevenue:0}),[t,n]=M.useState(!0);return M.useEffect(()=>{(async()=>{try{const i=new Date().toISOString().split("T")[0],[o,l,c,d]=await Promise.all([It(Ze(be,"students")),It(Ze(be,"teachers")),It(T0(Ze(be,"attendance"),Wh("date","==",i),Wh("status","in",["حاضر","present"]))),It(Ze(be,"payments"))]),m=o.docs.filter(A=>!A.data().archived),p=new Date().getMonth(),v=new Date().getFullYear();let E=0;d.forEach(A=>{const C=A.data();if(C.date){const k=C.date?.toDate?C.date.toDate():new Date(C.date);k.getMonth()===p&&k.getFullYear()===v&&(E+=Number(C.amount||0))}}),e({totalStudents:m.length,totalTeachers:l.size,todayAttendance:c.size,monthlyRevenue:E})}catch(i){console.error("خطأ في جلب إحصائيات لوحة التحكم:",i);const o=JSON.parse(window.localStorage.getItem("isshaam_students")||"[]"),l=JSON.parse(window.localStorage.getItem("isshaam_payments")||"[]"),c=JSON.parse(window.localStorage.getItem("isshaam_attendance_history")||"[]"),d=o.filter(E=>!E.archived),m=c.filter(E=>E.date===new Date().toISOString().split("T")[0]),p=new Date().toISOString().slice(0,7),v=l.filter(E=>String(E.createdAt||"").startsWith(p)).reduce((E,A)=>E+Number(A.amount||0),0);e({totalStudents:d.length,totalTeachers:0,todayAttendance:m.filter(E=>["present","حاضر"].includes(E.status)).length,monthlyRevenue:v})}finally{n(!1)}})()},[]),u.jsxs("div",{className:"space-y-6 dir-rtl text-right pb-10",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-xl shadow-md border border-slate-300 gap-4",children:[u.jsxs("div",{children:[u.jsxs("h1",{className:"text-2xl font-black text-slate-900 flex items-center gap-2",children:["مرحباً بك 👋 ",u.jsx("span",{className:"text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-300 font-bold",children:"أونلاين"})]}),u.jsx("p",{className:"text-sm font-bold text-slate-600 mt-1",children:"نظرة عامة على أداء ومداخيل المركز هذا الشهر"})]}),u.jsxs("div",{className:"flex flex-wrap items-center gap-3 w-full md:w-auto",children:[u.jsx(Xo,{to:"/students",className:"flex-1 md:flex-none px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-extrabold text-sm shadow-md transition text-center",children:"إضافة / إدارة التلاميذ 👥"}),u.jsx(Xo,{to:"/attendance",className:"flex-1 md:flex-none px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-extrabold text-sm shadow-md transition text-center",children:"تسجيل الحضور اليومي ✅"}),u.jsx(Xo,{to:"/financials",className:"flex-1 md:flex-none px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-extrabold text-sm shadow-md transition text-center",children:"تسجيل الأداءات المالية 💰"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[u.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-extrabold text-slate-600",children:"إجمالي التلاميذ"}),u.jsx("h3",{className:"text-3xl font-black text-slate-900 mt-2",children:t?"...":r.totalStudents})]}),u.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 text-2xl font-black",children:"👨‍🎓"})]}),u.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-extrabold text-slate-600",children:"عدد الأساتذة"}),u.jsx("h3",{className:"text-3xl font-black text-slate-900 mt-2",children:t?"...":r.totalTeachers})]}),u.jsx("div",{className:"w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 text-2xl font-black",children:"👨‍🏫"})]}),u.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-extrabold text-slate-600",children:"الحضور اليوم"}),u.jsx("h3",{className:"text-3xl font-black text-slate-900 mt-2",children:t?"...":r.todayAttendance})]}),u.jsx("div",{className:"w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 text-2xl font-black",children:"✅"})]}),u.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-extrabold text-slate-600",children:"مداخيل الشهر"}),u.jsx("h3",{className:"text-3xl font-black text-emerald-700 mt-2",children:t?"...":`${r.monthlyRevenue} DH`})]}),u.jsx("div",{className:"w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 text-2xl font-black",children:"💵"})]})]}),u.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md border border-slate-300",children:[u.jsx("h3",{className:"text-lg font-black text-slate-900 mb-4 flex items-center gap-2",children:"مؤشرات الأداء السريعة 📊"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"p-4 bg-slate-50 rounded-lg border border-slate-200",children:[u.jsx("span",{className:"text-sm font-bold text-slate-700",children:"نسبة الحضور المسجلة اليوم"}),u.jsx("div",{className:"w-full bg-slate-200 rounded-full h-4 mt-2 overflow-hidden",children:u.jsx("div",{className:"bg-emerald-600 h-4 rounded-full transition-all duration-500",style:{width:`${r.totalStudents>0?r.todayAttendance/r.totalStudents*100:0}%`}})}),u.jsxs("p",{className:"text-xs font-black text-slate-600 mt-1 text-left",children:[r.totalStudents>0?Math.round(r.todayAttendance/r.totalStudents*100):0,"%"]})]}),u.jsxs("div",{className:"p-4 bg-slate-50 rounded-lg border border-slate-200",children:[u.jsx("span",{className:"text-sm font-bold text-slate-700",children:"حالة المداخيل المستحقة"}),u.jsx("p",{className:"text-xs font-extrabold text-slate-600 mt-1",children:"تأكد من متابعة أداءات التلاميذ المتبقية عبر صفحة الأداءات المالية."})]})]})]})]})}const gp="https://xxxxxxxx.supabase.co",Za="xxxxxxxxxxxxxxxx",el=/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(gp)&&Za.length>20&&!Za.includes("xxxx");el||console.warn("Supabase is not configured. Add valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY values to enable Supabase-backed pages.");const Xe=ag(el?gp:"https://placeholder.supabase.co",el?Za:"placeholder-anon-key"),tl="isshaam_activity_log",nl="isshaam_attendance_history",bs="isshaam_archived_students",jn=r=>{try{const e=JSON.parse(window.localStorage.getItem(r)||"[]");return Array.isArray(e)?e:[]}catch{return[]}},xs=(r,e)=>{const t=[{id:`activity-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,type:r,details:e,timestamp:new Date().toISOString()},...jn(tl)].slice(0,500);window.localStorage.setItem(tl,JSON.stringify(t))},xI=()=>jn(tl),wI=r=>{const t=jn(nl).filter(n=>n.date!==r[0]?.date);window.localStorage.setItem(nl,JSON.stringify([...r,...t].slice(0,2e3)))},_p=()=>jn(nl),II=r=>{const e=[{...r,archived:!0,archivedAt:new Date().toISOString()},...jn(bs).filter(t=>t.id!==r.id)];window.localStorage.setItem(bs,JSON.stringify(e))},nd=()=>jn(bs),EI=r=>{const e=jn(bs),t=e.find(n=>n.id===r);return window.localStorage.setItem(bs,JSON.stringify(e.filter(n=>n.id!==r))),t?{...t,archived:!1}:null},yp="isshaam_students",ga="isshaam:students-updated",_a=()=>{try{const r=JSON.parse(window.localStorage.getItem(yp)||"[]");return Array.isArray(r)?r:[]}catch{return[]}},di=r=>({...r,full_name:r.full_name||r.fullName||"",fullName:r.fullName||r.full_name||"",parent_phone:r.parent_phone||r.parentPhone||"",parentPhone:r.parentPhone||r.parent_phone||"",monthly_fee:r.monthly_fee??r.monthlyFee??0,monthlyFee:r.monthlyFee??r.monthly_fee??0,academic_level:r.academic_level||r.level||"",level:r.level||r.academic_level||""}),vp=M.createContext(null);function TI({children:r}){const[e,t]=M.useState(()=>_a().map(di)),n=M.useCallback(i=>{t(o=>{const c=(typeof i=="function"?i(o):i).map(di);return window.localStorage.setItem(yp,JSON.stringify(c)),window.dispatchEvent(new Event(ga)),c})},[]);M.useEffect(()=>{const i=()=>t(_a().map(di));return window.addEventListener(ga,i),window.addEventListener("storage",i),()=>{window.removeEventListener(ga,i),window.removeEventListener("storage",i)}},[]);const s=M.useMemo(()=>({students:e,setStudents:n,refreshStudents:()=>t(_a().map(di))}),[e,n]);return u.jsx(vp.Provider,{value:s,children:r})}function Co(){const r=M.useContext(vp);if(!r)throw new Error("useStudents must be used inside StudentsProvider");return r}const bp=["الأول ابتدائي","الثاني ابتدائي","الثالث ابتدائي","الرابع ابتدائي","الخامس ابتدائي","السادس ابتدائي","الأولى إعدادي","الثانية إعدادي","الثالثة إعدادي","الجذع المشترك","الأولى باكالوريا","الثانية باكالوريا"],xp="isshaam_students",ya=bp.map(r=>({id:r,name_ar:r})),rd=()=>{try{const r=JSON.parse(window.localStorage.getItem(xp)||"[]");return Array.isArray(r)?r:[]}catch{return[]}},sd=r=>{window.localStorage.setItem(xp,JSON.stringify(r))};function AI(){const{students:r,setStudents:e}=Co(),[t,n]=M.useState([]),[s,i]=M.useState([]),[o,l]=M.useState(!0),[c,d]=M.useState(!1),[m,p]=M.useState(""),[v,E]=M.useState(!1),[A,C]=M.useState(null),[k,F]=M.useState(""),[O,L]=M.useState({full_name:"",level_id:"",teacher_id:"",parent_phone:"",parent_whatsapp:"",monthly_fee:"",status:"active",archived:!1}),$=M.useCallback(async()=>{const y=rd();e(y),i(ya),l(!1),p("");try{const[ee,se,z]=await Promise.all([Xe.from("students").select("*").eq("archived",!1).order("full_name",{ascending:!0}),Xe.from("teachers").select("*").eq("status","active").order("full_name",{ascending:!0}),Xe.from("levels").select("*").eq("is_active",!0).order("name_ar",{ascending:!0})]);if(ee.error)throw ee.error;se.error&&se.error.code!=="PGRST116"&&console.warn("Teachers notice:",se.error),z.error&&z.error.code!=="PGRST116"&&console.warn("Levels notice:",z.error);const H=ee.data||[],X=new Set(y.map(oe=>oe.id));e([...y,...H.filter(oe=>!X.has(oe.id))]),n(se.data||[]),i(z.data?.length?z.data:ya)}catch(ee){console.error("Students loading error:",ee),e(rd()),i(ya),p("")}finally{l(!1)}},[e]);M.useEffect(()=>{$()},[$]);const P=y=>{if(y.levels?.name_ar)return y.levels.name_ar;if(y.level_id&&s.length>0){const ee=s.find(se=>String(se.id)===String(y.level_id));if(ee)return ee.name_ar}return y.academic_level||"المستوى غير محدد"},R=y=>{if(y.teachers?.full_name)return y.teachers.full_name;if(y.teacher_id&&t.length>0){const ee=t.find(se=>String(se.id)===String(y.teacher_id));if(ee)return ee.full_name}return"غير محدد"},x=y=>{const{name:ee,value:se}=y.target;L(z=>({...z,[ee]:se}))},_=()=>{L({full_name:"",level_id:"",teacher_id:"",parent_phone:"",parent_whatsapp:"",monthly_fee:"",status:"active",archived:!1})},w=y=>{if(y.preventDefault(),!O.full_name.trim()){alert("المرجو إدخال اسم التلميذ.");return}if(!O.parent_phone.trim()){alert("المرجو إدخال رقم هاتف الولي.");return}d(!0),p("");const ee={id:`local-${Date.now()}`,full_name:O.full_name.trim(),level_id:s.some(z=>String(z.id)===String(O.level_id))?O.level_id:null,academic_level:s.some(z=>String(z.id)===String(O.level_id))?null:O.level_id||null,teacher_id:O.teacher_id||null,parent_phone:O.parent_phone.trim(),parent_whatsapp:O.parent_whatsapp.trim()||O.parent_phone.trim(),monthly_fee:O.monthly_fee===""?0:Number(O.monthly_fee),status:"active",archived:!1,localOnly:!0},se=[ee,...r];e(se),sd(se),xs("إضافة طالب",`تمت إضافة الطالب ${ee.full_name}.`),E(!1),_(),d(!1)},I=async(y,ee)=>{if(!window.confirm(`هل أنت متأكد من حذف/أرشفة التلميذ "${ee}"؟`))return;const z=r.filter(H=>H.id!==y);e(z),sd(z),II(r.find(H=>H.id===y)||{id:y,full_name:ee}),xs("أرشفة طالب",`تمت أرشفة ملف ${ee}.`),A&&A.id===y&&C(null)},b=async y=>{if(y.preventDefault(),!k.trim()||!A)return;const ee=A.notes||"",se=new Date().toLocaleString("ar-MA"),z=ee.trim()?`${ee}

[${se}] ${k.trim()}`:`[${se}] ${k.trim()}`;try{const{data:H,error:X}=await Xe.from("students").update({notes:z,updated_at:new Date().toISOString()}).eq("id",A.id).select("*").single();if(X)throw X;C({...A,...H}),F(""),await $()}catch(H){console.error("Comment save error:",H),p("")}},T=y=>{const ee=y.parent_whatsapp||y.parent_phone;if(!ee){alert("رقم واتساب الولي غير موجود.");return}let se=ee.trim().replace(/\s+/g,"").replace(/-/g,"");se.startsWith("+")&&(se=se.substring(1)),se.startsWith("0")&&(se=`212${se.substring(1)}`);const z=`السلام عليكم ورحمة الله وبركاته،

تواصل معكم إدارة *أكاديمية إسهام* 🏫 بخصوص التلميذ(ة) *${y.full_name}*.

شكراً لتعاونكم. 🌹`;window.open(`https://wa.me/${se}?text=${encodeURIComponent(z)}`,"_blank")};return o?u.jsx("div",{className:"p-8 text-center text-slate-700 font-bold dir-rtl",children:"جاري تحميل ملفات التلاميذ..."}):u.jsxs("div",{className:"mx-auto w-full max-w-7xl space-y-6 dir-rtl text-right pb-10",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-2xl font-black text-slate-900",children:"إدارة ملفات التلاميذ 👥"}),u.jsx("p",{className:"text-sm font-bold text-slate-600",children:"إدارة معلومات التلاميذ والملفات الدراسية"})]}),u.jsx("button",{onClick:()=>E(!0),className:"w-full md:w-auto px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black shadow-lg shadow-indigo-600/20 transition",children:"➕ إضافة تلميذ جديد"})]}),m&&u.jsxs("div",{className:"p-4 bg-red-100 border-2 border-red-400 text-red-900 rounded-xl font-bold",children:["❌ ",m]}),r.length===0?u.jsx("div",{className:"bg-white rounded-xl border p-8 text-center font-bold text-slate-600",children:"لا يوجد تلاميذ حالياً."}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:r.map(y=>u.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-200 p-5 border-t-4 border-t-indigo-500 hover:-translate-y-0.5 hover:shadow-lg transition",children:[u.jsxs("div",{className:"border-b pb-3",children:[u.jsx("h3",{className:"text-xl font-black text-slate-900",children:y.full_name}),u.jsx("span",{className:"inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-900 rounded-md text-xs font-black",children:P(y)})]}),u.jsxs("div",{className:"mt-4 space-y-2 text-sm font-bold text-slate-800",children:[u.jsxs("p",{children:["📞 هاتف الولي:",u.jsxs("span",{className:"text-blue-700",children:[" ",y.parent_phone||"—"]})]}),u.jsxs("p",{children:["🏫 المدرسة: ",y.original_school||"—"]}),u.jsxs("p",{children:["💰 الواجب الشهري: ",y.monthly_fee||0," درهم"]}),u.jsxs("p",{children:["👨‍🏫 الأستاذ: ",R(y)]})]}),u.jsxs("div",{className:"mt-5 flex gap-2",children:[u.jsx("button",{onClick:()=>C(y),className:"flex-1 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-black text-xs",children:"📂 فتح الملف"}),u.jsx("button",{onClick:()=>T(y),className:"px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black text-xs",children:"📲"}),u.jsx("button",{onClick:()=>I(y.id,y.full_name),className:"px-3 py-2.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-black text-xs",children:"🗑️"})]})]},y.id))}),A&&u.jsx("div",{className:"fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center p-4 overflow-y-auto",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-3xl text-slate-900 max-h-[90vh] flex flex-col",children:[u.jsxs("div",{className:"flex justify-between items-center p-5 border-b bg-white rounded-t-xl shrink-0",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-black text-slate-900",children:"ملف التلميذ"}),u.jsx("p",{className:"text-lg font-bold text-blue-700",children:A.full_name})]}),u.jsx("button",{onClick:()=>C(null),className:"px-3 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-700",children:"✖"})]}),u.jsxs("div",{className:"p-6 overflow-y-auto space-y-4 flex-1",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[u.jsx("strong",{className:"text-slate-900 block mb-1",children:"المستوى:"}),u.jsx("p",{className:"text-slate-800",children:P(A)})]}),u.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[u.jsx("strong",{className:"text-slate-900 block mb-1",children:"الأستاذ المسؤول:"}),u.jsx("p",{className:"text-slate-800",children:R(A)})]}),u.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[u.jsx("strong",{className:"text-slate-900 block mb-1",children:"هاتف الولي:"}),u.jsx("p",{className:"text-slate-800",children:A.parent_phone||"غير موجود"})]}),u.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[u.jsx("strong",{className:"text-slate-900 block mb-1",children:"الواجب الشهري:"}),u.jsxs("p",{className:"text-slate-800",children:[A.monthly_fee||0," درهم"]})]})]}),u.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-xl p-4",children:[u.jsx("h4",{className:"font-black text-amber-900 mb-2",children:"📝 ملاحظات التلميذ"}),u.jsx("p",{className:"whitespace-pre-line text-slate-800",children:A.notes||"لا توجد ملاحظات."})]}),u.jsxs("div",{className:"bg-slate-100 p-4 rounded-xl border border-slate-200",children:[u.jsx("h4",{className:"font-black text-slate-900 mb-3",children:"✍️ إضافة ملاحظة بعد الحصة"}),u.jsxs("form",{onSubmit:b,className:"flex flex-col md:flex-row gap-2",children:[u.jsx("input",{type:"text",value:k,onChange:y=>F(y.target.value),placeholder:"اكتب الملاحظة...",className:"flex-1 p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"}),u.jsx("button",{type:"submit",className:"px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-black shrink-0",children:"إضافة ➕"})]})]})]}),u.jsxs("div",{className:"p-4 border-t bg-slate-50 rounded-b-xl flex gap-2 shrink-0",children:[u.jsx("button",{onClick:()=>T(A),className:"flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black",children:"📲 تواصل مع الولي"}),u.jsx("button",{onClick:()=>I(A.id,A.full_name),className:"px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-black",children:"🗑️ أرشفة"})]})]})}),v&&u.jsx("div",{className:"fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center p-4 overflow-y-auto",children:u.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl text-slate-900 max-h-[85vh] overflow-y-auto flex flex-col my-auto",children:[u.jsxs("div",{className:"flex justify-between items-center p-5 border-b bg-white rounded-t-xl shrink-0",children:[u.jsx("h3",{className:"text-xl font-black text-slate-900",children:"إضافة تلميذ جديد 👨‍🎓"}),u.jsx("button",{type:"button",onClick:()=>{E(!1),_()},className:"px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-700",children:"✖"})]}),u.jsxs("form",{onSubmit:w,className:"flex flex-col flex-1 overflow-hidden",children:[u.jsxs("div",{className:"p-6 overflow-y-auto space-y-4 flex-1",children:[u.jsxs("div",{children:[u.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"الاسم الكامل *"}),u.jsx("input",{name:"full_name",required:!0,value:O.full_name,onChange:x,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900",placeholder:"مثال: محمد العلمي"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"المستوى الدراسي"}),u.jsxs("select",{name:"level_id",value:O.level_id,onChange:x,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900",children:[u.jsx("option",{value:"",children:"اختيار المستوى"}),(s.length?s:bp.map(y=>({id:y,name_ar:y}))).map(y=>u.jsx("option",{value:y.id,children:y.name_ar},y.id))]})]}),u.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:u.jsxs("div",{children:[u.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"هاتف الولي (WhatsApp) *"}),u.jsx("input",{name:"parent_phone",required:!0,value:O.parent_phone,onChange:x,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900",placeholder:"0612345678"})]})}),u.jsxs("div",{children:[u.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"الواجب الشهري (درهم)"}),u.jsx("input",{type:"number",min:"0",name:"monthly_fee",value:O.monthly_fee,onChange:x,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"})]})]}),u.jsxs("div",{className:"p-4 border-t bg-slate-50 rounded-b-xl flex gap-2 shrink-0",children:[u.jsx("button",{type:"submit",disabled:c,className:"flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-black disabled:opacity-50",children:c?"جاري الحفظ...":"حفظ التلميذ ✅"}),u.jsx("button",{type:"button",onClick:()=>{E(!1),_()},className:"px-5 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-800",children:"إلغاء"})]})]})]})})]})}function SI(){const{userRole:r="admin",currentUser:e=null}=js(),{students:t,setStudents:n}=Co(),[s,i]=M.useState([]),[o,l]=M.useState({}),[c,d]=M.useState(new Date().toISOString().split("T")[0]),[m,p]=M.useState(""),[v,E]=M.useState(""),[A,C]=M.useState(!0),[k,F]=M.useState(!1),[O,L]=M.useState(!1),[$,P]=M.useState(""),R=M.useCallback(async()=>{C(!0),P("");try{const{data:z,error:H}=await Xe.from("students").select(`
            id,
            full_name,
            parent_name,
            parent_phone,
            parent_whatsapp,
            level_id,
            class_id,
            status,
            archived
          `).eq("status","active").or("archived.is.null,archived.eq.false").order("full_name",{ascending:!0});if(H)throw H;const{data:X,error:oe}=await Xe.from("levels").select(`
            id,
            name_ar,
            name_fr
          `).eq("is_active",!0).order("name_ar");if(oe)throw oe;const{data:Je,error:On}=await Xe.from("classes").select(`
            id,
            name,
            level,
            capacity,
            room
          `).order("name");if(On)throw On;const{data:et,error:Ee}=await Xe.from("teachers").select(`
            id,
            full_name,
            user_id,
            status
          `).eq("status","active").order("full_name");if(Ee)throw Ee;const{data:Ms,error:Nt}=await Xe.from("attendance").select(`
          id,
          student_id,
          class_id,
          teacher_id,
          attendance_date,
          date,
          time_in,
          time_out,
          status,
          notes
        `).eq("attendance_date",c);if(Nt)throw Nt;const Ls={};(X||[]).forEach(ue=>{Ls[ue.id]=ue});const nn={};(Je||[]).forEach(ue=>{nn[ue.id]=ue});const ko=(z||[]).map(ue=>{const Ir=Ls[ue.level_id],Ln=nn[ue.class_id];return{...ue,level:Ir?.name_ar||Ln?.level||"غير محدد",levelId:ue.level_id||null,className:Ln?.name||"عام",teacherId:null}}),Fs={};(Ms||[]).forEach(ue=>{ue.student_id&&(Fs[ue.student_id]=ue.teacher_id)});const rn=ko.map(ue=>({...ue,teacherId:Fs[ue.id]||null}));n(rn),i(et||[]);const sn={};(Ms||[]).forEach(ue=>{sn[ue.student_id]=ue.status});const Mn={};rn.forEach(ue=>{Mn[ue.id]=sn[ue.id]||"present"}),l(Mn)}catch(z){console.error("خطأ في جلب بيانات الحضور:",z),P("");const H=JSON.parse(window.localStorage.getItem("isshaam_students")||"[]").filter(oe=>!oe.archived),X=_p().filter(oe=>oe.date===c);n(H.map(oe=>({...oe,level:oe.academic_level||oe.level||"غير محدد",levelId:oe.level_id||null,className:"عام",teacherId:null}))),i([]),l(Object.fromEntries(X.map(oe=>[oe.student_id,oe.status])))}finally{C(!1)}},[c,n]);M.useEffect(()=>{R()},[R]);const x=(z,H)=>{l(X=>({...X,[z]:H}))},_=t.filter(z=>{if(r==="teacher"&&e&&!(z.teacherId===e.uid))return!1;const H=m.trim().toLowerCase(),X=z.full_name||"",oe=z.level||"",Je=!H||X.toLowerCase().includes(H)||oe.toLowerCase().includes(H),On=v?z.level===v:!0;return Je&&On}),w=z=>{const H={...o};_.forEach(X=>{H[X.id]=z}),l(H)},I=async()=>{if(_.length!==0){F(!0),L(!1),P("");try{const z=_.map(H=>({student_id:H.id,class_id:H.class_id||null,teacher_id:H.teacherId||null,attendance_date:c,date:c,status:o[H.id]||"present",notes:null}));wI(z.map(H=>({...H,id:`${H.student_id}-${H.attendance_date}`,studentName:t.find(X=>X.id===H.student_id)?.full_name||"تلميذ",timestamp:new Date().toISOString()}))),z.forEach(H=>{xs("تسجيل حضور",`تم تسجيل حضور الطالب في تاريخ ${H.attendance_date}.`)});for(const H of z){const{data:X,error:oe}=await Xe.from("attendance").select("id").eq("student_id",H.student_id).eq("attendance_date",c).limit(1).maybeSingle();if(oe)throw oe;if(X?.id){const{error:Je}=await Xe.from("attendance").update({class_id:H.class_id,teacher_id:H.teacher_id,date:H.date,status:H.status,notes:H.notes}).eq("id",X.id);if(Je)throw Je}else{const{error:Je}=await Xe.from("attendance").insert(H);if(Je)throw Je}}L(!0),setTimeout(()=>{L(!1)},4e3)}catch(z){console.error("خطأ في حفظ الحضور:",z),P("")}finally{F(!1)}}},b=z=>{const H=z.parent_whatsapp||z.parent_phone;if(!H){alert("رقم هاتف الولي غير متوفر!");return}let X=H.trim().replace(/\s+/g,"").replace(/-/g,"");X.startsWith("+")&&(X=X.substring(1)),X.startsWith("0")&&(X="212"+X.substring(1));const oe=`السلام عليكم ورحمة الله وبركاته،

تخبركم إدارة *أكاديمية إسهام* 🏫 بتسجيل غياب التلميذ(ة) *${z.full_name}* عن حصة اليوم بتاريخ *${c}*.

المرجو التواصل معنا لتأكيد سبب الغياب.

شكراً لتعاونكم. 🌹`;window.open(`https://wa.me/${X}?text=${encodeURIComponent(oe)}`,"_blank")},T=_.filter(z=>o[z.id]==="present").length,y=_.filter(z=>o[z.id]==="absent").length,ee=_.filter(z=>o[z.id]==="late").length,se=_.filter(z=>o[z.id]==="excused").length;return A?u.jsx("div",{className:"p-8 text-center text-slate-700 font-bold dir-rtl",children:"جاري تحميل قائمة التلاميذ..."}):u.jsxs("div",{className:"space-y-6 dir-rtl pb-12 text-right",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl shadow-md border border-slate-300 gap-4",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-2xl font-black text-slate-900",children:"تتبع الحضور والغياب 📋"}),u.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"تسجيل وتأكيد حضور التلاميذ حسب التاريخ والمستوى"})]}),u.jsxs("div",{className:"flex items-center gap-3 w-full md:w-auto",children:[u.jsx("input",{type:"date",value:c,onChange:z=>d(z.target.value),className:"px-3.5 py-2 border-2 border-slate-400 rounded-lg bg-white text-slate-900 font-bold text-sm"}),u.jsx("button",{onClick:I,disabled:k||_.length===0,className:"px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-lg shadow-md text-sm disabled:opacity-50",children:k?"جاري الحفظ...":"حفظ السجل ✅"})]})]}),O&&u.jsx("div",{className:"p-4 bg-emerald-100 border-2 border-emerald-400 text-emerald-900 rounded-xl font-extrabold text-center",children:"🎉 تم حفظ سجل الحضور والغياب بنجاح في Supabase!"}),$&&u.jsxs("div",{className:"p-4 bg-rose-100 border-2 border-rose-400 text-rose-900 rounded-xl font-bold text-center",children:["❌ ",$]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-md border border-slate-300 flex flex-col md:flex-row justify-between items-center gap-4",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[u.jsx("input",{type:"text",placeholder:"🔍 البحث عن تلميذ...",value:m,onChange:z=>p(z.target.value),className:"px-4 py-2 border-2 border-slate-300 rounded-lg w-56 text-slate-900 font-bold text-sm"}),u.jsxs("select",{value:v,onChange:z=>E(z.target.value),className:"px-3 py-2 border-2 border-slate-300 rounded-lg text-sm bg-white font-bold text-slate-800",children:[u.jsx("option",{value:"",children:"كل المستويات"}),u.jsx("option",{value:"الأول ابتدائي",children:"الأول ابتدائي"}),u.jsx("option",{value:"الثاني ابتدائي",children:"الثاني ابتدائي"}),u.jsx("option",{value:"الثالث ابتدائي",children:"الثالث ابتدائي"}),u.jsx("option",{value:"الرابع ابتدائي",children:"الرابع ابتدائي"}),u.jsx("option",{value:"الخامس ابتدائي",children:"الخامس ابتدائي"}),u.jsx("option",{value:"السادس ابتدائي",children:"السادس ابتدائي"}),u.jsx("option",{value:"الأولى إعدادي",children:"الأولى إعدادي"}),u.jsx("option",{value:"الثانية إعدادي",children:"الثانية إعدادي"}),u.jsx("option",{value:"الثالثة إعدادي",children:"الثالثة إعدادي"}),u.jsx("option",{value:"الجذع المشترك",children:"الجذع المشترك"}),u.jsx("option",{value:"الأولى باكالوريا",children:"الأولى باكالوريا"}),u.jsx("option",{value:"الثانية باكالوريا",children:"الثانية باكالوريا"})]})]}),u.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[u.jsx("span",{className:"text-xs font-black",children:"تحديد سريع:"}),u.jsx("button",{onClick:()=>w("present"),className:"px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-black",children:"الجميع حاضر ✅"}),u.jsx("button",{onClick:()=>w("absent"),className:"px-4 py-2 bg-rose-600 text-white rounded-lg text-xs font-black",children:"الجميع غائب ❌"})]}),u.jsxs("div",{className:"flex items-center gap-2 text-xs font-black flex-wrap",children:[u.jsxs("span",{className:"text-emerald-900 bg-emerald-100 px-3 py-1.5 rounded-lg",children:["حاضر:",u.jsxs("strong",{children:[" ",T]})]}),u.jsxs("span",{className:"text-rose-900 bg-rose-100 px-3 py-1.5 rounded-lg",children:["غائب:",u.jsxs("strong",{children:[" ",y]})]}),u.jsxs("span",{className:"text-blue-900 bg-blue-100 px-3 py-1.5 rounded-lg",children:["متأخر:",u.jsxs("strong",{children:[" ",ee]})]}),u.jsxs("span",{className:"text-amber-900 bg-amber-100 px-3 py-1.5 rounded-lg",children:["مبرر:",u.jsxs("strong",{children:[" ",se]})]})]})]}),u.jsx("div",{className:"bg-white rounded-xl shadow-md border border-slate-300 overflow-hidden",children:_.length===0?u.jsx("div",{className:"p-6 text-center text-slate-500 font-bold",children:"لا يوجد تلاميذ مطابقون للفلترة الحالية."}):u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"w-full text-right border-collapse min-w-[850px]",children:[u.jsx("thead",{className:"bg-slate-100 border-b-2 border-slate-300 text-slate-800 font-bold text-sm",children:u.jsxs("tr",{children:[u.jsx("th",{className:"px-6 py-4",children:"الاسم الكامل"}),u.jsx("th",{className:"px-6 py-4",children:"المستوى"}),u.jsx("th",{className:"px-6 py-4",children:"القسم"}),u.jsx("th",{className:"px-6 py-4",children:"الأستاذ المسؤول"}),u.jsx("th",{className:"px-6 py-4 text-center",children:"حالة الحضور"}),u.jsx("th",{className:"px-6 py-4 text-center",children:"تواصل"})]})}),u.jsx("tbody",{className:"divide-y divide-slate-200 text-sm",children:_.map(z=>{const H=s.find(oe=>oe.id===z.teacherId),X=o[z.id]||"present";return u.jsxs("tr",{className:"hover:bg-slate-50 transition",children:[u.jsx("td",{className:"px-6 py-4 font-black text-slate-900",children:z.full_name}),u.jsx("td",{className:"px-6 py-4 text-slate-700 font-bold",children:z.level}),u.jsx("td",{className:"px-6 py-4 text-slate-700 font-bold",children:z.className}),u.jsx("td",{className:"px-6 py-4 text-slate-800 font-bold",children:H?H.full_name:"عام"}),u.jsx("td",{className:"px-6 py-4 text-center",children:u.jsxs("div",{className:"inline-flex rounded-lg p-1 bg-slate-200 gap-1 border border-slate-300 flex-wrap justify-center",children:[u.jsx("button",{type:"button",onClick:()=>x(z.id,"present"),className:`px-3 py-1.5 rounded-md text-xs font-black ${X==="present"?"bg-emerald-600 text-white":"bg-slate-100 text-slate-800"}`,children:"حاضر ✅"}),u.jsx("button",{type:"button",onClick:()=>x(z.id,"absent"),className:`px-3 py-1.5 rounded-md text-xs font-black ${X==="absent"?"bg-rose-600 text-white":"bg-slate-100 text-slate-800"}`,children:"غائب ❌"}),u.jsx("button",{type:"button",onClick:()=>x(z.id,"late"),className:`px-3 py-1.5 rounded-md text-xs font-black ${X==="late"?"bg-blue-600 text-white":"bg-slate-100 text-slate-800"}`,children:"متأخر ⏰"}),u.jsx("button",{type:"button",onClick:()=>x(z.id,"excused"),className:`px-3 py-1.5 rounded-md text-xs font-black ${X==="excused"?"bg-amber-600 text-white":"bg-slate-100 text-slate-800"}`,children:"مبرر ⚠️"})]})}),u.jsx("td",{className:"px-6 py-4 text-center",children:X==="absent"&&u.jsx("button",{type:"button",onClick:()=>b(z),className:"px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-black",children:"📲 إشعار الغياب"})})]},z.id)})})]})})})]})}const id=["الرياضيات","الفيزياء والكيمياء","علوم الحياة والأرض","اللغة الفرنسية","اللغة الإنجليزية","اللغة العربية","الفلسفة","الاجتماعيات","مادة أخرى"];function RI(){const[r,e]=M.useState([]),[t,n]=M.useState(!0),[s,i]=M.useState(!1),[o,l]=M.useState(null),[c,d]=M.useState(!1),[m,p]=M.useState(""),[v,E]=M.useState(""),[A,C]=M.useState({show:!1,id:null,name:""}),[k,F]=M.useState(!1),[O,L]=M.useState({fullName:"",subject:"الرياضيات",phone:"",salary:""}),$=M.useCallback(async()=>{try{n(!0);const T=(await It(Ze(be,"teachers"))).docs.map(y=>({id:y.id,...y.data(),displayName:y.data().fullName||y.data().name||"أستاذ غير مسمى"}));e(T)}catch(b){console.error("خطأ في جلب البيانات:",b)}finally{n(!1)}},[]);M.useEffect(()=>{$()},[$]);const P=async b=>{b.preventDefault(),d(!0);try{const T={fullName:O.fullName.trim(),name:O.fullName.trim(),subject:O.subject,phone:O.phone.trim(),salary:O.salary?Number(O.salary):0,updatedAt:Xi()};o?(await N0(ot(be,"teachers",o),T),l(null)):await oc(Ze(be,"teachers"),{...T,createdAt:Xi()}),L({fullName:"",subject:"الرياضيات",phone:"",salary:""}),i(!1),$()}catch(T){console.error("خطأ في الحفظ:",T)}finally{d(!1)}},R=b=>{L({fullName:b.fullName||b.name||"",subject:b.subject||"الرياضيات",phone:b.phone||"",salary:b.salary||""}),l(b.id),i(!0)},x=(b,T)=>{C({show:!0,id:b,name:T})},_=async()=>{if(A.id){F(!0);try{await cp(ot(be,"teachers",A.id)),C({show:!1,id:null,name:""}),$()}catch(b){console.error("خطأ في الحذف:",b)}finally{F(!1)}}},w=b=>{if(!b)return alert("رقم الهاتف غير متوفر!");let T=b.trim().replace(/\s+/g,"").replace(/-/g,"");T.startsWith("0")&&(T="212"+T.substring(1)),T.startsWith("+")&&(T=T.substring(1)),window.open(`https://wa.me/${T}`,"_blank")},I=r.filter(b=>{const T=b.displayName.toLowerCase().includes(m.toLowerCase())||b.phone?.includes(m),y=v?b.subject===v:!0;return T&&y});return u.jsxs("div",{className:"min-h-screen bg-slate-100 p-4 md:p-6 space-y-6 dir-rtl text-right max-w-full pb-12",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl shadow-sm border border-slate-200 gap-4",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-bold text-slate-900 flex items-center gap-2",children:"إدارة الأساتذة 👨‍🏫"}),u.jsx("p",{className:"text-sm text-slate-500 mt-1",children:"إضافة وتتبع الطاقم التربوي لأكاديمية إسهام"})]}),u.jsxs("button",{onClick:()=>{i(!s),l(null),L({fullName:"",subject:"الرياضيات",phone:"",salary:""})},className:`px-5 py-2.5 text-white rounded-lg transition font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer ${s?"bg-slate-700 hover:bg-slate-800":"bg-amber-500 hover:bg-amber-600"}`,children:[u.jsx("span",{children:s?"✕":"+"}),u.jsx("span",{children:s?"إلغاء النافذة":"إضافة أستاذ جديد"})]})]}),s&&u.jsxs("form",{onSubmit:P,className:"bg-white p-6 rounded-xl shadow-md border-2 border-amber-300 space-y-4 transition-all",children:[u.jsxs("div",{className:"flex justify-between items-center border-b border-slate-200 pb-3",children:[u.jsxs("h3",{className:"text-md font-bold text-slate-800 flex items-center gap-2",children:[u.jsx("span",{children:o?"✏️":"➕"}),o?"تعديل بيانات الأستاذ":"إضافة أستاذ جديد"]}),u.jsx("button",{type:"button",onClick:()=>i(!1),className:"text-slate-400 hover:text-slate-600 text-sm font-bold",children:"إغلاق ✕"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"الاسم الكامل *"}),u.jsx("input",{type:"text",value:O.fullName,onChange:b=>L({...O,fullName:b.target.value}),required:!0,placeholder:"مثال: أستاذ عبد الله",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"المادة المدرسة"}),u.jsx("select",{value:O.subject,onChange:b=>L({...O,subject:b.target.value}),className:"w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer",children:id.map(b=>u.jsx("option",{value:b,children:b},b))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"رقم الهاتف *"}),u.jsx("input",{type:"text",value:O.phone,onChange:b=>L({...O,phone:b.target.value}),required:!0,placeholder:"06XXXXXXXX",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"المستحقات الشهريّة (درهم)"}),u.jsx("input",{type:"number",value:O.salary,onChange:b=>L({...O,salary:b.target.value}),placeholder:"مثال: 1500",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]})]}),u.jsxs("div",{className:"flex justify-end gap-2 pt-3 border-t border-slate-100",children:[u.jsx("button",{type:"button",onClick:()=>i(!1),className:"px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition cursor-pointer",children:"إلغاء"}),u.jsx("button",{type:"submit",disabled:c,className:"px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-bold transition shadow-sm cursor-pointer disabled:opacity-50 flex items-center gap-2",children:c?"جاري الحفظ...":"حفظ البيانات ✅"})]})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-3 w-full md:w-auto",children:[u.jsx("input",{type:"text",placeholder:"🔍 البحث باسم الأستاذ أو الهاتف...",value:m,onChange:b=>p(b.target.value),className:"px-4 py-2 border border-slate-300 rounded-lg w-full md:w-64 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm"}),u.jsxs("select",{value:v,onChange:b=>E(b.target.value),className:"px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white cursor-pointer",children:[u.jsx("option",{value:"",children:"جميع المواد"}),id.map(b=>u.jsx("option",{value:b,children:b},b))]})]}),u.jsxs("div",{className:"text-xs font-bold text-slate-600",children:["إجمالي الأساتذة: ",u.jsx("span",{className:"text-amber-600 font-bold text-sm bg-amber-50 px-2 py-1 rounded-md border border-amber-200",children:I.length})]})]}),u.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden",children:t?u.jsx("div",{className:"p-8 text-center text-slate-500 font-bold",children:"جاري تحميل لائحة الأساتذة..."}):I.length===0?u.jsxs("div",{className:"p-10 text-center text-slate-500 space-y-3",children:[u.jsx("p",{className:"text-base font-bold text-slate-700",children:"لا يوجد أساتذة مطابقون للبحث."}),!s&&u.jsx("button",{onClick:()=>i(!0),className:"px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold transition shadow-sm",children:"+ إضافة أستاذ الآن"})]}):u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"w-full text-right border-collapse min-w-[650px]",children:[u.jsx("thead",{className:"bg-slate-100 border-b border-slate-200 text-xs text-slate-700 font-bold",children:u.jsxs("tr",{children:[u.jsx("th",{className:"p-4",children:"الاسم الكامل"}),u.jsx("th",{className:"p-4",children:"المادة"}),u.jsx("th",{className:"p-4",children:"رقم الهاتف"}),u.jsx("th",{className:"p-4",children:"المستحقات الشهريّة"}),u.jsx("th",{className:"p-4 text-center",children:"الإجراءات"})]})}),u.jsx("tbody",{className:"divide-y divide-slate-100 text-sm",children:I.map(b=>u.jsxs("tr",{className:"hover:bg-slate-50 transition",children:[u.jsx("td",{className:"p-4 font-bold text-slate-900",children:b.displayName}),u.jsx("td",{className:"p-4",children:u.jsx("span",{className:"px-2.5 py-1 bg-amber-50 text-amber-800 rounded-md text-xs font-semibold border border-amber-200",children:b.subject||"غير محدد"})}),u.jsx("td",{className:"p-4 font-mono text-xs",dir:"ltr",children:u.jsxs("div",{className:"flex items-center gap-2 justify-end",children:[u.jsx("span",{className:"font-semibold text-slate-800",children:b.phone||"---"}),b.phone&&u.jsx("button",{onClick:()=>w(b.phone),className:"text-emerald-600 hover:text-emerald-700 text-base cursor-pointer",title:"تواصل عبر الواتساب",children:"💬"})]})}),u.jsx("td",{className:"p-4 font-semibold text-slate-800",children:b.salary?`${b.salary} درهم`:"---"}),u.jsx("td",{className:"p-4 text-center",children:u.jsxs("div",{className:"flex items-center justify-center gap-2",children:[u.jsx("button",{onClick:()=>R(b),className:"px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 rounded text-xs font-bold transition cursor-pointer",children:"✏️ تعديل"}),u.jsx("button",{onClick:()=>x(b.id,b.displayName),className:"px-2.5 py-1 bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 rounded text-xs font-bold transition cursor-pointer",children:"🗑️ حذف"})]})})]},b.id))})]})})}),A.show&&u.jsx("div",{className:"fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:u.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full p-6 shadow-xl border border-slate-100 space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-3 text-rose-600",children:[u.jsx("span",{className:"text-2xl",children:"⚠️"}),u.jsx("h3",{className:"text-lg font-bold",children:"تأكيد حذف الأستاذ"})]}),u.jsxs("p",{className:"text-sm text-slate-600",children:["هل أنت تأكد من رغبتك في حذف الأستاذ ",u.jsxs("strong",{className:"text-slate-800",children:['"',A.name,'"']}),"؟ هذا الإجراء لا يمكن التراجع عنه."]}),u.jsxs("div",{className:"flex justify-end gap-3 pt-3 border-t border-slate-100",children:[u.jsx("button",{onClick:()=>C({show:!1,id:null,name:""}),disabled:k,className:"px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition cursor-pointer",children:"إلغاء"}),u.jsx("button",{onClick:_,disabled:k,className:"px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-sm font-semibold transition cursor-pointer disabled:opacity-50",children:k?"جاري الحذف...":"نعم، حذف"})]})]})})]})}function NI(){const{students:r,setStudents:e}=Co(),[t,n]=M.useState([]),[s,i]=M.useState(!0),[o,l]=M.useState(""),[c,d]=M.useState(""),[m,p]=M.useState(new Date().toLocaleString("ar-MA",{month:"long"})),[v,E]=M.useState(""),[A,C]=M.useState(null),k=M.useCallback(async()=>{i(!0);try{const[R,x]=await Promise.all([It(Ze(be,"students")),It(Ze(be,"payments"))]),_=R.docs.map(I=>{const b=I.data();return{id:I.id,...b,fullName:b.fullName||b.full_name||"",parentPhone:b.parentPhone||b.parent_phone||"",monthlyFee:b.monthlyFee??b.monthly_fee??0,level:b.level||b.academic_level||""}}).filter(I=>!I.archived);e(I=>{const b=new Set(I.map(T=>T.id));return[...I,..._.filter(T=>!b.has(T.id))]});const w=x.docs.map(I=>({id:I.id,...I.data()}));n(w.sort((I,b)=>(b.createdAt?.seconds||0)-(I.createdAt?.seconds||0)))}catch(R){console.error("خطأ في جلب البيانات:",R);const x=JSON.parse(window.localStorage.getItem("isshaam_payments")||"[]");n(x)}finally{i(!1)}},[e]);M.useEffect(()=>{k()},[k]);const F=R=>{const x=R.target.value;l(x);const _=r.find(w=>w.id===x);_&&_.monthlyFee&&d(_.monthlyFee)},O=async R=>{if(R.preventDefault(),!o||!c)return alert("المرجو اختيار التلميذ والمبلغ");const x=r.find(I=>I.id===o);if(!x)return;const _={receiptNo:`REC-${Date.now().toString().slice(-6)}`,studentId:x.id,studentName:x.fullName,parentPhone:x.parentPhone||"",level:x.level,amount:c,month:m,notes:v,date:new Date().toLocaleDateString("ar-MA",{year:"numeric",month:"long",day:"numeric"}),time:new Date().toLocaleTimeString("ar-MA",{hour:"2-digit",minute:"2-digit"}),createdAt:Xi()};C(_),l(""),d(""),E("");const w=JSON.parse(window.localStorage.getItem("isshaam_payments")||"[]");window.localStorage.setItem("isshaam_payments",JSON.stringify([{..._,createdAt:new Date().toISOString()},...w])),e(I=>I.map(b=>b.id===x.id?{...b,paymentStatus:"paid"}:b)),xs("تسجيل أداء",`تم تسجيل أداء بقيمة ${c} للطالب ${x.fullName}.`);try{await oc(Ze(be,"payments"),_),k()}catch(I){console.error("خطأ في تسجيل الأداء:",I)}},L=async(R,x)=>{if(window.confirm(`هل أنت تأكد من رغبتك في نقل/حذف الوصل رقم ${x} إلى سلة المهملات؟`))try{await cp(ot(be,"payments",R)),n(_=>_.filter(w=>w.id!==R))}catch(_){console.error("خطأ أثناء حذف الوصل:",_),alert("حدث خطأ أثناء عملية الحذف")}},$=R=>{if(!R.parentPhone)return alert("رقم هاتف الولي غير متوفر لهذا التلميذ");const x=R.parentPhone.startsWith("0")?"212"+R.parentPhone.slice(1):R.parentPhone,_=`✨ *إشعار تسديد الواجب الشهري - ISSHAAM ACADEMY* ✨

السلام عليكم ورحمة الله وبركاته،
ولي أمر التلميذ(ة): *${R.studentName}* (${R.level})

نشكركم على ثقتكم الغالية فـ *ISSHAAM ACADEMY*. نود إخباركم أنه قد تم استلام الواجب الشهري بنجاح:
📄 *رقم الوصل:* ${R.receiptNo}
📅 *عن شهر:* ${R.month}
💰 *المبلغ الاستلام:* ${R.amount} درهم
🗓️ *تاريخ الأداء:* ${R.date}

الحالة: ✅ *مكاشي - PAYÉ*

نسأل الله بالتوفيق والنجاح لأبنائنا الكرام! 🎓
_إدارة أكاديمية عصام للدعم والتميز_`,w=`https://wa.me/${x}?text=${encodeURIComponent(_)}`;window.open(w,"_blank")},P=R=>{if(!R.parentPhone)return alert("رقم هاتف الولي غير متوفر لهذا التلميذ");const x=R.parentPhone.startsWith("0")?"212"+R.parentPhone.slice(1):R.parentPhone,_=new Date().toLocaleString("ar-MA",{month:"long"}),w=`🌸 *تذكير لطيف بالواجب الشهري - ISSHAAM ACADEMY* 🌸

السلام عليكم ورحمة الله وبركاته،
تحية طيبة وبعد من إدارة *ISSHAAM ACADEMY*.

نود تذكير ولي أمر التلميذ(ة): *${R.fullName}* (${R.level}) بأن موعد استيفاء الواجب الشهري الخاص بشهر (*${_}*) قد حان.

💰 *الواجب الشهري:* ${R.monthlyFee||"---"} درهم.

شاكرين لكم حسن تعاونكم واهتمامكم الدائم بمستقبل أبنائكم معنا 🌟.
لأي استفسار يرجى التواصل مع الإدارة.`,I=`https://wa.me/${x}?text=${encodeURIComponent(w)}`;window.open(I,"_blank")};return u.jsxs("div",{className:"space-y-6 dir-rtl text-right pb-10 font-sans",children:[u.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md border border-slate-300",children:[u.jsx("h2",{className:"text-2xl font-black text-slate-900 mb-2",children:"استلام الواجب الشهري وإرسال الوصولات 🧾"}),u.jsx("p",{className:"text-xs font-bold text-slate-600 mb-6",children:"سجل الأداء الشهري، اطبع الوصل المـكـاشـي، وأرسل الإشعارات عبر الواتساب مباشرة"}),u.jsxs("form",{onSubmit:O,className:"grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-bold",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block mb-1 text-slate-800",children:"اختيار التلميذ *"}),u.jsxs("select",{value:o,onChange:F,required:!0,className:"w-full p-2.5 border-2 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-blue-600",children:[u.jsx("option",{value:"",children:"-- اختر التلميذ --"}),r.map(R=>u.jsxs("option",{value:R.id,children:[R.fullName," (",R.level,")"]},R.id))]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block mb-1 text-slate-800",children:"عن شهر *"}),u.jsx("input",{type:"text",value:m,onChange:R=>p(R.target.value),required:!0,className:"w-full p-2.5 border-2 rounded-lg text-slate-900",placeholder:"مثال: أكتوبر / نونبر"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block mb-1 text-slate-800",children:"المبلغ المدفوع (درهم) *"}),u.jsx("input",{type:"number",value:c,onChange:R=>d(R.target.value),required:!0,className:"w-full p-2.5 border-2 rounded-lg text-slate-900",placeholder:"300"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block mb-1 text-slate-800",children:"ملاحظات (اختياري)"}),u.jsx("input",{type:"text",value:v,onChange:R=>E(R.target.value),className:"w-full p-2.5 border-2 rounded-lg text-slate-900",placeholder:"مثال: تسقيع جزئي، واجب الدورة..."})]}),u.jsx("div",{className:"md:col-span-4 mt-2",children:u.jsx("button",{type:"submit",className:"w-full md:w-auto px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-black text-sm shadow-md cursor-pointer transition",children:"💳 تسجيل الدفع وإصدار الوصل المـكـاشـي"})})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-md border border-slate-300 p-5",children:[u.jsx("h3",{className:"text-lg font-black text-slate-900 mb-3",children:"📲 قائمة التلاميذ للتذكير السريع بالواتساب:"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",children:r.map(R=>u.jsxs("div",{className:"p-3 border rounded-lg bg-slate-50 flex justify-between items-center text-xs font-bold",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-slate-900 font-black",children:R.fullName}),u.jsxs("p",{className:"text-slate-500",children:[R.level," - ",R.monthlyFee||0," درهم"]})]}),u.jsx("button",{onClick:()=>P(R),className:"px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-lg text-[11px] flex items-center gap-1 cursor-pointer",children:"📱 تذكير بالأداء"})]},R.id))})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-md border border-slate-300 p-5",children:[u.jsx("h3",{className:"text-xl font-black text-slate-900 mb-4 border-b pb-2",children:"سجل الوصولات المنجزة والأداءات 📜"}),s?u.jsx("p",{className:"text-center font-bold text-slate-600 py-4",children:"جاري تحميل سجل الأداءات..."}):t.length>0?u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"w-full text-right border-collapse text-xs",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"bg-slate-100 border-b border-slate-300 text-slate-800 font-black",children:[u.jsx("th",{className:"p-3",children:"رقم الوصل"}),u.jsx("th",{className:"p-3",children:"اسم التلميذ"}),u.jsx("th",{className:"p-3",children:"المستوى"}),u.jsx("th",{className:"p-3",children:"عن شهر"}),u.jsx("th",{className:"p-3",children:"المبلغ المدفوع"}),u.jsx("th",{className:"p-3",children:"التاريخ والوقت"}),u.jsx("th",{className:"p-3 text-center",children:"خيارات"})]})}),u.jsx("tbody",{className:"divide-y divide-slate-200 font-bold text-slate-900",children:t.map(R=>u.jsxs("tr",{className:"hover:bg-slate-50",children:[u.jsx("td",{className:"p-3 font-mono font-black text-blue-800",children:R.receiptNo}),u.jsx("td",{className:"p-3 text-sm",children:R.studentName}),u.jsx("td",{className:"p-3",children:R.level}),u.jsx("td",{className:"p-3 bg-blue-50 text-blue-900 font-black rounded",children:R.month}),u.jsxs("td",{className:"p-3 text-emerald-800 font-black text-sm",children:[R.amount," درهم"]}),u.jsxs("td",{className:"p-3 text-slate-500 text-[11px]",children:[R.date," - ",R.time]}),u.jsxs("td",{className:"p-3 text-center flex justify-center gap-2",children:[u.jsx("button",{onClick:()=>C(R),className:"px-3 py-1 bg-slate-800 hover:bg-slate-900 text-white font-black rounded cursor-pointer",children:"🖨️ معاينة"}),u.jsx("button",{onClick:()=>$(R),className:"px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded cursor-pointer",children:"📲 واتساب"}),u.jsx("button",{onClick:()=>L(R.id,R.receiptNo),className:"px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-black rounded cursor-pointer",title:"حذف إلى سلة المهملات",children:"🗑️ حذف"})]})]},R.id))})]})}):u.jsx("p",{className:"text-center font-bold text-slate-500 py-4",children:"لا توجد أداءات مسجلة بعد"})]}),A&&u.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50",children:u.jsxs("div",{className:"bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg border-2 border-slate-400",children:[u.jsxs("div",{className:"flex justify-between items-center mb-4 print:hidden",children:[u.jsx("span",{className:"font-black text-slate-800 text-sm",children:"معاينة وصل الأداء الرسمية"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:()=>$(A),className:"px-3 py-1.5 bg-emerald-600 text-white font-black text-xs rounded hover:bg-emerald-700 cursor-pointer",children:"📲 إرسال للواتساب"}),u.jsx("button",{onClick:()=>window.print(),className:"px-3 py-1.5 bg-blue-700 text-white font-black text-xs rounded hover:bg-blue-800 cursor-pointer",children:"🖨️ طباعة الآن"}),u.jsx("button",{onClick:()=>C(null),className:"px-3 py-1.5 bg-slate-200 text-slate-800 font-black text-xs rounded hover:bg-slate-300 cursor-pointer",children:"إغلاق ✖"})]})]}),u.jsxs("div",{className:"relative border-4 border-slate-900 p-6 rounded-lg bg-white text-slate-900 space-y-4 text-right overflow-hidden shadow-inner",children:[u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-22deg] pointer-events-none opacity-85",children:u.jsxs("div",{className:"border-4 border-dashed border-red-600 rounded-full w-44 h-44 flex flex-col justify-center items-center text-center p-2 bg-red-50/30",children:[u.jsx("span",{className:"text-xs font-black text-red-600 tracking-wider",children:"★ ISSHAAM ACADEMY ★"}),u.jsx("span",{className:"text-2xl font-black text-red-600 my-0.5 border-y-2 border-red-600 px-3",children:"PAYÉ"}),u.jsx("span",{className:"text-[10px] font-black text-red-600",children:"تم الأداء - مقبوض"})]})}),u.jsxs("div",{className:"border-b-2 border-slate-900 pb-3 flex justify-between items-center relative z-10",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center font-black text-xl shadow",children:"🎓"}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-black text-slate-900",children:"ISSHAAM ACADEMY"}),u.jsx("p",{className:"text-[11px] font-bold text-blue-900",children:"مؤسسة الدعم والتقوية والتوجيه"})]})]}),u.jsxs("div",{className:"text-left font-mono text-xs font-black",children:[u.jsx("p",{className:"text-blue-900",children:A.receiptNo}),u.jsx("p",{className:"text-[10px] text-slate-600",children:A.date})]})]}),u.jsx("div",{className:"text-center bg-slate-900 text-white py-1.5 rounded font-black text-xs tracking-wide relative z-10",children:"وصل استلام الواجب الشهري الرسمي — REÇU DE PAIEMENT"}),u.jsxs("div",{className:"space-y-2 text-xs font-bold pt-1 relative z-10",children:[u.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[u.jsx("span",{className:"text-slate-600",children:"اسم التلميذ(ة):"}),u.jsx("span",{className:"text-slate-900 font-black text-sm",children:A.studentName})]}),u.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[u.jsx("span",{className:"text-slate-600",children:"المستوى الدراسي:"}),u.jsx("span",{children:A.level})]}),u.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[u.jsx("span",{className:"text-slate-600",children:"واجب شهر:"}),u.jsx("span",{className:"font-black text-blue-900",children:A.month})]}),u.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[u.jsx("span",{className:"text-slate-600",children:"المبلغ المستلم:"}),u.jsxs("span",{className:"font-black text-emerald-800 text-base",children:[A.amount," درهم مغربي"]})]}),A.notes&&u.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[u.jsx("span",{className:"text-slate-600",children:"ملاحظات الإدارة:"}),u.jsx("span",{children:A.notes})]})]}),u.jsx("div",{className:"bg-blue-50/80 p-2.5 rounded-lg border border-blue-200 text-center relative z-10",children:u.jsx("p",{className:"text-[11px] font-black text-blue-950",children:"🌟 نشكركم على ثقتكم الغالية فـ أكاديمية ISSHAAM. نسأل الله التوفيق والنجاح لأبنائنا الكرام! 🌟"})}),u.jsxs("div",{className:"pt-4 flex justify-between text-[11px] font-black text-slate-800 relative z-10",children:[u.jsx("p",{children:"توقيع وخاتم الإدارة:"}),u.jsx("p",{children:"توقيع الولي(ة):"})]})]})]})})]})}function PI(){const[r,e]=M.useState([]),[t,n]=M.useState([]),[s,i]=M.useState(!0),[o,l]=M.useState(""),[c,d]=M.useState("شتنبر"),[m,p]=M.useState("all"),v=["شتنبر","أكتوبر","نونبر","دجنبر","يناير","فبراير","مارس","أبريل","ماي","يونيو"],E=P=>P?typeof P=="string"?P:P.seconds?new Date(P.seconds*1e3).toLocaleDateString("ar-MA"):String(P):new Date().toLocaleDateString("ar-MA"),A=async()=>{try{const R=(await It(Ze(be,"students"))).docs.map(w=>({id:w.id,...w.data()})),_=(await It(Ze(be,"payments"))).docs.map(w=>w.data());e(R.map(w=>({...w,fullName:w.fullName||w.full_name||"",monthlyFee:w.monthlyFee??w.monthly_fee??0}))),n(_)}catch(P){console.error("خطأ في جلب البيانات:",P);const R=JSON.parse(window.localStorage.getItem("isshaam_students")||"[]"),x=JSON.parse(window.localStorage.getItem("isshaam_payments")||"[]");e(R.filter(_=>!_.archived).map(_=>({..._,fullName:_.fullName||_.full_name||"",monthlyFee:_.monthlyFee??_.monthly_fee??0}))),n(x)}finally{i(!1)}};M.useEffect(()=>{A()},[]);const C=P=>t.find(R=>R.studentId===P&&R.month===c&&(R.status==="مؤدى"||R.status==="paid")),k=async P=>{try{const R=new Date().toLocaleDateString("ar-MA"),x={studentId:P.id||"",studentName:P.fullName||"",amount:P.monthlyFee||0,month:c,status:"مؤدى",paidAt:R};n(_=>[..._,x]),xs("تسجيل أداء",`تم تسجيل أداء بقيمة ${x.amount} للطالب ${x.studentName}.`),await oc(Ze(be,"payments"),{...x,paidAtTimestamp:Xi()}),A()}catch(R){console.error("خطأ في تسجيل الأداء:",R)}},F=(P,R)=>{const x=window.open("","_blank","width=600,height=700");if(!x)return;const _=P.fullName||"غير محدد",w=P.level||"غير محدد",I=R?.amount||P.monthlyFee||0,b=E(R?.paidAt),T=`
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <title>وصل أداء - ${_}</title>
        <style>
          body { font-family: sans-serif; padding: 20px; direction: rtl; text-align: right; }
          .box { border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; max-width: 400px; margin: auto; }
          .header { text-align: center; border-bottom: 1px solid #eee; padding-bottom: 10px; }
          .row { display: flex; justify-content: space-between; margin: 10px 0; }
          .total { font-weight: bold; color: #059669; font-size: 18px; }
        </style>
      </head>
      <body>
        <div class="box">
          <div class="header">
            <h2>أكاديمية إسهام 🏫</h2>
            <p>وصل استلام الواجب الشهري</p>
          </div>
          <div class="row"><span>التلميذ:</span><strong>${_}</strong></div>
          <div class="row"><span>المستوى:</span><strong>${w}</strong></div>
          <div class="row"><span>الشهر:</span><strong>${c}</strong></div>
          <div class="row total"><span>المبلغ:</span><span>${I} DH</span></div>
          <hr />
          <p style="font-size:12px; color:#666;">تاريخ الأداء: ${b}</p>
        </div>
        <script>window.onload = function() { window.print(); window.close(); };<\/script>
      </body>
      </html>
    `;x.document.write(T),x.document.close()},O=r.filter(P=>{const R=(P.fullName||"").toLowerCase().includes(o.toLowerCase()),x=!!C(P.id);return m==="paid"?R&&x:m==="pending"?R&&!x:R}),L=r.reduce((P,R)=>C(R.id)?P+Number(R.monthlyFee||0):P,0),$=r.reduce((P,R)=>C(R.id)?P:P+Number(R.monthlyFee||0),0);return u.jsxs("div",{className:"p-6 space-y-6 dir-rtl text-right pb-12",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-slate-200",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"إدارة المالية والأداءات 💰"}),u.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"متابعة الواجبات الشهريّة"})]}),u.jsxs("div",{className:"flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200",children:[u.jsx("label",{className:"text-xs font-bold text-gray-700",children:"الشهر:"}),u.jsx("select",{value:c,onChange:P=>d(P.target.value),className:"px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-bold",children:v.map(P=>u.jsx("option",{value:P,children:P},P))})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[u.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsxs("p",{className:"text-xs font-bold text-slate-400",children:["المداخيل (",c,")"]}),u.jsxs("h3",{className:"text-xl font-extrabold text-emerald-600 mt-1",children:[L," DH"]})]}),u.jsx(dg,{className:"w-6 h-6 text-emerald-600"})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsxs("p",{className:"text-xs font-bold text-slate-400",children:["المتبقية (",c,")"]}),u.jsxs("h3",{className:"text-xl font-extrabold text-amber-600 mt-1",children:[$," DH"]})]}),u.jsx(fg,{className:"w-6 h-6 text-amber-600"})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-xs font-bold text-slate-400",children:"نسبة التحصيل"}),u.jsxs("h3",{className:"text-xl font-extrabold text-indigo-600 mt-1",children:[r.length>0?Math.round(r.filter(P=>C(P.id)).length/r.length*100):0,"%"]})]}),u.jsx(mg,{className:"w-6 h-6 text-indigo-600"})]})]}),u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm",children:[u.jsxs("div",{className:"relative w-full sm:w-80",children:[u.jsx("input",{type:"text",placeholder:"البحث باسم التلميذ...",value:o,onChange:P=>l(P.target.value),className:"w-full pr-10 pl-4 py-2 border border-gray-300 rounded-xl text-sm"}),u.jsx(pg,{className:"w-4 h-4 text-gray-400 absolute right-3 top-3"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>p("all"),className:"px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100",children:"الكل"}),u.jsx("button",{onClick:()=>p("paid"),className:"px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700",children:"تم الأداء"}),u.jsx("button",{onClick:()=>p("pending"),className:"px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-50 text-amber-700",children:"غير مؤدى"})]})]}),u.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",children:s?u.jsx("div",{className:"p-8 text-center text-gray-500 font-bold",children:"جاري تحميل البيانات..."}):u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"w-full text-right border-collapse",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"bg-gray-50 border-b text-gray-600 text-sm",children:[u.jsx("th",{className:"p-4",children:"اسم التلميذ"}),u.jsx("th",{className:"p-4",children:"المستوى"}),u.jsx("th",{className:"p-4",children:"الواجب الشهري"}),u.jsx("th",{className:"p-4",children:"الحالة"}),u.jsx("th",{className:"p-4 text-center",children:"الإجراء"})]})}),u.jsx("tbody",{className:"divide-y divide-gray-100 text-sm",children:O.map(P=>{const R=C(P.id),x=!!R;return u.jsxs("tr",{className:"hover:bg-gray-50",children:[u.jsx("td",{className:"p-4 font-semibold",children:P.fullName}),u.jsx("td",{className:"p-4",children:P.level||"غير محدد"}),u.jsxs("td",{className:"p-4 font-bold text-emerald-600",children:[P.monthlyFee||0," DH"]}),u.jsx("td",{className:"p-4",children:x?u.jsx("span",{className:"text-green-700 bg-green-50 px-2 py-1 rounded-lg text-xs font-bold",children:"تم الأداء ✅"}):u.jsx("span",{className:"text-amber-700 bg-amber-50 px-2 py-1 rounded-lg text-xs font-bold",children:"غير مؤدى ⏳"})}),u.jsx("td",{className:"p-4 text-center",children:x?u.jsxs("button",{onClick:()=>F(P,R),className:"bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1",children:[u.jsx(gg,{className:"w-3.5 h-3.5"})," طباعة الوصل"]}):u.jsxs("button",{onClick:()=>k(P),className:"bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1",children:[u.jsx(_g,{className:"w-4 h-4"})," تأكيد الأداء"]})})]},P.id)})})]})})})]})}const va="./logo.jpeg";function CI(){const{settings:r,updateSettings:e,loading:t}=Os(),[n,s]=M.useState(!1),[i,o]=M.useState(""),[l,c]=M.useState("branding"),[d,m]=M.useState({academyName:"ISSHAAM ACADEMY",logoUrl:va,bgColor:"bg-slate-100",primaryColor:"#f59e0b",language:"ar"}),[p,v]=M.useState({phone:"",address:"Moulay Rachid, Casablanca",academicYear:"2025/2026",teacherPercentage:50,notes:"شكراً لثقتكم بأكاديمية إسهام."}),[E,A]=M.useState([]),[C,k]=M.useState("");M.useEffect(()=>{r&&(m(P=>({...P,...r.branding||{}})),v(P=>({...P,...r.general||{}})),A(Array.isArray(r.adminEmails)?r.adminEmails:[]))},[r]);const F=async P=>{P.preventDefault();try{s(!0),o(""),await e({branding:d,general:p,adminEmails:E}),o("تم حفظ التغييرات وتطبيقها فوراً في الموقع كامل! ✅")}catch(R){console.error("خطأ في حفظ الإعدادات:",R),o("حدث خطأ أثناء حفظ الإعدادات ❌")}finally{s(!1)}},O=async P=>{P.preventDefault();const R=C.trim().toLowerCase();if(R){if(E.includes(R)){o("هذا البريد الإلكتروني موجود بالفعل ❌");return}try{s(!0),o("");const x=[...E,R];await e({adminEmails:x}),A(x),k(""),o(`تمت إضافة ${R} إلى قائمة المشرفين ✅`)}catch(x){console.error("خطأ في إضافة المشرف:",x),o("حدث خطأ أثناء إضافة المشرف ❌")}finally{s(!1)}}},L=async P=>{if(window.confirm(`هل أنت متأكد من إزالة ${P} من قائمة المشرفين؟`))try{s(!0),o("");const x=E.filter(_=>_!==P);await e({adminEmails:x}),A(x),o(`تمت إزالة ${P} من قائمة المشرفين ✅`)}catch(x){console.error("خطأ في حذف المشرف:",x),o("حدث خطأ أثناء حذف المشرف ❌")}finally{s(!1)}};if(t)return u.jsx("div",{className:"p-8 text-center text-slate-600 font-bold dir-rtl",children:"جاري تحميل الإعدادات..."});const $=i.includes("✅");return u.jsxs("div",{className:"max-w-5xl mx-auto space-y-6 dir-rtl text-right pb-12",children:[u.jsx("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:u.jsxs("div",{children:[u.jsx("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:"⚙️ إعدادات الأكاديمية"}),u.jsx("p",{className:"text-slate-500 text-sm mt-1",children:"التحكم في الهوية، الألوان، اللغة، المشرفين، وبيانات المؤسسة."})]})}),i&&u.jsx("div",{className:`p-4 rounded-xl font-medium text-sm shadow-sm ${$?"bg-emerald-50 text-emerald-700 border border-emerald-200":"bg-rose-50 text-rose-700 border border-rose-200"}`,children:i}),u.jsxs("div",{className:"flex flex-wrap border border-slate-200 gap-2 bg-white p-2 rounded-xl shadow-sm",children:[u.jsx("button",{type:"button",onClick:()=>c("branding"),className:`px-4 py-2.5 rounded-lg font-bold text-sm transition ${l==="branding"?"bg-amber-500 text-white shadow-sm":"text-slate-600 hover:bg-slate-100"}`,children:"🎨 الهوية والألوان واللغة"}),u.jsx("button",{type:"button",onClick:()=>c("admins"),className:`px-4 py-2.5 rounded-lg font-bold text-sm transition ${l==="admins"?"bg-amber-500 text-white shadow-sm":"text-slate-600 hover:bg-slate-100"}`,children:"👥 إدارة المشرفين"}),u.jsx("button",{type:"button",onClick:()=>c("general"),className:`px-4 py-2.5 rounded-lg font-bold text-sm transition ${l==="general"?"bg-amber-500 text-white shadow-sm":"text-slate-600 hover:bg-slate-100"}`,children:"📋 بيانات المؤسسة"})]}),l==="branding"&&u.jsxs("form",{onSubmit:F,className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6",children:[u.jsx("h3",{className:"text-md font-bold text-slate-800 border-b pb-3",children:"تخصيص اللوغو، الألوان، واللغة"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 text-sm",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"اسم المؤسسة / الأكاديمية *"}),u.jsx("input",{type:"text",value:d.academyName,onChange:P=>m({...d,academyName:P.target.value}),required:!0,className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"رابط اللوغو"}),u.jsx("input",{type:"text",placeholder:`${va} أو رابط مباشر`,value:d.logoUrl,onChange:P=>m({...d,logoUrl:P.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"}),d.logoUrl&&u.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[u.jsx("span",{className:"text-xs text-slate-500 font-bold",children:"معاينة اللوغو:"}),u.jsx("img",{src:d.logoUrl,onError:P=>{P.currentTarget.src=va},alt:"Logo",className:"h-12 w-12 object-contain rounded-full border-2 border-amber-400 p-1"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"لون خلفية الصفحة"}),u.jsxs("select",{value:d.bgColor,onChange:P=>m({...d,bgColor:P.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg bg-white cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none",children:[u.jsx("option",{value:"bg-slate-100",children:"رمادي فاتح هادئ"}),u.jsx("option",{value:"bg-gray-50",children:"أبيض عاجي"}),u.jsx("option",{value:"bg-slate-900",children:"وضع مظلم"}),u.jsx("option",{value:"bg-amber-50/40",children:"دافئ خفيف"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"لغة النظام"}),u.jsxs("select",{value:d.language,onChange:P=>m({...d,language:P.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg bg-white cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none",children:[u.jsx("option",{value:"ar",children:"العربية"}),u.jsx("option",{value:"fr",children:"Français"}),u.jsx("option",{value:"en",children:"English"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"اللون الرئيسي للهوية"}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("input",{type:"color",value:d.primaryColor,onChange:P=>m({...d,primaryColor:P.target.value}),className:"w-12 h-10 p-1 border rounded cursor-pointer"}),u.jsx("span",{className:"text-xs font-mono bg-slate-100 px-3 py-1.5 rounded-md border font-bold text-slate-700",children:d.primaryColor})]})]})]}),u.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-100",children:u.jsx("button",{type:"submit",disabled:n,className:"px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed",children:n?"جاري الحفظ...":"حفظ التغييرات ✅"})})]}),l==="admins"&&u.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-md font-bold text-slate-800 border-b pb-3",children:"إدارة المشرفين"}),u.jsx("p",{className:"text-xs text-slate-500 mt-2",children:"هذه القائمة مخصصة لتسجيل الحسابات المعتمدة كمشرفين داخل إعدادات الأكاديمية."})]}),u.jsxs("form",{onSubmit:O,className:"flex flex-col sm:flex-row gap-2 max-w-xl",children:[u.jsx("input",{type:"email",required:!0,placeholder:"admin@gmail.com",value:C,onChange:P=>k(P.target.value),className:"flex-1 p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"}),u.jsx("button",{type:"submit",disabled:n,className:"px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed",children:n?"جاري الحفظ...":"+ إضافة Admin"})]}),u.jsxs("div",{className:"mt-4",children:[u.jsx("h4",{className:"text-xs font-bold text-slate-500 mb-3",children:"الحسابات المسجلة:"}),E.length===0?u.jsx("p",{className:"text-sm text-slate-400 font-semibold bg-slate-50 p-4 rounded-lg border text-center",children:"لا يوجد مسؤولون محددون حالياً."}):u.jsx("ul",{className:"divide-y border border-slate-200 rounded-lg overflow-hidden",children:E.map(P=>u.jsxs("li",{className:"p-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:bg-slate-50 text-sm",children:[u.jsxs("span",{className:"font-bold text-slate-800 flex items-center gap-2",children:["👤 ",P]}),u.jsx("button",{type:"button",onClick:()=>L(P),disabled:n,className:"px-3 py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-md border border-rose-200 text-xs font-bold transition disabled:opacity-50",children:"حذف الصلاحية 🗑️"})]},P))})]})]}),l==="general"&&u.jsxs("form",{onSubmit:F,className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6",children:[u.jsx("h3",{className:"text-md font-bold text-slate-800 border-b pb-3",children:"البيانات العامة والنسب"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"السنة الدراسية"}),u.jsx("input",{type:"text",value:p.academicYear,onChange:P=>v({...p,academicYear:P.target.value}),placeholder:"2025/2026",className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"نسبة الأستاذ الافتراضية (%)"}),u.jsx("input",{type:"number",min:"0",max:"100",value:p.teacherPercentage,onChange:P=>v({...p,teacherPercentage:Number(P.target.value)}),className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"رقم هاتف التواصل"}),u.jsx("input",{type:"tel",value:p.phone,onChange:P=>v({...p,phone:P.target.value}),placeholder:"06XXXXXXXX",dir:"ltr",className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"العنوان / المقر"}),u.jsx("input",{type:"text",value:p.address,onChange:P=>v({...p,address:P.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"ملاحظات / شروط عامة"}),u.jsx("textarea",{rows:"4",value:p.notes,onChange:P=>v({...p,notes:P.target.value}),placeholder:"أدخل الملاحظات التي تظهر في الوصولات...",className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none resize-y"})]})]}),u.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-100",children:u.jsx("button",{type:"submit",disabled:n,className:"px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed",children:n?"جاري الحفظ...":"حفظ التغييرات ✅"})})]})]})}const fi=r=>new Date(r).toLocaleString("ar-MA",{dateStyle:"medium",timeStyle:"short"});function kI(){const[r,e]=M.useState("attendance"),[t,n]=M.useState(""),[s,i]=M.useState(""),[o]=M.useState(_p),[l,c]=M.useState(nd),[d]=M.useState(xI),{setStudents:m}=Co(),p=M.useMemo(()=>o.filter(A=>(!t||A.date===t)&&(!s||A.date?.startsWith(s))),[o,t,s]),v=()=>{const A=p.map(O=>({التاريخ:O.date,التلميذ:O.studentName,الحالة:O.status,الوقت:fi(O.timestamp)})),C=new Blob([JSON.stringify(A,null,2)],{type:"application/json;charset=utf-8"}),k=URL.createObjectURL(C),F=document.createElement("a");F.href=k,F.download=`attendance-${t||"history"}.json`,F.click(),URL.revokeObjectURL(k)},E=A=>{const C=EI(A);C&&(c(nd()),m(k=>[...k,C]))};return u.jsxs("div",{className:"mx-auto w-full max-w-7xl space-y-6 pb-10",dir:"rtl",children:[u.jsxs("header",{className:"rounded-2xl bg-gradient-to-br from-[#0B192C] to-[#1E3E62] p-6 text-white shadow-xl",children:[u.jsx("p",{className:"text-sm font-bold text-amber-300",children:"ISSHAAM ACADEMY"}),u.jsx("h1",{className:"mt-2 text-3xl font-black",children:"الأرشيف والسجلات"}),u.jsx("p",{className:"mt-2 text-sm text-slate-200",children:"مراجعة الحضور والطلاب المؤرشفين وسجل العمليات."})]}),u.jsx("div",{className:"flex gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-sm",children:[["attendance","أرشيف الحضور"],["students","الطلاب المؤرشفون"],["activity","سجل النشاط"]].map(([A,C])=>u.jsx("button",{type:"button",onClick:()=>e(A),className:`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-black transition ${r===A?"bg-[#D4AF37] text-[#0B192C]":"text-slate-500 hover:bg-slate-100"}`,children:C},A))}),r==="attendance"&&u.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6",children:[u.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",children:[u.jsxs("label",{className:"text-sm font-bold text-slate-700",children:["اختر تاريخا مخصصا",u.jsx("input",{type:"date",value:t,onChange:A=>n(A.target.value),className:"mt-2 block rounded-xl border border-slate-300 px-3 py-2"}),u.jsx("span",{className:"mt-3 block",children:"أو اختر شهرا"}),u.jsx("input",{type:"month",value:s,onChange:A=>i(A.target.value),className:"mt-2 block rounded-xl border border-slate-300 px-3 py-2"})]}),u.jsx("button",{type:"button",onClick:v,className:"rounded-xl bg-[#1E3E62] px-4 py-2.5 font-bold text-white hover:bg-[#0B192C]",children:"تصدير السجل"})]}),u.jsxs("div",{className:"mt-5 overflow-x-auto",children:[u.jsxs("table",{className:"w-full min-w-[620px] text-right text-sm",children:[u.jsx("thead",{className:"bg-slate-100 text-slate-700",children:u.jsxs("tr",{children:[u.jsx("th",{className:"p-3",children:"التاريخ"}),u.jsx("th",{className:"p-3",children:"التلميذ"}),u.jsx("th",{className:"p-3",children:"الحالة"}),u.jsx("th",{className:"p-3",children:"وقت التسجيل"})]})}),u.jsx("tbody",{children:p.map(A=>u.jsxs("tr",{className:"border-b border-slate-100",children:[u.jsx("td",{className:"p-3",children:A.date}),u.jsx("td",{className:"p-3 font-bold",children:A.studentName}),u.jsx("td",{className:"p-3",children:A.status}),u.jsx("td",{className:"p-3",children:fi(A.timestamp)})]},A.id))})]}),!p.length&&u.jsx("p",{className:"p-8 text-center font-bold text-slate-500",children:"لا توجد سجلات محلية لهذا التاريخ."})]})]}),r==="students"&&u.jsxs("section",{className:"grid gap-4 md:grid-cols-2",children:[l.map(A=>u.jsxs("article",{className:"rounded-2xl border border-amber-200 bg-white p-5 shadow-sm",children:[u.jsx("h2",{className:"font-black text-slate-900",children:A.full_name}),u.jsx("p",{className:"mt-1 text-sm text-slate-500",children:A.academic_level||A.level_id||"المستوى غير محدد"}),u.jsxs("p",{className:"mt-2 text-xs text-slate-400",children:["أرشف في ",fi(A.archivedAt)]}),u.jsx("button",{type:"button",onClick:()=>E(A.id),className:"mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700",children:"إعادة تفعيل"})]},A.id)),!l.length&&u.jsx("p",{className:"rounded-2xl bg-white p-8 text-center font-bold text-slate-500",children:"لا توجد ملفات مؤرشفة."})]}),r==="activity"&&u.jsxs("section",{className:"space-y-3",children:[d.map(A=>u.jsxs("article",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",children:[u.jsxs("div",{className:"flex justify-between gap-3",children:[u.jsx("strong",{className:"text-[#1E3E62]",children:A.type}),u.jsx("time",{className:"text-xs text-slate-400",children:fi(A.timestamp)})]}),u.jsx("p",{className:"mt-2 text-sm text-slate-600",children:A.details})]},A.id)),!d.length&&u.jsx("p",{className:"rounded-2xl bg-white p-8 text-center font-bold text-slate-500",children:"لا توجد أنشطة مسجلة بعد."})]})]})}const Ri={"نظام إدارة الأكاديمية":"Système de gestion de l’académie","إغلاق القائمة":"Fermer le menu",الإشعارات:"Notifications",المستخدم:"Utilisateur","تسجيل الخروج":"Se déconnecter","لوحة التحكم":"Tableau de bord","إدارة التلاميذ":"Gestion des élèves","الحضور والغياب":"Présence et absences","إدارة الأساتذة":"Gestion des enseignants","المالية والأداءات":"Finances et paiements","التقارير المالية":"Rapports financiers","إعدادات النظام":"Paramètres du système","مرحباً بك 👋":"Bienvenue 👋",أونلاين:"En ligne","نظرة عامة على أداء ومداخيل المركز هذا الشهر":"Vue d’ensemble des performances et des revenus du centre ce mois-ci","إضافة / إدارة التلاميذ 👥":"Ajouter / gérer les élèves 👥","تسجيل الحضور اليومي ✅":"Enregistrer la présence du jour ✅","تسجيل الأداءات المالية 💰":"Enregistrer les paiements 💰","إجمالي التلاميذ":"Total des élèves","عدد الأساتذة":"Nombre d’enseignants","الحضور اليوم":"Présence du jour","مداخيل الشهر":"Revenus du mois","مؤشرات الأداء السريعة 📊":"Indicateurs rapides 📊","نسبة الحضور المسجلة اليوم":"Taux de présence enregistré aujourd’hui","حالة المداخيل المستحقة":"État des revenus dus","تأكد من متابعة أداءات التلاميذ المتبقية عبر صفحة الأداءات المالية.":"Suivez les paiements restants depuis la page des finances.","⚙️ إعدادات الأكاديمية":"⚙️ Paramètres de l’Académie","التحكم في الهوية، الألوان، اللغة، المشرفين، وبيانات المؤسسة.":"Gérez l’identité, les couleurs, la langue, les administrateurs et les informations de l’établissement.","🎨 الهوية والألوان واللغة":"🎨 Identité, couleurs et langue","👥 إدارة المشرفين":"👥 Gestion des administrateurs","📋 بيانات المؤسسة":"📋 Informations de l’établissement","تخصيص اللوغو، الألوان، واللغة":"Personnaliser le logo, les couleurs et la langue","اسم المؤسسة / الأكاديمية *":"Nom de l’établissement / académie *","رابط اللوغو":"URL du logo","معاينة اللوغو:":"Aperçu du logo :","لون خلفية الصفحة":"Couleur d’arrière-plan","رمادي فاتح هادئ":"Gris clair doux","أبيض عاجي":"Blanc ivoire","وضع مظلم":"Mode sombre","دافئ خفيف":"Chaleur légère","لغة النظام":"Langue du système",العربية:"Arabe","اللون الرئيسي للهوية":"Couleur principale de l’identité","جاري الحفظ...":"Enregistrement...","حفظ التغييرات ✅":"Enregistrer les modifications ✅","إدارة المشرفين":"Gestion des administrateurs","هذه القائمة مخصصة لتسجيل الحسابات المعتمدة كمشرفين داخل إعدادات الأكاديمية.":"Cette liste sert à enregistrer les comptes autorisés comme administrateurs de l’académie.","إضافة طالب جديد":"Ajouter un élève","الاسم الكامل":"Nom complet","المستوى الدراسي":"Niveau scolaire","هاتف ولي الأمر":"Téléphone du parent","الواجب الشهري":"Frais mensuels","حفظ التلميذ":"Enregistrer l’élève",إلغاء:"Annuler","بحث عن تلميذ...":"Rechercher un élève...","لا توجد بيانات":"Aucune donnée","الأرشيف والسجلات":"Archives et historique","أرشيف الحضور":"Archives de présence","الطلاب المؤرشفون":"Élèves archivés","سجل النشاط":"Journal d’activité","اختر تاريخا مخصصا":"Choisir une date personnalisée","أو اختر شهرا":"Ou choisir un mois","تصدير السجل":"Exporter le journal",التاريخ:"Date",التلميذ:"Élève",الحالة:"Statut","وقت التسجيل":"Heure d’enregistrement","إعادة تفعيل":"Réactiver","لا توجد ملفات مؤرشفة.":"Aucun dossier archivé.","لا توجد أنشطة مسجلة بعد.":"Aucune activité enregistrée.","جاري تحميل الإعدادات...":"Chargement des paramètres...","تم حفظ التغييرات وتطبيقها فوراً في الموقع كامل! ✅":"Modifications enregistrées et appliquées partout ! ✅"},DI={placeholder:Ri,title:Ri,"aria-label":Ri},ba=new WeakMap,xa=new WeakMap,wp=(r,e)=>{if(r.nodeType===Node.TEXT_NODE){const t=r.nodeValue||"",n=t.trim();if(!n)return;ba.has(r)||ba.set(r,n);const s=ba.get(r),i=e&&Ri[s]||s,o=t.replace(n,i);o!==t&&(r.nodeValue=o);return}r.nodeType===Node.ELEMENT_NODE&&(Object.entries(DI).forEach(([t,n])=>{const s=r.getAttribute(t);if(!s)return;xa.has(r)||xa.set(r,{});const i=xa.get(r);i[t]||(i[t]=s);const o=i[t],l=e&&n[o]||o;l!==s&&r.setAttribute(t,l)}),["SCRIPT","STYLE","TEXTAREA"].includes(r.tagName)||r.childNodes.forEach(t=>wp(t,e)))};function VI(){const{settings:r}=Os(),e=r?.branding?.language==="fr";return M.useEffect(()=>{const t=()=>wp(document.body,e);t();let n=!1;const s=new MutationObserver(()=>{n||(n=!0,t(),n=!1)});return s.observe(document.body,{childList:!0,subtree:!0,characterData:!0}),()=>s.disconnect()},[e]),null}class jI extends rg.Component{constructor(){super(...arguments);au(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){console.error("Application rendering error:",t)}render(){return this.state.hasError?u.jsx("div",{className:"flex min-h-screen items-center justify-center bg-slate-100 p-6 text-center",dir:"rtl",children:u.jsxs("div",{className:"max-w-md rounded-2xl border border-amber-200 bg-white p-8 shadow-xl",children:[u.jsx("h1",{className:"text-xl font-black text-[#0B192C]",children:"حدث خطأ غير متوقع"}),u.jsx("p",{className:"mt-3 text-sm font-semibold text-slate-700",children:"يرجى إعادة تحميل الصفحة للمتابعة."}),u.jsx("button",{type:"button",onClick:()=>window.location.reload(),className:"mt-6 rounded-xl bg-[#0B192C] px-5 py-3 font-black text-white hover:bg-[#1E3E62]",children:"إعادة تحميل الصفحة"})]})}):this.props.children}}function qr({children:r,allowedRoles:e=[]}){const{currentUser:t,userRole:n,loading:s}=js(),i=ad();return s?u.jsx("div",{dir:"rtl",className:"min-h-[60vh] flex items-center justify-center p-6",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-10 h-10 border-4 border-slate-200 border-t-slate-700 rounded-full animate-spin mx-auto mb-4"}),u.jsx("p",{className:"text-slate-600 font-medium",children:"جاري التحقق من تسجيل الدخول..."})]})}):t?e.length>0&&(!n||!e.includes(n))?u.jsx("div",{dir:"rtl",className:"min-h-[60vh] flex flex-col items-center justify-center text-center p-6",children:u.jsxs("div",{className:"max-w-md",children:[u.jsx("div",{className:"text-6xl mb-5",children:"🔒"}),u.jsx("h1",{className:"text-4xl font-extrabold text-red-600 mb-3",children:"403"}),u.jsx("h2",{className:"text-xl font-bold text-slate-800 mb-3",children:"وصول غير مصرح"}),u.jsx("p",{className:"text-slate-600 font-medium leading-7",children:"عذراً، ليس لديك الصلاحية الكافية للوصول إلى هذه الصفحة. يرجى التواصل مع إدارة أكاديمية إسهام."}),u.jsx("button",{type:"button",onClick:()=>window.history.back(),className:"mt-6 px-5 py-2.5 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition",children:"العودة"})]})}):r:u.jsx(Ni,{to:"/login",replace:!0,state:{from:i.pathname}})}function OI(){const{currentUser:r,userRole:e,loading:t}=js(),{settings:n}=Os(),s=ad(),[i,o]=M.useState(!1),l=n?.branding?.bgColor||"bg-slate-50",d=(n?.branding?.language||"ar")!=="fr";return t?u.jsxs("div",{className:"h-screen w-screen flex flex-col items-center justify-center bg-slate-900 text-white dir-rtl",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"}),u.jsx("p",{className:"text-sm font-semibold text-slate-300",children:"جاري التحقق من بيانات الدخول..."})]}):r?e?u.jsxs("div",{className:`flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ${d?"text-right dir-rtl":"text-left dir-ltr"}`,dir:d?"rtl":"ltr",children:[u.jsx(gI,{mobileOpen:i,setMobileOpen:o}),u.jsxs("div",{className:"flex-1 flex flex-col min-w-0 min-h-screen overflow-hidden",children:[u.jsx(_I,{setMobileOpen:o}),u.jsx("main",{className:`flex-1 overflow-y-auto overflow-x-auto p-3 sm:p-4 md:p-6 ${l}`,children:u.jsx(og,{})})]})]}):u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 p-6 text-center",dir:"rtl",children:u.jsxs("div",{className:"max-w-md rounded-2xl bg-white p-8 shadow-xl",children:[u.jsx("h1",{className:"text-xl font-bold text-slate-900",children:"لا توجد صلاحية لهذا الحساب"}),u.jsx("p",{className:"mt-3 text-sm text-slate-600",children:"يرجى التواصل مع إدارة الأكاديمية لمنح الحساب صلاحية مناسبة."})]})}):u.jsx(Ni,{to:"/login",replace:!0,state:{from:s.pathname}})}function MI(){return u.jsx(fI,{children:u.jsx(TI,{children:u.jsxs(pI,{children:[u.jsx(VI,{}),u.jsx(sg,{children:u.jsx(jI,{children:u.jsxs(ig,{children:[u.jsx(Ye,{path:"/login",element:u.jsx(vI,{})}),u.jsxs(Ye,{element:u.jsx(OI,{}),children:[u.jsx(Ye,{index:!0,element:u.jsx(Ni,{to:"/dashboard",replace:!0})}),u.jsx(Ye,{path:"dashboard",element:u.jsx(bI,{})}),u.jsx(Ye,{path:"students",element:u.jsx(AI,{})}),u.jsx(Ye,{path:"attendance",element:u.jsx(SI,{})}),u.jsx(Ye,{path:"teachers",element:u.jsx(qr,{allowedRoles:["admin"],children:u.jsx(RI,{})})}),u.jsx(Ye,{path:"payments",element:u.jsx(qr,{allowedRoles:["admin"],children:u.jsx(NI,{})})}),u.jsx(Ye,{path:"financials",element:u.jsx(qr,{allowedRoles:["admin"],children:u.jsx(PI,{})})}),u.jsx(Ye,{path:"settings",element:u.jsx(qr,{allowedRoles:["admin"],children:u.jsx(CI,{})})}),u.jsx(Ye,{path:"archive",element:u.jsx(qr,{allowedRoles:["admin"],children:u.jsx(kI,{})})}),u.jsx(Ye,{path:"*",element:u.jsx(Ni,{to:"/dashboard",replace:!0})})]})]})})})]})})})}const Ip=document.getElementById("root");if(!Ip)throw new Error('Root element "#root" was not found.');ud(Ip).render(u.jsx(M.StrictMode,{children:u.jsx(MI,{})}));
