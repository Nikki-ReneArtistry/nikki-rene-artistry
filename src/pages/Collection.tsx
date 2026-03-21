import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, ShoppingBag, ImageIcon, Sparkles, Filter, Grid3X3, LayoutGrid } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { artworks, Artwork } from "@/data/artworks";
import { Button } from "@/components/ui/button";

const Collection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [gridSize, setGridSize] = useState<"large" | "small">("large");
  const containerRef = useRef<HTMLDivElement>(null);

  const filters = ["all", "Oil on Canvas", "Acrylic on Canvas", "Watercolor on Paper", "Mixed Media on Canvas"];

  const filteredArtworks = selectedFilter === "all"
    ? artworks
    : artworks.filter((a) => a.medium === selectedFilter);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeaderVisible(true), 100);
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
      { threshold: 0.05 }
    );

    const items = containerRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredArtworks]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6 text-center">
          <p
            className={`font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Collection
          </p>
          <h1
            className={`font-serif text-5xl md:text-6xl mb-6 transition-all duration-700 delay-100 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Whispers of <span className="italic text-primary">Light</span>
          </h1>
          <p
            className={`font-sans text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Each piece in this collection is a unique exploration of color,
            form, and emotion. Handcrafted with intention, these works invite
            you to pause, reflect, and connect.
          </p>
          <p
            className={`font-serif italic text-primary mt-4 transition-all duration-700 delay-300 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            No Two Alike.
          </p>
        </div>
      </section>

      {/* Toolbar: Filters + Grid Toggle */}
      <section
        className={`pb-8 transition-all duration-700 delay-[400ms] ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-border pb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={14} className="text-muted-foreground" />
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setSelectedFilter(filter);
                    setVisibleItems(new Set());
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all duration-300 ${
                    selectedFilter === filter
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {filter === "all" ? "All" : filter}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setGridSize("large")}
                className={`p-2 rounded transition-colors ${gridSize === "large" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setGridSize("small")}
                className={`p-2 rounded transition-colors ${gridSize === "small" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Grid3X3 size={18} />
              </button>
              <span className="font-sans text-xs text-muted-foreground ml-2">
                {filteredArtworks.length} piece{filteredArtworks.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div
            ref={containerRef}
            className={`grid gap-6 transition-all duration-300 ${
              gridSize === "large"
                ? "md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            {filteredArtworks.map((artwork, index) => (
              <ProductCard
                key={artwork.id}
                artwork={artwork}
                index={index}
                visible={visibleItems.has(index)}
                compact={gridSize === "small"}
              />
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-muted-foreground">No pieces found</p>
              <button
                onClick={() => setSelectedFilter("all")}
                className="mt-4 text-primary font-sans text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
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
              collection will look on your wall. This feature
              will help you find the perfect artwork for your space.
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
  compact: boolean;
}

const ProductCard = ({ artwork, index, visible, compact }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-index={index}
      className={`group bg-card rounded-lg overflow-hidden transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        boxShadow: isHovered ? "var(--shadow-elevated)" : "var(--shadow-card)",
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
          <Link
            to={`/collection/${artwork.id}`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-sans text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors duration-200"
          >
            <ShoppingBag size={15} />
            Buy
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className={compact ? "p-3" : "p-5"}>
        <Link to={`/collection/${artwork.id}`}>
          <h3
            className={`font-serif group-hover:text-primary transition-colors duration-300 ${
              compact ? "text-base mb-1" : "text-lg mb-1.5"
            }`}
          >
            {artwork.title}
          </h3>
        </Link>

        {!compact && (
          <p className="font-sans text-xs text-muted-foreground mb-3 line-clamp-2">
            {artwork.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-sans text-[11px] text-muted-foreground uppercase tracking-wider">
              {artwork.medium}
            </span>
            {!compact && (
              <span className="font-sans text-[11px] text-muted-foreground">
                {artwork.size}
              </span>
            )}
          </div>
          <span className={`font-sans font-semibold text-primary ${compact ? "text-sm" : "text-lg"}`}>
            ${artwork.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Collection;
