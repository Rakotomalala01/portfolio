import { FaDownload } from 'react-icons/fa';
import { Button } from './button';


const MyCVDownloader = () => {
  const handleViewResume = () => {
    window.open(
      'https://drive.google.com/file/d/1c6O_gkYg4G9BRQHaB_9cHQjZTuyzDT74/view?usp=sharing',
      '_blank'
    );
  };
  return (
  <div className="flex flex-col space-x-4 mt-4 px-1 py-1 sm:px-6 sm:py-2 text-white text-sm sm:text-lg font-bold rounded-md bg-gradient-to-r from-gray-700 to-gray-900 border border-gray-500 shadow-md hover:shadow-lg transition-colors duration-100 ease-in-out bg-[length:200%_200%] hover:bg-[position:100%_0] hover:text-keyword hover:[box-shadow:var(--shadow-blue-strong)]">

    <Button 
      onClick={handleViewResume} 
      variant="null" 
      className="flex items-center gap-x-3 sm:gap-x-5 text-base sm:text-3xl font-blackops tracking-wider"
    >
      VIEW RESUME
      <FaDownload className="h-5 w-5 sm:h-6 sm:w-6" />
    </Button>
  </div>

  );
};

export default MyCVDownloader;
