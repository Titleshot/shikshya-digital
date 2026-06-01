import { SunriseHero } from "@/components/sunrise/sections/SunriseHero";
import { TrustStats } from "@/components/sunrise/sections/TrustStats";
import { WhySunrise } from "@/components/sunrise/sections/WhySunrise";
import { Programs } from "@/components/sunrise/sections/Programs";
import { StudentLife } from "@/components/sunrise/sections/StudentLife";
import { SunriseFacilities } from "@/components/sunrise/sections/SunriseFacilities";
import { CareerSection } from "@/components/sunrise/sections/CareerSection";
import { SunriseTestimonials } from "@/components/sunrise/sections/SunriseTestimonials";
import { SunriseGallery } from "@/components/sunrise/sections/SunriseGallery";
import { SunriseAdmission } from "@/components/sunrise/sections/SunriseAdmission";
import { SunriseFinalCTA } from "@/components/sunrise/sections/SunriseFinalCTA";

export default function SunrisePage() {
  return (
    <>
      <SunriseHero />
      <TrustStats />
      <WhySunrise />
      <Programs />
      <StudentLife />
      <SunriseFacilities />
      <CareerSection />
      <SunriseTestimonials />
      <SunriseGallery />
      <SunriseAdmission />
      <SunriseFinalCTA />
    </>
  );
}
