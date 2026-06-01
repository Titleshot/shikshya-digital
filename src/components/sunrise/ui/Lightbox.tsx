"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SharpImage } from "@/components/ui/SharpImage";
import { useEffect } from "react";

type Props = {
  src: string;
  alt: string;
  title: string;
  open: boolean;
  onClose: () => void;
};

export function Lightbox({ src, alt, title, open, onClose }: Props) {
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.92 }}
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-xl bg-[var(--sunrise-navy)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white"
              aria-label="बन्द"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[16/10] w-full min-w-[280px] sm:min-w-[700px]">
              <SharpImage src={src} alt={alt} fill className="object-cover" sizes="1200px" />
            </div>
            <p className="py-3 text-center font-medium text-amber-400">{title}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
