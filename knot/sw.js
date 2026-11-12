/* Knot's service worker. It keeps a copy of Knot on the device so Knot opens without a network, as an installed app
   or from the Home Screen. It asks the network first and falls back to the copy, so an update shows as soon as the
   network has it. It answers only for Knot's own folder and leaves other requests, such as ntfy.sh, alone. */
var CACHE = 'knot6-4';
var SHELL = ['./', './index.html', './room.html', './fonts.css', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(SHELL.map(function (u) { return c.add(new Request(u, { cache: 'reload' })).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE && k.indexOf('knot') === 0; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url), scope = new URL(self.registration.scope);
  if (req.method !== 'GET' || url.origin !== scope.origin || url.pathname.indexOf(scope.pathname) !== 0) return;
  e.respondWith(fetch(req).then(function (res) {
    if (res && res.ok && res.type === 'basic') { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
    return res;
  }).catch(function () {
    return caches.match(req, { ignoreSearch: true }).then(function (hit) {
      return hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error());
    });
  }));
});
