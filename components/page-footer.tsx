import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Footer() {
    return (
        <>
            <div className="mt-auto w-full bg-grey flex flex-col items-center pt-8 pb-8 text-xs gap-2">
                <div className="flex gap-4 text-foreground pt-1">
                    <Link href="https://x.com/tarcfitness" target="_blank" className="hover:underline">Twitter</Link>
                    <Separator orientation="vertical" className="h-4"/>
                    <Link href="https://www.instagram.com/tarc.fitness/" target="_blank" className="hover:underline">Instagram</Link>
                    <Separator orientation="vertical" className="h-4"/>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                    <Separator orientation="vertical" className="h-4"/>
                    <Link href="/terms" className="hover:underline">Terms</Link>
                    <Separator orientation="vertical" className="h-4"/>
                    <Link href="/impressum" className="hover:underline">Impressum</Link>
                </div>
                <div>
                    <p className="text-foreground">Copyright &copy; 2024 Tarc-fitness</p>
                </div>
            </div>
        </>
    )
}