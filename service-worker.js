self.addEventListener("install", (e) => {
  console.log("📦 Service Worker instalado");
  e.waitUntil(
    caches.open("mi-cache").then((cache) => {
      return cache.addAll(["/index.html", "/manifest.json", "/icon-192.png"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((respuesta) => {
      return respuesta || fetch(e.request);
    })
  );
});
