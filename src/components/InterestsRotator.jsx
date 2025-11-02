import React from "react";
import {ReactTyped } from "react-typed";

const InterestsRotator  = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
        I’m passionate about
      </h2>

      <h1 className="text-2xl sm:text-3xl font-bold text-indigo-600 mt-2">
        <ReactTyped
          strings={[
            "💻 Backend Engineering",
            "🔒 Cybersecurity",
            "🎮 Game Dev",
          ]}
          typeSpeed={60}     // typing speed
          backSpeed={40}     // backspacing speed
          loop               // infinite loop
        />
      </h1>
    </div>
  );
};

export default InterestsRotator ;
