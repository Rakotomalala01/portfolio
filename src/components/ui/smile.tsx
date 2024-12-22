import React from 'react';

const Smile: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Amazon-like smile curve */}


      <path d="M8 15c2 2 6 2 8 0" />
    </svg>
  );
};

export default Smile;
