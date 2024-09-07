"use server"

import { createClient } from "@/lib/utils/supabase/server"
import { encodedRedirect } from "@/lib/utils/utils"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const signUpAction = async (formData: FormData) => {
    const email = formData.get("email")?.toString()
    const password = formData.get("password")?.toString()
    const firstName = formData.get("first-name")?.toString()
    const lastName = formData.get("last-name")?.toString()

    if (!email || !password || !firstName || !lastName ) {
        return { error: "All fields are required"}
    }

    const supabase = createClient()
    const origin = headers().get("origin");

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name: firstName,
                last_name: lastName
            },
            emailRedirectTo: `${origin}/auth/callback`
        }
    })

    if (error) {
        console.error(error.code + " " + error.message)
        return encodedRedirect("error", "/sign-up", error.message)
    } else {
        console.error("success")
        return encodedRedirect(
            "success",
            "/sign-up",
            "Thanks for signing up. Check your email to verify your account."
        )
    }
}

export const signInAction = async (formData: FormData) => {
    const email = formData.get("email") as string
    const password = formData.get("password") as string 
    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
        email,
        password,
    })

    if (error) {
        console.error(error.code + " " + error.message)
        return encodedRedirect("error", "/sign-up", error.message)
    } else {
        return redirect("/protected") 
    }

}