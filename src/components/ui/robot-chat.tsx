import React from 'react';

const chatBubbleStyles = "bg-secondary text-white [box-shadow:var(--shadow-blue-strong)] px-3";



interface RobotChatProps {
  message: string;
}

const RobotChat: React.FC<RobotChatProps> = ({ message }) => {
  return (

      <div className={`relative p-3 rounded-md max-w-xs ${chatBubbleStyles}`}>
        {message}
      </div>
  );
};

export default RobotChat;
