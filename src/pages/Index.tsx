import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { EthicalPledge } from "@/components/sections/EthicalPledge";
import { Testimonials } from "@/components/sections/Testimonials";
import { CommunityCTA } from "@/components/sections/CommunityCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SocialProof />
      <ProblemStatement />
      <FeaturesBento />
      <ProductShowcase />
      <Testimonials />
      <EthicalPledge />
      <CommunityCTA />
    </div>
  );
};

export default Index;
