import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-medium text-sm">Welcome to Wequi Tech</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            We make your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              online world
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Safe & Secure
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Protecting your digital life with innovative solutions for a safer, more secure internet experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button variant="hero" size="lg" className="group">
                Explore Our Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
