"use client"
import * as React from "react"
import { DictionaryProp } from './prop-types'

import Image from "next/image"
import { motion } from "framer-motion"

import { ArrowRight } from 'lucide-react'

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export const ImpactSection: React.FC<DictionaryProp> = ({ dict }) => {
    return (
        <section id="impact" className="w-full bg-gradient-to-b from-background via-secondary to-background">
            <div className="flex flex-col items-center w-full gap-12">
                <h1>{dict.more.title}</h1>
                <motion.div
                    {...fadeInUp}
                    className="mx-auto space-y-12 w-full"
                >
                    {/* Hero Section */}
                    <div className="relative h-[60vh] min-h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="/images/impact/earth.jpg"
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
                                    {dict.impact.impact.title}
                                </h2>
                                <p className="text-white/90 text-lg">
                                    {dict.more.desc}
                                </p>
                                <button>
                                    <a href="/impact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 group">
                                        {dict.projects['partnering-program'].hero.button}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>


            </div>

        </section>
    )
}
