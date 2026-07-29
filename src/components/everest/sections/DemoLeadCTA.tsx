"use client";

import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { useState } from "react";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const benefits = [
  "तपाईंको विद्यालयका लागि विशेष Website Proposal",
  "आवश्यक सुविधाहरूको सुझाव",
  "Website तयार हुने अनुमानित समय",
  "विस्तृत लागत विवरण",
];

export function DemoLeadCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    school: "",
    contact: "",
    phone: "",
    email: "",
    hasWebsite: "",
    features: "",
  });

  return (
    <section
      id="website-proposal"
      className="relative overflow-hidden border-t border-black/5 bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--everest-teal)]"
          >
            Live Demo
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold leading-snug tracking-tight text-[var(--everest-navy)] sm:text-4xl"
          >
            के तपाईं आफ्नो विद्यालयका लागि यस्तै आधुनिक Website चाहनुहुन्छ?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-base leading-relaxed text-[var(--everest-muted)] sm:text-lg"
          >
            यो Website केवल एउटा Live Demo हो, जसले हामीले तपाईंको विद्यालयका लागि
            बनाउन सक्ने Website को गुणस्तर देखाउँछ।
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base leading-relaxed text-[var(--everest-muted)]"
          >
            यदि तपाईं पनि आफ्नो विद्यालयका लागि यस्तै आकर्षक, आधुनिक र मोबाइलमै
            उत्कृष्ट देखिने Website चाहनुहुन्छ भने तलको विवरण भर्नुहोस्।
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base font-medium leading-relaxed text-[var(--everest-navy)]"
          >
            हामी तपाईंको विद्यालयका लागि Website को योजना, आवश्यक सुविधा र लागत
            विवरण तयार गरेर पठाउनेछौं।
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-1 text-sm text-[var(--everest-muted)]"
          >
            (Website Proposal & Quotation)
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          className="mt-10 rounded-2xl border border-black/5 bg-white p-6 shadow-lg sm:p-8"
        >
          <h3 className="text-lg font-semibold text-[var(--everest-navy)]">
            तपाईंले के प्राप्त गर्नुहुनेछ?
          </h3>
          <ul className="mt-4 space-y-2.5">
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
          <p className="mt-5 text-sm text-[var(--everest-muted)]">
            कुनै शुल्क छैन, कुनै बाध्यता छैन।
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-xl sm:p-8"
        >
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--everest-navy)]">
                धन्यवाद!
              </h3>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[var(--everest-muted)]">
                हामीले तपाईंको अनुरोध सफलतापूर्वक प्राप्त गरेका छौं।
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--everest-muted)]">
                १ कार्यदिवसभित्र तपाईंको विद्यालयका लागि तयार गरिएको व्यक्तिगत
                Website Proposal र लागत विवरण तपाईंको WhatsApp र Email मा
                पठाइनेछ।
              </p>
            </div>
          ) : (
            <>
              <h3 className="mb-6 text-lg font-semibold text-[var(--everest-navy)]">
                तलको विवरण भर्नुहोस्
              </h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="lead-school"
                    className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                  >
                    विद्यालयको नाम *
                  </label>
                  <input
                    id="lead-school"
                    required
                    value={form.school}
                    onChange={(e) =>
                      setForm({ ...form, school: e.target.value })
                    }
                    className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[var(--everest-teal)] focus:ring-2 focus:ring-[var(--everest-teal)]/20"
                    placeholder="तपाईंको विद्यालयको नाम"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lead-contact"
                    className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                  >
                    सम्पर्क व्यक्तिको नाम *
                  </label>
                  <input
                    id="lead-contact"
                    required
                    value={form.contact}
                    onChange={(e) =>
                      setForm({ ...form, contact: e.target.value })
                    }
                    className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[var(--everest-teal)] focus:ring-2 focus:ring-[var(--everest-teal)]/20"
                    placeholder="Principal / Admin को नाम"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lead-phone"
                    className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                  >
                    मोबाइल नम्बर *
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[var(--everest-teal)] focus:ring-2 focus:ring-[var(--everest-teal)]/20"
                    placeholder="९८XXXXXXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lead-email"
                    className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                  >
                    इमेल ठेगाना
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[var(--everest-teal)] focus:ring-2 focus:ring-[var(--everest-teal)]/20"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lead-has-website"
                    className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                  >
                    हाल Website छ?
                  </label>
                  <select
                    id="lead-has-website"
                    value={form.hasWebsite}
                    onChange={(e) =>
                      setForm({ ...form, hasWebsite: e.target.value })
                    }
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[var(--everest-teal)] focus:ring-2 focus:ring-[var(--everest-teal)]/20"
                  >
                    <option value="">छान्नुहोस्</option>
                    <option value="yes">छ</option>
                    <option value="no">छैन</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="lead-features"
                    className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                  >
                    तपाईंलाई Website मा चाहिने विशेष सुविधाहरू (इच्छानुसार)
                  </label>
                  <textarea
                    id="lead-features"
                    rows={3}
                    value={form.features}
                    onChange={(e) =>
                      setForm({ ...form, features: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[var(--everest-teal)] focus:ring-2 focus:ring-[var(--everest-teal)]/20"
                    placeholder="जस्तै: भर्ना फर्म, ग्यालेरी, सूचना बोर्ड..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--everest-navy)] py-4 font-semibold text-white shadow-lg"
              >
                <Send className="h-4 w-4" />
                मेरो विद्यालयको Proposal तयार गर्नुहोस्
              </motion.button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
