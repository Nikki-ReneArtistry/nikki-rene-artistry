import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">
              Nikki Rene <span className="italic text-primary">Artistry</span>
            </h3>
            <p className="text-background/70 font-sans text-sm leading-relaxed">
              Creating unique, one-of-a-kind pieces that bring beauty and
              emotion into your space. No two alike.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-4 text-background/50">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="font-sans text-sm text-background/70 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/collection"
                className="font-sans text-sm text-background/70 hover:text-primary transition-colors"
              >
                Collection
              </Link>
              <Link
                to="/about"
                className="font-sans text-sm text-background/70 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="font-sans text-sm text-background/70 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-4 text-background/50">
              Connect
            </h4>
            <p className="font-sans text-sm text-background/70 mb-2">
              <a href="tel:8322780442" className="hover:text-primary transition-colors">(832)-278-0442</a>
            </p>
            <p className="font-sans text-sm text-background/70">
              <a href="mailto:Nikkirene812@gmail.com" className="hover:text-primary transition-colors">Nikkirene812@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-background/40">
            © {new Date().getFullYear()} Nikki Rene Artistry. All rights
            reserved.
          </p>
          <p className="font-serif italic text-sm text-primary">
            No Two Alike
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
