"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  pulse?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-ink text-white shadow-lg shadow-ink/20 hover:shadow-xl hover:shadow-ink/25",
  secondary:
    "glass text-ink hover:bg-white/90 shadow-sm",
  ghost: "text-ink/80 hover:text-ink hover:bg-black/5",
};

export function Button({
  children,
  href,
  variant = "primary",
  pulse = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors sm:px-8 sm:py-4 sm:text-base";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={pulse ? "relative" : ""}
    >
      {pulse && (
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/20 opacity-75" />
      )}
      <Link
        href={href}
        className={`${base} ${variants[variant]} relative ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
