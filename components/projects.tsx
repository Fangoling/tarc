"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { fadeInUp, fadeInDown, fadeInScale, staggerItem } from "@/lib/animations"
import { DictionaryProp } from "./prop-types"

/** Configuration for a resort service item */
interface ResortService {
  key: string
  title: string
  content: string
  image: string
}

export const ProjectSection: React.FC<DictionaryProp> = ({ dict }) => {
  const resortContent: ResortService[] = [
    {
      key: "gym",
      title: "Gym",
      content: dict.projects.resort.services!.gym.desc,
      image: "/images/resort/Swiper_1.png",
    },
    {
      key: "strongman",
      title: "Strongman",
      content: dict.projects.resort.services!.strongman.desc,
      image: "/images/resort/strongman-generated.webp",
    },
    {
      key: "athletics",
      title: "Athletics",
      content: dict.projects.resort.services!.athletics.desc,
      image: "/images/resort/athletics-generated.webp",
    },
    {
      key: "swimming",
      title: "Swimming",
      content: dict.projects.resort.services!.swimming.desc,
      image: "/images/resort/pool-generated.webp",
    },
  ]

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-b from-background via-secondary to-background pt-16 pb-24"
      aria-labelledby="projects-heading"
    >
      <Tabs defaultValue="clothing" className="flex flex-col items-center w-full gap-12">
        {/* Header */}
        <motion.div {...fadeInDown} className="text-center space-y-4">
          <h1 id="projects-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
            {dict.projects.title}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {dict.projects.subtitle}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div {...fadeInScale} className="w-full max-w-2xl px-4">
          <TabsList
            className="grid w-full grid-cols-3 bg-background/50 backdrop-blur-lg rounded-2xl border border-border/50 h-[60px] md:h-[48px]"
            aria-label="Project categories"
          >
            <TabsTrigger value="partner" className="h-[48px] md:h-[36px] rounded-2xl">
              Partnering <br className="block md:hidden" />
              Program
            </TabsTrigger>
            <TabsTrigger value="clothing" className="h-[48px] md:h-[36px] rounded-2xl">
              Weighted <br className="block md:hidden" />
              Clothing
            </TabsTrigger>
            <TabsTrigger value="social" className="h-[48px] md:h-[36px] rounded-2xl">
              Social <br className="block md:hidden" />
              Work
            </TabsTrigger>
          </TabsList>
        </motion.div>

        <div className="w-full">
          {/* Resort Tab Content */}
          <TabsContent value="gym" className="focus-visible:outline-none">
            <motion.div {...fadeInUp} className="max-w-7xl mx-auto space-y-12">
              <ProjectCard
                imageSrc="/images/resort/madeira.jpg"
                imageAlt="Madeira resort view"
                title={dict.projects.resort.hero.title}
                description={dict.projects.resort.hero.desc}
                href="/projects/resort"
                buttonText={dict.projects.resort.hero.button}
                rounded
              />

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resortContent.map(({ key, title, content, image }, index) => (
                  <motion.div key={key} {...staggerItem(index)}>
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
                          <p className="text-muted-foreground text-sm">{content}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Partnering Program Tab Content */}
          <TabsContent value="partner" className="focus-visible:outline-none">
            <motion.div {...fadeInUp} className="mx-auto space-y-12">
              <ProjectCard
                imageSrc="/images/partnering/shakingHands.jpg"
                imageAlt="Business partners shaking hands"
                title={dict.projects["partnering-program"].hero.title}
                description={dict.projects["partnering-program"].hero.desc}
                href="/projects/partnering"
                buttonText={dict.projects["partnering-program"].hero.button}
              />
            </motion.div>
          </TabsContent>

          {/* Weighted Clothing Tab Content */}
          <TabsContent value="clothing" className="focus-visible:outline-none">
            <motion.div {...fadeInUp} className="space-y-12">
              <ProjectCard
                imageSrc="/images/clothing/weightvest.webp"
                imageAlt="Weight vest in studio light with red to black gradient background"
                title={dict.projects["weighted-clothing"].hero.title}
                description={dict.projects["weighted-clothing"].hero.desc}
                href="/projects/clothing"
                buttonText={dict.projects["weighted-clothing"].hero.button}
                imageClassName="object-[50%_18%]"
              />
            </motion.div>
          </TabsContent>

          {/* Social Work Tab Content */}
          <TabsContent value="social" className="focus-visible:outline-none">
            <motion.div {...fadeInUp} className="mx-auto space-y-12">
              <ProjectCard
                imageSrc="https://picsum.photos/id/65/1200/600"
                imageAlt="Social work community gathering"
                title={dict.projects["social-circle"].hero.title}
                description={dict.projects["social-circle"].hero.desc}
                href="/projects/social"
                buttonText={dict.projects["social-circle"].hero.button}
              />
            </motion.div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}
