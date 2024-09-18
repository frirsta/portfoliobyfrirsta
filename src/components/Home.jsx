import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedText, FadeIn, HoverScale } from "./Animations";

const Home = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container text-center relative z-10">
        <AnimatedText text="Web Designer & Developer" />
        <FadeIn delay={0.5}>
          <p className="mb-8 text-xl">
            Crafting beautiful and functional web experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.7}>
          <div className="space-x-4 flex justify-center">
            <HoverScale>
              <Button
                asChild
                variant="secondary"
                className="bg-[#D4ADFC] border-[#D4ADFC] hover:bg-[#D4ADFC]/5 hover text-[#0C134F]"
              >
                <a href="#resume">View Resume</a>
              </Button>
            </HoverScale>
            <HoverScale>
              <Button
                asChild
                variant="outline"
                className="bg-[#D4ADFC]/5 border-[#D4ADFC] hover:bg-[#D4ADFC]/90 hover:text-[#0C134F]"
              >
                <a href="#contact">Contact</a>
              </Button>
            </HoverScale>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Home;
