"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="hero-mesh relative flex min-h-screen items-center overflow-hidden pt-24 pb-20">
      <motion.div
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-400/20 blur-[120px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.55, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-400/15 blur-[100px]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/80 px-4 py-2 text-sm text-brand-700 shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>नेपालका विद्यालय र कलेजका लागि</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl"
          >
            विद्यालय र कलेजका लागि{" "}
            <span className="gradient-text">आधुनिक वेबसाइट</span> निर्माण सेवा
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl"
          >
            हामी तपाईंको संस्थालाई डिजिटल रूपमा विश्वासिलो, आधुनिक र
            admission-focused बनाउँछौं।
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="#demos" variant="primary">
              नि:शुल्क डेमो हेर्नुहोस्
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary">
              सम्पर्क गर्नुहोस्
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-3 gap-4 border-t border-black/5 pt-10 sm:gap-8"
          >
            {[
              { value: "१००%", label: "भर्ना-केन्द्रित डिजाइन" },
              { value: "७ दिन", label: "छिटो डेलिभरी" },
              { value: "१००%", label: "मोबाइल अनुकूल" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-ink sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
