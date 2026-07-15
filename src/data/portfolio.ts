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
  {
    period: '2018.10 ~ 2022.02',
    title: '정보통신공학 학사 (학점은행제)'
  },
  {
    period: '2013.03 ~ 2017.03',
    title: '한국폴리텍 IV 대전캠퍼스 기계시스템과'
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
    period: '2026.04.13 ~ 진행중',
    name: '오케스트라 티켓 시스템',
    description: '60~70명 규모의 아마추어 오케스트라 동호회가 연 1회 공연 때마다 엑셀로 수기 관리하던 \'회원별 티켓 수 배분 → 좌석 배정\' 과정을 웹 시스템으로 대체한 내부 관리 툴',
    links: [
      { label: 'FE', url: 'https://github.com/hitobi1014/ticket-system-fe' },
    ],
  },
  {
    period: '2024.04.08 ~ 2024.05.17',
    name: '와플 (What is your plan?)',
    description:
      '[SSAFY 진행] - 개인의 과거 기록과 미래의 약속을 공유하는 웹 서비스 (개인형 일정 대시보드)',
    links: [
      { label: 'GitHub', url: 'https://github.com/What-s-Your-Plan' },
    ],
  },
  {
    period: '2024.02.19 ~ 2024.04.04',
    name: '문득',
    description:
      '[SSAFY 진행] - 산책 안에서 소소한 위로, 작은 행복, 긍정적 감정을 발견해 건강한 삶을 되찾기 위한 서비스',
    links: [{ label: 'GitHub', url: 'https://github.com/hitobi1014/md8' }],
  },
  {
    period: '2024.01.02 ~ 2024.02.16',
    name: 'Prog',
    description: '[SSAFY 진행] - 프로그래머가 되고싶은 사람들을 위한 프로젝트 모집 & 관리 서비스',
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

export interface CareerBullet {
  text: string
  subItems?: string[]
}

export interface CareerRole {
  name?: string
  period?: string
  bullets: CareerBullet[]
}

export interface CareerItem {
  company: string
  employment?: string
  period: string
  projectName?: string
  purpose?: string
  rolesLabel: string
  roles: CareerRole[]
  achievements?: string[]
  techStack: string[]
}

export const careers: CareerItem[] = [
  {
    company: '흥국화재 화면전환 프로젝트',
    employment: '프리랜서',
    period: '2025.09.01 ~ 2026.08.21',
    purpose:
      'UI 프레임워크 교체 (as-is: x-flatform → to-be: exBuilder6, 둘 다 WYSIWYG 기반)',
    rolesLabel: '주요 업무',
    roles: [
      {
        name: 'UI 프레임워크 전환 작업',
        bullets: [
          {
            text: '디자인 표준에 맞춰 화면 UI 컴포넌트 변환 및 전환 후 스크립트 정상 동작 검증',
          },
          {
            text: '전환 작업 범위 내에서 자발적으로 레거시 코드 리팩토링 진행',
            subItems: [
              'var 선언을 사용 목적에 맞게 let/const로 정리해 호이스팅 및 변수 중복 문제 제거',
              '불필요한 함수 제거, 하나의 함수에 과도하게 집중된 로직을 기능 단위로 분리',
            ],
          },
        ],
      },
      {
        name: '비동기 처리 흐름 결함 해결',
        bullets: [
          {
            text: '이벤트 핸들러 내부에서 Promise를 반환하는 비동기 함수를 호출하는 구조였으나, 핸들러 자체가 비동기 컨텍스트로 제어되지 않아 await 이후 로직이 선행 실행되는 구조적 문제 발견',
          },
          {
            text: '원인 분석 후 비동기 로직을 별도 함수로 분리해 명시적으로 호출하는 구조로 개선, 불필요한 Promise 래핑 제거로 코드 복잡도 감소',
          },
        ],
      },
      {
        name: '비동기 흐름 디버깅 (엑셀 다운로드 데이터 정합성 이슈)',
        bullets: [
          {
            text: '공통 엑셀 다운로드 기능 수행 후 데이터셋을 초기화하는 로직에서 엑셀 파일이 빈 파일로 생성되는 버그 발생',
          },
          {
            text: '3단계 비동기 체인(loadExcelLib → exportExcel → Worker postMessage → onmessage resolve) 추적을 통해 공통 함수 내부 return 누락으로 Promise 체인이 끊겨 await이 조기 통과되는 원인 특정',
          },
          {
            text: '공통 함수에 return 추가로 비동기 흐름이 순서대로 완료된 후 초기화(clear())가 실행되도록 수정',
          },
        ],
      },
    ],
    achievements: [
      '비동기 처리 흐름 문제 두 건을 구조적 원인부터 분석해 해결하며, Promise 반환 여부를 기준으로 비동기 흐름을 점검하는 디버깅 기준 수립',
      '공통 함수 개선을 통해 동일 패턴을 사용하는 다른 기능에서 발생할 수 있는 잠재적 버그 예방',
      'UI 프레임워크 전환 작업 범위를 벗어나지 않는 선에서 자발적으로 레거시 코드 리팩토링을 수행해 코드 가독성과 유지보수성 개선에 기여',
    ],
    techStack: ['JavaScript', 'exBuilder6', 'x-flatform'],
  },
  {
    company: 'MG손해보험',
    employment: '프리랜서',
    period: '2024.12.02 ~ 2025.08.31',
    projectName: 'IFRS17 결산 시스템 운영',
    rolesLabel: '주요 업무',
    roles: [
      {
        bullets: [
          {
            text: 'IFRS17 결산 시스템 배치 프로그램 운영 및 장애 대응',
            subItems: [
              'J-JOBS, Control-M 배치 스케줄러 운영 및 모니터링',
              'ARK 시스템 운영 및 소스 포팅',
            ],
          },
          {
            text: 'Oracle 데이터베이스 성능 최적화',
            subItems: [
              '파티션 테이블 설계 및 관리',
              'SQL 쿼리 튜닝을 통한 시스템 성능 향상 (튜닝 전/후 Cost: 365,019 → 125,378, 약 30% 개선)',
              '테이블스페이스 관리 및 데이터 백업/이관 작업',
            ],
          },
          {
            text: 'Java를 활용한 업무 효율화 도구 개발',
            subItems: [
              '테이블 백업 SQL 자동 생성 프로그램 구현',
              'JFrame을 활용한 GUI 인터페이스 개발',
            ],
          },
        ],
      },
    ],
    achievements: [
      'IFRS17 결산 배치 프로세스 안정화로 월별 결산 시간 20% 단축 및 오류율 감소. Oracle 데이터베이스 튜닝을 통해 주요 쿼리 성능 30% 이상 개선.',
    ],
    techStack: ['Java', 'DevOn Framework', 'Oracle', 'J-JOBS', 'Control-M'],
  },
  {
    company: '(주)오에이에스와이에스',
    period: '2021.02.01 ~ 2023.04.28',
    rolesLabel: '주요 프로젝트',
    roles: [
      {
        name: '흥국화재/신한라이프 KICS 프로젝트',
        period: '2022.12 ~ 2023.04',
        bullets: [
          { text: 'Spring Framework 기반 백엔드 API 개발' },
          { text: '보고서 조회 및 코드 관리 화면 개발' },
          { text: 'KICS 관련 데이터 매핑 및 테이블 관리' },
        ],
      },
      {
        name: 'IBK 저축은행 정보계 고도화 프로젝트',
        period: '2022.01 ~ 2022.05',
        bullets: [
          { text: 'Spring Framework 기반 백엔드 API 개발' },
          { text: 'exBuilder6 프레임워크를 활용한 화면 개발' },
          {
            text: 'Scouter APM 모니터링 도구 도입 (장애 대응 시간 단축, 실시간 병목 파악 체계 구축)',
          },
        ],
      },
      {
        name: '신한카드 마이데이터 프로젝트',
        period: '2021.04 ~ 2022.01',
        bullets: [
          { text: 'DevOn Framework 기반 API 개발' },
          { text: '업권별 수집 API 개발' },
          { text: '토큰 갱신 배치 운용 (Job-Pass)' },
          { text: '사용자 인증을 위한 토큰 검증' },
        ],
      },
    ],
    techStack: [
      'Java',
      'Spring Framework',
      'DevOn Framework',
      'Oracle',
      'PostgreSQL',
      'JavaScript',
      'exBuilder6',
      'Web Square',
    ],
  },
]
