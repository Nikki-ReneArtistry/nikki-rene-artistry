import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, ShoppingBag, Sparkles, ImageIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { artworks, Artwork } from "@/data/artworks";
import { Button } from "@/components/ui/button";

const sizeCategories = [
  { label: '16" Collection', size: '16"', description: "Statement pieces commanding attention" },
  { label: '12" Collection', size: '12"', description: "Beautifully balanced mid-size works" },
  { label: '10" Collection', size: '10"', description: "Perfectly intimate circular canvases" },
  { label: '8" Collection', size: '8"', description: "Petite treasures full of character" },
  { label: "Unique Editions", size: "", description: "One-of-a-kind pieces beyond dimension" },
];

const Collection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const availableCategories = sizeCategories.filter((cat) =>
    artworks.some((a) => a.size === cat.size)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeaderVisible(true), 100);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) setVisibleItems((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.05 }
    );

    const items = containerRef.current?.querySelectorAll("[data-id]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (size: string) => {
    setActiveCategory(size);
    const el = document.getElementById(`category-${size || "unique"}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <p
            className={`font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Collection
          </p>
          <h1
            className={`font-serif text-5xl md:text-7xl mb-6 transition-all duration-700 delay-100 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            No Two <span className="italic text-primary">Alike</span>
          </h1>
          <p
            className={`font-sans text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed transition-all duration-700 delay-200 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Each piece in this collection is a unique exploration of color,
            form, and emotion. Handcrafted with intention, these works invite
            you to pause, reflect, and connect.
          </p>

          {/* Size category pills */}
          <div
            className={`flex flex-wrap items-center justify-center gap-3 mt-10 transition-all duration-700 delay-300 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {availableCategories.map((cat) => (
              <button
                key={cat.size}
                onClick={() => scrollToCategory(cat.size)}
                className={`px-5 py-2.5 rounded-full text-sm font-sans tracking-wide transition-all duration-300 border ${
                  activeCategory === cat.size
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categorized Gallery */}
      <section className="pb-20" ref={containerRef}>
        <div className="container mx-auto px-6">
          {availableCategories.map((cat, catIndex) => {
            const categoryArtworks = artworks.filter((a) => a.size === cat.size);
            return (
              <div
                key={cat.size}
                id={`category-${cat.size || "unique"}`}
                className={`${catIndex > 0 ? "mt-20" : ""} scroll-mt-28`}
              >
                {/* Category Header */}
                <div className="flex items-end gap-4 mb-8 border-b border-border pb-4">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl">
                      {cat.label}
                    </h2>
                    <p className="font-sans text-sm text-muted-foreground mt-1">
                      {cat.description} · {categoryArtworks.length} piece{categoryArtworks.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                {/* Artworks Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryArtworks.map((artwork, index) => (
                    <ProductCard
                      key={artwork.id}
                      artwork={artwork}
                      index={index}
                      visible={visibleItems.has(artwork.id)}
                      delay={catIndex * 100 + index * 80}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Coming Soon: Room Visualizer */}
      <section
        className={`py-20 bg-secondary transition-all duration-700 delay-500 ${
          headerVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles size={14} />
              <span className="font-sans text-xs uppercase tracking-widest">Coming Soon</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              See It in Your <span className="italic text-primary">Space</span>
            </h2>
            <p className="font-sans text-muted-foreground mb-8 leading-relaxed">
              Upload a photo of your room and visualize how any piece from our
              collection will look on your wall.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button disabled className="btn-primary gap-2 opacity-60 cursor-not-allowed">
                <ImageIcon size={16} />
                Upload Your Room
              </Button>
              <Button disabled className="btn-outline gap-2 opacity-60 cursor-not-allowed">
                <Sparkles size={16} />
                Generate Preview
              </Button>
            </div>
            <p className="font-sans text-xs text-muted-foreground mt-6">
              This feature is currently in development. Stay tuned!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* ─── Product Card Component ─── */

interface ProductCardProps {
  artwork: Artwork;
  index: number;
  visible: boolean;
  delay: number;
}

const ProductCard = ({ artwork, index, visible, delay }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-id={artwork.id}
      className={`group bg-card rounded-xl overflow-hidden transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        boxShadow: isHovered
          ? "0 20px 40px -12px hsl(var(--primary) / 0.15)"
          : "0 1px 3px hsl(var(--foreground) / 0.06)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Sold Overlay */}
        {!artwork.available && (
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <span className="font-serif text-lg italic text-background tracking-wider">
              Sold
            </span>
          </div>
        )}

        {/* Hover Overlay with Buttons */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent flex items-end justify-center pb-6 gap-3 transition-opacity duration-400 ${
            isHovered && artwork.available ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            to={`/collection/${artwork.id}`}
            className="inline-flex items-center gap-2 bg-background/95 text-foreground px-5 py-2.5 rounded-full font-sans text-sm font-medium tracking-wide hover:bg-background transition-colors duration-200 backdrop-blur-sm"
          >
            <Eye size={15} />
            View
          </Link>
          {artwork.paymentLink ? (
            <a
              href={artwork.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-sans text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors duration-200"
            >
              <ShoppingBag size={15} />
              Buy
            </a>
          ) : (
            <Link
              to={`/collection/${artwork.id}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-sans text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors duration-200"
            >
              <ShoppingBag size={15} />
              Buy
            </Link>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <Link to={`/collection/${artwork.id}`}>
          <h3 className="font-serif text-lg mb-1.5 group-hover:text-primary transition-colors duration-300">
            {artwork.title}
          </h3>
        </Link>

        <p className="font-sans text-xs text-muted-foreground mb-3 line-clamp-2">
          {artwork.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-sans text-[11px] text-muted-foreground uppercase tracking-wider">
            {artwork.medium}
          </span>
          <span className="font-sans font-semibold text-lg text-primary">
            ${artwork.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Collection;
