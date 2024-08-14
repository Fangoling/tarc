import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function footer() {
    return (
        <>
            <div className="absolute bottom-0 w-full bg-grey flex flex-col items-center pt-2 pb-8 text-xs gap-2">
                <Separator />
                <div className="flex gap-4 text-foreground pt-1">
                    <span className="hover:underline">Status</span>
                    <Separator orientation="vertical" className="h-4"/>
                    <Link href="https://x.com/tarcfitness" target="_blank" className="hover:underline">Twitter</Link>
                    <Separator orientation="vertical" className="h-4"/>
                    <Link href="https://www.instagram.com/tarc.fitness/" target="_blank" className="hover:underline">Instagram</Link>
                    <Separator orientation="vertical" className="h-4"/>
                    <span className="hover:underline">Contact</span>
                    <Separator orientation="vertical" className="h-4"/>
                    <Link href="/Terms" className="hover:underline">Terms</Link>
                </div>
                <div>
                    <p className="text-foreground">Copyright &copy; 2024 Tarc-fitness</p>
                </div>
            </div>
        </>
    )
}