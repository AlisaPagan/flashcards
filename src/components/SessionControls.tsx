type SessionControlsProps = {
  currentIndex: number;
  totalCards: number;
  onPrevious: () => void;
  onNext: () => void;
  onSkip: () => void;
  onFinish: () => void;
};

export function SessionControls({ currentIndex, totalCards, onPrevious, onNext, onSkip, onFinish }: SessionControlsProps) {
  return (
    <div className="session-controls panel">
      <button type="button" onClick={onPrevious} disabled={currentIndex === 0}>
        Previous
      </button>
      <button type="button" onClick={onNext} disabled={currentIndex === totalCards - 1}>
        Next
      </button>
      <button type="button" onClick={onSkip}>
        Skip
      </button>
      <button className="finish-button" type="button" onClick={onFinish}>
        Finish session
      </button>
    </div>
  );
}
