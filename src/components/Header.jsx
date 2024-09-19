import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverScale, StaggerItems, FadeIn } from "./Animations";
const NavLink = ({ href, children, onClick }) => (
  <li>
    <HoverScale>
      <a href={href} className="hover:text-[#D4ADFC]" onClick={onClick}>
        {children}
      </a>
    </HoverScale>
  </li>
);

const NavLinks = ({ isMobile = false, onClickMobile }) => (
  <StaggerItems>
    <ul className={isMobile ? "space-y-2 p-4" : "flex space-x-6"}>
      {["home", "projects", "about", "contact"].map((link) => (
        <NavLink
          key={link}
          href={`#${link}`}
          onClick={isMobile ? onClickMobile : undefined}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </NavLink>
      ))}
    </ul>
  </StaggerItems>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-10 bg-[#0d0d23] rounded-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <FadeIn>
          <a
            href="#home"
            className="text-2xl font-thin text-[#E8E8E8] tracking-widest"
          >
            FRIRSTA
          </a>
        </FadeIn>
        <nav className="hidden md:block">
          <NavLinks />
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden">
          <NavLinks isMobile onClickMobile={toggleMobileMenu} />
        </nav>
      )}
    </header>
  );
};

export default Header;
