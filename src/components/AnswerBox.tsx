import { type ChangeEvent, useEffect, useRef } from 'react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import type { Flashcard, ResultKind, ScoreResult } from '../types';

type AnswerBoxProps = {
  card: Flashcard;
  answer: string;
  scoreResult: ScoreResult | null;
  onAnswerChange: (answer: string) => void;
  onCheck: () => void;
  onMark: (result: Exclude<ResultKind, 'skipped'>) => void;
};

function getAutoCheckText(scoreResult: ScoreResult) {
  if (scoreResult.suggestedResult === 'correct') return 'Auto-check: probably correct';
  if (scoreResult.suggestedResult === 'partial') return 'Auto-check: partly there';
  return 'Auto-check: probably weak';
}

export function AnswerBox({ card, answer, scoreResult, onAnswerChange, onCheck, onMark }: AnswerBoxProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const latestAnswerRef = useRef(answer);

  useEffect(() => {
    latestAnswerRef.current = answer;
  }, [answer]);

  const speech = useSpeechRecognition((text) => {
    const currentAnswer = latestAnswerRef.current.trim();
    const nextAnswer = currentAnswer ? `${currentAnswer} ${text}` : text;

    latestAnswerRef.current = nextAnswer;
    onAnswerChange(nextAnswer);

    // Put focus back after the browser inserts dictated text.
    window.setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
  });

  function handleAnswerChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onAnswerChange(event.target.value);
  }

  return (
    <section className="panel answer-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your answer</p>
          <h2>Type it or say it out loud</h2>
        </div>
        <button
          className={`ghost-button ${speech.isListening ? 'danger' : ''}`}
          type="button"
          disabled={!speech.isSupported}
          onClick={speech.isListening ? speech.stopListening : speech.startListening}
        >
          {speech.isListening ? 'Stop dictation' : 'Start dictation'}
        </button>
      </div>

      {!speech.isSupported && <p className="warning">Dictation needs a browser with SpeechRecognition, usually Chrome or Edge.</p>}
      {speech.error && <p className="warning">{speech.error}</p>}
      {speech.isListening && <p className="listening-note">Listening. You can pause between thoughts, the app will try to resume automatically.</p>}

      <textarea
        ref={textareaRef}
        value={answer}
        onChange={handleAnswerChange}
        placeholder="Explain it like you would in an interview. Short is fine if the main idea is there."
      />

      <div className="answer-actions">
        <button className="primary-button" type="button" onClick={onCheck} disabled={!answer.trim()}>
          Check answer
        </button>
        <button className="success-button" type="button" onClick={() => onMark('correct')}>
          I was right
        </button>
        <button className="partial-button" type="button" onClick={() => onMark('partial')}>
          Almost / partial
        </button>
        <button className="danger-button" type="button" onClick={() => onMark('wrong')}>
          I was wrong
        </button>
      </div>

      {scoreResult && (
        <div className={`score-box ${scoreResult.suggestedResult}`}>
          <strong>{getAutoCheckText(scoreResult)}</strong>
          <span>{scoreResult.score}% idea match</span>

          <div className="keyword-grid">
            <div>
              <b>Detected ideas</b>
              <p>{scoreResult.matched.length ? scoreResult.matched.join(', ') : 'Nothing useful yet'}</p>
            </div>
            <div>
              <b>Still missing</b>
              <p>{scoreResult.missing.length ? scoreResult.missing.join(', ') : 'Nothing major missing'}</p>
            </div>
          </div>

          <small>
            Auto-check is only a hint. Your Correct / Partial / Wrong button is what saves the real result.
          </small>
        </div>
      )}
    </section>
  );
}
