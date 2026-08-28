var gg=Object.defineProperty;var _g=(r,e,t)=>e in r?gg(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Su=(r,e,t)=>_g(r,typeof e!="symbol"?e+"":e,t);import{r as O,a as yg,u as xl,N as bg,b as wl,L as yn,R as vg,c as Mi,H as xg,d as wg,e as ot,O as Ig}from"./react-CkCFmPma.js";import{_ as Il,c as Eg}from"./supabase-R06Uq91X.js";import{L as Tg,G as Ed,S as Ag,T as Td,M as Sg,a as Ng,E as Rg,b as Pg,A as Va,c as Cg,C as oa,U as Nu,d as kg,B as aa,e as Ad,f as Dg,g as Vg,h as jg,i as la,j as Og,D as Mg,k as Lg,l as Fg,P as Ug,m as Bg}from"./icons-C4W_ugGZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Sd={exports:{}},uo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg=O,$g=Symbol.for("react.element"),zg=Symbol.for("react.fragment"),Kg=Object.prototype.hasOwnProperty,Gg=qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wg={key:!0,ref:!0,__self:!0,__source:!0};function Nd(r,e,t){var n,s={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)Kg.call(e,n)&&!Wg.hasOwnProperty(n)&&(s[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:$g,type:r,key:i,ref:o,props:s,_owner:Gg.current}}uo.Fragment=zg;uo.jsx=Nd;uo.jsxs=Nd;Sd.exports=uo;var c=Sd.exports,Rd,Ru=yg;Rd=Ru.createRoot,Ru.hydrateRoot;var Pu={};/**
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
 */const Pd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Hg=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],l=r[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,l=o?r[s+1]:0,u=s+2<r.length,d=u?r[s+2]:0,m=i>>2,g=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,T=d&63;u||(T=64,o||(v=64)),n.push(t[m],t[g],t[v],t[T])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Pd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Hg(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],l=s<r.length?t[r.charAt(s)]:0;++s;const d=s<r.length?t[r.charAt(s)]:64;++s;const g=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||l==null||d==null||g==null)throw new Qg;const v=i<<2|l>>4;if(n.push(v),d!==64){const T=l<<4&240|d>>2;if(n.push(T),g!==64){const R=d<<6&192|g;n.push(R)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Qg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jg=function(r){const e=Pd(r);return Cd.encodeByteArray(e,!0)},Li=function(r){return Jg(r).replace(/\./g,"")},kd=function(r){try{return Cd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xg=()=>Yg().__FIREBASE_DEFAULTS__,Zg=()=>{if(typeof process>"u"||typeof Pu>"u")return;const r=Pu.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},e_=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&kd(r[1]);return e&&JSON.parse(e)},ho=()=>{try{return Xg()||Zg()||e_()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Dd=r=>{var e,t;return(t=(e=ho())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},t_=r=>{const e=Dd(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Vd=()=>{var r;return(r=ho())===null||r===void 0?void 0:r.config},jd=r=>{var e;return(e=ho())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class n_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function r_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Li(JSON.stringify(t)),Li(JSON.stringify(o)),""].join(".")}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function i_(){var r;const e=(r=ho())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function o_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function a_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function l_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function c_(){const r=Re();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Od(){return!i_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Md(){try{return typeof indexedDB=="object"}catch{return!1}}function u_(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const h_="FirebaseError";class It extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=h_,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?d_(i,n):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new It(s,l,n)}}function d_(r,e){return r.replace(f_,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const f_=/\{\$([^}]+)}/g;function m_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ps(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Cu(i)&&Cu(o)){if(!ps(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Cu(r){return r!==null&&typeof r=="object"}/**
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
 */function ks(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function es(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ts(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function p_(r,e){const t=new g_(r,e);return t.subscribe.bind(t)}class g_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");__(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ca),s.error===void 0&&(s.error=ca),s.complete===void 0&&(s.complete=ca);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function __(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ca(){}/**
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
 */function Ne(r){return r&&r._delegate?r._delegate:r}class nn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wn="[DEFAULT]";/**
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
 */class y_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new n_;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(v_(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:b_(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function b_(r){return r===wn?void 0:r}function v_(r){return r.instantiationMode==="EAGER"}/**
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
 */class x_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new y_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(re||(re={}));const w_={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},I_=re.INFO,E_={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},T_=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=E_[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class El{constructor(e){this.name=e,this._logLevel=I_,this._logHandler=T_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const A_=(r,e)=>e.some(t=>r instanceof t);let ku,Du;function S_(){return ku||(ku=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function N_(){return Du||(Du=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ld=new WeakMap,ja=new WeakMap,Fd=new WeakMap,ua=new WeakMap,Tl=new WeakMap;function R_(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Yt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ld.set(t,r)}).catch(()=>{}),Tl.set(e,r),e}function P_(r){if(ja.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});ja.set(r,e)}let Oa={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ja.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Fd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Yt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function C_(r){Oa=r(Oa)}function k_(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(ha(this),e,...t);return Fd.set(n,e.sort?e.sort():[e]),Yt(n)}:N_().includes(r)?function(...e){return r.apply(ha(this),e),Yt(Ld.get(this))}:function(...e){return Yt(r.apply(ha(this),e))}}function D_(r){return typeof r=="function"?k_(r):(r instanceof IDBTransaction&&P_(r),A_(r,S_())?new Proxy(r,Oa):r)}function Yt(r){if(r instanceof IDBRequest)return R_(r);if(ua.has(r))return ua.get(r);const e=D_(r);return e!==r&&(ua.set(r,e),Tl.set(e,r)),e}const ha=r=>Tl.get(r);function V_(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),l=Yt(o);return n&&o.addEventListener("upgradeneeded",u=>{n(Yt(o.result),u.oldVersion,u.newVersion,Yt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const j_=["get","getKey","getAll","getAllKeys","count"],O_=["put","add","delete","clear"],da=new Map;function Vu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(da.get(e))return da.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=O_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||j_.includes(t)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return da.set(e,i),i}C_(r=>({...r,get:(e,t,n)=>Vu(e,t)||r.get(e,t,n),has:(e,t)=>!!Vu(e,t)||r.has(e,t)}));/**
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
 */class M_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(L_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function L_(r){const e=r.getComponent();return e?.type==="VERSION"}const Ma="@firebase/app",ju="0.10.13";/**
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
 */const Dt=new El("@firebase/app"),F_="@firebase/app-compat",U_="@firebase/analytics-compat",B_="@firebase/analytics",q_="@firebase/app-check-compat",$_="@firebase/app-check",z_="@firebase/auth",K_="@firebase/auth-compat",G_="@firebase/database",W_="@firebase/data-connect",H_="@firebase/database-compat",Q_="@firebase/functions",J_="@firebase/functions-compat",Y_="@firebase/installations",X_="@firebase/installations-compat",Z_="@firebase/messaging",ey="@firebase/messaging-compat",ty="@firebase/performance",ny="@firebase/performance-compat",ry="@firebase/remote-config",sy="@firebase/remote-config-compat",iy="@firebase/storage",oy="@firebase/storage-compat",ay="@firebase/firestore",ly="@firebase/vertexai-preview",cy="@firebase/firestore-compat",uy="firebase",hy="10.14.1";/**
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
 */const La="[DEFAULT]",dy={[Ma]:"fire-core",[F_]:"fire-core-compat",[B_]:"fire-analytics",[U_]:"fire-analytics-compat",[$_]:"fire-app-check",[q_]:"fire-app-check-compat",[z_]:"fire-auth",[K_]:"fire-auth-compat",[G_]:"fire-rtdb",[W_]:"fire-data-connect",[H_]:"fire-rtdb-compat",[Q_]:"fire-fn",[J_]:"fire-fn-compat",[Y_]:"fire-iid",[X_]:"fire-iid-compat",[Z_]:"fire-fcm",[ey]:"fire-fcm-compat",[ty]:"fire-perf",[ny]:"fire-perf-compat",[ry]:"fire-rc",[sy]:"fire-rc-compat",[iy]:"fire-gcs",[oy]:"fire-gcs-compat",[ay]:"fire-fst",[cy]:"fire-fst-compat",[ly]:"fire-vertex","fire-js":"fire-js",[uy]:"fire-js-all"};/**
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
 */const Fi=new Map,fy=new Map,Fa=new Map;function Ou(r,e){try{r.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Pn(r){const e=r.name;if(Fa.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;Fa.set(e,r);for(const t of Fi.values())Ou(t,r);for(const t of fy.values())Ou(t,r);return!0}function fo(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Nt(r){return r.settings!==void 0}/**
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
 */const my={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new Cs("app","Firebase",my);/**
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
 */class py{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=hy;function Ud(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:La,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(t||(t=Vd()),!t)throw Xt.create("no-options");const i=Fi.get(s);if(i){if(ps(t,i.options)&&ps(n,i.config))return i;throw Xt.create("duplicate-app",{appName:s})}const o=new x_(s);for(const u of Fa.values())o.addComponent(u);const l=new py(t,n,o);return Fi.set(s,l),l}function Bd(r=La){const e=Fi.get(r);if(!e&&r===La&&Vd())return Ud();if(!e)throw Xt.create("no-app",{appName:r});return e}function _t(r,e,t){var n;let s=(n=dy[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(l.join(" "));return}Pn(new nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const gy="firebase-heartbeat-database",_y=1,gs="firebase-heartbeat-store";let fa=null;function qd(){return fa||(fa=V_(gy,_y,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(gs)}catch(t){console.warn(t)}}}}).catch(r=>{throw Xt.create("idb-open",{originalErrorMessage:r.message})})),fa}async function yy(r){try{const t=(await qd()).transaction(gs),n=await t.objectStore(gs).get($d(r));return await t.done,n}catch(e){if(e instanceof It)Dt.warn(e.message);else{const t=Xt.create("idb-get",{originalErrorMessage:e?.message});Dt.warn(t.message)}}}async function Mu(r,e){try{const n=(await qd()).transaction(gs,"readwrite");await n.objectStore(gs).put(e,$d(r)),await n.done}catch(t){if(t instanceof It)Dt.warn(t.message);else{const n=Xt.create("idb-set",{originalErrorMessage:t?.message});Dt.warn(n.message)}}}function $d(r){return`${r.name}!${r.options.appId}`}/**
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
 */const by=1024,vy=30*24*60*60*1e3;class xy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Iy(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=vy}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Dt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lu(),{heartbeatsToSend:n,unsentEntries:s}=wy(this._heartbeatsCache.heartbeats),i=Li(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Dt.warn(t),""}}}function Lu(){return new Date().toISOString().substring(0,10)}function wy(r,e=by){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Fu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Fu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Iy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Md()?u_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yy(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fu(r){return Li(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Ey(r){Pn(new nn("platform-logger",e=>new M_(e),"PRIVATE")),Pn(new nn("heartbeat",e=>new xy(e),"PRIVATE")),_t(Ma,ju,r),_t(Ma,ju,"esm2017"),_t("fire-js","")}Ey("");var Ty="firebase",Ay="10.14.1";/**
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
 */_t(Ty,Ay,"app");function zd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sy=zd,Kd=new Cs("auth","Firebase",zd());/**
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
 */const Ui=new El("@firebase/auth");function Ny(r,...e){Ui.logLevel<=re.WARN&&Ui.warn(`Auth (${Un}): ${r}`,...e)}function wi(r,...e){Ui.logLevel<=re.ERROR&&Ui.error(`Auth (${Un}): ${r}`,...e)}/**
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
 */function ft(r,...e){throw Al(r,...e)}function yt(r,...e){return Al(r,...e)}function Gd(r,e,t){const n=Object.assign(Object.assign({},Sy()),{[e]:t});return new Cs("auth","Firebase",n).create(e,{appName:r.name})}function Zt(r){return Gd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Al(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Kd.create(r,...e)}function Z(r,e,...t){if(!r)throw Al(e,...t)}function Rt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw wi(e),new Error(e)}function Vt(r,e){r||Rt(e)}/**
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
 */function Ua(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Ry(){return Uu()==="http:"||Uu()==="https:"}function Uu(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Py(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ry()||a_()||"connection"in navigator)?navigator.onLine:!0}function Cy(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ds{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vt(t>e,"Short delay should be less than long delay!"),this.isMobile=s_()||l_()}get(){return Py()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sl(r,e){Vt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ky={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dy=new Ds(3e4,6e4);function an(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Mt(r,e,t,n,s={}){return Hd(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const l=ks(Object.assign({key:r.config.apiKey},o)).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const d=Object.assign({method:e,headers:u},i);return o_()||(d.referrerPolicy="no-referrer"),Wd.fetch()(Qd(r,r.config.apiHost,t,l),d)})}async function Hd(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},ky),e);try{const s=new jy(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ai(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ai(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ai(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw ai(r,"user-disabled",o);const m=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Gd(r,m,d);ft(r,m)}}catch(s){if(s instanceof It)throw s;ft(r,"network-request-failed",{message:String(s)})}}async function mo(r,e,t,n,s={}){const i=await Mt(r,e,t,n,s);return"mfaPendingCredential"in i&&ft(r,"multi-factor-auth-required",{_serverResponse:i}),i}function Qd(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?Sl(r.config,s):`${r.config.apiScheme}://${s}`}function Vy(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(yt(this.auth,"network-request-failed")),Dy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ai(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=yt(r,e,n);return s.customData._tokenResponse=t,s}function Bu(r){return r!==void 0&&r.enterprise!==void 0}class Oy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Vy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function My(r,e){return Mt(r,"GET","/v2/recaptchaConfig",an(r,e))}/**
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
 */async function Ly(r,e){return Mt(r,"POST","/v1/accounts:delete",e)}async function Jd(r,e){return Mt(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ls(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fy(r,e=!1){const t=Ne(r),n=await t.getIdToken(e),s=Nl(n);Z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:n,authTime:ls(ma(s.auth_time)),issuedAtTime:ls(ma(s.iat)),expirationTime:ls(ma(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ma(r){return Number(r)*1e3}function Nl(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return wi("JWT malformed, contained fewer than 3 sections"),null;try{const s=kd(t);return s?JSON.parse(s):(wi("Failed to decode base64 JWT payload"),null)}catch(s){return wi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function qu(r){const e=Nl(r);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _s(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof It&&Uy(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Uy({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class By{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ba{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bi(r){var e;const t=r.auth,n=await r.getIdToken(),s=await _s(r,Jd(t,{idToken:n}));Z(s?.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yd(i.providerUserInfo):[],l=$y(r.providerData,o),u=r.isAnonymous,d=!(r.email&&i.passwordHash)&&!l?.length,m=u?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ba(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(r,g)}async function qy(r){const e=Ne(r);await Bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $y(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Yd(r){return r.map(e=>{var{providerId:t}=e,n=Il(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function zy(r,e){const t=await Hd(r,{},async()=>{const n=ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=Qd(r,s,"/v1/token",`key=${i}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Wd.fetch()(o,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ky(r,e){return Mt(r,"POST","/v2/accounts:revokeToken",an(r,e))}/**
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
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const t=qu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await zy(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new cr;return n&&(Z(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function qt(r,e){Z(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=Il(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new By(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ba(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await _s(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fy(this,e)}reload(){return qy(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Bi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(Zt(this.auth));const e=await this.getIdToken();return await _s(this,Ly(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,l,u,d,m;const g=(n=t.displayName)!==null&&n!==void 0?n:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,j=(l=t.tenantId)!==null&&l!==void 0?l:void 0,A=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,D=(d=t.createdAt)!==null&&d!==void 0?d:void 0,L=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:P,emailVerified:B,isAnonymous:k,providerData:M,stsTokenManager:y}=t;Z(P&&y,e,"internal-error");const p=cr.fromJSON(this.name,y);Z(typeof P=="string",e,"internal-error"),qt(g,e.name),qt(v,e.name),Z(typeof B=="boolean",e,"internal-error"),Z(typeof k=="boolean",e,"internal-error"),qt(T,e.name),qt(R,e.name),qt(j,e.name),qt(A,e.name),qt(D,e.name),qt(L,e.name);const b=new Pt({uid:P,auth:e,email:v,emailVerified:B,displayName:g,isAnonymous:k,photoURL:R,phoneNumber:T,tenantId:j,stsTokenManager:p,createdAt:D,lastLoginAt:L});return M&&Array.isArray(M)&&(b.providerData=M.map(I=>Object.assign({},I))),A&&(b._redirectEventId=A),b}static async _fromIdTokenResponse(e,t,n=!1){const s=new cr;s.updateFromServerResponse(t);const i=new Pt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Bi(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Yd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new cr;l.updateFromIdToken(n);const u=new Pt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ba(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
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
 */const $u=new Map;function Ct(r){Vt(r instanceof Function,"Expected a class definition");let e=$u.get(r);return e?(Vt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,$u.set(r,e),e)}/**
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
 */class Xd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xd.type="NONE";const zu=Xd;/**
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
 */function Ii(r,e,t){return`firebase:${r}:${e}:${t}`}class ur{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Ii(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ii("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ur(Ct(zu),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Ct(zu);const o=Ii(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(o);if(m){const g=Pt._fromJSON(e,m);d!==i&&(l=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ur(i,e,n):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new ur(i,e,n))}}/**
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
 */function Ku(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sf(e))return"Blackberry";if(of(e))return"Webos";if(ef(e))return"Safari";if((e.includes("chrome/")||tf(e))&&!e.includes("edge/"))return"Chrome";if(rf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function Zd(r=Re()){return/firefox\//i.test(r)}function ef(r=Re()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tf(r=Re()){return/crios\//i.test(r)}function nf(r=Re()){return/iemobile/i.test(r)}function rf(r=Re()){return/android/i.test(r)}function sf(r=Re()){return/blackberry/i.test(r)}function of(r=Re()){return/webos/i.test(r)}function Rl(r=Re()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Gy(r=Re()){var e;return Rl(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wy(){return c_()&&document.documentMode===10}function af(r=Re()){return Rl(r)||rf(r)||of(r)||sf(r)||/windows phone/i.test(r)||nf(r)}/**
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
 */function lf(r,e=[]){let t;switch(r){case"Browser":t=Ku(Re());break;case"Worker":t=`${Ku(Re())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Un}/${n}`}/**
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
 */class Hy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function Qy(r,e={}){return Mt(r,"GET","/v2/passwordPolicy",an(r,e))}/**
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
 */const Jy=6;class Yy{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Jy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Xy{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gu(this),this.idTokenSubscription=new Gu(this),this.beforeStateQueue=new Hy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ct(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Jd(this,{idToken:e}),n=await Pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&u?.user&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(Zt(this));const t=e?Ne(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qy(this),t=new Yy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Ky(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ct(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[Ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Ny(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Bn(r){return Ne(r)}class Gu{constructor(e){this.auth=e,this.observer=null,this.addObserver=p_(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let po={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zy(r){po=r}function cf(r){return po.loadJS(r)}function eb(){return po.recaptchaEnterpriseScript}function tb(){return po.gapiScript}function nb(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const rb="recaptcha-enterprise",sb="NO_RECAPTCHA";class ib{constructor(e){this.type=rb,this.auth=Bn(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{My(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Oy(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Bu(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(sb)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{n(this.auth).then(l=>{if(!t&&Bu(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=eb();u.length!==0&&(u+=l),cf(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Wu(r,e,t,n=!1){const s=new ib(r);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function qa(r,e,t,n){var s;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Wu(r,e,t,t==="getOobCode");return n(r,i)}else return n(r,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wu(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(i)})}/**
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
 */function ob(r,e){const t=fo(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ps(i,e??{}))return s;ft(s,"already-initialized")}return t.initialize({options:e})}function ab(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(Ct);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function lb(r,e,t){const n=Bn(r);Z(n._canInitEmulator,n,"emulator-config-failed"),Z(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=uf(e),{host:o,port:l}=cb(e),u=l===null?"":`:${l}`;n.config.emulator={url:`${i}//${o}${u}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ub()}function uf(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function cb(r){const e=uf(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Hu(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Hu(o)}}}function Hu(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ub(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Pl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function hb(r,e){return Mt(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function db(r,e){return mo(r,"POST","/v1/accounts:signInWithPassword",an(r,e))}async function fb(r,e){return Mt(r,"POST","/v1/accounts:sendOobCode",an(r,e))}async function mb(r,e){return fb(r,e)}/**
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
 */async function pb(r,e){return mo(r,"POST","/v1/accounts:signInWithEmailLink",an(r,e))}async function gb(r,e){return mo(r,"POST","/v1/accounts:signInWithEmailLink",an(r,e))}/**
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
 */class ys extends Pl{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ys(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ys(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qa(e,t,"signInWithPassword",db);case"emailLink":return pb(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qa(e,n,"signUpPassword",hb);case"emailLink":return gb(e,{idToken:t,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hr(r,e){return mo(r,"POST","/v1/accounts:signInWithIdp",an(r,e))}/**
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
 */const _b="http://localhost";class Cn extends Pl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=Il(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new Cn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return hr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,hr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hr(e,t)}buildRequest(){const e={requestUri:_b,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ks(t)}return e}}/**
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
 */function yb(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bb(r){const e=es(ts(r)).link,t=e?es(ts(e)).deep_link_id:null,n=es(ts(r)).deep_link_id;return(n?es(ts(n)).link:null)||n||t||e||r}class Cl{constructor(e){var t,n,s,i,o,l;const u=es(ts(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(n=u.oobCode)!==null&&n!==void 0?n:null,g=yb((s=u.mode)!==null&&s!==void 0?s:null);Z(d&&m&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=bb(e);try{return new Cl(t)}catch{return null}}}/**
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
 */class Sr{constructor(){this.providerId=Sr.PROVIDER_ID}static credential(e,t){return ys._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Cl.parseLink(t);return Z(n,"argument-error"),ys._fromEmailAndCode(e,n.code,n.tenantId)}}Sr.PROVIDER_ID="password";Sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vs extends hf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kt extends Vs{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends Vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Gt.credential(t,n)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class Wt extends Vs{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
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
 */class Ht extends Vs{constructor(){super("twitter.com")}static credential(e,t){return Cn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ht.credential(t,n)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */class fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Pt._fromIdTokenResponse(e,n,s),o=Qu(n);return new fr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Qu(n);return new fr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Qu(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class qi extends It{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,qi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new qi(e,t,n,s)}}function df(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qi._fromErrorAndOperation(r,i,e,n):i})}async function vb(r,e,t=!1){const n=await _s(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return fr._forOperation(r,"link",n)}/**
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
 */async function xb(r,e,t=!1){const{auth:n}=r;if(Nt(n.app))return Promise.reject(Zt(n));const s="reauthenticate";try{const i=await _s(r,df(n,s,e,r),t);Z(i.idToken,n,"internal-error");const o=Nl(i.idToken);Z(o,n,"internal-error");const{sub:l}=o;return Z(r.uid===l,n,"user-mismatch"),fr._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&ft(n,"user-mismatch"),i}}/**
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
 */async function ff(r,e,t=!1){if(Nt(r.app))return Promise.reject(Zt(r));const n="signIn",s=await df(r,n,e),i=await fr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function wb(r,e){return ff(Bn(r),e)}/**
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
 */async function Ib(r){const e=Bn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Eb(r,e,t){const n=Bn(r);await qa(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",mb)}function Tb(r,e,t){return Nt(r.app)?Promise.reject(Zt(r)):wb(Ne(r),Sr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Ib(r),n})}function Ab(r,e,t,n){return Ne(r).onIdTokenChanged(e,t,n)}function Sb(r,e,t){return Ne(r).beforeAuthStateChanged(e,t)}function Nb(r,e,t,n){return Ne(r).onAuthStateChanged(e,t,n)}function Rb(r){return Ne(r).signOut()}const $i="__sak";/**
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
 */class mf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($i,"1"),this.storage.removeItem($i),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Pb=1e3,Cb=10;class pf extends mf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=af(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);Wy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Cb):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pf.type="LOCAL";const kb=pf;/**
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
 */class gf extends mf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gf.type="SESSION";const _f=gf;/**
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
 */function Db(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new go(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(o).map(async d=>d(t.origin,i)),u=await Db(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}go.receivers=[];/**
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
 */function kl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Vb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=kl("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bt(){return window}function jb(r){bt().location.href=r}/**
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
 */function yf(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function Ob(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mb(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Lb(){return yf()?self:null}/**
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
 */const bf="firebaseLocalStorageDb",Fb=1,zi="firebaseLocalStorage",vf="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _o(r,e){return r.transaction([zi],e?"readwrite":"readonly").objectStore(zi)}function Ub(){const r=indexedDB.deleteDatabase(bf);return new js(r).toPromise()}function $a(){const r=indexedDB.open(bf,Fb);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(zi,{keyPath:vf})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(zi)?e(n):(n.close(),await Ub(),e(await $a()))})})}async function Ju(r,e,t){const n=_o(r,!0).put({[vf]:e,value:t});return new js(n).toPromise()}async function Bb(r,e){const t=_o(r,!1).get(e),n=await new js(t).toPromise();return n===void 0?null:n.value}function Yu(r,e){const t=_o(r,!0).delete(e);return new js(t).toPromise()}const qb=800,$b=3;class xf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $a(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>$b)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=go._getInstance(Lb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ob(),!this.activeServiceWorker)return;this.sender=new Vb(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $a();return await Ju(e,$i,"1"),await Yu(e,$i),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ju(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Bb(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_o(s,!1).getAll();return new js(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xf.type="LOCAL";const zb=xf;new Ds(3e4,6e4);/**
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
 */function Kb(r,e){return e?Ct(e):(Z(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Dl extends Pl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Gb(r){return ff(r.auth,new Dl(r),r.bypassAuthState)}function Wb(r){const{auth:e,user:t}=r;return Z(t,e,"internal-error"),xb(t,new Dl(r),r.bypassAuthState)}async function Hb(r){const{auth:e,user:t}=r;return Z(t,e,"internal-error"),vb(t,new Dl(r),r.bypassAuthState)}/**
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
 */class wf{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gb;case"linkViaPopup":case"linkViaRedirect":return Hb;case"reauthViaPopup":case"reauthViaRedirect":return Wb;default:ft(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qb=new Ds(2e3,1e4);class or extends wf{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qb.get())};e()}}or.currentPopupAction=null;/**
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
 */const Jb="pendingRedirect",Ei=new Map;class Yb extends wf{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ei.get(this.auth._key());if(!e){try{const n=await Xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ei.set(this.auth._key(),e)}return this.bypassAuthState||Ei.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xb(r,e){const t=tv(e),n=ev(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Zb(r,e){Ei.set(r._key(),e)}function ev(r){return Ct(r._redirectPersistence)}function tv(r){return Ii(Jb,r.config.apiKey,r.name)}async function nv(r,e,t=!1){if(Nt(r.app))return Promise.reject(Zt(r));const n=Bn(r),s=Kb(n,e),o=await new Yb(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const rv=10*60*1e3;class sv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!If(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(yt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xu(e))}saveEventToCache(e){this.cachedEventUids.add(Xu(e)),this.lastProcessedEventTime=Date.now()}}function Xu(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function If({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function iv(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return If(r);default:return!1}}/**
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
 */async function ov(r,e={}){return Mt(r,"GET","/v1/projects",e)}/**
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
 */const av=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lv=/^https?/;async function cv(r){if(r.config.emulator)return;const{authorizedDomains:e}=await ov(r);for(const t of e)try{if(uv(t))return}catch{}ft(r,"unauthorized-domain")}function uv(r){const e=Ua(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!lv.test(t))return!1;if(av.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const hv=new Ds(3e4,6e4);function Zu(){const r=bt().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function dv(r){return new Promise((e,t)=>{var n,s,i;function o(){Zu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zu(),t(yt(r,"network-request-failed"))},timeout:hv.get()})}if(!((s=(n=bt().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=bt().gapi)===null||i===void 0)&&i.load)o();else{const l=nb("iframefcb");return bt()[l]=()=>{gapi.load?o():t(yt(r,"network-request-failed"))},cf(`${tb()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ti=null,e})}let Ti=null;function fv(r){return Ti=Ti||dv(r),Ti}/**
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
 */const mv=new Ds(5e3,15e3),pv="__/auth/iframe",gv="emulator/auth/iframe",_v={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bv(r){const e=r.config;Z(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Sl(e,gv):`https://${r.config.authDomain}/${pv}`,n={apiKey:e.apiKey,appName:r.name,v:Un},s=yv.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ks(n).slice(1)}`}async function vv(r){const e=await fv(r),t=bt().gapi;return Z(t,r,"internal-error"),e.open({where:document.body,url:bv(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_v,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=yt(r,"network-request-failed"),l=bt().setTimeout(()=>{i(o)},mv.get());function u(){bt().clearTimeout(l),s(n)}n.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const xv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wv=500,Iv=600,Ev="_blank",Tv="http://localhost";class eh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Av(r,e,t,n=wv,s=Iv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const u=Object.assign(Object.assign({},xv),{width:n.toString(),height:s.toString(),top:i,left:o}),d=Re().toLowerCase();t&&(l=tf(d)?Ev:t),Zd(d)&&(e=e||Tv,u.scrollbars="yes");const m=Object.entries(u).reduce((v,[T,R])=>`${v}${T}=${R},`,"");if(Gy(d)&&l!=="_self")return Sv(e||"",l),new eh(null);const g=window.open(e||"",l,m);Z(g,r,"popup-blocked");try{g.focus()}catch{}return new eh(g)}function Sv(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Nv="__/auth/handler",Rv="emulator/auth/handler",Pv=encodeURIComponent("fac");async function th(r,e,t,n,s,i){Z(r.config.authDomain,r,"auth-domain-config-required"),Z(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Un,eventId:s};if(e instanceof hf){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",m_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))o[m]=g}if(e instanceof Vs){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(o.scopes=m.join(","))}r.tenantId&&(o.tid=r.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await r._getAppCheckToken(),d=u?`#${Pv}=${encodeURIComponent(u)}`:"";return`${Cv(r)}?${ks(l).slice(1)}${d}`}function Cv({config:r}){return r.emulator?Sl(r,Rv):`https://${r.authDomain}/${Nv}`}/**
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
 */const pa="webStorageSupport";class kv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_f,this._completeRedirectFn=nv,this._overrideRedirectResult=Zb}async _openPopup(e,t,n,s){var i;Vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await th(e,t,n,Ua(),s);return Av(e,o,kl())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await th(e,t,n,Ua(),s);return jb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Vt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await vv(e),n=new sv(e);return t.register("authEvent",s=>(Z(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pa,{type:pa},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[pa];o!==void 0&&t(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return af()||ef()||Rl()}}const Dv=kv;var nh="@firebase/auth",rh="1.7.9";/**
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
 */class Vv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jv(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ov(r){Pn(new nn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lf(r)},d=new Xy(n,s,i,u);return ab(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Pn(new nn("auth-internal",e=>{const t=Bn(e.getProvider("auth").getImmediate());return(n=>new Vv(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(nh,rh,jv(r)),_t(nh,rh,"esm2017")}/**
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
 */const Mv=5*60,Lv=jd("authIdTokenMaxAge")||Mv;let sh=null;const Fv=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Lv)return;const s=t?.token;sh!==s&&(sh=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Uv(r=Bd()){const e=fo(r,"auth");if(e.isInitialized())return e.getImmediate();const t=ob(r,{popupRedirectResolver:Dv,persistence:[zb,kb,_f]}),n=jd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Fv(i.toString());Sb(t,o,()=>o(t.currentUser)),Ab(t,l=>o(l))}}const s=Dd("auth");return s&&lb(t,`http://${s}`),t}function Bv(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Zy({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=yt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Bv().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ov("Browser");var ih=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nn,Ef;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,p){function b(){}b.prototype=p.prototype,y.D=p.prototype,y.prototype=new b,y.prototype.constructor=y,y.C=function(I,w,E){for(var x=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)x[Ee-2]=arguments[Ee];return p.prototype[w].apply(I,x)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,p,b){b||(b=0);var I=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)I[w]=p.charCodeAt(b++)|p.charCodeAt(b++)<<8|p.charCodeAt(b++)<<16|p.charCodeAt(b++)<<24;else for(w=0;16>w;++w)I[w]=p[b++]|p[b++]<<8|p[b++]<<16|p[b++]<<24;p=y.g[0],b=y.g[1],w=y.g[2];var E=y.g[3],x=p+(E^b&(w^E))+I[0]+3614090360&4294967295;p=b+(x<<7&4294967295|x>>>25),x=E+(w^p&(b^w))+I[1]+3905402710&4294967295,E=p+(x<<12&4294967295|x>>>20),x=w+(b^E&(p^b))+I[2]+606105819&4294967295,w=E+(x<<17&4294967295|x>>>15),x=b+(p^w&(E^p))+I[3]+3250441966&4294967295,b=w+(x<<22&4294967295|x>>>10),x=p+(E^b&(w^E))+I[4]+4118548399&4294967295,p=b+(x<<7&4294967295|x>>>25),x=E+(w^p&(b^w))+I[5]+1200080426&4294967295,E=p+(x<<12&4294967295|x>>>20),x=w+(b^E&(p^b))+I[6]+2821735955&4294967295,w=E+(x<<17&4294967295|x>>>15),x=b+(p^w&(E^p))+I[7]+4249261313&4294967295,b=w+(x<<22&4294967295|x>>>10),x=p+(E^b&(w^E))+I[8]+1770035416&4294967295,p=b+(x<<7&4294967295|x>>>25),x=E+(w^p&(b^w))+I[9]+2336552879&4294967295,E=p+(x<<12&4294967295|x>>>20),x=w+(b^E&(p^b))+I[10]+4294925233&4294967295,w=E+(x<<17&4294967295|x>>>15),x=b+(p^w&(E^p))+I[11]+2304563134&4294967295,b=w+(x<<22&4294967295|x>>>10),x=p+(E^b&(w^E))+I[12]+1804603682&4294967295,p=b+(x<<7&4294967295|x>>>25),x=E+(w^p&(b^w))+I[13]+4254626195&4294967295,E=p+(x<<12&4294967295|x>>>20),x=w+(b^E&(p^b))+I[14]+2792965006&4294967295,w=E+(x<<17&4294967295|x>>>15),x=b+(p^w&(E^p))+I[15]+1236535329&4294967295,b=w+(x<<22&4294967295|x>>>10),x=p+(w^E&(b^w))+I[1]+4129170786&4294967295,p=b+(x<<5&4294967295|x>>>27),x=E+(b^w&(p^b))+I[6]+3225465664&4294967295,E=p+(x<<9&4294967295|x>>>23),x=w+(p^b&(E^p))+I[11]+643717713&4294967295,w=E+(x<<14&4294967295|x>>>18),x=b+(E^p&(w^E))+I[0]+3921069994&4294967295,b=w+(x<<20&4294967295|x>>>12),x=p+(w^E&(b^w))+I[5]+3593408605&4294967295,p=b+(x<<5&4294967295|x>>>27),x=E+(b^w&(p^b))+I[10]+38016083&4294967295,E=p+(x<<9&4294967295|x>>>23),x=w+(p^b&(E^p))+I[15]+3634488961&4294967295,w=E+(x<<14&4294967295|x>>>18),x=b+(E^p&(w^E))+I[4]+3889429448&4294967295,b=w+(x<<20&4294967295|x>>>12),x=p+(w^E&(b^w))+I[9]+568446438&4294967295,p=b+(x<<5&4294967295|x>>>27),x=E+(b^w&(p^b))+I[14]+3275163606&4294967295,E=p+(x<<9&4294967295|x>>>23),x=w+(p^b&(E^p))+I[3]+4107603335&4294967295,w=E+(x<<14&4294967295|x>>>18),x=b+(E^p&(w^E))+I[8]+1163531501&4294967295,b=w+(x<<20&4294967295|x>>>12),x=p+(w^E&(b^w))+I[13]+2850285829&4294967295,p=b+(x<<5&4294967295|x>>>27),x=E+(b^w&(p^b))+I[2]+4243563512&4294967295,E=p+(x<<9&4294967295|x>>>23),x=w+(p^b&(E^p))+I[7]+1735328473&4294967295,w=E+(x<<14&4294967295|x>>>18),x=b+(E^p&(w^E))+I[12]+2368359562&4294967295,b=w+(x<<20&4294967295|x>>>12),x=p+(b^w^E)+I[5]+4294588738&4294967295,p=b+(x<<4&4294967295|x>>>28),x=E+(p^b^w)+I[8]+2272392833&4294967295,E=p+(x<<11&4294967295|x>>>21),x=w+(E^p^b)+I[11]+1839030562&4294967295,w=E+(x<<16&4294967295|x>>>16),x=b+(w^E^p)+I[14]+4259657740&4294967295,b=w+(x<<23&4294967295|x>>>9),x=p+(b^w^E)+I[1]+2763975236&4294967295,p=b+(x<<4&4294967295|x>>>28),x=E+(p^b^w)+I[4]+1272893353&4294967295,E=p+(x<<11&4294967295|x>>>21),x=w+(E^p^b)+I[7]+4139469664&4294967295,w=E+(x<<16&4294967295|x>>>16),x=b+(w^E^p)+I[10]+3200236656&4294967295,b=w+(x<<23&4294967295|x>>>9),x=p+(b^w^E)+I[13]+681279174&4294967295,p=b+(x<<4&4294967295|x>>>28),x=E+(p^b^w)+I[0]+3936430074&4294967295,E=p+(x<<11&4294967295|x>>>21),x=w+(E^p^b)+I[3]+3572445317&4294967295,w=E+(x<<16&4294967295|x>>>16),x=b+(w^E^p)+I[6]+76029189&4294967295,b=w+(x<<23&4294967295|x>>>9),x=p+(b^w^E)+I[9]+3654602809&4294967295,p=b+(x<<4&4294967295|x>>>28),x=E+(p^b^w)+I[12]+3873151461&4294967295,E=p+(x<<11&4294967295|x>>>21),x=w+(E^p^b)+I[15]+530742520&4294967295,w=E+(x<<16&4294967295|x>>>16),x=b+(w^E^p)+I[2]+3299628645&4294967295,b=w+(x<<23&4294967295|x>>>9),x=p+(w^(b|~E))+I[0]+4096336452&4294967295,p=b+(x<<6&4294967295|x>>>26),x=E+(b^(p|~w))+I[7]+1126891415&4294967295,E=p+(x<<10&4294967295|x>>>22),x=w+(p^(E|~b))+I[14]+2878612391&4294967295,w=E+(x<<15&4294967295|x>>>17),x=b+(E^(w|~p))+I[5]+4237533241&4294967295,b=w+(x<<21&4294967295|x>>>11),x=p+(w^(b|~E))+I[12]+1700485571&4294967295,p=b+(x<<6&4294967295|x>>>26),x=E+(b^(p|~w))+I[3]+2399980690&4294967295,E=p+(x<<10&4294967295|x>>>22),x=w+(p^(E|~b))+I[10]+4293915773&4294967295,w=E+(x<<15&4294967295|x>>>17),x=b+(E^(w|~p))+I[1]+2240044497&4294967295,b=w+(x<<21&4294967295|x>>>11),x=p+(w^(b|~E))+I[8]+1873313359&4294967295,p=b+(x<<6&4294967295|x>>>26),x=E+(b^(p|~w))+I[15]+4264355552&4294967295,E=p+(x<<10&4294967295|x>>>22),x=w+(p^(E|~b))+I[6]+2734768916&4294967295,w=E+(x<<15&4294967295|x>>>17),x=b+(E^(w|~p))+I[13]+1309151649&4294967295,b=w+(x<<21&4294967295|x>>>11),x=p+(w^(b|~E))+I[4]+4149444226&4294967295,p=b+(x<<6&4294967295|x>>>26),x=E+(b^(p|~w))+I[11]+3174756917&4294967295,E=p+(x<<10&4294967295|x>>>22),x=w+(p^(E|~b))+I[2]+718787259&4294967295,w=E+(x<<15&4294967295|x>>>17),x=b+(E^(w|~p))+I[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(w+(x<<21&4294967295|x>>>11))&4294967295,y.g[2]=y.g[2]+w&4294967295,y.g[3]=y.g[3]+E&4294967295}n.prototype.u=function(y,p){p===void 0&&(p=y.length);for(var b=p-this.blockSize,I=this.B,w=this.h,E=0;E<p;){if(w==0)for(;E<=b;)s(this,y,E),E+=this.blockSize;if(typeof y=="string"){for(;E<p;)if(I[w++]=y.charCodeAt(E++),w==this.blockSize){s(this,I),w=0;break}}else for(;E<p;)if(I[w++]=y[E++],w==this.blockSize){s(this,I),w=0;break}}this.h=w,this.o+=p},n.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;var b=8*this.o;for(p=y.length-8;p<y.length;++p)y[p]=b&255,b/=256;for(this.u(y),y=Array(16),p=b=0;4>p;++p)for(var I=0;32>I;I+=8)y[b++]=this.g[p]>>>I&255;return y};function i(y,p){var b=l;return Object.prototype.hasOwnProperty.call(b,y)?b[y]:b[y]=p(y)}function o(y,p){this.h=p;for(var b=[],I=!0,w=y.length-1;0<=w;w--){var E=y[w]|0;I&&E==p||(b[w]=E,I=!1)}this.g=b}var l={};function u(y){return-128<=y&&128>y?i(y,function(p){return new o([p|0],0>p?-1:0)}):new o([y|0],0>y?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return g;if(0>y)return A(d(-y));for(var p=[],b=1,I=0;y>=b;I++)p[I]=y/b|0,b*=4294967296;return new o(p,0)}function m(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return A(m(y.substring(1),p));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=d(Math.pow(p,8)),I=g,w=0;w<y.length;w+=8){var E=Math.min(8,y.length-w),x=parseInt(y.substring(w,w+E),p);8>E?(E=d(Math.pow(p,E)),I=I.j(E).add(d(x))):(I=I.j(b),I=I.add(d(x)))}return I}var g=u(0),v=u(1),T=u(16777216);r=o.prototype,r.m=function(){if(j(this))return-A(this).m();for(var y=0,p=1,b=0;b<this.g.length;b++){var I=this.i(b);y+=(0<=I?I:4294967296+I)*p,p*=4294967296}return y},r.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R(this))return"0";if(j(this))return"-"+A(this).toString(y);for(var p=d(Math.pow(y,6)),b=this,I="";;){var w=B(b,p).g;b=D(b,w.j(p));var E=((0<b.g.length?b.g[0]:b.h)>>>0).toString(y);if(b=w,R(b))return E+I;for(;6>E.length;)E="0"+E;I=E+I}},r.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function R(y){if(y.h!=0)return!1;for(var p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function j(y){return y.h==-1}r.l=function(y){return y=D(this,y),j(y)?-1:R(y)?0:1};function A(y){for(var p=y.g.length,b=[],I=0;I<p;I++)b[I]=~y.g[I];return new o(b,~y.h).add(v)}r.abs=function(){return j(this)?A(this):this},r.add=function(y){for(var p=Math.max(this.g.length,y.g.length),b=[],I=0,w=0;w<=p;w++){var E=I+(this.i(w)&65535)+(y.i(w)&65535),x=(E>>>16)+(this.i(w)>>>16)+(y.i(w)>>>16);I=x>>>16,E&=65535,x&=65535,b[w]=x<<16|E}return new o(b,b[b.length-1]&-2147483648?-1:0)};function D(y,p){return y.add(A(p))}r.j=function(y){if(R(this)||R(y))return g;if(j(this))return j(y)?A(this).j(A(y)):A(A(this).j(y));if(j(y))return A(this.j(A(y)));if(0>this.l(T)&&0>y.l(T))return d(this.m()*y.m());for(var p=this.g.length+y.g.length,b=[],I=0;I<2*p;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(var w=0;w<y.g.length;w++){var E=this.i(I)>>>16,x=this.i(I)&65535,Ee=y.i(w)>>>16,lt=y.i(w)&65535;b[2*I+2*w]+=x*lt,L(b,2*I+2*w),b[2*I+2*w+1]+=E*lt,L(b,2*I+2*w+1),b[2*I+2*w+1]+=x*Ee,L(b,2*I+2*w+1),b[2*I+2*w+2]+=E*Ee,L(b,2*I+2*w+2)}for(I=0;I<p;I++)b[I]=b[2*I+1]<<16|b[2*I];for(I=p;I<2*p;I++)b[I]=0;return new o(b,0)};function L(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function P(y,p){this.g=y,this.h=p}function B(y,p){if(R(p))throw Error("division by zero");if(R(y))return new P(g,g);if(j(y))return p=B(A(y),p),new P(A(p.g),A(p.h));if(j(p))return p=B(y,A(p)),new P(A(p.g),p.h);if(30<y.g.length){if(j(y)||j(p))throw Error("slowDivide_ only works with positive integers.");for(var b=v,I=p;0>=I.l(y);)b=k(b),I=k(I);var w=M(b,1),E=M(I,1);for(I=M(I,2),b=M(b,2);!R(I);){var x=E.add(I);0>=x.l(y)&&(w=w.add(b),E=x),I=M(I,1),b=M(b,1)}return p=D(y,w.j(p)),new P(w,p)}for(w=g;0<=y.l(p);){for(b=Math.max(1,Math.floor(y.m()/p.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),E=d(b),x=E.j(p);j(x)||0<x.l(y);)b-=I,E=d(b),x=E.j(p);R(E)&&(E=v),w=w.add(E),y=D(y,x)}return new P(w,y)}r.A=function(y){return B(this,y).h},r.and=function(y){for(var p=Math.max(this.g.length,y.g.length),b=[],I=0;I<p;I++)b[I]=this.i(I)&y.i(I);return new o(b,this.h&y.h)},r.or=function(y){for(var p=Math.max(this.g.length,y.g.length),b=[],I=0;I<p;I++)b[I]=this.i(I)|y.i(I);return new o(b,this.h|y.h)},r.xor=function(y){for(var p=Math.max(this.g.length,y.g.length),b=[],I=0;I<p;I++)b[I]=this.i(I)^y.i(I);return new o(b,this.h^y.h)};function k(y){for(var p=y.g.length+1,b=[],I=0;I<p;I++)b[I]=y.i(I)<<1|y.i(I-1)>>>31;return new o(b,y.h)}function M(y,p){var b=p>>5;p%=32;for(var I=y.g.length-b,w=[],E=0;E<I;E++)w[E]=0<p?y.i(E+b)>>>p|y.i(E+b+1)<<32-p:y.i(E+b);return new o(w,y.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Ef=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,Nn=o}).apply(typeof ih<"u"?ih:typeof self<"u"?self:typeof window<"u"?window:{});var li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tf,ns,Af,Ai,za,Sf,Nf,Rf;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof li=="object"&&li];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(a,h){if(h)e:{var f=n;a=a.split(".");for(var _=0;_<a.length-1;_++){var S=a[_];if(!(S in f))break e;f=f[S]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,S={next:function(){if(!_&&f<a.length){var C=f++;return{value:h(C,a[C]),done:!1}}return _=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function m(a,h,f){return a.call.apply(a.bind,arguments)}function g(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,_),a.apply(h,S)}}return function(){return a.apply(h,arguments)}}function v(a,h,f){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,v.apply(null,arguments)}function T(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,S,C){for(var q=Array(arguments.length-2),me=2;me<arguments.length;me++)q[me-2]=arguments[me];return h.prototype[S].apply(_,q)}}function j(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function A(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(u(_)){const S=a.length||0,C=_.length||0;a.length=S+C;for(let q=0;q<C;q++)a[S+q]=_[q]}else a.push(_)}}class D{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){return/^[\s\xa0]*$/.test(a)}function P(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var k=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function M(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function y(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function p(a){const h={};for(const f in a)h[f]=a[f];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,_;for(let S=1;S<arguments.length;S++){_=arguments[S];for(f in _)a[f]=_[f];for(let C=0;C<b.length;C++)f=b[C],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function w(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function E(a){l.setTimeout(()=>{throw a},0)}function x(){var a=ie;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ee{constructor(){this.h=this.g=null}add(h,f){const _=lt.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var lt=new D(()=>new K,a=>a.reset());class K{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,ee=!1,ie=new Ee,De=()=>{const a=l.Promise.resolve(void 0);Q=()=>{a.then(Tt)}};var Tt=()=>{for(var a;a=x();){try{a.h.call(a.g)}catch(f){E(f)}var h=lt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ee=!1};function U(){this.s=this.s,this.C=this.C}U.prototype.s=!1,U.prototype.ma=function(){this.s||(this.s=!0,this.N())},U.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var X=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function ae(a,h){if(W.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(k){e:{try{B(h.nodeName);var S=!0;break e}catch{}S=!1}S||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:be[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ae.aa.h.call(this)}}R(ae,W);var be={2:"touch",3:"pen",4:"mouse"};ae.prototype.h=function(){ae.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),fn=0;function ze(a,h,f,_,S){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=S,this.key=++fn,this.da=this.fa=!1}function Ze(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function mt(a){this.src=a,this.g={},this.h=0}mt.prototype.add=function(a,h,f,_,S){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var q=le(a,h,_,S);return-1<q?(h=a[q],f||(h.fa=!1)):(h=new ze(h,this.src,C,!!_,S),h.fa=f,a.push(h)),h};function it(a,h){var f=h.type;if(f in a.g){var _=a.g[f],S=Array.prototype.indexOf.call(_,h,void 0),C;(C=0<=S)&&Array.prototype.splice.call(_,S,1),C&&(Ze(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function le(a,h,f,_){for(var S=0;S<a.length;++S){var C=a[S];if(!C.da&&C.listener==h&&C.capture==!!f&&C.ha==_)return S}return-1}var Vr="closure_lm_"+(1e6*Math.random()|0),Kn={};function Nc(a,h,f,_,S){if(Array.isArray(h)){for(var C=0;C<h.length;C++)Nc(a,h[C],f,_,S);return null}return f=Cc(f),a&&a[fe]?a.K(h,f,d(_)?!!_.capture:!1,S):Bp(a,h,f,!1,_,S)}function Bp(a,h,f,_,S,C){if(!h)throw Error("Invalid event type");var q=d(S)?!!S.capture:!!S,me=qo(a);if(me||(a[Vr]=me=new mt(a)),f=me.add(h,f,_,q,C),f.proxy)return f;if(_=qp(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)X||(S=q),S===void 0&&(S=!1),a.addEventListener(h.toString(),_,S);else if(a.attachEvent)a.attachEvent(Pc(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function qp(){function a(f){return h.call(a.src,a.listener,f)}const h=$p;return a}function Rc(a,h,f,_,S){if(Array.isArray(h))for(var C=0;C<h.length;C++)Rc(a,h[C],f,_,S);else _=d(_)?!!_.capture:!!_,f=Cc(f),a&&a[fe]?(a=a.i,h=String(h).toString(),h in a.g&&(C=a.g[h],f=le(C,f,_,S),-1<f&&(Ze(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete a.g[h],a.h--)))):a&&(a=qo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=le(h,f,_,S)),(f=-1<a?h[a]:null)&&Bo(f))}function Bo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[fe])it(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(Pc(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=qo(h))?(it(f,a),f.h==0&&(f.src=null,h[Vr]=null)):Ze(a)}}}function Pc(a){return a in Kn?Kn[a]:Kn[a]="on"+a}function $p(a,h){if(a.da)a=!0;else{h=new ae(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&Bo(a),a=f.call(_,h)}return a}function qo(a){return a=a[Vr],a instanceof mt?a:null}var $o="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cc(a){return typeof a=="function"?a:(a[$o]||(a[$o]=function(h){return a.handleEvent(h)}),a[$o])}function Oe(){U.call(this),this.i=new mt(this),this.M=this,this.F=null}R(Oe,U),Oe.prototype[fe]=!0,Oe.prototype.removeEventListener=function(a,h,f,_){Rc(this,a,h,f,_)};function Ke(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new W(h,a);else if(h instanceof W)h.target=h.target||a;else{var S=h;h=new W(_,a),I(h,S)}if(S=!0,f)for(var C=f.length-1;0<=C;C--){var q=h.g=f[C];S=Ks(q,_,!0,h)&&S}if(q=h.g=a,S=Ks(q,_,!0,h)&&S,S=Ks(q,_,!1,h)&&S,f)for(C=0;C<f.length;C++)q=h.g=f[C],S=Ks(q,_,!1,h)&&S}Oe.prototype.N=function(){if(Oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)Ze(f[_]);delete a.g[h],a.h--}}this.F=null},Oe.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},Oe.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function Ks(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var S=!0,C=0;C<h.length;++C){var q=h[C];if(q&&!q.da&&q.capture==f){var me=q.listener,Ve=q.ha||q.src;q.fa&&it(a.i,q),S=me.call(Ve,_)!==!1&&S}}return S&&!_.defaultPrevented}function kc(a,h,f){if(typeof a=="function")f&&(a=v(a,f));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Dc(a){a.g=kc(()=>{a.g=null,a.i&&(a.i=!1,Dc(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class zp extends U{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Dc(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(a){U.call(this),this.h=a,this.g={}}R(jr,U);var Vc=[];function jc(a){M(a.g,function(h,f){this.g.hasOwnProperty(f)&&Bo(h)},a),a.g={}}jr.prototype.N=function(){jr.aa.N.call(this),jc(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zo=l.JSON.stringify,Kp=l.JSON.parse,Gp=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ko(){}Ko.prototype.h=null;function Oc(a){return a.h||(a.h=a.i())}function Mc(){}var Or={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Go(){W.call(this,"d")}R(Go,W);function Wo(){W.call(this,"c")}R(Wo,W);var mn={},Lc=null;function Gs(){return Lc=Lc||new Oe}mn.La="serverreachability";function Fc(a){W.call(this,mn.La,a)}R(Fc,W);function Mr(a){const h=Gs();Ke(h,new Fc(h))}mn.STAT_EVENT="statevent";function Uc(a,h){W.call(this,mn.STAT_EVENT,a),this.stat=h}R(Uc,W);function Ge(a){const h=Gs();Ke(h,new Uc(h,a))}mn.Ma="timingevent";function Bc(a,h){W.call(this,mn.Ma,a),this.size=h}R(Bc,W);function Lr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Fr(){this.g=!0}Fr.prototype.xa=function(){this.g=!1};function Wp(a,h,f,_,S,C){a.info(function(){if(a.g)if(C)for(var q="",me=C.split("&"),Ve=0;Ve<me.length;Ve++){var ce=me[Ve].split("=");if(1<ce.length){var Me=ce[0];ce=ce[1];var Le=Me.split("_");q=2<=Le.length&&Le[1]=="type"?q+(Me+"="+ce+"&"):q+(Me+"=redacted&")}}else q=null;else q=C;return"XMLHTTP REQ ("+_+") [attempt "+S+"]: "+h+`
`+f+`
`+q})}function Hp(a,h,f,_,S,C,q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+S+"]: "+h+`
`+f+`
`+C+" "+q})}function Gn(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Jp(a,f)+(_?" "+_:"")})}function Qp(a,h){a.info(function(){return"TIMEOUT: "+h})}Fr.prototype.info=function(){};function Jp(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var S=_[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var q=1;q<S.length;q++)S[q]=""}}}}return zo(f)}catch{return h}}var Ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ho;function Hs(){}R(Hs,Ko),Hs.prototype.g=function(){return new XMLHttpRequest},Hs.prototype.i=function(){return{}},Ho=new Hs;function Ft(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $c}function $c(){this.i=null,this.g="",this.h=!1}var zc={},Qo={};function Jo(a,h,f){a.L=1,a.v=Xs(At(h)),a.m=f,a.P=!0,Kc(a,null)}function Kc(a,h){a.F=Date.now(),Qs(a),a.A=At(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),iu(f.i,"t",_),a.C=0,f=a.j.J,a.h=new $c,a.g=Iu(a.j,f?h:null,!a.m),0<a.O&&(a.M=new zp(v(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Vc[0]=S.toString()),S=Vc);for(var C=0;C<S.length;C++){var q=Nc(f,S[C],_||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?p(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Mr(),Wp(a.i,a.u,a.A,a.l,a.R,a.m)}Ft.prototype.ca=function(a){a=a.target;const h=this.M;h&&St(a)==3?h.j():this.Y(a)},Ft.prototype.Y=function(a){try{if(a==this.g)e:{const Le=St(this.g);var h=this.g.Ba();const Qn=this.g.Z();if(!(3>Le)&&(Le!=3||this.g&&(this.h.h||this.g.oa()||du(this.g)))){this.J||Le!=4||h==7||(h==8||0>=Qn?Mr(3):Mr(2)),Yo(this);var f=this.g.Z();this.X=f;t:if(Gc(this)){var _=du(this.g);a="";var S=_.length,C=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),Ur(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<S;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(C&&h==S-1)});_.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,Hp(this.i,this.u,this.A,this.l,this.R,Le,f),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Ve=this.g;if((me=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(me)){var ce=me;break t}}ce=null}if(f=ce)Gn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xo(this,f);else{this.o=!1,this.s=3,Ge(12),pn(this),Ur(this);break e}}if(this.P){f=!0;let ct;for(;!this.J&&this.C<q.length;)if(ct=Yp(this,q),ct==Qo){Le==4&&(this.s=4,Ge(14),f=!1),Gn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==zc){this.s=4,Ge(15),Gn(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else Gn(this.i,this.l,ct,null),Xo(this,ct);if(Gc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Le!=4||q.length!=0||this.h.h||(this.s=1,Ge(16),f=!1),this.o=this.o&&f,!f)Gn(this.i,this.l,q,"[Invalid Chunked Response]"),pn(this),Ur(this);else if(0<q.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),sa(Me),Me.M=!0,Ge(11))}}else Gn(this.i,this.l,q,null),Xo(this,q);Le==4&&pn(this),this.o&&!this.J&&(Le==4?bu(this.j,this):(this.o=!1,Qs(this)))}else mg(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,Ge(12)):(this.s=0,Ge(13)),pn(this),Ur(this)}}}catch{}finally{}};function Gc(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Yp(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?Qo:(f=Number(h.substring(f,_)),isNaN(f)?zc:(_+=1,_+f>h.length?Qo:(h=h.slice(_,_+f),a.C=_+f,h)))}Ft.prototype.cancel=function(){this.J=!0,pn(this)};function Qs(a){a.S=Date.now()+a.I,Wc(a,a.I)}function Wc(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Lr(v(a.ba,a),h)}function Yo(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Ft.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Qp(this.i,this.A),this.L!=2&&(Mr(),Ge(17)),pn(this),this.s=2,Ur(this)):Wc(this,this.S-a)};function Ur(a){a.j.G==0||a.J||bu(a.j,a)}function pn(a){Yo(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,jc(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Xo(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Zo(f.h,a))){if(!a.K&&Zo(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var S=_;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)si(f),ni(f);else break e;ra(f),Ge(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Lr(v(f.Za,f),6e3));if(1>=Jc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else _n(f,11)}else if((a.K||f.g==a)&&si(f),!L(h))for(S=f.Da.g.parse(h),h=0;h<S.length;h++){let ce=S[h];if(f.T=ce[0],ce=ce[1],f.G==2)if(ce[0]=="c"){f.K=ce[1],f.ia=ce[2];const Me=ce[3];Me!=null&&(f.la=Me,f.j.info("VER="+f.la));const Le=ce[4];Le!=null&&(f.Aa=Le,f.j.info("SVER="+f.Aa));const Qn=ce[5];Qn!=null&&typeof Qn=="number"&&0<Qn&&(_=1.5*Qn,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const ct=a.g;if(ct){const oi=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oi){var C=_.h;C.g||oi.indexOf("spdy")==-1&&oi.indexOf("quic")==-1&&oi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ea(C,C.h),C.h=null))}if(_.D){const ia=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;ia&&(_.ya=ia,ge(_.I,_.D,ia))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var q=a;if(_.qa=wu(_,_.J?_.ia:null,_.W),q.K){Yc(_.h,q);var me=q,Ve=_.L;Ve&&(me.I=Ve),me.B&&(Yo(me),Qs(me)),_.g=q}else _u(_);0<f.i.length&&ri(f)}else ce[0]!="stop"&&ce[0]!="close"||_n(f,7);else f.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?_n(f,7):na(f):ce[0]!="noop"&&f.l&&f.l.ta(ce),f.v=0)}}Mr(4)}catch{}}var Xp=class{constructor(a,h){this.g=a,this.map=h}};function Hc(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jc(a){return a.h?1:a.g?a.g.size:0}function Zo(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ea(a,h){a.g?a.g.add(h):a.h=h}function Yc(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Hc.prototype.cancel=function(){if(this.i=Xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return j(a.i)}function Zp(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function eg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function Zc(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=eg(a),_=Zp(a),S=_.length,C=0;C<S;C++)h.call(void 0,_[C],f&&f[C],a)}var eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tg(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),S=null;if(0<=_){var C=a[f].substring(0,_);S=a[f].substring(_+1)}else C=a[f];h(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function gn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gn){this.h=a.h,Js(this,a.j),this.o=a.o,this.g=a.g,Ys(this,a.s),this.l=a.l;var h=a.i,f=new $r;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),tu(this,f),this.m=a.m}else a&&(h=String(a).match(eu))?(this.h=!1,Js(this,h[1]||"",!0),this.o=Br(h[2]||""),this.g=Br(h[3]||"",!0),Ys(this,h[4]),this.l=Br(h[5]||"",!0),tu(this,h[6]||"",!0),this.m=Br(h[7]||"")):(this.h=!1,this.i=new $r(null,this.h))}gn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(qr(h,nu,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(qr(h,nu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(qr(f,f.charAt(0)=="/"?sg:rg,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",qr(f,og)),a.join("")};function At(a){return new gn(a)}function Js(a,h,f){a.j=f?Br(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ys(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function tu(a,h,f){h instanceof $r?(a.i=h,ag(a.i,a.h)):(f||(h=qr(h,ig)),a.i=new $r(h,a.h))}function ge(a,h,f){a.i.set(h,f)}function Xs(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Br(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function qr(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,ng),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ng(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nu=/[#\/\?@]/g,rg=/[#\?:]/g,sg=/[#\?]/g,ig=/[#\?@]/g,og=/#/g;function $r(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ut(a){a.g||(a.g=new Map,a.h=0,a.i&&tg(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}r=$r.prototype,r.add=function(a,h){Ut(this),this.i=null,a=Wn(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ru(a,h){Ut(a),h=Wn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function su(a,h){return Ut(a),h=Wn(a,h),a.g.has(h)}r.forEach=function(a,h){Ut(this),this.g.forEach(function(f,_){f.forEach(function(S){a.call(h,S,_,this)},this)},this)},r.na=function(){Ut(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const S=a[_];for(let C=0;C<S.length;C++)f.push(h[_])}return f},r.V=function(a){Ut(this);let h=[];if(typeof a=="string")su(this,a)&&(h=h.concat(this.g.get(Wn(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},r.set=function(a,h){return Ut(this),this.i=null,a=Wn(this,a),su(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},r.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function iu(a,h,f){ru(a,h),0<f.length&&(a.i=null,a.g.set(Wn(a,h),j(f)),a.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const C=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var S=C;q[_]!==""&&(S+="="+encodeURIComponent(String(q[_]))),a.push(S)}}return this.i=a.join("&")};function Wn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ag(a,h){h&&!a.j&&(Ut(a),a.i=null,a.g.forEach(function(f,_){var S=_.toLowerCase();_!=S&&(ru(this,_),iu(this,S,f))},a)),a.j=h}function lg(a,h){const f=new Fr;if(l.Image){const _=new Image;_.onload=T(Bt,f,"TestLoadImage: loaded",!0,h,_),_.onerror=T(Bt,f,"TestLoadImage: error",!1,h,_),_.onabort=T(Bt,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=T(Bt,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function cg(a,h){const f=new Fr,_=new AbortController,S=setTimeout(()=>{_.abort(),Bt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(C=>{clearTimeout(S),C.ok?Bt(f,"TestPingServer: ok",!0,h):Bt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),Bt(f,"TestPingServer: error",!1,h)})}function Bt(a,h,f,_,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),_(f)}catch{}}function ug(){this.g=new Gp}function hg(a,h,f){const _=f||"";try{Zc(a,function(S,C){let q=S;d(S)&&(q=zo(S)),h.push(_+C+"="+encodeURIComponent(q))})}catch(S){throw h.push(_+"type="+encodeURIComponent("_badmap")),S}}function Zs(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Zs,Ko),Zs.prototype.g=function(){return new ei(this.l,this.j)},Zs.prototype.i=function(a){return function(){return a}}({});function ei(a,h){Oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ei,Oe),r=ei.prototype,r.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Kr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Kr(this)),this.g&&(this.readyState=3,Kr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ou(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ou(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?zr(this):Kr(this),this.readyState==3&&ou(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,zr(this))},r.Qa=function(a){this.g&&(this.response=a,zr(this))},r.ga=function(){this.g&&zr(this)};function zr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Kr(a)}r.setRequestHeader=function(a,h){this.u.append(a,h)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Kr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function au(a){let h="";return M(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function ta(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=au(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ge(a,h,f))}function we(a){Oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(we,Oe);var dg=/^https?$/i,fg=["POST","PUT"];r=we.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ho.g(),this.v=this.o?Oc(this.o):Oc(Ho),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(C){lu(this,C);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var S in _)f.set(S,_[S]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const C of _.keys())f.set(C,_.get(C));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fg,h,void 0))||_||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,q]of f)this.g.setRequestHeader(C,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hu(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){lu(this,C)}};function lu(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,cu(a),ti(a)}function cu(a){a.A||(a.A=!0,Ke(a,"complete"),Ke(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ke(this,"complete"),Ke(this,"abort"),ti(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),we.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?uu(this):this.bb())},r.bb=function(){uu(this)};function uu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||St(a)!=4||a.Z()!=2)){if(a.u&&St(a)==4)kc(a.Ea,0,a);else if(Ke(a,"readystatechange"),St(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=q===0){var S=String(a.D).match(eu)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),_=!dg.test(S?S.toLowerCase():"")}f=_}if(f)Ke(a,"complete"),Ke(a,"success");else{a.m=6;try{var C=2<St(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",cu(a)}}finally{ti(a)}}}}function ti(a,h){if(a.g){hu(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ke(a,"ready");try{f.onreadystatechange=_}catch{}}}function hu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function St(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Kp(h)}};function du(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mg(a){const h={};a=(a.g&&2<=St(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(L(a[_]))continue;var f=w(a[_]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=h[S]||[];h[S]=C,C.push(f)}y(h,function(_){return _.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gr(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function fu(a){this.Aa=0,this.i=[],this.j=new Fr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gr("baseRetryDelayMs",5e3,a),this.cb=Gr("retryDelaySeedMs",1e4,a),this.Wa=Gr("forwardChannelMaxRetries",2,a),this.wa=Gr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Hc(a&&a.concurrentRequestLimit),this.Da=new ug,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=fu.prototype,r.la=8,r.G=1,r.connect=function(a,h,f,_){Ge(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=wu(this,null,this.W),ri(this)};function na(a){if(mu(a),a.G==3){var h=a.U++,f=At(a.I);if(ge(f,"SID",a.K),ge(f,"RID",h),ge(f,"TYPE","terminate"),Wr(a,f),h=new Ft(a,a.j,h),h.L=2,h.v=Xs(At(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Iu(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Qs(h)}xu(a)}function ni(a){a.g&&(sa(a),a.g.cancel(),a.g=null)}function mu(a){ni(a),a.u&&(l.clearTimeout(a.u),a.u=null),si(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ri(a){if(!Qc(a.h)&&!a.s){a.s=!0;var h=a.Ga;Q||De(),ee||(Q(),ee=!0),ie.add(h,a),a.B=0}}function pg(a,h){return Jc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Lr(v(a.Ga,a,h),vu(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Ft(this,this.j,a);let C=this.o;if(this.S&&(C?(C=p(C),I(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=gu(this,S,h),f=At(this.I),ge(f,"RID",a),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),Wr(this,f),C&&(this.O?h="headers="+encodeURIComponent(String(au(C)))+"&"+h:this.m&&ta(f,this.m,C)),ea(this.h,S),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",h),ge(f,"SID","null"),S.T=!0,Jo(S,f,null)):Jo(S,f,h),this.G=2}}else this.G==3&&(a?pu(this,a):this.i.length==0||Qc(this.h)||pu(this))};function pu(a,h){var f;h?f=h.l:f=a.U++;const _=At(a.I);ge(_,"SID",a.K),ge(_,"RID",f),ge(_,"AID",a.T),Wr(a,_),a.m&&a.o&&ta(_,a.m,a.o),f=new Ft(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=gu(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ea(a.h,f),Jo(f,_,h)}function Wr(a,h){a.H&&M(a.H,function(f,_){ge(h,_,f)}),a.l&&Zc({},function(f,_){ge(h,_,f)})}function gu(a,h,f){f=Math.min(a.i.length,f);var _=a.l?v(a.l.Na,a.l,a):null;e:{var S=a.i;let C=-1;for(;;){const q=["count="+f];C==-1?0<f?(C=S[0].g,q.push("ofs="+C)):C=0:q.push("ofs="+C);let me=!0;for(let Ve=0;Ve<f;Ve++){let ce=S[Ve].g;const Me=S[Ve].map;if(ce-=C,0>ce)C=Math.max(0,S[Ve].g-100),me=!1;else try{hg(Me,q,"req"+ce+"_")}catch{_&&_(Me)}}if(me){_=q.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function _u(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Q||De(),ee||(Q(),ee=!0),ie.add(h,a),a.v=0}}function ra(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Lr(v(a.Fa,a),vu(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Lr(v(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ge(10),ni(this),yu(this))};function sa(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function yu(a){a.g=new Ft(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=At(a.qa);ge(h,"RID","rpc"),ge(h,"SID",a.K),ge(h,"AID",a.T),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(h,"TO",a.ja),ge(h,"TYPE","xmlhttp"),Wr(a,h),a.m&&a.o&&ta(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Xs(At(h)),f.m=null,f.P=!0,Kc(f,a)}r.Za=function(){this.C!=null&&(this.C=null,ni(this),ra(this),Ge(19))};function si(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function bu(a,h){var f=null;if(a.g==h){si(a),sa(a),a.g=null;var _=2}else if(Zo(a.h,h))f=h.D,Yc(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var S=a.B;_=Gs(),Ke(_,new Bc(_,f)),ri(a)}else _u(a);else if(S=h.s,S==3||S==0&&0<h.X||!(_==1&&pg(a,h)||_==2&&ra(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),S){case 1:_n(a,5);break;case 4:_n(a,10);break;case 3:_n(a,6);break;default:_n(a,2)}}}function vu(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function _n(a,h){if(a.j.info("Error code "+h),h==2){var f=v(a.fb,a),_=a.Xa;const S=!_;_=new gn(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Js(_,"https"),Xs(_),S?lg(_.toString(),f):cg(_.toString(),f)}else Ge(2);a.G=0,a.l&&a.l.sa(h),xu(a),mu(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function xu(a){if(a.G=0,a.ka=[],a.l){const h=Xc(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ka,h),A(a.ka,a.i),a.h.i.length=0,j(a.i),a.i.length=0),a.l.ra()}}function wu(a,h,f){var _=f instanceof gn?At(f):new gn(f);if(_.g!="")h&&(_.g=h+"."+_.g),Ys(_,_.s);else{var S=l.location;_=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;var C=new gn(null);_&&Js(C,_),h&&(C.g=h),S&&Ys(C,S),f&&(C.l=f),_=C}return f=a.D,h=a.ya,f&&h&&ge(_,f,h),ge(_,"VER",a.la),Wr(a,_),_}function Iu(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new we(new Zs({eb:f})):new we(a.pa),h.Ha(a.J),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eu(){}r=Eu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ii(){}ii.prototype.g=function(a,h){return new et(a,h)};function et(a,h){Oe.call(this),this.g=new fu(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!L(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!L(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Hn(this)}R(et,Oe),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){na(this.g)},et.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=zo(a),a=f);h.i.push(new Xp(h.Ya++,a)),h.G==3&&ri(h)},et.prototype.N=function(){this.g.l=null,delete this.j,na(this.g),delete this.g,et.aa.N.call(this)};function Tu(a){Go.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Tu,Go);function Au(){Wo.call(this),this.status=1}R(Au,Wo);function Hn(a){this.g=a}R(Hn,Eu),Hn.prototype.ua=function(){Ke(this.g,"a")},Hn.prototype.ta=function(a){Ke(this.g,new Tu(a))},Hn.prototype.sa=function(a){Ke(this.g,new Au)},Hn.prototype.ra=function(){Ke(this.g,"b")},ii.prototype.createWebChannel=ii.prototype.g,et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Rf=function(){return new ii},Nf=function(){return Gs()},Sf=mn,za={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ws.NO_ERROR=0,Ws.TIMEOUT=8,Ws.HTTP_ERROR=6,Ai=Ws,qc.COMPLETE="complete",Af=qc,Mc.EventType=Or,Or.OPEN="a",Or.CLOSE="b",Or.ERROR="c",Or.MESSAGE="d",Oe.prototype.listen=Oe.prototype.K,ns=Mc,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,Tf=we}).apply(typeof li<"u"?li:typeof self<"u"?self:typeof window<"u"?window:{});const oh="@firebase/firestore";/**
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
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
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
 */let Nr="10.14.0";/**
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
 */const kn=new El("@firebase/firestore");function tr(){return kn.logLevel}function F(r,...e){if(kn.logLevel<=re.DEBUG){const t=e.map(Vl);kn.debug(`Firestore (${Nr}): ${r}`,...t)}}function Te(r,...e){if(kn.logLevel<=re.ERROR){const t=e.map(Vl);kn.error(`Firestore (${Nr}): ${r}`,...t)}}function bs(r,...e){if(kn.logLevel<=re.WARN){const t=e.map(Vl);kn.warn(`Firestore (${Nr}): ${r}`,...t)}}function Vl(r){if(typeof r=="string")return r;try{/**
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
 */function G(r="Unexpected state"){const e=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: `+r;throw Te(e),new Error(e)}function J(r,e){r||G()}function H(r,e){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends It{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class qv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $v{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ue.UNAUTHENTICATED))}shutdown(){}}class zv{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0);let n=this.i;const s=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let i=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(J(typeof n.accessToken=="string"),new qv(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Ue(e)}}class Kv{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gv{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Kv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){J(this.o===void 0);const n=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new Wv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Qv(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Pf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=Qv(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function te(r,e){return r<e?-1:r>e?1:0}function mr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function Cf(r){return r+"\0"}/**
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
 */class xe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new xe(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new xe(0,0))}static max(){return new Y(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vs{constructor(e,t,n){t===void 0?t=0:t>e.length&&G(),n===void 0?n=e.length-t:n>e.length-t&&G(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return vs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vs?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ue extends vs{construct(e,t,n){return new ue(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const Jv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends vs{construct(e,t,n){return new ve(e,t,n)}static isValidIdentifier(e){return Jv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ve(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(n+=l,s++):(i(),s++)}if(i(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(ue.fromString(e))}static fromName(e){return new z(ue.fromString(e).popFirst(5))}static empty(){return new z(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new ue(e.slice()))}}/**
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
 */class Ki{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function Ka(r){return r.fields.find(e=>e.kind===2)}function In(r){return r.fields.filter(e=>e.kind!==2)}Ki.UNKNOWN_ID=-1;class Si{constructor(e,t){this.fieldPath=e,this.kind=t}}class xs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new xs(0,st.min())}}function kf(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(n===1e9?new xe(t+1,0):new xe(t,n));return new st(s,z.empty(),e)}function Df(r){return new st(r.readTime,r.key,-1)}class st{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new st(Y.min(),z.empty(),-1)}static max(){return new st(Y.max(),z.empty(),-1)}}function jl(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(r.documentKey,e.documentKey),t!==0?t:te(r.largestBatchId,e.largestBatchId))}/**
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
 */const Vf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ln(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Vf)throw r;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,n)=>{t(e)})}static reject(e){return new N((t,n)=>{n(e)})}static waitFor(e){return new N((t,n)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},u=>n(u))}),o=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const n of e)t=t.next(s=>s?N.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new N((n,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{o[d]=m,++l,l===i&&n(o)},m=>s(m))}})}static doWhile(e,t){return new N((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
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
 */class yo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new vt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new cs(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=Ol(n.target.error);this.V.reject(new cs(e,s))}}static open(e,t,n,s){try{return new yo(t,e.transaction(s,n))}catch(i){throw new cs(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(F("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Xv(t)}}class en{constructor(e,t,n){this.name=e,this.version=t,this.p=n,en.S(Re())===12.2&&Te("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return F("SimpleDb","Removing database:",e),En(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Md())return!1;if(en.v())return!0;const e=Re(),t=en.S(e),n=0<t&&t<10,s=Of(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(F("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new cs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new $(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new $(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new cs(e,o))},s.onupgradeneeded=i=>{F("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{F("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const l=yo.open(this.db,e,i?"readonly":"readwrite",n),u=s(l).next(d=>(l.g(),d)).catch(d=>(l.abort(d),N.reject(d))).toPromise();return u.catch(()=>{}),await l.m,u}catch(l){const u=l,d=u.name!=="FirebaseError"&&o<3;if(F("SimpleDb","Transaction failed with error:",u.message,"Retrying:",d),this.close(),!d)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Of(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Yv{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return En(this.B.delete())}}class cs extends ${constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function cn(r){return r.name==="IndexedDbTransactionError"}class Xv{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(F("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(F("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),En(n)}add(e){return F("SimpleDb","ADD",this.store.name,e,e),En(this.store.add(e))}get(e){return En(this.store.get(e)).next(t=>(t===void 0&&(t=null),F("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return F("SimpleDb","DELETE",this.store.name,e),En(this.store.delete(e))}count(){return F("SimpleDb","COUNT",this.store.name),En(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new N((o,l)=>{i.onerror=u=>{l(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(n),o=[];return this.W(i,(l,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new N((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}j(e,t){F("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(i,o,l)=>l.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new N((n,s)=>{t.onerror=i=>{const o=Ol(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():n()}):n()}})}W(e,t){const n=[];return new N((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void s();const u=new Yv(l),d=t(l.primaryKey,l.value,u);if(d instanceof N){const m=d.catch(g=>(u.done(),N.reject(g)));n.push(m)}u.isDone?s():u.K===null?l.continue():l.continue(u.K)}}).next(()=>N.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function En(r){return new N((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Ol(n.target.error);t(s)}})}let ah=!1;function Ol(r){const e=en.S(Re());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new $("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ah||(ah=!0,setTimeout(()=>{throw n},0)),n}}return r}class Zv{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){F("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{F("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){cn(t)?F("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await ln(t)}await this.X(6e4)})}}class ex{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,i=!0;return N.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return F("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(l=>{s-=l,n.add(o)});i=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(l=>(F("IndexBackfiller",`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=Df(i);jl(o,n)>0&&(n=o)}),new st(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ye{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ye.oe=-1;function bo(r){return r==null}function ws(r){return r===0&&1/r==-1/0}function Mf(r){return typeof r=="number"&&Number.isInteger(r)&&!ws(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function He(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=lh(e)),e=tx(r.get(t),e);return lh(e)}function tx(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function lh(r){return r+""}function pt(r){const e=r.length;if(J(e>=2),e===2)return J(r.charAt(0)===""&&r.charAt(1)===""),ue.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf("",i);switch((o<0||o>t)&&G(),r.charAt(o+1)){case"":const l=r.substring(i,o);let u;s.length===0?u=l:(s+=l,u=s,s=""),n.push(u);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:G()}i=o+2}return new ue(n)}/**
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
 */const ch=["userId","batchId"];/**
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
 */function Ni(r,e){return[r,He(e)]}function Lf(r,e,t){return[r,He(e),t]}const nx={},rx=["prefixPath","collectionGroup","readTime","documentId"],sx=["prefixPath","collectionGroup","documentId"],ix=["collectionGroup","readTime","prefixPath","documentId"],ox=["canonicalId","targetId"],ax=["targetId","path"],lx=["path","targetId"],cx=["collectionId","parent"],ux=["indexId","uid"],hx=["uid","sequenceNumber"],dx=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],fx=["indexId","uid","orderedDocumentKey"],mx=["userId","collectionPath","documentId"],px=["userId","collectionPath","largestBatchId"],gx=["userId","collectionGroup","largestBatchId"],Ff=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_x=[...Ff,"documentOverlays"],Uf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Bf=Uf,Ml=[...Bf,"indexConfiguration","indexState","indexEntries"],yx=Ml,bx=[...Ml,"globals"];/**
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
 */class Ga extends jf{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Pe(r,e){const t=H(r);return en.F(t._e,e)}/**
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
 */function uh(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function qn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function qf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class pe{constructor(e,t){this.comparator=e,this.root=t||je.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ci(this.root,e,this.comparator,!0)}}class ci{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new je(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,n,s,i){return this}insert(e,t,n){return new je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class de{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hh(this.data.getIterator())}getIteratorFrom(e){return new hh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class hh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Jn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Xe{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new de(ve.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class $f extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $f("Invalid base64 string: "+i):i}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const vx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(r){if(J(!!r),typeof r=="string"){let e=0;const t=vx.exec(r);if(J(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ye(r.seconds),nanos:ye(r.nanos)}}function ye(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function rn(r){return typeof r=="string"?Ae.fromBase64String(r):Ae.fromUint8Array(r)}/**
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
 */function Ll(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Fl(r){const e=r.mapValue.fields.__previous_value__;return Ll(e)?Fl(e):e}function Is(r){const e=jt(r.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class xx{constructor(e,t,n,s,i,o,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Dn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Dn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ri={nullValue:"NULL_VALUE"};function Vn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ll(r)?4:zf(r)?9007199254740991:vo(r)?10:11:G()}function xt(r,e){if(r===e)return!0;const t=Vn(r);if(t!==Vn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Is(r).isEqual(Is(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=jt(s.timestampValue),l=jt(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return rn(s.bytesValue).isEqual(rn(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ye(s.doubleValue),l=ye(i.doubleValue);return o===l?ws(o)===ws(l):isNaN(o)&&isNaN(l)}return!1}(r,e);case 9:return mr(r.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(uh(o)!==uh(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!xt(o[u],l[u])))return!1;return!0}(r,e);default:return G()}}function Es(r,e){return(r.values||[]).find(t=>xt(t,e))!==void 0}function sn(r,e){if(r===e)return 0;const t=Vn(r),n=Vn(e);if(t!==n)return te(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(r.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ye(i.integerValue||i.doubleValue),u=ye(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(r,e);case 3:return dh(r.timestampValue,e.timestampValue);case 4:return dh(Is(r),Is(e));case 5:return te(r.stringValue,e.stringValue);case 6:return function(i,o){const l=rn(i),u=rn(o);return l.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=te(l[d],u[d]);if(m!==0)return m}return te(l.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const l=te(ye(i.latitude),ye(o.latitude));return l!==0?l:te(ye(i.longitude),ye(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return fh(r.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,d,m;const g=i.fields||{},v=o.fields||{},T=(l=g.value)===null||l===void 0?void 0:l.arrayValue,R=(u=v.value)===null||u===void 0?void 0:u.arrayValue,j=te(((d=T?.values)===null||d===void 0?void 0:d.length)||0,((m=R?.values)===null||m===void 0?void 0:m.length)||0);return j!==0?j:fh(T,R)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Jt.mapValue&&o===Jt.mapValue)return 0;if(i===Jt.mapValue)return 1;if(o===Jt.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let g=0;g<u.length&&g<m.length;++g){const v=te(u[g],m[g]);if(v!==0)return v;const T=sn(l[u[g]],d[m[g]]);if(T!==0)return T}return te(u.length,m.length)}(r.mapValue,e.mapValue);default:throw G()}}function dh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return te(r,e);const t=jt(r),n=jt(e),s=te(t.seconds,n.seconds);return s!==0?s:te(t.nanos,n.nanos)}function fh(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=sn(t[s],n[s]);if(i)return i}return te(t.length,n.length)}function pr(r){return Wa(r)}function Wa(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=jt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return rn(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return z.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Wa(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${Wa(t.fields[o])}`;return s+"}"}(r.mapValue):G()}function Ts(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ha(r){return!!r&&"integerValue"in r}function As(r){return!!r&&"arrayValue"in r}function mh(r){return!!r&&"nullValue"in r}function ph(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Pi(r){return!!r&&"mapValue"in r}function vo(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function us(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return qn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=us(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=us(r.arrayValue.values[t]);return e}return Object.assign({},r)}function zf(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Kf={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function wx(r){return"nullValue"in r?Ri:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Ts(Dn.empty(),z.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?vo(r)?Kf:{mapValue:{}}:G()}function Ix(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Ts(Dn.empty(),z.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Kf:"mapValue"in r?vo(r)?{mapValue:{}}:Jt:G()}function gh(r,e){const t=sn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function _h(r,e){const t=sn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Pi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=us(t)}setAll(e){let t=ve.emptyPath(),n={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=l.popLast()}o?n[l.lastSegment()]=us(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Pi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Pi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){qn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Be(us(this.value))}}function Gf(r){const e=[];return qn(r.fields,(t,n)=>{const s=new ve([t]);if(Pi(n)){const i=Gf(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xe(e)}/**
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
 */class Ie{constructor(e,t,n,s,i,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ie(e,0,Y.min(),Y.min(),Y.min(),Be.empty(),0)}static newFoundDocument(e,t,n,s){return new Ie(e,1,t,Y.min(),n,s,0)}static newNoDocument(e,t){return new Ie(e,2,t,Y.min(),Y.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,Y.min(),Y.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gr{constructor(e,t){this.position=e,this.inclusive=t}}function yh(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=z.comparator(z.fromName(o.referenceValue),t.key):n=sn(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function bh(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!xt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Gi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ex(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Wf{}class se extends Wf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Tx(e,t,n):t==="array-contains"?new Nx(e,n):t==="in"?new Zf(e,n):t==="not-in"?new Rx(e,n):t==="array-contains-any"?new Px(e,n):new se(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Ax(e,n):new Sx(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(sn(t,this.value)):t!==null&&Vn(this.value)===Vn(t)&&this.matchesComparison(sn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class he extends Wf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new he(e,t)}matches(e){return _r(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _r(r){return r.op==="and"}function Qa(r){return r.op==="or"}function Ul(r){return Hf(r)&&_r(r)}function Hf(r){for(const e of r.filters)if(e instanceof he)return!1;return!0}function Ja(r){if(r instanceof se)return r.field.canonicalString()+r.op.toString()+pr(r.value);if(Ul(r))return r.filters.map(e=>Ja(e)).join(",");{const e=r.filters.map(t=>Ja(t)).join(",");return`${r.op}(${e})`}}function Qf(r,e){return r instanceof se?function(n,s){return s instanceof se&&n.op===s.op&&n.field.isEqual(s.field)&&xt(n.value,s.value)}(r,e):r instanceof he?function(n,s){return s instanceof he&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,l)=>i&&Qf(o,s.filters[l]),!0):!1}(r,e):void G()}function Jf(r,e){const t=r.filters.concat(e);return he.create(t,r.op)}function Yf(r){return r instanceof se?function(t){return`${t.field.canonicalString()} ${t.op} ${pr(t.value)}`}(r):r instanceof he?function(t){return t.op.toString()+" {"+t.getFilters().map(Yf).join(" ,")+"}"}(r):"Filter"}class Tx extends se{constructor(e,t,n){super(e,t,n),this.key=z.fromName(n.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ax extends se{constructor(e,t){super(e,"in",t),this.keys=Xf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Sx extends se{constructor(e,t){super(e,"not-in",t),this.keys=Xf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Xf(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>z.fromName(n.referenceValue))}class Nx extends se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return As(t)&&Es(t.arrayValue,this.value)}}class Zf extends se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Es(this.value.arrayValue,t)}}class Rx extends se{constructor(e,t){super(e,"not-in",t)}matches(e){if(Es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Es(this.value.arrayValue,t)}}class Px extends se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!As(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Es(this.value.arrayValue,n))}}/**
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
 */class Cx{constructor(e,t=null,n=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ya(r,e=null,t=[],n=[],s=null,i=null,o=null){return new Cx(r,e,t,n,s,i,o)}function jn(r){const e=H(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ja(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>pr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>pr(n)).join(",")),e.ue=t}return e.ue}function Os(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Ex(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Qf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!bh(r.startAt,e.startAt)&&bh(r.endAt,e.endAt)}function Wi(r){return z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Hi(r,e){return r.filters.filter(t=>t instanceof se&&t.field.isEqual(e))}function vh(r,e,t){let n=Ri,s=!0;for(const i of Hi(r,e)){let o=Ri,l=!0;switch(i.op){case"<":case"<=":o=wx(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,l=!1;break;case"!=":case"not-in":o=Ri}gh({value:n,inclusive:s},{value:o,inclusive:l})<0&&(n=o,s=l)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];gh({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function xh(r,e,t){let n=Jt,s=!0;for(const i of Hi(r,e)){let o=Jt,l=!0;switch(i.op){case">=":case">":o=Ix(i.value),l=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,l=!1;break;case"!=":case"not-in":o=Jt}_h({value:n,inclusive:s},{value:o,inclusive:l})>0&&(n=o,s=l)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];_h({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class Ms{constructor(e,t=null,n=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function em(r,e,t,n,s,i,o,l){return new Ms(r,e,t,n,s,i,o,l)}function Ls(r){return new Ms(r)}function wh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function tm(r){return r.collectionGroup!==null}function hs(r){const e=H(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new de(ve.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Gi(i,n))}),t.has(ve.keyField().canonicalString())||e.ce.push(new Gi(ve.keyField(),n))}return e.ce}function nt(r){const e=H(r);return e.le||(e.le=kx(e,hs(r))),e.le}function kx(r,e){if(r.limitType==="F")return Ya(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Gi(s.field,i)});const t=r.endAt?new gr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new gr(r.startAt.position,r.startAt.inclusive):null;return Ya(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Xa(r,e){const t=r.filters.concat([e]);return new Ms(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Za(r,e,t){return new Ms(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function xo(r,e){return Os(nt(r),nt(e))&&r.limitType===e.limitType}function nm(r){return`${jn(nt(r))}|lt:${r.limitType}`}function nr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Yf(s)).join(", ")}]`),bo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>pr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>pr(s)).join(",")),`Target(${n})`}(nt(r))}; limitType=${r.limitType})`}function Fs(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of hs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,l,u){const d=yh(o,l,u);return o.inclusive?d<=0:d<0}(n.startAt,hs(n),s)||n.endAt&&!function(o,l,u){const d=yh(o,l,u);return o.inclusive?d>=0:d>0}(n.endAt,hs(n),s))}(r,e)}function rm(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function sm(r){return(e,t)=>{let n=!1;for(const s of hs(r)){const i=Dx(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Dx(r,e,t){const n=r.field.isKeyField()?z.comparator(e.key,t.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?sn(u,d):G()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return G()}}/**
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
 */class un{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return qf(this.inner)}size(){return this.innerSize}}/**
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
 */const Vx=new pe(z.comparator);function tt(){return Vx}const im=new pe(z.comparator);function rs(...r){let e=im;for(const t of r)e=e.insert(t.key,t);return e}function om(r){let e=im;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function gt(){return ds()}function am(){return ds()}function ds(){return new un(r=>r.toString(),(r,e)=>r.isEqual(e))}const jx=new pe(z.comparator),Ox=new de(z.comparator);function ne(...r){let e=Ox;for(const t of r)e=e.add(t);return e}const Mx=new de(te);function Bl(){return Mx}/**
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
 */function ql(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ws(e)?"-0":e}}function lm(r){return{integerValue:""+r}}function Lx(r,e){return Mf(e)?lm(e):ql(r,e)}/**
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
 */class wo{constructor(){this._=void 0}}function Fx(r,e,t){return r instanceof yr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ll(i)&&(i=Fl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof br?um(r,e):r instanceof vr?hm(r,e):function(s,i){const o=cm(s,i),l=Ih(o)+Ih(s.Pe);return Ha(o)&&Ha(s.Pe)?lm(l):ql(s.serializer,l)}(r,e)}function Ux(r,e,t){return r instanceof br?um(r,e):r instanceof vr?hm(r,e):t}function cm(r,e){return r instanceof Ss?function(n){return Ha(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class yr extends wo{}class br extends wo{constructor(e){super(),this.elements=e}}function um(r,e){const t=dm(e);for(const n of r.elements)t.some(s=>xt(s,n))||t.push(n);return{arrayValue:{values:t}}}class vr extends wo{constructor(e){super(),this.elements=e}}function hm(r,e){let t=dm(e);for(const n of r.elements)t=t.filter(s=>!xt(s,n));return{arrayValue:{values:t}}}class Ss extends wo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ih(r){return ye(r.integerValue||r.doubleValue)}function dm(r){return As(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class fm{constructor(e,t){this.field=e,this.transform=t}}function Bx(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof br&&s instanceof br||n instanceof vr&&s instanceof vr?mr(n.elements,s.elements,xt):n instanceof Ss&&s instanceof Ss?xt(n.Pe,s.Pe):n instanceof yr&&s instanceof yr}(r.transform,e.transform)}class qx{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ci(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Io{}function mm(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Eo(r.key,qe.none()):new Rr(r.key,r.data,qe.none());{const t=r.data,n=Be.empty();let s=new de(ve.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Lt(r.key,n,new Xe(s.toArray()),qe.none())}}function $x(r,e,t){r instanceof Rr?function(s,i,o){const l=s.value.clone(),u=Th(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):r instanceof Lt?function(s,i,o){if(!Ci(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Th(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(pm(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function fs(r,e,t,n){return r instanceof Rr?function(i,o,l,u){if(!Ci(i.precondition,o))return l;const d=i.value.clone(),m=Ah(i.fieldTransforms,u,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof Lt?function(i,o,l,u){if(!Ci(i.precondition,o))return l;const d=Ah(i.fieldTransforms,u,o),m=o.data;return m.setAll(pm(i)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,e,t,n):function(i,o,l){return Ci(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(r,e,t)}function zx(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=cm(n.transform,s||null);i!=null&&(t===null&&(t=Be.empty()),t.set(n.field,i))}return t||null}function Eh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&mr(n,s,(i,o)=>Bx(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Rr extends Io{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lt extends Io{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pm(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Th(r,e,t){const n=new Map;J(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,l=e.data.field(i.field);n.set(i.field,Ux(o,l,t[s]))}return n}function Ah(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,Fx(i,o,e))}return n}class Eo extends Io{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gm extends Io{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $l{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&$x(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=fs(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=fs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=am();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const u=mm(o,l);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,(t,n)=>Eh(t,n))&&mr(this.baseMutations,e.baseMutations,(t,n)=>Eh(t,n))}}class zl{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){J(e.mutations.length===n.length);let s=function(){return jx}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new zl(e,t,n,s)}}/**
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
 */class Kl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Kx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Se,oe;function Gx(r){switch(r){default:return G();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function _m(r){if(r===void 0)return Te("GRPC error has no .code"),V.UNKNOWN;switch(r){case Se.OK:return V.OK;case Se.CANCELLED:return V.CANCELLED;case Se.UNKNOWN:return V.UNKNOWN;case Se.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Se.INTERNAL:return V.INTERNAL;case Se.UNAVAILABLE:return V.UNAVAILABLE;case Se.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Se.NOT_FOUND:return V.NOT_FOUND;case Se.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Se.ABORTED:return V.ABORTED;case Se.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Se.DATA_LOSS:return V.DATA_LOSS;default:return G()}}(oe=Se||(Se={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Wx(){return new TextEncoder}/**
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
 */const Hx=new Nn([4294967295,4294967295],0);function Sh(r){const e=Wx().encode(r),t=new Ef;return t.update(e),new Uint8Array(t.digest())}function Nh(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Nn([t,n],0),new Nn([s,i],0)]}class Gl{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ss(`Invalid padding: ${t}`);if(n<0)throw new ss(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ss(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ss(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Nn.fromNumber(this.Ie)}Ee(e,t,n){let s=e.add(t.multiply(Nn.fromNumber(n)));return s.compare(Hx)===1&&(s=new Nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Sh(e),[n,s]=Nh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Gl(i,s,t);return n.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=Sh(e),[n,s]=Nh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ss extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Us{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Bs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Us(Y.min(),s,new pe(te),tt(),ne())}}class Bs{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Bs(n,t,ne(),ne(),ne())}}/**
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
 */class ki{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class ym{constructor(e,t){this.targetId=e,this.me=t}}class bm{constructor(e,t,n=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Rh{constructor(){this.fe=0,this.ge=Ch(),this.pe=Ae.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),t=ne(),n=ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:G()}}),new Bs(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Ch()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Qx{constructor(e){this.Le=e,this.Be=new Map,this.ke=tt(),this.qe=Ph(),this.Qe=new pe(te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,n=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Wi(i))if(n===0){const o=new z(i.path);this.Ue(t,o,Ie.newNoDocument(o,Y.min()))}else J(n===1);else{const o=this.Ye(t);if(o!==n){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=rn(n).toUint8Array()}catch(u){if(u instanceof $f)return bs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Gl(o,s,i)}catch(u){return bs(u instanceof ss?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Wi(l.target)){const u=new z(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ie.newNoDocument(u,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=ne();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Us(e,t,this.Qe,this.ke,n);return this.ke=tt(),this.qe=Ph(),this.Qe=new pe(te),s}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Rh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new de(te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Rh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ph(){return new pe(z.comparator)}function Ch(){return new pe(z.comparator)}const Jx={asc:"ASCENDING",desc:"DESCENDING"},Yx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xx={and:"AND",or:"OR"};class Zx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function el(r,e){return r.useProto3Json||bo(e)?e:{value:e}}function xr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vm(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function e0(r,e){return xr(r,e.toTimestamp())}function Qe(r){return J(!!r),Y.fromTimestamp(function(t){const n=jt(t);return new xe(n.seconds,n.nanos)}(r))}function Wl(r,e){return tl(r,e).canonicalString()}function tl(r,e){const t=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function xm(r){const e=ue.fromString(r);return J(Pm(e)),e}function Qi(r,e){return Wl(r.databaseId,e.path)}function Rn(r,e){const t=xm(e);if(t.get(1)!==r.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new z(Em(t))}function wm(r,e){return Wl(r.databaseId,e)}function Im(r){const e=xm(r);return e.length===4?ue.emptyPath():Em(e)}function nl(r){return new ue(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Em(r){return J(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function kh(r,e,t){return{name:Qi(r,e),fields:t.value.mapValue.fields}}function t0(r,e,t){const n=Rn(r,e.name),s=Qe(e.updateTime),i=e.createTime?Qe(e.createTime):Y.min(),o=new Be({mapValue:{fields:e.fields}}),l=Ie.newFoundDocument(n,s,i,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function n0(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(J(m===void 0||typeof m=="string"),Ae.fromBase64String(m||"")):(J(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Ae.fromUint8Array(m||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const m=d.code===void 0?V.UNKNOWN:_m(d.code);return new $(m,d.message||"")}(o);t=new bm(n,s,i,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Rn(r,n.document.name),i=Qe(n.document.updateTime),o=n.document.createTime?Qe(n.document.createTime):Y.min(),l=new Be({mapValue:{fields:n.document.fields}}),u=Ie.newFoundDocument(s,i,o,l),d=n.targetIds||[],m=n.removedTargetIds||[];t=new ki(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Rn(r,n.document),i=n.readTime?Qe(n.readTime):Y.min(),o=Ie.newNoDocument(s,i),l=n.removedTargetIds||[];t=new ki([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Rn(r,n.document),i=n.removedTargetIds||[];t=new ki([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new Kx(s,i),l=n.targetId;t=new ym(l,o)}}return t}function Ji(r,e){let t;if(e instanceof Rr)t={update:kh(r,e.key,e.value)};else if(e instanceof Eo)t={delete:Qi(r,e.key)};else if(e instanceof Lt)t={update:kh(r,e.key,e.data),updateMask:l0(e.fieldMask)};else{if(!(e instanceof gm))return G();t={verify:Qi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const l=o.transform;if(l instanceof yr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof br)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ss)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:e0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(r,e.precondition)),t}function rl(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?qe.updateTime(Qe(i.updateTime)):i.exists!==void 0?qe.exists(i.exists):qe.none()}(e.currentDocument):qe.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,l){let u=null;if("setToServerValue"in l)J(l.setToServerValue==="REQUEST_TIME"),u=new yr;else if("appendMissingElements"in l){const m=l.appendMissingElements.values||[];u=new br(m)}else if("removeAllFromArray"in l){const m=l.removeAllFromArray.values||[];u=new vr(m)}else"increment"in l?u=new Ss(o,l.increment):G();const d=ve.fromServerFormat(l.fieldPath);return new fm(d,u)}(r,s)):[];if(e.update){e.update.name;const s=Rn(r,e.update.name),i=new Be({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const d=u.fieldPaths||[];return new Xe(d.map(m=>ve.fromServerFormat(m)))}(e.updateMask);return new Lt(s,i,o,t,n)}return new Rr(s,i,t,n)}if(e.delete){const s=Rn(r,e.delete);return new Eo(s,t)}if(e.verify){const s=Rn(r,e.verify);return new gm(s,t)}return G()}function r0(r,e){return r&&r.length>0?(J(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?Qe(s.updateTime):Qe(i);return o.isEqual(Y.min())&&(o=Qe(i)),new qx(o,s.transformResults||[])}(t,e))):[]}function Tm(r,e){return{documents:[wm(r,e.path)]}}function Am(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=wm(r,s);const i=function(d){if(d.length!==0)return Rm(he.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:rr(v.field),direction:i0(v.dir)}}(m))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=el(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function Sm(r){let e=Im(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){J(n===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(g){const v=Nm(g);return v instanceof he&&Ul(v)?v.getFilters():[v]}(t.where));let o=[];t.orderBy&&(o=function(g){return g.map(v=>function(R){return new Gi(sr(R.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(g){let v;return v=typeof g=="object"?g.value:g,bo(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(g){const v=!!g.before,T=g.values||[];return new gr(T,v)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const v=!g.before,T=g.values||[];return new gr(T,v)}(t.endAt)),em(e,s,o,i,l,"F",u,d)}function s0(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nm(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=sr(t.unaryFilter.field);return se.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=sr(t.unaryFilter.field);return se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=sr(t.unaryFilter.field);return se.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=sr(t.unaryFilter.field);return se.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(r):r.fieldFilter!==void 0?function(t){return se.create(sr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return he.create(t.compositeFilter.filters.map(n=>Nm(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(r):G()}function i0(r){return Jx[r]}function o0(r){return Yx[r]}function a0(r){return Xx[r]}function rr(r){return{fieldPath:r.canonicalString()}}function sr(r){return ve.fromServerFormat(r.fieldPath)}function Rm(r){return r instanceof se?function(t){if(t.op==="=="){if(ph(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NAN"}};if(mh(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ph(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NAN"}};if(mh(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rr(t.field),op:o0(t.op),value:t.value}}}(r):r instanceof he?function(t){const n=t.getFilters().map(s=>Rm(s));return n.length===1?n[0]:{compositeFilter:{op:a0(t.op),filters:n}}}(r):G()}function l0(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Pm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class kt{constructor(e,t,n,s,i=Y.min(),o=Y.min(),l=Ae.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Cm{constructor(e){this.ct=e}}function c0(r,e){let t;if(e.document)t=t0(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=z.fromSegments(e.noDocument.path),s=Mn(e.noDocument.readTime);t=Ie.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return G();{const n=z.fromSegments(e.unknownDocument.path),s=Mn(e.unknownDocument.version);t=Ie.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new xe(s[0],s[1]);return Y.fromTimestamp(i)}(e.readTime)),t}function Dh(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Yi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:Qi(i,o.key),fields:o.data.value.mapValue.fields,updateTime:xr(i,o.version.toTimestamp()),createTime:xr(i,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:On(e.version)};else{if(!e.isUnknownDocument())return G();n.unknownDocument={path:t.path.toArray(),version:On(e.version)}}return n}function Yi(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function On(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Mn(r){const e=new xe(r.seconds,r.nanoseconds);return Y.fromTimestamp(e)}function Tn(r,e){const t=(e.baseMutations||[]).map(i=>rl(r.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const l=e.mutations[i+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>rl(r.ct,i)),s=xe.fromMillis(e.localWriteTimeMs);return new $l(e.batchId,s,t,n)}function is(r){const e=Mn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Mn(r.lastLimboFreeSnapshotVersion):Y.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return J(i.documents.length===1),nt(Ls(Im(i.documents[0])))}(r.query):function(i){return nt(Sm(i))}(r.query),new kt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Ae.fromBase64String(r.resumeToken))}function km(r,e){const t=On(e.snapshotVersion),n=On(e.lastLimboFreeSnapshotVersion);let s;s=Wi(e.target)?Tm(r.ct,e.target):Am(r.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:jn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Dm(r){const e=Sm({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Za(e,e.limit,"L"):e}function ga(r,e){return new Kl(e.largestBatchId,rl(r.ct,e.overlayMutation))}function Vh(r,e){const t=e.path.lastSegment();return[r,He(e.path.popLast()),t]}function jh(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:On(n.readTime),documentKey:He(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class u0{getBundleMetadata(e,t){return Oh(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Mn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return Oh(e).put(function(s){return{bundleId:s.id,createTime:On(Qe(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Mh(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:Dm(i.bundledQuery),readTime:Mn(i.readTime)}}(n)})}saveNamedQuery(e,t){return Mh(e).put(function(s){return{name:s.name,readTime:On(Qe(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Oh(r){return Pe(r,"bundles")}function Mh(r){return Pe(r,"namedQueries")}/**
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
 */class To{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new To(e,n)}getOverlay(e,t){return Hr(e).get(Vh(this.userId,t)).next(n=>n?ga(this.serializer,n):null)}getOverlays(e,t){const n=gt();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const l=new Kl(t,o);s.push(this.ht(e,l))}),N.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(He(o.getCollectionPath())));const i=[];return s.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Hr(e).j("collectionPathOverlayIndex",l))}),N.waitFor(i)}getOverlaysForCollection(e,t,n){const s=gt(),i=He(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Hr(e).U("collectionPathOverlayIndex",o).next(l=>{for(const u of l){const d=ga(this.serializer,u);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=gt();let o;const l=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Hr(e).J({index:"collectionGroupOverlayIndex",range:l},(u,d,m)=>{const g=ga(this.serializer,d);i.size()<s||g.largestBatchId===o?(i.set(g.getKey(),g),o=g.largestBatchId):m.done()}).next(()=>i)}ht(e,t){return Hr(e).put(function(s,i,o){const[l,u,d]=Vh(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:d,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ji(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Hr(r){return Pe(r,"documentOverlays")}/**
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
 */class h0{Pt(e){return Pe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t?.value;return n?Ae.fromUint8Array(n):Ae.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class An{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ye(e.integerValue));else if("doubleValue"in e){const n=ye(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ws(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=jt(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(rn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?zf(e)?this.dt(t,Number.MAX_SAFE_INTEGER):vo(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):G()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const s of Object.keys(n))this.Vt(s,t),this.Tt(n[s],t)}wt(e,t){var n,s;const i=e.fields||{};this.dt(t,53);const o="value",l=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(ye(l)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const s of n)this.Tt(s,t)}yt(e,t){this.dt(t,37),z.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}An.vt=new An;function d0(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Lh(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=d0(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class f0{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),n=Lh(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),n=Lh(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class m0{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class p0{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Qr{constructor(){this.jt=new f0,this.Ht=new m0(this.jt),this.Jt=new p0(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Sn{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Sn(this.indexId,this.documentKey,this.arrayValue,n)}}function $t(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Fh(r.arrayValue,e.arrayValue),t!==0?t:(t=Fh(r.directionalValue,e.directionalValue),t!==0?t:z.comparator(r.documentKey,e.documentKey)))}function Fh(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class Uh{constructor(e){this.Xt=new de((t,n)=>ve.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(J(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Ka(e);if(t!==void 0&&!this.sn(t))return!1;const n=In(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const l=this.Xt.getIterator().getNext();if(!s.has(l.field.canonicalString())){const u=n[i];if(!this.on(l,u)||!this._n(this.en[o++],u))return!1}++i}for(;i<n.length;++i){const l=n[i];if(o>=this.en.length||!this._n(this.en[o++],l))return!1}return!0}an(){if(this.nn)return null;let e=new de(ve.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Si(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Si(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Si(n.field,n.dir==="asc"?0:1)));return new Ki(Ki.UNKNOWN_ID,this.collectionId,t,xs.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Vm(r){var e,t;if(J(r instanceof se||r instanceof he),r instanceof se){if(r instanceof Zf){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>se.create(r.field,"==",i)))||[];return he.create(s,"or")}return r}const n=r.filters.map(s=>Vm(s));return he.create(n,r.op)}function g0(r){if(r.getFilters().length===0)return[];const e=ol(Vm(r));return J(jm(e)),sl(e)||il(e)?[e]:e.getFilters()}function sl(r){return r instanceof se}function il(r){return r instanceof he&&Ul(r)}function jm(r){return sl(r)||il(r)||function(t){if(t instanceof he&&Qa(t)){for(const n of t.getFilters())if(!sl(n)&&!il(n))return!1;return!0}return!1}(r)}function ol(r){if(J(r instanceof se||r instanceof he),r instanceof se)return r;if(r.filters.length===1)return ol(r.filters[0]);const e=r.filters.map(n=>ol(n));let t=he.create(e,r.op);return t=Xi(t),jm(t)?t:(J(t instanceof he),J(_r(t)),J(t.filters.length>1),t.filters.reduce((n,s)=>Hl(n,s)))}function Hl(r,e){let t;return J(r instanceof se||r instanceof he),J(e instanceof se||e instanceof he),t=r instanceof se?e instanceof se?function(s,i){return he.create([s,i],"and")}(r,e):Bh(r,e):e instanceof se?Bh(e,r):function(s,i){if(J(s.filters.length>0&&i.filters.length>0),_r(s)&&_r(i))return Jf(s,i.getFilters());const o=Qa(s)?s:i,l=Qa(s)?i:s,u=o.filters.map(d=>Hl(d,l));return he.create(u,"or")}(r,e),Xi(t)}function Bh(r,e){if(_r(e))return Jf(e,r.getFilters());{const t=e.filters.map(n=>Hl(r,n));return he.create(t,"or")}}function Xi(r){if(J(r instanceof se||r instanceof he),r instanceof se)return r;const e=r.getFilters();if(e.length===1)return Xi(e[0]);if(Hf(r))return r;const t=e.map(s=>Xi(s)),n=[];return t.forEach(s=>{s instanceof se?n.push(s):s instanceof he&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:he.create(n,r.op)}/**
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
 */class _0{constructor(){this.un=new Ql}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(st.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(st.min())}updateCollectionGroup(e,t,n){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Ql{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new de(ue.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new de(ue.comparator)).toArray()}}/**
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
 */const ui=new Uint8Array(0);class y0{constructor(e,t){this.databaseId=t,this.cn=new Ql,this.ln=new un(n=>jn(n),(n,s)=>Os(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:n,parent:He(s)};return qh(e).put(i)}return N.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[Cf(t),""],!1,!0);return qh(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(pt(o.parent))}return n})}addFieldIndex(e,t){const n=Jr(e),s=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Xn(e);return i.next(l=>{o.put(jh(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Jr(e),s=Xn(e),i=Yn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Jr(e),n=Yn(e),s=Xn(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return N.forEach(this.hn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Uh(n).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Yn(e);let s=!0;const i=new Map;return N.forEach(this.hn(t),o=>this.Pn(e,o).next(l=>{s&&(s=!!l),i.set(o,l)})).next(()=>{if(s){let o=ne();const l=[];return N.forEach(i,(u,d)=>{F("IndexedDbIndexManager",`Using index ${function(P){return`id=${P.indexId}|cg=${P.collectionGroup}|f=${P.fields.map(B=>`${B.fieldPath}:${B.kind}`).join(",")}`}(u)} to execute ${jn(t)}`);const m=function(P,B){const k=Ka(B);if(k===void 0)return null;for(const M of Hi(P,k.fieldPath))switch(M.op){case"array-contains-any":return M.value.arrayValue.values||[];case"array-contains":return[M.value]}return null}(d,u),g=function(P,B){const k=new Map;for(const M of In(B))for(const y of Hi(P,M.fieldPath))switch(y.op){case"==":case"in":k.set(M.fieldPath.canonicalString(),y.value);break;case"not-in":case"!=":return k.set(M.fieldPath.canonicalString(),y.value),Array.from(k.values())}return null}(d,u),v=function(P,B){const k=[];let M=!0;for(const y of In(B)){const p=y.kind===0?vh(P,y.fieldPath,P.startAt):xh(P,y.fieldPath,P.startAt);k.push(p.value),M&&(M=p.inclusive)}return new gr(k,M)}(d,u),T=function(P,B){const k=[];let M=!0;for(const y of In(B)){const p=y.kind===0?xh(P,y.fieldPath,P.endAt):vh(P,y.fieldPath,P.endAt);k.push(p.value),M&&(M=p.inclusive)}return new gr(k,M)}(d,u),R=this.In(u,d,v),j=this.In(u,d,T),A=this.Tn(u,d,g),D=this.En(u.indexId,m,R,v.inclusive,j,T.inclusive,A);return N.forEach(D,L=>n.G(L,t.limit).next(P=>{P.forEach(B=>{const k=z.fromSegments(B.documentKey);o.has(k)||(o=o.add(k),l.push(k))})}))}).next(()=>l)}return N.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=g0(he.create(e.filters,"and")).map(n=>Ya(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,s,i,o,l){const u=(t!=null?t.length:1)*Math.max(n.length,i.length),d=u/(t!=null?t.length:1),m=[];for(let g=0;g<u;++g){const v=t?this.dn(t[g/d]):ui,T=this.An(e,v,n[g%d],s),R=this.Rn(e,v,i[g%d],o),j=l.map(A=>this.An(e,v,A,!0));m.push(...this.createRange(T,R,j))}return m}An(e,t,n,s){const i=new Sn(e,z.empty(),t,n);return s?i:i.Zt()}Rn(e,t,n,s){const i=new Sn(e,z.empty(),t,n);return s?i.Zt():i}Pn(e,t){const n=new Uh(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const l of i)n.rn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let n=2;const s=this.hn(t);return N.forEach(s,i=>this.Pn(e,i).next(o=>{o?n!==0&&o.fields.length<function(u){let d=new de(ve.comparator),m=!1;for(const g of u.filters)for(const v of g.getFlattenedFilters())v.field.isKeyField()||(v.op==="array-contains"||v.op==="array-contains-any"?m=!0:d=d.add(v.field));for(const g of u.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(m?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Vn(e,t){const n=new Qr;for(const s of In(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Yt(s.kind);An.vt.It(i,o)}return n.zt()}dn(e){const t=new Qr;return An.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Qr;return An.vt.It(Ts(this.databaseId,t),n.Yt(function(i){const o=In(i);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let s=[];s.push(new Qr);let i=0;for(const o of In(e)){const l=n[i++];for(const u of s)if(this.fn(t,o.fieldPath)&&As(l))s=this.gn(s,o,l);else{const d=u.Yt(o.kind);An.vt.It(l,d)}}return this.pn(s)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const l of s){const u=new Qr;u.seed(l.zt()),An.vt.It(o,u.Yt(t.kind)),i.push(u)}return i}fn(e,t){return!!e.filters.find(n=>n instanceof se&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Jr(e),s=Xn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(i=>{const o=[];return N.forEach(i,l=>s.get([l.indexId,this.uid]).next(u=>{o.push(function(m,g){const v=g?new xs(g.sequenceNumber,new st(Mn(g.readTime),new z(pt(g.documentKey)),g.largestBatchId)):xs.empty(),T=m.fields.map(([R,j])=>new Si(ve.fromServerFormat(R),j));return new Ki(m.indexId,m.collectionGroup,T,v)}(l,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:te(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Jr(e),i=Xn(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(l=>N.forEach(l,u=>i.put(jh(u.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return N.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?N.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(l=>(n.set(s.collectionGroup,l),N.forEach(l,u=>this.wn(e,s,u).next(d=>{const m=this.Sn(i,u);return d.isEqual(m)?N.resolve():this.bn(e,i,u,d,m)}))))})}Dn(e,t,n,s){return Yn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,s){return Yn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const s=Yn(e);let i=new de($t);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,l)=>{i=i.add(new Sn(n.indexId,t,l.arrayValue,l.directionalValue))}).next(()=>i)}Sn(e,t){let n=new de($t);const s=this.Vn(t,e);if(s==null)return n;const i=Ka(t);if(i!=null){const o=e.data.field(i.fieldPath);if(As(o))for(const l of o.arrayValue.values||[])n=n.add(new Sn(t.indexId,e.key,this.dn(l),s))}else n=n.add(new Sn(t.indexId,e.key,ui,s));return n}bn(e,t,n,s,i){F("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,d,m,g,v){const T=u.getIterator(),R=d.getIterator();let j=Jn(T),A=Jn(R);for(;j||A;){let D=!1,L=!1;if(j&&A){const P=m(j,A);P<0?L=!0:P>0&&(D=!0)}else j!=null?L=!0:D=!0;D?(g(A),A=Jn(R)):L?(v(j),j=Jn(T)):(j=Jn(T),A=Jn(R))}}(s,i,$t,l=>{o.push(this.Dn(e,t,n,l))},l=>{o.push(this.vn(e,t,n,l))}),N.waitFor(o)}yn(e){let t=1;return Xn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,l)=>$t(o,l)).filter((o,l,u)=>!l||$t(o,u[l-1])!==0);const s=[];s.push(e);for(const o of n){const l=$t(o,e),u=$t(o,t);if(l===0)s[0]=e.Zt();else if(l>0&&u<0)s.push(o),s.push(o.Zt());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const l=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,ui,[]],u=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,ui,[]];i.push(IDBKeyRange.bound(l,u))}return i}Cn(e,t){return $t(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next($h)}getMinOffset(e,t){return N.mapArray(this.hn(t),n=>this.Pn(e,n).next(s=>s||G())).next($h)}}function qh(r){return Pe(r,"collectionParents")}function Yn(r){return Pe(r,"indexEntries")}function Jr(r){return Pe(r,"indexConfiguration")}function Xn(r){return Pe(r,"indexState")}function $h(r){J(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;jl(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new st(e.readTime,e.documentKey,t)}/**
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
 */const zh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Je{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Je(e,Je.DEFAULT_COLLECTION_PERCENTILE,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Om(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let l=0;const u=n.J({range:o},(m,g,v)=>(l++,v.delete()));i.push(u.next(()=>{J(l===1)}));const d=[];for(const m of t.mutations){const g=Lf(e,m.key.path,t.batchId);i.push(s.delete(g)),d.push(m.key)}return N.waitFor(i).next(()=>d)}function Zi(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw G();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Je.DEFAULT_COLLECTION_PERCENTILE=10,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Je.DEFAULT=new Je(41943040,Je.DEFAULT_COLLECTION_PERCENTILE,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Je.DISABLED=new Je(-1,0,0);class Ao{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(e,t,n,s){J(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Ao(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).J({index:"userMutationsIndex",range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=ir(e),o=zt(e);return o.add({}).next(l=>{J(typeof l=="number");const u=new $l(l,t,n,s),d=function(T,R,j){const A=j.baseMutations.map(L=>Ji(T.ct,L)),D=j.mutations.map(L=>Ji(T.ct,L));return{userId:R,batchId:j.batchId,localWriteTimeMs:j.localWriteTime.toMillis(),baseMutations:A,mutations:D}}(this.serializer,this.userId,u),m=[];let g=new de((v,T)=>te(v.canonicalString(),T.canonicalString()));for(const v of s){const T=Lf(this.userId,v.key.path,l);g=g.add(v.key.path.popLast()),m.push(o.put(d)),m.push(i.put(T,nx))}return g.forEach(v=>{m.push(this.indexManager.addToCollectionParentIndex(e,v))}),e.addOnCommittedListener(()=>{this.Fn[l]=u.keys()}),N.waitFor(m).next(()=>u)})}lookupMutationBatch(e,t){return zt(e).get(t).next(n=>n?(J(n.userId===this.userId),Tn(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?N.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return zt(e).J({index:"userMutationsIndex",range:s},(o,l,u)=>{l.userId===this.userId&&(J(l.batchId>=n),i=Tn(this.serializer,l)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return zt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).U("userMutationsIndex",t).next(n=>n.map(s=>Tn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ni(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return ir(e).J({range:s},(o,l,u)=>{const[d,m,g]=o,v=pt(m);if(d===this.userId&&t.path.isEqual(v))return zt(e).get(g).next(T=>{if(!T)throw G();J(T.userId===this.userId),i.push(Tn(this.serializer,T))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new de(te);const s=[];return t.forEach(i=>{const o=Ni(this.userId,i.path),l=IDBKeyRange.lowerBound(o),u=ir(e).J({range:l},(d,m,g)=>{const[v,T,R]=d,j=pt(T);v===this.userId&&i.path.isEqual(j)?n=n.add(R):g.done()});s.push(u)}),N.waitFor(s).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=Ni(this.userId,n),o=IDBKeyRange.lowerBound(i);let l=new de(te);return ir(e).J({range:o},(u,d,m)=>{const[g,v,T]=u,R=pt(v);g===this.userId&&n.isPrefixOf(R)?R.length===s&&(l=l.add(T)):m.done()}).next(()=>this.xn(e,l))}xn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(zt(e).get(i).next(o=>{if(o===null)throw G();J(o.userId===this.userId),n.push(Tn(this.serializer,o))}))}),N.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return Om(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),N.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return N.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return ir(e).J({range:n},(i,o,l)=>{if(i[0]===this.userId){const u=pt(i[1]);s.push(u)}else l.done()}).next(()=>{J(s.length===0)})})}containsKey(e,t){return Mm(e,this.userId,t)}Nn(e){return Lm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Mm(r,e,t){const n=Ni(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return ir(r).J({range:i,H:!0},(l,u,d)=>{const[m,g,v]=l;m===e&&g===s&&(o=!0),d.done()}).next(()=>o)}function zt(r){return Pe(r,"mutations")}function ir(r){return Pe(r,"documentMutations")}function Lm(r){return Pe(r,"mutationQueues")}/**
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
 */class Ln{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ln(0)}static kn(){return new Ln(-1)}}/**
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
 */class b0{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new Ln(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Y.fromTimestamp(new xe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Zn(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(J(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return Zn(e).J((o,l)=>{const u=is(l);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))}).next(()=>N.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Zn(e).J((n,s)=>{const i=is(s);t(i)})}qn(e){return Kh(e).get("targetGlobalKey").next(t=>(J(t!==null),t))}Qn(e,t){return Kh(e).put("targetGlobalKey",t)}Kn(e,t){return Zn(e).put(km(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=jn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Zn(e).J({range:s,index:"queryTargetsIndex"},(o,l,u)=>{const d=is(l);Os(t,d.target)&&(i=d,u.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=Qt(e);return t.forEach(o=>{const l=He(o.path);s.push(i.put({targetId:n,path:l})),s.push(this.referenceDelegate.addReference(e,n,o))}),N.waitFor(s)}removeMatchingKeys(e,t,n){const s=Qt(e);return N.forEach(t,i=>{const o=He(i.path);return N.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=Qt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Qt(e);let i=ne();return s.J({range:n,H:!0},(o,l,u)=>{const d=pt(o[1]),m=new z(d);i=i.add(m)}).next(()=>i)}containsKey(e,t){const n=He(t.path),s=IDBKeyRange.bound([n],[Cf(n)],!1,!0);let i=0;return Qt(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,l],u,d)=>{o!==0&&(i++,d.done())}).next(()=>i>0)}ot(e,t){return Zn(e).get(t).next(n=>n?is(n):null)}}function Zn(r){return Pe(r,"targets")}function Kh(r){return Pe(r,"targetGlobal")}function Qt(r){return Pe(r,"targetDocuments")}/**
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
 */function Gh([r,e],[t,n]){const s=te(r,t);return s===0?te(e,n):s}class v0{constructor(e){this.Un=e,this.buffer=new de(Gh),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Gh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class x0{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){F("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cn(t)?F("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ln(t)}await this.Hn(3e5)})}}class w0{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Ye.oe);const n=new v0(t);return this.Jn.forEachTarget(e,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(zh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zh):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,s,i,o,l,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(n=g,l=Date.now(),this.removeTargets(e,n,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(g=>(d=Date.now(),tr()<=re.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function I0(r,e){return new w0(r,e)}/**
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
 */class E0{constructor(e,t){this.db=e,this.garbageCollector=I0(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,s)=>t(s))}addReference(e,t,n){return hi(e,n)}removeReference(e,t,n){return hi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return hi(e,t)}nr(e,t){return function(s,i){let o=!1;return Lm(s).Y(l=>Mm(s,l,i).next(u=>(u&&(o=!0),N.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,l)=>{if(l<=t){const u=this.nr(e,o).next(d=>{if(!d)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,Y.min()),Qt(e).delete(function(g){return[0,He(g.path)]}(o))))});s.push(u)}}).next(()=>N.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return hi(e,t)}tr(e,t){const n=Qt(e);let s,i=Ye.oe;return n.J({index:"documentTargetsIndex"},([o,l],{path:u,sequenceNumber:d})=>{o===0?(i!==Ye.oe&&t(new z(pt(s)),i),i=d,s=u):i=Ye.oe}).next(()=>{i!==Ye.oe&&t(new z(pt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function hi(r,e){return Qt(r).put(function(n,s){return{targetId:0,path:He(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
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
 */class Fm{constructor(){this.changes=new un(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?N.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class T0{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return bn(e).put(n)}removeEntry(e,t,n){return bn(e).delete(function(i,o){const l=i.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Yi(o),l[l.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=Ie.newInvalidDocument(t);return bn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Yr(t))},(s,i)=>{n=this.ir(t,i)}).next(()=>n)}sr(e,t){let n={size:0,document:Ie.newInvalidDocument(t)};return bn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Yr(t))},(s,i)=>{n={document:this.ir(t,i),size:Zi(i)}}).next(()=>n)}getEntries(e,t){let n=tt();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);n=n.insert(s,o)}).next(()=>n)}ar(e,t){let n=tt(),s=new pe(z.comparator);return this._r(e,t,(i,o)=>{const l=this.ir(i,o);n=n.insert(i,l),s=s.insert(i,Zi(o))}).next(()=>({documents:n,ur:s}))}_r(e,t,n){if(t.isEmpty())return N.resolve();let s=new de(Qh);t.forEach(u=>s=s.add(u));const i=IDBKeyRange.bound(Yr(s.first()),Yr(s.last())),o=s.getIterator();let l=o.getNext();return bn(e).J({index:"documentKeyIndex",range:i},(u,d,m)=>{const g=z.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;l&&Qh(l,g)<0;)n(l,null),l=o.getNext();l&&l.isEqual(g)&&(n(l,d),l=o.hasNext()?o.getNext():null),l?m.$(Yr(l)):m.done()}).next(()=>{for(;l;)n(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),Yi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return bn(e).U(IDBKeyRange.bound(l,u,!0)).next(d=>{i?.incrementDocumentReadCount(d.length);let m=tt();for(const g of d){const v=this.ir(z.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);v.isFoundDocument()&&(Fs(t,v)||s.has(v.key))&&(m=m.insert(v.key,v))}return m})}getAllFromCollectionGroup(e,t,n,s){let i=tt();const o=Hh(t,n),l=Hh(t,st.max());return bn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,l,!0)},(u,d,m)=>{const g=this.ir(z.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&m.done()}).next(()=>i)}newChangeBuffer(e){return new A0(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Wh(e).get("remoteDocumentGlobalKey").next(t=>(J(!!t),t))}rr(e,t){return Wh(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=c0(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(Y.min())))return n}return Ie.newInvalidDocument(e)}}function Um(r){return new T0(r)}class A0 extends Fm{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new un(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new de((i,o)=>te(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const l=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,l.readTime)),o.isValidDocument()){const u=Dh(this.cr.serializer,o);s=s.add(i.path.popLast());const d=Zi(u);n+=d-l.size,t.push(this.cr.addEntry(e,i,u))}else if(n-=l.size,this.trackRemovals){const u=Dh(this.cr.serializer,o.convertToNoDocument(Y.min()));t.push(this.cr.addEntry(e,i,u))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,n)),N.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function Wh(r){return Pe(r,"remoteDocumentGlobal")}function bn(r){return Pe(r,"remoteDocumentsV14")}function Yr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Hh(r,e){const t=e.documentKey.path.toArray();return[r,Yi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Qh(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=te(t[i],n[i]),s)return s;return s=te(t.length,n.length),s||(s=te(t[t.length-2],n[n.length-2]),s||te(t[t.length-1],n[n.length-1]))}/**
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
 */class S0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Bm{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&fs(n.mutation,s,Xe.empty(),xe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ne()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ne()){const s=gt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=rs();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=gt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ne()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,n,s){let i=tt();const o=ds(),l=function(){return ds()}();return t.forEach((u,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Lt)?i=i.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),fs(m.mutation,d,m.mutation.getFieldMask(),xe.now())):o.set(d.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>o.set(d,m)),t.forEach((d,m)=>{var g;return l.set(d,new S0(m,(g=o.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const n=ds();let s=new pe((o,l)=>o-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=n.get(u)||Xe.empty();m=l.applyToLocalView(d,m),n.set(u,m);const g=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,g=am();m.forEach(v=>{if(!i.has(v)){const T=mm(t.get(v),n.get(v));T!==null&&g.set(v,T),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return N.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):N.resolve(gt());let l=-1,u=i;return o.next(d=>N.forEach(d,(m,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(m)?N.resolve():this.remoteDocumentCache.getEntry(e,m).next(v=>{u=u.insert(m,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,ne())).next(m=>({batchId:l,changes:om(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(n=>{let s=rs();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=rs();return this.indexManager.getCollectionParents(e,i).next(l=>N.forEach(l,u=>{const d=function(g,v){return new Ms(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next(m=>{m.forEach((g,v)=>{o=o.insert(g,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((u,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,Ie.newInvalidDocument(m)))});let l=rs();return o.forEach((u,d)=>{const m=i.get(u);m!==void 0&&fs(m.mutation,d,Xe.empty(),xe.now()),Fs(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class N0{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Qe(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Dm(s.bundledQuery),readTime:Qe(s.readTime)}}(t)),N.resolve()}}/**
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
 */class R0{constructor(){this.overlays=new pe(z.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const n=gt();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.ht(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),N.resolve()}getOverlaysForCollection(e,t,n){const s=gt(),i=t.length+1,o=new z(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new pe((d,m)=>d-m);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=gt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=gt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return N.resolve(l)}ht(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Kl(t,n));let i=this.Ir.get(t);i===void 0&&(i=ne(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}/**
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
 */class P0{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class Jl{constructor(){this.Tr=new de(Ce.Er),this.dr=new de(Ce.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Ce(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Ce(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new z(new ue([])),n=new Ce(t,e),s=new Ce(t,e+1),i=[];return this.dr.forEachInRange([n,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new z(new ue([])),n=new Ce(t,e),s=new Ce(t,e+1);let i=ne();return this.dr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ce(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ce{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return z.comparator(e.key,t.key)||te(e.wr,t.wr)}static Ar(e,t){return te(e.wr,t.wr)||z.comparator(e.key,t.key)}}/**
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
 */class C0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new de(Ce.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $l(i,t,n,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Ce(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.vr(n),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],o=>{const l=this.Dr(o.wr);i.push(l)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new de(te);return t.forEach(s=>{const i=new Ce(s,0),o=new Ce(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{n=n.add(l.wr)})}),N.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;z.isDocumentKey(i)||(i=i.child(""));const o=new Ce(new z(i),0);let l=new de(te);return this.br.forEachWhile(u=>{const d=u.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.wr)),!0)},o),N.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(n=>{const s=this.Dr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return N.forEach(t.mutations,s=>{const i=new Ce(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Ce(t,0),s=this.br.firstAfterOrEqual(n);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class k0{constructor(e){this.Mr=e,this.docs=function(){return new pe(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return N.resolve(n?n.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let n=tt();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Ie.newInvalidDocument(s))}),N.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=tt();const o=t.path,l=new z(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||jl(Df(m),n)<=0||(s.has(m.key)||Fs(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,n,s){G()}Or(e,t){return N.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new D0(this)}getSize(e){return N.resolve(this.size)}}class D0 extends Fm{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(n)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class V0{constructor(e){this.persistence=e,this.Nr=new un(t=>jn(t),Os),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jl,this.targetCount=0,this.kr=Ln.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Ln(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return N.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),N.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return N.resolve(n)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
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
 */class qm{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ye(0),this.Kr=!1,this.Kr=!0,this.$r=new P0,this.referenceDelegate=e(this),this.Ur=new V0(this),this.indexManager=new _0,this.remoteDocumentCache=function(s){return new k0(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Cm(t),this.Gr=new N0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new R0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new C0(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){F("MemoryPersistence","Starting transaction:",e);const s=new j0(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return N.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class j0 extends jf{constructor(e){super(),this.currentSequenceNumber=e}}class So{constructor(e){this.persistence=e,this.Jr=new Jl,this.Yr=null}static Zr(e){return new So(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),N.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,n=>{const s=z.fromPath(n);return this.ei(e,s).next(i=>{i||t.removeEntry(s,Y.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class O0{constructor(e){this.serializer=e}O(e,t,n,s){const i=new yo("createOrUpgrade",t);n<1&&s>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ch,{unique:!0}),u.createObjectStore("documentMutations")}(e),Jh(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=N.resolve();return n<3&&s>=3&&(n!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Jh(e)),o=o.next(()=>function(u){const d=u.store("targetGlobal"),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Y.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",m)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(u,d){return d.store("mutations").U().next(m=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ch,{unique:!0});const g=d.store("mutations"),v=m.map(T=>g.put(T));return N.waitFor(v)})}(e,i))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.ni(i))),n<6&&s>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),n<7&&s>=7&&(o=o.next(()=>this.ii(i))),n<8&&s>=8&&(o=o.next(()=>this.si(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.oi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(u){const d=u.createObjectStore("documentOverlays",{keyPath:mx});d.createIndex("collectionPathOverlayIndex",px,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",gx,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(u){const d=u.createObjectStore("remoteDocumentsV14",{keyPath:rx});d.createIndex("documentKeyIndex",sx),d.createIndex("collectionGroupIndex",ix)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),n<15&&s>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:ux}).createIndex("sequenceNumberIndex",hx,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:dx}).createIndex("documentKeyIndex",fx,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=Zi(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>N.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(l=>N.forEach(l,u=>{J(u.userId===i.userId);const d=Tn(this.serializer,u);return Om(e,i.userId,d).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((o,l)=>{const u=new ue(o),d=function(g){return[0,He(g)]}(u);i.push(t.get(d).next(m=>m?N.resolve():(g=>t.put({targetId:0,path:He(g),sequenceNumber:s.highestListenSequenceNumber}))(u)))}).next(()=>N.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:cx});const n=t.store("collectionParents"),s=new Ql,i=o=>{if(s.add(o)){const l=o.lastSegment(),u=o.popLast();return n.put({collectionId:l,parent:He(u)})}};return t.store("remoteDocuments").J({H:!0},(o,l)=>{const u=new ue(o);return i(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,l,u],d)=>{const m=pt(l);return i(m.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,s)=>{const i=is(s),o=km(this.serializer,i);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((i,o)=>{const l=t.store("remoteDocumentsV14"),u=function(g){return g.document?new z(ue.fromString(g.document.name).popFirst(5)):g.noDocument?z.fromSegments(g.noDocument.path):g.unknownDocument?z.fromSegments(g.unknownDocument.path):G()}(o).path.toArray(),d={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(l.put(d))}).next(()=>N.waitFor(s))}ai(e,t){const n=t.store("mutations"),s=Um(this.serializer),i=new qm(So.Zr,this.serializer.ct);return n.U().next(o=>{const l=new Map;return o.forEach(u=>{var d;let m=(d=l.get(u.userId))!==null&&d!==void 0?d:ne();Tn(this.serializer,u).keys().forEach(g=>m=m.add(g)),l.set(u.userId,m)}),N.forEach(l,(u,d)=>{const m=new Ue(d),g=To.lt(this.serializer,m),v=i.getIndexManager(m),T=Ao.lt(m,this.serializer,v,i.referenceDelegate);return new Bm(s,T,g,v).recalculateAndSaveOverlaysForDocumentKeys(new Ga(t,Ye.oe),u).next()})})}}function Jh(r){r.createObjectStore("targetDocuments",{keyPath:ax}).createIndex("documentTargetsIndex",lx,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ox,{unique:!0}),r.createObjectStore("targetGlobal")}const _a="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Yl{constructor(e,t,n,s,i,o,l,u,d,m,g=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=o,this.document=l,this.ci=d,this.li=m,this.hi=g,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=v=>Promise.resolve(),!Yl.D())throw new $(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new E0(this,s),this.Ai=t+"main",this.serializer=new Cm(u),this.Ri=new en(this.Ai,this.hi,new O0(this.serializer)),this.$r=new h0,this.Ur=new b0(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Um(this.serializer),this.Gr=new u0,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,m===!1&&Te("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new $(V.FAILED_PRECONDITION,_a);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Ye(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>di(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(cn(e))return F("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return F("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Xr(e).get("owner").next(t=>N.resolve(this.vi(t)))}Ci(e){return di(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Pe(t,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(l=>i.indexOf(l)===-1);return N.forEach(o,l=>n.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?N.resolve(!0):Xr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new $(V.FAILED_PRECONDITION,_a);return!1}}return!(!this.networkEnabled||!this.inForeground)||di(e).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,l=this.networkEnabled===s.networkEnabled;if(i||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&F("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ga(e,Ye.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>di(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Ao.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new y0(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return To.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){F("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(u){return u===17?bx:u===16?yx:u===15?Ml:u===14?Bf:u===13?Uf:u===12?_x:u===11?Ff:void G()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,l=>(o=new Ga(l,this.Qr?this.Qr.next():Ye.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw Te(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new $(V.FAILED_PRECONDITION,Vf);return n(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>n(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Ki(e){return Xr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new $(V.FAILED_PRECONDITION,_a)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Xr(e).put("owner",t)}static D(){return en.D()}bi(e){const t=Xr(e);return t.get("owner").next(n=>this.vi(n)?(F("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):N.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Te(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Od()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return F("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Te("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Te("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Xr(r){return Pe(r,"owner")}function di(r){return Pe(r,"clientMetadata")}function $m(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Xl{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=s}static Wi(e,t){let n=ne(),s=ne();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Xl(e,t.fromCache,n,s)}}/**
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
 */class M0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zm{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Od()?8:Of(Re())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new M0;return this.Xi(e,t,o).next(l=>{if(i.result=l,this.zi)return this.es(e,t,o,l.size)})}).next(()=>i.result)}es(e,t,n,s){return n.documentReadCount<this.ji?(tr()<=re.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",nr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(tr()<=re.DEBUG&&F("QueryEngine","Query:",nr(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(tr()<=re.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",nr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):N.resolve())}Yi(e,t){if(wh(t))return N.resolve(null);let n=nt(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Za(t,null,"F"),n=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=ne(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,n).next(u=>{const d=this.ts(t,l);return this.ns(t,d,o,u.readTime)?this.Yi(e,Za(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,n,s){return wh(t)||s.isEqual(Y.min())?N.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const o=this.ts(t,i);return this.ns(t,o,n,s)?N.resolve(null):(tr()<=re.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),nr(t)),this.rs(e,o,t,kf(s,-1)).next(l=>l))})}ts(e,t){let n=new de(sm(e));return t.forEach((s,i)=>{Fs(e,i)&&(n=n.add(i))}),n}ns(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,n){return tr()<=re.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",nr(t)),this.Ji.getDocumentsMatchingQuery(e,t,st.min(),n)}rs(e,t,n,s){return this.Ji.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class L0{constructor(e,t,n,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new pe(te),this._s=new un(i=>jn(i),Os),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bm(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Km(r,e,t,n){return new L0(r,e,t,n)}async function Gm(r,e){const t=H(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],l=[];let u=ne();for(const d of s){o.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(n,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function F0(r,e){const t=H(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,m){const g=d.batch,v=g.keys();let T=N.resolve();return v.forEach(R=>{T=T.next(()=>m.getEntry(u,R)).next(j=>{const A=d.docVersions.get(R);J(A!==null),j.version.compareTo(A)<0&&(g.applyToRemoteDocument(j,d),j.isValidDocument()&&(j.setReadTime(d.commitVersion),m.addEntry(j)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let u=ne();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Wm(r){const e=H(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function U0(r,e){const t=H(r),n=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((m,g)=>{const v=s.get(g);if(!v)return;l.push(t.Ur.removeMatchingKeys(i,m.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(i,m.addedDocuments,g)));let T=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?T=T.withResumeToken(Ae.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):m.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(m.resumeToken,n)),s=s.insert(g,T),function(j,A,D){return j.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(v,T,m)&&l.push(t.Ur.updateTargetData(i,T))});let u=tt(),d=ne();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(B0(i,o,e.documentUpdates).next(m=>{u=m.Ps,d=m.Is})),!n.isEqual(Y.min())){const m=t.Ur.getLastRemoteSnapshotVersion(i).next(g=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));l.push(m)}return N.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.os=s,i))}function B0(r,e,t){let n=ne(),s=ne();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=tt();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):F("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function q0(r,e){const t=H(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function eo(r,e){const t=H(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Ur.getTargetData(n,e).next(i=>i?(s=i,N.resolve(s)):t.Ur.allocateTargetId(n).next(o=>(s=new kt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function wr(r,e,t){const n=H(r),s=n.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!cn(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(s.target)}function al(r,e,t){const n=H(r);let s=Y.min(),i=ne();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,m){const g=H(u),v=g._s.get(m);return v!==void 0?N.resolve(g.os.get(v)):g.Ur.getTargetData(d,m)}(n,o,nt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?s:Y.min(),t?i:ne())).next(l=>(Jm(n,rm(e),l),{documents:l,Ts:i})))}function Hm(r,e){const t=H(r),n=H(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,e).next(o=>o?o.target:null))}function Qm(r,e){const t=H(r),n=t.us.get(e)||Y.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,kf(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Jm(t,e,s),s))}function Jm(r,e,t){let n=r.us.get(e)||Y.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(e,n)}function Yh(r,e){return`firestore_clients_${r}_${e}`}function Xh(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function ya(r,e){return`firestore_targets_${r}_${e}`}class to{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Rs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new $(s.error.code,s.error.message))),o?new to(e,t,s.state,i):(Te("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ms{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new $(n.error.code,n.error.message))),i?new ms(e,n.state,s):(Te("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class no{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Bl();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=Mf(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new no(e,i):(Te("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Zl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Zl(t.clientId,t.onlineState):(Te("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ll{constructor(){this.activeTargetIds=Bl()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ba{constructor(e,t,n,s,i){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new pe(te),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Yh(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new ll),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const s=this.getItem(Yh(this.persistenceKey,n));if(s){const i=no.Rs(n,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(ya(this.persistenceKey,e));if(s){const i=ms.Rs(e,s);i&&(n=i.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ya(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return F("SharedClientState","READ",e,t),t}setItem(e,t){F("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){F("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(F("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Te("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(i){let o=Ye.oe;if(i!=null)try{const l=JSON.parse(i);J(typeof l=="number"),o=l}catch(l){Te("SharedClientState","Failed to read sequence number from WebStorage",l)}return o}(t.newValue);n!==Ye.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const s=new to(this.currentUser,e,t,n),i=Xh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=Xh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const s=ya(this.persistenceKey,e),i=new ms(e,t,n);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return no.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return to.Rs(new Ue(i),s,t)}Ys(e,t){const n=this.Ms.exec(e),s=Number(n[1]);return ms.Rs(s,t)}Ls(e){return Zl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);F("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(n),o=[],l=[];return i.forEach(u=>{s.has(u)||o.push(u)}),s.forEach(u=>{i.has(u)||l.push(u)}),this.syncEngine.io(o,l).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Bl();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Ym{constructor(){this.so=new ll,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ll,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $0{_o(e){}shutdown(){}}/**
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
 */class Zh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fi=null;function va(){return fi===null?fi=function(){return 268435456+Math.round(2147483648*Math.random())}():fi++,"0x"+fi.toString(16)}/**
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
 */const z0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class K0{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Fe="WebChannelConnection";class G0 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,n,s,i,o){const l=va(),u=this.xo(t,n.toUriEncodedString());F("RestConnection",`Sending RPC '${t}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(t,u,d,s).then(m=>(F("RestConnection",`Received RPC '${t}' ${l}: `,m),m),m=>{throw bs("RestConnection",`RPC '${t}' ${l} failed with error: `,m,"url: ",u,"request:",s),m})}Lo(t,n,s,i,o,l){return this.Mo(t,n,s,i,o)}Oo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,n){const s=z0[t];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,s){const i=va();return new Promise((o,l)=>{const u=new Tf;u.setWithCredentials(!0),u.listenOnce(Af.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ai.NO_ERROR:const m=u.getResponseJson();F(Fe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),o(m);break;case Ai.TIMEOUT:F(Fe,`RPC '${e}' ${i} timed out`),l(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ai.HTTP_ERROR:const g=u.getStatus();if(F(Fe,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const T=v?.error;if(T&&T.status&&T.message){const R=function(A){const D=A.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(D)>=0?D:V.UNKNOWN}(T.status);l(new $(R,T.message))}else l(new $(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(V.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{F(Fe,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);F(Fe,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,n,15)})}Bo(e,t,n){const s=va(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rf(),l=Nf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const m=i.join("");F(Fe,`Creating RPC '${e}' stream ${s}: ${m}`,u);const g=o.createWebChannel(m,u);let v=!1,T=!1;const R=new K0({Io:A=>{T?F(Fe,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(v||(F(Fe,`Opening RPC '${e}' stream ${s} transport.`),g.open(),v=!0),F(Fe,`RPC '${e}' stream ${s} sending:`,A),g.send(A))},To:()=>g.close()}),j=(A,D,L)=>{A.listen(D,P=>{try{L(P)}catch(B){setTimeout(()=>{throw B},0)}})};return j(g,ns.EventType.OPEN,()=>{T||(F(Fe,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),j(g,ns.EventType.CLOSE,()=>{T||(T=!0,F(Fe,`RPC '${e}' stream ${s} transport closed`),R.So())}),j(g,ns.EventType.ERROR,A=>{T||(T=!0,bs(Fe,`RPC '${e}' stream ${s} transport errored:`,A),R.So(new $(V.UNAVAILABLE,"The operation could not be completed")))}),j(g,ns.EventType.MESSAGE,A=>{var D;if(!T){const L=A.data[0];J(!!L);const P=L,B=P.error||((D=P[0])===null||D===void 0?void 0:D.error);if(B){F(Fe,`RPC '${e}' stream ${s} received error:`,B);const k=B.status;let M=function(b){const I=Se[b];if(I!==void 0)return _m(I)}(k),y=B.message;M===void 0&&(M=V.INTERNAL,y="Unknown error status: "+k+" with message "+B.message),T=!0,R.So(new $(M,y)),g.close()}else F(Fe,`RPC '${e}' stream ${s} received:`,L),R.bo(L)}}),j(l,Sf.STAT_EVENT,A=>{A.stat===za.PROXY?F(Fe,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===za.NOPROXY&&F(Fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}/**
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
 */function Xm(){return typeof window<"u"?window:null}function Di(){return typeof document<"u"?document:null}/**
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
 */function No(r){return new Zx(r,!0)}/**
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
 */class Zm{constructor(e,t,n=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-n);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ep{constructor(e,t,n,s,i,o,l,u){this.ui=e,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Zm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Te(t.toString()),Te("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===t&&this.P_(n,s)},n=>{e(()=>{const s=new $(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class W0 extends ep{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=n0(this.serializer,e),n=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Qe(o.readTime):Y.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=nl(this.serializer),t.addTarget=function(i,o){let l;const u=o.target;if(l=Wi(u)?{documents:Tm(i,u)}:{query:Am(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=vm(i,o.resumeToken);const d=el(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=xr(i,o.snapshotVersion.toTimestamp());const d=el(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const n=s0(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=nl(this.serializer),t.removeTarget=e,this.a_(t)}}class H0 extends ep{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return J(!!e.streamToken),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=r0(e.writeResults,e.commitTime),n=Qe(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=nl(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ji(this.serializer,n))};this.a_(t)}}/**
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
 */class Q0 extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,tl(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(V.UNKNOWN,i.toString())})}Lo(e,t,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,tl(t,n),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class J0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Te(t),this.D_=!1):F("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Y0{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{n.enqueueAndForget(async()=>{$n(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=H(u);d.L_.add(4),await qs(d),d.q_.set("Unknown"),d.L_.delete(4),await Ro(d)}(this))})}),this.q_=new J0(n,s)}}async function Ro(r){if($n(r))for(const e of r.B_)await e(!0)}async function qs(r){for(const e of r.B_)await e(!1)}function Po(r,e){const t=H(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),nc(t)?tc(t):Cr(t).r_()&&ec(t,e))}function Ir(r,e){const t=H(r),n=Cr(t);t.N_.delete(e),n.r_()&&tp(t,e),t.N_.size===0&&(n.r_()?n.o_():$n(t)&&t.q_.set("Unknown"))}function ec(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Cr(r).A_(e)}function tp(r,e){r.Q_.xe(e),Cr(r).R_(e)}function tc(r){r.Q_=new Qx({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),Cr(r).start(),r.q_.v_()}function nc(r){return $n(r)&&!Cr(r).n_()&&r.N_.size>0}function $n(r){return H(r).L_.size===0}function np(r){r.Q_=void 0}async function X0(r){r.q_.set("Online")}async function Z0(r){r.N_.forEach((e,t)=>{ec(r,e)})}async function ew(r,e){np(r),nc(r)?(r.q_.M_(e),tc(r)):r.q_.set("Unknown")}async function tw(r,e,t){if(r.q_.set("Online"),e instanceof bm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(r,e)}catch(n){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ro(r,n)}else if(e instanceof ki?r.Q_.Ke(e):e instanceof ym?r.Q_.He(e):r.Q_.We(e),!t.isEqual(Y.min()))try{const n=await Wm(r.localStore);t.compareTo(n)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.N_.get(d);m&&i.N_.set(d,m.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const m=i.N_.get(u);if(!m)return;i.N_.set(u,m.withResumeToken(Ae.EMPTY_BYTE_STRING,m.snapshotVersion)),tp(i,u);const g=new kt(m.target,u,d,m.sequenceNumber);ec(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){F("RemoteStore","Failed to raise snapshot:",n),await ro(r,n)}}async function ro(r,e,t){if(!cn(e))throw e;r.L_.add(1),await qs(r),r.q_.set("Offline"),t||(t=()=>Wm(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await Ro(r)})}function rp(r,e){return e().catch(t=>ro(r,t,e))}async function Pr(r){const e=H(r),t=on(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;nw(e);)try{const s=await q0(e.localStore,n);if(s===null){e.O_.length===0&&t.o_();break}n=s.batchId,rw(e,s)}catch(s){await ro(e,s)}sp(e)&&ip(e)}function nw(r){return $n(r)&&r.O_.length<10}function rw(r,e){r.O_.push(e);const t=on(r);t.r_()&&t.V_&&t.m_(e.mutations)}function sp(r){return $n(r)&&!on(r).n_()&&r.O_.length>0}function ip(r){on(r).start()}async function sw(r){on(r).p_()}async function iw(r){const e=on(r);for(const t of r.O_)e.m_(t.mutations)}async function ow(r,e,t){const n=r.O_.shift(),s=zl.from(n,e,t);await rp(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Pr(r)}async function aw(r,e){e&&on(r).V_&&await async function(n,s){if(function(o){return Gx(o)&&o!==V.ABORTED}(s.code)){const i=n.O_.shift();on(n).s_(),await rp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Pr(n)}}(r,e),sp(r)&&ip(r)}async function ed(r,e){const t=H(r);t.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const n=$n(t);t.L_.add(3),await qs(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ro(t)}async function cl(r,e){const t=H(r);e?(t.L_.delete(2),await Ro(t)):e||(t.L_.add(2),await qs(t),t.q_.set("Unknown"))}function Cr(r){return r.K_||(r.K_=function(t,n,s){const i=H(t);return i.w_(),new W0(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:X0.bind(null,r),Ro:Z0.bind(null,r),mo:ew.bind(null,r),d_:tw.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),nc(r)?tc(r):r.q_.set("Unknown")):(await r.K_.stop(),np(r))})),r.K_}function on(r){return r.U_||(r.U_=function(t,n,s){const i=H(t);return i.w_(),new H0(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:sw.bind(null,r),mo:aw.bind(null,r),f_:iw.bind(null,r),g_:ow.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await Pr(r)):(await r.U_.stop(),r.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class rc{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,l=new rc(e,t,o,s,i);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sc(r,e){if(Te("AsyncQueue",`${e}: ${r}`),cn(r))return new $(V.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class dr{constructor(e){this.comparator=e?(t,n)=>e(t,n)||z.comparator(t.key,n.key):(t,n)=>z.comparator(t.key,n.key),this.keyedMap=rs(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new dr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof dr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new dr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class td{constructor(){this.W_=new pe(z.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Er{constructor(e,t,n,s,i,o,l,u,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Er(e,t,dr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class lw{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class cw{constructor(){this.queries=nd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const s=H(t),i=s.queries;s.queries=nd(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(n)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function nd(){return new un(r=>nm(r),xo)}async function ic(r,e){const t=H(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(n=2):(i=new lw,n=e.J_()?0:1);try{switch(n){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=sc(o,`Initialization of query '${nr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&ac(t)}async function oc(r,e){const t=H(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function uw(r,e){const t=H(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(n=!0);o.z_=s}}n&&ac(t)}function hw(r,e,t){const n=H(r),s=n.queries.get(e);if(s)for(const i of s.j_)i.onError(t);n.queries.delete(e)}function ac(r){r.Y_.forEach(e=>{e.next()})}var ul,rd;(rd=ul||(ul={})).ea="default",rd.Cache="cache";class lc{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Er(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ul.Cache}}/**
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
 */class op{constructor(e){this.key=e}}class ap{constructor(e){this.key=e}}class dw{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=sm(e),this.Ra=new dr(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new td,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,g)=>{const v=s.get(m),T=Fs(this.query,g)?g:null,R=!!v&&this.mutatedKeys.has(v.key),j=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let A=!1;v&&T?v.data.isEqual(T.data)?R!==j&&(n.track({type:3,doc:T}),A=!0):this.ga(v,T)||(n.track({type:2,doc:T}),A=!0,(u&&this.Aa(T,u)>0||d&&this.Aa(T,d)<0)&&(l=!0)):!v&&T?(n.track({type:0,doc:T}),A=!0):v&&!T&&(n.track({type:1,doc:v}),A=!0,(u||d)&&(l=!0)),A&&(T?(o=o.add(T),i=j?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{Ra:o,fa:n,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((m,g)=>function(T,R){const j=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return j(T)-j(R)}(m.type,g.type)||this.Aa(m.doc,g.doc)),this.pa(n),s=s!=null&&s;const l=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new Er(this.query,e.Ra,i,o,e.mutatedKeys,u===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new td,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new ap(n))}),this.da.forEach(n=>{e.has(n)||t.push(new op(n))}),t}ba(e){this.Ta=e.Ts,this.da=ne();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Er.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class fw{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class mw{constructor(e){this.key=e,this.va=!1}}class pw{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new un(l=>nm(l),xo),this.Ma=new Map,this.xa=new Set,this.Oa=new pe(z.comparator),this.Na=new Map,this.La=new Jl,this.Ba={},this.ka=new Map,this.qa=Ln.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gw(r,e,t=!0){const n=Co(r);let s;const i=n.Fa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await lp(n,e,t,!0),s}async function _w(r,e){const t=Co(r);await lp(t,e,!0,!1)}async function lp(r,e,t,n){const s=await eo(r.localStore,nt(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let l;return n&&(l=await cc(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Po(r.remoteStore,s),l}async function cc(r,e,t,n,s){r.Ka=(g,v,T)=>async function(j,A,D,L){let P=A.view.ma(D);P.ns&&(P=await al(j.localStore,A.query,!1).then(({documents:y})=>A.view.ma(y,P)));const B=L&&L.targetChanges.get(A.targetId),k=L&&L.targetMismatches.get(A.targetId)!=null,M=A.view.applyChanges(P,j.isPrimaryClient,B,k);return hl(j,A.targetId,M.wa),M.snapshot}(r,g,v,T);const i=await al(r.localStore,e,!0),o=new dw(e,i.Ts),l=o.ma(i.documents),u=Bs.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=o.applyChanges(l,r.isPrimaryClient,u);hl(r,t,d.wa);const m=new fw(e,t,o);return r.Fa.set(e,m),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),d.snapshot}async function yw(r,e,t){const n=H(r),s=n.Fa.get(e),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(o=>!xo(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await wr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Ir(n.remoteStore,s.targetId),Tr(n,s.targetId)}).catch(ln)):(Tr(n,s.targetId),await wr(n.localStore,s.targetId,!0))}async function bw(r,e){const t=H(r),n=t.Fa.get(e),s=t.Ma.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Ir(t.remoteStore,n.targetId))}async function vw(r,e,t){const n=fc(r);try{const s=await function(o,l){const u=H(o),d=xe.now(),m=l.reduce((T,R)=>T.add(R.key),ne());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=tt(),j=ne();return u.cs.getEntries(T,m).next(A=>{R=A,R.forEach((D,L)=>{L.isValidDocument()||(j=j.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,R)).next(A=>{g=A;const D=[];for(const L of l){const P=zx(L,g.get(L.key).overlayedDocument);P!=null&&D.push(new Lt(L.key,P,Gf(P.value.mapValue),qe.exists(!0)))}return u.mutationQueue.addMutationBatch(T,d,D,l)}).next(A=>{v=A;const D=A.applyToLocalDocumentSet(g,j);return u.documentOverlayCache.saveOverlays(T,A.batchId,D)})}).then(()=>({batchId:v.batchId,changes:om(g)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new pe(te)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(n,s.batchId,t),await hn(n,s.changes),await Pr(n.remoteStore)}catch(s){const i=sc(s,"Failed to persist write");t.reject(i)}}async function cp(r,e){const t=H(r);try{const n=await U0(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?J(o.va):s.removedDocuments.size>0&&(J(o.va),o.va=!1))}),await hn(t,n,e)}catch(n){await ln(n)}}function sd(r,e,t){const n=H(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=H(o);u.onlineState=l;let d=!1;u.queries.forEach((m,g)=>{for(const v of g.j_)v.Z_(l)&&(d=!0)}),d&&ac(u)}(n.eventManager,e),s.length&&n.Ca.d_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function xw(r,e,t){const n=H(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Na.get(e),i=s&&s.key;if(i){let o=new pe(z.comparator);o=o.insert(i,Ie.newNoDocument(i,Y.min()));const l=ne().add(i),u=new Us(Y.min(),new Map,new pe(te),o,l);await cp(n,u),n.Oa=n.Oa.remove(i),n.Na.delete(e),dc(n)}else await wr(n.localStore,e,!1).then(()=>Tr(n,e,t)).catch(ln)}async function ww(r,e){const t=H(r),n=e.batch.batchId;try{const s=await F0(t.localStore,e);hc(t,n,null),uc(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await hn(t,s)}catch(s){await ln(s)}}async function Iw(r,e,t){const n=H(r);try{const s=await function(o,l){const u=H(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(J(g!==null),m=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(n.localStore,e);hc(n,e,t),uc(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await hn(n,s)}catch(s){await ln(s)}}function uc(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function hc(r,e,t){const n=H(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ba[n.currentUser.toKey()]=s}}function Tr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||up(r,n)})}function up(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(Ir(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),dc(r))}function hl(r,e,t){for(const n of t)n instanceof op?(r.La.addReference(n.key,e),Ew(r,n)):n instanceof ap?(F("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||up(r,n.key)):G()}function Ew(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(F("SyncEngine","New document in limbo: "+t),r.xa.add(n),dc(r))}function dc(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new z(ue.fromString(e)),n=r.qa.next();r.Na.set(n,new mw(t)),r.Oa=r.Oa.insert(t,n),Po(r.remoteStore,new kt(nt(Ls(t.path)),n,"TargetPurposeLimboResolution",Ye.oe))}}async function hn(r,e,t){const n=H(r),s=[],i=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((l,u)=>{o.push(n.Ka(u,e,t).then(d=>{var m;if((d||t)&&n.isPrimaryClient){const g=d?!d.fromCache:(m=t?.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Xl.Wi(u.targetId,d);i.push(g)}}))}),await Promise.all(o),n.Ca.d_(s),await async function(u,d){const m=H(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>N.forEach(d,v=>N.forEach(v.$i,T=>m.persistence.referenceDelegate.addReference(g,v.targetId,T)).next(()=>N.forEach(v.Ui,T=>m.persistence.referenceDelegate.removeReference(g,v.targetId,T)))))}catch(g){if(!cn(g))throw g;F("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const T=m.os.get(v),R=T.snapshotVersion,j=T.withLastLimboFreeSnapshotVersion(R);m.os=m.os.insert(v,j)}}}(n.localStore,i))}async function Tw(r,e){const t=H(r);if(!t.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const n=await Gm(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(V.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await hn(t,n.hs)}}function Aw(r,e){const t=H(r),n=t.Na.get(e);if(n&&n.va)return ne().add(n.key);{let s=ne();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const l=t.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}async function Sw(r,e){const t=H(r),n=await al(t.localStore,e.query,!0),s=e.view.ba(n);return t.isPrimaryClient&&hl(t,e.targetId,s.wa),s}async function Nw(r,e){const t=H(r);return Qm(t.localStore,e).then(n=>hn(t,n))}async function Rw(r,e,t,n){const s=H(r),i=await function(l,u){const d=H(l),m=H(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",g=>m.Mn(g,u).next(v=>v?d.localDocuments.getDocuments(g,v):N.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Pr(s.remoteStore):t==="acknowledged"||t==="rejected"?(hc(s,e,n||null),uc(s,e),function(l,u){H(H(l).mutationQueue).On(u)}(s.localStore,e)):G(),await hn(s,i)):F("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Pw(r,e){const t=H(r);if(Co(t),fc(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await id(t,n.toArray());t.Qa=!0,await cl(t.remoteStore,!0);for(const i of s)Po(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const n=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(Tr(t,o),wr(t.localStore,o,!0))),Ir(t.remoteStore,o)}),await s,await id(t,n),function(o){const l=H(o);l.Na.forEach((u,d)=>{Ir(l.remoteStore,d)}),l.La.pr(),l.Na=new Map,l.Oa=new pe(z.comparator)}(t),t.Qa=!1,await cl(t.remoteStore,!1)}}async function id(r,e,t){const n=H(r),s=[],i=[];for(const o of e){let l;const u=n.Ma.get(o);if(u&&u.length!==0){l=await eo(n.localStore,nt(u[0]));for(const d of u){const m=n.Fa.get(d),g=await Sw(n,m);g.snapshot&&i.push(g.snapshot)}}else{const d=await Hm(n.localStore,o);l=await eo(n.localStore,d),await cc(n,hp(d),o,!1,l.resumeToken)}s.push(l)}return n.Ca.d_(i),s}function hp(r){return em(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function Cw(r){return function(t){return H(H(t).persistence).Qi()}(H(r).localStore)}async function kw(r,e,t,n){const s=H(r);if(s.Qa)return void F("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Qm(s.localStore,rm(i[0])),l=Us.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ae.EMPTY_BYTE_STRING);await hn(s,o,l);break}case"rejected":await wr(s.localStore,e,!0),Tr(s,e,n);break;default:G()}}async function Dw(r,e,t){const n=Co(r);if(n.Qa){for(const s of e){if(n.Ma.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){F("SyncEngine","Adding an already active target "+s);continue}const i=await Hm(n.localStore,s),o=await eo(n.localStore,i);await cc(n,hp(i),o.targetId,!1,o.resumeToken),Po(n.remoteStore,o)}for(const s of t)n.Ma.has(s)&&await wr(n.localStore,s,!1).then(()=>{Ir(n.remoteStore,s),Tr(n,s)}).catch(ln)}}function Co(r){const e=H(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=cp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Aw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xw.bind(null,e),e.Ca.d_=uw.bind(null,e.eventManager),e.Ca.$a=hw.bind(null,e.eventManager),e}function fc(r){const e=H(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ww.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Iw.bind(null,e),e}class Ns{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=No(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Km(this.persistence,new zm,e.initialUser,this.serializer)}Ga(e){return new qm(So.Zr,this.serializer)}Wa(e){return new Ym}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ns.provider={build:()=>new Ns};class dp extends Ns{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await fc(this.Ja.syncEngine),await Pr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Km(this.persistence,new zm,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new x0(n,e.asyncQueue,t)}Ha(e,t){const n=new ex(t,this.persistence);return new Zv(e.asyncQueue,n)}Ga(e){const t=$m(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Je.withCacheSize(this.cacheSizeBytes):Je.DEFAULT;return new Yl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Xm(),Di(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Ym}}class Vw extends dp{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof ba&&(this.sharedClientState.syncEngine={no:Rw.bind(null,t),ro:kw.bind(null,t),io:Dw.bind(null,t),Qi:Cw.bind(null,t),eo:Nw.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await Pw(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=Xm();if(!ba.D(t))throw new $(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=$m(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ba(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Rs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>sd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tw.bind(null,this.syncEngine),await cl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cw}()}createDatastore(e){const t=No(e.databaseInfo.databaseId),n=function(i){return new G0(i)}(e.databaseInfo);return function(i,o,l,u){return new Q0(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,l){return new Y0(n,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>sd(this.syncEngine,t,0),function(){return Zh.D()?new Zh:new $0}())}createSyncEngine(e,t){return function(s,i,o,l,u,d,m){const g=new pw(s,i,o,l,u,d);return m&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=H(s);F("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await qs(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Rs.provider={build:()=>new Rs};/**
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
 */class mc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Te("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class jw{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=Pf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{F("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(F("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=sc(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function xa(r,e){r.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Gm(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function od(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Ow(r);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>ed(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>ed(e.remoteStore,s)),r._onlineComponents=e}async function Ow(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await xa(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;bs("Error using user provided cache. Falling back to memory cache: "+t),await xa(r,new Ns)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await xa(r,new Ns);return r._offlineComponents}async function fp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await od(r,r._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await od(r,new Rs))),r._onlineComponents}function Mw(r){return fp(r).then(e=>e.syncEngine)}async function so(r){const e=await fp(r),t=e.eventManager;return t.onListen=gw.bind(null,e.syncEngine),t.onUnlisten=yw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_w.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bw.bind(null,e.syncEngine),t}function Lw(r,e,t={}){const n=new vt;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const m=new mc({next:v=>{m.Za(),o.enqueueAndForget(()=>oc(i,g));const T=v.docs.has(l);!T&&v.fromCache?d.reject(new $(V.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&v.fromCache&&u&&u.source==="server"?d.reject(new $(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new lc(Ls(l.path),m,{includeMetadataChanges:!0,_a:!0});return ic(i,g)}(await so(r),r.asyncQueue,e,t,n)),n.promise}function Fw(r,e,t={}){const n=new vt;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const m=new mc({next:v=>{m.Za(),o.enqueueAndForget(()=>oc(i,g)),v.fromCache&&u.source==="server"?d.reject(new $(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new lc(l,m,{includeMetadataChanges:!0,_a:!0});return ic(i,g)}(await so(r),r.asyncQueue,e,t,n)),n.promise}/**
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
 */function mp(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const ad=new Map;/**
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
 */function pp(r,e,t){if(!t)throw new $(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Uw(r,e,t,n){if(e===!0&&n===!0)throw new $(V.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ld(r){if(!z.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function cd(r){if(z.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ko(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":G()}function rt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ko(r);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class ud{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Uw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mp((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pc{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ud({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ud(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $v;switch(n.type){case"firstParty":return new Gv(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ad.get(t);n&&(F("ComponentProvider","Removing Datastore"),ad.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class zn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new zn(this.firestore,e,this._query)}}class $e{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}}class tn extends zn{constructor(e,t,n){super(e,t,Ls(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new z(e))}withConverter(e){return new tn(this.firestore,e,this._path)}}function We(r,e,...t){if(r=Ne(r),pp("collection","path",e),r instanceof pc){const n=ue.fromString(e,...t);return cd(n),new tn(r,null,n)}{if(!(r instanceof $e||r instanceof tn))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ue.fromString(e,...t));return cd(n),new tn(r.firestore,null,n)}}function ht(r,e,...t){if(r=Ne(r),arguments.length===1&&(e=Pf.newId()),pp("doc","path",e),r instanceof pc){const n=ue.fromString(e,...t);return ld(n),new $e(r,null,new z(n))}{if(!(r instanceof $e||r instanceof tn))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ue.fromString(e,...t));return ld(n),new $e(r.firestore,r instanceof tn?r.converter:null,new z(n))}}/**
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
 */class hd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Zm(this,"async_queue_retry"),this.Vu=()=>{const n=Di();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=Di();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Di();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new vt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!cn(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(n);throw Te("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=rc.createAndSchedule(this,e,t,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function dd(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class Ot extends pc{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new hd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hd(e),this._firestoreClient=void 0,await e}}}function Bw(r,e,t){t||(t="(default)");const n=fo(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(ps(i,e))return s;throw new $(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new $(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function Do(r){if(r._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||qw(r),r._firestoreClient}function qw(r){var e,t,n;const s=r._freezeSettings(),i=function(l,u,d,m){return new xx(l,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,mp(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new jw(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(l){const u=l?._online.build();return{_offline:l?._offline.build(u),_online:u}}(r._componentsProvider))}/**
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
 */class Ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ar(Ae.fromBase64String(e))}catch(t){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ar(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jo{constructor(e){this._methodName=e}}/**
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
 */class gc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */class _c{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const $w=/^__.*__$/;class zw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Rr(e,this.data,t,this.fieldTransforms)}}class gp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function _p(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class yc{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new yc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.Ou(e),s}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return io(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_p(this.Cu)&&$w.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Kw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||No(e)}Qu(e,t,n,s=!1){return new yc({Cu:e,methodName:t,qu:n,path:ve.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oo(r){const e=r._freezeSettings(),t=No(r._databaseId);return new Kw(r._databaseId,!!e.ignoreUndefinedProperties,t)}function yp(r,e,t,n,s,i={}){const o=r.Qu(i.merge||i.mergeFields?2:0,e,t,s);vc("Data must be an object, but it was:",o,n);const l=bp(n,o);let u,d;if(i.merge)u=new Xe(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const v=dl(e,g,t);if(!o.contains(v))throw new $(V.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);xp(m,v)||m.push(v)}u=new Xe(m),d=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=o.fieldTransforms;return new zw(new Be(l),u,d)}class Mo extends jo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mo}}class bc extends jo{_toFieldTransform(e){return new fm(e.path,new yr)}isEqual(e){return e instanceof bc}}function Gw(r,e,t,n){const s=r.Qu(1,e,t);vc("Data must be an object, but it was:",s,n);const i=[],o=Be.empty();qn(n,(u,d)=>{const m=xc(e,u,t);d=Ne(d);const g=s.Nu(m);if(d instanceof Mo)i.push(m);else{const v=$s(d,g);v!=null&&(i.push(m),o.set(m,v))}});const l=new Xe(i);return new gp(o,l,s.fieldTransforms)}function Ww(r,e,t,n,s,i){const o=r.Qu(1,e,t),l=[dl(e,n,t)],u=[s];if(i.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(dl(e,i[v])),u.push(i[v+1]);const d=[],m=Be.empty();for(let v=l.length-1;v>=0;--v)if(!xp(d,l[v])){const T=l[v];let R=u[v];R=Ne(R);const j=o.Nu(T);if(R instanceof Mo)d.push(T);else{const A=$s(R,j);A!=null&&(d.push(T),m.set(T,A))}}const g=new Xe(d);return new gp(m,g,o.fieldTransforms)}function Hw(r,e,t,n=!1){return $s(t,r.Qu(n?4:3,e))}function $s(r,e){if(vp(r=Ne(r)))return vc("Unsupported field value:",e,r),bp(r,e);if(r instanceof jo)return function(n,s){if(!_p(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const l of n){let u=$s(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Lx(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=xe.fromDate(n);return{timestampValue:xr(s.serializer,i)}}if(n instanceof xe){const i=new xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xr(s.serializer,i)}}if(n instanceof gc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ar)return{bytesValue:vm(s.serializer,n._byteString)};if(n instanceof $e){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wl(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof _c)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ql(l.serializer,u)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${ko(n)}`)}(r,e)}function bp(r,e){const t={};return qf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qn(r,(n,s)=>{const i=$s(s,e.Mu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function vp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof xe||r instanceof gc||r instanceof Ar||r instanceof $e||r instanceof jo||r instanceof _c)}function vc(r,e,t){if(!vp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=ko(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function dl(r,e,t){if((e=Ne(e))instanceof Vo)return e._internalPath;if(typeof e=="string")return xc(r,e);throw io("Field path arguments must be of type string or ",r,!1,void 0,t)}const Qw=new RegExp("[~\\*/\\[\\]]");function xc(r,e,t){if(e.search(Qw)>=0)throw io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Vo(...e.split("."))._internalPath}catch{throw io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function io(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new $(V.INVALID_ARGUMENT,l+r+u)}function xp(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class wp{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Jw extends wp{data(){return super.data()}}function wc(r,e){return typeof e=="string"?xc(r,e):e instanceof Vo?e._internalPath:e._delegate._internalPath}/**
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
 */function Ip(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ic{}class Yw extends Ic{}function fl(r,e,...t){let n=[];e instanceof Ic&&n.push(e),n=n.concat(t),function(i){const o=i.filter(u=>u instanceof Ec).length,l=i.filter(u=>u instanceof Lo).length;if(o>1||o>0&&l>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Lo extends Yw{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Lo(e,t,n)}_apply(e){const t=this._parse(e);return Ep(e._query,t),new zn(e.firestore,e.converter,Xa(e._query,t))}_parse(e){const t=Oo(e.firestore);return function(i,o,l,u,d,m,g){let v;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){md(g,m);const T=[];for(const R of g)T.push(fd(u,i,R));v={arrayValue:{values:T}}}else v=fd(u,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||md(g,m),v=Hw(l,o,g,m==="in"||m==="not-in");return se.create(d,m,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ml(r,e,t){const n=e,s=wc("where",r);return Lo._create(s,n,t)}class Ec extends Ic{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ec(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:he.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)Ep(o,u),o=Xa(o,u)}(e._query,t),new zn(e.firestore,e.converter,Xa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function fd(r,e,t){if(typeof(t=Ne(t))=="string"){if(t==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tm(e)&&t.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ue.fromString(t));if(!z.isDocumentKey(n))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ts(r,new z(n))}if(t instanceof $e)return Ts(r,t._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ko(t)}.`)}function md(r,e){if(!Array.isArray(r)||r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ep(r,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Xw{convertValue(e,t="none"){switch(Vn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return qn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>ye(o.doubleValue));return new _c(i)}convertGeoPoint(e){return new gc(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Fl(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const t=jt(e);return new xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ue.fromString(e);J(Pm(n));const s=new Dn(n.get(1),n.get(3)),i=new z(n.popFirst(5));return s.isEqual(t)||Te(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Tp(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
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
 */class os{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ap extends wp{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(wc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Vi extends Ap{data(e={}){return super.data(e)}}class Sp{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new os(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Vi(this._firestore,this._userDataWriter,n.key,n,new os(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Vi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new os(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Vi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new os(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),m=o.indexOf(l.doc.key)),{type:Zw(l.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Zw(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function mi(r){r=rt(r,$e);const e=rt(r.firestore,Ot);return Lw(Do(e),r._key).then(t=>Np(e,r,t))}class Tc extends Xw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ar(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,t)}}function at(r){r=rt(r,zn);const e=rt(r.firestore,Ot),t=Do(e),n=new Tc(e);return Ip(r._query),Fw(t,r._query).then(s=>new Sp(e,n,r,s))}function eI(r,e,t){r=rt(r,$e);const n=rt(r.firestore,Ot),s=Tp(r.converter,e,t);return Fo(n,[yp(Oo(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,qe.none())])}function wa(r,e,t,...n){r=rt(r,$e);const s=rt(r.firestore,Ot),i=Oo(s);let o;return o=typeof(e=Ne(e))=="string"||e instanceof Vo?Ww(i,"updateDoc",r._key,e,t,n):Gw(i,"updateDoc",r._key,e),Fo(s,[o.toMutation(r._key,qe.exists(!0))])}function tI(r){return Fo(rt(r.firestore,Ot),[new Eo(r._key,qe.none())])}function Ac(r,e){const t=rt(r.firestore,Ot),n=ht(r),s=Tp(r.converter,e);return Fo(t,[yp(Oo(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,qe.exists(!1))]).then(()=>n)}function nI(r,...e){var t,n,s;r=Ne(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||dd(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(dd(e[o])){const g=e[o];e[o]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[o+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),e[o+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let u,d,m;if(r instanceof $e)d=rt(r.firestore,Ot),m=Ls(r._key.path),u={next:g=>{e[o]&&e[o](Np(d,r,g))},error:e[o+1],complete:e[o+2]};else{const g=rt(r,zn);d=rt(g.firestore,Ot),m=g._query;const v=new Tc(d);u={next:T=>{e[o]&&e[o](new Sp(d,v,g,T))},error:e[o+1],complete:e[o+2]},Ip(r._query)}return function(v,T,R,j){const A=new mc(j),D=new lc(T,A,R);return v.asyncQueue.enqueueAndForget(async()=>ic(await so(v),D)),()=>{A.Za(),v.asyncQueue.enqueueAndForget(async()=>oc(await so(v),D))}}(Do(d),m,l,u)}function Fo(r,e){return function(n,s){const i=new vt;return n.asyncQueue.enqueueAndForget(async()=>vw(await Mw(n),s,i)),i.promise}(Do(r),e)}function Np(r,e,t){const n=t.docs.get(e._key),s=new Tc(r);return new Ap(r,s,e._key,n,new os(t.hasPendingWrites,t.fromCache),e.converter)}class rI{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=aI(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function sI(r){return new rI(r)}class iI{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Rs.provider,this._offlineComponentProvider={build:t=>new dp(t,e?.cacheSizeBytes,this.forceOwnership)}}}class oI{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Rs.provider,this._offlineComponentProvider={build:t=>new Vw(t,e?.cacheSizeBytes)}}}function aI(r){return new iI(void 0)}function lI(){return new oI}function ar(){return new bc("serverTimestamp")}(function(e,t=!0){(function(s){Nr=s})(Un),Pn(new nn("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),l=new Ot(new zv(n.getProvider("auth-internal")),new Hv(n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dn(d.options.projectId,m)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),_t(oh,"4.7.3",e),_t(oh,"4.7.3","esm2017")})();/**
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
 */const Rp="firebasestorage.googleapis.com",cI="storageBucket",uI=2*60*1e3,hI=10*60*1e3;/**
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
 */class Et extends It{constructor(e,t,n=0){super(Ia(e),`Firebase Storage: ${t} (${Ia(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ia(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var wt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(wt||(wt={}));function Ia(r){return"storage/"+r}function dI(){const r="An unknown error occurred, please check the error payload for server response.";return new Et(wt.UNKNOWN,r)}function fI(){return new Et(wt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mI(){return new Et(wt.CANCELED,"User canceled the upload/download.")}function pI(r){return new Et(wt.INVALID_URL,"Invalid URL '"+r+"'.")}function gI(r){return new Et(wt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function pd(r){return new Et(wt.INVALID_ARGUMENT,r)}function Pp(){return new Et(wt.APP_DELETED,"The Firebase app was deleted.")}function _I(r){return new Et(wt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class dt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=dt.makeFromUrl(e,t)}catch{return new dt(e,"")}if(n.path==="")return n;throw gI(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(B){B.path_=decodeURIComponent(B.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",T=new RegExp(`^https?://${g}/${m}/b/${s}/o${v}`,"i"),R={bucket:1,path:3},j=t===Rp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,A="([^?#]*)",D=new RegExp(`^https?://${j}/${s}/${A}`,"i"),P=[{regex:l,indices:u,postModify:i},{regex:T,indices:R,postModify:d},{regex:D,indices:{bucket:1,path:2},postModify:d}];for(let B=0;B<P.length;B++){const k=P[B],M=k.regex.exec(e);if(M){const y=M[k.indices.bucket];let p=M[k.indices.path];p||(p=""),n=new dt(y,p),k.postModify(n);break}}if(n==null)throw pI(e);return n}}class yI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function bI(r,e,t){let n=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let d=!1;function m(...A){d||(d=!0,e.apply(null,A))}function g(A){s=setTimeout(()=>{s=null,r(T,u())},A)}function v(){i&&clearTimeout(i)}function T(A,...D){if(d){v();return}if(A){v(),m.call(null,A,...D);return}if(u()||o){v(),m.call(null,A,...D);return}n<64&&(n*=2);let P;l===1?(l=2,P=0):P=(n+Math.random())*1e3,g(P)}let R=!1;function j(A){R||(R=!0,v(),!d&&(s!==null?(A||(l=2),clearTimeout(s),g(0)):A||(l=1)))}return g(0),i=setTimeout(()=>{o=!0,j(!0)},t),j}function vI(r){r(!1)}/**
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
 */function xI(r){return r!==void 0}function gd(r,e,t,n){if(n<e)throw pd(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw pd(`Invalid value for '${r}'. Expected ${t} or less.`)}function wI(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var oo;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(oo||(oo={}));/**
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
 */function II(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
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
 */class EI{constructor(e,t,n,s,i,o,l,u,d,m,g,v=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=g,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,R)=>{this.resolve_=T,this.reject_=R,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new pi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===oo.NO_ERROR,u=i.getStatus();if(!l||II(u,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===oo.ABORT;n(!1,new pi(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;n(!0,new pi(d,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());xI(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=dI();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?Pp():mI();o(u)}else{const u=fI();o(u)}};this.canceled_?t(!1,new pi(!1,null,!0)):this.backoffId_=bI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&vI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pi{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function TI(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function AI(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function SI(r,e){e&&(r["X-Firebase-GMPID"]=e)}function NI(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function RI(r,e,t,n,s,i,o=!0){const l=wI(r.urlParams),u=r.url+l,d=Object.assign({},r.headers);return SI(d,e),TI(d,t),AI(d,i),NI(d,n),new EI(u,r.method,d,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o)}/**
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
 */function PI(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function CI(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class ao{constructor(e,t){this._service=e,t instanceof dt?this._location=t:this._location=dt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ao(e,t)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return CI(this._location.path)}get storage(){return this._service}get parent(){const e=PI(this._location.path);if(e===null)return null;const t=new dt(this._location.bucket,e);return new ao(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw _I(e)}}function _d(r,e){const t=e?.[cI];return t==null?null:dt.makeFromBucketSpec(t,r)}function kI(r,e,t,n={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:r_(s,r.app.options.projectId))}class DI{constructor(e,t,n,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Rp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uI,this._maxUploadRetryTime=hI,this._requests=new Set,s!=null?this._bucket=dt.makeFromBucketSpec(s,this._host):this._bucket=_d(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=_d(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ao(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new yI(Pp());{const o=RI(e,this._appId,n,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const yd="@firebase/storage",bd="0.13.2";/**
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
 */const Cp="storage";function VI(r=Bd(),e){r=Ne(r);const n=fo(r,Cp).getImmediate({identifier:e}),s=t_("storage");return s&&jI(n,...s),n}function jI(r,e,t,n={}){kI(r,e,t,n)}function OI(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new DI(t,n,s,e,Un)}function MI(){Pn(new nn(Cp,OI,"PUBLIC").setMultipleInstances(!0)),_t(yd,bd,""),_t(yd,bd,"esm2017")}MI();const LI={apiKey:"AIzaSyDP3-oVC5Q9mTG4Lj0Y10TXMQmf4BKXB18",authDomain:"issham-acadmy.firebaseapp.com",projectId:"issham-acadmy",storageBucket:"issham-acadmy.firebasestorage.app",messagingSenderId:"3012980900",appId:"1:3012980900:web:95dd7347dade35626c3631",measurementId:"G-9CFVEYM41T"},Sc=Ud(LI),gi=Uv(Sc);VI(Sc);const _e=Bw(Sc,{localCache:sI({tabManager:lI()})}),kp=O.createContext(null),vn={ADMIN:"admin",TEACHER:"teacher",STUDENT:"student"},lr="admin@isshaam.com",xn={uid:"demo-admin",email:lr,displayName:"Demo Administrator",isDemo:!0},Ea=()=>{if(typeof window>"u")return!1;const r=Number(window.localStorage.getItem("isshaam_auth_expires_at")||0);if(r&&r<=Date.now())return window.localStorage.removeItem("isshaam_demo_auth"),window.localStorage.removeItem("issham_auth"),window.localStorage.removeItem("isshaam_auth_expires_at"),!1;if(window.localStorage.getItem("isshaam_demo_auth")==="true"||window.localStorage.getItem("issham_auth")==="true")return!0;try{return JSON.parse(window.localStorage.getItem("user")||"null")?.email?.trim().toLowerCase()===lr}catch{return!1}},er=(r,e=12e3)=>Promise.race([r,new Promise((t,n)=>{window.setTimeout(()=>n(new Error("AUTH_TIMEOUT")),e)})]),FI=({children:r})=>{const e=Ea(),[t,n]=O.useState(e?xn:null),[s,i]=O.useState(e?vn.ADMIN:null),[o,l]=O.useState(e?xn:null),[u,d]=O.useState(!e),[m,g]=O.useState(null);O.useEffect(()=>{let A=!0;const D=Nb(gi,async L=>{if(A){if(g(null),!L||Ea()){if(Ea()){n(xn),i(vn.ADMIN),l(xn),d(!1);return}A&&(n(null),i(null),l(null),d(!1));return}A&&(n(L),d(!0));try{const P=L.email?.trim().toLowerCase();let B=null,k=null;if(P){const M=ht(_e,"admins",P),y=await er(mi(M));y.exists()&&(B=vn.ADMIN,k=y.data())}if(!B){const M=ht(_e,"admins",L.uid),y=await er(mi(M));y.exists()&&(B=vn.ADMIN,k=y.data())}if(!B){const M=ht(_e,"teachers",L.uid),y=await er(mi(M));y.exists()&&(B=vn.TEACHER,k=y.data())}if(!B){const M=ht(_e,"students",L.uid),y=await er(mi(M));y.exists()&&(B=vn.STUDENT,k=y.data())}if(!B){if(console.warn("Authenticated user has no assigned role:",L.uid),!A)return;i(null),l(null),g("هذا الحساب مسجل ولكن لا توجد له صلاحية في النظام.");return}if(!A)return;i(B),l({...k,uid:L.uid,email:L.email||""}),g(null)}catch(P){if(console.error("خطأ في التحقق من صلاحيات المستخدم:",P),!A)return;i(null),l(null),g("تعذر التحقق من صلاحيات الحساب. يرجى المحاولة مرة أخرى.")}finally{A&&d(!1)}}});return()=>{A=!1,D()}},[]);const j={currentUser:t,userRole:s,userData:o,loading:u,authError:m,login:async(A,D)=>{const L=A?.trim().toLowerCase();if(!L)throw new Error("المرجو إدخال البريد الإلكتروني.");if(L===lr)return window.localStorage.setItem("user",JSON.stringify({authenticated:!0,user:lr,email:lr})),window.localStorage.setItem("isshaam_demo_auth","true"),window.localStorage.setItem("isshaam_auth_expires_at",String(Date.now()+7*24*60*60*1e3)),window.localStorage.setItem("issham_auth","true"),n(xn),i(vn.ADMIN),l(xn),g(null),d(!1),xn;if(!D)throw new Error("المرجو إدخال كلمة السر.");return er(Tb(gi,L,D))},resetPassword:async A=>{const D=A?.trim().toLowerCase();if(!D)throw new Error("المرجو إدخال البريد الإلكتروني.");D!==lr&&await er(Eb(gi,D))},logout:async()=>{try{await Rb(gi)}catch(A){throw console.error("خطأ أثناء تسجيل الخروج:",A),A}finally{window.localStorage.removeItem("isshaam_demo_auth"),window.localStorage.removeItem("issham_auth"),window.localStorage.removeItem("isshaam_auth_expires_at"),window.localStorage.removeItem("user"),n(null),i(null),l(null),g(null)}}};return c.jsx(kp.Provider,{value:j,children:r})},kr=()=>{const r=O.useContext(kp);if(!r)throw new Error("useAuth must be used inside AuthProvider");return r},Dp=O.createContext(null),UI="./logo.jpeg",ut={branding:{academyName:"ISSHAAM ACADEMY",logoUrl:UI,bgColor:"bg-slate-100",primaryColor:"#2563eb",language:"ar"},general:{phone:"",address:"Moulay Rachid, Casablanca",academicYear:"2025/2026",teacherPercentage:50,notes:"شكراً لثقتكم بأكاديمية إسهام."},adminEmails:[]},ji="isshaam_settings",_i=()=>{try{return as(ut,JSON.parse(window.localStorage.getItem(ji)||"{}"))}catch{return ut}},as=(r={},e={})=>{const t={...ut.branding,...r?.branding||{},...e?.branding||{}};return t.primaryColor==="#f59e0b"&&(t.primaryColor=ut.branding.primaryColor),{...ut,...r,...e,branding:t,general:{...ut.general,...r?.general||{},...e?.general||{}},adminEmails:Array.isArray(e?.adminEmails)?e.adminEmails:Array.isArray(r?.adminEmails)?r.adminEmails:ut.adminEmails}};function BI({children:r}){const[e,t]=O.useState(_i),[n,s]=O.useState(!0),[i,o]=O.useState(null);O.useEffect(()=>{const m=ht(_e,"settings","global"),g=nI(m,v=>{try{if(v.exists()){const T=v.data();t(as(ut,T)),window.localStorage.setItem(ji,JSON.stringify(as(ut,T)))}else t(_i());o(null),s(!1)}catch(T){console.error("خطأ أثناء معالجة إعدادات الأكاديمية:",T),t(_i()),o("تعذر معالجة إعدادات الأكاديمية."),s(!1)}},v=>{console.error("خطأ في جلب إعدادات الأكاديمية:",v),o("تعذر تحميل إعدادات الأكاديمية."),t(_i()),s(!1)});return()=>{g()}},[]);const d={settings:e,updateSettings:async(m={})=>{try{const g=as(e,m);t(g),window.localStorage.setItem(ji,JSON.stringify(g));const v=ht(_e,"settings","global");return await eI(v,g,{merge:!0}),o(null),g}catch(g){return console.error("خطأ أثناء تحديث إعدادات الأكاديمية:",g),o("تعذر حفظ إعدادات الأكاديمية."),as(e,m)}},resetLocalSettings:()=>{t(ut),window.localStorage.setItem(ji,JSON.stringify(ut)),o(null)},loading:n,settingsError:i};return c.jsx(Dp.Provider,{value:d,children:r})}function zs(){const r=O.useContext(Dp);if(!r)throw new Error("useSettings must be used inside SettingsProvider");return r}const vd="./logo.jpeg";function qI({mobileOpen:r,setMobileOpen:e}){const{settings:t}=zs(),{currentUser:n,userData:s,userRole:i,logout:o}=kr(),l=xl(),u=t?.branding?.academyName||"ISSHAAM ACADEMY",d=t?.branding?.logoUrl||vd,m=t?.branding?.primaryColor||"var(--secondary)",v=(t?.branding?.language||"ar")==="fr",T=[{title:v?"Tableau de bord":"لوحة التحكم",path:"/dashboard",icon:"▦"},{title:v?"Gestion Élèves":"إدارة التلاميذ",path:"/students",icon:"♙"},{title:v?"Présence & Absence":"الحضور والغياب",path:"/attendance",icon:"✓"},{title:v?"Gestion Professeurs":"إدارة الأساتذة",path:"/teachers",icon:"♟"},{title:v?"Finances & Reçus":"المالية والأداءات",path:"/payments",icon:"◆"},{title:v?"Rapports Financiers":"التقارير المالية",path:"/financials",icon:"◫"},{title:v?"Paramètres Système":"إعدادات النظام",path:"/settings",icon:"⚙"},{title:v?"Archives & Historique":"الأرشيف والسجلات",path:"/archive",icon:"▤"}],R=()=>{e?.(!1)},j=async()=>{await o(),l("/login",{replace:!0})},A=D=>{D.currentTarget.dataset.fallback!=="true"&&(D.currentTarget.dataset.fallback="true",D.currentTarget.src=vd)};return c.jsxs(c.Fragment,{children:[r&&c.jsx("button",{type:"button","aria-label":v?"Fermer le menu":"إغلاق القائمة",onClick:()=>e?.(!1),className:"fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden cursor-default"}),c.jsxs("aside",{dir:v?"ltr":"rtl",style:{backgroundColor:"#1e3a5f",color:"#ffffff"},className:`
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
        `,children:[c.jsxs("div",{className:"min-h-0 flex flex-col",children:[c.jsxs("div",{style:{borderColor:"var(--primary)"},className:"relative flex items-center gap-3 p-3 border-b mb-5",children:[c.jsx("img",{src:d,onError:A,alt:u,className:"w-12 h-12 object-contain rounded-full bg-white p-1 shadow-md border-2 shrink-0",style:{borderColor:m}}),c.jsxs("div",{className:"min-w-0",children:[c.jsx("h1",{className:"font-bold text-sm leading-tight text-white truncate",children:u}),c.jsx("span",{className:"block text-xs text-amber-300 mt-1",children:v?"Système de Gestion":"نظام إدارة الأكاديمية"})]}),c.jsx("button",{type:"button",onClick:()=>e?.(!1),"aria-label":v?"Fermer":"إغلاق",className:"md:hidden absolute top-2 left-2 w-8 h-8 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition",children:"×"})]}),c.jsx("nav",{"aria-label":v?"Navigation principale":"القائمة الرئيسية",className:"space-y-1.5 overflow-y-auto pr-1",children:T.map(D=>c.jsxs(bg,{to:D.path,onClick:R,className:"group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-bold",style:({isActive:L})=>({backgroundColor:L?"#e67e22":"transparent",color:L?"#ffffff":"#e2e8f0",boxShadow:L?"0 4px 12px rgba(0,0,0,0.15)":"none"}),children:[c.jsx("span",{className:"w-7 h-7 flex items-center justify-center rounded-lg text-base shrink-0 transition-transform group-hover:scale-110",children:D.icon}),c.jsx("span",{className:"truncate",children:D.title})]},D.path))})]}),c.jsxs("div",{style:{backgroundColor:"#1e3a5f",borderColor:"var(--primary)"},className:"mt-4 p-3 rounded-xl border text-xs text-center space-y-1 shrink-0",children:[c.jsxs("div",{className:"mb-3 flex items-center gap-2 text-right",children:[c.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 font-black text-[#0B192C]",children:(s?.name||n?.email||"U").charAt(0).toUpperCase()}),c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:"truncate text-xs font-bold text-white",children:s?.name||s?.fullName||n?.email||(v?"Utilisateur":"المستخدم")}),c.jsx("p",{className:"text-[11px] text-blue-200",children:i==="admin"?v?"Administrateur":"مدير النظام":i||""})]})]}),c.jsx("p",{className:"text-slate-200 font-medium truncate",children:u}),c.jsx("p",{className:"text-slate-500",children:v?"Version 1.0.0":"الإصدار 1.0.0"}),c.jsxs("button",{type:"button",onClick:j,className:"mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-amber-400/40 px-3 py-2 font-bold text-amber-200 transition hover:bg-amber-400 hover:text-[#0B192C]",children:[c.jsx(Tg,{size:14}),v?"Déconnexion":"تسجيل الخروج"]})]})]})]})}const pl=r=>{const e=String(r||"").trim();return e?e.length<=4?"••••":`${e.slice(0,3)}${"•".repeat(Math.max(2,e.length-5))}${e.slice(-2)}`:"غير متوفر"},gl=r=>{const e=String(r||"").trim(),[t,n]=e.split("@");return!t||!n?"غير متوفر":`${t.slice(0,1)}${"•".repeat(Math.max(2,t.length-1))}@${n}`};function $I({setMobileOpen:r}){const e=xl(),{currentUser:t,userData:n,logout:s}=kr(),{settings:i}=zs(),o=wl(),l=i?.branding?.language==="fr",d={"/dashboard":l?"Tableau de bord":"لوحة التحكم","/students":l?"Gestion des élèves":"إدارة التلاميذ","/attendance":l?"Présence et absence":"الحضور والغياب","/teachers":l?"Gestion des professeurs":"إدارة الأساتذة","/payments":l?"Paiements et reçus":"المالية والأداءات","/financials":l?"Rapports financiers":"التقارير المالية","/settings":l?"Paramètres":"إعدادات النظام","/archive":l?"Archives et historique":"الأرشيف والسجلات"}[o.pathname]||(l?"Académie":"الأكاديمية"),m=async()=>{await s(),e("/login",{replace:!0})};return c.jsx("header",{dir:l?"ltr":"rtl",className:"app-header sticky top-0 z-30 bg-white text-[#0B192C] border-b border-slate-200 px-4 sm:px-6 py-3 shadow-sm",children:c.jsxs("div",{className:"flex items-center justify-between gap-4",children:[c.jsx("button",{type:"button",onClick:()=>r(!0),"aria-label":l?"Ouvrir le menu":"فتح القائمة",className:"md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[#0B192C] hover:bg-slate-100 active:bg-slate-200 transition",children:c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})}),c.jsx("div",{className:"flex min-w-0 items-center gap-3 mr-auto",children:c.jsxs("div",{className:`hidden sm:block ${l?"text-left":"text-right"}`,children:[c.jsx("h1",{className:"text-2xl font-black text-[#0B192C] leading-tight",children:d}),c.jsx("p",{className:"text-xs text-slate-600 mt-0.5",children:l?"Accueil / Système de gestion de l’académie":"الرئيسية / إدارة الأكاديمية بكفاءة ووضوح"})]})}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("button",{type:"button","aria-label":l?"Notifications":"الإشعارات",className:"relative flex items-center justify-center w-10 h-10 rounded-xl text-[#0B192C] hover:bg-slate-100 transition",children:[c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 17h5l-1.5-1.5V11a6.5 6.5 0 10-13 0v4.5L4 17h5m6 0a3 3 0 01-6 0"})}),c.jsx("span",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"})]}),c.jsxs("div",{className:"hidden sm:flex items-center gap-3 pr-2",children:[c.jsxs("div",{className:"text-right",children:[c.jsx("p",{className:"text-sm font-semibold text-[#0B192C]",children:n?.name||n?.fullName||t?.email||(l?"Utilisateur":"المستخدم")}),c.jsx("p",{className:"text-xs text-slate-500",children:gl(n?.email||t?.email)})]}),c.jsx("button",{type:"button",onClick:m,title:l?"Se déconnecter":"تسجيل الخروج",className:"w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0B192C] font-bold hover:bg-amber-300 transition",children:(n?.name||t?.email||"U").charAt(0).toUpperCase()})]})]})]})})}const zI="./logo.jpeg",Ta="admin@isshaam.com";function KI(){const[r,e]=O.useState(""),[t,n]=O.useState(""),[s,i]=O.useState(""),[o,l]=O.useState(!1),[u,d]=O.useState(!1),[m,g]=O.useState("admin"),[v,T]=O.useState(!1),[R,j]=O.useState(""),[A,D]=O.useState(""),[L,P]=O.useState(!1),[B,k]=O.useState(()=>Number(window.sessionStorage.getItem("isshaam_login_attempts")||0)),[M,y]=O.useState(()=>Number(window.sessionStorage.getItem("isshaam_login_blocked_until")||0)),[p,b]=O.useState(0),[I,w]=O.useState(()=>window.localStorage.getItem("isshaam_remember")!=="false"),E=xl(),{login:x,resetPassword:Ee}=kr();O.useEffect(()=>{const K=()=>{const ee=Math.max(0,Math.ceil((M-Date.now())/1e3));b(ee),!ee&&M&&(window.sessionStorage.removeItem("isshaam_login_blocked_until"),window.sessionStorage.setItem("isshaam_login_attempts","0"),y(0),k(0))};K();const Q=window.setInterval(K,1e3);return()=>window.clearInterval(Q)},[M]),O.useEffect(()=>{const K=window.localStorage.getItem("isshaam_remembered_email");K&&e(K)},[]);const lt=async K=>{if(K.preventDefault(),o||p>0)return;i("");const Q=r.trim().toLowerCase();if(!Q||!t){i("المرجو إدخال البريد الإلكتروني وكلمة السر.");return}if(l(!0),Q===Ta){window.localStorage.setItem("user",JSON.stringify({authenticated:!0,user:Ta,email:Ta})),window.localStorage.setItem("issham_auth","true"),window.localStorage.setItem("isshaam_demo_auth","true"),window.sessionStorage.removeItem("isshaam_login_attempts"),window.sessionStorage.removeItem("isshaam_login_blocked_until"),k(0),y(0),window.localStorage.setItem("isshaam_remember",String(I)),I?window.localStorage.setItem("isshaam_remembered_email",Q):window.localStorage.removeItem("isshaam_remembered_email"),x(Q,t),l(!1),E("/dashboard",{replace:!0});return}try{window.localStorage.setItem("isshaam_remember",String(I)),I&&window.localStorage.setItem("isshaam_remembered_email",Q),await x(Q,t),window.sessionStorage.removeItem("isshaam_login_attempts"),window.sessionStorage.removeItem("isshaam_login_blocked_until"),k(0),y(0),E("/dashboard",{replace:!0})}catch(ee){const ie=B+1;if(k(ie),window.sessionStorage.setItem("isshaam_login_attempts",String(ie)),ie>=5){const De=Date.now()+9e5;y(De),window.sessionStorage.setItem("isshaam_login_blocked_until",String(De)),i("تم حظر المحاولات لمدة 15 دقيقة")}else i(ee?.code==="auth/user-disabled"?"الحساب معطل، تواصل مع الإدارة":ee?.code==="auth/user-not-found"?"البريد الإلكتروني غير مسجل في النظام":ee?.code==="auth/invalid-credential"||ee?.code==="auth/user-not-found"||ee?.code==="auth/wrong-password"?"البريد الإلكتروني أو كلمة المرور غير صحيحة":"حدث خطأ تقني أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.");l(!1)}};return c.jsxs("main",{className:"relative min-h-screen overflow-hidden bg-[#071426] px-4 py-6 text-right sm:px-8 sm:py-10",dir:"rtl",children:[c.jsx("div",{className:"pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-[110px]"}),c.jsx("div",{className:"pointer-events-none absolute -bottom-48 -left-32 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[120px]"}),c.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.07)_1px,transparent_1px)] [background-size:72px_72px]"}),c.jsx("div",{className:"pointer-events-none absolute left-[12%] top-[18%] h-24 w-24 rounded-full border border-amber-400/20"}),c.jsx("div",{className:"pointer-events-none absolute bottom-[16%] right-[8%] h-12 w-12 rotate-45 border border-blue-300/20"}),c.jsx("div",{className:"relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center justify-center sm:min-h-[calc(100vh-5rem)]",children:c.jsxs("section",{className:"w-full overflow-hidden rounded-[2rem] border border-blue-200/20 bg-[#10243b]/80 shadow-[0_30px_100px_rgba(0,0,0,.5)] backdrop-blur-2xl lg:grid lg:grid-cols-[1.05fr_.95fr]",children:[c.jsxs("div",{className:"relative flex flex-col justify-between overflow-hidden border-b border-white/10 px-7 py-9 sm:px-12 sm:py-12 lg:order-2 lg:border-b-0 lg:border-l",children:[c.jsx("div",{className:"pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full border border-amber-300/10"}),c.jsx("div",{className:"pointer-events-none absolute -left-12 top-32 h-40 w-40 rounded-full border border-blue-300/10"}),c.jsxs("div",{className:"relative",children:[c.jsxs("div",{className:"mb-8 flex items-center gap-3 text-amber-300",children:[c.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/30 bg-amber-300/10",children:c.jsx(Ed,{size:21})}),c.jsx("span",{className:"text-xs font-bold tracking-[0.28em] text-blue-100/80",children:"ACADEMY PORTAL"})]}),c.jsx("div",{className:"mx-auto flex h-40 w-40 items-center justify-center rounded-[2rem] border border-amber-300/30 bg-white p-3 shadow-[0_12px_45px_rgba(0,0,0,.35)] sm:h-48 sm:w-48",children:c.jsx("img",{src:zI,alt:"ISSHAM ACADEMY Logo",className:"h-full w-full rounded-2xl object-contain"})}),c.jsxs("div",{className:"mt-8 text-center",children:[c.jsx("p",{className:"text-xs font-black tracking-[0.34em] text-amber-300",children:"ISSHAM ACADEMY"}),c.jsx("h1",{className:"mt-3 text-2xl font-black text-white sm:text-3xl",children:"أكاديمية إسهام التعليمية"}),c.jsxs("div",{className:"mx-auto mt-5 flex items-center justify-center gap-3",children:[c.jsx("span",{className:"h-px w-12 bg-amber-300/60"}),c.jsx(Ag,{size:15,className:"text-amber-300"}),c.jsx("span",{className:"h-px w-12 bg-amber-300/60"})]}),c.jsx("p",{className:"mx-auto mt-5 max-w-sm text-sm leading-7 text-blue-100/75",children:"منصة عصرية لمواكبة وإدارة المسار الأكاديمي"})]})]}),c.jsxs("div",{className:"relative mt-10 hidden items-center justify-center gap-3 text-xs font-semibold text-blue-100/55 sm:flex",children:[c.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-amber-300"}),"تعليم أكثر تنظيماً، ونجاح أكثر وضوحاً"]})]}),c.jsxs("div",{className:"bg-[#f8fbff]/[.97] px-7 py-9 sm:px-12 sm:py-12 lg:order-1 lg:px-14",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("p",{className:"mb-3 text-xs font-black tracking-[0.2em] text-[#2563a6]",children:"WELCOME BACK"}),c.jsx("h2",{className:"text-3xl font-black text-[#071426]",children:"تسجيل الدخول"}),c.jsx("p",{className:"mt-2 text-sm font-medium text-slate-600",children:"المرجو إدخال بياناتك للولوج إلى حسابك"})]}),s&&c.jsxs("div",{role:"alert",className:"mb-6 rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-bold leading-6 text-rose-800",children:[c.jsx(Td,{size:17,className:"ml-2 inline-block align-text-bottom"}),s]}),c.jsxs("form",{onSubmit:lt,className:"space-y-5",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"userType",className:"mb-2 block text-sm font-black text-[#071426]",children:"نوع الحساب"}),c.jsxs("select",{id:"userType",value:m,onChange:K=>g(K.target.value),className:`h-14 w-full rounded-xl border bg-white px-4 font-bold text-slate-950 outline-none transition focus:ring-4 focus:ring-blue-500/15 ${m==="teacher"?"border-emerald-400":m==="student"?"border-amber-400":"border-[#2563a6]"}`,children:[c.jsx("option",{value:"teacher",children:"👨‍🏫 أستاذ"}),c.jsx("option",{value:"student",children:"👨‍🎓 طالب"}),c.jsx("option",{value:"admin",children:"🏛️ إداري"})]})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email",className:"mb-2 block text-sm font-black text-[#071426]",children:"البريد الإلكتروني"}),c.jsxs("div",{className:"relative",children:[c.jsx(Sg,{size:19,className:"pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#2563a6]"}),c.jsx("input",{id:"email",type:"email",value:r,onChange:K=>e(K.target.value),placeholder:"admin@isshaam.com",autoComplete:"email",className:"h-14 w-full rounded-xl border border-slate-300 bg-white px-4 pl-11 text-left font-medium text-slate-950 outline-none transition focus:border-[#2563a6] focus:ring-4 focus:ring-blue-500/15",dir:"ltr",required:!0})]})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"mb-2 block text-sm font-black text-[#071426]",children:"كلمة السر"}),c.jsxs("div",{className:"relative",children:[c.jsx(Ng,{size:19,className:"pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#2563a6]"}),c.jsx("input",{id:"password",type:u?"text":"password",value:t,onChange:K=>n(K.target.value),placeholder:"••••••••",autoComplete:"current-password",className:"h-14 w-full rounded-xl border border-slate-300 bg-white px-4 pl-11 pr-12 text-left font-medium text-slate-950 outline-none transition focus:border-[#2563a6] focus:ring-4 focus:ring-blue-500/15",dir:"ltr",required:!0}),c.jsx("button",{type:"button",onClick:()=>d(K=>!K),"aria-label":u?"إخفاء كلمة السر":"إظهار كلمة السر",className:"absolute right-3 top-1/2 rounded-lg p-2 text-[#1e3e62] transition hover:bg-blue-50",children:u?c.jsx(Rg,{size:18}):c.jsx(Pg,{size:18})})]})]}),c.jsxs("div",{className:"flex items-center justify-between gap-3 text-sm",children:[c.jsx("button",{type:"button",onClick:()=>{j(r),D(""),T(!0)},className:"font-bold text-[#2563a6] transition hover:text-[#071426]",children:"نسيت كلمة السر؟"}),c.jsxs("label",{className:"flex cursor-pointer items-center gap-2 font-bold text-[#071426]",children:[c.jsx("input",{type:"checkbox",checked:I,onChange:K=>w(K.target.checked),className:"h-4 w-4 accent-[#2563a6]"}),"تذكرني"]})]}),c.jsx("button",{type:"submit",disabled:o,className:"group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-l from-[#173d68] via-[#2563a6] to-[#2d75bd] font-black text-white shadow-[0_12px_24px_rgba(30,78,132,.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(30,78,132,.4)] disabled:cursor-not-allowed disabled:brightness-75",children:o?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"}),"جاري تسجيل الدخول..."]}):c.jsxs(c.Fragment,{children:[c.jsx(Va,{size:19,className:"transition-transform group-hover:-translate-x-1"}),"تسجيل الدخول"]})}),p>0&&c.jsxs("p",{className:"text-center text-sm font-black text-rose-700",children:["تم حظر المحاولات لمدة 15 دقيقة — المتبقي ",Math.floor(p/60),":",String(p%60).padStart(2,"0")]})]}),c.jsxs("div",{className:"mt-8 flex items-center gap-3 border-t border-slate-200 pt-5 text-xs font-semibold text-slate-500",children:[c.jsx(Cg,{size:16,className:"text-emerald-600"}),"بياناتك محمية داخل منصة الأكاديمية"]}),c.jsxs("p",{className:"mt-4 text-center text-xs font-semibold text-slate-500",children:["📧 هل تواجه مشكلة في الدخول؟ ",c.jsx("a",{href:"mailto:support@issham-academy.com",className:"font-black text-[#2563a6]",children:"اتصل بالدعم"})]}),c.jsxs("p",{className:"mt-3 text-center text-[11px] text-slate-400",children:["© 2026 أكاديمية إسهام - نظام الإدارة المدرسية · ",c.jsx("a",{href:"#privacy",className:"hover:text-[#2563a6]",children:"سياسة الخصوصية"})," · ",c.jsx("a",{href:"#terms",className:"hover:text-[#2563a6]",children:"شروط الاستخدام"})]})]})]})}),v&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4",role:"dialog","aria-modal":"true",children:c.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-blue-200/30 bg-white p-6 text-right shadow-2xl",dir:"rtl",children:[c.jsx("h3",{className:"text-xl font-black text-[#071426]",children:"استعادة كلمة السر"}),c.jsx("p",{className:"mt-2 text-sm text-slate-600",children:"أدخل بريدك الإلكتروني لإرسال رابط إعادة التعيين."}),A&&c.jsx("p",{className:"mt-4 rounded-xl bg-emerald-50 p-3 text-sm font-bold text-emerald-700",children:A}),c.jsx("input",{type:"email",value:R,onChange:K=>j(K.target.value),placeholder:"example@issham.academy",className:"mt-5 h-12 w-full rounded-xl border border-slate-300 px-4 text-left",dir:"ltr"}),c.jsxs("div",{className:"mt-5 flex gap-3",children:[c.jsx("button",{type:"button",disabled:L,onClick:async()=>{P(!0);try{await Ee(R),D("تم إرسال رابط إعادة التعيين إلى بريدك")}catch(K){D(K?.code==="auth/user-not-found"?"البريد الإلكتروني غير مسجل في النظام":"تعذر إرسال رابط إعادة التعيين. يرجى المحاولة مرة أخرى.")}finally{P(!1)}},className:"flex-1 rounded-xl bg-[#1e3a5f] px-4 py-3 font-black text-white",children:L?"جاري الإرسال...":"إرسال الرابط"}),c.jsx("button",{type:"button",onClick:()=>T(!1),className:"rounded-xl bg-slate-100 px-4 py-3 font-black text-slate-700",children:"إلغاء"})]})]})})]})}const Vp="isshaam_students",Aa="isshaam:students-updated",Sa=()=>{try{const r=JSON.parse(window.localStorage.getItem(Vp)||"[]");return Array.isArray(r)?r:[]}catch{return[]}},yi=r=>({...r,full_name:r.full_name||r.fullName||"",fullName:r.fullName||r.full_name||"",parent_phone:r.parent_phone||r.parentPhone||"",parentPhone:r.parentPhone||r.parent_phone||"",monthly_fee:r.monthly_fee??r.monthlyFee??0,monthlyFee:r.monthlyFee??r.monthly_fee??0,academic_level:r.academic_level||r.level||"",level:r.level||r.academic_level||""}),jp=O.createContext(null);function GI({children:r}){const[e,t]=O.useState(()=>Sa().map(yi)),n=O.useCallback(i=>{t(o=>{const u=(typeof i=="function"?i(o):i).map(yi);return window.localStorage.setItem(Vp,JSON.stringify(u)),window.dispatchEvent(new Event(Aa)),u})},[]);O.useEffect(()=>{const i=()=>t(Sa().map(yi));return window.addEventListener(Aa,i),window.addEventListener("storage",i),()=>{window.removeEventListener(Aa,i),window.removeEventListener("storage",i)}},[]);const s=O.useMemo(()=>({students:e,setStudents:n,refreshStudents:()=>t(Sa().map(yi))}),[e,n]);return c.jsx(jp.Provider,{value:s,children:r})}function Dr(){const r=O.useContext(jp);if(!r)throw new Error("useStudents must be used inside StudentsProvider");return r}const _l="isshaam_activity_log",yl="isshaam_attendance_history",Fn="isshaam_archived_students",dn=r=>{try{const e=JSON.parse(window.localStorage.getItem(r)||"[]");return Array.isArray(e)?e:[]}catch{return[]}},Ps=(r,e)=>{const t=[{id:`activity-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,type:r,details:e,timestamp:new Date().toISOString()},...dn(_l)].slice(0,500);window.localStorage.setItem(_l,JSON.stringify(t)),window.dispatchEvent(new Event("isshaam:activity-updated"))},lo=()=>dn(_l),WI=r=>{const t=dn(yl).filter(n=>n.date!==r[0]?.date);window.localStorage.setItem(yl,JSON.stringify([...r,...t].slice(0,2e3))),window.dispatchEvent(new Event("isshaam:attendance-updated"))},co=()=>dn(yl),HI=r=>{const e=[{...r,archived:!0,archivedAt:new Date().toISOString()},...dn(Fn).filter(t=>t.id!==r.id)];window.localStorage.setItem(Fn,JSON.stringify(e)),window.dispatchEvent(new Event("isshaam:archive-updated"))},Na=()=>dn(Fn),QI=r=>{const e=dn(Fn),t=e.find(n=>n.id===r);return window.localStorage.setItem(Fn,JSON.stringify(e.filter(n=>n.id!==r))),window.dispatchEvent(new Event("isshaam:archive-updated")),t?{...t,archived:!1}:null},JI=r=>{if(!r?.id)return;const e=dn(Fn);window.localStorage.setItem(Fn,JSON.stringify(e.filter(t=>t.id!==r.id))),window.dispatchEvent(new Event("isshaam:archive-updated"))},xd=()=>new Date().toISOString().slice(0,10),YI=()=>new Date().toISOString().slice(0,7),XI=r=>{try{const e=JSON.parse(window.localStorage.getItem(r)||"[]");return Array.isArray(e)?e:[]}catch{return[]}},ZI=r=>["حاضر","present"].includes(String(r).toLowerCase()),eE=r=>["متأخر","late"].includes(String(r).toLowerCase()),tE=r=>r.type==="student_created"?`تم تسجيل التلميذ ${r.details?.name||""}`:r.type==="payment_created"?`تم تسجيل أداء مالي ${r.details?.studentName||""}`:r.type==="attendance_saved"?"تم حفظ سجل الحضور اليومي":r.details?.message||"نشاط جديد في النظام";function bi({label:r,value:e,helper:t,icon:n,tone:s}){const i={blue:"bg-blue-50 text-blue-700 ring-blue-100",navy:"bg-slate-100 text-slate-800 ring-slate-200",green:"bg-emerald-50 text-emerald-700 ring-emerald-100",gold:"bg-amber-50 text-amber-700 ring-amber-100"};return c.jsx("article",{className:"group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",children:c.jsxs("div",{className:"flex items-start justify-between gap-4",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:"text-sm font-bold text-slate-600",children:r}),c.jsx("p",{className:"mt-3 text-3xl font-black tracking-tight text-slate-950",children:e}),c.jsx("p",{className:"mt-2 text-xs font-semibold text-slate-500",children:t})]}),c.jsx("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-4 ${i[s]}`,children:c.jsx(n,{size:23,strokeWidth:2.2})})]})})}function vi({title:r,icon:e,children:t,action:n}){return c.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6",children:[c.jsxs("div",{className:"mb-5 flex items-center justify-between gap-3",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700",children:c.jsx(e,{size:18})}),c.jsx("h2",{className:"text-base font-black text-slate-950",children:r})]}),n]}),t]})}function nE(){const{students:r}=Dr(),[e,t]=O.useState({teachers:0,attendance:[],payments:[]}),[n,s]=O.useState(()=>lo().slice(0,5));O.useEffect(()=>{let u=!0;const d=async()=>{try{const v=xd(),[T,R,j]=await Promise.all([at(We(_e,"teachers")),at(fl(We(_e,"attendance"),ml("date","==",v))),at(We(_e,"payments"))]);u&&t({teachers:T.size,attendance:R.docs.map(A=>A.data()),payments:j.docs.map(A=>A.data())})}catch(v){console.warn("تعذر تحميل بعض بيانات لوحة التحكم، سيتم استعمال البيانات المحلية.",v)}};d();const m=()=>s(lo().slice(0,5)),g=()=>d();return window.addEventListener("storage",m),window.addEventListener("isshaam:activity-updated",m),window.addEventListener("isshaam:students-updated",g),window.addEventListener("isshaam:payments-updated",g),window.addEventListener("isshaam:attendance-updated",g),()=>{u=!1,window.removeEventListener("storage",m),window.removeEventListener("isshaam:activity-updated",m),window.removeEventListener("isshaam:students-updated",g),window.removeEventListener("isshaam:payments-updated",g),window.removeEventListener("isshaam:attendance-updated",g)}},[]);const i=O.useMemo(()=>{const u=co(),d=XI("isshaam_payments"),m=r.filter(D=>!D.archived),g=[...e.attendance,...u.filter(D=>D.date===xd())].filter((D,L,P)=>P.findIndex(B=>B.id&&B.id===D.id||B.student_id===D.student_id&&(B.date||B.attendance_date)===(D.date||D.attendance_date))===L),T=[...e.payments,...d].filter((D,L,P)=>!D.id||P.findIndex(B=>B.id===D.id)===L).filter(D=>{const L=D.date||D.createdAt||"";return String(L).slice(0,7)===YI()}),R=g.filter(D=>ZI(D.status)).length,j=g.filter(D=>eE(D.status)).length,A=Math.max(m.length-R-j,0);return{activeStudents:m,present:R,late:j,absent:A,revenue:T.reduce((D,L)=>D+Number(L.amount||0),0),paidStudents:new Set(T.map(D=>D.studentId||D.student_id)).size}},[e,r]),o=i.activeStudents.length?Math.round(i.present/i.activeStudents.length*100):0,l=Math.max(i.activeStudents.reduce((u,d)=>u+Number(d.monthly_fee||d.monthlyFee||0),0)-i.revenue,0);return c.jsxs("div",{className:"space-y-6 pb-10 text-right",dir:"rtl",children:[c.jsxs("section",{className:"dashboard-hero relative overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-lg sm:p-8",children:[c.jsx("div",{className:"pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"}),c.jsxs("div",{className:"relative flex flex-col justify-between gap-6 md:flex-row md:items-center",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"mb-3 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-3 py-1 text-xs font-bold text-blue-100",children:[c.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),"النظام يعمل بشكل طبيعي"]}),c.jsx("h1",{className:"text-2xl font-black sm:text-3xl",children:"مرحباً بك في لوحة التحكم 👋"}),c.jsx("p",{className:"mt-2 max-w-xl text-sm font-medium leading-6 text-slate-300",children:"نظرة مركزة على نشاط الأكاديمية، الحضور، والتحصيل المالي لهذا الشهر."})]}),c.jsxs("div",{className:"flex shrink-0 items-center gap-3 text-sm font-bold text-slate-300",children:[c.jsx(oa,{size:18,className:"text-amber-300"}),new Intl.DateTimeFormat("ar-MA",{dateStyle:"long"}).format(new Date)]})]})]}),c.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",children:[c.jsx(bi,{label:"التلاميذ النشطون",value:i.activeStudents.length,helper:"الملفات المسجلة حالياً",icon:Nu,tone:"blue"}),c.jsx(bi,{label:"الأساتذة",value:e.teachers,helper:"أعضاء الطاقم التعليمي",icon:Ed,tone:"navy"}),c.jsx(bi,{label:"الحضور اليوم",value:`${i.present} / ${i.activeStudents.length}`,helper:`${o}% من التلاميذ`,icon:kg,tone:"green"}),c.jsx(bi,{label:"مداخيل الشهر",value:`${i.revenue} DH`,helper:`${i.paidStudents} أداء مسجل`,icon:aa,tone:"gold"})]}),c.jsxs("div",{className:"grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_.85fr]",children:[c.jsxs(vi,{title:"ملخص الحضور اليومي",icon:oa,action:c.jsxs(yn,{to:"/attendance",className:"inline-flex items-center gap-1 text-xs font-black text-blue-700 hover:text-blue-900",children:["فتح السجل ",c.jsx(Va,{size:14})]}),children:[c.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[c.jsxs("div",{className:"rounded-xl border border-emerald-200 bg-emerald-50 p-4",children:[c.jsx(Ad,{className:"mb-3 text-emerald-600",size:20}),c.jsx("p",{className:"text-xs font-bold text-emerald-800",children:"حاضرون"}),c.jsx("p",{className:"mt-1 text-2xl font-black text-emerald-900",children:i.present})]}),c.jsxs("div",{className:"rounded-xl border border-orange-200 bg-orange-50 p-4",children:[c.jsx(Dg,{className:"mb-3 text-orange-600",size:20}),c.jsx("p",{className:"text-xs font-bold text-orange-800",children:"متأخرون"}),c.jsx("p",{className:"mt-1 text-2xl font-black text-orange-900",children:i.late})]}),c.jsxs("div",{className:"rounded-xl border border-rose-200 bg-rose-50 p-4",children:[c.jsx(Vg,{className:"mb-3 text-rose-600",size:20}),c.jsx("p",{className:"text-xs font-bold text-rose-800",children:"غائبون"}),c.jsx("p",{className:"mt-1 text-2xl font-black text-rose-900",children:i.absent})]})]}),c.jsxs("div",{className:"mt-6",children:[c.jsxs("div",{className:"mb-2 flex items-center justify-between text-xs font-bold text-slate-600",children:[c.jsx("span",{children:"نسبة الحضور المسجلة"}),c.jsxs("strong",{className:"text-slate-950",children:[o,"%"]})]}),c.jsx("div",{className:"h-2.5 overflow-hidden rounded-full bg-slate-100",children:c.jsx("div",{className:"h-full rounded-full bg-emerald-500 transition-all",style:{width:`${o}%`}})})]})]}),c.jsx(vi,{title:"الوضع المالي",icon:aa,action:c.jsxs(yn,{to:"/financials",className:"inline-flex items-center gap-1 text-xs font-black text-blue-700 hover:text-blue-900",children:["التقارير ",c.jsx(Va,{size:14})]}),children:c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-blue-50 p-4",children:[c.jsx("span",{className:"text-sm font-bold text-blue-900",children:"المداخيل المحصلة"}),c.jsxs("strong",{className:"text-lg font-black text-blue-800",children:[i.revenue," DH"]})]}),c.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-amber-50 p-4",children:[c.jsx("span",{className:"text-sm font-bold text-amber-900",children:"المتبقي المتوقع"}),c.jsxs("strong",{className:"text-lg font-black text-amber-800",children:[l," DH"]})]}),c.jsxs("p",{className:"flex items-center gap-2 text-xs font-semibold text-slate-500",children:[c.jsx(jg,{size:15,className:"text-amber-600"}),"راجع صفحة الأداءات لتحديث التحصيل الشهري."]})]})})]}),c.jsxs("div",{className:"grid grid-cols-1 gap-6 xl:grid-cols-[.9fr_1.1fr]",children:[c.jsx(vi,{title:"إجراءات سريعة",icon:la,children:c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs(yn,{to:"/students",className:"rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-black text-blue-900 transition hover:bg-blue-100",children:[c.jsx(Nu,{size:20,className:"mb-3 text-blue-700"})," إدارة التلاميذ"]}),c.jsxs(yn,{to:"/attendance",className:"rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-black text-emerald-900 transition hover:bg-emerald-100",children:[c.jsx(oa,{size:20,className:"mb-3 text-emerald-700"})," تسجيل الحضور"]}),c.jsxs(yn,{to:"/payments",className:"rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-black text-amber-900 transition hover:bg-amber-100",children:[c.jsx(aa,{size:20,className:"mb-3 text-amber-700"})," إضافة أداء"]}),c.jsxs(yn,{to:"/teachers",className:"rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-black text-slate-900 transition hover:bg-slate-100",children:[c.jsx(Og,{size:20,className:"mb-3 text-slate-700"})," الأساتذة"]})]})}),c.jsx(vi,{title:"آخر الأنشطة",icon:la,action:c.jsx(yn,{to:"/archive",className:"text-xs font-black text-blue-700 hover:text-blue-900",children:"السجل الكامل"}),children:n.length?c.jsx("div",{className:"divide-y divide-slate-100",children:n.map(u=>c.jsxs("div",{className:"flex items-center gap-3 py-3 first:pt-0 last:pb-0",children:[c.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-blue-700",children:c.jsx(la,{size:16})}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("p",{className:"truncate text-sm font-bold text-slate-800",children:tE(u)}),c.jsx("p",{className:"mt-1 text-xs font-medium text-slate-500",children:new Date(u.timestamp).toLocaleString("ar-MA")})]})]},u.id))}):c.jsxs("div",{className:"rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center",children:[c.jsx("p",{className:"text-sm font-bold text-slate-600",children:"لا توجد أنشطة مسجلة بعد."}),c.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"ستظهر هنا عمليات التسجيل والأداء والحضور."})]})})]})]})}const Op="https://xxxxxxxx.supabase.co",bl="xxxxxxxxxxxxxxxx",vl=/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(Op)&&bl.length>20&&!bl.includes("xxxx");vl||console.warn("Supabase is not configured. Add valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY values to enable Supabase-backed pages.");const ke=Eg(vl?Op:"https://placeholder.supabase.co",vl?bl:"placeholder-anon-key");function Uo({open:r,title:e,message:t,confirmLabel:n="تأكيد",cancelLabel:s="إلغاء",busy:i=!1,onConfirm:o,onCancel:l}){return r?c.jsx("div",{className:"fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm",role:"presentation",onMouseDown:u=>{u.target===u.currentTarget&&!i&&l()},children:c.jsxs("section",{role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-dialog-title",className:"w-full max-w-md space-y-4 rounded-xl border border-slate-200 bg-white p-6 text-right shadow-2xl",dir:"rtl",children:[c.jsxs("div",{className:"flex items-center gap-3 text-amber-700",children:[c.jsx(Td,{size:24,"aria-hidden":"true"}),c.jsx("h2",{id:"confirm-dialog-title",className:"text-lg font-black text-slate-900",children:e})]}),c.jsx("p",{className:"text-sm leading-6 text-slate-600",children:t}),c.jsxs("div",{className:"flex justify-start gap-3 border-t border-slate-100 pt-4",children:[c.jsx("button",{type:"button",onClick:l,disabled:i,className:"rounded-lg bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-200",children:s}),c.jsx("button",{type:"button",onClick:o,disabled:i,className:"rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700",children:i?"جاري التنفيذ...":n})]})]})}):null}const Mp=["الأول ابتدائي","الثاني ابتدائي","الثالث ابتدائي","الرابع ابتدائي","الخامس ابتدائي","السادس ابتدائي","الأولى إعدادي","الثانية إعدادي","الثالثة إعدادي","الجذع المشترك","الأولى باكالوريا","الثانية باكالوريا"],Lp="isshaam_students",Ra=Mp.map(r=>({id:r,name_ar:r})),wd=()=>{try{const r=JSON.parse(window.localStorage.getItem(Lp)||"[]");return Array.isArray(r)?r:[]}catch{return[]}},Pa=r=>{window.localStorage.setItem(Lp,JSON.stringify(r))};function rE(){const{students:r,setStudents:e}=Dr(),[t,n]=O.useState([]),[s,i]=O.useState([]),[o,l]=O.useState(!0),[u,d]=O.useState(!1),[m,g]=O.useState(""),[v,T]=O.useState(!1),[R,j]=O.useState(null),[A,D]=O.useState(null),[L,P]=O.useState(""),[B,k]=O.useState(null),[M,y]=O.useState(null),[p,b]=O.useState({full_name:"",level_id:"",teacher_id:"",parent_phone:"",parent_whatsapp:"",monthly_fee:"",status:"active",archived:!1}),I=O.useCallback(async()=>{const U=wd();e(U),i(Ra),l(!1),g("");try{const[W,X,ae]=await Promise.all([ke.from("students").select("*").eq("archived",!1).order("full_name",{ascending:!0}),ke.from("teachers").select("*").order("full_name",{ascending:!0}),ke.from("levels").select("*").eq("is_active",!0).order("name_ar",{ascending:!0})]);if(W.error)throw W.error;let be=X.data||[];X.error&&(console.warn("Supabase teachers unavailable; trying Firestore.",X.error),be=(await at(We(_e,"teachers"))).docs.map(Ze=>({id:Ze.id,...Ze.data()}))),ae.error&&ae.error.code!=="PGRST116"&&console.warn("Levels notice:",ae.error);const fe=W.data||[],fn=new Set(U.map(ze=>ze.id));e([...U,...fe.filter(ze=>!fn.has(ze.id))]),n(be.filter(ze=>ze.status!=="inactive")),i(ae.data?.length?ae.data:Ra)}catch(W){console.error("Students loading error:",W),e(wd()),i(Ra);try{const X=await at(We(_e,"teachers"));n(X.docs.map(ae=>({id:ae.id,...ae.data()})).filter(ae=>ae.status!=="inactive"))}catch(X){console.error("Teachers loading error:",X),n([]),g("تعذر تحميل قائمة الأساتذة من قاعدة البيانات. يرجى المحاولة مرة أخرى.")}}finally{l(!1)}},[e]);O.useEffect(()=>{I()},[I]);const w=U=>{if(U.levels?.name_ar)return U.levels.name_ar;if(U.level_id&&s.length>0){const W=s.find(X=>String(X.id)===String(U.level_id));if(W)return W.name_ar}return U.academic_level||"المستوى غير محدد"},E=U=>{const W=U.teachers||U.teacher;if(W){const X=W.full_name||W.fullName||W.name;if(X)return X}if(U.teacher_name)return U.teacher_name;if(U.teacher_id&&t.length>0){const X=t.find(ae=>String(ae.id)===String(U.teacher_id));if(X)return X.full_name||X.fullName||X.name||X.displayName}return"غير محدد"},x=U=>{const{name:W,value:X}=U.target;b(ae=>({...ae,[W]:X}))},Ee=()=>{j(null),b({full_name:"",level_id:"",teacher_id:"",parent_phone:"",parent_whatsapp:"",monthly_fee:"",status:"active",archived:!1})},lt=async U=>{if(U.preventDefault(),!p.full_name.trim()){alert("المرجو إدخال اسم التلميذ.");return}if(!p.parent_phone.trim()){alert("المرجو إدخال رقم هاتف الولي.");return}if(!p.teacher_id){g("المرجو اختيار الأستاذ قبل حفظ التلميذ.");return}d(!0),g("");const W={id:R||`local-${Date.now()}`,full_name:p.full_name.trim(),level_id:s.some(fe=>String(fe.id)===String(p.level_id))?p.level_id:null,academic_level:s.some(fe=>String(fe.id)===String(p.level_id))?null:p.level_id||null,teacher_id:p.teacher_id||null,parent_phone:p.parent_phone.trim(),parent_whatsapp:p.parent_whatsapp.trim()||p.parent_phone.trim(),monthly_fee:p.monthly_fee===""?0:Number(p.monthly_fee),status:"active",archived:!1,localOnly:!0},X=t.find(fe=>String(fe.id)===String(W.teacher_id)),ae={...W,teacher_name:X?.full_name||X?.fullName||X?.name||""},be=R?r.map(fe=>fe.id===R?{...fe,...ae}:fe):[ae,...r];e(be),Pa(be),Ps(R?"تعديل طالب":"إضافة طالب",`${R?"تم تعديل":"تمت إضافة"} الطالب ${W.full_name}.`);try{const fe={full_name:W.full_name,level_id:W.level_id,teacher_id:W.teacher_id,parent_phone:W.parent_phone,parent_whatsapp:W.parent_whatsapp,monthly_fee:W.monthly_fee,status:W.status,archived:!1},fn=R?await ke.from("students").update(fe).eq("id",R).select("*").single():await ke.from("students").insert(fe).select("*").single(),{data:ze,error:Ze}=fn;if(Ze)throw Ze;ze?.id&&e(mt=>R?mt.map(it=>it.id===R?{...ze,teacher_name:X?.full_name||X?.fullName||X?.name||"",localOnly:!1}:it):mt.map(it=>it.id===W.id?{...ze,teacher_name:X?.full_name||X?.fullName||X?.name||"",localOnly:!1}:it))}catch(fe){console.error("Student teacher relationship save failed:",fe),g("تعذر حفظ علاقة الأستاذ بالتلميذ في قاعدة البيانات. تم الاحتفاظ بالبيانات محلياً، يرجى المحاولة مرة أخرى.")}finally{d(!1),T(!1),Ee()}},K=U=>{D(null),j(U.id),b({full_name:U.full_name||U.fullName||"",level_id:U.level_id||U.academic_level||"",teacher_id:U.teacher_id||U.teacherId||"",parent_phone:U.parent_phone||U.parentPhone||"",parent_whatsapp:U.parent_whatsapp||U.parentWhatsapp||"",monthly_fee:U.monthly_fee??U.monthlyFee??"",status:U.status||"active",archived:!1}),T(!0)},Q=async(U,W)=>{const X=r.find(be=>be.id===U)||{id:U,full_name:W},ae=r.filter(be=>be.id!==U);e(ae),Pa(ae),HI(X),y(X);try{const{error:be}=await ke.from("students").update({archived:!0,status:"archived",updated_at:new Date().toISOString()}).eq("id",U);if(be)throw be}catch(be){console.warn("لم تتم مزامنة أرشفة التلميذ مع الخادم، وتم حفظها محلياً.",be)}Ps("أرشفة طالب",`تمت أرشفة ملف ${W}.`),A&&A.id===U&&D(null)},ee=(U,W)=>{k({id:U,name:W})},ie=async()=>{if(M){JI(M),e(U=>[M,...U.filter(W=>W.id!==M.id)]),Pa([M,...r.filter(U=>U.id!==M.id)]);try{const{error:U}=await ke.from("students").update({archived:!1,status:"active",updated_at:new Date().toISOString()}).eq("id",M.id);if(U)throw U}catch(U){console.warn("تعذر التراجع عن الأرشفة على الخادم.",U)}y(null)}},De=async U=>{if(U.preventDefault(),!L.trim()||!A)return;const W=A.notes||"",X=new Date().toLocaleString("ar-MA"),ae=W.trim()?`${W}

[${X}] ${L.trim()}`:`[${X}] ${L.trim()}`;try{const{data:be,error:fe}=await ke.from("students").update({notes:ae,updated_at:new Date().toISOString()}).eq("id",A.id).select("*").single();if(fe)throw fe;D({...A,...be}),P(""),await I()}catch(be){console.error("Comment save error:",be),g("")}},Tt=U=>{const W=U.parent_whatsapp||U.parent_phone;if(!W){alert("رقم واتساب الولي غير موجود.");return}let X=W.trim().replace(/\s+/g,"").replace(/-/g,"");X.startsWith("+")&&(X=X.substring(1)),X.startsWith("0")&&(X=`212${X.substring(1)}`);const ae=`السلام عليكم ورحمة الله وبركاته،

تواصل معكم إدارة *أكاديمية إسهام* 🏫 بخصوص التلميذ(ة) *${U.full_name}*.

شكراً لتعاونكم. 🌹`;window.open(`https://wa.me/${X}?text=${encodeURIComponent(ae)}`,"_blank")};return o?c.jsx("div",{className:"p-8 text-center text-slate-700 font-bold dir-rtl",children:"جاري تحميل ملفات التلاميذ..."}):c.jsxs("div",{className:"mx-auto w-full max-w-7xl space-y-6 dir-rtl text-right pb-10",children:[c.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-black text-slate-900",children:"إدارة ملفات التلاميذ 👥"}),c.jsx("p",{className:"text-sm font-bold text-slate-600",children:"إدارة معلومات التلاميذ والملفات الدراسية"})]}),c.jsx("button",{onClick:async()=>{await I(),T(!0)},className:"w-full md:w-auto px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-black shadow-lg shadow-orange-600/20 transition",children:"➕ إضافة تلميذ جديد"})]}),m&&c.jsxs("div",{className:"p-4 bg-red-100 border-2 border-red-400 text-red-900 rounded-xl font-bold",children:["❌ ",m]}),r.length===0?c.jsx("div",{className:"bg-white rounded-xl border p-8 text-center font-bold text-slate-600",children:"لا يوجد تلاميذ حالياً."}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:r.map(U=>c.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-200 p-5 border-t-4 border-t-indigo-500 hover:-translate-y-0.5 hover:shadow-lg transition",children:[c.jsxs("div",{className:"border-b pb-3",children:[c.jsx("h3",{className:"text-xl font-black text-slate-900",children:U.full_name}),c.jsx("span",{className:"inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-900 rounded-md text-xs font-black",children:w(U)})]}),c.jsxs("div",{className:"mt-4 space-y-2 text-sm font-bold text-slate-800",children:[c.jsxs("p",{children:["📞 هاتف الولي:",c.jsxs("span",{className:"text-blue-700",children:[" ",pl(U.parent_phone)]})]}),c.jsxs("p",{children:["🏫 المدرسة: ",U.original_school||"—"]}),c.jsxs("p",{children:["💰 الواجب الشهري: ",U.monthly_fee||0," درهم"]}),c.jsxs("p",{children:["👨‍🏫 الأستاذ: ",E(U)]})]}),c.jsxs("div",{className:"mt-5 flex gap-2",children:[c.jsx("button",{onClick:()=>D(U),className:"flex-1 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-black text-xs",children:"📂 فتح الملف"}),c.jsx("button",{onClick:()=>Tt(U),className:"px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black text-xs",children:"📲"}),c.jsx("button",{onClick:()=>ee(U.id,U.full_name),className:"px-3 py-2.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-black text-xs",children:"🗑️"})]})]},U.id))}),A&&c.jsx("div",{className:"fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center p-4 overflow-y-auto",children:c.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-3xl text-slate-900 max-h-[90vh] flex flex-col",children:[c.jsxs("div",{className:"flex justify-between items-center p-5 border-b bg-white rounded-t-xl shrink-0",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-2xl font-black text-slate-900",children:"ملف التلميذ"}),c.jsx("p",{className:"text-lg font-bold text-blue-700",children:A.full_name})]}),c.jsx("button",{onClick:()=>D(null),className:"px-3 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-700",children:"✖"})]}),c.jsxs("div",{className:"p-6 overflow-y-auto space-y-4 flex-1",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[c.jsx("strong",{className:"text-slate-900 block mb-1",children:"المستوى:"}),c.jsx("p",{className:"text-slate-800",children:w(A)})]}),c.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[c.jsx("strong",{className:"text-slate-900 block mb-1",children:"الأستاذ المسؤول:"}),c.jsx("p",{className:"text-slate-800",children:E(A)})]}),c.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[c.jsx("strong",{className:"text-slate-900 block mb-1",children:"هاتف الولي:"}),c.jsx("p",{className:"text-slate-800",children:pl(A.parent_phone)})]}),c.jsxs("div",{className:"bg-slate-50 p-4 rounded-lg border border-slate-200",children:[c.jsx("strong",{className:"text-slate-900 block mb-1",children:"الواجب الشهري:"}),c.jsxs("p",{className:"text-slate-800",children:[A.monthly_fee||0," درهم"]})]})]}),c.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-xl p-4",children:[c.jsx("h4",{className:"font-black text-amber-900 mb-2",children:"📝 ملاحظات التلميذ"}),c.jsx("p",{className:"whitespace-pre-line text-slate-800",children:A.notes||"لا توجد ملاحظات."})]}),c.jsxs("div",{className:"bg-slate-100 p-4 rounded-xl border border-slate-200",children:[c.jsx("h4",{className:"font-black text-slate-900 mb-3",children:"✍️ إضافة ملاحظة بعد الحصة"}),c.jsxs("form",{onSubmit:De,className:"flex flex-col md:flex-row gap-2",children:[c.jsx("input",{type:"text",value:L,onChange:U=>P(U.target.value),placeholder:"اكتب الملاحظة...",className:"flex-1 p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"}),c.jsx("button",{type:"submit",className:"px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-black shrink-0",children:"إضافة ➕"})]})]})]}),c.jsxs("div",{className:"p-4 border-t bg-slate-50 rounded-b-xl flex gap-2 shrink-0",children:[c.jsx("button",{onClick:()=>Tt(A),className:"flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black",children:"📲 تواصل مع الولي"}),c.jsx("button",{onClick:()=>K(A),className:"px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-black",children:"تعديل"}),c.jsx("button",{onClick:()=>ee(A.id,A.full_name),className:"px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-black",children:"🗑️ أرشفة"})]})]})}),M&&c.jsxs("div",{className:"fixed bottom-5 left-5 z-[10001] flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white shadow-xl",role:"status",children:[c.jsx("span",{children:"تمت أرشفة التلميذ."}),c.jsx("button",{type:"button",onClick:ie,className:"rounded-lg bg-orange-500 px-3 py-1.5 text-white hover:bg-orange-600",children:"تراجع"}),c.jsx("button",{type:"button","aria-label":"إغلاق إشعار التراجع",onClick:()=>y(null),className:"text-slate-300 hover:text-white",children:"×"})]}),c.jsx(Uo,{open:!!B,title:"تأكيد أرشفة التلميذ",message:`هل أنت متأكد من أرشفة التلميذ "${B?.name||""}"؟ يمكنك التراجع عن العملية مباشرة.`,confirmLabel:"أرشفة",onCancel:()=>k(null),onConfirm:async()=>{const U=B;k(null),await Q(U.id,U.name)}}),v&&c.jsx("div",{className:"fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center p-4 overflow-y-auto",children:c.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl text-slate-900 max-h-[85vh] overflow-y-auto flex flex-col my-auto",children:[c.jsxs("div",{className:"flex justify-between items-center p-5 border-b bg-white rounded-t-xl shrink-0",children:[c.jsxs("h3",{className:"text-xl font-black text-slate-900",children:[R?"تعديل بيانات التلميذ":"إضافة تلميذ جديد"," 👨‍🎓"]}),c.jsx("button",{type:"button",onClick:()=>{T(!1),Ee()},className:"px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-700",children:"✖"})]}),c.jsxs("form",{onSubmit:lt,className:"flex flex-col flex-1 overflow-hidden",children:[c.jsxs("div",{className:"p-6 overflow-y-auto space-y-4 flex-1",children:[c.jsxs("div",{children:[c.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"الاسم الكامل *"}),c.jsx("input",{name:"full_name",required:!0,value:p.full_name,onChange:x,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900",placeholder:"مثال: محمد العلمي"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"المستوى الدراسي *"}),c.jsxs("select",{name:"level_id",value:p.level_id,onChange:x,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900",children:[c.jsx("option",{value:"",children:"اختيار المستوى"}),(s.length?s:Mp.map(U=>({id:U,name_ar:U}))).map(U=>c.jsx("option",{value:U.id,children:U.name_ar},U.id))]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"الأستاذ *"}),c.jsxs("select",{name:"teacher_id",required:!0,value:p.teacher_id,onChange:x,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900",children:[c.jsx("option",{value:"",children:t.length?"اختر الأستاذ":"لا يوجد أساتذة مسجلون"}),t.map(U=>{const W=U.full_name||U.fullName||U.name||U.displayName;return c.jsx("option",{value:U.id,children:W||"أستاذ غير مسمى"},U.id)})]}),!t.length&&c.jsx("p",{className:"mt-1 text-xs font-bold text-amber-700",children:"أضف أستاذاً من صفحة إدارة الأساتذة أولاً."})]}),c.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:c.jsxs("div",{children:[c.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"هاتف الولي (WhatsApp) *"}),c.jsx("input",{name:"parent_phone",required:!0,value:p.parent_phone,onChange:x,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900",placeholder:"0612345678"})]})}),c.jsxs("div",{children:[c.jsx("label",{className:"font-bold block mb-1 text-slate-800",children:"الواجب الشهري (درهم)"}),c.jsx("input",{type:"number",min:"0",name:"monthly_fee",value:p.monthly_fee,onChange:x,className:"w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"})]})]}),c.jsxs("div",{className:"p-4 border-t bg-slate-50 rounded-b-xl flex gap-2 shrink-0",children:[c.jsx("button",{type:"submit",disabled:u,className:"flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-black disabled:opacity-50",children:u?"جاري الحفظ...":R?"حفظ التعديلات ✅":"حفظ التلميذ ✅"}),c.jsx("button",{type:"button",onClick:()=>{T(!1),Ee()},className:"px-5 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-800",children:"إلغاء"})]})]})]})})]})}function sE(){const{userRole:r="admin",currentUser:e=null}=kr(),{students:t,setStudents:n}=Dr(),[s,i]=O.useState([]),[o,l]=O.useState({}),[u,d]=O.useState(new Date().toISOString().split("T")[0]),[m,g]=O.useState(""),[v,T]=O.useState(""),[R,j]=O.useState(!0),[A,D]=O.useState(!1),[L,P]=O.useState(!1),[B,k]=O.useState(""),M=O.useCallback(async()=>{j(!0),k("");try{const{data:K,error:Q}=await ke.from("students").select(`
            id,
            full_name,
            parent_name,
            parent_phone,
            parent_whatsapp,
            level_id,
            class_id,
            status,
            archived
          `).eq("status","active").or("archived.is.null,archived.eq.false").order("full_name",{ascending:!0});if(Q)throw Q;const{data:ee,error:ie}=await ke.from("levels").select(`
            id,
            name_ar,
            name_fr
          `).eq("is_active",!0).order("name_ar");if(ie)throw ie;const{data:De,error:Tt}=await ke.from("classes").select(`
            id,
            name,
            level,
            capacity,
            room
          `).order("name");if(Tt)throw Tt;const{data:U,error:W}=await ke.from("teachers").select(`
            id,
            full_name,
            user_id,
            status
          `).order("full_name");if(W)throw W;const{data:X,error:ae}=await ke.from("attendance").select(`
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
        `).eq("attendance_date",u);if(ae)throw ae;const be={};(ee||[]).forEach(le=>{be[le.id]=le});const fe={};(De||[]).forEach(le=>{fe[le.id]=le});const fn=(K||[]).map(le=>{const Vr=be[le.level_id],Kn=fe[le.class_id];return{...le,level:Vr?.name_ar||Kn?.level||"غير محدد",levelId:le.level_id||null,className:Kn?.name||"عام",teacherId:le.teacher_id||le.teacherId||null}}),ze={};(X||[]).forEach(le=>{le.student_id&&(ze[le.student_id]=le.teacher_id)});const Ze=fn.map(le=>({...le,teacherId:ze[le.id]||le.teacherId||le.teacher_id||null}));n(Ze),i((U||[]).filter(le=>le.status!=="inactive"));const mt={};(X||[]).forEach(le=>{mt[le.student_id]=le.status});const it={};Ze.forEach(le=>{it[le.id]=mt[le.id]||"present"}),l(it)}catch(K){console.error("خطأ في جلب بيانات الحضور:",K),k("");const Q=JSON.parse(window.localStorage.getItem("isshaam_students")||"[]").filter(ie=>!ie.archived),ee=co().filter(ie=>ie.date===u);n(Q.map(ie=>({...ie,level:ie.academic_level||ie.level||"غير محدد",levelId:ie.level_id||null,className:"عام",teacherId:ie.teacher_id||ie.teacherId||null}))),i([]),l(Object.fromEntries(ee.map(ie=>[ie.student_id,ie.status])))}finally{j(!1)}},[u,n]);O.useEffect(()=>{M()},[M]);const y=(K,Q)=>{l(ee=>({...ee,[K]:Q}))},p=t.filter(K=>{if(r==="teacher"&&e&&!(K.teacherId===e.uid))return!1;const Q=m.trim().toLowerCase(),ee=K.full_name||"",ie=K.level||"",De=!Q||ee.toLowerCase().includes(Q)||ie.toLowerCase().includes(Q),Tt=v?K.level===v:!0;return De&&Tt}),b=K=>{const Q={...o};p.forEach(ee=>{Q[ee.id]=K}),l(Q)},I=async()=>{if(p.length!==0){D(!0),P(!1),k("");try{const K=p.map(Q=>({student_id:Q.id,class_id:Q.class_id||null,teacher_id:Q.teacherId||null,attendance_date:u,date:u,status:o[Q.id]||"present",notes:null}));WI(K.map(Q=>({...Q,id:`${Q.student_id}-${Q.attendance_date}`,studentName:t.find(ee=>ee.id===Q.student_id)?.full_name||"تلميذ",timestamp:new Date().toISOString()}))),K.forEach(Q=>{Ps("attendance_saved",{message:`تم تسجيل حضور الطالب في تاريخ ${Q.attendance_date}.`,studentId:Q.student_id,date:Q.attendance_date,status:Q.status})});for(const Q of K){const{data:ee,error:ie}=await ke.from("attendance").select("id").eq("student_id",Q.student_id).eq("attendance_date",u).limit(1).maybeSingle();if(ie)throw ie;if(ee?.id){const{error:De}=await ke.from("attendance").update({class_id:Q.class_id,teacher_id:Q.teacher_id,date:Q.date,status:Q.status,notes:Q.notes}).eq("id",ee.id);if(De)throw De}else{const{error:De}=await ke.from("attendance").insert(Q);if(De)throw De}}P(!0),setTimeout(()=>{P(!1)},4e3)}catch(K){console.error("خطأ في حفظ الحضور:",K),k("")}finally{D(!1)}}},w=K=>{const Q=K.parent_whatsapp||K.parent_phone;if(!Q){alert("رقم هاتف الولي غير متوفر!");return}let ee=Q.trim().replace(/\s+/g,"").replace(/-/g,"");ee.startsWith("+")&&(ee=ee.substring(1)),ee.startsWith("0")&&(ee="212"+ee.substring(1));const ie=`السلام عليكم ورحمة الله وبركاته،

تخبركم إدارة *أكاديمية إسهام* 🏫 بتسجيل غياب التلميذ(ة) *${K.full_name}* عن حصة اليوم بتاريخ *${u}*.

المرجو التواصل معنا لتأكيد سبب الغياب.

شكراً لتعاونكم. 🌹`;window.open(`https://wa.me/${ee}?text=${encodeURIComponent(ie)}`,"_blank")},E=p.filter(K=>o[K.id]==="present").length,x=p.filter(K=>o[K.id]==="absent").length,Ee=p.filter(K=>o[K.id]==="late").length,lt=p.filter(K=>o[K.id]==="excused").length;return R?c.jsx("div",{className:"p-8 text-center text-slate-700 font-bold dir-rtl",children:"جاري تحميل قائمة التلاميذ..."}):c.jsxs("div",{className:"space-y-6 dir-rtl pb-12 text-right",children:[c.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl shadow-md border border-slate-300 gap-4",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-black text-slate-900",children:"تتبع الحضور والغياب 📋"}),c.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"تسجيل وتأكيد حضور التلاميذ حسب التاريخ والمستوى"})]}),c.jsxs("div",{className:"flex items-center gap-3 w-full md:w-auto",children:[c.jsx("input",{type:"date",value:u,onChange:K=>d(K.target.value),className:"px-3.5 py-2 border-2 border-slate-400 rounded-lg bg-white text-slate-900 font-bold text-sm"}),c.jsx("button",{onClick:I,disabled:A||p.length===0,className:"px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold rounded-lg shadow-md text-sm disabled:opacity-50",children:A?"جاري الحفظ...":"حفظ السجل ✅"})]})]}),L&&c.jsx("div",{className:"p-4 bg-emerald-100 border-2 border-emerald-400 text-emerald-900 rounded-xl font-extrabold text-center",children:"🎉 تم حفظ سجل الحضور والغياب بنجاح في Supabase!"}),B&&c.jsxs("div",{className:"p-4 bg-rose-100 border-2 border-rose-400 text-rose-900 rounded-xl font-bold text-center",children:["❌ ",B]}),c.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-md border border-slate-300 flex flex-col md:flex-row justify-between items-center gap-4",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[c.jsx("input",{type:"text",placeholder:"🔍 البحث عن تلميذ...",value:m,onChange:K=>g(K.target.value),className:"px-4 py-2 border-2 border-slate-300 rounded-lg w-56 text-slate-900 font-bold text-sm"}),c.jsxs("select",{value:v,onChange:K=>T(K.target.value),className:"px-3 py-2 border-2 border-slate-300 rounded-lg text-sm bg-white font-bold text-slate-800",children:[c.jsx("option",{value:"",children:"كل المستويات"}),c.jsx("option",{value:"الأول ابتدائي",children:"الأول ابتدائي"}),c.jsx("option",{value:"الثاني ابتدائي",children:"الثاني ابتدائي"}),c.jsx("option",{value:"الثالث ابتدائي",children:"الثالث ابتدائي"}),c.jsx("option",{value:"الرابع ابتدائي",children:"الرابع ابتدائي"}),c.jsx("option",{value:"الخامس ابتدائي",children:"الخامس ابتدائي"}),c.jsx("option",{value:"السادس ابتدائي",children:"السادس ابتدائي"}),c.jsx("option",{value:"الأولى إعدادي",children:"الأولى إعدادي"}),c.jsx("option",{value:"الثانية إعدادي",children:"الثانية إعدادي"}),c.jsx("option",{value:"الثالثة إعدادي",children:"الثالثة إعدادي"}),c.jsx("option",{value:"الجذع المشترك",children:"الجذع المشترك"}),c.jsx("option",{value:"الأولى باكالوريا",children:"الأولى باكالوريا"}),c.jsx("option",{value:"الثانية باكالوريا",children:"الثانية باكالوريا"})]})]}),c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"text-xs font-black",children:"تحديد سريع:"}),c.jsx("button",{onClick:()=>b("present"),className:"px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-black",children:"الجميع حاضر ✅"}),c.jsx("button",{onClick:()=>b("absent"),className:"px-4 py-2 bg-rose-600 text-white rounded-lg text-xs font-black",children:"الجميع غائب ❌"})]}),c.jsxs("div",{className:"flex items-center gap-2 text-xs font-black flex-wrap",children:[c.jsxs("span",{className:"text-emerald-900 bg-emerald-100 px-3 py-1.5 rounded-lg",children:["حاضر:",c.jsxs("strong",{children:[" ",E]})]}),c.jsxs("span",{className:"text-rose-900 bg-rose-100 px-3 py-1.5 rounded-lg",children:["غائب:",c.jsxs("strong",{children:[" ",x]})]}),c.jsxs("span",{className:"text-blue-900 bg-blue-100 px-3 py-1.5 rounded-lg",children:["متأخر:",c.jsxs("strong",{children:[" ",Ee]})]}),c.jsxs("span",{className:"text-amber-900 bg-amber-100 px-3 py-1.5 rounded-lg",children:["مبرر:",c.jsxs("strong",{children:[" ",lt]})]})]})]}),c.jsx("div",{className:"bg-white rounded-xl shadow-md border border-slate-300 overflow-hidden",children:p.length===0?c.jsx("div",{className:"p-6 text-center text-slate-500 font-bold",children:"لا يوجد تلاميذ مطابقون للفلترة الحالية."}):c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-right border-collapse min-w-[850px]",children:[c.jsx("thead",{className:"bg-slate-100 border-b-2 border-slate-300 text-slate-800 font-bold text-sm",children:c.jsxs("tr",{children:[c.jsx("th",{className:"px-6 py-4",children:"الاسم الكامل"}),c.jsx("th",{className:"px-6 py-4",children:"المستوى"}),c.jsx("th",{className:"px-6 py-4",children:"القسم"}),c.jsx("th",{className:"px-6 py-4",children:"الأستاذ المسؤول"}),c.jsx("th",{className:"px-6 py-4 text-center",children:"حالة الحضور"}),c.jsx("th",{className:"px-6 py-4 text-center",children:"تواصل"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-200 text-sm",children:p.map(K=>{const Q=s.find(ie=>ie.id===K.teacherId),ee=o[K.id]||"present";return c.jsxs("tr",{className:"hover:bg-slate-50 transition",children:[c.jsx("td",{className:"px-6 py-4 font-black text-slate-900",children:K.full_name}),c.jsx("td",{className:"px-6 py-4 text-slate-700 font-bold",children:K.level}),c.jsx("td",{className:"px-6 py-4 text-slate-700 font-bold",children:K.className}),c.jsx("td",{className:"px-6 py-4 text-slate-800 font-bold",children:Q?Q.full_name:"عام"}),c.jsx("td",{className:"px-6 py-4 text-center",children:c.jsxs("div",{className:"inline-flex rounded-lg p-1 bg-slate-200 gap-1 border border-slate-300 flex-wrap justify-center",children:[c.jsx("button",{type:"button",onClick:()=>y(K.id,"present"),className:`px-3 py-1.5 rounded-md text-xs font-black ${ee==="present"?"bg-emerald-600 text-white":"bg-slate-100 text-slate-800"}`,children:"حاضر ✅"}),c.jsx("button",{type:"button",onClick:()=>y(K.id,"absent"),className:`px-3 py-1.5 rounded-md text-xs font-black ${ee==="absent"?"bg-rose-600 text-white":"bg-slate-100 text-slate-800"}`,children:"غائب ❌"}),c.jsx("button",{type:"button",onClick:()=>y(K.id,"late"),className:`px-3 py-1.5 rounded-md text-xs font-black ${ee==="late"?"bg-blue-600 text-white":"bg-slate-100 text-slate-800"}`,children:"متأخر ⏰"}),c.jsx("button",{type:"button",onClick:()=>y(K.id,"excused"),className:`px-3 py-1.5 rounded-md text-xs font-black ${ee==="excused"?"bg-amber-600 text-white":"bg-slate-100 text-slate-800"}`,children:"مبرر ⚠️"})]})}),c.jsx("td",{className:"px-6 py-4 text-center",children:ee==="absent"&&c.jsx("button",{type:"button",onClick:()=>w(K),className:"px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-black",children:"📲 إشعار الغياب"})})]},K.id)})})]})})})]})}const Id=["الرياضيات","الفيزياء والكيمياء","علوم الحياة والأرض","اللغة الفرنسية","اللغة الإنجليزية","اللغة العربية","الفلسفة","الاجتماعيات","مادة أخرى"];function iE(){const[r,e]=O.useState([]),[t,n]=O.useState(!0),[s,i]=O.useState(!1),[o,l]=O.useState(null),[u,d]=O.useState(!1),[m,g]=O.useState(""),[v,T]=O.useState(""),[R,j]=O.useState({show:!1,id:null,name:""}),[A,D]=O.useState(!1),[L,P]=O.useState({fullName:"",subject:"الرياضيات",phone:"",salary:""}),B=O.useCallback(async()=>{try{n(!0);const E=(await at(We(_e,"teachers"))).docs.map(x=>({id:x.id,...x.data(),displayName:x.data().fullName||x.data().full_name||x.data().name||"أستاذ غير مسمى"}));e(E)}catch(w){console.error("خطأ في جلب البيانات:",w)}finally{n(!1)}},[]);O.useEffect(()=>{B()},[B]);const k=async w=>{w.preventDefault(),d(!0);try{const E={fullName:L.fullName.trim(),name:L.fullName.trim(),subject:L.subject,phone:L.phone.trim(),salary:L.salary?Number(L.salary):0,updatedAt:ar()};o?(await wa(ht(_e,"teachers",o),E),l(null)):await Ac(We(_e,"teachers"),{...E,createdAt:ar()}),P({fullName:"",subject:"الرياضيات",phone:"",salary:""}),i(!1),B()}catch(E){console.error("خطأ في الحفظ:",E)}finally{d(!1)}},M=w=>{P({fullName:w.full_name||w.fullName||w.name||"",subject:w.subject||"الرياضيات",phone:w.phone||"",salary:w.salary||""}),l(w.id),i(!0)},y=(w,E)=>{j({show:!0,id:w,name:E})},p=async()=>{if(R.id){D(!0);try{const[w,E]=await Promise.all([at(fl(We(_e,"students"),ml("teacherId","==",R.id))),at(fl(We(_e,"students"),ml("teacher_id","==",R.id)))]);w.size>0||E.size>0?(await wa(ht(_e,"teachers",R.id),{status:"inactive",updatedAt:ar()}),alert("تم تعطيل الأستاذ بدلاً من حذفه لأنه مرتبط بتلاميذ محفوظين.")):await wa(ht(_e,"teachers",R.id),{status:"inactive",updatedAt:ar()}),j({show:!1,id:null,name:""}),B()}catch(w){console.error("خطأ في الحذف:",w)}finally{D(!1)}}},b=w=>{if(!w)return alert("رقم الهاتف غير متوفر!");let E=w.trim().replace(/\s+/g,"").replace(/-/g,"");E.startsWith("0")&&(E="212"+E.substring(1)),E.startsWith("+")&&(E=E.substring(1)),window.open(`https://wa.me/${E}`,"_blank")},I=r.filter(w=>{const E=w.displayName.toLowerCase().includes(m.toLowerCase())||w.phone?.includes(m),x=v?w.subject===v:!0;return E&&x});return c.jsxs("div",{className:"min-h-screen bg-slate-100 p-4 md:p-6 space-y-6 dir-rtl text-right max-w-full pb-12",children:[c.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl shadow-sm border border-slate-200 gap-4",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 flex items-center gap-2",children:"إدارة الأساتذة 👨‍🏫"}),c.jsx("p",{className:"text-sm text-slate-500 mt-1",children:"إضافة وتتبع الطاقم التربوي لأكاديمية إسهام"})]}),c.jsxs("button",{onClick:()=>{i(!s),l(null),P({fullName:"",subject:"الرياضيات",phone:"",salary:""})},className:`px-5 py-2.5 text-white rounded-lg transition font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer ${s?"bg-slate-700 hover:bg-slate-800":"bg-orange-600 hover:bg-orange-700"}`,children:[c.jsx("span",{children:s?"✕":"+"}),c.jsx("span",{children:s?"إلغاء النافذة":"إضافة أستاذ جديد"})]})]}),s&&c.jsxs("form",{onSubmit:k,className:"bg-white p-6 rounded-xl shadow-md border-2 border-amber-300 space-y-4 transition-all",children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-slate-200 pb-3",children:[c.jsxs("h3",{className:"text-md font-bold text-slate-800 flex items-center gap-2",children:[c.jsx("span",{children:o?"✏️":"➕"}),o?"تعديل بيانات الأستاذ":"إضافة أستاذ جديد"]}),c.jsx("button",{type:"button",onClick:()=>i(!1),className:"text-slate-400 hover:text-slate-600 text-sm font-bold",children:"إغلاق ✕"})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"الاسم الكامل *"}),c.jsx("input",{type:"text",value:L.fullName,onChange:w=>P({...L,fullName:w.target.value}),required:!0,placeholder:"مثال: أستاذ عبد الله",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"المادة المدرسة"}),c.jsx("select",{value:L.subject,onChange:w=>P({...L,subject:w.target.value}),className:"w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer",children:Id.map(w=>c.jsx("option",{value:w,children:w},w))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"رقم الهاتف *"}),c.jsx("input",{type:"text",value:L.phone,onChange:w=>P({...L,phone:w.target.value}),required:!0,placeholder:"06XXXXXXXX",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-slate-700 font-bold mb-1",children:"المستحقات الشهريّة (درهم)"}),c.jsx("input",{type:"number",value:L.salary,onChange:w=>P({...L,salary:w.target.value}),placeholder:"مثال: 1500",className:"w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]})]}),c.jsxs("div",{className:"flex justify-end gap-2 pt-3 border-t border-slate-100",children:[c.jsx("button",{type:"button",onClick:()=>i(!1),className:"px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition cursor-pointer",children:"إلغاء"}),c.jsx("button",{type:"submit",disabled:u,className:"px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-bold transition shadow-sm cursor-pointer disabled:opacity-50 flex items-center gap-2",children:u?"جاري الحفظ...":"حفظ البيانات ✅"})]})]}),c.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-3 w-full md:w-auto",children:[c.jsx("input",{type:"text",placeholder:"🔍 البحث باسم الأستاذ أو الهاتف...",value:m,onChange:w=>g(w.target.value),className:"px-4 py-2 border border-slate-300 rounded-lg w-full md:w-64 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm"}),c.jsxs("select",{value:v,onChange:w=>T(w.target.value),className:"px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white cursor-pointer",children:[c.jsx("option",{value:"",children:"جميع المواد"}),Id.map(w=>c.jsx("option",{value:w,children:w},w))]})]}),c.jsxs("div",{className:"text-xs font-bold text-slate-600",children:["إجمالي الأساتذة: ",c.jsx("span",{className:"text-amber-600 font-bold text-sm bg-amber-50 px-2 py-1 rounded-md border border-amber-200",children:I.length})]})]}),c.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden",children:t?c.jsx("div",{className:"p-8 text-center text-slate-500 font-bold",children:"جاري تحميل لائحة الأساتذة..."}):I.length===0?c.jsxs("div",{className:"p-10 text-center text-slate-500 space-y-3",children:[c.jsx("p",{className:"text-base font-bold text-slate-700",children:"لا يوجد أساتذة مطابقون للبحث."}),!s&&c.jsx("button",{onClick:()=>i(!0),className:"px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold transition shadow-sm",children:"+ إضافة أستاذ الآن"})]}):c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-right border-collapse min-w-[650px]",children:[c.jsx("thead",{className:"bg-slate-100 border-b border-slate-200 text-xs text-slate-700 font-bold",children:c.jsxs("tr",{children:[c.jsx("th",{className:"p-4",children:"الاسم الكامل"}),c.jsx("th",{className:"p-4",children:"المادة"}),c.jsx("th",{className:"p-4",children:"رقم الهاتف"}),c.jsx("th",{className:"p-4",children:"المستحقات الشهريّة"}),c.jsx("th",{className:"p-4 text-center",children:"الإجراءات"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-100 text-sm",children:I.map(w=>c.jsxs("tr",{className:"hover:bg-slate-50 transition",children:[c.jsx("td",{className:"p-4 font-bold text-slate-900",children:w.displayName}),c.jsx("td",{className:"p-4",children:c.jsx("span",{className:"px-2.5 py-1 bg-amber-50 text-amber-800 rounded-md text-xs font-semibold border border-amber-200",children:w.subject||"غير محدد"})}),c.jsx("td",{className:"p-4 font-mono text-xs",dir:"ltr",children:c.jsxs("div",{className:"flex items-center gap-2 justify-end",children:[c.jsx("span",{className:"font-semibold text-slate-800",children:pl(w.phone)}),w.phone&&c.jsx("button",{onClick:()=>b(w.phone),className:"text-emerald-600 hover:text-emerald-700 text-base cursor-pointer",title:"تواصل عبر الواتساب",children:"💬"})]})}),c.jsx("td",{className:"p-4 font-semibold text-slate-800",children:w.salary?`${w.salary} درهم`:"---"}),c.jsx("td",{className:"p-4 text-center",children:c.jsxs("div",{className:"flex items-center justify-center gap-2",children:[c.jsx("button",{onClick:()=>M(w),className:"px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 rounded text-xs font-bold transition cursor-pointer",children:"✏️ تعديل"}),c.jsx("button",{onClick:()=>y(w.id,w.displayName),className:"px-2.5 py-1 bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 rounded text-xs font-bold transition cursor-pointer",children:"🗑️ حذف"})]})})]},w.id))})]})})}),c.jsx(Uo,{open:R.show,title:"تأكيد تعطيل الأستاذ",message:`هل أنت متأكد من تعطيل الأستاذ "${R.name}"؟ سيبقى السجل محفوظاً ولن تُحذف العلاقات.`,confirmLabel:"تعطيل",busy:A,onCancel:()=>j({show:!1,id:null,name:""}),onConfirm:p})]})}function oE(){const{students:r,setStudents:e}=Dr(),[t,n]=O.useState([]),[s,i]=O.useState(!0),[o,l]=O.useState(""),[u,d]=O.useState(""),[m,g]=O.useState(new Date().toLocaleString("ar-MA",{month:"long"})),[v,T]=O.useState(""),[R,j]=O.useState(null),[A,D]=O.useState(null),L=O.useCallback(async()=>{i(!0);try{const[p,b]=await Promise.all([at(We(_e,"students")),at(We(_e,"payments"))]),I=p.docs.map(E=>{const x=E.data();return{id:E.id,...x,fullName:x.fullName||x.full_name||"",parentPhone:x.parentPhone||x.parent_phone||"",monthlyFee:x.monthlyFee??x.monthly_fee??0,level:x.level||x.academic_level||""}}).filter(E=>!E.archived);e(E=>{const x=new Set(E.map(Ee=>Ee.id));return[...E,...I.filter(Ee=>!x.has(Ee.id))]});const w=b.docs.map(E=>({id:E.id,...E.data()}));n(w.sort((E,x)=>(x.createdAt?.seconds||0)-(E.createdAt?.seconds||0)))}catch(p){console.error("خطأ في جلب البيانات:",p);const b=JSON.parse(window.localStorage.getItem("isshaam_payments")||"[]");n(b)}finally{i(!1)}},[e]);O.useEffect(()=>{L()},[L]);const P=p=>{const b=p.target.value;l(b);const I=r.find(w=>w.id===b);I&&I.monthlyFee&&d(I.monthlyFee)},B=async p=>{if(p.preventDefault(),!o||!u)return alert("المرجو اختيار التلميذ والمبلغ");const b=r.find(E=>E.id===o);if(!b)return;const I={receiptNo:`REC-${Date.now().toString().slice(-6)}`,studentId:b.id,student_id:b.id,studentName:b.fullName,parentPhone:b.parentPhone||"",level:b.level,amount:u,month:m,notes:v,date:new Date().toLocaleDateString("ar-MA",{year:"numeric",month:"long",day:"numeric"}),time:new Date().toLocaleTimeString("ar-MA",{hour:"2-digit",minute:"2-digit"}),createdAt:ar()};j(I),l(""),d(""),T("");const w=JSON.parse(window.localStorage.getItem("isshaam_payments")||"[]");window.localStorage.setItem("isshaam_payments",JSON.stringify([{...I,createdAt:new Date().toISOString()},...w])),window.dispatchEvent(new Event("isshaam:payments-updated")),e(E=>E.map(x=>x.id===b.id?{...x,paymentStatus:"paid"}:x)),Ps("payment_created",{message:`تم تسجيل أداء بقيمة ${u} للطالب ${b.fullName}.`,studentName:b.fullName,studentId:b.id,amount:u});try{await Ac(We(_e,"payments"),I),L()}catch(E){console.error("خطأ في تسجيل الأداء:",E)}},k=async p=>{try{await tI(ht(_e,"payments",p)),n(b=>b.filter(I=>I.id!==p))}catch(b){console.error("خطأ أثناء حذف الوصل:",b),alert("حدث خطأ أثناء عملية الحذف")}},M=p=>{if(!p.parentPhone)return alert("رقم هاتف الولي غير متوفر لهذا التلميذ");const b=p.parentPhone.startsWith("0")?"212"+p.parentPhone.slice(1):p.parentPhone,I=`✨ *إشعار تسديد الواجب الشهري - ISSHAAM ACADEMY* ✨

السلام عليكم ورحمة الله وبركاته،
ولي أمر التلميذ(ة): *${p.studentName}* (${p.level})

نشكركم على ثقتكم الغالية فـ *ISSHAAM ACADEMY*. نود إخباركم أنه قد تم استلام الواجب الشهري بنجاح:
📄 *رقم الوصل:* ${p.receiptNo}
📅 *عن شهر:* ${p.month}
💰 *المبلغ الاستلام:* ${p.amount} درهم
🗓️ *تاريخ الأداء:* ${p.date}

الحالة: ✅ *مكاشي - PAYÉ*

نسأل الله بالتوفيق والنجاح لأبنائنا الكرام! 🎓
_إدارة أكاديمية عصام للدعم والتميز_`,w=`https://wa.me/${b}?text=${encodeURIComponent(I)}`;window.open(w,"_blank")},y=p=>{if(!p.parentPhone)return alert("رقم هاتف الولي غير متوفر لهذا التلميذ");const b=p.parentPhone.startsWith("0")?"212"+p.parentPhone.slice(1):p.parentPhone,I=new Date().toLocaleString("ar-MA",{month:"long"}),w=`🌸 *تذكير لطيف بالواجب الشهري - ISSHAAM ACADEMY* 🌸

السلام عليكم ورحمة الله وبركاته،
تحية طيبة وبعد من إدارة *ISSHAAM ACADEMY*.

نود تذكير ولي أمر التلميذ(ة): *${p.fullName}* (${p.level}) بأن موعد استيفاء الواجب الشهري الخاص بشهر (*${I}*) قد حان.

💰 *الواجب الشهري:* ${p.monthlyFee||"---"} درهم.

شاكرين لكم حسن تعاونكم واهتمامكم الدائم بمستقبل أبنائكم معنا 🌟.
لأي استفسار يرجى التواصل مع الإدارة.`,E=`https://wa.me/${b}?text=${encodeURIComponent(w)}`;window.open(E,"_blank")};return c.jsxs("div",{className:"space-y-6 dir-rtl text-right pb-10 font-sans",children:[c.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md border border-slate-300",children:[c.jsx("h2",{className:"text-2xl font-black text-slate-900 mb-2",children:"استلام الواجب الشهري وإرسال الوصولات 🧾"}),c.jsx("p",{className:"text-xs font-bold text-slate-600 mb-6",children:"سجل الأداء الشهري، اطبع الوصل المـكـاشـي، وأرسل الإشعارات عبر الواتساب مباشرة"}),c.jsxs("form",{onSubmit:B,className:"grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-bold",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block mb-1 text-slate-800",children:"اختيار التلميذ *"}),c.jsxs("select",{value:o,onChange:P,required:!0,className:"w-full p-2.5 border-2 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-blue-600",children:[c.jsx("option",{value:"",children:"-- اختر التلميذ --"}),r.map(p=>c.jsxs("option",{value:p.id,children:[p.fullName," (",p.level,")"]},p.id))]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block mb-1 text-slate-800",children:"عن شهر *"}),c.jsx("input",{type:"text",value:m,onChange:p=>g(p.target.value),required:!0,className:"w-full p-2.5 border-2 rounded-lg text-slate-900",placeholder:"مثال: أكتوبر / نونبر"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block mb-1 text-slate-800",children:"المبلغ المدفوع (درهم) *"}),c.jsx("input",{type:"number",value:u,onChange:p=>d(p.target.value),required:!0,className:"w-full p-2.5 border-2 rounded-lg text-slate-900",placeholder:"300"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block mb-1 text-slate-800",children:"ملاحظات (اختياري)"}),c.jsx("input",{type:"text",value:v,onChange:p=>T(p.target.value),className:"w-full p-2.5 border-2 rounded-lg text-slate-900",placeholder:"مثال: تسقيع جزئي، واجب الدورة..."})]}),c.jsx("div",{className:"md:col-span-4 mt-2",children:c.jsx("button",{type:"submit",className:"w-full md:w-auto px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-black text-sm shadow-md cursor-pointer transition",children:"💳 تسجيل الدفع وإصدار الوصل المـكـاشـي"})})]})]}),c.jsxs("div",{className:"bg-white rounded-xl shadow-md border border-slate-300 p-5",children:[c.jsx("h3",{className:"text-lg font-black text-slate-900 mb-3",children:"📲 قائمة التلاميذ للتذكير السريع بالواتساب:"}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",children:r.map(p=>c.jsxs("div",{className:"p-3 border rounded-lg bg-slate-50 flex justify-between items-center text-xs font-bold",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-slate-900 font-black",children:p.fullName}),c.jsxs("p",{className:"text-slate-500",children:[p.level," - ",p.monthlyFee||0," درهم"]})]}),c.jsx("button",{onClick:()=>y(p),className:"px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-lg text-[11px] flex items-center gap-1 cursor-pointer",children:"📱 تذكير بالأداء"})]},p.id))})]}),c.jsxs("div",{className:"bg-white rounded-xl shadow-md border border-slate-300 p-5",children:[c.jsx("h3",{className:"text-xl font-black text-slate-900 mb-4 border-b pb-2",children:"سجل الوصولات المنجزة والأداءات 📜"}),s?c.jsx("p",{className:"text-center font-bold text-slate-600 py-4",children:"جاري تحميل سجل الأداءات..."}):t.length>0?c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-right border-collapse text-xs",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"bg-slate-100 border-b border-slate-300 text-slate-800 font-black",children:[c.jsx("th",{className:"p-3",children:"رقم الوصل"}),c.jsx("th",{className:"p-3",children:"اسم التلميذ"}),c.jsx("th",{className:"p-3",children:"المستوى"}),c.jsx("th",{className:"p-3",children:"عن شهر"}),c.jsx("th",{className:"p-3",children:"المبلغ المدفوع"}),c.jsx("th",{className:"p-3",children:"التاريخ والوقت"}),c.jsx("th",{className:"p-3 text-center",children:"خيارات"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-200 font-bold text-slate-900",children:t.map(p=>c.jsxs("tr",{className:"hover:bg-slate-50",children:[c.jsx("td",{className:"p-3 font-mono font-black text-blue-800",children:p.receiptNo}),c.jsx("td",{className:"p-3 text-sm",children:p.studentName}),c.jsx("td",{className:"p-3",children:p.level}),c.jsx("td",{className:"p-3 bg-blue-50 text-blue-900 font-black rounded",children:p.month}),c.jsxs("td",{className:"p-3 text-emerald-800 font-black text-sm",children:[p.amount," درهم"]}),c.jsxs("td",{className:"p-3 text-slate-500 text-[11px]",children:[p.date," - ",p.time]}),c.jsxs("td",{className:"p-3 text-center flex justify-center gap-2",children:[c.jsx("button",{onClick:()=>j(p),className:"px-3 py-1 bg-slate-800 hover:bg-slate-900 text-white font-black rounded cursor-pointer",children:"🖨️ معاينة"}),c.jsx("button",{onClick:()=>M(p),className:"px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded cursor-pointer",children:"📲 واتساب"}),c.jsx("button",{onClick:()=>D({id:p.id,receiptNo:p.receiptNo}),className:"px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-black rounded cursor-pointer",title:"حذف إلى سلة المهملات",children:"🗑️ حذف"})]})]},p.id))})]})}):c.jsx("p",{className:"text-center font-bold text-slate-500 py-4",children:"لا توجد أداءات مسجلة بعد"})]}),R&&c.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50",children:c.jsxs("div",{className:"bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg border-2 border-slate-400",children:[c.jsxs("div",{className:"flex justify-between items-center mb-4 print:hidden",children:[c.jsx("span",{className:"font-black text-slate-800 text-sm",children:"معاينة وصل الأداء الرسمية"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:()=>M(R),className:"px-3 py-1.5 bg-emerald-600 text-white font-black text-xs rounded hover:bg-emerald-700 cursor-pointer",children:"📲 إرسال للواتساب"}),c.jsx("button",{onClick:()=>window.print(),className:"px-3 py-1.5 bg-blue-700 text-white font-black text-xs rounded hover:bg-blue-800 cursor-pointer",children:"🖨️ طباعة الآن"}),c.jsx("button",{onClick:()=>j(null),className:"px-3 py-1.5 bg-slate-200 text-slate-800 font-black text-xs rounded hover:bg-slate-300 cursor-pointer",children:"إغلاق ✖"})]})]}),c.jsxs("div",{className:"relative border-4 border-slate-900 p-6 rounded-lg bg-white text-slate-900 space-y-4 text-right overflow-hidden shadow-inner",children:[c.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-22deg] pointer-events-none opacity-85",children:c.jsxs("div",{className:"border-4 border-dashed border-red-600 rounded-full w-44 h-44 flex flex-col justify-center items-center text-center p-2 bg-red-50/30",children:[c.jsx("span",{className:"text-xs font-black text-red-600 tracking-wider",children:"★ ISSHAAM ACADEMY ★"}),c.jsx("span",{className:"text-2xl font-black text-red-600 my-0.5 border-y-2 border-red-600 px-3",children:"PAYÉ"}),c.jsx("span",{className:"text-[10px] font-black text-red-600",children:"تم الأداء - مقبوض"})]})}),c.jsxs("div",{className:"border-b-2 border-slate-900 pb-3 flex justify-between items-center relative z-10",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center font-black text-xl shadow",children:"🎓"}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-black text-slate-900",children:"ISSHAAM ACADEMY"}),c.jsx("p",{className:"text-[11px] font-bold text-blue-900",children:"مؤسسة الدعم والتقوية والتوجيه"})]})]}),c.jsxs("div",{className:"text-left font-mono text-xs font-black",children:[c.jsx("p",{className:"text-blue-900",children:R.receiptNo}),c.jsx("p",{className:"text-[10px] text-slate-600",children:R.date})]})]}),c.jsx("div",{className:"text-center bg-slate-900 text-white py-1.5 rounded font-black text-xs tracking-wide relative z-10",children:"وصل استلام الواجب الشهري الرسمي — REÇU DE PAIEMENT"}),c.jsxs("div",{className:"space-y-2 text-xs font-bold pt-1 relative z-10",children:[c.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[c.jsx("span",{className:"text-slate-600",children:"اسم التلميذ(ة):"}),c.jsx("span",{className:"text-slate-900 font-black text-sm",children:R.studentName})]}),c.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[c.jsx("span",{className:"text-slate-600",children:"المستوى الدراسي:"}),c.jsx("span",{children:R.level})]}),c.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[c.jsx("span",{className:"text-slate-600",children:"واجب شهر:"}),c.jsx("span",{className:"font-black text-blue-900",children:R.month})]}),c.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[c.jsx("span",{className:"text-slate-600",children:"المبلغ المستلم:"}),c.jsxs("span",{className:"font-black text-emerald-800 text-base",children:[R.amount," درهم مغربي"]})]}),R.notes&&c.jsxs("div",{className:"flex justify-between border-b pb-1 border-slate-200",children:[c.jsx("span",{className:"text-slate-600",children:"ملاحظات الإدارة:"}),c.jsx("span",{children:R.notes})]})]}),c.jsx("div",{className:"bg-blue-50/80 p-2.5 rounded-lg border border-blue-200 text-center relative z-10",children:c.jsx("p",{className:"text-[11px] font-black text-blue-950",children:"🌟 نشكركم على ثقتكم الغالية فـ أكاديمية ISSHAAM. نسأل الله التوفيق والنجاح لأبنائنا الكرام! 🌟"})}),c.jsxs("div",{className:"pt-4 flex justify-between text-[11px] font-black text-slate-800 relative z-10",children:[c.jsx("p",{children:"توقيع وخاتم الإدارة:"}),c.jsx("p",{children:"توقيع الولي(ة):"})]})]})]})}),c.jsx(Uo,{open:!!A,title:"تأكيد حذف الوصل",message:`هل أنت متأكد من نقل الوصل رقم ${A?.receiptNo||""} إلى سلة المهملات؟`,confirmLabel:"حذف الوصل",onCancel:()=>D(null),onConfirm:async()=>{const p=A;D(null),await k(p.id)}})]})}function aE(){const{students:r}=Dr(),[e,t]=O.useState([]),[n,s]=O.useState(!0),[i,o]=O.useState(""),[l,u]=O.useState("شتنبر"),[d,m]=O.useState("all"),g=["شتنبر","أكتوبر","نونبر","دجنبر","يناير","فبراير","مارس","أبريل","ماي","يونيو"],v=k=>k?typeof k=="string"?k:k.seconds?new Date(k.seconds*1e3).toLocaleDateString("ar-MA"):String(k):new Date().toLocaleDateString("ar-MA"),T=async()=>{try{await at(We(_e,"students"));const M=(await at(We(_e,"payments"))).docs.map(b=>b.data()),y=JSON.parse(window.localStorage.getItem("isshaam_payments")||"[]"),p=new Set(M.map(b=>b.receiptNo).filter(Boolean));t([...M,...y.filter(b=>!b.receiptNo||!p.has(b.receiptNo))])}catch(k){console.error("خطأ في جلب البيانات:",k);const M=JSON.parse(window.localStorage.getItem("isshaam_payments")||"[]");t(M)}finally{s(!1)}};O.useEffect(()=>{T()},[]),O.useEffect(()=>{const k=()=>{try{t(JSON.parse(window.localStorage.getItem("isshaam_payments")||"[]"))}catch{t([])}};return window.addEventListener("storage",k),window.addEventListener("isshaam:payments-updated",k),()=>{window.removeEventListener("storage",k),window.removeEventListener("isshaam:payments-updated",k)}},[]);const R=k=>e.find(M=>String(M.studentId)===String(k)&&M.month===l&&(M.status==="مؤدى"||M.status==="paid")),j=async k=>{try{const M=new Date().toLocaleDateString("ar-MA"),y={studentId:k.id||"",studentName:k.fullName||"",amount:k.monthlyFee||0,month:l,status:"مؤدى",paidAt:M};t(b=>[...b,y]);const p=JSON.parse(window.localStorage.getItem("isshaam_payments")||"[]");window.localStorage.setItem("isshaam_payments",JSON.stringify([{...y,createdAt:new Date().toISOString()},...p])),window.dispatchEvent(new Event("isshaam:payments-updated")),Ps("تسجيل أداء",`تم تسجيل أداء بقيمة ${y.amount} للطالب ${y.studentName}.`),await Ac(We(_e,"payments"),{...y,paidAtTimestamp:ar()}),T()}catch(M){console.error("خطأ في تسجيل الأداء:",M)}},A=(k,M)=>{const y=window.open("","_blank","width=600,height=700");if(!y)return;const p=k.fullName||"غير محدد",b=k.level||"غير محدد",I=M?.amount||k.monthlyFee||0,w=v(M?.paidAt),E=`
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <title>وصل أداء - ${p}</title>
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
          <div class="row"><span>التلميذ:</span><strong>${p}</strong></div>
          <div class="row"><span>المستوى:</span><strong>${b}</strong></div>
          <div class="row"><span>الشهر:</span><strong>${l}</strong></div>
          <div class="row total"><span>المبلغ:</span><span>${I} DH</span></div>
          <hr />
          <p style="font-size:12px; color:#666;">تاريخ الأداء: ${w}</p>
        </div>
        <script>window.onload = function() { window.print(); window.close(); };<\/script>
      </body>
      </html>
    `;y.document.write(E),y.document.close()},D=r.filter(k=>!k.archived),L=D.filter(k=>{const M=(k.fullName||"").toLowerCase().includes(i.toLowerCase()),y=!!R(k.id);return d==="paid"?M&&y:d==="pending"?M&&!y:M}),P=D.reduce((k,M)=>R(M.id)?k+Number(M.monthlyFee||0):k,0),B=D.reduce((k,M)=>R(M.id)?k:k+Number(M.monthlyFee||0),0);return c.jsxs("div",{className:"p-6 space-y-6 dir-rtl text-right pb-12",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-slate-200",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"إدارة المالية والأداءات 💰"}),c.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"متابعة الواجبات الشهريّة"})]}),c.jsxs("div",{className:"flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200",children:[c.jsx("label",{className:"text-xs font-bold text-gray-700",children:"الشهر:"}),c.jsx("select",{value:l,onChange:k=>u(k.target.value),className:"px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-bold",children:g.map(k=>c.jsx("option",{value:k,children:k},k))})]})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[c.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsxs("p",{className:"text-xs font-bold text-slate-400",children:["المداخيل (",l,")"]}),c.jsxs("h3",{className:"text-xl font-extrabold text-emerald-600 mt-1",children:[P," DH"]})]}),c.jsx(Mg,{className:"w-6 h-6 text-emerald-600"})]}),c.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsxs("p",{className:"text-xs font-bold text-slate-400",children:["المتبقية (",l,")"]}),c.jsxs("h3",{className:"text-xl font-extrabold text-amber-600 mt-1",children:[B," DH"]})]}),c.jsx(Lg,{className:"w-6 h-6 text-amber-600"})]}),c.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-slate-400",children:"نسبة التحصيل"}),c.jsxs("h3",{className:"text-xl font-extrabold text-indigo-600 mt-1",children:[D.length>0?Math.round(D.filter(k=>R(k.id)).length/D.length*100):0,"%"]})]}),c.jsx(Ad,{className:"w-6 h-6 text-indigo-600"})]})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm",children:[c.jsxs("div",{className:"relative w-full sm:w-80",children:[c.jsx("input",{type:"text",placeholder:"البحث باسم التلميذ...",value:i,onChange:k=>o(k.target.value),className:"w-full pr-10 pl-4 py-2 border border-gray-300 rounded-xl text-sm"}),c.jsx(Fg,{className:"w-4 h-4 text-gray-400 absolute right-3 top-3"})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{onClick:()=>m("all"),className:"border border-slate-700 bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold text-white",children:"الكل"}),c.jsx("button",{onClick:()=>m("paid"),className:"border border-emerald-300 bg-emerald-100 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-800",children:"تم الأداء"}),c.jsx("button",{onClick:()=>m("pending"),className:"border border-rose-300 bg-rose-100 px-3 py-1.5 rounded-lg text-xs font-bold text-rose-800",children:"غير مؤدى"})]})]}),c.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",children:n?c.jsx("div",{className:"p-8 text-center text-gray-500 font-bold",children:"جاري تحميل البيانات..."}):c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-right border-collapse",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"bg-slate-100 border-b border-slate-300 text-slate-900 text-sm",children:[c.jsx("th",{className:"p-4",children:"اسم التلميذ"}),c.jsx("th",{className:"p-4",children:"المستوى"}),c.jsx("th",{className:"p-4",children:"الواجب الشهري"}),c.jsx("th",{className:"p-4",children:"الحالة"}),c.jsx("th",{className:"p-4 text-center",children:"الإجراء"})]})}),c.jsx("tbody",{className:"divide-y divide-gray-100 text-sm",children:L.map(k=>{const M=R(k.id),y=!!M;return c.jsxs("tr",{className:"hover:bg-gray-50",children:[c.jsx("td",{className:"p-4 font-semibold",children:k.fullName}),c.jsx("td",{className:"p-4",children:k.level||"غير محدد"}),c.jsxs("td",{className:"p-4 font-bold text-emerald-600",children:[k.monthlyFee||0," DH"]}),c.jsx("td",{className:"p-4",children:y?c.jsx("span",{className:"border border-emerald-300 bg-emerald-100 px-2 py-1 rounded-lg text-xs font-bold text-emerald-800",children:"تم الأداء ✅"}):c.jsx("span",{className:"border border-rose-300 bg-rose-100 px-2 py-1 rounded-lg text-xs font-bold text-rose-800",children:"غير مؤدى ⏳"})}),c.jsx("td",{className:"p-4 text-center",children:y?c.jsxs("button",{onClick:()=>A(k,M),className:"bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1",children:[c.jsx(Ug,{className:"w-3.5 h-3.5"})," طباعة الوصل"]}):c.jsxs("button",{onClick:()=>j(k),className:"bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1",children:[c.jsx(Bg,{className:"w-4 h-4"})," تأكيد الأداء"]})})]},k.id)})})]})})})]})}const Ca="./logo.jpeg";function lE(){const{settings:r,updateSettings:e,loading:t}=zs(),[n,s]=O.useState(!1),[i,o]=O.useState(""),[l,u]=O.useState("branding"),[d,m]=O.useState({academyName:"ISSHAAM ACADEMY",logoUrl:Ca,bgColor:"bg-slate-100",primaryColor:"#f59e0b",language:"ar"}),[g,v]=O.useState({phone:"",address:"Moulay Rachid, Casablanca",academicYear:"2025/2026",teacherPercentage:50,notes:"شكراً لثقتكم بأكاديمية إسهام."}),[T,R]=O.useState([]),[j,A]=O.useState(""),[D,L]=O.useState(null);O.useEffect(()=>{r&&(m(y=>({...y,...r.branding||{}})),v(y=>({...y,...r.general||{}})),R(Array.isArray(r.adminEmails)?r.adminEmails:[]))},[r]);const P=async y=>{y.preventDefault();try{s(!0),o(""),await e({branding:d,general:g,adminEmails:T}),o("تم حفظ التغييرات وتطبيقها فوراً في الموقع كامل! ✅")}catch(p){console.error("خطأ في حفظ الإعدادات:",p),o("حدث خطأ أثناء حفظ الإعدادات ❌")}finally{s(!1)}},B=async y=>{y.preventDefault();const p=j.trim().toLowerCase();if(p){if(T.includes(p)){o("هذا البريد الإلكتروني موجود بالفعل ❌");return}try{s(!0),o("");const b=[...T,p];await e({adminEmails:b}),R(b),A(""),o(`تمت إضافة ${p} إلى قائمة المشرفين ✅`)}catch(b){console.error("خطأ في إضافة المشرف:",b),o("حدث خطأ أثناء إضافة المشرف ❌")}finally{s(!1)}}},k=async y=>{try{s(!0),o("");const p=T.filter(b=>b!==y);await e({adminEmails:p}),R(p),o(`تمت إزالة ${y} من قائمة المشرفين ✅`)}catch(p){console.error("خطأ في حذف المشرف:",p),o("حدث خطأ أثناء حذف المشرف ❌")}finally{s(!1)}};if(t)return c.jsx("div",{className:"p-8 text-center text-slate-600 font-bold dir-rtl",children:"جاري تحميل الإعدادات..."});const M=i.includes("✅");return c.jsxs("div",{className:"max-w-5xl mx-auto space-y-6 dir-rtl text-right pb-12",children:[c.jsx("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:"⚙️ إعدادات الأكاديمية"}),c.jsx("p",{className:"text-slate-500 text-sm mt-1",children:"التحكم في الهوية، الألوان، اللغة، المشرفين، وبيانات المؤسسة."})]})}),i&&c.jsx("div",{className:`p-4 rounded-xl font-medium text-sm shadow-sm ${M?"bg-emerald-50 text-emerald-700 border border-emerald-200":"bg-rose-50 text-rose-700 border border-rose-200"}`,children:i}),c.jsxs("div",{className:"flex flex-wrap border border-slate-200 gap-2 bg-white p-2 rounded-xl shadow-sm",children:[c.jsx("button",{type:"button",onClick:()=>u("branding"),className:`px-4 py-2.5 rounded-lg font-bold text-sm transition ${l==="branding"?"bg-amber-500 text-white shadow-sm":"text-slate-600 hover:bg-slate-100"}`,children:"🎨 الهوية والألوان واللغة"}),c.jsx("button",{type:"button",onClick:()=>u("admins"),className:`px-4 py-2.5 rounded-lg font-bold text-sm transition ${l==="admins"?"bg-amber-500 text-white shadow-sm":"text-slate-600 hover:bg-slate-100"}`,children:"👥 إدارة المشرفين"}),c.jsx("button",{type:"button",onClick:()=>u("general"),className:`px-4 py-2.5 rounded-lg font-bold text-sm transition ${l==="general"?"bg-amber-500 text-white shadow-sm":"text-slate-600 hover:bg-slate-100"}`,children:"📋 بيانات المؤسسة"})]}),l==="branding"&&c.jsxs("form",{onSubmit:P,className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6",children:[c.jsx("h3",{className:"text-md font-bold text-slate-800 border-b pb-3",children:"تخصيص اللوغو، الألوان، واللغة"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 text-sm",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"اسم المؤسسة / الأكاديمية *"}),c.jsx("input",{type:"text",value:d.academyName,onChange:y=>m({...d,academyName:y.target.value}),required:!0,className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"رابط اللوغو"}),c.jsx("input",{type:"text",placeholder:`${Ca} أو رابط مباشر`,value:d.logoUrl,onChange:y=>m({...d,logoUrl:y.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"}),d.logoUrl&&c.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[c.jsx("span",{className:"text-xs text-slate-500 font-bold",children:"معاينة اللوغو:"}),c.jsx("img",{src:d.logoUrl,onError:y=>{y.currentTarget.src=Ca},alt:"Logo",className:"h-12 w-12 object-contain rounded-full border-2 border-amber-400 p-1"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"لون خلفية الصفحة"}),c.jsxs("select",{value:d.bgColor,onChange:y=>m({...d,bgColor:y.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg bg-white cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none",children:[c.jsx("option",{value:"bg-slate-100",children:"رمادي فاتح هادئ"}),c.jsx("option",{value:"bg-gray-50",children:"أبيض عاجي"}),c.jsx("option",{value:"bg-slate-900",children:"وضع مظلم"}),c.jsx("option",{value:"bg-amber-50/40",children:"دافئ خفيف"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"لغة النظام"}),c.jsxs("select",{value:d.language,onChange:y=>m({...d,language:y.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg bg-white cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none",children:[c.jsx("option",{value:"ar",children:"العربية"}),c.jsx("option",{value:"fr",children:"Français"}),c.jsx("option",{value:"en",children:"English"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"اللون الرئيسي للهوية"}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("input",{type:"color",value:d.primaryColor,onChange:y=>m({...d,primaryColor:y.target.value}),className:"w-12 h-10 p-1 border rounded cursor-pointer"}),c.jsx("span",{className:"text-xs font-mono bg-slate-100 px-3 py-1.5 rounded-md border font-bold text-slate-700",children:d.primaryColor})]})]})]}),c.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-100",children:c.jsx("button",{type:"submit",disabled:n,className:"px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed",children:n?"جاري الحفظ...":"حفظ التغييرات ✅"})})]}),l==="admins"&&c.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-md font-bold text-slate-800 border-b pb-3",children:"إدارة المشرفين"}),c.jsx("p",{className:"text-xs text-slate-500 mt-2",children:"هذه القائمة مخصصة لتسجيل الحسابات المعتمدة كمشرفين داخل إعدادات الأكاديمية."})]}),c.jsxs("form",{onSubmit:B,className:"flex flex-col sm:flex-row gap-2 max-w-xl",children:[c.jsx("input",{type:"email",required:!0,placeholder:"admin@gmail.com",value:j,onChange:y=>A(y.target.value),className:"flex-1 p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"}),c.jsx("button",{type:"submit",disabled:n,className:"px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed",children:n?"جاري الحفظ...":"+ إضافة Admin"})]}),c.jsxs("div",{className:"mt-4",children:[c.jsx("h4",{className:"text-xs font-bold text-slate-500 mb-3",children:"الحسابات المسجلة:"}),T.length===0?c.jsx("p",{className:"text-sm text-slate-400 font-semibold bg-slate-50 p-4 rounded-lg border text-center",children:"لا يوجد مسؤولون محددون حالياً."}):c.jsx("ul",{className:"divide-y border border-slate-200 rounded-lg overflow-hidden",children:T.map(y=>c.jsxs("li",{className:"p-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:bg-slate-50 text-sm",children:[c.jsxs("span",{className:"font-bold text-slate-800 flex items-center gap-2",children:["👤 ",gl(y)]}),c.jsx("button",{type:"button",onClick:()=>L(y),disabled:n,className:"px-3 py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-md border border-rose-200 text-xs font-bold transition disabled:opacity-50",children:"حذف الصلاحية 🗑️"})]},y))})]})]}),l==="general"&&c.jsxs("form",{onSubmit:P,className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6",children:[c.jsx("h3",{className:"text-md font-bold text-slate-800 border-b pb-3",children:"البيانات العامة والنسب"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"السنة الدراسية"}),c.jsx("input",{type:"text",value:g.academicYear,onChange:y=>v({...g,academicYear:y.target.value}),placeholder:"2025/2026",className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"نسبة الأستاذ الافتراضية (%)"}),c.jsx("input",{type:"number",min:"0",max:"100",value:g.teacherPercentage,onChange:y=>v({...g,teacherPercentage:Number(y.target.value)}),className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"رقم هاتف التواصل"}),c.jsx("input",{type:"tel",value:g.phone,onChange:y=>v({...g,phone:y.target.value}),placeholder:"06XXXXXXXX",dir:"ltr",className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"العنوان / المقر"}),c.jsx("input",{type:"text",value:g.address,onChange:y=>v({...g,address:y.target.value}),className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"})]}),c.jsxs("div",{className:"md:col-span-2",children:[c.jsx("label",{className:"block font-bold text-slate-700 mb-1",children:"ملاحظات / شروط عامة"}),c.jsx("textarea",{rows:"4",value:g.notes,onChange:y=>v({...g,notes:y.target.value}),placeholder:"أدخل الملاحظات التي تظهر في الوصولات...",className:"w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none resize-y"})]})]}),c.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-100",children:c.jsx("button",{type:"submit",disabled:n,className:"px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed",children:n?"جاري الحفظ...":"حفظ التغييرات ✅"})})]}),c.jsx(Uo,{open:!!D,title:"تأكيد إزالة صلاحية المشرف",message:`هل أنت متأكد من إزالة ${gl(D||"")} من قائمة المشرفين؟`,confirmLabel:"إزالة الصلاحية",busy:n,onCancel:()=>L(null),onConfirm:async()=>{const y=D;L(null),await k(y)}})]})}const xi=r=>new Date(r).toLocaleString("ar-MA",{dateStyle:"medium",timeStyle:"short"});function cE(){const[r,e]=O.useState("attendance"),[t,n]=O.useState(""),[s,i]=O.useState(""),[o,l]=O.useState(co),[u,d]=O.useState(Na),[m,g]=O.useState(lo),[v,T]=O.useState([]),{setStudents:R}=Dr();O.useEffect(()=>{let P=!0;ke.from("teachers").select("id, full_name").then(({data:M,error:y})=>{if(y)throw y;P&&T(M||[])}).catch(M=>console.warn("تعذر تحميل أسماء الأساتذة للأرشيف.",M));const B=()=>{d(Na()),l(co())},k=()=>{g(lo())};return window.addEventListener("isshaam:archive-updated",B),window.addEventListener("isshaam:activity-updated",k),window.addEventListener("isshaam:attendance-updated",B),()=>{P=!1,window.removeEventListener("isshaam:archive-updated",B),window.removeEventListener("isshaam:activity-updated",k),window.removeEventListener("isshaam:attendance-updated",B)}},[]);const j=P=>{const B=P.teachers||P.teacher,k=B?.full_name||B?.fullName||B?.name;if(k)return k;const M=v.find(y=>String(y.id)===String(P.teacher_id||P.teacherId));return M?.full_name||M?.fullName||M?.name||"غير محدد"},A=O.useMemo(()=>o.filter(P=>(!t||P.date===t)&&(!s||P.date?.startsWith(s))),[o,t,s]),D=()=>{const P=A.map(y=>({التاريخ:y.date,التلميذ:y.studentName,الحالة:y.status,الوقت:xi(y.timestamp)})),B=new Blob([JSON.stringify(P,null,2)],{type:"application/json;charset=utf-8"}),k=URL.createObjectURL(B),M=document.createElement("a");M.href=k,M.download=`attendance-${t||"history"}.json`,M.click(),URL.revokeObjectURL(k)},L=async P=>{const B=QI(P);if(B){d(Na()),R(k=>[...k,B]);try{const{error:k}=await ke.from("students").update({archived:!1,status:"active",updated_at:new Date().toISOString()}).eq("id",P);if(k)throw k}catch(k){console.warn("لم تتم مزامنة استعادة التلميذ مع الخادم، وتم حفظها محلياً.",k)}}};return c.jsxs("div",{className:"mx-auto w-full max-w-7xl space-y-6 pb-10",dir:"rtl",children:[c.jsxs("header",{className:"rounded-2xl bg-gradient-to-br from-[#0B192C] to-[#1E3E62] p-6 text-white shadow-xl",children:[c.jsx("p",{className:"text-sm font-bold text-amber-300",children:"ISSHAAM ACADEMY"}),c.jsx("h1",{className:"mt-2 text-3xl font-black",children:"الأرشيف والسجلات"}),c.jsx("p",{className:"mt-2 text-sm text-slate-200",children:"مراجعة الحضور والطلاب المؤرشفين وسجل العمليات."})]}),c.jsx("div",{className:"flex gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-sm",children:[["attendance","أرشيف الحضور"],["students","الطلاب المؤرشفون"],["activity","سجل النشاط"]].map(([P,B])=>c.jsx("button",{type:"button",onClick:()=>e(P),className:`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-black transition ${r===P?"bg-orange-600 text-white":"text-slate-500 hover:bg-slate-100"}`,children:B},P))}),r==="attendance"&&c.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6",children:[c.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",children:[c.jsxs("label",{className:"text-sm font-bold text-slate-700",children:["اختر تاريخا مخصصا",c.jsx("input",{type:"date",value:t,onChange:P=>n(P.target.value),className:"mt-2 block rounded-xl border border-slate-300 px-3 py-2"}),c.jsx("span",{className:"mt-3 block",children:"أو اختر شهرا"}),c.jsx("input",{type:"month",value:s,onChange:P=>i(P.target.value),className:"mt-2 block rounded-xl border border-slate-300 px-3 py-2"})]}),c.jsx("button",{type:"button",onClick:D,className:"rounded-lg bg-orange-600 px-4 py-2.5 font-bold text-white hover:bg-orange-700",children:"تصدير السجل"})]}),c.jsxs("div",{className:"mt-5 overflow-x-auto",children:[c.jsxs("table",{className:"w-full min-w-[620px] text-right text-sm",children:[c.jsx("thead",{className:"bg-slate-100 text-slate-700",children:c.jsxs("tr",{children:[c.jsx("th",{className:"p-3",children:"التاريخ"}),c.jsx("th",{className:"p-3",children:"التلميذ"}),c.jsx("th",{className:"p-3",children:"الحالة"}),c.jsx("th",{className:"p-3",children:"وقت التسجيل"})]})}),c.jsx("tbody",{children:A.map(P=>c.jsxs("tr",{className:"border-b border-slate-100",children:[c.jsx("td",{className:"p-3",children:P.date}),c.jsx("td",{className:"p-3 font-bold",children:P.studentName}),c.jsx("td",{className:"p-3",children:P.status}),c.jsx("td",{className:"p-3",children:xi(P.timestamp)})]},P.id))})]}),!A.length&&c.jsx("p",{className:"p-8 text-center font-bold text-slate-500",children:"لا توجد سجلات محلية لهذا التاريخ."})]})]}),r==="students"&&c.jsxs("section",{className:"grid gap-4 md:grid-cols-2",children:[u.map(P=>c.jsxs("article",{className:"rounded-2xl border border-amber-200 bg-white p-5 shadow-sm",children:[c.jsx("h2",{className:"font-black text-slate-900",children:P.full_name}),c.jsx("p",{className:"mt-1 text-sm text-slate-500",children:P.academic_level||P.level_id||"المستوى غير محدد"}),c.jsxs("p",{className:"mt-2 text-sm font-bold text-slate-700",children:["الأستاذ: ",j(P)]}),c.jsxs("p",{className:"mt-2 text-xs text-slate-400",children:["أرشف في ",xi(P.archivedAt)]}),c.jsx("button",{type:"button",onClick:()=>L(P.id),className:"mt-4 rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-700",children:"إعادة تفعيل"})]},P.id)),!u.length&&c.jsx("p",{className:"rounded-2xl bg-white p-8 text-center font-bold text-slate-500",children:"لا توجد ملفات مؤرشفة."})]}),r==="activity"&&c.jsxs("section",{className:"space-y-3",children:[m.map(P=>c.jsxs("article",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",children:[c.jsxs("div",{className:"flex justify-between gap-3",children:[c.jsx("strong",{className:"text-[#1E3E62]",children:P.type}),c.jsx("time",{className:"text-xs text-slate-400",children:xi(P.timestamp)})]}),c.jsx("p",{className:"mt-2 text-sm text-slate-600",children:P.details})]},P.id)),!m.length&&c.jsx("p",{className:"rounded-2xl bg-white p-8 text-center font-bold text-slate-500",children:"لا توجد أنشطة مسجلة بعد."})]})]})}const Oi={"نظام إدارة الأكاديمية":"Système de gestion de l’académie","إغلاق القائمة":"Fermer le menu",الإشعارات:"Notifications",المستخدم:"Utilisateur","تسجيل الخروج":"Se déconnecter","لوحة التحكم":"Tableau de bord","إدارة التلاميذ":"Gestion des élèves","الحضور والغياب":"Présence et absences","إدارة الأساتذة":"Gestion des enseignants","المالية والأداءات":"Finances et paiements","التقارير المالية":"Rapports financiers","إعدادات النظام":"Paramètres du système","مرحباً بك 👋":"Bienvenue 👋",أونلاين:"En ligne","نظرة عامة على أداء ومداخيل المركز هذا الشهر":"Vue d’ensemble des performances et des revenus du centre ce mois-ci","إضافة / إدارة التلاميذ 👥":"Ajouter / gérer les élèves 👥","تسجيل الحضور اليومي ✅":"Enregistrer la présence du jour ✅","تسجيل الأداءات المالية 💰":"Enregistrer les paiements 💰","إجمالي التلاميذ":"Total des élèves","عدد الأساتذة":"Nombre d’enseignants","الحضور اليوم":"Présence du jour","مداخيل الشهر":"Revenus du mois","مؤشرات الأداء السريعة 📊":"Indicateurs rapides 📊","نسبة الحضور المسجلة اليوم":"Taux de présence enregistré aujourd’hui","حالة المداخيل المستحقة":"État des revenus dus","تأكد من متابعة أداءات التلاميذ المتبقية عبر صفحة الأداءات المالية.":"Suivez les paiements restants depuis la page des finances.","⚙️ إعدادات الأكاديمية":"⚙️ Paramètres de l’Académie","التحكم في الهوية، الألوان، اللغة، المشرفين، وبيانات المؤسسة.":"Gérez l’identité, les couleurs, la langue, les administrateurs et les informations de l’établissement.","🎨 الهوية والألوان واللغة":"🎨 Identité, couleurs et langue","👥 إدارة المشرفين":"👥 Gestion des administrateurs","📋 بيانات المؤسسة":"📋 Informations de l’établissement","تخصيص اللوغو، الألوان، واللغة":"Personnaliser le logo, les couleurs et la langue","اسم المؤسسة / الأكاديمية *":"Nom de l’établissement / académie *","رابط اللوغو":"URL du logo","معاينة اللوغو:":"Aperçu du logo :","لون خلفية الصفحة":"Couleur d’arrière-plan","رمادي فاتح هادئ":"Gris clair doux","أبيض عاجي":"Blanc ivoire","وضع مظلم":"Mode sombre","دافئ خفيف":"Chaleur légère","لغة النظام":"Langue du système",العربية:"Arabe","اللون الرئيسي للهوية":"Couleur principale de l’identité","جاري الحفظ...":"Enregistrement...","حفظ التغييرات ✅":"Enregistrer les modifications ✅","إدارة المشرفين":"Gestion des administrateurs","هذه القائمة مخصصة لتسجيل الحسابات المعتمدة كمشرفين داخل إعدادات الأكاديمية.":"Cette liste sert à enregistrer les comptes autorisés comme administrateurs de l’académie.","إضافة طالب جديد":"Ajouter un élève","الاسم الكامل":"Nom complet","المستوى الدراسي":"Niveau scolaire","هاتف ولي الأمر":"Téléphone du parent","الواجب الشهري":"Frais mensuels","حفظ التلميذ":"Enregistrer l’élève",إلغاء:"Annuler","بحث عن تلميذ...":"Rechercher un élève...","لا توجد بيانات":"Aucune donnée","الأرشيف والسجلات":"Archives et historique","أرشيف الحضور":"Archives de présence","الطلاب المؤرشفون":"Élèves archivés","سجل النشاط":"Journal d’activité","اختر تاريخا مخصصا":"Choisir une date personnalisée","أو اختر شهرا":"Ou choisir un mois","تصدير السجل":"Exporter le journal",التاريخ:"Date",التلميذ:"Élève",الحالة:"Statut","وقت التسجيل":"Heure d’enregistrement","إعادة تفعيل":"Réactiver","لا توجد ملفات مؤرشفة.":"Aucun dossier archivé.","لا توجد أنشطة مسجلة بعد.":"Aucune activité enregistrée.","جاري تحميل الإعدادات...":"Chargement des paramètres...","تم حفظ التغييرات وتطبيقها فوراً في الموقع كامل! ✅":"Modifications enregistrées et appliquées partout ! ✅"},uE={placeholder:Oi,title:Oi,"aria-label":Oi},ka=new WeakMap,Da=new WeakMap,Fp=(r,e)=>{if(r.nodeType===Node.TEXT_NODE){const t=r.nodeValue||"",n=t.trim();if(!n)return;ka.has(r)||ka.set(r,n);const s=ka.get(r),i=e&&Oi[s]||s,o=t.replace(n,i);o!==t&&(r.nodeValue=o);return}r.nodeType===Node.ELEMENT_NODE&&(Object.entries(uE).forEach(([t,n])=>{const s=r.getAttribute(t);if(!s)return;Da.has(r)||Da.set(r,{});const i=Da.get(r);i[t]||(i[t]=s);const o=i[t],l=e&&n[o]||o;l!==s&&r.setAttribute(t,l)}),["SCRIPT","STYLE","TEXTAREA"].includes(r.tagName)||r.childNodes.forEach(t=>Fp(t,e)))};function hE(){const{settings:r}=zs(),e=r?.branding?.language==="fr";return O.useEffect(()=>{const t=()=>Fp(document.body,e);t();let n=!1;const s=new MutationObserver(()=>{n||(n=!0,t(),n=!1)});return s.observe(document.body,{childList:!0,subtree:!0,characterData:!0}),()=>s.disconnect()},[e]),null}class dE extends vg.Component{constructor(){super(...arguments);Su(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){console.error("Application rendering error:",t)}render(){return this.state.hasError?c.jsx("div",{className:"flex min-h-screen items-center justify-center bg-slate-100 p-6 text-center",dir:"rtl",children:c.jsxs("div",{className:"max-w-md rounded-2xl border border-amber-200 bg-white p-8 shadow-xl",children:[c.jsx("h1",{className:"text-xl font-black text-[#0B192C]",children:"حدث خطأ غير متوقع"}),c.jsx("p",{className:"mt-3 text-sm font-semibold text-slate-700",children:"يرجى إعادة تحميل الصفحة للمتابعة."}),c.jsx("button",{type:"button",onClick:()=>window.location.reload(),className:"mt-6 rounded-xl bg-[#0B192C] px-5 py-3 font-black text-white hover:bg-[#1E3E62]",children:"إعادة تحميل الصفحة"})]})}):this.props.children}}function Zr({children:r,allowedRoles:e=[]}){const{currentUser:t,userRole:n,loading:s}=kr(),i=wl();return s?c.jsx("div",{dir:"rtl",className:"min-h-[60vh] flex items-center justify-center p-6",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"w-10 h-10 border-4 border-slate-200 border-t-slate-700 rounded-full animate-spin mx-auto mb-4"}),c.jsx("p",{className:"text-slate-600 font-medium",children:"جاري التحقق من تسجيل الدخول..."})]})}):t?e.length>0&&(!n||!e.includes(n))?c.jsx("div",{dir:"rtl",className:"min-h-[60vh] flex flex-col items-center justify-center text-center p-6",children:c.jsxs("div",{className:"max-w-md",children:[c.jsx("div",{className:"text-6xl mb-5",children:"🔒"}),c.jsx("h1",{className:"text-4xl font-extrabold text-red-600 mb-3",children:"403"}),c.jsx("h2",{className:"text-xl font-bold text-slate-800 mb-3",children:"وصول غير مصرح"}),c.jsx("p",{className:"text-slate-600 font-medium leading-7",children:"عذراً، ليس لديك الصلاحية الكافية للوصول إلى هذه الصفحة. يرجى التواصل مع إدارة أكاديمية إسهام."}),c.jsx("button",{type:"button",onClick:()=>window.history.back(),className:"mt-6 px-5 py-2.5 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition",children:"العودة"})]})}):r:c.jsx(Mi,{to:"/login",replace:!0,state:{from:i.pathname}})}function fE(){const{currentUser:r,userRole:e,loading:t}=kr(),{settings:n}=zs(),s=wl(),[i,o]=O.useState(!1),l=n?.branding?.bgColor||"bg-slate-50",d=(n?.branding?.language||"ar")!=="fr";return t?c.jsxs("div",{className:"h-screen w-screen flex flex-col items-center justify-center bg-slate-900 text-white dir-rtl",children:[c.jsx("div",{className:"w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"}),c.jsx("p",{className:"text-sm font-semibold text-slate-300",children:"جاري التحقق من بيانات الدخول..."})]}):r?e?c.jsxs("div",{className:`app-shell flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ${d?"text-right dir-rtl":"text-left dir-ltr"}`,dir:d?"rtl":"ltr",children:[c.jsx(qI,{mobileOpen:i,setMobileOpen:o}),c.jsxs("div",{className:"flex-1 flex flex-col min-w-0 min-h-screen overflow-hidden",children:[c.jsx($I,{setMobileOpen:o}),c.jsx("main",{className:`flex-1 overflow-y-auto overflow-x-auto p-3 sm:p-4 md:p-6 ${l}`,children:c.jsx(Ig,{})})]})]}):c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 p-6 text-center",dir:"rtl",children:c.jsxs("div",{className:"max-w-md rounded-2xl bg-white p-8 shadow-xl",children:[c.jsx("h1",{className:"text-xl font-bold text-slate-900",children:"لا توجد صلاحية لهذا الحساب"}),c.jsx("p",{className:"mt-3 text-sm text-slate-600",children:"يرجى التواصل مع إدارة الأكاديمية لمنح الحساب صلاحية مناسبة."})]})}):c.jsx(Mi,{to:"/login",replace:!0,state:{from:s.pathname}})}function mE(){return c.jsx(FI,{children:c.jsx(GI,{children:c.jsxs(BI,{children:[c.jsx(hE,{}),c.jsx(xg,{children:c.jsx(dE,{children:c.jsxs(wg,{children:[c.jsx(ot,{path:"/login",element:c.jsx(KI,{})}),c.jsxs(ot,{element:c.jsx(fE,{}),children:[c.jsx(ot,{index:!0,element:c.jsx(Mi,{to:"/dashboard",replace:!0})}),c.jsx(ot,{path:"dashboard",element:c.jsx(nE,{})}),c.jsx(ot,{path:"students",element:c.jsx(rE,{})}),c.jsx(ot,{path:"attendance",element:c.jsx(sE,{})}),c.jsx(ot,{path:"teachers",element:c.jsx(Zr,{allowedRoles:["admin"],children:c.jsx(iE,{})})}),c.jsx(ot,{path:"payments",element:c.jsx(Zr,{allowedRoles:["admin"],children:c.jsx(oE,{})})}),c.jsx(ot,{path:"financials",element:c.jsx(Zr,{allowedRoles:["admin"],children:c.jsx(aE,{})})}),c.jsx(ot,{path:"settings",element:c.jsx(Zr,{allowedRoles:["admin"],children:c.jsx(lE,{})})}),c.jsx(ot,{path:"archive",element:c.jsx(Zr,{allowedRoles:["admin"],children:c.jsx(cE,{})})}),c.jsx(ot,{path:"*",element:c.jsx(Mi,{to:"/dashboard",replace:!0})})]})]})})})]})})})}const Up=document.getElementById("root");if(!Up)throw new Error('Root element "#root" was not found.');Rd(Up).render(c.jsx(O.StrictMode,{children:c.jsx(mE,{})}));
