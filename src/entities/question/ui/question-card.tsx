'use client';

import { useState } from 'react';

import { ListPlusIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { IconButton } from '@/shared/ui/icon-button';
import { Textarea } from '@/shared/ui/textarea';

import type { Question } from '../model';

interface QuestionCardProps {
  question: Question;
  onSubmitAnswer: (questionId: string, answer: string) => void;
}

export const QuestionCard = ({ question, onSubmitAnswer }: QuestionCardProps) => {
  const [answer, setAnswer] = useState('');
  const [isActive, setActive] = useState<boolean>(false);
  const handleSubmit = () => {
    if (answer.trim() && onSubmitAnswer) {
      onSubmitAnswer(question.id, answer);
      setAnswer(''); // Reset after submit
    }
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h3 className="mb-2 text-lg font-semibold">{question.title}</h3>

        <IconButton
          active={isActive}
          onClick={() => {
            setActive((prev) => !prev);
          }}
          icon={ListPlusIcon}
        />
      </div>

      {/* Meta information */}
      <div className="mb-4 flex gap-2 text-sm text-gray-500">
        <span>{question.jobRole}</span>
        <span>|</span>
        <span>{question.questionType}</span>
      </div>

      {/* Answer textarea with Submit button inside */}
      <Textarea
        placeholder="답변을 입력하세요..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="min-h-[120px]"
        suffixComponent={
          <Button onClick={handleSubmit} disabled={!answer.trim()} size="sm">
            Submit
          </Button>
        }
      />
    </div>
  );
};
