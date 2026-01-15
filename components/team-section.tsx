import * as React from "react"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface TeamMember {
  key: string
  name: string
  title: string
}

export interface TeamSectionProps {
  /** Section title - defaults to "Team" */
  title?: string
  /** Array of team members to display */
  members?: TeamMember[]
  /** Additional CSS classes for the section */
  className?: string
}

const defaultTeamMembers: TeamMember[] = [
  { key: 'team_1', name: 'Finn Untiedt', title: 'Founder & CEO' },
  { key: 'team_2', name: 'Manuel Schmitz', title: 'Lead Designer & Creative Director' },
  { key: 'team_3', name: 'Fangxing Liu', title: 'IT Lead & Software Engineer' },
]

export const TeamSection: React.FC<TeamSectionProps> = ({
  title = "Team",
  members = defaultTeamMembers,
  className,
}) => {
  return (
    <section
      id="team"
      className={cn(
        "w-full flex flex-col items-center",
        className
      )}
    >
      <div className="flex flex-col items-center w-full max-w-4xl gap-8 p-8 rounded-xl">
        <h1 className="animate-fade-in opacity-0 [--animation-delay:200ms]">
          {title}
        </h1>
        <div className="mx-auto px-4 flex flex-col md:flex-row gap-8 w-full">
          {members.map(({ key, name, title: memberTitle }, index) => (
            <Card
              key={key}
              className={cn(
                "w-full max-w-lg",
                "transition-all duration-300 ease-out",
                "hover:shadow-lg hover:-translate-y-1 hover:border-primary/50",
                "animate-fade-in opacity-0",
              )}
              style={{
                animationDelay: `${300 + index * 100}ms`,
              }}
            >
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg md:text-xl">
                  {name}
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  {memberTitle}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
