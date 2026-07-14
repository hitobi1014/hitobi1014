import {IconSchool} from '@tabler/icons-react'

import {SectionHeading} from '@/components/section-heading'
import {Card, CardContent} from '@/components/ui/card'
import {education} from '@/data/portfolio'
import {Fragment} from "react"

export function EducationSection() {
  return (
    <section>
      <SectionHeading icon={<IconSchool size={22} />} title="Education" />
      <Card>
        <CardContent className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3">
          {education.map((item) => (
            <Fragment key={item.title}>
              <span className="shrink-0 text-sm font-mono">
                {item.period}
              </span>
              <span className="text-sm">{item.title}</span>
            </Fragment>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
