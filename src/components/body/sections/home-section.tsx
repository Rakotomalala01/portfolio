import ContactList from "@/components/ui/contact-list";
import MyCVDownloader from "@/components/ui/myCVDownloader";
import ProfileDescription from "@/components/ui/profil-description";
import RobotHead from "@/components/ui/robot";

const Home = () => {


  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center pb-10 bg-background text-white overflow-hidden"
    >
 
      <ProfileDescription/>
      <MyCVDownloader/>
      <ContactList/>
      <RobotHead/>
    </section>
  );
};

export default Home;
