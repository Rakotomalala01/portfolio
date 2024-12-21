import React, { useState, useEffect } from 'react';
import './robot.css'
import SleepEffect from './sleep-effect';
const RobotHead: React.FC = () => {
  const [isAsleep, setIsAsleep] = useState(true); // Default state: asleep
  const [position, setPosition] = useState(0); // Track vertical position

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isAsleep) {
      interval = setInterval(() => {
        setPosition((prev) => (prev === 0 ? 10 : 0)); // Toggle position between 0 and 10px
      }, 1000); // Slow movement every 1000ms (1 second)
    } else {
      if (interval) clearInterval(interval); // Stop movement when awake
      setPosition(0); // Reset position
    }

    return () => {
      if (interval) clearInterval(interval); // Cleanup interval on unmount
    };
  }, [isAsleep]); // React to changes in isAsleep

  const toggleSleep = () => {
    setIsAsleep(!isAsleep); // Toggle the isAsleep state on click
  };

  return (
    <div
      onClick={toggleSleep} // Toggle state on click
      className="w-12 h-12 md:w-16 md:h-16 mt-10 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-blue-500 shadow-lg border-4 border-gray-500 cursor-pointer flex items-center justify-center transition-transform duration-1000 ease-in-out relative"
      style={{
        transform: `translateY(${position}px)`, // Move up and down
      }}
    >
      {/* ZZZ effect */}
      {isAsleep && (
        <SleepEffect/>
      )}
    </div>
  );
};

export default RobotHead;
