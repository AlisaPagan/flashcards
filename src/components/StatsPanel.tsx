import { useEffect, useState } from 'react';
import { categories } from '../data/categories';
import type { AnswerHistoryItem, Flashcard, PracticeLogItem, PracticeSessionItem, ProgressMap, ResultKind } from '../types';
import { formatDuration } from '../utils/time';

type StatsPanelProps = {
  cards: Flashcard[];
  progress: ProgressMap;
  history: AnswerHistoryItem[];
  practiceSessions: PracticeSessionItem[];
  currentPracticeLog: PracticeLogItem[];
  onClearCurrentPracticeLog: () => void;
  onReset: () => void;
};

const resultLabels: Record<ResultKind, string> = {
  correct: 'Correct',
  partial: 'Partial',
  wrong: 'Wrong',
  skipped: 'Skipped',
};

function escapeCsvField(value: string | number): string {
  return `"${String(value).replace(/"/g, '""')}"`;
}

function downloadPracticeLog(log: PracticeLogItem[]): void {
  const headers = ['Date', 'Category', 'Result', 'Auto Score', 'Question', 'My Answer', 'Official Answer', 'Matched Keywords', 'Missing Keywords'];
  const rows = log.map((item) => [
    new Date(item.createdAt).toLocaleString(),
    categories.find((category) => category.id === item.category)?.label ?? item.category,
    resultLabels[item.finalResult],
    item.autoScore === null ? '' : `${item.autoScore}%`,
    item.question,
    item.userAnswer,
    item.officialAnswer,
    item.matchedKeywords.join(', '),
    item.missingKeywords.join(', '),
  ]);
  const csv = [headers, ...rows].map((row) => row.map(escapeCsvField).join(',')).join('\r\n');
  const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `interview-practice-log-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getAccuracy(correct: number, partial: number, wrong: number) {
  const total = correct + partial + wrong;
  if (!total) return '0%';

  // Partial answers count as half-credit for the big percentage.
  return `${Math.round(((correct + partial * 0.5) / total) * 100)}%`;
}

export function StatsPanel({ cards, progress, history, practiceSessions, currentPracticeLog, onClearCurrentPracticeLog, onReset }: StatsPanelProps) {
  const [isLogOpen, setIsLogOpen] = useState(false);

  useEffect(() => {
    if (!isLogOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsLogOpen(false);
    }

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isLogOpen]);

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

      <div className="practice-log-summary">
        <div>
          <h3>Current Practice Log</h3>
          <p>Practice log keeps questions until you clear it. CSV opens in Excel or Google Sheets.</p>
        </div>
        <div className="practice-log-actions">
          <button className="ghost-button" type="button" onClick={() => setIsLogOpen(true)}>
            View full practice log ({currentPracticeLog.length})
          </button>
          <button className="primary-button" type="button" disabled={!currentPracticeLog.length} onClick={() => downloadPracticeLog(currentPracticeLog)}>
            Download CSV
          </button>
        </div>
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

      {isLogOpen && (
        <div className="modal-overlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setIsLogOpen(false);
        }}>
          <section className="practice-log-modal" role="dialog" aria-modal="true" aria-labelledby="practice-log-title">
            <div className="section-heading practice-log-modal-heading">
              <div>
                <p className="eyebrow">Current study run</p>
                <h2 id="practice-log-title">Full practice log</h2>
              </div>
              <div className="practice-log-modal-actions">
                <button className="ghost-button danger" type="button" disabled={!currentPracticeLog.length} onClick={onClearCurrentPracticeLog}>
                  Clear practice log
                </button>
                <button className="ghost-button" type="button" onClick={() => setIsLogOpen(false)} aria-label="Close practice log">
                  Close
                </button>
              </div>
            </div>

            {currentPracticeLog.length ? (
              <div className="practice-log-list">
                {currentPracticeLog.map((item) => (
                  <article className="practice-log-item" key={item.id}>
                    <div className="practice-log-meta">
                      <span>{categories.find((category) => category.id === item.category)?.label ?? item.category}</span>
                      <span className={`result-badge ${item.finalResult}`}>{resultLabels[item.finalResult]}</span>
                      <span>{item.autoScore === null ? 'No auto score' : `Auto score ${item.autoScore}%`}</span>
                      <time dateTime={item.createdAt}>{new Date(item.createdAt).toLocaleString()}</time>
                    </div>
                    <h3>{item.question}</h3>
                    <div className="practice-log-answer-grid">
                      <div>
                        <b>My answer</b>
                        <p>{item.userAnswer || 'No answer provided.'}</p>
                      </div>
                      <div>
                        <b>Official answer</b>
                        <p>{item.officialAnswer}</p>
                      </div>
                    </div>
                    {(item.matchedKeywords.length > 0 || item.missingKeywords.length > 0) && (
                      <div className="practice-log-keywords">
                        <span><b>Matched:</b> {item.matchedKeywords.join(', ') || 'None'}</span>
                        <span><b>Missing:</b> {item.missingKeywords.join(', ') || 'None'}</span>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <p className="empty-state">No questions in this practice log yet. Mark or skip a card to add it.</p>
            )}
          </section>
        </div>
      )}
    </section>
  );
}
