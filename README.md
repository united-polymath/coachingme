# NEXUS Korea v2

> 분야를 잇는 컨설팅 단체 NEXUS Korea의 웹사이트.

## 스택

- Next.js 15 (App Router) + React 19
- TypeScript 5
- Tailwind CSS 3
- framer-motion

다른 의존성 없음. `next-intl`, `lucide-react`, `shadcn` 모두 사용하지 않음.

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
```

## 콘텐츠 단일 출처

`CONTENT.md` 가 사이트의 단일 출처(single source of truth). 카피·구조·디자인 결정이 흔들릴 때는 거기로 돌아간다.

## 디렉터리 구조

```
src/
  app/
    page.tsx                       Home
    layout.tsx                     루트 레이아웃 (헤더·푸터)
    globals.css                    Tailwind + 전역 스타일
    about/                         About — 단체 정체성, 매니페스토
    coach/                         코치진 그리드 (한국 6 + 글로벌 6)
    assessment/
      page.tsx                     진단 도구 목록
      [slug]/page.tsx              개별 진단 (서버 컴포넌트, 메타)
      [slug]/AssessmentRunner.tsx  클라이언트 테스트 러너
    education/                     교육 프로그램 (국내 4 + 해외 3)
    insights/
      page.tsx                     아티클 리스트 (피처 + 그리드)
      [slug]/page.tsx              아티클 상세
    contact/
      page.tsx
      ContactForm.tsx              mailto 기반 폼
    privacy/, terms/               법적 페이지
    not-found.tsx                  404

  components/
    Header.tsx                     스티키 네비, 로고=HOME, 우상단 문의하기 CTA
    Footer.tsx
    Container.tsx                  Section, Eyebrow 헬퍼
    Avatar.tsx                     이니셜 기반 SVG 아바타 (외부 이미지 0)

  data/
    fields.ts                      4개 분야 정의 (key, color, ko, en)
    coaches.ts                     코치진 12명
    assessments.ts                 진단 4종 + 문항/결과 밴드
    education.ts                   교육 7종
    insights.ts                    아티클 10개
```

## 디자인 토큰

- 메인 컬러: `pine-700` `#1F3B2D`
- 분야 액센트:
  - 취업/이직 — `field-career` `#B8623A`
  - 창업 — `field-entrepreneurship` `#C49A4A`
  - 진로/적성 — `field-aptitude` `#6B8E7F`
  - 인성/성향 — `field-character` `#3D5A6C`
- 배경: `cream` `#F6F2EA`, 섹션 구분 `sand` `#E9E2D2`
- 텍스트: `ink` `#1A1F1B` / `ink-muted` `#5C6660` / `ink-subtle` `#97A09A`
- 한글 본문: Pretendard / 영문 세리프: Fraunces (next/font)

## 추후 확장 메모

- **코치 사진**: 현재는 `Avatar.tsx`의 이니셜 기반 SVG 자리표시자. 실제 사진으로 교체할 때는 `public/coaches/*.jpg` 추가 후 `Avatar` 컴포넌트 props 확장.
- **문의 폼**: 현재는 `mailto:` 핸드오프. 실제 백엔드 연결 시 `ContactForm.tsx` 의 `onSubmit` 만 교체하면 됨.
- **진단 점수**: 현재는 단순 합산 + 밴드 매칭. 정밀 컨설팅용 진단은 별도 도구로 운영하고, 본 사이트의 진단은 의도적으로 단축형.
