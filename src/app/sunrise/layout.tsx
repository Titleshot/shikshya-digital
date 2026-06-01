import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SunriseHeader } from "@/components/sunrise/layout/SunriseHeader";
import { SunriseFooter } from "@/components/sunrise/layout/SunriseFooter";
import "./sunrise.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunrise College | तपाईंको भविष्यको यात्रा",
  description:
    "Sunrise College — करियर, नेतृत्व र अवसरतर्फको अर्को कदम। Management, Science र IT कार्यक्रम।",
};

export default function SunriseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`sunrise-theme ${inter.variable} ${poppins.className} min-h-screen bg-white text-[var(--sunrise-ink)]`}
    >
      <SunriseHeader />
      <main>{children}</main>
      <SunriseFooter />
    </div>
  );
}
