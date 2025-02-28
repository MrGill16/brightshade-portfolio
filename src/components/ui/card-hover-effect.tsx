
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CardHoverEffectProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHoverEffect: React.FC<CardHoverEffectProps> = ({
  children,
  className,
}) => {
  const [hovering, setHovering] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;
    
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "group/card relative overflow-hidden rounded-xl transition-colors duration-300",
        hovering ? "bg-white/[0.04]" : "bg-white/[0.02]",
        className
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute -inset-px transition-opacity opacity-0 group-hover/card:opacity-100 z-10">
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-sm"
          style={{
            clipPath: hovering
              ? `circle(130px at ${coords.x}px ${coords.y}px)`
              : "circle(0px at 0px 0px)",
            transition: "clip-path 0.3s ease-out",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.08]"
        />
        <div className="absolute inset-0 border border-white/[0.08] rounded-xl" />
      </div>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};
