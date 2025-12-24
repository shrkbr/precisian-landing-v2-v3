import { useState, useEffect } from 'react';

export interface TypingEffectOptions {
  speed?: number;
  delay?: number;
  loop?: boolean;
  pauseOnComplete?: number;
  onComplete?: () => void;
}

/**
 * Hook para simular efeito de digitação character por character
 * Inspirado em terminais e interfaces cyberpunk
 */
export function useTypingEffect(
  text: string,
  options: TypingEffectOptions = {}
): {
  displayText: string;
  isComplete: boolean;
  isTyping: boolean;
  reset: () => void;
} {
  const {
    speed = 50,
    delay = 0,
    loop = false,
    pauseOnComplete = 0,
    onComplete
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const reset = () => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
    setIsTyping(false);
    setHasStarted(false);
  };

  useEffect(() => {
    if (!text || hasStarted) return;

    const startTyping = () => {
      setHasStarted(true);
      setIsTyping(true);
    };

    if (delay > 0) {
      const delayTimer = setTimeout(startTyping, delay);
      return () => clearTimeout(delayTimer);
    } else {
      startTyping();
    }
  }, [text, delay, hasStarted]);

  useEffect(() => {
    if (!hasStarted || !isTyping || isComplete) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Typing complete
      setIsTyping(false);
      setIsComplete(true);
      onComplete?.();

      // Handle loop or pause
      if (loop) {
        const resetTimer = setTimeout(() => {
          if (pauseOnComplete > 0) {
            setTimeout(reset, pauseOnComplete);
          } else {
            reset();
          }
        }, pauseOnComplete);
        return () => clearTimeout(resetTimer);
      }
    }
  }, [currentIndex, text, speed, isTyping, hasStarted, isComplete, loop, pauseOnComplete, onComplete]);

  return {
    displayText,
    isComplete,
    isTyping,
    reset
  };
}

/**
 * Hook para múltiplas linhas de texto com efeito typewriter
 */
export function useMultiLineTyping(
  lines: string[],
  options: TypingEffectOptions & { lineDelay?: number } = {}
): {
  currentLines: string[];
  currentLineIndex: number;
  isComplete: boolean;
  reset: () => void;
} {
  const { lineDelay = 500, ...typingOptions } = options;
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentLines, setCurrentLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const currentLineText = lines[currentLineIndex] || '';

  const { displayText, isComplete: lineComplete } = useTypingEffect(
    currentLineText,
    typingOptions
  );

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      setCurrentLines(prev => {
        const newLines = [...prev];
        newLines[currentLineIndex] = displayText;
        return newLines;
      });
    }
  }, [displayText, currentLineIndex, lines.length]);

  useEffect(() => {
    if (lineComplete && currentLineIndex < lines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
      }, lineDelay);
      return () => clearTimeout(timer);
    } else if (lineComplete && currentLineIndex === lines.length - 1) {
      setIsComplete(true);
    }
  }, [lineComplete, currentLineIndex, lines.length, lineDelay]);

  const reset = () => {
    setCurrentLineIndex(0);
    setCurrentLines([]);
    setIsComplete(false);
  };

  return {
    currentLines,
    currentLineIndex,
    isComplete,
    reset
  };
}