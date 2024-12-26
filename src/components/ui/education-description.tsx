import React from 'react';

interface EducationDescriptionProps {
  degree: string;
  institution: string;
  year?: string;
  description?: string; 
}

const EducationDescription: React.FC<EducationDescriptionProps> = ({
  degree,
  institution,
  year,
  description,
}) => {
  return (
    <div className="bg-background p-4 rounded-lg shadow-lg w-48 text-center sm:w-56"> {/* Adjust width for small screens */}
      <h3 className="text-sm sm:text-base font-bold">{degree}</h3> {/* Responsive text */}
      <p className="text-institution font-semibold text-xs sm:text-sm">{institution}</p>
      <p className="text-xs sm:text-sm text-gray-300 mt-1">{year}</p>
      {description && <p className="text-muted-foreground text-xs sm:text-sm mt-2">{description}</p>}
    </div>
  );
};

export default EducationDescription;
