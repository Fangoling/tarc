import { z } from "zod"

export const athleteSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    status: z.string(),
    quality: z.string(),
})

export const companySchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    quality: z.string()
})

export type Athlete = z.infer<typeof athleteSchema>
export type Company = z.infer<typeof companySchema>

