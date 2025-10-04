import { FC } from "react";
import Experience from "./experience"; // 👈 updated import

interface Star {
  id: number;
  top: number;
  left: number;
}

interface ExperienceGalaxyProps {
  stars: Star[];
}

const ExperienceGalaxy: FC<ExperienceGalaxyProps> = ({ stars }) => {
  return (
    <div className="relative h-[1200px] bg-secondary overflow-hidden">
      {/* Stars background */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse z-10"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: "2px",
            height: "2px",
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Main content */}
      <Experience />
    </div>
  );
};

export default ExperienceGalaxy;
