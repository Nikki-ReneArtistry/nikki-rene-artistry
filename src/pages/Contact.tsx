import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description:
        "Thank you for reaching out. I'll respond within 24-48 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Get in Touch
              </p>
              <h1 className="font-serif text-4xl md:text-5xl mb-6">
                Let's <span className="italic text-primary">Connect</span>
              </h1>
              <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
                Whether you're interested in a piece, have a question about
                commissions, or simply want to share how art has touched your
                life, I'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div
                className={`transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="font-serif text-2xl mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:8322780442"
                      className="font-sans text-foreground hover:text-primary transition-colors"
                    >
                      (832)-278-0442
                    </a>
                  </div>

                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:Nikkirene812@gmail.com"
                      className="font-sans text-foreground hover:text-primary transition-colors"
                    >
                      Nikkirene812@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Response Time
                    </p>
                    <p className="font-sans text-foreground">24-48 hours</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className={`transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2 block"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2 block"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2 block"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2 block"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={6}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
