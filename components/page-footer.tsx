import Link from "next/link"

import { cn } from "@/lib/utils"
import { DictionaryProp } from "./prop-types"

const currentYear = new Date().getFullYear()

interface FooterLinkProps {
  href: string
  children: React.ReactNode
  external?: boolean
  ariaLabel?: string
}

function FooterLink({ href, children, external = false, ariaLabel }: FooterLinkProps) {
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      aria-label={ariaLabel}
      className={cn(
        "relative text-muted-foreground transition-colors duration-200",
        "hover:text-foreground",
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0",
        "after:bg-gradient-to-r after:from-primary/60 after:to-primary",
        "after:transition-all after:duration-300 after:ease-out",
        "hover:after:w-full",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "rounded-sm px-1 -mx-1"
      )}
    >
      {children}
    </Link>
  )
}

function FooterDivider() {
  return (
    <span
      className="h-3.5 w-px bg-border/60"
      aria-hidden="true"
    />
  )
}

export default function Footer({ dict }: DictionaryProp) {
  return (
    <footer className="mt-auto w-full">
      {/* Gradient border top */}
      <div 
        className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      
      <div className="bg-secondary/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 text-sm">
          {/* Navigation links */}
          <nav 
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            aria-label="Footer navigation"
          >
            <FooterLink 
              href="https://x.com/tarcfitness" 
              external 
              ariaLabel="Follow us on Twitter (opens in new tab)"
            >
              Twitter
            </FooterLink>
            
            <FooterDivider />
            
            <FooterLink 
              href="https://www.instagram.com/tarc.fitness/" 
              external
              ariaLabel="Follow us on Instagram (opens in new tab)"
            >
              Instagram
            </FooterLink>
            
            <FooterDivider />
            
            <FooterLink href="/contact">
              {dict.bottombar.contact}
            </FooterLink>
            
            <FooterDivider />
            
            <FooterLink href="/terms">
              Terms
            </FooterLink>
            
            <FooterDivider />
            
            <FooterLink href="/impressum">
              Impressum
            </FooterLink>
          </nav>
          
          {/* Copyright */}
          <p className="text-muted-foreground/80 text-xs tracking-wide">
            Copyright &copy; {currentYear} Tarc-fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
