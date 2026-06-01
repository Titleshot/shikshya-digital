"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { EverestSectionHeading } from "@/components/everest/ui/EverestSectionHeading";
import { facilities } from "@/lib/everest/data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export function Facilities() {
  return (
    <section id="facilities" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <EverestSectionHeading
          eyebrow="सुविधा"
          title="विद्यालय सुविधाहरू"
          subtitle="विद्यार्थीको सम्पूर्ण विकासका लागि आधुनिक पूर्वाधार"
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {facilities.map((item, i) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              className={`group relative overflow-hidden rounded-2xl shadow-md ${
                i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9] sm:aspect-[2/1] lg:aspect-[4/3]" : "aspect-[4/3]"}`}>
                <SharpImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--everest-navy)]/80 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
