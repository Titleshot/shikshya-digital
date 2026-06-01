"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks, schoolInfo } from "@/lib/everest/data";

export function EverestHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "everest-glass py-3 shadow-sm" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/everest" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--everest-navy)] text-sm font-bold text-white shadow-md">
            EIS
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-[var(--everest-navy)]">
              {schoolInfo.name}
            </p>
            <p className="text-xs text-[var(--everest-muted)]">{schoolInfo.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--everest-muted)] transition hover:text-[var(--everest-navy)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/"
            className="text-xs text-[var(--everest-muted)] transition hover:text-[var(--everest-navy)]"
          >
            ← Shikshya Digital
          </Link>
          <Link
            href="#admission"
            className="rounded-full bg-[var(--everest-navy)] px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-[var(--everest-navy-light)]"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          aria-label="मेनु"
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="everest-glass border-t lg:hidden"
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 hover:bg-black/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#admission"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--everest-navy)] py-3 text-center text-sm font-medium text-white"
            >
              Apply Now
            </Link>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
