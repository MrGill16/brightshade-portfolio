
import React from "react";
import AnimatedText from "./ui/animated-text";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl mask-image -z-10" />
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="inline-block p-1 px-3 bg-white/[0.05] rounded-full border border-white/[0.08]">
            <span className="text-sm text-white/80">About me</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div
            className="relative aspect-square w-full max-w-md mx-auto md:mx-0 glass-card p-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent" />
            <div className="relative w-full h-full bg-black/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
              <img
                src="/placeholder.svg"
                alt="Utsav"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-medium mb-1">Utsav</h3>
                <p className="text-sm text-white/70">Full-Stack Developer</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <AnimatedText
              text="Passionate about clean, functional design"
              className="text-3xl md:text-4xl font-medium leading-tight"
              as="h2"
            />
            <div className="space-y-4 text-white/80">
              <p className="leading-relaxed">
                I'm a full-stack developer with a passion for creating elegant, user-focused digital experiences.
                My journey in web development began with a fascination for turning complex problems into 
                simple, intuitive solutions.
              </p>
              <p className="leading-relaxed">
                I specialize in modern JavaScript frameworks like React and Node.js, with a keen eye for 
                design and user experience. My approach combines technical excellence with a deep 
                understanding of what makes digital products truly enjoyable to use.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source,
                or sharing my knowledge with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { label: "Experience", value: "4+ Years" },
                { label: "Projects", value: "30+" },
                { label: "Clients", value: "15+" },
                { label: "Location", value: "Remote" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "glass-card p-4 border border-white/[0.08]",
                    index % 2 === 0 ? "sm:translate-y-4" : ""
                  )}
                >
                  <p className="text-sm text-white/60 mb-1">{item.label}</p>
                  <p className="text-xl font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
