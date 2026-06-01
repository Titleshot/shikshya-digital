"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { useState } from "react";
import { Lightbox } from "@/components/sunrise/ui/Lightbox";
import { SunriseSectionHeading } from "@/components/sunrise/ui/SunriseSectionHeading";
import { galleryItems } from "@/lib/sunrise/data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export function SunriseGallery() {
  const [lightbox, setLightbox] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section className="bg-slate-50 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SunriseSectionHeading
          eyebrow="ग्यालेरी"
          title="क्याम्पस अनुभव"
          subtitle="कार्यक्रम, उपलब्धि र कलेज जीवन"
        />

        <motion.div
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.title}
              type="button"
              variants={fadeInUp}
              onClick={() => setLightbox({ src: item.image, title: item.title })}
              className={`group relative overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                i === 0 ? "sm:col-span-2 sm:row-span-2 sm:aspect-auto aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <div
                className={`relative w-full ${
                  i === 0 ? "min-h-[280px] sm:min-h-[400px] h-full" : "aspect-[4/3]"
                }`}
              >
                <SharpImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 800px"
                      : "(max-width: 768px) 100vw, 480px"
                  }
                />
                <div className="absolute inset-0 bg-[var(--sunrise-navy)]/0 transition group-hover:bg-[var(--sunrise-navy)]/40" />
                <span className="absolute bottom-4 left-4 font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  {item.title}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.title}
          title={lightbox.title}
          open
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
