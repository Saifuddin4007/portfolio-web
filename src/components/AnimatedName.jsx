import { useEffect, useRef, useState } from 'react';

export default function AnimatedName() {
    const name = "Saifuddin Khan";
    const [visibleLetters, setVisibleLetters] = useState(0);
    const phase = useRef('typing');

    useEffect(() => {
        const interval = setInterval(() => {
            if (phase.current === 'typing') {
                setVisibleLetters(prev => {
                    if (prev < name.length) {
                        return prev + 1;
                    } else {
                        phase.current = 'pausing';
                        setTimeout(() => { phase.current = 'erasing'; }, 1500);
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
        }, 120);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="font-bold">
            {name.split('').map((letter, index) => (
                <span
                    key={index}
                    style={{
                        background: 'linear-gradient(to right, #3b82f6, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                        transition: 'opacity 300ms ease-out, transform 300ms ease-out',
                        opacity: index < visibleLetters ? 1 : 0,
                        transform: index < visibleLetters ? 'translateX(0)' : 'translateX(-12px)',
                    }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </span>
            ))}
        </span>
    );
}