"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { fadeInUpDelayed } from "@/lib/animations"
import { Button } from "@/components/ui/button"

export interface ProjectCardProps {
  /** The hero image source URL */
  imageSrc: string
  /** Alt text for the image - required for accessibility */
  imageAlt: string
  /** The main title displayed on the card */
  title: string
  /** A short description displayed below the title */
  description: string
  /** The URL to navigate to when the CTA is clicked */
  href: string
  /** The call-to-action button text */
  buttonText: string
  /** Additional CSS classes for the image */
  imageClassName?: string
  /** Whether to apply rounded corners (default: false for full-width display) */
  rounded?: boolean
  /** Additional class for the container */
  className?: string
}

/**
 * A reusable hero-style project card with an image background,
 * gradient overlay, and animated content.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  href,
  buttonText,
  imageClassName,
  rounded = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative h-[60vh] min-h-[400px] overflow-hidden",
        rounded && "rounded-2xl",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={cn("object-cover", imageClassName)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        <motion.div
          {...fadeInUpDelayed(0.2)}
          className="max-w-2xl space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {title}
          </h2>
          <p className="text-white/90 text-lg">
            {description}
          </p>
          <Button
            asChild
            variant="ghost"
            className="inline-flex items-center gap-2 px-6 py-3 h-auto bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 group"
            aria-label={`${buttonText} - ${title}`}
          >
            <Link href={href}>
              {buttonText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectCard
