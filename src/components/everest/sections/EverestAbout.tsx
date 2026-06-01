"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { EverestSectionHeading } from "@/components/everest/ui/EverestSectionHeading";
import { everestImages } from "@/lib/everest/images";
import { slideFromLeft, slideFromRight, defaultViewport } from "@/lib/animations";

const pillars = [
  {
    title: "उद्देश्य (Mission)",
    text: "प्रत्येक विद्यार्थीलाई ज्ञान, सीप र नैतिक मूल्यहरू प्रदान गरी समाजका लागि योग्य नागरिक तयार पार्नु।",
  },
  {
    title: "दृष्टि (Vision)",
    text: "नेपालको अग्रणी अन्तर्राष्ट्रिय विद्यालय बन्ने — जहाँ शिक्षा र संस्कार सँगै हुन्छ।",
  },
  {
    title: "शिक्षा दर्शन",
    text: "विद्यार्थी-केन्द्रित, व्यावहारिक र प्रविधि-सहितको शिक्षण जसले सिर्जनात्मकता र आत्मविश्वास बढाउँछ।",
  },
];

export function EverestAbout() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <EverestSectionHeading
          eyebrow="परिचय"
          title="हाम्रो विद्यालय"
          subtitle="शिक्षामा उत्कृष्टता, चरित्रमा दृढता"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideFromLeft}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
          >
            <SharpImage
              src={everestImages.about}
              alt="कक्षामा सिक्दै विद्यार्थीहरू"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideFromRight}
            className="space-y-6"
          >
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-[var(--everest-navy)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--everest-muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
