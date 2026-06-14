import { sessionCategories } from '../data/categories';
import type { SessionCategory } from '../types';

type CategorySelectProps = {
  cardCounts: Record<string, number>;
  onStart: (category: SessionCategory) => void;
};

export function CategorySelect({ cardCounts, onStart }: CategorySelectProps) {
  return (
    <section className="panel hero-panel">
      <p className="eyebrow">Interview practice</p>
      <h1>Flashcards that punish weak spots a little.</h1>
      <p className="intro">
        Pick one stack or run a random mix. Wrong and skipped questions get a higher chance of showing up later.
      </p>

      <div className="category-grid">
        {sessionCategories.map((category) => (
          <button className="category-card" key={category.id} onClick={() => onStart(category.id)}>
            <span>{category.label}</span>
            <small>{cardCounts[category.id] ?? 0} cards</small>
          </button>
        ))}
      </div>
    </section>
  );
}
