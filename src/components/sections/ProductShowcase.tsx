import { Shield, Globe, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wequi Guard",
    description: "Blocks millions of harmful sites including tracking, ads, and inappropriate content. Premium features include parental controls and app usage restrictions.",
    icon: Shield,
    comingSoon: false,
    gradient: "from-blue-500/20 to-purple-500/20",
    iosLink: "#",
    androidLink: "#",
    websiteLink: "https://protect.wequitech.com"
  },
  {
    id: 2,
    name: "Wequi Browser",
    description: "AI-powered browser that detects and blurs indecent images. Built on private and secure foundations for the ideal balance of safety and privacy.",
    icon: Globe,
    comingSoon: false,
    gradient: "from-purple-500/20 to-pink-500/20",
    iosLink: "#",
    androidLink: "#",
    websiteLink: "https://protect.wequitech.com"

  },
  {
    id: 3,
    name: "Wequi Social",
    description: "A community platform connecting like-minded individuals in a safe and moderated environment.",
    icon: Users,
    comingSoon: true,
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    id: 4,
    name: "Smart Shield",
    description: "Next-generation security solution leveraging AI to protect your entire digital ecosystem.",
    icon: Zap,
    comingSoon: true,
    gradient: "from-orange-500/20 to-red-500/20",
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
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              icon={product.icon}
              comingSoon={product.comingSoon}
              gradient={product.gradient}
              iosLink={product.iosLink}
              androidLink={product.androidLink}
              websiteLink={product.websiteLink} // 👈 new prop
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="accent" size="lg" className="shadow-card hover:shadow-soft hover:scale-105 transition-all duration-300">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
