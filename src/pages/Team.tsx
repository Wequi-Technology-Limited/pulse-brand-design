import { SEO } from "@/components/SEO";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "MD. Tanvirul islam",
    role: "CEO & Founder",
    bio: "Leads Wequi Tech and the company's public digital safety mission.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFyPdK36qMzQA/profile-displayphoto-shrink_400_400/B56ZY6XF5wGsBE-/0/1744735854756?e=1779321600&v=beta&t=sJjZjGlgqNk49rUnfbfGjIujllgk7W3hpp8C1sgiatY",
    linkedin: "https://www.linkedin.com/in/tanvirul-islam-swe",
    email: "tanvir@wequitech.com",
  },
  {
    id: 2,
    name: "Md. Shanto Hossain",
    role: "Chief Technology Officer",
    bio: "Leads product engineering and technical development for Wequi Tech.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHc5lrcs3ybDQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667625223156?e=1764201600&v=beta&t=x6NO12Rmcf6nqzZyVpSY07j31SLl7BnRU6wMZYVrE3E",
    linkedin: "https://www.linkedin.com/in/laravel-developer-117278171/",
    email: "shanto@wequitech.com",
  },
  {
    id: 3,
    name: "Hriday Karmaker",
    role: "Co-founder & Senior Vice President (Internal Affairs)",
    bio: "Supports internal operations and company coordination at Wequi Tech.",
    image: "https://www.anun.xyz/assets/images/leader3.jpg",
    linkedin: "https://www.linkedin.com/in/hriday-karmaker-532a17178/",
    email: "hriday@wequitech.com",
  },
  {
    id: 4,
    name: "Imam Hasan",
    role: "Product Designer & UX Specialist",
    bio: "Works on product design and user experience for Wequi Tech products.",
    image: "https://www.anun.xyz/assets/images/imam.jpg",
    linkedin: "https://www.linkedin.com/in/imamswe/",
    email: "imam@wequitech.com",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Team | Wequi Tech"
        description="Public team page for Wequi Tech leadership and contact routes."
        pathname="/team"
      />

      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Public leadership details for Wequi Tech.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
            <p className="text-muted-foreground">
              This page lists the public team profiles currently shared on the
              Wequi Tech website.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-border hover:border-accent/50 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links - Visible on Hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Need a direct introduction?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              For support, product review, or business inquiries, contact the
              company through the public website.
            </p>
            <a href="/contact">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-card hover:shadow-soft hover:scale-105 transition-all duration-300 font-semibold h-11 rounded-md px-8">
                Contact Wequi Tech
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
