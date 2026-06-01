"use client";

import { motion } from "framer-motion";
import {
  Layout,
  MessageSquare,
  Smartphone,
  Shield,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const solutions = [
  {
    icon: Layout,
    title: "आधुनिक वेबसाइट",
    description: "विद्यालय/कलेजका लागि विशेष डिजाइन गरिएको प्रिमियम लेआउट।",
  },
  {
    icon: MessageSquare,
    title: "भर्ना सोधपुछ प्रणाली",
    description: "अभिभावकहरू सजिलै सम्पर्क गर्न सक्ने स्मार्ट फर्म।",
  },
  {
    icon: Smartphone,
    title: "मोबाइल-प्रथम डिजाइन",
    description: "फोन, ट्याब्लेट र डेस्कटपमा उत्तम अनुभव।",
  },
  {
    icon: Shield,
    title: "विश्वास जगाउने UI",
    description: "पेशेवर देखावट जसले तुरुन्तै विश्वास बनाउँछ।",
  },
  {
    icon: Zap,
    title: "छिटो लोडिङ",
    description: "गुगल र अभिभावक दुवैलाई मन पर्ने गति।",
  },
];

export function Solution() {
  return (
    <section id="solution" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="समाधान"
          title="हामी के गर्छौं?"
          subtitle="तपाईंको संस्थालाई पूर्ण डिजिटल पहिचान दिने सम्पूर्ण सेवा।"
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-black/5 bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
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
