import HomeSection from "./sections/home-section";
import About from "./sections/about";
import FallingDots from "../ui/falling-dot";
import ProjectsSection from "./sections/projects";
import MovingCloud from "../ui/MovingCloud";
import Contact from "./sections/contact";
import Practice from "./sections/practice";

const Body = () => {
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
    "bg-[#A074C4]",
  ];
  return (
    <main className="w-full mx-auto   w-full">
      {/* Home Section */}
      <style>
            {`
          @keyframes cloudMove {
            0% { transform: translateX(-10%); }
            100% { transform: translateX(100vw); }
          }
  
          .animate-cloudMove {
            animation: cloudMove 1s linear infinite;
          }
        `}
      </style>
      
      <FallingDots colors={colors} count={60} />


      <HomeSection/>
      <div className="h-[100px] bg-gradient-to-b from-[hsl(220,13%,18%)] to-[hsl(222,36%,10%)]"></div>



      {/* About Section */}
      <About/>
      
      <div className="h-[100px] bg-gradient-to-b from-[hsl(222,36%,10%)] to-[#0b132b]"></div>


      <ProjectsSection/>

      <div className=" relative h-[100px] bg-gradient-to-b from-[#1a1d29] to-[#244071]">
        <MovingCloud zIndex={5}/>
      </div>
      
      <Practice />



      {/* Contact Section */}
      <div className="h-[100px] bg-[#2b5876] "></div>

      <Contact/>
    </main>
  );
};

export default Body;
