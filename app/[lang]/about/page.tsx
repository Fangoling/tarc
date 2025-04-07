import { Dictionary } from "@/components/prop-types"
import { getDictionary } from "../dictionaries"

export default async function AboutPage({
    params,
}: {
    params: Promise<{ lang: 'en' | 'de' }>
}) {
    const lang = (await params).lang
    const dict: Dictionary = await getDictionary(lang)

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="text-4xl font-thin">
                    <span className="animate-fade-in -translate-y-4 opacity-0 [--animation-delay:200ms]">
                        {dict.about.title.part1}
                    </span>
                    <span className="animate-fade-in -translate-y-4 opacity-0 [--animation-delay:800ms]">
                        {dict.about.title.part2}
                    </span>
                    <span className="animate-fade-in -translate-y-4 opacity-0 [--animation-delay:1600ms]">
                        {dict.about.title.part3}
                    </span>
                </div>
            </div>
            <div className="flex justify-center max-w-full pb-12">
                <div className="flex flex-col items-center max-w-4xl gap-12">
                    <div>
                        <h2>
                            {dict.about.principle.title}
                        </h2>
                        <p>
                            {dict.about.principle.text}
                        </p>
                    </div>

                    <div>
                        <h2>
                            {dict.about.philosophy.title}
                        </h2>
                        <p>
                            {dict.about.philosophy.text}
                        </p>
                    </div>

                    <div>
                        <h2>
                            {dict.about.vision.title}
                        </h2>
                        <p>
                            {dict.about.vision.text}
                        </p>
                    </div>

                    <div>
                        <h2>
                            {dict.about.criticism.title}
                        </h2>
                        <p>
                            {dict.about.criticism.text}
                        </p>
                    </div>

                    <div>
                        <h2>
                            {dict.about.call.title}
                        </h2>
                        <p>
                            {dict.about.call.text}
                        </p>
                    </div>

                </div>

            </div>


        </div>
    )
}

