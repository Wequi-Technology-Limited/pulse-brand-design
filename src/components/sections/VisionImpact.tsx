import { Users, GraduationCap, Building2, Check } from "lucide-react";

export const VisionImpact = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Who Are We Building For?
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            We believe that safety should be universal. Our ecosystem is designed to adapt to the needs of families, educators, and organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* For Families */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-accent/30 transition-all duration-300 shadow-soft hover:shadow-card group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px] group-hover:bg-accent/10 transition-colors" />
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <Users size={28} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">Modern Families</h3>
            <p className="text-muted-foreground mb-6 relative z-10">
              Parents who want to protect their children from the dangers of the internet without invading their privacy.
            </p>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-start gap-3 text-sm text-foreground/80">
                <Check size={16} className="text-accent mt-0.5 shrink-0" />
                Unified parental controls across all devices
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/80">
                <Check size={16} className="text-accent mt-0.5 shrink-0" />
                Real-time alerts for harmful content
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/80">
                <Check size={16} className="text-accent mt-0.5 shrink-0" />
                Respects children's fundamental privacy
              </li>
            </ul>
          </div>

          {/* For Kids & Teens */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 shadow-soft hover:shadow-card group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-colors" />
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <GraduationCap size={28} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">The Next Generation</h3>
            <p className="text-muted-foreground mb-6 relative z-10">
              Children and teenagers who deserve safe, curated digital spaces to learn, play, and connect.
            </p>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-start gap-3 text-sm text-foreground/80">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                No addictive algorithms or infinite scrolls
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/80">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                Zero targeted advertising or tracking
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/80">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                Curated, age-appropriate content
              </li>
            </ul>
          </div>

          {/* For Organizations */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-muted-foreground/30 transition-all duration-300 shadow-soft hover:shadow-card group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-muted rounded-full blur-[40px] group-hover:bg-muted-foreground/10 transition-colors" />
            <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <Building2 size={28} className="text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">Schools & Organizations</h3>
            <p className="text-muted-foreground mb-6 relative z-10">
              Educational institutions and businesses that need scalable, ethical network filtering.
            </p>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-start gap-3 text-sm text-foreground/80">
                <Check size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                Enterprise-grade network protection
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/80">
                <Check size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                Compliance with child safety regulations
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/80">
                <Check size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                Centralized management dashboard
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
