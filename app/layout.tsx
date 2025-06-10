import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  icons: {
    icon: '/logo.png', // /public path
  },
  title: "CyberUtsav 2.0 - The Ultimate Hackathon Experience",
  description:
    "Join CyberUtsav 2.0, a 4-day hackathon bringing together the brightest minds in technology. Code, create, compete, and conquer with prizes worth ₹1L+!",
  keywords: "hackathon, coding, technology, innovation, cyber utsav, programming, competition",
  authors: [{ name: "Cyber Utsav Team" }],
  openGraph: {
    title: "CyberUtsav 2.0 - The Ultimate Hackathon Experience",
    description: "Join the most exciting 4-day hackathon with prizes worth ₹1L+. Register now!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberUtsav 2.0 - The Ultimate Hackathon Experience",
    description: "Join the most exciting 4-day hackathon with prizes worth ₹1L+. Register now!",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
