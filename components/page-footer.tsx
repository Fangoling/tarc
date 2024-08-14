import { Separator } from "@/components/ui/separator"

export default function footer() {
    return (
        <>
            <div className="absolute bottom-0 w-full bg-grey flex flex-col items-center pt-2 pb-8 text-xs gap-2">
                <Separator />
                <div className="flex gap-4 text-foreground pt-1">
                    <a className="hover:underline">Status</a>
                    <Separator orientation="vertical" className="h-4"/>
                    <a className="hover:underline">Twitter</a>
                    <Separator orientation="vertical" className="h-4"/>
                    <a className="hover:underline">Instagram</a>
                    <Separator orientation="vertical" className="h-4"/>
                    <a className="hover:underline">Contact</a>
                    <Separator orientation="vertical" className="h-4"/>
                    <a className="hover:underline">Privacy</a>
                    <Separator orientation="vertical" className="h-4"/>
                    <a className="hover:underline">Terms</a>
                </div>
                <div>
                    <p className="text-foreground">Copyright &copy; 2024 Tarc-fitness</p>
                </div>
            </div>
        </>
    )
}