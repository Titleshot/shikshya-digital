"use client";

import { motion } from "framer-motion";
import {
  Check,
  Globe,
  GraduationCap,
  Palette,
  Settings,
  Headphones,
  Sparkles,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const featureGroups = [
  {
    icon: Globe,
    title: "वेबसाइट निर्माण",
    items: [
      "आधुनिक र आकर्षक विद्यालय वेबसाइट (५–७ पृष्ठ)",
      "Mobile-friendly premium design",
      "Fast loading performance",
      "सम्पूर्ण विद्यालय जानकारी संरचना",
    ],
  },
  {
    icon: GraduationCap,
    title: "भर्ना प्रणाली (Admission Focus)",
    items: [
      "विद्यार्थी/अभिभावक inquiry system",
      "WhatsApp direct contact button",
      "Admission form setup",
      "Lead capture system",
    ],
  },
  {
    icon: Palette,
    title: "ब्रान्डिङ सहयोग",
    items: [
      "३–५ social media पोस्ट डिजाइन",
      "Basic content setup (Nepali)",
    ],
  },
  {
    icon: Settings,
    title: "प्राविधिक सेटअप",
    items: [
      "Basic SEO setup (Google visibility)",
      "Google Maps integration",
      "Contact & inquiry system setup",
    ],
  },
  {
    icon: Headphones,
    title: "सेवा र समर्थन",
    items: [
      "५ महिनासम्म free technical support",
      "Minor updates र bug fixes",
      "Launch पछि smooth operation सुनिश्चित गर्ने",
    ],
  },
];

const maintenanceItems = [
  "Hosting/domain management सहयोग",
  "Minor updates",
  "Basic technical support continuation",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(51,102,255,0.08), transparent 70%)",
            "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(99,102,241,0.06), transparent 60%)",
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(51,102,255,0.08), transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          className="mb-12 text-center sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600"
          >
            मूल्य
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            पूर्ण डिजिटल विद्यालय प्रणाली
          </motion.h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glow-border overflow-hidden rounded-3xl border border-brand-200/60 bg-white shadow-xl"
        >
          {/* Header — single offer */}
          <div className="border-b border-black/5 bg-gradient-to-br from-brand-50 via-white to-indigo-50/50 px-6 py-10 text-center sm:px-10 sm:py-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-1.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25"
            >
              <Sparkles className="h-4 w-4" />
              सम्पूर्ण प्याकेज
            </motion.div>

            <p className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              रु. <span className="gradient-text">४५,०००</span>
            </p>
            <p className="mt-1 text-sm font-medium text-brand-600">(Fixed)</p>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              तपाईंको विद्यालयको सम्पूर्ण डिजिटल उपस्थिति एकै समाधानमा
            </p>
          </div>

          {/* Feature groups */}
          <div className="space-y-8 px-6 py-10 sm:px-10 sm:py-12">
            {featureGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="border-b border-black/5 pb-8 last:border-0 last:pb-0"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-ink">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/85"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Key message */}
          <div className="mx-6 mb-8 rounded-2xl border border-brand-200/80 bg-gradient-to-r from-brand-50 to-indigo-50/80 px-6 py-5 text-center sm:mx-10">
            <p className="text-base font-semibold leading-snug text-ink sm:text-lg">
              यो केवल website होइन — तपाईंको विद्यालयको{" "}
              <span className="text-brand-700">पूर्ण डिजिटल प्रणाली</span> हो।
            </p>
          </div>

          {/* Annual maintenance */}
          <div className="border-t border-black/5 bg-surface/80 px-6 py-8 sm:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">वार्षिक मेन्टेनेन्स</h3>
                  <p className="mt-0.5 text-2xl font-bold text-ink">
                    रु. ७,०००{" "}
                    <span className="text-base font-normal text-muted">/ वर्ष</span>
                  </p>
                </div>
              </div>
              <ul className="space-y-2 sm:max-w-xs">
                {maintenanceItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 border-t border-black/5 bg-white px-6 py-8 sm:flex-row sm:justify-center sm:px-10 sm:py-10">
            <Button href="#contact" variant="primary" pulse>
              नि:शुल्क परामर्श लिनुहोस्
            </Button>
            <Button href="#contact" variant="secondary">
              अहिले सुरु गर्नुहोस्
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.article>

        {/* Final positioning */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center text-lg font-medium leading-relaxed text-muted sm:text-xl"
        >
          हामी website होइन,{" "}
          <span className="font-semibold text-brand-700">
            विद्यालयको digital admission system
          </span>{" "}
          बनाउँछौं।
        </motion.p>
      </div>
    </section>
  );
}
