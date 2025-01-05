import Image from "next/image"
import { AppData } from "@/components/prop-types"
import { getDictionary } from "../../dictionaries"

export default async function ResortPage({
    params,
}: {
    params: Promise<{ lang: 'en' | 'de' }>
}) {
    const lang = (await params).lang
    const dict: AppData = await getDictionary(lang)

    return (
        <div>
            <div className="relative h-[60vh] max-h-[400px] overflow-hidden">
                <Image
                    src="/images/partnering/shakingHands.jpg"
                    alt="Madeira resort view"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">
                            {dict.projects["partnering-program"].hero.title}
                        </h1>
                        <p className="text-white/90 text-lg">
                            {dict.projects["partnering-program"].hero.desc}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mx-auto w-full max-w-4xl">

                <div className="container relative mx-auto px-4 py-12 lg:py-24">
                    <p dangerouslySetInnerHTML={{__html: dict.partnering.introduction}}/>
                    <h2>Sport Marketing</h2>
                    <p>{dict.partnering.marketing}</p>
                    <h2>Vision</h2>
                    <p>{dict.partnering.vision}</p>
                    <h2>{dict.partnering.what}</h2>
                    <ul className="my-6 ml-6 list-decimal [&>li]:mt-2 marker:text-2xl">
                        {dict.partnering.whatlist.map((elem, i) => (
                            <li key={i}>
                                <h3>{elem[0]}</h3>
                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                {elem.slice(1).map((e, j) => (<li key={j}>{e}</li>) )}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <h2>{dict.partnering.why}</h2>
                    <ul className="my-6 ml-6 list-decimal [&>li]:mt-2 marker:text-2xl">
                        {dict.partnering.whylist.map((elem, i) => (
                            <li key={i}>
                                <h3>{elem[0]}</h3>
                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                {elem.slice(1).map((e, j) => (<li key={j}>{e}</li>) )}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <h2>{dict.partnering.who}</h2>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2 marker:text-2xl">
                        {dict.partnering.wholist.map((elem, i) => (
                            <li key={i}>
                                <p>{elem[0]}</p>
                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2 marker:text-sm">
                                {elem.slice(1).map((e, j) => (<li key={j}>{e}</li>) )}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>
    )
}