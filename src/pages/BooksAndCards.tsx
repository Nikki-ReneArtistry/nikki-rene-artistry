import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const deckImages = [
  {
    src: "/assets/BOX_FRONT_BREATHE.png",
    alt: "Next Chapter reflection card deck box front",
    label: "Box front",
  },
  {
    src: "/assets/BOX_BACK_BREATHE.png",
    alt: "Next Chapter reflection card deck box back",
    label: "Box back",
  },
];

const BooksAndCards = () => {
  const [selectedDeckImage, setSelectedDeckImage] = useState(deckImages[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6">
          <header className={`max-w-3xl mx-auto text-center mb-20 md:mb-28 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">Books &amp; Cards</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Books &amp; Cards</h1>
            <p className="font-sans text-lg md:text-xl text-foreground/70 leading-relaxed">
              Art and words to spend time with, reflect on, and return to.
            </p>
          </header>

          <div className="space-y-24 md:space-y-32">
            <section className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="bg-secondary/40 p-6 md:p-10 flex items-center justify-center">
                <img
                  src="/assets/Book_Front_Web.png"
                  alt="What We Carry, What We Leave book cover"
                  className="w-full max-w-md h-auto block"
                />
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">Book</p>
                <h2 className="font-serif text-3xl md:text-4xl mb-4">What We Carry, What We Leave</h2>
                <p className="font-serif italic text-lg text-primary mb-6">
                  An Art + Poetry Collection of Memory, Transformation, and Becoming
                </p>
                <p className="font-sans text-foreground/80 leading-relaxed mb-8">
                  Original mixed-media artwork and poetry come together in a collection exploring memory, loss, resilience, and becoming. An invitation to pause, reflect, and consider what we carry forward—and what we are ready to leave behind.
                </p>
                <a
                  href="https://www.amazon.com/dp/B0HL9KZC4Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Buy on Amazon
                </a>
                <p className="font-sans text-sm text-muted-foreground mt-4">Purchased and shipped through Amazon.</p>
              </div>
            </section>

            <section className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="lg:order-2">
                <div className="bg-secondary/40 p-6 md:p-10 flex items-center justify-center">
                  <img
                    src={selectedDeckImage.src}
                    alt={selectedDeckImage.alt}
                    className="w-full max-w-md h-auto block"
                  />
                </div>
                <div className="flex justify-center gap-3 mt-5" aria-label="Choose a deck image">
                  {deckImages.map((image) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setSelectedDeckImage(image)}
                      aria-label={`Show ${image.label.toLowerCase()}`}
                      aria-pressed={selectedDeckImage.src === image.src}
                      className={`w-16 h-16 border transition-colors duration-300 ${selectedDeckImage.src === image.src ? "border-primary" : "border-foreground/20 hover:border-primary/60"}`}
                    >
                      <img src={image.src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="lg:order-1">
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">Card Deck</p>
                <h2 className="font-serif text-3xl md:text-4xl mb-4">Next Chapter</h2>
                <p className="font-serif italic text-lg text-primary mb-6">One Part | One Action | One Next Step</p>
                <p className="font-sans text-foreground/80 leading-relaxed mb-6">
                  A reflection card deck featuring original artwork by Nikki Rene. Choose a card intentionally or pull one at random, settle in with a grounding thought, explore a practical next step, and return to a question when you’re ready to reflect.
                </p>
                <p className="font-sans text-sm text-muted-foreground">Deck orders are packed and shipped directly by Nikki Rene Artistry.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BooksAndCards;
