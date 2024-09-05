"use client"

import * as React from "react"
import Link from 'next/link'

import { PhoneIcon, MapPinIcon, MailIcon } from "lucide-react"

import "@/styles/globals.css" 
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {  
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { EmailForm } from "@/components/email-form"



 const contactContent = [
    {key: 'phone', icon: <PhoneIcon/>, text: 'Coming Soon'},
    {key: 'location', icon: <MapPinIcon/>, text: 'Coming Soon'},
    {key: 'mail', icon: <MailIcon/>, text: 'info@tarc-fitness.de'},
 ]

 const teamContent = [
    {key: 'team_1', name: 'Finn Untiedt', title: 'Founder & CEO'},
    {key: 'team_2', name: 'Manuel Schmitz', title: 'Lead Designer & Creative Director'},
    {key: 'team_3', name: 'Fangxing Liu', title: 'IT Lead & Software Engineer'},
 ]

export default function Home() {
    return(
        <>
            <div className="flex flex-col items-center gap-20">

                <section id="hero">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="py-2 md:py-0">
                            <div className="mx-auto max-w-4xl pb-4 text-center md:pb-16">
                                <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
                                    Revolutionize the Sport Industry
                                </h1>
                                <div className="mx-auto max-w-3xl">
                                    <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-700 dark:text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
                                        Tarc bridges the gap between business innovation and social impact. We drive economic growth with diverse initiatives, from our fitness studio on Madeira to our fitness app and partnership programs.
                                        <br/>At the same time, we&apos;re committed to making a difference through projects like our self-help book and support programs for individuals facing challenges such as depression.
                                    </p>
                                    <div>
                                        <Button className="animate-fade-in -translate-y-4 [--animation-delay:600ms] text-lg">
                                            <Link href="/#email">Contact us</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>


                <section id="projects" className="w-full">

                        <Tabs defaultValue="clothing" className="flex flex-col items-center w-full gap-8">
                            <TabsList className="grid w-full max-w-2xl grid-cols-3 xl md:w-2xl lg:w-4xl h-[60px] md:h-[48px] dark:bg-secondary">
                                <TabsTrigger value="clothing" className="h-[48px] md:h-[36px]">Weighted <br className="block md:hidden"></br>Clothing</TabsTrigger>
                                <TabsTrigger value="partner" className="h-[48px] md:h-[36px]">Partnering <br className="block md:hidden"></br>Program</TabsTrigger>
                                <TabsTrigger value="gym" className="h-[48px] md:h-[36px]">Gym</TabsTrigger>
                            </TabsList>
                            <div className="w-full max-w-4xl rounded-xl bg-secondary">

                                <div className="p-4 max-w-2xl mx-auto">

                                    <TabsContent value="clothing" className="animate-fade-in">
                                        <h1>
                                            Project Weighted Clothing
                                        </h1>
                                        <p>
                                            It is a concept in which weighted clothing is used to add resistance to familiar movements.
                                            It is safer than other forms of weighted training because no new movements need to be learned.
                                            Additionally, it increases metabolism due to the higher energy expenditure.
                                        </p>
                                        <h2>Weighted Clothing that&apos;s built different</h2>
                                        <p>
                                            In terms of fit, maximum weight, and value for money, we are light years ahead of the competition.
                                            Our products will also have significantly better media presence and brand recognition
                                            compared to the current market
                                        </p>
                                    </TabsContent>

                                    <TabsContent value="partner" className="animate-fade-in">
                                        <h1>
                                            Project Partnering Program
                                        </h1>
                                        <p>
                                            The concept is intended to serve as a platform for athlete placement, complementing or potentially
                                            replacing smaller agencies. The project aims to function as a seal of quality that distinguishes our partner companies from conventional providers,
                                            while also providing athletes with a reliable source of reputable partners.
                                            We ensure the integrity of both our partner companies and the athletes, and will take appropriate action in the event of any violations
                                        </p>
                                        <h2>What do we look for in a partner</h2>
                                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                            <li>Ethical Conduct</li>
                                            <li>Economic Stability and Professionalism</li>
                                            <li>Visionary and Progressive Thinking</li>
                                        </ul>
                                        <h2>Drafting</h2>
                                        <p>
                                            The Draft is a system designed to introduce advertisers to companies in an exciting way.
                                            In this process, athletes are evaluated and sorted based on their statistics.
                                            These athletes are then available for selection, and can be chosen one by one.
                                            The statistical sorting serves only as a guideline and is not mandatory.
                                        </p>
                                        <br />
                                        <p>
                                            Every six months, a list of all Tarc athletes is published. Just before the summer and winter breaks,
                                            all partner companies can decide which advertiser suits them best.
                                            The order in which athletes are chosen is determined by the partner companies&apos; join dates.
                                            Companies that joined earlier have a higher position in the Draft.
                                            Therefore, the longest-standing partners have the greatest selection of popular athletes.
                                            The selection process continues until there are no more advertising slots available.
                                        </p>
                                        <br />
                                        <p>
                                            Click <Link href="/drafting" className="underline">here</Link> to see a prototype of the drafting system.
                                        </p>
                                    </TabsContent>

                                    <TabsContent value="gym" className="animate-fade-in">
                                        <h1>
                                            Project Gym in Madeira
                                        </h1>
                                        <p>
                                            The Tarc Fitness Resort in Madeira is set to be the first in a series of flagship resorts worldwide.
                                            It serves as a pioneering model of its kind. The concept allows professional athletes of all
                                            disciplines to spend their off-season with their families without worrying about the quality of their training.
                                            <br />
                                            <br />
                                            Our gym provides the opportunity to maintain or even elevate training levels in a luxurious environment.
                                            Upon request, trainers, physiotherapists, and a dedicated medical team will take care of all needs.
                                            Additionally, we offer the possibility to fully customize nutrition.
                                            <br />
                                            <br />
                                            Outside of the peak season,
                                            the resort is also ideal for recovering from injuries, helping individuals to return to their peak performance
                                            in a comfortable setting.
                                        </p>
                                    </TabsContent>
                                </div>

                            </div>
                        </Tabs>

                </section>

                <section id="team" className="w-full flex flex-col items-center">
                    <div className="flex flex-col items-center bg-secondary w-full max-w-4xl gap-4 p-12 rounded-xl">
                        <h1>Team</h1>
                        <div className="mx-auto px-4 flex flex-col md:flex-row gap-8">
                            {teamContent.map(({key, name, title})=>(
                                <Card key={key} className="flex-1">
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
                    <div className="flex flex-col items-center bg-secondary w-full max-w-4xl gap-4 p-12 rounded-xl">
                        <h1>Contact</h1>
                        <div className="mx-auto px-4 flex flex-col md:flex-row gap-8">
                            {contactContent.map(({ key, icon, text}) => (
                                <Card key={key} className="flex-1">
                                    <CardHeader className="flex flex-col items-center">
                                            {icon}
                                    </CardHeader>
                                    <CardContent className="flex flex-col items-center">
                                        <p>{text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="email" className="w-full flex flex-col items-center">
                    <div className="flex flex-col items-center bg-secondary w-full max-w-4xl gap-4 p-12 rounded-xl">
                        <h1>Get in touch</h1>
                        <EmailForm />
                    </div>
                </section>



            </div>
        </>
    );
}
