"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { EverestSectionHeading } from "@/components/everest/ui/EverestSectionHeading";
import { newsItems } from "@/lib/everest/data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export function News() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <EverestSectionHeading
          eyebrow="सूचना"
          title="समाचार र सूचना"
          subtitle="नवीनतम अपडेट र महत्वपूर्ण घोषणाहरू"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {newsItems.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl border border-black/5 bg-[var(--everest-surface)] p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="w-fit rounded-full bg-[var(--everest-navy)]/10 px-3 py-1 text-xs font-semibold text-[var(--everest-navy)]">
                {item.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--everest-navy)]">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--everest-muted)]">
                {item.excerpt}
              </p>
              <p className="mt-4 flex items-center gap-2 text-xs text-[var(--everest-muted)]">
                <Calendar className="h-3.5 w-3.5" />
                {item.date}
              </p>
              <button
                type="button"
                className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--everest-teal)] hover:underline"
              >
                थप पढ्नुहोस् <ArrowRight className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
