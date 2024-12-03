import dynamic from "next/dynamic";
import VisionCard from "./vision-card";
import { visions } from "@/config/vision";

const DynamicMoon = dynamic(() => import("@/components/three-scenes/moon"), {
  ssr: false,
});

export default function Vision() {
  return (
    <section id="vision" className="relative my-6 lg:my-32 min-h-screen">
      <div className="absolute inset-0 z-[-1] w-full h-[30%] lg:h-auto -translate-y-[15%] lg:-translate-y-[20%] lg:-translate-x-[70%]">
        <DynamicMoon />
      </div>
      <div>
        <h1 className="head-text primary-gradient">Our Vision</h1>
        <p className="text-2xl max-w-lg">
          Our mission is to provide a complete suite of open-source applications
          tailored for Lunar Base engineering
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
        {visions
          .map((vision, i) => {
            return <VisionCard key={i} vision={vision} />;
          })}
      </div>
    </section>
  );
}
