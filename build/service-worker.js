"use strict";var precacheConfig=[["/index.html","a0c0e1faf48e775a52c81cf0512cf0e6"],["/static/css/main.29fa8607.css","7575e03a785badaf4dfd6742b21671ed"],["/static/js/main.9a71eb1f.js","edec9905ad350a09cf065f97c51bc8ac"],["/static/media/1.5b83d374.jpg","5b83d374477ba00c9f99dafb02c81d81"],["/static/media/10.d73015db.jpg","d73015db87873fc0655f6ca20c5efe32"],["/static/media/11.d4269e7d.jpg","d4269e7de721f981512518a30f1af2e7"],["/static/media/12.a7767f59.jpg","a7767f5913e1db2829c9c5ec8f2c7706"],["/static/media/13.38ca2c3f.jpg","38ca2c3f6ea2e3569f7cd61295d1fe66"],["/static/media/14.d3b974cc.jpg","d3b974cc10f1b22d5ee83b34a478c6dc"],["/static/media/15.0c1abd08.jpg","0c1abd08659e5b0385054185595b1ef2"],["/static/media/16.4f385322.jpg","4f385322fa2c7d5fd0d095de26993344"],["/static/media/2.f45a9336.jpg","f45a933676cbf46f8bafc715d26c7f78"],["/static/media/3.670a7d80.jpg","670a7d808082adb7c1365f9b57194424"],["/static/media/4.6e558a9d.jpg","6e558a9da7864c5c4378af9d6ff0f60d"],["/static/media/5.0630930f.jpg","0630930ff3ff53719cf502f5de10f937"],["/static/media/6.0e6f4e38.jpg","0e6f4e38f408d028f35b5487649986ce"],["/static/media/7.7b26b48b.jpg","7b26b48b41bb48875ca89003da29b961"],["/static/media/8.1d226a21.jpg","1d226a21134ddd8935ecc30c58fa2a92"],["/static/media/9.859704ea.jpg","859704eaf6e489a7bccffad1b9a39422"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});