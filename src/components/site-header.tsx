import { IconBrandGithub, IconMail } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className="border-b bg-gradient-to-b from-primary/5 to-transparent">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 px-6 py-16">
        <p className="text-sm font-medium text-muted-foreground">Welcome!</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          hitobi1014
        </h1>
        <p className="max-w-xl text-muted-foreground">
          백엔드를 중심으로 프론트엔드까지 아우르는 개발자입니다. 유지보수성과
          확장성을 고려한 코드를 지향합니다.
        </p>
        <div className="flex gap-3 pt-2">
          <Button asChild>
            <a
              href="https://github.com/hitobi1014"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandGithub />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:hitobi1014@gmail.com">
              <IconMail />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}