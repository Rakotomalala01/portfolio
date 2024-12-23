import React, { useState, useEffect } from 'react';
import SleepEffect from './sleep-effect';
import Smile from './smile';
import RobotChat from './robot-chat';

const RobotHead: React.FC = () => {
  const [isAsleep, setIsAsleep] = useState(true); // Default state: asleep
  const [position, setPosition] = useState(0); // Track vertical position
  const [showSmile, setShowSmile] = useState(false); // Track smile state
  const [showChat, setShowChat] = useState(false); // Track chat visibility

  const bubbleAndChatStyles =
    'transition-all duration-1000 ease-in-out '; // Unified transition styles

  useEffect(() => {
    let interval: number | null = null;
    let timeout: number | null = null;

    if (isAsleep) {
      // Wake up after 6 seconds
      timeout = window.setTimeout(() => {
        setIsAsleep(false);
        setShowSmile(true);
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

  // Handle click event to show chat
  const handleChatToggle = () => {
    if (!isAsleep) {
      setShowChat(true); // Show chat when clicked

      // Hide chat after 5 seconds
      setTimeout(() => setShowChat(false), 5000);
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
      {/* Robot Head */}
      <div
        onClick={handleChatToggle}
        className={`w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg border-4 border-gray-500 flex items-center justify-center transition-transform duration-1000 ease-in-out border-none ${
          showSmile
            ? 'bg-gradient-to-br from-blue-600 via-blue-400 to-blue-100 cursor-pointer hover:[box-shadow:var(--shadow-blue-strong)]'
            : 'bg-gradient-to-br from-gray-300 via-gray-400 to-blue-500'
        }`}
        style={{ transform: `translateY(${position}px)` }}
      >
        {isAsleep && <SleepEffect />}

        <div
          className={`absolute transition-opacity duration-1000 ease-in-out ${
            showSmile ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Smile className="w-16 h-10 md:w-15 md:h-20 text-background" />
        </div>
      </div>

      {/* Chat Bubble and Main Chat */}
      <div
        className={`relative flex flex-col items-center ${bubbleAndChatStyles} ${
          showChat
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
        style={{ transform: `translateY(${position}px)` }} // Sync vertical movement
      >
        {/* Small bubble */}
        <div className="w-3 h-3 [box-shadow:var(--shadow-blue-strong)] bg-secondary rounded-tr-full flex items-center justify-center border-none shadow-lg ml-3 mt-2"></div>

        {/* Main Chat */}
        <RobotChat message={'Hello! How can I assist you today?'} />
      </div>
    </div>
  );
};

export default RobotHead;
