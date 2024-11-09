import Link from 'next/link'
import * as React from "react"

import { Button } from '@/components/ui/button'

export function UnderConstrucion() {
    return (
        <div className="min-h-[100vh] flex justify-center items-center">
            <div>
                <h2>This page is still under construction</h2>
                <p>We are eagerly working to make this site available to you as early as possible.</p>
                <Button className='mt-4'>
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </div>
    )
}