import { useState, useEffect } from 'react';

export default function AnimatedName() {
  const name = "Saifuddin Khan";
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters(prev => {
        if (!isReversing) {
          if (prev < name.length) {
            return prev + 1;
          } else {
            setTimeout(() => setIsReversing(true), 1500);
            return prev;
          }
        } else {
          if (prev > 0) {
            return prev - 1;
          } else {
            setIsReversing(false);
            return prev;
          }
        }
      });
    }, 120);

    return () => clearInterval(timer);
  }, [name.length, isReversing]);

  return (
    <h1 className="text-2xl md:text-5xl font-bold m-0 p-0 leading-none" 
        style={{
          background: 'linear-gradient(to right, #10b981, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
      {name.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out ${
            index < visibleLetters
              ? 'opacity-100 transform translate-x-0'
              : 'opacity-0 transform -translate-x-12'
          }`}
          style={{
            transitionDelay: `${index * 80}ms`
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  );
}