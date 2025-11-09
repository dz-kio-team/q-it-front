'use client';

import { type Question, QuestionCard } from '@/entities/question';

interface QuestionListProps {
  questions: Question[];
  onSubmitAnswer: (questionId: string, answer: string) => void;
}

export const QuestionList = ({ questions, onSubmitAnswer }: QuestionListProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Question List</h2>

      {questions.length === 0 ? (
        <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed">
          <p className="text-muted-foreground">필터를 선택하고 Show Questions를 클릭하세요</p>
        </div>
      ) : (
        <div className="space-y-4">
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} onSubmitAnswer={onSubmitAnswer} />
          ))}
        </div>
      )}
    </div>
  );
};
