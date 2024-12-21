import React from 'react';

const FuturisticContainer = () => {
  return (
    <div className="flex flex-colon space-x-4 mt-4 px-6 py-2 text-white text-lg font-bold rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 border border-gray-500 shadow-md hover:shadow-lg">
          {/* GitHub */}
          <a
            href="https://github.com/Rakotomalala01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaGithub size={24} />
          </a>
    
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/johary-rakotomalala/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-white hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaLinkedin size={24} />
          </a>
    
          {/* Email */}
          <a
            href="mailto:johary.rakotomalala2001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-md bg-red-500 hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
  );
};

export default FuturisticContainer;
