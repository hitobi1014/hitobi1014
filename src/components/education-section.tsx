import { IconSchool } from '@tabler/icons-react'

import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { education } from '@/data/portfolio'

export function EducationSection() {
  return (
    <section>
      <SectionHeading icon={<IconSchool size={22} />} title="Education" />
      <Card>
        <CardContent className="space-y-3">
          {education.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4"
            >
              <span className="shrink-0 text-sm font-mono text-muted-foreground">
                {item.period}
              </span>
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}