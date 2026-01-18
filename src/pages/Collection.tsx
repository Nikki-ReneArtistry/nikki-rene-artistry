import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { artworks } from "@/data/artworks";

const Collection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = containerRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4 animate-fade-in">
            The Collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6 animate-fade-in-up">
            Whispers of <span className="italic text-primary">Light</span>
          </h1>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Each piece in this collection is a unique exploration of color,
            form, and emotion. Handcrafted with intention, these works invite
            you to pause, reflect, and connect.
          </p>
          <p className="font-serif italic text-primary mt-4 animate-fade-in-up">
            No Two Alike.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div
            ref={containerRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {artworks.map((artwork, index) => (
              <Link
                to={`/collection/${artwork.id}`}
                key={artwork.id}
                data-index={index}
                className={`card-art group cursor-pointer transition-all duration-700 ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {!artwork.available && (
                    <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
                      <span className="font-serif text-lg italic text-background">
                        Sold
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mb-3 line-clamp-2">
                    {artwork.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-sans text-xs text-muted-foreground block">
                        {artwork.medium}
                      </span>
                      <span className="font-sans text-xs text-muted-foreground">
                        {artwork.size}
                      </span>
                    </div>
                    <span className="font-sans text-lg font-medium text-primary">
                      ${artwork.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;
