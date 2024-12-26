import React from 'react';
import EducationDescription from './education-description';
import { IoSchoolOutline } from "react-icons/io5";
import MadagascarMap from './madagascar-icon';
import FranceMap from './france-icon';
import canadaMap from './canada-icon';

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  description?: string;
  location: 'madagascar' | 'france' | 'canada';
}

const educationData: EducationItem[] = [
    {
        degree: "Bachelor’s in Software Engineering",
        institution: "Polytechnique Montréal",
        description: "Focused on software engineering principles, AI, machine learning, and data science methodologies.",
        location: "canada",
        year: ''
    },
    {
        year: "",
        degree: "Preparatory Class for Engineering Schools in Math, Physics, and Engineering Science",
        institution: "Lycée Ste Croix St Euverte",
        description: "Prepared for advanced engineering studies with a focus on mathematics, physics, and engineering sciences.",
        location: "france"
      }, 
    {
        year: "",
        degree: "Scientific Baccalaureate",
        institution: "Collège St Michel Amparibe",
        description: "Focused on mathematics, physics, and natural sciences in the scientific stream.",
        location: "madagascar"
      },




  ]
  

const SchoolTitle = () => {
    return (
      <div className="flex flex-col items-center mb-8">
        <IoSchoolOutline className="w-12 h-12 mb-4 text-white" />
        <h2 className="text-2xl sm:text-3xl font-bold text-center">My Education Journey</h2>
      </div>
    );
}

// Function to get geographical shapes using React Icons
const getGeographicalShape = (location: string) => {
    let Icon: React.ElementType; // Use ElementType for React Components
  
    // Define specific styles for each location
    const styles: Record<string, string> = {
      madagascar: "w-32 h-32", 
      france: "w-[7rem] h-[7rem]",       
      canada: "w-[7rem] h-[7rem]",         // Canada style
    };
  
    switch (location) {
      case 'madagascar':
        Icon = MadagascarMap;
        break;
      case 'france':
        Icon = FranceMap;
        break;
      case 'canada':
        Icon = canadaMap;
        break;
      default:
        return null;
    }
  
    // Assign the style based on location or fallback to a default style
    const styleClass = styles[location] || "";
  
    return (
      <div
        className={`relative  flex items-center justify-center  ${styleClass}`}
      >
        <Icon className="w-full h-full" />
      </div>
    );
  };
  
const Education: React.FC = () => {
  return (
    <div className="relative w-full bg-secondary text-white p-8">
        <SchoolTitle />
        <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 sm:border-l-4 border-dashed border-gray-500"></div>
            {educationData.map((item, index) => (
            <div
                key={index}
                className={`relative flex items-center mb-12 sm:mb-20 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
            >
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    {getGeographicalShape(item.location)}
                </div>
                <EducationDescription
                degree={item.degree}
                institution={item.institution}
                year={item.year}
                description={item.description}
                />
            </div>
            ))}
        </div>
    </div>
  );
};

export default Education;
