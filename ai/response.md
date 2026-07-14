# 작업 결과 요약

## 1. 기존 설정 확인 결과

"의존성 설치 완료"라고 하셨지만, 확인해보니 **shadcn 관련 패키지와 설정은 실제로는 설치/구성되어 있지 않았습니다.** `package.json`에는 tailwindcss와 `@tabler/icons-react`만 있었고, shadcn이 필요로 하는 패키지(`class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`, `@radix-ui/*`)와 `components.json`, `src/lib/utils.ts`, 경로 별칭(`@/*`) 설정이 전부 빠져 있었습니다.

추가로 다음 버그를 발견해 함께 수정했습니다.

- **`vite.config.ts`**: `tailwindcss()` 플러그인을 호출하면서 정작 `import tailwindcss from '@tailwindcss/vite'`가 없어 `dev`/`build` 실행 시 즉시 에러가 나는 상태였습니다. → import 추가.
- **경로 별칭 미설정**: 루트 `tsconfig.json`에만 `@/*` paths가 있고 실제 앱이 사용하는 `tsconfig.app.json`과 `vite.config.ts`(resolve.alias)에는 없어 `@/` import가 동작하지 않는 상태였습니다. → 양쪽에 추가.
- `tsconfig`의 `baseUrl`은 TypeScript 6에서 deprecated 경고가 발생해 제거하고 `paths`만 사용하도록 정리했습니다(현재 TS 버전에서는 baseUrl 없이도 정상 동작).

### 이번에 새로 설정/설치한 것
- 패키지 설치: `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`, `@radix-ui/react-slot`, `@radix-ui/react-progress`
- `components.json` 생성 (style: new-york, iconLibrary: tabler, baseColor: neutral)
- `src/lib/utils.ts`에 `cn()` 헬퍼 추가
- `src/index.css`를 Tailwind v4 방식(`@theme inline`, CSS 변수 기반 라이트/다크 테마)으로 재작성
- shadcn UI 프리미티브 수동 생성: `button`, `card`, `badge`, `progress` (`src/components/ui/`)
  - CLI(`npx shadcn init`)가 대화형 프롬프트를 강제해 자동화가 불가능했던 관계로, 표준 shadcn 소스 코드를 동일하게 수동 작성했습니다. 이후 `npx shadcn@latest add <component>`로 추가 컴포넌트를 붙이는 것도 정상 동작합니다(components.json 구성 완료).
- 기존 Vite 템플릿 잔재였던 `src/App.css`(미사용 boilerplate 스타일) 삭제

## 2. 생성한 컴포넌트/페이지

README.md 내용(Education / Project / Tech Stack / Study)을 기반으로 구성했습니다.

**`src/data/portfolio.ts`** — README의 데이터를 타입이 지정된 배열로 정리 (education, projects, techStack, study)

**`src/components/`**
- `site-header.tsx` — 상단 히어로 영역 (이름, 소개, GitHub/Contact 버튼)
- `section-heading.tsx` — 섹션 제목 공통 컴포넌트 (tabler 아이콘 + 타이틀)
- `education-section.tsx` — 학력 카드
- `project-section.tsx` — 프로젝트 카드 그리드 (기간 뱃지, 설명, GitHub 링크)
- `tech-stack-section.tsx` — Backend/Frontend/DevOps/Tools 카테고리별 카드, 각 스킬은 Progress 바 + 설명
- `study-section.tsx` — 학습 이력 리스트 (스킬 뱃지, 기간, 링크)
- `ui/` — button, card, badge, progress (shadcn 프리미티브)

**`src/pages/home-page.tsx`** — 위 섹션들을 조립하는 메인 페이지

**`src/App.tsx`** — `HomePage`를 렌더링하도록 교체 (기존에는 빈 `<div>`만 있었음)

## 3. 검증

- `npm run build` (tsc -b && vite build) — 성공
- `npm run lint` (oxlint) — 에러 없음 (shadcn button/badge의 `only-export-components` warning 2건은 shadcn 표준 패턴이라 정상)
- `npm run dev`로 실제 구동 후 headless 브라우저로 렌더링 확인 — 콘솔 에러 없이 전체 섹션 정상 렌더링 확인 (스크린샷으로 레이아웃/카드/프로그레스바/뱃지 정상 표시 확인)

## 4. 참고 / 남은 선택사항

- 아이콘은 tabler(`@tabler/icons-react`)만 사용했고, shadcn 컴포넌트 내부에도 lucide 등 다른 아이콘 라이브러리는 추가하지 않았습니다.
- 다크모드 CSS 변수는 `index.css`에 준비되어 있지만(`.dark` 클래스 기준) 토글 UI는 별도로 만들지 않았습니다. 필요하시면 추가해드릴 수 있습니다.
- README의 삼성청년SW아카데미 워터마크 배너 이미지(`capsule-render.vercel.app`)는 GitHub README 전용 장식이라 실제 웹페이지에는 텍스트 히어로로 대체했습니다.
