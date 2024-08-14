"use client"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ui/mode-toggle"

export default function Nav() {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <Link href="#home" className="flex items-center gap-2" prefetch={false}>
        <span className="text-lg font-semibold">Tarc Fitness</span>
      </Link>
      <div className="hidden md:flex gap-4">
        <Link href="#home" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="#services" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          Services
        </Link>
        <Link href="#projects" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          Projects
        </Link>
        <Link href="#team" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          Team
        </Link>
        <Link href="#contact" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </div>
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
              <Link href="#home" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Home
              </Link>
              <Link href="#services" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Services
              </Link>
              <Link href="#projects" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Projects
              </Link>
              <Link href="#team" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Team
              </Link>
              <Link href="#Contact" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
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