import Hero from "@/components/header/hero";
import Feature from "@/components/features/feature-container";
import Vision from "@/components/vision/vision";
import GoogleTag from "@/components/GoogleTag";

export default function App() {
  return (
    <main className="">
      <GoogleTag />
      <Hero />
      <Vision />
      <Feature />
    </main>
  );
}
