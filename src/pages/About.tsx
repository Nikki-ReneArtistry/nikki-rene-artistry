import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import guardiansOfTheBreeze from "@/assets/GuardiansoftheBReeze.jpg";

const About = () => {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className={`lg:col-start-2 lg:row-start-1 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">About the Artist</p>
              <h1 className="font-serif text-4xl md:text-5xl">Nikki Rene</h1>
            </div>

            <div className={`lg:col-start-1 lg:row-span-2 lg:row-start-1 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <img src={guardiansOfTheBreeze} alt="Guardians of the Breeze — original mixed-media painting by Nikki Rene" className="w-full h-auto block" />
            </div>

            <div className={`lg:col-start-2 lg:row-start-2 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-5 font-sans text-foreground/80 leading-relaxed">
                <p>I'm Nikki Rene, a mixed-media artist based in Austin, Texas. I create through layers of paint, paper, fabric, texture, and found elements, exploring the stories we carry and the ways we keep becoming. My studio is a place for curiosity and experimentation.</p>
                <p>A flowing wash of color might become a landscape; a scrap of vintage paper might shape an entirely new story. I follow those possibilities, building, reworking, and discovering what each piece can become.</p>
                <p>Nature, memory, resilience, and transformation are recurring threads in my work. Birds, trees, and weathered surfaces offer ways to explore both the beauty around us and the experiences within us. Some pieces invite stillness. Others make a bolder statement.</p>
                <p>Each original artwork has its own character and history. Through my paintings, books, and reflection cards, I hope to create moments of connection—something that catches your eye, stirs a memory, or helps you see part of your own story. <span className="font-serif italic text-primary">No two alike.</span></p>
              </div>
              <div className="mt-8">
                <Link to="/collection" className="btn-primary">Explore the Collection</Link>
              </div>
            </div>
          </div>

          <section className="mt-24 md:mt-32">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">Philosophy</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-8">The Creative Process</h2>
              <div className="grid md:grid-cols-3 gap-12 text-left mt-12">
                <div>
                  <h3 className="font-serif text-xl mb-4 text-primary">Intention</h3>
                  <p className="font-sans text-muted-foreground">Every piece begins with a moment of stillness—a meditation on the emotion I wish to capture and share with the world.</p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4 text-primary">Flow</h3>
                  <p className="font-sans text-muted-foreground">I allow the work to evolve naturally, trusting the process and letting intuition guide each brushstroke and color choice.</p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4 text-primary">Connection</h3>
                  <p className="font-sans text-muted-foreground">The final piece is complete when it speaks—when it creates that ineffable connection between art and viewer.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
