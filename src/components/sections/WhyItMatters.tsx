"use client";

import { motion } from "framer-motion";
import { Heart, TrendingUp, TrendingDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const points = [
  {
    icon: Heart,
    title: "अनलाइन उपस्थिति = विश्वास",
    description:
      "एक आधुनिक वेबसाइटले अभिभावकलाई भन्छ — यो संस्था गम्भीर, व्यवस्थित र भविष्यमा केन्द्रित छ।",
    accent: "from-brand-500/20 to-brand-600/5",
  },
  {
    icon: TrendingUp,
    title: "दृश्यता = बढी भर्ना",
    description:
      "खोज इन्जिन र सामाजिक सञ्जालमा देखिने संस्थाले प्राकृतिक रूपमा बढी सोधपुछ पाउँछ।",
    accent: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: TrendingDown,
    title: "कमजोर उपस्थिति = गुमेका अवसर",
    description:
      "हरेक दिन जुन अभिभावकले तपाईंको वेबसाइट नभेट्टाए, त्यो दिन प्रतिस्पर्धीले जित्छ।",
    accent: "from-amber-500/20 to-amber-600/5",
  },
];

export function WhyItMatters() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-60"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(51,102,255,0.06) 0%, rgba(99,102,241,0.04) 50%, rgba(16,185,129,0.04) 100%)",
            "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(51,102,255,0.05) 50%, rgba(245,158,11,0.04) 100%)",
            "linear-gradient(135deg, rgba(51,102,255,0.06) 0%, rgba(99,102,241,0.04) 50%, rgba(16,185,129,0.04) 100%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="महत्त्व"
          title="यो किन महत्त्वपूर्ण छ?"
          subtitle="तपाईंको संस्थाको भविष्य अब कागजमा मात्र लेखिएको छैन — अनलाइनमा पनि लेखिएको छ।"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <motion.article
                key={point.title}
                variants={fadeInUp}
                className={`rounded-2xl border border-black/5 bg-gradient-to-br ${point.accent} bg-white p-8 shadow-sm`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold leading-snug text-ink">
                  {point.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {point.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
