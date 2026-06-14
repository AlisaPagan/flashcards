import { useEffect, useMemo, useState } from 'react';
import type { SessionResult, TimerState } from '../types';
import { formatDuration } from '../utils/time';

type PracticeTimerProps = {
  onSessionSaved: (session: Omit<SessionResult, 'id'>) => void;
};

const TIMER_KEY = 'interview-flashcards-active-timer';

function loadTimerState(): TimerState {
  try {
    const saved = localStorage.getItem(TIMER_KEY);
    if (!saved) {
      return { runningSince: null, startedAt: null, lastSavedSeconds: 0 };
    }

    const parsed = JSON.parse(saved) as Partial<TimerState>;
    return {
      runningSince: typeof parsed.runningSince === 'number' ? parsed.runningSince : null,
      startedAt: parsed.startedAt ?? null,
      lastSavedSeconds: typeof parsed.lastSavedSeconds === 'number' ? parsed.lastSavedSeconds : 0,
    };
  } catch {
    return { runningSince: null, startedAt: null, lastSavedSeconds: 0 };
  }
}

function saveTimerState(state: TimerState) {
  localStorage.setItem(TIMER_KEY, JSON.stringify(state));
}

export function PracticeTimer({ onSessionSaved }: PracticeTimerProps) {
  const savedState = useMemo(() => loadTimerState(), []);
  const [runningSince, setRunningSince] = useState<number | null>(savedState.runningSince);
  const [startedAt, setStartedAt] = useState<string | null>(savedState.startedAt);
  const [lastSavedSeconds, setLastSavedSeconds] = useState(savedState.lastSavedSeconds);
  const [now, setNow] = useState(() => Date.now());

  const isRunning = runningSince !== null;
  const elapsedSeconds = runningSince ? Math.floor((now - runningSince) / 1000) : 0;

  useEffect(() => {
    saveTimerState({ runningSince, startedAt, lastSavedSeconds });
  }, [runningSince, startedAt, lastSavedSeconds]);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isRunning]);

  function startTimer() {
    if (isRunning) return;

    const startTime = Date.now();
    setStartedAt(new Date(startTime).toISOString());
    setRunningSince(startTime);
    setNow(startTime);
  }

  function stopTimer() {
    if (!runningSince || !startedAt) return;

    const stoppedAt = new Date();
    const durationSeconds = Math.max(1, Math.floor((stoppedAt.getTime() - runningSince) / 1000));

    onSessionSaved({
      durationSeconds,
      startedAt,
      stoppedAt: stoppedAt.toISOString(),
    });

    setLastSavedSeconds(durationSeconds);
    setRunningSince(null);
    setStartedAt(null);
  }

  function resetTimer() {
    setRunningSince(null);
    setStartedAt(null);
    setLastSavedSeconds(0);
    setNow(Date.now());
  }

  return (
    <section className="panel timer-panel">
      <div>
        <p className="eyebrow">Practice timer</p>
        <strong>{formatDuration(elapsedSeconds)}</strong>
        <span>{isRunning ? 'Timer is running' : lastSavedSeconds > 0 ? `Last practice: ${formatDuration(lastSavedSeconds)}` : 'Start it before you begin'}</span>
      </div>

      <div className="timer-actions">
        <button className="primary-button" type="button" onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button className="finish-button" type="button" onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button className="ghost-button" type="button" onClick={resetTimer} disabled={isRunning || (elapsedSeconds === 0 && lastSavedSeconds === 0)}>
          Reset
        </button>
      </div>
    </section>
  );
}
