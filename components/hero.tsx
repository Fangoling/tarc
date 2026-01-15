"use client"

import type React from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { EmailForm } from "./email-form"
import type { DictionaryProp } from "./prop-types"
import backgroundImage from "../public/images/gladiator-background.webp"

/**
 * Hero component props extending base dictionary prop
 */
export interface HeroProps extends DictionaryProp {
  className?: string
}

/**
 * Hero section component featuring:
 * - Animated headline and description
 * - Glassmorphism-styled CTA buttons
 * - Contact dialog with email form
 * - Premium gradient text effects
 */
export const Hero: React.FC<HeroProps> = ({ dict, className }) => {
  return (
    <section
      id="hero"
      role="banner"
      aria-labelledby="hero-title"
      className={cn(
        "relative min-h-screen flex flex-col justify-center text-center overflow-hidden w-full",
        className
      )}
    >
      {/* Background image with optimized loading */}
      <div className="absolute inset-0 w-full h-full z-0" aria-hidden="true">
        <Image
          src={backgroundImage.src}
          alt=""
          fill
          priority
          className="object-cover object-center brightness-[0.15] dark:brightness-[0.15] invert dark:invert-0"
          sizes="100vw"
        />
        {/* Gradient overlay for premium depth effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="py-2 md:py-0">
          <div className="mx-auto max-w-4xl pb-4 text-center md:pb-16">
            {/* Main headline with gradient text and animations */}
            <h1
              id="hero-title"
              className={cn(
                "py-6 text-5xl font-semibold leading-none tracking-tighter",
                "sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-8xl",
                "opacity-0 animate-fade-in [--animation-delay:200ms]"
              )}
            >
              {/* Brand name with primary color and shimmer effect */}
              <span
                className={cn(
                  "pl-2 font-bold",
                  "bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent",
                  "bg-[length:200%_100%]"
                )}
              >
                Tarc Fitness
              </span>
              <br />
              {/* Tagline with elegant gradient */}
              <span
                className={cn(
                  "bg-gradient-to-br bg-clip-text text-transparent",
                  "from-foreground from-30% to-foreground/60",
                  "dark:from-white dark:from-30% dark:to-white/40"
                )}
              >
                {dict.hero.title}
              </span>
            </h1>

            <div className="mx-auto max-w-3xl">
              {/* Description paragraph with fade-in animation */}
              <p
                className={cn(
                  "mb-12 text-lg tracking-tight md:text-xl",
                  "text-muted-foreground",
                  "opacity-0 animate-fade-in [--animation-delay:400ms]"
                )}
              >
                {dict.hero.desc}
              </p>

              {/* CTA buttons container */}
              <div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                role="group"
                aria-label="Call to action buttons"
              >
                {/* Contact Dialog Trigger */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      aria-label={dict.hero["contact-button"]}
                      className={cn(
                        "w-full sm:w-auto min-w-[160px]",
                        "text-lg font-medium rounded-2xl",
                        "bg-primary text-primary-foreground",
                        "hover:bg-primary/90 hover:scale-105",
                        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                        "transition-all duration-300 ease-out",
                        "shadow-lg hover:shadow-xl hover:shadow-primary/25",
                        "opacity-0 animate-fade-in-up [--animation-delay:600ms]"
                      )}
                    >
                      {dict.hero["contact-button"]}
                    </Button>
                  </DialogTrigger>
                  <DialogContent
                    className={cn(
                      "sm:max-w-md",
                      "bg-background/95 backdrop-blur-xl",
                      "border border-border/50",
                      "shadow-2xl"
                    )}
                  >
                    <DialogHeader>
                      <DialogTitle className="text-xl font-semibold">
                        {dict.hero["dialog-title"]}
                      </DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        {dict.hero.desc}
                      </DialogDescription>
                    </DialogHeader>
                    <EmailForm dict={dict} />
                  </DialogContent>
                </Dialog>

                {/* About Us Button */}
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  aria-label={dict.hero["about-button"]}
                  className={cn(
                    "w-full sm:w-auto min-w-[160px]",
                    "text-lg font-medium rounded-2xl",
                    "bg-secondary/80 backdrop-blur-sm",
                    "text-secondary-foreground",
                    "hover:bg-secondary hover:scale-105",
                    "focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
                    "transition-all duration-300 ease-out",
                    "border border-border/30",
                    "group",
                    "opacity-0 animate-fade-in-up [--animation-delay:700ms]"
                  )}
                >
                  <Link
                    href="/about"
                    className="flex flex-row items-center gap-2"
                  >
                    <span>{dict.hero["about-button"]}</span>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4",
                        "transition-transform duration-300",
                        "group-hover:translate-x-1"
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator for visual guidance */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2",
          "opacity-0 animate-fade-in [--animation-delay:1000ms]"
        )}
        aria-hidden="true"
      >
        <div
          className={cn(
            "w-6 h-10 rounded-full border-2 border-foreground/20",
            "flex justify-center pt-2"
          )}
        >
          <div
            className={cn(
              "w-1 h-2 rounded-full bg-foreground/40",
              "animate-bounce"
            )}
          />
        </div>
      </div>
    </section>
  )
}
