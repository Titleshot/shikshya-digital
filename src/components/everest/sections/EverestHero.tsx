"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SharpImage } from "@/components/ui/SharpImage";
import Link from "next/link";
import { everestImages } from "@/lib/everest/images";
import { schoolInfo } from "@/lib/everest/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function EverestHero() {
  return (
    <section className="everest-hero-gradient relative min-h-screen overflow-hidden pt-24 pb-16 lg:pb-0">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-2 lg:gap-12 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-wider text-[var(--everest-teal)]"
          >
            {schoolInfo.name}
          </motion.p>
          <motion.p variants={fadeInUp} className="mt-2 text-lg text-[var(--everest-gold)]">
            {schoolInfo.tagline}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-4xl font-bold leading-[1.12] tracking-tight text-[var(--everest-navy)] sm:text-5xl lg:text-6xl"
          >
            तपाईंको बच्चाको{" "}
            <span className="everest-gradient-text">उज्ज्वल भविष्य</span> यहाँबाट सुरु
            हुन्छ
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-base leading-relaxed text-[var(--everest-muted)] sm:text-lg"
          >
            गुणस्तरीय शिक्षा, सुरक्षित वातावरण र आधुनिक सिकाइ प्रणाली
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#admission"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--everest-navy)] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--everest-navy-light)]"
            >
              Admission Open
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="everest-glass inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-[var(--everest-navy)] shadow-sm transition hover:shadow-md"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-[var(--everest-navy)]/20 ring-1 ring-black/5"
          >
            <SharpImage
              src={everestImages.hero}
              alt="Everest International School"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--everest-navy)]/30 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="everest-glass absolute -bottom-4 -left-2 rounded-2xl px-5 py-3 shadow-lg sm:-left-6"
          >
            <p className="text-2xl font-bold text-[var(--everest-navy)]">२०+</p>
            <p className="text-xs text-[var(--everest-muted)]">वर्षको शैक्षिक अनुभव</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
