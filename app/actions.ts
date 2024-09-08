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

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.error(error.code + " " + error.message)
        return encodedRedirect("error", "/sign-in", error.message)
    } else {
        return redirect("/protected") 
    }

}

export const forgotPasswordAction = async (formData: FormData) => {
    const email = formData.get("email")?.toString()
    const supabase = createClient()
    const origin = headers().get("origin")
    const callbackUrl = formData.get("callbackUrl")?.toString()

    if (!email) {
        return encodedRedirect("error", "/forgot-password", "Email is required")
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
    })

    if (error) {
        console.error(error.code + " " + error.message) 
        return encodedRedirect(
            "error",
            "/forgot-password",
            "Could not reset password"
        )
    }
    if (callbackUrl) {
        return redirect(callbackUrl)
    }

    return encodedRedirect(
        "success",
        "/forgot-password",
        "Check your email for a link to reset your password."
    )
}

export const resetPasswordAction = async (formData: FormData) => {
    const supabase = createClient()

    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string

    if (!password || !confirmPassword) {
        return encodedRedirect(
            "error",
            "/protected/reset-password",
            "Password and confirm password are required"
        )
    }

    if (password !== confirmPassword) {
        return encodedRedirect(
            "error",
            "/protected/reset-password",
            "Passwords do not match"
        )
    }

    const { error } = await supabase.auth.updateUser({
        password: password,
    })

    if (error) {
        encodedRedirect(
            "error",
            "/protected/reset-password",
            "update failed"
        )
    }

    encodedRedirect("success", "/protected/reset-password", "Password updated")
}

export const signOutAction = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    return redirect("/sign-in")
}