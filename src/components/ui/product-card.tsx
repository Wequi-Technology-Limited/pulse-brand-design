import { LucideIcon } from "lucide-react";
import { Apple, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  tagline?: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  comingSoon: boolean;
  gradient: string;
  iosLink?: string;
  androidLink?: string;
  index?: number;
}

export const ProductCard = ({
  name,
  tagline,
  description,
  icon: Icon,
  features,
  comingSoon,
  gradient,
  iosLink,
  androidLink,
  index = 0,
}: ProductCardProps) => {
  return (
    <div
      className="group relative bg-gradient-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-500 border border-border/50 hover:border-accent/30 animate-fade-up overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Coming soon badge */}
      {comingSoon && (
        <div className="absolute top-6 right-6 z-10">
          <span className="px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20 backdrop-blur-sm">
            Coming Soon
          </span>
        </div>
      )}

      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-soft`}>
          <Icon className="text-accent" size={32} strokeWidth={2} />
        </div>

        {/* Content */}
        <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {name}
        </h3>
        
        {tagline && (
          <p className="text-accent font-medium mb-4 text-sm tracking-wide">
            {tagline}
          </p>
        )}

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        {features && features.length > 0 && (
          <div className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Download buttons */}
        {!comingSoon ? (
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="default"
              className="w-full group/btn hover:scale-105 transition-all duration-300 shadow-soft"
              onClick={() => iosLink && window.open(iosLink, '_blank')}
            >
              <Apple size={18} className="mr-2 group-hover/btn:animate-pulse" />
              iOS
            </Button>
            <Button 
              variant="outline"
              className="w-full group/btn hover:scale-105 transition-all duration-300 hover:border-accent hover:text-accent"
              onClick={() => androidLink && window.open(androidLink, '_blank')}
            >
              <Download size={18} className="mr-2 group-hover/btn:animate-pulse" />
              Android
            </Button>
          </div>
        ) : (
          <Button 
            variant="outline" 
            className="w-full hover:border-accent hover:text-accent transition-all duration-300"
            disabled
          >
            Notify Me
          </Button>
        )}
      </div>
    </div>
  );
};
