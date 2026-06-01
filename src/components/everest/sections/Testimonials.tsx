"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { EverestSectionHeading } from "@/components/everest/ui/EverestSectionHeading";
import { testimonials } from "@/lib/everest/data";
import { everestImages } from "@/lib/everest/images";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <EverestSectionHeading
          eyebrow="प्रतिक्रिया"
          title="हाम्रा विद्यार्थी र अभिभावक भन्छन्"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-[var(--everest-navy)] p-8 shadow-2xl sm:p-12">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-white/10" />
            <div className="relative mb-6 flex justify-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-[var(--everest-gold)]">
                <SharpImage
                  src={everestImages.testimonial}
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-6 font-semibold text-[var(--everest-gold)]">
                  {current.name}
                </p>
                <p className="text-sm text-white/60">{current.role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="अघिल्लो"
                onClick={() =>
                  setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
                }
                className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`स्लाइड ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-8 bg-[var(--everest-gold)]" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="अर्को"
                onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
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
