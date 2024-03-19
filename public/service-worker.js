const faux_S_4_v1 = 'faux_S_4_v1'
const font_cache_v1 = 'font_cache_v1'

const assets = [
  '/',
  '/index.html',
  '/404.html',
  '/assets/fonts/NotoSans-Black.ttf',
  '/assets/fonts/NotoSans-Bold.ttf',
  '/assets/fonts/NotoSans-Regular.ttf',
  '/assets/fonts/NotoSansTC-Regular.ttf',
  '/assets/fonts/NotoSansTC-Black.ttf',
  '/assets/images/logo/withBg.png',
  '/build/build.min.js',
  '/build/fonts.css',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;900&family=Noto+Sans:wght@400;700;900&display=swap'
]

self.addEventListener('install', (install_event) => {
  install_event.waitUntil(
    caches
      .open(faux_S_4_v1)
      .then((cache) => {
        return cache.addAll(
          assets.map((url) => new Request(url, { credentials: 'same-origin' }))
        )
      })
      .catch((error) => {
        console.error('Error during installation:', error)
      })
  )
  self.skipWaiting()
})

self.addEventListener('activate', (activate_event) => {
  activate_event.waitUntil(
    caches.keys().then((cache_names) => {
      return Promise.all(
        cache_names
          .filter((cache_name) => {
            return cache_name !== faux_S_4_v1
          })
          .map((cache_name) => {
            return caches.delete(cache_name)
          })
      )
    })
  )
  self.clients.claim()
})

self.addEventListener('fetch', (fetch_event) => {
  const request_url = new URL(fetch_event.request.url)

  if (request_url.origin === 'https://fonts.googleapis.com') {
    fetch_event.respondWith(
      caches.match(fetch_event.request).then((response) => {
        if (response) {
          return response
        }

        return fetch(fetch_event.request).then((network_response) => {
          const response_to_cache = network_response.clone()
          caches.open(font_cache_v1).then((cache) => {
            cache.put(fetch_event.request, response_to_cache)
          })
          return network_response
        })
      })
    )
    return
  }

  fetch_event.respondWith(
    caches.match(fetch_event.request).then((response) => {
      return response || fetch(fetch_event.request)
    })
  )
})
