
import React from "react";
import { CardHoverEffect } from "./ui/card-hover-effect";
import AnimatedText from "./ui/animated-text";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart functionality, and secure checkout.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media performance tracking with real-time data visualization.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    image: "/placeholder.svg",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop interface and team collaboration features.",
    technologies: ["React", "Firebase", "Redux", "Material UI"],
    image: "/placeholder.svg",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Content Creation Platform",
    description:
      "Platform for content creators to publish, monetize, and analyze engagement with their work.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "AWS"],
    image: "/placeholder.svg",
    links: {
      live: "#",
      github: "#",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl -z-10" />
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="inline-block p-1 px-3 bg-white/[0.05] rounded-full border border-white/[0.08]">
              <span className="text-sm text-white/80">My projects</span>
            </div>
          </div>
          <AnimatedText
            text="Featured work I've crafted"
            className="text-3xl md:text-4xl font-medium leading-tight"
            as="h2"
          />
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            A selection of my recent projects showcasing my skills in front-end and back-end development,
            UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardHoverEffect className="h-full">
                <div className="p-1">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.links.live}
                        className="text-sm px-3 py-1.5 bg-white/[0.03] hover:bg-white/[0.08] transition-colors border border-white/[0.08] rounded-full"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.links.github}
                        className="text-sm px-3 py-1.5 bg-white/[0.03] hover:bg-white/[0.08] transition-colors border border-white/[0.08] rounded-full"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </CardHoverEffect>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 glass-panel hover:bg-white/10 transition-colors rounded-full"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
