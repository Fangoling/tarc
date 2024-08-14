"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import Image from 'next/image'
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
 } from "@/components/ui/carousel";
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
            <div className="flex flex-col items-center">

                <section id="home">
                    <Carousel 
                    plugins={[plugin.current]}
                    opts={{loop: true}}
                    className="w-full max-w-4xl">
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
                    <h1>Services</h1>
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
