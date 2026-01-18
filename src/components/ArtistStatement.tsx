import { useEffect, useRef, useState } from "react";

const ArtistStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-accent/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-8">
              Artist Statement
            </p>
          </div>

          <blockquote
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-serif text-2xl md:text-4xl leading-relaxed text-foreground/90 mb-8">
              "Art is the language of the soul—each brushstroke a whisper of
              emotion, each color a story untold. I create not to replicate,
              but to{" "}
              <span className="italic text-primary">reveal</span>."
            </p>
          </blockquote>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-serif text-lg italic text-primary">
              — Nikki Rene
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistStatement;
