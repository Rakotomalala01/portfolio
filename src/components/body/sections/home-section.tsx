import ContactList from "@/components/ui/contact-list";
import MyCVDownloader from "@/components/ui/myCVDownloader";
import ProfileDescription from "@/components/ui/profil-description";

const Home = () => {


  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center pb-10 bg-background text-white overflow-hidden"
    >
      {/* <h1
        className="text-4xl md:text-6xl font-blackops tracking-wider"
        aria-live="polite"
      >
        <span className="">{text}</span>
        <span
          aria-hidden="true"
          className={`text-keyword font-bold ${cursorVisible ? "opacity-100" : "opacity-0"}`}
        >
          |
        </span>
      </h1>
      <p className="text-lg md:text-xl font-light text-muted-foreground mb-6 max-w-2xl">
        {homeDescription}
      </p> */}
      <ProfileDescription/>
      <MyCVDownloader/>
      <ContactList/>
    </section>
  );
};

export default Home;
