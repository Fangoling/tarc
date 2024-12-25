import { EmailForm } from "@/components/email-form"
import { AppData } from "@/components/prop-types"
import { getDictionary } from "../dictionaries"

export default async function ContactPage({
    params,
}: {
    params: Promise<{ lang: 'en' | 'de' }>
}) {
    const lang = (await params).lang
    const dict: AppData = await getDictionary(lang)
    return(
        <div>
                <section id="email" className="w-full flex flex-col items-center min-h-[100vh]">
                    <div className="flex flex-col items-center w-full max-w-4xl gap-4 p-12 rounded-xl">
                        <h1>Get in touch</h1>
                        <EmailForm dict={dict}/>
                    </div>
                </section>
        </div>
    )

}