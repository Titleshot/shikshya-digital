"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { SunriseSectionHeading } from "@/components/sunrise/ui/SunriseSectionHeading";
import { facilities } from "@/lib/sunrise/data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export function SunriseFacilities() {
  return (
    <section className="bg-slate-50 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SunriseSectionHeading
          eyebrow="पूर्वाधार"
          title="आधुनिक सुविधाहरू"
          subtitle="सिकाइ, अनुसन्धान र व्यक्तिगत विकासका लागि"
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {facilities.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
            >
              <SharpImage
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--sunrise-navy)]/90 via-transparent to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
