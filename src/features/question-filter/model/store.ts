import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { QuestionFilter } from './types';

interface QuestionFilterState extends QuestionFilter {
  setJobRole: (jobRole: string | null) => void;
  setCareerYears: (careerYears: string | null) => void;
  setDifficulty: (difficulty: string | null) => void;
  setQuestionType: (questionType: string | null) => void;
  resetFilters: () => void;
}

const initialState: QuestionFilter = {
  jobRole: null,
  careerYears: null,
  difficulty: null,
  questionType: null,
};

export const useQuestionFilterStore = create<QuestionFilterState>()(
  devtools(
    (set) => ({
      ...initialState,
      setJobRole: (jobRole) => set({ jobRole }),
      setCareerYears: (careerYears) => set({ careerYears }),
      setDifficulty: (difficulty) => set({ difficulty }),
      setQuestionType: (questionType) => set({ questionType }),
      resetFilters: () => set(initialState),
    }),
    { name: 'QuestionFilterStore' }
  )
);
