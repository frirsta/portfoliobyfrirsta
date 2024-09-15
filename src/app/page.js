"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen bg-gray-900 text-[#D4ADFC]">
      <header className="sticky top-0 z-10 bg-[#D4ADFC]/5 backdrop-blur-sm border-[1px] border-[#D4ADFC] rounded-sm">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="#home" className="text-2xl font-bold text-[#D4ADFC]">
            FRIRSTA
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#D4ADFC] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#D4ADFC] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#D4ADFC] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#D4ADFC] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
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
            <ul className="space-y-2 p-4">
              <li>
                <a
                  href="#home"
                  className="block hover:text-[#D4ADFC] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block hover:text-[#D4ADFC] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block hover:text-[#D4ADFC] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block hover:text-[#D4ADFC] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl text-[#d4adfc] font-thin">
              Web Designer & Developer
            </h1>
            <p className="mb-8 text-xl text-[#D4ADFC]">
              Crafting beautiful and functional web experiences
            </p>
            <div className="space-x-4">
              <Button
                variant="secondary"
                size="lg"
                className="bg-[#D4ADFC] text-[#0C134F] hover:text-[#D4ADFC] hover:bg-[#D4ADFC]/5"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-[#D4ADFC] border-[#D4ADFC] hover:bg-[#D4ADFC]/90 hover:text-[#0C134F]"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.png?height=1080&width=1920')] opacity-10 bg-cover bg-center"></div>
        </section>

        <section id="projects" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4 max-w-[1000px]">
            <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
              <span className="mb-6 text-4xl sm:text-5xl md:text-6xl text-[#d4adfc] font-thin">
                Featured Projects
              </span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
              {[
                {
                  title: "Weather Dashboard",
                  description:
                    "Real-time weather app using React and OpenWeather API. Built a responsive layout with Material UI and implemented day/night mode.",
                  image: "/placeholder.png?height=400&width=600",
                  github: "https://github.com/frirsta/WeatherByFrirsta",
                  demo: "https://weatherbyfrirsta.netlify.app/",
                },
                {
                  title: "Task Management System",
                  description:
                    "Interactive data visualisation dashboard using React, Nivo, and Material-UI. Integrated various charts and light/dark theme support.",
                  image: "/placeholder.png?height=400&width=600",
                  github: "https://github.com/frirsta/YourDashboardByFrirsta",
                  demo: "https://yourdashboardbyfrirsta.netlify.app/",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-[#d4adfc]/5 border border-[#d4adfc] transition-transform hover:scale-105 max-w-[400px]"
                >
                  <CardContent className="p-0">
                    <Image
                      height="400"
                      width="600"
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-semibold text-[#D4ADFC]">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-[#D4ADFC]">
                        {project.description}
                      </p>
                      <div className="flex justify-between">
                        <Link
                          href={project.github}
                          target="_blank"
                          className={`w-[45%] h-[40px] min-[400px]:w-[143.49px] min-[400px]:h-[50px] bg-[#d4adfc]/5 rounded-sm border border-[#d4adfc] justify-center items-center inline-flex text-[#D4ADFC]`}
                        >
                          View Code
                        </Link>
                        <Link
                          href={project.demo}
                          target="_blank"
                          className={`w-[45%] h-[40px] min-[400px]:w-[143.49px] min-[400px]:h-[50px] bg-[#d4adfc]/5 rounded-sm border border-[#d4adfc] justify-center items-center inline-flex text-[#D4ADFC]`}
                        >
                          Live Demo
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="w-[902px] flex flex-col justify-between">
              <div className="flex justify-between flex-col sm:flex-row sm:items-center">
                <div className="sm:w-[400px] flex flex-col items-start">
                  <span className="text-[#d4adfc] text-[70px] sm:text-[100px] font-thin sm:mb-10">
                    I&apos;m Frirsta
                  </span>

                  <Button className="my-10 sm:my-0 sm:mt-5 px-8 bg-[#d4adfc] text-[#0C134F] rounded-sm shadow justify-center items-center">
                    DOWNLOAD CV
                  </Button>
                </div>
                <div className="h-fit p-0">
                  <Image
                    height="400"
                    width="400"
                    src="/placeholder.png?height=400&width=600"
                    alt="Frirsta"
                    className="object-contain w-[100%] sm:w-[400px] rounded-lg border border-[#d4adfc]"
                  />
                </div>
              </div>
              <div className="w-full sm:w-[587px] text-[#d4adfc] text-3xl font-normal mt-20 sm:mt-12">
                I&apos;m Frirsta - a front-end developer based in Stockholm.
                After a career in retail, I transitioned into software
                development driven by my passion for problem-solving and
                designing and creating websites.
                <br />
                <br />
                Take a look at my resume, and feel free to reach out if
                you&apos;d like to collaborate!
              </div>
            </div>
          </div>
        </section>
        <section id="resume" className="py-20">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="w-full justify-items-center grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              <div className="w-full">
                <Card className="my-10 sm:my-5 w-full sm:w-[280px] bg-[#d4adfc]/5 rounded-lg border border-[#d4adfc] flex flex-col justify-center items-center gap-2.5">
                  <CardContent className="w-full sm:w-[250px] py-5 px-3 flex flex-row items-start justify-center">
                    <CardHeader className="p-0 w-[70px] text-white text-xs font-semibold flex flex-row justify-between">
                      <object
                        data="/LanguagesIcon.svg"
                        width="40"
                        height="40"
                      ></object>
                    </CardHeader>
                    <CardContent className="w-[210px] h-full p-0 flex flex-col justify-between">
                      <h6 className="text-[#d4adfc] tracking-wide uppercase">
                        LANGUAGES
                      </h6>
                      <ul className="text-[#d4adfc] text-xs leading-5">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JAVASCRIPT (ES6+)</li>
                      </ul>
                    </CardContent>
                  </CardContent>
                </Card>
                <Card className="my-10 sm:my-5 w-full sm:w-[280px] bg-[#d4adfc]/5 rounded-lg border border-[#d4adfc] flex flex-col justify-center items-center gap-2.5">
                  <CardContent className="w-full sm:w-[250px] py-5 px-3 flex flex-row items-start justify-center">
                    <CardHeader className="p-0 w-[70px] text-white text-xs font-semibold flex flex-row justify-between">
                      <object
                        data="/FrameworksAndLibrariesIcon.svg"
                        width="40"
                        height="40"
                      ></object>
                    </CardHeader>
                    <CardContent className="w-[210px] h-full p-0 flex flex-col justify-between">
                      <h6 className="text-[#d4adfc] tracking-wide uppercase">
                        FRAMEWORKS AND LIBRARIES
                      </h6>
                      <ul className="text-[#d4adfc] text-xs leading-5">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Bootstrap</li>
                        <li>Material-UI</li>
                        <li>TailwindCSS</li>
                        <li>jQuery</li>
                      </ul>
                    </CardContent>
                  </CardContent>
                </Card>
                <Card className="my-10 sm:my-5 w-full sm:w-[280px] bg-[#d4adfc]/5 rounded-lg border border-[#d4adfc] flex flex-col justify-center items-center gap-2.5">
                  <CardContent className="w-full sm:w-[250px] py-5 px-3 flex flex-row items-start justify-center">
                    <CardHeader className="p-0 w-[70px] text-white text-xs font-semibold flex flex-row justify-between">
                      <object
                        data="/ToolsAndPlatformsIcon.svg"
                        width="40"
                        height="40"
                      ></object>
                    </CardHeader>
                    <CardContent className="w-[210px] h-full p-0 flex flex-col justify-between">
                      <h6 className="text-[#d4adfc] tracking-wide uppercase">
                        Tools & Platforms
                      </h6>
                      <ul className="text-[#d4adfc] text-xs leading-5">
                        <li>Figma</li>
                        <li>VS Code</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Chrome DevTools</li>
                        <li>Heroku</li>
                        <li>Netlify</li>
                      </ul>
                    </CardContent>
                  </CardContent>
                </Card>
                <Card className="my-10 sm:my-5 w-full sm:w-[280px] bg-[#d4adfc]/5 rounded-lg border border-[#d4adfc] flex flex-col justify-center items-center gap-2.5">
                  <CardContent className="w-full sm:w-[250px] py-5 px-3 flex flex-row items-start justify-center">
                    <CardHeader className="p-0 w-[70px] text-white text-xs font-semibold flex flex-row justify-between">
                      <object
                        data="/OtherSkillsIcon.svg"
                        width="40"
                        height="40"
                      ></object>
                    </CardHeader>
                    <CardContent className="w-[210px] h-full p-0 flex flex-col justify-between">
                      <h6 className="text-[#d4adfc] tracking-wide uppercase">
                        OTHER SKILLS
                      </h6>
                      <ul className="text-[#d4adfc] text-xs leading-5">
                        <li>Responsive Web Design</li>
                        <li>UX/UI Design</li>
                        <li>Agile Development</li>
                      </ul>
                    </CardContent>
                  </CardContent>
                </Card>
                <Card className="my-10 sm:my-5 w-full sm:w-[280px] bg-[#d4adfc]/5 rounded-lg border border-[#d4adfc] flex flex-col justify-center items-center gap-2.5">
                  <CardContent className="w-full sm:w-[250px] py-5 px-3 flex flex-row items-start justify-center">
                    <CardHeader className="p-0 w-[70px] text-white text-xs font-semibold flex flex-row justify-between">
                      <object
                        data="/BackEndIcon.svg"
                        width="40"
                        height="40"
                      ></object>
                    </CardHeader>
                    <CardContent className="w-[210px] h-full p-0 flex flex-col justify-between">
                      <h6 className="text-[#d4adfc] tracking-wide uppercase">
                        Back-End
                      </h6>
                      <ul className="text-[#d4adfc] text-xs leading-5">
                        <li>Python</li>
                        <li>Django</li>
                        <li>Flask</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                      </ul>
                    </CardContent>
                  </CardContent>
                </Card>
              </div>
              <div className="w-full flex flex-col justify-between sm:h-[50%]">
                <div className="my-10 sm:my-0 sm:w-[280px] md:w-[350px] relative">
                  <div className="w-[185px] h-20  text-white text-[28px] font-extralight font-['Inter'] tracking-wide">
                    EDUCATION
                  </div>

                  <div className=" h-[80px] flex flex-col justify-between ">
                    <div className=" h-[0px] border border-white/30"></div>
                    <div className="w-[281px] h-[45px] flex items-center">
                      <div className="w-[110px] h-[22px]  text-white/80 text-[8px] font-normal font-['Inter'] tracking-tight">
                        July 2022 - June 2023
                      </div>
                      <div className="w-[137px] h-[45px] ">
                        <div className="w-[137px]  text-white text-lg font-normal font-['Inter'] tracking-wide">
                          Code Institute
                        </div>
                        <div className="w-[150px] h-[22px] text-white/80 text-[8px] font-normal font-['Inter'] tracking-tight">
                          Diploma in Full Stack Software Development
                        </div>
                      </div>
                    </div>
                    <div className=" h-[0px] border border-white/30"></div>
                  </div>
                </div>
                <div className="my-10 sm:my-0 sm:w-[280px] md:w-[350px] relative">
                  <div className="w-[185px] h-20  text-white text-[28px] font-extralight font-['Inter'] tracking-wide">
                    EXPERIENCE
                  </div>
                  <div className=" h-[80px] flex flex-col justify-between ">
                    <div className=" h-[0px] border border-white/30"></div>
                    <div className=" h-[45px] flex items-center">
                      <div className="w-[110px] h-[22px]  text-white/80 text-[8px] font-normal font-['Inter'] tracking-tight">
                        Mars 2024 - Present
                      </div>
                      <div className="w-[137px] h-[45px] ">
                        <div className="w-[137px]  text-white text-lg font-normal font-['Inter'] tracking-wide">
                          IT Consultant
                        </div>
                        <div className="w-[150px] h-[22px] text-white/80 text-[8px] font-normal font-['Inter'] tracking-tight">
                          DevDonna Stockholm
                        </div>
                      </div>
                    </div>
                    <div className="h-[0px] border border-white/30"></div>
                  </div>
                  <div className="h-[80px] flex flex-col justify-between ">
                    <div className="h-[0px] border border-white/0"></div>
                    <div className=" h-[45px] flex items-center">
                      <div className="w-[110px] h-[22px]  text-white/80 text-[8px] font-normal font-['Inter'] tracking-tight">
                        August 2023 - February 2024
                      </div>
                      <div className="w-[137px] h-[45px] ">
                        <div className="w-[137px]  text-white text-lg font-normal font-['Inter'] tracking-wide">
                          App Developer
                        </div>
                        <div className="w-[150] h-[22px] text-white/80 text-[8px] font-normal font-['Inter'] tracking-tight">
                          Molnify Stockholm
                        </div>
                      </div>
                    </div>
                    <div className="h-[0px] border border-white/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4 max-w-md">
            <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
              <span className="mb-6 text-4xl sm:text-5xl md:text-6xl text-[#d4adfc] font-thin">
                Get in Touch
              </span>
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="px-4 bg-[#d4adfc]/5 rounded-sm border border-[#d4adfc] block w-full py-2 text-white placeholder:text-gray-400 sm:text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="px-4 bg-[#d4adfc]/5 rounded-sm border border-[#d4adfc] block w-full py-2 text-white placeholder:text-gray-400 sm:text-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="px-4 bg-[#d4adfc]/5 rounded-sm border border-[#d4adfc] block w-full py-2 text-white placeholder:text-gray-400 sm:text-sm"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#d4adfc] text-gray-900 hover:bg-[#d4adfc]/90"
              ></Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-6 text-center">
        <p className="text-gray-400">
          &copy; FRIRSTA 2024. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
