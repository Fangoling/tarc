import type { Metadata } from "next";
import { Inter as Fontsans} from "next/font/google";
import "@/styles/globals.css";

import { cn } from "@/lib/utils"
const fontSans = Fontsans({
  subsets: ["latin"],
  variable: "--font-sans",
 });

import { ThemeProvider } from "@/components/theme-provider"
import Nav from "@/components/main-nav"
import Footer from "@/components/page-footer"

export const metadata: Metadata = {
  title: "Tarc-fitness Website",
  description: "Tarc-fitness, the strongest gym.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <html lang="en">
        <head />
        <body className={cn(
          "min-h-screen bg-background font-sans anitaliased",
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
