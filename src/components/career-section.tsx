import { IconBriefcase } from '@tabler/icons-react'

import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { careers, type CareerRole } from '@/data/portfolio'

function CareerRoleItem({ role }: { role: CareerRole }) {
  return (
    <div className="space-y-2">
      {(role.name || role.period) && (
        <div className="flex items-center justify-between gap-2">
          {role.name && <span className="text-sm font-medium">{role.name}</span>}
          {role.period && (
            <Badge variant="secondary" className="font-mono font-normal bg-surface-accent">
              {role.period}
            </Badge>
          )}
        </div>
      )}
      <ul className="space-y-1.5 text-sm">
        {role.bullets.map((bullet) => (
          <li key={bullet.text} className="list-disc pl-4">
            {bullet.text}
            {bullet.subItems && (
              <ul className="mt-1.5 space-y-1.5">
                {bullet.subItems.map((subItem) => (
                  <li key={subItem} className="list-[circle] pl-4">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CareerSection() {
  return (
    <section>
      <SectionHeading icon={<IconBriefcase size={22} />} title="Career" />
      <div className="flex flex-col gap-4">
        {careers.map((career) => (
          <Card key={career.company}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2">
                <span>
                  {career.company}
                  {career.employment && (
                    <span className="ml-1 text-sm font-normal">
                      ({career.employment})
                    </span>
                  )}
                </span>
                <Badge variant="secondary" className="font-mono font-normal bg-surface-accent">
                  {career.period}
                </Badge>
              </CardTitle>
              {(career.projectName || career.purpose) && (
                <CardDescription className="space-y-1">
                  {career.projectName && (
                    <p>프로젝트명: {career.projectName}</p>
                  )}
                  {career.purpose && <p>프로젝트 목적: {career.purpose}</p>}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold">{career.rolesLabel}</h3>
                <div className="space-y-4">
                  {career.roles.map((role, index) => (
                    <CareerRoleItem key={role.name ?? index} role={role} />
                  ))}
                </div>
              </div>

              {career.achievements && (
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">주요 성과</h3>
                  <ul className="space-y-1.5 text-sm">
                    {career.achievements.map((achievement) => (
                      <li key={achievement} className="list-disc pl-4">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="text-sm font-semibold">기술스택</h3>
                <div className="flex flex-wrap gap-2">
                  {career.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-content-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
