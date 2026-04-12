import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Github, Mail } from "lucide-react";

export const CommunityCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-12 text-center border border-accent/20 shadow-card animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact and Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Reviewers, customers, and partners should be able to verify what
              Wequi Tech builds, how to reach us, and where to find the public
              product.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-10">
              <div className="rounded-2xl border border-border bg-card/80 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
                  Contact
                </p>
                <p className="text-sm text-muted-foreground">
                  info@wequitech.com
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card/80 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
                  Product
                </p>
                <p className="text-sm text-muted-foreground">
                  Wequi Guard at protect.wequitech.com
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card/80 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
                  Legal
                </p>
                <p className="text-sm text-muted-foreground">
                  Privacy policy and terms are available on the public website.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://www.linkedin.com/company/wequi"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-soft hover:shadow-card hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/wequi"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-soft hover:shadow-card hover:scale-110"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/wequi"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-soft hover:shadow-card hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com/Wequi-Technology-Limited"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-soft hover:shadow-card hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:hello@wequitech.com"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-soft hover:shadow-card hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Contact Wequi Tech
                </Button>
              </Link>
              <Link to="/privacy">
                <Button variant="outline" size="lg">
                  Privacy Policy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
