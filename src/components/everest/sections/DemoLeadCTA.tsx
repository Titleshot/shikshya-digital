"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const benefits = [
  "तपाईंको विद्यालयका लागि Customized Website Proposal",
  "आवश्यक Features को सुझाव",
  "Website तयार हुने समय",
  "विस्तृत लागत विवरण",
];

const WHATSAPP_NUMBER = "9779808910568";

const whatsappMessage = encodeURIComponent(
  `नमस्कार Revora Technologies,
म School Website Demo हेरेर आएँ।
हाम्रो विद्यालयका लागि यस्तै Website को Proposal र लागत विवरण पठाइदिनुहोस्। धन्यवाद।`
);

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

export function DemoLeadCTA() {
  return (
    <section
      id="website-proposal"
      className="relative overflow-hidden border-t border-black/5 bg-gradient-to-b from-slate-50 to-white py-20 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.p
            variants={fadeInUp}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--everest-teal)]"
          >
            Live Demo
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold leading-snug tracking-tight text-[var(--everest-navy)] sm:text-4xl"
          >
            के तपाईंको विद्यालयका लागि पनि यस्तै Website चाहनुहुन्छ?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-sm leading-relaxed text-[var(--everest-muted)] sm:mt-5 sm:text-lg"
          >
            यो Website केवल एउटा{" "}
            <span className="font-semibold text-[var(--everest-navy)]">
              Live Demo
            </span>{" "}
            हो।
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-3 text-sm leading-relaxed text-[var(--everest-muted)] sm:mt-4 sm:text-base"
          >
            हामी तपाईंको विद्यालयका लागि व्यक्तिगत Website Proposal र लागत
            विवरण तयार गरेर पठाउनेछौं।
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          className="mt-6 rounded-2xl border border-black/5 bg-white p-4 text-left shadow-sm sm:mt-8 sm:p-6"
        >
          <ul className="space-y-2.5">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-[var(--everest-ink)]"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-[var(--everest-muted)]">
            कुनै शुल्क छैन। कुनै बाध्यता छैन।
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          className="mt-8 sm:mt-10"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-600/25 sm:w-auto sm:px-8 sm:text-base"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            <span className="text-center leading-snug">
              मेरो विद्यालयको Proposal तयार गर्नुहोस्
            </span>
          </motion.a>
          <p className="mt-4 text-sm text-[var(--everest-muted)]">
            WhatsApp मा सिधै सन्देश खुल्छ — १ मिनेटभन्दा कम समय लाग्छ।
          </p>
          <p className="mt-1 text-sm text-[var(--everest-muted)]">
            📩 Proposal १ कार्यदिवसभित्र WhatsApp मा पठाइनेछ।
          </p>
        </motion.div>
      </div>
    </section>
  );
}
