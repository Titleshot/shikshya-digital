"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export function SunriseSectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: Props) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className={`mb-2 text-sm font-semibold uppercase tracking-[0.25em] ${
            light ? "text-amber-400" : "text-[var(--sunrise-gold)]"
          }`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[var(--sunrise-navy)]"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/70" : "text-[var(--sunrise-muted)]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
