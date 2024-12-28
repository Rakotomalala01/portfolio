import  { FC } from 'react';
import Education from './education';

interface Star {
  id: number;
  top: number;
  left: number;
}

interface EducationGalaxyProps {
  stars: Star[]; // Prop to accept an array of stars
}

const EducationGalaxy: FC<EducationGalaxyProps> = ({ stars }) => {
  return (
    <div className="relative h-[1200px] bg-secondary overflow-hidden">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse z-10"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: '2px',
            height: '2px',
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <Education />
    </div>
  );
};

export default EducationGalaxy;
