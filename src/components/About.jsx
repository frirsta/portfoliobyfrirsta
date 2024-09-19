import React from "react";
import Image from "next/image";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { AnimatedText, SlideIn, FadeIn } from "./Animations";

const About = () => {
  return (
    <section id="about">
      <div className="container flex justify-center">
        <div className="flex flex-col justify-between items-baseline">
          <div className="flex justify-between flex-col min-[992px]:flex-row min-[992px]:items-center">
            <SlideIn direction="left">
              <div className="min-[992px]:w-[400px] flex flex-col items-start">
                <div className="title-container">
                  <div className="flex min-[992px]:flex-col">
                    <AnimatedText text="I'm " />
                    <AnimatedText text="Frirsta" />
                  </div>
                </div>
                <ResumeDownloadButton />
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div className="h-fit">
                <Image
                  width={"1000"}
                  height={"1000"}
                  src="/About.png"
                  alt="Frirsta"
                  className="object-contain w-[100%] min-[992px]:w-[400px] rounded-3xl drop-shadow-xl mt-10"
                />
              </div>
            </SlideIn>
          </div>
          <FadeIn delay={0.5}>
            <div className="w-full lg:w-[700px] text-2xl font-normal mt-20">
              I&apos;m Frirsta - a front-end developer based in Stockholm. After
              a career in retail, I transitioned into software development
              driven by my passion for problem-solving and designing and
              creating websites.
              <br />
              <br />
              Take a look at my resume, and feel free to reach out if you&apos;d
              like to collaborate!
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
