import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { CommunityCTA } from "@/components/sections/CommunityCTA";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Wequi Tech | Wequi Guard digital safety and DNS filtering"
        description="Wequi Tech builds digital safety tools for safer internet use. Our flagship product, Wequi Guard, helps users reduce harmful and distracting online content through DNS-based filtering and device protection controls."
        pathname="/"
      />
      <Hero />
      <ProductShowcase />
      <TeamPreview />
      <CommunityCTA />
    </div>
  );
};

export default Index;
