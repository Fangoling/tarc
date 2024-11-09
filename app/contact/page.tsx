import { EmailForm } from "@/components/email-form"

export default function ContactPage() {
    return(
        <div>
                <section id="email" className="w-full flex flex-col items-center">
                    <div className="flex flex-col items-center w-full max-w-4xl gap-4 p-12 rounded-xl">
                        <h1>Get in touch</h1>
                        <EmailForm />
                    </div>
                </section>
        </div>
    )

}