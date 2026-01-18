import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroArt from "@/assets/hero-art.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroArt}
          alt="Featured artwork"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isVisible ? "opacity-30 scale-100" : "opacity-0 scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-24">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Featured Collection
          </p>
        </div>

        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-foreground transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Where Art
          <br />
          <span className="italic text-primary">Meets Soul</span>
        </h1>

        <p
          className={`font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Each piece is a unique expression of emotion and beauty.
          <span className="block mt-2 font-serif italic text-primary">
            No Two Alike.
          </span>
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Link to="/collection" className="btn-primary">
            View Collection
          </Link>
          <Link to="/about" className="btn-outline">
            About the Artist
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
