import React, { useState, useEffect } from 'react';
import './robot.css';
import SleepEffect from './sleep-effect';
import { LuScanFace } from 'react-icons/lu';
import Smile from './smile';

const RobotHead: React.FC = () => {
  const [isAsleep, setIsAsleep] = useState(true); // Default state: asleep
  const [position, setPosition] = useState(0); // Track vertical position
  const [showSmile, setShowSmile] = useState(false); // Track smile state

  useEffect(() => {
    let interval: number | null = null;
    let timeout: number | null = null;

    // Handle movement effect while asleep
    if (isAsleep) {
      

      // Wake up after 6 seconds
      timeout = window.setTimeout(() => {
        setIsAsleep(false);
        setShowSmile(true);
      }, 6000);
    } else {
      setPosition(0); // Reset position when awake
      interval = window.setInterval(() => {
        setPosition((prev) => (prev === 0 ?18 : 0)); // Toggle position
      }, 1000);
    }

    // Cleanup intervals and timeouts
    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [isAsleep]); // React to changes in isAsleep

  return (
    <div
      className={`w-12 h-12 md:w-16 md:h-16 mt-10 rounded-full 
        shadow-lg border-4 border-gray-500  
        flex items-center justify-center 
        transition-transform duration-1000 ease-in-out border-none 
        transition-all duration-1000 ease-in-out
        ${
          showSmile
            ? 'bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300' // Gradient when smiling
            : 'bg-gradient-to-br from-gray-300 via-gray-400 to-blue-500' // Default gradient
        }
        `}
      style={{
        transform: `translateY(${position}px)`, // Smooth position transition
      }}
    >
      {/* ZZZ effect when asleep */}
      {isAsleep && <SleepEffect />}

      {/* Smooth smile transition */}
      <div
        className={`absolute transition-opacity duration-1000 ease-in-out ${
          showSmile ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Responsive LuScanFace Icon */}
        <Smile className="w-16 h-10 md:w-15 md:h-20 text-blue-700" />

      </div>
    </div>
  );
};

export default RobotHead;
