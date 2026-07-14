import { IconBook2, IconExternalLink } from '@tabler/icons-react'

import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { study } from '@/data/portfolio'

export function StudySection() {
  return (
    <section>
      <SectionHeading icon={<IconBook2 size={22} />} title="Study" />
      <div className="divide-y rounded-xl border">
        {study.map((item) => (
          <div key={`${item.skill}-${item.period}`} className="p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{item.skill}</Badge>
              <span className="font-mono text-xs text-muted-foreground">
                {item.period}
              </span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  링크
                  <IconExternalLink size={12} />
                </a>
              )}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}