import type React from "react"

import type { DictionaryProp } from "./prop-types"

export const Quote: React.FC<DictionaryProp> = ({ dict }) => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center max-w-4xl px-8">
            <div>
                {dict.quote.text}
            </div>
            <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl dark:bg-background">
                <blockquote className="dark:text-white dark:bg-background border-l-4 border-gray-300 pl-4 italic text-gray-700">
                    {dict.quote.quote}
                </blockquote>
                <p className="mt-4 text-right text-sm text-gray-500">— {dict.quote.author}</p>
            </div>
        </div>
    )
}
