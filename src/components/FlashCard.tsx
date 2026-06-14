import type { Flashcard } from '../types';

type FlashCardProps = {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
};

export function FlashCard({ card, isFlipped, onFlip }: FlashCardProps) {
  return (
    <button className={`flashcard ${isFlipped ? 'is-flipped' : ''}`} onClick={onFlip} type="button">
      <span className="flashcard-hint">Click to flip</span>
      <span className="flashcard-category">{card.category}</span>

      <span className="flashcard-inner">
        <span className="flashcard-face flashcard-front">
          <span className="flashcard-label">Question</span>
          <strong>{card.question}</strong>
        </span>

        <span className="flashcard-face flashcard-back">
          <span className="flashcard-label">Answer</span>
          <span>{card.answer}</span>
        </span>
      </span>
    </button>
  );
}
