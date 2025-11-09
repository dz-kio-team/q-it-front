'use client';

import type { Question } from '@/entities/question';
import { QuestionFilter } from '@/features/question-filter';
import { QuestionList } from '@/widgets/question-list';

// Mock data for demonstration
const MOCK_QUESTIONS: Question[] = [
  {
    id: '1',
    title: 'React의 useEffect와 useLayoutEffect의 차이점은 무엇인가요?',
    jobRole: 'Frontend Developer',
    questionType: 'Technical',
    difficulty: 'medium',
  },
  {
    id: '2',
    title: '팀에서 의견 충돌이 있을 때 어떻게 해결하시나요?',
    jobRole: 'Frontend Developer',
    questionType: 'Behavioral',
    difficulty: 'easy',
  },
  {
    id: '3',
    title: 'Array를 뒤집는 함수를 구현해주세요',
    jobRole: 'Frontend Developer',
    questionType: 'Coding',
    difficulty: 'easy',
  },
];

export const RecommendQuestionsPage = () => {
  // const [_, setQuestions] = useState<Question[]>([]);

  const handleSubmitAnswer = (_questionId: string, _answer: string) => {
    // console.log('Answer submitted:', { questionId, answer });
    // TODO: Implement answer submission logic
  };

  // Mock: Show questions when filter is applied
  // const handleShowQuestions = () => {
  //   setQuestions(MOCK_QUESTIONS);
  // };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Recommend Questions</h1>
      </div>

      <QuestionFilter />

      <div className="mt-8">
        <QuestionList questions={MOCK_QUESTIONS} onSubmitAnswer={handleSubmitAnswer} />
      </div>
    </div>
  );
};
