"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SharpImage } from "@/components/ui/SharpImage";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const demos = [
  {
    name: "Everest International School",
    label: "डेमो",
    type: "विद्यालय",
    href: "/everest",
    image: "/everest/hero.webp",
    description: "आधुनिक विद्यालय वेबसाइट — भर्ना, कार्यक्रम र सम्पर्क एकै ठाउँमा।",
    cta: "लाइभ डेमो हेर्नुहोस् →",
  },
  {
    name: "Sunrise College",
    label: "डेमो",
    type: "कलेज",
    href: "/sunrise",
    image: "/sunrise/hero.webp",
    description: "करियर-केन्द्रित कलेज वेबसाइट — प्रविधि, व्यवस्थापन र विज्ञान।",
    cta: "लाइभ डेमो हेर्नुहोस् →",
  },
];

export function DemoProjects() {
  return (
    <section id="demos" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="पोर्टफोलियो"
          title="हाम्रा डेमो परियोजनाहरू"
          subtitle="वास्तविक गुणस्तर हेर्नका लागि तयार पारिएका नमूना वेबसाइटहरू।"
        />

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {demos.map((demo) => {
            return (
              <motion.div
                key={demo.name}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={demo.href}
                  className="group block overflow-hidden rounded-2xl border border-black/5 bg-white shadow-lg transition-shadow hover:shadow-2xl"
                >
                  <div className="relative flex h-52 items-center justify-center overflow-hidden sm:h-60">
                    <SharpImage
                      src={demo.image}
                      alt={demo.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 560px"
                    />
                    <div className="absolute inset-0 bg-slate-900/45 transition group-hover:bg-slate-900/55" />
                    <div className="relative z-10 flex flex-col items-center text-white">
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                        {demo.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-brand-600">
                          {demo.type}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold text-ink">
                          {demo.name}
                        </h3>
                      </div>
                      <ExternalLink className="h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {demo.description}
                    </p>
                    <p className="mt-4 text-sm font-medium text-brand-600 group-hover:underline">
                      {demo.cta}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
