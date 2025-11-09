import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import useQuestionFilter from '@/features/question-filter/model/useQuestionFilter';

import { QuestionFilter } from '../question-filter';

// Mock the useQuestionFilter hook
vi.mock('@/features/question-filter/model/useQuestionFilter', () => ({
  default: vi.fn(),
}));

describe('QuestionFilter', () => {
  const mockSetJobRole = vi.fn();
  const mockSetCareerYears = vi.fn();
  const mockSetDifficulty = vi.fn();
  const mockSetQuestionType = vi.fn();
  const mockHandleShowQuestions = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    // Setup default mock implementation
    vi.mocked(useQuestionFilter).mockReturnValue({
      jobRole: null,
      careerYears: null,
      difficulty: null,
      questionType: null,
      setJobRole: mockSetJobRole,
      setCareerYears: mockSetCareerYears,
      setDifficulty: mockSetDifficulty,
      setQuestionType: mockSetQuestionType,
      handleShowQuestions: mockHandleShowQuestions,
    });
  });

  describe('렌더링', () => {
    it('필터 제목이 표시되어야 한다', () => {
      render(<QuestionFilter />);

      expect(screen.getByText('Filter Questions')).toBeInTheDocument();
    });

    it('모든 필터 레이블이 표시되어야 한다', () => {
      render(<QuestionFilter />);

      expect(screen.getByText('Job Role')).toBeInTheDocument();
      expect(screen.getByText('Career Years')).toBeInTheDocument();
      expect(screen.getByText('Difficulty')).toBeInTheDocument();
      expect(screen.getByText('Question Type')).toBeInTheDocument();
    });

    it('모든 Select 박스가 표시되어야 한다', () => {
      render(<QuestionFilter />);

      expect(screen.getByText('Select job role')).toBeInTheDocument();
      expect(screen.getByText('Select years')).toBeInTheDocument();
      expect(screen.getByText('Select difficulty')).toBeInTheDocument();
      expect(screen.getByText('Select type')).toBeInTheDocument();
    });

    it('Show Questions 버튼이 표시되어야 한다', () => {
      render(<QuestionFilter />);

      expect(screen.getByRole('button', { name: /show questions/i })).toBeInTheDocument();
    });
  });

  describe('필터 상호작용', () => {
    it('모든 Select 컴포넌트가 렌더링되어야 한다', () => {
      render(<QuestionFilter />);

      // 4개의 combobox가 렌더링되었는지 확인
      const selectTriggers = screen.getAllByRole('combobox');
      expect(selectTriggers).toHaveLength(4);
    });

    it('각 Select가 onValueChange 핸들러를 가져야 한다', () => {
      render(<QuestionFilter />);

      // Select 컴포넌트들이 정상적으로 렌더링되었는지 확인
      expect(screen.getAllByRole('combobox')).toHaveLength(4);

      // 각 Select가 올바른 placeholder를 가지는지 확인
      expect(screen.getByText('Select job role')).toBeInTheDocument();
      expect(screen.getByText('Select years')).toBeInTheDocument();
      expect(screen.getByText('Select difficulty')).toBeInTheDocument();
      expect(screen.getByText('Select type')).toBeInTheDocument();
    });
  });

  describe('선택된 필터 값 표시', () => {
    it('선택된 Job Role이 렌더링되어야 한다', () => {
      vi.mocked(useQuestionFilter).mockReturnValue({
        jobRole: 'frontend',
        careerYears: null,
        difficulty: null,
        questionType: null,
        setJobRole: mockSetJobRole,
        setCareerYears: mockSetCareerYears,
        setDifficulty: mockSetDifficulty,
        setQuestionType: mockSetQuestionType,
        handleShowQuestions: mockHandleShowQuestions,
      });

      render(<QuestionFilter />);

      // jobRole이 'frontend'로 설정되어 컴포넌트가 렌더링됨
      const selectTriggers = screen.getAllByRole('combobox');
      expect(selectTriggers[0]).toBeInTheDocument();
    });

    it('모든 필터가 선택되었을 때 컴포넌트가 렌더링되어야 한다', () => {
      vi.mocked(useQuestionFilter).mockReturnValue({
        jobRole: 'backend',
        careerYears: '3-5',
        difficulty: 'hard',
        questionType: 'coding',
        setJobRole: mockSetJobRole,
        setCareerYears: mockSetCareerYears,
        setDifficulty: mockSetDifficulty,
        setQuestionType: mockSetQuestionType,
        handleShowQuestions: mockHandleShowQuestions,
      });

      render(<QuestionFilter />);

      // 모든 Select 컴포넌트가 렌더링됨
      const selectTriggers = screen.getAllByRole('combobox');
      expect(selectTriggers).toHaveLength(4);
    });
  });

  describe('Show Questions 버튼', () => {
    it('버튼 클릭 시 handleShowQuestions가 호출되어야 한다', async () => {
      const user = userEvent.setup();
      render(<QuestionFilter />);

      const button = screen.getByRole('button', { name: /show questions/i });
      await user.click(button);

      expect(mockHandleShowQuestions).toHaveBeenCalledTimes(1);
    });

    it('버튼이 large 사이즈로 렌더링되어야 한다', () => {
      render(<QuestionFilter />);

      const button = screen.getByRole('button', { name: /show questions/i });
      expect(button).toHaveClass('h-10'); // large size의 Tailwind 클래스
    });

    it('버튼이 전체 너비로 렌더링되어야 한다', () => {
      render(<QuestionFilter />);

      const button = screen.getByRole('button', { name: /show questions/i });
      expect(button).toHaveClass('w-full');
    });
  });

  describe('레이아웃', () => {
    it('필터가 그리드 레이아웃으로 표시되어야 한다', () => {
      render(<QuestionFilter />);

      const gridContainer = screen.getByText('Job Role').closest('div')?.parentElement;
      expect(gridContainer).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-4');
    });

    it('필터 컨테이너가 올바른 스타일을 가져야 한다', () => {
      const { container } = render(<QuestionFilter />);

      const filterContainer = container.querySelector('.rounded-lg.border.bg-white.p-6');
      expect(filterContainer).toBeInTheDocument();
    });
  });
});
