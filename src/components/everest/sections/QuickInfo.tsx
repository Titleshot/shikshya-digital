"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Phone, School } from "lucide-react";
import { quickInfo } from "@/lib/everest/data";

const icons = {
  graduation: GraduationCap,
  map: MapPin,
  school: School,
  phone: Phone,
};

export function QuickInfo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative z-20 -mt-6 mx-5 sm:mx-8"
    >
      <div className="everest-glass mx-auto grid max-w-6xl grid-cols-2 gap-4 rounded-2xl p-5 shadow-xl sm:grid-cols-4 sm:gap-6 sm:p-6">
        {quickInfo.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--everest-navy)]/5 text-[var(--everest-teal)]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-[var(--everest-muted)]">{item.label}</p>
                <p className="text-sm font-semibold text-[var(--everest-navy)]">{item.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
