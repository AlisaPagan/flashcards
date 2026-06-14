type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onresult: ((event: SpeechRecognitionResultEventLike) => void) | null;
};

type SpeechRecognitionResultEventLike = {
  resultIndex: number;
  results: {
    length: number;
    [index: number]: {
      isFinal: boolean;
      [index: number]: { transcript: string };
    };
  };
};

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

import { useMemo, useRef, useState } from 'react';

export function useSpeechRecognition(onFinalText: (text: string) => void) {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState('');
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const shouldKeepListeningRef = useRef(false);
  const restartTimerRef = useRef<number | null>(null);

  const isSupported = useMemo(() => {
    return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  }, []);

  function clearRestartTimer() {
    if (restartTimerRef.current !== null) {
      window.clearTimeout(restartTimerRef.current);
      restartTimerRef.current = null;
    }
  }

  function createRecognition() {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) return null;

    const recognition = new Recognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;

    // Chrome still stops after silence sometimes, but this helps.
    recognition.continuous = true;

    recognition.onstart = () => {
      setError('');
      setIsListening(true);
    };

    recognition.onend = () => {
      recognitionRef.current = null;

      if (!shouldKeepListeningRef.current) {
        setIsListening(false);
        return;
      }

      // Browsers often end recognition after a pause. Restart it quietly.
      restartTimerRef.current = window.setTimeout(() => {
        startRecognitionInstance();
      }, 250);
    };

    recognition.onerror = (event) => {
      const errorCode = event.error ?? 'unknown';

      // no-speech happens during normal pauses, so do not scare the user.
      if (errorCode !== 'no-speech') {
        setError(`Speech recognition error: ${errorCode}`);
      }
    };

    recognition.onresult = (event) => {
      let finalTranscript = '';

      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        const result = event.results[index];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
        }
      }

      if (finalTranscript.trim()) {
        onFinalText(finalTranscript.trim());
      }
    };

    return recognition;
  }

  function startRecognitionInstance() {
    const recognition = createRecognition();

    if (!recognition) {
      setError('Speech recognition is not supported in this browser. Use Chrome or Edge for dictation.');
      shouldKeepListeningRef.current = false;
      setIsListening(false);
      return;
    }

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      // This can happen if the browser thinks recognition is already starting.
      // A tiny retry keeps the button from feeling broken.
      restartTimerRef.current = window.setTimeout(() => {
        if (shouldKeepListeningRef.current) startRecognitionInstance();
      }, 300);
    }
  }

  function startListening() {
    clearRestartTimer();
    setError('');
    shouldKeepListeningRef.current = true;
    startRecognitionInstance();
  }

  function stopListening() {
    shouldKeepListeningRef.current = false;
    clearRestartTimer();
    recognitionRef.current?.abort();
    recognitionRef.current = null;
    setIsListening(false);
  }

  return {
    isSupported,
    isListening,
    error,
    startListening,
    stopListening,
  };
}
