import { IconStack2 } from '@tabler/icons-react'

import { SectionHeading } from '@/components/section-heading'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { techStack } from '@/data/portfolio'

export function TechStackSection() {
  return (
    <section>
      <SectionHeading icon={<IconStack2 size={22} />} title="Tech Stack" />
      <div className="grid gap-4 sm:grid-cols-2">
        {techStack.map((category) => (
          <Card key={category.key}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="bg-white"/>
                  {skill.description && (
                    <p className="text-xs">
                      {skill.description}
                    </p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
