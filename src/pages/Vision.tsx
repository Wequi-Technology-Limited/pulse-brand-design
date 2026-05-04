import { EcosystemVision } from "@/components/sections/EcosystemVision";
import { VisionRoadmap } from "@/components/sections/VisionRoadmap";
import { VisionArchitecture } from "@/components/sections/VisionArchitecture";
import { VisionImpact } from "@/components/sections/VisionImpact";
import { VisionManifesto } from "@/components/sections/VisionManifesto";
import { CommunityCTA } from "@/components/sections/CommunityCTA";

const Vision = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* 1. The High-Level Ecosystem Map */}
      <EcosystemVision />
      
      {/* 2. The Step-by-Step Execution Plan */}
      <VisionRoadmap />
      
      {/* 3. The Technical Underpinnings */}
      <VisionArchitecture />
      
      {/* 4. Who Benefits */}
      <VisionImpact />
      
      {/* 5. The Core Philosophy */}
      <VisionManifesto />
      
      {/* 6. Call to Action */}
      <CommunityCTA />
    </div>
  );
};

export default Vision;
