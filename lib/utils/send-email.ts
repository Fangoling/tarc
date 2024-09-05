import { FormData } from "@/components/email-form"; 

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email'

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/PlaneIcon, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {

    })

}