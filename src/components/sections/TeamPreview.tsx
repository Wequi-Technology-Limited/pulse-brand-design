import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Sara Ibrahim",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Omar Yilmaz",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Fatima Ozkan",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
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
              <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
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
