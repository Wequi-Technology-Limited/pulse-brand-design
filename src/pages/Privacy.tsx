import { SEO } from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Privacy Policy | Wequi Tech"
        description="Privacy information for the public Wequi Tech website and contact channels."
        pathname="/privacy"
      />

      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              This page describes how Wequi Tech handles information submitted
              through the public website at wequitech.com.
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
                Information We Receive
              </h2>
              <p>
                If you contact Wequi Tech through the website form or by email,
                we receive the information you choose to provide, such as your
                name, email address, subject line, and message.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                How We Use It
              </h2>
              <p>
                We use submitted information to respond to inquiries, provide
                support, review partnership requests, and handle startup or
                product verification questions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Website Services
              </h2>
              <p>
                Wequi Tech may use third-party hosting, email delivery, and
                website infrastructure services to operate the public site. This
                policy does not replace any product-specific privacy terms that
                may apply to Wequi Guard or future products.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Contact
              </h2>
              <p>
                For privacy-related questions about the public website, email{" "}
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

export default Privacy;
