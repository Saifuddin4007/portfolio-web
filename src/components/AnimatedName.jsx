// Import React hooks that we'll use for state management and side effects
import { useState, useEffect } from 'react';

// Export the component as default so it can be imported elsewhere
export default function AnimatedName() {
  
  // Define the name string that will be animated
  const name = "Saifuddin Khan";
  
  // State to track how many letters are currently visible (starts at 0)
  const [visibleLetters, setVisibleLetters] = useState(0);
  
  // State to track if we're in reverse mode (erasing letters) or not
  const [isReversing, setIsReversing] = useState(false);

  // useEffect runs after component mounts and whenever dependencies change
  useEffect(() => {
    
    // Create a timer that runs every 120 milliseconds (controls animation speed)
    const timer = setInterval(() => {
      
      // Update the visibleLetters state based on current state
      setVisibleLetters(prev => {
        
        // If we're NOT in reversing mode (typing letters)
        if (!isReversing) {
          
          // If we haven't shown all letters yet
          if (prev < name.length) {
            // Show one more letter
            return prev + 1;
          } else {
            // All letters are shown, wait 1.5 seconds then start reversing
            setTimeout(() => setIsReversing(true), 1500);
            // Keep current number of visible letters
            return prev;
          }
          
        } else {
          // We ARE in reversing mode (erasing letters)
          
          // If there are still letters to erase
          if (prev > 0) {
            // Hide one letter
            return prev - 1;
          } else {
            // All letters are hidden, switch back to typing mode
            setIsReversing(false);
            // Keep at 0 visible letters
            return prev;
          }
        }
      });
    }, 120); // Timer runs every 120ms

    // Cleanup function: clear the timer when component unmounts or dependencies change
    return () => clearInterval(timer);
    
  }, [name.length, isReversing]); // Re-run effect when name length or isReversing changes

  // Return the JSX that will be rendered
  return (
    // Main heading element with responsive text sizing and gradient styling
    <div className="text-2xl md:text-5xl font-bold m-0 p-0 leading-none"
         style={{
           // Create a gradient background from green to cyan
           background: 'linear-gradient(to right, #10b981, #06b6d4)',
           // Clip the background to only show on text (webkit browsers)
           WebkitBackgroundClip: 'text',
           // Make text fill transparent so gradient shows through
           WebkitTextFillColor: 'transparent'
         }}>
      
      {/* Split the name into individual characters and map over each one */}
      {name.split('').map((letter, index) => (
        
        // Create a span for each letter with unique key
        <span
          key={index} // React needs unique keys for list items
          
          // Apply CSS classes conditionally based on whether letter should be visible
          className={`inline-block transition-all duration-500 ease-out ${
            // If this letter's index is less than visibleLetters count
            index < visibleLetters
              ? 'opacity-100 transform translate-x-0'    // Show it: full opacity, normal position
              : 'opacity-0 transform -translate-x-12'    // Hide it: transparent, shifted left
          }`}
          
          // Inline style for staggered animation delay
          style={{
            // Each letter has progressively longer delay (index * 80ms)
            // This creates the typewriter effect where letters appear one by one
            transitionDelay: `${index * 80}ms`
          }}
        >
          {/* 
            Render the letter, but if it's a space character, 
            use a non-breaking space (\u00A0) to preserve spacing 
          */}
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
}