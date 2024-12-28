import  { FC } from 'react';
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
  FaDocker, FaFigma,
  FaCloud,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaServer,
} from 'react-icons/fa';
import { Carousel, CarouselContent, CarouselItem,  CarouselNextV2, CarouselPreviousV2 } from './carousel';
import { Card, CardContent } from './card';

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
    { id: 1, text: 'Python', icon: <SiPython style={{ color: '#3776AB' }} />, top: 5, left: 10, size: 120, backgroundImage: Planet1 },
    { id: 2, text: 'Java', icon: <FaJava style={{ color: '#007396' }} />, top: 10, left: 25, size: 120, backgroundImage: Planet2 },
    { id: 3, text: 'C++', icon: <SiCplusplus style={{ color: '#00599C' }} />, top: 5, left: 40, size: 120, backgroundImage: Planet3 },
    { id: 4, text: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} />, top: 10, left: 55, size: 120, backgroundImage: Planet4 },
    { id: 5, text: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} />, top: 5, left: 70, size: 120, backgroundImage: Planet5 },
    { id: 6, text: 'Dart', icon: <SiDart style={{ color: '#0175C2' }} />, top: 10, left: 85, size: 120, backgroundImage: Planet6 },
  
    // Frontend
    { id: 7, text: 'HTML', icon: <FaHtml5 style={{ color: '#E34F26' }} />, top: 17, left: 10, size: 120, backgroundImage: Planet7 },
    { id: 8, text: 'CSS', icon: <FaCss3Alt style={{ color: '#1572B6' }} />, top: 22, left: 25, size: 120, backgroundImage: Planet8 },
    { id: 9, text: 'React', icon: <FaReact style={{ color: '#61DAFB' }} />, top: 17, left: 40, size: 120, backgroundImage: Planet9 },
    { id: 10, text: 'Angular', icon: <FaAngular style={{ color: '#DD0031' }} />, top: 22, left: 55, size: 120, backgroundImage: Planet10 },
    { id: 11, text: 'Tailwind CSS', icon: <SiTailwindcss style={{ color: '#38B2AC' }} />, top: 17, left: 70, size: 120, backgroundImage: Planet11 },
  
    // Backend
    { id: 12, text: 'Node.js', icon: <FaNodeJs style={{ color: '#339933' }} />, top: 22, left: 85, size: 120, backgroundImage: Planet12 },
    { id: 13, text: 'Express.js', icon: <SiExpress style={{ color: '#000000' }} />, top: 29, left: 10, size: 120, backgroundImage: Planet13 },
    { id: 14, text: 'Nest.js', icon: <SiNestjs style={{ color: '#E0234E' }} />, top: 34, left: 25, size: 120, backgroundImage: Planet14 },
  
    // Databases
    { id: 15, text: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#000000' }} />, top: 29, left: 40, size: 120, backgroundImage: Planet15 },
    { id: 16, text: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} />, top: 34, left: 55, size: 120, backgroundImage: Planet16 },
    { id: 17, text: 'Firebase', icon: <SiFirebase style={{ color: '#FFCA28' }} />, top: 29, left: 70, size: 120, backgroundImage: Planet17 },
  
    // Cloud & DevOps
    { id: 18, text: 'AWS', icon: <FaAws style={{ color: '#FF9900' }} />, top: 34, left: 85, size: 120, backgroundImage: Planet18 },
    { id: 19, text: 'Docker', icon: <FaDocker style={{ color: '#2496ED' }} />, top: 45, left: 25, size: 120, backgroundImage: Planet19 },
  
    // Machine Learning
    { id: 20, text: 'TensorFlow', icon: <SiTensorflow style={{ color: '#FF6F00' }} />, top: 40, left: 40, size: 120, backgroundImage: Planet20 },
  
    // Others
    { id: 21, text: 'Figma', icon: <FaFigma style={{ color: '#F24E1E' }} />, top: 45, left: 55, size: 120, backgroundImage: Planet21 },
    { id: 22, text: 'Flutter', icon: <SiFlutter style={{ color: '#02569B' }} />, top: 40, left: 70, size: 120, backgroundImage: Planet22 },
  ];
  
  const planetGroups = {
    programming: {
      icon: <FaCode style={{ color: '#61DAFB' }} />, // Icon for programming
      planets: planets.slice(0, 6), // IDs 1-6
    },
    frontend: {
      icon: <FaLaptopCode style={{ color: '#E34F26' }} />, // Icon for frontend
      planets: [
        ...planets.slice(6, 11), // IDs 7-11
        ...planets.slice(21, 22), // IDs 21-22 (Figma and Flutter)
      ],
    },
    backendServices: { // Combined backend, databases, and cloud
      icon: (
        <div className="flex space-x-2">
          <FaServer style={{ color: '#4DB33D' }} />
          <FaDatabase style={{ color: '#336791' }} />
          <FaCloud style={{ color: '#FF9900' }} />
        </div>
      ), // Combined icons for backend services
      planets: [
        ...planets.slice(11, 14), // IDs 12-14 (Backend)
      ],
    },
    AIDatabases: { // Combined AI and Databases
      icon: (
        <div className="flex space-x-2">
          <SiTensorflow style={{ color: '#FF6F00' }} />
          <SiPostgresql style={{ color: '#336791' }} />
          <SiMongodb style={{ color: '#47A248' }} />
        </div>
      ), // Combined icons for AI and Databases
      planets: [
        ...planets.slice(19, 20), // ID 20 (AI)
        ...planets.slice(14, 17), // IDs 15-17 (Databases)
      ],
    },

  };
  
  
  return (
  <div className="relative h-[1200px] bg-secondary overflow-hidden">
    {/* Star Background */}
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

    {/* Carousel Container */}
    <div className="absolute inset-0 flex flex-col justify-center items-center space-y-10">
      {Object.entries(planetGroups).map(([groupName, groupData]) => {
        const totalPlanets = groupData.planets.length; // Count the number of planets
        let lgBasisClass = ''
        if(totalPlanets >= 3) lgBasisClass = 'basis-1/3';
        else if (totalPlanets == 1) lgBasisClass = '';
        else lgBasisClass = `basis-1/${totalPlanets}`; // Else, divide width by number of planets

        return (
          <div key={groupName} className="flex flex-col items-center w-full max-w-sm space-y-6">
            {/* Group Title and Icon */}
            <div className="flex flex-col items-center space-y-2">
              <span className="text-1xl">{groupData.icon}</span> {/* Icon */}
              <h2 className="text-xl font-blackops tracking-wider text-white capitalize">{groupName}</h2> {/* Title */}
            </div>

            {/* Carousel */}
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent className='pl-2'>
                {groupData.planets.map((planet) => (
                  <CarouselItem
                    key={planet.id}
                    className={`${lgBasisClass} `} // Dynamic width based on planets
                  >
                    <div className="p-1">
                      {/* Card for Each Planet */}
                      <Card >
                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 ">
                          {/* Planet Component */}
                          <Planet
                            top={0} // Position relative to the card
                            left={0}
                            size={planet.size}
                            backgroundImage={planet.backgroundImage}
                            icon={planet.icon}
                            text={planet.text}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPreviousV2 className='text-white' />
              <CarouselNextV2/>

            </Carousel>
          </div>
        );
      })}
    </div>
  </div>



  );
};

export default EducationGalaxy;
