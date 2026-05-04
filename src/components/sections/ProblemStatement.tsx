import { AlertTriangle, ShieldCheck } from "lucide-react";

export const ProblemStatement = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The internet wasn't built for families. <br />
            <span className="text-accent">So we're rebuilding it.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Today's digital landscape is filled with tracking, addictive algorithms, and inappropriate content. We believe you shouldn't have to compromise your family's safety for connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The Problem */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <AlertTriangle size={120} className="text-destructive" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="text-destructive" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The Status Quo</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✕</span>
                  Data brokers profiling your children
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✕</span>
                  Addictive algorithms designed to capture attention
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✕</span>
                  Explicit content just one accidental click away
                </li>
              </ul>
            </div>
          </div>

          {/* The Solution */}
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <ShieldCheck size={120} className="text-accent" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The Hifzio Way</h3>
              <ul className="space-y-4 text-foreground/90 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  Zero-knowledge architecture. Your data is yours alone.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  Tools designed for focus, not addiction.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  AI-powered real-time blurring of indecent content.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
