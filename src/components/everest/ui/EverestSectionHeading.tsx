"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function EverestSectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--everest-teal)]"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className="text-3xl font-bold tracking-tight text-[var(--everest-navy)] sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-base leading-relaxed text-[var(--everest-muted)] sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
