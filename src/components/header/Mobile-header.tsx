import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const mobileLinkStyles = "hover:text-keyword w-full text-white hover:text-keyword transition-colors duration-300 ease-in-out hover:shadow-blue-500/80";


const MobileHeader = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className="text-4xl text-white">
          ≡
        </Button>
      </SheetTrigger>
      <SheetContent className="font-blackops">
        <SheetHeader>
        </SheetHeader>
        <SheetTitle className="text-white text-2xl">Sections</SheetTitle>

        
        <nav className="grid gap-4 py-4">
          <SheetClose asChild>
            <a href="#home" className={`${mobileLinkStyles}`}>Home</a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#about" className={`${mobileLinkStyles}`}>About</a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#project" className={`${mobileLinkStyles}`}>Project</a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#contact" className={`${mobileLinkStyles}`}>Work Experiences</a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#rewards" className={`${mobileLinkStyles}`}>Rewards</a>
          </SheetClose>
          <SheetClose asChild>
            <a href="#contact" className={`${mobileLinkStyles}`}>Contact</a>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileHeader;
