export interface QuestionFilter {
  jobRole: string | null;
  careerYears: string | null;
  difficulty: string | null;
  questionType: string | null;
}

export const JOB_ROLES = [
  { value: 'frontend', label: 'Frontend Developer' },
  { value: 'backend', label: 'Backend Developer' },
  { value: 'fullstack', label: 'Fullstack Developer' },
  { value: 'devops', label: 'DevOps Engineer' },
  { value: 'mobile', label: 'Mobile Developer' },
] as const;

export const CAREER_YEARS = [
  { value: '0-1', label: '0-1년' },
  { value: '1-3', label: '1-3년' },
  { value: '3-5', label: '3-5년' },
  { value: '5-10', label: '5-10년' },
  { value: '10+', label: '10년 이상' },
] as const;

export const DIFFICULTIES = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
] as const;

export const QUESTION_TYPES = [
  { value: 'technical', label: 'Technical' },
  { value: 'behavioral', label: 'Behavioral' },
  { value: 'coding', label: 'Coding' },
  { value: 'system-design', label: 'System Design' },
] as const;
