import * as React from "react"

import { PhoneIcon, MapPinIcon, MailIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

import { Hero } from '@/components/hero'
import { ProjectSection } from '@/components/projects'
import { getDictionary } from "./dictionaries"

const contactContent = [
    { key: 'phone', icon: <PhoneIcon size={48} />, text: 'Coming Soon' },
    { key: 'location', icon: <MapPinIcon size={48} />, text: '45355 Essen, Germany' },
    { key: 'mail', icon: <MailIcon size={48} />, text: 'info@tarc-fitness.de' },
]

const teamContent = [
    { key: 'team_1', name: 'Finn Untiedt', title: 'Founder & CEO' },
    { key: 'team_2', name: 'Manuel Schmitz', title: 'Lead Designer & Creative Director' },
    { key: 'team_3', name: 'Fangxing Liu', title: 'IT Lead & Software Engineer' },
]

import { Dictionary } from "@/components/prop-types"
import { ImpactSection } from "@/components/impact"

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
                <ProjectSection dict={dict} />
                <ImpactSection dict={dict} />

                <section className="flex flex-col gap-8 items-center w-full bg-gradient-to-b from-background via-secondary to-background pt-16 pb-24">
                    <h1>{dict.goals}</h1>
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/nfYQC6tgJQI?si=CZdOisX56aDmdOXD"
                                title="Tarc Fitness announcement"
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>

                <section id="team" className="w-full flex flex-col items-center">
                    <div className="flex flex-col items-center w-full max-w-4xl gap-8 p-8 rounded-xl">
                        <h1>Team</h1>
                        <div className="mx-auto px-4 flex flex-col md:flex-row gap-8 w-full">
                            {teamContent.map(({ key, name, title }) => (
                                <Card key={key} className="w-full max-w-lg">
                                    <CardHeader>
                                        <CardTitle>{name}</CardTitle>
                                        <CardDescription>{title}</CardDescription>
                                    </CardHeader>
                                </Card>

                            ))}
                        </div>

                    </div>
                </section>

                <section id="contact" className="w-full flex flex-col items-center">
                    <div className="flex flex-col items-center w-full max-w-4xl gap-8 p-12 rounded-xl">
                        <h1>{dict.con}</h1>
                        <div className="mx-auto px-4 flex flex-col items-center md:flex-row gap-8 w-full">
                            {contactContent.map(({ key, icon, text }) => (
                                <Card key={key} className="w-full max-w-lg">
                                    <CardHeader className="flex justify-center items-center">
                                        <div className="text-primary text-4xl">{icon}</div>

                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-center">{text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>


            </div>
        </>
    );
}
