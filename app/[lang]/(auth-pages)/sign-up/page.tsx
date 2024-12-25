import Link from "next/link"

import { signUpAction } from "@/app/[lang]/actions"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormMessageParam, Message } from "@/components/ui/form"

// this is the shadcn ui signup block
export default function SignupPage({ searchParams }:{ searchParams: Message}) {
    if ("message" in searchParams) {
        return(
            <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
                <FormMessageParam message={ searchParams }/>
            </div>
        )
    }

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" name="first-name" placeholder="Max" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" name="last-name" placeholder="Mustermann" required />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" name="password"/>
                        </div>
                        <Button type="submit" className="w-full" formAction={signUpAction}>
                            Create an account
                        </Button>
                        <Button variant="outline" className="w-full">
                            Sign up with with another Service
                        </Button>
                        <FormMessageParam message={searchParams}/>
                    </div>
                </form>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
