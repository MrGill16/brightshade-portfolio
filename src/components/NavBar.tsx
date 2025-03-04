
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
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
          
          <button 
            className="block md:hidden ml-4 p-2 rounded-full glass-panel" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 pt-20 md:hidden">
          <div className="container px-4">
            <ul className="flex flex-col items-center space-y-8 py-8">
              {[
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <li key={item.id} className="w-full">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-xl w-full py-2 transition-colors duration-300",
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
        </div>
      )}
    </header>
  );
};

export default NavBar;
