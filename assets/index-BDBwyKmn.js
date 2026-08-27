import{r as L,a as Np,N as Pp,u as Bh,L as Lo,H as Cp,R as kp,b as tt,c as ra,d as Dp,O as Vp}from"./react-BLpoLtNc.js";import{_ as Ma,c as Op}from"./supabase-R06Uq91X.js";import{D as jp,C as Mp,a as Lp,S as Fp,P as Up,b as Bp}from"./icons-LEVtn6O7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var qh={exports:{}},Bi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=L,$p=Symbol.for("react.element"),zp=Symbol.for("react.fragment"),Kp=Object.prototype.hasOwnProperty,Gp=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wp={key:!0,ref:!0,__self:!0,__source:!0};function $h(r,e,t){var n,s={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)Kp.call(e,n)&&!Wp.hasOwnProperty(n)&&(s[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:$p,type:r,key:i,ref:o,props:s,_owner:Gp.current}}Bi.Fragment=zp;Bi.jsx=$h;Bi.jsxs=$h;qh.exports=Bi;var h=qh.exports,zh,$c=Np;zh=$c.createRoot,$c.hydrateRoot;var zc={};/**
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
 */const Kh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Hp=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],l=r[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,l=o?r[s+1]:0,c=s+2<r.length,d=c?r[s+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,T=d&63;c||(T=64,o||(v=64)),n.push(t[m],t[p],t[v],t[T])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Kh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Hp(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],l=s<r.length?t[r.charAt(s)]:0;++s;const d=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||l==null||d==null||p==null)throw new Qp;const v=i<<2|l>>4;if(n.push(v),d!==64){const T=l<<4&240|d>>2;if(n.push(T),p!==64){const S=d<<6&192|p;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Qp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jp=function(r){const e=Kh(r);return Gh.encodeByteArray(e,!0)},gi=function(r){return Jp(r).replace(/\./g,"")},Wh=function(r){try{return Gh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xp=()=>Yp().__FIREBASE_DEFAULTS__,Zp=()=>{if(typeof process>"u"||typeof zc>"u")return;const r=zc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},eg=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Wh(r[1]);return e&&JSON.parse(e)},qi=()=>{try{return Xp()||Zp()||eg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Hh=r=>{var e,t;return(t=(e=qi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},tg=r=>{const e=Hh(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Qh=()=>{var r;return(r=qi())===null||r===void 0?void 0:r.config},Jh=r=>{var e;return(e=qi())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class ng{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function rg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[gi(JSON.stringify(t)),gi(JSON.stringify(o)),""].join(".")}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function ig(){var r;const e=(r=qi())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function og(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ag(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function lg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cg(){const r=Te();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Yh(){return!ig()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xh(){try{return typeof indexedDB=="object"}catch{return!1}}function ug(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const hg="FirebaseError";class mt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=hg,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?dg(i,n):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new mt(s,l,n)}}function dg(r,e){return r.replace(fg,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const fg=/\{\$([^}]+)}/g;function mg(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ts(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Kc(i)&&Kc(o)){if(!ts(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Kc(r){return r!==null&&typeof r=="object"}/**
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
 */function _s(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Br(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qr(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function pg(r,e){const t=new gg(r,e);return t.subscribe.bind(t)}class gg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");_g(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Fo),s.error===void 0&&(s.error=Fo),s.complete===void 0&&(s.complete=Fo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _g(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Fo(){}/**
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
 */const hn="[DEFAULT]";/**
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
 */class yg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new ng;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bg(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:vg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vg(r){return r===hn?void 0:r}function bg(r){return r.instantiationMode==="EAGER"}/**
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
 */class wg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Z||(Z={}));const Ig={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},xg=Z.INFO,Eg={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Tg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Eg[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class La{constructor(e){this.name=e,this._logLevel=xg,this._logHandler=Tg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ig[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Ag=(r,e)=>e.some(t=>r instanceof t);let Gc,Wc;function Sg(){return Gc||(Gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rg(){return Wc||(Wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zh=new WeakMap,sa=new WeakMap,ed=new WeakMap,Uo=new WeakMap,Fa=new WeakMap;function Ng(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(qt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Zh.set(t,r)}).catch(()=>{}),Fa.set(e,r),e}function Pg(r){if(sa.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});sa.set(r,e)}let ia={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return sa.get(r);if(e==="objectStoreNames")return r.objectStoreNames||ed.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Cg(r){ia=r(ia)}function kg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Bo(this),e,...t);return ed.set(n,e.sort?e.sort():[e]),qt(n)}:Rg().includes(r)?function(...e){return r.apply(Bo(this),e),qt(Zh.get(this))}:function(...e){return qt(r.apply(Bo(this),e))}}function Dg(r){return typeof r=="function"?kg(r):(r instanceof IDBTransaction&&Pg(r),Ag(r,Sg())?new Proxy(r,ia):r)}function qt(r){if(r instanceof IDBRequest)return Ng(r);if(Uo.has(r))return Uo.get(r);const e=Dg(r);return e!==r&&(Uo.set(r,e),Fa.set(e,r)),e}const Bo=r=>Fa.get(r);function Vg(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),l=qt(o);return n&&o.addEventListener("upgradeneeded",c=>{n(qt(o.result),c.oldVersion,c.newVersion,qt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Og=["get","getKey","getAll","getAllKeys","count"],jg=["put","add","delete","clear"],qo=new Map;function Hc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(qo.get(e))return qo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=jg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Og.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let d=c.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&c.done]))[0]};return qo.set(e,i),i}Cg(r=>({...r,get:(e,t,n)=>Hc(e,t)||r.get(e,t,n),has:(e,t)=>!!Hc(e,t)||r.has(e,t)}));/**
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
 */class Mg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Lg(r){const e=r.getComponent();return e?.type==="VERSION"}const oa="@firebase/app",Qc="0.10.13";/**
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
 */const Et=new La("@firebase/app"),Fg="@firebase/app-compat",Ug="@firebase/analytics-compat",Bg="@firebase/analytics",qg="@firebase/app-check-compat",$g="@firebase/app-check",zg="@firebase/auth",Kg="@firebase/auth-compat",Gg="@firebase/database",Wg="@firebase/data-connect",Hg="@firebase/database-compat",Qg="@firebase/functions",Jg="@firebase/functions-compat",Yg="@firebase/installations",Xg="@firebase/installations-compat",Zg="@firebase/messaging",e_="@firebase/messaging-compat",t_="@firebase/performance",n_="@firebase/performance-compat",r_="@firebase/remote-config",s_="@firebase/remote-config-compat",i_="@firebase/storage",o_="@firebase/storage-compat",a_="@firebase/firestore",l_="@firebase/vertexai-preview",c_="@firebase/firestore-compat",u_="firebase",h_="10.14.1";/**
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
 */const aa="[DEFAULT]",d_={[oa]:"fire-core",[Fg]:"fire-core-compat",[Bg]:"fire-analytics",[Ug]:"fire-analytics-compat",[$g]:"fire-app-check",[qg]:"fire-app-check-compat",[zg]:"fire-auth",[Kg]:"fire-auth-compat",[Gg]:"fire-rtdb",[Wg]:"fire-data-connect",[Hg]:"fire-rtdb-compat",[Qg]:"fire-fn",[Jg]:"fire-fn-compat",[Yg]:"fire-iid",[Xg]:"fire-iid-compat",[Zg]:"fire-fcm",[e_]:"fire-fcm-compat",[t_]:"fire-perf",[n_]:"fire-perf-compat",[r_]:"fire-rc",[s_]:"fire-rc-compat",[i_]:"fire-gcs",[o_]:"fire-gcs-compat",[a_]:"fire-fst",[c_]:"fire-fst-compat",[l_]:"fire-vertex","fire-js":"fire-js",[u_]:"fire-js-all"};/**
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
 */const _i=new Map,f_=new Map,la=new Map;function Jc(r,e){try{r.container.addComponent(e)}catch(t){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function vn(r){const e=r.name;if(la.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;la.set(e,r);for(const t of _i.values())Jc(t,r);for(const t of f_.values())Jc(t,r);return!0}function $i(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function yt(r){return r.settings!==void 0}/**
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
 */const m_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new gs("app","Firebase",m_);/**
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
 */class p_{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const Rn=h_;function td(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:aa,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});if(t||(t=Qh()),!t)throw $t.create("no-options");const i=_i.get(s);if(i){if(ts(t,i.options)&&ts(n,i.config))return i;throw $t.create("duplicate-app",{appName:s})}const o=new wg(s);for(const c of la.values())o.addComponent(c);const l=new p_(t,n,o);return _i.set(s,l),l}function nd(r=aa){const e=_i.get(r);if(!e&&r===aa&&Qh())return td();if(!e)throw $t.create("no-app",{appName:r});return e}function lt(r,e,t){var n;let s=(n=d_[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(l.join(" "));return}vn(new Wt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const g_="firebase-heartbeat-database",__=1,ns="firebase-heartbeat-store";let $o=null;function rd(){return $o||($o=Vg(g_,__,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ns)}catch(t){console.warn(t)}}}}).catch(r=>{throw $t.create("idb-open",{originalErrorMessage:r.message})})),$o}async function y_(r){try{const t=(await rd()).transaction(ns),n=await t.objectStore(ns).get(sd(r));return await t.done,n}catch(e){if(e instanceof mt)Et.warn(e.message);else{const t=$t.create("idb-get",{originalErrorMessage:e?.message});Et.warn(t.message)}}}async function Yc(r,e){try{const n=(await rd()).transaction(ns,"readwrite");await n.objectStore(ns).put(e,sd(r)),await n.done}catch(t){if(t instanceof mt)Et.warn(t.message);else{const n=$t.create("idb-set",{originalErrorMessage:t?.message});Et.warn(n.message)}}}function sd(r){return`${r.name}!${r.options.appId}`}/**
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
 */const v_=1024,b_=30*24*60*60*1e3;class w_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new x_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=b_}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Et.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xc(),{heartbeatsToSend:n,unsentEntries:s}=I_(this._heartbeatsCache.heartbeats),i=gi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Et.warn(t),""}}}function Xc(){return new Date().toISOString().substring(0,10)}function I_(r,e=v_){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Zc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class x_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xh()?ug().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await y_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zc(r){return gi(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function E_(r){vn(new Wt("platform-logger",e=>new Mg(e),"PRIVATE")),vn(new Wt("heartbeat",e=>new w_(e),"PRIVATE")),lt(oa,Qc,r),lt(oa,Qc,"esm2017"),lt("fire-js","")}E_("");var T_="firebase",A_="10.14.1";/**
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
 */lt(T_,A_,"app");function id(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S_=id,od=new gs("auth","Firebase",id());/**
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
 */const yi=new La("@firebase/auth");function R_(r,...e){yi.logLevel<=Z.WARN&&yi.warn(`Auth (${Rn}): ${r}`,...e)}function ri(r,...e){yi.logLevel<=Z.ERROR&&yi.error(`Auth (${Rn}): ${r}`,...e)}/**
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
 */function rt(r,...e){throw Ua(r,...e)}function ct(r,...e){return Ua(r,...e)}function ad(r,e,t){const n=Object.assign(Object.assign({},S_()),{[e]:t});return new gs("auth","Firebase",n).create(e,{appName:r.name})}function zt(r){return ad(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ua(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return od.create(r,...e)}function Q(r,e,...t){if(!r)throw Ua(e,...t)}function vt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ri(e),new Error(e)}function Tt(r,e){r||vt(e)}/**
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
 */function ca(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function N_(){return eu()==="http:"||eu()==="https:"}function eu(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function P_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(N_()||ag()||"connection"in navigator)?navigator.onLine:!0}function C_(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ys{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile=sg()||lg()}get(){return P_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ba(r,e){Tt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ld{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const k_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const D_=new ys(3e4,6e4);function Nn(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Yt(r,e,t,n,s={}){return cd(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const l=_s(Object.assign({key:r.config.apiKey},o)).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const d=Object.assign({method:e,headers:c},i);return og()||(d.referrerPolicy="no-referrer"),ld.fetch()(ud(r,r.config.apiHost,t,l),d)})}async function cd(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},k_),e);try{const s=new O_(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Hs(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hs(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Hs(r,"email-already-in-use",o);if(c==="USER_DISABLED")throw Hs(r,"user-disabled",o);const m=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ad(r,m,d);rt(r,m)}}catch(s){if(s instanceof mt)throw s;rt(r,"network-request-failed",{message:String(s)})}}async function zi(r,e,t,n,s={}){const i=await Yt(r,e,t,n,s);return"mfaPendingCredential"in i&&rt(r,"multi-factor-auth-required",{_serverResponse:i}),i}function ud(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?Ba(r.config,s):`${r.config.apiScheme}://${s}`}function V_(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class O_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(ct(this.auth,"network-request-failed")),D_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hs(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=ct(r,e,n);return s.customData._tokenResponse=t,s}function tu(r){return r!==void 0&&r.enterprise!==void 0}class j_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return V_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function M_(r,e){return Yt(r,"GET","/v2/recaptchaConfig",Nn(r,e))}/**
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
 */async function L_(r,e){return Yt(r,"POST","/v1/accounts:delete",e)}async function hd(r,e){return Yt(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function F_(r,e=!1){const t=Ie(r),n=await t.getIdToken(e),s=qa(n);Q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:n,authTime:Hr(zo(s.auth_time)),issuedAtTime:Hr(zo(s.iat)),expirationTime:Hr(zo(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function zo(r){return Number(r)*1e3}function qa(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ri("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wh(t);return s?JSON.parse(s):(ri("Failed to decode base64 JWT payload"),null)}catch(s){return ri("Caught error parsing JWT payload as JSON",s?.toString()),null}}function nu(r){const e=qa(r);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rs(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof mt&&U_(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function U_({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class B_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ua{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vi(r){var e;const t=r.auth,n=await r.getIdToken(),s=await rs(r,hd(t,{idToken:n}));Q(s?.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dd(i.providerUserInfo):[],l=$_(r.providerData,o),c=r.isAnonymous,d=!(r.email&&i.passwordHash)&&!l?.length,m=c?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ua(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(r,p)}async function q_(r){const e=Ie(r);await vi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $_(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function dd(r){return r.map(e=>{var{providerId:t}=e,n=Ma(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function z_(r,e){const t=await cd(r,{},async()=>{const n=_s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=ud(r,s,"/v1/token",`key=${i}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ld.fetch()(o,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function K_(r,e){return Yt(r,"POST","/v2/accounts:revokeToken",Nn(r,e))}/**
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
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=nu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await z_(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Yn;return n&&(Q(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
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
 */function Dt(r,e){Q(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=Ma(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ua(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await rs(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return F_(this,e)}reload(){return q_(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await vi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await rs(this,L_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,l,c,d,m;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=t.photoURL)!==null&&o!==void 0?o:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,z=(d=t.createdAt)!==null&&d!==void 0?d:void 0,j=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:M,emailVerified:q,isAnonymous:N,providerData:P,stsTokenManager:w}=t;Q(M&&w,e,"internal-error");const _=Yn.fromJSON(this.name,w);Q(typeof M=="string",e,"internal-error"),Dt(p,e.name),Dt(v,e.name),Q(typeof q=="boolean",e,"internal-error"),Q(typeof N=="boolean",e,"internal-error"),Dt(T,e.name),Dt(S,e.name),Dt(D,e.name),Dt(C,e.name),Dt(z,e.name),Dt(j,e.name);const b=new bt({uid:M,auth:e,email:v,emailVerified:q,displayName:p,isAnonymous:N,photoURL:S,phoneNumber:T,tenantId:D,stsTokenManager:_,createdAt:z,lastLoginAt:j});return P&&Array.isArray(P)&&(b.providerData=P.map(x=>Object.assign({},x))),C&&(b._redirectEventId=C),b}static async _fromIdTokenResponse(e,t,n=!1){const s=new Yn;s.updateFromServerResponse(t);const i=new bt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await vi(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Yn;l.updateFromIdToken(n);const c=new bt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ua(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,d),c}}/**
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
 */const ru=new Map;function wt(r){Tt(r instanceof Function,"Expected a class definition");let e=ru.get(r);return e?(Tt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ru.set(r,e),e)}/**
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
 */class fd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fd.type="NONE";const su=fd;/**
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
 */function si(r,e,t){return`firebase:${r}:${e}:${t}`}class Xn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=si(this.userKey,s.apiKey,i),this.fullPersistenceKey=si("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Xn(wt(su),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||wt(su);const o=si(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(o);if(m){const p=bt._fromJSON(e,m);d!==i&&(l=p),i=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Xn(i,e,n):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Xn(i,e,n))}}/**
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
 */function iu(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_d(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(md(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vd(e))return"Blackberry";if(bd(e))return"Webos";if(pd(e))return"Safari";if((e.includes("chrome/")||gd(e))&&!e.includes("edge/"))return"Chrome";if(yd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function md(r=Te()){return/firefox\//i.test(r)}function pd(r=Te()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gd(r=Te()){return/crios\//i.test(r)}function _d(r=Te()){return/iemobile/i.test(r)}function yd(r=Te()){return/android/i.test(r)}function vd(r=Te()){return/blackberry/i.test(r)}function bd(r=Te()){return/webos/i.test(r)}function $a(r=Te()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function G_(r=Te()){var e;return $a(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function W_(){return cg()&&document.documentMode===10}function wd(r=Te()){return $a(r)||yd(r)||bd(r)||vd(r)||/windows phone/i.test(r)||_d(r)}/**
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
 */function Id(r,e=[]){let t;switch(r){case"Browser":t=iu(Te());break;case"Worker":t=`${iu(Te())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rn}/${n}`}/**
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
 */class H_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function Q_(r,e={}){return Yt(r,"GET","/v2/passwordPolicy",Nn(r,e))}/**
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
 */const J_=6;class Y_{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:J_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class X_{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ou(this),this.idTokenSubscription=new ou(this),this.beforeStateQueue=new H_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wt(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Xn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await hd(this,{idToken:e}),n=await bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(zt(this));const t=e?Ie(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Q_(this),t=new Y_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await K_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wt(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await Xn.create(this,[wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Id(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&R_(`Error while retrieving App Check token: ${t.error}`),t?.token}}function pr(r){return Ie(r)}class ou{constructor(e){this.auth=e,this.observer=null,this.addObserver=pg(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ki={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Z_(r){Ki=r}function xd(r){return Ki.loadJS(r)}function ey(){return Ki.recaptchaEnterpriseScript}function ty(){return Ki.gapiScript}function ny(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const ry="recaptcha-enterprise",sy="NO_RECAPTCHA";class iy{constructor(e){this.type=ry,this.auth=pr(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{M_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new j_(c);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;tu(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(sy)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{n(this.auth).then(l=>{if(!t&&tu(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ey();c.length!==0&&(c+=l),xd(c).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function au(r,e,t,n=!1){const s=new iy(r);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function lu(r,e,t,n){var s;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await au(r,e,t,t==="getOobCode");return n(r,i)}else return n(r,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await au(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(i)})}/**
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
 */function oy(r,e){const t=$i(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ts(i,e??{}))return s;rt(s,"already-initialized")}return t.initialize({options:e})}function ay(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(wt);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function ly(r,e,t){const n=pr(r);Q(n._canInitEmulator,n,"emulator-config-failed"),Q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Ed(e),{host:o,port:l}=cy(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${i}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),uy()}function Ed(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function cy(r){const e=Ed(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:cu(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:cu(o)}}}function cu(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function uy(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class za{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,t){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}}async function hy(r,e){return Yt(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dy(r,e){return zi(r,"POST","/v1/accounts:signInWithPassword",Nn(r,e))}/**
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
 */async function fy(r,e){return zi(r,"POST","/v1/accounts:signInWithEmailLink",Nn(r,e))}async function my(r,e){return zi(r,"POST","/v1/accounts:signInWithEmailLink",Nn(r,e))}/**
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
 */class ss extends za{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ss(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ss(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lu(e,t,"signInWithPassword",dy);case"emailLink":return fy(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lu(e,n,"signUpPassword",hy);case"emailLink":return my(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zn(r,e){return zi(r,"POST","/v1/accounts:signInWithIdp",Nn(r,e))}/**
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
 */const py="http://localhost";class bn extends za{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=Ma(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new bn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Zn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Zn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zn(e,t)}buildRequest(){const e={requestUri:py,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_s(t)}return e}}/**
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
 */function gy(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _y(r){const e=Br(qr(r)).link,t=e?Br(qr(e)).deep_link_id:null,n=Br(qr(r)).deep_link_id;return(n?Br(qr(n)).link:null)||n||t||e||r}class Ka{constructor(e){var t,n,s,i,o,l;const c=Br(qr(e)),d=(t=c.apiKey)!==null&&t!==void 0?t:null,m=(n=c.oobCode)!==null&&n!==void 0?n:null,p=gy((s=c.mode)!==null&&s!==void 0?s:null);Q(d&&m&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=m,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=_y(e);try{return new Ka(t)}catch{return null}}}/**
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
 */class gr{constructor(){this.providerId=gr.PROVIDER_ID}static credential(e,t){return ss._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ka.parseLink(t);return Q(n,"argument-error"),ss._fromEmailAndCode(e,n.code,n.tenantId)}}gr.PROVIDER_ID="password";gr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Td{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vs extends Td{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jt extends vs{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
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
 */class Mt extends vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Mt.credential(t,n)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
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
 */class Lt extends vs{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
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
 */class Ft extends vs{constructor(){super("twitter.com")}static credential(e,t){return bn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ft.credential(t,n)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
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
 */class tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await bt._fromIdTokenResponse(e,n,s),o=uu(n);return new tr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=uu(n);return new tr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function uu(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class bi extends mt{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,bi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new bi(e,t,n,s)}}function Ad(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bi._fromErrorAndOperation(r,i,e,n):i})}async function yy(r,e,t=!1){const n=await rs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return tr._forOperation(r,"link",n)}/**
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
 */async function vy(r,e,t=!1){const{auth:n}=r;if(yt(n.app))return Promise.reject(zt(n));const s="reauthenticate";try{const i=await rs(r,Ad(n,s,e,r),t);Q(i.idToken,n,"internal-error");const o=qa(i.idToken);Q(o,n,"internal-error");const{sub:l}=o;return Q(r.uid===l,n,"user-mismatch"),tr._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&rt(n,"user-mismatch"),i}}/**
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
 */async function Sd(r,e,t=!1){if(yt(r.app))return Promise.reject(zt(r));const n="signIn",s=await Ad(r,n,e),i=await tr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function by(r,e){return Sd(pr(r),e)}/**
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
 */async function wy(r){const e=pr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Iy(r,e,t){return yt(r.app)?Promise.reject(zt(r)):by(Ie(r),gr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&wy(r),n})}function xy(r,e,t,n){return Ie(r).onIdTokenChanged(e,t,n)}function Ey(r,e,t){return Ie(r).beforeAuthStateChanged(e,t)}function Ty(r,e,t,n){return Ie(r).onAuthStateChanged(e,t,n)}function Ay(r){return Ie(r).signOut()}const wi="__sak";/**
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
 */class Rd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wi,"1"),this.storage.removeItem(wi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Sy=1e3,Ry=10;class Nd extends Rd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);W_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ry):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Sy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nd.type="LOCAL";const Ny=Nd;/**
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
 */class Pd extends Rd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pd.type="SESSION";const Cd=Pd;/**
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
 */function Py(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Gi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Gi(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(o).map(async d=>d(t.origin,i)),c=await Py(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gi.receivers=[];/**
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
 */function Ga(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Cy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const d=Ga("",20);s.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(m),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ut(){return window}function ky(r){ut().location.href=r}/**
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
 */function kd(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function Dy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vy(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Oy(){return kd()?self:null}/**
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
 */const Dd="firebaseLocalStorageDb",jy=1,Ii="firebaseLocalStorage",Vd="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wi(r,e){return r.transaction([Ii],e?"readwrite":"readonly").objectStore(Ii)}function My(){const r=indexedDB.deleteDatabase(Dd);return new bs(r).toPromise()}function ha(){const r=indexedDB.open(Dd,jy);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Ii,{keyPath:Vd})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Ii)?e(n):(n.close(),await My(),e(await ha()))})})}async function hu(r,e,t){const n=Wi(r,!0).put({[Vd]:e,value:t});return new bs(n).toPromise()}async function Ly(r,e){const t=Wi(r,!1).get(e),n=await new bs(t).toPromise();return n===void 0?null:n.value}function du(r,e){const t=Wi(r,!0).delete(e);return new bs(t).toPromise()}const Fy=800,Uy=3;class Od{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ha(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Uy)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gi._getInstance(Oy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Dy(),!this.activeServiceWorker)return;this.sender=new Cy(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ha();return await hu(e,wi,"1"),await du(e,wi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hu(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Ly(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>du(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wi(s,!1).getAll();return new bs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Od.type="LOCAL";const By=Od;new ys(3e4,6e4);/**
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
 */function qy(r,e){return e?wt(e):(Q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Wa extends za{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $y(r){return Sd(r.auth,new Wa(r),r.bypassAuthState)}function zy(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),vy(t,new Wa(r),r.bypassAuthState)}async function Ky(r){const{auth:e,user:t}=r;return Q(t,e,"internal-error"),yy(t,new Wa(r),r.bypassAuthState)}/**
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
 */class jd{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $y;case"linkViaPopup":case"linkViaRedirect":return Ky;case"reauthViaPopup":case"reauthViaRedirect":return zy;default:rt(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gy=new ys(2e3,1e4);class Jn extends jd{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=Ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gy.get())};e()}}Jn.currentPopupAction=null;/**
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
 */const Wy="pendingRedirect",ii=new Map;class Hy extends jd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ii.get(this.auth._key());if(!e){try{const n=await Qy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ii.set(this.auth._key(),e)}return this.bypassAuthState||ii.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qy(r,e){const t=Xy(e),n=Yy(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Jy(r,e){ii.set(r._key(),e)}function Yy(r){return wt(r._redirectPersistence)}function Xy(r){return si(Wy,r.config.apiKey,r.name)}async function Zy(r,e,t=!1){if(yt(r.app))return Promise.reject(zt(r));const n=pr(r),s=qy(n,e),o=await new Hy(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const ev=10*60*1e3;class tv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Md(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(ct(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ev&&this.cachedEventUids.clear(),this.cachedEventUids.has(fu(e))}saveEventToCache(e){this.cachedEventUids.add(fu(e)),this.lastProcessedEventTime=Date.now()}}function fu(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Md({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function nv(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Md(r);default:return!1}}/**
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
 */async function rv(r,e={}){return Yt(r,"GET","/v1/projects",e)}/**
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
 */const sv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iv=/^https?/;async function ov(r){if(r.config.emulator)return;const{authorizedDomains:e}=await rv(r);for(const t of e)try{if(av(t))return}catch{}rt(r,"unauthorized-domain")}function av(r){const e=ca(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!iv.test(t))return!1;if(sv.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const lv=new ys(3e4,6e4);function mu(){const r=ut().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function cv(r){return new Promise((e,t)=>{var n,s,i;function o(){mu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mu(),t(ct(r,"network-request-failed"))},timeout:lv.get()})}if(!((s=(n=ut().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ut().gapi)===null||i===void 0)&&i.load)o();else{const l=ny("iframefcb");return ut()[l]=()=>{gapi.load?o():t(ct(r,"network-request-failed"))},xd(`${ty()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw oi=null,e})}let oi=null;function uv(r){return oi=oi||cv(r),oi}/**
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
 */const hv=new ys(5e3,15e3),dv="__/auth/iframe",fv="emulator/auth/iframe",mv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gv(r){const e=r.config;Q(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ba(e,fv):`https://${r.config.authDomain}/${dv}`,n={apiKey:e.apiKey,appName:r.name,v:Rn},s=pv.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${_s(n).slice(1)}`}async function _v(r){const e=await uv(r),t=ut().gapi;return Q(t,r,"internal-error"),e.open({where:document.body,url:gv(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mv,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=ct(r,"network-request-failed"),l=ut().setTimeout(()=>{i(o)},hv.get());function c(){ut().clearTimeout(l),s(n)}n.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const yv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vv=500,bv=600,wv="_blank",Iv="http://localhost";class pu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xv(r,e,t,n=vv,s=bv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},yv),{width:n.toString(),height:s.toString(),top:i,left:o}),d=Te().toLowerCase();t&&(l=gd(d)?wv:t),md(d)&&(e=e||Iv,c.scrollbars="yes");const m=Object.entries(c).reduce((v,[T,S])=>`${v}${T}=${S},`,"");if(G_(d)&&l!=="_self")return Ev(e||"",l),new pu(null);const p=window.open(e||"",l,m);Q(p,r,"popup-blocked");try{p.focus()}catch{}return new pu(p)}function Ev(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Tv="__/auth/handler",Av="emulator/auth/handler",Sv=encodeURIComponent("fac");async function gu(r,e,t,n,s,i){Q(r.config.authDomain,r,"auth-domain-config-required"),Q(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Rn,eventId:s};if(e instanceof Td){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",mg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))o[m]=p}if(e instanceof vs){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}r.tenantId&&(o.tid=r.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const c=await r._getAppCheckToken(),d=c?`#${Sv}=${encodeURIComponent(c)}`:"";return`${Rv(r)}?${_s(l).slice(1)}${d}`}function Rv({config:r}){return r.emulator?Ba(r,Av):`https://${r.authDomain}/${Tv}`}/**
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
 */const Ko="webStorageSupport";class Nv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cd,this._completeRedirectFn=Zy,this._overrideRedirectResult=Jy}async _openPopup(e,t,n,s){var i;Tt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await gu(e,t,n,ca(),s);return xv(e,o,Ga())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await gu(e,t,n,ca(),s);return ky(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Tt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await _v(e),n=new tv(e);return t.register("authEvent",s=>(Q(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ko,{type:Ko},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[Ko];o!==void 0&&t(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ov(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wd()||pd()||$a()}}const Pv=Nv;var _u="@firebase/auth",yu="1.7.9";/**
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
 */class Cv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kv(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dv(r){vn(new Wt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Id(r)},d=new X_(n,s,i,c);return ay(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),vn(new Wt("auth-internal",e=>{const t=pr(e.getProvider("auth").getImmediate());return(n=>new Cv(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(_u,yu,kv(r)),lt(_u,yu,"esm2017")}/**
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
 */const Vv=5*60,Ov=Jh("authIdTokenMaxAge")||Vv;let vu=null;const jv=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ov)return;const s=t?.token;vu!==s&&(vu=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mv(r=nd()){const e=$i(r,"auth");if(e.isInitialized())return e.getImmediate();const t=oy(r,{popupRedirectResolver:Pv,persistence:[By,Ny,Cd]}),n=Jh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=jv(i.toString());Ey(t,o,()=>o(t.currentUser)),xy(t,l=>o(l))}}const s=Hh("auth");return s&&ly(t,`http://${s}`),t}function Lv(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Z_({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=ct("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Lv().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dv("Browser");var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _n,Ld;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function b(){}b.prototype=_.prototype,w.D=_.prototype,w.prototype=new b,w.prototype.constructor=w,w.C=function(x,I,E){for(var y=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)y[ne-2]=arguments[ne];return _.prototype[I].apply(x,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,b){b||(b=0);var x=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)x[I]=_.charCodeAt(b++)|_.charCodeAt(b++)<<8|_.charCodeAt(b++)<<16|_.charCodeAt(b++)<<24;else for(I=0;16>I;++I)x[I]=_[b++]|_[b++]<<8|_[b++]<<16|_[b++]<<24;_=w.g[0],b=w.g[1],I=w.g[2];var E=w.g[3],y=_+(E^b&(I^E))+x[0]+3614090360&4294967295;_=b+(y<<7&4294967295|y>>>25),y=E+(I^_&(b^I))+x[1]+3905402710&4294967295,E=_+(y<<12&4294967295|y>>>20),y=I+(b^E&(_^b))+x[2]+606105819&4294967295,I=E+(y<<17&4294967295|y>>>15),y=b+(_^I&(E^_))+x[3]+3250441966&4294967295,b=I+(y<<22&4294967295|y>>>10),y=_+(E^b&(I^E))+x[4]+4118548399&4294967295,_=b+(y<<7&4294967295|y>>>25),y=E+(I^_&(b^I))+x[5]+1200080426&4294967295,E=_+(y<<12&4294967295|y>>>20),y=I+(b^E&(_^b))+x[6]+2821735955&4294967295,I=E+(y<<17&4294967295|y>>>15),y=b+(_^I&(E^_))+x[7]+4249261313&4294967295,b=I+(y<<22&4294967295|y>>>10),y=_+(E^b&(I^E))+x[8]+1770035416&4294967295,_=b+(y<<7&4294967295|y>>>25),y=E+(I^_&(b^I))+x[9]+2336552879&4294967295,E=_+(y<<12&4294967295|y>>>20),y=I+(b^E&(_^b))+x[10]+4294925233&4294967295,I=E+(y<<17&4294967295|y>>>15),y=b+(_^I&(E^_))+x[11]+2304563134&4294967295,b=I+(y<<22&4294967295|y>>>10),y=_+(E^b&(I^E))+x[12]+1804603682&4294967295,_=b+(y<<7&4294967295|y>>>25),y=E+(I^_&(b^I))+x[13]+4254626195&4294967295,E=_+(y<<12&4294967295|y>>>20),y=I+(b^E&(_^b))+x[14]+2792965006&4294967295,I=E+(y<<17&4294967295|y>>>15),y=b+(_^I&(E^_))+x[15]+1236535329&4294967295,b=I+(y<<22&4294967295|y>>>10),y=_+(I^E&(b^I))+x[1]+4129170786&4294967295,_=b+(y<<5&4294967295|y>>>27),y=E+(b^I&(_^b))+x[6]+3225465664&4294967295,E=_+(y<<9&4294967295|y>>>23),y=I+(_^b&(E^_))+x[11]+643717713&4294967295,I=E+(y<<14&4294967295|y>>>18),y=b+(E^_&(I^E))+x[0]+3921069994&4294967295,b=I+(y<<20&4294967295|y>>>12),y=_+(I^E&(b^I))+x[5]+3593408605&4294967295,_=b+(y<<5&4294967295|y>>>27),y=E+(b^I&(_^b))+x[10]+38016083&4294967295,E=_+(y<<9&4294967295|y>>>23),y=I+(_^b&(E^_))+x[15]+3634488961&4294967295,I=E+(y<<14&4294967295|y>>>18),y=b+(E^_&(I^E))+x[4]+3889429448&4294967295,b=I+(y<<20&4294967295|y>>>12),y=_+(I^E&(b^I))+x[9]+568446438&4294967295,_=b+(y<<5&4294967295|y>>>27),y=E+(b^I&(_^b))+x[14]+3275163606&4294967295,E=_+(y<<9&4294967295|y>>>23),y=I+(_^b&(E^_))+x[3]+4107603335&4294967295,I=E+(y<<14&4294967295|y>>>18),y=b+(E^_&(I^E))+x[8]+1163531501&4294967295,b=I+(y<<20&4294967295|y>>>12),y=_+(I^E&(b^I))+x[13]+2850285829&4294967295,_=b+(y<<5&4294967295|y>>>27),y=E+(b^I&(_^b))+x[2]+4243563512&4294967295,E=_+(y<<9&4294967295|y>>>23),y=I+(_^b&(E^_))+x[7]+1735328473&4294967295,I=E+(y<<14&4294967295|y>>>18),y=b+(E^_&(I^E))+x[12]+2368359562&4294967295,b=I+(y<<20&4294967295|y>>>12),y=_+(b^I^E)+x[5]+4294588738&4294967295,_=b+(y<<4&4294967295|y>>>28),y=E+(_^b^I)+x[8]+2272392833&4294967295,E=_+(y<<11&4294967295|y>>>21),y=I+(E^_^b)+x[11]+1839030562&4294967295,I=E+(y<<16&4294967295|y>>>16),y=b+(I^E^_)+x[14]+4259657740&4294967295,b=I+(y<<23&4294967295|y>>>9),y=_+(b^I^E)+x[1]+2763975236&4294967295,_=b+(y<<4&4294967295|y>>>28),y=E+(_^b^I)+x[4]+1272893353&4294967295,E=_+(y<<11&4294967295|y>>>21),y=I+(E^_^b)+x[7]+4139469664&4294967295,I=E+(y<<16&4294967295|y>>>16),y=b+(I^E^_)+x[10]+3200236656&4294967295,b=I+(y<<23&4294967295|y>>>9),y=_+(b^I^E)+x[13]+681279174&4294967295,_=b+(y<<4&4294967295|y>>>28),y=E+(_^b^I)+x[0]+3936430074&4294967295,E=_+(y<<11&4294967295|y>>>21),y=I+(E^_^b)+x[3]+3572445317&4294967295,I=E+(y<<16&4294967295|y>>>16),y=b+(I^E^_)+x[6]+76029189&4294967295,b=I+(y<<23&4294967295|y>>>9),y=_+(b^I^E)+x[9]+3654602809&4294967295,_=b+(y<<4&4294967295|y>>>28),y=E+(_^b^I)+x[12]+3873151461&4294967295,E=_+(y<<11&4294967295|y>>>21),y=I+(E^_^b)+x[15]+530742520&4294967295,I=E+(y<<16&4294967295|y>>>16),y=b+(I^E^_)+x[2]+3299628645&4294967295,b=I+(y<<23&4294967295|y>>>9),y=_+(I^(b|~E))+x[0]+4096336452&4294967295,_=b+(y<<6&4294967295|y>>>26),y=E+(b^(_|~I))+x[7]+1126891415&4294967295,E=_+(y<<10&4294967295|y>>>22),y=I+(_^(E|~b))+x[14]+2878612391&4294967295,I=E+(y<<15&4294967295|y>>>17),y=b+(E^(I|~_))+x[5]+4237533241&4294967295,b=I+(y<<21&4294967295|y>>>11),y=_+(I^(b|~E))+x[12]+1700485571&4294967295,_=b+(y<<6&4294967295|y>>>26),y=E+(b^(_|~I))+x[3]+2399980690&4294967295,E=_+(y<<10&4294967295|y>>>22),y=I+(_^(E|~b))+x[10]+4293915773&4294967295,I=E+(y<<15&4294967295|y>>>17),y=b+(E^(I|~_))+x[1]+2240044497&4294967295,b=I+(y<<21&4294967295|y>>>11),y=_+(I^(b|~E))+x[8]+1873313359&4294967295,_=b+(y<<6&4294967295|y>>>26),y=E+(b^(_|~I))+x[15]+4264355552&4294967295,E=_+(y<<10&4294967295|y>>>22),y=I+(_^(E|~b))+x[6]+2734768916&4294967295,I=E+(y<<15&4294967295|y>>>17),y=b+(E^(I|~_))+x[13]+1309151649&4294967295,b=I+(y<<21&4294967295|y>>>11),y=_+(I^(b|~E))+x[4]+4149444226&4294967295,_=b+(y<<6&4294967295|y>>>26),y=E+(b^(_|~I))+x[11]+3174756917&4294967295,E=_+(y<<10&4294967295|y>>>22),y=I+(_^(E|~b))+x[2]+718787259&4294967295,I=E+(y<<15&4294967295|y>>>17),y=b+(E^(I|~_))+x[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+E&4294967295}n.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var b=_-this.blockSize,x=this.B,I=this.h,E=0;E<_;){if(I==0)for(;E<=b;)s(this,w,E),E+=this.blockSize;if(typeof w=="string"){for(;E<_;)if(x[I++]=w.charCodeAt(E++),I==this.blockSize){s(this,x),I=0;break}}else for(;E<_;)if(x[I++]=w[E++],I==this.blockSize){s(this,x),I=0;break}}this.h=I,this.o+=_},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var b=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=b&255,b/=256;for(this.u(w),w=Array(16),_=b=0;4>_;++_)for(var x=0;32>x;x+=8)w[b++]=this.g[_]>>>x&255;return w};function i(w,_){var b=l;return Object.prototype.hasOwnProperty.call(b,w)?b[w]:b[w]=_(w)}function o(w,_){this.h=_;for(var b=[],x=!0,I=w.length-1;0<=I;I--){var E=w[I]|0;x&&E==_||(b[I]=E,x=!1)}this.g=b}var l={};function c(w){return-128<=w&&128>w?i(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return C(d(-w));for(var _=[],b=1,x=0;w>=b;x++)_[x]=w/b|0,b*=4294967296;return new o(_,0)}function m(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return C(m(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=d(Math.pow(_,8)),x=p,I=0;I<w.length;I+=8){var E=Math.min(8,w.length-I),y=parseInt(w.substring(I,I+E),_);8>E?(E=d(Math.pow(_,E)),x=x.j(E).add(d(y))):(x=x.j(b),x=x.add(d(y)))}return x}var p=c(0),v=c(1),T=c(16777216);r=o.prototype,r.m=function(){if(D(this))return-C(this).m();for(var w=0,_=1,b=0;b<this.g.length;b++){var x=this.i(b);w+=(0<=x?x:4294967296+x)*_,_*=4294967296}return w},r.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(D(this))return"-"+C(this).toString(w);for(var _=d(Math.pow(w,6)),b=this,x="";;){var I=q(b,_).g;b=z(b,I.j(_));var E=((0<b.g.length?b.g[0]:b.h)>>>0).toString(w);if(b=I,S(b))return E+x;for(;6>E.length;)E="0"+E;x=E+x}},r.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function D(w){return w.h==-1}r.l=function(w){return w=z(this,w),D(w)?-1:S(w)?0:1};function C(w){for(var _=w.g.length,b=[],x=0;x<_;x++)b[x]=~w.g[x];return new o(b,~w.h).add(v)}r.abs=function(){return D(this)?C(this):this},r.add=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],x=0,I=0;I<=_;I++){var E=x+(this.i(I)&65535)+(w.i(I)&65535),y=(E>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);x=y>>>16,E&=65535,y&=65535,b[I]=y<<16|E}return new o(b,b[b.length-1]&-2147483648?-1:0)};function z(w,_){return w.add(C(_))}r.j=function(w){if(S(this)||S(w))return p;if(D(this))return D(w)?C(this).j(C(w)):C(C(this).j(w));if(D(w))return C(this.j(C(w)));if(0>this.l(T)&&0>w.l(T))return d(this.m()*w.m());for(var _=this.g.length+w.g.length,b=[],x=0;x<2*_;x++)b[x]=0;for(x=0;x<this.g.length;x++)for(var I=0;I<w.g.length;I++){var E=this.i(x)>>>16,y=this.i(x)&65535,ne=w.i(I)>>>16,se=w.i(I)&65535;b[2*x+2*I]+=y*se,j(b,2*x+2*I),b[2*x+2*I+1]+=E*se,j(b,2*x+2*I+1),b[2*x+2*I+1]+=y*ne,j(b,2*x+2*I+1),b[2*x+2*I+2]+=E*ne,j(b,2*x+2*I+2)}for(x=0;x<_;x++)b[x]=b[2*x+1]<<16|b[2*x];for(x=_;x<2*_;x++)b[x]=0;return new o(b,0)};function j(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function M(w,_){this.g=w,this.h=_}function q(w,_){if(S(_))throw Error("division by zero");if(S(w))return new M(p,p);if(D(w))return _=q(C(w),_),new M(C(_.g),C(_.h));if(D(_))return _=q(w,C(_)),new M(C(_.g),_.h);if(30<w.g.length){if(D(w)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var b=v,x=_;0>=x.l(w);)b=N(b),x=N(x);var I=P(b,1),E=P(x,1);for(x=P(x,2),b=P(b,2);!S(x);){var y=E.add(x);0>=y.l(w)&&(I=I.add(b),E=y),x=P(x,1),b=P(b,1)}return _=z(w,I.j(_)),new M(I,_)}for(I=p;0<=w.l(_);){for(b=Math.max(1,Math.floor(w.m()/_.m())),x=Math.ceil(Math.log(b)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),E=d(b),y=E.j(_);D(y)||0<y.l(w);)b-=x,E=d(b),y=E.j(_);S(E)&&(E=v),I=I.add(E),w=z(w,y)}return new M(I,w)}r.A=function(w){return q(this,w).h},r.and=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],x=0;x<_;x++)b[x]=this.i(x)&w.i(x);return new o(b,this.h&w.h)},r.or=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],x=0;x<_;x++)b[x]=this.i(x)|w.i(x);return new o(b,this.h|w.h)},r.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],x=0;x<_;x++)b[x]=this.i(x)^w.i(x);return new o(b,this.h^w.h)};function N(w){for(var _=w.g.length+1,b=[],x=0;x<_;x++)b[x]=w.i(x)<<1|w.i(x-1)>>>31;return new o(b,w.h)}function P(w,_){var b=_>>5;_%=32;for(var x=w.g.length-b,I=[],E=0;E<x;E++)I[E]=0<_?w.i(E+b)>>>_|w.i(E+b+1)<<32-_:w.i(E+b);return new o(I,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Ld=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,_n=o}).apply(typeof bu<"u"?bu:typeof self<"u"?self:typeof window<"u"?window:{});var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fd,$r,Ud,ai,da,Bd,qd,$d;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qs=="object"&&Qs];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var f=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in f))break e;f=f[A]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,A={next:function(){if(!g&&f<a.length){var k=f++;return{value:u(k,a[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function d(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function m(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,g),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function v(a,u,f){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:p,v.apply(null,arguments)}function T(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,A,k){for(var F=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)F[ue-2]=arguments[ue];return u.prototype[A].apply(g,F)}}function D(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function C(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const A=a.length||0,k=g.length||0;a.length=A+k;for(let F=0;F<k;F++)a[A+F]=g[F]}else a.push(g)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var N=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function P(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function w(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,u){let f,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(f in g)a[f]=g[f];for(let k=0;k<b.length;k++)f=b[k],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function I(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function E(a){l.setTimeout(()=>{throw a},0)}function y(){var a=xe;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ne{constructor(){this.h=this.g=null}add(u,f){const g=se.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var se=new z(()=>new $,a=>a.reset());class ${constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let J,te=!1,xe=new ne,Je=()=>{const a=l.Promise.resolve(void 0);J=()=>{a.then(Dn)}};var Dn=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(f){E(f)}var u=se;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}te=!1};function Ze(){this.s=this.s,this.C=this.C}Ze.prototype.s=!1,Ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Ns=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function Nt(a,u){if(Ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(N){e:{try{q(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ps[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Nt.aa.h.call(this)}}S(Nt,Ee);var Ps={2:"touch",3:"pen",4:"mouse"};Nt.prototype.h=function(){Nt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),yo=0;function Cs(a,u,f,g,A){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=A,this.key=++yo,this.da=this.fa=!1}function rn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function sn(a){this.src=a,this.g={},this.h=0}sn.prototype.add=function(a,u,f,g,A){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var F=ce(a,u,g,A);return-1<F?(u=a[F],f||(u.fa=!1)):(u=new Cs(u,this.src,k,!!g,A),u.fa=f,a.push(u)),u};function Vn(a,u){var f=u.type;if(f in a.g){var g=a.g[f],A=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=A)&&Array.prototype.splice.call(g,A,1),k&&(rn(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ce(a,u,f,g){for(var A=0;A<a.length;++A){var k=a[A];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==g)return A}return-1}var wr="closure_lm_"+(1e6*Math.random()|0),On={};function zl(a,u,f,g,A){if(Array.isArray(u)){for(var k=0;k<u.length;k++)zl(a,u[k],f,g,A);return null}return f=Wl(f),a&&a[nn]?a.K(u,f,d(g)?!!g.capture:!1,A):ep(a,u,f,!1,g,A)}function ep(a,u,f,g,A,k){if(!u)throw Error("Invalid event type");var F=d(A)?!!A.capture:!!A,ue=bo(a);if(ue||(a[wr]=ue=new sn(a)),f=ue.add(u,f,g,F,k),f.proxy)return f;if(g=tp(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Ns||(A=F),A===void 0&&(A=!1),a.addEventListener(u.toString(),g,A);else if(a.attachEvent)a.attachEvent(Gl(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function tp(){function a(f){return u.call(a.src,a.listener,f)}const u=np;return a}function Kl(a,u,f,g,A){if(Array.isArray(u))for(var k=0;k<u.length;k++)Kl(a,u[k],f,g,A);else g=d(g)?!!g.capture:!!g,f=Wl(f),a&&a[nn]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],f=ce(k,f,g,A),-1<f&&(rn(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=bo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=ce(u,f,g,A)),(f=-1<a?u[a]:null)&&vo(f))}function vo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[nn])Vn(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(Gl(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=bo(u))?(Vn(f,a),f.h==0&&(f.src=null,u[wr]=null)):rn(a)}}}function Gl(a){return a in On?On[a]:On[a]="on"+a}function np(a,u){if(a.da)a=!0;else{u=new Nt(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&vo(a),a=f.call(g,u)}return a}function bo(a){return a=a[wr],a instanceof sn?a:null}var wo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wl(a){return typeof a=="function"?a:(a[wo]||(a[wo]=function(u){return a.handleEvent(u)}),a[wo])}function Pe(){Ze.call(this),this.i=new sn(this),this.M=this,this.F=null}S(Pe,Ze),Pe.prototype[nn]=!0,Pe.prototype.removeEventListener=function(a,u,f,g){Kl(this,a,u,f,g)};function Le(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Ee(u,a);else if(u instanceof Ee)u.target=u.target||a;else{var A=u;u=new Ee(g,a),x(u,A)}if(A=!0,f)for(var k=f.length-1;0<=k;k--){var F=u.g=f[k];A=ks(F,g,!0,u)&&A}if(F=u.g=a,A=ks(F,g,!0,u)&&A,A=ks(F,g,!1,u)&&A,f)for(k=0;k<f.length;k++)F=u.g=f[k],A=ks(F,g,!1,u)&&A}Pe.prototype.N=function(){if(Pe.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)rn(f[g]);delete a.g[u],a.h--}}this.F=null},Pe.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},Pe.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function ks(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,k=0;k<u.length;++k){var F=u[k];if(F&&!F.da&&F.capture==f){var ue=F.listener,Re=F.ha||F.src;F.fa&&Vn(a.i,F),A=ue.call(Re,g)!==!1&&A}}return A&&!g.defaultPrevented}function Hl(a,u,f){if(typeof a=="function")f&&(a=v(a,f));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ql(a){a.g=Hl(()=>{a.g=null,a.i&&(a.i=!1,Ql(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class rp extends Ze{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ql(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ir(a){Ze.call(this),this.h=a,this.g={}}S(Ir,Ze);var Jl=[];function Yl(a){P(a.g,function(u,f){this.g.hasOwnProperty(f)&&vo(u)},a),a.g={}}Ir.prototype.N=function(){Ir.aa.N.call(this),Yl(this)},Ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Io=l.JSON.stringify,sp=l.JSON.parse,ip=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function xo(){}xo.prototype.h=null;function Xl(a){return a.h||(a.h=a.i())}function Zl(){}var xr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Eo(){Ee.call(this,"d")}S(Eo,Ee);function To(){Ee.call(this,"c")}S(To,Ee);var on={},ec=null;function Ds(){return ec=ec||new Pe}on.La="serverreachability";function tc(a){Ee.call(this,on.La,a)}S(tc,Ee);function Er(a){const u=Ds();Le(u,new tc(u))}on.STAT_EVENT="statevent";function nc(a,u){Ee.call(this,on.STAT_EVENT,a),this.stat=u}S(nc,Ee);function Fe(a){const u=Ds();Le(u,new nc(u,a))}on.Ma="timingevent";function rc(a,u){Ee.call(this,on.Ma,a),this.size=u}S(rc,Ee);function Tr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Ar(){this.g=!0}Ar.prototype.xa=function(){this.g=!1};function op(a,u,f,g,A,k){a.info(function(){if(a.g)if(k)for(var F="",ue=k.split("&"),Re=0;Re<ue.length;Re++){var ie=ue[Re].split("=");if(1<ie.length){var Ce=ie[0];ie=ie[1];var ke=Ce.split("_");F=2<=ke.length&&ke[1]=="type"?F+(Ce+"="+ie+"&"):F+(Ce+"=redacted&")}}else F=null;else F=k;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+u+`
`+f+`
`+F})}function ap(a,u,f,g,A,k,F){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+u+`
`+f+`
`+k+" "+F})}function jn(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+cp(a,f)+(g?" "+g:"")})}function lp(a,u){a.info(function(){return"TIMEOUT: "+u})}Ar.prototype.info=function(){};function cp(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var A=g[1];if(Array.isArray(A)&&!(1>A.length)){var k=A[0];if(k!="noop"&&k!="stop"&&k!="close")for(var F=1;F<A.length;F++)A[F]=""}}}}return Io(f)}catch{return u}}var Vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ao;function Os(){}S(Os,xo),Os.prototype.g=function(){return new XMLHttpRequest},Os.prototype.i=function(){return{}},Ao=new Os;function Pt(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new Ir(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ic}function ic(){this.i=null,this.g="",this.h=!1}var oc={},So={};function Ro(a,u,f){a.L=1,a.v=Fs(gt(u)),a.m=f,a.P=!0,ac(a,null)}function ac(a,u){a.F=Date.now(),js(a),a.A=gt(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),wc(f.i,"t",g),a.C=0,f=a.j.J,a.h=new ic,a.g=Fc(a.j,f?u:null,!a.m),0<a.O&&(a.M=new rp(v(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(Jl[0]=A.toString()),A=Jl);for(var k=0;k<A.length;k++){var F=zl(f,A[k],g||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Er(),op(a.i,a.u,a.A,a.l,a.R,a.m)}Pt.prototype.ca=function(a){a=a.target;const u=this.M;u&&_t(a)==3?u.j():this.Y(a)},Pt.prototype.Y=function(a){try{if(a==this.g)e:{const ke=_t(this.g);var u=this.g.Ba();const Fn=this.g.Z();if(!(3>ke)&&(ke!=3||this.g&&(this.h.h||this.g.oa()||Rc(this.g)))){this.J||ke!=4||u==7||(u==8||0>=Fn?Er(3):Er(2)),No(this);var f=this.g.Z();this.X=f;t:if(lc(this)){var g=Rc(this.g);a="";var A=g.length,k=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Sr(this);var F="";break t}this.h.i=new l.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(k&&u==A-1)});g.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=f==200,ap(this.i,this.u,this.A,this.l,this.R,ke,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Re=this.g;if((ue=Re.g?Re.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(ue)){var ie=ue;break t}}ie=null}if(f=ie)jn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Po(this,f);else{this.o=!1,this.s=3,Fe(12),an(this),Sr(this);break e}}if(this.P){f=!0;let et;for(;!this.J&&this.C<F.length;)if(et=up(this,F),et==So){ke==4&&(this.s=4,Fe(14),f=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(et==oc){this.s=4,Fe(15),jn(this.i,this.l,F,"[Invalid Chunk]"),f=!1;break}else jn(this.i,this.l,et,null),Po(this,et);if(lc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||F.length!=0||this.h.h||(this.s=1,Fe(16),f=!1),this.o=this.o&&f,!f)jn(this.i,this.l,F,"[Invalid Chunked Response]"),an(this),Sr(this);else if(0<F.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),jo(Ce),Ce.M=!0,Fe(11))}}else jn(this.i,this.l,F,null),Po(this,F);ke==4&&an(this),this.o&&!this.J&&(ke==4?Oc(this.j,this):(this.o=!1,js(this)))}else Sp(this.g),f==400&&0<F.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),an(this),Sr(this)}}}catch{}finally{}};function lc(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function up(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?So:(f=Number(u.substring(f,g)),isNaN(f)?oc:(g+=1,g+f>u.length?So:(u=u.slice(g,g+f),a.C=g+f,u)))}Pt.prototype.cancel=function(){this.J=!0,an(this)};function js(a){a.S=Date.now()+a.I,cc(a,a.I)}function cc(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Tr(v(a.ba,a),u)}function No(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Pt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(lp(this.i,this.A),this.L!=2&&(Er(),Fe(17)),an(this),this.s=2,Sr(this)):cc(this,this.S-a)};function Sr(a){a.j.G==0||a.J||Oc(a.j,a)}function an(a){No(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Yl(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Po(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Co(f.h,a))){if(!a.K&&Co(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ks(f),$s(f);else break e;Oo(f),Fe(18)}}else f.za=A[1],0<f.za-f.T&&37500>A[2]&&f.F&&f.v==0&&!f.C&&(f.C=Tr(v(f.Za,f),6e3));if(1>=dc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else cn(f,11)}else if((a.K||f.g==a)&&Ks(f),!j(u))for(A=f.Da.g.parse(u),u=0;u<A.length;u++){let ie=A[u];if(f.T=ie[0],ie=ie[1],f.G==2)if(ie[0]=="c"){f.K=ie[1],f.ia=ie[2];const Ce=ie[3];Ce!=null&&(f.la=Ce,f.j.info("VER="+f.la));const ke=ie[4];ke!=null&&(f.Aa=ke,f.j.info("SVER="+f.Aa));const Fn=ie[5];Fn!=null&&typeof Fn=="number"&&0<Fn&&(g=1.5*Fn,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const et=a.g;if(et){const Ws=et.g?et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ws){var k=g.h;k.g||Ws.indexOf("spdy")==-1&&Ws.indexOf("quic")==-1&&Ws.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(ko(k,k.h),k.h=null))}if(g.D){const Mo=et.g?et.g.getResponseHeader("X-HTTP-Session-Id"):null;Mo&&(g.ya=Mo,de(g.I,g.D,Mo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var F=a;if(g.qa=Lc(g,g.J?g.ia:null,g.W),F.K){fc(g.h,F);var ue=F,Re=g.L;Re&&(ue.I=Re),ue.B&&(No(ue),js(ue)),g.g=F}else Dc(g);0<f.i.length&&zs(f)}else ie[0]!="stop"&&ie[0]!="close"||cn(f,7);else f.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?cn(f,7):Vo(f):ie[0]!="noop"&&f.l&&f.l.ta(ie),f.v=0)}}Er(4)}catch{}}var hp=class{constructor(a,u){this.g=a,this.map=u}};function uc(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function dc(a){return a.h?1:a.g?a.g.size:0}function Co(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ko(a,u){a.g?a.g.add(u):a.h=u}function fc(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}uc.prototype.cancel=function(){if(this.i=mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return D(a.i)}function dp(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function fp(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function pc(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=fp(a),g=dp(a),A=g.length,k=0;k<A;k++)u.call(void 0,g[k],f&&f[k],a)}var gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mp(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),A=null;if(0<=g){var k=a[f].substring(0,g);A=a[f].substring(g+1)}else k=a[f];u(k,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function ln(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ln){this.h=a.h,Ms(this,a.j),this.o=a.o,this.g=a.g,Ls(this,a.s),this.l=a.l;var u=a.i,f=new Pr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),_c(this,f),this.m=a.m}else a&&(u=String(a).match(gc))?(this.h=!1,Ms(this,u[1]||"",!0),this.o=Rr(u[2]||""),this.g=Rr(u[3]||"",!0),Ls(this,u[4]),this.l=Rr(u[5]||"",!0),_c(this,u[6]||"",!0),this.m=Rr(u[7]||"")):(this.h=!1,this.i=new Pr(null,this.h))}ln.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Nr(u,yc,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Nr(u,yc,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Nr(f,f.charAt(0)=="/"?_p:gp,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Nr(f,vp)),a.join("")};function gt(a){return new ln(a)}function Ms(a,u,f){a.j=f?Rr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ls(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function _c(a,u,f){u instanceof Pr?(a.i=u,bp(a.i,a.h)):(f||(u=Nr(u,yp)),a.i=new Pr(u,a.h))}function de(a,u,f){a.i.set(u,f)}function Fs(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Rr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Nr(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,pp),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var yc=/[#\/\?@]/g,gp=/[#\?:]/g,_p=/[#\?]/g,yp=/[#\?@]/g,vp=/#/g;function Pr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Ct(a){a.g||(a.g=new Map,a.h=0,a.i&&mp(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}r=Pr.prototype,r.add=function(a,u){Ct(this),this.i=null,a=Mn(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function vc(a,u){Ct(a),u=Mn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function bc(a,u){return Ct(a),u=Mn(a,u),a.g.has(u)}r.forEach=function(a,u){Ct(this),this.g.forEach(function(f,g){f.forEach(function(A){a.call(u,A,g,this)},this)},this)},r.na=function(){Ct(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const A=a[g];for(let k=0;k<A.length;k++)f.push(u[g])}return f},r.V=function(a){Ct(this);let u=[];if(typeof a=="string")bc(this,a)&&(u=u.concat(this.g.get(Mn(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},r.set=function(a,u){return Ct(this),this.i=null,a=Mn(this,a),bc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function wc(a,u,f){vc(a,u),0<f.length&&(a.i=null,a.g.set(Mn(a,u),D(f)),a.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const k=encodeURIComponent(String(g)),F=this.V(g);for(g=0;g<F.length;g++){var A=k;F[g]!==""&&(A+="="+encodeURIComponent(String(F[g]))),a.push(A)}}return this.i=a.join("&")};function Mn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function bp(a,u){u&&!a.j&&(Ct(a),a.i=null,a.g.forEach(function(f,g){var A=g.toLowerCase();g!=A&&(vc(this,g),wc(this,A,f))},a)),a.j=u}function wp(a,u){const f=new Ar;if(l.Image){const g=new Image;g.onload=T(kt,f,"TestLoadImage: loaded",!0,u,g),g.onerror=T(kt,f,"TestLoadImage: error",!1,u,g),g.onabort=T(kt,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=T(kt,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Ip(a,u){const f=new Ar,g=new AbortController,A=setTimeout(()=>{g.abort(),kt(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(A),k.ok?kt(f,"TestPingServer: ok",!0,u):kt(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),kt(f,"TestPingServer: error",!1,u)})}function kt(a,u,f,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(f)}catch{}}function xp(){this.g=new ip}function Ep(a,u,f){const g=f||"";try{pc(a,function(A,k){let F=A;d(A)&&(F=Io(A)),u.push(g+k+"="+encodeURIComponent(F))})}catch(A){throw u.push(g+"type="+encodeURIComponent("_badmap")),A}}function Us(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Us,xo),Us.prototype.g=function(){return new Bs(this.l,this.j)},Us.prototype.i=function(a){return function(){return a}}({});function Bs(a,u){Pe.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Bs,Pe),r=Bs.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,kr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ic(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ic(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Cr(this):kr(this),this.readyState==3&&Ic(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Cr(this))},r.Qa=function(a){this.g&&(this.response=a,Cr(this))},r.ga=function(){this.g&&Cr(this)};function Cr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,kr(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function kr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function xc(a){let u="";return P(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Do(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=xc(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):de(a,u,f))}function ge(a){Pe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ge,Pe);var Tp=/^https?$/i,Ap=["POST","PUT"];r=ge.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ao.g(),this.v=this.o?Xl(this.o):Xl(Ao),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){Ec(this,k);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)f.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())f.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),A=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ap,u,void 0))||g||A||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,F]of f)this.g.setRequestHeader(k,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sc(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){Ec(this,k)}};function Ec(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Tc(a),qs(a)}function Tc(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Le(this,"complete"),Le(this,"abort"),qs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qs(this,!0)),ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ac(this):this.bb())},r.bb=function(){Ac(this)};function Ac(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_t(a)!=4||a.Z()!=2)){if(a.u&&_t(a)==4)Hl(a.Ea,0,a);else if(Le(a,"readystatechange"),_t(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=F===0){var A=String(a.D).match(gc)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),g=!Tp.test(A?A.toLowerCase():"")}f=g}if(f)Le(a,"complete"),Le(a,"success");else{a.m=6;try{var k=2<_t(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",Tc(a)}}finally{qs(a)}}}}function qs(a,u){if(a.g){Sc(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Le(a,"ready");try{f.onreadystatechange=g}catch{}}}function Sc(a){a.I&&(l.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function _t(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),sp(u)}};function Rc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Sp(a){const u={};a=(a.g&&2<=_t(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(j(a[g]))continue;var f=I(a[g]);const A=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[A]||[];u[A]=k,k.push(f)}w(u,function(g){return g.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dr(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Nc(a){this.Aa=0,this.i=[],this.j=new Ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Dr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Dr("baseRetryDelayMs",5e3,a),this.cb=Dr("retryDelaySeedMs",1e4,a),this.Wa=Dr("forwardChannelMaxRetries",2,a),this.wa=Dr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new uc(a&&a.concurrentRequestLimit),this.Da=new xp,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Nc.prototype,r.la=8,r.G=1,r.connect=function(a,u,f,g){Fe(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Lc(this,null,this.W),zs(this)};function Vo(a){if(Pc(a),a.G==3){var u=a.U++,f=gt(a.I);if(de(f,"SID",a.K),de(f,"RID",u),de(f,"TYPE","terminate"),Vr(a,f),u=new Pt(a,a.j,u),u.L=2,u.v=Fs(gt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Fc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),js(u)}Mc(a)}function $s(a){a.g&&(jo(a),a.g.cancel(),a.g=null)}function Pc(a){$s(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ks(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function zs(a){if(!hc(a.h)&&!a.s){a.s=!0;var u=a.Ga;J||Je(),te||(J(),te=!0),xe.add(u,a),a.B=0}}function Rp(a,u){return dc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Tr(v(a.Ga,a,u),jc(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new Pt(this,this.j,a);let k=this.o;if(this.S&&(k?(k=_(k),x(k,this.S)):k=this.S),this.m!==null||this.O||(A.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=kc(this,A,u),f=gt(this.I),de(f,"RID",a),de(f,"CVER",22),this.D&&de(f,"X-HTTP-Session-Id",this.D),Vr(this,f),k&&(this.O?u="headers="+encodeURIComponent(String(xc(k)))+"&"+u:this.m&&Do(f,this.m,k)),ko(this.h,A),this.Ua&&de(f,"TYPE","init"),this.P?(de(f,"$req",u),de(f,"SID","null"),A.T=!0,Ro(A,f,null)):Ro(A,f,u),this.G=2}}else this.G==3&&(a?Cc(this,a):this.i.length==0||hc(this.h)||Cc(this))};function Cc(a,u){var f;u?f=u.l:f=a.U++;const g=gt(a.I);de(g,"SID",a.K),de(g,"RID",f),de(g,"AID",a.T),Vr(a,g),a.m&&a.o&&Do(g,a.m,a.o),f=new Pt(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=kc(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ko(a.h,f),Ro(f,g,u)}function Vr(a,u){a.H&&P(a.H,function(f,g){de(u,g,f)}),a.l&&pc({},function(f,g){de(u,g,f)})}function kc(a,u,f){f=Math.min(a.i.length,f);var g=a.l?v(a.l.Na,a.l,a):null;e:{var A=a.i;let k=-1;for(;;){const F=["count="+f];k==-1?0<f?(k=A[0].g,F.push("ofs="+k)):k=0:F.push("ofs="+k);let ue=!0;for(let Re=0;Re<f;Re++){let ie=A[Re].g;const Ce=A[Re].map;if(ie-=k,0>ie)k=Math.max(0,A[Re].g-100),ue=!1;else try{Ep(Ce,F,"req"+ie+"_")}catch{g&&g(Ce)}}if(ue){g=F.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function Dc(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;J||Je(),te||(J(),te=!0),xe.add(u,a),a.v=0}}function Oo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Tr(v(a.Fa,a),jc(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Vc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Tr(v(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),$s(this),Vc(this))};function jo(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Vc(a){a.g=new Pt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=gt(a.qa);de(u,"RID","rpc"),de(u,"SID",a.K),de(u,"AID",a.T),de(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(u,"TO",a.ja),de(u,"TYPE","xmlhttp"),Vr(a,u),a.m&&a.o&&Do(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Fs(gt(u)),f.m=null,f.P=!0,ac(f,a)}r.Za=function(){this.C!=null&&(this.C=null,$s(this),Oo(this),Fe(19))};function Ks(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Oc(a,u){var f=null;if(a.g==u){Ks(a),jo(a),a.g=null;var g=2}else if(Co(a.h,u))f=u.D,fc(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;g=Ds(),Le(g,new rc(g,f)),zs(a)}else Dc(a);else if(A=u.s,A==3||A==0&&0<u.X||!(g==1&&Rp(a,u)||g==2&&Oo(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),A){case 1:cn(a,5);break;case 4:cn(a,10);break;case 3:cn(a,6);break;default:cn(a,2)}}}function jc(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function cn(a,u){if(a.j.info("Error code "+u),u==2){var f=v(a.fb,a),g=a.Xa;const A=!g;g=new ln(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ms(g,"https"),Fs(g),A?wp(g.toString(),f):Ip(g.toString(),f)}else Fe(2);a.G=0,a.l&&a.l.sa(u),Mc(a),Pc(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function Mc(a){if(a.G=0,a.ka=[],a.l){const u=mc(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ka,u),C(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Lc(a,u,f){var g=f instanceof ln?gt(f):new ln(f);if(g.g!="")u&&(g.g=u+"."+g.g),Ls(g,g.s);else{var A=l.location;g=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var k=new ln(null);g&&Ms(k,g),u&&(k.g=u),A&&Ls(k,A),f&&(k.l=f),g=k}return f=a.D,u=a.ya,f&&u&&de(g,f,u),de(g,"VER",a.la),Vr(a,g),g}function Fc(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new ge(new Us({eb:f})):new ge(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uc(){}r=Uc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Gs(){}Gs.prototype.g=function(a,u){return new Ke(a,u)};function Ke(a,u){Pe.call(this),this.g=new Nc(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Ln(this)}S(Ke,Pe),Ke.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ke.prototype.close=function(){Vo(this.g)},Ke.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Io(a),a=f);u.i.push(new hp(u.Ya++,a)),u.G==3&&zs(u)},Ke.prototype.N=function(){this.g.l=null,delete this.j,Vo(this.g),delete this.g,Ke.aa.N.call(this)};function Bc(a){Eo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(Bc,Eo);function qc(){To.call(this),this.status=1}S(qc,To);function Ln(a){this.g=a}S(Ln,Uc),Ln.prototype.ua=function(){Le(this.g,"a")},Ln.prototype.ta=function(a){Le(this.g,new Bc(a))},Ln.prototype.sa=function(a){Le(this.g,new qc)},Ln.prototype.ra=function(){Le(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,Ke.prototype.send=Ke.prototype.o,Ke.prototype.open=Ke.prototype.m,Ke.prototype.close=Ke.prototype.close,$d=function(){return new Gs},qd=function(){return Ds()},Bd=on,da={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,ai=Vs,sc.COMPLETE="complete",Ud=sc,Zl.EventType=xr,xr.OPEN="a",xr.CLOSE="b",xr.ERROR="c",xr.MESSAGE="d",Pe.prototype.listen=Pe.prototype.K,$r=Zl,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,Fd=ge}).apply(typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{});const wu="@firebase/firestore";/**
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
 */let _r="10.14.0";/**
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
 */const wn=new La("@firebase/firestore");function Kn(){return wn.logLevel}function O(r,...e){if(wn.logLevel<=Z.DEBUG){const t=e.map(Ha);wn.debug(`Firestore (${_r}): ${r}`,...t)}}function ye(r,...e){if(wn.logLevel<=Z.ERROR){const t=e.map(Ha);wn.error(`Firestore (${_r}): ${r}`,...t)}}function is(r,...e){if(wn.logLevel<=Z.WARN){const t=e.map(Ha);wn.warn(`Firestore (${_r}): ${r}`,...t)}}function Ha(r){if(typeof r=="string")return r;try{/**
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
 */function K(r="Unexpected state"){const e=`FIRESTORE (${_r}) INTERNAL ASSERTION FAILED: `+r;throw ye(e),new Error(e)}function W(r,e){r||K()}function G(r,e){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends mt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ve.UNAUTHENTICATED))}shutdown(){}}class Bv{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0);let n=this.i;const s=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ht,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ht)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string"),new Fv(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new Ve(e)}}class qv{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $v{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new qv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){W(this.o===void 0);const n=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string"),this.R=t.token,new zv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Gv(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class zd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=Gv(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function Y(r,e){return r<e?-1:r>e?1:0}function nr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function Kd(r){return r+"\0"}/**
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
 */class pe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new pe(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new pe(0,0))}static max(){return new H(new pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class os{constructor(e,t,n){t===void 0?t=0:t>e.length&&K(),n===void 0?n=e.length-t:n>e.length-t&&K(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return os.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof os?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oe extends os{construct(e,t,n){return new oe(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new U(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const Wv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends os{construct(e,t,n){return new me(e,t,n)}static isValidIdentifier(e){return Wv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new U(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new U(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(n+=l,s++):(i(),s++)}if(i(),o)throw new U(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(oe.fromString(e))}static fromName(e){return new B(oe.fromString(e).popFirst(5))}static empty(){return new B(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new oe(e.slice()))}}/**
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
 */class xi{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function fa(r){return r.fields.find(e=>e.kind===2)}function dn(r){return r.fields.filter(e=>e.kind!==2)}xi.UNKNOWN_ID=-1;class li{constructor(e,t){this.fieldPath=e,this.kind=t}}class as{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new as(0,Qe.min())}}function Gd(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=H.fromTimestamp(n===1e9?new pe(t+1,0):new pe(t,n));return new Qe(s,B.empty(),e)}function Wd(r){return new Qe(r.readTime,r.key,-1)}class Qe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Qe(H.min(),B.empty(),-1)}static max(){return new Qe(H.max(),B.empty(),-1)}}function Qa(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(r.documentKey,e.documentKey),t!==0?t:Y(r.largestBatchId,e.largestBatchId))}/**
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
 */const Hd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xt(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Hd)throw r;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,n)=>{t(e)})}static reject(e){return new R((t,n)=>{n(e)})}static waitFor(e){return new R((t,n)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>n(c))}),o=!0,i===s&&t()})}static or(e){let t=R.resolve(!1);for(const n of e)t=t.next(s=>s?R.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new R((n,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const d=c;t(e[d]).next(m=>{o[d]=m,++l,l===i&&n(o)},m=>s(m))}})}static doWhile(e,t){return new R((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
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
 */class Hi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ht,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Qr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=Ja(n.target.error);this.V.reject(new Qr(e,s))}}static open(e,t,n,s){try{return new Hi(t,e.transaction(s,n))}catch(i){throw new Qr(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(O("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Qv(t)}}class Kt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Kt.S(Te())===12.2&&ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return O("SimpleDb","Removing database:",e),fn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Xh())return!1;if(Kt.v())return!0;const e=Te(),t=Kt.S(e),n=0<t&&t<10,s=Jd(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(O("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new Qr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new U(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new U(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Qr(e,o))},s.onupgradeneeded=i=>{O("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{O("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const l=Hi.open(this.db,e,i?"readonly":"readwrite",n),c=s(l).next(d=>(l.g(),d)).catch(d=>(l.abort(d),R.reject(d))).toPromise();return c.catch(()=>{}),await l.m,c}catch(l){const c=l,d=c.name!=="FirebaseError"&&o<3;if(O("SimpleDb","Transaction failed with error:",c.message,"Retrying:",d),this.close(),!d)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Jd(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Hv{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return fn(this.B.delete())}}class Qr extends U{constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Zt(r){return r.name==="IndexedDbTransactionError"}class Qv{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(O("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(O("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),fn(n)}add(e){return O("SimpleDb","ADD",this.store.name,e,e),fn(this.store.add(e))}get(e){return fn(this.store.get(e)).next(t=>(t===void 0&&(t=null),O("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return O("SimpleDb","DELETE",this.store.name,e),fn(this.store.delete(e))}count(){return O("SimpleDb","COUNT",this.store.name),fn(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new R((o,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(n),o=[];return this.W(i,(l,c)=>{o.push(c)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new R((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}j(e,t){O("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(i,o,l)=>l.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new R((n,s)=>{t.onerror=i=>{const o=Ja(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():n()}):n()}})}W(e,t){const n=[];return new R((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void s();const c=new Hv(l),d=t(l.primaryKey,l.value,c);if(d instanceof R){const m=d.catch(p=>(c.done(),R.reject(p)));n.push(m)}c.isDone?s():c.K===null?l.continue():l.continue(c.K)}}).next(()=>R.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function fn(r){return new R((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Ja(n.target.error);t(s)}})}let Iu=!1;function Ja(r){const e=Kt.S(Te());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Iu||(Iu=!0,setTimeout(()=>{throw n},0)),n}}return r}class Jv{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){O("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{O("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Zt(t)?O("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Xt(t)}await this.X(6e4)})}}class Yv{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,i=!0;return R.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return O("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(l=>{s-=l,n.add(o)});i=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(l=>(O("IndexBackfiller",`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=Wd(i);Qa(o,n)>0&&(n=o)}),new Qe(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class $e{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$e.oe=-1;function Qi(r){return r==null}function ls(r){return r===0&&1/r==-1/0}function Yd(r){return typeof r=="number"&&Number.isInteger(r)&&!ls(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ue(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=xu(e)),e=Xv(r.get(t),e);return xu(e)}function Xv(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function xu(r){return r+""}function it(r){const e=r.length;if(W(e>=2),e===2)return W(r.charAt(0)===""&&r.charAt(1)===""),oe.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf("",i);switch((o<0||o>t)&&K(),r.charAt(o+1)){case"":const l=r.substring(i,o);let c;s.length===0?c=l:(s+=l,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:K()}i=o+2}return new oe(n)}/**
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
 */const Eu=["userId","batchId"];/**
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
 */function ci(r,e){return[r,Ue(e)]}function Xd(r,e,t){return[r,Ue(e),t]}const Zv={},eb=["prefixPath","collectionGroup","readTime","documentId"],tb=["prefixPath","collectionGroup","documentId"],nb=["collectionGroup","readTime","prefixPath","documentId"],rb=["canonicalId","targetId"],sb=["targetId","path"],ib=["path","targetId"],ob=["collectionId","parent"],ab=["indexId","uid"],lb=["uid","sequenceNumber"],cb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ub=["indexId","uid","orderedDocumentKey"],hb=["userId","collectionPath","documentId"],db=["userId","collectionPath","largestBatchId"],fb=["userId","collectionGroup","largestBatchId"],Zd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],mb=[...Zd,"documentOverlays"],ef=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],tf=ef,Ya=[...tf,"indexConfiguration","indexState","indexEntries"],pb=Ya,gb=[...Ya,"globals"];/**
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
 */class ma extends Qd{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Ae(r,e){const t=G(r);return Kt.F(t._e,e)}/**
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
 */function Tu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Pn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function nf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class he{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new he(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Js(this.root,e,this.comparator,!1)}getReverseIterator(){return new Js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Js(this.root,e,this.comparator,!0)}}class Js{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Ne.RED,this.left=s??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Ne(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,n,s,i){return this}insert(e,t,n){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class le{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Au(this.data.getIterator())}getIteratorFrom(e){return new Au(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new le(this.comparator);return t.data=e,t}}class Au{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Un(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class ze{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new ze([])}unionWith(e){let t=new le(me.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class rf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rf("Invalid base64 string: "+i):i}}(e);return new be(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const _b=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(r){if(W(!!r),typeof r=="string"){let e=0;const t=_b.exec(r);if(W(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ht(r){return typeof r=="string"?be.fromBase64String(r):be.fromUint8Array(r)}/**
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
 */function Xa(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Za(r){const e=r.mapValue.fields.__previous_value__;return Xa(e)?Za(e):e}function cs(r){const e=At(r.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class yb{constructor(e,t,n,s,i,o,l,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}class In{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new In("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof In&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Bt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ui={nullValue:"NULL_VALUE"};function xn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Xa(r)?4:sf(r)?9007199254740991:Ji(r)?10:11:K()}function dt(r,e){if(r===e)return!0;const t=xn(r);if(t!==xn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return cs(r).isEqual(cs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=At(s.timestampValue),l=At(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Ht(s.bytesValue).isEqual(Ht(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return fe(s.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(s.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return fe(s.integerValue)===fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=fe(s.doubleValue),l=fe(i.doubleValue);return o===l?ls(o)===ls(l):isNaN(o)&&isNaN(l)}return!1}(r,e);case 9:return nr(r.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Tu(o)!==Tu(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!dt(o[c],l[c])))return!1;return!0}(r,e);default:return K()}}function us(r,e){return(r.values||[]).find(t=>dt(t,e))!==void 0}function Qt(r,e){if(r===e)return 0;const t=xn(r),n=xn(e);if(t!==n)return Y(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(r.booleanValue,e.booleanValue);case 2:return function(i,o){const l=fe(i.integerValue||i.doubleValue),c=fe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(r,e);case 3:return Su(r.timestampValue,e.timestampValue);case 4:return Su(cs(r),cs(e));case 5:return Y(r.stringValue,e.stringValue);case 6:return function(i,o){const l=Ht(i),c=Ht(o);return l.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let d=0;d<l.length&&d<c.length;d++){const m=Y(l[d],c[d]);if(m!==0)return m}return Y(l.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Y(fe(i.latitude),fe(o.latitude));return l!==0?l:Y(fe(i.longitude),fe(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Ru(r.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,d,m;const p=i.fields||{},v=o.fields||{},T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=v.value)===null||c===void 0?void 0:c.arrayValue,D=Y(((d=T?.values)===null||d===void 0?void 0:d.length)||0,((m=S?.values)===null||m===void 0?void 0:m.length)||0);return D!==0?D:Ru(T,S)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Bt.mapValue&&o===Bt.mapValue)return 0;if(i===Bt.mapValue)return 1;if(o===Bt.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),d=o.fields||{},m=Object.keys(d);c.sort(),m.sort();for(let p=0;p<c.length&&p<m.length;++p){const v=Y(c[p],m[p]);if(v!==0)return v;const T=Qt(l[c[p]],d[m[p]]);if(T!==0)return T}return Y(c.length,m.length)}(r.mapValue,e.mapValue);default:throw K()}}function Su(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Y(r,e);const t=At(r),n=At(e),s=Y(t.seconds,n.seconds);return s!==0?s:Y(t.nanos,n.nanos)}function Ru(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Qt(t[s],n[s]);if(i)return i}return Y(t.length,n.length)}function rr(r){return pa(r)}function pa(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=At(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ht(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return B.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=pa(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${pa(t.fields[o])}`;return s+"}"}(r.mapValue):K()}function hs(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ga(r){return!!r&&"integerValue"in r}function ds(r){return!!r&&"arrayValue"in r}function Nu(r){return!!r&&"nullValue"in r}function Pu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function hi(r){return!!r&&"mapValue"in r}function Ji(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Jr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Pn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Jr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function sf(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const of={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function vb(r){return"nullValue"in r?ui:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?hs(In.empty(),B.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Ji(r)?of:{mapValue:{}}:K()}function bb(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?hs(In.empty(),B.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?of:"mapValue"in r?Ji(r)?{mapValue:{}}:Bt:K()}function Cu(r,e){const t=Qt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function ku(r,e){const t=Qt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(t)}setAll(e){let t=me.emptyPath(),n={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=l.popLast()}o?n[l.lastSegment()]=Jr(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Pn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Oe(Jr(this.value))}}function af(r){const e=[];return Pn(r.fields,(t,n)=>{const s=new me([t]);if(hi(n)){const i=af(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ze(e)}/**
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
 */class _e{constructor(e,t,n,s,i,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _e(e,0,H.min(),H.min(),H.min(),Oe.empty(),0)}static newFoundDocument(e,t,n,s){return new _e(e,1,t,H.min(),n,s,0)}static newNoDocument(e,t){return new _e(e,2,t,H.min(),H.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new _e(e,3,t,H.min(),H.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sr{constructor(e,t){this.position=e,this.inclusive=t}}function Du(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=B.comparator(B.fromName(o.referenceValue),t.key):n=Qt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Vu(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!dt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ei{constructor(e,t="asc"){this.field=e,this.dir=t}}function wb(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class lf{}class ee extends lf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Ib(e,t,n):t==="array-contains"?new Tb(e,n):t==="in"?new mf(e,n):t==="not-in"?new Ab(e,n):t==="array-contains-any"?new Sb(e,n):new ee(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new xb(e,n):new Eb(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qt(t,this.value)):t!==null&&xn(this.value)===xn(t)&&this.matchesComparison(Qt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ae extends lf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ae(e,t)}matches(e){return ir(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ir(r){return r.op==="and"}function _a(r){return r.op==="or"}function el(r){return cf(r)&&ir(r)}function cf(r){for(const e of r.filters)if(e instanceof ae)return!1;return!0}function ya(r){if(r instanceof ee)return r.field.canonicalString()+r.op.toString()+rr(r.value);if(el(r))return r.filters.map(e=>ya(e)).join(",");{const e=r.filters.map(t=>ya(t)).join(",");return`${r.op}(${e})`}}function uf(r,e){return r instanceof ee?function(n,s){return s instanceof ee&&n.op===s.op&&n.field.isEqual(s.field)&&dt(n.value,s.value)}(r,e):r instanceof ae?function(n,s){return s instanceof ae&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,l)=>i&&uf(o,s.filters[l]),!0):!1}(r,e):void K()}function hf(r,e){const t=r.filters.concat(e);return ae.create(t,r.op)}function df(r){return r instanceof ee?function(t){return`${t.field.canonicalString()} ${t.op} ${rr(t.value)}`}(r):r instanceof ae?function(t){return t.op.toString()+" {"+t.getFilters().map(df).join(" ,")+"}"}(r):"Filter"}class Ib extends ee{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class xb extends ee{constructor(e,t){super(e,"in",t),this.keys=ff("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Eb extends ee{constructor(e,t){super(e,"not-in",t),this.keys=ff("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ff(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>B.fromName(n.referenceValue))}class Tb extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ds(t)&&us(t.arrayValue,this.value)}}class mf extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&us(this.value.arrayValue,t)}}class Ab extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!us(this.value.arrayValue,t)}}class Sb extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ds(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>us(this.value.arrayValue,n))}}/**
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
 */class Rb{constructor(e,t=null,n=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function va(r,e=null,t=[],n=[],s=null,i=null,o=null){return new Rb(r,e,t,n,s,i,o)}function En(r){const e=G(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>ya(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Qi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>rr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>rr(n)).join(",")),e.ue=t}return e.ue}function ws(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wb(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!uf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Vu(r.startAt,e.startAt)&&Vu(r.endAt,e.endAt)}function Ti(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ai(r,e){return r.filters.filter(t=>t instanceof ee&&t.field.isEqual(e))}function Ou(r,e,t){let n=ui,s=!0;for(const i of Ai(r,e)){let o=ui,l=!0;switch(i.op){case"<":case"<=":o=vb(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,l=!1;break;case"!=":case"not-in":o=ui}Cu({value:n,inclusive:s},{value:o,inclusive:l})<0&&(n=o,s=l)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Cu({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function ju(r,e,t){let n=Bt,s=!0;for(const i of Ai(r,e)){let o=Bt,l=!0;switch(i.op){case">=":case">":o=bb(i.value),l=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,l=!1;break;case"!=":case"not-in":o=Bt}ku({value:n,inclusive:s},{value:o,inclusive:l})>0&&(n=o,s=l)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];ku({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class Is{constructor(e,t=null,n=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pf(r,e,t,n,s,i,o,l){return new Is(r,e,t,n,s,i,o,l)}function xs(r){return new Is(r)}function Mu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function gf(r){return r.collectionGroup!==null}function Yr(r){const e=G(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new le(me.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ei(i,n))}),t.has(me.keyField().canonicalString())||e.ce.push(new Ei(me.keyField(),n))}return e.ce}function We(r){const e=G(r);return e.le||(e.le=Nb(e,Yr(r))),e.le}function Nb(r,e){if(r.limitType==="F")return va(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ei(s.field,i)});const t=r.endAt?new sr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new sr(r.startAt.position,r.startAt.inclusive):null;return va(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ba(r,e){const t=r.filters.concat([e]);return new Is(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function wa(r,e,t){return new Is(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Yi(r,e){return ws(We(r),We(e))&&r.limitType===e.limitType}function _f(r){return`${En(We(r))}|lt:${r.limitType}`}function Gn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>df(s)).join(", ")}]`),Qi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>rr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>rr(s)).join(",")),`Target(${n})`}(We(r))}; limitType=${r.limitType})`}function Es(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Yr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,l,c){const d=Du(o,l,c);return o.inclusive?d<=0:d<0}(n.startAt,Yr(n),s)||n.endAt&&!function(o,l,c){const d=Du(o,l,c);return o.inclusive?d>=0:d>0}(n.endAt,Yr(n),s))}(r,e)}function yf(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function vf(r){return(e,t)=>{let n=!1;for(const s of Yr(r)){const i=Pb(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Pb(r,e,t){const n=r.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),d=l.data.field(i);return c!==null&&d!==null?Qt(c,d):K()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return K()}}/**
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
 */class en{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return nf(this.inner)}size(){return this.innerSize}}/**
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
 */const Cb=new he(B.comparator);function Ge(){return Cb}const bf=new he(B.comparator);function zr(...r){let e=bf;for(const t of r)e=e.insert(t.key,t);return e}function wf(r){let e=bf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ot(){return Xr()}function If(){return Xr()}function Xr(){return new en(r=>r.toString(),(r,e)=>r.isEqual(e))}const kb=new he(B.comparator),Db=new le(B.comparator);function X(...r){let e=Db;for(const t of r)e=e.add(t);return e}const Vb=new le(Y);function tl(){return Vb}/**
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
 */function nl(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ls(e)?"-0":e}}function xf(r){return{integerValue:""+r}}function Ob(r,e){return Yd(e)?xf(e):nl(r,e)}/**
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
 */class Xi{constructor(){this._=void 0}}function jb(r,e,t){return r instanceof or?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xa(i)&&(i=Za(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof ar?Tf(r,e):r instanceof lr?Af(r,e):function(s,i){const o=Ef(s,i),l=Lu(o)+Lu(s.Pe);return ga(o)&&ga(s.Pe)?xf(l):nl(s.serializer,l)}(r,e)}function Mb(r,e,t){return r instanceof ar?Tf(r,e):r instanceof lr?Af(r,e):t}function Ef(r,e){return r instanceof fs?function(n){return ga(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class or extends Xi{}class ar extends Xi{constructor(e){super(),this.elements=e}}function Tf(r,e){const t=Sf(e);for(const n of r.elements)t.some(s=>dt(s,n))||t.push(n);return{arrayValue:{values:t}}}class lr extends Xi{constructor(e){super(),this.elements=e}}function Af(r,e){let t=Sf(e);for(const n of r.elements)t=t.filter(s=>!dt(s,n));return{arrayValue:{values:t}}}class fs extends Xi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Lu(r){return fe(r.integerValue||r.doubleValue)}function Sf(r){return ds(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Rf{constructor(e,t){this.field=e,this.transform=t}}function Lb(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof ar&&s instanceof ar||n instanceof lr&&s instanceof lr?nr(n.elements,s.elements,dt):n instanceof fs&&s instanceof fs?dt(n.Pe,s.Pe):n instanceof or&&s instanceof or}(r.transform,e.transform)}class Fb{constructor(e,t){this.version=e,this.transformResults=t}}class je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new je}static exists(e){return new je(void 0,e)}static updateTime(e){return new je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Zi{}function Nf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new eo(r.key,je.none()):new yr(r.key,r.data,je.none());{const t=r.data,n=Oe.empty();let s=new le(me.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Rt(r.key,n,new ze(s.toArray()),je.none())}}function Ub(r,e,t){r instanceof yr?function(s,i,o){const l=s.value.clone(),c=Uu(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):r instanceof Rt?function(s,i,o){if(!di(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Uu(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Pf(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Zr(r,e,t,n){return r instanceof yr?function(i,o,l,c){if(!di(i.precondition,o))return l;const d=i.value.clone(),m=Bu(i.fieldTransforms,c,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof Rt?function(i,o,l,c){if(!di(i.precondition,o))return l;const d=Bu(i.fieldTransforms,c,o),m=o.data;return m.setAll(Pf(i)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,l){return di(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(r,e,t)}function Bb(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Ef(n.transform,s||null);i!=null&&(t===null&&(t=Oe.empty()),t.set(n.field,i))}return t||null}function Fu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&nr(n,s,(i,o)=>Lb(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class yr extends Zi{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rt extends Zi{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pf(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Uu(r,e,t){const n=new Map;W(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,l=e.data.field(i.field);n.set(i.field,Mb(o,l,t[s]))}return n}function Bu(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,jb(i,o,e))}return n}class eo extends Zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cf extends Zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rl{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ub(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Zr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Zr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=If();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=Nf(o,l);c!==null&&n.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&nr(this.mutations,e.mutations,(t,n)=>Fu(t,n))&&nr(this.baseMutations,e.baseMutations,(t,n)=>Fu(t,n))}}class sl{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){W(e.mutations.length===n.length);let s=function(){return kb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new sl(e,t,n,s)}}/**
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
 */class il{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var we,re;function $b(r){switch(r){default:return K();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function kf(r){if(r===void 0)return ye("GRPC error has no .code"),V.UNKNOWN;switch(r){case we.OK:return V.OK;case we.CANCELLED:return V.CANCELLED;case we.UNKNOWN:return V.UNKNOWN;case we.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case we.INTERNAL:return V.INTERNAL;case we.UNAVAILABLE:return V.UNAVAILABLE;case we.UNAUTHENTICATED:return V.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case we.NOT_FOUND:return V.NOT_FOUND;case we.ALREADY_EXISTS:return V.ALREADY_EXISTS;case we.PERMISSION_DENIED:return V.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case we.ABORTED:return V.ABORTED;case we.OUT_OF_RANGE:return V.OUT_OF_RANGE;case we.UNIMPLEMENTED:return V.UNIMPLEMENTED;case we.DATA_LOSS:return V.DATA_LOSS;default:return K()}}(re=we||(we={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zb(){return new TextEncoder}/**
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
 */const Kb=new _n([4294967295,4294967295],0);function qu(r){const e=zb().encode(r),t=new Ld;return t.update(e),new Uint8Array(t.digest())}function $u(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _n([t,n],0),new _n([s,i],0)]}class ol{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Kr(`Invalid padding: ${t}`);if(n<0)throw new Kr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Kr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Kr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=_n.fromNumber(this.Ie)}Ee(e,t,n){let s=e.add(t.multiply(_n.fromNumber(n)));return s.compare(Kb)===1&&(s=new _n([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=qu(e),[n,s]=$u(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ol(i,s,t);return n.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=qu(e),[n,s]=$u(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Kr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ts{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,As.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ts(H.min(),s,new he(Y),Ge(),X())}}class As{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new As(n,t,X(),X(),X())}}/**
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
 */class fi{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class Df{constructor(e,t){this.targetId=e,this.me=t}}class Vf{constructor(e,t,n=be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class zu{constructor(){this.fe=0,this.ge=Gu(),this.pe=be.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=X(),t=X(),n=X();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:K()}}),new As(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Gu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Gb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ge(),this.qe=Ku(),this.Qe=new he(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,n=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Ti(i))if(n===0){const o=new B(i.path);this.Ue(t,o,_e.newNoDocument(o,H.min()))}else W(n===1);else{const o=this.Ye(t);if(o!==n){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Ht(n).toUint8Array()}catch(c){if(c instanceof rf)return is("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ol(o,s,i)}catch(c){return is(c instanceof Kr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Ti(l.target)){const c=new B(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,_e.newNoDocument(c,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=X();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ts(e,t,this.Qe,this.ke,n);return this.ke=Ge(),this.qe=Ku(),this.Qe=new he(Y),s}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new zu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new le(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new zu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ku(){return new he(B.comparator)}function Gu(){return new he(B.comparator)}const Wb={asc:"ASCENDING",desc:"DESCENDING"},Hb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qb={and:"AND",or:"OR"};class Jb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ia(r,e){return r.useProto3Json||Qi(e)?e:{value:e}}function cr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Of(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Yb(r,e){return cr(r,e.toTimestamp())}function Be(r){return W(!!r),H.fromTimestamp(function(t){const n=At(t);return new pe(n.seconds,n.nanos)}(r))}function al(r,e){return xa(r,e).canonicalString()}function xa(r,e){const t=function(s){return new oe(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function jf(r){const e=oe.fromString(r);return W(Kf(e)),e}function Si(r,e){return al(r.databaseId,e.path)}function yn(r,e){const t=jf(e);if(t.get(1)!==r.databaseId.projectId)throw new U(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new U(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new B(Ff(t))}function Mf(r,e){return al(r.databaseId,e)}function Lf(r){const e=jf(r);return e.length===4?oe.emptyPath():Ff(e)}function Ea(r){return new oe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ff(r){return W(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Wu(r,e,t){return{name:Si(r,e),fields:t.value.mapValue.fields}}function Xb(r,e,t){const n=yn(r,e.name),s=Be(e.updateTime),i=e.createTime?Be(e.createTime):H.min(),o=new Oe({mapValue:{fields:e.fields}}),l=_e.newFoundDocument(n,s,i,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function Zb(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(W(m===void 0||typeof m=="string"),be.fromBase64String(m||"")):(W(m===void 0||m instanceof Buffer||m instanceof Uint8Array),be.fromUint8Array(m||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const m=d.code===void 0?V.UNKNOWN:kf(d.code);return new U(m,d.message||"")}(o);t=new Vf(n,s,i,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=yn(r,n.document.name),i=Be(n.document.updateTime),o=n.document.createTime?Be(n.document.createTime):H.min(),l=new Oe({mapValue:{fields:n.document.fields}}),c=_e.newFoundDocument(s,i,o,l),d=n.targetIds||[],m=n.removedTargetIds||[];t=new fi(d,m,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=yn(r,n.document),i=n.readTime?Be(n.readTime):H.min(),o=_e.newNoDocument(s,i),l=n.removedTargetIds||[];t=new fi([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=yn(r,n.document),i=n.removedTargetIds||[];t=new fi([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new qb(s,i),l=n.targetId;t=new Df(l,o)}}return t}function Ri(r,e){let t;if(e instanceof yr)t={update:Wu(r,e.key,e.value)};else if(e instanceof eo)t={delete:Si(r,e.key)};else if(e instanceof Rt)t={update:Wu(r,e.key,e.data),updateMask:iw(e.fieldMask)};else{if(!(e instanceof Cf))return K();t={verify:Si(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const l=o.transform;if(l instanceof or)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ar)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof lr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fs)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Yb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(r,e.precondition)),t}function Ta(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?je.updateTime(Be(i.updateTime)):i.exists!==void 0?je.exists(i.exists):je.none()}(e.currentDocument):je.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,l){let c=null;if("setToServerValue"in l)W(l.setToServerValue==="REQUEST_TIME"),c=new or;else if("appendMissingElements"in l){const m=l.appendMissingElements.values||[];c=new ar(m)}else if("removeAllFromArray"in l){const m=l.removeAllFromArray.values||[];c=new lr(m)}else"increment"in l?c=new fs(o,l.increment):K();const d=me.fromServerFormat(l.fieldPath);return new Rf(d,c)}(r,s)):[];if(e.update){e.update.name;const s=yn(r,e.update.name),i=new Oe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const d=c.fieldPaths||[];return new ze(d.map(m=>me.fromServerFormat(m)))}(e.updateMask);return new Rt(s,i,o,t,n)}return new yr(s,i,t,n)}if(e.delete){const s=yn(r,e.delete);return new eo(s,t)}if(e.verify){const s=yn(r,e.verify);return new Cf(s,t)}return K()}function ew(r,e){return r&&r.length>0?(W(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?Be(s.updateTime):Be(i);return o.isEqual(H.min())&&(o=Be(i)),new Fb(o,s.transformResults||[])}(t,e))):[]}function Uf(r,e){return{documents:[Mf(r,e.path)]}}function Bf(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Mf(r,s);const i=function(d){if(d.length!==0)return zf(ae.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:Wn(v.field),direction:nw(v.dir)}}(m))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Ia(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function qf(r){let e=Lf(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){W(n===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(p){const v=$f(p);return v instanceof ae&&el(v)?v.getFilters():[v]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(v=>function(S){return new Ei(Hn(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,Qi(v)?null:v}(t.limit));let c=null;t.startAt&&(c=function(p){const v=!!p.before,T=p.values||[];return new sr(T,v)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const v=!p.before,T=p.values||[];return new sr(T,v)}(t.endAt)),pf(e,s,o,i,l,"F",c,d)}function tw(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $f(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Hn(t.unaryFilter.field);return ee.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Hn(t.unaryFilter.field);return ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hn(t.unaryFilter.field);return ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hn(t.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(r):r.fieldFilter!==void 0?function(t){return ee.create(Hn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ae.create(t.compositeFilter.filters.map(n=>$f(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(r):K()}function nw(r){return Wb[r]}function rw(r){return Hb[r]}function sw(r){return Qb[r]}function Wn(r){return{fieldPath:r.canonicalString()}}function Hn(r){return me.fromServerFormat(r.fieldPath)}function zf(r){return r instanceof ee?function(t){if(t.op==="=="){if(Pu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NAN"}};if(Nu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NAN"}};if(Nu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(t.field),op:rw(t.op),value:t.value}}}(r):r instanceof ae?function(t){const n=t.getFilters().map(s=>zf(s));return n.length===1?n[0]:{compositeFilter:{op:sw(t.op),filters:n}}}(r):K()}function iw(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Kf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class It{constructor(e,t,n,s,i=H.min(),o=H.min(),l=be.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new It(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Gf{constructor(e){this.ct=e}}function ow(r,e){let t;if(e.document)t=Xb(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=B.fromSegments(e.noDocument.path),s=An(e.noDocument.readTime);t=_e.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const n=B.fromSegments(e.unknownDocument.path),s=An(e.unknownDocument.version);t=_e.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new pe(s[0],s[1]);return H.fromTimestamp(i)}(e.readTime)),t}function Hu(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ni(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:Si(i,o.key),fields:o.data.value.mapValue.fields,updateTime:cr(i,o.version.toTimestamp()),createTime:cr(i,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Tn(e.version)};else{if(!e.isUnknownDocument())return K();n.unknownDocument={path:t.path.toArray(),version:Tn(e.version)}}return n}function Ni(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Tn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function An(r){const e=new pe(r.seconds,r.nanoseconds);return H.fromTimestamp(e)}function mn(r,e){const t=(e.baseMutations||[]).map(i=>Ta(r.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const l=e.mutations[i+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>Ta(r.ct,i)),s=pe.fromMillis(e.localWriteTimeMs);return new rl(e.batchId,s,t,n)}function Gr(r){const e=An(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?An(r.lastLimboFreeSnapshotVersion):H.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return W(i.documents.length===1),We(xs(Lf(i.documents[0])))}(r.query):function(i){return We(qf(i))}(r.query),new It(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,be.fromBase64String(r.resumeToken))}function Wf(r,e){const t=Tn(e.snapshotVersion),n=Tn(e.lastLimboFreeSnapshotVersion);let s;s=Ti(e.target)?Uf(r.ct,e.target):Bf(r.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:En(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Hf(r){const e=qf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?wa(e,e.limit,"L"):e}function Go(r,e){return new il(e.largestBatchId,Ta(r.ct,e.overlayMutation))}function Qu(r,e){const t=e.path.lastSegment();return[r,Ue(e.path.popLast()),t]}function Ju(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Tn(n.readTime),documentKey:Ue(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class aw{getBundleMetadata(e,t){return Yu(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:An(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return Yu(e).put(function(s){return{bundleId:s.id,createTime:Tn(Be(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Xu(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:Hf(i.bundledQuery),readTime:An(i.readTime)}}(n)})}saveNamedQuery(e,t){return Xu(e).put(function(s){return{name:s.name,readTime:Tn(Be(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Yu(r){return Ae(r,"bundles")}function Xu(r){return Ae(r,"namedQueries")}/**
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
 */class to{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new to(e,n)}getOverlay(e,t){return Or(e).get(Qu(this.userId,t)).next(n=>n?Go(this.serializer,n):null)}getOverlays(e,t){const n=ot();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const l=new il(t,o);s.push(this.ht(e,l))}),R.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(Ue(o.getCollectionPath())));const i=[];return s.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Or(e).j("collectionPathOverlayIndex",l))}),R.waitFor(i)}getOverlaysForCollection(e,t,n){const s=ot(),i=Ue(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Or(e).U("collectionPathOverlayIndex",o).next(l=>{for(const c of l){const d=Go(this.serializer,c);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=ot();let o;const l=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Or(e).J({index:"collectionGroupOverlayIndex",range:l},(c,d,m)=>{const p=Go(this.serializer,d);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):m.done()}).next(()=>i)}ht(e,t){return Or(e).put(function(s,i,o){const[l,c,d]=Qu(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:d,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ri(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Or(r){return Ae(r,"documentOverlays")}/**
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
 */class lw{Pt(e){return Ae(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t?.value;return n?be.fromUint8Array(n):be.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class pn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(fe(e.integerValue));else if("doubleValue"in e){const n=fe(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ls(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=At(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Ht(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?sf(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Ji(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):K()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const s of Object.keys(n))this.Vt(s,t),this.Tt(n[s],t)}wt(e,t){var n,s;const i=e.fields||{};this.dt(t,53);const o="value",l=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(fe(l)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const s of n)this.Tt(s,t)}yt(e,t){this.dt(t,37),B.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}pn.vt=new pn;function cw(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Zu(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=cw(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class uw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),n=Zu(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),n=Zu(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class hw{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class dw{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class jr{constructor(){this.jt=new uw,this.Ht=new hw(this.jt),this.Jt=new dw(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class gn{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new gn(this.indexId,this.documentKey,this.arrayValue,n)}}function Vt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=eh(r.arrayValue,e.arrayValue),t!==0?t:(t=eh(r.directionalValue,e.directionalValue),t!==0?t:B.comparator(r.documentKey,e.documentKey)))}function eh(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class th{constructor(e){this.Xt=new le((t,n)=>me.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(W(e.collectionGroup===this.collectionId),this.nn)return!1;const t=fa(e);if(t!==void 0&&!this.sn(t))return!1;const n=dn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const l=this.Xt.getIterator().getNext();if(!s.has(l.field.canonicalString())){const c=n[i];if(!this.on(l,c)||!this._n(this.en[o++],c))return!1}++i}for(;i<n.length;++i){const l=n[i];if(o>=this.en.length||!this._n(this.en[o++],l))return!1}return!0}an(){if(this.nn)return null;let e=new le(me.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new li(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new li(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new li(n.field,n.dir==="asc"?0:1)));return new xi(xi.UNKNOWN_ID,this.collectionId,t,as.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Qf(r){var e,t;if(W(r instanceof ee||r instanceof ae),r instanceof ee){if(r instanceof mf){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ee.create(r.field,"==",i)))||[];return ae.create(s,"or")}return r}const n=r.filters.map(s=>Qf(s));return ae.create(n,r.op)}function fw(r){if(r.getFilters().length===0)return[];const e=Ra(Qf(r));return W(Jf(e)),Aa(e)||Sa(e)?[e]:e.getFilters()}function Aa(r){return r instanceof ee}function Sa(r){return r instanceof ae&&el(r)}function Jf(r){return Aa(r)||Sa(r)||function(t){if(t instanceof ae&&_a(t)){for(const n of t.getFilters())if(!Aa(n)&&!Sa(n))return!1;return!0}return!1}(r)}function Ra(r){if(W(r instanceof ee||r instanceof ae),r instanceof ee)return r;if(r.filters.length===1)return Ra(r.filters[0]);const e=r.filters.map(n=>Ra(n));let t=ae.create(e,r.op);return t=Pi(t),Jf(t)?t:(W(t instanceof ae),W(ir(t)),W(t.filters.length>1),t.filters.reduce((n,s)=>ll(n,s)))}function ll(r,e){let t;return W(r instanceof ee||r instanceof ae),W(e instanceof ee||e instanceof ae),t=r instanceof ee?e instanceof ee?function(s,i){return ae.create([s,i],"and")}(r,e):nh(r,e):e instanceof ee?nh(e,r):function(s,i){if(W(s.filters.length>0&&i.filters.length>0),ir(s)&&ir(i))return hf(s,i.getFilters());const o=_a(s)?s:i,l=_a(s)?i:s,c=o.filters.map(d=>ll(d,l));return ae.create(c,"or")}(r,e),Pi(t)}function nh(r,e){if(ir(e))return hf(e,r.getFilters());{const t=e.filters.map(n=>ll(r,n));return ae.create(t,"or")}}function Pi(r){if(W(r instanceof ee||r instanceof ae),r instanceof ee)return r;const e=r.getFilters();if(e.length===1)return Pi(e[0]);if(cf(r))return r;const t=e.map(s=>Pi(s)),n=[];return t.forEach(s=>{s instanceof ee?n.push(s):s instanceof ae&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:ae.create(n,r.op)}/**
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
 */class mw{constructor(){this.un=new cl}addToCollectionParentIndex(e,t){return this.un.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Qe.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Qe.min())}updateCollectionGroup(e,t,n){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class cl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new le(oe.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new le(oe.comparator)).toArray()}}/**
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
 */const Ys=new Uint8Array(0);class pw{constructor(e,t){this.databaseId=t,this.cn=new cl,this.ln=new en(n=>En(n),(n,s)=>ws(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:n,parent:Ue(s)};return rh(e).put(i)}return R.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[Kd(t),""],!1,!0);return rh(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(it(o.parent))}return n})}addFieldIndex(e,t){const n=Mr(e),s=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=qn(e);return i.next(l=>{o.put(Ju(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Mr(e),s=qn(e),i=Bn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Mr(e),n=Bn(e),s=qn(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return R.forEach(this.hn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new th(n).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Bn(e);let s=!0;const i=new Map;return R.forEach(this.hn(t),o=>this.Pn(e,o).next(l=>{s&&(s=!!l),i.set(o,l)})).next(()=>{if(s){let o=X();const l=[];return R.forEach(i,(c,d)=>{O("IndexedDbIndexManager",`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(q=>`${q.fieldPath}:${q.kind}`).join(",")}`}(c)} to execute ${En(t)}`);const m=function(M,q){const N=fa(q);if(N===void 0)return null;for(const P of Ai(M,N.fieldPath))switch(P.op){case"array-contains-any":return P.value.arrayValue.values||[];case"array-contains":return[P.value]}return null}(d,c),p=function(M,q){const N=new Map;for(const P of dn(q))for(const w of Ai(M,P.fieldPath))switch(w.op){case"==":case"in":N.set(P.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return N.set(P.fieldPath.canonicalString(),w.value),Array.from(N.values())}return null}(d,c),v=function(M,q){const N=[];let P=!0;for(const w of dn(q)){const _=w.kind===0?Ou(M,w.fieldPath,M.startAt):ju(M,w.fieldPath,M.startAt);N.push(_.value),P&&(P=_.inclusive)}return new sr(N,P)}(d,c),T=function(M,q){const N=[];let P=!0;for(const w of dn(q)){const _=w.kind===0?ju(M,w.fieldPath,M.endAt):Ou(M,w.fieldPath,M.endAt);N.push(_.value),P&&(P=_.inclusive)}return new sr(N,P)}(d,c),S=this.In(c,d,v),D=this.In(c,d,T),C=this.Tn(c,d,p),z=this.En(c.indexId,m,S,v.inclusive,D,T.inclusive,C);return R.forEach(z,j=>n.G(j,t.limit).next(M=>{M.forEach(q=>{const N=B.fromSegments(q.documentKey);o.has(N)||(o=o.add(N),l.push(N))})}))}).next(()=>l)}return R.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=fw(ae.create(e.filters,"and")).map(n=>va(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,s,i,o,l){const c=(t!=null?t.length:1)*Math.max(n.length,i.length),d=c/(t!=null?t.length:1),m=[];for(let p=0;p<c;++p){const v=t?this.dn(t[p/d]):Ys,T=this.An(e,v,n[p%d],s),S=this.Rn(e,v,i[p%d],o),D=l.map(C=>this.An(e,v,C,!0));m.push(...this.createRange(T,S,D))}return m}An(e,t,n,s){const i=new gn(e,B.empty(),t,n);return s?i:i.Zt()}Rn(e,t,n,s){const i=new gn(e,B.empty(),t,n);return s?i.Zt():i}Pn(e,t){const n=new th(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const l of i)n.rn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let n=2;const s=this.hn(t);return R.forEach(s,i=>this.Pn(e,i).next(o=>{o?n!==0&&o.fields.length<function(c){let d=new le(me.comparator),m=!1;for(const p of c.filters)for(const v of p.getFlattenedFilters())v.field.isKeyField()||(v.op==="array-contains"||v.op==="array-contains-any"?m=!0:d=d.add(v.field));for(const p of c.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(m?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Vn(e,t){const n=new jr;for(const s of dn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Yt(s.kind);pn.vt.It(i,o)}return n.zt()}dn(e){const t=new jr;return pn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new jr;return pn.vt.It(hs(this.databaseId,t),n.Yt(function(i){const o=dn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let s=[];s.push(new jr);let i=0;for(const o of dn(e)){const l=n[i++];for(const c of s)if(this.fn(t,o.fieldPath)&&ds(l))s=this.gn(s,o,l);else{const d=c.Yt(o.kind);pn.vt.It(l,d)}}return this.pn(s)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const l of s){const c=new jr;c.seed(l.zt()),pn.vt.It(o,c.Yt(t.kind)),i.push(c)}return i}fn(e,t){return!!e.filters.find(n=>n instanceof ee&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Mr(e),s=qn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(i=>{const o=[];return R.forEach(i,l=>s.get([l.indexId,this.uid]).next(c=>{o.push(function(m,p){const v=p?new as(p.sequenceNumber,new Qe(An(p.readTime),new B(it(p.documentKey)),p.largestBatchId)):as.empty(),T=m.fields.map(([S,D])=>new li(me.fromServerFormat(S),D));return new xi(m.indexId,m.collectionGroup,T,v)}(l,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:Y(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Mr(e),i=qn(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(l=>R.forEach(l,c=>i.put(Ju(c.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return R.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(l=>(n.set(s.collectionGroup,l),R.forEach(l,c=>this.wn(e,s,c).next(d=>{const m=this.Sn(i,c);return d.isEqual(m)?R.resolve():this.bn(e,i,c,d,m)}))))})}Dn(e,t,n,s){return Bn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,s){return Bn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const s=Bn(e);let i=new le(Vt);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,l)=>{i=i.add(new gn(n.indexId,t,l.arrayValue,l.directionalValue))}).next(()=>i)}Sn(e,t){let n=new le(Vt);const s=this.Vn(t,e);if(s==null)return n;const i=fa(t);if(i!=null){const o=e.data.field(i.fieldPath);if(ds(o))for(const l of o.arrayValue.values||[])n=n.add(new gn(t.indexId,e.key,this.dn(l),s))}else n=n.add(new gn(t.indexId,e.key,Ys,s));return n}bn(e,t,n,s,i){O("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,d,m,p,v){const T=c.getIterator(),S=d.getIterator();let D=Un(T),C=Un(S);for(;D||C;){let z=!1,j=!1;if(D&&C){const M=m(D,C);M<0?j=!0:M>0&&(z=!0)}else D!=null?j=!0:z=!0;z?(p(C),C=Un(S)):j?(v(D),D=Un(T)):(D=Un(T),C=Un(S))}}(s,i,Vt,l=>{o.push(this.Dn(e,t,n,l))},l=>{o.push(this.vn(e,t,n,l))}),R.waitFor(o)}yn(e){let t=1;return qn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,l)=>Vt(o,l)).filter((o,l,c)=>!l||Vt(o,c[l-1])!==0);const s=[];s.push(e);for(const o of n){const l=Vt(o,e),c=Vt(o,t);if(l===0)s[0]=e.Zt();else if(l>0&&c<0)s.push(o),s.push(o.Zt());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const l=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Ys,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Ys,[]];i.push(IDBKeyRange.bound(l,c))}return i}Cn(e,t){return Vt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(sh)}getMinOffset(e,t){return R.mapArray(this.hn(t),n=>this.Pn(e,n).next(s=>s||K())).next(sh)}}function rh(r){return Ae(r,"collectionParents")}function Bn(r){return Ae(r,"indexEntries")}function Mr(r){return Ae(r,"indexConfiguration")}function qn(r){return Ae(r,"indexState")}function sh(r){W(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Qa(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Qe(e.readTime,e.documentKey,t)}/**
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
 */const ih={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class qe{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new qe(e,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Yf(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=n.J({range:o},(m,p,v)=>(l++,v.delete()));i.push(c.next(()=>{W(l===1)}));const d=[];for(const m of t.mutations){const p=Xd(e,m.key.path,t.batchId);i.push(s.delete(p)),d.push(m.key)}return R.waitFor(i).next(()=>d)}function Ci(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw K();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */qe.DEFAULT_COLLECTION_PERCENTILE=10,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qe.DEFAULT=new qe(41943040,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qe.DISABLED=new qe(-1,0,0);class no{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(e,t,n,s){W(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new no(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ot(e).J({index:"userMutationsIndex",range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=Qn(e),o=Ot(e);return o.add({}).next(l=>{W(typeof l=="number");const c=new rl(l,t,n,s),d=function(T,S,D){const C=D.baseMutations.map(j=>Ri(T.ct,j)),z=D.mutations.map(j=>Ri(T.ct,j));return{userId:S,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:C,mutations:z}}(this.serializer,this.userId,c),m=[];let p=new le((v,T)=>Y(v.canonicalString(),T.canonicalString()));for(const v of s){const T=Xd(this.userId,v.key.path,l);p=p.add(v.key.path.popLast()),m.push(o.put(d)),m.push(i.put(T,Zv))}return p.forEach(v=>{m.push(this.indexManager.addToCollectionParentIndex(e,v))}),e.addOnCommittedListener(()=>{this.Fn[l]=c.keys()}),R.waitFor(m).next(()=>c)})}lookupMutationBatch(e,t){return Ot(e).get(t).next(n=>n?(W(n.userId===this.userId),mn(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?R.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Ot(e).J({index:"userMutationsIndex",range:s},(o,l,c)=>{l.userId===this.userId&&(W(l.batchId>=n),i=mn(this.serializer,l)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Ot(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ot(e).U("userMutationsIndex",t).next(n=>n.map(s=>mn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ci(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Qn(e).J({range:s},(o,l,c)=>{const[d,m,p]=o,v=it(m);if(d===this.userId&&t.path.isEqual(v))return Ot(e).get(p).next(T=>{if(!T)throw K();W(T.userId===this.userId),i.push(mn(this.serializer,T))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new le(Y);const s=[];return t.forEach(i=>{const o=ci(this.userId,i.path),l=IDBKeyRange.lowerBound(o),c=Qn(e).J({range:l},(d,m,p)=>{const[v,T,S]=d,D=it(T);v===this.userId&&i.path.isEqual(D)?n=n.add(S):p.done()});s.push(c)}),R.waitFor(s).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=ci(this.userId,n),o=IDBKeyRange.lowerBound(i);let l=new le(Y);return Qn(e).J({range:o},(c,d,m)=>{const[p,v,T]=c,S=it(v);p===this.userId&&n.isPrefixOf(S)?S.length===s&&(l=l.add(T)):m.done()}).next(()=>this.xn(e,l))}xn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(Ot(e).get(i).next(o=>{if(o===null)throw K();W(o.userId===this.userId),n.push(mn(this.serializer,o))}))}),R.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return Yf(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),R.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Qn(e).J({range:n},(i,o,l)=>{if(i[0]===this.userId){const c=it(i[1]);s.push(c)}else l.done()}).next(()=>{W(s.length===0)})})}containsKey(e,t){return Xf(e,this.userId,t)}Nn(e){return Zf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Xf(r,e,t){const n=ci(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Qn(r).J({range:i,H:!0},(l,c,d)=>{const[m,p,v]=l;m===e&&p===s&&(o=!0),d.done()}).next(()=>o)}function Ot(r){return Ae(r,"mutations")}function Qn(r){return Ae(r,"documentMutations")}function Zf(r){return Ae(r,"mutationQueues")}/**
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
 */class Sn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Sn(0)}static kn(){return new Sn(-1)}}/**
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
 */class gw{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new Sn(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>H.fromTimestamp(new pe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>$n(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(W(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return $n(e).J((o,l)=>{const c=Gr(l);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>R.waitFor(i)).next(()=>s)}forEachTarget(e,t){return $n(e).J((n,s)=>{const i=Gr(s);t(i)})}qn(e){return oh(e).get("targetGlobalKey").next(t=>(W(t!==null),t))}Qn(e,t){return oh(e).put("targetGlobalKey",t)}Kn(e,t){return $n(e).put(Wf(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=En(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return $n(e).J({range:s,index:"queryTargetsIndex"},(o,l,c)=>{const d=Gr(l);ws(t,d.target)&&(i=d,c.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=Ut(e);return t.forEach(o=>{const l=Ue(o.path);s.push(i.put({targetId:n,path:l})),s.push(this.referenceDelegate.addReference(e,n,o))}),R.waitFor(s)}removeMatchingKeys(e,t,n){const s=Ut(e);return R.forEach(t,i=>{const o=Ue(i.path);return R.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=Ut(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Ut(e);let i=X();return s.J({range:n,H:!0},(o,l,c)=>{const d=it(o[1]),m=new B(d);i=i.add(m)}).next(()=>i)}containsKey(e,t){const n=Ue(t.path),s=IDBKeyRange.bound([n],[Kd(n)],!1,!0);let i=0;return Ut(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,l],c,d)=>{o!==0&&(i++,d.done())}).next(()=>i>0)}ot(e,t){return $n(e).get(t).next(n=>n?Gr(n):null)}}function $n(r){return Ae(r,"targets")}function oh(r){return Ae(r,"targetGlobal")}function Ut(r){return Ae(r,"targetDocuments")}/**
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
 */function ah([r,e],[t,n]){const s=Y(r,t);return s===0?Y(e,n):s}class _w{constructor(e){this.Un=e,this.buffer=new le(ah),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ah(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yw{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){O("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Zt(t)?O("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Xt(t)}await this.Hn(3e5)})}}class vw{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return R.resolve($e.oe);const n=new _w(t);return this.Jn.forEachTarget(e,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(ih)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ih):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,s,i,o,l,c,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,l=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(d=Date.now(),Kn()<=Z.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(d-c)+`ms
Total Duration: ${d-m}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function bw(r,e){return new vw(r,e)}/**
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
 */class ww{constructor(e,t){this.db=e,this.garbageCollector=bw(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,s)=>t(s))}addReference(e,t,n){return Xs(e,n)}removeReference(e,t,n){return Xs(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Xs(e,t)}nr(e,t){return function(s,i){let o=!1;return Zf(s).Y(l=>Xf(s,l,i).next(c=>(c&&(o=!0),R.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,l)=>{if(l<=t){const c=this.nr(e,o).next(d=>{if(!d)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,H.min()),Ut(e).delete(function(p){return[0,Ue(p.path)]}(o))))});s.push(c)}}).next(()=>R.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Xs(e,t)}tr(e,t){const n=Ut(e);let s,i=$e.oe;return n.J({index:"documentTargetsIndex"},([o,l],{path:c,sequenceNumber:d})=>{o===0?(i!==$e.oe&&t(new B(it(s)),i),i=d,s=c):i=$e.oe}).next(()=>{i!==$e.oe&&t(new B(it(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Xs(r,e){return Ut(r).put(function(n,s){return{targetId:0,path:Ue(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
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
 */class em{constructor(){this.changes=new en(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?R.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Iw{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return un(e).put(n)}removeEntry(e,t,n){return un(e).delete(function(i,o){const l=i.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Ni(o),l[l.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=_e.newInvalidDocument(t);return un(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Lr(t))},(s,i)=>{n=this.ir(t,i)}).next(()=>n)}sr(e,t){let n={size:0,document:_e.newInvalidDocument(t)};return un(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Lr(t))},(s,i)=>{n={document:this.ir(t,i),size:Ci(i)}}).next(()=>n)}getEntries(e,t){let n=Ge();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);n=n.insert(s,o)}).next(()=>n)}ar(e,t){let n=Ge(),s=new he(B.comparator);return this._r(e,t,(i,o)=>{const l=this.ir(i,o);n=n.insert(i,l),s=s.insert(i,Ci(o))}).next(()=>({documents:n,ur:s}))}_r(e,t,n){if(t.isEmpty())return R.resolve();let s=new le(uh);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Lr(s.first()),Lr(s.last())),o=s.getIterator();let l=o.getNext();return un(e).J({index:"documentKeyIndex",range:i},(c,d,m)=>{const p=B.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;l&&uh(l,p)<0;)n(l,null),l=o.getNext();l&&l.isEqual(p)&&(n(l,d),l=o.hasNext()?o.getNext():null),l?m.$(Lr(l)):m.done()}).next(()=>{for(;l;)n(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),Ni(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return un(e).U(IDBKeyRange.bound(l,c,!0)).next(d=>{i?.incrementDocumentReadCount(d.length);let m=Ge();for(const p of d){const v=this.ir(B.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);v.isFoundDocument()&&(Es(t,v)||s.has(v.key))&&(m=m.insert(v.key,v))}return m})}getAllFromCollectionGroup(e,t,n,s){let i=Ge();const o=ch(t,n),l=ch(t,Qe.max());return un(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,l,!0)},(c,d,m)=>{const p=this.ir(B.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(p.key,p),i.size===s&&m.done()}).next(()=>i)}newChangeBuffer(e){return new xw(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return lh(e).get("remoteDocumentGlobalKey").next(t=>(W(!!t),t))}rr(e,t){return lh(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=ow(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(H.min())))return n}return _e.newInvalidDocument(e)}}function tm(r){return new Iw(r)}class xw extends em{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new en(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new le((i,o)=>Y(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const l=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,l.readTime)),o.isValidDocument()){const c=Hu(this.cr.serializer,o);s=s.add(i.path.popLast());const d=Ci(c);n+=d-l.size,t.push(this.cr.addEntry(e,i,c))}else if(n-=l.size,this.trackRemovals){const c=Hu(this.cr.serializer,o.convertToNoDocument(H.min()));t.push(this.cr.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,n)),R.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function lh(r){return Ae(r,"remoteDocumentGlobal")}function un(r){return Ae(r,"remoteDocumentsV14")}function Lr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ch(r,e){const t=e.documentKey.path.toArray();return[r,Ni(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function uh(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=Y(t[i],n[i]),s)return s;return s=Y(t.length,n.length),s||(s=Y(t[t.length-2],n[n.length-2]),s||Y(t[t.length-1],n[n.length-1]))}/**
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
 */class Ew{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class nm{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Zr(n.mutation,s,ze.empty(),pe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,X()).next(()=>n))}getLocalViewOfDocuments(e,t,n=X()){const s=ot();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=zr();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=ot();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,X()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,n,s){let i=Ge();const o=Xr(),l=function(){return Xr()}();return t.forEach((c,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Rt)?i=i.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),Zr(m.mutation,d,m.mutation.getFieldMask(),pe.now())):o.set(d.key,ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((d,m)=>o.set(d,m)),t.forEach((d,m)=>{var p;return l.set(d,new Ew(m,(p=o.get(d))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const n=Xr();let s=new he((o,l)=>o-l),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const d=t.get(c);if(d===null)return;let m=n.get(c)||ze.empty();m=l.applyToLocalView(d,m),n.set(c,m);const p=(s.get(l.batchId)||X()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,m=c.value,p=If();m.forEach(v=>{if(!i.has(v)){const T=Nf(t.get(v),n.get(v));T!==null&&p.set(v,T),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return R.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):R.resolve(ot());let l=-1,c=i;return o.next(d=>R.forEach(d,(m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?R.resolve():this.remoteDocumentCache.getEntry(e,m).next(v=>{c=c.insert(m,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,c,d,X())).next(m=>({batchId:l,changes:wf(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(n=>{let s=zr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=zr();return this.indexManager.getCollectionParents(e,i).next(l=>R.forEach(l,c=>{const d=function(p,v){return new Is(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next(m=>{m.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((c,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,_e.newInvalidDocument(m)))});let l=zr();return o.forEach((c,d)=>{const m=i.get(c);m!==void 0&&Zr(m.mutation,d,ze.empty(),pe.now()),Es(t,d)&&(l=l.insert(c,d))}),l})}}/**
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
 */class Tw{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return R.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Be(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Hf(s.bundledQuery),readTime:Be(s.readTime)}}(t)),R.resolve()}}/**
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
 */class Aw{constructor(){this.overlays=new he(B.comparator),this.Ir=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ot();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.ht(e,t,i)}),R.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),R.resolve()}getOverlaysForCollection(e,t,n){const s=ot(),i=t.length+1,o=new B(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new he((d,m)=>d-m);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=ot(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=ot(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return R.resolve(l)}ht(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new il(t,n));let i=this.Ir.get(t);i===void 0&&(i=X(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}/**
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
 */class Sw{constructor(){this.sessionToken=be.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
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
 */class ul{constructor(){this.Tr=new le(Se.Er),this.dr=new le(Se.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Se(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Se(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new B(new oe([])),n=new Se(t,e),s=new Se(t,e+1),i=[];return this.dr.forEachInRange([n,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new oe([])),n=new Se(t,e),s=new Se(t,e+1);let i=X();return this.dr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Se(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Se{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
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
 */class Rw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new le(Se.Er)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rl(i,t,n,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Se(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.vr(n),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],o=>{const l=this.Dr(o.wr);i.push(l)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new le(Y);return t.forEach(s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{n=n.add(l.wr)})}),R.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;B.isDocumentKey(i)||(i=i.child(""));const o=new Se(new B(i),0);let l=new le(Y);return this.br.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(l=l.add(c.wr)),!0)},o),R.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(n=>{const s=this.Dr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){W(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return R.forEach(t.mutations,s=>{const i=new Se(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Se(t,0),s=this.br.firstAfterOrEqual(n);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Nw{constructor(e){this.Mr=e,this.docs=function(){return new he(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return R.resolve(n?n.document.mutableCopy():_e.newInvalidDocument(t))}getEntries(e,t){let n=Ge();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():_e.newInvalidDocument(s))}),R.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ge();const o=t.path,l=new B(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:m}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Qa(Wd(m),n)<=0||(s.has(m.key)||Es(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,n,s){K()}Or(e,t){return R.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Pw(this)}getSize(e){return R.resolve(this.size)}}class Pw extends em{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(n)}),R.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Cw{constructor(e){this.persistence=e,this.Nr=new en(t=>En(t),ws),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ul,this.targetCount=0,this.kr=Sn.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),R.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Sn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Kn(t),R.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return R.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),R.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return R.resolve(n)}containsKey(e,t){return R.resolve(this.Br.containsKey(t))}}/**
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
 */class rm{constructor(e,t){this.qr={},this.overlays={},this.Qr=new $e(0),this.Kr=!1,this.Kr=!0,this.$r=new Sw,this.referenceDelegate=e(this),this.Ur=new Cw(this),this.indexManager=new mw,this.remoteDocumentCache=function(s){return new Nw(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Gf(t),this.Gr=new Tw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Aw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Rw(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){O("MemoryPersistence","Starting transaction:",e);const s=new kw(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return R.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class kw extends Qd{constructor(e){super(),this.currentSequenceNumber=e}}class ro{constructor(e){this.persistence=e,this.Jr=new ul,this.Yr=null}static Zr(e){return new ro(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),R.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),R.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,n=>{const s=B.fromPath(n);return this.ei(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return R.or([()=>R.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Dw{constructor(e){this.serializer=e}O(e,t,n,s){const i=new Hi("createOrUpgrade",t);n<1&&s>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Eu,{unique:!0}),c.createObjectStore("documentMutations")}(e),hh(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=R.resolve();return n<3&&s>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),hh(e)),o=o.next(()=>function(c){const d=c.store("targetGlobal"),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",m)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(c,d){return d.store("mutations").U().next(m=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Eu,{unique:!0});const p=d.store("mutations"),v=m.map(T=>p.put(T));return R.waitFor(v)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.ni(i))),n<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),n<7&&s>=7&&(o=o.next(()=>this.ii(i))),n<8&&s>=8&&(o=o.next(()=>this.si(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.oi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(c){const d=c.createObjectStore("documentOverlays",{keyPath:hb});d.createIndex("collectionPathOverlayIndex",db,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",fb,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(c){const d=c.createObjectStore("remoteDocumentsV14",{keyPath:eb});d.createIndex("documentKeyIndex",tb),d.createIndex("collectionGroupIndex",nb)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),n<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:ab}).createIndex("sequenceNumberIndex",lb,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:cb}).createIndex("documentKeyIndex",ub,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=Ci(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>R.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(l=>R.forEach(l,c=>{W(c.userId===i.userId);const d=mn(this.serializer,c);return Yf(e,i.userId,d).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((o,l)=>{const c=new oe(o),d=function(p){return[0,Ue(p)]}(c);i.push(t.get(d).next(m=>m?R.resolve():(p=>t.put({targetId:0,path:Ue(p),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>R.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:ob});const n=t.store("collectionParents"),s=new cl,i=o=>{if(s.add(o)){const l=o.lastSegment(),c=o.popLast();return n.put({collectionId:l,parent:Ue(c)})}};return t.store("remoteDocuments").J({H:!0},(o,l)=>{const c=new oe(o);return i(c.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,l,c],d)=>{const m=it(l);return i(m.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,s)=>{const i=Gr(s),o=Wf(this.serializer,i);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((i,o)=>{const l=t.store("remoteDocumentsV14"),c=function(p){return p.document?new B(oe.fromString(p.document.name).popFirst(5)):p.noDocument?B.fromSegments(p.noDocument.path):p.unknownDocument?B.fromSegments(p.unknownDocument.path):K()}(o).path.toArray(),d={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(l.put(d))}).next(()=>R.waitFor(s))}ai(e,t){const n=t.store("mutations"),s=tm(this.serializer),i=new rm(ro.Zr,this.serializer.ct);return n.U().next(o=>{const l=new Map;return o.forEach(c=>{var d;let m=(d=l.get(c.userId))!==null&&d!==void 0?d:X();mn(this.serializer,c).keys().forEach(p=>m=m.add(p)),l.set(c.userId,m)}),R.forEach(l,(c,d)=>{const m=new Ve(d),p=to.lt(this.serializer,m),v=i.getIndexManager(m),T=no.lt(m,this.serializer,v,i.referenceDelegate);return new nm(s,T,p,v).recalculateAndSaveOverlaysForDocumentKeys(new ma(t,$e.oe),c).next()})})}}function hh(r){r.createObjectStore("targetDocuments",{keyPath:sb}).createIndex("documentTargetsIndex",ib,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",rb,{unique:!0}),r.createObjectStore("targetGlobal")}const Wo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class hl{constructor(e,t,n,s,i,o,l,c,d,m,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=o,this.document=l,this.ci=d,this.li=m,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=v=>Promise.resolve(),!hl.D())throw new U(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ww(this,s),this.Ai=t+"main",this.serializer=new Gf(c),this.Ri=new Kt(this.Ai,this.hi,new Dw(this.serializer)),this.$r=new lw,this.Ur=new gw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=tm(this.serializer),this.Gr=new aw,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,m===!1&&ye("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new U(V.FAILED_PRECONDITION,Wo);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new $e(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Zs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Zt(e))return O("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return O("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Fr(e).get("owner").next(t=>R.resolve(this.vi(t)))}Ci(e){return Zs(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Ae(t,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(l=>i.indexOf(l)===-1);return R.forEach(o,l=>n.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?R.resolve(!0):Fr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new U(V.FAILED_PRECONDITION,Wo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Zs(e).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,l=this.networkEnabled===s.networkEnabled;if(i||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&O("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ma(e,$e.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Zs(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return no.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new pw(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return to.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){O("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===17?gb:c===16?pb:c===15?Ya:c===14?tf:c===13?ef:c===12?mb:c===11?Zd:void K()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,l=>(o=new ma(l,this.Qr?this.Qr.next():$e.oe),t==="readwrite-primary"?this.wi(o).next(c=>!!c||this.Si(o)).next(c=>{if(!c)throw ye(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new U(V.FAILED_PRECONDITION,Hd);return n(o)}).next(c=>this.Di(o).next(()=>c)):this.Ki(o).next(()=>n(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Ki(e){return Fr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new U(V.FAILED_PRECONDITION,Wo)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Fr(e).put("owner",t)}static D(){return Kt.D()}bi(e){const t=Fr(e);return t.get("owner").next(n=>this.vi(n)?(O("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):R.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ye(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Yh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return O("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ye("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){ye("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Fr(r){return Ae(r,"owner")}function Zs(r){return Ae(r,"clientMetadata")}function sm(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class dl{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=s}static Wi(e,t){let n=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dl(e,t.fromCache,n,s)}}/**
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
 */class Vw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class im{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Yh()?8:Jd(Te())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Vw;return this.Xi(e,t,o).next(l=>{if(i.result=l,this.zi)return this.es(e,t,o,l.size)})}).next(()=>i.result)}es(e,t,n,s){return n.documentReadCount<this.ji?(Kn()<=Z.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Gn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(Kn()<=Z.DEBUG&&O("QueryEngine","Query:",Gn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(Kn()<=Z.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Gn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,We(t))):R.resolve())}Yi(e,t){if(Mu(t))return R.resolve(null);let n=We(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=wa(t,null,"F"),n=We(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=X(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const d=this.ts(t,l);return this.ns(t,d,o,c.readTime)?this.Yi(e,wa(t,null,"F")):this.rs(e,d,t,c)}))})))}Zi(e,t,n,s){return Mu(t)||s.isEqual(H.min())?R.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const o=this.ts(t,i);return this.ns(t,o,n,s)?R.resolve(null):(Kn()<=Z.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gn(t)),this.rs(e,o,t,Gd(s,-1)).next(l=>l))})}ts(e,t){let n=new le(vf(e));return t.forEach((s,i)=>{Es(e,i)&&(n=n.add(i))}),n}ns(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,n){return Kn()<=Z.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Gn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Qe.min(),n)}rs(e,t,n,s){return this.Ji.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Ow{constructor(e,t,n,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new he(Y),this._s=new en(i=>En(i),ws),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nm(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function om(r,e,t,n){return new Ow(r,e,t,n)}async function am(r,e){const t=G(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],l=[];let c=X();for(const d of s){o.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}return t.localDocuments.getDocuments(n,c).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function jw(r,e){const t=G(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,d,m){const p=d.batch,v=p.keys();let T=R.resolve();return v.forEach(S=>{T=T.next(()=>m.getEntry(c,S)).next(D=>{const C=d.docVersions.get(S);W(C!==null),D.version.compareTo(C)<0&&(p.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),m.addEntry(D)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=X();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function lm(r){const e=G(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Mw(r,e){const t=G(r),n=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((m,p)=>{const v=s.get(p);if(!v)return;l.push(t.Ur.removeMatchingKeys(i,m.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,m.addedDocuments,p)));let T=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(be.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):m.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(m.resumeToken,n)),s=s.insert(p,T),function(D,C,z){return D.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(v,T,m)&&l.push(t.Ur.updateTargetData(i,T))});let c=Ge(),d=X();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(Lw(i,o,e.documentUpdates).next(m=>{c=m.Ps,d=m.Is})),!n.isEqual(H.min())){const m=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));l.push(m)}return R.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(t.os=s,i))}function Lw(r,e,t){let n=X(),s=X();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=Ge();return t.forEach((l,c)=>{const d=i.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):O("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function Fw(r,e){const t=G(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function ki(r,e){const t=G(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Ur.getTargetData(n,e).next(i=>i?(s=i,R.resolve(s)):t.Ur.allocateTargetId(n).next(o=>(s=new It(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function ur(r,e,t){const n=G(r),s=n.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zt(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(s.target)}function Na(r,e,t){const n=G(r);let s=H.min(),i=X();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,d,m){const p=G(c),v=p._s.get(m);return v!==void 0?R.resolve(p.os.get(v)):p.Ur.getTargetData(d,m)}(n,o,We(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?s:H.min(),t?i:X())).next(l=>(hm(n,yf(e),l),{documents:l,Ts:i})))}function cm(r,e){const t=G(r),n=G(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,e).next(o=>o?o.target:null))}function um(r,e){const t=G(r),n=t.us.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,Gd(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(hm(t,e,s),s))}function hm(r,e,t){let n=r.us.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(e,n)}function dh(r,e){return`firestore_clients_${r}_${e}`}function fh(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function Ho(r,e){return`firestore_targets_${r}_${e}`}class Di{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Rs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new U(s.error.code,s.error.message))),o?new Di(e,t,s.state,i):(ye("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class es{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new U(n.error.code,n.error.message))),i?new es(e,n.state,s):(ye("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=tl();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=Yd(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Vi(e,i):(ye("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class fl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new fl(t.clientId,t.onlineState):(ye("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Pa{constructor(){this.activeTargetIds=tl()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qo{constructor(e,t,n,s,i){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new he(Y),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=dh(this.persistenceKey,this.ps),this.vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Pa),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Os=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const s=this.getItem(dh(this.persistenceKey,n));if(s){const i=Vi.Rs(n,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Ho(this.persistenceKey,e));if(s){const i=es.Rs(e,s);i&&(n=i.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ho(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return O("SharedClientState","READ",e,t),t}setItem(e,t){O("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){O("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(O("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void ye("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(i){let o=$e.oe;if(i!=null)try{const l=JSON.parse(i);W(typeof l=="number"),o=l}catch(l){ye("SharedClientState","Failed to read sequence number from WebStorage",l)}return o}(t.newValue);n!==$e.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const s=new Di(this.currentUser,e,t,n),i=fh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=fh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const s=Ho(this.persistenceKey,e),i=new es(e,t,n);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return Vi.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Di.Rs(new Ve(i),s,t)}Ys(e,t){const n=this.Ms.exec(e),s=Number(n[1]);return es.Rs(s,t)}Ls(e){return fl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);O("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(n),o=[],l=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||l.push(c)}),this.syncEngine.io(o,l).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=tl();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class dm{constructor(){this.so=new Pa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pa,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Uw{_o(e){}shutdown(){}}/**
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
 */class mh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ei=null;function Jo(){return ei===null?ei=function(){return 268435456+Math.round(2147483648*Math.random())}():ei++,"0x"+ei.toString(16)}/**
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
 */const Bw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class qw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const De="WebChannelConnection";class $w extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,n,s,i,o){const l=Jo(),c=this.xo(t,n.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(t,c,d,s).then(m=>(O("RestConnection",`Received RPC '${t}' ${l}: `,m),m),m=>{throw is("RestConnection",`RPC '${t}' ${l} failed with error: `,m,"url: ",c,"request:",s),m})}Lo(t,n,s,i,o,l){return this.Mo(t,n,s,i,o)}Oo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_r}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,n){const s=Bw[t];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,s){const i=Jo();return new Promise((o,l)=>{const c=new Fd;c.setWithCredentials(!0),c.listenOnce(Ud.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ai.NO_ERROR:const m=c.getResponseJson();O(De,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),o(m);break;case ai.TIMEOUT:O(De,`RPC '${e}' ${i} timed out`),l(new U(V.DEADLINE_EXCEEDED,"Request time out"));break;case ai.HTTP_ERROR:const p=c.getStatus();if(O(De,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const T=v?.error;if(T&&T.status&&T.message){const S=function(C){const z=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(z)>=0?z:V.UNKNOWN}(T.status);l(new U(S,T.message))}else l(new U(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new U(V.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{O(De,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);O(De,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",d,n,15)})}Bo(e,t,n){const s=Jo(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$d(),l=qd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const m=i.join("");O(De,`Creating RPC '${e}' stream ${s}: ${m}`,c);const p=o.createWebChannel(m,c);let v=!1,T=!1;const S=new qw({Io:C=>{T?O(De,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(v||(O(De,`Opening RPC '${e}' stream ${s} transport.`),p.open(),v=!0),O(De,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},To:()=>p.close()}),D=(C,z,j)=>{C.listen(z,M=>{try{j(M)}catch(q){setTimeout(()=>{throw q},0)}})};return D(p,$r.EventType.OPEN,()=>{T||(O(De,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),D(p,$r.EventType.CLOSE,()=>{T||(T=!0,O(De,`RPC '${e}' stream ${s} transport closed`),S.So())}),D(p,$r.EventType.ERROR,C=>{T||(T=!0,is(De,`RPC '${e}' stream ${s} transport errored:`,C),S.So(new U(V.UNAVAILABLE,"The operation could not be completed")))}),D(p,$r.EventType.MESSAGE,C=>{var z;if(!T){const j=C.data[0];W(!!j);const M=j,q=M.error||((z=M[0])===null||z===void 0?void 0:z.error);if(q){O(De,`RPC '${e}' stream ${s} received error:`,q);const N=q.status;let P=function(b){const x=we[b];if(x!==void 0)return kf(x)}(N),w=q.message;P===void 0&&(P=V.INTERNAL,w="Unknown error status: "+N+" with message "+q.message),T=!0,S.So(new U(P,w)),p.close()}else O(De,`RPC '${e}' stream ${s} received:`,j),S.bo(j)}}),D(l,Bd.STAT_EVENT,C=>{C.stat===da.PROXY?O(De,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===da.NOPROXY&&O(De,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}/**
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
 */function fm(){return typeof window<"u"?window:null}function mi(){return typeof document<"u"?document:null}/**
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
 */function so(r){return new Jb(r,!0)}/**
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
 */class mm{constructor(e,t,n=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-n);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class pm{constructor(e,t,n,s,i,o,l,c){this.ui=e,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new mm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(ye(t.toString()),ye("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===t&&this.P_(n,s)},n=>{e(()=>{const s=new U(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zw extends pm{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Zb(this.serializer,e),n=function(i){if(!("targetChange"in i))return H.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?Be(o.readTime):H.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Ea(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=Ti(c)?{documents:Uf(i,c)}:{query:Bf(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Of(i,o.resumeToken);const d=Ia(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(H.min())>0){l.readTime=cr(i,o.snapshotVersion.toTimestamp());const d=Ia(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const n=tw(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Ea(this.serializer),t.removeTarget=e,this.a_(t)}}class Kw extends pm{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return W(!!e.streamToken),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=ew(e.writeResults,e.commitTime),n=Be(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Ea(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ri(this.serializer,n))};this.a_(t)}}/**
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
 */class Gw extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new U(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,xa(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(V.UNKNOWN,i.toString())})}Lo(e,t,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,xa(t,n),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ww{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ye(t),this.D_=!1):O("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Hw{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{n.enqueueAndForget(async()=>{Cn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=G(c);d.L_.add(4),await Ss(d),d.q_.set("Unknown"),d.L_.delete(4),await io(d)}(this))})}),this.q_=new Ww(n,s)}}async function io(r){if(Cn(r))for(const e of r.B_)await e(!0)}async function Ss(r){for(const e of r.B_)await e(!1)}function oo(r,e){const t=G(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),gl(t)?pl(t):br(t).r_()&&ml(t,e))}function hr(r,e){const t=G(r),n=br(t);t.N_.delete(e),n.r_()&&gm(t,e),t.N_.size===0&&(n.r_()?n.o_():Cn(t)&&t.q_.set("Unknown"))}function ml(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}br(r).A_(e)}function gm(r,e){r.Q_.xe(e),br(r).R_(e)}function pl(r){r.Q_=new Gb({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),br(r).start(),r.q_.v_()}function gl(r){return Cn(r)&&!br(r).n_()&&r.N_.size>0}function Cn(r){return G(r).L_.size===0}function _m(r){r.Q_=void 0}async function Qw(r){r.q_.set("Online")}async function Jw(r){r.N_.forEach((e,t)=>{ml(r,e)})}async function Yw(r,e){_m(r),gl(r)?(r.q_.M_(e),pl(r)):r.q_.set("Unknown")}async function Xw(r,e,t){if(r.q_.set("Online"),e instanceof Vf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(r,e)}catch(n){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Oi(r,n)}else if(e instanceof fi?r.Q_.Ke(e):e instanceof Df?r.Q_.He(e):r.Q_.We(e),!t.isEqual(H.min()))try{const n=await lm(r.localStore);t.compareTo(n)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const m=i.N_.get(d);m&&i.N_.set(d,m.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,d)=>{const m=i.N_.get(c);if(!m)return;i.N_.set(c,m.withResumeToken(be.EMPTY_BYTE_STRING,m.snapshotVersion)),gm(i,c);const p=new It(m.target,c,d,m.sequenceNumber);ml(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){O("RemoteStore","Failed to raise snapshot:",n),await Oi(r,n)}}async function Oi(r,e,t){if(!Zt(e))throw e;r.L_.add(1),await Ss(r),r.q_.set("Offline"),t||(t=()=>lm(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await io(r)})}function ym(r,e){return e().catch(t=>Oi(r,t,e))}async function vr(r){const e=G(r),t=Jt(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Zw(e);)try{const s=await Fw(e.localStore,n);if(s===null){e.O_.length===0&&t.o_();break}n=s.batchId,eI(e,s)}catch(s){await Oi(e,s)}vm(e)&&bm(e)}function Zw(r){return Cn(r)&&r.O_.length<10}function eI(r,e){r.O_.push(e);const t=Jt(r);t.r_()&&t.V_&&t.m_(e.mutations)}function vm(r){return Cn(r)&&!Jt(r).n_()&&r.O_.length>0}function bm(r){Jt(r).start()}async function tI(r){Jt(r).p_()}async function nI(r){const e=Jt(r);for(const t of r.O_)e.m_(t.mutations)}async function rI(r,e,t){const n=r.O_.shift(),s=sl.from(n,e,t);await ym(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await vr(r)}async function sI(r,e){e&&Jt(r).V_&&await async function(n,s){if(function(o){return $b(o)&&o!==V.ABORTED}(s.code)){const i=n.O_.shift();Jt(n).s_(),await ym(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vr(n)}}(r,e),vm(r)&&bm(r)}async function ph(r,e){const t=G(r);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const n=Cn(t);t.L_.add(3),await Ss(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await io(t)}async function Ca(r,e){const t=G(r);e?(t.L_.delete(2),await io(t)):e||(t.L_.add(2),await Ss(t),t.q_.set("Unknown"))}function br(r){return r.K_||(r.K_=function(t,n,s){const i=G(t);return i.w_(),new zw(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:Qw.bind(null,r),Ro:Jw.bind(null,r),mo:Yw.bind(null,r),d_:Xw.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),gl(r)?pl(r):r.q_.set("Unknown")):(await r.K_.stop(),_m(r))})),r.K_}function Jt(r){return r.U_||(r.U_=function(t,n,s){const i=G(t);return i.w_(),new Kw(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:tI.bind(null,r),mo:sI.bind(null,r),f_:nI.bind(null,r),g_:rI.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await vr(r)):(await r.U_.stop(),r.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class _l{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,l=new _l(e,t,o,s,i);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yl(r,e){if(ye("AsyncQueue",`${e}: ${r}`),Zt(r))return new U(V.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class er{constructor(e){this.comparator=e?(t,n)=>e(t,n)||B.comparator(t.key,n.key):(t,n)=>B.comparator(t.key,n.key),this.keyedMap=zr(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new er(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof er)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new er;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class gh{constructor(){this.W_=new he(B.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class dr{constructor(e,t,n,s,i,o,l,c,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new dr(e,t,er.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class iI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class oI{constructor(){this.queries=_h(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const s=G(t),i=s.queries;s.queries=_h(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(n)})})(this,new U(V.ABORTED,"Firestore shutting down"))}}function _h(){return new en(r=>_f(r),Yi)}async function vl(r,e){const t=G(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(n=2):(i=new iI,n=e.J_()?0:1);try{switch(n){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=yl(o,`Initialization of query '${Gn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&wl(t)}async function bl(r,e){const t=G(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function aI(r,e){const t=G(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(n=!0);o.z_=s}}n&&wl(t)}function lI(r,e,t){const n=G(r),s=n.queries.get(e);if(s)for(const i of s.j_)i.onError(t);n.queries.delete(e)}function wl(r){r.Y_.forEach(e=>{e.next()})}var ka,yh;(yh=ka||(ka={})).ea="default",yh.Cache="cache";class Il{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new dr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=dr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ka.Cache}}/**
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
 */class wm{constructor(e){this.key=e}}class Im{constructor(e){this.key=e}}class cI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=vf(e),this.Ra=new er(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new gh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,p)=>{const v=s.get(m),T=Es(this.query,p)?p:null,S=!!v&&this.mutatedKeys.has(v.key),D=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let C=!1;v&&T?v.data.isEqual(T.data)?S!==D&&(n.track({type:3,doc:T}),C=!0):this.ga(v,T)||(n.track({type:2,doc:T}),C=!0,(c&&this.Aa(T,c)>0||d&&this.Aa(T,d)<0)&&(l=!0)):!v&&T?(n.track({type:0,doc:T}),C=!0):v&&!T&&(n.track({type:1,doc:v}),C=!0,(c||d)&&(l=!0)),C&&(T?(o=o.add(T),i=D?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{Ra:o,fa:n,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((m,p)=>function(T,S){const D=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return D(T)-D(S)}(m.type,p.type)||this.Aa(m.doc,p.doc)),this.pa(n),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,d=c!==this.Ea;return this.Ea=c,o.length!==0||d?{snapshot:new dr(this.query,e.Ra,i,o,e.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new gh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=X(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Im(n))}),this.da.forEach(n=>{e.has(n)||t.push(new wm(n))}),t}ba(e){this.Ta=e.Ts,this.da=X();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return dr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class hI{constructor(e){this.key=e,this.va=!1}}class dI{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new en(l=>_f(l),Yi),this.Ma=new Map,this.xa=new Set,this.Oa=new he(B.comparator),this.Na=new Map,this.La=new ul,this.Ba={},this.ka=new Map,this.qa=Sn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function fI(r,e,t=!0){const n=ao(r);let s;const i=n.Fa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await xm(n,e,t,!0),s}async function mI(r,e){const t=ao(r);await xm(t,e,!0,!1)}async function xm(r,e,t,n){const s=await ki(r.localStore,We(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let l;return n&&(l=await xl(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&oo(r.remoteStore,s),l}async function xl(r,e,t,n,s){r.Ka=(p,v,T)=>async function(D,C,z,j){let M=C.view.ma(z);M.ns&&(M=await Na(D.localStore,C.query,!1).then(({documents:w})=>C.view.ma(w,M)));const q=j&&j.targetChanges.get(C.targetId),N=j&&j.targetMismatches.get(C.targetId)!=null,P=C.view.applyChanges(M,D.isPrimaryClient,q,N);return Da(D,C.targetId,P.wa),P.snapshot}(r,p,v,T);const i=await Na(r.localStore,e,!0),o=new cI(e,i.Ts),l=o.ma(i.documents),c=As.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=o.applyChanges(l,r.isPrimaryClient,c);Da(r,t,d.wa);const m=new uI(e,t,o);return r.Fa.set(e,m),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),d.snapshot}async function pI(r,e,t){const n=G(r),s=n.Fa.get(e),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(o=>!Yi(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ur(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&hr(n.remoteStore,s.targetId),fr(n,s.targetId)}).catch(Xt)):(fr(n,s.targetId),await ur(n.localStore,s.targetId,!0))}async function gI(r,e){const t=G(r),n=t.Fa.get(e),s=t.Ma.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),hr(t.remoteStore,n.targetId))}async function _I(r,e,t){const n=Sl(r);try{const s=await function(o,l){const c=G(o),d=pe.now(),m=l.reduce((T,S)=>T.add(S.key),X());let p,v;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=Ge(),D=X();return c.cs.getEntries(T,m).next(C=>{S=C,S.forEach((z,j)=>{j.isValidDocument()||(D=D.add(z))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,S)).next(C=>{p=C;const z=[];for(const j of l){const M=Bb(j,p.get(j.key).overlayedDocument);M!=null&&z.push(new Rt(j.key,M,af(M.value.mapValue),je.exists(!0)))}return c.mutationQueue.addMutationBatch(T,d,z,l)}).next(C=>{v=C;const z=C.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(T,C.batchId,z)})}).then(()=>({batchId:v.batchId,changes:wf(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let d=o.Ba[o.currentUser.toKey()];d||(d=new he(Y)),d=d.insert(l,c),o.Ba[o.currentUser.toKey()]=d}(n,s.batchId,t),await tn(n,s.changes),await vr(n.remoteStore)}catch(s){const i=yl(s,"Failed to persist write");t.reject(i)}}async function Em(r,e){const t=G(r);try{const n=await Mw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?W(o.va):s.removedDocuments.size>0&&(W(o.va),o.va=!1))}),await tn(t,n,e)}catch(n){await Xt(n)}}function vh(r,e,t){const n=G(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=G(o);c.onlineState=l;let d=!1;c.queries.forEach((m,p)=>{for(const v of p.j_)v.Z_(l)&&(d=!0)}),d&&wl(c)}(n.eventManager,e),s.length&&n.Ca.d_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function yI(r,e,t){const n=G(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Na.get(e),i=s&&s.key;if(i){let o=new he(B.comparator);o=o.insert(i,_e.newNoDocument(i,H.min()));const l=X().add(i),c=new Ts(H.min(),new Map,new he(Y),o,l);await Em(n,c),n.Oa=n.Oa.remove(i),n.Na.delete(e),Al(n)}else await ur(n.localStore,e,!1).then(()=>fr(n,e,t)).catch(Xt)}async function vI(r,e){const t=G(r),n=e.batch.batchId;try{const s=await jw(t.localStore,e);Tl(t,n,null),El(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await tn(t,s)}catch(s){await Xt(s)}}async function bI(r,e,t){const n=G(r);try{const s=await function(o,l){const c=G(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return c.mutationQueue.lookupMutationBatch(d,l).next(p=>(W(p!==null),m=p.keys(),c.mutationQueue.removeMutationBatch(d,p))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>c.localDocuments.getDocuments(d,m))})}(n.localStore,e);Tl(n,e,t),El(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await tn(n,s)}catch(s){await Xt(s)}}function El(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function Tl(r,e,t){const n=G(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ba[n.currentUser.toKey()]=s}}function fr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Tm(r,n)})}function Tm(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(hr(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),Al(r))}function Da(r,e,t){for(const n of t)n instanceof wm?(r.La.addReference(n.key,e),wI(r,n)):n instanceof Im?(O("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Tm(r,n.key)):K()}function wI(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(O("SyncEngine","New document in limbo: "+t),r.xa.add(n),Al(r))}function Al(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new B(oe.fromString(e)),n=r.qa.next();r.Na.set(n,new hI(t)),r.Oa=r.Oa.insert(t,n),oo(r.remoteStore,new It(We(xs(t.path)),n,"TargetPurposeLimboResolution",$e.oe))}}async function tn(r,e,t){const n=G(r),s=[],i=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((l,c)=>{o.push(n.Ka(c,e,t).then(d=>{var m;if((d||t)&&n.isPrimaryClient){const p=d?!d.fromCache:(m=t?.targetChanges.get(c.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(d){s.push(d);const p=dl.Wi(c.targetId,d);i.push(p)}}))}),await Promise.all(o),n.Ca.d_(s),await async function(c,d){const m=G(c);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>R.forEach(d,v=>R.forEach(v.$i,T=>m.persistence.referenceDelegate.addReference(p,v.targetId,T)).next(()=>R.forEach(v.Ui,T=>m.persistence.referenceDelegate.removeReference(p,v.targetId,T)))))}catch(p){if(!Zt(p))throw p;O("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const v=p.targetId;if(!p.fromCache){const T=m.os.get(v),S=T.snapshotVersion,D=T.withLastLimboFreeSnapshotVersion(S);m.os=m.os.insert(v,D)}}}(n.localStore,i))}async function II(r,e){const t=G(r);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const n=await am(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new U(V.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await tn(t,n.hs)}}function xI(r,e){const t=G(r),n=t.Na.get(e);if(n&&n.va)return X().add(n.key);{let s=X();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const l=t.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}async function EI(r,e){const t=G(r),n=await Na(t.localStore,e.query,!0),s=e.view.ba(n);return t.isPrimaryClient&&Da(t,e.targetId,s.wa),s}async function TI(r,e){const t=G(r);return um(t.localStore,e).then(n=>tn(t,n))}async function AI(r,e,t,n){const s=G(r),i=await function(l,c){const d=G(l),m=G(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",p=>m.Mn(p,c).next(v=>v?d.localDocuments.getDocuments(p,v):R.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await vr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Tl(s,e,n||null),El(s,e),function(l,c){G(G(l).mutationQueue).On(c)}(s.localStore,e)):K(),await tn(s,i)):O("SyncEngine","Cannot apply mutation batch with id: "+e)}async function SI(r,e){const t=G(r);if(ao(t),Sl(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await bh(t,n.toArray());t.Qa=!0,await Ca(t.remoteStore,!0);for(const i of s)oo(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const n=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(fr(t,o),ur(t.localStore,o,!0))),hr(t.remoteStore,o)}),await s,await bh(t,n),function(o){const l=G(o);l.Na.forEach((c,d)=>{hr(l.remoteStore,d)}),l.La.pr(),l.Na=new Map,l.Oa=new he(B.comparator)}(t),t.Qa=!1,await Ca(t.remoteStore,!1)}}async function bh(r,e,t){const n=G(r),s=[],i=[];for(const o of e){let l;const c=n.Ma.get(o);if(c&&c.length!==0){l=await ki(n.localStore,We(c[0]));for(const d of c){const m=n.Fa.get(d),p=await EI(n,m);p.snapshot&&i.push(p.snapshot)}}else{const d=await cm(n.localStore,o);l=await ki(n.localStore,d),await xl(n,Am(d),o,!1,l.resumeToken)}s.push(l)}return n.Ca.d_(i),s}function Am(r){return pf(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function RI(r){return function(t){return G(G(t).persistence).Qi()}(G(r).localStore)}async function NI(r,e,t,n){const s=G(r);if(s.Qa)return void O("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await um(s.localStore,yf(i[0])),l=Ts.createSynthesizedRemoteEventForCurrentChange(e,t==="current",be.EMPTY_BYTE_STRING);await tn(s,o,l);break}case"rejected":await ur(s.localStore,e,!0),fr(s,e,n);break;default:K()}}async function PI(r,e,t){const n=ao(r);if(n.Qa){for(const s of e){if(n.Ma.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){O("SyncEngine","Adding an already active target "+s);continue}const i=await cm(n.localStore,s),o=await ki(n.localStore,i);await xl(n,Am(i),o.targetId,!1,o.resumeToken),oo(n.remoteStore,o)}for(const s of t)n.Ma.has(s)&&await ur(n.localStore,s,!1).then(()=>{hr(n.remoteStore,s),fr(n,s)}).catch(Xt)}}function ao(r){const e=G(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Em.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yI.bind(null,e),e.Ca.d_=aI.bind(null,e.eventManager),e.Ca.$a=lI.bind(null,e.eventManager),e}function Sl(r){const e=G(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bI.bind(null,e),e}class ms{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=so(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return om(this.persistence,new im,e.initialUser,this.serializer)}Ga(e){return new rm(ro.Zr,this.serializer)}Wa(e){return new dm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ms.provider={build:()=>new ms};class Sm extends ms{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Sl(this.Ja.syncEngine),await vr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return om(this.persistence,new im,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new yw(n,e.asyncQueue,t)}Ha(e,t){const n=new Yv(t,this.persistence);return new Jv(e.asyncQueue,n)}Ga(e){const t=sm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?qe.withCacheSize(this.cacheSizeBytes):qe.DEFAULT;return new hl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,fm(),mi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new dm}}class CI extends Sm{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Qo&&(this.sharedClientState.syncEngine={no:AI.bind(null,t),ro:NI.bind(null,t),io:PI.bind(null,t),Qi:RI.bind(null,t),eo:TI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await SI(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=fm();if(!Qo.D(t))throw new U(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=sm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Qo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ps{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>vh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=II.bind(null,this.syncEngine),await Ca(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oI}()}createDatastore(e){const t=so(e.databaseInfo.databaseId),n=function(i){return new $w(i)}(e.databaseInfo);return function(i,o,l,c){return new Gw(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,l){return new Hw(n,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>vh(this.syncEngine,t,0),function(){return mh.D()?new mh:new Uw}())}createSyncEngine(e,t){return function(s,i,o,l,c,d,m){const p=new dI(s,i,o,l,c,d);return m&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);O("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ss(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ps.provider={build:()=>new ps};/**
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
 */class Rl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ye("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class kI{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ve.UNAUTHENTICATED,this.clientId=zd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{O("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(O("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=yl(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Yo(r,e){r.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await am(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function wh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await DI(r);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>ph(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>ph(e.remoteStore,s)),r._onlineComponents=e}async function DI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;is("Error using user provided cache. Falling back to memory cache: "+t),await Yo(r,new ms)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Yo(r,new ms);return r._offlineComponents}async function Rm(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await wh(r,r._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await wh(r,new ps))),r._onlineComponents}function VI(r){return Rm(r).then(e=>e.syncEngine)}async function ji(r){const e=await Rm(r),t=e.eventManager;return t.onListen=fI.bind(null,e.syncEngine),t.onUnlisten=pI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gI.bind(null,e.syncEngine),t}function OI(r,e,t={}){const n=new ht;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,d){const m=new Rl({next:v=>{m.Za(),o.enqueueAndForget(()=>bl(i,p));const T=v.docs.has(l);!T&&v.fromCache?d.reject(new U(V.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&v.fromCache&&c&&c.source==="server"?d.reject(new U(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),p=new Il(xs(l.path),m,{includeMetadataChanges:!0,_a:!0});return vl(i,p)}(await ji(r),r.asyncQueue,e,t,n)),n.promise}function jI(r,e,t={}){const n=new ht;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,d){const m=new Rl({next:v=>{m.Za(),o.enqueueAndForget(()=>bl(i,p)),v.fromCache&&c.source==="server"?d.reject(new U(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),p=new Il(l,m,{includeMetadataChanges:!0,_a:!0});return vl(i,p)}(await ji(r),r.asyncQueue,e,t,n)),n.promise}/**
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
 */function Nm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Ih=new Map;/**
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
 */function Pm(r,e,t){if(!t)throw new U(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function MI(r,e,t,n){if(e===!0&&n===!0)throw new U(V.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function xh(r){if(!B.isDocumentKey(r))throw new U(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Eh(r){if(B.isDocumentKey(r))throw new U(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function lo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":K()}function He(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new U(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=lo(r);throw new U(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class Th{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nl{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Th({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Th(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Uv;switch(n.type){case"firstParty":return new $v(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ih.get(t);n&&(O("ComponentProvider","Removing Datastore"),Ih.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class kn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new kn(this.firestore,e,this._query)}}class Me{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class Gt extends kn{constructor(e,t,n){super(e,t,xs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new B(e))}withConverter(e){return new Gt(this.firestore,e,this._path)}}function Xe(r,e,...t){if(r=Ie(r),Pm("collection","path",e),r instanceof Nl){const n=oe.fromString(e,...t);return Eh(n),new Gt(r,null,n)}{if(!(r instanceof Me||r instanceof Gt))throw new U(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(oe.fromString(e,...t));return Eh(n),new Gt(r.firestore,null,n)}}function at(r,e,...t){if(r=Ie(r),arguments.length===1&&(e=zd.newId()),Pm("doc","path",e),r instanceof Nl){const n=oe.fromString(e,...t);return xh(n),new Me(r,null,new B(n))}{if(!(r instanceof Me||r instanceof Gt))throw new U(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(oe.fromString(e,...t));return xh(n),new Me(r.firestore,r instanceof Gt?r.converter:null,new B(n))}}/**
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
 */class Ah{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new mm(this,"async_queue_retry"),this.Vu=()=>{const n=mi();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=mi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=mi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ht;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Zt(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(n);throw ye("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=_l.createAndSchedule(this,e,t,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Sh(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class St extends Nl{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Ah,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ah(e),this._firestoreClient=void 0,await e}}}function LI(r,e,t){t||(t="(default)");const n=$i(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(ts(i,e))return s;throw new U(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new U(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function co(r){if(r._terminated)throw new U(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||FI(r),r._firestoreClient}function FI(r){var e,t,n;const s=r._freezeSettings(),i=function(l,c,d,m){return new yb(l,c,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Nm(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new kI(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(r._componentsProvider))}/**
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
 */class mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mr(be.fromBase64String(e))}catch(t){throw new U(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mr(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class uo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ho{constructor(e){this._methodName=e}}/**
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
 */class Pl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */class Cl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const UI=/^__.*__$/;class BI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Rt(e,this.data,this.fieldMask,t,this.fieldTransforms):new yr(e,this.data,t,this.fieldTransforms)}}class Cm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Rt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function km(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class kl{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new kl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.Ou(e),s}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Mi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(km(this.Cu)&&UI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class qI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||so(e)}Qu(e,t,n,s=!1){return new kl({Cu:e,methodName:t,qu:n,path:me.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fo(r){const e=r._freezeSettings(),t=so(r._databaseId);return new qI(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Dm(r,e,t,n,s,i={}){const o=r.Qu(i.merge||i.mergeFields?2:0,e,t,s);Vl("Data must be an object, but it was:",o,n);const l=Vm(n,o);let c,d;if(i.merge)c=new ze(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const v=Va(e,p,t);if(!o.contains(v))throw new U(V.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);jm(m,v)||m.push(v)}c=new ze(m),d=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,d=o.fieldTransforms;return new BI(new Oe(l),c,d)}class mo extends ho{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mo}}class Dl extends ho{_toFieldTransform(e){return new Rf(e.path,new or)}isEqual(e){return e instanceof Dl}}function $I(r,e,t,n){const s=r.Qu(1,e,t);Vl("Data must be an object, but it was:",s,n);const i=[],o=Oe.empty();Pn(n,(c,d)=>{const m=Ol(e,c,t);d=Ie(d);const p=s.Nu(m);if(d instanceof mo)i.push(m);else{const v=Rs(d,p);v!=null&&(i.push(m),o.set(m,v))}});const l=new ze(i);return new Cm(o,l,s.fieldTransforms)}function zI(r,e,t,n,s,i){const o=r.Qu(1,e,t),l=[Va(e,n,t)],c=[s];if(i.length%2!=0)throw new U(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(Va(e,i[v])),c.push(i[v+1]);const d=[],m=Oe.empty();for(let v=l.length-1;v>=0;--v)if(!jm(d,l[v])){const T=l[v];let S=c[v];S=Ie(S);const D=o.Nu(T);if(S instanceof mo)d.push(T);else{const C=Rs(S,D);C!=null&&(d.push(T),m.set(T,C))}}const p=new ze(d);return new Cm(m,p,o.fieldTransforms)}function KI(r,e,t,n=!1){return Rs(t,r.Qu(n?4:3,e))}function Rs(r,e){if(Om(r=Ie(r)))return Vl("Unsupported field value:",e,r),Vm(r,e);if(r instanceof ho)return function(n,s){if(!km(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const l of n){let c=Rs(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ob(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=pe.fromDate(n);return{timestampValue:cr(s.serializer,i)}}if(n instanceof pe){const i=new pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cr(s.serializer,i)}}if(n instanceof Pl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof mr)return{bytesValue:Of(s.serializer,n._byteString)};if(n instanceof Me){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:al(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Cl)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return nl(l.serializer,c)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${lo(n)}`)}(r,e)}function Vm(r,e){const t={};return nf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pn(r,(n,s)=>{const i=Rs(s,e.Mu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function Om(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof pe||r instanceof Pl||r instanceof mr||r instanceof Me||r instanceof ho||r instanceof Cl)}function Vl(r,e,t){if(!Om(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=lo(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Va(r,e,t){if((e=Ie(e))instanceof uo)return e._internalPath;if(typeof e=="string")return Ol(r,e);throw Mi("Field path arguments must be of type string or ",r,!1,void 0,t)}const GI=new RegExp("[~\\*/\\[\\]]");function Ol(r,e,t){if(e.search(GI)>=0)throw Mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new uo(...e.split("."))._internalPath}catch{throw Mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Mi(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${s}`),c+=")"),new U(V.INVALID_ARGUMENT,l+r+c)}function jm(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class Mm{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class WI extends Mm{data(){return super.data()}}function jl(r,e){return typeof e=="string"?Ol(r,e):e instanceof uo?e._internalPath:e._delegate._internalPath}/**
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
 */function Lm(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new U(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ml{}class HI extends Ml{}function QI(r,e,...t){let n=[];e instanceof Ml&&n.push(e),n=n.concat(t),function(i){const o=i.filter(c=>c instanceof Ll).length,l=i.filter(c=>c instanceof po).length;if(o>1||o>0&&l>0)throw new U(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class po extends HI{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new po(e,t,n)}_apply(e){const t=this._parse(e);return Fm(e._query,t),new kn(e.firestore,e.converter,ba(e._query,t))}_parse(e){const t=fo(e.firestore);return function(i,o,l,c,d,m,p){let v;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new U(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ph(p,m);const T=[];for(const S of p)T.push(Nh(c,i,S));v={arrayValue:{values:T}}}else v=Nh(c,i,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ph(p,m),v=KI(l,o,p,m==="in"||m==="not-in");return ee.create(d,m,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Rh(r,e,t){const n=e,s=jl("where",r);return po._create(s,n,t)}class Ll extends Ml{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ll(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:ae.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Fm(o,c),o=ba(o,c)}(e._query,t),new kn(e.firestore,e.converter,ba(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Nh(r,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new U(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gf(e)&&t.indexOf("/")!==-1)throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(oe.fromString(t));if(!B.isDocumentKey(n))throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return hs(r,new B(n))}if(t instanceof Me)return hs(r,t._key);throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lo(t)}.`)}function Ph(r,e){if(!Array.isArray(r)||r.length===0)throw new U(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fm(r,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class JI{convertValue(e,t="none"){switch(xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Pn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>fe(o.doubleValue));return new Cl(i)}convertGeoPoint(e){return new Pl(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Za(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(cs(e));default:return null}}convertTimestamp(e){const t=At(e);return new pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=oe.fromString(e);W(Kf(n));const s=new In(n.get(1),n.get(3)),i=new B(n.popFirst(5));return s.isEqual(t)||ye(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Um(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
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
 */class Wr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bm extends Mm{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(jl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class pi extends Bm{data(e={}){return super.data(e)}}class qm{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Wr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new pi(this._firestore,this._userDataWriter,n.key,n,new Wr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new pi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new pi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),m=o.indexOf(l.doc.key)),{type:YI(l.type),doc:c,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function YI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function ti(r){r=He(r,Me);const e=He(r.firestore,St);return OI(co(e),r._key).then(t=>zm(e,r,t))}class Fl extends JI{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}function xt(r){r=He(r,kn);const e=He(r.firestore,St),t=co(e),n=new Fl(e);return Lm(r._query),jI(t,r._query).then(s=>new qm(e,n,r,s))}function XI(r,e,t){r=He(r,Me);const n=He(r.firestore,St),s=Um(r.converter,e,t);return go(n,[Dm(fo(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,je.none())])}function ZI(r,e,t,...n){r=He(r,Me);const s=He(r.firestore,St),i=fo(s);let o;return o=typeof(e=Ie(e))=="string"||e instanceof uo?zI(i,"updateDoc",r._key,e,t,n):$I(i,"updateDoc",r._key,e),go(s,[o.toMutation(r._key,je.exists(!0))])}function $m(r){return go(He(r.firestore,St),[new eo(r._key,je.none())])}function Ul(r,e){const t=He(r.firestore,St),n=at(r),s=Um(r.converter,e);return go(t,[Dm(fo(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,je.exists(!1))]).then(()=>n)}function ex(r,...e){var t,n,s;r=Ie(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Sh(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Sh(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,d,m;if(r instanceof Me)d=He(r.firestore,St),m=xs(r._key.path),c={next:p=>{e[o]&&e[o](zm(d,r,p))},error:e[o+1],complete:e[o+2]};else{const p=He(r,kn);d=He(p.firestore,St),m=p._query;const v=new Fl(d);c={next:T=>{e[o]&&e[o](new qm(d,v,p,T))},error:e[o+1],complete:e[o+2]},Lm(r._query)}return function(v,T,S,D){const C=new Rl(D),z=new Il(T,C,S);return v.asyncQueue.enqueueAndForget(async()=>vl(await ji(v),z)),()=>{C.Za(),v.asyncQueue.enqueueAndForget(async()=>bl(await ji(v),z))}}(co(d),m,l,c)}function go(r,e){return function(n,s){const i=new ht;return n.asyncQueue.enqueueAndForget(async()=>_I(await VI(n),s,i)),i.promise}(co(r),e)}function zm(r,e,t){const n=t.docs.get(e._key),s=new Fl(r);return new Bm(r,s,e._key,n,new Wr(t.hasPendingWrites,t.fromCache),e.converter)}class tx{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=ix(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function nx(r){return new tx(r)}class rx{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ps.provider,this._offlineComponentProvider={build:t=>new Sm(t,e?.cacheSizeBytes,this.forceOwnership)}}}class sx{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ps.provider,this._offlineComponentProvider={build:t=>new CI(t,e?.cacheSizeBytes)}}}function ix(r){return new rx(void 0)}function ox(){return new sx}function Li(){return new Dl("serverTimestamp")}(function(e,t=!0){(function(s){_r=s})(Rn),vn(new Wt("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),l=new St(new Bv(n.getProvider("auth-internal")),new Kv(n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new U(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new In(d.options.projectId,m)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),lt(wu,"4.7.3",e),lt(wu,"4.7.3","esm2017")})();/**
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
 */const Km="firebasestorage.googleapis.com",ax="storageBucket",lx=2*60*1e3,cx=10*60*1e3;/**
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
 */class pt extends mt{constructor(e,t,n=0){super(Xo(e),`Firebase Storage: ${t} (${Xo(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ft;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ft||(ft={}));function Xo(r){return"storage/"+r}function ux(){const r="An unknown error occurred, please check the error payload for server response.";return new pt(ft.UNKNOWN,r)}function hx(){return new pt(ft.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dx(){return new pt(ft.CANCELED,"User canceled the upload/download.")}function fx(r){return new pt(ft.INVALID_URL,"Invalid URL '"+r+"'.")}function mx(r){return new pt(ft.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Ch(r){return new pt(ft.INVALID_ARGUMENT,r)}function Gm(){return new pt(ft.APP_DELETED,"The Firebase app was deleted.")}function px(r){return new pt(ft.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class nt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=nt.makeFromUrl(e,t)}catch{return new nt(e,"")}if(n.path==="")return n;throw mx(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function d(q){q.path_=decodeURIComponent(q.path)}const m="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${m}/b/${s}/o${v}`,"i"),S={bucket:1,path:3},D=t===Km?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",z=new RegExp(`^https?://${D}/${s}/${C}`,"i"),M=[{regex:l,indices:c,postModify:i},{regex:T,indices:S,postModify:d},{regex:z,indices:{bucket:1,path:2},postModify:d}];for(let q=0;q<M.length;q++){const N=M[q],P=N.regex.exec(e);if(P){const w=P[N.indices.bucket];let _=P[N.indices.path];_||(_=""),n=new nt(w,_),N.postModify(n);break}}if(n==null)throw fx(e);return n}}class gx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function _x(r,e,t){let n=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let d=!1;function m(...C){d||(d=!0,e.apply(null,C))}function p(C){s=setTimeout(()=>{s=null,r(T,c())},C)}function v(){i&&clearTimeout(i)}function T(C,...z){if(d){v();return}if(C){v(),m.call(null,C,...z);return}if(c()||o){v(),m.call(null,C,...z);return}n<64&&(n*=2);let M;l===1?(l=2,M=0):M=(n+Math.random())*1e3,p(M)}let S=!1;function D(C){S||(S=!0,v(),!d&&(s!==null?(C||(l=2),clearTimeout(s),p(0)):C||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},t),D}function yx(r){r(!1)}/**
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
 */function vx(r){return r!==void 0}function kh(r,e,t,n){if(n<e)throw Ch(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw Ch(`Invalid value for '${r}'. Expected ${t} or less.`)}function bx(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var Fi;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Fi||(Fi={}));/**
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
 */function wx(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
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
 */class Ix{constructor(e,t,n,s,i,o,l,c,d,m,p,v=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=p,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,S)=>{this.resolve_=T,this.reject_=S,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new ni(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Fi.NO_ERROR,c=i.getStatus();if(!l||wx(c,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===Fi.ABORT;n(!1,new ni(!1,null,m));return}const d=this.successCodes_.indexOf(c)!==-1;n(!0,new ni(d,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());vx(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=ux();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Gm():dx();o(c)}else{const c=hx();o(c)}};this.canceled_?t(!1,new ni(!1,null,!0)):this.backoffId_=_x(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ni{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function xx(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function Ex(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Tx(r,e){e&&(r["X-Firebase-GMPID"]=e)}function Ax(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function Sx(r,e,t,n,s,i,o=!0){const l=bx(r.urlParams),c=r.url+l,d=Object.assign({},r.headers);return Tx(d,e),xx(d,t),Ex(d,i),Ax(d,n),new Ix(c,r.method,d,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o)}/**
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
 */function Rx(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function Nx(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class Ui{constructor(e,t){this._service=e,t instanceof nt?this._location=t:this._location=nt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ui(e,t)}get root(){const e=new nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Nx(this._location.path)}get storage(){return this._service}get parent(){const e=Rx(this._location.path);if(e===null)return null;const t=new nt(this._location.bucket,e);return new Ui(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw px(e)}}function Dh(r,e){const t=e?.[ax];return t==null?null:nt.makeFromBucketSpec(t,r)}function Px(r,e,t,n={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:rg(s,r.app.options.projectId))}class Cx{constructor(e,t,n,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Km,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lx,this._maxUploadRetryTime=cx,this._requests=new Set,s!=null?this._bucket=nt.makeFromBucketSpec(s,this._host):this._bucket=Dh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nt.makeFromBucketSpec(this._url,e):this._bucket=Dh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ui(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new gx(Gm());{const o=Sx(e,this._appId,n,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const Vh="@firebase/storage",Oh="0.13.2";/**
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
 */const Wm="storage";function kx(r=nd(),e){r=Ie(r);const n=$i(r,Wm).getImmediate({identifier:e}),s=tg("storage");return s&&Dx(n,...s),n}function Dx(r,e,t,n={}){Px(r,e,t,n)}function Vx(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new Cx(t,n,s,e,Rn)}function Ox(){vn(new Wt(Wm,Vx,"PUBLIC").setMultipleInstances(!0)),lt(Vh,Oh,""),lt(Vh,Oh,"esm2017")}Ox();const jx={apiKey:"AIzaSyDP3-oVC5Q9mTG4Lj0Y10TXMQmf4BKXB18",authDomain:"issham-acadmy.firebaseapp.com",projectId:"issham-acadmy",storageBucket:"issham-acadmy.firebasestorage.app",messagingSenderId:"3012980900",appId:"1:3012980900:web:95dd7347dade35626c3631",measurementId:"G-9CFVEYM41T"},Bl=td(jx),Zo=Mv(Bl);kx(Bl);const ve=LI(Bl,{localCache:nx({tabManager:ox()})}),Hm=L.createContext(null),zn={ADMIN:"admin",TEACHER:"teacher",STUDENT:"student"},ql="admin@isshaam.com",Ur={uid:"demo-admin",email:ql,displayName:"Demo Administrator",isDemo:!0},Mx=()=>{if(typeof window>"u")return!1;if(window.localStorage.getItem("isshaam_demo_auth")==="true")return!0;try{return JSON.parse(window.localStorage.getItem("user")||"null")?.email?.trim().toLowerCase()===ql}catch{return!1}},Lx=({children:r})=>{const[e,t]=L.useState(null),[n,s]=L.useState(null),[i,o]=L.useState(null),[l,c]=L.useState(!0),[d,m]=L.useState(null);L.useEffect(()=>{let S=!0;const D=Ty(Zo,async C=>{if(S){if(m(null),!C){if(Mx()){t(Ur),s(zn.ADMIN),o(Ur),c(!1);return}S&&(t(null),s(null),o(null),c(!1));return}S&&(t(C),c(!0));try{const z=C.email?.trim().toLowerCase();let j=null,M=null;if(z){const q=at(ve,"admins",z),N=await ti(q);N.exists()&&(j=zn.ADMIN,M=N.data())}if(!j){const q=at(ve,"admins",C.uid),N=await ti(q);N.exists()&&(j=zn.ADMIN,M=N.data())}if(!j){const q=at(ve,"teachers",C.uid),N=await ti(q);N.exists()&&(j=zn.TEACHER,M=N.data())}if(!j){const q=at(ve,"students",C.uid),N=await ti(q);N.exists()&&(j=zn.STUDENT,M=N.data())}if(!j){if(console.warn("Authenticated user has no assigned role:",C.uid),!S)return;s(null),o(null),m("هذا الحساب مسجل ولكن لا توجد له صلاحية في النظام.");return}if(!S)return;s(j),o({...M,uid:C.uid,email:C.email||""}),m(null)}catch(z){if(console.error("خطأ في التحقق من صلاحيات المستخدم:",z),!S)return;s(null),o(null),m("تعذر التحقق من صلاحيات الحساب. يرجى المحاولة مرة أخرى.")}finally{S&&c(!1)}}});return()=>{S=!1,D()}},[]);const T={currentUser:e,userRole:n,userData:i,loading:l,authError:d,login:async(S,D)=>{const C=S?.trim().toLowerCase();if(!C)throw new Error("المرجو إدخال البريد الإلكتروني.");if(C===ql)return window.localStorage.setItem("isshaam_demo_auth","true"),t(Ur),s(zn.ADMIN),o(Ur),m(null),c(!1),Ur;if(!D)throw new Error("المرجو إدخال كلمة السر.");return Iy(Zo,C,D)},logout:async()=>{try{await Ay(Zo)}catch(S){throw console.error("خطأ أثناء تسجيل الخروج:",S),S}finally{window.localStorage.removeItem("isshaam_demo_auth"),window.localStorage.removeItem("user"),t(null),s(null),o(null),m(null)}}};return h.jsx(Hm.Provider,{value:T,children:r})},_o=()=>{const r=L.useContext(Hm);if(!r)throw new Error("useAuth must be used inside AuthProvider");return r},Qm=L.createContext(null),Fx="./logo.jpeg",st={branding:{academyName:"ISSHAAM ACADEMY",logoUrl:Fx,bgColor:"bg-slate-100",primaryColor:"#f59e0b",language:"ar"},general:{phone:"",address:"Moulay Rachid, Casablanca",academicYear:"2025/2026",teacherPercentage:50,notes:"شكراً لثقتكم بأكاديمية إسهام."},adminEmails:[]},jh=(r={},e={})=>({...st,...r,...e,branding:{...st.branding,...r?.branding||{},...e?.branding||{}},general:{...st.general,...r?.general||{},...e?.general||{}},adminEmails:Array.isArray(e?.adminEmails)?e.adminEmails:Array.isArray(r?.adminEmails)?r.adminEmails:st.adminEmails});function Ux({children:r}){const[e,t]=L.useState(st),[n,s]=L.useState(!0),[i,o]=L.useState(null);L.useEffect(()=>{const m=at(ve,"settings","global"),p=ex(m,v=>{try{if(v.exists()){const T=v.data();t(jh(st,T))}else t(st);o(null),s(!1)}catch(T){console.error("خطأ أثناء معالجة إعدادات الأكاديمية:",T),t(st),o("تعذر معالجة إعدادات الأكاديمية."),s(!1)}},v=>{console.error("خطأ في جلب إعدادات الأكاديمية:",v),o("تعذر تحميل إعدادات الأكاديمية."),t(st),s(!1)});return()=>{p()}},[]);const d={settings:e,updateSettings:async(m={})=>{try{const p=jh(e,m),v=at(ve,"settings","global");return await XI(v,p,{merge:!0}),t(p),o(null),p}catch(p){throw console.error("خطأ أثناء تحديث إعدادات الأكاديمية:",p),o("تعذر حفظ إعدادات الأكاديمية."),p}},resetLocalSettings:()=>{t(st),o(null)},loading:n,settingsError:i};return h.jsx(Qm.Provider,{value:d,children:r})}function $l(){const r=L.useContext(Qm);if(!r)throw new Error("useSettings must be used inside SettingsProvider");return r}const Mh="./logo.jpeg";function Bx({mobileOpen:r,setMobileOpen:e}){const{settings:t}=$l(),n=t?.branding?.academyName||"ISSHAAM ACADEMY",s=t?.branding?.logoUrl||Mh,i=t?.branding?.primaryColor||"#f59e0b",l=(t?.branding?.language||"ar")==="fr",c=[{title:l?"Tableau de bord":"لوحة التحكم",path:"/dashboard",icon:"▦"},{title:l?"Gestion Élèves":"إدارة التلاميذ",path:"/students",icon:"♙"},{title:l?"Présence & Absence":"الحضور والغياب",path:"/attendance",icon:"✓"},{title:l?"Gestion Professeurs":"إدارة الأساتذة",path:"/teachers",icon:"♟"},{title:l?"Finances & Reçus":"المالية والأداءات",path:"/payments",icon:"◆"},{title:l?"Rapports Financiers":"التقارير المالية",path:"/financials",icon:"◫"},{title:l?"Paramètres Système":"إعدادات النظام",path:"/settings",icon:"⚙"}],d=()=>{e?.(!1)},m=p=>{p.currentTarget.dataset.fallback!=="true"&&(p.currentTarget.dataset.fallback="true",p.currentTarget.src=Mh)};return h.jsxs(h.Fragment,{children:[r&&h.jsx("button",{type:"button","aria-label":l?"Fermer le menu":"إغلاق القائمة",onClick:()=>e?.(!1),className:"fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden cursor-default"}),h.jsxs("aside",{dir:l?"ltr":"rtl",style:{backgroundColor:"#0B192C",color:"#ffffff"},className:`
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
        `,children:[h.jsxs("div",{className:"min-h-0 flex flex-col",children:[h.jsxs("div",{style:{borderColor:"#1E3E62"},className:"relative flex items-center gap-3 p-3 border-b mb-5",children:[h.jsx("img",{src:s,onError:m,alt:n,className:"w-12 h-12 object-contain rounded-full bg-white p-1 shadow-md border-2 shrink-0",style:{borderColor:i}}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("h1",{className:"font-bold text-sm leading-tight text-white truncate",children:n}),h.jsx("span",{className:"block text-xs text-amber-300 mt-1",children:l?"Système de Gestion":"نظام إدارة الأكاديمية"})]}),h.jsx("button",{type:"button",onClick:()=>e?.(!1),"aria-label":l?"Fermer":"إغلاق",className:"md:hidden absolute top-2 left-2 w-8 h-8 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition",children:"×"})]}),h.jsx("nav",{"aria-label":l?"Navigation principale":"القائمة الرئيسية",className:"space-y-1.5 overflow-y-auto pr-1",children:c.map(p=>h.jsxs(Pp,{to:p.path,onClick:d,className:"group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-bold",style:({isActive:v})=>({backgroundColor:v?i:"transparent",color:v?"#0f172a":"#e2e8f0",boxShadow:v?"0 4px 12px rgba(0,0,0,0.15)":"none"}),children:[h.jsx("span",{className:"w-7 h-7 flex items-center justify-center rounded-lg text-base shrink-0 transition-transform group-hover:scale-110",children:p.icon}),h.jsx("span",{className:"truncate",children:p.title})]},p.path))})]}),h.jsxs("div",{style:{backgroundColor:"#081426",borderColor:"#1E3E62"},className:"mt-4 p-3 rounded-xl border text-xs text-center space-y-1 shrink-0",children:[h.jsx("p",{className:"text-slate-200 font-medium truncate",children:n}),h.jsx("p",{className:"text-slate-500",children:l?"Version 1.0.0":"الإصدار 1.0.0"})]})]})]})}function qx({setMobileOpen:r}){const e=Bh(),{currentUser:t,userData:n,logout:s}=_o(),i=async()=>{await s(),e("/login",{replace:!0})};return h.jsx("header",{className:"sticky top-0 z-30 bg-[#0B192C] text-white border-b border-[#1E3E62] px-4 sm:px-6 py-3 shadow-lg",children:h.jsxs("div",{className:"flex items-center justify-between gap-4",children:[h.jsx("button",{type:"button",onClick:()=>r(!0),"aria-label":"فتح القائمة",className:"md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-200 hover:bg-[#1E3E62] active:bg-[#1E3E62] transition",children:h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})}),h.jsx("div",{className:"flex items-center gap-3 mr-auto",children:h.jsxs("div",{className:"hidden sm:block text-right",children:[h.jsx("h1",{className:"text-lg font-bold text-white leading-tight",children:"ISSHAAM ACADEMY"}),h.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:"نظام إدارة الأكاديمية"})]})}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{type:"button","aria-label":"الإشعارات",className:"relative flex items-center justify-center w-10 h-10 rounded-xl text-slate-200 hover:bg-[#1E3E62] transition",children:[h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 17h5l-1.5-1.5V11a6.5 6.5 0 10-13 0v4.5L4 17h5m6 0a3 3 0 01-6 0"})}),h.jsx("span",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"})]}),h.jsxs("div",{className:"hidden sm:flex items-center gap-3 pr-2",children:[h.jsxs("div",{className:"text-right",children:[h.jsx("p",{className:"text-sm font-semibold text-slate-800",children:n?.name||n?.fullName||t?.email||"المستخدم"}),h.jsx("p",{className:"text-xs text-slate-500",children:n?.email||t?.email||""})]}),h.jsx("button",{type:"button",onClick:i,title:"تسجيل الخروج",className:"w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0B192C] font-bold hover:bg-amber-300 transition",children:(n?.name||t?.email||"U").charAt(0).toUpperCase()})]})]})]})})}const $x="./logo.jpeg",Lh="admin@isshaam.com";function zx(){const[r,e]=L.useState(""),[t,n]=L.useState(""),[s,i]=L.useState(""),[o,l]=L.useState(!1),c=Bh(),{login:d}=_o(),m=async p=>{p.preventDefault(),i(""),l(!0);const v=r.trim().toLowerCase();if(v===Lh){window.localStorage.setItem("user",JSON.stringify({email:Lh})),window.localStorage.setItem("isshaam_demo_auth","true"),c("/"),l(!1);return}try{await d(v,t),c("/",{replace:!0})}catch(T){i(T?.code==="auth/invalid-credential"?"البريد الإلكتروني أو كلمة السر غير صحيحة.":"تعذر تسجيل الدخول. يرجى المحاولة مرة أخرى.")}finally{l(!1)}};return h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 p-4 dir-rtl",dir:"rtl",children:h.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200",children:[h.jsxs("div",{className:"text-center mb-6",children:[h.jsx("div",{className:"flex justify-center mb-3",children:h.jsx("img",{src:$x,alt:"ISSHAM ACADEMY Logo",className:"w-36 h-auto object-contain"})}),h.jsx("h1",{className:"text-2xl font-bold text-slate-800 mb-1",children:"أكاديمية إسهام التعليمية"}),h.jsx("p",{className:"text-slate-500 text-xs font-medium",children:"Groupe Assham - منصة المواكبة وإدارة الأكاديمية"})]}),s&&h.jsxs("div",{className:"mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-lg font-medium text-center",children:["⚠️ ",s]}),h.jsxs("form",{onSubmit:m,className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-slate-700 font-medium mb-1 text-sm",children:"البريد الإلكتروني"}),h.jsx("input",{type:"email",value:r,onChange:p=>e(p.target.value),placeholder:"admin@isshaam.com",className:"w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-left",dir:"ltr",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-slate-700 font-medium mb-1 text-sm",children:"كلمة السر"}),h.jsx("input",{type:"password",value:t,onChange:p=>n(p.target.value),placeholder:"••••••••",className:"w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-left",dir:"ltr",required:!0})]}),h.jsx("button",{type:"submit",disabled:o,className:`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition duration-200 shadow-md flex justify-center items-center cursor-pointer ${o?"opacity-70 cursor-not-allowed":""}`,children:o?h.jsxs("span",{className:"flex items-center gap-2",children:[h.jsxs("svg",{className:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[h.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),h.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"جاري تسجيل الدخول..."]}):"تسجيل الدخول"})]})]})})}function Kx(){const[r,e]=L.useState({totalStudents:0,totalTeachers:0,todayAttendance:0,monthlyRevenue:0}),[t,n]=L.useState(!0);return L.useEffect(()=>{(async()=>{try{const i=new Date().toISOString().split("T")[0],[o,l,c,d]=await Promise.all([xt(Xe(ve,"students")),xt(Xe(ve,"teachers")),xt(QI(Xe(ve,"attendance"),Rh("date","==",i),Rh("status","in",["حاضر","present"]))),xt(Xe(ve,"payments"))]),m=o.docs.filter(S=>!S.data().archived),p=new Date().getMonth(),v=new Date().getFullYear();let T=0;d.forEach(S=>{const D=S.data();if(D.date){const C=D.date?.toDate?D.date.toDate():new Date(D.date);C.getMonth()===p&&C.getFullYear()===v&&(T+=Number(D.amount||0))}}),e({totalStudents:m.length,totalTeachers:l.size,todayAttendance:c.size,monthlyRevenue:T})}catch(i){console.error("خطأ في جلب إحصائيات لوحة التحكم:",i)}finally{n(!1)}})()},[]),h.jsxs("div",{className:"space-y-6 dir-rtl text-right pb-10",children:[h.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-xl shadow-md border border-slate-300 gap-4",children:[h.jsxs("div",{children:[h.jsxs("h1",{className:"text-2xl font-black text-slate-900 flex items-center gap-2",children:["مرحباً بك 👋 ",h.jsx("span",{className:"text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-300 font-bold",children:"أونلاين"})]}),h.jsx("p",{className:"text-sm font-bold text-slate-600 mt-1",children:"نظرة عامة على أداء ومداخيل المركز هذا الشهر"})]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-3 w-full md:w-auto",children:[h.jsx(Lo,{to:"/students",className:"flex-1 md:flex-none px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-extrabold text-sm shadow-md transition text-center",children:"إضافة / إدارة التلاميذ 👥"}),h.jsx(Lo,{to:"/attendance",className:"flex-1 md:flex-none px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-extrabold text-sm shadow-md transition text-center",children:"تسجيل الحضور اليومي ✅"}),h.jsx(Lo,{to:"/financials",className:"flex-1 md:flex-none px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-extrabold text-sm shadow-md transition text-center",children:"تسجيل الأداءات المالية 💰"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[h.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-sm font-extrabold text-slate-600",children:"إجمالي التلاميذ"}),h.jsx("h3",{className:"text-3xl font-black text-slate-900 mt-2",children:t?"...":r.totalStudents})]}),h.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 text-2xl font-black",children:"👨‍🎓"})]}),h.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-sm font-extrabold text-slate-600",children:"عدد الأساتذة"}),h.jsx("h3",{className:"text-3xl font-black text-slate-900 mt-2",children:t?"...":r.totalTeachers})]}),h.jsx("div",{className:"w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 text-2xl font-black",children:"👨‍🏫"})]}),h.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-sm font-extrabold text-slate-600",children:"الحضور اليوم"}),h.jsx("h3",{className:"text-3xl font-black text-slate-900 mt-2",children:t?"...":r.todayAttendance})]}),h.jsx("div",{className:"w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 text-2xl font-black",children:"✅"})]}),h.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-sm font-extrabold text-slate-600",children:"مداخيل الشهر"}),h.jsx("h3",{className:"text-3xl font-black text-emerald-700 mt-2",children:t?"...":`${r.monthlyRevenue} DH`})]}),h.jsx("div",{className:"w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 text-2xl font-black",children:"💵"})]})]}),h.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md border border-slate-300",children:[h.jsx("h3",{className:"text-lg font-black text-slate-900 mb-4 flex items-center gap-2",children:"مؤشرات الأداء السريعة 📊"}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"p-4 bg-slate-50 rounded-lg border border-slate-200",children:[h.jsx("span",{className:"text-sm font-bold text-slate-700",children:"نسبة الحضور المسجلة اليوم"}),h.jsx("div",{className:"w-full bg-slate-200 rounded-full h-4 mt-2 overflow-hidden",children:h.jsx("div",{className:"bg-emerald-600 h-4 rounded-full transition-all duration-500",style:{width:`${r.totalStudents>0?r.todayAttendance/r.totalStudents*100:0}%`}})}),h.jsxs("p",{className:"text-xs font-black text-slate-600 mt-1 text-left",children:[r.totalStudents>0?Math.round(r.todayAttendance/r.totalStudents*100):0,"%"]})]}),h.jsxs("div",{className:"p-4 bg-slate-50 rounded-lg border border-slate-200",children:[h.jsx("span",{className:"text-sm font-bold text-slate-700",children:"حالة المداخيل المستحقة"}),h.jsx("p",{className:"text-xs font-extrabold text-slate-600 mt-1",children:"تأكد من متابعة أداءات التلاميذ المتبقية عبر صفحة الأداءات المالية."})]})]})]})]})}const Jm="https://xxxxxxxx.supabase.co",Oa="xxxxxxxxxxxxxxxx",ja=/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(Jm)&&Oa.length>20&&!Oa.includes("xxxx");ja||console.warn("Supabase is not configured. Add valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY values to enable Supabase-backed pages.");const Ye=Op(ja?Jm:"https://placeholder.supabase.co",ja?Oa:"placeholder-anon-key"),Ym=["الأول ابتدائي","الثاني ابتدائي","الثالث ابتدائي","الرابع ابتدائي","الخامس ابتدائي","السادس ابتدائي","الأولى إعدادي","الثانية إعدادي","الثالثة إعدادي","الجذع المشترك","الأولى باكالوريا","الثانية باكالوريا"],Xm="isshaam_students",ea=Ym.map(r=>({id:r,name_ar:r})),ta=()=>{try{const r=JSON.parse(window.localStorage.getItem(Xm)||"[]");return Array.isArray(r)?r:[]}catch{return[]}},Fh=r=>{window.localStorage.setItem(Xm,JSON.stringify(r))};function Gx(){const[r,e]=L.useState(ta),[t,n]=L.useState([]),[s,i]=L.useState([]),[o,l]=L.useState(!0),[c,d]=L.useState(!1),[m,p]=L.useState(""),[v,T]=L.useState(!1),[S,D]=L.useState(null),[C,z]=L.useState(""),[j,M]=L.useState({full_name:"",level_id:"",teacher_id:"",parent_phone:"",parent_whatsapp:"",monthly_fee:"",status:"active",archived:!1}),q=L.useCallback(async()=>{const y=ta();e(y),i(ea),l(!1),p("");try{const[ne,se,$]=await Promise.all([Ye.from("students").select("*").eq("archived",!1).order("full_name",{ascending:!0}),Ye.from("teachers").select("*").eq("status","active").order("full_name",{ascending:!0}),Ye.from("levels").select("*").eq("is_active",!0).order("name_ar",{ascending:!0})]);if(ne.error)throw ne.error;se.error&&se.error.code!=="PGRST116"&&console.warn("Teachers notice:",se.error),$.error&&$.error.code!=="PGRST116"&&console.warn("Levels notice:",$.error);const J=ne.data||[],te=new Set(y.map(xe=>xe.id));e([...y,...J.filter(xe=>!te.has(xe.id))]),n(se.data||[]),i($.data?.length?$.data:ea)}catch(ne){console.error("Students loading error:",ne),e(ta()),i(ea),p("")}finally{l(!1)}},[]);L.useEffect(()=>{q()},[q]);const N=y=>{if(y.levels?.name_ar)return y.levels.name_ar;if(y.level_id&&s.length>0){const ne=s.find(se=>String(se.id)===String(y.level_id));if(ne)return ne.name_ar}return y.academic_level||"المستوى غير محدد"},P=y=>{if(y.teachers?.full_name)return y.teachers.full_name;if(y.teacher_id&&t.length>0){const ne=t.find(se=>String(se.id)===String(y.teacher_id));if(ne)return ne.full_name}return"غير محدد"},w=y=>{const{name:ne,value:se}=y.target;M($=>({...$,[ne]:se}))},_=()=>{M({full_name:"",level_id:"",teacher_id:"",parent_phone:"",parent_whatsapp:"",monthly_fee:"",status:"active",archived:!1})},b=y=>{if(y.preventDefault(),!j.full_name.trim()){alert("المرجو إدخال اسم التلميذ.");return}if(!j.parent_phone.trim()){alert("المرجو إدخال رقم هاتف الولي.");return}d(!0),p("");const se=[{id:`local-${Date.now()}`,full_name:j.full_name.trim(),level_id:s.some($=>String($.id)===String(j.level_id))?j.level_id:null,academic_level:s.some($=>String($.id)===String(j.level_id))?null:j.level_id||null,teacher_id:j.teacher_id||null,parent_phone:j.parent_phone.trim(),parent_whatsapp:j.parent_whatsapp.trim()||j.parent_phone.trim(),monthly_fee:j.monthly_fee===""?0:Number(j.monthly_fee),status:"active",archived:!1,localOnly:!0},...r];e(se),Fh(se),T(!1),_(),d(!1)},x=async(y,ne)=>{if(!window.confirm(`هل أنت متأكد من حذف/أرشفة التلميذ "${ne}"؟`))return;const $=r.filter(J=>J.id!==y);e($),Fh($),S&&S.id===y&&D(null)},I=async y=>{if(y.preventDefault(),!C.trim()||!S)return;const ne=S.notes||"",se=new Date().toLocaleString("ar-MA"),$=ne.trim()?`${ne}

[${se}] ${C.trim()}`:`[${se}] ${C.trim()}`;try{const{data:J,error:te}=await Ye.from("students").update({notes:$,updated_at:new Date().toISOString()}).eq("id",S.id).select("*").single();if(te)throw te;D({...S,...J}),z(""),await q()}catch(J){console.error("Comment save error:",J),p("")}},E=y=>{const ne=y.parent_whatsapp||y.parent_phone;if(!ne){alert("رقم واتساب الولي غير موجود.");return}let se=ne.trim().replace(/\s+/g,"").replace(/-/g,"");se.startsWith("+")&&(se=se.substring(1)),se.startsWith("0")&&(se=`212${se.substring(1)}`);const $=`السلام عليكم ورحمة الله وبركاته،

تواصل معكم إدارة *أكاديمية إسهام* 🏫 بخصوص التلميذ(ة) *${y.full_name}*.

شكراً لتعاونكم. 🌹`;window.open(`https://wa.me/${se}?text=${encodeURIComponent($)}`,"_blank")};return o?h.jsx("div",{className:"p-8 text-center text-slate-700 font-bold dir-rtl",children:"جاري تحميل ملفات التلاميذ..."}):h.jsxs("div",{className:"mx-auto w-full max-w-7xl space-y-6 dir-rtl text-right pb-10",children:[h.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-2xl font-black text-slate-900",children:"إدارة ملفات التلاميذ 👥"}),h.jsx("p",{className:"text-sm font-bold text-slate-600",children:"إدارة معلومات التلاميذ والملفات الدراسية"})]}),h.jsx("button",{onClick:()=>T(!0),className:"w-full md:w-auto px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black shadow-lg shadow-indigo-600/20 transition",children:"➕ إضافة تلميذ جديد"})]}),m&&h.jsxs("div",{className:"p-4 bg-red-100 border-2 border-red-400 text-red-900 rounded-xl font-bold",children:["❌ ",m]}),r.length===0?h.jsx("div",{className:"bg-white rounded-xl border p-8 text-center font-bold text-slate-600",children:"لا يوجد تلاميذ حالياً."}):h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:r.map(y=>h.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-200 p-5 border-t-4 border-t-indigo-500 hover:-translate-y-0.5 hover:shadow-lg transition",children:[h.jsxs("div",{className:"border-b pb-3",children:[h.jsx("h3",{className:"text-xl font-black text-slate-900",children:y.full_name}),h.jsx("span",{className:"inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-900 rounded-md text-xs font-black",children:N(y)})]}),h.jsxs("div",{className:"mt-4 space-y-2 text-sm font-bold text-slate-800",children:[h.jsxs("p",{children:["📞 هاتف الولي:",h.jsxs("span",{className:"text-blue-700",children:[" ",y.parent_phone||"—"]})]}),h.jsxs("p",{children:["🏫 المدرسة: ",y.original_school||"—"]}),h.jsxs("p",{children:["💰 الواجب الشهري: ",y.monthly_fee||0," درهم"]}),h.jsxs("p",{children:["👨‍🏫 الأستاذ: ",P(y)]})]}),h.jsxs("div",{className:"mt-5 flex gap-2",children:[h.jsx("button",{onClick:()=>D(y),className:"flex-1 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-black text-xs",children:"📂 فتح الملف"}),h.jsx("button",{onClick:()=>E(y),className:"px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black text-xs",children:"📲"}),h.jsx("button",{onClick:()=>x(y.id,y.full_name),className:"px-3 py-2.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-black text-xs",children:"🗑️"})]})]},y.id))}),S&&h.jsx("div",{className:"fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center p-4 overflow-y-auto",children:h.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-3xl text-slate-900 max-h-[90vh] flex flex-col",children:[h.jsxs("div",{className:"flex justify-between items-center p-5 border-b bg-white rounded-t-xl shrink-0",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-2xl font-black text-slate-900",children:"ملف التلميذ"}),h.jsx("p",{className:"text-lg font-bold text-blue-700",children:S.full_name})]}),h.jsx("button",{onClick:()=>D(null),className:"px-3 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-700",children:"✖"})]}),h.jsxs("div",{className:"p-6 overflow-y-auto space-y-4 flex-1",children:[h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[h.jsx("strong",{className:"text-slate-900 block mb-1",children:"المستوى:"}),h.jsx("p",{className:"text-slate-800",children:N(S)})]}),h.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[h.jsx("strong",{className:"text-slate-900 block mb-1",children:"الأستاذ المسؤول:"}),h.jsx("p",{className:"text-slate-800",children:P(S)})]}),h.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[h.jsx("strong",{className:"text-slate-900 block mb-1",children:"هاتف الولي:"}),h.jsx("p",{className:"text-slate-800",children:S.parent_phone||"غير موجود"})]}),h.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[h.jsx("strong",{className:"text-slate-900 block mb-1",children:"الواجب الشهري:"}),h.jsxs("p",{className:"text-slate-800",children:[S.monthly_fee||0," درهم"]})]})]}),h.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-xl p-4",children:[h.jsx("h4",{className:"font-black text-amber-900 mb-2",children:"📝 ملاحظات التلميذ"}),h.jsx("p",{className:"whitespace-pre-line text-slate-800",children:S.notes||"لا توجد ملاحظات."})]}),h.jsxs("div",{className:"bg-slate-100 p-4 rounded-xl border border-slate-200",children:[h.jsx("h4",{className:"font-black text-slate-900 mb-3",children:"✍️ إضافة ملاحظة بعد الحصة"}),h.jsxs("form",{onSubmit:I,className:"flex flex-col md:flex-row gap-2",children:[h.jsx("input",{type:"text",value:C,onChange:y=>z(y.target.value),placeholder:"اكتب الملاحظة...",className:"flex-1 p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"}),h.jsx("button",{type:"submit",className:"px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-black shrink-0",children:"إضافة ➕"})]})]})]}),h.jsxs("div",{className:"p-4 border-t bg-slate-50 rounded-b-xl flex gap-2 shrink-0",children:[h.jsx("button",{onClick:()=>E(S),className:"flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black",children:"📲 تواصل مع الولي"}),h.jsx("button",{onClick:()=>x(S.id,S.full_name),className:"px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-black",children:"🗑️ أرشفة"})]})]})}),v&&h.jsx("div",{className:"fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center p-4 overflow-y-auto",children:h.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl text-slate-900 max-h-[85vh] overflow-y-auto flex flex-col my-auto",children:[h.jsxs("div",{className:"flex justify-between items-center p-5 border-b bg-white rounded-t-xl shrink-0",children:[h.jsx("h3",{className:"text-xl font-black text-slate-900",children:"إضافة تلميذ جديد 👨‍🎓"}),h.jsx("button",{type:"button",onClick:()=>{T(!1),_()},className:"px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-700",children:"✖"})]}),h.jsxs("form",{onSubmit:b,className:"flex flex-col flex-1 overflow-hidden",children:[h.jsxs("div",{className:"p-6 overflow-y-auto space-y-4 flex-1",children:[h.jsxs("div",{children:[h.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"الاسم الكامل *"}),h.jsx("input",{name:"full_name",required:!0,value:j.full_name,onChange:w,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900",placeholder:"مثال: محمد العلمي"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"المستوى الدراسي"}),h.jsxs("select",{name:"level_id",value:j.level_id,onChange:w,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900",children:[h.jsx("option",{value:"",children:"اختيار المستوى"}),(s.length?s:Ym.map(y=>({id:y,name_ar:y}))).map(y=>h.jsx("option",{value:y.id,children:y.name_ar},y.id))]})]}),h.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:h.jsxs("div",{children:[h.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"هاتف الولي (WhatsApp) *"}),h.jsx("input",{name:"parent_phone",required:!0,value:j.parent_phone,onChange:w,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900",placeholder:"0612345678"})]})}),h.jsxs("div",{children:[h.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"الواجب الشهري (درهم)"}),h.jsx("input",{type:"number",min:"0",name:"monthly_fee",value:j.monthly_fee,onChange:w,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"})]})]}),h.jsxs("div",{className:"p-4 border-t bg-slate-50 rounded-b-xl flex gap-2 shrink-0",children:[h.jsx("button",{type:"submit",disabled:c,className:"flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-black disabled:opacity-50",children:c?"جاري الحفظ...":"حفظ التلميذ ✅"}),h.jsx("button",{type:"button",onClick:()=>{T(!1),_()},className:"px-5 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-800",children:"إلغاء"})]})]})]})})]})}function Wx(){const{userRole:r="admin",currentUser:e=null}=_o(),[t,n]=L.useState([]),[s,i]=L.useState([]),[o,l]=L.useState({}),[c,d]=L.useState(new Date().toISOString().split("T")[0]),[m,p]=L.useState(""),[v,T]=L.useState(""),[S,D]=L.useState(!0),[C,z]=L.useState(!1),[j,M]=L.useState(!1),[q,N]=L.useState(""),P=L.useCallback(async()=>{D(!0),N("");try{const{data:$,error:J}=await Ye.from("students").select(`
            id,
            full_name,
            parent_name,
            parent_phone,
            parent_whatsapp,
            level_id,
            class_id,
            status,
            archived
          `).eq("status","active").or("archived.is.null,archived.eq.false").order("full_name",{ascending:!0});if(J)throw J;const{data:te,error:xe}=await Ye.from("levels").select(`
            id,
            name_ar,
            name_fr
          `).eq("is_active",!0).order("name_ar");if(xe)throw xe;const{data:Je,error:Dn}=await Ye.from("classes").select(`
            id,
            name,
            level,
            capacity,
            room
          `).order("name");if(Dn)throw Dn;const{data:Ze,error:Ee}=await Ye.from("teachers").select(`
            id,
            full_name,
            user_id,
            status
          `).eq("status","active").order("full_name");if(Ee)throw Ee;const{data:Ns,error:Nt}=await Ye.from("attendance").select(`
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
        `).eq("attendance_date",c);if(Nt)throw Nt;const Ps={};(te||[]).forEach(ce=>{Ps[ce.id]=ce});const nn={};(Je||[]).forEach(ce=>{nn[ce.id]=ce});const yo=($||[]).map(ce=>{const wr=Ps[ce.level_id],On=nn[ce.class_id];return{...ce,level:wr?.name_ar||On?.level||"غير محدد",levelId:ce.level_id||null,className:On?.name||"عام",teacherId:null}}),Cs={};(Ns||[]).forEach(ce=>{ce.student_id&&(Cs[ce.student_id]=ce.teacher_id)});const rn=yo.map(ce=>({...ce,teacherId:Cs[ce.id]||null}));n(rn),i(Ze||[]);const sn={};(Ns||[]).forEach(ce=>{sn[ce.student_id]=ce.status});const Vn={};rn.forEach(ce=>{Vn[ce.id]=sn[ce.id]||"present"}),l(Vn)}catch($){console.error("خطأ في جلب بيانات الحضور:",$),N($?.message||"تعذر تحميل بيانات الحضور.")}finally{D(!1)}},[c]);L.useEffect(()=>{P()},[P]);const w=($,J)=>{l(te=>({...te,[$]:J}))},_=t.filter($=>{if(r==="teacher"&&e&&!($.teacherId===e.uid))return!1;const J=m.trim().toLowerCase(),te=$.full_name||"",xe=$.level||"",Je=!J||te.toLowerCase().includes(J)||xe.toLowerCase().includes(J),Dn=v?$.level===v:!0;return Je&&Dn}),b=$=>{const J={...o};_.forEach(te=>{J[te.id]=$}),l(J)},x=async()=>{if(_.length!==0){z(!0),M(!1),N("");try{const $=_.map(J=>({student_id:J.id,class_id:J.class_id||null,teacher_id:J.teacherId||null,attendance_date:c,date:c,status:o[J.id]||"present",notes:null}));for(const J of $){const{data:te,error:xe}=await Ye.from("attendance").select("id").eq("student_id",J.student_id).eq("attendance_date",c).limit(1).maybeSingle();if(xe)throw xe;if(te?.id){const{error:Je}=await Ye.from("attendance").update({class_id:J.class_id,teacher_id:J.teacher_id,date:J.date,status:J.status,notes:J.notes}).eq("id",te.id);if(Je)throw Je}else{const{error:Je}=await Ye.from("attendance").insert(J);if(Je)throw Je}}M(!0),setTimeout(()=>{M(!1)},4e3)}catch($){console.error("خطأ في حفظ الحضور:",$),N($?.message||"حدث خطأ أثناء حفظ الحضور.")}finally{z(!1)}}},I=$=>{const J=$.parent_whatsapp||$.parent_phone;if(!J){alert("رقم هاتف الولي غير متوفر!");return}let te=J.trim().replace(/\s+/g,"").replace(/-/g,"");te.startsWith("+")&&(te=te.substring(1)),te.startsWith("0")&&(te="212"+te.substring(1));const xe=`السلام عليكم ورحمة الله وبركاته،

تخبركم إدارة *أكاديمية إسهام* 🏫 بتسجيل غياب التلميذ(ة) *${$.full_name}* عن حصة اليوم بتاريخ *${c}*.

المرجو التواصل معنا لتأكيد سبب الغياب.

شكراً لتعاونكم. 🌹`;window.open(`https://wa.me/${te}?text=${encodeURIComponent(xe)}`,"_blank")},E=_.filter($=>o[$.id]==="present").length,y=_.filter($=>o[$.id]==="absent").length,ne=_.filter($=>o[$.id]==="late").length,se=_.filter($=>o[$.id]==="excused").length;return S?h.jsx("div",{className:"p-8 text-center text-slate-700 font-bold dir-rtl",children:"جاري تحميل قائمة التلاميذ..."}):h.jsxs("div",{className:"space-y-6 dir-rtl pb-12 text-right",children:[h.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl shadow-md border border-slate-300 gap-4",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-2xl font-black text-slate-900",children:"تتبع الحضور والغياب 📋"}),h.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"تسجيل وتأكيد حضور التلاميذ حسب التاريخ والمستوى"})]}),h.jsxs("div",{className:"flex items-center gap-3 w-full md:w-auto",children:[h.jsx("input",{type:"date",value:c,onChange:$=>d($.target.value),className:"px-3.5 py-2 border-2 border-slate-400 rounded-lg bg-white text-slate-900 font-bold text-sm"}),h.jsx("button",{onClick:x,disabled:C||_.length===0,className:"px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-lg shadow-md text-sm disabled:opacity-50",children:C?"جاري الحفظ...":"حفظ السجل ✅"})]})]}),j&&h.jsx("div",{className:"p-4 bg-emerald-100 border-2 border-emerald-400 text-emerald-900 rounded-xl font-extrabold text-center",children:"🎉 تم حفظ سجل الحضور والغياب بنجاح في Supabase!"}),q&&h.jsxs("div",{className:"p-4 bg-rose-100 border-2 border-rose-400 text-rose-900 rounded-xl font-bold text-center",children:["❌ ",q]}),h.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-md border border-slate-300 flex flex-col md:flex-row justify-between items-center gap-4",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[h.jsx("input",{type:"text",placeholder:"🔍 البحث عن تلميذ...",value:m,onChange:$=>p($.target.value),className:"px-4 py-2 border-2 border-slate-300 rounded-lg w-56 text-slate-900 font-bold text-sm"}),h.jsxs("select",{value:v,onChange:$=>T($.target.value),className:"px-3 py-2 border-2 border-slate-300 rounded-lg text-sm bg-white font-bold text-slate-800",children:[h.jsx("option",{value:"",children:"كل المستويات"}),h.jsx("option",{value:"الأول ابتدائي",children:"الأول ابتدائي"}),h.jsx("option",{value:"الثاني ابتدائي",children:"الثاني ابتدائي"}),h.jsx("option",{value:"الثالث ابتدائي",children:"الثالث ابتدائي"}),h.jsx("option",{value:"الرابع ابتدائي",children:"الرابع ابتدائي"}),h.jsx("option",{value:"الخامس ابتدائي",children:"الخامس ابتدائي"}),h.jsx("option",{value:"السادس ابتدائي",children:"السادس ابتدائي"}),h.jsx("option",{value:"الأولى إعدادي",children:"الأولى إعدادي"}),h.jsx("option",{value:"الثانية إعدادي",children:"الثانية إعدادي"}),h.jsx("option",{value:"الثالثة إعدادي",children:"الثالثة إعدادي"}),h.jsx("option",{value:"الجذع المشترك",children:"الجذع المشترك"}),h.jsx("option",{value:"الأولى باكالوريا",children:"الأولى باكالوريا"}),h.jsx("option",{value:"الثانية باكالوريا",children:"الثانية باكالوريا"})]})]}),h.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[h.jsx("span",{className:"text-xs font-black",children:"تحديد سريع:"}),h.jsx("button",{onClick:()=>b("present"),className:"px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-black",children:"الجميع حاضر ✅"}),h.jsx("button",{onClick:()=>b("absent"),className:"px-4 py-2 bg-rose-600 text-white rounded-lg text-xs font-black",children:"الجميع غائب ❌"})]}),h.jsxs("div",{className:"flex items-center gap-2 text-xs font-black flex-wrap",children:[h.jsxs("span",{className:"text-emerald-900 bg-emerald-100 px-3 py-1.5 rounded-lg",children:["حاضر:",h.jsxs("strong",{children:[" ",E]})]}),h.jsxs("span",{className:"text-rose-900 bg-rose-100 px-3 py-1.5 rounded-lg",children:["غائب:",h.jsxs("strong",{children:[" ",y]})]}),h.jsxs("span",{className:"text-blue-900 bg-blue-100 px-3 py-1.5 rounded-lg",children:["متأخر:",h.jsxs("strong",{children:[" ",ne]})]}),h.jsxs("span",{className:"text-amber-900 bg-amber-100 px-3 py-1.5 rounded-lg",children:["مبرر:",h.jsxs("strong",{children:[" ",se]})]})]})]}),h.jsx("div",{className:"bg-white rounded-xl shadow-md border border-slate-300 overflow-hidden",children:_.length===0?h.jsx("div",{className:"p-6 text-center text-slate-500 font-bold",children:"لا يوجد تلاميذ مطابقون للفلترة الحالية."}):h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-right border-collapse min-w-[850px]",children:[h.jsx("thead",{className:"bg-slate-100 border-b-2 border-slate-300 text-slate-800 font-bold text-sm",children:h.jsxs("tr",{children:[h.jsx("th",{className:"px-6 py-4",children:"الاسم الكامل"}),h.jsx("th",{className:"px-6 py-4",children:"المستوى"}),h.jsx("th",{className:"px-6 py-4",children:"القسم"}),h.jsx("th",{className:"px-6 py-4",children:"الأستاذ المسؤول"}),h.jsx("th",{className:"px-6 py-4 text-center",children:"حالة الحضور"}),h.jsx("th",{className:"px-6 py-4 text-center",children:"تواصل"})]})}),h.jsx("tbody",{className:"divide-y divide-slate-200 text-sm",children:_.map($=>{const J=s.find(xe=>xe.id===$.teacherId),te=o[$.id]||"present";return h.jsxs("tr",{className:"hover:bg-slate-50 transition",children:[h.jsx("td",{className:"px-6 py-4 font-black text-slate-900",children:$.full_name}),h.jsx("td",{className:"px-6 py-4 text-slate-700 font-bold",children:$.level}),h.jsx("td",{className:"px-6 py-4 text-slate-700 font-bold",children:$.className}),h.jsx("td",{className:"px-6 py-4 text-slate-800 font-bold",children:J?J.full_name:"عام"}),h.jsx("td",{className:"px-6 py-4 text-center",children:h.jsxs("div",{className:"inline-flex rounded-lg p-1 bg-slate-200 gap-1 border border-slate-300 flex-wrap justify-center",children:[h.jsx("button",{type:"button",onClick:()=>w($.id,"present"),className:`px-3 py-1.5 rounded-md text-xs font-black ${te==="present"?"bg-emerald-600 text-white":"bg-slate-100 text-slate-800"}`,children:"حاضر ✅"}),h.jsx("button",{type:"button",onClick:()=>w($.id,"absent"),className:`px-3 py-1.5 rounded-md text-xs font-black ${te==="absent"?"bg-rose-600 text-white":"bg-slate-100 text-slate-800"}`,children:"غائب ❌"}),h.jsx("button",{type:"button",onClick:()=>w($.id,"late"),className:`px-3 py-1.5 rounded-md text-xs font-black ${te==="late"?"bg-blue-600 text-white":"bg-slate-100 text-slate-800"}`,children:"متأخر ⏰"}),h.jsx("button",{type:"button",onClick:()=>w($.id,"excused"),className:`px-3 py-1.5 rounded-md text-xs font-black ${te==="excused"?"bg-amber-600 text-white":"bg-slate-100 text-slate-800"}`,children:"مبرر ⚠️"})]})}),h.jsx("td",{className:"px-6 py-4 text-center",children:te==="absent"&&h.jsx("button",{type:"button",onClick:()=>I($),className:"px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-black",children:"📲 إشعار الغياب"})})]},$.id)})})]})})})]})}const Uh=["الرياضيات","الفيزياء والكيمياء","علوم الحياة والأرض","اللغة الفرنسية","اللغة الإنجليزية","اللغة العربية","الفلسفة","الاجتماعيات","مادة أخرى"];function Hx(){const[r,e]=L.useState([]),[t,n]=L.useState(!0),[s,i]=L.useState(!1),[o,l]=L.useState(null),[c,d]=L.useState(!1),[m,p]=L.useState(""),[v,T]=L.useState(""),[S,D]=L.useState({show:!1,id:null,name:""}),[C,z]=L.useState(!1),[j,M]=L.useState({fullName:"",subject:"الرياضيات",phone:"",salary:""}),q=L.useCallback(async()=>{try{n(!0);const E=(await xt(Xe(ve,"teachers"))).docs.map(y=>({id:y.id,...y.data(),displayName:y.data().fullName||y.data().name||"أستاذ غير مسمى"}));e(E)}catch(I){console.error("خطأ في جلب البيانات:",I)}finally{n(!1)}},[]);L.useEffect(()=>{q()},[q]);const N=async I=>{I.preventDefault(),d(!0);try{const E={fullName:j.fullName.trim(),name:j.fullName.trim(),subject:j.subject,phone:j.phone.trim(),salary:j.salary?Number(j.salary):0,updatedAt:Li()};o?(await ZI(at(ve,"teachers",o),E),l(null)):await Ul(Xe(ve,"teachers"),{...E,createdAt:Li()}),M({fullName:"",subject:"الرياضيات",phone:"",salary:""}),i(!1),q()}catch(E){console.error("خطأ في الحفظ:",E)}finally{d(!1)}},P=I=>{M({fullName:I.fullName||I.name||"",subject:I.subject||"الرياضيات",phone:I.phone||"",salary:I.salary||""}),l(I.id),i(!0)},w=(I,E)=>{D({show:!0,id:I,name:E})},_=async()=>{if(S.id){z(!0);try{await $m(at(ve,"teachers",S.id)),D({show:!1,id:null,name:""}),q()}catch(I){console.error("خطأ في الحذف:",I)}finally{z(!1)}}},b=I=>{if(!I)return alert("رقم الهاتف غير متوفر!");let E=I.trim().replace(/\s+/g,"").replace(/-/g,"");E.startsWith("0")&&(E="212"+E.substring(1)),E.startsWith("+")&&(E=E.substring(1)),window.open(`https://wa.me/${E}`,"_blank")},x=r.filter(I=>{const E=I.displayName.toLowerCase().includes(m.toLowerCase())||I.phone?.includes(m),y=v?I.subject===v:!0;return E&&y});return h.jsxs("div",{className:"min-h-screen bg-slate-100 p-4 md:p-6 space-y-6 dir-rtl text-right max-w-full pb-12",children:[h.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl shadow-sm border border-slate-200 gap-4",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-xl font-bold text-slate-900 flex items-center gap-2",children:"إدارة الأساتذة 👨‍🏫"}),h.jsx("p",{className:"text-sm text-slate-500 mt-1",children:"إضافة وتتبع الطاقم التربوي لأكاديمية إسهام"})]}),h.jsxs("button",{onClick:()=>{i(!s),l(null),M({fullName:"",subject:"الرياضيات",phone:"",salary:""})},className:`px-5 py-2.5 text-white rounded-lg transition font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer ${s?"bg-slate-700 hover:bg-slate-800":"bg-amber-500 hover:bg-amber-600"}`,children:[h.jsx("span",{children:s?"✕":"+"}),h.jsx("span",{children:s?"إلغاء النافذة":"إضافة أستاذ جديد"})]})]}),s&&h.jsxs("form",{onSubmit:N,className:"bg-white p-6 rounded-xl shadow-md border-2 border-amber-300 space-y-4 transition-all",children:[h.jsxs("div",{className:"flex justify-between items-center border-b border-slate-200 pb-3",children:[h.jsxs("h3",{className:"text-md font-bold text-slate-800 flex items-center gap-2",children:[h.jsx("span",{children:o?"✏️":"➕"}),o?"تعديل بيانات الأستاذ":"إضافة أستاذ جديد"]}),h.jsx("button",{type:"button",onClick:()=>i(!1),className:"text-slate-400 hover:text-slate-600 text-sm font-bold",children:"إغلاق ✕"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"الاسم الكامل *"}),h.jsx("input",{type:"text",value:j.fullName,onChange:I=>M({...j,fullName:I.target.value}),required:!0,placeholder:"مثال: أستاذ عبد الله",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"المادة المدرسة"}),h.jsx("select",{value:j.subject,onChange:I=>M({...j,subject:I.target.value}),className:"w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer",children:Uh.map(I=>h.jsx("option",{value:I,children:I},I))})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"رقم الهاتف *"}),h.jsx("input",{type:"text",value:j.phone,onChange:I=>M({...j,phone:I.target.value}),required:!0,placeholder:"06XXXXXXXX",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"المستحقات الشهريّة (درهم)"}),h.jsx("input",{type:"number",value:j.salary,onChange:I=>M({...j,salary:I.target.value}),placeholder:"مثال: 1500",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]})]}),h.jsxs("div",{className:"flex justify-end gap-2 pt-3 border-t border-slate-100",children:[h.jsx("button",{type:"button",onClick:()=>i(!1),className:"px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition cursor-pointer",children:"إلغاء"}),h.jsx("button",{type:"submit",disabled:c,className:"px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-bold transition shadow-sm cursor-pointer disabled:opacity-50 flex items-center gap-2",children:c?"جاري الحفظ...":"حفظ البيانات ✅"})]})]}),h.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-3 w-full md:w-auto",children:[h.jsx("input",{type:"text",placeholder:"🔍 البحث باسم الأستاذ أو الهاتف...",value:m,onChange:I=>p(I.target.value),className:"px-4 py-2 border border-slate-300 rounded-lg w-full md:w-64 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm"}),h.jsxs("select",{value:v,onChange:I=>T(I.target.value),className:"px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white cursor-pointer",children:[h.jsx("option",{value:"",children:"جميع المواد"}),Uh.map(I=>h.jsx("option",{value:I,children:I},I))]})]}),h.jsxs("div",{className:"text-xs font-bold text-slate-600",children:["إجمالي الأساتذة: ",h.jsx("span",{className:"text-amber-600 font-bold text-sm bg-amber-50 px-2 py-1 rounded-md border border-amber-200",children:x.length})]})]}),h.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden",children:t?h.jsx("div",{className:"p-8 text-center text-slate-500 font-bold",children:"جاري تحميل لائحة الأساتذة..."}):x.length===0?h.jsxs("div",{className:"p-10 text-center text-slate-500 space-y-3",children:[h.jsx("p",{className:"text-base font-bold text-slate-700",children:"لا يوجد أساتذة مطابقون للبحث."}),!s&&h.jsx("button",{onClick:()=>i(!0),className:"px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold transition shadow-sm",children:"+ إضافة أستاذ الآن"})]}):h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-right border-collapse min-w-[650px]",children:[h.jsx("thead",{className:"bg-slate-100 border-b border-slate-200 text-xs text-slate-700 font-bold",children:h.jsxs("tr",{children:[h.jsx("th",{className:"p-4",children:"الاسم الكامل"}),h.jsx("th",{className:"p-4",children:"المادة"}),h.jsx("th",{className:"p-4",children:"رقم الهاتف"}),h.jsx("th",{className:"p-4",children:"المستحقات الشهريّة"}),h.jsx("th",{className:"p-4 text-center",children:"الإجراءات"})]})}),h.jsx("tbody",{className:"divide-y divide-slate-100 text-sm",children:x.map(I=>h.jsxs("tr",{className:"hover:bg-slate-50 transition",children:[h.jsx("td",{className:"p-4 font-bold text-slate-900",children:I.displayName}),h.jsx("td",{className:"p-4",children:h.jsx("span",{className:"px-2.5 py-1 bg-amber-50 text-amber-800 rounded-md text-xs font-semibold border border-amber-200",children:I.subject||"غير محدد"})}),h.jsx("td",{className:"p-4 font-mono text-xs",dir:"ltr",children:h.jsxs("div",{className:"flex items-center gap-2 justify-end",children:[h.jsx("span",{className:"font-semibold text-slate-800",children:I.phone||"---"}),I.phone&&h.jsx("button",{onClick:()=>b(I.phone),className:"text-emerald-600 hover:text-emerald-700 text-base cursor-pointer",title:"تواصل عبر الواتساب",children:"💬"})]})}),h.jsx("td",{className:"p-4 font-semibold text-slate-800",children:I.salary?`${I.salary} درهم`:"---"}),h.jsx("td",{className:"p-4 text-center",children:h.jsxs("div",{className:"flex items-center justify-center gap-2",children:[h.jsx("button",{onClick:()=>P(I),className:"px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 rounded text-xs font-bold transition cursor-pointer",children:"✏️ تعديل"}),h.jsx("button",{onClick:()=>w(I.id,I.displayName),className:"px-2.5 py-1 bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 rounded text-xs font-bold transition cursor-pointer",children:"🗑️ حذف"})]})})]},I.id))})]})})}),S.show&&h.jsx("div",{className:"fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full p-6 shadow-xl border border-slate-100 space-y-4",children:[h.jsxs("div",{className:"flex items-center gap-3 text-rose-600",children:[h.jsx("span",{className:"text-2xl",children:"⚠️"}),h.jsx("h3",{className:"text-lg font-bold",children:"تأكيد حذف الأستاذ"})]}),h.jsxs("p",{className:"text-sm text-slate-600",children:["هل أنت تأكد من رغبتك في حذف الأستاذ ",h.jsxs("strong",{className:"text-slate-800",children:['"',S.name,'"']}),"؟ هذا الإجراء لا يمكن التراجع عنه."]}),h.jsxs("div",{className:"flex justify-end gap-3 pt-3 border-t border-slate-100",children:[h.jsx("button",{onClick:()=>D({show:!1,id:null,name:""}),disabled:C,className:"px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition cursor-pointer",children:"إلغاء"}),h.jsx("button",{onClick:_,disabled:C,className:"px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-sm font-semibold transition cursor-pointer disabled:opacity-50",children:C?"جاري الحذف...":"نعم، حذف"})]})]})})]})}function Qx(){const[r,e]=L.useState([]),[t,n]=L.useState([]),[s,i]=L.useState(!0),[o,l]=L.useState(""),[c,d]=L.useState(""),[m,p]=L.useState(new Date().toLocaleString("ar-MA",{month:"long"})),[v,T]=L.useState(""),[S,D]=L.useState(null),C=async()=>{i(!0);try{const[P,w]=await Promise.all([xt(Xe(ve,"students")),xt(Xe(ve,"payments"))]),_=P.docs.map(x=>({id:x.id,...x.data()})).filter(x=>!x.archived);e(_);const b=w.docs.map(x=>({id:x.id,...x.data()}));n(b.sort((x,I)=>(I.createdAt?.seconds||0)-(x.createdAt?.seconds||0)))}catch(P){console.error("خطأ في جلب البيانات:",P)}finally{i(!1)}};L.useEffect(()=>{C()},[]);const z=P=>{const w=P.target.value;l(w);const _=r.find(b=>b.id===w);_&&_.monthlyFee&&d(_.monthlyFee)},j=async P=>{if(P.preventDefault(),!o||!c)return alert("المرجو اختيار التلميذ والمبلغ");const w=r.find(b=>b.id===o),_={receiptNo:`REC-${Date.now().toString().slice(-6)}`,studentId:w.id,studentName:w.fullName,parentPhone:w.parentPhone||"",level:w.level,amount:c,month:m,notes:v,date:new Date().toLocaleDateString("ar-MA",{year:"numeric",month:"long",day:"numeric"}),time:new Date().toLocaleTimeString("ar-MA",{hour:"2-digit",minute:"2-digit"}),createdAt:Li()};try{await Ul(Xe(ve,"payments"),_),D(_),l(""),d(""),T(""),C()}catch(b){console.error("خطأ في تسجيل الأداء:",b)}},M=async(P,w)=>{if(window.confirm(`هل أنت تأكد من رغبتك في نقل/حذف الوصل رقم ${w} إلى سلة المهملات؟`))try{await $m(at(ve,"payments",P)),n(_=>_.filter(b=>b.id!==P))}catch(_){console.error("خطأ أثناء حذف الوصل:",_),alert("حدث خطأ أثناء عملية الحذف")}},q=P=>{if(!P.parentPhone)return alert("رقم هاتف الولي غير متوفر لهذا التلميذ");const w=P.parentPhone.startsWith("0")?"212"+P.parentPhone.slice(1):P.parentPhone,_=`✨ *إشعار تسديد الواجب الشهري - ISSHAAM ACADEMY* ✨

السلام عليكم ورحمة الله وبركاته،
ولي أمر التلميذ(ة): *${P.studentName}* (${P.level})

نشكركم على ثقتكم الغالية فـ *ISSHAAM ACADEMY*. نود إخباركم أنه قد تم استلام الواجب الشهري بنجاح:
📄 *رقم الوصل:* ${P.receiptNo}
📅 *عن شهر:* ${P.month}
💰 *المبلغ الاستلام:* ${P.amount} درهم
🗓️ *تاريخ الأداء:* ${P.date}

الحالة: ✅ *مكاشي - PAYÉ*

نسأل الله بالتوفيق والنجاح لأبنائنا الكرام! 🎓
_إدارة أكاديمية عصام للدعم والتميز_`,b=`https://wa.me/${w}?text=${encodeURIComponent(_)}`;window.open(b,"_blank")},N=P=>{if(!P.parentPhone)return alert("رقم هاتف الولي غير متوفر لهذا التلميذ");const w=P.parentPhone.startsWith("0")?"212"+P.parentPhone.slice(1):P.parentPhone,_=new Date().toLocaleString("ar-MA",{month:"long"}),b=`🌸 *تذكير لطيف بالواجب الشهري - ISSHAAM ACADEMY* 🌸

السلام عليكم ورحمة الله وبركاته،
تحية طيبة وبعد من إدارة *ISSHAAM ACADEMY*.

نود تذكير ولي أمر التلميذ(ة): *${P.fullName}* (${P.level}) بأن موعد استيفاء الواجب الشهري الخاص بشهر (*${_}*) قد حان.

💰 *الواجب الشهري:* ${P.monthlyFee||"---"} درهم.

شاكرين لكم حسن تعاونكم واهتمامكم الدائم بمستقبل أبنائكم معنا 🌟.
لأي استفسار يرجى التواصل مع الإدارة.`,x=`https://wa.me/${w}?text=${encodeURIComponent(b)}`;window.open(x,"_blank")};return h.jsxs("div",{className:"space-y-6 dir-rtl text-right pb-10 font-sans",children:[h.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md border border-slate-300",children:[h.jsx("h2",{className:"text-2xl font-black text-slate-900 mb-2",children:"استلام الواجب الشهري وإرسال الوصولات 🧾"}),h.jsx("p",{className:"text-xs font-bold text-slate-600 mb-6",children:"سجل الأداء الشهري، اطبع الوصل المـكـاشـي، وأرسل الإشعارات عبر الواتساب مباشرة"}),h.jsxs("form",{onSubmit:j,className:"grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-bold",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block mb-1 text-slate-800",children:"اختيار التلميذ *"}),h.jsxs("select",{value:o,onChange:z,required:!0,className:"w-full p-2.5 border-2 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-blue-600",children:[h.jsx("option",{value:"",children:"-- اختر التلميذ --"}),r.map(P=>h.jsxs("option",{value:P.id,children:[P.fullName," (",P.level,")"]},P.id))]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block mb-1 text-slate-800",children:"عن شهر *"}),h.jsx("input",{type:"text",value:m,onChange:P=>p(P.target.value),required:!0,className:"w-full p-2.5 border-2 rounded-lg text-slate-900",placeholder:"مثال: أكتوبر / نونبر"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block mb-1 text-slate-800",children:"المبلغ المدفوع (درهم) *"}),h.jsx("input",{type:"number",value:c,onChange:P=>d(P.target.value),required:!0,className:"w-full p-2.5 border-2 rounded-lg text-slate-900",placeholder:"300"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block mb-1 text-slate-800",children:"ملاحظات (اختياري)"}),h.jsx("input",{type:"text",value:v,onChange:P=>T(P.target.value),className:"w-full p-2.5 border-2 rounded-lg text-slate-900",placeholder:"مثال: تسقيع جزئي، واجب الدورة..."})]}),h.jsx("div",{className:"md:col-span-4 mt-2",children:h.jsx("button",{type:"submit",className:"w-full md:w-auto px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-black text-sm shadow-md cursor-pointer transition",children:"💳 تسجيل الدفع وإصدار الوصل المـكـاشـي"})})]})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow-md border border-slate-300 p-5",children:[h.jsx("h3",{className:"text-lg font-black text-slate-900 mb-3",children:"📲 قائمة التلاميذ للتذكير السريع بالواتساب:"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",children:r.map(P=>h.jsxs("div",{className:"p-3 border rounded-lg bg-slate-50 flex justify-between items-center text-xs font-bold",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-slate-900 font-black",children:P.fullName}),h.jsxs("p",{className:"text-slate-500",children:[P.level," - ",P.monthlyFee||0," درهم"]})]}),h.jsx("button",{onClick:()=>N(P),className:"px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-lg text-[11px] flex items-center gap-1 cursor-pointer",children:"📱 تذكير بالأداء"})]},P.id))})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow-md border border-slate-300 p-5",children:[h.jsx("h3",{className:"text-xl font-black text-slate-900 mb-4 border-b pb-2",children:"سجل الوصولات المنجزة والأداءات 📜"}),s?h.jsx("p",{className:"text-center font-bold text-slate-600 py-4",children:"جاري تحميل سجل الأداءات..."}):t.length>0?h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-right border-collapse text-xs",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"bg-slate-100 border-b border-slate-300 text-slate-800 font-black",children:[h.jsx("th",{className:"p-3",children:"رقم الوصل"}),h.jsx("th",{className:"p-3",children:"اسم التلميذ"}),h.jsx("th",{className:"p-3",children:"المستوى"}),h.jsx("th",{className:"p-3",children:"عن شهر"}),h.jsx("th",{className:"p-3",children:"المبلغ المدفوع"}),h.jsx("th",{className:"p-3",children:"التاريخ والوقت"}),h.jsx("th",{className:"p-3 text-center",children:"خيارات"})]})}),h.jsx("tbody",{className:"divide-y divide-slate-200 font-bold text-slate-900",children:t.map(P=>h.jsxs("tr",{className:"hover:bg-slate-50",children:[h.jsx("td",{className:"p-3 font-mono font-black text-blue-800",children:P.receiptNo}),h.jsx("td",{className:"p-3 text-sm",children:P.studentName}),h.jsx("td",{className:"p-3",children:P.level}),h.jsx("td",{className:"p-3 bg-blue-50 text-blue-900 font-black rounded",children:P.month}),h.jsxs("td",{className:"p-3 text-emerald-800 font-black text-sm",children:[P.amount," درهم"]}),h.jsxs("td",{className:"p-3 text-slate-500 text-[11px]",children:[P.date," - ",P.time]}),h.jsxs("td",{className:"p-3 text-center flex justify-center gap-2",children:[h.jsx("button",{onClick:()=>D(P),className:"px-3 py-1 bg-slate-800 hover:bg-slate-900 text-white font-black rounded cursor-pointer",children:"🖨️ معاينة"}),h.jsx("button",{onClick:()=>q(P),className:"px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded cursor-pointer",children:"📲 واتساب"}),h.jsx("button",{onClick:()=>M(P.id,P.receiptNo),className:"px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-black rounded cursor-pointer",title:"حذف إلى سلة المهملات",children:"🗑️ حذف"})]})]},P.id))})]})}):h.jsx("p",{className:"text-center font-bold text-slate-500 py-4",children:"لا توجد أداءات مسجلة بعد"})]}),S&&h.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg border-2 border-slate-400",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4 print:hidden",children:[h.jsx("span",{className:"font-black text-slate-800 text-sm",children:"معاينة وصل الأداء الرسمية"}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx("button",{onClick:()=>q(S),className:"px-3 py-1.5 bg-emerald-600 text-white font-black text-xs rounded hover:bg-emerald-700 cursor-pointer",children:"📲 إرسال للواتساب"}),h.jsx("button",{onClick:()=>window.print(),className:"px-3 py-1.5 bg-blue-700 text-white font-black text-xs rounded hover:bg-blue-800 cursor-pointer",children:"🖨️ طباعة الآن"}),h.jsx("button",{onClick:()=>D(null),className:"px-3 py-1.5 bg-slate-200 text-slate-800 font-black text-xs rounded hover:bg-slate-300 cursor-pointer",children:"إغلاق ✖"})]})]}),h.jsxs("div",{className:"relative border-4 border-slate-900 p-6 rounded-lg bg-white text-slate-900 space-y-4 text-right overflow-hidden shadow-inner",children:[h.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-22deg] pointer-events-none opacity-85",children:h.jsxs("div",{className:"border-4 border-dashed border-red-600 rounded-full w-44 h-44 flex flex-col justify-center items-center text-center p-2 bg-red-50/30",children:[h.jsx("span",{className:"text-xs font-black text-red-600 tracking-wider",children:"★ ISSHAAM ACADEMY ★"}),h.jsx("span",{className:"text-2xl font-black text-red-600 my-0.5 border-y-2 border-red-600 px-3",children:"PAYÉ"}),h.jsx("span",{className:"text-[10px] font-black text-red-600",children:"تم الأداء - مقبوض"})]})}),h.jsxs("div",{className:"border-b-2 border-slate-900 pb-3 flex justify-between items-center relative z-10",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center font-black text-xl shadow",children:"🎓"}),h.jsxs("div",{children:[h.jsx("h2",{className:"text-xl font-black text-slate-900",children:"ISSHAAM ACADEMY"}),h.jsx("p",{className:"text-[11px] font-bold text-blue-900",children:"مؤسسة الدعم والتقوية والتوجيه"})]})]}),h.jsxs("div",{className:"text-left font-mono text-xs font-black",children:[h.jsx("p",{className:"text-blue-900",children:S.receiptNo}),h.jsx("p",{className:"text-[10px] text-slate-600",children:S.date})]})]}),h.jsx("div",{className:"text-center bg-slate-900 text-white py-1.5 rounded font-black text-xs tracking-wide relative z-10",children:"وصل استلام الواجب الشهري الرسمي — REÇU DE PAIEMENT"}),h.jsxs("div",{className:"space-y-2 text-xs font-bold pt-1 relative z-10",children:[h.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[h.jsx("span",{className:"text-slate-600",children:"اسم التلميذ(ة):"}),h.jsx("span",{className:"text-slate-900 font-black text-sm",children:S.studentName})]}),h.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[h.jsx("span",{className:"text-slate-600",children:"المستوى الدراسي:"}),h.jsx("span",{children:S.level})]}),h.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[h.jsx("span",{className:"text-slate-600",children:"واجب شهر:"}),h.jsx("span",{className:"font-black text-blue-900",children:S.month})]}),h.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[h.jsx("span",{className:"text-slate-600",children:"المبلغ المستلم:"}),h.jsxs("span",{className:"font-black text-emerald-800 text-base",children:[S.amount," درهم مغربي"]})]}),S.notes&&h.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[h.jsx("span",{className:"text-slate-600",children:"ملاحظات الإدارة:"}),h.jsx("span",{children:S.notes})]})]}),h.jsx("div",{className:"bg-blue-50/80 p-2.5 rounded-lg border border-blue-200 text-center relative z-10",children:h.jsx("p",{className:"text-[11px] font-black text-blue-950",children:"🌟 نشكركم على ثقتكم الغالية فـ أكاديمية ISSHAAM. نسأل الله التوفيق والنجاح لأبنائنا الكرام! 🌟"})}),h.jsxs("div",{className:"pt-4 flex justify-between text-[11px] font-black text-slate-800 relative z-10",children:[h.jsx("p",{children:"توقيع وخاتم الإدارة:"}),h.jsx("p",{children:"توقيع الولي(ة):"})]})]})]})})]})}function Jx(){const[r,e]=L.useState([]),[t,n]=L.useState([]),[s,i]=L.useState(!0),[o,l]=L.useState(""),[c,d]=L.useState("شتنبر"),[m,p]=L.useState("all"),v=["شتنبر","أكتوبر","نونبر","دجنبر","يناير","فبراير","مارس","أبريل","ماي","يونيو"],T=N=>N?typeof N=="string"?N:N.seconds?new Date(N.seconds*1e3).toLocaleDateString("ar-MA"):String(N):new Date().toLocaleDateString("ar-MA"),S=async()=>{try{const P=(await xt(Xe(ve,"students"))).docs.map(b=>({id:b.id,...b.data()})),_=(await xt(Xe(ve,"payments"))).docs.map(b=>b.data());e(P),n(_)}catch(N){console.error("خطأ في جلب البيانات:",N)}finally{i(!1)}};L.useEffect(()=>{S()},[]);const D=N=>t.find(P=>P.studentId===N&&P.month===c&&(P.status==="مؤدى"||P.status==="paid")),C=async N=>{try{const P=new Date().toLocaleDateString("ar-MA"),w={studentId:N.id||"",studentName:N.fullName||"",amount:N.monthlyFee||0,month:c,status:"مؤدى",paidAt:P};n(_=>[..._,w]),await Ul(Xe(ve,"payments"),{...w,paidAtTimestamp:Li()}),S()}catch(P){console.error("خطأ في تسجيل الأداء:",P)}},z=(N,P)=>{const w=window.open("","_blank","width=600,height=700");if(!w)return;const _=N.fullName||"غير محدد",b=N.level||"غير محدد",x=P?.amount||N.monthlyFee||0,I=T(P?.paidAt),E=`
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
          <div class="row"><span>المستوى:</span><strong>${b}</strong></div>
          <div class="row"><span>الشهر:</span><strong>${c}</strong></div>
          <div class="row total"><span>المبلغ:</span><span>${x} DH</span></div>
          <hr />
          <p style="font-size:12px; color:#666;">تاريخ الأداء: ${I}</p>
        </div>
        <script>window.onload = function() { window.print(); window.close(); };<\/script>
      </body>
      </html>
    `;w.document.write(E),w.document.close()},j=r.filter(N=>{const P=(N.fullName||"").toLowerCase().includes(o.toLowerCase()),w=!!D(N.id);return m==="paid"?P&&w:m==="pending"?P&&!w:P}),M=r.reduce((N,P)=>D(P.id)?N+Number(P.monthlyFee||0):N,0),q=r.reduce((N,P)=>D(P.id)?N:N+Number(P.monthlyFee||0),0);return h.jsxs("div",{className:"p-6 space-y-6 dir-rtl text-right pb-12",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-slate-200",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"إدارة المالية والأداءات 💰"}),h.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"متابعة الواجبات الشهريّة"})]}),h.jsxs("div",{className:"flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200",children:[h.jsx("label",{className:"text-xs font-bold text-gray-700",children:"الشهر:"}),h.jsx("select",{value:c,onChange:N=>d(N.target.value),className:"px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-bold",children:v.map(N=>h.jsx("option",{value:N,children:N},N))})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[h.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsxs("p",{className:"text-xs font-bold text-slate-400",children:["المداخيل (",c,")"]}),h.jsxs("h3",{className:"text-xl font-extrabold text-emerald-600 mt-1",children:[M," DH"]})]}),h.jsx(jp,{className:"w-6 h-6 text-emerald-600"})]}),h.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsxs("p",{className:"text-xs font-bold text-slate-400",children:["المتبقية (",c,")"]}),h.jsxs("h3",{className:"text-xl font-extrabold text-amber-600 mt-1",children:[q," DH"]})]}),h.jsx(Mp,{className:"w-6 h-6 text-amber-600"})]}),h.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-bold text-slate-400",children:"نسبة التحصيل"}),h.jsxs("h3",{className:"text-xl font-extrabold text-indigo-600 mt-1",children:[r.length>0?Math.round(r.filter(N=>D(N.id)).length/r.length*100):0,"%"]})]}),h.jsx(Lp,{className:"w-6 h-6 text-indigo-600"})]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm",children:[h.jsxs("div",{className:"relative w-full sm:w-80",children:[h.jsx("input",{type:"text",placeholder:"البحث باسم التلميذ...",value:o,onChange:N=>l(N.target.value),className:"w-full pr-10 pl-4 py-2 border border-gray-300 rounded-xl text-sm"}),h.jsx(Fp,{className:"w-4 h-4 text-gray-400 absolute right-3 top-3"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:()=>p("all"),className:"px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100",children:"الكل"}),h.jsx("button",{onClick:()=>p("paid"),className:"px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700",children:"تم الأداء"}),h.jsx("button",{onClick:()=>p("pending"),className:"px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-50 text-amber-700",children:"غير مؤدى"})]})]}),h.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",children:s?h.jsx("div",{className:"p-8 text-center text-gray-500 font-bold",children:"جاري تحميل البيانات..."}):h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-right border-collapse",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"bg-gray-50 border-b text-gray-600 text-sm",children:[h.jsx("th",{className:"p-4",children:"اسم التلميذ"}),h.jsx("th",{className:"p-4",children:"المستوى"}),h.jsx("th",{className:"p-4",children:"الواجب الشهري"}),h.jsx("th",{className:"p-4",children:"الحالة"}),h.jsx("th",{className:"p-4 text-center",children:"الإجراء"})]})}),h.jsx("tbody",{className:"divide-y divide-gray-100 text-sm",children:j.map(N=>{const P=D(N.id),w=!!P;return h.jsxs("tr",{className:"hover:bg-gray-50",children:[h.jsx("td",{className:"p-4 font-semibold",children:N.fullName}),h.jsx("td",{className:"p-4",children:N.level||"غير محدد"}),h.jsxs("td",{className:"p-4 font-bold text-emerald-600",children:[N.monthlyFee||0," DH"]}),h.jsx("td",{className:"p-4",children:w?h.jsx("span",{className:"text-green-700 bg-green-50 px-2 py-1 rounded-lg text-xs font-bold",children:"تم الأداء ✅"}):h.jsx("span",{className:"text-amber-700 bg-amber-50 px-2 py-1 rounded-lg text-xs font-bold",children:"غير مؤدى ⏳"})}),h.jsx("td",{className:"p-4 text-center",children:w?h.jsxs("button",{onClick:()=>z(N,P),className:"bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1",children:[h.jsx(Up,{className:"w-3.5 h-3.5"})," طباعة الوصل"]}):h.jsxs("button",{onClick:()=>C(N),className:"bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1",children:[h.jsx(Bp,{className:"w-4 h-4"})," تأكيد الأداء"]})})]},N.id)})})]})})})]})}const na="./logo.jpeg";function Yx(){const{settings:r,updateSettings:e,loading:t}=$l(),[n,s]=L.useState(!1),[i,o]=L.useState(""),[l,c]=L.useState("branding"),[d,m]=L.useState({academyName:"ISSHAAM ACADEMY",logoUrl:na,bgColor:"bg-slate-100",primaryColor:"#f59e0b",language:"ar"}),[p,v]=L.useState({phone:"",address:"Moulay Rachid, Casablanca",academicYear:"2025/2026",teacherPercentage:50,notes:"شكراً لثقتكم بأكاديمية إسهام."}),[T,S]=L.useState([]),[D,C]=L.useState("");L.useEffect(()=>{r&&(m(N=>({...N,...r.branding||{}})),v(N=>({...N,...r.general||{}})),S(Array.isArray(r.adminEmails)?r.adminEmails:[]))},[r]);const z=async N=>{N.preventDefault();try{s(!0),o(""),await e({branding:d,general:p,adminEmails:T}),o("تم حفظ التغييرات وتطبيقها فوراً في الموقع كامل! ✅")}catch(P){console.error("خطأ في حفظ الإعدادات:",P),o("حدث خطأ أثناء حفظ الإعدادات ❌")}finally{s(!1)}},j=async N=>{N.preventDefault();const P=D.trim().toLowerCase();if(P){if(T.includes(P)){o("هذا البريد الإلكتروني موجود بالفعل ❌");return}try{s(!0),o("");const w=[...T,P];await e({adminEmails:w}),S(w),C(""),o(`تمت إضافة ${P} إلى قائمة المشرفين ✅`)}catch(w){console.error("خطأ في إضافة المشرف:",w),o("حدث خطأ أثناء إضافة المشرف ❌")}finally{s(!1)}}},M=async N=>{if(window.confirm(`هل أنت متأكد من إزالة ${N} من قائمة المشرفين؟`))try{s(!0),o("");const w=T.filter(_=>_!==N);await e({adminEmails:w}),S(w),o(`تمت إزالة ${N} من قائمة المشرفين ✅`)}catch(w){console.error("خطأ في حذف المشرف:",w),o("حدث خطأ أثناء حذف المشرف ❌")}finally{s(!1)}};if(t)return h.jsx("div",{className:"p-8 text-center text-slate-600 font-bold dir-rtl",children:"جاري تحميل الإعدادات..."});const q=i.includes("✅");return h.jsxs("div",{className:"max-w-5xl mx-auto space-y-6 dir-rtl text-right pb-12",children:[h.jsx("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:h.jsxs("div",{children:[h.jsx("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:"⚙️ إعدادات الأكاديمية"}),h.jsx("p",{className:"text-slate-500 text-sm mt-1",children:"التحكم في الهوية، الألوان، اللغة، المشرفين، وبيانات المؤسسة."})]})}),i&&h.jsx("div",{className:`p-4 rounded-xl font-medium text-sm shadow-sm ${q?"bg-emerald-50 text-emerald-700 border border-emerald-200":"bg-rose-50 text-rose-700 border border-rose-200"}`,children:i}),h.jsxs("div",{className:"flex flex-wrap border border-slate-200 gap-2 bg-white p-2 rounded-xl shadow-sm",children:[h.jsx("button",{type:"button",onClick:()=>c("branding"),className:`px-4 py-2.5 rounded-lg font-bold text-sm transition ${l==="branding"?"bg-amber-500 text-white shadow-sm":"text-slate-600 hover:bg-slate-100"}`,children:"🎨 الهوية والألوان واللغة"}),h.jsx("button",{type:"button",onClick:()=>c("admins"),className:`px-4 py-2.5 rounded-lg font-bold text-sm transition ${l==="admins"?"bg-amber-500 text-white shadow-sm":"text-slate-600 hover:bg-slate-100"}`,children:"👥 إدارة المشرفين"}),h.jsx("button",{type:"button",onClick:()=>c("general"),className:`px-4 py-2.5 rounded-lg font-bold text-sm transition ${l==="general"?"bg-amber-500 text-white shadow-sm":"text-slate-600 hover:bg-slate-100"}`,children:"📋 بيانات المؤسسة"})]}),l==="branding"&&h.jsxs("form",{onSubmit:z,className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6",children:[h.jsx("h3",{className:"text-md font-bold text-slate-800 border-b pb-3",children:"تخصيص اللوغو، الألوان، واللغة"}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 text-sm",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"اسم المؤسسة / الأكاديمية *"}),h.jsx("input",{type:"text",value:d.academyName,onChange:N=>m({...d,academyName:N.target.value}),required:!0,className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"رابط اللوغو"}),h.jsx("input",{type:"text",placeholder:`${na} أو رابط مباشر`,value:d.logoUrl,onChange:N=>m({...d,logoUrl:N.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"}),d.logoUrl&&h.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[h.jsx("span",{className:"text-xs text-slate-500 font-bold",children:"معاينة اللوغو:"}),h.jsx("img",{src:d.logoUrl,onError:N=>{N.currentTarget.src=na},alt:"Logo",className:"h-12 w-12 object-contain rounded-full border-2 border-amber-400 p-1"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"لون خلفية الصفحة"}),h.jsxs("select",{value:d.bgColor,onChange:N=>m({...d,bgColor:N.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg bg-white cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none",children:[h.jsx("option",{value:"bg-slate-100",children:"رمادي فاتح هادئ"}),h.jsx("option",{value:"bg-gray-50",children:"أبيض عاجي"}),h.jsx("option",{value:"bg-slate-900",children:"وضع مظلم"}),h.jsx("option",{value:"bg-amber-50/40",children:"دافئ خفيف"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"لغة النظام"}),h.jsxs("select",{value:d.language,onChange:N=>m({...d,language:N.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg bg-white cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none",children:[h.jsx("option",{value:"ar",children:"العربية"}),h.jsx("option",{value:"fr",children:"Français"}),h.jsx("option",{value:"en",children:"English"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"اللون الرئيسي للهوية"}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("input",{type:"color",value:d.primaryColor,onChange:N=>m({...d,primaryColor:N.target.value}),className:"w-12 h-10 p-1 border rounded cursor-pointer"}),h.jsx("span",{className:"text-xs font-mono bg-slate-100 px-3 py-1.5 rounded-md border font-bold text-slate-700",children:d.primaryColor})]})]})]}),h.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-100",children:h.jsx("button",{type:"submit",disabled:n,className:"px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed",children:n?"جاري الحفظ...":"حفظ التغييرات ✅"})})]}),l==="admins"&&h.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-md font-bold text-slate-800 border-b pb-3",children:"إدارة المشرفين"}),h.jsx("p",{className:"text-xs text-slate-500 mt-2",children:"هذه القائمة مخصصة لتسجيل الحسابات المعتمدة كمشرفين داخل إعدادات الأكاديمية."})]}),h.jsxs("form",{onSubmit:j,className:"flex flex-col sm:flex-row gap-2 max-w-xl",children:[h.jsx("input",{type:"email",required:!0,placeholder:"admin@gmail.com",value:D,onChange:N=>C(N.target.value),className:"flex-1 p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"}),h.jsx("button",{type:"submit",disabled:n,className:"px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed",children:n?"جاري الحفظ...":"+ إضافة Admin"})]}),h.jsxs("div",{className:"mt-4",children:[h.jsx("h4",{className:"text-xs font-bold text-slate-500 mb-3",children:"الحسابات المسجلة:"}),T.length===0?h.jsx("p",{className:"text-sm text-slate-400 font-semibold bg-slate-50 p-4 rounded-lg border text-center",children:"لا يوجد مسؤولون محددون حالياً."}):h.jsx("ul",{className:"divide-y border border-slate-200 rounded-lg overflow-hidden",children:T.map(N=>h.jsxs("li",{className:"p-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:bg-slate-50 text-sm",children:[h.jsxs("span",{className:"font-bold text-slate-800 flex items-center gap-2",children:["👤 ",N]}),h.jsx("button",{type:"button",onClick:()=>M(N),disabled:n,className:"px-3 py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-md border border-rose-200 text-xs font-bold transition disabled:opacity-50",children:"حذف الصلاحية 🗑️"})]},N))})]})]}),l==="general"&&h.jsxs("form",{onSubmit:z,className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6",children:[h.jsx("h3",{className:"text-md font-bold text-slate-800 border-b pb-3",children:"البيانات العامة والنسب"}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"السنة الدراسية"}),h.jsx("input",{type:"text",value:p.academicYear,onChange:N=>v({...p,academicYear:N.target.value}),placeholder:"2025/2026",className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"نسبة الأستاذ الافتراضية (%)"}),h.jsx("input",{type:"number",min:"0",max:"100",value:p.teacherPercentage,onChange:N=>v({...p,teacherPercentage:Number(N.target.value)}),className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"رقم هاتف التواصل"}),h.jsx("input",{type:"tel",value:p.phone,onChange:N=>v({...p,phone:N.target.value}),placeholder:"06XXXXXXXX",dir:"ltr",className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"العنوان / المقر"}),h.jsx("input",{type:"text",value:p.address,onChange:N=>v({...p,address:N.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),h.jsxs("div",{className:"md:col-span-2",children:[h.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"ملاحظات / شروط عامة"}),h.jsx("textarea",{rows:"4",value:p.notes,onChange:N=>v({...p,notes:N.target.value}),placeholder:"أدخل الملاحظات التي تظهر في الوصولات...",className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none resize-y"})]})]}),h.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-100",children:h.jsx("button",{type:"submit",disabled:n,className:"px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed",children:n?"جاري الحفظ...":"حفظ التغييرات ✅"})})]})]})}function Xx(){const{currentUser:r,userRole:e,loading:t}=_o(),{settings:n}=$l(),s=Dp(),[i,o]=L.useState(!1),l=n?.branding?.bgColor||"bg-slate-50",d=(n?.branding?.language||"ar")!=="fr";return t?h.jsxs("div",{className:"h-screen w-screen flex flex-col items-center justify-center bg-slate-900 text-white dir-rtl",children:[h.jsx("div",{className:"w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"}),h.jsx("p",{className:"text-sm font-semibold text-slate-300",children:"جاري التحقق من بيانات الدخول..."})]}):r?e?h.jsxs("div",{className:`flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ${d?"text-right dir-rtl":"text-left dir-ltr"}`,dir:d?"rtl":"ltr",children:[h.jsx(Bx,{mobileOpen:i,setMobileOpen:o}),h.jsxs("div",{className:"flex-1 flex flex-col min-w-0 min-h-screen overflow-hidden",children:[h.jsx(qx,{setMobileOpen:o}),h.jsx("main",{className:`flex-1 overflow-y-auto overflow-x-auto p-3 sm:p-4 md:p-6 ${l}`,children:h.jsx(Vp,{})})]})]}):h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 p-6 text-center",dir:"rtl",children:h.jsxs("div",{className:"max-w-md rounded-2xl bg-white p-8 shadow-xl",children:[h.jsx("h1",{className:"text-xl font-bold text-slate-900",children:"لا توجد صلاحية لهذا الحساب"}),h.jsx("p",{className:"mt-3 text-sm text-slate-600",children:"يرجى التواصل مع إدارة الأكاديمية لمنح الحساب صلاحية مناسبة."})]})}):h.jsx(ra,{to:"/login",replace:!0,state:{from:s.pathname}})}function Zx(){return h.jsx(Lx,{children:h.jsx(Ux,{children:h.jsx(Cp,{children:h.jsxs(kp,{children:[h.jsx(tt,{path:"/login",element:h.jsx(zx,{})}),h.jsxs(tt,{element:h.jsx(Xx,{}),children:[h.jsx(tt,{index:!0,element:h.jsx(ra,{to:"/dashboard",replace:!0})}),h.jsx(tt,{path:"dashboard",element:h.jsx(Kx,{})}),h.jsx(tt,{path:"students",element:h.jsx(Gx,{})}),h.jsx(tt,{path:"attendance",element:h.jsx(Wx,{})}),h.jsx(tt,{path:"teachers",element:h.jsx(Hx,{})}),h.jsx(tt,{path:"payments",element:h.jsx(Qx,{})}),h.jsx(tt,{path:"financials",element:h.jsx(Jx,{})}),h.jsx(tt,{path:"settings",element:h.jsx(Yx,{})}),h.jsx(tt,{path:"*",element:h.jsx(ra,{to:"/dashboard",replace:!0})})]})]})})})})}const Zm=document.getElementById("root");if(!Zm)throw new Error('Root element "#root" was not found.');zh(Zm).render(h.jsx(L.StrictMode,{children:h.jsx(Zx,{})}));
