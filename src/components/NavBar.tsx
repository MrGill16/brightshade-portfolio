
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled ? "bg-black/30 backdrop-blur-lg border-b border-white/[0.05]" : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between py-4">
        <a
          href="#"
          className="text-xl font-medium tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Utsav
        </a>
        <ul className="hidden md:flex space-x-8">
          {["about", "projects", "skills", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-sm text-white/80 hover:text-white transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:block text-sm px-5 py-2 rounded-full glass-panel hover:bg-white/10 transition-colors"
        >
          Get in Touch
        </a>
        <button className="block md:hidden p-2 rounded-full glass-panel">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
