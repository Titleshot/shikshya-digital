"use client";

import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Layers } from "lucide-react";
import { EverestSectionHeading } from "@/components/everest/ui/EverestSectionHeading";
import { programs } from "@/lib/everest/data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const iconMap = {
  book: BookOpen,
  layers: Layers,
  flask: FlaskConical,
};

export function Academics() {
  return (
    <section id="programs" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <EverestSectionHeading
          eyebrow="पाठ्यक्रम"
          title="शैक्षिक कार्यक्रम"
          subtitle="प्रत्येक तहका लागि संरचित र व्यापक पाठ्यक्रम"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {programs.map((program) => {
            const Icon = iconMap[program.icon];
            return (
              <motion.article
                key={program.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-all hover:border-[var(--everest-teal)]/30 hover:shadow-[0_0_40px_-8px_rgba(13,148,136,0.25)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--everest-navy)] text-white shadow-md transition group-hover:bg-[var(--everest-teal)]">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--everest-teal)]">
                  {program.level}
                </p>
                <h3 className="mt-1 text-xl font-bold text-[var(--everest-navy)]">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--everest-muted)]">
                  {program.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
