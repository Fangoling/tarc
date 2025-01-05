import Image from "next/image"
import { AppData } from "@/components/prop-types"
import { getDictionary } from "../../dictionaries"
import { UnderConstrucion } from "../../under-construction" 
export default async function EcologyPage({
    params,
}: {
    params: Promise<{ lang: 'en' | 'de' }>
}) {
    const lang = (await params).lang
    const dict: AppData = await getDictionary(lang)

    return (
        <div>
            <UnderConstrucion/>
        </div>
    )
}