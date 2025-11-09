'use client';

import { Flex } from '@radix-ui/themes';

import useQuestionFilter from '@/features/question-filter/model/useQuestionFilter';
import { Button } from '@/shared/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

import { CAREER_YEARS, DIFFICULTIES, JOB_ROLES, QUESTION_TYPES } from '../model/types';

export const QuestionFilter = () => {
  const {
    jobRole,
    careerYears,
    difficulty,
    questionType,
    setJobRole,
    setCareerYears,
    setDifficulty,
    setQuestionType,
    handleShowQuestions,
  } = useQuestionFilter();

  return (
    <Flex className="rounded-lg border bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold">Filter Questions</h2>

      <div className="mb-3 grid grid-cols-1 gap-4 md:grid-cols-4">
        {/* Job Role */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Job Role</label>
          <Select value={jobRole || ''} onValueChange={setJobRole}>
            <SelectTrigger>
              <SelectValue placeholder="Select job role" />
            </SelectTrigger>
            <SelectContent>
              {JOB_ROLES.map((role) => (
                <SelectItem key={role.value} value={role.value}>
                  {role.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Career Years */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Career Years</label>
          <Select value={careerYears || ''} onValueChange={setCareerYears}>
            <SelectTrigger>
              <SelectValue placeholder="Select years" />
            </SelectTrigger>
            <SelectContent>
              {CAREER_YEARS.map((year) => (
                <SelectItem key={year.value} value={year.value}>
                  {year.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Difficulty */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Difficulty</label>
          <Select value={difficulty || ''} onValueChange={setDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              {DIFFICULTIES.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Question Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Question Type</label>
          <Select value={questionType || ''} onValueChange={setQuestionType}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {QUESTION_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Flex>
        <Button onClick={handleShowQuestions} size="lg" className="w-full">
          Show Questions
        </Button>
      </Flex>
    </Flex>
  );
};
