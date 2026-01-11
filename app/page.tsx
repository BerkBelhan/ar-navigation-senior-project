import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import TechStack from "@/components/landing/techStack";
import HowItWorks from "@/components/landing/howItWorks";
import CardNavBar from "@/components/layout/CardNavBar";

export default function Home() {
  return (
    <main className="pt-24">
      <CardNavBar />
      <div className="h-16" />
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      
    </main>
  );
}
