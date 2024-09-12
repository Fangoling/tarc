
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogTrigger,
    DialogContent
} from '@/components/ui/dialog'

import { ChevronRightIcon } from 'lucide-react'
import { EmailForm } from './email-form'
import ContactPage from '@/app/contact/page'

export function Hero() {
    return (
            <section id="hero" className="relative min-h-screen flex flex-col justify-center text-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="py-2 md:py-0">
                        <div className="mx-auto max-w-4xl pb-4 text-center md:pb-16">

                            <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-8xl dark:from-white dark:to-white/40">
                                Revolutionize the Sport Industry with <span className="bg-gradient-to-br from-red-800 to-red-600 bg-clip-text font-bold">Tarc</span> 
                            </h1>
                            <div className="mx-auto max-w-3xl">
                                <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-700 dark:text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
                                    Tarc bridges the gap between business innovation and social impact. We drive economic growth with diverse initiatives, from our fitness studio on Madeira to our fitness app and partnership programs.
                                    <br/>At the same time, we&apos;re committed to making a difference through projects like our self-help book and support programs for individuals facing challenges such as depression.
                                </p>
                                <div className="flex flex-row gap-8 justify-center items-center">
                                    <Dialog>
                                        <Button className="w-full max-w-[160px] animate-fade-in -translate-y-4 [--animation-delay:600ms] text-lg rounded-2xl bg-gradient-to-br from-red-900 to-red-600 hover:from-secondary hover:to-secondary">
                                            <DialogTrigger>
                                                Contact Us
                                            </DialogTrigger>
                                        </Button>
                                        <DialogContent>
                                            <h2>Send us an Email</h2>
                                            <EmailForm />
                                        </DialogContent>
                                    </Dialog>
                                    <Button className="w-full max-w-[160px] animate-fade-in -translate-y-4 [--animation-delay:600ms] text-lg dark: text-black dark:text-white bg-secondary rounded-2xl hover:from-red-900 hover:to-red-600 hover:bg-gradient-to-br">
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
    )
}