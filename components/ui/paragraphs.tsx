import type React from "react"

/**
 * Renders dictionary text that uses `<br/>` markers as separate paragraphs,
 * so the markers are never shown as literal text.
 */
export const Paragraphs: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
    const parts = text
        .split(/<br\s*\/?>/i)
        .map((part) => part.trim())
        .filter(Boolean)

    return (
        <div className={className ?? "flex flex-col gap-4"}>
            {parts.map((part, index) => (
                <p key={index}>{part}</p>
            ))}
        </div>
    )
}
