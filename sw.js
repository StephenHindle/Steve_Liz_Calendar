/* Simple offline cache for the calendar app. Bump CACHE to force an update. */
var CACHE = "cal-cache-v1";
var ASSETS = [
  "./calendar.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      // add each asset independently so one failure does not abort the whole install
      return Promise.all(ASSETS.map(function(a){ return c.add(a).catch(function(){}); }));
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ if(k !== CACHE) return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  var url;
  try { url = new URL(req.url); } catch(_){ return; }

  // Live data (weather, geocoding): network first, fall back to cache if offline.
  if(/open-meteo\.com$|bigdatacloud\.net$|geocoding-api\.open-meteo\.com$/.test(url.hostname)){
    e.respondWith(fetch(req).catch(function(){ return caches.match(req); }));
    return;
  }

  // App shell and fonts: cache first, then network, and cache new same-origin/font responses.
  e.respondWith(
    caches.match(req).then(function(cached){
      if(cached) return cached;
      return fetch(req).then(function(res){
        try {
          var host = url.hostname;
          if(url.origin === self.location.origin || /gstatic\.com$|googleapis\.com$/.test(host)){
            var copy = res.clone();
            caches.open(CACHE).then(function(c){ c.put(req, copy); });
          }
        } catch(_){}
        return res;
      }).catch(function(){ return cached; });
    })
  );
});
