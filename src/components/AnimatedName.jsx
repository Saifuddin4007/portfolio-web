import { useEffect, useRef, useState } from 'react';

export default function AnimatedName() {
  const name = "Saifuddin Khan";
  const [visibleLetters, setVisibleLetters] = useState(0);
  
  // Use a ref for phase so it's always current inside the interval — no stale closure
  const phase = useRef('typing'); // 'typing' | 'pausing' | 'erasing'

  useEffect(() => {
    const interval = setInterval(() => {
      if (phase.current === 'typing') {
        setVisibleLetters(prev => {
          if (prev < name.length) {
            return prev + 1;
          } else {
            // All letters shown — enter pause, then switch to erasing after 1.5s
            phase.current = 'pausing';
            setTimeout(() => {
              phase.current = 'erasing';
            }, 1500);
            return prev;
          }
        });

      } else if (phase.current === 'erasing') {
        setVisibleLetters(prev => {
          if (prev > 0) {
            return prev - 1;
          } else {
            phase.current = 'typing';
            return prev;
          }
        });
      }
      // phase === 'pausing': do nothing, let the setTimeout above fire
    }, 120);

    return () => clearInterval(interval);
  }, []); // Empty deps — runs once, phase.current is always fresh via ref

  return (
    <div className="text-2xl md:text-5xl font-bold m-0 p-0 leading-none"
         style={{
           background: 'linear-gradient(to right, #10b981, #06b6d4)',
           WebkitBackgroundClip: 'text',
           WebkitTextFillColor: 'transparent'
         }}>
      {name.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ease-out ${
            index < visibleLetters
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-5'
          }`}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
}