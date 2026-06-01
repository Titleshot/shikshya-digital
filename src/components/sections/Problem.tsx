"use client";

import { motion } from "framer-motion";
import { AlertCircle, Search, Globe } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  slideFromLeft,
  slideFromRight,
  defaultViewport,
} from "@/lib/animations";

const problems = [
  {
    icon: Globe,
    title: "कमजोर अनलाइन उपस्थिति",
    description:
      "धेरै विद्यालय र कलेजहरूको वेबसाइट पुरानो, असंगठित वा बिल्कै छैन — जसले पहिलो प्रभाव नै कमजोर बनाउँछ।",
    direction: "left" as const,
  },
  {
    icon: Search,
    title: "अभिभावकहरू पहिले खोज्छन्",
    description:
      "भर्ना अघि अभिभावक र विद्यार्थीहरूले अनलाइन जानकारी खोज्छन्। तपाईं नदेखिएमा, अर्को संस्था छानिन्छ।",
    direction: "right" as const,
  },
  {
    icon: AlertCircle,
    title: "अवसर गुमाउने जोखिम",
    description:
      "आधुनिक प्रतिस्पर्धी संस्थाहरूले डिजिटल मार्फत विश्वास जित्छन्। कमजोर उपस्थिति = कम भर्ना।",
    direction: "left" as const,
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="वास्तविकता"
          title="आजको वास्तविकता"
          subtitle="डिजिटल युगमा अनलाइन उपस्थिति अब वैकल्पिक होइन — यो अनिवार्य छ।"
        />

        <div className="grid gap-6 md:gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            const variants =
              item.direction === "left" ? slideFromLeft : slideFromRight;

            return (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={variants}
                transition={{ delay: index * 0.1 }}
                className="card-shine group flex flex-col gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:flex-row sm:items-center sm:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
