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
                <p>Art has always been my language—a way to express what words cannot capture. Every piece I create is an intimate conversation between my soul and the canvas, a dance of color and emotion that unfolds organically.</p>
                <p>My work is deeply influenced by the natural world, the play of light, and the subtle beauty found in everyday moments. I'm drawn to the interplay of soft and bold, delicate and powerful—seeking that perfect balance that resonates emotionally.</p>
                <p>Each piece in my collection is truly one-of-a-kind. I never create prints or reproductions because I believe art should be as unique as the person who connects with it. <span className="font-serif italic text-primary">No two alike.</span></p>
                <p>When you bring one of my pieces into your home, you're not just acquiring art—you're inviting a piece of my journey, my passion, and my vision into your sacred space.</p>
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
