/* Phone push: shows the notification and opens the app on tap. Imported by the generated service worker. */
self.addEventListener('push', function (e) {
  var d = {}; try { d = e.data ? e.data.json() : {}; } catch (x) { d = {}; }
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (l) { l.forEach(function (c) { c.postMessage({ type: 'case-push' }); }); }));
  e.waitUntil(self.registration.showNotification(d.title || 'New case assigned', { body: d.body || '', icon: '/icon.svg', badge: '/icon.svg', tag: 'new-case', renotify: true, data: { url: d.url || '/' } }));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close(); var u = (e.notification.data && e.notification.data.url) || '/';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (l) { for (var i = 0; i < l.length; i++) { if ('focus' in l[i]) return l[i].focus(); } return self.clients.openWindow(u); }));
});
