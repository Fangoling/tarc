import Image from "next/image"
import { Dictionary } from "@/components/prop-types"
import { getDictionary } from "../../dictionaries"

export default async function ResortPage({
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
                    src="/images/clothing/weightvest.webp"
                    alt="weight vest in studio light with red to black gradient background"
                    fill
                    className="object-cover object-[50%_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">
                            {dict.projects["weighted-clothing"].hero.title}
                        </h1>
                        <p className="text-white/90 text-lg">
                            {dict.projects["weighted-clothing"].hero.desc}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mx-auto w-full max-w-4xl">
                <div className="container relative mx-auto px-4 py-12 lg:py-24">
                    <h2>{dict.projects["weighted-clothing"]["section-one"].title}</h2>
                    <p>{dict.projects["weighted-clothing"]["section-one"].text}</p>
                    <h2>{dict.projects["weighted-clothing"]["section-two"].title}</h2>
                    <p>{dict.projects["weighted-clothing"]["section-two"].text}</p>
                    <h2>{dict.projects["weighted-clothing"]["section-three"].title}</h2>
                    <p>{dict.projects["weighted-clothing"]["section-three"].text}</p>
                </div>
            </div>


        </div>
    )
}
