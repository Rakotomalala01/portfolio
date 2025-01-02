import ContactList from "@/components/ui/contact-list";
import { FaStreetView } from "react-icons/fa";

const Contact = () => {
    const contactDescription = "Feel free to reach out for collaborations, project inquiries, or just to say hello. Let’s connect and create something amazing together!";

  return (
    <section
      id="contact"
      className="relative w-full  flex flex-col 
        items-center justify-center text-center text-white overflow-hidden 
        bg-gradient-to-b from-[#2b5876] to-[#1b3b52] overflow-x-hidden py-16 md:py-24"
    >
      {/* Inline Styles */}
      <style>
        {`
          /* Ripple Background Animation */
          @keyframes ripple {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .animate-ripple {
            animation: ripple 10s infinite;
          }

          /* Fish Swimming Animations */
          @keyframes swim-right {
            0% { transform: translateX(-20%) scaleX(-1); }
            100% { transform: translateX(110vw) scaleX(-1); }
          }

          @keyframes swim-right-two {
            0% { transform: translateX(-20%) scaleX(-1); }
            100% { transform: translateX(110vw) scaleX(-1); }
          }

          @keyframes swim-left {
            0% { transform: translateX(110vw) scaleX(1); }
            100% { transform: translateX(-10vw) scaleX(1); }
          }

          @keyframes swim-left-two {
            0% { transform: translateX(110vw) scaleX(1); }
            100% { transform: translateX(-10vw) scaleX(1); }
          }

          /* Apply Animations */
          .animate-swim-right {
            animation: swim-right 10s linear infinite;
          }
          .animate-swim-right-two {
            animation: swim-right-two 7s linear infinite;
          }

          .animate-swim-left {
            animation: swim-left 12s linear infinite;
          }

          .animate-swim-left-two {
            animation: swim-left-two 10s linear infinite;
          }
        `}
      </style>

      {/* Fish Animation - Behind Content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Fish swimming to the RIGHT */}
        <div
          className="absolute text-white animate-swim-right opacity-80 drop-shadow-lg"
          style={{ top: "10%", fontSize: "3rem" }}
        >
          🐟
        </div>
        <div
          className="absolute text-white animate-swim-right-two opacity-80 drop-shadow-lg"
          style={{ top: "40%", fontSize: "2.5rem" }}
        >
          🐠
        </div>

        {/* Fish swimming to the LEFT */}
        <div
          className="absolute text-white animate-swim-left opacity-80 drop-shadow-lg"
          style={{ top: "25%", fontSize: "4rem" }}
        >
          🐡
        </div>
        <div
          className="absolute text-white animate-swim-left-two opacity-80 drop-shadow-lg"
          style={{ top: "70%", fontSize: "3rem" }}
        >
          🐟
        </div>
      </div>

      {/* Overlay and Content - Above Fish */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2b5876] to-[#1b3b52] opacity-65 z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-blackops text-white mb-6 tracking-wider">
          Contact
        </h2>
        <p className="text-sm md:text-lg lg:text-xl font-light text-muted-foreground mb-6 ">
          {contactDescription}
        </p>

        {/* Contact Info and List */}
        <div className="flex flex-col items-center justify-center space-y-4">
            <FaStreetView className="text-white" size={40} />
            <h3 className="text-lg md:text-xl lg:text-2xl font-blackops text-white  tracking-wider">
                Montréal, Canada
            </h3>
            <ContactList />
        </div>
      </div>
    </section>
  );
};

export default Contact;
