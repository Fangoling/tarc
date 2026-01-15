"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"

export interface NavListItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
  children?: React.ReactNode
}

/**
 * Navigation list item for dropdown menus.
 * Displays a title and optional description with hover effects.
 */
const NavListItem = React.forwardRef<HTMLAnchorElement, NavListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li role="menuitem">
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none",
              "transition-all duration-200 ease-in-out",
              "hover:bg-accent hover:text-accent-foreground hover:translate-x-1",
              "focus:bg-accent focus:text-accent-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1.5">
                {children}
              </p>
            )}
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)

NavListItem.displayName = "NavListItem"

export { NavListItem }
