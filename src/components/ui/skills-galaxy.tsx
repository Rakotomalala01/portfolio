import React, { FC } from 'react';
import Planet from './planet';
import Planet1 from '../../../docs/assets/img/planet_1.png';
import Planet2 from '../../../docs/assets/img/planet_2.png';
import Planet3 from '../../../docs/assets/img/planet_3.png';
import Planet4 from '../../../docs/assets/img/planet_4.png';
import Planet5 from '../../../docs/assets/img/planet_5.png';
import Planet6 from '../../../docs/assets/img/planet_6.png';
import Planet7 from '../../../docs/assets/img/planet_7.png';
import Planet8 from '../../../docs/assets/img/planet_8.png';
import Planet9 from '../../../docs/assets/img/planet_9.png';
import Planet10 from '../../../docs/assets/img/planet_10.png';
import Planet11 from '../../../docs/assets/img/planet_11.png';
import Planet12 from '../../../docs/assets/img/planet_12.png';
import Planet13 from '../../../docs/assets/img/planet_13.png';
import Planet14 from '../../../docs/assets/img/planet_14.png';
import Planet15 from '../../../docs/assets/img/planet_15.png';
import Planet16 from '../../../docs/assets/img/planet_16.png';
import Planet17 from '../../../docs/assets/img/planet_17.png';
import Planet18 from '../../../docs/assets/img/planet_18.png';
import Planet19 from '../../../docs/assets/img/planet_19.png';
import Planet20 from '../../../docs/assets/img/planet_20.png';
import Planet21 from '../../../docs/assets/img/planet_21.png';
import Planet22 from '../../../docs/assets/img/planet_22.png';



import { 
  SiPython,  SiCplusplus, SiJavascript, SiTypescript, SiDart, 
  SiTailwindcss, SiExpress, SiNestjs, SiPostgresql, 
  SiMongodb, SiFirebase,
  SiTensorflow,  
  SiFlutter, 
} from 'react-icons/si';

import { 
  FaJava, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaNodeJs, FaAws, 
  FaDocker, FaFigma
} from 'react-icons/fa';

interface Star {
  id: number;
  top: number;
  left: number;
}

interface EducationGalaxyProps {
  stars: Star[];
}

const EducationGalaxy: FC<EducationGalaxyProps> = ({ stars }) => {
  const planets = [
    // Programming
    { id: 1, text: 'Python', icon: <SiPython style={{ color: '#3776AB' }} />, top: 5, left: 10, size: 120, fadeInDuration: 500, backgroundImage: Planet1 },
    { id: 2, text: 'Java', icon: <FaJava style={{ color: '#007396' }} />, top: 10, left: 25, size: 120, fadeInDuration: 1500, backgroundImage: Planet2 },
    { id: 3, text: 'C++', icon: <SiCplusplus style={{ color: '#00599C' }} />, top: 5, left: 40, size: 120, fadeInDuration: 2500, backgroundImage: Planet3 },
    { id: 4, text: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} />, top: 10, left: 55, size: 120, fadeInDuration: 3500, backgroundImage: Planet4 },
    { id: 5, text: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} />, top: 5, left: 70, size: 120, fadeInDuration: 4500, backgroundImage: Planet5 },
    { id: 6, text: 'Dart', icon: <SiDart style={{ color: '#0175C2' }} />, top: 10, left: 85, size: 120, fadeInDuration: 5500, backgroundImage: Planet6 },
  
    // // Frontend
    { id: 7, text: 'HTML', icon: <FaHtml5 style={{ color: '#E34F26' }} />, top: 17, left: 10, size: 120, fadeInDuration: 11500, backgroundImage: Planet7 },
    { id: 8, text: 'CSS', icon: <FaCss3Alt style={{ color: '#1572B6' }} />, top: 22, left: 25, size: 120, fadeInDuration: 10500, backgroundImage: Planet8 },
    { id: 9, text: 'React', icon: <FaReact style={{ color: '#61DAFB' }} />, top: 17, left: 40, size: 120, fadeInDuration: 9500, backgroundImage: Planet9 },
    { id: 10, text: 'Angular', icon: <FaAngular style={{ color: '#DD0031' }} />, top: 22, left: 55, size: 120, fadeInDuration: 8500, backgroundImage: Planet10 },
    { id: 11, text: 'Tailwind CSS', icon: <SiTailwindcss style={{ color: '#38B2AC' }} />, top: 17, left: 70, size: 120, fadeInDuration: 7500, backgroundImage: Planet11 },
  
    // // Backend
    { id: 12, text: 'Node.js', icon: <FaNodeJs style={{ color: '#339933' }} />, top: 22, left: 85, size: 120, fadeInDuration: 6500, backgroundImage: Planet12 },
    { id: 13, text: 'Express.js', icon: <SiExpress style={{ color: '#000000' }} />, top: 29, left: 10, size: 120, fadeInDuration: 12500, backgroundImage: Planet13 },
    { id: 14, text: 'Nest.js', icon: <SiNestjs style={{ color: '#E0234E' }} />, top: 34, left: 25, size: 120, fadeInDuration: 13500, backgroundImage: Planet14 },
  
    // // Databases
    { id: 15, text: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#336791' }} />, top: 29, left: 40, size: 120, fadeInDuration: 14500, backgroundImage: Planet15 },
    { id: 16, text: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} />, top: 34, left: 55, size: 120, fadeInDuration: 15500, backgroundImage: Planet16 },
    { id: 17, text: 'Firebase', icon: <SiFirebase style={{ color: '#FFCA28' }} />, top: 29, left: 70, size: 120, fadeInDuration: 16500, backgroundImage: Planet17 },
  
    // // Cloud & DevOps
    { id: 18, text: 'AWS', icon: <FaAws style={{ color: '#FF9900' }} />, top: 34, left: 85, size: 120, fadeInDuration: 17500, backgroundImage: Planet18 },
    { id: 19, text: 'Docker', icon: <FaDocker style={{ color: '#2496ED' }} />, top: 45, left: 25, size: 120, fadeInDuration: 18500, backgroundImage: Planet19 },
  
    // // // Machine Learning
    { id: 20, text: 'TensorFlow', icon: <SiTensorflow style={{ color: '#FF6F00' }} />, top: 40, left: 40, size: 120, fadeInDuration: 19500, backgroundImage: Planet20 },
  
    // // Others
    { id: 21, text: 'Figma', icon: <FaFigma style={{ color: '#F24E1E' }} />, top: 45, left: 55, size: 120, fadeInDuration: 20500, backgroundImage: Planet21 },
    { id: 22, text: 'Flutter', icon: <SiFlutter style={{ color: '#02569B' }} />, top: 40, left: 70, size: 120, fadeInDuration: 21500, backgroundImage: Planet22 },
  ];
  
  ;
  
  
  
  
  
  
  return (
    <div className="relative h-[115vh] bg-secondary overflow-hidden">
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

      {planets.map((planet) => (
        <Planet
          key={planet.id}
          top={planet.top}
          left={planet.left}
          size={planet.size}
          backgroundImage={planet.backgroundImage}
          gradient={planet.gradient}
          icon={planet.icon}
          text={planet.text}
          fadeInDuration={planet.fadeInDuration}
        />
      ))}
    </div>
  );
};

export default EducationGalaxy;
