import Image from "next/image"
import Link from "next/link"
import { Dictionary } from "@/components/prop-types"
import { getDictionary } from "../dictionaries"
import { Button } from "@/components/ui/button"
export default async function ImpactPage({
    params,
}: {
    params: Promise<{ lang: 'en' | 'de' }>
}) {
    const lang = (await params).lang
    const dict: Dictionary = await getDictionary(lang)

    return (
        <div>
            <div className="relative h-[60vh] max-h-[400px] overflow-hidden">
                <Image
                    src="/images/impact/earth.jpg"
                    alt="Earth picture"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">
                            {dict.impact.impact.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mx-auto w-full max-w-4xl">

                <div className="container relative mx-auto px-4 py-12 lg:py-24">
                    <p dangerouslySetInnerHTML={{__html: dict.impact.impact.text}}/>
                </div>


                <div className="container relative mx-auto px-4 py-12 lg:py-24">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="lg:order-2">
                            <h2>{dict.impact.humanity.title}</h2>
                            <p dangerouslySetInnerHTML={{__html: dict.impact.humanity.text}}/>
                            <Button variant="outline" className="mt-4 text-xl p-6" asChild>
                                <Link href="/impact/sociology">
                                    {dict.impact.button}
                                </Link>
                            </Button>
                        </div>
                        <div className="relative h-[400px] w-full md:h-[500px] lg:order-1">
                            <div>
                                <Image
                                    src="/images/impact/network.jpg"
                                    alt="connected earth"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-12 -left-16 h-36 w-48 md:h-48 md:w-64">
                                <div className="relative h-full w-full overflow-hidden">
                                    <Image
                                        src="/images/impact/asia.jpg"
                                        alt="two asian historical creatures fighting"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="container relative mx-auto px-4 py-12 lg:py-24">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                        <div>

                            <h2>{dict.impact.planet.title}</h2>
                            <p dangerouslySetInnerHTML={{__html: dict.impact.planet.text}}/>
                        </div>

                        <div className="relative h-[400px] w-full md:h-[500px]">
                            <div>
                                <Image
                                    src="/images/impact/elephant.jpg"
                                    alt="elephant standing in a forest"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-12 -right-16 h-36 w-48 md:h-48 md:w-64">
                                <div className="relative h-full w-full overflow-hidden">
                                    <Image
                                        src="/images/impact/trees.jpg"
                                        alt="two trees with sunlight shining through"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}