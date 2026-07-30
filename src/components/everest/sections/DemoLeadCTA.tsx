"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, FileText, Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const benefits = [
  "तपाईंको विद्यालयका लागि Customized Website Proposal",
  "आवश्यक Features को सुझाव",
  "Website तयार हुने समय",
  "विस्तृत लागत विवरण",
];

const inputClass =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base outline-none focus:border-[var(--everest-teal)] focus:ring-2 focus:ring-[var(--everest-teal)]/20";

export function DemoLeadCTA() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSubmitted(false);
        setError("");
        setLoading(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeModal = () => {
    setOpen(false);
    setSubmitted(false);
    setError("");
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "everest-demo",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submit failed");
      }

      setSubmitted(true);
      setForm({
        school: "",
        contact: "",
        phone: "",
        email: "",
        hasWebsite: "",
        features: "",
      });
    } catch {
      setError(
        "अहिले submit हुन सकेन। कृपया फेरि प्रयास गर्नुहोस् वा WhatsApp मा सम्पर्क गर्नुहोस्।"
      );
    } finally {
      setLoading(false);
    }
  };

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
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSubmitted(false);
              setError("");
              setOpen(true);
            }}
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[var(--everest-navy)] px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-[var(--everest-navy)]/25 sm:w-auto sm:px-8 sm:text-base"
          >
            <FileText className="h-5 w-5 shrink-0" />
            <span className="text-center leading-snug">
              मेरो विद्यालयको Proposal तयार गर्नुहोस्
            </span>
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
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 sm:items-center sm:p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative flex max-h-[min(92dvh,920px)] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
              style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-black/5 px-4 py-3 sm:px-6 sm:py-4">
                <div className="min-w-0 pr-3">
                  <h3 className="truncate text-lg font-bold text-[var(--everest-navy)] sm:text-xl">
                    {submitted ? "धन्यवाद!" : "Website Proposal अनुरोध"}
                  </h3>
                  {!submitted && (
                    <p className="mt-0.5 text-xs text-[var(--everest-muted)] sm:text-sm">
                      १ मिनेटभन्दा कम समय लाग्छ
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  aria-label="बन्द गर्नुहोस्"
                  onClick={closeModal}
                  className="shrink-0 rounded-full bg-black/5 p-2.5 text-[var(--everest-navy)] transition hover:bg-black/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {submitted ? (
                <div className="overflow-y-auto overscroll-contain p-5 text-center sm:p-8">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 sm:h-16 sm:w-16">
                    <Check className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <p className="text-[var(--everest-muted)]">
                    हामीले तपाईंको अनुरोध प्राप्त गरेका छौं।
                  </p>
                  <div className="mt-5 rounded-xl bg-slate-50 p-4 text-left sm:mt-6 sm:p-5">
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
                    className="mt-6 w-full rounded-full bg-[var(--everest-navy)] px-8 py-3.5 text-sm font-semibold text-white sm:w-auto"
                  >
                    बन्द गर्नुहोस्
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex min-h-0 flex-1 flex-col"
                >
                  <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-5">
                    <div className="space-y-3.5 sm:space-y-4">
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
                          autoComplete="organization"
                          value={form.school}
                          onChange={(e) =>
                            setForm({ ...form, school: e.target.value })
                          }
                          className={inputClass}
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
                          autoComplete="name"
                          value={form.contact}
                          onChange={(e) =>
                            setForm({ ...form, contact: e.target.value })
                          }
                          className={inputClass}
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
                          inputMode="tel"
                          required
                          autoComplete="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className={inputClass}
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
                          inputMode="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className={inputClass}
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
                          className={inputClass}
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
                          rows={2}
                          value={form.features}
                          onChange={(e) =>
                            setForm({ ...form, features: e.target.value })
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="जस्तै: भर्ना फर्म, ग्यालेरी, सूचना बोर्ड..."
                        />
                      </div>
                    </div>

                    {error && (
                      <p className="mt-3 text-sm text-red-600">{error}</p>
                    )}
                  </div>

                  <div className="shrink-0 border-t border-black/5 bg-white px-4 py-3 sm:px-6 sm:py-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--everest-navy)] py-3.5 text-sm font-semibold text-white shadow-lg disabled:opacity-70 sm:py-4 sm:text-base"
                    >
                      {loading ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <FileText className="h-4 w-4" />
                      )}
                      {loading ? "पठाउँदै..." : "Proposal पठाइदिनुहोस्"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
