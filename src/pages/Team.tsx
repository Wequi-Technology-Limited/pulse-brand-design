import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Masum Akando",
    role: "CEO & Founder",
    bio: "Visionary leader with 8+ years in tech and cybersecurity. Passionate about creating a safer digital world.",
    image: "https://www.anun.xyz/assets/images/leader1.jpg",
    linkedin: "https://www.linkedin.com/in/masumakando/",
    email: "masum@wequitech.com",
  },
  {
    id: 2,
    name: "Md. Shanto Hossain",
    role: "Chief Technology Officer",
    bio: "Tech innovator specializing in AI and machine learning. Leading our technical vision and product development.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHc5lrcs3ybDQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667625223156?e=1764201600&v=beta&t=x6NO12Rmcf6nqzZyVpSY07j31SLl7BnRU6wMZYVrE3E",
    linkedin: "https://www.linkedin.com/in/laravel-developer-117278171/",
    email: "shanto@wequitech.com",
  },
  {
    id: 3,
    name: "Hriday Karmaker",
    role: "Co-founder & Senior Vice President (Internal Affairs)",
    bio: "Experienced leader driving internal operations and team cohesion. Committed to our mission of internet safety.",
    image: "https://www.anun.xyz/assets/images/leader3.jpg",
    linkedin: "https://www.linkedin.com/in/hriday-karmaker-532a17178/",
    email: "hriday@wequitech.com",
  },
  {
    id: 4,
    name: "Imam Hasan",
    role: "Product Designer & UX Specialist",
    bio: "UX/UI specialist creating intuitive, beautiful experiences. Believes design should empower users.",
    image: "https://www.anun.xyz/assets/images/imam.jpg",
    linkedin: "https://www.linkedin.com/in/imamswe/",
    email: "imam@wequitech.com",
  },
  {
    id: 5,
    name: "Yusuf Demir",
    role: "Security Engineer",
    bio: "Cybersecurity expert protecting millions of users. Constantly innovating in threat detection and prevention.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "yusuf@wequitech.com",
  },
  {
    id: 6,
    name: "Ayşe Kaya",
    role: "Marketing Director",
    bio: "Strategic marketer spreading our mission globally. Connecting with communities to build a safer internet.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "ayse@Wequi.com",
  },
  {
    id: 7,
    name: "Mehmet Arslan",
    role: "Product Manager",
    bio: "Product strategist turning user needs into innovative solutions. Bridging technology and user experience.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "mehmet@Wequi.com",
  },
  {
    id: 8,
    name: "Zeynep Duran",
    role: "Community Manager",
    bio: "Building and nurturing our global community. Passionate about creating meaningful connections.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "zeynep@Wequi.com",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Meet the passionate people making the internet safer
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Want to Join Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion for making the internet safer.
            </p>
            <a href="/careers">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-card hover:shadow-soft hover:scale-105 transition-all duration-300 font-semibold h-11 rounded-md px-8">
                View Open Positions
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
