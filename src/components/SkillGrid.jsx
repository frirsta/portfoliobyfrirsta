import React from "react";
import { Wrench, Globe, Database, Code, Package } from "lucide-react";
import { ScaleIn } from "./Animations";
const skills = [
  {
    name: "LANGUAGES",
    icon: <Code size={24} />,
    skills: ["HTML5", "CSS3", "JAVASCRIPT (ES6+)"],
  },
  {
    name: "FRAMEWORKS AND LIBRARIES",
    icon: <Package size={24} />,
    skills: [
      "React",
      "Next.js",
      "Bootstrap",
      "Material-UI",
      "TailwindCSS",
      "jQuery",
    ],
  },
  {
    name: "TOOLS & PLATFORMS",
    icon: <Wrench size={24} />,
    skills: [
      "Figma",
      "VS Code",
      "Git",
      "GitHub",
      "Chrome DevTools",
      "Heroku",
      "Netlify",
    ],
  },
  {
    name: "OTHER SKILLS",
    icon: <Globe size={24} />,
    skills: ["Responsive Web Design", "UX/UI Design", "Agile Development"],
  },
  {
    name: "BACK-END",
    icon: <Database size={24} />,
    skills: ["Python", "Django", "Flask", "PostgreSQL", "MySQL"],
  },
];

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 min-[992px]:pr-6">
      {skills.map((skill) => (
        <ScaleIn key={skill.name} delay={0.2}>
          <div className="backdrop-blur-sm border border-[#6E6A85] rounded-lg p-6 flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#0d0d23] flex items-center justify-center ">
                {skill.icon}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <ul className="space-y-1">
                {skill.skills.map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScaleIn>
      ))}
    </div>
  );
}
