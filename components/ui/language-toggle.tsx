"use client"

import { useState } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import Cookies from 'js-cookie'
import { cn } from "@/lib/utils"

type Locale = 'en' | 'de'

interface LanguageOption {
    code: Locale
    flag: string
    flagAlt: string
    labelEn: string
    labelDe: string
}

const LANGUAGES: LanguageOption[] = [
    {
        code: 'de',
        flag: '/flags/de.svg',
        flagAlt: 'Flag of Germany',
        labelEn: 'German',
        labelDe: 'Deutsch',
    },
    {
        code: 'en',
        flag: '/flags/gb.svg',
        flagAlt: 'Flag of United Kingdom',
        labelEn: 'English',
        labelDe: 'Englisch',
    },
]

const LOCALES: Locale[] = ['en', 'de']

interface FlagIconProps {
    src: string
    alt: string
    className?: string
}

function FlagIcon({ src, alt, className }: FlagIconProps) {
    return (
        <div className={cn("relative h-[1.2rem] w-[1.6rem] overflow-hidden rounded-sm", className)}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
            />
        </div>
    )
}

export function LangToggle() {
    const router = useRouter()
    const pathname = usePathname()

    const pathnameLocale = LOCALES.find((locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    ) as Locale | undefined

    const initialLang: Locale = pathnameLocale || (Cookies.get('site_locale') as Locale) || 'en'
    const [language, setLanguage] = useState<Locale>(initialLang)
    const [isOpen, setIsOpen] = useState(false)

    const currentLangData = LANGUAGES.find((lang) => lang.code === language) || LANGUAGES[1]

    const changeLanguage = (lang: Locale) => {
        if (pathnameLocale === lang) {
            setIsOpen(false)
            return
        }
        Cookies.set('site_locale', lang, { expires: 365, path: '/' })

        // Remove old locale from path and prepend new locale
        const newPath = pathnameLocale
            ? pathname.replace(`/${pathnameLocale}`, '')
            : pathname
        const updatedPath = `/${lang}${newPath}`

        setLanguage(lang)
        setIsOpen(false)
        router.push(updatedPath)
    }

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-inherit hover:bg-background"
                    aria-label={language === 'de' ? 'Sprache ändern' : 'Change language'}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                >
                    <FlagIcon
                        src={currentLangData.flag}
                        alt={currentLangData.flagAlt}
                    />
                    <span className="sr-only">
                        {language === 'de' ? 'Sprache ändern' : 'Change language'}
                    </span>
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-56"
                role="listbox"
                aria-label={language === 'de' ? 'Verfügbare Sprachen' : 'Available languages'}
            >
                <div className="grid gap-3">
                    <div className="space-y-1.5">
                        <h4 className="font-medium leading-none">
                            {language === 'de' ? 'Sprache' : 'Language'}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            {language === 'de' ? 'Wähle eine Sprache' : 'Choose your preferred language'}
                        </p>
                    </div>
                    <div className="grid gap-2" role="group">
                        {LANGUAGES.map((lang) => {
                            const isActive = language === lang.code
                            const label = language === 'de' ? lang.labelDe : lang.labelEn

                            return (
                                <Button
                                    key={lang.code}
                                    variant={isActive ? 'secondary' : 'outline'}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={cn(
                                        "w-full justify-start gap-3",
                                        isActive && "ring-2 ring-primary/20"
                                    )}
                                    role="option"
                                    aria-selected={isActive}
                                >
                                    <FlagIcon src={lang.flag} alt={lang.flagAlt} />
                                    <span className="flex-1 text-left">{label}</span>
                                    {isActive && (
                                        <span className="text-xs text-muted-foreground">
                                            {language === 'de' ? 'Aktiv' : 'Active'}
                                        </span>
                                    )}
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
