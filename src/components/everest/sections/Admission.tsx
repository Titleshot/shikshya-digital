"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { Check, Send } from "lucide-react";
import { useState } from "react";
import { EverestSectionHeading } from "@/components/everest/ui/EverestSectionHeading";
import { admissionSteps } from "@/lib/everest/data";
import { everestImages } from "@/lib/everest/images";
import { slideFromLeft, slideFromRight, defaultViewport } from "@/lib/animations";

export function Admission() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    class: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admission" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <EverestSectionHeading
          eyebrow="भर्ना"
          title="भर्ना प्रक्रिया"
          subtitle="सजिलो ४ चरणमा — आजै सुरु गर्नुहोस्"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideFromLeft}
          >
            <div className="relative mb-8 aspect-[4/5] max-h-[480px] w-full overflow-hidden rounded-2xl shadow-lg sm:aspect-[3/4]">
              <SharpImage
                src={everestImages.admission}
                alt="भर्ना परामर्श"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <ol className="space-y-4">
              {admissionSteps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-xl border border-black/5 bg-[var(--everest-surface)] p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--everest-navy)] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-1 font-medium text-[var(--everest-navy)]">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideFromRight}
            onSubmit={handleSubmit}
            className="everest-glass rounded-2xl p-6 shadow-xl sm:p-8"
          >
            {submitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--everest-navy)]">
                  धन्यवाद!
                </h3>
                <p className="mt-2 text-[var(--everest-muted)]">
                  तपाईंको सोधपुछ प्राप्त भयो। हामी छिट्टै सम्पर्क गर्नेछौं।
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-6 text-lg font-semibold text-[var(--everest-navy)]">
                  भर्ना सोधपुछ फर्म
                </h3>
                <div className="space-y-4">
                  {[
                    { id: "name", label: "नाम", type: "text", key: "name" as const, placeholder: "विद्यार्थी/अभिभावकको नाम" },
                    { id: "phone", label: "फोन", type: "tel", key: "phone" as const, placeholder: "९८XXXXXXXX" },
                    { id: "class", label: "कक्षा", type: "text", key: "class" as const, placeholder: "भर्ना चाहिएको कक्षा" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="mb-1.5 block text-sm text-[var(--everest-muted)]">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        required
                        value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[var(--everest-teal)] focus:ring-2 focus:ring-[var(--everest-teal)]/20"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--everest-muted)]">
                      सन्देश
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="थप जानकारी..."
                      className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[var(--everest-teal)] focus:ring-2 focus:ring-[var(--everest-teal)]/20"
                    />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--everest-navy)] py-4 font-semibold text-white shadow-lg"
                >
                  <motion.span
                    className="absolute inset-0 bg-[var(--everest-teal)]/40"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  <span className="relative flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Apply Now
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
