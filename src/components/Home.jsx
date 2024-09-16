import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedText, FadeIn, HoverScale } from "./Animations";

const Home = () => {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedText
          text="Web Designer & Developer"
          classname={
            "text-4xl sm:text-5xl md:text-6xl text-[#d4adfc] font-thin"
          }
        />
        <FadeIn delay={0.5}>
          <p className="mb-8 text-xl text-[#D4ADFC]">
            Crafting beautiful and functional web experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.7}>
          <div className="space-x-4 flex justify-center">
            <HoverScale>
              <Button
                asChild
                variant="secondary"
                className="bg-[#D4ADFC] border-[#D4ADFC] hover:bg-[#D4ADFC]/5 hover:text-[#D4ADFC] text-[#0C134F]"
              >
                <a href="#resume">View Resume</a>
              </Button>
            </HoverScale>
            <HoverScale>
              <Button
                asChild
                variant="outline"
                className="bg-[#D4ADFC]/5 border-[#D4ADFC] text-[#D4ADFC] hover:bg-[#D4ADFC]/90 hover:text-[#0C134F]"
              >
                <a href="#contact">Contact</a>
              </Button>
            </HoverScale>
          </div>
        </FadeIn>
      </div>
      <div className="absolute inset-0 bg-[url('/placeholder.png?height=1080&width=1920')] opacity-10 bg-cover bg-center"></div>
    </section>
  );
};

export default Home;
