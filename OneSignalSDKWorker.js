// Pastille rouge sur l'icône de Tutau quand une notification arrive
self.addEventListener('push', function (e) {
  try {
    var d = e.data ? e.data.json() : null;
    var n = d && d.custom && d.custom.a ? Number(d.custom.a.badge) : 0;
    if (self.navigator && self.navigator.setAppBadge) self.navigator.setAppBadge(n > 0 ? n : 1);
  } catch (x) { }
});
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDKWorker.js');
