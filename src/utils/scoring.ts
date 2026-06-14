import type { Flashcard, ScoreResult } from '../types';

const STOP_WORDS = new Set([
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'can',
  'do',
  'does',
  'for',
  'from',
  'has',
  'have',
  'if',
  'in',
  'is',
  'it',
  'its',
  'of',
  'on',
  'or',
  'that',
  'the',
  'this',
  'to',
  'use',
  'used',
  'when',
  'which',
  'with',
  'you',
]);

const GLOBAL_ALIASES: Record<string, string[]> = {
  access: ['reach', 'read', 'available'],
  async: ['asynchronous'],
  callback: ['function passed', 'passed function'],
  component: ['ui piece', 'ui part'],
  data: ['information', 'info'],
  element: ['tag', 'node'],
  error: ['bug', 'problem'],
  function: ['method'],
  object: ['dictionary', 'map'],
  parent: ['outer'],
  render: ['display', 'show'],
  request: ['call', 'api call'],
  response: ['answer', 'result'],
  return: ['give back', 'send back'],
  scope: ['context', 'place'],
  state: ['data that changes', 'changing data'],
  variable: ['value'],
};

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9+#.\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getImportantWords(text: string) {
  return normalizeText(text)
    .split(' ')
    .map((word) => word.trim())
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

function hasWord(answerWords: Set<string>, word: string) {
  const normalizedWord = normalizeText(word);
  if (!normalizedWord) return false;

  if (answerWords.has(normalizedWord)) return true;

  const aliases = GLOBAL_ALIASES[normalizedWord] ?? [];
  return aliases.some((alias) => normalizeText(alias).split(' ').every((aliasWord) => answerWords.has(aliasWord)));
}

function phraseMatches(normalizedAnswer: string, answerWords: Set<string>, phrase: string) {
  const normalizedPhrase = normalizeText(phrase);
  if (!normalizedPhrase) return false;

  if (normalizedAnswer.includes(normalizedPhrase)) return true;

  const phraseWords = getImportantWords(normalizedPhrase);
  if (!phraseWords.length) return false;

  const matchedWords = phraseWords.filter((word) => hasWord(answerWords, word)).length;

  // For one-word concepts, exact word/synonym is enough.
  if (phraseWords.length === 1) return matchedWords === 1;

  // For phrases like "outer scope", do not require the exact phrase.
  return matchedWords / phraseWords.length >= 0.5;
}

function keywordMatches(normalizedAnswer: string, answerWords: Set<string>, card: Flashcard, keyword: string) {
  const possiblePhrases = [keyword, ...(card.aliases?.[keyword] ?? [])];
  return possiblePhrases.some((phrase) => phraseMatches(normalizedAnswer, answerWords, phrase));
}

function getOfficialAnswerCoverage(userAnswer: string, officialAnswer: string) {
  const answerWords = new Set(getImportantWords(userAnswer));
  const officialWords = Array.from(new Set(getImportantWords(officialAnswer)));

  if (!officialWords.length) return 0;

  const matchedWords = officialWords.filter((word) => hasWord(answerWords, word)).length;
  return Math.round((matchedWords / officialWords.length) * 100);
}

function getSuggestedResult(score: number) {
  if (score >= 65) return 'correct';
  if (score >= 35) return 'partial';
  return 'wrong';
}

export function scoreAnswer(userAnswer: string, card: Flashcard): ScoreResult {
  const normalizedAnswer = normalizeText(userAnswer);
  const answerWords = new Set(getImportantWords(userAnswer));

  if (normalizedAnswer.length < 6) {
    return {
      score: 0,
      passed: false,
      suggestedResult: 'wrong',
      matched: [],
      missing: card.keywords,
    };
  }

  const matched: string[] = [];
  const missing: string[] = [];

  for (const keyword of card.keywords) {
    if (keywordMatches(normalizedAnswer, answerWords, card, keyword)) {
      matched.push(keyword);
    } else {
      missing.push(keyword);
    }
  }

  const keywordScore = card.keywords.length === 0 ? 0 : Math.round((matched.length / card.keywords.length) * 100);
  const answerCoverageScore = getOfficialAnswerCoverage(userAnswer, card.answer);

  // Keyword score is still the main score, but answer wording can rescue a short answer.
  const score = Math.max(keywordScore, Math.round(answerCoverageScore * 0.85));
  const minimumScore = card.minimumScore ?? 40;
  const suggestedResult = getSuggestedResult(score);

  return {
    score,
    passed: score >= minimumScore,
    suggestedResult,
    matched,
    missing,
  };
}
