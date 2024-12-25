import { createClient } from "@/lib/utils/supabase/server"
import { signOutAction } from "@/app/[lang]/actions"
import { redirect } from "next/navigation"

import { Button } from "@/components/ui/button"

export default async function LoginSuccessPage() {
    const supabase = createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect("/sign-in")
    }


    return (
        <div className="flex items-center justify-center mx-4">
            <div className="flex flex-col gap-4 items-center">
                <h1>You can only access this page if you are logged in.</h1>

                <h2>Hi. Here are your user details</h2>
                <div>
                    <p>
                        email: {user.user_metadata.email}
                        <br />first name: {user.user_metadata.first_name}
                        <br />last name: {user.user_metadata.last_name}
                    </p>
                </div>
                <form>
                    <Button className="max-w-[180px]" formAction={signOutAction}>
                        Sign Out
                    </Button>
                </form>
            </div>
        </div>
    )
}