/**
 * Service Worker for Good Goy PWA.
 *
 * Strategy: "stale-while-revalidate" for everything.
 *   - On install, pre-cache the core app shell.
 *   - On every fetch, serve from cache instantly if available, while
 *     fetching a fresh copy in the background for next time.
 *   - This makes the app work fully OFFLINE after the first visit.
 *
 * Bump CACHE_VERSION whenever you want to force all users to get fresh
 * files (e.g. after a big update). Old caches are cleaned up on activate.
 */

const CACHE_VERSION = "good-goy-v1"
const CORE_ASSETS = [
  "/",
  "/manifest.webmanifest",
  "/icon-192x192.png",
  "/icon-512x512.png",
  "/apple-icon.png",
]

// Install: pre-cache the core shell.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_ASSETS))
  )
  // Activate this new worker immediately.
  self.skipWaiting()
})

// Activate: delete old caches from previous versions.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  )
  // Take control of all open pages right away.
  self.clients.claim()
})

// Fetch: stale-while-revalidate.
self.addEventListener("fetch", (event) => {
  const { request } = event

  // Only handle GET requests; let the browser deal with the rest.
  if (request.method !== "GET") return

  // Skip cross-origin requests (e.g. analytics) — just let them through.
  if (new URL(request.url).origin !== self.location.origin) return

  event.respondWith(
    caches.open(CACHE_VERSION).then(async (cache) => {
      const cached = await cache.match(request)

      const network = fetch(request)
        .then((response) => {
          // Only cache valid, complete responses.
          if (response && response.status === 200 && response.type === "basic") {
            cache.put(request, response.clone())
          }
          return response
        })
        .catch(() => cached) // offline + not cached → undefined, handled below

      // Serve cache first if we have it, otherwise wait for network.
      return cached || network
    })
  )
})
