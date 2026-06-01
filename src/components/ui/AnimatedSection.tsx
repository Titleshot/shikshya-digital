"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { defaultViewport, fadeInUp } from "@/lib/animations";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
};

export function AnimatedSection({
  children,
  className = "",
  id,
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, defaultViewport);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          ...fadeInUp.visible,
          transition: {
            ...(typeof fadeInUp.visible === "object" &&
            fadeInUp.visible !== null &&
            "transition" in fadeInUp.visible
              ? fadeInUp.visible.transition
              : {}),
            delay,
          },
        },
      }}
    >
      {children}
    </motion.section>
  );
}
