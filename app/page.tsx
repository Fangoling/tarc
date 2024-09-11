"use client"

import * as React from "react"
import Link from 'next/link'
import Image from 'next/image'

import { PhoneIcon, MapPinIcon, MailIcon, ChevronRightIcon } from "lucide-react"

import "@/styles/globals.css" 
import "@/styles/glowing-button.css"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {  
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import {
    Accordion,
    AccordionTrigger,
    AccordionItem,
    AccordionContent
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"
import { EmailForm } from "@/components/email-form"

const resortContent = [
    {key: 'gym', title: 'Gym',
        content: 'The gym will consist of various equipment for targeted strength or endurance training.',
        equipment: [
            
        ]
    },
    {key: 'strongman', title: 'Strongman',
        content: 'Strongman training will be a combination of basic strength training in the gym, using barbells and dumbbells, and event training with a variety of Strongman objects, such as atlas stones, sandbags, log and yoke',
        equipment: [
            
        ]
    },
    {key: 'swimming', title: 'Swimming',
        content: 'From commercial swimming pools to counter-current systems',
        equipment: [

        ]
    },
    {key: 'athletics', title: 'Athletics',
        content: 'Endurance running tracks, sprint tracks, resistance running tracks, long jump facilities, shot put and throwing facilities',
        equipment: [

        ]
    },
]

 const contactContent = [
    {key: 'phone', icon: <PhoneIcon size={48}/>, text: 'Coming Soon'},
    {key: 'location', icon: <MapPinIcon size={48}/>, text: 'Coming Soon'},
    {key: 'mail', icon: <MailIcon size={48}/>, text: 'info@tarc-fitness.de'},
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

                <section id="hero" className="relative min-h-screen flex flex-col justify-center text-center">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="py-2 md:py-0">
                            <div className="mx-auto max-w-4xl pb-4 text-center md:pb-16">
                                <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-8xl dark:from-white dark:to-white/40">
                                    Revolutionize the Sport Industry with <span className="bg-gradient-to-br from-red-800 to-red-600 bg-clip-text">Tarc</span> 
                                </h1>
                                <div className="mx-auto max-w-3xl">
                                    <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-700 dark:text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
                                        Tarc bridges the gap between business innovation and social impact. We drive economic growth with diverse initiatives, from our fitness studio on Madeira to our fitness app and partnership programs.
                                        <br/>At the same time, we&apos;re committed to making a difference through projects like our self-help book and support programs for individuals facing challenges such as depression.
                                    </p>
                                    <div className="flex flex-row gap-8 justify-center items-center">
                                        <Button className="w-full max-w-[160px] animate-fade-in -translate-y-4 [--animation-delay:600ms] text-lg rounded-2xl bg-gradient-to-br from-red-900 to-red-600">
                                            <Link href="/#email">
                                            <span>Contact us</span>
                                            </Link>
                                        </Button>
                                        <Button className="w-full max-w-[160px] animate-fade-in -translate-y-4 [--animation-delay:600ms] text-lg dark: text-black hover:text-secondary dark:text-white bg-secondary rounded-2xl">
                                            <Link href="/sign-in" className="flex flex-row items-center">
                                                <span>Sign in</span>
                                                <ChevronRightIcon />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>


                <section id="projects" className="w-full">

                        <Tabs defaultValue="gym" className="flex flex-col items-center w-full gap-8">
                            <TabsList className="grid w-full max-w-2xl grid-cols-4 xl md:w-2xl lg:w-4xl h-[60px] md:h-[48px] bg-secondary rounded-2xl">
                                <TabsTrigger value="gym" className="h-[48px] md:h-[36px] rounded-2xl">Resort</TabsTrigger>
                                <TabsTrigger value="partner" className="h-[48px] md:h-[36px] rounded-2xl">Partnering <br className="block md:hidden"></br>Program</TabsTrigger>
                                <TabsTrigger value="clothing" className="h-[48px] md:h-[36px] rounded-2xl">Weighted <br className="block md:hidden"></br>Clothing</TabsTrigger>
                                <TabsTrigger value="social" className="h-[48px] md:h-[36px] rounded-2xl">Social <br className="block md:hidden"></br>Work</TabsTrigger>
                            </TabsList>
                            <div className="w-full max-w-4xl rounded-xl bg-secondary">

                                <div className="px-8 pt-12 pb-16 max-w-2xl mx-auto">

                                    <TabsContent value="clothing" className="animate-fade-in">
                                        <h1>
                                            Project
                                        </h1>
                                        <div className="relative w-full h-[300px] mt-4">
                                            <Image 
                                                src="https://picsum.photos/seed/clothing/1200/600"
                                                alt="lorem picsum photo"
                                                fill={true}
                                                className="rounded-xl brightness-75 dark:brightness-50"
                                            />
                                            <div className="absolute inset-0 flex justify-center items-center">
                                                <h1 className="text-white text-6xl drop-shadow-lg shadow-black">Weighted Clothing</h1>
                                            </div>
                                        </div>
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
                                            Project
                                        </h1>
                                        <div className="relative w-full h-[300px] mt-4">
                                            <Image 
                                                src="https://picsum.photos/seed/partner/1200/600"
                                                alt="lorem picsum photo"
                                                fill={true}
                                                className="rounded-xl brightness-75 dark:brightness-50"
                                            />
                                            <div className="absolute inset-0 flex justify-center items-center">
                                                <h1 className="text-white text-6xl drop-shadow-lg shadow-black">Partnering Program</h1>
                                            </div>
                                        </div>
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
                                            Project
                                        </h1>
                                        <div className="relative w-full h-[300px] mt-4">
                                            <Image 
                                                src="/images/madeira.jpg"
                                                alt="picture of madeira"
                                                fill={true}
                                                className="rounded-xl brightness-75 dark:brightness-50"
                                            />
                                            <div className="absolute inset-0 flex justify-center items-center">
                                                <h1 className="text-white text-7xl drop-shadow-lg shadow-black">Tarc Resort</h1>
                                            </div>
                                        </div>
                                        <p>
                                            The Tarc Fitness Resort in Madeira is set to be the first in a series of flagship resorts worldwide.
                                            It serves as a pioneering model of its kind. The concept allows professional athletes of all
                                            disciplines to spend their off-season with their families without worrying about the quality of their training.
                                        </p>
                                        <p>
                                            Our gym provides the opportunity to maintain or even elevate training levels in a luxurious environment.
                                            Upon request, trainers, physiotherapists, and a dedicated medical team will take care of all needs.
                                            Additionally, we offer the possibility to fully customize nutrition.
                                            <br />
                                            <br />
                                            Outside of the peak season,
                                            the resort is also ideal for recovering from injuries, helping individuals to return to their peak performance
                                            in a comfortable setting.
                                        </p>
                                        <h2>Services</h2>
                                        {resortContent.map(({ key, title, content, equipment }) => (
                                            <Accordion type="single" collapsible key={key}>
                                                <AccordionItem value="key" >
                                                    <AccordionTrigger>
                                                        {title}
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        {content}
                                                        <ul>
                                                            {equipment.map( equip=> (
                                                                <li>{equip}</li>
                                                            ))}
                                                        </ul>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        ))}
                                    </TabsContent>

                                    <TabsContent value="social" className="animate-fade-in">
                                        <h1>
                                            Project
                                        </h1>
                                        <div className="relative w-full h-[300px] mt-4">
                                            <Image 
                                                src="https://picsum.photos/id/65/1200/600"
                                                alt="lorem picsum photo"
                                                fill={true}
                                                className="rounded-xl brightness-75 dark:brightness-50"
                                            />
                                            <div className="absolute inset-0 flex justify-center items-center">
                                                <h1 className="text-white text-6xl drop-shadow-lg shadow-black">Social Work</h1>
                                            </div>
                                        </div>
                                        <p>

                                        </p>
                                    </TabsContent>
                                </div>

                            </div>
                        </Tabs>

                </section>

                <section id="team" className="w-full flex flex-col items-center">
                    <div className="flex flex-col items-center bg-secondary w-full max-w-4xl gap-8 p-12 rounded-xl">
                        <h1>Team</h1>
                        <div className="mx-auto px-4 flex flex-col md:flex-row gap-8 w-full">
                            {teamContent.map(({key, name, title})=>(
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
                    <div className="flex flex-col items-center bg-secondary w-full max-w-4xl gap-8 p-12 rounded-xl">
                        <h1>Contact</h1>
                        <div className="mx-auto px-4 flex flex-col items-center md:flex-row gap-8 w-full">
                            {contactContent.map(({ key, icon, text}) => (
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
