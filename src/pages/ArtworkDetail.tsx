import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, ImageIcon, Sparkles, Shield, Truck, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArtworkById, artworks } from "@/data/artworks";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isVisible, setIsVisible] = useState(false);
  const artwork = id ? getArtworkById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  }, [id]);

  const handlePurchaseClick = () => {
    if (artwork?.paymentLink) {
      window.open(artwork.paymentLink, "_blank", "noopener,noreferrer");
    } else {
      toast({
        title: "Coming Soon",
        description:
          "Stripe checkout is being set up. Contact us directly to purchase this piece.",
      });
    }
  };

  if (!artwork) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Artwork Not Found</h1>
          <Link to="/collection" className="btn-primary">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const relatedArtworks = artworks
    .filter((a) => a.id !== artwork.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/collection"
            className={`inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-all duration-500 mb-8 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <ArrowLeft size={16} />
            Back to Collection
          </Link>

          {/* Artwork Detail */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="aspect-square overflow-hidden rounded-lg shadow-2xl bg-secondary">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Visualizer CTA under image */}
              <div className="mt-4 p-4 bg-secondary rounded-lg flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <ImageIcon size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-sm font-medium">See it in your space</p>
                  <p className="font-sans text-xs text-muted-foreground">Room Visualizer — Coming Soon</p>
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Soon
                </span>
              </div>
            </div>

            {/* Details */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">
                {artwork.collection}
              </p>

              <h1 className="font-serif text-4xl md:text-5xl mb-4">
                {artwork.title}
              </h1>

              <p className="font-serif italic text-muted-foreground text-lg mb-6">
                No Two Alike.
              </p>

              {/* Price prominent */}
              <div className="mb-6">
                <p className="font-serif text-4xl text-primary">
                  ${artwork.price.toLocaleString()}
                </p>
              </div>

              <p className="font-sans text-foreground/80 leading-relaxed mb-8">
                {artwork.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-6 mb-8 py-6 border-y border-border">
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                    Medium
                  </p>
                  <p className="font-sans text-sm">{artwork.medium}</p>
                </div>
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                    Size
                  </p>
                  <p className="font-sans text-sm">{artwork.size}</p>
                </div>
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                    Year
                  </p>
                  <p className="font-sans text-sm">{artwork.year}</p>
                </div>
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                    Status
                  </p>
                  <p className={`font-sans text-sm font-medium ${artwork.available ? "text-primary" : "text-muted-foreground"}`}>
                    {artwork.available ? "Available" : "Sold"}
                  </p>
                </div>
              </div>

              {/* Purchase Button */}
              <Button
                onClick={handlePurchaseClick}
                disabled={!artwork.available}
                className="btn-primary w-full gap-2 text-base py-6 mb-4"
              >
                <ShoppingBag size={18} />
                {artwork.available ? "Purchase This Piece" : "Sold"}
              </Button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="flex flex-col items-center text-center gap-1.5 p-3 rounded-lg bg-secondary">
                  <Truck size={16} className="text-primary" />
                  <span className="font-sans text-[10px] text-muted-foreground uppercase tracking-wider">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1.5 p-3 rounded-lg bg-secondary">
                  <Award size={16} className="text-primary" />
                  <span className="font-sans text-[10px] text-muted-foreground uppercase tracking-wider">Authenticated</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1.5 p-3 rounded-lg bg-secondary">
                  <Shield size={16} className="text-primary" />
                  <span className="font-sans text-[10px] text-muted-foreground uppercase tracking-wider">Secure Payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Works */}
          <section className="mt-24">
            <h2 className="font-serif text-3xl mb-8">
              More from <span className="italic text-primary">the Collection</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArtworks.map((related) => (
                <Link
                  to={`/collection/${related.id}`}
                  key={related.id}
                  className="card-art group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="font-sans text-sm text-primary font-medium">
                      ${related.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtworkDetail;
