import type { Metadata } from "next";
import { Inter as Fontsans} from "next/font/google";
import "@/styles/globals.css";

import { cn } from "@/lib/utils"
const fontSans = Fontsans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
 });

import { ThemeProvider } from "@/components/theme-provider"
import Nav from "@/components/main-nav"
import Footer from "@/components/page-footer"

export const metadata: Metadata = {
  title: "Tarc Website",
  description: "Tarc, revolutionizing sport industry.",
  icons: {
    icon: [
      { url: '/favicon.ico'},
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png'},
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png'},
    ],
    apple: [
      { url: '/apple-touch-icon.png'},
    ],
    shortcut: [
      { url: '/favicon.ico'}
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <html lang="en">
        <head />
        <body className={cn(
          "min-h-screen bg-background font-sans anitaliased scroll-smooth",
          fontSans.variable
        )
        }>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col">
              <Nav />
                {children}
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
