"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function SunriseFinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <motion.div
        className="absolute inset-0 bg-[var(--sunrise-navy)]"
        animate={{
          background: [
            "linear-gradient(135deg, #0a1628 0%, #132238 50%, #1e3a5f 100%)",
            "linear-gradient(135deg, #132238 0%, #0a1628 50%, #172554 100%)",
            "linear-gradient(135deg, #0a1628 0%, #132238 50%, #1e3a5f 100%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmNTllMGIiIHN0cm9rZS1vcGFjaXR5PSIwLjA4Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvc3ZnPg==')] opacity-50" />

      <motion.div
        className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          तपाईंको भविष्यको अर्को कदम{" "}
          <span className="sunrise-gradient-text">आजबाट</span> सुरु हुन्छ।
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mt-5 max-w-xl text-white/65">
          करियर निर्माणको यात्रामा Sunrise College सँग जोडिनुहोस्।
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#admission"
            className="inline-flex rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-10 py-4 text-sm font-bold text-[var(--sunrise-navy)] shadow-xl shadow-amber-500/30 transition hover:brightness-110"
          >
            भर्ना सम्बन्धी जानकारी
          </Link>
          <motion.div whileHover={{ scale: 1.03 }} className="relative">
            <motion.span
              className="absolute inset-0 rounded-full bg-amber-500/30"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <Link
              href="#contact"
              className="relative inline-flex rounded-full border border-white/25 bg-white/10 px-10 py-4 text-sm font-semibold text-white backdrop-blur-sm"
            >
              सम्पर्क गर्नुहोस्
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
