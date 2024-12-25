import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="min-h-[100vh] flex justify-center items-center">
            <div>
                <h2>404 Page not found</h2>
                <p>Could not find the page you are looking for</p>
                <Button className='mt-4'>
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </div>
    )
}