import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";

interface ArtPiece {
  id: string;
  title: string;
  image: string;
  price: number;
  size: string;
}

const featuredPieces: ArtPiece[] = [
  {
    id: "ethereal-flow",
    title: "Ethereal Flow",
    image: art1,
    price: 2400,
    size: '24" × 24"',
  },
  {
    id: "midnight-reverie",
    title: "Midnight Reverie",
    image: art2,
    price: 3200,
    size: '36" × 36"',
  },
  {
    id: "lavender-dreams",
    title: "Lavender Dreams",
    image: art3,
    price: 1800,
    size: '20" × 20"',
  },
];

const FeaturedArt = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );

    const items = containerRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Curated Selection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Featured <span className="italic">Pieces</span>
          </h2>
        </div>

        <div
          ref={containerRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {featuredPieces.map((piece, index) => (
            <Link
              to={`/collection/${piece.id}`}
              key={piece.id}
              data-index={index}
              className={`card-art group cursor-pointer transition-all duration-700 ${
                visibleItems.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2">{piece.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-muted-foreground">
                    {piece.size}
                  </span>
                  <span className="font-sans text-lg font-medium text-primary">
                    ${piece.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/collection" className="btn-outline">
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArt;
