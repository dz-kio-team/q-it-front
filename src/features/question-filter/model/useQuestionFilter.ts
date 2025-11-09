import { useQuestionFilterStore } from '@/features/question-filter';

const useQuestionFilter = () => {
  const {
    jobRole,
    careerYears,
    difficulty,
    questionType,
    setJobRole,
    setCareerYears,
    setDifficulty,
    setQuestionType,
  } = useQuestionFilterStore();

  const handleShowQuestions = () => {
    // TODO: Implement show questions logic
    // console.log('Filter:', { jobRole, careerYears, difficulty, questionType });
  };

  return {
    jobRole,
    careerYears,
    difficulty,
    questionType,
    setJobRole,
    setCareerYears,
    setDifficulty,
    setQuestionType,
    handleShowQuestions,
  };
};

export default useQuestionFilter;
