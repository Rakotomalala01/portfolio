import React from "react";
import { FaSpaceShuttle } from "react-icons/fa";

const SpaceshipChase: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes mooveKeyframes {
            0% {
              transform: translateX(0vw);
            }
            100% {
              transform: translateX(120vw);
            }
          }

          @keyframes fadeInOut {
            0%, 87%, 100% {
              opacity: 0;
            }
            70%, 74%, 78%, 82%, 86% {
              opacity: 1;
            }
            68%, 72%, 76%, 80%, 84% {
              opacity: 0;
            }
          }

          .animate-fadeInOut {
            animation: fadeInOut 5s ease-in-out infinite;
          }

          .move {
            animation: mooveKeyframes 8s linear infinite;
          }
        `}
      </style>

      <div className="absolute move left-0 top-[60%] w-full h-0 pointer-events-none">
        <div className="relative flex items-center left-[-20%]">
          <span className="text-2xl"><FaSpaceShuttle className="text-white"/></span>
          <div
            className={`
                bg-destructive
                w-8 h-[3px]
                animate-fadeInOut
                shadow-[0_0_10px_rgba(239,68,68,0.75)]
                filter
                glow
              `}
              
          ></div>
          <span className="text-2xl">👾</span>
        </div>
      </div>
    </>
  );
};

export default SpaceshipChase;
