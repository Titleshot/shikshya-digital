"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SharpImage } from "@/components/ui/SharpImage";
import { useEffect } from "react";

type LightboxProps = {
  src: string;
  alt: string;
  title: string;
  open: boolean;
  onClose: () => void;
};

export function Lightbox({ src, alt, title, open, onClose }: LightboxProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="बन्द गर्नुहोस्"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[4/3] w-full min-w-[280px] sm:min-w-[600px]">
              <SharpImage src={src} alt={alt} fill className="object-cover" sizes="1200px" />
            </div>
            <p className="px-4 py-3 text-center font-medium text-[var(--everest-navy)]">
              {title}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
