import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: "Mindful Life - Overcome Screen Addiction",
  description: "Discover how screen time impacts your life. Get personalized strategies rooted in Stoic and Buddhist philosophy to reclaim your time and live intentionally.",
  applicationName: "Mindful Life",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Mindful Life",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  keywords: [
    "digital wellness",
    "screen time",
    "productivity",
    "mindfulness",
    "stoicism",
    "addiction recovery",
    "mental health",
  ],
  authors: [{ name: "Mindful Life Team" }],
  creator: "Mindful Life",
  publisher: "Mindful Life",
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mindfullife.app",
    title: "Mindful Life - Reclaim Your Time",
    description: "Break free from digital addiction with ancient wisdom and modern science",
    siteName: "Mindful Life",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindful Life - Reclaim Your Time",
    description: "Break free from digital addiction with ancient wisdom and modern science",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mindful Life" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
