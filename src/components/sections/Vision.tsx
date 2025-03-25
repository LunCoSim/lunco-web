import dynamic from "next/dynamic";
import InfoCard from "@/components/common/info-card";
import { visions } from "@/config/vision";
import { Section, SectionHeader } from "@/components/ui/Section";

const DynamicMoon = dynamic(() => import("@/components/three-scenes/moon"), {
  ssr: false,
});

export default function Vision() {
  return (
    <Section id="vision" className="lg:my-32">
      <div className="absolute inset-0 z-[-1] w-full h-[30%] lg:h-auto -translate-y-[15%] lg:-translate-y-[20%] lg:-translate-x-[70%]">
        <DynamicMoon />
      </div>
      
      <SectionHeader 
        title="Our Vision" 
        description="Our mission is to provide a complete suite of open-source applications tailored for Lunar Base engineering" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
        {visions.map((vision, i) => (
          <InfoCard key={i} info={vision} objectFit="contain" />
        ))}
      </div>
    </Section>
  );
} 