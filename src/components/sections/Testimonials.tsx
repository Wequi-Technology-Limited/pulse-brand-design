import { Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative z-10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Loved by modern families
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Don't just take our word for it. Here's what parents are saying about the Hifzio ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300">
            <div className="flex gap-1 mb-6 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-foreground/90 text-lg mb-8 leading-relaxed">
              "As a tech-literate parent, I was exhausted trying to patch together different parental controls. Hifzio Guard just works out of the box. The zero-knowledge privacy is the cherry on top."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                S
              </div>
              <div>
                <h4 className="font-bold text-foreground">Sarah Jenkins</h4>
                <p className="text-sm text-muted-foreground">Mother of two</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 rounded-3xl p-8 shadow-card transform md:-translate-y-4">
            <div className="flex gap-1 mb-6 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-foreground/90 text-lg mb-8 leading-relaxed font-medium">
              "The real-time AI blurring on the Hifzio Browser is nothing short of magical. I no longer have to hover over my son's shoulder when he's doing research for school."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                M
              </div>
              <div>
                <h4 className="font-bold text-foreground">Marcus T.</h4>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300">
            <div className="flex gap-1 mb-6 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-foreground/90 text-lg mb-8 leading-relaxed">
              "I love their ethical pledge. It's so rare to find a company that actively refuses to monetize your kids' attention. Hifzio Kids is a safe haven for my toddler."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                E
              </div>
              <div>
                <h4 className="font-bold text-foreground">Elena R.</h4>
                <p className="text-sm text-muted-foreground">Educator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
