"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { collegeInfo, navLinks } from "@/lib/sunrise/data";

export function SunriseHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--sunrise-navy)]/95 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/sunrise" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-sm font-bold text-[var(--sunrise-navy)]">
            SC
          </span>
          <div>
            <p className="text-sm font-bold text-white">{collegeInfo.name}</p>
            <p className="text-[10px] uppercase tracking-widest text-amber-400/90">
              {collegeInfo.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/75 transition hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <Link href="/" className="text-xs text-white/50 hover:text-white/80">
            ← Shikshya Digital
          </Link>
          <Link
            href="#admission"
            className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-semibold text-[var(--sunrise-navy)] shadow-lg shadow-amber-500/25 transition hover:brightness-110"
          >
            भर्ना जानकारी
          </Link>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="मेनु"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-white/10 bg-[var(--sunrise-navy)] lg:hidden"
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-white/90 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#admission"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-amber-500 py-3 text-center font-semibold text-[var(--sunrise-navy)]"
            >
              भर्ना जानकारी
            </Link>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
