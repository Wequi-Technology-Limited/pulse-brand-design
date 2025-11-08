import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { CommunityCTA } from "@/components/sections/CommunityCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <TeamPreview />
      <CommunityCTA />
    </div>
  );
};

export default Index;
