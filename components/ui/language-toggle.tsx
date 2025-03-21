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

    const changeLanguage = (lang: 'de' | 'en') => {
        if (pathnameLocale == lang) {
            return
        } else {
            setLanguage(lang)
        }
        // remove old locale
        const newPath = pathname.slice(3)

        router.push(`/${lang}${newPath}`)
    }

    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" size="icon" className="bg-inherit hover:bg-background">
                        {language == "de" ?
                            <div className="relative h-[1.2rem] w-[1.6rem]">
                                <Image
                                    src="/flags/de.svg"
                                    alt="Flag of Germany"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            :
                            <div className="relative h-[1.2rem] w-[1.6rem]">
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
                </PopoverTrigger>
                <PopoverContent className="w-48">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">
                                {language == 'de' ? "Sprachen" : "Languages"}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                {language == 'de' ? "Wähle eine Sprache " : "Choose your preferred Language"}
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-3 items-center gap-24">
                                <Button variant="outline" onClick={() => changeLanguage('de')} size={"lg"}>
                                    {language == 'de' ? "Deutsch" : "German"}
                                </Button>
                                <div className="relative h-[1.2rem] w-[1.6rem]">
                                    <Image
                                        src="/flags/de.svg"
                                        alt="Flag of Germany"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 items-center gap-24">
                                <Button variant="outline" onClick={() => changeLanguage('en')} size={"lg"}>
                                    {language == 'de' ? "Englisch" : "English"}
                                </Button>
                                <div className="relative h-[1.2rem] w-[1.6rem]">
                                    <Image
                                        src="/flags/gb.svg"
                                        alt="Flag of United Kingdom"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}