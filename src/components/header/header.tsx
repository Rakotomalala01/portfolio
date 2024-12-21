import MobileHeader from "./Mobile-header";

const Header = () => {
  const linkStyles = "hover:text-keyword text-white hover:text-keyword transition-colors duration-300 ease-in-out hover:shadow-blue-500/80 px-3";

  return (
    <header className="sticky top-0 z-50 bg-background">

      <div className="container w-full mx-auto px-10 flex items-center justify-between  py-3">
        {/* Logo */}
        <div className="font-blackops font-light text-white ">JOHARY RAKOTOMALALA</div>



        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-blackops">
          <a href="#home" className={`${linkStyles}`}>
            Home
          </a>
          <a href="#about" className={`${linkStyles}`}>
            About
          </a>
          <a href="#portfolio" className={`${linkStyles}`}>
            Portfolio
          </a>
          <a href="#contact" className={`${linkStyles}`}>
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div  className="md:hidden text-2xl text-gray-800">
          <MobileHeader/>
        </div>
      </div>

      {/* Mobile Navigation */}
      
    </header>
  );
};

export default Header;