!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/pwademo/",s(s.s="QxTo")}({"2KUI":function(e,t,s){"use strict";try{self["workbox:expiration:5.1.3"]&&_()}catch(e){}},"5tLK":function(e,t,s){"use strict";try{self["workbox:routing:5.1.3"]&&_()}catch(e){}},Bxln:function(e,t,s){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},QxTo:function(e,t,s){"use strict";s.r(t);s("xwD5");const n=[],r={get:()=>n,add(e){n.push(...e)}};s("Bxln");const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[a.prefix,e,a.suffix].filter(e=>e&&e.length>0).join("-"),o=e=>e||i(a.precache),c=e=>e||i(a.runtime),h=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),u=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class l extends Error{constructor(e,t){super(u(e,t)),this.name=e,this.details=t}}const d=new Set;const p=(e,t)=>e.filter(e=>t in e),f=async({request:e,mode:t,plugins:s=[]})=>{const n=p(s,"cacheKeyWillBeUsed");let r=e;for(const e of n)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},g=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:r=[]})=>{const a=await self.caches.open(e),i=await f({plugins:r,request:t,mode:"read"});let o=await a.match(i,n);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:o,request:i})}return o},m=async({cacheName:e,request:t,response:s,event:n,plugins:r=[],matchOptions:a})=>{const i=await f({plugins:r,request:t,mode:"write"});if(!s)throw new l("cache-put-with-no-response",{url:h(i.url)});const o=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let r=t,a=!1;for(const t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(r=await n.call(t,{request:e,response:r,event:s}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:n,plugins:r,response:s,request:i});if(!o)return void 0;const c=await self.caches.open(e),u=p(r,"cacheDidUpdate"),m=u.length>0?await g({cacheName:e,matchOptions:a,request:i}):null;try{await c.put(i,o)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of d)await e()}(),e}for(const t of u)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:m,newResponse:o,request:i})},w=g,y=async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const r=p(n,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,r=e.clone();e=await n.call(t,{request:r,event:s})}}catch(e){throw new l("plugin-error-request-will-fetch",{thrownError:e})}const i=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:s,request:i,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:a.clone(),request:i.clone()});throw e}};let _;async function v(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},r=t?t(n):n,a=function(){if(void 0===_){const e=new Response("");if("body"in e)try{new Response(e.body),_=!0}catch(e){_=!1}_=!1}return _}()?s.body:await s.blob();return new Response(a,r)}function x(e){if(!e)throw new l("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new l("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}class R{constructor(e){this._cacheName=o(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=x(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],r=await self.caches.open(this._cacheName),a=await r.keys(),i=new Set(a.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const o=s.map(({cacheKey:s,url:n})=>{const r=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:a,event:e,integrity:r,plugins:t,url:n})});return await Promise.all(o),{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const r of t)s.has(r.url)||(await e.delete(r),n.push(r.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:e,url:t,cacheMode:s,event:n,plugins:r,integrity:a}){const i=new Request(t,{integrity:a,cache:s,credentials:"same-origin"});let o,c=await y({event:n,plugins:r,request:i});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:n,request:i,response:c}):c.status<400))throw new l("bad-precaching-response",{url:t,status:c.status});c.redirected&&(c=await v(c)),await m({event:n,plugins:r,response:c,request:e===t?i:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this._cacheName)).match(s)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new l("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(s){if(e)return fetch(t);throw s}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new l("non-precached-url",{url:e});const s=this.createHandler(t),n=new Request(e);return()=>s({request:n})}}let q;const b=()=>(q||(q=new R),q);const T=(e,t)=>{const s=b().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let U=!1;function L(e){U||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const r=o();self.addEventListener("fetch",a=>{const i=T(a.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return void 0;let o=self.caches.open(r).then(e=>e.match(i)).then(e=>e||fetch(i));a.respondWith(o)})})(e),U=!0)}const N=e=>{const t=b(),s=r.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},E=e=>{const t=b();e.waitUntil(t.activate())};s("5tLK");const K=e=>e&&"object"==typeof e?e:{handle:e};class C{constructor(e,t,s="GET"){this.handler=K(t),this.match=e,this.method=s}}class M extends C{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class S{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const{params:n,route:r}=this.findMatchingRoute({url:s,request:e,event:t});let a=r&&r.handler;if(!a&&this._defaultHandler&&(a=this._defaultHandler),!a)return void 0;let i;try{i=a.handle({url:s,request:e,event:t,params:n})}catch(e){i=Promise.reject(e)}return i instanceof Promise&&this._catchHandler&&(i=i.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),i}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const r of n){let n;const a=r.match({url:e,request:t,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=K(e)}setCatchHandler(e){this._catchHandler=K(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new l("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let O;s("aqiC");const P={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};function A(e){e.then(()=>{})}class k{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:r,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(i,o)=>{const c=i.objectStore(e),h=t?c.index(t):c,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(u.push(a?e:e.value),r&&u.length>=r?o(u):e.continue()):o(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,r)=>{const a=this._db.transaction(e,t);a.onabort=()=>r(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,r)=>{const a=s.objectStore(t),i=a[e].apply(a,n);i.onsuccess=()=>r(i.result)})}close(){this._db&&(this._db.close(),this._db=null)}}k.prototype.OPEN_TIMEOUT=2e3;const I={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(I))for(const s of t)s in IDBObjectStore.prototype&&(k.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});s("2KUI");const D=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class W{constructor(e){this._cacheName=e,this._db=new k("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this._cacheName)}async setTimestamp(e,t){const s={url:e=D(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put("cache-entries",s)}async getTimestamp(e){return(await this._db.get("cache-entries",this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction("cache-entries","readwrite",(s,n)=>{const r=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),a=[];let i=0;r.onsuccess=()=>{const s=r.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&i>=t?a.push(s.value):i++),s.continue()}else n(a)}}),n=[];for(const e of s)await this._db.delete("cache-entries",e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+D(e)}}class j{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new W(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,A(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}var F;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),function(e,t,s){let n;if("string"==typeof e){const r=new URL(e,location.href);0,n=new C(({url:e})=>e.href===r.href,t,s)}else if(e instanceof RegExp)n=new M(e,t,s);else if("function"==typeof e)n=new C(e,t,s);else{if(!(e instanceof C))throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}(O||(O=new S,O.addFetchListener(),O.addCacheListener()),O).registerRoute(n)}(({request:e})=>"https://api.exchangeratesapi.io/latest"===e.url,new class{constructor(e={}){if(this._cacheName=c(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[P,...e.plugins]}else this._plugins=[P];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){const s=[];"string"==typeof t&&(t=new Request(t));const n=[];let r;if(this._networkTimeoutSeconds){const{id:a,promise:i}=this._getTimeoutPromise({request:t,event:e,logs:s});r=a,n.push(i)}const a=this._getNetworkPromise({timeoutId:r,request:t,event:e,logs:s});n.push(a);let i=await Promise.race(n);if(i||(i=await a),!i)throw new l("no-response",{url:t.url});return i}_getTimeoutPromise({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:s}))},1e3*this._networkTimeoutSeconds)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,event:n}){let r,a;try{a=await y({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){r=e}if(e&&clearTimeout(e),r||!a)a=await this._respondFromCache({request:t,event:n});else{const e=a.clone(),s=m({cacheName:this._cacheName,request:t,response:e,event:n,plugins:this._plugins});if(n)try{n.waitUntil(s)}catch(e){0}}return a}_respondFromCache({event:e,request:t}){return w({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}({cacheName:"currencies",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const r=this._isResponseDateFresh(n),a=this._getCacheExpiration(s);A(a.expireEntries());const i=a.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){0}return r?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),d.add(t))}_getCacheExpiration(e){if(e===c())throw new l("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new j(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}({maxEntries:1,maxAgeSeconds:60})]})),function(e){b().addToCacheList(e),e.length>0&&(self.addEventListener("install",N),self.addEventListener("activate",E))}([{'revision':'13bd69afb46d53130ebbcedc7eeba5fd','url':'/pwademo/images/icons/apple-touch-icon-152x152.png'},{'revision':'50f3a33d3c5c2a5887b4f0a2ce3606ce','url':'/pwademo/images/icons/icon-512x512.png'},{'revision':'9dba0327898e4a8f91e0688d7a0a5b42','url':'/pwademo/images/icons/smiley.svg'},{'revision':'56570ebececabb724f00785471b98a95','url':'/pwademo/index.html'},{'revision':'a2ee7ca34529e6ede95d64e78d8e09b5','url':'/pwademo/main.eb25348a6354fdf77db1.js'},{'revision':'73602231bd2ffefa0ca07becb28dadd4','url':'/pwademo/manifest.json'},{'revision':'d41d8cd98f00b204e9800998ecf8427e','url':'/pwademo/robots.txt'}]),L(F)},aqiC:function(e,t,s){"use strict";try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}},xwD5:function(e,t,s){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}}});
//# sourceMappingURL=service-worker.js.map