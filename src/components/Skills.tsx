
import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./ui/animated-text";
import { CardHoverEffect } from "./ui/card-hover-effect";

// Import icons from lucide-react
import {
  CodeIcon,
  DatabaseIcon,
  PaletteIcon,
  ServerIcon,
  SmartphoneIcon,
  TerminalIcon,
  CpuIcon,
  LayoutIcon,
} from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: <LayoutIcon className="w-6 h-6" />,
    skills: ["React", "JavaScript", "TypeScript", "HTML5/CSS3", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend",
    icon: <ServerIcon className="w-6 h-6" />,
    skills: ["Node.js", "Express", "Django", "GraphQL", "REST API", "Spring Boot"],
  },
  {
    name: "Database",
    icon: <DatabaseIcon className="w-6 h-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma"],
  },
  {
    name: "DevOps",
    icon: <TerminalIcon className="w-6 h-6" />,
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Vercel", "Netlify"],
  },
  {
    name: "Programming",
    icon: <CodeIcon className="w-6 h-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Go"],
  },
  {
    name: "UI/UX",
    icon: <PaletteIcon className="w-6 h-6" />,
    skills: ["Figma", "Adobe XD", "UI Design", "UX Research", "Prototyping", "Accessibility"],
  },
  {
    name: "Mobile",
    icon: <SmartphoneIcon className="w-6 h-6" />,
    skills: ["React Native", "Flutter", "Progressive Web Apps", "iOS", "Android"],
  },
  {
    name: "Tools",
    icon: <CpuIcon className="w-6 h-6" />,
    skills: ["Git", "Webpack", "VS Code", "Storybook", "Jest", "Postman", "Notion"],
  },
];

type SkillItemProps = {
  skill: string;
  index: number;
};

const SkillItem = ({ skill, index }: SkillItemProps) => {
  return (
    <div
      className="animate-scale-in"
      style={{ animationDelay: `${0.05 * index}s` }}
    >
      <div className="text-sm px-3 py-1.5 glass-card rounded-full inline-block">
        {skill}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl -z-10" />
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-1 px-3 bg-black rounded-full border border-white/[0.08] mb-6">
            <span className="text-sm text-white/80">My toolkit</span>
          </div>
          <AnimatedText
            text="Skills & Technologies"
            className="text-3xl md:text-4xl font-medium leading-tight"
            as="h2"
          />
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            I'm constantly expanding my toolkit, but here are the technologies and skills
            I currently work with to build modern, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="animate-scale-in"
              style={{ animationDelay: `${0.1 + categoryIndex * 0.05}s` }}
            >
              <CardHoverEffect className="h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 glass-panel rounded-lg mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-medium">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillItem 
                        key={skillIndex} 
                        skill={skill} 
                        index={skillIndex} 
                      />
                    ))}
                  </div>
                </div>
              </CardHoverEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
