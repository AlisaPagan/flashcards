import { categories } from '../data/categories';
import type { AnswerHistoryItem, Flashcard, PracticeSessionItem, ProgressMap } from '../types';
import { formatDuration } from '../utils/time';

type StatsPanelProps = {
  cards: Flashcard[];
  progress: ProgressMap;
  history: AnswerHistoryItem[];
  practiceSessions: PracticeSessionItem[];
  onReset: () => void;
};

function getAccuracy(correct: number, partial: number, wrong: number) {
  const total = correct + partial + wrong;
  if (!total) return '0%';

  // Partial answers count as half-credit for the big percentage.
  return `${Math.round(((correct + partial * 0.5) / total) * 100)}%`;
}

export function StatsPanel({ cards, progress, history, practiceSessions, onReset }: StatsPanelProps) {
  const categoryStats = categories.map((category) => {
    const categoryCards = cards.filter((card) => card.category === category.id);
    const stats = categoryCards.reduce(
      (acc, card) => {
        const cardProgress = progress[card.id];
        if (!cardProgress) return acc;
        return {
          attempts: acc.attempts + cardProgress.attempts,
          correct: acc.correct + cardProgress.correct,
          partial: acc.partial + (cardProgress.partial ?? 0),
          wrong: acc.wrong + cardProgress.wrong,
          skipped: acc.skipped + cardProgress.skipped,
        };
      },
      { attempts: 0, correct: 0, partial: 0, wrong: 0, skipped: 0 },
    );

    return {
      ...category,
      totalCards: categoryCards.length,
      ...stats,
      accuracy: getAccuracy(stats.correct, stats.partial, stats.wrong),
    };
  });

  const hardCards = cards
    .map((card) => ({ card, progress: progress[card.id] }))
    .filter((item) => item.progress && (item.progress.wrong > 0 || (item.progress.partial ?? 0) > 0 || item.progress.skipped > 0))
    .sort((a, b) => {
      const aScore =
        (a.progress?.wrong ?? 0) * 2 + (a.progress?.partial ?? 0) + (a.progress?.skipped ?? 0) - (a.progress?.correct ?? 0);
      const bScore =
        (b.progress?.wrong ?? 0) * 2 + (b.progress?.partial ?? 0) + (b.progress?.skipped ?? 0) - (b.progress?.correct ?? 0);
      return bScore - aScore;
    })
    .slice(0, 8);

  const totalPracticeSeconds = practiceSessions.reduce((total, session) => total + session.durationSeconds, 0);

  return (
    <section className="panel stats-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Stats</p>
          <h2>Your weak spots</h2>
        </div>
        <button className="ghost-button danger" type="button" onClick={onReset}>
          Reset stats
        </button>
      </div>

      <div className="stats-grid">
        {categoryStats.map((stat) => (
          <article className="stat-card" key={stat.id}>
            <span>{stat.shortLabel}</span>
            <strong>{stat.accuracy}</strong>
            <small>
              {stat.correct} right · {stat.partial} partial · {stat.wrong} wrong · {stat.skipped} skipped · {stat.totalCards} cards
            </small>
          </article>
        ))}
      </div>

      <div className="time-summary">
        <article className="time-card">
          <span>Total recorded practice</span>
          <strong>{formatDuration(totalPracticeSeconds)}</strong>
          <small>{practiceSessions.length} saved timer block{practiceSessions.length === 1 ? '' : 's'}</small>
        </article>

        <article className="time-card">
          <span>Last timer block</span>
          <strong>{practiceSessions.length ? formatDuration(practiceSessions[0].durationSeconds) : '0:00'}</strong>
          <small>{practiceSessions.length ? new Date(practiceSessions[0].stoppedAt).toLocaleString() : 'No saved time yet'}</small>
        </article>
      </div>

      <div className="stats-columns">
        <div>
          <h3>Needs more reps</h3>
          {hardCards.length ? (
            <ul className="question-list">
              {hardCards.map(({ card, progress: cardProgress }) => (
                <li key={card.id}>
                  <b>{card.question}</b>
                  <span>
                    {cardProgress?.correct ?? 0} right · {cardProgress?.partial ?? 0} partial · {cardProgress?.wrong ?? 0} wrong ·{' '}
                    {cardProgress?.skipped ?? 0} skipped
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-state">No weak cards yet. You have to suffer first.</p>
          )}
        </div>

        <div>
          <h3>Recent answers</h3>
          {history.length ? (
            <ul className="question-list">
              {history.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <b>{item.question}</b>
                  <span>
                    {item.finalResult} · auto score {item.score}%
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-state">No answer history yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
