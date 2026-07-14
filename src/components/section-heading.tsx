import type { ReactNode } from 'react'

export function SectionHeading({
  icon,
  title,
}: {
  icon: ReactNode
  title: string
}) {
  return (
    <div className="mb-6 flex items-center gap-2">
      <span className="text-primary">{icon}</span>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  )
}