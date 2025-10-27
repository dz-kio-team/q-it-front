# Q-IT (큐잇) - 면접 경험 공유 플랫폼

> 실제 면접 경험을 공유하고 검색할 수 있는 프로덕션급 플랫폼

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4)](https://tailwindcss.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)

## 🎯 프로젝트 소개

Q-IT는 취업 준비생들이 실제 면접 경험을 공유하고 검색할 수 있는 플랫폼입니다.
회사별, 포지션별로 면접 질문과 경험을 찾아보고, 본인의 경험도 공유할 수 있습니다.

### 주요 특징

- ✨ **프로덕션급 코드**: 타입 안전성, 테스트, 접근성을 고려한 설계
- 🎨 **모던 UI/UX**: shadcn/ui와 Radix UI 기반의 일관된 디자인
- 📱 **반응형 디자인**: 모바일부터 데스크톱까지 완벽 대응
- ♿ **접근성 우선**: WCAG 2.1 AA 기준 준수

## 🚀 빠른 시작

### 필수 요구사항

- **Node.js**: 20.9.0 이상 권장
- **npm**: 8.0.0 이상

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/dz-kio-team/q-it-front.git
cd q-it-front

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local

# 개발 서버 실행 (http://localhost:3000)
npm run dev
```

### 사용 가능한 스크립트

```bash
# 개발
npm run dev              # 개발 서버 시작
npm run build            # 프로덕션 빌드
npm run start            # 프로덕션 서버 시작

# 코드 품질
npm run lint             # ESLint 검사
npm run lint:fix         # ESLint 자동 수정
npm run format           # Prettier 포맷팅
npm run format:check     # 포맷팅 확인
npm run type-check       # TypeScript 타입 검사
npm run check-all        # 모든 검사 실행

# 테스트
npm run test             # Vitest 실행
npm run test:ui          # Vitest UI
npm run test:coverage    # 커버리지 리포트
```

## 🏗️ 기술 스택

### Core

- **[Next.js 16](https://nextjs.org/)** - React 프레임워크 (App Router)
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - 타입 안전성
- **[React 19](https://react.dev/)** - UI 라이브러리

### 상태 관리

- **[TanStack Query v5](https://tanstack.com/query)** - 서버 상태 관리
- **[Zustand](https://zustand-demo.pmnd.rs/)** - 클라이언트 상태 관리
- **[React Hook Form](https://react-hook-form.com/)** - 폼 상태 관리
- **[Zod](https://zod.dev/)** - 스키마 검증

### UI & 스타일링

- **[Tailwind CSS v4](https://tailwindcss.com/)** - 유틸리티 CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - 재사용 가능한 컴포넌트
- **[Radix UI](https://www.radix-ui.com/)** - 접근성 높은 프리미티브
- **[Lucide React](https://lucide.dev/)** - 아이콘

### 테스트 & 개발 도구

- **[Vitest](https://vitest.dev/)** - 단위 테스트
- **[React Testing Library](https://testing-library.com/)** - 컴포넌트 테스트
- **[MSW](https://mswjs.io/)** - API 모킹
- **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)** - 코드 품질

## 📁 프로젝트 구조

Feature-Sliced Design(FSD) 아키텍처를 따릅니다:

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # 인증 관련 라우트
│   ├── (main)/            # 메인 애플리케이션 라우트
│   └── layout.tsx
│
├── shared/                # 공유 레이어 (FSD)
│   ├── api/              # API 클라이언트
│   ├── config/           # 앱 설정
│   ├── lib/              # 라이브러리 설정
│   ├── ui/               # shadcn/ui 컴포넌트
│   └── hooks/            # 공통 커스텀 훅
│
├── entities/              # 비즈니스 엔티티 (FSD) 예시
│   ├── interview/        # 면접 엔티티
│   ├── company/          # 회사 엔티티
│   ├── user/             # 사용자 엔티티
│   └── position/         # 포지션 엔티티
│
├── features/              # 기능 단위 (FSD) 예시
│   ├── interview-form/   # 면접 경험 작성
│   ├── interview-search/ # 면접 경험 검색
│   ├── interview-filter/ # 면접 경험 필터링
│   ├── auth/             # 인증
│   └── comment/          # 댓글
│
├── widgets/               # 위젯 (FSD)
│   ├── header/
│   ├── footer/
│   ├── interview-list/
│   └── interview-detail/
│
└── pages/                 # 페이지 조합 (FSD)
    ├── home/
    ├── interview-detail/
    └── profile/
```

### FSD 레이어 규칙

1. **shared/**: 비즈니스 로직 없음, 재사용 가능한 유틸리티만
2. **entities/**: 비즈니스 엔티티, shared만 import 가능
3. **features/**: 사용자 기능, shared + entities import 가능
4. **widgets/**: 복합 블록, 하위 레이어 import 가능
5. **pages/**: 페이지 조합, 모든 레이어 import 가능
6. **app/**: Next.js 라우팅 및 프로바이더

> ⚠️ **Import 규칙**: 상위 레이어는 하위 레이어만 import 가능, 역방향 import 금지

## 🧪 테스트

```bash
# 전체 테스트 실행
npm run test

# UI 모드로 테스트
npm run test:ui

# 커버리지 리포트
npm run test:coverage
```

테스트 작성 예시:

```typescript
// entities/interview/model/__tests__/schemas.test.ts
import { describe, it, expect } from 'vitest';
import { InterviewFormSchema } from '../schemas';

describe('InterviewFormSchema', () => {
  it('validates correct interview data', () => {
    const validData = {
      companyName: 'Google',
      position: 'Frontend Engineer',
      // ...
    };

    const result = InterviewFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
```

## 🎨 컴포넌트 개발

shadcn/ui 컴포넌트를 추가하려면:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add form
npx shadcn-ui@latest add dialog
```

컴포넌트는 `src/shared/ui/`에 추가되며 자유롭게 커스터마이징할 수 있습니다.

## 🔧 환경 변수

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
# API 설정
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# MSW 활성화 (개발 환경)
NEXT_PUBLIC_ENABLE_MSW=true
```

## 🤝 협업 가이드

### 브랜치 전략

- `main`: 프로덕션 코드
- `develop`: 통합 브랜치
- `feature/*`: 새로운 기능
- `fix/*`: 버그 수정
- `chore/*`: 유지보수

### 커밋 컨벤션

[Conventional Commits](https://www.conventionalcommits.org/) 준수:

```bash
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 변경
style: 코드 포맷팅 (기능 변경 없음)
refactor: 리팩토링
test: 테스트 추가/수정
chore: 빌드/설정 변경
```

### Code Review 체크리스트

- [ ] 타입이 제대로 정의되어 있는가 (no `any`)
- [ ] API 데이터에 Zod 스키마가 적용되어 있는가
- [ ] FSD 구조를 따르고 있는가
- [ ] 접근성 요구사항을 충족하는가
- [ ] 테스트가 주요 기능을 커버하는가
- [ ] console.log나 debugger가 남아있지 않은가
- [ ] 로딩 및 빈 상태가 처리되어 있는가

### 에디터 설정

VS Code를 사용한다면 다음 확장 프로그램을 설치하세요:

- ESLint
- Prettier
- Tailwind CSS IntelliSense

설정은 `.vscode/settings.json`에 포함되어 있습니다.

## 📚 추가 문서

- [Feature-Sliced Design](https://feature-sliced.design/) - 아키텍처 방법론
- [Next.js 문서](https://nextjs.org/docs)
- [TanStack Query 문서](https://tanstack.com/query/latest)

## 🐛 문제 해결

### MSW가 요청을 가로채지 못할 때

1. 브라우저 콘솔에서 MSW 등록 확인
2. handlers의 URL이 요청 URL과 정확히 일치하는지 확인
3. 개발 서버 재시작

### Hydration 에러

1. 서버와 클라이언트 HTML이 일치하는지 확인
2. `Date.now()`나 `Math.random()` 사용 자제
3. `suppressHydrationWarning`은 최소한으로 사용

### TypeScript 에러

1. `npm run type-check`로 전체 타입 검사
2. `.parse()` 대신 `.safeParse()` 사용 고려
3. `z.infer`로 타입과 스키마 일치시키기

## 📄 라이선스

## 👥 기여자

이 프로젝트는 [dz-kio-team](https://github.com/dz-kio-team)에서 관리합니다.

---

**Q-IT**로 더 나은 면접 준비를 시작하세요! 🚀
