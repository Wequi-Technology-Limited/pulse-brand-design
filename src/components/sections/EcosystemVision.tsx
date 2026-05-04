import { Fingerprint, ShieldCheck, Globe, PlaySquare, Baby, Shield, Lock, Cloud, BookOpen } from "lucide-react";

export const EcosystemVision = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background gradient – subtle and modern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5 opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6 backdrop-blur-sm">
            <span className="text-accent text-xs font-semibold tracking-wider uppercase">The Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            A Unified Safety Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything we build is interconnected. Powered by a single, secure identity that pushes safety rules across every application seamlessly.
          </p>
        </div>

        {/* Ecosystem Visualization – Responsive Orbital View */}
        <div className="relative flex justify-center items-center min-h-[600px] md:min-h-[800px]">
          {/* Central Core: Hifzio ID */}
          <div className="absolute z-30 flex flex-col items-center group cursor-default">
            <div className="relative">
              {/* Pulsing rings around core */}
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-20" />
              <div className="absolute -inset-4 rounded-full bg-primary/20 animate-pulse" />
              <div className="w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-primary/20 via-accent/10 to-background border-2 border-primary/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary),0.3)] backdrop-blur-sm">
                <Fingerprint size={48} className="text-primary md:w-12 md:h-12" />
              </div>
            </div>
            <div className="mt-4 px-4 py-1.5 bg-background/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg">
              <span className="font-bold text-foreground">Hifzio ID</span>
              <span className="ml-2 text-xs text-muted-foreground uppercase">Core</span>
            </div>
            {/* Tooltip on hover */}
            <div className="absolute top-full mt-2 w-64 p-4 bg-card border border-border/50 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 backdrop-blur-md">
              <p className="text-sm text-foreground">The unified, encrypted identity that authenticates your family across all Hifzio products without tracking.</p>
            </div>
          </div>

          {/* Inner orbit (faster, smaller radius) */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-border/30 rounded-full border-dashed animate-[spin-slow_30s_linear_infinite]" />
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] animate-[orbit-reverse_30s_linear_infinite]">
            {/* Shield (Inner) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-card border border-accent/40 rounded-full flex items-center justify-center shadow-md hover:shadow-accent/20 transition-all duration-300 hover:scale-110 hover:bg-accent/5 cursor-default">
                <ShieldCheck size={24} className="text-accent" />
              </div>
              <span className="mt-2 text-xs md:text-sm font-medium text-foreground bg-background/70 px-2 py-0.5 rounded-md backdrop-blur-sm">Shield</span>
            </div>
            {/* Guard (Inner) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-card border border-primary/40 rounded-full flex items-center justify-center shadow-md hover:shadow-primary/20 transition-all duration-300 hover:scale-110 hover:bg-primary/5 cursor-default">
                <Shield size={24} className="text-primary" />
              </div>
              <span className="mt-2 text-xs md:text-sm font-medium text-foreground bg-background/70 px-2 py-0.5 rounded-md backdrop-blur-sm">Guard</span>
            </div>
          </div>

          {/* Outer orbit (slower, larger radius) */}
          <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-border/20 rounded-full border-dashed animate-[orbit-slow_60s_linear_infinite_reverse]" />
          <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] animate-[orbit-slow-reverse_60s_linear_infinite]">
            {/* Browser */}
            <div className="absolute top-[10%] left-[10%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-card border border-border/50 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg hover:border-accent/30 transition-all duration-300 hover:scale-110 cursor-default">
                <Globe size={28} className="text-foreground/80 group-hover:text-foreground" />
              </div>
              <span className="mt-2 text-xs md:text-sm font-medium text-foreground bg-background/80 px-3 py-1 rounded-full border border-border/30 backdrop-blur-sm">Browser</span>
            </div>
            {/* Kids */}
            <div className="absolute top-[10%] right-[10%] translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-card border border-border/50 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg hover:border-accent/30 transition-all duration-300 hover:scale-110 hover:bg-accent/5 cursor-default">
                <Baby size={28} className="text-accent" />
              </div>
              <span className="mt-2 text-xs md:text-sm font-medium text-foreground bg-background/80 px-3 py-1 rounded-full border border-border/30 backdrop-blur-sm">Kids</span>
            </div>
            {/* Stream */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-card border border-border/50 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:bg-primary/5 cursor-default">
                <PlaySquare size={28} className="text-primary" />
              </div>
              <span className="mt-2 text-xs md:text-sm font-medium text-foreground bg-background/80 px-3 py-1 rounded-full border border-border/30 backdrop-blur-sm">Stream</span>
            </div>
            {/* Cloud (extra product for fullness) */}
            <div className="absolute bottom-[10%] right-[10%] translate-x-1/2 translate-y-1/2 flex flex-col items-center group opacity-70 hover:opacity-100 transition-all">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-card border border-border/50 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg hover:border-muted-foreground/30 transition-all duration-300 hover:scale-110 cursor-default">
                <Cloud size={28} className="text-muted-foreground" />
              </div>
              <span className="mt-2 text-xs md:text-sm font-medium text-foreground bg-background/80 px-3 py-1 rounded-full border border-border/30 backdrop-blur-sm">Cloud</span>
            </div>
            {/* Learn */}
            <div className="absolute top-[10%] left-[85%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-card border border-border/50 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg hover:border-accent/30 transition-all duration-300 hover:scale-110 hover:bg-accent/5 cursor-default">
                <BookOpen size={28} className="text-accent" />
              </div>
              <span className="mt-2 text-xs md:text-sm font-medium text-foreground bg-background/80 px-3 py-1 rounded-full border border-border/30 backdrop-blur-sm">Learn</span>
            </div>
          </div>

          {/* Decorative connecting lines (optional) */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-20">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <circle cx="50%" cy="50%" r="30%" fill="url(#glow)" />
            </svg>
          </div>
        </div>

        {/* Bottom description – reinforces value */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-sm md:text-base text-muted-foreground">
            One ID, one safety policy, <span className="text-accent font-medium">seamless protection</span> across every touchpoint. From browsing to streaming to learning, Hifzio keeps your family safe.
          </p>
        </div>
      </div>

    </section>
  );
};