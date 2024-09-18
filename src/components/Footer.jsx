import React from "react";
import { FadeIn } from "./Animations";
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 text-center">
      <FadeIn>
        <p>&copy; FRIRSTA {new Date().getFullYear()}. All rights reserved.</p>
      </FadeIn>
    </footer>
  );
};

export default Footer;
