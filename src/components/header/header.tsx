import { Link } from "react-scroll";
import MobileHeader from "./Mobile-header";

const Header = () => {
  const linkStyles = "hover:text-keyword text-white hover:text-keyword transition-colors duration-300 ease-in-out hover:shadow-blue-500/80 px-3";

  return (
    <header className="sticky top-0 z-50 bg-background">

      <div className="container w-full mx-auto px-10 flex items-center justify-between  py-3">
        {/* Logo */}
        <div className="font-blackops mr-auto font-light text-white ">JOHARY RAKOTOMALALA</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-blackops">
          <Link
            to="home"
            smooth={true}
            duration={100}
            offset={-70} // Adjust for sticky header height
            spy={true} // Adds active class if section is visible
            className={`${linkStyles}`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={100}
            offset={-70}
            className={`${linkStyles}`}
          >
            About
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={100}
            offset={-70}
            className={`${linkStyles}`}
          >
            Project
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={100}
            offset={-400}
            className={`${linkStyles}`}
          >
            Work Experience
          </Link>
          <Link
            to="rewards"
            smooth={true}
            duration={100}
            offset={-70}
            className={`${linkStyles}`}
          >
            Rewards
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={100}
            offset={-70}
            className={`${linkStyles}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div  className="md:hidden ml-auto text-2xl text-gray-800">
          <MobileHeader/>
        </div>
      </div>

      {/* Mobile Navigation */}
      
    </header>
  );
};

export default Header;
