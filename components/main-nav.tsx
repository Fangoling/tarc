"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ui/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const services: { title: string; href: string; description: string }[] = [
  {
    title: "All Services",
    href: "/#services",
    description: "Current services that we provide for you"
  }, 
  {
    title: "Athlete Drafting",
    href: "/drafting",
    description: "Prototype model of the drafting system"
  }
]

export default function Nav() {
  return (
    <div className="flex items-center justify-between px-4 py-2 pb-4">
      <Link href="/#home" className="flex items-center gap-2">
        <span className="text-lg font-semibold">Tarc Fitness</span>
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grind-cols-2 lg:w-[400px]">
                {services.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                  >
                    {service.description}
                  </ListItem>
                ))}
                </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/#projects" className="text-lg font-medium" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/#team" className="text-lg font-medium" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Team
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link href="/#contact" className="text-lg font-medium" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-2">
        <ModeToggle/>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid w-[200px] p-4">
              <Link href="/#home" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Home
              </Link>
              <Link href="/#services" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Services
              </Link>
              <Link href="/#projects" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Projects
              </Link>
              <Link href="/#team" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Team
              </Link>
              <Link href="/#contact" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </div>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"