"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SharpImage } from "@/components/ui/SharpImage";
import Link from "next/link";
import { SunriseSectionHeading } from "@/components/sunrise/ui/SunriseSectionHeading";
import { programs } from "@/lib/sunrise/data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export function Programs() {
  return (
    <section id="programs" className="bg-[var(--sunrise-navy)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SunriseSectionHeading
          eyebrow="कार्यक्रम"
          title="शैक्षिक कार्यक्रमहरू"
          subtitle="तपाईंको करियर लक्ष्य अनुसार छान्नुहोस्"
          light
        />

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {programs.map((program, i) => (
            <motion.article
              key={program.title}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${program.accent} ring-1 ring-white/10`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <SharpImage
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--sunrise-navy)] via-[var(--sunrise-navy)]/40 to-transparent" />
              </div>
              <div className="relative p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {program.nepali}
                </p>
                <h3 className="mt-1 text-2xl font-bold text-white">{program.title}</h3>
                <p className="mt-1 text-sm text-amber-400/90">{program.description}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {program.detail}
                </p>
                <Link
                  href="#admission"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-400 transition group-hover:gap-2"
                >
                  विवरण र भर्ना <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
