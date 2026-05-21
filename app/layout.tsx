import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/i18n/language-context"
import { ServiceWorkerRegister } from "@/components/service-worker-register"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Good Goy - Kosher Animal Checker",
  description:
    "Find out if an animal is kosher to eat with our easy-to-use search tool",
  generator: "Next.js",
  applicationName: "Good Goy",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Good Goy",
  },
  icons: {
icon: [
  { url: '/icon-192x192.png', type: 'image/png', sizes: '192x192' },
      ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  // The lang/dir attributes here are the initial server-rendered values.
  // LanguageProvider updates them on the client when the user changes language.
  return (
    <html lang="en" dir="ltr">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <ServiceWorkerRegister />
        <Analytics />
      </body>
    </html>
  )
}
