"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  FlaskConical,
  TrendingUp,
  Users,
  UsersRound,
} from "lucide-react";
import { SunriseSectionHeading } from "@/components/sunrise/ui/SunriseSectionHeading";
import { whySunrise } from "@/lib/sunrise/data";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";

const icons = {
  briefcase: Briefcase,
  users: Users,
  flask: FlaskConical,
  trending: TrendingUp,
  "users-round": UsersRound,
  building: Building2,
};

export function WhySunrise() {
  return (
    <section id="why" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SunriseSectionHeading
          eyebrow="फरक"
          title="किन Sunrise College?"
          subtitle="हामी केवल पढाउँदैनौं — तपाईंको करियर निर्माण गर्छौं।"
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {whySunrise.map((item) => {
            const Icon = icons[item.icon];
            return (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="sunrise-card group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--sunrise-navy)] text-amber-400 transition group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-[var(--sunrise-navy)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--sunrise-navy)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--sunrise-muted)]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
