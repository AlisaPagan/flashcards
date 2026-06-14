import { useMemo, useState } from 'react';
import { AnswerBox } from './components/AnswerBox';
import { CategorySelect } from './components/CategorySelect';
import { FlashCard } from './components/FlashCard';
import { PracticeTimer } from './components/PracticeTimer';
import { SessionControls } from './components/SessionControls';
import { StatsPanel } from './components/StatsPanel';
import { cards } from './data/cards';
import { getCategoryLabel, sessionCategories } from './data/categories';
import type { AnswerHistoryItem, Flashcard, PracticeSessionItem, ProgressMap, ResultKind, ScoreResult, SessionCategory, SessionResult } from './types';
import { scoreAnswer } from './utils/scoring';
import { buildSessionDeck } from './utils/session';
import { addHistoryItem, addPracticeSession, clearSavedPractice, loadHistory, loadPracticeSessions, loadProgress, updateCardProgress } from './utils/storage';

function getCardCounts(): Record<SessionCategory, number> {
  const counts = {} as Record<SessionCategory, number>;

  for (const category of sessionCategories) {
    counts[category.id] = category.id === 'mixed' ? cards.length : cards.filter((card) => card.category === category.id).length;
  }

  return counts;
}

function getSafeCard(deck: Flashcard[], currentIndex: number): Flashcard | undefined {
  return deck[Math.min(currentIndex, deck.length - 1)];
}

export default function App() {
  const [progress, setProgress] = useState<ProgressMap>(() => loadProgress());
  const [history, setHistory] = useState<AnswerHistoryItem[]>(() => loadHistory());
  const [practiceSessions, setPracticeSessions] = useState<PracticeSessionItem[]>(() => loadPracticeSessions());
  const [selectedCategory, setSelectedCategory] = useState<SessionCategory | null>(null);
  const [sessionDeck, setSessionDeck] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const cardCounts = useMemo(() => getCardCounts(), []);
  const currentCard = getSafeCard(sessionDeck, currentIndex);

  function resetCardUi() {
    setAnswer('');
    setScoreResult(null);
    setIsFlipped(false);
  }

  function savePracticeTime(session: Omit<SessionResult, 'id'>) {
    const nextSessions = addPracticeSession(session);
    setPracticeSessions(nextSessions);
  }

  function startSession(category: SessionCategory) {
    const newDeck = buildSessionDeck(cards, category, progress);
    setSelectedCategory(category);
    setSessionDeck(newDeck);
    setCurrentIndex(0);
    setIsFinished(false);
    resetCardUi();
  }

  function goToCard(nextIndex: number) {
    if (!sessionDeck.length) return;
    const safeIndex = Math.max(0, Math.min(nextIndex, sessionDeck.length - 1));
    setCurrentIndex(safeIndex);
    resetCardUi();
  }

  function moveForward() {
    if (currentIndex >= sessionDeck.length - 1) {
      setIsFinished(true);
      return;
    }

    goToCard(currentIndex + 1);
  }

  function checkCurrentAnswer() {
    if (!currentCard) return;
    setScoreResult(scoreAnswer(answer, currentCard));
  }

  function recordResult(result: ResultKind) {
    if (!currentCard) return;

    const autoScore = scoreResult ?? scoreAnswer(answer, currentCard);
    const nextProgress = updateCardProgress(progress, currentCard.id, result);
    setProgress(nextProgress);

    if (result !== 'skipped') {
      const nextHistory = addHistoryItem({
        cardId: currentCard.id,
        category: currentCard.category,
        question: currentCard.question,
        userAnswer: answer,
        autoPassed: autoScore.passed,
        finalResult: result,
        score: autoScore.score,
      });
      setHistory(nextHistory);
    }

    moveForward();
  }

  function finishSession() {
    setIsFinished(true);
  }

  function resetStats() {
    const confirmed = window.confirm('Reset all saved stats and answer history?');
    if (!confirmed) return;

    clearSavedPractice();
    setProgress({});
    setHistory([]);
    setPracticeSessions([]);
  }

  function backToCategories() {
    setSelectedCategory(null);
    setSessionDeck([]);
    setCurrentIndex(0);
    setIsFinished(false);
    resetCardUi();
  }

  if (!selectedCategory) {
    return (
      <main className="app-shell">
        <PracticeTimer onSessionSaved={savePracticeTime} />
        <CategorySelect cardCounts={cardCounts} onStart={startSession} />
        <StatsPanel cards={cards} progress={progress} history={history} practiceSessions={practiceSessions} onReset={resetStats} />
      </main>
    );
  }

  if (isFinished || !currentCard) {
    return (
      <main className="app-shell">
        <PracticeTimer onSessionSaved={savePracticeTime} />
        <section className="panel session-summary">
          <p className="eyebrow">Session finished</p>
          <h1>{getCategoryLabel(selectedCategory)}</h1>
          <p>You can start another set now. Failed and skipped cards will be weighted heavier next time.</p>
          <div className="summary-actions">
            <button className="primary-button" type="button" onClick={() => startSession(selectedCategory)}>
              Restart same category
            </button>
            <button className="ghost-button" type="button" onClick={backToCategories}>
              Pick another category
            </button>
          </div>
        </section>
        <StatsPanel cards={cards} progress={progress} history={history} practiceSessions={practiceSessions} onReset={resetStats} />
      </main>
    );
  }

  return (
    <main className="app-shell practice-layout">
      <header className="practice-header panel">
        <div>
          <p className="eyebrow">{getCategoryLabel(selectedCategory)}</p>
          <h1>
            Card {currentIndex + 1} / {sessionDeck.length}
          </h1>
        </div>
        <button className="ghost-button" type="button" onClick={backToCategories}>
          Change category
        </button>
      </header>

      <PracticeTimer onSessionSaved={savePracticeTime} />

      <section className="practice-main">
        <div>
          <FlashCard card={currentCard} isFlipped={isFlipped} onFlip={() => setIsFlipped((value: boolean) => !value)} />
          <SessionControls
            currentIndex={currentIndex}
            totalCards={sessionDeck.length}
            onPrevious={() => goToCard(currentIndex - 1)}
            onNext={() => goToCard(currentIndex + 1)}
            onSkip={() => recordResult('skipped')}
            onFinish={finishSession}
          />
        </div>

        <AnswerBox
          card={currentCard}
          answer={answer}
          scoreResult={scoreResult}
          onAnswerChange={setAnswer}
          onCheck={checkCurrentAnswer}
          onMark={recordResult}
        />
      </section>

      <StatsPanel cards={cards} progress={progress} history={history} practiceSessions={practiceSessions} onReset={resetStats} />
    </main>
  );
}
