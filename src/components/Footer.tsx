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
            <p className="font-sans text-sm text-background/70 mb-4">
              <a href="mailto:Nikkirene812@gmail.com" className="hover:text-primary transition-colors">Nikkirene812@gmail.com</a>
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/nikki.rene.artistry.2025/" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/nikkireneartistry/" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@nikkireneartistry" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/>
                </svg>
              </a>
            </div>
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
