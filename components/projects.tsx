"use client"

import * as React from "react"
import Image from 'next/image'
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from 'lucide-react'


const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}


import { DictionaryProp } from './prop-types'


export const ProjectSection: React.FC<DictionaryProp> = ({ dict }) => {

    const resortContent = [
        {
            key: 'gym', title: 'Gym',
            content: dict.projects.resort.services!.gym.desc,
            image: '/images/resort/Swiper_1.png'
        },
        {
            key: 'strongman', title: 'Strongman',
            content: dict.projects.resort.services!.strongman.desc,
            image: '/images/resort/strongman-generated.webp'
        },
        {
            key: 'athletics', title: 'Athletics',
            content: dict.projects.resort.services!.athletics.desc,
            image: '/images/resort/athletics-generated.webp'
        },
        {
            key: 'swimming', title: 'Swimming',
            content: dict.projects.resort.services!.swimming.desc,
            image: '/images/resort/pool-generated.webp'
        },
    ]

    return (
        <section id="projects" className="w-full min-h-screen bg-gradient-to-b from-background via-secondary to-background pt-16 pb-24">
            <Tabs defaultValue="clothing" className="flex flex-col items-center w-full gap-12">
                {/* Enhanced Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        {dict.projects.title}
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {dict.projects.subtitle}
                    </p>
                </motion.div>

                {/* Enhanced Tabs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-2xl px-4"
                >
                    <TabsList className="grid w-full grid-cols-3 bg-background/50 backdrop-blur-lg rounded-2xl border border-border/50 h-[60px] md:h-[48px]">
                        <TabsTrigger value="partner" className="h-[48px] md:h-[36px] rounded-2xl">Partnering <br className="block md:hidden"></br>Program</TabsTrigger>
                        {/* <TabsTrigger value="gym" className="h-[48px] md:h-[36px] rounded-2xl">Resort</TabsTrigger> */}
                        <TabsTrigger value="clothing" className="h-[48px] md:h-[36px] rounded-2xl">Weighted <br className="block md:hidden"></br>Clothing</TabsTrigger>
                        <TabsTrigger value="social" className="h-[48px] md:h-[36px] rounded-2xl">Social <br className="block md:hidden"></br>Work</TabsTrigger>
                    </TabsList>
                </motion.div>

                <div className="w-full">
                    {/* Resort Tab Content */}
                    <TabsContent value="gym" className="focus-visible:outline-none">
                        <motion.div
                            {...fadeInUp}
                            className="max-w-7xl mx-auto space-y-12"
                        >
                            {/* Hero Section */}
                            <div className="relative h-[60vh] min-h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/resort/madeira.jpg"
                                    alt="Madeira resort view"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="max-w-2xl space-y-4"
                                    >
                                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                                            {dict.projects.resort.hero.title}
                                        </h2>
                                        <p className="text-white/90 text-lg">
                                            {dict.projects.resort.hero.desc}
                                        </p>
                                        {/**
                                         * 
                                        */}
                                        <button >
                                            <a href="/projects/resort" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 group">
                                                {dict.projects.resort.hero.button}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </button>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Services Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {resortContent.map(({ key, title, content, image }, index) => (
                                    <motion.div
                                        key={key}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.15 }}
                                    >
                                        <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                                            <CardContent className="p-0">
                                                <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                                                    <Image
                                                        src={image}
                                                        alt={title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                                <div className="p-6 space-y-2">
                                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                        {title}
                                                    </h3>
                                                    <p className="text-muted-foreground text-sm">
                                                        {content}
                                                    </p>
                                                    {/*
                                                    <div className="flex items-center text-primary gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                                        Learn more <ChevronRight className="w-4 h-4" />
                                                    </div>
                                                    */}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </TabsContent>

                    {/* Partnering Program Tab Content*/}
                    <TabsContent value="partner" className="focus-visible:outline-none">
                        <motion.div
                            {...fadeInUp}
                            className="mx-auto space-y-12"
                        >
                            {/* Hero Section */}
                            <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
                                <Image
                                    src="/images/partnering/shakingHands.jpg"
                                    alt="lorem picsum photo"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="max-w-2xl space-y-4"
                                    >
                                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                                            {dict.projects['partnering-program'].hero.title}
                                        </h2>
                                        <p className="text-white/90 text-lg">
                                            {dict.projects['partnering-program'].hero.desc}
                                        </p>
                                        <button>
                                            <a href="/projects/partnering" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 group">
                                                {dict.projects['partnering-program'].hero.button}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </TabsContent>


                    {/* Weighted Clothing Tab Content */}
                    <TabsContent value="clothing" className="focus-visible:outline-none">
                        <motion.div
                            {...fadeInUp}
                            className="space-y-12"
                        >
                            {/* Hero Section */}
                            <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
                                <Image
                                    src="https://picsum.photos/seed/clothing/1200/600"
                                    alt="lorem picsum photo"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="max-w-2xl space-y-4"
                                    >
                                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                                            {dict.projects['weighted-clothing'].hero.title}
                                        </h2>
                                        <p className="text-white/90 text-lg">
                                            {dict.projects['weighted-clothing'].hero.desc}
                                        </p>
                                        <button>
                                            <a href="/projects/clothing" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 group">
                                                {dict.projects['weighted-clothing'].hero.button}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </TabsContent>

                    {/* Social Work Tab Content */}
                    <TabsContent value="social" className="focus-visible:outline-none">
                        <motion.div
                            {...fadeInUp}
                            className="mx-auto space-y-12"
                        >
                            {/* Hero Section */}
                            <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
                                <Image
                                    src="https://picsum.photos/id/65/1200/600"
                                    alt="lorem picsum photo"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="max-w-2xl space-y-4"
                                    >
                                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                                            {dict.projects['social-circle'].hero.title}
                                        </h2>
                                        <p className="text-white/90 text-lg">
                                            {dict.projects['social-circle'].hero.desc}
                                        </p>
                                        <a href="/projects/social" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 group">
                                            {dict.projects['social-circle'].hero.button}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </TabsContent>

                </div>
            </Tabs>
        </section>
    )
}

