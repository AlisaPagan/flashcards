export type CategoryId = 'html-css' | 'javascript' | 'typescript' | 'react' | 'next' | 'node';

export type SessionCategory = CategoryId | 'mixed';

export type Category = {
  id: CategoryId;
  label: string;
  shortLabel: string;
};

export type ResultKind = 'correct' | 'partial' | 'wrong' | 'skipped';

export type Flashcard = {
  id: string;
  category: CategoryId;
  question: string;
  answer: string;
  keywords: string[];
  aliases?: Record<string, string[]>;
  minimumScore?: number;
  source?: string;
};

export type CardProgress = {
  cardId: string;
  attempts: number;
  correct: number;
  partial: number;
  wrong: number;
  skipped: number;
  lastResult?: ResultKind;
  lastAnsweredAt?: string;
};

export type ProgressMap = Record<string, CardProgress>;

export type ScoreResult = {
  score: number;
  passed: boolean;
  suggestedResult: Exclude<ResultKind, 'skipped'>;
  matched: string[];
  missing: string[];
};

export type AnswerResult = ScoreResult;

export type AnswerHistoryItem = {
  id: string;
  cardId: string;
  category: CategoryId;
  question: string;
  userAnswer: string;
  autoPassed: boolean;
  finalResult: ResultKind;
  score: number;
  createdAt: string;
};


export type PracticeSessionItem = {
  id: string;
  durationSeconds: number;
  startedAt: string;
  stoppedAt: string;
};

export type SessionResult = PracticeSessionItem;

export type Stats = {
  attempts: number;
  correct: number;
  partial: number;
  wrong: number;
  skipped: number;
};

export type TimerState = {
  runningSince: number | null;
  startedAt: string | null;
  lastSavedSeconds: number;
};
