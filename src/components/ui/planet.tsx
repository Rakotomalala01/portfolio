import React, { FC, ReactNode } from 'react';

interface PlanetProps {
  top: number;
  left: number;
  size?: number;
  color?: string;
  backgroundImage?: string;
  gradient?: string;
  icon?: ReactNode;
  text?: string;
  fadeInDuration?: number;
  customShadow?: string;
}

const Planet: FC<PlanetProps> = ({
  top,
  left,
  size = 50,
  color = '#3498db',
  backgroundImage,
  gradient,
  icon,
  text,
  fadeInDuration = 1000,
  customShadow = 'var(--shadow-blue-strong)',
}) => {
  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }
    : gradient
    ? { backgroundImage: gradient }
    : { backgroundColor: color };

  const animations = `
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes shine {
      0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.6); }
      50% { text-shadow: 0 0 15px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1); }
      100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.6); }
    }
  `;

  return (
    <>
      <style>{animations}</style>
      <div
        className="absolute flex flex-col items-center justify-center rounded-full"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          ...backgroundStyle,
          boxShadow: customShadow,
          opacity: 0,
          animation: `fadeIn ${fadeInDuration}ms ease-in-out forwards`,
        }}
      >
        {icon && (
          <div
            className="text-2xl text-white"
            style={{
              animation: 'shine 2s infinite ease-in-out',
            }}
          >
            {icon}
          </div>
        )}
        {text && <span className="text-white text-xs mt-1 text-center">{text}</span>}
      </div>
    </>
  );
};

export default Planet;
