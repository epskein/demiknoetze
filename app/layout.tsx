import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, League_Gothic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { getAssetPath } from "@/lib/asset-path"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _leagueGothic = League_Gothic({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Digital Marketing Creative",
  description: "Explore creative work in brand development, visual identity, and digital marketing campaigns",
  generator: "v0.app",
  icons: {
    icon: [
      {
				url: getAssetPath("/icon-light-32x32.png"),
        media: "(prefers-color-scheme: light)",
      },
      {
				url: getAssetPath("/icon-dark-32x32.png"),
        media: "(prefers-color-scheme: dark)",
      },
      {
				url: getAssetPath("/icon.svg"),
        type: "image/svg+xml",
      },
    ],
		apple: getAssetPath("/apple-icon.png"),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
			<head>
				<meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
				<meta httpEquiv="Pragma" content="no-cache" />
				<meta httpEquiv="Expires" content="0" />
				<link
					rel="preload"
					as="image"
					href={getAssetPath("/images/demi-header-2.png")}
					// fetchpriority helps the browser prioritize above-the-fold image
					// Some browsers only read fetchpriority on <img>, but harmless here
					fetchpriority="high"
				/>
			</head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
