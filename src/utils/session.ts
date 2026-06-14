import type { Flashcard, ProgressMap, SessionCategory } from '../types';

function shuffleCards(cards: Flashcard[]) {
  return [...cards].sort(() => Math.random() - 0.5);
}

function getCardWeight(card: Flashcard, progress: ProgressMap) {
  const cardProgress = progress[card.id];
  if (!cardProgress) return 1;

  const partial = cardProgress.partial ?? 0;

  if (cardProgress.wrong >= cardProgress.correct + 2) return 4;
  if (cardProgress.wrong > cardProgress.correct) return 3;
  if (partial > cardProgress.correct) return 2;
  if (cardProgress.skipped > 0 && cardProgress.correct === 0) return 2;

  return 1;
}

export function buildSessionDeck(allCards: Flashcard[], category: SessionCategory, progress: ProgressMap) {
  const filteredCards = category === 'mixed' ? allCards : allCards.filter((card) => card.category === category);
  const weightedDeck: Flashcard[] = [];

  for (const card of filteredCards) {
    const weight = getCardWeight(card, progress);
    for (let index = 0; index < weight; index += 1) {
      weightedDeck.push(card);
    }
  }

  return shuffleCards(weightedDeck);
}
