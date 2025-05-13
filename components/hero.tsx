import type React from "react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

import Link from "next/link"
import Image from "next/image"

import { EmailForm } from "./email-form"
import type { DictionaryProp } from "./prop-types"
import backgroundImage from "../public/images/gladiator-background.webp"

export const Hero: React.FC<DictionaryProp> = ({ dict }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center text-center overflow-hidden w-full">

      {/* Background image with improved positioning */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={backgroundImage.src}
          alt="Background"
          fill
          priority
          className="object-cover object-center brightness-[0.15] dark:brightness-[0.15] invert dark:invert-0"
          sizes="100vw"
        />
      </div>

      {/* Content with z-index to appear above the background */}
      <div className="relative z-1 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="py-2 md:py-0">
          <div className="mx-auto max-w-4xl pb-4 text-center md:pb-16">
            <h1 className="animate-fade-in -translate-y-4 text-balance py-6 text-5xl font-semibold leading-none tracking-tighter opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-8xl">
              <span className="pl-2 bg-primary bg-clip-text text-transparent font-bold">Tarc Fitness</span><br />
              <span className="bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text text-transparent dark:from-white dark:from-30% dark:to-white/40">
                {dict.hero.title}
              </span>
            </h1>

            <div className="mx-auto max-w-3xl">
              <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-700 dark:text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
                {dict.hero.desc}
              </p>
              <div className="flex flex-row gap-8 justify-center items-center">
                <Dialog>
                  <DialogTrigger className="flex items-center justify-center h-10 px-4 py-2 font-medium w-full max-w-[160px] opacity-0 animate-fade-in -translate-y-4 [--animation-delay:600ms] text-lg rounded-2xl bg-primary hover:bg-secondary hover:text-black hover:dark:text-white">
                    {dict.hero["contact-button"]}
                  </DialogTrigger>
                  <DialogContent>
                    <h2>Send us an Email</h2>
                    <EmailForm dict={dict} />
                  </DialogContent>
                </Dialog>
                <Button className="w-full max-w-[160px] animate-fade-in -translate-y-4 [--animation-delay:600ms] text-lg dark: text-black dark:text-white bg-secondary rounded-2xl hover:bg-primary opacity-0">
                  <Link href="/about" className="flex flex-row items-center">
                    <span>{dict.hero["about-button"]}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
