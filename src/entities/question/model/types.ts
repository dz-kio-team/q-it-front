import { z } from 'zod';

export const QuestionSchema = z.object({
  id: z.string(),
  title: z.string(),
  jobRole: z.string(),
  questionType: z.string(),
  content: z.string().optional(),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
  createdAt: z.string().optional(),
});

export type Question = z.infer<typeof QuestionSchema>;

export const AnswerSchema = z.object({
  questionId: z.string(),
  answer: z.string().min(1, '답변을 입력해주세요'),
});

export type Answer = z.infer<typeof AnswerSchema>;
