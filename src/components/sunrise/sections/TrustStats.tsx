"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/sunrise/ui/CountUp";
import { stats } from "@/lib/sunrise/data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export function TrustStats() {
  return (
    <section className="relative z-20 -mt-16 mx-5 sm:mx-8">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="bg-white px-6 py-10 text-center"
          >
            <p className="text-4xl font-extrabold text-[var(--sunrise-navy)] sm:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-[var(--sunrise-muted)]">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
