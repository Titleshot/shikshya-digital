import type { Metadata } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import { EverestHeader } from "@/components/everest/layout/EverestHeader";
import { EverestFooter } from "@/components/everest/layout/EverestFooter";
import "./everest.css";

const noto = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Everest International School | गुणस्तरीय शिक्षा",
  description:
    "Everest International School — गुणस्तरीय शिक्षा, सुरक्षित वातावरण र आधुनिक सिकाइ। भर्ना खुला छ।",
};

export default function EverestLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`everest-theme ${noto.className} min-h-screen bg-[var(--everest-surface)] text-[var(--everest-ink)]`}>
      <EverestHeader />
      <main>{children}</main>
      <EverestFooter />
    </div>
  );
}
