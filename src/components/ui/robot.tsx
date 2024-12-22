import React, { useState, useEffect } from 'react';
import './robot.css';
import SleepEffect from './sleep-effect';
import Smile from './smile';
import RobotChat from './robot-chat';

const RobotHead: React.FC = () => {
  const [isAsleep, setIsAsleep] = useState(true); // Default state: asleep
  const [position, setPosition] = useState(0); // Track vertical position
  const [showSmile, setShowSmile] = useState(false); // Track smile state
  const [showChat, setShowChat] = useState(false); // Track chat visibility

  const smallBubbleStyles = "w-3 h-3 bg-secondary rounded-tr-full flex items-center justify-center border-none [box-shadow:var(--shadow-blue-strong)] ml-3 mt-2";

  useEffect(() => {
    let interval: number | null = null;
    let timeout: number | null = null;

    if (isAsleep) {
      // Wake up after 6 seconds
      timeout = window.setTimeout(() => {
        setIsAsleep(false);
        setShowSmile(true);

        // Delay showing chat after smile
        setTimeout(() => setShowChat(true), 800); // Smooth delay for chat
      }, 6000);
    } else {
      setPosition(0); // Reset position when awake
      interval = window.setInterval(() => {
        setPosition((prev) => (prev === 0 ? 18 : 0)); // Toggle position
      }, 1000);
    }

    // Cleanup
    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [isAsleep]);

  return (
    <div className="flex flex-col items-center mt-6 ">
      {/* Robot Head */}
      <div
        className={`w-12 h-12 md:w-16 md:h-16 rounded-full 
          shadow-lg border-4 border-gray-500  
          flex items-center justify-center 
          transition-transform duration-1000 ease-in-out border-none 
          ${
            showSmile
              ? 'bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300' // Smiling gradient
              : 'bg-gradient-to-br from-gray-300 via-gray-400 to-blue-500' // Default gradient
          }
        `}
        style={{
          transform: `translateY(${position}px)`,
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
          <Smile className="w-16 h-10 md:w-15 md:h-20 text-background" />
        </div>
      </div>

      {/* Robot Chat */}
      {/* Robot Chat */}
<div
  className={`${smallBubbleStyles}`}
  style={{
    transform: `translateY(${position}px)`, // Moves with the robot head
    transition: 'transform 1s ease-in-out', // Smooth movement
  }}
></div>

<div
  className={`transition-transform duration-1000 ease-in-out transform ${
    showChat ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
  }`}
  style={{
    transform: `translateY(${position}px)`, // Moves with the robot head
    transition: 'transform 1s ease-in-out', // Smooth transition effect
  }}
>
  <RobotChat message={'Hello! How can I assist you today?'} />
</div>

    </div>
  );
};

export default RobotHead;
