import { EverestHero } from "@/components/everest/sections/EverestHero";
import { QuickInfo } from "@/components/everest/sections/QuickInfo";
import { EverestAbout } from "@/components/everest/sections/EverestAbout";
import { WhyChooseUs } from "@/components/everest/sections/WhyChooseUs";
import { Academics } from "@/components/everest/sections/Academics";
import { Admission } from "@/components/everest/sections/Admission";
import { Facilities } from "@/components/everest/sections/Facilities";
import { Gallery } from "@/components/everest/sections/Gallery";
import { Testimonials } from "@/components/everest/sections/Testimonials";
import { News } from "@/components/everest/sections/News";
import { EverestFinalCTA } from "@/components/everest/sections/EverestFinalCTA";

export default function EverestPage() {
  return (
    <>
      <EverestHero />
      <QuickInfo />
      <EverestAbout />
      <WhyChooseUs />
      <Academics />
      <Facilities />
      <Gallery />
      <Testimonials />
      <News />
      <Admission />
      <EverestFinalCTA />
    </>
  );
}
