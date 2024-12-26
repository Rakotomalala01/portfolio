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

  return (
    <section
      id="home"
      className="relative w-full h-screen 
        flex flex-col items-center justify-center text-center 
        pb-10 bg-background text-white 
        overflow-hidden"
    >
      {/* P R O F I L E / C V / C O N T A C T */}
      <ProfileDescription />
      <MyCVDownloader />
      <ContactList />

      {/* R O B O T   H E A D  */}
      <div className="relative z-10">
        <RobotHead />
      </div>

      {/* 
        T H E   S P A C E S H I P   C H A S E
        Absolutely positioned at the middle (top-1/2), 
        moves from far left to far right in a continuous loop.
      */}
      <SpaceshipChase />

      {/* S C R O L L   D O W N   B U T T O N */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-[5.5rem] animate-bounce text-white text-2xl sm:text-3xl"
      >
        <FaChevronDown />
      </button>

      <style>
        {`
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
