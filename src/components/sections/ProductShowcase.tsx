import {
  Shield,
  Filter,
  Smartphone,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featureCards = [
  {
    title: "DNS-based filtering",
    description:
      "Filter harmful categories such as adult content, malware, scams, and other unsafe destinations at the network or device level.",
    icon: Filter,
  },
  {
    title: "Family-safe internet controls",
    description:
      "Help parents, guardians, and households reduce exposure to unsafe or distracting content with clearer control over internet access.",
    icon: Shield,
  },
  {
    title: "Device and network coverage",
    description:
      "Designed for users who want safer browsing across phones, tablets, and home internet environments.",
    icon: Smartphone,
  },
];

export const ProductShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wequi Tech develops practical digital safety tools that make the
            internet easier to manage for families and everyday users. The
            current public product is Wequi Guard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featureCards.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-border bg-card p-8 shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          id="wequi-guard"
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 rounded-[2rem] border border-border bg-gradient-card p-8 md:p-10 shadow-card"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
              Flagship Product
            </p>
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Wequi Guard
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Wequi Guard helps users reduce harmful and distracting online
              content using DNS-based filtering and protection controls. It is
              built for people who want a safer internet experience without
              vague promises or unnecessary complexity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Blocks harmful content categories and unsafe domains",
                "Supports safer browsing for families and households",
                "Reduces distracting or inappropriate web access",
                "Public product site available at protect.wequitech.com",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/70 p-4"
                >
                  <CheckCircle2 className="text-accent mt-0.5" size={18} />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://protect.wequitech.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="accent" size="lg" className="shadow-card">
                  Visit Wequi Guard
                  <ExternalLink className="ml-2" size={18} />
                </Button>
              </a>
              <Link to="/products">
                <Button variant="outline" size="lg">
                  Product details
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              "Screenshot placeholder: mobile onboarding or DNS setup",
              "Screenshot placeholder: filtering categories or dashboard",
              "Screenshot placeholder: device protection or reporting view",
            ].map((label) => (
              <div
                key={label}
                className="min-h-32 rounded-3xl border border-dashed border-accent/40 bg-accent/5 p-6 flex items-center"
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
