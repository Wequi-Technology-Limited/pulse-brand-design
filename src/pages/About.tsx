import { SEO } from "@/components/SEO";
import { Building2, Globe, Mail, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="About Wequi Tech | Digital safety startup"
        description="Learn who Wequi Tech is, what Wequi Guard does, and how to verify the company's public product and contact presence."
        pathname="/about"
      />

      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Wequi Tech
            </h1>
            <p className="text-xl text-muted-foreground">
              Wequi Tech builds digital safety tools for safer internet use.
              Our flagship product, Wequi Guard, helps users reduce harmful and
              distracting online content through DNS-based filtering and device
              protection controls.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start animate-fade-up">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Company Overview
              </h2>
              <p>
                Wequi Tech is a digital safety startup focused on safer internet
                use and practical protection tools for everyday users and
                families.
              </p>
              <p>
                The company&apos;s flagship product is Wequi Guard. Wequi Guard
                helps reduce harmful and distracting online content through
                DNS-based filtering and device protection controls, giving users
                clearer control over what can be accessed online.
              </p>
              <p>
                Our mission is to make digital protection simpler, more
                transparent, and easier to verify for users, reviewers, and
                partners.
              </p>
              <p>
                Wequi Tech is based in Bangladesh and maintains public
                verification routes through the company site (wequitech.com),
                product site (protect.wequitech.com), public contact channels,
                and legal pages.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
                Company Credibility Snapshot
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Company name</p>
                  <p>Wequi Tech</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Core focus</p>
                  <p>Digital safety and safer internet use</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Flagship product</p>
                  <p>Wequi Guard</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">What Wequi Guard does</p>
                  <p>Reduces harmful and distracting online content using DNS-based filtering and device protection controls</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Primary audience</p>
                  <p>Families, parents, guardians, and safety-conscious users</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Business contact</p>
                  <p>hello@wequitech.com</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Support contact</p>
                  <p>info@wequitech.com</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Public domains</p>
                  <p>wequitech.com and protect.wequitech.com</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Region</p>
                  <p>Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground">
                Build practical digital safety tools that help users manage
                online risk with clear controls and verification-friendly public
                information.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Primary Users</h3>
              <p className="text-muted-foreground">
                Families, parents, guardians, and users who want a safer online
                environment for everyday internet access.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Product Scope
              </h3>
              <p className="text-muted-foreground">
                Wequi Guard is the current public product, and the company is
                focused on digital protection through filtering and safer
                browsing controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-accent" size={24} />
                <h2 className="text-2xl font-bold text-foreground">
                  Verification Routes
                </h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>Company website: wequitech.com</p>
                <p>Flagship product site: protect.wequitech.com</p>
                <p>Contact page: /contact</p>
                <p>Team page: /team</p>
                <p>Legal pages: /privacy and /terms</p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-accent" size={24} />
                <h2 className="text-2xl font-bold text-foreground">
                  Contact and Credibility
                </h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>Business email: hello@wequitech.com</p>
                <p>Support email: info@wequitech.com</p>
                <p>Region: Bangladesh</p>
                <p>Current flagship product: Wequi Guard</p>
                <p>Core category: digital safety and safer internet use</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
