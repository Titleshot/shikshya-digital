"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { useState } from "react";
import { EverestSectionHeading } from "@/components/everest/ui/EverestSectionHeading";
import { Lightbox } from "@/components/everest/ui/Lightbox";
import { galleryItems } from "@/lib/everest/data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

export function Gallery() {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  return (
    <section id="gallery" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <EverestSectionHeading
          eyebrow="ग्यालेरी"
          title="विद्यालयका क्षणहरू"
          subtitle="कार्यक्रम, खेलकुद र सिकाइका अविस्मरणीय पलहरू"
        />

        <motion.div
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
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
              onClick={() =>
                setLightbox({ src: item.image, alt: item.title, title: item.title })
              }
              className={`mb-4 block w-full overflow-hidden rounded-2xl break-inside-avoid text-left shadow-md transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--everest-teal)] ${
                i % 3 === 0 ? "" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <SharpImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="font-medium text-white">{item.title}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          title={lightbox.title}
          open={!!lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
