import { HeartHandshake } from "lucide-react";

export const VisionManifesto = () => {
  return (
    <section className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <HeartHandshake className="w-16 h-16 text-accent mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
              We're building the internet we want our own children to inherit.
            </h2>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl md:text-2xl text-background/80 font-light leading-relaxed mb-8">
              The digital world has evolved into an attention economy. Most tech companies treat users as the product, harvesting data and designing addictive interfaces to maximize screen time. When this model meets children, the results are devastating.
            </p>
            <p className="text-xl md:text-2xl text-background/80 font-light leading-relaxed mb-8">
              Hifzio was founded on a simple, radical premise: <strong className="text-background font-semibold">Technology should serve families, not exploit them.</strong>
            </p>
            <p className="text-xl md:text-2xl text-background/80 font-light leading-relaxed mb-12">
              We are committing to a zero-knowledge architecture because privacy is a fundamental human right. We are committing to ad-free, non-addictive interfaces because your family's attention belongs to you. We are building an ecosystem where safety isn't an afterthought—it's the foundation.
            </p>
          </div>

          <div className="flex items-center gap-6 pt-12 border-t border-background/20">
            <div className="w-16 h-16 rounded-full bg-background/10 overflow-hidden flex items-center justify-center">
              {/* Placeholder for founder photo */}
              <span className="text-2xl font-bold text-background/50">H</span>
            </div>
            <div>
              <p className="font-bold text-xl text-background">The Hifzio Team</p>
              <p className="text-accent">Founders & Engineers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
