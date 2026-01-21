import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroArt from "@/assets/hero-art.jpg";
import logo from "@/assets/logo-new.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left lg:w-1/2">
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
              className={`font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 transition-all duration-1000 delay-700 ${
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
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-900 ${
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

          {/* Right side - Logo at 75% opacity, reduced size */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src={logo} 
              alt="" 
              className={`w-[18rem] md:w-[24rem] lg:w-[30rem] opacity-75 pointer-events-none transition-all duration-1000 delay-500 ${
                isVisible ? "scale-100" : "scale-90"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-500 ${
          isVisible && !hasScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="text-xs font-sans tracking-wider text-foreground/75">scroll down</span>
        <ChevronDown className="w-4 h-4 text-foreground/75 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
