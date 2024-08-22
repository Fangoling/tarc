import { z } from "zod"

export const athleteSchema = z.object({
    athlete_id: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    sport: z.string(),
    description: z.string(),
    status: z.string(),
    quality: z.enum(["low","medium","high"]),
    image: z.string().default("default"),
})

export const companySchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    quality: z.string()
})

export type Athlete = z.infer<typeof athleteSchema>
export type Company = z.infer<typeof companySchema>

