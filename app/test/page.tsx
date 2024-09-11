import { EmailTemplate, EmailData } from "@/components/email-templates/EmailTemplate"
import {
    Separator
} from "@/components/ui/separator"

export default function TestPage() {

    return (
        <div>
            <EmailTemplate
                subject="wow"
                recepient="max"
                content={<Content/>}
            />
        </div>
    )

}

function Content() {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum dignissimos voluptate. Saepe sunt quae dolor et! Non tenetur sapiente labore nobis necessitatibus mollitia earum porro? Repellendus, libero. Iusto, nulla!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum dignissimos voluptate. Saepe sunt quae dolor et! Non tenetur sapiente labore nobis necessitatibus mollitia earum porro? Repellendus, libero. Iusto, nulla!
            </p>
            <Separator/>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2" >
                <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati doloremque, amet, nostrum aut nobis eum minus, maxime officia atque natus fuga dicta quisquam rerum iusto velit praesentium optio iure.
                </li>
                <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati doloremque, amet, nostrum aut nobis eum minus, maxime officia atque natus fuga dicta quisquam rerum iusto velit praesentium optio iure.
                </li>
            </ul>

        </div>
    )
}