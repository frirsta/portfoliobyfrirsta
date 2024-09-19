import React from "react";
import { FadeIn } from "./Animations";
const Footer = () => {
  return (
    <footer className="bg-[#0d0d23] py-6 text-center">
      <FadeIn>
        <p>&copy; FRIRSTA {new Date().getFullYear()}. All rights reserved.</p>
      </FadeIn>
    </footer>
  );
};

export default Footer;
