"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

import { sendEmail } from "@/lib/utils/send-email"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DictionaryProp } from "./prop-types"

const formSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    message: z.string(),
    phone: z.string(),
    address: z.string()
})

export type FormData = z.infer<typeof formSchema>

type FormStatus = "idle" | "submitting" | "success" | "error"

interface FormFeedback {
    status: FormStatus
    message: string
}

export const EmailForm: React.FC<DictionaryProp> = ({ dict }) => {
    const [feedback, setFeedback] = useState<FormFeedback>({
        status: "idle",
        message: ""
    })

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            phone: "",
            address: ""
        },
    })

    const { isSubmitting } = form.formState

    async function onSubmit(data: FormData) {
        setFeedback({ status: "submitting", message: "" })

        try {
            await sendEmail(data)
            form.reset()
            form.clearErrors()
            setFeedback({
                status: "success",
                message: "Your message has been sent successfully. We'll get back to you soon!"
            })

            // Auto-dismiss success message after 5 seconds
            setTimeout(() => {
                setFeedback({ status: "idle", message: "" })
            }, 5000)
        } catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : "Something went wrong. Please try again later."

            setFeedback({
                status: "error",
                message: errorMessage
            })
        }
    }

    const isDisabled = isSubmitting || feedback.status === "submitting"

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-lg flex flex-col items-center gap-8"
            >
                {/* Feedback Message */}
                {feedback.status !== "idle" && feedback.status !== "submitting" && (
                    <div
                        role="alert"
                        aria-live="polite"
                        className={cn(
                            "w-full flex items-start gap-3 p-4 rounded-lg border transition-all duration-300 ease-in-out",
                            feedback.status === "success" && "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200",
                            feedback.status === "error" && "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
                        )}
                    >
                        {feedback.status === "success" ? (
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
                        ) : (
                            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
                        )}
                        <p className="text-sm font-medium">{feedback.message}</p>
                    </div>
                )}

                <fieldset disabled={isDisabled} className="w-full space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{dict.contact.name}</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        aria-describedby="name-error"
                                        className="transition-opacity duration-200"
                                    />
                                </FormControl>
                                <FormMessage id="name-error" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{dict.contact.email}</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
                                        aria-describedby="email-error"
                                        className="transition-opacity duration-200"
                                    />
                                </FormControl>
                                <FormMessage id="email-error" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{dict.contact.message}</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        aria-describedby="message-error"
                                        className="transition-opacity duration-200"
                                    />
                                </FormControl>
                                <FormMessage id="message-error" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{dict.contact.phone}</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="tel"
                                        aria-describedby="phone-error"
                                        className="transition-opacity duration-200"
                                    />
                                </FormControl>
                                <FormMessage id="phone-error" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{dict.contact.address}</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        aria-describedby="address-error"
                                        className="transition-opacity duration-200"
                                    />
                                </FormControl>
                                <FormMessage id="address-error" />
                            </FormItem>
                        )}
                    />
                </fieldset>

                <Button
                    type="submit"
                    disabled={isDisabled}
                    className={cn(
                        "bg-primary rounded-2xl min-w-[120px] transition-all duration-200",
                        isDisabled && "cursor-not-allowed"
                    )}
                    aria-busy={isDisabled}
                >
                    {isDisabled ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <span>Submit</span>
                    )}
                </Button>
            </form>
        </Form>
    )
}
