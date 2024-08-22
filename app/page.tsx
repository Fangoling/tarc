"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { Dumbbell, Shirt, Handshake, PhoneIcon, MapPinIcon, MailIcon } from "lucide-react"

import "@/styles/globals.css" 
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
 } from "@/components/ui/carousel";
import {  
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"


 const sliderContent = [
    {key: 'img_1', src: '/images/Swiper_1.png',
        alt: 'dumbells on a rack', text: 'WE ARE TARC FITNESS',
        color: 'white'},
    {key: 'img_2', src: '/images/Swiper_2.png',
        alt: 'gymnastic rings', text: 'STRONGEST GYM IN THE WORLD',
        color: 'white'},
 ]

 const contactContent = [
    {key: 'phone', icon: <PhoneIcon/>, text: 'Coming Soon'},
    {key: 'location', icon: <MapPinIcon/>, text: 'Coming Soon'},
    {key: 'mail', icon: <MailIcon/>, text: 'Coming Soon'},
 ]


export default function Home() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true})
    )
    return(
        <>
            <div className="flex flex-col items-center gap-20">
                    <Carousel 
                    plugins={[plugin.current]}
                    opts={{loop: true}}
                    className="w-full max-w-4xl h-[300px]">
                        <CarouselContent>
                            {sliderContent.map(({ key, src, alt, text, color }) => (
                            <CarouselItem key={key} className="w-full h-full">
                                <Card className="relative">
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={600}
                                        height={400}
                                        className="w-full rounded-lg object-cover aspect-auto filter blur-sm"
                                    ></Image>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <p style={{color: color}}
                                            className="font-bold text-5xl sm:text-7xl md:text-8xl">
                                            {text}
                                        </p>
                                    </div>
                                </Card>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                <section id="projects" className="py-8">
                    <Tabs defaultValue="clothing" className="w-xl md:w-2xl lg:w-4xl">
                        <TabsList className="grid w-full grid-cols-3 w-xl md:w-2xl lg:w-4xl">
                            <TabsTrigger value="clothing">Weighted Clothing</TabsTrigger>
                            <TabsTrigger value="gym">Gym</TabsTrigger>
                            <TabsTrigger value="partner">Partnering Program</TabsTrigger>
                        </TabsList>
                        <div className="pt-4 max-w-2xl">
                            <TabsContent value="clothing">
                                <h1>
                                    Project Weighted Clothing
                                </h1>
                                <p>
                                    It is a concept in which weighted clothing is used to add resistance to familiar movements.
                                    It is safer than other forms of weighted training because no new movements need to be learned.
                                    Additionally, it increases metabolism due to the higher energy expenditure.
                                </p>
                                <h2>What makes us different</h2>
                                <p>
                                    In terms of fit, maximum weight, and value for money, we are light years ahead of the competition.
                                    Our products will also have significantly better media presence and brand recognition
                                    compared to the current market
                                </p>
                            </TabsContent>
                            <TabsContent value="gym">
                                <h1>
                                    Project Gym in Madeira
                                </h1>
                                <p>
                                    The Tarc Fitness Resort in Madeira is set to be the first in a series of flagship resorts worldwide.
                                    It serves as a pioneering model of its kind. The concept allows professional athletes of all
                                    disciplines to spend their off-season with their families without worrying about the quality of their training.
                                    <br />
                                    Our gym provides the opportunity to maintain or even elevate training levels in a luxurious environment.
                                    Upon request, trainers, physiotherapists, and a dedicated medical team will take care of all needs.
                                    Additionally, we offer the possibility to fully customize nutrition.
                                    <br />
                                    Outside of the peak season,
                                    the resort is also ideal for recovering from injuries, helping individuals to return to their peak performance
                                    in a comfortable setting.
                                </p>
                            </TabsContent>
                            <TabsContent value="partner">
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

                            </TabsContent>

                        </div>
                    </Tabs>
                </section>

                <section id="team" className="flex flex-col items-center gap-4">
                    <h1>Team</h1>
                    <div className="flex flex-row gap-8">
                        <Card className="flex-1">
                            <CardHeader>
                                <CardTitle>Finn Untied</CardTitle>
                                <CardDescription>CEO</CardDescription>
                            </CardHeader>
                            <CardContent>

                            </CardContent>
                        </Card>
                        <Card className="flex-1">
                            <CardHeader>
                                <CardTitle>Manuel Schmitz</CardTitle>
                                <CardDescription>CTO</CardDescription>
                            </CardHeader>
                            <CardContent>

                            </CardContent>
                        </Card>

                    </div>
                </section>

                <section id="contact" className="flex flex-col items-center gap-4">
                    <h1>Contact</h1>
                    <div className="flex w-max gap-8">
                        {contactContent.map(({ key, icon, text}) => (
                            <Card key={key}>
                                <CardHeader className="flex flex-col items-center">
                                        {icon}
                                </CardHeader>
                                <CardContent>
                                    <p>{text}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

            </div>
        </>
    );
}
