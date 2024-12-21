import React from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Reusable styles for mobile links
const mobileLinkStyles =
  "cursor-pointer hover:text-keyword w-full text-white transition-colors duration-300 ease-in-out hover:[box-shadow:var(--shadow-blue-strong)]";

const MobileHeader = () => {
  return (
    <Sheet>
      {/* Mobile Menu Button */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-4xl text-white">
          ≡
        </Button>
      </SheetTrigger>

      {/* Mobile Menu Content */}
      <SheetContent className="font-blackops">
        <SheetHeader></SheetHeader>
        <SheetTitle className="text-white text-2xl">Sections</SheetTitle>

        {/* Mobile Navigation */}
        <nav className="grid gap-4 py-4">
          <SheetClose asChild>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className={`${mobileLinkStyles}`}
            >
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className={`${mobileLinkStyles}`}
            >
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="project"
              smooth={true}
              duration={500}
              offset={-70}
              className={`${mobileLinkStyles}`}
            >
              Project
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className={`${mobileLinkStyles}`}
            >
              Work Experiences
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="rewards"
              smooth={true}
              duration={500}
              offset={-70}
              className={`${mobileLinkStyles}`}
            >
              Rewards
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className={`${mobileLinkStyles}`}
            >
              Contact
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileHeader;
