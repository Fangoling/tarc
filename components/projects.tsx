import * as React from "react"

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const resortContent = [
    {
        key: 'gym', title: 'Gym',
        content: 'Versatile space for targeted strength and endurance training.',
        image: '/images/Swiper_1.png'
    },
    {
        key: 'strongman', title: 'Strongman',
        content: 'Combining gym basics with unique Strongman challenges.',
        image: '/images/strongman-generated.webp'
    },
    {
        key: 'swimming', title: 'Swimming',
        content: 'Commercial pools and advanced counter-current systems.',
        image: '/images/pool-generated.webp'
    },
    {
        key: 'athletics', title: 'Athletics',
        content: 'Facilities for endurance, sprints, and field events.',
        image: '/images/trackfield-generated.webp'
    },
]

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"

export function ProjectSection() {
    return (
        <section id="projects" className="w-full flex flex-col gap-8 bg-secondary pt-16">
            <Tabs defaultValue="gym" className="flex flex-col items-center w-full gap-8">
                <h1>Latest Projects</h1>
                <TabsList className="grid w-full max-w-2xl grid-cols-4 xl md:w-2xl lg:w-4xl h-[60px] md:h-[48px] bg-background rounded-2xl bg-opacity-30 backdrop-blur-lg">
                    <TabsTrigger value="gym" className="h-[48px] md:h-[36px] rounded-2xl">Resort</TabsTrigger>
                    <TabsTrigger value="partner" className="h-[48px] md:h-[36px] rounded-2xl">Partnering <br className="block md:hidden"></br>Program</TabsTrigger>
                    <TabsTrigger value="clothing" className="h-[48px] md:h-[36px] rounded-2xl">Weighted <br className="block md:hidden"></br>Clothing</TabsTrigger>
                    <TabsTrigger value="social" className="h-[48px] md:h-[36px] rounded-2xl">Social <br className="block md:hidden"></br>Work</TabsTrigger>
                </TabsList>

                <div className="w-full rounded-xl bg-secondary">
                    <div className="px-8 pt-4 pb-16 mx-auto w-full">
                        <TabsContent value="clothing" className="animate-fade-in flex flex-col items-center">
                            <div className="max-w-4xl">
                                <div className="relative w-full h-[300px] mt-4">
                                    <Image
                                        src="https://picsum.photos/seed/clothing/1200/600"
                                        alt="lorem picsum photo"
                                        fill={true}
                                        className="rounded-xl brightness-75 dark:brightness-50"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center text-center">
                                        <h1 className="text-white text-6xl drop-shadow-lg shadow-black">Weighted Clothing</h1>
                                    </div>
                                </div>
                                <h2>The concept of weighted clothing</h2>
                                <p>
                                    Weighted clothing is a concept where resistance is added to familiar movements by using clothing with implemented weights. It is safer than other forms of weighted training, as no new movement patterns need to be learned. Additionally, it boosts metabolism due to the increased energy expenditure.
                                </p>
                                <h2>Addressing the Challenges of Weighted Clothing</h2>
                                <p>
                                    The current problem with the well-developed concept behind weighted clothing is its implementation in reality. The practical execution of the simple concept of overloading bodyweight training is very complex due to physical constraints. The biggest issues here are often limited range of motion and the improper distribution of weight, which make athletic training impossible. In addition, there is the problem of washability and maintaining quality, which is also encountered in other areas of the fitness industry, such as with free weights.
                                </p>
                                <h2>Improved Weight Distribution for Optimal Performance</h2>
                                <p>
                                    Tarcs products have achieved better usability for athletic training through improved weight distribution. Additionally, care has been taken not to line the product with thick fabric, ensuring that movement remains as unrestricted as possible
                                </p>

                            </div>
                        </TabsContent>

                        <TabsContent value="partner" className="animate-fade-in flex flex-col items-center">
                            <div className="max-w-4xl">
                                <div className="relative w-full h-[300px] mt-4">
                                    <Image
                                        src="https://picsum.photos/seed/partner/1200/600"
                                        alt="lorem picsum photo"
                                        fill={true}
                                        className="rounded-xl brightness-75 dark:brightness-50"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center text-center">
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
                                    Every year, a list of all Tarc athletes is published and all partner companies can decide which advertiser suits them best.
                                    The order in which athletes are chosen is determined by the partner companies&apos; join dates.
                                    Companies that joined earlier have a higher position in the Draft.
                                    Therefore, the longest-standing partners have the greatest selection of popular athletes.
                                    The selection process continues until there are no more advertising slots available.
                                    <br/><br/>The first draft starts is planned to start in 2027.
                                </p>
                                <br />
                                <p>
                                    Click <Link href="/drafting" className="underline">here</Link> to see a prototype of the drafting system.
                                </p>
                            </div>
                        </TabsContent>

                        <TabsContent value="gym" className="flex flex-col animate-fade-in w-full items-center">
                            <div className="flex flex-col max-w-4xl gap-4 ">

                                <div className="relative w-full h-[300px] mt-4">
                                    <Image
                                        src="/images/madeira.jpg"
                                        alt="picture of madeira"
                                        fill={true}
                                        className="rounded-xl brightness-75 dark:brightness-50"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center text-center">
                                        <h1 className="text-white text-7xl drop-shadow-lg shadow-black">Tarc Resort</h1>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <h2>A New Benchmark in Athletic Retreats</h2>
                                    <div className="flex flex-start gap-8 pt-8">
                                        <p className="w-1/2">
                                            The Tarc-Fitness Resort in Madeira is the first in a planned series of resorts worldwide and serves as a blueprint for future locations. It offers professional athletes the opportunity to spend the off-season with their families without compromising on high-quality training.
                                        </p>
                                        <div className="relative w-1/2">
                                            <Image
                                            src="https://picsum.photos/id/177/1200/600"
                                            alt="Picture of Madeira"
                                            fill={true}
                                            className="rounded-xl object-cover"
                                            />
                                        </div>
                                    </div>

                                </div>



                                <div className="pt-4">
                                    <h2>Prime Location in the heart of Madeira</h2>
                                    <div className="flex flex-start gap-8 pt-8">
                                        <div className="relative w-1/2">
                                            <Image
                                            src="https://picsum.photos/id/16/1200/600"
                                            alt="Picture of Madeira"
                                            fill={true}
                                            className="rounded-xl object-cover"
                                            />
                                        </div>
                                        <p className="w-1/2 p-4 rounded-xl">
                                            The resort spans 38,970 square meters and is located near Funchal, Madeira, directly opposite the island’s most popular golf course and about a 10-minute drive from the airport, ensuring excellent accessibility.
                                        </p>
                                    </div>

                                </div>

                                <h2>World-Class Training Facilities for Professional Athletes</h2>
                                <p>
                                    Our gym allows athletes to maintain or even improve their training level in a luxurious environment, with a team of trainers, physiotherapists, and doctors available upon request. Nutrition can also be fully customized.

                                    <br /><br />The building itself is designed in an antique style with modern accents, and the entire property is planned to be well-maintained and harmoniously integrated into the natural landscape.
                                    <br /><br />Outside the main season, the resort is ideal for rehabilitation and returning to individual performance levels in a relaxed atmosphere.
                                </p>
                                <h2>Services</h2>
                                <div className="grid gap-8 md:grid-cols-2">
                                    {resortContent.map(({ key, title, content, image}) => (
                                        <Card className="relative w-full max-w-md overflow-hidden group" key={key}>
                                            <CardContent className="p-0">
                                                <div className="relative">
                                                {/* Image container with gradient overlay */}
                                                <div className="relative aspect-[4/3] overflow-hidden">
                                                    <img
                                                    src={image}
                                                    alt="picture of the title"
                                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    {/* Gradient overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                                                </div>
                                                
                                                {/* Text overlay */}
                                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                                    <h2 className="text-3xl font-bold tracking-tight decoration-0">
                                                        {title}
                                                    </h2>
                                                </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}

                                </div>
                            </div>

                        </TabsContent>

                        <TabsContent value="social" className="animate-fade-in flex flex-col items-center">
                            <div className="flex flex-col max-w-4xl gap-8">
                                <div className="relative w-full h-[300px] mt-4">
                                    <Image
                                        src="https://picsum.photos/id/65/1200/600"
                                        alt="lorem picsum photo"
                                        fill={true}
                                        className="rounded-xl brightness-75 dark:brightness-50"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center text-center">
                                        <h1 className="text-white text-6xl drop-shadow-lg shadow-black">Social Work</h1>
                                    </div>
                                </div>
                                <p>
                                    The Social Circle is a concept developed by Tarc with the goal of maximizing support for social projects while minimizing the depletion of resources. To achieve this, financial resources are invested once into a self-sustaining cycle.
                                </p>
                            </div>
                        </TabsContent>
                    </div>

                </div>
            </Tabs>

        </section>


    )
}