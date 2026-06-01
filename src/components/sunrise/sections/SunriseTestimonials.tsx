"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { SunriseSectionHeading } from "@/components/sunrise/ui/SunriseSectionHeading";
import { testimonials } from "@/lib/sunrise/data";

export function SunriseTestimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5500
    );
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SunriseSectionHeading
          eyebrow="प्रतिक्रिया"
          title="हाम्रा विद्यार्थीहरूको अनुभव"
        />

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-xl sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-amber-500/10" />

            <div className="mb-8 flex justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl ring-4 ring-amber-400/50">
                <SharpImage
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                className="text-center"
              >
                <p className="text-xl leading-relaxed text-[var(--sunrise-navy)] sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-6 font-bold text-amber-600">{current.name}</p>
                <p className="text-sm text-[var(--sunrise-muted)]">{current.role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
                }
                className="rounded-full border border-slate-200 p-2 hover:bg-slate-50"
                aria-label="अघिल्लो"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? "w-8 bg-amber-500"
                        : "w-2 bg-slate-200"
                    }`}
                    aria-label={`${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                className="rounded-full border border-slate-200 p-2 hover:bg-slate-50"
                aria-label="अर्को"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
