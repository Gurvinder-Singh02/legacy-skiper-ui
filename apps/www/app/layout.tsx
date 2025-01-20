import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster as NewYorkSonner } from "@/components/ui/sonner"
import {
  Toaster as DefaultToaster,
  Toaster as NewYorkToaster,
} from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"


import { TailwindIndicator } from "@/components/tailwind-indicator"

import { ThemeProvider } from "@/theme/theme-provider"

export const metadata: Metadata = {

  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "gxuri-in",
      url: "https://gxuri.in",
    },
  ],
  creator: "gxuri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@nolansym",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" >
        <head />
        <body
          className={cn(
            "relative min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
          >
            <div className="relative z-10 flex min-h-screen flex-col ">
              {children}
            </div>
            <TailwindIndicator />
            <Analytics />
            <SpeedInsights />
            <NewYorkToaster />
            <DefaultToaster />
            <NewYorkSonner position="top-center" />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
