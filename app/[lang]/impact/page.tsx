import Image from "next/image"
import { AppData } from "@/components/prop-types"
import { getDictionary } from "../dictionaries"

export default async function ImpactPage({
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
                    src="/images/earth-banner.jpeg"
                    alt="Madeira resort view"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">
                            Impact
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mx-auto w-full max-w-4xl">

                <div className="container relative mx-auto px-4 py-12 lg:py-24">
                    <p>
                        Tarc steht nicht nur für die persönliche Entwicklung hin zu einem gesünderen Körper und Geist, sondern auch für ein größeres Ziel: die Schaffung einer ökologisch und soziologisch gesünderen Welt.
                        <br /><br />
                        Wir bei Tarc sind überzeugt, dass nur gesunde und bewusste Menschen die Grundlage für eine nachhaltige, gerechte und lebenswerte Zukunft bilden können. Denn wir glauben: Wer im Einklang mit sich selbst lebt, ist auch in der Lage, nachhaltig und respektvoll mit der Welt umzugehen. Gemeinsam schaffen wir die Basis für eine gesündere, harmonische Zukunft für alle.
                    </p>
                </div>


                <div className="container relative mx-auto px-4 py-12 lg:py-24">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
                        <div className="relative h-[400px] w-full md:h-[500px]">
                            <div>
                                <Image
                                    src="/images/impact-4.jpg"
                                    alt="woman looking at flowers"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-12 -left-16 h-36 w-48 md:h-48 md:w-64">
                                <div className="relative h-full w-full overflow-hidden">
                                    <Image
                                        src="/images/impact-2.jpg"
                                        alt="top down look on forest"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                        </div>
                        <div>
                            <h2>Menschheit</h2>
                            <p>
                                Die voranschreitende Globalisierung bringt kulturelle Vielfalt, führt jedoch auch zu soziologischen Problemen. Die Kollision von Kulturen kann soziale Spannungen und Konflikte auslösen. Missverständnisse und Vorurteile tragen dazu bei, ebenso wie der Verlust ganzer Kulturen durch dominante globale Strömungen. Oft werden traditionelle Kulturen verdrängt, was Identitätskrisen zur Folge haben kann. Gleichzeitig verstärkt wirtschaftliche Ungleichheit soziale Konflikte.
                                <br /><br />
                                Wir wollen die voranschreitende Globalisierung besser organisieren, damit jede Kultur so viel Raum wie möglich hat, um sich zu entfalten und zu entwickeln. Gut gemeinte Hilfe kann ohne klare Struktur und Organisation manchmal unbeabsichtigt mehr schaden als nutzen. Deshalb setzen wir auf durchdachte Ansätze, die nachhaltig wirken und den Bedürfnissen aller gerecht werden. Dieses Ziel erfordert Respekt, Dialog und Maßnahmen für soziale Gerechtigkeit.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="container relative mx-auto px-4 py-12 lg:py-24">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        <div>

                            <h2>Planet Erde</h2>
                            <p>
                                Trotz immer besserem Verständnis über das Klima und die damit einhergehende Entwicklung unseres Planeten ist die ökologische Situation der aktuellen Zeit schwieriger denn je. Die Erde ist die Grundlage für alles Leben, das wir kennen, egal ob Menschen, Tiere oder Pflanzen. Umweltverschmutzung, der Verlust natürlicher Lebensräume und die fehlende Balance zwischen menschlicher Zivilisation und der Natur bedrohen diese Grundlage zunehmend.
                                <br /><br />
                                Wir setzen uns für bessere Aufklärung und präzisere Maßnahmen gegen Umweltverschmutzung ein, denn nur durch ein fundiertes Verständnis können nachhaltige Veränderungen erzielt werden. Unser Ziel ist es, unberührte Natur zu bewahren und gleichzeitig eine harmonische Verbindung zwischen menschlicher Zivilisation und der Umwelt zu fördern. Mit gezielten Projekten und Bildungsinitiativen wollen wir das Bewusstsein für die Bedeutung einer intakten Umwelt stärken und konkrete Lösungen für eine nachhaltige Entwicklung vorantreiben.
                            </p>
                        </div>

                        <div className="relative h-[400px] w-full md:h-[500px]">
                            <div>
                                <Image
                                    src="/images/impact-3.jpg"
                                    alt="woman looking at flowers"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-12 -right-16 h-36 w-48 md:h-48 md:w-64">
                                <div className="relative h-full w-full overflow-hidden">
                                    <Image
                                        src="/images/impact-1.jpg"
                                        alt="top down look on forest"
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