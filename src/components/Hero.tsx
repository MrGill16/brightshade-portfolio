
import React from "react";
import AnimatedText from "./ui/animated-text";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl mask-image" />
      <div className="container max-w-6xl mx-auto px-4 pt-24 md:pt-0">
        <div className="flex flex-col items-center text-center space-y-12 animate-fade-in">
          <div className="inline-block p-1 px-3 bg-white/[0.05] rounded-full border border-white/[0.08] mb-6">
            <span className="text-sm text-white/80">Full-Stack Developer</span>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <AnimatedText
              text="Crafting digital experiences with precision and care"
              className="text-4xl md:text-6xl font-medium leading-tight md:leading-tight"
              as="h1"
              delay={0.1}
              staggerChildren={0.03}
            />
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              I build modern web applications with a focus on clean design, 
              intuitive user experience, and scalable architecture.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 glass-panel hover:bg-white/10 transition-colors rounded-full"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/50"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
