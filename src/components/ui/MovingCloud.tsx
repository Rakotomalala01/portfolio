import React from "react";

interface MovingCloudProps {
  zIndex?: number; 
}

const MovingCloud: React.FC<MovingCloudProps> = ({ zIndex = 0 }) => { 
  return (
    <>
      <style>
        {`
          @keyframes cloudMove {
            0% { transform: translateX(-10%); }
            100% { transform: translateX(64vw); } /* Default for smaller screens */
          }

          @media (min-width: 768px) { /* Medium screens (md) */
            @keyframes cloudMove {
              0% { transform: translateX(-10%); }
              100% { transform: translateX(96vw); } /* Adjusted for tablets and larger screens */
            }
          }

  
          .animate-cloudMove {
            animation: cloudMove 45s linear infinite;
          }
        `}
      </style>
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex }} 
      >
        <div className="absolute top-20 left-[-15%] w-[250px] h-[60px] bg-white opacity-30 rounded-full blur-2xl animate-cloudMove"></div>

        <div className="absolute top-1/4 left-[-20%] w-[250px] h-[70px] bg-white opacity-30 rounded-full blur-2xl animate-cloudMove delay-[2s]"></div>
        <div className="absolute top-1/3 left-[-60%] w-[180px] h-[50px] bg-white opacity-30 rounded-full blur-2xl animate-cloudMove delay-[4s]"></div>
        <div className="absolute top-[70%] left-[-30%] w-[220px] h-[60px] bg-white opacity-30 rounded-full blur-2xl animate-cloudMove delay-[6s]"></div>
      </div>
    </>
  );
};

export default MovingCloud;
