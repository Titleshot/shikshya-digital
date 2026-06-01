"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    institution: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(51,102,255,0.12), transparent)",
            "radial-gradient(ellipse 70% 50% at 30% 100%, rgba(99,102,241,0.14), transparent)",
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(51,102,255,0.12), transparent)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              तपाईंको विद्यालयको डिजिटल उपस्थिति सुधार गर्न चाहनुहुन्छ?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg leading-relaxed text-muted"
            >
              नि:शुल्क परामर्शमा हामी तपाईंको संस्थाको लागि उपयुक्त योजना
              सुझाउँछौं — कुनै बाध्यता बिना।
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <Button href="#contact-form" variant="primary" pulse>
                नि:शुल्क परामर्श लिनुहोस्
              </Button>
            </motion.div>
          </motion.div>

          <motion.form
            id="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 shadow-xl sm:p-8"
          >
            {submitted ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-ink">धन्यवाद!</h3>
                <p className="mt-2 text-muted">
                  हामी छिट्टै तपाईंसँग सम्पर्क गर्नेछौं।
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-6 text-lg font-semibold text-ink">
                  सम्पर्क फर्म
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                      नाम
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="तपाईंको नाम"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="institution"
                      className="mb-1.5 block text-sm text-muted"
                    >
                      संस्थाको नाम
                    </label>
                    <input
                      id="institution"
                      required
                      value={form.institution}
                      onChange={(e) =>
                        setForm({ ...form, institution: e.target.value })
                      }
                      className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="विद्यालय / कलेजको नाम"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">
                      फोन नम्बर
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="९८XXXXXXXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm text-muted"
                    >
                      सन्देश (वैकल्पिक)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="तपाईंको आवश्यकता..."
                    />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-ink px-6 py-4 font-medium text-white shadow-lg"
                >
                  <motion.span
                    className="absolute inset-0 bg-brand-600/30"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  <span className="relative flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    नि:शुल्क परामर्श लिनुहोस्
                  </span>
                </motion.button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
