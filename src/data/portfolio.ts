export interface EducationItem {
  period: string
  title: string
}

export const education: EducationItem[] = [
  { period: '2023.07.05 ~ 2024.06.25', title: '삼성청년SW아카데미 수료' },
  {
    period: '2024.04',
    title: '삼성청년SW아카데미 특화 프로젝트 우수상 (2위)',
  },
]

export interface ProjectItem {
  period: string
  name: string
  description: string
  links: { label: string; url: string }[]
}

export const projects: ProjectItem[] = [
  {
    period: '2025.03.20 ~ 진행중',
    name: '러너스하이',
    description: '러너를 위한 훈련관리 웹앱 서비스 (Kotlin & React)',
    links: [
      { label: 'BE', url: 'https://github.com/hitobi1014/runners-high' },
      { label: 'FE', url: 'https://github.com/hitobi1014/runners-high-fe' },
    ],
  },
  {
    period: '2024.04.08 ~ 2024.05.17',
    name: '와플 (What is your plan?)',
    description:
      '개인의 과거 기록과 미래의 약속을 공유하는 웹 서비스 (개인형 일정 대시보드)',
    links: [
      { label: 'GitHub', url: 'https://github.com/What-s-Your-Plan' },
    ],
  },
  {
    period: '2024.02.19 ~ 2024.04.04',
    name: '문득',
    description:
      '산책 안에서 소소한 위로, 작은 행복, 긍정적 감정을 발견해 건강한 삶을 되찾기 위한 서비스',
    links: [{ label: 'GitHub', url: 'https://github.com/hitobi1014/md8' }],
  },
  {
    period: '2024.01.02 ~ 2024.02.16',
    name: 'Prog',
    description: '프로그래머가 되고싶은 사람들을 위한 프로젝트 모집 & 관리 서비스',
    links: [{ label: 'GitHub', url: 'https://github.com/hitobi1014/Prog' }],
  },
]

export interface SkillItem {
  name: string
  level: number
  description?: string
}

export interface SkillCategory {
  key: string
  title: string
  skills: SkillItem[]
}

export const techStack: SkillCategory[] = [
  {
    key: 'backend',
    title: 'Backend',
    skills: [
      {
        name: 'Java',
        level: 80,
        description: 'OOP 이해와 유지보수성이 높고 확장 가능한 코드 작성',
      },
      {
        name: 'Spring',
        level: 70,
        description:
          'Spring 프레임워크에 대한 이해와 흐름, AOP/Filter/Interceptor 활용, RESTful API 개발',
      },
      {
        name: 'JPA',
        level: 70,
        description:
          'Spring JPA 및 Querydsl을 활용한 데이터 핸들링, ORM을 활용한 DB 설계',
      },
      {
        name: 'Spring Security',
        level: 40,
        description: '기본적인 인증 및 프로세스 이해',
      },
      {
        name: 'Thymeleaf',
        level: 40,
        description: '태그 사용과 문서를 참고하여 프로젝트에 사용할 수 있음',
      },
      {
        name: 'Kotlin',
        level: 50,
        description: '코틀린 문법 이해와 소규모 프로젝트 진행 가능',
      },
    ],
  },
  {
    key: 'frontend',
    title: 'Frontend',
    skills: [
      {
        name: 'JavaScript',
        level: 70,
        description:
          'ES 문법 이해와 class/Optional Chaining 활용, 비동기 통신을 통한 데이터 처리',
      },
      {
        name: 'TypeScript',
        level: 60,
        description:
          '데이터 타입 이해와 인터페이스 설계, 타입 단언/가드 기초 활용',
      },
      {
        name: 'React',
        level: 60,
        description:
          'React 컴포넌트와 Hooks 이해, React Router 사용, 상태 관리 및 SPA 구조 설계',
      },
    ],
  },
  {
    key: 'devops',
    title: 'DevOps',
    skills: [
      { name: 'MySQL', level: 50 },
      { name: 'Postgres', level: 50 },
      { name: 'Docker', level: 30 },
      { name: 'Apache Kafka', level: 30 },
      { name: 'GitHub', level: 60 },
    ],
  },
  {
    key: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Notion', level: 80 },
      { name: 'IntelliJ IDEA', level: 80 },
      { name: 'WebStorm', level: 70 },
      { name: 'Jira', level: 50 },
    ],
  },
]

export interface StudyItem {
  period: string
  skill: string
  description: string
  link?: string
}

export const study: StudyItem[] = [
  {
    period: '2025.03.26 ~ 2025.04.01',
    skill: 'Spring Security',
    description: '스프링 시큐리티 인 액션 도서 학습',
  },
  {
    period: '2025.03.20 ~ 2025.03.26',
    skill: 'Spring JPA',
    description: '자바 ORM 표준 JPA 프로그래밍 도서 복습',
  },
  {
    period: '2025.03.14 ~ 2025.03.19',
    skill: '개발 철학',
    description: '실용주의 프로그래머 도서',
  },
  {
    period: '2024.10.29 ~ 2024.11.07',
    skill: 'Kotlin',
    description: 'Kotlin 문법과 구조 파악, 내용 정리',
    link: 'https://github.com/mj-study/Kotlin/tree/main/basic',
  },
  {
    period: '2024.10.24 ~ 2024.11.05',
    skill: 'React',
    description:
      'React 트위터 클론 코딩 - CRA 활용, SCSS 사용, FireStore를 활용한 알림 및 로직 설계, vercel 배포',
    link: 'https://github.com/mj-study/react-pjt/tree/main/twitter',
  },
  {
    period: '2024.10.23 ~ 2024.10.28',
    skill: 'NestJS',
    description:
      'NestJS 기초 학습 - Nest 구조와 로직 흐름 이해, Module/Provider 생성, RESTful API 구현',
    link: 'https://github.com/mj-study/NestJS/tree/main/nestjs-board-app',
  },
  {
    period: '2024.09.26 ~ 2024.10.04',
    skill: 'React',
    description: 'React Blog 앱 - CRA 활용, CSS BEM 모델 적용, Firebase 인증 및 store 활용',
    link: 'https://github.com/mj-study/react-pjt/tree/main/blog',
  },
  {
    period: '2024.05.19 ~ 2024.10.13',
    skill: 'Java',
    description: 'Effective Java - Java 중급',
    link: 'https://github.com/mj-study/Java/tree/main/Effective-Java',
  },
]