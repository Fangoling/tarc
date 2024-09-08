import { createClient } from "@/lib/utils/supabase/client"

export default function LoginSuccess() {

    return (
        <div className="flex items-start justify-center mx-4">
            <h1>You can only access this page if you are logged in. Congrats.</h1>
        </div>
    )
}