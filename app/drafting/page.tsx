import { promises as fs } from "fs"
import path from "path"
import { z } from "zod"

import { createClient } from "@/lib/supabase/server"

import { athleteColumns } from "@/app/drafting/components/column"
import { DataTable } from "@/app/drafting/components/data-table"
import { athleteSchema } from "@/app/drafting/data/schema"


/*
// Simulate a database read for athletes.
async function getAthletes() {
    const data = await fs.readFile(
        path.join(process.cwd(), "app/drafting/data/athletes.json")
    )

    const athletes = JSON.parse(data.toString())

    return z.array(athleteSchema).parse(athletes)
}
*/

async function getAthletes() {
    const supabase = createClient()
    const { data: athletes } = await supabase
        .from("athletes")
        .select()
    return z.array(athleteSchema).parse(athletes)
}

export default async function AthletePage() {
    const athletes = await getAthletes()

    return (
        <>
            <div className="h-full flex-1 flex-col space-y-8 p-8"> 
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of all athletes
                        </p>
                    </div>
                </div>
                <DataTable data={athletes} columns={athleteColumns} />
            </div>
        </>
    )
}

