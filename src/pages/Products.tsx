import { Link } from "react-router-dom";
import {
  Shield,
  Filter,
  Users,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const Products = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Wequi Guard | Product by Wequi Tech"
        description="Wequi Guard is Wequi Tech's flagship digital safety product for reducing harmful and distracting online content with DNS-based filtering and protection controls."
        pathname="/products"
      />

      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Products
            </h1>
            <p className="text-xl text-muted-foreground">
              The current public product from Wequi Tech is Wequi Guard.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="wequi-guard"
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8"
          >
            <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-soft">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-accent" size={32} />
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
                Flagship Product
              </p>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Wequi Guard
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Wequi Guard helps users reduce harmful and distracting online
                content using DNS-based filtering and protection controls. It is
                a digital safety product designed to make internet use cleaner,
                safer, and easier to manage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl border border-border/60 bg-background/60 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-accent" size={20} />
                    <h3 className="font-semibold text-foreground">
                      Who it helps
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Families, parents, guardians, and users who want stronger
                    control over online safety and fewer harmful distractions.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/60 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Filter className="text-accent" size={20} />
                    <h3 className="font-semibold text-foreground">
                      What problem it solves
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unwanted access to unsafe, adult, scam, malware, or
                    distracting content across internet-connected devices.
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "DNS-based filtering for harmful and distracting categories",
                  "Safer browsing controls for home and personal device use",
                  "Product site available at protect.wequitech.com",
                  "Designed to be simple enough for quick setup and review",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-0.5" size={18} />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://protect.wequitech.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="accent" size="lg">
                    Visit Wequi Guard
                    <ExternalLink className="ml-2" size={18} />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact the team
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Product Availability
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Company</p>
                    <p>Wequi Tech</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Product</p>
                    <p>Wequi Guard</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Public product site</p>
                    <p>protect.wequitech.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Platform status</p>
                    <p>Public web presence available. Add confirmed app store links here if needed.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Support contact</p>
                    <p>info@wequitech.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Screenshot Placeholders
                </h3>
                <div className="space-y-4">
                  {[
                    "Add a real screenshot of the Wequi Guard landing screen or dashboard.",
                    "Add a screenshot showing filter categories, setup, or safe browsing controls.",
                    "Add a screenshot showing device-level or network-level protection settings.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-5"
                    >
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Need startup or product verification?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact Wequi Tech directly for support, product questions, or
              startup review follow-up.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="shadow-card hover:shadow-soft hover:scale-105 transition-all duration-300">
                Contact Wequi Tech
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
