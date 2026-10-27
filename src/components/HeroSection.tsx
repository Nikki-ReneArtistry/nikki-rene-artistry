import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Facebook, Instagram } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="min-h-screen flex items-center" style={{ backgroundColor: "#F7F3EB" }}>
      <div className="container mx-auto px-6 pt-28 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] items-center gap-8 lg:gap-16">
          <div
            className={`lg:col-start-1 lg:row-start-1 flex flex-col gap-5 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="font-sans text-xs uppercase tracking-[0.3em]"
              style={{ color: "#8A6845" }}
            >
              Original Mixed Media
            </p>

            <h1
              className="font-serif leading-tight"
              style={{ color: "#292722", fontSize: "clamp(2.6rem, 5vw, 4.5rem)", lineHeight: 1.12 }}
            >
              Where Art
              <br />
              <em style={{ color: "#8A6845" }}>Meets Soul.</em>
            </h1>

            <p
              className="font-sans text-base md:text-lg leading-relaxed max-w-md"
              style={{ color: "#5a5045" }}
            >
              Original mixed-media art inspired by nature, texture, and the beauty of becoming.
            </p>
          </div>

          <div
            className={`lg:col-start-2 lg:row-span-2 w-full transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src="/assets/WhereStillnessTakesRoot%20copy.jpg"
              alt="Where Stillness Takes Root — original mixed media by Nikki Rene"
              className="w-full h-auto block"
              style={{ boxShadow: "0 12px 48px -8px rgba(41,39,34,0.18)" }}
            />
          </div>

          <div
            className={`lg:col-start-1 lg:row-start-2 flex flex-col gap-5 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/collection"
                className="inline-flex items-center justify-center px-7 py-3 font-sans text-sm tracking-wide transition-all duration-300"
                style={{ backgroundColor: "#8A6845", color: "#F7F3EB" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#75593a")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#8A6845")}
              >
                Explore the Art
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-7 py-3 font-sans text-sm tracking-wide border transition-all duration-300"
                style={{ borderColor: "#8A6845", color: "#292722" }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "#8A6845";
                  e.currentTarget.style.color = "#F7F3EB";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#292722";
                }}
              >
                About the Artist
              </Link>
            </div>

            <p className="font-serif italic text-sm" style={{ color: "#8A6845" }}>
              No Two Alike.
            </p>

            <div className="flex gap-5">
              <a
                href="https://www.facebook.com/nikki.rene.artistry.2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-60"
                style={{ color: "#8A6845" }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/nikkireneartistry/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-60"
                style={{ color: "#8A6845" }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@nikkireneartistry"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-60"
                style={{ color: "#8A6845" }}
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
