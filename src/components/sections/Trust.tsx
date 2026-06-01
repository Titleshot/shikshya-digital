"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Palette,
  Rocket,
  Smartphone,
  Target,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const trustPoints = [
  {
    icon: BookOpen,
    title: "शिक्षा-केन्द्रित डिजाइन",
    description: "विद्यालय र कलेजका लागि मात्र विशेष अनुभव।",
  },
  {
    icon: Palette,
    title: "आधुनिक UI/UX",
    description: "प्रिमियम एजेन्सी स्तरको दृश्य गुणस्तर।",
  },
  {
    icon: Rocket,
    title: "छिटो डेलिभरी",
    description: "समयमै तयार — भर्ना सिजनमा ढिलाइ हुँदैन।",
  },
  {
    icon: Smartphone,
    title: "मोबाइल-प्रथम",
    description: "अधिकांश अभिभावक फोनबाट हेर्छन् — हामी तयार छौं।",
  },
  {
    icon: Target,
    title: "भर्ना-केन्द्रित रणनीति",
    description: "सजावट मात्र होइन — वास्तविक नतिजा लक्ष्य।",
  },
];

export function Trust() {
  return (
    <section id="trust" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="किन Shikshya Digital?"
          subtitle="हामी साधारण IT कम्पनी होइनौं — शिक्षा क्षेत्रका डिजिटल विशेषज्ञ।"
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`rounded-2xl border border-black/5 p-6 shadow-sm transition-shadow hover:shadow-md ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <motion.div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-500/25"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
