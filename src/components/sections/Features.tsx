import InfoCard from "@/components/common/info-card";
import { features } from "@/config/features";
import { Section, SectionHeader } from "@/components/ui/Section";

export default function Features() {
  return (
    <Section id="features">
      <SectionHeader title="Features" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
        {features.map((feature, i) => (
          <InfoCard key={i} info={feature} />
        ))}
      </div>
    </Section>
  );
} 