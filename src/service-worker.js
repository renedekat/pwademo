import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing/registerRoute.mjs';
import {CacheFirst} from 'workbox-strategies/CacheFirst.mjs';
import {NetworkFirst} from 'workbox-strategies/NetworkFirst.mjs';
import {ExpirationPlugin} from 'workbox-expiration/ExpirationPlugin.mjs';
import {skipWaiting, clientsClaim} from 'workbox-core';


self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

registerRoute(
  ({request}) => request.url === 'https://api.exchangeratesapi.io/latest',
  new NetworkFirst({
    cacheName: 'currencies',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 1,
        maxAgeSeconds: 60
      }),
    ],
  }),
);



precacheAndRoute(self.__WB_MANIFEST);
