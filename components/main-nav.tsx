"use client"

import * as React from "react"
import Link from "next/link"
import Img from "next/image"

import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
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
    title: "Athlete Drafting",
    href: "/drafting",
    description: "Prototype model of the drafting system"
  }
]

const navbarItems: 
{
  name: string;
  href: string;
  subcontent?: {title: string, href: string, description: string}[]
}[] = [
  {name: 'Home', href: '/'},
  {name: 'Services', href: '/', subcontent: services},
  {name: 'Projects', href: '/#projects'},
  {name: 'Team', href: '/#team'},
  {name: 'Contact', href: '/#contact'}
]

export default function Nav() {

  return (
    <div className="flex items-center justify-between px-4 py-2 pb-4">
      <Link href="/" className="flex items-center gap-2">
      <div className="pl-4 flex flex-row gap-2">
        <Img
          src="/images/Tarc_Logo_Schwarz.png"
          alt="tarc logo"
          height={20}
          width={20}
          className="flex dark:hidden"
        ></Img>
        <Img
          src="/images/Tarc_Logo_Wei.png"
          alt="tarc logo"
          height={20}
          width={20}
          className="hidden dark:flex"
        ></Img>
        <span className="text-xl font-semibold">Tarc</span>
      </div>
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navbarItems.map(({ name, href, subcontent }) => (
            !subcontent ? 
            <NavigationMenuItem key={name}>
              <Link href={href} className="text-lg font-medium" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            : 
            <NavigationMenuItem key={name}>
              <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-2 md:w-[300px] md:grind-cols-2 lg:w-[400px]">
                  {subcontent.map(({ title, href, description }) => (
                    <ListItem
                      key={title}
                      title={title}
                      href={href}
                    >
                      {description}
                    </ListItem>
                  ))}
                  </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}

        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-2">
        <ModeToggle/>
        <Sheet> 
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col items-start w-[400px] p-4 gap-2">
              {navbarItems.map(({name, href, subcontent}) => (
                !subcontent ? 
                  <SheetClose key={name}>
                    <Link key={name} href={href} className="text-4xl font-medium hover:underline" prefetch={false}>
                      {name}
                    </Link>
                  </SheetClose> 
                :
                <div key={name}>
                  <p className="text-4xl font-medium">{name + ":"}</p>
                  {subcontent.map(({title, href}) => (
                    <SheetClose key={title}>
                      <Link key={title} href={href} className="text-4xl font-medium hover:underline" prefetch={false}>
                        {"- " + title}
                      </Link>
                    </SheetClose> 
                  ))}
                </div>

                ))}
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </div>
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