"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SharpImage } from "@/components/ui/SharpImage";
import Link from "next/link";
import { Particles } from "@/components/sunrise/ui/Particles";
import { sunriseImages } from "@/lib/sunrise/images";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function SunriseHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <SharpImage
          src={sunriseImages.hero}
          alt="Sunrise College Campus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--sunrise-navy)]/95 via-[var(--sunrise-navy)]/75 to-[var(--sunrise-navy)]/50" />
      </motion.div>

      <Particles />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-32 text-center sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400"
          >
            Sunrise College
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            तपाईंको भविष्यको यात्रा{" "}
            <span className="sunrise-gradient-text">यहाँबाट</span> सुरु हुन्छ।
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/75 sm:text-xl"
          >
            शिक्षा मात्र होइन, करियर, नेतृत्व र अवसरतर्फको अर्को कदम।
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-sm font-bold text-[var(--sunrise-navy)] shadow-xl shadow-amber-500/30 transition hover:brightness-110"
            >
              कार्यक्रमहरू हेर्नुहोस्
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#admission"
              className="sunrise-glass inline-flex items-center rounded-full px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              भर्ना सम्बन्धी जानकारी
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-10 w-6 rounded-full border-2 border-white/30 p-1"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-amber-400" />
        </motion.div>
      </div>
    </section>
  );
}
