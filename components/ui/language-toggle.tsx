"use client"

import React, { useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "@/components/ui/button"
import Image from "next/image"

import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

export function LangToggle() {

    const router = useRouter()

    let locales = ['en', 'de']

    const pathname = usePathname()

    const pathnameLocale = locales.find((locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    const [language, setLanguage] = useState(pathnameLocale)

    const changeLanguage = () => {
        if (pathnameLocale == 'de') {
            setLanguage('en')
        } else {
            setLanguage('de')
        }

        // remove old locale
        const newPath = pathname.slice(3)

        router.push(`/${language}${newPath}`)
    }

    return (
        <>
            <Button variant="outline" size="icon" onClick={changeLanguage} className="bg-inherit hover:bg-background">
                {language == "de" ?
                <div className="relative h-[1.2rem] w-[1.8crem]">
                    <Image
                        src="/flags/de.svg"
                        alt="Flag of Germany"
                        fill
                        className="object-cover"
                    />
                </div>
                    :
                <div className="relative h-[1.2rem] w-[1.2rem]">
                    <Image
                        src="/flags/gb.svg"
                        alt="Flag of United Kingdom"
                        fill
                        className="object-cover"
                    />
                </div>
                }
                <span className="sr-only">Toggle theme</span>
            </Button>
        </>
    )
}