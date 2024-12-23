import { useEffect, useState } from "react";
import ContactList from "@/components/ui/contact-list";
import MyCVDownloader from "@/components/ui/myCVDownloader";
import ProfileDescription from "@/components/ui/profil-description";
import RobotHead from "@/components/ui/robot";
import { FaChevronDown } from "react-icons/fa";
import SpaceshipChase from "@/components/ui/spaceshipChase";

const Home = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const colors = [
    "bg-background",
    "bg-[#569CD6]",
    "bg-[#9CDCFE]",
    "bg-[#4EC9B0]",
    "bg-[#B5CEA8]",
    "bg-[#C586C0]",
    "bg-[#D7BA7D]",
    "bg-[#CE9178]",
    "bg-[#DCDCAA]",
    "bg-[#F44747]",
    "bg-[#646695]",
    "bg-[#D16969]",
    "bg-[#F2C272]",
    "bg-[#8BD1FA]",
    "bg-[#DAB894]",
    "bg-[#A074C4]"
  ];

  const [colorIndex, setColorIndex] = useState(0);

  // Generate random positions & durations for falling dots
  const [positions] = useState(() =>
    [...Array(60)].map(() => ({
      left: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }))
  );

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 3500);

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative w-full h-screen 
        flex flex-col items-center justify-center text-center 
        pb-10 bg-background text-white 
        overflow-hidden
      "
    >
      {/* F A L L I N G   D O T S  */}
      <div className="absolute inset-0 pointer-events-none">
        {positions.map((pos, i) => (
          <div
            key={i}
            className={`
              absolute w-2 h-2 rounded-full shadow-lg animate-fall 
              transition-colors duration-1000 
              ${colors[colorIndex]}
            `}
            style={{
              top: "0%",
              left: `${pos.left}%`,
              animationDuration: `${pos.duration}s`,
              animationDelay: `${pos.delay}s`,
            }}
          />
        ))}
      </div>

      {/* P R O F I L E / C V / C O N T A C T */}
      <ProfileDescription />
      <MyCVDownloader />
      <ContactList />

      {/* R O B O T   H E A D  (z-10 so it stays visually on top) */}
      <div className="relative z-10">
        <RobotHead />
      </div>

      {/* 
        T H E   S P A C E S H I P   C H A S E
        Absolutely positioned at the middle (top-1/2), 
        moves from far left to far right in a continuous loop.
      */}
      <SpaceshipChase/>

      {/* S C R O L L   D O W N   B U T T O N */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-[5.5rem] animate-bounce text-white text-2xl sm:text-3xl"
      >
        <FaChevronDown />
      </button>

      <style>
        {`
          /* Existing falling animation keyframes */
          @keyframes fall {
            0%   { transform: translateY(0); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translateY(1000px); opacity: 0; }
          }
          @keyframes shimmer {
            0%   { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
          .animate-fall {
            animation: fall infinite linear, shimmer 6s linear infinite;
          }

          /* 
            K E Y F R A M E S   F O R   T H E   C H A S E
            Moves from left(-20%) to off-screen right, 
            then repeats forever.
          */
          @keyframes chase {
            0%   { transform: translateX(0); }
            100% { transform: translateX(140vw); }
          }
          .animate-chase {
            animation: chase 8s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Home;
