import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  once?: boolean;
}
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  as: Component = "h1",
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.05,
  once = true
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const animatedElements = useRef<HTMLSpanElement[]>([]);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatedElements.current.forEach((el, index) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, delay * 1000 + index * staggerChildren * 1000);
          });
          if (once && observer) {
            observer.disconnect();
          }
        } else if (!once) {
          animatedElements.current.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(10px)";
          });
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });
    observer.observe(container);
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [delay, staggerChildren, once]);
  return <Component ref={containerRef} className={cn("inline-block relative", className)}>
      {text.split(" ").map((word, wordIndex) => <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => {})}
          <span> </span>
        </span>)}
    </Component>;
};
export default AnimatedText;