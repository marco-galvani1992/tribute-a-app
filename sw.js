self.addEventListener('push', function (e) {
  e.waitUntil(self.registration.showNotification('Gestionale Tribute-A', { body: 'C’è una cosa da fare: tocca per aprire.', icon: 'icon-192.png', badge: 'icon-192.png', tag: 'gestionale', renotify: true }));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (l) {
    for (var i = 0; i < l.length; i++) if ('focus' in l[i]) return l[i].focus();
    return self.clients.openWindow('./');
  }));
});
