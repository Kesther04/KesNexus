import { useEffect, useRef, useState } from "react";

export default function TypeWriter({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // only trigger once
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10px 0px 0px 0px" } // trigger when 50% of the header is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, text]);

  return <span ref={ref}>{displayedText}</span>;
}
