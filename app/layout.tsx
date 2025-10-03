import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Leonel Moyano - Full Stack Developer",
  description:
    "Full Stack Developer specializing in Laravel, React, and TypeScript. Building modern web applications with clean code and great user experiences.",
  keywords: "Leonel Moyano, Full Stack Developer, Laravel, React, TypeScript, Web Developer, Argentina, Portfolio",
  authors: [{ name: "Leonel Moyano" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leonelmoyano.com",
    title: "Leonel Moyano - Full Stack Developer",
    description: "Full Stack Developer specializing in Laravel, React, and TypeScript",
    siteName: "Leonel Moyano Portfolio",
    images: [
      {
        url: "/leonelmoyanoo.github.io/img/yo.jpg",
        width: 1200,
        height: 630,
        alt: "Leonel Moyano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonel Moyano - Full Stack Developer",
    description: "Full Stack Developer specializing in Laravel, React, and TypeScript",
    images: ["/leonelmoyanoo.github.io/img/yo.jpg"],
    creator: "@leonelmoyanoo",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
