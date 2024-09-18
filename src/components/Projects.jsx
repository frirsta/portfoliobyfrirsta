import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlideIn } from "./Animations";

const projects = [
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather app using React and OpenWeather API. Built a responsive layout with Material UI and implemented day/night mode.",
    image: "/weather.png",
    github: "https://github.com/frirsta/WeatherByFrirsta",
    demo: "https://weatherbyfrirsta.netlify.app/",
    direction: "left",
    delay: 0,
  },
  {
    title: "Task Management System",
    description:
      "Interactive data visualisation dashboard using React, Nivo, and Material-UI. Integrated various charts and light/dark theme support.",
    image: "/dashboard.png",
    github: "https://github.com/frirsta/YourDashboardByFrirsta",
    demo: "https://yourdashboardbyfrirsta.netlify.app/",
    direction: "right",
    delay: 0.2,
  },
];

const ProjectCard = ({ project }) => (
  <SlideIn direction={project.direction} delay={project.delay}>
    <Card className="overflow-hidden bg-[#d4adfc]/5 border border-[#d4adfc] transition-transform hover:scale-105 max-w-[400px]">
      <CardContent className="p-0">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-[#D4ADFC]">
            {project.title}
          </h3>
          <p className="mb-4 text-[#D4ADFC]">{project.description}</p>
          <div className="flex justify-between">
            <Button
              asChild
              variant="outline"
              className="w-[45%] bg-[#d4adfc]/5 border-[#d4adfc] text-[#D4ADFC] hover:bg-[#D4ADFC]/90 hover:text-[#0C134F]"
            >
              <Link href={project.github} target="_blank">
                View Code
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-[45%] bg-[#d4adfc]/5 border-[#d4adfc] text-[#D4ADFC] hover:bg-[#D4ADFC]/90 hover:text-[#0C134F]"
            >
              <Link href={project.demo} target="_blank">
                Live Demo
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </SlideIn>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <h2 className="mb-12 text-center">
          <span className="text-4xl sm:text-5xl md:text-6xl text-[#d4adfc] font-thin">
            Featured Projects
          </span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
