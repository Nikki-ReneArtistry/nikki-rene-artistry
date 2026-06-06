import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, ShoppingBag, Sparkles, ImageIcon, Layers, Circle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { artworks, Artwork } from "@/data/artworks";
import { Button } from "@/components/ui/button";

const ROUND_SIZES = ['16"', '14"', '12"', '10"', '8"'];

const sizeFilters = [
  { label: "All Pieces", value: "all", icon: Layers },
  { label: '16" Round', value: '16"', icon: Circle },
  { label: '14" Round', value: '14"', icon: Circle },
  { label: '12" Round', value: '12"', icon: Circle },
  { label: '10" Round', value: '10"', icon: Circle },
  { label: '8" Round', value: '8"', icon: Circle },
  { label: "Other Sizes", value: "other", icon: Circle },
];

const matchesFilter = (size: string, filter: string) => {
  if (filter === "all") return true;
  if (filter === "other") return !ROUND_SIZES.includes(size);
  return size === filter;
};

const Collection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);

  const availableFilters = sizeFilters.filter(
    (f) =>
      f.value === "all" ||
      artworks.some((a) => matchesFilter(a.size, f.value))
  );

  const filteredArtworks = artworks.filter((a) =>
    matchesFilter(a.size, activeFilter)
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
  }, [filteredArtworks]);

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
    setVisibleItems(new Set());
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
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
            form, and emotion. Handcrafted with intention.
          </p>
        </div>
      </section>

      {/* Main content: sidebar + gallery */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          {/* Mobile filter bar */}
          <div className="md:hidden mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
              {availableFilters.map((filter) => {
                const isActive = activeFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    onClick={() => handleFilterChange(filter.value)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all duration-300 border ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-muted-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sidebar */}
            <aside
              className={`hidden md:block w-56 shrink-0 transition-all duration-700 delay-300 ${
                headerVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="sticky top-28">
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Browse by Size
                </p>
                <nav className="flex flex-col gap-1">
                  {availableFilters.map((filter) => {
                    const isActive = activeFilter === filter.value;
                    const count =
                      filter.value === "all"
                        ? artworks.length
                        : artworks.filter((a) => matchesFilter(a.size, filter.value)).length;

                    return (
                      <button
                        key={filter.value}
                        onClick={() => handleFilterChange(filter.value)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-sans transition-all duration-300 text-left group ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <filter.icon
                            size={filter.value === "all" ? 16 : 12}
                            className={isActive ? "text-primary-foreground" : "text-muted-foreground/50 group-hover:text-accent-foreground"}
                          />
                          {filter.label}
                        </span>
                        <span
                          className={`text-xs tabular-nums ${
                            isActive ? "text-primary-foreground/70" : "text-muted-foreground/50"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Gallery */}
            <div className="flex-1 min-w-0" ref={containerRef}>
              {/* Results header */}
              <div className="flex items-center justify-between mb-6">
                <p className="font-sans text-sm text-muted-foreground">
                  Showing{" "}
                  <span className="font-medium text-foreground">
                    {filteredArtworks.length}
                  </span>{" "}
                  piece{filteredArtworks.length !== 1 ? "s" : ""}
                  {activeFilter !== "all" && (
                    <span>
                      {" "}in{" "}
                      <span className="text-primary font-medium">
                        {availableFilters.find((f) => f.value === activeFilter)?.label}
                      </span>
                    </span>
                  )}
                </p>
                {activeFilter !== "all" && (
                  <button
                    onClick={() => handleFilterChange("all")}
                    className="text-xs font-sans text-primary hover:underline"
                  >
                    View all
                  </button>
                )}
              </div>

              {/* Grid */}
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredArtworks.map((artwork, index) => (
                  <ProductCard
                    key={artwork.id}
                    artwork={artwork}
                    visible={visibleItems.has(artwork.id)}
                    delay={index * 80}
                  />
                ))}
              </div>

              {filteredArtworks.length === 0 && (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl text-muted-foreground">
                    No pieces found
                  </p>
                  <button
                    onClick={() => handleFilterChange("all")}
                    className="mt-4 text-primary font-sans text-sm hover:underline"
                  >
                    View all pieces
                  </button>
                </div>
              )}
            </div>
          </div>
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

/* ─── Product Card ─── */

interface ProductCardProps {
  artwork: Artwork;
  visible: boolean;
  delay: number;
}

const ProductCard = ({ artwork, visible, delay }: ProductCardProps) => {
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
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
        />

        {!artwork.available && (
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <span className="font-serif text-lg italic text-background tracking-wider">
              Sold
            </span>
          </div>
        )}

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
          <div className="flex flex-col">
            <span className="font-sans text-[11px] text-muted-foreground uppercase tracking-wider">
              {artwork.medium}
            </span>
            {artwork.size && (
              <span className="font-sans text-[11px] text-muted-foreground">
                {artwork.size}
              </span>
            )}
          </div>
          <span className="font-sans font-semibold text-lg text-primary">
            ${artwork.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Collection;
