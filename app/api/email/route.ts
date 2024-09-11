import { NextRequest, NextResponse } from "next/server";

const USER = process.env.EMAIL_USER
const PASSWORD = process.env.EMAIL_PASSWORD

export async function POST(req: NextRequest){

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.zoho.eu",
        auth: {
            user: USER,
            pass: PASSWORD
        },
        secure: true
    })

    try {
        const body = await req.json()
        if (!body || !body.name || !body.email || !body.message) {
            return NextResponse.json(
                {error: 'Name, message and email are required'},
                {status: 400}
            )
        }
        const mailData = {
            from: USER,
            to: 'info@tarc-fitness.de',
            subject: `Message from ${body.name} via tarc-fitness.com`,
            text: `Email: ${body.email}\nMessage: ${body.message}` 
        }
        const info = await transporter.sendMail(mailData)
        return NextResponse.json(
            {message: 'Email sent successfully'},
            {status: 200}
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {message: 'Internal server error when sending email'},
            {status: 500}
        )
    }
}