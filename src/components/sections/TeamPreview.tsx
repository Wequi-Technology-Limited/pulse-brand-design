import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Masum Akando",
    role: "Co-founder & Chief Executive Officer",
    image: "https://www.anun.xyz/assets/images/leader1.jpg",
  },
  {
    id: 2,
    name: "Md. Shanto Hossain",
    role: "Founder & Chief Technology Officer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHc5lrcs3ybDQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667625223156?e=1764201600&v=beta&t=x6NO12Rmcf6nqzZyVpSY07j31SLl7BnRU6wMZYVrE3E",
  },
  {
    id: 3,
    name: "Hriday Karmaker",
    role: "Co-founder & Senior Vice President (Internal Affairs)",
    image: "https://www.anun.xyz/assets/images/leader3.jpg",
  },
  {
    id: 4,
    name: "Imam Hasan",
    role: "Product Designer & UX Specialist",
    image: "https://www.anun.xyz/assets/images/imam.jpg",
  },
];

export const TeamPreview = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Users className="text-accent" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals working together to create a safer digital world
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-3xl aspect-square shadow-soft group-hover:shadow-card transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/team">
            <Button variant="default" size="lg">
              View Full Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
