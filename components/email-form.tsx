"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from 'react-hook-form'
import { sendEmail } from '@/lib/utils/send-email'

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

const formSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    message: z.string()
})

export type FormData = z.infer<typeof formSchema>

export function EmailForm() {

    async function onSubmit(data: FormData) {
        try {
            await sendEmail(data)
            form.reset()
            form.clearErrors()
        } catch(error) {

        }
    }

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    })

    return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-lg flex flex-col items-center gap-8">
                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Max Mustermann" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="mustermann@gmail.com" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Input placeholder="..." {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
    )
}
