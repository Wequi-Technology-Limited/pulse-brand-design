import { SEO } from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Terms of Use | Wequi Tech"
        description="Terms of use for the public Wequi Tech website."
        pathname="/terms"
      />

      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Use
            </h1>
            <p className="text-lg text-muted-foreground">
              These terms apply to the public website operated by Wequi Tech at
              wequitech.com.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground">
            <div className="bg-card rounded-3xl border border-border p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
                Last Updated
              </p>
              <p>April 12, 2026</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Website Use
              </h2>
              <p>
                You may browse and use this website for lawful informational,
                support, partnership, and business inquiry purposes.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Intellectual Property
              </h2>
              <p>
                The Wequi Tech name, Wequi Guard product branding, and website
                content are the property of Wequi Tech unless otherwise stated.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Product Information
              </h2>
              <p>
                Information on this site is provided for general public and
                startup-review purposes. Product details may change as Wequi
                Guard evolves.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Contact
              </h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:info@wequitech.com"
                  className="text-accent hover:underline"
                >
                  info@wequitech.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
