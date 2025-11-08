import { Shield, Globe, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Kahf Guard",
    description: "Blocks millions of harmful sites including tracking, ads, and inappropriate content. Premium features include parental controls and app usage restrictions.",
    icon: Shield,
    comingSoon: false,
    link: "/products",
  },
  {
    id: 2,
    name: "Kahf Browser",
    description: "AI-powered browser that detects and blurs indecent images. Built on private and secure foundations for the ideal balance of safety and privacy.",
    icon: Globe,
    comingSoon: false,
    link: "/products",
  },
  {
    id: 3,
    name: "Mahfil",
    description: "A community platform connecting like-minded individuals in a safe and moderated environment.",
    icon: Users,
    comingSoon: true,
    link: "/products",
  },
  {
    id: 4,
    name: "Smart Shield",
    description: "Next-generation security solution leveraging AI to protect your entire digital ecosystem.",
    icon: Zap,
    comingSoon: true,
    link: "/products",
  },
];

export const ProductShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions designed to protect and enhance your digital experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border hover:border-accent/50 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.comingSoon && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
                    Coming Soon
                  </span>
                </div>
              )}

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <product.icon className="text-accent" size={28} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <Link to={product.link}>
                    <Button variant="outline" size="sm" className="group-hover:border-accent group-hover:text-accent transition-colors">
                      {product.comingSoon ? "Learn More" : "Explore"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="accent" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
