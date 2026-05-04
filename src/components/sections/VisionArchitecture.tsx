import { Server, Shield, Smartphone, Lock, ArrowRight, ShieldAlert } from "lucide-react";

export const VisionArchitecture = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-y border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Zero-Knowledge Architecture
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Most parental control apps route your family's unencrypted data through their servers. We process everything locally on the edge. What happens in your home, stays in your home.
          </p>
        </div>

        {/* Data Flow Visualization */}
        <div className="max-w-5xl mx-auto bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-soft overflow-hidden relative">
          {/* Animated data particles background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite]" />
            <div className="absolute top-1/2 right-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite_1s]" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
            
            {/* Step 1: Device / Edge */}
            <div className="flex flex-col items-center w-full md:w-1/3 text-center">
              <div className="w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 relative">
                <Smartphone size={40} className="text-accent relative z-10" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-sm">
                  <ShieldAlert size={16} className="text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">1. Edge Processing</h3>
              <p className="text-sm text-muted-foreground">
                AI blurring and content filtering happens instantly on the device's neural engine.
              </p>
            </div>

            {/* Connecting Arrow 1 */}
            <div className="hidden md:flex flex-col items-center justify-center w-1/6 relative">
              <div className="w-full h-0.5 bg-border relative">
                {/* Moving dot */}
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-accent rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(var(--accent),0.8)] animate-[spin_3s_linear_infinite]" style={{ animation: "slideRight 2s infinite" }} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-4 font-bold">Encrypted</span>
              <Lock size={12} className="text-muted-foreground mt-1" />
            </div>

            {/* Step 2: Hifzio Shield */}
            <div className="flex flex-col items-center w-full md:w-1/3 text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full animate-ping opacity-50" />
                <Shield size={40} className="text-primary relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">2. Hifzio Shield</h3>
              <p className="text-sm text-muted-foreground">
                The network layer anonymizes traffic. We see an encrypted stream, not your family's browsing history.
              </p>
            </div>

            {/* Connecting Arrow 2 */}
            <div className="hidden md:flex flex-col items-center justify-center w-1/6 relative">
              <div className="w-full h-0.5 bg-border relative">
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-primary rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(var(--primary),0.8)] animate-[spin_3s_linear_infinite]" style={{ animation: "slideRight 2s infinite 1s" }} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-4 font-bold">Anonymized</span>
              <ArrowRight size={12} className="text-muted-foreground mt-1" />
            </div>

            {/* Step 3: Cloud / Web */}
            <div className="flex flex-col items-center w-full md:w-1/3 text-center">
              <div className="w-24 h-24 rounded-2xl bg-muted border border-border flex items-center justify-center mb-6">
                <Server size={40} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">3. The Open Web</h3>
              <p className="text-sm text-muted-foreground">
                Securely connected to the internet, protected from trackers, ads, and malicious actors.
              </p>
            </div>
            
          </div>
        </div>
      </div>

    </section>
  );
};
