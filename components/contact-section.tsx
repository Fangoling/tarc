import * as React from "react"

import { PhoneIcon, MapPinIcon, MailIcon, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { DictionaryProp } from "@/components/prop-types"

export interface ContactItem {
  key: string
  icon: LucideIcon
  text: string
}

export interface ContactSectionProps extends DictionaryProp {
  /** Override the default contact items */
  items?: ContactItem[]
  /** Additional CSS classes for the section */
  className?: string
}

const defaultContactItems: ContactItem[] = [
  { key: 'phone', icon: PhoneIcon, text: '+49 201 72994195' },
  { key: 'location', icon: MapPinIcon, text: 'Diechmannplatz 1, 45355 Essen, DE' },
  { key: 'mail', icon: MailIcon, text: 'info@tarc-fitness.de' },
]

export const ContactSection: React.FC<ContactSectionProps> = ({
  dict,
  items = defaultContactItems,
  className,
}) => {
  return (
    <section
      id="contact"
      className={cn(
        "w-full flex flex-col items-center",
        className
      )}
    >
      <div className="flex flex-col items-center w-full max-w-4xl gap-8 p-12 rounded-xl">
        <h1 className="animate-fade-in opacity-0 [--animation-delay:200ms]">
          {dict.con}
        </h1>
        <div className="mx-auto px-4 flex flex-col items-center md:flex-row gap-8 w-full">
          {items.map(({ key, icon: Icon, text }, index) => (
            <Card
              key={key}
              className={cn(
                "w-full max-w-lg min-h-[180px]",
                "transition-all duration-300 ease-out",
                "hover:shadow-lg hover:-translate-y-1 hover:border-primary/50",
                "animate-fade-in opacity-0",
                "group"
              )}
              style={{
                animationDelay: `${300 + index * 100}ms`,
              }}
            >
              <CardHeader className="flex justify-center items-center">
                <div className="text-primary text-4xl transition-transform duration-300 group-hover:scale-110">
                  <Icon size={48} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
