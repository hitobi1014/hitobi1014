import { IconExternalLink, IconFolderCode } from '@tabler/icons-react'

import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { projects } from '@/data/portfolio'

export function ProjectSection() {
  return (
    <section>
      <SectionHeading icon={<IconFolderCode size={22} />} title="Project (사이드 프로젝트)" />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} >
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2 ">
                <span>{project.name}</span>
                <Badge variant="secondary" className="font-mono font-normal bg-surface-accent">
                  {project.period}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-content-secondary hover:underline"
                  >
                    {link.label}
                    <IconExternalLink size={14} />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
