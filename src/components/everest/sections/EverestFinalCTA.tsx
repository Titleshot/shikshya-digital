"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import Link from "next/link";
import { everestImages } from "@/lib/everest/images";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function EverestFinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(12,35,64,0.06) 0%, rgba(13,148,136,0.08) 50%, rgba(201,162,39,0.05) 100%)",
            "linear-gradient(135deg, rgba(13,148,136,0.08) 0%, rgba(12,35,64,0.06) 50%, rgba(201,162,39,0.06) 100%)",
            "linear-gradient(135deg, rgba(12,35,64,0.06) 0%, rgba(13,148,136,0.08) 50%, rgba(201,162,39,0.05) 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-[var(--everest-navy)] shadow-2xl lg:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 sm:p-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold leading-tight text-white sm:text-4xl"
            >
              तपाईंको बच्चाको भविष्य सही विद्यालयबाट सुरु हुन्छ।
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-white/75"
            >
              आजै सम्पर्क गर्नुहोस् वा भर्ना फर्म भर्नुहोस् — हाम्रो टोली तपाईंलाई
              मार्गदर्शन गर्न तयार छ।
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#admission"
                className="inline-flex items-center justify-center rounded-full bg-[var(--everest-gold)] px-8 py-4 text-sm font-semibold text-[var(--everest-navy)] shadow-lg transition hover:bg-[var(--everest-gold-light)]"
              >
                Apply Now
              </Link>
              <motion.div whileHover={{ scale: 1.03 }} className="relative">
                <motion.span
                  className="absolute inset-0 rounded-full bg-white/20"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <Link
                  href="#contact"
                  className="relative inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm sm:w-auto"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="relative hidden aspect-[4/3] lg:block">
            <SharpImage
              src={everestImages.contact}
              alt="विद्यार्थी सोधपुछ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
