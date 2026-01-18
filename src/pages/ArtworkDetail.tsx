import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
    setTimeout(() => setIsVisible(true), 100);
  }, [id]);

  const handlePurchaseClick = () => {
    toast({
      title: "Coming Soon",
      description:
        "Stripe checkout is being set up. Contact us directly to purchase this piece.",
    });
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

  // Get related artworks (excluding current)
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
            className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
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
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">
                {artwork.collection}
              </p>

              <h1 className="font-serif text-4xl md:text-5xl mb-4">
                {artwork.title}
              </h1>

              <p className="font-serif italic text-muted-foreground text-lg mb-8">
                No Two Alike.
              </p>

              <p className="font-sans text-foreground/80 leading-relaxed mb-8">
                {artwork.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-6 mb-8 py-8 border-y border-border">
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Medium
                  </p>
                  <p className="font-sans">{artwork.medium}</p>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Size
                  </p>
                  <p className="font-sans">{artwork.size}</p>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Year
                  </p>
                  <p className="font-sans">{artwork.year}</p>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Availability
                  </p>
                  <p className={`font-sans ${artwork.available ? "text-primary" : "text-muted-foreground"}`}>
                    {artwork.available ? "Available" : "Sold"}
                  </p>
                </div>
              </div>

              {/* Price & Purchase */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Price
                  </p>
                  <p className="font-serif text-3xl text-primary">
                    ${artwork.price.toLocaleString()}
                  </p>
                </div>

                <Button
                  onClick={handlePurchaseClick}
                  disabled={!artwork.available}
                  className="btn-primary w-full sm:w-auto"
                >
                  {artwork.available ? "Purchase This Piece" : "Sold"}
                </Button>
              </div>

              {/* Shipping Note */}
              <p className="font-sans text-sm text-muted-foreground mt-6">
                Free shipping worldwide. Each piece comes with a certificate of
                authenticity signed by the artist.
              </p>
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
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground">
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
