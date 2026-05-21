"use client"

/**
 * Registers the service worker on the client after the page loads.
 *
 * Rendered once in app/layout.tsx. It renders nothing visible — its only
 * job is to register /sw.js so the app becomes installable and works offline.
 *
 * Registration is skipped in development to avoid caching headaches while
 * you're editing code.
 */

import { useEffect } from "react"

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      typeof window === "undefined" ||
      !("serviceWorker" in navigator)
    ) {
      return
    }

    const register = () => {
      navigator.serviceWorker
        .register("/sw.js")
        .catch((err) => console.error("Service worker registration failed:", err))
    }

    // Wait until the page is fully loaded so registration doesn't compete
    // with initial rendering.
    if (document.readyState === "complete") {
      register()
    } else {
      window.addEventListener("load", register)
      return () => window.removeEventListener("load", register)
    }
  }, [])

  return null
}
