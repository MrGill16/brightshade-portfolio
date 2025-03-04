
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section
      const sections = ["home", "about", "projects", "skills", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
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
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(id);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled ? "bg-[#0F1218]/80 backdrop-blur-lg border-b border-white/[0.05]" : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between py-6">
        <a
          href="#"
          className="text-xl font-medium tracking-tight text-[#4B88D0]"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Utsav
        </a>
        <ul className="hidden md:flex space-x-8">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "contact", label: "Contact" }
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm transition-colors duration-300", 
                  activeSection === item.id 
                    ? "text-[#4B88D0] border-b-2 border-[#4B88D0] pb-1" 
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
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
