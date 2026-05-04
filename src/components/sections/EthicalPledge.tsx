import { CheckCircle2 } from "lucide-react";

export const EthicalPledge = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
            <span className="text-primary font-medium text-xs tracking-wider uppercase">
              Our Commitment
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
            Technology that serves <span className="text-accent italic">you</span>, not advertisers.
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 font-light leading-relaxed">
            We are building a new paradigm for digital products. One where your family's attention isn't monetized, your data isn't harvested, and your safety is the default setting.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 shadow-soft backdrop-blur-md">
              <CheckCircle2 className="text-accent shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">No Targeted Ads</h4>
                <p className="text-muted-foreground text-sm">We don't build profiles of you or your children. We charge a fair price for a premium product.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 shadow-soft backdrop-blur-md">
              <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">No Addictive Feeds</h4>
                <p className="text-muted-foreground text-sm">Our interfaces are designed to be useful and get out of the way. No infinite scrolls.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 shadow-soft backdrop-blur-md">
              <CheckCircle2 className="text-accent shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">Open Transparency</h4>
                <p className="text-muted-foreground text-sm">Our filtering lists and core algorithms are documented clearly for parents to review.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 shadow-soft backdrop-blur-md">
              <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">Human Support</h4>
                <p className="text-muted-foreground text-sm">When you need help configuring your family's safety, you speak to real humans who care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
