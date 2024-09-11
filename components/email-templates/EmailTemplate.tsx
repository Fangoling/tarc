import React from 'react' 
import {
    Card,
    CardContent
} from '@/components/ui/card'

export interface EmailData {
    subject: string
    recepient: string 
    content: React.ReactNode
}



export function EmailTemplate(data: EmailData) {
    return (
        <div className='flex flex-col justify-center items-center' >
            <div className='items-start m-8'>
                <h3 className='text-xl'>Subject: {data.subject}</h3>
                <h3 className='text-xl'>Sehr geehrter: {data.recepient}</h3>
                <div>
                    {data.content}
                </div>
            </div>
        </div>
    )
}
