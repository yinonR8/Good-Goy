import type { MetadataRoute } from "next"

/**
 * PWA manifest.
 *
 * Next.js serves this automatically at /manifest.webmanifest — no need to
 * link it manually. It tells the phone how to display the installed app
 * (name, icons, colors, standalone window).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Good Goy - Kosher Animal Checker",
    short_name: "Good Goy",
    description: "Find out if an animal is kosher to eat — works offline",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#1a1a1a",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
