"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { Send, Check } from "lucide-react";
import { useState } from "react";
import { SunriseSectionHeading } from "@/components/sunrise/ui/SunriseSectionHeading";
import { admissionSteps } from "@/lib/sunrise/data";
import { sunriseImages } from "@/lib/sunrise/images";
import { slideFromLeft, slideFromRight, defaultViewport } from "@/lib/animations";

export function SunriseAdmission() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    program: "",
    message: "",
  });

  return (
    <section id="admission" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SunriseSectionHeading
          eyebrow="भर्ना"
          title="भर्ना प्रक्रिया"
          subtitle="चार सरल चरणमा — आफ्नो स्थान सुरक्षित गर्नुहोस्"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideFromLeft}
          >
            <div className="relative mb-8 aspect-[4/5] max-h-[520px] w-full overflow-hidden rounded-2xl shadow-xl sm:aspect-[3/4]">
              <SharpImage
                src={sunriseImages.admission}
                alt="भर्ना"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
            </div>
            <ol className="space-y-4">
              {admissionSteps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-sm font-bold text-[var(--sunrise-navy)]">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-[var(--sunrise-navy)]">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideFromRight}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl"
          >
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[var(--sunrise-navy)]">धन्यवाद!</h3>
                <p className="mt-2 text-[var(--sunrise-muted)]">
                  हामी छिट्टै सम्पर्क गर्नेछौं।
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-6 text-lg font-bold text-[var(--sunrise-navy)]">
                  सोधपुछ फर्म
                </h3>
                <div className="space-y-4">
                  {[
                    { id: "name", label: "नाम", key: "name" as const, type: "text" },
                    { id: "phone", label: "फोन", key: "phone" as const, type: "tel" },
                    {
                      id: "program",
                      label: "रुचि भएको कार्यक्रम",
                      key: "program" as const,
                      type: "text",
                    },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="mb-1 block text-sm text-[var(--sunrise-muted)]">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        required
                        value={form[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={
                          f.key === "phone" ? "९८XXXXXXXX" : f.key === "program" ? "Management / Science / IT" : undefined
                        }
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="msg" className="mb-1 block text-sm text-[var(--sunrise-muted)]">
                      सन्देश
                    </label>
                    <textarea
                      id="msg"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-4 font-bold text-[var(--sunrise-navy)] shadow-lg"
                >
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    animate={{ opacity: [0, 0.4, 0] }}
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
