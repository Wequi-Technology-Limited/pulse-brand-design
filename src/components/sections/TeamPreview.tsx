import { Link } from "react-router-dom";
import { Building2, Globe, Mail, Users } from "lucide-react";

const leadership = [
  {
    id: 1,
    name: "Masum Akando",
    role: "CEO & Founder",
  },
  {
    id: 2,
    name: "Md. Shanto Hossain",
    role: "Chief Technology Officer",
  },
  {
    id: 3,
    name: "Hriday Karmaker",
    role: "Co-founder & Senior Vice President",
  },
];

export const TeamPreview = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-10 items-start">
          <div className="animate-fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Building2 className="text-accent" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Wequi Tech
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
              Wequi Tech is building digital safety tools that are easy to
              understand, publicly verifiable, and focused on practical online
              protection. The company brand is Wequi Tech and the flagship
              product brand is Wequi Guard.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="text-accent" size={20} />
                  <h3 className="font-semibold text-foreground">Who we serve</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Families, parents, guardians, and users who want safer
                  internet access and fewer harmful distractions.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="text-accent" size={20} />
                  <h3 className="font-semibold text-foreground">
                    Public presence
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Main site: wequitech.com. Product site:
                  protect.wequitech.com.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 sm:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="text-accent" size={20} />
                  <h3 className="font-semibold text-foreground">
                    Public contact
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  info@wequitech.com for support, startup verification, and
                  business inquiries. The company is based in Bangladesh.
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center text-accent hover:underline font-medium"
            >
              Read the full company overview
            </Link>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft animate-fade-up">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
              Leadership
            </p>
            <div className="space-y-4">
              {leadership.map((member) => (
                <div
                  key={member.id}
                  className="rounded-2xl border border-border/60 bg-background/70 p-5"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
            <Link
              to="/team"
              className="inline-flex items-center text-accent hover:underline font-medium mt-6"
            >
              View public team page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
