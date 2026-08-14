/* Offline cache for the calendar app.
   IMPORTANT: bump the version below whenever you change any file, so devices pick up the update. */
var CACHE = "cal-cache-v3";
var CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      // add each item independently so one missing file cannot abort the whole install
      return Promise.all(CORE.map(function(a){ return c.add(a).catch(function(){}); }));
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

  // Page loads: always try the network first, and only fall back to the cached
  // app shell when offline. This never serves a stale 404.
  if(req.mode === "navigate"){
    e.respondWith(
      fetch(req).catch(function(){
        return caches.match("./index.html").then(function(r){ return r || caches.match("./"); });
      })
    );
    return;
  }

  // Live data (weather, geocoding): network first.
  if(/open-meteo\.com$|bigdatacloud\.net$|geocoding-api\.open-meteo\.com$/.test(url.hostname)){
    e.respondWith(fetch(req).catch(function(){ return caches.match(req); }));
    return;
  }

  // Other assets and fonts: cache first, then network. Only cache good responses.
  e.respondWith(
    caches.match(req).then(function(cached){
      if(cached) return cached;
      return fetch(req).then(function(res){
        try {
          if(res && res.ok && (url.origin === self.location.origin || /gstatic\.com$|googleapis\.com$/.test(url.hostname))){
            var copy = res.clone();
            caches.open(CACHE).then(function(c){ c.put(req, copy); });
          }
        } catch(_){}
        return res;
      }).catch(function(){ return cached; });
    })
  );
});
