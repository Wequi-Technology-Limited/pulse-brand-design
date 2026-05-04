import { CheckCircle2, Circle, Clock } from "lucide-react";

export const VisionRoadmap = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
              The Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Roadmap to a Safer Internet
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            We are building the Hifzio ecosystem in strategic phases, ensuring each layer of security is robust before expanding the experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />

          {/* Phase 1 */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 group">
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-2 border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(var(--accent),0.5)]">
              <CheckCircle2 size={16} className="text-accent" />
            </div>

            {/* Content Left (Empty on mobile) */}
            <div className="hidden md:block w-5/12 text-right pr-12">
              <h3 className="text-2xl font-bold text-foreground mb-2">Phase 1: Foundation</h3>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                Completed
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Establishing the core identity and security infrastructure. Ensuring zero-knowledge architecture is rock solid.
              </p>
            </div>

            {/* Content Right */}
            <div className="w-full md:w-5/12 pl-20 md:pl-12">
              <div className="md:hidden mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">Phase 1: Foundation</h3>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                  Completed
                </span>
              </div>
              <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-soft hover:shadow-card hover:border-accent/30 transition-all">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/90 font-medium">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Hifzio ID (Unified Identity)
                  </li>
                  <li className="flex items-center gap-3 text-foreground/90 font-medium">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Hifzio Shield (Network Layer)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 group">
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
              <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
            </div>

            {/* Content Left */}
            <div className="w-full md:w-5/12 pl-20 md:pl-0 md:pr-12 md:text-right order-2 md:order-1">
              <div className="md:hidden mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">Phase 2: Protection</h3>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  <Clock size={14} /> In Progress
                </span>
              </div>
              <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-soft hover:shadow-card hover:border-primary/30 transition-all">
                <ul className="space-y-3">
                  <li className="flex items-center md:flex-row-reverse gap-3 text-foreground/90 font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Hifzio Guard (Device Level Protection)
                  </li>
                  <li className="flex items-center md:flex-row-reverse gap-3 text-foreground/90 font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Hifzio Browser (AI Blurring)
                  </li>
                </ul>
              </div>
            </div>

            {/* Content Right (Empty on mobile) */}
            <div className="hidden md:block w-5/12 pl-12 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-foreground mb-2">Phase 2: Protection</h3>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                <Clock size={14} /> In Progress
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Deploying user-facing protection applications. Integrating AI-powered real-time filtering directly onto user devices.
              </p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group opacity-70 hover:opacity-100 transition-opacity duration-300">
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-2 border-muted-foreground rounded-full flex items-center justify-center z-10">
              <Circle size={16} className="text-muted-foreground" />
            </div>

            {/* Content Left (Empty on mobile) */}
            <div className="hidden md:block w-5/12 text-right pr-12">
              <h3 className="text-2xl font-bold text-foreground mb-2">Phase 3: Experience</h3>
              <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
                Upcoming
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building secure, curated entertainment and educational experiences on top of our protected network layer.
              </p>
            </div>

            {/* Content Right */}
            <div className="w-full md:w-5/12 pl-20 md:pl-12">
              <div className="md:hidden mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">Phase 3: Experience</h3>
                <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
                  Upcoming
                </span>
              </div>
              <div className="bg-card/50 border border-border/30 rounded-2xl p-6 backdrop-blur-sm">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground font-medium">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                    Hifzio Kids
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground font-medium">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                    Hifzio Stream & Cloud
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground font-medium">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                    Hifzio Learn
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
