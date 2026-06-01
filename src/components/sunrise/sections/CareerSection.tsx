"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { CheckCircle2 } from "lucide-react";
import { SunriseSectionHeading } from "@/components/sunrise/ui/SunriseSectionHeading";
import { careerFeatures } from "@/lib/sunrise/data";
import { sunriseImages } from "@/lib/sunrise/images";
import { slideFromLeft, slideFromRight, defaultViewport } from "@/lib/animations";

export function CareerSection() {
  return (
    <section id="career" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 bg-[var(--sunrise-navy)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SunriseSectionHeading
          eyebrow="करियर"
          title="भोलिको करियरका लागि आजको तयारी"
          subtitle="यही कुराले कलेजलाई विद्यालयभन्दा फरक बनाउँछ"
          light
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideFromLeft}
            className="relative aspect-[16/10] min-h-[280px] overflow-hidden rounded-2xl shadow-2xl ring-2 ring-amber-500/30"
          >
            <SharpImage
              src={sunriseImages.career}
              alt="करियर सफलता"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 720px"
            />
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideFromRight}
            className="space-y-5"
          >
            {careerFeatures.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-amber-400" />
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/65">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
