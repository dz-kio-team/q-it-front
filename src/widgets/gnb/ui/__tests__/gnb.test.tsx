import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { usePathname } from 'next/navigation';

import { GNB } from '../gnb';

// Mock Next.js navigation hooks
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('GNB', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('렌더링', () => {
    it('로고가 표시되어야 한다', () => {
      vi.mocked(usePathname).mockReturnValue('/');

      render(<GNB />);

      const logo = screen.getByText('Q-IT');
      expect(logo).toBeInTheDocument();
    });

    it('로고가 홈페이지로 링크되어야 한다', () => {
      vi.mocked(usePathname).mockReturnValue('/');

      render(<GNB />);

      const logo = screen.getByText('Q-IT');
      expect(logo.closest('a')).toHaveAttribute('href', '/');
    });

    it('모든 메뉴 아이템이 표시되어야 한다', () => {
      vi.mocked(usePathname).mockReturnValue('/');

      render(<GNB />);

      expect(screen.getByText('마이페이지')).toBeInTheDocument();
      expect(screen.getByText('추천질문')).toBeInTheDocument();
      expect(screen.getByText('모의면접')).toBeInTheDocument();
    });

    it('각 메뉴가 올바른 href를 가져야 한다', () => {
      vi.mocked(usePathname).mockReturnValue('/');

      render(<GNB />);

      const myPageLink = screen.getByText('마이페이지').closest('a');
      const recommendQuestionsLink = screen.getByText('추천질문').closest('a');
      const mockInterviewLink = screen.getByText('모의면접').closest('a');

      expect(myPageLink).toHaveAttribute('href', '/my-page');
      expect(recommendQuestionsLink).toHaveAttribute('href', '/recommend-questions');
      expect(mockInterviewLink).toHaveAttribute('href', '/mock-interview');
    });
  });

  describe('활성 메뉴 상태', () => {
    it('마이페이지 경로에서 마이페이지 메뉴가 활성화되어야 한다', () => {
      vi.mocked(usePathname).mockReturnValue('/my-page');

      render(<GNB />);

      const myPageLink = screen.getByText('마이페이지').closest('a');
      expect(myPageLink).toHaveStyle({ color: 'var(--primary)' });
    });

    it('추천질문 경로에서 추천질문 메뉴가 활성화되어야 한다', () => {
      vi.mocked(usePathname).mockReturnValue('/recommend-questions');

      render(<GNB />);

      const recommendQuestionsLink = screen.getByText('추천질문').closest('a');
      expect(recommendQuestionsLink).toHaveStyle({ color: 'var(--primary)' });
    });

    it('모의면접 경로에서 모의면접 메뉴가 활성화되어야 한다', () => {
      vi.mocked(usePathname).mockReturnValue('/mock-interview');

      render(<GNB />);

      const mockInterviewLink = screen.getByText('모의면접').closest('a');
      expect(mockInterviewLink).toHaveStyle({ color: 'var(--primary)' });
    });

    it('하위 경로에서도 상위 메뉴가 활성화되어야 한다', () => {
      vi.mocked(usePathname).mockReturnValue('/my-page/ai-request-questions');

      render(<GNB />);

      const myPageLink = screen.getByText('마이페이지').closest('a');
      expect(myPageLink).toHaveStyle({ color: 'var(--primary)' });
    });

    it('활성화되지 않은 메뉴는 기본 스타일을 가져야 한다', () => {
      vi.mocked(usePathname).mockReturnValue('/my-page');

      render(<GNB />);

      const recommendQuestionsLink = screen.getByText('추천질문').closest('a');
      const mockInterviewLink = screen.getByText('모의면접').closest('a');

      expect(recommendQuestionsLink).not.toHaveStyle({ color: 'var(--primary)' });
      expect(mockInterviewLink).not.toHaveStyle({ color: 'var(--primary)' });
    });
  });

  describe('스타일링', () => {
    it('헤더가 올바른 클래스를 가져야 한다', () => {
      vi.mocked(usePathname).mockReturnValue('/');

      render(<GNB />);

      const header = screen.getByRole('banner');
      expect(header).toHaveClass('border-b', 'bg-white');
    });

    it('네비게이션 링크가 hover 클래스를 가져야 한다', () => {
      vi.mocked(usePathname).mockReturnValue('/');

      render(<GNB />);

      const myPageLink = screen.getByText('마이페이지').closest('a');
      expect(myPageLink).toHaveClass('hover:text-primary');
    });
  });
});
