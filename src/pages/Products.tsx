import { Shield, Globe, Users, Zap, Lock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";

const products = [
  {
    id: 1,
    name: "Wequi Guard",
    tagline: "Complete Protection for Your Family",
    description: "Blocks millions of harmful sites including tracking, ads, porn, and harmful ideologies. Enforces Safe-Search and YouTube restrictions to prevent exposure to inappropriate content.",
    icon: Shield,
    features: [
      "Block tracking, ads, and harmful content",
      "Parental control system",
      "App usage restrictions",
      "Prayer time silence mode",
      "YouTube & Social media filtering",
    ],
    comingSoon: false,
    gradient: "from-blue-500/20 to-purple-500/20",
    iosLink: "#",
    androidLink: "#",
  },
  {
    id: 2,
    name: "Wequi Browser",
    tagline: "Browse with Privacy & Safety",
    description: "AI-powered browser that runs on your device, detecting indecent images and blurring them as you browse. Built on Brave and DuckDuckGo for ultimate privacy.",
    icon: Globe,
    features: [
      "On-device AI image detection",
      "Automatic content blurring",
      "Built on Brave & DuckDuckGo",
      "Complete privacy protection",
      "Zero data collection",
    ],
    comingSoon: false,
    gradient: "from-purple-500/20 to-pink-500/20",
    iosLink: "#",
    androidLink: "#",
  },
  {
    id: 3,
    name: "Wequi Social",
    tagline: "Connect in a Safe Community",
    description: "A moderated community platform where like-minded individuals can connect, share, and grow together in a safe, respectful environment.",
    icon: Users,
    features: [
      "Moderated discussions",
      "Safe community spaces",
      "Privacy-focused design",
      "Interest-based groups",
      "Event organization",
    ],
    comingSoon: true,
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    id: 4,
    name: "Smart Shield",
    tagline: "Next-Gen Security Solution",
    description: "Advanced AI-powered security system that protects your entire digital ecosystem with real-time threat detection and prevention.",
    icon: Zap,
    features: [
      "AI threat detection",
      "Real-time protection",
      "Multi-device support",
      "Automatic updates",
      "24/7 monitoring",
    ],
    comingSoon: true,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    name: "Privacy Vault",
    tagline: "Secure Your Digital Life",
    description: "Encrypted storage solution for your sensitive data, passwords, and digital documents with military-grade encryption.",
    icon: Lock,
    features: [
      "End-to-end encryption",
      "Password manager",
      "Secure file storage",
      "Biometric authentication",
      "Cross-device sync",
    ],
    comingSoon: true,
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: 6,
    name: "Family Hub",
    tagline: "Manage Family Digital Wellness",
    description: "Comprehensive dashboard to monitor and manage your family's digital activities, screen time, and online safety.",
    icon: Smartphone,
    features: [
      "Activity monitoring",
      "Screen time management",
      "Location tracking",
      "App usage insights",
      "Safety alerts",
    ],
    comingSoon: true,
    gradient: "from-pink-500/20 to-red-500/20",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for complete digital protection
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                tagline={product.tagline}
                description={product.description}
                icon={product.icon}
                features={product.features}
                comingSoon={product.comingSoon}
                gradient={product.gradient}
                iosLink={product.iosLink}
                androidLink={product.androidLink}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join millions of users who trust Wequi Tech to protect their digital life
            </p>
            <Button variant="hero" size="lg" className="shadow-card hover:shadow-soft hover:scale-105 transition-all duration-300">
              Download Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
