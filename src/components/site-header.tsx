import {IconBrandGithub} from '@tabler/icons-react'

import {Button} from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className="border-b from-primary/5 to-transparent">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          최민준
        </h1>
        <div className="max-w-xl space-y-3">
          <p>
            보험·금융권 시스템 운영 및 개발 경험을 바탕으로 안정적이고
            견고한 시스템을 구축하는 백엔드 개발자입니다. Java와 Spring 기반
            DevOn Framework를 활용한 시스템 개발·운영 경험을 보유하고 있습니다.
          </p>
          <p>
            오래되었거나 불편한 것을 그냥 지나치지 못하는 성향 덕분에,
            반복적인 수작업을 자동화하는 SQL 생성 도구를 직접 만드는 등
            업무 요구사항을 빠르게 파악해 실용적인 해결책을 제시하는 것을
            좋아합니다. 배치 결산 시스템을 운영하며 데이터 정확성과
            안정성을 최우선 가치로 삼고, 문제의 근본 원인을 분석해 시스템을
            개선하는 데 집중해 왔습니다.
          </p>
          <p>
            레거시 환경에 대한 이해와 최신 기술 트렌드 학습을 균형 있게
            이어가며, 꼼꼼한 업무 성향으로 코드 품질과 문서화에도 높은
            가치를 둡니다.
          </p>
        </div>
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
        </div>
      </div>
    </header>
  )
}
