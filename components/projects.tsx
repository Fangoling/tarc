import * as React from "react"

import Link from 'next/link'
import Image from 'next/image'

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

export function ProjectSection() {
    return (
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
                                                                <li key={equip}>{equip}</li>
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


    )
}