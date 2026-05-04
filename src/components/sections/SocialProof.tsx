import { Shield, Lock, Users, Globe } from "lucide-react";

export const SocialProof = () => {
  return (
    <section className="py-12 border-y border-border/50 bg-background/50 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
          Trusted by modern families worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">Zero-Log</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">Family Safe</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">Global AI</span>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">Encrypted</span>
          </div>
        </div>
      </div>
    </section>
  );
};
