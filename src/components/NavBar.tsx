
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
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
    <header className="fixed top-0 z-50 w-full bg-black border-b border-white/10">
      <nav className="container flex items-center justify-between py-6">
        <div className="md:w-1/4">
          <a
            href="#"
            className="text-xl font-medium tracking-tight text-white"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Utsav
          </a>
        </div>
        
        <div className="hidden md:flex justify-center md:w-1/2">
          <ul className="flex space-x-8">
            {[
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
                      ? "text-white" 
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:w-1/4 flex justify-end">
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 text-sm text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </button>
          
          <button className="block md:hidden ml-4 p-2 rounded-full glass-panel">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
