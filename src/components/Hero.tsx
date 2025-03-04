
import React from "react";
import AnimatedText from "./ui/animated-text";
import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#0F1218]">
      <div className="container max-w-6xl mx-auto px-4 pt-24 md:pt-0 text-center">
        <div className="flex flex-col items-center text-center space-y-12 animate-fade-in max-w-3xl mx-auto">
          <div className="inline-block p-2 px-6 bg-[#161C25] rounded-full border border-[#212836] mb-6">
            <span className="text-sm text-white/80">Hello, I'm <span className="text-[#4B88D0]">Utsav</span></span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight text-white">
              <span className="block">Creative</span>
              <span className="block text-[#4B88D0]">Developer</span>
            </h1>
            
            <p className="text-lg text-white/70 max-w-2xl mx-auto mt-6">
              Crafting minimalist digital experiences with meticulous attention to detail. I
              specialize in creating beautiful, functional, and accessible web applications.
            </p>
          </div>
          
          {/* Social media links moved up here */}
          <div className="flex justify-center gap-4 mt-8">
            {[
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Instagram, href: "https://instagram.com" },
              { Icon: Youtube, href: "https://youtube.com" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#161C25] border border-[#212836] text-white/70 hover:text-white hover:border-white/20 transition-colors"
              >
                <item.Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
