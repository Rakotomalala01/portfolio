import { useEffect, useState, useMemo } from "react";

interface FallingDotsProps {
  colors: string[];
  count?: number;
}

const FallingDots: React.FC<FallingDotsProps> = ({
  colors,
  count = 60,
}) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [pageHeight, setPageHeight] = useState(0); // Track the total scrollable height

  // Memoize positions to calculate only once
  const positions = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100, // Random horizontal position
        duration: Math.random() * 15 + 10, // Random fall speed
        delay: Math.random() * 5, // Random delay
      })),
    [count]
  );

  // Update the page height dynamically
  useEffect(() => {
    const updatePageHeight = () => {
      setPageHeight(document.documentElement.scrollHeight); // Total height of the scrollable page
    };

    updatePageHeight();
    window.addEventListener("resize", updatePageHeight);
    return () => window.removeEventListener("resize", updatePageHeight);
  }, []);

  // Cycle through colors
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 3500);

    return () => clearInterval(colorInterval);
  }, [colors.length]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[10]">
      {positions.map((pos, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full shadow-lg animate-fall transition-colors duration-1000 ${colors[colorIndex]}`}
          style={{
            top: "0%",
            left: `${pos.left}%`,
            animationDuration: `${pos.duration}s`,
            animationDelay: `${pos.delay}s`,
          }}
        />
      ))}

      <style>
        {`
          @keyframes fall {
            0%   { transform: translateY(0); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translateY(${pageHeight}px); opacity: 0; }
          }
          @keyframes shimmer {
            0%   { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
          .animate-fall {
            animation: fall infinite linear, shimmer 6s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FallingDots;
