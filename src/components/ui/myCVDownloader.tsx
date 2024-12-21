import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Button } from './button';


const MyCVDownloader = () => {
  const handleViewResume = () => {
    window.open(
      'https://drive.google.com/file/d/1zFnvevnw9UfXzCvg0FGzXYUflE5ZRweQ/view',
      '_blank'
    );
  };
  return (
      <div className="flex flex-col space-x-4 mt-4 px-6 py-2 text-white text-lg font-bold rounded-md bg-gradient-to-r from-gray-700 to-gray-900 border border-gray-500 shadow-md hover:shadow-lg transition-colors duration-100 ease-in-out bg-[length:200%_200%] hover:bg-[position:100%_0] hover:text-keyword hover:[box-shadow:var(--shadow-blue-strong)] px-3">

      {/* GitHub */}
      <Button onClick={handleViewResume} variant='null' 
        className="flex items-center gap-x-5 text-1xl md:text-3xl font-blackops tracking-wider">
        VIEW RESUME
        <FaDownload className="h-6 w-6 " />
      </Button>
      

    </div>

  );
};

export default MyCVDownloader;
