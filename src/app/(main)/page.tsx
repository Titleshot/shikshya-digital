import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { WhyItMatters } from "@/components/sections/WhyItMatters";
import { DemoProjects } from "@/components/sections/DemoProjects";
import { Pricing } from "@/components/sections/Pricing";
import { Trust } from "@/components/sections/Trust";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <WhyItMatters />
      <DemoProjects />
      <Pricing />
      <Trust />
      <FinalCTA />
    </>
  );
}
