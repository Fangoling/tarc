"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export interface NavItem {
  name: string
  href: string
  subcontent?: SubNavItem[]
}

export interface SubNavItem {
  title: string
  href: string
  description: string
}

export interface MobileNavProps {
  items: NavItem[]
}

/**
 * Mobile navigation drawer component.
 * Renders a hamburger menu that opens a slide-out drawer with navigation links.
 */
export function MobileNav({ items }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[350px]"
        aria-label="Mobile navigation"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation links and submenus
        </SheetDescription>
        <nav
          className="flex flex-col gap-2 pt-8"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {items.map((item) => (
            <MobileNavItem key={item.name} item={item} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

interface MobileNavItemProps {
  item: NavItem
}

/**
 * Individual mobile navigation item.
 * Handles both simple links and items with submenus.
 */
function MobileNavItem({ item }: MobileNavItemProps) {
  const { name, href, subcontent } = item

  // Simple link without subcontent
  if (!subcontent) {
    return (
      <SheetClose asChild>
        <Link
          href={href}
          className={cn(
            "flex items-center px-2 py-3 text-lg font-medium rounded-md",
            "transition-all duration-200 ease-in-out",
            "hover:bg-accent hover:text-accent-foreground hover:translate-x-1",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
          prefetch={false}
        >
          {name}
        </Link>
      </SheetClose>
    )
  }

  // Link with subcontent dropdown
  return (
    <div className="space-y-1">
      <p
        className={cn(
          "px-2 py-3 text-lg font-medium text-muted-foreground",
          "border-b border-border/50"
        )}
      >
        {name}
      </p>
      <div className="pl-2 space-y-0.5" role="menu">
        {subcontent.map((subItem) => (
          <SheetClose asChild key={subItem.title}>
            <Link
              href={subItem.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2.5 text-base font-medium rounded-md",
                "transition-all duration-200 ease-in-out",
                "hover:bg-accent hover:text-accent-foreground hover:translate-x-1",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              prefetch={false}
              role="menuitem"
            >
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              {subItem.title}
            </Link>
          </SheetClose>
        ))}
      </div>
    </div>
  )
}

export default MobileNav
