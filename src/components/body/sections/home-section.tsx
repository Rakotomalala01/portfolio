import ContactList from "@/components/ui/contact-list";
import MyCVDownloader from "@/components/ui/myCVDownloader";
import ParticleBackground from "@/components/ui/particles";
import ProfileDescription from "@/components/ui/profil-description";
import RobotHead from "@/components/ui/robot";
import { FaChevronDown } from "react-icons/fa"; // Import the arrow icon

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
      className="h-screen flex flex-col items-center justify-center text-center pb-10 bg-background text-white overflow-hidden relative"
    >
      <ProfileDescription />
      <MyCVDownloader />
      <ContactList />
      <RobotHead />

      {/* Arrow Button */}
      <button
        onClick={scrollToNextSection}
        className="mt-4 animate-bounce text-white text-2xl sm:text-3xl"
      >
        <FaChevronDown />
      </button>
    </section>
  );
};

export default Home;
