"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { SunriseSectionHeading } from "@/components/sunrise/ui/SunriseSectionHeading";
import { studentLife } from "@/lib/sunrise/data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export function StudentLife() {
  return (
    <section id="life" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SunriseSectionHeading
          eyebrow="जीवनशैली"
          title="कलेज जीवन पढाइभन्दा धेरै ठूलो हुन्छ"
          subtitle="कार्यक्रम, परियोजना, सहपाठी सञ्जाल र नेतृत्व"
        />

        <motion.div
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {studentLife.map((item, i) => (
            <motion.figure
              key={item.title}
              variants={fadeInUp}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-md"
            >
              <div
                className={`relative w-full overflow-hidden ${
                  i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"
                }`}
              >
                <SharpImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--sunrise-navy)]/80 to-transparent opacity-0 transition group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  {item.title}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
