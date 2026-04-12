import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Filter,
  Users,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          opacity: 0.1,
        }}
      />

      <div className="absolute inset-0 bg-background/40" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center animate-fade-up">
          <div>
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-accent/10 rounded-2xl border border-accent/20 backdrop-blur-sm">
              <Shield size={16} className="text-accent" />
              <span className="text-accent font-semibold text-sm tracking-wide">
                Wequi Tech | Public digital safety startup
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Wequi Tech builds digital safety tools for safer internet use.
            </h1>

            <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl leading-relaxed font-medium">
              Our flagship product, <span className="text-accent">Wequi Guard</span>,
              helps users reduce harmful and distracting online content through
              DNS-based filtering and device protection controls.
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl leading-relaxed">
              Built for families, parents, guardians, and safety-conscious users
              who want a cleaner, safer, more focused internet experience across
              their devices and networks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
              <Link to="/products#wequi-guard">
                <Button
                  variant="default"
                  size="lg"
                  className="group relative bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-8 py-6 rounded-2xl font-semibold text-lg shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    View Wequi Guard
                    <ArrowRight
                      className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
                      size={20}
                    />
                  </span>
                </Button>
              </Link>

              <a
                href="https://protect.wequitech.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 rounded-2xl border-2 border-border/50 hover:border-accent/50 hover:bg-accent/5 hover:text-accent font-semibold text-lg backdrop-blur-sm bg-background/50 transition-all duration-300 hover:scale-105"
                >
                  Product site
                  <ExternalLink className="ml-3" size={18} />
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="backdrop-blur-sm bg-background/50 rounded-2xl p-5 border border-border/20">
                <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                  <Filter className="text-accent" size={18} />
                  What we build
                </div>
                <p className="text-sm text-muted-foreground">
                  DNS-based filtering and device safety controls.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-background/50 rounded-2xl p-5 border border-border/20">
                <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                  <Users className="text-accent" size={18} />
                  Who it serves
                </div>
                <p className="text-sm text-muted-foreground">
                  Families, parents, guardians, and focused users.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-background/50 rounded-2xl p-5 border border-border/20">
                <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                  <Mail className="text-accent" size={18} />
                  Public contact
                </div>
                <p className="text-sm text-muted-foreground">
                  info@wequitech.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background/70 backdrop-blur-xl border border-border/30 rounded-[2rem] p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">
                  Reviewer Snapshot
                </p>
                <h2 className="text-3xl font-bold text-foreground">
                  Verify Wequi Tech quickly
                </h2>
              </div>
            </div>

            <div className="space-y-5">
              {[
                "Company: Wequi Tech",
                "Flagship product: Wequi Guard",
                "Category: digital safety and family-safe internet tools",
                "Core product concept: DNS-based filtering and protection controls",
                "Public domains: wequitech.com and protect.wequitech.com",
                "Contact: info@wequitech.com",
                "Region: Bangladesh",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/40 bg-card/80 p-4"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center backdrop-blur-sm bg-background/30">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
