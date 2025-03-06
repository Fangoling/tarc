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
                    src="https://picsum.photos/id/65/1200/600"
                    alt="lorem picsum photo"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">
                            {dict.projects["social-circle"].hero.title}
                        </h1>
                        <p className="text-white/90 text-lg">
                            {dict.projects["social-circle"].hero.desc}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}