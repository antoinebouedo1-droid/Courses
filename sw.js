// Appli retirée : le service worker se supprime et vide son cache.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith("courses-")).map(x=>caches.delete(x)))).then(()=>self.registration.unregister()))});
