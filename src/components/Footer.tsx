
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30 -z-10" />
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-white/10">
          <a href="#" className="text-2xl font-medium mb-6 md:mb-0">
            Utsav
          </a>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            &copy; {currentYear} Utsav. All rights reserved.
          </p>
          <p className="text-sm text-white/60">
            Crafted with precision and care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
