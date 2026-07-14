import { EducationSection } from '@/components/education-section'
import { ProjectSection } from '@/components/project-section'
import { SiteHeader } from '@/components/site-header'
import { StudySection } from '@/components/study-section'
import { TechStackSection } from '@/components/tech-stack-section'

export function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto flex max-w-4xl flex-col gap-14 px-6 py-16">
        <EducationSection />
        <ProjectSection />
        <TechStackSection />
        <StudySection />
      </main>
    </div>
  )
}