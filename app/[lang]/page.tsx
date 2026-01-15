import * as React from "react"

import { Hero } from '@/components/hero'
import { Quote } from '@/components/quote'
import { ProjectSection } from '@/components/projects'
import { ImpactSection } from "@/components/impact"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { getDictionary } from "./dictionaries"

import type { Dictionary } from "@/components/prop-types"

export default async function Home({
    params,
}: {
    params: Promise<{ lang: 'en' | 'de' }>
}) {
    const lang = (await params).lang
    const dict: Dictionary = await getDictionary(lang)

    return (
        <>
            <div className="flex flex-col items-center gap-12 w-full">
                <Hero dict={dict} />
                <Quote dict={dict} />
                <ProjectSection dict={dict} />
                <ImpactSection dict={dict} />
                <TeamSection />
                <ContactSection dict={dict} />
            </div>
        </>
    );
}
