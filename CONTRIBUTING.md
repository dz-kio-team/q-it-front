# 기여 가이드

Q-IT 프로젝트에 기여해 주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법을 안내합니다.

## 🚀 시작하기

### 1. 저장소 포크 및 클론

```bash
# 저장소 포크 후 클론
git clone https://github.com/YOUR_USERNAME/q-it-front.git
cd q-it-front

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 2. 브랜치 생성

```bash
# 기능 추가
git checkout -b feature/your-feature-name

# 버그 수정
git checkout -b fix/bug-description

# 기타 작업
git checkout -b chore/task-description
```

## ✅ Git Hooks

커밋 전에 자동으로 실행되는 검사:

### Pre-commit Hook

커밋 시도 시 자동으로 실행:

- ✅ TypeScript 타입 검사 (`npm run type-check`)
- ✅ ESLint 검사 (`npm run lint`)
- ✅ Prettier 포맷 검사 (`npm run format:check`)
- ✅ 테스트 실행 (`npm run test -- --run`)

### Commit Message Hook

커밋 메시지가 Conventional Commits 형식을 따르는지 검사합니다.

**형식**: `type(scope?): subject`

**허용되는 type**:

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅 (기능 변경 없음)
- `refactor`: 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드/설정 변경
- `perf`: 성능 개선
- `ci`: CI 설정 변경
- `build`: 빌드 시스템 변경
- `revert`: 커밋 되돌리기

**예시**:

```bash
feat: add interview search filter
fix(auth): resolve login redirect issue
docs: update README with setup instructions
refactor(ui): reorganize button components
test: add unit tests for InterviewCard
```

## 🔧 개발 워크플로우

### 1. 코드 작성

Feature-Sliced Design 아키텍처를 따라 작성:

- `shared/`: 공통 유틸리티 및 UI 컴포넌트
- `entities/`: 비즈니스 엔티티
- `features/`: 사용자 기능
- `widgets/`: 복합 블록
- `pages/`: 페이지 조합

### 2. 로컬 테스트

```bash
# 전체 검사 실행
npm run check-all

# 테스트 실행
npm run test

# 개발 서버에서 확인
npm run dev
```

### 3. 코드 포맷팅

```bash
# 자동 포맷팅
npm run format

# ESLint 자동 수정
npm run lint:fix
```

### 4. 커밋

```bash
git add .
git commit -m "feat: add your feature description"
```

커밋 시 pre-commit 훅이 자동으로 실행되어 모든 검사를 수행합니다.

**검사 실패 시**:

- 에러 메시지를 확인하고 수정
- 다시 `git commit` 실행

**검사 건너뛰기** (권장하지 않음):

```bash
git commit --no-verify -m "message"
```

### 5. 푸시 및 Pull Request

```bash
# 브랜치 푸시
git push origin feature/your-feature-name

# GitHub에서 Pull Request 생성
```

## 📋 Pull Request 체크리스트

- [README.md code-review-체크리스트](./README.md) 참고

## 🎨 코드 스타일 가이드

### TypeScript

```typescript
// ✅ Good: 명확한 타입 정의
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

// ❌ Bad: any 사용
const handleClick = (data: any) => {};

// ✅ Good: type import 분리
import type { User } from '@/entities/user';
import { getUserName } from '@/entities/user';
```

### React 컴포넌트

```typescript
// ✅ Good: 함수형 컴포넌트, 명확한 props
export const InterviewCard = ({interview, onSelect}: InterviewCardProps) => {
  return <Card>{/* ... */} < /Card>;
};

// ✅ Good: 자동 닫기 태그
<Icon / >

// ❌ Bad: 불필요한 중괄호
<div>{"Hello"} < /div>
```

### Import 순서

```typescript
// 1. React 및 외부 라이브러리
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

// 2. 내부 절대 경로 imports
import { Button } from '@/shared/ui/button';
import { useInterview } from '@/entities/interview';

// 3. 상대 경로 imports
import { InterviewCard } from './interview-card';

// 4. 타입 imports
import type { Interview } from '@/entities/interview';
```

## 🧪 테스트 작성

### 단위 테스트

```typescript
// entities/interview/model/__tests__/schemas.test.ts
import { describe, it, expect } from 'vitest';
import { InterviewFormSchema } from '../schemas';

describe('InterviewFormSchema', () => {
  it('should validate correct data', () => {
    const validData = {
      /* ... */
    };
    const result = InterviewFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
```

### 컴포넌트 테스트

```typescript
// features/interview-form/ui/__tests__/interview-form.test.tsx
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {InterviewForm} from '../interview-form';

describe('InterviewForm', () => {
  it('should show validation errors', async () => {
    const user = userEvent.setup();
    render(<InterviewForm / >);

    await user.click(screen.getByRole('button', {name: /제출/}));

    expect(screen.getByText(/필수입니다/)).toBeInTheDocument();
  });
});
```

## 🐛 버그 리포트

버그를 발견하셨나요? [이슈](https://github.com/dz-kio-team/q-it-front/issues)를 생성해 주세요.

**포함할 내용**:

- 버그 설명
- 재현 단계
- 예상 동작
- 실제 동작
- 스크린샷 (해당되는 경우)
- 환경 정보 (브라우저, OS, Node 버전)

## 📞 도움이 필요하신가요?

- [README.md](./README.md) 참고

---

다시 한번 기여해 주셔서 감사합니다! 🙏
