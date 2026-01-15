"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { ModeToggle } from "./ui/mode-toggle"
import { LangToggle } from "./ui/language-toggle"
import { MobileNav, type NavItem, type SubNavItem } from "./mobile-nav"
import { NavListItem } from "./ui/nav-list-item"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { DictionaryProp } from "./prop-types"

// ============================================================================
// Types
// ============================================================================

interface ProjectPage {
  title: string
  href: string
  description: string
}

// ============================================================================
// Logo Component
// ============================================================================

function Logo() {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 pl-4",
        "transition-opacity duration-200 hover:opacity-80",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
      )}
      aria-label="Tarc Home"
    >
      {/* Light mode logo */}
      <Image
        src="/images/Tarc_Logo_Schwarz.png"
        alt=""
        height={20}
        width={20}
        className="block dark:hidden"
        aria-hidden="true"
      />
      {/* Dark mode logo */}
      <Image
        src="/images/Tarc_Logo_Wei.png"
        alt=""
        height={20}
        width={20}
        className="hidden dark:block"
        aria-hidden="true"
      />
      <span className="text-xl font-semibold">Tarc</span>
    </Link>
  )
}

// ============================================================================
// Desktop Navigation Item Components
// ============================================================================

interface SimpleNavItemProps {
  name: string
  href: string
}

function SimpleNavItem({ name, href }: SimpleNavItemProps) {
  return (
    <NavigationMenuItem className="bg-secondary">
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "bg-secondary text-base font-medium",
            "transition-all duration-200"
          )}
        >
          {name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

interface DropdownNavItemProps {
  name: string
  subcontent: SubNavItem[]
}

function DropdownNavItem({ name, subcontent }: DropdownNavItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-base font-medium">
        {name}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul
          className="grid w-[200px] gap-2 p-3 md:w-[300px] lg:w-[400px]"
          role="menu"
          aria-label={`${name} submenu`}
        >
          {subcontent.map(({ title, href, description }) => (
            <NavListItem key={title} title={title} href={href}>
              {description}
            </NavListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

// ============================================================================
// Desktop Navigation
// ============================================================================

interface DesktopNavProps {
  items: NavItem[]
}

function DesktopNav({ items }: DesktopNavProps) {
  return (
    <NavigationMenu className="hidden md:flex" aria-label="Main navigation">
      <NavigationMenuList>
        {items.map((item) => {
          const hasSubcontent = Boolean(item.subcontent)

          if (hasSubcontent) {
            return (
              <DropdownNavItem
                key={item.name}
                name={item.name}
                subcontent={item.subcontent!}
              />
            )
          }

          return (
            <SimpleNavItem key={item.name} name={item.name} href={item.href} />
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// ============================================================================
// Main Navigation Component
// ============================================================================

export default function Nav({ dict }: DictionaryProp) {
  // Build project pages from dictionary
  const projectPages: ProjectPage[] = [
    {
      title: "Weighted Clothing",
      href: "/projects/clothing",
      description: dict.navbar.projects["weighted-clothing"],
    },
    {
      title: "Partnering Program",
      href: "/projects/partnering",
      description: dict.navbar.projects["partnering-program"],
    },
    {
      title: "Social Circle",
      href: "/projects/social",
      description: dict.navbar.projects["social-circle"],
    },
  ]

  // Build navigation items from dictionary
  const navItems: NavItem[] = [
    { name: dict.navbar.home, href: "/" },
    { name: dict.navbar.about, href: "/about" },
    { name: dict.navbar.projects.title, href: "/#projects", subcontent: projectPages },
    { name: dict.navbar.impact, href: "/impact" },
    { name: dict.navbar.contact, href: "/contact" },
  ]

  return (
    <header
      className="bg-secondary sticky top-0 z-50"
      role="banner"
    >
      <nav
        className="flex items-center justify-between px-4 py-2"
        aria-label="Main"
      >
        <Logo />

        <DesktopNav items={navItems} />

        <div className="flex items-center gap-2">
          <LangToggle />
          <ModeToggle />
          <MobileNav items={navItems} />
        </div>
      </nav>
    </header>
  )
}
