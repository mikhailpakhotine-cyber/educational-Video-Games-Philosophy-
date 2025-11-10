import { useState, useEffect } from 'react';

export default function TerminalText({ text, speed = 50, className = '', showCursor = true }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`font-mono ${className} ${showCursor && currentIndex < text.length ? 'terminal-cursor' : ''}`}>
      {displayedText}
    </span>
  );
}
