import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Building a safer digital world for everyone
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Wequi was founded with a simple yet powerful mission: to make the internet a safer place for individuals and families. In an increasingly digital world, online safety has become more critical than ever.
              </p>
              <p>
                Our team of dedicated professionals combines expertise in technology, security, and user experience to create innovative solutions that protect users without compromising their freedom or privacy.
              </p>
              <p>
                From our flagship products like Wequi Guard and Wequi Browser to our upcoming community platform Wequi Social, we're committed to providing comprehensive protection across all aspects of digital life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide innovative, user-friendly solutions that protect individuals and families in the digital world while respecting their privacy and freedom.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where everyone can enjoy the benefits of the internet without fear of harmful content, tracking, or security threats.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Trust, innovation, privacy, and user empowerment guide everything we do. We believe in creating technology that serves people, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Making a difference in the digital world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">1M+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10M+</div>
              <p className="text-muted-foreground">Threats Blocked</p>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground">Countries</p>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Protection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
