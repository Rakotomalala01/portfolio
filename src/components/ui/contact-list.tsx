import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const iconClass = "flex items-center justify-center rounded-md w-12 h-12 bg-secondary text-white hover:scale-[1.3] transition-transform duration-300 hover:[box-shadow:var(--shadow-blue-strong)] shadow-lg hover:text-keyword";

const ContactList = () => {
  return (
    <div className="flex space-x-5 mt-4 px-6 py-2">
      {/* GitHub */}
      <a
        href="https://github.com/Rakotomalala01"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
      >
        <FaGithub size={24} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/johary-rakotomalala/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
      >
        <FaLinkedin size={24} />
      </a>

      {/* Email */}
      <a
        href="mailto:johary.rakotomalala2001@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default ContactList;