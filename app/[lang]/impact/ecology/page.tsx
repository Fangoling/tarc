import { Dictionary } from "@/components/prop-types"
import { getDictionary } from "../../dictionaries"
import { UnderConstrucion } from "../../under-construction" 
export default async function EcologyPage({
    params,
}: {
    params: Promise<{ lang: 'en' | 'de' }>
}) {
    const lang = (await params).lang
    const dict: Dictionary = await getDictionary(lang)

    return (
        <div>
            <UnderConstrucion/>
        </div>
    )
}