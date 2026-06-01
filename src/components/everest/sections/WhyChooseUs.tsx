"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { EverestSectionHeading } from "@/components/everest/ui/EverestSectionHeading";
import { whyChooseUs } from "@/lib/everest/data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <EverestSectionHeading
          eyebrow="फाइदा"
          title="किन Everest International School?"
          subtitle="हाम्रो विशेषताहरू जसले तपाईंको बच्चालाई अगाडि बढाउँछन्"
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {whyChooseUs.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="everest-card-glow group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <SharpImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--everest-navy)]/60 to-transparent" />
                <h3 className="absolute bottom-3 left-4 right-4 font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="p-4 text-sm leading-relaxed text-[var(--everest-muted)]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
