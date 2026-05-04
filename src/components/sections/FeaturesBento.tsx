import { EyeOff, Smartphone, ShieldAlert, Cpu } from "lucide-react";

export const FeaturesBento = () => {
  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
            <span className="text-primary font-medium text-xs tracking-wider uppercase">
              Technology
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Engineered for Privacy & Safety
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            We've built a proprietary technology stack from the ground up to ensure your family's data never leaves your control.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[300px]">
          
          {/* Bento Item 1: Large */}
          <div className="md:col-span-2 rounded-3xl bg-card border border-border/50 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-accent/50 transition-colors duration-500 shadow-soft">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <EyeOff className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Real-Time AI Blurring</h3>
              <p className="text-muted-foreground max-w-md">
                Our on-device neural engine detects and obfuscates indecent or harmful images before they ever render on your screen.
              </p>
            </div>
            
            {/* Abstract visual */}
            <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tl from-accent/20 to-transparent rounded-tl-[100px] blur-2xl group-hover:blur-xl transition-all duration-500" />
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-card border-t border-l border-border/50 rounded-tl-3xl shadow-2xl flex items-center justify-center overflow-hidden transform group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-700">
               <div className="w-full h-full bg-muted/30 backdrop-blur-xl border border-white/10" />
            </div>
          </div>

          {/* Bento Item 2: Small */}
          <div className="rounded-3xl bg-card border border-border/50 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/50 transition-colors duration-500 shadow-soft">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <ShieldAlert className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Zero-Knowledge</h3>
              <p className="text-sm text-muted-foreground">
                Encryption by default. We literally cannot see your browsing history, messages, or configurations.
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 border-4 border-primary/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -right-8 -bottom-8 w-32 h-32 border-4 border-primary/10 rounded-full group-hover:scale-150 transition-transform duration-700 delay-100" />
          </div>

          {/* Bento Item 3: Small */}
          <div className="rounded-3xl bg-card border border-border/50 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-accent/50 transition-colors duration-500 shadow-soft">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Cross-Device Sync</h3>
              <p className="text-sm text-muted-foreground">
                Set parental controls on your phone and instantly deploy them across all kids' devices seamlessly.
              </p>
            </div>
            {/* Abstract visual */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-accent/10 to-transparent" />
          </div>

          {/* Bento Item 4: Large */}
          <div className="md:col-span-2 rounded-3xl bg-card border border-border/50 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/50 transition-colors duration-500 shadow-soft">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Edge Computing</h3>
              <p className="text-muted-foreground max-w-md">
                Filters run locally on your device rather than routing traffic to the cloud. Faster speeds, zero latency, and ultimate privacy.
              </p>
            </div>
            
            {/* Abstract visual */}
            <div className="absolute right-8 bottom-8 w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl group-hover:animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
};
