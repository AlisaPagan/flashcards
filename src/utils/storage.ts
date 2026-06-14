import type { AnswerHistoryItem, CardProgress, PracticeSessionItem, ProgressMap, ResultKind } from '../types';

const PROGRESS_KEY = 'interview-flashcards-progress';
const HISTORY_KEY = 'interview-flashcards-history';
const PRACTICE_SESSIONS_KEY = 'interview-flashcards-practice-sessions';

export function loadProgress(): ProgressMap {
  try {
    const saved = localStorage.getItem(PROGRESS_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export function saveProgress(progress: ProgressMap): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function updateCardProgress(progress: ProgressMap, cardId: string, result: ResultKind): ProgressMap {
  const current: CardProgress = progress[cardId] ?? {
    cardId,
    attempts: 0,
    correct: 0,
    partial: 0,
    wrong: 0,
    skipped: 0,
  };

  const next: CardProgress = {
    ...current,
    attempts: result === 'skipped' ? current.attempts : current.attempts + 1,
    correct: result === 'correct' ? current.correct + 1 : current.correct,
    partial: result === 'partial' ? (current.partial ?? 0) + 1 : (current.partial ?? 0),
    wrong: result === 'wrong' ? current.wrong + 1 : current.wrong,
    skipped: result === 'skipped' ? current.skipped + 1 : current.skipped,
    lastResult: result,
    lastAnsweredAt: new Date().toISOString(),
  };

  const updated = { ...progress, [cardId]: next };
  saveProgress(updated);
  return updated;
}

export function loadHistory(): AnswerHistoryItem[] {
  try {
    const saved = localStorage.getItem(HISTORY_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function saveHistory(history: AnswerHistoryItem[]): void {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 100)));
}

export function addHistoryItem(item: Omit<AnswerHistoryItem, 'id' | 'createdAt'>): AnswerHistoryItem[] {
  const history = loadHistory();
  const nextItem: AnswerHistoryItem = {
    ...item,
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
  };
  const updated = [nextItem, ...history].slice(0, 100);
  saveHistory(updated);
  return updated;
}

export function loadPracticeSessions(): PracticeSessionItem[] {
  try {
    const saved = localStorage.getItem(PRACTICE_SESSIONS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function savePracticeSessions(sessions: PracticeSessionItem[]): void {
  localStorage.setItem(PRACTICE_SESSIONS_KEY, JSON.stringify(sessions.slice(0, 100)));
}

export function addPracticeSession(item: Omit<PracticeSessionItem, 'id'>): PracticeSessionItem[] {
  const sessions = loadPracticeSessions();
  const nextItem: PracticeSessionItem = {
    ...item,
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  };
  const updated = [nextItem, ...sessions].slice(0, 100);
  savePracticeSessions(updated);
  return updated;
}

export function clearSavedPractice(): void {
  localStorage.removeItem(PROGRESS_KEY);
  localStorage.removeItem(HISTORY_KEY);
  localStorage.removeItem(PRACTICE_SESSIONS_KEY);
}
