"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import Image from 'next/image'
import { Dumbbell, Shirt, Handshake, Hand } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
 } from "@/components/ui/carousel";
 import { Button } from '@/components/ui/button'
 const sliderContent = [
    {key: 'img_1', src: '/images/Swiper_1.png',
        alt: 'dumbells on a rack', text: 'WE ARE TARC FITNESS',
        color: 'white'},
    {key: 'img_2', src: '/images/Swiper_2.png',
        alt: 'gymnastic rings', text: 'STRONGEST GYM IN THE WORLD',
        color: 'white'},
 ]

export default function Home() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true})
    )
    return(
        <>
            <div className="flex flex-col items-center gap-20">

                <section id="home">
                    <Carousel 
                    plugins={[plugin.current]}
                    opts={{loop: true}}
                    className="w-full max-w-4xl h-[400px]">
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
                </section>

                <section id="services">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-4 justify-center">
                            <Card className="w-full max-w-xs">
                                <CardTitle>
                                    <CardHeader>What we offer</CardHeader>
                                </CardTitle>
                                <CardContent>
                                    <Button>VIEW ALL SERVICES</Button>
                                </CardContent>
                            </Card>
                            <Card className="w-full max-w-xs">
                                <CardTitle>
                                    <CardHeader>Gym</CardHeader>
                                </CardTitle>
                                <CardContent className="flex flex-row justify-center">
                                    <Dumbbell />
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flex flex-row gap-4 justify-center">
                            <Card className="w-full max-w-xs">
                                <CardTitle>
                                    <CardHeader>Weighted Clothing</CardHeader>
                                </CardTitle>
                                <CardContent className="flex flex-row justify-center">
                                    <Shirt />
                                </CardContent>
                            </Card>

                            <Card className="w-full max-w-xs">
                                <CardTitle className="flex flex-row justify-center">
                                    <CardHeader>
                                        Partner Program
                                    </CardHeader>
                                </CardTitle>
                                <CardContent className="flex flex-row justify-center">
                                    <Handshake />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section id="projects">
                    <h1>Projects</h1>
                </section>

                <section id="team">
                    <h1>Team</h1>
                </section>

                <section id="contact">
                    <h1>Contact</h1>
                </section>

            </div>
        </>
    );
}
