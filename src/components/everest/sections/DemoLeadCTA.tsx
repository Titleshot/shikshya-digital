"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, FileText, X } from "lucide-react";
import { useEffect, useState } from "react";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const benefits = [
  "तपाईंको विद्यालयका लागि Customized Website Proposal",
  "आवश्यक Features को सुझाव",
  "Website तयार हुने समय",
  "विस्तृत लागत विवरण",
];

export function DemoLeadCTA() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    school: "",
    contact: "",
    phone: "",
    email: "",
    hasWebsite: "",
    features: "",
  });

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSubmitted(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeModal = () => {
    setOpen(false);
    setSubmitted(false);
  };

  return (
    <section
      id="website-proposal"
      className="relative overflow-hidden border-t border-black/5 bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32"
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
            className="text-3xl font-bold leading-snug tracking-tight text-[var(--everest-navy)] sm:text-4xl"
          >
            के तपाईंको विद्यालयका लागि पनि यस्तै Website चाहनुहुन्छ?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-base leading-relaxed text-[var(--everest-muted)] sm:text-lg"
          >
            यो Website केवल एउटा{" "}
            <span className="font-semibold text-[var(--everest-navy)]">
              Live Demo
            </span>{" "}
            हो।
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base leading-relaxed text-[var(--everest-muted)]"
          >
            हामी तपाईंको विद्यालयका लागि व्यक्तिगत Website Proposal र लागत
            विवरण तयार गरेर पठाउनेछौं।
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          className="mt-8 rounded-2xl border border-black/5 bg-white p-5 text-left shadow-sm sm:p-6"
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
          className="mt-10"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSubmitted(false);
              setOpen(true);
            }}
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[var(--everest-navy)] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[var(--everest-navy)]/25 sm:w-auto"
          >
            <FileText className="h-5 w-5" />
            मेरो विद्यालयको Proposal तयार गर्नुहोस्
          </motion.button>
          <p className="mt-4 text-sm text-[var(--everest-muted)]">
            ⏱️ १ मिनेटभन्दा कम समय लाग्छ।
          </p>
          <p className="mt-1 text-sm text-[var(--everest-muted)]">
            📩 Proposal १ कार्यदिवसभित्र WhatsApp र Email मा पठाइनेछ।
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="बन्द गर्नुहोस्"
                onClick={closeModal}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/5 p-2 text-[var(--everest-navy)] transition hover:bg-black/10"
              >
                <X className="h-5 w-5" />
              </button>

              {submitted ? (
                <div className="p-8 text-center sm:p-10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--everest-navy)]">
                    धन्यवाद!
                  </h3>
                  <p className="mt-3 text-[var(--everest-muted)]">
                    हामीले तपाईंको अनुरोध प्राप्त गरेका छौं।
                  </p>
                  <div className="mt-6 rounded-xl bg-slate-50 p-5 text-left">
                    <p className="mb-3 text-sm font-semibold text-[var(--everest-navy)]">
                      अब के हुन्छ?
                    </p>
                    <ul className="space-y-2.5 text-sm text-[var(--everest-muted)]">
                      <li className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        १ कार्यदिवसभित्र Customized Proposal तयार गरिनेछ।
                      </li>
                      <li className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        Proposal WhatsApp र Email मा पठाइनेछ।
                      </li>
                      <li className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        कुनै शुल्क छैन। कुनै बाध्यता छैन।
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-6 rounded-full bg-[var(--everest-navy)] px-8 py-3 text-sm font-semibold text-white"
                  >
                    बन्द गर्नुहोस्
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="p-6 sm:p-8"
                >
                  <h3 className="pr-10 text-xl font-bold text-[var(--everest-navy)]">
                    Website Proposal अनुरोध
                  </h3>
                  <p className="mt-1 text-sm text-[var(--everest-muted)]">
                    तलको विवरण भर्नुहोस् — १ मिनेटभन्दा कम समय लाग्छ।
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="modal-school"
                        className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                      >
                        विद्यालयको नाम *
                      </label>
                      <input
                        id="modal-school"
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
                        htmlFor="modal-contact"
                        className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                      >
                        Principal / Admin *
                      </label>
                      <input
                        id="modal-contact"
                        required
                        value={form.contact}
                        onChange={(e) =>
                          setForm({ ...form, contact: e.target.value })
                        }
                        className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[var(--everest-teal)] focus:ring-2 focus:ring-[var(--everest-teal)]/20"
                        placeholder="सम्पर्क व्यक्तिको नाम"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="modal-phone"
                        className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                      >
                        Mobile Number *
                      </label>
                      <input
                        id="modal-phone"
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
                        htmlFor="modal-email"
                        className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                      >
                        Email
                      </label>
                      <input
                        id="modal-email"
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
                        htmlFor="modal-has-website"
                        className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                      >
                        हाल Website छ?
                      </label>
                      <select
                        id="modal-has-website"
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
                        htmlFor="modal-features"
                        className="mb-1.5 block text-sm text-[var(--everest-muted)]"
                      >
                        विशेष आवश्यकता
                      </label>
                      <textarea
                        id="modal-features"
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
                    <FileText className="h-4 w-4" />
                    Proposal पठाइदिनुहोस्
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
